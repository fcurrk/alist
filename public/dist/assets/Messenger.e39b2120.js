import{f as e,ag as i,ae as w,n as y,q as R,a as r,b6 as o,br as k,aw as C,a3 as c,E as b,D as x,m as T,I as B,a8 as D,B as g,h as F,aP as H,ci as L}from"./index.ba5baba4.js";import{u as N}from"./useT.231ada08.js";const P=t=>e(i,{get children(){return t.content}}),W=t=>e(w,{get src(){return t.content}}),q={string:P,image:W},M=()=>{const t=N();y.info(t("manage.messenger-tips"));const[a,l]=R(""),[u,d]=r(()=>o.post("/admin/message/get")),[m,p]=r(()=>o.post("/admin/message/send",{message:a()})),[h,S]=k([]),s=async()=>{const n=await d();F(n,I=>{S(L($=>$.push(I)))})},f=async()=>{const n=await p();H(n)},v=setInterval(s,1e3);return C(()=>clearInterval(v)),e(c,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(c,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.recieved_msgs")}}),e(b,{each:h,children:n=>e(x,T({get component(){return q[n.type]}},n))})]}}),e(B,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(D,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return u()},onClick:s,get children(){return t("manage.recieve")}}),e(g,{get loading(){return m()},onClick:f,get children(){return t("manage.send")}})]}})]}})};export{M as Messenger,q as Shower,M as default};
