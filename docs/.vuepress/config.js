const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  title: "计算模拟学习笔记",
  description: "「能源环境材料计算模拟」方法课程学习与实践笔记，内容包括 Linux基础命令、PBS作业管理系统、VASP、VASPKIT、Materials Studio 等。", // 描述,以 <meta> 标签渲染到页面html中
  base: '/dft-learning/',          // '/<github仓库名>/'， 默认'/'
  host: 'localhost',
  extraWatchFiles: [
    '.vuepress/config/nav.js', 
    '.vuepress/config/head.js',
    '.vuepress/config/themeConfig.js',
  ],
  markdown: {
    lineNumbers: true,             // 代码行号
  },

  theme: 'vdoing', // 使用依赖包主题
  //theme: require.resolve('../../theme-vdoing'), // 使用本地主题

  head,
  plugins,
  themeConfig,


  // configureWebpack: {
  //   //webpack别名 如![Image from alias](~@alias/image.png)
  //   resolve: {
  //     alias: {
  //       '@alias': 'path/to/some/dir'
  //     }
  //   }
  // }
}
