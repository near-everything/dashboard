if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/FTvGB7P5DPl8j7cVYxWQp/_buildManifest.js",revision:"1c0284ba7e92f246351dd751bb4d18f4"},{url:"/_next/static/FTvGB7P5DPl8j7cVYxWQp/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/157-2f1c17a9ba7bb9a6.js",revision:"2f1c17a9ba7bb9a6"},{url:"/_next/static/chunks/213-1b7e45c285bacf43.js",revision:"1b7e45c285bacf43"},{url:"/_next/static/chunks/551-cf124ce504d92a7d.js",revision:"cf124ce504d92a7d"},{url:"/_next/static/chunks/573-7b43276c689840a5.js",revision:"7b43276c689840a5"},{url:"/_next/static/chunks/664-ac1349529b76e794.js",revision:"ac1349529b76e794"},{url:"/_next/static/chunks/67-ce4e152178089b1b.js",revision:"ce4e152178089b1b"},{url:"/_next/static/chunks/7112840a-87fce73d0fba1e7f.js",revision:"87fce73d0fba1e7f"},{url:"/_next/static/chunks/830-d4688adab0e7ba67.js",revision:"d4688adab0e7ba67"},{url:"/_next/static/chunks/871-59e72801d2dce5df.js",revision:"59e72801d2dce5df"},{url:"/_next/static/chunks/963-db28321d9c00a63c.js",revision:"db28321d9c00a63c"},{url:"/_next/static/chunks/cb1608f2-2d9c677c8b123dfb.js",revision:"2d9c677c8b123dfb"},{url:"/_next/static/chunks/framework-0c60727b75b88c05.js",revision:"0c60727b75b88c05"},{url:"/_next/static/chunks/main-2f16820ac5954199.js",revision:"2f16820ac5954199"},{url:"/_next/static/chunks/pages/404-3ea773235ab62c9a.js",revision:"3ea773235ab62c9a"},{url:"/_next/static/chunks/pages/_app-ec7e608a8ac22a66.js",revision:"ec7e608a8ac22a66"},{url:"/_next/static/chunks/pages/_error-7397496ca01950b1.js",revision:"7397496ca01950b1"},{url:"/_next/static/chunks/pages/create/post-f762bd166b97bf6d.js",revision:"f762bd166b97bf6d"},{url:"/_next/static/chunks/pages/create/request-d047d15450ec334c.js",revision:"d047d15450ec334c"},{url:"/_next/static/chunks/pages/create/thing-1738c8c303567b27.js",revision:"1738c8c303567b27"},{url:"/_next/static/chunks/pages/explore-1ac4e0fdc239083e.js",revision:"1ac4e0fdc239083e"},{url:"/_next/static/chunks/pages/feedback-1f8a833660536d66.js",revision:"1f8a833660536d66"},{url:"/_next/static/chunks/pages/index-be1089148dc0016b.js",revision:"be1089148dc0016b"},{url:"/_next/static/chunks/pages/login-89ac2ceddd488412.js",revision:"89ac2ceddd488412"},{url:"/_next/static/chunks/pages/marketplace-e40f3612c9a6c4a5.js",revision:"e40f3612c9a6c4a5"},{url:"/_next/static/chunks/pages/organize-264d236dd430afbb.js",revision:"264d236dd430afbb"},{url:"/_next/static/chunks/pages/profile-85fede9eb40e982a.js",revision:"85fede9eb40e982a"},{url:"/_next/static/chunks/pages/register-bd0fe13fe7d3bdbd.js",revision:"bd0fe13fe7d3bdbd"},{url:"/_next/static/chunks/pages/requests-c1e099920610233a.js",revision:"c1e099920610233a"},{url:"/_next/static/chunks/pages/settings-680f36c9da1b3904.js",revision:"680f36c9da1b3904"},{url:"/_next/static/chunks/pages/things-e81ac670b79197de.js",revision:"e81ac670b79197de"},{url:"/_next/static/chunks/pages/things/%5Bid%5D-32ad85cdb5aafba3.js",revision:"32ad85cdb5aafba3"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-06f027d2973c0918.js",revision:"06f027d2973c0918"},{url:"/_next/static/css/2e2751e26baf52dd.css",revision:"2e2751e26baf52dd"},{url:"/_next/static/css/b2830fc7f28dcfa1.css",revision:"b2830fc7f28dcfa1"},{url:"/icons/android-chrome-192x192.png",revision:"8e268aa62f538416c306e798e2461a55"},{url:"/icons/android-chrome-384x384.png",revision:"5917da96964935e57736d2f9f92990d9"},{url:"/icons/apple-touch-icon.png",revision:"a2b00785a51bbdf9f7c9fa22787d29a0"},{url:"/icons/everything.png",revision:"19df1a4723cde37dcff19bf6974e1dbb"},{url:"/icons/favicon-16x16.png",revision:"970271b5580b3be9917096c776ac9908"},{url:"/icons/favicon-32x32.png",revision:"51425c3c2845765f59ab0d347975535e"},{url:"/icons/favicon.ico",revision:"a0ad310e70012d8aba625d277399891a"},{url:"/icons/icon-512x512.png",revision:"d33b3bed8efe2ec496552050acc0969c"},{url:"/icons/touch-icon-ipad-retina.png",revision:"aa23894a425abf8b1af8ccbeb71ae202"},{url:"/icons/touch-icon-ipad.png",revision:"a6fdcd5bed1d32496da7be83332c0ec5"},{url:"/icons/touch-icon-iphone-retina.png",revision:"3bcc02e6aabd2eefe801be904f7db7a7"},{url:"/manifest.json",revision:"dc0f5056051cb8a390df6a51ff7974ef"},{url:"/privacy-policy.html",revision:"de6a66da9a6908917762f125ef350ef8"},{url:"/robots.txt",revision:"3ad0652bd17ff826a31fa29366021cfd"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
