import{b as w,aU as c,b6 as u,a as b,k as i,e as t,S as x,a3 as S,av as g,at as k,af as I,ae as _,am as $,I as C,B as T,a7 as D,ah as d,n as F,b7 as L,aW as M,cw as R}from"./index.bfb69936.js";const q=()=>{const{back:n}=w(),[l,p]=c(()=>u.post("/auth/2fa/generate")),a=b(),[r,h]=i(),f=async()=>{if(d().otp){F.warning(a("users.2fa_already_enabled")),n();return}const e=await p();L(e,h)},[s,y]=i("");f();const[m,v]=c(()=>{var e;return u.post("/auth/2fa/verify",{code:s(),secret:(e=r())==null?void 0:e.secret})}),o=async()=>{const e=await v();M(e,()=>{R({...d(),otp:!0}),n()})};return t(D,{get loading(){return l()},get children(){return t(x,{get when(){return r()},get children(){return t(S,{spacing:"$2",alignItems:"start",get children(){return[t(g,{get children(){return a("users.scan_qr")}}),t(k,{boxSize:"$xs",rounded:"$lg",get src(){var e;return(e=r())==null?void 0:e.qr}}),t(g,{get children(){return[I(()=>a("users.or_manual")),":"," ",t(_,{get color(){return $()},get children(){var e;return(e=r())==null?void 0:e.secret}})]}}),t(C,{maxW:"$xs",get placeholder(){return a("users.input_code")},get value(){return s()},onInput:e=>y(e.currentTarget.value),onKeyDown:e=>{e.key==="Enter"&&o()}}),t(T,{get loading(){return m()},onClick:o,get children(){return a("users.verify")}})]}})}})}})};export{q as default};
