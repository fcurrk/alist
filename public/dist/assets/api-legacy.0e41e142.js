System.register(["./index-legacy.7de2e5d4.js"],(function(e,t){"use strict";var s,r;return{setters:[e=>{s=e.b7,r=e.b}],execute:function(){e("f",((e="/",t="")=>s.post("/fs/get",{path:e,password:t}))),e("a",((e="/",t="",r=1,a=0,o=!1,n)=>s.post("/fs/list",{path:e,password:t,page:r,per_page:a,refresh:o},{cancelToken:n}))),e("k",((e="/",t="",r=!1)=>s.post("/fs/dirs",{path:e,password:t,force_root:r}))),e("i",(e=>s.post("/fs/mkdir",{path:e}))),e("g",((e,t)=>s.post("/fs/rename",{path:e,name:t}))),e("d",((e,t,r)=>s.post("/fs/move",{src_dir:e,dst_dir:t,names:r}))),e("c",((e,t,r)=>s.post("/fs/copy",{src_dir:e,dst_dir:t,names:r}))),e("e",((e,t)=>s.post("/fs/remove",{dir:e,names:t}))),e("h",(e=>s.put("/fs/put",void 0,{headers:{"File-Path":encodeURIComponent(e)}}))),e("j",((e,t)=>s.post("/fs/add_aria2",{path:e,urls:t}))),e("b",(async e=>{try{const t=await r.get(e,{responseType:"blob"}),s=await t.data.text();return{content:s,contentType:t.headers["content-type"]}}catch(t){return{content:`Failed to fetch ${e}: ${t}`,contentType:""}}}))}}}));
