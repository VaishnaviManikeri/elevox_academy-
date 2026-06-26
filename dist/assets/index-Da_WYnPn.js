function t0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(e,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function n0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Wf={exports:{}},xo={},$f={exports:{}},M={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),r0=Symbol.for("react.portal"),i0=Symbol.for("react.fragment"),s0=Symbol.for("react.strict_mode"),o0=Symbol.for("react.profiler"),a0=Symbol.for("react.provider"),l0=Symbol.for("react.context"),c0=Symbol.for("react.forward_ref"),u0=Symbol.for("react.suspense"),d0=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),Iu=Symbol.iterator;function f0(e){return e===null||typeof e!="object"?null:(e=Iu&&e[Iu]||e["@@iterator"],typeof e=="function"?e:null)}var Uf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hf=Object.assign,Gf={};function ur(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||Uf}ur.prototype.isReactComponent={};ur.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ur.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kf(){}Kf.prototype=ur.prototype;function lc(e,t,n){this.props=e,this.context=t,this.refs=Gf,this.updater=n||Uf}var cc=lc.prototype=new Kf;cc.constructor=lc;Hf(cc,ur.prototype);cc.isPureReactComponent=!0;var Nu=Array.isArray,Yf=Object.prototype.hasOwnProperty,uc={current:null},Xf={key:!0,ref:!0,__self:!0,__source:!0};function Qf(e,t,n){var r,i={},s=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(s=""+t.key),t)Yf.call(t,r)&&!Xf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fi,type:e,key:s,ref:a,props:i,_owner:uc.current}}function h0(e,t){return{$$typeof:fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function dc(e){return typeof e=="object"&&e!==null&&e.$$typeof===fi}function m0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ru=/\/+/g;function Oo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?m0(""+e.key):t.toString(36)}function hs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case fi:case r0:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+Oo(a,0):r,Nu(i)?(n="",e!=null&&(n=e.replace(Ru,"$&/")+"/"),hs(i,t,n,"",function(u){return u})):i!=null&&(dc(i)&&(i=h0(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Ru,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Nu(e))for(var l=0;l<e.length;l++){s=e[l];var c=r+Oo(s,l);a+=hs(s,t,n,c,i)}else if(c=f0(e),typeof c=="function")for(e=c.call(e),l=0;!(s=e.next()).done;)s=s.value,c=r+Oo(s,l++),a+=hs(s,t,n,c,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Ci(e,t,n){if(e==null)return e;var r=[],i=0;return hs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function g0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ke={current:null},ms={transition:null},x0={ReactCurrentDispatcher:ke,ReactCurrentBatchConfig:ms,ReactCurrentOwner:uc};function qf(){throw Error("act(...) is not supported in production builds of React.")}M.Children={map:Ci,forEach:function(e,t,n){Ci(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ci(e,function(){t++}),t},toArray:function(e){return Ci(e,function(t){return t})||[]},only:function(e){if(!dc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};M.Component=ur;M.Fragment=i0;M.Profiler=o0;M.PureComponent=lc;M.StrictMode=s0;M.Suspense=u0;M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=x0;M.act=qf;M.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hf({},e.props),i=e.key,s=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,a=uc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Yf.call(t,c)&&!Xf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fi,type:e.type,key:i,ref:s,props:r,_owner:a}};M.createContext=function(e){return e={$$typeof:l0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:a0,_context:e},e.Consumer=e};M.createElement=Qf;M.createFactory=function(e){var t=Qf.bind(null,e);return t.type=e,t};M.createRef=function(){return{current:null}};M.forwardRef=function(e){return{$$typeof:c0,render:e}};M.isValidElement=dc;M.lazy=function(e){return{$$typeof:p0,_payload:{_status:-1,_result:e},_init:g0}};M.memo=function(e,t){return{$$typeof:d0,type:e,compare:t===void 0?null:t}};M.startTransition=function(e){var t=ms.transition;ms.transition={};try{e()}finally{ms.transition=t}};M.unstable_act=qf;M.useCallback=function(e,t){return ke.current.useCallback(e,t)};M.useContext=function(e){return ke.current.useContext(e)};M.useDebugValue=function(){};M.useDeferredValue=function(e){return ke.current.useDeferredValue(e)};M.useEffect=function(e,t){return ke.current.useEffect(e,t)};M.useId=function(){return ke.current.useId()};M.useImperativeHandle=function(e,t,n){return ke.current.useImperativeHandle(e,t,n)};M.useInsertionEffect=function(e,t){return ke.current.useInsertionEffect(e,t)};M.useLayoutEffect=function(e,t){return ke.current.useLayoutEffect(e,t)};M.useMemo=function(e,t){return ke.current.useMemo(e,t)};M.useReducer=function(e,t,n){return ke.current.useReducer(e,t,n)};M.useRef=function(e){return ke.current.useRef(e)};M.useState=function(e){return ke.current.useState(e)};M.useSyncExternalStore=function(e,t,n){return ke.current.useSyncExternalStore(e,t,n)};M.useTransition=function(){return ke.current.useTransition()};M.version="18.3.1";$f.exports=M;var b=$f.exports;const _n=n0(b),y0=t0({__proto__:null,default:_n},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var v0=b,w0=Symbol.for("react.element"),S0=Symbol.for("react.fragment"),b0=Object.prototype.hasOwnProperty,k0=v0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j0={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)b0.call(t,r)&&!j0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:w0,type:e,key:s,ref:a,props:i,_owner:k0.current}}xo.Fragment=S0;xo.jsx=Zf;xo.jsxs=Zf;Wf.exports=xo;var o=Wf.exports,Va={},Jf={exports:{}},Be={},eh={exports:{}},th={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,N){var R=T.length;T.push(N);e:for(;0<R;){var V=R-1>>>1,te=T[V];if(0<i(te,N))T[V]=N,T[R]=te,R=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var N=T[0],R=T.pop();if(R!==N){T[0]=R;e:for(var V=0,te=T.length,ji=te>>>1;V<ji;){var sn=2*(V+1)-1,Vo=T[sn],on=sn+1,_i=T[on];if(0>i(Vo,R))on<te&&0>i(_i,Vo)?(T[V]=_i,T[on]=R,V=on):(T[V]=Vo,T[sn]=R,V=sn);else if(on<te&&0>i(_i,R))T[V]=_i,T[on]=R,V=on;else break e}}return N}function i(T,N){var R=T.sortIndex-N.sortIndex;return R!==0?R:T.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],d=1,p=null,f=3,x=!1,y=!1,v=!1,S=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=T)r(u),N.sortIndex=N.expirationTime,t(c,N);else break;N=n(u)}}function w(T){if(v=!1,g(T),!y)if(n(c)!==null)y=!0,_e(k);else{var N=n(u);N!==null&&ki(w,N.startTime-T)}}function k(T,N){y=!1,v&&(v=!1,m(j),j=-1),x=!0;var R=f;try{for(g(N),p=n(c);p!==null&&(!(p.expirationTime>N)||T&&!L());){var V=p.callback;if(typeof V=="function"){p.callback=null,f=p.priorityLevel;var te=V(p.expirationTime<=N);N=e.unstable_now(),typeof te=="function"?p.callback=te:p===n(c)&&r(c),g(N)}else r(c);p=n(c)}if(p!==null)var ji=!0;else{var sn=n(u);sn!==null&&ki(w,sn.startTime-N),ji=!1}return ji}finally{p=null,f=R,x=!1}}var A=!1,C=null,j=-1,D=5,P=-1;function L(){return!(e.unstable_now()-P<D)}function ee(){if(C!==null){var T=e.unstable_now();P=T;var N=!0;try{N=C(!0,T)}finally{N?Ie():(A=!1,C=null)}}else A=!1}var Ie;if(typeof h=="function")Ie=function(){h(ee)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Qe=Ne.port2;Ne.port1.onmessage=ee,Ie=function(){Qe.postMessage(null)}}else Ie=function(){S(ee,0)};function _e(T){C=T,A||(A=!0,Ie())}function ki(T,N){j=S(function(){T(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,_e(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var N=3;break;default:N=f}var R=f;f=N;try{return T()}finally{f=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,N){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var R=f;f=T;try{return N()}finally{f=R}},e.unstable_scheduleCallback=function(T,N,R){var V=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?V+R:V):R=V,T){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=R+te,T={id:d++,callback:N,priorityLevel:T,startTime:R,expirationTime:te,sortIndex:-1},R>V?(T.sortIndex=R,t(u,T),n(c)===null&&T===n(u)&&(v?(m(j),j=-1):v=!0,ki(w,R-V))):(T.sortIndex=te,t(c,T),y||x||(y=!0,_e(k))),T},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(T){var N=f;return function(){var R=f;f=N;try{return T.apply(this,arguments)}finally{f=R}}}})(th);eh.exports=th;var _0=eh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=b,Le=_0;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nh=new Set,Ur={};function Cn(e,t){tr(e,t),tr(e+"Capture",t)}function tr(e,t){for(Ur[e]=t,e=0;e<t.length;e++)nh.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=Object.prototype.hasOwnProperty,A0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Du={},Mu={};function T0(e){return Oa.call(Mu,e)?!0:Oa.call(Du,e)?!1:A0.test(e)?Mu[e]=!0:(Du[e]=!0,!1)}function P0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function E0(e,t,n,r){if(t===null||typeof t>"u"||P0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,s,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var he={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){he[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];he[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){he[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){he[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){he[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){he[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){he[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){he[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){he[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var pc=/[\-:]([a-z])/g;function fc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pc,fc);he[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pc,fc);he[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pc,fc);he[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});he.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){he[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function hc(e,t,n,r){var i=he.hasOwnProperty(t)?he[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(E0(t,n,i,r)&&(n=null),r||i===null?T0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),Dn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),mc=Symbol.for("react.strict_mode"),Wa=Symbol.for("react.profiler"),rh=Symbol.for("react.provider"),ih=Symbol.for("react.context"),gc=Symbol.for("react.forward_ref"),$a=Symbol.for("react.suspense"),Ua=Symbol.for("react.suspense_list"),xc=Symbol.for("react.memo"),Nt=Symbol.for("react.lazy"),sh=Symbol.for("react.offscreen"),zu=Symbol.iterator;function xr(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Wo;function Cr(e){if(Wo===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Wo=t&&t[1]||""}return`
`+Wo+e}var $o=!1;function Uo(e,t){if(!e||$o)return"";$o=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var c=`
`+i[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{$o=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Cr(e):""}function I0(e){switch(e.tag){case 5:return Cr(e.type);case 16:return Cr("Lazy");case 13:return Cr("Suspense");case 19:return Cr("SuspenseList");case 0:case 2:case 15:return e=Uo(e.type,!1),e;case 11:return e=Uo(e.type.render,!1),e;case 1:return e=Uo(e.type,!0),e;default:return""}}function Ha(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Dn:return"Portal";case Wa:return"Profiler";case mc:return"StrictMode";case $a:return"Suspense";case Ua:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ih:return(e.displayName||"Context")+".Consumer";case rh:return(e._context.displayName||"Context")+".Provider";case gc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xc:return t=e.displayName||null,t!==null?t:Ha(e.type)||"Memo";case Nt:t=e._payload,e=e._init;try{return Ha(e(t))}catch{}}return null}function N0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ha(t);case 8:return t===mc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function oh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R0(e){var t=oh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){e._valueTracker||(e._valueTracker=R0(e))}function ah(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=oh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Rs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ga(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function lh(e,t){t=t.checked,t!=null&&hc(e,"checked",t,!1)}function Ka(e,t){lh(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ya(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ya(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Bu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ya(e,t,n){(t!=="number"||Rs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ar=Array.isArray;function Xn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Xa(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Ar(n)){if(1<n.length)throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function ch(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function uh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Qa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?uh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Pi,dh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Pi=Pi||document.createElement("div"),Pi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Pi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},D0=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){D0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function ph(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function fh(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ph(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var M0=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qa(e,t){if(t){if(M0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function Za(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ja=null;function yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var el=null,Qn=null,qn=null;function Ou(e){if(e=gi(e)){if(typeof el!="function")throw Error(_(280));var t=e.stateNode;t&&(t=bo(t),el(e.stateNode,e.type,t))}}function hh(e){Qn?qn?qn.push(e):qn=[e]:Qn=e}function mh(){if(Qn){var e=Qn,t=qn;if(qn=Qn=null,Ou(e),t)for(e=0;e<t.length;e++)Ou(t[e])}}function gh(e,t){return e(t)}function xh(){}var Ho=!1;function yh(e,t,n){if(Ho)return e(t,n);Ho=!0;try{return gh(e,t,n)}finally{Ho=!1,(Qn!==null||qn!==null)&&(xh(),mh())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var tl=!1;if(jt)try{var yr={};Object.defineProperty(yr,"passive",{get:function(){tl=!0}}),window.addEventListener("test",yr,yr),window.removeEventListener("test",yr,yr)}catch{tl=!1}function z0(e,t,n,r,i,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Nr=!1,Ds=null,Ms=!1,nl=null,L0={onError:function(e){Nr=!0,Ds=e}};function B0(e,t,n,r,i,s,a,l,c){Nr=!1,Ds=null,z0.apply(L0,arguments)}function F0(e,t,n,r,i,s,a,l,c){if(B0.apply(this,arguments),Nr){if(Nr){var u=Ds;Nr=!1,Ds=null}else throw Error(_(198));Ms||(Ms=!0,nl=u)}}function An(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vh(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Wu(e){if(An(e)!==e)throw Error(_(188))}function V0(e){var t=e.alternate;if(!t){if(t=An(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Wu(i),e;if(s===r)return Wu(i),t;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function wh(e){return e=V0(e),e!==null?Sh(e):null}function Sh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sh(e);if(t!==null)return t;e=e.sibling}return null}var bh=Le.unstable_scheduleCallback,$u=Le.unstable_cancelCallback,O0=Le.unstable_shouldYield,W0=Le.unstable_requestPaint,J=Le.unstable_now,$0=Le.unstable_getCurrentPriorityLevel,vc=Le.unstable_ImmediatePriority,kh=Le.unstable_UserBlockingPriority,zs=Le.unstable_NormalPriority,U0=Le.unstable_LowPriority,jh=Le.unstable_IdlePriority,yo=null,ft=null;function H0(e){if(ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Y0,G0=Math.log,K0=Math.LN2;function Y0(e){return e>>>=0,e===0?32:31-(G0(e)/K0|0)|0}var Ei=64,Ii=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ls(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=Tr(l):(s&=a,s!==0&&(r=Tr(s)))}else a=n&~i,a!==0?r=Tr(a):s!==0&&(r=Tr(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),i=1<<n,r|=e[n],t&=~i;return r}function X0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-it(s),l=1<<a,c=i[a];c===-1?(!(l&n)||l&r)&&(i[a]=X0(l,t)):c<=t&&(e.expiredLanes|=l),s&=~l}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _h(){var e=Ei;return Ei<<=1,!(Ei&4194240)&&(Ei=64),e}function Go(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function q0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-it(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function wc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var F=0;function Ch(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Ah,Sc,Th,Ph,Eh,il=!1,Ni=[],Vt=null,Ot=null,Wt=null,Kr=new Map,Yr=new Map,Dt=[],Z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":Vt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Wt=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function vr(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=gi(t),t!==null&&Sc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function J0(e,t,n,r,i){switch(t){case"focusin":return Vt=vr(Vt,e,t,n,r,i),!0;case"dragenter":return Ot=vr(Ot,e,t,n,r,i),!0;case"mouseover":return Wt=vr(Wt,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Kr.set(s,vr(Kr.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Yr.set(s,vr(Yr.get(s)||null,e,t,n,r,i)),!0}return!1}function Ih(e){var t=dn(e.target);if(t!==null){var n=An(t);if(n!==null){if(t=n.tag,t===13){if(t=vh(n),t!==null){e.blockedOn=t,Eh(e.priority,function(){Th(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=sl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Ja=r,n.target.dispatchEvent(r),Ja=null}else return t=gi(n),t!==null&&Sc(t),e.blockedOn=n,!1;t.shift()}return!0}function Hu(e,t,n){gs(e)&&n.delete(t)}function ey(){il=!1,Vt!==null&&gs(Vt)&&(Vt=null),Ot!==null&&gs(Ot)&&(Ot=null),Wt!==null&&gs(Wt)&&(Wt=null),Kr.forEach(Hu),Yr.forEach(Hu)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,il||(il=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,ey)))}function Xr(e){function t(i){return wr(i,e)}if(0<Ni.length){wr(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Vt!==null&&wr(Vt,e),Ot!==null&&wr(Ot,e),Wt!==null&&wr(Wt,e),Kr.forEach(t),Yr.forEach(t),n=0;n<Dt.length;n++)r=Dt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Dt.length&&(n=Dt[0],n.blockedOn===null);)Ih(n),n.blockedOn===null&&Dt.shift()}var Zn=Tt.ReactCurrentBatchConfig,Bs=!0;function ty(e,t,n,r){var i=F,s=Zn.transition;Zn.transition=null;try{F=1,bc(e,t,n,r)}finally{F=i,Zn.transition=s}}function ny(e,t,n,r){var i=F,s=Zn.transition;Zn.transition=null;try{F=4,bc(e,t,n,r)}finally{F=i,Zn.transition=s}}function bc(e,t,n,r){if(Bs){var i=sl(e,t,n,r);if(i===null)na(e,t,r,Fs,n),Uu(e,r);else if(J0(i,e,t,n,r))r.stopPropagation();else if(Uu(e,r),t&4&&-1<Z0.indexOf(e)){for(;i!==null;){var s=gi(i);if(s!==null&&Ah(s),s=sl(e,t,n,r),s===null&&na(e,t,r,Fs,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else na(e,t,r,null,n)}}var Fs=null;function sl(e,t,n,r){if(Fs=null,e=yc(r),e=dn(e),e!==null)if(t=An(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vh(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Fs=e,null}function Nh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($0()){case vc:return 1;case kh:return 4;case zs:case U0:return 16;case jh:return 536870912;default:return 16}default:return 16}}var zt=null,kc=null,xs=null;function Rh(){if(xs)return xs;var e,t=kc,n=t.length,r,i="value"in zt?zt.value:zt.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[s-r];r++);return xs=i.slice(e,1<r?1-r:void 0)}function ys(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function Gu(){return!1}function Fe(e){function t(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ri:Gu,this.isPropagationStopped=Gu,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jc=Fe(dr),mi=Q({},dr,{view:0,detail:0}),ry=Fe(mi),Ko,Yo,Sr,vo=Q({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_c,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sr&&(Sr&&e.type==="mousemove"?(Ko=e.screenX-Sr.screenX,Yo=e.screenY-Sr.screenY):Yo=Ko=0,Sr=e),Ko)},movementY:function(e){return"movementY"in e?e.movementY:Yo}}),Ku=Fe(vo),iy=Q({},vo,{dataTransfer:0}),sy=Fe(iy),oy=Q({},mi,{relatedTarget:0}),Xo=Fe(oy),ay=Q({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),ly=Fe(ay),cy=Q({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uy=Fe(cy),dy=Q({},dr,{data:0}),Yu=Fe(dy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hy[e])?!!t[e]:!1}function _c(){return my}var gy=Q({},mi,{key:function(e){if(e.key){var t=py[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ys(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_c,charCode:function(e){return e.type==="keypress"?ys(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ys(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),xy=Fe(gy),yy=Q({},vo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=Fe(yy),vy=Q({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_c}),wy=Fe(vy),Sy=Q({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),by=Fe(Sy),ky=Q({},vo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jy=Fe(ky),_y=[9,13,27,32],Cc=jt&&"CompositionEvent"in window,Rr=null;jt&&"documentMode"in document&&(Rr=document.documentMode);var Cy=jt&&"TextEvent"in window&&!Rr,Dh=jt&&(!Cc||Rr&&8<Rr&&11>=Rr),Qu=" ",qu=!1;function Mh(e,t){switch(e){case"keyup":return _y.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var zn=!1;function Ay(e,t){switch(e){case"compositionend":return zh(t);case"keypress":return t.which!==32?null:(qu=!0,Qu);case"textInput":return e=t.data,e===Qu&&qu?null:e;default:return null}}function Ty(e,t){if(zn)return e==="compositionend"||!Cc&&Mh(e,t)?(e=Rh(),xs=kc=zt=null,zn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Dh&&t.locale!=="ko"?null:t.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Py[e.type]:t==="textarea"}function Lh(e,t,n,r){hh(r),t=Vs(t,"onChange"),0<t.length&&(n=new jc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Dr=null,Qr=null;function Ey(e){Yh(e,0)}function wo(e){var t=Fn(e);if(ah(t))return e}function Iy(e,t){if(e==="change")return t}var Bh=!1;if(jt){var Qo;if(jt){var qo="oninput"in document;if(!qo){var Ju=document.createElement("div");Ju.setAttribute("oninput","return;"),qo=typeof Ju.oninput=="function"}Qo=qo}else Qo=!1;Bh=Qo&&(!document.documentMode||9<document.documentMode)}function ed(){Dr&&(Dr.detachEvent("onpropertychange",Fh),Qr=Dr=null)}function Fh(e){if(e.propertyName==="value"&&wo(Qr)){var t=[];Lh(t,Qr,e,yc(e)),yh(Ey,t)}}function Ny(e,t,n){e==="focusin"?(ed(),Dr=t,Qr=n,Dr.attachEvent("onpropertychange",Fh)):e==="focusout"&&ed()}function Ry(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wo(Qr)}function Dy(e,t){if(e==="click")return wo(t)}function My(e,t){if(e==="input"||e==="change")return wo(t)}function zy(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:zy;function qr(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oa.call(t,i)||!at(e[i],t[i]))return!1}return!0}function td(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nd(e,t){var n=td(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=td(n)}}function Vh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Oh(){for(var e=window,t=Rs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Rs(e.document)}return t}function Ac(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ly(e){var t=Oh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vh(n.ownerDocument.documentElement,n)){if(r!==null&&Ac(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=nd(n,s);var a=nd(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var By=jt&&"documentMode"in document&&11>=document.documentMode,Ln=null,ol=null,Mr=null,al=!1;function rd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;al||Ln==null||Ln!==Rs(r)||(r=Ln,"selectionStart"in r&&Ac(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Mr&&qr(Mr,r)||(Mr=r,r=Vs(ol,"onSelect"),0<r.length&&(t=new jc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Ln)))}function Di(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Bn={animationend:Di("Animation","AnimationEnd"),animationiteration:Di("Animation","AnimationIteration"),animationstart:Di("Animation","AnimationStart"),transitionend:Di("Transition","TransitionEnd")},Zo={},Wh={};jt&&(Wh=document.createElement("div").style,"AnimationEvent"in window||(delete Bn.animationend.animation,delete Bn.animationiteration.animation,delete Bn.animationstart.animation),"TransitionEvent"in window||delete Bn.transitionend.transition);function So(e){if(Zo[e])return Zo[e];if(!Bn[e])return e;var t=Bn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Wh)return Zo[e]=t[n];return e}var $h=So("animationend"),Uh=So("animationiteration"),Hh=So("animationstart"),Gh=So("transitionend"),Kh=new Map,id="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Jt(e,t){Kh.set(e,t),Cn(t,[e])}for(var Jo=0;Jo<id.length;Jo++){var ea=id[Jo],Fy=ea.toLowerCase(),Vy=ea[0].toUpperCase()+ea.slice(1);Jt(Fy,"on"+Vy)}Jt($h,"onAnimationEnd");Jt(Uh,"onAnimationIteration");Jt(Hh,"onAnimationStart");Jt("dblclick","onDoubleClick");Jt("focusin","onFocus");Jt("focusout","onBlur");Jt(Gh,"onTransitionEnd");tr("onMouseEnter",["mouseout","mouseover"]);tr("onMouseLeave",["mouseout","mouseover"]);tr("onPointerEnter",["pointerout","pointerover"]);tr("onPointerLeave",["pointerout","pointerover"]);Cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pr));function sd(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,F0(r,t,void 0,e),e.currentTarget=null}function Yh(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&i.isPropagationStopped())break e;sd(i,l,u),s=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&i.isPropagationStopped())break e;sd(i,l,u),s=c}}}if(Ms)throw e=nl,Ms=!1,nl=null,e}function H(e,t){var n=t[pl];n===void 0&&(n=t[pl]=new Set);var r=e+"__bubble";n.has(r)||(Xh(t,e,2,!1),n.add(r))}function ta(e,t,n){var r=0;t&&(r|=4),Xh(n,e,r,t)}var Mi="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Mi]){e[Mi]=!0,nh.forEach(function(n){n!=="selectionchange"&&(Oy.has(n)||ta(n,!1,e),ta(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Mi]||(t[Mi]=!0,ta("selectionchange",!1,t))}}function Xh(e,t,n,r){switch(Nh(t)){case 1:var i=ty;break;case 4:i=ny;break;default:i=bc}n=i.bind(null,t,n,e),i=void 0,!tl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function na(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;a=a.return}for(;l!==null;){if(a=dn(l),a===null)return;if(c=a.tag,c===5||c===6){r=s=a;continue e}l=l.parentNode}}r=r.return}yh(function(){var u=s,d=yc(n),p=[];e:{var f=Kh.get(e);if(f!==void 0){var x=jc,y=e;switch(e){case"keypress":if(ys(n)===0)break e;case"keydown":case"keyup":x=xy;break;case"focusin":y="focus",x=Xo;break;case"focusout":y="blur",x=Xo;break;case"beforeblur":case"afterblur":x=Xo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=wy;break;case $h:case Uh:case Hh:x=ly;break;case Gh:x=by;break;case"scroll":x=ry;break;case"wheel":x=jy;break;case"copy":case"cut":case"paste":x=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Xu}var v=(t&4)!==0,S=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Gr(h,m),w!=null&&v.push(Jr(h,w,g)))),S)break;h=h.return}0<v.length&&(f=new x(f,y,null,n,d),p.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==Ja&&(y=n.relatedTarget||n.fromElement)&&(dn(y)||y[_t]))break e;if((x||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?dn(y):null,y!==null&&(S=An(y),y!==S||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(v=Ku,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Xu,w="onPointerLeave",m="onPointerEnter",h="pointer"),S=x==null?f:Fn(x),g=y==null?f:Fn(y),f=new v(w,h+"leave",x,n,d),f.target=S,f.relatedTarget=g,w=null,dn(d)===u&&(v=new v(m,h+"enter",y,n,d),v.target=g,v.relatedTarget=S,w=v),S=w,x&&y)t:{for(v=x,m=y,h=0,g=v;g;g=Pn(g))h++;for(g=0,w=m;w;w=Pn(w))g++;for(;0<h-g;)v=Pn(v),h--;for(;0<g-h;)m=Pn(m),g--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=Pn(v),m=Pn(m)}v=null}else v=null;x!==null&&od(p,f,x,v,!1),y!==null&&S!==null&&od(p,S,y,v,!0)}}e:{if(f=u?Fn(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var k=Iy;else if(Zu(f))if(Bh)k=My;else{k=Ry;var A=Ny}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(k=Dy);if(k&&(k=k(e,u))){Lh(p,k,n,d);break e}A&&A(e,f,u),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Ya(f,"number",f.value)}switch(A=u?Fn(u):window,e){case"focusin":(Zu(A)||A.contentEditable==="true")&&(Ln=A,ol=u,Mr=null);break;case"focusout":Mr=ol=Ln=null;break;case"mousedown":al=!0;break;case"contextmenu":case"mouseup":case"dragend":al=!1,rd(p,n,d);break;case"selectionchange":if(By)break;case"keydown":case"keyup":rd(p,n,d)}var C;if(Cc)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else zn?Mh(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(Dh&&n.locale!=="ko"&&(zn||j!=="onCompositionStart"?j==="onCompositionEnd"&&zn&&(C=Rh()):(zt=d,kc="value"in zt?zt.value:zt.textContent,zn=!0)),A=Vs(u,j),0<A.length&&(j=new Yu(j,e,null,n,d),p.push({event:j,listeners:A}),C?j.data=C:(C=zh(n),C!==null&&(j.data=C)))),(C=Cy?Ay(e,n):Ty(e,n))&&(u=Vs(u,"onBeforeInput"),0<u.length&&(d=new Yu("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=C))}Yh(p,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vs(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Gr(e,n),s!=null&&r.unshift(Jr(e,s,i)),s=Gr(e,t),s!=null&&r.push(Jr(e,s,i))),e=e.return}return r}function Pn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function od(e,t,n,r,i){for(var s=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Gr(n,s),c!=null&&a.unshift(Jr(n,c,l))):i||(c=Gr(n,s),c!=null&&a.push(Jr(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Wy=/\r\n?/g,$y=/\u0000|\uFFFD/g;function ad(e){return(typeof e=="string"?e:""+e).replace(Wy,`
`).replace($y,"")}function zi(e,t,n){if(t=ad(t),ad(e)!==t&&n)throw Error(_(425))}function Os(){}var ll=null,cl=null;function ul(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var dl=typeof setTimeout=="function"?setTimeout:void 0,Uy=typeof clearTimeout=="function"?clearTimeout:void 0,ld=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof ld<"u"?function(e){return ld.resolve(null).then(e).catch(Gy)}:dl;function Gy(e){setTimeout(function(){throw e})}function ra(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xr(t)}function $t(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function cd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),pt="__reactFiber$"+pr,ei="__reactProps$"+pr,_t="__reactContainer$"+pr,pl="__reactEvents$"+pr,Ky="__reactListeners$"+pr,Yy="__reactHandles$"+pr;function dn(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=cd(e);e!==null;){if(n=e[pt])return n;e=cd(e)}return t}e=n,n=e.parentNode}return null}function gi(e){return e=e[pt]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function bo(e){return e[ei]||null}var fl=[],Vn=-1;function en(e){return{current:e}}function G(e){0>Vn||(e.current=fl[Vn],fl[Vn]=null,Vn--)}function U(e,t){Vn++,fl[Vn]=e.current,e.current=t}var Qt={},ye=en(Qt),Te=en(!1),wn=Qt;function nr(e,t){var n=e.type.contextTypes;if(!n)return Qt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Pe(e){return e=e.childContextTypes,e!=null}function Ws(){G(Te),G(ye)}function ud(e,t,n){if(ye.current!==Qt)throw Error(_(168));U(ye,t),U(Te,n)}function Qh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(_(108,N0(e)||"Unknown",i));return Q({},n,r)}function $s(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qt,wn=ye.current,U(ye,e),U(Te,Te.current),!0}function dd(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Qh(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,G(Te),G(ye),U(ye,e)):G(Te),U(Te,n)}var wt=null,ko=!1,ia=!1;function qh(e){wt===null?wt=[e]:wt.push(e)}function Xy(e){ko=!0,qh(e)}function tn(){if(!ia&&wt!==null){ia=!0;var e=0,t=F;try{var n=wt;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,ko=!1}catch(i){throw wt!==null&&(wt=wt.slice(e+1)),bh(vc,tn),i}finally{F=t,ia=!1}}return null}var On=[],Wn=0,Us=null,Hs=0,We=[],$e=0,Sn=null,St=1,bt="";function ln(e,t){On[Wn++]=Hs,On[Wn++]=Us,Us=e,Hs=t}function Zh(e,t,n){We[$e++]=St,We[$e++]=bt,We[$e++]=Sn,Sn=e;var r=St;e=bt;var i=32-it(r)-1;r&=~(1<<i),n+=1;var s=32-it(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,St=1<<32-it(t)+i|n<<i|r,bt=s+e}else St=1<<s|n<<i|r,bt=e}function Tc(e){e.return!==null&&(ln(e,1),Zh(e,1,0))}function Pc(e){for(;e===Us;)Us=On[--Wn],On[Wn]=null,Hs=On[--Wn],On[Wn]=null;for(;e===Sn;)Sn=We[--$e],We[$e]=null,bt=We[--$e],We[$e]=null,St=We[--$e],We[$e]=null}var Me=null,De=null,K=!1,rt=null;function Jh(e,t){var n=Ue(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function pd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Me=e,De=$t(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Me=e,De=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:St,overflow:bt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ue(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Me=e,De=null,!0):!1;default:return!1}}function hl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ml(e){if(K){var t=De;if(t){var n=t;if(!pd(e,t)){if(hl(e))throw Error(_(418));t=$t(n.nextSibling);var r=Me;t&&pd(e,t)?Jh(r,n):(e.flags=e.flags&-4097|2,K=!1,Me=e)}}else{if(hl(e))throw Error(_(418));e.flags=e.flags&-4097|2,K=!1,Me=e}}}function fd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Me=e}function Li(e){if(e!==Me)return!1;if(!K)return fd(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ul(e.type,e.memoizedProps)),t&&(t=De)){if(hl(e))throw em(),Error(_(418));for(;t;)Jh(e,t),t=$t(t.nextSibling)}if(fd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){De=$t(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}De=null}}else De=Me?$t(e.stateNode.nextSibling):null;return!0}function em(){for(var e=De;e;)e=$t(e.nextSibling)}function rr(){De=Me=null,K=!1}function Ec(e){rt===null?rt=[e]:rt.push(e)}var Qy=Tt.ReactCurrentBatchConfig;function br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},t._stringRef=s,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function Bi(e,t){throw e=Object.prototype.toString.call(t),Error(_(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function hd(e){var t=e._init;return t(e._payload)}function tm(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Kt(m,h),m.index=0,m.sibling=null,m}function s(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function a(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,h,g,w){return h===null||h.tag!==6?(h=da(g,m.mode,w),h.return=m,h):(h=i(h,g),h.return=m,h)}function c(m,h,g,w){var k=g.type;return k===Mn?d(m,h,g.props.children,w,g.key):h!==null&&(h.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&hd(k)===h.type)?(w=i(h,g.props),w.ref=br(m,h,g),w.return=m,w):(w=_s(g.type,g.key,g.props,null,m.mode,w),w.ref=br(m,h,g),w.return=m,w)}function u(m,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=pa(g,m.mode,w),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function d(m,h,g,w,k){return h===null||h.tag!==7?(h=xn(g,m.mode,w,k),h.return=m,h):(h=i(h,g),h.return=m,h)}function p(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=da(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ai:return g=_s(h.type,h.key,h.props,null,m.mode,g),g.ref=br(m,null,h),g.return=m,g;case Dn:return h=pa(h,m.mode,g),h.return=m,h;case Nt:var w=h._init;return p(m,w(h._payload),g)}if(Ar(h)||xr(h))return h=xn(h,m.mode,g,null),h.return=m,h;Bi(m,h)}return null}function f(m,h,g,w){var k=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return k!==null?null:l(m,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ai:return g.key===k?c(m,h,g,w):null;case Dn:return g.key===k?u(m,h,g,w):null;case Nt:return k=g._init,f(m,h,k(g._payload),w)}if(Ar(g)||xr(g))return k!==null?null:d(m,h,g,w,null);Bi(m,g)}return null}function x(m,h,g,w,k){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(h,m,""+w,k);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ai:return m=m.get(w.key===null?g:w.key)||null,c(h,m,w,k);case Dn:return m=m.get(w.key===null?g:w.key)||null,u(h,m,w,k);case Nt:var A=w._init;return x(m,h,g,A(w._payload),k)}if(Ar(w)||xr(w))return m=m.get(g)||null,d(h,m,w,k,null);Bi(h,w)}return null}function y(m,h,g,w){for(var k=null,A=null,C=h,j=h=0,D=null;C!==null&&j<g.length;j++){C.index>j?(D=C,C=null):D=C.sibling;var P=f(m,C,g[j],w);if(P===null){C===null&&(C=D);break}e&&C&&P.alternate===null&&t(m,C),h=s(P,h,j),A===null?k=P:A.sibling=P,A=P,C=D}if(j===g.length)return n(m,C),K&&ln(m,j),k;if(C===null){for(;j<g.length;j++)C=p(m,g[j],w),C!==null&&(h=s(C,h,j),A===null?k=C:A.sibling=C,A=C);return K&&ln(m,j),k}for(C=r(m,C);j<g.length;j++)D=x(C,m,j,g[j],w),D!==null&&(e&&D.alternate!==null&&C.delete(D.key===null?j:D.key),h=s(D,h,j),A===null?k=D:A.sibling=D,A=D);return e&&C.forEach(function(L){return t(m,L)}),K&&ln(m,j),k}function v(m,h,g,w){var k=xr(g);if(typeof k!="function")throw Error(_(150));if(g=k.call(g),g==null)throw Error(_(151));for(var A=k=null,C=h,j=h=0,D=null,P=g.next();C!==null&&!P.done;j++,P=g.next()){C.index>j?(D=C,C=null):D=C.sibling;var L=f(m,C,P.value,w);if(L===null){C===null&&(C=D);break}e&&C&&L.alternate===null&&t(m,C),h=s(L,h,j),A===null?k=L:A.sibling=L,A=L,C=D}if(P.done)return n(m,C),K&&ln(m,j),k;if(C===null){for(;!P.done;j++,P=g.next())P=p(m,P.value,w),P!==null&&(h=s(P,h,j),A===null?k=P:A.sibling=P,A=P);return K&&ln(m,j),k}for(C=r(m,C);!P.done;j++,P=g.next())P=x(C,m,j,P.value,w),P!==null&&(e&&P.alternate!==null&&C.delete(P.key===null?j:P.key),h=s(P,h,j),A===null?k=P:A.sibling=P,A=P);return e&&C.forEach(function(ee){return t(m,ee)}),K&&ln(m,j),k}function S(m,h,g,w){if(typeof g=="object"&&g!==null&&g.type===Mn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ai:e:{for(var k=g.key,A=h;A!==null;){if(A.key===k){if(k=g.type,k===Mn){if(A.tag===7){n(m,A.sibling),h=i(A,g.props.children),h.return=m,m=h;break e}}else if(A.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Nt&&hd(k)===A.type){n(m,A.sibling),h=i(A,g.props),h.ref=br(m,A,g),h.return=m,m=h;break e}n(m,A);break}else t(m,A);A=A.sibling}g.type===Mn?(h=xn(g.props.children,m.mode,w,g.key),h.return=m,m=h):(w=_s(g.type,g.key,g.props,null,m.mode,w),w.ref=br(m,h,g),w.return=m,m=w)}return a(m);case Dn:e:{for(A=g.key;h!==null;){if(h.key===A)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=pa(g,m.mode,w),h.return=m,m=h}return a(m);case Nt:return A=g._init,S(m,h,A(g._payload),w)}if(Ar(g))return y(m,h,g,w);if(xr(g))return v(m,h,g,w);Bi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=da(g,m.mode,w),h.return=m,m=h),a(m)):n(m,h)}return S}var ir=tm(!0),nm=tm(!1),Gs=en(null),Ks=null,$n=null,Ic=null;function Nc(){Ic=$n=Ks=null}function Rc(e){var t=Gs.current;G(Gs),e._currentValue=t}function gl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Jn(e,t){Ks=e,Ic=$n=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function Ye(e){var t=e._currentValue;if(Ic!==e)if(e={context:e,memoizedValue:t,next:null},$n===null){if(Ks===null)throw Error(_(308));$n=e,Ks.dependencies={lanes:0,firstContext:e}}else $n=$n.next=e;return t}var pn=null;function Dc(e){pn===null?pn=[e]:pn.push(e)}function rm(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Dc(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ct(e,r)}function Ct(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Rt=!1;function Mc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function im(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function kt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ut(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Ct(e,n)}return i=r.interleaved,i===null?(t.next=t,Dc(r)):(t.next=i.next,i.next=t),r.interleaved=t,Ct(e,n)}function vs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wc(e,n)}}function md(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ys(e,t,n,r){var i=e.updateQueue;Rt=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==a&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(s!==null){var p=i.baseState;a=0,d=u=c=null,l=s;do{var f=l.lane,x=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,v=l;switch(f=t,x=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){p=y.call(x,p,f);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(x,p,f):y,f==null)break e;p=Q({},p,f);break e;case 2:Rt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else x={eventTime:x,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=x,c=p):d=d.next=x,a|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);kn|=a,e.lanes=a,e.memoizedState=p}}function gd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var xi={},ht=en(xi),ti=en(xi),ni=en(xi);function fn(e){if(e===xi)throw Error(_(174));return e}function zc(e,t){switch(U(ni,t),U(ti,e),U(ht,xi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Qa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Qa(t,e)}G(ht),U(ht,t)}function sr(){G(ht),G(ti),G(ni)}function sm(e){fn(ni.current);var t=fn(ht.current),n=Qa(t,e.type);t!==n&&(U(ti,e),U(ht,n))}function Lc(e){ti.current===e&&(G(ht),G(ti))}var Y=en(0);function Xs(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sa=[];function Bc(){for(var e=0;e<sa.length;e++)sa[e]._workInProgressVersionPrimary=null;sa.length=0}var ws=Tt.ReactCurrentDispatcher,oa=Tt.ReactCurrentBatchConfig,bn=0,X=null,oe=null,le=null,Qs=!1,zr=!1,ri=0,qy=0;function me(){throw Error(_(321))}function Fc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function Vc(e,t,n,r,i,s){if(bn=s,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ws.current=e===null||e.memoizedState===null?tv:nv,e=n(r,i),zr){s=0;do{if(zr=!1,ri=0,25<=s)throw Error(_(301));s+=1,le=oe=null,t.updateQueue=null,ws.current=rv,e=n(r,i)}while(zr)}if(ws.current=qs,t=oe!==null&&oe.next!==null,bn=0,le=oe=X=null,Qs=!1,t)throw Error(_(300));return e}function Oc(){var e=ri!==0;return ri=0,e}function ct(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Xe(){if(oe===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=oe.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,oe=e;else{if(e===null)throw Error(_(310));oe=e,e={memoizedState:oe.memoizedState,baseState:oe.baseState,baseQueue:oe.baseQueue,queue:oe.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function ii(e,t){return typeof t=="function"?t(e):t}function aa(e){var t=Xe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,c=null,u=s;do{var d=u.lane;if((bn&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,a=r):c=c.next=p,X.lanes|=d,kn|=d}u=u.next}while(u!==null&&u!==s);c===null?a=r:c.next=l,at(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,X.lanes|=s,kn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function la(e){var t=Xe(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=e(s,a.action),a=a.next;while(a!==i);at(s,t.memoizedState)||(Ae=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function om(){}function am(e,t){var n=X,r=Xe(),i=t(),s=!at(r.memoizedState,i);if(s&&(r.memoizedState=i,Ae=!0),r=r.queue,Wc(um.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,si(9,cm.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(_(349));bn&30||lm(n,t,i)}return i}function lm(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cm(e,t,n,r){t.value=n,t.getSnapshot=r,dm(t)&&pm(e)}function um(e,t,n){return n(function(){dm(t)&&pm(e)})}function dm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function pm(e){var t=Ct(e,1);t!==null&&st(t,e,1,-1)}function xd(e){var t=ct();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:e},t.queue=e,e=e.dispatch=ev.bind(null,X,e),[t.memoizedState,e]}function si(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function fm(){return Xe().memoizedState}function Ss(e,t,n,r){var i=ct();X.flags|=e,i.memoizedState=si(1|t,n,void 0,r===void 0?null:r)}function jo(e,t,n,r){var i=Xe();r=r===void 0?null:r;var s=void 0;if(oe!==null){var a=oe.memoizedState;if(s=a.destroy,r!==null&&Fc(r,a.deps)){i.memoizedState=si(t,n,s,r);return}}X.flags|=e,i.memoizedState=si(1|t,n,s,r)}function yd(e,t){return Ss(8390656,8,e,t)}function Wc(e,t){return jo(2048,8,e,t)}function hm(e,t){return jo(4,2,e,t)}function mm(e,t){return jo(4,4,e,t)}function gm(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function xm(e,t,n){return n=n!=null?n.concat([e]):null,jo(4,4,gm.bind(null,t,e),n)}function $c(){}function ym(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vm(e,t){var n=Xe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function wm(e,t,n){return bn&21?(at(n,t)||(n=_h(),X.lanes|=n,kn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function Zy(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=oa.transition;oa.transition={};try{e(!1),t()}finally{F=n,oa.transition=r}}function Sm(){return Xe().memoizedState}function Jy(e,t,n){var r=Gt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},bm(e))km(t,n);else if(n=rm(e,t,n,r),n!==null){var i=be();st(n,e,r,i),jm(n,t,r)}}function ev(e,t,n){var r=Gt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(bm(e))km(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,at(l,a)){var c=t.interleaved;c===null?(i.next=i,Dc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=rm(e,t,i,r),n!==null&&(i=be(),st(n,e,r,i),jm(n,t,r))}}function bm(e){var t=e.alternate;return e===X||t!==null&&t===X}function km(e,t){zr=Qs=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,wc(e,n)}}var qs={readContext:Ye,useCallback:me,useContext:me,useEffect:me,useImperativeHandle:me,useInsertionEffect:me,useLayoutEffect:me,useMemo:me,useReducer:me,useRef:me,useState:me,useDebugValue:me,useDeferredValue:me,useTransition:me,useMutableSource:me,useSyncExternalStore:me,useId:me,unstable_isNewReconciler:!1},tv={readContext:Ye,useCallback:function(e,t){return ct().memoizedState=[e,t===void 0?null:t],e},useContext:Ye,useEffect:yd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ss(4194308,4,gm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ss(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ss(4,2,e,t)},useMemo:function(e,t){var n=ct();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ct();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Jy.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ct();return e={current:e},t.memoizedState=e},useState:xd,useDebugValue:$c,useDeferredValue:function(e){return ct().memoizedState=e},useTransition:function(){var e=xd(!1),t=e[0];return e=Zy.bind(null,e[1]),ct().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=ct();if(K){if(n===void 0)throw Error(_(407));n=n()}else{if(n=t(),ce===null)throw Error(_(349));bn&30||lm(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,yd(um.bind(null,r,s,e),[e]),r.flags|=2048,si(9,cm.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=ct(),t=ce.identifierPrefix;if(K){var n=bt,r=St;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=qy++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nv={readContext:Ye,useCallback:ym,useContext:Ye,useEffect:Wc,useImperativeHandle:xm,useInsertionEffect:hm,useLayoutEffect:mm,useMemo:vm,useReducer:aa,useRef:fm,useState:function(){return aa(ii)},useDebugValue:$c,useDeferredValue:function(e){var t=Xe();return wm(t,oe.memoizedState,e)},useTransition:function(){var e=aa(ii)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:om,useSyncExternalStore:am,useId:Sm,unstable_isNewReconciler:!1},rv={readContext:Ye,useCallback:ym,useContext:Ye,useEffect:Wc,useImperativeHandle:xm,useInsertionEffect:hm,useLayoutEffect:mm,useMemo:vm,useReducer:la,useRef:fm,useState:function(){return la(ii)},useDebugValue:$c,useDeferredValue:function(e){var t=Xe();return oe===null?t.memoizedState=e:wm(t,oe.memoizedState,e)},useTransition:function(){var e=la(ii)[0],t=Xe().memoizedState;return[e,t]},useMutableSource:om,useSyncExternalStore:am,useId:Sm,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var _o={isMounted:function(e){return(e=e._reactInternals)?An(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=be(),i=Gt(e),s=kt(r,i);s.payload=t,n!=null&&(s.callback=n),t=Ut(e,s,i),t!==null&&(st(t,e,i,r),vs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=be(),i=Gt(e),s=kt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=Ut(e,s,i),t!==null&&(st(t,e,i,r),vs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=be(),r=Gt(e),i=kt(n,r);i.tag=2,t!=null&&(i.callback=t),t=Ut(e,i,r),t!==null&&(st(t,e,r,n),vs(t,e,r))}};function vd(e,t,n,r,i,s,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,a):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(i,s):!0}function _m(e,t,n){var r=!1,i=Qt,s=t.contextType;return typeof s=="object"&&s!==null?s=Ye(s):(i=Pe(t)?wn:ye.current,r=t.contextTypes,s=(r=r!=null)?nr(e,i):Qt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=_o,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function wd(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&_o.enqueueReplaceState(t,t.state,null)}function yl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Mc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ye(s):(s=Pe(t)?wn:ye.current,i.context=nr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(xl(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&_o.enqueueReplaceState(i,i.state,null),Ys(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=I0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ca(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function vl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var iv=typeof WeakMap=="function"?WeakMap:Map;function Cm(e,t,n){n=kt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Js||(Js=!0,Pl=r),vl(e,t)},n}function Am(e,t,n){n=kt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){vl(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vl(e,t),typeof r!="function"&&(Ht===null?Ht=new Set([this]):Ht.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Sd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new iv;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=yv.bind(null,e,t,n),t.then(e,e))}function bd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function kd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=kt(-1,1),t.tag=2,Ut(n,t,1))),n.lanes|=1),e)}var sv=Tt.ReactCurrentOwner,Ae=!1;function ve(e,t,n,r){t.child=e===null?nm(t,null,n,r):ir(t,e.child,n,r)}function jd(e,t,n,r,i){n=n.render;var s=t.ref;return Jn(t,i),r=Vc(e,t,n,r,s,i),n=Oc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(K&&n&&Tc(t),t.flags|=1,ve(e,t,r,i),t.child)}function _d(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!qc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Tm(e,t,s,r,i)):(e=_s(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(a,r)&&e.ref===t.ref)return At(e,t,i)}return t.flags|=1,e=Kt(s,r),e.ref=t.ref,e.return=t,t.child=e}function Tm(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(qr(s,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,At(e,t,i)}return wl(e,t,n,r,i)}function Pm(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},U(Hn,Re),Re|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,U(Hn,Re),Re|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,U(Hn,Re),Re|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,U(Hn,Re),Re|=r;return ve(e,t,i,n),t.child}function Em(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wl(e,t,n,r,i){var s=Pe(n)?wn:ye.current;return s=nr(t,s),Jn(t,i),n=Vc(e,t,n,r,s,i),r=Oc(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,At(e,t,i)):(K&&r&&Tc(t),t.flags|=1,ve(e,t,n,i),t.child)}function Cd(e,t,n,r,i){if(Pe(n)){var s=!0;$s(t)}else s=!1;if(Jn(t,i),t.stateNode===null)bs(e,t),_m(t,n,r),yl(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ye(u):(u=Pe(n)?wn:ye.current,u=nr(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&wd(t,a,r,u),Rt=!1;var f=t.memoizedState;a.state=f,Ys(t,r,a,i),c=t.memoizedState,l!==r||f!==c||Te.current||Rt?(typeof d=="function"&&(xl(t,n,d,r),c=t.memoizedState),(l=Rt||vd(t,n,l,r,f,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,im(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tt(t.type,l),a.props=u,p=t.pendingProps,f=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Ye(c):(c=Pe(n)?wn:ye.current,c=nr(t,c));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==p||f!==c)&&wd(t,a,r,c),Rt=!1,f=t.memoizedState,a.state=f,Ys(t,r,a,i);var y=t.memoizedState;l!==p||f!==y||Te.current||Rt?(typeof x=="function"&&(xl(t,n,x,r),y=t.memoizedState),(u=Rt||vd(t,n,u,r,f,y,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,y,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),a.props=r,a.state=y,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Sl(e,t,n,r,s,i)}function Sl(e,t,n,r,i,s){Em(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&dd(t,n,!1),At(e,t,s);r=t.stateNode,sv.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=ir(t,e.child,null,s),t.child=ir(t,null,l,s)):ve(e,t,l,s),t.memoizedState=r.state,i&&dd(t,n,!0),t.child}function Im(e){var t=e.stateNode;t.pendingContext?ud(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ud(e,t.context,!1),zc(e,t.containerInfo)}function Ad(e,t,n,r,i){return rr(),Ec(i),t.flags|=256,ve(e,t,n,r),t.child}var bl={dehydrated:null,treeContext:null,retryLane:0};function kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nm(e,t,n){var r=t.pendingProps,i=Y.current,s=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),U(Y,i&1),e===null)return ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,s?(r=t.mode,s=t.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=To(a,r,0,null),e=xn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=kl(n),t.memoizedState=bl,e):Uc(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ov(e,t,a,r,l,i,n);if(s){s=r.fallback,a=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Kt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Kt(l,s):(s=xn(s,a,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,a=e.child.memoizedState,a=a===null?kl(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=e.childLanes&~n,t.memoizedState=bl,r}return s=e.child,e=s.sibling,r=Kt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Uc(e,t){return t=To({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&Ec(r),ir(t,e.child,null,n),e=Uc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ov(e,t,n,r,i,s,a){if(n)return t.flags&256?(t.flags&=-257,r=ca(Error(_(422))),Fi(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=To({mode:"visible",children:r.children},i,0,null),s=xn(s,i,a,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&ir(t,e.child,null,a),t.child.memoizedState=kl(a),t.memoizedState=bl,s);if(!(t.mode&1))return Fi(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(_(419)),r=ca(s,r,void 0),Fi(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ae||l){if(r=ce,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ct(e,i),st(r,e,i,-1))}return Qc(),r=ca(Error(_(421))),Fi(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=vv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,De=$t(i.nextSibling),Me=t,K=!0,rt=null,e!==null&&(We[$e++]=St,We[$e++]=bt,We[$e++]=Sn,St=e.id,bt=e.overflow,Sn=t),t=Uc(t,r.children),t.flags|=4096,t)}function Td(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),gl(e.return,t,n)}function ua(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Rm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(ve(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Td(e,n,t);else if(e.tag===19)Td(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(U(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Xs(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ua(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Xs(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ua(t,!0,n,null,s);break;case"together":ua(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function At(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),kn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=Kt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Kt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function av(e,t,n){switch(t.tag){case 3:Im(t),rr();break;case 5:sm(t);break;case 1:Pe(t.type)&&$s(t);break;case 4:zc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;U(Gs,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(U(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?Nm(e,t,n):(U(Y,Y.current&1),e=At(e,t,n),e!==null?e.sibling:null);U(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Rm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),U(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,Pm(e,t,n)}return At(e,t,n)}var Dm,jl,Mm,zm;Dm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jl=function(){};Mm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,fn(ht.current);var s=null;switch(n){case"input":i=Ga(e,i),r=Ga(e,r),s=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":i=Xa(e,i),r=Xa(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Os)}qa(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ur.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ur.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&H("scroll",e),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};zm=function(e,t,n,r){n!==r&&(t.flags|=4)};function kr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ge(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function lv(e,t,n){var r=t.pendingProps;switch(Pc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ge(t),null;case 1:return Pe(t.type)&&Ws(),ge(t),null;case 3:return r=t.stateNode,sr(),G(Te),G(ye),Bc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Li(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(Nl(rt),rt=null))),jl(e,t),ge(t),null;case 5:Lc(t);var i=fn(ni.current);if(n=t.type,e!==null&&t.stateNode!=null)Mm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(_(166));return ge(t),null}if(e=fn(ht.current),Li(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[pt]=t,r[ei]=s,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Pr.length;i++)H(Pr[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":Lu(r,s),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},H("invalid",r);break;case"textarea":Fu(r,s),H("invalid",r)}qa(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",""+l]):Ur.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&H("scroll",r)}switch(n){case"input":Ti(r),Bu(r,s,!0);break;case"textarea":Ti(r),Vu(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Os)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=uh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[pt]=t,e[ei]=r,Dm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Za(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Pr.length;i++)H(Pr[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":Lu(e,r),i=Ga(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Fu(e,r),i=Xa(e,r),H("invalid",e);break;default:i=r}qa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?fh(e,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&dh(e,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Hr(e,c):typeof c=="number"&&Hr(e,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ur.hasOwnProperty(s)?c!=null&&s==="onScroll"&&H("scroll",e):c!=null&&hc(e,s,c,a))}switch(n){case"input":Ti(e),Bu(e,r,!1);break;case"textarea":Ti(e),Vu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Xn(e,!!r.multiple,s,!1):r.defaultValue!=null&&Xn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Os)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ge(t),null;case 6:if(e&&t.stateNode!=null)zm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));if(n=fn(ni.current),fn(ht.current),Li(t)){if(r=t.stateNode,n=t.memoizedProps,r[pt]=t,(s=r.nodeValue!==n)&&(e=Me,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pt]=t,t.stateNode=r}return ge(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&De!==null&&t.mode&1&&!(t.flags&128))em(),rr(),t.flags|=98560,s=!1;else if(s=Li(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(_(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[pt]=t}else rr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ge(t),s=!1}else rt!==null&&(Nl(rt),rt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):Qc())),t.updateQueue!==null&&(t.flags|=4),ge(t),null);case 4:return sr(),jl(e,t),e===null&&Zr(t.stateNode.containerInfo),ge(t),null;case 10:return Rc(t.type._context),ge(t),null;case 17:return Pe(t.type)&&Ws(),ge(t),null;case 19:if(G(Y),s=t.memoizedState,s===null)return ge(t),null;if(r=(t.flags&128)!==0,a=s.rendering,a===null)if(r)kr(s,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Xs(e),a!==null){for(t.flags|=128,kr(s,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return U(Y,Y.current&1|2),t.child}e=e.sibling}s.tail!==null&&J()>ar&&(t.flags|=128,r=!0,kr(s,!1),t.lanes=4194304)}else{if(!r)if(e=Xs(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),kr(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!K)return ge(t),null}else 2*J()-s.renderingStartTime>ar&&n!==1073741824&&(t.flags|=128,r=!0,kr(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(n=s.last,n!==null?n.sibling=a:t.child=a,s.last=a)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=J(),t.sibling=null,n=Y.current,U(Y,r?n&1|2:n&1),t):(ge(t),null);case 22:case 23:return Xc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Re&1073741824&&(ge(t),t.subtreeFlags&6&&(t.flags|=8192)):ge(t),null;case 24:return null;case 25:return null}throw Error(_(156,t.tag))}function cv(e,t){switch(Pc(t),t.tag){case 1:return Pe(t.type)&&Ws(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sr(),G(Te),G(ye),Bc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Lc(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(_(340));rr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return sr(),null;case 10:return Rc(t.type._context),null;case 22:case 23:return Xc(),null;case 24:return null;default:return null}}var Vi=!1,xe=!1,uv=typeof WeakSet=="function"?WeakSet:Set,E=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function _l(e,t,n){try{n()}catch(r){Z(e,t,r)}}var Pd=!1;function dv(e,t){if(ll=Bs,e=Oh(),Ac(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var x;p!==n||i!==0&&p.nodeType!==3||(l=a+i),p!==s||r!==0&&p.nodeType!==3||(c=a+r),p.nodeType===3&&(a+=p.nodeValue.length),(x=p.firstChild)!==null;)f=p,p=x;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=a),f===s&&++d===r&&(c=a),(x=p.nextSibling)!==null)break;p=f,f=p.parentNode}p=x}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(cl={focusedElem:e,selectionRange:n},Bs=!1,E=t;E!==null;)if(t=E,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,E=e;else for(;E!==null;){t=E;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,S=y.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:tt(t.type,v),S);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){Z(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,E=e;break}E=t.return}return y=Pd,Pd=!1,y}function Lr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&_l(t,n,s)}i=i.next}while(i!==r)}}function Co(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Lm(e){var t=e.alternate;t!==null&&(e.alternate=null,Lm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pt],delete t[ei],delete t[pl],delete t[Ky],delete t[Yy])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Bm(e){return e.tag===5||e.tag===3||e.tag===4}function Ed(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Al(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Os));else if(r!==4&&(e=e.child,e!==null))for(Al(e,t,n),e=e.sibling;e!==null;)Al(e,t,n),e=e.sibling}function Tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Tl(e,t,n),e=e.sibling;e!==null;)Tl(e,t,n),e=e.sibling}var ue=null,nt=!1;function Et(e,t,n){for(n=n.child;n!==null;)Fm(e,t,n),n=n.sibling}function Fm(e,t,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(yo,n)}catch{}switch(n.tag){case 5:xe||Un(n,t);case 6:var r=ue,i=nt;ue=null,Et(e,t,n),ue=r,nt=i,ue!==null&&(nt?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(nt?(e=ue,n=n.stateNode,e.nodeType===8?ra(e.parentNode,n):e.nodeType===1&&ra(e,n),Xr(e)):ra(ue,n.stateNode));break;case 4:r=ue,i=nt,ue=n.stateNode.containerInfo,nt=!0,Et(e,t,n),ue=r,nt=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&_l(n,t,a),i=i.next}while(i!==r)}Et(e,t,n);break;case 1:if(!xe&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,t,l)}Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Et(e,t,n),xe=r):Et(e,t,n);break;default:Et(e,t,n)}}function Id(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new uv),t.forEach(function(r){var i=wv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function qe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,nt=!1;break e;case 3:ue=l.stateNode.containerInfo,nt=!0;break e;case 4:ue=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(ue===null)throw Error(_(160));Fm(s,a,i),ue=null,nt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Vm(t,e),t=t.sibling}function Vm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(qe(t,e),lt(e),r&4){try{Lr(3,e,e.return),Co(3,e)}catch(v){Z(e,e.return,v)}try{Lr(5,e,e.return)}catch(v){Z(e,e.return,v)}}break;case 1:qe(t,e),lt(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(qe(t,e),lt(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var i=e.stateNode;try{Hr(i,"")}catch(v){Z(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,a=n!==null?n.memoizedProps:s,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&lh(i,s),Za(l,a);var u=Za(l,s);for(a=0;a<c.length;a+=2){var d=c[a],p=c[a+1];d==="style"?fh(i,p):d==="dangerouslySetInnerHTML"?dh(i,p):d==="children"?Hr(i,p):hc(i,d,p,u)}switch(l){case"input":Ka(i,s);break;case"textarea":ch(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?Xn(i,!!s.multiple,x,!1):f!==!!s.multiple&&(s.defaultValue!=null?Xn(i,!!s.multiple,s.defaultValue,!0):Xn(i,!!s.multiple,s.multiple?[]:"",!1))}i[ei]=s}catch(v){Z(e,e.return,v)}}break;case 6:if(qe(t,e),lt(e),r&4){if(e.stateNode===null)throw Error(_(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(v){Z(e,e.return,v)}}break;case 3:if(qe(t,e),lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(v){Z(e,e.return,v)}break;case 4:qe(t,e),lt(e);break;case 13:qe(t,e),lt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Kc=J())),r&4&&Id(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||d,qe(t,e),xe=u):qe(t,e),lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(E=e,d=e.child;d!==null;){for(p=E=d;E!==null;){switch(f=E,x=f.child,f.tag){case 0:case 11:case 14:case 15:Lr(4,f,f.return);break;case 1:Un(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Z(r,n,v)}}break;case 5:Un(f,f.return);break;case 22:if(f.memoizedState!==null){Rd(p);continue}}x!==null?(x.return=f,E=x):Rd(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=ph("display",a))}catch(v){Z(e,e.return,v)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(v){Z(e,e.return,v)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:qe(t,e),lt(e),r&4&&Id(e);break;case 21:break;default:qe(t,e),lt(e)}}function lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Bm(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hr(i,""),r.flags&=-33);var s=Ed(e);Tl(e,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Ed(e);Al(e,l,a);break;default:throw Error(_(161))}}catch(c){Z(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pv(e,t,n){E=e,Om(e)}function Om(e,t,n){for(var r=(e.mode&1)!==0;E!==null;){var i=E,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Vi;if(!a){var l=i.alternate,c=l!==null&&l.memoizedState!==null||xe;l=Vi;var u=xe;if(Vi=a,(xe=c)&&!u)for(E=i;E!==null;)a=E,c=a.child,a.tag===22&&a.memoizedState!==null?Dd(i):c!==null?(c.return=a,E=c):Dd(i);for(;s!==null;)E=s,Om(s),s=s.sibling;E=i,Vi=l,xe=u}Nd(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,E=s):Nd(e)}}function Nd(e){for(;E!==null;){var t=E;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||Co(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&gd(t,s,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}gd(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&Xr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}xe||t.flags&512&&Cl(t)}catch(f){Z(t,t.return,f)}}if(t===e){E=null;break}if(n=t.sibling,n!==null){n.return=t.return,E=n;break}E=t.return}}function Rd(e){for(;E!==null;){var t=E;if(t===e){E=null;break}var n=t.sibling;if(n!==null){n.return=t.return,E=n;break}E=t.return}}function Dd(e){for(;E!==null;){var t=E;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Co(4,t)}catch(c){Z(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Z(t,i,c)}}var s=t.return;try{Cl(t)}catch(c){Z(t,s,c)}break;case 5:var a=t.return;try{Cl(t)}catch(c){Z(t,a,c)}}}catch(c){Z(t,t.return,c)}if(t===e){E=null;break}var l=t.sibling;if(l!==null){l.return=t.return,E=l;break}E=t.return}}var fv=Math.ceil,Zs=Tt.ReactCurrentDispatcher,Hc=Tt.ReactCurrentOwner,Ge=Tt.ReactCurrentBatchConfig,z=0,ce=null,re=null,fe=0,Re=0,Hn=en(0),ae=0,oi=null,kn=0,Ao=0,Gc=0,Br=null,Ce=null,Kc=0,ar=1/0,vt=null,Js=!1,Pl=null,Ht=null,Oi=!1,Lt=null,eo=0,Fr=0,El=null,ks=-1,js=0;function be(){return z&6?J():ks!==-1?ks:ks=J()}function Gt(e){return e.mode&1?z&2&&fe!==0?fe&-fe:Qy.transition!==null?(js===0&&(js=_h()),js):(e=F,e!==0||(e=window.event,e=e===void 0?16:Nh(e.type)),e):1}function st(e,t,n,r){if(50<Fr)throw Fr=0,El=null,Error(_(185));hi(e,n,r),(!(z&2)||e!==ce)&&(e===ce&&(!(z&2)&&(Ao|=n),ae===4&&Mt(e,fe)),Ee(e,r),n===1&&z===0&&!(t.mode&1)&&(ar=J()+500,ko&&tn()))}function Ee(e,t){var n=e.callbackNode;Q0(e,t);var r=Ls(e,e===ce?fe:0);if(r===0)n!==null&&$u(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&$u(n),t===1)e.tag===0?Xy(Md.bind(null,e)):qh(Md.bind(null,e)),Hy(function(){!(z&6)&&tn()}),n=null;else{switch(Ch(r)){case 1:n=vc;break;case 4:n=kh;break;case 16:n=zs;break;case 536870912:n=jh;break;default:n=zs}n=Xm(n,Wm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Wm(e,t){if(ks=-1,js=0,z&6)throw Error(_(327));var n=e.callbackNode;if(er()&&e.callbackNode!==n)return null;var r=Ls(e,e===ce?fe:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=to(e,r);else{t=r;var i=z;z|=2;var s=Um();(ce!==e||fe!==t)&&(vt=null,ar=J()+500,gn(e,t));do try{gv();break}catch(l){$m(e,l)}while(!0);Nc(),Zs.current=s,z=i,re!==null?t=0:(ce=null,fe=0,t=ae)}if(t!==0){if(t===2&&(i=rl(e),i!==0&&(r=i,t=Il(e,i))),t===1)throw n=oi,gn(e,0),Mt(e,r),Ee(e,J()),n;if(t===6)Mt(e,r);else{if(i=e.current.alternate,!(r&30)&&!hv(i)&&(t=to(e,r),t===2&&(s=rl(e),s!==0&&(r=s,t=Il(e,s))),t===1))throw n=oi,gn(e,0),Mt(e,r),Ee(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(_(345));case 2:cn(e,Ce,vt);break;case 3:if(Mt(e,r),(r&130023424)===r&&(t=Kc+500-J(),10<t)){if(Ls(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){be(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=dl(cn.bind(null,e,Ce,vt),t);break}cn(e,Ce,vt);break;case 4:if(Mt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-it(r);s=1<<a,a=t[a],a>i&&(i=a),r&=~s}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*fv(r/1960))-r,10<r){e.timeoutHandle=dl(cn.bind(null,e,Ce,vt),r);break}cn(e,Ce,vt);break;case 5:cn(e,Ce,vt);break;default:throw Error(_(329))}}}return Ee(e,J()),e.callbackNode===n?Wm.bind(null,e):null}function Il(e,t){var n=Br;return e.current.memoizedState.isDehydrated&&(gn(e,t).flags|=256),e=to(e,t),e!==2&&(t=Ce,Ce=n,t!==null&&Nl(t)),e}function Nl(e){Ce===null?Ce=e:Ce.push.apply(Ce,e)}function hv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!at(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mt(e,t){for(t&=~Gc,t&=~Ao,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Md(e){if(z&6)throw Error(_(327));er();var t=Ls(e,0);if(!(t&1))return Ee(e,J()),null;var n=to(e,t);if(e.tag!==0&&n===2){var r=rl(e);r!==0&&(t=r,n=Il(e,r))}if(n===1)throw n=oi,gn(e,0),Mt(e,t),Ee(e,J()),n;if(n===6)throw Error(_(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cn(e,Ce,vt),Ee(e,J()),null}function Yc(e,t){var n=z;z|=1;try{return e(t)}finally{z=n,z===0&&(ar=J()+500,ko&&tn())}}function jn(e){Lt!==null&&Lt.tag===0&&!(z&6)&&er();var t=z;z|=1;var n=Ge.transition,r=F;try{if(Ge.transition=null,F=1,e)return e()}finally{F=r,Ge.transition=n,z=t,!(z&6)&&tn()}}function Xc(){Re=Hn.current,G(Hn)}function gn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Uy(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(Pc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ws();break;case 3:sr(),G(Te),G(ye),Bc();break;case 5:Lc(r);break;case 4:sr();break;case 13:G(Y);break;case 19:G(Y);break;case 10:Rc(r.type._context);break;case 22:case 23:Xc()}n=n.return}if(ce=e,re=e=Kt(e.current,null),fe=Re=t,ae=0,oi=null,Gc=Ao=kn=0,Ce=Br=null,pn!==null){for(t=0;t<pn.length;t++)if(n=pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}pn=null}return e}function $m(e,t){do{var n=re;try{if(Nc(),ws.current=qs,Qs){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qs=!1}if(bn=0,le=oe=X=null,zr=!1,ri=0,Hc.current=null,n===null||n.return===null){ae=1,oi=t,re=null;break}e:{var s=e,a=n.return,l=n,c=t;if(t=fe,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=bd(a);if(x!==null){x.flags&=-257,kd(x,a,l,s,t),x.mode&1&&Sd(s,u,t),t=x,c=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(c),t.updateQueue=v}else y.add(c);break e}else{if(!(t&1)){Sd(s,u,t),Qc();break e}c=Error(_(426))}}else if(K&&l.mode&1){var S=bd(a);if(S!==null){!(S.flags&65536)&&(S.flags|=256),kd(S,a,l,s,t),Ec(or(c,l));break e}}s=c=or(c,l),ae!==4&&(ae=2),Br===null?Br=[s]:Br.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Cm(s,c,t);md(s,m);break e;case 1:l=c;var h=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Ht===null||!Ht.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=Am(s,l,t);md(s,w);break e}}s=s.return}while(s!==null)}Gm(n)}catch(k){t=k,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Um(){var e=Zs.current;return Zs.current=qs,e===null?qs:e}function Qc(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(kn&268435455)&&!(Ao&268435455)||Mt(ce,fe)}function to(e,t){var n=z;z|=2;var r=Um();(ce!==e||fe!==t)&&(vt=null,gn(e,t));do try{mv();break}catch(i){$m(e,i)}while(!0);if(Nc(),z=n,Zs.current=r,re!==null)throw Error(_(261));return ce=null,fe=0,ae}function mv(){for(;re!==null;)Hm(re)}function gv(){for(;re!==null&&!O0();)Hm(re)}function Hm(e){var t=Ym(e.alternate,e,Re);e.memoizedProps=e.pendingProps,t===null?Gm(e):re=t,Hc.current=null}function Gm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cv(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=lv(n,t,Re),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function cn(e,t,n){var r=F,i=Ge.transition;try{Ge.transition=null,F=1,xv(e,t,n,r)}finally{Ge.transition=i,F=r}return null}function xv(e,t,n,r){do er();while(Lt!==null);if(z&6)throw Error(_(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(q0(e,s),e===ce&&(re=ce=null,fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oi||(Oi=!0,Xm(zs,function(){return er(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ge.transition,Ge.transition=null;var a=F;F=1;var l=z;z|=4,Hc.current=null,dv(e,n),Vm(n,e),Ly(cl),Bs=!!ll,cl=ll=null,e.current=n,pv(n),W0(),z=l,F=a,Ge.transition=s}else e.current=n;if(Oi&&(Oi=!1,Lt=e,eo=i),s=e.pendingLanes,s===0&&(Ht=null),H0(n.stateNode),Ee(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Js)throw Js=!1,e=Pl,Pl=null,e;return eo&1&&e.tag!==0&&er(),s=e.pendingLanes,s&1?e===El?Fr++:(Fr=0,El=e):Fr=0,tn(),null}function er(){if(Lt!==null){var e=Ch(eo),t=Ge.transition,n=F;try{if(Ge.transition=null,F=16>e?16:e,Lt===null)var r=!1;else{if(e=Lt,Lt=null,eo=0,z&6)throw Error(_(331));var i=z;for(z|=4,E=e.current;E!==null;){var s=E,a=s.child;if(E.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(E=u;E!==null;){var d=E;switch(d.tag){case 0:case 11:case 15:Lr(8,d,s)}var p=d.child;if(p!==null)p.return=d,E=p;else for(;E!==null;){d=E;var f=d.sibling,x=d.return;if(Lm(d),d===u){E=null;break}if(f!==null){f.return=x,E=f;break}E=x}}}var y=s.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var S=v.sibling;v.sibling=null,v=S}while(v!==null)}}E=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,E=a;else e:for(;E!==null;){if(s=E,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Lr(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,E=m;break e}E=s.return}}var h=e.current;for(E=h;E!==null;){a=E;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,E=g;else e:for(a=h;E!==null;){if(l=E,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Co(9,l)}}catch(k){Z(l,l.return,k)}if(l===a){E=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,E=w;break e}E=l.return}}if(z=i,tn(),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(yo,e)}catch{}r=!0}return r}finally{F=n,Ge.transition=t}}return!1}function zd(e,t,n){t=or(n,t),t=Cm(e,t,1),e=Ut(e,t,1),t=be(),e!==null&&(hi(e,1,t),Ee(e,t))}function Z(e,t,n){if(e.tag===3)zd(e,e,n);else for(;t!==null;){if(t.tag===3){zd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ht===null||!Ht.has(r))){e=or(n,e),e=Am(t,e,1),t=Ut(t,e,1),e=be(),t!==null&&(hi(t,1,e),Ee(t,e));break}}t=t.return}}function yv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=be(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(fe&n)===n&&(ae===4||ae===3&&(fe&130023424)===fe&&500>J()-Kc?gn(e,0):Gc|=n),Ee(e,t)}function Km(e,t){t===0&&(e.mode&1?(t=Ii,Ii<<=1,!(Ii&130023424)&&(Ii=4194304)):t=1);var n=be();e=Ct(e,t),e!==null&&(hi(e,t,n),Ee(e,n))}function vv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Km(e,n)}function wv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(t),Km(e,n)}var Ym;Ym=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Te.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,av(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,K&&t.flags&1048576&&Zh(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bs(e,t),e=t.pendingProps;var i=nr(t,ye.current);Jn(t,n),i=Vc(null,t,r,e,i,n);var s=Oc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Pe(r)?(s=!0,$s(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mc(t),i.updater=_o,t.stateNode=i,i._reactInternals=t,yl(t,r,e,n),t=Sl(null,t,r,!0,s,n)):(t.tag=0,K&&s&&Tc(t),ve(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=bv(r),e=tt(r,e),i){case 0:t=wl(null,t,r,e,n);break e;case 1:t=Cd(null,t,r,e,n);break e;case 11:t=jd(null,t,r,e,n);break e;case 14:t=_d(null,t,r,tt(r.type,e),n);break e}throw Error(_(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),wl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),Cd(e,t,r,i,n);case 3:e:{if(Im(t),e===null)throw Error(_(387));r=t.pendingProps,s=t.memoizedState,i=s.element,im(e,t),Ys(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=or(Error(_(423)),t),t=Ad(e,t,r,n,i);break e}else if(r!==i){i=or(Error(_(424)),t),t=Ad(e,t,r,n,i);break e}else for(De=$t(t.stateNode.containerInfo.firstChild),Me=t,K=!0,rt=null,n=nm(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(rr(),r===i){t=At(e,t,n);break e}ve(e,t,r,n)}t=t.child}return t;case 5:return sm(t),e===null&&ml(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,a=i.children,ul(r,i)?a=null:s!==null&&ul(r,s)&&(t.flags|=32),Em(e,t),ve(e,t,a,n),t.child;case 6:return e===null&&ml(t),null;case 13:return Nm(e,t,n);case 4:return zc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ir(t,null,r,n):ve(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),jd(e,t,r,i,n);case 7:return ve(e,t,t.pendingProps,n),t.child;case 8:return ve(e,t,t.pendingProps.children,n),t.child;case 12:return ve(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,U(Gs,r._currentValue),r._currentValue=a,s!==null)if(at(s.value,a)){if(s.children===i.children&&!Te.current){t=At(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=kt(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),gl(s.return,n,t),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===t.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(_(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),gl(a,n,t),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===t){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}ve(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Jn(t,n),i=Ye(i),r=r(i),t.flags|=1,ve(e,t,r,n),t.child;case 14:return r=t.type,i=tt(r,t.pendingProps),i=tt(r.type,i),_d(e,t,r,i,n);case 15:return Tm(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),bs(e,t),t.tag=1,Pe(r)?(e=!0,$s(t)):e=!1,Jn(t,n),_m(t,r,i),yl(t,r,i,n),Sl(null,t,r,!0,e,n);case 19:return Rm(e,t,n);case 22:return Pm(e,t,n)}throw Error(_(156,t.tag))};function Xm(e,t){return bh(e,t)}function Sv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ue(e,t,n,r){return new Sv(e,t,n,r)}function qc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bv(e){if(typeof e=="function")return qc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===gc)return 11;if(e===xc)return 14}return 2}function Kt(e,t){var n=e.alternate;return n===null?(n=Ue(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function _s(e,t,n,r,i,s){var a=2;if(r=e,typeof e=="function")qc(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Mn:return xn(n.children,i,s,t);case mc:a=8,i|=8;break;case Wa:return e=Ue(12,n,t,i|2),e.elementType=Wa,e.lanes=s,e;case $a:return e=Ue(13,n,t,i),e.elementType=$a,e.lanes=s,e;case Ua:return e=Ue(19,n,t,i),e.elementType=Ua,e.lanes=s,e;case sh:return To(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case rh:a=10;break e;case ih:a=9;break e;case gc:a=11;break e;case xc:a=14;break e;case Nt:a=16,r=null;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=Ue(a,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function xn(e,t,n,r){return e=Ue(7,e,r,t),e.lanes=n,e}function To(e,t,n,r){return e=Ue(22,e,r,t),e.elementType=sh,e.lanes=n,e.stateNode={isHidden:!1},e}function da(e,t,n){return e=Ue(6,e,null,t),e.lanes=n,e}function pa(e,t,n){return t=Ue(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function kv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Go(0),this.expirationTimes=Go(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Go(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Zc(e,t,n,r,i,s,a,l,c){return e=new kv(e,t,n,l,c),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ue(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mc(s),e}function jv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Qm(e){if(!e)return Qt;e=e._reactInternals;e:{if(An(e)!==e||e.tag!==1)throw Error(_(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Pe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(_(171))}if(e.tag===1){var n=e.type;if(Pe(n))return Qh(e,n,t)}return t}function qm(e,t,n,r,i,s,a,l,c){return e=Zc(n,r,!0,e,i,s,a,l,c),e.context=Qm(null),n=e.current,r=be(),i=Gt(n),s=kt(r,i),s.callback=t??null,Ut(n,s,i),e.current.lanes=i,hi(e,i,r),Ee(e,r),e}function Po(e,t,n,r){var i=t.current,s=be(),a=Gt(i);return n=Qm(n),t.context===null?t.context=n:t.pendingContext=n,t=kt(s,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Ut(i,t,a),e!==null&&(st(e,i,a,s),vs(e,i,a)),a}function no(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ld(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Jc(e,t){Ld(e,t),(e=e.alternate)&&Ld(e,t)}function _v(){return null}var Zm=typeof reportError=="function"?reportError:function(e){console.error(e)};function eu(e){this._internalRoot=e}Eo.prototype.render=eu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(_(409));Po(e,t,null,null)};Eo.prototype.unmount=eu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){Po(null,e,null,null)}),t[_t]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ph();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Dt.length&&t!==0&&t<Dt[n].priority;n++);Dt.splice(n,0,e),n===0&&Ih(e)}};function tu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Io(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Bd(){}function Cv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=no(a);s.call(u)}}var a=qm(t,r,e,0,null,!1,!1,"",Bd);return e._reactRootContainer=a,e[_t]=a.current,Zr(e.nodeType===8?e.parentNode:e),jn(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=no(c);l.call(u)}}var c=Zc(e,0,!1,null,null,!1,!1,"",Bd);return e._reactRootContainer=c,e[_t]=c.current,Zr(e.nodeType===8?e.parentNode:e),jn(function(){Po(t,c,n,r)}),c}function No(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var c=no(a);l.call(c)}}Po(t,a,e,i)}else a=Cv(n,t,e,i,r);return no(a)}Ah=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(wc(t,n|1),Ee(t,J()),!(z&6)&&(ar=J()+500,tn()))}break;case 13:jn(function(){var r=Ct(e,1);if(r!==null){var i=be();st(r,e,1,i)}}),Jc(e,1)}};Sc=function(e){if(e.tag===13){var t=Ct(e,134217728);if(t!==null){var n=be();st(t,e,134217728,n)}Jc(e,134217728)}};Th=function(e){if(e.tag===13){var t=Gt(e),n=Ct(e,t);if(n!==null){var r=be();st(n,e,t,r)}Jc(e,t)}};Ph=function(){return F};Eh=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};el=function(e,t,n){switch(t){case"input":if(Ka(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=bo(r);if(!i)throw Error(_(90));ah(r),Ka(r,i)}}}break;case"textarea":ch(e,n);break;case"select":t=n.value,t!=null&&Xn(e,!!n.multiple,t,!1)}};gh=Yc;xh=jn;var Av={usingClientEntryPoint:!1,Events:[gi,Fn,bo,hh,mh,Yc]},jr={findFiberByHostInstance:dn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tv={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wh(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||_v,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{yo=Wi.inject(Tv),ft=Wi}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!tu(t))throw Error(_(200));return jv(e,t,null,n)};Be.createRoot=function(e,t){if(!tu(e))throw Error(_(299));var n=!1,r="",i=Zm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Zc(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,Zr(e.nodeType===8?e.parentNode:e),new eu(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):(e=Object.keys(e).join(","),Error(_(268,e)));return e=wh(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return jn(e)};Be.hydrate=function(e,t,n){if(!Io(t))throw Error(_(200));return No(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!tu(e))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Zm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=qm(t,null,e,1,n??null,i,!1,s,a),e[_t]=t.current,Zr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Eo(t)};Be.render=function(e,t,n){if(!Io(t))throw Error(_(200));return No(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!Io(e))throw Error(_(40));return e._reactRootContainer?(jn(function(){No(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Be.unstable_batchedUpdates=Yc;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Io(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return No(e,t,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Jm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jm)}catch(e){console.error(e)}}Jm(),Jf.exports=Be;var Pv=Jf.exports,Fd=Pv;Va.createRoot=Fd.createRoot,Va.hydrateRoot=Fd.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(null,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const Vd="popstate";function Ev(e){e===void 0&&(e={});function t(r,i){let{pathname:s,search:a,hash:l}=r.location;return Rl("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:ro(i)}return Nv(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function nu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Iv(){return Math.random().toString(36).substr(2,8)}function Od(e,t){return{usr:e.state,key:e.key,idx:t}}function Rl(e,t,n,r){return n===void 0&&(n=null),ai({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fr(t):t,{state:n,key:t&&t.key||r||Iv()})}function ro(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Nv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Bt.Pop,c=null,u=d();u==null&&(u=0,a.replaceState(ai({},a.state,{idx:u}),""));function d(){return(a.state||{idx:null}).idx}function p(){l=Bt.Pop;let S=d(),m=S==null?null:S-u;u=S,c&&c({action:l,location:v.location,delta:m})}function f(S,m){l=Bt.Push;let h=Rl(v.location,S,m);u=d()+1;let g=Od(h,u),w=v.createHref(h);try{a.pushState(g,"",w)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;i.location.assign(w)}s&&c&&c({action:l,location:v.location,delta:1})}function x(S,m){l=Bt.Replace;let h=Rl(v.location,S,m);u=d();let g=Od(h,u),w=v.createHref(h);a.replaceState(g,"",w),s&&c&&c({action:l,location:v.location,delta:0})}function y(S){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof S=="string"?S:ro(S);return h=h.replace(/ $/,"%20"),ie(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let v={get action(){return l},get location(){return e(i,a)},listen(S){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Vd,p),c=S,()=>{i.removeEventListener(Vd,p),c=null}},createHref(S){return t(i,S)},createURL:y,encodeLocation(S){let m=y(S);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:x,go(S){return a.go(S)}};return v}var Wd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Wd||(Wd={}));function Rv(e,t,n){return n===void 0&&(n="/"),Dv(e,t,n)}function Dv(e,t,n,r){let i=typeof t=="string"?fr(t):t,s=ru(i.pathname||"/",n);if(s==null)return null;let a=eg(e);Mv(a);let l=null,c=Kv(s);for(let u=0;l==null&&u<a.length;++u)l=Uv(a[u],c);return l}function eg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let c={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};c.relativePath.startsWith("/")&&(ie(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Yt([r,c.relativePath]),d=n.concat(c);s.children&&s.children.length>0&&(ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),eg(s.children,t,d,u)),!(s.path==null&&!s.index)&&t.push({path:u,score:Wv(u,s.index),routesMeta:d})};return e.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let c of tg(s.path))i(s,a,c)}),t}function tg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=tg(r.join("/")),l=[];return l.push(...a.map(c=>c===""?s:[s,c].join("/"))),i&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Mv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$v(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zv=/^:[\w-]+$/,Lv=3,Bv=2,Fv=1,Vv=10,Ov=-2,$d=e=>e==="*";function Wv(e,t){let n=e.split("/"),r=n.length;return n.some($d)&&(r+=Ov),t&&(r+=Bv),n.filter(i=>!$d(i)).reduce((i,s)=>i+(zv.test(s)?Lv:s===""?Fv:Vv),r)}function $v(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Uv(e,t,n){let{routesMeta:r}=e,i={},s="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=s==="/"?t:t.slice(s.length)||"/",p=Hv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!p)return null;Object.assign(i,p.params),a.push({params:i,pathname:Yt([s,p.pathname]),pathnameBase:Zv(Yt([s,p.pathnameBase])),route:f}),p.pathnameBase!=="/"&&(s=Yt([s,p.pathnameBase]))}return a}function Hv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Gv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:f,isOptional:x}=d;if(f==="*"){let v=l[p]||"";a=s.slice(0,s.length-v.length).replace(/(.)\/+$/,"$1")}const y=l[p];return x&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:a,pattern:e}}function Gv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),nu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Kv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return nu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ru(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Yv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xv=e=>Yv.test(e);function Qv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?fr(e):e,s;if(n)if(Xv(n))s=n;else{if(n.includes("//")){let a=n;n=ig(n),nu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(a+" -> "+n))}n.startsWith("/")?s=Ud(n.substring(1),"/"):s=Ud(n,t)}else s=t;return{pathname:s,search:Jv(r),hash:e1(i)}}function Ud(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function fa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function ng(e,t){let n=qv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function rg(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=fr(e):(i=ai({},e),ie(!i.pathname||!i.pathname.includes("?"),fa("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),fa("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),fa("#","search","hash",i)));let s=e===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let p=t.length-1;if(!r&&a.startsWith("..")){let f=a.split("/");for(;f[0]==="..";)f.shift(),p-=1;i.pathname=f.join("/")}l=p>=0?t[p]:"/"}let c=Qv(i,l),u=a&&a!=="/"&&a.endsWith("/"),d=(s||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const ig=e=>e.replace(/\/\/+/g,"/"),Yt=e=>ig(e.join("/")),Zv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Jv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,e1=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function t1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const sg=["post","put","patch","delete"];new Set(sg);const n1=["get",...sg];new Set(n1);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(null,arguments)}const iu=b.createContext(null),r1=b.createContext(null),Tn=b.createContext(null),Ro=b.createContext(null),nn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),og=b.createContext(null);function i1(e,t){let{relative:n}=t===void 0?{}:t;yi()||ie(!1);let{basename:r,navigator:i}=b.useContext(Tn),{hash:s,pathname:a,search:l}=lg(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Yt([r,a])),i.createHref({pathname:c,search:l,hash:s})}function yi(){return b.useContext(Ro)!=null}function Do(){return yi()||ie(!1),b.useContext(Ro).location}function ag(e){b.useContext(Tn).static||b.useLayoutEffect(e)}function s1(){let{isDataRoute:e}=b.useContext(nn);return e?v1():o1()}function o1(){yi()||ie(!1);let e=b.useContext(iu),{basename:t,future:n,navigator:r}=b.useContext(Tn),{matches:i}=b.useContext(nn),{pathname:s}=Do(),a=JSON.stringify(ng(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return ag(()=>{l.current=!0}),b.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=rg(u,JSON.parse(a),s,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Yt([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,a,s,e])}function a1(){let{matches:e}=b.useContext(nn),t=e[e.length-1];return t?t.params:{}}function lg(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(Tn),{matches:i}=b.useContext(nn),{pathname:s}=Do(),a=JSON.stringify(ng(i,r.v7_relativeSplatPath));return b.useMemo(()=>rg(e,JSON.parse(a),s,n==="path"),[e,a,s,n])}function l1(e,t){return c1(e,t)}function c1(e,t,n,r){yi()||ie(!1);let{navigator:i}=b.useContext(Tn),{matches:s}=b.useContext(nn),a=s[s.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Do(),d;if(t){var p;let S=typeof t=="string"?fr(t):t;c==="/"||(p=S.pathname)!=null&&p.startsWith(c)||ie(!1),d=S}else d=u;let f=d.pathname||"/",x=f;if(c!=="/"){let S=c.replace(/^\//,"").split("/");x="/"+f.replace(/^\//,"").split("/").slice(S.length).join("/")}let y=Rv(e,{pathname:x}),v=h1(y&&y.map(S=>Object.assign({},S,{params:Object.assign({},l,S.params),pathname:Yt([c,i.encodeLocation?i.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?c:Yt([c,i.encodeLocation?i.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),s,n,r);return t&&v?b.createElement(Ro.Provider,{value:{location:li({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:Bt.Pop}},v):v}function u1(){let e=y1(),t=t1(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const d1=b.createElement(u1,null);class p1 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(nn.Provider,{value:this.props.routeContext},b.createElement(og.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function f1(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(iu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(nn.Provider,{value:t},r)}function h1(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var s;if(!n)return null;if(n.errors)e=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=a.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||ie(!1),a=a.slice(0,Math.min(a.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<a.length;d++){let p=a[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:f,errors:x}=n,y=p.route.loader&&f[p.route.id]===void 0&&(!x||x[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((d,p,f)=>{let x,y=!1,v=null,S=null;n&&(x=l&&p.route.id?l[p.route.id]:void 0,v=p.route.errorElement||d1,c&&(u<0&&f===0?(w1("route-fallback"),y=!0,S=null):u===f&&(y=!0,S=p.route.hydrateFallbackElement||null)));let m=t.concat(a.slice(0,f+1)),h=()=>{let g;return x?g=v:y?g=S:p.route.Component?g=b.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=d,b.createElement(f1,{match:p,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||f===0)?b.createElement(p1,{location:n.location,revalidation:n.revalidation,component:v,error:x,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var cg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(cg||{}),ug=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(ug||{});function m1(e){let t=b.useContext(iu);return t||ie(!1),t}function g1(e){let t=b.useContext(r1);return t||ie(!1),t}function x1(e){let t=b.useContext(nn);return t||ie(!1),t}function dg(e){let t=x1(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function y1(){var e;let t=b.useContext(og),n=g1(),r=dg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function v1(){let{router:e}=m1(cg.UseNavigateStable),t=dg(ug.UseNavigateStable),n=b.useRef(!1);return ag(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,li({fromRouteId:t},s)))},[e,t])}const Hd={};function w1(e,t,n){Hd[e]||(Hd[e]=!0)}function S1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function B(e){ie(!1)}function b1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Bt.Pop,navigator:s,static:a=!1,future:l}=e;yi()&&ie(!1);let c=t.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:c,navigator:s,static:a,future:li({v7_relativeSplatPath:!1},l)}),[c,l,s,a]);typeof r=="string"&&(r=fr(r));let{pathname:d="/",search:p="",hash:f="",state:x=null,key:y="default"}=r,v=b.useMemo(()=>{let S=ru(d,c);return S==null?null:{location:{pathname:S,search:p,hash:f,state:x,key:y},navigationType:i}},[c,d,p,f,x,y,i]);return v==null?null:b.createElement(Tn.Provider,{value:u},b.createElement(Ro.Provider,{children:n,value:v}))}function k1(e){let{children:t,location:n}=e;return l1(Dl(t),n)}new Promise(()=>{});function Dl(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let s=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Dl(r.props.children,s));return}r.type!==B&&ie(!1),!r.props.index||!r.props.children||ie(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Dl(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(null,arguments)}function j1(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function _1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function C1(e,t){return e.button===0&&(!t||t==="_self")&&!_1(e)}const A1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],T1="6";try{window.__reactRouterVersion=T1}catch{}const P1="startTransition",Gd=y0[P1];function E1(e){let{basename:t,children:n,future:r,window:i}=e,s=b.useRef();s.current==null&&(s.current=Ev({window:i,v5Compat:!0}));let a=s.current,[l,c]=b.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},d=b.useCallback(p=>{u&&Gd?Gd(()=>c(p)):c(p)},[c,u]);return b.useLayoutEffect(()=>a.listen(d),[a,d]),b.useEffect(()=>S1(r),[r]),b.createElement(b1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const I1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",N1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,O=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:s,replace:a,state:l,target:c,to:u,preventScrollReset:d,viewTransition:p}=t,f=j1(t,A1),{basename:x}=b.useContext(Tn),y,v=!1;if(typeof u=="string"&&N1.test(u)&&(y=u,I1))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),k=ru(w.pathname,x);w.origin===g.origin&&k!=null?u=k+w.search+w.hash:v=!0}catch{}let S=i1(u,{relative:i}),m=R1(u,{replace:a,state:l,target:c,preventScrollReset:d,relative:i,viewTransition:p});function h(g){r&&r(g),g.defaultPrevented||m(g)}return b.createElement("a",Ml({},f,{href:y||S,onClick:v||s?r:h,ref:n,target:c}))});var Kd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Kd||(Kd={}));var Yd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Yd||(Yd={}));function R1(e,t){let{target:n,replace:r,state:i,preventScrollReset:s,relative:a,viewTransition:l}=t===void 0?{}:t,c=s1(),u=Do(),d=lg(e,{relative:a});return b.useCallback(p=>{if(C1(p,n)){p.preventDefault();let f=r!==void 0?r:ro(u)===ro(d);c(e,{replace:f,state:i,preventScrollReset:s,relative:a,viewTransition:l})}},[u,c,d,r,i,n,e,s,a,l])}const ha=[{label:"Home",to:"/"},{label:"About",to:"/about",featured:["Meet Our Founders","Industry operators, not just trainers.","/leadership"],groups:[{title:"Our Story",links:[["About Elevox","Why we built this academy","/about"],["Leadership & Founders","Real experts, real experience","/leadership"],["Founder Profiles","The people behind the method","/founders"],["Academy Tour","Facilities and learning spaces","/tour"]]},{title:"Why Elevox",links:[["Vision & Mission","Where intelligence meets purpose","/about/vision"],["The AI Skills Gap","Why Tier-2 cities need AI","/why-ai/skills-gap"],["Our Difference","Outcomes, not certificates","/about/difference"],["Contact & Visit","Come see us in Nagpur","/contact"]]}]},{label:"Programmes",to:"/programmes",featured:["View All Programmes","Compare tracks, formats, and career outcomes.","/programmes"],groups:[{title:"Foundational",links:[["Elevox Foundations","AI literacy for everyone","/programmes/foundations"],["AI for Business Analysts","Data-driven decisions","/programmes/business-analysts"],["AI for Developers","Build AI-native products","/programmes/developers"]]},{title:"Domain Tracks",links:[["AI for Marketing","Growth and automation","/programmes/marketing"],["AI for HR","People intelligence","/programmes/hr"],["AI for Design","Creative AI workflows","/programmes/design"],["AI for Operations","Process and supply chain AI","/programmes/operations"]]},{title:"Professional",links:[["Professional Upskilling","30-90 day intensives","/programmes/upskilling"],["Corporate Training","Team and leadership tracks","/corporate"],["Campus Programmes","For colleges and institutes","/colleges"]]}]},{label:"For Students",to:"/students",featured:["Start Your AI Career","A cohort built around employability.","/admissions"],groups:[{title:"Learn",links:[["All Programmes","Browse by domain and level","/programmes"],["Batch Calendar","Upcoming cohort dates","/admissions/calendar"],["Workshops & Events","Masterclasses and bootcamps","/workshops"],["Academy Tour","See where you will learn","/tour"]]},{title:"Get Placed",links:[["Career Accelerator","Resume, LinkedIn, interviews","/career"],["Placement Outcomes","Where alumni work","/career/outcomes"],["Portfolio Building","Real projects, real proof","/career/portfolio"],["Admissions","Fees, scholarships, process","/admissions"]]}]},{label:"For Business",to:"/business",featured:["Invite Elevox to Your Campus","For colleges, MBA institutes, and universities.","/colleges"],groups:[{title:"Organisations",links:[["AI Readiness Programme","Audit and upskill your team","/corporate/readiness"],["Corporate Workshops","Tailored for your context","/corporate/workshops"],["Leadership AI Sessions","For C-suite and managers","/corporate/leadership"],["AI Transformation Consulting","End-to-end advisory","/corporate/consulting"]]},{title:"Colleges & Institutes",links:[["Campus Workshops","Student-facing AI sessions","/colleges/workshops"],["Faculty Development","Train the trainers","/colleges/faculty"],["Curriculum Partnerships","Embed AI in your syllabus","/colleges/curriculum"],["Placement Readiness","Make students job-ready","/colleges/placement"]]}]},{label:"Why AI",to:"/why-ai",featured:["AI is a Business Skill","Understand where AI creates leverage in your industry.","/why-ai"],groups:[{title:"Industries",links:[["AI in Healthcare","Diagnosis, care, and operations","/why-ai/healthcare"],["AI in Manufacturing","Quality, maintenance, supply chain","/why-ai/manufacturing"],["AI in Banking & Finance","Risk, fraud, customer intelligence","/why-ai/banking"],["AI in HR & Recruitment","Hiring and people analytics","/why-ai/hr"]]},{title:"More Industries",links:[["AI in Marketing & Sales","Personalization and growth","/why-ai/marketing"],["AI in Retail","Demand, inventory, customer experience","/why-ai/retail"],["AI in Logistics","Routing and operations","/why-ai/logistics"],["AI in Education","Learning and assessment","/why-ai/education"]]},{title:"Applied AI",links:[["AI in Pharma","Research and compliance","/why-ai/pharma"],["AI in Operations","Process intelligence","/why-ai/operations"]]}]},{label:"Insights",to:"/insights",compact:!0,groups:[{title:"Read",links:[["AI Trends & Reports","Market signals","/insights/trends"],["Founder Articles","Operator perspective","/insights/articles"],["Student Success Stories","Learner outcomes","/insights/stories"],["Case Studies","Transformation proof","/insights/cases"],["Webinar Recordings","Watch sessions","/insights/webinars"],["Podcast Episodes","Listen and learn","/insights/podcast"]]}]}];function D1(){return o.jsxs(O,{to:"/",className:"elx-logo","aria-label":"Elevox AI Academy home",children:[o.jsx("span",{className:"elx-logo-mark",children:"E"}),o.jsxs("span",{className:"elx-logo-copy",children:[o.jsxs("strong",{children:["Elev",o.jsx("span",{children:"ox"})]}),o.jsx("small",{children:"AI Academy"})]})]})}function M1({item:e,open:t,onNavigate:n}){return e.groups?o.jsx("div",{className:`elx-mega ${t?"is-open":""}`,children:o.jsxs("div",{className:`elx-mega-inner ${e.compact?"is-compact":""}`,children:[o.jsx("div",{className:"elx-mega-groups",children:e.groups.map(r=>o.jsxs("div",{className:"elx-mega-group",children:[o.jsx("h3",{children:r.title}),r.links.map(([i,s,a])=>o.jsxs(O,{to:a,className:"elx-mega-link",onClick:n,children:[o.jsx("span",{children:i}),o.jsx("small",{children:s})]},a))]},r.title))}),e.featured&&o.jsxs(O,{to:e.featured[2],className:"elx-mega-feature",onClick:n,children:[o.jsx("span",{children:"Featured"}),o.jsx("strong",{children:e.featured[0]}),o.jsx("small",{children:e.featured[1]}),o.jsx("em",{children:"Explore ->"})]})]})}):null}function z1(){const[e,t]=b.useState(null),[n,r]=b.useState(!1),[i,s]=b.useState(!1),a=b.useRef(null);b.useEffect(()=>{const d=()=>s(window.scrollY>16);return window.addEventListener("scroll",d,{passive:!0}),d(),()=>window.removeEventListener("scroll",d)},[]),b.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]);const l=()=>{t(null),r(!1)},c=d=>{clearTimeout(a.current),t(d)},u=()=>{a.current=setTimeout(()=>t(null),140)};return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:L1}),o.jsx("header",{className:`elx-nav ${i?"is-scrolled":""}`,children:o.jsxs("div",{className:"elx-nav-inner",children:[o.jsx(D1,{}),o.jsx("nav",{className:"elx-desktop-nav","aria-label":"Main navigation",children:ha.map((d,p)=>{const f=!!d.groups;return o.jsx("div",{className:"elx-nav-item",onMouseEnter:()=>f&&c(p),onMouseLeave:u,children:f?o.jsxs("button",{className:`elx-nav-link ${e===p?"is-active":""}`,type:"button",onClick:()=>t(e===p?null:p),"aria-expanded":e===p,children:[d.label,o.jsx("span",{"aria-hidden":"true",children:"v"})]}):o.jsx(O,{to:d.to,className:"elx-nav-link",onClick:l,children:d.label})},d.label)})}),o.jsxs("div",{className:"elx-nav-actions",children:[o.jsx(O,{to:"/workshops",className:"elx-btn elx-btn-ghost",children:"Workshop"}),o.jsx(O,{to:"/admissions",className:"elx-btn elx-btn-primary",children:"Apply Now"}),o.jsxs("button",{className:"elx-menu-btn",type:"button",onClick:()=>r(d=>!d),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:[o.jsx("span",{}),o.jsx("span",{}),o.jsx("span",{})]})]})]})}),ha.map((d,p)=>o.jsx("div",{onMouseEnter:()=>c(p),onMouseLeave:u,children:o.jsx(M1,{item:d,open:e===p,onNavigate:l})},d.label)),o.jsxs("div",{className:`elx-mobile-panel ${n?"is-open":""}`,children:[ha.map(d=>{var p;return o.jsxs("details",{className:"elx-mobile-section",children:[o.jsxs("summary",{children:[o.jsx(O,{to:d.to,onClick:l,children:d.label}),d.groups&&o.jsx("span",{children:"+"})]}),(p=d.groups)==null?void 0:p.map(f=>o.jsxs("div",{className:"elx-mobile-group",children:[o.jsx("h3",{children:f.title}),f.links.map(([x,y,v])=>o.jsxs(O,{to:v,onClick:l,children:[o.jsx("strong",{children:x}),o.jsx("small",{children:y})]},v))]},f.title))]},d.label)}),o.jsxs("div",{className:"elx-mobile-actions",children:[o.jsx(O,{to:"/workshops",onClick:l,children:"Book Workshop"}),o.jsx(O,{to:"/admissions",onClick:l,children:"Apply Now"})]})]})]})}const L1=`
  .elx-nav {
    position: fixed;
    inset: 0 0 auto;
    height: 72px;
    z-index: 1000;
    background: rgba(8, 9, 13, 0.76);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px) saturate(1.35);
    font-family: Inter, system-ui, sans-serif;
  }

  .elx-nav.is-scrolled {
    background: rgba(8, 9, 13, 0.94);
    border-bottom-color: rgba(0, 212, 168, 0.18);
  }

  .elx-nav-inner {
    height: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
    gap: 30px;
  }

  .elx-logo {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: #f0f2f5;
    flex: 0 0 auto;
  }

  .elx-logo-mark {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 8px;
    color: #00d4a8;
    background: rgba(0, 212, 168, 0.1);
    border: 1px solid rgba(0, 212, 168, 0.28);
    font-family: "Space Grotesk", Inter, sans-serif;
    font-weight: 800;
    box-shadow: 0 0 32px rgba(0, 212, 168, 0.08);
  }

  .elx-logo-copy strong {
    display: block;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 22px;
    line-height: 1;
  }

  .elx-logo-copy strong span { color: #00d4a8; }

  .elx-logo-copy small {
    display: block;
    margin-top: 4px;
    color: rgba(240, 242, 245, 0.46);
    font-size: 9px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
  }

  .elx-desktop-nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
  }

  .elx-nav-link {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 0;
    border-radius: 8px;
    padding: 0 13px;
    color: rgba(240, 242, 245, 0.62);
    background: transparent;
    text-decoration: none;
    font: 600 14px Inter, system-ui, sans-serif;
    cursor: pointer;
  }

  .elx-nav-link:hover,
  .elx-nav-link.is-active {
    color: #f0f2f5;
    background: rgba(255, 255, 255, 0.045);
  }

  .elx-nav-link span {
    font-size: 11px;
    color: #00d4a8;
  }

  .elx-nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .elx-btn {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 0 18px;
    text-decoration: none;
    font: 700 14px Inter, system-ui, sans-serif;
  }

  .elx-btn-ghost {
    color: rgba(240, 242, 245, 0.7);
  }

  .elx-btn-primary {
    color: #031a14;
    background: #00d4a8;
  }

  .elx-mega {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    z-index: 999;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
    transition: opacity 0.22s ease, transform 0.22s ease;
    background: rgba(10, 11, 16, 0.97);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(24px);
  }

  .elx-mega.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .elx-mega-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 30px 24px 34px;
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 34px;
  }

  .elx-mega-inner.is-compact {
    max-width: 760px;
    grid-template-columns: 1fr;
  }

  .elx-mega-groups {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 28px;
  }

  .elx-mega-inner.is-compact .elx-mega-groups {
    grid-template-columns: 1fr;
  }

  .elx-mega-group h3,
  .elx-mobile-group h3 {
    margin: 0 0 12px;
    color: #00d4a8;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .elx-mega-link {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-radius: 8px;
    padding: 10px;
    color: rgba(240, 242, 245, 0.78);
    text-decoration: none;
  }

  .elx-mega-link:hover {
    background: rgba(0, 212, 168, 0.06);
    color: #f0f2f5;
  }

  .elx-mega-link span {
    font-size: 14px;
    font-weight: 700;
  }

  .elx-mega-link small {
    color: rgba(240, 242, 245, 0.36);
    line-height: 1.35;
  }

  .elx-mega-feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    padding-left: 30px;
    text-decoration: none;
  }

  .elx-mega-feature span {
    color: #00d4a8;
    font-size: 11px;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .elx-mega-feature strong {
    margin: 12px 0 10px;
    color: #f0f2f5;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 20px;
    line-height: 1.2;
  }

  .elx-mega-feature small {
    color: rgba(240, 242, 245, 0.5);
    line-height: 1.55;
  }

  .elx-mega-feature em {
    margin-top: 18px;
    color: #00d4a8;
    font-style: normal;
    font-weight: 800;
  }

  .elx-menu-btn {
    display: none;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    background: transparent;
    padding: 10px;
  }

  .elx-menu-btn span {
    display: block;
    height: 2px;
    margin: 4px 0;
    background: #f0f2f5;
  }

  .elx-mobile-panel {
    position: fixed;
    inset: 72px 0 0;
    z-index: 998;
    padding: 16px 20px 36px;
    overflow: auto;
    transform: translateX(100%);
    transition: transform 0.28s ease;
    background: rgba(8, 9, 13, 0.985);
    backdrop-filter: blur(20px);
  }

  .elx-mobile-panel.is-open {
    transform: translateX(0);
  }

  .elx-mobile-section {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 8px 0;
  }

  .elx-mobile-section summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    color: #f0f2f5;
    font-weight: 800;
    cursor: pointer;
  }

  .elx-mobile-section summary::-webkit-details-marker { display: none; }

  .elx-mobile-section summary a {
    color: inherit;
    text-decoration: none;
    padding: 12px 0;
  }

  .elx-mobile-group {
    padding: 8px 0 14px;
  }

  .elx-mobile-group a {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 9px 10px;
    border-radius: 8px;
    color: rgba(240, 242, 245, 0.76);
    text-decoration: none;
  }

  .elx-mobile-group small {
    color: rgba(240, 242, 245, 0.4);
  }

  .elx-mobile-actions {
    display: grid;
    gap: 10px;
    padding-top: 18px;
  }

  .elx-mobile-actions a {
    padding: 13px 16px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    color: #031a14;
    background: #00d4a8;
    font-weight: 800;
  }

  .elx-mobile-actions a:first-child {
    color: #f0f2f5;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.12);
  }

  @media (max-width: 1120px) {
    .elx-desktop-nav,
    .elx-btn {
      display: none;
    }

    .elx-nav-inner {
      justify-content: space-between;
    }

    .elx-menu-btn {
      display: block;
    }

    .elx-mega {
      display: none;
    }
  }

  @media (max-width: 520px) {
    .elx-nav { height: 64px; }
    .elx-mobile-panel { inset-top: 64px; }
    .elx-nav-inner { padding: 0 16px; }
    .elx-logo-mark { width: 36px; height: 36px; }
    .elx-logo-copy strong { font-size: 19px; }
    .elx-logo-copy small { display: none; }
  }
`,B1=()=>o.jsx("footer",{style:F1,children:o.jsxs("div",{style:V1,children:[o.jsxs("div",{style:O1,children:[o.jsxs("div",{style:$i,children:[o.jsx("h3",{style:W1,children:"Elevox AI Academy"}),o.jsx("p",{style:$1,children:"Empowering the next generation of AI leaders in Tier-2 cities. Where intelligence meets purpose."}),o.jsxs("div",{style:U1,children:[o.jsx("a",{href:"#",style:Ui,children:"LinkedIn"}),o.jsx("a",{href:"#",style:Ui,children:"Twitter"}),o.jsx("a",{href:"#",style:Ui,children:"YouTube"}),o.jsx("a",{href:"#",style:Ui,children:"Instagram"})]})]}),o.jsxs("div",{style:$i,children:[o.jsx("h4",{style:ma,children:"Programmes"}),o.jsx(O,{to:"/programmes/foundations",style:Oe,children:"Foundations"}),o.jsx(O,{to:"/programmes/marketing",style:Oe,children:"AI for Marketing"}),o.jsx(O,{to:"/programmes/hr",style:Oe,children:"AI for HR"}),o.jsx(O,{to:"/programmes/upskilling",style:Oe,children:"Professional Upskilling"})]}),o.jsxs("div",{style:$i,children:[o.jsx("h4",{style:ma,children:"Company"}),o.jsx(O,{to:"/aboutus",style:Oe,children:"About Us"}),o.jsx(O,{to:"/leadership",style:Oe,children:"Leadership"}),o.jsx(O,{to:"/contact",style:Oe,children:"Contact"}),o.jsx(O,{to:"/career",style:Oe,children:"Careers"})]}),o.jsxs("div",{style:$i,children:[o.jsx("h4",{style:ma,children:"Support"}),o.jsx(O,{to:"/admissions",style:Oe,children:"Admissions"}),o.jsx(O,{to:"/workshops",style:Oe,children:"Workshops"}),o.jsx(O,{to:"/insights",style:Oe,children:"Insights"}),o.jsx(O,{to:"/tour",style:Oe,children:"Academy Tour"})]})]}),o.jsxs("div",{style:H1,children:[o.jsx("p",{style:G1,children:"© 2026 Elevox AI Academy. All rights reserved."}),o.jsxs("div",{style:K1,children:[o.jsx(O,{to:"/privacy",style:Xd,children:"Privacy Policy"}),o.jsx(O,{to:"/terms",style:Xd,children:"Terms of Service"})]})]})]})}),F1={backgroundColor:"#08090d",color:"#f0f2f5",padding:"60px 0 30px",borderTop:"1px solid rgba(255,255,255,0.08)",marginTop:"auto"},V1={maxWidth:"1280px",margin:"0 auto",padding:"0 24px"},O1={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"40px",marginBottom:"40px"},$i={display:"flex",flexDirection:"column",gap:"12px"},W1={fontFamily:"'Space Grotesk', sans-serif",fontSize:"20px",fontWeight:700,marginBottom:"8px",color:"#f0f2f5"},$1={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",maxWidth:"300px"},ma={fontSize:"13px",fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",color:"#00d4a8",marginBottom:"4px"},Oe={color:"rgba(240,242,245,0.6)",textDecoration:"none",fontSize:"14px",transition:"color 0.2s"},U1={display:"flex",gap:"16px",marginTop:"8px",flexWrap:"wrap"},Ui={color:"rgba(240,242,245,0.5)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"},H1={borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:"24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},G1={fontSize:"13px",color:"rgba(240,242,245,0.4)"},K1={display:"flex",gap:"20px"},Xd={color:"rgba(240,242,245,0.4)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"},Qd=[["01","Diagnose","Map a learner or team's current AI readiness."],["02","Build","Create real artifacts using AI inside role-based workflows."],["03","Prove","Turn learning into portfolios, demos, and employability signals."],["04","Transform","Move from tool use to measurable career or business outcomes."]];function Y1(){return o.jsxs("section",{className:"elx-3d","aria-label":"Elevox animated transformation pathway",children:[o.jsx("style",{children:X1}),o.jsxs("div",{className:"elx-3d-inner",children:[o.jsxs("div",{className:"elx-3d-copy",children:[o.jsx("p",{className:"elx-3d-kicker",children:"Transformation engine"}),o.jsx("h2",{children:"Learning that zooms into outcomes, then scales back into careers."}),o.jsx("p",{children:"A cinematic pathway for students, professionals, teams, and campuses: diagnose the gap, build with AI, prove the work, and move upward."})]}),o.jsxs("div",{className:"elx-3d-stage","aria-hidden":"true",children:[o.jsxs("div",{className:"elx-3d-card elx-3d-card-a",children:[o.jsx("span",{children:"AI Fluency"}),o.jsx("strong",{children:"Zoom in"})]}),o.jsxs("div",{className:"elx-3d-card elx-3d-card-b",children:[o.jsx("span",{children:"Industry Proof"}),o.jsx("strong",{children:"Build up"})]}),o.jsxs("div",{className:"elx-3d-card elx-3d-card-c",children:[o.jsx("span",{children:"Employability"}),o.jsx("strong",{children:"Scale out"})]})]}),o.jsx("div",{className:"elx-slider","aria-label":"Elevox pathway slider",children:o.jsx("div",{className:"elx-slider-track",children:[...Qd,...Qd].map(([e,t,n],r)=>o.jsxs("article",{className:"elx-slide",children:[o.jsx("span",{children:e}),o.jsx("h3",{children:t}),o.jsx("p",{children:n})]},`${e}-${r}`))})})]})]})}const X1=`
  .elx-3d {
    background:
      radial-gradient(circle at 74% 45%, rgba(0, 212, 168, 0.14), transparent 28%),
      linear-gradient(180deg, #020808, #071212 48%, #020808);
    color: #f0f2f5;
    border-top: 1px solid rgba(143, 239, 213, 0.09);
    border-bottom: 1px solid rgba(143, 239, 213, 0.09);
    overflow: hidden;
    font-family: Inter, system-ui, sans-serif;
  }

  .elx-3d-inner {
    max-width: 1280px;
    margin: 0 auto;
    padding: 86px 24px;
    display: grid;
    grid-template-columns: 0.95fr 1.05fr 320px;
    gap: 42px;
    align-items: center;
  }

  .elx-3d-kicker {
    color: #00d4a8;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 16px;
  }

  .elx-3d-copy h2 {
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: clamp(32px, 4vw, 52px);
    line-height: 1.05;
    letter-spacing: 0;
    margin: 0 0 18px;
  }

  .elx-3d-copy p:last-child {
    color: rgba(240, 242, 245, 0.62);
    line-height: 1.7;
    max-width: 500px;
    margin: 0;
  }

  .elx-3d-stage {
    position: relative;
    height: 430px;
    perspective: 1100px;
  }

  .elx-3d-stage::before {
    content: "";
    position: absolute;
    inset: 12% 6%;
    border-radius: 50%;
    border: 1px solid rgba(143, 239, 213, 0.16);
    transform: rotateX(68deg);
    box-shadow: 0 0 90px rgba(0, 212, 168, 0.11);
  }

  .elx-3d-card {
    position: absolute;
    width: min(300px, 72%);
    min-height: 150px;
    padding: 24px;
    border: 1px solid rgba(143, 239, 213, 0.18);
    border-radius: 14px;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.09), rgba(255, 255, 255, 0.025));
    backdrop-filter: blur(18px);
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
    transform-style: preserve-3d;
    animation: elxZoomOrbit 7s ease-in-out infinite;
  }

  .elx-3d-card span {
    display: block;
    color: rgba(240, 242, 245, 0.55);
    font-size: 13px;
    margin-bottom: 16px;
  }

  .elx-3d-card strong {
    display: block;
    color: #8fefd5;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: 28px;
  }

  .elx-3d-card-a { left: 4%; top: 14%; }
  .elx-3d-card-b { right: 3%; top: 34%; animation-delay: -2.1s; }
  .elx-3d-card-c { left: 18%; bottom: 6%; animation-delay: -4.2s; }

  @keyframes elxZoomOrbit {
    0%, 100% { transform: translate3d(0, 0, 0) rotateX(0deg) rotateY(-12deg) scale(0.94); }
    35% { transform: translate3d(16px, -24px, 90px) rotateX(8deg) rotateY(16deg) scale(1.06); }
    70% { transform: translate3d(-18px, 18px, -30px) rotateX(-5deg) rotateY(-20deg) scale(0.9); }
  }

  .elx-slider {
    height: 360px;
    overflow: hidden;
    border-left: 1px solid rgba(143, 239, 213, 0.12);
    mask-image: linear-gradient(to bottom, transparent, black 14%, black 86%, transparent);
  }

  .elx-slider-track {
    display: flex;
    flex-direction: column;
    gap: 14px;
    animation: elxSlideUp 12s linear infinite;
    padding-left: 22px;
  }

  .elx-slide {
    min-height: 152px;
    border-radius: 12px;
    border: 1px solid rgba(143, 239, 213, 0.13);
    background: rgba(255, 255, 255, 0.035);
    padding: 20px;
  }

  .elx-slide span {
    color: #00d4a8;
    font-weight: 800;
    font-size: 12px;
  }

  .elx-slide h3 {
    margin: 12px 0 8px;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: 20px;
  }

  .elx-slide p {
    margin: 0;
    color: rgba(240, 242, 245, 0.58);
    line-height: 1.55;
    font-size: 14px;
  }

  @keyframes elxSlideUp {
    from { transform: translateY(0); }
    to { transform: translateY(-664px); }
  }

  @media (max-width: 1080px) {
    .elx-3d-inner { grid-template-columns: 1fr; }
    .elx-3d-stage { height: 380px; }
    .elx-slider { height: 300px; border-left: 0; }
    .elx-slider-track { padding-left: 0; }
  }

  @media (max-width: 560px) {
    .elx-3d-inner { padding: 64px 20px; gap: 26px; }
    .elx-3d-stage { height: 320px; }
    .elx-3d-card { width: 78%; min-height: 128px; padding: 18px; }
    .elx-3d-card strong { font-size: 23px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .elx-3d-card,
    .elx-slider-track {
      animation: none;
    }
  }
`,xt={void:"#04090A",panel:"#0A1414",circuit:"#123230",signal:"#1FE8B8",phosphor:"#B9FFE8",amber:"#FFB454",neural:"#6C5CE7",data:"#00D2FF",quantum:"#FF6B6B"},io=[{id:"student",label:"Student",sub:"Building toward a first role",heroKicker:"STATUS: PRE-CAREER",heroLine:"Turn what you're studying into work the market actually wants.",proof:[{num:"87%",label:"placed or interviewing within 6 months of capstone"},{num:"21 days",label:"average time from capstone to first interview"},{num:"40+",label:"hiring partners reviewing student portfolios"}],audienceId:"students"},{id:"professional",label:"Professional",sub:"Upskilling for what's next",heroKicker:"STATUS: IN-CAREER",heroLine:"AI is rewriting your job description. Get ahead of the rewrite.",proof:[{num:"3x",label:"faster skill obsolescence than the decade before"},{num:"92%",label:"of roles will require applied AI fluency within 3 years"},{num:"6 wks",label:"average track length, built around a working week"}],audienceId:"professionals"},{id:"corporate",label:"Corporate / Team",sub:"Transforming a workforce",heroKicker:"STATUS: WORKFORCE",heroLine:"Your team doesn't need a course. It needs a transformation plan.",proof:[{num:"40+",label:"transformation partners across hiring & L&D"},{num:"0",label:"industries left untouched by AI-driven restructuring"},{num:"1",label:"audit before any training begins"}],audienceId:"corporates"},{id:"explore",label:"Just exploring",sub:"Show me everything",heroKicker:"STATUS: UNCALIBRATED",heroLine:"The bridge between learning AI and being employable because of it.",proof:[{num:"12+ yrs",label:"founders' industry experience, not classroom experience"},{num:"40+",label:"hiring & transformation partners in the network"},{num:"1",label:"outcome every track is built around: employability"}],audienceId:null}],qd={students:{eyebrow:"For Students",title:"Career-mapped, not curriculum-mapped",body:"Most student tracks teach a syllabus. This one starts from the roles hiring managers are actually filling, and works backward into what you need to be credible for them.",points:["Curriculum mapped to live job descriptions, refreshed quarterly","Mentors who are currently shipping AI in production, not ex-academics","A portfolio piece per module — by graduation, evidence, not a transcript"],cta:"See the student pathway"},professionals:{eyebrow:"For Professionals",title:"Built around the job you already have",body:"You're not starting over. You're adding a capability your role doesn't have yet — fast enough that it shows up in your next review, not your next decade.",points:["Evening & weekend cohorts — no leave of absence required","Role-specific tracks: product, data, ops, design, engineering","A applied-AI case study you can present internally within 6 weeks"],cta:"See upskilling tracks"},corporates:{eyebrow:"For Corporates",title:"Audited before it's taught",body:"We don't sell seats in a generic course. We start by mapping where your workforce actually stands against where your industry is heading, then build the cohort around the gap.",points:["Workforce AI-readiness audit before any curriculum is proposed","Cohort delivery built around your real workflows and tools","Adoption measured at 30/60/90 days — not just attendance"],cta:"Book a workforce audit"},colleges:{eyebrow:"For Colleges",title:"A placement pipeline, not a guest lecture",body:"Curriculum partnerships that give your students the same industry-mapped tracks, with faculty enablement and direct access to our hiring network at graduation.",points:["Co-built curriculum aligned to your existing academic calendar","Faculty enablement so the capability stays in-house after rollout","Direct placement-pipeline access for graduating cohorts"],cta:"Partner with Elevox"}};function Q1(){const e=b.useRef(null),t=b.useRef([]);b.useRef({x:0,y:0});const n=b.useRef();return b.useEffect(()=>{const r=e.current,i=r.getContext("2d");let s,a;const l=()=>{s=r.width=window.innerWidth,a=r.height=window.innerHeight};window.addEventListener("resize",l),l();const c=[],u=80;for(let p=0;p<u;p++)c.push({x:Math.random()*s,y:Math.random()*a,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,radius:Math.random()*2+1});t.current=c;const d=()=>{i.clearRect(0,0,s,a),c.forEach(p=>{p.x+=p.vx,p.y+=p.vy,(p.x<0||p.x>s)&&(p.vx*=-1),(p.y<0||p.y>a)&&(p.vy*=-1)});for(let p=0;p<c.length;p++)for(let f=p+1;f<c.length;f++){const x=c[p].x-c[f].x,y=c[p].y-c[f].y,v=Math.sqrt(x*x+y*y);if(v<150){const S=(1-v/150)*.15;i.beginPath(),i.moveTo(c[p].x,c[p].y),i.lineTo(c[f].x,c[f].y),i.strokeStyle=`rgba(31, 232, 184, ${S})`,i.lineWidth=.5,i.stroke()}}c.forEach(p=>{i.beginPath(),i.arc(p.x,p.y,p.radius,0,Math.PI*2),i.fillStyle="#1FE8B8",i.shadowColor="#1FE8B8",i.shadowBlur=10,i.fill(),i.shadowBlur=0}),n.current=requestAnimationFrame(d)};return d(),()=>{cancelAnimationFrame(n.current),window.removeEventListener("resize",l)}},[]),o.jsx("canvas",{ref:e,className:"neural-bg"})}function pg({children:e,active:t=!0}){return o.jsxs("div",{className:`ai-pulse ${t?"is-active":""}`,children:[o.jsx("div",{className:"ai-pulse__ring"}),o.jsx("div",{className:"ai-pulse__ring",style:{animationDelay:"0.5s"}}),o.jsx("div",{className:"ai-pulse__ring",style:{animationDelay:"1s"}}),e]})}function so({text:e,className:t=""}){const n=e.split("");return o.jsx("span",{className:`data-stream ${t}`,children:n.map((r,i)=>o.jsx("span",{style:{animationDelay:`${i*.05}s`},children:r},i))})}function q1({children:e,className:t=""}){return o.jsxs("div",{className:`glitch-text ${t}`,children:[o.jsx("span",{className:"glitch-text__main",children:e}),o.jsx("span",{className:"glitch-text__glitch","aria-hidden":"true",children:e}),o.jsx("span",{className:"glitch-text__glitch2","aria-hidden":"true",children:e})]})}function Mo({children:e,tone:t="signal"}){return o.jsx("div",{className:`eyebrow eyebrow--${t}`,children:e})}function Pt({id:e,eyebrow:t,title:n,sub:r,children:i,tone:s="default",index:a}){return o.jsx("section",{id:e,className:`section ${s==="panel"?"section--panel":""}`,"data-rail-section":a,children:o.jsxs("div",{className:"section__inner",children:[o.jsxs("div",{className:"section__head",children:[t&&o.jsx(Mo,{children:t}),n&&o.jsx("h2",{className:"section__title",children:n}),r&&o.jsx("p",{className:"section__sub",children:r})]}),i]})})}function Z1({onSelect:e}){const[t,n]=b.useState(null),[r,i]=b.useState(0);return b.useEffect(()=>{const s=setInterval(()=>{i(a=>(a+2)%100)},50);return()=>clearInterval(s)},[]),o.jsxs("div",{className:"gate",role:"dialog","aria-modal":"true","aria-label":"Choose your path",children:[o.jsxs("div",{className:"gate__backdrop",children:[o.jsx("div",{className:"gate__scanline",style:{top:`${r}%`}}),o.jsx("div",{className:"gate__grid-overlay"})]}),o.jsxs("div",{className:"gate__panel",children:[o.jsxs("div",{className:"gate__panelHeader",children:[o.jsx(pg,{active:!0,children:o.jsx("span",{className:"gate__dot"})}),o.jsx("span",{className:"gate__headerText",children:o.jsx(so,{text:"ELEVOX // CALIBRATING VIEW"})}),o.jsxs("span",{className:"gate__headerId",children:["ID:0x",Math.floor(Math.random()*9e3+1e3)]})]}),o.jsxs("div",{className:"gate__body",children:[o.jsxs("p",{className:"gate__kicker",children:[o.jsx("span",{className:"gate__kicker-dot",children:"●"})," Neural calibration required"]}),o.jsx("h1",{className:"gate__title",children:"Who's reading this?"}),o.jsx("p",{className:"gate__copy",children:"Everything below — the proof, the tracks, the outcomes — will reorder itself around where you actually stand right now."}),o.jsx("div",{className:"gate__options",children:io.map(s=>o.jsxs("button",{className:`gate__option ${t===s.id?"is-active":""}`,onMouseEnter:()=>n(s.id),onMouseLeave:()=>n(null),onClick:()=>e(s.id),children:[o.jsx("span",{className:"gate__optionMarker",children:t===s.id?"▶":"○"}),o.jsx("span",{className:"gate__optionLabel",children:s.label}),o.jsx("span",{className:"gate__optionSub",children:s.sub}),o.jsx("span",{className:"gate__optionArrow","aria-hidden":"true",children:"→"})]},s.id))}),o.jsxs("button",{className:"gate__skip",onClick:()=>e("explore"),children:[o.jsx("span",{className:"gate__skip-icon",children:"⟳"})," Skip calibration — show the full picture"]})]})]})]})}const Zd=["INPUT // RAW POTENTIAL","WHY_AI","FOUNDERS","GAP","PROGRAMMES","AUDIENCE_MATCH","PATHWAY","OUTCOMES","WORKSHOPS","TOUR","OUTPUT // EMPLOYABLE"];function J1(){const e=b.useRef(null),[t,n]=b.useState(0),[r,i]=b.useState(0);return b.useEffect(()=>{const s=Array.from(document.querySelectorAll("[data-rail-section]")),a=()=>{const l=document.documentElement,c=l.scrollTop||document.body.scrollTop,u=(l.scrollHeight||document.body.scrollHeight)-l.clientHeight,d=u>0?c/u:0;e.current&&e.current.style.setProperty("--rail-progress",`${Math.min(1,Math.max(0,d))*100}%`);let p=0;s.forEach(f=>{f.getBoundingClientRect().top<window.innerHeight*.6&&(p=Number(f.dataset.railSection))}),n(Math.min(p,Zd.length-1)),i(Math.sin(Date.now()/1e3)*.3+.7)};return window.addEventListener("scroll",a,{passive:!0}),window.addEventListener("resize",a),a(),()=>{window.removeEventListener("scroll",a),window.removeEventListener("resize",a)}},[]),o.jsxs("div",{className:"signalRail",ref:e,"aria-hidden":"true",children:[o.jsx("div",{className:"signalRail__track"}),o.jsx("div",{className:"signalRail__fill"}),o.jsx("div",{className:"signalRail__bead"}),o.jsx("div",{className:"signalRail__signal-glow",style:{opacity:r*.5}}),o.jsxs("div",{className:"signalRail__readout",children:[o.jsx("span",{className:"signalRail__readout-dot",children:"●"}),Zd[t],o.jsxs("span",{className:"signalRail__readout-strength",children:[Math.round(r*100),"%"]})]})]})}function e2({onReset:e}){const[t,n]=b.useState(!1);return o.jsxs("nav",{className:"navbar",children:[o.jsxs("div",{className:"hero__logo",onClick:e,role:"button",tabIndex:0,children:[o.jsx("span",{className:"hero__logoMark",children:"EX"}),o.jsx("span",{className:"hero__logoWord",children:"ELEVOX"}),o.jsx("span",{className:"hero__logoPulse"})]}),o.jsxs("div",{className:"hero__navLinks",children:[o.jsxs("a",{href:"#why-ai",className:"nav-link",children:[o.jsx("span",{className:"nav-link__indicator"}),"Programmes"]}),o.jsxs("a",{href:"#founders",className:"nav-link",children:[o.jsx("span",{className:"nav-link__indicator"}),"Founders"]}),o.jsxs("a",{href:"#pathway",className:"nav-link",children:[o.jsx("span",{className:"nav-link__indicator"}),"Outcomes"]}),o.jsxs("a",{href:"#workshops",className:"nav-link",children:[o.jsx("span",{className:"nav-link__indicator"}),"Workshops"]})]}),o.jsxs("button",{className:"hero__navCta",onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[o.jsx("span",{className:"hero__navCta-text",children:"Talk to us"}),t&&o.jsx("span",{className:"hero__navCta-wave",children:"~~~"})]})]})}function t2({pathway:e}){const t=b.useMemo(()=>io.find(i=>i.id===e)||io[3],[e]),[n,r]=b.useState({x:0,y:0});return b.useEffect(()=>{const i=s=>{r({x:s.clientX/window.innerWidth,y:s.clientY/window.innerHeight})};return window.addEventListener("mousemove",i),()=>window.removeEventListener("mousemove",i)},[]),o.jsxs("header",{className:"hero","data-rail-section":0,children:[o.jsxs("div",{className:"hero__bg",children:[o.jsx("div",{className:"hero__image",style:{backgroundImage:"url(/assets/images/hero.png)"}}),o.jsx("div",{className:"hero__grid","aria-hidden":"true"}),o.jsx("div",{className:"hero__neural-glow",style:{left:`${n.x*100}%`,top:`${n.y*100}%`}})]}),o.jsxs("div",{className:"hero__content",children:[o.jsxs("div",{className:"hero__statusRow",children:[o.jsx(pg,{active:!0,children:o.jsx("span",{className:"hero__statusDot"})}),o.jsx("span",{className:"hero__statusText",children:o.jsx(so,{text:t.heroKicker})})]}),o.jsxs(q1,{className:"hero__headline",children:["AI is no longer optional.",o.jsx("br",{}),o.jsx("span",{className:"hero__headlineAccent",children:"Employability is."})]}),o.jsx("p",{className:"hero__sub",children:t.heroLine}),o.jsx("div",{className:"hero__readout",children:t.proof.map((i,s)=>o.jsxs(_n.Fragment,{children:[o.jsxs("div",{className:"hero__readoutItem",children:[o.jsx("span",{className:"hero__readoutNum",children:o.jsx(so,{text:i.num})}),o.jsx("span",{className:"hero__readoutLabel",children:i.label})]}),s<t.proof.length-1&&o.jsx("div",{className:"hero__readoutDivider"})]},i.label))}),o.jsxs("div",{className:"hero__ctaRow",children:[o.jsxs("button",{className:"btn btn--primary",children:[o.jsx("span",{className:"btn__icon",children:"⚡"}),"See your pathway"]}),o.jsxs("button",{className:"btn btn--ghost",children:[o.jsx("span",{className:"btn__icon",children:"▶"}),"Watch the academy tour"]})]})]}),o.jsxs("div",{className:"hero__scrollCue","aria-hidden":"true",children:[o.jsx("div",{className:"hero__scrollLine",children:o.jsx("span",{className:"hero__scrollDot"})}),"Scroll — trace runs the full page"]})]})}function n2(){return o.jsx("section",{className:"heroStrip","aria-label":"Elevox learning promise",children:o.jsxs("div",{className:"heroStrip__inner",children:[o.jsxs("span",{className:"heroStrip__label",children:[o.jsx("span",{className:"heroStrip__num",children:"01"})," AI FLUENCY"]}),o.jsx("span",{className:"heroStrip__divider","aria-hidden":"true",children:o.jsx("span",{className:"heroStrip__divider-dot",children:"●"})}),o.jsxs("span",{className:"heroStrip__label",children:[o.jsx("span",{className:"heroStrip__num",children:"02"})," INDUSTRY PROOF"]}),o.jsx("span",{className:"heroStrip__divider","aria-hidden":"true",children:o.jsx("span",{className:"heroStrip__divider-dot",children:"●"})}),o.jsxs("span",{className:"heroStrip__label",children:[o.jsx("span",{className:"heroStrip__num",children:"03"})," CAREER OUTCOME"]})]})})}function r2(){return o.jsxs("div",{className:"heroSecondary",children:[o.jsx("div",{className:"heroSecondary__image",style:{backgroundImage:"url(/assets/images/h4.png)"},role:"img","aria-label":"Elevox secondary hero visual"}),o.jsxs("div",{className:"heroSecondary__overlay",children:[o.jsx("div",{className:"heroSecondary__scanline"}),o.jsxs("div",{className:"heroSecondary__data-overlay",children:[o.jsx("span",{className:"heroSecondary__data-text",children:"[AI_TRAINING_MATRIX]"}),o.jsx("span",{className:"heroSecondary__data-text",children:"[OPTIMIZATION: 87%]"})]})]}),o.jsxs("div",{className:"heroSecondary__content",children:[o.jsx(Mo,{children:"The transformation, not the tools"}),o.jsxs("h2",{className:"heroSecondary__title",children:["We don't teach AI.",o.jsx("br",{}),"We make you ",o.jsx("span",{className:"heroSecondary__accent",children:"unignorable"})," because of it."]}),o.jsx("p",{className:"heroSecondary__sub",children:"Real founders. Real industry scars. A pathway built for outcomes, not certificates."})]})]})}function i2(){const e=[{stat:"92%",label:"of roles require applied AI fluency within 3 years"},{stat:"3×",label:"faster skill obsolescence than the decade before"},{stat:"0",label:"industries left untouched by AI-driven restructuring"}];return o.jsx(Pt,{id:"why-ai",index:1,eyebrow:"The shift",title:"AI didn't knock. It already let itself in.",sub:"Every industry is being re-architected around AI-literate people. The question isn't whether you adapt — it's whether you adapt on your own terms, or someone else's.",children:o.jsxs("div",{className:"ai-dashboard",children:[o.jsxs("div",{className:"ai-dashboard__header",children:[o.jsx("span",{className:"ai-dashboard__status",children:"● SYSTEM STATUS: ACTIVE"}),o.jsxs("span",{className:"ai-dashboard__timestamp",children:["[AI_READOUT_",new Date().getFullYear(),"]"]})]}),o.jsx("div",{className:"readoutBar",children:e.map((t,n)=>o.jsxs(_n.Fragment,{children:[o.jsxs("div",{className:"readoutBar__item",children:[o.jsx("div",{className:"readoutBar__stat",children:t.stat}),o.jsx("div",{className:"readoutBar__label",children:t.label}),o.jsx("div",{className:"readoutBar__progress",children:o.jsx("div",{className:"readoutBar__progress-bar",style:{width:`${Math.random()*30+70}%`}})})]}),n<e.length-1&&o.jsx("div",{className:"readoutBar__rule","aria-hidden":"true"})]},t.label))})]})})}function s2(){const e=[{name:"Founder One",role:"Ex-Industry AI Lead",years:"12 YRS",bio:"Shipped production AI systems for a decade before turning to building the people who'll ship the next generation of them.",scars:["Shipped 3 production ML systems at scale","Hired and managed AI engineering teams"]},{name:"Founder Two",role:"Ex-Talent & Workforce Strategy",years:"10 YRS",bio:"Built and scaled hiring pipelines for AI-first teams — sees the gap between classroom AI and employable AI from the inside.",scars:["Built hiring pipelines for 40+ AI-first teams","Ran workforce transformation for two enterprises"]}];return o.jsx(Pt,{id:"founders",index:2,eyebrow:"Why trust this",title:"Built by people who hired, fired, and shipped — not just taught.",sub:"Elevox exists because its founders sat on both sides of the table: inside the companies building AI, and inside the rooms deciding who gets hired to do it.",children:o.jsx("div",{className:"dossier",children:e.map(t=>o.jsxs("div",{className:"dossierCard",children:[o.jsxs("div",{className:"dossierCard__top",children:[o.jsx("div",{className:"dossierCard__id",children:o.jsx("div",{className:"dossierCard__id-pulse"})}),o.jsxs("div",{className:"dossierCard__heading",children:[o.jsx("h3",{className:"dossierCard__name",children:t.name}),o.jsx("p",{className:"dossierCard__role",children:t.role})]}),o.jsx("span",{className:"dossierCard__years",children:t.years})]}),o.jsx("p",{className:"dossierCard__bio",children:t.bio}),o.jsx("ul",{className:"dossierCard__scars",children:t.scars.map(n=>o.jsxs("li",{children:[o.jsx("span",{className:"dossierCard__scar-icon",children:"▶"}),n]},n))}),o.jsxs("div",{className:"dossierCard__neural",children:[o.jsx("span",{className:"dossierCard__neural-dot"}),o.jsx("span",{className:"dossierCard__neural-dot"}),o.jsx("span",{className:"dossierCard__neural-dot"})]})]},t.name))})})}function o2(){return o.jsx(Pt,{id:"problem",index:3,tone:"panel",eyebrow:"The gap",title:"Courses teach tools. Companies hire outcomes.",children:o.jsxs("div",{className:"ledger",children:[o.jsxs("div",{className:"ledger__col ledger__col--problem",children:[o.jsxs("span",{className:"ledger__tag",children:[o.jsx("span",{className:"ledger__tag-icon",children:"⚠"})," LIABILITY"]}),o.jsx("h3",{className:"ledger__heading",children:"The problem"}),o.jsx("p",{className:"ledger__text",children:"Most AI training ends at certificates and tool tutorials. Learners leave knowing prompts and platforms, but not how to apply either inside a real role, team, or business problem."})]}),o.jsx("div",{className:"ledger__spine","aria-hidden":"true",children:o.jsx("div",{className:"ledger__spine-pulse"})}),o.jsxs("div",{className:"ledger__col ledger__col--opportunity",children:[o.jsxs("span",{className:"ledger__tag ledger__tag--accent",children:[o.jsx("span",{className:"ledger__tag-icon",children:"✦"})," ASSET"]}),o.jsx("h3",{className:"ledger__heading ledger__heading--accent",children:"The opportunity"}),o.jsx("p",{className:"ledger__text",children:"The market doesn't have an AI knowledge shortage — it has an AI application shortage. Whoever closes that gap first becomes the obvious hire, the obvious promotion, the obvious vendor."})]})]})})}function a2(){const e=[{code:"PRG.01",name:"Foundations",desc:"Applied AI literacy for any background, in weeks not semesters.",icon:"🧠"},{code:"PRG.02",name:"Specialist Tracks",desc:"Role-specific depth — product, data, ops, engineering, design.",icon:"⚡"},{code:"PRG.03",name:"Capstone & Portfolio",desc:"Real briefs, real stakeholders, work you can show employers.",icon:"📊"},{code:"PRG.04",name:"Workforce Cohorts",desc:"Team-wide rollouts built around your company's actual workflows.",icon:"🏢"}];return o.jsx(Pt,{id:"programmes",index:4,eyebrow:"What we run",title:"One philosophy, four formats.",sub:"Every track ends the same way: with proof you can put in front of a hiring manager, a promotion panel, or a board.",children:o.jsx("div",{className:"grid grid--4",children:e.map(t=>o.jsxs("div",{className:"programmeCard",children:[o.jsx("div",{className:"programmeCard__icon",children:t.icon}),o.jsxs("span",{className:"programmeCard__code",children:[o.jsx("span",{className:"programmeCard__code-dot",children:"●"})," ",t.code]}),o.jsx("h3",{className:"programmeCard__name",children:t.name}),o.jsx("p",{className:"programmeCard__desc",children:t.desc}),o.jsx("div",{className:"programmeCard__glow"})]},t.name))})})}function l2({pathway:e}){var a;const t=["students","professionals","corporates","colleges"],n=((a=io.find(l=>l.id===e))==null?void 0:a.audienceId)||null,[r,i]=b.useState(n||"students");b.useEffect(()=>{n&&i(n)},[n]);const s=qd[r];return o.jsx(Pt,{id:"audiences",index:5,eyebrow:"Built for where you stand",title:"Four starting points. One destination — employable AI fluency.",children:o.jsxs("div",{className:"switcher",children:[o.jsx("div",{className:"switcher__tabs",role:"tablist",children:t.map(l=>o.jsxs("button",{role:"tab","aria-selected":r===l,className:`switcher__tab ${r===l?"is-active":""}`,onClick:()=>i(l),children:[o.jsx("span",{className:"switcher__tabLabel",children:qd[l].eyebrow.replace("For ","")}),n===l&&o.jsxs("span",{className:"switcher__tabBadge",children:[o.jsx("span",{className:"switcher__tabBadge-dot",children:"●"})," Matched"]})]},l))}),o.jsxs("div",{className:"switcher__panel",children:[o.jsx(Mo,{children:s.eyebrow}),o.jsx("h3",{className:"switcher__title",children:s.title}),o.jsx("p",{className:"switcher__body",children:s.body}),o.jsx("ul",{className:"switcher__list",children:s.points.map(l=>o.jsxs("li",{children:[o.jsx("span",{className:"switcher__list-icon",children:"▸"}),l]},l))}),o.jsxs("button",{className:"switcher__cta",children:[o.jsx("span",{className:"switcher__cta-icon",children:"⚡"}),s.cta]})]},r)]})})}function c2(){const e=[{n:"01",title:"Diagnose",desc:"Map where you stand against where the market is heading.",icon:"🔍"},{n:"02",title:"Build",desc:"Apply AI inside real briefs, not isolated tutorials.",icon:"🏗️"},{n:"03",title:"Prove",desc:"Leave with a portfolio, not just a certificate.",icon:"📈"},{n:"04",title:"Place",desc:"Get matched to roles or transformation outcomes.",icon:"🎯"}];return o.jsx(Pt,{id:"pathway",index:6,eyebrow:"How it actually works",title:"The success pathway",sub:"Four stages. Every stage produces something you can show, not just something you've learned.",children:o.jsx("div",{className:"pathway",children:e.map((t,n)=>o.jsxs(_n.Fragment,{children:[o.jsxs("div",{className:"pathway__step",children:[o.jsx("span",{className:"pathway__num",children:t.n}),o.jsx("div",{className:"pathway__icon",children:t.icon}),o.jsx("h3",{className:"pathway__title",children:t.title}),o.jsx("p",{className:"pathway__desc",children:t.desc}),o.jsx("div",{className:"pathway__progress",children:o.jsx("div",{className:"pathway__progress-bar",style:{width:`${(n+1)*25}%`}})})]}),n<e.length-1&&o.jsx("div",{className:"pathway__connector","aria-hidden":"true",children:o.jsx("div",{className:"pathway__connector-dot"})})]},t.n))})})}function u2(){const e=[{stat:"87%",label:"learners who moved roles or got promoted within 6 months",trend:"+12%"},{stat:"40+",label:"hiring & transformation partners in the network",trend:"+5"},{stat:"21 days",label:"average time from capstone to first interview",trend:"-3d"}];return o.jsx(Pt,{id:"outcomes",index:7,tone:"panel",eyebrow:"Proof, not promises",title:"Outcomes we're accountable for.",children:o.jsx("div",{className:"readoutBar readoutBar--accent",children:e.map((t,n)=>o.jsxs(_n.Fragment,{children:[o.jsxs("div",{className:"readoutBar__item",children:[o.jsxs("div",{className:"readoutBar__stat",children:[o.jsx(so,{text:t.stat}),o.jsx("span",{className:"readoutBar__trend",children:t.trend})]}),o.jsx("div",{className:"readoutBar__label",children:t.label})]}),n<e.length-1&&o.jsx("div",{className:"readoutBar__rule","aria-hidden":"true"})]},t.label))})})}function d2(){const e=[{date:"08 JUL",title:"Applied AI for Product Teams",mode:"Live · Online",status:"active"},{date:"15 JUL",title:"AI Readiness Audit for Leaders",mode:"Live · Mumbai",status:"upcoming"},{date:"22 JUL",title:"From Tutorials to Portfolios",mode:"Live · Online",status:"upcoming"}];return o.jsx(Pt,{id:"workshops",index:8,eyebrow:"This month",title:"Upcoming workshops",sub:"Free, live sessions to test the approach before you commit to a track.",children:o.jsx("div",{className:"workshopList",children:e.map(t=>o.jsxs("div",{className:"workshopRow",children:[o.jsxs("span",{className:"workshopRow__date",children:[o.jsx("span",{className:"workshopRow__date-dot"}),t.date]}),o.jsx("span",{className:"workshopRow__title",children:t.title}),o.jsx("span",{className:"workshopRow__mode",children:t.mode}),o.jsxs("button",{className:"workshopRow__cta",children:[o.jsx("span",{className:"workshopRow__cta-icon",children:"✦"}),"Reserve seat"]})]},t.title))})})}function p2(){return o.jsx(Pt,{id:"tour",index:9,eyebrow:"Inside Elevox",title:"A campus built to feel like a tech company, not a coaching centre.",sub:"Take a 90-second walk through the studios, mentor pods, and capstone labs before you visit in person.",children:o.jsxs("div",{className:"tourPanel",children:[o.jsxs("div",{className:"tourPanel__hologram",children:[o.jsx("div",{className:"tourPanel__hologram-grid"}),o.jsx("div",{className:"tourPanel__hologram-pulse"})]}),o.jsx("div",{className:"tourPanel__playGlow"}),o.jsx("button",{className:"tourPanel__playBtn","aria-label":"Play academy tour video",children:o.jsx("span",{className:"tourPanel__playIcon",children:"▶"})}),o.jsx("span",{className:"tourPanel__caption",children:"90-second academy walkthrough"}),o.jsxs("div",{className:"tourPanel__data-feed",children:[o.jsx("span",{className:"tourPanel__data-item",children:"[STUDIO_1: ACTIVE]"}),o.jsx("span",{className:"tourPanel__data-item",children:"[CAPSTONE_LAB: READY]"}),o.jsx("span",{className:"tourPanel__data-item",children:"[MENTOR_POD: 4/6 CONNECTED]"})]})]})})}function f2(){return o.jsxs("section",{className:"cta","data-rail-section":10,children:[o.jsxs("div",{className:"cta__neural-bg",children:[o.jsx("div",{className:"cta__neural-particle"}),o.jsx("div",{className:"cta__neural-particle",style:{animationDelay:"2s"}}),o.jsx("div",{className:"cta__neural-particle",style:{animationDelay:"4s"}})]}),o.jsxs("div",{className:"cta__inner",children:[o.jsxs(Mo,{tone:"amber",children:[o.jsx("span",{className:"cta__eyebrow-icon",children:"✦"})," Start here"]}),o.jsx("h2",{className:"cta__title",children:"Learning ends at a certificate. Ours ends at a job."}),o.jsx("p",{className:"cta__sub",children:"Tell us where you stand, and we'll show you the shortest real path from here to employable, promotable, or transformation-ready."}),o.jsxs("div",{className:"cta__row",children:[o.jsxs("button",{className:"btn btn--primary btn--lg",children:[o.jsx("span",{className:"btn__icon",children:"⚡"}),"Map my pathway"]}),o.jsxs("button",{className:"btn btn--ghost btn--lg",children:[o.jsx("span",{className:"btn__icon",children:"◇"}),"Talk to a founder"]})]}),o.jsxs("div",{className:"cta__ai-status",children:[o.jsx("span",{className:"cta__ai-dot",children:"●"}),"AI calibration complete — ready for your pathway"]})]})]})}function h2(){return o.jsxs("footer",{className:"footer",children:[o.jsx("div",{className:"footer__neural-line"}),o.jsxs("div",{className:"footer__inner",children:[o.jsxs("div",{className:"footer__brand",children:[o.jsx("span",{className:"hero__logoMark",children:"EX"}),o.jsx("span",{className:"hero__logoWord",children:"ELEVOX"}),o.jsx("span",{className:"footer__brand-ai",children:"[AI_POWERED]"})]}),o.jsx("p",{className:"footer__tag",children:"The bridge between learning AI and being employable because of it."}),o.jsxs("div",{className:"footer__links",children:[o.jsxs("a",{href:"#programmes",children:[o.jsx("span",{className:"footer__link-icon",children:"▸"}),"Programmes"]}),o.jsxs("a",{href:"#founders",children:[o.jsx("span",{className:"footer__link-icon",children:"▸"}),"Founders"]}),o.jsxs("a",{href:"#pathway",children:[o.jsx("span",{className:"footer__link-icon",children:"▸"}),"Outcomes"]}),o.jsxs("a",{href:"#workshops",children:[o.jsx("span",{className:"footer__link-icon",children:"▸"}),"Workshops"]})]}),o.jsxs("div",{className:"footer__ai-metrics",children:[o.jsx("span",{children:"AI_READY: 100%"}),o.jsx("span",{children:"OPTIMIZATION: ACTIVE"}),o.jsx("span",{children:"CONNECTION: SECURE"})]})]})]})}function m2(){const[e,t]=b.useState(null),[n,r]=b.useState(!0),i=b.useCallback(a=>{t(a),r(!1)},[]),s=b.useCallback(()=>{r(!0)},[]);return o.jsxs("div",{className:"elevox",children:[o.jsx("style",{children:g2}),n&&o.jsx(Z1,{onSelect:i}),o.jsx(Q1,{}),o.jsx(J1,{}),o.jsx(e2,{onReset:s}),o.jsx(t2,{pathway:e}),o.jsx(n2,{}),o.jsx(r2,{}),o.jsx(i2,{}),o.jsx(s2,{}),o.jsx(o2,{}),o.jsx(a2,{}),o.jsx(l2,{pathway:e}),o.jsx(c2,{}),o.jsx(u2,{}),o.jsx(d2,{}),o.jsx(p2,{}),o.jsx(f2,{}),o.jsx(h2,{})]})}const g2=`
:root {
  --void: ${xt.void};
  --panel: ${xt.panel};
  --circuit: ${xt.circuit};
  --signal: ${xt.signal};
  --phosphor: ${xt.phosphor};
  --amber: ${xt.amber};
  --neural: ${xt.neural};
  --data: ${xt.data};
  --quantum: ${xt.quantum};
  --text-primary: #EAF6F2;
  --text-secondary: #93B3AC;
  --text-muted: #51716A;
  --font-display: 'Space Grotesk', 'Inter', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;
  --radius: 12px;
  --maxw: 1200px;
}

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
header, nav, h1, h2, h3, p { margin: 0; padding: 0; }

.elevox {
  background: var(--void);
  color: var(--text-primary);
  font-family: var(--font-body);
  line-height: 1.5;
  overflow-x: hidden;
  position: relative;
}

.elevox a { color: inherit; text-decoration: none; }
.elevox button { font-family: var(--font-body); cursor: pointer; border: none; background: none; color: inherit; }
.elevox button:focus-visible,
.elevox a:focus-visible {
  outline: 2px solid var(--signal);
  outline-offset: 3px;
}

@media (prefers-reduced-motion: reduce) {
  .elevox * { animation: none !important; transition: none !important; }
}

/* ---------- Neural Background ---------- */
.neural-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  opacity: 0.4;
}

/* ---------- AI Pulse ---------- */
.ai-pulse {
  position: relative;
  display: inline-flex;
  align-items: center;
}
.ai-pulse__ring {
  position: absolute;
  width: 30px;
  height: 30px;
  border: 1px solid var(--signal);
  border-radius: 50%;
  opacity: 0;
  animation: pulseRing 2s ease-out infinite;
}
@keyframes pulseRing {
  0% { transform: scale(0.5); opacity: 1; }
  100% { transform: scale(2); opacity: 0; }
}
.ai-pulse.is-active .ai-pulse__ring {
  animation-play-state: running;
}

/* ---------- Data Stream ---------- */
.data-stream span {
  display: inline-block;
  opacity: 0;
  animation: dataStream 0.5s forwards;
}
@keyframes dataStream {
  0% { opacity: 0; transform: translateY(4px); }
  100% { opacity: 1; transform: translateY(0); }
}

/* ---------- Glitch Text ---------- */
.glitch-text {
  position: relative;
  display: inline-block;
}
.glitch-text__main {
  position: relative;
  z-index: 1;
}
.glitch-text__glitch {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  color: var(--data);
  animation: glitch1 3s infinite;
}
.glitch-text__glitch2 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  color: var(--quantum);
  animation: glitch2 3s infinite;
}
@keyframes glitch1 {
  0%, 95%, 100% { transform: translate(0); opacity: 0; }
  96% { transform: translate(-2px, 1px); opacity: 0.7; }
  97% { transform: translate(2px, -1px); opacity: 0.7; }
}
@keyframes glitch2 {
  0%, 97%, 100% { transform: translate(0); opacity: 0; }
  98% { transform: translate(2px, -2px); opacity: 0.7; }
  99% { transform: translate(-2px, 1px); opacity: 0.7; }
}

/* ---------- Eyebrow ---------- */
.eyebrow {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--signal);
  margin-bottom: 14px;
}
.eyebrow--amber { color: var(--amber); }

/* ---------- Signal Rail ---------- */
.signalRail {
  position: fixed;
  top: 0;
  right: 26px;
  width: 2px;
  height: 100vh;
  z-index: 60;
  pointer-events: none;
  --rail-progress: 0%;
  display: none;
}
@media (min-width: 1024px) { .signalRail { display: block; } }
.signalRail__track {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent, rgba(31,232,184,0.10) 8%, rgba(31,232,184,0.10) 92%, transparent);
}
.signalRail__fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--rail-progress);
  background: linear-gradient(to bottom, var(--phosphor), var(--signal));
  box-shadow: 0 0 12px rgba(31,232,184,0.7);
  transition: height 0.08s linear;
}
.signalRail__bead {
  position: absolute;
  left: -3px;
  top: var(--rail-progress);
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--phosphor);
  box-shadow: 0 0 14px 4px rgba(185,255,232,0.8);
  transform: translateY(-50%);
  transition: top 0.08s linear;
}
.signalRail__signal-glow {
  position: absolute;
  left: -20px;
  top: 50%;
  width: 40px;
  height: 100px;
  background: radial-gradient(ellipse, rgba(31,232,184,0.2), transparent 70%);
  transform: translateY(-50%);
  pointer-events: none;
}
.signalRail__readout {
  position: absolute;
  left: -10px;
  top: var(--rail-progress);
  transform: translate(-100%, -50%);
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  white-space: nowrap;
  padding-right: 8px;
  transition: top 0.08s linear;
  display: flex;
  align-items: center;
  gap: 6px;
}
.signalRail__readout-dot {
  color: var(--signal);
  font-size: 6px;
}
.signalRail__readout-strength {
  font-size: 8px;
  color: var(--phosphor);
  opacity: 0.7;
}

/* ---------- Navbar ---------- */
.navbar {
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 6%;
  max-width: 1500px;
  margin: 0 auto;
  width: 100%;
  background: var(--void);
  border-bottom: 1px solid rgba(31,232,184,0.08);
}
.hero__logo {
  display: flex;
  align-items: baseline;
  gap: 8px;
  cursor: pointer;
  position: relative;
}
.hero__logoMark {
  font-family: var(--font-mono);
  font-size: 13px;
  letter-spacing: 0.05em;
  color: var(--void);
  background: var(--phosphor);
  padding: 4px 7px;
  border-radius: 4px;
  font-weight: 600;
  position: relative;
  overflow: hidden;
}
.hero__logoMark::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
  animation: logoShine 3s infinite;
}
@keyframes logoShine {
  0% { transform: translateX(-100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}
.hero__logoWord {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 19px;
  letter-spacing: 0.02em;
}
.hero__logoPulse {
  position: absolute;
  right: -12px;
  top: -2px;
  width: 8px;
  height: 8px;
  background: var(--signal);
  border-radius: 50%;
  animation: pulseDot 2s ease-in-out infinite;
}
.hero__navLinks {
  display: none;
  gap: 36px;
  font-size: 14px;
  color: var(--text-secondary);
}
@media (min-width: 900px) { .hero__navLinks { display: flex; } }
.nav-link {
  position: relative;
  padding: 4px 0;
}
.nav-link__indicator {
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--signal);
  transition: width 0.3s ease;
}
.nav-link:hover .nav-link__indicator { width: 100%; }
.hero__navCta {
  font-size: 13px;
  font-family: var(--font-mono);
  border: 1px solid rgba(31,232,184,0.35);
  padding: 9px 18px;
  border-radius: 999px;
  color: var(--phosphor);
  transition: border-color 0.2s, background 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
}
.hero__navCta:hover {
  background: rgba(31,232,184,0.1);
  border-color: var(--signal);
}
.hero__navCta-wave {
  animation: wave 0.5s ease-in-out;
}
@keyframes wave {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(4px); }
}

/* ---------- Hero ---------- */
.hero {
  position: relative;
  min-height: 56vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  isolation: isolate;
}
.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: var(--void);
}
.hero__image {
  position: absolute;
  inset: 0;
  background-image: url(/assets/images/hero3.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(31,232,184,0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(31,232,184,0.05) 1px, transparent 1px);
  background-size: 64px 64px;
  mask-image: radial-gradient(ellipse 80% 60% at 70% 30%, black, transparent 70%);
}
.hero__neural-glow {
  position: absolute;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(31,232,184,0.15), transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: all 0.3s ease;
  filter: blur(20px);
}

.hero__content {
  position: relative;
  z-index: 5;
  margin-left: auto;
  max-width: 620px;
  padding: 48px 6% 0;
  text-align: left;
  text-shadow: 0 2px 18px rgba(0,0,0,0.55);
}
@media (min-width: 700px) { .hero__content { padding: 70px 6% 0; } }

.hero__statusRow {
  display: flex;
  align-items: center;
  gap: 9px;
  margin-bottom: 22px;
}
.hero__statusDot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--signal);
  box-shadow: 0 0 8px var(--signal);
}
.hero__statusText {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--phosphor);
}

.hero__headline {
  font-family: var(--font-display);
  font-size: clamp(34px, 5.4vw, 58px);
  font-weight: 600;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin: 0 0 20px;
  position: relative;
}
.hero__headlineAccent { color: var(--signal); }

.hero__sub {
  font-size: clamp(15px, 1.6vw, 18px);
  color: var(--text-secondary);
  max-width: 480px;
  margin-bottom: 36px;
}

.hero__readout {
  display: flex;
  align-items: stretch;
  gap: 22px;
  margin-bottom: 38px;
  flex-wrap: wrap;
  border-top: 1px solid rgba(31,232,184,0.16);
  padding-top: 22px;
}
.hero__readoutItem {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 130px;
  max-width: 180px;
}
.hero__readoutNum {
  font-family: var(--font-mono);
  font-size: 22px;
  font-weight: 500;
  color: var(--text-primary);
}
.hero__readoutLabel { font-size: 12.5px; color: var(--text-muted); }
.hero__readoutDivider {
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(31,232,184,0.2), transparent);
}

.hero__ctaRow { display: flex; gap: 14px; flex-wrap: wrap; }

.btn {
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 14.5px;
  padding: 13px 26px;
  border-radius: 8px;
  transition: transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease, border-color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}
.btn__icon {
  display: inline-block;
  transition: transform 0.3s ease;
}
.btn:hover .btn__icon {
  transform: translateX(2px) scale(1.1);
}
.btn--primary {
  background: var(--signal);
  color: var(--void);
}
.btn--primary:hover {
  box-shadow: 0 6px 24px -4px rgba(31,232,184,0.55);
  transform: translateY(-1px);
}
.btn--ghost {
  border: 1px solid rgba(31,232,184,0.3);
  color: var(--text-primary);
}
.btn--ghost:hover {
  border-color: var(--phosphor);
  background: rgba(31,232,184,0.06);
}
.btn--lg { padding: 15px 30px; font-size: 15.5px; }

.hero__scrollCue {
  position: relative;
  z-index: 5;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  padding: 20px 6% 28px;
}
.hero__scrollLine {
  width: 26px;
  height: 1px;
  background: var(--text-muted);
  position: relative;
}
.hero__scrollDot {
  position: absolute;
  left: 0;
  top: -2px;
  width: 5px;
  height: 5px;
  background: var(--signal);
  border-radius: 50%;
  animation: scrollDot 2s ease-in-out infinite;
}
@keyframes scrollDot {
  0%, 100% { transform: translateX(0); opacity: 1; }
  50% { transform: translateX(20px); opacity: 0.3; }
}

/* ---------- Hero transition strip ---------- */
.heroStrip {
  position: relative;
  background: linear-gradient(90deg, var(--void), var(--panel) 50%, var(--void));
  border-top: 1px solid rgba(31,232,184,0.1);
  border-bottom: 1px solid rgba(31,232,184,0.14);
}
.heroStrip__inner {
  max-width: var(--maxw);
  min-height: 64px;
  margin: 0 auto;
  padding: 0 6%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 22px;
  flex-wrap: wrap;
}
.heroStrip__label {
  font-family: var(--font-mono);
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--phosphor);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
}
.heroStrip__num {
  font-size: 10px;
  color: var(--text-muted);
}
.heroStrip__divider {
  width: 44px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(31,232,184,0.6), transparent);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.heroStrip__divider-dot {
  font-size: 4px;
  color: var(--signal);
}

/* ---------- Secondary hero image ---------- */
.heroSecondary {
  position: relative;
  width: 100%;
  height: 62vh;
  min-height: 430px;
  background: var(--void);
  overflow: hidden;
  display: flex;
  align-items: center;
}
.heroSecondary__image {
  position: absolute;
  inset: 0;
  background-image: url(/assets/images/h2.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.heroSecondary__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, var(--void) 0%, transparent 30%, transparent 70%, var(--void) 100%);
  z-index: 1;
}
.heroSecondary__scanline {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
    transparent 0%,
    rgba(31,232,184,0.02) 50%,
    transparent 100%
  );
  background-size: 100% 4px;
  animation: scanline 8s linear infinite;
  z-index: 2;
}
@keyframes scanline {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
}
.heroSecondary__data-overlay {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 3;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 4px;
  opacity: 0.6;
}
.heroSecondary__content {
  position: relative;
  z-index: 4;
  max-width: 560px;
  padding: 0 6%;
  text-shadow: 0 2px 18px rgba(0,0,0,0.6);
}
.heroSecondary__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4.4vw, 46px);
  font-weight: 600;
  line-height: 1.16;
  margin: 0 0 18px;
}
.heroSecondary__accent { color: var(--signal); }
.heroSecondary__sub {
  font-size: clamp(15px, 1.5vw, 17px);
  color: var(--text-secondary);
  max-width: 420px;
  margin: 0;
}

/* ---------- Sections ---------- */
.section { padding: 96px 0; position: relative; }
.section--panel { background: linear-gradient(180deg, var(--panel), var(--void)); }
.section__inner { max-width: var(--maxw); margin: 0 auto; padding: 0 6%; }
.section__head { max-width: 720px; margin-bottom: 48px; }
.section__title {
  font-family: var(--font-display);
  font-size: clamp(26px, 3.4vw, 38px);
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 14px;
}
.section__sub { color: var(--text-secondary); font-size: 16px; max-width: 600px; }

.grid { display: grid; gap: 20px; }
.grid--4 { grid-template-columns: repeat(1, 1fr); }
@media (min-width: 640px) { .grid--4 { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1024px) { .grid--4 { grid-template-columns: repeat(4, 1fr); } }

/* ---------- AI Dashboard ---------- */
.ai-dashboard {
  border: 1px solid rgba(31,232,184,0.12);
  border-radius: var(--radius);
  padding: 24px;
  background: var(--panel);
}
.ai-dashboard__header {
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(31,232,184,0.08);
}
.ai-dashboard__status {
  color: var(--signal);
}

/* ---------- Readout bar ---------- */
.readoutBar {
  display: flex;
  align-items: stretch;
  gap: 28px;
  flex-wrap: wrap;
}
.readoutBar__item { flex: 1; min-width: 180px; }
.readoutBar__stat {
  font-family: var(--font-mono);
  font-size: 40px;
  font-weight: 500;
  color: var(--signal);
  margin-bottom: 10px;
  line-height: 1;
  display: flex;
  align-items: center;
  gap: 12px;
}
.readoutBar__trend {
  font-size: 14px;
  color: var(--phosphor);
  font-weight: 400;
}
.readoutBar--accent .readoutBar__stat { color: var(--phosphor); }
.readoutBar__label { color: var(--text-secondary); font-size: 14px; max-width: 220px; }
.readoutBar__rule {
  width: 1px;
  background: linear-gradient(to bottom, transparent, rgba(31,232,184,0.16), transparent);
  align-self: stretch;
}
.readoutBar__progress {
  margin-top: 12px;
  height: 2px;
  background: rgba(31,232,184,0.1);
  border-radius: 2px;
  overflow: hidden;
}
.readoutBar__progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--signal), var(--phosphor));
  border-radius: 2px;
  animation: progressPulse 2s ease-in-out infinite;
}
@keyframes progressPulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}
@media (max-width: 640px) {
  .readoutBar { flex-direction: column; gap: 24px; }
  .readoutBar__rule { display: none; }
}

/* ---------- Founder dossier ---------- */
.dossier { display: grid; gap: 20px; grid-template-columns: repeat(1, 1fr); }
@media (min-width: 768px) { .dossier { grid-template-columns: repeat(2, 1fr); } }
.dossierCard {
  background: var(--panel);
  border: 1px solid rgba(31,232,184,0.1);
  border-radius: var(--radius);
  padding: 26px 26px 24px;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, transform 0.3s ease;
}
.dossierCard:hover {
  border-color: rgba(31,232,184,0.3);
  transform: translateY(-2px);
}
.dossierCard__top { display: flex; align-items: flex-start; gap: 16px; margin-bottom: 18px; }
.dossierCard__id {
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 6px;
  background: linear-gradient(135deg, var(--signal), var(--circuit));
  position: relative;
  overflow: hidden;
}
.dossierCard__id-pulse {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 70%);
  animation: idPulse 2s ease-in-out infinite;
}
@keyframes idPulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}
.dossierCard__heading { flex: 1; }
.dossierCard__name { font-family: var(--font-display); font-size: 18px; margin: 0 0 4px; }
.dossierCard__role { font-family: var(--font-mono); font-size: 12px; color: var(--signal); margin: 0; letter-spacing: 0.02em; }
.dossierCard__years {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  border: 1px solid rgba(31,232,184,0.2);
  padding: 4px 8px;
  border-radius: 6px;
  white-space: nowrap;
}
.dossierCard__bio { color: var(--text-secondary); font-size: 14.5px; margin: 0 0 18px; }
.dossierCard__scars {
  list-style: none;
  margin: 0;
  padding: 14px 0 0;
  border-top: 1px solid rgba(31,232,184,0.08);
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.dossierCard__scars li {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-muted);
  padding-left: 20px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
}
.dossierCard__scar-icon {
  color: var(--signal);
  font-size: 8px;
}
.dossierCard__neural {
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  gap: 4px;
}
.dossierCard__neural-dot {
  width: 4px;
  height: 4px;
  background: var(--signal);
  border-radius: 50%;
  animation: neuralDot 1.5s ease-in-out infinite;
}
.dossierCard__neural-dot:nth-child(2) { animation-delay: 0.3s; }
.dossierCard__neural-dot:nth-child(3) { animation-delay: 0.6s; }
@keyframes neuralDot {
  0%, 100% { opacity: 0.2; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
}

/* ---------- Ledger ---------- */
.ledger {
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
  position: relative;
}
@media (min-width: 768px) { .ledger { grid-template-columns: 1fr 1px 1fr; } }
.ledger__col { padding: 6px 0; }
@media (min-width: 768px) { .ledger__col { padding: 6px 36px; } }
.ledger__spine {
  background: linear-gradient(to bottom, transparent, rgba(31,232,184,0.15), transparent);
  display: none;
  position: relative;
}
@media (min-width: 768px) { .ledger__spine { display: block; } }
.ledger__spine-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: var(--signal);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: spinePulse 2s ease-in-out infinite;
  box-shadow: 0 0 12px var(--signal);
}
@keyframes spinePulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
  50% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
}
.ledger__tag {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.1em;
  color: var(--text-muted);
  border: 1px solid rgba(81,113,106,0.4);
  padding: 3px 9px;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
}
.ledger__tag-icon { font-size: 10px; }
.ledger__tag--accent { color: var(--signal); border-color: rgba(31,232,184,0.35); }
.ledger__heading { font-family: var(--font-display); font-size: 19px; margin: 0 0 12px; color: var(--text-secondary); }
.ledger__heading--accent { color: var(--phosphor); }
.ledger__text { color: var(--text-secondary); font-size: 15.5px; max-width: 420px; margin: 0; }
.ledger__col--problem { margin-bottom: 28px; }
@media (min-width: 768px) { .ledger__col--problem { margin-bottom: 0; } }

/* ---------- Programme cards ---------- */
.programmeCard {
  background: var(--panel);
  border-radius: var(--radius);
  padding: 26px 22px;
  border: 1px solid rgba(31,232,184,0.1);
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, border-color 0.3s ease;
}
.programmeCard:hover {
  transform: translateY(-4px);
  border-color: rgba(31,232,184,0.3);
}
.programmeCard__icon {
  font-size: 24px;
  margin-bottom: 12px;
  display: block;
}
.programmeCard__code {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
}
.programmeCard__code-dot { color: var(--signal); font-size: 6px; }
.programmeCard__name { font-family: var(--font-display); font-size: 17px; margin: 0 0 8px; }
.programmeCard__desc { color: var(--text-secondary); font-size: 14px; margin: 0; }
.programmeCard__glow {
  position: absolute;
  top: -50%;
  right: -50%;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(31,232,184,0.03), transparent 70%);
  pointer-events: none;
}

/* ---------- Audience switcher ---------- */
.switcher {
  display: grid;
  gap: 0;
  grid-template-columns: 1fr;
  border: 1px solid rgba(31,232,184,0.12);
  border-radius: var(--radius);
  overflow: hidden;
}
@media (min-width: 860px) { .switcher { grid-template-columns: 240px 1fr; } }

.switcher__tabs {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  background: var(--panel);
  border-bottom: 1px solid rgba(31,232,184,0.1);
}
@media (min-width: 860px) {
  .switcher__tabs { flex-direction: column; border-bottom: none; border-right: 1px solid rgba(31,232,184,0.1); }
}
.switcher__tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 18px;
  text-align: left;
  font-family: var(--font-mono);
  font-size: 12.5px;
  letter-spacing: 0.04em;
  color: var(--text-muted);
  border-left: 2px solid transparent;
  white-space: nowrap;
  transition: color 0.2s, background 0.2s, border-color 0.2s;
}
@media (min-width: 860px) { .switcher__tab { white-space: normal; } }
.switcher__tab:hover { color: var(--text-secondary); background: rgba(31,232,184,0.04); }
.switcher__tab.is-active {
  color: var(--phosphor);
  background: rgba(31,232,184,0.08);
  border-left-color: var(--signal);
}
.switcher__tabBadge {
  font-size: 9.5px;
  background: var(--signal);
  color: var(--void);
  padding: 2px 7px;
  border-radius: 999px;
  letter-spacing: 0.02em;
  display: flex;
  align-items: center;
  gap: 4px;
}
.switcher__tabBadge-dot { font-size: 6px; }

.switcher__panel {
  padding: 32px 30px;
  background: var(--void);
  animation: panelFade 0.25s ease;
}
@keyframes panelFade { from { opacity: 0; transform: translateY(4px); } to { opacity: 1; transform: none; } }
.switcher__title { font-family: var(--font-display); font-size: 22px; margin: 0 0 14px; max-width: 480px; }
.switcher__body { color: var(--text-secondary); font-size: 15px; max-width: 520px; margin: 0 0 22px; }
.switcher__list { list-style: none; padding: 0; margin: 0 0 26px; display: flex; flex-direction: column; gap: 11px; }
.switcher__list li {
  font-size: 14px;
  color: var(--text-secondary);
  padding-left: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.switcher__list-icon { color: var(--signal); font-size: 12px; }
.switcher__cta {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--void);
  background: var(--signal);
  padding: 11px 20px;
  border-radius: 8px;
  letter-spacing: 0.02em;
  transition: box-shadow 0.2s, transform 0.15s;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.switcher__cta:hover { box-shadow: 0 6px 20px -4px rgba(31,232,184,0.5); transform: translateY(-1px); }
.switcher__cta-icon { font-size: 12px; }

/* ---------- Success pathway ---------- */
.pathway { display: flex; flex-direction: column; gap: 0; }
@media (min-width: 900px) { .pathway { flex-direction: row; align-items: flex-start; } }
.pathway__step {
  flex: 1;
  padding: 4px 0;
  position: relative;
}
.pathway__num {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--void);
  background: var(--phosphor);
  display: inline-block;
  padding: 3px 9px;
  border-radius: 5px;
  margin-bottom: 12px;
  font-weight: 600;
}
.pathway__icon { font-size: 24px; margin-bottom: 8px; display: block; }
.pathway__title { font-family: var(--font-display); font-size: 18px; margin: 0 0 8px; }
.pathway__desc { color: var(--text-secondary); font-size: 14px; max-width: 240px; margin: 0 0 12px; }
.pathway__progress {
  height: 2px;
  background: rgba(31,232,184,0.1);
  border-radius: 2px;
  overflow: hidden;
  width: 80%;
}
.pathway__progress-bar {
  height: 100%;
  background: linear-gradient(90deg, var(--signal), var(--phosphor));
  border-radius: 2px;
  transition: width 1s ease;
}
.pathway__connector {
  width: 1px;
  height: 30px;
  background: rgba(31,232,184,0.2);
  margin: 6px 0 6px 18px;
  position: relative;
}
.pathway__connector-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: var(--signal);
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
@media (min-width: 900px) {
  .pathway__connector { width: auto; height: 1px; flex: 0 0 40px; margin: 26px 0 0; background: rgba(31,232,184,0.25); }
}

/* ---------- Workshops ---------- */
.workshopList { display: flex; flex-direction: column; gap: 1px; border-radius: var(--radius); overflow: hidden; }
.workshopRow {
  display: grid;
  grid-template-columns: 70px 1fr auto auto;
  align-items: center;
  gap: 18px;
  background: var(--panel);
  padding: 18px 22px;
  border-bottom: 1px solid rgba(31,232,184,0.06);
  transition: background 0.3s ease;
}
.workshopRow:hover { background: rgba(31,232,184,0.03); }
.workshopRow__date {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--phosphor);
  display: flex;
  align-items: center;
  gap: 6px;
}
.workshopRow__date-dot {
  font-size: 6px;
  color: var(--signal);
}
.workshopRow__title { font-size: 15px; }
.workshopRow__mode { font-size: 12.5px; color: var(--text-muted); display: none; }
@media (min-width: 640px) { .workshopRow__mode { display: block; } }
.workshopRow__cta {
  font-family: var(--font-mono);
  font-size: 12px;
  border: 1px solid rgba(31,232,184,0.3);
  padding: 7px 14px;
  border-radius: 999px;
  color: var(--phosphor);
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 4px;
  transition: border-color 0.2s, background 0.2s;
}
.workshopRow__cta:hover { border-color: var(--signal); background: rgba(31,232,184,0.08); }
.workshopRow__cta-icon { font-size: 8px; }

/* ---------- Academy tour ---------- */
.tourPanel {
  position: relative;
  height: 360px;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at 50% 50%, var(--circuit), var(--void) 75%);
  border: 1px solid rgba(31,232,184,0.1);
}
.tourPanel__hologram {
  position: absolute;
  inset: 0;
  overflow: hidden;
}
.tourPanel__hologram-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(31,232,184,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(31,232,184,0.03) 1px, transparent 1px);
  background-size: 30px 30px;
}
.tourPanel__hologram-pulse {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(31,232,184,0.15), transparent 70%);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  animation: hologramPulse 3s ease-in-out infinite;
}
@keyframes hologramPulse {
  0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
  50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
}
.tourPanel__playGlow {
  position: absolute;
  width: 240px;
  height: 240px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(31,232,184,0.32), transparent 70%);
  filter: blur(4px);
}
.tourPanel__playBtn {
  position: relative;
  z-index: 2;
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(31,232,184,0.12);
  border: 1px solid var(--phosphor);
  color: var(--phosphor);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background 0.2s;
}
.tourPanel__playBtn:hover { transform: scale(1.08); background: rgba(31,232,184,0.2); }
.tourPanel__playIcon { font-size: 22px; }
.tourPanel__caption {
  position: absolute;
  bottom: 22px;
  left: 0;
  right: 0;
  text-align: center;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.04em;
  z-index: 2;
}
.tourPanel__data-feed {
  position: absolute;
  top: 16px;
  left: 16px;
  right: 16px;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--text-muted);
  opacity: 0.5;
  z-index: 2;
}

/* ---------- CTA ---------- */
.cta {
  position: relative;
  padding: 110px 6%;
  text-align: center;
  background: radial-gradient(ellipse 70% 60% at 50% 0%, var(--circuit), var(--void) 70%);
  overflow: hidden;
}
.cta__neural-bg {
  position: absolute;
  inset: 0;
  overflow: hidden;
  pointer-events: none;
}
.cta__neural-particle {
  position: absolute;
  width: 2px;
  height: 2px;
  background: var(--signal);
  border-radius: 50%;
  animation: neuralParticle 8s ease-in-out infinite;
  opacity: 0.3;
}
.cta__neural-particle:nth-child(1) { top: 20%; left: 20%; animation-delay: 0s; }
.cta__neural-particle:nth-child(2) { top: 60%; left: 70%; animation-delay: 2s; }
.cta__neural-particle:nth-child(3) { top: 80%; left: 30%; animation-delay: 4s; }
@keyframes neuralParticle {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(50px, -30px) scale(3); opacity: 0.8; }
}
.cta__inner { max-width: 700px; margin: 0 auto; position: relative; z-index: 1; }
.cta__title {
  font-family: var(--font-display);
  font-size: clamp(28px, 4vw, 42px);
  font-weight: 600;
  margin: 0 0 18px;
  line-height: 1.2;
}
.cta__sub { color: var(--text-secondary); font-size: 16px; margin-bottom: 36px; }
.cta__row { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
.cta__eyebrow-icon { font-size: 12px; }
.cta__ai-status {
  margin-top: 32px;
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.cta__ai-dot {
  color: var(--signal);
  animation: pulseDot 2s ease-in-out infinite;
}

/* ---------- Footer ---------- */
.footer {
  padding: 56px 6% 40px;
  border-top: 1px solid rgba(31,232,184,0.08);
  position: relative;
}
.footer__neural-line {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--signal), transparent);
  opacity: 0.3;
}
.footer__inner { max-width: var(--maxw); margin: 0 auto; display: flex; flex-direction: column; gap: 18px; }
.footer__brand { display: flex; align-items: baseline; gap: 8px; }
.footer__brand-ai {
  font-family: var(--font-mono);
  font-size: 9px;
  color: var(--signal);
  opacity: 0.5;
  letter-spacing: 0.1em;
}
.footer__tag { color: var(--text-muted); font-size: 13.5px; max-width: 360px; }
.footer__links { display: flex; gap: 26px; font-size: 13.5px; color: var(--text-secondary); flex-wrap: wrap; }
.footer__links a {
  display: flex;
  align-items: center;
  gap: 4px;
  transition: color 0.3s ease;
}
.footer__links a:hover { color: var(--phosphor); }
.footer__link-icon { font-size: 8px; }
.footer__ai-metrics {
  display: flex;
  gap: 24px;
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-muted);
  opacity: 0.5;
  padding-top: 16px;
  border-top: 1px solid rgba(31,232,184,0.06);
}

/* ---------- Personalization Gate ---------- */
.gate {
  position: fixed;
  inset: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}
.gate__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(4,9,10,0.92);
  backdrop-filter: blur(8px);
  overflow: hidden;
}
.gate__scanline {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, rgba(31,232,184,0.1), transparent);
  animation: scanline 0.05s linear infinite;
}
.gate__grid-overlay {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(31,232,184,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(31,232,184,0.02) 1px, transparent 1px);
  background-size: 40px 40px;
}
.gate__panel {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 560px;
  background: var(--panel);
  border: 1px solid rgba(31,232,184,0.15);
  border-radius: 16px;
  box-shadow: 0 30px 80px -20px rgba(0,0,0,0.7), 0 0 0 1px rgba(31,232,184,0.06), 0 0 40px rgba(31,232,184,0.03);
  overflow: hidden;
  animation: gateIn 0.35s ease;
}
@keyframes gateIn { from { opacity: 0; transform: translateY(10px) scale(0.98); } to { opacity: 1; transform: none; } }
.gate__panelHeader {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--void);
  border-bottom: 1px solid rgba(31,232,184,0.08);
}
.gate__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--signal);
}
.gate__headerText {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.08em;
  color: var(--text-muted);
  flex: 1;
}
.gate__headerId { font-family: var(--font-mono); font-size: 10px; color: var(--text-muted); opacity: 0.6; }
.gate__body { padding: 36px 32px 30px; }
.gate__kicker {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--phosphor);
  letter-spacing: 0.05em;
  margin: 0 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.gate__kicker-dot {
  color: var(--signal);
  font-size: 8px;
}
.gate__title {
  font-family: var(--font-display);
  font-size: 26px;
  margin: 0 0 12px;
}
.gate__copy { color: var(--text-secondary); font-size: 14.5px; margin: 0 0 26px; max-width: 440px; }
.gate__options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 18px; }
.gate__option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  text-align: left;
  padding: 16px 18px;
  border-radius: 10px;
  border: 1px solid rgba(31,232,184,0.12);
  background: rgba(31,232,184,0.02);
  transition: border-color 0.2s, background 0.2s, transform 0.15s;
}
.gate__option:hover, .gate__option.is-active {
  border-color: var(--signal);
  background: rgba(31,232,184,0.08);
  transform: translateX(2px);
}
.gate__optionMarker {
  font-size: 12px;
  color: var(--signal);
  width: 16px;
}
.gate__optionLabel { font-family: var(--font-display); font-size: 15.5px; font-weight: 600; flex: 0 0 150px; }
.gate__optionSub { font-size: 13px; color: var(--text-muted); flex: 1; }
.gate__optionArrow { color: var(--phosphor); font-size: 16px; }
.gate__skip {
  font-family: var(--font-mono);
  font-size: 12.5px;
  color: var(--text-muted);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s ease;
}
.gate__skip:hover { color: var(--phosphor); }
.gate__skip-icon { font-size: 14px; }
`,fg=b.createContext({});function x2(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const y2=typeof window<"u",v2=y2?b.useLayoutEffect:b.useEffect,su=b.createContext(null);function ou(e,t){e.indexOf(t)===-1&&e.push(t)}function oo(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const gt=(e,t,n)=>n>t?t:n<e?e:n;let au=()=>{};const qt={},hg=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),mg=e=>typeof e=="object"&&e!==null,gg=e=>/^0[^.\s]+$/u.test(e);function xg(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ke=e=>e,vi=(...e)=>e.reduce((t,n)=>r=>n(t(r))),ci=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class lu{constructor(){this.subscriptions=[]}add(t){return ou(this.subscriptions,t),()=>oo(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let s=0;s<i;s++){const a=this.subscriptions[s];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ze=e=>e*1e3,He=e=>e/1e3,yg=(e,t)=>t?e*(1e3/t):0,vg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,w2=1e-7,S2=12;function b2(e,t,n,r,i){let s,a,l=0;do a=t+(n-t)/2,s=vg(a,r,i)-e,s>0?n=a:t=a;while(Math.abs(s)>w2&&++l<S2);return a}function wi(e,t,n,r){if(e===t&&n===r)return Ke;const i=s=>b2(s,0,1,e,n);return s=>s===0||s===1?s:vg(i(s),t,r)}const wg=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Sg=e=>t=>1-e(1-t),bg=wi(.33,1.53,.69,.99),cu=Sg(bg),kg=wg(cu),jg=e=>e>=1?1:(e*=2)<1?.5*cu(e):.5*(2-Math.pow(2,-10*(e-1))),uu=e=>1-Math.sin(Math.acos(e)),_g=Sg(uu),Cg=wg(uu),k2=wi(.42,0,1,1),j2=wi(0,0,.58,1),Ag=wi(.42,0,.58,1),_2=e=>Array.isArray(e)&&typeof e[0]!="number",Tg=e=>Array.isArray(e)&&typeof e[0]=="number",C2={linear:Ke,easeIn:k2,easeInOut:Ag,easeOut:j2,circIn:uu,circInOut:Cg,circOut:_g,backIn:cu,backInOut:kg,backOut:bg,anticipate:jg},A2=e=>typeof e=="string",Jd=e=>{if(Tg(e)){au(e.length===4);const[t,n,r,i]=e;return wi(t,n,r,i)}else if(A2(e))return C2[e];return e},Hi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function T2(e){let t=new Set,n=new Set,r=!1,i=!1;const s=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(u){s.has(u)&&(c.schedule(u),e()),u(a)}const c={schedule:(u,d=!1,p=!1)=>{const x=p&&r?t:n;return d&&s.add(u),x.add(u),u},cancel:u=>{n.delete(u),s.delete(u)},process:u=>{if(a=u,r){i=!0;return}r=!0;const d=t;t=n,n=d,t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const P2=40;function Pg(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,a=Hi.reduce((g,w)=>(g[w]=T2(s),g),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:d,update:p,preRender:f,render:x,postRender:y}=a,v=()=>{const g=qt.useManualTiming,w=g?i.timestamp:performance.now();n=!1,g||(i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,P2),1)),i.timestamp=w,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),d.process(i),p.process(i),f.process(i),x.process(i),y.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},S=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Hi.reduce((g,w)=>{const k=a[w];return g[w]=(A,C=!1,j=!1)=>(n||S(),k.schedule(A,C,j)),g},{}),cancel:g=>{for(let w=0;w<Hi.length;w++)a[Hi[w]].cancel(g)},state:i,steps:a}}const{schedule:$,cancel:Zt,state:de,steps:ga}=Pg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ke,!0);let Cs;function E2(){Cs=void 0}const we={now:()=>(Cs===void 0&&we.set(de.isProcessing||qt.useManualTiming?de.timestamp:performance.now()),Cs),set:e=>{Cs=e,queueMicrotask(E2)}},Eg=e=>t=>typeof t=="string"&&t.startsWith(e),Ig=Eg("--"),I2=Eg("var(--"),du=e=>I2(e)?N2.test(e.split("/*")[0].trim()):!1,N2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ep(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const hr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ui={...hr,transform:e=>gt(0,1,e)},Gi={...hr,default:1},Vr=e=>Math.round(e*1e5)/1e5,pu=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function R2(e){return e==null}const D2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,fu=(e,t)=>n=>!!(typeof n=="string"&&D2.test(n)&&n.startsWith(e)||t&&!R2(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ng=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,s,a,l]=r.match(pu);return{[e]:parseFloat(i),[t]:parseFloat(s),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},M2=e=>gt(0,255,e),xa={...hr,transform:e=>Math.round(M2(e))},hn={test:fu("rgb","red"),parse:Ng("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+xa.transform(e)+", "+xa.transform(t)+", "+xa.transform(n)+", "+Vr(ui.transform(r))+")"};function z2(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const zl={test:fu("#"),parse:z2,transform:hn.transform},Si=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),yt=Si("deg"),mt=Si("%"),I=Si("px"),L2=Si("vh"),B2=Si("vw"),tp={...mt,parse:e=>mt.parse(e)/100,transform:e=>mt.transform(e*100)},Gn={test:fu("hsl","hue"),parse:Ng("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+mt.transform(Vr(t))+", "+mt.transform(Vr(n))+", "+Vr(ui.transform(r))+")"},ne={test:e=>hn.test(e)||zl.test(e)||Gn.test(e),parse:e=>hn.test(e)?hn.parse(e):Gn.test(e)?Gn.parse(e):zl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?hn.transform(e):Gn.transform(e),getAnimatableNone:e=>{const t=ne.parse(e);return t.alpha=0,ne.transform(t)}},F2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function V2(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(pu))==null?void 0:t.length)||0)+(((n=e.match(F2))==null?void 0:n.length)||0)>0}const Rg="number",Dg="color",O2="var",W2="var(",np="${}",$2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function lr(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let s=0;const l=t.replace($2,c=>(ne.test(c)?(r.color.push(s),i.push(Dg),n.push(ne.parse(c))):c.startsWith(W2)?(r.var.push(s),i.push(O2),n.push(c)):(r.number.push(s),i.push(Rg),n.push(parseFloat(c))),++s,np)).split(np);return{values:n,split:l,indexes:r,types:i}}function U2(e){return lr(e).values}function Mg({split:e,types:t}){const n=e.length;return r=>{let i="";for(let s=0;s<n;s++)if(i+=e[s],r[s]!==void 0){const a=t[s];a===Rg?i+=Vr(r[s]):a===Dg?i+=ne.transform(r[s]):i+=r[s]}return i}}function H2(e){return Mg(lr(e))}const G2=e=>typeof e=="number"?0:ne.test(e)?ne.getAnimatableNone(e):e,K2=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:G2(e);function Y2(e){const t=lr(e);return Mg(t)(t.values.map((r,i)=>K2(r,t.split[i])))}const ot={test:V2,parse:U2,createTransformer:H2,getAnimatableNone:Y2};function ya(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function X2({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,s=0,a=0;if(!t)i=s=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=ya(c,l,e+1/3),s=ya(c,l,e),a=ya(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(s*255),blue:Math.round(a*255),alpha:r}}function ao(e,t){return n=>n>0?t:e}const W=(e,t,n)=>e+(t-e)*n,va=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Q2=[zl,hn,Gn],q2=e=>Q2.find(t=>t.test(e));function rp(e){const t=q2(e);if(!t)return!1;let n=t.parse(e);return t===Gn&&(n=X2(n)),n}const ip=(e,t)=>{const n=rp(e),r=rp(t);if(!n||!r)return ao(e,t);const i={...n};return s=>(i.red=va(n.red,r.red,s),i.green=va(n.green,r.green,s),i.blue=va(n.blue,r.blue,s),i.alpha=W(n.alpha,r.alpha,s),hn.transform(i))},Ll=new Set(["none","hidden"]);function Z2(e,t){return Ll.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function J2(e,t){return n=>W(e,t,n)}function hu(e){return typeof e=="number"?J2:typeof e=="string"?du(e)?ao:ne.test(e)?ip:nw:Array.isArray(e)?zg:typeof e=="object"?ne.test(e)?ip:ew:ao}function zg(e,t){const n=[...e],r=n.length,i=e.map((s,a)=>hu(s)(s,t[a]));return s=>{for(let a=0;a<r;a++)n[a]=i[a](s);return n}}function ew(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=hu(e[i])(e[i],t[i]));return i=>{for(const s in r)n[s]=r[s](i);return n}}function tw(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const s=t.types[i],a=e.indexes[s][r[s]],l=e.values[a]??0;n[i]=l,r[s]++}return n}const nw=(e,t)=>{const n=ot.createTransformer(t),r=lr(e),i=lr(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Ll.has(e)&&!i.values.length||Ll.has(t)&&!r.values.length?Z2(e,t):vi(zg(tw(r,i),i.values),n):ao(e,t)};function Lg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?W(e,t,n):hu(e)(e,t)}const rw=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>$.update(t,n),stop:()=>Zt(t),now:()=>de.isProcessing?de.timestamp:we.now()}},Bg=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let s=0;s<i;s++)r+=Math.round(e(s/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},lo=2e4;function mu(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<lo;)t+=n,r=e.next(t);return t>=lo?1/0:t}function iw(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(mu(r),lo);return{type:"keyframes",ease:s=>r.next(i*s).value/t,duration:He(i)}}const q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Bl(e,t){return e*Math.sqrt(1-t*t)}const sw=12;function ow(e,t,n){let r=n;for(let i=1;i<sw;i++)r=r-e(r)/t(r);return r}const wa=.001;function aw({duration:e=q.duration,bounce:t=q.bounce,velocity:n=q.velocity,mass:r=q.mass}){let i,s,a=1-t;a=gt(q.minDamping,q.maxDamping,a),e=gt(q.minDuration,q.maxDuration,He(e)),a<1?(i=u=>{const d=u*a,p=d*e,f=d-n,x=Bl(u,a),y=Math.exp(-p);return wa-f/x*y},s=u=>{const p=u*a*e,f=p*n+n,x=Math.pow(a,2)*Math.pow(u,2)*e,y=Math.exp(-p),v=Bl(Math.pow(u,2),a);return(-i(u)+wa>0?-1:1)*((f-x)*y)/v}):(i=u=>{const d=Math.exp(-u*e),p=(u-n)*e+1;return-wa+d*p},s=u=>{const d=Math.exp(-u*e),p=(n-u)*(e*e);return d*p});const l=5/e,c=ow(i,s,l);if(e=ze(e),isNaN(c))return{stiffness:q.stiffness,damping:q.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const lw=["duration","bounce"],cw=["stiffness","damping","mass"];function sp(e,t){return t.some(n=>e[n]!==void 0)}function uw(e){let t={velocity:q.velocity,stiffness:q.stiffness,damping:q.damping,mass:q.mass,isResolvedFromDuration:!1,...e};if(!sp(e,cw)&&sp(e,lw))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,s=2*gt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:q.mass,stiffness:i,damping:s}}else{const n=aw({...e,velocity:0});t={...t,...n,mass:q.mass},t.isResolvedFromDuration=!0}return t}function co(e=q.visualDuration,t=q.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const s=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:s},{stiffness:c,damping:u,mass:d,duration:p,velocity:f,isResolvedFromDuration:x}=uw({...n,velocity:-He(n.velocity||0)}),y=f||0,v=u/(2*Math.sqrt(c*d)),S=a-s,m=He(Math.sqrt(c/d)),h=Math.abs(S)<5;r||(r=h?q.restSpeed.granular:q.restSpeed.default),i||(i=h?q.restDelta.granular:q.restDelta.default);let g,w,k,A,C,j;if(v<1)k=Bl(m,v),A=(y+v*m*S)/k,g=P=>{const L=Math.exp(-v*m*P);return a-L*(A*Math.sin(k*P)+S*Math.cos(k*P))},C=v*m*A+S*k,j=v*m*S-A*k,w=P=>Math.exp(-v*m*P)*(C*Math.sin(k*P)+j*Math.cos(k*P));else if(v===1){g=L=>a-Math.exp(-m*L)*(S+(y+m*S)*L);const P=y+m*S;w=L=>Math.exp(-m*L)*(m*P*L-y)}else{const P=m*Math.sqrt(v*v-1);g=Ne=>{const Qe=Math.exp(-v*m*Ne),_e=Math.min(P*Ne,300);return a-Qe*((y+v*m*S)*Math.sinh(_e)+P*S*Math.cosh(_e))/P};const L=(y+v*m*S)/P,ee=v*m*L-S*P,Ie=v*m*S-L*P;w=Ne=>{const Qe=Math.exp(-v*m*Ne),_e=Math.min(P*Ne,300);return Qe*(ee*Math.sinh(_e)+Ie*Math.cosh(_e))}}const D={calculatedDuration:x&&p||null,velocity:P=>ze(w(P)),next:P=>{if(!x&&v<1){const ee=Math.exp(-v*m*P),Ie=Math.sin(k*P),Ne=Math.cos(k*P),Qe=a-ee*(A*Ie+S*Ne),_e=ze(ee*(C*Ie+j*Ne));return l.done=Math.abs(_e)<=r&&Math.abs(a-Qe)<=i,l.value=l.done?a:Qe,l}const L=g(P);if(x)l.done=P>=p;else{const ee=ze(w(P));l.done=Math.abs(ee)<=r&&Math.abs(a-L)<=i}return l.value=l.done?a:L,l},toString:()=>{const P=Math.min(mu(D),lo),L=Bg(ee=>D.next(P*ee).value,P,30);return P+"ms "+L},toTransition:()=>{}};return D}co.applyToOptions=e=>{const t=iw(e,100,co);return e.ease=t.ease,e.duration=ze(t.duration),e.type="keyframes",e};const dw=5;function Fg(e,t,n){const r=Math.max(t-dw,0);return yg(n-e(r),t-r)}function Fl({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:s=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:d}){const p=e[0],f={done:!1,value:p},x=j=>l!==void 0&&j<l||c!==void 0&&j>c,y=j=>l===void 0?c:c===void 0||Math.abs(l-j)<Math.abs(c-j)?l:c;let v=n*t;const S=p+v,m=a===void 0?S:a(S);m!==S&&(v=m-p);const h=j=>-v*Math.exp(-j/r),g=j=>m+h(j),w=j=>{const D=h(j),P=g(j);f.done=Math.abs(D)<=u,f.value=f.done?m:P};let k,A;const C=j=>{x(f.value)&&(k=j,A=co({keyframes:[f.value,y(f.value)],velocity:Fg(g,j,f.value),damping:i,stiffness:s,restDelta:u,restSpeed:d}))};return C(0),{calculatedDuration:null,next:j=>{let D=!1;return!A&&k===void 0&&(D=!0,w(j),C(j)),k!==void 0&&j>=k?A.next(j-k):(!D&&w(j),f)}}}function pw(e,t,n){const r=[],i=n||qt.mix||Lg,s=e.length-1;for(let a=0;a<s;a++){let l=i(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||Ke:t;l=vi(c,l)}r.push(l)}return r}function fw(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const s=e.length;if(au(s===t.length),s===1)return()=>t[0];if(s===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[s-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=pw(t,r,i),c=l.length,u=d=>{if(a&&d<e[0])return t[0];let p=0;if(c>1)for(;p<e.length-2&&!(d<e[p+1]);p++);const f=ci(e[p],e[p+1],d);return l[p](f)};return n?d=>u(gt(e[0],e[s-1],d)):u}function hw(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ci(0,t,r);e.push(W(n,1,i))}}function mw(e){const t=[0];return hw(t,e.length-1),t}function gw(e,t){return e.map(n=>n*t)}function xw(e,t){return e.map(()=>t||Ag).splice(0,e.length-1)}function Or({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=_2(r)?r.map(Jd):Jd(r),s={done:!1,value:t[0]},a=gw(n&&n.length===t.length?n:mw(t),e),l=fw(a,t,{ease:Array.isArray(i)?i:xw(t,i)});return{calculatedDuration:e,next:c=>(s.value=l(c),s.done=c>=e,s)}}const yw=e=>e!==null;function zo(e,{repeat:t,repeatType:n="loop"},r,i=1){const s=e.filter(yw),l=i<0||t&&n!=="loop"&&t%2===1?0:s.length-1;return!l||r===void 0?s[l]:r}const vw={decay:Fl,inertia:Fl,tween:Or,keyframes:Or,spring:co};function Vg(e){typeof e.type=="string"&&(e.type=vw[e.type])}class gu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const ww=e=>e/100;class uo extends gu{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==we.now()&&this.tick(we.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Vg(t);const{type:n=Or,repeat:r=0,repeatDelay:i=0,repeatType:s,velocity:a=0}=t;let{keyframes:l}=t;const c=n||Or;c!==Or&&typeof l[0]!="number"&&(this.mixKeyframes=vi(ww,Lg(l[0],l[1])),l=[0,100]);const u=c({...t,keyframes:l});s==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-a})),u.calculatedDuration===null&&(u.calculatedDuration=mu(u));const{calculatedDuration:d}=u;this.calculatedDuration=d,this.resolvedDuration=d+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:s,mirroredGenerator:a,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:d,repeat:p,repeatType:f,repeatDelay:x,type:y,onUpdate:v,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const m=this.currentTime-u*(this.playbackSpeed>=0?1:-1),h=this.playbackSpeed>=0?m<0:m>i;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let g=this.currentTime,w=r;if(p){const j=Math.min(this.currentTime,i)/l;let D=Math.floor(j),P=j%1;!P&&j>=1&&(P=1),P===1&&D--,D=Math.min(D,p+1),!!(D%2)&&(f==="reverse"?(P=1-P,x&&(P-=x/l)):f==="mirror"&&(w=a)),g=gt(0,1,P)*l}let k;h?(this.delayState.value=d[0],k=this.delayState):k=w.next(g),s&&!h&&(k.value=s(k.value));let{done:A}=k;!h&&c!==null&&(A=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return C&&y!==Fl&&(k.value=zo(d,this.options,S,this.speed)),v&&v(k.value),C&&this.finish(),k}then(t,n){return this.finished.then(t,n)}get duration(){return He(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(this.currentTime)}set time(t){t=ze(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return Fg(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(we.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=He(this.currentTime))}play(){var i,s;if(this.isStopped)return;const{driver:t=rw,startTime:n}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),(s=(i=this.options).onPlay)==null||s.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(we.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function Sw(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const mn=e=>e*180/Math.PI,Vl=e=>{const t=mn(Math.atan2(e[1],e[0]));return Ol(t)},bw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:Vl,rotateZ:Vl,skewX:e=>mn(Math.atan(e[1])),skewY:e=>mn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Ol=e=>(e=e%360,e<0&&(e+=360),e),op=Vl,ap=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),lp=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),kw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ap,scaleY:lp,scale:e=>(ap(e)+lp(e))/2,rotateX:e=>Ol(mn(Math.atan2(e[6],e[5]))),rotateY:e=>Ol(mn(Math.atan2(-e[2],e[0]))),rotateZ:op,rotate:op,skewX:e=>mn(Math.atan(e[4])),skewY:e=>mn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Wl(e){return e.includes("scale")?1:0}function $l(e,t){if(!e||e==="none")return Wl(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=kw,i=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=bw,i=l}if(!i)return Wl(t);const s=r[t],a=i[1].split(",").map(_w);return typeof s=="function"?s(a):a[s]}const jw=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return $l(n,t)};function _w(e){return parseFloat(e.trim())}const mr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gr=new Set([...mr,"pathRotation"]),cp=e=>e===hr||e===I,Cw=new Set(["x","y","z"]),Aw=mr.filter(e=>!Cw.has(e));function Tw(e){const t=[];return Aw.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ft={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>$l(t,"x"),y:(e,{transform:t})=>$l(t,"y")};Ft.translateX=Ft.x;Ft.translateY=Ft.y;const yn=new Set;let Ul=!1,Hl=!1,Gl=!1;function Og(){if(Hl){const e=Array.from(yn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=Tw(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([s,a])=>{var l;(l=r.getValue(s))==null||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Hl=!1,Ul=!1,yn.forEach(e=>e.complete(Gl)),yn.clear()}function Wg(){yn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Hl=!0)})}function Pw(){Gl=!0,Wg(),Og(),Gl=!1}class xu{constructor(t,n,r,i,s,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=s,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(yn.add(this),Ul||(Ul=!0,$.read(Wg),$.resolveKeyframes(Og))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const s=i==null?void 0:i.get(),a=t[t.length-1];if(s!==void 0)t[0]=s;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),i&&s===void 0&&i.set(t[0])}Sw(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),yn.delete(this)}cancel(){this.state==="scheduled"&&(yn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const Ew=e=>e.startsWith("--");function $g(e,t,n){Ew(t)?e.style.setProperty(t,n):e.style[t]=n}const Iw={};function Ug(e,t){const n=xg(e);return()=>Iw[t]??n()}const Nw=Ug(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Hg=Ug(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Er=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,up={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Er([0,.65,.55,1]),circOut:Er([.55,0,1,.45]),backIn:Er([.31,.01,.66,-.59]),backOut:Er([.33,1.53,.69,.99])};function Gg(e,t){if(e)return typeof e=="function"?Hg()?Bg(e,t):"ease-out":Tg(e)?Er(e):Array.isArray(e)?e.map(n=>Gg(n,t)||up.easeOut):up[e]}function Rw(e,t,n,{delay:r=0,duration:i=300,repeat:s=0,repeatType:a="loop",ease:l="easeOut",times:c}={},u=void 0){const d={[t]:n};c&&(d.offset=c);const p=Gg(l,i);Array.isArray(p)&&(d.easing=p);const f={delay:r,duration:i,easing:Array.isArray(p)?"linear":p,fill:"both",iterations:s+1,direction:a==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(d,f)}function Kg(e){return typeof e=="function"&&"applyToOptions"in e}function Dw({type:e,...t}){return Kg(e)&&Hg()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class Yg extends gu{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:s,allowFlatten:a=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!s,this.allowFlatten=a,this.options=t,au(typeof t.type!="string");const u=Dw(t);this.animation=Rw(n,r,i,u,s),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const d=zo(i,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(d),$g(n,r,d),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return He(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+He(t)}get time(){return He(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ze(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var s;return this.allowFlatten&&((s=this.animation.effect)==null||s.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&Nw()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),Ke):i(this)}}const Xg={anticipate:jg,backInOut:kg,circInOut:Cg};function Mw(e){return e in Xg}function zw(e){typeof e.ease=="string"&&Mw(e.ease)&&(e.ease=Xg[e.ease])}const Sa=10;class Lw extends Yg{constructor(t){zw(t),Vg(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:s,...a}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new uo({...a,autoplay:!1}),c=Math.max(Sa,we.now()-this.startTime),u=gt(0,Sa,c-Sa),d=l.sample(c).value,{name:p}=this.options;s&&p&&$g(s,p,d),n.setWithVelocity(l.sample(Math.max(0,c-u)).value,d,u),l.stop()}}const dp=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(ot.test(e)||e==="0")&&!e.startsWith("url("));function Bw(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function Fw(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const s=e[e.length-1],a=dp(i,t),l=dp(s,t);return!a||!l?!1:Bw(e)||(n==="spring"||Kg(n))&&r}function Kl(e){e.duration=0,e.type="keyframes"}const Qg=new Set(["opacity","clipPath","filter","transform"]),Vw=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function Ow(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&Vw.test(e[t]))return!0;return!1}const Ww=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),$w=xg(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function Uw(e){var p;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:s,type:a,keyframes:l}=e;if(!(((p=t==null?void 0:t.owner)==null?void 0:p.current)instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:d}=t.owner.getProps();return $w()&&n&&(Qg.has(n)||Ww.has(n)&&Ow(l))&&(n!=="transform"||!d)&&!u&&!r&&i!=="mirror"&&s!==0&&a!=="inertia"}const Hw=40;class Gw extends gu{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:s=0,repeatType:a="loop",keyframes:l,name:c,motionValue:u,element:d,...p}){var y;super(),this.stop=()=>{var v,S;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(S=this.keyframeResolver)==null||S.cancel()},this.createdAt=we.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:s,repeatType:a,name:c,motionValue:u,element:d,...p},x=(d==null?void 0:d.KeyframeResolver)||xu;this.keyframeResolver=new x(l,(v,S,m)=>this.onKeyframesResolved(v,S,f,!m),c,u,d),(y=this.keyframeResolver)==null||y.scheduleResolve()}onKeyframesResolved(t,n,r,i){var m,h;this.keyframeResolver=void 0;const{name:s,type:a,velocity:l,delay:c,isHandoff:u,onUpdate:d}=r;this.resolvedAt=we.now();let p=!0;Fw(t,s,a,l)||(p=!1,(qt.instantAnimations||!c)&&(d==null||d(zo(t,r,n))),t[0]=t[t.length-1],Kl(r),r.repeat=0);const x={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>Hw?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},y=p&&!u&&Uw(x),v=(h=(m=x.motionValue)==null?void 0:m.owner)==null?void 0:h.current;let S;if(y)try{S=new Lw({...x,element:v})}catch{S=new uo(x)}else S=new uo(x);S.finished.then(()=>{this.notifyFinished()}).catch(Ke),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),Pw()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function qg(e,t,n,r=0,i=1){const s=Array.from(e).sort((u,d)=>u.sortNodePosition(d)).indexOf(t),a=e.size,l=(a-1)*r;return typeof n=="function"?n(s,a):i===1?s*r:l-s*r}const pp=30,Kw=e=>!isNaN(parseFloat(e));class Yw{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var s;const i=we.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=we.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=Kw(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new lu);const r=this.events[t].add(n);return t==="change"?()=>{r(),$.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=we.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>pp)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,pp);return yg(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function cr(e,t){return new Yw(e,t)}function Zg(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function yu(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Zg(n,e):n}const Xw={type:"spring",stiffness:500,damping:25,restSpeed:10},Qw=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),qw={type:"keyframes",duration:.8},Zw={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Jw=(e,{keyframes:t})=>t.length>2?qw:gr.has(e)?e.startsWith("scale")?Qw(t[1]):Xw:Zw,eS=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function tS(e){for(const t in e)if(!eS.has(t))return!0;return!1}const vu=(e,t,n,r={},i,s)=>a=>{const l=yu(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-ze(c);const d={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:s?void 0:i};tS(l)||Object.assign(d,Jw(e,d)),d.duration&&(d.duration=ze(d.duration)),d.repeatDelay&&(d.repeatDelay=ze(d.repeatDelay)),d.from!==void 0&&(d.keyframes[0]=d.from);let p=!1;if((d.type===!1||d.duration===0&&!d.repeatDelay)&&(Kl(d),d.delay===0&&(p=!0)),(qt.instantAnimations||qt.skipAnimations||i!=null&&i.shouldSkipAnimations||l.skipAnimations)&&(p=!0,Kl(d),d.delay=0),d.allowFlatten=!l.type&&!l.ease,p&&!s&&t.get()!==void 0){const f=zo(d.keyframes,l);if(f!==void 0){$.update(()=>{d.onUpdate(f),d.onComplete()});return}}return l.isSync?new uo(d):new Gw(d)},nS=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function rS(e){const t=nS.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Jg(e,t,n=1){const[r,i]=rS(e);if(!r)return;const s=window.getComputedStyle(t).getPropertyValue(r);if(s){const a=s.trim();return hg(a)?parseFloat(a):a}return du(i)?Jg(i,t,n+1):i}function fp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function wu(e,t,n,r){if(typeof t=="function"){const[i,s]=fp(r);t=t(n!==void 0?n:e.custom,i,s)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,s]=fp(r);t=t(n!==void 0?n:e.custom,i,s)}return t}function vn(e,t,n){const r=e.getProps();return wu(r,t,n!==void 0?n:r.custom,e)}const ex=new Set(["width","height","top","left","right","bottom",...mr]),Yl=e=>Array.isArray(e);function iS(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,cr(n))}function sS(e){return Yl(e)?e[e.length-1]||0:e}function oS(e,t){const n=vn(e,t);let{transitionEnd:r={},transition:i={},...s}=n||{};s={...s,...r};for(const a in s){const l=sS(s[a]);iS(e,a,l)}}const pe=e=>!!(e&&e.getVelocity);function aS(e){return!!(pe(e)&&e.add)}function Xl(e,t){const n=e.getValue("willChange");if(aS(n))return n.add(t);if(!n&&qt.WillChange){const r=new qt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function Su(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const lS="framerAppearId",tx="data-"+Su(lS);function nx(e){return e.props[tx]}function cS({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function rx(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:s,transitionEnd:a,...l}=t;const c=e.getDefaultTransition();s=s?Zg(s,c):c;const u=s==null?void 0:s.reduceMotion,d=s==null?void 0:s.skipAnimations;r&&(s=r);const p=[],f=i&&e.animationState&&e.animationState.getState()[i],x=s==null?void 0:s.path;x&&x.animateVisualElement(e,l,s,n,p);for(const y in l){const v=e.getValue(y,e.latestValues[y]??null),S=l[y];if(S===void 0||f&&cS(f,y))continue;const m={delay:n,...yu(s||{},y)};d&&(m.skipAnimations=!0);const h=v.get();if(h!==void 0&&!v.isAnimating()&&!Array.isArray(S)&&S===h&&!m.velocity){$.update(()=>v.set(S));continue}let g=!1;if(window.MotionHandoffAnimation){const A=nx(e);if(A){const C=window.MotionHandoffAnimation(A,y,$);C!==null&&(m.startTime=C,g=!0)}}Xl(e,y);const w=u??e.shouldReduceMotion;v.start(vu(y,v,S,w&&ex.has(y)?{type:!1}:m,e,g));const k=v.animation;k&&p.push(k)}if(a){const y=()=>$.update(()=>{a&&oS(e,a)});p.length?Promise.all(p).then(y):y()}return p}function Ql(e,t,n={}){var c;const r=vn(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const s=r?()=>Promise.all(rx(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:d=0,staggerChildren:p,staggerDirection:f}=i;return uS(e,t,u,d,p,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,d]=l==="beforeChildren"?[s,a]:[a,s];return u().then(()=>d())}else return Promise.all([s(),a(n.delay)])}function uS(e,t,n=0,r=0,i=0,s=1,a){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(Ql(c,t,{...a,delay:n+(typeof r=="function"?0:r)+qg(e.variantChildren,c,r,i,s)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function dS(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(s=>Ql(e,s,n));r=Promise.all(i)}else if(typeof t=="string")r=Ql(e,t,n);else{const i=typeof t=="function"?vn(e,t,n.custom):t;r=Promise.all(rx(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const pS={test:e=>e==="auto",parse:e=>e},ix=e=>t=>t.test(e),sx=[hr,I,mt,yt,B2,L2,pS],hp=e=>sx.find(ix(e));function fS(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||gg(e):!0}const hS=new Set(["brightness","contrast","saturate","opacity"]);function mS(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(pu)||[];if(!r)return e;const i=n.replace(r,"");let s=hS.has(t)?1:0;return r!==n&&(s*=100),t+"("+s+i+")"}const gS=/\b([a-z-]*)\(.*?\)/gu,ql={...ot,getAnimatableNone:e=>{const t=e.match(gS);return t?t.map(mS).join(" "):e}},Zl={...ot,getAnimatableNone:e=>{const t=ot.parse(e);return ot.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},mp={...hr,transform:Math.round},xS={rotate:yt,pathRotation:yt,rotateX:yt,rotateY:yt,rotateZ:yt,scale:Gi,scaleX:Gi,scaleY:Gi,scaleZ:Gi,skew:yt,skewX:yt,skewY:yt,distance:I,translateX:I,translateY:I,translateZ:I,x:I,y:I,z:I,perspective:I,transformPerspective:I,opacity:ui,originX:tp,originY:tp,originZ:I},po={borderWidth:I,borderTopWidth:I,borderRightWidth:I,borderBottomWidth:I,borderLeftWidth:I,borderRadius:I,borderTopLeftRadius:I,borderTopRightRadius:I,borderBottomRightRadius:I,borderBottomLeftRadius:I,width:I,maxWidth:I,height:I,maxHeight:I,top:I,right:I,bottom:I,left:I,inset:I,insetBlock:I,insetBlockStart:I,insetBlockEnd:I,insetInline:I,insetInlineStart:I,insetInlineEnd:I,padding:I,paddingTop:I,paddingRight:I,paddingBottom:I,paddingLeft:I,paddingBlock:I,paddingBlockStart:I,paddingBlockEnd:I,paddingInline:I,paddingInlineStart:I,paddingInlineEnd:I,margin:I,marginTop:I,marginRight:I,marginBottom:I,marginLeft:I,marginBlock:I,marginBlockStart:I,marginBlockEnd:I,marginInline:I,marginInlineStart:I,marginInlineEnd:I,fontSize:I,backgroundPositionX:I,backgroundPositionY:I,...xS,zIndex:mp,fillOpacity:ui,strokeOpacity:ui,numOctaves:mp},yS={...po,color:ne,backgroundColor:ne,outlineColor:ne,fill:ne,stroke:ne,borderColor:ne,borderTopColor:ne,borderRightColor:ne,borderBottomColor:ne,borderLeftColor:ne,filter:ql,WebkitFilter:ql,mask:Zl,WebkitMask:Zl},ox=e=>yS[e],vS=new Set([ql,Zl]);function ax(e,t){let n=ox(e);return vS.has(n)||(n=ot),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const wS=new Set(["auto","none","0"]);function SS(e,t,n){let r=0,i;for(;r<e.length&&!i;){const s=e[r];typeof s=="string"&&!wS.has(s)&&lr(s).values.length&&(i=e[r]),r++}if(i&&n)for(const s of t)e[s]=ax(n,i)}class bS extends xu{constructor(t,n,r,i,s){super(t,n,r,i,s,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let d=0;d<t.length;d++){let p=t[d];if(typeof p=="string"&&(p=p.trim(),du(p))){const f=Jg(p,n.current);f!==void 0&&(t[d]=f),d===t.length-1&&(this.finalKeyframe=p)}}if(this.resolveNoneKeyframes(),!ex.has(r)||t.length!==2)return;const[i,s]=t,a=hp(i),l=hp(s),c=ep(i),u=ep(s);if(c!==u&&Ft[r]){this.needsMeasurement=!0;return}if(a!==l)if(cp(a)&&cp(l))for(let d=0;d<t.length;d++){const p=t[d];typeof p=="string"&&(t[d]=parseFloat(p))}else Ft[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||fS(t[i]))&&r.push(i);r.length&&SS(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ft[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const s=r.length-1,a=r[s];r[s]=Ft[n](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function lx(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const i=(n==null?void 0:n[e])??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const Jl=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function kS(e){return mg(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:bu}=Pg(queueMicrotask,!1),et={x:!1,y:!1};function cx(){return et.x||et.y}function jS(e){return e==="x"||e==="y"?et[e]?null:(et[e]=!0,()=>{et[e]=!1}):et.x||et.y?null:(et.x=et.y=!0,()=>{et.x=et.y=!1})}function ux(e,t){const n=lx(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function _S(e){return!(e.pointerType==="touch"||cx())}function CS(e,t,n={}){const[r,i,s]=ux(e,n);return r.forEach(a=>{let l=!1,c=!1,u;const d=()=>{a.removeEventListener("pointerleave",y)},p=S=>{u&&(u(S),u=void 0),d()},f=S=>{l=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),c&&(c=!1,p(S))},x=()=>{l=!0,window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",f,i)},y=S=>{if(S.pointerType!=="touch"){if(l){c=!0;return}p(S)}},v=S=>{if(!_S(S))return;c=!1;const m=t(a,S);typeof m=="function"&&(u=m,a.addEventListener("pointerleave",y,i))};a.addEventListener("pointerenter",v,i),a.addEventListener("pointerdown",x,i)}),s}const dx=(e,t)=>t?e===t?!0:dx(e,t.parentElement):!1,ku=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,AS=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function TS(e){return AS.has(e.tagName)||e.isContentEditable===!0}const PS=new Set(["INPUT","SELECT","TEXTAREA"]);function ES(e){return PS.has(e.tagName)||e.isContentEditable===!0}const As=new WeakSet;function gp(e){return t=>{t.key==="Enter"&&e(t)}}function ba(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const IS=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=gp(()=>{if(As.has(n))return;ba(n,"down");const i=gp(()=>{ba(n,"up")}),s=()=>ba(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",s,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function xp(e){return ku(e)&&!cx()}const yp=new WeakSet;function NS(e,t,n={}){const[r,i,s]=ux(e,n),a=l=>{const c=l.currentTarget;if(!xp(l)||yp.has(l))return;As.add(c),n.stopPropagation&&yp.add(l);const u=t(c,l),d={...i,capture:!0},p=(y,v)=>{window.removeEventListener("pointerup",f,d),window.removeEventListener("pointercancel",x,d),As.has(c)&&As.delete(c),xp(y)&&typeof u=="function"&&u(y,{success:v})},f=y=>{p(y,c===window||c===document||n.useGlobalTarget||dx(c,y.target))},x=y=>{p(y,!1)};window.addEventListener("pointerup",f,d),window.addEventListener("pointercancel",x,d)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,i),kS(l)&&(l.addEventListener("focus",u=>IS(u,i)),!TS(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),s}function ju(e){return mg(e)&&"ownerSVGElement"in e}const Ts=new WeakMap;let It;const px=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:ju(r)&&"getBBox"in r?r.getBBox()[t]:r[n],RS=px("inline","width","offsetWidth"),DS=px("block","height","offsetHeight");function MS({target:e,borderBoxSize:t}){var n;(n=Ts.get(e))==null||n.forEach(r=>{r(e,{get width(){return RS(e,t)},get height(){return DS(e,t)}})})}function zS(e){e.forEach(MS)}function LS(){typeof ResizeObserver>"u"||(It=new ResizeObserver(zS))}function BS(e,t){It||LS();const n=lx(e);return n.forEach(r=>{let i=Ts.get(r);i||(i=new Set,Ts.set(r,i)),i.add(t),It==null||It.observe(r)}),()=>{n.forEach(r=>{const i=Ts.get(r);i==null||i.delete(t),i!=null&&i.size||It==null||It.unobserve(r)})}}const Ps=new Set;let Kn;function FS(){Kn=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ps.forEach(t=>t(e))},window.addEventListener("resize",Kn)}function VS(e){return Ps.add(e),Kn||FS(),()=>{Ps.delete(e),!Ps.size&&typeof Kn=="function"&&(window.removeEventListener("resize",Kn),Kn=void 0)}}function vp(e,t){return typeof e=="function"?VS(e):BS(e,t)}function OS(e){return ju(e)&&e.tagName==="svg"}const WS=[...sx,ne,ot],$S=e=>WS.find(ix(e)),wp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Yn=()=>({x:wp(),y:wp()}),Sp=()=>({min:0,max:0}),se=()=>({x:Sp(),y:Sp()}),US=new WeakMap;function Lo(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function di(e){return typeof e=="string"||Array.isArray(e)}const _u=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Cu=["initial",..._u];function Bo(e){return Lo(e.animate)||Cu.some(t=>di(e[t]))}function fx(e){return!!(Bo(e)||e.variants)}function HS(e,t,n){for(const r in t){const i=t[r],s=n[r];if(pe(i))e.addValue(r,i);else if(pe(s))e.addValue(r,cr(i,{owner:e}));else if(s!==i)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(i):a.hasAnimated||a.set(i)}else{const a=e.getStaticValue(r);e.addValue(r,cr(a!==void 0?a:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const ec={current:null},hx={current:!1},GS=typeof window<"u";function KS(){if(hx.current=!0,!!GS)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>ec.current=e.matches;e.addEventListener("change",t),t()}else ec.current=!1}const bp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let fo={};function mx(e){fo=e}function YS(){return fo}class XS{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:s,blockInitialAnimation:a,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=xu,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=we.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,$.render(this.render,!1,!0))};const{latestValues:u,renderState:d}=l;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=d,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=s,this.options=c,this.blockInitialAnimation=!!a,this.isControllingVariants=Bo(n),this.isVariantNode=fx(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:p,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const x in f){const y=f[x];u[x]!==void 0&&pe(y)&&y.set(u[x])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,US.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,s)=>this.bindToMotionValue(s,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(hx.current||KS(),this.shouldReduceMotion=ec.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),Zt(this.notifyUpdate),Zt(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&Qg.has(t)&&this.current instanceof HTMLElement){const{factory:a,keyframes:l,times:c,ease:u,duration:d}=n.accelerate,p=new Yg({element:this.current,name:t,keyframes:l,times:c,ease:u,duration:ze(d)}),f=a(p);this.valueSubscriptions.set(t,()=>{f(),p.cancel()});return}const r=gr.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&$.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),s&&s()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in fo){const n=fo[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const s=this.features[t];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):se()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<bp.length;r++){const i=bp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const s="on"+i,a=t[s];a&&(this.propEventSubscriptions[i]=this.on(i,a))}this.prevMotionValues=HS(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=cr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(hg(r)||gg(r))?r=parseFloat(r):!$S(r)&&ot.test(n)&&(r=ax(t,n)),this.setBaseTarget(t,pe(r)?r.get():r)),pe(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var s;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const a=wu(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);a&&(r=a[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!pe(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new lu),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){bu.render(this.render)}}class gx extends XS{constructor(){super(...arguments),this.KeyframeResolver=bS}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;pe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class rn{constructor(t){this.isMounted=!1,this.node=t}update(){}}function xx({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function QS({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function qS(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ka(e){return e===void 0||e===1}function tc({scale:e,scaleX:t,scaleY:n}){return!ka(e)||!ka(t)||!ka(n)}function un(e){return tc(e)||yx(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function yx(e){return kp(e.x)||kp(e.y)}function kp(e){return e&&e!=="0%"}function ho(e,t,n){const r=e-n,i=t*r;return n+i}function jp(e,t,n,r,i){return i!==void 0&&(e=ho(e,i,r)),ho(e,n,r)+t}function nc(e,t=0,n=1,r,i){e.min=jp(e.min,t,n,r,i),e.max=jp(e.max,t,n,r,i)}function vx(e,{x:t,y:n}){nc(e.x,t.translate,t.scale,t.originPoint),nc(e.y,n.translate,n.scale,n.originPoint)}const _p=.999999999999,Cp=1.0000000000001;function ZS(e,t,n,r=!1){var l;const i=n.length;if(!i)return;t.x=t.y=1;let s,a;for(let c=0;c<i;c++){s=n[c],a=s.projectionDelta;const{visualElement:u}=s.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&(dt(e.x,-s.scroll.offset.x),dt(e.y,-s.scroll.offset.y)),a&&(t.x*=a.x.scale,t.y*=a.y.scale,vx(e,a)),r&&un(s.latestValues)&&Es(e,s.latestValues,(l=s.layout)==null?void 0:l.layoutBox))}t.x<Cp&&t.x>_p&&(t.x=1),t.y<Cp&&t.y>_p&&(t.y=1)}function dt(e,t){e.min+=t,e.max+=t}function Ap(e,t,n,r,i=.5){const s=W(e.min,e.max,i);nc(e,t,n,s,r)}function Tp(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function Es(e,t,n){const r=n??e;Ap(e.x,Tp(t.x,r.x),t.scaleX,t.scale,t.originX),Ap(e.y,Tp(t.y,r.y),t.scaleY,t.scale,t.originY)}function wx(e,t){return xx(qS(e.getBoundingClientRect(),t))}function JS(e,t,n){const r=wx(e,n),{scroll:i}=t;return i&&(dt(r.x,i.offset.x),dt(r.y,i.offset.y)),r}const eb={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},tb=mr.length;function nb(e,t,n){let r="",i=!0;for(let a=0;a<tb;a++){const l=mr[a],c=e[l];if(c===void 0)continue;let u=!0;if(typeof c=="number")u=c===(l.startsWith("scale")?1:0);else{const d=parseFloat(c);u=l.startsWith("scale")?d===1:d===0}if(!u||n){const d=Jl(c,po[l]);if(!u){i=!1;const p=eb[l]||l;r+=`${p}(${d}) `}n&&(t[l]=d)}}const s=e.pathRotation;return s&&(i=!1,r+=`rotate(${Jl(s,po.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function Au(e,t,n){const{style:r,vars:i,transformOrigin:s}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(gr.has(c)){a=!0;continue}else if(Ig(c)){i[c]=u;continue}else{const d=Jl(u,po[c]);c.startsWith("origin")?(l=!0,s[c]=d):r[c]=d}}if(t.transform||(a||n?r.transform=nb(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:d=0}=s;r.transformOrigin=`${c} ${u} ${d}`}}function Sx(e,{style:t,vars:n},r,i){const s=e.style;let a;for(a in t)s[a]=t[a];i==null||i.applyProjectionStyles(s,r);for(a in n)s.setProperty(a,n[a])}function Pp(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const _r={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(I.test(e))e=parseFloat(e);else return e;const n=Pp(e,t.target.x),r=Pp(e,t.target.y);return`${n}% ${r}%`}},rb={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=ot.parse(e);if(i.length>5)return r;const s=ot.createTransformer(e),a=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+a]/=l,i[1+a]/=c;const u=W(l,c,.5);return typeof i[2+a]=="number"&&(i[2+a]/=u),typeof i[3+a]=="number"&&(i[3+a]/=u),s(i)}},rc={borderRadius:{..._r,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:_r,borderTopRightRadius:_r,borderBottomLeftRadius:_r,borderBottomRightRadius:_r,boxShadow:rb};function bx(e,{layout:t,layoutId:n}){return gr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!rc[e]||e==="opacity")}function Tu(e,t,n){var a;const r=e.style,i=t==null?void 0:t.style,s={};if(!r)return s;for(const l in r)(pe(r[l])||i&&pe(i[l])||bx(l,e)||((a=n==null?void 0:n.getValue(l))==null?void 0:a.liveStyle)!==void 0)&&(s[l]=r[l]);return s}function ib(e){return window.getComputedStyle(e)}class sb extends gx{constructor(){super(...arguments),this.type="html",this.renderInstance=Sx}readValueFromInstance(t,n){var r;if(gr.has(n))return(r=this.projection)!=null&&r.isProjecting?Wl(n):jw(t,n);{const i=ib(t),s=(Ig(n)?i.getPropertyValue(n):i[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(t,{transformPagePoint:n}){return wx(t,n)}build(t,n,r){Au(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return Tu(t,n,r)}}const ob={offset:"stroke-dashoffset",array:"stroke-dasharray"},ab={offset:"strokeDashoffset",array:"strokeDasharray"};function lb(e,t,n=1,r=0,i=!0){e.pathLength=1;const s=i?ob:ab;e[s.offset]=`${-r}`,e[s.array]=`${t} ${n}`}const cb=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function kx(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:s=1,pathOffset:a=0,...l},c,u,d){if(Au(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:f}=e;p.transform&&(f.transform=p.transform,delete p.transform),(f.transform||p.transformOrigin)&&(f.transformOrigin=p.transformOrigin??"50% 50%",delete p.transformOrigin),f.transform&&(f.transformBox=(d==null?void 0:d.transformBox)??"fill-box",delete p.transformBox);for(const x of cb)p[x]!==void 0&&(f[x]=p[x],delete p[x]);t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),r!==void 0&&(p.scale=r),i!==void 0&&lb(p,i,s,a,!1)}const jx=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),_x=e=>typeof e=="string"&&e.toLowerCase()==="svg";function ub(e,t,n,r){Sx(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(jx.has(i)?i:Su(i),t.attrs[i])}function Cx(e,t,n){const r=Tu(e,t,n);for(const i in e)if(pe(e[i])||pe(t[i])){const s=mr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[s]=e[i]}return r}class db extends gx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=se}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(gr.has(n)){const r=ox(n);return r&&r.default||0}return n=jx.has(n)?n:Su(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return Cx(t,n,r)}build(t,n,r){kx(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){ub(t,n,r,i)}mount(t){this.isSVGTag=_x(t.tagName),super.mount(t)}}const pb=Cu.length;function Ax(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?Ax(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<pb;n++){const r=Cu[n],i=e.props[r];(di(i)||i===!1)&&(t[r]=i)}return t}function Tx(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const fb=[..._u].reverse(),hb=_u.length;function mb(e){return t=>Promise.all(t.map(({animation:n,options:r})=>dS(e,n,r)))}function gb(e){let t=mb(e),n=Ep(),r=!0,i=!1;const s=u=>(d,p)=>{var x;const f=vn(e,p,u==="exit"?(x=e.presenceContext)==null?void 0:x.custom:void 0);if(f){const{transition:y,transitionEnd:v,...S}=f;d={...d,...S,...v}}return d};function a(u){t=u(e)}function l(u){const{props:d}=e,p=Ax(e.parent)||{},f=[],x=new Set;let y={},v=1/0;for(let m=0;m<hb;m++){const h=fb[m],g=n[h],w=d[h]!==void 0?d[h]:p[h],k=di(w),A=h===u?g.isActive:null;A===!1&&(v=m);let C=w===p[h]&&w!==d[h]&&k;if(C&&(r||i)&&e.manuallyAnimateOnMount&&(C=!1),g.protectedKeys={...y},!g.isActive&&A===null||!w&&!g.prevProp||Lo(w)||typeof w=="boolean")continue;if(h==="exit"&&g.isActive&&A!==!0){g.prevResolvedValues&&(y={...y,...g.prevResolvedValues});continue}const j=xb(g.prevProp,w);let D=j||h===u&&g.isActive&&!C&&k||m>v&&k,P=!1;const L=Array.isArray(w)?w:[w];let ee=L.reduce(s(h),{});A===!1&&(ee={});const{prevResolvedValues:Ie={}}=g,Ne={...Ie,...ee},Qe=T=>{D=!0,x.has(T)&&(P=!0,x.delete(T)),g.needsAnimating[T]=!0;const N=e.getValue(T);N&&(N.liveStyle=!1)};for(const T in Ne){const N=ee[T],R=Ie[T];if(y.hasOwnProperty(T))continue;let V=!1;Yl(N)&&Yl(R)?V=!Tx(N,R)||j:V=N!==R,V?N!=null?Qe(T):x.add(T):N!==void 0&&x.has(T)?Qe(T):g.protectedKeys[T]=!0}g.prevProp=w,g.prevResolvedValues=ee,g.isActive&&(y={...y,...ee}),(r||i)&&e.blockInitialAnimation&&(D=!1);const _e=C&&j;D&&(!_e||P)&&f.push(...L.map(T=>{const N={type:h};if(typeof T=="string"&&(r||i)&&!_e&&e.manuallyAnimateOnMount&&e.parent){const{parent:R}=e,V=vn(R,T);if(R.enteringChildren&&V){const{delayChildren:te}=V.transition||{};N.delay=qg(R.enteringChildren,e,te)}}return{animation:T,options:N}}))}if(x.size){const m={};if(typeof d.initial!="boolean"){const h=vn(e,Array.isArray(d.initial)?d.initial[0]:d.initial);h&&h.transition&&(m.transition=h.transition)}x.forEach(h=>{const g=e.getBaseTarget(h),w=e.getValue(h);w&&(w.liveStyle=!0),m[h]=g??null}),f.push({animation:m})}let S=!!f.length;return r&&(d.initial===!1||d.initial===d.animate)&&!e.manuallyAnimateOnMount&&(S=!1),r=!1,i=!1,S?t(f):Promise.resolve()}function c(u,d){var f;if(n[u].isActive===d)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(x=>{var y;return(y=x.animationState)==null?void 0:y.setActive(u,d)}),n[u].isActive=d;const p=l(u);for(const x in n)n[x].protectedKeys={};return p}return{animateChanges:l,setActive:c,setAnimateFunction:a,getState:()=>n,reset:()=>{n=Ep(),i=!0}}}function xb(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Tx(t,e):!1}function an(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ep(){return{animate:an(!0),whileInView:an(),whileHover:an(),whileTap:an(),whileDrag:an(),whileFocus:an(),exit:an()}}function ic(e,t){e.min=t.min,e.max=t.max}function Ze(e,t){ic(e.x,t.x),ic(e.y,t.y)}function Ip(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const Px=1e-4,yb=1-Px,vb=1+Px,Ex=.01,wb=0-Ex,Sb=0+Ex;function Se(e){return e.max-e.min}function bb(e,t,n){return Math.abs(e-t)<=n}function Np(e,t,n,r=.5){e.origin=r,e.originPoint=W(t.min,t.max,e.origin),e.scale=Se(n)/Se(t),e.translate=W(n.min,n.max,e.origin)-e.originPoint,(e.scale>=yb&&e.scale<=vb||isNaN(e.scale))&&(e.scale=1),(e.translate>=wb&&e.translate<=Sb||isNaN(e.translate))&&(e.translate=0)}function Wr(e,t,n,r){Np(e.x,t.x,n.x,r?r.originX:void 0),Np(e.y,t.y,n.y,r?r.originY:void 0)}function Rp(e,t,n,r=0){const i=r?W(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+Se(t)}function kb(e,t,n,r){Rp(e.x,t.x,n.x,r==null?void 0:r.x),Rp(e.y,t.y,n.y,r==null?void 0:r.y)}function Dp(e,t,n,r=0){const i=r?W(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+Se(t)}function mo(e,t,n,r){Dp(e.x,t.x,n.x,r==null?void 0:r.x),Dp(e.y,t.y,n.y,r==null?void 0:r.y)}function Mp(e,t,n,r,i){return e-=t,e=ho(e,1/n,r),i!==void 0&&(e=ho(e,1/i,r)),e}function jb(e,t=0,n=1,r=.5,i,s=e,a=e){if(mt.test(t)&&(t=parseFloat(t),t=W(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=W(s.min,s.max,r);e===s&&(l-=t),e.min=Mp(e.min,t,n,l,i),e.max=Mp(e.max,t,n,l,i)}function zp(e,t,[n,r,i],s,a){jb(e,t[n],t[r],t[i],t.scale,s,a)}const _b=["x","scaleX","originX"],Cb=["y","scaleY","originY"];function Lp(e,t,n,r){zp(e.x,t,_b,n?n.x:void 0,r?r.x:void 0),zp(e.y,t,Cb,n?n.y:void 0,r?r.y:void 0)}function Bp(e){return e.translate===0&&e.scale===1}function Ix(e){return Bp(e.x)&&Bp(e.y)}function Fp(e,t){return e.min===t.min&&e.max===t.max}function Ab(e,t){return Fp(e.x,t.x)&&Fp(e.y,t.y)}function Vp(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Nx(e,t){return Vp(e.x,t.x)&&Vp(e.y,t.y)}function Op(e){return Se(e.x)/Se(e.y)}function Wp(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function ut(e){return[e("x"),e("y")]}function Tb(e,t,n){let r="";const i=e.x.translate/t.x,s=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((i||s||a)&&(r=`translate3d(${i}px, ${s}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:d,pathRotation:p,rotateX:f,rotateY:x,skewX:y,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),d&&(r+=`rotate(${d}deg) `),p&&(r+=`rotate(${p}deg) `),f&&(r+=`rotateX(${f}deg) `),x&&(r+=`rotateY(${x}deg) `),y&&(r+=`skewX(${y}deg) `),v&&(r+=`skewY(${v}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const Rx=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Pb=Rx.length,$p=e=>typeof e=="string"?parseFloat(e):e,Up=e=>typeof e=="number"||I.test(e);function Eb(e,t,n,r,i,s){i?(e.opacity=W(0,n.opacity??1,Ib(r)),e.opacityExit=W(t.opacity??1,0,Nb(r))):s&&(e.opacity=W(t.opacity??1,n.opacity??1,r));for(let a=0;a<Pb;a++){const l=Rx[a];let c=Hp(t,l),u=Hp(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Up(c)===Up(u)?(e[l]=Math.max(W($p(c),$p(u),r),0),(mt.test(u)||mt.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=W(t.rotate||0,n.rotate||0,r))}function Hp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Ib=Dx(0,.5,_g),Nb=Dx(.5,.95,Ke);function Dx(e,t,n){return r=>r<e?0:r>t?1:n(ci(e,t,r))}function Rb(e,t,n){const r=pe(e)?e:cr(e);return r.start(vu("",r,t,n)),r.animation}function pi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}const Db=(e,t)=>e.depth-t.depth;class Mb{constructor(){this.children=[],this.isDirty=!1}add(t){ou(this.children,t),this.isDirty=!0}remove(t){oo(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Db),this.isDirty=!1,this.children.forEach(t)}}function zb(e,t){const n=we.now(),r=({timestamp:i})=>{const s=i-n;s>=t&&(Zt(r),e(s-t))};return $.setup(r,!0),()=>Zt(r)}function Is(e){return pe(e)?e.get():e}class Lb{constructor(){this.members=[]}add(t){ou(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(oo(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(oo(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:s}=r.options,{layoutDependency:a}=t.options;(s===void 0||s!==a)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,s,a;(r=(n=t.options).onExitComplete)==null||r.call(n),(a=(i=t.resumingFrom)==null?void 0:(s=i.options).onExitComplete)==null||a.call(s)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const Ns={hasAnimatedSinceResize:!0,hasEverUpdated:!1},ja=["","X","Y","Z"],Bb=1e3;let Fb=0;function _a(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Mx(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=nx(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:s}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",$,!(i||s))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Mx(r)}function zx({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(a={},l=t==null?void 0:t()){this.id=Fb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Wb),this.nodes.forEach(Yb),this.nodes.forEach(Xb),this.nodes.forEach($b)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Mb)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new lu),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=ju(a)&&!OS(a),this.instance=a;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let d,p=0;const f=()=>this.root.updateBlockedByResize=!1;$.read(()=>{p=window.innerWidth}),e(a,()=>{const x=window.innerWidth;x!==p&&(p=x,this.root.updateBlockedByResize=!0,d&&d(),d=zb(f,250),Ns.hasAnimatedSinceResize&&(Ns.hasAnimatedSinceResize=!1,this.nodes.forEach(Yp)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:d,hasLayoutChanged:p,hasRelativeLayoutChanged:f,layout:x})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const y=this.options.transition||u.getDefaultTransition()||ek,{onLayoutAnimationStart:v,onLayoutAnimationComplete:S}=u.getProps(),m=!this.targetLayout||!Nx(this.targetLayout,x),h=!p&&f;if(this.options.layoutRoot||this.resumeFrom||h||p&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const g={...yu(y,"layout"),onPlay:v,onComplete:S};(u.shouldReduceMotion||this.options.layoutRoot)&&(g.delay=0,g.type=!1),this.startAnimation(g),this.setAnimationOrigin(d,h,g.path)}else p||Yp(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=x})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Zt(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Qb),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Mx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let d=0;d<this.path.length;d++){const p=this.path[d];p.shouldResetTransform=!0,(typeof p.latestValues.x=="string"||typeof p.latestValues.y=="string")&&(p.isLayoutDirty=!0),p.updateScroll("snapshot"),p.options.layoutRoot&&p.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(Hb),this.nodes.forEach(Gp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Kp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Gb),this.nodes.forEach(Kb),this.nodes.forEach(Vb),this.nodes.forEach(Ob)):this.nodes.forEach(Kp),this.clearAllSnapshots();const l=we.now();de.delta=gt(0,1e3/60,l-de.timestamp),de.timestamp=l,de.isProcessing=!0,ga.update.process(de),ga.preRender.process(de),ga.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,bu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Ub),this.sharedNodes.forEach(qb)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Se(this.snapshot.measuredBox.x)&&!Se(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=se()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!Ix(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,d=u!==this.prevTransformTemplateValue;a&&this.instance&&(l||un(this.latestValues)||d)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),tk(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:a}=this.options;if(!a)return se();const l=a.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(nk))){const{scroll:d}=this.root;d&&(dt(l.x,d.offset.x),dt(l.y,d.offset.y))}return l}removeElementScroll(a){var c;const l=se();if(Ze(l,a),(c=this.scroll)!=null&&c.wasRoot)return l;for(let u=0;u<this.path.length;u++){const d=this.path[u],{scroll:p,options:f}=d;d!==this.root&&p&&f.layoutScroll&&(p.wasRoot&&Ze(l,a),dt(l.x,p.offset.x),dt(l.y,p.offset.y))}return l}applyTransform(a,l=!1,c){var d,p;const u=c||se();Ze(u,a);for(let f=0;f<this.path.length;f++){const x=this.path[f];!l&&x.options.layoutScroll&&x.scroll&&x!==x.root&&(dt(u.x,-x.scroll.offset.x),dt(u.y,-x.scroll.offset.y)),un(x.latestValues)&&Es(u,x.latestValues,(d=x.layout)==null?void 0:d.layoutBox)}return un(this.latestValues)&&Es(u,this.latestValues,(p=this.layout)==null?void 0:p.layoutBox),u}removeTransform(a){var c;const l=se();Ze(l,a);for(let u=0;u<this.path.length;u++){const d=this.path[u];if(!un(d.latestValues))continue;let p;d.instance&&(tc(d.latestValues)&&d.updateSnapshot(),p=se(),Ze(p,d.measurePageBox())),Lp(l,d.latestValues,(c=d.snapshot)==null?void 0:c.layoutBox,p)}return un(this.latestValues)&&Lp(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var x;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:d,layoutId:p}=this.options;if(!this.layout||!(d||p))return;this.resolvedRelativeTargetAt=de.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=se(),this.targetWithTransforms=se()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),kb(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ze(this.target,this.layout.layoutBox),vx(this.target,this.targetDelta)):Ze(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||tc(this.parent.latestValues)||yx(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,l,c){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=se(),this.relativeTargetOrigin=se(),mo(this.relativeTargetOrigin,l,c,this.options.layoutAnchor||void 0),Ze(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var y;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===de.timestamp&&(c=!1),c)return;const{layout:u,layoutId:d}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||d))return;Ze(this.layoutCorrected,this.layout.layoutBox);const p=this.treeScale.x,f=this.treeScale.y;ZS(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=se());const{target:x}=a;if(!x){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ip(this.prevProjectionDelta.x,this.projectionDelta.x),Ip(this.prevProjectionDelta.y,this.projectionDelta.y)),Wr(this.projectionDelta,this.layoutCorrected,x,this.latestValues),(this.treeScale.x!==p||this.treeScale.y!==f||!Wp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",x))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Yn(),this.projectionDelta=Yn(),this.projectionDeltaWithTransform=Yn()}setAnimationOrigin(a,l=!1,c){const u=this.snapshot,d=u?u.latestValues:{},p={...this.latestValues},f=Yn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const x=se(),y=u?u.source:void 0,v=this.layout?this.layout.source:void 0,S=y!==v,m=this.getStack(),h=!m||m.members.length<=1,g=!!(S&&!h&&this.options.crossfade===!0&&!this.path.some(Jb));this.animationProgress=0;let w;const k=c==null?void 0:c.interpolateProjection(a);this.mixTargetDelta=A=>{const C=A/1e3,j=k==null?void 0:k(C);j?(f.x.translate=j.x,f.x.scale=W(a.x.scale,1,C),f.x.origin=a.x.origin,f.x.originPoint=a.x.originPoint,f.y.translate=j.y,f.y.scale=W(a.y.scale,1,C),f.y.origin=a.y.origin,f.y.originPoint=a.y.originPoint):(Xp(f.x,a.x,C),Xp(f.y,a.y,C)),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(mo(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Zb(this.relativeTarget,this.relativeTargetOrigin,x,C),w&&Ab(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=se()),Ze(w,this.relativeTarget)),S&&(this.animationValues=p,Eb(p,d,this.latestValues,C,g,h)),j&&j.rotate!==void 0&&(this.animationValues||(this.animationValues=p),this.animationValues.pathRotation=j.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=C},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){var l,c,u;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(Zt(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$.update(()=>{Ns.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=cr(0)),this.motionValue.jump(0,!1),this.currentAnimation=Rb(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:d=>{this.mixTargetDelta(d),a.onUpdate&&a.onUpdate(d)},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Bb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:d}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&Lx(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||se();const p=Se(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+p;const f=Se(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+f}Ze(l,c),Es(l,d),Wr(this.projectionDeltaWithTransform,this.layoutCorrected,l,d)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new Lb),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var l;const{layoutId:a}=this.options;return a?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:a}=this.options;return a?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&_a("z",a,u,this.animationValues);for(let d=0;d<ja.length;d++)_a(`rotate${ja[d]}`,a,u,this.animationValues),_a(`skew${ja[d]}`,a,u,this.animationValues);a.render();for(const d in u)a.setStaticValue(d,u[d]),this.animationValues&&(this.animationValues[d]=u[d]);a.scheduleRender()}applyProjectionStyles(a,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=Is(l==null?void 0:l.pointerEvents)||"",a.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=Is(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!un(this.latestValues)&&(a.transform=c?c({},""):"none",this.hasProjected=!1);return}a.visibility="";const d=u.animationValues||u.latestValues;this.applyTransformsToTarget();let p=Tb(this.projectionDeltaWithTransform,this.treeScale,d);c&&(p=c(d,p)),a.transform=p;const{x:f,y:x}=this.projectionDelta;a.transformOrigin=`${f.origin*100}% ${x.origin*100}% 0`,u.animationValues?a.opacity=u===this?d.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:d.opacityExit:a.opacity=u===this?d.opacity!==void 0?d.opacity:"":d.opacityExit!==void 0?d.opacityExit:0;for(const y in rc){if(d[y]===void 0)continue;const{correct:v,applyTo:S,isCSSVariable:m}=rc[y],h=p==="none"?d[y]:v(d[y],u);if(S){const g=S.length;for(let w=0;w<g;w++)a[S[w]]=h}else m?this.options.visualElement.renderState.vars[y]=h:a[y]=h}this.options.layoutId&&(a.pointerEvents=u===this?Is(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(Gp),this.root.sharedNodes.clear()}}}function Vb(e){e.updateLayout()}function Ob(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:s}=e.options,a=t.source!==e.layout.source;if(s==="size")ut(p=>{const f=a?t.measuredBox[p]:t.layoutBox[p],x=Se(f);f.min=r[p].min,f.max=f.min+x});else if(s==="x"||s==="y"){const p=s==="x"?"y":"x";ic(a?t.measuredBox[p]:t.layoutBox[p],r[p])}else Lx(s,t.layoutBox,r)&&ut(p=>{const f=a?t.measuredBox[p]:t.layoutBox[p],x=Se(r[p]);f.max=f.min+x,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[p].max=e.relativeTarget[p].min+x)});const l=Yn();Wr(l,r,t.layoutBox);const c=Yn();a?Wr(c,e.applyTransform(i,!0),t.measuredBox):Wr(c,r,t.layoutBox);const u=!Ix(l);let d=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:f,layout:x}=p;if(f&&x){const y=e.options.layoutAnchor||void 0,v=se();mo(v,t.layoutBox,f.layoutBox,y);const S=se();mo(S,r,x.layoutBox,y),Nx(v,S)||(d=!0),p.options.layoutRoot&&(e.relativeTarget=S,e.relativeTargetOrigin=v,e.relativeParent=p)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeLayoutChanged:d})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Wb(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function $b(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Ub(e){e.clearSnapshot()}function Gp(e){e.clearMeasurements()}function Hb(e){e.isLayoutDirty=!0,e.updateLayout()}function Kp(e){e.isLayoutDirty=!1}function Gb(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Kb(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Yp(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Yb(e){e.resolveTargetDelta()}function Xb(e){e.calcProjection()}function Qb(e){e.resetSkewAndRotation()}function qb(e){e.removeLeadSnapshot()}function Xp(e,t,n){e.translate=W(t.translate,0,n),e.scale=W(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Qp(e,t,n,r){e.min=W(t.min,n.min,r),e.max=W(t.max,n.max,r)}function Zb(e,t,n,r){Qp(e.x,t.x,n.x,r),Qp(e.y,t.y,n.y,r)}function Jb(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const ek={duration:.45,ease:[.4,0,.1,1]},qp=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Zp=qp("applewebkit/")&&!qp("chrome/")?Math.round:Ke;function Jp(e){e.min=Zp(e.min),e.max=Zp(e.max)}function tk(e){Jp(e.x),Jp(e.y)}function Lx(e,t,n){return e==="position"||e==="preserve-aspect"&&!bb(Op(t),Op(n),.2)}function nk(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const rk=zx({attachResizeListener:(e,t)=>pi(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Ca={current:void 0},Bx=zx({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ca.current){const e=new rk({});e.mount(window),e.setOptions({layoutScroll:!0}),Ca.current=e}return Ca.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),Fx=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function ik(e=!0){const t=b.useContext(su);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,s=b.useId();b.useEffect(()=>{if(e)return i(s)},[e]);const a=b.useCallback(()=>e&&r&&r(s),[s,r,e]);return!n&&r?[!1,a]:[!0]}const Vx=b.createContext({strict:!1}),ef={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let tf=!1;function sk(){if(tf)return;const e={};for(const t in ef)e[t]={isEnabled:n=>ef[t].some(r=>!!n[r])};mx(e),tf=!0}function Ox(){return sk(),YS()}function ok(e){const t=Ox();for(const n in e)t[n]={...t[n],...e[n]};mx(t)}const ak=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function go(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||ak.has(e)}let Wx=e=>!go(e);function lk(e){typeof e=="function"&&(Wx=t=>t.startsWith("on")?!go(t):e(t))}try{lk(require("@emotion/is-prop-valid").default)}catch{}function ck(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||pe(e[i])||(Wx(i)||n===!0&&go(i)||!t&&!go(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Fo=b.createContext({});function uk(e,t){if(Bo(e)){const{initial:n,animate:r}=e;return{initial:n===!1||di(n)?n:void 0,animate:di(r)?r:void 0}}return e.inherit!==!1?t:{}}function dk(e){const{initial:t,animate:n}=uk(e,b.useContext(Fo));return b.useMemo(()=>({initial:t,animate:n}),[nf(t),nf(n)])}function nf(e){return Array.isArray(e)?e.join(" "):e}const Pu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function $x(e,t,n){for(const r in t)!pe(t[r])&&!bx(r,n)&&(e[r]=t[r])}function pk({transformTemplate:e},t){return b.useMemo(()=>{const n=Pu();return Au(n,t,e),Object.assign({},n.vars,n.style)},[t])}function fk(e,t){const n=e.style||{},r={};return $x(r,n,e),Object.assign(r,pk(e,t)),r}function hk(e,t){const n={},r=fk(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const Ux=()=>({...Pu(),attrs:{}});function mk(e,t,n,r){const i=b.useMemo(()=>{const s=Ux();return kx(s,t,_x(r),e.transformTemplate,e.style),{...s.attrs,style:{...s.style}}},[t]);if(e.style){const s={};$x(s,e.style,e),i.style={...s,...i.style}}return i}const gk=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Eu(e){return typeof e!="string"||e.includes("-")?!1:!!(gk.indexOf(e)>-1||/[A-Z]/u.test(e))}function xk(e,t,n,{latestValues:r},i,s=!1,a){const c=(a??Eu(e)?mk:hk)(t,r,i,e),u=ck(t,typeof e=="string",s),d=e!==b.Fragment?{...u,...c,ref:n}:{},{children:p}=t,f=b.useMemo(()=>pe(p)?p.get():p,[p]);return b.createElement(e,{...d,children:f})}function yk({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:vk(n,r,i,e),renderState:t()}}function vk(e,t,n,r){const i={},s=r(e,{});for(const f in s)i[f]=Is(s[f]);let{initial:a,animate:l}=e;const c=Bo(e),u=fx(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let d=n?n.initial===!1:!1;d=d||a===!1;const p=d?l:a;if(p&&typeof p!="boolean"&&!Lo(p)){const f=Array.isArray(p)?p:[p];for(let x=0;x<f.length;x++){const y=wu(e,f[x]);if(y){const{transitionEnd:v,transition:S,...m}=y;for(const h in m){let g=m[h];if(Array.isArray(g)){const w=d?g.length-1:0;g=g[w]}g!==null&&(i[h]=g)}for(const h in v)i[h]=v[h]}}}return i}const Hx=e=>(t,n)=>{const r=b.useContext(Fo),i=b.useContext(su),s=()=>yk(e,t,r,i);return n?s():x2(s)},wk=Hx({scrapeMotionValuesFromProps:Tu,createRenderState:Pu}),Sk=Hx({scrapeMotionValuesFromProps:Cx,createRenderState:Ux}),bk=Symbol.for("motionComponentSymbol");function kk(e,t,n){const r=b.useRef(n);b.useInsertionEffect(()=>{r.current=n});const i=b.useRef(null);return b.useCallback(s=>{var l;s&&((l=e.onMount)==null||l.call(e,s)),t&&(s?t.mount(s):t.unmount());const a=r.current;if(typeof a=="function")if(s){const c=a(s);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):a(s);else a&&(a.current=s)},[t])}const Gx=b.createContext({});function Rn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function jk(e,t,n,r,i,s){var g,w;const{visualElement:a}=b.useContext(Fo),l=b.useContext(Vx),c=b.useContext(su),u=b.useContext(Fx),d=u.reducedMotion,p=u.skipAnimations,f=b.useRef(null),x=b.useRef(!1);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:d,skipAnimations:p,isSVG:s}),x.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const y=f.current,v=b.useContext(Gx);y&&!y.projection&&i&&(y.type==="html"||y.type==="svg")&&_k(f.current,n,i,v);const S=b.useRef(!1);b.useInsertionEffect(()=>{y&&S.current&&y.update(n,c)});const m=n[tx],h=b.useRef(!!m&&typeof window<"u"&&!((g=window.MotionHandoffIsComplete)!=null&&g.call(window,m))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,m)));return v2(()=>{x.current=!0,y&&(S.current=!0,window.MotionIsMounted=!0,y.updateFeatures(),y.scheduleRenderMicrotask(),h.current&&y.animationState&&y.animationState.animateChanges())}),b.useEffect(()=>{y&&(!h.current&&y.animationState&&y.animationState.animateChanges(),h.current&&(queueMicrotask(()=>{var k;(k=window.MotionHandoffMarkAsComplete)==null||k.call(window,m)}),h.current=!1),y.enteringChildren=void 0)}),y}function _k(e,t,n,r){const{layoutId:i,layout:s,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutAnchor:d,layoutCrossfade:p}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:Kx(e.parent)),e.projection.setOptions({layoutId:i,layout:s,alwaysMeasureLayout:!!a||l&&Rn(l),visualElement:e,animationType:typeof s=="string"?s:"both",initialPromotionConfig:r,crossfade:p,layoutScroll:c,layoutRoot:u,layoutAnchor:d})}function Kx(e){if(e)return e.options.allowProjection!==!1?e.projection:Kx(e.parent)}function Aa(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&ok(r);const s=n?n==="svg":Eu(e),a=s?Sk:wk;function l(u,d){let p;const f={...b.useContext(Fx),...u,layoutId:Ck(u)},{isStatic:x}=f,y=dk(u),v=a(u,x);if(!x&&typeof window<"u"){Ak();const S=Tk(f);p=S.MeasureLayout,y.visualElement=jk(e,v,f,i,S.ProjectionNode,s)}return o.jsxs(Fo.Provider,{value:y,children:[p&&y.visualElement?o.jsx(p,{visualElement:y.visualElement,...f}):null,xk(e,u,kk(v,y.visualElement,d),v,x,t,s)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=b.forwardRef(l);return c[bk]=e,c}function Ck({layoutId:e}){const t=b.useContext(fg).id;return t&&e!==void 0?t+"-"+e:e}function Ak(e,t){b.useContext(Vx).strict}function Tk(e){const t=Ox(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function Pk(e,t){if(typeof Proxy>"u")return Aa;const n=new Map,r=(s,a)=>Aa(s,a,e,t),i=(s,a)=>r(s,a);return new Proxy(i,{get:(s,a)=>a==="create"?r:(n.has(a)||n.set(a,Aa(a,void 0,e,t)),n.get(a))})}const Ek=(e,t)=>t.isSVG??Eu(e)?new db(t):new sb(t,{allowProjection:e!==b.Fragment});class Ik extends rn{constructor(t){super(t),t.animationState||(t.animationState=gb(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Lo(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let Nk=0;class Rk extends rn{constructor(){super(...arguments),this.id=Nk++,this.isExitComplete=!1}update(){var s;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:a,custom:l}=this.node.getProps();if(typeof a=="string"||typeof a=="object"&&a!==null&&!Array.isArray(a)){const c=vn(this.node,a,l);if(c){const{transition:u,transitionEnd:d,...p}=c;for(const f in p)(s=this.node.getValue(f))==null||s.jump(p[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const Dk={animation:{Feature:Ik},exit:{Feature:Rk}};function bi(e){return{point:{x:e.pageX,y:e.pageY}}}const Mk=e=>t=>ku(t)&&e(t,bi(t));function $r(e,t,n,r){return pi(e,t,Mk(n),r)}const Yx=({current:e})=>e?e.ownerDocument.defaultView:null,rf=(e,t)=>Math.abs(e-t);function zk(e,t){const n=rf(e.x,t.x),r=rf(e.y,t.y);return Math.sqrt(n**2+r**2)}const sf=new Set(["auto","scroll"]);class Xx{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:s=!1,distanceThreshold:a=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=y=>{this.handleScroll(y.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ki(this.lastRawMoveEventInfo,this.transformPagePoint));const y=Ta(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,S=zk(y.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!S)return;const{point:m}=y,{timestamp:h}=de;this.history.push({...m,timestamp:h});const{onStart:g,onMove:w}=this.handlers;v||(g&&g(this.lastMoveEvent,y),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,y)},this.handlePointerMove=(y,v)=>{this.lastMoveEvent=y,this.lastRawMoveEventInfo=v,this.lastMoveEventInfo=Ki(v,this.transformPagePoint),$.update(this.updatePoint,!0)},this.handlePointerUp=(y,v)=>{this.end();const{onEnd:S,onSessionEnd:m,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Ta(y.type==="pointercancel"?this.lastMoveEventInfo:Ki(v,this.transformPagePoint),this.history);this.startEvent&&S&&S(y,g),m&&m(y,g)},!ku(t))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=a,this.contextWindow=i||window;const c=bi(t),u=Ki(c,this.transformPagePoint),{point:d}=u,{timestamp:p}=de;this.history=[{...d,timestamp:p}];const{onSessionStart:f}=n;f&&f(t,Ta(u,this.history));const x={passive:!0,capture:!0};this.removeListeners=vi($r(this.contextWindow,"pointermove",this.handlePointerMove,x),$r(this.contextWindow,"pointerup",this.handlePointerUp,x),$r(this.contextWindow,"pointercancel",this.handlePointerUp,x)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(sf.has(r.overflowX)||sf.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},s={x:i.x-n.x,y:i.y-n.y};s.x===0&&s.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(t,i),$.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Zt(this.updatePoint)}}function Ki(e,t){return t?{point:t(e.point)}:e}function of(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ta({point:e},t){return{point:e,delta:of(e,Qx(t)),offset:of(e,Lk(t)),velocity:Bk(t,.1)}}function Lk(e){return e[0]}function Qx(e){return e[e.length-1]}function Bk(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Qx(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>ze(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>ze(t)*2&&(r=e[1]);const s=He(i.timestamp-r.timestamp);if(s===0)return{x:0,y:0};const a={x:(i.x-r.x)/s,y:(i.y-r.y)/s};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function Fk(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?W(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?W(n,e,r.max):Math.min(e,n)),e}function af(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function Vk(e,{top:t,left:n,bottom:r,right:i}){return{x:af(e.x,n,i),y:af(e.y,t,r)}}function lf(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function Ok(e,t){return{x:lf(e.x,t.x),y:lf(e.y,t.y)}}function Wk(e,t){let n=.5;const r=Se(e),i=Se(t);return i>r?n=ci(t.min,t.max-r,e.min):r>i&&(n=ci(e.min,e.max-i,t.min)),gt(0,1,n)}function $k(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const sc=.35;function Uk(e=sc){return e===!1?e=0:e===!0&&(e=sc),{x:cf(e,"left","right"),y:cf(e,"top","bottom")}}function cf(e,t,n){return{min:uf(e,t),max:uf(e,n)}}function uf(e,t){return typeof e=="number"?e:e[t]||0}const Hk=new WeakMap;class Gk{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=se(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const s=p=>{n&&this.snapToCursor(bi(p).point),this.stopAnimation()},a=(p,f)=>{const{drag:x,dragPropagation:y,onDragStart:v}=this.getProps();if(x&&!y&&(this.openDragLock&&this.openDragLock(),this.openDragLock=jS(x),!this.openDragLock))return;this.latestPointerEvent=p,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ut(m=>{let h=this.getAxisMotionValue(m).get()||0;if(mt.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const w=g.layout.layoutBox[m];w&&(h=Se(w)*(parseFloat(h)/100))}}this.originPoint[m]=h}),v&&$.update(()=>v(p,f),!1,!0),Xl(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},l=(p,f)=>{this.latestPointerEvent=p,this.latestPanInfo=f;const{dragPropagation:x,dragDirectionLock:y,onDirectionLock:v,onDrag:S}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:m}=f;if(y&&this.currentDirection===null){this.currentDirection=Yk(m),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),S&&$.update(()=>S(p,f),!1,!0)},c=(p,f)=>{this.latestPointerEvent=p,this.latestPanInfo=f,this.stop(p,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:p}=this.getProps();(p||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:d}=this.getProps();this.panSession=new Xx(t,{onSessionStart:s,onStart:a,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,distanceThreshold:r,contextWindow:Yx(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!i||!r)return;const{velocity:a}=i;this.startAnimation(a);const{onDragEnd:l}=this.getProps();l&&$.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Yi(t,i,this.currentDirection))return;const s=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=Fk(a,this.constraints[t],this.elastic[t])),s.set(a)}resolveConstraints(){var s;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,i=this.constraints;t&&Rn(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=Vk(r.layoutBox,t):this.constraints=!1,this.elastic=Uk(n),i!==this.constraints&&!Rn(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&ut(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=$k(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Rn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const s=JS(r,i.root,this.visualElement.getTransformPagePoint());let a=Ok(i.layout.layoutBox,s);if(n){const l=n(QS(a));this.hasMutatedConstraints=!!l,l&&(a=xx(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:s,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=ut(d=>{if(!Yi(d,n,this.currentDirection))return;let p=c&&c[d]||{};(a===!0||a===d)&&(p={min:0,max:0});const f=i?200:1e6,x=i?40:1e7,y={type:"inertia",velocity:r?t[d]:0,bounceStiffness:f,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...s,...p};return this.startAxisValueAnimation(d,y)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Xl(this.visualElement,t),r.start(vu(t,r,0,n,this.visualElement,!1))}stopAnimation(){ut(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){ut(n=>{const{drag:r}=this.getProps();if(!Yi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,s=this.getAxisMotionValue(n);if(i&&i.layout){const{min:a,max:l}=i.layout.layoutBox[n],c=s.get()||0;s.set(t[n]-W(a,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Rn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};ut(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();i[a]=Wk({min:c,max:c},this.constraints[a])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),ut(a=>{if(!Yi(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(W(c,u,i[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;Hk.set(this.visualElement,this);const t=this.visualElement.current,n=$r(t,"pointerdown",u=>{const{drag:d,dragListener:p=!0}=this.getProps(),f=u.target,x=f!==t&&ES(f);d&&p&&!x&&this.start(u)});let r;const i=()=>{const{dragConstraints:u}=this.getProps();Rn(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),r||(r=Kk(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,a=s.addEventListener("measure",i);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),$.read(i);const l=pi(window,"resize",()=>this.scalePositionWithinConstraints()),c=s.addEventListener("didUpdate",({delta:u,hasLayoutChanged:d})=>{this.isDragging&&d&&(ut(p=>{const f=this.getAxisMotionValue(p);f&&(this.originPoint[p]+=u[p].translate,f.set(f.get()+u[p].translate))}),this.visualElement.render())});return()=>{l(),n(),a(),c&&c(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:s=!1,dragElastic:a=sc,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:s,dragElastic:a,dragMomentum:l}}}function df(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function Kk(e,t,n){const r=vp(e,df(n)),i=vp(t,df(n));return()=>{r(),i()}}function Yi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Yk(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Xk extends rn{constructor(t){super(t),this.removeGroupControls=Ke,this.removeListeners=Ke,this.controls=new Gk(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ke}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Pa=e=>(t,n)=>{e&&$.update(()=>e(t,n),!1,!0)};class Qk extends rn{constructor(){super(...arguments),this.removePointerDownListener=Ke}onPointerDown(t){this.session=new Xx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Yx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Pa(t),onStart:Pa(n),onMove:Pa(r),onEnd:(s,a)=>{delete this.session,i&&$.postRender(()=>i(s,a))}}}mount(){this.removePointerDownListener=$r(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ea=!1;class qk extends b.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:s}=t;s&&(n.group&&n.group.add(s),r&&r.register&&i&&r.register(s),Ea&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Ns.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:s}=this.props,{projection:a}=r;return a&&(a.isPresent=s,t.layoutDependency!==n&&a.setOptions({...a.options,layoutDependency:n}),Ea=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==s?a.willUpdate():this.safeToRemove(),t.isPresent!==s&&(s?a.promote():a.relegate()||$.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),bu.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Ea=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function qx(e){const[t,n]=ik(),r=b.useContext(fg);return o.jsx(qk,{...e,layoutGroup:r,switchLayoutGroup:b.useContext(Gx),isPresent:t,safeToRemove:n})}const Zk={pan:{Feature:Qk},drag:{Feature:Xk,ProjectionNode:Bx,MeasureLayout:qx}};function pf(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,s=r[i];s&&$.postRender(()=>s(t,bi(t)))}class Jk extends rn{mount(){const{current:t}=this.node;t&&(this.unmount=CS(t,(n,r)=>(pf(this.node,r,"Start"),i=>pf(this.node,i,"End"))))}unmount(){}}class e5 extends rn{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vi(pi(this.node.current,"focus",()=>this.onFocus()),pi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function ff(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),s=r[i];s&&$.postRender(()=>s(t,bi(t)))}class t5 extends rn{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=NS(t,(i,s)=>(ff(this.node,s,"Start"),(a,{success:l})=>ff(this.node,a,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const oc=new WeakMap,Ia=new WeakMap,n5=e=>{const t=oc.get(e.target);t&&t(e)},r5=e=>{e.forEach(n5)};function i5({root:e,...t}){const n=e||document;Ia.has(n)||Ia.set(n,{});const r=Ia.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(r5,{root:e,...t})),r[i]}function s5(e,t,n){const r=i5(t);return oc.set(e,n),r.observe(e),()=>{oc.delete(e),r.unobserve(e)}}const o5={some:0,all:1};class a5 extends rn{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var c;(c=this.stopObserver)==null||c.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:s}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:o5[i]},l=u=>{const{isIntersecting:d}=u;if(this.isInView===d||(this.isInView=d,s&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:p,onViewportLeave:f}=this.node.getProps(),x=d?p:f;x&&x(u)};this.stopObserver=s5(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(l5(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function l5({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const c5={inView:{Feature:a5},tap:{Feature:t5},focus:{Feature:e5},hover:{Feature:Jk}},u5={layout:{ProjectionNode:Bx,MeasureLayout:qx}},d5={...Dk,...c5,...Zk,...u5},Je=Pk(d5,Ek);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hf=e=>{const t=f5(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Na={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},m5=b.createContext({}),g5=()=>b.useContext(m5),x5=b.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:s,iconNode:a,...l},c)=>{const{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:p=!1,color:f="currentColor",className:x=""}=g5()??{},y=r??p?Number(n??d)*24/Number(t??u):n??d;return b.createElement("svg",{ref:c,...Na,width:t??u??Na.width,height:t??u??Na.height,stroke:e??f,strokeWidth:y,className:Zx("lucide",x,i),...!s&&!h5(l)&&{"aria-hidden":"true"},...l},[...a.map(([v,S])=>b.createElement(v,S)),...Array.isArray(s)?s:[s]])});/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=(e,t)=>{const n=b.forwardRef(({className:r,...i},s)=>b.createElement(x5,{ref:s,iconNode:t,className:Zx(`lucide-${p5(hf(e))}`,`lucide-${e}`,r),...i}));return n.displayName=hf(e),n};/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],v5=Ve("arrow-right",y5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],ac=Ve("brain",w5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],b5=Ve("briefcase-business",S5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],j5=Ve("building-2",k5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],C5=Ve("eye",_5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Jx=Ve("graduation-cap",A5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],P5=Ve("map-pin",T5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],I5=Ve("network",E5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=[["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}],["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09",key:"u4xsad"}],["path",{d:"M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z",key:"676m9"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05",key:"92ym6u"}]],R5=Ve("rocket",N5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],M5=Ve("shield",D5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],L5=Ve("target",z5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],F5=Ve("trending-up",B5);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],O5=Ve("users",V5),Ra=()=>{const e={initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.6}};return o.jsxs("div",{className:"min-h-screen bg-[#020808] text-white overflow-hidden",children:[o.jsxs("div",{className:"fixed inset-0 pointer-events-none",children:[o.jsx("div",{className:"absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#0D2A29] rounded-full opacity-20 blur-3xl"}),o.jsx("div",{className:"absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#0D2A29] rounded-full opacity-20 blur-3xl"}),o.jsx("div",{className:"absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#18C8A3] rounded-full opacity-5 blur-3xl"})]}),o.jsxs(Je.section,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},className:"relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[o.jsxs("div",{className:"text-center mb-16",children:[o.jsx(Je.div,{initial:{scale:0},animate:{scale:1},transition:{duration:.6,type:"spring"},className:"inline-block mb-6",children:o.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-[#18C8A3] to-[#8FEFD5] rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(24,200,163,0.3)]",children:o.jsx(ac,{className:"w-10 h-10 text-[#020808]"})})}),o.jsx(Je.h1,{...e,className:"text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-[#18C8A3] via-[#8FEFD5] to-[#D8E5DF] bg-clip-text text-transparent",children:"Where Intelligence Meets Purpose"}),o.jsx(Je.p,{...e,transition:{delay:.2},className:"text-xl md:text-2xl text-[#9CA8A3] max-w-3xl mx-auto",children:"The story behind India's most innovative AI academy"})]}),o.jsx(Je.div,{...e,transition:{delay:.3},className:"bg-gradient-to-br from-[#071212] to-[#0D2A29] rounded-3xl p-8 md:p-12 mb-16 border border-[#0D2A29] shadow-[0_0_60px_rgba(13,42,41,0.3)]",children:o.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4 text-[#18C8A3]",children:"The Meaning Behind Elevox"}),o.jsxs("p",{className:"text-[#9CA8A3] text-lg leading-relaxed",children:[o.jsx("span",{className:"text-[#8FEFD5] font-semibold",children:"Elevox"})," emerges from the fusion of",o.jsx("span",{className:"text-[#18C8A3] font-semibold",children:' "Elevate"'})," and",o.jsx("span",{className:"text-[#18C8A3] font-semibold",children:' "Vox"'})," (voice in Latin). It represents our mission to elevate the voice of Indian talent in the global AI landscape."]}),o.jsxs("div",{className:"mt-6 flex flex-wrap gap-4",children:[o.jsx("span",{className:"px-4 py-2 bg-[#0D2A29] border border-[#18C8A3] rounded-full text-[#18C8A3] text-sm",children:"🚀 Elevate"}),o.jsx("span",{className:"px-4 py-2 bg-[#0D2A29] border border-[#8FEFD5] rounded-full text-[#8FEFD5] text-sm",children:"🗣️ Voice"}),o.jsx("span",{className:"px-4 py-2 bg-[#0D2A29] border border-[#D8E5DF] rounded-full text-[#D8E5DF] text-sm",children:"✨ Purpose"})]})]}),o.jsx("div",{className:"flex-shrink-0",children:o.jsx("div",{className:"w-32 h-32 bg-gradient-to-br from-[#18C8A3] to-[#8FEFD5] rounded-full flex items-center justify-center shadow-[0_0_60px_rgba(24,200,163,0.2)]",children:o.jsx("span",{className:"text-[#020808] text-4xl font-bold",children:"E"})})})]})}),o.jsxs(Je.div,{...e,transition:{delay:.4},className:"grid md:grid-cols-2 gap-8 mb-16",children:[o.jsxs("div",{className:"bg-[#071212] rounded-3xl p-8 border border-[#0D2A29] hover:border-[#18C8A3] transition-all duration-300 shadow-[0_0_30px_rgba(13,42,41,0.2)]",children:[o.jsx("div",{className:"w-14 h-14 bg-[#0D2A29] rounded-xl flex items-center justify-center mb-6",children:o.jsx(R5,{className:"w-7 h-7 text-[#18C8A3]"})}),o.jsx("h3",{className:"text-2xl font-bold mb-4 text-[#18C8A3]",children:"Why Elevox Was Created"}),o.jsx("p",{className:"text-[#9CA8A3] leading-relaxed",children:"Born from a simple observation: India produces millions of graduates annually, yet only a fraction are equipped with practical AI skills. Elevox was created to bridge this gap, transforming theoretical knowledge into real-world AI expertise that drives innovation and economic growth."})]}),o.jsxs("div",{className:"bg-[#071212] rounded-3xl p-8 border border-[#0D2A29] hover:border-[#18C8A3] transition-all duration-300 shadow-[0_0_30px_rgba(13,42,41,0.2)]",children:[o.jsx("div",{className:"w-14 h-14 bg-[#0D2A29] rounded-xl flex items-center justify-center mb-6",children:o.jsx(F5,{className:"w-7 h-7 text-[#18C8A3]"})}),o.jsx("h3",{className:"text-2xl font-bold mb-4 text-[#18C8A3]",children:"The AI Skills Gap in India"}),o.jsx("p",{className:"text-[#9CA8A3] leading-relaxed",children:"India faces a critical shortage of AI-ready talent. With only 10% of engineers possessing relevant AI skills, the gap between demand and supply continues to widen. Elevox addresses this by providing industry-aligned training that prepares students for the AI-driven future."})]})]}),o.jsx(Je.div,{...e,transition:{delay:.5},className:"bg-gradient-to-br from-[#071212] to-[#0D2A29] rounded-3xl p-8 md:p-12 mb-16 border border-[#0D2A29]",children:o.jsxs("div",{className:"flex flex-col md:flex-row items-center gap-8",children:[o.jsxs("div",{className:"flex-1",children:[o.jsxs("h2",{className:"text-3xl font-bold mb-4 text-[#18C8A3]",children:[o.jsx(P5,{className:"inline-block w-8 h-8 mr-2 text-[#8FEFD5]"}),"Why Tier-2 Cities Need AI Infrastructure"]}),o.jsx("p",{className:"text-[#9CA8A3] text-lg leading-relaxed mb-6",children:"Tier-2 cities are India's untapped goldmines of talent. By bringing world-class AI infrastructure to these regions, Elevox is democratizing access to cutting-edge technology education. This isn't just about skills—it's about creating economic opportunities where they're needed most."}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"bg-[#020808] p-4 rounded-xl border border-[#0D2A29]",children:[o.jsx("span",{className:"text-[#18C8A3] font-bold block",children:"🎯 40+"}),o.jsx("span",{className:"text-[#9CA8A3] text-sm",children:"Cities Reached"})]}),o.jsxs("div",{className:"bg-[#020808] p-4 rounded-xl border border-[#0D2A29]",children:[o.jsx("span",{className:"text-[#18C8A3] font-bold block",children:"📈 200%"}),o.jsx("span",{className:"text-[#9CA8A3] text-sm",children:"Talent Growth"})]})]})]}),o.jsx("div",{className:"flex-shrink-0",children:o.jsxs("div",{className:"relative w-48 h-48",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#18C8A3] to-[#8FEFD5] rounded-full opacity-10 blur-2xl"}),o.jsx("div",{className:"relative w-full h-full flex items-center justify-center",children:o.jsx("div",{className:"w-40 h-40 border-2 border-[#18C8A3] rounded-full flex items-center justify-center",children:o.jsx("span",{className:"text-4xl",children:"🌆"})})})]})})]})}),o.jsxs(Je.div,{...e,transition:{delay:.6},className:"grid md:grid-cols-2 gap-8 mb-16",children:[o.jsxs("div",{className:"bg-[#071212] rounded-3xl p-8 border border-[#0D2A29]",children:[o.jsx("div",{className:"w-14 h-14 bg-[#0D2A29] rounded-xl flex items-center justify-center mb-6",children:o.jsx(C5,{className:"w-7 h-7 text-[#18C8A3]"})}),o.jsx("h3",{className:"text-2xl font-bold mb-4 text-[#18C8A3]",children:"Vision for the Future"}),o.jsx("p",{className:"text-[#9CA8A3] leading-relaxed mb-6",children:"By 2030, Elevox aims to create a network of 100 AI centers across India, nurturing 100,000 AI professionals who will drive innovation in every sector—from healthcare to agriculture, manufacturing to finance. We envision an India that leads the world in AI innovation."}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx("div",{className:"w-2 h-2 bg-[#18C8A3] rounded-full animate-pulse"}),o.jsx("div",{className:"w-2 h-2 bg-[#8FEFD5] rounded-full animate-pulse delay-100"}),o.jsx("div",{className:"w-2 h-2 bg-[#D8E5DF] rounded-full animate-pulse delay-200"})]})]}),o.jsxs("div",{className:"bg-[#071212] rounded-3xl p-8 border border-[#0D2A29]",children:[o.jsx("div",{className:"w-14 h-14 bg-[#0D2A29] rounded-xl flex items-center justify-center mb-6",children:o.jsx(M5,{className:"w-7 h-7 text-[#18C8A3]"})}),o.jsx("h3",{className:"text-2xl font-bold mb-4 text-[#18C8A3]",children:"What Makes Elevox Different"}),o.jsxs("ul",{className:"space-y-3 text-[#9CA8A3]",children:[o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx("span",{className:"text-[#18C8A3] mt-1",children:"✦"}),o.jsx("span",{children:"Industry-designed curriculum by AI leaders"})]}),o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx("span",{className:"text-[#18C8A3] mt-1",children:"✦"}),o.jsx("span",{children:"Real-world projects from day one"})]}),o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx("span",{className:"text-[#18C8A3] mt-1",children:"✦"}),o.jsx("span",{children:"1:1 mentorship from AI experts"})]}),o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx("span",{className:"text-[#18C8A3] mt-1",children:"✦"}),o.jsx("span",{children:"Strong focus on ethical AI development"})]}),o.jsxs("li",{className:"flex items-start gap-3",children:[o.jsx("span",{className:"text-[#18C8A3] mt-1",children:"✦"}),o.jsx("span",{children:"Global certification and placement support"})]})]})]})]}),o.jsx(Je.div,{...e,transition:{delay:.7},className:"text-center bg-gradient-to-br from-[#071212] to-[#0D2A29] rounded-3xl p-12 border border-[#0D2A29] mb-16",children:o.jsxs("div",{className:"max-w-3xl mx-auto",children:[o.jsx("div",{className:"w-20 h-20 bg-gradient-to-br from-[#18C8A3] to-[#8FEFD5] rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_40px_rgba(24,200,163,0.2)]",children:o.jsx(ac,{className:"w-10 h-10 text-[#020808]"})}),o.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4 text-[#18C8A3]",children:'The Philosophy of "Where Intelligence Meets Purpose"'}),o.jsx("p",{className:"text-[#9CA8A3] text-lg leading-relaxed",children:"At Elevox, we believe that intelligence without purpose is just data. Our philosophy centers on harnessing AI for meaningful impact—solving real problems, creating sustainable solutions, and empowering communities. Every line of code, every algorithm, every innovation serves a greater purpose: to create a better future for all."}),o.jsxs("div",{className:"mt-8 flex justify-center gap-6",children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-3 h-3 bg-[#18C8A3] rounded-full"}),o.jsx("span",{className:"text-[#D8E5DF]",children:"Innovation"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-3 h-3 bg-[#8FEFD5] rounded-full"}),o.jsx("span",{className:"text-[#D8E5DF]",children:"Impact"})]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:"w-3 h-3 bg-[#D8E5DF] rounded-full"}),o.jsx("span",{className:"text-[#D8E5DF]",children:"Integrity"})]})]})]})}),o.jsx(Je.div,{...e,transition:{delay:.8},className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[{number:"10K+",label:"Students Trained",icon:o.jsx(Jx,{className:"w-6 h-6 text-[#18C8A3]"})},{number:"50+",label:"Expert Mentors",icon:o.jsx(O5,{className:"w-6 h-6 text-[#18C8A3]"})},{number:"95%",label:"Placement Rate",icon:o.jsx(L5,{className:"w-6 h-6 text-[#18C8A3]"})},{number:"40+",label:"Partner Companies",icon:o.jsx(j5,{className:"w-6 h-6 text-[#18C8A3]"})}].map((t,n)=>o.jsxs(Je.div,{whileHover:{scale:1.05},className:"bg-[#071212] p-6 rounded-2xl border border-[#0D2A29] text-center hover:border-[#18C8A3] transition-all duration-300 shadow-[0_0_20px_rgba(13,42,41,0.2)]",children:[o.jsx("div",{className:"flex justify-center mb-3",children:t.icon}),o.jsx("div",{className:"text-3xl font-bold text-[#8FEFD5]",children:t.number}),o.jsx("div",{className:"text-[#9CA8A3] text-sm",children:t.label})]},n))})]})]})},mf=()=>{const e=[{name:"AI Foundations - Batch 7",startDate:"July 15, 2026",duration:"8 Weeks",format:"Hybrid (Online + In-Person)",seats:12,status:"Open",deadline:"July 5, 2026"},{name:"Professional Upskilling - Cohort 3",startDate:"August 1, 2026",duration:"12 Weeks",format:"In-Person (Nagpur)",seats:15,status:"Open",deadline:"July 20, 2026"},{name:"AI for Developers - Batch 4",startDate:"August 15, 2026",duration:"12 Weeks",format:"Online",seats:8,status:"Limited",deadline:"August 5, 2026"},{name:"AI for Marketing - Batch 2",startDate:"September 1, 2026",duration:"10 Weeks",format:"Hybrid",seats:10,status:"Coming Soon",deadline:"August 20, 2026"}],t=[{name:"Merit Scholarship",amount:"Up to 50%",criteria:"Based on entrance exam performance"},{name:"Women in AI",amount:"30%",criteria:"For female candidates in STEM"},{name:"Early Bird Discount",amount:"15%",criteria:"Apply 30 days before batch start"},{name:"Group Discount",amount:"20%",criteria:"For 3+ students applying together"}];return o.jsxs("div",{style:W5,children:[o.jsx("section",{style:$5,children:o.jsxs("div",{style:U5,children:[o.jsxs("h1",{style:H5,children:["Join the ",o.jsx("span",{style:G5,children:"AI Revolution"})]}),o.jsx("p",{style:K5,children:"Secure your spot in our upcoming cohorts. Limited seats available for each batch."}),o.jsx("a",{href:"#apply",style:Y5,children:"Start Your Application →"})]})}),o.jsxs("section",{style:X5,children:[o.jsx("h2",{style:gf,children:"Upcoming Cohorts"}),o.jsx("div",{style:Q5,children:o.jsxs("table",{style:q5,children:[o.jsx("thead",{children:o.jsxs("tr",{style:Z5,children:[o.jsx("th",{style:En,children:"Program"}),o.jsx("th",{style:En,children:"Start Date"}),o.jsx("th",{style:En,children:"Duration"}),o.jsx("th",{style:En,children:"Format"}),o.jsx("th",{style:En,children:"Seats"}),o.jsx("th",{style:En,children:"Status"})]})}),o.jsx("tbody",{children:e.map((n,r)=>o.jsxs("tr",{style:J5,children:[o.jsx("td",{style:In,children:o.jsx("strong",{children:n.name})}),o.jsx("td",{style:In,children:n.startDate}),o.jsx("td",{style:In,children:n.duration}),o.jsx("td",{style:In,children:n.format}),o.jsx("td",{style:In,children:n.seats}),o.jsx("td",{style:In,children:o.jsx("span",{style:{...ej,backgroundColor:n.status==="Open"?"rgba(0,212,168,0.15)":n.status==="Limited"?"rgba(255,193,7,0.15)":"rgba(100,100,100,0.15)",color:n.status==="Open"?"#00d4a8":n.status==="Limited"?"#ffc107":"rgba(240,242,245,0.5)"},children:n.status})})]},r))})]})})]}),o.jsxs("section",{style:tj,children:[o.jsx("h2",{style:gf,children:"Scholarships & Financial Aid"}),o.jsx("div",{style:nj,children:t.map((n,r)=>o.jsxs("div",{style:rj,children:[o.jsx("h3",{style:ij,children:n.name}),o.jsx("div",{style:sj,children:n.amount}),o.jsx("p",{style:oj,children:n.criteria})]},r))})]}),o.jsx("section",{id:"apply",style:aj,children:o.jsxs("div",{style:lj,children:[o.jsx("h2",{style:cj,children:"Ready to Apply?"}),o.jsx("p",{style:uj,children:"Fill out our application form and take the first step towards your AI career."}),o.jsxs("form",{style:dj,children:[o.jsx("input",{type:"text",placeholder:"Full Name",style:Xi}),o.jsx("input",{type:"email",placeholder:"Email Address",style:Xi}),o.jsx("input",{type:"tel",placeholder:"Phone Number",style:Xi}),o.jsxs("select",{style:Xi,children:[o.jsx("option",{value:"",children:"Select Program"}),o.jsx("option",{value:"foundations",children:"AI Foundations"}),o.jsx("option",{value:"upskilling",children:"Professional Upskilling"}),o.jsx("option",{value:"developers",children:"AI for Developers"}),o.jsx("option",{value:"marketing",children:"AI for Marketing"})]}),o.jsx("button",{type:"submit",style:pj,children:"Submit Application →"})]})]})})]})},W5={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},$5={padding:"80px 24px 60px",background:"linear-gradient(180deg, rgba(0,212,168,0.05) 0%, transparent 100%)",textAlign:"center"},U5={maxWidth:"800px",margin:"0 auto"},H5={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"20px",lineHeight:"1.1"},G5={color:"#00d4a8"},K5={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",marginBottom:"32px",lineHeight:"1.6"},Y5={display:"inline-block",padding:"14px 40px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},X5={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},gf={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"32px",textAlign:"center"},Q5={overflowX:"auto",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.06)"},q5={width:"100%",borderCollapse:"collapse",backgroundColor:"rgba(255,255,255,0.02)"},Z5={borderBottom:"1px solid rgba(255,255,255,0.06)"},En={padding:"16px",textAlign:"left",fontSize:"12px",fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",color:"rgba(240,242,245,0.5)"},In={padding:"16px",fontSize:"14px",color:"rgba(240,242,245,0.8)",borderBottom:"1px solid rgba(255,255,255,0.04)"},J5={transition:"background 0.2s"},ej={display:"inline-block",padding:"4px 12px",borderRadius:"12px",fontSize:"12px",fontWeight:500},tj={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},nj={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"20px"},rj={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",padding:"24px",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},ij={fontSize:"16px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},sj={fontSize:"24px",fontWeight:700,color:"#00d4a8",marginBottom:"8px"},oj={fontSize:"13px",color:"rgba(240,242,245,0.5)",lineHeight:"1.4"},aj={padding:"80px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"},lj={maxWidth:"600px",margin:"0 auto",textAlign:"center"},cj={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2rem, 3vw, 2.8rem)",color:"#f0f2f5",marginBottom:"16px"},uj={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"32px"},dj={display:"flex",flexDirection:"column",gap:"16px"},Xi={padding:"14px 16px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.08)",backgroundColor:"rgba(255,255,255,0.03)",color:"#f0f2f5",fontSize:"15px",fontFamily:"'Inter', sans-serif"},pj={padding:"14px",borderRadius:"10px",border:"none",backgroundColor:"#00d4a8",color:"#031a14",fontSize:"16px",fontWeight:600,cursor:"pointer",transition:"all 0.2s"},fj=()=>o.jsxs("div",{style:hj,children:[o.jsxs("section",{style:mj,children:[o.jsx("h1",{style:gj,children:"For Business"}),o.jsx("p",{style:xj,children:"Transform your organization with AI. Tailored solutions for teams and enterprises."})]}),o.jsxs("section",{style:yj,children:[o.jsxs("div",{style:Qi,children:[o.jsx("h3",{style:qi,children:"🏢 AI Readiness Programme"}),o.jsx("p",{style:Zi,children:"Audit and upskill your team with our comprehensive AI readiness program."}),o.jsx("a",{href:"/corporate",style:Ji,children:"Learn More →"})]}),o.jsxs("div",{style:Qi,children:[o.jsx("h3",{style:qi,children:"👔 Leadership AI Sessions"}),o.jsx("p",{style:Zi,children:"Executive-level AI training for C-suite and management teams."}),o.jsx("a",{href:"/corporate",style:Ji,children:"Explore →"})]}),o.jsxs("div",{style:Qi,children:[o.jsx("h3",{style:qi,children:"🏫 Campus Programmes"}),o.jsx("p",{style:Zi,children:"Partner with Elevox to bring AI education to your campus."}),o.jsx("a",{href:"/colleges",style:Ji,children:"Partner With Us →"})]}),o.jsxs("div",{style:Qi,children:[o.jsx("h3",{style:qi,children:"🎓 Faculty Development"}),o.jsx("p",{style:Zi,children:"Train the trainers - empower your faculty with AI expertise."}),o.jsx("a",{href:"/colleges",style:Ji,children:"Get Started →"})]})]})]}),hj={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},mj={padding:"60px 24px 40px",maxWidth:"900px",margin:"0 auto",textAlign:"center"},gj={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px"},xj={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)"},yj={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"32px",maxWidth:"1024px",margin:"0 auto",padding:"0 24px 80px"},Qi={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"32px",border:"1px solid rgba(255,255,255,0.06)"},qi={fontSize:"20px",fontWeight:600,color:"#f0f2f5",marginBottom:"12px"},Zi={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"16px"},Ji={color:"#00d4a8",textDecoration:"none",fontWeight:500,fontSize:"14px"},xf=()=>{const e=[{icon:"📄",title:"Resume & Portfolio Building",description:"Get professional resume writing and portfolio development services tailored for AI roles.",details:["ATS-optimized resumes","GitHub profile setup","Project portfolio creation","LinkedIn optimization"]},{icon:"🎯",title:"Interview Preparation",description:"Comprehensive interview training with mock interviews and technical assessments.",details:["Technical interview prep","Behavioral interview coaching","Mock interviews","Salary negotiation"]},{icon:"🤝",title:"Job Placement Support",description:"Connect with our network of hiring partners and get placement assistance.",details:["Job matching","Referral network","Company introductions","Career fairs"]},{icon:"🌐",title:"Networking & Community",description:"Join a community of AI professionals and expand your professional network.",details:["Alumni network","Industry events","Guest lectures","Mentorship program"]}],t=[{company:"Google",role:"AI Engineer",location:"Bangalore",alumni:"Priya M."},{company:"Microsoft",role:"Data Scientist",location:"Hyderabad",alumni:"Rahul K."},{company:"Amazon",role:"ML Engineer",location:"Chennai",alumni:"Sneha P."},{company:"Flipkart",role:"AI Analyst",location:"Bengaluru",alumni:"Amit S."},{company:"TCS",role:"AI Consultant",location:"Mumbai",alumni:"Ravi G."},{company:"Wipro",role:"Data Analyst",location:"Pune",alumni:"Neha R."}];return o.jsxs("div",{style:vj,children:[o.jsx("section",{style:wj,children:o.jsxs("div",{style:Sj,children:[o.jsxs("h1",{style:bj,children:["Launch Your ",o.jsx("span",{style:kj,children:"AI Career"})]}),o.jsx("p",{style:jj,children:"From learning to earning - our Career Accelerator program guides you every step of the way."})]})}),o.jsx("section",{style:_j,children:o.jsxs("div",{style:Cj,children:[o.jsxs("div",{style:es,children:[o.jsx("div",{style:ts,children:"95%"}),o.jsx("div",{style:ns,children:"Placement Rate"})]}),o.jsxs("div",{style:es,children:[o.jsx("div",{style:ts,children:"₹15L"}),o.jsx("div",{style:ns,children:"Average Package"})]}),o.jsxs("div",{style:es,children:[o.jsx("div",{style:ts,children:"100+"}),o.jsx("div",{style:ns,children:"Hiring Partners"})]}),o.jsxs("div",{style:es,children:[o.jsx("div",{style:ts,children:"3x"}),o.jsx("div",{style:ns,children:"Salary Growth"})]})]})}),o.jsxs("section",{style:Aj,children:[o.jsx("h2",{style:yf,children:"Career Accelerator Services"}),o.jsx("div",{style:Tj,children:e.map((n,r)=>o.jsxs("div",{style:Pj,children:[o.jsx("div",{style:Ej,children:n.icon}),o.jsx("h3",{style:Ij,children:n.title}),o.jsx("p",{style:Nj,children:n.description}),o.jsx("ul",{style:Rj,children:n.details.map((i,s)=>o.jsx("li",{style:Dj,children:i},s))})]},r))})]}),o.jsxs("section",{style:Mj,children:[o.jsx("h2",{style:yf,children:"Placement Outcomes"}),o.jsx("p",{style:zj,children:"Where our alumni are making an impact"}),o.jsx("div",{style:Lj,children:t.map((n,r)=>o.jsxs("div",{style:Bj,children:[o.jsx("div",{style:Fj,children:n.company.charAt(0)}),o.jsxs("div",{style:Vj,children:[o.jsx("div",{style:Oj,children:n.company}),o.jsx("div",{style:Wj,children:n.role}),o.jsx("div",{style:$j,children:n.location}),o.jsxs("div",{style:Uj,children:["🌟 ",n.alumni]})]})]},r))})]}),o.jsx("section",{style:Hj,children:o.jsxs("div",{style:Gj,children:[o.jsx("h2",{style:Kj,children:"Start Your Career Journey"}),o.jsx("p",{style:Yj,children:"Join our Career Accelerator program and get placed in top companies."}),o.jsx("a",{href:"/admissions",style:Xj,children:"Apply for Career Accelerator →"})]})})]})},vj={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},wj={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"},Sj={maxWidth:"800px",margin:"0 auto"},bj={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},kj={color:"#00d4a8"},jj={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6"},_j={padding:"40px 24px 60px",maxWidth:"1024px",margin:"0 auto"},Cj={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},es={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",padding:"24px",textAlign:"center",border:"1px solid rgba(255,255,255,0.06)"},ts={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2rem, 4vw, 3rem)",fontWeight:700,color:"#00d4a8",marginBottom:"4px"},ns={fontSize:"14px",color:"rgba(240,242,245,0.5)"},Aj={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},yf={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px",textAlign:"center"},Tj={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:"24px"},Pj={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)"},Ej={fontSize:"40px",marginBottom:"12px"},Ij={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},Nj={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"12px"},Rj={listStyle:"none",padding:0},Dj={fontSize:"13px",color:"rgba(240,242,245,0.5)",padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"},Mj={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},zj={fontSize:"16px",color:"rgba(240,242,245,0.5)",textAlign:"center",marginBottom:"32px"},Lj={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},Bj={display:"flex",gap:"16px",padding:"16px",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.06)",alignItems:"center"},Fj={width:"48px",height:"48px",borderRadius:"10px",backgroundColor:"rgba(0,212,168,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:700,color:"#00d4a8",flexShrink:0},Vj={flex:1},Oj={fontSize:"15px",fontWeight:600,color:"#f0f2f5"},Wj={fontSize:"13px",color:"rgba(240,242,245,0.6)"},$j={fontSize:"12px",color:"rgba(240,242,245,0.3)"},Uj={fontSize:"12px",color:"#00d4a8",marginTop:"4px"},Hj={padding:"60px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"},Gj={maxWidth:"700px",margin:"0 auto",textAlign:"center"},Kj={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px"},Yj={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"24px"},Xj={display:"inline-block",padding:"14px 36px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},vf=()=>{const e=[{title:"Campus Workshops",description:"Student-facing AI workshops designed to inspire and educate the next generation of AI professionals.",features:["2-5 Day Programs","Hands-on Projects","Industry Insights","Career Guidance"],duration:"2-5 Days"},{title:"Faculty Development Program",description:"Equip your faculty with AI expertise and teaching methodologies for modern AI education.",features:["AI Fundamentals","Teaching Methods","Resource Development","Certification"],duration:"1-2 Weeks"},{title:"Curriculum Partnership",description:"Integrate AI into your existing curriculum with our expert-designed modules and learning materials.",features:["Course Design","Learning Materials","Assessment Tools","Ongoing Support"],duration:"Semester-long"},{title:"Placement Readiness Program",description:"Make your students job-ready with comprehensive AI skills and placement preparation.",features:["Technical Skills","Interview Prep","Portfolio Building","Corporate Connect"],duration:"4-6 Weeks"}],t=[{name:"IIT Nagpur",type:"Technical Institute"},{name:"IIM Nagpur",type:"Management Institute"},{name:"VNIT",type:"Engineering College"},{name:"Datta Meghe Institute",type:"University"},{name:"GH Raisoni College",type:"Engineering College"},{name:"Yeshwantrao College",type:"Degree College"}];return o.jsxs("div",{style:Qj,children:[o.jsx("section",{style:qj,children:o.jsxs("div",{style:Zj,children:[o.jsxs("h1",{style:Jj,children:["Campus ",o.jsx("span",{style:e4,children:"Partnerships"})]}),o.jsx("p",{style:t4,children:"Bring world-class AI education to your campus. Partner with Elevox to transform your institution."}),o.jsx("a",{href:"#programs",style:n4,children:"View Programs →"})]})}),o.jsxs("section",{id:"programs",style:r4,children:[o.jsx("h2",{style:wf,children:"Our Campus Programs"}),o.jsx("div",{style:i4,children:e.map((n,r)=>o.jsxs("div",{style:s4,children:[o.jsx("div",{style:o4,children:["🎓","👨‍🏫","📚","💼"][r]}),o.jsx("h3",{style:a4,children:n.title}),o.jsxs("div",{style:l4,children:["⏱ ",n.duration]}),o.jsx("p",{style:c4,children:n.description}),o.jsx("ul",{style:u4,children:n.features.map((i,s)=>o.jsx("li",{style:d4,children:i},s))}),o.jsx("a",{href:"#",style:p4,children:"Partner With Us →"})]},r))})]}),o.jsxs("section",{style:f4,children:[o.jsx("h2",{style:wf,children:"Our Partner Institutions"}),o.jsx("div",{style:h4,children:t.map((n,r)=>o.jsxs("div",{style:m4,children:[o.jsx("div",{style:g4,children:n.name.charAt(0)}),o.jsxs("div",{style:x4,children:[o.jsx("div",{style:y4,children:n.name}),o.jsx("div",{style:v4,children:n.type})]})]},r))})]}),o.jsx("section",{style:w4,children:o.jsxs("div",{style:S4,children:[o.jsx("h2",{style:b4,children:"Ready to Partner?"}),o.jsx("p",{style:k4,children:"Let's discuss how Elevox can help your institution become an AI education leader."}),o.jsx("a",{href:"#",style:j4,children:"Request a Proposal →"})]})})]})},Qj={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},qj={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"},Zj={maxWidth:"800px",margin:"0 auto"},Jj={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},e4={color:"#00d4a8"},t4={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto 32px",lineHeight:"1.6"},n4={display:"inline-block",padding:"12px 32px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},r4={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},wf={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"32px",textAlign:"center"},i4={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px"},s4={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)"},o4={fontSize:"40px",marginBottom:"8px"},a4={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"4px"},l4={fontSize:"13px",color:"rgba(240,242,245,0.4)",marginBottom:"12px"},c4={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"12px"},u4={listStyle:"none",padding:0,marginBottom:"20px"},d4={fontSize:"13px",color:"rgba(240,242,245,0.5)",padding:"4px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"},p4={display:"inline-block",padding:"10px 24px",borderRadius:"8px",border:"1px solid rgba(0,212,168,0.3)",color:"#00d4a8",textDecoration:"none",fontSize:"14px",fontWeight:500,transition:"all 0.2s"},f4={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},h4={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"16px"},m4={display:"flex",alignItems:"center",gap:"12px",padding:"16px",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.06)"},g4={width:"40px",height:"40px",borderRadius:"50%",backgroundColor:"rgba(0,212,168,0.1)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",fontWeight:600,color:"#00d4a8"},x4={flex:1},y4={fontSize:"14px",fontWeight:500,color:"#f0f2f5"},v4={fontSize:"12px",color:"rgba(240,242,245,0.4)"},w4={padding:"60px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"},S4={maxWidth:"700px",margin:"0 auto",textAlign:"center"},b4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px"},k4={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"24px"},j4={display:"inline-block",padding:"14px 36px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},_4=()=>{const e=[{icon:"📍",label:"Address",value:"Nagpur, Maharashtra, India"},{icon:"📞",label:"Phone",value:"+91 98765 43210"},{icon:"📧",label:"Email",value:"info@elevox.ai"},{icon:"🕐",label:"Working Hours",value:"Mon-Fri: 9:00 AM - 6:00 PM IST"}];return o.jsxs("div",{style:C4,children:[o.jsx("section",{style:A4,children:o.jsxs("div",{style:T4,children:[o.jsxs("h1",{style:P4,children:["Get in ",o.jsx("span",{style:E4,children:"Touch"})]}),o.jsx("p",{style:I4,children:"Have questions? We'd love to hear from you. Reach out to us through any of the channels below."})]})}),o.jsx("section",{style:N4,children:o.jsxs("div",{style:R4,children:[o.jsxs("div",{style:D4,children:[o.jsx("h2",{style:M4,children:"Contact Information"}),o.jsx("p",{style:z4,children:"Our team is ready to assist you with any questions about our programs, admissions, or partnerships."}),o.jsx("div",{style:L4,children:e.map((t,n)=>o.jsxs("div",{style:B4,children:[o.jsx("span",{style:F4,children:t.icon}),o.jsxs("div",{children:[o.jsx("div",{style:V4,children:t.label}),o.jsx("div",{style:O4,children:t.value})]})]},n))}),o.jsxs("div",{style:W4,children:[o.jsx("a",{href:"#",style:rs,children:"LinkedIn"}),o.jsx("a",{href:"#",style:rs,children:"Twitter"}),o.jsx("a",{href:"#",style:rs,children:"YouTube"}),o.jsx("a",{href:"#",style:rs,children:"Instagram"})]})]}),o.jsxs("div",{style:$4,children:[o.jsx("h2",{style:U4,children:"Send a Message"}),o.jsxs("form",{style:H4,children:[o.jsxs("div",{style:G4,children:[o.jsx("input",{type:"text",placeholder:"Full Name",style:Sf}),o.jsx("input",{type:"email",placeholder:"Email Address",style:Sf})]}),o.jsx("input",{type:"text",placeholder:"Subject",style:bf}),o.jsxs("select",{style:bf,children:[o.jsx("option",{value:"",children:"Select a Topic"}),o.jsx("option",{value:"admissions",children:"Admissions"}),o.jsx("option",{value:"programs",children:"Programs"}),o.jsx("option",{value:"partnerships",children:"Partnerships"}),o.jsx("option",{value:"corporate",children:"Corporate Training"}),o.jsx("option",{value:"general",children:"General Inquiry"})]}),o.jsx("textarea",{placeholder:"Your Message",rows:"5",style:K4}),o.jsx("button",{type:"submit",style:Y4,children:"Send Message →"})]})]})]})}),o.jsx("section",{style:X4,children:o.jsx("div",{style:Q4,children:o.jsxs("div",{style:q4,children:[o.jsx("div",{style:Z4,children:"📍"}),o.jsx("h3",{style:J4,children:"Find Us in Nagpur"}),o.jsx("p",{style:e_,children:"Visit our campus to experience Elevox Academy in person."}),o.jsx("a",{href:"#",style:t_,children:"Get Directions →"})]})})})]})},C4={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},A4={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"},T4={maxWidth:"800px",margin:"0 auto"},P4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},E4={color:"#00d4a8"},I4={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6"},N4={padding:"40px 24px 60px",maxWidth:"1024px",margin:"0 auto"},R4={display:"grid",gridTemplateColumns:"1fr 1.5fr",gap:"48px"},D4={display:"flex",flexDirection:"column",gap:"16px"},M4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"24px",color:"#f0f2f5"},z4={fontSize:"15px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6"},L4={display:"flex",flexDirection:"column",gap:"12px"},B4={display:"flex",gap:"12px",alignItems:"flex-start",padding:"12px 16px",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.06)"},F4={fontSize:"20px"},V4={fontSize:"12px",fontWeight:600,color:"rgba(240,242,245,0.4)",textTransform:"uppercase",letterSpacing:"0.5px"},O4={fontSize:"15px",color:"#f0f2f5"},W4={display:"flex",gap:"12px",marginTop:"8px",flexWrap:"wrap"},rs={color:"rgba(240,242,245,0.4)",textDecoration:"none",fontSize:"14px",padding:"6px 16px",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.06)",transition:"all 0.2s"},$4={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"32px",border:"1px solid rgba(255,255,255,0.06)"},U4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"20px",color:"#f0f2f5",marginBottom:"20px"},H4={display:"flex",flexDirection:"column",gap:"16px"},G4={display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},Sf={padding:"12px 14px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.08)",backgroundColor:"rgba(255,255,255,0.03)",color:"#f0f2f5",fontSize:"14px",fontFamily:"'Inter', sans-serif",width:"100%"},bf={padding:"12px 14px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.08)",backgroundColor:"rgba(255,255,255,0.03)",color:"#f0f2f5",fontSize:"14px",fontFamily:"'Inter', sans-serif",width:"100%"},K4={padding:"12px 14px",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.08)",backgroundColor:"rgba(255,255,255,0.03)",color:"#f0f2f5",fontSize:"14px",fontFamily:"'Inter', sans-serif",width:"100%",resize:"vertical"},Y4={padding:"14px",borderRadius:"10px",border:"none",backgroundColor:"#00d4a8",color:"#031a14",fontSize:"16px",fontWeight:600,cursor:"pointer",transition:"all 0.2s"},X4={padding:"0 24px 60px",maxWidth:"1024px",margin:"0 auto"},Q4={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",border:"1px solid rgba(255,255,255,0.06)",minHeight:"300px",display:"flex",alignItems:"center",justifyContent:"center"},q4={textAlign:"center"},Z4={fontSize:"48px",marginBottom:"12px"},J4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"20px",color:"#f0f2f5",marginBottom:"8px"},e_={fontSize:"14px",color:"rgba(240,242,245,0.5)",marginBottom:"16px"},t_={display:"inline-block",padding:"10px 24px",borderRadius:"8px",backgroundColor:"rgba(0,212,168,0.1)",color:"#00d4a8",textDecoration:"none",fontSize:"14px",fontWeight:500,transition:"all 0.2s"},kf=()=>{const e=[{title:"AI Readiness Programme",audience:"For Teams & Departments",duration:"4-8 Weeks",description:"Audit your team's AI capabilities and build a customized upskilling roadmap.",outcomes:["AI Skills Assessment","Custom Learning Path","Project Implementation","ROI Tracking"]},{title:"Leadership AI Sessions",audience:"For C-Suite & Managers",duration:"2-3 Days",description:"Executive-level training on AI strategy, implementation, and business transformation.",outcomes:["AI Strategy Development","Investment Planning","Change Management","Competitive Analysis"]},{title:"Technical AI Training",audience:"For Engineering Teams",duration:"6-12 Weeks",description:"Deep technical training on AI/ML development, deployment, and production practices.",outcomes:["ML Model Development","Production Deployment","Best Practices","Team Collaboration"]},{title:"AI Transformation Consulting",audience:"For Organizations",duration:"Custom",description:"End-to-end AI transformation advisory including strategy, implementation, and measurement.",outcomes:["AI Roadmap","Implementation Plan","Talent Strategy","Success Metrics"]}],t=[{icon:"📈",title:"50%+ Productivity Gains",description:"AI-powered automation drives significant efficiency improvements"},{icon:"💡",title:"Innovation Culture",description:"Build AI-first mindset across your organization"},{icon:"🎯",title:"Competitive Advantage",description:"Stay ahead with cutting-edge AI capabilities"},{icon:"👥",title:"Talent Retention",description:"Invest in your people with valuable AI skills"}];return o.jsxs("div",{style:n_,children:[o.jsx("section",{style:r_,children:o.jsxs("div",{style:i_,children:[o.jsxs("h1",{style:s_,children:["AI Training for ",o.jsx("span",{style:o_,children:"Business"})]}),o.jsx("p",{style:a_,children:"Transform your organization with customized AI training programs designed for business impact."}),o.jsx("a",{href:"#programs",style:l_,children:"Explore Programs →"})]})}),o.jsxs("section",{id:"programs",style:c_,children:[o.jsx("h2",{style:jf,children:"Our Corporate Programs"}),o.jsx("div",{style:u_,children:e.map((n,r)=>o.jsxs("div",{style:d_,children:[o.jsxs("div",{style:p_,children:[o.jsx("h3",{style:f_,children:n.title}),o.jsx("span",{style:h_,children:n.audience})]}),o.jsxs("div",{style:m_,children:["⏱ ",n.duration]}),o.jsx("p",{style:g_,children:n.description}),o.jsx("div",{style:x_,children:n.outcomes.map((i,s)=>o.jsxs("span",{style:y_,children:["✓ ",i]},s))}),o.jsx("a",{href:"#",style:v_,children:"Request Info →"})]},r))})]}),o.jsxs("section",{style:w_,children:[o.jsx("h2",{style:jf,children:"Why Partner With Us"}),o.jsx("div",{style:S_,children:t.map((n,r)=>o.jsxs("div",{style:b_,children:[o.jsx("div",{style:k_,children:n.icon}),o.jsx("h3",{style:j_,children:n.title}),o.jsx("p",{style:__,children:n.description})]},r))})]}),o.jsx("section",{style:C_,children:o.jsxs("div",{style:A_,children:[o.jsx("h2",{style:T_,children:"Start Your Corporate AI Journey"}),o.jsx("p",{style:P_,children:"Let's discuss how we can help your organization build AI capabilities and drive business growth."}),o.jsx("a",{href:"#",style:E_,children:"Schedule a Consultation →"})]})})]})},n_={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},r_={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"},i_={maxWidth:"800px",margin:"0 auto"},s_={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},o_={color:"#00d4a8"},a_={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto 32px",lineHeight:"1.6"},l_={display:"inline-block",padding:"12px 32px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},c_={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},jf={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"32px",textAlign:"center"},u_={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px"},d_={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)"},p_={marginBottom:"8px"},f_={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"4px"},h_={fontSize:"12px",color:"#00d4a8",fontWeight:500},m_={fontSize:"14px",color:"rgba(240,242,245,0.4)",marginBottom:"12px"},g_={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"16px"},x_={display:"flex",flexDirection:"column",gap:"4px",marginBottom:"20px"},y_={fontSize:"13px",color:"rgba(240,242,245,0.5)"},v_={display:"inline-block",padding:"10px 24px",borderRadius:"8px",border:"1px solid rgba(0,212,168,0.3)",color:"#00d4a8",textDecoration:"none",fontSize:"14px",fontWeight:500,transition:"all 0.2s"},w_={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},S_={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"20px"},b_={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",padding:"24px",textAlign:"center",border:"1px solid rgba(255,255,255,0.06)"},k_={fontSize:"32px",marginBottom:"8px"},j_={fontSize:"16px",fontWeight:600,color:"#f0f2f5",marginBottom:"4px"},__={fontSize:"13px",color:"rgba(240,242,245,0.5)",lineHeight:"1.5"},C_={padding:"60px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"},A_={maxWidth:"700px",margin:"0 auto",textAlign:"center"},T_={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px"},P_={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"24px"},E_={display:"inline-block",padding:"14px 36px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},I_=()=>o.jsx("div",{style:N_,children:o.jsxs("section",{style:R_,children:[o.jsx("h1",{style:D_,children:"Our Courses"}),o.jsx("p",{style:M_,children:"Explore our comprehensive range of AI courses designed for every skill level."}),o.jsx("div",{style:z_,children:[{name:"AI Fundamentals",level:"Beginner",duration:"8 Weeks"},{name:"Data Science Mastery",level:"Intermediate",duration:"12 Weeks"},{name:"Deep Learning",level:"Advanced",duration:"12 Weeks"},{name:"NLP Specialization",level:"Advanced",duration:"10 Weeks"},{name:"Computer Vision",level:"Advanced",duration:"10 Weeks"},{name:"MLOps Engineering",level:"Intermediate",duration:"8 Weeks"}].map((e,t)=>o.jsxs("div",{style:L_,children:[o.jsx("h3",{style:B_,children:e.name}),o.jsxs("div",{style:F_,children:[o.jsx("span",{style:V_,children:e.level}),o.jsx("span",{style:O_,children:e.duration})]}),o.jsx("a",{href:"/programmes",style:W_,children:"Learn More →"})]},t))})]})}),N_={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},R_={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},D_={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,color:"#f0f2f5",textAlign:"center",marginBottom:"16px"},M_={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",textAlign:"center",marginBottom:"40px"},z_={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px"},L_={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},B_={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},F_={display:"flex",gap:"12px",justifyContent:"center",marginBottom:"16px"},V_={fontSize:"13px",padding:"4px 12px",borderRadius:"12px",backgroundColor:"rgba(0,212,168,0.1)",color:"#00d4a8"},O_={fontSize:"13px",padding:"4px 12px",borderRadius:"12px",backgroundColor:"rgba(255,255,255,0.05)",color:"rgba(240,242,245,0.5)"},W_={color:"#00d4a8",textDecoration:"none",fontWeight:500,fontSize:"14px"},$_=()=>{const e=[{name:"Dr. Ananya Sharma",role:"CEO & Co-Founder",image:"👩‍🔬",bio:"Former AI Research Lead at Google with a PhD in Machine Learning from Stanford. Published 20+ research papers in top AI conferences including NeurIPS, ICML, and ICLR.",expertise:["Natural Language Processing","Deep Learning","AI Strategy"],experience:"12+ years in AI research and development",education:"PhD - Stanford University, MS - IIT Bombay",achievements:["Top 100 Women in AI 2025","Google Research Excellence Award","3 Patents in AI"],linkedin:"#",twitter:"#"},{name:"Vikram Mehta",role:"CTO & Co-Founder",image:"👨‍💻",bio:"Built and scaled AI systems at Microsoft and Amazon. Expert in MLOps, computer vision, and production-grade AI deployment at enterprise scale.",expertise:["MLOps","Computer Vision","Cloud AI Architecture"],experience:"15+ years in software engineering and AI",education:"MS - Carnegie Mellon, BE - NIT Surathkal",achievements:["AWS AI Hero","Microsoft Gold Star Award","Tech Speaker at 50+ Conferences"],linkedin:"#",twitter:"#"},{name:"Priya Patel",role:"Head of Education & Co-Founder",image:"👩‍🏫",bio:"10+ years in EdTech and curriculum design. Former Dean at a top engineering college. Passionate about making AI education accessible to all.",expertise:["Curriculum Design","Pedagogy","Student Success"],experience:"10+ years in education and EdTech",education:"PhD - Education Technology, MA - Harvard",achievements:["Education Innovation Award 2024","Published 5 Textbooks","3000+ Students Mentored"],linkedin:"#",twitter:"#"}],t=[{icon:"🎯",title:"Purpose-Driven",description:"We believe AI education should serve a purpose - creating opportunities and solving real problems."},{icon:"🤝",title:"Industry-First",description:"Our curriculum is built by industry veterans who understand what it takes to succeed in AI."},{icon:"🌱",title:"Growth Mindset",description:"We foster a culture of continuous learning and encourage our students to push boundaries."},{icon:"💡",title:"Innovation",description:"We embrace innovation in everything we do - from teaching methods to technology integration."}];return o.jsxs("div",{style:U_,children:[o.jsx("section",{style:H_,children:o.jsxs("div",{style:G_,children:[o.jsxs("h1",{style:K_,children:["Meet Our ",o.jsx("span",{style:Y_,children:"Founders"})]}),o.jsx("p",{style:X_,children:"Industry veterans with decades of combined experience in AI, research, and education. Real experts who've built real AI systems."})]})}),o.jsx("section",{style:Q_,children:e.map((n,r)=>o.jsx("div",{style:q_,children:o.jsxs("div",{style:Z_,children:[o.jsx("div",{style:J_,children:o.jsx("span",{style:eC,children:n.image})}),o.jsxs("div",{style:tC,children:[o.jsx("h2",{style:nC,children:n.name}),o.jsx("div",{style:rC,children:n.role}),o.jsx("p",{style:iC,children:n.bio}),o.jsxs("div",{style:sC,children:[o.jsxs("div",{style:_f,children:[o.jsx("span",{style:Cf,children:"Experience:"}),o.jsx("span",{style:Af,children:n.experience})]}),o.jsxs("div",{style:_f,children:[o.jsx("span",{style:Cf,children:"Education:"}),o.jsx("span",{style:Af,children:n.education})]})]}),o.jsx("div",{style:oC,children:n.expertise.map((i,s)=>o.jsx("span",{style:aC,children:i},s))}),o.jsx("div",{style:lC,children:n.achievements.map((i,s)=>o.jsxs("span",{style:cC,children:["🏆 ",i]},s))}),o.jsxs("div",{style:uC,children:[o.jsx("a",{href:n.linkedin,style:Tf,children:"LinkedIn"}),o.jsx("a",{href:n.twitter,style:Tf,children:"Twitter"})]})]})]})},r))}),o.jsxs("section",{style:dC,children:[o.jsx("h2",{style:pC,children:"Our Core Values"}),o.jsx("p",{style:fC,children:"The principles that guide everything we do"}),o.jsx("div",{style:hC,children:t.map((n,r)=>o.jsxs("div",{style:mC,children:[o.jsx("div",{style:gC,children:n.icon}),o.jsx("h3",{style:xC,children:n.title}),o.jsx("p",{style:yC,children:n.description})]},r))})]}),o.jsx("section",{style:vC,children:o.jsxs("div",{style:wC,children:[o.jsx("h2",{style:SC,children:"Our Story"}),o.jsx("p",{style:Pf,children:"Elevox AI Academy was born from a simple belief: exceptional AI talent exists everywhere, but opportunity doesn't. We're bridging that gap by bringing world-class AI education to Tier-2 cities."}),o.jsx("p",{style:Pf,children:"Founded in 2024, we've grown from a small cohort of 20 students to over 500 alumni, with a 95% placement rate. Our success comes from our commitment to practical, industry-aligned education that transforms careers."}),o.jsxs("div",{style:bC,children:[o.jsxs("div",{style:Da,children:[o.jsx("span",{style:Ma,children:"2024"}),o.jsx("span",{style:za,children:"Founded"})]}),o.jsxs("div",{style:Da,children:[o.jsx("span",{style:Ma,children:"500+"}),o.jsx("span",{style:za,children:"Alumni"})]}),o.jsxs("div",{style:Da,children:[o.jsx("span",{style:Ma,children:"95%"}),o.jsx("span",{style:za,children:"Placement"})]})]})]})}),o.jsx("section",{style:kC,children:o.jsxs("div",{style:jC,children:[o.jsx("h2",{style:_C,children:"Join Our Mission"}),o.jsx("p",{style:CC,children:"Be part of a community that's democratizing AI education and creating opportunities in Tier-2 cities. Start your AI journey today."}),o.jsxs("div",{style:AC,children:[o.jsx("a",{href:"/admissions",style:TC,children:"Apply Now →"}),o.jsx("a",{href:"/aboutus",style:PC,children:"Learn More"})]})]})})]})},U_={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},H_={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"},G_={maxWidth:"800px",margin:"0 auto"},K_={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},Y_={color:"#00d4a8"},X_={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6"},Q_={padding:"40px 24px 60px",maxWidth:"1024px",margin:"0 auto"},q_={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"32px",marginBottom:"32px",border:"1px solid rgba(255,255,255,0.06)"},Z_={display:"flex",gap:"32px",alignItems:"flex-start"},J_={width:"120px",height:"120px",borderRadius:"50%",backgroundColor:"rgba(0,212,168,0.1)",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"2px solid rgba(0,212,168,0.2)"},eC={fontSize:"48px"},tC={flex:1},nC={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"4px"},rC={fontSize:"16px",color:"#00d4a8",fontWeight:500,marginBottom:"12px"},iC={fontSize:"15px",color:"rgba(240,242,245,0.7)",lineHeight:"1.7",marginBottom:"16px"},sC={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"10px",padding:"12px 16px",marginBottom:"16px"},_f={padding:"4px 0",fontSize:"14px"},Cf={color:"rgba(240,242,245,0.4)",marginRight:"8px"},Af={color:"rgba(240,242,245,0.7)"},oC={display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"12px"},aC={fontSize:"12px",padding:"4px 14px",borderRadius:"12px",backgroundColor:"rgba(0,212,168,0.1)",color:"#00d4a8",border:"1px solid rgba(0,212,168,0.15)"},lC={display:"flex",gap:"12px",flexWrap:"wrap",marginBottom:"16px"},cC={fontSize:"13px",color:"rgba(240,242,245,0.5)",padding:"4px 8px",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"6px"},uC={display:"flex",gap:"12px"},Tf={color:"rgba(240,242,245,0.4)",textDecoration:"none",fontSize:"14px",padding:"6px 16px",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.06)",transition:"all 0.2s"},dC={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},pC={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"8px",textAlign:"center"},fC={fontSize:"16px",color:"rgba(240,242,245,0.5)",textAlign:"center",marginBottom:"32px"},hC={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"20px"},mC={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",textAlign:"center",border:"1px solid rgba(255,255,255,0.06)"},gC={fontSize:"36px",marginBottom:"12px"},xC={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},yC={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6"},vC={padding:"60px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"},wC={maxWidth:"800px",margin:"0 auto",textAlign:"center"},SC={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"16px"},Pf={fontSize:"16px",color:"rgba(240,242,245,0.6)",lineHeight:"1.8",marginBottom:"16px"},bC={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"24px",marginTop:"32px"},Da={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",padding:"20px",border:"1px solid rgba(255,255,255,0.06)"},Ma={fontFamily:"'Space Grotesk', sans-serif",fontSize:"28px",fontWeight:700,color:"#00d4a8",display:"block"},za={fontSize:"14px",color:"rgba(240,242,245,0.4)",display:"block",marginTop:"4px"},kC={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},jC={maxWidth:"700px",margin:"0 auto",textAlign:"center"},_C={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px"},CC={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"24px"},AC={display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},TC={display:"inline-block",padding:"14px 36px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},PC={display:"inline-block",padding:"14px 36px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",color:"#f0f2f5",fontWeight:500,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},Ef=()=>{const e=[{title:"The AI Skills Gap: Why Tier-2 Cities Are the Next Frontier",category:"Trends",readTime:"8 min read",excerpt:"As AI talent becomes more valuable, Tier-2 cities are emerging as untapped sources of potential."},{title:"Building AI Systems That Actually Work",category:"Founder Articles",readTime:"12 min read",excerpt:"Lessons from building production AI systems at scale, and why most projects fail."},{title:"From Classroom to Career: Student Success Stories",category:"Student Stories",readTime:"6 min read",excerpt:"How Elevox graduates are transforming their careers and making an impact in AI."},{title:"AI Implementation in Manufacturing: A Case Study",category:"Case Studies",readTime:"10 min read",excerpt:"Real-world results from implementing AI in a manufacturing environment."}];return o.jsxs("div",{style:EC,children:[o.jsxs("section",{style:IC,children:[o.jsx("h1",{style:NC,children:"Insights"}),o.jsx("p",{style:RC,children:"Thought leadership, trends, and stories from the world of AI."})]}),o.jsx("section",{style:DC,children:e.map((t,n)=>o.jsxs("div",{style:MC,children:[o.jsx("span",{style:zC,children:t.category}),o.jsx("h3",{style:LC,children:t.title}),o.jsx("p",{style:BC,children:t.excerpt}),o.jsxs("div",{style:FC,children:[o.jsx("span",{style:VC,children:t.readTime}),o.jsx("a",{href:"#",style:OC,children:"Read More →"})]})]},n))})]})},EC={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},IC={padding:"60px 24px 40px",maxWidth:"900px",margin:"0 auto",textAlign:"center"},NC={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px"},RC={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)"},DC={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"32px",maxWidth:"1024px",margin:"0 auto",padding:"0 24px 80px"},MC={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)"},zC={fontSize:"11px",fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",color:"#00d4a8",marginBottom:"12px",display:"block"},LC={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"12px",lineHeight:"1.3"},BC={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"16px"},FC={display:"flex",justifyContent:"space-between",alignItems:"center"},VC={fontSize:"13px",color:"rgba(240,242,245,0.3)"},OC={color:"#00d4a8",textDecoration:"none",fontSize:"13px",fontWeight:500},WC=[{name:"Dr. Ananya Sharma",role:"Co-Founder, AI Strategy",journey:"Former AI research lead at Microsoft Research, Dr. Sharma transitioned from building state-of-the-art NLP models to building the people who can deploy them responsibly. Her decade-long journey spans academia, enterprise AI, and product leadership.",expertise:"Natural Language Processing, Model Evaluation, AI Product Strategy, Enterprise AI Adoption, Responsible AI Frameworks",thought:"AI education must move from tool demos to decision capability. The real test isn't knowing how to use a model—it's knowing when and why to use it.",intro:"Dr. Sharma shares her vision for Elevox and why AI education needs to evolve from technical training to strategic decision-making.",courseVideo:"A comprehensive walkthrough of the AI Strategy stream—covering model evaluation, NLP applications, product strategy, and responsible deployment.",linkedin:"https://www.linkedin.com/in/drananyasharma",media:["AI India Today: 'The Future of Enterprise AI'","Future of Work Panel at TechSparks 2025","Keynote: 'Responsible AI in Production' at Applied AI Summit","Guest Lecturer at IIT Bombay AI Program","Featured in YourStory's 'Women in AI' Series"],specializations:["AI Strategy","NLP","Responsible AI","Enterprise Architecture","Product Leadership"],achievements:["Led applied AI teams across healthcare and fintech for 8+ years","Published 20+ AI research papers and industry white papers","Advisor to 12 early-stage AI product teams","Built NLP systems used by 50+ enterprise clients","Designed AI governance frameworks for 3 Fortune 500 companies"],stats:[{label:"Years Experience",value:"12+"},{label:"Papers Published",value:"22"},{label:"Enterprise Clients",value:"50+"},{label:"Teams Mentored",value:"200+"}],quote:"The most important skill in AI is knowing when not to use it."},{name:"Vikram Mehta",role:"Co-Founder, Technology",journey:"Vikram's career spans building AI systems at scale—from data platforms at Flipkart to automation products at UiPath. He now designs Elevox's technical spine, ensuring every learner builds production-ready skills.",expertise:"MLOps, Cloud AI Architecture, Computer Vision, LLM Applications, Distributed Systems, Production ML",thought:"Employability comes from shipping, measuring, and explaining systems. Theoretical knowledge is worthless without practical deployment experience.",intro:"Vikram discusses the technology philosophy behind Elevox and why hands-on learning is non-negotiable for AI careers.",courseVideo:"Deep dive into the Developer stream—covering MLOps pipelines, cloud deployment, computer vision, and LLM application development.",linkedin:"https://www.linkedin.com/in/vikrammehta",media:["Cloud AI Summit: 'Scaling ML in Production'","MLOps India Forum 2025 Keynote Speaker","Engineering Leadership Podcast: 'Building AI Teams'","Featured in Analytics India Magazine's 'Top ML Engineers'","Guest Speaker at AWS re:Invent 2025"],specializations:["MLOps","LLM Applications","Cloud AI","Distributed Systems","Production ML"],achievements:["Scaled ML systems to handle 1M+ requests per second","Speaker at 50+ engineering forums worldwide","Mentored 100+ AI engineers across enterprise teams","Built computer vision systems for autonomous warehouse robots","Reduced model deployment time from weeks to hours"],stats:[{label:"Systems Scaled",value:"1M+/sec"},{label:"Forums Spoken",value:"50+"},{label:"Engineers Mentored",value:"100+"},{label:"Years Experience",value:"10+"}],quote:"AI is not about models—it's about systems that deliver value consistently."},{name:"Priya Patel",role:"Co-Founder, Learning Experience",journey:"With a background in educational psychology and curriculum design, Priya has transformed how complex AI concepts are taught. She previously led learning innovation at a top ed-tech firm and now shapes Elevox's learner-first approach.",expertise:"Curriculum Design, Learner Success, Assessment Strategy, Career Readiness, Educational Technology",thought:"The final assessment is not a test. It is whether the learner can be trusted with real work. We measure readiness, not memorization.",intro:"Priya shares her learning philosophy and how Elevox creates confidence-building educational journeys.",courseVideo:"Walkthrough of the Professional Pathway—designed for career transition, skill acceleration, and placement readiness.",linkedin:"https://www.linkedin.com/in/priyapatel",media:["Education Innovation Roundtable: 'Future of Tech Learning'","Career Readiness Forum at UNESCO Conference","Women in AI Education Summit Keynote","Featured in YourStory's 'EdTech Leaders 2025'","Guest Lecturer at Harvard EdTech Program"],specializations:["Curriculum Design","Career Coaching","Assessment","EdTech Strategy","Learning Science"],achievements:["Designed programmes for 3,000+ learners with 85% completion rate","Built placement-readiness frameworks adopted by 20+ institutions","Led academic innovation team at leading ed-tech company","Developed adaptive learning paths for AI education","Achieved 92% learner satisfaction rate across programmes"],stats:[{label:"Learners Impacted",value:"3,000+"},{label:"Completion Rate",value:"85%"},{label:"Institutions Served",value:"20+"},{label:"Satisfaction Rate",value:"92%"}],quote:"Learning happens when challenge meets support at the right moment."}];function $C(){return o.jsxs("main",{className:"leadership-page",children:[o.jsx("style",{children:UC}),o.jsxs("section",{className:"leadership-hero",children:[o.jsx("p",{className:"eyebrow",children:"Leadership Team"}),o.jsx("h1",{children:"One of the strongest assets of the brand."}),o.jsx("p",{children:"Meet the founders behind Elevox. Each brings decades of experience in AI research, production systems, and education. Our credibility comes from people who have built, deployed, and scaled AI in the real world."})]}),o.jsx("section",{className:"founder-profiles",children:WC.map((e,t)=>o.jsxs("article",{className:"founder-profile",children:[o.jsxs("div",{className:"founder-visual",children:[o.jsx("span",{children:String(t+1).padStart(2,"0")}),o.jsx("strong",{children:e.name.split(" ").map(n=>n[0]).join("")})]}),o.jsxs("div",{className:"founder-content",children:[o.jsx("p",{className:"eyebrow",children:e.role}),o.jsx("h2",{children:e.name}),o.jsx("p",{className:"journey",children:e.journey}),o.jsxs("div",{className:"profile-grid",children:[o.jsx(is,{title:"Industry Expertise",text:e.expertise}),o.jsx(is,{title:"Thought Leadership",text:e.thought}),o.jsx(is,{title:"Video Introduction",text:e.intro}),o.jsx(is,{title:"Course Detail Video",text:e.courseVideo})]}),o.jsx("div",{className:"tag-row",children:e.specializations.map(n=>o.jsx("span",{children:n},n))}),o.jsxs("div",{className:"achievements-media-grid",children:[o.jsxs("div",{className:"achievements",children:[o.jsx("h3",{children:"🏆 Key Achievements"}),e.achievements.map(n=>o.jsxs("p",{children:["• ",n]},n))]}),o.jsxs("div",{className:"media",children:[o.jsx("h3",{children:"🎤 Media Appearances"}),e.media.map(n=>o.jsxs("p",{children:["• ",n]},n))]})]}),o.jsx("div",{className:"stats-row",children:e.stats.map(n=>o.jsxs("div",{className:"stat-item",children:[o.jsx("strong",{children:n.value}),o.jsx("span",{children:n.label})]},n.label))}),o.jsxs("blockquote",{className:"founder-quote",children:['"',e.quote,'"']}),o.jsxs("a",{className:"linkedin-link",href:e.linkedin,target:"_blank",rel:"noreferrer",children:[o.jsx("span",{children:"LinkedIn Profile"}),o.jsx("span",{children:"→"})]})]})]},e.name))})]})}function is({title:e,text:t}){return o.jsxs("div",{className:"info-card",children:[o.jsx("h3",{children:e}),o.jsx("p",{children:t})]})}const UC=`
  .leadership-page {
    min-height: 100vh;
    padding-top: 72px;
    background: #020808;
    color: #f0f2f5;
    font-family: Inter, system-ui, -apple-system, sans-serif;
  }

  .leadership-hero {
    max-width: 1160px;
    margin: 0 auto;
    padding: 78px 24px 40px;
  }

  .eyebrow {
    color: #00d4a8;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 16px;
  }

  .leadership-hero h1 {
    max-width: 780px;
    margin: 0 0 20px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(46px, 8vw, 88px);
    line-height: 0.96;
    background: linear-gradient(135deg, #ffffff 0%, #00d4a8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .leadership-hero p:last-child {
    max-width: 680px;
    color: rgba(240, 242, 245, 0.64);
    font-size: 18px;
    line-height: 1.65;
  }

  .founder-profiles {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 24px 88px;
    display: grid;
    gap: 40px;
  }

  .founder-profile {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 32px;
    padding: 32px;
    border-radius: 18px;
    border: 1px solid rgba(143, 239, 213, 0.13);
    background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
    transition: all 0.3s ease;
  }

  .founder-profile:hover {
    border-color: rgba(143, 239, 213, 0.3);
    background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
    transform: translateY(-2px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.3);
  }

  .founder-visual {
    min-height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 16px;
    padding: 24px;
    background:
      radial-gradient(circle at 70% 20%, rgba(0,212,168,0.26), transparent 40%),
      linear-gradient(145deg, #071212, #0d2a29);
    border: 1px solid rgba(143, 239, 213, 0.14);
  }

  .founder-visual span {
    color: rgba(240, 242, 245, 0.46);
    font-weight: 900;
    font-size: 14px;
  }

  .founder-visual strong {
    color: #8fefd5;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 72px;
    text-shadow: 0 0 30px rgba(0, 212, 168, 0.2);
  }

  .founder-content h2 {
    margin: 0 0 12px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(30px, 4vw, 48px);
  }

  .journey {
    color: rgba(240, 242, 245, 0.7);
    line-height: 1.7;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
    margin: 22px 0;
  }

  .info-card {
    border: 1px solid rgba(143, 239, 213, 0.1);
    border-radius: 12px;
    background: rgba(255,255,255,0.03);
    padding: 16px;
    transition: all 0.3s ease;
  }

  .info-card:hover {
    background: rgba(255,255,255,0.06);
    border-color: rgba(143, 239, 213, 0.2);
  }

  .info-card h3 {
    margin: 0 0 8px;
    color: #8fefd5;
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-weight: 600;
  }

  .info-card p {
    color: rgba(240, 242, 245, 0.7);
    line-height: 1.5;
    font-size: 14px;
    margin: 0;
  }

  .tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 20px 0 24px;
  }

  .tag-row span {
    border-radius: 8px;
    border: 1px solid rgba(143, 239, 213, 0.14);
    color: #00d4a8;
    padding: 6px 12px;
    font-size: 13px;
    background: rgba(0, 212, 168, 0.055);
    transition: all 0.3s ease;
  }

  .tag-row span:hover {
    background: rgba(0, 212, 168, 0.12);
    border-color: rgba(143, 239, 213, 0.3);
  }

  .achievements-media-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin: 24px 0;
  }

  .achievements h3,
  .media h3 {
    color: #8fefd5;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.04em;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  .achievements p,
  .media p {
    color: rgba(240, 242, 245, 0.7);
    line-height: 1.6;
    font-size: 14px;
    margin: 0 0 6px 0;
    padding: 0;
  }

  .stats-row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    margin: 24px 0;
    padding: 20px;
    background: rgba(0, 212, 168, 0.04);
    border-radius: 12px;
    border: 1px solid rgba(143, 239, 213, 0.08);
  }

  .stat-item {
    text-align: center;
  }

  .stat-item strong {
    display: block;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 28px;
    color: #00d4a8;
  }

  .stat-item span {
    color: rgba(240, 242, 245, 0.5);
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .founder-quote {
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(18px, 2vw, 24px);
    color: rgba(240, 242, 245, 0.8);
    font-style: italic;
    margin: 20px 0 24px;
    padding: 20px 24px;
    border-left: 3px solid #00d4a8;
    background: rgba(0, 212, 168, 0.04);
    border-radius: 0 8px 8px 0;
  }

  .linkedin-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 8px;
    padding: 14px 24px;
    border-radius: 8px;
    background: linear-gradient(135deg, #00d4a8, #00b894);
    color: #031a14;
    text-decoration: none;
    font-weight: 700;
    font-size: 14px;
    transition: all 0.3s ease;
    border: none;
  }

  .linkedin-link:hover {
    transform: translateX(4px);
    box-shadow: 0 8px 24px rgba(0, 212, 168, 0.3);
  }

  .linkedin-link span:last-child {
    font-size: 18px;
    transition: transform 0.3s ease;
  }

  .linkedin-link:hover span:last-child {
    transform: translateX(4px);
  }

  @media (max-width: 860px) {
    .founder-profile {
      grid-template-columns: 1fr;
      gap: 24px;
      padding: 24px;
    }

    .profile-grid,
    .achievements-media-grid,
    .stats-row {
      grid-template-columns: 1fr;
    }

    .founder-visual {
      min-height: 200px;
    }

    .founder-visual strong {
      font-size: 48px;
    }

    .stats-row {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }

    .stat-item strong {
      font-size: 22px;
    }
  }

  @media (max-width: 480px) {
    .leadership-hero {
      padding: 40px 16px;
    }

    .founder-profiles {
      padding: 0 16px 64px;
      gap: 32px;
    }

    .founder-profile {
      padding: 16px;
    }

    .profile-grid {
      gap: 8px;
    }

    .info-card {
      padding: 12px;
    }

    .stats-row {
      grid-template-columns: 1fr 1fr;
      padding: 16px;
    }
  }
`,HC=()=>o.jsx("div",{style:GC,children:o.jsxs("div",{style:KC,children:[o.jsx("div",{style:YC,children:"404"}),o.jsx("h1",{style:XC,children:"Page Not Found"}),o.jsx("p",{style:QC,children:"Oops! The page you're looking for doesn't exist or has been moved."}),o.jsx("p",{style:qC,children:"Let's get you back on track."}),o.jsxs("div",{style:ZC,children:[o.jsx("a",{href:"/",style:JC,children:"Go Home →"}),o.jsx("a",{href:"/programmes",style:e3,children:"Browse Programs"})]}),o.jsx("div",{style:t3,children:o.jsxs("p",{style:n3,children:["Need help? ",o.jsx("a",{href:"/contact",style:r3,children:"Contact our support team"})]})})]})}),GC={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px",display:"flex",alignItems:"center",justifyContent:"center"},KC={textAlign:"center",padding:"40px 24px",maxWidth:"600px"},YC={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(6rem, 15vw, 10rem)",fontWeight:700,color:"#00d4a8",opacity:.2,lineHeight:"1",marginBottom:"16px"},XC={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 4vw, 3rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px"},QC={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"8px"},qC={fontSize:"15px",color:"rgba(240,242,245,0.4)",marginBottom:"32px"},ZC={display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginBottom:"32px"},JC={display:"inline-block",padding:"12px 32px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},e3={display:"inline-block",padding:"12px 32px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",color:"#f0f2f5",fontWeight:500,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},t3={borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:"24px"},n3={fontSize:"14px",color:"rgba(240,242,245,0.4)"},r3={color:"#00d4a8",textDecoration:"none"},If=[{slug:"foundations",title:"Elevox Foundations",category:"Foundational",duration:"8 weeks",fees:"Rs. 24,000",format:"Hybrid live cohort",certification:"Elevox AI Fluency Certificate",eligibility:"Students, fresh graduates, non-technical professionals",summary:"Build practical AI literacy and confidence before choosing a specialization.",outcomes:["AI-first thinking","Prompt and workflow fluency","Portfolio-ready mini projects","Career direction clarity"],careers:["AI-enabled analyst","Junior automation associate","Digital transformation intern"],curriculum:["AI landscape and use cases","Data literacy","Prompt systems","No-code AI workflows","Ethics and responsible use"],tools:["ChatGPT","Claude","Perplexity","Google AI Studio","Airtable"],projects:["AI research assistant","Automated content workflow","Data insight dashboard"]},{slug:"marketing",title:"AI for Marketing",category:"Domain Track",duration:"10 weeks",fees:"Rs. 36,000",format:"Weekend cohort",certification:"AI Marketing Operator Certificate",eligibility:"Marketing students, founders, creators, growth teams",summary:"Use AI to research markets, create campaigns, personalize journeys, and measure growth.",outcomes:["Campaign automation","AI content systems","Customer segmentation","Growth experimentation"],careers:["AI marketing specialist","Growth analyst","Content automation strategist"],curriculum:["Audience intelligence","Content engines","Ad creative testing","CRM automation","Analytics storytelling"],tools:["ChatGPT","Canva AI","HubSpot","Meta Ads","Looker Studio"],projects:["30-day campaign engine","Persona research board","Automated newsletter workflow"]},{slug:"hr",title:"AI for HR",category:"Domain Track",duration:"8 weeks",fees:"Rs. 32,000",format:"Live online plus labs",certification:"AI HR Transformation Certificate",eligibility:"HR students, recruiters, people ops professionals",summary:"Apply AI to hiring, workforce planning, people analytics, and employee experience.",outcomes:["Smarter screening","People analytics basics","Interview workflow design","HR automation"],careers:["AI recruiter","People analytics associate","HR automation specialist"],curriculum:["Recruitment workflows","Bias and ethics","HR analytics","Employee support bots","Talent intelligence"],tools:["ChatGPT","LinkedIn","Notion AI","Google Sheets","Zapier"],projects:["Screening rubric system","AI onboarding assistant","Attrition insight report"]},{slug:"business-analysts",title:"AI for Business Analysts",category:"Domain Track",duration:"12 weeks",fees:"Rs. 42,000",format:"Hybrid project cohort",certification:"Applied AI Business Analyst Certificate",eligibility:"MBA students, analysts, consultants, operations teams",summary:"Turn business problems into AI-ready workflows, dashboards, and decision systems.",outcomes:["Problem framing","Dashboard storytelling","Process automation","Stakeholder-ready documentation"],careers:["AI business analyst","Product analyst","Transformation associate"],curriculum:["AI opportunity mapping","Data interpretation","Workflow design","Requirement writing","Decision dashboards"],tools:["ChatGPT","Excel","Power BI","Miro","Zapier"],projects:["AI readiness audit","Operations dashboard","Automation business case"]},{slug:"developers",title:"AI for Developers",category:"Technical Track",duration:"12 weeks",fees:"Rs. 48,000",format:"Code labs and capstone",certification:"AI Native Developer Certificate",eligibility:"Developers, CS students, technical founders",summary:"Build AI-native products with APIs, agents, retrieval, evaluation, and deployment patterns.",outcomes:["LLM app development","RAG architecture","Agent workflows","Evaluation mindset"],careers:["AI app developer","LLM engineer intern","Automation engineer"],curriculum:["LLM APIs","Embeddings","RAG","Agents","Evaluation","Deployment"],tools:["OpenAI API","LangChain","React","Node.js","Vector databases"],projects:["Knowledge-base assistant","AI workflow agent","Evaluation dashboard"]},{slug:"design",title:"AI for Design",category:"Creative Track",duration:"8 weeks",fees:"Rs. 34,000",format:"Studio cohort",certification:"AI Design Workflow Certificate",eligibility:"Designers, creators, UI/UX students, product teams",summary:"Use AI to accelerate research, ideation, prototyping, visual systems, and product storytelling.",outcomes:["AI-assisted research","Fast prototyping","Design system acceleration","Creative direction"],careers:["AI product designer","UX researcher","Creative technologist"],curriculum:["AI research synthesis","Prompted ideation","UI generation","Design critique","Prototype storytelling"],tools:["Figma","FigJam AI","Midjourney","Runway","ChatGPT"],projects:["AI-assisted app concept","Product story deck","Prototype sprint"]},{slug:"operations",title:"AI for Operations",category:"Domain Track",duration:"10 weeks",fees:"Rs. 38,000",format:"Hybrid labs",certification:"AI Operations Transformation Certificate",eligibility:"Operations, logistics, manufacturing, and business teams",summary:"Apply AI to repetitive workflows, process intelligence, forecasting, and operational decisions.",outcomes:["Process automation","Forecasting basics","SOP intelligence","Operational dashboards"],careers:["AI operations associate","Automation analyst","Process improvement specialist"],curriculum:["Workflow mapping","AI SOP systems","Forecasting","Quality checks","Automation metrics"],tools:["ChatGPT","Excel","Power BI","Zapier","Notion"],projects:["AI SOP assistant","Inventory insight tracker","Process automation plan"]},{slug:"upskilling",title:"Professional Upskilling Programme",category:"Professional",duration:"12-24 weeks",fees:"Custom by pathway",format:"Role-based intensive",certification:"Elevox Professional AI Transformation Certificate",eligibility:"Working professionals and teams",summary:"A guided transition from current role to AI-augmented professional capability.",outcomes:["Role transformation plan","Promotion-ready proof","Capstone portfolio","Mentor-reviewed roadmap"],careers:["AI product operator","AI consultant","AI transformation lead"],curriculum:["Role diagnosis","AI workflow design","Automation","Capstone execution","Career positioning"],tools:["Role-specific AI stack","Automation tools","Analytics tools","Presentation systems"],projects:["Role transformation map","Live workflow automation","Executive-ready capstone"]}];function i3({programme:e}){return o.jsxs("main",{className:"programme-page",children:[o.jsx("style",{children:e0}),o.jsxs("section",{className:"programme-detail-hero",children:[o.jsx(O,{to:"/programmes",className:"back-link",children:"Back to all programmes"}),o.jsx("p",{className:"eyebrow",children:e.category}),o.jsx("h1",{children:e.title}),o.jsx("p",{children:e.summary}),o.jsxs("div",{className:"meta-grid",children:[o.jsxs("span",{children:[o.jsx("strong",{children:"Duration"}),e.duration]}),o.jsxs("span",{children:[o.jsx("strong",{children:"Fees"}),e.fees]}),o.jsxs("span",{children:[o.jsx("strong",{children:"Format"}),e.format]}),o.jsxs("span",{children:[o.jsx("strong",{children:"Certification"}),e.certification]})]})]}),o.jsxs("section",{className:"detail-layout",children:[o.jsxs("article",{className:"detail-main",children:[o.jsx(ss,{title:"Curriculum",items:e.curriculum}),o.jsx(ss,{title:"Tools Covered",items:e.tools}),o.jsx(ss,{title:"Projects",items:e.projects}),o.jsx(ss,{title:"Career Opportunities",items:e.careers})]}),o.jsxs("aside",{className:"detail-side",children:[o.jsx("h2",{children:"Best fit"}),o.jsx("p",{children:e.eligibility}),o.jsx("h2",{children:"Outcomes"}),o.jsx("ul",{children:e.outcomes.map(t=>o.jsx("li",{children:t},t))}),o.jsx("h2",{children:"Faculty"}),o.jsx("p",{children:"Founder-led sessions, mentor labs, and industry reviews."}),o.jsx(O,{to:"/admissions",className:"apply-link",children:"Apply Now"})]})]}),o.jsxs("section",{className:"faq-section",children:[o.jsx("h2",{children:"FAQ"}),o.jsxs("details",{open:!0,children:[o.jsx("summary",{children:"Do I need prior AI experience?"}),o.jsx("p",{children:"No. We map the route based on your current background and the outcome you want."})]}),o.jsxs("details",{children:[o.jsx("summary",{children:"Will I build a portfolio?"}),o.jsx("p",{children:"Yes. Every programme ends with visible work that can be shown to employers or teams."})]})]})]})}function ss({title:e,items:t}){return o.jsxs("section",{className:"detail-block",children:[o.jsx("h2",{children:e}),o.jsx("div",{className:"pill-grid",children:t.map(n=>o.jsx("span",{children:n},n))})]})}function Nf(){const{track:e}=a1(),t=If.find(n=>n.slug===e);return t?o.jsx(i3,{programme:t}):o.jsxs("main",{className:"programme-page",children:[o.jsx("style",{children:e0}),o.jsxs("section",{className:"programme-hero",children:[o.jsx("p",{className:"eyebrow",children:"Learning hub for Nagpur and beyond"}),o.jsx("h1",{children:"Programmes designed around outcomes, not course catalogs."}),o.jsx("p",{children:"Every Elevox pathway includes duration, fees, format, certification, eligibility, career routes, projects, and proof you can show."})]}),o.jsx("section",{className:"programme-grid",children:If.map(n=>o.jsxs(O,{to:`/programmes/${n.slug}`,className:"programme-card",children:[o.jsx("span",{children:n.category}),o.jsx("h2",{children:n.title}),o.jsx("p",{children:n.summary}),o.jsxs("div",{children:[o.jsx("small",{children:n.duration}),o.jsx("small",{children:n.fees}),o.jsx("small",{children:n.format})]}),o.jsx("strong",{children:"View details ->"})]},n.slug))})]})}const e0=`
  .programme-page {
    min-height: 100vh;
    padding-top: 72px;
    background: #020808;
    color: #f0f2f5;
    font-family: Inter, system-ui, sans-serif;
  }

  .programme-hero,
  .programme-detail-hero {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    padding: 76px 24px 54px;
  }

  .programme-hero::after,
  .programme-detail-hero::after {
    content: "";
    position: absolute;
    right: 4%;
    top: 24%;
    width: 320px;
    height: 320px;
    border-radius: 999px;
    border: 1px solid rgba(143, 239, 213, 0.14);
    box-shadow: inset 0 0 70px rgba(0, 212, 168, 0.08);
    pointer-events: none;
  }

  .eyebrow {
    color: #00d4a8;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 18px;
  }

  .programme-hero h1,
  .programme-detail-hero h1 {
    max-width: 850px;
    margin: 0 0 22px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(42px, 7vw, 78px);
    line-height: 0.98;
    letter-spacing: 0;
  }

  .programme-hero p,
  .programme-detail-hero p {
    max-width: 680px;
    color: rgba(240, 242, 245, 0.64);
    font-size: 18px;
    line-height: 1.65;
  }

  .programme-grid {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px 92px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 18px;
  }

  .programme-card {
    min-height: 310px;
    display: flex;
    flex-direction: column;
    padding: 26px;
    border-radius: 14px;
    border: 1px solid rgba(143, 239, 213, 0.12);
    background: linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02));
    color: inherit;
    text-decoration: none;
    transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }

  .programme-card:hover {
    transform: translateY(-6px);
    border-color: rgba(0, 212, 168, 0.42);
    background: rgba(0, 212, 168, 0.055);
  }

  .programme-card span {
    color: #00d4a8;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .programme-card h2 {
    margin: 18px 0 12px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: 24px;
  }

  .programme-card p {
    color: rgba(240, 242, 245, 0.58);
    line-height: 1.58;
    flex: 1;
  }

  .programme-card div {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 20px 0;
  }

  .programme-card small,
  .pill-grid span,
  .meta-grid span {
    border: 1px solid rgba(143, 239, 213, 0.12);
    border-radius: 8px;
    background: rgba(255,255,255,0.035);
    color: rgba(240, 242, 245, 0.68);
    padding: 8px 10px;
  }

  .programme-card strong,
  .back-link {
    color: #00d4a8;
    text-decoration: none;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 28px;
    font-weight: 800;
  }

  .meta-grid {
    margin-top: 28px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
  }

  .meta-grid span {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .meta-grid strong {
    color: #8fefd5;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .detail-layout {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px 70px;
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 28px;
  }

  .detail-main {
    display: grid;
    gap: 18px;
  }

  .detail-block,
  .detail-side,
  .faq-section {
    border: 1px solid rgba(143, 239, 213, 0.12);
    border-radius: 14px;
    background: rgba(255,255,255,0.03);
    padding: 28px;
  }

  .detail-block h2,
  .detail-side h2,
  .faq-section h2 {
    margin: 0 0 16px;
    font-family: "Space Grotesk", Inter, sans-serif;
  }

  .pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .detail-side {
    position: sticky;
    top: 96px;
    align-self: start;
  }

  .detail-side p,
  .detail-side li,
  .faq-section p {
    color: rgba(240, 242, 245, 0.62);
    line-height: 1.6;
  }

  .detail-side ul {
    padding-left: 18px;
    margin-bottom: 24px;
  }

  .apply-link {
    display: block;
    margin-top: 22px;
    padding: 14px 18px;
    border-radius: 10px;
    background: #00d4a8;
    color: #031a14;
    text-align: center;
    text-decoration: none;
    font-weight: 900;
  }

  .faq-section {
    max-width: 1180px;
    margin: 0 auto 90px;
  }

  .faq-section details {
    border-top: 1px solid rgba(143, 239, 213, 0.1);
    padding: 16px 0;
  }

  .faq-section summary {
    cursor: pointer;
    font-weight: 800;
  }

  @media (max-width: 860px) {
    .detail-layout { grid-template-columns: 1fr; }
    .detail-side { position: static; }
  }
`,Rf=[ac,Jx,b5,I5];function Df({eyebrow:e,title:t,summary:n,focus:r=[]}){return o.jsxs("main",{className:"elx-route-page",children:[o.jsx("style",{children:s3}),o.jsxs("section",{className:"elx-route-hero",children:[o.jsx("div",{className:"elx-route-grid","aria-hidden":"true"}),o.jsx("div",{className:"elx-route-orbit","aria-hidden":"true"}),o.jsxs("div",{className:"elx-route-content",children:[o.jsx("p",{className:"elx-route-eyebrow",children:e}),o.jsx("h1",{children:t}),o.jsx("p",{className:"elx-route-summary",children:n}),o.jsxs("div",{className:"elx-route-proof","aria-label":"Elevox positioning",children:[o.jsx("span",{children:"Industry experience"}),o.jsx("span",{children:"AI urgency"}),o.jsx("span",{children:"Employability bridge"})]}),o.jsxs("div",{className:"elx-route-actions",children:[o.jsxs("a",{href:"/admissions",className:"elx-route-primary",children:["Map my pathway ",o.jsx(v5,{size:16})]}),o.jsx("a",{href:"/leadership",className:"elx-route-secondary",children:"Meet the founders"})]})]})]}),o.jsx("section",{className:"elx-route-focus","aria-label":"Page focus areas",children:r.map((i,s)=>{const a=Rf[s%Rf.length];return o.jsxs("article",{className:"elx-focus-card",children:[o.jsx(a,{size:22}),o.jsx("h2",{children:i}),o.jsx("p",{children:"Built around transformation, proof, and practical AI fluency."})]},i)})})]})}const s3=`
  .elx-route-page {
    min-height: 100vh;
    background: #020808;
    color: #eaf6f2;
    font-family: Inter, system-ui, sans-serif;
    overflow: hidden;
  }

  .elx-route-hero {
    position: relative;
    min-height: 76vh;
    display: flex;
    align-items: center;
    padding: 140px 6% 80px;
    background:
      radial-gradient(circle at 78% 28%, rgba(24, 200, 163, 0.18), transparent 32%),
      linear-gradient(135deg, #020808 0%, #071212 52%, #020808 100%);
    isolation: isolate;
  }

  .elx-route-grid {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(143, 239, 213, 0.055) 1px, transparent 1px),
      linear-gradient(90deg, rgba(143, 239, 213, 0.055) 1px, transparent 1px);
    background-size: 54px 54px;
    mask-image: linear-gradient(to bottom, transparent, black 18%, black 76%, transparent);
    opacity: 0.55;
  }

  .elx-route-orbit {
    position: absolute;
    right: 8%;
    top: 22%;
    width: min(42vw, 520px);
    aspect-ratio: 1;
    border: 1px solid rgba(143, 239, 213, 0.16);
    border-radius: 999px;
    box-shadow: inset 0 0 70px rgba(24, 200, 163, 0.08), 0 0 90px rgba(24, 200, 163, 0.08);
    animation: elxFloat 8s ease-in-out infinite;
  }

  .elx-route-orbit::before,
  .elx-route-orbit::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    border: 1px solid rgba(143, 239, 213, 0.11);
  }

  .elx-route-orbit::before { inset: 13%; }
  .elx-route-orbit::after { inset: 29%; background: rgba(24, 200, 163, 0.035); }

  .elx-route-content {
    position: relative;
    z-index: 1;
    max-width: 780px;
  }

  .elx-route-eyebrow {
    color: #18c8a3;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin-bottom: 18px;
  }

  .elx-route-content h1 {
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: clamp(42px, 7vw, 82px);
    line-height: 0.98;
    letter-spacing: 0;
    margin: 0 0 24px;
    max-width: 860px;
  }

  .elx-route-summary {
    color: #9fbdb6;
    font-size: clamp(16px, 2vw, 20px);
    line-height: 1.65;
    max-width: 680px;
    margin: 0 0 34px;
  }

  .elx-route-proof {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 34px;
  }

  .elx-route-proof span {
    border: 1px solid rgba(143, 239, 213, 0.18);
    color: #8fefd5;
    background: rgba(143, 239, 213, 0.045);
    border-radius: 8px;
    padding: 10px 13px;
    font-size: 13px;
  }

  .elx-route-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .elx-route-primary,
  .elx-route-secondary {
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    gap: 9px;
    border-radius: 8px;
    padding: 12px 20px;
    text-decoration: none;
    font-weight: 700;
  }

  .elx-route-primary {
    background: #18c8a3;
    color: #031a14;
  }

  .elx-route-secondary {
    color: #eaf6f2;
    border: 1px solid rgba(143, 239, 213, 0.24);
  }

  .elx-route-focus {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    border-top: 1px solid rgba(143, 239, 213, 0.1);
    background: rgba(143, 239, 213, 0.08);
  }

  .elx-focus-card {
    min-height: 210px;
    background: #071212;
    padding: 34px 28px;
  }

  .elx-focus-card svg {
    color: #18c8a3;
    margin-bottom: 24px;
  }

  .elx-focus-card h2 {
    margin: 0 0 10px;
    font-size: 19px;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
  }

  .elx-focus-card p {
    color: #9fbdb6;
    line-height: 1.55;
    margin: 0;
  }

  @keyframes elxFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(14px); }
  }

  @media (max-width: 900px) {
    .elx-route-hero { padding-top: 118px; }
    .elx-route-orbit { opacity: 0.38; right: -24%; width: 78vw; }
    .elx-route-focus { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 560px) {
    .elx-route-hero { min-height: auto; padding: 104px 20px 64px; }
    .elx-route-proof { flex-direction: column; align-items: flex-start; }
    .elx-route-actions { flex-direction: column; }
    .elx-route-primary, .elx-route-secondary { justify-content: center; width: 100%; }
    .elx-route-focus { grid-template-columns: 1fr; }
    .elx-focus-card { min-height: auto; padding: 28px 22px; }
  }
`,Mf=()=>{const e=[{icon:"📚",title:"All Programmes",description:"Browse programmes by domain and level. Find the perfect fit for your career goals.",link:"/programmes",linkText:"View All →"},{icon:"📅",title:"Batch Calendar",description:"Check upcoming cohort dates and plan your learning journey.",link:"/admissions",linkText:"See Cohorts →"},{icon:"🎯",title:"Career Accelerator",description:"Resume building, LinkedIn optimization, and interview preparation.",link:"/career",linkText:"Get Started →"},{icon:"💼",title:"Placement Outcomes",description:"See where our alumni are working and how Elevox changed their careers.",link:"/career/outcomes",linkText:"View Outcomes →"},{icon:"🏆",title:"Workshops & Events",description:"Masterclasses, bootcamps, and networking events to accelerate your learning.",link:"/workshops",linkText:"Explore Events →"},{icon:"🎓",title:"Student Success Stories",description:"Read inspiring stories from students who transformed their careers with Elevox.",link:"/insights/stories",linkText:"Read Stories →"}],t=[{name:"Rahul Sharma",role:"AI Engineer at Google",quote:"Elevox gave me the skills and confidence to transition from a non-tech background to AI engineering.",image:"👨‍💻"},{name:"Priya Patel",role:"Data Scientist at Microsoft",quote:"The hands-on projects and industry mentorship at Elevox were game-changing for my career.",image:"👩‍💻"},{name:"Amit Kumar",role:"ML Engineer at Amazon",quote:"I went from knowing nothing about AI to building production-ready models in just 3 months.",image:"🧑‍💻"}];return o.jsxs("div",{style:o3,children:[o.jsx("section",{style:a3,children:o.jsxs("div",{style:l3,children:[o.jsxs("h1",{style:c3,children:["For ",o.jsx("span",{style:u3,children:"Students"})]}),o.jsx("p",{style:d3,children:"Your journey to AI expertise starts here. Learn, build, and get placed in top companies."}),o.jsxs("div",{style:p3,children:[o.jsx("a",{href:"/programmes",style:f3,children:"Explore Programmes →"}),o.jsx("a",{href:"/admissions",style:h3,children:"Apply Now"})]})]})}),o.jsx("section",{style:m3,children:o.jsxs("div",{style:g3,children:[o.jsxs("div",{style:os,children:[o.jsx("div",{style:as,children:"500+"}),o.jsx("div",{style:ls,children:"Students Trained"})]}),o.jsxs("div",{style:os,children:[o.jsx("div",{style:as,children:"95%"}),o.jsx("div",{style:ls,children:"Placement Rate"})]}),o.jsxs("div",{style:os,children:[o.jsx("div",{style:as,children:"₹12L"}),o.jsx("div",{style:ls,children:"Average Package"})]}),o.jsxs("div",{style:os,children:[o.jsx("div",{style:as,children:"100+"}),o.jsx("div",{style:ls,children:"Hiring Partners"})]})]})}),o.jsxs("section",{style:x3,children:[o.jsx("h2",{style:zf,children:"Everything You Need to Succeed"}),o.jsx("p",{style:Lf,children:"Comprehensive support for your AI learning journey"}),o.jsx("div",{style:y3,children:e.map((n,r)=>o.jsxs("div",{style:v3,children:[o.jsx("div",{style:w3,children:n.icon}),o.jsx("h3",{style:S3,children:n.title}),o.jsx("p",{style:b3,children:n.description}),o.jsx("a",{href:n.link,style:k3,children:n.linkText})]},r))})]}),o.jsxs("section",{style:j3,children:[o.jsx("h2",{style:zf,children:"Student Success Stories"}),o.jsx("p",{style:Lf,children:"Real stories from students who transformed their careers"}),o.jsx("div",{style:_3,children:t.map((n,r)=>o.jsxs("div",{style:C3,children:[o.jsx("div",{style:A3,children:n.image}),o.jsxs("p",{style:T3,children:['"',n.quote,'"']}),o.jsx("div",{style:P3,children:n.name}),o.jsx("div",{style:E3,children:n.role})]},r))})]}),o.jsx("section",{style:I3,children:o.jsxs("div",{style:N3,children:[o.jsx("h2",{style:R3,children:"Ready to Start Your AI Journey?"}),o.jsx("p",{style:D3,children:"Join a cohort built around employability — not just learning. Your AI career starts here."}),o.jsxs("div",{style:M3,children:[o.jsx("a",{href:"/admissions",style:z3,children:"Apply Now →"}),o.jsx("a",{href:"/tour",style:L3,children:"Take a Tour"})]})]})}),o.jsx("section",{style:B3,children:o.jsxs("div",{style:F3,children:[o.jsx("h2",{style:V3,children:"Student Resources"}),o.jsxs("div",{style:O3,children:[o.jsxs("div",{style:cs,children:[o.jsx("span",{style:us,children:"📖"}),o.jsx("h4",{style:ds,children:"Student Handbook"}),o.jsx("p",{style:ps,children:"Everything you need to know about your learning journey"}),o.jsx("a",{href:"#",style:fs,children:"Download →"})]}),o.jsxs("div",{style:cs,children:[o.jsx("span",{style:us,children:"💻"}),o.jsx("h4",{style:ds,children:"Learning Portal"}),o.jsx("p",{style:ps,children:"Access your courses, assignments, and learning materials"}),o.jsx("a",{href:"#",style:fs,children:"Access Portal →"})]}),o.jsxs("div",{style:cs,children:[o.jsx("span",{style:us,children:"🤝"}),o.jsx("h4",{style:ds,children:"Community Forum"}),o.jsx("p",{style:ps,children:"Connect with peers, ask questions, and collaborate"}),o.jsx("a",{href:"#",style:fs,children:"Join Community →"})]}),o.jsxs("div",{style:cs,children:[o.jsx("span",{style:us,children:"🎓"}),o.jsx("h4",{style:ds,children:"Alumni Network"}),o.jsx("p",{style:ps,children:"Connect with successful alumni for mentorship and opportunities"}),o.jsx("a",{href:"#",style:fs,children:"Connect →"})]})]})]})})]})},o3={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},a3={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"},l3={maxWidth:"800px",margin:"0 auto"},c3={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},u3={color:"#00d4a8"},d3={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto 32px",lineHeight:"1.6"},p3={display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},f3={display:"inline-block",padding:"12px 32px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},h3={display:"inline-block",padding:"12px 32px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",color:"#f0f2f5",fontWeight:500,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},m3={padding:"40px 24px 60px",maxWidth:"1024px",margin:"0 auto"},g3={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},os={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",padding:"24px",textAlign:"center",border:"1px solid rgba(255,255,255,0.06)"},as={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.8rem)",fontWeight:700,color:"#00d4a8",marginBottom:"4px"},ls={fontSize:"14px",color:"rgba(240,242,245,0.5)"},x3={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},zf={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"8px",textAlign:"center"},Lf={fontSize:"16px",color:"rgba(240,242,245,0.5)",textAlign:"center",marginBottom:"32px"},y3={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px"},v3={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)",transition:"all 0.2s"},w3={fontSize:"36px",marginBottom:"12px"},S3={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},b3={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"12px"},k3={color:"#00d4a8",textDecoration:"none",fontWeight:500,fontSize:"14px"},j3={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},_3={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px"},C3={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},A3={fontSize:"48px",marginBottom:"12px"},T3={fontSize:"16px",color:"rgba(240,242,245,0.7)",lineHeight:"1.6",marginBottom:"16px",fontStyle:"italic"},P3={fontSize:"16px",fontWeight:600,color:"#f0f2f5",marginBottom:"4px"},E3={fontSize:"13px",color:"rgba(240,242,245,0.4)"},I3={padding:"60px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"},N3={maxWidth:"700px",margin:"0 auto",textAlign:"center"},R3={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px"},D3={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"24px"},M3={display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},z3={display:"inline-block",padding:"14px 36px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},L3={display:"inline-block",padding:"14px 36px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",color:"#f0f2f5",fontWeight:500,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},B3={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},F3={backgroundColor:"rgba(255,255,255,0.02)",borderRadius:"16px",padding:"40px",border:"1px solid rgba(255,255,255,0.06)"},V3={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.5rem, 2.5vw, 2rem)",color:"#f0f2f5",marginBottom:"24px",textAlign:"center"},O3={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},cs={textAlign:"center",padding:"20px",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.06)"},us={fontSize:"28px",display:"block",marginBottom:"8px"},ds={fontSize:"15px",fontWeight:600,color:"#f0f2f5",marginBottom:"4px"},ps={fontSize:"12px",color:"rgba(240,242,245,0.4)",marginBottom:"8px"},fs={color:"#00d4a8",textDecoration:"none",fontSize:"13px",fontWeight:500},W3=()=>{const e=[{name:"AI Lab",icon:"💻",description:"State-of-the-art lab with high-performance computing workstations for AI training.",features:["50+ Workstations","GPU Clusters","Collaborative Learning Space"]},{name:"Innovation Hub",icon:"🚀",description:"Dedicated space for project development, prototyping, and innovation challenges.",features:["Project Display Area","Brainstorming Rooms","3D Printers"]},{name:"Library & Resource Center",icon:"📚",description:"Extensive collection of AI books, research papers, and digital resources.",features:["5000+ Books","Digital Journals","Study Pods"]},{name:"Collaboration Spaces",icon:"🤝",description:"Modern collaborative spaces designed for group work and networking.",features:["Breakout Rooms","Whiteboard Walls","Relaxation Zone"]},{name:"Lecture Halls",icon:"🎓",description:"Tech-enabled classrooms with interactive learning technology.",features:["Smart Boards","Recording Systems","Accessible Design"]},{name:"Makerspace",icon:"⚙️",description:"Hands-on space for building prototypes and exploring hardware AI applications.",features:["Hardware Lab","IoT Devices","Robotics Kits"]}];return o.jsxs("div",{style:$3,children:[o.jsx("section",{style:U3,children:o.jsxs("div",{style:H3,children:[o.jsxs("h1",{style:G3,children:["Welcome to ",o.jsx("span",{style:K3,children:"Elevox Academy"})]}),o.jsx("p",{style:Y3,children:"Explore our state-of-the-art facilities designed for immersive AI learning and innovation."}),o.jsx("a",{href:"#facilities",style:X3,children:"Take a Virtual Tour →"})]})}),o.jsxs("section",{id:"facilities",style:Q3,children:[o.jsx("h2",{style:Bf,children:"Our Facilities"}),o.jsx("p",{style:q3,children:"Every space designed with learning and innovation in mind"}),o.jsx("div",{style:Z3,children:e.map((t,n)=>o.jsxs("div",{style:J3,children:[o.jsx("div",{style:eA,children:t.icon}),o.jsx("h3",{style:tA,children:t.name}),o.jsx("p",{style:nA,children:t.description}),o.jsx("div",{style:rA,children:t.features.map((r,i)=>o.jsx("span",{style:iA,children:r},i))})]},n))})]}),o.jsxs("section",{style:sA,children:[o.jsx("h2",{style:Bf,children:"Campus Gallery"}),o.jsxs("div",{style:oA,children:[o.jsx("div",{style:Nn}),o.jsx("div",{style:Nn}),o.jsx("div",{style:Nn}),o.jsx("div",{style:Nn}),o.jsx("div",{style:Nn}),o.jsx("div",{style:Nn})]}),o.jsx("p",{style:aA,children:"* Interactive campus tour coming soon. Schedule a visit to experience it in person."})]}),o.jsx("section",{style:lA,children:o.jsxs("div",{style:cA,children:[o.jsx("h2",{style:uA,children:"Visit Our Campus"}),o.jsx("p",{style:dA,children:"Experience Elevox Academy in person. Schedule a campus tour today."}),o.jsxs("div",{style:pA,children:[o.jsxs("div",{style:La,children:[o.jsx("span",{style:Ba,children:"📍 Address:"}),o.jsx("span",{style:Fa,children:"Nagpur, Maharashtra, India"})]}),o.jsxs("div",{style:La,children:[o.jsx("span",{style:Ba,children:"📞 Phone:"}),o.jsx("span",{style:Fa,children:"+91 98765 43210"})]}),o.jsxs("div",{style:La,children:[o.jsx("span",{style:Ba,children:"📧 Email:"}),o.jsx("span",{style:Fa,children:"tour@elevox.ai"})]})]}),o.jsx("a",{href:"#",style:fA,children:"Schedule a Visit →"})]})})]})},$3={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},U3={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"},H3={maxWidth:"800px",margin:"0 auto"},G3={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},K3={color:"#00d4a8"},Y3={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto 32px",lineHeight:"1.6"},X3={display:"inline-block",padding:"12px 32px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},Q3={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},Bf={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"8px",textAlign:"center"},q3={fontSize:"16px",color:"rgba(240,242,245,0.5)",textAlign:"center",marginBottom:"32px"},Z3={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px"},J3={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)",transition:"all 0.2s"},eA={fontSize:"40px",marginBottom:"12px"},tA={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},nA={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"12px"},rA={display:"flex",gap:"8px",flexWrap:"wrap"},iA={fontSize:"11px",padding:"4px 12px",borderRadius:"6px",backgroundColor:"rgba(255,255,255,0.04)",color:"rgba(240,242,245,0.4)"},sA={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},oA={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"16px",marginBottom:"16px"},Nn={aspectRatio:"1",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.06)",backgroundImage:"linear-gradient(135deg, rgba(0,212,168,0.05) 0%, transparent 100%)",minHeight:"160px"},aA={fontSize:"13px",color:"rgba(240,242,245,0.3)",textAlign:"center"},lA={padding:"60px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"},cA={maxWidth:"700px",margin:"0 auto",textAlign:"center"},uA={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px"},dA={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"24px"},pA={textAlign:"left",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",padding:"20px",marginBottom:"24px",border:"1px solid rgba(255,255,255,0.06)"},La={padding:"8px 0",borderBottom:"1px solid rgba(255,255,255,0.04)"},Ba={fontSize:"14px",fontWeight:600,color:"rgba(240,242,245,0.5)",marginRight:"8px"},Fa={fontSize:"14px",color:"#f0f2f5"},fA={display:"inline-block",padding:"14px 36px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},Ff=()=>{const e=[{name:"Healthcare",icon:"🏥",impact:"AI in healthcare is revolutionizing diagnosis, treatment planning, and patient care.",applications:["Medical Imaging","Drug Discovery","Patient Monitoring"]},{name:"Manufacturing",icon:"🏭",impact:"Manufacturing AI improves quality control, predictive maintenance, and supply chain.",applications:["Quality Inspection","Predictive Maintenance","Supply Chain Optimization"]},{name:"Banking & Finance",icon:"🏦",impact:"Financial AI enhances fraud detection, risk assessment, and customer service.",applications:["Fraud Detection","Risk Analysis","Algorithmic Trading"]},{name:"Marketing & Sales",icon:"📊",impact:"AI-driven marketing enables personalization, automation, and predictive analytics.",applications:["Customer Segmentation","Content Generation","Sales Forecasting"]}];return o.jsxs("div",{style:hA,children:[o.jsxs("section",{style:mA,children:[o.jsx("h1",{style:gA,children:"Why AI Matters"}),o.jsx("p",{style:xA,children:"Every industry is being reshaped by AI. Understand where AI creates leverage in yours."})]}),o.jsx("section",{style:yA,children:e.map((t,n)=>o.jsxs("div",{style:vA,children:[o.jsx("div",{style:wA,children:t.icon}),o.jsx("h3",{style:SA,children:t.name}),o.jsx("p",{style:bA,children:t.impact}),o.jsx("div",{style:kA,children:t.applications.map((r,i)=>o.jsx("span",{style:jA,children:r},i))})]},n))})]})},hA={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},mA={padding:"60px 24px 40px",maxWidth:"900px",margin:"0 auto",textAlign:"center"},gA={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px"},xA={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)"},yA={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"32px",maxWidth:"1024px",margin:"0 auto",padding:"0 24px 80px"},vA={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"32px",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},wA={fontSize:"48px",marginBottom:"12px"},SA={fontSize:"20px",fontWeight:600,color:"#f0f2f5",marginBottom:"12px"},bA={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"16px"},kA={display:"flex",gap:"8px",flexWrap:"wrap",justifyContent:"center"},jA={fontSize:"12px",padding:"4px 12px",borderRadius:"6px",backgroundColor:"rgba(255,255,255,0.05)",color:"rgba(240,242,245,0.5)"},Vf=()=>{const e=[{title:"AI Fundamentals Bootcamp",type:"Beginner",date:"July 10-12, 2026",duration:"3 Days",price:"₹4,999",description:"Master the basics of AI, machine learning, and data science in this intensive bootcamp.",topics:["Python Basics","Data Science Intro","ML Algorithms","Project: Build Your First AI Model"]},{title:"Data Science Masterclass",type:"Intermediate",date:"July 20-22, 2026",duration:"3 Days",price:"₹7,999",description:"Dive deep into data science with advanced analytics, visualization, and modeling.",topics:["Data Analysis","Statistical Modeling","Data Visualization","Real-world Projects"]},{title:"Deep Learning Intensive",type:"Advanced",date:"August 5-7, 2026",duration:"3 Days",price:"₹9,999",description:"Explore neural networks, deep learning architectures, and AI model deployment.",topics:["Neural Networks","CNN","RNN","Transfer Learning","Model Deployment"]},{title:"AI in Business Strategy",type:"Executive",date:"August 15-16, 2026",duration:"2 Days",price:"₹12,999",description:"Learn how to leverage AI for business transformation and competitive advantage.",topics:["AI Strategy","ROI Analysis","Implementation","Change Management"]},{title:"Generative AI Workshop",type:"Intermediate",date:"September 1-2, 2026",duration:"2 Days",price:"₹6,999",description:"Create content, images, and applications using cutting-edge generative AI tools.",topics:["ChatGPT","DALL-E","Stable Diffusion","Prompt Engineering","AI Applications"]},{title:"MLOps & Deployment",type:"Advanced",date:"September 10-12, 2026",duration:"3 Days",price:"₹8,999",description:"Learn to deploy, monitor, and maintain machine learning models in production.",topics:["Docker","Kubernetes","CI/CD","Model Monitoring","Cloud Deployment"]}],t=["All","Beginner","Intermediate","Advanced","Executive"],[n,r]=_n.useState("All"),i=n==="All"?e:e.filter(s=>s.type===n);return o.jsxs("div",{style:_A,children:[o.jsx("section",{style:CA,children:o.jsxs("div",{style:AA,children:[o.jsxs("h1",{style:TA,children:["Hands-on ",o.jsx("span",{style:PA,children:"AI Workshops"})]}),o.jsx("p",{style:EA,children:"Practical, intensive workshops designed to give you real AI skills you can apply immediately."})]})}),o.jsx("section",{style:IA,children:o.jsx("div",{style:NA,children:t.map((s,a)=>o.jsx("button",{style:{...RA,backgroundColor:n===s?"rgba(0,212,168,0.15)":"transparent",color:n===s?"#00d4a8":"rgba(240,242,245,0.6)",border:n===s?"1px solid rgba(0,212,168,0.3)":"1px solid rgba(255,255,255,0.06)"},onClick:()=>r(s),children:s},a))})}),o.jsx("section",{style:DA,children:i.map((s,a)=>o.jsxs("div",{style:MA,children:[o.jsxs("div",{style:zA,children:[o.jsx("span",{style:{...LA,backgroundColor:s.type==="Beginner"?"rgba(0,212,168,0.15)":s.type==="Intermediate"?"rgba(255,193,7,0.15)":s.type==="Advanced"?"rgba(255,87,34,0.15)":"rgba(100,100,255,0.15)",color:s.type==="Beginner"?"#00d4a8":s.type==="Intermediate"?"#ffc107":s.type==="Advanced"?"#ff5722":"#6464ff"},children:s.type}),o.jsx("span",{style:BA,children:s.price})]}),o.jsx("h3",{style:FA,children:s.title}),o.jsxs("div",{style:VA,children:[o.jsxs("span",{style:Of,children:["📅 ",s.date]}),o.jsxs("span",{style:Of,children:["⏱ ",s.duration]})]}),o.jsx("p",{style:OA,children:s.description}),o.jsx("div",{style:WA,children:s.topics.map((l,c)=>o.jsx("span",{style:$A,children:l},c))}),o.jsx("a",{href:"#",style:UA,children:"Register Now →"})]},a))}),o.jsx("section",{style:HA,children:o.jsxs("div",{style:GA,children:[o.jsx("h2",{style:KA,children:"Can't find what you're looking for?"}),o.jsx("p",{style:YA,children:"We also offer custom workshops for corporate teams and institutions."}),o.jsx("a",{href:"/business",style:XA,children:"Request a Custom Workshop →"})]})})]})},_A={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},CA={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"},AA={maxWidth:"800px",margin:"0 auto"},TA={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},PA={color:"#00d4a8"},EA={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6"},IA={padding:"0 24px 40px",maxWidth:"1024px",margin:"0 auto"},NA={display:"flex",gap:"12px",flexWrap:"wrap",justifyContent:"center"},RA={padding:"8px 20px",borderRadius:"20px",fontSize:"14px",fontWeight:500,cursor:"pointer",transition:"all 0.2s",backgroundColor:"transparent",fontFamily:"'Inter', sans-serif"},DA={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:"24px",maxWidth:"1024px",margin:"0 auto",padding:"0 24px 60px"},MA={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)",transition:"all 0.2s"},zA={display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},LA={fontSize:"11px",fontWeight:600,padding:"4px 14px",borderRadius:"12px",letterSpacing:"0.5px"},BA={fontSize:"20px",fontWeight:700,color:"#00d4a8"},FA={fontSize:"20px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},VA={display:"flex",gap:"16px",marginBottom:"12px",flexWrap:"wrap"},Of={fontSize:"13px",color:"rgba(240,242,245,0.4)"},OA={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"16px"},WA={display:"flex",gap:"6px",flexWrap:"wrap",marginBottom:"20px"},$A={fontSize:"12px",padding:"4px 10px",borderRadius:"6px",backgroundColor:"rgba(255,255,255,0.04)",color:"rgba(240,242,245,0.4)"},UA={display:"inline-block",padding:"10px 24px",borderRadius:"8px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"14px",transition:"all 0.2s"},HA={padding:"60px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"},GA={maxWidth:"700px",margin:"0 auto",textAlign:"center"},KA={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px"},YA={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"24px"},XA={display:"inline-block",padding:"12px 32px",borderRadius:"10px",border:"1px solid rgba(0,212,168,0.3)",color:"#00d4a8",textDecoration:"none",fontSize:"15px",fontWeight:500,transition:"all 0.2s"};function QA(){return o.jsxs(o.Fragment,{children:[o.jsx(z1,{}),o.jsxs(k1,{children:[o.jsx(B,{path:"/",element:o.jsx(m2,{})}),o.jsx(B,{path:"/about",element:o.jsx(Ra,{})}),o.jsx(B,{path:"/about/:topic",element:o.jsx(Ra,{})}),o.jsx(B,{path:"/aboutus",element:o.jsx(Ra,{})}),o.jsx(B,{path:"/leadership",element:o.jsx($C,{})}),o.jsx(B,{path:"/founders",element:o.jsx($_,{})}),o.jsx(B,{path:"/tour",element:o.jsx(W3,{})}),o.jsx(B,{path:"/programmes",element:o.jsx(Nf,{})}),o.jsx(B,{path:"/programmes/:track",element:o.jsx(Nf,{})}),o.jsx(B,{path:"/courses",element:o.jsx(I_,{})}),o.jsx(B,{path:"/students",element:o.jsx(Mf,{})}),o.jsx(B,{path:"/students/:topic",element:o.jsx(Mf,{})}),o.jsx(B,{path:"/career",element:o.jsx(xf,{})}),o.jsx(B,{path:"/career/:topic",element:o.jsx(xf,{})}),o.jsx(B,{path:"/business",element:o.jsx(fj,{})}),o.jsx(B,{path:"/corporate",element:o.jsx(kf,{})}),o.jsx(B,{path:"/corporate/:topic",element:o.jsx(kf,{})}),o.jsx(B,{path:"/colleges",element:o.jsx(vf,{})}),o.jsx(B,{path:"/colleges/:topic",element:o.jsx(vf,{})}),o.jsx(B,{path:"/why-ai",element:o.jsx(Ff,{})}),o.jsx(B,{path:"/why-ai/:industry",element:o.jsx(Ff,{})}),o.jsx(B,{path:"/insights",element:o.jsx(Ef,{})}),o.jsx(B,{path:"/insights/:type",element:o.jsx(Ef,{})}),o.jsx(B,{path:"/admissions",element:o.jsx(mf,{})}),o.jsx(B,{path:"/admissions/:topic",element:o.jsx(mf,{})}),o.jsx(B,{path:"/workshops",element:o.jsx(Vf,{})}),o.jsx(B,{path:"/workshops/:topic",element:o.jsx(Vf,{})}),o.jsx(B,{path:"/contact",element:o.jsx(_4,{})}),o.jsx(B,{path:"/privacy",element:o.jsx(Df,{eyebrow:"Privacy",title:"Privacy policy",summary:"Elevox treats learner, partner, and visitor data with care. This page is prepared for the final policy copy.",focus:["Data clarity","Consent","Security","Learner trust"]})}),o.jsx(B,{path:"/terms",element:o.jsx(Df,{eyebrow:"Terms",title:"Terms of service",summary:"The operating terms for programmes, workshops, admissions, and partner engagements will live here.",focus:["Programmes","Payments","Partnerships","Support"]})}),o.jsx(B,{path:"*",element:o.jsx(HC,{})})]}),o.jsx(Y1,{}),o.jsx(B1,{})]})}Va.createRoot(document.getElementById("root")).render(o.jsx(_n.StrictMode,{children:o.jsx(E1,{children:o.jsx(QA,{})})}));
