import{u as $,a as k,aO as M,bl as l,f as y,cf as C,e,a4 as o,x as c,B as S,cg as v,ch as x,ci as d,A as g,cj as u,ck as B,cl as n,br as h,n as F,a0 as D}from"./index.81d39995.js";import{o as H}from"./index.c881ffc6.js";import{D as L}from"./DeletePopover.c13f1e89.js";import{W as O}from"./Wether.9587c903.js";const I=()=>{const r=$();H("manage.sidemenu.metas");const{to:i}=k(),[p,m]=M(()=>l.get("/admin/meta/list")),[f,b]=y([]),a=async()=>{const t=await m();h(t,s=>b(s.content))};a();const[w,T]=C(t=>l.post(`/admin/meta/delete?id=${t}`));return e(D,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",get children(){return[e(c,{colorScheme:"accent",get loading(){return p()},onClick:a,get children(){return r("global.refresh")}}),e(c,{onClick:()=>{i("/@manage/metas/add")},get children(){return r("global.add")}})]}}),e(S,{w:"$full",overflowX:"auto",get children(){return e(v,{highlightOnHover:!0,dense:!0,get children(){return[e(x,{get children(){return e(d,{get children(){return[e(g,{each:["path","password","write"],children:t=>e(u,{get children(){return r(`metas.${t}`)}})}),e(u,{get children(){return r("global.operations")}})]}})}}),e(B,{get children(){return e(g,{get each(){return f()},children:t=>e(d,{get children(){return[e(n,{get children(){return t.path}}),e(n,{get children(){return t.password}}),e(n,{get children(){return e(O,{get yes(){return t.write}})}}),e(n,{get children(){return e(o,{spacing:"$2",get children(){return[e(c,{onClick:()=>{i(`/@manage/metas/edit/${t.id}`)},get children(){return r("global.edit")}}),e(L,{get name(){return t.path},get loading(){return w()===t.id},onClick:async()=>{const s=await T(t.id);h(s,()=>{F.success(r("global.delete_success")),a()})}})]}})}})]}})})}})]}})}})]}})};export{I as default};