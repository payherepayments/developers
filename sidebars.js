/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const apiReferenceSidebar = require("./docs/api-reference/sidebar.ts").default;

const sidebars = {
  docs: [
    {
      type: "category",
      label: "Overview",
      items: ["intro", "testing"],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "link",
        "payment-button-js",
        "react-sdk",
        "embed-sdk",
        "webhooks",
        "resthooks",
        "wix-embed-sdk",
      ],
    },
    {
      type: "category",
      label: "API",
      link: {
        type: "generated-index",
        title: "PayHere REST API Reference",
        description:
          "Generated from the OpenAPI contract published by the PayHere API.",
        slug: "/category/api-reference",
      },
      items: apiReferenceSidebar,
    },
  ],
};

module.exports = sidebars;
