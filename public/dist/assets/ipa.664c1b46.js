import{a as m,d as n,W as p,h as e,a2 as u,B as r,cV as g,cW as d,Q as a,cU as f}from"./index.d1042545.js";import{F as h}from"./File.2d72c579.js";import"./icon.b2bb8833.js";import"./index.0aad9d59.js";import"./index.1dc57244.js";import"./Layout.5ed150bb.js";import"./index.4d8fd0d1.js";import"./FolderTree.a0ab30c3.js";const j=()=>{const t=m(),[i,o]=n(!1),[s,l]=n(!1),{currentObjLink:c}=p();return e(h,{get children(){return e(u,{spacing:"$2",get children(){return[e(r,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${g}/i/${d(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return t(`home.preview.${i()?"installing":"install"}`)}}),e(r,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(c(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{j as default};
