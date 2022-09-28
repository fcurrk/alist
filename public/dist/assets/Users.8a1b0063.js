import{u as S,a as w,b4 as h,d as C,c3 as v,e,a0 as d,B as u,Y as $,c4 as y,c5 as B,c6 as m,v as g,c7 as p,c8 as _,c9 as a,bd as b,n as x,W as F,bt as P,ad as R,ag as D,a2 as H}from"./index.1898dc6c.js";import{u as f}from"./useT.69394a57.js";import{b as L}from"./useTitle.b6071deb.js";import{D as M}from"./DeletePopover.9816bba7.js";const z=t=>{const n=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(P,{get colorScheme(){return n[t.role].color},get children(){return n[t.role].name}})},I=t=>{const n=f(),c=s=>`$${s?"success":"danger"}9`;return e(d,{spacing:"$0_5",get children(){return e(g,{each:R,children:(s,o)=>e(D,{get label(){return n(`users.permissions.${s}`)},get children(){return e($,{boxSize:"$2",rounded:"$full",get bg(){return c(H.can(t.user,o()))}})}})})}})},Y=()=>{const t=f();L("manage.sidemenu.users");const{to:n}=S(),[c,s]=w(()=>h.get("/admin/user/list")),[o,T]=C([]),l=async()=>{const r=await s();b(r,i=>T(i.content))};l();const[U,k]=v(r=>h.post(`/admin/user/delete?id=${r}`));return e(F,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(d,{spacing:"$2",get children(){return[e(u,{colorScheme:"accent",get loading(){return c()},onClick:l,get children(){return t("global.refresh")}}),e(u,{onClick:()=>{n("/@manage/users/add")},get children(){return t("global.add")}})]}}),e($,{w:"$full",overflowX:"auto",get children(){return e(y,{highlightOnHover:!0,dense:!0,get children(){return[e(B,{get children(){return e(m,{get children(){return[e(g,{each:["username","base_path","role","permission"],children:r=>e(p,{get children(){return t(`users.${r}`)}})}),e(p,{get children(){return t("global.operations")}})]}})}}),e(_,{get children(){return e(g,{get each(){return o()},children:r=>e(m,{get children(){return[e(a,{get children(){return r.username}}),e(a,{get children(){return r.base_path}}),e(a,{get children(){return e(z,{get role(){return r.role}})}}),e(a,{get children(){return e(I,{user:r})}}),e(a,{get children(){return e(d,{spacing:"$2",get children(){return[e(u,{onClick:()=>{n(`/@manage/users/edit/${r.id}`)},get children(){return t("global.edit")}}),e(M,{get name(){return r.username},get loading(){return U()===r.id},onClick:async()=>{const i=await k(r.id);b(i,()=>{x.success(t("global.delete_success")),l()})}})]}})}})]}})})}})]}})}})]}})};export{Y as default};
