(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[11],{143:function(t,e,r){t.exports=r.p+"static/media/logo.3e4e520c.svg"},245:function(t,e,r){"use strict";r.r(e);var n=r(121),a=r(33),o=r(0),i=r.n(o),c=r(9),l=r(6),s=r(144),u=r(127),f=r.n(u);function h(){h=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var u={};function f(){}function m(){}function p(){}var d={};c(d,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(N([])));g&&g!==e&&r.call(g,a)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=p,c(y,"constructor",p),c(p,"constructor",m),m.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}e.default=function(){Object(o.useEffect)((function(){localStorage.clear()}),[]);var t=Object(o.useState)(""),e=Object(a.a)(t,2),r=e[0],u=e[1],m=Object(o.useState)(""),p=Object(a.a)(m,2),d=p[0],v=p[1],g=Object(o.useState)(!1),y=Object(a.a)(g,2),b=y[0],E=y[1],w=Object(o.useState)(""),x=Object(a.a)(w,2),O=x[0],j=x[1];function N(){return(N=Object(n.a)(h().mark((function t(e){var n,a,o,i;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),console.log(r,d),t.prev=2,t.next=5,f.a.post("https://backend.klivepay.com/api/user/login",JSON.stringify({email:r,password:d}),{headers:{"Content-Type":"application/json"}});case 5:a=t.sent,console.log(JSON.stringify(null===a||void 0===a?void 0:a.data)),o=null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.accessToken,localStorage.setItem("token",o),localStorage.setItem("email",r),u(""),v(""),E(!0),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(2),(null===t.t0||void 0===t.t0?void 0:t.t0.response)?400===(null===(i=t.t0.response)||void 0===i?void 0:i.status)?(j("Invalid Credentialials"),E(!1)):j("Login failed"):j("No Server Response"),console.log(t.t0);case 19:console.log(b);case 20:case"end":return t.stop()}}),t,null,[[2,15]])})))).apply(this,arguments)}return i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex align-items-center auth px-0"},i.a.createElement("div",{className:"row w-100 mx-0"},i.a.createElement("div",{className:"col-lg-6 mx-auto"},i.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},i.a.createElement("div",{className:"brand-logo"},i.a.createElement("h3",{className:O?"text-danger":"errMsg"},O)),i.a.createElement("h4",{className:"text-primary"},"Login"),i.a.createElement(s.a,{className:"pt-3"},i.a.createElement(s.a.Group,{className:"d-flex search-field"},i.a.createElement(s.a.Control,{type:"email",placeholder:"Email",onChange:function(t){return function(t){u(t.target.value)}(t)},value:r,size:"lg",className:"h-auto"})),i.a.createElement(s.a.Group,{className:"d-flex search-field"},i.a.createElement(s.a.Control,{type:"password",placeholder:"Password",onChange:function(t){return function(t){v(t.target.value)}(t)},value:d,size:"lg",className:"h-auto"})),i.a.createElement(c.b,{to:"/user/registration/forgotPassword",className:"auth-link text-black"},"Forgot password?"),i.a.createElement("div",{className:"mt-3"},b?i.a.createElement(l.a,{to:"/user/UserDashboard"}):i.a.createElement("button",{onClick:function(t){return function(t){return N.apply(this,arguments)}(t)},className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"},"SIGN IN")),i.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account?"," ",i.a.createElement(c.b,{to:"/user/registration",className:"text-primary"},"SignUp"))))))))}},527:function(t,e,r){"use strict";r.r(e);var n=r(121),a=r(33),o=r(0),i=r.n(o),c=r(9),l=r(127),s=r.n(l),u=(Object({NODE_ENV:"production",PUBLIC_URL:"/user"}).PAYMENT_GATEWAY_BACKEND,r(245)),f=r(495),h=r(508);function m(){m=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(S){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var a=e&&e.prototype instanceof f?e:f,o=Object.create(a.prototype),i=new j(n||[]);return o._invoke=function(t,e,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var c=w(i,r);if(c){if(c===u)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=s(t,e,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(t,r,i),o}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=l;var u={};function f(){}function h(){}function p(){}var d={};c(d,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(N([])));g&&g!==e&&r.call(g,a)&&(d=g);var y=p.prototype=f.prototype=Object.create(d);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var n;this._invoke=function(a,o){function i(){return new e((function(n,i){!function n(a,o,i,c){var l=s(t[a],t,o);if("throw"!==l.type){var u=l.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return n("throw",t,i,c)}))}c(l.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function w(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,w(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,u;var a=n.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},b(E.prototype),c(E.prototype,o,(function(){return this})),t.AsyncIterator=E,t.async=function(e,r,n,a,o){void 0===o&&(o=Promise);var i=new E(l(e,r,n,a),o);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(y),c(y,i,"Generator"),c(y,a,(function(){return this})),c(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),l=r.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),O(r),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},t}var p=/^[A-z][A-z0-9-_]{3,23}$/,d=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,v=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,g=/^[0-9]{10}$/;e.default=function(){var t=Object(o.useRef)(),e=Object(o.useRef)(),l=Object(o.useState)(""),y=Object(a.a)(l,2),b=y[0],E=y[1],w=Object(o.useState)(!1),x=Object(a.a)(w,2),O=x[0],j=x[1],N=Object(o.useState)(!1),L=Object(a.a)(N,2),S=L[0],k=L[1],_=Object(o.useState)(0),G=Object(a.a)(_,2),C=G[0],P=G[1],F=Object(o.useState)(!1),T=Object(a.a)(F,2),I=T[0],A=T[1],U=Object(o.useState)(!1),z=Object(a.a)(U,2),B=z[0],M=z[1],R=Object(o.useState)(""),D=Object(a.a)(R,2),J=D[0],Y=D[1],$=Object(o.useState)(!1),q=Object(a.a)($,2),Z=q[0],K=q[1],V=Object(o.useState)(!1),W=Object(a.a)(V,2),H=W[0],Q=W[1],X=Object(o.useState)(""),tt=Object(a.a)(X,2),et=tt[0],rt=tt[1],nt=Object(o.useState)(!1),at=Object(a.a)(nt,2),ot=at[0],it=at[1],ct=Object(o.useState)(!1),lt=Object(a.a)(ct,2),st=(lt[0],lt[1]),ut=Object(o.useState)(""),ft=Object(a.a)(ut,2),ht=ft[0],mt=ft[1],pt=Object(o.useState)(!1),dt=Object(a.a)(pt,2),vt=dt[0],gt=dt[1],yt=Object(o.useState)(!1),bt=Object(a.a)(yt,2),Et=(bt[0],bt[1]),wt=Object(o.useState)(""),xt=Object(a.a)(wt,2),Ot=xt[0],jt=xt[1],Nt=Object(o.useState)(!1),Lt=Object(a.a)(Nt,2),St=Lt[0],kt=Lt[1];Object(o.useEffect)((function(){t.current.focus()}),[]),Object(o.useEffect)((function(){var t=p.test(b);console.log(t),console.log(b),j(t)}),[b]),Object(o.useEffect)((function(){var t=v.test(J);console.log(t),console.log(J),K(t)}),[J]),Object(o.useEffect)((function(){var t=g.test(C);console.log(t),console.log(C),A(t)}),[C]),Object(o.useEffect)((function(){var t=d.test(et);console.log(t),console.log(et),it(t),gt(et===ht)}),[et,ht]),Object(o.useEffect)((function(){jt("")}),[et,b,ht]);var _t=function(){var t=Object(n.a)(m().mark((function t(r){var n,a,o,i;return m().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.preventDefault(),n=p.test(b),a=d.test(et),n&&a){t.next=6;break}return jt("Invalid Entry"),t.abrupt("return");case 6:return t.prev=6,t.next=9,s.a.post("https://backend.klivepay.com/api/user/register",JSON.stringify({name:b,mobile:C,email:J,password:et}),{headers:{"Content-Type":"application/json"}});case 9:o=t.sent,console.log(null===o||void 0===o?void 0:o.data),console.log(JSON.stringify(o)),kt(!0),E(""),Y(""),rt(""),mt(""),t.next=23;break;case 19:t.prev=19,t.t0=t.catch(6),(null===t.t0||void 0===t.t0?void 0:t.t0.response)?409===(null===(i=t.t0.response)||void 0===i?void 0:i.status)?jt("Username Taken"):jt("Registration Failed"):jt("No Server Response"),e.current.focus();case 23:case"end":return t.stop()}}),t,null,[[6,19]])})));return function(e){return t.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,St?i.a.createElement(u.default,null):i.a.createElement("div",null,i.a.createElement("div",{className:"d-flex align-items-center auth px-0"},i.a.createElement("div",{className:"row w-100 mx-0"},i.a.createElement("div",{className:"col-lg-6 mx-auto"},i.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},i.a.createElement("div",{className:"brand-logo"},i.a.createElement("img",{src:r(143),alt:"logo"})),i.a.createElement("p",{ref:e,className:Ot?"errmsg":"offscreen","aria-live":"assertive"},Ot),i.a.createElement("h4",{className:"text-primary"},"User Register"),i.a.createElement("form",{className:"pt-3"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"text",id:"username",ref:t,autoComplete:"off",onChange:function(t){return E(t.target.value)},value:b,required:!0,"aria-invalid":O?"false":"true","aria-describedby":"uidnote",onFocus:function(){return k(!0)},onBlur:function(){return k(!1)},placeholder:"Username",className:"form-control form-control-lg"}),i.a.createElement("p",{id:"uidnote",className:S&&b&&!O?"instructions":"offscreen"},i.a.createElement(h.a,{icon:f.a}),"4 to 24 characters.",i.a.createElement("br",null),"Must begin with a letter.",i.a.createElement("br",null),"Letters, numbers, underscores, hyphens allowed.")),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"number",id:"mobileNumber",onChange:function(t){return P(parseInt(t.target.value))},value:C,"aria-invalid":I?"false":"true",required:!0,onFocus:function(){return M(!0)},onBlur:function(){return M(!1)},className:"form-control form-control-lg",placeholder:"mobile"}),i.a.createElement("p",{id:"uidnote",className:B&&C&&!I?"instructions":"offscreen"},i.a.createElement(h.a,{icon:f.a}),"must be 10 digits.")),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"email",id:"email",onChange:function(t){return Y(t.target.value)},value:J,"aria-invalid":Z?"false":"true",required:!0,onFocus:function(){return Q(!0)},onBlur:function(){return Q(!1)},className:"form-control form-control-lg",placeholder:"Email"}),i.a.createElement("p",{id:"uidnote",className:H&&J&&!Z?"instructions":"offscreen"},i.a.createElement(h.a,{icon:f.a}),"must be a proper email address.")),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",id:"password",onChange:function(t){return rt(t.target.value)},value:et,required:!0,"aria-invalid":ot?"false":"true","aria-describedby":"pwdnote",onFocus:function(){return st(!0)},onBlur:function(){return st(!1)},className:"form-control form-control-lg",placeholder:"Password"}),i.a.createElement("p",{id:"uidnote",className:S&&b&&!O?"instructions":"offscreen"},i.a.createElement(h.a,{icon:f.a}),"Must contain a capital letter.",i.a.createElement("br",null),"Must container a small letter.",i.a.createElement("br",null),"Must container a number",i.a.createElement("br",null),"Must container a special letter(! @ # $ % ).")),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",id:"Confirm-password",onChange:function(t){return mt(t.target.value)},value:ht,required:!0,"aria-invalid":vt?"false":"true","aria-describedby":"confirmnote",onFocus:function(){return Et(!0)},onBlur:function(){return Et(!1)},className:"form-control form-control-lg",placeholder:"Confirm Password"})),i.a.createElement("div",{className:"mb-4"},i.a.createElement("div",{className:"form-check"},i.a.createElement("label",{className:"form-check-label text-muted"},i.a.createElement("input",{type:"checkbox",className:"form-check-input"}),i.a.createElement("i",{className:"input-helper"}),"I agree to all Terms & Conditions"))),i.a.createElement("div",{className:"mt-3"},i.a.createElement("button",{href:"/merchant/login",onClick:_t,disabled:!(O&&ot&&I&&Z&&vt),className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"},"SIGN UP")),i.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Already have an account?"," ",i.a.createElement(c.b,{to:"/user-pages/login",className:"text-primary"},"Login")))))))))}}}]);
//# sourceMappingURL=11.593e1449.chunk.js.map