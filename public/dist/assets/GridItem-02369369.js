import{d4 as j,E as x,h as r,as as k,l as c,aF as y,b as $,a8 as w,N as d,ac as C,dz as n,t as I,aJ as v,aE as S,S as g,aS as z,aC as E,a7 as M,ak as K}from"./index-b1da42da.js";import{b as P}from"./style-75629dc4.js";import{x as W}from"./index-1365e322.js";import{I as _}from"./ImageWithError-1b7d0675.js";import{g as O,O as m}from"./icon-99ae5100.js";import{I as A,u as G}from"./helper-8df1f3cf.js";const J=e=>{const{isHide:b}=j();if(b(e.obj))return null;const{setPathAs:h}=x(),i=r(y,{get color(){return k()},get boxSize(){return`${parseInt(c.grid_item_size)-30}px`},get as(){return O(e.obj)}}),{show:f}=P({id:1}),{pushHref:o,to:l}=$(),{openWithDoubleClick:a,toggleWithClick:s,restoreSelectionCache:u}=G();return r(K.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return r(w,{get classList(){return{selected:!!e.obj.selected}},class:"grid-item viselect-item",get"data-index"(){return e.index},w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:d()}},as:W,get href(){return e.obj.name},get cursor(){return a()||s()?"default":"pointer"},get bgColor(){return C(()=>!!e.obj.selected,!0)()?d():void 0},"on:dblclick":()=>{a()&&(n(e.index,!0,!0),l(o(e.obj.name)))},"on:click":t=>{if(t.preventDefault(),!a()&&!(t.ctrlKey||t.metaKey||t.shiftKey)&&u()){if(s())return n(e.index,!e.obj.selected);l(o(e.obj.name))}},onMouseEnter:()=>{h(e.obj.name,e.obj.is_dir,!0)},onContextMenu:t=>{I(()=>{n(e.index,!0,!0)}),f(t,{props:e.obj})},get children(){return[r(v,{class:"item-thumbnail",get h(){return`${parseInt(c.grid_item_size)}px`},w:"$full",get cursor(){return e.obj.type!==m.IMAGE?"inherit":"pointer"},"on:click":t=>{e.obj.type===m.IMAGE&&(t.ctrlKey||t.metaKey||t.shiftKey||u()&&(S.emit("gallery",e.obj.name),t.preventDefault(),t.stopPropagation()))},pos:"relative",get children(){return[r(g,{get when(){return z()},get children(){return r(A,{pos:"absolute",left:"$1",top:"$1","on:mousedown":t=>{t.stopPropagation()},"on:click":t=>{t.stopPropagation()},get checked(){return e.obj.selected},onChange:t=>{n(e.index,t.target.checked)}})}}),r(g,{get when(){return e.obj.thumb},fallback:i,get children(){return r(_,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return r(E,{size:"lg"})},fallbackErr:i,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),r(M,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{J as G};
