// 插件配置, 详见 https://v1.vuepress.vuejs.org/zh/plugin/using-a-plugin.html

import { UserPlugins } from "vuepress/config";
import fs from "fs";
import { resolve } from "path";

// hostname 修改 public/CNAME 文件即可
const hostname = `https://${fs.readFileSync(
  resolve(__dirname, "../public", "CNAME")
)}`;

// 配置插件，推荐使用 Babel 式, 根据自己插件情况修改插件配置
export default <UserPlugins>[
  ["sitemap", { hostname }],
  // [
    // "smplayer",
    // {
      // artplayer: {
        // src: {
          // playbackRate: true,
          // whitelist: ["*"],
        // },
      // },
    // },
  // ],
  ["pangu"],
  [
    "one-click-copy",
    {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside',
      ],
      copyMessage: "复制成功",
      duration: 1000,
      showInMobile: false,
    },
  ],
  [
    "zooming",
    {
      selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
      options: {
        bgColor: "rgba(0,0,0,0.6)",
      },
    },
  ],
  ["fulltext-search"],
  // ['@maginapp/vuepress-plugin-katex',
	// {
	  // delimiters: 'dollars'
	// }
  // ],
];
