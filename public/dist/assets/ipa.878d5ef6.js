import{d as i,r as l,j as e,a8 as c,B as t,ba as m,cs as p,o as n,cr as u}from"./index.98d565c5.js";import{F as d}from"./File.61a3b70f.js";import{b as g}from"./useUtil.fe981c1a.js";import"./icon.29aece9e.js";import"./index.7f74676e.js";import"./api.81b05302.js";const I=()=>{const r=i(),[a,o]=l(!1),{copyCurrentRawLink:s}=g();return e(d,{get children(){return e(c,{spacing:"$2",get children(){return[e(t,{as:"a",get href(){return`itms-services://?action=download-manifest&url=${m}/i/${p(encodeURIComponent(n.raw_url)+"/"+u(encodeURIComponent(n.obj.name)))}.plist`},onClick:()=>{o(!0)},get children(){return r(`home.preview.${a()?"installing":"install"}`)}}),e(t,{colorScheme:"danger",as:"a",get href(){return n.raw_url},target:"_blank",get children(){return r("home.preview.download")}}),e(t,{colorScheme:"accent",onClick:()=>s(!0),get children(){return r("home.toolbar.copy_link")}})]}})}})};export{I as default};
