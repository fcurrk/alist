import{d as T,u as y,r as _,ac as t,a as B,bk as w,az as F,j as e,y as a,ab as g,c3 as P,c4 as U,c5 as L,c6 as x,a8 as o,a9 as f,ao as b,c7 as A,bh as $,b5 as v,I as k,F as E,B as i,aa as M,ay as R,c8 as d,E as H,aw as j,a3 as q,bI as z,bq as G,n as V}from"./index.5c2ea107.js";import{o as W}from"./index.a0c3f668.js";import{L as D}from"./index.d210cf4c.js";const J=r=>e(z,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),X=()=>{const r=T();W("manage.sidemenu.profile");const{to:c,searchParams:K}=y(),[u,C]=_(t().username),[h,S]=_(""),[m,I]=B(n=>w.post("/me/update",{username:n?t().username:u(),password:n?"":h(),sso_id:t().sso_id})),l=async n=>{const s=await I(n);G(s,()=>{d({...t(),username:u()}),n?c(""):(V.success(r("users.update_profile_success")),c(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})};function p(n){const s=n.data;s.sso_id&&(d({...t(),sso_id:s.sso_id}),l(!0))}return window.addEventListener("message",p),F(()=>{window.removeEventListener("message",p)}),e(q,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(a,{get when(){return!g.is_guest(t())},get fallback(){return[e(P,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(U,{mr:"$2_5"}),e(L,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(x,{get children(){return r("users.modify_nothing")}})]}}),e(o,{spacing:"$2",get children(){return[e(f,{get children(){return r("global.have_account")}}),e(f,{color:"$info9",as:D,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(b,{get children(){return r("users.update_profile")}}),e(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e($,{get children(){return[e(v,{for:"username",get children(){return r("users.change_username")}}),e(k,{id:"username",get value(){return u()},onInput:n=>{C(n.currentTarget.value)}})]}}),e($,{get children(){return[e(v,{for:"password",get children(){return r("users.change_password")}}),e(k,{id:"password",type:"password",placeholder:"********",get value(){return h()},onInput:n=>{S(n.currentTarget.value)}}),e(E,{get children(){return r("users.change_password-tips")}})]}})]}}),e(o,{spacing:"$2",get children(){return[e(i,{get loading(){return m()},onClick:[l,!1],get children(){return r("global.save")}}),e(a,{get when(){return!t().otp},get children(){return e(i,{colorScheme:"accent",onClick:()=>{c("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(a,{get when(){return M(()=>!!R("sso_login_enabled"),!0)()&&!g.is_guest(t())},get children(){return[e(b,{get children(){return r("users.sso_login")}}),e(o,{spacing:"$2",get children(){return e(a,{get when(){return t().sso_id},get fallback(){return e(i,{onClick:()=>{const n=w.getUri()+"/auth/sso?method=get_sso_id";window.open(n,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(i,{colorScheme:"danger",get loading(){return m()},onClick:()=>{d({...t(),sso_id:""}),l(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(o,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(H,{each:j,children:(n,s)=>e(J,{get can(){return g.can(t(),s())},get children(){return r(`users.permissions.${n}`)}})})}})]}})};export{X as default};