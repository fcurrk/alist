!function(){function n(n,r){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var r=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==r)return;var e,a,o=[],i=!0,u=!1;try{for(r=r.call(n);!(i=(e=r.next()).done)&&(o.push(e.value),!t||o.length!==t);i=!0);}catch(c){u=!0,a=c}finally{try{i||null==r.return||r.return()}finally{if(u)throw a}}return o}(n,r)||function(n,r){if(!n)return;if("string"==typeof n)return t(n,r);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return t(n,r)}(n,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}System.register(["./index-legacy.46dfa15f.js","./useUtil-legacy.34012884.js","./Layout-legacy.fc69b369.js","./api-legacy.4d88c644.js","./index-legacy.f72a4f1a.js","./index-legacy.9cab5220.js","./index-legacy.711eac43.js","./FolderTree-legacy.90100228.js"],(function(t){"use strict";var r,e,a,o;return{setters:[function(n){r=n.e,e=n.a2},function(n){a=n.e},function(n){o=n.a},function(){},function(){},function(){},function(){},function(){}],execute:function(){t("default",(function(){var t=n(a(),1)[0];return r(e,{get loading(){return t.loading},get children(){return r(o,{class:"word-wrap",get children(){var n;return null===(n=t())||void 0===n?void 0:n.content}})}})}))}}}))}();
