!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,i=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},u=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var i=e&&e.prototype instanceof h?e:h,o=Object.create(i.prototype),u=new E(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return $()}for(n.method=i,n.arg=o;;){var u=n.delegate;if(u){var a=x(u,n);if(a){if(a===d)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=f(t,e,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(t,n,u),o}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(S){return{type:"throw",arg:S}}}n.wrap=l;var d={};function h(){}function p(){}function g(){}var y={};s(y,u,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(j([])));m&&m!==r&&i.call(m,u)&&(y=m);var _=g.prototype=h.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(e,n){function r(o,u,a,c){var s=f(e[o],e,u);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==t(d)&&i.call(d,"__await")?n.resolve(d.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):n.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var o;this._invoke=function(t,e){function i(){return new n((function(n,i){r(t,e,n,i)}))}return o=o?o.then(i,i):i()}}function x(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var r=f(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,d;var i=r.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function j(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:$}}function $(){return{value:void 0,done:!0}}return p.prototype=g,s(_,"constructor",g),s(g,"constructor",p),p.displayName=s(g,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s(t,c,"GeneratorFunction")),t.prototype=Object.create(_),t},n.awrap=function(t){return{__await:t}},w(k.prototype),s(k.prototype,a,(function(){return this})),n.AsyncIterator=k,n.async=function(t,e,r,i,o){void 0===o&&(o=Promise);var u=new k(l(t,e,r,i),o);return n.isGeneratorFunction(e)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},w(_),s(_,c,"Generator"),s(_,u,(function(){return this})),s(_,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},n.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return u.type="throw",u.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],u=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var a=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var u=o?o.completion:{};return u.type=t,u.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),L(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;L(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),d}},n}function n(t,e,n,r,i,o,u){try{var a=t[o](u),c=a.value}catch(s){return void n(s)}a.done?e(c):Promise.resolve(c).then(r,i)}function r(t){return function(){var e=this,r=arguments;return new Promise((function(i,o){var u=t.apply(e,r);function a(t){n(u,i,o,a,c,"next",t)}function c(t){n(u,i,o,a,c,"throw",t)}a(void 0)}))}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,i,o=[],u=!0,a=!1;try{for(n=n.call(t);!(u=(r=n.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(c){a=!0,i=c}finally{try{u||null==n.return||n.return()}finally{if(a)throw i}}return o}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}System.register(["./index-legacy.e91490ae.js","./FolderTree-legacy.660156c8.js","./useTitle-legacy.4d5a58d9.js","./index-legacy.89d33f44.js","./SettingItem-legacy.32c0019f.js","./index-legacy.36367535.js","./index-legacy.d4266fc7.js","./item_type-legacy.4bd28ded.js"],(function(t){"use strict";var n,o,u,a,c,s,l,f,d,h,p,g,y,v,m,_,w,k,x,b,L;return{setters:[function(t){n=t.a,o=t.m,u=t.aY,a=t.ba,c=t.bJ,s=t.h,l=t.ay,f=t.d9,d=t.E,h=t.C,p=t.bb,g=t.n,y=t.bB,v=t.bo,m=t.I,_=t.ae,w=t.a8},function(t){k=t.a},function(t){x=t.b},function(t){b=t.G},function(t){L=t.I},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n();x("manage.sidemenu.other");var E=i(o(""),2),j=E[0],$=E[1],S=i(o(""),2),C=S[0],O=S[1],I=i(o(""),2),A=I[0],G=I[1],N=i(o(""),2),P=N[0],T=N[1],q=i(o(""),2),F=q[0],D=q[1],Y=i(o(""),2),B=Y[0],J=Y[1],M=i(o(""),2),R=M[0],U=M[1],z=i(o(""),2),H=z[0],K=z[1],Q=i(o(""),2),V=Q[0],W=Q[1],X=i(o(""),2),Z=X[0],tt=X[1],et=i(o([]),2),nt=et[0],rt=et[1],it=i(u((function(){return a.get("/admin/setting/list?groups=".concat(b.ARIA2,",").concat(b.SINGLE))})),2),ot=it[0],ut=it[1],at=i(u((function(){return a.post("/admin/setting/set_aria2",{uri:j(),secret:C()})})),2),ct=at[0],st=at[1],lt=i(u((function(){return a.post("/admin/setting/set_qbit",{url:A(),seedtime:P()})})),2),ft=lt[0],dt=lt[1],ht=i(u((function(){return a.post("/admin/setting/set_transmission",{uri:F(),seedtime:B()})})),2),pt=ht[0],gt=ht[1],yt=i(u((function(){return a.post("/admin/setting/set_115",{temp_dir:R()})})),2),vt=yt[0],mt=yt[1],_t=i(u((function(){return a.post("/admin/setting/set_pikpak",{temp_dir:H()})})),2),wt=_t[0],kt=_t[1],xt=i(u((function(){return a.post("/admin/setting/set_thunder",{temp_dir:V()})})),2),bt=xt[0],Lt=xt[1],Et=function(){var t=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ut();case 2:n=t.sent,p(n,(function(t){var e,n,r,i,o,u,a,c,s,l;$((null===(e=t.find((function(t){return"aria2_uri"===t.key})))||void 0===e?void 0:e.value)||""),O((null===(n=t.find((function(t){return"aria2_secret"===t.key})))||void 0===n?void 0:n.value)||""),tt((null===(r=t.find((function(t){return"token"===t.key})))||void 0===r?void 0:r.value)||""),G((null===(i=t.find((function(t){return"qbittorrent_url"===t.key})))||void 0===i?void 0:i.value)||""),T((null===(o=t.find((function(t){return"qbittorrent_seedtime"===t.key})))||void 0===o?void 0:o.value)||""),D((null===(u=t.find((function(t){return"transmission_uri"===t.key})))||void 0===u?void 0:u.value)||""),J((null===(a=t.find((function(t){return"transmission_seedtime"===t.key})))||void 0===a?void 0:a.value)||""),U((null===(c=t.find((function(t){return"115_temp_dir"===t.key})))||void 0===c?void 0:c.value)||""),K((null===(s=t.find((function(t){return"pikpak_temp_dir"===t.key})))||void 0===s?void 0:s.value)||""),W((null===(l=t.find((function(t){return"thunder_temp_dir"===t.key})))||void 0===l?void 0:l.value)||""),rt(t)}));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Et();var jt=i(u((function(){return a.post("/admin/setting/reset_token")})),2),$t=jt[0],St=jt[1],Ct=c().copy;return s(w,{get loading(){return ot()},get children(){return[s(l,{mb:"$2",get children(){return t("settings_other.aria2")}}),s(f,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(L,d((function(){return nt().find((function(t){return"aria2_uri"===t.key}))}),{get value(){return j()},onChange:function(t){return $(t)}})),s(L,d((function(){return nt().find((function(t){return"aria2_secret"===t.key}))}),{get value(){return C()},onChange:function(t){return O(t)}}))]}}),s(h,{my:"$2",get loading(){return ct()},onClick:(c=r(e().mark((function n(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,st();case 2:r=e.sent,p(r,(function(e){g.success("".concat(t("settings_other.aria2_version")," ").concat(e))}));case 4:case"end":return e.stop()}}),n)}))),function(){return c.apply(this,arguments)}),get children(){return t("settings_other.set_aria2")}}),s(l,{my:"$2",get children(){return t("settings_other.qbittorrent")}}),s(f,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(L,d((function(){return nt().find((function(t){return"qbittorrent_url"===t.key}))}),{get value(){return A()},onChange:function(t){return G(t)}})),s(L,d((function(){return nt().find((function(t){return"qbittorrent_seedtime"===t.key}))}),{get value(){return P()},onChange:function(t){return T(t)}}))]}}),s(h,{my:"$2",get loading(){return ft()},onClick:(a=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,dt();case 2:n=t.sent,p(n,(function(t){g.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return a.apply(this,arguments)}),get children(){return t("settings_other.set_qbit")}}),s(l,{my:"$2",get children(){return t("settings_other.transmission")}}),s(f,{gap:"$2",columns:{"@initial":1,"@md":2},get children(){return[s(L,d((function(){return nt().find((function(t){return"transmission_uri"===t.key}))}),{get value(){return F()},onChange:function(t){return D(t)}})),s(L,d((function(){return nt().find((function(t){return"transmission_seedtime"===t.key}))}),{get value(){return B()},onChange:function(t){return J(t)}}))]}}),s(h,{my:"$2",get loading(){return pt()},onClick:(u=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gt();case 2:n=t.sent,p(n,(function(t){g.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return u.apply(this,arguments)}),get children(){return t("settings_other.set_transmission")}}),s(l,{my:"$2",get children(){return t("settings_other.115")}}),s(y,{w:"$full",display:"flex",flexDirection:"column",get children(){return[s(v,{for:"115_temp_dir",display:"flex",alignItems:"center",get children(){return t("settings.115_temp_dir")}}),s(k,{id:"115_temp_dir",get value(){return R()},onChange:function(t){return U(t)}})]}}),s(h,{my:"$2",get loading(){return vt()},onClick:(o=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,mt();case 2:n=t.sent,p(n,(function(t){g.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return o.apply(this,arguments)}),get children(){return t("settings_other.set_115")}}),s(l,{my:"$2",get children(){return t("settings_other.pikpak")}}),s(y,{w:"$full",display:"flex",flexDirection:"column",get children(){return[s(v,{for:"pikpak_temp_dir",display:"flex",alignItems:"center",get children(){return t("settings.pikpak_temp_dir")}}),s(k,{id:"pikpak_temp_dir",get value(){return H()},onChange:function(t){return K(t)}})]}}),s(h,{my:"$2",get loading(){return wt()},onClick:(i=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,kt();case 2:n=t.sent,p(n,(function(t){g.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return i.apply(this,arguments)}),get children(){return t("settings_other.set_pikpak")}}),s(l,{my:"$2",get children(){return t("settings_other.thunder")}}),s(y,{w:"$full",display:"flex",flexDirection:"column",get children(){return[s(v,{for:"thunder_temp_dir",display:"flex",alignItems:"center",get children(){return t("settings.thunder_temp_dir")}}),s(k,{id:"thunder_temp_dir",get value(){return V()},onChange:function(t){return W(t)}})]}}),s(h,{my:"$2",get loading(){return bt()},onClick:(n=r(e().mark((function t(){var n;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Lt();case 2:n=t.sent,p(n,(function(t){g.success(t)}));case 4:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)}),get children(){return t("settings_other.set_thunder")}}),s(l,{my:"$2",get children(){return t("settings.token")}}),s(m,{get value(){return Z()},readOnly:!0}),s(_,{my:"$2",spacing:"$2",get children(){return[s(h,{onClick:function(){Ct(Z())},get children(){return t("settings_other.copy_token")}}),s(h,{colorScheme:"danger",get loading(){return $t()},onClick:(n=r(e().mark((function n(){var r;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,St();case 2:r=e.sent,p(r,(function(e){g.success(t("settings_other.reset_token_success")),tt(e)}));case 4:case"end":return e.stop()}}),n)}))),function(){return n.apply(this,arguments)}),get children(){return t("settings_other.reset_token")}})];var n}})];var n,i,o,u,a,c}})}))}}}))}();
