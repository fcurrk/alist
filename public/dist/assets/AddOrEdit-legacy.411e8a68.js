!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=a(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return u=t.done,t},e:function(t){c=!0,i=t},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return e};var e={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(k){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}e.wrap=f;var d={};function h(){}function v(){}function g(){}var p={};l(p,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(j([])));m&&m!==n&&o.call(m,a)&&(p=m);var b=g.prototype=h.prototype=Object.create(p);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,u,c){var l=s(e[i],e,a);if("throw"!==l.type){var f=l.arg,d=f.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(d).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function S(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return v.prototype=g,l(b,"constructor",g),l(g,"constructor",v),v.displayName=l(g,c,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,u,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:j(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||a(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){if(t){if("string"==typeof t)return u(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(t,e):void 0}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){for(var r in e){(i=e[r]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r,i)}if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(e),o=0;o<n.length;o++){var i,a=n[o];(i=e[a]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a,i)}return t}function l(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./index-legacy.667db034.js","./useT-legacy.7bb6f752.js","./item_type-legacy.d1f1c701.js","./ResponsiveGrid-legacy.7a89180b.js"],(function(t){"use strict";var n,a,u,f,s,d,h,v,g,p,y,m,b,w,x,S,O,L,_,j,E,k,T,N,C,I,P,A,G,F,q,B,$,R,J,U,V,Y;return{setters:[function(t){n=t.f,a=t.b0,u=t.a0,f=t.al,s=t.a1,d=t.I,h=t.bN,v=t.T,g=t.bO,p=t.bP,y=t.bQ,m=t.bR,b=t.bS,w=t.bT,x=t.bU,S=t.E,O=t.bV,L=t.bW,_=t.bX,j=t.x,E=t.F,k=t.b2,T=t.u,N=t.a,C=t.b7,I=t.q,P=t.bq,A=t.ag,G=t.ch,F=t.m,q=t.B,B=t.n,$=t.N,R=t.be,J=t.a6},function(t){U=t.u},function(t){V=t.T},function(t){Y=t.R}],execute:function(){var D=function(t){var e=U();return n(k,{w:"$full",display:"flex",flexDirection:"column",get required(){return t.required},get children(){var r,o;return[n(a,(r={},"for",o={},o.for=o.for||{},o.for.get=function(){return t.name},l(r,"display","flex"),l(r,"alignItems","center"),"children",o.children=o.children||{},o.children.get=function(){var r;return e((null!==(r=t.full_name_path)&&void 0!==r?r:"common"===t.driver)?"storages.common.".concat(t.name):"drivers.".concat(t.driver,".").concat(t.name))},c(r,o),r)),n(u,{get fallback(){return n(f,{get children(){return e("settings.unknown_type")}})},get children(){return[n(s,{get when(){return t.type===V.String},get children(){return n(d,{get id(){return t.name},get readOnly(){return t.readonly},get value(){return t.value},get onInput(){return t.type===V.String?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,e.currentTarget.value)}:void 0}})}}),n(s,{get when(){return t.type===V.Number},get children(){return n(d,{type:"number",get id(){return t.name},get readOnly(){return t.readonly},get value(){return t.value},get onInput(){return t.type===V.Number?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,parseInt(e.currentTarget.value))}:void 0}})}}),n(s,{get when(){return t.type===V.Bool},get children(){return n(h,{get id(){return t.name},get readOnly(){return t.readonly},get defaultChecked(){return t.value},get onChange(){return t.type===V.Bool?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,e.currentTarget.checked)}:void 0}})}}),n(s,{get when(){return t.type===V.Text},get children(){return n(v,{get id(){return t.name},get readOnly(){return t.readonly},get value(){return t.value},get onChange(){return t.type===V.Text?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,e.currentTarget.value)}:void 0}})}}),n(s,{get when(){return t.type===V.Select},get children(){return n(g,{get id(){return t.name},get readOnly(){return t.readonly},get defaultValue(){return t.value},get onChange(){return t.type===V.Select?function(e){var r;return null===(r=t.onChange)||void 0===r?void 0:r.call(t,e)}:void 0},get children(){return[n(p,{get children(){return[n(y,{get children(){return e("global.choose")}}),n(m,{}),n(b,{})]}}),n(w,{get children(){return n(x,{get children(){return n(S,{get each(){var e;return null===(e=t.options)||void 0===e?void 0:e.split(",")},children:function(r){return n(O,{value:r,get children(){return[n(L,{get children(){var n;return e((null!==(n=t.options_prefix)&&void 0!==n?n:"common"===t.driver?"storages.common.".concat(t.name,"s"):"drivers.".concat(t.driver,".").concat(t.name,"s"))+".".concat(r))}}),n(_,{})]}})}})}})}})]}})}})]}}),n(j,{get when(){return t.help},get children(){return n(E,{get children(){return e("common"===t.driver?"storages.common.".concat(t.name,"-tips"):"drivers.".concat(t.driver,".").concat(t.name,"-tips"))}})}})]}})};function M(t,e){switch(t){case V.Bool:return!!e&&"true"===e;case V.Number:return e?parseInt(e):0;default:return e||""}}t("default",(function(){var t=U(),a=T(),u=a.params,c=a.back,f=u.id,s=i(N((function(){return C.get("/admin/driver/list")}),!0),2),d=s[0],h=s[1],v=i(I({}),2),g=v[0],p=v[1],y=function(){var t=o(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:e=t.sent,R(e,p);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),m=i(N((function(){return C.get("/admin/storage/get?id=".concat(f))}),!0),2),b=m[0],w=m[1],x=i(N((function(){return C.get("/admin/driver/info?driver=".concat(k.driver))}),!0),2),O=x[0],L=x[1],_=function(){var t=o(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:e=t.sent,R(e,function(){var t=o(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Q(e),z(JSON.parse(e.addition)),t.next=4,L();case 4:n=t.sent,R(n,(function(t){return p(l({},k.driver,t))}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();f?_():y();var E=i(P({}),2),k=E[0],Q=E[1],W=i(P({}),2),X=W[0],z=W[1],H=i(N((function(){return Q("addition",JSON.stringify(X)),C.post("/admin/storage/".concat(f?"update":"create"),k)})),2),K=H[0],Z=H[1];return n(J,{get loading(){return f?b()||O():d()},get children(){return[n(A,{mb:"$2",get children(){return t("global.".concat(f?"edit":"add"))}}),n(Y,{get children(){return[n(D,{name:"driver",default:"",readonly:void 0!==f,required:!0,get type(){return V.Select},get options(){return f?k.driver:Object.keys(g()).join(",")},get value(){return k.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:function(t){var r,n=e(g()[t].common);try{for(n.s();!(r=n.n()).done;){var o=r.value;Q(o.name,M(o.type,o.default))}}catch(c){n.e(c)}finally{n.f()}z(G((function(t){for(var e in t)delete t[e]})));var i,a=e(g()[t].additional);try{for(a.s();!(i=a.n()).done;){var u=i.value;z(u.name,M(u.type,u.default))}}catch(c){a.e(c)}finally{a.f()}Q("driver",t)}}),n(j,{get when(){return g()[k.driver]},get children(){return[n(S,{get each(){return g()[k.driver].common},children:function(t){return n(D,F(t,{driver:"common",get value(){return k[t.name]},onChange:function(e){Q(t.name,e)}}))}}),n(S,{get each(){return g()[k.driver].additional},children:function(t){return n(D,F(t,{get driver(){return k.driver},get value(){return X[t.name]},onChange:function(e){z(t.name,e)}}))}})]}})]}}),n(q,{mt:"$2",get loading(){return K()},onClick:(i=o(r().mark((function e(){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g()[k.driver].config.need_ms&&(B.info(t("manage.add_storage-tips")),window.open($("/@manage/messenger"),"_blank")),e.next=3,Z();case 3:n=e.sent,R(n,(function(){B.success(t("global.save_success")),c()}));case 5:case"end":return e.stop()}}),e)}))),function(){return i.apply(this,arguments)}),get children(){return t("global.".concat(f?"save":"add"))}})];var i}})}))}}}))}();
