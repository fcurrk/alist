import{e as t,l as n,E as p,a0 as a,cu as s}from"./index.d377aace.js";import{G as u}from"./GridItem.d138521c.js";import"./Folder.8a3267d7.js";import{a as c}from"./helper.08720e5c.js";import"./index.1d255120.js";import"./index.699a0fff.js";import"./ImageWithError.8e441c65.js";import"./icon.3476cfc3.js";import"./index.52a77303.js";import"./Layout.a9c42470.js";import"./FolderTree.b9c901fd.js";import"./index.f7d2eaf7.js";import"./video_box.9265fd2b.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.ac01b827.js";import"./index.6cd87d47.js";const v=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=c();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(n.grid_item_size)+20}px,1fr))`},get children(){return t(p,{get each(){return a.objs},children:(i,m)=>t(u,{obj:i,get index(){return m()}})})}})};export{v as default};
