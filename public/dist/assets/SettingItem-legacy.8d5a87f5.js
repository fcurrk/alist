!function(){function e(e,n){for(var r in n){(l=n[r]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,r,l)}if(Object.getOwnPropertySymbols)for(var t=Object.getOwnPropertySymbols(n),u=0;u<t.length;u++){var l,i=t[u];(l=n[i]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,i,l)}return e}function n(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.5fbb2ea4.js","./useT-legacy.5eed066a.js","./index-legacy.ccf4228a.js","./item_type-legacy.d1f1c701.js","./index-legacy.a26bfcb5.js"],(function(r){"use strict";var t,u,l,i,c,a,o,g,d,f,h,b,v,y,s,p,O,k,m,w,C,j,x,T,D,P,E,N;return{setters:[function(e){t=e.f,u=e.b0,l=e.a9,i=e.x,c=e.ap,a=e.$,o=e.ak,g=e.a0,d=e.I,f=e.bN,h=e.T,b=e.bO,v=e.bP,y=e.bQ,s=e.bR,p=e.bS,O=e.bT,k=e.bU,m=e.C,w=e.bV,C=e.bW,j=e.bX,x=e.F,T=e.b2},function(e){D=e.u},function(e){P=e.F},function(e){E=e.T},function(e){N=e.P}],execute:function(){r("I",(function(r){var S=D();return t(T,{w:"$full",display:"flex",flexDirection:"column",get children(){var T,D;return[t(u,(T={},"for",D={},D.for=D.for||{},D.for.get=function(){return r.key},n(T,"display","flex"),n(T,"alignItems","center"),"children",D.children=D.children||{},D.children.get=function(){return[l((function(){return S("settings.".concat(r.key))})),t(i,{get when(){return r.flag===P.DEPRECATED},get children(){return t(c,{ml:"$2",as:N,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:function(){var e;null===(e=r.onDelete)||void 0===e||e.call(r)}})}})]},e(T,D),T)),t(a,{get fallback(){return t(o,{get children(){return S("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[E.String,E.Number].includes(r.type)},get children(){return t(d,{get type(){return r.type===E.Number?"number":""},get id(){return r.key},get value(){return r.value},onInput:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===P.READONLY}})}}),t(g,{get when(){return r.type===E.Bool},get children(){return t(f,{get id(){return r.key},get defaultChecked(){return"true"===r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.checked?"true":"false")},get readOnly(){return r.flag===P.READONLY}})}}),t(g,{get when(){return r.type===E.Text},get children(){return t(h,{get id(){return r.key},get value(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===P.READONLY}})}}),t(g,{get when(){return r.type===E.Select},get children(){return t(b,{get id(){return r.key},get defaultValue(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e)},get readOnly(){return r.flag===P.READONLY},get children(){return[t(v,{get children(){return[t(y,{get children(){return S("global.choose")}}),t(s,{}),t(p,{})]}}),t(O,{get children(){return t(k,{get children(){return t(m,{get each(){var e;return null===(e=r.options)||void 0===e?void 0:e.split(",")},children:function(e){return t(w,{value:e,get children(){return[t(C,{get children(){return S("settings.".concat(r.key,"s.").concat(e))}}),t(j,{})]}})}})}})}})]}})}})]}}),t(x,{get children(){return l((function(){return!!r.help}),!0)()?S("settings.".concat(r.key,"-tips")):""}})]}})}))}}}))}();
