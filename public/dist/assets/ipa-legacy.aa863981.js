!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,c=!1;try{for(t=t.call(n);!(a=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.d5c9fd95.js","./File-legacy.fbe41d81.js","./icon-legacy.d072033f.js","./index-legacy.2c10ba01.js","./Layout-legacy.6c0e5ab2.js","./useTitle-legacy.479a0037.js","./index-legacy.460d1698.js","./FolderTree-legacy.b26afa67.js","./index-legacy.b8ea9828.js"],(function(e){"use strict";var t,r,i,o,a,c,l,u,f,s,d;return{setters:[function(n){t=n.a,r=n.m,i=n.a5,o=n.h,a=n.ae,c=n.C,l=n.dC,u=n.dD,f=n.a1,s=n.dB},function(n){d=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),y=n(r(!1),2),g=y[0],m=y[1],h=n(r(!1),2),p=h[0],b=h[1],j=i().currentObjLink;return o(d,{get children(){return o(a,{spacing:"$2",get children(){return[o(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(l,"/i/").concat(u(encodeURIComponent(f.raw_url)+"/"+s(encodeURIComponent(f.obj.name))),".plist")},onClick:function(){m(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),o(c,{as:"a",colorScheme:"primary",get href(){return"apple-magnifier://install?url="+encodeURIComponent(j(!0))},onClick:function(){b(!0)},get children(){return e("home.preview.".concat(p()?"tr-installing":"tr-install"))}})]}})}})}))}}}))}();