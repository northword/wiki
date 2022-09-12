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
  copyright: "Copyright © 2022-Present Northword",

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
          link: "/characterize/",
        },
        {
          text: "代码",
          icon: "code",
          link: "/docs/",
        },
        {
          text: "Zotero 使用手册",
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
  ],

  sidebar: {
    "/dft-learning/": "structure",
    "/docs/": "structure",
    "/blog/": "structure",

    // fallback
    // "/": [
    //   "",
    // ],
  },

  sidebarSorter:["readme", "order", "file-number"],

  plugins: {
    blog: true,

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
    },

  },
  blog:{
    // sidebarDisplay: 'none',
    articlePerPage: 10,
  },
  // pure: true,
});
