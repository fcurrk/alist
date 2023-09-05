import{j as t,L,a6 as k,v as y,ad as z,ae as T,bs as d,a4 as w,a3 as x,u as f,d as _,U as M,V as W,R as C,y as p,as as E,aq as h,r as U,bt as v,aa as u,B as i,av as D,Z as n,$ as r,bu as Y,bv as j,bw as H,aB as N,a0 as R,ah as S,bx as F,by as q,n as X,b4 as Z,aY as J,aZ as Q,a_ as K,a$ as G,b0 as e1,au as I,b2 as O,b3 as P,bz as t1,bA as n1,bB as r1}from"./index.2575ee6c.js";import{d as o1,e as a1,f as s1,g as i1,h as c1,i as l1,j as m1,k as u1,l as g1,m as d1,b as _1,n as h1,o as p1,c as E1}from"./index.f3321691.js";import{A as f1,d as v1,e as I1,f as $1,g as A1,h as b1}from"./index.ddfaea4f.js";var s=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e))(s||{}),z1=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(z1||{});const T1=e=>{const o=y(()=>{if(!z.is_admin(T())){if(e.role===void 0)return!1;if(e.role===d.GENERAL&&!z.is_general(T()))return!1}return!0});return t(x,{get fallback(){return t(w1,e)},get children(){return[t(w,{get when(){return!o()},children:null}),t(w,{get when(){return e.children},get children(){return t(S1,e)}})]}})},w1=e=>{const{pathname:o}=f(),a=_(),c=()=>o()===e.to;return t(f1,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:M,get href(){return e.to},onClick:l=>{var b;if(B(),e.refresh){(b=l.stopPropagation)==null||b.call(l);let g=e.to;g.startsWith("http")||(g=W(g)),window.open(g,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:c()?"$info4":C(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return c()?"$info4":""},get color(){return c()?"$info11":""},get external(){return e.external},get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},S1=e=>{const{pathname:o}=f(),[a,c]=U(o().includes(e.to)),l=_();return t(i,{w:"$full",get children(){return[t(v,{justifyContent:"space-between",onClick:()=>{c(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:C()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(u,{get children(){return[t(p,{get when(){return e.icon},get children(){return t(E,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return l(e.title)}})]}}),t(E,{as:v1,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(p,{get when(){return a()},get children(){return t(i,{pl:"$2",get children(){return t($,{get items(){return e.children}})}})}})]}})},$=e=>t(k,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(L,{get each(){return e.items},children:o=>t(T1,o)})}});function L1(e){return D({a:{viewBox:"0 0 24 24"},c:'<path d="M5.385 6.136c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-1.438 2.63c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465-2.63c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.499-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm-1.088 5.592c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.643 1.461 1.438 1.461zm5.464-5.592c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 7.247 12 7.247s1.088-.498 1.088-1.111zm.35-4.675c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461S11.206 0 12 0s1.438.654 1.438 1.461zm-.35 0C13.088.848 12.6.35 12 .35s-1.088.498-1.088 1.111S11.4 2.572 12 2.572s1.088-.498 1.088-1.111zm.35 8.806c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.499 1.088-1.111zm4.376-4.131c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939 1.461c.794 0 1.438-.654 1.438-1.461s-.644-1.461-1.438-1.461-1.438.654-1.438 1.461.644 1.461 1.438 1.461zm-4.027 1.209c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.643-1.461-1.438-1.461zm4.027 0c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 12.857a1.45 1.45 0 00-1.438 1.461c0 .807.644 1.461 1.438 1.461s1.438-.654 1.438-1.461a1.45 1.45 0 00-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zM12 12.896c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.464 1.461c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.655 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zM3.947 16.948c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461zm5.465 1.5c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm4.376 0c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm.35 4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111S11.4 23.65 12 23.65s1.088-.498 1.088-1.111zm4.376-4.091c0 .807-.644 1.461-1.438 1.461s-1.438-.654-1.438-1.461.644-1.461 1.438-1.461 1.438.654 1.438 1.461zm-.35 0c0-.613-.488-1.111-1.088-1.111s-1.088.498-1.088 1.111.488 1.111 1.088 1.111 1.088-.498 1.088-1.111zm2.939-1.461c-.794 0-1.438.654-1.438 1.461s.644 1.461 1.438 1.461 1.438-.654 1.438-1.461-.644-1.461-1.438-1.461z"/>'},e)}function C1(e){return D({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const m=n(()=>r(()=>import("./Common.391441ae.js"),["assets/Common.391441ae.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/SettingItem.ede80b61.js","assets/item_type.be442da4.js","assets/index.ddfaea4f.js","assets/ResponsiveGrid.04346017.js"])),A=[{title:"manage.sidemenu.profile",icon:o1,to:"/@manage",role:d.GUEST,component:n(()=>r(()=>import("./Profile.8cf4e311.js"),["assets/Profile.8cf4e311.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/index.ddfaea4f.js","assets/webauthn-json.browser-ponyfill.1c672167.js"]))},{title:"manage.sidemenu.settings",icon:a1,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:s1,to:"/@manage/settings/site",component:()=>t(m,{get group(){return s.SITE}})},{title:"manage.sidemenu.style",icon:i1,to:"/@manage/settings/style",component:()=>t(m,{get group(){return s.STYLE}})},{title:"manage.sidemenu.preview",icon:c1,to:"/@manage/settings/preview",component:()=>t(m,{get group(){return s.PREVIEW}})},{title:"manage.sidemenu.global",icon:l1,to:"/@manage/settings/global",component:()=>t(m,{get group(){return s.GLOBAL}})},{title:"manage.sidemenu.sso",icon:Y,to:"/@manage/settings/sso",component:()=>t(m,{get group(){return s.SSO}})},{title:"manage.sidemenu.other",icon:m1,to:"/@manage/settings/other",component:n(()=>r(()=>import("./Other.094dce27.js"),["assets/Other.094dce27.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/useUtil.0df47d5c.js","assets/api.fcdb203d.js","assets/SettingItem.ede80b61.js","assets/item_type.be442da4.js","assets/index.ddfaea4f.js"]))}]},{title:"manage.sidemenu.tasks",icon:C1,to:"/@manage/tasks",children:[{title:"manage.sidemenu.aria2",icon:u1,to:"/@manage/tasks/aria2",component:n(()=>r(()=>import("./Aria2.907fcfb8.js"),["assets/Aria2.907fcfb8.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/Tasks.fd649354.js","assets/Paginator.6304813d.js","assets/index.ddfaea4f.js"]))},{title:"manage.sidemenu.qbit",icon:I1,to:"/@manage/tasks/qbit",component:n(()=>r(()=>import("./Qbit.cf68a667.js"),["assets/Qbit.cf68a667.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/Tasks.fd649354.js","assets/Paginator.6304813d.js","assets/index.ddfaea4f.js"]))},{title:"manage.sidemenu.upload",icon:g1,to:"/@manage/tasks/upload",component:n(()=>r(()=>import("./Upload.dbfcb201.js"),["assets/Upload.dbfcb201.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/Tasks.fd649354.js","assets/Paginator.6304813d.js","assets/index.ddfaea4f.js"]))},{title:"manage.sidemenu.copy",icon:j,to:"/@manage/tasks/copy",component:n(()=>r(()=>import("./Copy.5174bd88.js"),["assets/Copy.5174bd88.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/Tasks.fd649354.js","assets/Paginator.6304813d.js","assets/index.ddfaea4f.js"]))}]},{title:"manage.sidemenu.users",icon:d1,to:"/@manage/users",component:n(()=>r(()=>import("./Users.96230c79.js"),["assets/Users.96230c79.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/DeletePopover.b254d8cf.js","assets/Wether.ba2e956a.js"]))},{title:"manage.sidemenu.storages",icon:$1,to:"/@manage/storages",component:n(()=>r(()=>import("./Storages.2f732a02.js"),["assets/Storages.2f732a02.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/DeletePopover.b254d8cf.js"]))},{title:"manage.sidemenu.metas",icon:L1,to:"/@manage/metas",component:n(()=>r(()=>import("./Metas.1d522541.js"),["assets/Metas.1d522541.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js","assets/DeletePopover.b254d8cf.js","assets/Wether.ba2e956a.js"]))},{title:"manage.sidemenu.indexes",icon:_1,to:"/@manage/indexes",component:n(()=>r(()=>import("./indexes.cedfaf66.js"),["assets/indexes.cedfaf66.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/api.fcdb203d.js","assets/Common.391441ae.js","assets/index.f3321691.js","assets/SettingItem.ede80b61.js","assets/item_type.be442da4.js","assets/index.ddfaea4f.js","assets/ResponsiveGrid.04346017.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:A1,component:n(()=>r(()=>import("./backup-restore.c840d23a.js"),["assets/backup-restore.c840d23a.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js"]))},{title:"manage.sidemenu.about",icon:h1,to:"/@manage/about",role:d.GUEST,component:n(()=>r(()=>import("./About.beb04d76.js"),["assets/About.beb04d76.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/index.f3321691.js"]))},{title:"manage.sidemenu.home",icon:H,to:"/",role:d.GUEST,refresh:!0}],{isOpen:D1,onOpen:R1,onClose:B}=N(),O1=()=>{const e=_(),{to:o}=f();return t(i,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return R("$background","$neutral2")()},get children(){return[t(v,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(u,{spacing:"$2",get children(){return[t(S,{"aria-label":"menu",get icon(){return t(b1,{})},display:{"@sm":"none"},onClick:R1,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{o("/@manage")},get children(){return e("manage.title")}})]}}),t(u,{spacing:"$1",get children(){return t(S,{"aria-label":"logout",get icon(){return t(F,{})},onClick:()=>{q(),X.success(e("manage.logout_success")),o(`/@login?redirect=${encodeURIComponent(location.pathname)}`)},size:"sm"})}})]}}),t(Z,{get opened(){return D1()},placement:"left",onClose:B,get children(){return[t(J,{}),t(Q,{get children(){return[t(K,{}),t(G,{color:"$info9",get children(){return e("manage.title")}}),t(e1,{get children(){return[t($,{items:A}),t(I,{get children(){return t(u,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(P,{})]}})}})]}})]}})]}})]}})},P1=[{to:"/storages/add",component:n(()=>r(()=>import("./AddOrEdit.a0b7921f.js"),["assets/AddOrEdit.a0b7921f.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.04346017.js"]))},{to:"/storages/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.a0b7921f.js"),["assets/AddOrEdit.a0b7921f.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/item_type.be442da4.js","assets/ResponsiveGrid.04346017.js"]))},{to:"/users/add",component:n(()=>r(()=>import("./AddOrEdit.d2ef0c3f.js"),["assets/AddOrEdit.d2ef0c3f.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/FolderTree.6355e62f.js","assets/index.ddfaea4f.js","assets/api.fcdb203d.js"]))},{to:"/users/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.d2ef0c3f.js"),["assets/AddOrEdit.d2ef0c3f.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/FolderTree.6355e62f.js","assets/index.ddfaea4f.js","assets/api.fcdb203d.js"]))},{to:"/metas/add",component:n(()=>r(()=>import("./AddOrEdit.a365b0ca.js"),["assets/AddOrEdit.a365b0ca.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/FolderTree.6355e62f.js","assets/index.ddfaea4f.js","assets/api.fcdb203d.js"]))},{to:"/metas/edit/:id",component:n(()=>r(()=>import("./AddOrEdit.a365b0ca.js"),["assets/AddOrEdit.a365b0ca.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css","assets/FolderTree.6355e62f.js","assets/index.ddfaea4f.js","assets/api.fcdb203d.js"]))},{to:"/2fa",component:n(()=>r(()=>import("./2fa.0e9f1404.js"),["assets/2fa.0e9f1404.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css"]))},{to:"/messenger",component:n(()=>r(()=>import("./Messenger.da6fa7d9.js"),["assets/Messenger.da6fa7d9.js","assets/index.2575ee6c.js","assets/index.d81a3e4b.css"]))}],B1=e=>(p1(e.title),t(I,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),V=(e,o=[])=>(e.forEach(a=>{a.children?V(a.children,o):o.push({to:t1(a.to,"/@manage"),component:a.component||(()=>t(B1,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),o),V1=V(A).concat(P1),k1=()=>{const e=_();return E1(()=>e("manage.title")),t(i,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(O1,{}),t(v,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(i,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return R("$background","$neutral2")()},overflowY:"auto",get children(){return[t($,{items:A}),t(I,{get children(){return t(u,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(O,{}),t(P,{})]}})}})]}}),t(i,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(n1,{get children(){return t(L,{each:V1,children:o=>t(r1,{get path(){return o.to},get component(){return o.component}})})}})}})]}})]}})},W1=Object.freeze(Object.defineProperty({__proto__:null,default:k1},Symbol.toStringTag,{value:"Module"}));export{z1 as F,s as G,W1 as i};
