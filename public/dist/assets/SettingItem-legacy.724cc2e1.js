!function(){function e(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}System.register(["./index-legacy.14c4ada2.js","./index-legacy.02931d6c.js","./item_type-legacy.d1f1c701.js","./index-legacy.1eaf39c1.js"],(function(r){"use strict";var n,t,u,l,i,c,a,o,g,d,f,h,v,b,y,s,p,O,m,w,k,j,C,x,D,E,T,P;return{setters:[function(e){n=e.d,t=e.j,u=e.y,l=e.b3,i=e.aa,c=e.aq,a=e.a0,o=e.as,g=e.a1,d=e.I,f=e.bO,h=e.T,v=e.bP,b=e.bQ,y=e.bR,s=e.bS,p=e.bT,O=e.bU,m=e.bV,w=e.E,k=e.bW,j=e.bX,C=e.bY,x=e.F,D=e.b5},function(e){E=e.F},function(e){T=e.T},function(e){P=e.U}],execute:function(){r("I",(function(r){var S=n();return t(D,{get w(){var e;return null!==(e=r.w)&&void 0!==e?e:"100%"},display:"flex",flexDirection:"column",get children(){return[t(u,{get when(){return!r.hideLabel},get children(){var n,a;return t(l,(n={},"for",(a={}).for=a.for||{},a.for.get=function(){return r.key},e(n,"display","flex"),e(n,"alignItems","center"),"children",a.children=a.children||{},a.children.get=function(){return[i((function(){return S("settings.".concat(r.key))})),t(u,{get when(){return r.flag===E.DEPRECATED},get children(){return t(c,{ml:"$2",as:P,boxSize:"$5",color:"$danger9",verticalAlign:"middle",cursor:"pointer",onClick:function(){var e;null===(e=r.onDelete)||void 0===e||e.call(r)}})}})]},function(e,r){for(var n in r)(l=r[n]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,n,l);if(Object.getOwnPropertySymbols)for(var t=Object.getOwnPropertySymbols(r),u=0;u<t.length;u++){var l,i=t[u];(l=r[i]).configurable=l.enumerable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,i,l)}}(n,a),n))}}),t(a,{get fallback(){return t(o,{get children(){return S("settings_other.unknown_type")}})},get children(){return[t(g,{get when(){return[T.String,T.Number].includes(r.type)},get children(){return t(d,{get type(){return r.type===T.Number?"number":""},get id(){return r.key},get value(){return r.value},onInput:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===T.Bool},get children(){return t(f,{get id(){return r.key},get defaultChecked(){return"true"===r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.checked?"true":"false")},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===T.Text},get children(){return t(h,{get id(){return r.key},get value(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e.currentTarget.value)},get readOnly(){return r.flag===E.READONLY}})}}),t(g,{get when(){return r.type===T.Select},get children(){return t(v,{get id(){return r.key},get defaultValue(){return r.value},onChange:function(e){var n;return null===(n=r.onChange)||void 0===n?void 0:n.call(r,e)},get readOnly(){return r.flag===E.READONLY},get children(){return[t(b,{get children(){return[t(y,{get children(){return S("global.choose")}}),t(s,{}),t(p,{})]}}),t(O,{get children(){return t(m,{get children(){return t(w,{get each(){var e;return null===(e=r.options)||void 0===e?void 0:e.split(",")},children:function(e){return t(k,{value:e,get children(){return[t(j,{get children(){return S("settings.".concat(r.key,"s.").concat(e))}}),t(C,{})]}})}})}})}})]}})}})]}}),t(x,{get children(){return i((function(){return!!r.help}),!0)()?S("settings.".concat(r.key,"-tips")):""}})]}})}))}}}))}();