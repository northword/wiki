import { defineUserConfig } from "@vuepress/cli";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme";

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
  ],
});
