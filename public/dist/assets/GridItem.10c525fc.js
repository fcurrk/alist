import{bG as $,e as r,am as v,l as d,ax as y,k as I,j as C,aK as a,b as M,a3 as S,K as m,af as O,cT as i,r as z,aM as A,aA as P,aw as b,S as g,c0 as _,au as E,ae as G,ac as K}from"./index.2ee5c569.js";import{b as W}from"./Folder.ee3da21b.js";import{u as D}from"./index.d902891c.js";import{q as H}from"./index.934607ad.js";import{I as L}from"./ImageWithError.e68f4ab2.js";import{g as T,O as f}from"./icon.746f19b5.js";import{u as q,a as B}from"./helper.acf4200c.js";const X=e=>{const{isHide:h}=$();if(h(e.obj))return null;const{setPathAs:j}=D(),l=r(y,{get color(){return v()},get boxSize(){return`${parseInt(d.grid_item_size)-30}px`},get as(){return T(e.obj)}}),[x,s]=I(!1),k=C(()=>a()&&(x()||e.obj.selected)),{show:w}=W({id:1}),{pushHref:c,to:u}=M(),{isMouseSupported:n}=B(),o=q();return r(K.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(S,{get classList(){return{selected:!!e.obj.selected}},class:"grid-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:m()}},as:H,get href(){return e.obj.name},get cursor(){return!n()&&(!a()||o())?"pointer":"default"},get bgColor(){return O(()=>!!e.obj.selected,!0)()?m():void 0},"on:dblclick":t=>{!n()||t.ctrlKey||t.metaKey||t.shiftKey||u(c(e.obj.name))},"on:click":t=>{if(n())return t.preventDefault();if(!!a()){if(t.preventDefault(),o()){u(c(e.obj.name));return}i(e.index,!e.obj.selected)}},onMouseEnter:()=>{s(!0),j(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{s(!1)},onContextMenu:t=>{z(()=>{A(!1),i(e.index,!0,!0)}),w(t,{props:e.obj})},get children(){return[r(P,{class:"item-thumbnail",get h(){return`${parseInt(d.grid_item_size)}px`},w:"$full","on:dblclick":t=>{!n()||e.obj.type===f.IMAGE&&(t.stopPropagation(),t.preventDefault(),b.emit("gallery",e.obj.name))},"on:click":t=>{n()||a()&&!o()||e.obj.type===f.IMAGE&&(t.stopPropagation(),t.preventDefault(),b.emit("gallery",e.obj.name))},pos:"relative",get children(){return[r(g,{get when(){return k()},get children(){return r(_,{pos:"absolute",left:"$1",top:"$1","on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{i(e.index,t.target.checked)}})}}),r(g,{get when(){return e.obj.thumb},fallback:l,get children(){return r(L,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(E,{size:"lg"})},fallbackErr:l,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),r(G,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{X as G};
