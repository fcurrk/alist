System.register(["./index-legacy.b91369ef.js","./useT-legacy.d3f33fd5.js","./useTitle-legacy.87e90dce.js","./useUtil-legacy.a8a87c8e.js","./index-legacy.4c589702.js","./SettingItem-legacy.26c4cce7.js","./api-legacy.42357412.js","./index-legacy.82646804.js","./LinkWithBase-legacy.cdf249ce.js","./item_type-legacy.d1f1c701.js"],(function(e,t){"use strict";var n,r,s,i,a,c,g,u,l,o,d,y,h,_,m,k,f,j;return{setters:[e=>{n=e.q,r=e.a,s=e.b4,i=e.f,a=e.be,c=e.c2,g=e.m,u=e.B,l=e.bc,o=e.n,d=e.I,y=e.a8,h=e.a6},e=>{_=e.u},e=>{m=e.b},e=>{k=e.c},e=>{f=e.G},e=>{j=e.I},()=>{},()=>{},()=>{},()=>{}],execute:function(){e("default",(()=>{const e=_();m("manage.sidemenu.other");const[t,$]=n(""),[p,v]=n(""),[b,C]=n(""),[I,x]=n([]),[S,w]=r((()=>s.get(`/admin/setting/list?groups=${f.ARIA2},${f.SINGLE}`))),[A,B]=r((()=>s.post("/admin/setting/set_aria2",{uri:t(),secret:p()})));(async()=>{const e=await w();l(e,(e=>{$(e.find((e=>"aria2_uri"===e.key))?.value||""),v(e.find((e=>"aria2_secret"===e.key))?.value||""),C(e.find((e=>"token"===e.key))?.value||""),x(e)}))})();const[G,L]=r((()=>s.post("/admin/setting/reset_token"))),{copy:T}=k();return i(h,{get loading(){return S()},get children(){return[i(a,{mb:"$2",get children(){return e("settings_other.aria2")}}),i(c,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[i(j,g((()=>I().find((e=>"aria2_uri"===e.key))),{get value(){return t()},onChange:e=>$(e)})),i(j,g((()=>I().find((e=>"aria2_secret"===e.key))),{get value(){return p()},onChange:e=>v(e)}))]}}),i(u,{my:"$2",get loading(){return A()},onClick:async()=>{const t=await B();l(t,(t=>{o.success(`${e("settings_other.aria2_version")} ${t}`)}))},get children(){return e("settings_other.set_aria2")}}),i(a,{my:"$2",get children(){return e("settings.token")}}),i(d,{get value(){return b()},readOnly:!0}),i(y,{my:"$2",spacing:"$2",get children(){return[i(u,{onClick:()=>{T(b())},get children(){return e("settings_other.copy_token")}}),i(u,{colorScheme:"danger",get loading(){return G()},onClick:async()=>{const t=await L();l(t,(t=>{o.success(e("settings_other.reset_token_success")),C(t)}))},get children(){return e("settings_other.reset_token")}})]}})]}})}))}}}));
