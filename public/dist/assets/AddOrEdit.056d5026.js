import{u as y,bq as I,a as d,b7 as c,f as e,a3 as C,ag as F,b2 as i,b0 as o,I as g,bg as k,E as v,ao as _,ab as q,B as D,be as p,n as E,a6 as L,bp as U}from"./index.a3f71402.js";import{F as T}from"./FolderTree.477bcbaf.js";import{u as m}from"./useT.c9a4b75c.js";import"./index.5fa4233c.js";import"./api.c9ce84b5.js";const B=r=>{const l=m();return e(i,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[e(o,{mb:"0",get children(){return l(`users.permissions.${r.name}`)}}),e(U,{get checked(){return r.can},onChange:()=>r.onChange(!r.can)})]}})},O=()=>{const r=m(),{params:l,back:h}=y(),{id:a}=l,[t,s]=I({id:0,username:"",password:"",base_path:"",role:0,permission:0}),[f,b]=d(()=>c.get(`/admin/user/get?id=${a}`));a&&(async()=>{const n=await b();p(n,s)})();const[w,$]=d(()=>c.post(`/admin/user/${a?"update":"create"}`,t));return e(L,{get loading(){return f()},get children(){return e(C,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(F,{get children(){return r(`global.${a?"edit":"add"}`)}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(o,{for:"username",display:"flex",alignItems:"center",get children(){return r("users.username")}}),e(g,{id:"username",get value(){return t.username},onInput:n=>s("username",n.currentTarget.value)})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(o,{for:"password",display:"flex",alignItems:"center",get children(){return r("users.password")}}),e(g,{id:"password",placeholder:"********",get value(){return t.password},onInput:n=>s("password",n.currentTarget.value)})]}}),e(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[e(o,{for:"base_path",display:"flex",alignItems:"center",get children(){return r("users.base_path")}}),e(T,{id:"base_path",get value(){return t.base_path},onChange:n=>s("base_path",n),onlyFolder:!0})]}}),e(i,{w:"$full",required:!0,get children(){return[e(o,{display:"flex",alignItems:"center",get children(){return r("users.permission")}}),e(k,{w:"$full",wrap:"wrap",gap:"$2",get children(){return e(v,{each:_,children:(n,u)=>e(B,{name:n,get can(){return q.can(t,u())},onChange:x=>{x?s("permission",t.permission|=1<<u()):s("permission",t.permission&=~(1<<u()))}})})}})]}}),e(D,{get loading(){return w()},onClick:async()=>{const n=await $();p(n,()=>{E.success(r("global.save_success")),h()})},get children(){return r(`global.${a?"save":"add"}`)}})]}})}})};export{O as default};
