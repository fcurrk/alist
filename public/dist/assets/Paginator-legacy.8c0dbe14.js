!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var t,u,i=[],c=!0,o=!1;try{for(n=n.call(e);!(c=(t=n.next()).done)&&(i.push(t.value),!r||i.length!==r);c=!0);}catch(l){o=!0,u=l}finally{try{c||null==n.return||n.return()}finally{if(o)throw u}}return i}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}System.register(["./index-legacy.53d0bb04.js","./index-legacy.7457d765.js"],(function(r){"use strict";var n,t,u,i,c,o,l,a,f,g,h,d;return{setters:[function(e){n=e.D,t=e.c1,u=e.j,i=e.e,c=e.ad,o=e.S,l=e.B,a=e.am,f=e.al,g=e.E},function(e){h=e.m,d=e.n}],execute:function(){r("P",(function(r){var m,s=n({maxShowPage:4,defaultPageSize:30,defaultCurrent:1,hideOnSinglePage:!0},r),S=e(t({pageSize:s.defaultPageSize,current:s.defaultCurrent}),2),y=S[0],p=S[1];null===(m=s.setResetCallback)||void 0===m||m.call(s,(function(){p("current",s.defaultCurrent)}));var v=u((function(){return Math.ceil(s.total/y.pageSize)})),b=u((function(){var e=y.current,r=Math.max(2,e-Math.floor(s.maxShowPage/2));return Array.from({length:e-r},(function(e,n){return r+n}))})),x=u((function(){var e=y.current,r=Math.min(v()-1,e+Math.floor(s.maxShowPage/2));return Array.from({length:r-e},(function(r,n){return e+1+n}))})),w={"@initial":"sm","@md":"md"},C=function(e){var r;p("current",e),null===(r=s.onChange)||void 0===r||r.call(s,e)};return i(o,{get when(){return!s.hideOnSinglePage||v()>1},get children(){return i(c,{spacing:"$1",get children(){return[i(o,{get when(){return 1!==y.current},get children(){return[i(l,{size:w,get colorScheme(){return a()},onClick:function(){C(1)},px:"$3",children:"1"}),i(f,{size:w,get icon(){return i(h,{})},"aria-label":"Previous",get colorScheme(){return a()},onClick:function(){C(y.current-1)},w:"2rem !important"})]}}),i(g,{get each(){return b()},children:function(e){return i(l,{size:w,get colorScheme(){return a()},onClick:function(){C(e)},px:e>10?"$2_5":"$3",children:e})}}),i(l,{size:w,get colorScheme(){return s.colorScheme},variant:"solid",get px(){return y.current>10?"$2_5":"$3"},get children(){return y.current}}),i(g,{get each(){return x()},children:function(e){return i(l,{size:w,get colorScheme(){return a()},onClick:function(){C(e)},px:e>10?"$2_5":"$3",children:e})}}),i(o,{get when(){return y.current!==v()},get children(){return[i(f,{size:w,get icon(){return i(d,{})},"aria-label":"Next",get colorScheme(){return a()},onClick:function(){C(y.current+1)},w:"2rem !important"}),i(l,{size:w,get colorScheme(){return a()},onClick:function(){C(v())},get px(){return v()>10?"$2_5":"$3"},get children(){return v()}})]}})]}})}})}))}}}))}();
