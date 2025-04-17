(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const u of a)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function n(a){const u={};return a.integrity&&(u.integrity=a.integrity),a.referrerPolicy&&(u.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?u.credentials="include":a.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(a){if(a.ep)return;a.ep=!0;const u=n(a);fetch(a.href,u)}})();function Uy(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gh={exports:{}},Ia={},Qh={exports:{}},ke={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm;function kw(){if(Jm)return ke;Jm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),h=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),R=Symbol.iterator;function N(D){return D===null||typeof D!="object"?null:(D=R&&D[R]||D["@@iterator"],typeof D=="function"?D:null)}var F={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,B={};function z(D,U,fe){this.props=D,this.context=U,this.refs=B,this.updater=fe||F}z.prototype.isReactComponent={},z.prototype.setState=function(D,U){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,U,"setState")},z.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function re(){}re.prototype=z.prototype;function se(D,U,fe){this.props=D,this.context=U,this.refs=B,this.updater=fe||F}var te=se.prototype=new re;te.constructor=se,W(te,z.prototype),te.isPureReactComponent=!0;var de=Array.isArray,Se=Object.prototype.hasOwnProperty,ce={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function T(D,U,fe){var Te,Ie={},Ae=null,xe=null;if(U!=null)for(Te in U.ref!==void 0&&(xe=U.ref),U.key!==void 0&&(Ae=""+U.key),U)Se.call(U,Te)&&!C.hasOwnProperty(Te)&&(Ie[Te]=U[Te]);var Pe=arguments.length-2;if(Pe===1)Ie.children=fe;else if(1<Pe){for(var Ne=Array(Pe),nt=0;nt<Pe;nt++)Ne[nt]=arguments[nt+2];Ie.children=Ne}if(D&&D.defaultProps)for(Te in Pe=D.defaultProps,Pe)Ie[Te]===void 0&&(Ie[Te]=Pe[Te]);return{$$typeof:r,type:D,key:Ae,ref:xe,props:Ie,_owner:ce.current}}function A(D,U){return{$$typeof:r,type:D.type,key:U,ref:D.ref,props:D.props,_owner:D._owner}}function P(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function V(D){var U={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(fe){return U[fe]})}var O=/\/+/g;function S(D,U){return typeof D=="object"&&D!==null&&D.key!=null?V(""+D.key):U.toString(36)}function Je(D,U,fe,Te,Ie){var Ae=typeof D;(Ae==="undefined"||Ae==="boolean")&&(D=null);var xe=!1;if(D===null)xe=!0;else switch(Ae){case"string":case"number":xe=!0;break;case"object":switch(D.$$typeof){case r:case e:xe=!0}}if(xe)return xe=D,Ie=Ie(xe),D=Te===""?"."+S(xe,0):Te,de(Ie)?(fe="",D!=null&&(fe=D.replace(O,"$&/")+"/"),Je(Ie,U,fe,"",function(nt){return nt})):Ie!=null&&(P(Ie)&&(Ie=A(Ie,fe+(!Ie.key||xe&&xe.key===Ie.key?"":(""+Ie.key).replace(O,"$&/")+"/")+D)),U.push(Ie)),1;if(xe=0,Te=Te===""?".":Te+":",de(D))for(var Pe=0;Pe<D.length;Pe++){Ae=D[Pe];var Ne=Te+S(Ae,Pe);xe+=Je(Ae,U,fe,Ne,Ie)}else if(Ne=N(D),typeof Ne=="function")for(D=Ne.call(D),Pe=0;!(Ae=D.next()).done;)Ae=Ae.value,Ne=Te+S(Ae,Pe++),xe+=Je(Ae,U,fe,Ne,Ie);else if(Ae==="object")throw U=String(D),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.");return xe}function wt(D,U,fe){if(D==null)return D;var Te=[],Ie=0;return Je(D,Te,"","",function(Ae){return U.call(fe,Ae,Ie++)}),Te}function Et(D){if(D._status===-1){var U=D._result;U=U(),U.then(function(fe){(D._status===0||D._status===-1)&&(D._status=1,D._result=fe)},function(fe){(D._status===0||D._status===-1)&&(D._status=2,D._result=fe)}),D._status===-1&&(D._status=0,D._result=U)}if(D._status===1)return D._result.default;throw D._result}var $e={current:null},J={transition:null},le={ReactCurrentDispatcher:$e,ReactCurrentBatchConfig:J,ReactCurrentOwner:ce};function Z(){throw Error("act(...) is not supported in production builds of React.")}return ke.Children={map:wt,forEach:function(D,U,fe){wt(D,function(){U.apply(this,arguments)},fe)},count:function(D){var U=0;return wt(D,function(){U++}),U},toArray:function(D){return wt(D,function(U){return U})||[]},only:function(D){if(!P(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},ke.Component=z,ke.Fragment=n,ke.Profiler=a,ke.PureComponent=se,ke.StrictMode=s,ke.Suspense=y,ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ke.act=Z,ke.cloneElement=function(D,U,fe){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Te=W({},D.props),Ie=D.key,Ae=D.ref,xe=D._owner;if(U!=null){if(U.ref!==void 0&&(Ae=U.ref,xe=ce.current),U.key!==void 0&&(Ie=""+U.key),D.type&&D.type.defaultProps)var Pe=D.type.defaultProps;for(Ne in U)Se.call(U,Ne)&&!C.hasOwnProperty(Ne)&&(Te[Ne]=U[Ne]===void 0&&Pe!==void 0?Pe[Ne]:U[Ne])}var Ne=arguments.length-2;if(Ne===1)Te.children=fe;else if(1<Ne){Pe=Array(Ne);for(var nt=0;nt<Ne;nt++)Pe[nt]=arguments[nt+2];Te.children=Pe}return{$$typeof:r,type:D.type,key:Ie,ref:Ae,props:Te,_owner:xe}},ke.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:u,_context:D},D.Consumer=D},ke.createElement=T,ke.createFactory=function(D){var U=T.bind(null,D);return U.type=D,U},ke.createRef=function(){return{current:null}},ke.forwardRef=function(D){return{$$typeof:m,render:D}},ke.isValidElement=P,ke.lazy=function(D){return{$$typeof:E,_payload:{_status:-1,_result:D},_init:Et}},ke.memo=function(D,U){return{$$typeof:_,type:D,compare:U===void 0?null:U}},ke.startTransition=function(D){var U=J.transition;J.transition={};try{D()}finally{J.transition=U}},ke.unstable_act=Z,ke.useCallback=function(D,U){return $e.current.useCallback(D,U)},ke.useContext=function(D){return $e.current.useContext(D)},ke.useDebugValue=function(){},ke.useDeferredValue=function(D){return $e.current.useDeferredValue(D)},ke.useEffect=function(D,U){return $e.current.useEffect(D,U)},ke.useId=function(){return $e.current.useId()},ke.useImperativeHandle=function(D,U,fe){return $e.current.useImperativeHandle(D,U,fe)},ke.useInsertionEffect=function(D,U){return $e.current.useInsertionEffect(D,U)},ke.useLayoutEffect=function(D,U){return $e.current.useLayoutEffect(D,U)},ke.useMemo=function(D,U){return $e.current.useMemo(D,U)},ke.useReducer=function(D,U,fe){return $e.current.useReducer(D,U,fe)},ke.useRef=function(D){return $e.current.useRef(D)},ke.useState=function(D){return $e.current.useState(D)},ke.useSyncExternalStore=function(D,U,fe){return $e.current.useSyncExternalStore(D,U,fe)},ke.useTransition=function(){return $e.current.useTransition()},ke.version="18.3.1",ke}var Zm;function Yf(){return Zm||(Zm=1,Qh.exports=kw()),Qh.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eg;function Pw(){if(eg)return Ia;eg=1;var r=Yf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function h(m,y,_){var E,R={},N=null,F=null;_!==void 0&&(N=""+_),y.key!==void 0&&(N=""+y.key),y.ref!==void 0&&(F=y.ref);for(E in y)s.call(y,E)&&!u.hasOwnProperty(E)&&(R[E]=y[E]);if(m&&m.defaultProps)for(E in y=m.defaultProps,y)R[E]===void 0&&(R[E]=y[E]);return{$$typeof:e,type:m,key:N,ref:F,props:R,_owner:a.current}}return Ia.Fragment=n,Ia.jsx=h,Ia.jsxs=h,Ia}var tg;function xw(){return tg||(tg=1,Gh.exports=Pw()),Gh.exports}var oe=xw(),du={},Yh={exports:{}},sn={},Xh={exports:{}},Jh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ng;function Vw(){return ng||(ng=1,function(r){function e(J,le){var Z=J.length;J.push(le);e:for(;0<Z;){var D=Z-1>>>1,U=J[D];if(0<a(U,le))J[D]=le,J[Z]=U,Z=D;else break e}}function n(J){return J.length===0?null:J[0]}function s(J){if(J.length===0)return null;var le=J[0],Z=J.pop();if(Z!==le){J[0]=Z;e:for(var D=0,U=J.length,fe=U>>>1;D<fe;){var Te=2*(D+1)-1,Ie=J[Te],Ae=Te+1,xe=J[Ae];if(0>a(Ie,Z))Ae<U&&0>a(xe,Ie)?(J[D]=xe,J[Ae]=Z,D=Ae):(J[D]=Ie,J[Te]=Z,D=Te);else if(Ae<U&&0>a(xe,Z))J[D]=xe,J[Ae]=Z,D=Ae;else break e}}return le}function a(J,le){var Z=J.sortIndex-le.sortIndex;return Z!==0?Z:J.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var h=Date,m=h.now();r.unstable_now=function(){return h.now()-m}}var y=[],_=[],E=1,R=null,N=3,F=!1,W=!1,B=!1,z=typeof setTimeout=="function"?setTimeout:null,re=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function te(J){for(var le=n(_);le!==null;){if(le.callback===null)s(_);else if(le.startTime<=J)s(_),le.sortIndex=le.expirationTime,e(y,le);else break;le=n(_)}}function de(J){if(B=!1,te(J),!W)if(n(y)!==null)W=!0,Et(Se);else{var le=n(_);le!==null&&$e(de,le.startTime-J)}}function Se(J,le){W=!1,B&&(B=!1,re(T),T=-1),F=!0;var Z=N;try{for(te(le),R=n(y);R!==null&&(!(R.expirationTime>le)||J&&!V());){var D=R.callback;if(typeof D=="function"){R.callback=null,N=R.priorityLevel;var U=D(R.expirationTime<=le);le=r.unstable_now(),typeof U=="function"?R.callback=U:R===n(y)&&s(y),te(le)}else s(y);R=n(y)}if(R!==null)var fe=!0;else{var Te=n(_);Te!==null&&$e(de,Te.startTime-le),fe=!1}return fe}finally{R=null,N=Z,F=!1}}var ce=!1,C=null,T=-1,A=5,P=-1;function V(){return!(r.unstable_now()-P<A)}function O(){if(C!==null){var J=r.unstable_now();P=J;var le=!0;try{le=C(!0,J)}finally{le?S():(ce=!1,C=null)}}else ce=!1}var S;if(typeof se=="function")S=function(){se(O)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,wt=Je.port2;Je.port1.onmessage=O,S=function(){wt.postMessage(null)}}else S=function(){z(O,0)};function Et(J){C=J,ce||(ce=!0,S())}function $e(J,le){T=z(function(){J(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(J){J.callback=null},r.unstable_continueExecution=function(){W||F||(W=!0,Et(Se))},r.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<J?Math.floor(1e3/J):5},r.unstable_getCurrentPriorityLevel=function(){return N},r.unstable_getFirstCallbackNode=function(){return n(y)},r.unstable_next=function(J){switch(N){case 1:case 2:case 3:var le=3;break;default:le=N}var Z=N;N=le;try{return J()}finally{N=Z}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(J,le){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var Z=N;N=J;try{return le()}finally{N=Z}},r.unstable_scheduleCallback=function(J,le,Z){var D=r.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?D+Z:D):Z=D,J){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Z+U,J={id:E++,callback:le,priorityLevel:J,startTime:Z,expirationTime:U,sortIndex:-1},Z>D?(J.sortIndex=Z,e(_,J),n(y)===null&&J===n(_)&&(B?(re(T),T=-1):B=!0,$e(de,Z-D))):(J.sortIndex=U,e(y,J),W||F||(W=!0,Et(Se))),J},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(J){var le=N;return function(){var Z=N;N=le;try{return J.apply(this,arguments)}finally{N=Z}}}}(Jh)),Jh}var rg;function Dw(){return rg||(rg=1,Xh.exports=Vw()),Xh.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Nw(){if(ig)return sn;ig=1;var r=Yf(),e=Dw();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function u(t,i){h(t,i),h(t+"Capture",i)}function h(t,i){for(a[t]=i,t=0;t<i.length;t++)s.add(i[t])}var m=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y=Object.prototype.hasOwnProperty,_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,E={},R={};function N(t){return y.call(R,t)?!0:y.call(E,t)?!1:_.test(t)?R[t]=!0:(E[t]=!0,!1)}function F(t,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function W(t,i,o,c){if(i===null||typeof i>"u"||F(t,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function B(t,i,o,c,f,p,v){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=v}var z={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){z[t]=new B(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];z[i]=new B(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){z[t]=new B(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){z[t]=new B(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){z[t]=new B(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){z[t]=new B(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){z[t]=new B(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){z[t]=new B(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){z[t]=new B(t,5,!1,t.toLowerCase(),null,!1,!1)});var re=/[\-:]([a-z])/g;function se(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(re,se);z[i]=new B(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(re,se);z[i]=new B(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(re,se);z[i]=new B(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){z[t]=new B(t,1,!1,t.toLowerCase(),null,!1,!1)}),z.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){z[t]=new B(t,1,!1,t.toLowerCase(),null,!0,!0)});function te(t,i,o,c){var f=z.hasOwnProperty(i)?z[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(W(i,o,f,c)&&(o=null),c||f===null?N(i)&&(o===null?t.removeAttribute(i):t.setAttribute(i,""+o)):f.mustUseProperty?t[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?t.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?t.setAttributeNS(c,i,o):t.setAttribute(i,o))))}var de=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Se=Symbol.for("react.element"),ce=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),P=Symbol.for("react.provider"),V=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),Je=Symbol.for("react.suspense_list"),wt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),$e=Symbol.for("react.offscreen"),J=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=J&&t[J]||t["@@iterator"],typeof t=="function"?t:null)}var Z=Object.assign,D;function U(t){if(D===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);D=i&&i[1]||""}return`
`+D+t}var fe=!1;function Te(t,i){if(!t||fe)return"";fe=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch($){var c=$}Reflect.construct(t,[],i)}else{try{i.call()}catch($){c=$}t.call(i.prototype)}else{try{throw Error()}catch($){c=$}t()}}catch($){if($&&c&&typeof $.stack=="string"){for(var f=$.stack.split(`
`),p=c.stack.split(`
`),v=f.length-1,I=p.length-1;1<=v&&0<=I&&f[v]!==p[I];)I--;for(;1<=v&&0<=I;v--,I--)if(f[v]!==p[I]){if(v!==1||I!==1)do if(v--,I--,0>I||f[v]!==p[I]){var k=`
`+f[v].replace(" at new "," at ");return t.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",t.displayName)),k}while(1<=v&&0<=I);break}}}finally{fe=!1,Error.prepareStackTrace=o}return(t=t?t.displayName||t.name:"")?U(t):""}function Ie(t){switch(t.tag){case 5:return U(t.type);case 16:return U("Lazy");case 13:return U("Suspense");case 19:return U("SuspenseList");case 0:case 2:case 15:return t=Te(t.type,!1),t;case 11:return t=Te(t.type.render,!1),t;case 1:return t=Te(t.type,!0),t;default:return""}}function Ae(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case ce:return"Portal";case A:return"Profiler";case T:return"StrictMode";case S:return"Suspense";case Je:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case V:return(t.displayName||"Context")+".Consumer";case P:return(t._context.displayName||"Context")+".Provider";case O:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wt:return i=t.displayName||null,i!==null?i:Ae(t.type)||"Memo";case Et:i=t._payload,t=t._init;try{return Ae(t(i))}catch{}}return null}function xe(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function nt(t){var i=Ne(t)?"checked":"value",o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),c=""+t[i];if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,p=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(v){c=""+v,p.call(this,v)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(v){c=""+v},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Yt(t){t._valueTracker||(t._valueTracker=nt(t))}function qt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return t&&(c=Ne(t)?t.checked?"true":"false":t.value),t=c,t!==o?(i.setValue(t),!0):!1}function Mr(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ii(t,i){var o=i.checked;return Z({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??t._wrapperState.initialChecked})}function fs(t,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Pe(i.value!=null?i.value:o),t._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Po(t,i){i=i.checked,i!=null&&te(t,"checked",i,!1)}function xo(t,i){Po(t,i);var o=Pe(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&t.value===""||t.value!=o)&&(t.value=""+o):t.value!==""+o&&(t.value=""+o);else if(c==="submit"||c==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?ds(t,i.type,o):i.hasOwnProperty("defaultValue")&&ds(t,i.type,Pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function Ja(t,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,o||i===t.value||(t.value=i),t.defaultValue=i}o=t.name,o!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,o!==""&&(t.name=o)}function ds(t,i,o){(i!=="number"||Mr(t.ownerDocument)!==t)&&(o==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+o&&(t.defaultValue=""+o))}var fr=Array.isArray;function dr(t,i,o,c){if(t=t.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<t.length;o++)f=i.hasOwnProperty("$"+t[o].value),t[o].selected!==f&&(t[o].selected=f),f&&c&&(t[o].defaultSelected=!0)}else{for(o=""+Pe(o),i=null,f=0;f<t.length;f++){if(t[f].value===o){t[f].selected=!0,c&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Vo(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return Z({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ps(t,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(n(92));if(fr(o)){if(1<o.length)throw Error(n(93));o=o[0]}i=o}i==null&&(i=""),o=i}t._wrapperState={initialValue:Pe(o)}}function ms(t,i){var o=Pe(i.value),c=Pe(i.defaultValue);o!=null&&(o=""+o,o!==t.value&&(t.value=o),i.defaultValue==null&&t.defaultValue!==o&&(t.defaultValue=o)),c!=null&&(t.defaultValue=""+c)}function Do(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function dt(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pt(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?dt(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var pr,No=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return t(i,o,c,f)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(pr=pr||document.createElement("div"),pr.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=pr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function br(t,i){if(i){var o=t.firstChild;if(o&&o===t.lastChild&&o.nodeType===3){o.nodeValue=i;return}}t.textContent=i}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ai=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(t){Ai.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Si[i]=Si[t]})});function Oo(t,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Si.hasOwnProperty(t)&&Si[t]?(""+i).trim():i+"px"}function Lo(t,i){t=t.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=Oo(o,i[o],c);o==="float"&&(o="cssFloat"),c?t.setProperty(o,f):t[o]=f}}var Mo=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bo(t,i){if(i){if(Mo[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Fo(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ci=null;function gs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ys=null,yn=null,Gn=null;function vs(t){if(t=la(t)){if(typeof ys!="function")throw Error(n(280));var i=t.stateNode;i&&(i=kl(i),ys(t.stateNode,t.type,i))}}function Qn(t){yn?Gn?Gn.push(t):Gn=[t]:yn=t}function $o(){if(yn){var t=yn,i=Gn;if(Gn=yn=null,vs(t),i)for(t=0;t<i.length;t++)vs(i[t])}}function Ri(t,i){return t(i)}function jo(){}var mr=!1;function Uo(t,i,o){if(mr)return t(i,o);mr=!0;try{return Ri(t,i,o)}finally{mr=!1,(yn!==null||Gn!==null)&&(jo(),$o())}}function ot(t,i){var o=t.stateNode;if(o===null)return null;var c=kl(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(t=t.type,c=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!c;break e;default:t=!1}if(t)return null;if(o&&typeof o!="function")throw Error(n(231,i,typeof o));return o}var _s=!1;if(m)try{var xn={};Object.defineProperty(xn,"passive",{get:function(){_s=!0}}),window.addEventListener("test",xn,xn),window.removeEventListener("test",xn,xn)}catch{_s=!1}function ki(t,i,o,c,f,p,v,I,k){var $=Array.prototype.slice.call(arguments,3);try{i.apply(o,$)}catch(K){this.onError(K)}}var Pi=!1,ws=null,Vn=!1,zo=null,Tc={onError:function(t){Pi=!0,ws=t}};function Es(t,i,o,c,f,p,v,I,k){Pi=!1,ws=null,ki.apply(Tc,arguments)}function Za(t,i,o,c,f,p,v,I,k){if(Es.apply(this,arguments),Pi){if(Pi){var $=ws;Pi=!1,ws=null}else throw Error(n(198));Vn||(Vn=!0,zo=$)}}function Dn(t){var i=t,o=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(o=i.return),t=i.return;while(t)}return i.tag===3?o:null}function xi(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function Nn(t){if(Dn(t)!==t)throw Error(n(188))}function el(t){var i=t.alternate;if(!i){if(i=Dn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var o=t,c=i;;){var f=o.return;if(f===null)break;var p=f.alternate;if(p===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===o)return Nn(f),t;if(p===c)return Nn(f),i;p=p.sibling}throw Error(n(188))}if(o.return!==c.return)o=f,c=p;else{for(var v=!1,I=f.child;I;){if(I===o){v=!0,o=f,c=p;break}if(I===c){v=!0,c=f,o=p;break}I=I.sibling}if(!v){for(I=p.child;I;){if(I===o){v=!0,o=p,c=f;break}if(I===c){v=!0,c=p,o=f;break}I=I.sibling}if(!v)throw Error(n(189))}}if(o.alternate!==c)throw Error(n(190))}if(o.tag!==3)throw Error(n(188));return o.stateNode.current===o?t:i}function Bo(t){return t=el(t),t!==null?Ts(t):null}function Ts(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=Ts(t);if(i!==null)return i;t=t.sibling}return null}var Is=e.unstable_scheduleCallback,Ho=e.unstable_cancelCallback,tl=e.unstable_shouldYield,Ic=e.unstable_requestPaint,qe=e.unstable_now,nl=e.unstable_getCurrentPriorityLevel,Vi=e.unstable_ImmediatePriority,Fr=e.unstable_UserBlockingPriority,vn=e.unstable_NormalPriority,qo=e.unstable_LowPriority,rl=e.unstable_IdlePriority,Di=null,ln=null;function il(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Di,t,void 0,(t.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:ol,Wo=Math.log,sl=Math.LN2;function ol(t){return t>>>=0,t===0?32:31-(Wo(t)/sl|0)|0}var Ss=64,As=4194304;function $r(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ni(t,i){var o=t.pendingLanes;if(o===0)return 0;var c=0,f=t.suspendedLanes,p=t.pingedLanes,v=o&268435455;if(v!==0){var I=v&~f;I!==0?c=$r(I):(p&=v,p!==0&&(c=$r(p)))}else v=o&~f,v!==0?c=$r(v):p!==0&&(c=$r(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=c;0<i;)o=31-Wt(i),f=1<<o,c|=t[o],i&=~f;return c}function Sc(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(t,i){for(var o=t.suspendedLanes,c=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var v=31-Wt(p),I=1<<v,k=f[v];k===-1?((I&o)===0||(I&c)!==0)&&(f[v]=Sc(I,i)):k<=i&&(t.expiredLanes|=I),p&=~I}}function un(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Oi(){var t=Ss;return Ss<<=1,(Ss&4194240)===0&&(Ss=64),t}function jr(t){for(var i=[],o=0;31>o;o++)i.push(t);return i}function Ur(t,i,o){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Wt(i),t[i]=o}function He(t,i){var o=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var c=t.eventTimes;for(t=t.expirationTimes;0<o;){var f=31-Wt(o),p=1<<f;i[f]=0,c[f]=-1,t[f]=-1,o&=~p}}function zr(t,i){var o=t.entangledLanes|=i;for(t=t.entanglements;o;){var c=31-Wt(o),f=1<<c;f&i|t[c]&i&&(t[c]|=i),o&=~f}}var De=0;function Br(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var al,Cs,ll,ul,cl,Ko=!1,Yn=[],Pt=null,On=null,Ln=null,Hr=new Map,_n=new Map,Xn=[],Ac="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hl(t,i){switch(t){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Hr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":_n.delete(i.pointerId)}}function Xt(t,i,o,c,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[f]},i!==null&&(i=la(i),i!==null&&Cs(i)),t):(t.eventSystemFlags|=c,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Cc(t,i,o,c,f){switch(i){case"focusin":return Pt=Xt(Pt,t,i,o,c,f),!0;case"dragenter":return On=Xt(On,t,i,o,c,f),!0;case"mouseover":return Ln=Xt(Ln,t,i,o,c,f),!0;case"pointerover":var p=f.pointerId;return Hr.set(p,Xt(Hr.get(p)||null,t,i,o,c,f)),!0;case"gotpointercapture":return p=f.pointerId,_n.set(p,Xt(_n.get(p)||null,t,i,o,c,f)),!0}return!1}function fl(t){var i=$i(t.target);if(i!==null){var o=Dn(i);if(o!==null){if(i=o.tag,i===13){if(i=xi(o),i!==null){t.blockedOn=i,cl(t.priority,function(){ll(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){t.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}t.blockedOn=null}function yr(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var o=Rs(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(o===null){o=t.nativeEvent;var c=new o.constructor(o.type,o);Ci=c,o.target.dispatchEvent(c),Ci=null}else return i=la(o),i!==null&&Cs(i),t.blockedOn=o,!1;i.shift()}return!0}function Li(t,i,o){yr(t)&&o.delete(i)}function dl(){Ko=!1,Pt!==null&&yr(Pt)&&(Pt=null),On!==null&&yr(On)&&(On=null),Ln!==null&&yr(Ln)&&(Ln=null),Hr.forEach(Li),_n.forEach(Li)}function Mn(t,i){t.blockedOn===i&&(t.blockedOn=null,Ko||(Ko=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dl)))}function bn(t){function i(f){return Mn(f,t)}if(0<Yn.length){Mn(Yn[0],t);for(var o=1;o<Yn.length;o++){var c=Yn[o];c.blockedOn===t&&(c.blockedOn=null)}}for(Pt!==null&&Mn(Pt,t),On!==null&&Mn(On,t),Ln!==null&&Mn(Ln,t),Hr.forEach(i),_n.forEach(i),o=0;o<Xn.length;o++)c=Xn[o],c.blockedOn===t&&(c.blockedOn=null);for(;0<Xn.length&&(o=Xn[0],o.blockedOn===null);)fl(o),o.blockedOn===null&&Xn.shift()}var vr=de.ReactCurrentBatchConfig,qr=!0;function Ye(t,i,o,c){var f=De,p=vr.transition;vr.transition=null;try{De=1,Go(t,i,o,c)}finally{De=f,vr.transition=p}}function Rc(t,i,o,c){var f=De,p=vr.transition;vr.transition=null;try{De=4,Go(t,i,o,c)}finally{De=f,vr.transition=p}}function Go(t,i,o,c){if(qr){var f=Rs(t,i,o,c);if(f===null)Fc(t,i,c,Mi,o),hl(t,c);else if(Cc(f,t,i,o,c))c.stopPropagation();else if(hl(t,c),i&4&&-1<Ac.indexOf(t)){for(;f!==null;){var p=la(f);if(p!==null&&al(p),p=Rs(t,i,o,c),p===null&&Fc(t,i,c,Mi,o),p===f)break;f=p}f!==null&&c.stopPropagation()}else Fc(t,i,c,null,o)}}var Mi=null;function Rs(t,i,o,c){if(Mi=null,t=gs(c),t=$i(t),t!==null)if(i=Dn(t),i===null)t=null;else if(o=i.tag,o===13){if(t=xi(i),t!==null)return t;t=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return Mi=t,null}function Qo(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nl()){case Vi:return 1;case Fr:return 4;case vn:case qo:return 16;case rl:return 536870912;default:return 16}default:return 16}}var cn=null,ks=null,Jt=null;function Yo(){if(Jt)return Jt;var t,i=ks,o=i.length,c,f="value"in cn?cn.value:cn.textContent,p=f.length;for(t=0;t<o&&i[t]===f[t];t++);var v=o-t;for(c=1;c<=v&&i[o-c]===f[p-c];c++);return Jt=f.slice(t,1<c?1-c:void 0)}function Ps(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function Jn(){return!0}function Xo(){return!1}function xt(t){function i(o,c,f,p,v){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=p,this.target=v,this.currentTarget=null;for(var I in t)t.hasOwnProperty(I)&&(o=t[I],this[I]=o?o(p):p[I]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Jn:Xo,this.isPropagationStopped=Xo,this}return Z(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Jn)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Jn)},persist:function(){},isPersistent:Jn}),i}var Fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xs=xt(Fn),Zn=Z({},Fn,{view:0,detail:0}),kc=xt(Zn),Vs,_r,Wr,bi=Z({},Zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Wr&&(Wr&&t.type==="mousemove"?(Vs=t.screenX-Wr.screenX,_r=t.screenY-Wr.screenY):_r=Vs=0,Wr=t),Vs)},movementY:function(t){return"movementY"in t?t.movementY:_r}}),Ds=xt(bi),Jo=Z({},bi,{dataTransfer:0}),pl=xt(Jo),Ns=Z({},Zn,{relatedTarget:0}),Os=xt(Ns),ml=Z({},Fn,{animationName:0,elapsedTime:0,pseudoElement:0}),wr=xt(ml),gl=Z({},Fn,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yl=xt(gl),vl=Z({},Fn,{data:0}),Zo=xt(vl),Ls={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kt={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_l={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wl(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=_l[t])?!!i[t]:!1}function er(){return wl}var l=Z({},Zn,{key:function(t){if(t.key){var i=Ls[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Ps(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Kt[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(t){return t.type==="keypress"?Ps(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ps(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),d=xt(l),g=Z({},bi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),w=xt(g),L=Z({},Zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er}),j=xt(L),X=Z({},Fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Be=xt(X),mt=Z({},bi,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Oe=xt(mt),Tt=[9,13,27,32],ut=m&&"CompositionEvent"in window,wn=null;m&&"documentMode"in document&&(wn=document.documentMode);var hn=m&&"TextEvent"in window&&!wn,Fi=m&&(!ut||wn&&8<wn&&11>=wn),Ms=" ",Wd=!1;function Kd(t,i){switch(t){case"keyup":return Tt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bs=!1;function A0(t,i){switch(t){case"compositionend":return Gd(i);case"keypress":return i.which!==32?null:(Wd=!0,Ms);case"textInput":return t=i.data,t===Ms&&Wd?null:t;default:return null}}function C0(t,i){if(bs)return t==="compositionend"||!ut&&Kd(t,i)?(t=Yo(),Jt=ks=cn=null,bs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Fi&&i.locale!=="ko"?null:i.data;default:return null}}var R0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!R0[t.type]:i==="textarea"}function Yd(t,i,o,c){Qn(c),i=Al(i,"onChange"),0<i.length&&(o=new xs("onChange","change",null,o,c),t.push({event:o,listeners:i}))}var ea=null,ta=null;function k0(t){pp(t,0)}function El(t){var i=zs(t);if(qt(i))return t}function P0(t,i){if(t==="change")return i}var Xd=!1;if(m){var Pc;if(m){var xc="oninput"in document;if(!xc){var Jd=document.createElement("div");Jd.setAttribute("oninput","return;"),xc=typeof Jd.oninput=="function"}Pc=xc}else Pc=!1;Xd=Pc&&(!document.documentMode||9<document.documentMode)}function Zd(){ea&&(ea.detachEvent("onpropertychange",ep),ta=ea=null)}function ep(t){if(t.propertyName==="value"&&El(ta)){var i=[];Yd(i,ta,t,gs(t)),Uo(k0,i)}}function x0(t,i,o){t==="focusin"?(Zd(),ea=i,ta=o,ea.attachEvent("onpropertychange",ep)):t==="focusout"&&Zd()}function V0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(ta)}function D0(t,i){if(t==="click")return El(i)}function N0(t,i){if(t==="input"||t==="change")return El(i)}function O0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var $n=typeof Object.is=="function"?Object.is:O0;function na(t,i){if($n(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var o=Object.keys(t),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!y.call(i,f)||!$n(t[f],i[f]))return!1}return!0}function tp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function np(t,i){var o=tp(t);t=0;for(var c;o;){if(o.nodeType===3){if(c=t+o.textContent.length,t<=i&&c>=i)return{node:o,offset:i-t};t=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tp(o)}}function rp(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?rp(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function ip(){for(var t=window,i=Mr();i instanceof t.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)t=i.contentWindow;else break;i=Mr(t.document)}return i}function Vc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function L0(t){var i=ip(),o=t.focusedElem,c=t.selectionRange;if(i!==o&&o&&o.ownerDocument&&rp(o.ownerDocument.documentElement,o)){if(c!==null&&Vc(o)){if(i=c.start,t=c.end,t===void 0&&(t=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(t,o.value.length);else if(t=(i=o.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=o.textContent.length,p=Math.min(c.start,f);c=c.end===void 0?p:Math.min(c.end,f),!t.extend&&p>c&&(f=c,c=p,p=f),f=np(o,p);var v=np(o,c);f&&v&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==v.node||t.focusOffset!==v.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>c?(t.addRange(i),t.extend(v.node,v.offset)):(i.setEnd(v.node,v.offset),t.addRange(i)))}}for(i=[],t=o;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)t=i[o],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var M0=m&&"documentMode"in document&&11>=document.documentMode,Fs=null,Dc=null,ra=null,Nc=!1;function sp(t,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Nc||Fs==null||Fs!==Mr(c)||(c=Fs,"selectionStart"in c&&Vc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ra&&na(ra,c)||(ra=c,c=Al(Dc,"onSelect"),0<c.length&&(i=new xs("onSelect","select",null,i,o),t.push({event:i,listeners:c}),i.target=Fs)))}function Tl(t,i){var o={};return o[t.toLowerCase()]=i.toLowerCase(),o["Webkit"+t]="webkit"+i,o["Moz"+t]="moz"+i,o}var $s={animationend:Tl("Animation","AnimationEnd"),animationiteration:Tl("Animation","AnimationIteration"),animationstart:Tl("Animation","AnimationStart"),transitionend:Tl("Transition","TransitionEnd")},Oc={},op={};m&&(op=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Il(t){if(Oc[t])return Oc[t];if(!$s[t])return t;var i=$s[t],o;for(o in i)if(i.hasOwnProperty(o)&&o in op)return Oc[t]=i[o];return t}var ap=Il("animationend"),lp=Il("animationiteration"),up=Il("animationstart"),cp=Il("transitionend"),hp=new Map,fp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Kr(t,i){hp.set(t,i),u(i,[t])}for(var Lc=0;Lc<fp.length;Lc++){var Mc=fp[Lc],b0=Mc.toLowerCase(),F0=Mc[0].toUpperCase()+Mc.slice(1);Kr(b0,"on"+F0)}Kr(ap,"onAnimationEnd"),Kr(lp,"onAnimationIteration"),Kr(up,"onAnimationStart"),Kr("dblclick","onDoubleClick"),Kr("focusin","onFocus"),Kr("focusout","onBlur"),Kr(cp,"onTransitionEnd"),h("onMouseEnter",["mouseout","mouseover"]),h("onMouseLeave",["mouseout","mouseover"]),h("onPointerEnter",["pointerout","pointerover"]),h("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ia));function dp(t,i,o){var c=t.type||"unknown-event";t.currentTarget=o,Za(c,i,void 0,t),t.currentTarget=null}function pp(t,i){i=(i&4)!==0;for(var o=0;o<t.length;o++){var c=t[o],f=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var v=c.length-1;0<=v;v--){var I=c[v],k=I.instance,$=I.currentTarget;if(I=I.listener,k!==p&&f.isPropagationStopped())break e;dp(f,I,$),p=k}else for(v=0;v<c.length;v++){if(I=c[v],k=I.instance,$=I.currentTarget,I=I.listener,k!==p&&f.isPropagationStopped())break e;dp(f,I,$),p=k}}}if(Vn)throw t=zo,Vn=!1,zo=null,t}function Ke(t,i){var o=i[Hc];o===void 0&&(o=i[Hc]=new Set);var c=t+"__bubble";o.has(c)||(mp(i,t,2,!1),o.add(c))}function bc(t,i,o){var c=0;i&&(c|=4),mp(o,t,c,i)}var Sl="_reactListening"+Math.random().toString(36).slice(2);function sa(t){if(!t[Sl]){t[Sl]=!0,s.forEach(function(o){o!=="selectionchange"&&($0.has(o)||bc(o,!1,t),bc(o,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Sl]||(i[Sl]=!0,bc("selectionchange",!1,i))}}function mp(t,i,o,c){switch(Qo(i)){case 1:var f=Ye;break;case 4:f=Rc;break;default:f=Go}o=f.bind(null,i,o,t),f=void 0,!_s||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?t.addEventListener(i,o,{capture:!0,passive:f}):t.addEventListener(i,o,!0):f!==void 0?t.addEventListener(i,o,{passive:f}):t.addEventListener(i,o,!1)}function Fc(t,i,o,c,f){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var v=c.tag;if(v===3||v===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(v===4)for(v=c.return;v!==null;){var k=v.tag;if((k===3||k===4)&&(k=v.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;v=v.return}for(;I!==null;){if(v=$i(I),v===null)return;if(k=v.tag,k===5||k===6){c=p=v;continue e}I=I.parentNode}}c=c.return}Uo(function(){var $=p,K=gs(o),G=[];e:{var q=hp.get(t);if(q!==void 0){var ee=xs,ae=t;switch(t){case"keypress":if(Ps(o)===0)break e;case"keydown":case"keyup":ee=d;break;case"focusin":ae="focus",ee=Os;break;case"focusout":ae="blur",ee=Os;break;case"beforeblur":case"afterblur":ee=Os;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ee=Ds;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ee=pl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ee=j;break;case ap:case lp:case up:ee=wr;break;case cp:ee=Be;break;case"scroll":ee=kc;break;case"wheel":ee=Oe;break;case"copy":case"cut":case"paste":ee=yl;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ee=w}var ue=(i&4)!==0,at=!ue&&t==="scroll",M=ue?q!==null?q+"Capture":null:q;ue=[];for(var x=$,b;x!==null;){b=x;var Y=b.stateNode;if(b.tag===5&&Y!==null&&(b=Y,M!==null&&(Y=ot(x,M),Y!=null&&ue.push(oa(x,Y,b)))),at)break;x=x.return}0<ue.length&&(q=new ee(q,ae,null,o,K),G.push({event:q,listeners:ue}))}}if((i&7)===0){e:{if(q=t==="mouseover"||t==="pointerover",ee=t==="mouseout"||t==="pointerout",q&&o!==Ci&&(ae=o.relatedTarget||o.fromElement)&&($i(ae)||ae[Er]))break e;if((ee||q)&&(q=K.window===K?K:(q=K.ownerDocument)?q.defaultView||q.parentWindow:window,ee?(ae=o.relatedTarget||o.toElement,ee=$,ae=ae?$i(ae):null,ae!==null&&(at=Dn(ae),ae!==at||ae.tag!==5&&ae.tag!==6)&&(ae=null)):(ee=null,ae=$),ee!==ae)){if(ue=Ds,Y="onMouseLeave",M="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(ue=w,Y="onPointerLeave",M="onPointerEnter",x="pointer"),at=ee==null?q:zs(ee),b=ae==null?q:zs(ae),q=new ue(Y,x+"leave",ee,o,K),q.target=at,q.relatedTarget=b,Y=null,$i(K)===$&&(ue=new ue(M,x+"enter",ae,o,K),ue.target=b,ue.relatedTarget=at,Y=ue),at=Y,ee&&ae)t:{for(ue=ee,M=ae,x=0,b=ue;b;b=js(b))x++;for(b=0,Y=M;Y;Y=js(Y))b++;for(;0<x-b;)ue=js(ue),x--;for(;0<b-x;)M=js(M),b--;for(;x--;){if(ue===M||M!==null&&ue===M.alternate)break t;ue=js(ue),M=js(M)}ue=null}else ue=null;ee!==null&&gp(G,q,ee,ue,!1),ae!==null&&at!==null&&gp(G,at,ae,ue,!0)}}e:{if(q=$?zs($):window,ee=q.nodeName&&q.nodeName.toLowerCase(),ee==="select"||ee==="input"&&q.type==="file")var he=P0;else if(Qd(q))if(Xd)he=N0;else{he=V0;var pe=x0}else(ee=q.nodeName)&&ee.toLowerCase()==="input"&&(q.type==="checkbox"||q.type==="radio")&&(he=D0);if(he&&(he=he(t,$))){Yd(G,he,o,K);break e}pe&&pe(t,q,$),t==="focusout"&&(pe=q._wrapperState)&&pe.controlled&&q.type==="number"&&ds(q,"number",q.value)}switch(pe=$?zs($):window,t){case"focusin":(Qd(pe)||pe.contentEditable==="true")&&(Fs=pe,Dc=$,ra=null);break;case"focusout":ra=Dc=Fs=null;break;case"mousedown":Nc=!0;break;case"contextmenu":case"mouseup":case"dragend":Nc=!1,sp(G,o,K);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":sp(G,o,K)}var me;if(ut)e:{switch(t){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else bs?Kd(t,o)&&(ve="onCompositionEnd"):t==="keydown"&&o.keyCode===229&&(ve="onCompositionStart");ve&&(Fi&&o.locale!=="ko"&&(bs||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&bs&&(me=Yo()):(cn=K,ks="value"in cn?cn.value:cn.textContent,bs=!0)),pe=Al($,ve),0<pe.length&&(ve=new Zo(ve,t,null,o,K),G.push({event:ve,listeners:pe}),me?ve.data=me:(me=Gd(o),me!==null&&(ve.data=me)))),(me=hn?A0(t,o):C0(t,o))&&($=Al($,"onBeforeInput"),0<$.length&&(K=new Zo("onBeforeInput","beforeinput",null,o,K),G.push({event:K,listeners:$}),K.data=me))}pp(G,i)})}function oa(t,i,o){return{instance:t,listener:i,currentTarget:o}}function Al(t,i){for(var o=i+"Capture",c=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=ot(t,o),p!=null&&c.unshift(oa(t,p,f)),p=ot(t,i),p!=null&&c.push(oa(t,p,f))),t=t.return}return c}function js(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function gp(t,i,o,c,f){for(var p=i._reactName,v=[];o!==null&&o!==c;){var I=o,k=I.alternate,$=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&$!==null&&(I=$,f?(k=ot(o,p),k!=null&&v.unshift(oa(o,k,I))):f||(k=ot(o,p),k!=null&&v.push(oa(o,k,I)))),o=o.return}v.length!==0&&t.push({event:i,listeners:v})}var j0=/\r\n?/g,U0=/\u0000|\uFFFD/g;function yp(t){return(typeof t=="string"?t:""+t).replace(j0,`
`).replace(U0,"")}function Cl(t,i,o){if(i=yp(i),yp(t)!==i&&o)throw Error(n(425))}function Rl(){}var $c=null,jc=null;function Uc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zc=typeof setTimeout=="function"?setTimeout:void 0,z0=typeof clearTimeout=="function"?clearTimeout:void 0,vp=typeof Promise=="function"?Promise:void 0,B0=typeof queueMicrotask=="function"?queueMicrotask:typeof vp<"u"?function(t){return vp.resolve(null).then(t).catch(H0)}:zc;function H0(t){setTimeout(function(){throw t})}function Bc(t,i){var o=i,c=0;do{var f=o.nextSibling;if(t.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){t.removeChild(f),bn(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);bn(i)}function Gr(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function _p(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return t;i--}else o==="/$"&&i++}t=t.previousSibling}return null}var Us=Math.random().toString(36).slice(2),tr="__reactFiber$"+Us,aa="__reactProps$"+Us,Er="__reactContainer$"+Us,Hc="__reactEvents$"+Us,q0="__reactListeners$"+Us,W0="__reactHandles$"+Us;function $i(t){var i=t[tr];if(i)return i;for(var o=t.parentNode;o;){if(i=o[Er]||o[tr]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(t=_p(t);t!==null;){if(o=t[tr])return o;t=_p(t)}return i}t=o,o=t.parentNode}return null}function la(t){return t=t[tr]||t[Er],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function kl(t){return t[aa]||null}var qc=[],Bs=-1;function Qr(t){return{current:t}}function Ge(t){0>Bs||(t.current=qc[Bs],qc[Bs]=null,Bs--)}function We(t,i){Bs++,qc[Bs]=t.current,t.current=i}var Yr={},bt=Qr(Yr),Zt=Qr(!1),ji=Yr;function Hs(t,i){var o=t.type.contextTypes;if(!o)return Yr;var c=t.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in o)f[p]=i[p];return c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function en(t){return t=t.childContextTypes,t!=null}function Pl(){Ge(Zt),Ge(bt)}function wp(t,i,o){if(bt.current!==Yr)throw Error(n(168));We(bt,i),We(Zt,o)}function Ep(t,i,o){var c=t.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(n(108,xe(t)||"Unknown",f));return Z({},o,c)}function xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Yr,ji=bt.current,We(bt,t),We(Zt,Zt.current),!0}function Tp(t,i,o){var c=t.stateNode;if(!c)throw Error(n(169));o?(t=Ep(t,i,ji),c.__reactInternalMemoizedMergedChildContext=t,Ge(Zt),Ge(bt),We(bt,t)):Ge(Zt),We(Zt,o)}var Tr=null,Vl=!1,Wc=!1;function Ip(t){Tr===null?Tr=[t]:Tr.push(t)}function K0(t){Vl=!0,Ip(t)}function Xr(){if(!Wc&&Tr!==null){Wc=!0;var t=0,i=De;try{var o=Tr;for(De=1;t<o.length;t++){var c=o[t];do c=c(!0);while(c!==null)}Tr=null,Vl=!1}catch(f){throw Tr!==null&&(Tr=Tr.slice(t+1)),Is(Vi,Xr),f}finally{De=i,Wc=!1}}return null}var qs=[],Ws=0,Dl=null,Nl=0,En=[],Tn=0,Ui=null,Ir=1,Sr="";function zi(t,i){qs[Ws++]=Nl,qs[Ws++]=Dl,Dl=t,Nl=i}function Sp(t,i,o){En[Tn++]=Ir,En[Tn++]=Sr,En[Tn++]=Ui,Ui=t;var c=Ir;t=Sr;var f=32-Wt(c)-1;c&=~(1<<f),o+=1;var p=32-Wt(i)+f;if(30<p){var v=f-f%5;p=(c&(1<<v)-1).toString(32),c>>=v,f-=v,Ir=1<<32-Wt(i)+f|o<<f|c,Sr=p+t}else Ir=1<<p|o<<f|c,Sr=t}function Kc(t){t.return!==null&&(zi(t,1),Sp(t,1,0))}function Gc(t){for(;t===Dl;)Dl=qs[--Ws],qs[Ws]=null,Nl=qs[--Ws],qs[Ws]=null;for(;t===Ui;)Ui=En[--Tn],En[Tn]=null,Sr=En[--Tn],En[Tn]=null,Ir=En[--Tn],En[Tn]=null}var fn=null,dn=null,Xe=!1,jn=null;function Ap(t,i){var o=Cn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=t,i=t.deletions,i===null?(t.deletions=[o],t.flags|=16):i.push(o)}function Cp(t,i){switch(t.tag){case 5:var o=t.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,fn=t,dn=Gr(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,fn=t,dn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Ui!==null?{id:Ir,overflow:Sr}:null,t.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Cn(18,null,null,0),o.stateNode=i,o.return=t,t.child=o,fn=t,dn=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yc(t){if(Xe){var i=dn;if(i){var o=i;if(!Cp(t,i)){if(Qc(t))throw Error(n(418));i=Gr(o.nextSibling);var c=fn;i&&Cp(t,i)?Ap(c,o):(t.flags=t.flags&-4097|2,Xe=!1,fn=t)}}else{if(Qc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Xe=!1,fn=t}}}function Rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;fn=t}function Ol(t){if(t!==fn)return!1;if(!Xe)return Rp(t),Xe=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Uc(t.type,t.memoizedProps)),i&&(i=dn)){if(Qc(t))throw kp(),Error(n(418));for(;i;)Ap(t,i),i=Gr(i.nextSibling)}if(Rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var o=t.data;if(o==="/$"){if(i===0){dn=Gr(t.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}t=t.nextSibling}dn=null}}else dn=fn?Gr(t.stateNode.nextSibling):null;return!0}function kp(){for(var t=dn;t;)t=Gr(t.nextSibling)}function Ks(){dn=fn=null,Xe=!1}function Xc(t){jn===null?jn=[t]:jn.push(t)}var G0=de.ReactCurrentBatchConfig;function ua(t,i,o){if(t=o.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(n(309));var c=o.stateNode}if(!c)throw Error(n(147,t));var f=c,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(v){var I=f.refs;v===null?delete I[p]:I[p]=v},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!o._owner)throw Error(n(290,t))}return t}function Ll(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Pp(t){var i=t._init;return i(t._payload)}function xp(t){function i(M,x){if(t){var b=M.deletions;b===null?(M.deletions=[x],M.flags|=16):b.push(x)}}function o(M,x){if(!t)return null;for(;x!==null;)i(M,x),x=x.sibling;return null}function c(M,x){for(M=new Map;x!==null;)x.key!==null?M.set(x.key,x):M.set(x.index,x),x=x.sibling;return M}function f(M,x){return M=si(M,x),M.index=0,M.sibling=null,M}function p(M,x,b){return M.index=b,t?(b=M.alternate,b!==null?(b=b.index,b<x?(M.flags|=2,x):b):(M.flags|=2,x)):(M.flags|=1048576,x)}function v(M){return t&&M.alternate===null&&(M.flags|=2),M}function I(M,x,b,Y){return x===null||x.tag!==6?(x=zh(b,M.mode,Y),x.return=M,x):(x=f(x,b),x.return=M,x)}function k(M,x,b,Y){var he=b.type;return he===C?K(M,x,b.props.children,Y,b.key):x!==null&&(x.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Et&&Pp(he)===x.type)?(Y=f(x,b.props),Y.ref=ua(M,x,b),Y.return=M,Y):(Y=su(b.type,b.key,b.props,null,M.mode,Y),Y.ref=ua(M,x,b),Y.return=M,Y)}function $(M,x,b,Y){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Bh(b,M.mode,Y),x.return=M,x):(x=f(x,b.children||[]),x.return=M,x)}function K(M,x,b,Y,he){return x===null||x.tag!==7?(x=Yi(b,M.mode,Y,he),x.return=M,x):(x=f(x,b),x.return=M,x)}function G(M,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zh(""+x,M.mode,b),x.return=M,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Se:return b=su(x.type,x.key,x.props,null,M.mode,b),b.ref=ua(M,null,x),b.return=M,b;case ce:return x=Bh(x,M.mode,b),x.return=M,x;case Et:var Y=x._init;return G(M,Y(x._payload),b)}if(fr(x)||le(x))return x=Yi(x,M.mode,b,null),x.return=M,x;Ll(M,x)}return null}function q(M,x,b,Y){var he=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return he!==null?null:I(M,x,""+b,Y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Se:return b.key===he?k(M,x,b,Y):null;case ce:return b.key===he?$(M,x,b,Y):null;case Et:return he=b._init,q(M,x,he(b._payload),Y)}if(fr(b)||le(b))return he!==null?null:K(M,x,b,Y,null);Ll(M,b)}return null}function ee(M,x,b,Y,he){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return M=M.get(b)||null,I(x,M,""+Y,he);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case Se:return M=M.get(Y.key===null?b:Y.key)||null,k(x,M,Y,he);case ce:return M=M.get(Y.key===null?b:Y.key)||null,$(x,M,Y,he);case Et:var pe=Y._init;return ee(M,x,b,pe(Y._payload),he)}if(fr(Y)||le(Y))return M=M.get(b)||null,K(x,M,Y,he,null);Ll(x,Y)}return null}function ae(M,x,b,Y){for(var he=null,pe=null,me=x,ve=x=0,At=null;me!==null&&ve<b.length;ve++){me.index>ve?(At=me,me=null):At=me.sibling;var je=q(M,me,b[ve],Y);if(je===null){me===null&&(me=At);break}t&&me&&je.alternate===null&&i(M,me),x=p(je,x,ve),pe===null?he=je:pe.sibling=je,pe=je,me=At}if(ve===b.length)return o(M,me),Xe&&zi(M,ve),he;if(me===null){for(;ve<b.length;ve++)me=G(M,b[ve],Y),me!==null&&(x=p(me,x,ve),pe===null?he=me:pe.sibling=me,pe=me);return Xe&&zi(M,ve),he}for(me=c(M,me);ve<b.length;ve++)At=ee(me,M,ve,b[ve],Y),At!==null&&(t&&At.alternate!==null&&me.delete(At.key===null?ve:At.key),x=p(At,x,ve),pe===null?he=At:pe.sibling=At,pe=At);return t&&me.forEach(function(oi){return i(M,oi)}),Xe&&zi(M,ve),he}function ue(M,x,b,Y){var he=le(b);if(typeof he!="function")throw Error(n(150));if(b=he.call(b),b==null)throw Error(n(151));for(var pe=he=null,me=x,ve=x=0,At=null,je=b.next();me!==null&&!je.done;ve++,je=b.next()){me.index>ve?(At=me,me=null):At=me.sibling;var oi=q(M,me,je.value,Y);if(oi===null){me===null&&(me=At);break}t&&me&&oi.alternate===null&&i(M,me),x=p(oi,x,ve),pe===null?he=oi:pe.sibling=oi,pe=oi,me=At}if(je.done)return o(M,me),Xe&&zi(M,ve),he;if(me===null){for(;!je.done;ve++,je=b.next())je=G(M,je.value,Y),je!==null&&(x=p(je,x,ve),pe===null?he=je:pe.sibling=je,pe=je);return Xe&&zi(M,ve),he}for(me=c(M,me);!je.done;ve++,je=b.next())je=ee(me,M,ve,je.value,Y),je!==null&&(t&&je.alternate!==null&&me.delete(je.key===null?ve:je.key),x=p(je,x,ve),pe===null?he=je:pe.sibling=je,pe=je);return t&&me.forEach(function(Rw){return i(M,Rw)}),Xe&&zi(M,ve),he}function at(M,x,b,Y){if(typeof b=="object"&&b!==null&&b.type===C&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Se:e:{for(var he=b.key,pe=x;pe!==null;){if(pe.key===he){if(he=b.type,he===C){if(pe.tag===7){o(M,pe.sibling),x=f(pe,b.props.children),x.return=M,M=x;break e}}else if(pe.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Et&&Pp(he)===pe.type){o(M,pe.sibling),x=f(pe,b.props),x.ref=ua(M,pe,b),x.return=M,M=x;break e}o(M,pe);break}else i(M,pe);pe=pe.sibling}b.type===C?(x=Yi(b.props.children,M.mode,Y,b.key),x.return=M,M=x):(Y=su(b.type,b.key,b.props,null,M.mode,Y),Y.ref=ua(M,x,b),Y.return=M,M=Y)}return v(M);case ce:e:{for(pe=b.key;x!==null;){if(x.key===pe)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){o(M,x.sibling),x=f(x,b.children||[]),x.return=M,M=x;break e}else{o(M,x);break}else i(M,x);x=x.sibling}x=Bh(b,M.mode,Y),x.return=M,M=x}return v(M);case Et:return pe=b._init,at(M,x,pe(b._payload),Y)}if(fr(b))return ae(M,x,b,Y);if(le(b))return ue(M,x,b,Y);Ll(M,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(o(M,x.sibling),x=f(x,b),x.return=M,M=x):(o(M,x),x=zh(b,M.mode,Y),x.return=M,M=x),v(M)):o(M,x)}return at}var Gs=xp(!0),Vp=xp(!1),Ml=Qr(null),bl=null,Qs=null,Jc=null;function Zc(){Jc=Qs=bl=null}function eh(t){var i=Ml.current;Ge(Ml),t._currentValue=i}function th(t,i,o){for(;t!==null;){var c=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),t===o)break;t=t.return}}function Ys(t,i){bl=t,Jc=Qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(tn=!0),t.firstContext=null)}function In(t){var i=t._currentValue;if(Jc!==t)if(t={context:t,memoizedValue:i,next:null},Qs===null){if(bl===null)throw Error(n(308));Qs=t,bl.dependencies={lanes:0,firstContext:t}}else Qs=Qs.next=t;return i}var Bi=null;function nh(t){Bi===null?Bi=[t]:Bi.push(t)}function Dp(t,i,o,c){var f=i.interleaved;return f===null?(o.next=o,nh(i)):(o.next=f.next,f.next=o),i.interleaved=o,Ar(t,c)}function Ar(t,i){t.lanes|=i;var o=t.alternate;for(o!==null&&(o.lanes|=i),o=t,t=t.return;t!==null;)t.childLanes|=i,o=t.alternate,o!==null&&(o.childLanes|=i),o=t,t=t.return;return o.tag===3?o.stateNode:null}var Jr=!1;function rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Np(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cr(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function Zr(t,i,o){var c=t.updateQueue;if(c===null)return null;if(c=c.shared,(be&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ar(t,o)}return f=c.interleaved,f===null?(i.next=i,nh(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ar(t,o)}function Fl(t,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,zr(t,o)}}function Op(t,i){var o=t.updateQueue,c=t.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var v={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?f=p=v:p=p.next=v,o=o.next}while(o!==null);p===null?f=p=i:p=p.next=i}else f=p=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:c.shared,effects:c.effects},t.updateQueue=o;return}t=o.lastBaseUpdate,t===null?o.firstBaseUpdate=i:t.next=i,o.lastBaseUpdate=i}function $l(t,i,o,c){var f=t.updateQueue;Jr=!1;var p=f.firstBaseUpdate,v=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var k=I,$=k.next;k.next=null,v===null?p=$:v.next=$,v=k;var K=t.alternate;K!==null&&(K=K.updateQueue,I=K.lastBaseUpdate,I!==v&&(I===null?K.firstBaseUpdate=$:I.next=$,K.lastBaseUpdate=k))}if(p!==null){var G=f.baseState;v=0,K=$=k=null,I=p;do{var q=I.lane,ee=I.eventTime;if((c&q)===q){K!==null&&(K=K.next={eventTime:ee,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ae=t,ue=I;switch(q=i,ee=o,ue.tag){case 1:if(ae=ue.payload,typeof ae=="function"){G=ae.call(ee,G,q);break e}G=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=ue.payload,q=typeof ae=="function"?ae.call(ee,G,q):ae,q==null)break e;G=Z({},G,q);break e;case 2:Jr=!0}}I.callback!==null&&I.lane!==0&&(t.flags|=64,q=f.effects,q===null?f.effects=[I]:q.push(I))}else ee={eventTime:ee,lane:q,tag:I.tag,payload:I.payload,callback:I.callback,next:null},K===null?($=K=ee,k=G):K=K.next=ee,v|=q;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;q=I,I=q.next,q.next=null,f.lastBaseUpdate=q,f.shared.pending=null}}while(!0);if(K===null&&(k=G),f.baseState=k,f.firstBaseUpdate=$,f.lastBaseUpdate=K,i=f.shared.interleaved,i!==null){f=i;do v|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Wi|=v,t.lanes=v,t.memoizedState=G}}function Lp(t,i,o){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var c=t[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(n(191,f));f.call(c)}}}var ca={},nr=Qr(ca),ha=Qr(ca),fa=Qr(ca);function Hi(t){if(t===ca)throw Error(n(174));return t}function ih(t,i){switch(We(fa,i),We(ha,t),We(nr,ca),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:pt(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=pt(i,t)}Ge(nr),We(nr,i)}function Xs(){Ge(nr),Ge(ha),Ge(fa)}function Mp(t){Hi(fa.current);var i=Hi(nr.current),o=pt(i,t.type);i!==o&&(We(ha,t),We(nr,o))}function sh(t){ha.current===t&&(Ge(nr),Ge(ha))}var Ze=Qr(0);function jl(t){for(var i=t;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var oh=[];function ah(){for(var t=0;t<oh.length;t++)oh[t]._workInProgressVersionPrimary=null;oh.length=0}var Ul=de.ReactCurrentDispatcher,lh=de.ReactCurrentBatchConfig,qi=0,et=null,gt=null,It=null,zl=!1,da=!1,pa=0,Q0=0;function Ft(){throw Error(n(321))}function uh(t,i){if(i===null)return!1;for(var o=0;o<i.length&&o<t.length;o++)if(!$n(t[o],i[o]))return!1;return!0}function ch(t,i,o,c,f,p){if(qi=p,et=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ul.current=t===null||t.memoizedState===null?Z0:ew,t=o(c,f),da){p=0;do{if(da=!1,pa=0,25<=p)throw Error(n(301));p+=1,It=gt=null,i.updateQueue=null,Ul.current=tw,t=o(c,f)}while(da)}if(Ul.current=ql,i=gt!==null&&gt.next!==null,qi=0,It=gt=et=null,zl=!1,i)throw Error(n(300));return t}function hh(){var t=pa!==0;return pa=0,t}function rr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?et.memoizedState=It=t:It=It.next=t,It}function Sn(){if(gt===null){var t=et.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var i=It===null?et.memoizedState:It.next;if(i!==null)It=i,gt=t;else{if(t===null)throw Error(n(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},It===null?et.memoizedState=It=t:It=It.next=t}return It}function ma(t,i){return typeof i=="function"?i(t):i}function fh(t){var i=Sn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=gt,f=c.baseQueue,p=o.pending;if(p!==null){if(f!==null){var v=f.next;f.next=p.next,p.next=v}c.baseQueue=f=p,o.pending=null}if(f!==null){p=f.next,c=c.baseState;var I=v=null,k=null,$=p;do{var K=$.lane;if((qi&K)===K)k!==null&&(k=k.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),c=$.hasEagerState?$.eagerState:t(c,$.action);else{var G={lane:K,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};k===null?(I=k=G,v=c):k=k.next=G,et.lanes|=K,Wi|=K}$=$.next}while($!==null&&$!==p);k===null?v=c:k.next=I,$n(c,i.memoizedState)||(tn=!0),i.memoizedState=c,i.baseState=v,i.baseQueue=k,o.lastRenderedState=c}if(t=o.interleaved,t!==null){f=t;do p=f.lane,et.lanes|=p,Wi|=p,f=f.next;while(f!==t)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function dh(t){var i=Sn(),o=i.queue;if(o===null)throw Error(n(311));o.lastRenderedReducer=t;var c=o.dispatch,f=o.pending,p=i.memoizedState;if(f!==null){o.pending=null;var v=f=f.next;do p=t(p,v.action),v=v.next;while(v!==f);$n(p,i.memoizedState)||(tn=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function bp(){}function Fp(t,i){var o=et,c=Sn(),f=i(),p=!$n(c.memoizedState,f);if(p&&(c.memoizedState=f,tn=!0),c=c.queue,ph(Up.bind(null,o,c,t),[t]),c.getSnapshot!==i||p||It!==null&&It.memoizedState.tag&1){if(o.flags|=2048,ga(9,jp.bind(null,o,c,f,i),void 0,null),St===null)throw Error(n(349));(qi&30)!==0||$p(o,i,f)}return f}function $p(t,i,o){t.flags|=16384,t={getSnapshot:i,value:o},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.stores=[t]):(o=i.stores,o===null?i.stores=[t]:o.push(t))}function jp(t,i,o,c){i.value=o,i.getSnapshot=c,zp(i)&&Bp(t)}function Up(t,i,o){return o(function(){zp(i)&&Bp(t)})}function zp(t){var i=t.getSnapshot;t=t.value;try{var o=i();return!$n(t,o)}catch{return!0}}function Bp(t){var i=Ar(t,1);i!==null&&Hn(i,t,1,-1)}function Hp(t){var i=rr();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ma,lastRenderedState:t},i.queue=t,t=t.dispatch=J0.bind(null,et,t),[i.memoizedState,t]}function ga(t,i,o,c){return t={tag:t,create:i,destroy:o,deps:c,next:null},i=et.updateQueue,i===null?(i={lastEffect:null,stores:null},et.updateQueue=i,i.lastEffect=t.next=t):(o=i.lastEffect,o===null?i.lastEffect=t.next=t:(c=o.next,o.next=t,t.next=c,i.lastEffect=t)),t}function qp(){return Sn().memoizedState}function Bl(t,i,o,c){var f=rr();et.flags|=t,f.memoizedState=ga(1|i,o,void 0,c===void 0?null:c)}function Hl(t,i,o,c){var f=Sn();c=c===void 0?null:c;var p=void 0;if(gt!==null){var v=gt.memoizedState;if(p=v.destroy,c!==null&&uh(c,v.deps)){f.memoizedState=ga(i,o,p,c);return}}et.flags|=t,f.memoizedState=ga(1|i,o,p,c)}function Wp(t,i){return Bl(8390656,8,t,i)}function ph(t,i){return Hl(2048,8,t,i)}function Kp(t,i){return Hl(4,2,t,i)}function Gp(t,i){return Hl(4,4,t,i)}function Qp(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Yp(t,i,o){return o=o!=null?o.concat([t]):null,Hl(4,4,Qp.bind(null,i,t),o)}function mh(){}function Xp(t,i){var o=Sn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&uh(i,c[1])?c[0]:(o.memoizedState=[t,i],t)}function Jp(t,i){var o=Sn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&uh(i,c[1])?c[0]:(t=t(),o.memoizedState=[t,i],t)}function Zp(t,i,o){return(qi&21)===0?(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=o):($n(o,i)||(o=Oi(),et.lanes|=o,Wi|=o,t.baseState=!0),i)}function Y0(t,i){var o=De;De=o!==0&&4>o?o:4,t(!0);var c=lh.transition;lh.transition={};try{t(!1),i()}finally{De=o,lh.transition=c}}function em(){return Sn().memoizedState}function X0(t,i,o){var c=ri(t);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},tm(t))nm(i,o);else if(o=Dp(t,i,o,c),o!==null){var f=Qt();Hn(o,t,c,f),rm(o,i,c)}}function J0(t,i,o){var c=ri(t),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(tm(t))nm(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var v=i.lastRenderedState,I=p(v,o);if(f.hasEagerState=!0,f.eagerState=I,$n(I,v)){var k=i.interleaved;k===null?(f.next=f,nh(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}o=Dp(t,i,f,c),o!==null&&(f=Qt(),Hn(o,t,c,f),rm(o,i,c))}}function tm(t){var i=t.alternate;return t===et||i!==null&&i===et}function nm(t,i){da=zl=!0;var o=t.pending;o===null?i.next=i:(i.next=o.next,o.next=i),t.pending=i}function rm(t,i,o){if((o&4194240)!==0){var c=i.lanes;c&=t.pendingLanes,o|=c,i.lanes=o,zr(t,o)}}var ql={readContext:In,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},Z0={readContext:In,useCallback:function(t,i){return rr().memoizedState=[t,i===void 0?null:i],t},useContext:In,useEffect:Wp,useImperativeHandle:function(t,i,o){return o=o!=null?o.concat([t]):null,Bl(4194308,4,Qp.bind(null,i,t),o)},useLayoutEffect:function(t,i){return Bl(4194308,4,t,i)},useInsertionEffect:function(t,i){return Bl(4,2,t,i)},useMemo:function(t,i){var o=rr();return i=i===void 0?null:i,t=t(),o.memoizedState=[t,i],t},useReducer:function(t,i,o){var c=rr();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},c.queue=t,t=t.dispatch=X0.bind(null,et,t),[c.memoizedState,t]},useRef:function(t){var i=rr();return t={current:t},i.memoizedState=t},useState:Hp,useDebugValue:mh,useDeferredValue:function(t){return rr().memoizedState=t},useTransition:function(){var t=Hp(!1),i=t[0];return t=Y0.bind(null,t[1]),rr().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,o){var c=et,f=rr();if(Xe){if(o===void 0)throw Error(n(407));o=o()}else{if(o=i(),St===null)throw Error(n(349));(qi&30)!==0||$p(c,i,o)}f.memoizedState=o;var p={value:o,getSnapshot:i};return f.queue=p,Wp(Up.bind(null,c,p,t),[t]),c.flags|=2048,ga(9,jp.bind(null,c,p,o,i),void 0,null),o},useId:function(){var t=rr(),i=St.identifierPrefix;if(Xe){var o=Sr,c=Ir;o=(c&~(1<<32-Wt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=pa++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Q0++,i=":"+i+"r"+o.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},ew={readContext:In,useCallback:Xp,useContext:In,useEffect:ph,useImperativeHandle:Yp,useInsertionEffect:Kp,useLayoutEffect:Gp,useMemo:Jp,useReducer:fh,useRef:qp,useState:function(){return fh(ma)},useDebugValue:mh,useDeferredValue:function(t){var i=Sn();return Zp(i,gt.memoizedState,t)},useTransition:function(){var t=fh(ma)[0],i=Sn().memoizedState;return[t,i]},useMutableSource:bp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1},tw={readContext:In,useCallback:Xp,useContext:In,useEffect:ph,useImperativeHandle:Yp,useInsertionEffect:Kp,useLayoutEffect:Gp,useMemo:Jp,useReducer:dh,useRef:qp,useState:function(){return dh(ma)},useDebugValue:mh,useDeferredValue:function(t){var i=Sn();return gt===null?i.memoizedState=t:Zp(i,gt.memoizedState,t)},useTransition:function(){var t=dh(ma)[0],i=Sn().memoizedState;return[t,i]},useMutableSource:bp,useSyncExternalStore:Fp,useId:em,unstable_isNewReconciler:!1};function Un(t,i){if(t&&t.defaultProps){i=Z({},i),t=t.defaultProps;for(var o in t)i[o]===void 0&&(i[o]=t[o]);return i}return i}function gh(t,i,o,c){i=t.memoizedState,o=o(c,i),o=o==null?i:Z({},i,o),t.memoizedState=o,t.lanes===0&&(t.updateQueue.baseState=o)}var Wl={isMounted:function(t){return(t=t._reactInternals)?Dn(t)===t:!1},enqueueSetState:function(t,i,o){t=t._reactInternals;var c=Qt(),f=ri(t),p=Cr(c,f);p.payload=i,o!=null&&(p.callback=o),i=Zr(t,p,f),i!==null&&(Hn(i,t,f,c),Fl(i,t,f))},enqueueReplaceState:function(t,i,o){t=t._reactInternals;var c=Qt(),f=ri(t),p=Cr(c,f);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=Zr(t,p,f),i!==null&&(Hn(i,t,f,c),Fl(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var o=Qt(),c=ri(t),f=Cr(o,c);f.tag=2,i!=null&&(f.callback=i),i=Zr(t,f,c),i!==null&&(Hn(i,t,c,o),Fl(i,t,c))}};function im(t,i,o,c,f,p,v){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(c,p,v):i.prototype&&i.prototype.isPureReactComponent?!na(o,c)||!na(f,p):!0}function sm(t,i,o){var c=!1,f=Yr,p=i.contextType;return typeof p=="object"&&p!==null?p=In(p):(f=en(i)?ji:bt.current,c=i.contextTypes,p=(c=c!=null)?Hs(t,f):Yr),i=new i(o,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wl,t.stateNode=i,i._reactInternals=t,c&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function om(t,i,o,c){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==t&&Wl.enqueueReplaceState(i,i.state,null)}function yh(t,i,o,c){var f=t.stateNode;f.props=o,f.state=t.memoizedState,f.refs={},rh(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=In(p):(p=en(i)?ji:bt.current,f.context=Hs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(gh(t,i,p,o),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Wl.enqueueReplaceState(f,f.state,null),$l(t,o,f,c),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function Js(t,i){try{var o="",c=i;do o+=Ie(c),c=c.return;while(c);var f=o}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function vh(t,i,o){return{value:t,source:null,stack:o??null,digest:i??null}}function _h(t,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var nw=typeof WeakMap=="function"?WeakMap:Map;function am(t,i,o){o=Cr(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Zl||(Zl=!0,Oh=c),_h(t,i)},o}function lm(t,i,o){o=Cr(-1,o),o.tag=3;var c=t.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){_h(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){_h(t,i),typeof c!="function"&&(ti===null?ti=new Set([this]):ti.add(this));var v=i.stack;this.componentDidCatch(i.value,{componentStack:v!==null?v:""})}),o}function um(t,i,o){var c=t.pingCache;if(c===null){c=t.pingCache=new nw;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),t=gw.bind(null,t,i,o),i.then(t,t))}function cm(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function hm(t,i,o,c,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Cr(-1,1),i.tag=2,Zr(o,i,1))),o.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var rw=de.ReactCurrentOwner,tn=!1;function Gt(t,i,o,c){i.child=t===null?Vp(i,null,o,c):Gs(i,t.child,o,c)}function fm(t,i,o,c,f){o=o.render;var p=i.ref;return Ys(i,f),c=ch(t,i,o,c,p,f),o=hh(),t!==null&&!tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Rr(t,i,f)):(Xe&&o&&Kc(i),i.flags|=1,Gt(t,i,c,f),i.child)}function dm(t,i,o,c,f){if(t===null){var p=o.type;return typeof p=="function"&&!Uh(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,pm(t,i,p,c,f)):(t=su(o.type,null,c,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var v=p.memoizedProps;if(o=o.compare,o=o!==null?o:na,o(v,c)&&t.ref===i.ref)return Rr(t,i,f)}return i.flags|=1,t=si(p,c),t.ref=i.ref,t.return=i,i.child=t}function pm(t,i,o,c,f){if(t!==null){var p=t.memoizedProps;if(na(p,c)&&t.ref===i.ref)if(tn=!1,i.pendingProps=c=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(tn=!0);else return i.lanes=t.lanes,Rr(t,i,f)}return wh(t,i,o,c,f)}function mm(t,i,o){var c=i.pendingProps,f=c.children,p=t!==null?t.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(eo,pn),pn|=o;else{if((o&1073741824)===0)return t=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,We(eo,pn),pn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,We(eo,pn),pn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,We(eo,pn),pn|=c;return Gt(t,i,f,o),i.child}function gm(t,i){var o=i.ref;(t===null&&o!==null||t!==null&&t.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function wh(t,i,o,c,f){var p=en(o)?ji:bt.current;return p=Hs(i,p),Ys(i,f),o=ch(t,i,o,c,p,f),c=hh(),t!==null&&!tn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Rr(t,i,f)):(Xe&&c&&Kc(i),i.flags|=1,Gt(t,i,o,f),i.child)}function ym(t,i,o,c,f){if(en(o)){var p=!0;xl(i)}else p=!1;if(Ys(i,f),i.stateNode===null)Gl(t,i),sm(i,o,c),yh(i,o,c,f),c=!0;else if(t===null){var v=i.stateNode,I=i.memoizedProps;v.props=I;var k=v.context,$=o.contextType;typeof $=="object"&&$!==null?$=In($):($=en(o)?ji:bt.current,$=Hs(i,$));var K=o.getDerivedStateFromProps,G=typeof K=="function"||typeof v.getSnapshotBeforeUpdate=="function";G||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==c||k!==$)&&om(i,v,c,$),Jr=!1;var q=i.memoizedState;v.state=q,$l(i,c,v,f),k=i.memoizedState,I!==c||q!==k||Zt.current||Jr?(typeof K=="function"&&(gh(i,o,K,c),k=i.memoizedState),(I=Jr||im(i,o,I,c,q,k,$))?(G||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount()),typeof v.componentDidMount=="function"&&(i.flags|=4194308)):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),v.props=c,v.state=k,v.context=$,c=I):(typeof v.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{v=i.stateNode,Np(t,i),I=i.memoizedProps,$=i.type===i.elementType?I:Un(i.type,I),v.props=$,G=i.pendingProps,q=v.context,k=o.contextType,typeof k=="object"&&k!==null?k=In(k):(k=en(o)?ji:bt.current,k=Hs(i,k));var ee=o.getDerivedStateFromProps;(K=typeof ee=="function"||typeof v.getSnapshotBeforeUpdate=="function")||typeof v.UNSAFE_componentWillReceiveProps!="function"&&typeof v.componentWillReceiveProps!="function"||(I!==G||q!==k)&&om(i,v,c,k),Jr=!1,q=i.memoizedState,v.state=q,$l(i,c,v,f);var ae=i.memoizedState;I!==G||q!==ae||Zt.current||Jr?(typeof ee=="function"&&(gh(i,o,ee,c),ae=i.memoizedState),($=Jr||im(i,o,$,c,q,ae,k)||!1)?(K||typeof v.UNSAFE_componentWillUpdate!="function"&&typeof v.componentWillUpdate!="function"||(typeof v.componentWillUpdate=="function"&&v.componentWillUpdate(c,ae,k),typeof v.UNSAFE_componentWillUpdate=="function"&&v.UNSAFE_componentWillUpdate(c,ae,k)),typeof v.componentDidUpdate=="function"&&(i.flags|=4),typeof v.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof v.componentDidUpdate!="function"||I===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ae),v.props=c,v.state=ae,v.context=k,c=$):(typeof v.componentDidUpdate!="function"||I===t.memoizedProps&&q===t.memoizedState||(i.flags|=4),typeof v.getSnapshotBeforeUpdate!="function"||I===t.memoizedProps&&q===t.memoizedState||(i.flags|=1024),c=!1)}return Eh(t,i,o,c,p,f)}function Eh(t,i,o,c,f,p){gm(t,i);var v=(i.flags&128)!==0;if(!c&&!v)return f&&Tp(i,o,!1),Rr(t,i,p);c=i.stateNode,rw.current=i;var I=v&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,t!==null&&v?(i.child=Gs(i,t.child,null,p),i.child=Gs(i,null,I,p)):Gt(t,i,I,p),i.memoizedState=c.state,f&&Tp(i,o,!0),i.child}function vm(t){var i=t.stateNode;i.pendingContext?wp(t,i.pendingContext,i.pendingContext!==i.context):i.context&&wp(t,i.context,!1),ih(t,i.containerInfo)}function _m(t,i,o,c,f){return Ks(),Xc(f),i.flags|=256,Gt(t,i,o,c),i.child}var Th={dehydrated:null,treeContext:null,retryLane:0};function Ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function wm(t,i,o){var c=i.pendingProps,f=Ze.current,p=!1,v=(i.flags&128)!==0,I;if((I=v)||(I=t!==null&&t.memoizedState===null?!1:(f&2)!==0),I?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),We(Ze,f&1),t===null)return Yc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(v=c.children,t=c.fallback,p?(c=i.mode,p=i.child,v={mode:"hidden",children:v},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=v):p=ou(v,c,0,null),t=Yi(t,c,o,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=Ih(o),i.memoizedState=Th,t):Sh(i,v));if(f=t.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return iw(t,i,v,c,I,f,o);if(p){p=c.fallback,v=i.mode,f=t.child,I=f.sibling;var k={mode:"hidden",children:c.children};return(v&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=si(f,k),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?p=si(I,p):(p=Yi(p,v,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,v=t.child.memoizedState,v=v===null?Ih(o):{baseLanes:v.baseLanes|o,cachePool:null,transitions:v.transitions},p.memoizedState=v,p.childLanes=t.childLanes&~o,i.memoizedState=Th,c}return p=t.child,t=p.sibling,c=si(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,t!==null&&(o=i.deletions,o===null?(i.deletions=[t],i.flags|=16):o.push(t)),i.child=c,i.memoizedState=null,c}function Sh(t,i){return i=ou({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Kl(t,i,o,c){return c!==null&&Xc(c),Gs(i,t.child,null,o),t=Sh(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function iw(t,i,o,c,f,p,v){if(o)return i.flags&256?(i.flags&=-257,c=vh(Error(n(422))),Kl(t,i,v,c)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=c.fallback,f=i.mode,c=ou({mode:"visible",children:c.children},f,0,null),p=Yi(p,f,v,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Gs(i,t.child,null,v),i.child.memoizedState=Ih(v),i.memoizedState=Th,p);if((i.mode&1)===0)return Kl(t,i,v,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,p=Error(n(419)),c=vh(p,c,void 0),Kl(t,i,v,c)}if(I=(v&t.childLanes)!==0,tn||I){if(c=St,c!==null){switch(v&-v){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|v))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Ar(t,f),Hn(c,t,f,-1))}return jh(),c=vh(Error(n(421))),Kl(t,i,v,c)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=yw.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,dn=Gr(f.nextSibling),fn=i,Xe=!0,jn=null,t!==null&&(En[Tn++]=Ir,En[Tn++]=Sr,En[Tn++]=Ui,Ir=t.id,Sr=t.overflow,Ui=i),i=Sh(i,c.children),i.flags|=4096,i)}function Em(t,i,o){t.lanes|=i;var c=t.alternate;c!==null&&(c.lanes|=i),th(t.return,i,o)}function Ah(t,i,o,c,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=f)}function Tm(t,i,o){var c=i.pendingProps,f=c.revealOrder,p=c.tail;if(Gt(t,i,c.children,o),c=Ze.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Em(t,o,i);else if(t.tag===19)Em(t,o,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}c&=1}if(We(Ze,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)t=o.alternate,t!==null&&jl(t)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Ah(i,!1,f,o,p);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&jl(t)===null){i.child=f;break}t=f.sibling,f.sibling=o,o=f,f=t}Ah(i,!0,o,null,p);break;case"together":Ah(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Gl(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Rr(t,i,o){if(t!==null&&(i.dependencies=t.dependencies),Wi|=i.lanes,(o&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,o=si(t,t.pendingProps),i.child=o,o.return=i;t.sibling!==null;)t=t.sibling,o=o.sibling=si(t,t.pendingProps),o.return=i;o.sibling=null}return i.child}function sw(t,i,o){switch(i.tag){case 3:vm(i),Ks();break;case 5:Mp(i);break;case 1:en(i.type)&&xl(i);break;case 4:ih(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;We(Ml,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(We(Ze,Ze.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?wm(t,i,o):(We(Ze,Ze.current&1),t=Rr(t,i,o),t!==null?t.sibling:null);We(Ze,Ze.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(t.flags&128)!==0){if(c)return Tm(t,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),We(Ze,Ze.current),c)break;return null;case 22:case 23:return i.lanes=0,mm(t,i,o)}return Rr(t,i,o)}var Im,Ch,Sm,Am;Im=function(t,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)t.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Ch=function(){},Sm=function(t,i,o,c){var f=t.memoizedProps;if(f!==c){t=i.stateNode,Hi(nr.current);var p=null;switch(o){case"input":f=Ii(t,f),c=Ii(t,c),p=[];break;case"select":f=Z({},f,{value:void 0}),c=Z({},c,{value:void 0}),p=[];break;case"textarea":f=Vo(t,f),c=Vo(t,c),p=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(t.onclick=Rl)}bo(o,c);var v;o=null;for($ in f)if(!c.hasOwnProperty($)&&f.hasOwnProperty($)&&f[$]!=null)if($==="style"){var I=f[$];for(v in I)I.hasOwnProperty(v)&&(o||(o={}),o[v]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(a.hasOwnProperty($)?p||(p=[]):(p=p||[]).push($,null));for($ in c){var k=c[$];if(I=f!=null?f[$]:void 0,c.hasOwnProperty($)&&k!==I&&(k!=null||I!=null))if($==="style")if(I){for(v in I)!I.hasOwnProperty(v)||k&&k.hasOwnProperty(v)||(o||(o={}),o[v]="");for(v in k)k.hasOwnProperty(v)&&I[v]!==k[v]&&(o||(o={}),o[v]=k[v])}else o||(p||(p=[]),p.push($,o)),o=k;else $==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(p=p||[]).push($,k)):$==="children"?typeof k!="string"&&typeof k!="number"||(p=p||[]).push($,""+k):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(a.hasOwnProperty($)?(k!=null&&$==="onScroll"&&Ke("scroll",t),p||I===k||(p=[])):(p=p||[]).push($,k))}o&&(p=p||[]).push("style",o);var $=p;(i.updateQueue=$)&&(i.flags|=4)}},Am=function(t,i,o,c){o!==c&&(i.flags|=4)};function ya(t,i){if(!Xe)switch(t.tailMode){case"hidden":i=t.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?t.tail=null:o.sibling=null;break;case"collapsed":o=t.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:c.sibling=null}}function $t(t){var i=t.alternate!==null&&t.alternate.child===t.child,o=0,c=0;if(i)for(var f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=c,t.childLanes=o,i}function ow(t,i,o){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(i),null;case 1:return en(i.type)&&Pl(),$t(i),null;case 3:return c=i.stateNode,Xs(),Ge(Zt),Ge(bt),ah(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(t===null||t.child===null)&&(Ol(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,jn!==null&&(bh(jn),jn=null))),Ch(t,i),$t(i),null;case 5:sh(i);var f=Hi(fa.current);if(o=i.type,t!==null&&i.stateNode!=null)Sm(t,i,o,c,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(n(166));return $t(i),null}if(t=Hi(nr.current),Ol(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[tr]=i,c[aa]=p,t=(i.mode&1)!==0,o){case"dialog":Ke("cancel",c),Ke("close",c);break;case"iframe":case"object":case"embed":Ke("load",c);break;case"video":case"audio":for(f=0;f<ia.length;f++)Ke(ia[f],c);break;case"source":Ke("error",c);break;case"img":case"image":case"link":Ke("error",c),Ke("load",c);break;case"details":Ke("toggle",c);break;case"input":fs(c,p),Ke("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ke("invalid",c);break;case"textarea":ps(c,p),Ke("invalid",c)}bo(o,p),f=null;for(var v in p)if(p.hasOwnProperty(v)){var I=p[v];v==="children"?typeof I=="string"?c.textContent!==I&&(p.suppressHydrationWarning!==!0&&Cl(c.textContent,I,t),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(p.suppressHydrationWarning!==!0&&Cl(c.textContent,I,t),f=["children",""+I]):a.hasOwnProperty(v)&&I!=null&&v==="onScroll"&&Ke("scroll",c)}switch(o){case"input":Yt(c),Ja(c,p,!0);break;case"textarea":Yt(c),Do(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Rl)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{v=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=dt(o)),t==="http://www.w3.org/1999/xhtml"?o==="script"?(t=v.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof c.is=="string"?t=v.createElement(o,{is:c.is}):(t=v.createElement(o),o==="select"&&(v=t,c.multiple?v.multiple=!0:c.size&&(v.size=c.size))):t=v.createElementNS(t,o),t[tr]=i,t[aa]=c,Im(t,i,!1,!1),i.stateNode=t;e:{switch(v=Fo(o,c),o){case"dialog":Ke("cancel",t),Ke("close",t),f=c;break;case"iframe":case"object":case"embed":Ke("load",t),f=c;break;case"video":case"audio":for(f=0;f<ia.length;f++)Ke(ia[f],t);f=c;break;case"source":Ke("error",t),f=c;break;case"img":case"image":case"link":Ke("error",t),Ke("load",t),f=c;break;case"details":Ke("toggle",t),f=c;break;case"input":fs(t,c),f=Ii(t,c),Ke("invalid",t);break;case"option":f=c;break;case"select":t._wrapperState={wasMultiple:!!c.multiple},f=Z({},c,{value:void 0}),Ke("invalid",t);break;case"textarea":ps(t,c),f=Vo(t,c),Ke("invalid",t);break;default:f=c}bo(o,f),I=f;for(p in I)if(I.hasOwnProperty(p)){var k=I[p];p==="style"?Lo(t,k):p==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&No(t,k)):p==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&br(t,k):typeof k=="number"&&br(t,""+k):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?k!=null&&p==="onScroll"&&Ke("scroll",t):k!=null&&te(t,p,k,v))}switch(o){case"input":Yt(t),Ja(t,c,!1);break;case"textarea":Yt(t),Do(t);break;case"option":c.value!=null&&t.setAttribute("value",""+Pe(c.value));break;case"select":t.multiple=!!c.multiple,p=c.value,p!=null?dr(t,!!c.multiple,p,!1):c.defaultValue!=null&&dr(t,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Rl)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return $t(i),null;case 6:if(t&&i.stateNode!=null)Am(t,i,t.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(n(166));if(o=Hi(fa.current),Hi(nr.current),Ol(i)){if(c=i.stateNode,o=i.memoizedProps,c[tr]=i,(p=c.nodeValue!==o)&&(t=fn,t!==null))switch(t.tag){case 3:Cl(c.nodeValue,o,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Cl(c.nodeValue,o,(t.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[tr]=i,i.stateNode=c}return $t(i),null;case 13:if(Ge(Ze),c=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Xe&&dn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)kp(),Ks(),i.flags|=98560,p=!1;else if(p=Ol(i),c!==null&&c.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[tr]=i}else Ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;$t(i),p=!1}else jn!==null&&(bh(jn),jn=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(t!==null&&t.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Ze.current&1)!==0?yt===0&&(yt=3):jh())),i.updateQueue!==null&&(i.flags|=4),$t(i),null);case 4:return Xs(),Ch(t,i),t===null&&sa(i.stateNode.containerInfo),$t(i),null;case 10:return eh(i.type._context),$t(i),null;case 17:return en(i.type)&&Pl(),$t(i),null;case 19:if(Ge(Ze),p=i.memoizedState,p===null)return $t(i),null;if(c=(i.flags&128)!==0,v=p.rendering,v===null)if(c)ya(p,!1);else{if(yt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(v=jl(t),v!==null){for(i.flags|=128,ya(p,!1),c=v.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,t=c,p.flags&=14680066,v=p.alternate,v===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=v.childLanes,p.lanes=v.lanes,p.child=v.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=v.memoizedProps,p.memoizedState=v.memoizedState,p.updateQueue=v.updateQueue,p.type=v.type,t=v.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),o=o.sibling;return We(Ze,Ze.current&1|2),i.child}t=t.sibling}p.tail!==null&&qe()>to&&(i.flags|=128,c=!0,ya(p,!1),i.lanes=4194304)}else{if(!c)if(t=jl(v),t!==null){if(i.flags|=128,c=!0,o=t.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),ya(p,!0),p.tail===null&&p.tailMode==="hidden"&&!v.alternate&&!Xe)return $t(i),null}else 2*qe()-p.renderingStartTime>to&&o!==1073741824&&(i.flags|=128,c=!0,ya(p,!1),i.lanes=4194304);p.isBackwards?(v.sibling=i.child,i.child=v):(o=p.last,o!==null?o.sibling=v:i.child=v,p.last=v)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=qe(),i.sibling=null,o=Ze.current,We(Ze,c?o&1|2:o&1),i):($t(i),null);case 22:case 23:return $h(),c=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(pn&1073741824)!==0&&($t(i),i.subtreeFlags&6&&(i.flags|=8192)):$t(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function aw(t,i){switch(Gc(i),i.tag){case 1:return en(i.type)&&Pl(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Xs(),Ge(Zt),Ge(bt),ah(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return sh(i),null;case 13:if(Ge(Ze),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ks()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ge(Ze),null;case 4:return Xs(),null;case 10:return eh(i.type._context),null;case 22:case 23:return $h(),null;case 24:return null;default:return null}}var Ql=!1,jt=!1,lw=typeof WeakSet=="function"?WeakSet:Set,ie=null;function Zs(t,i){var o=t.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){rt(t,i,c)}else o.current=null}function Rh(t,i,o){try{o()}catch(c){rt(t,i,c)}}var Cm=!1;function uw(t,i){if($c=qr,t=ip(),Vc(t)){if("selectionStart"in t)var o={start:t.selectionStart,end:t.selectionEnd};else e:{o=(o=t.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var v=0,I=-1,k=-1,$=0,K=0,G=t,q=null;t:for(;;){for(var ee;G!==o||f!==0&&G.nodeType!==3||(I=v+f),G!==p||c!==0&&G.nodeType!==3||(k=v+c),G.nodeType===3&&(v+=G.nodeValue.length),(ee=G.firstChild)!==null;)q=G,G=ee;for(;;){if(G===t)break t;if(q===o&&++$===f&&(I=v),q===p&&++K===c&&(k=v),(ee=G.nextSibling)!==null)break;G=q,q=G.parentNode}G=ee}o=I===-1||k===-1?null:{start:I,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(jc={focusedElem:t,selectionRange:o},qr=!1,ie=i;ie!==null;)if(i=ie,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ie=t;else for(;ie!==null;){i=ie;try{var ae=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ae!==null){var ue=ae.memoizedProps,at=ae.memoizedState,M=i.stateNode,x=M.getSnapshotBeforeUpdate(i.elementType===i.type?ue:Un(i.type,ue),at);M.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=i.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Y){rt(i,i.return,Y)}if(t=i.sibling,t!==null){t.return=i.return,ie=t;break}ie=i.return}return ae=Cm,Cm=!1,ae}function va(t,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&Rh(i,o,p)}f=f.next}while(f!==c)}}function Yl(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&t)===t){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function kh(t){var i=t.ref;if(i!==null){var o=t.stateNode;switch(t.tag){case 5:t=o;break;default:t=o}typeof i=="function"?i(t):i.current=t}}function Rm(t){var i=t.alternate;i!==null&&(t.alternate=null,Rm(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[tr],delete i[aa],delete i[Hc],delete i[q0],delete i[W0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function km(t){return t.tag===5||t.tag===3||t.tag===4}function Pm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||km(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ph(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(t,i):o.insertBefore(t,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(t,o)):(i=o,i.appendChild(t)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Rl));else if(c!==4&&(t=t.child,t!==null))for(Ph(t,i,o),t=t.sibling;t!==null;)Ph(t,i,o),t=t.sibling}function xh(t,i,o){var c=t.tag;if(c===5||c===6)t=t.stateNode,i?o.insertBefore(t,i):o.appendChild(t);else if(c!==4&&(t=t.child,t!==null))for(xh(t,i,o),t=t.sibling;t!==null;)xh(t,i,o),t=t.sibling}var Vt=null,zn=!1;function ei(t,i,o){for(o=o.child;o!==null;)xm(t,i,o),o=o.sibling}function xm(t,i,o){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Di,o)}catch{}switch(o.tag){case 5:jt||Zs(o,i);case 6:var c=Vt,f=zn;Vt=null,ei(t,i,o),Vt=c,zn=f,Vt!==null&&(zn?(t=Vt,o=o.stateNode,t.nodeType===8?t.parentNode.removeChild(o):t.removeChild(o)):Vt.removeChild(o.stateNode));break;case 18:Vt!==null&&(zn?(t=Vt,o=o.stateNode,t.nodeType===8?Bc(t.parentNode,o):t.nodeType===1&&Bc(t,o),bn(t)):Bc(Vt,o.stateNode));break;case 4:c=Vt,f=zn,Vt=o.stateNode.containerInfo,zn=!0,ei(t,i,o),Vt=c,zn=f;break;case 0:case 11:case 14:case 15:if(!jt&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var p=f,v=p.destroy;p=p.tag,v!==void 0&&((p&2)!==0||(p&4)!==0)&&Rh(o,i,v),f=f.next}while(f!==c)}ei(t,i,o);break;case 1:if(!jt&&(Zs(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){rt(o,i,I)}ei(t,i,o);break;case 21:ei(t,i,o);break;case 22:o.mode&1?(jt=(c=jt)||o.memoizedState!==null,ei(t,i,o),jt=c):ei(t,i,o);break;default:ei(t,i,o)}}function Vm(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var o=t.stateNode;o===null&&(o=t.stateNode=new lw),i.forEach(function(c){var f=vw.bind(null,t,c);o.has(c)||(o.add(c),c.then(f,f))})}}function Bn(t,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var p=t,v=i,I=v;e:for(;I!==null;){switch(I.tag){case 5:Vt=I.stateNode,zn=!1;break e;case 3:Vt=I.stateNode.containerInfo,zn=!0;break e;case 4:Vt=I.stateNode.containerInfo,zn=!0;break e}I=I.return}if(Vt===null)throw Error(n(160));xm(p,v,f),Vt=null,zn=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch($){rt(f,i,$)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Dm(i,t),i=i.sibling}function Dm(t,i){var o=t.alternate,c=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(i,t),ir(t),c&4){try{va(3,t,t.return),Yl(3,t)}catch(ue){rt(t,t.return,ue)}try{va(5,t,t.return)}catch(ue){rt(t,t.return,ue)}}break;case 1:Bn(i,t),ir(t),c&512&&o!==null&&Zs(o,o.return);break;case 5:if(Bn(i,t),ir(t),c&512&&o!==null&&Zs(o,o.return),t.flags&32){var f=t.stateNode;try{br(f,"")}catch(ue){rt(t,t.return,ue)}}if(c&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,v=o!==null?o.memoizedProps:p,I=t.type,k=t.updateQueue;if(t.updateQueue=null,k!==null)try{I==="input"&&p.type==="radio"&&p.name!=null&&Po(f,p),Fo(I,v);var $=Fo(I,p);for(v=0;v<k.length;v+=2){var K=k[v],G=k[v+1];K==="style"?Lo(f,G):K==="dangerouslySetInnerHTML"?No(f,G):K==="children"?br(f,G):te(f,K,G,$)}switch(I){case"input":xo(f,p);break;case"textarea":ms(f,p);break;case"select":var q=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var ee=p.value;ee!=null?dr(f,!!p.multiple,ee,!1):q!==!!p.multiple&&(p.defaultValue!=null?dr(f,!!p.multiple,p.defaultValue,!0):dr(f,!!p.multiple,p.multiple?[]:"",!1))}f[aa]=p}catch(ue){rt(t,t.return,ue)}}break;case 6:if(Bn(i,t),ir(t),c&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(ue){rt(t,t.return,ue)}}break;case 3:if(Bn(i,t),ir(t),c&4&&o!==null&&o.memoizedState.isDehydrated)try{bn(i.containerInfo)}catch(ue){rt(t,t.return,ue)}break;case 4:Bn(i,t),ir(t);break;case 13:Bn(i,t),ir(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(Nh=qe())),c&4&&Vm(t);break;case 22:if(K=o!==null&&o.memoizedState!==null,t.mode&1?(jt=($=jt)||K,Bn(i,t),jt=$):Bn(i,t),ir(t),c&8192){if($=t.memoizedState!==null,(t.stateNode.isHidden=$)&&!K&&(t.mode&1)!==0)for(ie=t,K=t.child;K!==null;){for(G=ie=K;ie!==null;){switch(q=ie,ee=q.child,q.tag){case 0:case 11:case 14:case 15:va(4,q,q.return);break;case 1:Zs(q,q.return);var ae=q.stateNode;if(typeof ae.componentWillUnmount=="function"){c=q,o=q.return;try{i=c,ae.props=i.memoizedProps,ae.state=i.memoizedState,ae.componentWillUnmount()}catch(ue){rt(c,o,ue)}}break;case 5:Zs(q,q.return);break;case 22:if(q.memoizedState!==null){Lm(G);continue}}ee!==null?(ee.return=q,ie=ee):Lm(G)}K=K.sibling}e:for(K=null,G=t;;){if(G.tag===5){if(K===null){K=G;try{f=G.stateNode,$?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(I=G.stateNode,k=G.memoizedProps.style,v=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Oo("display",v))}catch(ue){rt(t,t.return,ue)}}}else if(G.tag===6){if(K===null)try{G.stateNode.nodeValue=$?"":G.memoizedProps}catch(ue){rt(t,t.return,ue)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===t)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===t)break e;for(;G.sibling===null;){if(G.return===null||G.return===t)break e;K===G&&(K=null),G=G.return}K===G&&(K=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:Bn(i,t),ir(t),c&4&&Vm(t);break;case 21:break;default:Bn(i,t),ir(t)}}function ir(t){var i=t.flags;if(i&2){try{e:{for(var o=t.return;o!==null;){if(km(o)){var c=o;break e}o=o.return}throw Error(n(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(br(f,""),c.flags&=-33);var p=Pm(t);xh(t,p,f);break;case 3:case 4:var v=c.stateNode.containerInfo,I=Pm(t);Ph(t,I,v);break;default:throw Error(n(161))}}catch(k){rt(t,t.return,k)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function cw(t,i,o){ie=t,Nm(t)}function Nm(t,i,o){for(var c=(t.mode&1)!==0;ie!==null;){var f=ie,p=f.child;if(f.tag===22&&c){var v=f.memoizedState!==null||Ql;if(!v){var I=f.alternate,k=I!==null&&I.memoizedState!==null||jt;I=Ql;var $=jt;if(Ql=v,(jt=k)&&!$)for(ie=f;ie!==null;)v=ie,k=v.child,v.tag===22&&v.memoizedState!==null?Mm(f):k!==null?(k.return=v,ie=k):Mm(f);for(;p!==null;)ie=p,Nm(p),p=p.sibling;ie=f,Ql=I,jt=$}Om(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,ie=p):Om(t)}}function Om(t){for(;ie!==null;){var i=ie;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:jt||Yl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!jt)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:Un(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&Lp(i,p,c);break;case 3:var v=i.updateQueue;if(v!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Lp(i,v,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var $=i.alternate;if($!==null){var K=$.memoizedState;if(K!==null){var G=K.dehydrated;G!==null&&bn(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}jt||i.flags&512&&kh(i)}catch(q){rt(i,i.return,q)}}if(i===t){ie=null;break}if(o=i.sibling,o!==null){o.return=i.return,ie=o;break}ie=i.return}}function Lm(t){for(;ie!==null;){var i=ie;if(i===t){ie=null;break}var o=i.sibling;if(o!==null){o.return=i.return,ie=o;break}ie=i.return}}function Mm(t){for(;ie!==null;){var i=ie;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Yl(4,i)}catch(k){rt(i,o,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(k){rt(i,f,k)}}var p=i.return;try{kh(i)}catch(k){rt(i,p,k)}break;case 5:var v=i.return;try{kh(i)}catch(k){rt(i,v,k)}}}catch(k){rt(i,i.return,k)}if(i===t){ie=null;break}var I=i.sibling;if(I!==null){I.return=i.return,ie=I;break}ie=i.return}}var hw=Math.ceil,Xl=de.ReactCurrentDispatcher,Vh=de.ReactCurrentOwner,An=de.ReactCurrentBatchConfig,be=0,St=null,ct=null,Dt=0,pn=0,eo=Qr(0),yt=0,_a=null,Wi=0,Jl=0,Dh=0,wa=null,nn=null,Nh=0,to=1/0,kr=null,Zl=!1,Oh=null,ti=null,eu=!1,ni=null,tu=0,Ea=0,Lh=null,nu=-1,ru=0;function Qt(){return(be&6)!==0?qe():nu!==-1?nu:nu=qe()}function ri(t){return(t.mode&1)===0?1:(be&2)!==0&&Dt!==0?Dt&-Dt:G0.transition!==null?(ru===0&&(ru=Oi()),ru):(t=De,t!==0||(t=window.event,t=t===void 0?16:Qo(t.type)),t)}function Hn(t,i,o,c){if(50<Ea)throw Ea=0,Lh=null,Error(n(185));Ur(t,o,c),((be&2)===0||t!==St)&&(t===St&&((be&2)===0&&(Jl|=o),yt===4&&ii(t,Dt)),rn(t,c),o===1&&be===0&&(i.mode&1)===0&&(to=qe()+500,Vl&&Xr()))}function rn(t,i){var o=t.callbackNode;gr(t,i);var c=Ni(t,t===St?Dt:0);if(c===0)o!==null&&Ho(o),t.callbackNode=null,t.callbackPriority=0;else if(i=c&-c,t.callbackPriority!==i){if(o!=null&&Ho(o),i===1)t.tag===0?K0(Fm.bind(null,t)):Ip(Fm.bind(null,t)),B0(function(){(be&6)===0&&Xr()}),o=null;else{switch(Br(c)){case 1:o=Vi;break;case 4:o=Fr;break;case 16:o=vn;break;case 536870912:o=rl;break;default:o=vn}o=Wm(o,bm.bind(null,t))}t.callbackPriority=i,t.callbackNode=o}}function bm(t,i){if(nu=-1,ru=0,(be&6)!==0)throw Error(n(327));var o=t.callbackNode;if(no()&&t.callbackNode!==o)return null;var c=Ni(t,t===St?Dt:0);if(c===0)return null;if((c&30)!==0||(c&t.expiredLanes)!==0||i)i=iu(t,c);else{i=c;var f=be;be|=2;var p=jm();(St!==t||Dt!==i)&&(kr=null,to=qe()+500,Gi(t,i));do try{pw();break}catch(I){$m(t,I)}while(!0);Zc(),Xl.current=p,be=f,ct!==null?i=0:(St=null,Dt=0,i=yt)}if(i!==0){if(i===2&&(f=un(t),f!==0&&(c=f,i=Mh(t,f))),i===1)throw o=_a,Gi(t,0),ii(t,c),rn(t,qe()),o;if(i===6)ii(t,c);else{if(f=t.current.alternate,(c&30)===0&&!fw(f)&&(i=iu(t,c),i===2&&(p=un(t),p!==0&&(c=p,i=Mh(t,p))),i===1))throw o=_a,Gi(t,0),ii(t,c),rn(t,qe()),o;switch(t.finishedWork=f,t.finishedLanes=c,i){case 0:case 1:throw Error(n(345));case 2:Qi(t,nn,kr);break;case 3:if(ii(t,c),(c&130023424)===c&&(i=Nh+500-qe(),10<i)){if(Ni(t,0)!==0)break;if(f=t.suspendedLanes,(f&c)!==c){Qt(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=zc(Qi.bind(null,t,nn,kr),i);break}Qi(t,nn,kr);break;case 4:if(ii(t,c),(c&4194240)===c)break;for(i=t.eventTimes,f=-1;0<c;){var v=31-Wt(c);p=1<<v,v=i[v],v>f&&(f=v),c&=~p}if(c=f,c=qe()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*hw(c/1960))-c,10<c){t.timeoutHandle=zc(Qi.bind(null,t,nn,kr),c);break}Qi(t,nn,kr);break;case 5:Qi(t,nn,kr);break;default:throw Error(n(329))}}}return rn(t,qe()),t.callbackNode===o?bm.bind(null,t):null}function Mh(t,i){var o=wa;return t.current.memoizedState.isDehydrated&&(Gi(t,i).flags|=256),t=iu(t,i),t!==2&&(i=nn,nn=o,i!==null&&bh(i)),t}function bh(t){nn===null?nn=t:nn.push.apply(nn,t)}function fw(t){for(var i=t;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],p=f.getSnapshot;f=f.value;try{if(!$n(p(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function ii(t,i){for(i&=~Dh,i&=~Jl,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var o=31-Wt(i),c=1<<o;t[o]=-1,i&=~c}}function Fm(t){if((be&6)!==0)throw Error(n(327));no();var i=Ni(t,0);if((i&1)===0)return rn(t,qe()),null;var o=iu(t,i);if(t.tag!==0&&o===2){var c=un(t);c!==0&&(i=c,o=Mh(t,c))}if(o===1)throw o=_a,Gi(t,0),ii(t,i),rn(t,qe()),o;if(o===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Qi(t,nn,kr),rn(t,qe()),null}function Fh(t,i){var o=be;be|=1;try{return t(i)}finally{be=o,be===0&&(to=qe()+500,Vl&&Xr())}}function Ki(t){ni!==null&&ni.tag===0&&(be&6)===0&&no();var i=be;be|=1;var o=An.transition,c=De;try{if(An.transition=null,De=1,t)return t()}finally{De=c,An.transition=o,be=i,(be&6)===0&&Xr()}}function $h(){pn=eo.current,Ge(eo)}function Gi(t,i){t.finishedWork=null,t.finishedLanes=0;var o=t.timeoutHandle;if(o!==-1&&(t.timeoutHandle=-1,z0(o)),ct!==null)for(o=ct.return;o!==null;){var c=o;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Pl();break;case 3:Xs(),Ge(Zt),Ge(bt),ah();break;case 5:sh(c);break;case 4:Xs();break;case 13:Ge(Ze);break;case 19:Ge(Ze);break;case 10:eh(c.type._context);break;case 22:case 23:$h()}o=o.return}if(St=t,ct=t=si(t.current,null),Dt=pn=i,yt=0,_a=null,Dh=Jl=Wi=0,nn=wa=null,Bi!==null){for(i=0;i<Bi.length;i++)if(o=Bi[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,p=o.pending;if(p!==null){var v=p.next;p.next=f,c.next=v}o.pending=c}Bi=null}return t}function $m(t,i){do{var o=ct;try{if(Zc(),Ul.current=ql,zl){for(var c=et.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}zl=!1}if(qi=0,It=gt=et=null,da=!1,pa=0,Vh.current=null,o===null||o.return===null){yt=1,_a=i,ct=null;break}e:{var p=t,v=o.return,I=o,k=i;if(i=Dt,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var $=k,K=I,G=K.tag;if((K.mode&1)===0&&(G===0||G===11||G===15)){var q=K.alternate;q?(K.updateQueue=q.updateQueue,K.memoizedState=q.memoizedState,K.lanes=q.lanes):(K.updateQueue=null,K.memoizedState=null)}var ee=cm(v);if(ee!==null){ee.flags&=-257,hm(ee,v,I,p,i),ee.mode&1&&um(p,$,i),i=ee,k=$;var ae=i.updateQueue;if(ae===null){var ue=new Set;ue.add(k),i.updateQueue=ue}else ae.add(k);break e}else{if((i&1)===0){um(p,$,i),jh();break e}k=Error(n(426))}}else if(Xe&&I.mode&1){var at=cm(v);if(at!==null){(at.flags&65536)===0&&(at.flags|=256),hm(at,v,I,p,i),Xc(Js(k,I));break e}}p=k=Js(k,I),yt!==4&&(yt=2),wa===null?wa=[p]:wa.push(p),p=v;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var M=am(p,k,i);Op(p,M);break e;case 1:I=k;var x=p.type,b=p.stateNode;if((p.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(ti===null||!ti.has(b)))){p.flags|=65536,i&=-i,p.lanes|=i;var Y=lm(p,I,i);Op(p,Y);break e}}p=p.return}while(p!==null)}zm(o)}catch(he){i=he,ct===o&&o!==null&&(ct=o=o.return);continue}break}while(!0)}function jm(){var t=Xl.current;return Xl.current=ql,t===null?ql:t}function jh(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||(Wi&268435455)===0&&(Jl&268435455)===0||ii(St,Dt)}function iu(t,i){var o=be;be|=2;var c=jm();(St!==t||Dt!==i)&&(kr=null,Gi(t,i));do try{dw();break}catch(f){$m(t,f)}while(!0);if(Zc(),be=o,Xl.current=c,ct!==null)throw Error(n(261));return St=null,Dt=0,yt}function dw(){for(;ct!==null;)Um(ct)}function pw(){for(;ct!==null&&!tl();)Um(ct)}function Um(t){var i=qm(t.alternate,t,pn);t.memoizedProps=t.pendingProps,i===null?zm(t):ct=i,Vh.current=null}function zm(t){var i=t;do{var o=i.alternate;if(t=i.return,(i.flags&32768)===0){if(o=ow(o,i,pn),o!==null){ct=o;return}}else{if(o=aw(o,i),o!==null){o.flags&=32767,ct=o;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{yt=6,ct=null;return}}if(i=i.sibling,i!==null){ct=i;return}ct=i=t}while(i!==null);yt===0&&(yt=5)}function Qi(t,i,o){var c=De,f=An.transition;try{An.transition=null,De=1,mw(t,i,o,c)}finally{An.transition=f,De=c}return null}function mw(t,i,o,c){do no();while(ni!==null);if((be&6)!==0)throw Error(n(327));o=t.finishedWork;var f=t.finishedLanes;if(o===null)return null;if(t.finishedWork=null,t.finishedLanes=0,o===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=o.lanes|o.childLanes;if(He(t,p),t===St&&(ct=St=null,Dt=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||eu||(eu=!0,Wm(vn,function(){return no(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=An.transition,An.transition=null;var v=De;De=1;var I=be;be|=4,Vh.current=null,uw(t,o),Dm(o,t),L0(jc),qr=!!$c,jc=$c=null,t.current=o,cw(o),Ic(),be=I,De=v,An.transition=p}else t.current=o;if(eu&&(eu=!1,ni=t,tu=f),p=t.pendingLanes,p===0&&(ti=null),il(o.stateNode),rn(t,qe()),i!==null)for(c=t.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Zl)throw Zl=!1,t=Oh,Oh=null,t;return(tu&1)!==0&&t.tag!==0&&no(),p=t.pendingLanes,(p&1)!==0?t===Lh?Ea++:(Ea=0,Lh=t):Ea=0,Xr(),null}function no(){if(ni!==null){var t=Br(tu),i=An.transition,o=De;try{if(An.transition=null,De=16>t?16:t,ni===null)var c=!1;else{if(t=ni,ni=null,tu=0,(be&6)!==0)throw Error(n(331));var f=be;for(be|=4,ie=t.current;ie!==null;){var p=ie,v=p.child;if((ie.flags&16)!==0){var I=p.deletions;if(I!==null){for(var k=0;k<I.length;k++){var $=I[k];for(ie=$;ie!==null;){var K=ie;switch(K.tag){case 0:case 11:case 15:va(8,K,p)}var G=K.child;if(G!==null)G.return=K,ie=G;else for(;ie!==null;){K=ie;var q=K.sibling,ee=K.return;if(Rm(K),K===$){ie=null;break}if(q!==null){q.return=ee,ie=q;break}ie=ee}}}var ae=p.alternate;if(ae!==null){var ue=ae.child;if(ue!==null){ae.child=null;do{var at=ue.sibling;ue.sibling=null,ue=at}while(ue!==null)}}ie=p}}if((p.subtreeFlags&2064)!==0&&v!==null)v.return=p,ie=v;else e:for(;ie!==null;){if(p=ie,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:va(9,p,p.return)}var M=p.sibling;if(M!==null){M.return=p.return,ie=M;break e}ie=p.return}}var x=t.current;for(ie=x;ie!==null;){v=ie;var b=v.child;if((v.subtreeFlags&2064)!==0&&b!==null)b.return=v,ie=b;else e:for(v=x;ie!==null;){if(I=ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Yl(9,I)}}catch(he){rt(I,I.return,he)}if(I===v){ie=null;break e}var Y=I.sibling;if(Y!==null){Y.return=I.return,ie=Y;break e}ie=I.return}}if(be=f,Xr(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Di,t)}catch{}c=!0}return c}finally{De=o,An.transition=i}}return!1}function Bm(t,i,o){i=Js(o,i),i=am(t,i,1),t=Zr(t,i,1),i=Qt(),t!==null&&(Ur(t,1,i),rn(t,i))}function rt(t,i,o){if(t.tag===3)Bm(t,t,o);else for(;i!==null;){if(i.tag===3){Bm(i,t,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ti===null||!ti.has(c))){t=Js(o,t),t=lm(i,t,1),i=Zr(i,t,1),t=Qt(),i!==null&&(Ur(i,1,t),rn(i,t));break}}i=i.return}}function gw(t,i,o){var c=t.pingCache;c!==null&&c.delete(i),i=Qt(),t.pingedLanes|=t.suspendedLanes&o,St===t&&(Dt&o)===o&&(yt===4||yt===3&&(Dt&130023424)===Dt&&500>qe()-Nh?Gi(t,0):Dh|=o),rn(t,i)}function Hm(t,i){i===0&&((t.mode&1)===0?i=1:(i=As,As<<=1,(As&130023424)===0&&(As=4194304)));var o=Qt();t=Ar(t,i),t!==null&&(Ur(t,i,o),rn(t,o))}function yw(t){var i=t.memoizedState,o=0;i!==null&&(o=i.retryLane),Hm(t,o)}function vw(t,i){var o=0;switch(t.tag){case 13:var c=t.stateNode,f=t.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=t.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(i),Hm(t,o)}var qm;qm=function(t,i,o){if(t!==null)if(t.memoizedProps!==i.pendingProps||Zt.current)tn=!0;else{if((t.lanes&o)===0&&(i.flags&128)===0)return tn=!1,sw(t,i,o);tn=(t.flags&131072)!==0}else tn=!1,Xe&&(i.flags&1048576)!==0&&Sp(i,Nl,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Gl(t,i),t=i.pendingProps;var f=Hs(i,bt.current);Ys(i,o),f=ch(null,i,c,t,f,o);var p=hh();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,en(c)?(p=!0,xl(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,rh(i),f.updater=Wl,i.stateNode=f,f._reactInternals=i,yh(i,c,t,o),i=Eh(null,i,c,!0,p,o)):(i.tag=0,Xe&&p&&Kc(i),Gt(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Gl(t,i),t=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=ww(c),t=Un(c,t),f){case 0:i=wh(null,i,c,t,o);break e;case 1:i=ym(null,i,c,t,o);break e;case 11:i=fm(null,i,c,t,o);break e;case 14:i=dm(null,i,c,Un(c.type,t),o);break e}throw Error(n(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Un(c,f),wh(t,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Un(c,f),ym(t,i,c,f,o);case 3:e:{if(vm(i),t===null)throw Error(n(387));c=i.pendingProps,p=i.memoizedState,f=p.element,Np(t,i),$l(i,c,null,o);var v=i.memoizedState;if(c=v.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:v.cache,pendingSuspenseBoundaries:v.pendingSuspenseBoundaries,transitions:v.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=Js(Error(n(423)),i),i=_m(t,i,c,o,f);break e}else if(c!==f){f=Js(Error(n(424)),i),i=_m(t,i,c,o,f);break e}else for(dn=Gr(i.stateNode.containerInfo.firstChild),fn=i,Xe=!0,jn=null,o=Vp(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ks(),c===f){i=Rr(t,i,o);break e}Gt(t,i,c,o)}i=i.child}return i;case 5:return Mp(i),t===null&&Yc(i),c=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,v=f.children,Uc(c,f)?v=null:p!==null&&Uc(c,p)&&(i.flags|=32),gm(t,i),Gt(t,i,v,o),i.child;case 6:return t===null&&Yc(i),null;case 13:return wm(t,i,o);case 4:return ih(i,i.stateNode.containerInfo),c=i.pendingProps,t===null?i.child=Gs(i,null,c,o):Gt(t,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Un(c,f),fm(t,i,c,f,o);case 7:return Gt(t,i,i.pendingProps,o),i.child;case 8:return Gt(t,i,i.pendingProps.children,o),i.child;case 12:return Gt(t,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,p=i.memoizedProps,v=f.value,We(Ml,c._currentValue),c._currentValue=v,p!==null)if($n(p.value,v)){if(p.children===f.children&&!Zt.current){i=Rr(t,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var I=p.dependencies;if(I!==null){v=p.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(p.tag===1){k=Cr(-1,o&-o),k.tag=2;var $=p.updateQueue;if($!==null){$=$.shared;var K=$.pending;K===null?k.next=k:(k.next=K.next,K.next=k),$.pending=k}}p.lanes|=o,k=p.alternate,k!==null&&(k.lanes|=o),th(p.return,o,i),I.lanes|=o;break}k=k.next}}else if(p.tag===10)v=p.type===i.type?null:p.child;else if(p.tag===18){if(v=p.return,v===null)throw Error(n(341));v.lanes|=o,I=v.alternate,I!==null&&(I.lanes|=o),th(v,o,i),v=p.sibling}else v=p.child;if(v!==null)v.return=p;else for(v=p;v!==null;){if(v===i){v=null;break}if(p=v.sibling,p!==null){p.return=v.return,v=p;break}v=v.return}p=v}Gt(t,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ys(i,o),f=In(f),c=c(f),i.flags|=1,Gt(t,i,c,o),i.child;case 14:return c=i.type,f=Un(c,i.pendingProps),f=Un(c.type,f),dm(t,i,c,f,o);case 15:return pm(t,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:Un(c,f),Gl(t,i),i.tag=1,en(c)?(t=!0,xl(i)):t=!1,Ys(i,o),sm(i,c,f),yh(i,c,f,o),Eh(null,i,c,!0,t,o);case 19:return Tm(t,i,o);case 22:return mm(t,i,o)}throw Error(n(156,i.tag))};function Wm(t,i){return Is(t,i)}function _w(t,i,o,c){this.tag=t,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Cn(t,i,o,c){return new _w(t,i,o,c)}function Uh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ww(t){if(typeof t=="function")return Uh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===O)return 11;if(t===wt)return 14}return 2}function si(t,i){var o=t.alternate;return o===null?(o=Cn(t.tag,i,t.key,t.mode),o.elementType=t.elementType,o.type=t.type,o.stateNode=t.stateNode,o.alternate=t,t.alternate=o):(o.pendingProps=i,o.type=t.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=t.flags&14680064,o.childLanes=t.childLanes,o.lanes=t.lanes,o.child=t.child,o.memoizedProps=t.memoizedProps,o.memoizedState=t.memoizedState,o.updateQueue=t.updateQueue,i=t.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=t.sibling,o.index=t.index,o.ref=t.ref,o}function su(t,i,o,c,f,p){var v=2;if(c=t,typeof t=="function")Uh(t)&&(v=1);else if(typeof t=="string")v=5;else e:switch(t){case C:return Yi(o.children,f,p,i);case T:v=8,f|=8;break;case A:return t=Cn(12,o,i,f|2),t.elementType=A,t.lanes=p,t;case S:return t=Cn(13,o,i,f),t.elementType=S,t.lanes=p,t;case Je:return t=Cn(19,o,i,f),t.elementType=Je,t.lanes=p,t;case $e:return ou(o,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:v=10;break e;case V:v=9;break e;case O:v=11;break e;case wt:v=14;break e;case Et:v=16,c=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Cn(v,o,i,f),i.elementType=t,i.type=c,i.lanes=p,i}function Yi(t,i,o,c){return t=Cn(7,t,c,i),t.lanes=o,t}function ou(t,i,o,c){return t=Cn(22,t,c,i),t.elementType=$e,t.lanes=o,t.stateNode={isHidden:!1},t}function zh(t,i,o){return t=Cn(6,t,null,i),t.lanes=o,t}function Bh(t,i,o){return i=Cn(4,t.children!==null?t.children:[],t.key,i),i.lanes=o,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Ew(t,i,o,c,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jr(0),this.expirationTimes=jr(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jr(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Hh(t,i,o,c,f,p,v,I,k){return t=new Ew(t,i,o,I,k),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Cn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},rh(p),t}function Tw(t,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ce,key:c==null?null:""+c,children:t,containerInfo:i,implementation:o}}function Km(t){if(!t)return Yr;t=t._reactInternals;e:{if(Dn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(en(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var o=t.type;if(en(o))return Ep(t,o,i)}return i}function Gm(t,i,o,c,f,p,v,I,k){return t=Hh(o,c,!0,t,f,p,v,I,k),t.context=Km(null),o=t.current,c=Qt(),f=ri(o),p=Cr(c,f),p.callback=i??null,Zr(o,p,f),t.current.lanes=f,Ur(t,f,c),rn(t,c),t}function au(t,i,o,c){var f=i.current,p=Qt(),v=ri(f);return o=Km(o),i.context===null?i.context=o:i.pendingContext=o,i=Cr(p,v),i.payload={element:t},c=c===void 0?null:c,c!==null&&(i.callback=c),t=Zr(f,i,v),t!==null&&(Hn(t,f,v,p),Fl(t,f,v)),v}function lu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Qm(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var o=t.retryLane;t.retryLane=o!==0&&o<i?o:i}}function qh(t,i){Qm(t,i),(t=t.alternate)&&Qm(t,i)}function Iw(){return null}var Ym=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wh(t){this._internalRoot=t}uu.prototype.render=Wh.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));au(t,i,null,null)},uu.prototype.unmount=Wh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Ki(function(){au(null,t,null,null)}),i[Er]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var i=ul();t={blockedOn:null,target:t,priority:i};for(var o=0;o<Xn.length&&i!==0&&i<Xn[o].priority;o++);Xn.splice(o,0,t),o===0&&fl(t)}};function Kh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Xm(){}function Sw(t,i,o,c,f){if(f){if(typeof c=="function"){var p=c;c=function(){var $=lu(v);p.call($)}}var v=Gm(i,c,t,0,null,!1,!1,"",Xm);return t._reactRootContainer=v,t[Er]=v.current,sa(t.nodeType===8?t.parentNode:t),Ki(),v}for(;f=t.lastChild;)t.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var $=lu(k);I.call($)}}var k=Hh(t,0,!1,null,null,!1,!1,"",Xm);return t._reactRootContainer=k,t[Er]=k.current,sa(t.nodeType===8?t.parentNode:t),Ki(function(){au(i,k,o,c)}),k}function hu(t,i,o,c,f){var p=o._reactRootContainer;if(p){var v=p;if(typeof f=="function"){var I=f;f=function(){var k=lu(v);I.call(k)}}au(i,v,t,f)}else v=Sw(o,i,t,f,c);return lu(v)}al=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var o=$r(i.pendingLanes);o!==0&&(zr(i,o|1),rn(i,qe()),(be&6)===0&&(to=qe()+500,Xr()))}break;case 13:Ki(function(){var c=Ar(t,1);if(c!==null){var f=Qt();Hn(c,t,1,f)}}),qh(t,1)}},Cs=function(t){if(t.tag===13){var i=Ar(t,134217728);if(i!==null){var o=Qt();Hn(i,t,134217728,o)}qh(t,134217728)}},ll=function(t){if(t.tag===13){var i=ri(t),o=Ar(t,i);if(o!==null){var c=Qt();Hn(o,t,i,c)}qh(t,i)}},ul=function(){return De},cl=function(t,i){var o=De;try{return De=t,i()}finally{De=o}},ys=function(t,i,o){switch(i){case"input":if(xo(t,o),i=o.name,o.type==="radio"&&i!=null){for(o=t;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==t&&c.form===t.form){var f=kl(c);if(!f)throw Error(n(90));qt(c),xo(c,f)}}}break;case"textarea":ms(t,o);break;case"select":i=o.value,i!=null&&dr(t,!!o.multiple,i,!1)}},Ri=Fh,jo=Ki;var Aw={usingClientEntryPoint:!1,Events:[la,zs,kl,Qn,$o,Fh]},Ta={findFiberByHostInstance:$i,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Cw={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:de.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Bo(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||Iw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fu.isDisabled&&fu.supportsFiber)try{Di=fu.inject(Cw),ln=fu}catch{}}return sn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Aw,sn.createPortal=function(t,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Kh(i))throw Error(n(200));return Tw(t,i,null,o)},sn.createRoot=function(t,i){if(!Kh(t))throw Error(n(299));var o=!1,c="",f=Ym;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Hh(t,1,!1,null,null,o,!1,c,f),t[Er]=i.current,sa(t.nodeType===8?t.parentNode:t),new Wh(i)},sn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Bo(i),t=t===null?null:t.stateNode,t},sn.flushSync=function(t){return Ki(t)},sn.hydrate=function(t,i,o){if(!cu(i))throw Error(n(200));return hu(null,t,i,!0,o)},sn.hydrateRoot=function(t,i,o){if(!Kh(t))throw Error(n(405));var c=o!=null&&o.hydratedSources||null,f=!1,p="",v=Ym;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(v=o.onRecoverableError)),i=Gm(i,null,t,1,o??null,f,!1,p,v),t[Er]=i.current,sa(t),c)for(t=0;t<c.length;t++)o=c[t],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new uu(i)},sn.render=function(t,i,o){if(!cu(i))throw Error(n(200));return hu(null,t,i,!1,o)},sn.unmountComponentAtNode=function(t){if(!cu(t))throw Error(n(40));return t._reactRootContainer?(Ki(function(){hu(null,null,t,!1,function(){t._reactRootContainer=null,t[Er]=null})}),!0):!1},sn.unstable_batchedUpdates=Fh,sn.unstable_renderSubtreeIntoContainer=function(t,i,o,c){if(!cu(o))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return hu(t,i,o,!1,c)},sn.version="18.3.1-next-f1338f8080-20240426",sn}var sg;function Ow(){if(sg)return Yh.exports;sg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Yh.exports=Nw(),Yh.exports}var og;function Lw(){if(og)return du;og=1;var r=Ow();return du.createRoot=r.createRoot,du.hydrateRoot=r.hydrateRoot,du}var Mw=Lw();const bw=Uy(Mw);var Bt=Yf();const qn=Uy(Bt);var kt=function(){return kt=Object.assign||function(e){for(var n,s=1,a=arguments.length;s<a;s++){n=arguments[s];for(var u in n)Object.prototype.hasOwnProperty.call(n,u)&&(e[u]=n[u])}return e},kt.apply(this,arguments)};function co(r,e,n){if(n||arguments.length===2)for(var s=0,a=e.length,u;s<a;s++)(u||!(s in e))&&(u||(u=Array.prototype.slice.call(e,0,s)),u[s]=e[s]);return r.concat(u||Array.prototype.slice.call(e))}var Qe="-ms-",ka="-moz-",Ue="-webkit-",zy="comm",ec="rule",Xf="decl",Fw="@import",By="@keyframes",$w="@layer",Hy=Math.abs,Jf=String.fromCharCode,yf=Object.assign;function jw(r,e){return Rt(r,0)^45?(((e<<2^Rt(r,0))<<2^Rt(r,1))<<2^Rt(r,2))<<2^Rt(r,3):0}function qy(r){return r.trim()}function Pr(r,e){return(r=e.exec(r))?r[0]:r}function Ce(r,e,n){return r.replace(e,n)}function Su(r,e,n){return r.indexOf(e,n)}function Rt(r,e){return r.charCodeAt(e)|0}function ho(r,e,n){return r.slice(e,n)}function or(r){return r.length}function Wy(r){return r.length}function Sa(r,e){return e.push(r),r}function Uw(r,e){return r.map(e).join("")}function ag(r,e){return r.filter(function(n){return!Pr(n,e)})}var tc=1,fo=1,Ky=0,Pn=0,ft=0,So="";function nc(r,e,n,s,a,u,h,m){return{value:r,root:e,parent:n,type:s,props:a,children:u,line:tc,column:fo,length:h,return:"",siblings:m}}function ai(r,e){return yf(nc("",null,null,"",null,null,0,r.siblings),r,{length:-r.length},e)}function ro(r){for(;r.root;)r=ai(r.root,{children:[r]});Sa(r,r.siblings)}function zw(){return ft}function Bw(){return ft=Pn>0?Rt(So,--Pn):0,fo--,ft===10&&(fo=1,tc--),ft}function Kn(){return ft=Pn<Ky?Rt(So,Pn++):0,fo++,ft===10&&(fo=1,tc++),ft}function ts(){return Rt(So,Pn)}function Au(){return Pn}function rc(r,e){return ho(So,r,e)}function vf(r){switch(r){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hw(r){return tc=fo=1,Ky=or(So=r),Pn=0,[]}function qw(r){return So="",r}function Zh(r){return qy(rc(Pn-1,_f(r===91?r+2:r===40?r+1:r)))}function Ww(r){for(;(ft=ts())&&ft<33;)Kn();return vf(r)>2||vf(ft)>3?"":" "}function Kw(r,e){for(;--e&&Kn()&&!(ft<48||ft>102||ft>57&&ft<65||ft>70&&ft<97););return rc(r,Au()+(e<6&&ts()==32&&Kn()==32))}function _f(r){for(;Kn();)switch(ft){case r:return Pn;case 34:case 39:r!==34&&r!==39&&_f(ft);break;case 40:r===41&&_f(r);break;case 92:Kn();break}return Pn}function Gw(r,e){for(;Kn()&&r+ft!==57;)if(r+ft===84&&ts()===47)break;return"/*"+rc(e,Pn-1)+"*"+Jf(r===47?r:Kn())}function Qw(r){for(;!vf(ts());)Kn();return rc(r,Pn)}function Yw(r){return qw(Cu("",null,null,null,[""],r=Hw(r),0,[0],r))}function Cu(r,e,n,s,a,u,h,m,y){for(var _=0,E=0,R=h,N=0,F=0,W=0,B=1,z=1,re=1,se=0,te="",de=a,Se=u,ce=s,C=te;z;)switch(W=se,se=Kn()){case 40:if(W!=108&&Rt(C,R-1)==58){Su(C+=Ce(Zh(se),"&","&\f"),"&\f",Hy(_?m[_-1]:0))!=-1&&(re=-1);break}case 34:case 39:case 91:C+=Zh(se);break;case 9:case 10:case 13:case 32:C+=Ww(W);break;case 92:C+=Kw(Au()-1,7);continue;case 47:switch(ts()){case 42:case 47:Sa(Xw(Gw(Kn(),Au()),e,n,y),y);break;default:C+="/"}break;case 123*B:m[_++]=or(C)*re;case 125*B:case 59:case 0:switch(se){case 0:case 125:z=0;case 59+E:re==-1&&(C=Ce(C,/\f/g,"")),F>0&&or(C)-R&&Sa(F>32?ug(C+";",s,n,R-1,y):ug(Ce(C," ","")+";",s,n,R-2,y),y);break;case 59:C+=";";default:if(Sa(ce=lg(C,e,n,_,E,a,m,te,de=[],Se=[],R,u),u),se===123)if(E===0)Cu(C,e,ce,ce,de,u,R,m,Se);else switch(N===99&&Rt(C,3)===110?100:N){case 100:case 108:case 109:case 115:Cu(r,ce,ce,s&&Sa(lg(r,ce,ce,0,0,a,m,te,a,de=[],R,Se),Se),a,Se,R,m,s?de:Se);break;default:Cu(C,ce,ce,ce,[""],Se,0,m,Se)}}_=E=F=0,B=re=1,te=C="",R=h;break;case 58:R=1+or(C),F=W;default:if(B<1){if(se==123)--B;else if(se==125&&B++==0&&Bw()==125)continue}switch(C+=Jf(se),se*B){case 38:re=E>0?1:(C+="\f",-1);break;case 44:m[_++]=(or(C)-1)*re,re=1;break;case 64:ts()===45&&(C+=Zh(Kn())),N=ts(),E=R=or(te=C+=Qw(Au())),se++;break;case 45:W===45&&or(C)==2&&(B=0)}}return u}function lg(r,e,n,s,a,u,h,m,y,_,E,R){for(var N=a-1,F=a===0?u:[""],W=Wy(F),B=0,z=0,re=0;B<s;++B)for(var se=0,te=ho(r,N+1,N=Hy(z=h[B])),de=r;se<W;++se)(de=qy(z>0?F[se]+" "+te:Ce(te,/&\f/g,F[se])))&&(y[re++]=de);return nc(r,e,n,a===0?ec:m,y,_,E,R)}function Xw(r,e,n,s){return nc(r,e,n,zy,Jf(zw()),ho(r,2,-2),0,s)}function ug(r,e,n,s,a){return nc(r,e,n,Xf,ho(r,0,s),ho(r,s+1,-1),s,a)}function Gy(r,e,n){switch(jw(r,e)){case 5103:return Ue+"print-"+r+r;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ue+r+r;case 4789:return ka+r+r;case 5349:case 4246:case 4810:case 6968:case 2756:return Ue+r+ka+r+Qe+r+r;case 5936:switch(Rt(r,e+11)){case 114:return Ue+r+Qe+Ce(r,/[svh]\w+-[tblr]{2}/,"tb")+r;case 108:return Ue+r+Qe+Ce(r,/[svh]\w+-[tblr]{2}/,"tb-rl")+r;case 45:return Ue+r+Qe+Ce(r,/[svh]\w+-[tblr]{2}/,"lr")+r}case 6828:case 4268:case 2903:return Ue+r+Qe+r+r;case 6165:return Ue+r+Qe+"flex-"+r+r;case 5187:return Ue+r+Ce(r,/(\w+).+(:[^]+)/,Ue+"box-$1$2"+Qe+"flex-$1$2")+r;case 5443:return Ue+r+Qe+"flex-item-"+Ce(r,/flex-|-self/g,"")+(Pr(r,/flex-|baseline/)?"":Qe+"grid-row-"+Ce(r,/flex-|-self/g,""))+r;case 4675:return Ue+r+Qe+"flex-line-pack"+Ce(r,/align-content|flex-|-self/g,"")+r;case 5548:return Ue+r+Qe+Ce(r,"shrink","negative")+r;case 5292:return Ue+r+Qe+Ce(r,"basis","preferred-size")+r;case 6060:return Ue+"box-"+Ce(r,"-grow","")+Ue+r+Qe+Ce(r,"grow","positive")+r;case 4554:return Ue+Ce(r,/([^-])(transform)/g,"$1"+Ue+"$2")+r;case 6187:return Ce(Ce(Ce(r,/(zoom-|grab)/,Ue+"$1"),/(image-set)/,Ue+"$1"),r,"")+r;case 5495:case 3959:return Ce(r,/(image-set\([^]*)/,Ue+"$1$`$1");case 4968:return Ce(Ce(r,/(.+:)(flex-)?(.*)/,Ue+"box-pack:$3"+Qe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ue+r+r;case 4200:if(!Pr(r,/flex-|baseline/))return Qe+"grid-column-align"+ho(r,e)+r;break;case 2592:case 3360:return Qe+Ce(r,"template-","")+r;case 4384:case 3616:return n&&n.some(function(s,a){return e=a,Pr(s.props,/grid-\w+-end/)})?~Su(r+(n=n[e].value),"span",0)?r:Qe+Ce(r,"-start","")+r+Qe+"grid-row-span:"+(~Su(n,"span",0)?Pr(n,/\d+/):+Pr(n,/\d+/)-+Pr(r,/\d+/))+";":Qe+Ce(r,"-start","")+r;case 4896:case 4128:return n&&n.some(function(s){return Pr(s.props,/grid-\w+-start/)})?r:Qe+Ce(Ce(r,"-end","-span"),"span ","")+r;case 4095:case 3583:case 4068:case 2532:return Ce(r,/(.+)-inline(.+)/,Ue+"$1$2")+r;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(or(r)-1-e>6)switch(Rt(r,e+1)){case 109:if(Rt(r,e+4)!==45)break;case 102:return Ce(r,/(.+:)(.+)-([^]+)/,"$1"+Ue+"$2-$3$1"+ka+(Rt(r,e+3)==108?"$3":"$2-$3"))+r;case 115:return~Su(r,"stretch",0)?Gy(Ce(r,"stretch","fill-available"),e,n)+r:r}break;case 5152:case 5920:return Ce(r,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,a,u,h,m,y,_){return Qe+a+":"+u+_+(h?Qe+a+"-span:"+(m?y:+y-+u)+_:"")+r});case 4949:if(Rt(r,e+6)===121)return Ce(r,":",":"+Ue)+r;break;case 6444:switch(Rt(r,Rt(r,14)===45?18:11)){case 120:return Ce(r,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ue+(Rt(r,14)===45?"inline-":"")+"box$3$1"+Ue+"$2$3$1"+Qe+"$2box$3")+r;case 100:return Ce(r,":",":"+Qe)+r}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ce(r,"scroll-","scroll-snap-")+r}return r}function Ou(r,e){for(var n="",s=0;s<r.length;s++)n+=e(r[s],s,r,e)||"";return n}function Jw(r,e,n,s){switch(r.type){case $w:if(r.children.length)break;case Fw:case Xf:return r.return=r.return||r.value;case zy:return"";case By:return r.return=r.value+"{"+Ou(r.children,s)+"}";case ec:if(!or(r.value=r.props.join(",")))return""}return or(n=Ou(r.children,s))?r.return=r.value+"{"+n+"}":""}function Zw(r){var e=Wy(r);return function(n,s,a,u){for(var h="",m=0;m<e;m++)h+=r[m](n,s,a,u)||"";return h}}function eE(r){return function(e){e.root||(e=e.return)&&r(e)}}function tE(r,e,n,s){if(r.length>-1&&!r.return)switch(r.type){case Xf:r.return=Gy(r.value,r.length,n);return;case By:return Ou([ai(r,{value:Ce(r.value,"@","@"+Ue)})],s);case ec:if(r.length)return Uw(n=r.props,function(a){switch(Pr(a,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":ro(ai(r,{props:[Ce(a,/:(read-\w+)/,":"+ka+"$1")]})),ro(ai(r,{props:[a]})),yf(r,{props:ag(n,s)});break;case"::placeholder":ro(ai(r,{props:[Ce(a,/:(plac\w+)/,":"+Ue+"input-$1")]})),ro(ai(r,{props:[Ce(a,/:(plac\w+)/,":"+ka+"$1")]})),ro(ai(r,{props:[Ce(a,/:(plac\w+)/,Qe+"input-$1")]})),ro(ai(r,{props:[a]})),yf(r,{props:ag(n,s)});break}return""})}}var nE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},mn={},po=typeof process<"u"&&mn!==void 0&&(mn.REACT_APP_SC_ATTR||mn.SC_ATTR)||"data-styled",Qy="active",Yy="data-styled-version",ic="6.1.17",Zf=`/*!sc*/
`,Lu=typeof window<"u"&&"HTMLElement"in window,rE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&mn!==void 0&&mn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&mn.REACT_APP_SC_DISABLE_SPEEDY!==""?mn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&mn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&mn!==void 0&&mn.SC_DISABLE_SPEEDY!==void 0&&mn.SC_DISABLE_SPEEDY!==""&&mn.SC_DISABLE_SPEEDY!=="false"&&mn.SC_DISABLE_SPEEDY),iE={},sc=Object.freeze([]),mo=Object.freeze({});function Xy(r,e,n){return n===void 0&&(n=mo),r.theme!==n.theme&&r.theme||e||n.theme}var Jy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),sE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oE=/(^-|-$)/g;function cg(r){return r.replace(sE,"-").replace(oE,"")}var aE=/(a)(d)/gi,pu=52,hg=function(r){return String.fromCharCode(r+(r>25?39:97))};function wf(r){var e,n="";for(e=Math.abs(r);e>pu;e=e/pu|0)n=hg(e%pu)+n;return(hg(e%pu)+n).replace(aE,"$1-$2")}var ef,Zy=5381,lo=function(r,e){for(var n=e.length;n;)r=33*r^e.charCodeAt(--n);return r},ev=function(r){return lo(Zy,r)};function ed(r){return wf(ev(r)>>>0)}function lE(r){return r.displayName||r.name||"Component"}function tf(r){return typeof r=="string"&&!0}var tv=typeof Symbol=="function"&&Symbol.for,nv=tv?Symbol.for("react.memo"):60115,uE=tv?Symbol.for("react.forward_ref"):60112,cE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},hE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},rv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},fE=((ef={})[uE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ef[nv]=rv,ef);function fg(r){return("type"in(e=r)&&e.type.$$typeof)===nv?rv:"$$typeof"in r?fE[r.$$typeof]:cE;var e}var dE=Object.defineProperty,pE=Object.getOwnPropertyNames,dg=Object.getOwnPropertySymbols,mE=Object.getOwnPropertyDescriptor,gE=Object.getPrototypeOf,pg=Object.prototype;function iv(r,e,n){if(typeof e!="string"){if(pg){var s=gE(e);s&&s!==pg&&iv(r,s,n)}var a=pE(e);dg&&(a=a.concat(dg(e)));for(var u=fg(r),h=fg(e),m=0;m<a.length;++m){var y=a[m];if(!(y in hE||n&&n[y]||h&&y in h||u&&y in u)){var _=mE(e,y);try{dE(r,y,_)}catch{}}}}return r}function ns(r){return typeof r=="function"}function td(r){return typeof r=="object"&&"styledComponentId"in r}function Ji(r,e){return r&&e?"".concat(r," ").concat(e):r||e||""}function Mu(r,e){if(r.length===0)return"";for(var n=r[0],s=1;s<r.length;s++)n+=r[s];return n}function Oa(r){return r!==null&&typeof r=="object"&&r.constructor.name===Object.name&&!("props"in r&&r.$$typeof)}function Ef(r,e,n){if(n===void 0&&(n=!1),!n&&!Oa(r)&&!Array.isArray(r))return e;if(Array.isArray(e))for(var s=0;s<e.length;s++)r[s]=Ef(r[s],e[s]);else if(Oa(e))for(var s in e)r[s]=Ef(r[s],e[s]);return r}function nd(r,e){Object.defineProperty(r,"toString",{value:e})}function rs(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(r," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var yE=function(){function r(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return r.prototype.indexOfGroup=function(e){for(var n=0,s=0;s<e;s++)n+=this.groupSizes[s];return n},r.prototype.insertRules=function(e,n){if(e>=this.groupSizes.length){for(var s=this.groupSizes,a=s.length,u=a;e>=u;)if((u<<=1)<0)throw rs(16,"".concat(e));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var h=a;h<u;h++)this.groupSizes[h]=0}for(var m=this.indexOfGroup(e+1),y=(h=0,n.length);h<y;h++)this.tag.insertRule(m,n[h])&&(this.groupSizes[e]++,m++)},r.prototype.clearGroup=function(e){if(e<this.length){var n=this.groupSizes[e],s=this.indexOfGroup(e),a=s+n;this.groupSizes[e]=0;for(var u=s;u<a;u++)this.tag.deleteRule(s)}},r.prototype.getGroup=function(e){var n="";if(e>=this.length||this.groupSizes[e]===0)return n;for(var s=this.groupSizes[e],a=this.indexOfGroup(e),u=a+s,h=a;h<u;h++)n+="".concat(this.tag.getRule(h)).concat(Zf);return n},r}(),Ru=new Map,bu=new Map,ku=1,mu=function(r){if(Ru.has(r))return Ru.get(r);for(;bu.has(ku);)ku++;var e=ku++;return Ru.set(r,e),bu.set(e,r),e},vE=function(r,e){ku=e+1,Ru.set(r,e),bu.set(e,r)},_E="style[".concat(po,"][").concat(Yy,'="').concat(ic,'"]'),wE=new RegExp("^".concat(po,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),EE=function(r,e,n){for(var s,a=n.split(","),u=0,h=a.length;u<h;u++)(s=a[u])&&r.registerName(e,s)},TE=function(r,e){for(var n,s=((n=e.textContent)!==null&&n!==void 0?n:"").split(Zf),a=[],u=0,h=s.length;u<h;u++){var m=s[u].trim();if(m){var y=m.match(wE);if(y){var _=0|parseInt(y[1],10),E=y[2];_!==0&&(vE(E,_),EE(r,E,y[3]),r.getTag().insertRules(_,a)),a.length=0}else a.push(m)}}},mg=function(r){for(var e=document.querySelectorAll(_E),n=0,s=e.length;n<s;n++){var a=e[n];a&&a.getAttribute(po)!==Qy&&(TE(r,a),a.parentNode&&a.parentNode.removeChild(a))}};function IE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var sv=function(r){var e=document.head,n=r||e,s=document.createElement("style"),a=function(m){var y=Array.from(m.querySelectorAll("style[".concat(po,"]")));return y[y.length-1]}(n),u=a!==void 0?a.nextSibling:null;s.setAttribute(po,Qy),s.setAttribute(Yy,ic);var h=IE();return h&&s.setAttribute("nonce",h),n.insertBefore(s,u),s},SE=function(){function r(e){this.element=sv(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var s=document.styleSheets,a=0,u=s.length;a<u;a++){var h=s[a];if(h.ownerNode===n)return h}throw rs(17)}(this.element),this.length=0}return r.prototype.insertRule=function(e,n){try{return this.sheet.insertRule(n,e),this.length++,!0}catch{return!1}},r.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},r.prototype.getRule=function(e){var n=this.sheet.cssRules[e];return n&&n.cssText?n.cssText:""},r}(),AE=function(){function r(e){this.element=sv(e),this.nodes=this.element.childNodes,this.length=0}return r.prototype.insertRule=function(e,n){if(e<=this.length&&e>=0){var s=document.createTextNode(n);return this.element.insertBefore(s,this.nodes[e]||null),this.length++,!0}return!1},r.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},r.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},r}(),CE=function(){function r(e){this.rules=[],this.length=0}return r.prototype.insertRule=function(e,n){return e<=this.length&&(this.rules.splice(e,0,n),this.length++,!0)},r.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},r.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},r}(),gg=Lu,RE={isServer:!Lu,useCSSOMInjection:!rE},Fu=function(){function r(e,n,s){e===void 0&&(e=mo),n===void 0&&(n={});var a=this;this.options=kt(kt({},RE),e),this.gs=n,this.names=new Map(s),this.server=!!e.isServer,!this.server&&Lu&&gg&&(gg=!1,mg(this)),nd(this,function(){return function(u){for(var h=u.getTag(),m=h.length,y="",_=function(R){var N=function(re){return bu.get(re)}(R);if(N===void 0)return"continue";var F=u.names.get(N),W=h.getGroup(R);if(F===void 0||!F.size||W.length===0)return"continue";var B="".concat(po,".g").concat(R,'[id="').concat(N,'"]'),z="";F!==void 0&&F.forEach(function(re){re.length>0&&(z+="".concat(re,","))}),y+="".concat(W).concat(B,'{content:"').concat(z,'"}').concat(Zf)},E=0;E<m;E++)_(E);return y}(a)})}return r.registerId=function(e){return mu(e)},r.prototype.rehydrate=function(){!this.server&&Lu&&mg(this)},r.prototype.reconstructWithOptions=function(e,n){return n===void 0&&(n=!0),new r(kt(kt({},this.options),e),this.gs,n&&this.names||void 0)},r.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},r.prototype.getTag=function(){return this.tag||(this.tag=(e=function(n){var s=n.useCSSOMInjection,a=n.target;return n.isServer?new CE(a):s?new SE(a):new AE(a)}(this.options),new yE(e)));var e},r.prototype.hasNameForId=function(e,n){return this.names.has(e)&&this.names.get(e).has(n)},r.prototype.registerName=function(e,n){if(mu(e),this.names.has(e))this.names.get(e).add(n);else{var s=new Set;s.add(n),this.names.set(e,s)}},r.prototype.insertRules=function(e,n,s){this.registerName(e,n),this.getTag().insertRules(mu(e),s)},r.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},r.prototype.clearRules=function(e){this.getTag().clearGroup(mu(e)),this.clearNames(e)},r.prototype.clearTag=function(){this.tag=void 0},r}(),kE=/&/g,PE=/^\s*\/\/.*$/gm;function ov(r,e){return r.map(function(n){return n.type==="rule"&&(n.value="".concat(e," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(e," ")),n.props=n.props.map(function(s){return"".concat(e," ").concat(s)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=ov(n.children,e)),n})}function xE(r){var e,n,s,a=mo,u=a.options,h=u===void 0?mo:u,m=a.plugins,y=m===void 0?sc:m,_=function(N,F,W){return W.startsWith(n)&&W.endsWith(n)&&W.replaceAll(n,"").length>0?".".concat(e):N},E=y.slice();E.push(function(N){N.type===ec&&N.value.includes("&")&&(N.props[0]=N.props[0].replace(kE,n).replace(s,_))}),h.prefix&&E.push(tE),E.push(Jw);var R=function(N,F,W,B){F===void 0&&(F=""),W===void 0&&(W=""),B===void 0&&(B="&"),e=B,n=F,s=new RegExp("\\".concat(n,"\\b"),"g");var z=N.replace(PE,""),re=Yw(W||F?"".concat(W," ").concat(F," { ").concat(z," }"):z);h.namespace&&(re=ov(re,h.namespace));var se=[];return Ou(re,Zw(E.concat(eE(function(te){return se.push(te)})))),se};return R.hash=y.length?y.reduce(function(N,F){return F.name||rs(15),lo(N,F.name)},Zy).toString():"",R}var VE=new Fu,Tf=xE(),av=qn.createContext({shouldForwardProp:void 0,styleSheet:VE,stylis:Tf});av.Consumer;qn.createContext(void 0);function If(){return Bt.useContext(av)}var lv=function(){function r(e,n){var s=this;this.inject=function(a,u){u===void 0&&(u=Tf);var h=s.name+u.hash;a.hasNameForId(s.id,h)||a.insertRules(s.id,h,u(s.rules,h,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=n,nd(this,function(){throw rs(12,String(s.name))})}return r.prototype.getName=function(e){return e===void 0&&(e=Tf),this.name+e.hash},r}(),DE=function(r){return r>="A"&&r<="Z"};function yg(r){for(var e="",n=0;n<r.length;n++){var s=r[n];if(n===1&&s==="-"&&r[0]==="-")return r;DE(s)?e+="-"+s.toLowerCase():e+=s}return e.startsWith("ms-")?"-"+e:e}var uv=function(r){return r==null||r===!1||r===""},cv=function(r){var e,n,s=[];for(var a in r){var u=r[a];r.hasOwnProperty(a)&&!uv(u)&&(Array.isArray(u)&&u.isCss||ns(u)?s.push("".concat(yg(a),":"),u,";"):Oa(u)?s.push.apply(s,co(co(["".concat(a," {")],cv(u),!1),["}"],!1)):s.push("".concat(yg(a),": ").concat((e=a,(n=u)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||e in nE||e.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return s};function ui(r,e,n,s){if(uv(r))return[];if(td(r))return[".".concat(r.styledComponentId)];if(ns(r)){if(!ns(u=r)||u.prototype&&u.prototype.isReactComponent||!e)return[r];var a=r(e);return ui(a,e,n,s)}var u;return r instanceof lv?n?(r.inject(n,s),[r.getName(s)]):[r]:Oa(r)?cv(r):Array.isArray(r)?Array.prototype.concat.apply(sc,r.map(function(h){return ui(h,e,n,s)})):[r.toString()]}function hv(r){for(var e=0;e<r.length;e+=1){var n=r[e];if(ns(n)&&!td(n))return!1}return!0}var NE=ev(ic),OE=function(){function r(e,n,s){this.rules=e,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&hv(e),this.componentId=n,this.baseHash=lo(NE,n),this.baseStyle=s,Fu.registerId(n)}return r.prototype.generateAndInjectStyles=function(e,n,s){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,n,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Ji(a,this.staticRulesId);else{var u=Mu(ui(this.rules,e,n,s)),h=wf(lo(this.baseHash,u)>>>0);if(!n.hasNameForId(this.componentId,h)){var m=s(u,".".concat(h),void 0,this.componentId);n.insertRules(this.componentId,h,m)}a=Ji(a,h),this.staticRulesId=h}else{for(var y=lo(this.baseHash,s.hash),_="",E=0;E<this.rules.length;E++){var R=this.rules[E];if(typeof R=="string")_+=R;else if(R){var N=Mu(ui(R,e,n,s));y=lo(y,N+E),_+=N}}if(_){var F=wf(y>>>0);n.hasNameForId(this.componentId,F)||n.insertRules(this.componentId,F,s(_,".".concat(F),void 0,this.componentId)),a=Ji(a,F)}}return a},r}(),La=qn.createContext(void 0);La.Consumer;function LE(r){var e=qn.useContext(La),n=Bt.useMemo(function(){return function(s,a){if(!s)throw rs(14);if(ns(s)){var u=s(a);return u}if(Array.isArray(s)||typeof s!="object")throw rs(8);return a?kt(kt({},a),s):s}(r.theme,e)},[r.theme,e]);return r.children?qn.createElement(La.Provider,{value:n},r.children):null}var nf={};function ME(r,e,n){var s=td(r),a=r,u=!tf(r),h=e.attrs,m=h===void 0?sc:h,y=e.componentId,_=y===void 0?function(de,Se){var ce=typeof de!="string"?"sc":cg(de);nf[ce]=(nf[ce]||0)+1;var C="".concat(ce,"-").concat(ed(ic+ce+nf[ce]));return Se?"".concat(Se,"-").concat(C):C}(e.displayName,e.parentComponentId):y,E=e.displayName,R=E===void 0?function(de){return tf(de)?"styled.".concat(de):"Styled(".concat(lE(de),")")}(r):E,N=e.displayName&&e.componentId?"".concat(cg(e.displayName),"-").concat(e.componentId):e.componentId||_,F=s&&a.attrs?a.attrs.concat(m).filter(Boolean):m,W=e.shouldForwardProp;if(s&&a.shouldForwardProp){var B=a.shouldForwardProp;if(e.shouldForwardProp){var z=e.shouldForwardProp;W=function(de,Se){return B(de,Se)&&z(de,Se)}}else W=B}var re=new OE(n,N,s?a.componentStyle:void 0);function se(de,Se){return function(ce,C,T){var A=ce.attrs,P=ce.componentStyle,V=ce.defaultProps,O=ce.foldedComponentIds,S=ce.styledComponentId,Je=ce.target,wt=qn.useContext(La),Et=If(),$e=ce.shouldForwardProp||Et.shouldForwardProp,J=Xy(C,wt,V)||mo,le=function(Ie,Ae,xe){for(var Pe,Ne=kt(kt({},Ae),{className:void 0,theme:xe}),nt=0;nt<Ie.length;nt+=1){var Yt=ns(Pe=Ie[nt])?Pe(Ne):Pe;for(var qt in Yt)Ne[qt]=qt==="className"?Ji(Ne[qt],Yt[qt]):qt==="style"?kt(kt({},Ne[qt]),Yt[qt]):Yt[qt]}return Ae.className&&(Ne.className=Ji(Ne.className,Ae.className)),Ne}(A,C,J),Z=le.as||Je,D={};for(var U in le)le[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&le.theme===J||(U==="forwardedAs"?D.as=le.forwardedAs:$e&&!$e(U,Z)||(D[U]=le[U]));var fe=function(Ie,Ae){var xe=If(),Pe=Ie.generateAndInjectStyles(Ae,xe.styleSheet,xe.stylis);return Pe}(P,le),Te=Ji(O,S);return fe&&(Te+=" "+fe),le.className&&(Te+=" "+le.className),D[tf(Z)&&!Jy.has(Z)?"class":"className"]=Te,T&&(D.ref=T),Bt.createElement(Z,D)}(te,de,Se)}se.displayName=R;var te=qn.forwardRef(se);return te.attrs=F,te.componentStyle=re,te.displayName=R,te.shouldForwardProp=W,te.foldedComponentIds=s?Ji(a.foldedComponentIds,a.styledComponentId):"",te.styledComponentId=N,te.target=s?a.target:r,Object.defineProperty(te,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(de){this._foldedDefaultProps=s?function(Se){for(var ce=[],C=1;C<arguments.length;C++)ce[C-1]=arguments[C];for(var T=0,A=ce;T<A.length;T++)Ef(Se,A[T],!0);return Se}({},a.defaultProps,de):de}}),nd(te,function(){return".".concat(te.styledComponentId)}),u&&iv(te,r,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),te}function vg(r,e){for(var n=[r[0]],s=0,a=e.length;s<a;s+=1)n.push(e[s],r[s+1]);return n}var _g=function(r){return Object.assign(r,{isCss:!0})};function Lt(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];if(ns(r)||Oa(r))return _g(ui(vg(sc,co([r],e,!0))));var s=r;return e.length===0&&s.length===1&&typeof s[0]=="string"?ui(s):_g(ui(vg(s,e)))}function Sf(r,e,n){if(n===void 0&&(n=mo),!e)throw rs(1,e);var s=function(a){for(var u=[],h=1;h<arguments.length;h++)u[h-1]=arguments[h];return r(e,n,Lt.apply(void 0,co([a],u,!1)))};return s.attrs=function(a){return Sf(r,e,kt(kt({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},s.withConfig=function(a){return Sf(r,e,kt(kt({},n),a))},s}var fv=function(r){return Sf(ME,r)},Fe=fv;Jy.forEach(function(r){Fe[r]=fv(r)});var bE=function(){function r(e,n){this.rules=e,this.componentId=n,this.isStatic=hv(e),Fu.registerId(this.componentId+1)}return r.prototype.createStyles=function(e,n,s,a){var u=a(Mu(ui(this.rules,n,s,a)),""),h=this.componentId+e;s.insertRules(h,h,u)},r.prototype.removeStyles=function(e,n){n.clearRules(this.componentId+e)},r.prototype.renderStyles=function(e,n,s,a){e>2&&Fu.registerId(this.componentId+e),this.removeStyles(e,s),this.createStyles(e,n,s,a)},r}();function FE(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var s=Lt.apply(void 0,co([r],e,!1)),a="sc-global-".concat(ed(JSON.stringify(s))),u=new bE(s,a),h=function(y){var _=If(),E=qn.useContext(La),R=qn.useRef(_.styleSheet.allocateGSInstance(a)).current;return _.styleSheet.server&&m(R,y,_.styleSheet,E,_.stylis),qn.useLayoutEffect(function(){if(!_.styleSheet.server)return m(R,y,_.styleSheet,E,_.stylis),function(){return u.removeStyles(R,_.styleSheet)}},[R,y,_.styleSheet,E,_.stylis]),null};function m(y,_,E,R,N){if(u.isStatic)u.renderStyles(y,iE,E,N);else{var F=kt(kt({},_),{theme:Xy(_,R,h.defaultProps)});u.renderStyles(y,F,E,N)}}return qn.memo(h)}function Lr(r){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var s=Mu(Lt.apply(void 0,co([r],e,!1))),a=ed(s);return new lv(a,s)}/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $E=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jE=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase()),wg=r=>{const e=jE(r);return e.charAt(0).toUpperCase()+e.slice(1)},dv=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Bt.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:a="",children:u,iconNode:h,...m},y)=>Bt.createElement("svg",{ref:y,...UE,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:dv("lucide",a),...m},[...h.map(([_,E])=>Bt.createElement(_,E)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=(r,e)=>{const n=Bt.forwardRef(({className:s,...a},u)=>Bt.createElement(zE,{ref:u,iconNode:e,className:dv(`lucide-${$E(wg(r))}`,`lucide-${r}`,s),...a}));return n.displayName=wg(r),n};/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=[["path",{d:"M15 12H3",key:"6jk70r"}],["path",{d:"M17 18H3",key:"1amg6g"}],["path",{d:"M21 6H3",key:"1jwq7v"}]],Eg=Ei("align-left",BE);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Tg=Ei("clock",HE);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]],pv=Ei("moon",qE);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],Ig=Ei("pause",WE);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KE=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],GE=Ei("play",KE);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QE=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],YE=Ei("sun",QE);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Sg=Ei("user",XE);/**
 * @license lucide-react v0.488.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JE=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],ZE=Ei("volume-2",JE),e1=()=>{};var Ag={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let a=r.charCodeAt(s);a<128?e[n++]=a:a<2048?(e[n++]=a>>6|192,e[n++]=a&63|128):(a&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=a>>18|240,e[n++]=a>>12&63|128,e[n++]=a>>6&63|128,e[n++]=a&63|128):(e[n++]=a>>12|224,e[n++]=a>>6&63|128,e[n++]=a&63|128)}return e},t1=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const a=r[n++];if(a<128)e[s++]=String.fromCharCode(a);else if(a>191&&a<224){const u=r[n++];e[s++]=String.fromCharCode((a&31)<<6|u&63)}else if(a>239&&a<365){const u=r[n++],h=r[n++],m=r[n++],y=((a&7)<<18|(u&63)<<12|(h&63)<<6|m&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],h=r[n++];e[s++]=String.fromCharCode((a&15)<<12|(u&63)<<6|h&63)}}return e.join("")},gv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let a=0;a<r.length;a+=3){const u=r[a],h=a+1<r.length,m=h?r[a+1]:0,y=a+2<r.length,_=y?r[a+2]:0,E=u>>2,R=(u&3)<<4|m>>4;let N=(m&15)<<2|_>>6,F=_&63;y||(F=64,h||(N=64)),s.push(n[E],n[R],n[N],n[F])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(mv(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):t1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let a=0;a<r.length;){const u=n[r.charAt(a++)],m=a<r.length?n[r.charAt(a)]:0;++a;const _=a<r.length?n[r.charAt(a)]:64;++a;const R=a<r.length?n[r.charAt(a)]:64;if(++a,u==null||m==null||_==null||R==null)throw new n1;const N=u<<2|m>>4;if(s.push(N),_!==64){const F=m<<4&240|_>>2;if(s.push(F),R!==64){const W=_<<6&192|R;s.push(W)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class n1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const r1=function(r){const e=mv(r);return gv.encodeByteArray(e,!0)},$u=function(r){return r1(r).replace(/\./g,"")},i1=function(r){try{return gv.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1=()=>s1().__FIREBASE_DEFAULTS__,a1=()=>{if(typeof process>"u"||typeof Ag>"u")return;const r=Ag.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},l1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&i1(r[1]);return e&&JSON.parse(e)},rd=()=>{try{return e1()||o1()||a1()||l1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},u1=r=>{var e,n;return(n=(e=rd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[r]},c1=r=>{const e=u1(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},yv=()=>{var r;return(r=rd())===null||r===void 0?void 0:r.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",a=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const h=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:a,exp:a+3600,auth_time:a,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}}},r);return[$u(JSON.stringify(n)),$u(JSON.stringify(h)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function p1(){var r;const e=(r=rd())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function m1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function g1(){return!p1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vv(){try{return typeof indexedDB=="object"}catch{return!1}}function _v(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(s);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var u;e(((u=a.error)===null||u===void 0?void 0:u.message)||"")}}catch(n){e(n)}})}function y1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="FirebaseError";class Ti extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=v1,Object.setPrototypeOf(this,Ti.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oc.prototype.create)}}class oc{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},a=`${this.service}/${e}`,u=this.errors[e],h=u?_1(u,s):"Error",m=`${this.serviceName}: ${h} (${a}).`;return new Ti(a,m,s)}}function _1(r,e){return r.replace(w1,(n,s)=>{const a=e[s];return a!=null?String(a):`<${s}?>`})}const w1=/\{\$([^}]+)}/g;function Ma(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const a of n){if(!s.includes(a))return!1;const u=r[a],h=e[a];if(Cg(u)&&Cg(h)){if(!Ma(u,h))return!1}else if(u!==h)return!1}for(const a of s)if(!n.includes(a))return!1;return!0}function Cg(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E1=1e3,T1=2,I1=4*60*60*1e3,S1=.5;function Rg(r,e=E1,n=T1){const s=e*Math.pow(n,r),a=Math.round(S1*s*(Math.random()-.5)*2);return Math.min(I1,s+a)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(r){return r&&r._delegate?r._delegate:r}class Vr{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new h1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:n});a&&s.resolve(a)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),a=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(a)return null;throw u}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(R1(e))try{this.getOrInitializeService({instanceIdentifier:Xi})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:a});s.resolve(u)}catch{}}}}clearInstance(e=Xi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Xi){return this.instances.has(e)}getOptions(e=Xi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,h]of this.instancesDeferred.entries()){const m=this.normalizeInstanceIdentifier(u);s===m&&h.resolve(a)}return a}onInit(e,n){var s;const a=this.normalizeInstanceIdentifier(n),u=(s=this.onInitCallbacks.get(a))!==null&&s!==void 0?s:new Set;u.add(e),this.onInitCallbacks.set(a,u);const h=this.instances.get(a);return h&&e(h,a),()=>{u.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const a of s)try{a(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:C1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Xi){return this.component?this.component.multipleInstances?e:Xi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function C1(r){return r===Xi?void 0:r}function R1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new A1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const P1={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},x1=Me.INFO,V1={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},D1=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),a=V1[e];if(a)console[a](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class id{constructor(e){this.name=e,this._logLevel=x1,this._logHandler=D1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?P1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}const N1=(r,e)=>e.some(n=>r instanceof n);let kg,Pg;function O1(){return kg||(kg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function L1(){return Pg||(Pg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wv=new WeakMap,Af=new WeakMap,Ev=new WeakMap,rf=new WeakMap,sd=new WeakMap;function M1(r){const e=new Promise((n,s)=>{const a=()=>{r.removeEventListener("success",u),r.removeEventListener("error",h)},u=()=>{n(ci(r.result)),a()},h=()=>{s(r.error),a()};r.addEventListener("success",u),r.addEventListener("error",h)});return e.then(n=>{n instanceof IDBCursor&&wv.set(n,r)}).catch(()=>{}),sd.set(e,r),e}function b1(r){if(Af.has(r))return;const e=new Promise((n,s)=>{const a=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",h),r.removeEventListener("abort",h)},u=()=>{n(),a()},h=()=>{s(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",u),r.addEventListener("error",h),r.addEventListener("abort",h)});Af.set(r,e)}let Cf={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Af.get(r);if(e==="objectStoreNames")return r.objectStoreNames||Ev.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ci(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function F1(r){Cf=r(Cf)}function $1(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(sf(this),e,...n);return Ev.set(s,e.sort?e.sort():[e]),ci(s)}:L1().includes(r)?function(...e){return r.apply(sf(this),e),ci(wv.get(this))}:function(...e){return ci(r.apply(sf(this),e))}}function j1(r){return typeof r=="function"?$1(r):(r instanceof IDBTransaction&&b1(r),N1(r,O1())?new Proxy(r,Cf):r)}function ci(r){if(r instanceof IDBRequest)return M1(r);if(rf.has(r))return rf.get(r);const e=j1(r);return e!==r&&(rf.set(r,e),sd.set(e,r)),e}const sf=r=>sd.get(r);function Tv(r,e,{blocked:n,upgrade:s,blocking:a,terminated:u}={}){const h=indexedDB.open(r,e),m=ci(h);return s&&h.addEventListener("upgradeneeded",y=>{s(ci(h.result),y.oldVersion,y.newVersion,ci(h.transaction),y)}),n&&h.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),m.then(y=>{u&&y.addEventListener("close",()=>u()),a&&y.addEventListener("versionchange",_=>a(_.oldVersion,_.newVersion,_))}).catch(()=>{}),m}const U1=["get","getKey","getAll","getAllKeys","count"],z1=["put","add","delete","clear"],of=new Map;function xg(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(of.get(e))return of.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,a=z1.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(a||U1.includes(n)))return;const u=async function(h,...m){const y=this.transaction(h,a?"readwrite":"readonly");let _=y.store;return s&&(_=_.index(m.shift())),(await Promise.all([_[n](...m),a&&y.done]))[0]};return of.set(e,u),u}F1(r=>({...r,get:(e,n,s)=>xg(e,n)||r.get(e,n,s),has:(e,n)=>!!xg(e,n)||r.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(H1(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function H1(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Rf="@firebase/app",Vg="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new id("@firebase/app"),q1="@firebase/app-compat",W1="@firebase/analytics-compat",K1="@firebase/analytics",G1="@firebase/app-check-compat",Q1="@firebase/app-check",Y1="@firebase/auth",X1="@firebase/auth-compat",J1="@firebase/database",Z1="@firebase/data-connect",eT="@firebase/database-compat",tT="@firebase/functions",nT="@firebase/functions-compat",rT="@firebase/installations",iT="@firebase/installations-compat",sT="@firebase/messaging",oT="@firebase/messaging-compat",aT="@firebase/performance",lT="@firebase/performance-compat",uT="@firebase/remote-config",cT="@firebase/remote-config-compat",hT="@firebase/storage",fT="@firebase/storage-compat",dT="@firebase/firestore",pT="@firebase/vertexai",mT="@firebase/firestore-compat",gT="firebase",yT="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="[DEFAULT]",vT={[Rf]:"fire-core",[q1]:"fire-core-compat",[K1]:"fire-analytics",[W1]:"fire-analytics-compat",[Q1]:"fire-app-check",[G1]:"fire-app-check-compat",[Y1]:"fire-auth",[X1]:"fire-auth-compat",[J1]:"fire-rtdb",[Z1]:"fire-data-connect",[eT]:"fire-rtdb-compat",[tT]:"fire-fn",[nT]:"fire-fn-compat",[rT]:"fire-iid",[iT]:"fire-iid-compat",[sT]:"fire-fcm",[oT]:"fire-fcm-compat",[aT]:"fire-perf",[lT]:"fire-perf-compat",[uT]:"fire-rc",[cT]:"fire-rc-compat",[hT]:"fire-gcs",[fT]:"fire-gcs-compat",[dT]:"fire-fst",[mT]:"fire-fst-compat",[pT]:"fire-vertex","fire-js":"fire-js",[gT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ju=new Map,_T=new Map,Pf=new Map;function Dg(r,e){try{r.container.addComponent(e)}catch(n){Dr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function pi(r){const e=r.name;if(Pf.has(e))return Dr.debug(`There were multiple attempts to register component ${e}.`),!1;Pf.set(e,r);for(const n of ju.values())Dg(n,r);for(const n of _T.values())Dg(n,r);return!0}function Ka(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function wT(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},hi=new oc("app","Firebase",ET);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TT{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Vr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw hi.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IT=yT;function Iv(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s=Object.assign({name:kf,automaticDataCollectionEnabled:!1},e),a=s.name;if(typeof a!="string"||!a)throw hi.create("bad-app-name",{appName:String(a)});if(n||(n=yv()),!n)throw hi.create("no-options");const u=ju.get(a);if(u){if(Ma(n,u.options)&&Ma(s,u.config))return u;throw hi.create("duplicate-app",{appName:a})}const h=new k1(a);for(const y of Pf.values())h.addComponent(y);const m=new TT(n,s,h);return ju.set(a,m),m}function Sv(r=kf){const e=ju.get(r);if(!e&&r===kf&&yv())return Iv();if(!e)throw hi.create("no-app",{appName:r});return e}function ar(r,e,n){var s;let a=(s=vT[r])!==null&&s!==void 0?s:r;n&&(a+=`-${n}`);const u=a.match(/\s|\//),h=e.match(/\s|\//);if(u||h){const m=[`Unable to register library "${a}" with version "${e}":`];u&&m.push(`library name "${a}" contains illegal characters (whitespace or "/")`),u&&h&&m.push("and"),h&&m.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Dr.warn(m.join(" "));return}pi(new Vr(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ST="firebase-heartbeat-database",AT=1,ba="firebase-heartbeat-store";let af=null;function Av(){return af||(af=Tv(ST,AT,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(ba)}catch(n){console.warn(n)}}}}).catch(r=>{throw hi.create("idb-open",{originalErrorMessage:r.message})})),af}async function CT(r){try{const n=(await Av()).transaction(ba),s=await n.objectStore(ba).get(Cv(r));return await n.done,s}catch(e){if(e instanceof Ti)Dr.warn(e.message);else{const n=hi.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Dr.warn(n.message)}}}async function Ng(r,e){try{const s=(await Av()).transaction(ba,"readwrite");await s.objectStore(ba).put(e,Cv(r)),await s.done}catch(n){if(n instanceof Ti)Dr.warn(n.message);else{const s=hi.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Dr.warn(s.message)}}}function Cv(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RT=1024,kT=30;class PT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new VT(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Og();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(h=>h.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:a}),this._heartbeatsCache.heartbeats.length>kT){const h=DT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(h,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Dr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Og(),{heartbeatsToSend:s,unsentEntries:a}=xT(this._heartbeatsCache.heartbeats),u=$u(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return Dr.warn(n),""}}}function Og(){return new Date().toISOString().substring(0,10)}function xT(r,e=RT){const n=[];let s=r.slice();for(const a of r){const u=n.find(h=>h.agent===a.agent);if(u){if(u.dates.push(a.date),Lg(n)>e){u.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),Lg(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class VT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vv()?_v().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return Ng(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Lg(r){return $u(JSON.stringify({version:2,heartbeats:r})).length}function DT(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(r){pi(new Vr("platform-logger",e=>new B1(e),"PRIVATE")),pi(new Vr("heartbeat",e=>new PT(e),"PRIVATE")),ar(Rf,Vg,r),ar(Rf,Vg,"esm2017"),ar("fire-js","")}NT("");var Mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fi,Rv;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(C,T){function A(){}A.prototype=T.prototype,C.D=T.prototype,C.prototype=new A,C.prototype.constructor=C,C.C=function(P,V,O){for(var S=Array(arguments.length-2),Je=2;Je<arguments.length;Je++)S[Je-2]=arguments[Je];return T.prototype[V].apply(P,S)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(C,T,A){A||(A=0);var P=Array(16);if(typeof T=="string")for(var V=0;16>V;++V)P[V]=T.charCodeAt(A++)|T.charCodeAt(A++)<<8|T.charCodeAt(A++)<<16|T.charCodeAt(A++)<<24;else for(V=0;16>V;++V)P[V]=T[A++]|T[A++]<<8|T[A++]<<16|T[A++]<<24;T=C.g[0],A=C.g[1],V=C.g[2];var O=C.g[3],S=T+(O^A&(V^O))+P[0]+3614090360&4294967295;T=A+(S<<7&4294967295|S>>>25),S=O+(V^T&(A^V))+P[1]+3905402710&4294967295,O=T+(S<<12&4294967295|S>>>20),S=V+(A^O&(T^A))+P[2]+606105819&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(T^V&(O^T))+P[3]+3250441966&4294967295,A=V+(S<<22&4294967295|S>>>10),S=T+(O^A&(V^O))+P[4]+4118548399&4294967295,T=A+(S<<7&4294967295|S>>>25),S=O+(V^T&(A^V))+P[5]+1200080426&4294967295,O=T+(S<<12&4294967295|S>>>20),S=V+(A^O&(T^A))+P[6]+2821735955&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(T^V&(O^T))+P[7]+4249261313&4294967295,A=V+(S<<22&4294967295|S>>>10),S=T+(O^A&(V^O))+P[8]+1770035416&4294967295,T=A+(S<<7&4294967295|S>>>25),S=O+(V^T&(A^V))+P[9]+2336552879&4294967295,O=T+(S<<12&4294967295|S>>>20),S=V+(A^O&(T^A))+P[10]+4294925233&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(T^V&(O^T))+P[11]+2304563134&4294967295,A=V+(S<<22&4294967295|S>>>10),S=T+(O^A&(V^O))+P[12]+1804603682&4294967295,T=A+(S<<7&4294967295|S>>>25),S=O+(V^T&(A^V))+P[13]+4254626195&4294967295,O=T+(S<<12&4294967295|S>>>20),S=V+(A^O&(T^A))+P[14]+2792965006&4294967295,V=O+(S<<17&4294967295|S>>>15),S=A+(T^V&(O^T))+P[15]+1236535329&4294967295,A=V+(S<<22&4294967295|S>>>10),S=T+(V^O&(A^V))+P[1]+4129170786&4294967295,T=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(T^A))+P[6]+3225465664&4294967295,O=T+(S<<9&4294967295|S>>>23),S=V+(T^A&(O^T))+P[11]+643717713&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^T&(V^O))+P[0]+3921069994&4294967295,A=V+(S<<20&4294967295|S>>>12),S=T+(V^O&(A^V))+P[5]+3593408605&4294967295,T=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(T^A))+P[10]+38016083&4294967295,O=T+(S<<9&4294967295|S>>>23),S=V+(T^A&(O^T))+P[15]+3634488961&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^T&(V^O))+P[4]+3889429448&4294967295,A=V+(S<<20&4294967295|S>>>12),S=T+(V^O&(A^V))+P[9]+568446438&4294967295,T=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(T^A))+P[14]+3275163606&4294967295,O=T+(S<<9&4294967295|S>>>23),S=V+(T^A&(O^T))+P[3]+4107603335&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^T&(V^O))+P[8]+1163531501&4294967295,A=V+(S<<20&4294967295|S>>>12),S=T+(V^O&(A^V))+P[13]+2850285829&4294967295,T=A+(S<<5&4294967295|S>>>27),S=O+(A^V&(T^A))+P[2]+4243563512&4294967295,O=T+(S<<9&4294967295|S>>>23),S=V+(T^A&(O^T))+P[7]+1735328473&4294967295,V=O+(S<<14&4294967295|S>>>18),S=A+(O^T&(V^O))+P[12]+2368359562&4294967295,A=V+(S<<20&4294967295|S>>>12),S=T+(A^V^O)+P[5]+4294588738&4294967295,T=A+(S<<4&4294967295|S>>>28),S=O+(T^A^V)+P[8]+2272392833&4294967295,O=T+(S<<11&4294967295|S>>>21),S=V+(O^T^A)+P[11]+1839030562&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^T)+P[14]+4259657740&4294967295,A=V+(S<<23&4294967295|S>>>9),S=T+(A^V^O)+P[1]+2763975236&4294967295,T=A+(S<<4&4294967295|S>>>28),S=O+(T^A^V)+P[4]+1272893353&4294967295,O=T+(S<<11&4294967295|S>>>21),S=V+(O^T^A)+P[7]+4139469664&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^T)+P[10]+3200236656&4294967295,A=V+(S<<23&4294967295|S>>>9),S=T+(A^V^O)+P[13]+681279174&4294967295,T=A+(S<<4&4294967295|S>>>28),S=O+(T^A^V)+P[0]+3936430074&4294967295,O=T+(S<<11&4294967295|S>>>21),S=V+(O^T^A)+P[3]+3572445317&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^T)+P[6]+76029189&4294967295,A=V+(S<<23&4294967295|S>>>9),S=T+(A^V^O)+P[9]+3654602809&4294967295,T=A+(S<<4&4294967295|S>>>28),S=O+(T^A^V)+P[12]+3873151461&4294967295,O=T+(S<<11&4294967295|S>>>21),S=V+(O^T^A)+P[15]+530742520&4294967295,V=O+(S<<16&4294967295|S>>>16),S=A+(V^O^T)+P[2]+3299628645&4294967295,A=V+(S<<23&4294967295|S>>>9),S=T+(V^(A|~O))+P[0]+4096336452&4294967295,T=A+(S<<6&4294967295|S>>>26),S=O+(A^(T|~V))+P[7]+1126891415&4294967295,O=T+(S<<10&4294967295|S>>>22),S=V+(T^(O|~A))+P[14]+2878612391&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~T))+P[5]+4237533241&4294967295,A=V+(S<<21&4294967295|S>>>11),S=T+(V^(A|~O))+P[12]+1700485571&4294967295,T=A+(S<<6&4294967295|S>>>26),S=O+(A^(T|~V))+P[3]+2399980690&4294967295,O=T+(S<<10&4294967295|S>>>22),S=V+(T^(O|~A))+P[10]+4293915773&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~T))+P[1]+2240044497&4294967295,A=V+(S<<21&4294967295|S>>>11),S=T+(V^(A|~O))+P[8]+1873313359&4294967295,T=A+(S<<6&4294967295|S>>>26),S=O+(A^(T|~V))+P[15]+4264355552&4294967295,O=T+(S<<10&4294967295|S>>>22),S=V+(T^(O|~A))+P[6]+2734768916&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~T))+P[13]+1309151649&4294967295,A=V+(S<<21&4294967295|S>>>11),S=T+(V^(A|~O))+P[4]+4149444226&4294967295,T=A+(S<<6&4294967295|S>>>26),S=O+(A^(T|~V))+P[11]+3174756917&4294967295,O=T+(S<<10&4294967295|S>>>22),S=V+(T^(O|~A))+P[2]+718787259&4294967295,V=O+(S<<15&4294967295|S>>>17),S=A+(O^(V|~T))+P[9]+3951481745&4294967295,C.g[0]=C.g[0]+T&4294967295,C.g[1]=C.g[1]+(V+(S<<21&4294967295|S>>>11))&4294967295,C.g[2]=C.g[2]+V&4294967295,C.g[3]=C.g[3]+O&4294967295}s.prototype.u=function(C,T){T===void 0&&(T=C.length);for(var A=T-this.blockSize,P=this.B,V=this.h,O=0;O<T;){if(V==0)for(;O<=A;)a(this,C,O),O+=this.blockSize;if(typeof C=="string"){for(;O<T;)if(P[V++]=C.charCodeAt(O++),V==this.blockSize){a(this,P),V=0;break}}else for(;O<T;)if(P[V++]=C[O++],V==this.blockSize){a(this,P),V=0;break}}this.h=V,this.o+=T},s.prototype.v=function(){var C=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);C[0]=128;for(var T=1;T<C.length-8;++T)C[T]=0;var A=8*this.o;for(T=C.length-8;T<C.length;++T)C[T]=A&255,A/=256;for(this.u(C),C=Array(16),T=A=0;4>T;++T)for(var P=0;32>P;P+=8)C[A++]=this.g[T]>>>P&255;return C};function u(C,T){var A=m;return Object.prototype.hasOwnProperty.call(A,C)?A[C]:A[C]=T(C)}function h(C,T){this.h=T;for(var A=[],P=!0,V=C.length-1;0<=V;V--){var O=C[V]|0;P&&O==T||(A[V]=O,P=!1)}this.g=A}var m={};function y(C){return-128<=C&&128>C?u(C,function(T){return new h([T|0],0>T?-1:0)}):new h([C|0],0>C?-1:0)}function _(C){if(isNaN(C)||!isFinite(C))return R;if(0>C)return z(_(-C));for(var T=[],A=1,P=0;C>=A;P++)T[P]=C/A|0,A*=4294967296;return new h(T,0)}function E(C,T){if(C.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(C.charAt(0)=="-")return z(E(C.substring(1),T));if(0<=C.indexOf("-"))throw Error('number format error: interior "-" character');for(var A=_(Math.pow(T,8)),P=R,V=0;V<C.length;V+=8){var O=Math.min(8,C.length-V),S=parseInt(C.substring(V,V+O),T);8>O?(O=_(Math.pow(T,O)),P=P.j(O).add(_(S))):(P=P.j(A),P=P.add(_(S)))}return P}var R=y(0),N=y(1),F=y(16777216);r=h.prototype,r.m=function(){if(B(this))return-z(this).m();for(var C=0,T=1,A=0;A<this.g.length;A++){var P=this.i(A);C+=(0<=P?P:4294967296+P)*T,T*=4294967296}return C},r.toString=function(C){if(C=C||10,2>C||36<C)throw Error("radix out of range: "+C);if(W(this))return"0";if(B(this))return"-"+z(this).toString(C);for(var T=_(Math.pow(C,6)),A=this,P="";;){var V=de(A,T).g;A=re(A,V.j(T));var O=((0<A.g.length?A.g[0]:A.h)>>>0).toString(C);if(A=V,W(A))return O+P;for(;6>O.length;)O="0"+O;P=O+P}},r.i=function(C){return 0>C?0:C<this.g.length?this.g[C]:this.h};function W(C){if(C.h!=0)return!1;for(var T=0;T<C.g.length;T++)if(C.g[T]!=0)return!1;return!0}function B(C){return C.h==-1}r.l=function(C){return C=re(this,C),B(C)?-1:W(C)?0:1};function z(C){for(var T=C.g.length,A=[],P=0;P<T;P++)A[P]=~C.g[P];return new h(A,~C.h).add(N)}r.abs=function(){return B(this)?z(this):this},r.add=function(C){for(var T=Math.max(this.g.length,C.g.length),A=[],P=0,V=0;V<=T;V++){var O=P+(this.i(V)&65535)+(C.i(V)&65535),S=(O>>>16)+(this.i(V)>>>16)+(C.i(V)>>>16);P=S>>>16,O&=65535,S&=65535,A[V]=S<<16|O}return new h(A,A[A.length-1]&-2147483648?-1:0)};function re(C,T){return C.add(z(T))}r.j=function(C){if(W(this)||W(C))return R;if(B(this))return B(C)?z(this).j(z(C)):z(z(this).j(C));if(B(C))return z(this.j(z(C)));if(0>this.l(F)&&0>C.l(F))return _(this.m()*C.m());for(var T=this.g.length+C.g.length,A=[],P=0;P<2*T;P++)A[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<C.g.length;V++){var O=this.i(P)>>>16,S=this.i(P)&65535,Je=C.i(V)>>>16,wt=C.i(V)&65535;A[2*P+2*V]+=S*wt,se(A,2*P+2*V),A[2*P+2*V+1]+=O*wt,se(A,2*P+2*V+1),A[2*P+2*V+1]+=S*Je,se(A,2*P+2*V+1),A[2*P+2*V+2]+=O*Je,se(A,2*P+2*V+2)}for(P=0;P<T;P++)A[P]=A[2*P+1]<<16|A[2*P];for(P=T;P<2*T;P++)A[P]=0;return new h(A,0)};function se(C,T){for(;(C[T]&65535)!=C[T];)C[T+1]+=C[T]>>>16,C[T]&=65535,T++}function te(C,T){this.g=C,this.h=T}function de(C,T){if(W(T))throw Error("division by zero");if(W(C))return new te(R,R);if(B(C))return T=de(z(C),T),new te(z(T.g),z(T.h));if(B(T))return T=de(C,z(T)),new te(z(T.g),T.h);if(30<C.g.length){if(B(C)||B(T))throw Error("slowDivide_ only works with positive integers.");for(var A=N,P=T;0>=P.l(C);)A=Se(A),P=Se(P);var V=ce(A,1),O=ce(P,1);for(P=ce(P,2),A=ce(A,2);!W(P);){var S=O.add(P);0>=S.l(C)&&(V=V.add(A),O=S),P=ce(P,1),A=ce(A,1)}return T=re(C,V.j(T)),new te(V,T)}for(V=R;0<=C.l(T);){for(A=Math.max(1,Math.floor(C.m()/T.m())),P=Math.ceil(Math.log(A)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),O=_(A),S=O.j(T);B(S)||0<S.l(C);)A-=P,O=_(A),S=O.j(T);W(O)&&(O=N),V=V.add(O),C=re(C,S)}return new te(V,C)}r.A=function(C){return de(this,C).h},r.and=function(C){for(var T=Math.max(this.g.length,C.g.length),A=[],P=0;P<T;P++)A[P]=this.i(P)&C.i(P);return new h(A,this.h&C.h)},r.or=function(C){for(var T=Math.max(this.g.length,C.g.length),A=[],P=0;P<T;P++)A[P]=this.i(P)|C.i(P);return new h(A,this.h|C.h)},r.xor=function(C){for(var T=Math.max(this.g.length,C.g.length),A=[],P=0;P<T;P++)A[P]=this.i(P)^C.i(P);return new h(A,this.h^C.h)};function Se(C){for(var T=C.g.length+1,A=[],P=0;P<T;P++)A[P]=C.i(P)<<1|C.i(P-1)>>>31;return new h(A,C.h)}function ce(C,T){var A=T>>5;T%=32;for(var P=C.g.length-A,V=[],O=0;O<P;O++)V[O]=0<T?C.i(O+A)>>>T|C.i(O+A+1)<<32-T:C.i(O+A);return new h(V,C.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,Rv=s,h.prototype.add=h.prototype.add,h.prototype.multiply=h.prototype.j,h.prototype.modulo=h.prototype.A,h.prototype.compare=h.prototype.l,h.prototype.toNumber=h.prototype.m,h.prototype.toString=h.prototype.toString,h.prototype.getBits=h.prototype.i,h.fromNumber=_,h.fromString=E,fi=h}).apply(typeof Mg<"u"?Mg:typeof self<"u"?self:typeof window<"u"?window:{});var gu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kv,Aa,Pv,Pu,xf,xv,Vv,Dv;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof gu=="object"&&gu];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function a(l,d){if(d)e:{var g=s;l=l.split(".");for(var w=0;w<l.length-1;w++){var L=l[w];if(!(L in g))break e;g=g[L]}l=l[l.length-1],w=g[l],d=d(w),d!=w&&d!=null&&e(g,l,{configurable:!0,writable:!0,value:d})}}function u(l,d){l instanceof String&&(l+="");var g=0,w=!1,L={next:function(){if(!w&&g<l.length){var j=g++;return{value:d(j,l[j]),done:!1}}return w=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}a("Array.prototype.values",function(l){return l||function(){return u(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var h=h||{},m=this||self;function y(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function _(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function E(l,d,g){return l.call.apply(l.bind,arguments)}function R(l,d,g){if(!l)throw Error();if(2<arguments.length){var w=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,w),l.apply(d,L)}}return function(){return l.apply(d,arguments)}}function N(l,d,g){return N=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?E:R,N.apply(null,arguments)}function F(l,d){var g=Array.prototype.slice.call(arguments,1);return function(){var w=g.slice();return w.push.apply(w,arguments),l.apply(this,w)}}function W(l,d){function g(){}g.prototype=d.prototype,l.aa=d.prototype,l.prototype=new g,l.prototype.constructor=l,l.Qb=function(w,L,j){for(var X=Array(arguments.length-2),Be=2;Be<arguments.length;Be++)X[Be-2]=arguments[Be];return d.prototype[L].apply(w,X)}}function B(l){const d=l.length;if(0<d){const g=Array(d);for(let w=0;w<d;w++)g[w]=l[w];return g}return[]}function z(l,d){for(let g=1;g<arguments.length;g++){const w=arguments[g];if(y(w)){const L=l.length||0,j=w.length||0;l.length=L+j;for(let X=0;X<j;X++)l[L+X]=w[X]}else l.push(w)}}class re{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function se(l){return/^[\s\xa0]*$/.test(l)}function te(){var l=m.navigator;return l&&(l=l.userAgent)?l:""}function de(l){return de[" "](l),l}de[" "]=function(){};var Se=te().indexOf("Gecko")!=-1&&!(te().toLowerCase().indexOf("webkit")!=-1&&te().indexOf("Edge")==-1)&&!(te().indexOf("Trident")!=-1||te().indexOf("MSIE")!=-1)&&te().indexOf("Edge")==-1;function ce(l,d,g){for(const w in l)d.call(g,l[w],w,l)}function C(l,d){for(const g in l)d.call(void 0,l[g],g,l)}function T(l){const d={};for(const g in l)d[g]=l[g];return d}const A="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(l,d){let g,w;for(let L=1;L<arguments.length;L++){w=arguments[L];for(g in w)l[g]=w[g];for(let j=0;j<A.length;j++)g=A[j],Object.prototype.hasOwnProperty.call(w,g)&&(l[g]=w[g])}}function V(l){var d=1;l=l.split(":");const g=[];for(;0<d&&l.length;)g.push(l.shift()),d--;return l.length&&g.push(l.join(":")),g}function O(l){m.setTimeout(()=>{throw l},0)}function S(){var l=le;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class Je{constructor(){this.h=this.g=null}add(d,g){const w=wt.get();w.set(d,g),this.h?this.h.next=w:this.g=w,this.h=w}}var wt=new re(()=>new Et,l=>l.reset());class Et{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let $e,J=!1,le=new Je,Z=()=>{const l=m.Promise.resolve(void 0);$e=()=>{l.then(D)}};var D=()=>{for(var l;l=S();){try{l.h.call(l.g)}catch(g){O(g)}var d=wt;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}J=!1};function U(){this.s=this.s,this.C=this.C}U.prototype.s=!1,U.prototype.ma=function(){this.s||(this.s=!0,this.N())},U.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function fe(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}fe.prototype.h=function(){this.defaultPrevented=!0};var Te=function(){if(!m.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const g=()=>{};m.addEventListener("test",g,d),m.removeEventListener("test",g,d)}catch{}return l}();function Ie(l,d){if(fe.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var g=this.type=l.type,w=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(Se){e:{try{de(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=l.fromElement:g=="mouseout"&&(d=l.toElement);this.relatedTarget=d,w?(this.clientX=w.clientX!==void 0?w.clientX:w.pageX,this.clientY=w.clientY!==void 0?w.clientY:w.pageY,this.screenX=w.screenX||0,this.screenY=w.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:Ae[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Ie.aa.h.call(this)}}W(Ie,fe);var Ae={2:"touch",3:"pen",4:"mouse"};Ie.prototype.h=function(){Ie.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var xe="closure_listenable_"+(1e6*Math.random()|0),Pe=0;function Ne(l,d,g,w,L){this.listener=l,this.proxy=null,this.src=d,this.type=g,this.capture=!!w,this.ha=L,this.key=++Pe,this.da=this.fa=!1}function nt(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Yt(l){this.src=l,this.g={},this.h=0}Yt.prototype.add=function(l,d,g,w,L){var j=l.toString();l=this.g[j],l||(l=this.g[j]=[],this.h++);var X=Mr(l,d,w,L);return-1<X?(d=l[X],g||(d.fa=!1)):(d=new Ne(d,this.src,j,!!w,L),d.fa=g,l.push(d)),d};function qt(l,d){var g=d.type;if(g in l.g){var w=l.g[g],L=Array.prototype.indexOf.call(w,d,void 0),j;(j=0<=L)&&Array.prototype.splice.call(w,L,1),j&&(nt(d),l.g[g].length==0&&(delete l.g[g],l.h--))}}function Mr(l,d,g,w){for(var L=0;L<l.length;++L){var j=l[L];if(!j.da&&j.listener==d&&j.capture==!!g&&j.ha==w)return L}return-1}var Ii="closure_lm_"+(1e6*Math.random()|0),fs={};function Po(l,d,g,w,L){if(Array.isArray(d)){for(var j=0;j<d.length;j++)Po(l,d[j],g,w,L);return null}return g=Do(g),l&&l[xe]?l.K(d,g,_(w)?!!w.capture:!1,L):xo(l,d,g,!1,w,L)}function xo(l,d,g,w,L,j){if(!d)throw Error("Invalid event type");var X=_(L)?!!L.capture:!!L,Be=ps(l);if(Be||(l[Ii]=Be=new Yt(l)),g=Be.add(d,g,w,X,j),g.proxy)return g;if(w=Ja(),g.proxy=w,w.src=l,w.listener=g,l.addEventListener)Te||(L=X),L===void 0&&(L=!1),l.addEventListener(d.toString(),w,L);else if(l.attachEvent)l.attachEvent(dr(d.toString()),w);else if(l.addListener&&l.removeListener)l.addListener(w);else throw Error("addEventListener and attachEvent are unavailable.");return g}function Ja(){function l(g){return d.call(l.src,l.listener,g)}const d=Vo;return l}function ds(l,d,g,w,L){if(Array.isArray(d))for(var j=0;j<d.length;j++)ds(l,d[j],g,w,L);else w=_(w)?!!w.capture:!!w,g=Do(g),l&&l[xe]?(l=l.i,d=String(d).toString(),d in l.g&&(j=l.g[d],g=Mr(j,g,w,L),-1<g&&(nt(j[g]),Array.prototype.splice.call(j,g,1),j.length==0&&(delete l.g[d],l.h--)))):l&&(l=ps(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Mr(d,g,w,L)),(g=-1<l?d[l]:null)&&fr(g))}function fr(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[xe])qt(d.i,l);else{var g=l.type,w=l.proxy;d.removeEventListener?d.removeEventListener(g,w,l.capture):d.detachEvent?d.detachEvent(dr(g),w):d.addListener&&d.removeListener&&d.removeListener(w),(g=ps(d))?(qt(g,l),g.h==0&&(g.src=null,d[Ii]=null)):nt(l)}}}function dr(l){return l in fs?fs[l]:fs[l]="on"+l}function Vo(l,d){if(l.da)l=!0;else{d=new Ie(d,this);var g=l.listener,w=l.ha||l.src;l.fa&&fr(l),l=g.call(w,d)}return l}function ps(l){return l=l[Ii],l instanceof Yt?l:null}var ms="__closure_events_fn_"+(1e9*Math.random()>>>0);function Do(l){return typeof l=="function"?l:(l[ms]||(l[ms]=function(d){return l.handleEvent(d)}),l[ms])}function dt(){U.call(this),this.i=new Yt(this),this.M=this,this.F=null}W(dt,U),dt.prototype[xe]=!0,dt.prototype.removeEventListener=function(l,d,g,w){ds(this,l,d,g,w)};function pt(l,d){var g,w=l.F;if(w)for(g=[];w;w=w.F)g.push(w);if(l=l.M,w=d.type||d,typeof d=="string")d=new fe(d,l);else if(d instanceof fe)d.target=d.target||l;else{var L=d;d=new fe(w,l),P(d,L)}if(L=!0,g)for(var j=g.length-1;0<=j;j--){var X=d.g=g[j];L=pr(X,w,!0,d)&&L}if(X=d.g=l,L=pr(X,w,!0,d)&&L,L=pr(X,w,!1,d)&&L,g)for(j=0;j<g.length;j++)X=d.g=g[j],L=pr(X,w,!1,d)&&L}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var g=l.g[d],w=0;w<g.length;w++)nt(g[w]);delete l.g[d],l.h--}}this.F=null},dt.prototype.K=function(l,d,g,w){return this.i.add(String(l),d,!1,g,w)},dt.prototype.L=function(l,d,g,w){return this.i.add(String(l),d,!0,g,w)};function pr(l,d,g,w){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,j=0;j<d.length;++j){var X=d[j];if(X&&!X.da&&X.capture==g){var Be=X.listener,mt=X.ha||X.src;X.fa&&qt(l.i,X),L=Be.call(mt,w)!==!1&&L}}return L&&!w.defaultPrevented}function No(l,d,g){if(typeof l=="function")g&&(l=N(l,g));else if(l&&typeof l.handleEvent=="function")l=N(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:m.setTimeout(l,d||0)}function br(l){l.g=No(()=>{l.g=null,l.i&&(l.i=!1,br(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class Si extends U{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:br(this)}N(){super.N(),this.g&&(m.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(l){U.call(this),this.h=l,this.g={}}W(Ai,U);var Oo=[];function Lo(l){ce(l.g,function(d,g){this.g.hasOwnProperty(g)&&fr(d)},l),l.g={}}Ai.prototype.N=function(){Ai.aa.N.call(this),Lo(this)},Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Mo=m.JSON.stringify,bo=m.JSON.parse,Fo=class{stringify(l){return m.JSON.stringify(l,void 0)}parse(l){return m.JSON.parse(l,void 0)}};function Ci(){}Ci.prototype.h=null;function gs(l){return l.h||(l.h=l.i())}function ys(){}var yn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Gn(){fe.call(this,"d")}W(Gn,fe);function vs(){fe.call(this,"c")}W(vs,fe);var Qn={},$o=null;function Ri(){return $o=$o||new dt}Qn.La="serverreachability";function jo(l){fe.call(this,Qn.La,l)}W(jo,fe);function mr(l){const d=Ri();pt(d,new jo(d))}Qn.STAT_EVENT="statevent";function Uo(l,d){fe.call(this,Qn.STAT_EVENT,l),this.stat=d}W(Uo,fe);function ot(l){const d=Ri();pt(d,new Uo(d,l))}Qn.Ma="timingevent";function _s(l,d){fe.call(this,Qn.Ma,l),this.size=d}W(_s,fe);function xn(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return m.setTimeout(function(){l()},d)}function ki(){this.g=!0}ki.prototype.xa=function(){this.g=!1};function Pi(l,d,g,w,L,j){l.info(function(){if(l.g)if(j)for(var X="",Be=j.split("&"),mt=0;mt<Be.length;mt++){var Oe=Be[mt].split("=");if(1<Oe.length){var Tt=Oe[0];Oe=Oe[1];var ut=Tt.split("_");X=2<=ut.length&&ut[1]=="type"?X+(Tt+"="+Oe+"&"):X+(Tt+"=redacted&")}}else X=null;else X=j;return"XMLHTTP REQ ("+w+") [attempt "+L+"]: "+d+`
`+g+`
`+X})}function ws(l,d,g,w,L,j,X){l.info(function(){return"XMLHTTP RESP ("+w+") [ attempt "+L+"]: "+d+`
`+g+`
`+j+" "+X})}function Vn(l,d,g,w){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+Tc(l,g)+(w?" "+w:"")})}function zo(l,d){l.info(function(){return"TIMEOUT: "+d})}ki.prototype.info=function(){};function Tc(l,d){if(!l.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(l=0;l<g.length;l++)if(Array.isArray(g[l])){var w=g[l];if(!(2>w.length)){var L=w[1];if(Array.isArray(L)&&!(1>L.length)){var j=L[0];if(j!="noop"&&j!="stop"&&j!="close")for(var X=1;X<L.length;X++)L[X]=""}}}}return Mo(g)}catch{return d}}var Es={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Za={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dn;function xi(){}W(xi,Ci),xi.prototype.g=function(){return new XMLHttpRequest},xi.prototype.i=function(){return{}},Dn=new xi;function Nn(l,d,g,w){this.j=l,this.i=d,this.l=g,this.R=w||1,this.U=new Ai(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new el}function el(){this.i=null,this.g="",this.h=!1}var Bo={},Ts={};function Is(l,d,g){l.L=1,l.v=zr(un(d)),l.m=g,l.P=!0,Ho(l,null)}function Ho(l,d){l.F=Date.now(),qe(l),l.A=un(l.v);var g=l.A,w=l.R;Array.isArray(w)||(w=[String(w)]),Hr(g.i,"t",w),l.C=0,g=l.j.J,l.h=new el,l.g=vl(l.j,g?d:null,!l.m),0<l.O&&(l.M=new Si(N(l.Y,l,l.g),l.O)),d=l.U,g=l.g,w=l.ca;var L="readystatechange";Array.isArray(L)||(L&&(Oo[0]=L.toString()),L=Oo);for(var j=0;j<L.length;j++){var X=Po(g,L[j],w||d.handleEvent,!1,d.h||d);if(!X)break;d.g[X.key]=X}d=l.H?T(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),mr(),Pi(l.i,l.u,l.A,l.l,l.R,l.m)}Nn.prototype.ca=function(l){l=l.target;const d=this.M;d&&Jt(l)==3?d.j():this.Y(l)},Nn.prototype.Y=function(l){try{if(l==this.g)e:{const ut=Jt(this.g);var d=this.g.Ba();const wn=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Yo(this.g)))){this.J||ut!=4||d==7||(d==8||0>=wn?mr(3):mr(2)),Vi(this);var g=this.g.Z();this.X=g;t:if(tl(this)){var w=Yo(this.g);l="";var L=w.length,j=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){vn(this),Fr(this);var X="";break t}this.h.i=new m.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,l+=this.h.i.decode(w[d],{stream:!(j&&d==L-1)});w.length=0,this.h.g+=l,this.C=0,X=this.h.g}else X=this.g.oa();if(this.o=g==200,ws(this.i,this.u,this.A,this.l,this.R,ut,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Be,mt=this.g;if((Be=mt.g?mt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!se(Be)){var Oe=Be;break t}}Oe=null}if(g=Oe)Vn(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qo(this,g);else{this.o=!1,this.s=3,ot(12),vn(this),Fr(this);break e}}if(this.P){g=!0;let hn;for(;!this.J&&this.C<X.length;)if(hn=Ic(this,X),hn==Ts){ut==4&&(this.s=4,ot(14),g=!1),Vn(this.i,this.l,null,"[Incomplete Response]");break}else if(hn==Bo){this.s=4,ot(15),Vn(this.i,this.l,X,"[Invalid Chunk]"),g=!1;break}else Vn(this.i,this.l,hn,null),qo(this,hn);if(tl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||X.length!=0||this.h.h||(this.s=1,ot(16),g=!1),this.o=this.o&&g,!g)Vn(this.i,this.l,X,"[Invalid Chunked Response]"),vn(this),Fr(this);else if(0<X.length&&!this.W){this.W=!0;var Tt=this.j;Tt.g==this&&Tt.ba&&!Tt.M&&(Tt.j.info("Great, no buffering proxy detected. Bytes received: "+X.length),Jo(Tt),Tt.M=!0,ot(11))}}else Vn(this.i,this.l,X,null),qo(this,X);ut==4&&vn(this),this.o&&!this.J&&(ut==4?Os(this.j,this):(this.o=!1,qe(this)))}else Ps(this.g),g==400&&0<X.indexOf("Unknown SID")?(this.s=3,ot(12)):(this.s=0,ot(13)),vn(this),Fr(this)}}}catch{}finally{}};function tl(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function Ic(l,d){var g=l.C,w=d.indexOf(`
`,g);return w==-1?Ts:(g=Number(d.substring(g,w)),isNaN(g)?Bo:(w+=1,w+g>d.length?Ts:(d=d.slice(w,w+g),l.C=w+g,d)))}Nn.prototype.cancel=function(){this.J=!0,vn(this)};function qe(l){l.S=Date.now()+l.I,nl(l,l.I)}function nl(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=xn(N(l.ba,l),d)}function Vi(l){l.B&&(m.clearTimeout(l.B),l.B=null)}Nn.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(zo(this.i,this.A),this.L!=2&&(mr(),ot(17)),vn(this),this.s=2,Fr(this)):nl(this,this.S-l)};function Fr(l){l.j.G==0||l.J||Os(l.j,l)}function vn(l){Vi(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,Lo(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function qo(l,d){try{var g=l.j;if(g.G!=0&&(g.g==l||Wt(g.h,l))){if(!l.K&&Wt(g.h,l)&&g.G==3){try{var w=g.Da.g.parse(d)}catch{w=null}if(Array.isArray(w)&&w.length==3){var L=w;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<l.F)Ns(g),Fn(g);else break e;Ds(g),ot(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=xn(N(g.Za,g),6e3));if(1>=il(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else wr(g,11)}else if((l.K||g.g==l)&&Ns(g),!se(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let Oe=L[d];if(g.T=Oe[0],Oe=Oe[1],g.G==2)if(Oe[0]=="c"){g.K=Oe[1],g.ia=Oe[2];const Tt=Oe[3];Tt!=null&&(g.la=Tt,g.j.info("VER="+g.la));const ut=Oe[4];ut!=null&&(g.Aa=ut,g.j.info("SVER="+g.Aa));const wn=Oe[5];wn!=null&&typeof wn=="number"&&0<wn&&(w=1.5*wn,g.L=w,g.j.info("backChannelRequestTimeoutMs_="+w)),w=g;const hn=l.g;if(hn){const Fi=hn.g?hn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var j=w.h;j.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(j.j=j.l,j.g=new Set,j.h&&(Wo(j,j.h),j.h=null))}if(w.D){const Ms=hn.g?hn.g.getResponseHeader("X-HTTP-Session-Id"):null;Ms&&(w.ya=Ms,He(w.I,w.D,Ms))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-l.F,g.j.info("Handshake RTT: "+g.R+"ms")),w=g;var X=l;if(w.qa=yl(w,w.J?w.ia:null,w.W),X.K){sl(w.h,X);var Be=X,mt=w.L;mt&&(Be.I=mt),Be.B&&(Vi(Be),qe(Be)),w.g=X}else bi(w);0<g.i.length&&Zn(g)}else Oe[0]!="stop"&&Oe[0]!="close"||wr(g,7);else g.G==3&&(Oe[0]=="stop"||Oe[0]=="close"?Oe[0]=="stop"?wr(g,7):xt(g):Oe[0]!="noop"&&g.l&&g.l.ta(Oe),g.v=0)}}mr(4)}catch{}}var rl=class{constructor(l,d){this.g=l,this.map=d}};function Di(l){this.l=l||10,m.PerformanceNavigationTiming?(l=m.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(m.chrome&&m.chrome.loadTimes&&m.chrome.loadTimes()&&m.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ln(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function il(l){return l.h?1:l.g?l.g.size:0}function Wt(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Wo(l,d){l.g?l.g.add(d):l.h=d}function sl(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}Di.prototype.cancel=function(){if(this.i=ol(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function ol(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const g of l.g.values())d=d.concat(g.D);return d}return B(l.i)}function Ss(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(y(l)){for(var d=[],g=l.length,w=0;w<g;w++)d.push(l[w]);return d}d=[],g=0;for(w in l)d[g++]=l[w];return d}function As(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(y(l)||typeof l=="string"){var d=[];l=l.length;for(var g=0;g<l;g++)d.push(g);return d}d=[],g=0;for(const w in l)d[g++]=w;return d}}}function $r(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(y(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var g=As(l),w=Ss(l),L=w.length,j=0;j<L;j++)d.call(void 0,w[j],g&&g[j],l)}var Ni=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Sc(l,d){if(l){l=l.split("&");for(var g=0;g<l.length;g++){var w=l[g].indexOf("="),L=null;if(0<=w){var j=l[g].substring(0,w);L=l[g].substring(w+1)}else j=l[g];d(j,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function gr(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof gr){this.h=l.h,Oi(this,l.j),this.o=l.o,this.g=l.g,jr(this,l.s),this.l=l.l;var d=l.i,g=new Yn;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Ur(this,g),this.m=l.m}else l&&(d=String(l).match(Ni))?(this.h=!1,Oi(this,d[1]||"",!0),this.o=De(d[2]||""),this.g=De(d[3]||"",!0),jr(this,d[4]),this.l=De(d[5]||"",!0),Ur(this,d[6]||"",!0),this.m=De(d[7]||"")):(this.h=!1,this.i=new Yn(null,this.h))}gr.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Br(d,Cs,!0),":");var g=this.g;return(g||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Br(d,Cs,!0),"@"),l.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&l.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&l.push("/"),l.push(Br(g,g.charAt(0)=="/"?ul:ll,!0))),(g=this.i.toString())&&l.push("?",g),(g=this.m)&&l.push("#",Br(g,Ko)),l.join("")};function un(l){return new gr(l)}function Oi(l,d,g){l.j=g?De(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function jr(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Ur(l,d,g){d instanceof Yn?(l.i=d,Xn(l.i,l.h)):(g||(d=Br(d,cl)),l.i=new Yn(d,l.h))}function He(l,d,g){l.i.set(d,g)}function zr(l){return He(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function De(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Br(l,d,g){return typeof l=="string"?(l=encodeURI(l).replace(d,al),g&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function al(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Cs=/[#\/\?@]/g,ll=/[#\?:]/g,ul=/[#\?]/g,cl=/[#\?@]/g,Ko=/#/g;function Yn(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function Pt(l){l.g||(l.g=new Map,l.h=0,l.i&&Sc(l.i,function(d,g){l.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}r=Yn.prototype,r.add=function(l,d){Pt(this),this.i=null,l=_n(this,l);var g=this.g.get(l);return g||this.g.set(l,g=[]),g.push(d),this.h+=1,this};function On(l,d){Pt(l),d=_n(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function Ln(l,d){return Pt(l),d=_n(l,d),l.g.has(d)}r.forEach=function(l,d){Pt(this),this.g.forEach(function(g,w){g.forEach(function(L){l.call(d,L,w,this)},this)},this)},r.na=function(){Pt(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let w=0;w<d.length;w++){const L=l[w];for(let j=0;j<L.length;j++)g.push(d[w])}return g},r.V=function(l){Pt(this);let d=[];if(typeof l=="string")Ln(this,l)&&(d=d.concat(this.g.get(_n(this,l))));else{l=Array.from(this.g.values());for(let g=0;g<l.length;g++)d=d.concat(l[g])}return d},r.set=function(l,d){return Pt(this),this.i=null,l=_n(this,l),Ln(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},r.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function Hr(l,d,g){On(l,d),0<g.length&&(l.i=null,l.g.set(_n(l,d),B(g)),l.h+=g.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var w=d[g];const j=encodeURIComponent(String(w)),X=this.V(w);for(w=0;w<X.length;w++){var L=j;X[w]!==""&&(L+="="+encodeURIComponent(String(X[w]))),l.push(L)}}return this.i=l.join("&")};function _n(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function Xn(l,d){d&&!l.j&&(Pt(l),l.i=null,l.g.forEach(function(g,w){var L=w.toLowerCase();w!=L&&(On(this,w),Hr(this,L,g))},l)),l.j=d}function Ac(l,d){const g=new ki;if(m.Image){const w=new Image;w.onload=F(Xt,g,"TestLoadImage: loaded",!0,d,w),w.onerror=F(Xt,g,"TestLoadImage: error",!1,d,w),w.onabort=F(Xt,g,"TestLoadImage: abort",!1,d,w),w.ontimeout=F(Xt,g,"TestLoadImage: timeout",!1,d,w),m.setTimeout(function(){w.ontimeout&&w.ontimeout()},1e4),w.src=l}else d(!1)}function hl(l,d){const g=new ki,w=new AbortController,L=setTimeout(()=>{w.abort(),Xt(g,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:w.signal}).then(j=>{clearTimeout(L),j.ok?Xt(g,"TestPingServer: ok",!0,d):Xt(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),Xt(g,"TestPingServer: error",!1,d)})}function Xt(l,d,g,w,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),w(g)}catch{}}function Cc(){this.g=new Fo}function fl(l,d,g){const w=g||"";try{$r(l,function(L,j){let X=L;_(L)&&(X=Mo(L)),d.push(w+j+"="+encodeURIComponent(X))})}catch(L){throw d.push(w+"type="+encodeURIComponent("_badmap")),L}}function yr(l){this.l=l.Ub||null,this.j=l.eb||!1}W(yr,Ci),yr.prototype.g=function(){return new Li(this.l,this.j)},yr.prototype.i=function(l){return function(){return l}}({});function Li(l,d){dt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}W(Li,dt),r=Li.prototype,r.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,bn(this)},r.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||m).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mn(this)),this.readyState=0},r.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof m.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dl(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function dl(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}r.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Mn(this):bn(this),this.readyState==3&&dl(this)}},r.Ra=function(l){this.g&&(this.response=this.responseText=l,Mn(this))},r.Qa=function(l){this.g&&(this.response=l,Mn(this))},r.ga=function(){this.g&&Mn(this)};function Mn(l){l.readyState=4,l.l=null,l.j=null,l.v=null,bn(l)}r.setRequestHeader=function(l,d){this.u.append(l,d)},r.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,l.push(g[0]+": "+g[1]),g=d.next();return l.join(`\r
`)};function bn(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Li.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function vr(l){let d="";return ce(l,function(g,w){d+=w,d+=":",d+=g,d+=`\r
`}),d}function qr(l,d,g){e:{for(w in g){var w=!1;break e}w=!0}w||(g=vr(g),typeof l=="string"?g!=null&&encodeURIComponent(String(g)):He(l,d,g))}function Ye(l){dt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}W(Ye,dt);var Rc=/^https?$/i,Go=["POST","PUT"];r=Ye.prototype,r.Ha=function(l){this.J=l},r.ea=function(l,d,g,w){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dn.g(),this.v=this.o?gs(this.o):gs(Dn),this.g.onreadystatechange=N(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(j){Mi(this,j);return}if(l=g||"",g=new Map(this.headers),w)if(Object.getPrototypeOf(w)===Object.prototype)for(var L in w)g.set(L,w[L]);else if(typeof w.keys=="function"&&typeof w.get=="function")for(const j of w.keys())g.set(j,w.get(j));else throw Error("Unknown input type for opt_headers: "+String(w));w=Array.from(g.keys()).find(j=>j.toLowerCase()=="content-type"),L=m.FormData&&l instanceof m.FormData,!(0<=Array.prototype.indexOf.call(Go,d,void 0))||w||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[j,X]of g)this.g.setRequestHeader(j,X);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ks(this),this.u=!0,this.g.send(l),this.u=!1}catch(j){Mi(this,j)}};function Mi(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,Rs(l),cn(l)}function Rs(l){l.A||(l.A=!0,pt(l,"complete"),pt(l,"error"))}r.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,pt(this,"complete"),pt(this,"abort"),cn(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),cn(this,!0)),Ye.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Qo(this):this.bb())},r.bb=function(){Qo(this)};function Qo(l){if(l.h&&typeof h<"u"&&(!l.v[1]||Jt(l)!=4||l.Z()!=2)){if(l.u&&Jt(l)==4)No(l.Ea,0,l);else if(pt(l,"readystatechange"),Jt(l)==4){l.h=!1;try{const X=l.Z();e:switch(X){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var w;if(w=X===0){var L=String(l.D).match(Ni)[1]||null;!L&&m.self&&m.self.location&&(L=m.self.location.protocol.slice(0,-1)),w=!Rc.test(L?L.toLowerCase():"")}g=w}if(g)pt(l,"complete"),pt(l,"success");else{l.m=6;try{var j=2<Jt(l)?l.g.statusText:""}catch{j=""}l.l=j+" ["+l.Z()+"]",Rs(l)}}finally{cn(l)}}}}function cn(l,d){if(l.g){ks(l);const g=l.g,w=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||pt(l,"ready");try{g.onreadystatechange=w}catch{}}}function ks(l){l.I&&(m.clearTimeout(l.I),l.I=null)}r.isActive=function(){return!!this.g};function Jt(l){return l.g?l.g.readyState:0}r.Z=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),bo(d)}};function Yo(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function Ps(l){const d={};l=(l.g&&2<=Jt(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let w=0;w<l.length;w++){if(se(l[w]))continue;var g=V(l[w]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const j=d[L]||[];d[L]=j,j.push(g)}C(d,function(w){return w.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Jn(l,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[l]||d}function Xo(l){this.Aa=0,this.i=[],this.j=new ki,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Jn("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Jn("baseRetryDelayMs",5e3,l),this.cb=Jn("retryDelaySeedMs",1e4,l),this.Wa=Jn("forwardChannelMaxRetries",2,l),this.wa=Jn("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Di(l&&l.concurrentRequestLimit),this.Da=new Cc,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Xo.prototype,r.la=8,r.G=1,r.connect=function(l,d,g,w){ot(0),this.W=l,this.H=d||{},g&&w!==void 0&&(this.H.OSID=g,this.H.OAID=w),this.F=this.X,this.I=yl(this,null,this.W),Zn(this)};function xt(l){if(xs(l),l.G==3){var d=l.U++,g=un(l.I);if(He(g,"SID",l.K),He(g,"RID",d),He(g,"TYPE","terminate"),_r(l,g),d=new Nn(l,l.j,d),d.L=2,d.v=zr(un(g)),g=!1,m.navigator&&m.navigator.sendBeacon)try{g=m.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&m.Image&&(new Image().src=d.v,g=!0),g||(d.g=vl(d.j,null),d.g.ea(d.v)),d.F=Date.now(),qe(d)}gl(l)}function Fn(l){l.g&&(Jo(l),l.g.cancel(),l.g=null)}function xs(l){Fn(l),l.u&&(m.clearTimeout(l.u),l.u=null),Ns(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&m.clearTimeout(l.s),l.s=null)}function Zn(l){if(!ln(l.h)&&!l.s){l.s=!0;var d=l.Ga;$e||Z(),J||($e(),J=!0),le.add(d,l),l.B=0}}function kc(l,d){return il(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=xn(N(l.Ga,l,d),ml(l,l.B)),l.B++,!0)}r.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const L=new Nn(this,this.j,l);let j=this.o;if(this.S&&(j?(j=T(j),P(j,this.S)):j=this.S),this.m!==null||this.O||(L.H=j,j=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var w=this.i[g];if("__data__"in w.map&&(w=w.map.__data__,typeof w=="string")){w=w.length;break t}w=void 0}if(w===void 0)break;if(d+=w,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Wr(this,L,d),g=un(this.I),He(g,"RID",l),He(g,"CVER",22),this.D&&He(g,"X-HTTP-Session-Id",this.D),_r(this,g),j&&(this.O?d="headers="+encodeURIComponent(String(vr(j)))+"&"+d:this.m&&qr(g,this.m,j)),Wo(this.h,L),this.Ua&&He(g,"TYPE","init"),this.P?(He(g,"$req",d),He(g,"SID","null"),L.T=!0,Is(L,g,null)):Is(L,g,d),this.G=2}}else this.G==3&&(l?Vs(this,l):this.i.length==0||ln(this.h)||Vs(this))};function Vs(l,d){var g;d?g=d.l:g=l.U++;const w=un(l.I);He(w,"SID",l.K),He(w,"RID",g),He(w,"AID",l.T),_r(l,w),l.m&&l.o&&qr(w,l.m,l.o),g=new Nn(l,l.j,g,l.B+1),l.m===null&&(g.H=l.o),d&&(l.i=d.D.concat(l.i)),d=Wr(l,g,1e3),g.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Wo(l.h,g),Is(g,w,d)}function _r(l,d){l.H&&ce(l.H,function(g,w){He(d,w,g)}),l.l&&$r({},function(g,w){He(d,w,g)})}function Wr(l,d,g){g=Math.min(l.i.length,g);var w=l.l?N(l.l.Na,l.l,l):null;e:{var L=l.i;let j=-1;for(;;){const X=["count="+g];j==-1?0<g?(j=L[0].g,X.push("ofs="+j)):j=0:X.push("ofs="+j);let Be=!0;for(let mt=0;mt<g;mt++){let Oe=L[mt].g;const Tt=L[mt].map;if(Oe-=j,0>Oe)j=Math.max(0,L[mt].g-100),Be=!1;else try{fl(Tt,X,"req"+Oe+"_")}catch{w&&w(Tt)}}if(Be){w=X.join("&");break e}}}return l=l.i.splice(0,g),d.D=l,w}function bi(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;$e||Z(),J||($e(),J=!0),le.add(d,l),l.v=0}}function Ds(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=xn(N(l.Fa,l),ml(l,l.v)),l.v++,!0)}r.Fa=function(){if(this.u=null,pl(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=xn(N(this.ab,this),l)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ot(10),Fn(this),pl(this))};function Jo(l){l.A!=null&&(m.clearTimeout(l.A),l.A=null)}function pl(l){l.g=new Nn(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=un(l.qa);He(d,"RID","rpc"),He(d,"SID",l.K),He(d,"AID",l.T),He(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&He(d,"TO",l.ja),He(d,"TYPE","xmlhttp"),_r(l,d),l.m&&l.o&&qr(d,l.m,l.o),l.L&&(l.g.I=l.L);var g=l.g;l=l.ia,g.L=1,g.v=zr(un(d)),g.m=null,g.P=!0,Ho(g,l)}r.Za=function(){this.C!=null&&(this.C=null,Fn(this),Ds(this),ot(19))};function Ns(l){l.C!=null&&(m.clearTimeout(l.C),l.C=null)}function Os(l,d){var g=null;if(l.g==d){Ns(l),Jo(l),l.g=null;var w=2}else if(Wt(l.h,d))g=d.D,sl(l.h,d),w=1;else return;if(l.G!=0){if(d.o)if(w==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=l.B;w=Ri(),pt(w,new _s(w,g)),Zn(l)}else bi(l);else if(L=d.s,L==3||L==0&&0<d.X||!(w==1&&kc(l,d)||w==2&&Ds(l)))switch(g&&0<g.length&&(d=l.h,d.i=d.i.concat(g)),L){case 1:wr(l,5);break;case 4:wr(l,10);break;case 3:wr(l,6);break;default:wr(l,2)}}}function ml(l,d){let g=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(g*=2),g*d}function wr(l,d){if(l.j.info("Error code "+d),d==2){var g=N(l.fb,l),w=l.Xa;const L=!w;w=new gr(w||"//www.google.com/images/cleardot.gif"),m.location&&m.location.protocol=="http"||Oi(w,"https"),zr(w),L?Ac(w.toString(),g):hl(w.toString(),g)}else ot(2);l.G=0,l.l&&l.l.sa(d),gl(l),xs(l)}r.fb=function(l){l?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function gl(l){if(l.G=0,l.ka=[],l.l){const d=ol(l.h);(d.length!=0||l.i.length!=0)&&(z(l.ka,d),z(l.ka,l.i),l.h.i.length=0,B(l.i),l.i.length=0),l.l.ra()}}function yl(l,d,g){var w=g instanceof gr?un(g):new gr(g);if(w.g!="")d&&(w.g=d+"."+w.g),jr(w,w.s);else{var L=m.location;w=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var j=new gr(null);w&&Oi(j,w),d&&(j.g=d),L&&jr(j,L),g&&(j.l=g),w=j}return g=l.D,d=l.ya,g&&d&&He(w,g,d),He(w,"VER",l.la),_r(l,w),w}function vl(l,d,g){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new Ye(new yr({eb:g})):new Ye(l.pa),d.Ha(l.J),d}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Zo(){}r=Zo.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ls(){}Ls.prototype.g=function(l,d){return new Kt(l,d)};function Kt(l,d){dt.call(this),this.g=new Xo(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!se(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!se(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new er(this)}W(Kt,dt),Kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Kt.prototype.close=function(){xt(this.g)},Kt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var g={};g.__data__=l,l=g}else this.u&&(g={},g.__data__=Mo(l),l=g);d.i.push(new rl(d.Ya++,l)),d.G==3&&Zn(d)},Kt.prototype.N=function(){this.g.l=null,delete this.j,xt(this.g),delete this.g,Kt.aa.N.call(this)};function _l(l){Gn.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const g in d){l=g;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}W(_l,Gn);function wl(){vs.call(this),this.status=1}W(wl,vs);function er(l){this.g=l}W(er,Zo),er.prototype.ua=function(){pt(this.g,"a")},er.prototype.ta=function(l){pt(this.g,new _l(l))},er.prototype.sa=function(l){pt(this.g,new wl)},er.prototype.ra=function(){pt(this.g,"b")},Ls.prototype.createWebChannel=Ls.prototype.g,Kt.prototype.send=Kt.prototype.o,Kt.prototype.open=Kt.prototype.m,Kt.prototype.close=Kt.prototype.close,Dv=function(){return new Ls},Vv=function(){return Ri()},xv=Qn,xf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Es.NO_ERROR=0,Es.TIMEOUT=8,Es.HTTP_ERROR=6,Pu=Es,Za.COMPLETE="complete",Pv=Za,ys.EventType=yn,yn.OPEN="a",yn.CLOSE="b",yn.ERROR="c",yn.MESSAGE="d",dt.prototype.listen=dt.prototype.K,Aa=ys,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,kv=Ye}).apply(typeof gu<"u"?gu:typeof self<"u"?self:typeof window<"u"?window:{});const bg="@firebase/firestore",Fg="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}zt.UNAUTHENTICATED=new zt(null),zt.GOOGLE_CREDENTIALS=new zt("google-credentials-uid"),zt.FIRST_PARTY=new zt("first-party-uid"),zt.MOCK_USER=new zt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=new id("@firebase/firestore");function io(){return is.logLevel}function ne(r,...e){if(is.logLevel<=Me.DEBUG){const n=e.map(od);is.debug(`Firestore (${Ao}): ${r}`,...n)}}function Nr(r,...e){if(is.logLevel<=Me.ERROR){const n=e.map(od);is.error(`Firestore (${Ao}): ${r}`,...n)}}function yo(r,...e){if(is.logLevel<=Me.WARN){const n=e.map(od);is.warn(`Firestore (${Ao}): ${r}`,...n)}}function od(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(r="Unexpected state"){const e=`FIRESTORE (${Ao}) INTERNAL ASSERTION FAILED: `+r;throw Nr(e),new Error(e)}function ze(r,e){r||_e()}function Ee(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ge extends Ti{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class OT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(zt.UNAUTHENTICATED))}shutdown(){}}class LT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class MT{constructor(e){this.t=e,this.currentUser=zt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){ze(this.o===void 0);let s=this.i;const a=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new di;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new di,e.enqueueRetryable(()=>a(this.currentUser))};const h=()=>{const y=u;e.enqueueRetryable(async()=>{await y.promise,await a(this.currentUser)})},m=y=>{ne("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),h())};this.t.onInit(y=>m(y)),setTimeout(()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?m(y):(ne("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new di)}},0),h()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ne("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ze(typeof s.accessToken=="string"),new Nv(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return ze(e===null||typeof e=="string"),new zt(e)}}class bT{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=zt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class FT{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new bT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(zt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $g{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class $T{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,wT(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){ze(this.o===void 0);const s=u=>{u.error!=null&&ne("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const h=u.token!==this.R;return this.R=u.token,ne("FirebaseAppCheckTokenProvider",`Received ${h?"new":"existing"} token.`),h?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable(()=>s(u))};const a=u=>{ne("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(u=>a(u)),setTimeout(()=>{if(!this.appCheck){const u=this.A.getImmediate({optional:!0});u?a(u):ne("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new $g(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ze(typeof n.token=="string"),this.R=n.token,new $g(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jT(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const a=jT(40);for(let u=0;u<a.length;++u)s.length<20&&a[u]<n&&(s+=e.charAt(a[u]%62))}return s}}function Re(r,e){return r<e?-1:r>e?1:0}function Vf(r,e){let n=0;for(;n<r.length&&n<e.length;){const s=r.codePointAt(n),a=e.codePointAt(n);if(s!==a){if(s<128&&a<128)return Re(s,a);{const u=Ov(),h=UT(u.encode(jg(r,n)),u.encode(jg(e,n)));return h!==0?h:Re(s,a)}}n+=s>65535?2:1}return Re(r.length,e.length)}function jg(r,e){return r.codePointAt(e)>65535?r.substring(e,e+2):r.substring(e,e+1)}function UT(r,e){for(let n=0;n<r.length&&n<e.length;++n)if(r[n]!==e[n])return Re(r[n],e[n]);return Re(r.length,e.length)}function vo(r,e,n){return r.length===e.length&&r.every((s,a)=>n(s,e[a]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=-62135596800,zg=1e6;class st{static now(){return st.fromMillis(Date.now())}static fromDate(e){return st.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*zg);return new st(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ge(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ge(Q.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Ug)throw new ge(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ge(Q.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zg}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Ug;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new st(0,0))}static max(){return new we(new st(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="__name__";class sr{constructor(e,n,s){n===void 0?n=0:n>e.length&&_e(),s===void 0?s=e.length-n:s>e.length-n&&_e(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return sr.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sr?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let a=0;a<s;a++){const u=sr.compareSegments(e.get(a),n.get(a));if(u!==0)return u}return Re(e.length,n.length)}static compareSegments(e,n){const s=sr.isNumericId(e),a=sr.isNumericId(n);return s&&!a?-1:!s&&a?1:s&&a?sr.extractNumericId(e).compare(sr.extractNumericId(n)):Vf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return fi.fromString(e.substring(4,e.length-2))}}class it extends sr{construct(e,n,s){return new it(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ge(Q.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(a=>a.length>0))}return new it(n)}static emptyPath(){return new it([])}}const zT=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends sr{construct(e,n,s){return new Ot(e,n,s)}static isValidIdentifier(e){return zT.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bg}static keyField(){return new Ot([Bg])}static fromServerFormat(e){const n=[];let s="",a=0;const u=()=>{if(s.length===0)throw new ge(Q.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let h=!1;for(;a<e.length;){const m=e[a];if(m==="\\"){if(a+1===e.length)throw new ge(Q.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[a+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ge(Q.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,a+=2}else m==="`"?(h=!h,a++):m!=="."||h?(s+=m,a++):(u(),a++)}if(u(),h)throw new ge(Q.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ot(n)}static emptyPath(){return new Ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.path=e}static fromPath(e){return new ye(it.fromString(e))}static fromName(e){return new ye(it.fromString(e).popFirst(5))}static empty(){return new ye(it.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&it.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return it.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ye(new it(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=-1;function BT(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,a=we.fromTimestamp(s===1e9?new st(n+1,0):new st(n,s));return new mi(a,ye.empty(),e)}function HT(r){return new mi(r.readTime,r.key,Fa)}class mi{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new mi(we.min(),ye.empty(),Fa)}static max(){return new mi(we.max(),ye.empty(),Fa)}}function qT(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ye.comparator(r.documentKey,e.documentKey),n!==0?n:Re(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(r){if(r.code!==Q.FAILED_PRECONDITION||r.message!==WT)throw r;ne("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&_e(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new H((s,a)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,a)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,a)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof H?n:H.resolve(n)}catch(n){return H.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):H.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):H.reject(n)}static resolve(e){return new H((n,s)=>{n(e)})}static reject(e){return new H((n,s)=>{s(e)})}static waitFor(e){return new H((n,s)=>{let a=0,u=0,h=!1;e.forEach(m=>{++a,m.next(()=>{++u,h&&u===a&&n()},y=>s(y))}),h=!0,u===a&&n()})}static or(e){let n=H.resolve(!1);for(const s of e)n=n.next(a=>a?H.resolve(a):s());return n}static forEach(e,n){const s=[];return e.forEach((a,u)=>{s.push(n.call(this,a,u))}),this.waitFor(s)}static mapArray(e,n){return new H((s,a)=>{const u=e.length,h=new Array(u);let m=0;for(let y=0;y<u;y++){const _=y;n(e[_]).next(E=>{h[_]=E,++m,m===u&&s(h)},E=>a(E))}})}static doWhile(e,n){return new H((s,a)=>{const u=()=>{e()===!0?n().next(()=>{u()},a):s()};u()})}}function GT(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ro(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ac.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad=-1;function lc(r){return r==null}function Uu(r){return r===0&&1/r==-1/0}function QT(r){return typeof r=="number"&&Number.isInteger(r)&&!Uu(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mv="";function YT(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=Hg(e)),e=XT(r.get(n),e);return Hg(e)}function XT(r,e){let n=e;const s=r.length;for(let a=0;a<s;a++){const u=r.charAt(a);switch(u){case"\0":n+="";break;case Mv:n+="";break;default:n+=u}}return n}function Hg(r){return r+Mv+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qg(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function ls(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function bv(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,n){this.comparator=e,this.root=n||Nt.EMPTY}insert(e,n){return new tt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Nt.BLACK,null,null))}remove(e){return new tt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Nt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const a=this.comparator(e,s.key);if(a===0)return n+s.left.size;a<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new yu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new yu(this.root,e,this.comparator,!1)}getReverseIterator(){return new yu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new yu(this.root,e,this.comparator,!0)}}class yu{constructor(e,n,s,a){this.isReverse=a,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&a&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Nt{constructor(e,n,s,a,u){this.key=e,this.value=n,this.color=s??Nt.RED,this.left=a??Nt.EMPTY,this.right=u??Nt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,a,u){return new Nt(e??this.key,n??this.value,s??this.color,a??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let a=this;const u=s(e,a.key);return a=u<0?a.copy(null,null,null,a.left.insert(e,n,s),null):u===0?a.copy(null,n,null,null,null):a.copy(null,null,null,null,a.right.insert(e,n,s)),a.fixUp()}removeMin(){if(this.left.isEmpty())return Nt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,a=this;if(n(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,n),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),n(e,a.key)===0){if(a.right.isEmpty())return Nt.EMPTY;s=a.right.min(),a=a.copy(s.key,s.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,n))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Nt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Nt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw _e();const e=this.left.check();if(e!==this.right.check())throw _e();return e+(this.isRed()?0:1)}}Nt.EMPTY=null,Nt.RED=!0,Nt.BLACK=!1;Nt.EMPTY=new class{constructor(){this.size=0}get key(){throw _e()}get value(){throw _e()}get color(){throw _e()}get left(){throw _e()}get right(){throw _e()}copy(e,n,s,a,u){return this}insert(e,n,s){return new Nt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e){this.comparator=e,this.data=new tt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const a=s.getNext();if(this.comparator(a.key,e[1])>=0)return;n(a.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Wg(this.data.getIterator())}getIteratorFrom(e){return new Wg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof _t)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const a=n.getNext().key,u=s.getNext().key;if(this.comparator(a,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _t(this.comparator);return n.data=e,n}}class Wg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn{constructor(e){this.fields=e,e.sort(Ot.comparator)}static empty(){return new Wn([])}unionWith(e){let n=new _t(Ot.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Wn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vo(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(a){try{return atob(a)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new Fv("Invalid base64 string: "+u):u}}(e);return new Mt(n)}static fromUint8Array(e){const n=function(a){let u="";for(let h=0;h<a.length;++h)u+=String.fromCharCode(a[h]);return u}(e);return new Mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let a=0;a<n.length;a++)s[a]=n.charCodeAt(a);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Mt.EMPTY_BYTE_STRING=new Mt("");const JT=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gi(r){if(ze(!!r),typeof r=="string"){let e=0;const n=JT.exec(r);if(ze(!!n),n[1]){let a=n[1];a=(a+"000000000").substr(0,9),e=Number(a)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:lt(r.seconds),nanos:lt(r.nanos)}}function lt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function yi(r){return typeof r=="string"?Mt.fromBase64String(r):Mt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $v="server_timestamp",jv="__type__",Uv="__previous_value__",zv="__local_write_time__";function ld(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[jv])===null||n===void 0?void 0:n.stringValue)===$v}function uc(r){const e=r.mapValue.fields[Uv];return ld(e)?uc(e):e}function $a(r){const e=gi(r.mapValue.fields[zv].timestampValue);return new st(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,s,a,u,h,m,y,_){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=a,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=m,this.longPollingOptions=y,this.useFetchStreams=_}}const zu="(default)";class ja{constructor(e,n){this.projectId=e,this.database=n||zu}static empty(){return new ja("","")}get isDefaultDatabase(){return this.database===zu}isEqual(e){return e instanceof ja&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bv="__type__",eI="__max__",vu={mapValue:{}},Hv="__vector__",Bu="value";function vi(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?ld(r)?4:nI(r)?9007199254740991:tI(r)?10:11:_e()}function cr(r,e){if(r===e)return!0;const n=vi(r);if(n!==vi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return $a(r).isEqual($a(e));case 3:return function(a,u){if(typeof a.timestampValue=="string"&&typeof u.timestampValue=="string"&&a.timestampValue.length===u.timestampValue.length)return a.timestampValue===u.timestampValue;const h=gi(a.timestampValue),m=gi(u.timestampValue);return h.seconds===m.seconds&&h.nanos===m.nanos}(r,e);case 5:return r.stringValue===e.stringValue;case 6:return function(a,u){return yi(a.bytesValue).isEqual(yi(u.bytesValue))}(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return function(a,u){return lt(a.geoPointValue.latitude)===lt(u.geoPointValue.latitude)&&lt(a.geoPointValue.longitude)===lt(u.geoPointValue.longitude)}(r,e);case 2:return function(a,u){if("integerValue"in a&&"integerValue"in u)return lt(a.integerValue)===lt(u.integerValue);if("doubleValue"in a&&"doubleValue"in u){const h=lt(a.doubleValue),m=lt(u.doubleValue);return h===m?Uu(h)===Uu(m):isNaN(h)&&isNaN(m)}return!1}(r,e);case 9:return vo(r.arrayValue.values||[],e.arrayValue.values||[],cr);case 10:case 11:return function(a,u){const h=a.mapValue.fields||{},m=u.mapValue.fields||{};if(qg(h)!==qg(m))return!1;for(const y in h)if(h.hasOwnProperty(y)&&(m[y]===void 0||!cr(h[y],m[y])))return!1;return!0}(r,e);default:return _e()}}function Ua(r,e){return(r.values||[]).find(n=>cr(n,e))!==void 0}function _o(r,e){if(r===e)return 0;const n=vi(r),s=vi(e);if(n!==s)return Re(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(r.booleanValue,e.booleanValue);case 2:return function(u,h){const m=lt(u.integerValue||u.doubleValue),y=lt(h.integerValue||h.doubleValue);return m<y?-1:m>y?1:m===y?0:isNaN(m)?isNaN(y)?0:-1:1}(r,e);case 3:return Kg(r.timestampValue,e.timestampValue);case 4:return Kg($a(r),$a(e));case 5:return Vf(r.stringValue,e.stringValue);case 6:return function(u,h){const m=yi(u),y=yi(h);return m.compareTo(y)}(r.bytesValue,e.bytesValue);case 7:return function(u,h){const m=u.split("/"),y=h.split("/");for(let _=0;_<m.length&&_<y.length;_++){const E=Re(m[_],y[_]);if(E!==0)return E}return Re(m.length,y.length)}(r.referenceValue,e.referenceValue);case 8:return function(u,h){const m=Re(lt(u.latitude),lt(h.latitude));return m!==0?m:Re(lt(u.longitude),lt(h.longitude))}(r.geoPointValue,e.geoPointValue);case 9:return Gg(r.arrayValue,e.arrayValue);case 10:return function(u,h){var m,y,_,E;const R=u.fields||{},N=h.fields||{},F=(m=R[Bu])===null||m===void 0?void 0:m.arrayValue,W=(y=N[Bu])===null||y===void 0?void 0:y.arrayValue,B=Re(((_=F==null?void 0:F.values)===null||_===void 0?void 0:_.length)||0,((E=W==null?void 0:W.values)===null||E===void 0?void 0:E.length)||0);return B!==0?B:Gg(F,W)}(r.mapValue,e.mapValue);case 11:return function(u,h){if(u===vu.mapValue&&h===vu.mapValue)return 0;if(u===vu.mapValue)return 1;if(h===vu.mapValue)return-1;const m=u.fields||{},y=Object.keys(m),_=h.fields||{},E=Object.keys(_);y.sort(),E.sort();for(let R=0;R<y.length&&R<E.length;++R){const N=Vf(y[R],E[R]);if(N!==0)return N;const F=_o(m[y[R]],_[E[R]]);if(F!==0)return F}return Re(y.length,E.length)}(r.mapValue,e.mapValue);default:throw _e()}}function Kg(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Re(r,e);const n=gi(r),s=gi(e),a=Re(n.seconds,s.seconds);return a!==0?a:Re(n.nanos,s.nanos)}function Gg(r,e){const n=r.values||[],s=e.values||[];for(let a=0;a<n.length&&a<s.length;++a){const u=_o(n[a],s[a]);if(u)return u}return Re(n.length,s.length)}function wo(r){return Df(r)}function Df(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(n){const s=gi(n);return`time(${s.seconds},${s.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(n){return yi(n).toBase64()}(r.bytesValue):"referenceValue"in r?function(n){return ye.fromName(n).toString()}(r.referenceValue):"geoPointValue"in r?function(n){return`geo(${n.latitude},${n.longitude})`}(r.geoPointValue):"arrayValue"in r?function(n){let s="[",a=!0;for(const u of n.values||[])a?a=!1:s+=",",s+=Df(u);return s+"]"}(r.arrayValue):"mapValue"in r?function(n){const s=Object.keys(n.fields||{}).sort();let a="{",u=!0;for(const h of s)u?u=!1:a+=",",a+=`${h}:${Df(n.fields[h])}`;return a+"}"}(r.mapValue):_e()}function xu(r){switch(vi(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=uc(r);return e?16+xu(e):16;case 5:return 2*r.stringValue.length;case 6:return yi(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((a,u)=>a+xu(u),0)}(r.arrayValue);case 10:case 11:return function(s){let a=0;return ls(s.fields,(u,h)=>{a+=u.length+xu(h)}),a}(r.mapValue);default:throw _e()}}function Nf(r){return!!r&&"integerValue"in r}function ud(r){return!!r&&"arrayValue"in r}function Qg(r){return!!r&&"nullValue"in r}function Yg(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Vu(r){return!!r&&"mapValue"in r}function tI(r){var e,n;return((n=(((e=r==null?void 0:r.mapValue)===null||e===void 0?void 0:e.fields)||{})[Bv])===null||n===void 0?void 0:n.stringValue)===Hv}function Pa(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return ls(r.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Pa(s)),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pa(r.arrayValue.values[n]);return e}return Object.assign({},r)}function nI(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===eI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(e){this.value=e}static empty(){return new Rn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Vu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Pa(n)}setAll(e){let n=Ot.emptyPath(),s={},a=[];e.forEach((h,m)=>{if(!n.isImmediateParentOf(m)){const y=this.getFieldsMap(n);this.applyChanges(y,s,a),s={},a=[],n=m.popLast()}h?s[m.lastSegment()]=Pa(h):a.push(m.lastSegment())});const u=this.getFieldsMap(n);this.applyChanges(u,s,a)}delete(e){const n=this.field(e.popLast());Vu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let a=n.mapValue.fields[e.get(s)];Vu(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=a),n=a}return n.mapValue.fields}applyChanges(e,n,s){ls(n,(a,u)=>e[a]=u);for(const a of s)delete e[a]}clone(){return new Rn(Pa(this.value))}}function qv(r){const e=[];return ls(r.fields,(n,s)=>{const a=new Ot([n]);if(Vu(s)){const u=qv(s.mapValue).fields;if(u.length===0)e.push(a);else for(const h of u)e.push(a.child(h))}else e.push(a)}),new Wn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,s,a,u,h,m){this.key=e,this.documentType=n,this.version=s,this.readTime=a,this.createTime=u,this.data=h,this.documentState=m}static newInvalidDocument(e){return new Ht(e,0,we.min(),we.min(),we.min(),Rn.empty(),0)}static newFoundDocument(e,n,s,a){return new Ht(e,1,n,we.min(),s,a,0)}static newNoDocument(e,n){return new Ht(e,2,n,we.min(),we.min(),Rn.empty(),0)}static newUnknownDocument(e,n){return new Ht(e,3,n,we.min(),we.min(),Rn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ht&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ht(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hu{constructor(e,n){this.position=e,this.inclusive=n}}function Xg(r,e,n){let s=0;for(let a=0;a<r.position.length;a++){const u=e[a],h=r.position[a];if(u.field.isKeyField()?s=ye.comparator(ye.fromName(h.referenceValue),n.key):s=_o(h,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function Jg(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!cr(r.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n="asc"){this.field=e,this.dir=n}}function rI(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{}class vt extends Wv{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new sI(e,n,s):n==="array-contains"?new lI(e,s):n==="in"?new uI(e,s):n==="not-in"?new cI(e,s):n==="array-contains-any"?new hI(e,s):new vt(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new oI(e,s):new aI(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(_o(n,this.value)):n!==null&&vi(this.value)===vi(n)&&this.matchesComparison(_o(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return _e()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hr extends Wv{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new hr(e,n)}matches(e){return Kv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function Kv(r){return r.op==="and"}function Gv(r){return iI(r)&&Kv(r)}function iI(r){for(const e of r.filters)if(e instanceof hr)return!1;return!0}function Of(r){if(r instanceof vt)return r.field.canonicalString()+r.op.toString()+wo(r.value);if(Gv(r))return r.filters.map(e=>Of(e)).join(",");{const e=r.filters.map(n=>Of(n)).join(",");return`${r.op}(${e})`}}function Qv(r,e){return r instanceof vt?function(s,a){return a instanceof vt&&s.op===a.op&&s.field.isEqual(a.field)&&cr(s.value,a.value)}(r,e):r instanceof hr?function(s,a){return a instanceof hr&&s.op===a.op&&s.filters.length===a.filters.length?s.filters.reduce((u,h,m)=>u&&Qv(h,a.filters[m]),!0):!1}(r,e):void _e()}function Yv(r){return r instanceof vt?function(n){return`${n.field.canonicalString()} ${n.op} ${wo(n.value)}`}(r):r instanceof hr?function(n){return n.op.toString()+" {"+n.getFilters().map(Yv).join(" ,")+"}"}(r):"Filter"}class sI extends vt{constructor(e,n,s){super(e,n,s),this.key=ye.fromName(s.referenceValue)}matches(e){const n=ye.comparator(e.key,this.key);return this.matchesComparison(n)}}class oI extends vt{constructor(e,n){super(e,"in",n),this.keys=Xv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class aI extends vt{constructor(e,n){super(e,"not-in",n),this.keys=Xv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Xv(r,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>ye.fromName(s.referenceValue))}class lI extends vt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ud(n)&&Ua(n.arrayValue,this.value)}}class uI extends vt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ua(this.value.arrayValue,n)}}class cI extends vt{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ua(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ua(this.value.arrayValue,n)}}class hI extends vt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ud(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Ua(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fI{constructor(e,n=null,s=[],a=[],u=null,h=null,m=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=a,this.limit=u,this.startAt=h,this.endAt=m,this.le=null}}function Zg(r,e=null,n=[],s=[],a=null,u=null,h=null){return new fI(r,e,n,s,a,u,h)}function cd(r){const e=Ee(r);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Of(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(u){return u.field.canonicalString()+u.dir}(s)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>wo(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>wo(s)).join(",")),e.le=n}return e.le}function hd(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!rI(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!Qv(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!Jg(r.startAt,e.startAt)&&Jg(r.endAt,e.endAt)}function Lf(r){return ye.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,n=null,s=[],a=[],u=null,h="F",m=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=a,this.limit=u,this.limitType=h,this.startAt=m,this.endAt=y,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function dI(r,e,n,s,a,u,h,m){return new cc(r,e,n,s,a,u,h,m)}function fd(r){return new cc(r)}function ey(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function pI(r){return r.collectionGroup!==null}function xa(r){const e=Ee(r);if(e.he===null){e.he=[];const n=new Set;for(const u of e.explicitOrderBy)e.he.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(h){let m=new _t(Ot.comparator);return h.filters.forEach(y=>{y.getFlattenedFilters().forEach(_=>{_.isInequality()&&(m=m.add(_.field))})}),m})(e).forEach(u=>{n.has(u.canonicalString())||u.isKeyField()||e.he.push(new qu(u,s))}),n.has(Ot.keyField().canonicalString())||e.he.push(new qu(Ot.keyField(),s))}return e.he}function lr(r){const e=Ee(r);return e.Pe||(e.Pe=mI(e,xa(r))),e.Pe}function mI(r,e){if(r.limitType==="F")return Zg(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map(a=>{const u=a.dir==="desc"?"asc":"desc";return new qu(a.field,u)});const n=r.endAt?new Hu(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new Hu(r.startAt.position,r.startAt.inclusive):null;return Zg(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function Mf(r,e,n){return new cc(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function hc(r,e){return hd(lr(r),lr(e))&&r.limitType===e.limitType}function Jv(r){return`${cd(lr(r))}|lt:${r.limitType}`}function so(r){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(a=>Yv(a)).join(", ")}]`),lc(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(a=>function(h){return`${h.field.canonicalString()} (${h.dir})`}(a)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(a=>wo(a)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(a=>wo(a)).join(",")),`Target(${s})`}(lr(r))}; limitType=${r.limitType})`}function fc(r,e){return e.isFoundDocument()&&function(s,a){const u=a.key.path;return s.collectionGroup!==null?a.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ye.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)}(r,e)&&function(s,a){for(const u of xa(s))if(!u.field.isKeyField()&&a.data.field(u.field)===null)return!1;return!0}(r,e)&&function(s,a){for(const u of s.filters)if(!u.matches(a))return!1;return!0}(r,e)&&function(s,a){return!(s.startAt&&!function(h,m,y){const _=Xg(h,m,y);return h.inclusive?_<=0:_<0}(s.startAt,xa(s),a)||s.endAt&&!function(h,m,y){const _=Xg(h,m,y);return h.inclusive?_>=0:_>0}(s.endAt,xa(s),a))}(r,e)}function gI(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Zv(r){return(e,n)=>{let s=!1;for(const a of xa(r)){const u=yI(a,e,n);if(u!==0)return u;s=s||a.field.isKeyField()}return 0}}function yI(r,e,n){const s=r.field.isKeyField()?ye.comparator(e.key,n.key):function(u,h,m){const y=h.data.field(u),_=m.data.field(u);return y!==null&&_!==null?_o(y,_):_e()}(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return _e()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[a,u]of s)if(this.equalsFn(a,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),a=this.inner[s];if(a===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<a.length;u++)if(this.equalsFn(a[u][0],e))return void(a[u]=[e,n]);a.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return s.length===1?delete this.inner[n]:s.splice(a,1),this.innerSize--,!0;return!1}forEach(e){ls(this.inner,(n,s)=>{for(const[a,u]of s)e(a,u)})}isEmpty(){return bv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=new tt(ye.comparator);function Or(){return vI}const e_=new tt(ye.comparator);function Ca(...r){let e=e_;for(const n of r)e=e.insert(n.key,n);return e}function t_(r){let e=e_;return r.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function Zi(){return Va()}function n_(){return Va()}function Va(){return new us(r=>r.toString(),(r,e)=>r.isEqual(e))}const _I=new tt(ye.comparator),wI=new _t(ye.comparator);function Ve(...r){let e=wI;for(const n of r)e=e.add(n);return e}const EI=new _t(Re);function TI(){return EI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Uu(e)?"-0":e}}function r_(r){return{integerValue:""+r}}function i_(r,e){return QT(e)?r_(e):dd(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(){this._=void 0}}function II(r,e,n){return r instanceof Wu?function(a,u){const h={fields:{[jv]:{stringValue:$v},[zv]:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return u&&ld(u)&&(u=uc(u)),u&&(h.fields[Uv]=u),{mapValue:h}}(n,e):r instanceof za?o_(r,e):r instanceof Ba?a_(r,e):function(a,u){const h=s_(a,u),m=ty(h)+ty(a.Ie);return Nf(h)&&Nf(a.Ie)?r_(m):dd(a.serializer,m)}(r,e)}function SI(r,e,n){return r instanceof za?o_(r,e):r instanceof Ba?a_(r,e):n}function s_(r,e){return r instanceof Ha?function(s){return Nf(s)||function(u){return!!u&&"doubleValue"in u}(s)}(e)?e:{integerValue:0}:null}class Wu extends dc{}class za extends dc{constructor(e){super(),this.elements=e}}function o_(r,e){const n=l_(e);for(const s of r.elements)n.some(a=>cr(a,s))||n.push(s);return{arrayValue:{values:n}}}class Ba extends dc{constructor(e){super(),this.elements=e}}function a_(r,e){let n=l_(e);for(const s of r.elements)n=n.filter(a=>!cr(a,s));return{arrayValue:{values:n}}}class Ha extends dc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function ty(r){return lt(r.integerValue||r.doubleValue)}function l_(r){return ud(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(e,n){this.field=e,this.transform=n}}function CI(r,e){return r.field.isEqual(e.field)&&function(s,a){return s instanceof za&&a instanceof za||s instanceof Ba&&a instanceof Ba?vo(s.elements,a.elements,cr):s instanceof Ha&&a instanceof Ha?cr(s.Ie,a.Ie):s instanceof Wu&&a instanceof Wu}(r.transform,e.transform)}class RI{constructor(e,n){this.version=e,this.transformResults=n}}class xr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new xr}static exists(e){return new xr(void 0,e)}static updateTime(e){return new xr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Du(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class pc{}function u_(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new h_(r.key,xr.none()):new Ga(r.key,r.data,xr.none());{const n=r.data,s=Rn.empty();let a=new _t(Ot.comparator);for(let u of e.fields)if(!a.has(u)){let h=n.field(u);h===null&&u.length>1&&(u=u.popLast(),h=n.field(u)),h===null?s.delete(u):s.set(u,h),a=a.add(u)}return new cs(r.key,s,new Wn(a.toArray()),xr.none())}}function kI(r,e,n){r instanceof Ga?function(a,u,h){const m=a.value.clone(),y=ry(a.fieldTransforms,u,h.transformResults);m.setAll(y),u.convertToFoundDocument(h.version,m).setHasCommittedMutations()}(r,e,n):r instanceof cs?function(a,u,h){if(!Du(a.precondition,u))return void u.convertToUnknownDocument(h.version);const m=ry(a.fieldTransforms,u,h.transformResults),y=u.data;y.setAll(c_(a)),y.setAll(m),u.convertToFoundDocument(h.version,y).setHasCommittedMutations()}(r,e,n):function(a,u,h){u.convertToNoDocument(h.version).setHasCommittedMutations()}(0,e,n)}function Da(r,e,n,s){return r instanceof Ga?function(u,h,m,y){if(!Du(u.precondition,h))return m;const _=u.value.clone(),E=iy(u.fieldTransforms,y,h);return _.setAll(E),h.convertToFoundDocument(h.version,_).setHasLocalMutations(),null}(r,e,n,s):r instanceof cs?function(u,h,m,y){if(!Du(u.precondition,h))return m;const _=iy(u.fieldTransforms,y,h),E=h.data;return E.setAll(c_(u)),E.setAll(_),h.convertToFoundDocument(h.version,E).setHasLocalMutations(),m===null?null:m.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map(R=>R.field))}(r,e,n,s):function(u,h,m){return Du(u.precondition,h)?(h.convertToNoDocument(h.version).setHasLocalMutations(),null):m}(r,e,n)}function PI(r,e){let n=null;for(const s of r.fieldTransforms){const a=e.data.field(s.field),u=s_(s.transform,a||null);u!=null&&(n===null&&(n=Rn.empty()),n.set(s.field,u))}return n||null}function ny(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!function(s,a){return s===void 0&&a===void 0||!(!s||!a)&&vo(s,a,(u,h)=>CI(u,h))}(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Ga extends pc{constructor(e,n,s,a=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class cs extends pc{constructor(e,n,s,a,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=a,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function c_(r){const e=new Map;return r.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}}),e}function ry(r,e,n){const s=new Map;ze(r.length===n.length);for(let a=0;a<n.length;a++){const u=r[a],h=u.transform,m=e.data.field(u.field);s.set(u.field,SI(h,m,n[a]))}return s}function iy(r,e,n){const s=new Map;for(const a of r){const u=a.transform,h=n.data.field(a.field);s.set(a.field,II(u,h,e))}return s}class h_ extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class xI extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VI{constructor(e,n,s,a){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=a}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let a=0;a<this.mutations.length;a++){const u=this.mutations[a];u.key.isEqual(e.key)&&kI(u,e,s[a])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Da(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Da(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=n_();return this.mutations.forEach(a=>{const u=e.get(a.key),h=u.overlayedDocument;let m=this.applyToLocalView(h,u.mutatedFields);m=n.has(a.key)?null:m;const y=u_(h,m);y!==null&&s.set(a.key,y),h.isValidDocument()||h.convertToNoDocument(we.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ve())}isEqual(e){return this.batchId===e.batchId&&vo(this.mutations,e.mutations,(n,s)=>ny(n,s))&&vo(this.baseMutations,e.baseMutations,(n,s)=>ny(n,s))}}class pd{constructor(e,n,s,a){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=a}static from(e,n,s){ze(e.mutations.length===s.length);let a=function(){return _I}();const u=e.mutations;for(let h=0;h<u.length;h++)a=a.insert(u[h].key,s[h].version);return new pd(e,n,s,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht,Le;function OI(r){switch(r){case Q.OK:return _e();case Q.CANCELLED:case Q.UNKNOWN:case Q.DEADLINE_EXCEEDED:case Q.RESOURCE_EXHAUSTED:case Q.INTERNAL:case Q.UNAVAILABLE:case Q.UNAUTHENTICATED:return!1;case Q.INVALID_ARGUMENT:case Q.NOT_FOUND:case Q.ALREADY_EXISTS:case Q.PERMISSION_DENIED:case Q.FAILED_PRECONDITION:case Q.ABORTED:case Q.OUT_OF_RANGE:case Q.UNIMPLEMENTED:case Q.DATA_LOSS:return!0;default:return _e()}}function f_(r){if(r===void 0)return Nr("GRPC error has no .code"),Q.UNKNOWN;switch(r){case ht.OK:return Q.OK;case ht.CANCELLED:return Q.CANCELLED;case ht.UNKNOWN:return Q.UNKNOWN;case ht.DEADLINE_EXCEEDED:return Q.DEADLINE_EXCEEDED;case ht.RESOURCE_EXHAUSTED:return Q.RESOURCE_EXHAUSTED;case ht.INTERNAL:return Q.INTERNAL;case ht.UNAVAILABLE:return Q.UNAVAILABLE;case ht.UNAUTHENTICATED:return Q.UNAUTHENTICATED;case ht.INVALID_ARGUMENT:return Q.INVALID_ARGUMENT;case ht.NOT_FOUND:return Q.NOT_FOUND;case ht.ALREADY_EXISTS:return Q.ALREADY_EXISTS;case ht.PERMISSION_DENIED:return Q.PERMISSION_DENIED;case ht.FAILED_PRECONDITION:return Q.FAILED_PRECONDITION;case ht.ABORTED:return Q.ABORTED;case ht.OUT_OF_RANGE:return Q.OUT_OF_RANGE;case ht.UNIMPLEMENTED:return Q.UNIMPLEMENTED;case ht.DATA_LOSS:return Q.DATA_LOSS;default:return _e()}}(Le=ht||(ht={}))[Le.OK=0]="OK",Le[Le.CANCELLED=1]="CANCELLED",Le[Le.UNKNOWN=2]="UNKNOWN",Le[Le.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Le[Le.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Le[Le.NOT_FOUND=5]="NOT_FOUND",Le[Le.ALREADY_EXISTS=6]="ALREADY_EXISTS",Le[Le.PERMISSION_DENIED=7]="PERMISSION_DENIED",Le[Le.UNAUTHENTICATED=16]="UNAUTHENTICATED",Le[Le.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Le[Le.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Le[Le.ABORTED=10]="ABORTED",Le[Le.OUT_OF_RANGE=11]="OUT_OF_RANGE",Le[Le.UNIMPLEMENTED=12]="UNIMPLEMENTED",Le[Le.INTERNAL=13]="INTERNAL",Le[Le.UNAVAILABLE=14]="UNAVAILABLE",Le[Le.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI=new fi([4294967295,4294967295],0);function sy(r){const e=Ov().encode(r),n=new Rv;return n.update(e),new Uint8Array(n.digest())}function oy(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),a=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new fi([n,s],0),new fi([a,u],0)]}class md{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Ra(`Invalid padding: ${n}`);if(s<0)throw new Ra(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Ra(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Ra(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=fi.fromNumber(this.Ee)}Ae(e,n,s){let a=e.add(n.multiply(fi.fromNumber(s)));return a.compare(LI)===1&&(a=new fi([a.getBits(0),a.getBits(1)],0)),a.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=sy(e),[s,a]=oy(n);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,a,u);if(!this.Re(h))return!1}return!0}static create(e,n,s){const a=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),h=new md(u,a,n);return s.forEach(m=>h.insert(m)),h}insert(e){if(this.Ee===0)return;const n=sy(e),[s,a]=oy(n);for(let u=0;u<this.hashCount;u++){const h=this.Ae(s,a,u);this.Ve(h)}}Ve(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Ra extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{constructor(e,n,s,a,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=a,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const a=new Map;return a.set(e,Qa.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new mc(we.min(),a,new tt(Re),Or(),Ve())}}class Qa{constructor(e,n,s,a,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=a,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Qa(s,n,Ve(),Ve(),Ve())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n,s,a){this.me=e,this.removedTargetIds=n,this.key=s,this.fe=a}}class d_{constructor(e,n){this.targetId=e,this.ge=n}}class p_{constructor(e,n,s=Mt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=a}}class ay{constructor(){this.pe=0,this.ye=ly(),this.we=Mt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ve(),n=Ve(),s=Ve();return this.ye.forEach((a,u)=>{switch(u){case 0:e=e.add(a);break;case 2:n=n.add(a);break;case 1:s=s.add(a);break;default:_e()}}),new Qa(this.we,this.Se,e,n,s)}Me(){this.be=!1,this.ye=ly()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,ze(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class MI{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Or(),this.$e=_u(),this.Ue=_u(),this.Ke=new tt(Re)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(e.resumeToken));break;default:_e()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((s,a)=>{this.Je(a)&&n(a)})}Ze(e){const n=e.targetId,s=e.ge.count,a=this.Xe(n);if(a){const u=a.target;if(Lf(u))if(s===0){const h=new ye(u.path);this.ze(n,h,Ht.newNoDocument(h,we.min()))}else ze(s===1);else{const h=this.et(n);if(h!==s){const m=this.tt(e),y=m?this.nt(m,e,h):1;if(y!==0){this.Ye(n);const _=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,_)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:a=0},hashCount:u=0}=n;let h,m;try{h=yi(s).toUint8Array()}catch(y){if(y instanceof Fv)return yo("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{m=new md(h,a,u)}catch(y){return yo(y instanceof Ra?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return m.Ee===0?null:m}nt(e,n,s){return n.ge.count===s-this.st(e,n.targetId)?0:2}st(e,n){const s=this.ke.getRemoteKeysForTarget(n);let a=0;return s.forEach(u=>{const h=this.ke.it(),m=`projects/${h.projectId}/databases/${h.database}/documents/${u.path.canonicalString()}`;e.mightContain(m)||(this.ze(n,u,null),a++)}),a}ot(e){const n=new Map;this.qe.forEach((u,h)=>{const m=this.Xe(h);if(m){if(u.current&&Lf(m.target)){const y=new ye(m.target.path);this._t(y).has(h)||this.ut(h,y)||this.ze(h,y,Ht.newNoDocument(y,e))}u.ve&&(n.set(h,u.Fe()),u.Me())}});let s=Ve();this.Ue.forEach((u,h)=>{let m=!0;h.forEachWhile(y=>{const _=this.Xe(y);return!_||_.purpose==="TargetPurposeLimboResolution"||(m=!1,!1)}),m&&(s=s.add(u))}),this.Qe.forEach((u,h)=>h.setReadTime(e));const a=new mc(e,n,this.Ke,this.Qe,s);return this.Qe=Or(),this.$e=_u(),this.Ue=_u(),this.Ke=new tt(Re),a}Ge(e,n){if(!this.Je(e))return;const s=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const a=this.He(e);this.ut(e,n)?a.xe(n,1):a.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new ay,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new _t(Re),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new _t(Re),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||ne("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new ay),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function _u(){return new tt(ye.comparator)}function ly(){return new tt(ye.comparator)}const bI={asc:"ASCENDING",desc:"DESCENDING"},FI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},$I={and:"AND",or:"OR"};class jI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function bf(r,e){return r.useProto3Json||lc(e)?e:{value:e}}function Ku(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function m_(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function UI(r,e){return Ku(r,e.toTimestamp())}function ur(r){return ze(!!r),we.fromTimestamp(function(n){const s=gi(n);return new st(s.seconds,s.nanos)}(r))}function gd(r,e){return Ff(r,e).canonicalString()}function Ff(r,e){const n=function(a){return new it(["projects",a.projectId,"databases",a.database])}(r).child("documents");return e===void 0?n:n.child(e)}function g_(r){const e=it.fromString(r);return ze(E_(e)),e}function $f(r,e){return gd(r.databaseId,e.path)}function lf(r,e){const n=g_(e);if(n.get(1)!==r.databaseId.projectId)throw new ge(Q.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ge(Q.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ye(v_(n))}function y_(r,e){return gd(r.databaseId,e)}function zI(r){const e=g_(r);return e.length===4?it.emptyPath():v_(e)}function jf(r){return new it(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function v_(r){return ze(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function uy(r,e,n){return{name:$f(r,e),fields:n.value.mapValue.fields}}function BI(r,e){let n;if("targetChange"in e){e.targetChange;const s=function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:_e()}(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],u=function(_,E){return _.useProto3Json?(ze(E===void 0||typeof E=="string"),Mt.fromBase64String(E||"")):(ze(E===void 0||E instanceof Buffer||E instanceof Uint8Array),Mt.fromUint8Array(E||new Uint8Array))}(r,e.targetChange.resumeToken),h=e.targetChange.cause,m=h&&function(_){const E=_.code===void 0?Q.UNKNOWN:f_(_.code);return new ge(E,_.message||"")}(h);n=new p_(s,a,u,m||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const a=lf(r,s.document.name),u=ur(s.document.updateTime),h=s.document.createTime?ur(s.document.createTime):we.min(),m=new Rn({mapValue:{fields:s.document.fields}}),y=Ht.newFoundDocument(a,u,h,m),_=s.targetIds||[],E=s.removedTargetIds||[];n=new Nu(_,E,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const a=lf(r,s.document),u=s.readTime?ur(s.readTime):we.min(),h=Ht.newNoDocument(a,u),m=s.removedTargetIds||[];n=new Nu([],m,h.key,h)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const a=lf(r,s.document),u=s.removedTargetIds||[];n=new Nu([],u,a,null)}else{if(!("filter"in e))return _e();{e.filter;const s=e.filter;s.targetId;const{count:a=0,unchangedNames:u}=s,h=new NI(a,u),m=s.targetId;n=new d_(m,h)}}return n}function HI(r,e){let n;if(e instanceof Ga)n={update:uy(r,e.key,e.value)};else if(e instanceof h_)n={delete:$f(r,e.key)};else if(e instanceof cs)n={update:uy(r,e.key,e.data),updateMask:ZI(e.fieldMask)};else{if(!(e instanceof xI))return _e();n={verify:$f(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(u,h){const m=h.transform;if(m instanceof Wu)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(m instanceof za)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:m.elements}};if(m instanceof Ba)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:m.elements}};if(m instanceof Ha)return{fieldPath:h.field.canonicalString(),increment:m.Ie};throw _e()}(0,s))),e.precondition.isNone||(n.currentDocument=function(a,u){return u.updateTime!==void 0?{updateTime:UI(a,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:_e()}(r,e.precondition)),n}function qI(r,e){return r&&r.length>0?(ze(e!==void 0),r.map(n=>function(a,u){let h=a.updateTime?ur(a.updateTime):ur(u);return h.isEqual(we.min())&&(h=ur(u)),new RI(h,a.transformResults||[])}(n,e))):[]}function WI(r,e){return{documents:[y_(r,e.path)]}}function KI(r,e){const n={structuredQuery:{}},s=e.path;let a;e.collectionGroup!==null?(a=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=y_(r,a);const u=function(_){if(_.length!==0)return w_(hr.create(_,"and"))}(e.filters);u&&(n.structuredQuery.where=u);const h=function(_){if(_.length!==0)return _.map(E=>function(N){return{field:oo(N.field),direction:YI(N.dir)}}(E))}(e.orderBy);h&&(n.structuredQuery.orderBy=h);const m=bf(r,e.limit);return m!==null&&(n.structuredQuery.limit=m),e.startAt&&(n.structuredQuery.startAt=function(_){return{before:_.inclusive,values:_.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(_){return{before:!_.inclusive,values:_.position}}(e.endAt)),{ht:n,parent:a}}function GI(r){let e=zI(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let a=null;if(s>0){ze(s===1);const E=n.from[0];E.allDescendants?a=E.collectionId:e=e.child(E.collectionId)}let u=[];n.where&&(u=function(R){const N=__(R);return N instanceof hr&&Gv(N)?N.getFilters():[N]}(n.where));let h=[];n.orderBy&&(h=function(R){return R.map(N=>function(W){return new qu(ao(W.field),function(z){switch(z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(W.direction))}(N))}(n.orderBy));let m=null;n.limit&&(m=function(R){let N;return N=typeof R=="object"?R.value:R,lc(N)?null:N}(n.limit));let y=null;n.startAt&&(y=function(R){const N=!!R.before,F=R.values||[];return new Hu(F,N)}(n.startAt));let _=null;return n.endAt&&(_=function(R){const N=!R.before,F=R.values||[];return new Hu(F,N)}(n.endAt)),dI(e,a,h,u,m,"F",y,_)}function QI(r,e){const n=function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return _e()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function __(r){return r.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ao(n.unaryFilter.field);return vt.create(s,"==",{doubleValue:NaN});case"IS_NULL":const a=ao(n.unaryFilter.field);return vt.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=ao(n.unaryFilter.field);return vt.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const h=ao(n.unaryFilter.field);return vt.create(h,"!=",{nullValue:"NULL_VALUE"});default:return _e()}}(r):r.fieldFilter!==void 0?function(n){return vt.create(ao(n.fieldFilter.field),function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return _e()}}(n.fieldFilter.op),n.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(n){return hr.create(n.compositeFilter.filters.map(s=>__(s)),function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return _e()}}(n.compositeFilter.op))}(r):_e()}function YI(r){return bI[r]}function XI(r){return FI[r]}function JI(r){return $I[r]}function oo(r){return{fieldPath:r.canonicalString()}}function ao(r){return Ot.fromServerFormat(r.fieldPath)}function w_(r){return r instanceof vt?function(n){if(n.op==="=="){if(Yg(n.value))return{unaryFilter:{field:oo(n.field),op:"IS_NAN"}};if(Qg(n.value))return{unaryFilter:{field:oo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yg(n.value))return{unaryFilter:{field:oo(n.field),op:"IS_NOT_NAN"}};if(Qg(n.value))return{unaryFilter:{field:oo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:oo(n.field),op:XI(n.op),value:n.value}}}(r):r instanceof hr?function(n){const s=n.getFilters().map(a=>w_(a));return s.length===1?s[0]:{compositeFilter:{op:JI(n.op),filters:s}}}(r):_e()}function ZI(r){const e=[];return r.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function E_(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,s,a,u=we.min(),h=we.min(),m=Mt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=a,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=h,this.resumeToken=m,this.expectedCount=y}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(e){this.Tt=e}}function tS(r){const e=GI({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Mf(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(){this.Tn=new rS}addToCollectionParentIndex(e,n){return this.Tn.add(n),H.resolve()}getCollectionParents(e,n){return H.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return H.resolve()}deleteFieldIndex(e,n){return H.resolve()}deleteAllFieldIndexes(e){return H.resolve()}createTargetIndexes(e,n){return H.resolve()}getDocumentsMatchingTarget(e,n){return H.resolve(null)}getIndexType(e,n){return H.resolve(0)}getFieldIndexes(e,n){return H.resolve([])}getNextCollectionGroupToUpdate(e){return H.resolve(null)}getMinOffset(e,n){return H.resolve(mi.min())}getMinOffsetFromCollectionGroup(e,n){return H.resolve(mi.min())}updateCollectionGroup(e,n,s){return H.resolve()}updateIndexEntries(e,n){return H.resolve()}}class rS{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n]||new _t(it.comparator),u=!a.has(s);return this.index[n]=a.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),a=this.index[n];return a&&a.has(s)}getEntries(e){return(this.index[e]||new _t(it.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},T_=41943040;class on{static withCacheSize(e){return new on(e,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */on.DEFAULT_COLLECTION_PERCENTILE=10,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,on.DEFAULT=new on(T_,on.DEFAULT_COLLECTION_PERCENTILE,on.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),on.DISABLED=new on(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Eo(0)}static Kn(){return new Eo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="LruGarbageCollector",iS=1048576;function fy([r,e],[n,s]){const a=Re(r,n);return a===0?Re(e,s):a}class sS{constructor(e){this.Hn=e,this.buffer=new _t(fy),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();fy(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class oS{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ne(hy,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ro(n)?ne(hy,"Ignoring IndexedDB error during garbage collection: ",n):await Co(n)}await this.er(3e5)})}}class aS{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return H.resolve(ac.ae);const s=new sS(n);return this.tr.forEachTarget(e,a=>s.Zn(a.sequenceNumber)).next(()=>this.tr.rr(e,a=>s.Zn(a))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ne("LruGarbageCollector","Garbage collection skipped; disabled"),H.resolve(cy)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ne("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),cy):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,a,u,h,m,y,_;const E=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(R=>(R>this.params.maximumSequenceNumbersToCollect?(ne("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${R}`),a=this.params.maximumSequenceNumbersToCollect):a=R,h=Date.now(),this.nthSequenceNumber(e,a))).next(R=>(s=R,m=Date.now(),this.removeTargets(e,s,n))).next(R=>(u=R,y=Date.now(),this.removeOrphanedDocuments(e,s))).next(R=>(_=Date.now(),io()<=Me.DEBUG&&ne("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${h-E}ms
	Determined least recently used ${a} in `+(m-h)+`ms
	Removed ${u} targets in `+(y-m)+`ms
	Removed ${R} documents in `+(_-y)+`ms
Total Duration: ${_-E}ms`),H.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:u,documentsRemoved:R})))}}function lS(r,e){return new aS(r,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(){this.changes=new us(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ht.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?H.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(e,n,s,a){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=a}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(a=>(s=a,this.remoteDocumentCache.getEntry(e,n))).next(a=>(s!==null&&Da(s.mutation,a,Wn.empty(),st.now()),a))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Ve()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Ve()){const a=Zi();return this.populateOverlays(e,a,n).next(()=>this.computeViews(e,n,a,s).next(u=>{let h=Ca();return u.forEach((m,y)=>{h=h.insert(m,y.overlayedDocument)}),h}))}getOverlayedDocuments(e,n){const s=Zi();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Ve()))}populateOverlays(e,n,s){const a=[];return s.forEach(u=>{n.has(u)||a.push(u)}),this.documentOverlayCache.getOverlays(e,a).next(u=>{u.forEach((h,m)=>{n.set(h,m)})})}computeViews(e,n,s,a){let u=Or();const h=Va(),m=function(){return Va()}();return n.forEach((y,_)=>{const E=s.get(_.key);a.has(_.key)&&(E===void 0||E.mutation instanceof cs)?u=u.insert(_.key,_):E!==void 0?(h.set(_.key,E.mutation.getFieldMask()),Da(E.mutation,_,E.mutation.getFieldMask(),st.now())):h.set(_.key,Wn.empty())}),this.recalculateAndSaveOverlays(e,u).next(y=>(y.forEach((_,E)=>h.set(_,E)),n.forEach((_,E)=>{var R;return m.set(_,new cS(E,(R=h.get(_))!==null&&R!==void 0?R:null))}),m))}recalculateAndSaveOverlays(e,n){const s=Va();let a=new tt((h,m)=>h-m),u=Ve();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(h=>{for(const m of h)m.keys().forEach(y=>{const _=n.get(y);if(_===null)return;let E=s.get(y)||Wn.empty();E=m.applyToLocalView(_,E),s.set(y,E);const R=(a.get(m.batchId)||Ve()).add(y);a=a.insert(m.batchId,R)})}).next(()=>{const h=[],m=a.getReverseIterator();for(;m.hasNext();){const y=m.getNext(),_=y.key,E=y.value,R=n_();E.forEach(N=>{if(!u.has(N)){const F=u_(n.get(N),s.get(N));F!==null&&R.set(N,F),u=u.add(N)}}),h.push(this.documentOverlayCache.saveOverlays(e,_,R))}return H.waitFor(h)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,a){return function(h){return ye.isDocumentKey(h.path)&&h.collectionGroup===null&&h.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):pI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,a):this.getDocumentsMatchingCollectionQuery(e,n,s,a)}getNextDocuments(e,n,s,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,a).next(u=>{const h=a-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,a-u.size):H.resolve(Zi());let m=Fa,y=u;return h.next(_=>H.forEach(_,(E,R)=>(m<R.largestBatchId&&(m=R.largestBatchId),u.get(E)?H.resolve():this.remoteDocumentCache.getEntry(e,E).next(N=>{y=y.insert(E,N)}))).next(()=>this.populateOverlays(e,_,u)).next(()=>this.computeViews(e,y,_,Ve())).next(E=>({batchId:m,changes:t_(E)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ye(n)).next(s=>{let a=Ca();return s.isFoundDocument()&&(a=a.insert(s.key,s)),a})}getDocumentsMatchingCollectionGroupQuery(e,n,s,a){const u=n.collectionGroup;let h=Ca();return this.indexManager.getCollectionParents(e,u).next(m=>H.forEach(m,y=>{const _=function(R,N){return new cc(N,null,R.explicitOrderBy.slice(),R.filters.slice(),R.limit,R.limitType,R.startAt,R.endAt)}(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,_,s,a).next(E=>{E.forEach((R,N)=>{h=h.insert(R,N)})})}).next(()=>h))}getDocumentsMatchingCollectionQuery(e,n,s,a){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(h=>(u=h,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,a))).next(h=>{u.forEach((y,_)=>{const E=_.getKey();h.get(E)===null&&(h=h.insert(E,Ht.newInvalidDocument(E)))});let m=Ca();return h.forEach((y,_)=>{const E=u.get(y);E!==void 0&&Da(E.mutation,_,Wn.empty(),st.now()),fc(n,_)&&(m=m.insert(y,_))}),m})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return H.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(a){return{id:a.id,version:a.version,createTime:ur(a.createTime)}}(n)),H.resolve()}getNamedQuery(e,n){return H.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(a){return{name:a.name,query:tS(a.bundledQuery),readTime:ur(a.readTime)}}(n)),H.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(){this.overlays=new tt(ye.comparator),this.Rr=new Map}getOverlay(e,n){return H.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Zi();return H.forEach(n,a=>this.getOverlay(e,a).next(u=>{u!==null&&s.set(a,u)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((a,u)=>{this.Et(e,n,u)}),H.resolve()}removeOverlaysForBatchId(e,n,s){const a=this.Rr.get(s);return a!==void 0&&(a.forEach(u=>this.overlays=this.overlays.remove(u)),this.Rr.delete(s)),H.resolve()}getOverlaysForCollection(e,n,s){const a=Zi(),u=n.length+1,h=new ye(n.child("")),m=this.overlays.getIteratorFrom(h);for(;m.hasNext();){const y=m.getNext().value,_=y.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&y.largestBatchId>s&&a.set(y.getKey(),y)}return H.resolve(a)}getOverlaysForCollectionGroup(e,n,s,a){let u=new tt((_,E)=>_-E);const h=this.overlays.getIterator();for(;h.hasNext();){const _=h.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>s){let E=u.get(_.largestBatchId);E===null&&(E=Zi(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const m=Zi(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach((_,E)=>m.set(_,E)),!(m.size()>=a)););return H.resolve(m)}Et(e,n,s){const a=this.overlays.get(s.key);if(a!==null){const h=this.Rr.get(a.largestBatchId).delete(s.key);this.Rr.set(a.largestBatchId,h)}this.overlays=this.overlays.insert(s.key,new DI(n,s));let u=this.Rr.get(n);u===void 0&&(u=Ve(),this.Rr.set(n,u)),this.Rr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(){this.sessionToken=Mt.EMPTY_BYTE_STRING}getSessionToken(e){return H.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,H.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yd{constructor(){this.Vr=new _t(Ct.mr),this.gr=new _t(Ct.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new Ct(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new Ct(e,n))}Sr(e,n){e.forEach(s=>this.removeReference(s,n))}br(e){const n=new ye(new it([])),s=new Ct(n,e),a=new Ct(n,e+1),u=[];return this.gr.forEachInRange([s,a],h=>{this.wr(h),u.push(h.key)}),u}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new ye(new it([])),s=new Ct(n,e),a=new Ct(n,e+1);let u=Ve();return this.gr.forEachInRange([s,a],h=>{u=u.add(h.key)}),u}containsKey(e){const n=new Ct(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ct{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return ye.comparator(e.key,n.key)||Re(e.Cr,n.Cr)}static pr(e,n){return Re(e.Cr,n.Cr)||ye.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new _t(Ct.mr)}checkEmpty(e){return H.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,a){const u=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const h=new VI(u,n,s,a);this.mutationQueue.push(h);for(const m of a)this.Mr=this.Mr.add(new Ct(m.key,u)),this.indexManager.addToCollectionParentIndex(e,m.key.path.popLast());return H.resolve(h)}lookupMutationBatch(e,n){return H.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,a=this.Nr(s),u=a<0?0:a;return H.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return H.resolve(this.mutationQueue.length===0?ad:this.Fr-1)}getAllMutationBatches(e){return H.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ct(n,0),a=new Ct(n,Number.POSITIVE_INFINITY),u=[];return this.Mr.forEachInRange([s,a],h=>{const m=this.Or(h.Cr);u.push(m)}),H.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new _t(Re);return n.forEach(a=>{const u=new Ct(a,0),h=new Ct(a,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([u,h],m=>{s=s.add(m.Cr)})}),H.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,a=s.length+1;let u=s;ye.isDocumentKey(u)||(u=u.child(""));const h=new Ct(new ye(u),0);let m=new _t(Re);return this.Mr.forEachWhile(y=>{const _=y.key.path;return!!s.isPrefixOf(_)&&(_.length===a&&(m=m.add(y.Cr)),!0)},h),H.resolve(this.Br(m))}Br(e){const n=[];return e.forEach(s=>{const a=this.Or(s);a!==null&&n.push(a)}),n}removeMutationBatch(e,n){ze(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return H.forEach(n.mutations,a=>{const u=new Ct(a.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new Ct(n,0),a=this.Mr.firstAfterOrEqual(s);return H.resolve(n.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,H.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gS{constructor(e){this.kr=e,this.docs=function(){return new tt(ye.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,a=this.docs.get(s),u=a?a.size:0,h=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return H.resolve(s?s.document.mutableCopy():Ht.newInvalidDocument(n))}getEntries(e,n){let s=Or();return n.forEach(a=>{const u=this.docs.get(a);s=s.insert(a,u?u.document.mutableCopy():Ht.newInvalidDocument(a))}),H.resolve(s)}getDocumentsMatchingQuery(e,n,s,a){let u=Or();const h=n.path,m=new ye(h.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(m);for(;y.hasNext();){const{key:_,value:{document:E}}=y.getNext();if(!h.isPrefixOf(_.path))break;_.path.length>h.length+1||qT(HT(E),s)<=0||(a.has(E.key)||fc(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return H.resolve(u)}getAllFromCollectionGroup(e,n,s,a){_e()}qr(e,n){return H.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new yS(this)}getSize(e){return H.resolve(this.size)}}class yS extends uS{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,a)=>{a.isValidDocument()?n.push(this.Ir.addEntry(e,a)):this.Ir.removeEntry(s)}),H.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e){this.persistence=e,this.Qr=new us(n=>cd(n),hd),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.$r=0,this.Ur=new yd,this.targetCount=0,this.Kr=Eo.Un()}forEachTarget(e,n){return this.Qr.forEach((s,a)=>n(a)),H.resolve()}getLastRemoteSnapshotVersion(e){return H.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return H.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),H.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),H.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new Eo(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,H.resolve()}updateTargetData(e,n){return this.zn(n),H.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,H.resolve()}removeTargets(e,n,s){let a=0;const u=[];return this.Qr.forEach((h,m)=>{m.sequenceNumber<=n&&s.get(m.targetId)===null&&(this.Qr.delete(h),u.push(this.removeMatchingKeysForTargetId(e,m.targetId)),a++)}),H.waitFor(u).next(()=>a)}getTargetCount(e){return H.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return H.resolve(s)}addMatchingKeys(e,n,s){return this.Ur.yr(n,s),H.resolve()}removeMatchingKeys(e,n,s){this.Ur.Sr(n,s);const a=this.persistence.referenceDelegate,u=[];return a&&n.forEach(h=>{u.push(a.markPotentiallyOrphaned(e,h))}),H.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),H.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ur.vr(n);return H.resolve(s)}containsKey(e,n){return H.resolve(this.Ur.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new ac(0),this.zr=!1,this.zr=!0,this.jr=new pS,this.referenceDelegate=e(this),this.Hr=new vS(this),this.indexManager=new nS,this.remoteDocumentCache=function(a){return new gS(a)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new eS(n),this.Yr=new fS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new dS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new mS(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){ne("MemoryPersistence","Starting transaction:",e);const a=new _S(this.Gr.next());return this.referenceDelegate.Zr(),s(a).next(u=>this.referenceDelegate.Xr(a).next(()=>u)).toPromise().then(u=>(a.raiseOnCommittedEvent(),u))}ei(e,n){return H.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class _S extends KT{constructor(e){super(),this.currentSequenceNumber=e}}class vd{constructor(e){this.persistence=e,this.ti=new yd,this.ni=null}static ri(e){return new vd(e)}get ii(){if(this.ni)return this.ni;throw _e()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),H.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),H.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),H.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(a=>this.ii.add(a.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(a=>{a.forEach(u=>this.ii.add(u.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return H.forEach(this.ii,s=>{const a=ye.fromPath(s);return this.si(e,a).next(u=>{u||n.removeEntry(a,we.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return H.or([()=>H.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class Gu{constructor(e,n){this.persistence=e,this.oi=new us(s=>YT(s.path),(s,a)=>s.isEqual(a)),this.garbageCollector=lS(this,n)}static ri(e,n){return new Gu(e,n)}Zr(){}Xr(e){return H.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(a=>s+a))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return H.forEach(this.oi,(s,a)=>this.ar(e,s,a).next(u=>u?H.resolve():n(a)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const a=this.persistence.getRemoteDocumentCache(),u=a.newChangeBuffer();return a.qr(e,h=>this.ar(e,h,n).next(m=>{m||(s++,u.removeEntry(h,we.min()))})).next(()=>u.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),H.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),H.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),H.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),H.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xu(e.data.value)),n}ar(e,n,s){return H.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const a=this.oi.get(n);return H.resolve(a!==void 0&&a>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _d{constructor(e,n,s,a){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=a}static Yi(e,n){let s=Ve(),a=Ve();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:a=a.add(u.doc.key)}return new _d(e,n.fromCache,s,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return g1()?8:GT(d1())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,a){const u={result:null};return this.rs(e,n).next(h=>{u.result=h}).next(()=>{if(!u.result)return this.ss(e,n,a,s).next(h=>{u.result=h})}).next(()=>{if(u.result)return;const h=new wS;return this._s(e,n,h).next(m=>{if(u.result=m,this.Xi)return this.us(e,n,h,m.size)})}).next(()=>u.result)}us(e,n,s,a){return s.documentReadCount<this.es?(io()<=Me.DEBUG&&ne("QueryEngine","SDK will not create cache indexes for query:",so(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),H.resolve()):(io()<=Me.DEBUG&&ne("QueryEngine","Query:",so(n),"scans",s.documentReadCount,"local documents and returns",a,"documents as results."),s.documentReadCount>this.ts*a?(io()<=Me.DEBUG&&ne("QueryEngine","The SDK decides to create cache indexes for query:",so(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,lr(n))):H.resolve())}rs(e,n){if(ey(n))return H.resolve(null);let s=lr(n);return this.indexManager.getIndexType(e,s).next(a=>a===0?null:(n.limit!==null&&a===1&&(n=Mf(n,null,"F"),s=lr(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(u=>{const h=Ve(...u);return this.ns.getDocuments(e,h).next(m=>this.indexManager.getMinOffset(e,s).next(y=>{const _=this.cs(n,m);return this.ls(n,_,h,y.readTime)?this.rs(e,Mf(n,null,"F")):this.hs(e,_,n,y)}))})))}ss(e,n,s,a){return ey(n)||a.isEqual(we.min())?H.resolve(null):this.ns.getDocuments(e,s).next(u=>{const h=this.cs(n,u);return this.ls(n,h,s,a)?H.resolve(null):(io()<=Me.DEBUG&&ne("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),so(n)),this.hs(e,h,n,BT(a,Fa)).next(m=>m))})}cs(e,n){let s=new _t(Zv(e));return n.forEach((a,u)=>{fc(e,u)&&(s=s.add(u))}),s}ls(e,n,s,a){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(a)>0)}_s(e,n,s){return io()<=Me.DEBUG&&ne("QueryEngine","Using full collection scan to execute query:",so(n)),this.ns.getDocumentsMatchingQuery(e,n,mi.min(),s)}hs(e,n,s,a){return this.ns.getDocumentsMatchingQuery(e,s,a).next(u=>(n.forEach(h=>{u=u.insert(h.key,h)}),u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wd="LocalStore",TS=3e8;class IS{constructor(e,n,s,a){this.persistence=e,this.Ps=n,this.serializer=a,this.Ts=new tt(Re),this.Is=new us(u=>cd(u),hd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hS(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function SS(r,e,n,s){return new IS(r,e,n,s)}async function S_(r,e){const n=Ee(r);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let a;return n.mutationQueue.getAllMutationBatches(s).next(u=>(a=u,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(u=>{const h=[],m=[];let y=Ve();for(const _ of a){h.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}for(const _ of u){m.push(_.batchId);for(const E of _.mutations)y=y.add(E.key)}return n.localDocuments.getDocuments(s,y).next(_=>({Rs:_,removedBatchIds:h,addedBatchIds:m}))})})}function AS(r,e){const n=Ee(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const a=e.batch.keys(),u=n.ds.newChangeBuffer({trackRemovals:!0});return function(m,y,_,E){const R=_.batch,N=R.keys();let F=H.resolve();return N.forEach(W=>{F=F.next(()=>E.getEntry(y,W)).next(B=>{const z=_.docVersions.get(W);ze(z!==null),B.version.compareTo(z)<0&&(R.applyToRemoteDocument(B,_),B.isValidDocument()&&(B.setReadTime(_.commitVersion),E.addEntry(B)))})}),F.next(()=>m.mutationQueue.removeMutationBatch(y,R))}(n,s,e,u).next(()=>u.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,a,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(m){let y=Ve();for(let _=0;_<m.mutationResults.length;++_)m.mutationResults[_].transformResults.length>0&&(y=y.add(m.batch.mutations[_].key));return y}(e))).next(()=>n.localDocuments.getDocuments(s,a))})}function A_(r){const e=Ee(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function CS(r,e){const n=Ee(r),s=e.snapshotVersion;let a=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",u=>{const h=n.ds.newChangeBuffer({trackRemovals:!0});a=n.Ts;const m=[];e.targetChanges.forEach((E,R)=>{const N=a.get(R);if(!N)return;m.push(n.Hr.removeMatchingKeys(u,E.removedDocuments,R).next(()=>n.Hr.addMatchingKeys(u,E.addedDocuments,R)));let F=N.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(R)!==null?F=F.withResumeToken(Mt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):E.resumeToken.approximateByteSize()>0&&(F=F.withResumeToken(E.resumeToken,s)),a=a.insert(R,F),function(B,z,re){return B.resumeToken.approximateByteSize()===0||z.snapshotVersion.toMicroseconds()-B.snapshotVersion.toMicroseconds()>=TS?!0:re.addedDocuments.size+re.modifiedDocuments.size+re.removedDocuments.size>0}(N,F,E)&&m.push(n.Hr.updateTargetData(u,F))});let y=Or(),_=Ve();if(e.documentUpdates.forEach(E=>{e.resolvedLimboDocuments.has(E)&&m.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))}),m.push(RS(u,h,e.documentUpdates).next(E=>{y=E.Vs,_=E.fs})),!s.isEqual(we.min())){const E=n.Hr.getLastRemoteSnapshotVersion(u).next(R=>n.Hr.setTargetsMetadata(u,u.currentSequenceNumber,s));m.push(E)}return H.waitFor(m).next(()=>h.apply(u)).next(()=>n.localDocuments.getLocalViewOfDocuments(u,y,_)).next(()=>y)}).then(u=>(n.Ts=a,u))}function RS(r,e,n){let s=Ve(),a=Ve();return n.forEach(u=>s=s.add(u)),e.getEntries(r,s).next(u=>{let h=Or();return n.forEach((m,y)=>{const _=u.get(m);y.isFoundDocument()!==_.isFoundDocument()&&(a=a.add(m)),y.isNoDocument()&&y.version.isEqual(we.min())?(e.removeEntry(m,y.readTime),h=h.insert(m,y)):!_.isValidDocument()||y.version.compareTo(_.version)>0||y.version.compareTo(_.version)===0&&_.hasPendingWrites?(e.addEntry(y),h=h.insert(m,y)):ne(wd,"Ignoring outdated watch update for ",m,". Current version:",_.version," Watch version:",y.version)}),{Vs:h,fs:a}})}function kS(r,e){const n=Ee(r);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=ad),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function PS(r,e){const n=Ee(r);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let a;return n.Hr.getTargetData(s,e).next(u=>u?(a=u,H.resolve(a)):n.Hr.allocateTargetId(s).next(h=>(a=new li(e,h,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,a).next(()=>a))))}).then(s=>{const a=n.Ts.get(s.targetId);return(a===null||s.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(e,s.targetId)),s})}async function Uf(r,e,n){const s=Ee(r),a=s.Ts.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,h=>s.persistence.referenceDelegate.removeTarget(h,a))}catch(h){if(!Ro(h))throw h;ne(wd,`Failed to update sequence numbers for target ${e}: ${h}`)}s.Ts=s.Ts.remove(e),s.Is.delete(a.target)}function dy(r,e,n){const s=Ee(r);let a=we.min(),u=Ve();return s.persistence.runTransaction("Execute query","readwrite",h=>function(y,_,E){const R=Ee(y),N=R.Is.get(E);return N!==void 0?H.resolve(R.Ts.get(N)):R.Hr.getTargetData(_,E)}(s,h,lr(e)).next(m=>{if(m)return a=m.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(h,m.targetId).next(y=>{u=y})}).next(()=>s.Ps.getDocumentsMatchingQuery(h,e,n?a:we.min(),n?u:Ve())).next(m=>(xS(s,gI(e),m),{documents:m,gs:u})))}function xS(r,e,n){let s=r.Es.get(e)||we.min();n.forEach((a,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)}),r.Es.set(e,s)}class py{constructor(){this.activeTargetIds=TI()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class VS{constructor(){this.ho=new py,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new py,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const my="ConnectivityMonitor";class gy{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ne(my,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ne(my,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wu=null;function zf(){return wu===null?wu=function(){return 268435456+Math.round(2147483648*Math.random())}():wu++,"0x"+wu.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf="RestConnection",NS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class OS{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),a=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${a}`,this.wo=this.databaseId.database===zu?`project_id=${s}`:`project_id=${s}&database_id=${a}`}So(e,n,s,a,u){const h=zf(),m=this.bo(e,n.toUriEncodedString());ne(uf,`Sending RPC '${e}' ${h}:`,m,s);const y={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(y,a,u),this.vo(e,m,y,s).then(_=>(ne(uf,`Received RPC '${e}' ${h}: `,_),_),_=>{throw yo(uf,`RPC '${e}' ${h} failed with error: `,_,"url: ",m,"request:",s),_})}Co(e,n,s,a,u,h){return this.So(e,n,s,a,u)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ao}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((a,u)=>e[u]=a),s&&s.headers.forEach((a,u)=>e[u]=a)}bo(e,n){const s=NS[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="WebChannelConnection";class MS extends OS{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,a){const u=zf();return new Promise((h,m)=>{const y=new kv;y.setWithCredentials(!0),y.listenOnce(Pv.COMPLETE,()=>{try{switch(y.getLastErrorCode()){case Pu.NO_ERROR:const E=y.getResponseJson();ne(Ut,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(E)),h(E);break;case Pu.TIMEOUT:ne(Ut,`RPC '${e}' ${u} timed out`),m(new ge(Q.DEADLINE_EXCEEDED,"Request time out"));break;case Pu.HTTP_ERROR:const R=y.getStatus();if(ne(Ut,`RPC '${e}' ${u} failed with status:`,R,"response text:",y.getResponseText()),R>0){let N=y.getResponseJson();Array.isArray(N)&&(N=N[0]);const F=N==null?void 0:N.error;if(F&&F.status&&F.message){const W=function(z){const re=z.toLowerCase().replace(/_/g,"-");return Object.values(Q).indexOf(re)>=0?re:Q.UNKNOWN}(F.status);m(new ge(W,F.message))}else m(new ge(Q.UNKNOWN,"Server responded with status "+y.getStatus()))}else m(new ge(Q.UNAVAILABLE,"Connection failed."));break;default:_e()}}finally{ne(Ut,`RPC '${e}' ${u} completed.`)}});const _=JSON.stringify(a);ne(Ut,`RPC '${e}' ${u} sending request:`,a),y.send(n,"POST",_,s,15)})}Wo(e,n,s){const a=zf(),u=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],h=Dv(),m=Vv(),y={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(y.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(y.useFetchStreams=!0),this.Do(y.initMessageHeaders,n,s),y.encodeInitMessageHeaders=!0;const E=u.join("");ne(Ut,`Creating RPC '${e}' stream ${a}: ${E}`,y);const R=h.createWebChannel(E,y);let N=!1,F=!1;const W=new LS({Fo:z=>{F?ne(Ut,`Not sending because RPC '${e}' stream ${a} is closed:`,z):(N||(ne(Ut,`Opening RPC '${e}' stream ${a} transport.`),R.open(),N=!0),ne(Ut,`RPC '${e}' stream ${a} sending:`,z),R.send(z))},Mo:()=>R.close()}),B=(z,re,se)=>{z.listen(re,te=>{try{se(te)}catch(de){setTimeout(()=>{throw de},0)}})};return B(R,Aa.EventType.OPEN,()=>{F||(ne(Ut,`RPC '${e}' stream ${a} transport opened.`),W.Qo())}),B(R,Aa.EventType.CLOSE,()=>{F||(F=!0,ne(Ut,`RPC '${e}' stream ${a} transport closed`),W.Uo())}),B(R,Aa.EventType.ERROR,z=>{F||(F=!0,yo(Ut,`RPC '${e}' stream ${a} transport errored:`,z),W.Uo(new ge(Q.UNAVAILABLE,"The operation could not be completed")))}),B(R,Aa.EventType.MESSAGE,z=>{var re;if(!F){const se=z.data[0];ze(!!se);const te=se,de=(te==null?void 0:te.error)||((re=te[0])===null||re===void 0?void 0:re.error);if(de){ne(Ut,`RPC '${e}' stream ${a} received error:`,de);const Se=de.status;let ce=function(A){const P=ht[A];if(P!==void 0)return f_(P)}(Se),C=de.message;ce===void 0&&(ce=Q.INTERNAL,C="Unknown error status: "+Se+" with message "+de.message),F=!0,W.Uo(new ge(ce,C)),R.close()}else ne(Ut,`RPC '${e}' stream ${a} received:`,se),W.Ko(se)}}),B(m,xv.STAT_EVENT,z=>{z.stat===xf.PROXY?ne(Ut,`RPC '${e}' stream ${a} detected buffering proxy`):z.stat===xf.NOPROXY&&ne(Ut,`RPC '${e}' stream ${a} detected no buffering proxy`)}),setTimeout(()=>{W.$o()},0),W}}function cf(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(r){return new jI(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e,n,s=1e3,a=1.5,u=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=a,this.jo=u,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),a=Math.max(0,n-s);a>0&&ne("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,a,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy="PersistentStream";class R_{constructor(e,n,s,a,u,h,m,y){this.Ti=e,this.n_=s,this.r_=a,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=m,this.listener=y,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new C_(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===Q.RESOURCE_EXHAUSTED?(Nr(n.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===Q.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,a])=>{this.i_===n&&this.V_(s,a)},s=>{e(()=>{const a=new ge(Q.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(a)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(a=>{s(()=>this.m_(a))}),this.stream.onMessage(a=>{s(()=>++this.__==1?this.g_(a):this.onNext(a))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ne(yy,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ne(yy,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bS extends R_{constructor(e,n,s,a,u,h){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,a,h),this.serializer=u}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=BI(this.serializer,e),s=function(u){if(!("targetChange"in u))return we.min();const h=u.targetChange;return h.targetIds&&h.targetIds.length?we.min():h.readTime?ur(h.readTime):we.min()}(e);return this.listener.p_(n,s)}y_(e){const n={};n.database=jf(this.serializer),n.addTarget=function(u,h){let m;const y=h.target;if(m=Lf(y)?{documents:WI(u,y)}:{query:KI(u,y).ht},m.targetId=h.targetId,h.resumeToken.approximateByteSize()>0){m.resumeToken=m_(u,h.resumeToken);const _=bf(u,h.expectedCount);_!==null&&(m.expectedCount=_)}else if(h.snapshotVersion.compareTo(we.min())>0){m.readTime=Ku(u,h.snapshotVersion.toTimestamp());const _=bf(u,h.expectedCount);_!==null&&(m.expectedCount=_)}return m}(this.serializer,e);const s=QI(this.serializer,e);s&&(n.labels=s),this.I_(n)}w_(e){const n={};n.database=jf(this.serializer),n.removeTarget=e,this.I_(n)}}class FS extends R_{constructor(e,n,s,a,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,a,h),this.serializer=u}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return ze(!!e.streamToken),this.lastStreamToken=e.streamToken,ze(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){ze(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=qI(e.writeResults,e.commitTime),s=ur(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=jf(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>HI(this.serializer,s))};this.I_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{}class jS extends $S{constructor(e,n,s,a){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=a,this.F_=!1}M_(){if(this.F_)throw new ge(Q.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,a){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.So(e,Ff(n,s),a,u,h)).catch(u=>{throw u.name==="FirebaseError"?(u.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ge(Q.UNKNOWN,u.toString())})}Co(e,n,s,a,u){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([h,m])=>this.connection.Co(e,Ff(n,s),a,h,m,u)).catch(h=>{throw h.name==="FirebaseError"?(h.code===Q.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),h):new ge(Q.UNKNOWN,h.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class US{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Nr(n),this.N_=!1):ne("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss="RemoteStore";class zS{constructor(e,n,s,a,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=u,this.z_.To(h=>{s.enqueueAndForget(async()=>{hs(this)&&(ne(ss,"Restarting streams for network reachability change."),await async function(y){const _=Ee(y);_.W_.add(4),await Ya(_),_.j_.set("Unknown"),_.W_.delete(4),await yc(_)}(this))})}),this.j_=new US(s,a)}}async function yc(r){if(hs(r))for(const e of r.G_)await e(!0)}async function Ya(r){for(const e of r.G_)await e(!1)}function k_(r,e){const n=Ee(r);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Sd(n)?Id(n):ko(n).c_()&&Td(n,e))}function Ed(r,e){const n=Ee(r),s=ko(n);n.K_.delete(e),s.c_()&&P_(n,e),n.K_.size===0&&(s.c_()?s.P_():hs(n)&&n.j_.set("Unknown"))}function Td(r,e){if(r.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ko(r).y_(e)}function P_(r,e){r.H_.Ne(e),ko(r).w_(e)}function Id(r){r.H_=new MI({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>r.K_.get(e)||null,it:()=>r.datastore.serializer.databaseId}),ko(r).start(),r.j_.B_()}function Sd(r){return hs(r)&&!ko(r).u_()&&r.K_.size>0}function hs(r){return Ee(r).W_.size===0}function x_(r){r.H_=void 0}async function BS(r){r.j_.set("Online")}async function HS(r){r.K_.forEach((e,n)=>{Td(r,e)})}async function qS(r,e){x_(r),Sd(r)?(r.j_.q_(e),Id(r)):r.j_.set("Unknown")}async function WS(r,e,n){if(r.j_.set("Online"),e instanceof p_&&e.state===2&&e.cause)try{await async function(a,u){const h=u.cause;for(const m of u.targetIds)a.K_.has(m)&&(await a.remoteSyncer.rejectListen(m,h),a.K_.delete(m),a.H_.removeTarget(m))}(r,e)}catch(s){ne(ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await Qu(r,s)}else if(e instanceof Nu?r.H_.We(e):e instanceof d_?r.H_.Ze(e):r.H_.je(e),!n.isEqual(we.min()))try{const s=await A_(r.localStore);n.compareTo(s)>=0&&await function(u,h){const m=u.H_.ot(h);return m.targetChanges.forEach((y,_)=>{if(y.resumeToken.approximateByteSize()>0){const E=u.K_.get(_);E&&u.K_.set(_,E.withResumeToken(y.resumeToken,h))}}),m.targetMismatches.forEach((y,_)=>{const E=u.K_.get(y);if(!E)return;u.K_.set(y,E.withResumeToken(Mt.EMPTY_BYTE_STRING,E.snapshotVersion)),P_(u,y);const R=new li(E.target,y,_,E.sequenceNumber);Td(u,R)}),u.remoteSyncer.applyRemoteEvent(m)}(r,n)}catch(s){ne(ss,"Failed to raise snapshot:",s),await Qu(r,s)}}async function Qu(r,e,n){if(!Ro(e))throw e;r.W_.add(1),await Ya(r),r.j_.set("Offline"),n||(n=()=>A_(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{ne(ss,"Retrying IndexedDB access"),await n(),r.W_.delete(1),await yc(r)})}function V_(r,e){return e().catch(n=>Qu(r,n,e))}async function vc(r){const e=Ee(r),n=_i(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:ad;for(;KS(e);)try{const a=await kS(e.localStore,s);if(a===null){e.U_.length===0&&n.P_();break}s=a.batchId,GS(e,a)}catch(a){await Qu(e,a)}D_(e)&&N_(e)}function KS(r){return hs(r)&&r.U_.length<10}function GS(r,e){r.U_.push(e);const n=_i(r);n.c_()&&n.S_&&n.b_(e.mutations)}function D_(r){return hs(r)&&!_i(r).u_()&&r.U_.length>0}function N_(r){_i(r).start()}async function QS(r){_i(r).C_()}async function YS(r){const e=_i(r);for(const n of r.U_)e.b_(n.mutations)}async function XS(r,e,n){const s=r.U_.shift(),a=pd.from(s,e,n);await V_(r,()=>r.remoteSyncer.applySuccessfulWrite(a)),await vc(r)}async function JS(r,e){e&&_i(r).S_&&await async function(s,a){if(function(h){return OI(h)&&h!==Q.ABORTED}(a.code)){const u=s.U_.shift();_i(s).h_(),await V_(s,()=>s.remoteSyncer.rejectFailedWrite(u.batchId,a)),await vc(s)}}(r,e),D_(r)&&N_(r)}async function vy(r,e){const n=Ee(r);n.asyncQueue.verifyOperationInProgress(),ne(ss,"RemoteStore received new credentials");const s=hs(n);n.W_.add(3),await Ya(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await yc(n)}async function ZS(r,e){const n=Ee(r);e?(n.W_.delete(2),await yc(n)):e||(n.W_.add(2),await Ya(n),n.j_.set("Unknown"))}function ko(r){return r.J_||(r.J_=function(n,s,a){const u=Ee(n);return u.M_(),new bS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)}(r.datastore,r.asyncQueue,{xo:BS.bind(null,r),No:HS.bind(null,r),Lo:qS.bind(null,r),p_:WS.bind(null,r)}),r.G_.push(async e=>{e?(r.J_.h_(),Sd(r)?Id(r):r.j_.set("Unknown")):(await r.J_.stop(),x_(r))})),r.J_}function _i(r){return r.Y_||(r.Y_=function(n,s,a){const u=Ee(n);return u.M_(),new FS(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,a)}(r.datastore,r.asyncQueue,{xo:()=>Promise.resolve(),No:QS.bind(null,r),Lo:JS.bind(null,r),D_:YS.bind(null,r),v_:XS.bind(null,r)}),r.G_.push(async e=>{e?(r.Y_.h_(),await vc(r)):(await r.Y_.stop(),r.U_.length>0&&(ne(ss,`Stopping write stream with ${r.U_.length} pending writes`),r.U_=[]))})),r.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ad{constructor(e,n,s,a,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=a,this.removalCallback=u,this.deferred=new di,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(h=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,a,u){const h=Date.now()+s,m=new Ad(e,n,h,a,u);return m.start(s),m}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ge(Q.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cd(r,e){if(Nr("AsyncQueue",`${e}: ${r}`),Ro(r))return new ge(Q.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{static emptySet(e){return new uo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ye.comparator(n.key,s.key):(n,s)=>ye.comparator(n.key,s.key),this.keyedMap=Ca(),this.sortedSet=new tt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof uo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const a=n.getNext().key,u=s.getNext().key;if(!a.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new uo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.Z_=new tt(ye.comparator)}track(e){const n=e.doc.key,s=this.Z_.get(n);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(n):e.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):_e():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class To{constructor(e,n,s,a,u,h,m,y,_){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=a,this.mutatedKeys=u,this.fromCache=h,this.syncStateChanged=m,this.excludesMetadataChanges=y,this.hasCachedResults=_}static fromInitialDocuments(e,n,s,a,u){const h=[];return n.forEach(m=>{h.push({type:0,doc:m})}),new To(e,n,uo.emptySet(n),h,s,a,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let a=0;a<n.length;a++)if(n[a].type!==s[a].type||!n[a].doc.isEqual(s[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class tA{constructor(){this.queries=wy(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const a=Ee(n),u=a.queries;a.queries=wy(),u.forEach((h,m)=>{for(const y of m.ta)y.onError(s)})})(this,new ge(Q.ABORTED,"Firestore shutting down"))}}function wy(){return new us(r=>Jv(r),hc)}async function nA(r,e){const n=Ee(r);let s=3;const a=e.query;let u=n.queries.get(a);u?!u.na()&&e.ra()&&(s=2):(u=new eA,s=e.ra()?0:1);try{switch(s){case 0:u.ea=await n.onListen(a,!0);break;case 1:u.ea=await n.onListen(a,!1);break;case 2:await n.onFirstRemoteStoreListen(a)}}catch(h){const m=Cd(h,`Initialization of query '${so(e.query)}' failed`);return void e.onError(m)}n.queries.set(a,u),u.ta.push(e),e.sa(n.onlineState),u.ea&&e.oa(u.ea)&&Rd(n)}async function rA(r,e){const n=Ee(r),s=e.query;let a=3;const u=n.queries.get(s);if(u){const h=u.ta.indexOf(e);h>=0&&(u.ta.splice(h,1),u.ta.length===0?a=e.ra()?0:1:!u.na()&&e.ra()&&(a=2))}switch(a){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function iA(r,e){const n=Ee(r);let s=!1;for(const a of e){const u=a.query,h=n.queries.get(u);if(h){for(const m of h.ta)m.oa(a)&&(s=!0);h.ea=a}}s&&Rd(n)}function sA(r,e,n){const s=Ee(r),a=s.queries.get(e);if(a)for(const u of a.ta)u.onError(n);s.queries.delete(e)}function Rd(r){r.ia.forEach(e=>{e.next()})}var Bf,Ey;(Ey=Bf||(Bf={}))._a="default",Ey.Cache="cache";class oA{constructor(e,n,s){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const a of e.docChanges)a.type!==3&&s.push(a);e=new To(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=To.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Bf.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e){this.key=e}}class L_{constructor(e){this.key=e}}class aA{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ve(),this.mutatedKeys=Ve(),this.ya=Zv(e),this.wa=new uo(this.ya)}get Sa(){return this.fa}ba(e,n){const s=n?n.Da:new _y,a=n?n.wa:this.wa;let u=n?n.mutatedKeys:this.mutatedKeys,h=a,m=!1;const y=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,_=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal((E,R)=>{const N=a.get(E),F=fc(this.query,R)?R:null,W=!!N&&this.mutatedKeys.has(N.key),B=!!F&&(F.hasLocalMutations||this.mutatedKeys.has(F.key)&&F.hasCommittedMutations);let z=!1;N&&F?N.data.isEqual(F.data)?W!==B&&(s.track({type:3,doc:F}),z=!0):this.va(N,F)||(s.track({type:2,doc:F}),z=!0,(y&&this.ya(F,y)>0||_&&this.ya(F,_)<0)&&(m=!0)):!N&&F?(s.track({type:0,doc:F}),z=!0):N&&!F&&(s.track({type:1,doc:N}),z=!0,(y||_)&&(m=!0)),z&&(F?(h=h.add(F),u=B?u.add(E):u.delete(E)):(h=h.delete(E),u=u.delete(E)))}),this.query.limit!==null)for(;h.size>this.query.limit;){const E=this.query.limitType==="F"?h.last():h.first();h=h.delete(E.key),u=u.delete(E.key),s.track({type:1,doc:E})}return{wa:h,Da:s,ls:m,mutatedKeys:u}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,a){const u=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const h=e.Da.X_();h.sort((E,R)=>function(F,W){const B=z=>{switch(z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return _e()}};return B(F)-B(W)}(E.type,R.type)||this.ya(E.doc,R.doc)),this.Ca(s),a=a!=null&&a;const m=n&&!a?this.Fa():[],y=this.pa.size===0&&this.current&&!a?1:0,_=y!==this.ga;return this.ga=y,h.length!==0||_?{snapshot:new To(this.query,e.wa,u,h,e.mutatedKeys,y===0,_,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:m}:{Ma:m}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new _y,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ve(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return e.forEach(s=>{this.pa.has(s)||n.push(new L_(s))}),this.pa.forEach(s=>{e.has(s)||n.push(new O_(s))}),n}Oa(e){this.fa=e.gs,this.pa=Ve();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return To.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const kd="SyncEngine";class lA{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class uA{constructor(e){this.key=e,this.Ba=!1}}class cA{constructor(e,n,s,a,u,h){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=a,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.La={},this.ka=new us(m=>Jv(m),hc),this.qa=new Map,this.Qa=new Set,this.$a=new tt(ye.comparator),this.Ua=new Map,this.Ka=new yd,this.Wa={},this.Ga=new Map,this.za=Eo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function hA(r,e,n=!0){const s=U_(r);let a;const u=s.ka.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),a=u.view.Na()):a=await M_(s,e,n,!0),a}async function fA(r,e){const n=U_(r);await M_(n,e,!0,!1)}async function M_(r,e,n,s){const a=await PS(r.localStore,lr(e)),u=a.targetId,h=r.sharedClientState.addLocalQueryTarget(u,n);let m;return s&&(m=await dA(r,e,u,h==="current",a.resumeToken)),r.isPrimaryClient&&n&&k_(r.remoteStore,a),m}async function dA(r,e,n,s,a){r.Ha=(R,N,F)=>async function(B,z,re,se){let te=z.view.ba(re);te.ls&&(te=await dy(B.localStore,z.query,!1).then(({documents:C})=>z.view.ba(C,te)));const de=se&&se.targetChanges.get(z.targetId),Se=se&&se.targetMismatches.get(z.targetId)!=null,ce=z.view.applyChanges(te,B.isPrimaryClient,de,Se);return Iy(B,z.targetId,ce.Ma),ce.snapshot}(r,R,N,F);const u=await dy(r.localStore,e,!0),h=new aA(e,u.gs),m=h.ba(u.documents),y=Qa.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",a),_=h.applyChanges(m,r.isPrimaryClient,y);Iy(r,n,_.Ma);const E=new lA(e,n,h);return r.ka.set(e,E),r.qa.has(n)?r.qa.get(n).push(e):r.qa.set(n,[e]),_.snapshot}async function pA(r,e,n){const s=Ee(r),a=s.ka.get(e),u=s.qa.get(a.targetId);if(u.length>1)return s.qa.set(a.targetId,u.filter(h=>!hc(h,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(a.targetId),s.sharedClientState.isActiveQueryTarget(a.targetId)||await Uf(s.localStore,a.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(a.targetId),n&&Ed(s.remoteStore,a.targetId),Hf(s,a.targetId)}).catch(Co)):(Hf(s,a.targetId),await Uf(s.localStore,a.targetId,!0))}async function mA(r,e){const n=Ee(r),s=n.ka.get(e),a=n.qa.get(s.targetId);n.isPrimaryClient&&a.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Ed(n.remoteStore,s.targetId))}async function gA(r,e,n){const s=IA(r);try{const a=await function(h,m){const y=Ee(h),_=st.now(),E=m.reduce((F,W)=>F.add(W.key),Ve());let R,N;return y.persistence.runTransaction("Locally write mutations","readwrite",F=>{let W=Or(),B=Ve();return y.ds.getEntries(F,E).next(z=>{W=z,W.forEach((re,se)=>{se.isValidDocument()||(B=B.add(re))})}).next(()=>y.localDocuments.getOverlayedDocuments(F,W)).next(z=>{R=z;const re=[];for(const se of m){const te=PI(se,R.get(se.key).overlayedDocument);te!=null&&re.push(new cs(se.key,te,qv(te.value.mapValue),xr.exists(!0)))}return y.mutationQueue.addMutationBatch(F,_,re,m)}).next(z=>{N=z;const re=z.applyToLocalDocumentSet(R,B);return y.documentOverlayCache.saveOverlays(F,z.batchId,re)})}).then(()=>({batchId:N.batchId,changes:t_(R)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(a.batchId),function(h,m,y){let _=h.Wa[h.currentUser.toKey()];_||(_=new tt(Re)),_=_.insert(m,y),h.Wa[h.currentUser.toKey()]=_}(s,a.batchId,n),await Xa(s,a.changes),await vc(s.remoteStore)}catch(a){const u=Cd(a,"Failed to persist write");n.reject(u)}}async function b_(r,e){const n=Ee(r);try{const s=await CS(n.localStore,e);e.targetChanges.forEach((a,u)=>{const h=n.Ua.get(u);h&&(ze(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?h.Ba=!0:a.modifiedDocuments.size>0?ze(h.Ba):a.removedDocuments.size>0&&(ze(h.Ba),h.Ba=!1))}),await Xa(n,s,e)}catch(s){await Co(s)}}function Ty(r,e,n){const s=Ee(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const a=[];s.ka.forEach((u,h)=>{const m=h.view.sa(e);m.snapshot&&a.push(m.snapshot)}),function(h,m){const y=Ee(h);y.onlineState=m;let _=!1;y.queries.forEach((E,R)=>{for(const N of R.ta)N.sa(m)&&(_=!0)}),_&&Rd(y)}(s.eventManager,e),a.length&&s.La.p_(a),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function yA(r,e,n){const s=Ee(r);s.sharedClientState.updateQueryState(e,"rejected",n);const a=s.Ua.get(e),u=a&&a.key;if(u){let h=new tt(ye.comparator);h=h.insert(u,Ht.newNoDocument(u,we.min()));const m=Ve().add(u),y=new mc(we.min(),new Map,new tt(Re),h,m);await b_(s,y),s.$a=s.$a.remove(u),s.Ua.delete(e),Pd(s)}else await Uf(s.localStore,e,!1).then(()=>Hf(s,e,n)).catch(Co)}async function vA(r,e){const n=Ee(r),s=e.batch.batchId;try{const a=await AS(n.localStore,e);$_(n,s,null),F_(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Xa(n,a)}catch(a){await Co(a)}}async function _A(r,e,n){const s=Ee(r);try{const a=await function(h,m){const y=Ee(h);return y.persistence.runTransaction("Reject batch","readwrite-primary",_=>{let E;return y.mutationQueue.lookupMutationBatch(_,m).next(R=>(ze(R!==null),E=R.keys(),y.mutationQueue.removeMutationBatch(_,R))).next(()=>y.mutationQueue.performConsistencyCheck(_)).next(()=>y.documentOverlayCache.removeOverlaysForBatchId(_,E,m)).next(()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E)).next(()=>y.localDocuments.getDocuments(_,E))})}(s.localStore,e);$_(s,e,n),F_(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Xa(s,a)}catch(a){await Co(a)}}function F_(r,e){(r.Ga.get(e)||[]).forEach(n=>{n.resolve()}),r.Ga.delete(e)}function $_(r,e,n){const s=Ee(r);let a=s.Wa[s.currentUser.toKey()];if(a){const u=a.get(e);u&&(n?u.reject(n):u.resolve(),a=a.remove(e)),s.Wa[s.currentUser.toKey()]=a}}function Hf(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.qa.get(e))r.ka.delete(s),n&&r.La.Ja(s,n);r.qa.delete(e),r.isPrimaryClient&&r.Ka.br(e).forEach(s=>{r.Ka.containsKey(s)||j_(r,s)})}function j_(r,e){r.Qa.delete(e.path.canonicalString());const n=r.$a.get(e);n!==null&&(Ed(r.remoteStore,n),r.$a=r.$a.remove(e),r.Ua.delete(n),Pd(r))}function Iy(r,e,n){for(const s of n)s instanceof O_?(r.Ka.addReference(s.key,e),wA(r,s)):s instanceof L_?(ne(kd,"Document no longer in limbo: "+s.key),r.Ka.removeReference(s.key,e),r.Ka.containsKey(s.key)||j_(r,s.key)):_e()}function wA(r,e){const n=e.key,s=n.path.canonicalString();r.$a.get(n)||r.Qa.has(s)||(ne(kd,"New document in limbo: "+n),r.Qa.add(s),Pd(r))}function Pd(r){for(;r.Qa.size>0&&r.$a.size<r.maxConcurrentLimboResolutions;){const e=r.Qa.values().next().value;r.Qa.delete(e);const n=new ye(it.fromString(e)),s=r.za.next();r.Ua.set(s,new uA(n)),r.$a=r.$a.insert(n,s),k_(r.remoteStore,new li(lr(fd(n.path)),s,"TargetPurposeLimboResolution",ac.ae))}}async function Xa(r,e,n){const s=Ee(r),a=[],u=[],h=[];s.ka.isEmpty()||(s.ka.forEach((m,y)=>{h.push(s.Ha(y,e,n).then(_=>{var E;if((_||n)&&s.isPrimaryClient){const R=_?!_.fromCache:(E=n==null?void 0:n.targetChanges.get(y.targetId))===null||E===void 0?void 0:E.current;s.sharedClientState.updateQueryState(y.targetId,R?"current":"not-current")}if(_){a.push(_);const R=_d.Yi(y.targetId,_);u.push(R)}}))}),await Promise.all(h),s.La.p_(a),await async function(y,_){const E=Ee(y);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",R=>H.forEach(_,N=>H.forEach(N.Hi,F=>E.persistence.referenceDelegate.addReference(R,N.targetId,F)).next(()=>H.forEach(N.Ji,F=>E.persistence.referenceDelegate.removeReference(R,N.targetId,F)))))}catch(R){if(!Ro(R))throw R;ne(wd,"Failed to update sequence numbers: "+R)}for(const R of _){const N=R.targetId;if(!R.fromCache){const F=E.Ts.get(N),W=F.snapshotVersion,B=F.withLastLimboFreeSnapshotVersion(W);E.Ts=E.Ts.insert(N,B)}}}(s.localStore,u))}async function EA(r,e){const n=Ee(r);if(!n.currentUser.isEqual(e)){ne(kd,"User change. New user:",e.toKey());const s=await S_(n.localStore,e);n.currentUser=e,function(u,h){u.Ga.forEach(m=>{m.forEach(y=>{y.reject(new ge(Q.CANCELLED,h))})}),u.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Xa(n,s.Rs)}}function TA(r,e){const n=Ee(r),s=n.Ua.get(e);if(s&&s.Ba)return Ve().add(s.key);{let a=Ve();const u=n.qa.get(e);if(!u)return a;for(const h of u){const m=n.ka.get(h);a=a.unionWith(m.view.Sa)}return a}}function U_(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=b_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=TA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yA.bind(null,e),e.La.p_=iA.bind(null,e.eventManager),e.La.Ja=sA.bind(null,e.eventManager),e}function IA(r){const e=Ee(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_A.bind(null,e),e}class Yu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return SS(this.persistence,new ES,e.initialUser,this.serializer)}Xa(e){return new I_(vd.ri,this.serializer)}Za(e){return new VS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Yu.provider={build:()=>new Yu};class SA extends Yu{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){ze(this.persistence.referenceDelegate instanceof Gu);const s=this.persistence.referenceDelegate.garbageCollector;return new oS(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?on.withCacheSize(this.cacheSizeBytes):on.DEFAULT;return new I_(s=>Gu.ri(s,n),this.serializer)}}class qf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Ty(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=EA.bind(null,this.syncEngine),await ZS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new tA}()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),s=function(u){return new MS(u)}(e.databaseInfo);return function(u,h,m,y){return new jS(u,h,m,y)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,a,u,h,m){return new zS(s,a,u,h,m)}(this.localStore,this.datastore,e.asyncQueue,n=>Ty(this.syncEngine,n,0),function(){return gy.D()?new gy:new DS}())}createSyncEngine(e,n){return function(a,u,h,m,y,_,E){const R=new cA(a,u,h,m,y,_);return E&&(R.ja=!0),R}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(a){const u=Ee(a);ne(ss,"RemoteStore shutting down."),u.W_.add(5),await Ya(u),u.z_.shutdown(),u.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}qf.provider={build:()=>new qf};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Nr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="FirestoreClient";class CA{constructor(e,n,s,a,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=a,this.user=zt.UNAUTHENTICATED,this.clientId=Lv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,async h=>{ne(wi,"Received user=",h.uid),await this.authCredentialListener(h),this.user=h}),this.appCheckCredentials.start(s,h=>(ne(wi,"Received new app check token=",h),this.appCheckCredentialListener(h,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new di;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Cd(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function hf(r,e){r.asyncQueue.verifyOperationInProgress(),ne(wi,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener(async a=>{s.isEqual(a)||(await S_(e.localStore,a),s=a)}),e.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=e}async function Sy(r,e){r.asyncQueue.verifyOperationInProgress();const n=await RA(r);ne(wi,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener(s=>vy(e.remoteStore,s)),r.setAppCheckTokenChangeListener((s,a)=>vy(e.remoteStore,a)),r._onlineComponents=e}async function RA(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){ne(wi,"Using user provided OfflineComponentProvider");try{await hf(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(a){return a.name==="FirebaseError"?a.code===Q.FAILED_PRECONDITION||a.code===Q.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(n))throw n;yo("Error using user provided cache. Falling back to memory cache: "+n),await hf(r,new Yu)}}else ne(wi,"Using default OfflineComponentProvider"),await hf(r,new SA(void 0));return r._offlineComponents}async function z_(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(ne(wi,"Using user provided OnlineComponentProvider"),await Sy(r,r._uninitializedComponentsProvider._online)):(ne(wi,"Using default OnlineComponentProvider"),await Sy(r,new qf))),r._onlineComponents}function kA(r){return z_(r).then(e=>e.syncEngine)}async function PA(r){const e=await z_(r),n=e.eventManager;return n.onListen=hA.bind(null,e.syncEngine),n.onUnlisten=pA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=mA.bind(null,e.syncEngine),n}function xA(r,e,n={}){const s=new di;return r.asyncQueue.enqueueAndForget(async()=>function(u,h,m,y,_){const E=new AA({next:N=>{E.su(),h.enqueueAndForget(()=>rA(u,R));const F=N.docs.has(m);!F&&N.fromCache?_.reject(new ge(Q.UNAVAILABLE,"Failed to get document because the client is offline.")):F&&N.fromCache&&y&&y.source==="server"?_.reject(new ge(Q.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):_.resolve(N)},error:N=>_.reject(N)}),R=new oA(fd(m.path),E,{includeMetadataChanges:!0,Ta:!0});return nA(u,R)}(await PA(r),r.asyncQueue,e,n,s)),s.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B_(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(r,e,n){if(!n)throw new ge(Q.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function DA(r,e,n,s){if(e===!0&&s===!0)throw new ge(Q.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function Cy(r){if(!ye.isDocumentKey(r))throw new ge(Q.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function xd(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":_e()}function qa(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ge(Q.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xd(r);throw new ge(Q.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H_="firestore.googleapis.com",Ry=!0;class ky{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new ge(Q.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=H_,this.ssl=Ry}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Ry;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=T_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<iS)throw new ge(Q.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}DA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=B_((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(u){if(u.timeoutSeconds!==void 0){if(isNaN(u.timeoutSeconds))throw new ge(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (must not be NaN)`);if(u.timeoutSeconds<5)throw new ge(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (minimum allowed value is 5)`);if(u.timeoutSeconds>30)throw new ge(Q.INVALID_ARGUMENT,`invalid long polling timeout: ${u.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,a){return s.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Vd{constructor(e,n,s,a){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ky({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ge(Q.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ge(Q.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ky(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new OT;switch(s.type){case"firstParty":return new FT(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ge(Q.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=Ay.get(n);s&&(ne("ComponentProvider","Removing Datastore"),Ay.delete(n),s.terminate())}(this),Promise.resolve()}}function NA(r,e,n,s={}){var a;const u=(r=qa(r,Vd))._getSettings(),h=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),m=`${e}:${n}`;u.host!==H_&&u.host!==m&&yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y=Object.assign(Object.assign({},u),{host:m,ssl:!1,emulatorOptions:s});if(!Ma(y,h)&&(r._setSettings(y),s.mockUserToken)){let _,E;if(typeof s.mockUserToken=="string")_=s.mockUserToken,E=zt.MOCK_USER;else{_=f1(s.mockUserToken,(a=r._app)===null||a===void 0?void 0:a.options.projectId);const R=s.mockUserToken.sub||s.mockUserToken.user_id;if(!R)throw new ge(Q.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");E=new zt(R)}r._authCredentials=new LT(new Nv(_,E))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new Dd(this.firestore,e,this._query)}}class kn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wa(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new kn(this.firestore,e,this._key)}}class Wa extends Dd{constructor(e,n,s){super(e,n,fd(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new kn(this.firestore,null,new ye(e))}withConverter(e){return new Wa(this.firestore,e,this._path)}}function Wf(r,e,...n){if(r=go(r),arguments.length===1&&(e=Lv.newId()),VA("doc","path",e),r instanceof Vd){const s=it.fromString(e,...n);return Cy(s),new kn(r,null,new ye(s))}{if(!(r instanceof kn||r instanceof Wa))throw new ge(Q.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(it.fromString(e,...n));return Cy(s),new kn(r.firestore,r instanceof Wa?r.converter:null,new ye(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py="AsyncQueue";class xy{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new C_(this,"async_queue_retry"),this.Su=()=>{const s=cf();s&&ne(Py,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const n=cf();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=cf();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new di;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Ro(e))throw e;ne(Py,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const a=function(h){let m=h.message||"";return h.stack&&(m=h.stack.includes(h.message)?h.stack:h.message+`
`+h.stack),m}(s);throw Nr("INTERNAL UNHANDLED ERROR: ",a),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const a=Ad.createAndSchedule(this,e,n,s,u=>this.Fu(u));return this.fu.push(a),a}Du(){this.gu&&_e()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}class Nd extends Vd{constructor(e,n,s,a){super(e,n,s,a),this.type="firestore",this._queue=new xy,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xy(e),this._firestoreClient=void 0,await e}}}function OA(r,e){const n=typeof r=="object"?r:Sv(),s=typeof r=="string"?r:zu,a=Ka(n,"firestore").getImmediate({identifier:s});if(!a._initialized){const u=c1("firestore");u&&NA(a,...u)}return a}function q_(r){if(r._terminated)throw new ge(Q.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||LA(r),r._firestoreClient}function LA(r){var e,n,s;const a=r._freezeSettings(),u=function(m,y,_,E){return new ZT(m,y,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,B_(E.experimentalLongPollingOptions),E.useFetchStreams)}(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,a);r._componentsProvider||!((n=a.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=a.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(r._componentsProvider={_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider}),r._firestoreClient=new CA(r._authCredentials,r._appCheckCredentials,r._queue,u,r._componentsProvider&&function(m){const y=m==null?void 0:m._online.build();return{_offline:m==null?void 0:m._offline.build(y),_online:y}}(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Io(Mt.fromBase64String(e))}catch(n){throw new ge(Q.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Io(Mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ge(Q.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ge(Q.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ge(Q.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,a){if(s.length!==a.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==a[u])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=/^__.*__$/;class bA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new cs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ga(e,this.data,n,this.fieldTransforms)}}function W_(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw _e()}}class Fd{constructor(e,n,s,a,u,h){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=a,u===void 0&&this.Bu(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Fd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.ku({path:s,Qu:!1});return a.$u(e),a}Uu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),a=this.ku({path:s,Qu:!1});return a.Bu(),a}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Xu(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(W_(this.Lu)&&MA.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class FA{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||gc(e)}ju(e,n,s,a=!1){return new Fd({Lu:e,methodName:n,zu:s,path:Ot.emptyPath(),Qu:!1,Gu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function $A(r){const e=r._freezeSettings(),n=gc(r._databaseId);return new FA(r._databaseId,!!e.ignoreUndefinedProperties,n)}function jA(r,e,n,s,a,u={}){const h=r.ju(u.merge||u.mergeFields?2:0,e,n,a);Y_("Data must be an object, but it was:",h,s);const m=G_(s,h);let y,_;if(u.merge)y=new Wn(h.fieldMask),_=h.fieldTransforms;else if(u.mergeFields){const E=[];for(const R of u.mergeFields){const N=UA(e,R,n);if(!h.contains(N))throw new ge(Q.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);BA(E,N)||E.push(N)}y=new Wn(E),_=h.fieldTransforms.filter(R=>y.covers(R.field))}else y=null,_=h.fieldTransforms;return new bA(new Rn(m),y,_)}class $d extends Ld{constructor(e,n){super(e),this.Ju=n}_toFieldTransform(e){const n=new Ha(e.serializer,i_(e.serializer,this.Ju));return new AI(e.path,n)}isEqual(e){return e instanceof $d&&this.Ju===e.Ju}}function K_(r,e){if(Q_(r=go(r)))return Y_("Unsupported field value:",e,r),G_(r,e);if(r instanceof Ld)return function(s,a){if(!W_(a.Lu))throw a.Wu(`${s._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Wu(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(a);u&&a.fieldTransforms.push(u)}(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,a){const u=[];let h=0;for(const m of s){let y=K_(m,a.Ku(h));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),h++}return{arrayValue:{values:u}}}(r,e)}return function(s,a){if((s=go(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return i_(a.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=st.fromDate(s);return{timestampValue:Ku(a.serializer,u)}}if(s instanceof st){const u=new st(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:Ku(a.serializer,u)}}if(s instanceof Md)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Io)return{bytesValue:m_(a.serializer,s._byteString)};if(s instanceof kn){const u=a.databaseId,h=s.firestore._databaseId;if(!h.isEqual(u))throw a.Wu(`Document reference is for database ${h.projectId}/${h.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:gd(s.firestore._databaseId||a.databaseId,s._key.path)}}if(s instanceof bd)return function(h,m){return{mapValue:{fields:{[Bv]:{stringValue:Hv},[Bu]:{arrayValue:{values:h.toArray().map(_=>{if(typeof _!="number")throw m.Wu("VectorValues must only contain numeric values.");return dd(m.serializer,_)})}}}}}}(s,a);throw a.Wu(`Unsupported field value: ${xd(s)}`)}(r,e)}function G_(r,e){const n={};return bv(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ls(r,(s,a)=>{const u=K_(a,e.qu(s));u!=null&&(n[s]=u)}),{mapValue:{fields:n}}}function Q_(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof st||r instanceof Md||r instanceof Io||r instanceof kn||r instanceof Ld||r instanceof bd)}function Y_(r,e,n){if(!Q_(n)||!function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)}(n)){const s=xd(n);throw s==="an object"?e.Wu(r+" a custom object"):e.Wu(r+" "+s)}}function UA(r,e,n){if((e=go(e))instanceof Od)return e._internalPath;if(typeof e=="string")return X_(r,e);throw Xu("Field path arguments must be of type string or ",r,!1,void 0,n)}const zA=new RegExp("[~\\*/\\[\\]]");function X_(r,e,n){if(e.search(zA)>=0)throw Xu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Od(...e.split("."))._internalPath}catch{throw Xu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Xu(r,e,n,s,a){const u=s&&!s.isEmpty(),h=a!==void 0;let m=`Function ${e}() called with invalid data`;n&&(m+=" (via `toFirestore()`)"),m+=". ";let y="";return(u||h)&&(y+=" (found",u&&(y+=` in field ${s}`),h&&(y+=` in document ${a}`),y+=")"),new ge(Q.INVALID_ARGUMENT,m+r+y)}function BA(r,e){return r.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J_{constructor(e,n,s,a,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=a,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new kn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Z_("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HA extends J_{data(){return super.data()}}function Z_(r,e){return typeof e=="string"?X_(r,e):e instanceof Od?e._internalPath:e._delegate._internalPath}class qA{convertValue(e,n="none"){switch(vi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return lt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(yi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw _e()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return ls(e,(a,u)=>{s[a]=this.convertValue(u,n)}),s}convertVectorValue(e){var n,s,a;const u=(a=(s=(n=e.fields)===null||n===void 0?void 0:n[Bu].arrayValue)===null||s===void 0?void 0:s.values)===null||a===void 0?void 0:a.map(h=>lt(h.doubleValue));return new bd(u)}convertGeoPoint(e){return new Md(lt(e.latitude),lt(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=uc(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp($a(e));default:return null}}convertTimestamp(e){const n=gi(e);return new st(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=it.fromString(e);ze(E_(s));const a=new ja(s.get(1),s.get(3)),u=new ye(s.popFirst(5));return a.isEqual(n)||Nr(`Document ${u} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(r,e,n){let s;return s=r?n&&(n.merge||n.mergeFields)?r.toFirestore(e,n):r.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class e0 extends J_{constructor(e,n,s,a,u,h){super(e,n,s,a,h),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new GA(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(Z_("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class GA extends e0{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(r){r=qa(r,kn);const e=qa(r.firestore,Nd);return xA(q_(e),r._key).then(n=>JA(e,r,n))}class YA extends qA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Io(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new kn(this.firestore,null,n)}}function Vy(r,e,n){r=qa(r,kn);const s=qa(r.firestore,Nd),a=WA(r.converter,e,n);return XA(s,[jA($A(s),"setDoc",r._key,a,r.converter!==null,n).toMutation(r._key,xr.none())])}function XA(r,e){return function(s,a){const u=new di;return s.asyncQueue.enqueueAndForget(async()=>gA(await kA(s),a,u)),u.promise}(q_(r),e)}function JA(r,e,n){const s=n.docs.get(e._key),a=new YA(r);return new e0(r,a,e._key,s,new KA(n.hasPendingWrites,n.fromCache),e.converter)}function Dy(r){return new $d("increment",r)}(function(e,n=!0){(function(a){Ao=a})(IT),pi(new Vr("firestore",(s,{instanceIdentifier:a,options:u})=>{const h=s.getProvider("app").getImmediate(),m=new Nd(new MT(s.getProvider("auth-internal")),new $T(h,s.getProvider("app-check-internal")),function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new ge(Q.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ja(_.options.projectId,E)}(h,a),h);return u=Object.assign({useFetchStreams:n},u),m._setSettings(u),m},"PUBLIC").setMultipleInstances(!0)),ar(bg,Fg,e),ar(bg,Fg,"esm2017")})();const t0="@firebase/installations",jd="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n0=1e4,r0=`w:${jd}`,i0="FIS_v2",ZA="https://firebaseinstallations.googleapis.com/v1",eC=60*60*1e3,tC="installations",nC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},os=new oc(tC,nC,rC);function s0(r){return r instanceof Ti&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0({projectId:r}){return`${ZA}/projects/${r}/installations`}function a0(r){return{token:r.token,requestStatus:2,expiresIn:sC(r.expiresIn),creationTime:Date.now()}}async function l0(r,e){const s=(await e.json()).error;return os.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function u0({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function iC(r,{refreshToken:e}){const n=u0(r);return n.append("Authorization",oC(e)),n}async function c0(r){const e=await r();return e.status>=500&&e.status<600?r():e}function sC(r){return Number(r.replace("s","000"))}function oC(r){return`${i0} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aC({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=o0(r),a=u0(r),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&a.append("x-firebase-client",_)}const h={fid:n,authVersion:i0,appId:r.appId,sdkVersion:r0},m={method:"POST",headers:a,body:JSON.stringify(h)},y=await c0(()=>fetch(s,m));if(y.ok){const _=await y.json();return{fid:_.fid||n,registrationStatus:2,refreshToken:_.refreshToken,authToken:a0(_.authToken)}}else throw await l0("Create Installation",y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(r){return new Promise(e=>{setTimeout(e,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lC(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uC=/^[cdef][\w-]{21}$/,Kf="";function cC(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=hC(r);return uC.test(n)?n:Kf}catch{return Kf}}function hC(r){return lC(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0=new Map;function d0(r,e){const n=_c(r);p0(n,e),fC(n,e)}function p0(r,e){const n=f0.get(r);if(n)for(const s of n)s(e)}function fC(r,e){const n=dC();n&&n.postMessage({key:r,fid:e}),pC()}let es=null;function dC(){return!es&&"BroadcastChannel"in self&&(es=new BroadcastChannel("[Firebase] FID Change"),es.onmessage=r=>{p0(r.data.key,r.data.fid)}),es}function pC(){f0.size===0&&es&&(es.close(),es=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="firebase-installations-database",gC=1,as="firebase-installations-store";let ff=null;function Ud(){return ff||(ff=Tv(mC,gC,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(as)}}})),ff}async function Ju(r,e){const n=_c(r),a=(await Ud()).transaction(as,"readwrite"),u=a.objectStore(as),h=await u.get(n);return await u.put(e,n),await a.done,(!h||h.fid!==e.fid)&&d0(r,e.fid),e}async function m0(r){const e=_c(r),s=(await Ud()).transaction(as,"readwrite");await s.objectStore(as).delete(e),await s.done}async function wc(r,e){const n=_c(r),a=(await Ud()).transaction(as,"readwrite"),u=a.objectStore(as),h=await u.get(n),m=e(h);return m===void 0?await u.delete(n):await u.put(m,n),await a.done,m&&(!h||h.fid!==m.fid)&&d0(r,m.fid),m}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(r){let e;const n=await wc(r.appConfig,s=>{const a=yC(s),u=vC(r,a);return e=u.registrationPromise,u.installationEntry});return n.fid===Kf?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function yC(r){const e=r||{fid:cC(),registrationStatus:0};return g0(e)}function vC(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(os.create("app-offline"));return{installationEntry:e,registrationPromise:a}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=_C(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wC(r)}:{installationEntry:e}}async function _C(r,e){try{const n=await aC(r,e);return Ju(r.appConfig,n)}catch(n){throw s0(n)&&n.customData.serverCode===409?await m0(r.appConfig):await Ju(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wC(r){let e=await Ny(r.appConfig);for(;e.registrationStatus===1;)await h0(100),e=await Ny(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await zd(r);return s||n}return e}function Ny(r){return wc(r,e=>{if(!e)throw os.create("installation-not-found");return g0(e)})}function g0(r){return EC(r)?{fid:r.fid,registrationStatus:0}:r}function EC(r){return r.registrationStatus===1&&r.registrationTime+n0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TC({appConfig:r,heartbeatServiceProvider:e},n){const s=IC(r,n),a=iC(r,n),u=e.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&a.append("x-firebase-client",_)}const h={installation:{sdkVersion:r0,appId:r.appId}},m={method:"POST",headers:a,body:JSON.stringify(h)},y=await c0(()=>fetch(s,m));if(y.ok){const _=await y.json();return a0(_)}else throw await l0("Generate Auth Token",y)}function IC(r,{fid:e}){return`${o0(r)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bd(r,e=!1){let n;const s=await wc(r.appConfig,u=>{if(!y0(u))throw os.create("not-registered");const h=u.authToken;if(!e&&CC(h))return u;if(h.requestStatus===1)return n=SC(r,e),u;{if(!navigator.onLine)throw os.create("app-offline");const m=kC(u);return n=AC(r,m),m}});return n?await n:s.authToken}async function SC(r,e){let n=await Oy(r.appConfig);for(;n.authToken.requestStatus===1;)await h0(100),n=await Oy(r.appConfig);const s=n.authToken;return s.requestStatus===0?Bd(r,e):s}function Oy(r){return wc(r,e=>{if(!y0(e))throw os.create("not-registered");const n=e.authToken;return PC(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function AC(r,e){try{const n=await TC(r,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Ju(r.appConfig,s),n}catch(n){if(s0(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await m0(r.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ju(r.appConfig,s)}throw n}}function y0(r){return r!==void 0&&r.registrationStatus===2}function CC(r){return r.requestStatus===2&&!RC(r)}function RC(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+eC}function kC(r){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},r),{authToken:e})}function PC(r){return r.requestStatus===1&&r.requestTime+n0<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xC(r){const e=r,{installationEntry:n,registrationPromise:s}=await zd(e);return s?s.catch(console.error):Bd(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VC(r,e=!1){const n=r;return await DC(n),(await Bd(n,e)).token}async function DC(r){const{registrationPromise:e}=await zd(r);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NC(r){if(!r||!r.options)throw df("App Configuration");if(!r.name)throw df("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw df(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function df(r){return os.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0="installations",OC="installations-internal",LC=r=>{const e=r.getProvider("app").getImmediate(),n=NC(e),s=Ka(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},MC=r=>{const e=r.getProvider("app").getImmediate(),n=Ka(e,v0).getImmediate();return{getId:()=>xC(n),getToken:a=>VC(n,a)}};function bC(){pi(new Vr(v0,LC,"PUBLIC")),pi(new Vr(OC,MC,"PRIVATE"))}bC();ar(t0,jd);ar(t0,jd,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zu="analytics",FC="firebase_id",$C="origin",jC=60*1e3,UC="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Hd="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new id("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},gn=new oc("analytics","Analytics",zC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BC(r){if(!r.startsWith(Hd)){const e=gn.create("invalid-gtag-resource",{gtagURL:r});return an.warn(e.message),""}return r}function _0(r){return Promise.all(r.map(e=>e.catch(n=>n)))}function HC(r,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(r,e)),n}function qC(r,e){const n=HC("firebase-js-sdk-policy",{createScriptURL:BC}),s=document.createElement("script"),a=`${Hd}?l=${r}&id=${e}`;s.src=n?n==null?void 0:n.createScriptURL(a):a,s.async=!0,document.head.appendChild(s)}function WC(r){let e=[];return Array.isArray(window[r])?e=window[r]:window[r]=e,e}async function KC(r,e,n,s,a,u){const h=s[a];try{if(h)await e[h];else{const y=(await _0(n)).find(_=>_.measurementId===a);y&&await e[y.appId]}}catch(m){an.error(m)}r("config",a,u)}async function GC(r,e,n,s,a){try{let u=[];if(a&&a.send_to){let h=a.send_to;Array.isArray(h)||(h=[h]);const m=await _0(n);for(const y of h){const _=m.find(R=>R.measurementId===y),E=_&&e[_.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(e)),await Promise.all(u),r("event",s,a||{})}catch(u){an.error(u)}}function QC(r,e,n,s){async function a(u,...h){try{if(u==="event"){const[m,y]=h;await GC(r,e,n,m,y)}else if(u==="config"){const[m,y]=h;await KC(r,e,n,s,m,y)}else if(u==="consent"){const[m,y]=h;r("consent",m,y)}else if(u==="get"){const[m,y,_]=h;r("get",m,y,_)}else if(u==="set"){const[m]=h;r("set",m)}else r(u,...h)}catch(m){an.error(m)}}return a}function YC(r,e,n,s,a){let u=function(...h){window[s].push(arguments)};return window[a]&&typeof window[a]=="function"&&(u=window[a]),window[a]=QC(u,r,e,n),{gtagCore:u,wrappedGtag:window[a]}}function XC(r){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Hd)&&n.src.includes(r))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=30,ZC=1e3;class eR{constructor(e={},n=ZC){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const w0=new eR;function tR(r){return new Headers({Accept:"application/json","x-goog-api-key":r})}async function nR(r){var e;const{appId:n,apiKey:s}=r,a={method:"GET",headers:tR(s)},u=UC.replace("{app-id}",n),h=await fetch(u,a);if(h.status!==200&&h.status!==304){let m="";try{const y=await h.json();!((e=y.error)===null||e===void 0)&&e.message&&(m=y.error.message)}catch{}throw gn.create("config-fetch-failed",{httpStatus:h.status,responseMessage:m})}return h.json()}async function rR(r,e=w0,n){const{appId:s,apiKey:a,measurementId:u}=r.options;if(!s)throw gn.create("no-app-id");if(!a){if(u)return{measurementId:u,appId:s};throw gn.create("no-api-key")}const h=e.getThrottleMetadata(s)||{backoffCount:0,throttleEndTimeMillis:Date.now()},m=new oR;return setTimeout(async()=>{m.abort()},jC),E0({appId:s,apiKey:a,measurementId:u},h,m,e)}async function E0(r,{throttleEndTimeMillis:e,backoffCount:n},s,a=w0){var u;const{appId:h,measurementId:m}=r;try{await iR(s,e)}catch(y){if(m)return an.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${y==null?void 0:y.message}]`),{appId:h,measurementId:m};throw y}try{const y=await nR(r);return a.deleteThrottleMetadata(h),y}catch(y){const _=y;if(!sR(_)){if(a.deleteThrottleMetadata(h),m)return an.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${m} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:h,measurementId:m};throw y}const E=Number((u=_==null?void 0:_.customData)===null||u===void 0?void 0:u.httpStatus)===503?Rg(n,a.intervalMillis,JC):Rg(n,a.intervalMillis),R={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return a.setThrottleMetadata(h,R),an.debug(`Calling attemptFetch again in ${E} millis`),E0(r,R,s,a)}}function iR(r,e){return new Promise((n,s)=>{const a=Math.max(e-Date.now(),0),u=setTimeout(n,a);r.addEventListener(()=>{clearTimeout(u),s(gn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function sR(r){if(!(r instanceof Ti)||!r.customData)return!1;const e=Number(r.customData.httpStatus);return e===429||e===500||e===503||e===504}class oR{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function aR(r,e,n,s,a){if(a&&a.global){r("event",n,s);return}else{const u=await e,h=Object.assign(Object.assign({},s),{send_to:u});r("event",n,h)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lR(){if(vv())try{await _v()}catch(r){return an.warn(gn.create("indexeddb-unavailable",{errorInfo:r==null?void 0:r.toString()}).message),!1}else return an.warn(gn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function uR(r,e,n,s,a,u,h){var m;const y=rR(r);y.then(F=>{n[F.measurementId]=F.appId,r.options.measurementId&&F.measurementId!==r.options.measurementId&&an.warn(`The measurement ID in the local Firebase config (${r.options.measurementId}) does not match the measurement ID fetched from the server (${F.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(F=>an.error(F)),e.push(y);const _=lR().then(F=>{if(F)return s.getId()}),[E,R]=await Promise.all([y,_]);XC(u)||qC(u,E.measurementId),a("js",new Date);const N=(m=h==null?void 0:h.config)!==null&&m!==void 0?m:{};return N[$C]="firebase",N.update=!0,R!=null&&(N[FC]=R),a("config",E.measurementId,N),E.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.app=e}_delete(){return delete Na[this.app.options.appId],Promise.resolve()}}let Na={},Ly=[];const My={};let pf="dataLayer",hR="gtag",by,T0,Fy=!1;function fR(){const r=[];if(m1()&&r.push("This is a browser extension environment."),y1()||r.push("Cookies are not available."),r.length>0){const e=r.map((s,a)=>`(${a+1}) ${s}`).join(" "),n=gn.create("invalid-analytics-context",{errorInfo:e});an.warn(n.message)}}function dR(r,e,n){fR();const s=r.options.appId;if(!s)throw gn.create("no-app-id");if(!r.options.apiKey)if(r.options.measurementId)an.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${r.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw gn.create("no-api-key");if(Na[s]!=null)throw gn.create("already-exists",{id:s});if(!Fy){WC(pf);const{wrappedGtag:u,gtagCore:h}=YC(Na,Ly,My,pf,hR);T0=u,by=h,Fy=!0}return Na[s]=uR(r,Ly,My,e,by,pf,n),new cR(r)}function pR(r=Sv()){r=go(r);const e=Ka(r,Zu);return e.isInitialized()?e.getImmediate():mR(r)}function mR(r,e={}){const n=Ka(r,Zu);if(n.isInitialized()){const a=n.getImmediate();if(Ma(e,n.getOptions()))return a;throw gn.create("already-initialized")}return n.initialize({options:e})}function I0(r,e,n,s){r=go(r),aR(T0,Na[r.app.options.appId],e,n,s).catch(a=>an.error(a))}const $y="@firebase/analytics",jy="0.10.12";function gR(){pi(new Vr(Zu,(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),a=e.getProvider("installations-internal").getImmediate();return dR(s,a,n)},"PUBLIC")),pi(new Vr("analytics-internal",r,"PRIVATE")),ar($y,jy),ar($y,jy,"esm2017");function r(e){try{const n=e.getProvider(Zu).getImmediate();return{logEvent:(s,a,u)=>I0(n,s,a,u)}}catch(n){throw gn.create("interop-component-reg-failed",{reason:n})}}}gR();var yR="firebase",vR="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ar(yR,vR,"app");const _R={apiKey:"AIzaSyCXTsfXgGWfHXL3hyGVkq7WuCgRqAsy4nw",authDomain:"whispyv1-7fb34.firebaseapp.com",projectId:"whispyv1-7fb34",storageBucket:"whispyv1-7fb34.firebasestorage.app",messagingSenderId:"964963622601",appId:"1:964963622601:web:f0b66d77e174b1b12e7718",measurementId:"G-ENLRBDTXLD"},S0=Iv(_R),wR=pR(S0),Gf=OA(S0),ER=async r=>{try{const e="lastVisitTimestamp",n=Date.now(),s=localStorage.getItem(e);if(s&&n-parseInt(s)<3e5)return;const a=Wf(Gf,"stats","visitors"),u={count:Dy(1),lastVisit:st.now()};if(r){const h=Wf(Gf,"visitors",r);await Vy(h,{firstVisit:st.now(),lastVisit:st.now()},{merge:!0}),u.uniqueVisitors=Dy(1)}await Vy(a,u,{merge:!0}),I0(wR,"page_view"),localStorage.setItem(e,n.toString())}catch(e){console.error("방문자 추적 오류:",e)}},TR=async()=>{try{const r=Wf(Gf,"stats","visitors"),e=await QA(r);return e.exists()?e.data():null}catch(r){return console.error("방문자 통계 가져오기 오류:",r),null}},IR=()=>{const r=localStorage.getItem("visitorId");if(r)return r;const e=`visitor_${Date.now()}_${Math.random().toString(36).substr(2,9)}`;return localStorage.setItem("visitorId",e),e},SR={colors:{primary:"#4e73df",background:{start:"#1a1a4f",end:"#2a2a7f"},text:{primary:"#ffffff",secondary:"rgba(255, 255, 255, 0.8)"}},shadows:{glow:"0 0 30px rgba(78, 115, 223, 0.6)"}},Ec=Lr`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`,qd=Lr`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`,AR=Lr`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`,CR=Lr`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,RR=Lr`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`,kR=Lr`
  0% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
`,PR=Lr`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,xR=Lr`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,VR=Lr`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  50% {
    transform: scale(1.1);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`,DR=Fe.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(to bottom, #1a1a4f, #2a2a7f);
  color: white;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui,
    Roboto, sans-serif;
  position: relative;
  overflow: hidden;
`,NR=Fe.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`,OR=Fe.div`
  position: absolute;
  background-color: white;
  border-radius: 50%;
  animation: ${Lt`
    ${kR} 3s infinite ease-in-out
  `};
`,LR=Fe.header`
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
  animation: ${r=>r.$isInitialLoad?"none":Lt`
          ${PR} 0.8s ease-out
        `};
`,MR=Fe.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 40px;
    height: 2px;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0)
    );
  }
`,bR=Fe.p`
  font-size: 14px;
  margin: 8px 0 0;
  opacity: 0.8;
`,FR=Fe.div`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.5);
  animation: ${Lt`
    ${CR} 20s linear infinite
  `};

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 10px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.7);
    transform-origin: left;
    transform: rotate(45deg);
  }
`,$R=Fe.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  text-align: center;
  position: relative;
  z-index: 1;
`,jR=Fe.div`
  position: absolute;
  width: 150%;
  height: 150%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(78, 115, 223, 0.6) 0%,
    rgba(41, 66, 146, 0) 70%
  );
  animation: ${r=>r.$isPlaying?Lt`
          ${qd} 4s infinite ease-in-out
        `:"none"};
  z-index: -1;
`,UR=Fe.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(78, 115, 223, 0.8) 0%,
    rgba(41, 66, 146, 0.4) 70%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 40px 0;
  box-shadow: 0 0 30px rgba(78, 115, 223, 0.6);
  position: relative;
  animation: ${Lt`
    ${AR} 6s infinite ease-in-out
  `};
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px rgba(78, 115, 223, 0.8);
  }
`,zR=Fe(pv)`
  color: white;
  width: 60px;
  height: 60px;
  filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
`,BR=Fe.div`
  animation: ${r=>r.$isInitialLoad?"none":Lt`
          ${Ec} 0.8s ease-out
        `};
`,HR=Fe.h2`
  font-size: 24px;
  font-weight: 600;
  margin: 10px 0 5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`,qR=Fe.p`
  font-size: 14px;
  opacity: 0.8;
  margin: 0 0 30px;
`,WR=Fe.div`
  background-color: rgba(78, 115, 223, 0.3);
  border-radius: 20px;
  padding: 8px 20px;
  font-size: 16px;
  margin-bottom: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  animation: ${r=>r.$isInitialLoad?"none":Lt`
          ${VR} 0.6s ease-out
        `};
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    animation: ${Lt`
      ${RR} 3s infinite
    `};
  }
`,KR=Fe.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  animation: ${r=>r.$isInitialLoad?"none":Lt`
          ${Ec} 0.8s ease-out 0.3s
        `};
  animation-fill-mode: backwards;
`,Qf=Fe.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(78, 115, 223, 0.3);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(78, 115, 223, 0.5);
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`,GR=Fe(Qf)`
  width: 60px;
  height: 60px;
  background-color: #4e73df;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: ${r=>r.$isPlaying?"scale(1.1)":"scale(1)"};

  &:hover {
    background-color: #3a5bbf;
    transform: ${r=>r.$isPlaying?"scale(1.15)":"scale(1.05)"};
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: rgba(78, 115, 223, 0.3);
    z-index: -1;
    opacity: ${r=>r.$isPlaying?1:0};
    transform: ${r=>r.$isPlaying?"scale(1.2)":"scale(1)"};
    transition: transform 0.3s ease, opacity 0.3s ease;
    animation: ${r=>r.$isPlaying?Lt`
            ${qd} 2s infinite
          `:"none"};
  }
`,QR=Fe.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  gap: 10px;
  margin-bottom: 40px;
  position: relative;
  touch-action: none;
  animation: ${r=>r.$isInitialLoad?"none":Lt`
          ${Ec} 0.8s ease-out 0.5s
        `};
  animation-fill-mode: backwards;
`,YR=Fe.div`
  flex: 1;
  height: 6px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  position: relative;
  cursor: pointer;
`,XR=Fe.div`
  position: absolute;
  height: 100%;
  width: ${r=>r.$value}%;
  background: linear-gradient(to right, #4e73df, #7e93ff);
  border-radius: 3px;
  transition: width 0.1s ease;
`,JR=Fe.div`
  position: absolute;
  left: ${r=>r.$value}%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.1s ease;

  &:active {
    transform: translate(-50%, -50%) scale(1.2);
  }
`,ZR=Fe.input`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  -webkit-appearance: none;
  z-index: 10;
`,ek=Fe.span`
  font-size: 12px;
  min-width: 40px;
  text-align: right;
`,tk=Fe.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  animation: ${r=>r.$isInitialLoad?"none":Lt`
          ${Ec} 0.8s ease-out 0.7s
        `};
  animation-fill-mode: backwards;
`,Eu=Fe.button`
  background-color: ${r=>r.$isActive?"rgba(78, 115, 223, 0.4)":"rgba(78, 115, 223, 0.2)"};
  border: none;
  border-radius: 10px;
  padding: 20px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: rgba(78, 115, 223, 0.3);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(-1px);
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 200%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: all 0.3s ease;
    transform: skewX(-15deg);
    opacity: 0;
  }

  &:hover:after {
    left: 100%;
    opacity: 1;
  }
`,Tu=Fe.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${r=>r.$isActive?"rgba(78, 115, 223, 0.7)":"rgba(78, 115, 223, 0.5)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  transition: all 0.3s ease;
  transform: ${r=>r.$isActive?"scale(1.1)":"scale(1)"};
  box-shadow: ${r=>r.$isActive?"0 0 20px rgba(78, 115, 223, 0.5)":"none"};
`,Iu=Fe.span`
  font-size: 14px;
  transition: all 0.3s ease;
`,nk=Fe.nav`
  display: flex;
  justify-content: space-around;
  padding: 15px 0;
  background-color: rgba(26, 26, 79, 0.8);
  backdrop-filter: blur(10px);
  position: relative;
  z-index: 2;
  animation: ${Lt`
    ${xR} 0.8s ease-out
  `};
`,mf=Fe.button`
  background: none;
  border: none;
  color: ${r=>r.$active?"white":"rgba(255, 255, 255, 0.6)"};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    color: white;
  }
`,gf=Fe.span`
  font-size: 12px;
`,rk=Fe.div`
  position: absolute;
  bottom: -15px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: white;
  animation: ${Lt`
    ${qd} 2s infinite
  `};
`;function ik(){const[r,e]=Bt.useState(!1),[n,s]=Bt.useState(70),[a,u]=Bt.useState(!0),[h,m]=Bt.useState(null),[y,_]=Bt.useState(null),E=Bt.useRef(null);Bt.useEffect(()=>{{const re=IR();ER(re)}(async()=>{const re=await TR();re&&_(re.count)})();const z=setTimeout(()=>{u(!1)},1500);return()=>clearTimeout(z)},[]);const R=()=>{E.current&&(r?E.current.pause():E.current.play(),e(!r))},N=B=>{const z=Number.parseInt(B.target.value);s(z),E.current&&(E.current.volume=z/100)},F=B=>{const re=B.currentTarget.getBoundingClientRect(),se=(B.clientX-re.left)/re.width*100,te=Math.min(100,Math.max(0,Math.round(se)));s(te),E.current&&(E.current.volume=te/100)},W=Array.from({length:50},(B,z)=>({id:z,top:`${Math.random()*100}%`,left:`${Math.random()*100}%`,size:Math.random()*3+1,delay:Math.random()*5}));return oe.jsx(LE,{theme:SR,children:oe.jsxs(DR,{children:[oe.jsx(NR,{children:W.map(B=>oe.jsx(OR,{style:{top:B.top,left:B.left,width:`${B.size}px`,height:`${B.size}px`,animationDelay:`${B.delay}s`}},B.id))}),oe.jsxs(LR,{$isInitialLoad:a,children:[oe.jsx(MR,{children:"Whispy"}),oe.jsx(bR,{children:"편안한 밤을 위한 수면 도우미"}),oe.jsx(FR,{})]}),oe.jsxs($R,{children:[oe.jsxs(UR,{$isPlaying:r,children:[oe.jsx(zR,{}),oe.jsx(jR,{$isPlaying:r})]}),oe.jsxs(BR,{$isInitialLoad:a,children:[oe.jsx(HR,{children:"깊은 수면"}),oe.jsx(qR,{children:"포근한 밤을 위한 수면 사운드"})]}),oe.jsx(WR,{$isInitialLoad:a,children:"8시간"}),oe.jsxs(KR,{$isInitialLoad:a,children:[oe.jsx(Qf,{children:oe.jsx(Ig,{size:20})}),oe.jsx(GR,{onClick:R,$isPlaying:r,children:r?oe.jsx(Ig,{size:24}):oe.jsx(GE,{size:24})}),oe.jsx(Qf,{children:oe.jsx(Tg,{size:20})})]}),oe.jsxs(QR,{$isInitialLoad:a,children:[oe.jsx(ZE,{size:20}),oe.jsxs(YR,{onClick:F,children:[oe.jsx(XR,{$value:n}),oe.jsx(JR,{$value:n}),oe.jsx(ZR,{type:"range",min:"0",max:"100",value:n,onChange:N})]}),oe.jsxs(ek,{children:[n,"%"]})]}),oe.jsxs(tk,{$isInitialLoad:a,children:[oe.jsxs(Eu,{onMouseEnter:()=>m(0),onMouseLeave:()=>m(null),$isActive:h===0,children:[oe.jsx(Tu,{$isActive:h===0,children:oe.jsx(Sg,{size:24})}),oe.jsx(Iu,{children:"명상"})]}),oe.jsxs(Eu,{onMouseEnter:()=>m(1),onMouseLeave:()=>m(null),$isActive:h===1,children:[oe.jsx(Tu,{$isActive:h===1,children:oe.jsx(Tg,{size:24})}),oe.jsx(Iu,{children:"수면 분석"})]}),oe.jsxs(Eu,{onMouseEnter:()=>m(2),onMouseLeave:()=>m(null),$isActive:h===2,children:[oe.jsx(Tu,{$isActive:h===2,children:oe.jsx(Eg,{size:24})}),oe.jsx(Iu,{children:"자연 소리"})]}),oe.jsxs(Eu,{onMouseEnter:()=>m(3),onMouseLeave:()=>m(null),$isActive:h===3,children:[oe.jsx(Tu,{$isActive:h===3,children:oe.jsx(YE,{size:24})}),oe.jsx(Iu,{children:"백색 소음"})]})]})]}),oe.jsxs(nk,{children:[oe.jsxs(mf,{$active:!0,children:[oe.jsx(pv,{size:20}),oe.jsx(gf,{children:"수면"}),oe.jsx(rk,{})]}),oe.jsxs(mf,{children:[oe.jsx(Eg,{size:20}),oe.jsx(gf,{children:"통계"})]}),oe.jsxs(mf,{children:[oe.jsx(Sg,{size:20}),oe.jsx(gf,{children:y!==null?`방문 ${y.toLocaleString()}회`:"프로필"})]})]}),oe.jsx("audio",{ref:E,loop:!0,children:oe.jsx("source",{src:"/sounds/sleep.mp3",type:"audio/mp3"})})]})})}const sk=FE`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #1a1a4f;
    color: white;
  }

  button {
    font-family: inherit;
  }
`;bw.createRoot(document.getElementById("root")).render(oe.jsxs(oe.Fragment,{children:[oe.jsx(sk,{}),oe.jsx(ik,{})]}));
