import{u as $,bq as x,a as g,b7 as d,f as t,a3 as C,ag as v,b2 as o,b0 as m,E as k,B as _,be as h,n as F,a6 as I,bg as S,aa as c,I as T,bN as E,T as L,bp as M,x as q,F as B}from"./index.a3f71402.js";import{F as D}from"./FolderTree.477bcbaf.js";import{u as b}from"./useT.c9a4b75c.js";import"./index.5fa4233c.js";import"./api.c9ce84b5.js";const H=e=>{const r=b();return t(o,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(m,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return r(`metas.${e.name}`)}}),t(S,{w:"$full",get direction(){return e.type==="bool"?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[c(()=>c(()=>e.type==="string",!0)()?t(T,{get id(){return e.name},get value(){return e.value},onInput:n=>e.onChange(n.currentTarget.value)}):c(()=>e.type==="bool",!0)()?t(E,{get id(){return e.name},get checked(){return e.value},onChange:n=>e.onChange(n.currentTarget.checked)}):t(L,{get id(){return e.name},get value(){return e.value},onChange:n=>e.onChange(n.currentTarget.value)})),t(o,{w:"fit-content",display:"flex",get children(){return t(M,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:n=>e.onSub(n.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return r("metas.apply_sub")}})}})]}}),t(q,{get when(){return e.help},get children(){return t(B,{get children(){return r(`metas.${e.name}_help`)}})}})]}})},j=()=>{const e=b(),{params:r,back:n}=$(),{id:u}=r,[l,s]=x({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1}),[f,w]=g(()=>d.get(`/admin/meta/get?id=${u}`));u&&(async()=>{const a=await w();h(a,s)})();const[y,p]=g(()=>d.post(`/admin/meta/${u?"update":"create"}`,l));return t(I,{get loading(){return f()},get children(){return t(C,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(v,{get children(){return e(`global.${u?"edit":"add"}`)}}),t(o,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[t(m,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),t(D,{id:"path",get value(){return l.path},onChange:a=>s("path",a)})]}}),t(k,{each:[{name:"password",type:"string"},{name:"write",type:"bool"},{name:"hide",type:"text",help:!0},{name:"readme",type:"text",help:!0}],children:a=>t(H,{get name(){return a.name},get type(){return a.type},get value(){return l[a.name]},onChange:i=>s(a.name,i),get sub(){return l[`${a.name[0]}_sub`]},onSub:i=>s(`${a.name[0]}_sub`,i),get help(){return a.help}})}),t(_,{get loading(){return y()},onClick:async()=>{const a=await p();h(a,()=>{F.success(e("global.save_success")),n()})},get children(){return e(`global.${u?"save":"add"}`)}})]}})}})};export{j as default};
