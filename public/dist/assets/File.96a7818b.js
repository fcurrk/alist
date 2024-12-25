import{h as e,aw as I,aA as _,an as P,a1 as o,a4 as l,ay as x,af as A,ag as b,ck as L,cR as k,a as f,k as d,cS as D,a5 as w,av as S,al as $,C as m,ar as V,G as R,as as j,cx as O,S as g,aK as C,ae as y,cA as M,L as z,cT as F,V as t,W as n,b as B,cB as W,cU as U,m as H,bd as X,Y as G,Z as K,at as Y}from"./index.375efe11.js";import{g as Z,O as u}from"./icon.8be0d42f.js";import{o as q}from"./index.15a5ce44.js";import{T as J}from"./Layout.4134b193.js";const N=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(I,{boxSize:"$20",get fallback(){return e(_,{get color(){return P()},boxSize:"$20",get as(){return Z(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(x,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(A,{color:"$neutral10",size:"sm",get children(){return[b(()=>L(o.obj.size))," \xB7 ",b(()=>k(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),T=()=>{const r=f(),a=d(()=>D(o.obj.name)),{currentObjLink:i}=w();return e(g,{get when(){return a().length},get children(){return e(S,{get children(){return[e($,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:q})},get children(){return r("home.preview.open_with")}}),e(V,{get children(){return e(R,{get each(){return a()},children:s=>e(j,{as:"a",target:"_blank",get href(){return O(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=f(),{copyCurrentRawLink:i}=C();return e(N,{get children(){return[e(y,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(T,{})}})]}})},Q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=w(),i=d(()=>O(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(F,{w:"$full",h:"70vh",get children(){return[e(M.iframe,{w:"$full",h:"$full",get src(){return i()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:J,onClick:()=>{window.open(i(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return z()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML render",exts:["html"],component:t(()=>n(()=>import("./html.bd1bfebf.js"),["assets/html.bd1bfebf.js","assets/index.375efe11.js","assets/index.c4c82a28.css"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.e0bf94ef.js"),["assets/aliyun_video.e0bf94ef.js","assets/index.375efe11.js","assets/index.c4c82a28.css","assets/icon.8be0d42f.js","assets/index.15a5ce44.js","assets/Layout.4134b193.js","assets/useTitle.f1c558f5.js","assets/index.b6d7a095.js","assets/FolderTree.3d6440ab.js","assets/index.ad4ec0de.js","assets/video_box.7f887d7c.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.a3d8ff18.js"]))},{name:"Markdown",type:u.TEXT,component:t(()=>n(()=>import("./markdown.1fc40318.js"),["assets/markdown.1fc40318.js","assets/index.375efe11.js","assets/index.c4c82a28.css"]))},{name:"Markdown with word wrap",type:u.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.330b789a.js"),["assets/markdown_with_word_wrap.330b789a.js","assets/index.375efe11.js","assets/index.c4c82a28.css"]))},{name:"Url Open",exts:["url"],component:t(()=>n(()=>import("./url.0e020f16.js"),["assets/url.0e020f16.js","assets/index.375efe11.js","assets/index.c4c82a28.css","assets/icon.8be0d42f.js","assets/index.15a5ce44.js","assets/Layout.4134b193.js","assets/useTitle.f1c558f5.js","assets/index.b6d7a095.js","assets/FolderTree.3d6440ab.js","assets/index.ad4ec0de.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.b3af7e9a.js"),["assets/text-editor.b3af7e9a.js","assets/index.375efe11.js","assets/index.c4c82a28.css","assets/index.5fda6303.js"]))},{name:"Image",type:u.IMAGE,component:t(()=>n(()=>import("./image.f2711f14.js"),["assets/image.f2711f14.js","assets/index.375efe11.js","assets/index.c4c82a28.css","assets/ImageWithError.ffdb3b41.js"]))},{name:"Video",type:u.VIDEO,component:t(()=>n(()=>import("./video.169abeb0.js"),["assets/video.169abeb0.js","assets/index.375efe11.js","assets/index.c4c82a28.css","assets/icon.8be0d42f.js","assets/index.15a5ce44.js","assets/Layout.4134b193.js","assets/useTitle.f1c558f5.js","assets/index.b6d7a095.js","assets/FolderTree.3d6440ab.js","assets/index.ad4ec0de.js","assets/video_box.7f887d7c.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.a3d8ff18.js"]))},{name:"Audio",type:u.AUDIO,component:t(()=>n(()=>import("./audio.3ab3dafd.js"),["assets/audio.3ab3dafd.js","assets/audio.e5b5af14.css","assets/index.375efe11.js","assets/index.c4c82a28.css","assets/icon.8be0d42f.js","assets/index.15a5ce44.js","assets/Layout.4134b193.js","assets/useTitle.f1c558f5.js","assets/index.b6d7a095.js","assets/FolderTree.3d6440ab.js","assets/index.ad4ec0de.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.f4483401.js"),["assets/ipa.f4483401.js","assets/index.375efe11.js","assets/index.c4c82a28.css","assets/icon.8be0d42f.js","assets/index.15a5ce44.js","assets/Layout.4134b193.js","assets/useTitle.f1c558f5.js","assets/index.b6d7a095.js","assets/FolderTree.3d6440ab.js","assets/index.ad4ec0de.js"]))},{name:"Plist",exts:["plist"],component:t(()=>n(()=>import("./plist.5c6a669e.js"),["assets/plist.5c6a669e.js","assets/index.375efe11.js","assets/index.c4c82a28.css","assets/icon.8be0d42f.js","assets/index.15a5ce44.js","assets/Layout.4134b193.js","assets/useTitle.f1c558f5.js","assets/index.b6d7a095.js","assets/FolderTree.3d6440ab.js","assets/index.ad4ec0de.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.fbf29c3c.js"),["assets/aliyun_office.fbf29c3c.js","assets/index.375efe11.js","assets/index.c4c82a28.css"]))},{name:"Asciinema",exts:["cast"],component:t(()=>n(()=>import("./asciinema.724ec677.js"),["assets/asciinema.724ec677.js","assets/asciinema.53412307.css","assets/index.375efe11.js","assets/index.c4c82a28.css"]))},{name:"Video360",type:u.VIDEO,component:t(()=>n(()=>import("./video360.2e8a1e95.js"),["assets/video360.2e8a1e95.js","assets/video360.f0192288.css","assets/index.375efe11.js","assets/index.c4c82a28.css","assets/video_box.7f887d7c.js","assets/icon.8be0d42f.js","assets/index.15a5ce44.js","assets/Layout.4134b193.js","assets/useTitle.f1c558f5.js","assets/index.b6d7a095.js","assets/FolderTree.3d6440ab.js","assets/index.ad4ec0de.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))}],ne=r=>{var v;const{searchParams:a}=B(),i=u[(v=a.type)==null?void 0:v.toUpperCase()],s=[];return te.forEach(c=>{var E;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||i&&c.type===i||c.exts==="*"||((E=c.exts)==null?void 0:E.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),U(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"Download",component:t(()=>n(()=>Promise.resolve().then(()=>Q),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,i]=H(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(y,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{i(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(T,{})]}}),e(G,{get fallback(){return e(K,{})},get children(){return e(Y,{get component(){return a().component}})}})]}})}})},ue=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{N as F,ue as a};
