"use strict";(self.webpackChunkshop=self.webpackChunkshop||[]).push([[935],{9935:function(e,t,s){s.r(t),s.d(t,{default:function(){return k}});var n=s(168),r=s(2982),i=s(885),c=s(9271),l=s(2791),a=s(364),d=s(6928),o=s(2156),h=s(8349),u=s(2591),j=(s(3260),s(1523)),x=s(184);var m=function(e){var t=e.item,s=JSON.parse(localStorage.getItem("sawItems"));return(0,x.jsx)(x.Fragment,{children:(0,x.jsxs)(u.Z,{striped:!0,bordered:!0,hover:!0,children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[(0,x.jsx)("th",{children:"#"}),(0,x.jsx)("th",{children:"\uc0c1\ud488\uba85"}),(0,x.jsx)("th",{children:"\ub0a8\uc740\uc7ac\uace0"})]})}),(0,x.jsx)("tbody",{children:null!==s?s.map((function(e,s){return(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{children:(0,x.jsx)(j.rU,{to:"/detail/"+e,children:(0,x.jsx)("img",{src:t[e].src,width:"100",height:"120"})})}),(0,x.jsx)("td",{style:{verticalAlign:"middle"},children:t[e].title}),(0,x.jsx)("td",{style:{verticalAlign:"middle"},children:t[e].stock})]},e)})):null})]})})};function f(e){var t=e.item;switch((0,l.useEffect)((function(){e.setTabSwitch(!0)})),e.tab){case 0:return(0,x.jsx)(h.Z,{});case 1:return(0,x.jsx)(m,{item:t});default:return(0,x.jsx)("div",{children:"\uc7a5\ubc14\uad6c\ub2c8\uc5d0 \uc544\ubb34\uac83\ub3c4 \uc5c6\uc2b5\ub2c8\ub2e4."})}}var p,g=function(e){var t=(0,l.useState)(0),s=(0,i.Z)(t,2),n=s[0],r=s[1],c=(0,l.useState)(!0),a=(0,i.Z)(c,2),h=a[0],u=a[1],j=e.item;return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(o.Z,{variant:"tabs",defaultActiveKey:"link-0",children:[(0,x.jsx)(o.Z.Item,{children:(0,x.jsx)(o.Z.Link,{eventKey:"link-0",onClick:function(){r(0),u(!1)},children:"\uc7a5\ubc14\uad6c\ub2c8"})}),(0,x.jsx)(o.Z.Item,{children:(0,x.jsx)(o.Z.Link,{eventKey:"link-1",onClick:function(){r(1),u(!1)},children:"\ubd24\ub358 \uc0c1\ud488 (\ucd5c\uc2e03\uac1c)"})}),(0,x.jsx)(o.Z.Item,{})]}),(0,x.jsx)(d.Z,{in:h,classNames:"itemDetailTab",timeout:500,children:(0,x.jsx)(f,{tab:n,setTabSwitch:u,item:j})})]})},v=s(5751),b=s(648);var k=(0,a.$j)((function(e){return{cart:e.reducer}}))((function(e){var t=(0,c.k6)(),s=(0,c.UO)().id,a=e.itemList,d=(0,l.useState)(!0),o=(0,i.Z)(d,2),h=o[0],u=o[1];(0,l.useEffect)((function(){var e=localStorage.getItem("sawItems");e=null==e?[]:JSON.parse(e),console.log(e.length),e.length<3?(e.push(s),e=new Set(e),e=(0,r.Z)(e),console.log(e),localStorage.setItem("sawItems",JSON.stringify(e))):((e=JSON.parse(localStorage.getItem("sawItems"))).shift(),e.push(s),e=new Set(e),e=(0,r.Z)(e),localStorage.setItem("sawItems",JSON.stringify(e)));var t=setTimeout((function(){u(!1)}),3e3);return function(){clearTimeout(t),console.log("Component\uc758 Lifecycle\uc774 \ub05d\ub098\uace0\ub098\uc11c \uc2e4\ud589\ub41c\ub2e4.")}}),[]),(0,l.useContext)(b.d);var j=v.ZP.h1(p||(p=(0,n.Z)(["\n      color: ",";\n    "])),(function(e){return e.fontColor}));return(0,x.jsxs)("div",{className:"container",children:[(0,x.jsx)("br",{}),(0,x.jsx)(j,{fontColor:"black",children:"DETAIL"}),(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("div",{className:"col-md-6 mt-5",children:(0,x.jsx)("img",{src:a[s].src,width:"100%"})}),(0,x.jsxs)("div",{className:"col-md-6 mt-0",children:[(0,x.jsx)("h4",{className:"pt-5",children:a[s].title}),(0,x.jsxs)("p",{children:["\uc0c1\ud488\uc124\uba85 : ",a[s].content]}),(0,x.jsxs)("p",{children:["\uac00\uaca9 : ",a[s].price]}),(0,x.jsx)("button",{className:"btn btn-danger",onClick:function(){e.dispatch({type:"\uc7a5\ubc14\uad6c\ub2c8\ucd94\uac00",payload:{id:a[s].id,src:a[s].src,title:a[s].title,price:a[s].price,content:a[s].content,quan:1}})},children:"\uc7a5\ubc14\uad6c\ub2c8 \ucd94\uac00"}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("button",{className:"btn btn-danger",onClick:function(){t.goBack()},children:"\ub4a4\ub85c\uac00\uae30"}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsxs)("p",{children:["\ub0a8\uc740\uc7ac\uace0 : ",a[s].stock]}),!!h&&(0,x.jsx)("div",{className:"my-alert2",children:(0,x.jsx)("p",{children:"\ud488\uc808 \uc784\ubc15\uc0c1\ud488"})}),(0,x.jsx)(g,{item:a})]})]}),(0,x.jsxs)("p",{children:[" dev; 'match' parameter : ",s,"\ubc88\uc9f8 \uac1d\uccb4 id\uc758 \uc0c1\ud488 "]}),(0,x.jsx)("br",{})]})}))}}]);
//# sourceMappingURL=935.ea350d4e.chunk.js.map