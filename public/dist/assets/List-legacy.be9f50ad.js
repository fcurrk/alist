!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,a=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(l){a=!0,i=l}finally{try{c||null==t.return||t.return()}finally{if(a)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.9cf08070.js","./useT-legacy.855b0440.js","./Folder-legacy.58c80864.js","./Layout-legacy.7e0220a7.js","./useUtil-legacy.c9074449.js","./index-legacy.25aceba9.js","./obj-legacy.97e43e8b.js","./icon-legacy.9d7e34b5.js","./useTitle-legacy.ae1f8e2e.js","./api-legacy.fcfa6358.js","./index-legacy.5826e2a3.js","./FolderTree-legacy.65f02829.js"],(function(n){"use strict";var t,r,i,o,c,a,l,u,s,g,f,d,h,m,b,y,j,p,w,x,v,A,$,S,k,C,I,z,M,E,O,T;return{setters:[function(e){t=e.f,r=e.a8,i=e.K,o=e.aH,c=e.aK,a=e.ci,l=e.x,u=e.aI,s=e.bp,g=e.ap,f=e.ai,d=e.aw,h=e.a9,m=e.bt,b=e.bC,y=e.q,j=e.X,p=e.cj,w=e.ck,x=e.cl,v=e.m,A=e.E,$=e.o,S=e.a3},function(e){k=e.u},function(e){C=e.I},function(e){I=e.b,z=e.M},function(e){M=e.c},function(e){E=e.I},function(e){O=e.O},function(e){T=e.g},function(){},function(){},function(){},function(){}],execute:function(){var P=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],F=function(e){if((0,M().isHide)(e.obj))return null;var n=I().setPathAs,y=C({id:1}).show;return t(z.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(r,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:i()}},as:E,get href(){return e.obj.name},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){o((function(){c(!1),a(e.index,!0,!0)})),y(n,{props:e.obj})},get children(){return[t(r,{class:"name-box",spacing:"$1",get w(){return P[0].w},get children(){return[t(l,{get when(){return u()},get children(){return t(s,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){a(e.index,n.target.checked)}})}}),t(g,{class:"icon",boxSize:"$6",get color(){return f()},get as(){return T(e.obj)},mr:"$1","on:click":function(n){e.obj.type===O.IMAGE&&(n.stopPropagation(),n.preventDefault(),d.emit("gallery",e.obj.name))}}),t(h,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(h,{class:"size",get w(){return P[1].w},get textAlign(){return P[1].textAlign},get children(){return m(e.obj.size)}}),t(h,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return P[2].w},get textAlign(){return P[2].textAlign},get children(){return b(e.obj.modified)}})]}})}})};n("default",(function(){var n=k(),i=e(y(),2),a=i[0],g=i[1],f=e(y(!1),2),d=f[0],m=f[1];j((function(){a()&&p(a(),d())}));var b=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===a()?m(!d()):o((function(){g(e.name),m(!1)}))}}};return t(S,{class:"list",w:"$full",spacing:"$1",get children(){return[t(r,{class:"title",w:"$full",p:"$2",get children(){return[t(r,{get w(){return P[0].w},spacing:"$1",get children(){return[t(l,{get when(){return u()},get children(){return t(s,{get checked(){return w()},get indeterminate(){return x()},onChange:function(e){c(e.target.checked)}})}}),t(h,v((function(){return b(P[0])}),{get children(){return n("home.obj.".concat(P[0].name))}}))]}}),t(h,v({get w(){return P[1].w}},(function(){return b(P[1])}),{get children(){return n("home.obj.".concat(P[1].name))}})),t(h,v({get w(){return P[2].w}},(function(){return b(P[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(P[2].name))}}))]}}),t(A,{get each(){return $.objs},children:function(e,n){return t(F,{obj:e,get index(){return n()}})}})]}})}))}}}))}();