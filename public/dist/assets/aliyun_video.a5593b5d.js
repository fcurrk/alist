import{b as S,W,Q as i,aw as j,cR as y,ca as A,aR as I,b3 as L,_ as O,aA as P,b4 as g,n as w,o as R,d as C,h as v,Y as N}from"./index.382b0bc7.js";import{O as T}from"./icon.0bd85029.js";import{A as q,V as z}from"./video_box.e757c3ae.js";import{H as B,a as V}from"./hls.45d60f3e.js";import"./index.26ae0499.js";import"./index.e137f8bc.js";import"./Layout.f88594d5.js";import"./index.29fef1ef.js";import"./FolderTree.8faffb59.js";const K=()=>{const{replace:_,pathname:c}=S(),{proxyLink:p}=W();let s=i.objs.filter(e=>e.type===T.VIDEO);s.length===0&&(s=[i.obj]);let a,l={id:c(),container:"#video-player",title:i.obj.name,volume:.5,autoplay:j("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,n){const t=new B;t.loadSource(n),t.attachMedia(e),e.src||(e.src=n)}},lang:["en","zh-cn","zh-tw"].includes(y().toLowerCase())?y().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};const u=i.related.find(e=>{for(const n of[".srt",".ass",".vtt"])if(e.name.endsWith(n))return!0;return!1}),d=i.related.find(e=>{for(const n of[".xml"])if(e.name.endsWith(n))return!0;return!1});u&&(l.subtitle={url:p(u,!0),type:A(u.name)}),d&&(l.plugins=[V({danmuku:p(d,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const[M,f]=I(()=>L.post("/fs/other",{path:c(),password:O(),method:"video_preview"}));P(async()=>{const e=await f();g(e,n=>{const t=n.video_preview_play_info.live_transcoding_task_list.filter(r=>r.url);if(t.length===0){w.error("No transcoding video found");return}l.url=t[t.length-1].url,l.quality=t.map((r,o)=>({html:r.template_id,url:r.url,default:o===t.length-1})),a=new q(l),a.on("video:ended",()=>{if(!k())return;const r=s.findIndex(o=>o.name===i.obj.name);r<s.length-1&&_(s[r+1].name)}),u&&a.on("video:play",r=>{a.subtitle.url=p(u,!0)}),m=window.setInterval(b,1e3*60*14)})});let m,h;async function b(){const e=await f();g(e,async n=>{const t=n.video_preview_play_info.live_transcoding_task_list.filter(o=>o.url);if(t.length===0){w.error("No transcoding video found");return}const r=t.map((o,F)=>({html:o.template_id,url:o.url,default:F===t.length-1}));a.quality=r,h=a.currentTime,await a.switchUrl(r[r.length-1].url),setTimeout(()=>{a.seek=h},1e3)})}R(()=>{a==null||a.destroy(),window.clearInterval(m)});const[k,x]=C();return v(z,{onAutoNextChange:x,get children(){return v(N,{w:"$full",h:"60vh",id:"video-player"})}})};export{K as default};
