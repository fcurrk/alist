System.register(["./index-legacy.5a60d7c7.js","./useT-legacy.60647517.js"],(function(e,r){"use strict";var t,n,a,s,u,c,i,g,o,l,d,f,y,h,p,x,v,b;return{setters:[e=>{t=e.u,n=e.a,a=e.b7,s=e.q,u=e.f,c=e.x,i=e.a3,g=e.ag,o=e.ae,l=e.I,d=e.B,f=e.a6,y=e.ac,h=e.n,p=e.be,x=e.aQ,v=e.c3},e=>{b=e.u}],execute:function(){e("default",(()=>{const{back:e}=t(),[r,w]=n((()=>a.post("/auth/2fa/generate"))),$=b(),[_,k]=s(),[m,q]=s("");(async()=>{if(y().otp)return h.warning($("users.2fa_already_enabled")),void e();const r=await w();p(r,k)})();const[I,j]=n((()=>a.post("/auth/2fa/verify",{code:m(),secret:_()?.secret}))),S=async()=>{const r=await j();x(r,(()=>{v({...y(),otp:!0}),e()}))};return u(f,{get loading(){return r()},get children(){return u(c,{get when(){return _()},get children(){return u(i,{spacing:"$2",alignItems:"start",get children(){return[u(g,{get children(){return $("users.scan_qr")}}),u(o,{boxSize:"$xs",rounded:"$lg",get src(){return _()?.qr}}),u(l,{maxW:"$xs",get placeholder(){return $("users.input_code")},get value(){return m()},onInput:e=>q(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&S()}}),u(d,{get loading(){return I()},onClick:S,get children(){return $("users.verify")}})]}})}})}})}))}}}));