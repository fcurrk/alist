!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,a=[],c=!0,o=!1;try{for(e=e.call(n);!(c=(r=e.next()).done)&&(a.push(r.value),!t||a.length!==t);c=!0);}catch(u){o=!0,i=u}finally{try{c||null==e.return||e.return()}finally{if(o)throw i}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.387fc4df.js","./File-legacy.2f29f9ba.js","./useUtil-legacy.5c16160c.js","./api-legacy.a4a10667.js","./icon-legacy.f53a3bb7.js","./index-legacy.095a5d38.js","./index-legacy.71413ea7.js","./Layout-legacy.b578094b.js","./index-legacy.57504f32.js","./FolderTree-legacy.7cf77137.js"],(function(t){"use strict";var e,r,i,a,c,o;return{setters:[function(n){e=n.u,r=n.f,i=n.e,a=n.x,c=n.Y},function(n){o=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),u=n(r(!1),2),l=u[0],f=u[1];return i(o,{get children(){return i(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+c.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
