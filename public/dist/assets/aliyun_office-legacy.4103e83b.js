System.register(["./index-legacy.07cd0eea.js"],(function(e,t){"use strict";var r,n,o,c,a,i,s,u;return{setters:[e=>{r=e.u,n=e.a,o=e.b4,c=e._,a=e.f,i=e.a5,s=e.a6,u=e.bd}],execute:function(){e("default",(()=>{const{pathname:e}=r(),[t,d]=n((()=>o.post("/fs/other",{path:e(),password:c(),method:"doc_preview"})));return(async()=>{const e=await d();u(e,(e=>{aliyun.config({mount:document.querySelector("#office-preview"),url:e.preview_url}).setToken({token:e.access_token})}))})(),a(s,{get loading(){return t()},get children(){return a(i,{w:"$full",h:"70vh",id:"office-preview"})}})}))}}}));
