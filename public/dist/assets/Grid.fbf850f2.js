import{j as t,ag as g,aq as b,r as h,C as d,aK as f,a3 as j,K as x,aJ as $,aM as w,cj as l,as as k,ap as C,y as i,bq as v,an as y,a9 as p,E as M,o as I,bZ as S}from"./index.98d565c5.js";import{b as E}from"./Folder.2908b6e8.js";import{a as O,M as P}from"./Layout.07afd86e.js";import{c as z}from"./useUtil.fe981c1a.js";import{U as A}from"./index.7f74676e.js";import{I as G}from"./ImageWithError.f66362af.js";import{g as L,O as H}from"./icon.29aece9e.js";import"./api.81b05302.js";import"./useTitle.56ba616f.js";import"./index.bfc00803.js";import"./FolderTree.e47abf36.js";const W=e=>{const{isHide:a}=z();if(a(e.obj))return null;const{setPathAs:s}=O(),o=t(b,{get color(){return g()},boxSize:"$12",get as(){return L(e.obj)}}),[c,n]=h(!1),u=d(()=>f()&&(c()||e.obj.selected)),{show:m}=E({id:1});return t(P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:A,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),s(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:r=>{$(()=>{w(!1),l(e.index,!0,!0)}),m(r,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":r=>{e.obj.type===H.IMAGE&&(r.stopPropagation(),r.preventDefault(),C.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(i,{get when(){return u()},get children(){return t(v,{pos:"absolute",left:"$1",top:"$1","on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{l(e.index,r.target.checked)}})}}),t(i,{get when(){return e.obj.thumb},fallback:o,get children(){return t(G,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(y,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})},N=()=>t(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return t(M,{get each(){return I.objs},children:(e,a)=>t(W,{obj:e,get index(){return a()}})})}});export{N as default};
