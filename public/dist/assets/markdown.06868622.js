import{f as o,a6 as i,o as e,bI as a}from"./index.b8d4b59c.js";import{d as m}from"./useUtil.35e14840.js";import{i as d}from"./Layout.fa885061.js";import"./api.6cdc1ac1.js";import"./useT.09a4da11.js";import"./useTitle.22e2597e.js";import"./index.c275b02a.js";import"./index.aac7cc44.js";import"./FolderTree.97f85e6a.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+a(e.obj.name)+`
`+t+"\n```";return o(i,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};
