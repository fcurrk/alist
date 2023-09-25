import{bl as G,_ as J,Y as W,u as K,a as Y,f as P,bK as q,e as o,S as T,a4 as _,x as M,A as Q,I as O,a0 as x,ac as A,n as X,ak as j,B as Z,z as E,ab as H,bI as ee,a5 as U,bL as te,a6 as ae,bM as oe,bN as ne,bO as re,p as se}from"./index.6230e6c5.js";import{u as le,c as ie,d as ce}from"./index.ab1a1205.js";import"./api.1f5efeb5.js";async function*de(a,l,p){const n=new Set;async function c(){const[m,i]=await Promise.race(n);return n.delete(m),i}for(const m of l){const i=(async()=>await p(m,l))().then(r=>[i,r]);n.add(i),n.size>=a&&(yield await c())}for(;n.size;)yield await c()}const ue={pending:"neutral",uploading:"info",backending:"info",success:"success",error:"danger"},pe=async a=>{let l=[];const p=async(n,c)=>{await new Promise((i,r)=>{const d=s=>{console.error(s),r(s)};if(n.isFile)n.file(s=>{const u=new File([s],c+s.name,{type:s.type});l.push(u),console.log(u),i({})},d);else if(n.isDirectory){const s=n.createReader(),u=()=>{s.readEntries(async w=>{for(let g=0;g<w.length;g++)await p(w[g],c+n.name+"/");i({}),w.length>0&&u()},d)};u()}})};return await p(a,""),l},me=a=>({name:a.name,path:a.webkitRelativePath?a.webkitRelativePath:a.name,size:a.size,progress:0,speed:0,status:"pending"}),ge=async(a,l,p,n=!1)=>{let c=new Date().valueOf(),m=0;const i=new FormData;i.append("file",l);const r=await G.put("/fs/form",i,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":"multipart/form-data","Last-Modified":l.lastModified,Password:J()},onUploadProgress:d=>{if(d.total){const s=d.loaded/d.total*100|0;p("progress",s);const u=new Date().valueOf(),w=(u-c)/1e3;if(w>1){const b=(d.loaded-m)/w,h=(d.total-d.loaded)/b;p("speed",b),console.log(h),c=u,m=d.loaded}s===100&&p("status","backending")}}});if(r.code!==200)return new Error(r.message)},fe=async(a,l,p,n=!1)=>{let c=new Date().valueOf(),m=0;const i=await G.put("/fs/put",l,{headers:{"File-Path":encodeURIComponent(a),"As-Task":n,"Content-Type":l.type||"application/octet-stream","Last-Modified":l.lastModified,Password:J()},onUploadProgress:r=>{if(r.total){const d=r.loaded/r.total*100|0;p("progress",d);const s=new Date().valueOf(),u=(s-c)/1e3;if(u>1){const g=(r.loaded-m)/u,$=(r.total-r.loaded)/g;p("speed",g),console.log($),c=s,m=r.loaded}d===100&&p("status","backending")}}});if(i.code!==200)return new Error(i.message)},he=[{name:"Stream",upload:fe,provider:/.*/},{name:"Form",upload:ge,provider:/.*/}],we=()=>he.filter(a=>a.provider.test(W.provider)),ke=a=>{const l=K();return o(x,{w:"$full",spacing:"$1",rounded:"$lg",border:"1px solid $neutral7",alignItems:"start",p:"$2",get _hover(){return{border:`1px solid ${A()}`}},get children(){return[o(U,{css:{wordBreak:"break-all"},get children(){return a.path}}),o(_,{spacing:"$2",get children(){return[o(te,{get colorScheme(){return ue[a.status]},get children(){return l(`home.upload.${a.status}`)}}),o(U,{get children(){return[ae(()=>oe(a.speed)),"/s"]}})]}}),o(ne,{w:"$full",trackColor:"$info3",rounded:"$full",get value(){return a.progress},size:"sm",get children(){return o(re,{get color(){return A()},rounded:"$md"})}}),o(U,{color:"$danger10",get children(){return a.msg}})]}})},Fe=()=>{const a=K(),{pathname:l}=Y(),{refresh:p}=le(),[n,c]=P(!1),[m,i]=P(!1),[r,d]=P(!1),[s,u]=q({uploads:[]}),w=()=>s.uploads.every(({status:e})=>["success","error"].includes(e));let g,b;const $=async e=>{if(e.length!==0){i(!0);for(const t of e){const k=me(t);u("uploads",f=>[...f,k])}for await(const t of de(3,e,V))console.log(t);p(void 0,!0)}},h=(e,t,k)=>{u("uploads",f=>f.path===e,t,k)},D=we(),[R,N]=P(D[0]),V=async e=>{const t=e.webkitRelativePath?e.webkitRelativePath:e.name;h(t,"status","uploading");const k=se(l(),t);try{const f=await R().upload(k,e,(S,C)=>{h(t,S,C)},r());f?(h(t,"status","error"),h(t,"msg",f.message)):(h(t,"status","success"),h(t,"progress",100))}catch(f){console.error(f),h(t,"status","error"),h(t,"msg",f.message)}};return o(x,{w:"$full",pb:"$2",spacing:"$2",get children(){return o(T,{get when(){return!m()},get fallback(){return[o(_,{spacing:"$2",get children(){return[o(M,{colorScheme:"accent",onClick:()=>{u("uploads",e=>e.filter(({status:t})=>!["success","error"].includes(t))),console.log(s.uploads)},get children(){return a("home.upload.clear_done")}}),o(T,{get when(){return w()},get children(){return o(M,{onClick:()=>{i(!1)},get children(){return a("home.upload.back")}})}})]}}),o(Q,{get each(){return s.uploads},children:e=>o(ke,e)})]},get children(){return[o(O,{type:"file",multiple:!0,ref(e){const t=g;typeof t=="function"?t(e):g=e},display:"none",onChange:e=>{var t;$(Array.from((t=e.target.files)!=null?t:[]))}}),o(O,{type:"file",multiple:!0,webkitdirectory:!0,ref(e){const t=b;typeof t=="function"?t(e):b=e},display:"none",onChange:e=>{var t;$(Array.from((t=e.target.files)!=null?t:[]))}}),o(x,{w:"$full",justifyContent:"center",get border(){return`2px dashed ${n()?A():"$neutral8"}`},rounded:"$lg",onDragOver:e=>{e.preventDefault(),c(!0)},onDragLeave:()=>{c(!1)},onDrop:async e=>{var v,I,z,B;e.preventDefault(),e.stopPropagation(),c(!1);const t=[],k=Array.from((I=(v=e.dataTransfer)==null?void 0:v.items)!=null?I:[]),f=Array.from((B=(z=e.dataTransfer)==null?void 0:z.files)!=null?B:[]);let S=k.length;const C=[];for(let F=0;F<S;F++){const y=k[F].webkitGetAsEntry();y!=null&&y.isFile?t.push(f[F]):y!=null&&y.isDirectory&&C.push(y)}for(const F of C){const L=await pe(F);t.push(...L)}t.length===0&&X.warning(a("home.upload.no_files_drag")),$(t)},spacing:"$4",h:"$56",get children(){return o(T,{get when(){return!n()},get fallback(){return o(j,{get children(){return a("home.upload.release")}})},get children(){return[o(j,{get children(){return a("home.upload.upload-tips")}}),o(Z,{w:"30%",get children(){return o(E,{get value(){return R().name},onChange:e=>{N(D.find(t=>t.name===e))},get options(){return D.map(e=>({label:e.name,value:e.name}))}})}}),o(_,{spacing:"$4",get children(){return[o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_folder")},colorScheme:"accent",get icon(){return o(ie,{})},onClick:()=>{b.click()}}),o(H,{compact:!0,size:"xl",get["aria-label"](){return a("home.upload.upload_files")},get icon(){return o(ce,{})},onClick:()=>{g.click()}})]}}),o(ee,{get checked(){return r()},onChange:()=>{d(!r())},get children(){return a("home.upload.add_as_task")}})]}})}})]}})}})};export{Fe as default};
