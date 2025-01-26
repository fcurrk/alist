import{h as t,H as S,a7 as y,k as x,al as R,am as T,bQ as i,a1 as $,a0 as M,b as f,a as _,O as N,Q as W,N as w,S as E,aE as p,aC as h,m as U,bR as b,aj as g,ac as c,aJ as z,W as n,X as o,bS as F,bT as H,bU as Y,bV as j,bW as X,bX as q,bY as D,bZ as Q,b_ as J,b$ as Z,aX as K,c0 as G,c1 as ee,c2 as te,aF as ne,c3 as oe,c4 as re,aQ as ae,b0 as ie,bf as se,Y as O,aq as P,c5 as le,bs as ce,bk as ue,bl as me,bm as ge,bn as de,bo as _e,aI as A,bq as C,br as k,bg as he,c6 as Ee,n as pe,c7 as fe,c8 as be,c9 as Ae}from"./index.6a11a750.js";import{b as Ie,a as ve}from"./useTitle.b1279957.js";import{A as Le,k as Re,b as Te,l as $e,m as De,n as Pe}from"./index.8bc73261.js";import{S as Se}from"./index.dc25b8cb.js";var s=(e=>(e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e[e.FTP=10]="FTP",e))(s||{}),we=(e=>(e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e))(we||{});const Oe=e=>{const r=x(()=>{if(!R.is_admin(T())){if(e.role===void 0)return!1;if(e.role===i.GENERAL&&!R.is_general(T()))return!1}return!0});return t(M,{get fallback(){return t(Ce,e)},get children(){return[t($,{get when(){return!r()},children:null}),t($,{get when(){return e.children},get children(){return t(ke,e)}})]}})},Ce=e=>{const{pathname:r}=f(),a=_(),u=()=>r()===e.to;return t(Le,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:N,get href(){return e.to},onClick:m=>{var L;if(V(),e.refresh){(L=m.stopPropagation)==null||L.call(m);let d=e.to;d.startsWith("http")||(d=W(d)),window.open(d,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:u()?"$info4":w(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return u()?"$info4":""},get color(){return u()?"$info11":""},get external(){return e.external},get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return a(e.title)}})]}})},ke=e=>{const{pathname:r}=f(),[a,u]=U(r().includes(e.to)),m=_();return t(c,{w:"$full",get children(){return[t(b,{justifyContent:"space-between",onClick:()=>{u(!a())},w:"$full",alignItems:"center",get _hover(){return{bgColor:w()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[t(g,{get children(){return[t(E,{get when(){return e.icon},get children(){return t(p,{mr:"$2",get as(){return e.icon}})}}),t(h,{get children(){return m(e.title)}})]}}),t(p,{as:Re,get transform(){return a()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),t(E,{get when(){return a()},get children(){return t(c,{pl:"$2",get children(){return t(I,{get items(){return e.children}})}})}})]}})},I=e=>t(y,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return t(S,{get each(){return e.items},children:r=>t(Oe,r)})}});function Ve(e){return z({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)}const l=n(()=>o(()=>import("./Common.41c72425.js"),["assets/Common.41c72425.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/SettingItem.26719def.js","assets/item_type.ee87ae79.js","assets/index.8bc73261.js","assets/ResponsiveGrid.29916edc.js","assets/index.dc25b8cb.js"])),v=[{title:"manage.sidemenu.profile",icon:F,to:"/@manage",role:i.GUEST,component:n(()=>o(()=>import("./Profile.63e848fa.js"),["assets/Profile.63e848fa.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/index.8bc73261.js","assets/webauthn-json.browser-ponyfill.1c672167.js","assets/PublicKeys.54015af6.js"]))},{title:"manage.sidemenu.settings",icon:H,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:Y,to:"/@manage/settings/site",component:()=>t(l,{get group(){return s.SITE}})},{title:"manage.sidemenu.style",icon:j,to:"/@manage/settings/style",component:()=>t(l,{get group(){return s.STYLE}})},{title:"manage.sidemenu.preview",icon:X,to:"/@manage/settings/preview",component:()=>t(l,{get group(){return s.PREVIEW}})},{title:"manage.sidemenu.global",icon:q,to:"/@manage/settings/global",component:()=>t(l,{get group(){return s.GLOBAL}})},{title:"manage.sidemenu.sso",icon:D,to:"/@manage/settings/sso",component:()=>t(l,{get group(){return s.SSO}})},{title:"manage.sidemenu.ldap",icon:D,to:"/@manage/settings/ldap",component:()=>t(l,{get group(){return s.LDAP}})},{title:"manage.sidemenu.s3",icon:Q,to:"/@manage/settings/s3",component:n(()=>o(()=>import("./S3.5318bfcf.js"),["assets/S3.5318bfcf.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/SettingItem.26719def.js","assets/item_type.ee87ae79.js","assets/index.8bc73261.js","assets/ResponsiveGrid.29916edc.js","assets/FolderTree.55d56418.js","assets/index.b407c547.js","assets/_commonjs-dynamic-modules.30ae7933.js","assets/index.dc25b8cb.js"]))},{title:"manage.sidemenu.ftp",icon:J,to:"/@manage/settings/ftp",component:()=>t(l,{get group(){return s.FTP}})},{title:"manage.sidemenu.other",icon:Z,to:"/@manage/settings/other",component:n(()=>o(()=>import("./Other.b764bf10.js"),["assets/Other.b764bf10.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/FolderTree.55d56418.js","assets/index.8bc73261.js","assets/useTitle.b1279957.js","assets/SettingItem.26719def.js","assets/item_type.ee87ae79.js","assets/index.dc25b8cb.js"]))}]},{title:"manage.sidemenu.tasks",icon:Ve,to:"/@manage/tasks",role:i.GENERAL,children:[{title:"manage.sidemenu.offline_download",icon:K,to:"/@manage/tasks/offline_download",role:i.GENERAL,component:n(()=>o(()=>import("./offline_download.bbeb5261.js"),["assets/offline_download.bbeb5261.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/helper.a508c76e.js","assets/Paginator.a5d30aee.js","assets/index.8bc73261.js"]))},{title:"manage.sidemenu.upload",icon:G,to:"/@manage/tasks/upload",role:i.GENERAL,component:n(()=>o(()=>import("./Upload.704bd17b.js"),["assets/Upload.704bd17b.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/helper.a508c76e.js","assets/Paginator.a5d30aee.js","assets/index.8bc73261.js"]))},{title:"manage.sidemenu.copy",icon:ee,to:"/@manage/tasks/copy",role:i.GENERAL,component:n(()=>o(()=>import("./Copy.02bb645f.js"),["assets/Copy.02bb645f.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/helper.a508c76e.js","assets/Paginator.a5d30aee.js","assets/index.8bc73261.js"]))},{title:"manage.sidemenu.decompress",icon:Te,to:"/@manage/tasks/decompress",role:i.GENERAL,component:n(()=>o(()=>import("./Decompress.435b1bd2.js"),["assets/Decompress.435b1bd2.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/helper.a508c76e.js","assets/Paginator.a5d30aee.js","assets/index.8bc73261.js"]))}]},{title:"manage.sidemenu.users",icon:te,to:"/@manage/users",component:n(()=>o(()=>import("./Users.5a26473a.js"),["assets/Users.5a26473a.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/DeletePopover.c28a2f5e.js","assets/Wether.0781e17f.js"]))},{title:"manage.sidemenu.storages",icon:$e,to:"/@manage/storages",component:n(()=>o(()=>import("./Storages.55488c6b.js"),["assets/Storages.55488c6b.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/DeletePopover.c28a2f5e.js"]))},{title:"manage.sidemenu.metas",icon:Se,to:"/@manage/metas",component:n(()=>o(()=>import("./Metas.3baf87f9.js"),["assets/Metas.3baf87f9.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/DeletePopover.c28a2f5e.js","assets/Wether.0781e17f.js"]))},{title:"manage.sidemenu.indexes",icon:ne,to:"/@manage/indexes",component:n(()=>o(()=>import("./indexes.b7dc4530.js"),["assets/indexes.b7dc4530.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/Common.41c72425.js","assets/useTitle.b1279957.js","assets/SettingItem.26719def.js","assets/item_type.ee87ae79.js","assets/index.8bc73261.js","assets/ResponsiveGrid.29916edc.js","assets/index.dc25b8cb.js"]))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:De,component:n(()=>o(()=>import("./backup-restore.43ba6b94.js"),["assets/backup-restore.43ba6b94.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js","assets/index.b407c547.js","assets/_commonjs-dynamic-modules.30ae7933.js"]))},{title:"manage.sidemenu.about",icon:oe,to:"/@manage/about",role:i.GUEST,component:n(()=>o(()=>import("./About.02d1acdd.js"),["assets/About.02d1acdd.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/useTitle.b1279957.js"]))},{title:"manage.sidemenu.home",icon:re,to:"/",role:i.GUEST,refresh:!0}],{isOpen:Be,onOpen:ye,onClose:V}=ae(),[xe,Me]=ie(()=>se.get("/auth/logout")),Ne=()=>{const e=_(),{to:r}=f(),a=async()=>{he(await Me(),()=>{Ee(),pe.success(e("manage.logout_success")),r(`/@login?redirect=${encodeURIComponent(location.pathname)}`)})};return t(c,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return O("$background","$neutral2")()},get children(){return[t(b,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[t(g,{spacing:"$2",get children(){return[t(P,{"aria-label":"menu",get icon(){return t(Pe,{})},display:{"@sm":"none"},onClick:ye,size:"sm"}),t(h,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:()=>{r("/@manage")},get children(){return e("manage.title")}})]}}),t(g,{spacing:"$1",get children(){return t(P,{"aria-label":"logout",get icon(){return t(le,{})},get loading(){return xe()},onClick:a,size:"sm"})}})]}}),t(ce,{get opened(){return Be()},placement:"left",onClose:V,get children(){return[t(ue,{}),t(me,{get children(){return[t(ge,{}),t(de,{color:"$info9",get children(){return e("manage.title")}}),t(_e,{get children(){return[t(I,{items:v}),t(A,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}})]}})]}})]}})},We=[{to:"/storages/add",component:n(()=>o(()=>import("./AddOrEdit.13ff3554.js"),["assets/AddOrEdit.13ff3554.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.29916edc.js"]))},{to:"/storages/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.13ff3554.js"),["assets/AddOrEdit.13ff3554.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/item_type.ee87ae79.js","assets/ResponsiveGrid.29916edc.js"]))},{to:"/users/add",component:n(()=>o(()=>import("./AddOrEdit.dddee19b.js"),["assets/AddOrEdit.dddee19b.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/FolderTree.55d56418.js","assets/index.8bc73261.js","assets/PublicKeys.54015af6.js"]))},{to:"/users/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.dddee19b.js"),["assets/AddOrEdit.dddee19b.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/FolderTree.55d56418.js","assets/index.8bc73261.js","assets/PublicKeys.54015af6.js"]))},{to:"/metas/add",component:n(()=>o(()=>import("./AddOrEdit.3edc6145.js"),["assets/AddOrEdit.3edc6145.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/FolderTree.55d56418.js","assets/index.8bc73261.js"]))},{to:"/metas/edit/:id",component:n(()=>o(()=>import("./AddOrEdit.3edc6145.js"),["assets/AddOrEdit.3edc6145.js","assets/index.6a11a750.js","assets/index.c4c82a28.css","assets/FolderTree.55d56418.js","assets/index.8bc73261.js"]))},{to:"/2fa",component:n(()=>o(()=>import("./2fa.a64109ce.js"),["assets/2fa.a64109ce.js","assets/index.6a11a750.js","assets/index.c4c82a28.css"]))},{to:"/messenger",component:n(()=>o(()=>import("./Messenger.14657137.js"),["assets/Messenger.14657137.js","assets/index.6a11a750.js","assets/index.c4c82a28.css"]))}],Ue=e=>(Ie(e.title),t(A,{h:"$full",get children(){return t(h,{get children(){return e.title}})}})),B=(e,r=[])=>(e.forEach(a=>{a.children?B(a.children,r):r.push({to:fe(a.to,"/@manage"),component:a.component||(()=>t(Ue,{get title(){return a.title},get to(){return a.to||"empty"}}))})}),r),ze=B(v).concat(We),Fe=()=>{const e=_();return ve(()=>e("manage.title")),t(c,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[t(Ne,{}),t(b,{w:"$full",h:"calc(100vh - 64px)",get children(){return[t(c,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return O("$background","$neutral2")()},overflowY:"auto",get children(){return[t(I,{items:v}),t(A,{get children(){return t(g,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[t(C,{}),t(k,{})]}})}})]}}),t(c,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return t(be,{get children(){return t(S,{each:ze,children:r=>t(Ae,{get path(){return r.to},get component(){return r.component}})})}})}})]}})]}})},qe=Object.freeze(Object.defineProperty({__proto__:null,default:Fe},Symbol.toStringTag,{value:"Module"}));export{we as F,s as G,qe as i};
