System.register(["./index-legacy.eb7d2e8c.js","./useT-legacy.a87ffafd.js","./useTitle-legacy.9e156920.js","./useUtil-legacy.5f6ecdf5.js","./index-legacy.130b45f1.js","./SettingItem-legacy.3037cdba.js","./api-legacy.33415ff6.js","./index-legacy.32f905ac.js","./item_type-legacy.d1f1c701.js"],(function(e,t){"use strict";var n,r,s,a,i,c,g,u,o,l,d,y,f,_,h,m,k,$;return{setters:[e=>{n=e.q,r=e.a,s=e.b6,a=e.f,i=e.ag,c=e.c2,g=e.m,u=e.B,o=e.be,l=e.n,d=e.I,y=e.a8,f=e.a6},e=>{_=e.u},e=>{h=e.b},e=>{m=e.c},e=>{k=e.G},e=>{$=e.I},()=>{},()=>{},()=>{}],execute:function(){e("default",(()=>{const e=_();h("manage.sidemenu.other");const[t,j]=n(""),[p,v]=n(""),[b,C]=n(""),[I,x]=n([]),[S,w]=r((()=>s.get(`/admin/setting/list?groups=${k.ARIA2},${k.SINGLE}`))),[A,G]=r((()=>s.post("/admin/setting/set_aria2",{uri:t(),secret:p()})));(async()=>{const e=await w();o(e,(e=>{j(e.find((e=>"aria2_uri"===e.key))?.value||""),v(e.find((e=>"aria2_secret"===e.key))?.value||""),C(e.find((e=>"token"===e.key))?.value||""),x(e)}))})();const[T,q]=r((()=>s.post("/admin/setting/reset_token"))),{copy:B}=m();return a(f,{get loading(){return S()},get children(){return[a(i,{mb:"$2",get children(){return e("settings_other.aria2")}}),a(c,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[a($,g((()=>I().find((e=>"aria2_uri"===e.key))),{get value(){return t()},onChange:e=>j(e)})),a($,g((()=>I().find((e=>"aria2_secret"===e.key))),{get value(){return p()},onChange:e=>v(e)}))]}}),a(u,{my:"$2",get loading(){return A()},onClick:async()=>{const t=await G();o(t,(t=>{l.success(`${e("settings_other.aria2_version")} ${t}`)}))},get children(){return e("settings_other.set_aria2")}}),a(i,{my:"$2",get children(){return e("settings.token")}}),a(d,{get value(){return b()},readOnly:!0}),a(y,{my:"$2",spacing:"$2",get children(){return[a(u,{onClick:()=>{B(b())},get children(){return e("settings_other.copy_token")}}),a(u,{colorScheme:"danger",get loading(){return T()},onClick:async()=>{const t=await q();o(t,(t=>{l.success(e("settings_other.reset_token_success")),C(t)}))},get children(){return e("settings_other.reset_token")}})]}})]}})}))}}}));
