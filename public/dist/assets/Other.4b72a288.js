import{a as F,d as i,aR as o,b3 as c,ct as N,h as t,ak as m,cs as A,at as g,B as u,b4 as l,n as h,I as P,a2 as Z,Z as j}from"./index.2846d152.js";import{n as z}from"./index.7a1aa950.js";import{G}from"./index.ededb45e.js";import{I as d}from"./SettingItem.969aa68c.js";import"./index.e3b54a05.js";import"./index.e895e77e.js";import"./item_type.be442da4.js";const ne=()=>{const r=F();z("manage.sidemenu.other");const[p,_]=i(""),[k,y]=i(""),[b,f]=i(""),[$,v]=i(""),[S,q]=i(""),[a,Q]=i([]),[U,R]=o(()=>c.get(`/admin/setting/list?groups=${G.ARIA2},${G.SINGLE}`)),[B,H]=o(()=>c.post("/admin/setting/set_aria2",{uri:p(),secret:k()})),[M,O]=o(()=>c.post("/admin/setting/set_qbit",{url:b(),seedtime:$()}));(async()=>{const e=await R();l(e,n=>{var C,T,I,L,w;_(((C=n.find(s=>s.key==="aria2_uri"))==null?void 0:C.value)||""),y(((T=n.find(s=>s.key==="aria2_secret"))==null?void 0:T.value)||""),q(((I=n.find(s=>s.key==="token"))==null?void 0:I.value)||""),f(((L=n.find(s=>s.key==="qbittorrent_url"))==null?void 0:L.value)||""),v(((w=n.find(s=>s.key==="qbittorrent_seedtime"))==null?void 0:w.value)||""),Q(n)})})();const[x,D]=o(()=>c.post("/admin/setting/reset_token")),{copy:E}=N();return t(j,{get loading(){return U()},get children(){return[t(m,{mb:"$2",get children(){return r("settings_other.aria2")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="aria2_uri"),{get value(){return p()},onChange:e=>_(e)})),t(d,g(()=>a().find(e=>e.key==="aria2_secret"),{get value(){return k()},onChange:e=>y(e)}))]}}),t(u,{my:"$2",get loading(){return B()},onClick:async()=>{const e=await H();l(e,n=>{h.success(`${r("settings_other.aria2_version")} ${n}`)})},get children(){return r("settings_other.set_aria2")}}),t(m,{my:"$2",get children(){return r("settings_other.qbittorrent")}}),t(A,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[t(d,g(()=>a().find(e=>e.key==="qbittorrent_url"),{get value(){return b()},onChange:e=>f(e)})),t(d,g(()=>a().find(e=>e.key==="qbittorrent_seedtime"),{get value(){return $()},onChange:e=>v(e)}))]}}),t(u,{my:"$2",get loading(){return M()},onClick:async()=>{const e=await O();l(e,n=>{h.success(n)})},get children(){return r("settings_other.set_qbit")}}),t(m,{my:"$2",get children(){return r("settings.token")}}),t(P,{get value(){return S()},readOnly:!0}),t(Z,{my:"$2",spacing:"$2",get children(){return[t(u,{onClick:()=>{E(S())},get children(){return r("settings_other.copy_token")}}),t(u,{colorScheme:"danger",get loading(){return x()},onClick:async()=>{const e=await D();l(e,n=>{h.success(r("settings_other.reset_token_success")),q(n)})},get children(){return r("settings_other.reset_token")}})]}})]}})};export{ne as default};
