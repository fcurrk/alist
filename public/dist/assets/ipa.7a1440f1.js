import{a as m,d as n,W as p,h as e,a2 as u,B as r,cY as g,cZ as d,Q as a,cX as f}from"./index.c1a63d86.js";import{F as h}from"./File.c7de61b8.js";import"./icon.903f84c1.js";import"./index.8c955772.js";import"./index.ab049ea3.js";import"./Layout.cabd71de.js";import"./index.f3796517.js";import"./FolderTree.c644047b.js";import"./index.9bdf72f4.js";const B=()=>{const t=m(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{B as default};