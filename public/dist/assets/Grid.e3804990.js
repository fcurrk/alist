import{h as t,l as n,G as p,a1 as a,d2 as s}from"./index.9b78fa9f.js";import{G as u}from"./GridItem.00de9d7d.js";import"./Folder.f8971665.js";import{a as l}from"./helper.57e497ff.js";import"./index.20f512e4.js";import"./index.1bbe8a05.js";import"./ImageWithError.bf9b5dfc.js";import"./icon.14a6cef7.js";import"./Layout.b7134346.js";import"./useTitle.3242060b.js";import"./FolderTree.b92c2ff2.js";import"./index.3cbf9a2f.js";import"./video_box.860170d2.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.93f7b371.js";import"./index.e76add6d.js";const v=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=l();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(n.grid_item_size)+20}px,1fr))`},get children(){return t(p,{get each(){return a.objs},children:(i,m)=>t(u,{obj:i,get index(){return m()}})})}})};export{v as default};