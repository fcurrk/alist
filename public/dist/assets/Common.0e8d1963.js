import{a as v,b as $,aU as l,b6 as o,c2 as C,cs as w,k as I,e as t,ct as R,D as L,b7 as r,n as p,ad as T,B as u,a3 as _}from"./index.3541059f.js";import{o as x}from"./index.56116929.js";import{I as B}from"./SettingItem.c43ee3d3.js";import{R as D}from"./ResponsiveGrid.423572f2.js";import"./index.dcd3e820.js";import"./index.5c0aad25.js";import"./index.e1e6459e.js";import"./item_type.be442da4.js";const z=d=>{const s=v(),{pathname:m}=$();x(`manage.sidemenu.${m().split("/").pop()}`);const[h,f]=l(()=>o.get(`/admin/setting/list?group=${d.group}`)),[c,i]=C([]),a=async()=>{const e=await f();r(e,i)};a();const[k,S]=l(()=>o.post("/admin/setting/save",w(c))),[y,g]=I(!1);return t(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(D,{get children(){return t(R,{each:c,children:(e,F)=>t(B,L(e,{onChange:n=>{i(b=>e().key===b.key,"value",n)},onDelete:async()=>{g(!0);const n=await o.post(`/admin/setting/delete?key=${e().key}`);g(!1),r(n,()=>{p.success(s("global.delete_success")),a()})}}))})}}),t(T,{spacing:"$2",get children(){return[t(u,{colorScheme:"accent",onClick:a,get loading(){return h()||y()},get children(){return s("global.refresh")}}),t(u,{get loading(){return k()},onClick:async()=>{const e=await S();r(e,()=>p.success(s("global.save_success")))},get children(){return s("global.save")}})]}})]}})};export{z as default};
