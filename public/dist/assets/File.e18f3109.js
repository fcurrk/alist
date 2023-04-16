import{j as e,am as y,aq as d,ag as I,o,V as l,ao as O,a9 as T,aa as h,bx as P,bI as $,d as b,C as _,bJ as k,al as x,ae as L,B as m,ai as S,E as D,aj as j,bK as f,y as g,a8 as v,bL as A,K as V,bM as R,U as a,W as i,bG as C,bN as M,r as z,aU as F,$ as B,a0 as W,D as U}from"./index.57e3c491.js";import{a as w,b as H}from"./useUtil.d8376dfb.js";import{g as X,O as u}from"./icon.e7428fb8.js";import{m as G}from"./index.8c8e020f.js";import{T as K}from"./Layout.ac667a8b.js";const q=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(y,{boxSize:"$20",get fallback(){return e(d,{get color(){return I()},boxSize:"$20",get as(){return X(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(O,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(T,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(o.obj.size))," \xB7 ",h(()=>$(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=_(()=>k(o.obj.name)),{currentObjLink:s}=w();return e(g,{get when(){return n().length},get children(){return e(x,{get children(){return[e(L,{as:m,colorScheme:"success",get rightIcon(){return e(d,{as:G})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(D,{get each(){return n()},children:t=>e(j,{as:"a",target:"_blank",get href(){return f(t.value,{raw_url:o.raw_url,name:o.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=H();return e(q,{get children(){return[e(v,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},J=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),N=r=>{const{currentObjLink:n}=w(),s=_(()=>f(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(A.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(d,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:K,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},Q=r=>()=>e(N,{scheme:r}),Y=[{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:a(()=>i(()=>import("./aliyun_video.a0642a73.js"),["assets/aliyun_video.a0642a73.js","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/useUtil.d8376dfb.js","assets/api.d25af188.js","assets/icon.e7428fb8.js","assets/index.39381a1e.js","assets/index.8c8e020f.js","assets/Layout.ac667a8b.js","assets/index.c5e36516.js","assets/FolderTree.cc284ec0.js","assets/hls.cb282579.js"]))},{name:"Markdown",type:u.TEXT,component:a(()=>i(()=>import("./markdown.e03c8f7a.js"),["assets/markdown.e03c8f7a.js","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/useUtil.d8376dfb.js","assets/api.d25af188.js","assets/Layout.ac667a8b.js","assets/index.39381a1e.js","assets/index.8c8e020f.js","assets/index.c5e36516.js","assets/FolderTree.cc284ec0.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:a(()=>i(()=>import("./markdown_with_word_wrap.6b53a75b.js"),["assets/markdown_with_word_wrap.6b53a75b.js","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/useUtil.d8376dfb.js","assets/api.d25af188.js","assets/Layout.ac667a8b.js","assets/index.39381a1e.js","assets/index.8c8e020f.js","assets/index.c5e36516.js","assets/FolderTree.cc284ec0.js"]))},{name:"Text Editor",type:u.TEXT,component:a(()=>i(()=>import("./text-editor.be00c986.js"),["assets/text-editor.be00c986.js","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/useUtil.d8376dfb.js","assets/api.d25af188.js"]))},{name:"HTML render",exts:["html"],component:a(()=>i(()=>import("./html.6869aaf6.js"),["assets/html.6869aaf6.js","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/useUtil.d8376dfb.js","assets/api.d25af188.js"]))},{name:"Image",type:u.IMAGE,component:a(()=>i(()=>import("./image.bd53486f.js"),["assets/image.bd53486f.js","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/ImageWithError.25cf5de9.js"]))},{name:"Video",type:u.VIDEO,component:a(()=>i(()=>import("./video.f06d7e6b.js"),["assets/video.f06d7e6b.js","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/useUtil.d8376dfb.js","assets/api.d25af188.js","assets/icon.e7428fb8.js","assets/index.39381a1e.js","assets/index.8c8e020f.js","assets/Layout.ac667a8b.js","assets/index.c5e36516.js","assets/FolderTree.cc284ec0.js","assets/hls.cb282579.js"]))},{name:"Audio",type:u.AUDIO,component:a(()=>i(()=>import("./audio.d8a2b24b.js"),["assets/audio.d8a2b24b.js","assets/audio.e5b5af14.css","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/useUtil.d8376dfb.js","assets/api.d25af188.js","assets/icon.e7428fb8.js","assets/index.39381a1e.js","assets/index.8c8e020f.js","assets/Layout.ac667a8b.js","assets/index.c5e36516.js","assets/FolderTree.cc284ec0.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:a(()=>i(()=>import("./ipa.ca2d97a8.js"),["assets/ipa.ca2d97a8.js","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/useUtil.d8376dfb.js","assets/api.d25af188.js","assets/icon.e7428fb8.js","assets/index.39381a1e.js","assets/index.8c8e020f.js","assets/Layout.ac667a8b.js","assets/index.c5e36516.js","assets/FolderTree.cc284ec0.js"]))},{name:"Plist",exts:["plist"],component:a(()=>i(()=>import("./plist.0aa946ba.js"),["assets/plist.0aa946ba.js","assets/index.57e3c491.js","assets/index.15d8d646.css","assets/useUtil.d8376dfb.js","assets/api.d25af188.js","assets/icon.e7428fb8.js","assets/index.39381a1e.js","assets/index.8c8e020f.js","assets/Layout.ac667a8b.js","assets/index.c5e36516.js","assets/FolderTree.cc284ec0.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:a(()=>i(()=>import("./aliyun_office.5e630c21.js"),["assets/aliyun_office.5e630c21.js","assets/index.57e3c491.js","assets/index.15d8d646.css"]))}],Z=r=>{const n=[];return Y.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:Q(t.value)})}),n.push({name:"Download",component:a(()=>i(()=>Promise.resolve().then(()=>J),void 0))}),n},ee=()=>{const r=_(()=>Z({...o.obj,provider:o.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(v,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(U,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{q as F,ie as a};
