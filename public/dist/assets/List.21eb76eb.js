import{e as t,a4 as l,H as $,aF as h,aI as b,ct as m,S as f,aG as w,bI as j,am as k,ac as A,al as p,a5 as a,bM as y,c0 as C,u as S,f as d,h as v,cu as I,cv as M,cw as O,m as u,A as P,Y as z,a0 as L}from"./index.42b217bd.js";import{b as B}from"./Folder.361e0eda.js";import{u as E}from"./index.9060599b.js";import{d as F}from"./useUtil.78830227.js";import{p as H}from"./index.80cb3c89.js";import{g as T,O as D}from"./icon.8ab2abee.js";import{M as G}from"./Layout.edb22d1c.js";import"./video_box.22d9f9fd.js";import"./index.53c0b5e9.js";import"./Paginator.c4b4279d.js";import"./api.6d202122.js";import"./FolderTree.6e17c077.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],W=e=>{const{isHide:o}=F();if(o(e.obj))return null;const{setPathAs:c}=E(),{show:s}=B({id:1});return t(G.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:$()}},as:H,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),m(e.index,!0,!0)}),s(r,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{m(e.index,r.target.checked)}})}}),t(k,{class:"icon",boxSize:"$6",get color(){return A()},get as(){return T(e.obj)},mr:"$1","on:click":r=>{e.obj.type===D.IMAGE&&(r.stopPropagation(),r.preventDefault(),p.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return y(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return C(e.obj.modified)}})]}})}})},ee=()=>{const e=S(),[o,c]=d(),[s,r]=d(!1);v(()=>{o()&&I(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?r(!s()):h(()=>{c(i.name),r(!1)})}});return t(L,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return n[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return M()},get indeterminate(){return O()},onChange:i=>{b(i.target.checked)}})}}),t(a,u(()=>g(n[0]),{get children(){return e(`home.obj.${n[0].name}`)}}))]}}),t(a,u({get w(){return n[1].w}},()=>g(n[1]),{get children(){return e(`home.obj.${n[1].name}`)}})),t(a,u({get w(){return n[2].w}},()=>g(n[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${n[2].name}`)}}))]}}),t(P,{get each(){return z.objs},children:(i,x)=>t(W,{obj:i,get index(){return x()}})})]}})};export{ee as default};
