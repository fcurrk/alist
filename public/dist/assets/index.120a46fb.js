import{ce as oe,Y as M,h as e,ad as re,aQ as I,V as $,b as D,ca as g,cf as S,e as se,aF as K,bi as b,b$ as ae,cg as ie,ch as le,ci as ce,cj as ue,a as ge,k as de,m as u,ck as pe,b1 as R,o as he,a8 as me,bU as A,aD as fe,S as f,I as E,b3 as j,ak as we,C as U,bt as be,bu as Se,cl as ke,aJ as Ce,n as w,bj as _e,cm as B}from"./index.5f2c11f5.js";import{a as $e}from"./useTitle.14b05048.js";import{s as Ie,g as ye,a as ve}from"./webauthn-json.browser-ponyfill.1c672167.js";const xe="https://github.com/fcurrk/alist";function Le(s){return oe(`${s}-${xe}`)}const Pe=()=>{const s=M("#f1f3f5","#666666");return e(re,{get bgColor(){return s()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh"})},Re=()=>{const s=I("sso_login_enabled"),o=$("sso_login_platform"),k=I("sso_compatibility_mode"),{searchParams:d,to:r}=D(),l=d.token;l!=null&&l!=""&&(g(l),r(decodeURIComponent(d.redirect||S||"/"),!0));function i(c){const n=c.data;n.token&&(g(n.token),r(decodeURIComponent(d.redirect||S||"/"),!0))}if(window.addEventListener("message",i),se(()=>{window.removeEventListener("message",i)}),s){const c=()=>{const p=b.getUri()+"/auth/sso?method=sso_get_token";if(k){window.location.href=p;return}window.open(p,"authPopup","width=500,height=600")};let n;switch(o){case"Github":n=ue;break;case"Microsoft":n=ce;break;case"Google":n=le;break;case"Dingtalk":n=ie;break;default:n=ae}return e(K,{cursor:"pointer",boxSize:"$8",as:n,p:"$0_5",onclick:c})}},Me=()=>{const s=$("logo").split(`
`);M(s[0],s.pop());const o=ge(),k=de(()=>`${$("site_title")}`);$e(k);const d=M("white","$neutral1"),[r,l]=u(localStorage.getItem("username")||""),[i,c]=u(localStorage.getItem("password")||""),[n,p]=u(""),[C,G]=u(!1),[_,N]=pe("remember-pwd","false"),[y,O]=u(!1),[J,V]=R(async()=>y()?b.post("/auth/login/ldap",{username:r(),password:i(),otp_code:n()}):b.post("/auth/login/hash",{username:r(),password:Le(i()),otp_code:n()})),[,H]=R((t,a,h)=>b.post("/authn/webauthn_finish_login?username="+h,JSON.stringify(a),{headers:{session:t}})),[,W]=R(t=>b.get("/authn/webauthn_begin_login?username="+t)),{searchParams:v,to:x}=D(),q=async()=>PublicKeyCredential&&"isConditionalMediationAvailable"in PublicKeyCredential?await PublicKeyCredential.isConditionalMediationAvailable():!1,Q=I("webauthn_login_enabled"),Y=async()=>{G(!C())},F=async t=>{if(!Ie()){t||w.error(o("users.webauthn_not_supported"));return}if(t&&!await q())return;g();const a=t?"":r();!t&&_()==="true"?localStorage.setItem("username",r()):localStorage.removeItem("username");const h=await W(a);_e(h,async z=>{try{const m=ye(z.options);t&&(m.mediation="conditional");const ee=await ve(m),te=await H(z.session,ee,a);B(te,ne=>{w.success(o("login.success")),g(ne.token),x(decodeURIComponent(v.redirect||S||"/"),!0)})}catch(m){m instanceof Error&&w.error(m.message)}})},L=async()=>{if(C())await F();else{_()==="true"?(localStorage.setItem("username",r()),localStorage.setItem("password",i())):(localStorage.removeItem("username"),localStorage.removeItem("password"));const t=await V();B(t,a=>{w.success(o("login.success")),g(a.token),x(decodeURIComponent(v.redirect||S||"/"),!0)},(a,h)=>{!P()&&h===402?X(!0):w.error(a)})}},[P,X]=u(!1),T=I("ldap_login_enabled"),Z=$("ldap_login_tips");return T&&O(!0),he(()=>{F(!0)}),e(Ce,{zIndex:"1",w:"$full",h:"100vh",get children(){return[e(me,{get bgColor(){return d()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[e(A,{alignItems:"center",justifyContent:"space-around",get children(){return e(fe,{color:"$info9",fontSize:"$2xl",get children(){return k()}})}}),e(f,{get when(){return!P()},get fallback(){return e(E,{id:"totp",name:"otp",get placeholder(){return o("login.otp-tips")},get value(){return n()},onInput:t=>p(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&L()}})},get children(){return[e(E,{name:"username",get placeholder(){return o("login.username-tips")},get value(){return r()},onInput:t=>l(t.currentTarget.value)}),e(f,{get when(){return!C()},get children(){return e(E,{name:"password",get placeholder(){return o("login.password-tips")},type:"password",get value(){return i()},onInput:t=>c(t.currentTarget.value),onKeyDown:t=>{t.key==="Enter"&&L()}})}}),e(A,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return e(j,{get checked(){return _()==="true"},onChange:()=>N(_()==="true"?"false":"true"),get children(){return o("login.remember")}})}})]}}),e(we,{w:"$full",spacing:"$2",get children(){return[e(f,{get when(){return!C()},get children(){return e(U,{colorScheme:"primary",w:"$full",onClick:()=>{P()?p(""):(l(""),c(""))},get children(){return o("login.clear")}})}}),e(U,{w:"$full",get loading(){return J()},onClick:L,get children(){return o("login.login")}})]}}),e(f,{when:T,get children(){return e(j,{w:"$full",get checked(){return y()===!0},onChange:()=>O(!y()),children:Z})}}),e(U,{w:"$full",colorScheme:"accent",onClick:()=>{g(),x(decodeURIComponent(v.redirect||S||"/"),!0)},get children(){return o("login.use_guest")}}),e(A,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[e(be,{}),e(Se,{}),e(Re,{}),e(f,{when:Q,get children(){return e(K,{cursor:"pointer",boxSize:"$8",as:ke,p:"$0_5",onclick:Y})}})]}})]}}),e(Pe,{})]}})};export{Me as default};
