import{b7 as H,_ as G,o as W,u as K,q as P,bq as N,f as o,x as D,a7 as U,B as O,C as Q,I as L,a2 as v,ah as x,n as S,af as j,a4 as X,br as Y,ag as q,bo as Z,a8 as T,bs as E,a9 as ee,bt as te,bu as ae,bv as oe,p as re}from"./index.85e4b573.js";import{u as J}from"./useT.6b9e0f05.js";import{a as ne,b as se}from"./index.d3021a6c.js";async function*le(a,d,i){const n=new Set;async function u(){const[p,s]=await Promise.race(n);return n.delete(p),s}for(const p of d){const s=(async()=>await i(p,d))().then(l=>[s,l]);n.add(s),n.size>=a&&(yield await u())}for(;n.size;)yield await u()}const ie={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},ce=async a=>{let d=[];const i=async(n,u)=>{await new Promise(s=>{const l=r=>{console.error(r),s({})};if(n.isFile)n.file(r=>{const c=new File([r],u+r.name,{type:r.type});d.push(c),console.log(c),s({})},l);else if(n.isDirectory){const r=n.createReader(),c=()=>{r.readEntries(async m=>{m.length===0&&s({});for(let g=0;g<m.length;g++)await i(m[g],u+n.name+"/");c()},l)};c()}})};return await i(a,""),d},de=a=>({name:a.name,path:a.webkitRelativePath===""?a.name:a.webkitRelativePath,size:a.size,progress:0,speed:0,status:"pending"}),ue=async(a,d,i,n=!1)=>{let u=new Date().valueOf(),p=0;const s=new FormData;s.append("file",d);const l=await H.put("/fs/form",s,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":"multipart/form-data",Password:G()},onUploadProgress:r=>{if(r.total){const c=r.loaded/r.total*100|0;i("progress",c);const m=new Date().valueOf(),g=(m-u)/1e3;if(g>1){const k=(r.loaded-p)/g,$=(r.total-r.loaded)/k;i("speed",k),console.log($),u=m,p=r.loaded}c===100&&i("status","backending")}}});if(l.code!==200)return new Error(l.message)},pe=async(a,d,i,n=!1)=>{let u=new Date().valueOf(),p=0;const s=await H.put("/fs/put",await d.arrayBuffer(),{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":d.type||"application/octet-stream",Password:G()},onUploadProgress:l=>{if(l.total){const r=l.loaded/l.total*100|0;i("progress",r);const c=new Date().valueOf(),m=(c-u)/1e3;if(m>1){const y=(l.loaded-p)/m,f=(l.total-l.loaded)/y;i("speed",y),console.log(f),u=c,p=l.loaded}r===100&&i("status","backending")}}});if(s.code!==200)return new Error(s.message)},me=[{name:"Stream",upload:pe,provider:/.*/},{name:"Form",upload:ue,provider:/.*/}],ge=()=>me.filter(a=>a.provider.test(W.provider)),fe=a=>{const d=J();return o(v,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${x()}`}},get children(){return[o(T,{css:{wordBreak:"break-all"},get children(){return a.path}}),o(U,{spacing:"$2",get children(){return[o(E,{get colorScheme(){return ie[a.status]},get children(){return d(`home.upload.${a.status}`)}}),o(T,{get children(){return[ee(()=>te(a.speed)),"/s"]}})]}}),o(ae,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return o(oe,{get color(){return x()},rounded:"$md"})}}),o(T,{color:"$danger10",get children(){return a.msg}})]}})},ke=()=>{const a=J(),{pathname:d}=K(),[i,n]=P(!1),[u,p]=P(!1),[s,l]=P(!1),[r,c]=N({uploads:[]}),m=()=>r.uploads.every(({status:e})=>["success","error"].includes(e));let g,y;const k=async e=>{if(e.length!==0){p(!0);for(const t of e){const w=de(t);c("uploads",h=>[...h,w])}for await(const t of le(3,e,V))console.log(t)}},f=(e,t,w)=>{c("uploads",h=>h.path===e,t,w)},$=ge(),[R,M]=P($[0]),V=async e=>{const t=e.webkitRelativePath===""?e.name:e.webkitRelativePath;f(t,"status","uploading");const w=re(d(),t);new Date().valueOf();try{const h=await R().upload(w,e,(F,C)=>{f(t,F,C)},s());h?(f(t,"status","error"),f(t,"msg",h.message)):(f(t,"status","success"),f(t,"progress",100))}catch(h){console.error(h),f(t,"status","error"),f(t,"msg",h.message)}};return o(v,{w:"$full",pb:"$2",spacing:"$2",get children(){return o(D,{get when(){return!u()},get fallback(){return[o(U,{spacing:"$2",get children(){return[o(O,{colorScheme:"accent",onClick:()=>{c("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(r.uploads)},get children(){return a("home.upload.clear_done")}}),o(D,{get when(){return m()},get children(){return o(O,{onClick:()=>{p(!1)},get children(){return a("home.upload.back")}})}})]}}),o(Q,{get each(){return r.uploads},children:e=>o(fe,e)})]},get children(){return[o(L,{type:"file",multiple:!0,ref(e){const t=g;typeof t=="function"?t(e):g=e},display:"none",onChange:e=>{var t;k(Array.from((t=e.target.files)!=null?t:[]))}}),o(L,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=y;typeof t=="function"?t(e):y=e},display:"none",onChange:e=>{var t;k(Array.from((t=e.target.files)!=null?t:[]))}}),o(v,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${i()?x():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),n(!0)},onDragLeave:()=>{n(!1)},onDrop:async e=>{var A,I,z,B;e.preventDefault(),e.stopPropagation(),n(!1);const t=[],w=Array.from((I=(A=e.dataTransfer)==null?void 0:A.items)!=null?I:[]),h=Array.from((B=(z=e.dataTransfer)==null?void 0:z.files)!=null?B:[]);let F=0,C=w.length;for(let _=0;_<C;_++){if(F>0){S.warning(a("home.upload.only_files_or_one_folder"));return}const b=w[_].webkitGetAsEntry();console.log(b),b!=null&&b.isFile?t.push(h[_]):b!=null&&b.isDirectory&&(t.push(...await ce(b)),F++)}if(F>0&&C>1){S.warning(a("home.upload.only_files_or_one_folder"));return}t.length===0&&S.warning(a("home.upload.no_files_drag")),k(t)},spacing:"$4",h:"$56",get children(){return o(D,{get when(){return!i()},get fallback(){return o(j,{get children(){return a("home.upload.release")}})},get children(){return[o(j,{get children(){return a("home.upload.upload-tips")}}),o(X,{w:"30%",get children(){return o(Y,{get value(){return R().name},onChange:e=>{M($.find(t=>t.name===e))},get options(){return $.map(e=>({label:e.name,value:e.name}))}})}}),o(U,{spacing:"$4",get children(){return[o(q,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return o(ne,{})},onClick:()=>{y.click()}}),o(q,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return o(se,{})},onClick:()=>{g.click()}})]}}),o(Z,{get checked(){return s()},onChange:()=>{l(!s())},get children(){return a("home.upload.add_as_task")}})]}})}})]}})}})};export{ke as default};
