System.register(["./index-legacy.d7f2d2e0.js","./useT-legacy.d0b23168.js","./useTitle-legacy.d4702aaa.js","./DeletePopover-legacy.d2abb39e.js"],(function(e,t){"use strict";var r,n,c,a,l,i,s,d,g,u,o,h,m,b,p,y,f,w,$,j,k,v,C;return{setters:[e=>{r=e.f,n=e.bt,c=e.u,a=e.a,l=e.b4,i=e.q,s=e.c5,d=e.a8,g=e.B,u=e.a5,o=e.c6,h=e.c7,m=e.c8,b=e.E,p=e.c9,y=e.ca,f=e.cb,w=e.bc,$=e.n,j=e.a3},e=>{k=e.u},e=>{v=e.b},e=>{C=e.D}],execute:function(){const t=e=>{const t=k();return r(n,{get colorScheme(){return e.yes?"success":"danger"},get children(){return t("global."+(e.yes?"yes":"no"))}})};e("default",(()=>{const e=k();v("manage.sidemenu.metas");const{to:n}=c(),[S,x]=a((()=>l.get("/admin/meta/list"))),[D,T]=i([]),q=async()=>{const e=await x();w(e,(e=>T(e.content)))};q();const[B,E]=s((e=>l.post(`/admin/meta/delete?id=${e}`)));return r(j,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[r(d,{spacing:"$2",get children(){return[r(g,{colorScheme:"accent",get loading(){return S()},onClick:q,get children(){return e("global.refresh")}}),r(g,{onClick:()=>{n("/@manage/metas/add")},get children(){return e("global.add")}})]}}),r(u,{w:"$full",overflowX:"auto",get children(){return r(o,{highlightOnHover:!0,dense:!0,get children(){return[r(h,{get children(){return r(m,{get children(){return[r(b,{each:["path","password","write"],children:t=>r(p,{get children(){return e(`metas.${t}`)}})}),r(p,{get children(){return e("global.operations")}})]}})}}),r(y,{get children(){return r(b,{get each(){return D()},children:c=>r(m,{get children(){return[r(f,{get children(){return c.path}}),r(f,{get children(){return c.password}}),r(f,{get children(){return r(t,{get yes(){return c.write}})}}),r(f,{get children(){return r(d,{spacing:"$2",get children(){return[r(g,{onClick:()=>{n(`/@manage/metas/edit/${c.id}`)},get children(){return e("global.edit")}}),r(C,{get name(){return c.path},get loading(){return B()===c.id},onClick:async()=>{const t=await E(c.id);w(t,(()=>{$.success(e("global.delete_success")),q()}))}})]}})}})]}})})}})]}})}})]}})}))}}}));
