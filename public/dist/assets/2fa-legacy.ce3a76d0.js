System.register(["./index-legacy.785ccdf3.js","./useT-legacy.706cc9f4.js"],(function(e,r){"use strict";var t,n,a,c,s,u,i,g,o,d,l,f,y,h,p,x,b,v;return{setters:[e=>{t=e.u,n=e.a,a=e.b5,c=e.q,s=e.f,u=e.x,i=e.a3,g=e.bf,o=e.ae,d=e.I,l=e.B,f=e.a6,y=e.ac,h=e.n,p=e.bd,x=e.aO,b=e.c3},e=>{v=e.u}],execute:function(){e("default",(()=>{const{back:e}=t(),[r,w]=n((()=>a.post("/auth/2fa/generate"))),$=v(),[_,k]=c(),[m,q]=c("");(async()=>{if(y().otp)return h.warning($("users.2fa_already_enabled")),void e();const r=await w();p(r,k)})();const[I,j]=n((()=>a.post("/auth/2fa/verify",{code:m(),secret:_()?.secret}))),S=async()=>{const r=await j();x(r,(()=>{b({...y(),otp:!0}),e()}))};return s(f,{get loading(){return r()},get children(){return s(u,{get when(){return _()},get children(){return s(i,{spacing:"$2",alignItems:"start",get children(){return[s(g,{get children(){return $("users.scan_qr")}}),s(o,{boxSize:"$xs",rounded:"$lg",get src(){return _()?.qr}}),s(d,{maxW:"$xs",get placeholder(){return $("users.input_code")},get value(){return m()},onInput:e=>q(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&S()}}),s(l,{get loading(){return I()},onClick:S,get children(){return $("users.verify")}})]}})}})}})}))}}}));
