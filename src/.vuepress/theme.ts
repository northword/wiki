import { hopeTheme } from "vuepress-theme-hope";


export default hopeTheme({
  hostname: "https://northword.cn",

  author: {
    name: "Northword",
    url: "https://northword.cn",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/assets/img/logo.png",

  repo: "https://github.com/northword/wiki",

  repoDisplay: true,

  docsDir: "src",

  displayFooter: true,
  footer: "晋 ICP 备 18010037 号-1",
  copyright: "Copyright © 2022-Present Northword",

  darkmode: "auto",

  navbar: [
    "/",
    {
      text: "维基",
      icon: "read",
      children: [
        {
          text: "理论计算",
          icon: "shell",
          link: "/dft-learning/",
        },
        {
          text: "材料表征",
          icon: "relation",
          link: "/characterization/",
        },
        {
          text: "文档",
          icon: "code",
          link: "/docs/",
        },
        {
          text: "Zotero 使用手册",
          icon: "study",
          link: "https://zotero-cn.github.io/zotero/",
        },
      ],
    },
    {
      text: "博客",
      icon: "blog",
      link: "/blog/",
    },
    {
      text: "归档",
      icon: 'time',
      link: "/timeline/",
    },
    {
      text: "工具",
      icon: 'tool',
      children: [
        {
          text: "订阅转换工具",
          icon: "anonymous",
          link: "https://northword.github.io/sub-web/",
        },
        {
          text: "Aria 2 WebUI",
          icon: "install",
          link: "https://aria2.northword.cn",
        },
      ],
    },
  ],

  sidebar: {
    "/dft-learning/": "structure",
    "/docs/": "structure",
    "/blog/": "structure",
    "/characterization/": "structure",
    // fallback
    "/": [
      '',
      "structure",
    ],
  },

  sidebarSorter:["readme", "order", "file-number"],

  plugins: {
    blog: {
      autoExcerpt: false,
    },

    // feed: {
    //   atom: true,
    //   json: true,
    //   rss: true,
    // },

    mdEnhance: {
      align: true,
      // codetabs: true,
      // demo: true,
      flowchart: true,
      footnote: true,
      imageMark: true,
      presentation: true,
      sub: true,
      sup: true,
      tex: true,
      vpre: true,
      mermaid: true,
    },
  },
  blog:{
    // sidebarDisplay: 'none',
    articlePerPage: 10,
  },
  // pure: true,
});
