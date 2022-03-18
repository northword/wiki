// 配置说明 https://v1.vuepress.vuejs.org/zh/config/#markdown

import { MarkdownConfig } from "vuepress/config";

export default <MarkdownConfig>{
  lineNumbers: true,
  plugins: [
    "markdown-it-sub",
    "markdown-it-sup",
    "markdown-it-footnote",
    "markdown-it-task-lists",
    "markdown-it-imsize",
    "markdown-it-mathjax3",
  ],
  extendMarkdown: (md) => {
    md.set({ breaks: true });
  },
};
