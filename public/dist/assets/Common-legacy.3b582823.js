System.register(["./index-legacy.785ccdf3.js","./useT-legacy.706cc9f4.js","./useTitle-legacy.1862ce53.js","./SettingItem-legacy.277322d0.js","./ResponsiveGrid-legacy.2a2e8ea8.js","./index-legacy.bf4e5d84.js","./index-legacy.a328d5f9.js","./item_type-legacy.d1f1c701.js"],(function(e,t){"use strict";var s,n,c,a,l,i,r,g,u,o,d,y,m,p,b,f,h,j;return{setters:[e=>{s=e.u,n=e.a,c=e.b5,a=e.br,l=e.bM,i=e.q,r=e.f,g=e.bN,u=e.m,o=e.bd,d=e.n,y=e.a8,m=e.B,p=e.a3},e=>{b=e.u},e=>{f=e.b},e=>{h=e.I},e=>{j=e.R},()=>{},()=>{},()=>{}],execute:function(){e("default",(e=>{const t=b(),{pathname:k}=s();f(`manage.sidemenu.${k().split("/").pop()}`);const[v,$]=n((()=>c.get(`/admin/setting/list?group=${e.group}`))),[w,x]=a([]),C=async()=>{const e=await $();o(e,x)};C();const[I,S]=n((()=>c.post("/admin/setting/save",l(w)))),[_,R]=i(!1);return r(p,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[r(j,{get children(){return r(g,{each:w,children:(e,s)=>r(h,u(e,{onChange:t=>{x((t=>e().key===t.key),"value",t)},onDelete:async()=>{R(!0);const s=await c.post(`/admin/setting/delete?key=${e().key}`);R(!1),o(s,(()=>{d.success(t("global.delete_success")),C()}))}}))})}}),r(y,{spacing:"$2",get children(){return[r(m,{colorScheme:"accent",onClick:C,get loading(){return v()||_()},get children(){return t("global.refresh")}}),r(m,{get loading(){return I()},onClick:async()=>{const e=await S();o(e,(()=>d.success(t("global.save_success"))))},get children(){return t("global.save")}})]}})]}})}))}}}));
