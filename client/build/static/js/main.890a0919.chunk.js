(this.webpackJsonpchatapp=this.webpackJsonpchatapp||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),i=n(33),s=n.n(i),o=n(36),u=n(2),l=(n(63),n(17)),j=n(3),d=n(15),b=n.n(d),f=b()();function m(e){var t=Object(r.useState)(""),n=Object(u.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(""),o=Object(u.a)(s,2),l=o[0],d=o[1],b=Object(r.useState)(),m=Object(u.a)(b,2),O=(m[0],m[1],Object(r.useState)(!1)),h=Object(u.a)(O,2),g=h[0],p=h[1],v=Object(j.e)();Object(r.useEffect)((function(){f.on("join",(function(e){e.error&&p(e)}))}),[]);var x=function(e){"Enter"!==e.key&&"click"!==e.type||f.emit("join",a,l,f.id,(function(e){e.error||v.push("/chat?name=".concat(a,"&room=").concat(l))}))};return Object(c.jsx)("div",{className:"join-wrapper",children:Object(c.jsxs)("div",{onClick:function(){p(!1)},className:"join-container",children:[Object(c.jsx)("h1",{className:"join-header",children:"Join"}),Object(c.jsxs)("div",{className:"join-input-container",children:[Object(c.jsx)("div",{children:Object(c.jsx)("input",{className:"input-field",placeholder:"Name",type:"text",onChange:function(e){i(e.target.value)}})}),Object(c.jsxs)("div",{className:"input-field-room-container",children:[Object(c.jsx)("input",{className:"input-field-room",onKeyDown:function(e){return x(e)},placeholder:"Room",type:"text",onChange:function(e){return d(e.target.value)}}),Object(c.jsx)("div",{className:g?"error-container":"inactive",children:Object(c.jsx)("p",{className:"error-message",children:g.error})})]})]}),Object(c.jsx)("button",{className:"join-signin-but",onClick:function(e){return a&&l?x(e):e.preventDefault()},type:"submit",children:"Sign In"})]})})}var O=n(56),h=n(55),g=n.n(h),p=(n(99),a.a.createContext("test")),v=function(e){var t=e.msg,n=e.currentUser,a=(e.getRef,e.timeStampFunc,e.checkHoverState,e.getPosition),i=e.handleMouseOut,s=Object(r.useState)(!1),o=(Object(u.a)(s,2)[1],Object(r.useState)({})),l=Object(u.a)(o,2),j=(l[0],l[1],Object(r.useState)(!1)),d=Object(u.a)(j,2),b=(d[0],d[1],Object(r.useRef)()),f=(Object(r.useRef)(),Object(r.useContext)(p).filter((function(e){if(e.name===t.user)return e})),document.getElementById("bottom"));Object(r.useEffect)((function(){f.scrollIntoView({block:"end"})}),[]);var m;new Date(t.sentAt),Object(r.useRef)();return b.current&&b.current.getBoundingClientRect(),Object(c.jsxs)("div",{className:"messages",children:[Object(c.jsxs)("div",{id:t.sentAt,className:(m=t.user,m===n?"currentUser-text-container":"admin"===m?"admin-text-container":"incoming-text-container"),children:[Object(c.jsxs)("div",{ref:b,className:"message-profile-container",children:["admin"!==t.user&&t.user!==n?Object(c.jsx)("span",{onMouseEnter:function(e){a(e,t,t.user,n===t.user)},onMouseLeave:function(){i()},style:{backgroundImage:t.profile&&t.profile.grad},className:"profile-picture-container"}):null,Object(c.jsx)("p",{onMouseEnter:function(e){a(e,t,null,n===t.user)},onMouseLeave:function(){i()},className:function(e){return e===n?"currentUser-message":"admin"===e?"admin-message":"incoming-message"}(t.user),dangerouslySetInnerHTML:{__html:t.text}})]})," "]})," "]})};function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=r.createElement("path",{d:"M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z",fillRule:"evenodd",stroke:"none"});function N(e,t){var n=e.title,c=e.titleId,a=y(e,["title","titleId"]);return r.createElement("svg",x({className:"crt8y2ji",height:"20px",width:"20px",viewBox:"0 0 24 24",ref:t,"aria-labelledby":c},a),n?r.createElement("title",{id:c},n):null,S)}var C=r.forwardRef(N),E=(n.p,a.a.forwardRef((function(e,t){var n,a=e.handleSubmit,i=(e.handleChange,e.onChange,e.value),s=Object(r.useRef)();s.current&&(n=s.current.innerHTML),Object(r.useEffect)((function(){i!==s.current.innerHTML&&(s.current.innerHTML=i)}),[n]);return Object(c.jsxs)("div",{ref:t,className:"input-container",children:[Object(c.jsx)("div",{ref:s,contentEditable:!0,"data-contents":"true",role:"textbox","data-text":"true",name:"text",dangerouslySetInnerHTML:{__html:i},onKeyDown:function(e){return a(e,s)},className:"input-box",onInput:function(e){s.current.innerHTML},type:"text"}),Object(c.jsx)(C,{className:"submit-button",onClick:function(e){return a(e,s)}})]})})));function w(e,t){}var M=a.a.memo(E,w),k=function(e){var t=Object(r.useState)(!1),n=Object(u.a)(t,2),a=(n[0],n[1],Object(r.useState)(!1)),i=Object(u.a)(a,2),s=(i[0],i[1],Object(r.useState)("")),o=Object(u.a)(s,2),l=(o[0],o[1],Object(r.useState)()),j=Object(u.a)(l,2),d=(j[0],j[1],Object(r.useRef)());return Object(r.useEffect)((function(){}),[]),Object(r.useEffect)((function(){d.current})),Object(c.jsx)("div",{ref:d,children:Object(c.jsx)("div",{onMouseOver:function(t){e.getPosition(t,null,e.users.name)},onMouseOut:function(t){e.handleMouseOut()},className:"userbar-image-container",src:e.users.image,alt:"",style:{backgroundImage:e.users.grad}})})},R=function(e){var t=e.location,n=(e.socket,e.disconnect,Object(r.useState)("")),a=Object(u.a)(n,2),i=a[0],s=a[1],o=Object(r.useState)([]),l=(Object(u.a)(o,2)[1],Object(r.useState)([])),d=Object(u.a)(l,2),b=d[0],m=d[1],h=Object(r.useState)(""),x=Object(u.a)(h,2),y=x[0],S=x[1],N=Object(r.useState)([]),C=Object(u.a)(N,2),E=C[0],w=C[1],R=Object(r.useState)(""),I=Object(u.a)(R,2),B=(I[0],I[1],Object(r.useState)([])),L=Object(u.a)(B,2),P=L[0],A=L[1],H=g.a.parse(t.search),T=H.name,U=H.room,D=Object(r.useState)({}),J=Object(u.a)(D,2),_=(J[0],J[1]),F=Object(r.useState)(!1),z=Object(u.a)(F,2),K=(z[0],z[1]),V=Object(r.useState)({}),Z=Object(u.a)(V,2),q=(Z[0],Z[1]),G=Object(r.useRef)(null),Q=Object(j.e)(),W=Object(r.useRef)();Object(r.useEffect)((function(){return f.emit("connectCheck",U,(function(e){e||Q.push("/")})),window.addEventListener("beforeunload",(function(e){e.preventDefault(),f.emit("disconnectUser",T,U)})),function(){for(var e=document.getElementById("tooltip-container"),t=document.getElementById("root");e;)t.removeChild(e),e=document.getElementById("tooltip-container");f.emit("disconnectUser",T,U)}}),[]),Object(r.useEffect)((function(){f.on("getUsers",(function(e){A(e)})),f.emit("getUsers",U),f.on("getMessages",(function(e){w((function(t){var n=JSON.parse(JSON.stringify(t)),c={},r=(n.length,n.length-1),a=n[r]&&Object.getOwnPropertyNames(n[r])[0];if("admin"!==a&&t.length>1&&e.sentAt-n[r][a][n[r][a].length-1].sentAt>=3.6*Math.pow(10,6)){var i=new Date(e.sentAt).getHours(),s=new Date(e.sentAt).getMinutes(),o="".concat(0===i?12:i>12?i-12:i,":").concat(s<10?"0"+s:s," ").concat(i>12?"PM":"AM");n.push({admin:[{user:"admin",text:o}]}),a="admin"}r>=0&&a===e.user?n[r][e.user]=[].concat(Object(O.a)(n[r][e.user]),[e]):(c[e.user]=[e],n.push(c)),n.forEach((function(e){var t=Object.getOwnPropertyNames(e)[0];e[t].forEach((function(e){delete e.profile}));var n=e[t].length-1;e[t][n].profile=e[t][n].gradient}));var u=n.reduce((function(e,t){n.length;for(var c=Object.getOwnPropertyNames(t)[0],r=0;r<t[c].length;r++)e.push(t[c][r]);return e}),[]);return m((function(e){return u})),n}))})),f.emit("initial",U);var e=T.trim();s(e)}),[t.search]);var X=function(e){},Y=function(e){q((function(){return!1}));for(var t=document.getElementById("tooltip-container");t.firstChild;)t.removeChild(t.firstChild)},$=function(e,t,n,c){if(n||t&&"admin"!==t.user){q((function(){return{state:!0,message:e}}));var r=document.createElement("p"),a=document.getElementById("tooltip-container");if(t&&t.sentAt&&!n){r.className="timestamp-hover-currentUser";var i=new Date(t.sentAt).getHours(),s=new Date(t.sentAt).getMinutes();r.innerHTML="".concat(0===i?12:i>12?i-12:i,":").concat(s<10?"0"+s:s," ").concat(i>12?"PM":"AM")}else n&&(r.className="hover-user",r.innerHTML=n);a.style.position="absolute",a.style.inset="0px auto auto 0px",a.appendChild(r),a.style.display="block";var o,u=a.getBoundingClientRect(),l=(o=e.target.getBoundingClientRect()).y+o.height/2-u.height/2;a.style.transform="translate(".concat("".concat(c?o.right:o.left-a.getBoundingClientRect().width,"px"),",","".concat(l,"px"),")")}},ee=function(e){var t=document.getElementById("tooltip-container");q((function(e){if(e.state){var n=e.message.target.getBoundingClientRect(),c=t.getBoundingClientRect(),r=n.y+n.height/2-c.height/2;t.style.transform="translate(".concat("".concat(n.right,"px"),",","".concat(r,"px"),")"),t.style.display="block"}return e}))};Object(r.useEffect)((function(){window.addEventListener("resize",ee);var e=document.createElement("div");return e.setAttribute("id","tooltip-container"),document.getElementById("root").appendChild(e),function(){window.removeEventListener("resize",ee)}}),[]);var te=function(e,t){K(!0),_(e),q(t)},ne=function(e){K(e)},ce=Object(r.useRef)(null);E[E.length-1];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"chat-wrapper",children:Object(c.jsx)("div",{className:"scrollRef-wrapper",children:Object(c.jsxs)("div",{className:"chat-message-container",children:[Object(c.jsx)("div",{className:"userbar-container",children:P.map((function(e){return Object(c.jsx)(k,{handleMouseOut:Y,getPosition:$,currentUser:i,users:e})}))}),Object(c.jsxs)("div",{className:"container-2",children:[Object(c.jsx)("p",{className:"chat-header",children:U}),Object(c.jsx)("div",{onScroll:function(){var e=document.getElementById("tooltip-container");q((function(t){if(t.state){var n=t.message.target.getBoundingClientRect(),c=e.getBoundingClientRect(),r=n.y+n.height/2-c.height/2;e.style.transform="translate(".concat("".concat(n.right,"px"),",","".concat(r,"px"),")"),e.style.display="block"}return t}))},ref:W,id:"msg-box",className:"chat-message-box",children:Object(c.jsx)(p.Provider,{value:P,children:Object(c.jsxs)("div",{ref:ce,className:"chat-box-container",children:[b.map((function(e,n){return Object(c.jsx)(v,{getRef:X,getPosition:$,handleMouseOut:Y,checkHoverState:ne,timeStampFunc:te,displayTime:undefined,currentUser:i,location:t,msg:e},n)})),Object(c.jsx)("div",{id:"bottom",className:"bottom-of-div",ref:G})]})})}),Object(c.jsx)("div",{}),Object(c.jsx)(M,{value:y,handleSubmit:function(e,t){if("Enter"===e.key||"click"===e.type){var n=t.current.innerText.trim();f.emit("getMessages",T,U,n)}},handleChange:function(e){S(e.target.innerText)}})]})]})})})})},I=function(){var e=Object(r.useState)("online"),t=Object(u.a)(e,2),n=(t[0],t[1],Object(r.useState)([])),a=Object(u.a)(n,2),i=a[0],s=a[1],d=Object(r.useState)(!1),b=Object(u.a)(d,2),f=b[0];b[1];Object(r.useEffect)((function(){}),[f]);var O=function(e){s(e)};return Object(c.jsxs)(l.a,{children:[" ",Object(c.jsx)(j.a,{path:"/",exact:!0,render:function(e){return Object(c.jsx)(m,Object(o.a)({getSocket:O,socket:i},e))}}),Object(c.jsx)(j.a,{path:"/chat",exact:!0,render:function(e){return Object(c.jsx)(R,Object(o.a)({socket:i},e))}})]})};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(l.a,{children:Object(c.jsx)(I,{})})}),document.getElementById("root"))},63:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.890a0919.chunk.js.map