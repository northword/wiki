const pluginConf = require('./config/pluginConf.js');
const navConf = require('./config/navConf.js');
//const sidebarConf = require('./config/sidebarConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
  title: '计算模拟学习笔记',
  description: '计算模拟学习笔记，VuePress文档',
  head: headConf,
  base: "/computation-simulation/",
  plugins: pluginConf,
  themeConfig: {
    lastUpdated: '上次更新',
    repo: 'northword/MatCalc',
    editLinks: true,
    editLinkText: '编辑文档！',
    docsDir: 'MatCalc.book',
    nav: navConf,
	//sidebar: sidebarConf
  },
  markdown: {
	lineNumbers: true
  },
}