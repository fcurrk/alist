import{f as o,a6 as i,o as e,bH as a}from"./index.4d531652.js";import{d as m}from"./useUtil.66e20c25.js";import{i as d}from"./Layout.c7d393f3.js";import"./api.80f89616.js";import"./useT.77b0587b.js";import"./useTitle.32e7ad98.js";import"./index.a9d44724.js";import"./index.8a25e48a.js";import"./FolderTree.6f7ef27d.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+a(e.obj.name)+`
`+t+"\n```";return o(i,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};