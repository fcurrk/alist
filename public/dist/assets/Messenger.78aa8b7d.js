import{f as e,bf as i,ae as w,n as y,q as R,a as r,b5 as o,br as b,av as k,a3 as c,E as C,D as x,m as T,I as B,a8 as D,B as g,h as F,aO as H,ci as L}from"./index.276b7cff.js";import{u as N}from"./useT.a3cb5bff.js";const W=t=>e(i,{get children(){return t.content}}),q=t=>e(w,{get src(){return t.content}}),z={string:W,image:q},O=()=>{const t=N();y.info(t("manage.messenger-tips"));const[a,l]=R(""),[u,d]=r(()=>o.post("/admin/message/get")),[m,p]=r(()=>o.post("/admin/message/send",{message:a()})),[h,f]=b([]),s=async()=>{const n=await d();F(n,I=>{f(L($=>$.push(I)))})},S=async()=>{const n=await p();H(n)},v=setInterval(s,1e3);return k(()=>clearInterval(v)),e(c,{spacing:"$2",h:"$full",alignItems:"start",get children(){return[e(c,{w:"$full",spacing:"$2",alignItems:"start",p:"$2",rounded:"$lg",border:"1px solid var(--hope-colors-neutral6)",get children(){return[e(i,{size:"xl",get children(){return t("manage.recieved_msgs")}}),e(C,{each:h,children:n=>e(x,T({get component(){return z[n.type]}},n))})]}}),e(B,{w:"$full",get value(){return a()},onInput:n=>l(n.currentTarget.value)}),e(D,{spacing:"$2",get children(){return[e(g,{colorScheme:"accent",get loading(){return u()},onClick:s,get children(){return t("manage.recieve")}}),e(g,{get loading(){return m()},onClick:S,get children(){return t("manage.send")}})]}})]}})};export{O as Messenger,z as Shower,O as default};
