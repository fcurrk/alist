import{e,a2 as c,f as a,bX as s,S as l,c2 as d}from"./index.81d39995.js";import{e as u,a as g}from"./useUtil.463d9475.js";import{E as m}from"./Layout.5989c7a2.js";import"./api.1d953ab9.js";import"./index.c881ffc6.js";import"./index.298520c2.js";import"./index.ea6a88bc.js";import"./FolderTree.531b3088.js";function h(r){const[t,n]=a("utf-8"),{isString:o,text:i}=g(r.children);return e(d,{w:"$full",h:"70vh",pos:"relative",get children(){return[e(s.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return i(t())}}),e(l,{when:!o,get children(){return e(m,{get encoding(){return t()},setEncoding:n})}})]}})}const b=()=>{const[r]=u();return e(c,{get loading(){return r.loading},get children(){return e(h,{get children(){var t;return(t=r())==null?void 0:t.content}})}})};export{b as default};