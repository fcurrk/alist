import{a as c,k as n,a4 as p,e,ad as u,B as r,d7 as g,d8 as d,a0 as a,d6 as f}from"./index.3541059f.js";import{F as h}from"./File.d9cebcc2.js";import"./icon.380ceafe.js";import"./index.56116929.js";import"./index.5c0aad25.js";import"./Layout.68c4a39b.js";import"./index.5ca25073.js";import"./FolderTree.2434141b.js";import"./index.e1e6459e.js";const B=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{B as default};
