import{f as e,ap as _,ai as w,o,a3 as l,ag as y,a9 as I,aa as g,bt as P,bC as T,C as h,bD as O,au as x,ar as D,B as m,as as S,E as A,at as L,bE as f,x as d,a8 as b,bF as $,bG as j,U as a,V as s,bH as k,bI as V,q as R,br as C,Z as M,$ as F,D as z}from"./index.4d531652.js";import{u as v}from"./useT.77b0587b.js";import{b as B}from"./useUtil.66e20c25.js";import{g as W}from"./icon.6559bddb.js";import{d as H}from"./Layout.c7d393f3.js";import{O as c}from"./obj.fca5b341.js";const U=r=>e(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[e(_,{get color(){return w()},boxSize:"$20",get as(){return W(o.obj)}}),e(l,{spacing:"$2",get children(){return[e(y,{size:"lg",css:{wordBreak:"break-all"},get children(){return o.obj.name}}),e(I,{color:"$neutral10",size:"sm",get children(){return[g(()=>P(o.obj.size))," \xB7 ",g(()=>T(o.obj.modified))]}})]}}),e(l,{spacing:"$2",get children(){return r.children}})]}}),E=()=>{const r=v(),n=h(()=>O(o.obj.name));return e(d,{get when(){return n().length},get children(){return e(x,{get children(){return[e(D,{as:m,colorScheme:"success",get rightIcon(){return e(_,{as:H})},get children(){return r("home.preview.open_with")}}),e(S,{get children(){return e(A,{get each(){return n()},children:i=>e(L,{as:"a",target:"_blank",get href(){return f(i.value,o.raw_url,o.obj.name)},get children(){return i.key}})})}})]}})}})},p=r=>{const n=v(),{copyCurrentRawLink:i}=B();return e(U,{get children(){return[e(b,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",onClick:()=>i(!0),get children(){return n("home.toolbar.copy_link")}}),e(m,{as:"a",get href(){return o.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),e(d,{get when(){return r.openWith},get children(){return e(E,{})}})]}})},G=Object.freeze(Object.defineProperty({__proto__:null,Download:p,default:p},Symbol.toStringTag,{value:"Module"})),X=r=>e(j,{w:"$full",h:"70vh",get children(){return e($.iframe,{w:"$full",h:"$full",get src(){return f(r.scheme,o.raw_url,o.obj.name)}})}}),q=r=>()=>e(X,{scheme:r}),Z=[{name:"Markdown",type:c.TEXT,component:a(()=>s(()=>import("./markdown.086c28db.js"),["assets/markdown.086c28db.js","assets/index.4d531652.js","assets/index.659f4289.css","assets/useUtil.66e20c25.js","assets/api.80f89616.js","assets/useT.77b0587b.js","assets/Layout.c7d393f3.js","assets/useTitle.32e7ad98.js","assets/index.a9d44724.js","assets/index.8a25e48a.js","assets/FolderTree.6f7ef27d.js"]))},{name:"Text Editor",type:c.TEXT,component:a(()=>s(()=>import("./text-editor.afad7a34.js"),["assets/text-editor.afad7a34.js","assets/index.4d531652.js","assets/index.659f4289.css","assets/useT.77b0587b.js","assets/useUtil.66e20c25.js","assets/api.80f89616.js"]))},{name:"HTML render",exts:["html"],component:a(()=>s(()=>import("./html.a73337c0.js"),["assets/html.a73337c0.js","assets/index.4d531652.js","assets/index.659f4289.css","assets/useUtil.66e20c25.js","assets/api.80f89616.js","assets/useT.77b0587b.js"]))},{name:"Image",type:c.IMAGE,component:a(()=>s(()=>import("./image.67733d9f.js"),["assets/image.67733d9f.js","assets/index.4d531652.js","assets/index.659f4289.css","assets/useT.77b0587b.js","assets/ImageWithError.8f15ea83.js"]))},{name:"Video",type:c.VIDEO,component:a(()=>s(()=>import("./video.f7057700.js"),["assets/video.f7057700.js","assets/index.4d531652.js","assets/index.659f4289.css","assets/useUtil.66e20c25.js","assets/api.80f89616.js","assets/useT.77b0587b.js","assets/obj.fca5b341.js"]))},{name:"Audio",type:c.AUDIO,component:a(()=>s(()=>import("./audio.04f414a1.js"),["assets/audio.04f414a1.js","assets/audio.e5b5af14.css","assets/index.4d531652.js","assets/index.659f4289.css","assets/useUtil.66e20c25.js","assets/api.80f89616.js","assets/useT.77b0587b.js","assets/obj.fca5b341.js"]))},{name:"Ipa",exts:["ipa"],component:a(()=>s(()=>import("./ipa.871a480f.js"),["assets/ipa.871a480f.js","assets/index.4d531652.js","assets/index.659f4289.css","assets/useT.77b0587b.js","assets/useUtil.66e20c25.js","assets/api.80f89616.js","assets/icon.6559bddb.js","assets/index.a9d44724.js","assets/Layout.c7d393f3.js","assets/useTitle.32e7ad98.js","assets/index.8a25e48a.js","assets/FolderTree.6f7ef27d.js","assets/obj.fca5b341.js"]))},{name:"Plist",exts:["plist"],component:a(()=>s(()=>import("./plist.0d5a3f14.js"),["assets/plist.0d5a3f14.js","assets/index.4d531652.js","assets/index.659f4289.css","assets/useT.77b0587b.js","assets/useUtil.66e20c25.js","assets/api.80f89616.js","assets/icon.6559bddb.js","assets/index.a9d44724.js","assets/Layout.c7d393f3.js","assets/useTitle.32e7ad98.js","assets/index.8a25e48a.js","assets/FolderTree.6f7ef27d.js","assets/obj.fca5b341.js"]))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/Aliyundrive/,component:a(()=>s(()=>import("./aliyun_office.7b4baf23.js"),["assets/aliyun_office.7b4baf23.js","assets/index.4d531652.js","assets/index.659f4289.css"]))}],J=r=>{const n=[];return Z.forEach(t=>{var u;t.provider&&!t.provider.test(r.provider)||(t.type===r.type||t.exts==="*"||((u=t.exts)==null?void 0:u.includes(k(r.name).toLowerCase())))&&n.push({name:t.name,component:t.component})}),V(r.name).forEach(t=>{n.push({name:t.key,component:q(t.value)})}),n.push({name:"Download",component:a(()=>s(()=>Promise.resolve().then(()=>G),void 0))}),n},K=()=>{const r=h(()=>J({...o.obj,provider:o.provider})),[n,i]=R(r()[0]);return e(d,{get when(){return r().length>1},get fallback(){return e(p,{openWith:!0})},get children(){return e(l,{w:"$full",spacing:"$2",get children(){return[e(b,{w:"$full",spacing:"$2",get children(){return[e(C,{alwaysShowBorder:!0,get value(){return n().name},onChange:t=>{i(r().find(u=>u.name===t))},get options(){return r().map(t=>({value:t.name}))}}),e(E,{})]}}),e(M,{get fallback(){return e(F,{})},get children(){return e(z,{get component(){return n().component}})}})]}})}})},ne=Object.freeze(Object.defineProperty({__proto__:null,default:K},Symbol.toStringTag,{value:"Module"}));export{U as F,ne as a};