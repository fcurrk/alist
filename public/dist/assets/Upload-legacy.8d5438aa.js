!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){for(var r in t){(a=t[r]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,r,a)}if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(t),o=0;o<n.length;o++){var a,i=n[o];(a=t[i]).configurable=a.enumerable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,i,a)}return e}function r(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||u(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */o=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(L){s=function(e,t,r){return e[t]=r}}function l(e,t,r,n){var o=t&&t.prototype instanceof h?t:h,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var u=k(i,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=f(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,i),a}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(L){return{type:"throw",arg:L}}}t.wrap=l;var p={};function h(){}function d(){}function v(){}var y={};s(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(E([])));m&&m!==r&&n.call(m,i)&&(y=m);var b=v.prototype=h.prototype=Object.create(y);function w(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function x(t,r){function o(a,i,u,c){var s=f(t[a],t,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"==e(p)&&n.call(p,"__await")?r.resolve(p.__await).then((function(e){o("next",e,u,c)}),(function(e){o("throw",e,u,c)})):r.resolve(p).then((function(e){l.value=e,u(l)}),(function(e){return o("throw",e,u,c)}))}c(s.arg)}var a;this._invoke=function(e,t){function n(){return new r((function(r,n){o(e,t,r,n)}))}return a=a?a.then(n,n):n()}}function k(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method))return p;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var n=f(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,p;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,p):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,p)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function _(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function E(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,s(b,"constructor",v),s(v,"constructor",d),d.displayName=s(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},t.awrap=function(e){return{__await:e}},w(x.prototype),s(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new x(l(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(b),s(b,c,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,p):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),p},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),_(r),p}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,a=[],i=!0,u=!1;try{for(r=r.call(e);!(i=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw o}}return a}(e,t)||u(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=u(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}function u(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function s(e,t,r,n,o,a,i){try{var u=e[a](i),c=u.value}catch(s){return void r(s)}u.done?t(c):Promise.resolve(c).then(n,o)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function i(e){s(a,n,o,i,u,"next",e)}function u(e){s(a,n,o,i,u,"throw",e)}i(void 0)}))}}function f(e){var t,r,n,o=2;for("undefined"!=typeof Symbol&&(r=Symbol.asyncIterator,n=Symbol.iterator);o--;){if(r&&null!=(t=e[r]))return t.call(e);if(n&&null!=(t=e[n]))return new p(t.call(e));r="@@asyncIterator",n="@@iterator"}throw new TypeError("Object is not async iterable")}function p(e){function t(e){if(Object(e)!==e)return Promise.reject(new TypeError(e+" is not an object."));var t=e.done;return Promise.resolve(e.value).then((function(e){return{value:e,done:t}}))}return p=function(e){this.s=e,this.n=e.next},p.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(e){var r=this.s.return;return void 0===r?Promise.resolve({value:e,done:!0}):t(r.apply(this.s,arguments))},throw:function(e){var r=this.s.return;return void 0===r?Promise.reject(e):t(r.apply(this.s,arguments))}},new p(e)}function h(e){return new y(e)}function d(e){return function(){return new v(e.apply(this,arguments))}}function v(e){var t,r;function n(t,r){try{var a=e[t](r),i=a.value,u=i instanceof y;Promise.resolve(u?i.wrapped:i).then((function(e){u?n("return"===t?"return":"next",e):o(a.done?"return":"normal",e)}),(function(e){n("throw",e)}))}catch(c){o("throw",c)}}function o(e,o){switch(e){case"return":t.resolve({value:o,done:!0});break;case"throw":t.reject(o);break;default:t.resolve({value:o,done:!1})}(t=t.next)?n(t.key,t.arg):r=null}this._invoke=function(e,o){return new Promise((function(a,i){var u={key:e,arg:o,resolve:a,reject:i,next:null};r?r=r.next=u:(t=r=u,n(e,o))}))},"function"!=typeof e.return&&(this.return=void 0)}function y(e){this.wrapped=e}v.prototype["function"==typeof Symbol&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},v.prototype.next=function(e){return this._invoke("next",e)},v.prototype.throw=function(e){return this._invoke("throw",e)},v.prototype.return=function(e){return this._invoke("return",e)},System.register(["./index-legacy.65a6b1ae.js","./useT-legacy.78fa4c3a.js","./index-legacy.d946250a.js"],(function(e){"use strict";var u,c,s,p,v,y,g,m,b,w,x,k,S,_,j,E,P,L,O,$,A,I,C,T,D,F,G,N,z;return{setters:[function(e){u=e.b7,c=e.o,s=e.u,p=e.q,v=e.bq,y=e.f,g=e.x,m=e.a8,b=e.B,w=e.E,x=e.I,k=e.a3,S=e.ai,_=e.n,j=e.ag,E=e.a5,P=e.br,L=e.ah,O=e.bp,$=e.a9,A=e.bs,I=e.aa,C=e.bt,T=e.bu,D=e.bv,F=e.p},function(e){G=e.u},function(e){N=e.a,z=e.b}],execute:function(){function R(e,t,r){return U.apply(this,arguments)}function U(){return U=d(o().mark((function e(t,r,n){var u,c,s,f,p,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=function(){return(s=l(o().mark((function e(){var t,r,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.race(u);case 2:return t=e.sent,r=a(t,2),n=r[0],i=r[1],u.delete(n),e.abrupt("return",i);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)},c=function(){return s.apply(this,arguments)},u=new Set,f=i(r),e.prev=4,d=o().mark((function e(){var a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=p.value,i=l(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n(a,r);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))().then((function(e){return[i,e]})),u.add(i),!(u.size>=t)){e.next=8;break}return e.next=6,h(c());case 6:return e.next=8,e.sent;case 8:case"end":return e.stop()}}),e)})),f.s();case 7:if((p=f.n()).done){e.next=11;break}return e.delegateYield(d(),"t0",9);case 9:e.next=7;break;case 11:e.next=16;break;case 13:e.prev=13,e.t1=e.catch(4),f.e(e.t1);case 16:return e.prev=16,f.f(),e.finish(16);case 19:if(!u.size){e.next=26;break}return e.next=22,h(c());case 22:return e.next=24,e.sent;case 24:e.next=19;break;case 26:case"end":return e.stop()}}),e,null,[[4,13,16,19]])}))),U.apply(this,arguments)}var B={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},Y=function(){var e=l(o().mark((function e(t){var r,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=[],n=function(){var e=l(o().mark((function e(t,a){var i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new Promise((function(e){var i=function(t){console.error(t),e({})};if(t.isFile)t.file((function(t){var n=new File([t],a+t.name,{type:t.type});r.push(n),console.log(n),e({})}),i);else if(t.isDirectory){t.createReader().readEntries(function(){var r=l(o().mark((function r(i){var u;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:u=0;case 1:if(!(u<i.length)){r.next=7;break}return r.next=4,n(i[u],a+t.name+"/");case 4:u++,r.next=1;break;case 7:e({});case 8:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),i)}})),e.next=3,i;case 3:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),e.next=4,n(t,"");case 4:return e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){return{name:e.name,path:""===e.webkitRelativePath?e.name:e.webkitRelativePath,size:e.size,progress:0,speed:0,status:"pending"}},M=function(){var e=l(o().mark((function e(t,r,n){var a,i,c,s,l,f=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>3&&void 0!==f[3]&&f[3],i=(new Date).valueOf(),c=0,(s=new FormData).append("file",r),e.next=7,u.put("/fs/form",s,{headers:{"File-Path":encodeURIComponent(t),"As-Task":a,"Content-Type":"multipart/form-data"},onUploadProgress:function(e){if(e.lengthComputable){var t=e.loaded/e.total*100|0;n("progress",t);var r=(new Date).valueOf(),o=(r-i)/1e3;if(o>1){var a=(e.loaded-c)/o,u=(e.total-e.loaded)/a;n("speed",a),console.log(u),i=r,c=e.loaded}100===t&&n("status","backending")}}});case 7:if(200!==(l=e.sent).code){e.next=12;break}return e.abrupt("return");case 12:return e.abrupt("return",new Error(l.message));case 13:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),H=function(){var e=l(o().mark((function e(t,r,n){var a,i,c,s,l=arguments;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>3&&void 0!==l[3]&&l[3],i=(new Date).valueOf(),c=0,e.t0=u,e.next=6,r.arrayBuffer();case 6:return e.t1=e.sent,e.t2={headers:{"File-Path":encodeURIComponent(t),"As-Task":a,"Content-Type":r.type||"application/octet-stream"},onUploadProgress:function(e){if(e.lengthComputable){var t=e.loaded/e.total*100|0;n("progress",t);var r=(new Date).valueOf(),o=(r-i)/1e3;if(o>1){var a=(e.loaded-c)/o,u=(e.total-e.loaded)/a;n("speed",a),console.log(u),i=r,c=e.loaded}100===t&&n("status","backending")}}},e.next=10,e.t0.put.call(e.t0,"/fs/put",e.t1,e.t2);case 10:if(200!==(s=e.sent).code){e.next=15;break}return e.abrupt("return");case 15:return e.abrupt("return",new Error(s.message));case 16:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}(),J=[{name:"Stream",upload:H,provider:/.*/},{name:"Form",upload:M,provider:/.*/}],K=function(e){var t=G();return y(k,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:"1px solid ".concat(S())}},get children(){return[y($,{css:{wordBreak:"break-all"},get children(){return e.path}}),y(m,{spacing:"$2",get children(){return[y(A,{get colorScheme(){return B[e.status]},get children(){return t("home.upload.".concat(e.status))}}),y($,{get children(){return[I((function(){return C(e.speed)})),"/s"]}})]}}),y(T,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return e.progress},size:"sm",get children(){return y(D,{get color(){return S()},rounded:"$md"})}}),y($,{color:"$danger10",get children(){return e.msg}})]}})};e("default",(function(){var e,u,h=G(),d=s().pathname,$=a(p(!1),2),A=$[0],I=$[1],C=a(p(!1),2),T=C[0],D=C[1],U=a(p(!1),2),B=U[0],M=U[1],H=a(v({uploads:[]}),2),Q=H[0],V=H[1],W=function(){var e=l(o().mark((function e(t){var r,a,u,c,s,l,p,h,d;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.length){e.next=2;break}return e.abrupt("return");case 2:D(!0),r=i(t);try{for(u=function(){var e=a.value,t=q(e);V("uploads",(function(e){return[].concat(n(e),[t])}))},r.s();!(a=r.n()).done;)u()}catch(o){r.e(o)}finally{r.f()}c=!1,s=!1,e.prev=7,p=f(R(3,t,ne));case 9:return e.next=11,p.next();case 11:if(!(c=!(h=e.sent).done)){e.next=17;break}d=h.value,console.log(d);case 14:c=!1,e.next=9;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e.catch(7),s=!0,l=e.t0;case 23:if(e.prev=23,e.prev=24,!c||null==p.return){e.next=28;break}return e.next=28,p.return();case 28:if(e.prev=28,!s){e.next=31;break}throw l;case 31:return e.finish(28);case 32:return e.finish(23);case 33:case"end":return e.stop()}}),e,null,[[7,19,23,33],[24,,28,32]])})));return function(t){return e.apply(this,arguments)}}(),X=function(e,t,r){V("uploads",(function(t){return t.path===e}),t,r)},Z=J.filter((function(e){return e.provider.test(c.provider)})),ee=a(p(Z[0]),2),te=ee[0],re=ee[1],ne=function(){var e=l(o().mark((function e(t){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=""===t.webkitRelativePath?t.name:t.webkitRelativePath,X(r,"status","uploading"),n=F(d(),r),(new Date).valueOf(),e.prev=4,e.next=7,te().upload(n,t,(function(e,t){X(r,e,t)}),B());case 7:(a=e.sent)?(X(r,"status","error"),X(r,"msg",a.message)):(X(r,"status","success"),X(r,"progress",100)),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(4),console.error(e.t0),X(r,"status","error"),X(r,"msg",e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(t){return e.apply(this,arguments)}}();return y(k,{w:"$full",pb:"$2",spacing:"$2",get children(){return y(g,{get when(){return!T()},get fallback(){return[y(m,{spacing:"$2",get children(){return[y(b,{colorScheme:"accent",onClick:function(){V("uploads",(function(e){return e.filter((function(e){var t=e.status;return!["success","error"].includes(t)}))})),console.log(Q.uploads)},get children(){return h("home.upload.clear_done")}}),y(g,{get when(){return Q.uploads.every((function(e){var t=e.status;return["success","error"].includes(t)}))},get children(){return y(b,{onClick:function(){D(!1)},get children(){return h("home.upload.back")}})}})]}}),y(w,{get each(){return Q.uploads},children:function(e){return y(K,e)}})]},get children(){return[y(x,{type:"file",multiple:!0,ref:function(t){"function"==typeof e?e(t):e=t},display:"none",onChange:function(e){var t;W(Array.from(null!==(t=e.target.files)&&void 0!==t?t:[]))}}),y(x,{type:"file",multiple:!0,webkitdirectory:!0,ref:function(e){"function"==typeof u?u(e):u=e},display:"none",onChange:function(e){var t;W(Array.from(null!==(t=e.target.files)&&void 0!==t?t:[]))}}),y(k,{w:"$full",justifyContent:"center",get border(){return"2px dashed ".concat(A()?S():"$neutral8")},rounded:"$lg",onDragOver:function(e){e.preventDefault(),I(!0)},onDragLeave:function(){I(!1)},onDrop:(a=l(o().mark((function e(t){var r,a,i,u,c,s,l,f,p,d,v,y;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),t.stopPropagation(),I(!1),c=[],s=Array.from(null!==(r=null===(a=t.dataTransfer)||void 0===a?void 0:a.items)&&void 0!==r?r:[]),l=Array.from(null!==(i=null===(u=t.dataTransfer)||void 0===u?void 0:u.files)&&void 0!==i?i:[]),f=0,p=s.length,d=0;case 9:if(!(d<p)){e.next=33;break}if(!(f>0)){e.next=13;break}return _.warning(h("home.upload.only_files_or_one_folder")),e.abrupt("return");case 13:if(v=s[d],y=v.webkitGetAsEntry(),console.log(y),null==y||!y.isFile){e.next=20;break}c.push(l[d]),e.next=30;break;case 20:if(null==y||!y.isDirectory){e.next=30;break}return e.t0=c.push,e.t1=c,e.t2=n,e.next=26,Y(y);case 26:e.t3=e.sent,e.t4=(0,e.t2)(e.t3),e.t0.apply.call(e.t0,e.t1,e.t4),f++;case 30:d++,e.next=9;break;case 33:if(!(f>0&&p>1)){e.next=36;break}return _.warning(h("home.upload.only_files_or_one_folder")),e.abrupt("return");case 36:0===c.length&&_.warning(h("home.upload.no_files_drag")),W(c);case 38:case"end":return e.stop()}}),e)}))),function(e){return a.apply(this,arguments)}),spacing:"$4",h:"$56",get children(){return y(g,{get when(){return!A()},get fallback(){return y(j,{get children(){return h("home.upload.release")}})},get children(){return[y(j,{get children(){return h("home.upload.upload-tips")}}),y(E,{w:"30%",get children(){return y(P,{get value(){return te().name},onChange:function(e){re(Z.find((function(t){return t.name===e})))},get options(){return Z.map((function(e){return{label:e.name,value:e.name}}))}})}}),y(m,{spacing:"$4",get children(){var n,o,a,i,c,s;return[y(L,(o={compact:!0,size:"xl"},n="aria-label",a={},a[n]=a[n]||{},a[n].get=function(){return h("home.upload.upload_folder")},r(o,"colorScheme","accent"),"icon",a.icon=a.icon||{},a.icon.get=function(){return y(N,{})},r(o,"onClick",(function(){u.click()})),t(o,a),o)),y(L,(c={compact:!0,size:"xl"},i="aria-label",s={},s[i]=s[i]||{},s[i].get=function(){return h("home.upload.upload_files")},"icon",s.icon=s.icon||{},s.icon.get=function(){return y(z,{})},r(c,"onClick",(function(){e.click()})),t(c,s),c))]}}),y(O,{get checked(){return B()},onChange:function(){M(!B())},get children(){return h("home.upload.add_as_task")}})]}})}})];var a}})}})}))}}}))}();
