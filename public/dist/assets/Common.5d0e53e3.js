import{a as v,b as C,aY as l,ba as r,ci as $,cW as w,m as I,h as t,cX as R,E as L,bb as o,n as p,ae as T,C as u,a4 as _}from"./index.317f3787.js";import{b as x}from"./useTitle.6b655623.js";import{I as B}from"./SettingItem.2c54c042.js";import{R as D}from"./ResponsiveGrid.1a604414.js";import"./index.c623aa0e.js";import"./index.52c7a790.js";import"./index.be497c7d.js";import"./item_type.be442da4.js";const Y=m=>{const s=v(),{pathname:d}=C();x(`manage.sidemenu.${d().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${m.group}`)),[i,c]=$([]),a=async()=>{const e=await f();o(e,c)};a();const[b,S]=l(()=>r.post("/admin/setting/save",w(i))),[k,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(D,{get children(){return t(R,{each:i,children:(e,E)=>t(B,L(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return s("global.refresh")}}),t(u,{get loading(){return b()},onClick:async()=>{const e=await S();o(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{Y as default};
