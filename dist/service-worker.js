if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,o)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const l=e=>r(e,t),c={module:{uri:t},exports:n,require:l};s[t]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(o(...e),n)))}}define(["./workbox-5b385ed2"],(function(e){"use strict";e.setCacheNameDetails({prefix:"revisao-html"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/revisao-html/css/app.bf04f01a.css",revision:null},{url:"/revisao-html/index.html",revision:"a9594a85845954b49dcf6074559eb0da"},{url:"/revisao-html/js/app.56e560b7.js",revision:null},{url:"/revisao-html/js/chunk-vendors.49600f4d.js",revision:null},{url:"/revisao-html/manifest.json",revision:"d77614f102371587af2ee8c8092349a7"},{url:"/revisao-html/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
