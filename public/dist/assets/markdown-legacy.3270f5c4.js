!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,o,u=[],i=!0,a=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(u.push(r.value),!t||u.length!==t);i=!0);}catch(c){a=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(a)throw o}}return u}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.8bc45451.js","./useUtil-legacy.985f5d90.js","./Layout-legacy.be667f91.js","./api-legacy.7195151a.js","./useT-legacy.af1772ea.js","./useTitle-legacy.d616479f.js","./index-legacy.6990d47d.js","./index-legacy.70fd78a6.js","./FolderTree-legacy.296d4dfa.js"],(function(t){"use strict";var e,r,o,u,i,a;return{setters:[function(n){e=n.f,r=n.a6,o=n.o,u=n.bH},function(n){i=n.d},function(n){a=n.i},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n(i(),1)[0];return e(r,{get loading(){return t.loading},get children(){return e(a,{get children(){var n;return function(n){return o.obj.name.endsWith(".md")?n:"```"+u(o.obj.name)+"\n"+n+"\n```"}(null===(n=t())||void 0===n?void 0:n.content)}})}})}))}}}))}();