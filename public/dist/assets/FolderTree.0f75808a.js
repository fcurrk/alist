import{ay as f,f as e,I as O,x as i,B as c,a8 as C,M as m,r as b,aS as R,v as $,w as k,y as v,z as w,q as g,a5 as x,aD as T,a as D,_ as p,bd as V,ai as h,ap as H,a9 as P,K as q,aa as A,b4 as E,a3 as J,E as K,p as N,az as X,be as j}from"./index.de9c2367.js";import{d as G}from"./index.14e538e8.js";import{k as L}from"./api.c24455a0.js";import{u as F}from"./useT.424f4bb4.js";const M=X(),S=t=>{const[n,a]=g("/");return e(x,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(M.Provider,{get value(){var o;return{value:n,onChange:r=>{a(r),t.onChange(r)},forceRoot:(o=t.forceRoot)!=null?o:!1}},get children(){return e(y,{path:"/"})}})}})},y=t=>{const[n,a]=g([]),{value:o,onChange:r,forceRoot:l}=T(M),[_,B]=D(()=>L(t.path,p(),l)),z=async()=>{if(n().length>0)return;const u=await B();j(u,a)},{isOpen:s,onToggle:I}=f(),d=()=>o()===t.path;return e(x,{get children(){return[e(C,{spacing:"$2",get children(){return[e(i,{get when(){return!_()},get fallback(){return e(V,{size:"sm",get color(){return h()}})},get children(){return e(H,{get color(){return h()},as:G,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{I(),s()&&z()}})}}),e(P,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return d()?"$info8":"transparent"},get _hover(){return{bgColor:d()?"$info8":q()}},onClick:()=>{r(t.path)},get children(){return A(()=>t.path==="/",!0)()?"root":E(t.path)}})]}}),e(i,{get when(){return s()},get children(){return e(J,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(K,{get each(){return n()},children:u=>e(y,{get path(){return N(t.path,u.name)}})})}})}})]}})},Z=t=>{var r;const n=F(),[a,o]=g((r=t.defaultValue)!=null?r:"");return e(w,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(m,{}),e(b,{get children(){return[e($,{get children(){return n("home.toolbar.choose_dst_folder")}}),e(k,{get children(){return e(S,{onChange:o})}}),e(v,{display:"flex",gap:"$2",get children(){return[e(c,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return n("global.cancel")}}),e(c,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return n("global.ok")}})]}})]}})]}})},ee=t=>{const{isOpen:n,onOpen:a,onClose:o}=f(),r=F();return[e(C,{w:"$full",spacing:"$2",get children(){return[e(O,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return r(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(i,{get when(){return!t.onlyFolder},get children(){return e(c,{onClick:a,get children(){return r("global.choose")}})}})]}}),e(w,{size:"xl",get opened(){return n()},onClose:o,get children(){return[e(m,{}),e(b,{get children(){return[e(R,{}),e($,{get children(){return r("global.choose_folder")}}),e(k,{get children(){return e(S,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(v,{get children(){return e(c,{onClick:o,get children(){return r("global.confirm")}})}})]}})]}})]};export{ee as F,Z as M};
