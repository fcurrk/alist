System.register(["./index-legacy.7de2e5d4.js","./useT-legacy.36940e0e.js","./useTitle-legacy.3633080e.js","./SettingItem-legacy.07a6bb9f.js","./ResponsiveGrid-legacy.c7331381.js","./index-legacy.2da60d63.js","./index-legacy.828c9719.js","./item_type-legacy.d1f1c701.js"],(function(e,t){"use strict";var s,n,a,c,l,i,r,g,u,o,d,y,b,m,p,h,f,j;return{setters:[e=>{s=e.u,n=e.a,a=e.b7,c=e.bq,l=e.bL,i=e.q,r=e.f,g=e.bM,u=e.m,o=e.be,d=e.n,y=e.a9,b=e.B,m=e.a4},e=>{p=e.u},e=>{h=e.b},e=>{f=e.I},e=>{j=e.R},()=>{},()=>{},()=>{}],execute:function(){e("default",(e=>{const t=p(),{pathname:k}=s();h(`manage.sidemenu.${k().split("/").pop()}`);const[v,$]=n((()=>a.get(`/admin/setting/list?group=${e.group}`))),[w,x]=c([]),C=async()=>{const e=await $();o(e,x)};C();const[I,S]=n((()=>a.post("/admin/setting/save",l(w)))),[_,q]=i(!1);return r(m,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[r(j,{get children(){return r(g,{each:w,children:(e,s)=>r(f,u(e,{onChange:t=>{x((t=>e().key===t.key),"value",t)},onDelete:async()=>{q(!0);const s=await a.post(`/admin/setting/delete?key=${e().key}`);q(!1),o(s,(()=>{d.success(t("global.delete_success")),C()}))}}))})}}),r(y,{spacing:"$2",get children(){return[r(b,{colorScheme:"accent",onClick:C,get loading(){return v()||_()},get children(){return t("global.refresh")}}),r(b,{get loading(){return I()},onClick:async()=>{const e=await S();o(e,(()=>d.success(t("global.save_success"))))},get children(){return t("global.save")}})]}})]}})}))}}}));
