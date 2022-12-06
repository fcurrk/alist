import{a as h,b8 as $,q as S,f as e,c4 as y,V as I,a2 as c,af as w,a8 as C,x as k,bv as z,bw as P,B as m,be as f,n as V,bt as F,C as T,ay as H,a7 as L,m as M}from"./index.981a9dfc.js";import{u as l}from"./useT.120117dd.js";const _={errored:"danger",succeeded:"success",canceled:"neutral"},j=t=>{const n=l();return e(F,{get colorScheme(){var r;return(r=_[t.state])!=null?r:"info"},get children(){return n(`tasks.${t.state}`)}})},p=t=>{const n=l(),r=t.done==="undone"?"cancel":"delete",[o,i]=h(()=>$.post(`/admin/task/${t.type}/${r}?tid=${t.id}`)),[d,s]=S(!1);return e(k,{get when(){return!d()},get children(){return e(y,{get bgColor(){return I("$background","$neutral3")()},w:"$full",overflowX:"auto",shadow:"$md",rounded:"$lg",p:"$2",direction:{"@initial":"column","@xl":"row"},spacing:"$2",get children(){return[e(c,{w:"$full",alignItems:"start",spacing:"$1",get children(){return[e(w,{size:"sm",css:{wordBreak:"break-all"},get children(){return t.name}}),e(j,{get state(){return t.state}}),e(C,{css:{wordBreak:"break-all"},get children(){return t.status}}),e(k,{get when(){return t.error},get children(){return e(C,{color:"$danger9",css:{wordBreak:"break-all"},get children(){return t.error}})}}),e(z,{w:"$full",trackColor:"$info3",rounded:"$full",size:"sm",get value(){return t.progress},get children(){return e(P,{color:"$info8",rounded:"$md"})}})]}}),e(y,{direction:{"@initial":"row","@xl":"column"},justifyContent:{"@xl":"center"},spacing:"$1",get children(){return e(m,{colorScheme:"danger",get loading(){return o()},onClick:async()=>{const u=await i();f(u,()=>{V.success(n("global.delete_success")),s(!0)})},get children(){return n(`global.${r}`)}})}})]}})}})},q=t=>{const n=l(),[r,o]=h(()=>$.get(`/admin/task/${t.type}/${t.done}`)),[i,d]=S([]),s=async()=>{const a=await o();f(a,g=>{var b;return d((b=g==null?void 0:g.sort((v,B)=>v.id>B.id?1:-1))!=null?b:[])})};if(s(),t.done==="undone"){const a=setInterval(s,2e3);H(()=>clearInterval(a))}const[u,x]=h(()=>$.post(`/admin/task/${t.type}/clear_done`));return e(c,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[e(w,{size:"lg",get children(){return n(`tasks.${t.done}`)}}),e(k,{get when(){return t.done==="done"},get children(){return e(L,{spacing:"$2",get children(){return[e(m,{colorScheme:"accent",get loading(){return r()},onClick:s,get children(){return n("global.refresh")}}),e(m,{get loading(){return u()},onClick:async()=>{const a=await x();f(a,()=>s())},get children(){return n("global.clear")}})]}})}}),e(c,{w:"$full",spacing:"$2",get children(){return e(T,{get each(){return i()},children:a=>e(p,M(a,t))})}})]}})},R=t=>{const n=l();return e(c,{w:"$full",alignItems:"start",spacing:"$4",get children(){return[e(w,{size:"xl",get children(){return n(`tasks.${t.type}`)}}),e(c,{w:"$full",spacing:"$2",get children(){return e(T,{each:["undone","done"],children:r=>e(q,{get type(){return t.type},done:r})})}})]}})};export{R as T};
