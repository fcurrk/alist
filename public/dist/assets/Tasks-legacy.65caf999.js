System.register(["./index-legacy.85cce7a9.js","./useT-legacy.a11f7727.js"],(function(e,t){"use strict";var r,n,c,l,a,s,i,o,u,d,g,$,h,w,f,m,p,k,b,y,x;return{setters:[e=>{r=e.a,n=e.b6,c=e.q,l=e.f,a=e.c4,s=e.W,i=e.a3,o=e.ag,u=e.a9,d=e.bv,g=e.bw,$=e.B,h=e.be,w=e.n,f=e.x,m=e.bt,p=e.E,k=e.aw,b=e.a8,y=e.m},e=>{x=e.u}],execute:function(){const t={errored:"danger",succeeded:"success",canceled:"neutral"},v=e=>{const r=x();return l(m,{get colorScheme(){return t[e.state]??"info"},get children(){return r(`tasks.${e.state}`)}})},C=e=>{const t=x(),m="undone"===e.done?"cancel":"delete",[p,k]=r((()=>n.post(`/admin/task/${e.type}/${m}?tid=${e.id}`))),[b,y]=c(!1);return l(f,{get when(){return!b()},get children(){return l(a,{get bgColor(){return s("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[l(i,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[l(o,{size:"sm",css:{wordBreak:"break-all"},get children(){return e.name}}),l(v,{get state(){return e.state}}),l(u,{css:{wordBreak:"break-all"},get children(){return e.status}}),l(d,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return e.progress},get children(){return l(g,{color:"$info8",rounded:"$md"})}})]}}),l(a,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return l($,{colorScheme:"danger",get loading(){return p()},onClick:async()=>{const e=await k();h(e,(()=>{w.success(t("global.delete_success")),y(!0)}))},get children(){return t(`global.${m}`)}})}})]}})}})},I=e=>{const t=x(),[a,s]=r((()=>n.get(`/admin/task/${e.type}/${e.done}`))),[u,d]=c([]),g=async()=>{const e=await s();h(e,(e=>d(e?.sort(((e,t)=>e.id>t.id?1:-1))??[])))};if(g(),"undone"===e.done){const e=setInterval(g,2e3);k((()=>clearInterval(e)))}const[w,m]=r((()=>n.post(`/admin/task/${e.type}/clear_done`)));return l(i,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[l(o,{size:"lg",get children(){return t(`tasks.${e.done}`)}}),l(f,{get when(){return"done"===e.done},get children(){return l(b,{spacing:"$2",get children(){return[l($,{colorScheme:"accent",get loading(){return a()},onClick:g,get children(){return t("global.refresh")}}),l($,{get loading(){return w()},onClick:async()=>{const e=await m();h(e,(()=>g()))},get children(){return t("global.clear")}})]}})}}),l(i,{w:"$full",spacing:"$2",get children(){return l(p,{get each(){return u()},children:t=>l(C,y(t,e))})}})]}})};e("T",(e=>{const t=x();return l(i,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[l(o,{size:"xl",get children(){return t(`tasks.${e.type}`)}}),l(i,{w:"$full",spacing:"$2",get children(){return l(p,{each:["undone","done"],children:t=>l(I,{get type(){return e.type},done:t})})}})]}})}))}}}));
