System.register(["./index-legacy.5a60d7c7.js","./useT-legacy.60647517.js","./useTitle-legacy.84e5ea44.js","./DeletePopover-legacy.b3402c71.js"],(function(e,r){"use strict";var n,t,c,l,a,s,u,i,g,o,d,h,m,b,$,p,f,y,w,j,k,v,C,S,_,x;return{setters:[e=>{n=e.u,t=e.a,c=e.b7,l=e.q,a=e.c5,s=e.f,u=e.a8,i=e.B,g=e.a5,o=e.c6,d=e.c7,h=e.c8,m=e.E,b=e.c9,$=e.ca,p=e.cb,f=e.be,y=e.n,w=e.a3,j=e.bt,k=e.ao,v=e.aq,C=e.ab},e=>{S=e.u},e=>{_=e.b},e=>{x=e.D}],execute:function(){const r=e=>{const r=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return s(j,{get colorScheme(){return r[e.role].color},get children(){return r[e.role].name}})},q=e=>{const r=S();return s(u,{spacing:"$0_5",get children(){return s(m,{each:k,children:(n,t)=>s(v,{get label(){return r(`users.permissions.${n}`)},get children(){return s(g,{boxSize:"$2",rounded:"$full",get bg(){return`$${C.can(e.user,t())?"success":"danger"}9`}})}})})}})};e("default",(()=>{const e=S();_("manage.sidemenu.users");const{to:j}=n(),[k,v]=t((()=>c.get("/admin/user/list"))),[C,D]=l([]),T=async()=>{const e=await v();f(e,(e=>D(e.content)))};T();const[z,B]=a((e=>c.post(`/admin/user/delete?id=${e}`)));return s(w,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[s(u,{spacing:"$2",get children(){return[s(i,{colorScheme:"accent",get loading(){return k()},onClick:T,get children(){return e("global.refresh")}}),s(i,{onClick:()=>{j("/@manage/users/add")},get children(){return e("global.add")}})]}}),s(g,{w:"$full",overflowX:"auto",get children(){return s(o,{highlightOnHover:!0,dense:!0,get children(){return[s(d,{get children(){return s(h,{get children(){return[s(m,{each:["username","base_path","role","permission"],children:r=>s(b,{get children(){return e(`users.${r}`)}})}),s(b,{get children(){return e("global.operations")}})]}})}}),s($,{get children(){return s(m,{get each(){return C()},children:n=>s(h,{get children(){return[s(p,{get children(){return n.username}}),s(p,{get children(){return n.base_path}}),s(p,{get children(){return s(r,{get role(){return n.role}})}}),s(p,{get children(){return s(q,{user:n})}}),s(p,{get children(){return s(u,{spacing:"$2",get children(){return[s(i,{onClick:()=>{j(`/@manage/users/edit/${n.id}`)},get children(){return e("global.edit")}}),s(x,{get name(){return n.username},get loading(){return z()===n.id},onClick:async()=>{const r=await B(n.id);f(r,(()=>{y.success(e("global.delete_success")),T()}))}})]}})}})]}})})}})]}})}})]}})}))}}}));