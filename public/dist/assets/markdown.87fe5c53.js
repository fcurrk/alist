import{f as o,a6 as i,o as e,bH as a}from"./index.391731d6.js";import{d as m}from"./useUtil.23d78025.js";import{i as d}from"./Layout.f66c8bb4.js";import"./api.1356c391.js";import"./useT.ccb89ace.js";import"./useTitle.2e76c260.js";import"./index.a573c6ca.js";import"./index.3b1a0ee3.js";import"./FolderTree.8825f181.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+a(e.obj.name)+`
`+t+"\n```";return o(i,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};
