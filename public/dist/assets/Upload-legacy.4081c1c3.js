System.register(["./index-legacy.7de2e5d4.js","./useT-legacy.36940e0e.js","./index-legacy.2b043ce7.js"],(function(e,t){"use strict";var r,n,a,o,s,l,i,c,u,d,g,p,f,h,m,w,y,b,v,k,$,C,_,D,P,x,z,A,F;return{setters:[e=>{r=e.b7,n=e.o,a=e.u,o=e.q,s=e.bq,l=e.f,i=e.x,c=e.a9,u=e.B,d=e.E,g=e.I,p=e.a4,f=e.X,h=e.n,m=e.ah,w=e.a6,y=e.br,b=e.ai,v=e.bp,k=e.aa,$=e.bs,C=e.ab,_=e.bt,D=e.bu,P=e.bv,x=e.p},e=>{z=e.u},e=>{A=e.a,F=e.b}],execute:function(){const t={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},R=async e=>{let t=[];const r=async(e,n)=>{const a=new Promise((a=>{const o=e=>{console.error(e),a({})};e.isFile?e.file((e=>{const r=new File([e],n+e.name,{type:e.type});t.push(r),console.log(r),a({})}),o):e.isDirectory&&e.createReader().readEntries((async t=>{for(let a=0;a<t.length;a++)await r(t[a],n+e.name+"/");a({})}),o)}));await a};return await r(e,""),t},T=e=>({name:e.name,path:""===e.webkitRelativePath?e.name:e.webkitRelativePath,size:e.size,progress:0,speed:0,status:"pending"}),O=[{name:"Stream",upload:async(e,t,n,a=!1)=>{let o=(new Date).valueOf(),s=0;const l=await r.put("/fs/put",await t.arrayBuffer(),{headers:{"File-Path":encodeURIComponent(e),"As-Task":a,"Content-Type":t.type||"application/octet-stream"},onUploadProgress:e=>{if(e.lengthComputable){const t=e.loaded/e.total*100|0;n("progress",t);const r=(new Date).valueOf(),a=(r-o)/1e3;if(a>1){const t=(e.loaded-s)/a,l=(e.total-e.loaded)/t;n("speed",t),console.log(l),o=r,s=e.loaded}100===t&&n("status","backending")}}});return 200===l.code?void 0:new Error(l.message)},provider:/.*/},{name:"Form",upload:async(e,t,n,a=!1)=>{let o=(new Date).valueOf(),s=0;const l=new FormData;l.append("file",t);const i=await r.put("/fs/form",l,{headers:{"File-Path":encodeURIComponent(e),"As-Task":a,"Content-Type":"multipart/form-data"},onUploadProgress:e=>{if(e.lengthComputable){const t=e.loaded/e.total*100|0;n("progress",t);const r=(new Date).valueOf(),a=(r-o)/1e3;if(a>1){const t=(e.loaded-s)/a,l=(e.total-e.loaded)/t;n("speed",t),console.log(l),o=r,s=e.loaded}100===t&&n("status","backending")}}});return 200===i.code?void 0:new Error(i.message)},provider:/.*/}],S=e=>{const r=z();return l(p,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${f()}`}},get children(){return[l(k,{css:{wordBreak:"break-all"},get children(){return e.path}}),l(c,{spacing:"$2",get children(){return[l($,{get colorScheme(){return t[e.status]},get children(){return r(`home.upload.${e.status}`)}}),l(k,{get children(){return[C((()=>_(e.speed))),"/s"]}})]}}),l(D,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return e.progress},size:"sm",get children(){return l(P,{get color(){return f()},rounded:"$md"})}}),l(k,{color:"$danger10",get children(){return e.msg}})]}})};e("default",(()=>{const e=z(),{pathname:t}=a(),[r,k]=o(!1),[$,C]=o(!1),[_,D]=o(!1),[P,E]=s({uploads:[]});let j,I;const U=async e=>{if(0!==e.length){C(!0);for(const t of e){const e=T(t);E("uploads",(t=>[...t,e]))}for await(const t of async function*(e,t,r){const n=new Set;async function a(){const[e,t]=await Promise.race(n);return n.delete(e),t}for(const o of t){const s=(async()=>await r(o,t))().then((e=>[s,e]));n.add(s),n.size>=e&&(yield await a())}for(;n.size;)yield await a()}(3,e,X))console.log(t)}},B=(e,t,r)=>{E("uploads",(t=>t.path===e),t,r)},q=O.filter((e=>e.provider.test(n.provider))),[G,L]=o(q[0]),X=async e=>{const r=""===e.webkitRelativePath?e.name:e.webkitRelativePath;B(r,"status","uploading");const n=x(t(),r);(new Date).valueOf();try{const t=await G().upload(n,e,((e,t)=>{B(r,e,t)}),_());t?(B(r,"status","error"),B(r,"msg",t.message)):(B(r,"status","success"),B(r,"progress",100))}catch(a){console.error(a),B(r,"status","error"),B(r,"msg",a.message)}};return l(p,{w:"$full",pb:"$2",spacing:"$2",get children(){return l(i,{get when(){return!$()},get fallback(){return[l(c,{spacing:"$2",get children(){return[l(u,{colorScheme:"accent",onClick:()=>{E("uploads",(e=>e.filter((({status:e})=>!["success","error"].includes(e))))),console.log(P.uploads)},get children(){return e("home.upload.clear_done")}}),l(i,{get when(){return P.uploads.every((({status:e})=>["success","error"].includes(e)))},get children(){return l(u,{onClick:()=>{C(!1)},get children(){return e("home.upload.back")}})}})]}}),l(d,{get each(){return P.uploads},children:e=>l(S,e)})]},get children(){return[l(g,{type:"file",multiple:!0,ref(e){"function"==typeof j?j(e):j=e},display:"none",onChange:e=>{U(Array.from(e.target.files??[]))}}),l(g,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){"function"==typeof I?I(e):I=e},display:"none",onChange:e=>{U(Array.from(e.target.files??[]))}}),l(p,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${r()?f():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),k(!0)},onDragLeave:()=>{k(!1)},onDrop:async t=>{t.preventDefault(),t.stopPropagation(),k(!1);const r=[],n=Array.from(t.dataTransfer?.items??[]),a=Array.from(t.dataTransfer?.files??[]);let o=0,s=n.length;for(let l=0;l<s;l++){if(o>0)return void h.warning(e("home.upload.only_files_or_one_folder"));const t=n[l].webkitGetAsEntry();console.log(t),t?.isFile?r.push(a[l]):t?.isDirectory&&(r.push(...await R(t)),o++)}o>0&&s>1?h.warning(e("home.upload.only_files_or_one_folder")):(0===r.length&&h.warning(e("home.upload.no_files_drag")),U(r))},spacing:"$4",h:"$56",get children(){return l(i,{get when(){return!r()},get fallback(){return l(m,{get children(){return e("home.upload.release")}})},get children(){return[l(m,{get children(){return e("home.upload.upload-tips")}}),l(w,{w:"30%",get children(){return l(y,{get value(){return G().name},onChange:e=>{L(q.find((t=>t.name===e)))},get options(){return q.map((e=>({label:e.name,value:e.name})))}})}}),l(c,{spacing:"$4",get children(){return[l(b,{compact:!0,size:"xl",get"aria-label"(){return e("home.upload.upload_folder")},colorScheme:"accent",get icon(){return l(A,{})},onClick:()=>{I.click()}}),l(b,{compact:!0,size:"xl",get"aria-label"(){return e("home.upload.upload_files")},get icon(){return l(F,{})},onClick:()=>{j.click()}})]}}),l(v,{get checked(){return _()},onChange:()=>{D(!_())},get children(){return e("home.upload.add_as_task")}})]}})}})]}})}})}))}}}));
