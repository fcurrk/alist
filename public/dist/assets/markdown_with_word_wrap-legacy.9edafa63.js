!function(){function n(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==e)return;var r,a,o=[],i=!0,u=!1;try{for(e=e.call(n);!(i=(r=e.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw a}}return o}(n,e)||function(n,e){if(!n)return;if("string"==typeof n)return t(n,e);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(n,e)}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy.91d9f692.js","./useUtil-legacy.6c2b4ad7.js","./Layout-legacy.a2dfc89c.js","./api-legacy.29390fae.js","./index-legacy.e5299551.js","./index-legacy.95c0e81a.js","./index-legacy.162c6ba0.js","./FolderTree-legacy.859ae82a.js"],(function(t){"use strict";var e,r,a,o;return{setters:[function(n){e=n.e,r=n.a2},function(n){a=n.e},function(n){o=n.a},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n(a(),1)[0];return e(r,{get loading(){return t.loading},get children(){return e(o,{class:"word-wrap",get children(){var n;return null===(n=t())||void 0===n?void 0:n.content}})}})}))}}}))}();
