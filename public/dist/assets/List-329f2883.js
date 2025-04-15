import{d4 as M,E as _,b as I,h as t,al as m,N as w,ac as k,dz as g,t as y,S as C,aS as S,aF as P,as as z,aE as v,a7 as u,cl as L,cy as D,ak as E,l as K,a as T,m as j,x as B,dA as W,dB as H,aU as F,G as f,dC as G,H as p,a3 as R,a8 as U}from"./index-b1da42da.js";import{b as N}from"./style-75629dc4.js";import{x as V}from"./index-1365e322.js";import{g as q,O as x}from"./icon-99ae5100.js";import{I as $,u as A}from"./helper-8df1f3cf.js";const r=[{name:"name",textAlign:"left",w:{"@initial":"76%","@md":"50%"}},{name:"size",textAlign:"right",w:{"@initial":"24%","@md":"17%"}},{name:"modified",textAlign:"right",w:{"@initial":0,"@md":"33%"}}],J=e=>{const{isHide:c}=M();if(c(e.obj))return null;const{setPathAs:s}=_(),{show:d}=N({id:1}),{pushHref:a,to:o}=I(),{openWithDoubleClick:l,toggleWithClick:i,restoreSelectionCache:h}=A(),b=()=>K.list_item_filename_overflow;return t(E.div,{initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(m,{get classList(){return{selected:!!e.obj.selected}},class:"list-item viselect-item",get"data-index"(){return e.index},w:"$full",p:"$2",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.01)",bgColor:w()}},as:V,get href(){return e.obj.name},get cursor(){return l()||i()?"default":"pointer"},get bgColor(){return k(()=>!!e.obj.selected,!0)()?w():void 0},"on:dblclick":()=>{l()&&(g(e.index,!0,!0),o(a(e.obj.name)))},"on:click":n=>{if(n.preventDefault(),!l()&&!(n.ctrlKey||n.metaKey||n.shiftKey)&&h()){if(i())return g(e.index,!e.obj.selected);o(a(e.obj.name))}},onMouseEnter:()=>{s(e.obj.name,e.obj.is_dir,!0)},onContextMenu:n=>{y(()=>{g(e.index,!0,!0)}),d(n,{props:e.obj})},get children(){return[t(m,{class:"name-box",spacing:"$1",get w(){return r[0].w},get children(){return[t(C,{get when(){return S()},get children(){return t($,{"on:mousedown":n=>{n.stopPropagation()},"on:click":n=>{n.stopPropagation()},get checked(){return e.obj.selected},onChange:n=>{g(e.index,n.target.checked)}})}}),t(P,{class:"icon",boxSize:"$6",get color(){return z()},get as(){return q(e.obj)},mr:"$1",get cursor(){return e.obj.type!==x.IMAGE?"inherit":"pointer"},"on:click":n=>{e.obj.type===x.IMAGE&&(n.ctrlKey||n.metaKey||n.shiftKey||h()&&(v.emit("gallery",e.obj.name),n.preventDefault(),n.stopPropagation()))}}),t(u,{class:"name",get css(){return{wordBreak:"break-all",whiteSpace:b()==="multi_line"?"unset":"nowrap","overflow-x":b()==="scrollable"?"auto":"hidden",textOverflow:b()==="ellipsis"?"ellipsis":"unset","scrollbar-width":"none","&::-webkit-scrollbar":{display:"none"}}},get title(){return e.obj.name},get children(){return e.obj.name}})]}}),t(u,{class:"size",get w(){return r[1].w},get textAlign(){return r[1].textAlign},get children(){return L(e.obj.size)}}),t(u,{class:"modified",display:{"@initial":"none","@md":"inline"},get w(){return r[2].w},get textAlign(){return r[2].textAlign},get children(){return D(e.obj.modified)}})]}})}})},O=e=>{const c=T(),[s,d]=j(),[a,o]=j(!1);B(()=>{s()&&e.sortCallback(s(),a())});const l=i=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:i.textAlign,cursor:"pointer",onClick:()=>{i.name===s()?o(!a()):y(()=>{d(i.name),o(!1)})}});return t(m,{class:"title",w:"$full",p:"$2",get children(){return[t(m,{get w(){return r[0].w},spacing:"$1",get children(){return[t(C,{get when(){return k(()=>!e.disableCheckbox,!0)()&&S()},get children(){return t($,{get checked(){return W()},get indeterminate(){return H()},onChange:i=>{F(i.target.checked)}})}}),t(u,f(()=>l(r[0]),{get children(){return c(`home.obj.${r[0].name}`)}}))]}}),t(u,f({get w(){return r[1].w}},()=>l(r[1]),{get children(){return c(`home.obj.${r[1].name}`)}})),t(u,f({get w(){return r[2].w}},()=>l(r[2]),{display:{"@initial":"none","@md":"inline"},get children(){return c(`home.obj.${r[2].name}`)}}))]}})},Q=()=>{const e=a=>{var l;const o=Array.from(((l=a.dataTransfer)==null?void 0:l.items)??[]);for(let i=0;i<o.length;i++)if(o[i].kind==="file"){v.emit("tool","upload"),a.preventDefault();break}},{isMouseSupported:c,registerSelectContainer:s,captureContentMenu:d}=A();return s(),t(U,{onDragOver:e,"oncapture:contextmenu":d,class:"list viselect-container",w:"$full",spacing:"$1",get children(){return[t(O,{sortCallback:G}),t(p,{get each(){return R.objs},children:(a,o)=>t(J,{obj:a,get index(){return o()}})})]}})},ne=Object.freeze(Object.defineProperty({__proto__:null,ListTitle:O,default:Q},Symbol.toStringTag,{value:"Module"}));export{O as L,ne as a,r as c};
