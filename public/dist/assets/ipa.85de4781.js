import{d as c,r,j as e,a8 as p,B as n,bd as u,cx as g,o as a,cw as d}from"./index.af305b75.js";import{a as f}from"./useUtil.cda97e08.js";import{F as h}from"./File.37344113.js";import"./api.b639104e.js";import"./icon.5a91694f.js";import"./index.366a1a5c.js";import"./index.4dd2fedf.js";import"./Layout.23de6123.js";import"./index.935e734b.js";import"./FolderTree.48256a21.js";const R=()=>{const t=c(),[o,i]=r(!1),[s,l]=r(!1),{currentObjLink:m}=f();return e(h,{get children(){return e(p,{spacing:"$2",get children(){return[e(n,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${u}/i/${g(encodeURIComponent(a.raw_url)+"/"+d(encodeURIComponent(a.obj.name)))}.plist`},onClick:()=>{i(!0)},get children(){return t(`home.preview.${o()?"installing":"install"}`)}}),e(n,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(m(!0))},onClick:()=>{l(!0)},get children(){return t(`home.preview.${s()?"tr-installing":"tr-install"}`)}})]}})}})};export{R as default};