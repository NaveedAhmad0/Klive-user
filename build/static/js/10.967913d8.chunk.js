(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[10],{274:function(e,t,r){"use strict";r.r(t);var n=r(162),a=r(19),o=r(0),c=r.n(o),i=r(10),s=r(6),l=r(181),u=r(70),f=r.n(u);function m(){m=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(S){i=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),c=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=w(c,r);if(i){if(i===u)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,c),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var u={};function f(){}function h(){}function d(){}var p={};i(p,a,(function(){return this}));var v=Object.getPrototypeOf,g=v&&v(v(j([])));g&&g!==t&&r.call(g,a)&&(p=g);var y=d.prototype=f.prototype=Object.create(p);function b(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function c(){return new t((function(n,c){!function n(a,o,c,i){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(s.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return h.prototype=d,i(y,"constructor",d),i(d,"constructor",h),h.displayName=i(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,i(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new E(s(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(y),i(y,c,"Generator"),i(y,a,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}t.default=function(){var e=Object(o.useState)(!0),t=Object(a.a)(e,2),r=(t[0],t[1]),u=Object(o.useState)(""),h=Object(a.a)(u,2),d=h[0],p=h[1],v=Object(o.useState)(""),g=Object(a.a)(v,2),y=g[0],b=g[1],E=Object(o.useState)(!1),w=Object(a.a)(E,2),N=w[0],x=w[1],O=Object(o.useState)(""),j=Object(a.a)(O,2),L=j[0],S=j[1];function _(){return(_=Object(n.a)(m().mark((function e(t){var n,a,o,c;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(d,y),e.prev=2,e.next=5,f.a.post("https://backend.klivepay.com/api/user/login",JSON.stringify({email:d,password:y}),{headers:{"Content-Type":"application/json"}});case 5:a=e.sent,console.log(JSON.stringify(null===a||void 0===a?void 0:a.data)),o=null===a||void 0===a||null===(n=a.data)||void 0===n?void 0:n.accessToken,localStorage.setItem("token",o),localStorage.setItem("email",d),p(""),b(""),x(!0),r(!1),setTimeout((function(){r(!1)}),3e3),e.next=21;break;case 17:e.prev=17,e.t0=e.catch(2),(null===e.t0||void 0===e.t0?void 0:e.t0.response)?400===(null===(c=e.t0.response)||void 0===c?void 0:c.status)?(S("Invalid Credentialials"),x(!1)):S("Login failed"):S("No Server Response"),console.log(e.t0);case 21:console.log(N);case 22:case"end":return e.stop()}}),e,null,[[2,17]])})))).apply(this,arguments)}return c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex align-items-center auth px-0"},c.a.createElement("div",{className:"row w-100 mx-0"},c.a.createElement("div",{className:"col-lg-6 mx-auto"},c.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},c.a.createElement("div",{className:"brand-logo"},c.a.createElement("h3",{className:L?"text-danger":"errMsg"},L)),c.a.createElement("h4",{className:"text-primary"},"Login"),c.a.createElement(l.a,{className:"pt-3"},c.a.createElement(l.a.Group,{className:"d-flex search-field"},c.a.createElement(l.a.Control,{type:"email",placeholder:"Email",onChange:function(e){return function(e){p(e.target.value)}(e)},value:d,size:"lg",className:"h-auto"})),c.a.createElement(l.a.Group,{className:"d-flex search-field"},c.a.createElement(l.a.Control,{type:"password",placeholder:"Password",onChange:function(e){return function(e){b(e.target.value)}(e)},value:y,size:"lg",className:"h-auto"})),c.a.createElement(i.b,{to:"/user/registration/forgotPassword",className:"auth-link text-black"},"Forgot password?"),c.a.createElement("div",{className:"mt-3"},N?c.a.createElement(s.a,{to:"/user/UserDashboard"}):c.a.createElement("button",{onClick:function(e){return function(e){return _.apply(this,arguments)}(e)},className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"},"SIGN IN")),c.a.createElement("div",{className:"text-center mt-4 font-weight-light"},"Don't have an account?"," ",c.a.createElement(i.b,{to:"/user/registration",className:"text-primary"},"SignUp"))))))))}},502:function(e,t,r){e.exports={registerHeading:"registration_registerHeading__1SuvV",registercardbody:"registration_registercardbody__1w-ZK",registerLabel:"registration_registerLabel__3pCoT",registerInputs:"registration_registerInputs__1d1HZ",registerBtn:"registration_registerBtn__kJfBW","pwd-icon":"registration_pwd-icon__M52Hn"}},527:function(e,t,r){"use strict";r.r(t);var n=r(162),a=r(19),o=r(0),c=r.n(o),i=r(517),s=r(502),l=r.n(s),u=r(10),f=r(70),m=r.n(f),h=r(274),d=r(48),p=r(49);function v(){v=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function i(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{i({},"")}catch(S){i=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof f?t:f,o=Object.create(a.prototype),c=new O(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return L()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=w(c,r);if(i){if(i===u)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=l(e,t,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===u)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(e,r,c),o}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(S){return{type:"throw",arg:S}}}e.wrap=s;var u={};function f(){}function m(){}function h(){}var d={};i(d,a,(function(){return this}));var p=Object.getPrototypeOf,g=p&&p(p(j([])));g&&g!==t&&r.call(g,a)&&(d=g);var y=h.prototype=f.prototype=Object.create(d);function b(e){["next","throw","return"].forEach((function(t){i(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){var n;this._invoke=function(a,o){function c(){return new t((function(n,c){!function n(a,o,c,i){var s=l(e[a],e,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,c,i)}),(function(e){n("throw",e,c,i)})):t.resolve(f).then((function(e){u.value=e,c(u)}),(function(e){return n("throw",e,c,i)}))}i(s.arg)}(a,o,n,c)}))}return n=n?n.then(c,c):c()}}function w(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,w(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var n=l(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,u;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function N(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function x(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function O(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(N,this),this.reset(!0)}function j(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:L}}function L(){return{value:void 0,done:!0}}return m.prototype=h,i(y,"constructor",h),i(h,"constructor",m),m.displayName=i(h,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,i(e,c,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),i(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new E(s(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},b(y),i(y,c,"Generator"),i(y,a,(function(){return this})),i(y,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,O.prototype={constructor:O,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return c.type="throw",c.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var i=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(i&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),x(r),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;x(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),u}},e}var g=/^[A-z][A-z0-9-_]{3,23}$/,y=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,b=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,E=/^[0-9]{10}$/;t.default=function(){var e=Object(o.useRef)(),t=Object(o.useState)(""),r=Object(a.a)(t,2),s=r[0],f=r[1],w=Object(o.useState)(!1),N=Object(a.a)(w,2),x=N[0],O=N[1],j=Object(o.useState)(!1),L=Object(a.a)(j,2),S=L[0],_=L[1],k=Object(o.useState)({}),I=Object(a.a)(k,2),C=I[0],P=I[1],G=Object(o.useState)(!1),F=Object(a.a)(G,2),T=F[0],A=F[1],$=Object(o.useState)(!1),B=Object(a.a)($,2),M=B[0],U=B[1],z=Object(o.useState)(""),J=Object(a.a)(z,2),R=J[0],q=J[1],D=Object(o.useState)(!1),H=Object(a.a)(D,2),Y=H[0],Z=H[1],K=Object(o.useState)(!1),V=Object(a.a)(K,2),W=V[0],Q=V[1],X=Object(o.useState)(""),ee=Object(a.a)(X,2),te=ee[0],re=ee[1],ne=Object(o.useState)(!1),ae=Object(a.a)(ne,2),oe=ae[0],ce=ae[1],ie=Object(o.useState)(!1),se=Object(a.a)(ie,2),le=se[0],ue=se[1],fe=Object(o.useState)(""),me=Object(a.a)(fe,2),he=me[0],de=me[1],pe=Object(o.useState)(!1),ve=Object(a.a)(pe,2),ge=ve[0],ye=ve[1],be=Object(o.useState)(!1),Ee=Object(a.a)(be,2),we=Ee[0],Ne=Ee[1],xe=Object(o.useState)(!1),Oe=Object(a.a)(xe,2),je=Oe[0],Le=Oe[1],Se=Object(o.useState)(!1),_e=Object(a.a)(Se,2),ke=_e[0],Ie=_e[1],Ce=Object(o.useState)(!1),Pe=Object(a.a)(Ce,2),Ge=Pe[0],Fe=Pe[1],Te=Object(o.useState)(""),Ae=Object(a.a)(Te,2),$e=(Ae[0],Ae[1]),Be=Object(o.useState)(!1),Me=Object(a.a)(Be,2),Ue=Me[0],ze=Me[1],Je=Object(o.useState)(!1),Re=Object(a.a)(Je,2),qe=Re[0];Re[1],Object(o.useEffect)((function(){e.current.focus()}),[]),Object(o.useEffect)((function(){var e=g.test(s);console.log(e),console.log(s),O(e)}),[s]),Object(o.useEffect)((function(){var e=b.test(R);console.log(e),console.log(R),Z(e)}),[R]),Object(o.useEffect)((function(){var e=E.test(C);console.log(e),console.log(C),A(e)}),[C]),Object(o.useEffect)((function(){var e=y.test(te);console.log(e),console.log(te),ce(e),ye(te===he)}),[te,he]),Object(o.useEffect)((function(){$e("")}),[te,s,he]);var De=function(){var e=Object(n.a)(v().mark((function e(t){var r,n,a,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),r=g.test(s),n=y.test(te),r&&n){e.next=6;break}return $e("Invalid Entry"),e.abrupt("return");case 6:return e.prev=6,e.next=9,m.a.post("https://backend.klivepay.com/api/user/register",JSON.stringify({name:s,mobile:C,email:R,password:te,typeOfStreem:"web"}),{headers:{"Content-Type":"application/json"}}).then((function(e){201===e.status&&alert(e.data.message)}));case 9:a=e.sent,console.log(null===a||void 0===a?void 0:a.data),console.log(JSON.stringify(a)),ze(!0),f(""),q(""),re(""),de(""),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(6),(null===e.t0||void 0===e.t0?void 0:e.t0.response)?409===(null===(o=e.t0.response)||void 0===o?void 0:o.status)?$e("Username Taken"):$e("Registration Failed"):$e("No Server Response");case 22:case"end":return e.stop()}}),e,null,[[6,19]])})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement(c.a.Fragment,null,Ue?c.a.createElement(h.default,null):c.a.createElement("div",null,c.a.createElement("div",{className:"d-flex align-items-center auth px-0"},c.a.createElement("div",{className:"row w-100 mx-0"},c.a.createElement("div",{className:"col-lg-10 mx-auto"},c.a.createElement("div",{className:"auth-form-light text-left py-5 px-4 px-sm-5"},c.a.createElement("h2",{className:"text-primary font-weight-bolder mb-5 text-center"},"User Register"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"".concat(l.a.registerLabel)},"User Name ",c.a.createElement("span",{className:"text-danger"},"*")," ",S&&x?c.a.createElement(p.a,{icon:d.a,className:"text-success"}):"",S&&!x?c.a.createElement(p.a,{icon:d.c,className:"text-danger"}):""),c.a.createElement("input",{type:"text",id:"username",ref:e,autoComplete:"off",onChange:function(e){return f(e.target.value)},value:s,required:!0,"aria-invalid":x?"false":"true","aria-describedby":"uidnote",onFocus:function(){return _(!0)},onBlur:function(){return _(!1)},placeholder:"Username",className:"form-control form-control-lg $ ".concat(l.a.registerInputs)}),S&&!x?c.a.createElement("p",{id:"uidnote",className:S&&s&&!x?"instructions":"offscreen"},c.a.createElement(p.a,{icon:d.b}),"4 to 24 characters.",c.a.createElement("br",null),"Must begin with a letter.",c.a.createElement("br",null),"Letters, numbers, underscores, hyphens allowed."):""))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"".concat(l.a.registerLabel)},"Mobile Number ",c.a.createElement("span",{className:"text-danger"},"*"),"",M&&T?c.a.createElement(p.a,{icon:d.a,className:"text-success"}):"",M&&!T?c.a.createElement(p.a,{icon:d.c,className:"text-danger"}):""),c.a.createElement("input",{type:"number",id:"mobileNumber",onChange:function(e){return P(parseInt(e.target.value))},value:C,pattern:"[0-9]*","aria-invalid":T?"false":"true",required:!0,onFocus:function(){return U(!0)},onBlur:function(){return U(!1)},className:"form-control form-control-lg $ ".concat(l.a.registerInputs),placeholder:"mobile"}),M&&!T?c.a.createElement("p",{id:"uidnote",className:M&&C&&!T?"instructions":"offscreen"},c.a.createElement(p.a,{icon:d.b}),"must be 10 digits."):"")))),c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"pt-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"".concat(l.a.registerLabel)},"Email Address ",c.a.createElement("span",{className:"text-danger"},"*")," ",W&&Y?c.a.createElement(p.a,{icon:d.a,className:"text-success"}):"",W&&!Y?c.a.createElement(p.a,{icon:d.c,className:"text-danger"}):""),c.a.createElement("input",{type:"email",id:"email",onChange:function(e){return q(e.target.value)},value:R,"aria-invalid":Y?"false":"true",required:!0,onFocus:function(){return Q(!0)},onBlur:function(){return Q(!1)},className:"form-control form-control-lg $ ".concat(l.a.registerInputs),placeholder:"Email"}),W&&!Y?c.a.createElement("p",{id:"uidnote",className:W&&R&&!Y?"instructions":"offscreen"},c.a.createElement(p.a,{icon:d.b}),"must be a proper email address."):""))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("form",{className:"pt-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"".concat(l.a.registerLabel)},"Password ",c.a.createElement("span",{className:"text-danger"},"*")," ",le&&oe?c.a.createElement(p.a,{icon:d.a,className:"text-success"}):"",le&&!oe?c.a.createElement(p.a,{icon:d.c,className:"text-danger"}):""),c.a.createElement("input",{type:qe?"text":"password",id:"password",onChange:function(e){return re(e.target.value)},value:te,required:!0,"aria-invalid":oe?"false":"true","aria-describedby":"pwdnote",onFocus:function(){return ue(!0)},onBlur:function(){return ue(!1)},className:"form-control form-control-lg $ ".concat(l.a.registerInputs),placeholder:"Password"}),le&&!oe?c.a.createElement("p",{id:"uidnote",className:S&&s&&!oe?"instructions":"offscreen"},c.a.createElement(p.a,{icon:d.b}),"Must contain a capital letter.",c.a.createElement("br",null),"Must container a small letter.",c.a.createElement("br",null),"Must container a number",c.a.createElement("br",null),"Must container a special letter(! @ # $ % )."):""))),c.a.createElement("div",{className:"col-lg-6"},c.a.createElement("form",{className:"pt-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"".concat(l.a.registerLabel)},"Confirm Password ","",c.a.createElement("span",{className:"text-danger"},"*")," ",we&&ge?c.a.createElement(p.a,{icon:d.a,className:"text-success"}):"",we&&!ge?c.a.createElement(p.a,{icon:d.c,className:"text-danger"}):""),c.a.createElement("input",{type:"password",id:"Confirm-password",onChange:function(e){return de(e.target.value)},value:he,required:!0,"aria-invalid":ge?"false":"true","aria-describedby":"confirmnote",onFocus:function(){return Ne(!0)},onBlur:function(){return Ne(!1)},className:"form-control form-control-lg $ ".concat(l.a.registerInputs),placeholder:"Confirm Password"}),we&&!ge?c.a.createElement("p",{className:"text-danger"}," ","Paswwords do not match"):"")))),c.a.createElement("div",{className:"row"},c.a.createElement("form",{className:"pt-3"},c.a.createElement("div",{className:"form-group"},c.a.createElement(i.a,{sitekey:"6Lf49RIiAAAAAHf6c0KwqiT2RTnQp2D_UWj07Y-x",onChange:function(e){e&&Fe(!0),console.log("Captcha Value",e)}})),c.a.createElement("div",{className:"mb-4"},c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label text-muted"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",onChange:function(){Ie(!ke)},value:ke}),c.a.createElement("i",{className:"input-helper"}),"I read and agree to terms and conditions."))),c.a.createElement("div",{className:"mb-4"},c.a.createElement("div",{className:"form-check"},c.a.createElement("label",{className:"form-check-label text-muted"},c.a.createElement("input",{type:"checkbox",className:"form-check-input",onChange:function(e){Le(!je)},value:je}),c.a.createElement("i",{className:"input-helper"}),"I agreed to read and acknowledged to the company\u2019s Privacy policy, terms and conditions."))))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"mt-3"},c.a.createElement("button",{href:"/user/login",onClick:De,disabled:!(x&&oe&&T&&Y&&ge&&!1!==je&&!1!==ke&&Ge),className:"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn ".concat(l.a.registerBtn)},"SIGN UP"))),c.a.createElement("div",{className:"text-left mt-4 font-weight-light"},"Already have an account?"," ",c.a.createElement(u.b,{to:"/user-pages/login",className:"text-primary"},"Login"))))))))}}}]);
//# sourceMappingURL=10.967913d8.chunk.js.map