import{u as v,a as c,b7 as u,q as i,f as t,x as w,a3 as b,ag as x,ae as I,I as S,B as $,a6 as k,ac as g,n as _,be as q,aQ as C,c2 as D}from"./index.72439646.js";import{u as F}from"./useT.3364d7ad.js";const T=()=>{const{back:n}=v(),[d,l]=c(()=>u.post("/auth/2fa/generate")),a=F(),[r,p]=i(),f=async()=>{if(g().otp){_.warning(a("users.2fa_already_enabled")),n();return}const e=await l();q(e,p)},[s,h]=i("");f();const[y,m]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await m();C(e,()=>{D({...g(),otp:!0}),n()})};return t(k,{get loading(){return d()},get children(){return t(w,{get when(){return r()},get children(){return t(b,{spacing:"$2",alignItems:"start",get children(){return[t(x,{get children(){return a("users.scan_qr")}}),t(I,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(S,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>h(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t($,{get loading(){return y()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{T as default};