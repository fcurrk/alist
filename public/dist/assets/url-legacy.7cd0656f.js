!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,o=[],a=!0,c=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(u){c=!0,i=u}finally{try{a||null==e.return||e.return()}finally{if(c)throw i}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.12a0740a.js","./useUtil-legacy.2c4f35b9.js","./File-legacy.d609a8db.js","./api-legacy.6fe03540.js","./icon-legacy.7d9b0448.js","./index-legacy.637dca7a.js","./index-legacy.3c8dba81.js","./Layout-legacy.8c35c8a4.js","./index-legacy.a86307a4.js","./FolderTree-legacy.2a6303cd.js"],(function(t){"use strict";var e,r,i,o,a,c,u,l;return{setters:[function(n){e=n.h,r=n.u,i=n.e,o=n.x,a=n.a2},function(n){c=n.e,u=n.a},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n(c(),1)[0];function f(){var n,e=null===(n=t())||void 0===n?void 0:n.content,r=u(e).text;e&&window.open(r(),"_blank")}e((function(){f()}));var d=r();return i(a,{get loading(){return t.loading},get children(){return i(l,{get children(){return i(o,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();
