const moment = require('moment');
moment.locale("zh-cn");


module.exports = {
   
    title: "罪亦为原罪",
    description: "知行合一",
    head: [
        ['link', { rel: 'icon', href: '/ac.svg' }],
        ['meta', { name: 'author', content: '罪亦为原罪' }],
        ['meta', { name: 'keywords', content: 'vuepress 介绍, vuepress 说明,罪亦为原罪' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
    ],

    plugins: [
        [
          '@vuepress/last-updated', {
            transformer: (timestamp) =>{
              return moment(timestamp).format("LLLL")
            }
          }
        ],
        [
          '@vuepress/pwa', {
                    serviceWorker: true,
                    updatePopup: {
                    message: "发现新内容可用",
                    buttonText: "刷新"
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