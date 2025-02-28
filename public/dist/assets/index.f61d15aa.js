import{h as t,H as P,a8 as y,k as x,am as v,an as L,bT as i,a2 as $,a1 as M,b as f,a as _,O as F,Q as N,N as O,S as E,aF as p,aD as h,m as W,bU as A,ak as g,ad as l,aK as U,W as n,X as o,bV as Y,bW as z,bX as H,bY as j,bZ as X,b_ as q,b$ as D,c0 as J,c1 as K,c2 as Q,c3 as Z,aY as G,c4 as ee,c5 as te,c6 as ne,aG as oe,c7 as re,c8 as ae,aR as ie,b1 as se,bi as ce,Y as S,ar as w,c9 as le,bv as ue,bn as me,bo as ge,bp as de,bq as _e,br as he,aJ as I,bt as C,bu as k,bj as Ee,ca as pe,n as fe,cb as Ae,cc as Ie,cd as be}from"./index.5f2c11f5.js";import{b as Re,a as Te}from"./useTitle.14b05048.js";import{A as ve,k as Le,b as $e,l as De,m as we,n as Pe}from"./index.efd0cc32.js";import{S as Oe}from"./index.a921183e.js";var s=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e[e.TRAFFIC=11]="TRAFFIC",e))(s||{}),Se=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Se||{});const Ce=e=>{const r=x(()=>{if(!v.is_admin(L())){if(e.role===void 0)return!1;if(e.role===i.GENERAL&&!v.is_general(L()))return!1}return!0});return t(M,{get fallback(){return t(ke,e)},get children(){return[t($,{get when(){return!r()},children:null}),t($,{get when(){return e.children},get children(){return t(Ve,e)}})]}})},ke=e=>{const{pathname:r}=f(),a=_(),u=()=>r()===e.to;return t(ve,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:F,get href(){return e.to},onClick:m=>{var T;if(V(),e.refresh){(T=m.stopPropagation)==null||T.call(m);let d=e.to;d.startsWith("http")||(d=N(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":O(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},Ve=e=>{const{pathname:r}=f(),[a,u]=W(r().includes(e.to)),m=_();return t(l,{w:"$full",get children(){return[t(A,{justifyContent:"space-between",onClick:()=>{u(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:O()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return m(e.title)}})]}}),t(p,{as:Le,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(E,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(b,{get items(){return e.children}})}})}})]}})},b=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(P,{get each(){return e.items},children:r=>t(Ce,r)})}});function Be(e){return U({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const c=n(()=>o(()=>import("./Common.71b754a5.js"),["assets/Common.71b754a5.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/SettingItem.e96f43d9.js","assets/item_type.ee87ae79.js","assets/index.efd0cc32.js","assets/ResponsiveGrid.33e82cd4.js","assets/index.a921183e.js"])),R=[{title:"manage.sidemenu.profile",icon:Y,to:"/@manage",role:i.GUEST,component:n(()=>o(()=>import("./Profile.7fa65717.js"),["assets/Profile.7fa65717.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/index.efd0cc32.js","assets/webauthn-json.browser-ponyfill.1c672167.js","assets/PublicKeys.183df1bd.js"]))},{title:"manage.sidemenu.settings",icon:z,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:H,to:"/@manage/settings/site",component:()=>t(c,{get group(){return s.SITE}})},{title:"manage.sidemenu.style",icon:j,to:"/@manage/settings/style",component:()=>t(c,{get group(){return s.STYLE}})},{title:"manage.sidemenu.preview",icon:X,to:"/@manage/settings/preview",component:()=>t(c,{get group(){return s.PREVIEW}})},{title:"manage.sidemenu.global",icon:q,to:"/@manage/settings/global",component:()=>t(c,{get group(){return s.GLOBAL}})},{title:"manage.sidemenu.sso",icon:D,to:"/@manage/settings/sso",component:()=>t(c,{get group(){return s.SSO}})},{title:"manage.sidemenu.ldap",icon:D,to:"/@manage/settings/ldap",component:()=>t(c,{get group(){return s.LDAP}})},{title:"manage.sidemenu.s3",icon:J,to:"/@manage/settings/s3",component:n(()=>o(()=>import("./S3.9466960c.js"),["assets/S3.9466960c.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/SettingItem.e96f43d9.js","assets/item_type.ee87ae79.js","assets/index.efd0cc32.js","assets/ResponsiveGrid.33e82cd4.js","assets/FolderTree.aece12c6.js","assets/index.5497b76c.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.a921183e.js"]))},{title:"manage.sidemenu.ftp",icon:K,to:"/@manage/settings/ftp",component:()=>t(c,{get group(){return s.FTP}})},{title:"manage.sidemenu.traffic",icon:Q,to:"/@manage/settings/traffic",component:()=>t(c,{get group(){return s.TRAFFIC}})},{title:"manage.sidemenu.other",icon:Z,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.e7a4b77e.js"),["assets/Other.e7a4b77e.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/FolderTree.aece12c6.js","assets/index.efd0cc32.js","assets/useTitle.14b05048.js","assets/SettingItem.e96f43d9.js","assets/item_type.ee87ae79.js","assets/index.a921183e.js"]))}]},{title:"manage.sidemenu.tasks",icon:Be,to:"/@manage/tasks",role:i.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:G,to:"/@manage/tasks/offline_download",role:i.GENERAL,component:n(()=>o(()=>import("./offline_download.00256f6a.js"),["assets/offline_download.00256f6a.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/helper.9be397dc.js","assets/Paginator.33867b4d.js","assets/index.efd0cc32.js"]))},{title:"manage.sidemenu.upload",icon:ee,to:"/@manage/tasks/upload",role:i.GENERAL,component:n(()=>o(()=>import("./Upload.3f5aa4f5.js"),["assets/Upload.3f5aa4f5.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/helper.9be397dc.js","assets/Paginator.33867b4d.js","assets/index.efd0cc32.js"]))},{title:"manage.sidemenu.copy",icon:te,to:"/@manage/tasks/copy",role:i.GENERAL,component:n(()=>o(()=>import("./Copy.86d635e5.js"),["assets/Copy.86d635e5.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/helper.9be397dc.js","assets/Paginator.33867b4d.js","assets/index.efd0cc32.js"]))},{title:"manage.sidemenu.decompress",icon:$e,to:"/@manage/tasks/decompress",role:i.GENERAL,component:n(()=>o(()=>import("./Decompress.ee2327c2.js"),["assets/Decompress.ee2327c2.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/helper.9be397dc.js","assets/Paginator.33867b4d.js","assets/index.efd0cc32.js"]))}]},{title:"manage.sidemenu.users",icon:ne,to:"/@manage/users",component:n(()=>o(()=>import("./Users.b07878ae.js"),["assets/Users.b07878ae.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/DeletePopover.d846e6ea.js","assets/Wether.8afc2ba7.js"]))},{title:"manage.sidemenu.storages",icon:De,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.ea9479fd.js"),["assets/Storages.ea9479fd.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/DeletePopover.d846e6ea.js"]))},{title:"manage.sidemenu.metas",icon:Oe,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.c3007c8e.js"),["assets/Metas.c3007c8e.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/DeletePopover.d846e6ea.js","assets/Wether.8afc2ba7.js"]))},{title:"manage.sidemenu.indexes",icon:oe,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.5cb80f77.js"),["assets/indexes.5cb80f77.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/Common.71b754a5.js","assets/useTitle.14b05048.js","assets/SettingItem.e96f43d9.js","assets/item_type.ee87ae79.js","assets/index.efd0cc32.js","assets/ResponsiveGrid.33e82cd4.js","assets/index.a921183e.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:we,component:n(()=>o(()=>import("./backup-restore.89b18106.js"),["assets/backup-restore.89b18106.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js","assets/index.5497b76c.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:re,to:"/@manage/about",role:i.GUEST,component:n(()=>o(()=>import("./About.af2440e9.js"),["assets/About.af2440e9.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/useTitle.14b05048.js"]))},{title:"manage.sidemenu.home",icon:ae,to:"/",role:i.GUEST,refresh:!0}],{isOpen:ye,onOpen:xe,onClose:V}=ie(),[Me,Fe]=se(()=>ce.get("/auth/logout")),Ne=()=>{const e=_(),{to:r}=f(),a=async()=>{Ee(await Fe(),()=>{pe(),fe.success(e("manage.logout_success")),r(`/@login?redirect=${encodeURIComponent(location.pathname)}`)})};return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return S("$background","$neutral2")()},get children(){return[t(A,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(w,{"aria-label":"menu",get icon(){return t(Pe,{})},display:{"@sm":"none"},onClick:xe,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(w,{"aria-label":"logout",get icon(){return t(le,{})},get loading(){return Me()},onClick:a,size:"sm"})}})]}}),t(ue,{get opened(){return ye()},placement:"left",onClose:V,get children(){return[t(me,{}),t(ge,{get children(){return[t(de,{}),t(_e,{color:"$info9",get children(){return e("manage.title")}}),t(he,{get children(){return[t(b,{items:R}),t(I,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}})]}})]}})]}})},We=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.d01d08c8.js"),["assets/AddOrEdit.d01d08c8.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.33e82cd4.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.d01d08c8.js"),["assets/AddOrEdit.d01d08c8.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.33e82cd4.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.d0168596.js"),["assets/AddOrEdit.d0168596.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/FolderTree.aece12c6.js","assets/index.efd0cc32.js","assets/PublicKeys.183df1bd.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.d0168596.js"),["assets/AddOrEdit.d0168596.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/FolderTree.aece12c6.js","assets/index.efd0cc32.js","assets/PublicKeys.183df1bd.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.71ac542a.js"),["assets/AddOrEdit.71ac542a.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/FolderTree.aece12c6.js","assets/index.efd0cc32.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.71ac542a.js"),["assets/AddOrEdit.71ac542a.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css","assets/FolderTree.aece12c6.js","assets/index.efd0cc32.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.113fe2a8.js"),["assets/2fa.113fe2a8.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.d250f509.js"),["assets/Messenger.d250f509.js","assets/index.5f2c11f5.js","assets/index.c4c82a28.css"]))}],Ue=e=>(Re(e.title),t(I,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,r=[])=>(e.forEach(a=>{a.children?B(a.children,r):r.push({to:Ae(a.to,"/@manage"),component:a.component||(()=>t(Ue,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),Ye=B(R).concat(We),ze=()=>{const e=_();return Te(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ne,{}),t(A,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return S("$background","$neutral2")()},overflowY:"auto",get children(){return[t(b,{items:R}),t(I,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(Ie,{get children(){return t(P,{each:Ye,children:r=>t(be,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},Je=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));export{Se as F,s as G,Je as i};
