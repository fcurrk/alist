import{f as e,am as _,bb as w,o,a3 as l,be as y,a9 as I,aa as g,bu as P,bD as T,C as h,bE as O,ar as x,ao as D,B as m,ap as S,E as A,aq as L,bF as f,x as d,a8 as b,bG as $,bH as j,U as a,V as s,bI as k,bJ as V,q as R,bs as M,Z as C,$ as F,D as z}from"./index.8a072262.js";import{u as v}from"./useT.62de73a4.js";import{b as B}from"./useUtil.3360a3b0.js";import{g as W}from"./icon.47068db8.js";import{c as H}from"./Layout.acf4f1c7.js";import{O as c}from"./obj.fca5b341.js";const U=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(_,{get color(){return w()},boxSize:"$20",get as(){return W(o.obj)}}),e(l,{spacing:"$2",get children(){return[e(y,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[g(()=>P(o.obj.size))," \xB7 ",g(()=>T(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=v(),n=h(()=>O(o.obj.name));return e(d,{get when(){return n().length},get children(){return e(x,{get children(){return[e(D,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:H})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:i=>e(L,{as:"a",target:"_blank",get href(){return f(i.value,o.raw_url,o.obj.name)},get children(){return i.key}})})}})]}})}})},p=r=>{const n=v(),{copyCurrentRawLink:i}=B();return e(U,{get children(){return[e(b,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(d,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},q=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),G=r=>e(j,{w:"$full",h:"70vh",get children(){return e($.iframe,{w:"$full",h:"$full",get src(){return f(r.scheme,o.raw_url,o.obj.name)}})}}),X=r=>()=>e(G,{scheme:r}),J=[{name:"Markdown",type:c.TEXT,component:a(()=>s(()=>import("./markdown.2c70f478.js"),["assets/markdown.2c70f478.js","assets/index.8a072262.js","assets/index.659f4289.css","assets/useUtil.3360a3b0.js","assets/api.f863ab58.js","assets/useT.62de73a4.js","assets/Layout.acf4f1c7.js","assets/useTitle.f3bd12f9.js","assets/index.a36341ea.js","assets/index.b074ff66.js","assets/FolderTree.0e7b9cf6.js"]))},{name:"Text Editor",type:c.TEXT,component:a(()=>s(()=>import("./text-editor.dc53a4ed.js"),["assets/text-editor.dc53a4ed.js","assets/index.8a072262.js","assets/index.659f4289.css","assets/useT.62de73a4.js","assets/useUtil.3360a3b0.js","assets/api.f863ab58.js"]))},{name:"HTML render",exts:["html"],component:a(()=>s(()=>import("./html.1a958593.js"),["assets/html.1a958593.js","assets/index.8a072262.js","assets/index.659f4289.css","assets/useUtil.3360a3b0.js","assets/api.f863ab58.js","assets/useT.62de73a4.js"]))},{name:"Image",type:c.IMAGE,component:a(()=>s(()=>import("./image.37be0671.js"),["assets/image.37be0671.js","assets/index.8a072262.js","assets/index.659f4289.css","assets/useT.62de73a4.js","assets/ImageWithError.f3fc01b1.js"]))},{name:"Video",type:c.VIDEO,component:a(()=>s(()=>import("./video.df90e32c.js"),["assets/video.df90e32c.js","assets/index.8a072262.js","assets/index.659f4289.css","assets/useUtil.3360a3b0.js","assets/api.f863ab58.js","assets/useT.62de73a4.js","assets/obj.fca5b341.js"]))},{name:"Audio",type:c.AUDIO,component:a(()=>s(()=>import("./audio.17998e12.js"),["assets/audio.17998e12.js","assets/audio.e5b5af14.css","assets/index.8a072262.js","assets/index.659f4289.css","assets/useUtil.3360a3b0.js","assets/api.f863ab58.js","assets/useT.62de73a4.js","assets/obj.fca5b341.js"]))},{name:"Ipa",exts:["ipa"],component:a(()=>s(()=>import("./ipa.2b518be1.js"),["assets/ipa.2b518be1.js","assets/index.8a072262.js","assets/index.659f4289.css","assets/useT.62de73a4.js","assets/useUtil.3360a3b0.js","assets/api.f863ab58.js","assets/icon.47068db8.js","assets/index.a36341ea.js","assets/Layout.acf4f1c7.js","assets/useTitle.f3bd12f9.js","assets/index.b074ff66.js","assets/FolderTree.0e7b9cf6.js","assets/obj.fca5b341.js"]))},{name:"Plist",exts:["plist"],component:a(()=>s(()=>import("./plist.9de02c04.js"),["assets/plist.9de02c04.js","assets/index.8a072262.js","assets/index.659f4289.css","assets/useT.62de73a4.js","assets/useUtil.3360a3b0.js","assets/api.f863ab58.js","assets/icon.47068db8.js","assets/index.a36341ea.js","assets/Layout.acf4f1c7.js","assets/useTitle.f3bd12f9.js","assets/index.b074ff66.js","assets/FolderTree.0e7b9cf6.js","assets/obj.fca5b341.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/Aliyundrive/,component:a(()=>s(()=>import("./aliyun_office.f81ae84a.js"),["assets/aliyun_office.f81ae84a.js","assets/index.8a072262.js","assets/index.659f4289.css"]))}],Z=r=>{const n=[];return J.forEach(t=>{var u;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((u=t.exts)==null?void 0:u.includes(k(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),V(r.name).forEach(t=>{n.push({name:t.key,component:X(t.value)})}),n.push({name:"Download",component:a(()=>s(()=>Promise.resolve().then(()=>q),void 0))}),n},K=()=>{const r=h(()=>Z({...o.obj,provider:o.provider})),[n,i]=R(r()[0]);return e(d,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(b,{w:"$full",spacing:"$2",get children(){return[e(M,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{i(r().find(u=>u.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(C,{get fallback(){return e(F,{})},get children(){return e(z,{get component(){return n().component}})}})]}})}})},ne=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{U as F,ne as a};
