System.register(["./index-legacy.5b7a9715.js","./useT-legacy.73b353be.js","./useTitle-legacy.09a09394.js","./DeletePopover-legacy.45f09f27.js"],(function(e,r){"use strict";var t,n,a,i,c,l,d,s,g,o,u,h,m,b,$,f,p,v,y,k,w,C,j;return{setters:[e=>{t=e.u,n=e.a,a=e.b4,i=e.q,c=e.c3,l=e.f,d=e.a8,s=e.B,g=e.a5,o=e.c4,u=e.c5,h=e.c6,m=e.E,b=e.c7,$=e.c8,f=e.c9,p=e.aN,v=e.bd,y=e.n,k=e.a3},e=>{w=e.u},e=>{C=e.b},e=>{j=e.D}],execute:function(){e("default",(()=>{const e=w();C("manage.sidemenu.storages");const{to:r}=t(),[_,S]=n((()=>a.get("/admin/storage/list"))),[x,D]=i([]),T=async()=>{const e=await S();v(e,(e=>D(e.content)))};T();const[q,B]=c((e=>a.post(`/admin/storage/delete?id=${e}`))),[E,H]=c(((e,r)=>a.post(`/admin/storage/${r?.disabled?"enable":"disable"}?id=${r?.id}`)));return l(k,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[l(d,{spacing:"$2",get children(){return[l(s,{colorScheme:"accent",get loading(){return _()},onClick:T,get children(){return e("global.refresh")}}),l(s,{onClick:()=>{r("/@manage/storages/add")},get children(){return e("global.add")}})]}}),l(g,{w:"$full",overflowX:"auto",get children(){return l(o,{highlightOnHover:!0,dense:!0,get children(){return[l(u,{get children(){return l(h,{get children(){return[l(m,{each:["mount_path","driver","order","status","remark"],children:r=>l(b,{get children(){return e(`storages.common.${r}`)}})}),l(b,{get children(){return e("global.operations")}})]}})}}),l($,{get children(){return l(m,{get each(){return x()},children:t=>l(h,{get children(){return[l(f,{get children(){return t.mount_path}}),l(f,{get children(){return e(`drivers.drivers.${t.driver}`)}}),l(f,{get children(){return t.order}}),l(f,{get children(){return t.status}}),l(f,{get children(){return t.remark}}),l(f,{get children(){return l(d,{spacing:"$2",get children(){return[l(s,{onClick:()=>{r(`/@manage/storages/edit/${t.id}`)},get children(){return e("global.edit")}}),l(s,{get loading(){return E()===t.id},colorScheme:"warning",onClick:async()=>{const e=await H(t.id,t);p(e,(()=>{T()}))},get children(){return e("global."+(t.disabled?"enable":"disable"))}}),l(j,{get name(){return t.mount_path},get loading(){return q()===t.id},onClick:async()=>{const r=await B(t.id);v(r,(()=>{y.success(e("global.delete_success")),T()}))}})]}})}})]}})})}})]}})}})]}})}))}}}));
