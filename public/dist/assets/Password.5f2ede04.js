import{u as i,f as e,bf as u,I as c,_ as g,W as p,bK as m,a8 as o,bg as d,bc as a,B as s,a3 as h}from"./index.5b70725d.js";import{u as f}from"./useT.75b175bf.js";import{b}from"./Layout.5a690e19.js";import{L as $}from"./LinkWithBase.2394fb8c.js";import"./useTitle.b2fec78c.js";import"./api.d7bd7cce.js";import"./useUtil.35aaa6cd.js";import"./index.34289692.js";import"./index.e828aeac.js";import"./FolderTree.106119ee.js";const P=()=>{const t=f(),{refresh:n}=b(),{back:l}=i();return e(h,{w:{"@initial":"$full","@md":"$lg"},p:"$8",spacing:"$3",alignItems:"start",get children(){return[e(u,{get children(){return t("home.input_password")}}),e(c,{type:"password",get value(){return g()},get background(){return p("$neutral3","$neutral2")()},onKeyDown:r=>{r.key==="Enter"&&n(!0)},onInput:r=>m(r.currentTarget.value)}),e(o,{w:"$full",justifyContent:"space-between",get children(){return[e(d,{fontSize:"$sm",color:"$neutral10",direction:{"@initial":"column","@sm":"row"},columnGap:"$1",get children(){return[e(a,{get children(){return t("global.have_account")}}),e(a,{color:"$info9",as:$,get href(){return`/@login?redirect=${encodeURIComponent(location.pathname)}`},get children(){return t("global.go_login")}})]}}),e(o,{spacing:"$2",get children(){return[e(s,{colorScheme:"neutral",onClick:l,get children(){return t("global.back")}}),e(s,{onClick:()=>n(!0),get children(){return t("global.ok")}})]}})]}})]}})};export{P as default};
