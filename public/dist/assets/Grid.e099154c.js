import{h as t,l as n,G as p,a1 as a,cX as s}from"./index.d60e5180.js";import{G as u}from"./GridItem.d36f8272.js";import"./Folder.9ffb034a.js";import{a as c}from"./helper.0973453a.js";import"./index.c04fdc74.js";import"./index.bf87f149.js";import"./ImageWithError.57c54ec2.js";import"./icon.8d2beace.js";import"./Layout.a6c65af0.js";import"./useTitle.c68f62a0.js";import"./FolderTree.99d7b4f4.js";import"./index.8195b7e7.js";import"./video_box.85342ca7.js";import"./_commonjs-dynamic-modules.30ae7933.js";import"./Paginator.bb802cc7.js";import"./index.c2f74892.js";const v=()=>{const{isMouseSupported:r,registerSelectContainer:e,captureContentMenu:o}=c();return e(),t(s,{"oncapture:contextmenu":o,get classList(){return{"viselect-container":r()}},w:"$full",gap:"$1",get templateColumns(){return`repeat(auto-fill, minmax(${parseInt(n.grid_item_size)+20}px,1fr))`},get children(){return t(p,{get each(){return a.objs},children:(i,m)=>t(u,{obj:i,get index(){return m()}})})}})};export{v as default};