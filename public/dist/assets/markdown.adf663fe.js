import{f as o,a6 as a,o as e,bI as i}from"./index.276b7cff.js";import{d as m}from"./useUtil.d6c6c464.js";import{g as d}from"./Layout.c5327097.js";import"./api.aa4b5328.js";import"./useT.a3cb5bff.js";import"./useTitle.12d68a23.js";import"./index.0b448c98.js";import"./index.7af20938.js";import"./FolderTree.2d1fa4ed.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+i(e.obj.name)+`
`+t+"\n```";return o(a,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};
