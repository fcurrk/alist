System.register(["./index-legacy.5496c322.js","./index-legacy.17a3a1bb.js","./api-legacy.72820435.js","./useT-legacy.4ae42db3.js"],(function(e,r){"use strict";var n,t,o,l,a,c,g,u,i,h,d,s,p,f,b,C,m,y,$,v,k,w,x,_,S,z,F,O,j,R,I,M,T;return{setters:[e=>{n=e.av,t=e.f,o=e.I,l=e.x,a=e.B,c=e.a8,g=e.M,u=e.r,i=e.aP,h=e.v,d=e.w,s=e.y,p=e.z,f=e.q,b=e.a5,C=e.aA,m=e.a,y=e._,$=e.ba,v=e.bb,k=e.am,w=e.a9,x=e.K,_=e.aa,S=e.b1,z=e.a3,F=e.E,O=e.p,j=e.aw,R=e.bc},e=>{I=e.d},e=>{M=e.k},e=>{T=e.u}],execute:function(){const r=j(),P=e=>{const[n,o]=f("/");return t(b,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return t(r.Provider,{get value(){return{value:n,onChange:r=>{o(r),e.onChange(r)},forceRoot:e.forceRoot??!1}},get children(){return t(q,{path:"/"})}})}})},q=e=>{const[o,a]=f([]),{value:g,onChange:u,forceRoot:i}=C(r),[h,d]=m((()=>M(e.path,y(),i))),{isOpen:s,onToggle:p}=n(),j=()=>g()===e.path;return t(b,{get children(){return[t(c,{spacing:"$2",get children(){return[t(l,{get when(){return!h()},get fallback(){return t($,{size:"sm",get color(){return v()}})},get children(){return t(k,{get color(){return v()},as:I,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{p(),s()&&(async()=>{if(o().length>0)return;const e=await d();R(e,a)})()}})}}),t(w,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return j()?"$info8":"transparent"},get _hover(){return{bgColor:j()?"$info8":x()}},onClick:()=>{u(e.path)},get children(){return _((()=>"/"===e.path),!0)()?"root":S(e.path)}})]}}),t(l,{get when(){return s()},get children(){return t(z,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return t(F,{get each(){return o()},children:r=>t(q,{get path(){return O(e.path,r.name)}})})}})}})]}})};e("M",(e=>{const r=T(),[n,o]=f(e.defaultValue??"");return t(p,{size:"xl",blockScrollOnMount:!1,get opened(){return e.opened},get onClose(){return e.onClose},get children(){return[t(g,{}),t(u,{get children(){return[t(h,{get children(){return r("home.toolbar.choose_dst_folder")}}),t(d,{get children(){return t(P,{onChange:o})}}),t(s,{display:"flex",gap:"$2",get children(){return[t(a,{get onClick(){return e.onClose},colorScheme:"neutral",get children(){return r("global.cancel")}}),t(a,{get loading(){return e.loading},onClick:()=>e.onSubmit?.(n()),get children(){return r("global.ok")}})]}})]}})]}})})),e("F",(e=>{const{isOpen:r,onOpen:f,onClose:b}=n(),C=T();return[t(c,{w:"$full",spacing:"$2",get children(){return[t(o,{get id(){return e.id},get value(){return e.value},onInput:r=>e.onChange(r.currentTarget.value),get readOnly(){return e.onlyFolder},get onClick(){return e.onlyFolder?f:()=>{}},get placeholder(){return C("global."+(e.onlyFolder?"choose_folder":"choose_or_input_path"))}}),t(l,{get when(){return!e.onlyFolder},get children(){return t(a,{onClick:f,get children(){return C("global.choose")}})}})]}}),t(p,{size:"xl",get opened(){return r()},onClose:b,get children(){return[t(g,{}),t(u,{get children(){return[t(i,{}),t(h,{get children(){return C("global.choose_folder")}}),t(d,{get children(){return t(P,{forceRoot:!0,get onChange(){return e.onChange}})}}),t(s,{get children(){return t(a,{onClick:b,get children(){return C("global.confirm")}})}})]}})]}})]}))}}}));
