!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,i=[],o=!0,a=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(l){a=!0,c=l}finally{try{o||null==t.return||t.return()}finally{if(a)throw c}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.e505d09d.js","./useUtil-legacy.be9047b1.js","./File-legacy.c2cdc665.js","./api-legacy.71854cec.js","./icon-legacy.c785d288.js","./index-legacy.938a498b.js","./index-legacy.5b2908b0.js","./Layout-legacy.28fa16c0.js","./index-legacy.e9f6a29f.js","./FolderTree-legacy.bb1dd4ab.js"],(function(e){"use strict";var t,r,c,i,o,a,l,u,f,s,d;return{setters:[function(n){t=n.d,r=n.r,c=n.j,i=n.a8,o=n.B,a=n.bb,l=n.cv,u=n.o,f=n.cu},function(n){s=n.a},function(n){d=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),y=n(r(!1),2),g=y[0],m=y[1],b=n(r(!1),2),p=b[0],h=b[1],j=s().currentObjLink;return c(d,{get children(){return c(i,{spacing:"$2",get children(){return[c(o,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(a,"/i/").concat(l(encodeURIComponent(u.raw_url)+"/"+f(encodeURIComponent(u.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),c(o,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){h(!0)},get children(){return e("home.preview.".concat(p()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
