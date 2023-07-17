import{j as e,am as O,aq as _,ag as y,o as i,a3 as c,ao as I,a9 as T,aa as h,bz as P,bK as $,d as b,C as d,bL as x,al as L,ae as k,B as m,ai as D,E as S,aj as A,bM as v,y as g,a8 as f,bN as j,K as V,bO as R,U as o,V as a,bI as C,bP as M,r as z,aW as F,Z as B,$ as W,D as U}from"./index.c712f941.js";import{a as w,b as H}from"./useUtil.25a9766f.js";import{g as X,O as u}from"./icon.323aa28b.js";import{n as K}from"./index.772584ae.js";import{T as q}from"./Layout.aa503312.js";const G=r=>e(c,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return y()},boxSize:"$20",get as(){return X(i.obj)}})},get src(){return i.obj.thumb}}),e(c,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(T,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>$(i.obj.modified))]}})]}}),e(c,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=b(),n=d(()=>x(i.obj.name)),{currentObjLink:s}=w();return e(g,{get when(){return n().length},get children(){return e(L,{get children(){return[e(k,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:K})},get children(){return r("home.preview.open_with")}}),e(D,{get children(){return e(S,{get each(){return n()},children:t=>e(A,{as:"a",target:"_blank",get href(){return v(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=b(),{copyCurrentRawLink:s}=H();return e(G,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),Z=r=>{const{currentObjLink:n}=w(),s=d(()=>v(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)}));return e(R,{w:"$full",h:"70vh",get children(){return[e(j.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:q,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return V()},p:"$1",boxSize:"$7"})]}})},J=r=>()=>e(Z,{scheme:r}),Q=[{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.41fb20dc.js"),["assets/aliyun_video.41fb20dc.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js","assets/icon.323aa28b.js","assets/index.7bd0e138.js","assets/index.772584ae.js","assets/Layout.aa503312.js","assets/index.aab6eb18.js","assets/FolderTree.842a1c4e.js","assets/video_box.2bcfc9df.js"]))},{name:"Markdown",type:u.TEXT,component:o(()=>a(()=>import("./markdown.f1d69caf.js"),["assets/markdown.f1d69caf.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js","assets/Layout.aa503312.js","assets/index.7bd0e138.js","assets/index.772584ae.js","assets/index.aab6eb18.js","assets/FolderTree.842a1c4e.js"]))},{name:"Markdown with word wrap",type:u.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.4c202828.js"),["assets/markdown_with_word_wrap.4c202828.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js","assets/Layout.aa503312.js","assets/index.7bd0e138.js","assets/index.772584ae.js","assets/index.aab6eb18.js","assets/FolderTree.842a1c4e.js"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.7d3eeb48.js"),["assets/url.7d3eeb48.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js","assets/icon.323aa28b.js","assets/index.7bd0e138.js","assets/index.772584ae.js","assets/Layout.aa503312.js","assets/index.aab6eb18.js","assets/FolderTree.842a1c4e.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.c1bf84e9.js"),["assets/text-editor.c1bf84e9.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js"]))},{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.d26ceae4.js"),["assets/html.d26ceae4.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js"]))},{name:"Image",type:u.IMAGE,component:o(()=>a(()=>import("./image.79a4ffec.js"),["assets/image.79a4ffec.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/ImageWithError.38cf886c.js"]))},{name:"Video",type:u.VIDEO,component:o(()=>a(()=>import("./video.c7ac9544.js"),["assets/video.c7ac9544.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js","assets/icon.323aa28b.js","assets/index.7bd0e138.js","assets/index.772584ae.js","assets/Layout.aa503312.js","assets/index.aab6eb18.js","assets/FolderTree.842a1c4e.js","assets/video_box.2bcfc9df.js"]))},{name:"Audio",type:u.AUDIO,component:o(()=>a(()=>import("./audio.1f5a2c3b.js"),["assets/audio.1f5a2c3b.js","assets/audio.e5b5af14.css","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js","assets/icon.323aa28b.js","assets/index.7bd0e138.js","assets/index.772584ae.js","assets/Layout.aa503312.js","assets/index.aab6eb18.js","assets/FolderTree.842a1c4e.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.ea3e212d.js"),["assets/ipa.ea3e212d.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js","assets/icon.323aa28b.js","assets/index.7bd0e138.js","assets/index.772584ae.js","assets/Layout.aa503312.js","assets/index.aab6eb18.js","assets/FolderTree.842a1c4e.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.60e40512.js"),["assets/plist.60e40512.js","assets/index.c712f941.js","assets/index.d81a3e4b.css","assets/useUtil.25a9766f.js","assets/api.a77e123c.js","assets/icon.323aa28b.js","assets/index.7bd0e138.js","assets/index.772584ae.js","assets/Layout.aa503312.js","assets/index.aab6eb18.js","assets/FolderTree.842a1c4e.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.5ba4a7c0.js"),["assets/aliyun_office.5ba4a7c0.js","assets/index.c712f941.js","assets/index.d81a3e4b.css"]))}],Y=r=>{const n=[];return Q.forEach(t=>{var l;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((l=t.exts)==null?void 0:l.includes(C(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),M(r.name).forEach(t=>{n.push({name:t.key,component:J(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>N),void 0))}),n},ee=()=>{const r=d(()=>Y({...i.obj,provider:i.provider})),[n,s]=z(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(c,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(F,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(l=>l.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(B,{get fallback(){return e(W,{})},get children(){return e(U,{get component(){return n().component}})}})]}})}})},ie=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{G as F,ie as a};
