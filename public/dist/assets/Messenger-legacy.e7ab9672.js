System.register(["./index-legacy.f5983ae8.js","./useT-legacy.70008edc.js"],(function(e,n){"use strict";var t,r,a,s,c,g,i,l,u,o,d,m,h,p,f,v,$,y,I,w;return{setters:[e=>{t=e.f,r=e.ag,a=e.ae,s=e.n,c=e.q,g=e.a,i=e.b7,l=e.br,u=e.ax,o=e.a3,d=e.E,m=e.D,h=e.m,p=e.I,f=e.a8,v=e.B,$=e.h,y=e.aQ,I=e.ci},e=>{w=e.u}],execute:function(){const n=e("Shower",{string:e=>t(r,{get children(){return e.content}}),image:e=>t(a,{get src(){return e.content}})}),x=()=>{const e=w();s.info(e("manage.messenger-tips"));const[a,x]=c(""),[b,S]=g((()=>i.post("/admin/message/get"))),[j,k]=g((()=>i.post("/admin/message/send",{message:a()}))),[C,T]=l([]),q=async()=>{const e=await S();$(e,(e=>{T(I((n=>n.push(e))))}))},z=async()=>{const e=await k();y(e)},B=setInterval(q,1e3);return u((()=>clearInterval(B))),t(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[t(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[t(r,{size:"xl",get children(){return e("manage.recieved_msgs")}}),t(d,{each:C,children:e=>t(m,h({get component(){return n[e.type]}},e))})]}}),t(p,{w:"$full",get value(){return a()},onInput:e=>x(e.currentTarget.value)}),t(f,{spacing:"$2",get children(){return[t(v,{colorScheme:"accent",get loading(){return b()},onClick:q,get children(){return e("manage.recieve")}}),t(v,{get loading(){return j()},onClick:z,get children(){return e("manage.send")}})]}})]}})};e({Messenger:x,default:x})}}}));
