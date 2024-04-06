!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=o(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,i=function(){};return{s:i,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||o(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */a=function(){return e};var e={},r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(L){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(L){return{type:"throw",arg:L}}}e.wrap=s;var h={};function y(){}function p(){}function d(){}var g={};l(g,i,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==r&&n.call(m,i)&&(g=m);var b=d.prototype=y.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function o(i,a,c,u){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&n.call(h,"__await")?r.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):r.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return o("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function n(){return new r((function(r,n){o(t,e,r,n)}))}return i=i?i.then(n,n):n()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:E}}function E(){return{value:void 0,done:!0}}return p.prototype=d,l(b,"constructor",d),l(d,"constructor",p),p.displayName=l(d,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},e.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,u,"Generator"),l(b,i,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=O,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function c(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,u,"next",t)}function u(t){c(i,n,o,a,u,"throw",t)}a(void 0)}))}}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function f(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./index-legacy.e5635fb8.js","./index-legacy.84506c3c.js","./index-legacy.10ef2d6c.js","./SettingItem-legacy.e1c6410d.js","./ResponsiveGrid-legacy.7c62b6d2.js","./FolderTree-legacy.100019b4.js","./index-legacy.7240403c.js","./index-legacy.e60e855c.js","./index-legacy.ef2aa0e6.js","./item_type-legacy.d1f1c701.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js"],(function(t){"use strict";var o,i,c,l,f,h,y,p,d,g,v,m,b,w,x,k,j,S,_,O,E,L,I,P,A,C,$;return{setters:[function(t){o=t.a,i=t.e,c=t.bx,l=t.bk,f=t.I,h=t.cv,y=t.B,p=t.E,d=t.D,g=t.a3,v=t.aU,m=t.b6,b=t.c2,w=t.cs,x=t.k,k=t.ct,j=t.S,S=t.b7,_=t.n,O=t.av,E=t.ad},function(t){L=t.o},function(t){I=t.G},function(t){P=t.I},function(t){A=t.R},function(t){C=t.a},function(t){$=t.c},function(){},function(){},function(){},function(){}],execute:function(){var N=function(t){var e=o();return i(h,{w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[i(c,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[i(l,{for:"path",display:"flex",alignItems:"center",get children(){return e("global.name")}}),i(f,{id:"name",get value(){return t.name},onChange:function(e){return t.onChange(s(s({},t),{},{name:e.currentTarget.value}))}})]}}),i(c,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[i(l,{for:"path",display:"flex",alignItems:"center",get children(){return e("metas.path")}}),i(C,{id:"path",get value(){return t.path},onChange:function(e){return t.onChange(s(s({},t),{},{path:e}))}})]}}),i(h,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return i(y,{colorScheme:"danger",onClick:(r=u(a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.onDelete();case 1:case"end":return e.stop()}}),e)}))),function(){return r.apply(this,arguments)}),get children(){return e("global.delete")}});var r}})]}})},D=function(t){var e=o();return console.log(t.buckets),i(g,{alignItems:"start",w:"$full",get children(){return[i(l,{display:"flex",alignItems:"center",get children(){return e("settings.s3_buckets")}}),i(y,{onClick:function(){t.setSettings((function(t){return"s3_buckets"===t.key}),"value",JSON.stringify([].concat(n(t.buckets),[{name:"",path:""}]))),console.log(t.buckets)},get children(){return e("global.add")}}),i(p,{get each(){return t.buckets},children:function(e){return i(N,d(e,{onChange:function(r){console.log(r),t.setSettings((function(t){return"s3_buckets"===t.key}),"value",JSON.stringify(t.buckets.map((function(t){return t.name===e.name?r:t}))))},onDelete:function(){t.setSettings((function(t){return"s3_buckets"===t.key}),"value",JSON.stringify(t.buckets.filter((function(t){return t.name!==e.name}))))}}))}})]}})},G=function(t){var e=s({},t.find((function(t){return"s3_buckets"===t.key})));return e.value?JSON.parse(e.value):[]};t("default",(function(){var t=o();L("manage.sidemenu.s3");var n=r(v((function(){return m.get("/admin/setting/list?group=".concat(I.S3))})),2),c=n[0],l=n[1],s=r(b([]),2),f=s[0],h=s[1],p=function(){var t=u(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:e=t.sent,S(e,h);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();p();var C=r(v((function(){return m.post("/admin/setting/save",w(f))})),2),N=C[0],T=C[1],F=r(x(!1),2),J=F[0],B=F[1];return i(g,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[i(A,{get children(){return[i(k,{each:f,children:function(e,r){return i(j,{get when(){return"s3_buckets"!=e().key},get children(){return i(P,d(e,{onChange:function(t){h((function(t){return e().key===t.key}),"value",t)},onDelete:(r=u(a().mark((function r(){var n;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return B(!0),r.next=3,m.post("/admin/setting/delete?key=".concat(e().key));case 3:n=r.sent,B(!1),S(n,(function(){_.success(t("global.delete_success")),p()}));case 6:case"end":return r.stop()}}),r)}))),function(){return r.apply(this,arguments)})}));var r}})}}),i(y,{onClick:function(){var t=$.lib.WordArray.random(15),e=$.lib.WordArray.random(30),r=$.enc.Base64.stringify(t).replace(/[\r\n]/g,""),n=$.enc.Base64.stringify(e).replace(/[\r\n]/g,"");h((function(t){return"s3_access_key_id"===t.key}),"value",r),h((function(t){return"s3_secret_access_key"===t.key}),"value",n)},get children(){return t("settings.s3_generate")}}),i(O,{get children(){return t("settings.s3_restart_to_apply")}}),i(D,{get buckets(){return G(f)},setSettings:h})]}}),i(E,{spacing:"$2",get children(){return[i(y,{colorScheme:"accent",onClick:p,get loading(){return c()||J()},get children(){return t("global.refresh")}}),i(y,{get loading(){return N()},onClick:(r=u(a().mark((function r(){var n,o,i,c,u,l;return a().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:n=G(f),o=new Set,i=e(n),r.prev=3,i.s();case 5:if((c=i.n()).done){r.next=16;break}if(""!==(u=c.value).name&&""!==u.path){r.next=10;break}return _.error(t("settings.s3_buckets_empty")),r.abrupt("return");case 10:if(!o.has(u.name)){r.next=13;break}return _.error(t("settings.s3_buckets_duplicate_name")),r.abrupt("return");case 13:o.add(u.name);case 14:r.next=5;break;case 16:r.next=21;break;case 18:r.prev=18,r.t0=r.catch(3),i.e(r.t0);case 21:return r.prev=21,i.f(),r.finish(21);case 24:return r.next=26,T();case 26:l=r.sent,S(l,(function(){return _.success(t("global.save_success"))}));case 28:case"end":return r.stop()}}),r,null,[[3,18,21,24]])}))),function(){return r.apply(this,arguments)}),get children(){return t("global.save")}})];var r}})]}})}))}}}))}();
