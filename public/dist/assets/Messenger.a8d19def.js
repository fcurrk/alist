import{j as e,ao as i,am as w,d as y,n as R,r as k,a as r,ba as c,bx as x,az as C,a3 as o,E as b,D as T,m as z,I as B,a8 as D,B as g,h as F,aS as H,cn as L}from"./index.af305b75.js";const N=n=>e(i,{get children(){return n.content}}),W=n=>e(w,{get src(){return n.content}}),j={string:N,image:W},M=()=>{const n=y();R.info(n("manage.messenger-tips"));const[a,l]=k(""),[d,u]=r(()=>c.post("/admin/message/get")),[m,p]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=x([]),s=async()=>{const t=await u();F(t,f=>{S(L($=>$.push(f)))})},v=async()=>{const t=await p();H(t)},I=setInterval(s,1e3);return C(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(b,{each:h,children:t=>e(T,z({get component(){return j[t.type]}},t))})]}}),e(B,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(D,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return m()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{M as Messenger,j as Shower,M as default};