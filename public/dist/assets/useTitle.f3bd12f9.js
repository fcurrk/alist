import{X as c,au as u,u as f,b1 as r,R as l}from"./index.8a072262.js";import{u as a}from"./useT.62de73a4.js";let m=0;const s={},i=t=>{const e=(m++).toString(),o=[];for(const n in s)s[n]&&(o.push(n),s[n]=!1);s[e]=!0,typeof t=="function"?c(()=>{s[e]&&(document.title=t())}):document.title=t,u(()=>{delete s[e];for(const n in o)s[n]=!0})},g=()=>{const t=a(),{pathname:e}=f();i(()=>`${e()==="/"?t("manage.sidemenu.home"):r(e())} | ${l("site_title")}`)},h=t=>{const e=a();i(()=>`${e(t)} | ${e("manage.title")}`)};export{i as a,h as b,g as u};
