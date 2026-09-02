import React, { useState } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import CodeBlock from "@theme/CodeBlock";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";

const SNIPPETS = [
  {
    id: "curl",
    label: "curl",
    language: "sh",
    code: `$ curl -X GET https://api.payhere.co/api/v1/plans \\
       -H "Accept: application/json" \\
       -H "Authorization: Bearer \${api_key_here}"`,
  },
  {
    id: "ruby",
    label: "client.rb",
    language: "ruby",
    code: `require "http"

resp = HTTP.auth("Bearer #{api_key_here}")
           .get("https://api.payhere.co/api/v1/plans")

parsed = JSON.parse(resp.body)`,
  },
  {
    id: "embed",
    label: "embed.html",
    language: "html",
    code: `<button data-payhere-embed="https://sandbox.payhere.co/altlabs/coffee">
  Payhere
</button>
<script src="https://payhere.co/embed/embed.js"></script>`,
  },
];

function TerminalCard() {
  const [active, setActive] = useState(SNIPPETS[0].id);
  const snippet = SNIPPETS.find((s) => s.id === active);

  return (
    <div className={styles.terminal}>
      <div className={styles.terminalTop}>
        <span className={styles.terminalDot} />
        <span className={styles.terminalDot} />
        <span className={styles.terminalDot} />
      </div>
      <div className={styles.terminalTabs}>
        {SNIPPETS.map((s) => (
          <button
            key={s.id}
            type="button"
            className={clsx(
              styles.terminalTab,
              s.id === active && styles.terminalTabActive
            )}
            onClick={() => setActive(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div className={styles.terminalBody}>
        <CodeBlock language={snippet.language}>{snippet.code}</CodeBlock>
      </div>
    </div>
  );
}

const ROUTES = [
  {
    eyebrow: "Route 01 · No code",
    title: "Send a payment link",
    description:
      "Email a link or drop it on your site. The fastest way to start accepting payments, no code required.",
    effort: "None",
    to: "/docs/link",
  },
  {
    eyebrow: "Route 02 · Add to your site",
    title: "Embed checkout",
    description:
      "Launch a Payhere checkout over your existing page with a script tag. Your site stays visible the whole time.",
    effort: "Light",
    to: "/docs/embed-sdk",
  },
  {
    eyebrow: "Route 03 · Build something custom",
    title: "Build with the API",
    description:
      "Full control over payments, plans, subscriptions and refunds from your own backend.",
    effort: "Developer",
    to: "/docs/api-reference/payhere-rest-api",
  },
];

const QUICK_LINKS = [
  {
    title: "React SDK",
    meta: "Embed checkout in a React, Gatsby or Next.js app",
    to: "/docs/react-sdk",
  },
  {
    title: "Webhooks",
    meta: "Get notified the moment something happens",
    to: "/docs/webhooks",
  },
  {
    title: "REST Hooks",
    meta: "Let platforms subscribe to your events",
    to: "/docs/resthooks",
  },
  {
    title: "Testing",
    meta: "Try your integration in the sandbox first",
    to: "/docs/testing",
  },
];

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroInner}>
        <div>
          <p className={styles.eyebrow}>Payhere for developers</p>
          <h1 className={styles.heroTitle}>Build with Payhere.</h1>
          <p className={styles.heroSubtitle}>
            Payment links, embeddable checkout, or a full API integration —
            pick a route and ship in minutes.
          </p>
          <div className={styles.heroActions}>
            <Link className={styles.primaryButton} to="/docs/intro">
              Get started
            </Link>
            <Link
              className={styles.secondaryButton}
              to="/docs/api-reference/payhere-rest-api"
            >
              API reference
            </Link>
          </div>
        </div>
        <TerminalCard />
      </div>
    </header>
  );
}

function Routes() {
  return (
    <section className={styles.routes}>
      <div className={styles.sectionInner}>
        <p className={styles.eyebrow}>Choose your route</p>
        <h2 className={styles.sectionTitle}>
          Meet your stack where it already is.
        </h2>
        <div className={styles.routeGrid}>
          {ROUTES.map((route) => (
            <Link key={route.to} to={route.to} className={styles.routeCard}>
              <p className={styles.routeEyebrow}>{route.eyebrow}</p>
              <h3 className={styles.routeTitle}>{route.title}</h3>
              <p className={styles.routeDescription}>{route.description}</p>
              <div className={styles.routeMeta}>
                <span>Effort: {route.effort}</span>
                <span className={styles.routeArrow}>Read the docs →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickLinks() {
  return (
    <section className={styles.quickLinks}>
      <div className={styles.sectionInner}>
        <p className={styles.eyebrow}>Go deeper</p>
        <h2 className={styles.sectionTitle}>More in the docs.</h2>
        <div className={styles.linkGrid}>
          {QUICK_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className={styles.linkCard}>
              <div className={styles.linkCardTitle}>{link.title}</div>
              <div className={styles.linkCardMeta}>{link.meta}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function Closing() {
  return (
    <section className={styles.closing}>
      <div className={styles.sectionInner}>
        <h2 className={styles.closingTitle}>
          Ready to <span className={styles.closingAccent}>get paid</span>?
        </h2>
        <p className={styles.closingSubtitle}>
          Create a free account and connect your first payment link in under
          five minutes.
        </p>
        <div className={styles.heroActions}>
          <Link className={styles.primaryButton} to="/docs/intro">
            Read the docs
          </Link>
          <a
            className={styles.secondaryButton}
            href="https://app.payhere.co/signups/new"
          >
            Create a free account
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Payment links, embeddable checkout, or a full API integration with Payhere."
    >
      <Hero />
      <Routes />
      <QuickLinks />
      <Closing />
    </Layout>
  );
}
