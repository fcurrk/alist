import{q as i,a,b4 as o,f as t,bf as $,c1 as M,m as S,B as c,bd as g,n as v,I as O,a8 as R,a6 as U}from"./index.e41fee6e.js";import{u as q}from"./useT.caac8642.js";import{b as x}from"./useTitle.e871acd1.js";import{c as D}from"./useUtil.7ba98ed1.js";import{G as b}from"./index.14919874.js";import{I as C}from"./SettingItem.22324264.js";import"./api.a5a9ddb9.js";import"./index.214d91de.js";import"./item_type.be442da4.js";const W=()=>{const s=q();x("manage.sidemenu.other");const[u,m]=i(""),[l,d]=i(""),[p,h]=i(""),[k,I]=i([]),[L,T]=a(()=>o.get(`/admin/setting/list?groups=${b.ARIA2},${b.SINGLE}`)),[A,G]=a(()=>o.post("/admin/setting/set_aria2",{uri:u(),secret:l()}));(async()=>{const e=await T();g(e,n=>{var _,f,y;m(((_=n.find(r=>r.key==="aria2_uri"))==null?void 0:_.value)||""),d(((f=n.find(r=>r.key==="aria2_secret"))==null?void 0:f.value)||""),h(((y=n.find(r=>r.key==="token"))==null?void 0:y.value)||""),I(n)})})();const[w,B]=a(()=>o.post("/admin/setting/reset_token")),{copy:H}=D();return t(U,{get loading(){return L()},get children(){return[t($,{mb:"$2",get children(){return s("settings_other.aria2")}}),t(M,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(C,S(()=>k().find(e=>e.key==="aria2_uri"),{get value(){return u()},onChange:e=>m(e)})),t(C,S(()=>k().find(e=>e.key==="aria2_secret"),{get value(){return l()},onChange:e=>d(e)}))]}}),t(c,{my:"$2",get loading(){return A()},onClick:async()=>{const e=await G();g(e,n=>{v.success(`${s("settings_other.aria2_version")} ${n}`)})},get children(){return s("settings_other.set_aria2")}}),t($,{my:"$2",get children(){return s("settings.token")}}),t(O,{get value(){return p()},readOnly:!0}),t(R,{my:"$2",spacing:"$2",get children(){return[t(c,{onClick:()=>{H(p())},get children(){return s("settings_other.copy_token")}}),t(c,{colorScheme:"danger",get loading(){return w()},onClick:async()=>{const e=await B();g(e,n=>{v.success(s("settings_other.reset_token_success")),h(n)})},get children(){return s("settings_other.reset_token")}})]}})]}})};export{W as default};
