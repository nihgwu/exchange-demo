(this["webpackJsonpexchange-demo"]=this["webpackJsonpexchange-demo"]||[]).push([[0],{43:function(e,n,t){e.exports=t(74)},74:function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"wallet",(function(){return A}));var a=t(0),c=t.n(a),o=t(13),i=t.n(o),u=t(2),l=t(9),s=t(3),f=t(34);function d(){var e=Object(s.a)(["\n  ",';\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n  \n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",\n      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  .slider {\n    .paging-dot circle {\n      fill: white !important;\n    }\n\n    .slider-list {\n      margin: 0 !important;\n    }\n  }\n']);return d=function(){return e},e}var b=Object(u.createGlobalStyle)(d(),f.normalize),p={colors:{primary:"#3b7afa",primaryActive:"#1c4eb3",white:"#fff",light:"rgba(255,255,255,0.6)"}},h=t(11),m=t(37),g=t(4),v=t.n(g),O=t(6),j=t(38),x=t.n(j),w={GBP:100,EUR:50,USD:0},y=function(){var e=Object(O.a)(v.a.mark((function e(n){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",w);case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),E=function(){var e=Object(O.a)(v.a.mark((function e(n){var t,r,a,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.fromCode,r=n.toCode,a=n.fromAmount,c=n.toAmount,w[t]-=a,w[r]+=c,e.abrupt("return",w);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),C={GBP:{code:"GBP",symbol:"\xa3",description:"British Pound"},EUR:{code:"EUR",symbol:"\u20ac",description:"Euro"},USD:{code:"USD",symbol:"$",description:"American Dollar"}},k=Object.keys(C),S=function(e){return k.indexOf(e)},P=function(e){var n=C[e];return n?n.symbol:""},z=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return Number(e.toFixed(n))},B=function(e,n){return"".concat(P(e)).concat(z(n))},D=function(e,n,t){if(!t||!t[n]||!t[n])return"";var r=t[n]/t[e],a=z(r,4);return"".concat(P(e),"1 = ").concat(P(n)).concat(a)},A={state:x.a.from({showExchange:!1,currentCode:k[0],balance:null}),reducers:{showExchange:function(e,n){return e.merge({showExchange:!0})},hideExchange:function(e,n){return e.merge({showExchange:!1})},setCurrentCode:function(e,n){return e.merge({currentCode:n})},updateBalance:function(e,n){return e.merge({balance:n})}},effects:{loadBalance:function(){var e=Object(O.a)(v.a.mark((function e(n,t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.wallet,e.next=3,y();case 3:r=e.sent,this.updateBalance(r);case 5:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}(),exchange:function(){var e=Object(O.a)(v.a.mark((function e(n,t){var r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.wallet,e.next=3,E(n);case 3:r=e.sent,this.updateBalance(r),this.hideExchange();case 6:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()}};function R(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?R(Object(t),!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):R(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var F=function(e){return function(n,t){var r=t.name,a=t.action;return U({},n,Object(h.a)({},r,U({},n[r],Object(h.a)({},a,e))))}},N=function(e){return function(n,t){var r=t.name,a=t.action,c=t.error;return U({},n,Object(h.a)({},r,U({},n[r],Object(h.a)({},a,e?c:null))))}};function I(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var V=Object(m.init)({redux:{devtoolOptions:{name:"Exchange Demo",disabled:!0,actionSanitizer:function(e){if(!e.type.startsWith("loading/"))return e;var n=e.type.replace("loading/","".concat(e.payload.name,"/").concat(e.payload.action,"@"));return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?I(Object(t),!0).forEach((function(n){Object(h.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e,{type:n})}}},models:r,plugins:[function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={name:"loading",reducers:{start:F(!0),success:F(!1),fail:F(!1)},state:{}},t={name:"error",reducers:{"loading/start":N(!1),"loading/success":N(!1),"loading/fail":N(!0)},state:{}};return{config:{models:{loading:n,error:t}},onModel:function(r){var a=this,c=r.name;if("loading"!==c&&"error"!==c){n.state[c]={},t.state[c]={};var o=this.dispatch[c];Object.keys(o).forEach((function(r){if(a.dispatch[c][r].isEffect){n.state[c][r]=!1,t.state[c][r]=null;var o="".concat(c,"/").concat(r);if((!e.whitelist||e.whitelist.includes(o))&&(!e.blacklist||!e.blacklist.includes(o))){var i=a.dispatch[c][r],u=function(){var n=Object(O.a)(v.a.mark((function n(u,l){var s,f,d,b,p=arguments;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(n.prev=0,a.dispatch.loading.start({name:c,action:r}),s=p.length,f=new Array(s>2?s-2:0),d=2;d<s;d++)f[d-2]=p[d];return n.next=5,i.apply(void 0,[u,l].concat(f));case 5:return b=n.sent,a.dispatch.loading.success({name:c,action:r}),n.abrupt("return",b);case 10:if(n.prev=10,n.t0=n.catch(0),!n.t0.ignore){n.next=14;break}return n.abrupt("return",null);case 14:if(a.dispatch.loading.fail({name:c,action:r,error:n.t0,meta:l}),!n.t0.__CANCEL__){n.next=17;break}return n.abrupt("return",null);case 17:if(window.newrelic&&window.newrelic.noticeError(t),!e.throwlist||!e.throwlist.includes(o)){n.next=21;break}throw n.t0;case 21:return n.abrupt("return",null);case 22:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e,t){return n.apply(this,arguments)}}();u.isEffect=!0,a.dispatch[c][r]=u}}}))}}}}()]}),T=t(7),G=t(8),L=t(1),_=t.n(L);function W(){var e=Object(s.a)(["\n  color: ",";\n  font-size: 14px;\n  margin-top: 10px;\n"]);return W=function(){return e},e}function M(){var e=Object(s.a)(["\n  color: ",";\n"]);return M=function(){return e},e}function $(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #2e6cdd;\n  width: ","px;\n  height: ","px;\n  border-radius: 50%;\n  border: 1px solid ",";\n"]);return $=function(){return e},e}function J(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: ","px;\n"]);return J=function(){return e},e}var Y=u.default.div(J(),(function(e){return e.width})),q=u.default.div($(),(function(e){return e.size}),(function(e){return e.size}),(function(e){return e.theme.colors.light})),H=u.default.svg(M(),(function(e){return e.theme.colors.white})),X=u.default.label(W(),(function(e){return e.theme.colors.light})),K=Object(a.forwardRef)((function(e,n){var t=e.children,r=e.icon,a=e.iconSize,o=void 0===a?48:a,i=Object(G.a)(e,["children","icon","iconSize"]);return c.a.createElement(Y,Object.assign({width:o},i,{ref:n}),c.a.createElement(q,{size:o},c.a.createElement(H,{as:r})),t&&c.a.createElement(X,null,t))}));K.displayName="ActionButton",K.propTypes={children:_.a.string,icon:_.a.elementType.isRequired,iconSize:_.a.number};var Q=K,Z=t(77),ee=t(78),ne=t(79);function te(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: ",";\n  color: ",";\n  font-size: 16px;\n  width: 100vw;\n  height: 100vh;\n"]);return te=function(){return e},e}function re(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  padding: 20px;\n"]);return re=function(){return e},e}function ae(){var e=Object(s.a)(["\n  background-color: ",";\n"]);return ae=function(){return e},e}var ce=u.default.div(ae(),(function(e){return e.theme.colors.primary})),oe=u.default.div(re()),ie=u.default.div(te(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.white})),ue=t(14);function le(){var e=Object(s.a)(["\n  height: 240px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-end;\n"]);return le=function(){return e},e}function se(){var e=Object(s.a)(["\n  color: ",";\n  font-size: 32px;\n  margin: 30px;\n"]);return se=function(){return e},e}function fe(){var e=Object(s.a)(["\n  height: 300px;\n\n  li {\n    :not(.slide-current) {\n      "," {\n        display: none;\n      }\n    }\n  }\n"]);return fe=function(){return e},e}function de(){var e=Object(s.a)(["\n  color: ",";\n  font-size: 16px;\n"]);return de=function(){return e},e}var be=u.default.div(de(),(function(e){return e.theme.colors.light})),pe=u.default.div(fe(),be),he=u.default.div(se(),(function(e){return e.theme.colors.white})),me=u.default.div(le()),ge=function(e){var n=e.currentCode,t=void 0===n?k[0]:n,r=e.balance,o=e.onChange,i=Object(G.a)(e,["currentCode","balance","onChange"]),u=Object(a.useCallback)((function(e){o&&o(k[e])}),[o]);return c.a.createElement(pe,i,c.a.createElement(ue.a,{wrapAround:!0,slideIndex:S(t),cellAlign:"center",transitionMode:"scroll3d",slideWidth:.6,zoomScale:.6,afterSlide:u,renderCenterLeftControls:null,renderCenterRightControls:null},k.map((function(e){return c.a.createElement(me,{key:e},c.a.createElement(he,null,B(e,r[e])),c.a.createElement(be,null,e," - ",C[e].description))}))))},ve=function(e){e.showExchange,Object(G.a)(e,["showExchange"]);var n=Object(l.c)((function(e){return[e.wallet.currentCode,e.wallet.balance,e.loading.wallet.loadBalance,e.error.wallet.loadBalance]})),t=Object(T.a)(n,4),r=t[0],o=t[1],i=t[2],u=t[3],s=Object(l.b)();return Object(a.useEffect)((function(){s.wallet.loadBalance()}),[s]),u?c.a.createElement(ie,null,"Load balance failed"):!o||i?c.a.createElement(ie,null,"Loading"):c.a.createElement(ce,null,c.a.createElement(ge,{balance:o,currentCode:r,onChange:s.wallet.setCurrentCode}),c.a.createElement(oe,null,c.a.createElement(Q,{icon:Z.a},"Top Up"),c.a.createElement(Q,{icon:ee.a,onClick:s.wallet.showExchange},"Exchange"),c.a.createElement(Q,{icon:ne.a},"Bank")))},Oe=t(20),je=t.n(Oe),xe=je.a.CancelToken,we=xe.source(),ye=function(){var e;(e=we).cancel.apply(e,arguments),we=xe.source()},Ee=function(){var e=Object(O.a)(v.a.mark((function e(){var n,t,r=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"GBP,EUR,USD",e.next=3,je.a.get("https://openexchangerates.org/api/latest.json",{params:{app_id:"9356d23d12ab4998b467db1492e3fec7",symbols:n},cancelToken:we.token});case 3:return t=e.sent,e.abrupt("return",t.data.rates);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Ce=function(){var e=Object(a.useRef)(!0),n=Object(a.useState)({loading:!0,rates:null,error:null}),t=Object(T.a)(n,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){var n;if(e.current){var t=function(){var e=Object(O.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ye(),e.prev=1,e.next=4,Ee();case 4:n=e.sent,c({loading:!1,rates:n,error:null}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),c({loading:!1,rates:null,error:e.t0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();n=setInterval(t,1e4),t(),e.current=!1}return function(){ye(),clearInterval(n)}}),[c]),r};function ke(){var e=Object(s.a)(["\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n  border-radius: 5px;\n  padding: 5px;\n"]);return ke=function(){return e},e}function Se(){var e=Object(s.a)(["\n      color: ",";\n    "]);return Se=function(){return e},e}function Pe(){var e=Object(s.a)(["\n  border: none;\n  background-color: transparent;\n  color: ",";\n  padding: 5px 10px;\n\n  ","\n"]);return Pe=function(){return e},e}function ze(){var e=Object(s.a)(["\n  flex: 1;\n  text-align: right;\n"]);return ze=function(){return e},e}function Be(){var e=Object(s.a)(["\n  flex: 1;\n"]);return Be=function(){return e},e}function De(){var e=Object(s.a)(["\n  background-color: ",";\n  height: 70px;\n  padding: 30px 0 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"]);return De=function(){return e},e}function Ae(){var e=Object(s.a)(["\n  background-color: ",";\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n"]);return Ae=function(){return e},e}var Re,Ue,Fe=u.default.div(Ae(),(function(e){return e.theme.colors.primary})),Ne=u.default.div(De(),(function(e){return e.theme.colors.primary})),Ie=u.default.div(Be()),Ve=u.default.div(ze()),Te=u.default.button(Pe(),(function(e){return e.theme.colors.white}),(Re="disabled",Ue=Object(u.css)(Se(),(function(e){return e.theme.colors.light})),function(e){return e[Re]&&Ue})),Ge=u.default.button(ke(),(function(e){return e.theme.colors.primaryActive}),(function(e){return e.theme.colors.white}),(function(e){return e.theme.colors.light}));function Le(){var e=Object(s.a)(["\n  background-color: transparent;\n  color: ",";\n  border: none;\n  outline: none;\n  text-align: right;\n"]);return Le=function(){return e},e}var _e=u.default.input(Le(),(function(e){return e.theme.colors.white})),We=function(e){return e?e.toString():""},Me=Object(a.forwardRef)((function(e,n){var t=e.value,r=e.maxValue,o=e.prefix,i=void 0===o?"":o,u=e.onChange,l=Object(G.a)(e,["value","maxValue","prefix","onChange"]),s=Object(a.useRef)(t),f=Object(a.useState)(We(t)),d=Object(T.a)(f,2),b=d[0],p=d[1],h=Object(a.useCallback)((function(e){var n=e.target.value.replace(i,"");if(function(e){return""===e||/^\d+\.?\d{0,2}$/.test(e)}(n)){var t=Number(n);if(void 0!==r&&t>r)return;p(n),u&&u(Number(t))}}),[i,r,p,u]),m=Object(a.useCallback)((function(){0===Number(b)?p(""):"."===b[b.length-1]&&p(b.substr(0,b.length-1))}),[b]);return Object(a.useEffect)((function(){s.current!==t&&(p(We(t)),s.current=t)}),[s,t]),c.a.createElement(_e,Object.assign({},l,{ref:n,value:""===b?"":"".concat(i).concat(b),onChange:h,onBlur:m}))}));Me.displayName="CurrencyInput";var $e=Me;function Je(){var e=Object(s.a)(["\n  color: ",";\n  font-size: 16px;\n"]);return Je=function(){return e},e}function Ye(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: transparent;\n  padding: 10px 0;\n"]);return Ye=function(){return e},e}function qe(){var e=Object(s.a)(["\n  width: 60%;\n  color: ",";\n  font-size: 36px;\n"]);return qe=function(){return e},e}function He(){var e=Object(s.a)(["\n  width: 40%;\n  color: ",";\n  font-size: 36px;\n  padding-right: 10px;\n"]);return He=function(){return e},e}function Xe(){var e=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 80px;\n"]);return Xe=function(){return e},e}function Ke(){var e=Object(s.a)(["\n  padding: 30px;\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(s.a)(["\n      background-color: #1c4eb3;\n    "]);return Qe=function(){return e},e}function Ze(){var e=Object(s.a)(["\n      background-color: ",";\n      position: relative;\n\n      &::after {\n        position: absolute;\n        left: 50%;\n        bottom: 0;\n        content: '';\n        display: block;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        border-width: 16px 16px 0;\n        border-color: "," transparent\n          transparent;\n        transform: translateX(-50%) translateY(100%);\n      }\n    "]);return Ze=function(){return e},e}function en(){var e=Object(s.a)(["\n  height: 200px;\n\n  ","\n"]);return en=function(){return e},e}var nn=u.default.div(en(),function(e,n){return function(t){return n[t[e]]}}("direction",{from:Object(u.css)(Ze(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),to:Object(u.css)(Qe())})),tn=u.default.div(Ke()),rn=u.default.label(Xe()),an=u.default.div(He(),(function(e){return e.theme.colors.white})),cn=Object(u.default)($e)(qe(),(function(e){return e.theme.colors.white})),on=u.default.div(Ye()),un=u.default.div(Je(),(function(e){return e.theme.colors.light})),ln=function(e){var n=e.direction,t=void 0===n?"from":n,r=e.balance,o=e.rates,i=e.baseCode,u=e.targetCode,l=e.value,s=e.maxValue,f=e.disabled,d=e.onFocus,b=e.onChange,p=e.onCodeChange,h=Object(G.a)(e,["direction","balance","rates","baseCode","targetCode","value","maxValue","disabled","onFocus","onChange","onCodeChange"]),m=Object(a.useCallback)((function(e){p&&p(k[e])}),[p]),g="from"===t,v=S(i);return c.a.createElement(nn,Object.assign({direction:t},h),c.a.createElement(ue.a,{wrapAround:!0,dragging:!1,slideIndex:v,afterSlide:m,renderCenterLeftControls:null,renderCenterRightControls:null},k.map((function(e){var n=e===i;return c.a.createElement(tn,{key:e,active:n},c.a.createElement(rn,null,c.a.createElement(an,null,e),n&&!f&&c.a.createElement(cn,{autoFocus:g&&n,value:l,maxValue:s,prefix:g?"-":"+",onChange:b,onFocus:d})),c.a.createElement(on,null,c.a.createElement(un,null,"You have ",B(e,r[e])),!g&&i!==u&&c.a.createElement(un,null,D(e,u,o))))}))))},sn=function(){var e=Object(l.c)((function(e){return[e.wallet.currentCode,e.wallet.balance]})),n=Object(T.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(t),i=Object(T.a)(o,2),u=i[0],s=i[1],f=Object(a.useState)(function(e){var n=S(e)+1;return n>=k.length&&(n=0),k[n]}(t)),d=Object(T.a)(f,2),b=d[0],p=d[1],h=Object(a.useState)("from"),m=Object(T.a)(h,2),g=m[0],v=m[1],O=Object(a.useState)(0),j=Object(T.a)(O,2),x=j[0],w=j[1],y=Ce(),E=y.rates,C=y.loading,P=y.error,B=Object(l.b)(),A=E?E[b]/E[u]:1,R=r[u],U=E?R*A:0,F="from"===g?x:z(x/A),N="to"===g?x:z(x*A),I=!E||C||P||u===b,V=I||0===F||F>R,G=Object(a.useCallback)((function(e){s(e),w(0)}),[s,w]),L=Object(a.useCallback)((function(e){p(e),w(0)}),[p,w]),_=Object(a.useCallback)((function(){"to"===g&&(v("from"),w(F))}),[g,v,w,F]),W=Object(a.useCallback)((function(){"from"===g&&(v("to"),w(N))}),[g,v,w,N]),M=Object(a.useCallback)((function(){B.wallet.exchange({fromCode:u,fromAmount:F,toCode:b,toAmount:N})}),[B,u,F,b,N]);return c.a.createElement(Fe,null,c.a.createElement(Ne,null,c.a.createElement(Ie,null,c.a.createElement(Te,{onClick:B.wallet.hideExchange},"Cancel")),!I&&c.a.createElement(Ge,null,D(u,b,E)),c.a.createElement(Ve,null,c.a.createElement(Te,{disabled:V,onClick:M},"Exchange"))),c.a.createElement(ln,{direction:"from",balance:r,rates:E,baseCode:u,targetCode:b,value:F,maxValue:R,disabled:I,onFocus:_,onChange:w,onCodeChange:G}),c.a.createElement(ln,{direction:"to",balance:r,rates:E,baseCode:b,targetCode:u,value:N,maxValue:U,disabled:I,onFocus:W,onChange:w,onCodeChange:L}))},fn=function(){var e=Object(l.c)((function(e){return e.wallet.showExchange}));return c.a.createElement(c.a.Fragment,null,c.a.createElement(ve,null),e&&c.a.createElement(sn,null))},dn=function(){return c.a.createElement(l.a,{store:V},c.a.createElement(u.ThemeProvider,{theme:p},c.a.createElement(b,null),c.a.createElement(fn,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(dn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.52294591.chunk.js.map