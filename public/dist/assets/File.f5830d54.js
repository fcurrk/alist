import{f as e,ap as _,X as w,o,a4 as l,ah as y,aa as I,ab as g,bt as P,bC as T,C as h,bD as O,au as x,ar as D,B as m,as as S,E as A,at as L,bE as f,x as d,a9 as b,bF as $,bG as j,U as a,V as s,bH as k,bI as V,q as R,br as C,$ as M,a0 as F,D as z}from"./index.148a60fc.js";import{u as v}from"./useT.945b8470.js";import{b as B}from"./useUtil.d3e3b381.js";import{g as W}from"./icon.3c02f15b.js";import{d as H}from"./Layout.d6a36f35.js";import{O as c}from"./obj.fca5b341.js";const U=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(_,{get color(){return w()},boxSize:"$20",get as(){return W(o.obj)}}),e(l,{spacing:"$2",get children(){return[e(y,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[g(()=>P(o.obj.size))," \xB7 ",g(()=>T(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=v(),n=h(()=>O(o.obj.name));return e(d,{get when(){return n().length},get children(){return e(x,{get children(){return[e(D,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:H})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:i=>e(L,{as:"a",target:"_blank",get href(){return f(i.value,o.raw_url,o.obj.name)},get children(){return i.key}})})}})]}})}})},p=r=>{const n=v(),{copyCurrentRawLink:i}=B();return e(U,{get children(){return[e(b,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(d,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},X=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),G=r=>e(j,{w:"$full",h:"70vh",get children(){return e($.iframe,{w:"$full",h:"$full",get src(){return f(r.scheme,o.raw_url,o.obj.name)}})}}),q=r=>()=>e(G,{scheme:r}),J=[{name:"Markdown",type:c.TEXT,component:a(()=>s(()=>import("./markdown.f3873d4b.js"),["assets/markdown.f3873d4b.js","assets/index.148a60fc.js","assets/index.659f4289.css","assets/useUtil.d3e3b381.js","assets/api.be8c78b7.js","assets/useT.945b8470.js","assets/Layout.d6a36f35.js","assets/useTitle.3d643ea3.js","assets/index.74ea5c1b.js","assets/index.77774b82.js","assets/FolderTree.2a7210a0.js"]))},{name:"Text Editor",type:c.TEXT,component:a(()=>s(()=>import("./text-editor.8d13e660.js"),["assets/text-editor.8d13e660.js","assets/index.148a60fc.js","assets/index.659f4289.css","assets/useT.945b8470.js","assets/useUtil.d3e3b381.js","assets/api.be8c78b7.js"]))},{name:"HTML render",exts:["html"],component:a(()=>s(()=>import("./html.69511ece.js"),["assets/html.69511ece.js","assets/index.148a60fc.js","assets/index.659f4289.css","assets/useUtil.d3e3b381.js","assets/api.be8c78b7.js","assets/useT.945b8470.js"]))},{name:"Image",type:c.IMAGE,component:a(()=>s(()=>import("./image.6163e7cc.js"),["assets/image.6163e7cc.js","assets/index.148a60fc.js","assets/index.659f4289.css","assets/useT.945b8470.js","assets/ImageWithError.c6a60433.js"]))},{name:"Video",type:c.VIDEO,component:a(()=>s(()=>import("./video.4e80fac8.js"),["assets/video.4e80fac8.js","assets/index.148a60fc.js","assets/index.659f4289.css","assets/useUtil.d3e3b381.js","assets/api.be8c78b7.js","assets/useT.945b8470.js","assets/obj.fca5b341.js"]))},{name:"Audio",type:c.AUDIO,component:a(()=>s(()=>import("./audio.852b34d1.js"),["assets/audio.852b34d1.js","assets/audio.e5b5af14.css","assets/index.148a60fc.js","assets/index.659f4289.css","assets/useUtil.d3e3b381.js","assets/api.be8c78b7.js","assets/useT.945b8470.js","assets/obj.fca5b341.js"]))},{name:"Ipa",exts:["ipa"],component:a(()=>s(()=>import("./ipa.71718629.js"),["assets/ipa.71718629.js","assets/index.148a60fc.js","assets/index.659f4289.css","assets/useT.945b8470.js","assets/useUtil.d3e3b381.js","assets/api.be8c78b7.js","assets/icon.3c02f15b.js","assets/index.74ea5c1b.js","assets/Layout.d6a36f35.js","assets/useTitle.3d643ea3.js","assets/index.77774b82.js","assets/FolderTree.2a7210a0.js","assets/obj.fca5b341.js"]))},{name:"Plist",exts:["plist"],component:a(()=>s(()=>import("./plist.b0c3159e.js"),["assets/plist.b0c3159e.js","assets/index.148a60fc.js","assets/index.659f4289.css","assets/useT.945b8470.js","assets/useUtil.d3e3b381.js","assets/api.be8c78b7.js","assets/icon.3c02f15b.js","assets/index.74ea5c1b.js","assets/Layout.d6a36f35.js","assets/useTitle.3d643ea3.js","assets/index.77774b82.js","assets/FolderTree.2a7210a0.js","assets/obj.fca5b341.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/Aliyundrive/,component:a(()=>s(()=>import("./aliyun_office.31447642.js"),["assets/aliyun_office.31447642.js","assets/index.148a60fc.js","assets/index.659f4289.css"]))}],K=r=>{const n=[];return J.forEach(t=>{var u;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((u=t.exts)==null?void 0:u.includes(k(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),V(r.name).forEach(t=>{n.push({name:t.key,component:q(t.value)})}),n.push({name:"Download",component:a(()=>s(()=>Promise.resolve().then(()=>X),void 0))}),n},N=()=>{const r=h(()=>K({...o.obj,provider:o.provider})),[n,i]=R(r()[0]);return e(d,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(b,{w:"$full",spacing:"$2",get children(){return[e(C,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{i(r().find(u=>u.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(M,{get fallback(){return e(F,{})},get children(){return e(z,{get component(){return n().component}})}})]}})}})},ne=Object.freeze(Object.defineProperty({__proto__:null,default:N},Symbol.toStringTag,{value:"Module"}));export{U as F,ne as a};
