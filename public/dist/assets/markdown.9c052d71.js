import{f as o,a6 as a,o as e,bH as i}from"./index.233ebb27.js";import{d as m}from"./useUtil.287e7f37.js";import{g as d}from"./Layout.bd379826.js";import"./api.700a4b79.js";import"./useT.be6ed02e.js";import"./useTitle.8f5612ae.js";import"./index.8e3018a3.js";import"./index.41e40499.js";import"./FolderTree.b2752e87.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+i(e.obj.name)+`
`+t+"\n```";return o(a,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};
