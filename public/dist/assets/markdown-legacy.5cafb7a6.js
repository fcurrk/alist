!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,c=!1;try{for(e=e.call(n);!(u=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==e.return||e.return()}finally{if(c)throw o}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.298559db.js","./useUtil-legacy.acdbcafc.js","./Layout-legacy.91cd0c06.js","./api-legacy.3070b8f7.js","./index-legacy.fb4fc00d.js","./index-legacy.dc04e5c6.js","./index-legacy.3b2bbfbf.js","./FolderTree-legacy.e0fc9a73.js"],(function(t){"use strict";var e,r,o,i,u,c;return{setters:[function(n){e=n.j,r=n.a6,o=n.o,i=n.bS},function(n){u=n.d},function(n){c=n.c},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n(u(),1)[0];return e(r,{get loading(){return t.loading},get children(){return e(c,{get children(){var n,e;return function(n){return o.obj.name.endsWith(".md")?n:"```"+i(o.obj.name)+"\n"+n+"\n```"}(null!==(n=null===(e=t())||void 0===e?void 0:e.content)&&void 0!==n?n:"")}})}})}))}}}))}();