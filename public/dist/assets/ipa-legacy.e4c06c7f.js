!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(n);!(c=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.b889b5ff.js","./File-legacy.7df9b180.js","./icon-legacy.4ef311d0.js","./index-legacy.637dab0d.js","./index-legacy.27d90b3d.js","./Layout-legacy.036b6989.js","./index-legacy.7881bd4f.js","./FolderTree-legacy.c7a90862.js","./index-legacy.244643c2.js"],(function(e){"use strict";var t,r,i,o,c,a,l,u,f,s,d;return{setters:[function(n){t=n.a,r=n.d,i=n.W,o=n.h,c=n.a2,a=n.B,l=n.cW,u=n.cX,f=n.Q,s=n.cV},function(n){d=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),y=n(r(!1),2),g=y[0],m=y[1],h=n(r(!1),2),p=h[0],b=h[1],j=i().currentObjLink;return o(d,{get children(){return o(c,{spacing:"$2",get children(){return[o(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(l,"/i/").concat(u(encodeURIComponent(f.raw_url)+"/"+s(encodeURIComponent(f.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),o(a,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){b(!0)},get children(){return e("home.preview.".concat(p()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
