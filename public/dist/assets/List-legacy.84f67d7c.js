System.register(["./index-legacy.ef1ab517.js","./useT-legacy.0e445ef0.js","./Folder-legacy.04496b00.js","./Layout-legacy.94f10e77.js","./useUtil-legacy.e531e1c6.js","./index-legacy.3185524a.js","./obj-legacy.97e43e8b.js","./icon-legacy.bddabed0.js","./useTitle-legacy.d2ddfd04.js","./Markdown-legacy.48f8965a.js","./api-legacy.4c1dbd4e.js","./index-legacy.ce937105.js","./FolderTree-legacy.cbce8f5d.js"],(function(e,t){"use strict";var n,r,i,l,a,c,o,s,g,d,u,h,b,m,j,w,f,p,y,x,$,A,k,v,z,C,M,S,E,I,P,T;return{setters:[e=>{n=e.e,r=e.a0,i=e.z,l=e.aB,a=e.aE,c=e.ch,o=e.k,s=e.aC,g=e.bq,d=e.ae,u=e.bb,h=e.am,b=e.bc,m=e.bu,j=e.bB,w=e.d,f=e.K,p=e.ci,y=e.cj,x=e.ck,$=e.af,A=e.v,k=e.o,v=e.W},e=>{z=e.u},e=>{C=e.I},e=>{M=e.b,S=e.M},e=>{E=e.c},e=>{I=e.I},e=>{P=e.O},e=>{T=e.g},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],B=e=>{const{isHide:w}=E();if(w(e.obj))return null;const{setPathAs:f}=M(),{show:p}=C({id:1});return n(S.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(r,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:i()}},as:I,get href(){return e.obj.name},onMouseEnter:()=>{f(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{l((()=>{a(!1),c(e.index,!0,!0)})),p(t,{props:e.obj})},get children(){return[n(r,{class:"name-box",spacing:"$1",get w(){return t[0].w},get children(){return[n(o,{get when(){return s()},get children(){return n(g,{"on:click":e=>{e.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{c(e.index,t.target.checked)}})}}),n(d,{class:"icon",boxSize:"$6",get color(){return u()},get as(){return T(e.obj)},mr:"$1","on:click":t=>{e.obj.type===P.IMAGE&&(t.stopPropagation(),t.preventDefault(),h.emit("gallery",e.obj.name))}}),n(b,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(b,{class:"size",get w(){return t[1].w},get textAlign(){return t[1].textAlign},get children(){return m(e.obj.size)}}),n(b,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return t[2].w},get textAlign(){return t[2].textAlign},get children(){return j(e.obj.modified)}})]}})}})};e("default",(()=>{const e=z(),[i,c]=w(),[d,u]=w(!1);f((()=>{i()&&p(i(),d())}));const h=e=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:()=>{e.name===i()?u(!d()):l((()=>{c(e.name),u(!1)}))}});return n(v,{class:"list",w:"$full",spacing:"$1",get children(){return[n(r,{class:"title",w:"$full",p:"$2",get children(){return[n(r,{get w(){return t[0].w},spacing:"$1",get children(){return[n(o,{get when(){return s()},get children(){return n(g,{get checked(){return y()},get indeterminate(){return x()},onChange:e=>{a(e.target.checked)}})}}),n(b,$((()=>h(t[0])),{get children(){return e(`home.obj.${t[0].name}`)}}))]}}),n(b,$({get w(){return t[1].w}},(()=>h(t[1])),{get children(){return e(`home.obj.${t[1].name}`)}})),n(b,$({get w(){return t[2].w}},(()=>h(t[2])),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${t[2].name}`)}}))]}}),n(A,{get each(){return k.objs},children:(e,t)=>n(B,{obj:e,get index(){return t()}})})]}})}))}}}));
