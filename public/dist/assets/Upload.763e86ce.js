import{b4 as H,o as V,u as W,q as D,br as K,f as o,x as P,a8 as U,B as O,E as N,I as L,a3 as R,bb as v,n as S,bf as j,a5 as Q,bs as X,ae as q,bq as Y,bc as T,bt as Z,aB as E,bu as ee,bv as te,bw as ae,p as oe}from"./index.84ab5176.js";import{u as G}from"./useT.7f765a5d.js";import{a as ne,b as re}from"./index.806618b3.js";async function*se(a,d,i){const r=new Set;async function u(){const[p,s]=await Promise.race(r);return r.delete(p),s}for(const p of d){const s=(async()=>await i(p,d))().then(l=>[s,l]);r.add(s),r.size>=a&&(yield await u())}for(;r.size;)yield await u()}const le={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},ie=async a=>{let d=[];const i=async(r,u)=>{await new Promise(s=>{const l=n=>{console.error(n),s({})};r.isFile?r.file(n=>{const c=new File([n],u+n.name,{type:n.type});d.push(c),console.log(c),s({})},l):r.isDirectory&&r.createReader().readEntries(async c=>{for(let m=0;m<c.length;m++)await i(c[m],u+r.name+"/");s({})},l)})};return await i(a,""),d},ce=a=>({name:a.name,path:a.webkitRelativePath===""?a.name:a.webkitRelativePath,size:a.size,progress:0,speed:0,status:"pending"}),de=async(a,d,i,r=!1)=>{let u=new Date().valueOf(),p=0;const s=new FormData;s.append("file",d);const l=await H.put("/fs/form",s,{headers:{"File-Path":encodeURIComponent(a),"As-Task":r,"Content-Type":"multipart/form-data"},onUploadProgress:n=>{if(n.lengthComputable){const c=n.loaded/n.total*100|0;i("progress",c);const m=new Date().valueOf(),b=(m-u)/1e3;if(b>1){const k=(n.loaded-p)/b,$=(n.total-n.loaded)/k;i("speed",k),console.log($),u=m,p=n.loaded}c===100&&i("status","backending")}}});if(l.code!==200)return new Error(l.message)},ue=async(a,d,i,r=!1)=>{let u=new Date().valueOf(),p=0;const s=await H.put("/fs/put",await d.arrayBuffer(),{headers:{"File-Path":encodeURIComponent(a),"As-Task":r,"Content-Type":d.type||"application/octet-stream"},onUploadProgress:l=>{if(l.lengthComputable){const n=l.loaded/l.total*100|0;i("progress",n);const c=new Date().valueOf(),m=(c-u)/1e3;if(m>1){const y=(l.loaded-p)/m,g=(l.total-l.loaded)/y;i("speed",y),console.log(g),u=c,p=l.loaded}n===100&&i("status","backending")}}});if(s.code!==200)return new Error(s.message)},pe=[{name:"Stream",upload:ue,provider:/.*/},{name:"Form",upload:de,provider:/.*/}],me=()=>pe.filter(a=>a.provider.test(V.provider)),ge=a=>{const d=G();return o(R,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${v()}`}},get children(){return[o(T,{css:{wordBreak:"break-all"},get children(){return a.path}}),o(U,{spacing:"$2",get children(){return[o(Z,{get colorScheme(){return le[a.status]},get children(){return d(`home.upload.${a.status}`)}}),o(T,{get children(){return[E(()=>ee(a.speed)),"/s"]}})]}}),o(te,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return o(ae,{get color(){return v()},rounded:"$md"})}}),o(T,{color:"$danger10",get children(){return a.msg}})]}})},ye=()=>{const a=G(),{pathname:d}=W(),[i,r]=D(!1),[u,p]=D(!1),[s,l]=D(!1),[n,c]=K({uploads:[]}),m=()=>n.uploads.every(({status:e})=>["success","error"].includes(e));let b,y;const k=async e=>{if(e.length!==0){p(!0);for(const t of e){const h=ce(t);c("uploads",f=>[...f,h])}for await(const t of se(3,e,M))console.log(t)}},g=(e,t,h)=>{c("uploads",f=>f.path===e,t,h)},$=me(),[x,J]=D($[0]),M=async e=>{const t=e.webkitRelativePath===""?e.name:e.webkitRelativePath;g(t,"status","uploading");const h=oe(d(),t);new Date().valueOf();try{const f=await x().upload(h,e,(C,F)=>{g(t,C,F)},s());f?(g(t,"status","error"),g(t,"msg",f.message)):(g(t,"status","success"),g(t,"progress",100))}catch(f){console.error(f),g(t,"status","error"),g(t,"msg",f.message)}};return o(R,{w:"$full",pb:"$2",spacing:"$2",get children(){return o(P,{get when(){return!u()},get fallback(){return[o(U,{spacing:"$2",get children(){return[o(O,{colorScheme:"accent",onClick:()=>{c("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(n.uploads)},get children(){return a("home.upload.clear_done")}}),o(P,{get when(){return m()},get children(){return o(O,{onClick:()=>{p(!1)},get children(){return a("home.upload.back")}})}})]}}),o(N,{get each(){return n.uploads},children:e=>o(ge,e)})]},get children(){return[o(L,{type:"file",multiple:!0,ref(e){const t=b;typeof t=="function"?t(e):b=e},display:"none",onChange:e=>{var t;k(Array.from((t=e.target.files)!=null?t:[]))}}),o(L,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=y;typeof t=="function"?t(e):y=e},display:"none",onChange:e=>{var t;k(Array.from((t=e.target.files)!=null?t:[]))}}),o(R,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${i()?v():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),r(!0)},onDragLeave:()=>{r(!1)},onDrop:async e=>{var A,B,I,z;e.preventDefault(),e.stopPropagation(),r(!1);const t=[],h=Array.from((B=(A=e.dataTransfer)==null?void 0:A.items)!=null?B:[]),f=Array.from((z=(I=e.dataTransfer)==null?void 0:I.files)!=null?z:[]);let C=0,F=h.length;for(let _=0;_<F;_++){if(C>0){S.warning(a("home.upload.only_files_or_one_folder"));return}const w=h[_].webkitGetAsEntry();console.log(w),w!=null&&w.isFile?t.push(f[_]):w!=null&&w.isDirectory&&(t.push(...await ie(w)),C++)}if(C>0&&F>1){S.warning(a("home.upload.only_files_or_one_folder"));return}t.length===0&&S.warning(a("home.upload.no_files_drag")),k(t)},spacing:"$4",h:"$56",get children(){return o(P,{get when(){return!i()},get fallback(){return o(j,{get children(){return a("home.upload.release")}})},get children(){return[o(j,{get children(){return a("home.upload.upload-tips")}}),o(Q,{w:"30%",get children(){return o(X,{get value(){return x().name},onChange:e=>{J($.find(t=>t.name===e))},get options(){return $.map(e=>({label:e.name,value:e.name}))}})}}),o(U,{spacing:"$4",get children(){return[o(q,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return o(ne,{})},onClick:()=>{y.click()}}),o(q,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return o(re,{})},onClick:()=>{b.click()}})]}}),o(Y,{get checked(){return s()},onChange:()=>{l(!s())},get children(){return a("home.upload.add_as_task")}})]}})}})]}})}})};export{ye as default};
