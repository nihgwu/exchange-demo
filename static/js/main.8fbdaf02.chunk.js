(this["webpackJsonpexchange-demo"]=this["webpackJsonpexchange-demo"]||[]).push([[0],{43:function(e,n,t){e.exports=t(74)},74:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"wallet",(function(){return S}));var a=t(0),c=t.n(a),o=t(13),i=t.n(o),u=t(9),l=t(11),s=t(34),f=t(4),d=t.n(f),b=t(6),p=t(35),g=t.n(p),h={GBP:100,EUR:50,USD:0},m=function(e){return new Promise((function(n){return setTimeout(n,e)}))},v=function(){var e=Object(b.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(300);case 2:return e.abrupt("return",h);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),O=function(){var e=Object(b.a)(d.a.mark((function e(n){var t,r,a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.fromCode,r=n.toCode,a=n.fromAmount,c=n.toAmount,h[t]-=a,h[r]+=c,e.next=5,m(150);case 5:return e.abrupt("return",h);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j={GBP:{code:"GBP",symbol:"\xa3",description:"British Pound"},EUR:{code:"EUR",symbol:"\u20ac",description:"Euro"},USD:{code:"USD",symbol:"$",description:"American Dollar"}},x=Object.keys(j),w=function(e){return x.indexOf(e)},y=function(e){var n=j[e];return n?n.symbol:""},E=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(e.toFixed(n))},C=function(e,n){return"".concat(y(e)).concat(E(n))},k=function(e,n,t){if(!t||!t[n]||!t[n])return"";var r=t[n]/t[e],a=E(r,4);return"".concat(y(e),"1 = ").concat(y(n)).concat(a)},S={state:g.a.from({showExchange:!1,currentCode:x[0],balance:null}),reducers:{showExchange:function(e,n){return e.merge({showExchange:!0})},hideExchange:function(e,n){return e.merge({showExchange:!1})},setCurrentCode:function(e,n){return e.merge({currentCode:n})},updateBalance:function(e,n){return e.merge({balance:n})}},effects:{loadBalance:function(){var e=Object(b.a)(d.a.mark((function e(n,t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.wallet,e.next=3,v();case 3:r=e.sent,this.updateBalance(r);case 5:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}(),exchange:function(){var e=Object(b.a)(d.a.mark((function e(n,t){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.wallet,e.next=3,O(n);case 3:r=e.sent,this.updateBalance(r),this.hideExchange();case 6:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()}};function P(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?P(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):P(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var B=function(e){return function(n,t){var r=t.name,a=t.action;return z({},n,Object(l.a)({},r,z({},n[r],Object(l.a)({},a,e))))}},D=function(e){return function(n,t){var r=t.name,a=t.action,c=t.error;return z({},n,Object(l.a)({},r,z({},n[r],Object(l.a)({},a,e?c:null))))}};function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var R=Object(s.init)({redux:{devtoolOptions:{name:"Exchange Demo",disabled:!0,actionSanitizer:function(e){if(!e.type.startsWith("loading/"))return e;var n=e.type.replace("loading/","".concat(e.payload.name,"/").concat(e.payload.action,"@"));return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?A(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{type:n})}}},models:r,plugins:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={name:"loading",reducers:{start:B(!0),success:B(!1),fail:B(!1)},state:{}},t={name:"error",reducers:{"loading/start":D(!1),"loading/success":D(!1),"loading/fail":D(!0)},state:{}};return{config:{models:{loading:n,error:t}},onModel:function(r){var a=this,c=r.name;if("loading"!==c&&"error"!==c){n.state[c]={},t.state[c]={};var o=this.dispatch[c];Object.keys(o).forEach((function(r){if(a.dispatch[c][r].isEffect){n.state[c][r]=!1,t.state[c][r]=null;var o="".concat(c,"/").concat(r);if((!e.whitelist||e.whitelist.includes(o))&&(!e.blacklist||!e.blacklist.includes(o))){var i=a.dispatch[c][r],u=function(){var n=Object(b.a)(d.a.mark((function n(u,l){var s,f,b,p,g=arguments;return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(n.prev=0,a.dispatch.loading.start({name:c,action:r}),s=g.length,f=new Array(s>2?s-2:0),b=2;b<s;b++)f[b-2]=g[b];return n.next=5,i.apply(void 0,[u,l].concat(f));case 5:return p=n.sent,a.dispatch.loading.success({name:c,action:r}),n.abrupt("return",p);case 10:if(n.prev=10,n.t0=n.catch(0),!n.t0.ignore){n.next=14;break}return n.abrupt("return",null);case 14:if(a.dispatch.loading.fail({name:c,action:r,error:n.t0,meta:l}),!n.t0.__CANCEL__){n.next=17;break}return n.abrupt("return",null);case 17:if(window.newrelic&&window.newrelic.noticeError(t),!e.throwlist||!e.throwlist.includes(o)){n.next=21;break}throw n.t0;case 21:return n.abrupt("return",null);case 22:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t){return n.apply(this,arguments)}}();u.isEffect=!0,a.dispatch[c][r]=u}}}))}}}}()]}),U=t(3),F=t(2),I=t(36);function N(){var e=Object(U.a)(["\n  ",';\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n  \n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .slider {\n    .paging-dot circle {\n      fill: white !important;\n    }\n\n    .slider-list {\n      margin: 0 !important;\n    }\n  }\n']);return N=function(){return e},e}var V=Object(F.createGlobalStyle)(N(),I.normalize),T=t(7),G=t(8),_=t(1),L=t.n(_),W=function(e,n){return function(t){return t[e]&&n}},M={primary:"#3b7afa",primaryActive:"#1c4eb3",white:"#fff",light:"rgba(255,255,255,0.6)"};function $(){var e=Object(U.a)(["\n  color: ",";\n  font-size: 14px;\n  margin-top: 10px;\n"]);return $=function(){return e},e}function J(){var e=Object(U.a)(["\n  color: ",";\n"]);return J=function(){return e},e}function Y(){var e=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #2e6cdd;\n  width: ","px;\n  height: ","px;\n  border-radius: 50%;\n  border: 1px solid ",";\n"]);return Y=function(){return e},e}function q(){var e=Object(U.a)(["\n      opacity: 0.6;\n    "]);return q=function(){return e},e}function H(){var e=Object(U.a)(["\n  background: transparent;\n  border: none;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  ","\n"]);return H=function(){return e},e}var X=F.default.button(H(),W("disabled",Object(F.css)(q()))),K=F.default.div(Y(),(function(e){return e.size}),(function(e){return e.size}),M.light),Q=F.default.svg(J(),M.white),Z=F.default.label($(),M.light),ee=Object(a.forwardRef)((function(e,n){var t=e.children,r=e.icon,a=e.iconSize,o=void 0===a?48:a,i=e.disabled,u=Object(G.a)(e,["children","icon","iconSize","disabled"]);return c.a.createElement(X,Object.assign({},u,{ref:n,disabled:i}),c.a.createElement(K,{size:o},c.a.createElement(Q,{as:r})),t&&c.a.createElement(Z,null,t))}));ee.displayName="IconButton",ee.propTypes={children:L.a.string,icon:L.a.elementType.isRequired,iconSize:L.a.number,disabled:L.a.bool};var ne=ee,te=t(77),re=t(78),ae=t(79);function ce(){var e=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n  font-size: 16px;\n  width: 100vw;\n  height: 100vh;\n"]);return ce=function(){return e},e}function oe(){var e=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 20px;\n"]);return oe=function(){return e},e}function ie(){var e=Object(U.a)(["\n  background-color: ",";\n"]);return ie=function(){return e},e}var ue=F.default.div(ie(),M.primary),le=F.default.div(oe()),se=F.default.div(ce(),M.primary,M.white),fe=t(14);function de(){var e=Object(U.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n"]);return de=function(){return e},e}function be(){var e=Object(U.a)(["\n  color: ",";\n  font-size: 32px;\n  margin: 30px;\n"]);return be=function(){return e},e}function pe(){var e=Object(U.a)(["\n  height: 300px;\n\n  li {\n    :not(.slide-current) {\n      "," {\n        display: none;\n      }\n    }\n  }\n"]);return pe=function(){return e},e}function ge(){var e=Object(U.a)(["\n  color: ",";\n  font-size: 16px;\n"]);return ge=function(){return e},e}var he=F.default.div(ge(),M.light),me=F.default.div(pe(),he),ve=F.default.div(be(),M.white),Oe=F.default.div(de()),je=function(e){var n=e.currentCode,t=void 0===n?x[0]:n,r=e.balance,o=e.onChange,i=Object(G.a)(e,["currentCode","balance","onChange"]),u=Object(a.useCallback)((function(e){o&&o(x[e])}),[o]);return c.a.createElement(me,i,c.a.createElement(fe.a,{wrapAround:!0,slideIndex:w(t),cellAlign:"center",transitionMode:"scroll3d",slideWidth:.6,zoomScale:.6,afterSlide:u,renderCenterLeftControls:null,renderCenterRightControls:null},x.map((function(e){return c.a.createElement(Oe,{key:e},c.a.createElement(ve,null,r?C(e,r[e]):"--"),c.a.createElement(he,null,e," - ",j[e].description))}))))},xe=function(e){e.showExchange,Object(G.a)(e,["showExchange"]);var n=Object(u.c)((function(e){return[e.wallet.currentCode,e.wallet.balance,e.loading.wallet.loadBalance,e.error.wallet.loadBalance]})),t=Object(T.a)(n,4),r=t[0],o=t[1],i=t[2],l=t[3],s=Object(u.b)();return Object(a.useEffect)((function(){s.wallet.loadBalance()}),[s]),l?c.a.createElement(se,null,"Load balance failed"):c.a.createElement(ue,null,c.a.createElement(je,{balance:o,currentCode:r,onChange:s.wallet.setCurrentCode}),c.a.createElement(le,null,c.a.createElement(ne,{icon:te.a,disabled:!0},"Top Up"),c.a.createElement(ne,{icon:re.a,disabled:i,onClick:s.wallet.showExchange},"Exchange"),c.a.createElement(ne,{icon:ae.a,disabled:!0},"Bank")))},we=t(20),ye=t.n(we),Ee=ye.a.CancelToken,Ce=Ee.source(),ke=function(){var e;(e=Ce).cancel.apply(e,arguments),Ce=Ee.source()},Se=function(){var e=Object(b.a)(d.a.mark((function e(){var n,t,r=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"GBP,EUR,USD",e.next=3,ye.a.get("https://openexchangerates.org/api/latest.json",{params:{app_id:"9356d23d12ab4998b467db1492e3fec7",symbols:n},cancelToken:Ce.token});case 3:return t=e.sent,e.abrupt("return",t.data.rates);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Pe=function(){var e=Object(a.useRef)(!0),n=Object(a.useState)({loading:!0,rates:null,error:null}),t=Object(T.a)(n,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){var n;if(e.current){var t=function(){var e=Object(b.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ke(),e.prev=1,e.next=4,Se();case 4:n=e.sent,c({loading:!1,rates:n,error:null}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({loading:!1,rates:null,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();n=setInterval(t,1e4),t(),e.current=!1}return function(){ke(),clearInterval(n)}}),[c]),r};function ze(){var e=Object(U.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 5px;\n"]);return ze=function(){return e},e}function Be(){var e=Object(U.a)(["\n      color: ",";\n    "]);return Be=function(){return e},e}function De(){var e=Object(U.a)(["\n  border: none;\n  background-color: transparent;\n  color: ",";\n  padding: 5px 10px;\n\n  ","\n"]);return De=function(){return e},e}function Ae(){var e=Object(U.a)(["\n  flex: 1;\n  text-align: right;\n"]);return Ae=function(){return e},e}function Re(){var e=Object(U.a)(["\n  flex: 1;\n"]);return Re=function(){return e},e}function Ue(){var e=Object(U.a)(["\n  background-color: ",";\n  height: 70px;\n  padding: 30px 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return Ue=function(){return e},e}function Fe(){var e=Object(U.a)(["\n  background-color: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n"]);return Fe=function(){return e},e}var Ie=F.default.div(Fe(),M.primary),Ne=F.default.div(Ue(),M.primary),Ve=F.default.div(Re()),Te=F.default.div(Ae()),Ge=F.default.button(De(),M.white,W("disabled",Object(F.css)(Be(),M.light))),_e=F.default.button(ze(),M.primaryActive,M.white,M.light);function Le(){var e=Object(U.a)(["\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  text-align: right;\n"]);return Le=function(){return e},e}var We=F.default.input(Le(),M.white),Me=function(e){return e?e.toString():""},$e=Object(a.forwardRef)((function(e,n){var t=e.value,r=e.maxValue,o=e.prefix,i=void 0===o?"":o,u=e.onChange,l=Object(G.a)(e,["value","maxValue","prefix","onChange"]),s=Object(a.useRef)(t),f=Object(a.useState)(Me(t)),d=Object(T.a)(f,2),b=d[0],p=d[1],g=Object(a.useCallback)((function(e){var n=e.target.value.replace(i,"");if(function(e){return""===e||/^\d+\.?\d{0,2}$/.test(e)}(n)){var t=Number(n);if(void 0!==r&&t>r)return;p(n),u&&u(Number(t))}}),[i,r,p,u]),h=Object(a.useCallback)((function(){0===Number(b)?p(""):"."===b[b.length-1]&&p(b.substr(0,b.length-1))}),[b]);return Object(a.useEffect)((function(){s.current!==t&&(p(Me(t)),s.current=t)}),[s,t]),c.a.createElement(We,Object.assign({},l,{ref:n,value:""===b?"":"".concat(i).concat(b),onChange:g,onBlur:h}))}));$e.displayName="CurrencyInput";var Je=$e;function Ye(){var e=Object(U.a)(["\n  color: ",";\n  font-size: 16px;\n"]);return Ye=function(){return e},e}function qe(){var e=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: transparent;\n  padding: 10px 0;\n"]);return qe=function(){return e},e}function He(){var e=Object(U.a)(["\n  width: 60%;\n  color: ",";\n  font-size: 36px;\n"]);return He=function(){return e},e}function Xe(){var e=Object(U.a)(["\n  width: 40%;\n  color: ",";\n  font-size: 36px;\n  padding-right: 10px;\n"]);return Xe=function(){return e},e}function Ke(){var e=Object(U.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 80px;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(U.a)(["\n  padding: 30px;\n"]);return Qe=function(){return e},e}function Ze(){var e=Object(U.a)(["\n      background-color: #1c4eb3;\n    "]);return Ze=function(){return e},e}function en(){var e=Object(U.a)(["\n      background-color: ",";\n      position: relative;\n\n      &::after {\n        position: absolute;\n        left: 50%;\n        bottom: 0;\n        content: '';\n        display: block;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        border-width: 16px 16px 0;\n        border-color: "," transparent\n          transparent;\n        transform: translateX(-50%) translateY(100%);\n      }\n    "]);return en=function(){return e},e}function nn(){var e=Object(U.a)(["\n  height: 200px;\n\n  ","\n"]);return nn=function(){return e},e}var tn,rn,an=F.default.div(nn(),(tn="direction",rn={from:Object(F.css)(en(),M.primary,M.primary),to:Object(F.css)(Ze())},function(e){return rn[e[tn]]})),cn=F.default.div(Qe()),on=F.default.label(Ke()),un=F.default.div(Xe(),M.white),ln=Object(F.default)(Je)(He(),M.white),sn=F.default.div(qe()),fn=F.default.div(Ye(),M.light),dn=function(e){var n=e.direction,t=void 0===n?"from":n,r=e.balance,o=e.rates,i=e.baseCode,u=e.targetCode,l=e.value,s=e.maxValue,f=e.disabled,d=e.onFocus,b=e.onChange,p=e.onCodeChange,g=Object(G.a)(e,["direction","balance","rates","baseCode","targetCode","value","maxValue","disabled","onFocus","onChange","onCodeChange"]),h=Object(a.useCallback)((function(e){p&&p(x[e])}),[p]),m="from"===t,v=w(i);return c.a.createElement(an,Object.assign({direction:t},g),c.a.createElement(fe.a,{wrapAround:!0,dragging:!1,slideIndex:v,afterSlide:h,renderCenterLeftControls:null,renderCenterRightControls:null},x.map((function(e){var n=e===i;return c.a.createElement(cn,{key:e},c.a.createElement(on,null,c.a.createElement(un,null,e),n&&!!o&&c.a.createElement(ln,{autoFocus:m,disabled:f,value:l,maxValue:s,prefix:m?"-":"+",onChange:b,onFocus:d})),c.a.createElement(sn,null,c.a.createElement(fn,null,"You have ",C(e,r[e])),!m&&i!==u&&c.a.createElement(fn,null,k(e,u,o))))}))))},bn=function(){var e=Object(u.c)((function(e){return[e.wallet.currentCode,e.wallet.balance,e.loading.wallet.exchange]})),n=Object(T.a)(e,3),t=n[0],r=n[1],o=n[2],i=Object(a.useState)(t),l=Object(T.a)(i,2),s=l[0],f=l[1],d=Object(a.useState)(function(e){var n=w(e)+1;return n>=x.length&&(n=0),x[n]}(t)),b=Object(T.a)(d,2),p=b[0],g=b[1],h=Object(a.useState)("from"),m=Object(T.a)(h,2),v=m[0],O=m[1],j=Object(a.useState)(0),y=Object(T.a)(j,2),C=y[0],S=y[1],P=Pe(),z=P.rates,B=P.loading,D=P.error,A=Object(u.b)(),R=z?z[p]/z[s]:1,U=r[s],F=z?U*R:0,I="from"===v?C:E(C/R),N="to"===v?C:E(C*R),V=!z||B||D||s===p,G=V||0===I||I>U||o,_=Object(a.useCallback)((function(e){f(e),S(0)}),[f,S]),L=Object(a.useCallback)((function(e){g(e),S(0)}),[g,S]),W=Object(a.useCallback)((function(){"to"===v&&(O("from"),S(I))}),[v,O,S,I]),M=Object(a.useCallback)((function(){"from"===v&&(O("to"),S(N))}),[v,O,S,N]),$=Object(a.useCallback)((function(){A.wallet.exchange({fromCode:s,fromAmount:I,toCode:p,toAmount:N})}),[A,s,I,p,N]);return c.a.createElement(Ie,null,c.a.createElement(Ne,null,c.a.createElement(Ve,null,c.a.createElement(Ge,{onClick:A.wallet.hideExchange},"Cancel")),!V&&c.a.createElement(_e,null,k(s,p,z)),c.a.createElement(Te,null,c.a.createElement(Ge,{disabled:G,onClick:$},"Exchange"))),c.a.createElement(dn,{direction:"from",balance:r,rates:z,baseCode:s,targetCode:p,value:I,maxValue:U,disabled:o,onFocus:W,onChange:S,onCodeChange:_}),c.a.createElement(dn,{direction:"to",balance:r,rates:z,baseCode:p,targetCode:s,value:N,maxValue:F,disabled:o,onFocus:M,onChange:S,onCodeChange:L}))},pn=function(){var e=Object(u.c)((function(e){return e.wallet.showExchange}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(xe,null),e&&c.a.createElement(bn,null))},gn=function(){return c.a.createElement(u.a,{store:R},c.a.createElement(V,null),c.a.createElement(pn,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(gn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.8fbdaf02.chunk.js.map