!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,i,a=[],o=!0,c=!1;try{for(e=e.call(n);!(o=(r=e.next()).done)&&(a.push(r.value),!t||a.length!==t);o=!0);}catch(u){c=!0,i=u}finally{try{o||null==e.return||e.return()}finally{if(c)throw i}}return a}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.e89406bd.js","./File-legacy.29305659.js","./useUtil-legacy.03f1f6ea.js","./api-legacy.0d20af5d.js","./icon-legacy.873bcecd.js","./index-legacy.890fcaa7.js","./index-legacy.39606562.js","./Layout-legacy.33eb5d8f.js","./index-legacy.ca84e5d5.js","./FolderTree-legacy.109256a4.js"],(function(t){"use strict";var e,r,i,a,o,c;return{setters:[function(n){e=n.d,r=n.r,i=n.j,a=n.B,o=n.o},function(n){c=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=e(),u=n(r(!1),2),l=u[0],f=u[1];return i(c,{get children(){return i(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+o.raw_url},onClick:function(){f(!0)},get children(){return t("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
