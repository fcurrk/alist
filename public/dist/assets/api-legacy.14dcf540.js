System.register(["./index-legacy.d7f2d2e0.js"],(function(t,e){"use strict";var s,r;return{setters:[t=>{s=t.b4,r=t.b}],execute:function(){t("f",((t="/",e="")=>s.post("/fs/get",{path:t,password:e}))),t("a",((t="/",e="",r=1,a=0,o=!1,n)=>s.post("/fs/list",{path:t,password:e,page:r,per_page:a,refresh:o},{cancelToken:n}))),t("k",((t="/",e="",r=!1)=>s.post("/fs/dirs",{path:t,password:e,force_root:r}))),t("i",(t=>s.post("/fs/mkdir",{path:t}))),t("g",((t,e)=>s.post("/fs/rename",{path:t,name:e}))),t("d",((t,e,r)=>s.post("/fs/move",{src_dir:t,dst_dir:e,names:r}))),t("c",((t,e,r)=>s.post("/fs/copy",{src_dir:t,dst_dir:e,names:r}))),t("e",((t,e)=>s.post("/fs/remove",{dir:t,names:e}))),t("h",(t=>s.put("/fs/put",void 0,{headers:{"File-Path":encodeURIComponent(t)}}))),t("j",((t,e)=>s.post("/fs/add_aria2",{path:t,urls:e}))),t("b",(async t=>{try{const e=await r.get(t,{responseType:"blob"}),s=await e.data.text();return{content:s,contentType:e.headers["content-type"]}}catch(e){return{content:`Failed to fetch ${t}: ${e}`,contentType:""}}}))}}}));
