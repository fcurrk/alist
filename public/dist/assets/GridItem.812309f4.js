import{e as t,ac as g,am as h,f as b,g as d,aG as f,a0 as j,H as x,aF as w,aI as $,ct as n,ao as k,al as v,S as l,bI as C,aj as I,a5 as y}from"./index.81d39995.js";import{b as M}from"./Folder.364d85a6.js";import{u as S}from"./index.298520c2.js";import{d as O}from"./useUtil.463d9475.js";import{p as P}from"./index.ea6a88bc.js";import{I as z}from"./ImageWithError.c90ff3ef.js";import{g as A,O as E}from"./icon.1bc95e8a.js";import{M as G}from"./Layout.5989c7a2.js";const F=e=>{const{isHide:s}=O();if(s(e.obj))return null;const{setPathAs:i}=S(),r=t(h,{get color(){return g()},boxSize:"$12",get as(){return A(e.obj)}}),[c,o]=b(!1),u=d(()=>f()&&(c()||e.obj.selected)),{show:m}=M({id:1});return t(G.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:P,get href(){return e.obj.name},onMouseEnter:()=>{o(!0),i(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{o(!1)},onContextMenu:a=>{w(()=>{$(!1),n(e.index,!0,!0)}),m(a,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":a=>{e.obj.type===E.IMAGE&&(a.stopPropagation(),a.preventDefault(),v.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(C,{pos:"absolute",left:"$1",top:"$1","on:click":a=>{a.stopPropagation()},get checked(){return e.obj.selected},onChange:a=>{n(e.index,a.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:r,get children(){return t(z,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(I,{size:"lg"})},fallbackErr:r,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(y,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})};export{F as G};