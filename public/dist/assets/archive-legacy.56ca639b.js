!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(P){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new _(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}r.wrap=s;var h={};function d(){}function p(){}function g(){}var y={};l(y,a,(function(){return this}));var v=Object.getPrototypeOf,m=v&&v(v(L([])));m&&m!==n&&o.call(m,a)&&(y=m);var b=g.prototype=d.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,c,u){var l=f(e[i],e,a);if("throw"!==l.type){var s=l.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):r.resolve(h).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,u)}))}u(l.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function j(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function L(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:S}}function S(){return{value:void 0,done:!0}}return p.prototype=g,l(b,"constructor",g),l(g,"constructor",p),p.displayName=l(g,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},r.awrap=function(t){return{__await:t}},w(x.prototype),l(x.prototype,c,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),l(b,u,"Generator"),l(b,a,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=L,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:L(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void r(l)}c.done?e(u):Promise.resolve(u).then(n,o)}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,c=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){c=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(c)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}System.register(["./index-legacy.641ab668.js","./List-legacy.c64d2095.js","./index-legacy.d9626e70.js","./Password-legacy.9ae6b678.js","./helper-legacy.04c9feec.js","./icon-legacy.5ffb6d6c.js","./solid-contextmenu-legacy.8e4bcbe8.js","./index-legacy.040b3c62.js","./Layout-legacy.0e77f687.js","./useTitle-legacy.e2c618c6.js","./FolderTree-legacy.a5fd33fd.js","./index-legacy.e2763d8a.js","./index-legacy.afef678d.js"],(function(t){"use strict";var n,a,u,l,s,f,h,d,p,g,y,v,m,b,w,x,j,k,O,_,L,S,P,E,$,A,C,N,T,G,I,z,F,D,M,q,J,K,R,U,Y,B,H,Q,X,V,W,Z,tt,et,rt,nt;return{setters:[function(t){n=t.a,a=t.b,u=t.b0,l=t.dQ,s=t.dR,f=t.k,h=t.m,d=t.x,p=t.h,g=t.U,y=t.K,v=t.L,m=t.H,b=t.R,w=t.a0,x=t.a1,j=t.a3,k=t.S,O=t.a6,_=t.ak,L=t.ad,S=t.a7,P=t.J,E=t.di,$=t.aj,A=t.N,C=t.aE,N=t.ar,T=t.cl,G=t.cX,I=t.ai,z=t.bK,F=t.cr,D=t.aM,M=t.al,q=t.am,J=t.aD,K=t._,R=t.t,U=t.dS,Y=t.l,B=t.aL},function(t){H=t.L,Q=t.c},function(t){X=t.T,V=t.c},function(t){W=t.default},function(t){Z=t.a},function(t){tt=t.g},function(t){et=t.x,rt=t.w,nt=t.b},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var ot=function(t){window.open(t,"_blank")},it=function(t){var e=nt({id:2}).show,r=Z().isMouseSupported,n=function(){return Y.list_item_filename_overflow};return p(I.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){var o,i,a;return p($,(i={class:"list-item viselect-item"},(a={})[o="data-index"]=a[o]||{},a[o].get=function(){return t.index},c(i,"w","$full"),c(i,"p","$2"),c(i,"rounded","$lg"),c(i,"transition","all 0.3s"),"_hover",a._hover=a._hover||{},a._hover.get=function(){return{transform:"scale(1.01)",bgColor:A()}},"cursor",a.cursor=a.cursor||{},a.cursor.get=function(){return r()?"default":"pointer"},c(i,"on:click",(function(e){t.obj.is_dir?t.jumpCallback():t.url&&ot(t.url)})),c(i,"onContextMenu",(function(r){e(r,{props:t})})),"children",a.children=a.children||{},a.children.get=function(){return[p($,{class:"name-box",spacing:"$1",get w(){return Q[0].w},get children(){return[p(C,{class:"icon",boxSize:"$6",get color(){return N()},get as(){return tt(t.obj)},mr:"$1"}),p(O,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:"multi_line"===n()?"unset":"nowrap","overflow-x":"scrollable"===n()?"auto":"hidden",textOverflow:"ellipsis"===n()?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return t.obj.name},get children(){return t.obj.name}})]}}),p(O,{class:"size",get w(){return Q[1].w},get textAlign(){return Q[1].textAlign},get children(){return T(t.obj.size)}}),p(O,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return Q[2].w},get textAlign(){return Q[2].textAlign},get children(){return G(t.obj.modified)}})]},function(t,e){for(var r in e)(i=e[r]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,r,i);if(Object.getOwnPropertySymbols)for(var n=Object.getOwnPropertySymbols(e),o=0;o<n.length;o++){var i,a=n[o];(i=e[a]).configurable=i.enumerable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,a,i)}}(i,a),i))}})},at={extract:{icon:X,color:"$success9"},copy_link:{icon:V,color:"$info9"},download:{icon:B,color:"$primary9"}},ct=function(){var t=z().copy,e=F().colorMode;return p(rt,{id:2,animation:"scale",get theme(){return"dark"!==e()?"light":"dark"},style:"z-index: var(--hope-zIndices-popover)",get children(){return[p(et,{hidden:function(t){return t.props.obj.is_dir},onClick:function(t){var e=t.props;ot(e.url+"&attachment=true")},get children(){return p(ut,{name:"download"})}}),p(et,{hidden:function(t){return t.props.obj.is_dir},onClick:function(e){var r=e.props;t(r.url)},get children(){return p(ut,{name:"copy_link"})}}),p(et,{hidden:function(){var t=D.findIndex((function(t){return"decompress"===t}));return!M.can(q(),t)},onClick:function(t){var e=t.props;J.emit("extract",JSON.stringify({inner:e.innerPath,pass:e.pass}))},get children(){return p(ut,{name:"extract"})}})]}})},ut=function(t){var e=n();return p($,{spacing:"$2",get children(){return[p(C,{get p(){return at[t.name].p?"$1":void 0},get as(){return at[t.name].icon},boxSize:"$7",get color(){return at[t.name].color}}),p(O,{get children(){return e("home.toolbar.".concat(t.name))}})]}})};t("default",(function(){var t,c,$=n(),A=a().pathname,C=i(u(l),2),N=C[0],T=C[1],G=i(u(s),2),I=G[0],z=G[1],F=f((function(){return N()||I()})),D="",M="",q="",J=null,Y=i(h(""),2),B=Y[0],Q=Y[1],X=i(h(!1),2),V=X[0],Z=X[1],tt=i(h(!1),2),et=tt[0],rt=tt[1],nt=i(h(""),2),ot=nt[0],at=nt[1],ut=i(h([]),2),lt=ut[0],st=ut[1],ft=i(h(),2),ht=ft[0],dt=ft[1],pt=i(h(!1),2),gt=pt[0],yt=pt[1],vt=(t=!1,c=[],{acquire:function(){return new Promise((function(e){t?c.push(e):(t=!0,e())}))},release:function(){c.length>0?c.shift()():t=!1}}),mt=function t(e){var r={};return e.forEach((function(e){r[e.name]=o(o({},e),{},{children:e.children?t(e.children):null})})),r},bt=function(t){return 200!==t.code&&(202===t.code?R((function(){""!==D&&Z(!0),rt(!0),Q("")})):Q(t.message),!0)},wt=function(){var t,n=(t=e().mark((function t(r){var n,o,i,a,c;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,vt.acquire();case 2:if(!et()||""!==D){t.next=5;break}return vt.release(),t.abrupt("return",[]);case 5:if(""!==M){t.next=20;break}return t.next=8,T(A(),K(),D);case 8:if(n=t.sent,!bt(n)){t.next=12;break}return vt.release(),t.abrupt("return",[]);case 12:if(null!==n.data.content&&(J=mt(n.data.content)),M=n.data.raw_url,q=n.data.sign,at(n.data.comment),!n.data.encrypted||""!==D){t.next=20;break}return R((function(){rt(!0),Q("")})),vt.release(),t.abrupt("return",[]);case 20:if(null!==J){t.next=28;break}return t.next=23,z(A(),K(),D,"/");case 23:if(o=t.sent,!bt(o)){t.next=27;break}return vt.release(),t.abrupt("return",[]);case 27:J=mt(o.data.content);case 28:i=J,a=0;case 30:if(!(a<r.length)){t.next=43;break}if(null!==i[r[a]].children){t.next=39;break}return t.next=34,z(A(),K(),D,"/"+r.slice(0,a+1).join("/"));case 34:if(c=t.sent,!bt(c)){t.next=38;break}return vt.release(),t.abrupt("return",[]);case 38:i[r[a]].children=mt(c.data.content);case 39:i=i[r[a]].children;case 40:a++,t.next=30;break;case 43:return R((function(){rt(!1),Z(!1),Q("")})),vt.release(),t.abrupt("return",Object.values(i));case 46:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))});return function(t){return n.apply(this,arguments)}}(),xt=i(h([]),2),jt=xt[0],kt=xt[1];d((function(){wt(lt()).then((function(t){return kt(t)}))}));var Ot=function(){wt(lt()).then((function(t){return kt(t)}))};Ot();var _t=function(t,e){R((function(){dt(t),void 0!==e&&yt(e)}))};return p(S,{spacing:"$2",w:"$full",get children(){return[p(g,{pl:"$2",pr:"$2",w:"$full",get children(){return[p(y,{get children(){return p(v,{get currentPage(){return 0===lt().length},"on:click":function(){return st([])},children:"."})}}),p(m,{get each(){return lt()},children:function(t,e){return p(y,{get children(){return[p(b,{}),p(v,{get currentPage(){return lt().length===e()+1},"on:click":function(){return st(lt().slice(0,e()+1))},children:t})]}})}})]}}),p(w,{get children(){return[p(x,{get when(){return""!==B()},get children(){return p(j,{get msg(){return B()},disableColor:!0})}}),p(x,{get when(){return et()},get children(){return p(W,{get title(){return $("home.toolbar.archive.input_password")},password:function(){return D},setPassword:function(t){return D=t},enterCallback:function(){return Ot()},get children(){return p(k,{get when(){return V()},get children(){return p(O,{color:"$danger9",get children(){return $("home.toolbar.archive.incorrect_password")}})}})}})}}),p(x,{get when(){return _((function(){return!et()}),!0)()&&""===B()},get children(){return p(L,{get loading(){return F()},get children(){return p(S,{class:"list",w:"$full",spacing:"$1",get children(){return[p(H,{sortCallback:_t,disableCheckbox:!0}),p(m,{get each(){return t=jt(),ht()&&(t=t.sort((function(t,e){return(gt()?-1:1)*U(t[ht()],e[ht()])}))),t;var t},children:function(t,e){var r=void 0,n=(lt().length>0?"/"+lt().join("/"):"")+"/"+t.name;return t.is_dir||(r=M+"?inner="+P(n),""!==D&&(r=r+"&pass="+P(D)),""!==q&&(r=r+"&sign="+q)),p(it,{obj:t,get index(){return e()},jumpCallback:function(){return st(lt().concat(t.name))},innerPath:n,url:r,pass:D})}}),p(ct,{})]}})}})}})]}}),p(k,{get when(){return""!==ot()},get children(){return[p(E,{}),p(O,{w:"$full",pl:"$1",pr:"$1",get children(){return ot()}})]}})]}})}))}}}))}();
