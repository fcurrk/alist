import{u as m,a as c,b4 as u,q as i,f as t,x as v,a3 as w,be as x,ab as I,I as S,B as $,a6 as k,al as g,n as _,bc as q,aN as C,c3 as D}from"./index.8a072262.js";import{u as F}from"./useT.62de73a4.js";const T=()=>{const{back:n}=m(),[d,l]=c(()=>u.post("/auth/2fa/generate")),a=F(),[r,p]=i(),f=async()=>{if(g().otp){_.warning(a("users.2fa_already_enabled")),n();return}const e=await l();q(e,p)},[s,h]=i("");f();const[y,b]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await b();C(e,()=>{D({...g(),otp:!0}),n()})};return t(k,{get loading(){return d()},get children(){return t(v,{get when(){return r()},get children(){return t(w,{spacing:"$2",alignItems:"start",get children(){return[t(x,{get children(){return a("users.scan_qr")}}),t(I,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(S,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>h(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t($,{get loading(){return y()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{T as default};
