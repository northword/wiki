// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: '首页', link: '/' },
  { text: '理论', link: '/pages/77a22e/' },
  { text: '安装', link: '/contents/install/' },
  { text: 'Linux', link: '/pages/9810fa/' },
  { text: 'MatStudio', link: '/pages/2e10d2/' },
  { text: 'VASP', link: '/contents/vasp/' },
  { text: '更多', items: [
    { text: '其他内容', items: [
      { text: '其他软件', link: '/pages/c0ca29/' },
      { text: '异常解决', link: '/contents/others/' }
    ]},
    { text: '索引', items: [
      { text: '分类', link: '/categories/' },
      { text: '归档', link: '/archives/' }
    ]},
  ]}
];
