import { defineUserConfig } from "@vuepress/cli";
// import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";
import { redirectPlugin } from "vuepress-plugin-redirect";
import fullTextSearchPlugin from "vuepress-plugin-full-text-search2";

export default defineUserConfig({
  title: "北辞",
  dest: "dist",
  lang: "zh-CN",
  base: '/',
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!.obsidian', '!templates'],
  theme,
  shouldPrefetch: false,
  plugins: [
    // searchPlugin({
    //   maxSuggestions: 10
    // }),
    redirectPlugin({
      // 配置选项
      hostname: 'https://northword.cn',
      config: {
        '/dft-learning/pages/9810fa/': '/docs/pages/9810fa/'
      }
    }),
    // fullTextSearchPlugin({
    //   locales: {
    //     '/': {
    //       placeholder: 'Search',
    //     },
    //     '/zh/': {
    //       placeholder: '搜索',
    //     },
    //   },
    // }),
  ],
});
