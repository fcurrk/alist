System.register(["./index-legacy.d7f2d2e0.js","./useT-legacy.d0b23168.js","./item_type-legacy.d1f1c701.js","./ResponsiveGrid-legacy.d0fa41fd.js"],(function(e,r){"use strict";var t,n,a,i,d,u,g,o,l,c,s,m,v,h,p,y,f,b,w,$,C,_,x,T,O,S,k,j,I,N,q,B,R,J,V,D,E,F;return{setters:[e=>{t=e.f,n=e.aZ,a=e.a0,i=e.ag,d=e.a1,u=e.I,g=e.bO,o=e.T,l=e.bP,c=e.bQ,s=e.bR,m=e.bS,v=e.bT,h=e.bU,p=e.bV,y=e.E,f=e.bW,b=e.bX,w=e.bY,$=e.x,C=e.F,_=e.a$,x=e.u,T=e.a,O=e.b4,S=e.q,k=e.br,j=e.be,I=e.ci,N=e.m,q=e.B,B=e.n,R=e.N,J=e.bc,V=e.a6},e=>{D=e.u},e=>{E=e.T},e=>{F=e.R}],execute:function(){const r=e=>{const r=D();return t(_,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){return[t(n,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(e.full_name_path??"common"===e.driver?`storages.common.${e.name}`:`drivers.${e.driver}.${e.name}`)}}),t(a,{get fallback(){return t(i,{get children(){return r("settings.unknown_type")}})},get children(){return[t(d,{get when(){return e.type===E.String},get children(){return t(u,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===E.String?r=>e.onChange?.(r.currentTarget.value):void 0}})}}),t(d,{get when(){return e.type===E.Number},get children(){return t(u,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===E.Number?r=>e.onChange?.(parseInt(r.currentTarget.value)):void 0}})}}),t(d,{get when(){return e.type===E.Bool},get children(){return t(g,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===E.Bool?r=>e.onChange?.(r.currentTarget.checked):void 0}})}}),t(d,{get when(){return e.type===E.Text},get children(){return t(o,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===E.Text?r=>e.onChange?.(r.currentTarget.value):void 0}})}}),t(d,{get when(){return e.type===E.Select},get children(){return t(l,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===E.Select?r=>e.onChange?.(r):void 0},get children(){return[t(c,{get children(){return[t(s,{get children(){return r("global.choose")}}),t(m,{}),t(v,{})]}}),t(h,{get children(){return t(p,{get children(){return t(y,{get each(){return e.options?.split(",")},children:n=>t(f,{value:n,get children(){return[t(b,{get children(){return r((e.options_prefix??("common"===e.driver?`storages.common.${e.name}s`:`drivers.${e.driver}.${e.name}s`))+`.${n}`)}}),t(w,{})]}})})}})}})]}})}})]}}),t($,{get when(){return e.help},get children(){return t(C,{get children(){return r("common"===e.driver?`storages.common.${e.name}-tips`:`drivers.${e.driver}.${e.name}-tips`)}})}})]}})};function G(e,r){switch(e){case E.Bool:return!!r&&"true"===r;case E.Number:return r?parseInt(r):0;default:return r||""}}e("default",(()=>{const e=D(),{params:n,back:a}=x(),{id:i}=n,[d,u]=T((()=>O.get("/admin/driver/list")),!0),[g,o]=S({}),[l,c]=T((()=>O.get(`/admin/storage/get?id=${i}`)),!0),[s,m]=T((()=>O.get(`/admin/driver/info?driver=${v.driver}`)),!0);i?(async()=>{const e=await c();J(e,(async e=>{h(e),f(JSON.parse(e.addition));const r=await m();J(r,(e=>o({[v.driver]:e})))}))})():(async()=>{const e=await u();J(e,o)})();const[v,h]=k({}),[p,f]=k({}),[b,w]=T((()=>(h("addition",JSON.stringify(p)),O.post("/admin/storage/"+(i?"update":"create"),v))));return t(V,{get loading(){return i?l()||s():d()},get children(){return[t(j,{mb:"$2",get children(){return e("global."+(i?"edit":"add"))}}),t(F,{get children(){return[t(r,{name:"driver",default:"",readonly:void 0!==i,required:!0,get type(){return E.Select},get options(){return i?v.driver:Object.keys(g()).join(",")},get value(){return v.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:e=>{for(const r of g()[e].common)h(r.name,G(r.type,r.default));f(I((e=>{for(const r in e)delete e[r]})));for(const r of g()[e].additional)f(r.name,G(r.type,r.default));h("driver",e)}}),t($,{get when(){return g()[v.driver]},get children(){return[t(y,{get each(){return g()[v.driver].common},children:e=>t(r,N(e,{driver:"common",get value(){return v[e.name]},onChange:r=>{h(e.name,r)}}))}),t(y,{get each(){return g()[v.driver].additional},children:e=>t(r,N(e,{get driver(){return v.driver},get value(){return p[e.name]},onChange:r=>{f(e.name,r)}}))})]}})]}}),t(q,{mt:"$2",get loading(){return b()},onClick:async()=>{g()[v.driver].config.need_ms&&(B.info(e("manage.add_storage-tips")),window.open(R("/@manage/messenger"),"_blank"));const r=await w();J(r,(()=>{B.success(e("global.save_success")),a()}))},get children(){return e("global."+(i?"save":"add"))}})]}})}))}}}));
