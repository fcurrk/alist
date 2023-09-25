import{u as N,aO as p,bl as i,f as m,e,c7 as B,a0 as O,ak as v,x as o,br as x,n as c,S as u,a as re,a8 as n,c8 as b,k as te,a7 as g,au as $,c9 as ne,ca as se,cb as ae,cc as ie,a4 as h,a5 as R,cd as U,bd as S,b1 as C,I,F as A,a6 as E,a2 as oe,A as M,bo as D,as as ce,bL as ue}from"./index.6230e6c5.js";import{o as le}from"./index.f46f11c1.js";import{L as de}from"./index.49c1358d.js";import{s as H,c as ge,b as he}from"./webauthn-json.browser-ponyfill.1c672167.js";const pe=r=>{const w=N(),[l,d]=p(()=>i.post("/authn/delete_authn",{id:r.id})),[k,a]=m(!1);return e(u,{get when(){return!k()},get children(){return e(B,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(O,{w:"$full",alignItems:"start",spacing:"$1",get children(){return e(v,{color:"$info9",css:{wordBreak:"break-all"},get children(){return"Fingerprint: "+r.fingerprint+"	ID: "+r.id}})}}),e(B,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(o,{colorScheme:"danger",get loading(){return l()},onClick:async()=>{const y=await d();x(y,()=>{c.success(w("global.delete_success")),a(!0)})},get children(){return w("global.delete")}})}})]}})}})},me=r=>e(ue,{get colorScheme(){return r.can?"success":"danger"},get children(){return r.children}}),$e=()=>{const r=N();le("manage.sidemenu.profile");const{searchParams:w,to:l}=re(),[d,k]=m(n().username),[a,y]=m(""),[F,W]=m(""),J=$("sso_compatibility_mode"),[L,j]=p(t=>i.post("/me/update",{username:t?n().username:d(),password:t?"":a(),sso_id:n().sso_id})),[q,G]=p(()=>i.get("/authn/getcredentials")),[,V]=p(()=>i.get("/authn/webauthn_begin_registration")),[X,z]=p((t,s)=>i.post("/authn/webauthn_finish_registration",JSON.stringify(s),{headers:{session:t}})),f=async t=>{if(a()&&a()!==F()){c.warning(r("users.confirm_password_not_same"));return}const s=await j(t);x(s,()=>{b({...n(),username:d()}),t?l(""):(c.success(r("users.update_profile_success")),l(`/@login?redirect=${encodeURIComponent(location.pathname)}`))})},P=w.sso_id;P&&(b({...n(),sso_id:P}),f(!0));function T(t){const s=t.data;s.sso_id&&(b({...n(),sso_id:s.sso_id}),f(!0))}window.addEventListener("message",T),te(()=>{window.removeEventListener("message",T)});const[K,Q]=m([]),Y=async()=>{const t=await G();D(t,Q)};return H()&&!g.is_guest(n())&&$("webauthn_login_enabled")&&Y(),e(O,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[e(u,{get when(){return!g.is_guest(n())},get fallback(){return[e(ne,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[e(se,{mr:"$2_5"}),e(ae,{mr:"$2_5",get children(){return r("users.guest-tips")}}),e(ie,{get children(){return r("users.modify_nothing")}})]}}),e(h,{spacing:"$2",get children(){return[e(R,{get children(){return r("global.have_account")}}),e(R,{color:"$info9",as:de,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return r("global.go_login")}})]}})]},get children(){return[e(v,{get children(){return r("users.update_profile")}}),e(U,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return e(S,{get children(){return[e(C,{for:"username",get children(){return r("users.change_username")}}),e(I,{id:"username",get value(){return d()},onInput:t=>{k(t.currentTarget.value)}})]}})}}),e(U,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[e(S,{get children(){return[e(C,{for:"password",get children(){return r("users.change_password")}}),e(I,{id:"password",type:"password",placeholder:"********",get value(){return a()},onInput:t=>{y(t.currentTarget.value)}}),e(A,{get children(){return r("users.change_password-tips")}})]}}),e(S,{get children(){return[e(C,{for:"confirm-password",get children(){return r("users.confirm_password")}}),e(I,{id:"confirm-password",type:"password",placeholder:"********",get value(){return F()},onInput:t=>{W(t.currentTarget.value)}}),e(A,{get children(){return r("users.confirm_password-tips")}})]}})]}}),e(h,{spacing:"$2",get children(){return[e(o,{get loading(){return L()},onClick:[f,!1],get children(){return r("global.save")}}),e(u,{get when(){return!n().otp},get children(){return e(o,{colorScheme:"accent",onClick:()=>{l("/@manage/2fa")},get children(){return r("users.enable_2fa")}})}})]}})]}}),e(u,{get when(){return E(()=>!!$("sso_login_enabled"),!0)()&&!g.is_guest(n())},get children(){return[e(v,{get children(){return r("users.sso_login")}}),e(h,{spacing:"$2",get children(){return e(u,{get when(){return n().sso_id},get fallback(){return e(o,{onClick:()=>{const t=i.getUri()+"/auth/sso?method=get_sso_id";if(J){window.location.href=t;return}window.open(t,"authPopup","width=500,height=600")},get children(){return r("users.connect_sso")}})},get children(){return e(o,{colorScheme:"danger",get loading(){return L()},onClick:()=>{b({...n(),sso_id:""}),f(!0)},get children(){return r("users.disconnect_sso")}})}})}})]}}),e(u,{get when(){return E(()=>!g.is_guest(n()),!0)()&&$("webauthn_login_enabled")},get children(){return[e(v,{get children(){return r("users.webauthn")}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(oe,{get loading(){return q()},get children(){return e(M,{get each(){return K()},children:t=>e(pe,{get id(){return t.id},get fingerprint(){return t.fingerprint}})})}})}}),e(o,{get loading(){return X()},onClick:async()=>{if(!H()){c.error(r("users.webauthn_not_supported"));return}const t=await V();D(t,async s=>{const Z=ge(s.options),ee=s.session;try{const _=await he(Z);x(await z(ee,_),()=>{c.success(r("users.add_webauthn_success"))})}catch(_){_ instanceof Error&&c.error(_.message)}})},get children(){return r("users.add_webauthn")}})]}}),e(h,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return e(M,{each:ce,children:(t,s)=>e(me,{get can(){return g.can(n(),s())},get children(){return r(`users.permissions.${t}`)}})})}})]}})};export{$e as default};
