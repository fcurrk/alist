import{j as e,aq as g,ag as y,o as i,a3 as l,ao as I,a9 as O,aa as d,bu as P,bF as T,d as h,C as v,bG as D,al as L,ae as A,B as m,ai as S,E as j,aj as k,bH as b,y as _,a8 as f,bI as x,bJ as V,U as o,V as a,bD as $,bK as R,r as M,aU as C,Z as F,$ as z,D as B}from"./index.4d35a4c1.js";import{a as w,b as W}from"./useUtil.1d5cb808.js";import{g as H,O as s}from"./icon.3c163793.js";import{S as U}from"./index.0f6177f9.js";const X=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(g,{get color(){return y()},boxSize:"$20",get as(){return H(i.obj)}}),e(l,{spacing:"$2",get children(){return[e(I,{size:"lg",css:{wordBreak:"break-all"},get children(){return i.obj.name}}),e(O,{color:"$neutral10",size:"sm",get children(){return[d(()=>P(i.obj.size))," \xB7 ",d(()=>T(i.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=h(),n=v(()=>D(i.obj.name)),{currentObjLink:u}=w();return e(_,{get when(){return n().length},get children(){return e(L,{get children(){return[e(A,{as:m,colorScheme:"success",get rightIcon(){return e(g,{as:U})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(j,{get each(){return n()},children:t=>e(k,{as:"a",target:"_blank",get href(){return b(t.value,{raw_url:i.raw_url,name:i.obj.name,d_url:u(!0)})},get children(){return t.key}})})}})]}})}})},p=r=>{const n=h(),{copyCurrentRawLink:u}=W();return e(X,{get children(){return[e(f,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>u(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return i.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(_,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},G=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),q=r=>{const{currentObjLink:n}=w();return e(V,{w:"$full",h:"70vh",get children(){return e(x.iframe,{w:"$full",h:"$full",get src(){return b(r.scheme,{raw_url:i.raw_url,name:i.obj.name,d_url:n(!0)})}})}})},J=r=>()=>e(q,{scheme:r}),K=[{name:"Aliyun Video Previewer",type:s.VIDEO,provider:/^Aliyundrive(Open)?$/,component:o(()=>a(()=>import("./aliyun_video.273d50a3.js"),["assets/aliyun_video.273d50a3.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/useUtil.1d5cb808.js","assets/api.dc069bca.js","assets/icon.3c163793.js","assets/index.0f6177f9.js","assets/hls.cd90460f.js","assets/Layout.bfe096d4.js","assets/useTitle.b2f9bddd.js","assets/index.3b907934.js","assets/FolderTree.04334d5e.js"]))},{name:"Markdown",type:s.TEXT,component:o(()=>a(()=>import("./markdown.d3e37b70.js"),["assets/markdown.d3e37b70.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/useUtil.1d5cb808.js","assets/api.dc069bca.js","assets/Layout.bfe096d4.js","assets/useTitle.b2f9bddd.js","assets/index.0f6177f9.js","assets/index.3b907934.js","assets/FolderTree.04334d5e.js"]))},{name:"Markdown with word wrap",type:s.TEXT,component:o(()=>a(()=>import("./markdown_with_word_wrap.4b9c4685.js"),["assets/markdown_with_word_wrap.4b9c4685.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/useUtil.1d5cb808.js","assets/api.dc069bca.js","assets/Layout.bfe096d4.js","assets/useTitle.b2f9bddd.js","assets/index.0f6177f9.js","assets/index.3b907934.js","assets/FolderTree.04334d5e.js"]))},{name:"Text Editor",type:s.TEXT,component:o(()=>a(()=>import("./text-editor.a89c7d80.js"),["assets/text-editor.a89c7d80.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/useUtil.1d5cb808.js","assets/api.dc069bca.js"]))},{name:"HTML render",exts:["html"],component:o(()=>a(()=>import("./html.360e3029.js"),["assets/html.360e3029.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/useUtil.1d5cb808.js","assets/api.dc069bca.js"]))},{name:"Image",type:s.IMAGE,component:o(()=>a(()=>import("./image.33e5ed7e.js"),["assets/image.33e5ed7e.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/ImageWithError.dfa84666.js"]))},{name:"Video",type:s.VIDEO,component:o(()=>a(()=>import("./video.9c616d90.js"),["assets/video.9c616d90.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/useUtil.1d5cb808.js","assets/api.dc069bca.js","assets/icon.3c163793.js","assets/index.0f6177f9.js","assets/hls.cd90460f.js","assets/Layout.bfe096d4.js","assets/useTitle.b2f9bddd.js","assets/index.3b907934.js","assets/FolderTree.04334d5e.js"]))},{name:"Audio",type:s.AUDIO,component:o(()=>a(()=>import("./audio.8e73fa0b.js"),["assets/audio.8e73fa0b.js","assets/audio.e5b5af14.css","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/useUtil.1d5cb808.js","assets/api.dc069bca.js","assets/icon.3c163793.js","assets/index.0f6177f9.js"]))},{name:"Ipa",exts:["ipa"],component:o(()=>a(()=>import("./ipa.d0e3c61e.js"),["assets/ipa.d0e3c61e.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/useUtil.1d5cb808.js","assets/api.dc069bca.js","assets/icon.3c163793.js","assets/index.0f6177f9.js"]))},{name:"Plist",exts:["plist"],component:o(()=>a(()=>import("./plist.1c69f45a.js"),["assets/plist.1c69f45a.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css","assets/useUtil.1d5cb808.js","assets/api.dc069bca.js","assets/icon.3c163793.js","assets/index.0f6177f9.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:o(()=>a(()=>import("./aliyun_office.0bfa8d38.js"),["assets/aliyun_office.0bfa8d38.js","assets/index.4d35a4c1.js","assets/index.15d8d646.css"]))}],Z=r=>{const n=[];return K.forEach(t=>{var c;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((c=t.exts)==null?void 0:c.includes($(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),R(r.name).forEach(t=>{n.push({name:t.key,component:J(t.value)})}),n.push({name:"Download",component:o(()=>a(()=>Promise.resolve().then(()=>G),void 0))}),n},N=()=>{const r=v(()=>Z({...i.obj,provider:i.provider})),[n,u]=M(r()[0]);return e(_,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(f,{w:"$full",spacing:"$2",get children(){return[e(C,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{u(r().find(c=>c.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(F,{get fallback(){return e(z,{})},get children(){return e(B,{get component(){return n().component}})}})]}})}})},te=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{X as F,te as a};
