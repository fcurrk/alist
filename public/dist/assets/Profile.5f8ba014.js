import{u as I,q as i,ac as t,a as v,b7 as S,f as e,x as u,ab as l,bZ as T,b_ as k,b$ as C,c0 as F,a8 as a,a9 as g,ag as U,c1 as x,b2 as d,b0 as h,I as p,F as B,B as m,be as y,c2 as A,n as P,E as R,ao as H,a3 as L,bs as D}from"./index.a3f71402.js";import{u as M}from"./useT.c9a4b75c.js";import{b as q}from"./useTitle.2e80d84d.js";import{L as E}from"./index.5fa4233c.js";const G=r=>e(D,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),z=()=>{const r=M();q("manage.sidemenu.profile");const{to:o}=I(),[s,f]=i(t().username),[c,w]=i(""),[b,_]=v(()=>S.post("/me/update",{username:s(),password:c()}));return e(L,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(u,{get when(){return!l.is_guest(t())},get fallback(){return[e(T,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(k,{mr:"$2_5"}),e(C,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(F,{get children(){return r("users.modify_nothing")}})]}}),e(a,{spacing:"$2",get children(){return[e(g,{get children(){return r("global.have_account")}}),e(g,{color:"$info9",as:E,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(U,{get children(){return r("users.update_profile")}}),e(x,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(d,{get children(){return[e(h,{for:"username",get children(){return r("users.change_username")}}),e(p,{id:"username",get value(){return s()},onInput:n=>{f(n.currentTarget.value)}})]}}),e(d,{get children(){return[e(h,{for:"password",get children(){return r("users.change_password")}}),e(p,{id:"password",type:"password",placeholder:"********",get value(){return c()},onInput:n=>{w(n.currentTarget.value)}}),e(B,{get children(){return r("users.change_password-tips")}})]}})]}}),e(a,{spacing:"$2",get children(){return[e(m,{get loading(){return b()},onClick:async()=>{const n=await _();y(n,()=>{A({...t(),username:s()}),P.success(r("users.update_profile_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)})},get children(){return r("global.save")}}),e(u,{get when(){return!t().otp},get children(){return e(m,{colorScheme:"accent",onClick:()=>{o("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(a,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(R,{each:H,children:(n,$)=>e(G,{get can(){return l.can(t(),$())},get children(){return r(`users.permissions.${n}`)}})})}})]}})};export{z as default};
