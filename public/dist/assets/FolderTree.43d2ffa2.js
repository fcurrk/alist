import{aI as S,a as I,e,I as H,S as d,B as g,ad as $,M as x,x as F,ba as J,y as M,z as v,A as O,C as _,k as C,a6 as B,bG as K,aU as P,bH as q,_ as G,w as L,q as N,bI as U,am as f,ax as y,ae as X,K as j,af as Q,bA as W,a3 as Y,E as Z,p,bJ as ee,b7 as te,bK as ne}from"./index.afad18c6.js";import{e as re,f as oe}from"./index.54cc0911.js";const R=ee(),T=t=>{var o;const[n,a]=C("/");return(o=t.handle)==null||o.call(t,{setPath:a}),e(B,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(R.Provider,{get value(){var r,l,u;return{value:n,onChange:i=>{a(i),t.onChange(i)},autoOpen:(r=t.autoOpen)!=null?r:!1,forceRoot:(l=t.forceRoot)!=null?l:!1,showEmptyIcon:(u=t.showEmptyIcon)!=null?u:!1}},get children(){return e(z,{path:"/"})}})}})},z=t=>{const[n,a]=C(),{value:o,onChange:r,forceRoot:l,autoOpen:u,showEmptyIcon:i}=K(R),E=()=>{var c;return Boolean(i&&n()!==void 0&&!((c=n())!=null&&c.length))},[V,A]=P(()=>q(t.path,G(),l));let m=!1;const b=async()=>{var k;if((k=n())!=null&&k.length)return;const c=await A();te(c,D=>{m=!0,a(D)},()=>{s()&&h()})},{isOpen:s,onToggle:h}=S(),w=()=>o()===t.path;return L(N(o,async c=>{!u||ne(t.path)(c)&&(s()||h(),m||b())})),e(B,{get children(){return[e($,{spacing:"$2",get children(){return[e(d,{get when(){return!V()},get fallback(){return e(U,{size:"sm",get color(){return f()}})},get children(){return e(d,{get when(){return!E()},get fallback(){return e(y,{get color(){return f()},as:re})},get children(){return e(y,{get color(){return f()},as:oe,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{h(),s()&&b()}})}})}}),e(X,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return w()?"$info8":"transparent"},get _hover(){return{bgColor:w()?"$info8":j()}},onClick:()=>{r(t.path)},get children(){return Q(()=>t.path==="/",!0)()?"root":W(t.path)}})]}}),e(d,{get when(){return s()},get children(){return e(Y,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(Z,{get each(){return n()},children:c=>e(z,{get path(){return p(t.path,c.name)}})})}})}})]}})},se=t=>{var r;const n=I(),[a,o]=C((r=t.defaultValue)!=null?r:"");return e(_,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(x,{}),e(F,{get children(){return[e(M,{get children(){return n("home.toolbar.choose_dst_folder")}}),e(v,{get children(){return e(T,{onChange:o})}}),e(O,{display:"flex",gap:"$2",get children(){return[e(g,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return n("global.cancel")}}),e(g,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return n("global.ok")}})]}})]}})]}})},ue=t=>{const{isOpen:n,onOpen:a,onClose:o}=S(),r=I();return[e($,{w:"$full",spacing:"$2",get children(){return[e(H,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return r(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(d,{get when(){return!t.onlyFolder},get children(){return e(g,{onClick:a,get children(){return r("global.choose")}})}})]}}),e(_,{size:"xl",get opened(){return n()},onClose:o,get children(){return[e(x,{}),e(F,{get children(){return[e(J,{}),e(M,{get children(){return r("global.choose_folder")}}),e(v,{get children(){return e(T,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(O,{get children(){return e(g,{onClick:o,get children(){return r("global.confirm")}})}})]}})]}})]};export{T as F,se as M,ue as a};
