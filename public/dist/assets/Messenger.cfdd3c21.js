import{j as e,ao as i,am as w,d as y,n as k,r as R,a as r,bk as c,bH as C,az as b,a3 as o,E as x,D as H,m as T,I as z,a8 as B,B as g,h as D,aS as F,cn as L}from"./index.5c2ea107.js";const N=n=>e(i,{get children(){return n.content}}),W=n=>e(w,{get src(){return n.content}}),j={string:N,image:W},M=()=>{const n=y();k.info(n("manage.messenger-tips"));const[a,l]=R(""),[d,u]=r(()=>c.post("/admin/message/get")),[m,p]=r(()=>c.post("/admin/message/send",{message:a()})),[h,S]=C([]),s=async()=>{const t=await u();D(t,f=>{S(L($=>$.push(f)))})},v=async()=>{const t=await p();F(t)},I=setInterval(s,1e3);return b(()=>clearInterval(I)),e(o,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(o,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return n("manage.received_msgs")}}),e(x,{each:h,children:t=>e(H,T({get component(){return j[t.type]}},t))})]}}),e(z,{w:"$full",get value(){return a()},onInput:t=>l(t.currentTarget.value)}),e(B,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return d()},onClick:s,get children(){return n("manage.receive")}}),e(g,{get loading(){return m()},onClick:v,get children(){return n("manage.send")}})]}})]}})};export{M as Messenger,j as Shower,M as default};