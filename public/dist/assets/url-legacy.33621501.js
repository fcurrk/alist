!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,u=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(c){u=!0,i=c}finally{try{a||null==t.return||t.return()}finally{if(u)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.ad619971.js","./File-legacy.0ee7f1aa.js","./icon-legacy.2d7ba0d7.js","./index-legacy.33148d52.js","./Layout-legacy.fd5e9f7e.js","./useTitle-legacy.a1f435b3.js","./index-legacy.7607c885.js","./FolderTree-legacy.af49f6ec.js","./index-legacy.3afd847a.js"],(function(e){"use strict";var t,r,i,o,a,u,c,l;return{setters:[function(n){t=n.dA,r=n.x,i=n.a,o=n.h,a=n.C,u=n.a8,c=n.dB},function(n){l=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(t(),1)[0];function f(){var n,t=null===(n=e())||void 0===n?void 0:n.content,r=c(t).text;t&&window.open(r(),"_blank")}r((function(){f()}));var d=i();return o(u,{get loading(){return e.loading},get children(){return o(l,{get children(){return o(a,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();
