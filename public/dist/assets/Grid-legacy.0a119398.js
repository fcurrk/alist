System.register(["./index-legacy.d81432f1.js","./Folder-legacy.d2683404.js","./Layout-legacy.5c1b2e78.js","./useUtil-legacy.43ddae24.js","./index-legacy.63f0aba9.js","./ImageWithError-legacy.a6cc82ae.js","./obj-legacy.97e43e8b.js","./icon-legacy.43d7f965.js","./useT-legacy.6a7ae426.js","./useTitle-legacy.eb33e24d.js","./api-legacy.5c4a6a06.js","./index-legacy.d2233ab1.js","./FolderTree-legacy.74783185.js"],(function(e,t){"use strict";var a,r,n,l,o,i,s,c,u,g,d,b,j,f,h,p,m,y,x,$,w,v,k,I,C,E,M,z;return{setters:[e=>{a=e.f,r=e.ai,n=e.ap,l=e.q,o=e.C,i=e.aI,s=e.a3,c=e.K,u=e.aH,g=e.aK,d=e.cj,b=e.al,j=e.aw,f=e.x,h=e.bq,p=e.af,m=e.a9,y=e.E,x=e.o,$=e.bZ},e=>{w=e.I},e=>{v=e.b,k=e.M},e=>{I=e.c},e=>{C=e.I},e=>{E=e.I},e=>{M=e.O},e=>{z=e.g},()=>{},()=>{},()=>{},()=>{},()=>{}],execute:function(){const t=e=>{const{isHide:t}=I();if(t(e.obj))return null;const{setPathAs:y}=v(),x=a(n,{get color(){return r()},boxSize:"$12",get as(){return z(e.obj)}}),[$,S]=l(!1),A=o((()=>i()&&($()||e.obj.selected))),{show:H}=w({id:1});return a(k.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return a(s,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:c()}},as:C,get href(){return e.obj.name},onMouseEnter:()=>{S(!0),y(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{S(!1)},onContextMenu:t=>{u((()=>{g(!1),d(e.index,!0,!0)})),H(t,{props:e.obj})},get children(){return[a(b,{class:"item-thumbnail",h:"70px",w:"$full","on:click":t=>{e.obj.type===M.IMAGE&&(t.stopPropagation(),t.preventDefault(),j.emit("gallery",e.obj.name))},pos:"relative",get children(){return[a(f,{get when(){return A()},get children(){return a(h,{pos:"absolute",left:"$1",top:"$1","on:click":e=>{e.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{d(e.index,t.target.checked)}})}}),a(f,{get when(){return e.obj.thumb},fallback:x,get children(){return a(E,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return a(p,{size:"lg"})},fallbackErr:x,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),a(m,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};e("default",(()=>a($,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return a(y,{get each(){return x.objs},children:(e,r)=>a(t,{obj:e,get index(){return r()}})})}})))}}}));
