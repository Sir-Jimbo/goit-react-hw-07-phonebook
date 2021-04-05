(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={container:"Filter_container__Vdw_t",title:"Filter_title__3vBAf",label:"Filter_label__1vCGm",input:"Filter_input__2LB2e",appear:"Filter_appear__3hRqd",appearActive:"Filter_appearActive__298BS",exit:"Filter_exit__2MBV0",exitActive:"Filter_exitActive__1kSJw"}},14:function(e,t,n){e.exports={item:"Contact_item__1tOfY",button:"Contact_button__2qs01"}},22:function(e,t,n){e.exports={container:"Header_container__1HnhE",appear:"Header_appear__Bdc3R",appearActive:"Header_appearActive__2Znic"}},23:function(e,t,n){e.exports={overlay:"Notification_overlay__36vmU",message:"Notification_message__1Ar_E",enter:"Notification_enter__3JFNR",enterActive:"Notification_enterActive__v9dpm",exit:"Notification_exit__sNiA6",exitActive:"Notification_exitActive__yN64x"}},24:function(e,t,n){e.exports={enter:"ContactList_enter__1xN8a",enterActive:"ContactList_enterActive__3iGN2",exit:"ContactList_exit__3zMIZ",exitActive:"ContactList_exitActive__42x-6"}},27:function(e,t,n){e.exports={logo:"Logo_logo__17WNY"}},28:function(e,t,n){e.exports={container:"Section_container__3lzXt"}},31:function(e,t,n){e.exports={enter:"PhoneBook_enter__36EFg",enterActive:"PhoneBook_enterActive__16VSZ",exit:"PhoneBook_exit__12H_9",exitActive:"PhoneBook_exitActive__3qsZN"}},47:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),o=n.n(c),r=n(8),i=n.n(r),s=n(5),l=(n(47),n(52)),u=n(27),b=n.n(u),j=function(){return Object(a.jsx)("h1",{className:b.a.logo,children:"Phonebook"})},m=n(22),_=n.n(m),h=function(){return Object(a.jsx)("header",{className:_.a.container,children:Object(a.jsx)(l.a,{in:!0,appear:!0,classNames:_.a,timeout:500,unmountOnExit:!0,children:Object(a.jsx)(j,{})})})},p=function(e){var t=e.children;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(h,{}),Object(a.jsx)("main",{children:t})]})},d=n(28),x=n.n(d),O=function(e){var t=e.children;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:x.a.container,children:t})})},f=n(12),v=n(29),g=n(30),N=n(36),C=n(35),k=n(53),y=n(6),A=Object(y.b)("phonebook/addContact",(function(e,t){return{payload:{id:Object(k.a)(),name:e,number:t}}})),F=Object(y.b)("phonebook/deleteContact"),S=Object(y.b)("phonebook/changeFilter"),w=n(23),B=n.n(w),E=function(e){var t=e.message;return Object(a.jsx)("div",{className:B.a.overlay,children:Object(a.jsx)("p",{className:B.a.message,children:t})})},L=n(9),M=n.n(L),H=function(e){Object(N.a)(n,e);var t=Object(C.a)(n);function n(){var e;Object(v.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={name:"",number:"",message:null,error:!1},e.isShowMessage=function(t){e.setState({message:t}),setTimeout((function(){e.setState({message:null})}),2500)},e.handleChange=function(t){var n=t.currentTarget,a=n.name,c=n.value;e.setState(Object(f.a)({},a,c))},e.handleSubmit=function(t){var n=e.state,a=n.name,c=n.number;t.preventDefault(),""!==a?""!==c?e.props.contacts.find((function(e){return e.name.toLowerCase()===a.toLowerCase()}))?e.isShowMessage("".concat(a," is already in contacts.")):(e.props.onSubmit(a,c),e.reset()):e.isShowMessage("Enter phone, please!"):e.isShowMessage("Enter name, please!")},e.reset=function(){return e.setState({name:"",number:""})},e}return Object(g.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,c=e.message;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(l.a,{in:c,timeout:250,classNames:M.a,unmountOnExit:!0,children:Object(a.jsx)(E,{message:c})}),Object(a.jsxs)("form",{className:M.a.container,onSubmit:this.handleSubmit,children:[Object(a.jsx)("label",{className:M.a.label,children:"Name"}),Object(a.jsx)("input",{className:M.a.input,type:"text",name:"name",placeholder:"enter your name",value:t,onChange:this.handleChange}),Object(a.jsx)("label",{className:M.a.label,children:"Phone number"}),Object(a.jsx)("input",{className:M.a.input,type:"tel",name:"number",placeholder:"enter your number",value:n,onChange:this.handleChange}),Object(a.jsx)("button",{className:M.a.button,type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component),P=Object(s.b)((function(e){return{contacts:e.phonebook.contacts}}),(function(e){return{onSubmit:function(t,n){return e(A(t,n))}}}))(H),T=n(13),J=n.n(T),Z=Object(s.b)((function(e){return{contacts:e.phonebook.contacts,value:e.phonebook.filter}}),(function(e){return{onChange:function(t){return e(S(t.currentTarget.value))}}}))((function(e){var t=e.value,n=e.onChange,c=e.contacts;return Object(a.jsx)(l.a,{in:c.length>1,appear:!0,timeout:250,classNames:J.a,unmountOnExit:!0,children:Object(a.jsxs)("div",{className:J.a.container,children:[Object(a.jsx)("h2",{className:J.a.title,children:" Contacts "}),Object(a.jsx)("label",{className:J.a.label,children:"Find contacts by name:"}),Object(a.jsx)("input",{className:J.a.input,placeholder:"search by name",type:"text",value:t,onChange:n})]})})})),q=n(54),z=n(14),D=n.n(z),R=function(e){var t=e.id,n=e.name,c=e.number,o=e.onClick;return Object(a.jsxs)("li",{className:D.a.item,children:[Object(a.jsx)("p",{className:D.a.contact,children:n}),Object(a.jsx)("p",{className:D.a.contact,children:c}),Object(a.jsx)("button",{className:D.a.button,type:"button",onClick:o,children:"x"})]},t)},U=n(24),V=n.n(U),G=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},I=Object(s.b)((function(e){var t=e.phonebook,n=t.contacts,a=t.filter;return{contacts:G(n,a)}}),(function(e){return{onDeleteContact:function(t){return e(F(t))}}}))((function(e){var t=e.contacts,n=e.onDeleteContact;return Object(a.jsx)(q.a,{component:"ul",className:V.a.list,children:t.map((function(e){var t=e.id,c=e.name,o=e.number;return Object(a.jsx)(l.a,{timeout:250,classNames:V.a,children:Object(a.jsx)(R,{id:t,name:c,number:o,onClick:function(){return n(t)}})},t)}))})})),W=n(31),Y=n.n(W);var K,X=Object(s.b)((function(e){return{contacts:e.phonebook.contacts,value:e.phonebook.filter}}))((function(e){var t=e.contacts;return Object(a.jsx)(p,{children:Object(a.jsxs)(O,{children:[Object(a.jsx)(P,{}),Object(a.jsx)(Z,{}),Object(a.jsx)(l.a,{in:t.length>0,timeout:250,classNames:Y.a,unmountOnExit:!0,children:Object(a.jsx)(I,{})})]})})})),Q=n(17),$=n(32),ee=n.n($),te=n(7),ne=n(33),ae=n.n(ne),ce=n(2),oe=Object(y.c)([],(K={},Object(f.a)(K,A,(function(e,t){var n=t.payload;return[].concat(Object(Q.a)(e),[n])})),Object(f.a)(K,F,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),K)),re=Object(y.c)("",Object(f.a)({},S,(function(e,t){return t.payload}))),ie=Object(ce.c)({contacts:oe,filter:re}),se=[].concat(Object(Q.a)(Object(y.d)({serializableCheck:{ignoredActions:[te.a,te.f,te.b,te.c,te.d,te.e]}})),[ee.a]),le={key:"phonebook",storage:ae.a,blacklist:["filter"]},ue=Object(y.a)({reducer:{phonebook:Object(te.g)(le,ie)},middleware:se,devTools:!1}),be={store:ue,persistor:Object(te.h)(ue)},je=n(34);i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(s.a,{store:be.store,children:Object(a.jsx)(je.a,{loading:null,persistor:be.persistor,children:Object(a.jsx)(X,{})})})}),document.getElementById("root"))},9:function(e,t,n){e.exports={container:"ContactForm_container__3UNdU",label:"ContactForm_label__1Kbd6",input:"ContactForm_input__3FToW",button:"ContactForm_button__HOwas"}}},[[50,1,2]]]);
//# sourceMappingURL=main.e19153c3.chunk.js.map