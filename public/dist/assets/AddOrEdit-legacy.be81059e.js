System.register(["./index-legacy.5b7a9715.js","./FolderTree-legacy.b23337d0.js","./useT-legacy.73b353be.js","./index-legacy.35c2ea3b.js","./api-legacy.e5a53c32.js"],(function(e,r){"use strict";var n,a,t,s,l,i,u,c,d,o,g,p,h,m,f,b,w,y,x,$,I;return{setters:[e=>{n=e.u,a=e.br,t=e.a,s=e.b4,l=e.f,i=e.a3,u=e.bf,c=e.a$,d=e.aZ,o=e.I,g=e.bg,p=e.E,h=e.ak,m=e.aa,f=e.B,b=e.bd,w=e.n,y=e.a6,x=e.bq},e=>{$=e.F},e=>{I=e.u},()=>{},()=>{}],execute:function(){const r=e=>{const r=I();return l(c,{display:"inline-flex",flexDirection:"row",alignItems:"center",gap:"$2",rounded:"$md",shadow:"$md",p:"$2",w:"fit-content",get children(){return[l(d,{mb:"0",get children(){return r(`users.permissions.${e.name}`)}}),l(x,{get checked(){return e.can},onChange:()=>e.onChange(!e.can)})]}})};e("default",(()=>{const e=I(),{params:x,back:v}=n(),{id:_}=x,[j,q]=a({id:0,username:"",password:"",base_path:"",role:0,permission:0}),[C,k]=t((()=>s.get(`/admin/user/get?id=${_}`)));_&&(async()=>{const e=await k();b(e,q)})();const[D,T]=t((()=>s.post("/admin/user/"+(_?"update":"create"),j)));return l(y,{get loading(){return C()},get children(){return l(i,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[l(u,{get children(){return e("global."+(_?"edit":"add"))}}),l(c,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[l(d,{for:"username",display:"flex",alignItems:"center",get children(){return e("users.username")}}),l(o,{id:"username",get value(){return j.username},onInput:e=>q("username",e.currentTarget.value)})]}}),l(c,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[l(d,{for:"password",display:"flex",alignItems:"center",get children(){return e("users.password")}}),l(o,{id:"password",placeholder:"********",get value(){return j.password},onInput:e=>q("password",e.currentTarget.value)})]}}),l(c,{w:"$full",display:"flex",flexDirection:"column",required:!0,get children(){return[l(d,{for:"base_path",display:"flex",alignItems:"center",get children(){return e("users.base_path")}}),l($,{id:"base_path",get value(){return j.base_path},onChange:e=>q("base_path",e),onlyFolder:!0})]}}),l(c,{w:"$full",required:!0,get children(){return[l(d,{display:"flex",alignItems:"center",get children(){return e("users.permission")}}),l(g,{w:"$full",wrap:"wrap",gap:"$2",get children(){return l(p,{each:h,children:(e,n)=>l(r,{name:e,get can(){return m.can(j,n())},onChange:e=>{q("permission",e?j.permission|=1<<n():j.permission&=~(1<<n()))}})})}})]}}),l(f,{get loading(){return D()},onClick:async()=>{const r=await T();b(r,(()=>{w.success(e("global.save_success")),v()}))},get children(){return e("global."+(_?"save":"add"))}})]}})}})}))}}}));
