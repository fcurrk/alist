System.register(["./index-legacy.eb7d2e8c.js","./useT-legacy.a87ffafd.js","./useTitle-legacy.9e156920.js","./SettingItem-legacy.3037cdba.js","./ResponsiveGrid-legacy.4de13903.js","./index-legacy.130b45f1.js","./index-legacy.32f905ac.js","./item_type-legacy.d1f1c701.js"],(function(e,t){"use strict";var s,n,a,c,l,i,r,g,u,o,d,y,b,f,m,p,h,j;return{setters:[e=>{s=e.u,n=e.a,a=e.b6,c=e.br,l=e.bM,i=e.q,r=e.f,g=e.bN,u=e.m,o=e.be,d=e.n,y=e.a8,b=e.B,f=e.a3},e=>{m=e.u},e=>{p=e.b},e=>{h=e.I},e=>{j=e.R},()=>{},()=>{},()=>{}],execute:function(){e("default",(e=>{const t=m(),{pathname:k}=s();p(`manage.sidemenu.${k().split("/").pop()}`);const[v,$]=n((()=>a.get(`/admin/setting/list?group=${e.group}`))),[w,x]=c([]),C=async()=>{const e=await $();o(e,x)};C();const[I,S]=n((()=>a.post("/admin/setting/save",l(w)))),[_,R]=i(!1);return r(f,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[r(j,{get children(){return r(g,{each:w,children:(e,s)=>r(h,u(e,{onChange:t=>{x((t=>e().key===t.key),"value",t)},onDelete:async()=>{R(!0);const s=await a.post(`/admin/setting/delete?key=${e().key}`);R(!1),o(s,(()=>{d.success(t("global.delete_success")),C()}))}}))})}}),r(y,{spacing:"$2",get children(){return[r(b,{colorScheme:"accent",onClick:C,get loading(){return v()||_()},get children(){return t("global.refresh")}}),r(b,{get loading(){return I()},onClick:async()=>{const e=await S();o(e,(()=>d.success(t("global.save_success"))))},get children(){return t("global.save")}})]}})]}})}))}}}));