import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

const supportLinks = [
  {
    title: "Browse Docs",
    content: (
      <>
        Learn more using the <Link to="/docs/intro">documentation on this site.</Link>
      </>
    ),
  },
  {
    title: "Stay up to date",
    content: (
      <>
        Find out <Link to="/blog">what&rsquo;s new for Payhere developers</Link>
      </>
    ),
  },
  {
    title: "Have a question",
    content: (
      <>
        Ask questions about the documentation and integrations using intercom
        messenger in your{" "}
        <a href="https://app.payhere.co/users/sign_in">merchant admin</a>
      </>
    ),
  },
];

export default function Help() {
  return (
    <Layout title="Help">
      <div className="docMainWrapper wrapper">
        <div className="mainContainer documentContainer postContainer">
          <div className="post">
            <header className="postHeader">
              <h1>Need help?</h1>
            </header>
            <div className="gridBlock threeColumn">
              {supportLinks.map((link) => (
                <div className="blockElement threeColumn" key={link.title}>
                  <h2>{link.title}</h2>
                  <div>{link.content}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
