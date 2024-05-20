import{a as _,b as y,aY as v,ba as u,m as x,d4 as p,h as e,ae as h,C as o,a7 as T,d5 as B,d6 as F,d7 as b,G as m,d8 as f,d9 as I,da as s,bb as g,n as $,a4 as P,ci as R,aI as D,aJ as H,ah as L}from"./index.6eeaa492.js";import{b as M}from"./useTitle.87daeee9.js";import{D as W}from"./DeletePopover.bbad38bb.js";import{W as z}from"./Wether.dad4c73a.js";const G=n=>{const t=[{name:"general",color:"info"},{name:"guest",color:"neutral"},{name:"admin",color:"accent"}];return e(R,{get colorScheme(){return t[n.role].color},get children(){return t[n.role].name}})},J=n=>{const t=_(),i=a=>`$${a?"success":"danger"}9`;return e(h,{spacing:"$0_5",get children(){return e(m,{each:D,children:(a,d)=>e(H,{get label(){return t(`users.permissions.${a}`)},get children(){return e(T,{boxSize:"$2",rounded:"$full",get bg(){return i(L.can(n.user,d()))}})}})})}})},j=()=>{const n=_();M("manage.sidemenu.users");const{to:t}=y(),[i,a]=v(()=>u.get("/admin/user/list")),[d,k]=x([]),l=async()=>{const r=await a();g(r,c=>k(c.content))};l();const[C,S]=p(r=>u.post(`/admin/user/delete?id=${r}`)),[U,w]=p(r=>u.post(`/admin/user/cancel_2fa?id=${r}`));return e(P,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(h,{spacing:"$2",get children(){return[e(o,{colorScheme:"accent",get loading(){return i()},onClick:l,get children(){return n("global.refresh")}}),e(o,{onClick:()=>{t("/@manage/users/add")},get children(){return n("global.add")}})]}}),e(T,{w:"$full",overflowX:"auto",get children(){return e(B,{highlightOnHover:!0,dense:!0,get children(){return[e(F,{get children(){return e(b,{get children(){return[e(m,{each:["username","base_path","role","permission","available"],children:r=>e(f,{get children(){return n(`users.${r}`)}})}),e(f,{get children(){return n("global.operations")}})]}})}}),e(I,{get children(){return e(m,{get each(){return d()},children:r=>e(b,{get children(){return[e(s,{get children(){return r.username}}),e(s,{get children(){return r.base_path}}),e(s,{get children(){return e(G,{get role(){return r.role}})}}),e(s,{get children(){return e(J,{user:r})}}),e(s,{get children(){return e(z,{get yes(){return!r.disabled}})}}),e(s,{get children(){return e(h,{spacing:"$2",get children(){return[e(o,{onClick:()=>{t(`/@manage/users/edit/${r.id}`)},get children(){return n("global.edit")}}),e(W,{get name(){return r.username},get loading(){return C()===r.id},onClick:async()=>{const c=await S(r.id);g(c,()=>{$.success(n("global.delete_success")),l()})}}),e(o,{colorScheme:"accent",get loading(){return U()===r.id},onClick:async()=>{const c=await w(r.id);g(c,()=>{$.success(n("users.cancel_2fa_success")),l()})},get children(){return n("users.cancel_2fa")}})]}})}})]}})})}})]}})}})]}})};export{j as default};
