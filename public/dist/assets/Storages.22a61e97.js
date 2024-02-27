import{a as h,e,W as F,am as G,ad as o,ae as v,c2 as R,af as V,a6 as x,a3 as D,cI as l,cF as p,b as B,aU as _,b6 as c,B as i,aW as A,b7 as u,n as L,k,j as E,b_ as P,S as X,bm as j,bn as q,bo as N,bp as U,bq as Z,br as z,bs as J,E as d,bt as K,bu as Q,bv as Y,bw as ee,Z as re,$ as C,ct as te,cD as ne,cE as ae,cG as T,cH as se}from"./index.afad18c6.js";import{n as le}from"./index.389e6f5c.js";import{D as oe}from"./DeletePopover.a98f0dc9.js";function O(r){const n=h(),{to:g}=B(),[m,b]=_(()=>c.post(`/admin/storage/delete?id=${r.storage.id}`)),[S,a]=_(()=>c.post(`/admin/storage/${r.storage.disabled?"enable":"disable"}?id=${r.storage.id}`));return[e(i,{onClick:()=>{g(`/@manage/storages/edit/${r.storage.id}`)},get children(){return n("global.edit")}}),e(i,{get loading(){return S()},get colorScheme(){return r.storage.disabled?"success":"warning"},onClick:async()=>{const s=await a();A(s,()=>{r.refresh()})},get children(){return n(`global.${r.storage.disabled?"enable":"disable"}`)}}),e(oe,{get name(){return r.storage.mount_path},get loading(){return m()},onClick:async()=>{const s=await b();u(s,()=>{L.success(n("global.delete_success")),r.refresh()})}})]}function ce(r){const n=h();return e(D,{w:"$full",spacing:"$2",rounded:"$lg",border:"1px solid $neutral7",get background(){return F("$neutral2","$neutral3")()},p:"$3",get _hover(){return{border:`1px solid ${G()}`}},get children(){return[e(o,{spacing:"$2",get children(){return[e(v,{fontWeight:"$medium",css:{wordBreak:"break-all"},get children(){return r.storage.mount_path}}),e(R,{colorScheme:"info",get children(){return n(`drivers.drivers.${r.storage.driver}`)}})]}}),e(o,{get children(){return[e(v,{get children(){return[V(()=>n("storages.common.status")),":\xA0"]}}),e(x,{css:{wordBreak:"break-all"},overflowX:"auto",get innerHTML(){return r.storage.status}})]}}),e(v,{css:{wordBreak:"break-all"},get children(){return r.storage.remark}}),e(o,{spacing:"$2",get children(){return e(O,r)}})]}})}function ie(r){const n=h();return e(p,{get children(){return[e(l,{get children(){return r.storage.mount_path}}),e(l,{get children(){return n(`drivers.drivers.${r.storage.driver}`)}}),e(l,{get children(){return r.storage.order}}),e(l,{get children(){return r.storage.status}}),e(l,{get children(){return r.storage.remark}}),e(l,{get children(){return e(o,{spacing:"$2",get children(){return e(O,r)}})}})]}})}const me=()=>{const r=h();le("manage.sidemenu.storages");const{to:n}=B(),[g,m]=_(()=>c.get("/admin/storage/list")),[b,S]=k([]),a=async()=>{const t=await m();u(t,w=>S(w.content))},[s,I]=k([]),[f,M]=k([]);(async()=>{const t=await c.get("/admin/driver/names");u(t,w=>I(w))})(),a();const H=async()=>{const t=await c.post("/admin/storage/load_all");u(t,()=>{L.success(r("storages.other.start_load_success"))})},y=E(()=>b().filter(t=>f().length===0?!0:f().includes(t.driver))),[$,W]=P("storages-layout","grid");return e(D,{spacing:"$3",alignItems:"start",w:"$full",get children(){return[e(o,{spacing:"$2",gap:"$2",w:"$full",wrap:{"@initial":"wrap","@md":"unset"},get children(){return[e(i,{colorScheme:"accent",get loading(){return g()},onClick:a,get children(){return r("global.refresh")}}),e(i,{onClick:()=>{n("/@manage/storages/add")},get children(){return r("global.add")}}),e(i,{colorScheme:"warning",get loading(){return g()},onClick:H,get children(){return r("storages.other.load_all")}}),e(X,{get when(){return s().length>0},get children(){return e(j,{multiple:!0,get value(){return f()},onChange:M,get children(){return[e(q,{get children(){return[e(N,{get children(){return r("storages.other.filter_by_driver")}}),e(U,{}),e(Z,{})]}}),e(z,{get children(){return e(J,{get children(){return e(d,{get each(){return s()},children:t=>e(K,{value:t,get children(){return[e(Q,{get children(){return r(`drivers.drivers.${t}`)}}),e(Y,{})]}})})}})}})]}})}}),e(ee,{get checked(){return $()==="table"},onChange:t=>{W(t.currentTarget.checked?"table":"grid")},get children(){return r("storages.other.table_layout")}})]}}),e(re,{get children(){return[e(C,{get when(){return $()==="grid"},get children(){return e(te,{w:"$full",gap:"$2_5",templateColumns:{"@initial":"1fr","@lg":"repeat(auto-fill, minmax(324px, 1fr))"},get children(){return e(d,{get each(){return y()},children:t=>e(ce,{storage:t,refresh:a})})}})}}),e(C,{get when(){return $()==="table"},get children(){return e(x,{w:"$full",overflowX:"auto",get children(){return e(ne,{highlightOnHover:!0,dense:!0,get children(){return[e(ae,{get children(){return e(p,{get children(){return[e(d,{each:["mount_path","driver","order","status","remark"],children:t=>e(T,{get children(){return r(`storages.common.${t}`)}})}),e(T,{get children(){return r("global.operations")}})]}})}}),e(se,{get children(){return e(d,{get each(){return y()},children:t=>e(ie,{storage:t,refresh:a})})}})]}})}})}})]}})]}})};export{me as default};
