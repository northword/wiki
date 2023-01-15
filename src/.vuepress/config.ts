import { defineUserConfig } from "@vuepress/cli";
import theme from "./theme";
// import { redirectPlugin } from "vuepress-plugin-redirect";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  title: "北辞",
  dest: "dist",
  lang: "zh-CN",
  base: '/',
  pagePatterns: ['**/*.md', '!.vuepress', '!node_modules', '!.obsidian', '!templates', '!research', '!tmp'],
  theme,
  shouldPrefetch: false,
  // permalinkPattern: 'posts/:slug/',
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      customFields: [
        {
          getter: (page) => page.frontmatter.category,
          formatter: "分类：$content",
        },
        {
          getter: (page) => page.frontmatter.tag,
          formatter: "标签：$content",
        },
      ],
    }),
  ],
});
