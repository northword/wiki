module.exports = [
  { text: '首页', link: '/' },
  { text: '理论', link: '/01-Theory/' },
  { text: '安装', link: '/02-Install/' },
  { text: 'Linux', link: '/03-Linux/' },
  { text: 'MatStudio', link: '/04-Materials-studio/' },
  { text: 'VASP', link: '/05-VASP/' },

  { text: '其他', items: [
    { text: '其他软件', link: '/06-Other APP/' },
    { text: '异常解决', link: '/09-Others/' },
  ]}
  
  
  
	{
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],

      // fallback
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
];