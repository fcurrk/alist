import{j as t,E as z,a3 as B,C as V,ab as b,ac as $,bf as u,a1 as A,a0 as k,u as p,d as g,L as y,K as C,y as _,aq as h,ao as d,r as x,bg as E,a8 as m,a5 as s,at as D,U as n,V as r,bh as M,bi as U,aA as W,W as L,af as T,bj as H,bk as Y,n as j,b2 as N,aW as F,aX as q,aY as X,aZ as J,a_ as K,as as f,b0 as w,b1 as R,bl as Q,bm as Z,bn as G}from"./index.3ad216ba.js";import{b as e1,a as t1}from"./useTitle.c45be8d3.js";import{A as n1,f as r1,g as o1,h as a1,i as i1,j as s1,k as c1,l as l1,m as m1,n as u1,o as g1,p as d1,q as _1,r as h1,s as p1,b as E1,t as f1,u as I1,v as v1}from"./index.0b844aac.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.GITHUB=7]="GITHUB",e))(i||{}),b1=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(b1||{});const $1=e=>{const o=V(()=>{if(!b.is_admin($())){if(e.role===void 0)return!1;if(e.role===u.GENERAL&&!b.is_general($()))return!1}return!0});return t(k,{get fallback(){return t(A1,e)},get children(){return[t(A,{get when(){return!o()},children:null}),t(A,{get when(){return e.children},get children(){return t(T1,e)}})]}})},A1=e=>{const{pathname:o}=p(),a=g(),c=()=>o()===e.to;return t(n1,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:y,get href(){return e.to},onClick:()=>{S()},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":C(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(_,{get when(){return e.icon},get children(){return t(h,{mr:"$2",get as(){return e.icon}})}}),t(d,{get children(){return a(e.title)}})]}})},T1=e=>{const{pathname:o}=p(),[a,c]=x(o().includes(e.to)),O=g();return t(s,{w:"$full",get children(){return[t(E,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:C()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(m,{get children(){return[t(_,{get when(){return e.icon},get children(){return t(h,{mr:"$2",get as(){return e.icon}})}}),t(d,{get children(){return O(e.title)}})]}}),t(h,{as:r1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(_,{get when(){return a()},get children(){return t(s,{pl:"$2",get children(){return t(I,{get items(){return e.children}})}})}})]}})},I=e=>t(B,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(z,{get each(){return e.items},children:o=>t($1,o)})}});function z1(e){return D({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)}function C1(e){return D({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const l=n(()=>r(()=>import("./Common.72ebbc04.js"),["assets/Common.72ebbc04.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/SettingItem.adf30a9a.js","assets/item_type.be442da4.js","assets/index.0b844aac.js","assets/ResponsiveGrid.67826281.js"])),v=[{title:"manage.sidemenu.profile",icon:o1,to:"/@manage",role:u.GUEST,component:n(()=>r(()=>import("./Profile.41c6b10b.js"),["assets/Profile.41c6b10b.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/index.0b844aac.js"]))},{title:"manage.sidemenu.settings",icon:a1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:i1,to:"/@manage/settings/site",component:()=>t(l,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:s1,to:"/@manage/settings/style",component:()=>t(l,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:c1,to:"/@manage/settings/preview",component:()=>t(l,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:l1,to:"/@manage/settings/global",component:()=>t(l,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.github",icon:m1,to:"/@manage/settings/github",component:()=>t(l,{get group(){return i.GITHUB}})},{title:"manage.sidemenu.other",icon:u1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.2fa98187.js"),["assets/Other.2fa98187.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/useUtil.22ef2cde.js","assets/api.84e77aa3.js","assets/SettingItem.adf30a9a.js","assets/item_type.be442da4.js","assets/index.0b844aac.js"]))}]},{title:"manage.sidemenu.tasks",icon:C1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:g1,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./Aria2.6db263b4.js"),["assets/Aria2.6db263b4.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/Tasks.c24d4e40.js"]))},{title:"manage.sidemenu.qbit",icon:d1,to:"/@manage/tasks/qbit",component:n(()=>r(()=>import("./Qbit.7048e967.js"),["assets/Qbit.7048e967.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/Tasks.c24d4e40.js"]))},{title:"manage.sidemenu.upload",icon:_1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.dddee687.js"),["assets/Upload.dddee687.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/Tasks.c24d4e40.js"]))},{title:"manage.sidemenu.copy",icon:M,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.e9ea30b9.js"),["assets/Copy.e9ea30b9.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/Tasks.c24d4e40.js"]))}]},{title:"manage.sidemenu.users",icon:h1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.e0d36ff7.js"),["assets/Users.e0d36ff7.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/DeletePopover.a468cfef.js","assets/Wether.9dfb0656.js"]))},{title:"manage.sidemenu.storages",icon:p1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.521011df.js"),["assets/Storages.521011df.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/DeletePopover.a468cfef.js"]))},{title:"manage.sidemenu.metas",icon:z1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.2ba4ee21.js"),["assets/Metas.2ba4ee21.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/DeletePopover.a468cfef.js","assets/Wether.9dfb0656.js"]))},{title:"manage.sidemenu.indexes",icon:E1,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.bc7403cd.js"),["assets/indexes.bc7403cd.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/api.84e77aa3.js","assets/Common.72ebbc04.js","assets/useTitle.c45be8d3.js","assets/SettingItem.adf30a9a.js","assets/item_type.be442da4.js","assets/index.0b844aac.js","assets/ResponsiveGrid.67826281.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:f1,component:n(()=>r(()=>import("./backup-restore.9d914b7e.js"),["assets/backup-restore.9d914b7e.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js"]))},{title:"manage.sidemenu.about",icon:I1,to:"/@manage/about",role:u.GUEST,component:n(()=>r(()=>import("./About.9bdab490.js"),["assets/About.9bdab490.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/useTitle.c45be8d3.js","assets/index.0b844aac.js"]))},{title:"manage.sidemenu.home",icon:U,to:"/",role:u.GUEST,external:!0}],{isOpen:D1,onOpen:L1,onClose:S}=W(),w1=()=>{const e=g(),{to:o}=p();return t(s,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return L("$background","$neutral2")()},get children(){return[t(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(m,{spacing:"$2",get children(){return[t(T,{"aria-label":"menu",get icon(){return t(v1,{})},display:{"@sm":"none"},onClick:L1,size:"sm"}),t(d,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(m,{spacing:"$1",get children(){return t(T,{"aria-label":"logout",get icon(){return t(H,{})},onClick:()=>{Y(),j.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(N,{get opened(){return D1()},placement:"left",onClose:S,get children(){return[t(F,{}),t(q,{get children(){return[t(X,{}),t(J,{color:"$info9",get children(){return e("manage.title")}}),t(K,{get children(){return[t(I,{items:v}),t(f,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(w,{}),t(R,{})]}})}})]}})]}})]}})]}})},R1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.7deccf16.js"),["assets/AddOrEdit.7deccf16.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.67826281.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.7deccf16.js"),["assets/AddOrEdit.7deccf16.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.67826281.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.8b27943c.js"),["assets/AddOrEdit.8b27943c.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/FolderTree.462e99ca.js","assets/index.0b844aac.js","assets/api.84e77aa3.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.8b27943c.js"),["assets/AddOrEdit.8b27943c.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/FolderTree.462e99ca.js","assets/index.0b844aac.js","assets/api.84e77aa3.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.f881eac9.js"),["assets/AddOrEdit.f881eac9.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/FolderTree.462e99ca.js","assets/index.0b844aac.js","assets/api.84e77aa3.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.f881eac9.js"),["assets/AddOrEdit.f881eac9.js","assets/index.3ad216ba.js","assets/index.659f4289.css","assets/FolderTree.462e99ca.js","assets/index.0b844aac.js","assets/api.84e77aa3.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.cd855ac6.js"),["assets/2fa.cd855ac6.js","assets/index.3ad216ba.js","assets/index.659f4289.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.b15de4e2.js"),["assets/Messenger.b15de4e2.js","assets/index.3ad216ba.js","assets/index.659f4289.css"]))}],S1=e=>(e1(e.title),t(f,{h:"$full",get children(){return t(d,{get children(){return e.title}})}})),P=(e,o=[])=>(e.forEach(a=>{a.children?P(a.children,o):o.push({to:Q(a.to,"/@manage"),component:a.component||(()=>t(S1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),P1=P(v).concat(R1),O1=()=>{const e=g();return t1(()=>e("manage.title")),t(s,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(w1,{}),t(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(s,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return L("$background","$neutral2")()},overflowY:"auto",get children(){return[t(I,{items:v}),t(f,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(w,{}),t(R,{})]}})}})]}}),t(s,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(Z,{get children(){return t(z,{each:P1,children:o=>t(G,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},y1=Object.freeze(Object.defineProperty({__proto__:null,default:O1},Symbol.toStringTag,{value:"Module"}));export{b1 as F,i as G,y1 as i};
