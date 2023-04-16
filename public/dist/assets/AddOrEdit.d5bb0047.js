import{d as m,u as C,bv as k,a as u,b8 as c,j as e,V as _,ao as v,y as F,ab as g,b5 as a,b3 as l,I as p,bg as S,E as q,aw as D,bu as f,B as E,be as h,n as L,a6 as T}from"./index.57e3c491.js";import{F as U}from"./FolderTree.cc284ec0.js";import"./index.8c8e020f.js";import"./api.d25af188.js";const B=r=>{const o=m();return e(a,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(l,{mb:"0",get children(){return o(`users.permissions.${r.name}`)}}),e(f,{get checked(){return r.can},onChange:()=>r.onChange(!r.can)})]}})},z=()=>{const r=m(),{params:o,back:b}=C(),{id:i}=o,[t,s]=k({id:0,username:"",password:"",base_path:"",role:0,permission:0,disabled:!1,sso_id:""}),[w,$]=u(()=>c.get(`/admin/user/get?id=${i}`));i&&(async()=>{const n=await $();h(n,s)})();const[x,y]=u(()=>c.post(`/admin/user/${i?"update":"create"}`,t));return e(T,{get loading(){return w()},get children(){return e(_,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(v,{get children(){return r(`global.${i?"edit":"add"}`)}}),e(F,{get when(){return!g.is_guest(t)},get children(){return[e(a,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"username",display:"flex",alignItems:"center",get children(){return r("users.username")}}),e(p,{id:"username",get value(){return t.username},onInput:n=>s("username",n.currentTarget.value)})]}}),e(a,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"password",display:"flex",alignItems:"center",get children(){return r("users.password")}}),e(p,{id:"password",type:"password",placeholder:"********",get value(){return t.password},onInput:n=>s("password",n.currentTarget.value)})]}})]}}),e(a,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(l,{for:"base_path",display:"flex",alignItems:"center",get children(){return r("users.base_path")}}),e(U,{id:"base_path",get value(){return t.base_path},onChange:n=>s("base_path",n),onlyFolder:!0})]}}),e(a,{w:"$full",required:!0,get children(){return[e(l,{display:"flex",alignItems:"center",get children(){return r("users.permission")}}),e(S,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(q,{each:D,children:(n,d)=>e(B,{name:n,get can(){return g.can(t,d())},onChange:I=>{I?s("permission",t.permission|=1<<d()):s("permission",t.permission&=~(1<<d()))}})})}})]}}),e(a,{w:"fit-content",display:"flex",get children(){return e(f,{css:{whiteSpace:"nowrap"},id:"disabled",onChange:n=>s("disabled",n.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return t.disabled},get children(){return r("users.disabled")}})}}),e(E,{get loading(){return x()},onClick:async()=>{const n=await y();h(n,()=>{L.success(r("global.save_success")),b()})},get children(){return r(`global.${i?"save":"add"}`)}})]}})}})};export{z as default};
