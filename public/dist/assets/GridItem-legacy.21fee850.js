!function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,a=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(u){l=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(l)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}System.register(["./index-legacy.e036df29.js","./Folder-legacy.af74105f.js","./Layout-legacy.8f145e4e.js","./useUtil-legacy.cbfdad4a.js","./index-legacy.010f2af1.js","./ImageWithError-legacy.41a976e7.js","./icon-legacy.de2c56be.js"],(function(t){"use strict";var n,r,o,a,i,l,u,c,s,f,g,d,b,h,y,p,m,j,v,w,$,x,A,S,k;return{setters:[function(e){n=e.j,r=e.ag,o=e.aq,a=e.r,i=e.C,l=e.aK,u=e.a3,c=e.K,s=e.aJ,f=e.aM,g=e.co,d=e.as,b=e.ap,h=e.y,y=e.bG,p=e.an,m=e.a9},function(e){j=e.b},function(e){v=e.a,w=e.M},function(e){$=e.c},function(e){x=e.p},function(e){A=e.I},function(e){S=e.g,k=e.O}],execute:function(){t("G",(function(t){if((0,$().isHide)(t.obj))return null;var M=v().setPathAs,I=n(o,{get color(){return r()},boxSize:"$12",get as(){return S(t.obj)}}),C=e(a(!1),2),E=C[0],z=C[1],O=i((function(){return l()&&(E()||t.obj.selected)})),G=j({id:1}).show;return n(w.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(u,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:c()}},as:x,get href(){return t.obj.name},onMouseEnter:function(){z(!0),M(t.obj.name,t.obj.is_dir,!0)},onMouseLeave:function(){z(!1)},onContextMenu:function(e){s((function(){f(!1),g(t.index,!0,!0)})),G(e,{props:t.obj})},get children(){return[n(d,{class:"item-thumbnail",h:"70px",w:"$full","on:click":function(e){t.obj.type===k.IMAGE&&(e.stopPropagation(),e.preventDefault(),b.emit("gallery",t.obj.name))},pos:"relative",get children(){return[n(h,{get when(){return O()},get children(){return n(y,{pos:"absolute",left:"$1",top:"$1","on:click":function(e){e.stopPropagation()},get checked(){return t.obj.selected},onChange:function(e){g(t.index,e.target.checked)}})}}),n(h,{get when(){return t.obj.thumb},fallback:I,get children(){return n(A,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return n(p,{size:"lg"})},fallbackErr:I,get src(){return t.obj.thumb},loading:"lazy"})}})]}}),n(m,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return t.obj.name},get children(){return t.obj.name}})]}})}})}))}}}))}();
