import{j as e,a6 as i,o as n,bG as m}from"./index.cb2d922e.js";import{d as s}from"./useUtil.f0a77470.js";import{c as d}from"./Layout.3bb79f74.js";import"./api.d6456488.js";import"./index.d0d14d03.js";import"./index.f378f389.js";import"./index.4c25a459.js";import"./FolderTree.1929dee6.js";const j=()=>{const[t]=s(),a=r=>n.obj.name.endsWith(".md")?r:"```"+m(n.obj.name)+`
`+r+"\n```";return e(i,{get loading(){return t.loading},get children(){return e(d,{class:"word-wrap",get children(){var r,o;return a((o=(r=t())==null?void 0:r.content)!=null?o:"")}})}})};export{j as default};
