import{a as v,b as C,b0 as l,bh as r,cj as $,d2 as w,m as I,h as t,d3 as R,G as L,bi as o,n as p,al as T,C as u,a8 as _}from"./index-b1da42da.js";import{b as x}from"./useTitle-c589a7a2.js";import{I as G}from"./SettingItem-d108ac31.js";import{R as j}from"./ResponsiveGrid-fe113ce9.js";import"./index-f17eeb5e.js";import"./index-1365e322.js";import"./index-7e41dfa7.js";import"./item_type-32dc6fdf.js";const A=d=>{const s=v(),{pathname:m}=C();x(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${d.group}`)),[i,c]=$([]),a=async()=>{const e=await f();o(e,c)};a();const[b,S]=l(()=>r.post("/admin/setting/save",w(i))),[k,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(j,{get children(){return t(R,{each:i,children:(e,B)=>t(G,L(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||k()},get children(){return s("global.refresh")}}),t(u,{get loading(){return b()},onClick:async()=>{const e=await S();o(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{A as default};
