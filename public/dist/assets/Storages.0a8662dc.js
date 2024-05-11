import{a as h,h as e,X as V,an as X,ae as o,af as v,c3 as F,ag as R,a7 as x,a4 as p,cJ as l,cG as D,b as L,aV as C,b7 as c,C as i,aX as A,b8 as u,n as O,m as k,k as P,b$ as W,S as q,bn as E,bo as J,bp as N,bq as j,br as z,bs as K,bt as Q,G as d,bu as U,bv as Y,bw as Z,bx as ee,$ as re,a0 as y,cu as te,cE as ae,cF as ne,cH as T,cI as se}from"./index.f7e440c1.js";import{o as le}from"./index.8180dcd3.js";import{D as oe}from"./DeletePopover.b126d6ed.js";function B(r){const a=h(),{to:g}=L(),[m,b]=C(()=>c.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,n]=C(()=>c.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(i,{onClick:()=>{g(`/@manage/storages/edit/${r.storage.id}`)},get children(){return a("global.edit")}}),e(i,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await n();A(s,()=>{r.refresh()})},get children(){return a(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return m()},onClick:async()=>{const s=await b();u(s,()=>{O.success(a("global.delete_success")),r.refresh()})}})]}function ce(r){const a=h();return e(p,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return V("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${X()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(F,{colorScheme:"info",get children(){return a(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[R(()=>a("storages.common.status")),":\xA0"]}}),e(x,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(B,r)}})]}})}function ie(r){const a=h();return e(D,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return a(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(B,r)}})}})]}})}const me=()=>{const r=h();le("manage.sidemenu.storages");const{to:a}=L(),[g,m]=C(()=>c.get("/admin/storage/list")),[b,S]=k([]),n=async()=>{const t=await m();u(t,w=>S(w.content))},[s,I]=k([]),[$,M]=k([]);(async()=>{const t=await c.get("/admin/driver/names");u(t,w=>I(w))})(),n();const G=async()=>{const t=await c.post("/admin/storage/load_all");u(t,()=>{O.success(r("storages.other.start_load_success"))})},_=P(()=>b().filter(t=>$().length===0?!0:$().includes(t.driver))),[f,H]=W("storages-layout","grid");return e(p,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(i,{colorScheme:"accent",get loading(){return g()},onClick:n,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{a("/@manage/storages/add")},get children(){return r("global.add")}}),e(i,{colorScheme:"warning",get loading(){return g()},onClick:G,get children(){return r("storages.other.load_all")}}),e(q,{get when(){return s().length>0},get children(){return e(E,{multiple:!0,get value(){return $()},onChange:M,get children(){return[e(J,{get children(){return[e(N,{get children(){return r("storages.other.filter_by_driver")}}),e(j,{}),e(z,{})]}}),e(K,{get children(){return e(Q,{get children(){return e(d,{get each(){return s()},children:t=>e(U,{value:t,get children(){return[e(Y,{get children(){return r(`drivers.drivers.${t}`)}}),e(Z,{})]}})})}})}})]}})}}),e(ee,{get checked(){return f()==="table"},onChange:t=>{H(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(y,{get when(){return f()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(d,{get each(){return _()},children:t=>e(ce,{storage:t,refresh:n})})}})}}),e(y,{get when(){return f()==="table"},get children(){return e(x,{w:"$full",overflowX:"auto",get children(){return e(ae,{highlightOnHover:!0,dense:!0,get children(){return[e(ne,{get children(){return e(D,{get children(){return[e(d,{each:["mount_path","driver","order","status","remark"],children:t=>e(T,{get children(){return r(`storages.common.${t}`)}})}),e(T,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(d,{get each(){return _()},children:t=>e(ie,{storage:t,refresh:n})})}})]}})}})}})]}})]}})};export{me as default};
