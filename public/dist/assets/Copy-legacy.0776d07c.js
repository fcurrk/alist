!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}System.register(["./index-legacy.bf58c9e2.js","./useTitle-legacy.6a925e4c.js","./helper-legacy.1c62d432.js","./Paginator-legacy.dd2f42e7.js","./index-legacy.3fa383dd.js"],(function(t){"use strict";var n,r,c,a,u;return{setters:[function(e){n=e.a,r=e.h},function(e){c=e.b},function(e){a=e.b,u=e.T},function(){},function(){}],execute:function(){t("default",(function(){var t=n();return c("manage.sidemenu.copy"),r(u,{type:"copy",canRetry:!0,get nameAnalyzer(){var n;return{regex:/^copy \[(.+)]\((.*\/([^\/]+))\) to \[(.+)]\((.+)\)$/,title:function(e){return e[3]},attrs:(n={},e(n,t("tasks.attr.copy.src"),(function(e){return a(e[1],e[2])})),e(n,t("tasks.attr.copy.dst"),(function(e){return a(e[4],e[5])})),n)}}})}))}}}))}();
