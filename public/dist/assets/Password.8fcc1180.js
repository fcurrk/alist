import{d as i,u,j as e,ao as c,I as g,_ as p,W as d,bQ as m,a8 as o,bi as h,a9 as a,B as s,a3 as $}from"./index.af305b75.js";import{a as f}from"./Layout.23de6123.js";import{L as b}from"./index.4dd2fedf.js";import"./index.366a1a5c.js";import"./api.b639104e.js";import"./useUtil.cda97e08.js";import"./index.935e734b.js";import"./FolderTree.48256a21.js";const x=()=>{const t=i(),{refresh:n}=f(),{back:l}=u();return e($,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(c,{get children(){return t("home.input_password")}}),e(g,{type:"password",get value(){return p()},get background(){return d("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(h,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:b,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{x as default};
