import{b7 as n,b as c}from"./index.98d565c5.js";const d=(s="/",t="")=>n.post("/fs/get",{path:s,password:t}),i=(s="/",t="",e=1,a=0,o=!1,r)=>n.post("/fs/list",{path:s,password:t,page:e,per_page:a,refresh:o},{cancelToken:r}),u=(s="/",t="",e=!1)=>n.post("/fs/dirs",{path:s,password:t,force_root:e}),m=s=>n.post("/fs/mkdir",{path:s}),y=(s,t)=>n.post("/fs/rename",{path:s,name:t}),h=(s,t,e)=>n.post("/fs/move",{src_dir:s,dst_dir:t,names:e}),l=(s,t,e)=>n.post("/fs/copy",{src_dir:s,dst_dir:t,names:e}),x=(s,t)=>n.post("/fs/remove",{dir:s,names:t}),b=(s,t)=>n.put("/fs/put",void 0,{headers:{"File-Path":encodeURIComponent(s),Password:t}}),w=(s,t)=>n.post("/fs/add_aria2",{path:s,urls:t}),f=async(s,t=!0)=>{try{const e=await c.get(s,{responseType:"blob",params:t?{ts:new Date().getTime()}:void 0}),a=await e.data.text(),o=e.headers["content-type"];return{content:a,contentType:o}}catch(e){return t?await f(s,!1):{content:`Failed to fetch ${s}: ${e}`,contentType:""}}},v=async(s,t,e="",a=1,o=100)=>n.post("/fs/search",{parent:s,keywords:t,page:a,per_page:o}),T=async(s=["/"],t=-1)=>n.post("/admin/index/build",{paths:s,max_depth:t}),g=async(s=[],t=-1)=>n.post("/admin/index/update",{paths:s,max_depth:t});export{i as a,f as b,l as c,h as d,x as e,d as f,y as g,b as h,m as i,w as j,u as k,v as l,T as m,g as u};
