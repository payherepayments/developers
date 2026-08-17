// @ts-check
const { themes: prismThemes } = require("prism-react-renderer");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Developers",
  tagline: "Developers",
  favicon: "img/favicon.png",

  url: "https://developers.payhere.co",
  baseUrl: "/",

  organizationName: "payherepayments",
  projectName: "developers",

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "docs",
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/open-graph.png",
      navbar: {
        title: "Developers",
        logo: {
          alt: "Payhere",
          src: "img/payhere-blue-stamp.svg",
          srcDark: "img/payhere-white-stamp.svg",
        },
        items: [
          { to: "/docs/intro", label: "Docs", position: "left" },
          { to: "/help", label: "Help", position: "left" },
          { to: "/blog", label: "Blog", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Payhere",
          src: "img/payhere-white-stamp.svg",
          href: "/",
        },
        links: [
          {
            title: "Docs",
            items: [
              { label: "Getting Started", to: "/docs/intro" },
              { label: "Embed SDK", to: "/docs/embed-sdk" },
              { label: "API Reference", to: "/docs/api-auth" },
            ],
          },
          {
            title: "Payhere",
            items: [
              { label: "Help", to: "/help" },
              { label: "Signup free", href: "https://app.payhere.co/signups/new" },
              { label: "Features", href: "https://payhere.co/features/" },
            ],
          },
          {
            title: "More",
            items: [
              { label: "Our Blog", href: "https://payhere.co/blog/" },
              { label: "GitHub", href: "https://github.com/payherepayments" },
              { label: "Twitter", href: "https://twitter.com/payherepayments" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Payhere Payments Ltd`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
