!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,i,o=[],c=!0,l=!1;try{for(t=t.call(e);!(c=(r=t.next()).done)&&(o.push(r.value),!n||o.length!==n);c=!0);}catch(a){l=!0,i=a}finally{try{c||null==t.return||t.return()}finally{if(l)throw i}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function t(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}System.register(["./index-legacy.e91490ae.js","./Folder-legacy.40cbef4f.js","./index-legacy.61cd910c.js","./index-legacy.36367535.js","./icon-legacy.dc07b62c.js","./helper-legacy.5bfd24c5.js","./Layout-legacy.4ef7b257.js","./useTitle-legacy.4d5a58d9.js","./FolderTree-legacy.660156c8.js","./video_box-legacy.be1da043.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js","./Paginator-legacy.b0a5f695.js","./index-legacy.d4266fc7.js","./index-legacy.1d9c24b4.js"],(function(n){"use strict";var r,i,o,c,l,a,u,s,f,d,g,b,m,h,y,p,j,v,w,x,A,k,S,$,O,C,_,P,M,z,D,I,E,L,T,K,F;return{setters:[function(e){r=e.bJ,i=e.b,o=e.h,c=e.ae,l=e.L,a=e.aO,u=e.ag,s=e.dt,f=e.t,d=e.aQ,g=e.S,b=e.aA,m=e.an,h=e.az,y=e.af,p=e.ck,j=e.cR,v=e.ad,w=e.l,x=e.a,A=e.m,k=e.x,S=e.du,$=e.dv,O=e.dw,C=e.E,_=e.G,P=e.a1,M=e.a4},function(e){z=e.b},function(e){D=e.u},function(e){I=e.q},function(e){E=e.g,L=e.O},function(e){T=e.u,K=e.I,F=e.a},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var G=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],H=function(e){if((0,r().isHide)(e.obj))return null;var n=D().setPathAs,x=z({id:1}).show,A=i(),k=A.pushHref,S=A.to,$=F().isMouseSupported,O=T(),C=function(){return w.list_item_filename_overflow};return o(v.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){var r,i,v;return o(c,(i={get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item"},(v={})[r="data-index"]=v[r]||{},v[r].get=function(){return e.index},t(i,"w","$full"),t(i,"p","$2"),t(i,"rounded","$lg"),t(i,"transition","all 0.3s"),"_hover",v._hover=v._hover||{},v._hover.get=function(){return{transform:"scale(1.01)",bgColor:l()}},t(i,"as",I),"href",v.href=v.href||{},v.href.get=function(){return e.obj.name},"cursor",v.cursor=v.cursor||{},v.cursor.get=function(){return $()||a()&&!O()?"default":"pointer"},"bgColor",v.bgColor=v.bgColor||{},v.bgColor.get=function(){return u((function(){return!!e.obj.selected}),!0)()?l():void 0},t(i,"on:dblclick",(function(n){$()&&(n.ctrlKey||n.metaKey||n.shiftKey||S(k(e.obj.name)))})),t(i,"on:click",(function(n){if($())return n.preventDefault();a()&&(n.preventDefault(),O()?S(k(e.obj.name)):s(e.index,!e.obj.selected))})),t(i,"onMouseEnter",(function(){n(e.obj.name,e.obj.is_dir,!0)})),t(i,"onContextMenu",(function(n){f((function(){d(!1),s(e.index,!0,!0)})),x(n,{props:e.obj})})),"children",v.children=v.children||{},v.children.get=function(){return[o(c,{class:"name-box",spacing:"$1",get w(){return G[0].w},get children(){return[o(g,{get when(){return a()},get children(){return o(K,{"on:click":function(e){e.stopPropagation()},get checked(){return e.obj.selected},onChange:function(n){s(e.index,n.target.checked)}})}}),o(b,{class:"icon",boxSize:"$6",get color(){return m()},get as(){return E(e.obj)},mr:"$1","on:click":function(n){e.obj.type===L.IMAGE&&(n.stopPropagation(),n.preventDefault(),h.emit("gallery",e.obj.name))}}),o(y,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:"multi_line"===C()?"unset":"nowrap","overflow-x":"scrollable"===C()?"auto":"hidden",textOverflow:"ellipsis"===C()?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),o(y,{class:"size",get w(){return G[1].w},get textAlign(){return G[1].textAlign},get children(){return p(e.obj.size)}}),o(y,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return G[2].w},get textAlign(){return G[2].textAlign},get children(){return j(e.obj.modified)}})]},function(e,n){for(var t in n)(o=n[t]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,t,o);if(Object.getOwnPropertySymbols)for(var r=Object.getOwnPropertySymbols(n),i=0;i<r.length;i++){var o,c=r[i];(o=n[c]).configurable=o.enumerable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,c,o)}}(i,v),i))}})};n("default",(function(){var n=x(),t=e(A(),2),r=t[0],i=t[1],l=e(A(!1),2),u=l[0],s=l[1];k((function(){r()&&S(r(),u())}));var b=function(e){return{fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:function(){e.name===r()?s(!u()):f((function(){i(e.name),s(!1)}))}}},m=F(),p=m.isMouseSupported,j=m.registerSelectContainer,v=m.captureContentMenu;return j(),o(M,{onDragOver:function(e){for(var n,t,r=Array.from(null!==(n=null===(t=e.dataTransfer)||void 0===t?void 0:t.items)&&void 0!==n?n:[]),i=0;i<r.length;i++){if("file"===r[i].kind){h.emit("tool","upload"),e.preventDefault();break}}},"oncapture:contextmenu":v,get classList(){return{"viselect-container":p()}},class:"list",w:"$full",spacing:"$1",get children(){return[o(c,{class:"title",w:"$full",p:"$2",get children(){return[o(c,{get w(){return G[0].w},spacing:"$1",get children(){return[o(g,{get when(){return a()},get children(){return o(K,{get checked(){return $()},get indeterminate(){return O()},onChange:function(e){d(e.target.checked)}})}}),o(y,C((function(){return b(G[0])}),{get children(){return n("home.obj.".concat(G[0].name))}}))]}}),o(y,C({get w(){return G[1].w}},(function(){return b(G[1])}),{get children(){return n("home.obj.".concat(G[1].name))}})),o(y,C({get w(){return G[2].w}},(function(){return b(G[2])}),{display:{"@initial":"none","@md":"inline"},get children(){return n("home.obj.".concat(G[2].name))}}))]}}),o(_,{get each(){return P.objs},children:function(e,n){return o(H,{obj:e,get index(){return n()}})}})]}})}))}}}))}();