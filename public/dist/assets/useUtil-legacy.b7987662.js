System.register(["./index-legacy.07cd0eea.js","./api-legacy.1f93cb9d.js","./useT-legacy.7c2dc411.js"],(function(e,t){"use strict";var n,a,r,o,c,i,s,l,p,u,d,g,y,f,m,b;return{setters:[e=>{n=e.u,a=e.o,r=e.S,o=e.b5,c=e.b6,i=e.p,s=e.ab,l=e.G,p=e.s,u=e.b7,d=e.b8,g=e.n,y=e.b9,f=e.a4},e=>{m=e.b},e=>{b=e.u}],execute:function(){const t=e("g",((e,t,n="direct",a)=>{let r=`${e=c(i(s().base_path,e),!0)}/${t.name}`;r=l(r,a);let o=u,p="direct"===n?"/d":"/p";"preview"===n&&(o=location.origin+d,p="");let g=`${o}${p}${r}`;return"preview"!==n&&t.sign&&(g+=`?sign=${t.sign}`),g})),w=e("a",(()=>{const{pathname:e}=n(),c=(n,c,i)=>{const s=a.state===r.Folder?e():o(e());return t(s,n,c,i)},i=(e,t)=>c(e,"direct",t);return{getLinkByObj:c,rawLink:i,proxyLink:(e,t)=>c(e,"proxy",t),previewPage:(e,t)=>c(e,"preview",t),currentObjLink:e=>i(a.obj,e)}})),v=e("u",(()=>{const{previewPage:e,rawLink:t}=w(),n=e=>p().filter((e=>!e.is_dir)).map((n=>t(n,e)));return{rawLinks:n,previewPagesText:()=>p().map((t=>e(t,!0))).join("\n"),rawLinksText:e=>n(e).join("\n")}}));e("b",(()=>{const{copy:e}=D(),{previewPagesText:t,rawLinksText:n}=v(),{currentObjLink:a}=w();return{copySelectedPreviewPage:()=>{e(t())},copySelectedRawLink:t=>{e(n(t))},copyCurrentRawLink:t=>{e(a(t))}}}));var x=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],a=0;a<e.rangeCount;a++)n.push(e.getRangeAt(a));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}},C={"text/plain":"Text","text/html":"Url",default:"Text"},k=function(e,t){var n,a,r,o,c,i,s=!1;t||(t={}),n=t.debug||!1;try{if(r=x(),o=document.createRange(),c=document.getSelection(),(i=document.createElement("span")).textContent=e,i.ariaHidden="true",i.style.all="unset",i.style.position="fixed",i.style.top=0,i.style.clip="rect(0, 0, 0, 0)",i.style.whiteSpace="pre",i.style.webkitUserSelect="text",i.style.MozUserSelect="text",i.style.msUserSelect="text",i.style.userSelect="text",i.addEventListener("copy",(function(a){if(a.stopPropagation(),t.format)if(a.preventDefault(),void 0===a.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=C[t.format]||C.default;window.clipboardData.setData(r,e)}else a.clipboardData.clearData(),a.clipboardData.setData(t.format,e);t.onCopy&&(a.preventDefault(),t.onCopy(a.clipboardData))})),document.body.appendChild(i),o.selectNodeContents(i),c.addRange(o),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(l){n&&console.error("unable to copy using execCommand: ",l),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(l){n&&console.error("unable to copy using clipboardData: ",l),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(o):c.removeAllRanges()),i&&document.body.removeChild(i),r()}return s};const D=e("c",(()=>{const e=b(),{pathname:t}=n();return{copy:t=>{k(t),g.success(e("global.copied"))},isHide:e=>{const n=y();for(const a of n)if(a.test(i(t(),e.name)))return!0;return!1}}}));e("d",(()=>{const{proxyLink:e}=w();return f("",(async()=>m(e(a.obj,!0))))}))}}}));
