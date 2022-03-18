// 示例全部使用 .ts 配置, 详见说明 https://v1.vuepress.vuejs.org/zh/guide/typescript-as-config.html

import { defineConfig4CustomTheme } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
import themeConfig from "./config/themeVdoingConfig";
import markdown from "./config/markdown";
import plugins from "./config/plugins";
import head from "./config/head";

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  title: "计算模拟学习笔记",
  description: "「能源环境材料计算模拟」方法课程学习与实践笔记，内容包括 Linux基础命令、PBS作业管理系统、VASP、VASPKIT、Materials Studio 等。", 
  dest: "dist", //输出目录, 默认是 dist,无需修改
  base: "/dft-learning/", //部署站点的基础路径, 默认是 /, 不懂不要开启
  shouldPrefetch: () => false, //是否开启预加载, 建议不开启, 无需修改
  head: head, //全局头部信息配置, 如需修改请修改 config/head.ts
  theme: "vdoing", //主题, 无需修改
  themeConfig, //主题配置, 如需修改请修改 config/themeVdoingConfig.ts
  markdown, //markdown 相关配置, 如需修改请修改 config/markdown.ts
  plugins, //插件配置, 如需修改请修改 config/plugins.ts
});
