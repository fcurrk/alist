!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.5cade7a6.js","./useTitle-legacy.1c5f753a.js","./helper-legacy.efe32ae0.js","./Paginator-legacy.7a3dcfd6.js","./index-legacy.fdc89b8c.js"],(function(t){"use strict";var n,r,c,a,u;return{setters:[function(e){n=e.a,r=e.h},function(e){c=e.b},function(e){a=e.b,u=e.T},function(){},function(){}],execute:function(){t("default",(function(){var t=n();return c("manage.sidemenu.copy"),r(u,{type:"copy",canRetry:!0,get nameAnalyzer(){var n;return{regex:/^copy \[(.*\/([^\/]*))]\((.*\/([^\/]*))\) to \[(.+)]\((.+)\)$/,title:function(e){return""!==e[4]?e[4]:""===e[2]?"/":e[2]},attrs:(n={},e(n,t("tasks.attr.copy.src"),(function(e){return a(e[1],e[3])})),e(n,t("tasks.attr.copy.dst"),(function(e){return a(e[5],e[6])})),n)}}})}))}}}))}();
