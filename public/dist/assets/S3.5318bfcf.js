import{a as b,h as t,bG as p,bt as y,I as B,d8 as _,C as g,H as D,G as C,a7 as I,b0 as v,bf as f,cj as F,d5 as G,m as J,d6 as K,S as L,bg as k,n as u,aC as N,aj as O}from"./index.6a11a750.js";import{b as T}from"./useTitle.b1279957.js";import{G as j}from"./index.639c59b4.js";import{I as H}from"./SettingItem.26719def.js";import{R}from"./ResponsiveGrid.29916edc.js";import{a as q}from"./FolderTree.55d56418.js";import{c as d}from"./index.b407c547.js";import"./index.8bc73261.js";import"./index.dc25b8cb.js";import"./item_type.ee87ae79.js";import"./_commonjs-dynamic-modules.30ae7933.js";const W=e=>{const s=b();return t(_,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[t(p,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(y,{for:"path",display:"flex",alignItems:"center",get children(){return s("global.name")}}),t(B,{id:"name",get value(){return e.name},onChange:n=>e.onChange({...e,name:n.currentTarget.value})})]}}),t(p,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(y,{for:"path",display:"flex",alignItems:"center",get children(){return s("metas.path")}}),t(q,{id:"path",get value(){return e.path},onChange:n=>e.onChange({...e,path:n})})]}}),t(_,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return t(g,{colorScheme:"danger",onClick:async()=>{e.onDelete()},get children(){return s("global.delete")}})}})]}})},M=e=>{const s=b();return console.log(e.buckets),t(I,{alignItems:"start",w:"$full",get children(){return[t(y,{display:"flex",alignItems:"center",get children(){return s("settings.s3_buckets")}}),t(g,{onClick:()=>{e.setSettings(n=>n.key==="s3_buckets","value",JSON.stringify([...e.buckets,{name:"",path:""}])),console.log(e.buckets)},get children(){return s("global.add")}}),t(D,{get each(){return e.buckets},children:n=>t(W,C(n,{onChange:r=>{console.log(r),e.setSettings(a=>a.key==="s3_buckets","value",JSON.stringify(e.buckets.map(a=>a.name===n.name?r:a)))},onDelete:()=>{e.setSettings(r=>r.key==="s3_buckets","value",JSON.stringify(e.buckets.filter(r=>r.name!==n.name)))}}))})]}})},w=e=>{const s={...e.find(n=>n.key==="s3_buckets")};return s.value?JSON.parse(s.value):[]},ne=()=>{const e=b();T("manage.sidemenu.s3");const[s,n]=v(()=>f.get(`/admin/setting/list?group=${j.S3}`)),[r,a]=F([]),m=async()=>{const c=await n();k(c,a)};m();const[$,x]=v(()=>f.post("/admin/setting/save",G(r))),[A,S]=J(!1);return t(I,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(R,{get children(){return[t(K,{each:r,children:(c,o)=>t(L,{get when(){return c().key!="s3_buckets"},get children(){return t(H,C(c,{onChange:l=>{a(i=>c().key===i.key,"value",l)},onDelete:async()=>{S(!0);const l=await f.post(`/admin/setting/delete?key=${c().key}`);S(!1),k(l,()=>{u.success(e("global.delete_success")),m()})}}))}})}),t(g,{onClick:()=>{const c=d.lib.WordArray.random(15),o=d.lib.WordArray.random(240/8),l=d.enc.Base64.stringify(c).replace(/[\r\n]/g,""),i=d.enc.Base64.stringify(o).replace(/[\r\n]/g,"");a(h=>h.key==="s3_access_key_id","value",l),a(h=>h.key==="s3_secret_access_key","value",i)},get children(){return e("settings.s3_generate")}}),t(N,{get children(){return e("settings.s3_restart_to_apply")}}),t(M,{get buckets(){return w(r)},setSettings:a})]}}),t(O,{spacing:"$2",get children(){return[t(g,{colorScheme:"accent",onClick:m,get loading(){return s()||A()},get children(){return e("global.refresh")}}),t(g,{get loading(){return $()},onClick:async()=>{const c=w(r),o=new Set;for(const i of c){if(i.name===""||i.path===""){u.error(e("settings.s3_buckets_empty"));return}if(o.has(i.name)){u.error(e("settings.s3_buckets_duplicate_name"));return}o.add(i.name)}const l=await x();k(l,()=>u.success(e("global.save_success")))},get children(){return e("global.save")}})]}})]}})};export{ne as default};
