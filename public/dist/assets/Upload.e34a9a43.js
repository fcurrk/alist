import{a as e,h as o}from"./index.317f3787.js";import{b as r}from"./useTitle.6b655623.js";import{b as p,T as s}from"./helper.fd649f53.js";import"./Paginator.f7c288d5.js";import"./index.52c7a790.js";const d=()=>{const a=e();return r("manage.sidemenu.upload"),o(s,{type:"upload",get nameAnalyzer(){return{regex:/^upload (.+) to \[(.+)]\((.+)\)$/,title:t=>t[1],attrs:{[a("tasks.attr.upload.path")]:t=>p(t[2],t[3])}}}})};export{d as default};