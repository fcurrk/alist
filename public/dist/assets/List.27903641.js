import{bG as p,b as v,e as n,ad as g,K as w,aK as d,af as A,cT as b,r as j,aM as k,S as y,ax as I,am as M,aw as O,ae as a,c4 as P,cn as z,ac as L,l as _,a as D,k as x,w as K,cU as W,cV as B,cW as E,D as f,E as T,a0 as H,a3 as F}from"./index.04cdbec3.js";import{b as G}from"./Folder.29067581.js";import{u as R}from"./index.ad419a05.js";import{q as U}from"./index.8d8d7edf.js";import{g as V,O as q}from"./icon.aa3285ca.js";import{u as J,I as S,a as $}from"./helper.49587033.js";import"./Layout.c213b700.js";import"./index.f0b8f956.js";import"./FolderTree.a246579e.js";import"./video_box.e1ccc4ca.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.726ae46c.js";import"./index.26ce776b.js";import"./index.4cc3a951.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],N=e=>{const{isHide:o}=p();if(o(e.obj))return null;const{setPathAs:h}=R(),{show:u}=G({id:1}),{pushHref:s,to:i}=v(),{isMouseSupported:l}=$(),m=J(),c=()=>_.list_item_filename_overflow;return n(L.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(g,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:U,get href(){return e.obj.name},get cursor(){return!l()&&(!d()||m())?"pointer":"default"},get bgColor(){return A(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":t=>{!l()||t.ctrlKey||t.metaKey||t.shiftKey||i(s(e.obj.name))},"on:click":t=>{if(l())return t.preventDefault();if(!!d()){if(t.preventDefault(),m()){i(s(e.obj.name));return}b(e.index,!e.obj.selected)}},onMouseEnter:()=>{h(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{j(()=>{k(!1),b(e.index,!0,!0)}),u(t,{props:e.obj})},get children(){return[n(g,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[n(y,{get when(){return d()},get children(){return n(S,{"on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{b(e.index,t.target.checked)}})}}),n(I,{class:"icon",boxSize:"$6",get color(){return M()},get as(){return V(e.obj)},mr:"$1","on:click":t=>{e.obj.type===q.IMAGE&&(t.stopPropagation(),t.preventDefault(),O.emit("gallery",e.obj.name))}}),n(a,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:c()==="multi_line"?"unset":"nowrap","overflow-x":c()==="scrollable"?"auto":"hidden",textOverflow:c()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(a,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return P(e.obj.size)}}),n(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return z(e.obj.modified)}})]}})}})},ue=()=>{const e=D(),[o,h]=x(),[u,s]=x(!1);K(()=>{o()&&W(o(),u())});const i=t=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:t.textAlign,cursor:"pointer",onClick:()=>{t.name===o()?s(!u()):j(()=>{h(t.name),s(!1)})}}),{isMouseSupported:l,registerSelectContainer:m,captureContentMenu:c}=$();return m(),n(F,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":l()}},class:"list",w:"$full",spacing:"$1",get children(){return[n(g,{class:"title",w:"$full",p:"$2",get children(){return[n(g,{get w(){return r[0].w},spacing:"$1",get children(){return[n(y,{get when(){return d()},get children(){return n(S,{get checked(){return B()},get indeterminate(){return E()},onChange:t=>{k(t.target.checked)}})}}),n(a,f(()=>i(r[0]),{get children(){return e(`home.obj.${r[0].name}`)}}))]}}),n(a,f({get w(){return r[1].w}},()=>i(r[1]),{get children(){return e(`home.obj.${r[1].name}`)}})),n(a,f({get w(){return r[2].w}},()=>i(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${r[2].name}`)}}))]}}),n(T,{get each(){return H.objs},children:(t,C)=>n(N,{obj:t,get index(){return C()}})})]}})};export{ue as default};
