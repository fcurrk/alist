import{u as I,q as i,ab as t,a as v,b7 as C,f as e,x as u,aa as l,bZ as S,b_ as T,b$ as k,c0 as F,a7 as a,a8 as g,af as x,c1 as B,b2 as d,b0 as h,I as m,F as U,B as p,bd as y,c2 as A,n as P,C as R,ao as H,a2 as M,bs as D}from"./index.b8225c19.js";import{u as L}from"./useT.62c56028.js";import{b as q}from"./useTitle.72f184c6.js";import{O as G}from"./index.3a542f62.js";const O=r=>e(D,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),z=()=>{const r=L();q("manage.sidemenu.profile");const{to:o}=I(),[s,f]=i(t().username),[c,w]=i(""),[b,_]=v(()=>C.post("/me/update",{username:s(),password:c()}));return e(M,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(u,{get when(){return!l.is_guest(t())},get fallback(){return[e(S,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(T,{mr:"$2_5"}),e(k,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(F,{get children(){return r("users.modify_nothing")}})]}}),e(a,{spacing:"$2",get children(){return[e(g,{get children(){return r("global.have_account")}}),e(g,{color:"$info9",as:G,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(x,{get children(){return r("users.update_profile")}}),e(B,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(d,{get children(){return[e(h,{for:"username",get children(){return r("users.change_username")}}),e(m,{id:"username",get value(){return s()},onInput:n=>{f(n.currentTarget.value)}})]}}),e(d,{get children(){return[e(h,{for:"password",get children(){return r("users.change_password")}}),e(m,{id:"password",type:"password",placeholder:"********",get value(){return c()},onInput:n=>{w(n.currentTarget.value)}}),e(U,{get children(){return r("users.change_password-tips")}})]}})]}}),e(a,{spacing:"$2",get children(){return[e(p,{get loading(){return b()},onClick:async()=>{const n=await _();y(n,()=>{A({...t(),username:s()}),P.success(r("users.update_profile_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)})},get children(){return r("global.save")}}),e(u,{get when(){return!t().otp},get children(){return e(p,{colorScheme:"accent",onClick:()=>{o("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(a,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(R,{each:H,children:(n,$)=>e(O,{get can(){return l.can(t(),$())},get children(){return r(`users.permissions.${n}`)}})})}})]}})};export{z as default};
