import{av as f,f as e,I as R,x as i,B as c,a8 as C,M as m,r as b,aP as T,v,w,y as $,z as k,q as g,a5 as x,aA as z,a as D,_ as P,ba as V,bb as h,am as p,a9 as A,K as H,aa as q,b1 as E,a3 as J,E as K,p as N,aw as X,bc as j}from"./index.8a072262.js";import{d as G}from"./index.a36341ea.js";import{k as L}from"./api.f863ab58.js";import{u as F}from"./useT.62de73a4.js";const M=X(),S=t=>{const[n,a]=g("/");return e(x,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(M.Provider,{get value(){var o;return{value:n,onChange:r=>{a(r),t.onChange(r)},forceRoot:(o=t.forceRoot)!=null?o:!1}},get children(){return e(y,{path:"/"})}})}})},y=t=>{const[n,a]=g([]),{value:o,onChange:r,forceRoot:l}=z(M),[_,B]=D(()=>L(t.path,P(),l)),I=async()=>{if(n().length>0)return;const u=await B();j(u,a)},{isOpen:s,onToggle:O}=f(),d=()=>o()===t.path;return e(x,{get children(){return[e(C,{spacing:"$2",get children(){return[e(i,{get when(){return!_()},get fallback(){return e(V,{size:"sm",get color(){return h()}})},get children(){return e(p,{get color(){return h()},as:G,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{O(),s()&&I()}})}}),e(A,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return d()?"$info8":"transparent"},get _hover(){return{bgColor:d()?"$info8":H()}},onClick:()=>{r(t.path)},get children(){return q(()=>t.path==="/",!0)()?"root":E(t.path)}})]}}),e(i,{get when(){return s()},get children(){return e(J,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(K,{get each(){return n()},children:u=>e(y,{get path(){return N(t.path,u.name)}})})}})}})]}})},Z=t=>{var r;const n=F(),[a,o]=g((r=t.defaultValue)!=null?r:"");return e(k,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(m,{}),e(b,{get children(){return[e(v,{get children(){return n("home.toolbar.choose_dst_folder")}}),e(w,{get children(){return e(S,{onChange:o})}}),e($,{display:"flex",gap:"$2",get children(){return[e(c,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return n("global.cancel")}}),e(c,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return n("global.ok")}})]}})]}})]}})},ee=t=>{const{isOpen:n,onOpen:a,onClose:o}=f(),r=F();return[e(C,{w:"$full",spacing:"$2",get children(){return[e(R,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return r(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(i,{get when(){return!t.onlyFolder},get children(){return e(c,{onClick:a,get children(){return r("global.choose")}})}})]}}),e(k,{size:"xl",get opened(){return n()},onClose:o,get children(){return[e(m,{}),e(b,{get children(){return[e(T,{}),e(v,{get children(){return r("global.choose_folder")}}),e(w,{get children(){return e(S,{forceRoot:!0,get onChange(){return t.onChange}})}}),e($,{get children(){return e(c,{onClick:o,get children(){return r("global.confirm")}})}})]}})]}})]};export{ee as F,Z as M};
