!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",l=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return E()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=k(a,r);if(l){if(l===h)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(P){return{type:"throw",arg:P}}}r.wrap=s;var h={};function p(){}function d(){}function y(){}var v={};c(v,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(S([])));g&&g!==n&&o.call(g,a)&&(v=g);var w=y.prototype=p.prototype=Object.create(v);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(e,r){function n(i,a,l,u){var c=f(e[i],e,a);if("throw"!==c.type){var s=c.arg,h=s.value;return h&&"object"==t(h)&&o.call(h,"__await")?r.resolve(h.__await).then((function(t){n("next",t,l,u)}),(function(t){n("throw",t,l,u)})):r.resolve(h).then((function(t){s.value=t,l(s)}),(function(t){return n("throw",t,l,u)}))}u(c.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function k(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function S(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=y,c(w,"constructor",y),c(y,"constructor",d),d.displayName=c(y,u,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,c(t,u,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(x.prototype),c(x.prototype,l,(function(){return this})),r.AsyncIterator=x,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new x(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),c(w,u,"Generator"),c(w,a,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=S,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:S(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},r}function r(t,e,r,n,o,i,a){try{var l=t[i](a),u=l.value}catch(c){return void r(c)}l.done?e(u):Promise.resolve(u).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function l(t){r(a,o,i,l,u,"next",t)}function u(t){r(a,o,i,l,u,"throw",t)}l(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return i(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./index-legacy.286637a5.js","./icon-legacy.0a7500d1.js","./video_box-legacy.dc116055.js","./hls-legacy.cf4286cc.js","./index-legacy.c1b442a3.js","./index-legacy.bcd56e86.js","./Layout-legacy.8ed17803.js","./index-legacy.14281aa7.js","./FolderTree-legacy.15d1f665.js","./index-legacy.7bf90d55.js","./_commonjs-dynamic-modules-legacy.cf19cda3.js"],(function(t){"use strict";var r,i,a,l,u,c,s,f,h,p,d,y,v,m,g,w,b,x,k,_,L,j,S,E,P,O,z,A,C,F,I,N,T,M;return{setters:[function(t){r=t.b,i=t.a4,a=t.d1,l=t.a0,u=t.aH,c=t.d2,s=t.ck,f=t.aJ,h=t.cd,p=t.d3,d=t.aU,y=t.b6,v=t._,m=t.o,g=t.b7,w=t.n,b=t.d,x=t.k,k=t.e,_=t.a6,L=t.S,j=t.aA,S=t.aj,E=t.p,P=t.d4},function(t){O=t.O,z=t.A},function(t){A=t.A,C=t.a,F=t.V},function(t){I=t.H,N=t.a,T=t.b},function(t){M=t.r},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var G=S("<span></span>");t("default",(function(){var t=r(),S=t.pathname,W=t.searchParams,H=i().proxyLink,q=a(),U=l.objs.filter((function(t){return t.type===O.VIDEO}));0===U.length&&(U=[l.obj]);var B,V,$=function(){var t=U.findIndex((function(t){return t.name===l.obj.name}));t<U.length-1&&q(E(P(location.pathname),U[t+1].name)+"?auto_fullscreen="+B.fullscreen)},D={id:S(),container:"#video-player",title:l.obj.name,volume:.5,autoplay:u("video_autoplay"),autoSize:!1,autoMini:!0,controls:[{name:"previous-button",index:10,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-prev-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M20.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path><path d="M9.341 4.247l-8 7a1 1 0 0 0 0 1.506l8 7c.647 .565 1.659 .106 1.659 -.753v-14c0 -.86 -1.012 -1.318 -1.659 -.753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Previous",click:function(){var t;(t=U.findIndex((function(t){return t.name===l.obj.name})))>0&&q(E(P(location.pathname),U[t-1].name)+"?auto_fullscreen="+B.fullscreen)}},{name:"next-button",index:11,position:"left",html:'<svg fill="none" stroke-width="2" xmlns="http://www.w3.org/2000/svg" height="22" width="22" class="icon icon-tabler icon-tabler-player-track-next-filled" width="1em" height="1em" viewBox="0 0 24 24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" style="overflow: visible; color: currentcolor;"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M2 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path><path d="M13 5v14c0 .86 1.012 1.318 1.659 .753l8 -7a1 1 0 0 0 0 -1.506l-8 -7c-.647 -.565 -1.659 -.106 -1.659 .753z" stroke-width="0" fill="currentColor"></path></svg>',tooltip:"Next",click:function(){$()}}],loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[A],whitelist:[],settings:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(t,e){var r=new I;r.loadSource(e),r.attachMedia(t),t.src||(t.src=e)}},lang:["en","zh-cn","zh-tw"].includes(c().toLowerCase())?c().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0},R=l.related.filter((function(t){for(var e=0,r=[".srt",".ass",".vtt"];e<r.length;e++){var n=r[e];if(t.name.endsWith(n))return!0}return!1})),Y=l.related.find((function(t){for(var e=0,r=[".xml"];e<r.length;e++){var n=r[e];if(t.name.endsWith(n))return!0}return!1}));if(0!=R.length){var J,K,Q=!1,X=R[0];if("ass"===s(X.name).toLowerCase())Q=!0,null===(K=D.plugins)||void 0===K||K.push(N({subUrl:H(X,!0)}));else D.subtitle={url:H(X,!0),type:s(X.name)};var Z=[{id:"setting_subtitle_display",html:"Display",tooltip:"Show",switch:!0,onSwitch:function(t){var e;t.tooltip=t.switch?"Hide":"Show",ht(!t.switch);var r=null===(e=D.settings)||void 0===e?void 0:e.find((function(t){return"setting_subtitle"===t.id}));return r&&(r.tooltip=t.tooltip),!t.switch}}];function ht(t){if("ass"===(Q?"ass":"webvtt"))B.subtitle.show=!1,B.emit("artplayer-plugin-ass:visible",t);else B.subtitle.show=t,B.emit("artplayer-plugin-ass:visible",!1)}R.forEach((function(t,e){var r;Z.push({default:0===e,html:(r=G.cloneNode(!0),r.style.setProperty("max-width","200px"),r.style.setProperty("overflow","hidden"),r.style.setProperty("text-overflow","ellipsis"),r.style.setProperty("word-break","break-all"),r.style.setProperty("white-space","normal"),r.style.setProperty("display","-webkit-box"),r.style.setProperty("-webkit-line-clamp","2"),r.style.setProperty("-webkit-box-orient","vertical"),r.style.setProperty("font-size","12px"),f(r,(function(){return t.name})),h((function(){return p(r,"title",t.name)})),r),name:t.name,url:H(t,!0)})})),null===(J=D.settings)||void 0===J||J.push({id:"setting_subtitle",html:"Subtitle",tooltip:"Show",icon:z({size:24}),selector:Z,onSelect:function(t){var e,r;"ass"===s(t.name).toLowerCase()?(Q=!0,this.emit("artplayer-plugin-ass:switch",t.url),ht(!0)):(Q=!1,this.subtitle.switch(t.url,{name:t.name}),this.once("subtitleLoad",ht.bind(this,!0)));var n=Z.find((function(t){return"setting_subtitle_display"===t.id}));return n&&!n.switch&&(null===(e=n.$html)||void 0===e||null===(r=e.click)||void 0===r||r.call(e)),null==n?void 0:n.tooltip}})}Y&&(null===(V=D.plugins)||void 0===V||V.push(T({danmuku:H(Y,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})));var tt,et,rt=o(d((function(){return y.post("/fs/other",{path:S(),password:v(),method:"video_preview"})})),2),nt=(rt[0],rt[1]);function ot(){return it.apply(this,arguments)}function it(){return it=n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,nt();case 2:r=t.sent,g(r,function(){var t=n(e().mark((function t(r){var n,o,i;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==(n=r.video_preview_play_info.live_transcoding_task_list.filter((function(t){return t.url}))).length){t.next=4;break}return w.error("No transcoding video found"),t.abrupt("return");case 4:return o=n.map((function(t,e){return{html:t.template_id,url:t.url,default:e===n.length-1}})),D.quality=o,B.quality=o,et=B.currentTime,i=B.playing,t.next=11,B.switchUrl(o[o.length-1].url);case 11:i||B.pause(),setTimeout((function(){B.seek=et}),1e3);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 4:case"end":return t.stop()}}),t)}))),it.apply(this,arguments)}m(n(e().mark((function t(){var r;return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,nt();case 2:r=t.sent,ft(200!==r.code),g(r,(function(t){var e=t.video_preview_play_info.live_transcoding_task_list.filter((function(t){return t.url}));if(0!==e.length){var r;switch(D.url=e[e.length-1].url,D.quality=e.map((function(t,r){return{html:t.template_id,url:t.url,default:r===e.length-1}})),B=new C(D),W.auto_fullscreen){case"true":r=!0;case"false":r=!1;default:r=!1}B.on("ready",(function(){B.fullscreen=r})),B.on("video:ended",(function(){lt()&&$()})),tt=window.setInterval(ot,84e4)}else w.error("No transcoding video found")}));case 5:case"end":return t.stop()}}),t)})))),b((function(){var t;null===(t=B)||void 0===t||t.destroy(),window.clearInterval(tt)}));var at=o(x(),2),lt=at[0],ut=at[1],ct=o(x(!1),2),st=ct[0],ft=ct[1];return k(F,{onAutoNextChange:ut,get children(){return[k(_,{w:"$full",h:"60vh",id:"video-player"}),k(L,{get when(){return st()},get children(){return k(j,{w:"100%",h:"60vh",bgColor:"black",get children(){return k(M,{size:"4rem"})}})}})]}})}))}}}))}();
