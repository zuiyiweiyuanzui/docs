/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "943cf2abd4779080d83dd0da91cf9d7b"
  },
  {
    "url": "about.html",
    "revision": "c5c616a06d3db0b42d997048403697ab"
  },
  {
    "url": "about1.html",
    "revision": "9db35f626b63d746a22a16c959a39135"
  },
  {
    "url": "ac.svg",
    "revision": "786e61a75e3944f2dbca3daf8f31f3ed"
  },
  {
    "url": "assets/css/0.styles.158ccfcd.css",
    "revision": "3438389bda47e25fee55e10d53a5f0a3"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.129c57e2.js",
    "revision": "2dd94aa5a67195d35b516772aee956b8"
  },
  {
    "url": "assets/js/11.42cb6ec7.js",
    "revision": "3055593a51be790e2e6a60074a4f0fc5"
  },
  {
    "url": "assets/js/12.f4bd7650.js",
    "revision": "0a97c1afbf072c64a3127a8001048e3f"
  },
  {
    "url": "assets/js/13.af5748a8.js",
    "revision": "786341e20bff73f4aa83ddc1d46cbda4"
  },
  {
    "url": "assets/js/14.09817648.js",
    "revision": "d453569fd4079f2c8f21bac486f59189"
  },
  {
    "url": "assets/js/15.112c8f49.js",
    "revision": "3ae40896560b1861aae974a5d3462ac7"
  },
  {
    "url": "assets/js/16.601c7762.js",
    "revision": "d670ad3b2669813f28b31122daf7dc39"
  },
  {
    "url": "assets/js/17.b3627c00.js",
    "revision": "01ce81adc75771130c97349dd951ce8f"
  },
  {
    "url": "assets/js/18.af769228.js",
    "revision": "ec9c6e99b883f4698171262e5a061304"
  },
  {
    "url": "assets/js/19.04ab043e.js",
    "revision": "bd7d9a43bc83599d68880b3e7ccdd225"
  },
  {
    "url": "assets/js/2.364e9582.js",
    "revision": "088f847a5eb136cf1b0b6f49179e4d88"
  },
  {
    "url": "assets/js/20.3e4dd2f1.js",
    "revision": "28801597cefb180ff45f5d7e9fc7a3fd"
  },
  {
    "url": "assets/js/21.1f6361a6.js",
    "revision": "ff1be0745291c297c6de5a88b63b8dba"
  },
  {
    "url": "assets/js/3.75ee2376.js",
    "revision": "fa754343a8b603c113d252fbf8c36fc1"
  },
  {
    "url": "assets/js/4.ec79ac09.js",
    "revision": "b885b0d32b91c7b13c5a9a6251c46d64"
  },
  {
    "url": "assets/js/5.b8745181.js",
    "revision": "5e693886fea6d1b341f2852242de7cd3"
  },
  {
    "url": "assets/js/6.807d1b16.js",
    "revision": "03057449698d5cca00ecc0c0217687c2"
  },
  {
    "url": "assets/js/7.fa5fb5d9.js",
    "revision": "a22c787bfdd923ca7427d1d2283e3d79"
  },
  {
    "url": "assets/js/8.81cb86e2.js",
    "revision": "8049892aad878be038ef7c1532e9f573"
  },
  {
    "url": "assets/js/9.370b6c7c.js",
    "revision": "c00eafb2a57e7b28cdf04a53239ae84d"
  },
  {
    "url": "assets/js/app.3d2c613e.js",
    "revision": "3b47025a0fccf8d12e1e1715b176a0fa"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "e68c9966fc1ef84080e0c9c8c015f87b"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "7b563898235510d5d259bba6c1847193"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "4e27d2aa89cb434533d24afc89b5fe3f"
  },
  {
    "url": "css/index.html",
    "revision": "b5d80b14ee5e5d9dbb276f64c8757806"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f78c0251d6ddd56ee219a1830ded71b4"
  },
  {
    "url": "index.html",
    "revision": "e0faa61400c3d9bc838a45dd6b6da950"
  },
  {
    "url": "javasrcipt/index.html",
    "revision": "5d7266bc88aff1c2221fdd9dc8fa9bcd"
  },
  {
    "url": "javasrcipt/j-aaa.html",
    "revision": "ebdcb2fb606a98a287b853f171199e17"
  },
  {
    "url": "javasrcipt/j-bbb.html",
    "revision": "15aba3417f85fd38cc01efb041329ada"
  },
  {
    "url": "javasrcipt/j-ccc.html",
    "revision": "fa9f9fa900a3233cf2abcb92c9e83e8f"
  },
  {
    "url": "quanxue.html",
    "revision": "d7e3c02bd0afcb6d0630449c7e3882d2"
  },
  {
    "url": "笔记本.svg",
    "revision": "822dab98a39320c47895da5fa30116cc"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
