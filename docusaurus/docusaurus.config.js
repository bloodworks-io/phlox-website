import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Phlox Docs",
  tagline: "Documentation for Phlox — the local-first, open-source AI scribe",
  favicon: "img/phlox_icon.png",

  url: "https://phlox.bloodworks.io",
  baseUrl: "/docs/",
  // trailingSlash left undefined (default): emits directory-style index.html
  // files, which GitHub Pages serves correctly (e.g. /docs/setup/index.html)

  organizationName: "bloodworks-io",
  projectName: "phlox",

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
          // Serve the docs at the baseUrl root (phlox.bloodworks.io/docs/)
          routeBasePath: "/",
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/bloodworks-io/phlox-website/tree/main/docusaurus/docs/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Phlox Docs",
        logo: {
          alt: "Phlox",
          src: "img/phlox_icon.png",
          href: "/",
          target: "_self",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "docs",
            position: "left",
            label: "Documentation",
          },
          {
            href: "/",
            label: "Main Site",
            position: "right",
            target: "_self",
          },
          {
            href: "https://github.com/bloodworks-io/phlox",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              { label: "Overview", to: "/" },
              { label: "Setup", to: "/setup" },
              { label: "Architecture", to: "/architecture" },
            ],
          },
          {
            title: "Project",
            items: [
              { label: "Main Site", href: "/" },
              {
                label: "GitHub",
                href: "https://github.com/bloodworks-io/phlox",
              },
              {
                label: "Releases",
                href: "https://github.com/bloodworks-io/phlox/releases",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Bloodworks. Phlox is MIT licensed.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
