import{bG as y,e as t,am as b,ax as v,k as C,j as $,aK as d,a4 as M,a3 as p,r as _,aM as S,cT as m,aA as L,S as l,au as O,aw as f,ac as E,a as G,E as x,a0 as j,cu as A,l as w,av as K,bN as W}from"./index.04cdbec3.js";import{b as z}from"./Folder.29067581.js";import{u as F}from"./index.ad419a05.js";import{I as H}from"./ImageWithError.782c5fed.js";import{O as T,g as P}from"./icon.aa3285ca.js";import{u as B,I as N,a as k}from"./helper.49587033.js";import{G as U}from"./GridItem.c57b5226.js";import"./Layout.c213b700.js";import"./index.f0b8f956.js";import"./FolderTree.a246579e.js";import"./index.8d8d7edf.js";import"./video_box.e1ccc4ca.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.726ae46c.js";import"./index.26ce776b.js";import"./index.4cc3a951.js";const V=e=>{const{isHide:c}=y();if(c(e.obj)||e.obj.type!==T.IMAGE)return null;const{setPathAs:o}=F(),u=t(v,{get color(){return b()},boxSize:"$12",get as(){return P(e.obj)}}),[g,i]=C(!1),r=$(()=>d()&&(g()||e.obj.selected)),{show:a}=z({id:1}),{rawLink:I}=M(),{isMouseSupported:s}=k(),h=B();return t(E.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(p,{w:"$full",get classList(){return{selected:!!e.obj.selected}},class:"image-item viselect-item",get["data-index"](){return e.index},p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${b()}`}},onMouseEnter:()=>{i(!0),o(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{i(!1)},onContextMenu:n=>{_(()=>{S(!1),m(e.index,!0,!0)}),a(n,{props:e.obj})},get children(){return t(L,{w:"$full",pos:"relative",get children(){return[t(l,{get when(){return r()||s()&&e.obj.selected},get children(){return t(N,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:n=>{m(e.index,n.target.checked)}})}}),t(H,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(O,{size:"lg"})},fallbackErr:u,get src(){return I(e.obj)},loading:"lazy",get cursor(){return!s()&&(!d()||h())?"pointer":"default"},"on:dblclick":n=>{!s()||n.ctrlKey||n.metaKey||n.shiftKey||f.emit("gallery",e.obj.name)},"on:click":()=>{if(!s()){if(!d()||h()){f.emit("gallery",e.obj.name);return}m(e.index,!e.obj.selected)}}})]}})}})}})},le=e=>{const c=G(),o=$(()=>t(A,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return t(x,{get each(){return j.objs.filter(r=>r.is_dir)},children:(r,a)=>t(U,{obj:r,get index(){return a()}})})}})),{isMouseSupported:u,registerSelectContainer:g,captureContentMenu:i}=k();return g(),t(p,{"oncapture:contextmenu":i,get classList(){return{"viselect-container":u()}},spacing:"$2",w:"$full",get children(){return[t(l,{get when(){return w.show_folder_in_image_view==="top"},get children(){return o()}}),t(l,{get when(){return e.images.length>0},get fallback(){return t(K,{m:"$2",get children(){return c("home.no_images")}})},get children(){return t(W,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return t(x,{get each(){return j.objs},children:(r,a)=>t(V,{obj:r,get index(){return a()}})})}})}}),t(l,{get when(){return w.show_folder_in_image_view==="bottom"},get children(){return o()}})]}})};export{le as default};