(this.webpackJsonpsleepdemo3=this.webpackJsonpsleepdemo3||[]).push([[0],{59:function(t,e,n){},60:function(t,e,n){},86:function(t,e,n){},88:function(t,e,n){},90:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),a=n(27),r=n.n(a),s=(n(59),n(19)),o=n(4),j=(n(60),n(2)),d=function(t){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsx)("p",{style:{color:"white",padding:"300px"},children:"Select any options in three tabs"})})},l=n(7),b=n(53),h=n(23),u=n(6),O=n(109),x=n(111),p=n(115),f=n(112),g=n(113),v=210,w=Object(O.a)((function(t){var e;return{root:{display:"flex"},appBar:{zIndex:t.zIndex.drawer+1,transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),backgroundColor:"black"},appBarShift:{marginLeft:v,width:"calc(100% - ".concat(v,"px)"),transition:t.transitions.create(["width","margin"],{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},menuButton:{marginRight:36},hide:{display:"none"},drawer:{width:v,flexShrink:0,whiteSpace:"nowrap",backgroundColor:"black"},drawerOpen:{width:v,transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.enteringScreen})},drawerClose:(e={transition:t.transitions.create("width",{easing:t.transitions.easing.sharp,duration:t.transitions.duration.leavingScreen}),overflowX:"hidden",width:t.spacing(7)+1},Object(h.a)(e,t.breakpoints.up("sm"),{width:t.spacing(9)+1}),Object(h.a)(e,"backgroundColor","black"),e),toolbar:Object(b.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:t.spacing(0,1)},t.mixins.toolbar),content:{flexGrow:1,padding:t.spacing(3)}}}));function y(t){var e=w(),n=(Object(x.a)(),i.a.useState(!1)),c=Object(l.a)(n,2),a=c[0];c[1];return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(p.a,{position:"absolute",className:Object(u.a)(e.appBar,Object(h.a)({},e.appBarShift,a)),children:Object(j.jsx)(f.a,{children:Object(j.jsx)(g.a,{children:Object(j.jsxs)("div",{class:"tab",children:[Object(j.jsxs)(s.c,{to:"/third",children:[" ",Object(j.jsx)("button",{class:"tablinks",onClick:t.onClickthird,children:"thirds"})]}),Object(j.jsxs)(s.c,{to:"/fifth",children:[" ",Object(j.jsx)("button",{class:"tablinks",onClick:t.onClickthird,children:"fifths"})]}),Object(j.jsx)(s.c,{to:"/magic",children:Object(j.jsx)("button",{class:"tablinks",onClick:t.onClickthird,children:"magic"})})]})})})})})}var m=n(17),k=n.n(m),C=n(20),S=n(21),B=n.n(S),E=n(114),F=(n(86),n(32)),I=n(39),N=n.n(I),z=n(40),J=n.n(z),G=n(41),L=n.n(G);var R=function(t){var e=t.cat1,n=Object(c.useState)(""),a=Object(l.a)(n,2),r=a[0],s=a[1],o=Object(c.useState)({val:[],loader:!0}),d=Object(l.a)(o,2),b=d[0],h=d[1],u=Object(c.useState)([]),O=Object(l.a)(u,2),x=O[0],p=O[1];Object(c.useEffect)((function(){h({val:e})}),[e]);var f=function(t){console.log(t),x.splice(t,1),console.log(x),p(Object(F.a)(x))};return console.log(x),Object(j.jsxs)("div",{className:"cat1",children:[Object(j.jsx)("center",{children:Object(j.jsx)("input",{type:"text",onChange:function(t){s(t.target.value)}})}),Object(j.jsxs)("table",{children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"id"}),Object(j.jsx)("th",{children:"category"}),Object(j.jsx)("th",{children:Object(j.jsx)("button",{onClick:function(){p([]),h({val:e})},children:"reset"})})]}),b.val.map((function(t,e){return""===r?Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("tr",{children:[-1===x.indexOf(e)&&Object(j.jsx)("td",{children:Object(j.jsx)("p",{style:{color:"white"},children:t.id})}),-1===x.indexOf(e)&&Object(j.jsx)("td",{children:Object(j.jsx)("p",{style:{color:"white"},children:t.category})}),-1===x.indexOf(e)&&Object(j.jsx)("td",{children:Object(j.jsx)(N.a,{onClick:function(){var e=b.val.filter((function(e){return e.id!==t.id}));h({val:e})}})}),-1===x.indexOf(e)&&Object(j.jsx)("td",{children:Object(j.jsx)(J.a,{onClick:function(){console.log(e),console.log(x),-1===x.indexOf(e)&&p((function(t){return[].concat(Object(F.a)(x),[e])}))}})}),Object(j.jsx)("td",{children:Object(j.jsx)(L.a,{onClick:function(){var t=x.indexOf(e);t>-1&&f(t)}})})]},e)},e):r==t.id?(console.log(x),Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)("tr",{children:[-1===x.indexOf(e)&&Object(j.jsx)("td",{children:Object(j.jsx)("p",{style:{color:"white"},children:t.id})}),-1===x.indexOf(e)&&Object(j.jsx)("td",{children:Object(j.jsx)("p",{style:{color:"white"},children:t.category})}),-1===x.indexOf(e)&&Object(j.jsx)("td",{children:Object(j.jsx)(N.a,{onClick:function(){var e=b.val.filter((function(e){return e.id!==t.id}));h({val:e})}})}),-1===x.indexOf(e)&&Object(j.jsx)("td",{children:Object(j.jsx)(J.a,{onClick:function(){console.log(e),p((function(t){return[].concat(Object(F.a)(x),[e])}))}})}),Object(j.jsx)("td",{children:Object(j.jsx)(L.a,{onClick:function(){var t=x.indexOf(e);t>-1&&f(t)}})})]},e)},e)):void 0}))]})]})};var X=function(){var t=[],e=Object(c.useState)([]),n=Object(l.a)(e,2),i=n[0],a=n[1],r=Object(c.useState)(!1),s=Object(l.a)(r,2),o=s[0],d=s[1],b=function(){var t=Object(C.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){a(t.data)}));case 2:t.sent,d(!0);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),i.map((function(e){e.id%3===0&&(e.catergory="thirds",t.push({id:e.id,category:e.catergory}))})),Object(j.jsx)("div",{children:o?Object(j.jsx)(R,{cat1:t}):Object(j.jsx)(E.a,{style:{color:"white",padding:"300px"}})})};var q=function(){var t=[],e=Object(c.useState)(!1),n=Object(l.a)(e,2),i=n[0],a=n[1],r=Object(c.useState)([]),s=Object(l.a)(r,2),o=s[0],d=s[1],b=function(){var t=Object(C.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){d(t.data)}));case 2:t.sent,a(!0);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){b()}),[]),o.map((function(e){e.id%5===0&&(e.catergory="thirds",t.push({id:e.id,category:e.catergory}))})),Object(j.jsx)("div",{children:i?Object(j.jsx)(R,{cat1:t}):Object(j.jsx)(E.a,{style:{color:"white",padding:"300px"}})})};var A=function(t){var e=[],n=Object(c.useState)(!1),i=Object(l.a)(n,2),a=i[0],r=i[1],s=Object(c.useState)([]),o=Object(l.a)(s,2),d=o[0],b=o[1],h=function(){var t=Object(C.a)(k.a.mark((function t(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B.a.get("https://jsonplaceholder.typicode.com/posts").then((function(t){b(t.data)}));case 2:t.sent,r(!0);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){h()}),[]),d.map((function(t){t.id%3===0&&t.id%5===0&&(t.catergory="thirds",e.push({id:t.id,category:t.catergory}))})),Object(j.jsx)("div",{children:a?Object(j.jsx)(R,{cat1:e}):Object(j.jsx)(E.a,{style:{color:"white",padding:"300px"}})})},D=function(){return Object(j.jsx)(i.a.Fragment,{children:Object(j.jsxs)(s.a,{children:[Object(j.jsx)(y,{}),Object(j.jsxs)(s.b,{children:[Object(j.jsx)(o.a,{path:"/testproject",exact:!0,children:Object(j.jsx)(d,{})}),Object(j.jsx)(o.a,{path:"/third",exact:!0,children:Object(j.jsx)(X,{})}),Object(j.jsx)(o.a,{path:"/fifth",exact:!0,children:Object(j.jsx)(q,{})}),Object(j.jsx)(o.a,{path:"/magic",exact:!0,children:Object(j.jsx)(A,{})})]})]})})};n(88);r.a.render(Object(j.jsx)(D,{}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.17cd4591.chunk.js.map