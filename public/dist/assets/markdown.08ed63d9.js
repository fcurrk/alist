import{f as o,a6 as a,o as e,bG as i}from"./index.84ab5176.js";import{d as m}from"./useUtil.ae989202.js";import{g as d}from"./Layout.cec277ec.js";import"./api.64a78768.js";import"./useT.7f765a5d.js";import"./useTitle.60cd344d.js";import"./index.69fc8b09.js";import"./index.806618b3.js";import"./FolderTree.24f371f2.js";const M=()=>{const[r]=m(),n=t=>e.obj.name.endsWith(".md")?t:"```"+i(e.obj.name)+`
`+t+"\n```";return o(a,{get loading(){return r.loading},get children(){return o(d,{get children(){var t;return n((t=r())==null?void 0:t.content)}})}})};export{M as default};
