import{f as o,a6 as i,o as e,bH as a}from"./index.72439646.js";import{d as m}from"./useUtil.0e9909f6.js";import{i as d}from"./Layout.1972c0cc.js";import"./api.311bfafa.js";import"./useT.3364d7ad.js";import"./useTitle.259e9149.js";import"./index.1606d102.js";import"./index.3938a492.js";import"./FolderTree.705382b8.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+a(e.obj.name)+`
`+t+"\n```";return o(i,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};