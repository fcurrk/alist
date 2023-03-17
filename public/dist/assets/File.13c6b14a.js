import{j as e,aq as g,ag as y,o as i,a3 as l,ao as I,a9 as O,aa as d,bx as P,bI as T,d as h,C as v,bJ as L,al as D,ae as x,B as m,ai as A,E as j,aj as k,bK as b,y as _,a8 as f,bL as S,bM as V,U as o,V as a,bG as $,bN as R,r as M,aU as C,Z as F,$ as z,D as B}from"./index.59b72c74.js";import{a as w,b as W}from"./useUtil.0907f580.js";import{g as U,O as s}from"./icon.805602ff.js";import{l as H}from"./index.ee21872a.js";const X=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(g,{get color(){return y()},boxSize:"$20",get as(){return U(i.obj)}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(O,{color:"$neutral10",size:"sm",get children(){return[d(()=>P(i.obj.size))," \xB7 ",d(()=>T(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=h(),n=v(()=>L(i.obj.name)),{currentObjLink:u}=w();return e(_,{get when(){return n().length},get children(){return e(D,{get children(){return[e(x,{as:m,colorScheme:"success",get rightIcon(){return e(g,{as:H})},get children(){return r("home.preview.open_with")}}),e(A,{get children(){return e(j,{get each(){return n()},children:t=>e(k,{as:"a",target:"_blank",get href(){return b(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:u(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=h(),{copyCurrentRawLink:u}=W();return e(X,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>u(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(_,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},G=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),q=r=>{const{currentObjLink:n}=w();return e(V,{w:"$full",h:"70vh",get children(){return e(S.iframe,{w:"$full",h:"$full",get src(){return b(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)})}})}})},J=r=>()=>e(q,{scheme:r}),K=[{name:"Aliyun Video Previewer",type:s.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.fc21d8eb.js"),["assets/aliyun_video.fc21d8eb.js","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/useUtil.0907f580.js","assets/api.ef283c64.js","assets/icon.805602ff.js","assets/index.9a324973.js","assets/index.ee21872a.js","assets/hls.fe9c2d9f.js","assets/Layout.9014e8fc.js","assets/index.5e350589.js","assets/FolderTree.3882678e.js"]))},{name:"Markdown",type:s.TEXT,component:o(()=>a(()=>import("./markdown.8ecf7e0c.js"),["assets/markdown.8ecf7e0c.js","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/useUtil.0907f580.js","assets/api.ef283c64.js","assets/Layout.9014e8fc.js","assets/index.9a324973.js","assets/index.ee21872a.js","assets/index.5e350589.js","assets/FolderTree.3882678e.js"]))},{name:"Markdown with word wrap",type:s.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.3381a8c9.js"),["assets/markdown_with_word_wrap.3381a8c9.js","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/useUtil.0907f580.js","assets/api.ef283c64.js","assets/Layout.9014e8fc.js","assets/index.9a324973.js","assets/index.ee21872a.js","assets/index.5e350589.js","assets/FolderTree.3882678e.js"]))},{name:"Text Editor",type:s.TEXT,component:o(()=>a(()=>import("./text-editor.595dd049.js"),["assets/text-editor.595dd049.js","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/useUtil.0907f580.js","assets/api.ef283c64.js"]))},{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.ef0f3dc4.js"),["assets/html.ef0f3dc4.js","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/useUtil.0907f580.js","assets/api.ef283c64.js"]))},{name:"Image",type:s.IMAGE,component:o(()=>a(()=>import("./image.ff42d78a.js"),["assets/image.ff42d78a.js","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/ImageWithError.6932355f.js"]))},{name:"Video",type:s.VIDEO,component:o(()=>a(()=>import("./video.a9856f6e.js"),["assets/video.a9856f6e.js","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/useUtil.0907f580.js","assets/api.ef283c64.js","assets/icon.805602ff.js","assets/index.9a324973.js","assets/index.ee21872a.js","assets/hls.fe9c2d9f.js","assets/Layout.9014e8fc.js","assets/index.5e350589.js","assets/FolderTree.3882678e.js"]))},{name:"Audio",type:s.AUDIO,component:o(()=>a(()=>import("./audio.b771a5be.js"),["assets/audio.b771a5be.js","assets/audio.e5b5af14.css","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/useUtil.0907f580.js","assets/api.ef283c64.js","assets/icon.805602ff.js","assets/index.9a324973.js","assets/index.ee21872a.js"]))},{name:"Ipa",exts:["ipa","tipa"],component:o(()=>a(()=>import("./ipa.d131888f.js"),["assets/ipa.d131888f.js","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/useUtil.0907f580.js","assets/api.ef283c64.js","assets/icon.805602ff.js","assets/index.9a324973.js","assets/index.ee21872a.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.812a8fd7.js"),["assets/plist.812a8fd7.js","assets/index.59b72c74.js","assets/index.15d8d646.css","assets/useUtil.0907f580.js","assets/api.ef283c64.js","assets/icon.805602ff.js","assets/index.9a324973.js","assets/index.ee21872a.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.b8383934.js"),["assets/aliyun_office.b8383934.js","assets/index.59b72c74.js","assets/index.15d8d646.css"]))}],N=r=>{const n=[];return K.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes($(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),R(r.name).forEach(t=>{n.push({name:t.key,component:J(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>G),void 0))}),n},Z=()=>{const r=v(()=>N({...i.obj,provider:i.provider})),[n,u]=M(r()[0]);return e(_,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(C,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{u(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(F,{get fallback(){return e(z,{})},get children(){return e(B,{get component(){return n().component}})}})]}})}})},te=Object.freeze(Object.defineProperty({__proto__:null,default:Z},Symbol.toStringTag,{value:"Module"}));export{X as F,te as a};
