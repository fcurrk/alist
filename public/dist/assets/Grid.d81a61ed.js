import{f as t,ai as g,ap as h,q as b,C as d,aI as f,a3 as j,K as x,aH as w,aK as $,cj as i,al as k,aw as C,x as l,bq as I,af as p,a9 as v,E as y,o as M,bZ as S}from"./index.2d34cc29.js";import{I as E}from"./Folder.8ae66e7c.js";import{b as O,M as P}from"./Layout.4d812594.js";import{c as z}from"./useUtil.774ea632.js";import{I as A}from"./index.65fc1dc0.js";import{I as G}from"./ImageWithError.52797c1a.js";import{O as H}from"./obj.fca5b341.js";import{g as L}from"./icon.0187a105.js";import"./useT.03a179a0.js";import"./useTitle.d69ebbfc.js";import"./api.b661d2e6.js";import"./index.3bdbbc53.js";import"./FolderTree.6d107bf4.js";const W=e=>{const{isHide:a}=z();if(a(e.obj))return null;const{setPathAs:s}=O(),o=t(h,{get color(){return g()},boxSize:"$12",get as(){return L(e.obj)}}),[c,n]=b(!1),u=d(()=>f()&&(c()||e.obj.selected)),{show:m}=E({id:1});return t(P.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{width:"100%"},get children(){return t(j,{class:"grid-item",w:"$full",p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",get _hover(){return{transform:"scale(1.06)",bgColor:x()}},as:A,get href(){return e.obj.name},onMouseEnter:()=>{n(!0),s(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{n(!1)},onContextMenu:r=>{w(()=>{$(!1),i(e.index,!0,!0)}),m(r,{props:e.obj})},get children(){return[t(k,{class:"item-thumbnail",h:"70px",w:"$full","on:click":r=>{e.obj.type===H.IMAGE&&(r.stopPropagation(),r.preventDefault(),C.emit("gallery",e.obj.name))},pos:"relative",get children(){return[t(l,{get when(){return u()},get children(){return t(I,{pos:"absolute",left:"$1",top:"$1","on:click":r=>{r.stopPropagation()},get checked(){return e.obj.selected},onChange:r=>{i(e.index,r.target.checked)}})}}),t(l,{get when(){return e.obj.thumb},fallback:o,get children(){return t(G,{maxH:"$full",maxW:"$full",rounded:"$lg",shadow:"$md",get fallback(){return t(p,{size:"lg"})},fallbackErr:o,get src(){return e.obj.thumb},loading:"lazy"})}})]}}),t(v,{css:{whiteSpace:"nowrap",textOverflow:"ellipsis"},w:"$full",overflow:"hidden",textAlign:"center",fontSize:"$sm",get title(){return e.obj.name},get children(){return e.obj.name}})]}})}})},R=()=>t(S,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",get children(){return t(y,{get each(){return M.objs},children:(e,a)=>t(W,{obj:e,get index(){return a()}})})}});export{R as default};