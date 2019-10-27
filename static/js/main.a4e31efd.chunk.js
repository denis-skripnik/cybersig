(this.webpackJsonpcybersig=this.webpackJsonpcybersig||[]).push([[0],{122:function(e,t,a){e.exports=a(264)},127:function(e,t,a){},128:function(e,t,a){},158:function(e,t){},160:function(e,t){},221:function(e,t){},222:function(e,t){},264:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(117),c=a.n(l),o=(a(127),a(128),a(40)),i=a(16),s=a(118),u=a.n(s);function m(e){return n.a.createElement("div",{className:""},n.a.createElement("div",{className:"alert alert-primary",role:"alert"},n.a.createElement("h4",null,"Content")),n.a.createElement("div",null,n.a.createElement("pre",null,JSON.stringify(e.trJson,null,2))))}function d(e){return n.a.createElement("div",{className:"p-2 border"},n.a.createElement("div",{className:"alert alert-danger",role:"alert"},n.a.createElement("h4",null,"Erroneous transaction")),n.a.createElement("div",null,n.a.createElement("p",{class:" text-danger font-weight-bold"},e.parseError)))}var p=a(39);function h(e){var t=e.auths,a=[],l=!0,c=!1,s=void 0;try{for(var u,m=t[Symbol.iterator]();!(l=(u=m.next()).done);l=!0){u.value;a.push("")}}catch(E){c=!0,s=E}finally{try{l||null==m.return||m.return()}finally{if(c)throw s}}var d=Object(r.useState)(a),p=Object(i.a)(d,2),h=p[0],v=p[1];return n.a.createElement("form",null,n.a.createElement("div",{className:"alert alert-primary",role:"alert"},n.a.createElement("h4",null,"Signature")),h.map((function(e,a){return n.a.createElement(f,{value:e,key:""+a,auth:t[a],onChange:function(e){return function(e,t){var a=Object(o.a)(h);a[e]=t,v(a)}(a,e)}})})),n.a.createElement("button",{onClick:function(){return e.submit(h)},type:"button",className:"btn btn-primary"},"Submit"))}function f(e){var t=e.auth,a=Object(r.useState)(""),l=Object(i.a)(a,2),c=l[0],o=l[1],s=Object(r.useState)("form-control"),u=Object(i.a)(s,2),m=u[0],d=u[1];return n.a.createElement("div",{className:"form-group"},n.a.createElement("label",{htmlFor:"private_key"},"Private key"),n.a.createElement("input",{type:"password",className:m,id:"private_key",placeholder:"Private key",value:c,onChange:function(t){var a=t.target.value;Object(p.a)(a)?d("form-control is-valid"):d("form-control is-invalid"),o(a),e.onChange(a)}}),n.a.createElement("small",{id:"passwordHelpBlock",className:"form-text text-muted"},"Private key for actor ",t.actor,", permission ",t.permission))}function v(e){var t=e.error,a=[];if(t.error.details){a.push(n.a.createElement("hr",{key:"hd"}));var r=!0,l=!1,c=void 0;try{for(var o,i=t.error.details[Symbol.iterator]();!(r=(o=i.next()).done);r=!0){var s=o.value.message;s=s.replace("assertion failure with message: ",""),a.push(n.a.createElement("p",{key:s},s));break}}catch(u){l=!0,c=u}finally{try{r||null==i.return||i.return()}finally{if(l)throw c}}}return n.a.createElement("div",{className:"alert alert-danger",role:"alert"},n.a.createElement("h4",{className:"alert-heading"},t.message),n.a.createElement("p",null,t.error.what),a)}function E(){var e={actions:[{account:"cyber.token",name:"transfer",authorization:[{actor:"zhm555xmzkd3",permission:"active"}],data:{from:"zhm555xmzkd3",to:"ropox",quantity:"1.0000 CYBER",memo:"Memo text"}}]};return n.a.createElement("div",{class:"container"},n.a.createElement("p",{className:"strong"},'This is a simple signing tool. In order to use it, please supply parameter "tr" in url with a valid transaction object.'),n.a.createElement("p",null,"For example below is a transaction including transfer action"),n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-body"},n.a.createElement("a",{className:"card-link",href:"https://gropox.github.io/cybersig?tr="+JSON.stringify(e)},"Click to try this example"),n.a.createElement("pre",{className:"mt-2"},"https://gropox.github.io/cybersig?tr=",JSON.stringify(e,null,4)))))}function b(e){var t=Object(r.useState)(),a=Object(i.a)(t,2),l=a[0],c=a[1],o=Object(r.useState)(),s=Object(i.a)(o,2),f=s[0],b=s[1],g=u.a.parse(window.location.search),w=null,N=null;if(g.tr)try{w=JSON.parse(g.tr)}catch(k){N=k+""}if(N)return n.a.createElement(d,{parseError:N});if(!w)return n.a.createElement("div",null,n.a.createElement(d,{parseError:"Please provide parameter 'tr' with a transaction"}),n.a.createElement(E,null));return f&&console.error("error",f),l&&console.log("result",l),w&&console.log("trJson",w),l?n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 p-2 border "},n.a.createElement("div",{className:"alert alert-success",role:"alert"},n.a.createElement("h4",{className:"alert-heading"},"Success"),n.a.createElement("p",null,"Transaction ",n.a.createElement("a",{className:"alert-link",target:"_blank",href:"https://explorer.cyberway.io/trx/"+l.transaction_id},l.transaction_id))))),n.a.createElement("div",{className:"row mt-2"},n.a.createElement("div",{className:"col-sm-12 p-2 border "},n.a.createElement(m,{trJson:w})))):n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 p-2 border "},n.a.createElement(h,{submit:function(e){console.log("submit",w),Object(p.b)(e,w).then((function(e){return c(e)})).catch((function(e){return b(e.json?e.json:{error:{what:""+e},message:"Error while signing transaction!"})}))},auths:y(w)}))),f&&n.a.createElement("div",{className:"row mt-2"},n.a.createElement("div",{className:"col-sm-12 p-2 border "},n.a.createElement(v,{error:f}))),n.a.createElement("div",{className:"row mt-2"},n.a.createElement("div",{className:"col-sm-12 p-2 border "},n.a.createElement(m,{trJson:w}))))}function y(e){if(!e||!e.actions||!e.actions.length)return[];var t=[],a=!0,r=!1,n=void 0;try{for(var l,c=e.actions[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var i=l.value;i.authorization&&i.authorization.length&&t.push.apply(t,Object(o.a)(i.authorization))}}catch(s){r=!0,n=s}finally{try{a||null==c.return||c.return()}finally{if(r)throw n}}return t}var g=function(e){return n.a.createElement(b,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},39:function(e,t,a){"use strict";(function(e){a.d(t,"b",(function(){return f})),a.d(t,"a",(function(){return E}));var r=a(61),n=a.n(r),l=a(119),c=a(62),o=a(63),i=a(120),s=a.n(i),u=a(121),m=a.n(u),d=a(60),p=a.n(d),h="https://node-cyberway.golos.io";function f(e,t,a){return v.apply(this,arguments)}function v(){return(v=Object(l.a)(n.a.mark((function e(t,a,r){var l,i,u,m;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=new c.JsonRpc(h),i=new s.a(t),u=new c.Api({rpc:l,signatureProvider:i,textDecoder:new o.TextDecoder,textEncoder:new o.TextEncoder}),e.next=5,u.transact(a,{blocksBehind:5,expireSeconds:3600});case 5:return m=e.sent,e.abrupt("return",m);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(t){var a=!1,r=function(e){return m.a.createHash("sha256").update(e).digest()};try{var n=new e(p.a.decode(t)),l=n.slice(0,-4),c=n.slice(-4),o=r(l);o=(o=r(o)).slice(0,4),c.toString()==o.toString()&&(a=!0)}catch(i){}return a}}).call(this,a(2).Buffer)}},[[122,1,2]]]);
//# sourceMappingURL=main.a4e31efd.chunk.js.map