!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,c=[],a=!0,o=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(c.push(r.value),!e||c.length!==e);a=!0);}catch(u){o=!0,i=u}finally{try{a||null==t.return||t.return()}finally{if(o)throw i}}return c}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.a5eb262b.js","./File-legacy.d1c67db9.js","./icon-legacy.29a469ab.js","./index-legacy.c0b041e9.js","./Layout-legacy.1a87907e.js","./useTitle-legacy.e3526895.js","./index-legacy.63000315.js","./FolderTree-legacy.cc1b0d2c.js","./index-legacy.ffe1e5c3.js"],(function(e){"use strict";var t,r,i,c,a,o;return{setters:[function(n){t=n.a,r=n.m,i=n.h,c=n.C,a=n.a1},function(n){o=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),u=n(r(!1),2),l=u[0],f=u[1];return i(o,{get children(){return i(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+a.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
