!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],a=!0,c=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);a=!0);}catch(l){c=!0,i=l}finally{try{a||null==t.return||t.return()}finally{if(c)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.f30462c9.js","./Folder-legacy.d8489cff.js","./index-legacy.5a055964.js","./index-legacy.a4ba2c1d.js","./icon-legacy.3934996f.js","./Layout-legacy.fd6e8887.js","./index-legacy.af356a81.js","./FolderTree-legacy.d26a14f3.js","./video_box-legacy.425602ad.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.81f5d84f.js","./index-legacy.4adf7a5c.js"],(function(n){"use strict";var t,r,i,o,a,c,l,u,s,f,d,g,m,h,b,y,j,w,p,x,v,A,$,k,S,C,z,M,_,E,I,O,P,D;return{setters:[function(e){t=e.cB,r=e.b,i=e.e,o=e.ad,a=e.K,c=e.aK,l=e.cT,u=e.r,s=e.aM,f=e.S,d=e.b$,g=e.ax,m=e.am,h=e.aw,b=e.ae,y=e.c3,j=e.cm,w=e.ac,p=e.l,x=e.a,v=e.k,A=e.w,$=e.cU,k=e.cV,S=e.cW,C=e.D,z=e.E,M=e.a0,_=e.a3},function(e){E=e.b},function(e){I=e.u},function(e){O=e.q},function(e){P=e.g,D=e.O},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var K=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],T=function(e){if((0,t().isHide)(e.obj))return null;var n=I().setPathAs,x=E({id:1}).show,v=r(),A=v.pushHref,$=v.to,k=function(){return"true"===p.filename_scrollable};return i(w.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return i(o,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:a()}},as:O,get href(){return e.obj.name},"on:click":function(n){c()&&(n.preventDefault(),n.altKey?$(A(e.obj.name)):l(e.index,!e.obj.selected))},onMouseEnter:function(){n(e.obj.name,e.obj.is_dir,!0)},onContextMenu:function(n){u((function(){s(!1),l(e.index,!0,!0)})),x(n,{props:e.obj})},get children(){return[i(o,{class:"name-box",spacing:"$1",get w(){return K[0].w},get children(){return[i(f,{get when(){return c()},get children(){return i(d,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){l(e.index,n.target.checked)}})}}),i(g,{class:"icon",boxSize:"$6",get color(){return m()},get as(){return P(e.obj)},mr:"$1","on:click":function(n){e.obj.type===D.IMAGE&&(n.stopPropagation(),n.preventDefault(),h.emit("gallery",e.obj.name))}}),i(b,{class:"name",get css(){return{whiteSpace:"nowrap","overflow-x":k()?"auto":"hidden",textOverflow:k()?"unset":"ellipsis","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),i(b,{class:"size",get w(){return K[1].w},get textAlign(){return K[1].textAlign},get children(){return y(e.obj.size)}}),i(b,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return K[2].w},get textAlign(){return K[2].textAlign},get children(){return j(e.obj.modified)}})]}})}})};n("default",(function(){var n=x(),t=e(v(),2),r=t[0],a=t[1],l=e(v(!1),2),g=l[0],m=l[1];A((function(){r()&&$(r(),g())}));var h=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===r()?m(!g()):u((function(){a(e.name),m(!1)}))}}};return i(_,{class:"list",w:"$full",spacing:"$1",get children(){return[i(o,{class:"title",w:"$full",p:"$2",get children(){return[i(o,{get w(){return K[0].w},spacing:"$1",get children(){return[i(f,{get when(){return c()},get children(){return i(d,{get checked(){return k()},get indeterminate(){return S()},onChange:function(e){s(e.target.checked)}})}}),i(b,C((function(){return h(K[0])}),{get children(){return n("home.obj.".concat(K[0].name))}}))]}}),i(b,C({get w(){return K[1].w}},(function(){return h(K[1])}),{get children(){return n("home.obj.".concat(K[1].name))}})),i(b,C({get w(){return K[2].w}},(function(){return h(K[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(K[2].name))}}))]}}),i(z,{get each(){return M.objs},children:function(e,n){return i(T,{obj:e,get index(){return n()}})}})]}})}))}}}))}();
