import{u as i,f as e,bf as u,I as c,_ as g,W as p,bJ as m,a8 as o,bg as d,bc as a,B as s,a3 as h}from"./index.eb38676d.js";import{u as f}from"./useT.450d3135.js";import{b}from"./Layout.9408c0f5.js";import{L as $}from"./index.72ad7f28.js";import"./useTitle.008dbc5d.js";import"./api.1f894f0e.js";import"./useUtil.340acbc6.js";import"./index.2fad6525.js";import"./FolderTree.fcdb8f42.js";const B=()=>{const t=f(),{refresh:n}=b(),{back:l}=i();return e(h,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(u,{get children(){return t("home.input_password")}}),e(c,{type:"password",get value(){return g()},get background(){return p("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(d,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:$,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{B as default};
