import { existsSync } from "node:fs";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

import YAML from "yaml";

const DEFAULT_SPEC_URL =
  "https://sandbox.payhere.co/openapi/public_v1.yaml";
const specUrl = process.env.OPENAPI_SPEC_URL || DEFAULT_SPEC_URL;
const checkOnly = process.argv.includes("--check");
const scriptDirectory = path.dirname(fileURLToPath(import.meta.url));
const snapshotPath = path.resolve(
  scriptDirectory,
  "../openapi/public_v1.yaml",
);

function canonicalize(value) {
  if (Array.isArray(value)) {
    return value.map(canonicalize);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.keys(value)
        .sort()
        .map((key) => [key, canonicalize(value[key])]),
    );
  }

  return value;
}

function semanticSignature(source, label) {
  let document;

  try {
    document = YAML.parse(source);
  } catch (error) {
    throw new Error(`${label} is not valid YAML: ${error.message}`);
  }

  if (document?.openapi !== "3.1.0") {
    throw new Error(
      `${label} declares OpenAPI ${document?.openapi ?? "unknown"}; expected 3.1.0`,
    );
  }

  return JSON.stringify(canonicalize(document));
}

const response = await fetch(specUrl, {
  headers: { Accept: "application/yaml, text/yaml;q=0.9" },
});

if (!response.ok) {
  throw new Error(
    `Unable to download ${specUrl}: ${response.status} ${response.statusText}`,
  );
}

const downloadedSource = await response.text();
const downloadedSignature = semanticSignature(downloadedSource, specUrl);
let currentSignature;

if (existsSync(snapshotPath)) {
  const currentSource = await readFile(snapshotPath, "utf8");
  currentSignature = semanticSignature(currentSource, snapshotPath);
}

if (downloadedSignature === currentSignature) {
  console.log("OpenAPI snapshot is already current.");
  process.exit(0);
}

if (checkOnly) {
  console.error("OpenAPI snapshot differs from the deployed sandbox contract.");
  process.exit(1);
}

await mkdir(path.dirname(snapshotPath), { recursive: true });
const temporaryPath = `${snapshotPath}.${process.pid}.tmp`;
const normalizedSource = downloadedSource.endsWith("\n")
  ? downloadedSource
  : `${downloadedSource}\n`;

await writeFile(temporaryPath, normalizedSource, "utf8");
await rename(temporaryPath, snapshotPath);

console.log(`Updated ${path.relative(process.cwd(), snapshotPath)} from ${specUrl}.`);
