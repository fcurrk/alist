import{d as $,u as w,a as S,b7 as h,r as y,c5 as C,j as e,a8 as u,B as d,a5 as f,c6 as v,c7 as x,c8 as m,E as g,c9 as b,ca as B,cb as s,bd as p,n as _,a3 as F,bt as P,aw as R,ax as D,ab as H}from"./index.3f3b730e.js";import{b as L}from"./useTitle.c8a3042b.js";import{D as M}from"./DeletePopover.c717d1ba.js";import{W}from"./Wether.e8f77e99.js";const j=t=>{const n=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(P,{get colorScheme(){return n[t.role].color},get children(){return n[t.role].name}})},z=t=>{const n=$(),c=a=>`$${a?"success":"danger"}9`;return e(u,{spacing:"$0_5",get children(){return e(g,{each:R,children:(a,l)=>e(D,{get label(){return n(`users.permissions.${a}`)},get children(){return e(f,{boxSize:"$2",rounded:"$full",get bg(){return c(H.can(t.user,l()))}})}})})}})},X=()=>{const t=$();L("manage.sidemenu.users");const{to:n}=w(),[c,a]=S(()=>h.get("/admin/user/list")),[l,T]=y([]),o=async()=>{const r=await a();p(r,i=>T(i.content))};o();const[U,k]=C(r=>h.post(`/admin/user/delete?id=${r}`));return e(F,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(u,{spacing:"$2",get children(){return[e(d,{colorScheme:"accent",get loading(){return c()},onClick:o,get children(){return t("global.refresh")}}),e(d,{onClick:()=>{n("/@manage/users/add")},get children(){return t("global.add")}})]}}),e(f,{w:"$full",overflowX:"auto",get children(){return e(v,{highlightOnHover:!0,dense:!0,get children(){return[e(x,{get children(){return e(m,{get children(){return[e(g,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return t(`users.${r}`)}})}),e(b,{get children(){return t("global.operations")}})]}})}}),e(B,{get children(){return e(g,{get each(){return l()},children:r=>e(m,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(j,{get role(){return r.role}})}}),e(s,{get children(){return e(z,{user:r})}}),e(s,{get children(){return e(W,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(u,{spacing:"$2",get children(){return[e(d,{onClick:()=>{n(`/@manage/users/edit/${r.id}`)},get children(){return t("global.edit")}}),e(M,{get name(){return r.username},get loading(){return U()===r.id},onClick:async()=>{const i=await k(r.id);p(i,()=>{_.success(t("global.delete_success")),o()})}})]}})}})]}})})}})]}})}})]}})};export{X as default};
