// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "北辞",
  tagline: "北辞の窝 ✨",
  url: "https://northword.cn",
  baseUrl: "/",
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'northword', // Usually your GitHub org/user name.
  projectName: 'wiki', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          path: 'docs',
          exclude: ['**/blog/**', '**/templates/**'],
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        // blog: false,
        blog: {
          blogTitle: "Northword`s Blog",
          blogDescription: "北辞の窝 ✨",
          path: "blog",
          blogSidebarCount: 7,
          blogSidebarTitle: "文章",
          showReadingTime: true,
          feedOptions: {
            title: "Northword`s Blog",
            description: "北辞の窝 ✨",
            type: 'all',
            copyright: `Copyright © 2018-${new Date().getFullYear()} Northword.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  plugins: [
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "dft",
    //     path: "dft-learning",
    //     routeBasePath: "dft-learning",
    //     sidebarPath: require.resolve("./sidebars.js"),
    //     editUrl: "https://git.7wate.com/zhouzhongping/wiki/src/branch/master",
    //     showLastUpdateAuthor: true,
    //     showLastUpdateTime: true,
    //     breadcrumbs: true,
    //   },
    // ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // announcementBar: {
      //   id: 'support_us',
      //   content:
      //     'Always For Freedom. The site by Northword.',
      //   backgroundColor: '#fafbfc',
      //   textColor: '#091E42',
      //   isCloseable: false,
      // },
      metadata: [
        {
          name: "keywords",
          content: "northword, wiki, blog, vasp, linux, pbs, python, zotero",
        },
      ],
      navbar: {
        title: "北辞",
        hideOnScroll: false,
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo_dark.svg',
          href: 'https://northword.cn',
          target: '_self',
          width: 32,
          height: 32,
        },
        items: [
          { to: "/", label: "🏠 首页", position: "right", activeBaseRegex: '/$',},
          { to: "/blog", label: "👨🏻‍🎓 博客", position: "right" },
          {
            position: "right",
            label: "📙 维基",
            items: [
              {
                label: "理论计算",
                to: "/dft-learning",
              },
              {
                label: "材料表征",
                to: "/characterization",
              },
              {
                label: "其他文档",
                to: "/docs",
              },
            ],
          },
          {
            position: "right",
            label: "⚙️ 工具",
            items: [
              {
                label: "订阅转换工具",
                href: "https://northword.github.io/sub-web/",
              },
              {
                label: "Aria2 WebUI",
                href: "https://aria2.northword.cn/",
              },
              {
                label: "OneDrive 外链生成",
                href: "https://blog.northword.cn/GetOneDriveDirectLink/",
              },
            ]
          },
          {
            href: 'https://github.com/northword/wiki',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // algolia: {
      //   apiKey: "5d5a02bdf02df700355c8ccd84b78d13",
      //   appId: "8W3YJXJGF2",
      //   indexName: "wiki",
      // },
      footer: {
        style: "dark",
        copyright: `晋 ICP 备 18010037 号 | Copyright © 2018-${new Date().getFullYear()} Northword | Built with <a href="https://www.docusaurus.cn/" target="_blank" rel="noopener noreferrer">Docusaurus</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: "markdown",
        additionalLanguages: ["bash", "python"],
      },
    }),
};

module.exports = config;
