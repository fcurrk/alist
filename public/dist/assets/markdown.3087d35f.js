import{f as o,a6 as i,o as e,bI as a}from"./index.d3f6491e.js";import{d as m}from"./useUtil.c5d09d43.js";import{i as d}from"./Layout.d90157a5.js";import"./api.2484b6d6.js";import"./useT.55cd4d42.js";import"./useTitle.37b85ae7.js";import"./index.db3f03ae.js";import"./index.224ec239.js";import"./FolderTree.14ca198b.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+a(e.obj.name)+`
`+t+"\n```";return o(i,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};
