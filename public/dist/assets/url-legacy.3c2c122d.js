!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,i=[],o=!0,u=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(l){u=!0,c=l}finally{try{o||null==t.return||t.return()}finally{if(u)throw c}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.cd76fb6c.js","./File-legacy.2984e0ee.js","./icon-legacy.b63c72dc.js","./index-legacy.921c5927.js","./Layout-legacy.fdfc85bd.js","./useTitle-legacy.94f1ccdf.js","./index-legacy.bb823317.js","./FolderTree-legacy.47bbccc2.js","./index-legacy.4c6972b4.js"],(function(e){"use strict";var t,r,c,i,o,u,l,a;return{setters:[function(n){t=n.dA,r=n.x,c=n.a,i=n.h,o=n.C,u=n.a8,l=n.dB},function(n){a=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=n(t(),1)[0];function f(){var n,t=null===(n=e())||void 0===n?void 0:n.content,r=l(t).text;t&&window.open(r(),"_blank")}r((function(){f()}));var d=c();return i(u,{get loading(){return e.loading},get children(){return i(a,{get children(){return i(o,{onClick:f,get children(){return d("home.preview.open_in_new_window")}})}})}})}))}}}))}();
