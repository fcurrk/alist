import{h as e,aw as I,aA as _,an as P,a1 as o,a4 as l,ay as x,af as A,ag as w,cj as L,cQ as k,a as E,k as d,cR as S,a5 as f,av as $,al as D,C as m,ar as V,G as j,as as R,cw as y,S as g,aK as C,ae as O,cz as M,L as z,cS as F,V as t,W as n,b as B,cA as W,cT as U,m as H,bd as X,Y as G,Z as K,at as Q}from"./index.d60e5180.js";import{g as Y,O as u}from"./icon.8d2beace.js";import{o as Z}from"./index.bf87f149.js";import{T as q}from"./Layout.a6c65af0.js";const J=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(I,{boxSize:"$20",get fallback(){return e(_,{get color(){return P()},boxSize:"$20",get as(){return Y(o.obj)}})},get src(){return o.obj.thumb}}),e(l,{spacing:"$2",get children(){return[e(x,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(A,{color:"$neutral10",size:"sm",get children(){return[w(()=>L(o.obj.size))," \xB7 ",w(()=>k(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),T=()=>{const r=E(),a=d(()=>S(o.obj.name)),{currentObjLink:i}=f();return e(g,{get when(){return a().length},get children(){return e($,{get children(){return[e(D,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:Z})},get children(){return r("home.preview.open_with")}}),e(V,{get children(){return e(j,{get each(){return a()},children:s=>e(R,{as:"a",target:"_blank",get href(){return y(s.value,{raw_url:o.raw_url,name:o.obj.name,d_url:i(!0)})},get children(){return s.key}})})}})]}})}})},p=r=>{const a=E(),{copyCurrentRawLink:i}=C();return e(J,{get children(){return[e(O,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return a("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return a("home.preview.download")}})]}}),e(g,{get when(){return r.openWith},get children(){return e(T,{})}})]}})},N=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),ee=r=>{const{currentObjLink:a}=f(),i=d(()=>y(r.scheme,{raw_url:o.raw_url,name:o.obj.name,d_url:a(!0),ts:!0}));return e(F,{w:"$full",h:"70vh",get children(){return[e(M.iframe,{w:"$full",h:"$full",get src(){return i()}}),e(_,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:q,onClick:()=>{window.open(i(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return z()},p:"$1",boxSize:"$7"})]}})},re=r=>()=>e(ee,{scheme:r}),te=[{name:"HTML render",exts:["html"],component:t(()=>n(()=>import("./html.b8fad91f.js"),["assets/html.b8fad91f.js","assets/index.d60e5180.js","assets/index.15d8d646.css"]))},{name:"Aliyun Video Previewer",type:u.VIDEO,provider:/^Aliyundrive(Open)?$/,component:t(()=>n(()=>import("./aliyun_video.9d38b589.js"),["assets/aliyun_video.9d38b589.js","assets/index.d60e5180.js","assets/index.15d8d646.css","assets/icon.8d2beace.js","assets/index.bf87f149.js","assets/Layout.a6c65af0.js","assets/useTitle.c68f62a0.js","assets/index.c04fdc74.js","assets/FolderTree.99d7b4f4.js","assets/index.8195b7e7.js","assets/video_box.85342ca7.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.55816dca.js"]))},{name:"Markdown",type:u.TEXT,component:t(()=>n(()=>import("./markdown.eb4b7b67.js"),["assets/markdown.eb4b7b67.js","assets/index.d60e5180.js","assets/index.15d8d646.css"]))},{name:"Markdown with word wrap",type:u.TEXT,component:t(()=>n(()=>import("./markdown_with_word_wrap.60587165.js"),["assets/markdown_with_word_wrap.60587165.js","assets/index.d60e5180.js","assets/index.15d8d646.css"]))},{name:"Url Open",exts:["url"],component:t(()=>n(()=>import("./url.44d499d0.js"),["assets/url.44d499d0.js","assets/index.d60e5180.js","assets/index.15d8d646.css","assets/icon.8d2beace.js","assets/index.bf87f149.js","assets/Layout.a6c65af0.js","assets/useTitle.c68f62a0.js","assets/index.c04fdc74.js","assets/FolderTree.99d7b4f4.js","assets/index.8195b7e7.js"]))},{name:"Text Editor",type:u.TEXT,exts:["url"],component:t(()=>n(()=>import("./text-editor.24533428.js"),["assets/text-editor.24533428.js","assets/index.d60e5180.js","assets/index.15d8d646.css","assets/index.c2f74892.js"]))},{name:"Image",type:u.IMAGE,component:t(()=>n(()=>import("./image.f803e49d.js"),["assets/image.f803e49d.js","assets/index.d60e5180.js","assets/index.15d8d646.css","assets/ImageWithError.57c54ec2.js"]))},{name:"Video",type:u.VIDEO,component:t(()=>n(()=>import("./video.81024791.js"),["assets/video.81024791.js","assets/index.d60e5180.js","assets/index.15d8d646.css","assets/icon.8d2beace.js","assets/index.bf87f149.js","assets/Layout.a6c65af0.js","assets/useTitle.c68f62a0.js","assets/index.c04fdc74.js","assets/FolderTree.99d7b4f4.js","assets/index.8195b7e7.js","assets/video_box.85342ca7.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/hls.55816dca.js"]))},{name:"Audio",type:u.AUDIO,component:t(()=>n(()=>import("./audio.27c65e3f.js"),["assets/audio.27c65e3f.js","assets/audio.e5b5af14.css","assets/index.d60e5180.js","assets/index.15d8d646.css","assets/icon.8d2beace.js","assets/index.bf87f149.js","assets/Layout.a6c65af0.js","assets/useTitle.c68f62a0.js","assets/index.c04fdc74.js","assets/FolderTree.99d7b4f4.js","assets/index.8195b7e7.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:t(()=>n(()=>import("./ipa.12e939f5.js"),["assets/ipa.12e939f5.js","assets/index.d60e5180.js","assets/index.15d8d646.css","assets/icon.8d2beace.js","assets/index.bf87f149.js","assets/Layout.a6c65af0.js","assets/useTitle.c68f62a0.js","assets/index.c04fdc74.js","assets/FolderTree.99d7b4f4.js","assets/index.8195b7e7.js"]))},{name:"Plist",exts:["plist"],component:t(()=>n(()=>import("./plist.445f07d3.js"),["assets/plist.445f07d3.js","assets/index.d60e5180.js","assets/index.15d8d646.css","assets/icon.8d2beace.js","assets/index.bf87f149.js","assets/Layout.a6c65af0.js","assets/useTitle.c68f62a0.js","assets/index.c04fdc74.js","assets/FolderTree.99d7b4f4.js","assets/index.8195b7e7.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:t(()=>n(()=>import("./aliyun_office.ac5e6d40.js"),["assets/aliyun_office.ac5e6d40.js","assets/index.d60e5180.js","assets/index.15d8d646.css"]))},{name:"Asciinema",exts:["cast"],component:t(()=>n(()=>import("./asciinema.fc2d2e49.js"),["assets/asciinema.fc2d2e49.js","assets/asciinema.53412307.css","assets/index.d60e5180.js","assets/index.15d8d646.css"]))}],ne=r=>{var v;const{searchParams:a}=B(),i=u[(v=a.type)==null?void 0:v.toUpperCase()],s=[];return te.forEach(c=>{var b;c.provider&&!c.provider.test(r.provider)||(c.type===r.type||i&&c.type===i||c.exts==="*"||((b=c.exts)==null?void 0:b.includes(W(r.name).toLowerCase())))&&s.push({name:c.name,component:c.component})}),U(r.name).forEach(c=>{s.push({name:c.key,component:re(c.value)})}),s.push({name:"Download",component:t(()=>n(()=>Promise.resolve().then(()=>N),void 0))}),s},oe=()=>{const r=d(()=>ne({...o.obj,provider:o.provider})),[a,i]=H(r()[0]);return e(g,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(O,{w:"$full",spacing:"$2",get children(){return[e(X,{alwaysShowBorder:!0,get value(){return a().name},onChange:s=>{i(r().find(h=>h.name===s))},get options(){return r().map(s=>({value:s.name}))}}),e(T,{})]}}),e(G,{get fallback(){return e(K,{})},get children(){return e(Q,{get component(){return a().component}})}})]}})}})},ue=Object.freeze(Object.defineProperty({__proto__:null,default:oe},Symbol.toStringTag,{value:"Module"}));export{J as F,ue as a};