import{bJ as C,b as p,h as n,ae as g,L as w,aO as m,ag as A,ds as b,t as j,aQ as k,S as y,aA as I,an as O,az as M,af as a,ck as z,cR as L,ad as P,l as _,a as B,m as x,x as D,dt as E,du as W,dv as H,E as f,G as K,a1 as R,a4 as T}from"./index.317f3787.js";import{b as F}from"./Folder.41f1ff60.js";import{u as G}from"./index.2c3478e3.js";import{q}from"./index.52c7a790.js";import{g as J,O as Q}from"./icon.061291bf.js";import{u as U,I as S,a as $}from"./helper.caa1b0c3.js";import"./Layout.cdfdd7cb.js";import"./useTitle.6b655623.js";import"./FolderTree.f3326cf3.js";import"./video_box.03b3fe66.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.f7c288d5.js";import"./index.be497c7d.js";import"./index.f3d7da1a.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],V=e=>{const{isHide:s}=C();if(s(e.obj))return null;const{setPathAs:h}=G(),{show:u}=F({id:1}),{pushHref:o,to:i}=p(),{isMouseSupported:l}=$(),d=U(),c=()=>_.list_item_filename_overflow;return n(P.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return n(g,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:q,get href(){return e.obj.name},get cursor(){return!l()&&(!m()||d())?"pointer":"default"},get bgColor(){return A(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":t=>{!l()||t.ctrlKey||t.metaKey||t.shiftKey||i(o(e.obj.name))},"on:click":t=>{if(l())return t.preventDefault();if(!!m()){if(t.preventDefault(),d()){i(o(e.obj.name));return}b(e.index,!e.obj.selected)}},onMouseEnter:()=>{h(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{j(()=>{k(!1),b(e.index,!0,!0)}),u(t,{props:e.obj})},get children(){return[n(g,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[n(y,{get when(){return m()},get children(){return n(S,{"on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{b(e.index,t.target.checked)}})}}),n(I,{class:"icon",boxSize:"$6",get color(){return O()},get as(){return J(e.obj)},mr:"$1","on:click":t=>{e.obj.type===Q.IMAGE&&(t.stopPropagation(),t.preventDefault(),M.emit("gallery",e.obj.name))}}),n(a,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:c()==="multi_line"?"unset":"nowrap","overflow-x":c()==="scrollable"?"auto":"hidden",textOverflow:c()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),n(a,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return z(e.obj.size)}}),n(a,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return L(e.obj.modified)}})]}})}})},ue=()=>{const e=B(),[s,h]=x(),[u,o]=x(!1);D(()=>{s()&&E(s(),u())});const i=t=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:t.textAlign,cursor:"pointer",onClick:()=>{t.name===s()?o(!u()):j(()=>{h(t.name),o(!1)})}}),{isMouseSupported:l,registerSelectContainer:d,captureContentMenu:c}=$();return d(),n(T,{"oncapture:contextmenu":c,get classList(){return{"viselect-container":l()}},class:"list",w:"$full",spacing:"$1",get children(){return[n(g,{class:"title",w:"$full",p:"$2",get children(){return[n(g,{get w(){return r[0].w},spacing:"$1",get children(){return[n(y,{get when(){return m()},get children(){return n(S,{get checked(){return W()},get indeterminate(){return H()},onChange:t=>{k(t.target.checked)}})}}),n(a,f(()=>i(r[0]),{get children(){return e(`home.obj.${r[0].name}`)}}))]}}),n(a,f({get w(){return r[1].w}},()=>i(r[1]),{get children(){return e(`home.obj.${r[1].name}`)}})),n(a,f({get w(){return r[2].w}},()=>i(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return e(`home.obj.${r[2].name}`)}}))]}}),n(K,{get each(){return R.objs},children:(t,v)=>n(V,{obj:t,get index(){return v()}})})]}})};export{ue as default};