import{d as m,u as p,br as x,a as d,b7 as g,j as t,a3 as C,ao as v,b4 as o,b2 as b,E as k,B as _,bd as h,n as F,a6 as I,bf as S,aa as c,I as T,bO as E,T as L,bq as M,y as q,F as B}from"./index.98d565c5.js";import{F as D}from"./FolderTree.e47abf36.js";import"./index.7f74676e.js";import"./api.81b05302.js";const H=e=>{const r=m();return t(o,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(b,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),t(S,{w:"$full",get direction(){return e.type==="bool"?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[c(()=>c(()=>e.type==="string",!0)()?t(T,{get id(){return e.name},get value(){return e.value},onInput:n=>e.onChange(n.currentTarget.value)}):c(()=>e.type==="bool",!0)()?t(E,{get id(){return e.name},get checked(){return e.value},onChange:n=>e.onChange(n.currentTarget.checked)}):t(L,{get id(){return e.name},get value(){return e.value},onChange:n=>e.onChange(n.currentTarget.value)})),t(o,{w:"fit-content",display:"flex",get children(){return t(M,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:n=>e.onSub(n.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),t(q,{get when(){return e.help},get children(){return t(B,{get children(){return r(`metas.${e.name}_help`)}})}})]}})},V=()=>{const e=m(),{params:r,back:n}=p(),{id:u}=r,[l,s]=x({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1}),[f,y]=d(()=>g.get(`/admin/meta/get?id=${u}`));u&&(async()=>{const a=await y();h(a,s)})();const[w,$]=d(()=>g.post(`/admin/meta/${u?"update":"create"}`,l));return t(I,{get loading(){return f()},get children(){return t(C,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(v,{get children(){return e(`global.${u?"edit":"add"}`)}}),t(o,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(b,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),t(D,{id:"path",get value(){return l.path},onChange:a=>s("path",a)})]}}),t(k,{each:[{name:"password",type:"string"},{name:"write",type:"bool"},{name:"hide",type:"text",help:!0},{name:"readme",type:"text",help:!0}],children:a=>t(H,{get name(){return a.name},get type(){return a.type},get value(){return l[a.name]},onChange:i=>s(a.name,i),get sub(){return l[`${a.name[0]}_sub`]},onSub:i=>s(`${a.name[0]}_sub`,i),get help(){return a.help}})}),t(_,{get loading(){return w()},onClick:async()=>{const a=await $();h(a,()=>{F.success(e("global.save_success")),n()})},get children(){return e(`global.${u?"save":"add"}`)}})]}})}})};export{V as default};
