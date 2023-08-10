import{d as y,u as A,r as g,ad as t,a as B,bk as v,w as L,j as e,A as o,ac as h,c5 as H,c6 as M,c7 as R,c8 as E,a9 as i,aa as C,ap as k,c9 as S,bh as m,b5 as p,I as w,F as T,C as c,ab as j,az as q,ca as f,H as z,ax as G,a4 as J,bJ as V,n as I,bq as W}from"./index.285c2f53.js";import{o as D}from"./index.3c450805.js";import{L as K}from"./index.d0b09de2.js";const N=r=>e(V,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),Y=()=>{const r=y();D("manage.sidemenu.profile");const{to:u}=A(),[l,P]=g(t().username),[a,F]=g(""),[_,U]=g(""),[$,x]=B(n=>v.post("/me/update",{username:n?t().username:l(),password:n?"":a(),sso_id:t().sso_id})),d=async n=>{if(a()&&a()!==_()){I.warning(r("users.confirm_password_not_same"));return}const s=await x(n);W(s,()=>{f({...t(),username:l()}),n?u(""):(I.success(r("users.update_profile_success")),u(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})};function b(n){const s=n.data;s.sso_id&&(f({...t(),sso_id:s.sso_id}),d(!0))}return window.addEventListener("message",b),L(()=>{window.removeEventListener("message",b)}),e(J,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(o,{get when(){return!h.is_guest(t())},get fallback(){return[e(H,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(M,{mr:"$2_5"}),e(R,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(E,{get children(){return r("users.modify_nothing")}})]}}),e(i,{spacing:"$2",get children(){return[e(C,{get children(){return r("global.have_account")}}),e(C,{color:"$info9",as:K,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(k,{get children(){return r("users.update_profile")}}),e(S,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return e(m,{get children(){return[e(p,{for:"username",get children(){return r("users.change_username")}}),e(w,{id:"username",get value(){return l()},onInput:n=>{P(n.currentTarget.value)}})]}})}}),e(S,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(m,{get children(){return[e(p,{for:"password",get children(){return r("users.change_password")}}),e(w,{id:"password",type:"password",placeholder:"********",get value(){return a()},onInput:n=>{F(n.currentTarget.value)}}),e(T,{get children(){return r("users.change_password-tips")}})]}}),e(m,{get children(){return[e(p,{for:"confirm-password",get children(){return r("users.confirm_password")}}),e(w,{id:"confirm-password",type:"password",placeholder:"********",get value(){return _()},onInput:n=>{U(n.currentTarget.value)}}),e(T,{get children(){return r("users.confirm_password-tips")}})]}})]}}),e(i,{spacing:"$2",get children(){return[e(c,{get loading(){return $()},onClick:[d,!1],get children(){return r("global.save")}}),e(o,{get when(){return!t().otp},get children(){return e(c,{colorScheme:"accent",onClick:()=>{u("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(o,{get when(){return j(()=>!!q("sso_login_enabled"),!0)()&&!h.is_guest(t())},get children(){return[e(k,{get children(){return r("users.sso_login")}}),e(i,{spacing:"$2",get children(){return e(o,{get when(){return t().sso_id},get fallback(){return e(c,{onClick:()=>{const n=v.getUri()+"/auth/sso?method=get_sso_id";window.open(n,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(c,{colorScheme:"danger",get loading(){return $()},onClick:()=>{f({...t(),sso_id:""}),d(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(i,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(z,{each:G,children:(n,s)=>e(N,{get can(){return h.can(t(),s())},get children(){return r(`users.permissions.${n}`)}})})}})]}})};export{Y as default};
