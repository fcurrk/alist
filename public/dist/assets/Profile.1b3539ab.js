import{a as H,b0 as p,bh as i,m,h as e,db as B,a8 as N,aD as v,C as o,bi as y,n as c,S as u,b as ee,an as n,dc as b,e as re,am as g,ad as $,dd as te,de as ne,df as se,dg as ae,al as h,a7 as M,dh as R,bI as S,bv as I,I as P,F as U,ac as E,af as ie,H as A,aN as oe,cp as ce,cn as ue}from"./index.c84b815b.js";import{b as le}from"./useTitle.e9203878.js";import{L as de}from"./index.96668665.js";import{s as D,c as ge,b as he}from"./webauthn-json.browser-ponyfill.1c672167.js";import{P as pe}from"./PublicKeys.320598f2.js";const me=r=>{const w=H(),[l,d]=p(()=>i.post("/authn/delete_authn",{id:r.id})),[k,a]=m(!1);return e(u,{get when(){return!k()},get children(){return e(B,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(N,{w:"$full",alignItems:"start",spacing:"$1",get children(){return e(v,{color:"$info9",css:{wordBreak:"break-all"},get children(){return"Fingerprint: "+r.fingerprint+"	ID: "+r.id}})}}),e(B,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(o,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const C=await d();y(C,()=>{c.success(w("global.delete_success")),a(!0)})},get children(){return w("global.delete")}})}})]}})}})},we=r=>e(ce,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),ye=()=>{const r=H();le("manage.sidemenu.profile");const{searchParams:w,to:l}=ee(),[d,k]=m(n().username),[a,C]=m(""),[F,W]=m(""),J=$("sso_compatibility_mode"),[T,O]=p(t=>i.post("/me/update",{username:t?n().username:d(),password:t?"":a(),sso_id:n().sso_id})),[j,q]=p(()=>i.get("/authn/getcredentials")),[,G]=p(()=>i.get("/authn/webauthn_begin_registration")),[K,V]=p((t,s)=>i.post("/authn/webauthn_finish_registration",JSON.stringify(s),{headers:{session:t}})),f=async t=>{if(a()&&a()!==F()){c.warning(r("users.confirm_password_not_same"));return}const s=await O(t);y(s,()=>{b({...n(),username:d()}),t?l(""):(c.success(r("users.update_profile_success")),l(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})},x=w.sso_id;x&&(b({...n(),sso_id:x}),f(!0));function L(t){const s=t.data;s.sso_id&&(b({...n(),sso_id:s.sso_id}),f(!0))}window.addEventListener("message",L),re(()=>{window.removeEventListener("message",L)});const[X,z]=m([]),Q=async()=>{const t=await q();ue(t,z)};return D()&&!g.is_guest(n())&&$("webauthn_login_enabled")&&Q(),e(N,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(u,{get when(){return!g.is_guest(n())},get fallback(){return[e(te,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(ne,{mr:"$2_5"}),e(se,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(ae,{get children(){return r("users.modify_nothing")}})]}}),e(h,{spacing:"$2",get children(){return[e(M,{get children(){return r("global.have_account")}}),e(M,{color:"$info9",as:de,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(v,{get children(){return r("users.update_profile")}}),e(R,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return e(S,{get children(){return[e(I,{for:"username",get children(){return r("users.change_username")}}),e(P,{id:"username",get value(){return d()},onInput:t=>{k(t.currentTarget.value)}})]}})}}),e(R,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(S,{get children(){return[e(I,{for:"password",get children(){return r("users.change_password")}}),e(P,{id:"password",type:"password",placeholder:"********",get value(){return a()},onInput:t=>{C(t.currentTarget.value)}}),e(U,{get children(){return r("users.change_password-tips")}})]}}),e(S,{get children(){return[e(I,{for:"confirm-password",get children(){return r("users.confirm_password")}}),e(P,{id:"confirm-password",type:"password",placeholder:"********",get value(){return F()},onInput:t=>{W(t.currentTarget.value)}}),e(U,{get children(){return r("users.confirm_password-tips")}})]}})]}}),e(h,{spacing:"$2",get children(){return[e(o,{get loading(){return T()},onClick:[f,!1],get children(){return r("global.save")}}),e(u,{get when(){return!n().otp},get children(){return e(o,{colorScheme:"accent",onClick:()=>{l("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(u,{get when(){return E(()=>!!$("sso_login_enabled"),!0)()&&!g.is_guest(n())},get children(){return[e(v,{get children(){return r("users.sso_login")}}),e(h,{spacing:"$2",get children(){return e(u,{get when(){return n().sso_id},get fallback(){return e(o,{onClick:()=>{const t=i.getUri()+"/auth/sso?method=get_sso_id";if(J){window.location.href=t;return}window.open(t,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(o,{colorScheme:"danger",get loading(){return T()},onClick:()=>{b({...n(),sso_id:""}),f(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(u,{get when(){return E(()=>!g.is_guest(n()),!0)()&&$("webauthn_login_enabled")},get children(){return[e(v,{get children(){return r("users.webauthn")}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(ie,{get loading(){return j()},get children(){return e(A,{get each(){return X()},children:t=>e(me,{get id(){return t.id},get fingerprint(){return t.fingerprint}})})}})}}),e(o,{get loading(){return K()},onClick:async()=>{if(!D()){c.error(r("users.webauthn_not_supported"));return}const t=await G();y(t,async s=>{const Y=ge(s.options),Z=s.session;try{const _=await he(Y);y(await V(Z,_),()=>{c.success(r("users.add_webauthn_success"))})}catch(_){_ instanceof Error&&c.error(_.message)}})},get children(){return r("users.add_webauthn")}})]}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(A,{each:oe,children:(t,s)=>e(we,{get can(){return g.can(n(),s())},get children(){return r(`users.permissions.${t}`)}})})}}),e(pe,{isMine:!0,get userId(){return n().id}})]}})};export{ye as default};
