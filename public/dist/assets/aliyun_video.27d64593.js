import{u as f,o as n,ay as k,cq as h,bG as v,a as w,b8 as x,_,k as j,be as F,n as L,az as S,j as l,a3 as W,a5 as O,aU as z,a6 as C}from"./index.a285b98b.js";import{a as M}from"./useUtil.02ed9c33.js";import{O as P}from"./icon.ec5070e8.js";import{H as A,a as I,A as R}from"./hls.82929bee.js";import{c as V}from"./Layout.4c8c59b4.js";import"./api.f38e1a92.js";import"./index.fbdb5944.js";import"./index.dacbd941.js";import"./index.45334b86.js";import"./FolderTree.0dcf2614.js";const J=()=>{const{replace:c}=f(),{proxyLink:m}=M();let o=n.objs.filter(e=>e.type===P.VIDEO);o.length===0&&(o=[n.obj]);let i,s={id:"player",container:"#video-player",title:n.obj.name,volume:.5,autoplay:k("video_autoplay"),autoSize:!1,autoMini:!0,loop:!1,flip:!0,playbackRate:!0,aspectRatio:!0,setting:!0,hotkey:!0,pip:!0,mutex:!0,fullscreen:!0,fullscreenWeb:!0,subtitleOffset:!0,miniProgressBar:!1,playsInline:!0,quality:[],plugins:[],whitelist:[],moreVideoAttr:{"webkit-playsinline":!0,playsInline:!0},type:"m3u8",customType:{m3u8:function(e,t){const a=new A;a.loadSource(t),a.attachMedia(e),e.src||(e.src=t)}},lang:["en","zh-cn","zh-tw"].includes(h().toLowerCase())?h().toLowerCase():"en",lock:!0,fastForward:!0,autoPlayback:!0,autoOrientation:!0,airplay:!0};V&&(s.moreVideoAttr.controls=!0);const u=n.related.find(e=>{for(const t of[".srt",".ass",".vtt"])if(e.name.endsWith(t))return!0;return!1}),d=n.related.find(e=>{for(const t of[".xml"])if(e.name.endsWith(t))return!0;return!1});u&&(s.subtitle={url:m(u,!0),type:v(u.name)}),d&&(s.plugins=[I({danmuku:m(d,!0),speed:5,opacity:1,fontSize:25,color:"#FFFFFF",mode:0,margin:[0,"0%"],antiOverlap:!1,useWorker:!0,synchronousPlayback:!1,lockTime:5,maxLength:100,minWidth:200,maxWidth:400,theme:"dark"})]);const{pathname:y}=f(),[g,b]=w(()=>x.post("/fs/other",{path:y(),password:_(),method:"video_preview"}));return j(async()=>{const e=await b();F(e,t=>{const a=t.video_preview_play_info.live_transcoding_task_list.filter(r=>r.url);if(a.length===0){L.error("No transcoding video found");return}s.url=a[a.length-1].url,s.quality=a.map((r,p)=>({html:r.template_id,url:r.url,default:p===a.length-1})),i=new R(s),i.on("video:ended",()=>{const r=o.findIndex(p=>p.name===n.obj.name);r<o.length-1&&c(o[r+1].name)})})}),S(()=>{i==null||i.destroy()}),l(C,{get loading(){return g()},get children(){return l(W,{w:"$full",spacing:"$2",get children(){return[l(O,{w:"$full",h:"60vh",id:"video-player"}),l(z,{onChange:e=>{c(e)},get value(){return n.obj.name},get options(){return o.map(e=>({value:e.name}))}})]}})}})};export{J as default};
