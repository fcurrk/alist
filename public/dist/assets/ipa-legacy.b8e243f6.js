!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,a,i=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(i.push(r.value),!e||i.length!==e);o=!0);}catch(l){c=!0,a=l}finally{try{o||null==t.return||t.return()}finally{if(c)throw a}}return i}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.f30462c9.js","./File-legacy.1d0a4a76.js","./icon-legacy.3934996f.js","./index-legacy.af356a81.js","./index-legacy.a4ba2c1d.js","./Layout-legacy.fd6e8887.js","./index-legacy.5a055964.js","./FolderTree-legacy.d26a14f3.js","./index-legacy.4adf7a5c.js"],(function(e){"use strict";var t,r,a,i,o,c,l,u,f,s,d;return{setters:[function(n){t=n.a,r=n.k,a=n.a4,i=n.e,o=n.ad,c=n.B,l=n.d6,u=n.d7,f=n.a0,s=n.d5},function(n){d=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),y=n(r(!1),2),g=y[0],m=y[1],p=n(r(!1),2),h=p[0],j=p[1],b=a().currentObjLink;return i(d,{get children(){return i(o,{spacing:"$2",get children(){return[i(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(l,"/i/").concat(u(encodeURIComponent(f.raw_url)+"/"+s(encodeURIComponent(f.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),i(c,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(b(!0))},onClick:function(){j(!0)},get children(){return e("home.preview.".concat(h()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();
