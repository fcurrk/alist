import{j as e,am as O,aq as _,ag as y,o as i,a3 as c,ao as T,a9 as I,aa as h,bJ as P,bU as $,d as b,C as d,bV as x,al as k,ae as L,B as m,ai as S,E as D,aj as A,bW as v,y as g,a8 as f,bX as j,K as V,bY as R,U as o,V as a,bS as C,bZ as M,r as z,aW as F,Z as B,$ as W,D as U}from"./index.6d128446.js";import{a as w,b as X}from"./useUtil.3306d019.js";import{g as H,O as u}from"./icon.3630026a.js";import{n as Z}from"./index.090d1a0f.js";import{T as q}from"./Layout.7eebc6f3.js";const G=r=>e(c,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return y()},boxSize:"$20",get as(){return H(i.obj)}})},get src(){return i.obj.thumb}}),e(c,{spacing:"$2",get children(){return[e(T,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>$(i.obj.modified))]}})]}}),e(c,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=d(()=>x(i.obj.name)),{currentObjLink:s}=w();return e(g,{get when(){return n().length},get children(){return e(k,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:Z})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(D,{get each(){return n()},children:t=>e(A,{as:"a",target:"_blank",get href(){return v(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=X();return e(G,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},J=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),K=r=>{const{currentObjLink:n}=w(),s=d(()=>v(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:q,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},Y=r=>()=>e(K,{scheme:r}),N=[{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.e7e65ccb.js"),["assets/aliyun_video.e7e65ccb.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js","assets/icon.3630026a.js","assets/index.76ec3ea4.js","assets/index.090d1a0f.js","assets/Layout.7eebc6f3.js","assets/index.769f3146.js","assets/FolderTree.0a8f17fa.js","assets/video_box.5b454d95.js"]))},{name:"Markdown",type:u.TEXT,component:o(()=>a(()=>import("./markdown.e54fc22a.js"),["assets/markdown.e54fc22a.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js","assets/Layout.7eebc6f3.js","assets/index.76ec3ea4.js","assets/index.090d1a0f.js","assets/index.769f3146.js","assets/FolderTree.0a8f17fa.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.8c2002bb.js"),["assets/markdown_with_word_wrap.8c2002bb.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js","assets/Layout.7eebc6f3.js","assets/index.76ec3ea4.js","assets/index.090d1a0f.js","assets/index.769f3146.js","assets/FolderTree.0a8f17fa.js"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.31232373.js"),["assets/url.31232373.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js","assets/icon.3630026a.js","assets/index.76ec3ea4.js","assets/index.090d1a0f.js","assets/Layout.7eebc6f3.js","assets/index.769f3146.js","assets/FolderTree.0a8f17fa.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.f2acd7fc.js"),["assets/text-editor.f2acd7fc.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js"]))},{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.6d113ed9.js"),["assets/html.6d113ed9.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js"]))},{name:"Image",type:u.IMAGE,component:o(()=>a(()=>import("./image.60bc7937.js"),["assets/image.60bc7937.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/ImageWithError.c4576d2d.js"]))},{name:"Video",type:u.VIDEO,component:o(()=>a(()=>import("./video.f63202a8.js"),["assets/video.f63202a8.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js","assets/icon.3630026a.js","assets/index.76ec3ea4.js","assets/index.090d1a0f.js","assets/Layout.7eebc6f3.js","assets/index.769f3146.js","assets/FolderTree.0a8f17fa.js","assets/video_box.5b454d95.js"]))},{name:"Audio",type:u.AUDIO,component:o(()=>a(()=>import("./audio.86aac570.js"),["assets/audio.86aac570.js","assets/audio.e5b5af14.css","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js","assets/icon.3630026a.js","assets/index.76ec3ea4.js","assets/index.090d1a0f.js","assets/Layout.7eebc6f3.js","assets/index.769f3146.js","assets/FolderTree.0a8f17fa.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.108b6fd4.js"),["assets/ipa.108b6fd4.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js","assets/icon.3630026a.js","assets/index.76ec3ea4.js","assets/index.090d1a0f.js","assets/Layout.7eebc6f3.js","assets/index.769f3146.js","assets/FolderTree.0a8f17fa.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.603048f4.js"),["assets/plist.603048f4.js","assets/index.6d128446.js","assets/index.d81a3e4b.css","assets/useUtil.3306d019.js","assets/api.3c8a29b9.js","assets/icon.3630026a.js","assets/index.76ec3ea4.js","assets/index.090d1a0f.js","assets/Layout.7eebc6f3.js","assets/index.769f3146.js","assets/FolderTree.0a8f17fa.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.5faf7d77.js"),["assets/aliyun_office.5faf7d77.js","assets/index.6d128446.js","assets/index.d81a3e4b.css"]))}],Q=r=>{const n=[];return N.forEach(t=>{var l;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((l=t.exts)==null?void 0:l.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:Y(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>J),void 0))}),n},ee=()=>{const r=d(()=>Q({...i.obj,provider:i.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(c,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(l=>l.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(U,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{G as F,ie as a};