!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,c,o=[],i=!0,a=!1;try{for(t=t.call(n);!(i=(r=t.next()).done)&&(o.push(r.value),!e||o.length!==e);i=!0);}catch(u){a=!0,c=u}finally{try{i||null==t.return||t.return()}finally{if(a)throw c}}return o}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.8bfe676c.js","./useT-legacy.b5d3b617.js","./File-legacy.237c7b00.js","./useUtil-legacy.3e9f4baf.js","./api-legacy.e9645c90.js","./icon-legacy.1802bea7.js","./index-legacy.a76efebc.js","./Layout-legacy.6fd35b01.js","./useTitle-legacy.b2876ee9.js","./index-legacy.542a8d88.js","./FolderTree-legacy.929c5010.js","./obj-legacy.97e43e8b.js"],(function(e){"use strict";var t,r,c,o,i,a,u,l,f;return{setters:[function(n){t=n.q,r=n.f,c=n.B,o=n.ba,i=n.cr,a=n.o,u=n.cq},function(n){l=n.u},function(n){f=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=l(),s=n(t(!1),2),y=s[0],g=s[1];return r(f,{get children(){return r(c,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(o,"/i/").concat(i(encodeURIComponent(a.raw_url)+"/"+u(encodeURIComponent(a.obj.name))),".plist")},onClick:function(){g(!0)},get children(){return e("home.preview.".concat(y()?"installing":"install"))}})}})}))}}}))}();
