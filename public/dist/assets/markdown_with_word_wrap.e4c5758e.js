import{j as e,a6 as i,o as n,bG as m}from"./index.40816f11.js";import{d}from"./useUtil.5c451923.js";import{d as s}from"./Layout.c92d5890.js";import"./api.6d470299.js";import"./index.f20dcbc9.js";import"./index.314f866f.js";import"./index.9eaaa32d.js";import"./FolderTree.b9461c13.js";const j=()=>{const[t]=d(),a=r=>n.obj.name.endsWith(".md")?r:"```"+m(n.obj.name)+`
`+r+"\n```";return e(i,{get loading(){return t.loading},get children(){return e(s,{class:"word-wrap",get children(){var r,o;return a((o=(r=t())==null?void 0:r.content)!=null?o:"")}})}})};export{j as default};
