import{j as o,a6 as i,o as n,bG as m}from"./index.edeea06c.js";import{d}from"./useUtil.fbda1f15.js";import{c as s}from"./Layout.4f29ee7a.js";import"./api.f6bdc3db.js";import"./index.0d6fe629.js";import"./index.ecbc2742.js";import"./index.6384ac61.js";import"./FolderTree.c3d9e2a4.js";const j=()=>{const[r]=d(),a=t=>n.obj.name.endsWith(".md")?t:"```"+m(n.obj.name)+`
`+t+"\n```";return o(i,{get loading(){return r.loading},get children(){return o(s,{get children(){var t,e;return a((e=(t=r())==null?void 0:t.content)!=null?e:"")}})}})};export{j as default};
