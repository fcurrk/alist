!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=a(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,u=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return u=e.done,e},e:function(e){c=!0,i=e},f:function(){try{u||null==r.return||r.return()}finally{if(c)throw i}}}}function r(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */r=function(){return t};var t={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,r){return e[t]=r}}function f(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===s)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=d(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===s)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,a),i}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=f;var s={};function h(){}function v(){}function g(){}var p={};l(p,a,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(j([])));m&&m!==n&&o.call(m,a)&&(p=m);var b=g.prototype=h.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function x(t,r){function n(i,a,u,c){var l=d(t[i],t,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==e(s)&&o.call(s,"__await")?r.resolve(s.__await).then((function(e){n("next",e,u,c)}),(function(e){n("throw",e,u,c)})):r.resolve(s).then((function(e){f.value=e,u(f)}),(function(e){return n("throw",e,u,c)}))}c(l.arg)}var i;this._invoke=function(e,t){function o(){return new r((function(r,o){n(e,t,r,o)}))}return i=i?i.then(o,o):o()}}function S(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=d(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function _(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return v.prototype=g,l(b,"constructor",g),l(g,"constructor",v),v.displayName=l(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},w(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},w(b),l(b,c,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,_.prototype={constructor:_,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}function n(e,t,r,n,o,i,a){try{var u=e[i](a),c=u.value}catch(l){return void r(l)}u.done?t(c):Promise.resolve(c).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var a=e.apply(t,r);function u(e){n(a,o,i,u,c,"next",e)}function c(e){n(a,o,i,u,c,"throw",e)}u(void 0)}))}}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){if(e){if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){for(var r in t){(i=t[r]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,r,i)}if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(t),o=0;o<n.length;o++){var i,a=n[o];(i=t[a]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,a,i)}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}System.register(["./index-legacy.641ab668.js","./item_type-legacy.4bd28ded.js","./ResponsiveGrid-legacy.fecb5c95.js"],(function(e){"use strict";var n,a,u,f,d,s,h,v,g,p,y,m,b,w,x,S,O,L,_,j,E,k,C,T,I,N,P,G,A,F,$,q,B,J,R;return{setters:[function(e){n=e.a,a=e.h,u=e.bt,f=e.a0,d=e.aI,s=e.a1,h=e.I,v=e.bF,g=e.T,p=e.bv,y=e.dw,m=e.S,b=e.F,w=e.bG,x=e.b,S=e.b0,O=e.bf,L=e.m,_=e.cj,j=e.k,E=e.aC,k=e.a7,C=e.dx,T=e.da,I=e.db,N=e.ak,P=e.H,G=e.G,A=e.C,F=e.n,$=e.Q,q=e.bg,B=e.ad},function(e){J=e.T},function(e){R=e.R}],execute:function(){var Y=function(e){var t=n();return a(w,{w:"$full",display:"flex",flexDirection:"column",get required(){return e.required},get children(){var r,n;return[a(u,(r={},"for",n={},n.for=n.for||{},n.for.get=function(){return e.name},l(r,"display","flex"),l(r,"alignItems","center"),"children",n.children=n.children||{},n.children.get=function(){var r;return t((null!==(r=e.full_name_path)&&void 0!==r?r:"common"===e.driver)?"storages.common.".concat(e.name):"drivers.".concat(e.driver,".").concat(e.name))},c(r,n),r)),a(f,{get fallback(){return a(d,{get children(){return t("settings.unknown_type")}})},get children(){return[a(s,{get when(){return e.type===J.String},get children(){return a(h,{get id(){return e.name},get type(){return"password"==e.name?"password":"text"},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===J.String?function(t){var r;return null===(r=e.onChange)||void 0===r?void 0:r.call(e,t.currentTarget.value)}:void 0}})}}),a(s,{get when(){return e.type===J.Number},get children(){return a(h,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===J.Number?function(t){var r;return null===(r=e.onChange)||void 0===r?void 0:r.call(e,parseInt(t.currentTarget.value))}:void 0}})}}),a(s,{get when(){return e.type===J.Float},get children(){return a(h,{type:"number",get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onInput(){return e.type===J.Float?function(t){var r;return null===(r=e.onChange)||void 0===r?void 0:r.call(e,parseFloat(t.currentTarget.value))}:void 0}})}}),a(s,{get when(){return e.type===J.Bool},get children(){return a(v,{get id(){return e.name},get readOnly(){return e.readonly},get defaultChecked(){return e.value},get onChange(){return e.type===J.Bool?function(t){var r;return null===(r=e.onChange)||void 0===r?void 0:r.call(e,t.currentTarget.checked)}:void 0}})}}),a(s,{get when(){return e.type===J.Text},get children(){return a(g,{get id(){return e.name},get readOnly(){return e.readonly},get value(){return e.value},get onChange(){return e.type===J.Text?function(t){var r;return null===(r=e.onChange)||void 0===r?void 0:r.call(e,t.currentTarget.value)}:void 0}})}}),a(s,{get when(){return e.type===J.Select},get children(){return a(p,{get id(){return e.name},get readOnly(){return e.readonly},get defaultValue(){return e.value},get onChange(){return e.type===J.Select?function(t){var r;return null===(r=e.onChange)||void 0===r?void 0:r.call(e,t)}:void 0},get children(){return a(y,{get readonly(){return e.readonly},get searchable(){return e.type===J.Select&&e.searchable},get options(){return e.options.split(",").map((function(r){var n;return{key:r,label:t((null!==(n=e.options_prefix)&&void 0!==n?n:"common"===e.driver?"storages.common.".concat(e.name,"s"):"drivers.".concat(e.driver,".").concat(e.name,"s"))+".".concat(r))}}))}})}})}})]}}),a(m,{get when(){return e.help},get children(){return a(b,{get children(){return t("common"===e.driver?"storages.common.".concat(e.name,"-tips"):"drivers.".concat(e.driver,".").concat(e.name,"-tips"))}})}})]}})};function D(e,t){switch(e){case J.Bool:return!!t&&"true"===t;case J.Number:return t?parseInt(t):0;default:return t||""}}e("default",(function(){var e=n(),u=x(),c=u.params,f=u.back,d=u.to,s=c.id,h=i(S((function(){return O.get("/admin/driver/list")}),!0),2),v=h[0],g=h[1],p=i(L({}),2),y=p[0],b=p[1],w=function(){var e=o(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,q(t,b);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=i(S((function(){return O.get("/admin/storage/get?id=".concat(s))}),!0),2),M=H[0],Q=H[1],U=i(S((function(){return O.get("/admin/driver/info?driver=".concat(X.driver))}),!0),2),V=U[0],z=U[1],K=function(){var e=o(r().mark((function e(){var t;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Q();case 2:t=e.sent,q(t,function(){var e=o(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(t),re(JSON.parse(t.addition)),e.next=4,z();case 4:n=e.sent,q(n,(function(e){return b(l({},X.driver,e))}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();s?K():w();var W=i(_({}),2),X=W[0],Z=W[1],ee=i(_({}),2),te=ee[0],re=ee[1],ne=i(S((function(){return Z("addition",JSON.stringify(te)),O.post("/admin/storage/".concat(s?"update":"create"),X)})),2),oe=ne[0],ie=ne[1],ae=j((function(){var e,t=null===(e=y()[X.driver])||void 0===e?void 0:e.config.alert;if(console.log(t),t)return t.split("|")[0]}));return a(B,{get loading(){return s?M()||V():v()},get children(){return[a(E,{mb:"$2",get children(){return e("global.".concat(s?"edit":"add"))}}),a(k,{mb:"$2",spacing:"$2",get children(){return[a(Y,{name:"driver",default:"",readonly:void 0!==s,required:!0,searchable:!0,get type(){return J.Select},get options(){return s?X.driver:Object.keys(y()).join(",")},get value(){return X.driver},full_name_path:"storages.common.driver",options_prefix:"drivers.drivers",driver:"drivers",onChange:function(e){var r,n=t(y()[e].common);try{for(n.s();!(r=n.n()).done;){var o=r.value;Z(o.name,D(o.type,o.default))}}catch(c){n.e(c)}finally{n.f()}re(C((function(e){for(var t in e)delete e[t]})));var i,a=t(y()[e].additional);try{for(a.s();!(i=a.n()).done;){var u=i.value;re(u.name,D(u.type,u.default))}}catch(c){a.e(c)}finally{a.f()}Z("driver",e)}}),a(m,{get when(){return ae()},get children(){return a(T,{get status(){return ae()},w:"$full",get children(){return[a(I,{}),N((function(){return e("drivers.config.".concat(X.driver,".alert"))}))]}})}})]}}),a(R,{get children(){return a(m,{get when(){return y()[X.driver]},get children(){return[a(P,{get each(){return y()[X.driver].common},children:function(e){return a(Y,G(e,{driver:"common",get value(){return X[e.name]},onChange:function(t){Z(e.name,t)}}))}}),a(P,{get each(){return y()[X.driver].additional},children:function(e){return a(Y,G(e,{get driver(){return X.driver},get value(){return te[e.name]},onChange:function(t){re(e.name,t)}}))}})]}})}}),a(A,{mt:"$2",get loading(){return oe()},onClick:(n=o(r().mark((function t(){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y()[X.driver].config.need_ms&&(F.info(e("manage.add_storage-tips")),window.open($("/@manage/messenger"),"_blank")),t.next=3,ie();case 3:n=t.sent,q(n,(function(){F.success(e("global.save_success")),f()}),(function(e,t){n.data.id&&d("/@manage/storages/edit/".concat(n.data.id))}));case 5:case"end":return t.stop()}}),t)}))),function(){return n.apply(this,arguments)}),get children(){return e("global.".concat(s?"save":"add"))}})];var n}})}))}}}))}();
