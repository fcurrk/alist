import{W as b,j as e,a5 as T,ay as D,R as S,u as _,az as F,aq as G,bx as k,bB as C,bk as L,bt as M,bC as P,bD as U,bE as j,d as W,C as A,r as c,bF as H,a as K,a3 as N,bs as h,ao as V,y as q,I as f,bG as J,a8 as Q,B as w,b2 as X,b3 as Y,as as Z,h as ee,n as x}from"./index.5c2ea107.js";import{p as te,c as ne}from"./index.a0c3f668.js";const oe=()=>{const r=b("#f1f3f5","#666666");return e(T,{get bgColor(){return r()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh"})},re=()=>{const r=D("sso_login_enabled"),n=S("sso_login_platform"),{searchParams:l,to:u}=_();function a(s){const t=s.data;t.token&&(k(t.token),u(decodeURIComponent(l.redirect||C||"/"),!0))}if(window.addEventListener("message",a),F(()=>{window.removeEventListener("message",a)}),r){const s=()=>{const i=L.getUri()+"/auth/sso?method=sso_get_token";window.open(i,"authPopup","width=500,height=600")};let t;switch(n){case"Github":t=j;break;case"Microsoft":t=te;break;case"Google":t=U;break;case"Dingtalk":t=P;break;default:t=M}return e(G,{cursor:"pointer",boxSize:"$8",as:t,p:"$0_5",onclick:s})}},le=()=>{const r=S("logo").split(`
`);b(r[0],r.pop());const n=W(),l=A(()=>`${n("login.login_to")} ${S("site_title")}`);ne(l);const u=b("white","$neutral1"),[a,s]=c(localStorage.getItem("username")||""),[t,i]=c(localStorage.getItem("password")||""),[$,I]=c(""),[g,B]=H("remember-pwd","false"),[E,R]=K(()=>L.post("/auth/login",{username:a(),password:t(),otp_code:$()})),{searchParams:v,to:y}=_(),d=async()=>{g()==="true"?(localStorage.setItem("username",a()),localStorage.setItem("password",t())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const o=await R();ee(o,m=>{x.success(n("login.success")),k(m.token),y(decodeURIComponent(v.redirect||C||"/"),!0)},(m,O)=>{!p()&&O===402?z(!0):x.error(m)})},[p,z]=c(!1);return e(Z,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(N,{get bgColor(){return u()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(h,{alignItems:"center",justifyContent:"space-around",get children(){return e(V,{color:"$info9",fontSize:"$2xl",get children(){return l()}})}}),e(q,{get when(){return!p()},get fallback(){return e(f,{id:"totp",name:"otp",get placeholder(){return n("login.otp-tips")},get value(){return $()},onInput:o=>I(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&d()}})},get children(){return[e(f,{name:"username",get placeholder(){return n("login.username-tips")},get value(){return a()},onInput:o=>s(o.currentTarget.value)}),e(f,{name:"password",get placeholder(){return n("login.password-tips")},type:"password",get value(){return t()},onInput:o=>i(o.currentTarget.value),onKeyDown:o=>{o.key==="Enter"&&d()}}),e(h,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return e(J,{get checked(){return g()==="true"},onChange:()=>B(g()==="true"?"false":"true"),get children(){return n("login.remember")}})}})]}}),e(Q,{w:"$full",spacing:"$2",get children(){return[e(w,{colorScheme:"primary",w:"$full",onClick:()=>{p()?I(""):(s(""),i(""))},get children(){return n("login.clear")}}),e(w,{w:"$full",get loading(){return E()},onClick:d,get children(){return n("login.login")}})]}}),e(w,{w:"$full",colorScheme:"accent",onClick:()=>{k(),y(decodeURIComponent(v.redirect||C||"/"),!0)},get children(){return n("login.use_guest")}}),e(h,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(X,{}),e(Y,{}),e(re,{})]}})]}}),e(oe,{})]}})};export{le as default};