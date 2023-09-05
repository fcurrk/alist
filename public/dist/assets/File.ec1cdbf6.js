import{j as e,ao as O,as as _,ai as y,o as i,a6 as l,aq as T,ab as I,ac as h,bM as P,bZ as $,d as b,v as d,b_ as k,an as x,ag as L,H as m,ak as D,L as S,al as A,b$ as v,y as g,aa as f,bW as j,R as V,c0 as R,Z as o,$ as a,bX as M,c1 as C,r as z,K as F,a1 as B,a2 as W,D as H}from"./index.2575ee6c.js";import{b as w,c as X}from"./useUtil.0df47d5c.js";import{g as U,O as u}from"./icon.9afd7c9c.js";import{n as Z}from"./index.ddfaea4f.js";import{T as q}from"./Layout.6a400b4a.js";const G=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return y()},boxSize:"$20",get as(){return U(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(T,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>$(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=d(()=>k(i.obj.name)),{currentObjLink:s}=w();return e(g,{get when(){return n().length},get children(){return e(x,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:Z})},get children(){return r("home.preview.open_with")}}),e(D,{get children(){return e(S,{get each(){return n()},children:t=>e(A,{as:"a",target:"_blank",get href(){return v(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=X();return e(G,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},K=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),J=r=>{const{currentObjLink:n}=w(),s=d(()=>v(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:q,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},N=r=>()=>e(J,{scheme:r}),Q=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.7dbb2741.js"),["assets/html.7dbb2741.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/Layout.6a400b4a.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.afc2b6da.js"),["assets/aliyun_video.afc2b6da.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/icon.9afd7c9c.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/Layout.6a400b4a.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js","assets/video_box.90e60dd4.js"]))},{name:"Markdown",type:u.TEXT,component:o(()=>a(()=>import("./markdown.059af914.js"),["assets/markdown.059af914.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/Layout.6a400b4a.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.787659bc.js"),["assets/markdown_with_word_wrap.787659bc.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/Layout.6a400b4a.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.b2f2a44f.js"),["assets/url.b2f2a44f.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/icon.9afd7c9c.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/Layout.6a400b4a.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.172a2ac4.js"),["assets/text-editor.172a2ac4.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/Layout.6a400b4a.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js"]))},{name:"Image",type:u.IMAGE,component:o(()=>a(()=>import("./image.a5597f9f.js"),["assets/image.a5597f9f.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/ImageWithError.06e968b7.js"]))},{name:"Video",type:u.VIDEO,component:o(()=>a(()=>import("./video.12b2ad35.js"),["assets/video.12b2ad35.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/icon.9afd7c9c.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/Layout.6a400b4a.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js","assets/video_box.90e60dd4.js"]))},{name:"Audio",type:u.AUDIO,component:o(()=>a(()=>import("./audio.5a8f72ce.js"),["assets/audio.5a8f72ce.js","assets/audio.e5b5af14.css","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/icon.9afd7c9c.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/Layout.6a400b4a.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.90d93114.js"),["assets/ipa.90d93114.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/icon.9afd7c9c.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/Layout.6a400b4a.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.719ef9aa.js"),["assets/plist.719ef9aa.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/icon.9afd7c9c.js","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/Layout.6a400b4a.js","assets/index.063695f5.js","assets/FolderTree.6355e62f.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.15635723.js"),["assets/aliyun_office.15635723.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css"]))}],Y=r=>{const n=[];return Q.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(M(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),C(r.name).forEach(t=>{n.push({name:t.key,component:N(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>K),void 0))}),n},ee=()=>{const r=d(()=>Y({...i.obj,provider:i.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(H,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{G as F,ie as a};
