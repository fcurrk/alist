import{d as y,u as B,r as b,ac as n,a as F,b7 as _,b_ as g,j as e,y as a,ab as d,b$ as U,c0 as P,c1 as x,c2 as A,a8 as s,a9 as f,ao as w,c3 as M,b4 as $,b2 as k,I as S,F as R,B as i,aa as H,ay as L,E as D,aw as j,a3 as E,bt as G,bd as N,n as V}from"./index.2b9c9895.js";import{b as W}from"./useTitle.f6654585.js";import{L as q}from"./index.0a339333.js";const z=r=>e(G,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),Q=()=>{const r=y();W("manage.sidemenu.profile");const{to:u,searchParams:v}=B(),[c,C]=b(n().username),[h,I]=b(""),[m,T]=F(t=>_.post("/me/update",{username:t?n().username:c(),password:t?"":h(),github_id:n().github_id})),o=async t=>{const l=await T(t);N(l,()=>{g({...n(),username:c()}),t?u(""):(V.success(r("users.update_profile_success")),u(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})},p=v.githubID;return p&&(g({...n(),github_id:Number(p)}),o(!0)),e(E,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(a,{get when(){return!d.is_guest(n())},get fallback(){return[e(U,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(P,{mr:"$2_5"}),e(x,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(A,{get children(){return r("users.modify_nothing")}})]}}),e(s,{spacing:"$2",get children(){return[e(f,{get children(){return r("global.have_account")}}),e(f,{color:"$info9",as:q,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(w,{get children(){return r("users.update_profile")}}),e(M,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e($,{get children(){return[e(k,{for:"username",get children(){return r("users.change_username")}}),e(S,{id:"username",get value(){return c()},onInput:t=>{C(t.currentTarget.value)}})]}}),e($,{get children(){return[e(k,{for:"password",get children(){return r("users.change_password")}}),e(S,{id:"password",type:"password",placeholder:"********",get value(){return h()},onInput:t=>{I(t.currentTarget.value)}}),e(R,{get children(){return r("users.change_password-tips")}})]}})]}}),e(s,{spacing:"$2",get children(){return[e(i,{get loading(){return m()},onClick:[o,!1],get children(){return r("global.save")}}),e(a,{get when(){return!n().otp},get children(){return e(i,{colorScheme:"accent",onClick:()=>{u("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(a,{get when(){return H(()=>!!L("github_login_enabled"),!0)()&&!d.is_guest(n())},get children(){return[e(w,{get children(){return r("users.github_login")}}),e(s,{spacing:"$2",get children(){return e(a,{get when(){return n().github_id},get fallback(){return e(i,{onClick:()=>{window.location.href=_.getUri()+"/auth/github?callback_url="+window.location.href+"&method=get_github_id"},get children(){return r("users.connect_github")}})},get children(){return e(i,{colorScheme:"danger",get loading(){return m()},onClick:()=>{g({...n(),github_id:0}),o(!0)},get children(){return r("users.disconnect_github")}})}})}})]}}),e(s,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(D,{each:j,children:(t,l)=>e(z,{get can(){return d.can(n(),l())},get children(){return r(`users.permissions.${t}`)}})})}})]}})};export{Q as default};
