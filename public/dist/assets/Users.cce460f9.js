import{a as _,b as y,a$ as v,bg as u,m as x,dm as p,h as e,ai as h,C as o,ab as T,dn as B,dp as F,dq as b,H as m,dr as f,ds as H,dt as s,bh as g,n as $,a8 as L,cm as M,aL as P,aM as R,ak as D}from"./index.ea8a3d40.js";import{b as I}from"./useTitle.3b2ae23d.js";import{D as W}from"./DeletePopover.07a326de.js";import{W as q}from"./Wether.63bb51de.js";const z=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(M,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},O=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:P,children:(a,d)=>e(R,{get label(){return t(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(D.can(n.user,d()))}})}})})}})},E=()=>{const n=_();I("manage.sidemenu.users");const{to:t}=y(),[i,a]=v(()=>u.get("/admin/user/list")),[d,k]=x([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[C,S]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[U,w]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(L,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(B,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(b,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(f,{get children(){return n(`users.${r}`)}})}),e(f,{get children(){return n("global.operations")}})]}})}}),e(H,{get children(){return e(m,{get each(){return d()},children:r=>e(b,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(z,{get role(){return r.role}})}}),e(s,{get children(){return e(O,{user:r})}}),e(s,{get children(){return e(q,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(W,{get name(){return r.username},get loading(){return C()===r.id},onClick:async()=>{const c=await S(r.id);g(c,()=>{$.success(n("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return U()===r.id},onClick:async()=>{const c=await w(r.id);g(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{E as default};
