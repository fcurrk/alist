!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch($){s=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=k(a,r);if(u){if(u===h)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch($){return{type:"throw",arg:$}}}r.wrap=l;var h={};function p(){}function d(){}function g(){}var y={};s(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(I([])));m&&m!==n&&o.call(m,a)&&(y=m);var w=g.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,u,c){var s=f(e[i],e,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(h).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(s.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function I(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=g,s(w,"constructor",g),s(g,"constructor",d),d.displayName=s(g,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),s(x.prototype,u,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),s(w,c,"Generator"),s(w,a,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=I,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(s){return void r(s)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.a41e7040.js","./index-legacy.07efe23d.js","./webauthn-json.browser-ponyfill-legacy.8ddd819a.js"],(function(t){"use strict";var r,i,a,u,c,s,l,f,h,p,d,g,y,v,m,w,b,x,k,_,S,L,I,E,$,j,O,C,G,P,N,T,A,U,z,F,R,D,J,K,M;return{setters:[function(t){r=t.bC,i=t.R,a=t.e,u=t.B,c=t.au,s=t.O,l=t.a,f=t.by,h=t.bD,p=t.k,d=t.am,g=t.bl,y=t.bu,v=t.bE,m=t.bF,w=t.bG,b=t.u,x=t.g,k=t.f,_=t.bH,S=t.aO,L=t.a0,I=t.bt,E=t.ak,$=t.S,j=t.I,O=t.bI,C=t.a4,G=t.x,P=t.a_,N=t.a$,T=t.bJ,A=t.ao,U=t.bo,z=t.n,F=t.br},function(t){R=t.p,D=t.c},function(t){J=t.s,K=t.g,M=t.a}],execute:function(){var Y=function(){var t=i("#f1f3f5","#666666");return a(u,{get bgColor(){return t()},pos:"fixed",top:"0",left:"0",overflow:"hidden",zIndex:"-1",w:"100vw",h:"100vh"})},B=function(){var t=c("sso_login_enabled"),e=s("sso_login_platform"),r=c("sso_compatibility_mode"),n=l(),o=n.searchParams,i=n.to,u=o.token;function b(t){var e=t.data;e.token&&(f(e.token),i(decodeURIComponent(o.redirect||h||"/"),!0))}if(null!=u&&""!=u&&(f(u),i(decodeURIComponent(o.redirect||h||"/"),!0)),window.addEventListener("message",b),p((function(){window.removeEventListener("message",b)})),t){var x;switch(e){case"Github":x=w;break;case"Microsoft":x=R;break;case"Google":x=m;break;case"Dingtalk":x=v;break;default:x=y}return a(d,{cursor:"pointer",boxSize:"$8",as:x,p:"$0_5",onclick:function(){var t=g.getUri()+"/auth/sso?method=sso_get_token";r?window.location.href=t:window.open(t,"authPopup","width=500,height=600")}})}};t("default",(function(){var t=s("logo").split("\n");i(t[0],t.pop());var u=b(),p=x((function(){return"".concat(u("login.login_to")," ").concat(s("site_title"))}));D(p);var y=i("white","$neutral1"),v=o(k(localStorage.getItem("username")||""),2),m=v[0],w=v[1],R=o(k(localStorage.getItem("password")||""),2),H=R[0],q=R[1],Q=o(k(""),2),V=Q[0],W=Q[1],X=o(k(!1),2),Z=X[0],tt=X[1],et=o(_("remember-pwd","false"),2),rt=et[0],nt=et[1],ot=o(S(n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",g.post("/auth/login/hash",{username:m(),password:(e=H(),r("".concat(e,"-").concat("https://github.com/fcurrk/alist"))),otp_code:V()}));case 1:case"end":return t.stop()}var e}),t)})))),2),it=ot[0],at=ot[1],ut=S((function(t,e,r){return g.post("/authn/webauthn_finish_login?username="+r,JSON.stringify(e),{headers:{session:t}})})),ct=o(ut,2)[1],st=S((function(t){return g.get("/authn/webauthn_begin_login?username="+t)})),lt=o(st,2)[1],ft=l(),ht=ft.searchParams,pt=ft.to,dt=c("webauthn_login_enabled"),gt=function(){var t=n(e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:tt(!Z());case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),yt=function(){var t=n(e().mark((function t(){var r,o;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(Z()){t.next=8;break}return"true"===rt()?(localStorage.setItem("username",m()),localStorage.setItem("password",H())):(localStorage.removeItem("username"),localStorage.removeItem("password")),t.next=4,at();case 4:r=t.sent,U(r,(function(t){z.success(u("login.success")),f(t.token),pt(decodeURIComponent(ht.redirect||h||"/"),!0)}),(function(t,e){mt()||402!==e?z.error(t):wt(!0)})),t.next=17;break;case 8:if(J()){t.next=11;break}return z.error(u("users.webauthn_not_supported")),t.abrupt("return");case 11:return f(),"true"===rt()?localStorage.setItem("username",m()):localStorage.removeItem("username"),t.next=15,lt(m());case 15:o=t.sent,F(o,function(){var t=n(e().mark((function t(r){var n,o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=K(r.options),t.next=3,M(n);case 3:return o=t.sent,t.next=6,ct(r.session,o,m());case 6:i=t.sent,U(i,(function(t){z.success(u("login.success")),f(t.token),pt(decodeURIComponent(ht.redirect||h||"/"),!0)}));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 17:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),vt=o(k(!1),2),mt=vt[0],wt=vt[1];return a(A,{zIndex:"1",w:"$full",h:"100vh",get children(){return[a(L,{get bgColor(){return y()},rounded:"$xl",p:"24px",w:{"@initial":"90%","@sm":"364px"},spacing:"$4",get children(){return[a(I,{alignItems:"center",justifyContent:"space-around",get children(){return a(E,{color:"$info9",fontSize:"$2xl",get children(){return p()}})}}),a($,{get when(){return!mt()},get fallback(){return a(j,{id:"totp",name:"otp",get placeholder(){return u("login.otp-tips")},get value(){return V()},onInput:function(t){return W(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&yt()}})},get children(){return[a(j,{name:"username",get placeholder(){return u("login.username-tips")},get value(){return m()},onInput:function(t){return w(t.currentTarget.value)}}),a($,{get when(){return!Z()},get children(){return a(j,{name:"password",get placeholder(){return u("login.password-tips")},type:"password",get value(){return H()},onInput:function(t){return q(t.currentTarget.value)},onKeyDown:function(t){"Enter"===t.key&&yt()}})}}),a(I,{px:"$1",w:"$full",fontSize:"$sm",color:"$neutral10",justifyContent:"space-between",alignItems:"center",get children(){return a(O,{get checked(){return"true"===rt()},onChange:function(){return nt("true"===rt()?"false":"true")},get children(){return u("login.remember")}})}})]}}),a(C,{w:"$full",spacing:"$2",get children(){return[a($,{get when(){return!Z()},get children(){return a(G,{colorScheme:"primary",w:"$full",onClick:function(){mt()?W(""):(w(""),q(""))},get children(){return u("login.clear")}})}}),a(G,{w:"$full",get loading(){return it()},onClick:yt,get children(){return u("login.login")}})]}}),a(G,{w:"$full",colorScheme:"accent",onClick:function(){f(),pt(decodeURIComponent(ht.redirect||h||"/"),!0)},get children(){return u("login.use_guest")}}),a(I,{mt:"$2",justifyContent:"space-evenly",alignItems:"center",color:"$neutral10",w:"$full",get children(){return[a(P,{}),a(N,{}),a(B,{}),a($,{when:dt,get children(){return a(d,{cursor:"pointer",boxSize:"$8",as:T,p:"$0_5",onclick:gt})}})]}})]}}),a(Y,{})]}})}))}}}))}();