import{j as t,a8 as l,K as $,aJ as h,aM as b,cm as m,y as f,aK as w,bu as j,aq as k,ag as y,ap as p,a9 as a,bx as A,bI as C,d as S,r as d,Y as v,cn as I,co as M,cp as O,m as u,E as P,o as z,V as E}from"./index.57e3c491.js";import{b as L}from"./Folder.e37c5bcb.js";import{a as B,M as T}from"./Layout.ac667a8b.js";import{c as D}from"./useUtil.d8376dfb.js";import{o as F}from"./index.8c8e020f.js";import{g as H,O as K}from"./icon.e7428fb8.js";import"./Paginator.2547a1db.js";import"./index.39381a1e.js";import"./api.d25af188.js";import"./index.c5e36516.js";import"./FolderTree.cc284ec0.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],V=e=>{const{isHide:o}=D();if(o(e.obj))return null;const{setPathAs:c}=B(),{show:s}=L({id:1});return t(T.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:$()}},as:F,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),m(e.index,!0,!0)}),s(r,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{m(e.index,r.target.checked)}})}}),t(k,{class:"icon",boxSize:"$6",get color(){return y()},get as(){return H(e.obj)},mr:"$1","on:click":r=>{e.obj.type===K.IMAGE&&(r.stopPropagation(),r.preventDefault(),p.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return A(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return C(e.obj.modified)}})]}})}})},Z=()=>{const e=S(),[o,c]=d(),[s,r]=d(!1);v(()=>{o()&&I(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?r(!s()):h(()=>{c(i.name),r(!1)})}});return t(E,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return n[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return M()},get indeterminate(){return O()},onChange:i=>{b(i.target.checked)}})}}),t(a,u(()=>g(n[0]),{get children(){return e(`home.obj.${n[0].name}`)}}))]}}),t(a,u({get w(){return n[1].w}},()=>g(n[1]),{get children(){return e(`home.obj.${n[1].name}`)}})),t(a,u({get w(){return n[2].w}},()=>g(n[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${n[2].name}`)}}))]}}),t(P,{get each(){return z.objs},children:(i,x)=>t(V,{obj:i,get index(){return x()}})})]}})};export{Z as default};
