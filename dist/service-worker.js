if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,l)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let n={};const t=e=>i(e,o),u={module:{uri:o},exports:n,require:t};s[o]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(l(...e),n)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"revisao-html"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/revisao-html/assets/html-pagina-16.html",revision:"304b184efbda2240ef8ed768ae0453c4"},{url:"/revisao-html/css/app.c27a3fbd.css",revision:null},{url:"/revisao-html/css/chunk-vendors.d708bec6.css",revision:null},{url:"/revisao-html/img/desenho-11.15a30c79.png",revision:null},{url:"/revisao-html/img/fireworks.32bb7ede.gif",revision:null},{url:"/revisao-html/img/natureza.ed5b10fc.png",revision:null},{url:"/revisao-html/img/youtube.6ce2f431.jpg",revision:null},{url:"/revisao-html/index.html",revision:"e61f8a006391e40698242d40eb11f00a"},{url:"/revisao-html/js/app.b7f9235e.js",revision:null},{url:"/revisao-html/js/chunk-vendors.80e69b51.js",revision:null},{url:"/revisao-html/manifest.json",revision:"d77614f102371587af2ee8c8092349a7"},{url:"/revisao-html/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map