/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
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
        "mcp",
        "webhooks",
        "resthooks",
        "wix-embed-sdk",
      ],
    },
    {
      type: "category",
      label: "API",
      items: [
        "api-auth",
        {
          type: "category",
          label: "/v1/current_company",
          items: [
            "api-current-company-show",
            "api-current-company-update",
            "api-current-company-stats",
          ],
        },
        {
          type: "category",
          label: "/v1/customers",
          items: ["api-customers", "api-customer-show"],
        },
        {
          type: "category",
          label: "/v1/payments",
          items: ["api-payments", "api-payment-show"],
        },
        {
          type: "category",
          label: "/v1/plans",
          items: ["api-plans", "api-plans-create", "api-plans-update"],
        },
        {
          type: "category",
          label: "/v1/refunds",
          items: ["api-refunds"],
        },
        {
          type: "category",
          label: "/v1/subscriptions",
          items: [
            "api-subscriptions",
            "api-subscription-show",
            "api-subscription-destroy",
          ],
        },
        {
          type: "category",
          label: "/v1/user",
          items: ["api-user"],
        },
      ],
    },
  ],
};

module.exports = sidebars;
