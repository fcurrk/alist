System.register(["./index-legacy.c9ec0d57.js","./useT-legacy.ab42b1cf.js","./useTitle-legacy.e8599bcd.js","./DeletePopover-legacy.0be9a3c5.js"],(function(e,r){"use strict";var t,n,a,c,i,l,d,s,g,o,u,h,b,m,$,p,f,v,y,k,w,C,j;return{setters:[e=>{t=e.u,n=e.a,a=e.b5,c=e.q,i=e.c5,l=e.f,d=e.a8,s=e.B,g=e.a5,o=e.c6,u=e.c7,h=e.c8,b=e.E,m=e.c9,$=e.ca,p=e.cb,f=e.aN,v=e.bd,y=e.n,k=e.a3},e=>{w=e.u},e=>{C=e.b},e=>{j=e.D}],execute:function(){e("default",(()=>{const e=w();C("manage.sidemenu.storages");const{to:r}=t(),[_,S]=n((()=>a.get("/admin/storage/list"))),[x,D]=c([]),T=async()=>{const e=await S();v(e,(e=>D(e.content)))};T();const[q,B]=i((e=>a.post(`/admin/storage/delete?id=${e}`))),[E,H]=i(((e,r)=>a.post(`/admin/storage/${r?.disabled?"enable":"disable"}?id=${r?.id}`)));return l(k,{spacing:"$2",alignItems:"start",w:"$full",get children(){return[l(d,{spacing:"$2",get children(){return[l(s,{colorScheme:"accent",get loading(){return _()},onClick:T,get children(){return e("global.refresh")}}),l(s,{onClick:()=>{r("/@manage/storages/add")},get children(){return e("global.add")}})]}}),l(g,{w:"$full",overflowX:"auto",get children(){return l(o,{highlightOnHover:!0,dense:!0,get children(){return[l(u,{get children(){return l(h,{get children(){return[l(b,{each:["mount_path","driver","order","status","remark"],children:r=>l(m,{get children(){return e(`storages.common.${r}`)}})}),l(m,{get children(){return e("global.operations")}})]}})}}),l($,{get children(){return l(b,{get each(){return x()},children:t=>l(h,{get children(){return[l(p,{get children(){return t.mount_path}}),l(p,{get children(){return e(`drivers.drivers.${t.driver}`)}}),l(p,{get children(){return t.order}}),l(p,{get children(){return t.status}}),l(p,{get children(){return t.remark}}),l(p,{get children(){return l(d,{spacing:"$2",get children(){return[l(s,{onClick:()=>{r(`/@manage/storages/edit/${t.id}`)},get children(){return e("global.edit")}}),l(s,{get loading(){return E()===t.id},colorScheme:"warning",onClick:async()=>{const e=await H(t.id,t);f(e,(()=>{T()}))},get children(){return e("global."+(t.disabled?"enable":"disable"))}}),l(j,{get name(){return t.mount_path},get loading(){return q()===t.id},onClick:async()=>{const r=await B(t.id);v(r,(()=>{y.success(e("global.delete_success")),T()}))}})]}})}})]}})})}})]}})}})]}})}))}}}));
