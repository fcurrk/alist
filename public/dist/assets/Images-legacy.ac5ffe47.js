!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],a=!0,l=!1;try{for(t=t.call(e);!(a=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==t.return||t.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.e036df29.js","./Folder-legacy.af74105f.js","./Layout-legacy.8f145e4e.js","./useUtil-legacy.cbfdad4a.js","./ImageWithError-legacy.41a976e7.js","./icon-legacy.de2c56be.js","./GridItem-legacy.21fee850.js","./Paginator-legacy.c986d2e6.js","./index-legacy.010f2af1.js","./index-legacy.dca71433.js","./api-legacy.73212e8f.js","./index-legacy.a3d3bc3e.js","./FolderTree-legacy.abafc08f.js"],(function(n){"use strict";var t,r,o,i,a,l,u,c,f,s,g,d,y,b,h,p,j,m,w,x,v,$,_,A,I,M,S,k,C;return{setters:[function(e){t=e.j,r=e.ag,o=e.aq,i=e.r,a=e.C,l=e.aK,u=e.a3,c=e.aJ,f=e.aM,s=e.co,g=e.as,d=e.y,y=e.bG,b=e.an,h=e.ap,p=e.E,j=e.o,m=e.c2,w=e.l,x=e.bs},function(e){v=e.b},function(e){$=e.a,_=e.M},function(e){A=e.c,I=e.a},function(e){M=e.I},function(e){S=e.O,k=e.g},function(e){C=e.G},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var E=function(n){if((0,A().isHide)(n.obj)||n.obj.type!==S.IMAGE)return null;var p=$().setPathAs,j=t(o,{get color(){return r()},boxSize:"$12",get as(){return k(n.obj)}}),m=e(i(!1),2),w=m[0],x=m[1],C=a((function(){return l()&&(w()||n.obj.selected)})),E=v({id:1}).show,G=I().rawLink;return t(_.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(u,{w:"$full",class:"image-item",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:"2px solid ".concat(r())}},onMouseEnter:function(){x(!0),p(n.obj.name,n.obj.is_dir,!0)},onMouseLeave:function(){x(!1)},onContextMenu:function(e){c((function(){f(!1),s(n.index,!0,!0)})),E(e,{props:n.obj})},get children(){return t(g,{w:"$full",pos:"relative",get children(){return[t(d,{get when(){return C()},get children(){return t(y,{pos:"absolute",left:"$1",top:"$1",get checked(){return n.obj.selected},onChange:function(e){s(n.index,e.target.checked)}})}}),t(M,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(b,{size:"lg"})},fallbackErr:j,get src(){return G(n.obj)},loading:"lazy",onClick:function(){h.emit("gallery",n.obj.name)}})]}})}})}})};n("default",(function(){var e=a((function(){return t(m,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return t(p,{get each(){return j.objs.filter((function(e){return e.is_dir}))},children:function(e,n){return t(C,{obj:e,get index(){return n()}})}})}})}));return t(u,{spacing:"$2",w:"$full",get children(){return[t(d,{get when(){return"top"===w.show_folder_in_image_view},get children(){return e()}}),t(x,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return t(p,{get each(){return j.objs},children:function(e,n){return t(E,{obj:e,get index(){return n()}})}})}}),t(d,{get when(){return"bottom"===w.show_folder_in_image_view},get children(){return e()}})]}})}))}}}))}();
