import{bB as K,Y as R,j as e,a6 as W,az as F,V as E,u as P,w as Y,ar as B,bx as w,bC as f,bk as b,bt as Q,bD as X,bE as Z,bF as ee,d as te,G as ne,r as c,bG as oe,a as _,a4 as re,bs as v,ap as se,A as p,I as y,bH as ae,a9 as le,C as x,b2 as ie,b3 as ce,bI as ue,at as ge,h as z,n as m,bq as de}from"./index.7c2ab175.js";import{p as he,c as pe}from"./index.1a575d98.js";import{s as me,g as we,a as fe}from"./webauthn-json.browser-ponyfill.1c672167.js";const be="https://github.com/fcurrk/alist";function Se(s){return K(`${s}-${be}`)}const ke=()=>{const s=R("#f1f3f5","#666666");return e(W,{get bgColor(){return s()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh"})},Ie=()=>{const s=F("sso_login_enabled"),n=E("sso_login_platform"),{searchParams:u,to:S}=P();function r(l){const o=l.data;o.token&&(w(o.token),S(decodeURIComponent(u.redirect||f||"/"),!0))}if(window.addEventListener("message",r),Y(()=>{window.removeEventListener("message",r)}),s){const l=()=>{const g=b.getUri()+"/auth/sso?method=sso_get_token";window.open(g,"authPopup","width=500,height=600")};let o;switch(n){case"Github":o=ee;break;case"Microsoft":o=he;break;case"Google":o=Z;break;case"Dingtalk":o=X;break;default:o=Q}return e(B,{cursor:"pointer",boxSize:"$8",as:o,p:"$0_5",onclick:l})}},ve=()=>{const s=E("logo").split(`
`);R(s[0],s.pop());const n=te(),u=ne(()=>`${n("login.login_to")} ${E("site_title")}`);pe(u);const S=R("white","$neutral1"),[r,l]=c(localStorage.getItem("username")||""),[o,g]=c(localStorage.getItem("password")||""),[L,O]=c(""),[d,G]=c(!1),[h,T]=oe("remember-pwd","false"),[U,A]=_(async()=>b.post("/auth/login/hash",{username:r(),password:Se(o()),otp_code:L()})),[,D]=_((t,a,i)=>b.post("/authn/webauthn_finish_login?username="+i,JSON.stringify(a),{headers:{session:t}})),[,M]=_(t=>b.get("/authn/webauthn_begin_login?username="+t)),{searchParams:k,to:I}=P(),j=F("webauthn_login_enabled"),N=async()=>{G(!d())},$=async()=>{if(d()){if(!me()){m.error(n("users.webauthn_not_supported"));return}h()==="true"?localStorage.setItem("username",r()):localStorage.removeItem("username");const t=await M(r());de(t,async a=>{const i=we(a.options),V=await fe(i),q=await D(a.session,V,r());z(q,J=>{m.success(n("login.success")),w(J.token),I(decodeURIComponent(k.redirect||f||"/"),!0)})})}else{h()==="true"?(localStorage.setItem("username",r()),localStorage.setItem("password",o())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const t=await A();z(t,a=>{m.success(n("login.success")),w(a.token),I(decodeURIComponent(k.redirect||f||"/"),!0)},(a,i)=>{!C()&&i===402?H(!0):m.error(a)})}},[C,H]=c(!1);return e(ge,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(re,{get bgColor(){return S()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(v,{alignItems:"center",justifyContent:"space-around",get children(){return e(se,{color:"$info9",fontSize:"$2xl",get children(){return u()}})}}),e(p,{get when(){return!C()},get fallback(){return e(y,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return L()},onInput:t=>O(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&$()}})},get children(){return[e(y,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return r()},onInput:t=>l(t.currentTarget.value)}),e(p,{get when(){return!d()},get children(){return e(y,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return o()},onInput:t=>g(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&$()}})}}),e(v,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return e(ae,{get checked(){return h()==="true"},onChange:()=>T(h()==="true"?"false":"true"),get children(){return n("login.remember")}})}})]}}),e(le,{w:"$full",spacing:"$2",get children(){return[e(p,{get when(){return!d()},get children(){return e(x,{colorScheme:"primary",w:"$full",onClick:()=>{C()?O(""):(l(""),g(""))},get children(){return n("login.clear")}})}}),e(x,{w:"$full",get loading(){return U()},onClick:$,get children(){return n("login.login")}})]}}),e(x,{w:"$full",colorScheme:"accent",onClick:()=>{w(),I(decodeURIComponent(k.redirect||f||"/"),!0)},get children(){return n("login.use_guest")}}),e(v,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(ie,{}),e(ce,{}),e(Ie,{}),e(p,{when:j,get children(){return e(B,{cursor:"pointer",boxSize:"$8",as:ue,p:"$0_5",onclick:N})}})]}})]}}),e(ke,{})]}})};export{ve as default};
