import { hopeTheme } from "vuepress-theme-hope";


export default hopeTheme({
  hostname: "https://northword.cn",

  author: {
    name: "Northword",
    url: "https://northword.cn",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",
  iconPrefix: "iconfont icon-",

  logo: "/logo.png",

  repo: "https://github.com/northword/wiki",

  repoDisplay: true,

  docsDir: "src",

  displayFooter: true,
  copyright: "Copyright © 2022-Present Northword",

  navbar: [
    "/",
    {
      text: "科研",
      icon: "wiki",
      children: ["dft-learning", "dft-learning"],
    },
    {
      text: "编程笔记",
      icon: "code",
      link: "/code/",
    },
    {
      text: "存档",
      icon: 'timeline',
      link: "/timeline/",
    },
  ],

  sidebar: {
    "/dft-learning/": "structure",

    "/bar/": "structure",

    // fallback
    "/": [
      "",
    ],
  },


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
