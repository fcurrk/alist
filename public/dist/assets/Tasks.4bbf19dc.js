import{d as y,a as o,ba as d,r as C,j as e,c9 as B,W as M,a3 as u,ao as T,a9 as P,y as m,bA as j,bB as F,B as i,bg as g,n as x,by as H,E as I,az as V,C as A,a8 as E,m as N}from"./index.af305b75.js";import{P as W}from"./Paginator.825c94fc.js";const X={errored:"danger",succeeded:"success",canceled:"neutral"},q=t=>{const r=y();return e(H,{get colorScheme(){var a;return(a=X[t.state])!=null?a:"info"},get children(){return r(`tasks.${t.state}`)}})},G=t=>{const r=y(),a=t.done==="undone"?"cancel":"delete",h=t.done==="done"&&t.state==="errored",[$,w]=o(()=>d.post(`/admin/task/${t.type}/${a}?tid=${t.id}`)),[s,f]=o(()=>d.post(`/admin/task/${t.type}/retry?tid=${t.id}`)),[b,k]=C(!1);return e(m,{get when(){return!b()},get children(){return e(B,{get bgColor(){return M("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(u,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[e(T,{size:"sm",css:{wordBreak:"break-all"},get children(){return t.name}}),e(q,{get state(){return t.state}}),e(P,{css:{wordBreak:"break-all"},get children(){return t.status}}),e(m,{get when(){return t.error},get children(){return e(P,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return t.error}})}}),e(j,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return t.progress},get children(){return e(F,{color:"$info8",rounded:"$md"})}})]}}),e(B,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return[e(m,{get when(){return t.canRetry},get children(){return e(i,{disabled:!h,display:h?"block":"none",get loading(){return s()},onClick:async()=>{const c=await f();g(c,()=>{x.info(r("tasks.retry")),k(!0)})},get children(){return r("tasks.retry")}})}}),e(i,{colorScheme:"danger",get loading(){return $()},onClick:async()=>{const c=await w();g(c,()=>{x.success(r("global.delete_success")),k(!0)})},get children(){return r(`global.${a}`)}})]}})]}})}})},J=t=>{const r=y(),[a,h]=o(()=>d.get(`/admin/task/${t.type}/${t.done}`)),[$,w]=C([]),s=async()=>{const n=await h();g(n,l=>{var z;return w((z=l==null?void 0:l.sort((_,D)=>_.id>D.id?1:-1))!=null?z:[])})};if(s(),t.done==="undone"){const n=setInterval(s,2e3);V(()=>clearInterval(n))}const[f,b]=o(()=>d.post(`/admin/task/${t.type}/clear_done`)),[k,c]=o(()=>d.post(`/admin/task/${t.type}/clear_succeeded`)),[v,R]=C(1),S=20,L=A(()=>{const n=(v()-1)*S,l=n+S;return $().slice(n,l)});return e(u,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(T,{size:"lg",get children(){return r(`tasks.${t.done}`)}}),e(m,{get when(){return t.done==="done"},get children(){return e(E,{spacing:"$2",get children(){return[e(i,{colorScheme:"accent",get loading(){return a()},onClick:s,get children(){return r("global.refresh")}}),e(i,{get loading(){return f()},onClick:async()=>{const n=await b();g(n,()=>s())},get children(){return r("global.clear")}}),e(i,{colorScheme:"success",get loading(){return k()},onClick:async()=>{const n=await c();g(n,()=>s())},get children(){return r("tasks.clear_succeeded")}})]}})}}),e(u,{w:"$full",spacing:"$2",get children(){return e(I,{get each(){return L()},children:n=>e(G,N(n,t))})}}),e(W,{get total(){return $().length},defaultPageSize:S,onChange:n=>{R(n)}})]}})},Q=t=>{const r=y();return e(u,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[e(T,{size:"xl",get children(){return r(`tasks.${t.type}`)}}),e(u,{w:"$full",spacing:"$2",get children(){return e(I,{each:["undone","done"],children:a=>e(J,{get type(){return t.type},done:a,get canRetry(){return t.canRetry}})})}})]}})};export{Q as T};
