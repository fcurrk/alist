!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.85baecb0.js","./Folder-legacy.3e2b2a5f.js","./Layout-legacy.d4b65312.js","./useUtil-legacy.050d0372.js","./ImageWithError-legacy.faefb345.js","./icon-legacy.133385d6.js","./Paginator-legacy.3fde553d.js","./index-legacy.e316f715.js","./index-legacy.e6c89635.js","./api-legacy.14b3f071.js","./index-legacy.2c6ac445.js","./FolderTree-legacy.2687c815.js"],(function(n){"use strict";var t,r,o,a,i,c,u,l,f,s,d,g,y,b,j,p,h,m,x,v,w,$,A,M,S,k;return{setters:[function(e){t=e.j,r=e.ag,o=e.aq,a=e.r,i=e.C,c=e.aK,u=e.a3,l=e.aJ,f=e.aM,s=e.co,d=e.as,g=e.y,y=e.bw,b=e.an,j=e.ap,p=e.E,h=e.o,m=e.bi},function(e){x=e.b},function(e){v=e.a,w=e.M},function(e){$=e.c,A=e.a},function(e){M=e.I},function(e){S=e.O,k=e.g},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var E=function(n){if((0,$().isHide)(n.obj)||n.obj.type!==S.IMAGE)return null;var p=v().setPathAs,h=t(o,{get color(){return r()},boxSize:"$12",get as(){return k(n.obj)}}),m=e(a(!1),2),E=m[0],I=m[1],C=i((function(){return c()&&(E()||n.obj.selected)})),z=x({id:1}).show,F=A().rawLink;return t(w.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(u,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:"2px solid ".concat(r())}},onMouseEnter:function(){I(!0),p(n.obj.name,n.obj.is_dir,!0)},onMouseLeave:function(){I(!1)},onContextMenu:function(e){l((function(){f(!1),s(n.index,!0,!0)})),z(e,{props:n.obj})},get children(){return t(d,{w:"$full",pos:"relative",get children(){return[t(g,{get when(){return C()},get children(){return t(y,{pos:"absolute",left:"$1",top:"$1",get checked(){return n.obj.selected},onChange:function(e){s(n.index,e.target.checked)}})}}),t(M,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(b,{size:"lg"})},fallbackErr:h,get src(){return F(n.obj)},loading:"lazy",onClick:function(){j.emit("gallery",n.obj.name)}})]}})}})}})};n("default",(function(){return t(m,{w:"$full",gap:"$1",flexWrap:"wrap",get children(){return t(p,{get each(){return h.objs},children:function(e,n){return t(E,{obj:e,get index(){return n()}})}})}})}))}}}))}();
