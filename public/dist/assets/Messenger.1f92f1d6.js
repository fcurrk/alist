import{f as e,ag as i,ae as w,n as y,q as R,a as r,b7 as o,bq as k,ax as x,a3 as c,E as C,D as b,m as T,I as q,a8 as B,B as g,h as D,aQ as F,ch as H}from"./index.a3f71402.js";import{u as L}from"./useT.c9a4b75c.js";const N=t=>e(i,{get children(){return t.content}}),W=t=>e(w,{get src(){return t.content}}),z={string:N,image:W},P=()=>{const t=L();y.info(t("manage.messenger-tips"));const[a,l]=R(""),[u,d]=r(()=>o.post("/admin/message/get")),[m,p]=r(()=>o.post("/admin/message/send",{message:a()})),[h,S]=k([]),s=async()=>{const n=await d();D(n,I=>{S(H($=>$.push(I)))})},f=async()=>{const n=await p();F(n)},v=setInterval(s,1e3);return x(()=>clearInterval(v)),e(c,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(c,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.recieved_msgs")}}),e(C,{each:h,children:n=>e(b,T({get component(){return z[n.type]}},n))})]}}),e(q,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(B,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return u()},onClick:s,get children(){return t("manage.recieve")}}),e(g,{get loading(){return m()},onClick:f,get children(){return t("manage.send")}})]}})]}})};export{P as Messenger,z as Shower,P as default};
