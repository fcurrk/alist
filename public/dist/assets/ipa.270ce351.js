import{d as c,r,j as e,a8 as p,B as n,bn as u,cx as g,o as a,cw as f}from"./index.5c2ea107.js";import{a as d}from"./useUtil.7880b1a3.js";import{F as h}from"./File.60327319.js";import"./api.6547826f.js";import"./icon.341c253b.js";import"./index.a0c3f668.js";import"./index.d210cf4c.js";import"./Layout.003fea85.js";import"./index.33783a67.js";import"./FolderTree.3a69dd74.js";const R=()=>{const t=c(),[o,i]=r(!1),[s,l]=r(!1),{currentObjLink:m}=d();return e(h,{get children(){return e(p,{spacing:"$2",get children(){return[e(n,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${u}/i/${g(encodeURIComponent(a.raw_url)+"/"+f(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{i(!0)},get children(){return t(`home.preview.${o()?"installing":"install"}`)}}),e(n,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};