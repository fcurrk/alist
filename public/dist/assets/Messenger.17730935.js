import{f as e,be as i,ab as w,n as y,q as b,a as r,b4 as o,br as R,au as k,a3 as c,E as C,D as x,m as N,I as T,a8 as B,B as g,h as D,aN as F,ci as H}from"./index.8a072262.js";import{u as L}from"./useT.62de73a4.js";const W=t=>e(i,{get children(){return t.content}}),q=t=>e(w,{get src(){return t.content}}),z={string:W,image:q},P=()=>{const t=L();y.info(t("manage.messenger-tips"));const[a,l]=b(""),[u,d]=r(()=>o.post("/admin/message/get")),[m,p]=r(()=>o.post("/admin/message/send",{message:a()})),[h,S]=R([]),s=async()=>{const n=await d();D(n,I=>{S(H($=>$.push(I)))})},f=async()=>{const n=await p();F(n)},v=setInterval(s,1e3);return k(()=>clearInterval(v)),e(c,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(c,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.recieved_msgs")}}),e(C,{each:h,children:n=>e(x,N({get component(){return z[n.type]}},n))})]}}),e(T,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(B,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return u()},onClick:s,get children(){return t("manage.recieve")}}),e(g,{get loading(){return m()},onClick:f,get children(){return t("manage.send")}})]}})]}})};export{P as Messenger,z as Shower,P as default};
