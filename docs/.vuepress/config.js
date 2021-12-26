const moment = require('moment');
moment.locale("zh-cn");


module.exports = {
    base: "/docs/",
    title: "罪亦为原罪",
    description: "知行合一",
    head: [
        ['link', { rel: 'icon', href: '/ac.svg' }],
        ['meta', { name: 'author', content: '罪亦为原罪' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍, vuepress 说明,罪亦为原罪' }]
    ],

    plugins: [
        [
          '@vuepress/last-updated',
          {
            transformer: (timestamp) =>{
              return moment(timestamp).format("LLLL")
            }
          }
        ]
    ],
    themeConfig: {
      lastUpdated: '更新时间',
      logo: '/assets/img/hero.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        
        {
            text: 'Languages',
            items: [
              { text: 'Group1', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] },

              { text: 'Group2', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] }
            ]
        },
        
        { text: 'External', link: 'https://google.com' },
      ],
    //   sidebar: [
    //       '',
    //       'about',
    //       'about1',
    //       {
    //         title: '美丽的css',   // 必要的
    //         path: '/css/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //         collapsable: false, // 可选的, 默认值是 true,
    //         sidebarDepth: 1,    // 可选的, 默认值是 1
    //         children: [
    //           '/css/c-aaa',
    //           '/css/c-bbb', 
    //           '/css/c-ccc',
    //         ]
    //       },
    //   ]
      sidebar:{
          "/css/" : [
            'c-aaa',
            'c-bbb',
            'c-ccc'
          ],
          "/javasrcipt/" : [
            'j-aaa',
            'j-bbb',
            'j-ccc'
          ]
      }
    }
  }