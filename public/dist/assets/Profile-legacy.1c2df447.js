System.register(["./index-legacy.ef1ab517.js","./useT-legacy.0e445ef0.js","./useTitle-legacy.d2ddfd04.js","./index-legacy.3185524a.js"],(function(e,r){"use strict";var n,t,a,s,c,u,i,l,g,o,d,h,p,m,f,b,w,$,_,v,y,I,j,k,x,C,T,S,R,U,W;return{setters:[e=>{n=e.u,t=e.d,a=e.a3,s=e.a,c=e.b4,u=e.e,i=e.k,l=e.a2,g=e.bY,o=e.bZ,d=e.b_,h=e.b$,p=e.a0,m=e.bc,f=e.bf,b=e.c0,w=e.aY,$=e.aW,_=e.I,v=e.F,y=e.B,I=e.bd,j=e.c1,k=e.n,x=e.v,C=e.ad,T=e.W,S=e.bt},e=>{R=e.u},e=>{U=e.b},e=>{W=e.L}],execute:function(){const r=e=>u(S,{get colorScheme(){return e.can?"success":"danger"},get children(){return e.children}});e("default",(()=>{const e=R();U("manage.sidemenu.profile");const{to:S}=n(),[Y,B]=t(a().username),[D,F]=t(""),[L,Z]=s((()=>c.post("/me/update",{username:Y(),password:D()})));return u(T,{w:"$full",spacing:"$4",alignItems:"start",get children(){return[u(i,{get when(){return!l.is_guest(a())},get fallback(){return[u(g,{status:"warning",flexDirection:{"@initial":"column","@lg":"row"},get children(){return[u(o,{mr:"$2_5"}),u(d,{mr:"$2_5",get children(){return e("users.guest-tips")}}),u(h,{get children(){return e("users.modify_nothing")}})]}}),u(p,{spacing:"$2",get children(){return[u(m,{get children(){return e("global.have_account")}}),u(m,{color:"$info9",as:W,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return e("global.go_login")}})]}})]},get children(){return[u(f,{get children(){return e("users.update_profile")}}),u(b,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[u(w,{get children(){return[u($,{for:"username",get children(){return e("users.change_username")}}),u(_,{id:"username",get value(){return Y()},onInput:e=>{B(e.currentTarget.value)}})]}}),u(w,{get children(){return[u($,{for:"password",get children(){return e("users.change_password")}}),u(_,{id:"password",type:"password",placeholder:"********",get value(){return D()},onInput:e=>{F(e.currentTarget.value)}}),u(v,{get children(){return e("users.change_password-tips")}})]}})]}}),u(p,{spacing:"$2",get children(){return[u(y,{get loading(){return L()},onClick:async()=>{const r=await Z();I(r,(()=>{j({...a(),username:Y()}),k.success(e("users.update_profile_success")),S(`/@login?redirect=${encodeURIComponent(location.pathname)}`)}))},get children(){return e("global.save")}}),u(i,{get when(){return!a().otp},get children(){return u(y,{colorScheme:"accent",onClick:()=>{S("/@manage/2fa")},get children(){return e("users.enable_2fa")}})}})]}})]}}),u(p,{wrap:"wrap",gap:"$2",mt:"$2",get children(){return u(x,{each:C,children:(n,t)=>u(r,{get can(){return l.can(a(),t())},get children(){return e(`users.permissions.${n}`)}})})}})]}})}))}}}));
