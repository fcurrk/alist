import{b7 as e,b as c}from"./index.a3f71402.js";const p=(t="/",s="")=>e.post("/fs/get",{path:t,password:s}),i=(t="/",s="",o=1,n=0,r=!1,a)=>e.post("/fs/list",{path:t,password:s,page:o,per_page:n,refresh:r},{cancelToken:a}),d=(t="/",s="",o=!1)=>e.post("/fs/dirs",{path:t,password:s,force_root:o}),u=t=>e.post("/fs/mkdir",{path:t}),m=(t,s)=>e.post("/fs/rename",{path:t,name:s}),y=(t,s,o)=>e.post("/fs/move",{src_dir:t,dst_dir:s,names:o}),h=(t,s,o)=>e.post("/fs/copy",{src_dir:t,dst_dir:s,names:o}),l=(t,s)=>e.post("/fs/remove",{dir:t,names:s}),b=t=>e.put("/fs/put",void 0,{headers:{"File-Path":encodeURIComponent(t)}}),v=(t,s)=>e.post("/fs/add_aria2",{path:t,urls:s}),x=async t=>{try{const s=await c.get(t,{responseType:"blob"}),o=await s.data.text(),n=s.headers["content-type"];return{content:o,contentType:n}}catch(s){return{content:`Failed to fetch ${t}: ${s}`,contentType:""}}};export{i as a,x as b,h as c,y as d,l as e,p as f,m as g,b as h,u as i,v as j,d as k};
