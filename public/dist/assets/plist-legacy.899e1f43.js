!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,o=[],a=!0,u=!1;try{for(e=e.call(n);!(a=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==e.return||e.return()}finally{if(u)throw i}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.e8fdd123.js","./File-legacy.8a13dde4.js","./icon-legacy.54035022.js","./index-legacy.f050dd7b.js","./Layout-legacy.75464a81.js","./useTitle-legacy.6252667e.js","./index-legacy.0c0fedf9.js","./FolderTree-legacy.8c7c7ba0.js","./index-legacy.047efdb3.js"],(function(t){"use strict";var e,r,i,o,a,u;return{setters:[function(n){e=n.a,r=n.m,i=n.h,o=n.C,a=n.a1},function(n){u=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),c=n(r(!1),2),l=c[0],f=c[1];return i(u,{get children(){return i(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+a.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
