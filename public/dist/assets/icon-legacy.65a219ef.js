!function(){function r(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var e=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null==e)return;var n,a,u=[],c=!0,o=!1;try{for(e=e.call(r);!(c=(n=e.next()).done)&&(u.push(n.value),!t||u.length!==t);c=!0);}catch(i){o=!0,a=i}finally{try{c||null==e.return||e.return()}finally{if(o)throw a}}return u}(r,e)||function(r,e){if(!r)return;if("string"==typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(r);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,e)}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}System.register(["./index-legacy.16d41170.js","./Layout-legacy.794777a7.js","./index-legacy.65a6b1ae.js","./obj-legacy.97e43e8b.js"],(function(t){"use strict";var e,n,a,u,c,o,i,l,s,f,y,p,v,d,h,m,b,g,x,A;return{setters:[function(r){e=r.r,n=r.s,a=r.t,u=r.u,c=r.v,o=r.w,i=r.x,l=r.y,s=r.z,f=r.D,y=r.E,p=r.F,v=r.G},function(r){d=r.e,h=r.f,m=r.h},function(r){b=r.A,g=r.bH,x=r.bJ},function(r){A=r.O}],execute:function(){var z={"dmg,ipa,plist":o,"exe,msi":i,"zip,gz,rar,7z,tar,jar,xz":l,apk:function(r){return b({a:{viewBox:"0 0 16 16"},c:'<path fill="currentColor" d="M14 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zM2 6c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1V7c0-.55-.45-1-1-1zm1.5 5.5A1.5 1.5 0 005 13v2c0 .55.45 1 1 1s1-.45 1-1v-2h2v2c0 .55.45 1 1 1s1-.45 1-1v-2a1.5 1.5 0 001.5-1.5V6h-9v5.5zM12.472 5a4.5 4.5 0 00-2.025-3.276l.5-1.001a.5.5 0 00-.895-.447L9.55 1.28l-.13-.052a4.504 4.504 0 00-2.84 0l-.13.052L5.948.276a.5.5 0 00-.895.447l.5 1.001A4.499 4.499 0 003.528 5v.5H12.5V5h-.028zM6.5 4a.5.5 0 01-.001-1h.002A.5.5 0 016.5 4zm3 0a.5.5 0 01-.001-1h.003a.5.5 0 01-.001 1z"/>'},r)},db:d,md:s,epub:h,iso:m,m3u8:c,"doc,docx":f,"xls,xlsx":y,"ppt,pptx":p,pdf:v};t("g",(function(t){return function(t,o){if(t!==A.FOLDER)for(var i=0,l=Object.entries(z);i<l.length;i++){var s=r(l[i],2),f=s[0],y=s[1];if(f.split(",").includes(o.toLowerCase()))return y}switch(t){case A.FOLDER:return x;case A.VIDEO:return c;case A.AUDIO:return u;case A.TEXT:return a;case A.IMAGE:return n;default:return e}}(t.type,g(t.name))}))}}}))}();
