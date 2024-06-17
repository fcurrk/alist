import{a as A,h as t,bo as M,$ as V,aE as H,a0 as s,I as k,bA as J,T as P,bq as Y,dj as z,S as $,F as K,bB as Q,b as U,aY as v,ba as f,m as W,ch as T,k as X,ay as Z,a4 as p,dk as ee,c_ as te,c$ as ne,ag as re,G as _,E as x,C as ae,n as O,O as ie,bb as y,a8 as de}from"./index.d60e5180.js";import{T as d}from"./item_type.be442da4.js";import{R as ue}from"./ResponsiveGrid.b51b376c.js";const b=e=>{const u=A();return t(Q,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(M,{get for(){return e.name},display:"flex",alignItems:"center",get children(){var i;return u(((i=e.full_name_path)!=null?i:e.driver==="common")?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(V,{get fallback(){return t(H,{get children(){return u("settings.unknown_type")}})},get children(){return[t(s,{get when(){return e.type===d.String},get children(){return t(k,{get id(){return e.name},get type(){return e.name=="password"?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===d.String?i=>{var a;return(a=e.onChange)==null?void 0:a.call(e,i.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===d.Number},get children(){return t(k,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===d.Number?i=>{var a;return(a=e.onChange)==null?void 0:a.call(e,parseInt(i.currentTarget.value))}:void 0}})}}),t(s,{get when(){return e.type===d.Bool},get children(){return t(J,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===d.Bool?i=>{var a;return(a=e.onChange)==null?void 0:a.call(e,i.currentTarget.checked)}:void 0}})}}),t(s,{get when(){return e.type===d.Text},get children(){return t(P,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===d.Text?i=>{var a;return(a=e.onChange)==null?void 0:a.call(e,i.currentTarget.value)}:void 0}})}}),t(s,{get when(){return e.type===d.Select},get children(){return t(Y,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===d.Select?i=>{var a;return(a=e.onChange)==null?void 0:a.call(e,i)}:void 0},get children(){return t(z,{get readonly(){return e.readonly},get searchable(){return e.type===d.Select&&e.searchable},get options(){return e.options.split(",").map(i=>{var a;return{key:i,label:u(((a=e.options_prefix)!=null?a:e.driver==="common"?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`)+`.${i}`)}})}})}})}})]}}),t($,{get when(){return e.help},get children(){return t(K,{get children(){return u(e.driver==="common"?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function I(e,u){switch(e){case d.Bool:return u?u==="true":!1;case d.Number:return u?parseInt(u):0;default:return u||""}}const se=()=>{const e=A(),{params:u,back:i,to:a}=U(),{id:l}=u,[B,F]=v(()=>f.get("/admin/driver/list"),!0),[c,w]=W({}),L=async()=>{const n=await F();y(n,w)},[R,E]=v(()=>f.get(`/admin/storage/get?id=${l}`),!0),[N,j]=v(()=>f.get(`/admin/driver/info?driver=${g.driver}`),!0);l?(async()=>{const n=await E();y(n,async r=>{o(r),m(JSON.parse(r.addition));const h=await j();y(h,G=>w({[g.driver]:G}))})})():L();const[g,o]=T({}),[S,m]=T({}),[q,D]=v(()=>(o("addition",JSON.stringify(S)),f.post(`/admin/storage/${l?"update":"create"}`,g))),C=X(()=>{var r;const n=(r=c()[g.driver])==null?void 0:r.config.alert;if(console.log(n),n)return n.split("|")[0]});return t(de,{get loading(){return l?R()||N():B()},get children(){return[t(Z,{mb:"$2",get children(){return e(`global.${l?"edit":"add"}`)}}),t(p,{mb:"$2",spacing:"$2",get children(){return[t(b,{name:"driver",default:"",readonly:l!==void 0,required:!0,searchable:!0,get type(){return d.Select},get options(){return l?g.driver:Object.keys(c()).join(",")},get value(){return g.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:n=>{for(const r of c()[n].common)o(r.name,I(r.type,r.default));m(ee(r=>{for(const h in r)delete r[h]}));for(const r of c()[n].additional)m(r.name,I(r.type,r.default));o("driver",n)}}),t($,{get when(){return C()},get children(){return t(te,{get status(){return C()},w:"$full",get children(){return[t(ne,{}),re(()=>e(`drivers.config.${g.driver}.alert`))]}})}})]}}),t(ue,{get children(){return t($,{get when(){return c()[g.driver]},get children(){return[t(_,{get each(){return c()[g.driver].common},children:n=>t(b,x(n,{driver:"common",get value(){return g[n.name]},onChange:r=>{o(n.name,r)}}))}),t(_,{get each(){return c()[g.driver].additional},children:n=>t(b,x(n,{get driver(){return g.driver},get value(){return S[n.name]},onChange:r=>{m(n.name,r)}}))})]}})}}),t(ae,{mt:"$2",get loading(){return q()},onClick:async()=>{c()[g.driver].config.need_ms&&(O.info(e("manage.add_storage-tips")),window.open(ie("/@manage/messenger"),"_blank"));const n=await D();y(n,()=>{O.success(e("global.save_success")),i()},(r,h)=>{n.data.id&&a(`/@manage/storages/edit/${n.data.id}`)})},get children(){return e(`global.${l?"save":"add"}`)}})]}})};export{se as default};