!function(){function n(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var t,o,c=[],i=!0,a=!1;try{for(r=r.call(n);!(i=(t=r.next()).done)&&(c.push(t.value),!e||c.length!==e);i=!0);}catch(l){a=!0,o=l}finally{try{i||null==r.return||r.return()}finally{if(a)throw o}}return c}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return e(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}System.register(["./index-legacy.ba088725.js","./File-legacy.869b2973.js","./useUtil-legacy.b6037b92.js","./icon-legacy.f2ee514c.js","./index-legacy.adb447b3.js","./api-legacy.b031b43b.js"],(function(e){"use strict";var r,t,o,c,i,a,l,u,f,s,y;return{setters:[function(n){r=n.d,t=n.r,o=n.j,c=n.a8,i=n.B,a=n.ba,l=n.cs,u=n.o,f=n.cr},function(n){s=n.F},function(n){y=n.b},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=r(),d=n(t(!1),2),g=d[0],b=d[1],h=y().copyCurrentRawLink;return o(s,{get children(){return o(c,{spacing:"$2",get children(){return[o(i,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+"".concat(a,"/i/").concat(l(encodeURIComponent(u.raw_url)+"/"+f(encodeURIComponent(u.obj.name))),".plist")},onClick:function(){b(!0)},get children(){return e("home.preview.".concat(g()?"installing":"install"))}}),o(i,{colorScheme:"danger",as:"a",get href(){return u.raw_url},target:"_blank",get children(){return e("home.preview.download")}}),o(i,{colorScheme:"accent",onClick:function(){return h(!0)},get children(){return e("home.toolbar.copy_link")}})]}})}})}))}}}))}();
