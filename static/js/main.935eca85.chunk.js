(this.webpackJsonptodo_list=this.webpackJsonptodo_list||[]).push([[0],{63:function(e,t,i){},64:function(e,t,i){},71:function(e,t,i){"use strict";i.r(t);var n=i(0),c=i.n(n),a=i(9),r=i.n(a),l=(i(63),i(28)),o=i(20),s=i(23),d=i(16),j=(i(64),i(112)),u=i(103),b=i(5);function O(e){var t=Object(n.useState)(""),i=Object(d.a)(t,2),c=i[0],a=i[1],r=Object(n.useState)(null),l=Object(d.a)(r,2),o=l[0],s=l[1],O=function(){""!==c.trim()?(e.addItem(c.trim()),a("")):s("Title is required")};return Object(b.jsxs)("div",{children:[Object(b.jsx)(j.a,{variant:"outlined",size:"small",label:"Add a new item...",value:c,onChange:function(e){a(e.currentTarget.value)},onKeyPress:function(e){s(null),"Enter"===e.key&&O()},error:!!o,helperText:o}),Object(b.jsx)(u.a,{variant:"contained",size:"small",color:"primary",style:{marginLeft:"5px"},onClick:O,children:"+"})]})}function f(e){var t=Object(n.useState)(""),i=Object(d.a)(t,2),c=i[0],a=i[1],r=Object(n.useState)(!1),l=Object(d.a)(r,2),o=l[0],s=l[1];return o?Object(b.jsx)(j.a,{color:"primary",variant:"standard",value:c,onBlur:function(){s(!1),e.onChange(c)},autoFocus:!0,onChange:function(e){a(e.currentTarget.value)}}):Object(b.jsx)("span",{onDoubleClick:function(){s(!0),a(e.title)},children:e.title})}var h=i(104),x=i(114),v=i(105);function g(e){return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:[Object(b.jsx)(f,{title:e.title,onChange:function(t){e.changeTodoListTitle(e.id,t)}}),Object(b.jsx)(h.a,{onClick:function(){return e.removeTodoList(e.id)},children:Object(b.jsx)(v.a,{})})]}),Object(b.jsx)(O,{addItem:function(t){return e.addTask(t,e.id)}}),Object(b.jsx)("ul",{children:e.tasks.map((function(t){return Object(b.jsxs)("li",{className:t.isDone?"is-done":"",children:[Object(b.jsx)(x.a,{color:"primary",onChange:function(i){e.changeTaskStatus(t.id,i.currentTarget.checked,e.id)},checked:t.isDone}),Object(b.jsx)(f,{title:t.title,onChange:function(i){e.changeTaskTitle(t.id,i,e.id)}}),Object(b.jsx)(h.a,{onClick:function(){return e.removeTask(t.id,e.id)},children:Object(b.jsx)(v.a,{})})]},t.id)}))}),Object(b.jsxs)("div",{children:[Object(b.jsx)(u.a,{style:{marginRight:"5px"},size:"small",color:"primary",variant:"all"===e.filter?"outlined":"contained",onClick:function(){return e.changeFilter("all",e.id)},children:"All"}),Object(b.jsx)(u.a,{style:{marginRight:"5px"},size:"small",color:"primary",variant:"active"===e.filter?"outlined":"contained",onClick:function(){return e.changeFilter("active",e.id)},children:"Active"}),Object(b.jsx)(u.a,{style:{marginRight:"5px"},size:"small",color:"primary",variant:"completed"===e.filter?"outlined":"contained",onClick:function(){return e.changeFilter("completed",e.id)},children:"Completed"})]})]})}var m=i(113),p=i(106),T=i(72),k=i(107),C=i(108),y=i(110),S=i(111),D=i(109);var L=function(){var e,t=Object(m.a)(),i=Object(m.a)(),c=Object(n.useState)([{id:t,title:"What to learn",filter:"all"},{id:i,title:"What to buy",filter:"all"}]),a=Object(d.a)(c,2),r=a[0],j=a[1],f=Object(n.useState)((e={},Object(s.a)(e,t,[{id:Object(m.a)(),title:"HTML/CSS",isDone:!0},{id:Object(m.a)(),title:"JS",isDone:!1}]),Object(s.a)(e,i,[{id:Object(m.a)(),title:"Milk",isDone:!1},{id:Object(m.a)(),title:"Beer",isDone:!0}]),e)),x=Object(d.a)(f,2),v=x[0],L=x[1];function F(e,t){var i=v[t];v[t]=i.filter((function(t){return t.id!==e})),L(Object(o.a)({},v))}function z(e,t){var i={id:Object(m.a)(),title:e,isDone:!1},n=v[t];v[t]=[i].concat(Object(l.a)(n)),L(Object(o.a)({},v))}function I(e,t){var i=r.find((function(e){return e.id===t}));i&&(i.filter=e,j(Object(l.a)(r)))}function w(e,t,i){var n=v[i].find((function(t){return t.id===e}));n&&(n.isDone=t,L(Object(o.a)({},v)))}function A(e,t,i){var n=v[i].find((function(t){return t.id===e}));n&&(n.title=t,L(Object(o.a)({},v)))}function B(e){j(r.filter((function(t){return t.id!==e}))),delete v[e],L(Object(o.a)({},v))}function J(e,t){var i=r.find((function(t){return t.id===e}));i&&(i.title=t,j(Object(l.a)(r)))}var M=r.map((function(e){var t=v[e.id];return"active"===e.filter&&(t=t.filter((function(e){return!e.isDone}))),"completed"===e.filter&&(t=t.filter((function(e){return e.isDone}))),Object(b.jsx)(p.a,{item:!0,children:Object(b.jsx)(T.a,{elevation:6,style:{padding:"15px"},children:Object(b.jsx)(g,{id:e.id,title:e.title,tasks:t,removeTask:F,changeFilter:I,addTask:z,changeTaskStatus:w,changeTaskTitle:A,filter:e.filter,removeTodoList:B,changeTodoListTitle:J})})},e.id)}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(k.a,{position:"static",children:Object(b.jsxs)(C.a,{style:{justifyContent:"space-between"},children:[Object(b.jsx)(h.a,{edge:"start",color:"inherit","aria-label":"menu",children:Object(b.jsx)(D.a,{})}),Object(b.jsx)(y.a,{variant:"h6",children:"TodoList"}),Object(b.jsx)(u.a,{variant:"outlined",color:"inherit",children:"Login"})]})}),Object(b.jsxs)(S.a,{fixed:!0,children:[Object(b.jsx)(p.a,{container:!0,style:{padding:"20px 0px"},children:Object(b.jsx)(O,{addItem:function(e){var t=Object(m.a)(),i={id:t,title:e,filter:"all"};j([].concat(Object(l.a)(r),[i])),L(Object(o.a)(Object(o.a)({},v),{},Object(s.a)({},t,[])))}})}),Object(b.jsx)(p.a,{container:!0,spacing:2,children:M})]})]})},F=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,116)).then((function(t){var i=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;i(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),F()}},[[71,1,2]]]);
//# sourceMappingURL=main.935eca85.chunk.js.map