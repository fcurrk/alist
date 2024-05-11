import{a as _,b as y,aV as F,b7 as u,m as v,cD as p,h as e,ae as h,C as o,a7 as T,cE as x,cF as B,cG as f,G as m,cH as b,cI as D,cJ as s,b8 as g,n as $,a4 as G,c3 as H,aF as I,aG as P,ah as R}from"./index.f7e440c1.js";import{o as L}from"./index.8180dcd3.js";import{D as M}from"./DeletePopover.b126d6ed.js";import{W as V}from"./Wether.3d355cb0.js";const W=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(H,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},z=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:I,children:(a,d)=>e(P,{get label(){return t(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(R.can(n.user,d()))}})}})})}})},j=()=>{const n=_();L("manage.sidemenu.users");const{to:t}=y(),[i,a]=F(()=>u.get("/admin/user/list")),[d,k]=v([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[C,S]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[U,w]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(G,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(x,{highlightOnHover:!0,dense:!0,get children(){return[e(B,{get children(){return e(f,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(b,{get children(){return n(`users.${r}`)}})}),e(b,{get children(){return n("global.operations")}})]}})}}),e(D,{get children(){return e(m,{get each(){return d()},children:r=>e(f,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(W,{get role(){return r.role}})}}),e(s,{get children(){return e(z,{user:r})}}),e(s,{get children(){return e(V,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(M,{get name(){return r.username},get loading(){return C()===r.id},onClick:async()=>{const c=await S(r.id);g(c,()=>{$.success(n("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return U()===r.id},onClick:async()=>{const c=await w(r.id);g(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{j as default};
