!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,a,i=[],c=!0,o=!1;try{for(e=e.call(n);!(c=(r=e.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(u){o=!0,a=u}finally{try{c||null==e.return||e.return()}finally{if(o)throw a}}return i}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.55d5a90d.js","./File-legacy.1dc4b926.js","./icon-legacy.03a44b17.js","./index-legacy.cb279090.js","./index-legacy.3fac63af.js","./Layout-legacy.20a21608.js","./index-legacy.ecc2695a.js","./FolderTree-legacy.b54e3416.js","./index-legacy.5ad49a86.js"],(function(t){"use strict";var e,r,a,i,c,o;return{setters:[function(n){e=n.a,r=n.k,a=n.e,i=n.B,c=n.a0},function(n){o=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),u=n(r(!1),2),l=u[0],f=u[1];return a(o,{get children(){return a(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+c.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();