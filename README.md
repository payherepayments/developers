# Payhere Developer Docs

Built with [Docusaurus 3](https://docusaurus.io/).

## Local development

```
yarn install
yarn start
```

Starts a local dev server at `http://localhost:3000` with hot reload.

The start command regenerates the API reference from the checked-in OpenAPI
snapshot before launching Docusaurus.

## API reference

The generated API reference uses [`openapi/public_v1.yaml`](openapi/public_v1.yaml),
which is synchronized from the public sandbox contract:

```sh
yarn api:sync      # Download the sandbox contract when it changed semantically
yarn api:lint      # Validate the checked-in OpenAPI document
yarn api:generate  # Rebuild docs/api-reference locally
```

Files under `docs/api-reference` are generated and gitignored. CI regenerates
them before every build. The scheduled OpenAPI sync workflow opens a pull
request when the deployed sandbox contract changes.

Legacy hand-written API URLs are preserved as `301` redirects in `vercel.json`.
Keep that map updated if a generated operation ID—and therefore its URL—changes.

## Build

```
yarn build
```

Generates static content into the `build` directory, ready to be served.

Hosted on Vercel; pushes to the deploy branch trigger a build automatically.
