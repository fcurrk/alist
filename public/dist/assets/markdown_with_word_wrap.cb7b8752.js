import{j as e,a6 as i,o as n,bD as m}from"./index.0fdefd78.js";import{d}from"./useUtil.a439b142.js";import{d as s}from"./Layout.5624d351.js";import"./api.3a9422f5.js";import"./useTitle.1c1a1984.js";import"./index.bd41ac8f.js";import"./index.42db5075.js";import"./FolderTree.221d321a.js";const j=()=>{const[t]=d(),a=r=>n.obj.name.endsWith(".md")?r:"```"+m(n.obj.name)+`
`+r+"\n```";return e(i,{get loading(){return t.loading},get children(){return e(s,{class:"word-wrap",get children(){var r,o;return a((o=(r=t())==null?void 0:r.content)!=null?o:"")}})}})};export{j as default};
