import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

function HomeSplash() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div className="homeContainer">
      <div className="homeSplashFade">
        <div className="wrapper homeWrapper">
          <div className="inner">
            <h2 className="projectTitle">
              <img src={useBaseUrl("img/payhere-blue.svg")} width="200" alt="Payhere" />
              <small>{siteConfig.tagline}</small>
            </h2>
            <div className="section promoSection">
              <div className="promoRow">
                <div className="pluginRowBlock">
                  <div className="pluginWrapper buttonWrapper">
                    <Link className="button" to="/docs/intro">
                      Documentation
                    </Link>
                  </div>
                  <div className="pluginWrapper buttonWrapper">
                    <a
                      className="button"
                      href="https://app.payhere.co/signups/new"
                    >
                      Get an account for free
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomeSplash />
    </Layout>
  );
}
