import{a as c,m as n,a5 as p,h as e,ae as u,C as r,dI as g,dJ as d,a1 as a,dH as f}from"./index.9b78fa9f.js";import{F as h}from"./File.c7938478.js";import"./icon.14a6cef7.js";import"./index.1bbe8a05.js";import"./Layout.b7134346.js";import"./useTitle.3242060b.js";import"./index.20f512e4.js";import"./FolderTree.b92c2ff2.js";import"./index.3cbf9a2f.js";const R=()=>{const t=c(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:m}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};