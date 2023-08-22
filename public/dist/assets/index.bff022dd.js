import{j as t,H as S,a4 as k,G as B,ac as b,ad as z,br as g,a2 as T,a1 as y,u as E,d,P as x,N as C,A as h,ar as p,ap as _,r as M,bs as f,a9 as u,a6 as s,au as D,W as n,X as r,bt as W,bu as U,bv as Y,aA as H,Y as L,ag as w,bw as N,bx as j,n as F,b4 as X,aY as q,aZ as J,a_ as Q,a$ as Z,b0 as K,at as I,b2 as R,b3 as P,by as G,bz as e1,bA as t1}from"./index.7c2ab175.js";import{d as n1,e as r1,f as o1,g as a1,h as i1,i as s1,j as c1,k as l1,l as m1,m as u1,b as g1,n as d1,o as _1,c as h1}from"./index.1a575d98.js";import{A as p1,d as E1,e as f1,f as I1,g as v1,h as A1}from"./index.699c8682.js";var i=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e))(i||{}),$1=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))($1||{});const b1=e=>{const o=B(()=>{if(!b.is_admin(z())){if(e.role===void 0)return!1;if(e.role===g.GENERAL&&!b.is_general(z()))return!1}return!0});return t(y,{get fallback(){return t(z1,e)},get children(){return[t(T,{get when(){return!o()},children:null}),t(T,{get when(){return e.children},get children(){return t(T1,e)}})]}})},z1=e=>{const{pathname:o}=E(),a=d(),c=()=>o()===e.to;return t(p1,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:x,get href(){return e.to},onClick:l=>{var $;O(),e.refresh&&(($=l.stopPropagation)==null||$.call(l),window.open(e.to,"_self"))},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":C(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(h,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return a(e.title)}})]}})},T1=e=>{const{pathname:o}=E(),[a,c]=M(o().includes(e.to)),l=d();return t(s,{w:"$full",get children(){return[t(f,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:C()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(u,{get children(){return[t(h,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(_,{get children(){return l(e.title)}})]}}),t(p,{as:E1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(h,{get when(){return a()},get children(){return t(s,{pl:"$2",get children(){return t(v,{get items(){return e.children}})}})}})]}})},v=e=>t(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(S,{get each(){return e.items},children:o=>t(b1,o)})}});function w1(e){return D({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)}function S1(e){return D({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const m=n(()=>r(()=>import("./Common.0912742f.js"),["assets/Common.0912742f.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/SettingItem.f9bf6dde.js","assets/item_type.be442da4.js","assets/index.699c8682.js","assets/ResponsiveGrid.66561995.js"])),A=[{title:"manage.sidemenu.profile",icon:n1,to:"/@manage",role:g.GUEST,component:n(()=>r(()=>import("./Profile.aa855ff1.js"),["assets/Profile.aa855ff1.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/index.699c8682.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:r1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:o1,to:"/@manage/settings/site",component:()=>t(m,{get group(){return i.SITE}})},{title:"manage.sidemenu.style",icon:a1,to:"/@manage/settings/style",component:()=>t(m,{get group(){return i.STYLE}})},{title:"manage.sidemenu.preview",icon:i1,to:"/@manage/settings/preview",component:()=>t(m,{get group(){return i.PREVIEW}})},{title:"manage.sidemenu.global",icon:s1,to:"/@manage/settings/global",component:()=>t(m,{get group(){return i.GLOBAL}})},{title:"manage.sidemenu.sso",icon:W,to:"/@manage/settings/sso",component:()=>t(m,{get group(){return i.SSO}})},{title:"manage.sidemenu.other",icon:c1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.01a0699e.js"),["assets/Other.01a0699e.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/useUtil.73caebb8.js","assets/api.f4acadfb.js","assets/SettingItem.f9bf6dde.js","assets/item_type.be442da4.js","assets/index.699c8682.js"]))}]},{title:"manage.sidemenu.tasks",icon:S1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:l1,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./Aria2.4f021ab3.js"),["assets/Aria2.4f021ab3.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/Tasks.23cfa5f5.js","assets/Paginator.e9f65807.js","assets/index.699c8682.js"]))},{title:"manage.sidemenu.qbit",icon:f1,to:"/@manage/tasks/qbit",component:n(()=>r(()=>import("./Qbit.8f3c672b.js"),["assets/Qbit.8f3c672b.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/Tasks.23cfa5f5.js","assets/Paginator.e9f65807.js","assets/index.699c8682.js"]))},{title:"manage.sidemenu.upload",icon:m1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.37331477.js"),["assets/Upload.37331477.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/Tasks.23cfa5f5.js","assets/Paginator.e9f65807.js","assets/index.699c8682.js"]))},{title:"manage.sidemenu.copy",icon:U,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.28eb681b.js"),["assets/Copy.28eb681b.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/Tasks.23cfa5f5.js","assets/Paginator.e9f65807.js","assets/index.699c8682.js"]))}]},{title:"manage.sidemenu.users",icon:u1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.e294c1db.js"),["assets/Users.e294c1db.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/DeletePopover.a8e6cbaa.js","assets/Wether.cbe191d9.js"]))},{title:"manage.sidemenu.storages",icon:I1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.bdd1a101.js"),["assets/Storages.bdd1a101.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/DeletePopover.a8e6cbaa.js"]))},{title:"manage.sidemenu.metas",icon:w1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.45ef5c77.js"),["assets/Metas.45ef5c77.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js","assets/DeletePopover.a8e6cbaa.js","assets/Wether.cbe191d9.js"]))},{title:"manage.sidemenu.indexes",icon:g1,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.00d82690.js"),["assets/indexes.00d82690.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/api.f4acadfb.js","assets/Common.0912742f.js","assets/index.1a575d98.js","assets/SettingItem.f9bf6dde.js","assets/item_type.be442da4.js","assets/index.699c8682.js","assets/ResponsiveGrid.66561995.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:v1,component:n(()=>r(()=>import("./backup-restore.d4d87f76.js"),["assets/backup-restore.d4d87f76.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js"]))},{title:"manage.sidemenu.about",icon:d1,to:"/@manage/about",role:g.GUEST,component:n(()=>r(()=>import("./About.13ea2602.js"),["assets/About.13ea2602.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/index.1a575d98.js"]))},{title:"manage.sidemenu.home",icon:Y,to:"/",role:g.GUEST,refresh:!0}],{isOpen:C1,onOpen:D1,onClose:O}=H(),L1=()=>{const e=d(),{to:o}=E();return t(s,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return L("$background","$neutral2")()},get children(){return[t(f,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(u,{spacing:"$2",get children(){return[t(w,{"aria-label":"menu",get icon(){return t(A1,{})},display:{"@sm":"none"},onClick:D1,size:"sm"}),t(_,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(u,{spacing:"$1",get children(){return t(w,{"aria-label":"logout",get icon(){return t(N,{})},onClick:()=>{j(),F.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(X,{get opened(){return C1()},placement:"left",onClose:O,get children(){return[t(q,{}),t(J,{get children(){return[t(Q,{}),t(Z,{color:"$info9",get children(){return e("manage.title")}}),t(K,{get children(){return[t(v,{items:A}),t(I,{get children(){return t(u,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(R,{}),t(P,{})]}})}})]}})]}})]}})]}})},R1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.3300c0f6.js"),["assets/AddOrEdit.3300c0f6.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.66561995.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.3300c0f6.js"),["assets/AddOrEdit.3300c0f6.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.66561995.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.17899b0f.js"),["assets/AddOrEdit.17899b0f.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/FolderTree.8a4286cc.js","assets/index.699c8682.js","assets/api.f4acadfb.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.17899b0f.js"),["assets/AddOrEdit.17899b0f.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/FolderTree.8a4286cc.js","assets/index.699c8682.js","assets/api.f4acadfb.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.c9de3248.js"),["assets/AddOrEdit.c9de3248.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/FolderTree.8a4286cc.js","assets/index.699c8682.js","assets/api.f4acadfb.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.c9de3248.js"),["assets/AddOrEdit.c9de3248.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css","assets/FolderTree.8a4286cc.js","assets/index.699c8682.js","assets/api.f4acadfb.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.a2db9923.js"),["assets/2fa.a2db9923.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.a0b64bd8.js"),["assets/Messenger.a0b64bd8.js","assets/index.7c2ab175.js","assets/index.d81a3e4b.css"]))}],P1=e=>(_1(e.title),t(I,{h:"$full",get children(){return t(_,{get children(){return e.title}})}})),V=(e,o=[])=>(e.forEach(a=>{a.children?V(a.children,o):o.push({to:G(a.to,"/@manage"),component:a.component||(()=>t(P1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),O1=V(A).concat(R1),V1=()=>{const e=d();return h1(()=>e("manage.title")),t(s,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(L1,{}),t(f,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(s,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return L("$background","$neutral2")()},overflowY:"auto",get children(){return[t(v,{items:A}),t(I,{get children(){return t(u,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(R,{}),t(P,{})]}})}})]}}),t(s,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(e1,{get children(){return t(S,{each:O1,children:o=>t(t1,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},x1=Object.freeze(Object.defineProperty({__proto__:null,default:V1},Symbol.toStringTag,{value:"Module"}));export{$1 as F,i as G,x1 as i};
