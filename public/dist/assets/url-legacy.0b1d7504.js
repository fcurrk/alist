!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],u=!0,c=!1;try{for(t=t.call(n);!(u=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);u=!0);}catch(a){c=!0,i=a}finally{try{u||null==t.return||t.return()}finally{if(c)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.85baecb0.js","./useUtil-legacy.050d0372.js","./File-legacy.7e992386.js","./api-legacy.14b3f071.js","./icon-legacy.133385d6.js","./index-legacy.e6c89635.js","./index-legacy.e316f715.js","./Layout-legacy.d4b65312.js","./index-legacy.2c6ac445.js","./FolderTree-legacy.2687c815.js"],(function(e){"use strict";var t,r,i,o,u,c,a;return{setters:[function(n){t=n.X,r=n.d,i=n.j,o=n.B,u=n.a6},function(n){c=n.d},function(n){a=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(c(),1)[0];t((function(){var n,t=null===(n=e())||void 0===n?void 0:n.content;t&&window.open(t,"_blank")}));var l=r();return i(u,{get loading(){return e.loading},get children(){return i(a,{get children(){return i(o,{get children(){return l("home.preview.open_in_new_window")}})}})}})}))}}}))}();