System.register(["./index-legacy.860cc6e4.js"],(function(e,t){"use strict";var r,n,c,o,i,s,u,a;return{setters:[e=>{r=e.u,n=e.a,c=e.b5,o=e._,i=e.f,s=e.a5,u=e.a6,a=e.bd}],execute:function(){e("default",(()=>{const{pathname:e}=r(),[t,f]=n((()=>c.post("/fs/other",{path:e(),password:o(),method:"doc_preview"})));return(async()=>{const e=await f();a(e,(e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})}))})(),i(u,{get loading(){return t()},get children(){return i(s,{w:"$full",h:"70vh",id:"office-preview"})}})}))}}}));
