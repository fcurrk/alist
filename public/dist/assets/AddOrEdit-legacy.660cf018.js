System.register(["./index-legacy.ef1ab517.js","./FolderTree-legacy.cbce8f5d.js","./useT-legacy.0e445ef0.js","./index-legacy.3185524a.js","./api-legacy.4c1dbd4e.js"],(function(e,t){"use strict";var n,r,a,u,l,c,g,i,s,d,o,h,p,m,b,y,f,w,$,v,x,_,C,k;return{setters:[e=>{n=e.u,r=e.br,a=e.a,u=e.b4,l=e.e,c=e.W,g=e.bf,i=e.aY,s=e.aW,d=e.v,o=e.B,h=e.bd,p=e.n,m=e.Z,b=e.bg,y=e.ay,f=e.I,w=e.bM,$=e.T,v=e.bq,x=e.k,_=e.F},e=>{C=e.F},e=>{k=e.u},()=>{},()=>{}],execute:function(){const t=e=>{const t=k();return l(i,{w:"$full",display:"flex",flexDirection:"column",get children(){return[l(s,{get for(){return e.name},display:"flex",alignItems:"center",get children(){return t(`metas.${e.name}`)}}),l(b,{w:"$full",get direction(){return"bool"===e.type?"row":{"@initial":"column","@md":"row"}},gap:"$2",get children(){return[y((()=>y((()=>"string"===e.type),!0)()?l(f,{get id(){return e.name},get value(){return e.value},onInput:t=>e.onChange(t.currentTarget.value)}):y((()=>"bool"===e.type),!0)()?l(w,{get id(){return e.name},get checked(){return e.value},onChange:t=>e.onChange(t.currentTarget.checked)}):l($,{get id(){return e.name},get value(){return e.value},onChange:t=>e.onChange(t.currentTarget.value)}))),l(i,{w:"fit-content",display:"flex",get children(){return l(v,{css:{whiteSpace:"nowrap"},get id(){return`${e.name}_sub`},onChange:t=>e.onSub(t.currentTarget.checked),color:"$neutral10",fontSize:"$sm",get checked(){return e.sub},get children(){return t("metas.apply_sub")}})}})]}}),l(x,{get when(){return e.help},get children(){return l(_,{get children(){return t(`metas.${e.name}_help`)}})}})]}})};e("default",(()=>{const e=k(),{params:b,back:y}=n(),{id:f}=b,[w,$]=r({id:0,path:"",password:"",p_sub:!1,write:!1,w_sub:!1,hide:"",h_sub:!1,readme:"",r_sub:!1}),[v,x]=a((()=>u.get(`/admin/meta/get?id=${f}`)));f&&(async()=>{const e=await x();h(e,$)})();const[_,T]=a((()=>u.post("/admin/meta/"+(f?"update":"create"),w)));return l(m,{get loading(){return v()},get children(){return l(c,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[l(g,{get children(){return e("global."+(f?"edit":"add"))}}),l(i,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[l(s,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),l(C,{id:"path",get value(){return w.path},onChange:e=>$("path",e)})]}}),l(d,{each:[{name:"password",type:"string"},{name:"write",type:"bool"},{name:"hide",type:"text",help:!0},{name:"readme",type:"text",help:!0}],children:e=>l(t,{get name(){return e.name},get type(){return e.type},get value(){return w[e.name]},onChange:t=>$(e.name,t),get sub(){return w[`${e.name[0]}_sub`]},onSub:t=>$(`${e.name[0]}_sub`,t),get help(){return e.help}})}),l(o,{get loading(){return _()},onClick:async()=>{const t=await T();h(t,(()=>{p.success(e("global.save_success")),y()}))},get children(){return e("global."+(f?"save":"add"))}})]}})}})}))}}}));
