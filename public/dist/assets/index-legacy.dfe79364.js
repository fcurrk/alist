System.register(["./index-legacy.26e69d1e.js","./useT-legacy.cda1c544.js","./useTitle-legacy.1649f3c5.js"],(function(e,t){"use strict";var r,n,o,l,i,a,s,c,u,d,g,p,f,h,m,v,w,C,x,$,y,b,I,S,_,k,G,j;return{setters:[e=>{r=e.m,n=e.d,o=e.bo,l=e.t,i=e.W,a=e.f,s=e.a5,c=e.q,u=e.bp,d=e.a,g=e.b4,p=e.u,f=e.a3,h=e.bg,m=e.bf,v=e.x,w=e.I,C=e.bq,x=e.a8,$=e.B,y=e.bk,b=e.aW,I=e.aX,S=e.ag,_=e.h,k=e.n},e=>{G=e.u},e=>{j=e.a}],execute:function(){const t=l('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="896" width="967.8852157128662"><defs><path id="path-2" opacity="1" fill-rule="evenodd" d="M896,448 C1142.6325445712241,465.5747656464056 695.2579309733121,896 448,896 C200.74206902668806,896 5.684341886080802e-14,695.2579309733121 0,448.0000000000001 C0,200.74206902668806 200.74206902668791,5.684341886080802e-14 447.99999999999994,0 C695.2579309733121,0 475,418 896,448Z"></path><linearGradient id="linearGradient-3" x1="0.5" y1="0" x2="0.5" y2="1"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-2" fill="url(#linearGradient-3)" fill-opacity="1"></use></g></svg>'),T=e=>{const l=r({startColor:"#28aff0",endColor:"#120fc4"},e);return(()=>{const e=t.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,i=r.nextSibling;return n((e=>{const t=l.startColor,n=l.endColor;return t!==e._v$&&o(r,"stop-color",e._v$=t),n!==e._v$2&&o(i,"stop-color",e._v$2=n),e}),{_v$:void 0,_v$2:void 0}),e})()},z=l('<svg height="1337" width="1337"><defs><path id="path-1" opacity="1" fill-rule="evenodd" d="M1337,668.5 C1337,1037.455193874239 1037.455193874239,1337 668.5,1337 C523.6725684305388,1337 337,1236 370.50000000000006,1094 C434.03835568300906,824.6732385973953 6.906089672974592e-14,892.6277623047779 0,668.5000000000001 C0,299.5448061257611 299.5448061257609,1.1368683772161603e-13 668.4999999999999,0 C1037.455193874239,0 1337,299.544806125761 1337,668.5Z"></path><linearGradient id="linearGradient-2" x1="0.79" y1="0.62" x2="0.21" y2="0.86"><stop offset="0" stop-opacity="1"></stop><stop offset="1" stop-opacity="1"></stop></linearGradient></defs><g opacity="1"><use xlink:href="#path-1" fill="url(#linearGradient-2)" fill-opacity="1"></use></g></svg>'),q=e=>{const t=r({startColor:"#28aff0",endColor:"#120fc4"},e);return(()=>{const e=z.cloneNode(!0),r=e.firstChild.firstChild.nextSibling.firstChild,l=r.nextSibling;return n((e=>{const n=t.startColor,i=t.endColor;return n!==e._v$&&o(r,"stop-color",e._v$=n),i!==e._v$2&&o(l,"stop-color",e._v$2=i),e}),{_v$:void 0,_v$2:void 0}),e})()},D=()=>{const e=i("#a9c6ff","#062b74");return a(s,{get bgColor(){return e()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh",get children(){return[a(s,{pos:"absolute",right:{"@initial":"-100px","@sm":"-300px"},top:{"@initial":"-1170px","@sm":"-900px"},get children(){return a(q,{})}}),a(s,{pos:"absolute",left:{"@initial":"-100px","@sm":"-200px"},bottom:{"@initial":"-760px","@sm":"-400px"},get children(){return a(T,{})}})]}})};e("default",(()=>{const e=G();j((()=>e("login.title")));const t=i("white","$neutral1"),[r,n]=c(localStorage.getItem("username")||""),[o,l]=c(localStorage.getItem("password")||""),[s,T]=c(""),[z,q]=u("remember-pwd","false"),[E,K]=d((()=>g.post("/auth/login",{username:r(),password:o(),otp_code:s()}))),{searchParams:M,to:N}=p(),R=async()=>{"true"===z()?(localStorage.setItem("username",r()),localStorage.setItem("password",o())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const t=await K();_(t,(t=>{k.success(e("login.success")),y(t.token),N(decodeURIComponent(M.redirect||"/"),!0)}),((e,t)=>{U()||402!==t?k.error(e):W(!0)}))},[U,W]=c(!1);return a(S,{zIndex:"1",w:"$full",h:"100vh",get children(){return[a(f,{get bgColor(){return t()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[a(h,{alignItems:"center",justifyContent:"space-around",get children(){return a(m,{color:"$info9",fontSize:"$2xl",get children(){return e("login.title")}})}}),a(v,{get when(){return!U()},get fallback(){return a(w,{id:"totp",name:"otp",get placeholder(){return e("login.otp-tips")},get value(){return s()},onChange:e=>T(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&R()}})},get children(){return[a(w,{name:"username",get placeholder(){return e("login.username-tips")},get value(){return r()},onInput:e=>n(e.currentTarget.value)}),a(w,{name:"password",get placeholder(){return e("login.password-tips")},type:"password",get value(){return o()},onInput:e=>l(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&R()}}),a(h,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return a(C,{get checked(){return"true"===z()},onChange:()=>q("true"===z()?"false":"true"),get children(){return e("login.remember")}})}})]}}),a(x,{w:"$full",spacing:"$2",get children(){return[a($,{colorScheme:"primary",w:"$full",onClick:()=>{U()?T(""):(n(""),l(""))},get children(){return e("login.clear")}}),a($,{w:"$full",get loading(){return E()},onClick:R,get children(){return e("login.login")}})]}}),a($,{w:"$full",colorScheme:"accent",onClick:()=>{y(),N(decodeURIComponent(M.redirect||"/"),!0)},get children(){return e("login.use_guest")}}),a(h,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[a(b,{}),a(I,{})]}})]}}),a(D,{})]}})}))}}}));
