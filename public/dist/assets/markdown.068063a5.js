import{j as o,a6 as i,o as n,bD as m}from"./index.bdd6805b.js";import{d}from"./useUtil.beb7a30e.js";import{c as s}from"./Layout.d989349c.js";import"./api.609b6deb.js";import"./useTitle.4330860b.js";import"./index.968ff5b2.js";import"./index.d0c01aea.js";import"./FolderTree.8413e6a5.js";const j=()=>{const[r]=d(),a=t=>n.obj.name.endsWith(".md")?t:"```"+m(n.obj.name)+`
`+t+"\n```";return o(i,{get loading(){return r.loading},get children(){return o(s,{get children(){var t,e;return a((e=(t=r())==null?void 0:t.content)!=null?e:"")}})}})};export{j as default};
