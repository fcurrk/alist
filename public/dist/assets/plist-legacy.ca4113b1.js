!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,c=[],o=!0,u=!1;try{for(t=t.call(e);!(o=(r=t.next()).done)&&(c.push(r.value),!n||c.length!==n);o=!0);}catch(a){u=!0,i=a}finally{try{o||null==t.return||t.return()}finally{if(u)throw i}}return c}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.6c22d705.js","./useT-legacy.d27de5a4.js","./File-legacy.836effe8.js","./useUtil-legacy.2fd97f6d.js","./api-legacy.c9d0c9b8.js","./icon-legacy.b4a61e7f.js","./index-legacy.6029e6f3.js","./Layout-legacy.03376373.js","./useTitle-legacy.cd4e122b.js","./index-legacy.c07ea194.js","./FolderTree-legacy.a472002f.js","./obj-legacy.97e43e8b.js"],(function(n){"use strict";var t,r,i,c,o,u;return{setters:[function(e){t=e.q,r=e.f,i=e.B,c=e.o},function(e){o=e.u},function(e){u=e.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){n("default",(function(){var n=o(),a=e(t(!1),2),l=a[0],f=a[1];return r(u,{get children(){return r(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+c.raw_url},onClick:function(){f(!0)},get children(){return n("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
