if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const l=e=>i(e,n),c={module:{uri:n},exports:t,require:l};s[n]=Promise.all(r.map((e=>c[e]||l(e)))).then((e=>(o(...e),t)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"revisao-html"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/revisao-html/css/app.0f948404.css",revision:null},{url:"/revisao-html/img/desenho-11.15a30c79.png",revision:null},{url:"/revisao-html/index.html",revision:"2cf05c06338154bbdf4b2cf58e505cca"},{url:"/revisao-html/js/app.9c19b122.js",revision:null},{url:"/revisao-html/js/chunk-vendors.7d86e6e7.js",revision:null},{url:"/revisao-html/manifest.json",revision:"d77614f102371587af2ee8c8092349a7"},{url:"/revisao-html/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map