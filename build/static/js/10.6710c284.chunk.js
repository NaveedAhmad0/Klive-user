(window["webpackJsonpklive-admin"]=window["webpackJsonpklive-admin"]||[]).push([[10],{161:function(e,a,t){},218:function(e,a,t){"use strict";a.a="https://backend.klivepay.com/api/"},534:function(e,a,t){"use strict";t.r(a);var l=t(19),c=t(0),n=t.n(c),m=(t(161),t(6)),r=t(68),s=t.n(r),i=t(218);a.default=function(){var e=Object(m.h)(),a=Object(c.useState)([{email:"",invoiceRefId:"",mobile:"",items:{},billTo:"",billFrom:"",status:"",customer:"",createdAt:"",amount:0,item:null,quantity:null,totalamount:null,expirydate:null,qrRawData:null,numberOfTimes:null,qrImage:null}]),t=Object(l.a)(a,2),r=t[0],d=t[1],o=e.state.invoiceId;return Object(c.useEffect)((function(){s.a.get("".concat(i.a,"/merchant/invoice-details/").concat(o)).then((function(e){d({email:e.data.email,invoiceRefId:e.data.invoiceRefId,mobile:e.data.mobile,billTo:e.data.billTo,billFrom:e.data.billFrom,status:e.data.status,customer:e.data.customer,createdAt:e.data.createdAt,amount:e.data.amount,items:e.data.item,quantity:e.data.quantity,totalamount:e.data.totalamount,expirydate:e.data.expirydate,qrImage:e.data.qrImage}),console.log("DATA IS ",e.data)}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"header"},n.a.createElement("h3",{className:"header-title"},"Your Invoice")),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xl-9 col-lg-9 col-md-9 col-sm-9 col-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("h4",{className:"cardmaintitle"},"Order ",r.invoiceRefId," Details")),n.a.createElement("br",null),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("h6",{className:"text-primary"},"General"),n.a.createElement("div",{className:"Boxes"},n.a.createElement("p",{className:"heading"},"Date Created :"),n.a.createElement("span",{className:"text-muted"},r.createdAt)),n.a.createElement("br",null),n.a.createElement("p",{className:"heading "},"Status :",n.a.createElement("span",{className:"text-muted"},r.status)),n.a.createElement("br",null),n.a.createElement("p",{className:"heading"},"Customer :",n.a.createElement("span",{className:"text-muted"},r.customer))),n.a.createElement("div",{className:"col"},n.a.createElement("h6",{className:"text-primary"},"Billing"),n.a.createElement("span",{className:"text-center text-muted"},r.billFrom),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"heading"},"Email Address :"),n.a.createElement("span",{className:"text-center text-muted"},r.email),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",{className:"heading"},"Phone Number :"),n.a.createElement("span",{className:"text-center text-muted"},r.mobile)),n.a.createElement("div",{className:"col"},n.a.createElement("h6",{className:"text-primary"},"Address"),n.a.createElement("span",{className:"text-center text-muted"},r.billTo))))),n.a.createElement("br",null),n.a.createElement("div",{className:"card",id:"cardmerchant"},n.a.createElement("div",{className:"card-body"},n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("div",null,n.a.createElement("label",null,"Total Amount"),n.a.createElement("br",null),n.a.createElement("p",null,r.totalamount)),n.a.createElement("div",null,n.a.createElement("label",null,"QR Expiry Date"),n.a.createElement("br",null),n.a.createElement("p",null,r.expirydate)))))),n.a.createElement("div",{className:"col-xl-3 col-lg-3 col-md-3 col-sm-3 col-12"},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-header"},"PayPal Here"),n.a.createElement("div",{className:"qrcode p-3"},n.a.createElement("img",{src:"data:image/png;base64,".concat(r.qrImage),alt:"QR",width:190})))))))}}}]);
//# sourceMappingURL=10.6710c284.chunk.js.map