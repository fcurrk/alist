import{W as m,f as e,a5 as L,R as I,C as j,q as o,bo as M,a as O,b7 as U,u as W,a3 as D,bg as g,ag as E,x as F,I as p,bp as H,a8 as K,B as d,bk as k,bb as v,aZ as N,a_ as P,al as V,h as q,n as x}from"./index.4d531652.js";import{u as Z}from"./useT.77b0587b.js";import{a as A}from"./useTitle.32e7ad98.js";const G=()=>{const n=m("#f1f3f5","#666666");return e(L,{get bgColor(){return n()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh"})},Y=()=>{const n=I("logo").split(`
`);m(n[0],n.pop());const r=Z(),h=j(()=>`${r("login.login_to")} ${I("site_title")}`);A(h);const y=m("white","$neutral1"),[a,f]=o(localStorage.getItem("username")||""),[s,w]=o(localStorage.getItem("password")||""),[C,$]=o(""),[l,R]=M("remember-pwd","false"),[T,_]=O(()=>U.post("/auth/login",{username:a(),password:s(),otp_code:C()})),{searchParams:b,to:S}=W(),c=async()=>{l()==="true"?(localStorage.setItem("username",a()),localStorage.setItem("password",s())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const t=await _();q(t,i=>{x.success(r("login.success")),k(i.token),S(decodeURIComponent(b.redirect||v||"/"),!0)},(i,B)=>{!u()&&B===402?z(!0):x.error(i)})},[u,z]=o(!1);return e(V,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(D,{get bgColor(){return y()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(g,{alignItems:"center",justifyContent:"space-around",get children(){return e(E,{color:"$info9",fontSize:"$2xl",get children(){return h()}})}}),e(F,{get when(){return!u()},get fallback(){return e(p,{id:"totp",name:"otp",get placeholder(){return r("login.otp-tips")},get value(){return C()},onChange:t=>$(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&c()}})},get children(){return[e(p,{name:"username",get placeholder(){return r("login.username-tips")},get value(){return a()},onInput:t=>f(t.currentTarget.value)}),e(p,{name:"password",get placeholder(){return r("login.password-tips")},type:"password",get value(){return s()},onInput:t=>w(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&c()}}),e(g,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return e(H,{get checked(){return l()==="true"},onChange:()=>R(l()==="true"?"false":"true"),get children(){return r("login.remember")}})}})]}}),e(K,{w:"$full",spacing:"$2",get children(){return[e(d,{colorScheme:"primary",w:"$full",onClick:()=>{u()?$(""):(f(""),w(""))},get children(){return r("login.clear")}}),e(d,{w:"$full",get loading(){return T()},onClick:c,get children(){return r("login.login")}})]}}),e(d,{w:"$full",colorScheme:"accent",onClick:()=>{k(),S(decodeURIComponent(b.redirect||v||"/"),!0)},get children(){return r("login.use_guest")}}),e(g,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(N,{}),e(P,{})]}})]}}),e(G,{})]}})};export{Y as default};
