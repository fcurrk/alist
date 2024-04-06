!function(){function e(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var t,o,i=[],u=!0,c=!1;try{for(r=r.call(e);!(u=(t=r.next()).done)&&(i.push(t.value),!n||i.length!==n);u=!0);}catch(a){c=!0,o=a}finally{try{u||null==r.return||r.return()}finally{if(c)throw o}}return i}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function t(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}System.register(["./index-legacy.286637a5.js","./icon-legacy.0a7500d1.js","./index-legacy.c1b442a3.js","./Layout-legacy.8ed17803.js"],(function(n,r){"use strict";var o,i,u,c,a,l,f,p,d,s,m,g,y,h,b,v,j,w,O,_,k,x,$,S,P,A,E,T,I,D,z,C,M,L,V,U,X,B,q,G,W;return{setters:[function(e){o=e.e,i=e.at,u=e.ax,c=e.am,a=e.a0,l=e.a3,f=e.av,p=e.ae,d=e.af,s=e.c4,m=e.cn,g=e.a,y=e.j,h=e.co,b=e.a4,v=e.as,j=e.ak,w=e.B,O=e.ao,_=e.E,k=e.ap,x=e.cg,$=e.S,S=e.aG,P=e.ad,A=e.cj,E=e.K,T=e.cp,I=e.U,D=e.V,z=e.ck,C=e.cq,M=e.k,L=e.b9,V=e.X,U=e.Y,X=e.aq},function(e){B=e.g,q=e.O},function(e){G=e.o},function(e){W=e.T}],execute:function(){var F=n("F",(function(e){return o(l,{class:"fileinfo",py:"$6",spacing:"$6",get children(){return[o(i,{boxSize:"$20",get fallback(){return o(u,{get color(){return c()},boxSize:"$20",get as(){return B(a.obj)}})},get src(){return a.obj.thumb}}),o(l,{spacing:"$2",get children(){return[o(f,{size:"lg",css:{wordBreak:"break-all"},get children(){return a.obj.name}}),o(p,{color:"$neutral10",size:"sm",get children(){return[d((function(){return s(a.obj.size)}))," · ",d((function(){return m(a.obj.modified)}))]}})]}}),o(l,{spacing:"$2",get children(){return e.children}})]}})})),H=function(){var e=g(),n=y((function(){return h(a.obj.name)})),r=b().currentObjLink;return o($,{get when(){return n().length},get children(){return o(v,{get children(){return[o(j,{as:w,colorScheme:"success",get rightIcon(){return o(u,{as:G})},get children(){return e("home.preview.open_with")}}),o(O,{get children(){return o(_,{get each(){return n()},children:function(e){return o(k,{as:"a",target:"_blank",get href(){return x(e.value,{raw_url:a.raw_url,name:a.obj.name,d_url:r(!0)})},get children(){return e.key}})}})}})]}})}})},K=function(e){var n=g(),r=S().copyCurrentRawLink;return o(F,{get children(){return[o(P,{spacing:"$2",get children(){return[o(w,{colorScheme:"accent",onClick:function(){return r(!0)},get children(){return n("home.toolbar.copy_link")}}),o(w,{as:"a",get href(){return a.raw_url},target:"_blank",get children(){return n("home.preview.download")}})]}}),o($,{get when(){return e.openWith},get children(){return o(H,{})}})]}})},R=Object.freeze(Object.defineProperty({__proto__:null,Download:K,default:K},Symbol.toStringTag,{value:"Module"})),Y=function(e){var n=b().currentObjLink,r=y((function(){return x(e.scheme,{raw_url:a.raw_url,name:a.obj.name,d_url:n(!0),ts:!0})}));return o(T,{w:"$full",h:"70vh",get children(){return[o(A.iframe,{w:"$full",h:"$full",get src(){return r()}}),o(u,{pos:"absolute",right:"$2",bottom:"$10","aria-label":"Open in new tab",as:W,onClick:function(){window.open(r(),"_blank")},cursor:"pointer",rounded:"$md",get bgColor(){return E()},p:"$1",boxSize:"$7"})]}})},J=[{name:"HTML render",exts:["html"],component:I((function(){return D((function(){return r.import("./html-legacy.1ba55384.js")}),void 0)}))},{name:"Aliyun Video Previewer",type:q.VIDEO,provider:/^Aliyundrive(Open)?$/,component:I((function(){return D((function(){return r.import("./aliyun_video-legacy.7c764fec.js")}),void 0)}))},{name:"Markdown",type:q.TEXT,component:I((function(){return D((function(){return r.import("./markdown-legacy.552f5e30.js")}),void 0)}))},{name:"Markdown with word wrap",type:q.TEXT,component:I((function(){return D((function(){return r.import("./markdown_with_word_wrap-legacy.446a4595.js")}),void 0)}))},{name:"Url Open",exts:["url"],component:I((function(){return D((function(){return r.import("./url-legacy.cc415435.js")}),void 0)}))},{name:"Text Editor",type:q.TEXT,exts:["url"],component:I((function(){return D((function(){return r.import("./text-editor-legacy.95d15d5a.js")}),void 0)}))},{name:"Image",type:q.IMAGE,component:I((function(){return D((function(){return r.import("./image-legacy.34af253d.js")}),void 0)}))},{name:"Video",type:q.VIDEO,component:I((function(){return D((function(){return r.import("./video-legacy.3286f10c.js")}),void 0)}))},{name:"Audio",type:q.AUDIO,component:I((function(){return D((function(){return r.import("./audio-legacy.cf1e7d92.js")}),void 0)}))},{name:"Ipa",exts:["ipa","tipa"],component:I((function(){return D((function(){return r.import("./ipa-legacy.8eb2cc2c.js")}),void 0)}))},{name:"Plist",exts:["plist"],component:I((function(){return D((function(){return r.import("./plist-legacy.75c22716.js")}),void 0)}))},{name:"Aliyun Office Previewer",exts:["doc","docx","ppt","pptx","xls","xlsx","pdf"],provider:/^Aliyundrive(Share)?$/,component:I((function(){return D((function(){return r.import("./aliyun_office-legacy.d2e1539b.js")}),void 0)}))},{name:"Asciinema",exts:["cast"],component:I((function(){return D((function(){return r.import("./asciinema-legacy.8d8ceef3.js")}),void 0)}))}],N=function(e){var n=[];return J.forEach((function(r){var t;r.provider&&!r.provider.test(e.provider)||(r.type===e.type||"*"===r.exts||null!==(t=r.exts)&&void 0!==t&&t.includes(z(e.name).toLowerCase()))&&n.push({name:r.name,component:r.component})})),C(e.name).forEach((function(e){var r;n.push({name:e.key,component:(r=e.value,function(){return o(Y,{scheme:r})})})})),n.push({name:"Download",component:I((function(){return D((function(){return Promise.resolve().then((function(){return R}))}),void 0)}))}),n},Q=Object.freeze(Object.defineProperty({__proto__:null,default:function(){var n=y((function(){return N(t(t({},a.obj),{},{provider:a.provider}))})),r=e(M(n()[0]),2),i=r[0],u=r[1];return o($,{get when(){return n().length>1},get fallback(){return o(K,{openWith:!0})},get children(){return o(l,{w:"$full",spacing:"$2",get children(){return[o(P,{w:"$full",spacing:"$2",get children(){return[o(L,{alwaysShowBorder:!0,get value(){return i().name},onChange:function(e){u(n().find((function(n){return n.name===e})))},get options(){return n().map((function(e){return{value:e.name}}))}}),o(H,{})]}}),o(V,{get fallback(){return o(U,{})},get children(){return o(X,{get component(){return i().component}})}})]}})}})}},Symbol.toStringTag,{value:"Module"}));n("a",Q)}}}))}();
