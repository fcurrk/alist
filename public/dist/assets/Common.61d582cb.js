import{a as v,b as $,aR as l,b3 as r,bV as C,cj as R,d as w,h as t,ck as I,at as L,b4 as o,n as p,a2 as T,B as u,V}from"./index.2846d152.js";import{n as _}from"./index.7a1aa950.js";import{I as x}from"./SettingItem.969aa68c.js";import{R as B}from"./ResponsiveGrid.bd09ab88.js";import"./index.ededb45e.js";import"./index.e3b54a05.js";import"./index.e895e77e.js";import"./item_type.be442da4.js";const A=d=>{const s=v(),{pathname:m}=$();_(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>r.get(`/admin/setting/list?group=${d.group}`)),[i,c]=C([]),a=async()=>{const e=await f();o(e,c)};a();const[k,S]=l(()=>r.post("/admin/setting/save",R(i))),[b,g]=w(!1);return t(V,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(B,{get children(){return t(I,{each:i,children:(e,j)=>t(x,L(e,{onChange:n=>{c(y=>e().key===y.key,"value",n)},onDelete:async()=>{g(!0);const n=await r.post(`/admin/setting/delete?key=${e().key}`);g(!1),o(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||b()},get children(){return s("global.refresh")}}),t(u,{get loading(){return k()},onClick:async()=>{const e=await S();o(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{A as default};
