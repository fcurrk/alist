System.register(["./index-legacy.d7f2d2e0.js","./useT-legacy.d0b23168.js","./useTitle-legacy.d4702aaa.js","./LinkWithBase-legacy.f1191205.js"],(function(e,r){"use strict";var n,t,a,s,c,u,i,l,g,o,d,h,p,m,f,$,w,_,b,y,v,I,j,k,x,C,T,S,B,L,R;return{setters:[e=>{n=e.u,t=e.q,a=e.al,s=e.a,c=e.b4,u=e.f,i=e.x,l=e.ak,g=e.b_,o=e.b$,d=e.c0,h=e.c1,p=e.a8,m=e.a9,f=e.be,$=e.c2,w=e.a$,_=e.aZ,b=e.I,y=e.F,v=e.B,I=e.bc,j=e.c3,k=e.n,x=e.E,C=e.aj,T=e.a3,S=e.bt},e=>{B=e.u},e=>{L=e.b},e=>{R=e.L}],execute:function(){const r=e=>u(S,{get colorScheme(){return e.can?"success":"danger"},get children(){return e.children}});e("default",(()=>{const e=B();L("manage.sidemenu.profile");const{to:S}=n(),[U,q]=t(a().username),[D,E]=t(""),[F,W]=s((()=>c.post("/me/update",{username:U(),password:D()})));return u(T,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[u(i,{get when(){return!l.is_guest(a())},get fallback(){return[u(g,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[u(o,{mr:"$2_5"}),u(d,{mr:"$2_5",get children(){return e("users.guest-tips")}}),u(h,{get children(){return e("users.modify_nothing")}})]}}),u(p,{spacing:"$2",get children(){return[u(m,{get children(){return e("global.have_account")}}),u(m,{color:"$info9",as:R,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return e("global.go_login")}})]}})]},get children(){return[u(f,{get children(){return e("users.update_profile")}}),u($,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[u(w,{get children(){return[u(_,{for:"username",get children(){return e("users.change_username")}}),u(b,{id:"username",get value(){return U()},onInput:e=>{q(e.currentTarget.value)}})]}}),u(w,{get children(){return[u(_,{for:"password",get children(){return e("users.change_password")}}),u(b,{id:"password",type:"password",placeholder:"********",get value(){return D()},onInput:e=>{E(e.currentTarget.value)}}),u(y,{get children(){return e("users.change_password-tips")}})]}})]}}),u(p,{spacing:"$2",get children(){return[u(v,{get loading(){return F()},onClick:async()=>{const r=await W();I(r,(()=>{j({...a(),username:U()}),k.success(e("users.update_profile_success")),S(`/@login?redirect=${encodeURIComponent(location.pathname)}`)}))},get children(){return e("global.save")}}),u(i,{get when(){return!a().otp},get children(){return u(v,{colorScheme:"accent",onClick:()=>{S("/@manage/2fa")},get children(){return e("users.enable_2fa")}})}})]}})]}}),u(p,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return u(x,{each:C,children:(n,t)=>u(r,{get can(){return l.can(a(),t())},get children(){return e(`users.permissions.${n}`)}})})}})]}})}))}}}));
