!function(){function e(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,i=[],u=!0,a=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(c){a=!0,o=c}finally{try{u||null==t.return||t.return()}finally{if(a)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}System.register(["./index-legacy.5eb29f86.js","./useTitle-legacy.dcb25dfb.js","./index-legacy.a2571317.js","./index-legacy.badd5e79.js"],(function(n,t){"use strict";var r,o,i,u,a,c,l,s,g,d,m,f,p,h,b,v,y,$,E,A,S,j,w,C,I,k,O,x,L,T,P,_,R,D,G,U,z,B,N,V,Y,W,M,X,F,H,Q,Z,q,J,K,ee,ne,te,re,oe,ie,ue,ae,ce,le,se,ge,de,me,fe;return{setters:[function(e){r=e.h,o=e.G,i=e.a4,u=e.k,a=e.ah,c=e.ai,l=e.bP,s=e.a0,g=e.$,d=e.b,m=e.a,f=e.N,p=e.O,h=e.L,b=e.S,v=e.aA,y=e.ay,$=e.m,E=e.bQ,A=e.ae,S=e.a7,j=e.aF,w=e.V,C=e.W,I=e.bR,k=e.bS,O=e.bT,x=e.bU,L=e.bV,T=e.bW,P=e.bX,_=e.bY,R=e.bZ,D=e.aT,G=e.b_,U=e.b$,z=e.c0,B=e.aB,N=e.c1,V=e.c2,Y=e.aM,W=e.X,M=e.am,X=e.c3,F=e.c4,H=e.n,Q=e.bn,Z=e.bf,q=e.bg,J=e.bh,K=e.bi,ee=e.bj,ne=e.aE,te=e.bl,re=e.bm,oe=e.c5,ie=e.c6,ue=e.c7},function(e){ae=e.b,ce=e.a},function(e){le=e.A,se=e.f,ge=e.g,de=e.h,me=e.i},function(e){fe=e.S}],execute:function(){var pe=n("G",function(e){return e[e.SINGLE=0]="SINGLE",e[e.SITE=1]="SITE",e[e.STYLE=2]="STYLE",e[e.PREVIEW=3]="PREVIEW",e[e.GLOBAL=4]="GLOBAL",e[e.ARIA2=5]="ARIA2",e[e.INDEX=6]="INDEX",e[e.SSO=7]="SSO",e[e.LDAP=8]="LDAP",e[e.S3=9]="S3",e}(pe||{})),he=n("F",function(e){return e[e.PUBLIC=0]="PUBLIC",e[e.PRIVATE=1]="PRIVATE",e[e.READONLY=2]="READONLY",e[e.DEPRECATED=3]="DEPRECATED",e}(he||{})),be=function(e){var n=u((function(){if(!a.is_admin(c())){if(void 0===e.role)return!1;if(e.role===l.GENERAL&&!a.is_general(c()))return!1}return!0}));return r(g,{get fallback(){return r(ve,e)},get children(){return[r(s,{get when(){return!n()},children:null}),r(s,{get when(){return e.children},get children(){return r(ye,e)}})]}})},ve=function(e){var n=d().pathname,t=m(),o=function(){return n()===e.to};return r(le,{get cancelBase(){return e.to.startsWith("http")},display:"flex",as:f,get href(){return e.to},onClick:function(n){if(Ce(),e.refresh){var t;null===(t=n.stopPropagation)||void 0===t||t.call(n);var r=e.to;r.startsWith("http")||(r=p(r)),window.open(r,"_self")}},w:"$full",alignItems:"center",get _hover(){return{bgColor:o()?"$info4":h(),textDecoration:"none"}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get bgColor(){return o()?"$info4":""},get color(){return o()?"$info11":""},get external(){return e.external},get children(){return[r(b,{get when(){return e.icon},get children(){return r(v,{mr:"$2",get as(){return e.icon}})}}),r(y,{get children(){return t(e.title)}})]}})},ye=function(n){var t=d().pathname,o=e($(t().includes(n.to)),2),i=o[0],u=o[1],a=m();return r(S,{w:"$full",get children(){return[r(E,{justifyContent:"space-between",onClick:function(){u(!i())},w:"$full",alignItems:"center",get _hover(){return{bgColor:h()}},px:"$2",py:"$1_5",rounded:"$md",cursor:"pointer",get children(){return[r(A,{get children(){return[r(b,{get when(){return n.icon},get children(){return r(v,{mr:"$2",get as(){return n.icon}})}}),r(y,{get children(){return a(n.title)}})]}}),r(v,{as:se,get transform(){return i()?"rotate(90deg)":"none"},transition:"transform 0.2s"})]}}),r(b,{get when(){return i()},get children(){return r(S,{pl:"$2",get children(){return r($e,{get items(){return n.children}})}})}})]}})},$e=function(e){return r(i,{p:"$2",w:"$full",color:"$neutral11",spacing:"$1",get children(){return r(o,{get each(){return e.items},children:function(e){return r(be,e)}})}})};var Ee=w((function(){return C((function(){return t.import("./Common-legacy.a556eb5a.js")}),void 0)})),Ae=[{title:"manage.sidemenu.profile",icon:I,to:"/@manage",role:l.GUEST,component:w((function(){return C((function(){return t.import("./Profile-legacy.8b9be0f2.js")}),void 0)}))},{title:"manage.sidemenu.settings",icon:k,to:"/@manage/settings",children:[{title:"manage.sidemenu.site",icon:O,to:"/@manage/settings/site",component:function(){return r(Ee,{get group(){return pe.SITE}})}},{title:"manage.sidemenu.style",icon:x,to:"/@manage/settings/style",component:function(){return r(Ee,{get group(){return pe.STYLE}})}},{title:"manage.sidemenu.preview",icon:L,to:"/@manage/settings/preview",component:function(){return r(Ee,{get group(){return pe.PREVIEW}})}},{title:"manage.sidemenu.global",icon:T,to:"/@manage/settings/global",component:function(){return r(Ee,{get group(){return pe.GLOBAL}})}},{title:"manage.sidemenu.sso",icon:P,to:"/@manage/settings/sso",component:function(){return r(Ee,{get group(){return pe.SSO}})}},{title:"manage.sidemenu.ldap",icon:P,to:"/@manage/settings/ldap",component:function(){return r(Ee,{get group(){return pe.LDAP}})}},{title:"manage.sidemenu.s3",icon:_,to:"/@manage/settings/s3",component:w((function(){return C((function(){return t.import("./S3-legacy.b02cdac9.js")}),void 0)}))},{title:"manage.sidemenu.other",icon:R,to:"/@manage/settings/other",component:w((function(){return C((function(){return t.import("./Other-legacy.cec0cac2.js")}),void 0)}))}]},{title:"manage.sidemenu.tasks",icon:function(e){return j({a:{viewBox:"0 0 16 16"},c:'<path fill-rule="evenodd" d="M0 1.75C0 .784.784 0 1.75 0h3.5C6.216 0 7 .784 7 1.75v3.5A1.75 1.75 0 015.25 7H4v4a1 1 0 001 1h4v-1.25C9 9.784 9.784 9 10.75 9h3.5c.966 0 1.75.784 1.75 1.75v3.5A1.75 1.75 0 0114.25 16h-3.5A1.75 1.75 0 019 14.25v-.75H5A2.5 2.5 0 012.5 11V7h-.75A1.75 1.75 0 010 5.25v-3.5zm1.75-.25a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5zm9 9a.25.25 0 00-.25.25v3.5c0 .138.112.25.25.25h3.5a.25.25 0 00.25-.25v-3.5a.25.25 0 00-.25-.25h-3.5z"/>'},e)},to:"/@manage/tasks",children:[{title:"manage.sidemenu.offline_download",icon:D,to:"/@manage/tasks/aria2",component:w((function(){return C((function(){return t.import("./offline_download-legacy.1c4eae65.js")}),void 0)}))},{title:"manage.sidemenu.upload",icon:G,to:"/@manage/tasks/upload",component:w((function(){return C((function(){return t.import("./Upload-legacy.9eda9197.js")}),void 0)}))},{title:"manage.sidemenu.copy",icon:U,to:"/@manage/tasks/copy",component:w((function(){return C((function(){return t.import("./Copy-legacy.b5e4d745.js")}),void 0)}))}]},{title:"manage.sidemenu.users",icon:z,to:"/@manage/users",component:w((function(){return C((function(){return t.import("./Users-legacy.bc7e19c6.js")}),void 0)}))},{title:"manage.sidemenu.storages",icon:ge,to:"/@manage/storages",component:w((function(){return C((function(){return t.import("./Storages-legacy.2ef0f8aa.js")}),void 0)}))},{title:"manage.sidemenu.metas",icon:fe,to:"/@manage/metas",component:w((function(){return C((function(){return t.import("./Metas-legacy.3992c5e2.js")}),void 0)}))},{title:"manage.sidemenu.indexes",icon:B,to:"/@manage/indexes",component:w((function(){return C((function(){return t.import("./indexes-legacy.f4aa1b40.js")}),void 0)}))},{title:"manage.sidemenu.backup-restore",to:"/@manage/backup-restore",icon:de,component:w((function(){return C((function(){return t.import("./backup-restore-legacy.a12d64cc.js")}),void 0)}))},{title:"manage.sidemenu.about",icon:N,to:"/@manage/about",role:l.GUEST,component:w((function(){return C((function(){return t.import("./About-legacy.361e7a90.js")}),void 0)}))},{title:"manage.sidemenu.home",icon:V,to:"/",role:l.GUEST,refresh:!0}],Se=Y(),je=Se.isOpen,we=Se.onOpen,Ce=Se.onClose,Ie=function(){var e=m(),n=d().to;return r(S,{as:"header",position:"sticky",top:"0",left:"0",right:"0",zIndex:"$sticky",height:"64px",flexShrink:0,shadow:"$md",p:"$4",get bgColor(){return W("$background","$neutral2")()},get children(){return[r(E,{alignItems:"center",justifyContent:"space-between",h:"$full",get children(){return[r(A,{spacing:"$2",get children(){return[r(M,{"aria-label":"menu",get icon(){return r(me,{})},display:{"@sm":"none"},onClick:we,size:"sm"}),r(y,{fontSize:"$xl",color:"$info9",cursor:"pointer",onClick:function(){n("/@manage")},get children(){return e("manage.title")}})]}}),r(A,{spacing:"$1",get children(){return r(M,{"aria-label":"logout",get icon(){return r(X,{})},onClick:function(){F(),H.success(e("manage.logout_success")),n("/@login?redirect=".concat(encodeURIComponent(location.pathname)))},size:"sm"})}})]}}),r(Q,{get opened(){return je()},placement:"left",onClose:Ce,get children(){return[r(Z,{}),r(q,{get children(){return[r(J,{}),r(K,{color:"$info9",get children(){return e("manage.title")}}),r(ee,{get children(){return[r($e,{items:Ae}),r(ne,{get children(){return r(A,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(te,{}),r(re,{})]}})}})]}})]}})]}})]}})},ke=[{to:"/storages/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.342d5297.js")}),void 0)}))},{to:"/storages/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.342d5297.js")}),void 0)}))},{to:"/users/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.eec8e37d.js")}),void 0)}))},{to:"/users/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.eec8e37d.js")}),void 0)}))},{to:"/metas/add",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.82caf41a.js")}),void 0)}))},{to:"/metas/edit/:id",component:w((function(){return C((function(){return t.import("./AddOrEdit-legacy.82caf41a.js")}),void 0)}))},{to:"/2fa",component:w((function(){return C((function(){return t.import("./2fa-legacy.80edf57a.js")}),void 0)}))},{to:"/messenger",component:w((function(){return C((function(){return t.import("./Messenger-legacy.de573ce6.js")}),void 0)}))}],Oe=function(e){return ae(e.title),r(ne,{h:"$full",get children(){return r(y,{get children(){return e.title}})}})},xe=function e(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return n.forEach((function(n){n.children?e(n.children,t):t.push({to:oe(n.to,"/@manage"),component:n.component||function(){return r(Oe,{get title(){return n.title},get to(){return n.to||"empty"}})}})})),t}(Ae).concat(ke),Le=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var e=m();return ce((function(){return e("manage.title")})),r(S,{css:{"--hope-colors-background":"var(--hope-colors-loContrast)"},bgColor:"$background",w:"$full",get children(){return[r(Ie,{}),r(E,{w:"$full",h:"calc(100vh - 64px)",get children(){return[r(S,{display:{"@initial":"none","@sm":"block"},w:"$56",h:"$full",shadow:"$md",get bgColor(){return W("$background","$neutral2")()},overflowY:"auto",get children(){return[r($e,{items:Ae}),r(ne,{get children(){return r(A,{spacing:"$4",p:"$2",color:"$neutral11",get children(){return[r(te,{}),r(re,{})]}})}})]}}),r(S,{w:{"@initial":"$full","@sm":"calc(100% - 14rem)"},p:"$4",overflowY:"auto",get children(){return r(ie,{get children(){return r(o,{each:xe,children:function(e){return r(ue,{get path(){return e.to},get component(){return e.component}})}})}})}})]}})]}})}},Symbol.toStringTag,{value:"Module"}));n("i",Le)}}}))}();
