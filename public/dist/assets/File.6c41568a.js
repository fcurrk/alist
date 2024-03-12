import{e,at as O,ax as _,am as T,a0 as i,a3 as l,av as I,ae as y,af as h,c4 as P,cn as k,a as v,j as d,co as x,a4 as E,as as L,ak as $,B as m,ao as A,E as S,ap as D,cg as b,S as g,aG as j,ad as f,cj as V,K as R,cp as C,U as o,V as a,ck as M,cq as z,k as F,b9 as B,X as W,Y as U,aq as X}from"./index.2ee5c569.js";import{g as H,O as c}from"./icon.746f19b5.js";import{o as q}from"./index.934607ad.js";import{T as G}from"./Layout.ff5d964a.js";const K=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(O,{boxSize:"$20",get fallback(){return e(_,{get color(){return T()},boxSize:"$20",get as(){return H(i.obj)}})},get src(){return i.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(y,{color:"$neutral10",size:"sm",get children(){return[h(()=>P(i.obj.size))," \xB7 ",h(()=>k(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),w=()=>{const r=v(),n=d(()=>x(i.obj.name)),{currentObjLink:s}=E();return e(g,{get when(){return n().length},get children(){return e(L,{get children(){return[e($,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:q})},get children(){return r("home.preview.open_with")}}),e(A,{get children(){return e(S,{get each(){return n()},children:t=>e(D,{as:"a",target:"_blank",get href(){return b(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:s(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=v(),{copyCurrentRawLink:s}=j();return e(K,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>s(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(w,{})}})]}})},Y=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),J=r=>{const{currentObjLink:n}=E(),s=d(()=>b(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0),ts:!0}));return e(C,{w:"$full",h:"70vh",get children(){return[e(V.iframe,{w:"$full",h:"$full",get src(){return s()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:G,onClick:()=>{window.open(s(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return R()},p:"$1",boxSize:"$7"})]}})},N=r=>()=>e(J,{scheme:r}),Q=[{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.958e409b.js"),["assets/html.958e409b.js","assets/index.2ee5c569.js","assets/index.15d8d646.css"]))},{name:"Aliyun Video Previewer",type:c.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.b20966b1.js"),["assets/aliyun_video.b20966b1.js","assets/index.2ee5c569.js","assets/index.15d8d646.css","assets/icon.746f19b5.js","assets/index.b7dfdba5.js","assets/index.934607ad.js","assets/Layout.ff5d964a.js","assets/index.d902891c.js","assets/FolderTree.1d0ea834.js","assets/index.b69512df.js","assets/video_box.70ede0ca.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.b9ab674a.js"]))},{name:"Markdown",type:c.TEXT,component:o(()=>a(()=>import("./markdown.3e10743a.js"),["assets/markdown.3e10743a.js","assets/index.2ee5c569.js","assets/index.15d8d646.css"]))},{name:"Markdown with word wrap",type:c.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.e00ac53a.js"),["assets/markdown_with_word_wrap.e00ac53a.js","assets/index.2ee5c569.js","assets/index.15d8d646.css"]))},{name:"Url Open",exts:["url"],component:o(()=>a(()=>import("./url.8dcd018e.js"),["assets/url.8dcd018e.js","assets/index.2ee5c569.js","assets/index.15d8d646.css","assets/icon.746f19b5.js","assets/index.b7dfdba5.js","assets/index.934607ad.js","assets/Layout.ff5d964a.js","assets/index.d902891c.js","assets/FolderTree.1d0ea834.js","assets/index.b69512df.js"]))},{name:"Text Editor",type:c.TEXT,exts:["url"],component:o(()=>a(()=>import("./text-editor.094cc6ba.js"),["assets/text-editor.094cc6ba.js","assets/index.2ee5c569.js","assets/index.15d8d646.css","assets/index.b3c3fe02.js"]))},{name:"Image",type:c.IMAGE,component:o(()=>a(()=>import("./image.c07908cd.js"),["assets/image.c07908cd.js","assets/index.2ee5c569.js","assets/index.15d8d646.css","assets/ImageWithError.e68f4ab2.js"]))},{name:"Video",type:c.VIDEO,component:o(()=>a(()=>import("./video.35d4f32a.js"),["assets/video.35d4f32a.js","assets/index.2ee5c569.js","assets/index.15d8d646.css","assets/icon.746f19b5.js","assets/index.b7dfdba5.js","assets/index.934607ad.js","assets/Layout.ff5d964a.js","assets/index.d902891c.js","assets/FolderTree.1d0ea834.js","assets/index.b69512df.js","assets/video_box.70ede0ca.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.b9ab674a.js"]))},{name:"Audio",type:c.AUDIO,component:o(()=>a(()=>import("./audio.82ee37ff.js"),["assets/audio.82ee37ff.js","assets/audio.e5b5af14.css","assets/index.2ee5c569.js","assets/index.15d8d646.css","assets/icon.746f19b5.js","assets/index.b7dfdba5.js","assets/index.934607ad.js","assets/Layout.ff5d964a.js","assets/index.d902891c.js","assets/FolderTree.1d0ea834.js","assets/index.b69512df.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.30e5e2d2.js"),["assets/ipa.30e5e2d2.js","assets/index.2ee5c569.js","assets/index.15d8d646.css","assets/icon.746f19b5.js","assets/index.b7dfdba5.js","assets/index.934607ad.js","assets/Layout.ff5d964a.js","assets/index.d902891c.js","assets/FolderTree.1d0ea834.js","assets/index.b69512df.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.6bc7bf83.js"),["assets/plist.6bc7bf83.js","assets/index.2ee5c569.js","assets/index.15d8d646.css","assets/icon.746f19b5.js","assets/index.b7dfdba5.js","assets/index.934607ad.js","assets/Layout.ff5d964a.js","assets/index.d902891c.js","assets/FolderTree.1d0ea834.js","assets/index.b69512df.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.87a8d0cc.js"),["assets/aliyun_office.87a8d0cc.js","assets/index.2ee5c569.js","assets/index.15d8d646.css"]))},{name:"Asciinema",exts:["cast"],component:o(()=>a(()=>import("./asciinema.f373c1d0.js"),["assets/asciinema.f373c1d0.js","assets/asciinema.53412307.css","assets/index.2ee5c569.js","assets/index.15d8d646.css"]))}],Z=r=>{const n=[];return Q.forEach(t=>{var u;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((u=t.exts)==null?void 0:u.includes(M(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),z(r.name).forEach(t=>{n.push({name:t.key,component:N(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>Y),void 0))}),n},ee=()=>{const r=d(()=>Z({...i.obj,provider:i.provider})),[n,s]=F(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(B,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{s(r().find(u=>u.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(w,{})]}}),e(W,{get fallback(){return e(U,{})},get children(){return e(X,{get component(){return n().component}})}})]}})}})},ae=Object.freeze(Object.defineProperty({__proto__:null,default:ee},Symbol.toStringTag,{value:"Module"}));export{K as F,ae as a};