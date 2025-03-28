import{an as k,a as P,b0 as b,bh as A,m as w,h as t,al as W,b2 as E,aD as ne,S as m,aJ as Y,cr as Ve,cs as je,a7 as B,bV as ye,dh as xe,C as x,bi as z,n as ee,ac as te,a8 as G,d9 as He,di as F,H as ve,dj as Ue,cp as _e,k as D,e as Je,x as Ke,I as Xe,G as T,t as qe,cT as Qe,aR as V,cW as ke,dk as pe,dl as Ce,ap as ae}from"./index.484c5029.js";import{P as Ye}from"./Paginator.8fcc5c44.js";var L;(function(e){e[e.Pending=0]="Pending",e[e.Running=1]="Running",e[e.Succeeded=2]="Succeeded",e[e.Canceling=3]="Canceling",e[e.Canceled=4]="Canceled",e[e.Errored=5]="Errored",e[e.Failing=6]="Failing",e[e.Failed=7]="Failed",e[e.WaitingRetry=8]="WaitingRetry",e[e.BeforeRetry=9]="BeforeRetry"})(L||(L={}));const Ze={[L.Failed]:"danger",[L.Succeeded]:"success",[L.Canceled]:"neutral"},Ee=e=>{if(e.role<0)return null;const n=["info","neutral","accent"];return t(_e,{get colorScheme(){return n[e.role]},css:{overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"},get children(){return e.name}})},et=e=>{const n=P();return t(_e,{get colorScheme(){var s;return(s=Ze[e.state])!=null?s:"info"},get children(){return n(`tasks.state.${e.state}`)}})},l=[{name:"name",textAlign:"left",w:k().role===2?"calc(100% - 660px)":"calc(100% - 560px)"},{name:"creator",textAlign:"center",w:k().role===2?"100px":"0"},{name:"state",textAlign:"center",w:"100px"},{name:"progress",textAlign:"left",w:"140px"},{name:"speed",textAlign:"center",w:"100px"},{name:"operation",textAlign:"right",w:"220px"}],Z=e=>Math.floor(e).toString().padStart(2,"0"),tt=e=>{const n=e/1e3%60,s=e/1e3/60%60,i=e/1e3/3600;return`${Z(i)}:${Z(s)}:${Z(n)}`},rt=e=>{const n=P(),s=e.done==="undone"?"cancel":"delete",i=e.done==="done"&&(e.state===L.Failed||e.state===L.Canceled),[d,g]=b(()=>A.post(`/task/${e.type}/${s}?tid=${e.id}`)),[p,v]=b(()=>A.post(`/task/${e.type}/retry?tid=${e.id}`)),[u,f]=w(!1),C=e.name.match(e.nameAnalyzer.regex),I=C===null?e.name:e.nameAnalyzer.title(C),h=e.start_time===null?-1:new Date(e.start_time).getTime(),j=e.end_time===null?new Date().getTime():new Date(e.end_time).getTime();let O="-";const H=(c,$)=>{let _=$/c,R="bytes/s";return _>1024&&(_/=1024,R="KB/s"),_>1024&&(_/=1024,R="MB/s"),_>1024&&(_/=1024,R="GB/s"),`${_.toFixed(2)} ${R}`};if(e.done){if(e.start_time!==e.end_time&&e.progress>0&&h!==-1){const c=(j-h)/1e3,$=e.total_bytes*e.progress/100;O=H(c,$)}}else if(e.prevProgress!==void 0&&e.prevFetchTime!==void 0){const c=(e.curFetchTime-e.prevFetchTime)/1e3,$=(e.progress-e.prevProgress)*e.total_bytes/100;O=H(c,$)}return t(m,{get when(){return!u()},get children(){return[t(W,{w:"$full",p:"$2",get children(){return[t(W,{get w(){return l[0].w},spacing:"$1",get children(){return[t(E,{"on:click":c=>{c.stopPropagation()},get checked(){return e.local.selected},onChange:c=>{e.setLocal({selected:c.target.checked,expanded:e.local.expanded})}}),t(ne,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:I})]}}),t(m,{get when(){return k().role===2},get children(){return t(Y,{get w(){return l[1].w},get children(){return t(Ee,{get name(){return e.creator},get role(){return e.creator_role}})}})}}),t(Y,{get w(){return l[2].w},get children(){return t(et,{get state(){return e.state}})}}),t(Ve,{get w(){return l[3].w},trackColor:"$info3",rounded:"$full",size:"sm",get value(){return e.progress},mr:"$1",get children(){return t(je,{color:"$info8",rounded:"$md"})}}),t(Y,{get w(){return l[1].w},get children(){return t(B,{size:"sm",css:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:O})}}),t(ye,{get w(){return l[5].w},gap:"$1",get children(){return[t(xe,{}),t(m,{get when(){return e.canRetry},get children(){return t(x,{size:"sm",disabled:!i,display:i?"block":"none",get loading(){return p()},onClick:async()=>{const c=await v();z(c,()=>{ee.info(n("tasks.retry")),f(!0)})},get children(){return n("tasks.retry")}})}}),t(x,{size:"sm",colorScheme:"danger",get loading(){return d()},onClick:async()=>{const c=await g();z(c,()=>{ee.success(n("global.delete_success")),f(!0)})},get children(){return n(`global.${s}`)}}),t(x,{size:"sm",colorScheme:"neutral",onClick:()=>{e.setLocal({selected:e.local.selected,expanded:!e.local.expanded})},get children(){return te(()=>!!e.local.expanded,!0)()?n("tasks.fold"):n("tasks.expand")}})]}})]}}),t(m,{get when(){return e.local.expanded},get children(){return t(G,{css:{wordBreak:"break-all",fontSize:"0.8em"},w:"$full",pl:"$2",pr:"$2",get children(){return[t(He,{templateColumns:"min-content 1fr",w:"$full",columnGap:"$4",mb:"$2",get children(){return[t(m,{when:h!==-1,get children(){return[t(F,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return n("tasks.attr.time_elapsed")}}),t(F,{color:"$neutral9",get children(){return tt(j-h)}})]}}),t(m,{when:C!==null,get children(){return t(ve,{get each(){return Object.entries(e.nameAnalyzer.attrs)},children:c=>{const $=c[1](C);return $===void 0?null:t(m,{get when(){return c[1]!==void 0},get children(){return[t(F,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return c[0]}}),t(F,{color:"$neutral9",children:$})]}})}})}}),t(F,{color:"$neutral9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return n("tasks.attr.status")}}),t(F,{color:"$neutral9",get children(){return e.status}}),t(m,{get when(){return e.error},get children(){return[t(F,{color:"$danger9",textAlign:"right",css:{whiteSpace:"nowrap"},get children(){return n("tasks.attr.err")}}),t(F,{color:"$danger9",get children(){return e.error}})]}})]}}),t(Ue,{})]}})}})]}})},nt=e=>{const n=P(),[s,i]=b(()=>A.get(`/task/${e.type}/${e.done}`)),[d,g]=w([]),[p,v]=w("name"),[u,f]=w(!1),C={name:(r,a)=>r.name>a.name?1:-1,creator:(r,a)=>r.creator===a.creator?r.id>a.id?1:-1:r.creator>a.creator?1:-1,state:(r,a)=>r.state===a.state?r.id>a.id?1:-1:r.state>a.state?1:-1,progress:(r,a)=>r.progress===a.progress?r.id>a.id?1:-1:r.progress<a.progress?1:-1},I=D(()=>(r,a)=>(u()?-1:1)*C[p()](r,a)),h=async()=>{const r=await i();z(r,a=>{var we;const y=new Date().getTime(),ue={},he={},X={},me={},fe={};for(const o of d())ue[o.id]=o.curFetchTime,he[o.id]=o.prevFetchTime,X[o.id]=o.progress,me[o.id]=o.prevProgress,fe[o.id]=o.local;g((we=a==null?void 0:a.map(o=>{var $e;let q,Q;o.progress===X[o.id]?(q=he[o.id],Q=me[o.id]):(q=ue[o.id],Q=X[o.id]);const Ge=($e=fe[o.id])!=null?$e:{selected:!1,expanded:!1};return{...o,curFetchTime:y,prevFetchTime:q,prevProgress:Q,local:Ge}}).sort(I()))!=null?we:[])})};if(h(),e.done==="undone"){const r=setInterval(h,2e3);Je(()=>clearInterval(r))}const[j,O]=b(()=>A.post(`/task/${e.type}/clear_done`)),[H,c]=b(()=>A.post(`/task/${e.type}/clear_succeeded`)),[$,_]=b(()=>A.post(`/task/${e.type}/retry_failed`)),[R,Se]=w(""),[Fe,be]=w(new RegExp("")),[Ae,le]=w(!1);Ke(()=>{try{be(new RegExp(R())),le(!1)}catch{le(!0)}});const[se,ze]=w(k().role!==2),J=D(()=>{const r=Fe(),a=se();return y=>r.test(y.name)&&(!a||y.creator===k().username)}),S=D(()=>d().filter(J())),ce=D(()=>S().map(r=>r.local.selected).every(Boolean)),Pe=D(()=>S().map(r=>r.local.selected).some(Boolean)&&!ce()),Re=r=>g(d().map(a=>(J()(a)&&(a.local.selected=r),a))),oe=D(()=>S().map(r=>r.local.expanded).every(Boolean)),De=r=>g(d().map(a=>(J()(a)&&(a.local.expanded=r),a))),ie=()=>S().filter(r=>r.local.selected).map(r=>r.id),[Te,Be]=b(()=>A.post(`/task/${e.type}/retry_some`,ie())),[Le,Ie]=b(()=>A.post(`/task/${e.type}/${ge}_some`,ie())),de=r=>{Object.entries(r).forEach(([a,y])=>{ee.error(`${a}: ${y}`)})},[Ne,Me]=w(1),K=20,ge=e.done==="undone"?"cancel":"delete",Oe=D(()=>{const r=(Ne()-1)*K,a=r+K;return S().slice(r,a)}),N=r=>({fontWeight:"bold",fontSize:"$sm",color:"$neutral11",textAlign:r.textAlign}),U=r=>({cursor:"pointer",onClick:()=>{p()===r.name?f(!u()):qe(()=>{v(r.name),f(!1)}),h()}}),We=r=>a=>g(d().map(y=>(y.id===r&&(y.local=a),y)));return t(G,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[t(ne,{size:"lg",get children(){return n(`tasks.${e.done}`)}}),t(W,{gap:"$2",flexWrap:"wrap",get children(){return[t(m,{get when(){return e.done==="done"},get children(){return[t(x,{colorScheme:"accent",get loading(){return s()},onClick:h,get children(){return n("global.refresh")}}),t(x,{get loading(){return $()},onClick:async()=>{const r=await _();z(r,()=>h())},get children(){return n("tasks.retry_failed")}}),t(x,{colorScheme:"danger",get loading(){return j()},onClick:async()=>{const r=await O();z(r,()=>h())},get children(){return n("global.clear")}}),t(x,{colorScheme:"success",get loading(){return H()},onClick:async()=>{const r=await c();z(r,()=>h())},get children(){return n("tasks.clear_succeeded")}})]}}),t(m,{get when(){return e.canRetry},get children(){return t(x,{colorScheme:"primary",get loading(){return Te()},onClick:async()=>{const r=await Be();z(r,a=>{de(a),h()})},get children(){return n("tasks.retry_selected")}})}}),t(x,{colorScheme:"warning",get loading(){return Le()},onClick:async()=>{const r=await Ie();z(r,a=>{de(a),h()})},get children(){return n(`tasks.${ge}_selected`)}}),t(Xe,{width:"auto",get placeholder(){return n("tasks.filter")},get value(){return R()},onInput:r=>Se(r.target.value),get invalid(){return Ae()}}),t(m,{get when(){return k().role===2},get children(){return t(E,{get checked(){return se()},onChange:r=>ze(r.target.checked),get children(){return n("tasks.show_only_mine")}})}})]}}),t(G,{w:{"@initial":"1024px","@lg":"$full"},overflowX:"auto",shadow:"$md",rounded:"$lg",spacing:"$1",p:"$1",get children(){return[t(W,{class:"title",w:"$full",p:"$2",get children(){return[t(W,{get w(){return l[0].w},spacing:"$1",get children(){return[t(E,{get disabled(){return S().length===0},get checked(){return ce()},get indeterminate(){return Pe()},onChange:r=>Re(r.target.checked)}),t(B,T(()=>N(l[0]),()=>U(l[0]),{get children(){return n(`tasks.attr.${l[0].name}`)}}))]}}),t(m,{get when(){return k().role===2},get children(){return t(B,T({get w(){return l[1].w}},()=>N(l[1]),()=>U(l[1]),{get children(){return n(`tasks.attr.${l[1].name}`)}}))}}),t(B,T({get w(){return l[2].w}},()=>N(l[2]),()=>U(l[2]),{get children(){return n(`tasks.attr.${l[2].name}`)}})),t(B,T({get w(){return l[3].w}},()=>N(l[3]),()=>U(l[3]),{get children(){return n(`tasks.attr.${l[3].name}`)}})),t(B,T({get w(){return l[4].w}},()=>N(l[4]),{get children(){return n(`tasks.attr.${l[4].name}`)}})),t(ye,{get w(){return l[5].w},gap:"$2",get children(){return[t(xe,{}),t(B,T(()=>N(l[5]),{get children(){return n(`tasks.attr.${l[5].name}`)}})),t(x,{size:"xs",colorScheme:"neutral",onClick:()=>De(!oe()),get disabled(){return S().length===0},get children(){return te(()=>!!oe(),!0)()?n("tasks.fold_all"):n("tasks.expand_all")}})]}})]}}),te(()=>Oe().map(r=>t(rt,T(r,e,{get setLocal(){return We(r.id)}}))))]}}),t(Ye,{get total(){return S().length},defaultPageSize:K,onChange:r=>{Me(r)}})]}})},ot=e=>{const n=P();return t(G,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[t(ne,{size:"xl",get children(){return n(`tasks.${e.type}`)}}),t(G,{w:"$full",spacing:"$2",get children(){return t(ve,{each:["undone","done"],children:s=>t(nt,{get type(){return e.type},done:s,get canRetry(){return e.canRetry},get nameAnalyzer(){return e.nameAnalyzer}})})}})]}})},at=ae("<a></a>"),re=ae("<p></p>"),lt=ae('<a target="_blank"></a>'),M=(e,n,s=!0)=>{const i=(e==="/"?"":e)+n,d=k().base_path==="/"?"":k().base_path,g=i.startsWith(d),[p,v]=w(!1);return g&&s?(()=>{const u=at.cloneNode(!0);return u.$$mouseout=()=>v(!1),u.$$mouseover=()=>v(!0),V(u,i),ke(f=>{const C=p()?"text-decoration: underline":"",I=i.slice(d.length);return f._v$=pe(u,C,f._v$),I!==f._v$2&&Ce(u,"href",f._v$2=I),f},{_v$:void 0,_v$2:void 0}),u})():(()=>{const u=re.cloneNode(!0);return V(u,i),u})()},it=()=>{const e=P(),[n,s]=w(!1);return{regex:/^download (.+) to \((.+)\)$/,title:i=>i[1],attrs:{[e("tasks.attr.offline_download.url")]:i=>(()=>{const d=lt.cloneNode(!0);return d.$$mouseout=()=>s(!1),d.$$mouseover=()=>s(!0),V(d,()=>i[1]),ke(g=>{const p=n()?"text-decoration: underline":"",v=i[1];return g._v$3=pe(d,p,g._v$3),v!==g._v$4&&Ce(d,"href",g._v$4=v),g},{_v$3:void 0,_v$4:void 0}),d})(),[e("tasks.attr.offline_download.path")]:i=>M("",i[2])}}},dt=()=>{const e=P();return{regex:/^transfer \[(.*)]\((.*\/([^\/]+))\) to \[(.+)]\((.+)\)$/,title:n=>n[3],attrs:{[e("tasks.attr.offline_download.transfer_src")]:n=>n[1]===""?void 0:M(n[1],n[2]),[e("tasks.attr.offline_download.transfer_src_local")]:n=>n[1]===""?n[2]:void 0,[e("tasks.attr.offline_download.transfer_dst")]:n=>M(n[4],n[5])}}},gt=()=>{const e=P();return{regex:/^decompress \[(.+)]\((.*\/([^\/]+))\)\[(.+)] to \[(.+)]\((.+)\) with password <(.*)>$/,title:n=>n[3],attrs:{[e("tasks.attr.decompress.src")]:n=>M(n[1],n[2]),[e("tasks.attr.decompress.dst")]:n=>M(n[5],n[6]),[e("tasks.attr.decompress.inner")]:n=>(()=>{const s=re.cloneNode(!0);return V(s,()=>n[4]),s})(),[e("tasks.attr.decompress.password")]:n=>(()=>{const s=re.cloneNode(!0);return V(s,()=>n[7]),s})()}}},ut=()=>{const e=P();return{regex:/^upload (.+) to \[(.+)]\((.+)\)$/,title:n=>n[1],attrs:{[e("tasks.attr.decompress.dst")]:n=>M(n[2],n[3])}}};Qe(["mouseover","mouseout"]);export{ot as T,dt as a,M as b,gt as c,ut as d,it as g};
