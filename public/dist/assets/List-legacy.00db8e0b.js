System.register(["./index-legacy.5496c322.js","./useT-legacy.4ae42db3.js","./Folder-legacy.a1f1cae1.js","./Layout-legacy.263d3bf6.js","./useUtil-legacy.eb0cbc16.js","./index-legacy.17a3a1bb.js","./obj-legacy.97e43e8b.js","./icon-legacy.d8871022.js","./useTitle-legacy.87776fb1.js","./api-legacy.72820435.js","./index-legacy.7111e13c.js","./FolderTree-legacy.bad6c8ee.js"],(function(e,t){"use strict";var n,r,i,l,a,c,o,s,g,u,d,b,h,m,j,w,f,p,x,y,$,A,k,v,z,C,E,M,S,F,I,P;return{setters:[e=>{n=e.f,r=e.a8,i=e.K,l=e.aE,a=e.aH,c=e.ci,o=e.x,s=e.aF,g=e.bo,u=e.am,d=e.bb,b=e.at,h=e.a9,m=e.bs,j=e.bB,w=e.q,f=e.X,p=e.cj,x=e.ck,y=e.cl,$=e.m,A=e.E,k=e.o,v=e.a3},e=>{z=e.u},e=>{C=e.I},e=>{E=e.b,M=e.M},e=>{S=e.c},e=>{F=e.I},e=>{I=e.O},e=>{P=e.g},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],T=e=>{const{isHide:w}=S();if(w(e.obj))return null;const{setPathAs:f}=E(),{show:p}=C({id:1});return n(M.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(r,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:i()}},as:F,get href(){return e.obj.name},onMouseEnter:()=>{f(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{l((()=>{a(!1),c(e.index,!0,!0)})),p(t,{props:e.obj})},get children(){return[n(r,{class:"name-box",spacing:"$1",get w(){return t[0].w},get children(){return[n(o,{get when(){return s()},get children(){return n(g,{"on:click":e=>{e.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{c(e.index,t.target.checked)}})}}),n(u,{class:"icon",boxSize:"$6",get color(){return d()},get as(){return P(e.obj)},mr:"$1","on:click":t=>{e.obj.type===I.IMAGE&&(t.stopPropagation(),t.preventDefault(),b.emit("gallery",e.obj.name))}}),n(h,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(h,{class:"size",get w(){return t[1].w},get textAlign(){return t[1].textAlign},get children(){return m(e.obj.size)}}),n(h,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return t[2].w},get textAlign(){return t[2].textAlign},get children(){return j(e.obj.modified)}})]}})}})};e("default",(()=>{const e=z(),[i,c]=w(),[u,d]=w(!1);f((()=>{i()&&p(i(),u())}));const b=e=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:e.textAlign,cursor:"pointer",onClick:()=>{e.name===i()?d(!u()):l((()=>{c(e.name),d(!1)}))}});return n(v,{class:"list",w:"$full",spacing:"$1",get children(){return[n(r,{class:"title",w:"$full",p:"$2",get children(){return[n(r,{get w(){return t[0].w},spacing:"$1",get children(){return[n(o,{get when(){return s()},get children(){return n(g,{get checked(){return x()},get indeterminate(){return y()},onChange:e=>{a(e.target.checked)}})}}),n(h,$((()=>b(t[0])),{get children(){return e(`home.obj.${t[0].name}`)}}))]}}),n(h,$({get w(){return t[1].w}},(()=>b(t[1])),{get children(){return e(`home.obj.${t[1].name}`)}})),n(h,$({get w(){return t[2].w}},(()=>b(t[2])),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${t[2].name}`)}}))]}}),n(A,{get each(){return k.objs},children:(e,t)=>n(T,{obj:e,get index(){return t()}})})]}})}))}}}));
