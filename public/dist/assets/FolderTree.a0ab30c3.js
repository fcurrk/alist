import{ax as C,a as f,h as e,I,S as g,B as c,a2 as m,M as b,i as $,b5 as O,j as k,k as v,m as w,q as x,d as i,Y as F,aE as T,aR as V,bz as D,_ as A,bA as H,ab as h,am as P,a3 as j,y as q,a4 as E,bt as J,V as N,t as X,p as Y,az as p,bB as G}from"./index.d1042545.js";import{d as K}from"./index.1dc57244.js";const M=p(),S=t=>{const[r,a]=i("/");return e(F,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(M.Provider,{get value(){var o;return{value:r,onChange:n=>{a(n),t.onChange(n)},forceRoot:(o=t.forceRoot)!=null?o:!1}},get children(){return e(y,{path:"/"})}})}})},y=t=>{const[r,a]=i([]),{value:o,onChange:n,forceRoot:l}=T(M),[_,B]=V(()=>D(t.path,A(),l)),R=async()=>{if(r().length>0)return;const u=await B();G(u,a)},{isOpen:s,onToggle:z}=C(),d=()=>o()===t.path;return e(F,{get children(){return[e(m,{spacing:"$2",get children(){return[e(g,{get when(){return!_()},get fallback(){return e(H,{size:"sm",get color(){return h()}})},get children(){return e(P,{get color(){return h()},as:K,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{z(),s()&&R()}})}}),e(j,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return d()?"$info8":"transparent"},get _hover(){return{bgColor:d()?"$info8":q()}},onClick:()=>{n(t.path)},get children(){return E(()=>t.path==="/",!0)()?"root":J(t.path)}})]}}),e(g,{get when(){return s()},get children(){return e(N,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(X,{get each(){return r()},children:u=>e(y,{get path(){return Y(t.path,u.name)}})})}})}})]}})},U=t=>{var n;const r=f(),[a,o]=i((n=t.defaultValue)!=null?n:"");return e(x,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(b,{}),e($,{get children(){return[e(k,{get children(){return r("home.toolbar.choose_dst_folder")}}),e(v,{get children(){return e(S,{onChange:o})}}),e(w,{display:"flex",gap:"$2",get children(){return[e(c,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return r("global.cancel")}}),e(c,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return r("global.ok")}})]}})]}})]}})},W=t=>{const{isOpen:r,onOpen:a,onClose:o}=C(),n=f();return[e(m,{w:"$full",spacing:"$2",get children(){return[e(I,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return n(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(g,{get when(){return!t.onlyFolder},get children(){return e(c,{onClick:a,get children(){return n("global.choose")}})}})]}}),e(x,{size:"xl",get opened(){return r()},onClose:o,get children(){return[e(b,{}),e($,{get children(){return[e(O,{}),e(k,{get children(){return n("global.choose_folder")}}),e(v,{get children(){return e(S,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(w,{get children(){return e(c,{onClick:o,get children(){return n("global.confirm")}})}})]}})]}})]};export{W as F,U as M};
