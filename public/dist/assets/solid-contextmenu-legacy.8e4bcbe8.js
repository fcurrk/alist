!function(){function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||o(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,i,o=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);u=!0);}catch(c){a=!0,i=c}finally{try{u||null==n.return||n.return()}finally{if(a)throw i}}return o}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(e,t):void 0}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.641ab668.js"],(function(o){"use strict";var u,a,c,l,s,d,f,v,p,m,h,y,b,g,_,w,x,$,A,C;return{setters:[function(e){u=e.cR,a=e.cS,c=e.m,l=e.G,s=e.e,d=e.k,f=e.h,v=e.bJ,p=e.S,m=e.cT,h=e.cU,y=e.cV,b=e.aR,g=e.j,_=e.q,w=e.i,x=e.bP,$=e.bL,A=e.ao,C=e.t}],execute:function(){var L=function(e){return e.menu="solid-contextmenu",e.submenu="solid-contextmenu solid-contextmenu__submenu",e.submenuArrow="solid-contextmenu__submenu-arrow",e.submenuOpen="solid-contextmenu__submenu--is-open",e.separator="solid-contextmenu__separator",e.item="solid-contextmenu__item",e.itemDisabled="solid-contextmenu__item--disabled",e.itemContent="solid-contextmenu__item__content",e.theme="solid-contextmenu__theme--",e.animationWillEnter="solid-contextmenu__will-enter--",e.animationWillLeave="solid-contextmenu__will-leave--",e}(L||{});function E(e){requestAnimationFrame((function(){requestAnimationFrame(e)}))}var O=function(e){var t,n=!0,o=i(c(),2),u=o[0],a=o[1],s=i(c(),2),d=s[0],f=s[1],v=g((function(){return e.children})),p=e.name||"s",m=e=l({name:p,enterActiveClass:p+"-enter-active",enterClass:p+"-enter",enterToClass:p+"-enter-to",exitActiveClass:p+"-exit-active",exitClass:p+"-exit",exitToClass:p+"-exit-to"},e),h=m.onBeforeEnter,y=m.onEnter,b=m.onAfterEnter,x=m.onBeforeExit,$=m.onExit,A=m.onAfterExit;function L(t,i){if(!n||e.appear){var o,c,l=function n(o){var c,l;t&&(!o||o.target===t)&&(t.removeEventListener("transitionend",n),t.removeEventListener("animationend",n),(c=t.classList).remove.apply(c,r(v)),(l=t.classList).remove.apply(l,r(p)),C((function(){u()!==t&&a(t),d()===t&&f(void 0)})),b&&b(t),"inout"===e.mode&&O(t,i))},s=e.enterClass.split(" "),v=e.enterActiveClass.split(" "),p=e.enterToClass.split(" ");h&&h(t),(o=t.classList).add.apply(o,r(s)),(c=t.classList).add.apply(c,r(v)),E((function(){var e,n;(e=t.classList).remove.apply(e,r(s)),(n=t.classList).add.apply(n,r(p)),y&&y(t,(function(){return l()})),(!y||y.length<2)&&(t.addEventListener("transitionend",l),t.addEventListener("animationend",l))}))}i&&!e.mode?f(t):a(t)}function O(t,n){var i,o,c=e.exitClass.split(" "),l=e.exitActiveClass.split(" "),s=e.exitToClass.split(" ");if(!n.parentNode)return d();function d(i){var o,c;(!i||i.target===n)&&(n.removeEventListener("transitionend",d),n.removeEventListener("animationend",d),(o=n.classList).remove.apply(o,r(l)),(c=n.classList).remove.apply(c,r(s)),u()===n&&a(void 0),A&&A(n),"outin"===e.mode&&L(t,n))}x&&x(n),(i=n.classList).add.apply(i,r(c)),(o=n.classList).add.apply(o,r(l)),E((function(){var e,t;(e=n.classList).remove.apply(e,r(c)),(t=n.classList).add.apply(t,r(s))})),$&&$(n,(function(){return d()})),(!$||$.length<2)&&(n.addEventListener("transitionend",d),n.addEventListener("animationend",d))}return _((function(r){for(t=v();"function"==typeof t;)t=t();return w((function(){return t&&t!==r&&("outin"!==e.mode?L(t,r):n&&a(t)),r&&r!==t&&"inout"!==e.mode&&O(t,r),n=!1,t}))})),[u,d]};var j,S={all:j=j||new Map,on:function(e,t){var n=j.get(e);n?n.push(t):j.set(e,[t])},off:function(e,t){var n=j.get(e);n&&(t?n.splice(n.indexOf(t)>>>0,1):j.set(e,[]))},emit:function(e,t){var n=j.get(e);n&&n.slice().map((function(e){e(t)})),(n=j.get("*"))&&n.slice().map((function(n){n(e,t)}))}},P=x(),k=function(){return $(P)};function D(e){var t,r,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==n(e))if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=D(e[t]))&&(i&&(i+=" "),i+=r);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function T(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=D(e))&&(r&&(r+=" "),r+=t);return r}var I=A("<div></div>"),N=function(e,t,n){return e+t<=n?e:e<t?n-t:e-t};o("w",(function(e){var n,r=i(a(e,["id","theme","animation","onShown","onHidden"]),2),o=r[0],u=r[1],b=i(c(!1),2),g=b[0],_=b[1],w=i(c({x:0,y:0}),2),x=w[0],$=w[1],A=i(c(),2),C=A[0],E=A[1];S.on("show",(function(e){var t;e.id===o.id&&(e.event.preventDefault(),E(e.props),_(!0),$(null!==(t=e.position)&&void 0!==t?t:function(e,t){var n={width:window.innerWidth,height:window.innerHeight};return{x:N(e.x,t.width,n.width),y:N(e.y,t.height,n.height)}}({x:e.event.clientX,y:e.event.clientY},{width:n.offsetWidth,height:n.offsetHeight})))}));var j=function(){S.emit("hide",o.id),_(!1)},k=l({shown:g,animation:"scale",hide:j,props:C},o);S.on("hideAll",(function(){j()})),s((function(){S.off("show"),S.off("hideAll")}));var D=d((function(){var e="";return o.animation&&(e="solid-contextmenu-".concat(o.animation)),console.log(e),e})),W=d((function(){return{enterActiveClass:D()+"-enter-active",exitActiveClass:D()+"-exit-active"}}));return f(P.Provider,{value:k,get children(){return f(v,{get children(){return f(O,l(W,{get children(){return f(p,{get when(){return g()},get children(){var e=I.cloneNode(!0);return"function"==typeof n?n(e):n=e,function(e,t){var n=function(n){var r;return!e.contains(n.target)&&(null===(r=t())||void 0===r?void 0:r())};document.body.addEventListener("click",n),s((function(){return document.body.removeEventListener("click",n)}))}(e,(function(){return j()})),m(e,u,!1,!1),h((function(n){var r=T(L.menu,u.class,t({},"".concat(L.theme).concat(o.theme),o.theme)),i=x().x+"px",a=x().y+"px";return r!==n._v$&&y(e,n._v$=r),i!==n._v$2&&e.style.setProperty("left",n._v$2=i),a!==n._v$3&&e.style.setProperty("top",n._v$3=a),n}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}})}}))}})}})}));function W(e,t){return function(e){return"function"==typeof e}(e)?e(t):e}var B=A("<div><div></div></div>");o("x",(function(n){var r=i(a(n,["hidden","disabled","onClick","data","children"]),2),o=r[0],u=r[1],c=l({hidden:!1,disabled:!1},o),s=k(),v=s.props,g=s.hide,_=d((function(){return{props:v(),data:n.data}})),w=d((function(){return W(c.disabled,_())})),x=d((function(){return W(c.hidden,_())})),$=function(r){var i;w()||(null!==(i=n.onClick)&&void 0!==i&&i.call(n,function(n){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?e(Object(i),!0).forEach((function(e){t(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}({event:r},_())),g())};return f(p,{get when(){return!x()},get children(){var e=B.cloneNode(!0),n=e.firstChild;return e.$$click=$,m(e,u,!1,!0),b(n,(function(){return o.children})),h((function(r){var i=T(L.item,t({},L.itemDisabled,w())),o=L.itemContent;return i!==r._v$&&y(e,r._v$=i),o!==r._v$2&&y(n,r._v$2=o),r}),{_v$:void 0,_v$2:void 0}),e}})}));u(["click"]);var H=A("<div></div>"),R=A("<div><div><span></span></div></div>");o("C",(function(e){var n,r,o=i(a(e,["arrow","children","disabled","hidden","label","class"]),2),u=o[0],v=o[1],g=l({arrow:"▶️",disabled:!1,hidden:!1},u),_=k(),w=_.props,x=_.id,$=d((function(){return{props:w()}})),A=d((function(){return W(g.disabled,$())})),C=d((function(){return W(g.hidden,$())})),E=i(c({x:0,y:0}),2),O=E[0],j=E[1],P=i(c(!1),2),D=P[0],I=P[1],N=function(){I(!0),function(){var e=n.getBoundingClientRect(),t=r.getBoundingClientRect(),i=window.innerWidth,o=window.innerHeight,u=e.right;u+t.width>i&&(u=e.left-t.width>0?e.left-t.width:i-t.width);var a=e.top;a+t.height>o&&(a=e.bottom-t.height>0?e.bottom-t.height:o-t.height),j({x:u,y:a}),console.log(O())}()};return S.on("hide",(function(e){e===x&&I(!1)})),s((function(){S.off("hide")})),f(p,{get when(){return!C()},get children(){var e=R.cloneNode(!0),i=e.firstChild,o=i.firstChild;e.$$click=function(){return D()?I(!1):N()},e.addEventListener("mouseleave",(function(){return I(!1)})),e.addEventListener("mouseenter",(function(){return N()})),m(e,v,!1,!0);return"function"==typeof n?n(i):n=i,b(i,(function(){return g.label}),o),b(o,(function(){return g.arrow})),b(e,f(p,{get when(){return D()},get children(){var e=H.cloneNode(!0);return"function"==typeof r?r(e):r=e,b(e,(function(){return g.children})),h((function(t){var n=L.submenu,r=O().x+"px",i=O().y+"px";return n!==t._v$&&y(e,t._v$=n),r!==t._v$2&&e.style.setProperty("left",t._v$2=r),i!==t._v$3&&e.style.setProperty("top",t._v$3=i),t}),{_v$:void 0,_v$2:void 0,_v$3:void 0}),e}}),null),h((function(n){var r=T(L.item,u.class,t({},L.itemDisabled,A())),a=L.itemContent,c=L.submenuArrow;return r!==n._v$4&&y(e,n._v$4=r),a!==n._v$5&&y(i,n._v$5=a),c!==n._v$6&&y(o,n._v$6=c),n}),{_v$4:void 0,_v$5:void 0,_v$6:void 0}),e}})}));u(["click"]);o("b",(function(e){return{show:function(t,n){S.emit("show",{id:(null==n?void 0:n.id)||(null==e?void 0:e.id),props:(null==n?void 0:n.props)||(null==e?void 0:e.props),event:t,position:null==n?void 0:n.position})},hideAll:function(){S.emit("hideAll")}}}))}}}))}();
