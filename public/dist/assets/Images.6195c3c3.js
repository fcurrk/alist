import{bJ as y,h as t,an as b,aA as C,m as _,k as $,aO as g,a5 as v,a4 as p,t as M,aQ as S,dl as m,aE as L,S as l,ax as O,az as f,ad as E,a as G,G as x,a1 as j,cX as z,l as w,ay as A,bQ as W}from"./index.6eeaa492.js";import{b as F}from"./Folder.6fe0c05a.js";import{u as H}from"./index.731a776b.js";import{I as K}from"./ImageWithError.067cecea.js";import{O as P,g as Q}from"./icon.e9012989.js";import{u as T,I as B,a as k}from"./helper.d2ce183a.js";import{G as J}from"./GridItem.3d6cacfc.js";import"./Layout.d010f659.js";import"./useTitle.87daeee9.js";import"./FolderTree.74fdb5ad.js";import"./index.e0f4bc3c.js";import"./video_box.c33a05e8.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.0df53da7.js";import"./index.6ff7d5f3.js";import"./index.ae2a924b.js";const U=e=>{const{isHide:c}=y();if(c(e.obj)||e.obj.type!==P.IMAGE)return null;const{setPathAs:o}=H(),u=t(C,{get color(){return b()},boxSize:"$12",get as(){return Q(e.obj)}}),[d,i]=_(!1),r=$(()=>g()&&(d()||e.obj.selected)),{show:a}=F({id:1}),{rawLink:I}=v(),{isMouseSupported:s}=k(),h=T();return t(E.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.2},style:{"flex-grow":1},get children(){return t(p,{w:"$full",get classList(){return{selected:!!e.obj.selected}},class:"image-item viselect-item",get["data-index"](){return e.index},p:"$1",spacing:"$1",rounded:"$lg",transition:"all 0.3s",border:"2px solid transparent",get _hover(){return{border:`2px solid ${b()}`}},onMouseEnter:()=>{i(!0),o(e.obj.name,e.obj.is_dir,!0)},onMouseLeave:()=>{i(!1)},onContextMenu:n=>{M(()=>{S(!1),m(e.index,!0,!0)}),a(n,{props:e.obj})},get children(){return t(L,{w:"$full",pos:"relative",get children(){return[t(l,{get when(){return r()||s()&&e.obj.selected},get children(){return t(B,{pos:"absolute",left:"$1",top:"$1",get checked(){return e.obj.selected},onChange:n=>{m(e.index,n.target.checked)}})}}),t(K,{h:"150px",w:"$full",objectFit:"cover",rounded:"$lg",shadow:"$md",get fallback(){return t(O,{size:"lg"})},fallbackErr:u,get src(){return I(e.obj)},loading:"lazy",get cursor(){return!s()&&(!g()||h())?"pointer":"default"},"on:dblclick":n=>{!s()||n.ctrlKey||n.metaKey||n.shiftKey||f.emit("gallery",e.obj.name)},"on:click":()=>{if(!s()){if(!g()||h()){f.emit("gallery",e.obj.name);return}m(e.index,!e.obj.selected)}}})]}})}})}})},le=e=>{const c=G(),o=$(()=>t(z,{w:"$full",gap:"$1",templateColumns:"repeat(auto-fill, minmax(100px,1fr))",class:"image-folders",get children(){return t(x,{get each(){return j.objs.filter(r=>r.is_dir)},children:(r,a)=>t(J,{obj:r,get index(){return a()}})})}})),{isMouseSupported:u,registerSelectContainer:d,captureContentMenu:i}=k();return d(),t(p,{"oncapture:contextmenu":i,get classList(){return{"viselect-container":u()}},spacing:"$2",w:"$full",get children(){return[t(l,{get when(){return w.show_folder_in_image_view==="top"},get children(){return o()}}),t(l,{get when(){return e.images.length>0},get fallback(){return t(A,{m:"$2",get children(){return c("home.no_images")}})},get children(){return t(W,{w:"$full",gap:"$1",flexWrap:"wrap",class:"image-images",get children(){return t(x,{get each(){return j.objs},children:(r,a)=>t(U,{obj:r,get index(){return a()}})})}})}}),t(l,{get when(){return w.show_folder_in_image_view==="bottom"},get children(){return o()}})]}})};export{le as default};
