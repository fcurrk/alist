import{f as t,a8 as l,K as $,aE as h,aH as b,ch as m,x as f,aF as w,bq as j,al as k,bb as y,as as A,bc as a,bu as p,bB as C,q as d,X as S,ci as v,cj as I,ck as O,m as u,E as P,o as z,a3 as M}from"./index.eb38676d.js";import{u as E}from"./useT.450d3135.js";import{I as B}from"./Folder.7ab99070.js";import{b as H,M as L}from"./Layout.9408c0f5.js";import{c as F}from"./useUtil.340acbc6.js";import{H as T}from"./index.72ad7f28.js";import{O as q}from"./obj.fca5b341.js";import{g as D}from"./icon.ce9f84b3.js";import"./useTitle.008dbc5d.js";import"./api.1f894f0e.js";import"./index.2fad6525.js";import"./FolderTree.fcdb8f42.js";const n=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],W=e=>{const{isHide:o}=F();if(o(e.obj))return null;const{setPathAs:c}=H(),{show:s}=B({id:1});return t(L.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(l,{class:"list-item",w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:$()}},as:T,get href(){return e.obj.name},onMouseEnter:()=>{c(e.obj.name,e.obj.is_dir,!0)},onContextMenu:r=>{h(()=>{b(!1),m(e.index,!0,!0)}),s(r,{props:e.obj})},get children(){return[t(l,{class:"name-box",spacing:"$1",get w(){return n[0].w},get children(){return[t(f,{get when(){return w()},get children(){return t(j,{"on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{m(e.index,r.target.checked)}})}}),t(k,{class:"icon",boxSize:"$6",get color(){return y()},get as(){return D(e.obj)},mr:"$1","on:click":r=>{e.obj.type===q.IMAGE&&(r.stopPropagation(),r.preventDefault(),A.emit("gallery",e.obj.name))}}),t(a,{class:"name",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(a,{class:"size",get w(){return n[1].w},get textAlign(){return n[1].textAlign},get children(){return p(e.obj.size)}}),t(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return n[2].w},get textAlign(){return n[2].textAlign},get children(){return C(e.obj.modified)}})]}})}})},ee=()=>{const e=E(),[o,c]=d(),[s,r]=d(!1);S(()=>{o()&&v(o(),s())});const g=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===o()?r(!s()):h(()=>{c(i.name),r(!1)})}});return t(M,{class:"list",w:"$full",spacing:"$1",get children(){return[t(l,{class:"title",w:"$full",p:"$2",get children(){return[t(l,{get w(){return n[0].w},spacing:"$1",get children(){return[t(f,{get when(){return w()},get children(){return t(j,{get checked(){return I()},get indeterminate(){return O()},onChange:i=>{b(i.target.checked)}})}}),t(a,u(()=>g(n[0]),{get children(){return e(`home.obj.${n[0].name}`)}}))]}}),t(a,u({get w(){return n[1].w}},()=>g(n[1]),{get children(){return e(`home.obj.${n[1].name}`)}})),t(a,u({get w(){return n[2].w}},()=>g(n[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${n[2].name}`)}}))]}}),t(P,{get each(){return z.objs},children:(i,x)=>t(W,{obj:i,get index(){return x()}})})]}})};export{ee as default};
