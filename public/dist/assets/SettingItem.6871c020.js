import{f as t,b0 as i,aa as c,x as h,ap as d,a0 as m,al as y,a1 as g,I as b,bN as f,T as S,bO as T,bP as C,bQ as k,bR as O,bS as o,bT as x,bU as v,E as w,bV as D,bW as I,bX as $,F as E,b2 as F}from"./index.a3f71402.js";import{u as N}from"./useT.c9a4b75c.js";import{F as u}from"./index.a282182b.js";import{T as a}from"./item_type.be442da4.js";import{H as A}from"./index.5fa4233c.js";const V=e=>{const l=N();return t(F,{w:"$full",display:"flex",flexDirection:"column",get children(){return[t(i,{get for(){return e.key},display:"flex",alignItems:"center",get children(){return[c(()=>l(`settings.${e.key}`)),t(h,{get when(){return e.flag===u.DEPRECATED},get children(){return t(d,{ml:"$2",as:A,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:()=>{var n;(n=e.onDelete)==null||n.call(e)}})}})]}}),t(m,{get fallback(){return t(y,{get children(){return l("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[a.String,a.Number].includes(e.type)},get children(){return t(b,{get type(){return e.type===a.Number?"number":""},get id(){return e.key},get value(){return e.value},onInput:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Bool},get children(){return t(f,{get id(){return e.key},get defaultChecked(){return e.value==="true"},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.checked?"true":"false")},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Text},get children(){return t(S,{get id(){return e.key},get value(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n.currentTarget.value)},get readOnly(){return e.flag===u.READONLY}})}}),t(g,{get when(){return e.type===a.Select},get children(){return t(T,{get id(){return e.key},get defaultValue(){return e.value},onChange:n=>{var r;return(r=e.onChange)==null?void 0:r.call(e,n)},get readOnly(){return e.flag===u.READONLY},get children(){return[t(C,{get children(){return[t(k,{get children(){return l("global.choose")}}),t(O,{}),t(o,{})]}}),t(x,{get children(){return t(v,{get children(){return t(w,{get each(){var n;return(n=e.options)==null?void 0:n.split(",")},children:n=>t(D,{value:n,get children(){return[t(I,{get children(){return l(`settings.${e.key}s.${n}`)}}),t($,{})]}})})}})}})]}})}})]}}),t(E,{get children(){return c(()=>!!e.help,!0)()?l(`settings.${e.key}-tips`):""}})]}})};export{V as I};
