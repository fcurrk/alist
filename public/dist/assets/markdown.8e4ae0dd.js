import{f as o,a6 as i,o as e,bI as a}from"./index.bef8b5a1.js";import{d as m}from"./useUtil.7e3547e0.js";import{i as d}from"./Layout.4975a471.js";import"./api.7435e71f.js";import"./useT.60108eed.js";import"./useTitle.32d311f1.js";import"./index.66073b7e.js";import"./index.1a51cbe7.js";import"./FolderTree.73501299.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+a(e.obj.name)+`
`+t+"\n```";return o(i,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};
