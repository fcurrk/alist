import{bJ as $,h as r,an as v,l as d,aA as w,m as y,k as C,aO as a,b as M,a4 as S,L as m,ag as O,dt as i,t as z,aQ as A,aE as E,az as g,S as b,ax as P,af as _,ad as L}from"./index.9b78fa9f.js";import{b as W}from"./Folder.f8971665.js";import{u as D}from"./index.20f512e4.js";import{q as G}from"./index.1bbe8a05.js";import{I as H}from"./ImageWithError.bf9b5dfc.js";import{g as K,O as f}from"./icon.14a6cef7.js";import{u as T,I as q,a as B}from"./helper.57e497ff.js";const X=e=>{const{isHide:h}=$();if(h(e.obj))return null;const{setPathAs:j}=D(),l=r(w,{get color(){return v()},get boxSize(){return`${parseInt(d.grid_item_size)-30}px`},get as(){return K(e.obj)}}),[x,s]=y(!1),k=C(()=>a()&&(x()||e.obj.selected)),{show:I}=W({id:1}),{pushHref:u,to:c}=M(),{isMouseSupported:n}=B(),o=T();return r(L.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(S,{get classList(){return{selected:!!e.obj.selected}},class:"grid-item viselect-item",get["data-index"](){return e.index},w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:m()}},as:G,get href(){return e.obj.name},get cursor(){return!n()&&(!a()||o())?"pointer":"default"},get bgColor(){return O(()=>!!e.obj.selected,!0)()?m():void 0},"on:dblclick":t=>{!n()||t.ctrlKey||t.metaKey||t.shiftKey||c(u(e.obj.name))},"on:click":t=>{if(n())return t.preventDefault();if(!!a()){if(t.preventDefault(),o()){c(u(e.obj.name));return}i(e.index,!e.obj.selected)}},onMouseEnter:()=>{s(!0),j(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{s(!1)},onContextMenu:t=>{z(()=>{A(!1),i(e.index,!0,!0)}),I(t,{props:e.obj})},get children(){return[r(E,{class:"item-thumbnail",get h(){return`${parseInt(d.grid_item_size)}px`},w:"$full","on:dblclick":t=>{!n()||e.obj.type===f.IMAGE&&(t.stopPropagation(),t.preventDefault(),g.emit("gallery",e.obj.name))},"on:click":t=>{n()||a()&&!o()||e.obj.type===f.IMAGE&&(t.stopPropagation(),t.preventDefault(),g.emit("gallery",e.obj.name))},pos:"relative",get children(){return[r(b,{get when(){return k()},get children(){return r(q,{pos:"absolute",left:"$1",top:"$1","on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{i(e.index,t.target.checked)}})}}),r(b,{get when(){return e.obj.thumb},fallback:l,get children(){return r(H,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(P,{size:"lg"})},fallbackErr:l,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),r(_,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{X as G};
