import{h as e,aw as I,aA as _,an as P,a1 as o,a4 as l,ay as A,af as L,ag as b,cj as x,cQ as k,a as w,k as d,cR as D,a5 as f,av as S,al as $,C as m,ar as V,G as j,as as R,cw as O,S as g,aK as C,ae as y,cz as M,L as z,cS as F,V as t,W as n,b as B,cA as W,cT as U,m as H,bd as X,Y as G,Z as K,at as Q}from"./index.25ab5e6e.js";import{g as Y,O as u}from"./icon.3030ec6a.js";import{o as Z}from"./index.3e001ebe.js";import{T as q}from"./Layout.da5d3285.js";const J=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(I,{boxSize:"$20",get fallback(){return e(_,{get color(){return P()},boxSize:"$20",get as(){return Y(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(A,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(L,{color:"$neutral10",size:"sm",get children(){return[b(()=>x(o.obj.size))," \xB7 ",b(()=>k(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),T=()=>{const r=w(),a=d(()=>D(o.obj.name)),{currentObjLink:i}=f();return e(g,{get when(){return a().length},get children(){return e(S,{get children(){return[e($,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:Z})},get children(){return r("home.preview.open_with")}}),e(V,{get children(){return e(j,{get each(){return a()},children:s=>e(R,{as:"a",target:"_blank",get href(){return O(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=w(),{copyCurrentRawLink:i}=C();return e(J,{get children(){return[e(y,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(T,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=f(),i=d(()=>O(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(F,{w:"$full",h:"70vh",get children(){return[e(M.iframe,{w:"$full",h:"$full",get src(){return i()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:q,onClick:()=>{window.open(i(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return z()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML render",exts:["html"],component:t(()=>n(()=>import("./html.36019b9a.js"),["assets/html.36019b9a.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.68716e8e.js"),["assets/aliyun_video.68716e8e.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css","assets/icon.3030ec6a.js","assets/index.3e001ebe.js","assets/Layout.da5d3285.js","assets/useTitle.c645b46f.js","assets/index.e3d97e96.js","assets/FolderTree.ce96c5ec.js","assets/index.bef1c830.js","assets/video_box.a2147dbf.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.418b91af.js"]))},{name:"Markdown",type:u.TEXT,component:t(()=>n(()=>import("./markdown.d2d0f6c7.js"),["assets/markdown.d2d0f6c7.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css"]))},{name:"Markdown with word wrap",type:u.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.0df514c6.js"),["assets/markdown_with_word_wrap.0df514c6.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css"]))},{name:"Url Open",exts:["url"],component:t(()=>n(()=>import("./url.d8711df3.js"),["assets/url.d8711df3.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css","assets/icon.3030ec6a.js","assets/index.3e001ebe.js","assets/Layout.da5d3285.js","assets/useTitle.c645b46f.js","assets/index.e3d97e96.js","assets/FolderTree.ce96c5ec.js","assets/index.bef1c830.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.0c6c8afd.js"),["assets/text-editor.0c6c8afd.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css","assets/index.05de00f6.js"]))},{name:"Image",type:u.IMAGE,component:t(()=>n(()=>import("./image.608751cc.js"),["assets/image.608751cc.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css","assets/ImageWithError.fb65b33e.js"]))},{name:"Video",type:u.VIDEO,component:t(()=>n(()=>import("./video.45822100.js"),["assets/video.45822100.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css","assets/icon.3030ec6a.js","assets/index.3e001ebe.js","assets/Layout.da5d3285.js","assets/useTitle.c645b46f.js","assets/index.e3d97e96.js","assets/FolderTree.ce96c5ec.js","assets/index.bef1c830.js","assets/video_box.a2147dbf.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.418b91af.js"]))},{name:"Audio",type:u.AUDIO,component:t(()=>n(()=>import("./audio.b9822f90.js"),["assets/audio.b9822f90.js","assets/audio.e5b5af14.css","assets/index.25ab5e6e.js","assets/index.c7d3d010.css","assets/icon.3030ec6a.js","assets/index.3e001ebe.js","assets/Layout.da5d3285.js","assets/useTitle.c645b46f.js","assets/index.e3d97e96.js","assets/FolderTree.ce96c5ec.js","assets/index.bef1c830.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.829aef3d.js"),["assets/ipa.829aef3d.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css","assets/icon.3030ec6a.js","assets/index.3e001ebe.js","assets/Layout.da5d3285.js","assets/useTitle.c645b46f.js","assets/index.e3d97e96.js","assets/FolderTree.ce96c5ec.js","assets/index.bef1c830.js"]))},{name:"Plist",exts:["plist"],component:t(()=>n(()=>import("./plist.6173b78f.js"),["assets/plist.6173b78f.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css","assets/icon.3030ec6a.js","assets/index.3e001ebe.js","assets/Layout.da5d3285.js","assets/useTitle.c645b46f.js","assets/index.e3d97e96.js","assets/FolderTree.ce96c5ec.js","assets/index.bef1c830.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.baf7b6e8.js"),["assets/aliyun_office.baf7b6e8.js","assets/index.25ab5e6e.js","assets/index.c7d3d010.css"]))},{name:"Asciinema",exts:["cast"],component:t(()=>n(()=>import("./asciinema.ca173165.js"),["assets/asciinema.ca173165.js","assets/asciinema.53412307.css","assets/index.25ab5e6e.js","assets/index.c7d3d010.css"]))},{name:"Video360",type:u.VIDEO,component:t(()=>n(()=>import("./video360.af440d16.js"),["assets/video360.af440d16.js","assets/video360.f0192288.css","assets/index.25ab5e6e.js","assets/index.c7d3d010.css","assets/video_box.a2147dbf.js","assets/icon.3030ec6a.js","assets/index.3e001ebe.js","assets/Layout.da5d3285.js","assets/useTitle.c645b46f.js","assets/index.e3d97e96.js","assets/FolderTree.ce96c5ec.js","assets/index.bef1c830.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))}],ne=r=>{var v;const{searchParams:a}=B(),i=u[(v=a.type)==null?void 0:v.toUpperCase()],s=[];return te.forEach(c=>{var E;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||i&&c.type===i||c.exts==="*"||((E=c.exts)==null?void 0:E.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),U(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"Download",component:t(()=>n(()=>Promise.resolve().then(()=>N),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,i]=H(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(y,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{i(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(T,{})]}}),e(G,{get fallback(){return e(K,{})},get children(){return e(Q,{get component(){return a().component}})}})]}})}})},ue=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{J as F,ue as a};
