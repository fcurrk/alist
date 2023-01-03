import{W as f,j as e,a5 as U,ay as E,u as _,bj as w,bn as b,bo as F,b7 as R,aq as M,R as v,d as O,C as P,r as s,bp as W,a as q,a3 as D,bf as l,ao as G,y as H,I as h,bq as K,a8 as N,B as m,a$ as V,b0 as A,as as J,h as Q,n as x}from"./index.98d565c5.js";import{a as X}from"./useTitle.56ba616f.js";const Y=()=>{const r=f("#f1f3f5","#666666");return e(U,{get bgColor(){return r()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh"})},Z=()=>{const r=E("github_login_enabled"),{searchParams:t,to:a}=_(),o=t.token;if(o!=null&&o!=""&&(w(o),a(decodeURIComponent(t.redirect||b||"/"),!0)),r)return e(M,{cursor:"pointer",boxSize:"$8",as:F,p:"$0_5",onclick:()=>{window.location.href=R.getUri()+"/auth/github?callback_url="+window.location.href+"&method=github_login&with_params="+Boolean(t.redirect!=null)}})},ne=()=>{const r=v("logo").split(`
`);f(r[0],r.pop());const t=O(),a=P(()=>`${t("login.login_to")} ${v("site_title")}`);X(a);const o=f("white","$neutral1"),[i,$]=s(localStorage.getItem("username")||""),[c,C]=s(localStorage.getItem("password")||""),[S,I]=s(""),[u,j]=W("remember-pwd","false"),[B,T]=q(()=>R.post("/auth/login",{username:i(),password:c(),otp_code:S()})),{searchParams:y,to:k}=_(),g=async()=>{u()==="true"?(localStorage.setItem("username",i()),localStorage.setItem("password",c())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const n=await T();Q(n,p=>{x.success(t("login.success")),w(p.token),k(decodeURIComponent(y.redirect||b||"/"),!0)},(p,L)=>{!d()&&L===402?z(!0):x.error(p)})},[d,z]=s(!1);return e(J,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(D,{get bgColor(){return o()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(l,{alignItems:"center",justifyContent:"space-around",get children(){return e(G,{color:"$info9",fontSize:"$2xl",get children(){return a()}})}}),e(H,{get when(){return!d()},get fallback(){return e(h,{id:"totp",name:"otp",get placeholder(){return t("login.otp-tips")},get value(){return S()},onChange:n=>I(n.currentTarget.value),onKeyDown:n=>{n.key==="Enter"&&g()}})},get children(){return[e(h,{name:"username",get placeholder(){return t("login.username-tips")},get value(){return i()},onInput:n=>$(n.currentTarget.value)}),e(h,{name:"password",get placeholder(){return t("login.password-tips")},type:"password",get value(){return c()},onInput:n=>C(n.currentTarget.value),onKeyDown:n=>{n.key==="Enter"&&g()}}),e(l,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return e(K,{get checked(){return u()==="true"},onChange:()=>j(u()==="true"?"false":"true"),get children(){return t("login.remember")}})}})]}}),e(N,{w:"$full",spacing:"$2",get children(){return[e(m,{colorScheme:"primary",w:"$full",onClick:()=>{d()?I(""):($(""),C(""))},get children(){return t("login.clear")}}),e(m,{w:"$full",get loading(){return B()},onClick:g,get children(){return t("login.login")}})]}}),e(m,{w:"$full",colorScheme:"accent",onClick:()=>{w(),k(decodeURIComponent(y.redirect||b||"/"),!0)},get children(){return t("login.use_guest")}}),e(l,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(V,{}),e(A,{})]}}),e(l,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return e(Z,{})}})]}}),e(Y,{})]}})};export{ne as default};
