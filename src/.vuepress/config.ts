import { defineUserConfig } from "@vuepress/cli";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";
import { redirectPlugin } from "vuepress-plugin-redirect";

export default defineUserConfig({
  title: "北辞",
  dest: "dist",
  lang: "zh-CN",
  base: '/',
  theme,
  shouldPrefetch: false,
  plugins: [
    searchPlugin({
      maxSuggestions: 10
    }),
    redirectPlugin({
      // 配置选项
    }),
  ],
});
