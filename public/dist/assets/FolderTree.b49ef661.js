import{ay as C,f as e,I as O,x as i,B as c,a7 as f,M as m,r as b,aS as R,v as $,w as k,y as v,z as w,q as g,a4 as x,aD as T,a as D,_ as p,bc as V,ah as h,ap as H,a8 as J,J as P,a9 as q,b4 as A,a2 as N,C as X,p as j,az as E,bd as G}from"./index.97f2224e.js";import{d as K}from"./index.3b325a9c.js";import{k as L}from"./api.dc6bf7b0.js";import{u as F}from"./useT.5b113661.js";const M=E(),S=t=>{const[n,a]=g("/");return e(x,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return e(M.Provider,{get value(){var o;return{value:n,onChange:r=>{a(r),t.onChange(r)},forceRoot:(o=t.forceRoot)!=null?o:!1}},get children(){return e(y,{path:"/"})}})}})},y=t=>{const[n,a]=g([]),{value:o,onChange:r,forceRoot:l}=T(M),[_,B]=D(()=>L(t.path,p(),l)),z=async()=>{if(n().length>0)return;const u=await B();G(u,a)},{isOpen:s,onToggle:I}=C(),d=()=>o()===t.path;return e(x,{get children(){return[e(f,{spacing:"$2",get children(){return[e(i,{get when(){return!_()},get fallback(){return e(V,{size:"sm",get color(){return h()}})},get children(){return e(H,{get color(){return h()},as:K,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{I(),s()&&z()}})}}),e(J,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return d()?"$info8":"transparent"},get _hover(){return{bgColor:d()?"$info8":P()}},onClick:()=>{r(t.path)},get children(){return q(()=>t.path==="/",!0)()?"root":A(t.path)}})]}}),e(i,{get when(){return s()},get children(){return e(N,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return e(X,{get each(){return n()},children:u=>e(y,{get path(){return j(t.path,u.name)}})})}})}})]}})},Z=t=>{var r;const n=F(),[a,o]=g((r=t.defaultValue)!=null?r:"");return e(w,{size:"xl",blockScrollOnMount:!1,get opened(){return t.opened},get onClose(){return t.onClose},get children(){return[e(m,{}),e(b,{get children(){return[e($,{get children(){return n("home.toolbar.choose_dst_folder")}}),e(k,{get children(){return e(S,{onChange:o})}}),e(v,{display:"flex",gap:"$2",get children(){return[e(c,{get onClick(){return t.onClose},colorScheme:"neutral",get children(){return n("global.cancel")}}),e(c,{get loading(){return t.loading},onClick:()=>{var l;return(l=t.onSubmit)==null?void 0:l.call(t,a())},get children(){return n("global.ok")}})]}})]}})]}})},ee=t=>{const{isOpen:n,onOpen:a,onClose:o}=C(),r=F();return[e(f,{w:"$full",spacing:"$2",get children(){return[e(O,{get id(){return t.id},get value(){return t.value},onInput:l=>t.onChange(l.currentTarget.value),get readOnly(){return t.onlyFolder},get onClick(){return t.onlyFolder?a:()=>{}},get placeholder(){return r(`global.${t.onlyFolder?"choose_folder":"choose_or_input_path"}`)}}),e(i,{get when(){return!t.onlyFolder},get children(){return e(c,{onClick:a,get children(){return r("global.choose")}})}})]}}),e(w,{size:"xl",get opened(){return n()},onClose:o,get children(){return[e(m,{}),e(b,{get children(){return[e(R,{}),e($,{get children(){return r("global.choose_folder")}}),e(k,{get children(){return e(S,{forceRoot:!0,get onChange(){return t.onChange}})}}),e(v,{get children(){return e(c,{onClick:o,get children(){return r("global.confirm")}})}})]}})]}})]};export{ee as F,Z as M};