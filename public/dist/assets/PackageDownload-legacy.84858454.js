System.register(["./index-legacy.6db41345.js","./useT-legacy.b414a1f2.js","./api-legacy.7d721719.js","./useUtil-legacy.162c1b79.js"],(function(e,t){"use strict";var r,n,a,o,s,i,l,c,d,m,u,h,g,p,w,f,v,y,b;return{setters:[e=>{r=e.q,n=e.u,a=e.s,o=e.f,s=e.a3,i=e.ag,l=e.aa,c=e.E,d=e.a9,m=e.w,u=e.y,h=e.B,g=e.x,p=e.b4,w=e.p,f=e._},e=>{v=e.u},e=>{y=e.a},e=>{b=e.g}],execute:function(){class t{constructor(){this.crc=-1}append(e){for(var t=0|this.crc,r=this.table,n=0,a=0|e.length;n<a;n++)t=t>>>8^r[255&(t^e[n])];this.crc=t}get(){return~this.crc}}t.prototype.table=(()=>{var e,t,r,n=[];for(e=0;e<256;e++){for(r=e,t=0;t<8;t++)r=1&r?r>>>1^3988292384:r>>>1;n[e]=r}return n})();const S=e=>{var t=new Uint8Array(e);return{array:t,view:new DataView(t.buffer)}};window.ZIP=function(e){const r=Object.create(null),n=[],a=new TextEncoder;let o,s,i,l=0,c=0;function d(){c++,s=r[n[c]],s?h():i&&u()}var m={enqueue(e){if(i)throw new TypeError("Cannot enqueue a chunk into a readable stream that is closed or has been requested to be closed");let t=e.name.trim();const c=new Date(void 0===e.lastModified?Date.now():e.lastModified);if(e.directory&&!t.endsWith("/")&&(t+="/"),r[t])throw new Error("File already exists.");const m=a.encode(t);n.push(t);const u=r[t]={level:0,ctrl:o,directory:!!e.directory,nameBuf:m,comment:a.encode(e.comment||""),compressedLength:0,uncompressedLength:0,writeHeader(){var e=S(26),t=S(30+m.length);u.offset=l,u.header=e,0===u.level||u.directory||e.view.setUint16(4,2048),e.view.setUint32(0,335546376),e.view.setUint16(6,(c.getHours()<<6|c.getMinutes())<<5|c.getSeconds()/2,!0),e.view.setUint16(8,(c.getFullYear()-1980<<4|c.getMonth()+1)<<5|c.getDate(),!0),e.view.setUint16(22,m.length,!0),t.view.setUint32(0,1347093252),t.array.set(e.array,4),t.array.set(m,30),l+=t.array.length,o.enqueue(t.array)},writeFooter(){var e=S(16);e.view.setUint32(0,1347094280),u.crc&&(u.header.view.setUint32(10,u.crc.get(),!0),u.header.view.setUint32(14,u.compressedLength,!0),u.header.view.setUint32(18,u.uncompressedLength,!0),e.view.setUint32(4,u.crc.get(),!0),e.view.setUint32(8,u.compressedLength,!0),e.view.setUint32(12,u.uncompressedLength,!0)),o.enqueue(e.array),l+=u.compressedLength+16,d()},fileLike:e};s||(s=u,h())},close(){if(i)throw new TypeError("Cannot close a readable stream that has already been requested to be closed");s||u(),i=!0}};function u(){var e,t,a=0,s=0;for(e=0;e<n.length;e++)a+=46+(t=r[n[e]]).nameBuf.length+t.comment.length;const i=S(a+22);for(e=0;e<n.length;e++)t=r[n[e]],i.view.setUint32(s,1347092738),i.view.setUint16(s+4,5120),i.array.set(t.header.array,s+6),i.view.setUint16(s+32,t.comment.length,!0),t.directory&&i.view.setUint8(s+38,16),i.view.setUint32(s+42,t.offset,!0),i.array.set(t.nameBuf,s+46),i.array.set(t.comment,s+46+t.nameBuf.length),s+=46+t.nameBuf.length+t.comment.length;i.view.setUint32(s,1347093766),i.view.setUint16(s+8,n.length,!0),i.view.setUint16(s+10,n.length,!0),i.view.setUint32(s+12,a,!0),i.view.setUint32(s+16,l,!0),o.enqueue(i.array),o.close()}function h(){var e;if(s)return s.directory?s.writeFooter(s.writeHeader()):s.reader?(e=s).reader.read().then((t=>{if(t.done)return e.writeFooter();const r=t.value;e.crc.append(r),e.uncompressedLength+=r.length,e.compressedLength+=r.length,e.ctrl.enqueue(r)})):void(s.fileLike.stream?(s.crc=new t,s.reader=s.fileLike.stream.getReader(),s.writeHeader()):d())}return new ReadableStream({start:t=>{o=t,e.start&&Promise.resolve(e.start(m))},pull:()=>h()||e.pull&&Promise.resolve(e.pull(m))})};var U={exports:{}};/*! streamsaver. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */!function(e){var t;t=()=>{const e="object"==typeof window?window:this;e.HTMLElement||console.warn("streamsaver is meant to run on browsers main thread");let t=null,r=!1;const n=e.WebStreamsPolyfill||{},a=e.isSecureContext;let o=/constructor/i.test(e.HTMLElement)||!!e.safari||!!e.WebKitPoint;const s=a||"MozAppearance"in document.documentElement.style?"iframe":"navigate",i={createWriteStream:function(n,c,d){let m={size:null,pathname:null,writableStrategy:void 0,readableStrategy:void 0},u=0,h=null,g=null,p=null;if(Number.isFinite(c)?([d,c]=[c,d],console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),m.size=d,m.writableStrategy=c):c&&c.highWaterMark?(console.warn("[StreamSaver] Deprecated pass an object as 2nd argument when creating a write stream"),m.size=d,m.writableStrategy=c):m=c||{},!o){t||(t=a?l(i.mitm):function(t){const r="width=200,height=100",n=document.createDocumentFragment(),a={frame:e.open(t,"popup",r),loaded:!1,isIframe:!1,isPopup:!0,remove(){a.frame.close()},addEventListener(...e){n.addEventListener(...e)},dispatchEvent(...e){n.dispatchEvent(...e)},removeEventListener(...e){n.removeEventListener(...e)},postMessage(...e){a.frame.postMessage(...e)}},o=t=>{t.source===a.frame&&(a.loaded=!0,e.removeEventListener("message",o),a.dispatchEvent(new Event("load")))};return e.addEventListener("message",o),a}(i.mitm)),g=new MessageChannel,n=encodeURIComponent(n.replace(/\//g,":")).replace(/['()]/g,escape).replace(/\*/g,"%2A");const o={transferringReadable:r,pathname:m.pathname||Math.random().toString().slice(-6)+"/"+n,headers:{"Content-Type":"application/octet-stream; charset=utf-8","Content-Disposition":"attachment; filename*=UTF-8''"+n}};m.size&&(o.headers["Content-Length"]=m.size);const c=[o,"*",[g.port2]];if(r){const e="iframe"===s?void 0:{transform(e,t){if(!(e instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");u+=e.length,t.enqueue(e),h&&(location.href=h,h=null)},flush(){h&&(location.href=h)}};p=new i.TransformStream(e,m.writableStrategy,m.readableStrategy);const t=p.readable;g.port1.postMessage({readableStream:t},[t])}g.port1.onmessage=e=>{e.data.download?"navigate"===s?(t.remove(),t=null,u?location.href=e.data.download:h=e.data.download):(t.isPopup&&(t.remove(),t=null,"iframe"===s&&l(i.mitm)),l(e.data.download)):e.data.abort&&(w=[],g.port1.postMessage("abort"),g.port1.onmessage=null,g.port1.close(),g.port2.close(),g=null)},t.loaded?t.postMessage(...c):t.addEventListener("load",(()=>{t.postMessage(...c)}),{once:!0})}let w=[];return!o&&p&&p.writable||new i.WritableStream({write(e){if(!(e instanceof Uint8Array))throw new TypeError("Can only write Uint8Arrays");o?w.push(e):(g.port1.postMessage(e),u+=e.length,h&&(location.href=h,h=null))},close(){if(o){const e=new Blob(w,{type:"application/octet-stream; charset=utf-8"}),t=document.createElement("a");t.href=URL.createObjectURL(e),t.download=n,t.click()}else g.port1.postMessage("end")},abort(){w=[],g.port1.postMessage("abort"),g.port1.onmessage=null,g.port1.close(),g.port2.close(),g=null}},m.writableStrategy)},WritableStream:e.WritableStream||n.WritableStream,supported:!0,version:{full:"2.0.5",major:2,minor:0,dot:5},mitm:"https://jimmywarting.github.io/StreamSaver.js/mitm.html?version=2.0.0"};function l(e){if(!e)throw new Error("meh");const t=document.createElement("iframe");return t.hidden=!0,t.src=e,t.loaded=!1,t.name="iframe",t.isIframe=!0,t.postMessage=(...e)=>t.contentWindow.postMessage(...e),t.addEventListener("load",(()=>{t.loaded=!0}),{once:!0}),document.body.appendChild(t),t}try{new Response(new ReadableStream),a&&!("serviceWorker"in navigator)&&(o=!0)}catch(c){o=!0}return(e=>{try{e()}catch(t){}})((()=>{const{readable:e}=new TransformStream,t=new MessageChannel;t.port1.postMessage(e,[e]),t.port1.close(),t.port2.close(),r=!0,Object.defineProperty(i,"TransformStream",{configurable:!1,writable:!1,value:TransformStream})})),i},e.exports=t()}(U);const E=U.exports;E.mitm="/streamer/mitm.html";let L=0;e("default",(e=>{const t=v(),[S,U]=r(t("home.package_download.initializing")),[M,k]=r(0),{pathname:T}=n(),C=a(),j=async(e,t)=>{if(t.is_dir){const r=await y(w(T(),e,t.name),f());if(200!==r.code)return r.message;const n=[];for(const a of r.data.content??[]){const r=await j(w(e,t.name),a);if("string"==typeof r)return r;n.push(...r)}return n}return L+=t.size,[{path:w(e,t.name),url:b(w(T(),e),t,"direct",!0)}]},[W,_]=r([]);return(async()=>{let e=p(T());1===C.length&&(e=C[0].name),e||(e=t("manage.sidemenu.home"));let r=E.createWriteStream(`${e}.zip`,{size:L});U(t("home.package_download.fetching_struct")),k(2);const n=[];for(const s of C){const e=await j("",s);if("string"==typeof e)return U(`${t("home.package_download.fetching_struct_failed")}: ${e}`),k(1),e;n.push(...e)}U(t("home.package_download.downloading")),k(3);let a=n.values(),o=new window.ZIP({pull(t){const r=a.next();if(!r.done){let n=r.value.path.replace(/^\/+|\/+$/g,"");1===C.length&&(n=n.replace(`${e}/`,""));const a=r.value.url;return fetch(a).then((e=>{_((e=>[...e,n])),t.enqueue({name:n,stream:e.body})}))}t.close()}});window.WritableStream&&o.pipeTo&&o.pipeTo(r).then((()=>{U(`${t("home.package_download.success")}`),k(4)})).catch((e=>{U(`${t("home.package_download.failed")}: ${e}`),k(1)}))})(),[o(m,{get children(){return o(s,{w:"$full",alignItems:"start",spacing:"$2",get children(){return[o(i,{get children(){return[l((()=>t("home.package_download.current_status"))),": ",l((()=>S()))]}}),o(c,{get each(){return W()},children:e=>o(d,{css:{wordBreak:"break-all"},get children(){return["Fetching: ",e]}})})]}})}}),o(g,{get when(){return[1,4].includes(M())},get children(){return o(u,{get children(){return o(h,{colorScheme:"info",get onClick(){return e.onClose},get children(){return t("global.close")}})}})}})]}))}}}));