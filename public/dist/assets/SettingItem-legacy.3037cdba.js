System.register(["./index-legacy.eb7d2e8c.js","./useT-legacy.a87ffafd.js","./index-legacy.130b45f1.js","./item_type-legacy.d1f1c701.js","./index-legacy.32f905ac.js"],(function(e,r){"use strict";var t,n,u,l,g,a,i,c,d,h,s,o,y,f,b,p,k,v,x,C,m,O,T,$,D,E,w,A;return{setters:[e=>{t=e.f,n=e.a$,u=e.aa,l=e.x,g=e.ao,a=e.a0,i=e.ak,c=e.a1,d=e.I,h=e.bO,s=e.T,o=e.bP,y=e.bQ,f=e.bR,b=e.bS,p=e.bT,k=e.bU,v=e.bV,x=e.E,C=e.bW,m=e.bX,O=e.bY,T=e.F,$=e.b1},e=>{D=e.u},e=>{E=e.F},e=>{w=e.T},e=>{A=e.H}],execute:function(){e("I",(e=>{const r=D();return t($,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(n,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[u((()=>r(`settings.${e.key}`))),t(l,{get when(){return e.flag===E.DEPRECATED},get children(){return t(g,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{e.onDelete?.()}})}})]}}),t(a,{get fallback(){return t(i,{get children(){return r("settings_other.unknown_type")}})},get children(){return[t(c,{get when(){return[w.String,w.Number].includes(e.type)},get children(){return t(d,{get type(){return e.type===w.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:r=>e.onChange?.(r.currentTarget.value),get readOnly(){return e.flag===E.READONLY}})}}),t(c,{get when(){return e.type===w.Bool},get children(){return t(h,{get id(){return e.key},get defaultChecked(){return"true"===e.value},onChange:r=>e.onChange?.(r.currentTarget.checked?"true":"false"),get readOnly(){return e.flag===E.READONLY}})}}),t(c,{get when(){return e.type===w.Text},get children(){return t(s,{get id(){return e.key},get value(){return e.value},onChange:r=>e.onChange?.(r.currentTarget.value),get readOnly(){return e.flag===E.READONLY}})}}),t(c,{get when(){return e.type===w.Select},get children(){return t(o,{get id(){return e.key},get defaultValue(){return e.value},onChange:r=>e.onChange?.(r),get readOnly(){return e.flag===E.READONLY},get children(){return[t(y,{get children(){return[t(f,{get children(){return r("global.choose")}}),t(b,{}),t(p,{})]}}),t(k,{get children(){return t(v,{get children(){return t(x,{get each(){return e.options?.split(",")},children:n=>t(C,{value:n,get children(){return[t(m,{get children(){return r(`settings.${e.key}s.${n}`)}}),t(O,{})]}})})}})}})]}})}})]}}),t(T,{get children(){return u((()=>!!e.help),!0)()?r(`settings.${e.key}-tips`):""}})]}})}))}}}));