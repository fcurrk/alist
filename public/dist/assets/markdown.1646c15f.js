import{f as o,a6 as i,o as e,bH as a}from"./index.fef9cb41.js";import{d as m}from"./useUtil.663beaf3.js";import{i as d}from"./Layout.e8419ada.js";import"./api.77399434.js";import"./useT.82c0a536.js";import"./useTitle.873ac4ac.js";import"./index.3cbd4ead.js";import"./index.78d25804.js";import"./FolderTree.57444eb2.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+a(e.obj.name)+`
`+t+"\n```";return o(i,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};
