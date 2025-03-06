import{h as t,H as w,a8 as y,k as x,ak as L,al as v,bR as i,a2 as $,a1 as M,b as f,a as _,O as F,Q as N,N as S,S as E,aD as p,aB as h,m as W,bS as A,ai as m,ab as l,aI as H,W as n,X as o,bT as U,bU as z,bV as Y,bW as j,bX as X,bY as q,bZ as D,b_ as J,b$ as Q,c0 as Z,c1 as K,aW as G,c2 as ee,c3 as te,c4 as ne,aE as oe,c5 as re,c6 as ae,aP as ie,a$ as se,bg as ce,Y as O,ap as P,c7 as le,bt as ue,bl as ge,bm as me,bn as de,bo as _e,bp as he,aH as I,br as C,bs as k,bh as Ee,c8 as pe,n as fe,c9 as Ae,ca as Ie,cb as be}from"./index.ea8a3d40.js";import{b as Re,a as Te}from"./useTitle.3b2ae23d.js";import{A as Le,k as ve,b as $e,l as De,m as Pe,n as we}from"./index.4f77dabf.js";import{S as Se}from"./index.65bef050.js";var s=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e[e.TRAFFIC=11]="TRAFFIC",e))(s||{}),Oe=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(Oe||{});const Ce=e=>{const r=x(()=>{if(!L.is_admin(v())){if(e.role===void 0)return!1;if(e.role===i.GENERAL&&!L.is_general(v()))return!1}return!0});return t(M,{get fallback(){return t(ke,e)},get children(){return[t($,{get when(){return!r()},children:null}),t($,{get when(){return e.children},get children(){return t(Ve,e)}})]}})},ke=e=>{const{pathname:r}=f(),a=_(),u=()=>r()===e.to;return t(Le,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:F,get href(){return e.to},onClick:g=>{var T;if(V(),e.refresh){(T=g.stopPropagation)==null||T.call(g);let d=e.to;d.startsWith("http")||(d=N(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":S(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},Ve=e=>{const{pathname:r}=f(),[a,u]=W(r().includes(e.to)),g=_();return t(l,{w:"$full",get children(){return[t(A,{justifyContent:"space-between",onClick:()=>{u(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:S()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(m,{get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return g(e.title)}})]}}),t(p,{as:ve,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(E,{get when(){return a()},get children(){return t(l,{pl:"$2",get children(){return t(b,{get items(){return e.children}})}})}})]}})},b=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(w,{get each(){return e.items},children:r=>t(Ce,r)})}});function Be(e){return H({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const c=n(()=>o(()=>import("./Common.3c5f2a31.js"),["assets/Common.3c5f2a31.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/SettingItem.5a822da3.js","assets/item_type.ee87ae79.js","assets/index.4f77dabf.js","assets/ResponsiveGrid.f941bc76.js","assets/index.65bef050.js"])),R=[{title:"manage.sidemenu.profile",icon:U,to:"/@manage",role:i.GUEST,component:n(()=>o(()=>import("./Profile.77be0300.js"),["assets/Profile.77be0300.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/index.4f77dabf.js","assets/webauthn-json.browser-ponyfill.1c672167.js","assets/PublicKeys.d00b63dd.js"]))},{title:"manage.sidemenu.settings",icon:z,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:Y,to:"/@manage/settings/site",component:()=>t(c,{get group(){return s.SITE}})},{title:"manage.sidemenu.style",icon:j,to:"/@manage/settings/style",component:()=>t(c,{get group(){return s.STYLE}})},{title:"manage.sidemenu.preview",icon:X,to:"/@manage/settings/preview",component:()=>t(c,{get group(){return s.PREVIEW}})},{title:"manage.sidemenu.global",icon:q,to:"/@manage/settings/global",component:()=>t(c,{get group(){return s.GLOBAL}})},{title:"manage.sidemenu.sso",icon:D,to:"/@manage/settings/sso",component:()=>t(c,{get group(){return s.SSO}})},{title:"manage.sidemenu.ldap",icon:D,to:"/@manage/settings/ldap",component:()=>t(c,{get group(){return s.LDAP}})},{title:"manage.sidemenu.s3",icon:J,to:"/@manage/settings/s3",component:n(()=>o(()=>import("./S3.2c49fb17.js"),["assets/S3.2c49fb17.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/SettingItem.5a822da3.js","assets/item_type.ee87ae79.js","assets/index.4f77dabf.js","assets/ResponsiveGrid.f941bc76.js","assets/FolderTree.f6241d77.js","assets/index.95f98c1f.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.65bef050.js"]))},{title:"manage.sidemenu.ftp",icon:Q,to:"/@manage/settings/ftp",component:()=>t(c,{get group(){return s.FTP}})},{title:"manage.sidemenu.traffic",icon:Z,to:"/@manage/settings/traffic",component:()=>t(c,{get group(){return s.TRAFFIC}})},{title:"manage.sidemenu.other",icon:K,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.ef08dcd1.js"),["assets/Other.ef08dcd1.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/FolderTree.f6241d77.js","assets/index.4f77dabf.js","assets/useTitle.3b2ae23d.js","assets/SettingItem.5a822da3.js","assets/item_type.ee87ae79.js","assets/index.65bef050.js"]))}]},{title:"manage.sidemenu.tasks",icon:Be,to:"/@manage/tasks",role:i.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:G,to:"/@manage/tasks/offline_download",role:i.GENERAL,component:n(()=>o(()=>import("./offline_download.1d3d1824.js"),["assets/offline_download.1d3d1824.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/helper.77035605.js","assets/Paginator.5d3694e9.js","assets/index.4f77dabf.js"]))},{title:"manage.sidemenu.upload",icon:ee,to:"/@manage/tasks/upload",role:i.GENERAL,component:n(()=>o(()=>import("./Upload.90893f00.js"),["assets/Upload.90893f00.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/helper.77035605.js","assets/Paginator.5d3694e9.js","assets/index.4f77dabf.js"]))},{title:"manage.sidemenu.copy",icon:te,to:"/@manage/tasks/copy",role:i.GENERAL,component:n(()=>o(()=>import("./Copy.6a7123a1.js"),["assets/Copy.6a7123a1.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/helper.77035605.js","assets/Paginator.5d3694e9.js","assets/index.4f77dabf.js"]))},{title:"manage.sidemenu.decompress",icon:$e,to:"/@manage/tasks/decompress",role:i.GENERAL,component:n(()=>o(()=>import("./Decompress.ee6aa168.js"),["assets/Decompress.ee6aa168.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/helper.77035605.js","assets/Paginator.5d3694e9.js","assets/index.4f77dabf.js"]))}]},{title:"manage.sidemenu.users",icon:ne,to:"/@manage/users",component:n(()=>o(()=>import("./Users.cce460f9.js"),["assets/Users.cce460f9.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/DeletePopover.07a326de.js","assets/Wether.63bb51de.js"]))},{title:"manage.sidemenu.storages",icon:De,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.f8f74a3f.js"),["assets/Storages.f8f74a3f.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/DeletePopover.07a326de.js"]))},{title:"manage.sidemenu.metas",icon:Se,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.940ee35c.js"),["assets/Metas.940ee35c.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/DeletePopover.07a326de.js","assets/Wether.63bb51de.js"]))},{title:"manage.sidemenu.indexes",icon:oe,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.94afc213.js"),["assets/indexes.94afc213.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/Common.3c5f2a31.js","assets/useTitle.3b2ae23d.js","assets/SettingItem.5a822da3.js","assets/item_type.ee87ae79.js","assets/index.4f77dabf.js","assets/ResponsiveGrid.f941bc76.js","assets/index.65bef050.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:Pe,component:n(()=>o(()=>import("./backup-restore.80b517a2.js"),["assets/backup-restore.80b517a2.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js","assets/index.95f98c1f.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:re,to:"/@manage/about",role:i.GUEST,component:n(()=>o(()=>import("./About.3f947dad.js"),["assets/About.3f947dad.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/useTitle.3b2ae23d.js"]))},{title:"manage.sidemenu.home",icon:ae,to:"/",role:i.GUEST,refresh:!0}],{isOpen:ye,onOpen:xe,onClose:V}=ie(),[Me,Fe]=se(()=>ce.get("/auth/logout")),Ne=()=>{const e=_(),{to:r}=f(),a=async()=>{Ee(await Fe(),()=>{pe(),fe.success(e("manage.logout_success")),r(`/@login?redirect=${encodeURIComponent(location.pathname)}`)})};return t(l,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return O("$background","$neutral2")()},get children(){return[t(A,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(m,{spacing:"$2",get children(){return[t(P,{"aria-label":"menu",get icon(){return t(we,{})},display:{"@sm":"none"},onClick:xe,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(m,{spacing:"$1",get children(){return t(P,{"aria-label":"logout",get icon(){return t(le,{})},get loading(){return Me()},onClick:a,size:"sm"})}})]}}),t(ue,{get opened(){return ye()},placement:"left",onClose:V,get children(){return[t(ge,{}),t(me,{get children(){return[t(de,{}),t(_e,{color:"$info9",get children(){return e("manage.title")}}),t(he,{get children(){return[t(b,{items:R}),t(I,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}})]}})]}})]}})},We=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.3b485b4e.js"),["assets/AddOrEdit.3b485b4e.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.f941bc76.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.3b485b4e.js"),["assets/AddOrEdit.3b485b4e.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.f941bc76.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.80dd2718.js"),["assets/AddOrEdit.80dd2718.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/FolderTree.f6241d77.js","assets/index.4f77dabf.js","assets/PublicKeys.d00b63dd.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.80dd2718.js"),["assets/AddOrEdit.80dd2718.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/FolderTree.f6241d77.js","assets/index.4f77dabf.js","assets/PublicKeys.d00b63dd.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.ecd0ec53.js"),["assets/AddOrEdit.ecd0ec53.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/FolderTree.f6241d77.js","assets/index.4f77dabf.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.ecd0ec53.js"),["assets/AddOrEdit.ecd0ec53.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css","assets/FolderTree.f6241d77.js","assets/index.4f77dabf.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.475a6590.js"),["assets/2fa.475a6590.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.2db4e846.js"),["assets/Messenger.2db4e846.js","assets/index.ea8a3d40.js","assets/index.c4c82a28.css"]))}],He=e=>(Re(e.title),t(I,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,r=[])=>(e.forEach(a=>{a.children?B(a.children,r):r.push({to:Ae(a.to,"/@manage"),component:a.component||(()=>t(He,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),Ue=B(R).concat(We),ze=()=>{const e=_();return Te(()=>e("manage.title")),t(l,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ne,{}),t(A,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(l,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return O("$background","$neutral2")()},overflowY:"auto",get children(){return[t(b,{items:R}),t(I,{get children(){return t(m,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}}),t(l,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(Ie,{get children(){return t(w,{each:Ue,children:r=>t(be,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},Je=Object.freeze(Object.defineProperty({__proto__:null,default:ze},Symbol.toStringTag,{value:"Module"}));export{Oe as F,s as G,Je as i};
