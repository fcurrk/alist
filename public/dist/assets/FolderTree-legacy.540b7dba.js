System.register(["./index-legacy.07cd0eea.js","./index-legacy.9e8ed7bc.js","./api-legacy.1f93cb9d.js","./useT-legacy.7c2dc411.js"],(function(e,r){"use strict";var n,t,o,l,c,a,u,g,i,d,h,s,p,f,b,C,m,y,$,v,k,w,x,_,z,S,F,O,j,R,I,M,T;return{setters:[e=>{n=e.au,t=e.f,o=e.I,l=e.x,c=e.B,a=e.a8,u=e.M,g=e.r,i=e.aP,d=e.v,h=e.w,s=e.y,p=e.z,f=e.q,b=e.a5,C=e.az,m=e.a,y=e._,$=e.ba,v=e.bb,k=e.al,w=e.bc,x=e.K,_=e.aB,z=e.b1,S=e.a3,F=e.E,O=e.p,j=e.av,R=e.bd},e=>{I=e.d},e=>{M=e.k},e=>{T=e.u}],execute:function(){const r=j(),B=e=>{const[n,o]=f("/");return t(b,{class:"folder-tree-box",w:"$full",overflowX:"auto",get children(){return t(r.Provider,{get value(){return{value:n,onChange:r=>{o(r),e.onChange(r)},forceRoot:e.forceRoot??!1}},get children(){return t(P,{path:"/"})}})}})},P=e=>{const[o,c]=f([]),{value:u,onChange:g,forceRoot:i}=C(r),[d,h]=m((()=>M(e.path,y(),i))),{isOpen:s,onToggle:p}=n(),j=()=>u()===e.path;return t(b,{get children(){return[t(a,{spacing:"$2",get children(){return[t(l,{get when(){return!d()},get fallback(){return t($,{size:"sm",get color(){return v()}})},get children(){return t(k,{get color(){return v()},as:I,get transform(){return s()?"rotate(90deg)":"none"},transition:"transform 0.2s",cursor:"pointer",onClick:()=>{p(),s()&&(async()=>{if(o().length>0)return;const e=await h();R(e,c)})()}})}}),t(w,{css:{whiteSpace:"nowrap"},fontSize:"$md",cursor:"pointer",px:"$1",rounded:"$md",get bgColor(){return j()?"$info8":"transparent"},get _hover(){return{bgColor:j()?"$info8":x()}},onClick:()=>{g(e.path)},get children(){return _((()=>"/"===e.path),!0)()?"root":z(e.path)}})]}}),t(l,{get when(){return s()},get children(){return t(S,{mt:"$1",pl:"$4",alignItems:"start",spacing:"$1",get children(){return t(F,{get each(){return o()},children:r=>t(P,{get path(){return O(e.path,r.name)}})})}})}})]}})};e("M",(e=>{const r=T(),[n,o]=f(e.defaultValue??"");return t(p,{size:"xl",blockScrollOnMount:!1,get opened(){return e.opened},get onClose(){return e.onClose},get children(){return[t(u,{}),t(g,{get children(){return[t(d,{get children(){return r("home.toolbar.choose_dst_folder")}}),t(h,{get children(){return t(B,{onChange:o})}}),t(s,{display:"flex",gap:"$2",get children(){return[t(c,{get onClick(){return e.onClose},colorScheme:"neutral",get children(){return r("global.cancel")}}),t(c,{get loading(){return e.loading},onClick:()=>e.onSubmit?.(n()),get children(){return r("global.ok")}})]}})]}})]}})})),e("F",(e=>{const{isOpen:r,onOpen:f,onClose:b}=n(),C=T();return[t(a,{w:"$full",spacing:"$2",get children(){return[t(o,{get id(){return e.id},get value(){return e.value},onInput:r=>e.onChange(r.currentTarget.value),get readOnly(){return e.onlyFolder},get onClick(){return e.onlyFolder?f:()=>{}},get placeholder(){return C("global."+(e.onlyFolder?"choose_folder":"choose_or_input_path"))}}),t(l,{get when(){return!e.onlyFolder},get children(){return t(c,{onClick:f,get children(){return C("global.choose")}})}})]}}),t(p,{size:"xl",get opened(){return r()},onClose:b,get children(){return[t(u,{}),t(g,{get children(){return[t(i,{}),t(d,{get children(){return C("global.choose_folder")}}),t(h,{get children(){return t(B,{forceRoot:!0,get onChange(){return e.onChange}})}}),t(s,{get children(){return t(c,{onClick:b,get children(){return C("global.confirm")}})}})]}})]}})]}))}}}));
