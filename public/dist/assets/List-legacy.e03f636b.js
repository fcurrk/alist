System.register(["./index-legacy.6db41345.js","./useT-legacy.b414a1f2.js","./Folder-legacy.8ac72d36.js","./Layout-legacy.b2721529.js","./useUtil-legacy.162c1b79.js","./index-legacy.4ecba46f.js","./obj-legacy.97e43e8b.js","./icon-legacy.63bf4e01.js","./useTitle-legacy.f4b0ffcc.js","./api-legacy.7d721719.js","./index-legacy.8c75bc41.js","./FolderTree-legacy.0951dfd2.js"],(function(e,t){"use strict";var n,r,i,l,a,c,o,s,g,d,u,h,b,m,j,w,f,p,x,y,$,A,k,v,C,z,I,M,S,E,P,T;return{setters:[e=>{n=e.f,r=e.a8,i=e.K,l=e.aH,a=e.aK,c=e.ci,o=e.x,s=e.aI,g=e.bp,d=e.ap,u=e.ai,h=e.aw,b=e.a9,m=e.bt,j=e.bC,w=e.q,f=e.X,p=e.cj,x=e.ck,y=e.cl,$=e.m,A=e.E,k=e.o,v=e.a3},e=>{C=e.u},e=>{z=e.I},e=>{I=e.b,M=e.M},e=>{S=e.c},e=>{E=e.I},e=>{P=e.O},e=>{T=e.g},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],F=e=>{const{isHide:w}=S();if(w(e.obj))return null;const{setPathAs:f}=I(),{show:p}=z({id:1});return n(M.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(r,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:i()}},as:E,get href(){return e.obj.name},onMouseEnter:()=>{f(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{l((()=>{a(!1),c(e.index,!0,!0)})),p(t,{props:e.obj})},get children(){return[n(r,{class:"name-box",spacing:"$1",get w(){return t[0].w},get children(){return[n(o,{get when(){return s()},get children(){return n(g,{"on:click":e=>{e.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{c(e.index,t.target.checked)}})}}),n(d,{class:"icon",boxSize:"$6",get color(){return u()},get as(){return T(e.obj)},mr:"$1","on:click":t=>{e.obj.type===P.IMAGE&&(t.stopPropagation(),t.preventDefault(),h.emit("gallery",e.obj.name))}}),n(b,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(b,{class:"size",get w(){return t[1].w},get textAlign(){return t[1].textAlign},get children(){return m(e.obj.size)}}),n(b,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return t[2].w},get textAlign(){return t[2].textAlign},get children(){return j(e.obj.modified)}})]}})}})};e("default",(()=>{const e=C(),[i,c]=w(),[d,u]=w(!1);f((()=>{i()&&p(i(),d())}));const h=e=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:()=>{e.name===i()?u(!d()):l((()=>{c(e.name),u(!1)}))}});return n(v,{class:"list",w:"$full",spacing:"$1",get children(){return[n(r,{class:"title",w:"$full",p:"$2",get children(){return[n(r,{get w(){return t[0].w},spacing:"$1",get children(){return[n(o,{get when(){return s()},get children(){return n(g,{get checked(){return x()},get indeterminate(){return y()},onChange:e=>{a(e.target.checked)}})}}),n(b,$((()=>h(t[0])),{get children(){return e(`home.obj.${t[0].name}`)}}))]}}),n(b,$({get w(){return t[1].w}},(()=>h(t[1])),{get children(){return e(`home.obj.${t[1].name}`)}})),n(b,$({get w(){return t[2].w}},(()=>h(t[2])),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${t[2].name}`)}}))]}}),n(A,{get each(){return k.objs},children:(e,t)=>n(F,{obj:e,get index(){return t()}})})]}})}))}}}));