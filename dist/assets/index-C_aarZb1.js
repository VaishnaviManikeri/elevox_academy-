function O0(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function W0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var bf={exports:{}},cs={},kf={exports:{}},z={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fi=Symbol.for("react.element"),U0=Symbol.for("react.portal"),$0=Symbol.for("react.fragment"),H0=Symbol.for("react.strict_mode"),G0=Symbol.for("react.profiler"),K0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),X0=Symbol.for("react.forward_ref"),Q0=Symbol.for("react.suspense"),q0=Symbol.for("react.memo"),Z0=Symbol.for("react.lazy"),vu=Symbol.iterator;function J0(e){return e===null||typeof e!="object"?null:(e=vu&&e[vu]||e["@@iterator"],typeof e=="function"?e:null)}var Sf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cf=Object.assign,jf={};function cr(e,t,n){this.props=e,this.context=t,this.refs=jf,this.updater=n||Sf}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function _f(){}_f.prototype=cr.prototype;function Yl(e,t,n){this.props=e,this.context=t,this.refs=jf,this.updater=n||Sf}var Xl=Yl.prototype=new _f;Xl.constructor=Yl;Cf(Xl,cr.prototype);Xl.isPureReactComponent=!0;var wu=Array.isArray,Af=Object.prototype.hasOwnProperty,Ql={current:null},Tf={key:!0,ref:!0,__self:!0,__source:!0};function Ef(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Af.call(t,r)&&!Tf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:fi,type:e,key:o,ref:s,props:i,_owner:Ql.current}}function ey(e,t){return{$$typeof:fi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ql(e){return typeof e=="object"&&e!==null&&e.$$typeof===fi}function ty(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var bu=/\/+/g;function Rs(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ty(""+e.key):t.toString(36)}function oo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case fi:case U0:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Rs(s,0):r,wu(i)?(n="",e!=null&&(n=e.replace(bu,"$&/")+"/"),oo(i,t,n,"",function(u){return u})):i!=null&&(ql(i)&&(i=ey(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(bu,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",wu(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Rs(o,l);s+=oo(o,t,n,c,i)}else if(c=J0(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Rs(o,l++),s+=oo(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _i(e,t,n){if(e==null)return e;var r=[],i=0;return oo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ny(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ce={current:null},so={transition:null},ry={ReactCurrentDispatcher:Ce,ReactCurrentBatchConfig:so,ReactCurrentOwner:Ql};function Pf(){throw Error("act(...) is not supported in production builds of React.")}z.Children={map:_i,forEach:function(e,t,n){_i(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _i(e,function(){t++}),t},toArray:function(e){return _i(e,function(t){return t})||[]},only:function(e){if(!ql(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};z.Component=cr;z.Fragment=$0;z.Profiler=G0;z.PureComponent=Yl;z.StrictMode=H0;z.Suspense=Q0;z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ry;z.act=Pf;z.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cf({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Ql.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Af.call(t,c)&&!Tf.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:fi,type:e.type,key:i,ref:o,props:r,_owner:s}};z.createContext=function(e){return e={$$typeof:Y0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:K0,_context:e},e.Consumer=e};z.createElement=Ef;z.createFactory=function(e){var t=Ef.bind(null,e);return t.type=e,t};z.createRef=function(){return{current:null}};z.forwardRef=function(e){return{$$typeof:X0,render:e}};z.isValidElement=ql;z.lazy=function(e){return{$$typeof:Z0,_payload:{_status:-1,_result:e},_init:ny}};z.memo=function(e,t){return{$$typeof:q0,type:e,compare:t===void 0?null:t}};z.startTransition=function(e){var t=so.transition;so.transition={};try{e()}finally{so.transition=t}};z.unstable_act=Pf;z.useCallback=function(e,t){return Ce.current.useCallback(e,t)};z.useContext=function(e){return Ce.current.useContext(e)};z.useDebugValue=function(){};z.useDeferredValue=function(e){return Ce.current.useDeferredValue(e)};z.useEffect=function(e,t){return Ce.current.useEffect(e,t)};z.useId=function(){return Ce.current.useId()};z.useImperativeHandle=function(e,t,n){return Ce.current.useImperativeHandle(e,t,n)};z.useInsertionEffect=function(e,t){return Ce.current.useInsertionEffect(e,t)};z.useLayoutEffect=function(e,t){return Ce.current.useLayoutEffect(e,t)};z.useMemo=function(e,t){return Ce.current.useMemo(e,t)};z.useReducer=function(e,t,n){return Ce.current.useReducer(e,t,n)};z.useRef=function(e){return Ce.current.useRef(e)};z.useState=function(e){return Ce.current.useState(e)};z.useSyncExternalStore=function(e,t,n){return Ce.current.useSyncExternalStore(e,t,n)};z.useTransition=function(){return Ce.current.useTransition()};z.version="18.3.1";kf.exports=z;var k=kf.exports;const ur=W0(k),iy=O0({__proto__:null,default:ur},[k]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy=k,sy=Symbol.for("react.element"),ay=Symbol.for("react.fragment"),ly=Object.prototype.hasOwnProperty,cy=oy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uy={key:!0,ref:!0,__self:!0,__source:!0};function If(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)ly.call(t,r)&&!uy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:sy,type:e,key:o,ref:s,props:i,_owner:cy.current}}cs.Fragment=ay;cs.jsx=If;cs.jsxs=If;bf.exports=cs;var a=bf.exports,_a={},Nf={exports:{}},Be={},Rf={exports:{}},Mf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,R){var M=E.length;E.push(R);e:for(;0<M;){var O=M-1>>>1,te=E[O];if(0<i(te,R))E[O]=R,E[M]=te,M=O;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var R=E[0],M=E.pop();if(M!==R){E[0]=M;e:for(var O=0,te=E.length,Ci=te>>>1;O<Ci;){var ln=2*(O+1)-1,Ns=E[ln],cn=ln+1,ji=E[cn];if(0>i(Ns,M))cn<te&&0>i(ji,Ns)?(E[O]=ji,E[cn]=M,O=cn):(E[O]=Ns,E[ln]=M,O=ln);else if(cn<te&&0>i(ji,M))E[O]=ji,E[cn]=M,O=cn;else break e}}return R}function i(E,R){var M=E.sortIndex-R.sortIndex;return M!==0?M:E.id-R.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],p=1,d=null,f=3,y=!1,x=!1,v=!1,b=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(E){for(var R=n(u);R!==null;){if(R.callback===null)r(u);else if(R.startTime<=E)r(u),R.sortIndex=R.expirationTime,t(c,R);else break;R=n(u)}}function w(E){if(v=!1,g(E),!x)if(n(c)!==null)x=!0,Ae(S);else{var R=n(u);R!==null&&Si(w,R.startTime-E)}}function S(E,R){x=!1,v&&(v=!1,m(C),C=-1),y=!0;var M=f;try{for(g(R),d=n(c);d!==null&&(!(d.expirationTime>R)||E&&!V());){var O=d.callback;if(typeof O=="function"){d.callback=null,f=d.priorityLevel;var te=O(d.expirationTime<=R);R=e.unstable_now(),typeof te=="function"?d.callback=te:d===n(c)&&r(c),g(R)}else r(c);d=n(c)}if(d!==null)var Ci=!0;else{var ln=n(u);ln!==null&&Si(w,ln.startTime-R),Ci=!1}return Ci}finally{d=null,f=M,y=!1}}var T=!1,_=null,C=-1,L=5,P=-1;function V(){return!(e.unstable_now()-P<L)}function ee(){if(_!==null){var E=e.unstable_now();P=E;var R=!0;try{R=_(!0,E)}finally{R?Re():(T=!1,_=null)}}else T=!1}var Re;if(typeof h=="function")Re=function(){h(ee)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,qe=Me.port2;Me.port1.onmessage=ee,Re=function(){qe.postMessage(null)}}else Re=function(){b(ee,0)};function Ae(E){_=E,T||(T=!0,Re())}function Si(E,R){C=b(function(){E(e.unstable_now())},R)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){x||y||(x=!0,Ae(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var R=3;break;default:R=f}var M=f;f=R;try{return E()}finally{f=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,R){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var M=f;f=E;try{return R()}finally{f=M}},e.unstable_scheduleCallback=function(E,R,M){var O=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?O+M:O):M=O,E){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=M+te,E={id:p++,callback:R,priorityLevel:E,startTime:M,expirationTime:te,sortIndex:-1},M>O?(E.sortIndex=M,t(u,E),n(c)===null&&E===n(u)&&(v?(m(C),C=-1):v=!0,Si(w,M-O))):(E.sortIndex=te,t(c,E),x||y||(x=!0,Ae(S))),E},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(E){var R=f;return function(){var M=f;f=R;try{return E.apply(this,arguments)}finally{f=M}}}})(Mf);Rf.exports=Mf;var dy=Rf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=k,Fe=dy;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Lf=new Set,$r={};function Tn(e,t){er(e,t),er(e+"Capture",t)}function er(e,t){for($r[e]=t,e=0;e<t.length;e++)Lf.add(t[e])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Aa=Object.prototype.hasOwnProperty,fy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ku={},Su={};function hy(e){return Aa.call(Su,e)?!0:Aa.call(ku,e)?!1:fy.test(e)?Su[e]=!0:(ku[e]=!0,!1)}function my(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function gy(e,t,n,r){if(t===null||typeof t>"u"||my(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function je(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){me[e]=new je(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];me[t]=new je(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){me[e]=new je(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){me[e]=new je(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){me[e]=new je(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){me[e]=new je(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){me[e]=new je(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){me[e]=new je(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){me[e]=new je(e,5,!1,e.toLowerCase(),null,!1,!1)});var Zl=/[\-:]([a-z])/g;function Jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);me[t]=new je(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Zl,Jl);me[t]=new je(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Zl,Jl);me[t]=new je(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!1,!1)});me.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){me[e]=new je(e,1,!1,e.toLowerCase(),null,!0,!0)});function ec(e,t,n,r){var i=me.hasOwnProperty(t)?me[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(gy(t,n,i,r)&&(n=null),r||i===null?hy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Et=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ai=Symbol.for("react.element"),Rn=Symbol.for("react.portal"),Mn=Symbol.for("react.fragment"),tc=Symbol.for("react.strict_mode"),Ta=Symbol.for("react.profiler"),zf=Symbol.for("react.provider"),Df=Symbol.for("react.context"),nc=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Pa=Symbol.for("react.suspense_list"),rc=Symbol.for("react.memo"),Mt=Symbol.for("react.lazy"),Vf=Symbol.for("react.offscreen"),Cu=Symbol.iterator;function yr(e){return e===null||typeof e!="object"?null:(e=Cu&&e[Cu]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Ms;function _r(e){if(Ms===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ms=t&&t[1]||""}return`
`+Ms+e}var Ls=!1;function zs(e,t){if(!e||Ls)return"";Ls=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Ls=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?_r(e):""}function yy(e){switch(e.tag){case 5:return _r(e.type);case 16:return _r("Lazy");case 13:return _r("Suspense");case 19:return _r("SuspenseList");case 0:case 2:case 15:return e=zs(e.type,!1),e;case 11:return e=zs(e.type.render,!1),e;case 1:return e=zs(e.type,!0),e;default:return""}}function Ia(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Mn:return"Fragment";case Rn:return"Portal";case Ta:return"Profiler";case tc:return"StrictMode";case Ea:return"Suspense";case Pa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Df:return(e.displayName||"Context")+".Consumer";case zf:return(e._context.displayName||"Context")+".Provider";case nc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case rc:return t=e.displayName||null,t!==null?t:Ia(e.type)||"Memo";case Mt:t=e._payload,e=e._init;try{return Ia(e(t))}catch{}}return null}function xy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ia(t);case 8:return t===tc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ff(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vy(e){var t=Ff(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ti(e){e._valueTracker||(e._valueTracker=vy(e))}function Bf(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ff(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Na(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ju(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Of(e,t){t=t.checked,t!=null&&ec(e,"checked",t,!1)}function Ra(e,t){Of(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ma(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ma(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function _u(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ma(e,t,n){(t!=="number"||_o(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ar=Array.isArray;function Yn(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function La(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(j(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Au(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(j(92));if(Ar(n)){if(1<n.length)throw Error(j(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function Wf(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Tu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Uf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Uf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ei,$f=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ei=Ei||document.createElement("div"),Ei.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ei.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Hr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wy=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){wy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function Hf(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function Gf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Hf(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var by=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Da(e,t){if(t){if(by[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(j(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(j(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(j(61))}if(t.style!=null&&typeof t.style!="object")throw Error(j(62))}}function Va(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ba=null,Xn=null,Qn=null;function Eu(e){if(e=gi(e)){if(typeof Ba!="function")throw Error(j(280));var t=e.stateNode;t&&(t=hs(t),Ba(e.stateNode,e.type,t))}}function Kf(e){Xn?Qn?Qn.push(e):Qn=[e]:Xn=e}function Yf(){if(Xn){var e=Xn,t=Qn;if(Qn=Xn=null,Eu(e),t)for(e=0;e<t.length;e++)Eu(t[e])}}function Xf(e,t){return e(t)}function Qf(){}var Ds=!1;function qf(e,t,n){if(Ds)return e(t,n);Ds=!0;try{return Xf(e,t,n)}finally{Ds=!1,(Xn!==null||Qn!==null)&&(Qf(),Yf())}}function Gr(e,t){var n=e.stateNode;if(n===null)return null;var r=hs(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(j(231,t,typeof n));return n}var Oa=!1;if(jt)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){Oa=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{Oa=!1}function ky(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var Nr=!1,Ao=null,To=!1,Wa=null,Sy={onError:function(e){Nr=!0,Ao=e}};function Cy(e,t,n,r,i,o,s,l,c){Nr=!1,Ao=null,ky.apply(Sy,arguments)}function jy(e,t,n,r,i,o,s,l,c){if(Cy.apply(this,arguments),Nr){if(Nr){var u=Ao;Nr=!1,Ao=null}else throw Error(j(198));To||(To=!0,Wa=u)}}function En(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pu(e){if(En(e)!==e)throw Error(j(188))}function _y(e){var t=e.alternate;if(!t){if(t=En(e),t===null)throw Error(j(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Pu(i),e;if(o===r)return Pu(i),t;o=o.sibling}throw Error(j(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?e:t}function Jf(e){return e=_y(e),e!==null?eh(e):null}function eh(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=eh(e);if(t!==null)return t;e=e.sibling}return null}var th=Fe.unstable_scheduleCallback,Iu=Fe.unstable_cancelCallback,Ay=Fe.unstable_shouldYield,Ty=Fe.unstable_requestPaint,J=Fe.unstable_now,Ey=Fe.unstable_getCurrentPriorityLevel,oc=Fe.unstable_ImmediatePriority,nh=Fe.unstable_UserBlockingPriority,Eo=Fe.unstable_NormalPriority,Py=Fe.unstable_LowPriority,rh=Fe.unstable_IdlePriority,us=null,ht=null;function Iy(e){if(ht&&typeof ht.onCommitFiberRoot=="function")try{ht.onCommitFiberRoot(us,e,void 0,(e.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:My,Ny=Math.log,Ry=Math.LN2;function My(e){return e>>>=0,e===0?32:31-(Ny(e)/Ry|0)|0}var Pi=64,Ii=4194304;function Tr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Po(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Tr(l):(o&=s,o!==0&&(r=Tr(o)))}else s=n&~i,s!==0?r=Tr(s):o!==0&&(r=Tr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-it(t),i=1<<n,r|=e[n],t&=~i;return r}function Ly(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zy(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-it(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=Ly(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function Ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ih(){var e=Pi;return Pi<<=1,!(Pi&4194240)&&(Pi=64),e}function Vs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function hi(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-it(t),e[t]=n}function Dy(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-it(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function sc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var B=0;function oh(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sh,ac,ah,lh,ch,$a=!1,Ni=[],Wt=null,Ut=null,$t=null,Kr=new Map,Yr=new Map,zt=[],Vy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(e,t){switch(e){case"focusin":case"focusout":Wt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":$t=null;break;case"pointerover":case"pointerout":Kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yr.delete(t.pointerId)}}function vr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=gi(t),t!==null&&ac(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Fy(e,t,n,r,i){switch(t){case"focusin":return Wt=vr(Wt,e,t,n,r,i),!0;case"dragenter":return Ut=vr(Ut,e,t,n,r,i),!0;case"mouseover":return $t=vr($t,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Kr.set(o,vr(Kr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Yr.set(o,vr(Yr.get(o)||null,e,t,n,r,i)),!0}return!1}function uh(e){var t=hn(e.target);if(t!==null){var n=En(t);if(n!==null){if(t=n.tag,t===13){if(t=Zf(n),t!==null){e.blockedOn=t,ch(e.priority,function(){ah(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ao(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ha(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Fa=r,n.target.dispatchEvent(r),Fa=null}else return t=gi(n),t!==null&&ac(t),e.blockedOn=n,!1;t.shift()}return!0}function Ru(e,t,n){ao(e)&&n.delete(t)}function By(){$a=!1,Wt!==null&&ao(Wt)&&(Wt=null),Ut!==null&&ao(Ut)&&(Ut=null),$t!==null&&ao($t)&&($t=null),Kr.forEach(Ru),Yr.forEach(Ru)}function wr(e,t){e.blockedOn===t&&(e.blockedOn=null,$a||($a=!0,Fe.unstable_scheduleCallback(Fe.unstable_NormalPriority,By)))}function Xr(e){function t(i){return wr(i,e)}if(0<Ni.length){wr(Ni[0],e);for(var n=1;n<Ni.length;n++){var r=Ni[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Wt!==null&&wr(Wt,e),Ut!==null&&wr(Ut,e),$t!==null&&wr($t,e),Kr.forEach(t),Yr.forEach(t),n=0;n<zt.length;n++)r=zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<zt.length&&(n=zt[0],n.blockedOn===null);)uh(n),n.blockedOn===null&&zt.shift()}var qn=Et.ReactCurrentBatchConfig,Io=!0;function Oy(e,t,n,r){var i=B,o=qn.transition;qn.transition=null;try{B=1,lc(e,t,n,r)}finally{B=i,qn.transition=o}}function Wy(e,t,n,r){var i=B,o=qn.transition;qn.transition=null;try{B=4,lc(e,t,n,r)}finally{B=i,qn.transition=o}}function lc(e,t,n,r){if(Io){var i=Ha(e,t,n,r);if(i===null)Ys(e,t,r,No,n),Nu(e,r);else if(Fy(i,e,t,n,r))r.stopPropagation();else if(Nu(e,r),t&4&&-1<Vy.indexOf(e)){for(;i!==null;){var o=gi(i);if(o!==null&&sh(o),o=Ha(e,t,n,r),o===null&&Ys(e,t,r,No,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Ys(e,t,r,null,n)}}var No=null;function Ha(e,t,n,r){if(No=null,e=ic(r),e=hn(e),e!==null)if(t=En(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return No=e,null}function dh(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ey()){case oc:return 1;case nh:return 4;case Eo:case Py:return 16;case rh:return 536870912;default:return 16}default:return 16}}var Vt=null,cc=null,lo=null;function ph(){if(lo)return lo;var e,t=cc,n=t.length,r,i="value"in Vt?Vt.value:Vt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return lo=i.slice(e,1<r?1-r:void 0)}function co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ri(){return!0}function Mu(){return!1}function Oe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Ri:Mu,this.isPropagationStopped=Mu,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ri)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ri)},persist:function(){},isPersistent:Ri}),t}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uc=Oe(dr),mi=Q({},dr,{view:0,detail:0}),Uy=Oe(mi),Fs,Bs,br,ds=Q({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:dc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==br&&(br&&e.type==="mousemove"?(Fs=e.screenX-br.screenX,Bs=e.screenY-br.screenY):Bs=Fs=0,br=e),Fs)},movementY:function(e){return"movementY"in e?e.movementY:Bs}}),Lu=Oe(ds),$y=Q({},ds,{dataTransfer:0}),Hy=Oe($y),Gy=Q({},mi,{relatedTarget:0}),Os=Oe(Gy),Ky=Q({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),Yy=Oe(Ky),Xy=Q({},dr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Qy=Oe(Xy),qy=Q({},dr,{data:0}),zu=Oe(qy),Zy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ex={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ex[e])?!!t[e]:!1}function dc(){return tx}var nx=Q({},mi,{key:function(e){if(e.key){var t=Zy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:dc,charCode:function(e){return e.type==="keypress"?co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rx=Oe(nx),ix=Q({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Du=Oe(ix),ox=Q({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:dc}),sx=Oe(ox),ax=Q({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),lx=Oe(ax),cx=Q({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ux=Oe(cx),dx=[9,13,27,32],pc=jt&&"CompositionEvent"in window,Rr=null;jt&&"documentMode"in document&&(Rr=document.documentMode);var px=jt&&"TextEvent"in window&&!Rr,fh=jt&&(!pc||Rr&&8<Rr&&11>=Rr),Vu=" ",Fu=!1;function hh(e,t){switch(e){case"keyup":return dx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function fx(e,t){switch(e){case"compositionend":return mh(t);case"keypress":return t.which!==32?null:(Fu=!0,Vu);case"textInput":return e=t.data,e===Vu&&Fu?null:e;default:return null}}function hx(e,t){if(Ln)return e==="compositionend"||!pc&&hh(e,t)?(e=ph(),lo=cc=Vt=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fh&&t.locale!=="ko"?null:t.data;default:return null}}var mx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mx[e.type]:t==="textarea"}function gh(e,t,n,r){Kf(r),t=Ro(t,"onChange"),0<t.length&&(n=new uc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Mr=null,Qr=null;function gx(e){Ah(e,0)}function ps(e){var t=Vn(e);if(Bf(t))return e}function yx(e,t){if(e==="change")return t}var yh=!1;if(jt){var Ws;if(jt){var Us="oninput"in document;if(!Us){var Ou=document.createElement("div");Ou.setAttribute("oninput","return;"),Us=typeof Ou.oninput=="function"}Ws=Us}else Ws=!1;yh=Ws&&(!document.documentMode||9<document.documentMode)}function Wu(){Mr&&(Mr.detachEvent("onpropertychange",xh),Qr=Mr=null)}function xh(e){if(e.propertyName==="value"&&ps(Qr)){var t=[];gh(t,Qr,e,ic(e)),qf(gx,t)}}function xx(e,t,n){e==="focusin"?(Wu(),Mr=t,Qr=n,Mr.attachEvent("onpropertychange",xh)):e==="focusout"&&Wu()}function vx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ps(Qr)}function wx(e,t){if(e==="click")return ps(t)}function bx(e,t){if(e==="input"||e==="change")return ps(t)}function kx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var at=typeof Object.is=="function"?Object.is:kx;function qr(e,t){if(at(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Aa.call(t,i)||!at(e[i],t[i]))return!1}return!0}function Uu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $u(e,t){var n=Uu(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Uu(n)}}function vh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wh(){for(var e=window,t=_o();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_o(e.document)}return t}function fc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sx(e){var t=wh(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vh(n.ownerDocument.documentElement,n)){if(r!==null&&fc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=$u(n,o);var s=$u(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Cx=jt&&"documentMode"in document&&11>=document.documentMode,zn=null,Ga=null,Lr=null,Ka=!1;function Hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ka||zn==null||zn!==_o(r)||(r=zn,"selectionStart"in r&&fc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Lr&&qr(Lr,r)||(Lr=r,r=Ro(Ga,"onSelect"),0<r.length&&(t=new uc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function Mi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Dn={animationend:Mi("Animation","AnimationEnd"),animationiteration:Mi("Animation","AnimationIteration"),animationstart:Mi("Animation","AnimationStart"),transitionend:Mi("Transition","TransitionEnd")},$s={},bh={};jt&&(bh=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function fs(e){if($s[e])return $s[e];if(!Dn[e])return e;var t=Dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in bh)return $s[e]=t[n];return e}var kh=fs("animationend"),Sh=fs("animationiteration"),Ch=fs("animationstart"),jh=fs("transitionend"),_h=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function tn(e,t){_h.set(e,t),Tn(t,[e])}for(var Hs=0;Hs<Gu.length;Hs++){var Gs=Gu[Hs],jx=Gs.toLowerCase(),_x=Gs[0].toUpperCase()+Gs.slice(1);tn(jx,"on"+_x)}tn(kh,"onAnimationEnd");tn(Sh,"onAnimationIteration");tn(Ch,"onAnimationStart");tn("dblclick","onDoubleClick");tn("focusin","onFocus");tn("focusout","onBlur");tn(jh,"onTransitionEnd");er("onMouseEnter",["mouseout","mouseover"]);er("onMouseLeave",["mouseout","mouseover"]);er("onPointerEnter",["pointerout","pointerover"]);er("onPointerLeave",["pointerout","pointerover"]);Tn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Tn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Tn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Tn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Tn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Er="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ax=new Set("cancel close invalid load scroll toggle".split(" ").concat(Er));function Ku(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,jy(r,t,void 0,e),e.currentTarget=null}function Ah(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;Ku(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;Ku(i,l,u),o=c}}}if(To)throw e=Wa,To=!1,Wa=null,e}function H(e,t){var n=t[Za];n===void 0&&(n=t[Za]=new Set);var r=e+"__bubble";n.has(r)||(Th(t,e,2,!1),n.add(r))}function Ks(e,t,n){var r=0;t&&(r|=4),Th(n,e,r,t)}var Li="_reactListening"+Math.random().toString(36).slice(2);function Zr(e){if(!e[Li]){e[Li]=!0,Lf.forEach(function(n){n!=="selectionchange"&&(Ax.has(n)||Ks(n,!1,e),Ks(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Li]||(t[Li]=!0,Ks("selectionchange",!1,t))}}function Th(e,t,n,r){switch(dh(t)){case 1:var i=Oy;break;case 4:i=Wy;break;default:i=lc}n=i.bind(null,t,n,e),i=void 0,!Oa||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ys(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=hn(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}qf(function(){var u=o,p=ic(n),d=[];e:{var f=_h.get(e);if(f!==void 0){var y=uc,x=e;switch(e){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":y=rx;break;case"focusin":x="focus",y=Os;break;case"focusout":x="blur",y=Os;break;case"beforeblur":case"afterblur":y=Os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=sx;break;case kh:case Sh:case Ch:y=Yy;break;case jh:y=lx;break;case"scroll":y=Uy;break;case"wheel":y=ux;break;case"copy":case"cut":case"paste":y=Qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Du}var v=(t&4)!==0,b=!v&&e==="scroll",m=v?f!==null?f+"Capture":null:f;v=[];for(var h=u,g;h!==null;){g=h;var w=g.stateNode;if(g.tag===5&&w!==null&&(g=w,m!==null&&(w=Gr(h,m),w!=null&&v.push(Jr(h,w,g)))),b)break;h=h.return}0<v.length&&(f=new y(f,x,null,n,p),d.push({event:f,listeners:v}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",y=e==="mouseout"||e==="pointerout",f&&n!==Fa&&(x=n.relatedTarget||n.fromElement)&&(hn(x)||x[_t]))break e;if((y||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,y?(x=n.relatedTarget||n.toElement,y=u,x=x?hn(x):null,x!==null&&(b=En(x),x!==b||x.tag!==5&&x.tag!==6)&&(x=null)):(y=null,x=u),y!==x)){if(v=Lu,w="onMouseLeave",m="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(v=Du,w="onPointerLeave",m="onPointerEnter",h="pointer"),b=y==null?f:Vn(y),g=x==null?f:Vn(x),f=new v(w,h+"leave",y,n,p),f.target=b,f.relatedTarget=g,w=null,hn(p)===u&&(v=new v(m,h+"enter",x,n,p),v.target=g,v.relatedTarget=b,w=v),b=w,y&&x)t:{for(v=y,m=x,h=0,g=v;g;g=In(g))h++;for(g=0,w=m;w;w=In(w))g++;for(;0<h-g;)v=In(v),h--;for(;0<g-h;)m=In(m),g--;for(;h--;){if(v===m||m!==null&&v===m.alternate)break t;v=In(v),m=In(m)}v=null}else v=null;y!==null&&Yu(d,f,y,v,!1),x!==null&&b!==null&&Yu(d,b,x,v,!0)}}e:{if(f=u?Vn(u):window,y=f.nodeName&&f.nodeName.toLowerCase(),y==="select"||y==="input"&&f.type==="file")var S=yx;else if(Bu(f))if(yh)S=bx;else{S=vx;var T=xx}else(y=f.nodeName)&&y.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(S=wx);if(S&&(S=S(e,u))){gh(d,S,n,p);break e}T&&T(e,f,u),e==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Ma(f,"number",f.value)}switch(T=u?Vn(u):window,e){case"focusin":(Bu(T)||T.contentEditable==="true")&&(zn=T,Ga=u,Lr=null);break;case"focusout":Lr=Ga=zn=null;break;case"mousedown":Ka=!0;break;case"contextmenu":case"mouseup":case"dragend":Ka=!1,Hu(d,n,p);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":Hu(d,n,p)}var _;if(pc)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Ln?hh(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(fh&&n.locale!=="ko"&&(Ln||C!=="onCompositionStart"?C==="onCompositionEnd"&&Ln&&(_=ph()):(Vt=p,cc="value"in Vt?Vt.value:Vt.textContent,Ln=!0)),T=Ro(u,C),0<T.length&&(C=new zu(C,e,null,n,p),d.push({event:C,listeners:T}),_?C.data=_:(_=mh(n),_!==null&&(C.data=_)))),(_=px?fx(e,n):hx(e,n))&&(u=Ro(u,"onBeforeInput"),0<u.length&&(p=new zu("onBeforeInput","beforeinput",null,n,p),d.push({event:p,listeners:u}),p.data=_))}Ah(d,t)})}function Jr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=Gr(e,n),o!=null&&r.unshift(Jr(e,o,i)),o=Gr(e,t),o!=null&&r.push(Jr(e,o,i))),e=e.return}return r}function In(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Yu(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=Gr(n,o),c!=null&&s.unshift(Jr(n,c,l))):i||(c=Gr(n,o),c!=null&&s.push(Jr(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Tx=/\r\n?/g,Ex=/\u0000|\uFFFD/g;function Xu(e){return(typeof e=="string"?e:""+e).replace(Tx,`
`).replace(Ex,"")}function zi(e,t,n){if(t=Xu(t),Xu(e)!==t&&n)throw Error(j(425))}function Mo(){}var Ya=null,Xa=null;function Qa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var qa=typeof setTimeout=="function"?setTimeout:void 0,Px=typeof clearTimeout=="function"?clearTimeout:void 0,Qu=typeof Promise=="function"?Promise:void 0,Ix=typeof queueMicrotask=="function"?queueMicrotask:typeof Qu<"u"?function(e){return Qu.resolve(null).then(e).catch(Nx)}:qa;function Nx(e){setTimeout(function(){throw e})}function Xs(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Xr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Xr(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pr=Math.random().toString(36).slice(2),ft="__reactFiber$"+pr,ei="__reactProps$"+pr,_t="__reactContainer$"+pr,Za="__reactEvents$"+pr,Rx="__reactListeners$"+pr,Mx="__reactHandles$"+pr;function hn(e){var t=e[ft];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_t]||n[ft]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qu(e);e!==null;){if(n=e[ft])return n;e=qu(e)}return t}e=n,n=e.parentNode}return null}function gi(e){return e=e[ft]||e[_t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(j(33))}function hs(e){return e[ei]||null}var Ja=[],Fn=-1;function nn(e){return{current:e}}function G(e){0>Fn||(e.current=Ja[Fn],Ja[Fn]=null,Fn--)}function $(e,t){Fn++,Ja[Fn]=e.current,e.current=t}var Zt={},ve=nn(Zt),Pe=nn(!1),Sn=Zt;function tr(e,t){var n=e.type.contextTypes;if(!n)return Zt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ie(e){return e=e.childContextTypes,e!=null}function Lo(){G(Pe),G(ve)}function Zu(e,t,n){if(ve.current!==Zt)throw Error(j(168));$(ve,t),$(Pe,n)}function Eh(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(j(108,xy(e)||"Unknown",i));return Q({},n,r)}function zo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zt,Sn=ve.current,$(ve,e),$(Pe,Pe.current),!0}function Ju(e,t,n){var r=e.stateNode;if(!r)throw Error(j(169));n?(e=Eh(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,G(Pe),G(ve),$(ve,e)):G(Pe),$(Pe,n)}var bt=null,ms=!1,Qs=!1;function Ph(e){bt===null?bt=[e]:bt.push(e)}function Lx(e){ms=!0,Ph(e)}function rn(){if(!Qs&&bt!==null){Qs=!0;var e=0,t=B;try{var n=bt;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}bt=null,ms=!1}catch(i){throw bt!==null&&(bt=bt.slice(e+1)),th(oc,rn),i}finally{B=t,Qs=!1}}return null}var Bn=[],On=0,Do=null,Vo=0,Ue=[],$e=0,Cn=null,kt=1,St="";function dn(e,t){Bn[On++]=Vo,Bn[On++]=Do,Do=e,Vo=t}function Ih(e,t,n){Ue[$e++]=kt,Ue[$e++]=St,Ue[$e++]=Cn,Cn=e;var r=kt;e=St;var i=32-it(r)-1;r&=~(1<<i),n+=1;var o=32-it(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,kt=1<<32-it(t)+i|n<<i|r,St=o+e}else kt=1<<o|n<<i|r,St=e}function hc(e){e.return!==null&&(dn(e,1),Ih(e,1,0))}function mc(e){for(;e===Do;)Do=Bn[--On],Bn[On]=null,Vo=Bn[--On],Bn[On]=null;for(;e===Cn;)Cn=Ue[--$e],Ue[$e]=null,St=Ue[--$e],Ue[$e]=null,kt=Ue[--$e],Ue[$e]=null}var De=null,ze=null,K=!1,rt=null;function Nh(e,t){var n=He(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ed(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,De=e,ze=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,De=e,ze=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Cn!==null?{id:kt,overflow:St}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=He(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,De=e,ze=null,!0):!1;default:return!1}}function el(e){return(e.mode&1)!==0&&(e.flags&128)===0}function tl(e){if(K){var t=ze;if(t){var n=t;if(!ed(e,t)){if(el(e))throw Error(j(418));t=Ht(n.nextSibling);var r=De;t&&ed(e,t)?Nh(r,n):(e.flags=e.flags&-4097|2,K=!1,De=e)}}else{if(el(e))throw Error(j(418));e.flags=e.flags&-4097|2,K=!1,De=e}}}function td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;De=e}function Di(e){if(e!==De)return!1;if(!K)return td(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Qa(e.type,e.memoizedProps)),t&&(t=ze)){if(el(e))throw Rh(),Error(j(418));for(;t;)Nh(e,t),t=Ht(t.nextSibling)}if(td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(j(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ze=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ze=null}}else ze=De?Ht(e.stateNode.nextSibling):null;return!0}function Rh(){for(var e=ze;e;)e=Ht(e.nextSibling)}function nr(){ze=De=null,K=!1}function gc(e){rt===null?rt=[e]:rt.push(e)}var zx=Et.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,e))}return e}function Vi(e,t){throw e=Object.prototype.toString.call(t),Error(j(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function nd(e){var t=e._init;return t(e._payload)}function Mh(e){function t(m,h){if(e){var g=m.deletions;g===null?(m.deletions=[h],m.flags|=16):g.push(h)}}function n(m,h){if(!e)return null;for(;h!==null;)t(m,h),h=h.sibling;return null}function r(m,h){for(m=new Map;h!==null;)h.key!==null?m.set(h.key,h):m.set(h.index,h),h=h.sibling;return m}function i(m,h){return m=Xt(m,h),m.index=0,m.sibling=null,m}function o(m,h,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<h?(m.flags|=2,h):g):(m.flags|=2,h)):(m.flags|=1048576,h)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,h,g,w){return h===null||h.tag!==6?(h=ra(g,m.mode,w),h.return=m,h):(h=i(h,g),h.return=m,h)}function c(m,h,g,w){var S=g.type;return S===Mn?p(m,h,g.props.children,w,g.key):h!==null&&(h.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mt&&nd(S)===h.type)?(w=i(h,g.props),w.ref=kr(m,h,g),w.return=m,w):(w=yo(g.type,g.key,g.props,null,m.mode,w),w.ref=kr(m,h,g),w.return=m,w)}function u(m,h,g,w){return h===null||h.tag!==4||h.stateNode.containerInfo!==g.containerInfo||h.stateNode.implementation!==g.implementation?(h=ia(g,m.mode,w),h.return=m,h):(h=i(h,g.children||[]),h.return=m,h)}function p(m,h,g,w,S){return h===null||h.tag!==7?(h=wn(g,m.mode,w,S),h.return=m,h):(h=i(h,g),h.return=m,h)}function d(m,h,g){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ra(""+h,m.mode,g),h.return=m,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ai:return g=yo(h.type,h.key,h.props,null,m.mode,g),g.ref=kr(m,null,h),g.return=m,g;case Rn:return h=ia(h,m.mode,g),h.return=m,h;case Mt:var w=h._init;return d(m,w(h._payload),g)}if(Ar(h)||yr(h))return h=wn(h,m.mode,g,null),h.return=m,h;Vi(m,h)}return null}function f(m,h,g,w){var S=h!==null?h.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return S!==null?null:l(m,h,""+g,w);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ai:return g.key===S?c(m,h,g,w):null;case Rn:return g.key===S?u(m,h,g,w):null;case Mt:return S=g._init,f(m,h,S(g._payload),w)}if(Ar(g)||yr(g))return S!==null?null:p(m,h,g,w,null);Vi(m,g)}return null}function y(m,h,g,w,S){if(typeof w=="string"&&w!==""||typeof w=="number")return m=m.get(g)||null,l(h,m,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ai:return m=m.get(w.key===null?g:w.key)||null,c(h,m,w,S);case Rn:return m=m.get(w.key===null?g:w.key)||null,u(h,m,w,S);case Mt:var T=w._init;return y(m,h,g,T(w._payload),S)}if(Ar(w)||yr(w))return m=m.get(g)||null,p(h,m,w,S,null);Vi(h,w)}return null}function x(m,h,g,w){for(var S=null,T=null,_=h,C=h=0,L=null;_!==null&&C<g.length;C++){_.index>C?(L=_,_=null):L=_.sibling;var P=f(m,_,g[C],w);if(P===null){_===null&&(_=L);break}e&&_&&P.alternate===null&&t(m,_),h=o(P,h,C),T===null?S=P:T.sibling=P,T=P,_=L}if(C===g.length)return n(m,_),K&&dn(m,C),S;if(_===null){for(;C<g.length;C++)_=d(m,g[C],w),_!==null&&(h=o(_,h,C),T===null?S=_:T.sibling=_,T=_);return K&&dn(m,C),S}for(_=r(m,_);C<g.length;C++)L=y(_,m,C,g[C],w),L!==null&&(e&&L.alternate!==null&&_.delete(L.key===null?C:L.key),h=o(L,h,C),T===null?S=L:T.sibling=L,T=L);return e&&_.forEach(function(V){return t(m,V)}),K&&dn(m,C),S}function v(m,h,g,w){var S=yr(g);if(typeof S!="function")throw Error(j(150));if(g=S.call(g),g==null)throw Error(j(151));for(var T=S=null,_=h,C=h=0,L=null,P=g.next();_!==null&&!P.done;C++,P=g.next()){_.index>C?(L=_,_=null):L=_.sibling;var V=f(m,_,P.value,w);if(V===null){_===null&&(_=L);break}e&&_&&V.alternate===null&&t(m,_),h=o(V,h,C),T===null?S=V:T.sibling=V,T=V,_=L}if(P.done)return n(m,_),K&&dn(m,C),S;if(_===null){for(;!P.done;C++,P=g.next())P=d(m,P.value,w),P!==null&&(h=o(P,h,C),T===null?S=P:T.sibling=P,T=P);return K&&dn(m,C),S}for(_=r(m,_);!P.done;C++,P=g.next())P=y(_,m,C,P.value,w),P!==null&&(e&&P.alternate!==null&&_.delete(P.key===null?C:P.key),h=o(P,h,C),T===null?S=P:T.sibling=P,T=P);return e&&_.forEach(function(ee){return t(m,ee)}),K&&dn(m,C),S}function b(m,h,g,w){if(typeof g=="object"&&g!==null&&g.type===Mn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ai:e:{for(var S=g.key,T=h;T!==null;){if(T.key===S){if(S=g.type,S===Mn){if(T.tag===7){n(m,T.sibling),h=i(T,g.props.children),h.return=m,m=h;break e}}else if(T.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Mt&&nd(S)===T.type){n(m,T.sibling),h=i(T,g.props),h.ref=kr(m,T,g),h.return=m,m=h;break e}n(m,T);break}else t(m,T);T=T.sibling}g.type===Mn?(h=wn(g.props.children,m.mode,w,g.key),h.return=m,m=h):(w=yo(g.type,g.key,g.props,null,m.mode,w),w.ref=kr(m,h,g),w.return=m,m=w)}return s(m);case Rn:e:{for(T=g.key;h!==null;){if(h.key===T)if(h.tag===4&&h.stateNode.containerInfo===g.containerInfo&&h.stateNode.implementation===g.implementation){n(m,h.sibling),h=i(h,g.children||[]),h.return=m,m=h;break e}else{n(m,h);break}else t(m,h);h=h.sibling}h=ia(g,m.mode,w),h.return=m,m=h}return s(m);case Mt:return T=g._init,b(m,h,T(g._payload),w)}if(Ar(g))return x(m,h,g,w);if(yr(g))return v(m,h,g,w);Vi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,h!==null&&h.tag===6?(n(m,h.sibling),h=i(h,g),h.return=m,m=h):(n(m,h),h=ra(g,m.mode,w),h.return=m,m=h),s(m)):n(m,h)}return b}var rr=Mh(!0),Lh=Mh(!1),Fo=nn(null),Bo=null,Wn=null,yc=null;function xc(){yc=Wn=Bo=null}function vc(e){var t=Fo.current;G(Fo),e._currentValue=t}function nl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Zn(e,t){Bo=e,yc=Wn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ee=!0),e.firstContext=null)}function Xe(e){var t=e._currentValue;if(yc!==e)if(e={context:e,memoizedValue:t,next:null},Wn===null){if(Bo===null)throw Error(j(308));Wn=e,Bo.dependencies={lanes:0,firstContext:e}}else Wn=Wn.next=e;return t}var mn=null;function wc(e){mn===null?mn=[e]:mn.push(e)}function zh(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,wc(t)):(n.next=i.next,i.next=n),t.interleaved=n,At(e,r)}function At(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function bc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dh(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ct(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,D&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,At(e,n)}return i=r.interleaved,i===null?(t.next=t,wc(r)):(t.next=i.next,i.next=t),r.interleaved=t,At(e,n)}function uo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sc(e,n)}}function rd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oo(e,t,n,r){var i=e.updateQueue;Lt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var p=e.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==s&&(l===null?p.firstBaseUpdate=u:l.next=u,p.lastBaseUpdate=c))}if(o!==null){var d=i.baseState;s=0,p=u=c=null,l=o;do{var f=l.lane,y=l.eventTime;if((r&f)===f){p!==null&&(p=p.next={eventTime:y,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=e,v=l;switch(f=t,y=n,v.tag){case 1:if(x=v.payload,typeof x=="function"){d=x.call(y,d,f);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=v.payload,f=typeof x=="function"?x.call(y,d,f):x,f==null)break e;d=Q({},d,f);break e;case 2:Lt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else y={eventTime:y,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(u=p=y,c=d):p=p.next=y,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(p===null&&(c=d),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=p,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);_n|=s,e.lanes=s,e.memoizedState=d}}function id(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(j(191,i));i.call(r)}}}var yi={},mt=nn(yi),ti=nn(yi),ni=nn(yi);function gn(e){if(e===yi)throw Error(j(174));return e}function kc(e,t){switch($(ni,t),$(ti,e),$(mt,yi),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:za(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=za(t,e)}G(mt),$(mt,t)}function ir(){G(mt),G(ti),G(ni)}function Vh(e){gn(ni.current);var t=gn(mt.current),n=za(t,e.type);t!==n&&($(ti,e),$(mt,n))}function Sc(e){ti.current===e&&(G(mt),G(ti))}var Y=nn(0);function Wo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qs=[];function Cc(){for(var e=0;e<qs.length;e++)qs[e]._workInProgressVersionPrimary=null;qs.length=0}var po=Et.ReactCurrentDispatcher,Zs=Et.ReactCurrentBatchConfig,jn=0,X=null,se=null,le=null,Uo=!1,zr=!1,ri=0,Dx=0;function ge(){throw Error(j(321))}function jc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!at(e[n],t[n]))return!1;return!0}function _c(e,t,n,r,i,o){if(jn=o,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,po.current=e===null||e.memoizedState===null?Ox:Wx,e=n(r,i),zr){o=0;do{if(zr=!1,ri=0,25<=o)throw Error(j(301));o+=1,le=se=null,t.updateQueue=null,po.current=Ux,e=n(r,i)}while(zr)}if(po.current=$o,t=se!==null&&se.next!==null,jn=0,le=se=X=null,Uo=!1,t)throw Error(j(300));return e}function Ac(){var e=ri!==0;return ri=0,e}function ut(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?X.memoizedState=le=e:le=le.next=e,le}function Qe(){if(se===null){var e=X.alternate;e=e!==null?e.memoizedState:null}else e=se.next;var t=le===null?X.memoizedState:le.next;if(t!==null)le=t,se=e;else{if(e===null)throw Error(j(310));se=e,e={memoizedState:se.memoizedState,baseState:se.baseState,baseQueue:se.baseQueue,queue:se.queue,next:null},le===null?X.memoizedState=le=e:le=le.next=e}return le}function ii(e,t){return typeof t=="function"?t(e):t}function Js(e){var t=Qe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=se,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var p=u.lane;if((jn&p)===p)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:p,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=d,s=r):c=c.next=d,X.lanes|=p,_n|=p}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,at(r,t.memoizedState)||(Ee=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,X.lanes|=o,_n|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ea(e){var t=Qe(),n=t.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);at(o,t.memoizedState)||(Ee=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Fh(){}function Bh(e,t){var n=X,r=Qe(),i=t(),o=!at(r.memoizedState,i);if(o&&(r.memoizedState=i,Ee=!0),r=r.queue,Tc(Uh.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,oi(9,Wh.bind(null,n,r,i,t),void 0,null),ce===null)throw Error(j(349));jn&30||Oh(n,t,i)}return i}function Oh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wh(e,t,n,r){t.value=n,t.getSnapshot=r,$h(t)&&Hh(e)}function Uh(e,t,n){return n(function(){$h(t)&&Hh(e)})}function $h(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!at(e,n)}catch{return!0}}function Hh(e){var t=At(e,1);t!==null&&ot(t,e,1,-1)}function od(e){var t=ut();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:e},t.queue=e,e=e.dispatch=Bx.bind(null,X,e),[t.memoizedState,e]}function oi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=X.updateQueue,t===null?(t={lastEffect:null,stores:null},X.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Gh(){return Qe().memoizedState}function fo(e,t,n,r){var i=ut();X.flags|=e,i.memoizedState=oi(1|t,n,void 0,r===void 0?null:r)}function gs(e,t,n,r){var i=Qe();r=r===void 0?null:r;var o=void 0;if(se!==null){var s=se.memoizedState;if(o=s.destroy,r!==null&&jc(r,s.deps)){i.memoizedState=oi(t,n,o,r);return}}X.flags|=e,i.memoizedState=oi(1|t,n,o,r)}function sd(e,t){return fo(8390656,8,e,t)}function Tc(e,t){return gs(2048,8,e,t)}function Kh(e,t){return gs(4,2,e,t)}function Yh(e,t){return gs(4,4,e,t)}function Xh(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qh(e,t,n){return n=n!=null?n.concat([e]):null,gs(4,4,Xh.bind(null,t,e),n)}function Ec(){}function qh(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zh(e,t){var n=Qe();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&jc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Jh(e,t,n){return jn&21?(at(n,t)||(n=ih(),X.lanes|=n,_n|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ee=!0),e.memoizedState=n)}function Vx(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Zs.transition;Zs.transition={};try{e(!1),t()}finally{B=n,Zs.transition=r}}function em(){return Qe().memoizedState}function Fx(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tm(e))nm(t,n);else if(n=zh(e,t,n,r),n!==null){var i=Se();ot(n,e,r,i),rm(n,t,r)}}function Bx(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tm(e))nm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,at(l,s)){var c=t.interleaved;c===null?(i.next=i,wc(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=zh(e,t,i,r),n!==null&&(i=Se(),ot(n,e,r,i),rm(n,t,r))}}function tm(e){var t=e.alternate;return e===X||t!==null&&t===X}function nm(e,t){zr=Uo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,sc(e,n)}}var $o={readContext:Xe,useCallback:ge,useContext:ge,useEffect:ge,useImperativeHandle:ge,useInsertionEffect:ge,useLayoutEffect:ge,useMemo:ge,useReducer:ge,useRef:ge,useState:ge,useDebugValue:ge,useDeferredValue:ge,useTransition:ge,useMutableSource:ge,useSyncExternalStore:ge,useId:ge,unstable_isNewReconciler:!1},Ox={readContext:Xe,useCallback:function(e,t){return ut().memoizedState=[e,t===void 0?null:t],e},useContext:Xe,useEffect:sd,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,fo(4194308,4,Xh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return fo(4194308,4,e,t)},useInsertionEffect:function(e,t){return fo(4,2,e,t)},useMemo:function(e,t){var n=ut();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ut();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fx.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=ut();return e={current:e},t.memoizedState=e},useState:od,useDebugValue:Ec,useDeferredValue:function(e){return ut().memoizedState=e},useTransition:function(){var e=od(!1),t=e[0];return e=Vx.bind(null,e[1]),ut().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=X,i=ut();if(K){if(n===void 0)throw Error(j(407));n=n()}else{if(n=t(),ce===null)throw Error(j(349));jn&30||Oh(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,sd(Uh.bind(null,r,o,e),[e]),r.flags|=2048,oi(9,Wh.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=ut(),t=ce.identifierPrefix;if(K){var n=St,r=kt;n=(r&~(1<<32-it(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Dx++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Wx={readContext:Xe,useCallback:qh,useContext:Xe,useEffect:Tc,useImperativeHandle:Qh,useInsertionEffect:Kh,useLayoutEffect:Yh,useMemo:Zh,useReducer:Js,useRef:Gh,useState:function(){return Js(ii)},useDebugValue:Ec,useDeferredValue:function(e){var t=Qe();return Jh(t,se.memoizedState,e)},useTransition:function(){var e=Js(ii)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Fh,useSyncExternalStore:Bh,useId:em,unstable_isNewReconciler:!1},Ux={readContext:Xe,useCallback:qh,useContext:Xe,useEffect:Tc,useImperativeHandle:Qh,useInsertionEffect:Kh,useLayoutEffect:Yh,useMemo:Zh,useReducer:ea,useRef:Gh,useState:function(){return ea(ii)},useDebugValue:Ec,useDeferredValue:function(e){var t=Qe();return se===null?t.memoizedState=e:Jh(t,se.memoizedState,e)},useTransition:function(){var e=ea(ii)[0],t=Qe().memoizedState;return[e,t]},useMutableSource:Fh,useSyncExternalStore:Bh,useId:em,unstable_isNewReconciler:!1};function tt(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ys={isMounted:function(e){return(e=e._reactInternals)?En(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Yt(e),o=Ct(r,i);o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(ot(t,e,i,r),uo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Se(),i=Yt(e),o=Ct(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Gt(e,o,i),t!==null&&(ot(t,e,i,r),uo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Se(),r=Yt(e),i=Ct(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gt(e,i,r),t!==null&&(ot(t,e,r,n),uo(t,e,r))}};function ad(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!qr(n,r)||!qr(i,o):!0}function im(e,t,n){var r=!1,i=Zt,o=t.contextType;return typeof o=="object"&&o!==null?o=Xe(o):(i=Ie(t)?Sn:ve.current,r=t.contextTypes,o=(r=r!=null)?tr(e,i):Zt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ys,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ld(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ys.enqueueReplaceState(t,t.state,null)}function il(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},bc(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=Xe(o):(o=Ie(t)?Sn:ve.current,i.context=tr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(rl(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ys.enqueueReplaceState(i,i.state,null),Oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function or(e,t){try{var n="",r=t;do n+=yy(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ta(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ol(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $x=typeof WeakMap=="function"?WeakMap:Map;function om(e,t,n){n=Ct(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Go||(Go=!0,ml=r),ol(e,t)},n}function sm(e,t,n){n=Ct(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ol(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){ol(e,t),typeof r!="function"&&(Kt===null?Kt=new Set([this]):Kt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function cd(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $x;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=iv.bind(null,e,t,n),t.then(e,e))}function ud(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dd(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ct(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var Hx=Et.ReactCurrentOwner,Ee=!1;function we(e,t,n,r){t.child=e===null?Lh(t,null,n,r):rr(t,e.child,n,r)}function pd(e,t,n,r,i){n=n.render;var o=t.ref;return Zn(t,i),r=_c(e,t,n,r,o,i),n=Ac(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(K&&n&&hc(t),t.flags|=1,we(e,t,r,i),t.child)}function fd(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Dc(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,am(e,t,o,r,i)):(e=yo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:qr,n(s,r)&&e.ref===t.ref)return Tt(e,t,i)}return t.flags|=1,e=Xt(o,r),e.ref=t.ref,e.return=t,t.child=e}function am(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(qr(o,r)&&e.ref===t.ref)if(Ee=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ee=!0);else return t.lanes=e.lanes,Tt(e,t,i)}return sl(e,t,n,r,i)}function lm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$($n,Le),Le|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$($n,Le),Le|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,$($n,Le),Le|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,$($n,Le),Le|=r;return we(e,t,i,n),t.child}function cm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function sl(e,t,n,r,i){var o=Ie(n)?Sn:ve.current;return o=tr(t,o),Zn(t,i),n=_c(e,t,n,r,o,i),r=Ac(),e!==null&&!Ee?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Tt(e,t,i)):(K&&r&&hc(t),t.flags|=1,we(e,t,n,i),t.child)}function hd(e,t,n,r,i){if(Ie(n)){var o=!0;zo(t)}else o=!1;if(Zn(t,i),t.stateNode===null)ho(e,t),im(t,n,r),il(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=Xe(u):(u=Ie(n)?Sn:ve.current,u=tr(t,u));var p=n.getDerivedStateFromProps,d=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&ld(t,s,r,u),Lt=!1;var f=t.memoizedState;s.state=f,Oo(t,r,s,i),c=t.memoizedState,l!==r||f!==c||Pe.current||Lt?(typeof p=="function"&&(rl(t,n,p,r),c=t.memoizedState),(l=Lt||ad(t,n,l,r,f,c,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Dh(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:tt(t.type,l),s.props=u,d=t.pendingProps,f=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=Xe(c):(c=Ie(n)?Sn:ve.current,c=tr(t,c));var y=n.getDerivedStateFromProps;(p=typeof y=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||f!==c)&&ld(t,s,r,c),Lt=!1,f=t.memoizedState,s.state=f,Oo(t,r,s,i);var x=t.memoizedState;l!==d||f!==x||Pe.current||Lt?(typeof y=="function"&&(rl(t,n,y,r),x=t.memoizedState),(u=Lt||ad(t,n,u,r,f,x,c)||!1)?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,x,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,x,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),s.props=r,s.state=x,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return al(e,t,n,r,o,i)}function al(e,t,n,r,i,o){cm(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Ju(t,n,!1),Tt(e,t,o);r=t.stateNode,Hx.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=rr(t,e.child,null,o),t.child=rr(t,null,l,o)):we(e,t,l,o),t.memoizedState=r.state,i&&Ju(t,n,!0),t.child}function um(e){var t=e.stateNode;t.pendingContext?Zu(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Zu(e,t.context,!1),kc(e,t.containerInfo)}function md(e,t,n,r,i){return nr(),gc(i),t.flags|=256,we(e,t,n,r),t.child}var ll={dehydrated:null,treeContext:null,retryLane:0};function cl(e){return{baseLanes:e,cachePool:null,transitions:null}}function dm(e,t,n){var r=t.pendingProps,i=Y.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),$(Y,i&1),e===null)return tl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ws(s,r,0,null),e=wn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=cl(n),t.memoizedState=ll,e):Pc(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Gx(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Xt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Xt(l,o):(o=wn(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?cl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=ll,r}return o=e.child,e=o.sibling,r=Xt(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Pc(e,t){return t=ws({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fi(e,t,n,r){return r!==null&&gc(r),rr(t,e.child,null,n),e=Pc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Gx(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=ta(Error(j(422))),Fi(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ws({mode:"visible",children:r.children},i,0,null),o=wn(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&rr(t,e.child,null,s),t.child.memoizedState=cl(s),t.memoizedState=ll,o);if(!(t.mode&1))return Fi(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(j(419)),r=ta(o,r,void 0),Fi(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ee||l){if(r=ce,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,At(e,i),ot(r,e,i,-1))}return zc(),r=ta(Error(j(421))),Fi(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=ov.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ze=Ht(i.nextSibling),De=t,K=!0,rt=null,e!==null&&(Ue[$e++]=kt,Ue[$e++]=St,Ue[$e++]=Cn,kt=e.id,St=e.overflow,Cn=t),t=Pc(t,r.children),t.flags|=4096,t)}function gd(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nl(e.return,t,n)}function na(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function pm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(we(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gd(e,n,t);else if(e.tag===19)gd(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(Y,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Wo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),na(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}na(t,!0,n,null,o);break;case"together":na(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ho(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Tt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),_n|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(j(153));if(t.child!==null){for(e=t.child,n=Xt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Kx(e,t,n){switch(t.tag){case 3:um(t),nr();break;case 5:Vh(t);break;case 1:Ie(t.type)&&zo(t);break;case 4:kc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;$(Fo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?($(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?dm(e,t,n):($(Y,Y.current&1),e=Tt(e,t,n),e!==null?e.sibling:null);$(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return pm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,lm(e,t,n)}return Tt(e,t,n)}var fm,ul,hm,mm;fm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ul=function(){};hm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,gn(mt.current);var o=null;switch(n){case"input":i=Na(e,i),r=Na(e,r),o=[];break;case"select":i=Q({},i,{value:void 0}),r=Q({},r,{value:void 0}),o=[];break;case"textarea":i=La(e,i),r=La(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mo)}Da(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&($r.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&($r.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&H("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};mm=function(e,t,n,r){n!==r&&(t.flags|=4)};function Sr(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Yx(e,t,n){var r=t.pendingProps;switch(mc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ye(t),null;case 1:return Ie(t.type)&&Lo(),ye(t),null;case 3:return r=t.stateNode,ir(),G(Pe),G(ve),Cc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,rt!==null&&(xl(rt),rt=null))),ul(e,t),ye(t),null;case 5:Sc(t);var i=gn(ni.current);if(n=t.type,e!==null&&t.stateNode!=null)hm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(j(166));return ye(t),null}if(e=gn(mt.current),Di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ft]=t,r[ei]=o,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(i=0;i<Er.length;i++)H(Er[i],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":ju(r,o),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},H("invalid",r);break;case"textarea":Au(r,o),H("invalid",r)}Da(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&zi(r.textContent,l,e),i=["children",""+l]):$r.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&H("scroll",r)}switch(n){case"input":Ti(r),_u(r,o,!0);break;case"textarea":Ti(r),Tu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Mo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Uf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ft]=t,e[ei]=r,fm(e,t,!1,!1),t.stateNode=e;e:{switch(s=Va(n,r),n){case"dialog":H("cancel",e),H("close",e),i=r;break;case"iframe":case"object":case"embed":H("load",e),i=r;break;case"video":case"audio":for(i=0;i<Er.length;i++)H(Er[i],e);i=r;break;case"source":H("error",e),i=r;break;case"img":case"image":case"link":H("error",e),H("load",e),i=r;break;case"details":H("toggle",e),i=r;break;case"input":ju(e,r),i=Na(e,r),H("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Q({},r,{value:void 0}),H("invalid",e);break;case"textarea":Au(e,r),i=La(e,r),H("invalid",e);break;default:i=r}Da(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?Gf(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&$f(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Hr(e,c):typeof c=="number"&&Hr(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&($r.hasOwnProperty(o)?c!=null&&o==="onScroll"&&H("scroll",e):c!=null&&ec(e,o,c,s))}switch(n){case"input":Ti(e),_u(e,r,!1);break;case"textarea":Ti(e),Tu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?Yn(e,!!r.multiple,o,!1):r.defaultValue!=null&&Yn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ye(t),null;case 6:if(e&&t.stateNode!=null)mm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(j(166));if(n=gn(ni.current),gn(mt.current),Di(t)){if(r=t.stateNode,n=t.memoizedProps,r[ft]=t,(o=r.nodeValue!==n)&&(e=De,e!==null))switch(e.tag){case 3:zi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&zi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ft]=t,t.stateNode=r}return ye(t),null;case 13:if(G(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&ze!==null&&t.mode&1&&!(t.flags&128))Rh(),nr(),t.flags|=98560,o=!1;else if(o=Di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(j(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(j(317));o[ft]=t}else nr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ye(t),o=!1}else rt!==null&&(xl(rt),rt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?ae===0&&(ae=3):zc())),t.updateQueue!==null&&(t.flags|=4),ye(t),null);case 4:return ir(),ul(e,t),e===null&&Zr(t.stateNode.containerInfo),ye(t),null;case 10:return vc(t.type._context),ye(t),null;case 17:return Ie(t.type)&&Lo(),ye(t),null;case 19:if(G(Y),o=t.memoizedState,o===null)return ye(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)Sr(o,!1);else{if(ae!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Wo(e),s!==null){for(t.flags|=128,Sr(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(Y,Y.current&1|2),t.child}e=e.sibling}o.tail!==null&&J()>sr&&(t.flags|=128,r=!0,Sr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Wo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Sr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!K)return ye(t),null}else 2*J()-o.renderingStartTime>sr&&n!==1073741824&&(t.flags|=128,r=!0,Sr(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=J(),t.sibling=null,n=Y.current,$(Y,r?n&1|2:n&1),t):(ye(t),null);case 22:case 23:return Lc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Le&1073741824&&(ye(t),t.subtreeFlags&6&&(t.flags|=8192)):ye(t),null;case 24:return null;case 25:return null}throw Error(j(156,t.tag))}function Xx(e,t){switch(mc(t),t.tag){case 1:return Ie(t.type)&&Lo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ir(),G(Pe),G(ve),Cc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Sc(t),null;case 13:if(G(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(j(340));nr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(Y),null;case 4:return ir(),null;case 10:return vc(t.type._context),null;case 22:case 23:return Lc(),null;case 24:return null;default:return null}}var Bi=!1,xe=!1,Qx=typeof WeakSet=="function"?WeakSet:Set,I=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Z(e,t,r)}else n.current=null}function dl(e,t,n){try{n()}catch(r){Z(e,t,r)}}var yd=!1;function qx(e,t){if(Ya=Io,e=wh(),fc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,p=0,d=e,f=null;t:for(;;){for(var y;d!==n||i!==0&&d.nodeType!==3||(l=s+i),d!==o||r!==0&&d.nodeType!==3||(c=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(y=d.firstChild)!==null;)f=d,d=y;for(;;){if(d===e)break t;if(f===n&&++u===i&&(l=s),f===o&&++p===r&&(c=s),(y=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=y}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xa={focusedElem:e,selectionRange:n},Io=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var v=x.memoizedProps,b=x.memoizedState,m=t.stateNode,h=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:tt(t.type,v),b);m.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(w){Z(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return x=yd,yd=!1,x}function Dr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&dl(t,n,o)}i=i.next}while(i!==r)}}function xs(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function pl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function gm(e){var t=e.alternate;t!==null&&(e.alternate=null,gm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ft],delete t[ei],delete t[Za],delete t[Rx],delete t[Mx])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ym(e){return e.tag===5||e.tag===3||e.tag===4}function xd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ym(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mo));else if(r!==4&&(e=e.child,e!==null))for(fl(e,t,n),e=e.sibling;e!==null;)fl(e,t,n),e=e.sibling}function hl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(hl(e,t,n),e=e.sibling;e!==null;)hl(e,t,n),e=e.sibling}var ue=null,nt=!1;function Pt(e,t,n){for(n=n.child;n!==null;)xm(e,t,n),n=n.sibling}function xm(e,t,n){if(ht&&typeof ht.onCommitFiberUnmount=="function")try{ht.onCommitFiberUnmount(us,n)}catch{}switch(n.tag){case 5:xe||Un(n,t);case 6:var r=ue,i=nt;ue=null,Pt(e,t,n),ue=r,nt=i,ue!==null&&(nt?(e=ue,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ue.removeChild(n.stateNode));break;case 18:ue!==null&&(nt?(e=ue,n=n.stateNode,e.nodeType===8?Xs(e.parentNode,n):e.nodeType===1&&Xs(e,n),Xr(e)):Xs(ue,n.stateNode));break;case 4:r=ue,i=nt,ue=n.stateNode.containerInfo,nt=!0,Pt(e,t,n),ue=r,nt=i;break;case 0:case 11:case 14:case 15:if(!xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&dl(n,t,s),i=i.next}while(i!==r)}Pt(e,t,n);break;case 1:if(!xe&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Z(n,t,l)}Pt(e,t,n);break;case 21:Pt(e,t,n);break;case 22:n.mode&1?(xe=(r=xe)||n.memoizedState!==null,Pt(e,t,n),xe=r):Pt(e,t,n);break;default:Pt(e,t,n)}}function vd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Qx),t.forEach(function(r){var i=sv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ue=l.stateNode,nt=!1;break e;case 3:ue=l.stateNode.containerInfo,nt=!0;break e;case 4:ue=l.stateNode.containerInfo,nt=!0;break e}l=l.return}if(ue===null)throw Error(j(160));xm(o,s,i),ue=null,nt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Z(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vm(t,e),t=t.sibling}function vm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ze(t,e),ct(e),r&4){try{Dr(3,e,e.return),xs(3,e)}catch(v){Z(e,e.return,v)}try{Dr(5,e,e.return)}catch(v){Z(e,e.return,v)}}break;case 1:Ze(t,e),ct(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(Ze(t,e),ct(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var i=e.stateNode;try{Hr(i,"")}catch(v){Z(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Of(i,o),Va(l,s);var u=Va(l,o);for(s=0;s<c.length;s+=2){var p=c[s],d=c[s+1];p==="style"?Gf(i,d):p==="dangerouslySetInnerHTML"?$f(i,d):p==="children"?Hr(i,d):ec(i,p,d,u)}switch(l){case"input":Ra(i,o);break;case"textarea":Wf(i,o);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var y=o.value;y!=null?Yn(i,!!o.multiple,y,!1):f!==!!o.multiple&&(o.defaultValue!=null?Yn(i,!!o.multiple,o.defaultValue,!0):Yn(i,!!o.multiple,o.multiple?[]:"",!1))}i[ei]=o}catch(v){Z(e,e.return,v)}}break;case 6:if(Ze(t,e),ct(e),r&4){if(e.stateNode===null)throw Error(j(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){Z(e,e.return,v)}}break;case 3:if(Ze(t,e),ct(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Xr(t.containerInfo)}catch(v){Z(e,e.return,v)}break;case 4:Ze(t,e),ct(e);break;case 13:Ze(t,e),ct(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Rc=J())),r&4&&vd(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(xe=(u=xe)||p,Ze(t,e),xe=u):Ze(t,e),ct(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!p&&e.mode&1)for(I=e,p=e.child;p!==null;){for(d=I=p;I!==null;){switch(f=I,y=f.child,f.tag){case 0:case 11:case 14:case 15:Dr(4,f,f.return);break;case 1:Un(f,f.return);var x=f.stateNode;if(typeof x.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(v){Z(r,n,v)}}break;case 5:Un(f,f.return);break;case 22:if(f.memoizedState!==null){bd(d);continue}}y!==null?(y.return=f,I=y):bd(d)}p=p.sibling}e:for(p=null,d=e;;){if(d.tag===5){if(p===null){p=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,c=d.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Hf("display",s))}catch(v){Z(e,e.return,v)}}}else if(d.tag===6){if(p===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Z(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;p===d&&(p=null),d=d.return}p===d&&(p=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Ze(t,e),ct(e),r&4&&vd(e);break;case 21:break;default:Ze(t,e),ct(e)}}function ct(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ym(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Hr(i,""),r.flags&=-33);var o=xd(e);hl(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=xd(e);fl(e,l,s);break;default:throw Error(j(161))}}catch(c){Z(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zx(e,t,n){I=e,wm(e)}function wm(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var i=I,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Bi;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||xe;l=Bi;var u=xe;if(Bi=s,(xe=c)&&!u)for(I=i;I!==null;)s=I,c=s.child,s.tag===22&&s.memoizedState!==null?kd(i):c!==null?(c.return=s,I=c):kd(i);for(;o!==null;)I=o,wm(o),o=o.sibling;I=i,Bi=l,xe=u}wd(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,I=o):wd(e)}}function wd(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:xe||xs(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!xe)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:tt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&id(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}id(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var p=u.memoizedState;if(p!==null){var d=p.dehydrated;d!==null&&Xr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}xe||t.flags&512&&pl(t)}catch(f){Z(t,t.return,f)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function bd(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function kd(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{xs(4,t)}catch(c){Z(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Z(t,i,c)}}var o=t.return;try{pl(t)}catch(c){Z(t,o,c)}break;case 5:var s=t.return;try{pl(t)}catch(c){Z(t,s,c)}}}catch(c){Z(t,t.return,c)}if(t===e){I=null;break}var l=t.sibling;if(l!==null){l.return=t.return,I=l;break}I=t.return}}var Jx=Math.ceil,Ho=Et.ReactCurrentDispatcher,Ic=Et.ReactCurrentOwner,Ke=Et.ReactCurrentBatchConfig,D=0,ce=null,re=null,he=0,Le=0,$n=nn(0),ae=0,si=null,_n=0,vs=0,Nc=0,Vr=null,Te=null,Rc=0,sr=1/0,wt=null,Go=!1,ml=null,Kt=null,Oi=!1,Ft=null,Ko=0,Fr=0,gl=null,mo=-1,go=0;function Se(){return D&6?J():mo!==-1?mo:mo=J()}function Yt(e){return e.mode&1?D&2&&he!==0?he&-he:zx.transition!==null?(go===0&&(go=ih()),go):(e=B,e!==0||(e=window.event,e=e===void 0?16:dh(e.type)),e):1}function ot(e,t,n,r){if(50<Fr)throw Fr=0,gl=null,Error(j(185));hi(e,n,r),(!(D&2)||e!==ce)&&(e===ce&&(!(D&2)&&(vs|=n),ae===4&&Dt(e,he)),Ne(e,r),n===1&&D===0&&!(t.mode&1)&&(sr=J()+500,ms&&rn()))}function Ne(e,t){var n=e.callbackNode;zy(e,t);var r=Po(e,e===ce?he:0);if(r===0)n!==null&&Iu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Iu(n),t===1)e.tag===0?Lx(Sd.bind(null,e)):Ph(Sd.bind(null,e)),Ix(function(){!(D&6)&&rn()}),n=null;else{switch(oh(r)){case 1:n=oc;break;case 4:n=nh;break;case 16:n=Eo;break;case 536870912:n=rh;break;default:n=Eo}n=Tm(n,bm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bm(e,t){if(mo=-1,go=0,D&6)throw Error(j(327));var n=e.callbackNode;if(Jn()&&e.callbackNode!==n)return null;var r=Po(e,e===ce?he:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Yo(e,r);else{t=r;var i=D;D|=2;var o=Sm();(ce!==e||he!==t)&&(wt=null,sr=J()+500,vn(e,t));do try{nv();break}catch(l){km(e,l)}while(!0);xc(),Ho.current=o,D=i,re!==null?t=0:(ce=null,he=0,t=ae)}if(t!==0){if(t===2&&(i=Ua(e),i!==0&&(r=i,t=yl(e,i))),t===1)throw n=si,vn(e,0),Dt(e,r),Ne(e,J()),n;if(t===6)Dt(e,r);else{if(i=e.current.alternate,!(r&30)&&!ev(i)&&(t=Yo(e,r),t===2&&(o=Ua(e),o!==0&&(r=o,t=yl(e,o))),t===1))throw n=si,vn(e,0),Dt(e,r),Ne(e,J()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(j(345));case 2:pn(e,Te,wt);break;case 3:if(Dt(e,r),(r&130023424)===r&&(t=Rc+500-J(),10<t)){if(Po(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=qa(pn.bind(null,e,Te,wt),t);break}pn(e,Te,wt);break;case 4:if(Dt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-it(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jx(r/1960))-r,10<r){e.timeoutHandle=qa(pn.bind(null,e,Te,wt),r);break}pn(e,Te,wt);break;case 5:pn(e,Te,wt);break;default:throw Error(j(329))}}}return Ne(e,J()),e.callbackNode===n?bm.bind(null,e):null}function yl(e,t){var n=Vr;return e.current.memoizedState.isDehydrated&&(vn(e,t).flags|=256),e=Yo(e,t),e!==2&&(t=Te,Te=n,t!==null&&xl(t)),e}function xl(e){Te===null?Te=e:Te.push.apply(Te,e)}function ev(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!at(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Nc,t&=~vs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function Sd(e){if(D&6)throw Error(j(327));Jn();var t=Po(e,0);if(!(t&1))return Ne(e,J()),null;var n=Yo(e,t);if(e.tag!==0&&n===2){var r=Ua(e);r!==0&&(t=r,n=yl(e,r))}if(n===1)throw n=si,vn(e,0),Dt(e,t),Ne(e,J()),n;if(n===6)throw Error(j(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pn(e,Te,wt),Ne(e,J()),null}function Mc(e,t){var n=D;D|=1;try{return e(t)}finally{D=n,D===0&&(sr=J()+500,ms&&rn())}}function An(e){Ft!==null&&Ft.tag===0&&!(D&6)&&Jn();var t=D;D|=1;var n=Ke.transition,r=B;try{if(Ke.transition=null,B=1,e)return e()}finally{B=r,Ke.transition=n,D=t,!(D&6)&&rn()}}function Lc(){Le=$n.current,G($n)}function vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Px(n)),re!==null)for(n=re.return;n!==null;){var r=n;switch(mc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Lo();break;case 3:ir(),G(Pe),G(ve),Cc();break;case 5:Sc(r);break;case 4:ir();break;case 13:G(Y);break;case 19:G(Y);break;case 10:vc(r.type._context);break;case 22:case 23:Lc()}n=n.return}if(ce=e,re=e=Xt(e.current,null),he=Le=t,ae=0,si=null,Nc=vs=_n=0,Te=Vr=null,mn!==null){for(t=0;t<mn.length;t++)if(n=mn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}mn=null}return e}function km(e,t){do{var n=re;try{if(xc(),po.current=$o,Uo){for(var r=X.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Uo=!1}if(jn=0,le=se=X=null,zr=!1,ri=0,Ic.current=null,n===null||n.return===null){ae=1,si=t,re=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=he,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,p=l,d=p.tag;if(!(p.mode&1)&&(d===0||d===11||d===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var y=ud(s);if(y!==null){y.flags&=-257,dd(y,s,l,o,t),y.mode&1&&cd(o,u,t),t=y,c=u;var x=t.updateQueue;if(x===null){var v=new Set;v.add(c),t.updateQueue=v}else x.add(c);break e}else{if(!(t&1)){cd(o,u,t),zc();break e}c=Error(j(426))}}else if(K&&l.mode&1){var b=ud(s);if(b!==null){!(b.flags&65536)&&(b.flags|=256),dd(b,s,l,o,t),gc(or(c,l));break e}}o=c=or(c,l),ae!==4&&(ae=2),Vr===null?Vr=[o]:Vr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=om(o,c,t);rd(o,m);break e;case 1:l=c;var h=o.type,g=o.stateNode;if(!(o.flags&128)&&(typeof h.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Kt===null||!Kt.has(g)))){o.flags|=65536,t&=-t,o.lanes|=t;var w=sm(o,l,t);rd(o,w);break e}}o=o.return}while(o!==null)}jm(n)}catch(S){t=S,re===n&&n!==null&&(re=n=n.return);continue}break}while(!0)}function Sm(){var e=Ho.current;return Ho.current=$o,e===null?$o:e}function zc(){(ae===0||ae===3||ae===2)&&(ae=4),ce===null||!(_n&268435455)&&!(vs&268435455)||Dt(ce,he)}function Yo(e,t){var n=D;D|=2;var r=Sm();(ce!==e||he!==t)&&(wt=null,vn(e,t));do try{tv();break}catch(i){km(e,i)}while(!0);if(xc(),D=n,Ho.current=r,re!==null)throw Error(j(261));return ce=null,he=0,ae}function tv(){for(;re!==null;)Cm(re)}function nv(){for(;re!==null&&!Ay();)Cm(re)}function Cm(e){var t=Am(e.alternate,e,Le);e.memoizedProps=e.pendingProps,t===null?jm(e):re=t,Ic.current=null}function jm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Xx(n,t),n!==null){n.flags&=32767,re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ae=6,re=null;return}}else if(n=Yx(n,t,Le),n!==null){re=n;return}if(t=t.sibling,t!==null){re=t;return}re=t=e}while(t!==null);ae===0&&(ae=5)}function pn(e,t,n){var r=B,i=Ke.transition;try{Ke.transition=null,B=1,rv(e,t,n,r)}finally{Ke.transition=i,B=r}return null}function rv(e,t,n,r){do Jn();while(Ft!==null);if(D&6)throw Error(j(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(j(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Dy(e,o),e===ce&&(re=ce=null,he=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Oi||(Oi=!0,Tm(Eo,function(){return Jn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Ke.transition,Ke.transition=null;var s=B;B=1;var l=D;D|=4,Ic.current=null,qx(e,n),vm(n,e),Sx(Xa),Io=!!Ya,Xa=Ya=null,e.current=n,Zx(n),Ty(),D=l,B=s,Ke.transition=o}else e.current=n;if(Oi&&(Oi=!1,Ft=e,Ko=i),o=e.pendingLanes,o===0&&(Kt=null),Iy(n.stateNode),Ne(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Go)throw Go=!1,e=ml,ml=null,e;return Ko&1&&e.tag!==0&&Jn(),o=e.pendingLanes,o&1?e===gl?Fr++:(Fr=0,gl=e):Fr=0,rn(),null}function Jn(){if(Ft!==null){var e=oh(Ko),t=Ke.transition,n=B;try{if(Ke.transition=null,B=16>e?16:e,Ft===null)var r=!1;else{if(e=Ft,Ft=null,Ko=0,D&6)throw Error(j(331));var i=D;for(D|=4,I=e.current;I!==null;){var o=I,s=o.child;if(I.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(I=u;I!==null;){var p=I;switch(p.tag){case 0:case 11:case 15:Dr(8,p,o)}var d=p.child;if(d!==null)d.return=p,I=d;else for(;I!==null;){p=I;var f=p.sibling,y=p.return;if(gm(p),p===u){I=null;break}if(f!==null){f.return=y,I=f;break}I=y}}}var x=o.alternate;if(x!==null){var v=x.child;if(v!==null){x.child=null;do{var b=v.sibling;v.sibling=null,v=b}while(v!==null)}}I=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,I=s;else e:for(;I!==null;){if(o=I,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Dr(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,I=m;break e}I=o.return}}var h=e.current;for(I=h;I!==null;){s=I;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,I=g;else e:for(s=h;I!==null;){if(l=I,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xs(9,l)}}catch(S){Z(l,l.return,S)}if(l===s){I=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,I=w;break e}I=l.return}}if(D=i,rn(),ht&&typeof ht.onPostCommitFiberRoot=="function")try{ht.onPostCommitFiberRoot(us,e)}catch{}r=!0}return r}finally{B=n,Ke.transition=t}}return!1}function Cd(e,t,n){t=or(n,t),t=om(e,t,1),e=Gt(e,t,1),t=Se(),e!==null&&(hi(e,1,t),Ne(e,t))}function Z(e,t,n){if(e.tag===3)Cd(e,e,n);else for(;t!==null;){if(t.tag===3){Cd(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Kt===null||!Kt.has(r))){e=or(n,e),e=sm(t,e,1),t=Gt(t,e,1),e=Se(),t!==null&&(hi(t,1,e),Ne(t,e));break}}t=t.return}}function iv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Se(),e.pingedLanes|=e.suspendedLanes&n,ce===e&&(he&n)===n&&(ae===4||ae===3&&(he&130023424)===he&&500>J()-Rc?vn(e,0):Nc|=n),Ne(e,t)}function _m(e,t){t===0&&(e.mode&1?(t=Ii,Ii<<=1,!(Ii&130023424)&&(Ii=4194304)):t=1);var n=Se();e=At(e,t),e!==null&&(hi(e,t,n),Ne(e,n))}function ov(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),_m(e,n)}function sv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(t),_m(e,n)}var Am;Am=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Pe.current)Ee=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ee=!1,Kx(e,t,n);Ee=!!(e.flags&131072)}else Ee=!1,K&&t.flags&1048576&&Ih(t,Vo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ho(e,t),e=t.pendingProps;var i=tr(t,ve.current);Zn(t,n),i=_c(null,t,r,e,i,n);var o=Ac();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(o=!0,zo(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,bc(t),i.updater=ys,t.stateNode=i,i._reactInternals=t,il(t,r,e,n),t=al(null,t,r,!0,o,n)):(t.tag=0,K&&o&&hc(t),we(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ho(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lv(r),e=tt(r,e),i){case 0:t=sl(null,t,r,e,n);break e;case 1:t=hd(null,t,r,e,n);break e;case 11:t=pd(null,t,r,e,n);break e;case 14:t=fd(null,t,r,tt(r.type,e),n);break e}throw Error(j(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),sl(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),hd(e,t,r,i,n);case 3:e:{if(um(t),e===null)throw Error(j(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Dh(e,t),Oo(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=or(Error(j(423)),t),t=md(e,t,r,n,i);break e}else if(r!==i){i=or(Error(j(424)),t),t=md(e,t,r,n,i);break e}else for(ze=Ht(t.stateNode.containerInfo.firstChild),De=t,K=!0,rt=null,n=Lh(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(nr(),r===i){t=Tt(e,t,n);break e}we(e,t,r,n)}t=t.child}return t;case 5:return Vh(t),e===null&&tl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Qa(r,i)?s=null:o!==null&&Qa(r,o)&&(t.flags|=32),cm(e,t),we(e,t,s,n),t.child;case 6:return e===null&&tl(t),null;case 13:return dm(e,t,n);case 4:return kc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=rr(t,null,r,n):we(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),pd(e,t,r,i,n);case 7:return we(e,t,t.pendingProps,n),t.child;case 8:return we(e,t,t.pendingProps.children,n),t.child;case 12:return we(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,$(Fo,r._currentValue),r._currentValue=s,o!==null)if(at(o.value,s)){if(o.children===i.children&&!Pe.current){t=Tt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=Ct(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var p=u.pending;p===null?c.next=c:(c.next=p.next,p.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),nl(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(j(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),nl(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}we(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Zn(t,n),i=Xe(i),r=r(i),t.flags|=1,we(e,t,r,n),t.child;case 14:return r=t.type,i=tt(r,t.pendingProps),i=tt(r.type,i),fd(e,t,r,i,n);case 15:return am(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:tt(r,i),ho(e,t),t.tag=1,Ie(r)?(e=!0,zo(t)):e=!1,Zn(t,n),im(t,r,i),il(t,r,i,n),al(null,t,r,!0,e,n);case 19:return pm(e,t,n);case 22:return lm(e,t,n)}throw Error(j(156,t.tag))};function Tm(e,t){return th(e,t)}function av(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function He(e,t,n,r){return new av(e,t,n,r)}function Dc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lv(e){if(typeof e=="function")return Dc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===nc)return 11;if(e===rc)return 14}return 2}function Xt(e,t){var n=e.alternate;return n===null?(n=He(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function yo(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Dc(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Mn:return wn(n.children,i,o,t);case tc:s=8,i|=8;break;case Ta:return e=He(12,n,t,i|2),e.elementType=Ta,e.lanes=o,e;case Ea:return e=He(13,n,t,i),e.elementType=Ea,e.lanes=o,e;case Pa:return e=He(19,n,t,i),e.elementType=Pa,e.lanes=o,e;case Vf:return ws(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case zf:s=10;break e;case Df:s=9;break e;case nc:s=11;break e;case rc:s=14;break e;case Mt:s=16,r=null;break e}throw Error(j(130,e==null?e:typeof e,""))}return t=He(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function wn(e,t,n,r){return e=He(7,e,r,t),e.lanes=n,e}function ws(e,t,n,r){return e=He(22,e,r,t),e.elementType=Vf,e.lanes=n,e.stateNode={isHidden:!1},e}function ra(e,t,n){return e=He(6,e,null,t),e.lanes=n,e}function ia(e,t,n){return t=He(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function cv(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Vs(0),this.expirationTimes=Vs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Vs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vc(e,t,n,r,i,o,s,l,c){return e=new cv(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=He(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bc(o),e}function uv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Em(e){if(!e)return Zt;e=e._reactInternals;e:{if(En(e)!==e||e.tag!==1)throw Error(j(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(j(171))}if(e.tag===1){var n=e.type;if(Ie(n))return Eh(e,n,t)}return t}function Pm(e,t,n,r,i,o,s,l,c){return e=Vc(n,r,!0,e,i,o,s,l,c),e.context=Em(null),n=e.current,r=Se(),i=Yt(n),o=Ct(r,i),o.callback=t??null,Gt(n,o,i),e.current.lanes=i,hi(e,i,r),Ne(e,r),e}function bs(e,t,n,r){var i=t.current,o=Se(),s=Yt(i);return n=Em(n),t.context===null?t.context=n:t.pendingContext=n,t=Ct(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(i,t,s),e!==null&&(ot(e,i,s,o),uo(e,i,s)),s}function Xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function jd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Fc(e,t){jd(e,t),(e=e.alternate)&&jd(e,t)}function dv(){return null}var Im=typeof reportError=="function"?reportError:function(e){console.error(e)};function Bc(e){this._internalRoot=e}ks.prototype.render=Bc.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(j(409));bs(e,t,null,null)};ks.prototype.unmount=Bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;An(function(){bs(null,e,null,null)}),t[_t]=null}};function ks(e){this._internalRoot=e}ks.prototype.unstable_scheduleHydration=function(e){if(e){var t=lh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<zt.length&&t!==0&&t<zt[n].priority;n++);zt.splice(n,0,e),n===0&&uh(e)}};function Oc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function _d(){}function pv(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Xo(s);o.call(u)}}var s=Pm(t,r,e,0,null,!1,!1,"",_d);return e._reactRootContainer=s,e[_t]=s.current,Zr(e.nodeType===8?e.parentNode:e),An(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Xo(c);l.call(u)}}var c=Vc(e,0,!1,null,null,!1,!1,"",_d);return e._reactRootContainer=c,e[_t]=c.current,Zr(e.nodeType===8?e.parentNode:e),An(function(){bs(t,c,n,r)}),c}function Cs(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=Xo(s);l.call(c)}}bs(t,s,e,i)}else s=pv(n,t,e,i,r);return Xo(s)}sh=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Tr(t.pendingLanes);n!==0&&(sc(t,n|1),Ne(t,J()),!(D&6)&&(sr=J()+500,rn()))}break;case 13:An(function(){var r=At(e,1);if(r!==null){var i=Se();ot(r,e,1,i)}}),Fc(e,1)}};ac=function(e){if(e.tag===13){var t=At(e,134217728);if(t!==null){var n=Se();ot(t,e,134217728,n)}Fc(e,134217728)}};ah=function(e){if(e.tag===13){var t=Yt(e),n=At(e,t);if(n!==null){var r=Se();ot(n,e,t,r)}Fc(e,t)}};lh=function(){return B};ch=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};Ba=function(e,t,n){switch(t){case"input":if(Ra(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=hs(r);if(!i)throw Error(j(90));Bf(r),Ra(r,i)}}}break;case"textarea":Wf(e,n);break;case"select":t=n.value,t!=null&&Yn(e,!!n.multiple,t,!1)}};Xf=Mc;Qf=An;var fv={usingClientEntryPoint:!1,Events:[gi,Vn,hs,Kf,Yf,Mc]},Cr={findFiberByHostInstance:hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hv={bundleType:Cr.bundleType,version:Cr.version,rendererPackageName:Cr.rendererPackageName,rendererConfig:Cr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Et.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Jf(e),e===null?null:e.stateNode},findFiberByHostInstance:Cr.findFiberByHostInstance||dv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wi.isDisabled&&Wi.supportsFiber)try{us=Wi.inject(hv),ht=Wi}catch{}}Be.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;Be.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(t))throw Error(j(200));return uv(e,t,null,n)};Be.createRoot=function(e,t){if(!Oc(e))throw Error(j(299));var n=!1,r="",i=Im;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vc(e,1,!1,null,null,n,!1,r,i),e[_t]=t.current,Zr(e.nodeType===8?e.parentNode:e),new Bc(t)};Be.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(j(188)):(e=Object.keys(e).join(","),Error(j(268,e)));return e=Jf(t),e=e===null?null:e.stateNode,e};Be.flushSync=function(e){return An(e)};Be.hydrate=function(e,t,n){if(!Ss(t))throw Error(j(200));return Cs(null,e,t,!0,n)};Be.hydrateRoot=function(e,t,n){if(!Oc(e))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=Im;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Pm(t,null,e,1,n??null,i,!1,o,s),e[_t]=t.current,Zr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ks(t)};Be.render=function(e,t,n){if(!Ss(t))throw Error(j(200));return Cs(null,e,t,!1,n)};Be.unmountComponentAtNode=function(e){if(!Ss(e))throw Error(j(40));return e._reactRootContainer?(An(function(){Cs(null,null,e,!1,function(){e._reactRootContainer=null,e[_t]=null})}),!0):!1};Be.unstable_batchedUpdates=Mc;Be.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ss(n))throw Error(j(200));if(e==null||e._reactInternals===void 0)throw Error(j(38));return Cs(e,t,n,!1,r)};Be.version="18.3.1-next-f1338f8080-20240426";function Nm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nm)}catch(e){console.error(e)}}Nm(),Nf.exports=Be;var mv=Nf.exports,Ad=mv;_a.createRoot=Ad.createRoot,_a.hydrateRoot=Ad.hydrateRoot;/**
 * @remix-run/router v1.23.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ai(){return ai=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ai.apply(null,arguments)}var Bt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Bt||(Bt={}));const Td="popstate";function gv(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:s,hash:l}=r.location;return vl("",{pathname:o,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Qo(i)}return xv(t,n,null,e)}function ie(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Wc(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function yv(){return Math.random().toString(36).substr(2,8)}function Ed(e,t){return{usr:e.state,key:e.key,idx:t}}function vl(e,t,n,r){return n===void 0&&(n=null),ai({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?fr(t):t,{state:n,key:t&&t.key||r||yv()})}function Qo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function fr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function xv(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=Bt.Pop,c=null,u=p();u==null&&(u=0,s.replaceState(ai({},s.state,{idx:u}),""));function p(){return(s.state||{idx:null}).idx}function d(){l=Bt.Pop;let b=p(),m=b==null?null:b-u;u=b,c&&c({action:l,location:v.location,delta:m})}function f(b,m){l=Bt.Push;let h=vl(v.location,b,m);u=p()+1;let g=Ed(h,u),w=v.createHref(h);try{s.pushState(g,"",w)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;i.location.assign(w)}o&&c&&c({action:l,location:v.location,delta:1})}function y(b,m){l=Bt.Replace;let h=vl(v.location,b,m);u=p();let g=Ed(h,u),w=v.createHref(h);s.replaceState(g,"",w),o&&c&&c({action:l,location:v.location,delta:0})}function x(b){let m=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof b=="string"?b:Qo(b);return h=h.replace(/ $/,"%20"),ie(m,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,m)}let v={get action(){return l},get location(){return e(i,s)},listen(b){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(Td,d),c=b,()=>{i.removeEventListener(Td,d),c=null}},createHref(b){return t(i,b)},createURL:x,encodeLocation(b){let m=x(b);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:f,replace:y,go(b){return s.go(b)}};return v}var Pd;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Pd||(Pd={}));function vv(e,t,n){return n===void 0&&(n="/"),wv(e,t,n)}function wv(e,t,n,r){let i=typeof t=="string"?fr(t):t,o=Uc(i.pathname||"/",n);if(o==null)return null;let s=Rm(e);bv(s);let l=null,c=Rv(o);for(let u=0;l==null&&u<s.length;++u)l=Pv(s[u],c);return l}function Rm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(ie(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Qt([r,c.relativePath]),p=n.concat(c);o.children&&o.children.length>0&&(ie(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Rm(o.children,t,p,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:Tv(u,o.index),routesMeta:p})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of Mm(o.path))i(o,s,c)}),t}function Mm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=Mm(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function bv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Ev(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kv=/^:[\w-]+$/,Sv=3,Cv=2,jv=1,_v=10,Av=-2,Id=e=>e==="*";function Tv(e,t){let n=e.split("/"),r=n.length;return n.some(Id)&&(r+=Av),t&&(r+=Cv),n.filter(i=>!Id(i)).reduce((i,o)=>i+(kv.test(o)?Sv:o===""?jv:_v),r)}function Ev(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Pv(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,p=o==="/"?t:t.slice(o.length)||"/",d=Iv({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},p),f=c.route;if(!d)return null;Object.assign(i,d.params),s.push({params:i,pathname:Qt([o,d.pathname]),pathnameBase:Vv(Qt([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=Qt([o,d.pathnameBase]))}return s}function Iv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Nv(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,p,d)=>{let{paramName:f,isOptional:y}=p;if(f==="*"){let v=l[d]||"";s=o.slice(0,o.length-v.length).replace(/(.)\/+$/,"$1")}const x=l[d];return y&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Nv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Wc(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Rv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Wc(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Uc(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Mv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Lv=e=>Mv.test(e);function zv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?fr(e):e,o;if(n)if(Lv(n))o=n;else{if(n.includes("//")){let s=n;n=Dm(n),Wc(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?o=Nd(n.substring(1),"/"):o=Nd(n,t)}else o=t;return{pathname:o,search:Fv(r),hash:Bv(i)}}function Nd(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function oa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Dv(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Lm(e,t){let n=Dv(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function zm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=fr(e):(i=ai({},e),ie(!i.pathname||!i.pathname.includes("?"),oa("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),oa("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),oa("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let d=t.length-1;if(!r&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}l=d>=0?t[d]:"/"}let c=zv(i,l),u=s&&s!=="/"&&s.endsWith("/"),p=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||p)&&(c.pathname+="/"),c}const Dm=e=>e.replace(/\/\/+/g,"/"),Qt=e=>Dm(e.join("/")),Vv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Fv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ov(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Vm=["post","put","patch","delete"];new Set(Vm);const Wv=["get",...Vm];new Set(Wv);/**
 * React Router v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function li(){return li=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},li.apply(null,arguments)}const $c=k.createContext(null),Uv=k.createContext(null),Pn=k.createContext(null),js=k.createContext(null),on=k.createContext({outlet:null,matches:[],isDataRoute:!1}),Fm=k.createContext(null);function $v(e,t){let{relative:n}=t===void 0?{}:t;xi()||ie(!1);let{basename:r,navigator:i}=k.useContext(Pn),{hash:o,pathname:s,search:l}=Wm(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Qt([r,s])),i.createHref({pathname:c,search:l,hash:o})}function xi(){return k.useContext(js)!=null}function _s(){return xi()||ie(!1),k.useContext(js).location}function Bm(e){k.useContext(Pn).static||k.useLayoutEffect(e)}function Om(){let{isDataRoute:e}=k.useContext(on);return e?i1():Hv()}function Hv(){xi()||ie(!1);let e=k.useContext($c),{basename:t,future:n,navigator:r}=k.useContext(Pn),{matches:i}=k.useContext(on),{pathname:o}=_s(),s=JSON.stringify(Lm(i,n.v7_relativeSplatPath)),l=k.useRef(!1);return Bm(()=>{l.current=!0}),k.useCallback(function(u,p){if(p===void 0&&(p={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=zm(u,JSON.parse(s),o,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:Qt([t,d.pathname])),(p.replace?r.replace:r.push)(d,p.state,p)},[t,r,s,o,e])}function Gv(){let{matches:e}=k.useContext(on),t=e[e.length-1];return t?t.params:{}}function Wm(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=k.useContext(Pn),{matches:i}=k.useContext(on),{pathname:o}=_s(),s=JSON.stringify(Lm(i,r.v7_relativeSplatPath));return k.useMemo(()=>zm(e,JSON.parse(s),o,n==="path"),[e,s,o,n])}function Kv(e,t){return Yv(e,t)}function Yv(e,t,n,r){xi()||ie(!1);let{navigator:i}=k.useContext(Pn),{matches:o}=k.useContext(on),s=o[o.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let u=_s(),p;if(t){var d;let b=typeof t=="string"?fr(t):t;c==="/"||(d=b.pathname)!=null&&d.startsWith(c)||ie(!1),p=b}else p=u;let f=p.pathname||"/",y=f;if(c!=="/"){let b=c.replace(/^\//,"").split("/");y="/"+f.replace(/^\//,"").split("/").slice(b.length).join("/")}let x=vv(e,{pathname:y}),v=Jv(x&&x.map(b=>Object.assign({},b,{params:Object.assign({},l,b.params),pathname:Qt([c,i.encodeLocation?i.encodeLocation(b.pathname).pathname:b.pathname]),pathnameBase:b.pathnameBase==="/"?c:Qt([c,i.encodeLocation?i.encodeLocation(b.pathnameBase).pathname:b.pathnameBase])})),o,n,r);return t&&v?k.createElement(js.Provider,{value:{location:li({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Bt.Pop}},v):v}function Xv(){let e=r1(),t=Ov(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},t),n?k.createElement("pre",{style:i},n):null,null)}const Qv=k.createElement(Xv,null);class qv extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?k.createElement(on.Provider,{value:this.props.routeContext},k.createElement(Fm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Zv(e){let{routeContext:t,match:n,children:r}=e,i=k.useContext($c);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),k.createElement(on.Provider,{value:t},r)}function Jv(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let p=s.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);p>=0||ie(!1),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<s.length;p++){let d=s[p];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=p),d.route.id){let{loaderData:f,errors:y}=n,x=d.route.loader&&f[d.route.id]===void 0&&(!y||y[d.route.id]===void 0);if(d.route.lazy||x){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((p,d,f)=>{let y,x=!1,v=null,b=null;n&&(y=l&&d.route.id?l[d.route.id]:void 0,v=d.route.errorElement||Qv,c&&(u<0&&f===0?(o1("route-fallback"),x=!0,b=null):u===f&&(x=!0,b=d.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,f+1)),h=()=>{let g;return y?g=v:x?g=b:d.route.Component?g=k.createElement(d.route.Component,null):d.route.element?g=d.route.element:g=p,k.createElement(Zv,{match:d,routeContext:{outlet:p,matches:m,isDataRoute:n!=null},children:g})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?k.createElement(qv,{location:n.location,revalidation:n.revalidation,component:v,error:y,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):h()},null)}var Um=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Um||{}),$m=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}($m||{});function e1(e){let t=k.useContext($c);return t||ie(!1),t}function t1(e){let t=k.useContext(Uv);return t||ie(!1),t}function n1(e){let t=k.useContext(on);return t||ie(!1),t}function Hm(e){let t=n1(),n=t.matches[t.matches.length-1];return n.route.id||ie(!1),n.route.id}function r1(){var e;let t=k.useContext(Fm),n=t1(),r=Hm();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function i1(){let{router:e}=e1(Um.UseNavigateStable),t=Hm($m.UseNavigateStable),n=k.useRef(!1);return Bm(()=>{n.current=!0}),k.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,li({fromRouteId:t},o)))},[e,t])}const Rd={};function o1(e,t,n){Rd[e]||(Rd[e]=!0)}function s1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function F(e){ie(!1)}function a1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Bt.Pop,navigator:o,static:s=!1,future:l}=e;xi()&&ie(!1);let c=t.replace(/^\/*/,"/"),u=k.useMemo(()=>({basename:c,navigator:o,static:s,future:li({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=fr(r));let{pathname:p="/",search:d="",hash:f="",state:y=null,key:x="default"}=r,v=k.useMemo(()=>{let b=Uc(p,c);return b==null?null:{location:{pathname:b,search:d,hash:f,state:y,key:x},navigationType:i}},[c,p,d,f,y,x,i]);return v==null?null:k.createElement(Pn.Provider,{value:u},k.createElement(js.Provider,{children:n,value:v}))}function l1(e){let{children:t,location:n}=e;return Kv(wl(t),n)}new Promise(()=>{});function wl(e,t){t===void 0&&(t=[]);let n=[];return k.Children.forEach(e,(r,i)=>{if(!k.isValidElement(r))return;let o=[...t,i];if(r.type===k.Fragment){n.push.apply(n,wl(r.props.children,o));return}r.type!==F&&ie(!1),!r.props.index||!r.props.children||ie(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=wl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bl(){return bl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bl.apply(null,arguments)}function c1(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function u1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function d1(e,t){return e.button===0&&(!t||t==="_self")&&!u1(e)}const p1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],f1="6";try{window.__reactRouterVersion=f1}catch{}const h1="startTransition",Md=iy[h1];function m1(e){let{basename:t,children:n,future:r,window:i}=e,o=k.useRef();o.current==null&&(o.current=gv({window:i,v5Compat:!0}));let s=o.current,[l,c]=k.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},p=k.useCallback(d=>{u&&Md?Md(()=>c(d)):c(d)},[c,u]);return k.useLayoutEffect(()=>s.listen(p),[s,p]),k.useEffect(()=>s1(r),[r]),k.createElement(a1,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const g1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",y1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pe=k.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:l,target:c,to:u,preventScrollReset:p,viewTransition:d}=t,f=c1(t,p1),{basename:y}=k.useContext(Pn),x,v=!1;if(typeof u=="string"&&y1.test(u)&&(x=u,g1))try{let g=new URL(window.location.href),w=u.startsWith("//")?new URL(g.protocol+u):new URL(u),S=Uc(w.pathname,y);w.origin===g.origin&&S!=null?u=S+w.search+w.hash:v=!0}catch{}let b=$v(u,{relative:i}),m=x1(u,{replace:s,state:l,target:c,preventScrollReset:p,relative:i,viewTransition:d});function h(g){r&&r(g),g.defaultPrevented||m(g)}return k.createElement("a",bl({},f,{href:x||b,onClick:v||o?r:h,ref:n,target:c}))});var Ld;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ld||(Ld={}));var zd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(zd||(zd={}));function x1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s,viewTransition:l}=t===void 0?{}:t,c=Om(),u=_s(),p=Wm(e,{relative:s});return k.useCallback(d=>{if(d1(d,n)){d.preventDefault();let f=r!==void 0?r:Qo(u)===Qo(p);c(e,{replace:f,state:i,preventScrollReset:o,relative:s,viewTransition:l})}},[u,c,p,r,i,n,e,o,s,l])}const sa=[{label:"Home",to:"/"},{label:"About",to:"/about",featured:["Meet Our Founders","Industry operators, not just trainers.","/leadership"],groups:[{title:"Our Story",links:[["About Elevox","Why we built this academy","/about"],["Leadership & Founders","Real experts, real experience","/leadership"],["Founder Profiles","The people behind the method","/founders"],["Academy Tour","Facilities and learning spaces","/tour"]]},{title:"Why Elevox",links:[["Vision & Mission","Where intelligence meets purpose","/about/vision"],["The AI Skills Gap","Why Tier-2 cities need AI","/why-ai/skills-gap"],["Our Difference","Outcomes, not certificates","/about/difference"],["Contact & Visit","Come see us in Nagpur","/contact"]]}]},{label:"Programmes",to:"/programmes",featured:["View All Programmes","Compare tracks, formats, and career outcomes.","/programmes"],groups:[{title:"Foundational",links:[["Elevox Foundations","AI literacy for everyone","/programmes/foundations"],["AI for Business Analysts","Data-driven decisions","/programmes/business-analysts"],["AI for Developers","Build AI-native products","/programmes/developers"]]},{title:"Domain Tracks",links:[["AI for Marketing","Growth and automation","/programmes/marketing"],["AI for HR","People intelligence","/programmes/hr"],["AI for Design","Creative AI workflows","/programmes/design"],["AI for Operations","Process and supply chain AI","/programmes/operations"]]},{title:"Professional",links:[["Professional Upskilling","30-90 day intensives","/programmes/upskilling"],["Corporate Training","Team and leadership tracks","/corporate"],["Campus Programmes","For colleges and institutes","/colleges"]]}]},{label:"For Students",to:"/students",featured:["Start Your AI Career","A cohort built around employability.","/admissions"],groups:[{title:"Learn",links:[["All Programmes","Browse by domain and level","/programmes"],["Batch Calendar","Upcoming cohort dates","/admissions/calendar"],["Workshops & Events","Masterclasses and bootcamps","/workshops"],["Academy Tour","See where you will learn","/tour"]]},{title:"Get Placed",links:[["Career Accelerator","Resume, LinkedIn, interviews","/career"],["Placement Outcomes","Where alumni work","/career/outcomes"],["Portfolio Building","Real projects, real proof","/career/portfolio"],["Admissions","Fees, scholarships, process","/admissions"]]}]},{label:"For Business",to:"/business",featured:["Invite Elevox to Your Campus","For colleges, MBA institutes, and universities.","/colleges"],groups:[{title:"Organisations",links:[["AI Readiness Programme","Audit and upskill your team","/corporate/readiness"],["Corporate Workshops","Tailored for your context","/corporate/workshops"],["Leadership AI Sessions","For C-suite and managers","/corporate/leadership"],["AI Transformation Consulting","End-to-end advisory","/corporate/consulting"]]},{title:"Colleges & Institutes",links:[["Campus Workshops","Student-facing AI sessions","/colleges/workshops"],["Faculty Development","Train the trainers","/colleges/faculty"],["Curriculum Partnerships","Embed AI in your syllabus","/colleges/curriculum"],["Placement Readiness","Make students job-ready","/colleges/placement"]]}]},{label:"Why AI",to:"/why-ai",featured:["AI is a Business Skill","Understand where AI creates leverage in your industry.","/why-ai"],groups:[{title:"Industries",links:[["AI in Healthcare","Diagnosis, care, and operations","/why-ai/healthcare"],["AI in Manufacturing","Quality, maintenance, supply chain","/why-ai/manufacturing"],["AI in Banking & Finance","Risk, fraud, customer intelligence","/why-ai/banking"],["AI in HR & Recruitment","Hiring and people analytics","/why-ai/hr"]]},{title:"More Industries",links:[["AI in Marketing & Sales","Personalization and growth","/why-ai/marketing"],["AI in Retail","Demand, inventory, customer experience","/why-ai/retail"],["AI in Logistics","Routing and operations","/why-ai/logistics"],["AI in Education","Learning and assessment","/why-ai/education"]]},{title:"Applied AI",links:[["AI in Pharma","Research and compliance","/why-ai/pharma"],["AI in Operations","Process intelligence","/why-ai/operations"]]}]},{label:"Insights",to:"/insights",compact:!0,groups:[{title:"Read",links:[["AI Trends & Reports","Market signals","/insights/trends"],["Founder Articles","Operator perspective","/insights/articles"],["Student Success Stories","Learner outcomes","/insights/stories"],["Case Studies","Transformation proof","/insights/cases"],["Webinar Recordings","Watch sessions","/insights/webinars"],["Podcast Episodes","Listen and learn","/insights/podcast"]]}]}];function v1(){return a.jsxs(pe,{to:"/",className:"elx-logo","aria-label":"Elevox AI Academy home",children:[a.jsx("span",{className:"elx-logo-mark",children:"E"}),a.jsxs("span",{className:"elx-logo-copy",children:[a.jsxs("strong",{children:["Elev",a.jsx("span",{children:"ox"})]}),a.jsx("small",{children:"AI Academy"})]})]})}function w1({item:e,open:t,onNavigate:n}){return e.groups?a.jsx("div",{className:`elx-mega ${t?"is-open":""}`,role:"region","aria-label":`${e.label} menu`,children:a.jsxs("div",{className:`elx-mega-inner ${e.compact?"is-compact":""}`,children:[a.jsx("div",{className:"elx-mega-groups",children:e.groups.map(r=>a.jsxs("div",{className:"elx-mega-group",children:[a.jsx("h3",{children:r.title}),r.links.map(([i,o,s])=>a.jsxs(pe,{to:s,className:"elx-mega-link",onClick:n,children:[a.jsx("span",{children:i}),a.jsx("small",{children:o})]},s))]},r.title))}),e.featured&&a.jsxs(pe,{to:e.featured[2],className:"elx-mega-feature",onClick:n,children:[a.jsx("span",{children:"Featured"}),a.jsx("strong",{children:e.featured[0]}),a.jsx("small",{children:e.featured[1]}),a.jsxs("em",{children:["Explore ",a.jsx("i",{"aria-hidden":"true",children:"→"})]})]})]})}):null}function b1(){const[e,t]=k.useState(null),[n,r]=k.useState(!1),[i,o]=k.useState(!1),s=k.useRef(null);k.useEffect(()=>{const p=()=>o(window.scrollY>16);return window.addEventListener("scroll",p,{passive:!0}),p(),()=>window.removeEventListener("scroll",p)},[]),k.useEffect(()=>(document.body.style.overflow=n?"hidden":"",()=>{document.body.style.overflow=""}),[n]),k.useEffect(()=>{const p=d=>{d.key==="Escape"&&(t(null),r(!1))};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]);const l=()=>{t(null),r(!1)},c=p=>{clearTimeout(s.current),t(p)},u=()=>{s.current=setTimeout(()=>t(null),140)};return a.jsxs(a.Fragment,{children:[a.jsx("style",{children:k1}),a.jsxs("header",{className:`elx-nav ${i?"is-scrolled":""} ${e!==null?"has-open-menu":""}`,children:[a.jsxs("div",{className:"elx-nav-inner",children:[a.jsx(v1,{}),a.jsx("nav",{className:"elx-desktop-nav","aria-label":"Main navigation",children:sa.map((p,d)=>{const f=!!p.groups;return a.jsx("div",{className:"elx-nav-item",onMouseEnter:()=>f&&c(d),onMouseLeave:u,children:f?a.jsxs("button",{className:`elx-nav-link ${e===d?"is-active":""}`,type:"button",onClick:()=>t(e===d?null:d),"aria-expanded":e===d,children:[p.label,a.jsx("i",{"aria-hidden":"true",className:"elx-caret"})]}):a.jsx(pe,{to:p.to,className:"elx-nav-link",onClick:l,children:p.label})},p.label)})}),a.jsxs("div",{className:"elx-nav-actions",children:[a.jsx(pe,{to:"/workshops",className:"elx-btn elx-btn-ghost",children:"Workshop"}),a.jsx(pe,{to:"/admissions",className:"elx-btn elx-btn-primary",children:"Apply Now"}),a.jsxs("button",{className:"elx-menu-btn",type:"button",onClick:()=>r(p=>!p),"aria-label":n?"Close menu":"Open menu","aria-expanded":n,children:[a.jsx("span",{}),a.jsx("span",{}),a.jsx("span",{})]})]})]}),a.jsx("div",{className:"elx-mega-stack",onMouseEnter:()=>e!==null&&c(e),onMouseLeave:u,children:sa.map((p,d)=>a.jsx(w1,{item:p,open:e===d,onNavigate:l},p.label))})]}),a.jsx("div",{className:`elx-mobile-backdrop ${n?"is-open":""}`,onClick:l}),a.jsxs("div",{className:`elx-mobile-panel ${n?"is-open":""}`,children:[sa.map(p=>{var d;return a.jsxs("details",{className:"elx-mobile-section",children:[a.jsxs("summary",{children:[a.jsx(pe,{to:p.to,onClick:l,children:p.label}),p.groups&&a.jsx("span",{"aria-hidden":"true",children:"+"})]}),(d=p.groups)==null?void 0:d.map(f=>a.jsxs("div",{className:"elx-mobile-group",children:[a.jsx("h3",{children:f.title}),f.links.map(([y,x,v])=>a.jsxs(pe,{to:v,onClick:l,children:[a.jsx("strong",{children:y}),a.jsx("small",{children:x})]},v))]},f.title))]},p.label)}),a.jsxs("div",{className:"elx-mobile-actions",children:[a.jsx(pe,{to:"/workshops",onClick:l,children:"Book Workshop"}),a.jsx(pe,{to:"/admissions",onClick:l,children:"Apply Now"})]})]})]})}const k1=`
  .elx-nav {
    position: fixed;
    inset: 0 0 auto;
    height: 76px;
    z-index: 1000;
    background: transparent;
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s ease, backdrop-filter 0.3s ease;
    font-family: "Inter", system-ui, sans-serif;
  }

  .elx-nav.is-scrolled,
  .elx-nav.has-open-menu {
    border-bottom-color: rgba(255, 255, 255, 0.08);
  }

  .elx-nav-inner {
    position: relative;
    height: 100%;
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 28px;
    display: flex;
    align-items: center;
    gap: 36px;
    z-index: 2;
  }

  .elx-logo {
    display: inline-flex;
    align-items: center;
    gap: 13px;
    text-decoration: none;
    color: #f5f6f8;
    flex: 0 0 auto;
  }

  .elx-logo-mark {
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border-radius: 9px;
    color: #00d4a8;
    background: rgba(0, 212, 168, 0.1);
    border: 1px solid rgba(0, 212, 168, 0.3);
    font-family: "Space Grotesk", Inter, sans-serif;
    font-weight: 800;
    font-size: 18px;
  }

  .elx-logo-copy strong {
    display: block;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-weight: 600;
    font-size: 21px;
    line-height: 1;
    letter-spacing: -0.01em;
  }

  .elx-logo-copy strong span {
    color: #00d4a8;
  }

  .elx-logo-copy small {
    display: block;
    margin-top: 4px;
    color: rgba(245, 246, 248, 0.5);
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
  }

  .elx-desktop-nav {
    display: flex;
    align-items: center;
    gap: 2px;
    flex: 1;
  }

  .elx-nav-link {
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    border: 0;
    border-radius: 8px;
    padding: 0 14px;
    color: rgba(245, 246, 248, 0.74);
    background: transparent;
    text-decoration: none;
    font: 500 14.5px Inter, system-ui, sans-serif;
    cursor: pointer;
    transition: color 0.15s ease, background 0.15s ease;
  }

  .elx-nav-link:hover,
  .elx-nav-link.is-active {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.06);
  }

  .elx-caret {
    width: 7px;
    height: 7px;
    border-right: 1.5px solid currentColor;
    border-bottom: 1.5px solid currentColor;
    opacity: 0.65;
    transform: translateY(-2px) rotate(45deg);
    transition: transform 0.18s ease;
  }

  .elx-nav-link.is-active .elx-caret {
    transform: translateY(0) rotate(225deg);
  }

  .elx-nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .elx-btn {
    min-height: 40px;
    display: inline-flex;
    align-items: center;
    border-radius: 8px;
    padding: 0 20px;
    text-decoration: none;
    font: 600 14px Inter, system-ui, sans-serif;
    transition: opacity 0.15s ease, background 0.15s ease, border-color 0.15s ease;
  }

  .elx-btn-ghost {
    color: rgba(245, 246, 248, 0.82);
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .elx-btn-ghost:hover {
    border-color: rgba(255, 255, 255, 0.3);
  }

  .elx-btn-primary {
    color: #04201a;
    background: #00d4a8;
  }

  .elx-btn-primary:hover {
    opacity: 0.88;
  }

  .elx-mega-stack {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
  }

  .elx-mega {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    pointer-events: none;
    transform: translateY(-8px);
    transition: opacity 0.2s ease, transform 0.2s ease;
    background: rgba(8, 9, 13, 0.92);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(22px) saturate(1.3);
  }

  .elx-mega.is-open {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  }

  .elx-mega-inner {
    max-width: 1320px;
    margin: 0 auto;
    padding: 32px 28px 36px;
    display: grid;
    grid-template-columns: 1fr 280px;
    gap: 36px;
  }

  .elx-mega-inner.is-compact {
    max-width: 780px;
    grid-template-columns: 1fr;
  }

  .elx-mega-groups {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 30px;
  }

  .elx-mega-inner.is-compact .elx-mega-groups {
    grid-template-columns: 1fr;
  }

  .elx-mega-group h3,
  .elx-mobile-group h3 {
    margin: 0 0 12px;
    color: #00d4a8;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .elx-mega-link {
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-radius: 8px;
    padding: 10px 11px;
    color: rgba(245, 246, 248, 0.82);
    text-decoration: none;
    transition: background 0.15s ease, color 0.15s ease;
  }

  .elx-mega-link:hover {
    background: rgba(0, 212, 168, 0.07);
    color: #ffffff;
  }

  .elx-mega-link span {
    font-size: 14.5px;
    font-weight: 600;
  }

  .elx-mega-link small {
    color: rgba(245, 246, 248, 0.4);
    line-height: 1.4;
    font-size: 12.5px;
  }

  .elx-mega-feature {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    padding-left: 32px;
    text-decoration: none;
  }

  .elx-mega-feature span {
    color: #00d4a8;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
  }

  .elx-mega-feature strong {
    margin: 12px 0 10px;
    color: #ffffff;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-weight: 600;
    font-size: 19px;
    line-height: 1.25;
  }

  .elx-mega-feature small {
    color: rgba(245, 246, 248, 0.5);
    line-height: 1.55;
    font-size: 13.5px;
  }

  .elx-mega-feature em {
    margin-top: 18px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #00d4a8;
    font-style: normal;
    font-weight: 700;
    font-size: 13.5px;
    transition: gap 0.15s ease;
  }

  .elx-mega-feature:hover em {
    gap: 9px;
  }

  .elx-menu-btn {
    display: none;
    width: 42px;
    height: 42px;
    border: 1px solid rgba(255, 255, 255, 0.14);
    border-radius: 10px;
    background: transparent;
    padding: 10px;
    flex: 0 0 auto;
  }

  .elx-menu-btn span {
    display: block;
    height: 2px;
    margin: 4px 0;
    background: #f5f6f8;
    border-radius: 1px;
  }

  .elx-mobile-backdrop {
    position: fixed;
    inset: 0;
    z-index: 997;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.25s ease;
  }

  .elx-mobile-backdrop.is-open {
    opacity: 1;
    pointer-events: auto;
  }

  .elx-mobile-panel {
    position: fixed;
    inset: 0 0 0 auto;
    width: min(86vw, 400px);
    z-index: 998;
    padding: 96px 22px 36px;
    overflow: auto;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    background: rgba(9, 10, 14, 0.98);
    border-left: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(20px);
  }

  .elx-mobile-panel.is-open {
    transform: translateX(0);
  }

  .elx-mobile-section {
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 6px 0;
  }

  .elx-mobile-section summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    list-style: none;
    color: #f5f6f8;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
  }

  .elx-mobile-section summary::-webkit-details-marker {
    display: none;
  }

  .elx-mobile-section summary span {
    color: rgba(245, 246, 248, 0.4);
    font-weight: 400;
  }

  .elx-mobile-section summary a {
    color: inherit;
    text-decoration: none;
    padding: 14px 0;
    flex: 1;
  }

  .elx-mobile-group {
    padding: 6px 0 16px;
  }

  .elx-mobile-group a {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 9px 10px;
    border-radius: 8px;
    color: rgba(245, 246, 248, 0.78);
    text-decoration: none;
  }

  .elx-mobile-group small {
    color: rgba(245, 246, 248, 0.4);
    font-size: 12.5px;
  }

  .elx-mobile-actions {
    display: grid;
    gap: 10px;
    padding-top: 22px;
  }

  .elx-mobile-actions a {
    padding: 14px 16px;
    border-radius: 10px;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 14.5px;
    color: #04201a;
    background: #00d4a8;
  }

  .elx-mobile-actions a:first-child {
    color: #f5f6f8;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.14);
  }

  .elx-nav-link:focus-visible,
  .elx-btn:focus-visible,
  .elx-menu-btn:focus-visible,
  .elx-mega-link:focus-visible,
  .elx-mega-feature:focus-visible {
    outline: 2px solid #00d4a8;
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .elx-nav,
    .elx-mega,
    .elx-mobile-panel,
    .elx-mobile-backdrop,
    .elx-caret,
    .elx-mega-feature em {
      transition: none !important;
    }
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

    .elx-mega-stack {
      display: none;
    }
  }

  @media (max-width: 520px) {
    .elx-nav {
      height: 64px;
    }
    .elx-mobile-panel {
      padding-top: 84px;
    }
    .elx-nav-inner {
      padding: 0 16px;
    }
    .elx-logo-mark {
      width: 36px;
      height: 36px;
    }
    .elx-logo-copy strong {
      font-size: 19px;
    }
    .elx-logo-copy small {
      display: none;
    }
  }
`,S1=()=>{const e=Om(),t=n=>{window.scrollTo({top:0,behavior:"smooth"}),e(n)};return a.jsx("footer",{style:C1,children:a.jsxs("div",{style:j1,children:[a.jsxs("div",{style:_1,children:[a.jsxs("div",{style:Ui,children:[a.jsx("h3",{style:A1,children:"Elevox AI Academy"}),a.jsx("p",{style:T1,children:"Empowering the next generation of AI leaders in Tier-2 cities. Where intelligence meets purpose."}),a.jsxs("div",{style:E1,children:[a.jsx("a",{href:"#",style:$i,children:"LinkedIn"}),a.jsx("a",{href:"#",style:$i,children:"Twitter"}),a.jsx("a",{href:"#",style:$i,children:"YouTube"}),a.jsx("a",{href:"#",style:$i,children:"Instagram"})]})]}),a.jsxs("div",{style:Ui,children:[a.jsx("h4",{style:aa,children:"Programmes"}),a.jsx("span",{onClick:()=>t("/programmes/foundations"),style:{...We,cursor:"pointer"},children:"Foundations"}),a.jsx("span",{onClick:()=>t("/programmes/marketing"),style:{...We,cursor:"pointer"},children:"AI for Marketing"}),a.jsx("span",{onClick:()=>t("/programmes/hr"),style:{...We,cursor:"pointer"},children:"AI for HR"}),a.jsx("span",{onClick:()=>t("/programmes/upskilling"),style:{...We,cursor:"pointer"},children:"Professional Upskilling"})]}),a.jsxs("div",{style:Ui,children:[a.jsx("h4",{style:aa,children:"Company"}),a.jsx("span",{onClick:()=>t("/aboutus"),style:{...We,cursor:"pointer"},children:"About Us"}),a.jsx("span",{onClick:()=>t("/leadership"),style:{...We,cursor:"pointer"},children:"Leadership"}),a.jsx("span",{onClick:()=>t("/contact"),style:{...We,cursor:"pointer"},children:"Contact"}),a.jsx("span",{onClick:()=>t("/career"),style:{...We,cursor:"pointer"},children:"Careers"})]}),a.jsxs("div",{style:Ui,children:[a.jsx("h4",{style:aa,children:"Support"}),a.jsx("span",{onClick:()=>t("/admissions"),style:{...We,cursor:"pointer"},children:"Admissions"}),a.jsx("span",{onClick:()=>t("/workshops"),style:{...We,cursor:"pointer"},children:"Workshops"}),a.jsx("span",{onClick:()=>t("/insights"),style:{...We,cursor:"pointer"},children:"Insights"}),a.jsx("span",{onClick:()=>t("/tour"),style:{...We,cursor:"pointer"},children:"Academy Tour"})]})]}),a.jsxs("div",{style:P1,children:[a.jsx("p",{style:I1,children:"© 2026 Elevox AI Academy. All rights reserved."}),a.jsxs("div",{style:N1,children:[a.jsx("span",{onClick:()=>t("/privacy"),style:{...Dd,cursor:"pointer"},children:"Privacy Policy"}),a.jsx("span",{onClick:()=>t("/terms"),style:{...Dd,cursor:"pointer"},children:"Terms of Service"})]})]})]})})},C1={backgroundColor:"#08090d",color:"#f0f2f5",padding:"60px 0 30px",borderTop:"1px solid rgba(255,255,255,0.08)",marginTop:"auto"},j1={maxWidth:"1280px",margin:"0 auto",padding:"0 24px"},_1={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"40px",marginBottom:"40px"},Ui={display:"flex",flexDirection:"column",gap:"12px"},A1={fontFamily:"'Space Grotesk', sans-serif",fontSize:"20px",fontWeight:700,marginBottom:"8px",color:"#f0f2f5"},T1={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",maxWidth:"300px"},aa={fontSize:"13px",fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",color:"#00d4a8",marginBottom:"4px"},We={color:"rgba(240,242,245,0.6)",textDecoration:"none",fontSize:"14px",transition:"color 0.2s"},E1={display:"flex",gap:"16px",marginTop:"8px",flexWrap:"wrap"},$i={color:"rgba(240,242,245,0.5)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"},P1={borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:"24px",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"},I1={fontSize:"13px",color:"rgba(240,242,245,0.4)"},N1={display:"flex",gap:"20px"},Dd={color:"rgba(240,242,245,0.4)",textDecoration:"none",fontSize:"13px",transition:"color 0.2s"},Vd=[["01","Diagnose","Map a learner or team's current AI readiness."],["02","Build","Create real artifacts using AI inside role-based workflows."],["03","Prove","Turn learning into portfolios, demos, and employability signals."],["04","Transform","Move from tool use to measurable career or business outcomes."]];function R1(){return a.jsxs("section",{className:"elx-3d","aria-label":"Elevox animated transformation pathway",children:[a.jsx("style",{children:M1}),a.jsxs("div",{className:"elx-3d-inner",children:[a.jsxs("div",{className:"elx-3d-copy",children:[a.jsx("p",{className:"elx-3d-kicker",children:"Transformation engine"}),a.jsx("h2",{children:"Learning that zooms into outcomes, then scales back into careers."}),a.jsx("p",{children:"A cinematic pathway for students, professionals, teams, and campuses: diagnose the gap, build with AI, prove the work, and move upward."})]}),a.jsxs("div",{className:"elx-3d-stage","aria-hidden":"true",children:[a.jsxs("div",{className:"elx-3d-card elx-3d-card-a",children:[a.jsx("span",{children:"AI Fluency"}),a.jsx("strong",{children:"Zoom in"})]}),a.jsxs("div",{className:"elx-3d-card elx-3d-card-b",children:[a.jsx("span",{children:"Industry Proof"}),a.jsx("strong",{children:"Build up"})]}),a.jsxs("div",{className:"elx-3d-card elx-3d-card-c",children:[a.jsx("span",{children:"Employability"}),a.jsx("strong",{children:"Scale out"})]})]}),a.jsx("div",{className:"elx-slider","aria-label":"Elevox pathway slider",children:a.jsx("div",{className:"elx-slider-track",children:[...Vd,...Vd].map(([e,t,n],r)=>a.jsxs("article",{className:"elx-slide",children:[a.jsx("span",{children:e}),a.jsx("h3",{children:t}),a.jsx("p",{children:n})]},`${e}-${r}`))})})]})]})}const M1=`
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
`,xt={void:"#04090A",panel:"#0A1414",circuit:"#123230",signal:"#1FE8B8",phosphor:"#B9FFE8",amber:"#FFB454",neural:"#6C5CE7",data:"#00D2FF",quantum:"#FF6B6B"},qo=[{id:"student",label:"Student",sub:"Building toward a first role",heroKicker:"STATUS: PRE-CAREER",heroLine:"Turn what you're studying into work the market actually wants.",proof:[{num:"87%",label:"placed or interviewing within 6 months of capstone"},{num:"21 days",label:"average time from capstone to first interview"},{num:"40+",label:"hiring partners reviewing student portfolios"}],audienceId:"students"},{id:"professional",label:"Professional",sub:"Upskilling for what's next",heroKicker:"STATUS: IN-CAREER",heroLine:"AI is rewriting your job description. Get ahead of the rewrite.",proof:[{num:"3x",label:"faster skill obsolescence than the decade before"},{num:"92%",label:"of roles will require applied AI fluency within 3 years"},{num:"6 wks",label:"average track length, built around a working week"}],audienceId:"professionals"},{id:"corporate",label:"Corporate / Team",sub:"Transforming a workforce",heroKicker:"STATUS: WORKFORCE",heroLine:"Your team doesn't need a course. It needs a transformation plan.",proof:[{num:"40+",label:"transformation partners across hiring & L&D"},{num:"0",label:"industries left untouched by AI-driven restructuring"},{num:"1",label:"audit before any training begins"}],audienceId:"corporates"},{id:"explore",label:"Just exploring",sub:"Show me everything",heroKicker:"STATUS: UNCALIBRATED",heroLine:"The bridge between learning AI and being employable because of it.",proof:[{num:"12+ yrs",label:"founders' industry experience, not classroom experience"},{num:"40+",label:"hiring & transformation partners in the network"},{num:"1",label:"outcome every track is built around: employability"}],audienceId:null}],Fd={students:{eyebrow:"For Students",title:"Career-mapped, not curriculum-mapped",body:"Most student tracks teach a syllabus. This one starts from the roles hiring managers are actually filling, and works backward into what you need to be credible for them.",points:["Curriculum mapped to live job descriptions, refreshed quarterly","Mentors who are currently shipping AI in production, not ex-academics","A portfolio piece per module — by graduation, evidence, not a transcript"],cta:"See the student pathway"},professionals:{eyebrow:"For Professionals",title:"Built around the job you already have",body:"You're not starting over. You're adding a capability your role doesn't have yet — fast enough that it shows up in your next review, not your next decade.",points:["Evening & weekend cohorts — no leave of absence required","Role-specific tracks: product, data, ops, design, engineering","A applied-AI case study you can present internally within 6 weeks"],cta:"See upskilling tracks"},corporates:{eyebrow:"For Corporates",title:"Audited before it's taught",body:"We don't sell seats in a generic course. We start by mapping where your workforce actually stands against where your industry is heading, then build the cohort around the gap.",points:["Workforce AI-readiness audit before any curriculum is proposed","Cohort delivery built around your real workflows and tools","Adoption measured at 30/60/90 days — not just attendance"],cta:"Book a workforce audit"},colleges:{eyebrow:"For Colleges",title:"A placement pipeline, not a guest lecture",body:"Curriculum partnerships that give your students the same industry-mapped tracks, with faculty enablement and direct access to our hiring network at graduation.",points:["Co-built curriculum aligned to your existing academic calendar","Faculty enablement so the capability stays in-house after rollout","Direct placement-pipeline access for graduating cohorts"],cta:"Partner with Elevox"}};function L1(){const e=k.useRef(null),t=k.useRef([]);k.useRef({x:0,y:0});const n=k.useRef();return k.useEffect(()=>{const r=e.current,i=r.getContext("2d");let o,s;const l=()=>{o=r.width=window.innerWidth,s=r.height=window.innerHeight};window.addEventListener("resize",l),l();const c=[],u=80;for(let d=0;d<u;d++)c.push({x:Math.random()*o,y:Math.random()*s,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,radius:Math.random()*2+1});t.current=c;const p=()=>{i.clearRect(0,0,o,s),c.forEach(d=>{d.x+=d.vx,d.y+=d.vy,(d.x<0||d.x>o)&&(d.vx*=-1),(d.y<0||d.y>s)&&(d.vy*=-1)});for(let d=0;d<c.length;d++)for(let f=d+1;f<c.length;f++){const y=c[d].x-c[f].x,x=c[d].y-c[f].y,v=Math.sqrt(y*y+x*x);if(v<150){const b=(1-v/150)*.15;i.beginPath(),i.moveTo(c[d].x,c[d].y),i.lineTo(c[f].x,c[f].y),i.strokeStyle=`rgba(31, 232, 184, ${b})`,i.lineWidth=.5,i.stroke()}}c.forEach(d=>{i.beginPath(),i.arc(d.x,d.y,d.radius,0,Math.PI*2),i.fillStyle="#1FE8B8",i.shadowColor="#1FE8B8",i.shadowBlur=10,i.fill(),i.shadowBlur=0}),n.current=requestAnimationFrame(p)};return p(),()=>{cancelAnimationFrame(n.current),window.removeEventListener("resize",l)}},[]),a.jsx("canvas",{ref:e,className:"neural-bg"})}function Gm({children:e,active:t=!0}){return a.jsxs("div",{className:`ai-pulse ${t?"is-active":""}`,children:[a.jsx("div",{className:"ai-pulse__ring"}),a.jsx("div",{className:"ai-pulse__ring",style:{animationDelay:"0.5s"}}),a.jsx("div",{className:"ai-pulse__ring",style:{animationDelay:"1s"}}),e]})}function Zo({text:e,className:t=""}){const n=e.split("");return a.jsx("span",{className:`data-stream ${t}`,children:n.map((r,i)=>a.jsx("span",{style:{animationDelay:`${i*.05}s`},children:r},i))})}function z1({children:e,className:t=""}){return a.jsxs("div",{className:`glitch-text ${t}`,children:[a.jsx("span",{className:"glitch-text__main",children:e}),a.jsx("span",{className:"glitch-text__glitch","aria-hidden":"true",children:e}),a.jsx("span",{className:"glitch-text__glitch2","aria-hidden":"true",children:e})]})}function As({children:e,tone:t="signal"}){return a.jsx("div",{className:`eyebrow eyebrow--${t}`,children:e})}function sn({id:e,eyebrow:t,title:n,sub:r,children:i,tone:o="default",index:s}){return a.jsx("section",{id:e,className:`section ${o==="panel"?"section--panel":""}`,"data-rail-section":s,children:a.jsxs("div",{className:"section__inner",children:[a.jsxs("div",{className:"section__head",children:[t&&a.jsx(As,{children:t}),n&&a.jsx("h2",{className:"section__title",children:n}),r&&a.jsx("p",{className:"section__sub",children:r})]}),i]})})}function D1({onSelect:e}){const[t,n]=k.useState(null),[r,i]=k.useState(0);return k.useEffect(()=>{const o=setInterval(()=>{i(s=>(s+2)%100)},50);return()=>clearInterval(o)},[]),a.jsxs("div",{className:"gate",role:"dialog","aria-modal":"true","aria-label":"Choose your path",children:[a.jsxs("div",{className:"gate__backdrop",children:[a.jsx("div",{className:"gate__scanline",style:{top:`${r}%`}}),a.jsx("div",{className:"gate__grid-overlay"})]}),a.jsxs("div",{className:"gate__panel",children:[a.jsxs("div",{className:"gate__panelHeader",children:[a.jsx(Gm,{active:!0,children:a.jsx("span",{className:"gate__dot"})}),a.jsx("span",{className:"gate__headerText",children:a.jsx(Zo,{text:"ELEVOX // CALIBRATING VIEW"})}),a.jsxs("span",{className:"gate__headerId",children:["ID:0x",Math.floor(Math.random()*9e3+1e3)]})]}),a.jsxs("div",{className:"gate__body",children:[a.jsxs("p",{className:"gate__kicker",children:[a.jsx("span",{className:"gate__kicker-dot",children:"●"})," Neural calibration required"]}),a.jsx("h1",{className:"gate__title",children:"Who's reading this?"}),a.jsx("p",{className:"gate__copy",children:"Everything below — the proof, the tracks, the outcomes — will reorder itself around where you actually stand right now."}),a.jsx("div",{className:"gate__options",children:qo.map(o=>a.jsxs("button",{className:`gate__option ${t===o.id?"is-active":""}`,onMouseEnter:()=>n(o.id),onMouseLeave:()=>n(null),onClick:()=>e(o.id),children:[a.jsx("span",{className:"gate__optionMarker",children:t===o.id?"▶":"○"}),a.jsx("span",{className:"gate__optionLabel",children:o.label}),a.jsx("span",{className:"gate__optionSub",children:o.sub}),a.jsx("span",{className:"gate__optionArrow","aria-hidden":"true",children:"→"})]},o.id))}),a.jsxs("button",{className:"gate__skip",onClick:()=>e("explore"),children:[a.jsx("span",{className:"gate__skip-icon",children:"⟳"})," Skip calibration — show the full picture"]})]})]})]})}const Bd=["INPUT // RAW POTENTIAL","WHY_AI","FOUNDERS","GAP","PROGRAMMES","AUDIENCE_MATCH","PATHWAY","OUTCOMES","WORKSHOPS","TOUR","OUTPUT // EMPLOYABLE"];function V1(){const e=k.useRef(null),[t,n]=k.useState(0),[r,i]=k.useState(0);return k.useEffect(()=>{const o=Array.from(document.querySelectorAll("[data-rail-section]")),s=()=>{const l=document.documentElement,c=l.scrollTop||document.body.scrollTop,u=(l.scrollHeight||document.body.scrollHeight)-l.clientHeight,p=u>0?c/u:0;e.current&&e.current.style.setProperty("--rail-progress",`${Math.min(1,Math.max(0,p))*100}%`);let d=0;o.forEach(f=>{f.getBoundingClientRect().top<window.innerHeight*.6&&(d=Number(f.dataset.railSection))}),n(Math.min(d,Bd.length-1)),i(Math.sin(Date.now()/1e3)*.3+.7)};return window.addEventListener("scroll",s,{passive:!0}),window.addEventListener("resize",s),s(),()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",s)}},[]),a.jsxs("div",{className:"signalRail",ref:e,"aria-hidden":"true",children:[a.jsx("div",{className:"signalRail__track"}),a.jsx("div",{className:"signalRail__fill"}),a.jsx("div",{className:"signalRail__bead"}),a.jsx("div",{className:"signalRail__signal-glow",style:{opacity:r*.5}}),a.jsxs("div",{className:"signalRail__readout",children:[a.jsx("span",{className:"signalRail__readout-dot",children:"●"}),Bd[t],a.jsxs("span",{className:"signalRail__readout-strength",children:[Math.round(r*100),"%"]})]})]})}function F1({pathway:e}){const t=k.useMemo(()=>qo.find(i=>i.id===e)||qo[3],[e]),[n,r]=k.useState({x:0,y:0});return k.useEffect(()=>{const i=o=>{r({x:o.clientX/window.innerWidth,y:o.clientY/window.innerHeight})};return window.addEventListener("mousemove",i),()=>window.removeEventListener("mousemove",i)},[]),a.jsxs("header",{className:"hero","data-rail-section":0,children:[a.jsxs("div",{className:"hero__bg",children:[a.jsx("div",{className:"hero__image",style:{backgroundImage:"url(/assets/images/hero.png)"}}),a.jsx("div",{className:"hero__grid","aria-hidden":"true"}),a.jsx("div",{className:"hero__neural-glow",style:{left:`${n.x*100}%`,top:`${n.y*100}%`}})]}),a.jsxs("div",{className:"hero__content",children:[a.jsxs("div",{className:"hero__statusRow",children:[a.jsx(Gm,{active:!0,children:a.jsx("span",{className:"hero__statusDot"})}),a.jsx("span",{className:"hero__statusText",children:a.jsx(Zo,{text:t.heroKicker})})]}),a.jsxs(z1,{className:"hero__headline",children:["AI is no longer optional.",a.jsx("br",{}),a.jsx("span",{className:"hero__headlineAccent",children:"Employability is."})]}),a.jsx("p",{className:"hero__sub",children:t.heroLine}),a.jsx("div",{className:"hero__readout",children:t.proof.map((i,o)=>a.jsxs(ur.Fragment,{children:[a.jsxs("div",{className:"hero__readoutItem",children:[a.jsx("span",{className:"hero__readoutNum",children:a.jsx(Zo,{text:i.num})}),a.jsx("span",{className:"hero__readoutLabel",children:i.label})]}),o<t.proof.length-1&&a.jsx("div",{className:"hero__readoutDivider"})]},i.label))}),a.jsxs("div",{className:"hero__ctaRow",children:[a.jsxs("button",{className:"btn btn--primary",children:[a.jsx("span",{className:"btn__icon",children:"⚡"}),"See your pathway"]}),a.jsxs("button",{className:"btn btn--ghost",children:[a.jsx("span",{className:"btn__icon",children:"▶"}),"Watch the academy tour"]})]})]}),a.jsxs("div",{className:"hero__scrollCue","aria-hidden":"true",children:[a.jsx("div",{className:"hero__scrollLine",children:a.jsx("span",{className:"hero__scrollDot"})}),"Scroll — trace runs the full page"]})]})}function B1(){return a.jsx("section",{className:"heroStrip","aria-label":"Elevox learning promise",children:a.jsxs("div",{className:"heroStrip__inner",children:[a.jsxs("span",{className:"heroStrip__label",children:[a.jsx("span",{className:"heroStrip__num",children:"01"})," AI FLUENCY"]}),a.jsx("span",{className:"heroStrip__divider","aria-hidden":"true",children:a.jsx("span",{className:"heroStrip__divider-dot",children:"●"})}),a.jsxs("span",{className:"heroStrip__label",children:[a.jsx("span",{className:"heroStrip__num",children:"02"})," INDUSTRY PROOF"]}),a.jsx("span",{className:"heroStrip__divider","aria-hidden":"true",children:a.jsx("span",{className:"heroStrip__divider-dot",children:"●"})}),a.jsxs("span",{className:"heroStrip__label",children:[a.jsx("span",{className:"heroStrip__num",children:"03"})," CAREER OUTCOME"]})]})})}function O1(){return a.jsxs("div",{className:"heroSecondary",children:[a.jsx("div",{className:"heroSecondary__image",style:{backgroundImage:"url(/assets/images/h4.png)"},role:"img","aria-label":"Elevox secondary hero visual"}),a.jsxs("div",{className:"heroSecondary__overlay",children:[a.jsx("div",{className:"heroSecondary__scanline"}),a.jsxs("div",{className:"heroSecondary__data-overlay",children:[a.jsx("span",{className:"heroSecondary__data-text",children:"[AI_TRAINING_MATRIX]"}),a.jsx("span",{className:"heroSecondary__data-text",children:"[OPTIMIZATION: 87%]"})]})]}),a.jsxs("div",{className:"heroSecondary__content",children:[a.jsx(As,{children:"The transformation, not the tools"}),a.jsxs("h2",{className:"heroSecondary__title",children:["We don't teach AI.",a.jsx("br",{}),"We make you ",a.jsx("span",{className:"heroSecondary__accent",children:"unignorable"})," because of it."]}),a.jsx("p",{className:"heroSecondary__sub",children:"Real founders. Real industry scars. A pathway built for outcomes, not certificates."})]})]})}function W1(){const e=[{stat:"92%",label:"of roles require applied AI fluency within 3 years"},{stat:"3×",label:"faster skill obsolescence than the decade before"},{stat:"0",label:"industries left untouched by AI-driven restructuring"}];return a.jsx(sn,{id:"why-ai",index:1,eyebrow:"The shift",title:"AI didn't knock. It already let itself in.",sub:"Every industry is being re-architected around AI-literate people. The question isn't whether you adapt — it's whether you adapt on your own terms, or someone else's.",children:a.jsxs("div",{className:"ai-dashboard",children:[a.jsxs("div",{className:"ai-dashboard__header",children:[a.jsx("span",{className:"ai-dashboard__status",children:"● SYSTEM STATUS: ACTIVE"}),a.jsxs("span",{className:"ai-dashboard__timestamp",children:["[AI_READOUT_",new Date().getFullYear(),"]"]})]}),a.jsx("div",{className:"readoutBar",children:e.map((t,n)=>a.jsxs(ur.Fragment,{children:[a.jsxs("div",{className:"readoutBar__item",children:[a.jsx("div",{className:"readoutBar__stat",children:t.stat}),a.jsx("div",{className:"readoutBar__label",children:t.label}),a.jsx("div",{className:"readoutBar__progress",children:a.jsx("div",{className:"readoutBar__progress-bar",style:{width:`${Math.random()*30+70}%`}})})]}),n<e.length-1&&a.jsx("div",{className:"readoutBar__rule","aria-hidden":"true"})]},t.label))})]})})}function U1(){const e=[{name:"Founder One",role:"Ex-Industry AI Lead",years:"12 YRS",bio:"Shipped production AI systems for a decade before turning to building the people who'll ship the next generation of them.",scars:["Shipped 3 production ML systems at scale","Hired and managed AI engineering teams"]},{name:"Founder Two",role:"Ex-Talent & Workforce Strategy",years:"10 YRS",bio:"Built and scaled hiring pipelines for AI-first teams — sees the gap between classroom AI and employable AI from the inside.",scars:["Built hiring pipelines for 40+ AI-first teams","Ran workforce transformation for two enterprises"]}];return a.jsx(sn,{id:"founders",index:2,eyebrow:"Why trust this",title:"Built by people who hired, fired, and shipped — not just taught.",sub:"Elevox exists because its founders sat on both sides of the table: inside the companies building AI, and inside the rooms deciding who gets hired to do it.",children:a.jsx("div",{className:"dossier",children:e.map(t=>a.jsxs("div",{className:"dossierCard",children:[a.jsxs("div",{className:"dossierCard__top",children:[a.jsx("div",{className:"dossierCard__id",children:a.jsx("div",{className:"dossierCard__id-pulse"})}),a.jsxs("div",{className:"dossierCard__heading",children:[a.jsx("h3",{className:"dossierCard__name",children:t.name}),a.jsx("p",{className:"dossierCard__role",children:t.role})]}),a.jsx("span",{className:"dossierCard__years",children:t.years})]}),a.jsx("p",{className:"dossierCard__bio",children:t.bio}),a.jsx("ul",{className:"dossierCard__scars",children:t.scars.map(n=>a.jsxs("li",{children:[a.jsx("span",{className:"dossierCard__scar-icon",children:"▶"}),n]},n))}),a.jsxs("div",{className:"dossierCard__neural",children:[a.jsx("span",{className:"dossierCard__neural-dot"}),a.jsx("span",{className:"dossierCard__neural-dot"}),a.jsx("span",{className:"dossierCard__neural-dot"})]})]},t.name))})})}function $1(){return a.jsx(sn,{id:"problem",index:3,tone:"panel",eyebrow:"The gap",title:"Courses teach tools. Companies hire outcomes.",children:a.jsxs("div",{className:"ledger",children:[a.jsxs("div",{className:"ledger__col ledger__col--problem",children:[a.jsxs("span",{className:"ledger__tag",children:[a.jsx("span",{className:"ledger__tag-icon",children:"⚠"})," LIABILITY"]}),a.jsx("h3",{className:"ledger__heading",children:"The problem"}),a.jsx("p",{className:"ledger__text",children:"Most AI training ends at certificates and tool tutorials. Learners leave knowing prompts and platforms, but not how to apply either inside a real role, team, or business problem."})]}),a.jsx("div",{className:"ledger__spine","aria-hidden":"true",children:a.jsx("div",{className:"ledger__spine-pulse"})}),a.jsxs("div",{className:"ledger__col ledger__col--opportunity",children:[a.jsxs("span",{className:"ledger__tag ledger__tag--accent",children:[a.jsx("span",{className:"ledger__tag-icon",children:"✦"})," ASSET"]}),a.jsx("h3",{className:"ledger__heading ledger__heading--accent",children:"The opportunity"}),a.jsx("p",{className:"ledger__text",children:"The market doesn't have an AI knowledge shortage — it has an AI application shortage. Whoever closes that gap first becomes the obvious hire, the obvious promotion, the obvious vendor."})]})]})})}function H1(){const e=[{code:"PRG.01",name:"Foundations",desc:"Applied AI literacy for any background, in weeks not semesters.",icon:"🧠"},{code:"PRG.02",name:"Specialist Tracks",desc:"Role-specific depth — product, data, ops, engineering, design.",icon:"⚡"},{code:"PRG.03",name:"Capstone & Portfolio",desc:"Real briefs, real stakeholders, work you can show employers.",icon:"📊"},{code:"PRG.04",name:"Workforce Cohorts",desc:"Team-wide rollouts built around your company's actual workflows.",icon:"🏢"}];return a.jsx(sn,{id:"programmes",index:4,eyebrow:"What we run",title:"One philosophy, four formats.",sub:"Every track ends the same way: with proof you can put in front of a hiring manager, a promotion panel, or a board.",children:a.jsx("div",{className:"grid grid--4",children:e.map(t=>a.jsxs("div",{className:"programmeCard",children:[a.jsx("div",{className:"programmeCard__icon",children:t.icon}),a.jsxs("span",{className:"programmeCard__code",children:[a.jsx("span",{className:"programmeCard__code-dot",children:"●"})," ",t.code]}),a.jsx("h3",{className:"programmeCard__name",children:t.name}),a.jsx("p",{className:"programmeCard__desc",children:t.desc}),a.jsx("div",{className:"programmeCard__glow"})]},t.name))})})}function G1({pathway:e}){var s;const t=["students","professionals","corporates","colleges"],n=((s=qo.find(l=>l.id===e))==null?void 0:s.audienceId)||null,[r,i]=k.useState(n||"students");k.useEffect(()=>{n&&i(n)},[n]);const o=Fd[r];return a.jsx(sn,{id:"audiences",index:5,eyebrow:"Built for where you stand",title:"Four starting points. One destination — employable AI fluency.",children:a.jsxs("div",{className:"switcher",children:[a.jsx("div",{className:"switcher__tabs",role:"tablist",children:t.map(l=>a.jsxs("button",{role:"tab","aria-selected":r===l,className:`switcher__tab ${r===l?"is-active":""}`,onClick:()=>i(l),children:[a.jsx("span",{className:"switcher__tabLabel",children:Fd[l].eyebrow.replace("For ","")}),n===l&&a.jsxs("span",{className:"switcher__tabBadge",children:[a.jsx("span",{className:"switcher__tabBadge-dot",children:"●"})," Matched"]})]},l))}),a.jsxs("div",{className:"switcher__panel",children:[a.jsx(As,{children:o.eyebrow}),a.jsx("h3",{className:"switcher__title",children:o.title}),a.jsx("p",{className:"switcher__body",children:o.body}),a.jsx("ul",{className:"switcher__list",children:o.points.map(l=>a.jsxs("li",{children:[a.jsx("span",{className:"switcher__list-icon",children:"▸"}),l]},l))}),a.jsxs("button",{className:"switcher__cta",children:[a.jsx("span",{className:"switcher__cta-icon",children:"⚡"}),o.cta]})]},r)]})})}function K1(){const e=[{n:"01",title:"Diagnose",desc:"Map where you stand against where the market is heading.",icon:"🔍"},{n:"02",title:"Build",desc:"Apply AI inside real briefs, not isolated tutorials.",icon:"🏗️"},{n:"03",title:"Prove",desc:"Leave with a portfolio, not just a certificate.",icon:"📈"},{n:"04",title:"Place",desc:"Get matched to roles or transformation outcomes.",icon:"🎯"}];return a.jsx(sn,{id:"pathway",index:6,eyebrow:"How it actually works",title:"The success pathway",sub:"Four stages. Every stage produces something you can show, not just something you've learned.",children:a.jsx("div",{className:"pathway",children:e.map((t,n)=>a.jsxs(ur.Fragment,{children:[a.jsxs("div",{className:"pathway__step",children:[a.jsx("span",{className:"pathway__num",children:t.n}),a.jsx("div",{className:"pathway__icon",children:t.icon}),a.jsx("h3",{className:"pathway__title",children:t.title}),a.jsx("p",{className:"pathway__desc",children:t.desc}),a.jsx("div",{className:"pathway__progress",children:a.jsx("div",{className:"pathway__progress-bar",style:{width:`${(n+1)*25}%`}})})]}),n<e.length-1&&a.jsx("div",{className:"pathway__connector","aria-hidden":"true",children:a.jsx("div",{className:"pathway__connector-dot"})})]},t.n))})})}function Y1(){const e=[{stat:"87%",label:"learners who moved roles or got promoted within 6 months",trend:"+12%"},{stat:"40+",label:"hiring & transformation partners in the network",trend:"+5"},{stat:"21 days",label:"average time from capstone to first interview",trend:"-3d"}];return a.jsx(sn,{id:"outcomes",index:7,tone:"panel",eyebrow:"Proof, not promises",title:"Outcomes we're accountable for.",children:a.jsx("div",{className:"readoutBar readoutBar--accent",children:e.map((t,n)=>a.jsxs(ur.Fragment,{children:[a.jsxs("div",{className:"readoutBar__item",children:[a.jsxs("div",{className:"readoutBar__stat",children:[a.jsx(Zo,{text:t.stat}),a.jsx("span",{className:"readoutBar__trend",children:t.trend})]}),a.jsx("div",{className:"readoutBar__label",children:t.label})]}),n<e.length-1&&a.jsx("div",{className:"readoutBar__rule","aria-hidden":"true"})]},t.label))})})}function X1(){const e=[{date:"08 JUL",title:"Applied AI for Product Teams",mode:"Live · Online",status:"active"},{date:"15 JUL",title:"AI Readiness Audit for Leaders",mode:"Live · Mumbai",status:"upcoming"},{date:"22 JUL",title:"From Tutorials to Portfolios",mode:"Live · Online",status:"upcoming"}];return a.jsx(sn,{id:"workshops",index:8,eyebrow:"This month",title:"Upcoming workshops",sub:"Free, live sessions to test the approach before you commit to a track.",children:a.jsx("div",{className:"workshopList",children:e.map(t=>a.jsxs("div",{className:"workshopRow",children:[a.jsxs("span",{className:"workshopRow__date",children:[a.jsx("span",{className:"workshopRow__date-dot"}),t.date]}),a.jsx("span",{className:"workshopRow__title",children:t.title}),a.jsx("span",{className:"workshopRow__mode",children:t.mode}),a.jsxs("button",{className:"workshopRow__cta",children:[a.jsx("span",{className:"workshopRow__cta-icon",children:"✦"}),"Reserve seat"]})]},t.title))})})}function Q1(){return a.jsxs("section",{className:"cta","data-rail-section":10,children:[a.jsxs("div",{className:"cta__neural-bg",children:[a.jsx("div",{className:"cta__neural-particle"}),a.jsx("div",{className:"cta__neural-particle",style:{animationDelay:"2s"}}),a.jsx("div",{className:"cta__neural-particle",style:{animationDelay:"4s"}})]}),a.jsxs("div",{className:"cta__inner",children:[a.jsxs(As,{tone:"amber",children:[a.jsx("span",{className:"cta__eyebrow-icon",children:"✦"})," Start here"]}),a.jsx("h2",{className:"cta__title",children:"Learning ends at a certificate. Ours ends at a job."}),a.jsx("p",{className:"cta__sub",children:"Tell us where you stand, and we'll show you the shortest real path from here to employable, promotable, or transformation-ready."}),a.jsxs("div",{className:"cta__row",children:[a.jsxs("button",{className:"btn btn--primary btn--lg",children:[a.jsx("span",{className:"btn__icon",children:"⚡"}),"Map my pathway"]}),a.jsxs("button",{className:"btn btn--ghost btn--lg",children:[a.jsx("span",{className:"btn__icon",children:"◇"}),"Talk to a founder"]})]}),a.jsxs("div",{className:"cta__ai-status",children:[a.jsx("span",{className:"cta__ai-dot",children:"●"}),"AI calibration complete — ready for your pathway"]})]})]})}function q1(){const[e,t]=k.useState(null),[n,r]=k.useState(!0),i=k.useCallback(o=>{t(o),r(!1)},[]);return k.useCallback(()=>{r(!0)},[]),a.jsxs("div",{className:"elevox",children:[a.jsx("style",{children:Z1}),n&&a.jsx(D1,{onSelect:i}),a.jsx(L1,{}),a.jsx(V1,{}),a.jsx(F1,{pathway:e}),a.jsx(B1,{}),a.jsx(O1,{}),a.jsx(W1,{}),a.jsx(U1,{}),a.jsx($1,{}),a.jsx(H1,{}),a.jsx(G1,{pathway:e}),a.jsx(K1,{}),a.jsx(Y1,{}),a.jsx(X1,{}),a.jsx(Q1,{})]})}const Z1=`
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
`;/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Km=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,r)=>r?r.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=e=>{const t=ew(e);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var la={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1},nw=k.createContext({}),rw=()=>k.useContext(nw),iw=k.forwardRef(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i="",children:o,iconNode:s,...l},c)=>{const{size:u=24,strokeWidth:p=2,absoluteStrokeWidth:d=!1,color:f="currentColor",className:y=""}=rw()??{},x=r??d?Number(n??p)*24/Number(t??u):n??p;return k.createElement("svg",{ref:c,...la,width:t??u??la.width,height:t??u??la.height,stroke:e??f,strokeWidth:x,className:Km("lucide",y,i),...!o&&!tw(l)&&{"aria-hidden":"true"},...l},[...s.map(([v,b])=>k.createElement(v,b)),...Array.isArray(o)?o:[o]])});/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(e,t)=>{const n=k.forwardRef(({className:r,...i},o)=>k.createElement(iw,{ref:o,iconNode:t,className:Km(`lucide-${J1(Od(e))}`,`lucide-${e}`,r),...i}));return n.displayName=Od(e),n};/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ow=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],xo=_e("arrow-right",ow);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],aw=_e("badge-check",sw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lw=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],cw=_e("book-open",lw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],dw=_e("brain",uw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pw=[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],Ym=_e("briefcase-business",pw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=[["path",{d:"M10 12h4",key:"a56b0p"}],["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M14 21v-3a2 2 0 0 0-4 0v3",key:"1rgiei"}],["path",{d:"M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2",key:"secmi2"}],["path",{d:"M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16",key:"16ra0t"}]],hw=_e("building-2",fw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]],gw=_e("calendar-days",mw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yw=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],xw=_e("chart-column",yw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z",key:"kmsa83"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],ww=_e("circle-play",vw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bw=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],Xm=_e("graduation-cap",bw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Sw=_e("map-pin",kw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cw=[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]],Qm=_e("network",Cw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jw=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],qm=_e("sparkles",jw);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Aw=_e("target",_w);/**
 * @license lucide-react v1.21.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ew=_e("users",Tw),Pw={badge:aw,book:cw,briefcase:Ym,building:hw,calendar:gw,chart:xw,graduation:Xm,map:Sw,network:Qm,play:ww,spark:qm,target:Aw,users:Ew};function lt({eyebrow:e,title:t,summary:n,primaryCta:r=["Map my pathway","/admissions"],secondaryCta:i=["Meet the founders","/leadership"],proof:o=["Founder-led credibility","Applied AI fluency","Employability outcomes"],sections:s=[],finalCta:l}){return a.jsxs("main",{className:"blueprint-page",children:[a.jsx("style",{children:Iw}),a.jsxs("section",{className:"blueprint-hero",children:[a.jsx("div",{className:"blueprint-grid","aria-hidden":"true"}),a.jsx("div",{className:"blueprint-orbit","aria-hidden":"true"}),a.jsxs("div",{className:"blueprint-container blueprint-hero-inner",children:[a.jsx("p",{className:"blueprint-eyebrow",children:e}),a.jsx("h1",{children:t}),a.jsx("p",{className:"blueprint-summary",children:n}),a.jsx("div",{className:"blueprint-proof",children:o.map(c=>a.jsx("span",{children:c},c))}),a.jsxs("div",{className:"blueprint-actions",children:[a.jsxs(pe,{className:"blueprint-btn blueprint-btn-primary",to:r[1],children:[r[0]," ",a.jsx(xo,{size:17})]}),a.jsx(pe,{className:"blueprint-btn blueprint-btn-secondary",to:i[1],children:i[0]})]})]})]}),s.map(c=>a.jsx("section",{className:`blueprint-section ${c.tone==="dark"?"is-dark":""}`,children:a.jsxs("div",{className:"blueprint-container",children:[a.jsxs("div",{className:"blueprint-section-head",children:[a.jsx("p",{className:"blueprint-eyebrow",children:c.eyebrow}),a.jsx("h2",{children:c.title}),c.copy&&a.jsx("p",{children:c.copy})]}),c.type==="steps"?a.jsx("div",{className:"blueprint-steps",children:c.items.map((u,p)=>a.jsxs("article",{className:"blueprint-step",children:[a.jsx("span",{children:String(p+1).padStart(2,"0")}),a.jsx("h3",{children:u.title}),a.jsx("p",{children:u.copy})]},u.title))}):a.jsx("div",{className:"blueprint-card-grid",children:c.items.map(u=>{const p=Pw[u.icon]||qm;return a.jsxs("article",{className:"blueprint-card",children:[a.jsx("div",{className:"blueprint-card-icon",children:a.jsx(p,{size:23})}),a.jsx("span",{children:u.label}),a.jsx("h3",{children:u.title}),a.jsx("p",{children:u.copy}),u.points&&a.jsx("ul",{children:u.points.map(d=>a.jsx("li",{children:d},d))}),u.link&&a.jsxs(pe,{to:u.link[1],children:[u.link[0]," ",a.jsx(xo,{size:15})]})]},u.title)})})]})},c.title)),l&&a.jsx("section",{className:"blueprint-final",children:a.jsxs("div",{className:"blueprint-container",children:[a.jsx("p",{className:"blueprint-eyebrow",children:l.eyebrow}),a.jsx("h2",{children:l.title}),a.jsx("p",{children:l.copy}),a.jsxs(pe,{className:"blueprint-btn blueprint-btn-primary",to:l.to,children:[l.label," ",a.jsx(xo,{size:17})]})]})})]})}const Iw=`
  .blueprint-page {
    min-height: 100vh;
    background: #020808;
    color: #f0f2f5;
    font-family: Inter, system-ui, sans-serif;
    overflow: hidden;
  }

  .blueprint-container {
    width: min(1180px, calc(100% - 48px));
    margin: 0 auto;
  }

  .blueprint-hero {
    position: relative;
    min-height: 76vh;
    display: flex;
    align-items: center;
    padding: 138px 0 84px;
    background:
      radial-gradient(circle at 72% 30%, rgba(0, 212, 168, 0.17), transparent 34%),
      linear-gradient(135deg, #020808 0%, #071212 52%, #020808 100%);
    isolation: isolate;
  }

  .blueprint-grid {
    position: absolute;
    inset: 0;
    z-index: -2;
    background-image:
      linear-gradient(rgba(143, 239, 213, 0.052) 1px, transparent 1px),
      linear-gradient(90deg, rgba(143, 239, 213, 0.045) 1px, transparent 1px);
    background-size: 58px 58px;
    mask-image: linear-gradient(to bottom, transparent, black 18%, black 78%, transparent);
  }

  .blueprint-orbit {
    position: absolute;
    right: 8%;
    top: 22%;
    z-index: -1;
    width: min(42vw, 520px);
    aspect-ratio: 1;
    border: 1px solid rgba(143, 239, 213, 0.16);
    border-radius: 999px;
    box-shadow: inset 0 0 70px rgba(0, 212, 168, 0.08), 0 0 90px rgba(0, 212, 168, 0.08);
    animation: blueprintFloat 8s ease-in-out infinite;
  }

  .blueprint-orbit::before,
  .blueprint-orbit::after {
    content: "";
    position: absolute;
    border-radius: inherit;
    border: 1px solid rgba(143, 239, 213, 0.11);
  }

  .blueprint-orbit::before { inset: 13%; }
  .blueprint-orbit::after { inset: 29%; background: rgba(0, 212, 168, 0.035); }

  .blueprint-hero-inner {
    position: relative;
    z-index: 1;
  }

  .blueprint-eyebrow {
    margin: 0 0 18px;
    color: #00d4a8;
    font-size: 12px;
    font-weight: 900;
    letter-spacing: 0.16em;
    text-transform: uppercase;
  }

  .blueprint-hero h1 {
    max-width: 920px;
    margin: 0 0 24px;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: clamp(42px, 7vw, 84px);
    line-height: 0.98;
    letter-spacing: 0;
  }

  .blueprint-summary {
    max-width: 720px;
    margin: 0 0 32px;
    color: rgba(240, 242, 245, 0.66);
    font-size: clamp(16px, 2vw, 20px);
    line-height: 1.68;
  }

  .blueprint-proof {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 34px;
  }

  .blueprint-proof span {
    border: 1px solid rgba(143, 239, 213, 0.18);
    border-radius: 8px;
    padding: 10px 13px;
    color: #8fefd5;
    background: rgba(143, 239, 213, 0.045);
    font-size: 13px;
  }

  .blueprint-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
  }

  .blueprint-btn {
    min-height: 46px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 9px;
    border-radius: 8px;
    padding: 12px 20px;
    text-decoration: none;
    font-weight: 800;
  }

  .blueprint-btn-primary {
    background: #00d4a8;
    color: #031a14;
  }

  .blueprint-btn-secondary {
    color: #f0f2f5;
    border: 1px solid rgba(143, 239, 213, 0.22);
    background: rgba(255, 255, 255, 0.035);
  }

  .blueprint-section {
    padding: 88px 0;
    background: #020808;
  }

  .blueprint-section.is-dark {
    background:
      radial-gradient(circle at 18% 12%, rgba(0, 212, 168, 0.1), transparent 28%),
      #071212;
    border-top: 1px solid rgba(143, 239, 213, 0.08);
    border-bottom: 1px solid rgba(143, 239, 213, 0.08);
  }

  .blueprint-section-head {
    max-width: 780px;
    margin-bottom: 36px;
  }

  .blueprint-section-head h2,
  .blueprint-final h2 {
    margin: 0;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: clamp(32px, 4.6vw, 58px);
    line-height: 1.04;
  }

  .blueprint-section-head > p:last-child,
  .blueprint-final p {
    max-width: 720px;
    margin: 18px 0 0;
    color: rgba(240, 242, 245, 0.62);
    font-size: 17px;
    line-height: 1.7;
  }

  .blueprint-card-grid,
  .blueprint-steps {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  .blueprint-card,
  .blueprint-step {
    min-height: 260px;
    border: 1px solid rgba(143, 239, 213, 0.13);
    border-radius: 8px;
    padding: 24px;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.055), rgba(255, 255, 255, 0.022));
  }

  .blueprint-card-icon {
    width: 48px;
    height: 48px;
    display: grid;
    place-items: center;
    margin-bottom: 22px;
    border-radius: 8px;
    color: #00d4a8;
    background: rgba(0, 212, 168, 0.1);
  }

  .blueprint-card > span,
  .blueprint-step > span {
    color: #f7b955;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .blueprint-card h3,
  .blueprint-step h3 {
    margin: 10px 0 10px;
    font-family: "Space Grotesk", Inter, system-ui, sans-serif;
    font-size: 22px;
    line-height: 1.12;
  }

  .blueprint-card p,
  .blueprint-step p {
    margin: 0;
    color: rgba(240, 242, 245, 0.6);
    line-height: 1.62;
  }

  .blueprint-card ul {
    display: grid;
    gap: 8px;
    margin: 18px 0 0;
    padding: 0;
    list-style: none;
  }

  .blueprint-card li {
    color: rgba(240, 242, 245, 0.62);
    font-size: 14px;
  }

  .blueprint-card li::before {
    content: "+";
    color: #00d4a8;
    margin-right: 8px;
    font-weight: 900;
  }

  .blueprint-card a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    color: #8fefd5;
    text-decoration: none;
    font-weight: 800;
  }

  .blueprint-final {
    padding: 96px 0 110px;
    text-align: center;
    background:
      radial-gradient(circle at 50% 0%, rgba(0, 212, 168, 0.18), transparent 34%),
      linear-gradient(180deg, #071212, #020808);
  }

  .blueprint-final .blueprint-container {
    max-width: 860px;
  }

  .blueprint-final .blueprint-btn {
    margin-top: 30px;
  }

  @keyframes blueprintFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(14px); }
  }

  @media (max-width: 980px) {
    .blueprint-card-grid,
    .blueprint-steps {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .blueprint-orbit {
      right: -18%;
      opacity: 0.42;
      width: 72vw;
    }
  }

  @media (max-width: 640px) {
    .blueprint-container {
      width: min(100% - 34px, 1180px);
    }

    .blueprint-hero {
      min-height: auto;
      padding: 112px 0 64px;
    }

    .blueprint-actions {
      flex-direction: column;
    }

    .blueprint-btn {
      width: 100%;
    }

    .blueprint-card-grid,
    .blueprint-steps {
      grid-template-columns: 1fr;
    }

    .blueprint-section {
      padding: 68px 0;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .blueprint-orbit {
      animation: none;
    }
  }
`;function ca(){return a.jsx(lt,{eyebrow:"About Elevox",title:"The academy built to turn intelligence into employability.",summary:"Elevox is not a traditional about-us story. It is the response to a clear market gap: AI is becoming a business skill, but practical AI infrastructure is still missing for many students, professionals, and Tier-2 cities.",primaryCta:["Explore programmes","/programmes"],secondaryCta:["Meet leadership","/leadership"],proof:["Why Elevox was created","AI skills gap in India","Tier-2 AI infrastructure"],sections:[{eyebrow:"Origin",title:"Why Elevox was created",copy:"Most training institutes sell courses. Elevox was created to build AI-ready professionals who can show proof of capability.",items:[{icon:"target",label:"Problem",title:"Learning is disconnected from employability.",copy:"Students and professionals often collect certificates without building role-ready proof, portfolios, or practical fluency.",points:["Outcome-first curriculum","Project-led learning","Career and business application"]},{icon:"chart",label:"Market gap",title:"AI demand is moving faster than education.",copy:"Companies need people who can apply AI inside business workflows, not only understand tools at a surface level.",points:["AI as a business skill","Workflow transformation","Industry-relevant projects"]},{icon:"map",label:"Nagpur and beyond",title:"Tier-2 cities need serious AI infrastructure.",copy:"Elevox brings premium AI learning, founder-led credibility, and career pathways closer to emerging talent markets.",points:["Campus partnerships","Local access","National ambition"]}]},{eyebrow:"Identity",title:"The meaning behind Elevox",copy:"Elevox combines the idea of elevating human capability with voice, purpose, and intelligence.",tone:"dark",items:[{icon:"spark",label:"Elevate",title:"Raise capability, not just confidence.",copy:"The goal is to help learners become credible in the market through visible work."},{icon:"users",label:"Vox",title:"Give talent a stronger voice.",copy:"Elevox helps students, professionals, and teams communicate what they can build with AI."},{icon:"badge",label:"Purpose",title:"Where Intelligence Meets Purpose.",copy:"AI education should serve careers, organisations, communities, and meaningful transformation."}]},{eyebrow:"Difference",title:"What makes Elevox different",copy:"The brand must feel like a technology company with founder-led trust, not another coaching institute.",items:[{icon:"briefcase",label:"Industry first",title:"Built by operators, not only trainers.",copy:"Founder experience and applied industry context shape the learning journey before a course is sold."},{icon:"network",label:"Transformation",title:"Courses become pathways.",copy:"Programmes connect skill diagnosis, tools, projects, portfolio, interviews, and adoption support."},{icon:"graduation",label:"Trust",title:"Premium but practical.",copy:"The experience is futuristic, but the promise stays grounded: build AI-ready professionals."}]}],finalCta:{eyebrow:"Next step",title:"See how the Elevox philosophy becomes a learning pathway.",copy:"Explore the programme hub and choose a track based on career, role, or organisation need.",label:"View programme hub",to:"/programmes"}})}function Wd(){return a.jsx(lt,{eyebrow:"Admissions",title:"Enrollment designed around clarity, counselling, and the right AI pathway.",summary:"The admissions page brings together batch calendar, fees, scholarships, financing options, application process, and counselling booking so learners can make a confident decision.",primaryCta:["Book counselling","/contact"],secondaryCta:["Compare programmes","/programmes"],proof:["Batch calendar","Fees and financing","Counselling booking"],sections:[{eyebrow:"Upcoming batches",title:"Choose a cohort based on your goal and schedule.",copy:"Dates are presented as planning placeholders and can be updated as final batches are announced.",items:[{icon:"calendar",label:"July 2026",title:"Elevox Foundations",copy:"AI literacy for students, graduates, and non-technical professionals.",points:["8 weeks","Hybrid cohort","Best first step"],link:["View programme","/programmes/foundations"]},{icon:"briefcase",label:"August 2026",title:"Professional Upskilling",copy:"Role-based AI capability for working professionals.",points:["12-24 weeks","Role intensive","Portfolio outcome"],link:["View programme","/programmes/upskilling"]},{icon:"book",label:"August 2026",title:"AI for Developers",copy:"Build AI-native apps, agents, and retrieval workflows.",points:["12 weeks","Code labs","Capstone project"],link:["View programme","/programmes/developers"]}]},{eyebrow:"Support",title:"Financial options that reduce decision friction.",copy:"Admissions should make the next step easier for students, parents, and professionals.",tone:"dark",items:[{icon:"badge",label:"Scholarships",title:"Merit and need-based support",copy:"Scholarship categories can support strong applicants, women in AI, and high-intent learners."},{icon:"chart",label:"Fees",title:"Transparent programme pricing",copy:"Each programme detail page carries duration, fees, format, certification, and outcomes."},{icon:"users",label:"Counselling",title:"Pathway recommendation call",copy:"Prospects can book counselling to decide between student, professional, or corporate routes."}]},{eyebrow:"Process",title:"Application process",type:"steps",items:[{title:"Tell us your goal",copy:"Share background, current role, timeline, and intended outcome."},{title:"Get pathway mapped",copy:"Counsellors recommend the right programme, workshop, or B2B route."},{title:"Confirm batch and fees",copy:"Review schedule, pricing, scholarships, and payment options."},{title:"Begin onboarding",copy:"Join orientation, baseline assessment, and mentor-led learning."}]}],finalCta:{eyebrow:"Admissions CTA",title:"Not sure which AI pathway fits you?",copy:"Start with counselling. Elevox can map the right route before you commit to a programme.",label:"Book counselling",to:"/contact"}})}function Nw(){return a.jsx(lt,{eyebrow:"For business and institutions",title:"Two routes for AI transformation: organisations and campuses.",summary:"This page helps business visitors choose between corporate workforce transformation and college partnerships without mixing the two buying journeys.",primaryCta:["Corporate training","/corporate"],secondaryCta:["College partnerships","/colleges"],proof:["For organisations","For colleges","Custom workshops"],sections:[{eyebrow:"Choose path",title:"Bring AI to the people you are responsible for.",copy:"Whether you lead a company or an institution, Elevox helps translate AI urgency into practical capability.",items:[{icon:"building",label:"Organisations",title:"Bring AI to your organisation",copy:"For HR leaders, CIOs, CTOs, MSMEs, and enterprises that need team upskilling and transformation.",points:["AI readiness","Team upskilling","Leadership sessions"],link:["Explore corporate","/corporate"]},{icon:"graduation",label:"Colleges",title:"Bring AI to your college",copy:"For engineering colleges, universities, MBA institutes, and polytechnic colleges.",points:["Campus workshops","Faculty development","Placement readiness"],link:["Explore colleges","/colleges"]},{icon:"calendar",label:"Events",title:"Custom workshops and masterclasses",copy:"Use a focused session to introduce AI, generate leads, and start a larger partnership.",points:["Open house","Bootcamps","Webinars"],link:["View workshops","/workshops"]}]}],finalCta:{eyebrow:"Business CTA",title:"Not sure which route fits?",copy:"Start with a conversation and Elevox will map the right pathway for your team or institution.",label:"Book consultation",to:"/contact"}})}function Ud(){return a.jsx(lt,{eyebrow:"Career Accelerator",title:"The employability layer that turns AI learning into career confidence.",summary:"Parents, students, and professionals need proof that learning leads somewhere. The Career Accelerator focuses on resumes, LinkedIn, mock interviews, portfolios, coaching, and employer connections.",primaryCta:["Apply for accelerator","/admissions"],secondaryCta:["Explore programmes","/programmes"],proof:["Resume building","Portfolio proof","Employer connections"],sections:[{eyebrow:"Services",title:"Everything learners need after the classroom.",copy:"Elevox positions employability as part of the learning experience, not an afterthought.",items:[{icon:"book",label:"Profile",title:"Resume building",copy:"Convert learning, projects, internships, and skills into clear employer-ready resumes.",points:["ATS-ready structure","Project framing","Role-specific positioning"]},{icon:"network",label:"Presence",title:"LinkedIn optimization",copy:"Shape a stronger professional identity around AI skills, projects, and career direction.",points:["Headline and about","Project posts","Recruiter visibility"]},{icon:"users",label:"Interviews",title:"Mock interviews",copy:"Practice technical, business, and behavioral interviews with mentor feedback.",points:["Confidence building","Role narratives","Feedback loops"]},{icon:"briefcase",label:"Proof",title:"Portfolio building",copy:"Turn class projects into demos, case studies, dashboards, repositories, and presentations.",points:["Capstone story","Demo review","Hiring proof"]},{icon:"target",label:"Guidance",title:"Career coaching",copy:"Help learners choose realistic roles and prepare for the next step with clarity.",points:["Pathway mapping","Application strategy","Confidence support"]},{icon:"building",label:"Market",title:"Employer connections",copy:"Create warm bridges between learner proof and companies looking for AI-ready talent.",points:["Hiring partner intros","Demo days","Placement support"]}]}],finalCta:{eyebrow:"Career CTA",title:"Build proof that survives outside the classroom.",copy:"Start with the pathway that matches your background, timeline, and career goal.",label:"Start admissions",to:"/admissions"}})}function $d(){return a.jsx(lt,{eyebrow:"Bring AI to your college",title:"Campus AI programmes for engineering colleges, universities, MBA institutes, and polytechnic colleges.",summary:"Elevox helps institutions make students more employable through AI awareness, workshops, faculty enablement, curriculum partnerships, and placement readiness.",primaryCta:["Invite Elevox to your campus","/contact"],secondaryCta:["View student pathways","/students"],proof:["Campus workshops","Faculty development","Placement readiness"],sections:[{eyebrow:"B2B2C model",title:"Turn AI from a guest lecture into a placement pipeline.",copy:"The college section is designed for decision-makers who need credible AI infrastructure without rebuilding everything from scratch.",items:[{icon:"graduation",label:"Students",title:"Campus workshops",copy:"High-energy AI sessions that help students understand where AI is changing jobs and how to begin.",points:["AI awareness","Hands-on demos","Career direction"]},{icon:"spark",label:"Awareness",title:"AI awareness sessions",copy:"Seminars and masterclasses for large student groups, management bodies, and department heads.",points:["Industry examples","Responsible AI","Skill roadmap"]},{icon:"book",label:"Faculty",title:"Faculty development programmes",copy:"Enable faculty to understand AI tools, learning design, and how to support student projects.",points:["Teaching resources","Tool fluency","Assessment support"]},{icon:"briefcase",label:"Careers",title:"Placement readiness programmes",copy:"Make students interview-ready with resumes, LinkedIn, portfolio projects, and employer-facing proof.",points:["Mock interviews","Portfolio building","Hiring signals"]},{icon:"network",label:"Curriculum",title:"AI curriculum partnerships",copy:"Embed AI modules into existing academic calendars with mentor support and practical assessments.",points:["Module design","Projects","Certification"]},{icon:"target",label:"Outcome",title:"Institutional differentiation",copy:"Help your campus stand out as a place that prepares students for AI-shaped industries.",points:["Employability","Brand credibility","Industry alignment"]}]}],finalCta:{eyebrow:"College CTA",title:"Invite Elevox to your campus.",copy:"Start with a workshop, awareness session, or a full placement-readiness partnership.",label:"Request campus proposal",to:"/contact"}})}function Rw(){return a.jsx(lt,{eyebrow:"Contact and visit",title:"Book a counselling call, campus visit, college session, or corporate consultation.",summary:"The contact page should support every major conversion path: location, maps, WhatsApp, appointment booking, campus visit scheduling, and directions.",primaryCta:["Book appointment","/contact"],secondaryCta:["View admissions","/admissions"],proof:["Campus visit scheduling","WhatsApp and calls","Directions and maps"],sections:[{eyebrow:"Contact paths",title:"Route every visitor to the right next step.",copy:"Students, parents, professionals, colleges, and organisations should immediately know how to contact Elevox.",items:[{icon:"graduation",label:"Students",title:"Admissions counselling",copy:"Get help choosing the right programme, batch, fees, scholarships, and career pathway.",points:["Programme fit","Batch calendar","Application process"]},{icon:"building",label:"Colleges",title:"Campus partnership call",copy:"Discuss workshops, awareness sessions, faculty development, or curriculum partnerships.",points:["Invite Elevox","Proposal request","Placement readiness"]},{icon:"briefcase",label:"Corporate",title:"Organisation consultation",copy:"Map workforce readiness, team training needs, and AI transformation opportunities.",points:["Readiness audit","Leadership session","Custom workshop"]},{icon:"map",label:"Visit",title:"Campus visit scheduling",copy:"Plan a visit to the Nagpur academy and see learning spaces, labs, and counselling support.",points:["Location","Directions","Appointment slot"]},{icon:"users",label:"Community",title:"WhatsApp and quick support",copy:"Offer fast answers for workshop registrations, open house events, and admissions questions.",points:["Quick query","Event help","Follow-up"]},{icon:"play",label:"Media",title:"Founder and media enquiries",copy:"Route thought leadership, webinar, podcast, and media appearance requests cleanly.",points:["Founder articles","Webinars","Media requests"]}]}],finalCta:{eyebrow:"Contact CTA",title:"Start with a conversation.",copy:"Whether you are a student, parent, college leader, or organisation, Elevox can map the right AI pathway.",label:"Book a conversation",to:"/admissions"}})}function Hd(){return a.jsx(lt,{eyebrow:"Bring AI to your organisation",title:"Workforce AI transformation for HR leaders, CIOs, CTOs, MSMEs, and enterprises.",summary:"Elevox helps organisations move from AI curiosity to adoption through readiness audits, leadership sessions, team upskilling, workshops, and transformation consulting.",primaryCta:["Schedule consultation","/contact"],secondaryCta:["View workshops","/workshops"],proof:["AI readiness programmes","Team upskilling","Leadership AI sessions"],sections:[{eyebrow:"Services",title:"Corporate solutions built around measurable adoption.",copy:"Every engagement starts with business context, team capability, and the workflows where AI can create leverage.",items:[{icon:"chart",label:"Audit",title:"AI Readiness Programme",copy:"Assess current team capability, identify priority workflows, and build a practical adoption roadmap.",points:["Skills assessment","Use-case mapping","30/60/90 day adoption plan"]},{icon:"users",label:"Teams",title:"Corporate workshops",copy:"Short, intensive sessions designed around your department, tools, market, and operating model.",points:["HR, sales, ops, finance, tech","Hands-on exercises","Custom examples"]},{icon:"briefcase",label:"Capability",title:"Team upskilling",copy:"Role-based cohort training that helps people apply AI inside real daily work.",points:["Role pathways","Workflow labs","Mentor review"]},{icon:"target",label:"Leadership",title:"Leadership AI sessions",copy:"Strategic sessions for leaders who need to understand opportunity, risk, talent, and transformation.",points:["AI strategy","Risk and governance","Change management"]},{icon:"network",label:"Consulting",title:"AI transformation consulting",copy:"Support for organisations that need a deeper implementation partner after training.",points:["Roadmap","Pilot design","Measurement system"]},{icon:"badge",label:"Outcome",title:"Business impact reporting",copy:"Track progress beyond attendance through workflow adoption, productivity, and confidence signals.",points:["Baseline and progress","Manager feedback","Use-case outcomes"]}]}],finalCta:{eyebrow:"Corporate CTA",title:"Help your team become AI-ready before your market forces the change.",copy:"Book a conversation to map your workforce, workflows, and first AI adoption opportunities.",label:"Bring AI to your organisation",to:"/contact"}})}const Mw=()=>a.jsx("div",{style:Lw,children:a.jsxs("section",{style:zw,children:[a.jsx("h1",{style:Dw,children:"Our Courses"}),a.jsx("p",{style:Vw,children:"Explore our comprehensive range of AI courses designed for every skill level."}),a.jsx("div",{style:Fw,children:[{name:"AI Fundamentals",level:"Beginner",duration:"8 Weeks"},{name:"Data Science Mastery",level:"Intermediate",duration:"12 Weeks"},{name:"Deep Learning",level:"Advanced",duration:"12 Weeks"},{name:"NLP Specialization",level:"Advanced",duration:"10 Weeks"},{name:"Computer Vision",level:"Advanced",duration:"10 Weeks"},{name:"MLOps Engineering",level:"Intermediate",duration:"8 Weeks"}].map((e,t)=>a.jsxs("div",{style:Bw,children:[a.jsx("h3",{style:Ow,children:e.name}),a.jsxs("div",{style:Ww,children:[a.jsx("span",{style:Uw,children:e.level}),a.jsx("span",{style:$w,children:e.duration})]}),a.jsx("a",{href:"/programmes",style:Hw,children:"Learn More →"})]},t))})]})}),Lw={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},zw={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},Dw={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,color:"#f0f2f5",textAlign:"center",marginBottom:"16px"},Vw={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",textAlign:"center",marginBottom:"40px"},Fw={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px"},Bw={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},Ow={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},Ww={display:"flex",gap:"12px",justifyContent:"center",marginBottom:"16px"},Uw={fontSize:"13px",padding:"4px 12px",borderRadius:"12px",backgroundColor:"rgba(0,212,168,0.1)",color:"#00d4a8"},$w={fontSize:"13px",padding:"4px 12px",borderRadius:"12px",backgroundColor:"rgba(255,255,255,0.05)",color:"rgba(240,242,245,0.5)"},Hw={color:"#00d4a8",textDecoration:"none",fontWeight:500,fontSize:"14px"},Zm=k.createContext({});function Jm(e){const t=k.useRef(null);return t.current===null&&(t.current=e()),t.current}const Gw=typeof window<"u",eg=Gw?k.useLayoutEffect:k.useEffect,Hc=k.createContext(null);function Gc(e,t){e.indexOf(t)===-1&&e.push(t)}function Jo(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const yt=(e,t,n)=>n>t?t:n<e?e:n;let Kc=()=>{};const Jt={},tg=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),ng=e=>typeof e=="object"&&e!==null,rg=e=>/^0[^.\s]+$/u.test(e);function ig(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ye=e=>e,vi=(...e)=>e.reduce((t,n)=>r=>n(t(r))),ci=(e,t,n)=>{const r=t-e;return r?(n-e)/r:1};class Yc{constructor(){this.subscriptions=[]}add(t){return Gc(this.subscriptions,t),()=>Jo(this.subscriptions,t)}notify(t,n,r){const i=this.subscriptions.length;if(i)if(i===1)this.subscriptions[0](t,n,r);else for(let o=0;o<i;o++){const s=this.subscriptions[o];s&&s(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Ve=e=>e*1e3,Ge=e=>e/1e3,og=(e,t)=>t?e*(1e3/t):0,sg=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Kw=1e-7,Yw=12;function Xw(e,t,n,r,i){let o,s,l=0;do s=t+(n-t)/2,o=sg(s,r,i)-e,o>0?n=s:t=s;while(Math.abs(o)>Kw&&++l<Yw);return s}function wi(e,t,n,r){if(e===t&&n===r)return Ye;const i=o=>Xw(o,0,1,e,n);return o=>o===0||o===1?o:sg(i(o),t,r)}const ag=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,lg=e=>t=>1-e(1-t),cg=wi(.33,1.53,.69,.99),Xc=lg(cg),ug=ag(Xc),dg=e=>e>=1?1:(e*=2)<1?.5*Xc(e):.5*(2-Math.pow(2,-10*(e-1))),Qc=e=>1-Math.sin(Math.acos(e)),pg=lg(Qc),fg=ag(Qc),Qw=wi(.42,0,1,1),qw=wi(0,0,.58,1),hg=wi(.42,0,.58,1),Zw=e=>Array.isArray(e)&&typeof e[0]!="number",mg=e=>Array.isArray(e)&&typeof e[0]=="number",Jw={linear:Ye,easeIn:Qw,easeInOut:hg,easeOut:qw,circIn:Qc,circInOut:fg,circOut:pg,backIn:Xc,backInOut:ug,backOut:cg,anticipate:dg},e2=e=>typeof e=="string",Gd=e=>{if(mg(e)){Kc(e.length===4);const[t,n,r,i]=e;return wi(t,n,r,i)}else if(e2(e))return Jw[e];return e},Hi=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function t2(e){let t=new Set,n=new Set,r=!1,i=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1};function l(u){o.has(u)&&(c.schedule(u),e()),u(s)}const c={schedule:(u,p=!1,d=!1)=>{const y=d&&r?t:n;return p&&o.add(u),y.add(u),u},cancel:u=>{n.delete(u),o.delete(u)},process:u=>{if(s=u,r){i=!0;return}r=!0;const p=t;t=n,n=p,t.forEach(l),t.clear(),r=!1,i&&(i=!1,c.process(u))}};return c}const n2=40;function gg(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},o=()=>n=!0,s=Hi.reduce((g,w)=>(g[w]=t2(o),g),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:p,update:d,preRender:f,render:y,postRender:x}=s,v=()=>{const g=Jt.useManualTiming,w=g?i.timestamp:performance.now();n=!1,g||(i.delta=r?1e3/60:Math.max(Math.min(w-i.timestamp,n2),1)),i.timestamp=w,i.isProcessing=!0,l.process(i),c.process(i),u.process(i),p.process(i),d.process(i),f.process(i),y.process(i),x.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(v))},b=()=>{n=!0,r=!0,i.isProcessing||e(v)};return{schedule:Hi.reduce((g,w)=>{const S=s[w];return g[w]=(T,_=!1,C=!1)=>(n||b(),S.schedule(T,_,C)),g},{}),cancel:g=>{for(let w=0;w<Hi.length;w++)s[Hi[w]].cancel(g)},state:i,steps:s}}const{schedule:U,cancel:en,state:de,steps:ua}=gg(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ye,!0);let vo;function r2(){vo=void 0}const be={now:()=>(vo===void 0&&be.set(de.isProcessing||Jt.useManualTiming?de.timestamp:performance.now()),vo),set:e=>{vo=e,queueMicrotask(r2)}},yg=e=>t=>typeof t=="string"&&t.startsWith(e),xg=yg("--"),i2=yg("var(--"),qc=e=>i2(e)?o2.test(e.split("/*")[0].trim()):!1,o2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Kd(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const hr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ui={...hr,transform:e=>yt(0,1,e)},Gi={...hr,default:1},Br=e=>Math.round(e*1e5)/1e5,Zc=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function s2(e){return e==null}const a2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Jc=(e,t)=>n=>!!(typeof n=="string"&&a2.test(n)&&n.startsWith(e)||t&&!s2(n)&&Object.prototype.hasOwnProperty.call(n,t)),vg=(e,t,n)=>r=>{if(typeof r!="string")return r;const[i,o,s,l]=r.match(Zc);return{[e]:parseFloat(i),[t]:parseFloat(o),[n]:parseFloat(s),alpha:l!==void 0?parseFloat(l):1}},l2=e=>yt(0,255,e),da={...hr,transform:e=>Math.round(l2(e))},yn={test:Jc("rgb","red"),parse:vg("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+da.transform(e)+", "+da.transform(t)+", "+da.transform(n)+", "+Br(ui.transform(r))+")"};function c2(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}}const kl={test:Jc("#"),parse:c2,transform:yn.transform},bi=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),vt=bi("deg"),gt=bi("%"),N=bi("px"),u2=bi("vh"),d2=bi("vw"),Yd={...gt,parse:e=>gt.parse(e)/100,transform:e=>gt.transform(e*100)},Hn={test:Jc("hsl","hue"),parse:vg("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+gt.transform(Br(t))+", "+gt.transform(Br(n))+", "+Br(ui.transform(r))+")"},ne={test:e=>yn.test(e)||kl.test(e)||Hn.test(e),parse:e=>yn.test(e)?yn.parse(e):Hn.test(e)?Hn.parse(e):kl.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?yn.transform(e):Hn.transform(e),getAnimatableNone:e=>{const t=ne.parse(e);return t.alpha=0,ne.transform(t)}},p2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function f2(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(Zc))==null?void 0:t.length)||0)+(((n=e.match(p2))==null?void 0:n.length)||0)>0}const wg="number",bg="color",h2="var",m2="var(",Xd="${}",g2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ar(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let o=0;const l=t.replace(g2,c=>(ne.test(c)?(r.color.push(o),i.push(bg),n.push(ne.parse(c))):c.startsWith(m2)?(r.var.push(o),i.push(h2),n.push(c)):(r.number.push(o),i.push(wg),n.push(parseFloat(c))),++o,Xd)).split(Xd);return{values:n,split:l,indexes:r,types:i}}function y2(e){return ar(e).values}function kg({split:e,types:t}){const n=e.length;return r=>{let i="";for(let o=0;o<n;o++)if(i+=e[o],r[o]!==void 0){const s=t[o];s===wg?i+=Br(r[o]):s===bg?i+=ne.transform(r[o]):i+=r[o]}return i}}function x2(e){return kg(ar(e))}const v2=e=>typeof e=="number"?0:ne.test(e)?ne.getAnimatableNone(e):e,w2=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:v2(e);function b2(e){const t=ar(e);return kg(t)(t.values.map((r,i)=>w2(r,t.split[i])))}const st={test:f2,parse:y2,createTransformer:x2,getAnimatableNone:b2};function pa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function k2({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let i=0,o=0,s=0;if(!t)i=o=s=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;i=pa(c,l,e+1/3),o=pa(c,l,e),s=pa(c,l,e-1/3)}return{red:Math.round(i*255),green:Math.round(o*255),blue:Math.round(s*255),alpha:r}}function es(e,t){return n=>n>0?t:e}const W=(e,t,n)=>e+(t-e)*n,fa=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},S2=[kl,yn,Hn],C2=e=>S2.find(t=>t.test(e));function Qd(e){const t=C2(e);if(!t)return!1;let n=t.parse(e);return t===Hn&&(n=k2(n)),n}const qd=(e,t)=>{const n=Qd(e),r=Qd(t);if(!n||!r)return es(e,t);const i={...n};return o=>(i.red=fa(n.red,r.red,o),i.green=fa(n.green,r.green,o),i.blue=fa(n.blue,r.blue,o),i.alpha=W(n.alpha,r.alpha,o),yn.transform(i))},Sl=new Set(["none","hidden"]);function j2(e,t){return Sl.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function _2(e,t){return n=>W(e,t,n)}function eu(e){return typeof e=="number"?_2:typeof e=="string"?qc(e)?es:ne.test(e)?qd:E2:Array.isArray(e)?Sg:typeof e=="object"?ne.test(e)?qd:A2:es}function Sg(e,t){const n=[...e],r=n.length,i=e.map((o,s)=>eu(o)(o,t[s]));return o=>{for(let s=0;s<r;s++)n[s]=i[s](o);return n}}function A2(e,t){const n={...e,...t},r={};for(const i in n)e[i]!==void 0&&t[i]!==void 0&&(r[i]=eu(e[i])(e[i],t[i]));return i=>{for(const o in r)n[o]=r[o](i);return n}}function T2(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const o=t.types[i],s=e.indexes[o][r[o]],l=e.values[s]??0;n[i]=l,r[o]++}return n}const E2=(e,t)=>{const n=st.createTransformer(t),r=ar(e),i=ar(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?Sl.has(e)&&!i.values.length||Sl.has(t)&&!r.values.length?j2(e,t):vi(Sg(T2(r,i),i.values),n):es(e,t)};function Cg(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?W(e,t,n):eu(e)(e,t)}const P2=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>U.update(t,n),stop:()=>en(t),now:()=>de.isProcessing?de.timestamp:be.now()}},jg=(e,t,n=10)=>{let r="";const i=Math.max(Math.round(t/n),2);for(let o=0;o<i;o++)r+=Math.round(e(o/(i-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},ts=2e4;function tu(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ts;)t+=n,r=e.next(t);return t>=ts?1/0:t}function I2(e,t=100,n){const r=n({...e,keyframes:[0,t]}),i=Math.min(tu(r),ts);return{type:"keyframes",ease:o=>r.next(i*o).value/t,duration:Ge(i)}}const q={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Cl(e,t){return e*Math.sqrt(1-t*t)}const N2=12;function R2(e,t,n){let r=n;for(let i=1;i<N2;i++)r=r-e(r)/t(r);return r}const ha=.001;function M2({duration:e=q.duration,bounce:t=q.bounce,velocity:n=q.velocity,mass:r=q.mass}){let i,o,s=1-t;s=yt(q.minDamping,q.maxDamping,s),e=yt(q.minDuration,q.maxDuration,Ge(e)),s<1?(i=u=>{const p=u*s,d=p*e,f=p-n,y=Cl(u,s),x=Math.exp(-d);return ha-f/y*x},o=u=>{const d=u*s*e,f=d*n+n,y=Math.pow(s,2)*Math.pow(u,2)*e,x=Math.exp(-d),v=Cl(Math.pow(u,2),s);return(-i(u)+ha>0?-1:1)*((f-y)*x)/v}):(i=u=>{const p=Math.exp(-u*e),d=(u-n)*e+1;return-ha+p*d},o=u=>{const p=Math.exp(-u*e),d=(n-u)*(e*e);return p*d});const l=5/e,c=R2(i,o,l);if(e=Ve(e),isNaN(c))return{stiffness:q.stiffness,damping:q.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:s*2*Math.sqrt(r*u),duration:e}}}const L2=["duration","bounce"],z2=["stiffness","damping","mass"];function Zd(e,t){return t.some(n=>e[n]!==void 0)}function D2(e){let t={velocity:q.velocity,stiffness:q.stiffness,damping:q.damping,mass:q.mass,isResolvedFromDuration:!1,...e};if(!Zd(e,z2)&&Zd(e,L2))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),i=r*r,o=2*yt(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:q.mass,stiffness:i,damping:o}}else{const n=M2({...e,velocity:0});t={...t,...n,mass:q.mass},t.isResolvedFromDuration=!0}return t}function ns(e=q.visualDuration,t=q.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const o=n.keyframes[0],s=n.keyframes[n.keyframes.length-1],l={done:!1,value:o},{stiffness:c,damping:u,mass:p,duration:d,velocity:f,isResolvedFromDuration:y}=D2({...n,velocity:-Ge(n.velocity||0)}),x=f||0,v=u/(2*Math.sqrt(c*p)),b=s-o,m=Ge(Math.sqrt(c/p)),h=Math.abs(b)<5;r||(r=h?q.restSpeed.granular:q.restSpeed.default),i||(i=h?q.restDelta.granular:q.restDelta.default);let g,w,S,T,_,C;if(v<1)S=Cl(m,v),T=(x+v*m*b)/S,g=P=>{const V=Math.exp(-v*m*P);return s-V*(T*Math.sin(S*P)+b*Math.cos(S*P))},_=v*m*T+b*S,C=v*m*b-T*S,w=P=>Math.exp(-v*m*P)*(_*Math.sin(S*P)+C*Math.cos(S*P));else if(v===1){g=V=>s-Math.exp(-m*V)*(b+(x+m*b)*V);const P=x+m*b;w=V=>Math.exp(-m*V)*(m*P*V-x)}else{const P=m*Math.sqrt(v*v-1);g=Me=>{const qe=Math.exp(-v*m*Me),Ae=Math.min(P*Me,300);return s-qe*((x+v*m*b)*Math.sinh(Ae)+P*b*Math.cosh(Ae))/P};const V=(x+v*m*b)/P,ee=v*m*V-b*P,Re=v*m*b-V*P;w=Me=>{const qe=Math.exp(-v*m*Me),Ae=Math.min(P*Me,300);return qe*(ee*Math.sinh(Ae)+Re*Math.cosh(Ae))}}const L={calculatedDuration:y&&d||null,velocity:P=>Ve(w(P)),next:P=>{if(!y&&v<1){const ee=Math.exp(-v*m*P),Re=Math.sin(S*P),Me=Math.cos(S*P),qe=s-ee*(T*Re+b*Me),Ae=Ve(ee*(_*Re+C*Me));return l.done=Math.abs(Ae)<=r&&Math.abs(s-qe)<=i,l.value=l.done?s:qe,l}const V=g(P);if(y)l.done=P>=d;else{const ee=Ve(w(P));l.done=Math.abs(ee)<=r&&Math.abs(s-V)<=i}return l.value=l.done?s:V,l},toString:()=>{const P=Math.min(tu(L),ts),V=jg(ee=>L.next(P*ee).value,P,30);return P+"ms "+V},toTransition:()=>{}};return L}ns.applyToOptions=e=>{const t=I2(e,100,ns);return e.ease=t.ease,e.duration=Ve(t.duration),e.type="keyframes",e};const V2=5;function _g(e,t,n){const r=Math.max(t-V2,0);return og(n-e(r),t-r)}function jl({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:i=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:p}){const d=e[0],f={done:!1,value:d},y=C=>l!==void 0&&C<l||c!==void 0&&C>c,x=C=>l===void 0?c:c===void 0||Math.abs(l-C)<Math.abs(c-C)?l:c;let v=n*t;const b=d+v,m=s===void 0?b:s(b);m!==b&&(v=m-d);const h=C=>-v*Math.exp(-C/r),g=C=>m+h(C),w=C=>{const L=h(C),P=g(C);f.done=Math.abs(L)<=u,f.value=f.done?m:P};let S,T;const _=C=>{y(f.value)&&(S=C,T=ns({keyframes:[f.value,x(f.value)],velocity:_g(g,C,f.value),damping:i,stiffness:o,restDelta:u,restSpeed:p}))};return _(0),{calculatedDuration:null,next:C=>{let L=!1;return!T&&S===void 0&&(L=!0,w(C),_(C)),S!==void 0&&C>=S?T.next(C-S):(!L&&w(C),f)}}}function F2(e,t,n){const r=[],i=n||Jt.mix||Cg,o=e.length-1;for(let s=0;s<o;s++){let l=i(e[s],e[s+1]);if(t){const c=Array.isArray(t)?t[s]||Ye:t;l=vi(c,l)}r.push(l)}return r}function B2(e,t,{clamp:n=!0,ease:r,mixer:i}={}){const o=e.length;if(Kc(o===t.length),o===1)return()=>t[0];if(o===2&&t[0]===t[1])return()=>t[1];const s=e[0]===e[1];e[0]>e[o-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=F2(t,r,i),c=l.length,u=p=>{if(s&&p<e[0])return t[0];let d=0;if(c>1)for(;d<e.length-2&&!(p<e[d+1]);d++);const f=ci(e[d],e[d+1],p);return l[d](f)};return n?p=>u(yt(e[0],e[o-1],p)):u}function O2(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=ci(0,t,r);e.push(W(n,1,i))}}function W2(e){const t=[0];return O2(t,e.length-1),t}function U2(e,t){return e.map(n=>n*t)}function $2(e,t){return e.map(()=>t||hg).splice(0,e.length-1)}function Or({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const i=Zw(r)?r.map(Gd):Gd(r),o={done:!1,value:t[0]},s=U2(n&&n.length===t.length?n:W2(t),e),l=B2(s,t,{ease:Array.isArray(i)?i:$2(t,i)});return{calculatedDuration:e,next:c=>(o.value=l(c),o.done=c>=e,o)}}const H2=e=>e!==null;function Ts(e,{repeat:t,repeatType:n="loop"},r,i=1){const o=e.filter(H2),l=i<0||t&&n!=="loop"&&t%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const G2={decay:jl,inertia:jl,tween:Or,keyframes:Or,spring:ns};function Ag(e){typeof e.type=="string"&&(e.type=G2[e.type])}class nu{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const K2=e=>e/100;class rs extends nu{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,i;const{motionValue:n}=this.options;n&&n.updatedAt!==be.now()&&this.tick(be.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(i=(r=this.options).onStop)==null||i.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;Ag(t);const{type:n=Or,repeat:r=0,repeatDelay:i=0,repeatType:o,velocity:s=0}=t;let{keyframes:l}=t;const c=n||Or;c!==Or&&typeof l[0]!="number"&&(this.mixKeyframes=vi(K2,Cg(l[0],l[1])),l=[0,100]);const u=c({...t,keyframes:l});o==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-s})),u.calculatedDuration===null&&(u.calculatedDuration=tu(u));const{calculatedDuration:p}=u;this.calculatedDuration=p,this.resolvedDuration=p+i,this.totalDuration=this.resolvedDuration*(r+1)-i,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:i,mixKeyframes:o,mirroredGenerator:s,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:p,repeat:d,repeatType:f,repeatDelay:y,type:x,onUpdate:v,finalKeyframe:b}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-i/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const m=this.currentTime-u*(this.playbackSpeed>=0?1:-1),h=this.playbackSpeed>=0?m<0:m>i;this.currentTime=Math.max(m,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=i);let g=this.currentTime,w=r;if(d){const C=Math.min(this.currentTime,i)/l;let L=Math.floor(C),P=C%1;!P&&C>=1&&(P=1),P===1&&L--,L=Math.min(L,d+1),!!(L%2)&&(f==="reverse"?(P=1-P,y&&(P-=y/l)):f==="mirror"&&(w=s)),g=yt(0,1,P)*l}let S;h?(this.delayState.value=p[0],S=this.delayState):S=w.next(g),o&&!h&&(S.value=o(S.value));let{done:T}=S;!h&&c!==null&&(T=this.playbackSpeed>=0?this.currentTime>=i:this.currentTime<=0);const _=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&T);return _&&x!==jl&&(S.value=Ts(p,this.options,b,this.speed)),v&&v(S.value),_&&this.finish(),S}then(t,n){return this.finished.then(t,n)}get duration(){return Ge(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ge(t)}get time(){return Ge(this.currentTime)}set time(t){t=Ve(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return _g(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(be.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Ge(this.currentTime))}play(){var i,o;if(this.isStopped)return;const{driver:t=P2,startTime:n}=this.options;this.driver||(this.driver=t(s=>this.tick(s))),(o=(i=this.options).onPlay)==null||o.call(i);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(be.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function Y2(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const xn=e=>e*180/Math.PI,_l=e=>{const t=xn(Math.atan2(e[1],e[0]));return Al(t)},X2={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:_l,rotateZ:_l,skewX:e=>xn(Math.atan(e[1])),skewY:e=>xn(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},Al=e=>(e=e%360,e<0&&(e+=360),e),Jd=_l,ep=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),tp=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),Q2={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ep,scaleY:tp,scale:e=>(ep(e)+tp(e))/2,rotateX:e=>Al(xn(Math.atan2(e[6],e[5]))),rotateY:e=>Al(xn(Math.atan2(-e[2],e[0]))),rotateZ:Jd,rotate:Jd,skewX:e=>xn(Math.atan(e[4])),skewY:e=>xn(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function Tl(e){return e.includes("scale")?1:0}function El(e,t){if(!e||e==="none")return Tl(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=Q2,i=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=X2,i=l}if(!i)return Tl(t);const o=r[t],s=i[1].split(",").map(Z2);return typeof o=="function"?o(s):s[o]}const q2=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return El(n,t)};function Z2(e){return parseFloat(e.trim())}const mr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],gr=new Set([...mr,"pathRotation"]),np=e=>e===hr||e===N,J2=new Set(["x","y","z"]),eb=mr.filter(e=>!J2.has(e));function tb(e){const t=[];return eb.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const Ot={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const i=e.max-e.min;return r==="border-box"?i:i-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>El(t,"x"),y:(e,{transform:t})=>El(t,"y")};Ot.translateX=Ot.x;Ot.translateY=Ot.y;const bn=new Set;let Pl=!1,Il=!1,Nl=!1;function Tg(){if(Il){const e=Array.from(bn).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const i=tb(r);i.length&&(n.set(r,i),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const i=n.get(r);i&&i.forEach(([o,s])=>{var l;(l=r.getValue(o))==null||l.set(s)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Il=!1,Pl=!1,bn.forEach(e=>e.complete(Nl)),bn.clear()}function Eg(){bn.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(Il=!0)})}function nb(){Nl=!0,Eg(),Tg(),Nl=!1}class ru{constructor(t,n,r,i,o,s=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=i,this.element=o,this.isAsync=s}scheduleResolve(){this.state="scheduled",this.isAsync?(bn.add(this),Pl||(Pl=!0,U.read(Eg),U.resolveKeyframes(Tg))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:i}=this;if(t[0]===null){const o=i==null?void 0:i.get(),s=t[t.length-1];if(o!==void 0)t[0]=o;else if(r&&n){const l=r.readValue(n,s);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=s),i&&o===void 0&&i.set(t[0])}Y2(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),bn.delete(this)}cancel(){this.state==="scheduled"&&(bn.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const rb=e=>e.startsWith("--");function Pg(e,t,n){rb(t)?e.style.setProperty(t,n):e.style[t]=n}const ib={};function Ig(e,t){const n=ig(e);return()=>ib[t]??n()}const ob=Ig(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),Ng=Ig(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Pr=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,rp={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Pr([0,.65,.55,1]),circOut:Pr([.55,0,1,.45]),backIn:Pr([.31,.01,.66,-.59]),backOut:Pr([.33,1.53,.69,.99])};function Rg(e,t){if(e)return typeof e=="function"?Ng()?jg(e,t):"ease-out":mg(e)?Pr(e):Array.isArray(e)?e.map(n=>Rg(n,t)||rp.easeOut):rp[e]}function sb(e,t,n,{delay:r=0,duration:i=300,repeat:o=0,repeatType:s="loop",ease:l="easeOut",times:c}={},u=void 0){const p={[t]:n};c&&(p.offset=c);const d=Rg(l,i);Array.isArray(d)&&(p.easing=d);const f={delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:o+1,direction:s==="reverse"?"alternate":"normal"};return u&&(f.pseudoElement=u),e.animate(p,f)}function Mg(e){return typeof e=="function"&&"applyToOptions"in e}function ab({type:e,...t}){return Mg(e)&&Ng()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class Lg extends nu{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:i,pseudoElement:o,allowFlatten:s=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!o,this.allowFlatten=s,this.options=t,Kc(typeof t.type!="string");const u=ab(t);this.animation=sb(n,r,i,u,o),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!o){const p=Ts(i,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(p),Pg(n,r,p),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,i;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((i=(r=this.animation).commitStyles)==null||i.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Ge(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Ge(t)}get time(){return Ge(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Ve(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:i}){var o;return this.allowFlatten&&((o=this.animation.effect)==null||o.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&ob()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),Ye):i(this)}}const zg={anticipate:dg,backInOut:ug,circInOut:fg};function lb(e){return e in zg}function cb(e){typeof e.ease=="string"&&lb(e.ease)&&(e.ease=zg[e.ease])}const ma=10;class ub extends Lg{constructor(t){cb(t),Ag(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:i,element:o,...s}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new rs({...s,autoplay:!1}),c=Math.max(ma,be.now()-this.startTime),u=yt(0,ma,c-ma),p=l.sample(c).value,{name:d}=this.options;o&&d&&Pg(o,d,p),n.setWithVelocity(l.sample(Math.max(0,c-u)).value,p,u),l.stop()}}const ip=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(st.test(e)||e==="0")&&!e.startsWith("url("));function db(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function pb(e,t,n,r){const i=e[0];if(i===null)return!1;if(t==="display"||t==="visibility")return!0;const o=e[e.length-1],s=ip(i,t),l=ip(o,t);return!s||!l?!1:db(e)||(n==="spring"||Mg(n))&&r}function Rl(e){e.duration=0,e.type="keyframes"}const Dg=new Set(["opacity","clipPath","filter","transform"]),fb=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function hb(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&fb.test(e[t]))return!0;return!1}const mb=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),gb=ig(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function yb(e){var d;const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:o,type:s,keyframes:l}=e;if(!(((d=t==null?void 0:t.owner)==null?void 0:d.current)instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:p}=t.owner.getProps();return gb()&&n&&(Dg.has(n)||mb.has(n)&&hb(l))&&(n!=="transform"||!p)&&!u&&!r&&i!=="mirror"&&o!==0&&s!=="inertia"}const xb=40;class vb extends nu{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:o=0,repeatType:s="loop",keyframes:l,name:c,motionValue:u,element:p,...d}){var x;super(),this.stop=()=>{var v,b;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(b=this.keyframeResolver)==null||b.cancel()},this.createdAt=be.now();const f={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:o,repeatType:s,name:c,motionValue:u,element:p,...d},y=(p==null?void 0:p.KeyframeResolver)||ru;this.keyframeResolver=new y(l,(v,b,m)=>this.onKeyframesResolved(v,b,f,!m),c,u,p),(x=this.keyframeResolver)==null||x.scheduleResolve()}onKeyframesResolved(t,n,r,i){var m,h;this.keyframeResolver=void 0;const{name:o,type:s,velocity:l,delay:c,isHandoff:u,onUpdate:p}=r;this.resolvedAt=be.now();let d=!0;pb(t,o,s,l)||(d=!1,(Jt.instantAnimations||!c)&&(p==null||p(Ts(t,r,n))),t[0]=t[t.length-1],Rl(r),r.repeat=0);const y={startTime:i?this.resolvedAt?this.resolvedAt-this.createdAt>xb?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},x=d&&!u&&yb(y),v=(h=(m=y.motionValue)==null?void 0:m.owner)==null?void 0:h.current;let b;if(x)try{b=new ub({...y,element:v})}catch{b=new rs(y)}else b=new rs(y);b.finished.then(()=>{this.notifyFinished()}).catch(Ye),this.pendingTimeline&&(this.stopTimeline=b.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=b}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),nb()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function Vg(e,t,n,r=0,i=1){const o=Array.from(e).sort((u,p)=>u.sortNodePosition(p)).indexOf(t),s=e.size,l=(s-1)*r;return typeof n=="function"?n(o,s):i===1?o*r:l-o*r}const op=30,wb=e=>!isNaN(parseFloat(e));class bb{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var o;const i=be.now();if(this.updatedAt!==i&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((o=this.events.change)==null||o.notify(this.current),this.dependents))for(const s of this.dependents)s.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=be.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=wb(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Yc);const r=this.events[t].add(n);return t==="change"?()=>{r(),U.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=be.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>op)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,op);return og(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function lr(e,t){return new bb(e,t)}function Fg(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function iu(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?Fg(n,e):n}const kb={type:"spring",stiffness:500,damping:25,restSpeed:10},Sb=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Cb={type:"keyframes",duration:.8},jb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},_b=(e,{keyframes:t})=>t.length>2?Cb:gr.has(e)?e.startsWith("scale")?Sb(t[1]):kb:jb,Ab=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function Tb(e){for(const t in e)if(!Ab.has(t))return!0;return!1}const ou=(e,t,n,r={},i,o)=>s=>{const l=iu(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-Ve(c);const p={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:f=>{t.set(f),l.onUpdate&&l.onUpdate(f)},onComplete:()=>{s(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:o?void 0:i};Tb(l)||Object.assign(p,_b(e,p)),p.duration&&(p.duration=Ve(p.duration)),p.repeatDelay&&(p.repeatDelay=Ve(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let d=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Rl(p),p.delay===0&&(d=!0)),(Jt.instantAnimations||Jt.skipAnimations||i!=null&&i.shouldSkipAnimations||l.skipAnimations)&&(d=!0,Rl(p),p.delay=0),p.allowFlatten=!l.type&&!l.ease,d&&!o&&t.get()!==void 0){const f=Ts(p.keyframes,l);if(f!==void 0){U.update(()=>{p.onUpdate(f),p.onComplete()});return}}return l.isSync?new rs(p):new vb(p)},Eb=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Pb(e){const t=Eb.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}function Bg(e,t,n=1){const[r,i]=Pb(e);if(!r)return;const o=window.getComputedStyle(t).getPropertyValue(r);if(o){const s=o.trim();return tg(s)?parseFloat(s):s}return qc(i)?Bg(i,t,n+1):i}function sp(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function su(e,t,n,r){if(typeof t=="function"){const[i,o]=sp(r);t=t(n!==void 0?n:e.custom,i,o)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[i,o]=sp(r);t=t(n!==void 0?n:e.custom,i,o)}return t}function kn(e,t,n){const r=e.getProps();return su(r,t,n!==void 0?n:r.custom,e)}const Og=new Set(["width","height","top","left","right","bottom",...mr]),Ml=e=>Array.isArray(e);function Ib(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,lr(n))}function Nb(e){return Ml(e)?e[e.length-1]||0:e}function au(e,t){const n=kn(e,t);let{transitionEnd:r={},transition:i={},...o}=n||{};o={...o,...r};for(const s in o){const l=Nb(o[s]);Ib(e,s,l)}}const fe=e=>!!(e&&e.getVelocity);function Rb(e){return!!(fe(e)&&e.add)}function Ll(e,t){const n=e.getValue("willChange");if(Rb(n))return n.add(t);if(!n&&Jt.WillChange){const r=new Jt.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function lu(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const Mb="framerAppearId",Wg="data-"+lu(Mb);function Ug(e){return e.props[Wg]}function Lb({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function $g(e,t,{delay:n=0,transitionOverride:r,type:i}={}){let{transition:o,transitionEnd:s,...l}=t;const c=e.getDefaultTransition();o=o?Fg(o,c):c;const u=o==null?void 0:o.reduceMotion,p=o==null?void 0:o.skipAnimations;r&&(o=r);const d=[],f=i&&e.animationState&&e.animationState.getState()[i],y=o==null?void 0:o.path;y&&y.animateVisualElement(e,l,o,n,d);for(const x in l){const v=e.getValue(x,e.latestValues[x]??null),b=l[x];if(b===void 0||f&&Lb(f,x))continue;const m={delay:n,...iu(o||{},x)};p&&(m.skipAnimations=!0);const h=v.get();if(h!==void 0&&!v.isAnimating()&&!Array.isArray(b)&&b===h&&!m.velocity){U.update(()=>v.set(b));continue}let g=!1;if(window.MotionHandoffAnimation){const T=Ug(e);if(T){const _=window.MotionHandoffAnimation(T,x,U);_!==null&&(m.startTime=_,g=!0)}}Ll(e,x);const w=u??e.shouldReduceMotion;v.start(ou(x,v,b,w&&Og.has(x)?{type:!1}:m,e,g));const S=v.animation;S&&d.push(S)}if(s){const x=()=>U.update(()=>{s&&au(e,s)});d.length?Promise.all(d).then(x):x()}return d}function zl(e,t,n={}){var c;const r=kn(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const o=r?()=>Promise.all($g(e,r,n)):()=>Promise.resolve(),s=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:p=0,staggerChildren:d,staggerDirection:f}=i;return zb(e,t,u,p,d,f,n)}:()=>Promise.resolve(),{when:l}=i;if(l){const[u,p]=l==="beforeChildren"?[o,s]:[s,o];return u().then(()=>p())}else return Promise.all([o(),s(n.delay)])}function zb(e,t,n=0,r=0,i=0,o=1,s){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(zl(c,t,{...s,delay:n+(typeof r=="function"?0:r)+Vg(e.variantChildren,c,r,i,o)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function Hg(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const i=t.map(o=>zl(e,o,n));r=Promise.all(i)}else if(typeof t=="string")r=zl(e,t,n);else{const i=typeof t=="function"?kn(e,t,n.custom):t;r=Promise.all($g(e,i,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const Db={test:e=>e==="auto",parse:e=>e},Gg=e=>t=>t.test(e),Kg=[hr,N,gt,vt,d2,u2,Db],ap=e=>Kg.find(Gg(e));function Vb(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||rg(e):!0}const Fb=new Set(["brightness","contrast","saturate","opacity"]);function Bb(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(Zc)||[];if(!r)return e;const i=n.replace(r,"");let o=Fb.has(t)?1:0;return r!==n&&(o*=100),t+"("+o+i+")"}const Ob=/\b([a-z-]*)\(.*?\)/gu,Dl={...st,getAnimatableNone:e=>{const t=e.match(Ob);return t?t.map(Bb).join(" "):e}},Vl={...st,getAnimatableNone:e=>{const t=st.parse(e);return st.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},lp={...hr,transform:Math.round},Wb={rotate:vt,pathRotation:vt,rotateX:vt,rotateY:vt,rotateZ:vt,scale:Gi,scaleX:Gi,scaleY:Gi,scaleZ:Gi,skew:vt,skewX:vt,skewY:vt,distance:N,translateX:N,translateY:N,translateZ:N,x:N,y:N,z:N,perspective:N,transformPerspective:N,opacity:ui,originX:Yd,originY:Yd,originZ:N},is={borderWidth:N,borderTopWidth:N,borderRightWidth:N,borderBottomWidth:N,borderLeftWidth:N,borderRadius:N,borderTopLeftRadius:N,borderTopRightRadius:N,borderBottomRightRadius:N,borderBottomLeftRadius:N,width:N,maxWidth:N,height:N,maxHeight:N,top:N,right:N,bottom:N,left:N,inset:N,insetBlock:N,insetBlockStart:N,insetBlockEnd:N,insetInline:N,insetInlineStart:N,insetInlineEnd:N,padding:N,paddingTop:N,paddingRight:N,paddingBottom:N,paddingLeft:N,paddingBlock:N,paddingBlockStart:N,paddingBlockEnd:N,paddingInline:N,paddingInlineStart:N,paddingInlineEnd:N,margin:N,marginTop:N,marginRight:N,marginBottom:N,marginLeft:N,marginBlock:N,marginBlockStart:N,marginBlockEnd:N,marginInline:N,marginInlineStart:N,marginInlineEnd:N,fontSize:N,backgroundPositionX:N,backgroundPositionY:N,...Wb,zIndex:lp,fillOpacity:ui,strokeOpacity:ui,numOctaves:lp},Ub={...is,color:ne,backgroundColor:ne,outlineColor:ne,fill:ne,stroke:ne,borderColor:ne,borderTopColor:ne,borderRightColor:ne,borderBottomColor:ne,borderLeftColor:ne,filter:Dl,WebkitFilter:Dl,mask:Vl,WebkitMask:Vl},Yg=e=>Ub[e],$b=new Set([Dl,Vl]);function Xg(e,t){let n=Yg(e);return $b.has(n)||(n=st),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Hb=new Set(["auto","none","0"]);function Gb(e,t,n){let r=0,i;for(;r<e.length&&!i;){const o=e[r];typeof o=="string"&&!Hb.has(o)&&ar(o).values.length&&(i=e[r]),r++}if(i&&n)for(const o of t)e[o]=Xg(n,i)}class Kb extends ru{constructor(t,n,r,i,o){super(t,n,r,i,o,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let p=0;p<t.length;p++){let d=t[p];if(typeof d=="string"&&(d=d.trim(),qc(d))){const f=Bg(d,n.current);f!==void 0&&(t[p]=f),p===t.length-1&&(this.finalKeyframe=d)}}if(this.resolveNoneKeyframes(),!Og.has(r)||t.length!==2)return;const[i,o]=t,s=ap(i),l=ap(o),c=Kd(i),u=Kd(o);if(c!==u&&Ot[r]){this.needsMeasurement=!0;return}if(s!==l)if(np(s)&&np(l))for(let p=0;p<t.length;p++){const d=t[p];typeof d=="string"&&(t[p]=parseFloat(d))}else Ot[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let i=0;i<t.length;i++)(t[i]===null||Vb(t[i]))&&r.push(i);r.length&&Gb(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ot[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const i=n[n.length-1];i!==void 0&&t.getValue(r,i).jump(i,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const i=t.getValue(n);i&&i.jump(this.measuredOrigin,!1);const o=r.length-1,s=r[o];r[o]=Ot[n](t.measureViewportBox(),window.getComputedStyle(t.current)),s!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=s),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function cu(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){const i=document.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e).filter(r=>r!=null)}const Fl=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function Yb(e){return ng(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:uu}=gg(queueMicrotask,!1),et={x:!1,y:!1};function Qg(){return et.x||et.y}function Xb(e){return e==="x"||e==="y"?et[e]?null:(et[e]=!0,()=>{et[e]=!1}):et.x||et.y?null:(et.x=et.y=!0,()=>{et.x=et.y=!1})}function qg(e,t){const n=cu(e),r=new AbortController,i={passive:!0,...t,signal:r.signal};return[n,i,()=>r.abort()]}function Qb(e){return!(e.pointerType==="touch"||Qg())}function qb(e,t,n={}){const[r,i,o]=qg(e,n);return r.forEach(s=>{let l=!1,c=!1,u;const p=()=>{s.removeEventListener("pointerleave",x)},d=b=>{u&&(u(b),u=void 0),p()},f=b=>{l=!1,window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),c&&(c=!1,d(b))},y=()=>{l=!0,window.addEventListener("pointerup",f,i),window.addEventListener("pointercancel",f,i)},x=b=>{if(b.pointerType!=="touch"){if(l){c=!0;return}d(b)}},v=b=>{if(!Qb(b))return;c=!1;const m=t(s,b);typeof m=="function"&&(u=m,s.addEventListener("pointerleave",x,i))};s.addEventListener("pointerenter",v,i),s.addEventListener("pointerdown",y,i)}),o}const Zg=(e,t)=>t?e===t?!0:Zg(e,t.parentElement):!1,du=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Zb=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function Jb(e){return Zb.has(e.tagName)||e.isContentEditable===!0}const ek=new Set(["INPUT","SELECT","TEXTAREA"]);function tk(e){return ek.has(e.tagName)||e.isContentEditable===!0}const wo=new WeakSet;function cp(e){return t=>{t.key==="Enter"&&e(t)}}function ga(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const nk=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=cp(()=>{if(wo.has(n))return;ga(n,"down");const i=cp(()=>{ga(n,"up")}),o=()=>ga(n,"cancel");n.addEventListener("keyup",i,t),n.addEventListener("blur",o,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function up(e){return du(e)&&!Qg()}const dp=new WeakSet;function rk(e,t,n={}){const[r,i,o]=qg(e,n),s=l=>{const c=l.currentTarget;if(!up(l)||dp.has(l))return;wo.add(c),n.stopPropagation&&dp.add(l);const u=t(c,l),p={...i,capture:!0},d=(x,v)=>{window.removeEventListener("pointerup",f,p),window.removeEventListener("pointercancel",y,p),wo.has(c)&&wo.delete(c),up(x)&&typeof u=="function"&&u(x,{success:v})},f=x=>{d(x,c===window||c===document||n.useGlobalTarget||Zg(c,x.target))},y=x=>{d(x,!1)};window.addEventListener("pointerup",f,p),window.addEventListener("pointercancel",y,p)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",s,i),Yb(l)&&(l.addEventListener("focus",u=>nk(u,i)),!Jb(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),o}function pu(e){return ng(e)&&"ownerSVGElement"in e}const bo=new WeakMap;let Rt;const Jg=(e,t,n)=>(r,i)=>i&&i[0]?i[0][e+"Size"]:pu(r)&&"getBBox"in r?r.getBBox()[t]:r[n],ik=Jg("inline","width","offsetWidth"),ok=Jg("block","height","offsetHeight");function sk({target:e,borderBoxSize:t}){var n;(n=bo.get(e))==null||n.forEach(r=>{r(e,{get width(){return ik(e,t)},get height(){return ok(e,t)}})})}function ak(e){e.forEach(sk)}function lk(){typeof ResizeObserver>"u"||(Rt=new ResizeObserver(ak))}function ck(e,t){Rt||lk();const n=cu(e);return n.forEach(r=>{let i=bo.get(r);i||(i=new Set,bo.set(r,i)),i.add(t),Rt==null||Rt.observe(r)}),()=>{n.forEach(r=>{const i=bo.get(r);i==null||i.delete(t),i!=null&&i.size||Rt==null||Rt.unobserve(r)})}}const ko=new Set;let Gn;function uk(){Gn=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};ko.forEach(t=>t(e))},window.addEventListener("resize",Gn)}function dk(e){return ko.add(e),Gn||uk(),()=>{ko.delete(e),!ko.size&&typeof Gn=="function"&&(window.removeEventListener("resize",Gn),Gn=void 0)}}function pp(e,t){return typeof e=="function"?dk(e):ck(e,t)}function pk(e){return pu(e)&&e.tagName==="svg"}const fk=[...Kg,ne,st],hk=e=>fk.find(Gg(e)),fp=()=>({translate:0,scale:1,origin:0,originPoint:0}),Kn=()=>({x:fp(),y:fp()}),hp=()=>({min:0,max:0}),oe=()=>({x:hp(),y:hp()}),mk=new WeakMap;function Es(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function di(e){return typeof e=="string"||Array.isArray(e)}const fu=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],hu=["initial",...fu];function Ps(e){return Es(e.animate)||hu.some(t=>di(e[t]))}function e0(e){return!!(Ps(e)||e.variants)}function gk(e,t,n){for(const r in t){const i=t[r],o=n[r];if(fe(i))e.addValue(r,i);else if(fe(o))e.addValue(r,lr(i,{owner:e}));else if(o!==i)if(e.hasValue(r)){const s=e.getValue(r);s.liveStyle===!0?s.jump(i):s.hasAnimated||s.set(i)}else{const s=e.getStaticValue(r);e.addValue(r,lr(s!==void 0?s:i,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Bl={current:null},t0={current:!1},yk=typeof window<"u";function xk(){if(t0.current=!0,!!yk)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Bl.current=e.matches;e.addEventListener("change",t),t()}else Bl.current=!1}const mp=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let os={};function n0(e){os=e}function vk(){return os}class wk{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:i,skipAnimations:o,blockInitialAnimation:s,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=ru,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const y=be.now();this.renderScheduledAt<y&&(this.renderScheduledAt=y,U.render(this.render,!1,!0))};const{latestValues:u,renderState:p}=l;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=p,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.skipAnimationsConfig=o,this.options=c,this.blockInitialAnimation=!!s,this.isControllingVariants=Ps(n),this.isVariantNode=e0(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...f}=this.scrapeMotionValuesFromProps(n,{},this);for(const y in f){const x=f[y];u[y]!==void 0&&fe(x)&&x.set(u[y])}}mount(t){var n,r;if(this.hasBeenMounted)for(const i in this.initialValues)(n=this.values.get(i))==null||n.jump(this.initialValues[i]),this.latestValues[i]=this.initialValues[i];this.current=t,mk.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((i,o)=>this.bindToMotionValue(o,i)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(t0.current||xk(),this.shouldReduceMotion=Bl.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),en(this.notifyUpdate),en(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&Dg.has(t)&&this.current instanceof HTMLElement){const{factory:s,keyframes:l,times:c,ease:u,duration:p}=n.accelerate,d=new Lg({element:this.current,name:t,keyframes:l,times:c,ease:u,duration:Ve(p)}),f=s(d);this.valueSubscriptions.set(t,()=>{f(),d.cancel()});return}const r=gr.has(t);r&&this.onBindTransform&&this.onBindTransform();const i=n.on("change",s=>{this.latestValues[t]=s,this.props.onUpdate&&U.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let o;typeof window<"u"&&window.MotionCheckAppearSync&&(o=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{i(),o&&o()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in os){const n=os[t];if(!n)continue;const{isEnabled:r,Feature:i}=n;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){const o=this.features[t];o.isMounted?o.update():(o.mount(),o.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):oe()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<mp.length;r++){const i=mp[r];this.propEventSubscriptions[i]&&(this.propEventSubscriptions[i](),delete this.propEventSubscriptions[i]);const o="on"+i,s=t[o];s&&(this.propEventSubscriptions[i]=this.on(i,s))}this.prevMotionValues=gk(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=lr(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(tg(r)||rg(r))?r=parseFloat(r):!hk(r)&&st.test(n)&&(r=Xg(t,n)),this.setBaseTarget(t,fe(r)?r.get():r)),fe(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var o;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const s=su(this.props,n,(o=this.presenceContext)==null?void 0:o.custom);s&&(r=s[t])}if(n&&r!==void 0)return r;const i=this.getBaseTargetFromProps(this.props,t);return i!==void 0&&!fe(i)?i:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Yc),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){uu.render(this.render)}}class r0 extends wk{constructor(){super(...arguments),this.KeyframeResolver=Kb}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;fe(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class an{constructor(t){this.isMounted=!1,this.node=t}update(){}}function i0({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function bk({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function kk(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function ya(e){return e===void 0||e===1}function Ol({scale:e,scaleX:t,scaleY:n}){return!ya(e)||!ya(t)||!ya(n)}function fn(e){return Ol(e)||o0(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function o0(e){return gp(e.x)||gp(e.y)}function gp(e){return e&&e!=="0%"}function ss(e,t,n){const r=e-n,i=t*r;return n+i}function yp(e,t,n,r,i){return i!==void 0&&(e=ss(e,i,r)),ss(e,n,r)+t}function Wl(e,t=0,n=1,r,i){e.min=yp(e.min,t,n,r,i),e.max=yp(e.max,t,n,r,i)}function s0(e,{x:t,y:n}){Wl(e.x,t.translate,t.scale,t.originPoint),Wl(e.y,n.translate,n.scale,n.originPoint)}const xp=.999999999999,vp=1.0000000000001;function Sk(e,t,n,r=!1){var l;const i=n.length;if(!i)return;t.x=t.y=1;let o,s;for(let c=0;c<i;c++){o=n[c],s=o.projectionDelta;const{visualElement:u}=o.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&o.options.layoutScroll&&o.scroll&&o!==o.root&&(pt(e.x,-o.scroll.offset.x),pt(e.y,-o.scroll.offset.y)),s&&(t.x*=s.x.scale,t.y*=s.y.scale,s0(e,s)),r&&fn(o.latestValues)&&So(e,o.latestValues,(l=o.layout)==null?void 0:l.layoutBox))}t.x<vp&&t.x>xp&&(t.x=1),t.y<vp&&t.y>xp&&(t.y=1)}function pt(e,t){e.min+=t,e.max+=t}function wp(e,t,n,r,i=.5){const o=W(e.min,e.max,i);Wl(e,t,n,o,r)}function bp(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function So(e,t,n){const r=n??e;wp(e.x,bp(t.x,r.x),t.scaleX,t.scale,t.originX),wp(e.y,bp(t.y,r.y),t.scaleY,t.scale,t.originY)}function a0(e,t){return i0(kk(e.getBoundingClientRect(),t))}function Ck(e,t,n){const r=a0(e,n),{scroll:i}=t;return i&&(pt(r.x,i.offset.x),pt(r.y,i.offset.y)),r}const jk={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},_k=mr.length;function Ak(e,t,n){let r="",i=!0;for(let s=0;s<_k;s++){const l=mr[s],c=e[l];if(c===void 0)continue;let u=!0;if(typeof c=="number")u=c===(l.startsWith("scale")?1:0);else{const p=parseFloat(c);u=l.startsWith("scale")?p===1:p===0}if(!u||n){const p=Fl(c,is[l]);if(!u){i=!1;const d=jk[l]||l;r+=`${d}(${p}) `}n&&(t[l]=p)}}const o=e.pathRotation;return o&&(i=!1,r+=`rotate(${Fl(o,is.pathRotation)}) `),r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}function mu(e,t,n){const{style:r,vars:i,transformOrigin:o}=e;let s=!1,l=!1;for(const c in t){const u=t[c];if(gr.has(c)){s=!0;continue}else if(xg(c)){i[c]=u;continue}else{const p=Fl(u,is[c]);c.startsWith("origin")?(l=!0,o[c]=p):r[c]=p}}if(t.transform||(s||n?r.transform=Ak(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:p=0}=o;r.transformOrigin=`${c} ${u} ${p}`}}function l0(e,{style:t,vars:n},r,i){const o=e.style;let s;for(s in t)o[s]=t[s];i==null||i.applyProjectionStyles(o,r);for(s in n)o.setProperty(s,n[s])}function kp(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const jr={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(N.test(e))e=parseFloat(e);else return e;const n=kp(e,t.target.x),r=kp(e,t.target.y);return`${n}% ${r}%`}},Tk={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,i=st.parse(e);if(i.length>5)return r;const o=st.createTransformer(e),s=typeof i[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;i[0+s]/=l,i[1+s]/=c;const u=W(l,c,.5);return typeof i[2+s]=="number"&&(i[2+s]/=u),typeof i[3+s]=="number"&&(i[3+s]/=u),o(i)}},Ul={borderRadius:{...jr,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:jr,borderTopRightRadius:jr,borderBottomLeftRadius:jr,borderBottomRightRadius:jr,boxShadow:Tk};function c0(e,{layout:t,layoutId:n}){return gr.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Ul[e]||e==="opacity")}function gu(e,t,n){var s;const r=e.style,i=t==null?void 0:t.style,o={};if(!r)return o;for(const l in r)(fe(r[l])||i&&fe(i[l])||c0(l,e)||((s=n==null?void 0:n.getValue(l))==null?void 0:s.liveStyle)!==void 0)&&(o[l]=r[l]);return o}function Ek(e){return window.getComputedStyle(e)}class Pk extends r0{constructor(){super(...arguments),this.type="html",this.renderInstance=l0}readValueFromInstance(t,n){var r;if(gr.has(n))return(r=this.projection)!=null&&r.isProjecting?Tl(n):q2(t,n);{const i=Ek(t),o=(xg(n)?i.getPropertyValue(n):i[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return a0(t,n)}build(t,n,r){mu(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return gu(t,n,r)}}const Ik={offset:"stroke-dashoffset",array:"stroke-dasharray"},Nk={offset:"strokeDashoffset",array:"strokeDasharray"};function Rk(e,t,n=1,r=0,i=!0){e.pathLength=1;const o=i?Ik:Nk;e[o.offset]=`${-r}`,e[o.array]=`${t} ${n}`}const Mk=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function u0(e,{attrX:t,attrY:n,attrScale:r,pathLength:i,pathSpacing:o=1,pathOffset:s=0,...l},c,u,p){if(mu(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:d,style:f}=e;d.transform&&(f.transform=d.transform,delete d.transform),(f.transform||d.transformOrigin)&&(f.transformOrigin=d.transformOrigin??"50% 50%",delete d.transformOrigin),f.transform&&(f.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete d.transformBox);for(const y of Mk)d[y]!==void 0&&(f[y]=d[y],delete d[y]);t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),r!==void 0&&(d.scale=r),i!==void 0&&Rk(d,i,o,s,!1)}const d0=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),p0=e=>typeof e=="string"&&e.toLowerCase()==="svg";function Lk(e,t,n,r){l0(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(d0.has(i)?i:lu(i),t.attrs[i])}function f0(e,t,n){const r=gu(e,t,n);for(const i in e)if(fe(e[i])||fe(t[i])){const o=mr.indexOf(i)!==-1?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i;r[o]=e[i]}return r}class zk extends r0{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=oe}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(gr.has(n)){const r=Yg(n);return r&&r.default||0}return n=d0.has(n)?n:lu(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return f0(t,n,r)}build(t,n,r){u0(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,i){Lk(t,n,r,i)}mount(t){this.isSVGTag=p0(t.tagName),super.mount(t)}}const Dk=hu.length;function h0(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?h0(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<Dk;n++){const r=hu[n],i=e.props[r];(di(i)||i===!1)&&(t[r]=i)}return t}function m0(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Vk=[...fu].reverse(),Fk=fu.length;function Bk(e){return t=>Promise.all(t.map(({animation:n,options:r})=>Hg(e,n,r)))}function Ok(e){let t=Bk(e),n=Sp(),r=!0,i=!1;const o=u=>(p,d)=>{var y;const f=kn(e,d,u==="exit"?(y=e.presenceContext)==null?void 0:y.custom:void 0);if(f){const{transition:x,transitionEnd:v,...b}=f;p={...p,...b,...v}}return p};function s(u){t=u(e)}function l(u){const{props:p}=e,d=h0(e.parent)||{},f=[],y=new Set;let x={},v=1/0;for(let m=0;m<Fk;m++){const h=Vk[m],g=n[h],w=p[h]!==void 0?p[h]:d[h],S=di(w),T=h===u?g.isActive:null;T===!1&&(v=m);let _=w===d[h]&&w!==p[h]&&S;if(_&&(r||i)&&e.manuallyAnimateOnMount&&(_=!1),g.protectedKeys={...x},!g.isActive&&T===null||!w&&!g.prevProp||Es(w)||typeof w=="boolean")continue;if(h==="exit"&&g.isActive&&T!==!0){g.prevResolvedValues&&(x={...x,...g.prevResolvedValues});continue}const C=Wk(g.prevProp,w);let L=C||h===u&&g.isActive&&!_&&S||m>v&&S,P=!1;const V=Array.isArray(w)?w:[w];let ee=V.reduce(o(h),{});T===!1&&(ee={});const{prevResolvedValues:Re={}}=g,Me={...Re,...ee},qe=E=>{L=!0,y.has(E)&&(P=!0,y.delete(E)),g.needsAnimating[E]=!0;const R=e.getValue(E);R&&(R.liveStyle=!1)};for(const E in Me){const R=ee[E],M=Re[E];if(x.hasOwnProperty(E))continue;let O=!1;Ml(R)&&Ml(M)?O=!m0(R,M)||C:O=R!==M,O?R!=null?qe(E):y.add(E):R!==void 0&&y.has(E)?qe(E):g.protectedKeys[E]=!0}g.prevProp=w,g.prevResolvedValues=ee,g.isActive&&(x={...x,...ee}),(r||i)&&e.blockInitialAnimation&&(L=!1);const Ae=_&&C;L&&(!Ae||P)&&f.push(...V.map(E=>{const R={type:h};if(typeof E=="string"&&(r||i)&&!Ae&&e.manuallyAnimateOnMount&&e.parent){const{parent:M}=e,O=kn(M,E);if(M.enteringChildren&&O){const{delayChildren:te}=O.transition||{};R.delay=Vg(M.enteringChildren,e,te)}}return{animation:E,options:R}}))}if(y.size){const m={};if(typeof p.initial!="boolean"){const h=kn(e,Array.isArray(p.initial)?p.initial[0]:p.initial);h&&h.transition&&(m.transition=h.transition)}y.forEach(h=>{const g=e.getBaseTarget(h),w=e.getValue(h);w&&(w.liveStyle=!0),m[h]=g??null}),f.push({animation:m})}let b=!!f.length;return r&&(p.initial===!1||p.initial===p.animate)&&!e.manuallyAnimateOnMount&&(b=!1),r=!1,i=!1,b?t(f):Promise.resolve()}function c(u,p){var f;if(n[u].isActive===p)return Promise.resolve();(f=e.variantChildren)==null||f.forEach(y=>{var x;return(x=y.animationState)==null?void 0:x.setActive(u,p)}),n[u].isActive=p;const d=l(u);for(const y in n)n[y].protectedKeys={};return d}return{animateChanges:l,setActive:c,setAnimateFunction:s,getState:()=>n,reset:()=>{n=Sp(),i=!0}}}function Wk(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!m0(t,e):!1}function un(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Sp(){return{animate:un(!0),whileInView:un(),whileHover:un(),whileTap:un(),whileDrag:un(),whileFocus:un(),exit:un()}}function $l(e,t){e.min=t.min,e.max=t.max}function Je(e,t){$l(e.x,t.x),$l(e.y,t.y)}function Cp(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const g0=1e-4,Uk=1-g0,$k=1+g0,y0=.01,Hk=0-y0,Gk=0+y0;function ke(e){return e.max-e.min}function Kk(e,t,n){return Math.abs(e-t)<=n}function jp(e,t,n,r=.5){e.origin=r,e.originPoint=W(t.min,t.max,e.origin),e.scale=ke(n)/ke(t),e.translate=W(n.min,n.max,e.origin)-e.originPoint,(e.scale>=Uk&&e.scale<=$k||isNaN(e.scale))&&(e.scale=1),(e.translate>=Hk&&e.translate<=Gk||isNaN(e.translate))&&(e.translate=0)}function Wr(e,t,n,r){jp(e.x,t.x,n.x,r?r.originX:void 0),jp(e.y,t.y,n.y,r?r.originY:void 0)}function _p(e,t,n,r=0){const i=r?W(n.min,n.max,r):n.min;e.min=i+t.min,e.max=e.min+ke(t)}function Yk(e,t,n,r){_p(e.x,t.x,n.x,r==null?void 0:r.x),_p(e.y,t.y,n.y,r==null?void 0:r.y)}function Ap(e,t,n,r=0){const i=r?W(n.min,n.max,r):n.min;e.min=t.min-i,e.max=e.min+ke(t)}function as(e,t,n,r){Ap(e.x,t.x,n.x,r==null?void 0:r.x),Ap(e.y,t.y,n.y,r==null?void 0:r.y)}function Tp(e,t,n,r,i){return e-=t,e=ss(e,1/n,r),i!==void 0&&(e=ss(e,1/i,r)),e}function Xk(e,t=0,n=1,r=.5,i,o=e,s=e){if(gt.test(t)&&(t=parseFloat(t),t=W(s.min,s.max,t/100)-s.min),typeof t!="number")return;let l=W(o.min,o.max,r);e===o&&(l-=t),e.min=Tp(e.min,t,n,l,i),e.max=Tp(e.max,t,n,l,i)}function Ep(e,t,[n,r,i],o,s){Xk(e,t[n],t[r],t[i],t.scale,o,s)}const Qk=["x","scaleX","originX"],qk=["y","scaleY","originY"];function Pp(e,t,n,r){Ep(e.x,t,Qk,n?n.x:void 0,r?r.x:void 0),Ep(e.y,t,qk,n?n.y:void 0,r?r.y:void 0)}function Ip(e){return e.translate===0&&e.scale===1}function x0(e){return Ip(e.x)&&Ip(e.y)}function Np(e,t){return e.min===t.min&&e.max===t.max}function Zk(e,t){return Np(e.x,t.x)&&Np(e.y,t.y)}function Rp(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function v0(e,t){return Rp(e.x,t.x)&&Rp(e.y,t.y)}function Mp(e){return ke(e.x)/ke(e.y)}function Lp(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function dt(e){return[e("x"),e("y")]}function Jk(e,t,n){let r="";const i=e.x.translate/t.x,o=e.y.translate/t.y,s=(n==null?void 0:n.z)||0;if((i||o||s)&&(r=`translate3d(${i}px, ${o}px, ${s}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:p,pathRotation:d,rotateX:f,rotateY:y,skewX:x,skewY:v}=n;u&&(r=`perspective(${u}px) ${r}`),p&&(r+=`rotate(${p}deg) `),d&&(r+=`rotate(${d}deg) `),f&&(r+=`rotateX(${f}deg) `),y&&(r+=`rotateY(${y}deg) `),x&&(r+=`skewX(${x}deg) `),v&&(r+=`skewY(${v}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const w0=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],eS=w0.length,zp=e=>typeof e=="string"?parseFloat(e):e,Dp=e=>typeof e=="number"||N.test(e);function tS(e,t,n,r,i,o){i?(e.opacity=W(0,n.opacity??1,nS(r)),e.opacityExit=W(t.opacity??1,0,rS(r))):o&&(e.opacity=W(t.opacity??1,n.opacity??1,r));for(let s=0;s<eS;s++){const l=w0[s];let c=Vp(t,l),u=Vp(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Dp(c)===Dp(u)?(e[l]=Math.max(W(zp(c),zp(u),r),0),(gt.test(u)||gt.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=W(t.rotate||0,n.rotate||0,r))}function Vp(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const nS=b0(0,.5,pg),rS=b0(.5,.95,Ye);function b0(e,t,n){return r=>r<e?0:r>t?1:n(ci(e,t,r))}function iS(e,t,n){const r=fe(e)?e:lr(e);return r.start(ou("",r,t,n)),r.animation}function pi(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}const oS=(e,t)=>e.depth-t.depth;class sS{constructor(){this.children=[],this.isDirty=!1}add(t){Gc(this.children,t),this.isDirty=!0}remove(t){Jo(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(oS),this.isDirty=!1,this.children.forEach(t)}}function aS(e,t){const n=be.now(),r=({timestamp:i})=>{const o=i-n;o>=t&&(en(r),e(o-t))};return U.setup(r,!0),()=>en(r)}function Co(e){return fe(e)?e.get():e}class lS{constructor(){this.members=[]}add(t){Gc(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const i=r.instance;(!i||i.isConnected===!1)&&!r.snapshot&&(Jo(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(Jo(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const i=this.members[r];if(i.isPresent!==!1&&((n=i.instance)==null?void 0:n.isConnected)!==!1)return this.promote(i),!0}return!1}promote(t,n){var i;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:o}=r.options,{layoutDependency:s}=t.options;(o===void 0||o!==s)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(i=t.root)!=null&&i.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,i,o,s;(r=(n=t.options).onExitComplete)==null||r.call(n),(s=(i=t.resumingFrom)==null?void 0:(o=i.options).onExitComplete)==null||s.call(o)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const jo={hasAnimatedSinceResize:!0,hasEverUpdated:!1},xa=["","X","Y","Z"],cS=1e3;let uS=0;function va(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function k0(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Ug(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:i,layoutId:o}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",U,!(i||o))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&k0(r)}function S0({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:i}){return class{constructor(s={},l=t==null?void 0:t()){this.id=uS++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(fS),this.nodes.forEach(vS),this.nodes.forEach(wS),this.nodes.forEach(hS)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new sS)}addEventListener(s,l){return this.eventHandlers.has(s)||this.eventHandlers.set(s,new Yc),this.eventHandlers.get(s).add(l)}notifyListeners(s,...l){const c=this.eventHandlers.get(s);c&&c.notify(...l)}hasListeners(s){return this.eventHandlers.has(s)}mount(s){if(this.instance)return;this.isSVG=pu(s)&&!pk(s),this.instance=s;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(s),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let p,d=0;const f=()=>this.root.updateBlockedByResize=!1;U.read(()=>{d=window.innerWidth}),e(s,()=>{const y=window.innerWidth;y!==d&&(d=y,this.root.updateBlockedByResize=!0,p&&p(),p=aS(f,250),jo.hasAnimatedSinceResize&&(jo.hasAnimatedSinceResize=!1,this.nodes.forEach(Op)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:d,hasRelativeLayoutChanged:f,layout:y})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||jS,{onLayoutAnimationStart:v,onLayoutAnimationComplete:b}=u.getProps(),m=!this.targetLayout||!v0(this.targetLayout,y),h=!d&&f;if(this.options.layoutRoot||this.resumeFrom||h||d&&(m||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const g={...iu(x,"layout"),onPlay:v,onComplete:b};(u.shouldReduceMotion||this.options.layoutRoot)&&(g.delay=0,g.type=!1),this.startAnimation(g),this.setAnimationOrigin(p,h,g.path)}else d||Op(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=y})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const s=this.getStack();s&&s.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),en(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bS),this.animationId++)}getTransformTemplate(){const{visualElement:s}=this.options;return s&&s.getProps().transformTemplate}willUpdate(s=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&k0(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const d=this.path[p];d.shouldResetTransform=!0,(typeof d.latestValues.x=="string"||typeof d.latestValues.y=="string")&&(d.isLayoutDirty=!0),d.updateScroll("snapshot"),d.options.layoutRoot&&d.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),s&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(gS),this.nodes.forEach(Fp);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Bp);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(yS),this.nodes.forEach(xS),this.nodes.forEach(dS),this.nodes.forEach(pS)):this.nodes.forEach(Bp),this.clearAllSnapshots();const l=be.now();de.delta=yt(0,1e3/60,l-de.timestamp),de.timestamp=l,de.isProcessing=!0,ua.update.process(de),ua.preRender.process(de),ua.render.process(de),de.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,uu.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(mS),this.sharedNodes.forEach(kS)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,U.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){U.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!ke(this.snapshot.measuredBox.x)&&!ke(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=oe()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,s?s.layoutBox:void 0)}updateScroll(s="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===s&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:s,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!i)return;const s=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!x0(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,p=u!==this.prevTransformTemplateValue;s&&this.instance&&(l||fn(this.latestValues)||p)&&(i(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(s=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return s&&(c=this.removeTransform(c)),_S(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:s}=this.options;if(!s)return oe();const l=s.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(AS))){const{scroll:p}=this.root;p&&(pt(l.x,p.offset.x),pt(l.y,p.offset.y))}return l}removeElementScroll(s){var c;const l=oe();if(Je(l,s),(c=this.scroll)!=null&&c.wasRoot)return l;for(let u=0;u<this.path.length;u++){const p=this.path[u],{scroll:d,options:f}=p;p!==this.root&&d&&f.layoutScroll&&(d.wasRoot&&Je(l,s),pt(l.x,d.offset.x),pt(l.y,d.offset.y))}return l}applyTransform(s,l=!1,c){var p,d;const u=c||oe();Je(u,s);for(let f=0;f<this.path.length;f++){const y=this.path[f];!l&&y.options.layoutScroll&&y.scroll&&y!==y.root&&(pt(u.x,-y.scroll.offset.x),pt(u.y,-y.scroll.offset.y)),fn(y.latestValues)&&So(u,y.latestValues,(p=y.layout)==null?void 0:p.layoutBox)}return fn(this.latestValues)&&So(u,this.latestValues,(d=this.layout)==null?void 0:d.layoutBox),u}removeTransform(s){var c;const l=oe();Je(l,s);for(let u=0;u<this.path.length;u++){const p=this.path[u];if(!fn(p.latestValues))continue;let d;p.instance&&(Ol(p.latestValues)&&p.updateSnapshot(),d=oe(),Je(d,p.measurePageBox())),Pp(l,p.latestValues,(c=p.snapshot)==null?void 0:c.layoutBox,d)}return fn(this.latestValues)&&Pp(l,this.latestValues),l}setTargetDelta(s){this.targetDelta=s,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(s){this.options={...this.options,...s,crossfade:s.crossfade!==void 0?s.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==de.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(s=!1){var y;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(s||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(y=this.parent)!=null&&y.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:d}=this.options;if(!this.layout||!(p||d))return;this.resolvedRelativeTargetAt=de.timestamp;const f=this.getClosestProjectingParent();f&&this.linkedParentVersion!==f.layoutVersion&&!f.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&f&&f.layout?this.createRelativeTarget(f,this.layout.layoutBox,f.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=oe(),this.targetWithTransforms=oe()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Yk(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Je(this.target,this.layout.layoutBox),s0(this.target,this.targetDelta)):Je(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&f&&!!f.resumingFrom==!!this.resumingFrom&&!f.options.layoutScroll&&f.target&&this.animationProgress!==1?this.createRelativeTarget(f,this.target,f.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Ol(this.parent.latestValues)||o0(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(s,l,c){this.relativeParent=s,this.linkedParentVersion=s.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=oe(),this.relativeTargetOrigin=oe(),as(this.relativeTargetOrigin,l,c,this.options.layoutAnchor||void 0),Je(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var x;const s=this.getLead(),l=!!this.resumingFrom||this!==s;let c=!0;if((this.isProjectionDirty||(x=this.parent)!=null&&x.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===de.timestamp&&(c=!1),c)return;const{layout:u,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||p))return;Je(this.layoutCorrected,this.layout.layoutBox);const d=this.treeScale.x,f=this.treeScale.y;Sk(this.layoutCorrected,this.treeScale,this.path,l),s.layout&&!s.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(s.target=s.layout.layoutBox,s.targetWithTransforms=oe());const{target:y}=s;if(!y){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Cp(this.prevProjectionDelta.x,this.projectionDelta.x),Cp(this.prevProjectionDelta.y,this.projectionDelta.y)),Wr(this.projectionDelta,this.layoutCorrected,y,this.latestValues),(this.treeScale.x!==d||this.treeScale.y!==f||!Lp(this.projectionDelta.x,this.prevProjectionDelta.x)||!Lp(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(s=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),s){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Kn(),this.projectionDelta=Kn(),this.projectionDeltaWithTransform=Kn()}setAnimationOrigin(s,l=!1,c){const u=this.snapshot,p=u?u.latestValues:{},d={...this.latestValues},f=Kn();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const y=oe(),x=u?u.source:void 0,v=this.layout?this.layout.source:void 0,b=x!==v,m=this.getStack(),h=!m||m.members.length<=1,g=!!(b&&!h&&this.options.crossfade===!0&&!this.path.some(CS));this.animationProgress=0;let w;const S=c==null?void 0:c.interpolateProjection(s);this.mixTargetDelta=T=>{const _=T/1e3,C=S==null?void 0:S(_);C?(f.x.translate=C.x,f.x.scale=W(s.x.scale,1,_),f.x.origin=s.x.origin,f.x.originPoint=s.x.originPoint,f.y.translate=C.y,f.y.scale=W(s.y.scale,1,_),f.y.origin=s.y.origin,f.y.originPoint=s.y.originPoint):(Wp(f.x,s.x,_),Wp(f.y,s.y,_)),this.setTargetDelta(f),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(as(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),SS(this.relativeTarget,this.relativeTargetOrigin,y,_),w&&Zk(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=oe()),Je(w,this.relativeTarget)),b&&(this.animationValues=d,tS(d,p,this.latestValues,_,g,h)),C&&C.rotate!==void 0&&(this.animationValues||(this.animationValues=d),this.animationValues.pathRotation=C.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=_},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(s){var l,c,u;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(en(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=U.update(()=>{jo.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=lr(0)),this.motionValue.jump(0,!1),this.currentAnimation=iS(this.motionValue,[0,1e3],{...s,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),s.onUpdate&&s.onUpdate(p)},onComplete:()=>{s.onComplete&&s.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const s=this.getStack();s&&s.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(cS),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const s=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:p}=s;if(!(!l||!c||!u)){if(this!==s&&this.layout&&u&&C0(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||oe();const d=ke(this.layout.layoutBox.x);c.x.min=s.target.x.min,c.x.max=c.x.min+d;const f=ke(this.layout.layoutBox.y);c.y.min=s.target.y.min,c.y.max=c.y.min+f}Je(l,c),So(l,p),Wr(this.projectionDeltaWithTransform,this.layoutCorrected,l,p)}}registerSharedNode(s,l){this.sharedNodes.has(s)||this.sharedNodes.set(s,new lS),this.sharedNodes.get(s).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const s=this.getStack();return s?s.lead===this:!0}getLead(){var l;const{layoutId:s}=this.options;return s?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:s}=this.options;return s?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:s}=this.options;if(s)return this.root.sharedNodes.get(s)}promote({needsReset:s,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),s&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const s=this.getStack();return s?s.relegate(this):!1}resetSkewAndRotation(){const{visualElement:s}=this.options;if(!s)return;let l=!1;const{latestValues:c}=s;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&va("z",s,u,this.animationValues);for(let p=0;p<xa.length;p++)va(`rotate${xa[p]}`,s,u,this.animationValues),va(`skew${xa[p]}`,s,u,this.animationValues);s.render();for(const p in u)s.setStaticValue(p,u[p]),this.animationValues&&(this.animationValues[p]=u[p]);s.scheduleRender()}applyProjectionStyles(s,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){s.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,s.visibility="",s.opacity="",s.pointerEvents=Co(l==null?void 0:l.pointerEvents)||"",s.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(s.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,s.pointerEvents=Co(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!fn(this.latestValues)&&(s.transform=c?c({},""):"none",this.hasProjected=!1);return}s.visibility="";const p=u.animationValues||u.latestValues;this.applyTransformsToTarget();let d=Jk(this.projectionDeltaWithTransform,this.treeScale,p);c&&(d=c(p,d)),s.transform=d;const{x:f,y}=this.projectionDelta;s.transformOrigin=`${f.origin*100}% ${y.origin*100}% 0`,u.animationValues?s.opacity=u===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:s.opacity=u===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const x in Ul){if(p[x]===void 0)continue;const{correct:v,applyTo:b,isCSSVariable:m}=Ul[x],h=d==="none"?p[x]:v(p[x],u);if(b){const g=b.length;for(let w=0;w<g;w++)s[b[w]]=h}else m?this.options.visualElement.renderState.vars[x]=h:s[x]=h}this.options.layoutId&&(s.pointerEvents=u===this?Co(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(s=>{var l;return(l=s.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(Fp),this.root.sharedNodes.clear()}}}function dS(e){e.updateLayout()}function pS(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:i}=e.layout,{animationType:o}=e.options,s=t.source!==e.layout.source;if(o==="size")dt(d=>{const f=s?t.measuredBox[d]:t.layoutBox[d],y=ke(f);f.min=r[d].min,f.max=f.min+y});else if(o==="x"||o==="y"){const d=o==="x"?"y":"x";$l(s?t.measuredBox[d]:t.layoutBox[d],r[d])}else C0(o,t.layoutBox,r)&&dt(d=>{const f=s?t.measuredBox[d]:t.layoutBox[d],y=ke(r[d]);f.max=f.min+y,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[d].max=e.relativeTarget[d].min+y)});const l=Kn();Wr(l,r,t.layoutBox);const c=Kn();s?Wr(c,e.applyTransform(i,!0),t.measuredBox):Wr(c,r,t.layoutBox);const u=!x0(l);let p=!1;if(!e.resumeFrom){const d=e.getClosestProjectingParent();if(d&&!d.resumeFrom){const{snapshot:f,layout:y}=d;if(f&&y){const x=e.options.layoutAnchor||void 0,v=oe();as(v,t.layoutBox,f.layoutBox,x);const b=oe();as(b,r,y.layoutBox,x),v0(v,b)||(p=!0),d.options.layoutRoot&&(e.relativeTarget=b,e.relativeTargetOrigin=v,e.relativeParent=d)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeLayoutChanged:p})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function fS(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function hS(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function mS(e){e.clearSnapshot()}function Fp(e){e.clearMeasurements()}function gS(e){e.isLayoutDirty=!0,e.updateLayout()}function Bp(e){e.isLayoutDirty=!1}function yS(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function xS(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Op(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function vS(e){e.resolveTargetDelta()}function wS(e){e.calcProjection()}function bS(e){e.resetSkewAndRotation()}function kS(e){e.removeLeadSnapshot()}function Wp(e,t,n){e.translate=W(t.translate,0,n),e.scale=W(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Up(e,t,n,r){e.min=W(t.min,n.min,r),e.max=W(t.max,n.max,r)}function SS(e,t,n,r){Up(e.x,t.x,n.x,r),Up(e.y,t.y,n.y,r)}function CS(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const jS={duration:.45,ease:[.4,0,.1,1]},$p=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),Hp=$p("applewebkit/")&&!$p("chrome/")?Math.round:Ye;function Gp(e){e.min=Hp(e.min),e.max=Hp(e.max)}function _S(e){Gp(e.x),Gp(e.y)}function C0(e,t,n){return e==="position"||e==="preserve-aspect"&&!Kk(Mp(t),Mp(n),.2)}function AS(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const TS=S0({attachResizeListener:(e,t)=>pi(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),wa={current:void 0},j0=S0({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!wa.current){const e=new TS({});e.mount(window),e.setOptions({layoutScroll:!0}),wa.current=e}return wa.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),_0=k.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function ES(e=!0){const t=k.useContext(Hc);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:i}=t,o=k.useId();k.useEffect(()=>{if(e)return i(o)},[e]);const s=k.useCallback(()=>e&&r&&r(o),[o,r,e]);return!n&&r?[!1,s]:[!0]}const A0=k.createContext({strict:!1}),Kp={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let Yp=!1;function PS(){if(Yp)return;const e={};for(const t in Kp)e[t]={isEnabled:n=>Kp[t].some(r=>!!n[r])};n0(e),Yp=!0}function T0(){return PS(),vk()}function IS(e){const t=T0();for(const n in e)t[n]={...t[n],...e[n]};n0(t)}const NS=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ls(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||NS.has(e)}let E0=e=>!ls(e);function RS(e){typeof e=="function"&&(E0=t=>t.startsWith("on")?!ls(t):e(t))}try{RS(require("@emotion/is-prop-valid").default)}catch{}function MS(e,t,n){const r={};for(const i in e)i==="values"&&typeof e.values=="object"||fe(e[i])||(E0(i)||n===!0&&ls(i)||!t&&!ls(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}const Is=k.createContext({});function LS(e,t){if(Ps(e)){const{initial:n,animate:r}=e;return{initial:n===!1||di(n)?n:void 0,animate:di(r)?r:void 0}}return e.inherit!==!1?t:{}}function zS(e){const{initial:t,animate:n}=LS(e,k.useContext(Is));return k.useMemo(()=>({initial:t,animate:n}),[Xp(t),Xp(n)])}function Xp(e){return Array.isArray(e)?e.join(" "):e}const yu=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function P0(e,t,n){for(const r in t)!fe(t[r])&&!c0(r,n)&&(e[r]=t[r])}function DS({transformTemplate:e},t){return k.useMemo(()=>{const n=yu();return mu(n,t,e),Object.assign({},n.vars,n.style)},[t])}function VS(e,t){const n=e.style||{},r={};return P0(r,n,e),Object.assign(r,DS(e,t)),r}function FS(e,t){const n={},r=VS(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const I0=()=>({...yu(),attrs:{}});function BS(e,t,n,r){const i=k.useMemo(()=>{const o=I0();return u0(o,t,p0(r),e.transformTemplate,e.style),{...o.attrs,style:{...o.style}}},[t]);if(e.style){const o={};P0(o,e.style,e),i.style={...o,...i.style}}return i}const OS=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function xu(e){return typeof e!="string"||e.includes("-")?!1:!!(OS.indexOf(e)>-1||/[A-Z]/u.test(e))}function WS(e,t,n,{latestValues:r},i,o=!1,s){const c=(s??xu(e)?BS:FS)(t,r,i,e),u=MS(t,typeof e=="string",o),p=e!==k.Fragment?{...u,...c,ref:n}:{},{children:d}=t,f=k.useMemo(()=>fe(d)?d.get():d,[d]);return k.createElement(e,{...p,children:f})}function US({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,i){return{latestValues:$S(n,r,i,e),renderState:t()}}function $S(e,t,n,r){const i={},o=r(e,{});for(const f in o)i[f]=Co(o[f]);let{initial:s,animate:l}=e;const c=Ps(e),u=e0(e);t&&u&&!c&&e.inherit!==!1&&(s===void 0&&(s=t.initial),l===void 0&&(l=t.animate));let p=n?n.initial===!1:!1;p=p||s===!1;const d=p?l:s;if(d&&typeof d!="boolean"&&!Es(d)){const f=Array.isArray(d)?d:[d];for(let y=0;y<f.length;y++){const x=su(e,f[y]);if(x){const{transitionEnd:v,transition:b,...m}=x;for(const h in m){let g=m[h];if(Array.isArray(g)){const w=p?g.length-1:0;g=g[w]}g!==null&&(i[h]=g)}for(const h in v)i[h]=v[h]}}}return i}const N0=e=>(t,n)=>{const r=k.useContext(Is),i=k.useContext(Hc),o=()=>US(e,t,r,i);return n?o():Jm(o)},HS=N0({scrapeMotionValuesFromProps:gu,createRenderState:yu}),GS=N0({scrapeMotionValuesFromProps:f0,createRenderState:I0}),KS=Symbol.for("motionComponentSymbol");function YS(e,t,n){const r=k.useRef(n);k.useInsertionEffect(()=>{r.current=n});const i=k.useRef(null);return k.useCallback(o=>{var l;o&&((l=e.onMount)==null||l.call(e,o)),t&&(o?t.mount(o):t.unmount());const s=r.current;if(typeof s=="function")if(o){const c=s(o);typeof c=="function"&&(i.current=c)}else i.current?(i.current(),i.current=null):s(o);else s&&(s.current=o)},[t])}const R0=k.createContext({});function Nn(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function XS(e,t,n,r,i,o){var g,w;const{visualElement:s}=k.useContext(Is),l=k.useContext(A0),c=k.useContext(Hc),u=k.useContext(_0),p=u.reducedMotion,d=u.skipAnimations,f=k.useRef(null),y=k.useRef(!1);r=r||l.renderer,!f.current&&r&&(f.current=r(e,{visualState:t,parent:s,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:p,skipAnimations:d,isSVG:o}),y.current&&f.current&&(f.current.manuallyAnimateOnMount=!0));const x=f.current,v=k.useContext(R0);x&&!x.projection&&i&&(x.type==="html"||x.type==="svg")&&QS(f.current,n,i,v);const b=k.useRef(!1);k.useInsertionEffect(()=>{x&&b.current&&x.update(n,c)});const m=n[Wg],h=k.useRef(!!m&&typeof window<"u"&&!((g=window.MotionHandoffIsComplete)!=null&&g.call(window,m))&&((w=window.MotionHasOptimisedAnimation)==null?void 0:w.call(window,m)));return eg(()=>{y.current=!0,x&&(b.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),x.scheduleRenderMicrotask(),h.current&&x.animationState&&x.animationState.animateChanges())}),k.useEffect(()=>{x&&(!h.current&&x.animationState&&x.animationState.animateChanges(),h.current&&(queueMicrotask(()=>{var S;(S=window.MotionHandoffMarkAsComplete)==null||S.call(window,m)}),h.current=!1),x.enteringChildren=void 0)}),x}function QS(e,t,n,r){const{layoutId:i,layout:o,drag:s,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutAnchor:p,layoutCrossfade:d}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:M0(e.parent)),e.projection.setOptions({layoutId:i,layout:o,alwaysMeasureLayout:!!s||l&&Nn(l),visualElement:e,animationType:typeof o=="string"?o:"both",initialPromotionConfig:r,crossfade:d,layoutScroll:c,layoutRoot:u,layoutAnchor:p})}function M0(e){if(e)return e.options.allowProjection!==!1?e.projection:M0(e.parent)}function ba(e,{forwardMotionProps:t=!1,type:n}={},r,i){r&&IS(r);const o=n?n==="svg":xu(e),s=o?GS:HS;function l(u,p){let d;const f={...k.useContext(_0),...u,layoutId:qS(u)},{isStatic:y}=f,x=zS(u),v=s(u,y);if(!y&&typeof window<"u"){ZS();const b=JS(f);d=b.MeasureLayout,x.visualElement=XS(e,v,f,i,b.ProjectionNode,o)}return a.jsxs(Is.Provider,{value:x,children:[d&&x.visualElement?a.jsx(d,{visualElement:x.visualElement,...f}):null,WS(e,u,YS(v,x.visualElement,p),v,y,t,o)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=k.forwardRef(l);return c[KS]=e,c}function qS({layoutId:e}){const t=k.useContext(Zm).id;return t&&e!==void 0?t+"-"+e:e}function ZS(e,t){k.useContext(A0).strict}function JS(e){const t=T0(),{drag:n,layout:r}=t;if(!n&&!r)return{};const i={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}function e5(e,t){if(typeof Proxy>"u")return ba;const n=new Map,r=(o,s)=>ba(o,s,e,t),i=(o,s)=>r(o,s);return new Proxy(i,{get:(o,s)=>s==="create"?r:(n.has(s)||n.set(s,ba(s,void 0,e,t)),n.get(s))})}const t5=(e,t)=>t.isSVG??xu(e)?new zk(t):new Pk(t,{allowProjection:e!==k.Fragment});class n5 extends an{constructor(t){super(t),t.animationState||(t.animationState=Ok(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Es(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let r5=0;class i5 extends an{constructor(){super(...arguments),this.id=r5++,this.isExitComplete=!1}update(){var o;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:s,custom:l}=this.node.getProps();if(typeof s=="string"||typeof s=="object"&&s!==null&&!Array.isArray(s)){const c=kn(this.node,s,l);if(c){const{transition:u,transitionEnd:p,...d}=c;for(const f in d)(o=this.node.getValue(f))==null||o.jump(d[f])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const i=this.node.animationState.setActive("exit",!t);n&&!t&&i.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const o5={animation:{Feature:n5},exit:{Feature:i5}};function ki(e){return{point:{x:e.pageX,y:e.pageY}}}const s5=e=>t=>du(t)&&e(t,ki(t));function Ur(e,t,n,r){return pi(e,t,s5(n),r)}const L0=({current:e})=>e?e.ownerDocument.defaultView:null,Qp=(e,t)=>Math.abs(e-t);function a5(e,t){const n=Qp(e.x,t.x),r=Qp(e.y,t.y);return Math.sqrt(n**2+r**2)}const qp=new Set(["auto","scroll"]);class z0{constructor(t,n,{transformPagePoint:r,contextWindow:i=window,dragSnapToOrigin:o=!1,distanceThreshold:s=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=x=>{this.handleScroll(x.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ki(this.lastRawMoveEventInfo,this.transformPagePoint));const x=ka(this.lastMoveEventInfo,this.history),v=this.startEvent!==null,b=a5(x.offset,{x:0,y:0})>=this.distanceThreshold;if(!v&&!b)return;const{point:m}=x,{timestamp:h}=de;this.history.push({...m,timestamp:h});const{onStart:g,onMove:w}=this.handlers;v||(g&&g(this.lastMoveEvent,x),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,x)},this.handlePointerMove=(x,v)=>{this.lastMoveEvent=x,this.lastRawMoveEventInfo=v,this.lastMoveEventInfo=Ki(v,this.transformPagePoint),U.update(this.updatePoint,!0)},this.handlePointerUp=(x,v)=>{this.end();const{onEnd:b,onSessionEnd:m,resumeAnimation:h}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&h&&h(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=ka(x.type==="pointercancel"?this.lastMoveEventInfo:Ki(v,this.transformPagePoint),this.history);this.startEvent&&b&&b(x,g),m&&m(x,g)},!du(t))return;this.dragSnapToOrigin=o,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=s,this.contextWindow=i||window;const c=ki(t),u=Ki(c,this.transformPagePoint),{point:p}=u,{timestamp:d}=de;this.history=[{...p,timestamp:d}];const{onSessionStart:f}=n;f&&f(t,ka(u,this.history));const y={passive:!0,capture:!0};this.removeListeners=vi(Ur(this.contextWindow,"pointermove",this.handlePointerMove,y),Ur(this.contextWindow,"pointerup",this.handlePointerUp,y),Ur(this.contextWindow,"pointercancel",this.handlePointerUp,y)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(qp.has(r.overflowX)||qp.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,i=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},o={x:i.x-n.x,y:i.y-n.y};o.x===0&&o.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=o.x,this.lastMoveEventInfo.point.y+=o.y):this.history.length>0&&(this.history[0].x-=o.x,this.history[0].y-=o.y),this.scrollPositions.set(t,i),U.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),en(this.updatePoint)}}function Ki(e,t){return t?{point:t(e.point)}:e}function Zp(e,t){return{x:e.x-t.x,y:e.y-t.y}}function ka({point:e},t){return{point:e,delta:Zp(e,D0(t)),offset:Zp(e,l5(t)),velocity:c5(t,.1)}}function l5(e){return e[0]}function D0(e){return e[e.length-1]}function c5(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=D0(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>Ve(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&i.timestamp-r.timestamp>Ve(t)*2&&(r=e[1]);const o=Ge(i.timestamp-r.timestamp);if(o===0)return{x:0,y:0};const s={x:(i.x-r.x)/o,y:(i.y-r.y)/o};return s.x===1/0&&(s.x=0),s.y===1/0&&(s.y=0),s}function u5(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?W(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?W(n,e,r.max):Math.min(e,n)),e}function Jp(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function d5(e,{top:t,left:n,bottom:r,right:i}){return{x:Jp(e.x,n,i),y:Jp(e.y,t,r)}}function ef(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function p5(e,t){return{x:ef(e.x,t.x),y:ef(e.y,t.y)}}function f5(e,t){let n=.5;const r=ke(e),i=ke(t);return i>r?n=ci(t.min,t.max-r,e.min):r>i&&(n=ci(e.min,e.max-i,t.min)),yt(0,1,n)}function h5(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Hl=.35;function m5(e=Hl){return e===!1?e=0:e===!0&&(e=Hl),{x:tf(e,"left","right"),y:tf(e,"top","bottom")}}function tf(e,t,n){return{min:nf(e,t),max:nf(e,n)}}function nf(e,t){return typeof e=="number"?e:e[t]||0}const g5=new WeakMap;class y5{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=oe(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:i}=this.visualElement;if(i&&i.isPresent===!1)return;const o=d=>{n&&this.snapToCursor(ki(d).point),this.stopAnimation()},s=(d,f)=>{const{drag:y,dragPropagation:x,onDragStart:v}=this.getProps();if(y&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=Xb(y),!this.openDragLock))return;this.latestPointerEvent=d,this.latestPanInfo=f,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),dt(m=>{let h=this.getAxisMotionValue(m).get()||0;if(gt.test(h)){const{projection:g}=this.visualElement;if(g&&g.layout){const w=g.layout.layoutBox[m];w&&(h=ke(w)*(parseFloat(h)/100))}}this.originPoint[m]=h}),v&&U.update(()=>v(d,f),!1,!0),Ll(this.visualElement,"transform");const{animationState:b}=this.visualElement;b&&b.setActive("whileDrag",!0)},l=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f;const{dragPropagation:y,dragDirectionLock:x,onDirectionLock:v,onDrag:b}=this.getProps();if(!y&&!this.openDragLock)return;const{offset:m}=f;if(x&&this.currentDirection===null){this.currentDirection=v5(m),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",f.point,m),this.updateAxis("y",f.point,m),this.visualElement.render(),b&&U.update(()=>b(d,f),!1,!0)},c=(d,f)=>{this.latestPointerEvent=d,this.latestPanInfo=f,this.stop(d,f),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:d}=this.getProps();(d||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new z0(t,{onSessionStart:o,onStart:s,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:r,contextWindow:L0(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,i=n||this.latestPanInfo,o=this.isDragging;if(this.cancel(),!o||!i||!r)return;const{velocity:s}=i;this.startAnimation(s);const{onDragEnd:l}=this.getProps();l&&U.postRender(()=>l(r,i))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:i}=this.getProps();if(!r||!Yi(t,i,this.currentDirection))return;const o=this.getAxisMotionValue(t);let s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=u5(s,this.constraints[t],this.elastic[t])),o.set(s)}resolveConstraints(){var o;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(o=this.visualElement.projection)==null?void 0:o.layout,i=this.constraints;t&&Nn(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=d5(r.layoutBox,t):this.constraints=!1,this.elastic=m5(n),i!==this.constraints&&!Nn(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&dt(s=>{this.constraints!==!1&&this.getAxisMotionValue(s)&&(this.constraints[s]=h5(r.layoutBox[s],this.constraints[s]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Nn(t))return!1;const r=t.current,{projection:i}=this.visualElement;if(!i||!i.layout)return!1;i.root&&(i.root.scroll=void 0,i.root.updateScroll());const o=Ck(r,i.root,this.visualElement.getTransformPagePoint());let s=p5(i.layout.layoutBox,o);if(n){const l=n(bk(s));this.hasMutatedConstraints=!!l,l&&(s=i0(l))}return s}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:i,dragTransition:o,dragSnapToOrigin:s,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=dt(p=>{if(!Yi(p,n,this.currentDirection))return;let d=c&&c[p]||{};(s===!0||s===p)&&(d={min:0,max:0});const f=i?200:1e6,y=i?40:1e7,x={type:"inertia",velocity:r?t[p]:0,bounceStiffness:f,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...o,...d};return this.startAxisValueAnimation(p,x)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Ll(this.visualElement,t),r.start(ou(t,r,0,n,this.visualElement,!1))}stopAnimation(){dt(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,i=this.visualElement.getProps()[n];return i||this.visualElement.getValue(t,this.visualElement.latestValues[t]??0)}snapToCursor(t){dt(n=>{const{drag:r}=this.getProps();if(!Yi(n,r,this.currentDirection))return;const{projection:i}=this.visualElement,o=this.getAxisMotionValue(n);if(i&&i.layout){const{min:s,max:l}=i.layout.layoutBox[n],c=o.get()||0;o.set(t[n]-W(s,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Nn(n)||!r||!this.constraints)return;this.stopAnimation();const i={x:0,y:0};dt(s=>{const l=this.getAxisMotionValue(s);if(l&&this.constraints!==!1){const c=l.get();i[s]=f5({min:c,max:c},this.constraints[s])}});const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),dt(s=>{if(!Yi(s,t,null))return;const l=this.getAxisMotionValue(s),{min:c,max:u}=this.constraints[s];l.set(W(c,u,i[s]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;g5.set(this.visualElement,this);const t=this.visualElement.current,n=Ur(t,"pointerdown",u=>{const{drag:p,dragListener:d=!0}=this.getProps(),f=u.target,y=f!==t&&tk(f);p&&d&&!y&&this.start(u)});let r;const i=()=>{const{dragConstraints:u}=this.getProps();Nn(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),r||(r=x5(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:o}=this.visualElement,s=o.addEventListener("measure",i);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),U.read(i);const l=pi(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:u,hasLayoutChanged:p})=>{this.isDragging&&p&&(dt(d=>{const f=this.getAxisMotionValue(d);f&&(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{l(),n(),s(),c&&c(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:o=!1,dragElastic:s=Hl,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:i,dragConstraints:o,dragElastic:s,dragMomentum:l}}}function rf(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function x5(e,t,n){const r=pp(e,rf(n)),i=pp(t,rf(n));return()=>{r(),i()}}function Yi(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function v5(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class w5 extends an{constructor(t){super(t),this.removeGroupControls=Ye,this.removeListeners=Ye,this.controls=new y5(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ye}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Sa=e=>(t,n)=>{e&&U.update(()=>e(t,n),!1,!0)};class b5 extends an{constructor(){super(...arguments),this.removePointerDownListener=Ye}onPointerDown(t){this.session=new z0(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:L0(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:Sa(t),onStart:Sa(n),onMove:Sa(r),onEnd:(o,s)=>{delete this.session,i&&U.postRender(()=>i(o,s))}}}mount(){this.removePointerDownListener=Ur(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ca=!1;class k5 extends k.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:i}=this.props,{projection:o}=t;o&&(n.group&&n.group.add(o),r&&r.register&&i&&r.register(o),Ca&&o.root.didUpdate(),o.addEventListener("animationComplete",()=>{this.safeToRemove()}),o.setOptions({...o.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),jo.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:i,isPresent:o}=this.props,{projection:s}=r;return s&&(s.isPresent=o,t.layoutDependency!==n&&s.setOptions({...s.options,layoutDependency:n}),Ca=!0,i||t.layoutDependency!==n||n===void 0||t.isPresent!==o?s.willUpdate():this.safeToRemove(),t.isPresent!==o&&(o?s.promote():s.relegate()||U.postRender(()=>{const l=s.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),uu.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:i}=t;Ca=!0,i&&(i.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function V0(e){const[t,n]=ES(),r=k.useContext(Zm);return a.jsx(k5,{...e,layoutGroup:r,switchLayoutGroup:k.useContext(R0),isPresent:t,safeToRemove:n})}const S5={pan:{Feature:b5},drag:{Feature:w5,ProjectionNode:j0,MeasureLayout:V0}};function of(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const i="onHover"+n,o=r[i];o&&U.postRender(()=>o(t,ki(t)))}class C5 extends an{mount(){const{current:t}=this.node;t&&(this.unmount=qb(t,(n,r)=>(of(this.node,r,"Start"),i=>of(this.node,i,"End"))))}unmount(){}}class j5 extends an{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=vi(pi(this.node.current,"focus",()=>this.onFocus()),pi(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function sf(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const i="onTap"+(n==="End"?"":n),o=r[i];o&&U.postRender(()=>o(t,ki(t)))}class _5 extends an{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=rk(t,(i,o)=>(sf(this.node,o,"Start"),(s,{success:l})=>sf(this.node,s,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Gl=new WeakMap,ja=new WeakMap,A5=e=>{const t=Gl.get(e.target);t&&t(e)},T5=e=>{e.forEach(A5)};function E5({root:e,...t}){const n=e||document;ja.has(n)||ja.set(n,{});const r=ja.get(n),i=JSON.stringify(t);return r[i]||(r[i]=new IntersectionObserver(T5,{root:e,...t})),r[i]}function P5(e,t,n){const r=E5(t);return Gl.set(e,n),r.observe(e),()=>{Gl.delete(e),r.unobserve(e)}}const I5={some:0,all:1};class N5 extends an{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var c;(c=this.stopObserver)==null||c.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:i="some",once:o}=t,s={root:n?n.current:void 0,rootMargin:r,threshold:typeof i=="number"?i:I5[i]},l=u=>{const{isIntersecting:p}=u;if(this.isInView===p||(this.isInView=p,o&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:d,onViewportLeave:f}=this.node.getProps(),y=p?d:f;y&&y(u)};this.stopObserver=P5(this.node.current,s,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(R5(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function R5({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const M5={inView:{Feature:N5},tap:{Feature:_5},focus:{Feature:j5},hover:{Feature:C5}},L5={layout:{ProjectionNode:j0,MeasureLayout:V0}},z5={...o5,...M5,...S5,...L5},A=e5(z5,t5);function D5(e){e.values.forEach(t=>t.stop())}function Kl(e,t){[...t].reverse().forEach(r=>{const i=e.getVariant(r);i&&au(e,i),e.variantChildren&&e.variantChildren.forEach(o=>{Kl(o,t)})})}function V5(e,t){if(Array.isArray(t))return Kl(e,t);if(typeof t=="string")return Kl(e,[t]);au(e,t)}function F5(){const e=new Set,t={subscribe(n){return e.add(n),()=>void e.delete(n)},start(n,r){const i=[];return e.forEach(o=>{i.push(Hg(o,n,{transitionOverride:r}))}),Promise.all(i)},set(n){return e.forEach(r=>{V5(r,n)})},stop(){e.forEach(n=>{D5(n)})},mount(){return()=>{t.stop()}}};return t}function B5(){const e=Jm(F5);return eg(e.mount,[]),e}const O5=B5,W5={some:0,all:1};function U5(e,t,{root:n,margin:r,amount:i="some"}={}){const o=cu(e),s=new WeakMap,l=u=>{u.forEach(p=>{const d=s.get(p.target);if(p.isIntersecting!==!!d)if(p.isIntersecting){const f=t(p.target,p);typeof f=="function"?s.set(p.target,f):c.unobserve(p.target)}else typeof d=="function"&&(d(p),s.delete(p.target))})},c=new IntersectionObserver(l,{root:n,rootMargin:r,threshold:typeof i=="number"?i:W5[i]});return o.forEach(u=>c.observe(u)),()=>c.disconnect()}function $5(e,{root:t,margin:n,amount:r,once:i=!1,initial:o=!1}={}){const[s,l]=k.useState(o);return k.useEffect(()=>{if(!e.current||i&&s)return;const c=()=>(l(!0),i?void 0:()=>l(!1)),u={root:t&&t.current||void 0,margin:n,amount:r};return U5(e.current,c,u)},[t,e,n,i,r]),s}const H5=()=>{const[e,t]=k.useState(null),n=O5(),r=k.useRef(null),i=$5(r,{once:!0,amount:.2});k.useEffect(()=>{i&&n.start("visible")},[n,i]);const o=[{name:"Dr. Ananya Sharma",role:"CEO & Co-Founder",image:"👩‍🔬",professionalJourney:"Started as a research intern at Google Brain, worked on large language models for 6 years before leading the AI research division. Recognized globally for contributions to transformer architectures.",industryExpertise:["Natural Language Processing","Deep Learning","AI Strategy","Transformer Models"],achievements:["Top 100 Women in AI 2025","Google Research Excellence Award","3 Patents in AI","Published 25+ Research Papers"],thoughtLeadership:"Regular speaker at NeurIPS, ICML, and ICLR. Authored 'Transformers Unlocked' - a widely referenced book on NLP architectures.",videoIntro:"https://www.youtube.com/embed/dQw4w9WgXcQ",videoCourses:"https://www.youtube.com/embed/dQw4w9WgXcQ?list=PLu0W_9lII9agICnT8t4iYVSZ3eykFSOME",linkedin:"https://linkedin.com/in/ananyasharma",mediaAppearances:["Forbes 30 Under 30 Asia 2024","TEDx Talk - 'Democratizing AI'","CNN Tech Innovators","Wired AI Summit Panelist"],areasOfSpecialization:["LLM Architecture","AI Ethics","Transformers","Generative AI"]},{name:"Vikram Mehta",role:"CTO & Co-Founder",image:"👨‍💻",professionalJourney:"15+ years in software engineering, starting at Microsoft Research, then Amazon AI, building and deploying production-scale ML systems used by millions.",industryExpertise:["MLOps","Computer Vision","Cloud AI Architecture","Scalable Systems"],achievements:["AWS AI Hero","Microsoft Gold Star Award","Tech Speaker at 50+ Conferences","3 Open Source AI Projects"],thoughtLeadership:"Keynote speaker at KubeCon, AWS re:Invent, and PyCon. Known for bridging the gap between research and production AI.",videoIntro:"https://www.youtube.com/embed/dQw4w9WgXcQ",videoCourses:"https://www.youtube.com/embed/dQw4w9WgXcQ?list=PLu0W_9lII9agICnT8t4iYVSZ3eykFSOME",linkedin:"https://linkedin.com/in/vikrammehta",mediaAppearances:["InfoQ Tech Interview","O'Reilly Radar","TechCrunch AI Feature","CIO Magazine Interview"],areasOfSpecialization:["ML Infrastructure","Cloud Architecture","Computer Vision","Edge AI"]},{name:"Priya Patel",role:"Head of Education & Co-Founder",image:"👩‍🏫",professionalJourney:"Former Dean at IIT Delhi, transformed the computer science curriculum to focus on practical AI. Led multiple government initiatives for AI education in India.",industryExpertise:["Curriculum Design","Pedagogy","Student Success","Education Technology"],achievements:["Education Innovation Award 2024","Published 5 Textbooks","3000+ Students Mentored","UNESCO AI Education Consultant"],thoughtLeadership:"Regular contributor to education policy discussions. Authored 'Future-Proof Learning' - a framework for AI education.",videoIntro:"https://www.youtube.com/embed/dQw4w9WgXcQ",videoCourses:"https://www.youtube.com/embed/dQw4w9WgXcQ?list=PLu0W_9lII9agICnT8t4iYVSZ3eykFSOME",linkedin:"https://linkedin.com/in/priyapatel",mediaAppearances:["BBC Education Special","Times of India Education Summit","Harvard EdCast Interview","The Hindu Education Feature"],areasOfSpecialization:["AI Curriculum Design","Pedagogical Innovation","EdTech Strategy","Student Mentorship"]}],s=[{icon:"🎯",title:"Purpose-Driven",description:"We believe AI education should serve a purpose - creating opportunities and solving real problems."},{icon:"🤝",title:"Industry-First",description:"Our curriculum is built by industry veterans who understand what it takes to succeed in AI."},{icon:"🌱",title:"Growth Mindset",description:"We foster a culture of continuous learning and encourage our students to push boundaries."},{icon:"💡",title:"Innovation",description:"We embrace innovation in everything we do - from teaching methods to technology integration."}],l={hidden:{opacity:0,y:60},visible:{opacity:1,y:0,transition:{duration:.6,ease:"easeOut"}}},c={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.15}}},u={hidden:{opacity:0,scale:.95},visible:{opacity:1,scale:1,transition:{duration:.5,ease:"easeOut"}},hover:{scale:1.02,boxShadow:"0 20px 40px rgba(0,212,168,0.1)",transition:{duration:.3}}},p={hidden:{opacity:0,scale:.8,rotate:-10},visible:{opacity:1,scale:1,rotate:0,transition:{duration:.7,ease:"easeOut"}}};return a.jsxs("div",{style:G5,children:[a.jsx(A.section,{initial:"hidden",animate:"visible",variants:l,style:K5,children:a.jsxs("div",{style:Y5,children:[a.jsxs(A.h1,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.8,type:"spring",bounce:.3},style:X5,children:["Meet Our ",a.jsx("span",{style:Q5,children:"Founders"})]}),a.jsx(A.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.3,duration:.6},style:q5,children:"Industry veterans with decades of combined experience in AI, research, and education. Real experts who've built real AI systems."})]})}),a.jsx(A.section,{ref:r,initial:"hidden",animate:n,variants:c,style:Z5,children:o.map((d,f)=>a.jsx(A.div,{variants:u,whileHover:"hover",style:J5,children:a.jsxs("div",{style:e4,children:[a.jsx(A.div,{variants:p,style:t4,whileHover:{scale:1.1,rotate:5},children:a.jsx("span",{style:n4,children:d.image})}),a.jsxs("div",{style:r4,children:[a.jsx(A.h2,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:.2},style:i4,children:d.name}),a.jsx(A.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3},style:o4,children:d.role}),a.jsxs(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.4},style:It,children:[a.jsx("h3",{style:Nt,children:"Professional Journey"}),a.jsx("p",{style:af,children:d.professionalJourney})]}),a.jsxs(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.5},style:It,children:[a.jsx("h3",{style:Nt,children:"Industry Expertise"}),a.jsx("div",{style:s4,children:d.industryExpertise.map((y,x)=>a.jsx(A.span,{style:a4,whileHover:{scale:1.1,backgroundColor:"#00d4a8"},children:y},x))})]}),a.jsxs(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.6},style:It,children:[a.jsx("h3",{style:Nt,children:"Achievements"}),a.jsx("div",{style:l4,children:d.achievements.map((y,x)=>a.jsxs(A.span,{style:c4,whileHover:{scale:1.05},children:["🏆 ",y]},x))})]}),a.jsxs(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.7},style:It,children:[a.jsx("h3",{style:Nt,children:"Thought Leadership"}),a.jsx("p",{style:af,children:d.thoughtLeadership})]}),a.jsxs(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.8},style:It,children:[a.jsx("h3",{style:Nt,children:"Video Introduction"}),a.jsx("div",{style:lf,children:a.jsx("iframe",{width:"100%",height:"200",src:d.videoIntro,title:`${d.name} Introduction`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:cf})})]}),a.jsxs(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:.9},style:It,children:[a.jsxs("h3",{style:Nt,children:["Course Overview (",d.areasOfSpecialization[0],")"]}),a.jsx("div",{style:lf,children:a.jsx("iframe",{width:"100%",height:"200",src:d.videoCourses,title:`${d.name} Course Details`,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,style:cf})})]}),a.jsxs(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:1},style:It,children:[a.jsx("h3",{style:Nt,children:"Areas of Specialization"}),a.jsx("div",{style:u4,children:d.areasOfSpecialization.map((y,x)=>a.jsx(A.span,{style:d4,whileHover:{scale:1.1,rotate:3},children:y},x))})]}),a.jsxs(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:1.1},style:It,children:[a.jsx("h3",{style:Nt,children:"Media Appearances"}),a.jsx("div",{style:p4,children:d.mediaAppearances.map((y,x)=>a.jsxs(A.span,{style:f4,whileHover:{scale:1.05},children:["📺 ",y]},x))})]}),a.jsx(A.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},transition:{delay:1.2},style:h4,children:a.jsx(A.a,{href:d.linkedin,target:"_blank",rel:"noopener noreferrer",style:m4,whileHover:{scale:1.05,backgroundColor:"#0077b5"},children:"💼 Connect on LinkedIn"})})]})]})},f))}),a.jsxs(A.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,style:g4,children:[a.jsx(A.h2,{variants:l,style:y4,children:"Our Core Values"}),a.jsx(A.p,{variants:l,style:x4,children:"The principles that guide everything we do"}),a.jsx("div",{style:v4,children:s.map((d,f)=>a.jsxs(A.div,{variants:u,whileHover:{scale:1.05,y:-10},style:w4,children:[a.jsx(A.div,{style:b4,whileHover:{rotate:[0,10,-10,0],transition:{duration:.5}},children:d.icon}),a.jsx("h3",{style:k4,children:d.title}),a.jsx("p",{style:S4,children:d.description})]},f))})]}),a.jsx(A.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,style:C4,children:a.jsxs("div",{style:j4,children:[a.jsx(A.h2,{variants:l,style:_4,children:"Our Story"}),a.jsx(A.p,{variants:l,style:uf,children:"Elevox AI Academy was born from a simple belief: exceptional AI talent exists everywhere, but opportunity doesn't. We're bridging that gap by bringing world-class AI education to Tier-2 cities."}),a.jsx(A.p,{variants:l,style:uf,children:"Founded in 2024, we've grown from a small cohort of 20 students to over 500 alumni, with a 95% placement rate. Our success comes from our commitment to practical, industry-aligned education that transforms careers."}),a.jsx(A.div,{variants:c,style:A4,children:[{num:"2024",label:"Founded"},{num:"500+",label:"Alumni"},{num:"95%",label:"Placement"}].map((d,f)=>a.jsxs(A.div,{variants:u,whileHover:{scale:1.05},style:T4,children:[a.jsx(A.span,{style:E4,initial:{opacity:0,scale:.5},whileInView:{opacity:1,scale:1},transition:{duration:.6,type:"spring"},children:d.num}),a.jsx("span",{style:P4,children:d.label})]},f))})]})}),a.jsx(A.section,{initial:"hidden",whileInView:"visible",viewport:{once:!0,amount:.2},variants:c,style:I4,children:a.jsxs("div",{style:N4,children:[a.jsx(A.h2,{variants:l,style:R4,children:"Join Our Mission"}),a.jsx(A.p,{variants:l,style:M4,children:"Be part of a community that's democratizing AI education and creating opportunities in Tier-2 cities. Start your AI journey today."}),a.jsxs(A.div,{variants:c,style:L4,children:[a.jsx(A.a,{href:"/admissions",style:z4,whileHover:{scale:1.05,boxShadow:"0 10px 30px rgba(0,212,168,0.3)"},whileTap:{scale:.95},children:"Apply Now →"}),a.jsx(A.a,{href:"/aboutus",style:D4,whileHover:{scale:1.05,borderColor:"#00d4a8"},whileTap:{scale:.95},children:"Learn More"})]})]})}),a.jsx(A.div,{style:V4,animate:{y:[0,-20,0],x:[0,10,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"}}),a.jsx(A.div,{style:F4,animate:{y:[0,30,0],x:[0,-15,0]},transition:{duration:5,repeat:1/0,ease:"easeInOut"}}),a.jsx(A.div,{style:B4,animate:{scale:[1,1.5,1],opacity:[.3,.8,.3]},transition:{duration:3,repeat:1/0,ease:"easeInOut"}})]})},G5={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px",position:"relative",overflow:"hidden"},K5={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.05) 0%, transparent 100%)",position:"relative"},Y5={maxWidth:"800px",margin:"0 auto"},X5={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},Q5={color:"#00d4a8",background:"linear-gradient(135deg, #00d4a8, #00a884)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},q5={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto",lineHeight:"1.6"},Z5={padding:"40px 24px 60px",maxWidth:"1200px",margin:"0 auto"},J5={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"20px",padding:"40px",marginBottom:"40px",border:"1px solid rgba(255,255,255,0.06)",backdropFilter:"blur(10px)",position:"relative",overflow:"hidden"},e4={display:"flex",gap:"40px",alignItems:"flex-start",flexWrap:"wrap"},t4={width:"140px",height:"140px",borderRadius:"50%",background:"linear-gradient(135deg, rgba(0,212,168,0.1), rgba(0,212,168,0.2))",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,border:"3px solid rgba(0,212,168,0.3)",boxShadow:"0 10px 40px rgba(0,212,168,0.1)",position:"relative"},n4={fontSize:"56px"},r4={flex:1,minWidth:"280px"},i4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"4px"},o4={fontSize:"16px",color:"#00d4a8",fontWeight:500,marginBottom:"20px"},It={marginBottom:"20px"},Nt={fontSize:"13px",fontWeight:600,color:"rgba(240,242,245,0.4)",textTransform:"uppercase",letterSpacing:"1px",marginBottom:"8px"},af={fontSize:"15px",color:"rgba(240,242,245,0.7)",lineHeight:"1.7"},s4={display:"flex",gap:"8px",flexWrap:"wrap"},a4={fontSize:"12px",padding:"6px 16px",borderRadius:"12px",backgroundColor:"rgba(0,212,168,0.1)",color:"#00d4a8",border:"1px solid rgba(0,212,168,0.15)",cursor:"default",transition:"all 0.3s"},l4={display:"flex",gap:"12px",flexWrap:"wrap"},c4={fontSize:"13px",color:"rgba(240,242,245,0.6)",padding:"6px 14px",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"8px",border:"1px solid rgba(255,255,255,0.05)",cursor:"default",transition:"all 0.3s"},lf={borderRadius:"12px",overflow:"hidden",maxWidth:"560px",marginTop:"8px"},cf={borderRadius:"12px"},u4={display:"flex",gap:"10px",flexWrap:"wrap"},d4={fontSize:"14px",padding:"6px 18px",borderRadius:"20px",backgroundColor:"rgba(0,212,168,0.08)",color:"#00d4a8",border:"1px solid rgba(0,212,168,0.2)",fontWeight:500,cursor:"default",transition:"all 0.3s"},p4={display:"flex",gap:"10px",flexWrap:"wrap"},f4={fontSize:"13px",color:"rgba(240,242,245,0.5)",padding:"4px 12px",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.05)",cursor:"default",transition:"all 0.3s"},h4={marginTop:"20px"},m4={display:"inline-block",padding:"10px 24px",borderRadius:"8px",backgroundColor:"rgba(0,212,168,0.05)",color:"#f0f2f5",textDecoration:"none",fontSize:"14px",fontWeight:500,border:"1px solid rgba(0,212,168,0.1)",transition:"all 0.3s"},g4={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},y4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"8px",textAlign:"center"},x4={fontSize:"16px",color:"rgba(240,242,245,0.5)",textAlign:"center",marginBottom:"40px"},v4={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"24px"},w4={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"32px",textAlign:"center",border:"1px solid rgba(255,255,255,0.06)",transition:"all 0.3s"},b4={fontSize:"40px",marginBottom:"12px"},k4={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},S4={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6"},C4={padding:"60px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.02) 100%)"},j4={maxWidth:"800px",margin:"0 auto",textAlign:"center"},_4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"16px"},uf={fontSize:"16px",color:"rgba(240,242,245,0.6)",lineHeight:"1.8",marginBottom:"16px"},A4={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"24px",marginTop:"32px"},T4={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",padding:"20px",border:"1px solid rgba(255,255,255,0.06)",transition:"all 0.3s"},E4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"32px",fontWeight:700,color:"#00d4a8",display:"block"},P4={fontSize:"14px",color:"rgba(240,242,245,0.4)",display:"block",marginTop:"4px"},I4={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},N4={maxWidth:"700px",margin:"0 auto",textAlign:"center"},R4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px"},M4={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"32px"},L4={display:"flex",gap:"16px",justifyContent:"center",flexWrap:"wrap"},z4={display:"inline-block",padding:"14px 36px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"16px",transition:"all 0.3s",cursor:"pointer"},D4={display:"inline-block",padding:"14px 36px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",color:"#f0f2f5",fontWeight:500,textDecoration:"none",fontSize:"16px",transition:"all 0.3s",cursor:"pointer"},V4={position:"fixed",width:"300px",height:"300px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,212,168,0.05) 0%, transparent 70%)",top:"10%",right:"-100px",pointerEvents:"none",zIndex:0},F4={position:"fixed",width:"200px",height:"200px",borderRadius:"50%",background:"radial-gradient(circle, rgba(0,212,168,0.03) 0%, transparent 70%)",bottom:"20%",left:"-50px",pointerEvents:"none",zIndex:0},B4={position:"fixed",width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#00d4a8",top:"50%",right:"10%",pointerEvents:"none",zIndex:0,opacity:.3};function df(){return a.jsx(lt,{eyebrow:"Insights and knowledge hub",title:"A thought leadership hub for founders, trends, reports, stories, and case studies.",summary:"The insights section positions Elevox founders as credible voices in applied AI, employability, and business transformation.",primaryCta:["Read founder articles","/insights/articles"],secondaryCta:["Meet founders","/founders"],proof:["AI trends","Founder articles","Case studies"],sections:[{eyebrow:"Content categories",title:"Build authority before selling programmes.",copy:"The hub should educate prospects and help search engines understand Elevox as an applied AI authority.",items:[{icon:"chart",label:"Trends",title:"AI Trends",copy:"Market shifts, tools, job changes, and AI adoption patterns."},{icon:"book",label:"Reports",title:"Industry Reports",copy:"Deeper explainers around sectors, skills, and workforce transformation."},{icon:"users",label:"Founders",title:"Founder Articles",copy:"Operator perspectives that build credibility and trust."},{icon:"graduation",label:"Students",title:"Student Success Stories",copy:"Learner journeys from programme to portfolio and career confidence."},{icon:"briefcase",label:"Business",title:"Case Studies",copy:"Examples of transformation, training, and applied AI outcomes."},{icon:"play",label:"Media",title:"Webinars and podcasts",copy:"Recordings, conversations, and expert sessions for ongoing learning."}]}],finalCta:{eyebrow:"Content CTA",title:"Use insight to build trust before the first counselling call.",copy:"The knowledge hub can grow into one of Elevox's strongest authority channels.",label:"Explore programmes",to:"/programmes"}})}const O4=[{name:"Dr. Ananya Sharma",role:"Co-Founder, AI Strategy",journey:"Former AI research lead at Microsoft Research, Dr. Sharma transitioned from building state-of-the-art NLP models to building the people who can deploy them responsibly. Her decade-long journey spans academia, enterprise AI, and product leadership.",expertise:"Natural Language Processing, Model Evaluation, AI Product Strategy, Enterprise AI Adoption, Responsible AI Frameworks",thought:"AI education must move from tool demos to decision capability. The real test isn't knowing how to use a model—it's knowing when and why to use it.",intro:"Dr. Sharma shares her vision for Elevox and why AI education needs to evolve from technical training to strategic decision-making.",courseVideo:"A comprehensive walkthrough of the AI Strategy stream—covering model evaluation, NLP applications, product strategy, and responsible deployment.",linkedin:"https://www.linkedin.com/in/drananyasharma",media:["AI India Today: 'The Future of Enterprise AI'","Future of Work Panel at TechSparks 2025","Keynote: 'Responsible AI in Production' at Applied AI Summit","Guest Lecturer at IIT Bombay AI Program","Featured in YourStory's 'Women in AI' Series"],specializations:["AI Strategy","NLP","Responsible AI","Enterprise Architecture","Product Leadership"],achievements:["Led applied AI teams across healthcare and fintech for 8+ years","Published 20+ AI research papers and industry white papers","Advisor to 12 early-stage AI product teams","Built NLP systems used by 50+ enterprise clients","Designed AI governance frameworks for 3 Fortune 500 companies"],stats:[{label:"Years Experience",value:"12+"},{label:"Papers Published",value:"22"},{label:"Enterprise Clients",value:"50+"},{label:"Teams Mentored",value:"200+"}],quote:"The most important skill in AI is knowing when not to use it."},{name:"Vikram Mehta",role:"Co-Founder, Technology",journey:"Vikram's career spans building AI systems at scale—from data platforms at Flipkart to automation products at UiPath. He now designs Elevox's technical spine, ensuring every learner builds production-ready skills.",expertise:"MLOps, Cloud AI Architecture, Computer Vision, LLM Applications, Distributed Systems, Production ML",thought:"Employability comes from shipping, measuring, and explaining systems. Theoretical knowledge is worthless without practical deployment experience.",intro:"Vikram discusses the technology philosophy behind Elevox and why hands-on learning is non-negotiable for AI careers.",courseVideo:"Deep dive into the Developer stream—covering MLOps pipelines, cloud deployment, computer vision, and LLM application development.",linkedin:"https://www.linkedin.com/in/vikrammehta",media:["Cloud AI Summit: 'Scaling ML in Production'","MLOps India Forum 2025 Keynote Speaker","Engineering Leadership Podcast: 'Building AI Teams'","Featured in Analytics India Magazine's 'Top ML Engineers'","Guest Speaker at AWS re:Invent 2025"],specializations:["MLOps","LLM Applications","Cloud AI","Distributed Systems","Production ML"],achievements:["Scaled ML systems to handle 1M+ requests per second","Speaker at 50+ engineering forums worldwide","Mentored 100+ AI engineers across enterprise teams","Built computer vision systems for autonomous warehouse robots","Reduced model deployment time from weeks to hours"],stats:[{label:"Systems Scaled",value:"1M+/sec"},{label:"Forums Spoken",value:"50+"},{label:"Engineers Mentored",value:"100+"},{label:"Years Experience",value:"10+"}],quote:"AI is not about models—it's about systems that deliver value consistently."},{name:"Priya Patel",role:"Co-Founder, Learning Experience",journey:"With a background in educational psychology and curriculum design, Priya has transformed how complex AI concepts are taught. She previously led learning innovation at a top ed-tech firm and now shapes Elevox's learner-first approach.",expertise:"Curriculum Design, Learner Success, Assessment Strategy, Career Readiness, Educational Technology",thought:"The final assessment is not a test. It is whether the learner can be trusted with real work. We measure readiness, not memorization.",intro:"Priya shares her learning philosophy and how Elevox creates confidence-building educational journeys.",courseVideo:"Walkthrough of the Professional Pathway—designed for career transition, skill acceleration, and placement readiness.",linkedin:"https://www.linkedin.com/in/priyapatel",media:["Education Innovation Roundtable: 'Future of Tech Learning'","Career Readiness Forum at UNESCO Conference","Women in AI Education Summit Keynote","Featured in YourStory's 'EdTech Leaders 2025'","Guest Lecturer at Harvard EdTech Program"],specializations:["Curriculum Design","Career Coaching","Assessment","EdTech Strategy","Learning Science"],achievements:["Designed programmes for 3,000+ learners with 85% completion rate","Built placement-readiness frameworks adopted by 20+ institutions","Led academic innovation team at leading ed-tech company","Developed adaptive learning paths for AI education","Achieved 92% learner satisfaction rate across programmes"],stats:[{label:"Learners Impacted",value:"3,000+"},{label:"Completion Rate",value:"85%"},{label:"Institutions Served",value:"20+"},{label:"Satisfaction Rate",value:"92%"}],quote:"Learning happens when challenge meets support at the right moment."}];function W4(){return a.jsxs("main",{className:"leadership-page",children:[a.jsx("style",{children:U4}),a.jsxs("section",{className:"leadership-hero",children:[a.jsx("p",{className:"eyebrow",children:"Leadership Team"}),a.jsx("h1",{children:"One of the strongest assets of the brand."}),a.jsx("p",{children:"Meet the founders behind Elevox. Each brings decades of experience in AI research, production systems, and education. Our credibility comes from people who have built, deployed, and scaled AI in the real world."})]}),a.jsx("section",{className:"founder-profiles",children:O4.map((e,t)=>a.jsxs("article",{className:"founder-profile",children:[a.jsxs("div",{className:"founder-visual",children:[a.jsx("span",{children:String(t+1).padStart(2,"0")}),a.jsx("strong",{children:e.name.split(" ").map(n=>n[0]).join("")})]}),a.jsxs("div",{className:"founder-content",children:[a.jsx("p",{className:"eyebrow",children:e.role}),a.jsx("h2",{children:e.name}),a.jsx("p",{className:"journey",children:e.journey}),a.jsxs("div",{className:"profile-grid",children:[a.jsx(Xi,{title:"Industry Expertise",text:e.expertise}),a.jsx(Xi,{title:"Thought Leadership",text:e.thought}),a.jsx(Xi,{title:"Video Introduction",text:e.intro}),a.jsx(Xi,{title:"Course Detail Video",text:e.courseVideo})]}),a.jsx("div",{className:"tag-row",children:e.specializations.map(n=>a.jsx("span",{children:n},n))}),a.jsxs("div",{className:"achievements-media-grid",children:[a.jsxs("div",{className:"achievements",children:[a.jsx("h3",{children:"🏆 Key Achievements"}),e.achievements.map(n=>a.jsxs("p",{children:["• ",n]},n))]}),a.jsxs("div",{className:"media",children:[a.jsx("h3",{children:"🎤 Media Appearances"}),e.media.map(n=>a.jsxs("p",{children:["• ",n]},n))]})]}),a.jsx("div",{className:"stats-row",children:e.stats.map(n=>a.jsxs("div",{className:"stat-item",children:[a.jsx("strong",{children:n.value}),a.jsx("span",{children:n.label})]},n.label))}),a.jsxs("blockquote",{className:"founder-quote",children:['"',e.quote,'"']}),a.jsxs("a",{className:"linkedin-link",href:e.linkedin,target:"_blank",rel:"noreferrer",children:[a.jsx("span",{children:"LinkedIn Profile"}),a.jsx("span",{children:"→"})]})]})]},e.name))})]})}function Xi({title:e,text:t}){return a.jsxs("div",{className:"info-card",children:[a.jsx("h3",{children:e}),a.jsx("p",{children:t})]})}const U4=`
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
`,$4=()=>a.jsx("div",{style:H4,children:a.jsxs("div",{style:G4,children:[a.jsx("div",{style:K4,children:"404"}),a.jsx("h1",{style:Y4,children:"Page Not Found"}),a.jsx("p",{style:X4,children:"Oops! The page you're looking for doesn't exist or has been moved."}),a.jsx("p",{style:Q4,children:"Let's get you back on track."}),a.jsxs("div",{style:q4,children:[a.jsx("a",{href:"/",style:Z4,children:"Go Home →"}),a.jsx("a",{href:"/programmes",style:J4,children:"Browse Programs"})]}),a.jsx("div",{style:eC,children:a.jsxs("p",{style:tC,children:["Need help? ",a.jsx("a",{href:"/contact",style:nC,children:"Contact our support team"})]})})]})}),H4={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px",display:"flex",alignItems:"center",justifyContent:"center"},G4={textAlign:"center",padding:"40px 24px",maxWidth:"600px"},K4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(6rem, 15vw, 10rem)",fontWeight:700,color:"#00d4a8",opacity:.2,lineHeight:"1",marginBottom:"16px"},Y4={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 4vw, 3rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px"},X4={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"8px"},Q4={fontSize:"15px",color:"rgba(240,242,245,0.4)",marginBottom:"32px"},q4={display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap",marginBottom:"32px"},Z4={display:"inline-block",padding:"12px 32px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},J4={display:"inline-block",padding:"12px 32px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",color:"#f0f2f5",fontWeight:500,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},eC={borderTop:"1px solid rgba(255,255,255,0.06)",paddingTop:"24px"},tC={fontSize:"14px",color:"rgba(240,242,245,0.4)"},nC={color:"#00d4a8",textDecoration:"none"},pf=[{slug:"foundations",title:"Elevox Foundations",category:"Foundational",duration:"8 weeks",fees:"Rs. 24,000",format:"Hybrid live cohort",certification:"Elevox AI Fluency Certificate",eligibility:"Students, fresh graduates, non-technical professionals",summary:"Build practical AI literacy and confidence before choosing a specialization.",outcomes:["AI-first thinking","Prompt and workflow fluency","Portfolio-ready mini projects","Career direction clarity"],careers:["AI-enabled analyst","Junior automation associate","Digital transformation intern"],curriculum:["AI landscape and use cases","Data literacy","Prompt systems","No-code AI workflows","Ethics and responsible use"],tools:["ChatGPT","Claude","Perplexity","Google AI Studio","Airtable"],projects:["AI research assistant","Automated content workflow","Data insight dashboard"]},{slug:"marketing",title:"AI for Marketing",category:"Domain Track",duration:"10 weeks",fees:"Rs. 36,000",format:"Weekend cohort",certification:"AI Marketing Operator Certificate",eligibility:"Marketing students, founders, creators, growth teams",summary:"Use AI to research markets, create campaigns, personalize journeys, and measure growth.",outcomes:["Campaign automation","AI content systems","Customer segmentation","Growth experimentation"],careers:["AI marketing specialist","Growth analyst","Content automation strategist"],curriculum:["Audience intelligence","Content engines","Ad creative testing","CRM automation","Analytics storytelling"],tools:["ChatGPT","Canva AI","HubSpot","Meta Ads","Looker Studio"],projects:["30-day campaign engine","Persona research board","Automated newsletter workflow"]},{slug:"hr",title:"AI for HR",category:"Domain Track",duration:"8 weeks",fees:"Rs. 32,000",format:"Live online plus labs",certification:"AI HR Transformation Certificate",eligibility:"HR students, recruiters, people ops professionals",summary:"Apply AI to hiring, workforce planning, people analytics, and employee experience.",outcomes:["Smarter screening","People analytics basics","Interview workflow design","HR automation"],careers:["AI recruiter","People analytics associate","HR automation specialist"],curriculum:["Recruitment workflows","Bias and ethics","HR analytics","Employee support bots","Talent intelligence"],tools:["ChatGPT","LinkedIn","Notion AI","Google Sheets","Zapier"],projects:["Screening rubric system","AI onboarding assistant","Attrition insight report"]},{slug:"business-analysts",title:"AI for Business Analysts",category:"Domain Track",duration:"12 weeks",fees:"Rs. 42,000",format:"Hybrid project cohort",certification:"Applied AI Business Analyst Certificate",eligibility:"MBA students, analysts, consultants, operations teams",summary:"Turn business problems into AI-ready workflows, dashboards, and decision systems.",outcomes:["Problem framing","Dashboard storytelling","Process automation","Stakeholder-ready documentation"],careers:["AI business analyst","Product analyst","Transformation associate"],curriculum:["AI opportunity mapping","Data interpretation","Workflow design","Requirement writing","Decision dashboards"],tools:["ChatGPT","Excel","Power BI","Miro","Zapier"],projects:["AI readiness audit","Operations dashboard","Automation business case"]},{slug:"developers",title:"AI for Developers",category:"Technical Track",duration:"12 weeks",fees:"Rs. 48,000",format:"Code labs and capstone",certification:"AI Native Developer Certificate",eligibility:"Developers, CS students, technical founders",summary:"Build AI-native products with APIs, agents, retrieval, evaluation, and deployment patterns.",outcomes:["LLM app development","RAG architecture","Agent workflows","Evaluation mindset"],careers:["AI app developer","LLM engineer intern","Automation engineer"],curriculum:["LLM APIs","Embeddings","RAG","Agents","Evaluation","Deployment"],tools:["OpenAI API","LangChain","React","Node.js","Vector databases"],projects:["Knowledge-base assistant","AI workflow agent","Evaluation dashboard"]},{slug:"design",title:"AI for Design",category:"Creative Track",duration:"8 weeks",fees:"Rs. 34,000",format:"Studio cohort",certification:"AI Design Workflow Certificate",eligibility:"Designers, creators, UI/UX students, product teams",summary:"Use AI to accelerate research, ideation, prototyping, visual systems, and product storytelling.",outcomes:["AI-assisted research","Fast prototyping","Design system acceleration","Creative direction"],careers:["AI product designer","UX researcher","Creative technologist"],curriculum:["AI research synthesis","Prompted ideation","UI generation","Design critique","Prototype storytelling"],tools:["Figma","FigJam AI","Midjourney","Runway","ChatGPT"],projects:["AI-assisted app concept","Product story deck","Prototype sprint"]},{slug:"operations",title:"AI for Operations",category:"Domain Track",duration:"10 weeks",fees:"Rs. 38,000",format:"Hybrid labs",certification:"AI Operations Transformation Certificate",eligibility:"Operations, logistics, manufacturing, and business teams",summary:"Apply AI to repetitive workflows, process intelligence, forecasting, and operational decisions.",outcomes:["Process automation","Forecasting basics","SOP intelligence","Operational dashboards"],careers:["AI operations associate","Automation analyst","Process improvement specialist"],curriculum:["Workflow mapping","AI SOP systems","Forecasting","Quality checks","Automation metrics"],tools:["ChatGPT","Excel","Power BI","Zapier","Notion"],projects:["AI SOP assistant","Inventory insight tracker","Process automation plan"]},{slug:"upskilling",title:"Professional Upskilling Programme",category:"Professional",duration:"12-24 weeks",fees:"Custom by pathway",format:"Role-based intensive",certification:"Elevox Professional AI Transformation Certificate",eligibility:"Working professionals and teams",summary:"A guided transition from current role to AI-augmented professional capability.",outcomes:["Role transformation plan","Promotion-ready proof","Capstone portfolio","Mentor-reviewed roadmap"],careers:["AI product operator","AI consultant","AI transformation lead"],curriculum:["Role diagnosis","AI workflow design","Automation","Capstone execution","Career positioning"],tools:["Role-specific AI stack","Automation tools","Analytics tools","Presentation systems"],projects:["Role transformation map","Live workflow automation","Executive-ready capstone"]}],F0=()=>{const e=k.useRef(null);return k.useEffect(()=>{const t=e.current,n=t.getContext("2d");let r,i=[];const o=()=>{t.width=t.offsetWidth,t.height=t.offsetHeight};class s{constructor(){this.x=Math.random()*t.width,this.y=Math.random()*t.height,this.size=Math.random()*2+.5,this.speedX=(Math.random()-.5)*.5,this.speedY=(Math.random()-.5)*.5,this.opacity=Math.random()*.5+.2}update(){this.x+=this.speedX,this.y+=this.speedY,this.x>t.width&&(this.x=0),this.x<0&&(this.x=t.width),this.y>t.height&&(this.y=0),this.y<0&&(this.y=t.height)}draw(){n.beginPath(),n.arc(this.x,this.y,this.size,0,Math.PI*2),n.fillStyle=`rgba(0, 212, 168, ${this.opacity})`,n.fill()}}const l=()=>{o(),i=[];for(let u=0;u<50;u++)i.push(new s)},c=()=>{n.clearRect(0,0,t.width,t.height),i.forEach(u=>{u.update(),u.draw()}),r=requestAnimationFrame(c)};return l(),c(),window.addEventListener("resize",l),()=>{cancelAnimationFrame(r),window.removeEventListener("resize",l)}},[]),a.jsx("canvas",{ref:e,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",pointerEvents:"none",zIndex:0}})},Qi=({children:e,className:t=""})=>a.jsxs(A.div,{className:`relative ${t}`,whileHover:{scale:1.02},transition:{duration:.3},style:{background:"linear-gradient(145deg, rgba(255,255,255,0.055), rgba(255,255,255,0.02))",border:"1px solid rgba(143, 239, 213, 0.12)",position:"relative",overflow:"hidden"},children:[a.jsx(A.div,{style:{position:"absolute",top:"-50%",left:"-50%",width:"200%",height:"200%",background:"conic-gradient(from 0deg, transparent, rgba(0, 212, 168, 0.1), transparent, rgba(0, 212, 168, 0.1), transparent)",animation:"spin 10s linear infinite"}}),e]});function rC({programme:e}){return a.jsxs(A.main,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"programme-page",children:[a.jsx("style",{children:B0}),a.jsx(F0,{}),a.jsxs("section",{className:"programme-detail-hero",children:[a.jsx(A.div,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},children:a.jsx(pe,{to:"/programmes",className:"back-link",children:a.jsx(A.span,{whileHover:{x:-5},transition:{duration:.2},children:"← Back to all programmes"})})}),a.jsx(A.p,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},className:"eyebrow",children:e.category}),a.jsx(A.h1,{initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},children:e.title}),a.jsx(A.p,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.5},children:e.summary}),a.jsxs(A.div,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.6},className:"meta-grid",children:[a.jsxs(A.span,{whileHover:{scale:1.05},transition:{duration:.2},children:[a.jsx("strong",{children:"Duration"}),e.duration]}),a.jsxs(A.span,{whileHover:{scale:1.05},transition:{duration:.2},children:[a.jsx("strong",{children:"Fees"}),e.fees]}),a.jsxs(A.span,{whileHover:{scale:1.05},transition:{duration:.2},children:[a.jsx("strong",{children:"Format"}),e.format]}),a.jsxs(A.span,{whileHover:{scale:1.05},transition:{duration:.2},children:[a.jsx("strong",{children:"Certification"}),e.certification]})]})]}),a.jsxs("section",{className:"detail-layout",children:[a.jsxs("article",{className:"detail-main",children:[a.jsxs(Qi,{className:"detail-block",children:[a.jsx(A.h2,{initial:{x:-20,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.5},viewport:{once:!0},children:"Curriculum"}),a.jsx("div",{className:"pill-grid",children:e.curriculum.map((t,n)=>a.jsx(A.span,{initial:{scale:0,opacity:0},whileInView:{scale:1,opacity:1},transition:{delay:n*.05,duration:.3},viewport:{once:!0},whileHover:{scale:1.1,backgroundColor:"rgba(0, 212, 168, 0.15)"},children:t},t))})]}),a.jsxs(Qi,{className:"detail-block",children:[a.jsx(A.h2,{initial:{x:-20,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.5},viewport:{once:!0},children:"Tools Covered"}),a.jsx("div",{className:"pill-grid",children:e.tools.map((t,n)=>a.jsx(A.span,{initial:{scale:0,opacity:0},whileInView:{scale:1,opacity:1},transition:{delay:n*.05,duration:.3},viewport:{once:!0},whileHover:{scale:1.1,backgroundColor:"rgba(0, 212, 168, 0.15)"},children:t},t))})]}),a.jsxs(Qi,{className:"detail-block",children:[a.jsx(A.h2,{initial:{x:-20,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.5},viewport:{once:!0},children:"Projects"}),a.jsx("div",{className:"pill-grid",children:e.projects.map((t,n)=>a.jsx(A.span,{initial:{scale:0,opacity:0},whileInView:{scale:1,opacity:1},transition:{delay:n*.05,duration:.3},viewport:{once:!0},whileHover:{scale:1.1,backgroundColor:"rgba(0, 212, 168, 0.15)"},children:t},t))})]}),a.jsxs(Qi,{className:"detail-block",children:[a.jsx(A.h2,{initial:{x:-20,opacity:0},whileInView:{x:0,opacity:1},transition:{duration:.5},viewport:{once:!0},children:"Career Pathways"}),a.jsx("div",{className:"pill-grid",children:e.careers.map((t,n)=>a.jsx(A.span,{initial:{scale:0,opacity:0},whileInView:{scale:1,opacity:1},transition:{delay:n*.05,duration:.3},viewport:{once:!0},whileHover:{scale:1.1,backgroundColor:"rgba(0, 212, 168, 0.15)"},children:t},t))})]})]}),a.jsx("aside",{className:"detail-side",children:a.jsxs(A.div,{initial:{x:20,opacity:0},animate:{x:0,opacity:1},transition:{delay:.4},children:[a.jsx("h2",{children:"Eligibility"}),a.jsx("p",{children:e.eligibility}),a.jsx("h2",{children:"Outcomes"}),a.jsx("ul",{children:e.outcomes.map((t,n)=>a.jsx(A.li,{initial:{x:-20,opacity:0},whileInView:{x:0,opacity:1},transition:{delay:n*.1,duration:.3},viewport:{once:!0},children:t},t))}),a.jsx("h2",{children:"Faculty"}),a.jsx("p",{children:"Founder-led sessions, mentor labs, and industry reviews."}),a.jsx(A.div,{whileHover:{scale:1.05},whileTap:{scale:.95},children:a.jsx(pe,{to:"/admissions",className:"apply-link",children:"Apply Now →"})})]})})]}),a.jsxs("section",{className:"faq-section",children:[a.jsx(A.h2,{initial:{y:-20,opacity:0},whileInView:{y:0,opacity:1},transition:{duration:.5},viewport:{once:!0},children:"FAQ"}),a.jsxs(A.details,{open:!0,initial:{y:-20,opacity:0},whileInView:{y:0,opacity:1},transition:{delay:.2,duration:.5},viewport:{once:!0},children:[a.jsx("summary",{children:"Do I need prior AI experience?"}),a.jsx("p",{children:"No. We map the route based on your current background and the outcome you want."})]}),a.jsxs(A.details,{initial:{y:-20,opacity:0},whileInView:{y:0,opacity:1},transition:{delay:.3,duration:.5},viewport:{once:!0},children:[a.jsx("summary",{children:"Will I build a portfolio?"}),a.jsx("p",{children:"Yes. Every programme ends with visible work that can be shown to employers or teams."})]})]})]})}function ff(){const{track:e}=Gv(),t=pf.find(n=>n.slug===e);return t?a.jsx(rC,{programme:t}):a.jsxs(A.main,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},className:"programme-page",children:[a.jsx("style",{children:B0}),a.jsx(F0,{}),a.jsxs("section",{className:"programme-hero",children:[a.jsx(A.p,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.2},className:"eyebrow",children:"Central Learning Hub in Nagpur & Nearby Areas"}),a.jsx(A.h1,{initial:{y:-30,opacity:0},animate:{y:0,opacity:1},transition:{delay:.3},children:"Programmes Designed Around Outcomes, Not Course Catalogs."}),a.jsx(A.p,{initial:{y:-20,opacity:0},animate:{y:0,opacity:1},transition:{delay:.4},children:"Every Elevox pathway includes duration, fees, format, certification, eligibility, career routes, projects, and proof you can show."})]}),a.jsx("section",{className:"programme-grid",children:pf.map((n,r)=>a.jsx(A.div,{initial:{y:50,opacity:0},animate:{y:0,opacity:1},transition:{delay:r*.1,duration:.5},children:a.jsxs(pe,{to:`/programmes/${n.slug}`,className:"programme-card",children:[a.jsx(A.span,{initial:{x:-10,opacity:0},animate:{x:0,opacity:1},transition:{delay:r*.1+.2},children:n.category}),a.jsx(A.h2,{initial:{x:-10,opacity:0},animate:{x:0,opacity:1},transition:{delay:r*.1+.3},children:n.title}),a.jsx(A.p,{initial:{x:-10,opacity:0},animate:{x:0,opacity:1},transition:{delay:r*.1+.4},children:n.summary}),a.jsxs(A.div,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{delay:r*.1+.5},children:[a.jsx(A.small,{whileHover:{scale:1.05},children:n.duration}),a.jsx(A.small,{whileHover:{scale:1.05},children:n.fees}),a.jsx(A.small,{whileHover:{scale:1.05},children:n.format})]}),a.jsx(A.strong,{initial:{x:-10,opacity:0},animate:{x:0,opacity:1},transition:{delay:r*.1+.6},whileHover:{x:5},children:"View details →"})]})},n.slug))})]})}const B0=`
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .programme-page {
    min-height: 100vh;
    padding-top: 72px;
    background: #020808;
    color: #f0f2f5;
    font-family: Inter, system-ui, sans-serif;
    position: relative;
    overflow-x: hidden;
  }

  .programme-hero,
  .programme-detail-hero {
    position: relative;
    max-width: 1180px;
    margin: 0 auto;
    padding: 76px 24px 54px;
    z-index: 1;
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
    animation: pulse 4s ease-in-out infinite;
  }

  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 0.5; }
    50% { transform: scale(1.1); opacity: 1; }
  }

  .eyebrow {
    color: #00d4a8;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    margin: 0 0 18px;
    position: relative;
    z-index: 1;
  }

  .programme-hero h1,
  .programme-detail-hero h1 {
    max-width: 850px;
    margin: 0 0 22px;
    font-family: "Space Grotesk", Inter, sans-serif;
    font-size: clamp(42px, 7vw, 78px);
    line-height: 0.98;
    letter-spacing: 0;
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #f0f2f5 0%, #00d4a8 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .programme-hero p,
  .programme-detail-hero p {
    max-width: 680px;
    color: rgba(240, 242, 245, 0.64);
    font-size: 18px;
    line-height: 1.65;
    position: relative;
    z-index: 1;
  }

  .programme-grid {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 24px 92px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 18px;
    position: relative;
    z-index: 1;
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
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .programme-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 212, 168, 0.05), transparent);
    transition: left 0.5s ease;
  }

  .programme-card:hover::before {
    left: 100%;
  }

  .programme-card:hover {
    transform: translateY(-6px) scale(1.02);
    border-color: rgba(0, 212, 168, 0.42);
    background: rgba(0, 212, 168, 0.055);
    box-shadow: 0 10px 40px rgba(0, 212, 168, 0.1);
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
    transition: color 0.3s ease;
  }

  .programme-card:hover h2 {
    color: #00d4a8;
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
    transition: all 0.3s ease;
    cursor: default;
  }

  .pill-grid span:hover {
    background: rgba(0, 212, 168, 0.15);
    border-color: rgba(0, 212, 168, 0.3);
    transform: scale(1.05);
  }

  .programme-card strong,
  .back-link {
    color: #00d4a8;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  .programme-card strong:hover {
    color: #8fefd5;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 28px;
    font-weight: 800;
    position: relative;
    z-index: 1;
  }

  .back-link:hover {
    color: #8fefd5;
  }

  .meta-grid {
    margin-top: 28px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 10px;
    position: relative;
    z-index: 1;
  }

  .meta-grid span {
    display: flex;
    flex-direction: column;
    gap: 5px;
    transition: all 0.3s ease;
    cursor: default;
  }

  .meta-grid span:hover {
    background: rgba(0, 212, 168, 0.1);
    border-color: rgba(0, 212, 168, 0.3);
    transform: translateY(-2px);
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
    position: relative;
    z-index: 1;
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
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
  }

  .detail-block:hover {
    border-color: rgba(0, 212, 168, 0.2);
    box-shadow: 0 5px 30px rgba(0, 212, 168, 0.05);
  }

  .detail-block h2,
  .detail-side h2,
  .faq-section h2 {
    margin: 0 0 16px;
    font-family: "Space Grotesk", Inter, sans-serif;
    color: #8fefd5;
    position: relative;
    z-index: 1;
  }

  .pill-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    position: relative;
    z-index: 1;
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

  .detail-side li {
    margin: 6px 0;
    transition: all 0.3s ease;
  }

  .detail-side li:hover {
    color: #8fefd5;
    transform: translateX(5px);
  }

  .apply-link {
    display: block;
    margin-top: 22px;
    padding: 14px 18px;
    border-radius: 10px;
    background: linear-gradient(135deg, #00d4a8, #008f7a);
    color: #031a14;
    text-align: center;
    text-decoration: none;
    font-weight: 900;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .apply-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
  }

  .apply-link:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 20px rgba(0, 212, 168, 0.3);
  }

  .apply-link:hover::before {
    left: 100%;
  }

  .faq-section {
    max-width: 1180px;
    margin: 0 auto 90px;
    position: relative;
    z-index: 1;
  }

  .faq-section details {
    border-top: 1px solid rgba(143, 239, 213, 0.1);
    padding: 16px 0;
    transition: all 0.3s ease;
  }

  .faq-section details:hover {
    border-color: rgba(0, 212, 168, 0.3);
  }

  .faq-section summary {
    cursor: pointer;
    font-weight: 800;
    transition: color 0.3s ease;
  }

  .faq-section summary:hover {
    color: #00d4a8;
  }

  @media (max-width: 860px) {
    .detail-layout { 
      grid-template-columns: 1fr; 
    }
    .detail-side { 
      position: static; 
    }
    .programme-hero::after,
    .programme-detail-hero::after {
      width: 200px;
      height: 200px;
      right: 2%;
    }
  }
`,hf=[dw,Xm,Ym,Qm];function mf({eyebrow:e,title:t,summary:n,focus:r=[]}){return a.jsxs("main",{className:"elx-route-page",children:[a.jsx("style",{children:iC}),a.jsxs("section",{className:"elx-route-hero",children:[a.jsx("div",{className:"elx-route-grid","aria-hidden":"true"}),a.jsx("div",{className:"elx-route-orbit","aria-hidden":"true"}),a.jsxs("div",{className:"elx-route-content",children:[a.jsx("p",{className:"elx-route-eyebrow",children:e}),a.jsx("h1",{children:t}),a.jsx("p",{className:"elx-route-summary",children:n}),a.jsxs("div",{className:"elx-route-proof","aria-label":"Elevox positioning",children:[a.jsx("span",{children:"Industry experience"}),a.jsx("span",{children:"AI urgency"}),a.jsx("span",{children:"Employability bridge"})]}),a.jsxs("div",{className:"elx-route-actions",children:[a.jsxs("a",{href:"/admissions",className:"elx-route-primary",children:["Map my pathway ",a.jsx(xo,{size:16})]}),a.jsx("a",{href:"/leadership",className:"elx-route-secondary",children:"Meet the founders"})]})]})]}),a.jsx("section",{className:"elx-route-focus","aria-label":"Page focus areas",children:r.map((i,o)=>{const s=hf[o%hf.length];return a.jsxs("article",{className:"elx-focus-card",children:[a.jsx(s,{size:22}),a.jsx("h2",{children:i}),a.jsx("p",{children:"Built around transformation, proof, and practical AI fluency."})]},i)})})]})}const iC=`
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
`,gf=()=>{const e=[{icon:"📚",title:"All Programmes",description:"Browse programmes by domain and level. Find the perfect fit for your career goals.",link:"/programmes",linkText:"View All →"},{icon:"📅",title:"Batch Calendar",description:"Check upcoming cohort dates and plan your learning journey.",link:"/admissions",linkText:"See Cohorts →"},{icon:"🎯",title:"Career Accelerator",description:"Resume building, LinkedIn optimization, and interview preparation.",link:"/career",linkText:"Get Started →"},{icon:"💼",title:"Placement Outcomes",description:"See where our alumni are working and how Elevox changed their careers.",link:"/career/outcomes",linkText:"View Outcomes →"},{icon:"🏆",title:"Workshops & Events",description:"Masterclasses, bootcamps, and networking events to accelerate your learning.",link:"/workshops",linkText:"Explore Events →"},{icon:"🎓",title:"Student Success Stories",description:"Read inspiring stories from students who transformed their careers with Elevox.",link:"/insights/stories",linkText:"Read Stories →"}],t=[{name:"Rahul Sharma",role:"AI Engineer at Google",quote:"Elevox gave me the skills and confidence to transition from a non-tech background to AI engineering.",image:"👨‍💻"},{name:"Priya Patel",role:"Data Scientist at Microsoft",quote:"The hands-on projects and industry mentorship at Elevox were game-changing for my career.",image:"👩‍💻"},{name:"Amit Kumar",role:"ML Engineer at Amazon",quote:"I went from knowing nothing about AI to building production-ready models in just 3 months.",image:"🧑‍💻"}];return a.jsxs("div",{style:oC,children:[a.jsx("section",{style:sC,children:a.jsxs("div",{style:aC,children:[a.jsxs("h1",{style:lC,children:["For ",a.jsx("span",{style:cC,children:"Students"})]}),a.jsx("p",{style:uC,children:"Your journey to AI expertise starts here. Learn, build, and get placed in top companies."}),a.jsxs("div",{style:dC,children:[a.jsx("a",{href:"/programmes",style:pC,children:"Explore Programmes →"}),a.jsx("a",{href:"/admissions",style:fC,children:"Apply Now"})]})]})}),a.jsx("section",{style:hC,children:a.jsxs("div",{style:mC,children:[a.jsxs("div",{style:qi,children:[a.jsx("div",{style:Zi,children:"500+"}),a.jsx("div",{style:Ji,children:"Students Trained"})]}),a.jsxs("div",{style:qi,children:[a.jsx("div",{style:Zi,children:"95%"}),a.jsx("div",{style:Ji,children:"Placement Rate"})]}),a.jsxs("div",{style:qi,children:[a.jsx("div",{style:Zi,children:"₹12L"}),a.jsx("div",{style:Ji,children:"Average Package"})]}),a.jsxs("div",{style:qi,children:[a.jsx("div",{style:Zi,children:"100+"}),a.jsx("div",{style:Ji,children:"Hiring Partners"})]})]})}),a.jsxs("section",{style:gC,children:[a.jsx("h2",{style:yf,children:"Everything You Need to Succeed"}),a.jsx("p",{style:xf,children:"Comprehensive support for your AI learning journey"}),a.jsx("div",{style:yC,children:e.map((n,r)=>a.jsxs("div",{style:xC,children:[a.jsx("div",{style:vC,children:n.icon}),a.jsx("h3",{style:wC,children:n.title}),a.jsx("p",{style:bC,children:n.description}),a.jsx("a",{href:n.link,style:kC,children:n.linkText})]},r))})]}),a.jsxs("section",{style:SC,children:[a.jsx("h2",{style:yf,children:"Student Success Stories"}),a.jsx("p",{style:xf,children:"Real stories from students who transformed their careers"}),a.jsx("div",{style:CC,children:t.map((n,r)=>a.jsxs("div",{style:jC,children:[a.jsx("div",{style:_C,children:n.image}),a.jsxs("p",{style:AC,children:['"',n.quote,'"']}),a.jsx("div",{style:TC,children:n.name}),a.jsx("div",{style:EC,children:n.role})]},r))})]}),a.jsx("section",{style:PC,children:a.jsxs("div",{style:IC,children:[a.jsx("h2",{style:NC,children:"Ready to Start Your AI Journey?"}),a.jsx("p",{style:RC,children:"Join a cohort built around employability — not just learning. Your AI career starts here."}),a.jsxs("div",{style:MC,children:[a.jsx("a",{href:"/admissions",style:LC,children:"Apply Now →"}),a.jsx("a",{href:"/tour",style:zC,children:"Take a Tour"})]})]})}),a.jsx("section",{style:DC,children:a.jsxs("div",{style:VC,children:[a.jsx("h2",{style:FC,children:"Student Resources"}),a.jsxs("div",{style:BC,children:[a.jsxs("div",{style:eo,children:[a.jsx("span",{style:to,children:"📖"}),a.jsx("h4",{style:no,children:"Student Handbook"}),a.jsx("p",{style:ro,children:"Everything you need to know about your learning journey"}),a.jsx("a",{href:"#",style:io,children:"Download →"})]}),a.jsxs("div",{style:eo,children:[a.jsx("span",{style:to,children:"💻"}),a.jsx("h4",{style:no,children:"Learning Portal"}),a.jsx("p",{style:ro,children:"Access your courses, assignments, and learning materials"}),a.jsx("a",{href:"#",style:io,children:"Access Portal →"})]}),a.jsxs("div",{style:eo,children:[a.jsx("span",{style:to,children:"🤝"}),a.jsx("h4",{style:no,children:"Community Forum"}),a.jsx("p",{style:ro,children:"Connect with peers, ask questions, and collaborate"}),a.jsx("a",{href:"#",style:io,children:"Join Community →"})]}),a.jsxs("div",{style:eo,children:[a.jsx("span",{style:to,children:"🎓"}),a.jsx("h4",{style:no,children:"Alumni Network"}),a.jsx("p",{style:ro,children:"Connect with successful alumni for mentorship and opportunities"}),a.jsx("a",{href:"#",style:io,children:"Connect →"})]})]})]})})]})},oC={minHeight:"100vh",backgroundColor:"#08090d",paddingTop:"72px"},sC={padding:"60px 24px",textAlign:"center",background:"linear-gradient(180deg, rgba(0,212,168,0.03) 0%, transparent 100%)"},aC={maxWidth:"800px",margin:"0 auto"},lC={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(2.5rem, 6vw, 4rem)",fontWeight:700,color:"#f0f2f5",marginBottom:"16px",lineHeight:"1.1"},cC={color:"#00d4a8"},uC={fontSize:"clamp(1rem, 1.5vw, 1.2rem)",color:"rgba(240,242,245,0.6)",maxWidth:"600px",margin:"0 auto 32px",lineHeight:"1.6"},dC={display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},pC={display:"inline-block",padding:"12px 32px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},fC={display:"inline-block",padding:"12px 32px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",color:"#f0f2f5",fontWeight:500,textDecoration:"none",fontSize:"15px",transition:"all 0.2s"},hC={padding:"40px 24px 60px",maxWidth:"1024px",margin:"0 auto"},mC={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"16px"},qi={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",padding:"24px",textAlign:"center",border:"1px solid rgba(255,255,255,0.06)"},Zi={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.8rem)",fontWeight:700,color:"#00d4a8",marginBottom:"4px"},Ji={fontSize:"14px",color:"rgba(240,242,245,0.5)"},gC={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},yf={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"8px",textAlign:"center"},xf={fontSize:"16px",color:"rgba(240,242,245,0.5)",textAlign:"center",marginBottom:"32px"},yC={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px"},xC={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)",transition:"all 0.2s"},vC={fontSize:"36px",marginBottom:"12px"},wC={fontSize:"18px",fontWeight:600,color:"#f0f2f5",marginBottom:"8px"},bC={fontSize:"14px",color:"rgba(240,242,245,0.6)",lineHeight:"1.6",marginBottom:"12px"},kC={color:"#00d4a8",textDecoration:"none",fontWeight:500,fontSize:"14px"},SC={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},CC={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"24px"},jC={backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"16px",padding:"28px",border:"1px solid rgba(255,255,255,0.06)",textAlign:"center"},_C={fontSize:"48px",marginBottom:"12px"},AC={fontSize:"16px",color:"rgba(240,242,245,0.7)",lineHeight:"1.6",marginBottom:"16px",fontStyle:"italic"},TC={fontSize:"16px",fontWeight:600,color:"#f0f2f5",marginBottom:"4px"},EC={fontSize:"13px",color:"rgba(240,242,245,0.4)"},PC={padding:"60px 24px",background:"linear-gradient(180deg, transparent 0%, rgba(0,212,168,0.03) 100%)"},IC={maxWidth:"700px",margin:"0 auto",textAlign:"center"},NC={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.8rem, 3vw, 2.5rem)",color:"#f0f2f5",marginBottom:"12px"},RC={fontSize:"16px",color:"rgba(240,242,245,0.6)",marginBottom:"24px"},MC={display:"flex",gap:"12px",justifyContent:"center",flexWrap:"wrap"},LC={display:"inline-block",padding:"14px 36px",borderRadius:"10px",backgroundColor:"#00d4a8",color:"#031a14",fontWeight:600,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},zC={display:"inline-block",padding:"14px 36px",borderRadius:"10px",border:"1px solid rgba(255,255,255,0.1)",color:"#f0f2f5",fontWeight:500,textDecoration:"none",fontSize:"16px",transition:"all 0.2s"},DC={padding:"60px 24px",maxWidth:"1024px",margin:"0 auto"},VC={backgroundColor:"rgba(255,255,255,0.02)",borderRadius:"16px",padding:"40px",border:"1px solid rgba(255,255,255,0.06)"},FC={fontFamily:"'Space Grotesk', sans-serif",fontSize:"clamp(1.5rem, 2.5vw, 2rem)",color:"#f0f2f5",marginBottom:"24px",textAlign:"center"},BC={display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"},eo={textAlign:"center",padding:"20px",backgroundColor:"rgba(255,255,255,0.03)",borderRadius:"12px",border:"1px solid rgba(255,255,255,0.06)"},to={fontSize:"28px",display:"block",marginBottom:"8px"},no={fontSize:"15px",fontWeight:600,color:"#f0f2f5",marginBottom:"4px"},ro={fontSize:"12px",color:"rgba(240,242,245,0.4)",marginBottom:"8px"},io={color:"#00d4a8",textDecoration:"none",fontSize:"13px",fontWeight:500};function OC(){return a.jsx(lt,{eyebrow:"Academy tour",title:"A highly visual experience.",summary:"This is where trust gets built. Explore our state-of-the-art learning environment through immersive visuals and interactive experiences.",primaryCta:["Schedule a visit","/contact"],secondaryCta:["Explore admissions","/admissions"],proof:["Classroom showcase","Lab facilities","Learning spaces","Student areas","Videos","Photo gallery","Future expansion plans"],sections:[{eyebrow:"Spaces",title:"Every space communicates premium, practical AI learning.",copy:"After completion of the office setup, our facilities will showcase the pinnacle of modern education technology.",items:[{icon:"book",label:"Classrooms",title:"Classroom showcase",copy:"Tech-enabled rooms for mentor-led sessions, discussions, and interactive learning experiences.",points:["Live instruction with AI integration","Interactive smart boards","Recording-ready sessions","Flexible seating arrangements"]},{icon:"spark",label:"Labs",title:"Lab facilities",copy:"Hands-on spaces where learners build AI workflows, applications, and real-world projects.",points:["High-performance computing stations","AI/ML development tools","Collaborative project areas","Expert mentor supervision"]},{icon:"users",label:"Learning",title:"Learning spaces",copy:"Dedicated collaboration zones designed for team projects, peer learning, and portfolio development.",points:["Breakout meeting areas","Interactive whiteboards","Presentation practice zones","Quiet study corners"]},{icon:"graduation",label:"Students",title:"Student areas",copy:"Comfortable, inspiring spaces that support focused work, counseling, and community building.",points:["Modern study zones","Counselling and guidance desk","Student lounge areas","Community event spaces"]},{icon:"play",label:"Media",title:"Videos and photo gallery",copy:"Engaging visual content featuring founder insights, course previews, campus life, and facility walkthroughs.",points:["Founder introduction videos","Course and program previews","Classroom moments captured","Facility walkthroughs"]},{icon:"target",label:"Future",title:"Future expansion plans",copy:"A transparent roadmap for future growth after the initial office setup completion.",points:["New AI research labs","Larger cohort capacities","Partner collaboration spaces","Extended campus development"]}]}],finalCta:{eyebrow:"Visit CTA",title:"Trust is easier when people can see the space.",copy:"Invite prospects, parents, colleges, and companies to schedule a visit or request a virtual walkthrough of our premium facilities.",label:"Schedule campus visit",to:"/contact"}})}function vf(){return a.jsx(lt,{eyebrow:"Why every industry needs AI",title:"AI is no longer an IT skill. It is a business skill.",summary:"This page positions Elevox as an authority builder by showing how AI changes healthcare, manufacturing, banking, HR, marketing, retail, education, logistics, and pharma.",primaryCta:["Find my industry pathway","/programmes"],secondaryCta:["Bring AI to my team","/corporate"],proof:["SEO authority hub","Industry-specific AI","Business skill positioning"],sections:[{eyebrow:"Industries",title:"Where AI is creating leverage now.",copy:"Each industry section can expand into dedicated SEO pages as the content library grows.",items:[{icon:"spark",label:"Healthcare",title:"AI in Healthcare",copy:"Diagnosis support, patient operations, documentation, triage, and care coordination."},{icon:"building",label:"Manufacturing",title:"AI in Manufacturing",copy:"Quality inspection, predictive maintenance, safety monitoring, and supply-chain intelligence."},{icon:"chart",label:"Finance",title:"AI in Banking",copy:"Fraud detection, risk analysis, customer intelligence, reporting, and compliance workflows."},{icon:"users",label:"People",title:"AI in HR",copy:"Recruitment support, workforce planning, onboarding, people analytics, and employee experience."},{icon:"target",label:"Growth",title:"AI in Marketing",copy:"Customer segmentation, content systems, campaign testing, personalization, and sales enablement."},{icon:"briefcase",label:"Retail",title:"AI in Retail",copy:"Demand planning, inventory insights, customer service, merchandising, and store operations."},{icon:"graduation",label:"Education",title:"AI in Education",copy:"Personalized learning, assessment support, tutoring systems, and institutional operations."},{icon:"network",label:"Logistics",title:"AI in Logistics",copy:"Routing, fleet planning, exception management, forecasting, and warehouse intelligence."},{icon:"badge",label:"Pharma",title:"AI in Pharma",copy:"Research workflows, compliance support, documentation, market analysis, and trial operations."}]}],finalCta:{eyebrow:"Industry CTA",title:"The question is not whether AI matters. It is where it matters first.",copy:"Elevox helps learners and organisations identify the practical workflows where AI creates value.",label:"Explore AI programmes",to:"/programmes"}})}function wf(){return a.jsx(lt,{eyebrow:"Workshops and events",title:"Lead-generation sessions that let people experience Elevox before a full programme.",summary:"Workshops, masterclasses, bootcamps, webinars, and open house events give students, professionals, colleges, and teams a practical first step into AI.",primaryCta:["Register interest","/contact"],secondaryCta:["Custom workshop","/corporate/workshops"],proof:["Masterclasses","Bootcamps","Open house events"],sections:[{eyebrow:"Event types",title:"Short formats for fast trust building.",copy:"Each event should feel hands-on and outcome-focused, not like a generic lecture.",items:[{icon:"spark",label:"Students",title:"AI Career Launchpad",copy:"A practical introduction to AI careers, portfolios, and employability signals.",points:["Career roadmap","Project ideas","Q&A"]},{icon:"briefcase",label:"Professionals",title:"AI for Managers",copy:"A business-focused session on AI workflows, decision support, and productivity.",points:["Workflow examples","Prompt systems","Risk awareness"]},{icon:"book",label:"Builders",title:"Build With Agents",copy:"A hands-on workshop for developers and product builders exploring AI agents.",points:["Agent concepts","Prototype lab","Use-case design"]},{icon:"building",label:"Campuses",title:"AI Awareness Session",copy:"A high-impact campus session for colleges that want to introduce AI at scale.",points:["Industry context","Skill roadmap","Placement relevance"]},{icon:"users",label:"Teams",title:"Corporate AI Sprint",copy:"A custom workshop for teams to identify and prototype AI workflow opportunities.",points:["Readiness scan","Workflow mapping","Pilot ideas"]},{icon:"play",label:"Open house",title:"Academy preview",copy:"A visit or live preview for prospects to meet mentors and understand the pathway.",points:["Tour","Founder talk","Admissions guidance"]}]}],finalCta:{eyebrow:"Workshop CTA",title:"Use a workshop as the first step into the Elevox ecosystem.",copy:"Register for an upcoming event or request a custom session for your campus or organisation.",label:"Register interest",to:"/contact"}})}function WC(){return a.jsxs(a.Fragment,{children:[a.jsx(b1,{}),a.jsxs(l1,{children:[a.jsx(F,{path:"/",element:a.jsx(q1,{})}),a.jsx(F,{path:"/about",element:a.jsx(ca,{})}),a.jsx(F,{path:"/about/:topic",element:a.jsx(ca,{})}),a.jsx(F,{path:"/aboutus",element:a.jsx(ca,{})}),a.jsx(F,{path:"/leadership",element:a.jsx(W4,{})}),a.jsx(F,{path:"/founders",element:a.jsx(H5,{})}),a.jsx(F,{path:"/tour",element:a.jsx(OC,{})}),a.jsx(F,{path:"/programmes",element:a.jsx(ff,{})}),a.jsx(F,{path:"/programmes/:track",element:a.jsx(ff,{})}),a.jsx(F,{path:"/courses",element:a.jsx(Mw,{})}),a.jsx(F,{path:"/students",element:a.jsx(gf,{})}),a.jsx(F,{path:"/students/:topic",element:a.jsx(gf,{})}),a.jsx(F,{path:"/career",element:a.jsx(Ud,{})}),a.jsx(F,{path:"/career/:topic",element:a.jsx(Ud,{})}),a.jsx(F,{path:"/business",element:a.jsx(Nw,{})}),a.jsx(F,{path:"/corporate",element:a.jsx(Hd,{})}),a.jsx(F,{path:"/corporate/:topic",element:a.jsx(Hd,{})}),a.jsx(F,{path:"/colleges",element:a.jsx($d,{})}),a.jsx(F,{path:"/colleges/:topic",element:a.jsx($d,{})}),a.jsx(F,{path:"/why-ai",element:a.jsx(vf,{})}),a.jsx(F,{path:"/why-ai/:industry",element:a.jsx(vf,{})}),a.jsx(F,{path:"/insights",element:a.jsx(df,{})}),a.jsx(F,{path:"/insights/:type",element:a.jsx(df,{})}),a.jsx(F,{path:"/admissions",element:a.jsx(Wd,{})}),a.jsx(F,{path:"/admissions/:topic",element:a.jsx(Wd,{})}),a.jsx(F,{path:"/workshops",element:a.jsx(wf,{})}),a.jsx(F,{path:"/workshops/:topic",element:a.jsx(wf,{})}),a.jsx(F,{path:"/contact",element:a.jsx(Rw,{})}),a.jsx(F,{path:"/privacy",element:a.jsx(mf,{eyebrow:"Privacy",title:"Privacy policy",summary:"Elevox treats learner, partner, and visitor data with care. This page is prepared for the final policy copy.",focus:["Data clarity","Consent","Security","Learner trust"]})}),a.jsx(F,{path:"/terms",element:a.jsx(mf,{eyebrow:"Terms",title:"Terms of service",summary:"The operating terms for programmes, workshops, admissions, and partner engagements will live here.",focus:["Programmes","Payments","Partnerships","Support"]})}),a.jsx(F,{path:"*",element:a.jsx($4,{})})]}),a.jsx(R1,{}),a.jsx(S1,{})]})}_a.createRoot(document.getElementById("root")).render(a.jsx(ur.StrictMode,{children:a.jsx(m1,{children:a.jsx(WC,{})})}));
