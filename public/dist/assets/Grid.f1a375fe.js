import{f as t,bd as g,ao as b,q as d,C as h,aH as f,a3 as j,K as x,aG as $,aJ as w,cj as i,ak as k,av as C,x as l,bq as v,af as I,a9 as p,E as y,o as M,bZ as S}from"./index.d3f6491e.js";import{I as E}from"./Folder.9ea8ed61.js";import{b as G,M as O}from"./Layout.d90157a5.js";import{c as P}from"./useUtil.c5d09d43.js";import{I as z}from"./index.db3f03ae.js";import{I as A}from"./ImageWithError.102b4e61.js";import{O as H}from"./obj.fca5b341.js";import{g as L}from"./icon.13b7ecda.js";import"./useT.55cd4d42.js";import"./useTitle.37b85ae7.js";import"./api.2484b6d6.js";import"./index.224ec239.js";import"./FolderTree.14ca198b.js";const W=e=>{const{isHide:a}=P();if(a(e.obj))return null;const{setPathAs:s}=G(),o=t(b,{get color(){return g()},boxSize:"$12",get as(){return L(e.obj)}}),[c,n]=d(!1),u=h(()=>f()&&(c()||e.obj.selected)),{show:m}=E({id:1});return t(O.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:z,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),s(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:r=>{$(()=>{w(!1),i(e.index,!0,!0)}),m(r,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":r=>{e.obj.type===H.IMAGE&&(r.stopPropagation(),r.preventDefault(),C.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(v,{pos:"absolute",left:"$1",top:"$1","on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{i(e.index,r.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:o,get children(){return t(A,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(I,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(p,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})},R=()=>t(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return t(y,{get each(){return M.objs},children:(e,a)=>t(W,{obj:e,get index(){return a()}})})}});export{R as default};
