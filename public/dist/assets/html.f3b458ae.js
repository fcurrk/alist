import{dz as a,h as e,a8 as d,m as i,dA as l,cA as s,S as u,dB as g,cT as h}from"./index.317f3787.js";function f(t){const[n,r]=i("utf-8"),{isString:c,text:o}=l(t.children);return e(h,{w:"$full",h:"70vh",pos:"relative",get children(){return[e(s.iframe,{w:"$full",h:"$full",rounded:"$lg",shadow:"$md",get srcdoc(){return o(n())}}),e(u,{when:!c,get children(){return e(g,{get encoding(){return n()},setEncoding:r,get referenceText(){return t.children}})}})]}})}const w=()=>{const[t]=a();return e(d,{get loading(){return t.loading},get children(){return e(f,{get children(){var n;return(n=t())==null?void 0:n.content}})}})};export{w as default};