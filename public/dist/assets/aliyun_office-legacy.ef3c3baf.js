System.register(["./index-legacy.f5983ae8.js"],(function(e,t){"use strict";var r,n,o,a,c,i,s,u;return{setters:[e=>{r=e.u,n=e.a,o=e.b7,a=e._,c=e.f,i=e.a5,s=e.a6,u=e.be}],execute:function(){e("default",(()=>{const{pathname:e}=r(),[t,f]=n((()=>o.post("/fs/other",{path:e(),password:a(),method:"doc_preview"})));return(async()=>{const e=await f();u(e,(e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})}))})(),c(s,{get loading(){return t()},get children(){return c(i,{w:"$full",h:"70vh",id:"office-preview"})}})}))}}}));
