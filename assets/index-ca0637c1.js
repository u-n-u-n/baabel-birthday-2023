(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var g0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function im(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var sm={exports:{}},Pl={},om={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=Symbol.for("react.element"),y0=Symbol.for("react.portal"),_0=Symbol.for("react.fragment"),v0=Symbol.for("react.strict_mode"),w0=Symbol.for("react.profiler"),E0=Symbol.for("react.provider"),C0=Symbol.for("react.context"),S0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),I0=Symbol.for("react.memo"),k0=Symbol.for("react.lazy"),Nf=Symbol.iterator;function T0(e){return e===null||typeof e!="object"?null:(e=Nf&&e[Nf]||e["@@iterator"],typeof e=="function"?e:null)}var lm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},am=Object.assign,um={};function Ci(e,t,n){this.props=e,this.context=t,this.refs=um,this.updater=n||lm}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function cm(){}cm.prototype=Ci.prototype;function Dc(e,t,n){this.props=e,this.context=t,this.refs=um,this.updater=n||lm}var Oc=Dc.prototype=new cm;Oc.constructor=Dc;am(Oc,Ci.prototype);Oc.isPureReactComponent=!0;var Rf=Array.isArray,dm=Object.prototype.hasOwnProperty,Mc={current:null},fm={key:!0,ref:!0,__self:!0,__source:!0};function hm(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)dm.call(t,r)&&!fm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$s,type:e,key:s,ref:o,props:i,_owner:Mc.current}}function N0(e,t){return{$$typeof:$s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Lc(e){return typeof e=="object"&&e!==null&&e.$$typeof===$s}function R0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Pf=/\/+/g;function ha(e,t){return typeof e=="object"&&e!==null&&e.key!=null?R0(""+e.key):t.toString(36)}function Eo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $s:case y0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ha(o,0):r,Rf(i)?(n="",e!=null&&(n=e.replace(Pf,"$&/")+"/"),Eo(i,t,n,"",function(u){return u})):i!=null&&(Lc(i)&&(i=N0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Rf(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+ha(s,l);o+=Eo(s,t,n,a,i)}else if(a=T0(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+ha(s,l++),o+=Eo(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Xs(e,t,n){if(e==null)return e;var r=[],i=0;return Eo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function P0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Co={transition:null},b0={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Co,ReactCurrentOwner:Mc};j.Children={map:Xs,forEach:function(e,t,n){Xs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xs(e,function(){t++}),t},toArray:function(e){return Xs(e,function(t){return t})||[]},only:function(e){if(!Lc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Ci;j.Fragment=_0;j.Profiler=w0;j.PureComponent=Dc;j.StrictMode=v0;j.Suspense=x0;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=am({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Mc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)dm.call(t,a)&&!fm.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:$s,type:e.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:C0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:E0,_context:e},e.Consumer=e};j.createElement=hm;j.createFactory=function(e){var t=hm.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:S0,render:e}};j.isValidElement=Lc;j.lazy=function(e){return{$$typeof:k0,_payload:{_status:-1,_result:e},_init:P0}};j.memo=function(e,t){return{$$typeof:I0,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Co.transition;Co.transition={};try{e()}finally{Co.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return ze.current.useCallback(e,t)};j.useContext=function(e){return ze.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};j.useEffect=function(e,t){return ze.current.useEffect(e,t)};j.useId=function(){return ze.current.useId()};j.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ze.current.useMemo(e,t)};j.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};j.useRef=function(e){return ze.current.useRef(e)};j.useState=function(e){return ze.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return ze.current.useTransition()};j.version="18.2.0";om.exports=j;var he=om.exports;const Bt=im(he);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A0=he,D0=Symbol.for("react.element"),O0=Symbol.for("react.fragment"),M0=Object.prototype.hasOwnProperty,L0=A0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,F0={key:!0,ref:!0,__self:!0,__source:!0};function pm(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)M0.call(t,r)&&!F0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:D0,type:e,key:s,ref:o,props:i,_owner:L0.current}}Pl.Fragment=O0;Pl.jsx=pm;Pl.jsxs=pm;sm.exports=Pl;var I=sm.exports,au={},mm={exports:{}},at={},gm={exports:{}},ym={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var b=T.length;T.push(D);e:for(;0<b;){var V=b-1>>>1,K=T[V];if(0<i(K,D))T[V]=D,T[b]=K,b=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],b=T.pop();if(b!==D){T[0]=b;e:for(var V=0,K=T.length,be=K>>>1;V<be;){var ct=2*(V+1)-1,Vt=T[ct],$e=ct+1,tt=T[$e];if(0>i(Vt,b))$e<K&&0>i(tt,Vt)?(T[V]=tt,T[$e]=b,V=$e):(T[V]=Vt,T[ct]=b,V=ct);else if($e<K&&0>i(tt,b))T[V]=tt,T[$e]=b,V=$e;else break e}}return D}function i(T,D){var b=T.sortIndex-D.sortIndex;return b!==0?b:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],f=1,c=null,d=3,h=!1,y=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,t(a,D);else break;D=n(u)}}function v(T){if(_=!1,g(T),!y)if(n(a)!==null)y=!0,Et(E);else{var D=n(u);D!==null&&Pe(v,D.startTime-T)}}function E(T,D){y=!1,_&&(_=!1,m(N),N=-1),h=!0;var b=d;try{for(g(D),c=n(a);c!==null&&(!(c.expirationTime>D)||T&&!ye());){var V=c.callback;if(typeof V=="function"){c.callback=null,d=c.priorityLevel;var K=V(c.expirationTime<=D);D=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(a)&&r(a),g(D)}else r(a);c=n(a)}if(c!==null)var be=!0;else{var ct=n(u);ct!==null&&Pe(v,ct.startTime-D),be=!1}return be}finally{c=null,d=b,h=!1}}var S=!1,w=null,N=-1,z=5,O=-1;function ye(){return!(e.unstable_now()-O<z)}function Ht(){if(w!==null){var T=e.unstable_now();O=T;var D=!0;try{D=w(!0,T)}finally{D?re():(S=!1,w=null)}}else S=!1}var re;if(typeof p=="function")re=function(){p(Ht)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ue=_e.port2;_e.port1.onmessage=Ht,re=function(){Ue.postMessage(null)}}else re=function(){k(Ht,0)};function Et(T){w=T,S||(S=!0,re())}function Pe(T,D){N=k(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,Et(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(d){case 1:case 2:case 3:var D=3;break;default:D=d}var b=d;d=D;try{return T()}finally{d=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var b=d;d=T;try{return D()}finally{d=b}},e.unstable_scheduleCallback=function(T,D,b){var V=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?V+b:V):b=V,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=b+K,T={id:f++,callback:D,priorityLevel:T,startTime:b,expirationTime:K,sortIndex:-1},b>V?(T.sortIndex=b,t(u,T),n(a)===null&&T===n(u)&&(_?(m(N),N=-1):_=!0,Pe(v,b-V))):(T.sortIndex=K,t(a,T),y||h||(y=!0,Et(E))),T},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(T){var D=d;return function(){var b=d;d=D;try{return T.apply(this,arguments)}finally{d=b}}}})(ym);gm.exports=ym;var $0=gm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _m=he,lt=$0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vm=new Set,ds={};function Er(e,t){ii(e,t),ii(e+"Capture",t)}function ii(e,t){for(ds[e]=t,e=0;e<t.length;e++)vm.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=Object.prototype.hasOwnProperty,B0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bf={},Af={};function j0(e){return uu.call(Af,e)?!0:uu.call(bf,e)?!1:B0.test(e)?Af[e]=!0:(bf[e]=!0,!1)}function z0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function W0(e,t,n,r){if(t===null||typeof t>"u"||z0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Fc=/[\-:]([a-z])/g;function $c(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Fc,$c);Re[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Fc,$c);Re[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Fc,$c);Re[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function Bc(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(W0(t,n,i,r)&&(n=null),r||i===null?j0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=_m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),jc=Symbol.for("react.strict_mode"),cu=Symbol.for("react.profiler"),wm=Symbol.for("react.provider"),Em=Symbol.for("react.context"),zc=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),fu=Symbol.for("react.suspense_list"),Wc=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Cm=Symbol.for("react.offscreen"),Df=Symbol.iterator;function bi(e){return e===null||typeof e!="object"?null:(e=Df&&e[Df]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,pa;function Hi(e){if(pa===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);pa=t&&t[1]||""}return`
`+pa+e}var ma=!1;function ga(e,t){if(!e||ma)return"";ma=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{ma=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hi(e):""}function U0(e){switch(e.tag){case 5:return Hi(e.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 2:case 15:return e=ga(e.type,!1),e;case 11:return e=ga(e.type.render,!1),e;case 1:return e=ga(e.type,!0),e;default:return""}}function hu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case Ar:return"Portal";case cu:return"Profiler";case jc:return"StrictMode";case du:return"Suspense";case fu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Em:return(e.displayName||"Context")+".Consumer";case wm:return(e._context.displayName||"Context")+".Provider";case zc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Wc:return t=e.displayName||null,t!==null?t:hu(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return hu(e(t))}catch{}}return null}function H0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return hu(t);case 8:return t===jc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function V0(e){var t=Sm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zs(e){e._valueTracker||(e._valueTracker=V0(e))}function xm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pu(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Of(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Im(e,t){t=t.checked,t!=null&&Bc(e,"checked",t,!1)}function mu(e,t){Im(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?gu(e,t.type,n):t.hasOwnProperty("defaultValue")&&gu(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Mf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function gu(e,t,n){(t!=="number"||Fo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vi=Array.isArray;function Qr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function yu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Lf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Vi(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function km(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ff(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Tm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function _u(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Tm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,Nm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},G0=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){G0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function Rm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function Pm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Rm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Q0=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vu(e,t){if(t){if(Q0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function wu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Eu=null;function Uc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cu=null,Kr=null,Yr=null;function $f(e){if(e=zs(e)){if(typeof Cu!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Ml(t),Cu(e.stateNode,e.type,t))}}function bm(e){Kr?Yr?Yr.push(e):Yr=[e]:Kr=e}function Am(){if(Kr){var e=Kr,t=Yr;if(Yr=Kr=null,$f(e),t)for(e=0;e<t.length;e++)$f(t[e])}}function Dm(e,t){return e(t)}function Om(){}var ya=!1;function Mm(e,t,n){if(ya)return e(t,n);ya=!0;try{return Dm(e,t,n)}finally{ya=!1,(Kr!==null||Yr!==null)&&(Om(),Am())}}function hs(e,t){var n=e.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Su=!1;if(tn)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){Su=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{Su=!1}function K0(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var qi=!1,$o=null,Bo=!1,xu=null,Y0={onError:function(e){qi=!0,$o=e}};function q0(e,t,n,r,i,s,o,l,a){qi=!1,$o=null,K0.apply(Y0,arguments)}function X0(e,t,n,r,i,s,o,l,a){if(q0.apply(this,arguments),qi){if(qi){var u=$o;qi=!1,$o=null}else throw Error(C(198));Bo||(Bo=!0,xu=u)}}function Cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Lm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Bf(e){if(Cr(e)!==e)throw Error(C(188))}function J0(e){var t=e.alternate;if(!t){if(t=Cr(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bf(i),e;if(s===r)return Bf(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Fm(e){return e=J0(e),e!==null?$m(e):null}function $m(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=$m(e);if(t!==null)return t;e=e.sibling}return null}var Bm=lt.unstable_scheduleCallback,jf=lt.unstable_cancelCallback,Z0=lt.unstable_shouldYield,e1=lt.unstable_requestPaint,ue=lt.unstable_now,t1=lt.unstable_getCurrentPriorityLevel,Hc=lt.unstable_ImmediatePriority,jm=lt.unstable_UserBlockingPriority,jo=lt.unstable_NormalPriority,n1=lt.unstable_LowPriority,zm=lt.unstable_IdlePriority,bl=null,zt=null;function r1(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(bl,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:o1,i1=Math.log,s1=Math.LN2;function o1(e){return e>>>=0,e===0?32:31-(i1(e)/s1|0)|0}var to=64,no=4194304;function Gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function zo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Gi(l):(s&=o,s!==0&&(r=Gi(s)))}else o=n&~i,o!==0?r=Gi(o):s!==0&&(r=Gi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),i=1<<n,r|=e[n],t&=~i;return r}function l1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function a1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Rt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=l1(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function Iu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Wm(){var e=to;return to<<=1,!(to&4194240)&&(to=64),e}function _a(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function u1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Vc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function Um(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Hm,Gc,Vm,Gm,Qm,ku=!1,ro=[],En=null,Cn=null,Sn=null,ps=new Map,ms=new Map,yn=[],c1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":ps.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(t.pointerId)}}function Di(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=zs(t),t!==null&&Gc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function d1(e,t,n,r,i){switch(t){case"focusin":return En=Di(En,e,t,n,r,i),!0;case"dragenter":return Cn=Di(Cn,e,t,n,r,i),!0;case"mouseover":return Sn=Di(Sn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ps.set(s,Di(ps.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ms.set(s,Di(ms.get(s)||null,e,t,n,r,i)),!0}return!1}function Km(e){var t=Qn(e.target);if(t!==null){var n=Cr(t);if(n!==null){if(t=n.tag,t===13){if(t=Lm(n),t!==null){e.blockedOn=t,Qm(e.priority,function(){Vm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function So(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Eu=r,n.target.dispatchEvent(r),Eu=null}else return t=zs(n),t!==null&&Gc(t),e.blockedOn=n,!1;t.shift()}return!0}function Wf(e,t,n){So(e)&&n.delete(t)}function f1(){ku=!1,En!==null&&So(En)&&(En=null),Cn!==null&&So(Cn)&&(Cn=null),Sn!==null&&So(Sn)&&(Sn=null),ps.forEach(Wf),ms.forEach(Wf)}function Oi(e,t){e.blockedOn===t&&(e.blockedOn=null,ku||(ku=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,f1)))}function gs(e){function t(i){return Oi(i,e)}if(0<ro.length){Oi(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&Oi(En,e),Cn!==null&&Oi(Cn,e),Sn!==null&&Oi(Sn,e),ps.forEach(t),ms.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Km(n),n.blockedOn===null&&yn.shift()}var qr=un.ReactCurrentBatchConfig,Wo=!0;function h1(e,t,n,r){var i=G,s=qr.transition;qr.transition=null;try{G=1,Qc(e,t,n,r)}finally{G=i,qr.transition=s}}function p1(e,t,n,r){var i=G,s=qr.transition;qr.transition=null;try{G=4,Qc(e,t,n,r)}finally{G=i,qr.transition=s}}function Qc(e,t,n,r){if(Wo){var i=Tu(e,t,n,r);if(i===null)Na(e,t,r,Uo,n),zf(e,r);else if(d1(i,e,t,n,r))r.stopPropagation();else if(zf(e,r),t&4&&-1<c1.indexOf(e)){for(;i!==null;){var s=zs(i);if(s!==null&&Hm(s),s=Tu(e,t,n,r),s===null&&Na(e,t,r,Uo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Na(e,t,r,null,n)}}var Uo=null;function Tu(e,t,n,r){if(Uo=null,e=Uc(r),e=Qn(e),e!==null)if(t=Cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Lm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Uo=e,null}function Ym(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t1()){case Hc:return 1;case jm:return 4;case jo:case n1:return 16;case zm:return 536870912;default:return 16}default:return 16}}var vn=null,Kc=null,xo=null;function qm(){if(xo)return xo;var e,t=Kc,n=t.length,r,i="value"in vn?vn.value:vn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return xo=i.slice(e,1<r?1-r:void 0)}function Io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function Uf(){return!1}function ut(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?io:Uf,this.isPropagationStopped=Uf,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yc=ut(Si),js=oe({},Si,{view:0,detail:0}),m1=ut(js),va,wa,Mi,Al=oe({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mi&&(Mi&&e.type==="mousemove"?(va=e.screenX-Mi.screenX,wa=e.screenY-Mi.screenY):wa=va=0,Mi=e),va)},movementY:function(e){return"movementY"in e?e.movementY:wa}}),Hf=ut(Al),g1=oe({},Al,{dataTransfer:0}),y1=ut(g1),_1=oe({},js,{relatedTarget:0}),Ea=ut(_1),v1=oe({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),w1=ut(v1),E1=oe({},Si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),C1=ut(E1),S1=oe({},Si,{data:0}),Vf=ut(S1),x1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},k1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function T1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=k1[e])?!!t[e]:!1}function qc(){return T1}var N1=oe({},js,{key:function(e){if(e.key){var t=x1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?I1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),R1=ut(N1),P1=oe({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gf=ut(P1),b1=oe({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),A1=ut(b1),D1=oe({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),O1=ut(D1),M1=oe({},Al,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),L1=ut(M1),F1=[9,13,27,32],Xc=tn&&"CompositionEvent"in window,Xi=null;tn&&"documentMode"in document&&(Xi=document.documentMode);var $1=tn&&"TextEvent"in window&&!Xi,Xm=tn&&(!Xc||Xi&&8<Xi&&11>=Xi),Qf=String.fromCharCode(32),Kf=!1;function Jm(e,t){switch(e){case"keyup":return F1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function B1(e,t){switch(e){case"compositionend":return Zm(t);case"keypress":return t.which!==32?null:(Kf=!0,Qf);case"textInput":return e=t.data,e===Qf&&Kf?null:e;default:return null}}function j1(e,t){if(Or)return e==="compositionend"||!Xc&&Jm(e,t)?(e=qm(),xo=Kc=vn=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xm&&t.locale!=="ko"?null:t.data;default:return null}}var z1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!z1[e.type]:t==="textarea"}function eg(e,t,n,r){bm(r),t=Ho(t,"onChange"),0<t.length&&(n=new Yc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ji=null,ys=null;function W1(e){dg(e,0)}function Dl(e){var t=Fr(e);if(xm(t))return e}function U1(e,t){if(e==="change")return t}var tg=!1;if(tn){var Ca;if(tn){var Sa="oninput"in document;if(!Sa){var qf=document.createElement("div");qf.setAttribute("oninput","return;"),Sa=typeof qf.oninput=="function"}Ca=Sa}else Ca=!1;tg=Ca&&(!document.documentMode||9<document.documentMode)}function Xf(){Ji&&(Ji.detachEvent("onpropertychange",ng),ys=Ji=null)}function ng(e){if(e.propertyName==="value"&&Dl(ys)){var t=[];eg(t,ys,e,Uc(e)),Mm(W1,t)}}function H1(e,t,n){e==="focusin"?(Xf(),Ji=t,ys=n,Ji.attachEvent("onpropertychange",ng)):e==="focusout"&&Xf()}function V1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Dl(ys)}function G1(e,t){if(e==="click")return Dl(t)}function Q1(e,t){if(e==="input"||e==="change")return Dl(t)}function K1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:K1;function _s(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uu.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function Jf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zf(e,t){var n=Jf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jf(n)}}function rg(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?rg(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ig(){for(var e=window,t=Fo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fo(e.document)}return t}function Jc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Y1(e){var t=ig(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&rg(n.ownerDocument.documentElement,n)){if(r!==null&&Jc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Zf(n,s);var o=Zf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var q1=tn&&"documentMode"in document&&11>=document.documentMode,Mr=null,Nu=null,Zi=null,Ru=!1;function eh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||Mr==null||Mr!==Fo(r)||(r=Mr,"selectionStart"in r&&Jc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zi&&_s(Zi,r)||(Zi=r,r=Ho(Nu,"onSelect"),0<r.length&&(t=new Yc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},xa={},sg={};tn&&(sg=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ol(e){if(xa[e])return xa[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sg)return xa[e]=t[n];return e}var og=Ol("animationend"),lg=Ol("animationiteration"),ag=Ol("animationstart"),ug=Ol("transitionend"),cg=new Map,th="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){cg.set(e,t),Er(t,[e])}for(var Ia=0;Ia<th.length;Ia++){var ka=th[Ia],X1=ka.toLowerCase(),J1=ka[0].toUpperCase()+ka.slice(1);Bn(X1,"on"+J1)}Bn(og,"onAnimationEnd");Bn(lg,"onAnimationIteration");Bn(ag,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(ug,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function nh(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,X0(r,t,void 0,e),e.currentTarget=null}function dg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;nh(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;nh(i,l,u),s=a}}}if(Bo)throw e=xu,Bo=!1,xu=null,e}function J(e,t){var n=t[Ou];n===void 0&&(n=t[Ou]=new Set);var r=e+"__bubble";n.has(r)||(fg(t,e,2,!1),n.add(r))}function Ta(e,t,n){var r=0;t&&(r|=4),fg(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function vs(e){if(!e[oo]){e[oo]=!0,vm.forEach(function(n){n!=="selectionchange"&&(Z1.has(n)||Ta(n,!1,e),Ta(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,Ta("selectionchange",!1,t))}}function fg(e,t,n,r){switch(Ym(t)){case 1:var i=h1;break;case 4:i=p1;break;default:i=Qc}n=i.bind(null,t,n,e),i=void 0,!Su||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Na(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Mm(function(){var u=s,f=Uc(n),c=[];e:{var d=cg.get(e);if(d!==void 0){var h=Yc,y=e;switch(e){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":h=R1;break;case"focusin":y="focus",h=Ea;break;case"focusout":y="blur",h=Ea;break;case"beforeblur":case"afterblur":h=Ea;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=y1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=A1;break;case og:case lg:case ag:h=w1;break;case ug:h=O1;break;case"scroll":h=m1;break;case"wheel":h=L1;break;case"copy":case"cut":case"paste":h=C1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Gf}var _=(t&4)!==0,k=!_&&e==="scroll",m=_?d!==null?d+"Capture":null:d;_=[];for(var p=u,g;p!==null;){g=p;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,m!==null&&(v=hs(p,m),v!=null&&_.push(ws(p,v,g)))),k)break;p=p.return}0<_.length&&(d=new h(d,y,null,n,f),c.push({event:d,listeners:_}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",d&&n!==Eu&&(y=n.relatedTarget||n.fromElement)&&(Qn(y)||y[nn]))break e;if((h||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Qn(y):null,y!==null&&(k=Cr(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(_=Hf,v="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(_=Gf,v="onPointerLeave",m="onPointerEnter",p="pointer"),k=h==null?d:Fr(h),g=y==null?d:Fr(y),d=new _(v,p+"leave",h,n,f),d.target=k,d.relatedTarget=g,v=null,Qn(f)===u&&(_=new _(m,p+"enter",y,n,f),_.target=g,_.relatedTarget=k,v=_),k=v,h&&y)t:{for(_=h,m=y,p=0,g=_;g;g=Pr(g))p++;for(g=0,v=m;v;v=Pr(v))g++;for(;0<p-g;)_=Pr(_),p--;for(;0<g-p;)m=Pr(m),g--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=Pr(_),m=Pr(m)}_=null}else _=null;h!==null&&rh(c,d,h,_,!1),y!==null&&k!==null&&rh(c,k,y,_,!0)}}e:{if(d=u?Fr(u):window,h=d.nodeName&&d.nodeName.toLowerCase(),h==="select"||h==="input"&&d.type==="file")var E=U1;else if(Yf(d))if(tg)E=Q1;else{E=V1;var S=H1}else(h=d.nodeName)&&h.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=G1);if(E&&(E=E(e,u))){eg(c,E,n,f);break e}S&&S(e,d,u),e==="focusout"&&(S=d._wrapperState)&&S.controlled&&d.type==="number"&&gu(d,"number",d.value)}switch(S=u?Fr(u):window,e){case"focusin":(Yf(S)||S.contentEditable==="true")&&(Mr=S,Nu=u,Zi=null);break;case"focusout":Zi=Nu=Mr=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,eh(c,n,f);break;case"selectionchange":if(q1)break;case"keydown":case"keyup":eh(c,n,f)}var w;if(Xc)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Or?Jm(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Xm&&n.locale!=="ko"&&(Or||N!=="onCompositionStart"?N==="onCompositionEnd"&&Or&&(w=qm()):(vn=f,Kc="value"in vn?vn.value:vn.textContent,Or=!0)),S=Ho(u,N),0<S.length&&(N=new Vf(N,e,null,n,f),c.push({event:N,listeners:S}),w?N.data=w:(w=Zm(n),w!==null&&(N.data=w)))),(w=$1?B1(e,n):j1(e,n))&&(u=Ho(u,"onBeforeInput"),0<u.length&&(f=new Vf("onBeforeInput","beforeinput",null,n,f),c.push({event:f,listeners:u}),f.data=w))}dg(c,t)})}function ws(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ho(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=hs(e,n),s!=null&&r.unshift(ws(e,s,i)),s=hs(e,t),s!=null&&r.push(ws(e,s,i))),e=e.return}return r}function Pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=hs(n,s),a!=null&&o.unshift(ws(n,a,l))):i||(a=hs(n,s),a!=null&&o.push(ws(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var ew=/\r\n?/g,tw=/\u0000|\uFFFD/g;function ih(e){return(typeof e=="string"?e:""+e).replace(ew,`
`).replace(tw,"")}function lo(e,t,n){if(t=ih(t),ih(e)!==t&&n)throw Error(C(425))}function Vo(){}var Pu=null,bu=null;function Au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,nw=typeof clearTimeout=="function"?clearTimeout:void 0,sh=typeof Promise=="function"?Promise:void 0,rw=typeof queueMicrotask=="function"?queueMicrotask:typeof sh<"u"?function(e){return sh.resolve(null).then(e).catch(iw)}:Du;function iw(e){setTimeout(function(){throw e})}function Ra(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),gs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gs(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function oh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xi=Math.random().toString(36).slice(2),$t="__reactFiber$"+xi,Es="__reactProps$"+xi,nn="__reactContainer$"+xi,Ou="__reactEvents$"+xi,sw="__reactListeners$"+xi,ow="__reactHandles$"+xi;function Qn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=oh(e);e!==null;){if(n=e[$t])return n;e=oh(e)}return t}e=n,n=e.parentNode}return null}function zs(e){return e=e[$t]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Ml(e){return e[Es]||null}var Mu=[],$r=-1;function jn(e){return{current:e}}function te(e){0>$r||(e.current=Mu[$r],Mu[$r]=null,$r--)}function X(e,t){$r++,Mu[$r]=e.current,e.current=t}var Mn={},Fe=jn(Mn),Ke=jn(!1),ir=Mn;function si(e,t){var n=e.type.contextTypes;if(!n)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function Go(){te(Ke),te(Fe)}function lh(e,t,n){if(Fe.current!==Mn)throw Error(C(168));X(Fe,t),X(Ke,n)}function hg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,H0(e)||"Unknown",i));return oe({},n,r)}function Qo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,ir=Fe.current,X(Fe,e),X(Ke,Ke.current),!0}function ah(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=hg(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,te(Ke),te(Fe),X(Fe,e)):te(Ke),X(Ke,n)}var Qt=null,Ll=!1,Pa=!1;function pg(e){Qt===null?Qt=[e]:Qt.push(e)}function lw(e){Ll=!0,pg(e)}function zn(){if(!Pa&&Qt!==null){Pa=!0;var e=0,t=G;try{var n=Qt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,Ll=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),Bm(Hc,zn),i}finally{G=t,Pa=!1}}return null}var Br=[],jr=0,Ko=null,Yo=0,pt=[],mt=0,sr=null,Yt=1,qt="";function Un(e,t){Br[jr++]=Yo,Br[jr++]=Ko,Ko=e,Yo=t}function mg(e,t,n){pt[mt++]=Yt,pt[mt++]=qt,pt[mt++]=sr,sr=e;var r=Yt;e=qt;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var s=32-Rt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Rt(t)+i|n<<i|r,qt=s+e}else Yt=1<<s|n<<i|r,qt=e}function Zc(e){e.return!==null&&(Un(e,1),mg(e,1,0))}function ed(e){for(;e===Ko;)Ko=Br[--jr],Br[jr]=null,Yo=Br[--jr],Br[jr]=null;for(;e===sr;)sr=pt[--mt],pt[mt]=null,qt=pt[--mt],pt[mt]=null,Yt=pt[--mt],pt[mt]=null}var st=null,it=null,ne=!1,It=null;function gg(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,it=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sr!==null?{id:Yt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,it=null,!0):!1;default:return!1}}function Lu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Fu(e){if(ne){var t=it;if(t){var n=t;if(!uh(e,t)){if(Lu(e))throw Error(C(418));t=xn(n.nextSibling);var r=st;t&&uh(e,t)?gg(r,n):(e.flags=e.flags&-4097|2,ne=!1,st=e)}}else{if(Lu(e))throw Error(C(418));e.flags=e.flags&-4097|2,ne=!1,st=e}}}function ch(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function ao(e){if(e!==st)return!1;if(!ne)return ch(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Au(e.type,e.memoizedProps)),t&&(t=it)){if(Lu(e))throw yg(),Error(C(418));for(;t;)gg(e,t),t=xn(t.nextSibling)}if(ch(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=st?xn(e.stateNode.nextSibling):null;return!0}function yg(){for(var e=it;e;)e=xn(e.nextSibling)}function oi(){it=st=null,ne=!1}function td(e){It===null?It=[e]:It.push(e)}var aw=un.ReactCurrentBatchConfig;function St(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var qo=jn(null),Xo=null,zr=null,nd=null;function rd(){nd=zr=Xo=null}function id(e){var t=qo.current;te(qo),e._currentValue=t}function $u(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xr(e,t){Xo=e,nd=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(nd!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(Xo===null)throw Error(C(308));zr=e,Xo.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var Kn=null;function sd(e){Kn===null?Kn=[e]:Kn.push(e)}function _g(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,sd(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function od(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function vg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,sd(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function ko(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vc(e,n)}}function dh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Jo(e,t,n,r){var i=e.updateQueue;gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,f=u=a=null,l=s;do{var d=l.lane,h=l.eventTime;if((r&d)===d){f!==null&&(f=f.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,_=l;switch(d=t,h=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){c=y.call(h,c,d);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,d=typeof y=="function"?y.call(h,c,d):y,d==null)break e;c=oe({},c,d);break e;case 2:gn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,d=i.effects,d===null?i.effects=[l]:d.push(l))}else h={eventTime:h,lane:d,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=h,a=c):f=f.next=h,o|=d;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;d=l,l=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(f===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);lr|=o,e.lanes=o,e.memoizedState=c}}function fh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var wg=new _m.Component().refs;function Bu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Fl={isMounted:function(e){return(e=e._reactInternals)?Cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=Tn(e),s=Zt(r,i);s.payload=t,n!=null&&(s.callback=n),t=In(e,s,i),t!==null&&(Pt(t,e,i,r),ko(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=Tn(e),s=Zt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=In(e,s,i),t!==null&&(Pt(t,e,i,r),ko(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Tn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=In(e,i,r),t!==null&&(Pt(t,e,r,n),ko(t,e,r))}};function hh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!_s(n,r)||!_s(i,s):!0}function Eg(e,t,n){var r=!1,i=Mn,s=t.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=Ye(t)?ir:Fe.current,r=t.contextTypes,s=(r=r!=null)?si(e,i):Mn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ph(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Fl.enqueueReplaceState(t,t.state,null)}function ju(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=wg,od(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=Ye(t)?ir:Fe.current,i.context=si(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Bu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fl.enqueueReplaceState(i,i.state,null),Jo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Li(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===wg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function mh(e){var t=e._init;return t(e._payload)}function Cg(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Nn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,v){return p===null||p.tag!==6?(p=Fa(g,m.mode,v),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,v){var E=g.type;return E===Dr?f(m,p,g.props.children,v,g.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&mh(E)===p.type)?(v=i(p,g.props),v.ref=Li(m,p,g),v.return=m,v):(v=Ao(g.type,g.key,g.props,null,m.mode,v),v.ref=Li(m,p,g),v.return=m,v)}function u(m,p,g,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=$a(g,m.mode,v),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function f(m,p,g,v,E){return p===null||p.tag!==7?(p=tr(g,m.mode,v,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function c(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Fa(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Js:return g=Ao(p.type,p.key,p.props,null,m.mode,g),g.ref=Li(m,null,p),g.return=m,g;case Ar:return p=$a(p,m.mode,g),p.return=m,p;case mn:var v=p._init;return c(m,v(p._payload),g)}if(Vi(p)||bi(p))return p=tr(p,m.mode,g,null),p.return=m,p;uo(m,p)}return null}function d(m,p,g,v){var E=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:l(m,p,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:return g.key===E?a(m,p,g,v):null;case Ar:return g.key===E?u(m,p,g,v):null;case mn:return E=g._init,d(m,p,E(g._payload),v)}if(Vi(g)||bi(g))return E!==null?null:f(m,p,g,v,null);uo(m,g)}return null}function h(m,p,g,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(g)||null,l(p,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Js:return m=m.get(v.key===null?g:v.key)||null,a(p,m,v,E);case Ar:return m=m.get(v.key===null?g:v.key)||null,u(p,m,v,E);case mn:var S=v._init;return h(m,p,g,S(v._payload),E)}if(Vi(v)||bi(v))return m=m.get(g)||null,f(p,m,v,E,null);uo(p,v)}return null}function y(m,p,g,v){for(var E=null,S=null,w=p,N=p=0,z=null;w!==null&&N<g.length;N++){w.index>N?(z=w,w=null):z=w.sibling;var O=d(m,w,g[N],v);if(O===null){w===null&&(w=z);break}e&&w&&O.alternate===null&&t(m,w),p=s(O,p,N),S===null?E=O:S.sibling=O,S=O,w=z}if(N===g.length)return n(m,w),ne&&Un(m,N),E;if(w===null){for(;N<g.length;N++)w=c(m,g[N],v),w!==null&&(p=s(w,p,N),S===null?E=w:S.sibling=w,S=w);return ne&&Un(m,N),E}for(w=r(m,w);N<g.length;N++)z=h(w,m,N,g[N],v),z!==null&&(e&&z.alternate!==null&&w.delete(z.key===null?N:z.key),p=s(z,p,N),S===null?E=z:S.sibling=z,S=z);return e&&w.forEach(function(ye){return t(m,ye)}),ne&&Un(m,N),E}function _(m,p,g,v){var E=bi(g);if(typeof E!="function")throw Error(C(150));if(g=E.call(g),g==null)throw Error(C(151));for(var S=E=null,w=p,N=p=0,z=null,O=g.next();w!==null&&!O.done;N++,O=g.next()){w.index>N?(z=w,w=null):z=w.sibling;var ye=d(m,w,O.value,v);if(ye===null){w===null&&(w=z);break}e&&w&&ye.alternate===null&&t(m,w),p=s(ye,p,N),S===null?E=ye:S.sibling=ye,S=ye,w=z}if(O.done)return n(m,w),ne&&Un(m,N),E;if(w===null){for(;!O.done;N++,O=g.next())O=c(m,O.value,v),O!==null&&(p=s(O,p,N),S===null?E=O:S.sibling=O,S=O);return ne&&Un(m,N),E}for(w=r(m,w);!O.done;N++,O=g.next())O=h(w,m,N,O.value,v),O!==null&&(e&&O.alternate!==null&&w.delete(O.key===null?N:O.key),p=s(O,p,N),S===null?E=O:S.sibling=O,S=O);return e&&w.forEach(function(Ht){return t(m,Ht)}),ne&&Un(m,N),E}function k(m,p,g,v){if(typeof g=="object"&&g!==null&&g.type===Dr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:e:{for(var E=g.key,S=p;S!==null;){if(S.key===E){if(E=g.type,E===Dr){if(S.tag===7){n(m,S.sibling),p=i(S,g.props.children),p.return=m,m=p;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&mh(E)===S.type){n(m,S.sibling),p=i(S,g.props),p.ref=Li(m,S,g),p.return=m,m=p;break e}n(m,S);break}else t(m,S);S=S.sibling}g.type===Dr?(p=tr(g.props.children,m.mode,v,g.key),p.return=m,m=p):(v=Ao(g.type,g.key,g.props,null,m.mode,v),v.ref=Li(m,p,g),v.return=m,m=v)}return o(m);case Ar:e:{for(S=g.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=$a(g,m.mode,v),p.return=m,m=p}return o(m);case mn:return S=g._init,k(m,p,S(g._payload),v)}if(Vi(g))return y(m,p,g,v);if(bi(g))return _(m,p,g,v);uo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Fa(g,m.mode,v),p.return=m,m=p),o(m)):n(m,p)}return k}var li=Cg(!0),Sg=Cg(!1),Ws={},Wt=jn(Ws),Cs=jn(Ws),Ss=jn(Ws);function Yn(e){if(e===Ws)throw Error(C(174));return e}function ld(e,t){switch(X(Ss,t),X(Cs,e),X(Wt,Ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:_u(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=_u(t,e)}te(Wt),X(Wt,t)}function ai(){te(Wt),te(Cs),te(Ss)}function xg(e){Yn(Ss.current);var t=Yn(Wt.current),n=_u(t,e.type);t!==n&&(X(Cs,e),X(Wt,n))}function ad(e){Cs.current===e&&(te(Wt),te(Cs))}var ie=jn(0);function Zo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ba=[];function ud(){for(var e=0;e<ba.length;e++)ba[e]._workInProgressVersionPrimary=null;ba.length=0}var To=un.ReactCurrentDispatcher,Aa=un.ReactCurrentBatchConfig,or=0,se=null,pe=null,we=null,el=!1,es=!1,xs=0,uw=0;function De(){throw Error(C(321))}function cd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function dd(e,t,n,r,i,s){if(or=s,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,To.current=e===null||e.memoizedState===null?hw:pw,e=n(r,i),es){s=0;do{if(es=!1,xs=0,25<=s)throw Error(C(301));s+=1,we=pe=null,t.updateQueue=null,To.current=mw,e=n(r,i)}while(es)}if(To.current=tl,t=pe!==null&&pe.next!==null,or=0,we=pe=se=null,el=!1,t)throw Error(C(300));return e}function fd(){var e=xs!==0;return xs=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?se.memoizedState=we=e:we=we.next=e,we}function vt(){if(pe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=we===null?se.memoizedState:we.next;if(t!==null)we=t,pe=e;else{if(e===null)throw Error(C(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?se.memoizedState=we=e:we=we.next=e}return we}function Is(e,t){return typeof t=="function"?t(e):t}function Da(e){var t=vt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var f=u.lane;if((or&f)===f)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,se.lanes|=f,lr|=f}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Dt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,se.lanes|=s,lr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Oa(e){var t=vt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Dt(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ig(){}function kg(e,t){var n=se,r=vt(),i=t(),s=!Dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,hd(Rg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ks(9,Ng.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(C(349));or&30||Tg(n,t,i)}return i}function Tg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ng(e,t,n,r){t.value=n,t.getSnapshot=r,Pg(t)&&bg(e)}function Rg(e,t,n){return n(function(){Pg(t)&&bg(e)})}function Pg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function bg(e){var t=rn(e,1);t!==null&&Pt(t,e,1,-1)}function gh(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:e},t.queue=e,e=e.dispatch=fw.bind(null,se,e),[t.memoizedState,e]}function ks(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ag(){return vt().memoizedState}function No(e,t,n,r){var i=Lt();se.flags|=e,i.memoizedState=ks(1|t,n,void 0,r===void 0?null:r)}function $l(e,t,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&cd(r,o.deps)){i.memoizedState=ks(t,n,s,r);return}}se.flags|=e,i.memoizedState=ks(1|t,n,s,r)}function yh(e,t){return No(8390656,8,e,t)}function hd(e,t){return $l(2048,8,e,t)}function Dg(e,t){return $l(4,2,e,t)}function Og(e,t){return $l(4,4,e,t)}function Mg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lg(e,t,n){return n=n!=null?n.concat([e]):null,$l(4,4,Mg.bind(null,t,e),n)}function pd(){}function Fg(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function $g(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&cd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bg(e,t,n){return or&21?(Dt(n,t)||(n=Wm(),se.lanes|=n,lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function cw(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Aa.transition;Aa.transition={};try{e(!1),t()}finally{G=n,Aa.transition=r}}function jg(){return vt().memoizedState}function dw(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},zg(e))Wg(t,n);else if(n=_g(e,t,n,r),n!==null){var i=je();Pt(n,e,r,i),Ug(n,t,r)}}function fw(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(zg(e))Wg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Dt(l,o)){var a=t.interleaved;a===null?(i.next=i,sd(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=_g(e,t,i,r),n!==null&&(i=je(),Pt(n,e,r,i),Ug(n,t,r))}}function zg(e){var t=e.alternate;return e===se||t!==null&&t===se}function Wg(e,t){es=el=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ug(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Vc(e,n)}}var tl={readContext:_t,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},hw={readContext:_t,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:yh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,No(4194308,4,Mg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=dw.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:gh,useDebugValue:pd,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=gh(!1),t=e[0];return e=cw.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=Lt();if(ne){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Ie===null)throw Error(C(349));or&30||Tg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,yh(Rg.bind(null,r,s,e),[e]),r.flags|=2048,ks(9,Ng.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Ie.identifierPrefix;if(ne){var n=qt,r=Yt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=uw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},pw={readContext:_t,useCallback:Fg,useContext:_t,useEffect:hd,useImperativeHandle:Lg,useInsertionEffect:Dg,useLayoutEffect:Og,useMemo:$g,useReducer:Da,useRef:Ag,useState:function(){return Da(Is)},useDebugValue:pd,useDeferredValue:function(e){var t=vt();return Bg(t,pe.memoizedState,e)},useTransition:function(){var e=Da(Is)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ig,useSyncExternalStore:kg,useId:jg,unstable_isNewReconciler:!1},mw={readContext:_t,useCallback:Fg,useContext:_t,useEffect:hd,useImperativeHandle:Lg,useInsertionEffect:Dg,useLayoutEffect:Og,useMemo:$g,useReducer:Oa,useRef:Ag,useState:function(){return Oa(Is)},useDebugValue:pd,useDeferredValue:function(e){var t=vt();return pe===null?t.memoizedState=e:Bg(t,pe.memoizedState,e)},useTransition:function(){var e=Oa(Is)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ig,useSyncExternalStore:kg,useId:jg,unstable_isNewReconciler:!1};function ui(e,t){try{var n="",r=t;do n+=U0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Ma(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function zu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var gw=typeof WeakMap=="function"?WeakMap:Map;function Hg(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){rl||(rl=!0,Xu=r),zu(e,t)},n}function Vg(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){zu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zu(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function _h(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new gw;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Pw.bind(null,e,t,n),t.then(e,e))}function vh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var yw=un.ReactCurrentOwner,Ve=!1;function Be(e,t,n,r){t.child=e===null?Sg(t,null,n,r):li(t,e.child,n,r)}function Eh(e,t,n,r,i){n=n.render;var s=t.ref;return Xr(t,i),r=dd(e,t,n,r,s,i),n=fd(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(ne&&n&&Zc(t),t.flags|=1,Be(e,t,r,i),t.child)}function Ch(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Gg(e,t,s,r,i)):(e=Ao(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_s,n(o,r)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=Nn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Gg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(_s(s,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,sn(e,t,i)}return Wu(e,t,n,r,i)}function Qg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Ur,rt),rt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Ur,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Ur,rt),rt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,X(Ur,rt),rt|=r;return Be(e,t,i,n),t.child}function Kg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Wu(e,t,n,r,i){var s=Ye(n)?ir:Fe.current;return s=si(t,s),Xr(t,i),n=dd(e,t,n,r,s,i),r=fd(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(ne&&r&&Zc(t),t.flags|=1,Be(e,t,n,i),t.child)}function Sh(e,t,n,r,i){if(Ye(n)){var s=!0;Qo(t)}else s=!1;if(Xr(t,i),t.stateNode===null)Ro(e,t),Eg(t,n,r),ju(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=Ye(n)?ir:Fe.current,u=si(t,u));var f=n.getDerivedStateFromProps,c=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ph(t,o,r,u),gn=!1;var d=t.memoizedState;o.state=d,Jo(t,r,o,i),a=t.memoizedState,l!==r||d!==a||Ke.current||gn?(typeof f=="function"&&(Bu(t,n,f,r),a=t.memoizedState),(l=gn||hh(t,n,l,r,d,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,vg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:St(t.type,l),o.props=u,c=t.pendingProps,d=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=_t(a):(a=Ye(n)?ir:Fe.current,a=si(t,a));var h=n.getDerivedStateFromProps;(f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||d!==a)&&ph(t,o,r,a),gn=!1,d=t.memoizedState,o.state=d,Jo(t,r,o,i);var y=t.memoizedState;l!==c||d!==y||Ke.current||gn?(typeof h=="function"&&(Bu(t,n,h,r),y=t.memoizedState),(u=gn||hh(t,n,u,r,d,y,a)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Uu(e,t,n,r,s,i)}function Uu(e,t,n,r,i,s){Kg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ah(t,n,!1),sn(e,t,s);r=t.stateNode,yw.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=li(t,e.child,null,s),t.child=li(t,null,l,s)):Be(e,t,l,s),t.memoizedState=r.state,i&&ah(t,n,!0),t.child}function Yg(e){var t=e.stateNode;t.pendingContext?lh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lh(e,t.context,!1),ld(e,t.containerInfo)}function xh(e,t,n,r,i){return oi(),td(i),t.flags|=256,Be(e,t,n,r),t.child}var Hu={dehydrated:null,treeContext:null,retryLane:0};function Vu(e){return{baseLanes:e,cachePool:null,transitions:null}}function qg(e,t,n){var r=t.pendingProps,i=ie.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(ie,i&1),e===null)return Fu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zl(o,r,0,null),e=tr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Vu(n),t.memoizedState=Hu,e):md(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return _w(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Nn(l,s):(s=tr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Vu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Hu,r}return s=e.child,e=s.sibling,r=Nn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function md(e,t){return t=zl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&td(r),li(t,e.child,null,n),e=md(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _w(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Ma(Error(C(422))),co(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=zl({mode:"visible",children:r.children},i,0,null),s=tr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&li(t,e.child,null,o),t.child.memoizedState=Vu(o),t.memoizedState=Hu,s);if(!(t.mode&1))return co(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Ma(s,r,void 0),co(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ve||l){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rn(e,i),Pt(r,e,i,-1))}return Ed(),r=Ma(Error(C(421))),co(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=bw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,it=xn(i.nextSibling),st=t,ne=!0,It=null,e!==null&&(pt[mt++]=Yt,pt[mt++]=qt,pt[mt++]=sr,Yt=e.id,qt=e.overflow,sr=t),t=md(t,r.children),t.flags|=4096,t)}function Ih(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$u(e.return,t,n)}function La(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Xg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Be(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ih(e,n,t);else if(e.tag===19)Ih(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Zo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),La(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Zo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}La(t,!0,n,null,s);break;case"together":La(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ro(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function vw(e,t,n){switch(t.tag){case 3:Yg(t),oi();break;case 5:xg(t);break;case 1:Ye(t.type)&&Qo(t);break;case 4:ld(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(qo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?qg(e,t,n):(X(ie,ie.current&1),e=sn(e,t,n),e!==null?e.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Xg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Qg(e,t,n)}return sn(e,t,n)}var Jg,Gu,Zg,ey;Jg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gu=function(){};Zg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yn(Wt.current);var s=null;switch(n){case"input":i=pu(e,i),r=pu(e,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=yu(e,i),r=yu(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Vo)}vu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ds.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ds.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ey=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fi(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ww(e,t,n){var r=t.pendingProps;switch(ed(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ye(t.type)&&Go(),Oe(t),null;case 3:return r=t.stateNode,ai(),te(Ke),te(Fe),ud(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,It!==null&&(ec(It),It=null))),Gu(e,t),Oe(t),null;case 5:ad(t);var i=Yn(Ss.current);if(n=t.type,e!==null&&t.stateNode!=null)Zg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Oe(t),null}if(e=Yn(Wt.current),ao(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[$t]=t,r[Es]=s,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)J(Qi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Of(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Lf(r,s),J("invalid",r)}vu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&lo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&lo(r.textContent,l,e),i=["children",""+l]):ds.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Zs(r),Mf(r,s,!0);break;case"textarea":Zs(r),Ff(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Vo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Tm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$t]=t,e[Es]=r,Jg(e,t,!1,!1),t.stateNode=e;e:{switch(o=wu(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)J(Qi[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":Of(e,r),i=pu(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),J("invalid",e);break;case"textarea":Lf(e,r),i=yu(e,r),J("invalid",e);break;default:i=r}vu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Pm(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Nm(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&fs(e,a):typeof a=="number"&&fs(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ds.hasOwnProperty(s)?a!=null&&s==="onScroll"&&J("scroll",e):a!=null&&Bc(e,s,a,o))}switch(n){case"input":Zs(e),Mf(e,r,!1);break;case"textarea":Zs(e),Ff(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Qr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Qr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Vo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)ey(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Yn(Ss.current),Yn(Wt.current),ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(s=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Oe(t),null;case 13:if(te(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&it!==null&&t.mode&1&&!(t.flags&128))yg(),oi(),t.flags|=98560,s=!1;else if(s=ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[$t]=t}else oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else It!==null&&(ec(It),It=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ge===0&&(ge=3):Ed())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return ai(),Gu(e,t),e===null&&vs(t.stateNode.containerInfo),Oe(t),null;case 10:return id(t.type._context),Oe(t),null;case 17:return Ye(t.type)&&Go(),Oe(t),null;case 19:if(te(ie),s=t.memoizedState,s===null)return Oe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Fi(s,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zo(e),o!==null){for(t.flags|=128,Fi(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),t.child}e=e.sibling}s.tail!==null&&ue()>ci&&(t.flags|=128,r=!0,Fi(s,!1),t.lanes=4194304)}else{if(!r)if(e=Zo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Oe(t),null}else 2*ue()-s.renderingStartTime>ci&&n!==1073741824&&(t.flags|=128,r=!0,Fi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ue(),t.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return wd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Ew(e,t){switch(ed(t),t.tag){case 1:return Ye(t.type)&&Go(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ai(),te(Ke),te(Fe),ud(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ad(t),null;case 13:if(te(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ie),null;case 4:return ai(),null;case 10:return id(t.type._context),null;case 22:case 23:return wd(),null;case 24:return null;default:return null}}var fo=!1,Me=!1,Cw=typeof WeakSet=="function"?WeakSet:Set,R=null;function Wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function Qu(e,t,n){try{n()}catch(r){le(e,t,r)}}var kh=!1;function Sw(e,t){if(Pu=Wo,e=ig(),Jc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,f=0,c=e,d=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)d=c,c=h;for(;;){if(c===e)break t;if(d===n&&++u===i&&(l=o),d===s&&++f===r&&(a=o),(h=c.nextSibling)!==null)break;c=d,d=c.parentNode}c=h}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(bu={focusedElem:e,selectionRange:n},Wo=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,k=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?_:St(t.type,_),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){le(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=kh,kh=!1,y}function ts(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Qu(t,n,s)}i=i.next}while(i!==r)}}function Bl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ku(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ty(e){var t=e.alternate;t!==null&&(e.alternate=null,ty(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[Es],delete t[Ou],delete t[sw],delete t[ow])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ny(e){return e.tag===5||e.tag===3||e.tag===4}function Th(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ny(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Vo));else if(r!==4&&(e=e.child,e!==null))for(Yu(e,t,n),e=e.sibling;e!==null;)Yu(e,t,n),e=e.sibling}function qu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(qu(e,t,n),e=e.sibling;e!==null;)qu(e,t,n),e=e.sibling}var ke=null,xt=!1;function hn(e,t,n){for(n=n.child;n!==null;)ry(e,t,n),n=n.sibling}function ry(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Me||Wr(n,t);case 6:var r=ke,i=xt;ke=null,hn(e,t,n),ke=r,xt=i,ke!==null&&(xt?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(xt?(e=ke,n=n.stateNode,e.nodeType===8?Ra(e.parentNode,n):e.nodeType===1&&Ra(e,n),gs(e)):Ra(ke,n.stateNode));break;case 4:r=ke,i=xt,ke=n.stateNode.containerInfo,xt=!0,hn(e,t,n),ke=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qu(n,t,o),i=i.next}while(i!==r)}hn(e,t,n);break;case 1:if(!Me&&(Wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,t,l)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,hn(e,t,n),Me=r):hn(e,t,n);break;default:hn(e,t,n)}}function Nh(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Cw),t.forEach(function(r){var i=Aw.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,xt=!1;break e;case 3:ke=l.stateNode.containerInfo,xt=!0;break e;case 4:ke=l.stateNode.containerInfo,xt=!0;break e}l=l.return}if(ke===null)throw Error(C(160));ry(s,o,i),ke=null,xt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){le(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)iy(t,e),t=t.sibling}function iy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Mt(e),r&4){try{ts(3,e,e.return),Bl(3,e)}catch(_){le(e,e.return,_)}try{ts(5,e,e.return)}catch(_){le(e,e.return,_)}}break;case 1:Ct(t,e),Mt(e),r&512&&n!==null&&Wr(n,n.return);break;case 5:if(Ct(t,e),Mt(e),r&512&&n!==null&&Wr(n,n.return),e.flags&32){var i=e.stateNode;try{fs(i,"")}catch(_){le(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Im(i,s),wu(l,o);var u=wu(l,s);for(o=0;o<a.length;o+=2){var f=a[o],c=a[o+1];f==="style"?Pm(i,c):f==="dangerouslySetInnerHTML"?Nm(i,c):f==="children"?fs(i,c):Bc(i,f,c,u)}switch(l){case"input":mu(i,s);break;case"textarea":km(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Qr(i,!!s.multiple,h,!1):d!==!!s.multiple&&(s.defaultValue!=null?Qr(i,!!s.multiple,s.defaultValue,!0):Qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Es]=s}catch(_){le(e,e.return,_)}}break;case 6:if(Ct(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){le(e,e.return,_)}}break;case 3:if(Ct(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gs(t.containerInfo)}catch(_){le(e,e.return,_)}break;case 4:Ct(t,e),Mt(e);break;case 13:Ct(t,e),Mt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(_d=ue())),r&4&&Nh(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(u=Me)||f,Ct(t,e),Me=u):Ct(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(R=e,f=e.child;f!==null;){for(c=R=f;R!==null;){switch(d=R,h=d.child,d.tag){case 0:case 11:case 14:case 15:ts(4,d,d.return);break;case 1:Wr(d,d.return);var y=d.stateNode;if(typeof y.componentWillUnmount=="function"){r=d,n=d.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){le(r,n,_)}}break;case 5:Wr(d,d.return);break;case 22:if(d.memoizedState!==null){Ph(c);continue}}h!==null?(h.return=d,R=h):Ph(c)}f=f.sibling}e:for(f=null,c=e;;){if(c.tag===5){if(f===null){f=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Rm("display",o))}catch(_){le(e,e.return,_)}}}else if(c.tag===6){if(f===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){le(e,e.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;f===c&&(f=null),c=c.return}f===c&&(f=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ct(t,e),Mt(e),r&4&&Nh(e);break;case 21:break;default:Ct(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ny(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fs(i,""),r.flags&=-33);var s=Th(e);qu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Th(e);Yu(e,l,o);break;default:throw Error(C(161))}}catch(a){le(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xw(e,t,n){R=e,sy(e)}function sy(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Me;l=fo;var u=Me;if(fo=o,(Me=a)&&!u)for(R=i;R!==null;)o=R,a=o.child,o.tag===22&&o.memoizedState!==null?bh(i):a!==null?(a.return=o,R=a):bh(i);for(;s!==null;)R=s,sy(s),s=s.sibling;R=i,fo=l,Me=u}Rh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Rh(e)}}function Rh(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||Bl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&fh(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}fh(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var c=f.dehydrated;c!==null&&gs(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Me||t.flags&512&&Ku(t)}catch(d){le(t,t.return,d)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Ph(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function bh(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Bl(4,t)}catch(a){le(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){le(t,i,a)}}var s=t.return;try{Ku(t)}catch(a){le(t,s,a)}break;case 5:var o=t.return;try{Ku(t)}catch(a){le(t,o,a)}}}catch(a){le(t,t.return,a)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var Iw=Math.ceil,nl=un.ReactCurrentDispatcher,gd=un.ReactCurrentOwner,yt=un.ReactCurrentBatchConfig,W=0,Ie=null,fe=null,Ne=0,rt=0,Ur=jn(0),ge=0,Ts=null,lr=0,jl=0,yd=0,ns=null,He=null,_d=0,ci=1/0,Gt=null,rl=!1,Xu=null,kn=null,ho=!1,wn=null,il=0,rs=0,Ju=null,Po=-1,bo=0;function je(){return W&6?ue():Po!==-1?Po:Po=ue()}function Tn(e){return e.mode&1?W&2&&Ne!==0?Ne&-Ne:aw.transition!==null?(bo===0&&(bo=Wm()),bo):(e=G,e!==0||(e=window.event,e=e===void 0?16:Ym(e.type)),e):1}function Pt(e,t,n,r){if(50<rs)throw rs=0,Ju=null,Error(C(185));Bs(e,n,r),(!(W&2)||e!==Ie)&&(e===Ie&&(!(W&2)&&(jl|=n),ge===4&&_n(e,Ne)),qe(e,r),n===1&&W===0&&!(t.mode&1)&&(ci=ue()+500,Ll&&zn()))}function qe(e,t){var n=e.callbackNode;a1(e,t);var r=zo(e,e===Ie?Ne:0);if(r===0)n!==null&&jf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&jf(n),t===1)e.tag===0?lw(Ah.bind(null,e)):pg(Ah.bind(null,e)),rw(function(){!(W&6)&&zn()}),n=null;else{switch(Um(r)){case 1:n=Hc;break;case 4:n=jm;break;case 16:n=jo;break;case 536870912:n=zm;break;default:n=jo}n=hy(n,oy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function oy(e,t){if(Po=-1,bo=0,W&6)throw Error(C(327));var n=e.callbackNode;if(Jr()&&e.callbackNode!==n)return null;var r=zo(e,e===Ie?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=sl(e,r);else{t=r;var i=W;W|=2;var s=ay();(Ie!==e||Ne!==t)&&(Gt=null,ci=ue()+500,er(e,t));do try{Nw();break}catch(l){ly(e,l)}while(1);rd(),nl.current=s,W=i,fe!==null?t=0:(Ie=null,Ne=0,t=ge)}if(t!==0){if(t===2&&(i=Iu(e),i!==0&&(r=i,t=Zu(e,i))),t===1)throw n=Ts,er(e,0),_n(e,r),qe(e,ue()),n;if(t===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!kw(i)&&(t=sl(e,r),t===2&&(s=Iu(e),s!==0&&(r=s,t=Zu(e,s))),t===1))throw n=Ts,er(e,0),_n(e,r),qe(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Hn(e,He,Gt);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=_d+500-ue(),10<t)){if(zo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Du(Hn.bind(null,e,He,Gt),t);break}Hn(e,He,Gt);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Rt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Iw(r/1960))-r,10<r){e.timeoutHandle=Du(Hn.bind(null,e,He,Gt),r);break}Hn(e,He,Gt);break;case 5:Hn(e,He,Gt);break;default:throw Error(C(329))}}}return qe(e,ue()),e.callbackNode===n?oy.bind(null,e):null}function Zu(e,t){var n=ns;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=sl(e,t),e!==2&&(t=He,He=n,t!==null&&ec(t)),e}function ec(e){He===null?He=e:He.push.apply(He,e)}function kw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~yd,t&=~jl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function Ah(e){if(W&6)throw Error(C(327));Jr();var t=zo(e,0);if(!(t&1))return qe(e,ue()),null;var n=sl(e,t);if(e.tag!==0&&n===2){var r=Iu(e);r!==0&&(t=r,n=Zu(e,r))}if(n===1)throw n=Ts,er(e,0),_n(e,t),qe(e,ue()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,He,Gt),qe(e,ue()),null}function vd(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(ci=ue()+500,Ll&&zn())}}function ar(e){wn!==null&&wn.tag===0&&!(W&6)&&Jr();var t=W;W|=1;var n=yt.transition,r=G;try{if(yt.transition=null,G=1,e)return e()}finally{G=r,yt.transition=n,W=t,!(W&6)&&zn()}}function wd(){rt=Ur.current,te(Ur)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,nw(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(ed(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Go();break;case 3:ai(),te(Ke),te(Fe),ud();break;case 5:ad(r);break;case 4:ai();break;case 13:te(ie);break;case 19:te(ie);break;case 10:id(r.type._context);break;case 22:case 23:wd()}n=n.return}if(Ie=e,fe=e=Nn(e.current,null),Ne=rt=t,ge=0,Ts=null,yd=jl=lr=0,He=ns=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kn=null}return e}function ly(e,t){do{var n=fe;try{if(rd(),To.current=tl,el){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}el=!1}if(or=0,we=pe=se=null,es=!1,xs=0,gd.current=null,n===null||n.return===null){ge=1,Ts=t,fe=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,f=l,c=f.tag;if(!(f.mode&1)&&(c===0||c===11||c===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var h=vh(o);if(h!==null){h.flags&=-257,wh(h,o,l,s,t),h.mode&1&&_h(s,u,t),t=h,a=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(a),t.updateQueue=_}else y.add(a);break e}else{if(!(t&1)){_h(s,u,t),Ed();break e}a=Error(C(426))}}else if(ne&&l.mode&1){var k=vh(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),wh(k,o,l,s,t),td(ui(a,l));break e}}s=a=ui(a,l),ge!==4&&(ge=2),ns===null?ns=[s]:ns.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Hg(s,a,t);dh(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(kn===null||!kn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=Vg(s,l,t);dh(s,v);break e}}s=s.return}while(s!==null)}cy(n)}catch(E){t=E,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function ay(){var e=nl.current;return nl.current=tl,e===null?tl:e}function Ed(){(ge===0||ge===3||ge===2)&&(ge=4),Ie===null||!(lr&268435455)&&!(jl&268435455)||_n(Ie,Ne)}function sl(e,t){var n=W;W|=2;var r=ay();(Ie!==e||Ne!==t)&&(Gt=null,er(e,t));do try{Tw();break}catch(i){ly(e,i)}while(1);if(rd(),W=n,nl.current=r,fe!==null)throw Error(C(261));return Ie=null,Ne=0,ge}function Tw(){for(;fe!==null;)uy(fe)}function Nw(){for(;fe!==null&&!Z0();)uy(fe)}function uy(e){var t=fy(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?cy(e):fe=t,gd.current=null}function cy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Ew(n,t),n!==null){n.flags&=32767,fe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,fe=null;return}}else if(n=ww(n,t,rt),n!==null){fe=n;return}if(t=t.sibling,t!==null){fe=t;return}fe=t=e}while(t!==null);ge===0&&(ge=5)}function Hn(e,t,n){var r=G,i=yt.transition;try{yt.transition=null,G=1,Rw(e,t,n,r)}finally{yt.transition=i,G=r}return null}function Rw(e,t,n,r){do Jr();while(wn!==null);if(W&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(u1(e,s),e===Ie&&(fe=Ie=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,hy(jo,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=G;G=1;var l=W;W|=4,gd.current=null,Sw(e,n),iy(n,e),Y1(bu),Wo=!!Pu,bu=Pu=null,e.current=n,xw(n),e1(),W=l,G=o,yt.transition=s}else e.current=n;if(ho&&(ho=!1,wn=e,il=i),s=e.pendingLanes,s===0&&(kn=null),r1(n.stateNode),qe(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(rl)throw rl=!1,e=Xu,Xu=null,e;return il&1&&e.tag!==0&&Jr(),s=e.pendingLanes,s&1?e===Ju?rs++:(rs=0,Ju=e):rs=0,zn(),null}function Jr(){if(wn!==null){var e=Um(il),t=yt.transition,n=G;try{if(yt.transition=null,G=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,il=0,W&6)throw Error(C(331));var i=W;for(W|=4,R=e.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var f=R;switch(f.tag){case 0:case 11:case 15:ts(8,f,s)}var c=f.child;if(c!==null)c.return=f,R=c;else for(;R!==null;){f=R;var d=f.sibling,h=f.return;if(ty(f),f===u){R=null;break}if(d!==null){d.return=h,R=d;break}R=h}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ts(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}var p=e.current;for(R=p;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=p;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Bl(9,l)}}catch(E){le(l,l.return,E)}if(l===o){R=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,R=v;break e}R=l.return}}if(W=i,zn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(bl,e)}catch{}r=!0}return r}finally{G=n,yt.transition=t}}return!1}function Dh(e,t,n){t=ui(n,t),t=Hg(e,t,1),e=In(e,t,1),t=je(),e!==null&&(Bs(e,1,t),qe(e,t))}function le(e,t,n){if(e.tag===3)Dh(e,e,n);else for(;t!==null;){if(t.tag===3){Dh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=ui(n,e),e=Vg(t,e,1),t=In(t,e,1),e=je(),t!==null&&(Bs(t,1,e),qe(t,e));break}}t=t.return}}function Pw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Ne&n)===n&&(ge===4||ge===3&&(Ne&130023424)===Ne&&500>ue()-_d?er(e,0):yd|=n),qe(e,t)}function dy(e,t){t===0&&(e.mode&1?(t=no,no<<=1,!(no&130023424)&&(no=4194304)):t=1);var n=je();e=rn(e,t),e!==null&&(Bs(e,t,n),qe(e,n))}function bw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dy(e,n)}function Aw(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),dy(e,n)}var fy;fy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,vw(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ne&&t.flags&1048576&&mg(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ro(e,t),e=t.pendingProps;var i=si(t,Fe.current);Xr(t,n),i=dd(null,t,r,e,i,n);var s=fd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(s=!0,Qo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,od(t),i.updater=Fl,t.stateNode=i,i._reactInternals=t,ju(t,r,e,n),t=Uu(null,t,r,!0,s,n)):(t.tag=0,ne&&s&&Zc(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ro(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Ow(r),e=St(r,e),i){case 0:t=Wu(null,t,r,e,n);break e;case 1:t=Sh(null,t,r,e,n);break e;case 11:t=Eh(null,t,r,e,n);break e;case 14:t=Ch(null,t,r,St(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Wu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Sh(e,t,r,i,n);case 3:e:{if(Yg(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,vg(e,t),Jo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ui(Error(C(423)),t),t=xh(e,t,r,n,i);break e}else if(r!==i){i=ui(Error(C(424)),t),t=xh(e,t,r,n,i);break e}else for(it=xn(t.stateNode.containerInfo.firstChild),st=t,ne=!0,It=null,n=Sg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oi(),r===i){t=sn(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return xg(t),e===null&&Fu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Au(r,i)?o=null:s!==null&&Au(r,s)&&(t.flags|=32),Kg(e,t),Be(e,t,o,n),t.child;case 6:return e===null&&Fu(t),null;case 13:return qg(e,t,n);case 4:return ld(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=li(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Eh(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,X(qo,r._currentValue),r._currentValue=o,s!==null)if(Dt(s.value,o)){if(s.children===i.children&&!Ke.current){t=sn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Zt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?a.next=a:(a.next=f.next,f.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),$u(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$u(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xr(t,n),i=_t(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),Ch(e,t,r,i,n);case 15:return Gg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Ro(e,t),t.tag=1,Ye(r)?(e=!0,Qo(t)):e=!1,Xr(t,n),Eg(t,r,i),ju(t,r,i,n),Uu(null,t,r,!0,e,n);case 19:return Xg(e,t,n);case 22:return Qg(e,t,n)}throw Error(C(156,t.tag))};function hy(e,t){return Bm(e,t)}function Dw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new Dw(e,t,n,r)}function Cd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ow(e){if(typeof e=="function")return Cd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===zc)return 11;if(e===Wc)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ao(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Cd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dr:return tr(n.children,i,s,t);case jc:o=8,i|=8;break;case cu:return e=gt(12,n,t,i|2),e.elementType=cu,e.lanes=s,e;case du:return e=gt(13,n,t,i),e.elementType=du,e.lanes=s,e;case fu:return e=gt(19,n,t,i),e.elementType=fu,e.lanes=s,e;case Cm:return zl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wm:o=10;break e;case Em:o=9;break e;case zc:o=11;break e;case Wc:o=14;break e;case mn:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=gt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function tr(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function zl(e,t,n,r){return e=gt(22,e,r,t),e.elementType=Cm,e.lanes=n,e.stateNode={isHidden:!1},e}function Fa(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function $a(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Mw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_a(0),this.expirationTimes=_a(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_a(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Sd(e,t,n,r,i,s,o,l,a){return e=new Mw(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=gt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},od(s),e}function Lw(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function py(e){if(!e)return Mn;e=e._reactInternals;e:{if(Cr(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ye(n))return hg(e,n,t)}return t}function my(e,t,n,r,i,s,o,l,a){return e=Sd(n,r,!0,e,i,s,o,l,a),e.context=py(null),n=e.current,r=je(),i=Tn(n),s=Zt(r,i),s.callback=t??null,In(n,s,i),e.current.lanes=i,Bs(e,i,r),qe(e,r),e}function Wl(e,t,n,r){var i=t.current,s=je(),o=Tn(i);return n=py(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(i,t,o),e!==null&&(Pt(e,i,o,s),ko(e,i,o)),o}function ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Oh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function xd(e,t){Oh(e,t),(e=e.alternate)&&Oh(e,t)}function Fw(){return null}var gy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Id(e){this._internalRoot=e}Ul.prototype.render=Id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Wl(e,t,null,null)};Ul.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){Wl(null,e,null,null)}),t[nn]=null}};function Ul(e){this._internalRoot=e}Ul.prototype.unstable_scheduleHydration=function(e){if(e){var t=Gm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Km(e)}};function kd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Hl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Mh(){}function $w(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ol(o);s.call(u)}}var o=my(t,r,e,0,null,!1,!1,"",Mh);return e._reactRootContainer=o,e[nn]=o.current,vs(e.nodeType===8?e.parentNode:e),ar(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=ol(a);l.call(u)}}var a=Sd(e,0,!1,null,null,!1,!1,"",Mh);return e._reactRootContainer=a,e[nn]=a.current,vs(e.nodeType===8?e.parentNode:e),ar(function(){Wl(t,a,n,r)}),a}function Vl(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=ol(o);l.call(a)}}Wl(t,o,e,i)}else o=$w(n,t,e,i,r);return ol(o)}Hm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gi(t.pendingLanes);n!==0&&(Vc(t,n|1),qe(t,ue()),!(W&6)&&(ci=ue()+500,zn()))}break;case 13:ar(function(){var r=rn(e,1);if(r!==null){var i=je();Pt(r,e,1,i)}}),xd(e,1)}};Gc=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=je();Pt(t,e,134217728,n)}xd(e,134217728)}};Vm=function(e){if(e.tag===13){var t=Tn(e),n=rn(e,t);if(n!==null){var r=je();Pt(n,e,t,r)}xd(e,t)}};Gm=function(){return G};Qm=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Cu=function(e,t,n){switch(t){case"input":if(mu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Ml(r);if(!i)throw Error(C(90));xm(r),mu(r,i)}}}break;case"textarea":km(e,n);break;case"select":t=n.value,t!=null&&Qr(e,!!n.multiple,t,!1)}};Dm=vd;Om=ar;var Bw={usingClientEntryPoint:!1,Events:[zs,Fr,Ml,bm,Am,vd]},$i={findFiberByHostInstance:Qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},jw={bundleType:$i.bundleType,version:$i.version,rendererPackageName:$i.rendererPackageName,rendererConfig:$i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Fm(e),e===null?null:e.stateNode},findFiberByHostInstance:$i.findFiberByHostInstance||Fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{bl=po.inject(jw),zt=po}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Bw;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kd(t))throw Error(C(200));return Lw(e,t,null,n)};at.createRoot=function(e,t){if(!kd(e))throw Error(C(299));var n=!1,r="",i=gy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Sd(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,vs(e.nodeType===8?e.parentNode:e),new Id(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Fm(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return ar(e)};at.hydrate=function(e,t,n){if(!Hl(t))throw Error(C(200));return Vl(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!kd(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=gy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=my(t,null,e,1,n??null,i,!1,s,o),e[nn]=t.current,vs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ul(t)};at.render=function(e,t,n){if(!Hl(t))throw Error(C(200));return Vl(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!Hl(e))throw Error(C(40));return e._reactRootContainer?(ar(function(){Vl(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};at.unstable_batchedUpdates=vd;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Hl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Vl(e,t,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";function yy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yy)}catch(e){console.error(e)}}yy(),mm.exports=at;var zw=mm.exports,Lh=zw;au.createRoot=Lh.createRoot,au.hydrateRoot=Lh.hydrateRoot;var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},xe.apply(this,arguments)};function di(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Z="-ms-",is="-moz-",H="-webkit-",_y="comm",Gl="rule",Td="decl",Ww="@import",vy="@keyframes",Uw="@layer",Hw=Math.abs,Nd=String.fromCharCode,Vw=Object.assign;function Gw(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function wy(e){return e.trim()}function pn(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Do(e,t){return e.indexOf(t)}function Ee(e,t){return e.charCodeAt(t)|0}function fi(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function Rd(e){return e.length}function mo(e,t){return t.push(e),e}function Qw(e,t){return e.map(t).join("")}var Ql=1,hi=1,Ey=0,wt=0,de=0,Ii="";function Kl(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Ql,column:hi,length:o,return:""}}function Bi(e,t){return Vw(Kl("",null,null,"",null,null,0),e,{length:-e.length},t)}function Kw(){return de}function Yw(){return de=wt>0?Ee(Ii,--wt):0,hi--,de===10&&(hi=1,Ql--),de}function bt(){return de=wt<Ey?Ee(Ii,wt++):0,hi++,de===10&&(hi=1,Ql++),de}function nr(){return Ee(Ii,wt)}function Oo(){return wt}function Yl(e,t){return fi(Ii,e,t)}function tc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qw(e){return Ql=hi=1,Ey=Kt(Ii=e),wt=0,[]}function Xw(e){return Ii="",e}function Ba(e){return wy(Yl(wt-1,nc(e===91?e+2:e===40?e+1:e)))}function Jw(e){for(;(de=nr())&&de<33;)bt();return tc(e)>2||tc(de)>3?"":" "}function Zw(e,t){for(;--t&&bt()&&!(de<48||de>102||de>57&&de<65||de>70&&de<97););return Yl(e,Oo()+(t<6&&nr()==32&&bt()==32))}function nc(e){for(;bt();)switch(de){case e:return wt;case 34:case 39:e!==34&&e!==39&&nc(de);break;case 40:e===41&&nc(e);break;case 92:bt();break}return wt}function eE(e,t){for(;bt()&&e+de!==47+10;)if(e+de===42+42&&nr()===47)break;return"/*"+Yl(t,wt-1)+"*"+Nd(e===47?e:bt())}function tE(e){for(;!tc(nr());)bt();return Yl(e,wt)}function nE(e){return Xw(Mo("",null,null,null,[""],e=qw(e),0,[0],e))}function Mo(e,t,n,r,i,s,o,l,a){for(var u=0,f=0,c=o,d=0,h=0,y=0,_=1,k=1,m=1,p=0,g="",v=i,E=s,S=r,w=g;k;)switch(y=p,p=bt()){case 40:if(y!=108&&Ee(w,c-1)==58){Do(w+=M(Ba(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:w+=Ba(p);break;case 9:case 10:case 13:case 32:w+=Jw(y);break;case 92:w+=Zw(Oo()-1,7);continue;case 47:switch(nr()){case 42:case 47:mo(rE(eE(bt(),Oo()),t,n),a);break;default:w+="/"}break;case 123*_:l[u++]=Kt(w)*m;case 125*_:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+f:m==-1&&(w=M(w,/\f/g,"")),h>0&&Kt(w)-c&&mo(h>32?$h(w+";",r,n,c-1):$h(M(w," ","")+";",r,n,c-2),a);break;case 59:w+=";";default:if(mo(S=Fh(w,t,n,u,f,i,l,g,v=[],E=[],c),s),p===123)if(f===0)Mo(w,t,S,S,v,s,c,l,E);else switch(d===99&&Ee(w,3)===110?100:d){case 100:case 108:case 109:case 115:Mo(e,S,S,r&&mo(Fh(e,S,S,0,0,i,l,g,i,v=[],c),E),i,E,c,l,r?v:E);break;default:Mo(w,S,S,S,[""],E,0,l,E)}}u=f=h=0,_=m=1,g=w="",c=o;break;case 58:c=1+Kt(w),h=y;default:if(_<1){if(p==123)--_;else if(p==125&&_++==0&&Yw()==125)continue}switch(w+=Nd(p),p*_){case 38:m=f>0?1:(w+="\f",-1);break;case 44:l[u++]=(Kt(w)-1)*m,m=1;break;case 64:nr()===45&&(w+=Ba(bt())),d=nr(),f=c=Kt(g=w+=tE(Oo())),p++;break;case 45:y===45&&Kt(w)==2&&(_=0)}}return s}function Fh(e,t,n,r,i,s,o,l,a,u,f){for(var c=i-1,d=i===0?s:[""],h=Rd(d),y=0,_=0,k=0;y<r;++y)for(var m=0,p=fi(e,c+1,c=Hw(_=o[y])),g=e;m<h;++m)(g=wy(_>0?d[m]+" "+p:M(p,/&\f/g,d[m])))&&(a[k++]=g);return Kl(e,t,n,i===0?Gl:l,a,u,f)}function rE(e,t,n){return Kl(e,t,n,_y,Nd(Kw()),fi(e,2,-2),0)}function $h(e,t,n,r){return Kl(e,t,n,Td,fi(e,0,r),fi(e,r+1,-1),r)}function Cy(e,t,n){switch(Gw(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return is+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+is+e+Z+e+e;case 5936:switch(Ee(e,t+11)){case 114:return H+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+Z+e+e;case 6165:return H+e+Z+"flex-"+e+e;case 5187:return H+e+M(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return H+e+Z+"flex-item-"+M(e,/flex-|-self/g,"")+(pn(e,/flex-|baseline/)?"":Z+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return H+e+Z+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+Z+M(e,"shrink","negative")+e;case 5292:return H+e+Z+M(e,"basis","preferred-size")+e;case 6060:return H+"box-"+M(e,"-grow","")+H+e+Z+M(e,"grow","positive")+e;case 4554:return H+M(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!pn(e,/flex-|baseline/))return Z+"grid-column-align"+fi(e,t)+e;break;case 2592:case 3360:return Z+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pn(r.props,/grid-\w+-end/)})?~Do(e+(n=n[t].value),"span")?e:Z+M(e,"-start","")+e+Z+"grid-row-span:"+(~Do(n,"span")?pn(n,/\d+/):+pn(n,/\d+/)-+pn(e,/\d+/))+";":Z+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pn(r.props,/grid-\w+-start/)})?e:Z+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+is+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Do(e,"stretch")?Cy(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,a,u){return Z+i+":"+s+u+(o?Z+i+"-span:"+(l?a:+a-+s)+u:"")+e});case 4949:if(Ee(e,t+6)===121)return M(e,":",":"+H)+e;break;case 6444:switch(Ee(e,Ee(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(Ee(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+Z+"$2box$3")+e;case 100:return M(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function ss(e,t){for(var n="",r=Rd(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function iE(e,t,n,r){switch(e.type){case Uw:if(e.children.length)break;case Ww:case Td:return e.return=e.return||e.value;case _y:return"";case vy:return e.return=e.value+"{"+ss(e.children,r)+"}";case Gl:e.value=e.props.join(",")}return Kt(n=ss(e.children,r))?e.return=e.value+"{"+n+"}":""}function sE(e){var t=Rd(e);return function(n,r,i,s){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,s)||"";return o}}function oE(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Td:e.return=Cy(e.value,e.length,n);return;case vy:return ss([Bi(e,{value:M(e.value,"@","@"+H)})],r);case Gl:if(e.length)return Qw(e.props,function(i){switch(pn(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ss([Bi(e,{props:[M(i,/:(read-\w+)/,":"+is+"$1")]})],r);case"::placeholder":return ss([Bi(e,{props:[M(i,/:(plac\w+)/,":"+H+"input-$1")]}),Bi(e,{props:[M(i,/:(plac\w+)/,":"+is+"$1")]}),Bi(e,{props:[M(i,/:(plac\w+)/,Z+"input-$1")]})],r)}return""})}}var lE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Pd=typeof window<"u"&&"HTMLElement"in window,aE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),uE={},bd=Object.freeze([]),ur=Object.freeze({});function Sy(e,t,n){return n===void 0&&(n=ur),e.theme!==n.theme&&e.theme||t||n.theme}var xy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),cE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dE=/(^-|-$)/g;function Bh(e){return e.replace(cE,"-").replace(dE,"")}var fE=/(a)(d)/gi,jh=function(e){return String.fromCharCode(e+(e>25?39:97))};function rc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=jh(t%52)+n;return(jh(t%52)+n).replace(fE,"$1-$2")}var ja,Hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Iy=function(e){return Hr(5381,e)};function Ad(e){return rc(Iy(e)>>>0)}function hE(e){return e.displayName||e.name||"Component"}function za(e){return typeof e=="string"&&!0}var ky=typeof Symbol=="function"&&Symbol.for,Ty=ky?Symbol.for("react.memo"):60115,pE=ky?Symbol.for("react.forward_ref"):60112,mE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ny={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},yE=((ja={})[pE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ja[Ty]=Ny,ja);function zh(e){return("type"in(t=e)&&t.type.$$typeof)===Ty?Ny:"$$typeof"in e?yE[e.$$typeof]:mE;var t}var _E=Object.defineProperty,vE=Object.getOwnPropertyNames,Wh=Object.getOwnPropertySymbols,wE=Object.getOwnPropertyDescriptor,EE=Object.getPrototypeOf,Uh=Object.prototype;function Ry(e,t,n){if(typeof t!="string"){if(Uh){var r=EE(t);r&&r!==Uh&&Ry(e,r,n)}var i=vE(t);Wh&&(i=i.concat(Wh(t)));for(var s=zh(e),o=zh(t),l=0;l<i.length;++l){var a=i[l];if(!(a in gE||n&&n[a]||o&&a in o||s&&a in s)){var u=wE(t,a);try{_E(e,a,u)}catch{}}}}return e}function cr(e){return typeof e=="function"}function Dd(e){return typeof e=="object"&&"styledComponentId"in e}function qn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ll(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ns(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ic(e,t,n){if(n===void 0&&(n=!1),!n&&!Ns(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ic(e[r],t[r]);else if(Ns(t))for(var r in t)e[r]=ic(e[r],t[r]);return e}function dr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var CE=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw dr(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),a=(o=0,n.length);o<a;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Lo=new Map,al=new Map,Wa=1,go=function(e){if(Lo.has(e))return Lo.get(e);for(;al.has(Wa);)Wa++;var t=Wa++;return Lo.set(e,t),al.set(t,e),t},SE=function(e,t){Lo.set(e,t),al.set(t,e)},xE="style[".concat(pi,"][").concat("data-styled-version",'="').concat("6.0.0-rc.1",'"]'),IE=new RegExp("^".concat(pi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),kE=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},TE=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var a=l.match(IE);if(a){var u=0|parseInt(a[1],10),f=a[2];u!==0&&(SE(f,u),kE(e,f,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function NE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Py=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var f=a[u];if(f&&f.nodeType===1&&f.hasAttribute(pi))return f}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(pi,"active"),r.setAttribute("data-styled-version","6.0.0-rc.1");var o=NE();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},RE=function(){function e(t){this.element=Py(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw dr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),PE=function(){function e(t){this.element=Py(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),bE=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Hh=Pd,AE={isServer:!Pd,useCSSOMInjection:!aE},ul=function(){function e(t,n,r){t===void 0&&(t=ur),n===void 0&&(n={}),this.options=xe(xe({},AE),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Pd&&Hh&&(Hh=!1,function(i){for(var s=document.querySelectorAll(xE),o=0,l=s.length;o<l;o++){var a=s[o];a&&a.getAttribute(pi)!=="active"&&(TE(i,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}return e.registerId=function(t){return go(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new bE(i):r?new RE(i):new PE(i)}(this.options),new CE(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(go(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(go(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(go(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(t){for(var n=t.getTag(),r=n.length,i="",s=function(l){var a=function(h){return al.get(h)}(l);if(a===void 0)return"continue";var u=t.names.get(a),f=n.getGroup(l);if(u===void 0||f.length===0)return"continue";var c="".concat(pi,".g").concat(l,'[id="').concat(a,'"]'),d="";u!==void 0&&u.forEach(function(h){h.length>0&&(d+="".concat(h,","))}),i+="".concat(f).concat(c,'{content:"').concat(d,'"}').concat(`/*!sc*/
`)},o=0;o<r;o++)s(o);return i}(this)},e}(),DE=/&/g,OE=/^\s*\/\/.*$/gm;function by(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=by(n.children,t)),n})}function ME(e){var t,n,r,i=e===void 0?ur:e,s=i.options,o=s===void 0?ur:s,l=i.plugins,a=l===void 0?bd:l,u=function(d,h,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):d},f=a.slice();o.prefix&&f.unshift(oE),f.push(function(d){d.type===Gl&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(DE,n).replace(r,u))},iE);var c=function(d,h,y,_){h===void 0&&(h=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var k=d.replace(OE,""),m=nE(y||h?"".concat(y," ").concat(h," { ").concat(k," }"):k);return o.namespace&&(m=by(m,o.namespace)),function(p,g){for(var v=[],E=0,S=void 0;E<p.length;E+=1)(S=g(p[E],E,p,g))&&v.push(S);return v}(m,sE(f))};return c.hash=a.length?a.reduce(function(d,h){return h.name||dr(15),Hr(d,h.name)},5381).toString():"",c}var LE=new ul,sc=ME(),Ay=Bt.createContext({shouldForwardProp:void 0,styleSheet:LE,stylis:sc});Ay.Consumer;Bt.createContext(void 0);function oc(){return he.useContext(Ay)}var Dy=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=sc);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){throw dr(12,String(r.name))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=sc),this.name+t.hash},e}(),FE=function(e){return e>="A"&&e<="Z"};function Vh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;FE(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Oy=function(e){return e==null||e===!1||e===""},My=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Oy(s)&&(Array.isArray(s)&&s.isCss||cr(s)?r.push("".concat(Vh(i),":"),s,";"):Ns(s)?r.push.apply(r,di(di(["".concat(i," {")],My(s),!1),["}"],!1)):r.push("".concat(Vh(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in lE||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rn(e,t,n,r){if(Oy(e))return[];if(Dd(e))return[".".concat(e.styledComponentId)];if(cr(e)){if(!cr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Rn(i,t,n,r)}var s;return e instanceof Dy?n?(e.inject(n,r),[e.getName(r)]):[e]:Ns(e)?My(e):Array.isArray(e)?e.flatMap(function(o){return Rn(o,t,n,r)}):[e.toString()]}function Ly(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(cr(n)&&!Dd(n))return!1}return!0}var $E=Iy("6.0.0-rc.1"),BE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ly(t),this.componentId=n,this.baseHash=Hr($E,n),this.baseStyle=r,ul.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=qn(i,this.staticRulesId);else{var s=ll(Rn(this.rules,t,n,r)),o=rc(Hr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=qn(i,o),this.staticRulesId=o}else{for(var a=Hr(this.baseHash,r.hash),u="",f=0;f<this.rules.length;f++){var c=this.rules[f];if(typeof c=="string")u+=c;else if(c){var d=ll(Rn(c,t,n,r));a=Hr(a,d),u+=d}}if(u){var h=rc(a>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=qn(i,h)}}return i},e}(),Od=Bt.createContext(void 0);Od.Consumer;function Us(){return he.useContext(Od)}function jE(e){var t=Us(),n=he.useMemo(function(){return function(r,i){if(!r)throw dr(14);if(cr(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw dr(8);return i?xe(xe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Bt.createElement(Od.Provider,{value:n},e.children):null}var Ua={};function zE(e,t,n){var r=Dd(e),i=e,s=!za(e),o=t.attrs,l=o===void 0?bd:o,a=t.componentId,u=a===void 0?function(E,S){var w=typeof E!="string"?"sc":Bh(E);Ua[w]=(Ua[w]||0)+1;var N="".concat(w,"-").concat(Ad("6.0.0-rc.1"+w+Ua[w]));return S?"".concat(S,"-").concat(N):N}(t.displayName,t.parentComponentId):a,f=t.displayName,c=f===void 0?function(E){return za(E)?"styled.".concat(E):"Styled(".concat(hE(E),")")}(e):f,d=t.displayName&&t.componentId?"".concat(Bh(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;y=function(E,S){return _(E,S)&&k(E,S)}}else y=_}var m=new BE(n,d,r?i.componentStyle:void 0),p=m.isStatic&&l.length===0;function g(E,S){return function(w,N,z,O){var ye=w.attrs,Ht=w.componentStyle,re=w.defaultProps,_e=w.foldedComponentIds,Ue=w.styledComponentId,Et=w.target,Pe=Us(),T=oc(),D=w.shouldForwardProp||T.shouldForwardProp,b=function($e,tt,Tr){for(var dt,ft=xe(xe({},tt),{className:void 0,theme:Tr}),Pi=0;Pi<$e.length;Pi+=1){var Nr=cr(dt=$e[Pi])?dt(ft):dt;for(var ht in Nr)ft[ht]=ht==="className"?qn(ft[ht],Nr[ht]):ht==="style"?xe(xe({},ft[ht]),Nr[ht]):Nr[ht]}return tt.className&&(ft.className=qn(ft.className,tt.className)),ft}(ye,N,Sy(N,Pe,re)||ur),V=b.as||Et,K={};for(var be in b)b[be]===void 0||be[0]==="$"||be==="as"||be==="theme"||(be==="forwardedAs"?K.as=b.forwardedAs:D&&!D(be,V)||(K[be]=b[be]));var ct=function($e,tt,Tr){var dt=oc(),ft=$e.generateAndInjectStyles(tt?ur:Tr,dt.styleSheet,dt.stylis);return ft}(Ht,O,b),Vt=qn(_e,Ue);return ct&&(Vt+=" "+ct),b.className&&(Vt+=" "+b.className),K[za(V)&&!xy.has(V)?"class":"className"]=Vt,K.ref=z,he.createElement(V,K)}(v,E,S,p)}g.displayName=c;var v=Bt.forwardRef(g);return v.attrs=h,v.componentStyle=m,v.displayName=c,v.shouldForwardProp=y,v.foldedComponentIds=r?qn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=d,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(S){for(var w=[],N=1;N<arguments.length;N++)w[N-1]=arguments[N];for(var z=0,O=w;z<O.length;z++)ic(S,O[z],!0);return S}({},i.defaultProps,E):E}}),Object.defineProperty(v,"toString",{value:function(){return".".concat(v.styledComponentId)}}),s&&Ry(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Gh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Qh=function(e){return Object.assign(e,{isCss:!0})};function ql(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(cr(e)||Ns(e)){var r=e;return Qh(Rn(Gh(bd,di([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Rn(i):Qh(Rn(Gh(i,t)))}function lc(e,t,n){if(n===void 0&&(n=ur),!t)throw dr(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,ql.apply(void 0,di([i],s,!1)))};return r.attrs=function(i){return lc(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return lc(e,t,xe(xe({},n),i))},r}var Fy=function(e){return lc(zE,e)},P=Fy;xy.forEach(function(e){P[e]=Fy(e)});var WE=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Ly(t),ul.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(ll(Rn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&ul.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function UE(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ql.apply(void 0,di([e],t,!1)),i="sc-global-".concat(Ad(JSON.stringify(r))),s=new WE(r,i),o=function(a){var u=oc(),f=Us(),c=Bt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(c,a,u.styleSheet,f,u.stylis),(Bt.useInsertionEffect||Bt.useLayoutEffect)(function(){if(!u.styleSheet.server)return l(c,a,u.styleSheet,f,u.stylis),function(){return s.removeStyles(c,u.styleSheet)}},[c,a,u.styleSheet,f,u.stylis]),null};function l(a,u,f,c,d){if(s.isStatic)s.renderStyles(a,uE,f,d);else{var h=xe(xe({},u),{theme:Sy(u,c,o.defaultProps)});s.renderStyles(a,h,f,d)}}return Bt.memo(o)}function Sr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ll(ql.apply(void 0,di([e],t,!1))),i=Ad(r);return new Dy(i,r)}var $y={},By={},jy={exports:{}},zy={},Wy={};Wy.calcMaxWidth=e=>`${parseInt(e,10)-.02}px`;const{calcMaxWidth:HE}=Wy;zy.createBreakpointsApi=({breakpoints:e})=>{const t=Object.keys(Object(e)),n=l=>t[t.indexOf(l)+1],r=l=>e[l],i=l=>HE(e[l]),s=(l,a)=>({min:r(l),max:i(a)});return Object.freeze({keys:t,getNextKey:n,up:r,down:i,between:s,only:l=>l===t.at(-1)?r(l):s(l,n(l))})};jy.exports=zy;var VE=jy.exports,Uy={},Hy={};Hy.withOrientation=({mediaQuery:e,orientation:t})=>`${e} and (orientation: ${t})`;Uy.withOrientation=Hy.withOrientation;var Vy={},Gy={};Gy.memoize=(e,t=new Map)=>(...n)=>{const r=JSON.stringify(n);return t.has(r)||t.set(r,e(...n)),t.get(r)};Vy.memoize=Gy.memoize;const{createBreakpointsApi:GE}=VE,{withOrientation:QE}=Uy,{memoize:yo}=Vy,KE={errorPrefix:"[styled-breakpoints]: ",defaultBreakpoints:{xs:"0px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"}};By.createStyledBreakpointsTheme=({defaultBreakpoints:e,errorPrefix:t}=KE)=>{const n=GE({breakpoints:e,errorPrefix:t});return{breakpoints:{up:yo(r),down:yo(i),between:yo(s),only:yo(o)}};function r(d,h){return l(h,u(a(n.up(d))))}function i(d,h){return l(h,u(f(n.down(d))))}function s(d,h,y){return l(y,c(n.between(d,h)))}function o(d,h){return l(h,typeof n.only(d)=="object"?c(n.only(d)):u(a(n.up(d))))}function l(d,h){return d?QE({mediaQuery:h,orientation:d,invariant:n.invariant&&n.invariant}):h}function a(d){return`(min-width: ${d})`}function u(d){return`@media ${d}`}function f(d){return`(max-width: ${d})`}function c({min:d,max:h}){return`${u(a(d))} and ${f(h)}`}};$y.createStyledBreakpointsTheme=By.createStyledBreakpointsTheme;var YE=$y.createStyledBreakpointsTheme;const qE=UE`
  @font-face {
    src: url('./assets/fonts/MN Luk Chup.ttf') format('truetype');
    font-family: 'MN Luk Chup';
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    src: url('./assets/fonts/MN Luk Chup Bold.ttf') format('truetype');
    font-family: 'MN Luk Chup';
    font-weight: 700;
    font-style: normal;
  }
  
  @font-face {
    src: url('./assets/fonts/MN ECLAIR.ttf') format('truetype');
    font-family: 'MN ECLAIR';
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    src: url('./assets/fonts/MN ECLAIR Light.ttf') format('truetype');
    font-family: 'MN ECLAIR';
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    src: url('./assets/fonts/MN ECLAIR Bold.ttf') format('truetype');
    font-family: 'MN ECLAIR';
    font-weight: 700;
    font-style: normal;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'MN Luk Chup', sans-serif;
    margin: 0;
  }

  .eclair-font {
    font-family: 'MN ECLAIR', sans-serif;
  }
`;var Qy={},Ky={},Yy={},qy={};qy.getMatches=e=>typeof window<"u"?window.matchMedia(e).matches:!1;Yy.getMatches=qy.getMatches;const{useState:XE,useLayoutEffect:JE,useEffect:ZE}=he,{getMatches:eC}=Yy,tC=typeof window<"u",nC=tC?JE:ZE,rC=e=>{const[t,n]=XE(eC(e));return nC(()=>{let r=!0;const i=window.matchMedia(e.replace(/^@media\s*/,"")),s=()=>{r&&n(i.matches)};return i.addListener?i.addListener(s):i.addEventListener("change",s),n(i.matches),()=>{r=!1,i.addListener?i.removeListener(s):i.removeEventListener("change",s)}},[e]),t};Ky.useMediaQuery=rC;Qy.useMediaQuery=Ky.useMediaQuery;var cl=Qy.useMediaQuery;const Xy=new Set,Xe=new WeakMap,Zr=new WeakMap,fr=new WeakMap,ac=new WeakMap,iC=new WeakMap,mi=new WeakMap,dl=new WeakMap,Ki=new WeakSet;let hr;const Xt="__aa_tgt",uc="__aa_del",sC=e=>{const t=cC(e);t&&t.forEach(n=>dC(n))},oC=e=>{e.forEach(t=>{t.target===hr&&aC(),Xe.has(t.target)&&xr(t.target)})};function lC(e){const t=ac.get(e);t==null||t.disconnect();let n=Xe.get(e),r=0;const i=5;n||(n=gi(e),Xe.set(e,n));const{offsetWidth:s,offsetHeight:o}=hr,a=[n.top-i,s-(n.left+i+n.width),o-(n.top+i+n.height),n.left-i].map(f=>`${-1*Math.floor(f)}px`).join(" "),u=new IntersectionObserver(()=>{++r>1&&xr(e)},{root:hr,threshold:1,rootMargin:a});u.observe(e),ac.set(e,u)}function xr(e){clearTimeout(dl.get(e));const t=Xl(e),n=typeof t=="function"?500:t.duration;dl.set(e,setTimeout(async()=>{const r=fr.get(e);try{await(r==null?void 0:r.finished),Xe.set(e,gi(e)),lC(e)}catch{}},n))}function aC(){clearTimeout(dl.get(hr)),dl.set(hr,setTimeout(()=>{Xy.forEach(e=>t_(e,t=>Jy(()=>xr(t))))},100))}function uC(e){setTimeout(()=>{iC.set(e,setInterval(()=>Jy(xr.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function Jy(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let cc,Vr;typeof window<"u"&&(hr=document.documentElement,cc=new MutationObserver(sC),Vr=new ResizeObserver(oC),Vr.observe(hr));function cC(e){return e.reduce((r,i)=>[...r,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:e.reduce((r,i)=>{if(r===!1)return!1;if(i.target instanceof Element){if(Ha(i.target),!r.has(i.target)){r.add(i.target);for(let s=0;s<i.target.children.length;s++){const o=i.target.children.item(s);if(o){if(uc in o)return!1;Ha(i.target,o),r.add(o)}}}if(i.removedNodes.length)for(let s=0;s<i.removedNodes.length;s++){const o=i.removedNodes[s];if(uc in o)return!1;o instanceof Element&&(r.add(o),Ha(i.target,o),Zr.set(o,[i.previousSibling,i.nextSibling]))}}return r},new Set)}function Ha(e,t){!t&&!(Xt in e)?Object.defineProperty(e,Xt,{value:e}):t&&!(Xt in t)&&Object.defineProperty(t,Xt,{value:e})}function dC(e){var t;const n=e.isConnected,r=Xe.has(e);n&&Zr.has(e)&&Zr.delete(e),fr.has(e)&&((t=fr.get(e))===null||t===void 0||t.cancel()),r&&n?fC(e):r&&!n?pC(e):hC(e)}function Ft(e){return Number(e.replace(/[^0-9.\-]/g,""))}function gi(e){const t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function Zy(e,t,n){let r=t.width,i=t.height,s=n.width,o=n.height;const l=getComputedStyle(e);if(l.getPropertyValue("box-sizing")==="content-box"){const u=Ft(l.paddingTop)+Ft(l.paddingBottom)+Ft(l.borderTopWidth)+Ft(l.borderBottomWidth),f=Ft(l.paddingLeft)+Ft(l.paddingRight)+Ft(l.borderRightWidth)+Ft(l.borderLeftWidth);r-=f,s-=f,i-=u,o-=u}return[r,s,i,o].map(Math.round)}function Xl(e){return Xt in e&&mi.has(e[Xt])?mi.get(e[Xt]):{duration:250,easing:"ease-in-out"}}function e_(e){if(Xt in e)return e[Xt]}function Md(e){const t=e_(e);return t?Ki.has(t):!1}function t_(e,...t){t.forEach(n=>n(e,mi.has(e)));for(let n=0;n<e.children.length;n++){const r=e.children.item(n);r&&t.forEach(i=>i(r,mi.has(r)))}}function fC(e){const t=Xe.get(e),n=gi(e);if(!Md(e))return Xe.set(e,n);let r;if(!t)return;const i=Xl(e);if(typeof i!="function"){const s=t.left-n.left,o=t.top-n.top,[l,a,u,f]=Zy(e,t,n),c={transform:`translate(${s}px, ${o}px)`},d={transform:"translate(0, 0)"};l!==a&&(c.width=`${l}px`,d.width=`${a}px`),u!==f&&(c.height=`${u}px`,d.height=`${f}px`),r=e.animate([c,d],{duration:i.duration,easing:i.easing})}else r=new Animation(i(e,"remain",t,n)),r.play();fr.set(e,r),Xe.set(e,n),r.addEventListener("finish",xr.bind(null,e))}function hC(e){const t=gi(e);Xe.set(e,t);const n=Xl(e);if(!Md(e))return;let r;typeof n!="function"?r=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(r=new Animation(n(e,"add",t)),r.play()),fr.set(e,r),r.addEventListener("finish",xr.bind(null,e))}function pC(e){var t;if(!Zr.has(e)||!Xe.has(e))return;const[n,r]=Zr.get(e);Object.defineProperty(e,uc,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):(t=e_(e))===null||t===void 0||t.appendChild(e);function i(){var d;e.remove(),Xe.delete(e),Zr.delete(e),fr.delete(e),(d=ac.get(e))===null||d===void 0||d.disconnect()}if(!Md(e))return i();const[s,o,l,a]=mC(e),u=Xl(e),f=Xe.get(e);let c;Object.assign(e.style,{position:"absolute",top:`${s}px`,left:`${o}px`,width:`${l}px`,height:`${a}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof u!="function"?c=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"}):(c=new Animation(u(e,"remove",f)),c.play()),fr.set(e,c),c.addEventListener("finish",i)}function mC(e){const t=Xe.get(e),[n,,r]=Zy(e,t,gi(e));let i=e.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const s=getComputedStyle(i),o=Xe.get(i)||gi(i),l=Math.round(t.top-o.top)-Ft(s.borderTopWidth),a=Math.round(t.left-o.left)-Ft(s.borderLeftWidth);return[l,a,n,r]}function gC(e,t={}){return cc&&Vr&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof t!="function"&&!t.disrespectUserMotionPreference||(Ki.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),t_(e,xr,uC,i=>Vr==null?void 0:Vr.observe(i)),typeof t=="function"?mi.set(e,t):mi.set(e,{duration:250,easing:"ease-in-out",...t}),cc.observe(e,{childList:!0}),Xy.add(e))),Object.freeze({parent:e,enable:()=>{Ki.add(e)},disable:()=>{Ki.delete(e)},isEnabled:()=>Ki.has(e)})}function yC(e){const[t,n]=he.useState();return[he.useCallback(s=>{s instanceof HTMLElement?n(gC(s,e)):n(void 0)},[]),s=>{t&&(s?t.enable():t.disable())}]}/**
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
 */const n_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(e,t){if(!e)throw ki(t)},ki=function(e){return new Error("Firebase Database ("+n_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const r_=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},_C=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Ld={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,f=s>>2,c=(s&3)<<4|l>>4;let d=(l&15)<<2|u>>6,h=u&63;a||(h=64,o||(d=64)),r.push(n[f],n[c],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r_(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):_C(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const c=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new vC;const d=s<<2|l>>4;if(r.push(d),u!==64){const h=l<<4&240|u>>2;if(r.push(h),c!==64){const y=u<<6&192|c;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class vC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i_=function(e){const t=r_(e);return Ld.encodeByteArray(t,!0)},fl=function(e){return i_(e).replace(/\./g,"")},dc=function(e){try{return Ld.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function wC(e){return s_(void 0,e)}function s_(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!EC(n)||(e[n]=s_(e[n],t[n]));return e}function EC(e){return e!=="__proto__"}/**
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
 */function CC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const SC=()=>CC().__FIREBASE_DEFAULTS__,xC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},IC=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&dc(e[1]);return t&&JSON.parse(t)},o_=()=>{try{return SC()||xC()||IC()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},kC=e=>{var t,n;return(n=(t=o_())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},TC=e=>{const t=kC(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},l_=()=>{var e;return(e=o_())===null||e===void 0?void 0:e.config};/**
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
 */class Jl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function NC(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[fl(JSON.stringify(n)),fl(JSON.stringify(o)),l].join(".")}/**
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
 */function RC(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function a_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(RC())}function PC(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function bC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u_(){return n_.NODE_ADMIN===!0}function c_(){try{return typeof indexedDB=="object"}catch{return!1}}function d_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function AC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const DC="FirebaseError";class Ir extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=DC,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zl.prototype.create)}}class Zl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?OC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ir(i,l,r)}}function OC(e,t){return e.replace(MC,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const MC=/\{\$([^}]+)}/g;/**
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
 */function Rs(e){return JSON.parse(e)}function Se(e){return JSON.stringify(e)}/**
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
 */const f_=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=Rs(dc(s[0])||""),n=Rs(dc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},LC=function(e){const t=f_(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},FC=function(e){const t=f_(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function cn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function yi(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Kh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function hl(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function pl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Yh(s)&&Yh(o)){if(!pl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yh(e){return e!==null&&typeof e=="object"}/**
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
 */function $C(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
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
 */class BC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let c=0;c<16;c++)r[c]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let c=16;c<80;c++){const d=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,f;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),f=1518500249):(u=s^o^l,f=1859775393):c<60?(u=s&o|l&(s|o),f=2400959708):(u=s^o^l,f=3395469782);const d=(i<<5|i>>>27)+u+a+f+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function Fd(e,t){return`${e} failed: ${t} argument `}/**
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
 */const jC=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},ea=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */const zC=1e3,WC=2,UC=4*60*60*1e3,HC=.5;function qh(e,t=zC,n=WC){const r=t*Math.pow(n,e),i=Math.round(HC*r*(Math.random()-.5)*2);return Math.min(UC,r+i)}/**
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
 */function Wn(e){return e&&e._delegate?e._delegate:e}class on{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Vn="[DEFAULT]";/**
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
 */class VC{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Jl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(QC(t))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Vn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vn){return this.instances.has(t)}getOptions(t=Vn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:GC(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Vn){return this.component?this.component.multipleInstances?t:Vn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function GC(e){return e===Vn?void 0:e}function QC(e){return e.instantiationMode==="EAGER"}/**
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
 */class KC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new VC(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const YC={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},qC=Y.INFO,XC={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},JC=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=XC[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class $d{constructor(t){this.name=t,this._logLevel=qC,this._logHandler=JC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?YC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const ZC=(e,t)=>t.some(n=>e instanceof n);let Xh,Jh;function eS(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function tS(){return Jh||(Jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h_=new WeakMap,fc=new WeakMap,p_=new WeakMap,Va=new WeakMap,Bd=new WeakMap;function nS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Pn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&h_.set(n,e)}).catch(()=>{}),Bd.set(t,e),t}function rS(e){if(fc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});fc.set(e,t)}let hc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return fc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||p_.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function iS(e){hc=e(hc)}function sS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ga(this),t,...n);return p_.set(r,t.sort?t.sort():[t]),Pn(r)}:tS().includes(e)?function(...t){return e.apply(Ga(this),t),Pn(h_.get(this))}:function(...t){return Pn(e.apply(Ga(this),t))}}function oS(e){return typeof e=="function"?sS(e):(e instanceof IDBTransaction&&rS(e),ZC(e,eS())?new Proxy(e,hc):e)}function Pn(e){if(e instanceof IDBRequest)return nS(e);if(Va.has(e))return Va.get(e);const t=oS(e);return t!==e&&(Va.set(e,t),Bd.set(t,e)),t}const Ga=e=>Bd.get(e);function lS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=Pn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Pn(o.result),a.oldVersion,a.newVersion,Pn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const aS=["get","getKey","getAll","getAllKeys","count"],uS=["put","add","delete","clear"],Qa=new Map;function Zh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Qa.get(t))return Qa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=uS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||aS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Qa.set(t,s),s}iS(e=>({...e,get:(t,n,r)=>Zh(t,n)||e.get(t,n,r),has:(t,n)=>!!Zh(t,n)||e.has(t,n)}));/**
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
 */class cS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(dS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function dS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const pc="@firebase/app",ep="0.9.11";/**
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
 */const pr=new $d("@firebase/app"),fS="@firebase/app-compat",hS="@firebase/analytics-compat",pS="@firebase/analytics",mS="@firebase/app-check-compat",gS="@firebase/app-check",yS="@firebase/auth",_S="@firebase/auth-compat",vS="@firebase/database",wS="@firebase/database-compat",ES="@firebase/functions",CS="@firebase/functions-compat",SS="@firebase/installations",xS="@firebase/installations-compat",IS="@firebase/messaging",kS="@firebase/messaging-compat",TS="@firebase/performance",NS="@firebase/performance-compat",RS="@firebase/remote-config",PS="@firebase/remote-config-compat",bS="@firebase/storage",AS="@firebase/storage-compat",DS="@firebase/firestore",OS="@firebase/firestore-compat",MS="firebase",LS="9.22.1";/**
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
 */const mc="[DEFAULT]",FS={[pc]:"fire-core",[fS]:"fire-core-compat",[pS]:"fire-analytics",[hS]:"fire-analytics-compat",[gS]:"fire-app-check",[mS]:"fire-app-check-compat",[yS]:"fire-auth",[_S]:"fire-auth-compat",[vS]:"fire-rtdb",[wS]:"fire-rtdb-compat",[ES]:"fire-fn",[CS]:"fire-fn-compat",[SS]:"fire-iid",[xS]:"fire-iid-compat",[IS]:"fire-fcm",[kS]:"fire-fcm-compat",[TS]:"fire-perf",[NS]:"fire-perf-compat",[RS]:"fire-rc",[PS]:"fire-rc-compat",[bS]:"fire-gcs",[AS]:"fire-gcs-compat",[DS]:"fire-fst",[OS]:"fire-fst-compat","fire-js":"fire-js",[MS]:"fire-js-all"};/**
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
 */const ml=new Map,gc=new Map;function $S(e,t){try{e.container.addComponent(t)}catch(n){pr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ln(e){const t=e.name;if(gc.has(t))return pr.debug(`There were multiple attempts to register component ${t}.`),!1;gc.set(t,e);for(const n of ml.values())$S(n,e);return!0}function Hs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const BS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new Zl("app","Firebase",BS);/**
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
 */class jS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const zS=LS;function m_(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:mc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=l_()),!n)throw bn.create("no-options");const s=ml.get(i);if(s){if(pl(n,s.options)&&pl(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const o=new KC(i);for(const a of gc.values())o.addComponent(a);const l=new jS(n,r,o);return ml.set(i,l),l}function g_(e=mc){const t=ml.get(e);if(!t&&e===mc&&l_())return m_();if(!t)throw bn.create("no-app",{appName:e});return t}function Ut(e,t,n){var r;let i=(r=FS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pr.warn(l.join(" "));return}Ln(new on(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const WS="firebase-heartbeat-database",US=1,Ps="firebase-heartbeat-store";let Ka=null;function y_(){return Ka||(Ka=lS(WS,US,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ps)}}}).catch(e=>{throw bn.create("idb-open",{originalErrorMessage:e.message})})),Ka}async function HS(e){try{return await(await y_()).transaction(Ps).objectStore(Ps).get(__(e))}catch(t){if(t instanceof Ir)pr.warn(t.message);else{const n=bn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pr.warn(n.message)}}}async function tp(e,t){try{const r=(await y_()).transaction(Ps,"readwrite");await r.objectStore(Ps).put(t,__(e)),await r.done}catch(n){if(n instanceof Ir)pr.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function __(e){return`${e.name}!${e.options.appId}`}/**
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
 */const VS=1024,GS=30*24*60*60*1e3;class QS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new YS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=np();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=GS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=np(),{heartbeatsToSend:n,unsentEntries:r}=KS(this._heartbeatsCache.heartbeats),i=fl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function np(){return new Date().toISOString().substring(0,10)}function KS(e,t=VS){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rp(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class YS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c_()?d_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await HS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function rp(e){return fl(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function qS(e){Ln(new on("platform-logger",t=>new cS(t),"PRIVATE")),Ln(new on("heartbeat",t=>new QS(t),"PRIVATE")),Ut(pc,ep,e),Ut(pc,ep,"esm2017"),Ut("fire-js","")}qS("");var XS="firebase",JS="9.22.1";/**
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
 */Ut(XS,JS,"app");const ip="@firebase/database",sp="0.14.4";/**
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
 */let v_="";function ZS(e){v_=e}/**
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
 */class ex{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Se(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Rs(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class tx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return cn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const w_=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new ex(t)}}catch{}return new tx},Xn=w_("localStorage"),yc=w_("sessionStorage");/**
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
 */const ei=new $d("@firebase/database"),nx=function(){let e=1;return function(){return e++}}(),E_=function(e){const t=jC(e),n=new BC;n.update(t);const r=n.digest();return Ld.encodeByteArray(r)},Vs=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Vs.apply(null,r):typeof r=="object"?t+=Se(r):t+=r,t+=" "}return t};let rr=null,op=!0;const rx=function(e,t){x(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(ei.logLevel=Y.VERBOSE,rr=ei.log.bind(ei),t&&yc.set("logging_enabled",!0)):typeof e=="function"?rr=e:(rr=null,yc.remove("logging_enabled"))},Le=function(...e){if(op===!0&&(op=!1,rr===null&&yc.get("logging_enabled")===!0&&rx(!0)),rr){const t=Vs.apply(null,e);rr(t)}},Gs=function(e){return function(...t){Le(e,...t)}},_c=function(...e){const t="FIREBASE INTERNAL ERROR: "+Vs(...e);ei.error(t)},ln=function(...e){const t=`FIREBASE FATAL ERROR: ${Vs(...e)}`;throw ei.error(t),new Error(t)},Je=function(...e){const t="FIREBASE WARNING: "+Vs(...e);ei.warn(t)},ix=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},C_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},sx=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",mr="[MAX_NAME]",Ti=function(e,t){if(e===t)return 0;if(e===_i||t===mr)return-1;if(t===_i||e===mr)return 1;{const n=lp(e),r=lp(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},ox=function(e,t){return e===t?0:e<t?-1:1},ji=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Se(t))},jd=function(e){if(typeof e!="object"||e===null)return Se(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Se(t[r]),n+=":",n+=jd(e[t[r]]);return n+="}",n},S_=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function et(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const x_=function(e){x(!C_(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,l,a;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=l+r,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=t;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const f=u.join("");let c="";for(a=0;a<64;a+=8){let d=parseInt(f.substr(a,8),2).toString(16);d.length===1&&(d="0"+d),c=c+d}return c.toLowerCase()},lx=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},ax=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ux(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const cx=new RegExp("^-?(0*)\\d{1,10}$"),dx=-2147483648,fx=2147483647,lp=function(e){if(cx.test(e)){const t=Number(e);if(t>=dx&&t<=fx)return t}return null},Ni=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Je("Exception was thrown by user callback.",n),t},Math.floor(0))}},hx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},os=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class px{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class mx{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(t)}}class ti{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}ti.OWNER="owner";/**
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
 */const zd="5",I_="v",k_="s",T_="r",N_="f",R_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,P_="ls",b_="p",vc="ac",A_="websocket",D_="long_polling";/**
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
 */class O_{constructor(t,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function gx(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function M_(e,t,n){x(typeof t=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(t===A_)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===D_)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);gx(e)&&(n.ns=e.namespace);const i=[];return et(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class yx{constructor(){this.counters_={}}incrementCounter(t,n=1){cn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return wC(this.counters_)}}/**
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
 */const Ya={},qa={};function Wd(e){const t=e.toString();return Ya[t]||(Ya[t]=new yx),Ya[t]}function _x(e,t){const n=e.toString();return qa[n]||(qa[n]=t()),qa[n]}/**
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
 */class vx{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ni(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ap="start",wx="close",Ex="pLPCommand",Cx="pRTLPCB",L_="id",F_="pw",$_="ser",Sx="cb",xx="seg",Ix="ts",kx="d",Tx="dframe",B_=1870,j_=30,Nx=B_-j_,Rx=25e3,Px=3e4;class Gr{constructor(t,n,r,i,s,o,l){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gs(t),this.stats_=Wd(n),this.urlFn=a=>(this.appCheckToken&&(a[vc]=this.appCheckToken),M_(n,D_,a))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new vx(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Px)),sx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ud((...s)=>{const[o,l,a,u,f]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ap)this.id=l,this.password=a;else if(o===wx)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[ap]="t",r[$_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Sx]=this.scriptTagHolder.uniqueCallbackIdentifier),r[I_]=zd,this.transportSessionId&&(r[k_]=this.transportSessionId),this.lastSessionId&&(r[P_]=this.lastSessionId),this.applicationId&&(r[b_]=this.applicationId),this.appCheckToken&&(r[vc]=this.appCheckToken),typeof location<"u"&&location.hostname&&R_.test(location.hostname)&&(r[T_]=N_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gr.forceAllow_=!0}static forceDisallow(){Gr.forceDisallow_=!0}static isAvailable(){return Gr.forceAllow_?!0:!Gr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lx()&&!ax()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Se(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=i_(n),i=S_(r,Nx);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Tx]="t",r[L_]=t,r[F_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Se(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Ud{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nx(),window[Ex+this.uniqueCallbackIdentifier]=t,window[Cx+this.uniqueCallbackIdentifier]=n,this.myIFrame=Ud.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[L_]=this.myID,t[F_]=this.myPW,t[$_]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+j_+r.length<=B_;){const o=this.pendingSegs.shift();r=r+"&"+xx+i+"="+o.seg+"&"+Ix+i+"="+o.ts+"&"+kx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Rx)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const bx=16384,Ax=45e3;let gl=null;typeof MozWebSocket<"u"?gl=MozWebSocket:typeof WebSocket<"u"&&(gl=WebSocket);class kt{constructor(t,n,r,i,s,o,l){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gs(this.connId),this.stats_=Wd(n),this.connURL=kt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[I_]=zd,typeof location<"u"&&location.hostname&&R_.test(location.hostname)&&(o[T_]=N_),n&&(o[k_]=n),r&&(o[P_]=r),i&&(o[vc]=i),s&&(o[b_]=s),M_(t,A_,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let r;u_(),this.mySock=new gl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&gl!==null&&!kt.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Rs(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(x(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Se(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=S_(n,bx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ax))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kt.responsesRequiredToBeHealthy=2;kt.healthyTimeout=3e4;/**
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
 */class bs{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Gr,kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=kt&&kt.isAvailable();let r=n&&!kt.previouslyFailed();if(t.webSocketOnly&&(n||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[kt];else{const i=this.transports_=[];for(const s of bs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);bs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}bs.globalTransportInitialized_=!1;/**
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
 */const Dx=6e4,Ox=5e3,Mx=10*1024,Lx=100*1024,Xa="t",up="d",Fx="s",cp="r",$x="e",dp="o",fp="a",hp="n",pp="p",Bx="h";class jx{constructor(t,n,r,i,s,o,l,a,u,f){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=f,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gs("c:"+this.id+":"),this.transportManager_=new bs(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=os(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Lx?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Mx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Xa in t){const n=t[Xa];n===fp?this.upgradeIfSecondaryHealthy_():n===cp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ji("t",t),r=ji("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ji("t",t),r=ji("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ji(Xa,t);if(up in t){const r=t[up];if(n===Bx){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===hp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Fx?this.onConnectionShutdown_(r):n===cp?this.onReset_(r):n===$x?_c("Server Error: "+r):n===dp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):_c("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),zd!==r&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),os(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Dx))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):os(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Ox))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pp,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class z_{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class W_{constructor(t){this.allowedEvents_=t,this.listeners_={},x(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){x(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class yl extends W_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!a_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new yl}getInitialEvent(t){return x(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const mp=32,gp=768;class Q{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function U(){return new Q("")}function L(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Fn(e){return e.pieces_.length-e.pieceNum_}function q(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Q(e.pieces_,t)}function U_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function zx(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function H_(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function V_(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Q(t,0)}function me(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Q)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function B(e){return e.pieceNum_>=e.pieces_.length}function Ge(e,t){const n=L(e),r=L(t);if(n===null)return t;if(n===r)return Ge(q(e),q(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Hd(e,t){if(Fn(e)!==Fn(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Tt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Fn(e)>Fn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Wx{constructor(t,n){this.errorPrefix_=n,this.parts_=H_(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ea(this.parts_[r]);G_(this)}}function Ux(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=ea(t),G_(e)}function Hx(e){const t=e.parts_.pop();e.byteLength_-=ea(t),e.parts_.length>0&&(e.byteLength_-=1)}function G_(e){if(e.byteLength_>gp)throw new Error(e.errorPrefix_+"has a key path longer than "+gp+" bytes ("+e.byteLength_+").");if(e.parts_.length>mp)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mp+") or object contains a cycle "+Gn(e))}function Gn(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class Vd extends W_{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Vd}getInitialEvent(t){return x(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const zi=1e3,Vx=60*5*1e3,yp=30*1e3,Gx=1.3,Qx=3e4,Kx="server_kill",_p=3;class en extends z_{constructor(t,n,r,i,s,o,l,a){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=en.nextPersistentConnectionId_++,this.log_=Gs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=Vx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!u_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vd.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&yl.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Se(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new Jl,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;en.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,a))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&cn(t,"w")){const r=yi(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||FC(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yp)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=LC(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Se(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):_c("Unrecognized action received from server: "+Se(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Qx&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Gx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+en.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const f=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,d]=await Promise.all([this.authTokenProvider_.getToken(f),this.appCheckTokenProvider_.getToken(f)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=d&&d.token,l=new jx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,h=>{Je(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(Kx)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Je(c),a())}}}interrupt(t){Le("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Le("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Kh(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>jd(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new Q(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Le("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_p&&(this.reconnectDelay_=yp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Le("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+v_.replace(/\./g,"-")]=1,a_()?t["framework.cordova"]=1:bC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=yl.getInstance().currentlyOnline();return Kh(this.interruptReasons_)&&t}}en.nextPersistentConnectionId_=0;en.nextConnectionId_=0;/**
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
 */class F{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new F(t,n)}}/**
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
 */class ta{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new F(_i,t),i=new F(_i,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let _o;class Q_ extends ta{static get __EMPTY_NODE(){return _o}static set __EMPTY_NODE(t){_o=t}compare(t,n){return Ti(t.name,n.name)}isDefinedOn(t){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return F.MIN}maxPost(){return new F(mr,_o)}makePost(t,n){return x(typeof t=="string","KeyIndex indexValue must always be a string."),new F(t,_o)}toString(){return".key"}}const ni=new Q_;/**
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
 */class vo{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ce{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Ce.RED,this.left=i??Qe.EMPTY_NODE,this.right=s??Qe.EMPTY_NODE}copy(t,n,r,i,s){return new Ce(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class Yx{copy(t,n,r,i,s){return this}insert(t,n,r){return new Ce(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(t,n=Qe.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Qe(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(t){return new Qe(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new vo(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new vo(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new vo(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new vo(this.root_,null,this.comparator_,!0,t)}}Qe.EMPTY_NODE=new Yx;/**
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
 */function qx(e,t){return Ti(e.name,t.name)}function Gd(e,t){return Ti(e,t)}/**
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
 */let wc;function Xx(e){wc=e}const K_=function(e){return typeof e=="number"?"number:"+x_(e):"string:"+e},Y_=function(e){if(e.isLeafNode()){const t=e.val();x(typeof t=="string"||typeof t=="number"||typeof t=="object"&&cn(t,".sv"),"Priority must be a string or number.")}else x(e===wc||e.isEmpty(),"priority of unexpected type.");x(e===wc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let vp;class ve{constructor(t,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Y_(this.priorityNode_)}static set __childrenNodeConstructor(t){vp=t}static get __childrenNodeConstructor(){return vp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new ve(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return B(t)?this:L(t)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=L(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Fn(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+K_(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=x_(this.value_):t+=this.value_,this.lazyHash_=E_(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===ve.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof ve.__childrenNodeConstructor?-1:(x(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let q_,X_;function Jx(e){q_=e}function Zx(e){X_=e}class eI extends ta{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ti(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(mr,new ve("[PRIORITY-POST]",X_))}makePost(t,n){const r=q_(t);return new F(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const ae=new eI;/**
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
 */const tI=Math.log(2);class nI{constructor(t){const n=s=>parseInt(Math.log(s)/tI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const _l=function(e,t,n,r){e.sort(t);const i=function(a,u){const f=u-a;let c,d;if(f===0)return null;if(f===1)return c=e[a],d=n?n(c):c,new Ce(d,c.node,Ce.BLACK,null,null);{const h=parseInt(f/2,10)+a,y=i(a,h),_=i(h+1,u);return c=e[h],d=n?n(c):c,new Ce(d,c.node,Ce.BLACK,y,_)}},s=function(a){let u=null,f=null,c=e.length;const d=function(y,_){const k=c-y,m=c;c-=y;const p=i(k+1,m),g=e[k],v=n?n(g):g;h(new Ce(v,g.node,_,null,p))},h=function(y){u?(u.left=y,u=y):(f=y,u=y)};for(let y=0;y<a.count;++y){const _=a.nextBitIsOne(),k=Math.pow(2,a.count-(y+1));_?d(k,Ce.BLACK):(d(k,Ce.BLACK),d(k,Ce.RED))}return f},o=new nI(e.length),l=s(o);return new Qe(r||t,l)};/**
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
 */let Ja;const br={};class Jt{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return x(br&&ae,"ChildrenNode.ts has not been loaded"),Ja=Ja||new Jt({".priority":br},{".priority":ae}),Ja}get(t){const n=yi(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Qe?n:null}hasIndex(t){return cn(this.indexSet_,t.toString())}addIndex(t,n){x(t!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=_l(r,t.getCompare()):l=br;const a=t.toString(),u=Object.assign({},this.indexSet_);u[a]=t;const f=Object.assign({},this.indexes_);return f[a]=l,new Jt(f,u)}addToIndexes(t,n){const r=hl(this.indexes_,(i,s)=>{const o=yi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===br)if(o.isDefinedOn(t.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==t.name&&l.push(u),u=a.getNext();return l.push(t),_l(l,o.getCompare())}else return br;else{const l=n.get(t.name);let a=i;return l&&(a=a.remove(new F(t.name,l))),a.insert(t,t.node)}});return new Jt(r,this.indexSet_)}removeFromIndexes(t,n){const r=hl(this.indexes_,i=>{if(i===br)return i;{const s=n.get(t.name);return s?i.remove(new F(t.name,s)):i}});return new Jt(r,this.indexSet_)}}/**
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
 */let Wi;class A{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Y_(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wi||(Wi=new A(new Qe(Gd),null,Jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wi}updatePriority(t){return this.children_.isEmpty()?this:new A(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Wi:n}}getChild(t){const n=L(t);return n===null?this:this.getImmediateChild(n).getChild(q(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(x(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new F(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wi:this.priorityNode_;return new A(i,o,s)}}updateChild(t,n){const r=L(t);if(r===null)return n;{x(L(t)!==".priority"||Fn(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(t),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+K_(this.getPriority().val())+":"),this.forEachChild(ae,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":E_(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new F(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new F(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Qs?-1:0}withIndex(t){if(t===ni||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===ni||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ae),i=n.getIterator(ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===ni?null:this.indexMap_.get(t.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rI extends A{constructor(){super(new Qe(Gd),A.EMPTY_NODE,Jt.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return A.EMPTY_NODE}isEmpty(){return!1}}const Qs=new rI;Object.defineProperties(F,{MIN:{value:new F(_i,A.EMPTY_NODE)},MAX:{value:new F(mr,Qs)}});Q_.__EMPTY_NODE=A.EMPTY_NODE;ve.__childrenNodeConstructor=A;Xx(Qs);Zx(Qs);/**
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
 */const iI=!0;function Te(e,t=null){if(e===null)return A.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),x(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new ve(n,Te(t))}if(!(e instanceof Array)&&iI){const n=[];let r=!1;if(et(e,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=_l(n,qx,o=>o.name,Gd);if(r){const o=_l(n,ae.getCompare());return new A(s,Te(t),new Jt({".priority":o},{".priority":ae}))}else return new A(s,Te(t),Jt.Default)}else{let n=A.EMPTY_NODE;return et(e,(r,i)=>{if(cn(e,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(t))}}Jx(Te);/**
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
 */class sI extends ta{constructor(t){super(),this.indexPath_=t,x(!B(t)&&L(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ti(t.name,n.name):s}makePost(t,n){const r=Te(t),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const t=A.EMPTY_NODE.updateChild(this.indexPath_,Qs);return new F(mr,t)}toString(){return H_(this.indexPath_,0).join("/")}}/**
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
 */class oI extends ta{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Ti(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(t,n){const r=Te(t);return new F(n,r)}toString(){return".value"}}const lI=new oI;/**
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
 */function J_(e){return{type:"value",snapshotNode:e}}function vi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function As(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ds(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function aI(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class Qd{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){x(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=t.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(As(n,l)):x(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(vi(n,r)):o.trackChildChange(Ds(n,r,l))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(ae,(i,s)=>{n.hasChild(i)||r.trackChildChange(As(i,s))}),n.isLeafNode()||n.forEachChild(ae,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ds(i,s,o))}else r.trackChildChange(vi(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?A.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Os{constructor(t){this.indexedFilter_=new Qd(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Os.getStartPost_(t),this.endPost_=Os.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ae,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class uI{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Os(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(d,h)=>c(h,d)}else o=this.index_.getCompare();const l=t;x(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),f=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let d=i.getChildAfterChild(this.index_,u,this.reverse_);for(;d!=null&&(d.name===n||l.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const h=d==null?1:o(d,a);if(f&&!r.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(Ds(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(As(n,c));const _=l.updateImmediateChild(n,A.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(s!=null&&s.trackChildChange(vi(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return r.isEmpty()?t:f&&o(u,a)>=0?(s!=null&&(s.trackChildChange(As(u.name,u.node)),s.trackChildChange(vi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):t}}/**
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
 */class Kd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const t=new Kd;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function cI(e){return e.loadsAllData()?new Qd(e.getIndex()):e.hasLimit()?new uI(e):new Os(e)}function wp(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ae?n="$priority":e.index_===lI?n="$value":e.index_===ni?n="$key":(x(e.index_ instanceof sI,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Se(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Se(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Se(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Se(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Se(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ep(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==ae&&(t.i=e.index_.toString()),t}/**
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
 */class vl extends z_{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Gs("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(x(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=vl.getListenId_(t,r),l={};this.listens_[o]=l;const a=wp(t._queryParams);this.restRequest_(s+".json",a,(u,f)=>{let c=f;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),yi(this.listens_,o)===l){let d;u?u===401?d="permission_denied":d="rest_error:"+u:d="ok",i(d,null)}})}unlisten(t,n){const r=vl.getListenId_(t,n);delete this.listens_[r]}get(t){const n=wp(t._queryParams),r=t._path.toString(),i=new Jl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+$C(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Rs(l.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class dI{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function wl(){return{value:null,children:new Map}}function Z_(e,t,n){if(B(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=L(t);e.children.has(r)||e.children.set(r,wl());const i=e.children.get(r);t=q(t),Z_(i,t,n)}}function Ec(e,t,n){e.value!==null?n(t,e.value):fI(e,(r,i)=>{const s=new Q(t.toString()+"/"+r);Ec(i,s,n)})}function fI(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class hI{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&et(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const Cp=10*1e3,pI=30*1e3,mI=5*60*1e3;class gI{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new hI(t);const r=Cp+(pI-Cp)*Math.random();os(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;et(t,(i,s)=>{s>0&&cn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),os(this.reportStats_.bind(this),Math.floor(Math.random()*2*mI))}}/**
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
 */var Nt;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nt||(Nt={}));function ev(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function qd(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class El{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Nt.ACK_USER_WRITE,this.source=ev()}operationForChild(t){if(B(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(t));return new El(U(),n,this.revert)}}else return x(L(this.path)===t,"operationForChild called for unrelated child."),new El(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ms{constructor(t,n){this.source=t,this.path=n,this.type=Nt.LISTEN_COMPLETE}operationForChild(t){return B(this.path)?new Ms(this.source,U()):new Ms(this.source,q(this.path))}}/**
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
 */class gr{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Nt.OVERWRITE}operationForChild(t){return B(this.path)?new gr(this.source,U(),this.snap.getImmediateChild(t)):new gr(this.source,q(this.path),this.snap)}}/**
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
 */class Ls{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Nt.MERGE}operationForChild(t){if(B(this.path)){const n=this.children.subtree(new Q(t));return n.isEmpty()?null:n.value?new gr(this.source,U(),n.value):new Ls(this.source,U(),n)}else return x(L(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Ls(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class yr{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(B(t))return this.isFullyInitialized()&&!this.filtered_;const n=L(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class yI{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function _I(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(aI(o.childName,o.snapshotNode))}),Ui(e,i,"child_removed",t,r,n),Ui(e,i,"child_added",t,r,n),Ui(e,i,"child_moved",s,r,n),Ui(e,i,"child_changed",t,r,n),Ui(e,i,"value",t,r,n),i}function Ui(e,t,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>wI(e,l,a)),o.forEach(l=>{const a=vI(e,l,s);i.forEach(u=>{u.respondsTo(l.type)&&t.push(u.createEvent(a,e.query_))})})}function vI(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function wI(e,t,n){if(t.childName==null||n.childName==null)throw ki("Should only compare child_ events.");const r=new F(t.childName,t.snapshotNode),i=new F(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function na(e,t){return{eventCache:e,serverCache:t}}function ls(e,t,n,r){return na(new yr(t,n,r),e.serverCache)}function tv(e,t,n,r){return na(e.eventCache,new yr(t,n,r))}function Cc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function _r(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Za;const EI=()=>(Za||(Za=new Qe(ox)),Za);class ee{constructor(t,n=EI()){this.value=t,this.children=n}static fromObject(t){let n=new ee(null);return et(t,(r,i)=>{n=n.set(new Q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:U(),value:this.value};if(B(t))return null;{const r=L(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(t),n);return s!=null?{path:me(new Q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(B(t))return this;{const n=L(t),r=this.children.get(n);return r!==null?r.subtree(q(t)):new ee(null)}}set(t,n){if(B(t))return new ee(n,this.children);{const r=L(t),s=(this.children.get(r)||new ee(null)).set(q(t),n),o=this.children.insert(r,s);return new ee(this.value,o)}}remove(t){if(B(t))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=L(t),r=this.children.get(n);if(r){const i=r.remove(q(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ee(null):new ee(this.value,s)}else return this}}get(t){if(B(t))return this.value;{const n=L(t),r=this.children.get(n);return r?r.get(q(t)):null}}setTree(t,n){if(B(t))return n;{const r=L(t),s=(this.children.get(r)||new ee(null)).setTree(q(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ee(this.value,o)}}fold(t){return this.fold_(U(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(me(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,U(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(t))return null;{const s=L(t),o=this.children.get(s);return o?o.findOnPath_(q(t),me(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,U(),n)}foreachOnPath_(t,n,r){if(B(t))return this;{this.value&&r(n,this.value);const i=L(t),s=this.children.get(i);return s?s.foreachOnPath_(q(t),me(n,i),r):new ee(null)}}foreach(t){this.foreach_(U(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(me(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class At{constructor(t){this.writeTree_=t}static empty(){return new At(new ee(null))}}function as(e,t,n){if(B(t))return new At(new ee(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=Ge(i,t);return s=s.updateChild(o,n),new At(e.writeTree_.set(i,s))}else{const i=new ee(n),s=e.writeTree_.setTree(t,i);return new At(s)}}}function Sp(e,t,n){let r=e;return et(n,(i,s)=>{r=as(r,me(t,i),s)}),r}function xp(e,t){if(B(t))return At.empty();{const n=e.writeTree_.setTree(t,new ee(null));return new At(n)}}function Sc(e,t){return kr(e,t)!=null}function kr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Ge(n.path,t)):null}function Ip(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(r,i)=>{t.push(new F(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new F(r,i.value))}),t}function An(e,t){if(B(t))return e;{const n=kr(e,t);return n!=null?new At(new ee(n)):new At(e.writeTree_.subtree(t))}}function xc(e){return e.writeTree_.isEmpty()}function wi(e,t){return nv(U(),e.writeTree_,t)}function nv(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=nv(me(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(me(e,".priority"),r)),n}}/**
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
 */function Xd(e,t){return ov(t,e)}function CI(e,t,n,r,i){x(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=as(e.visibleWrites,t,n)),e.lastWriteId=r}function SI(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function xI(e,t){const n=e.allWrites.findIndex(l=>l.writeId===t);x(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const l=e.allWrites[o];l.visible&&(o>=n&&II(l,r.path)?i=!1:Tt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return kI(e),!0;if(r.snap)e.visibleWrites=xp(e.visibleWrites,r.path);else{const l=r.children;et(l,a=>{e.visibleWrites=xp(e.visibleWrites,me(r.path,a))})}return!0}else return!1}function II(e,t){if(e.snap)return Tt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Tt(me(e.path,n),t))return!0;return!1}function kI(e){e.visibleWrites=rv(e.allWrites,TI,U()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function TI(e){return e.visible}function rv(e,t,n){let r=At.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let l;if(s.snap)Tt(n,o)?(l=Ge(n,o),r=as(r,l,s.snap)):Tt(o,n)&&(l=Ge(o,n),r=as(r,U(),s.snap.getChild(l)));else if(s.children){if(Tt(n,o))l=Ge(n,o),r=Sp(r,l,s.children);else if(Tt(o,n))if(l=Ge(o,n),B(l))r=Sp(r,U(),s.children);else{const a=yi(s.children,L(l));if(a){const u=a.getChild(q(l));r=as(r,U(),u)}}}else throw ki("WriteRecord should have .snap or .children")}}return r}function iv(e,t,n,r,i){if(!r&&!i){const s=kr(e.visibleWrites,t);if(s!=null)return s;{const o=An(e.visibleWrites,t);if(xc(o))return n;if(n==null&&!Sc(o,U()))return null;{const l=n||A.EMPTY_NODE;return wi(o,l)}}}else{const s=An(e.visibleWrites,t);if(!i&&xc(s))return n;if(!i&&n==null&&!Sc(s,U()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Tt(u.path,t)||Tt(t,u.path))},l=rv(e.allWrites,o,t),a=n||A.EMPTY_NODE;return wi(l,a)}}}function NI(e,t,n){let r=A.EMPTY_NODE;const i=kr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=An(e.visibleWrites,t);return n.forEachChild(ae,(o,l)=>{const a=wi(An(s,new Q(o)),l);r=r.updateImmediateChild(o,a)}),Ip(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=An(e.visibleWrites,t);return Ip(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function RI(e,t,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=me(t,n);if(Sc(e.visibleWrites,s))return null;{const o=An(e.visibleWrites,s);return xc(o)?i.getChild(n):wi(o,i.getChild(n))}}function PI(e,t,n,r){const i=me(t,n),s=kr(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=An(e.visibleWrites,i);return wi(o,r.getNode().getImmediateChild(n))}else return null}function bI(e,t){return kr(e.visibleWrites,t)}function AI(e,t,n,r,i,s,o){let l;const a=An(e.visibleWrites,t),u=kr(a,U());if(u!=null)l=u;else if(n!=null)l=wi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const f=[],c=o.getCompare(),d=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let h=d.getNext();for(;h&&f.length<i;)c(h,r)!==0&&f.push(h),h=d.getNext();return f}else return[]}function DI(){return{visibleWrites:At.empty(),allWrites:[],lastWriteId:-1}}function Cl(e,t,n,r){return iv(e.writeTree,e.treePath,t,n,r)}function Jd(e,t){return NI(e.writeTree,e.treePath,t)}function kp(e,t,n,r){return RI(e.writeTree,e.treePath,t,n,r)}function Sl(e,t){return bI(e.writeTree,me(e.treePath,t))}function OI(e,t,n,r,i,s){return AI(e.writeTree,e.treePath,t,n,r,i,s)}function Zd(e,t,n){return PI(e.writeTree,e.treePath,t,n)}function sv(e,t){return ov(me(e.treePath,t),e.writeTree)}function ov(e,t){return{treePath:e,writeTree:t}}/**
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
 */class MI{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ds(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,As(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,vi(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ds(r,t.snapshotNode,i.oldSnap));else throw ki("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class LI{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const lv=new LI;class ef{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Zd(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_r(this.viewCache_),s=OI(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
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
 */function FI(e){return{filter:e}}function $I(e,t){x(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),x(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function BI(e,t,n,r,i){const s=new MI;let o,l;if(n.type===Nt.OVERWRITE){const u=n;u.source.fromUser?o=Ic(e,t,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered()&&!B(u.path),o=xl(e,t,u.path,u.snap,r,i,l,s))}else if(n.type===Nt.MERGE){const u=n;u.source.fromUser?o=zI(e,t,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered(),o=kc(e,t,u.path,u.children,r,i,l,s))}else if(n.type===Nt.ACK_USER_WRITE){const u=n;u.revert?o=HI(e,t,u.path,r,i,s):o=WI(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===Nt.LISTEN_COMPLETE)o=UI(e,t,n.path,r,s);else throw ki("Unknown operation type: "+n.type);const a=s.getChanges();return jI(t,o,a),{viewCache:o,changes:a}}function jI(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Cc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(J_(Cc(t)))}}function av(e,t,n,r,i,s){const o=t.eventCache;if(Sl(r,n)!=null)return t;{let l,a;if(B(n))if(x(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=_r(t),f=u instanceof A?u:A.EMPTY_NODE,c=Jd(r,f);l=e.filter.updateFullNode(t.eventCache.getNode(),c,s)}else{const u=Cl(r,_r(t));l=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){x(Fn(n)===1,"Can't have a priority with additional path components");const f=o.getNode();a=t.serverCache.getNode();const c=kp(r,n,f,a);c!=null?l=e.filter.updatePriority(f,c):l=o.getNode()}else{const f=q(n);let c;if(o.isCompleteForChild(u)){a=t.serverCache.getNode();const d=kp(r,n,o.getNode(),a);d!=null?c=o.getNode().getImmediateChild(u).updateChild(f,d):c=o.getNode().getImmediateChild(u)}else c=Zd(r,u,t.serverCache);c!=null?l=e.filter.updateChild(o.getNode(),u,c,f,i,s):l=o.getNode()}}return ls(t,l,o.isFullyInitialized()||B(n),e.filter.filtersNodes())}}function xl(e,t,n,r,i,s,o,l){const a=t.serverCache;let u;const f=o?e.filter:e.filter.getIndexedFilter();if(B(n))u=f.updateFullNode(a.getNode(),r,null);else if(f.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(n,r);u=f.updateFullNode(a.getNode(),h,null)}else{const h=L(n);if(!a.isCompleteForPath(n)&&Fn(n)>1)return t;const y=q(n),k=a.getNode().getImmediateChild(h).updateChild(y,r);h===".priority"?u=f.updatePriority(a.getNode(),k):u=f.updateChild(a.getNode(),h,k,y,lv,null)}const c=tv(t,u,a.isFullyInitialized()||B(n),f.filtersNodes()),d=new ef(i,c,s);return av(e,c,n,i,d,l)}function Ic(e,t,n,r,i,s,o){const l=t.eventCache;let a,u;const f=new ef(i,t,s);if(B(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),a=ls(t,u,!0,e.filter.filtersNodes());else{const c=L(n);if(c===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),a=ls(t,u,l.isFullyInitialized(),l.isFiltered());else{const d=q(n),h=l.getNode().getImmediateChild(c);let y;if(B(d))y=r;else{const _=f.getCompleteChild(c);_!=null?U_(d)===".priority"&&_.getChild(V_(d)).isEmpty()?y=_:y=_.updateChild(d,r):y=A.EMPTY_NODE}if(h.equals(y))a=t;else{const _=e.filter.updateChild(l.getNode(),c,y,d,f,o);a=ls(t,_,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function Tp(e,t){return e.eventCache.isCompleteForChild(t)}function zI(e,t,n,r,i,s,o){let l=t;return r.foreach((a,u)=>{const f=me(n,a);Tp(t,L(f))&&(l=Ic(e,l,f,u,i,s,o))}),r.foreach((a,u)=>{const f=me(n,a);Tp(t,L(f))||(l=Ic(e,l,f,u,i,s,o))}),l}function Np(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function kc(e,t,n,r,i,s,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a=t,u;B(n)?u=r:u=new ee(null).setTree(n,r);const f=t.serverCache.getNode();return u.children.inorderTraversal((c,d)=>{if(f.hasChild(c)){const h=t.serverCache.getNode().getImmediateChild(c),y=Np(e,h,d);a=xl(e,a,new Q(c),y,i,s,o,l)}}),u.children.inorderTraversal((c,d)=>{const h=!t.serverCache.isCompleteForChild(c)&&d.value===null;if(!f.hasChild(c)&&!h){const y=t.serverCache.getNode().getImmediateChild(c),_=Np(e,y,d);a=xl(e,a,new Q(c),_,i,s,o,l)}}),a}function WI(e,t,n,r,i,s,o){if(Sl(i,n)!=null)return t;const l=t.serverCache.isFiltered(),a=t.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return xl(e,t,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let u=new ee(null);return a.getNode().forEachChild(ni,(f,c)=>{u=u.set(new Q(f),c)}),kc(e,t,n,u,i,s,l,o)}else return t}else{let u=new ee(null);return r.foreach((f,c)=>{const d=me(n,f);a.isCompleteForPath(d)&&(u=u.set(f,a.getNode().getChild(d)))}),kc(e,t,n,u,i,s,l,o)}}function UI(e,t,n,r,i){const s=t.serverCache,o=tv(t,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return av(e,o,n,r,lv,i)}function HI(e,t,n,r,i,s){let o;if(Sl(r,n)!=null)return t;{const l=new ef(r,t,i),a=t.eventCache.getNode();let u;if(B(n)||L(n)===".priority"){let f;if(t.serverCache.isFullyInitialized())f=Cl(r,_r(t));else{const c=t.serverCache.getNode();x(c instanceof A,"serverChildren would be complete if leaf node"),f=Jd(r,c)}f=f,u=e.filter.updateFullNode(a,f,s)}else{const f=L(n);let c=Zd(r,f,t.serverCache);c==null&&t.serverCache.isCompleteForChild(f)&&(c=a.getImmediateChild(f)),c!=null?u=e.filter.updateChild(a,f,c,q(n),l,s):t.eventCache.getNode().hasChild(f)?u=e.filter.updateChild(a,f,A.EMPTY_NODE,q(n),l,s):u=a,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Cl(r,_r(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||Sl(r,U())!=null,ls(t,u,o,e.filter.filtersNodes())}}/**
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
 */class VI{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Qd(r.getIndex()),s=cI(r);this.processor_=FI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),f=new yr(a,o.isFullyInitialized(),i.filtersNodes()),c=new yr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=na(c,f),this.eventGenerator_=new yI(this.query_)}get query(){return this.query_}}function GI(e){return e.viewCache_.serverCache.getNode()}function QI(e,t){const n=_r(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!B(t)&&!n.getImmediateChild(L(t)).isEmpty())?n.getChild(t):null}function Rp(e){return e.eventRegistrations_.length===0}function KI(e,t){e.eventRegistrations_.push(t)}function Pp(e,t,n){const r=[];if(n){x(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function bp(e,t,n,r){t.type===Nt.MERGE&&t.source.queryId!==null&&(x(_r(e.viewCache_),"We should always have a full cache before handling merges"),x(Cc(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=BI(e.processor_,i,t,n,r);return $I(e.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,uv(e,s.changes,s.viewCache.eventCache.getNode(),null)}function YI(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(s,o)=>{r.push(vi(s,o))}),n.isFullyInitialized()&&r.push(J_(n.getNode())),uv(e,r,n.getNode(),t)}function uv(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return _I(e.eventGenerator_,t,n,i)}/**
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
 */let Il;class qI{constructor(){this.views=new Map}}function XI(e){x(!Il,"__referenceConstructor has already been defined"),Il=e}function JI(){return x(Il,"Reference.ts has not been loaded"),Il}function ZI(e){return e.views.size===0}function tf(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),bp(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(bp(o,t,n,r));return s}}function ek(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let l=Cl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Jd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=na(new yr(l,a,!1),new yr(r,i,!1));return new VI(t,u)}return o}function tk(e,t,n,r,i,s){const o=ek(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),KI(o,n),YI(o,n)}function nk(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const l=$n(e);if(i==="default")for(const[a,u]of e.views.entries())o=o.concat(Pp(u,n,r)),Rp(u)&&(e.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=e.views.get(i);a&&(o=o.concat(Pp(a,n,r)),Rp(a)&&(e.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!$n(e)&&s.push(new(JI())(t._repo,t._path)),{removed:s,events:o}}function cv(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ri(e,t){let n=null;for(const r of e.views.values())n=n||QI(r,t);return n}function dv(e,t){if(t._queryParams.loadsAllData())return ra(e);{const r=t._queryIdentifier;return e.views.get(r)}}function fv(e,t){return dv(e,t)!=null}function $n(e){return ra(e)!=null}function ra(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let kl;function rk(e){x(!kl,"__referenceConstructor has already been defined"),kl=e}function ik(){return x(kl,"Reference.ts has not been loaded"),kl}let sk=1;class Ap{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ee(null),this.pendingWriteTree_=DI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hv(e,t,n,r,i){return CI(e.pendingWriteTree_,t,n,r,i),i?Ks(e,new gr(ev(),t,n)):[]}function Jn(e,t,n=!1){const r=SI(e.pendingWriteTree_,t);if(xI(e.pendingWriteTree_,t)){let s=new ee(null);return r.snap!=null?s=s.set(U(),!0):et(r.children,o=>{s=s.set(new Q(o),!0)}),Ks(e,new El(r.path,s,n))}else return[]}function ia(e,t,n){return Ks(e,new gr(Yd(),t,n))}function ok(e,t,n){const r=ee.fromObject(n);return Ks(e,new Ls(Yd(),t,r))}function lk(e,t){return Ks(e,new Ms(Yd(),t))}function ak(e,t,n){const r=rf(e,n);if(r){const i=sf(r),s=i.path,o=i.queryId,l=Ge(s,t),a=new Ms(qd(o),l);return of(e,s,a)}else return[]}function Tc(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let l=[];if(o&&(t._queryIdentifier==="default"||fv(o,t))){const a=nk(o,t,n,r);ZI(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const f=u.findIndex(d=>d._queryParams.loadsAllData())!==-1,c=e.syncPointTree_.findOnPath(s,(d,h)=>$n(h));if(f&&!c){const d=e.syncPointTree_.subtree(s);if(!d.isEmpty()){const h=dk(d);for(let y=0;y<h.length;++y){const _=h[y],k=_.query,m=gv(e,_);e.listenProvider_.startListening(us(k),Tl(e,k),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(f?e.listenProvider_.stopListening(us(t),null):u.forEach(d=>{const h=e.queryToTagMap.get(sa(d));e.listenProvider_.stopListening(us(d),h)}))}fk(e,u)}return l}function uk(e,t,n,r){const i=rf(e,r);if(i!=null){const s=sf(i),o=s.path,l=s.queryId,a=Ge(o,t),u=new gr(qd(l),a,n);return of(e,o,u)}else return[]}function ck(e,t,n,r){const i=rf(e,r);if(i){const s=sf(i),o=s.path,l=s.queryId,a=Ge(o,t),u=ee.fromObject(n),f=new Ls(qd(l),a,u);return of(e,o,f)}else return[]}function Dp(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(d,h)=>{const y=Ge(d,i);s=s||ri(h,y),o=o||$n(h)});let l=e.syncPointTree_.get(i);l?(o=o||$n(l),s=s||ri(l,U())):(l=new qI,e.syncPointTree_=e.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((h,y)=>{const _=ri(y,U());_&&(s=s.updateImmediateChild(h,_))}));const u=fv(l,t);if(!u&&!t._queryParams.loadsAllData()){const d=sa(t);x(!e.queryToTagMap.has(d),"View does not exist, but we have a tag");const h=hk();e.queryToTagMap.set(d,h),e.tagToQueryMap.set(h,d)}const f=Xd(e.pendingWriteTree_,i);let c=tk(l,t,n,f,s,a);if(!u&&!o&&!r){const d=dv(l,t);c=c.concat(pk(e,t,d))}return c}function nf(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,l)=>{const a=Ge(o,t),u=ri(l,a);if(u)return u});return iv(i,t,s,n,!0)}function Ks(e,t){return pv(t,e.syncPointTree_,null,Xd(e.pendingWriteTree_,U()))}function pv(e,t,n,r){if(B(e.path))return mv(e,t,n,r);{const i=t.get(U());n==null&&i!=null&&(n=ri(i,U()));let s=[];const o=L(e.path),l=e.operationForChild(o),a=t.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,f=sv(r,o);s=s.concat(pv(l,a,u,f))}return i&&(s=s.concat(tf(i,e,r,n))),s}}function mv(e,t,n,r){const i=t.get(U());n==null&&i!=null&&(n=ri(i,U()));let s=[];return t.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=sv(r,o),f=e.operationForChild(o);f&&(s=s.concat(mv(f,l,a,u)))}),i&&(s=s.concat(tf(i,e,r,n))),s}function gv(e,t){const n=t.query,r=Tl(e,n);return{hashFn:()=>(GI(t)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ak(e,n._path,r):lk(e,n._path);{const s=ux(i,n);return Tc(e,n,null,s)}}}}function Tl(e,t){const n=sa(t);return e.queryToTagMap.get(n)}function sa(e){return e._path.toString()+"$"+e._queryIdentifier}function rf(e,t){return e.tagToQueryMap.get(t)}function sf(e){const t=e.indexOf("$");return x(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Q(e.substr(0,t))}}function of(e,t,n){const r=e.syncPointTree_.get(t);x(r,"Missing sync point for query tag that we're tracking");const i=Xd(e.pendingWriteTree_,t);return tf(r,n,i,null)}function dk(e){return e.fold((t,n,r)=>{if(n&&$n(n))return[ra(n)];{let i=[];return n&&(i=cv(n)),et(r,(s,o)=>{i=i.concat(o)}),i}})}function us(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ik())(e._repo,e._path):e}function fk(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=sa(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function hk(){return sk++}function pk(e,t,n){const r=t._path,i=Tl(e,t),s=gv(e,n),o=e.listenProvider_.startListening(us(t),i,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(r);if(i)x(!$n(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,f,c)=>{if(!B(u)&&f&&$n(f))return[ra(f).query];{let d=[];return f&&(d=d.concat(cv(f).map(h=>h.query))),et(c,(h,y)=>{d=d.concat(y)}),d}});for(let u=0;u<a.length;++u){const f=a[u];e.listenProvider_.stopListening(us(f),Tl(e,f))}}return o}/**
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
 */class lf{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new lf(n)}node(){return this.node_}}class af{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=me(this.path_,t);return new af(this.syncTree_,n)}node(){return nf(this.syncTree_,this.path_)}}const mk=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Op=function(e,t,n){if(!e||typeof e!="object")return e;if(x(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return gk(e[".sv"],t,n);if(typeof e[".sv"]=="object")return yk(e[".sv"],t);x(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},gk=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+e)}},yk=function(e,t,n){e.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=t.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},_k=function(e,t,n,r){return uf(t,new af(n,e),r)},yv=function(e,t,n){return uf(e,new lf(t),n)};function uf(e,t,n){const r=e.getPriority().val(),i=Op(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,l=Op(o.getValue(),t,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Te(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(ae,(l,a)=>{const u=uf(a,t.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class cf{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function df(e,t){let n=t instanceof Q?t:new Q(t),r=e,i=L(n);for(;i!==null;){const s=yi(r.node.children,i)||{children:{},childCount:0};r=new cf(i,r,s),n=q(n),i=L(n)}return r}function Ri(e){return e.node.value}function _v(e,t){e.node.value=t,Nc(e)}function vv(e){return e.node.childCount>0}function vk(e){return Ri(e)===void 0&&!vv(e)}function oa(e,t){et(e.node.children,(n,r)=>{t(new cf(n,e,r))})}function wv(e,t,n,r){n&&!r&&t(e),oa(e,i=>{wv(i,t,!0,r)}),n&&r&&t(e)}function wk(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Ys(e){return new Q(e.parent===null?e.name:Ys(e.parent)+"/"+e.name)}function Nc(e){e.parent!==null&&Ek(e.parent,e.name,e)}function Ek(e,t,n){const r=vk(n),i=cn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Nc(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Nc(e))}/**
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
 */const Ck=/[\[\].#$\/\u0000-\u001F\u007F]/,Sk=/[\[\].#$\u0000-\u001F\u007F]/,eu=10*1024*1024,Ev=function(e){return typeof e=="string"&&e.length!==0&&!Ck.test(e)},Cv=function(e){return typeof e=="string"&&e.length!==0&&!Sk.test(e)},xk=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Cv(e)},Sv=function(e,t,n,r){r&&t===void 0||ff(Fd(e,"value"),t,n)},ff=function(e,t,n){const r=n instanceof Q?new Wx(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Gn(r));if(typeof t=="function")throw new Error(e+"contains a function "+Gn(r)+" with contents = "+t.toString());if(C_(t))throw new Error(e+"contains "+t.toString()+" "+Gn(r));if(typeof t=="string"&&t.length>eu/3&&ea(t)>eu)throw new Error(e+"contains a string greater than "+eu+" utf8 bytes "+Gn(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(et(t,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ev(o)))throw new Error(e+" contains an invalid key ("+o+") "+Gn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Ux(r,o),ff(e,l,r),Hx(r)}),i&&s)throw new Error(e+' contains ".value" child '+Gn(r)+" in addition to actual children.")}},xv=function(e,t,n,r){if(!(r&&n===void 0)&&!Cv(n))throw new Error(Fd(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Ik=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),xv(e,t,n,r)},Iv=function(e,t){if(L(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},kk=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Ev(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xk(n))throw new Error(Fd(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Tk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function hf(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!Hd(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function kv(e,t,n){hf(e,n),Tv(e,r=>Hd(r,t))}function an(e,t,n){hf(e,n),Tv(e,r=>Tt(r,t)||Tt(t,r))}function Tv(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(Nk(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Nk(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();rr&&Le("event: "+n.toString()),Ni(r)}}}/**
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
 */const Rk="repo_interrupt",Pk=25;class bk{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Tk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wl(),this.transactionQueueTree_=new cf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ak(e,t,n){if(e.stats_=Wd(e.repoInfo_),e.forceRestClient_||hx())e.server_=new vl(e.repoInfo_,(r,i,s,o)=>{Mp(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Lp(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new en(e.repoInfo_,t,(r,i,s,o)=>{Mp(e,r,i,s,o)},r=>{Lp(e,r)},r=>{Dk(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=_x(e.repoInfo_,()=>new gI(e.stats_,e.server_)),e.infoData_=new dI,e.infoSyncTree_=new Ap({startListening:(r,i,s,o)=>{let l=[];const a=e.infoData_.getNode(r._path);return a.isEmpty()||(l=ia(e.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),mf(e,"connected",!1),e.serverSyncTree_=new Ap({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);an(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function Nv(e){const n=e.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function pf(e){return mk({timestamp:Nv(e)})}function Mp(e,t,n,r,i){e.dataUpdateCount++;const s=new Q(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const a=hl(n,u=>Te(u));o=ck(e.serverSyncTree_,s,a,i)}else{const a=Te(n);o=uk(e.serverSyncTree_,s,a,i)}else if(r){const a=hl(n,u=>Te(u));o=ok(e.serverSyncTree_,s,a)}else{const a=Te(n);o=ia(e.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=la(e,s)),an(e.eventQueue_,l,o)}function Lp(e,t){mf(e,"connected",t),t===!1&&Mk(e)}function Dk(e,t){et(t,(n,r)=>{mf(e,n,r)})}function mf(e,t,n){const r=new Q("/.info/"+t),i=Te(n);e.infoData_.updateSnapshot(r,i);const s=ia(e.infoSyncTree_,r,i);an(e.eventQueue_,r,s)}function Rv(e){return e.nextWriteId_++}function Ok(e,t,n,r,i){gf(e,"set",{path:t.toString(),value:n,priority:r});const s=pf(e),o=Te(n,r),l=nf(e.serverSyncTree_,t),a=yv(o,l,s),u=Rv(e),f=hv(e.serverSyncTree_,t,a,u,!0);hf(e.eventQueue_,f),e.server_.put(t.toString(),o.val(!0),(d,h)=>{const y=d==="ok";y||Je("set at "+t+" failed: "+d);const _=Jn(e.serverSyncTree_,u,!y);an(e.eventQueue_,t,_),$k(e,i,d,h)});const c=Ov(e,t);la(e,c),an(e.eventQueue_,c,[])}function Mk(e){gf(e,"onDisconnectEvents");const t=pf(e),n=wl();Ec(e.onDisconnect_,U(),(i,s)=>{const o=_k(i,s,e.serverSyncTree_,t);Z_(n,i,o)});let r=[];Ec(n,U(),(i,s)=>{r=r.concat(ia(e.serverSyncTree_,i,s));const o=Ov(e,i);la(e,o)}),e.onDisconnect_=wl(),an(e.eventQueue_,U(),r)}function Lk(e,t,n){let r;L(t._path)===".info"?r=Dp(e.infoSyncTree_,t,n):r=Dp(e.serverSyncTree_,t,n),kv(e.eventQueue_,t._path,r)}function Fp(e,t,n){let r;L(t._path)===".info"?r=Tc(e.infoSyncTree_,t,n):r=Tc(e.serverSyncTree_,t,n),kv(e.eventQueue_,t._path,r)}function Fk(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Rk)}function gf(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Le(n,...t)}function $k(e,t,n,r){t&&Ni(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,t(o)}})}function Pv(e,t,n){return nf(e.serverSyncTree_,t,n)||A.EMPTY_NODE}function yf(e,t=e.transactionQueueTree_){if(t||aa(e,t),Ri(t)){const n=Av(e,t);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&Bk(e,Ys(t),n)}else vv(t)&&oa(t,n=>{yf(e,n)})}function Bk(e,t,n){const r=n.map(u=>u.currentWriteId),i=Pv(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const f=n[u];x(f.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),f.status=1,f.retryCount++;const c=Ge(t,f.path);s=s.updateChild(c,f.currentOutputSnapshotRaw)}const l=s.val(!0),a=t;e.server_.put(a.toString(),l,u=>{gf(e,"transaction put response",{path:a.toString(),status:u});let f=[];if(u==="ok"){const c=[];for(let d=0;d<n.length;d++)n[d].status=2,f=f.concat(Jn(e.serverSyncTree_,n[d].currentWriteId)),n[d].onComplete&&c.push(()=>n[d].onComplete(null,!0,n[d].currentOutputSnapshotResolved)),n[d].unwatcher();aa(e,df(e.transactionQueueTree_,t)),yf(e,e.transactionQueueTree_),an(e.eventQueue_,t,f);for(let d=0;d<c.length;d++)Ni(c[d])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Je("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}la(e,t)}},o)}function la(e,t){const n=bv(e,t),r=Ys(n),i=Av(e,n);return jk(e,i,r),r}function jk(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<t.length;l++){const a=t[l],u=Ge(n,a.path);let f=!1,c;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)f=!0,c=a.abortReason,i=i.concat(Jn(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Pk)f=!0,c="maxretry",i=i.concat(Jn(e.serverSyncTree_,a.currentWriteId,!0));else{const d=Pv(e,a.path,o);a.currentInputSnapshot=d;const h=t[l].update(d.val());if(h!==void 0){ff("transaction failed: Data returned ",h,a.path);let y=Te(h);typeof h=="object"&&h!=null&&cn(h,".priority")||(y=y.updatePriority(d.getPriority()));const k=a.currentWriteId,m=pf(e),p=yv(y,d,m);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=p,a.currentWriteId=Rv(e),o.splice(o.indexOf(k),1),i=i.concat(hv(e.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Jn(e.serverSyncTree_,k,!0))}else f=!0,c="nodata",i=i.concat(Jn(e.serverSyncTree_,a.currentWriteId,!0))}an(e.eventQueue_,n,i),i=[],f&&(t[l].status=2,function(d){setTimeout(d,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(c==="nodata"?r.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):r.push(()=>t[l].onComplete(new Error(c),!1,null))))}aa(e,e.transactionQueueTree_);for(let l=0;l<r.length;l++)Ni(r[l]);yf(e,e.transactionQueueTree_)}function bv(e,t){let n,r=e.transactionQueueTree_;for(n=L(t);n!==null&&Ri(r)===void 0;)r=df(r,n),t=q(t),n=L(t);return r}function Av(e,t){const n=[];return Dv(e,t,n),n.sort((r,i)=>r.order-i.order),n}function Dv(e,t,n){const r=Ri(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);oa(t,i=>{Dv(e,i,n)})}function aa(e,t){const n=Ri(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,_v(t,n.length>0?n:void 0)}oa(t,r=>{aa(e,r)})}function Ov(e,t){const n=Ys(bv(e,t)),r=df(e.transactionQueueTree_,t);return wk(r,i=>{tu(e,i)}),tu(e,r),wv(r,i=>{tu(e,i)}),n}function tu(e,t){const n=Ri(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jn(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?_v(t,void 0):n.length=s+1,an(e.eventQueue_,Ys(t),i);for(let o=0;o<r.length;o++)Ni(r[o])}}/**
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
 */function zk(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function Wk(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Je(`Invalid query segment '${n}' in query '${e}'`)}return t}const $p=function(e,t){const n=Uk(e),r=n.namespace;n.domain==="firebase.com"&&ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ix();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new O_(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Q(n.pathString)}},Uk=function(e){let t="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(l=e.substring(0,u-1),e=e.substring(u+2));let f=e.indexOf("/");f===-1&&(f=e.length);let c=e.indexOf("?");c===-1&&(c=e.length),t=e.substring(0,Math.min(f,c)),f<c&&(i=zk(e.substring(f,c)));const d=Wk(e.substring(Math.min(e.length,c)));u=t.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(t.substring(u+1),10)):u=t.length;const h=t.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const y=t.indexOf(".");r=t.substring(0,y).toLowerCase(),n=t.substring(y+1),s=r}"ns"in d&&(s=d.ns)}return{host:t,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const Bp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Hk=function(){let e=0;const t=[];return function(n){const r=n===e;e=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Bp.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Bp.charAt(t[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Mv{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class Lv{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Vk{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class _f{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:U_(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const t=Ep(this._queryParams),n=jd(t);return n==="{}"?"default":n}get _queryObject(){return Ep(this._queryParams)}isEqual(t){if(t=Wn(t),!(t instanceof _f))return!1;const n=this._repo===t._repo,r=Hd(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+zx(this._path)}}class dn extends _f{constructor(t,n){super(t,n,new Kd,!1)}get parent(){const t=V_(this._path);return t===null?null:new dn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Fs{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new Q(t),r=Ei(this.ref,t);return new Fs(this._node.getChild(n),r,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new Fs(i,Ei(this.ref,r),ae)))}hasChild(t){const n=new Q(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function jp(e,t){return e=Wn(e),e._checkNotDeleted("ref"),t!==void 0?Ei(e._root,t):e._root}function Ei(e,t){return e=Wn(e),L(e._path)===null?Ik("child","path",t,!1):xv("child","path",t,!1),new dn(e._repo,me(e._path,t))}function Gk(e,t){e=Wn(e),Iv("push",e._path),Sv("push",t,e._path,!0);const n=Nv(e._repo),r=Hk(n),i=Ei(e,r),s=Ei(e,r);let o;return t!=null?o=Qk(s,t).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Qk(e,t){e=Wn(e),Iv("set",e._path),Sv("set",t,e._path,!1);const n=new Jl;return Ok(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class vf{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new Mv("value",this,new Fs(t.snapshotNode,new dn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Lv(this,t,n):null}matches(t){return t instanceof vf?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class wf{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Lv(this,t,n):null}createEvent(t,n){x(t.childName!=null,"Child events should have a childName.");const r=Ei(new dn(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new Mv(t.type,this,new Fs(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof wf?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Kk(e,t,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(f,c)=>{Fp(e._repo,e,l),a(f,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Vk(n,s||void 0),l=t==="value"?new vf(o):new wf(t,o);return Lk(e._repo,e,l),()=>Fp(e._repo,e,l)}function Yk(e,t,n,r){return Kk(e,"value",t,n,r)}XI(dn);rk(dn);/**
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
 */const qk="FIREBASE_DATABASE_EMULATOR_HOST",Rc={};let Xk=!1;function Jk(e,t,n,r){e.repoInfo_=new O_(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function Zk(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=$p(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[qk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=$p(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const f=i&&a?new ti(ti.OWNER):new mx(e.name,e.options,t);kk("Invalid Firebase Database URL",o),B(o.path)||ln("Database URL must point to the root of a Firebase Database (not including a child path).");const c=tT(l,e,f,new px(e.name,n));return new nT(c,e)}function eT(e,t){const n=Rc[t];(!n||n[e.key]!==e)&&ln(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Fk(e),delete n[e.key]}function tT(e,t,n,r){let i=Rc[t.name];i||(i={},Rc[t.name]=i);let s=i[e.toURLString()];return s&&ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new bk(e,Xk,n,r),i[e.toURLString()]=s,s}class nT{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ak(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&ln("Cannot call "+t+" on a deleted database.")}}function rT(e=g_(),t){const n=Hs(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=TC("database");r&&iT(n,...r)}return n}function iT(e,t,n,r={}){e=Wn(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ln("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ti(ti.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:NC(r.mockUserToken,e.app.options.projectId);s=new ti(o)}Jk(i,t,n,s)}/**
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
 */function sT(e){ZS(zS),Ln(new on("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return Zk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ut(ip,sp,e),Ut(ip,sp,"esm2017")}en.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};en.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};sT();const oT=(e,t)=>t.some(n=>e instanceof n);let zp,Wp;function lT(){return zp||(zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aT(){return Wp||(Wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Fv=new WeakMap,Pc=new WeakMap,$v=new WeakMap,nu=new WeakMap,Ef=new WeakMap;function uT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Dn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Fv.set(n,e)}).catch(()=>{}),Ef.set(t,e),t}function cT(e){if(Pc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Pc.set(e,t)}let bc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Pc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||$v.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dT(e){bc=e(bc)}function fT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ru(this),t,...n);return $v.set(r,t.sort?t.sort():[t]),Dn(r)}:aT().includes(e)?function(...t){return e.apply(ru(this),t),Dn(Fv.get(this))}:function(...t){return Dn(e.apply(ru(this),t))}}function hT(e){return typeof e=="function"?fT(e):(e instanceof IDBTransaction&&cT(e),oT(e,lT())?new Proxy(e,bc):e)}function Dn(e){if(e instanceof IDBRequest)return uT(e);if(nu.has(e))return nu.get(e);const t=hT(e);return t!==e&&(nu.set(e,t),Ef.set(t,e)),t}const ru=e=>Ef.get(e);function pT(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=Dn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Dn(o.result),a.oldVersion,a.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const mT=["get","getKey","getAll","getAllKeys","count"],gT=["put","add","delete","clear"],iu=new Map;function Up(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(iu.get(t))return iu.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=gT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mT.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return iu.set(t,s),s}dT(e=>({...e,get:(t,n,r)=>Up(t,n)||e.get(t,n,r),has:(t,n)=>!!Up(t,n)||e.has(t,n)}));const Bv="@firebase/installations",Cf="0.6.4";/**
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
 */const jv=1e4,zv=`w:${Cf}`,Wv="FIS_v2",yT="https://firebaseinstallations.googleapis.com/v1",_T=60*60*1e3,vT="installations",wT="Installations";/**
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
 */const ET={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},vr=new Zl(vT,wT,ET);function Uv(e){return e instanceof Ir&&e.code.includes("request-failed")}/**
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
 */function Hv({projectId:e}){return`${yT}/projects/${e}/installations`}function Vv(e){return{token:e.token,requestStatus:2,expiresIn:ST(e.expiresIn),creationTime:Date.now()}}async function Gv(e,t){const r=(await t.json()).error;return vr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Qv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function CT(e,{refreshToken:t}){const n=Qv(e);return n.append("Authorization",xT(t)),n}async function Kv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ST(e){return Number(e.replace("s","000"))}function xT(e){return`${Wv} ${e}`}/**
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
 */async function IT({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Hv(e),i=Qv(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Wv,appId:e.appId,sdkVersion:zv},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Kv(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Vv(u.authToken)}}else throw await Gv("Create Installation",a)}/**
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
 */function Yv(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function kT(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const TT=/^[cdef][\w-]{21}$/,Ac="";function NT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=RT(e);return TT.test(n)?n:Ac}catch{return Ac}}function RT(e){return kT(e).substr(0,22)}/**
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
 */function ua(e){return`${e.appName}!${e.appId}`}/**
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
 */const qv=new Map;function Xv(e,t){const n=ua(e);Jv(n,t),PT(n,t)}function Jv(e,t){const n=qv.get(e);if(n)for(const r of n)r(t)}function PT(e,t){const n=bT();n&&n.postMessage({key:e,fid:t}),AT()}let Zn=null;function bT(){return!Zn&&"BroadcastChannel"in self&&(Zn=new BroadcastChannel("[Firebase] FID Change"),Zn.onmessage=e=>{Jv(e.data.key,e.data.fid)}),Zn}function AT(){qv.size===0&&Zn&&(Zn.close(),Zn=null)}/**
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
 */const DT="firebase-installations-database",OT=1,wr="firebase-installations-store";let su=null;function Sf(){return su||(su=pT(DT,OT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wr)}}})),su}async function Nl(e,t){const n=ua(e),i=(await Sf()).transaction(wr,"readwrite"),s=i.objectStore(wr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Xv(e,t.fid),t}async function Zv(e){const t=ua(e),r=(await Sf()).transaction(wr,"readwrite");await r.objectStore(wr).delete(t),await r.done}async function ca(e,t){const n=ua(e),i=(await Sf()).transaction(wr,"readwrite"),s=i.objectStore(wr),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Xv(e,l.fid),l}/**
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
 */async function xf(e){let t;const n=await ca(e.appConfig,r=>{const i=MT(r),s=LT(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Ac?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function MT(e){const t=e||{fid:NT(),registrationStatus:0};return e0(t)}function LT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=FT(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:$T(e)}:{installationEntry:t}}async function FT(e,t){try{const n=await IT(e,t);return Nl(e.appConfig,n)}catch(n){throw Uv(n)&&n.customData.serverCode===409?await Zv(e.appConfig):await Nl(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function $T(e){let t=await Hp(e.appConfig);for(;t.registrationStatus===1;)await Yv(100),t=await Hp(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await xf(e);return r||n}return t}function Hp(e){return ca(e,t=>{if(!t)throw vr.create("installation-not-found");return e0(t)})}function e0(e){return BT(e)?{fid:e.fid,registrationStatus:0}:e}function BT(e){return e.registrationStatus===1&&e.registrationTime+jv<Date.now()}/**
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
 */async function jT({appConfig:e,heartbeatServiceProvider:t},n){const r=zT(e,n),i=CT(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:zv,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Kv(()=>fetch(r,l));if(a.ok){const u=await a.json();return Vv(u)}else throw await Gv("Generate Auth Token",a)}function zT(e,{fid:t}){return`${Hv(e)}/${t}/authTokens:generate`}/**
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
 */async function If(e,t=!1){let n;const r=await ca(e.appConfig,s=>{if(!t0(s))throw vr.create("not-registered");const o=s.authToken;if(!t&&HT(o))return s;if(o.requestStatus===1)return n=WT(e,t),s;{if(!navigator.onLine)throw vr.create("app-offline");const l=GT(s);return n=UT(e,l),l}});return n?await n:r.authToken}async function WT(e,t){let n=await Vp(e.appConfig);for(;n.authToken.requestStatus===1;)await Yv(100),n=await Vp(e.appConfig);const r=n.authToken;return r.requestStatus===0?If(e,t):r}function Vp(e){return ca(e,t=>{if(!t0(t))throw vr.create("not-registered");const n=t.authToken;return QT(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function UT(e,t){try{const n=await jT(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Nl(e.appConfig,r),n}catch(n){if(Uv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zv(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Nl(e.appConfig,r)}throw n}}function t0(e){return e!==void 0&&e.registrationStatus===2}function HT(e){return e.requestStatus===2&&!VT(e)}function VT(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+_T}function GT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function QT(e){return e.requestStatus===1&&e.requestTime+jv<Date.now()}/**
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
 */async function KT(e){const t=e,{installationEntry:n,registrationPromise:r}=await xf(t);return r?r.catch(console.error):If(t).catch(console.error),n.fid}/**
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
 */async function YT(e,t=!1){const n=e;return await qT(n),(await If(n,t)).token}async function qT(e){const{registrationPromise:t}=await xf(e);t&&await t}/**
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
 */function XT(e){if(!e||!e.options)throw ou("App Configuration");if(!e.name)throw ou("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ou(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function ou(e){return vr.create("missing-app-config-values",{valueName:e})}/**
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
 */const n0="installations",JT="installations-internal",ZT=e=>{const t=e.getProvider("app").getImmediate(),n=XT(t),r=Hs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},eN=e=>{const t=e.getProvider("app").getImmediate(),n=Hs(t,n0).getImmediate();return{getId:()=>KT(n),getToken:i=>YT(n,i)}};function tN(){Ln(new on(n0,ZT,"PUBLIC")),Ln(new on(JT,eN,"PRIVATE"))}tN();Ut(Bv,Cf);Ut(Bv,Cf,"esm2017");/**
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
 */const Rl="analytics",nN="firebase_id",rN="origin",iN=60*1e3,sN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",kf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ze=new $d("@firebase/analytics");/**
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
 */const oN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ot=new Zl("analytics","Analytics",oN);/**
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
 */function lN(e){if(!e.startsWith(kf)){const t=ot.create("invalid-gtag-resource",{gtagURL:e});return Ze.warn(t.message),""}return e}function r0(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function aN(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function uN(e,t){const n=aN("firebase-js-sdk-policy",{createScriptURL:lN}),r=document.createElement("script"),i=`${kf}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function cN(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function dN(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const a=(await r0(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){Ze.error(l)}e("config",i,s)}async function fN(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await r0(n);for(const a of o){const u=l.find(c=>c.measurementId===a),f=u&&t[u.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ze.error(s)}}function hN(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await fN(e,t,n,l,a)}else if(s==="config"){const[l,a]=o;await dN(e,t,n,r,l,a)}else if(s==="consent"){const[l]=o;e("consent","update",l)}else if(s==="get"){const[l,a,u]=o;e("get",l,a,u)}else if(s==="set"){const[l]=o;e("set",l)}else e(s,...o)}catch(l){Ze.error(l)}}return i}function pN(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=hN(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function mN(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(kf)&&n.src.includes(e))return n;return null}/**
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
 */const gN=30,yN=1e3;class _N{constructor(t={},n=yN){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const i0=new _N;function vN(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function wN(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:vN(r)},s=sN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function EN(e,t=i0,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ot.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ot.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new xN;return setTimeout(async()=>{l.abort()},n!==void 0?n:iN),s0({appId:r,apiKey:i,measurementId:s},o,l,t)}async function s0(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=i0){var s;const{appId:o,measurementId:l}=e;try{await CN(r,t)}catch(a){if(l)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await wN(e);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!SN(u)){if(i.deleteThrottleMetadata(o),l)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const f=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?qh(n,i.intervalMillis,gN):qh(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(o,c),Ze.debug(`Calling attemptFetch again in ${f} millis`),s0(e,c,r,i)}}function CN(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(ot.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function SN(e){if(!(e instanceof Ir)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class xN{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function IN(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function kN(){if(c_())try{await d_()}catch(e){return Ze.warn(ot.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ze.warn(ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TN(e,t,n,r,i,s,o){var l;const a=EN(e);a.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Ze.error(h)),t.push(a);const u=kN().then(h=>{if(h)return r.getId()}),[f,c]=await Promise.all([a,u]);mN(s)||uN(s,f.measurementId),i("js",new Date);const d=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return d[rN]="firebase",d.update=!0,c!=null&&(d[nN]=c),i("config",f.measurementId,d),f.measurementId}/**
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
 */class NN{constructor(t){this.app=t}_delete(){return delete cs[this.app.options.appId],Promise.resolve()}}let cs={},Gp=[];const Qp={};let lu="dataLayer",RN="gtag",Kp,o0,Yp=!1;function PN(){const e=[];if(PC()&&e.push("This is a browser extension environment."),AC()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ot.create("invalid-analytics-context",{errorInfo:t});Ze.warn(n.message)}}function bN(e,t,n){PN();const r=e.options.appId;if(!r)throw ot.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ot.create("no-api-key");if(cs[r]!=null)throw ot.create("already-exists",{id:r});if(!Yp){cN(lu);const{wrappedGtag:s,gtagCore:o}=pN(cs,Gp,Qp,lu,RN);o0=s,Kp=o,Yp=!0}return cs[r]=TN(e,Gp,Qp,t,Kp,lu,n),new NN(e)}function AN(e=g_()){e=Wn(e);const t=Hs(e,Rl);return t.isInitialized()?t.getImmediate():DN(e)}function DN(e,t={}){const n=Hs(e,Rl);if(n.isInitialized()){const i=n.getImmediate();if(pl(t,n.getOptions()))return i;throw ot.create("already-initialized")}return n.initialize({options:t})}function l0(e,t,n,r){e=Wn(e),IN(o0,cs[e.app.options.appId],t,n,r).catch(i=>Ze.error(i))}const qp="@firebase/analytics",Xp="0.10.0";function ON(){Ln(new on(Rl,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return bN(r,i,n)},"PUBLIC")),Ln(new on("analytics-internal",e,"PRIVATE")),Ut(qp,Xp),Ut(qp,Xp,"esm2017");function e(t){try{const n=t.getProvider(Rl).getImmediate();return{logEvent:(r,i,s)=>l0(n,r,i,s)}}catch(n){throw ot.create("interop-component-reg-failed",{reason:n})}}}ON();const MN={apiKey:"AIzaSyAyVHSuOfOsTyOQe7JZWwC0J3By7Uz1S70",authDomain:"baabel-birthday-2023.firebaseapp.com",projectId:"baabel-birthday-2023",storageBucket:"baabel-birthday-2023.appspot.com",messagingSenderId:"276770751344",appId:"1:276770751344:web:05539c51907c974b5545b5",measurementId:"G-K0FS6V03KG",databaseURL:"https://baabel-birthday-2023-default-rtdb.asia-southeast1.firebasedatabase.app"},a0=m_(MN),Jp=rT(a0),LN=AN(a0);l0(LN,"page_view");const u0=he.createContext({}),FN=({children:e})=>{const[t,n]=he.useState([]),r=he.useMemo(()=>t.reduce((s,o)=>{var l;return{...s,[o.gift]:{...s[o.gift],amount:(((l=s[o.gift])==null?void 0:l.amount)??0)+1}}},{}),[t]),i=({gift:s,senderName:o,wish:l})=>{Gk(jp(Jp,"wishes"),{gift:s,senderName:o,wish:l,timestamp:Date.now()})};return he.useEffect(()=>{Yk(jp(Jp,"wishes"),s=>{const o=s.val(),l=o?Object.entries(o).map(([a,u])=>({id:a,...u})).sort((a,u)=>a.timestamp-u.timestamp):[];n(l)})},[]),I.jsx(u0.Provider,{value:{stats:r,wishes:t,createWish:i},children:e})},c0=()=>he.useContext(u0),$={salad:{baabaeImg:"./assets/images/baabae_salad.png",giftImg:"./assets/images/salad.png",title:"ผักสลัด",description:`ผักสลัดหน้าโบสถ์ที่ปลูกและปรุงรสโดยนายน้อย
แบ๊ะที่กินผักคือแบ๊ะที่สามารถโตเป็นต้นไม้และปกป้องบาเบลได้`,colors:{text:"#487D45",border:"#6BBA69",buttonLeft:"#6BBA69",buttonRight:"#B5E3AD",mainBackground:"#D8ECC8",tagBackground:"#E7F1D4",selectBackground:"#F9FFEE"}},bomb:{baabaeImg:"./assets/images/baabae_bomb.png",giftImg:"./assets/images/bomb.png",title:"ระเบิด",selectedTitle:"ระเบิดบาเบล Beam!",description:`บาเบลผู้ระเบิดทุกอย่างบนโลกใบนี้ แต่ระเบิดที่มีพลังทำลายล้าง
มากที่สุดคือระเบิดความน่ารักของตัวเอง บาเบลบีม!!!`,colors:{text:"#DD6F63",border:"#EE8B81",buttonLeft:"#EE8B81",buttonRight:"#FDC8C3",mainBackground:"#FFE1DE",tagBackground:"#FFE4E1",selectBackground:"#FFEFED"}},microphone:{baabaeImg:"./assets/images/baabae_microphone.png",giftImg:"./assets/images/microphone.png",title:"ไมโครโฟน",description:`ไมโครโฟนขยายเสียงไพเราะแบบหูเคลือบทอง
อยากให้บาเบลมั่นใจในเสียงตัวเอง เพราะเสียงบาเบลมีเสน่ห์มาก`,colors:{text:"#4279D1",border:"#5D8ACF",buttonLeft:"#5D8ACF",buttonRight:"#B7D0F9",mainBackground:"#DFEBFE",tagBackground:"#E3EEFF",selectBackground:"#EDF5FF"}},dacapo:{baabaeImg:"./assets/images/baabae_dacapo.png",giftImg:"./assets/images/dacapo.png",title:"น้องเจี๊ยบ",description:`ให้น้องเจี๊ยบเป็นของขวัญ ดากะโปะจะสามารถเป็นได้ทั้งเพื่อน
น้องชาย และคู่หูหยุมหัวให้บาเบลได้ ไม่เหงาแน่นอน`,colors:{text:"#E8A115",border:"#E9B738",buttonLeft:"#E9B738",buttonRight:"#FFE5A3",mainBackground:"#FEEBBB",tagBackground:"#FFF1CD",selectBackground:"#FFF8E1"}},schneider:{baabaeImg:"./assets/images/baabae_schneider.png",giftImg:"./assets/images/schneider.png",title:"พี่ชไน",description:`ให้ชไนเดอร์เป็นของขวัญ พี่ชไนจะสามารถเป็น Comfort zone
และเครื่องอวยความน่ารักให้บาเบลได้ทั้งวัน`,colors:{text:"#976BCC",border:"#A783D2",buttonLeft:"#A783D2",buttonRight:"#CEAFF2",mainBackground:"#EDE0FD",tagBackground:"#F4EBFF",selectBackground:"#F6EEFF"}},cute_potion:{baabaeImg:"./assets/images/baabae_cute_potion.png",giftImg:"./assets/images/cute_potion.png",title:"โพชั่น",selectedTitle:"โพชั่นความน่ารัก",description:`ส่งโพชั่นความน่ารักให้บาเบล ถึงแม้ว่าจะน่ารักมากอยู่แล้วก็ตาม
สิ่งนี้จะเพิ่มความน่ารักกะไม่ให้ใครได้ลืมตาอ้าปากไปเลย`,colors:{text:"#F56C9D",border:"#E882A6",buttonLeft:"#E882A6",buttonRight:"#FFCBDD",mainBackground:"#FFE1EC",tagBackground:"#FFE9F1",selectBackground:"#FFF1F6"}},boiled_egg_suki:{baabaeImg:"./assets/images/baabae_boiled_egg_suki.png",giftImg:"./assets/images/boiled_egg_suki.png",title:"สุกี้ไข่ต้ม",description:`สุกี้ไข่ต้มตัวนี้สามารถช่วยบาเบลเฝ้าโบสถ์ได้ น้องไม่ดุ
น่ารักใจดี และช่วยอยู่เป็นเพื่อนบาแบ๊ะในวันที่นายน้อยไม่ว่างได้`,colors:{text:"#E9882F",border:"#ED9E57",buttonLeft:"#ED9E57",buttonRight:"#FECB9D",mainBackground:"#FFE7D1",tagBackground:"#FFE7D1",selectBackground:"#FFEEDF"}},baabae_pillow:{baabaeImg:"./assets/images/baabae_baabae_pillow.png",giftImg:"./assets/images/baabae_pillow.png",title:"หมอนแบ๊ะ",description:`นายน้อยที่ชอบนอน หมอนบาเบ๊ะจะทำให้บาเบลหลับสบายทั้งวัน
ไม่ว่าจะนอนเช้า กลางวัน เย็น หรือตลอดทั้งวัน~`,colors:{text:"#4BA9AF",border:"#53BCC2",buttonLeft:"#53BCC2",buttonRight:"#A8E1E4",mainBackground:"#DBF6F8",tagBackground:"#E1F6F8",selectBackground:"#ECF8F9"}},sunflower:{baabaeImg:"./assets/images/baabae_sunflower.png",giftImg:"./assets/images/sunflower.png",title:"ทานตะวัน",selectedTitle:"ดอกทานตะวัน",description:`มาปลูกดอกทานตะวันที่บาเบลชอบให้เต็มโบสถ์กัน~
อยากให้นายน้อยสดใสเหมือนดอกทานตะวันรับแสงอาทิตย์เลย`,colors:{text:"#E79D0E",border:"#EEB13B",buttonLeft:"#EEB13B",buttonRight:"#FFE2A9",mainBackground:"#FEECC8",tagBackground:"#FFF0D1",selectBackground:"#FFF6E4"}}},$N=30,Zp=500,BN=Sr`
  0%   { top: 436px; }
  50%  { top: 436px; }
  75%  { top: 410px; }
  100% { top: 436px; }
`,jN=Sr`
  0%   { left: 186px; }
  50%  { left: 195px; }
  100% { left: 186px; }
`,zN=Sr`
  0%   { transform: rotate(-1deg); }
  50%  { transform: rotate(1deg); }
  100% { transform: rotate(-1deg); }
`,WN=Sr`
  0%   { top: 188px; left: 872px; }
  50%  { top: 190px; left: 870px; }
  100% { top: 188px; left: 872px; }
`,UN=Sr`
  0%   { transform: rotate(-2deg); }
  50%  { transform: rotate(2deg); }
  100% { transform: rotate(-2deg); }
`,HN=P.div`
  width: 100%;
  background-image: url(./assets/images/header_background.png);
  background-position-x: center;
  background-repeat: repeat no-repeat;
  margin-bottom: -160px;
  overflow: hidden;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    top: -75px;
    margin-left: 210px;
  }

  ${({theme:e})=>e.breakpoints.only("md")} {
    zoom: 0.78;
  }

  ${({theme:e})=>e.breakpoints.down("md")} {
    margin-bottom: -130px;

    & > div {
      flex-direction: column;
      margin-left: 0;
      top: -50px;
    }
  }

  ${({theme:e})=>e.breakpoints.down("sm")} {
    margin-bottom: -90px;

    & > div {
      top: -30px;
    }
  }
`,VN=P.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  top: 20px;

  ${({theme:e})=>e.breakpoints.down("md")} {
    position: absolute;
    zoom: 0.6;
    top: 180px;
    left: calc(50% - 330px);
    transform: rotate(-5deg);
  }

  ${({theme:e})=>e.breakpoints.down("sm")} {
    zoom: 0.45;
    top: 160px;
    left: calc(50% - 300px);
  }
`,GN=P.img`
  width: 500px;
`,QN=P.img`
  width: 350px;
`,KN=P.div`
  position: relative;
  right: 350px;
  zoom: 0.5;

  ${({theme:e})=>e.breakpoints.down("md")} {
    right: 10px;
  }

  ${({theme:e})=>e.breakpoints.down("sm")} {
    zoom: 0.35;
    right: 30px;
  }
`,YN=P.img`
  position: relative;
`,fn=P.img`
  position: absolute;
`,qN=P(fn)`
  animation: ${BN} 2s ease-in-out infinite;
  top: 436px;
  left: 262px;
`,XN=P(fn)`
  animation: ${jN} 2s ease-in-out infinite;
  top: 528px;
  left: 186px;
`,JN=P(fn)`
  top: 352px;
  left: 448px;
`,ZN=P(fn)`
  top: 478px;
  left: 440px;
`,eR=P(fn)`
  top: 562px;
  left: 380px;
`,tR=P(fn)`
  top: 376px;
  left: 622px;
`,nR=P(fn)`
  animation: ${zN} 2s ease-in-out infinite;
  transform-origin: bottom left;
  top: 524px;
  left: 600px;
`,rR=P(fn)`
  animation: ${WN} 2s ease-in-out infinite;
  top: 188px;
  left: 872px;
`,iR=P(fn)`
  animation: ${UN} 2s ease-in-out infinite;
  transform-origin: bottom right;
  top: 492px;
  left: 966px;
`,sR=()=>{const e=Us(),t=cl(e.breakpoints.down("md")),n=cl(e.breakpoints.down("sm"));return I.jsx(HN,{children:I.jsxs("div",{children:[I.jsxs(VN,{children:[I.jsx(GN,{src:n?"./assets/images/header_hbd_text_sm.png":"./assets/images/header_hbd_text.png"}),I.jsx(QN,{src:"./assets/images/header_baabel_text.png"})]}),I.jsxs(KN,{children:[I.jsx(rR,{src:"./assets/images/header_baabae_8.png"}),I.jsx(YN,{src:t?"./assets/images/header_baabel_md.png":"./assets/images/header_baabel.png"}),I.jsx(JN,{src:"./assets/images/header_baabae_3.png"}),I.jsx(tR,{src:"./assets/images/header_baabae_6.png"}),I.jsx(ZN,{src:"./assets/images/header_baabae_4.png"}),I.jsx(nR,{src:"./assets/images/header_baabae_7.png"}),I.jsx(eR,{src:"./assets/images/header_baabae_5.png"}),I.jsx(iR,{src:"./assets/images/header_baabae_10.png"}),I.jsx(qN,{src:"./assets/images/header_baabae_1.png"}),I.jsx(XN,{src:"./assets/images/header_baabae_2.png"})]})]})})},oR=P.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 4px 16px 4px 12px;
  border-radius: 100px;
  border: 4px solid rgba(255, 255, 255, 0.7);
  background-color: ${e=>e.color};
  background-clip: padding-box;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    padding: 4px 12px 4px 8px;
  }
`,lR=P.img`
  width: 32px;
  margin-right: 4px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    width: 24px;
  }
`,aR=P.div.attrs({className:"eclair-font"})`
  white-space: nowrap;
  color: #2d2d2d;
  font-size: 20px;
  font-weight: 300;
  line-height: 29px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    font-size: 16px;
    line-height: 23px;
  }
`;var da={},fa={};Object.defineProperty(fa,"__esModule",{value:!0});fa.defaultOptions=void 0;fa.defaultOptions={lowercase:!1,precision:1,space:!1,units:["","K","M","B","T","P","E"]};var jt={};Object.defineProperty(jt,"__esModule",{value:!0});jt.getLocales=jt.getFractionDigits=jt.roundTo=jt.parseValue=void 0;function uR(e){const t=parseFloat(e==null?void 0:e.toString());if(isNaN(t))throw new Error("Input value is not a number");if(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)throw new RangeError("Input value is outside of safe integer range");return t}jt.parseValue=uR;function cR(e,t){if(!Number.isFinite(e))throw new Error("Input value is not a finite number");if(!Number.isInteger(t)||t<0)throw new Error("Precision is not a positive integer");return Number.isInteger(e)?e:parseFloat(e.toFixed(t))}jt.roundTo=cR;function dR(e){var t;if(Number.isInteger(e))return 0;const n=e.toString().split(".")[1];return(t=n==null?void 0:n.length)!==null&&t!==void 0?t:0}jt.getFractionDigits=dR;function fR(){var e;return typeof navigator>"u"?[]:Array.from((e=navigator.languages)!==null&&e!==void 0?e:[])}jt.getLocales=fR;Object.defineProperty(da,"__esModule",{value:!0});da.millify=void 0;const em=fa,wo=jt,tm=1e3;function*nm(e){let t=tm;for(;;){const n=e/t;if(n<1)return;yield n,t*=tm}}function d0(e,t){var n,r;const i=t?{...em.defaultOptions,...t}:em.defaultOptions;if(!Array.isArray(i.units)||!i.units.length)throw new Error("Option `units` must be a non-empty array");let s;try{s=wo.parseValue(e)}catch(y){return y instanceof Error&&console.warn(`WARN: ${y.message} (millify)`),String(e)}const o=s<0?"-":"";s=Math.abs(s);let l=0;for(const y of nm(s))s=y,l+=1;if(l>=i.units.length)return e.toString();let u=wo.roundTo(s,i.precision);for(const y of nm(u))u=y,l+=1;const f=(n=i.units[l])!==null&&n!==void 0?n:"",c=i.lowercase?f.toLowerCase():f,d=i.space?" ":"",h=u.toLocaleString((r=i.locales)!==null&&r!==void 0?r:wo.getLocales(),{minimumFractionDigits:wo.getFractionDigits(u)});return`${o}${h}${d}${c}`}da.millify=d0;var hR=da.default=d0;const pR=({gift:e,amount:t})=>I.jsxs(oR,{color:$[e].colors.tagBackground,children:[I.jsx(lR,{src:$[e].giftImg,alt:e}),I.jsxs(aR,{children:["x ",hR(t,{precision:2})]})]}),mR=P.div`
    background: #FFFFFF;
    border-radius: 16px;
    height: fit-content !important;
    box-shadow: 0px 4px 20px 0px rgba(248, 203, 203, 0.4);
    padding: 12px 16px 16px 16px;
`,gR=P.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`,yR=P.div`
    display: flex;
    align-items: center;
`,_R=P.img`
    width: 32px;
    margin-right: 8px;
`,vR=P.div`
   color: ${e=>e.color};
   font-size: 20px;
   line-height: 27px;
`,wR=P.img`
    width: 24px;
`,ER=P.div`
   color: #2D2D2D;
   font-size: 16px;
   line-height: 24px;
   letter-spacing: 0.8px;
   margin-bottom: 4px;
`,CR=P.div.attrs({className:"eclair-font"})`
    color: #A4A4A4;
    font-size: 12px;
    font-weight: 300;
    line-height: 17px;
    display: flex;
    justify-content: space-between;
`,SR=({id:e,gift:t,senderName:n,wish:r,timestamp:i})=>{const s=new Date(i);return I.jsxs(mR,{id:e,children:[I.jsxs(gR,{children:[I.jsxs(yR,{children:[I.jsx(_R,{src:$[t].baabaeImg,alt:t}),I.jsx(vR,{color:$[t].colors.text,children:n})]}),I.jsx(wR,{src:$[t].giftImg,alt:t})]}),I.jsx(ER,{children:r}),I.jsxs(CR,{children:[I.jsx("div",{children:s.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric",timeZone:"Asia/Bangkok"})}),I.jsxs("div",{children:[s.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit",timeZone:"Asia/Bangkok"})," ","น."]})]})]})};var f0={exports:{}};/*! For license information please see index.js.LICENSE.txt */(function(e,t){(function(n,r){e.exports=r(he)})(g0,n=>(()=>{var r={202:(l,a,u)=>{u.d(a,{Z:()=>y});var f=u(864),c=u.n(f),d=u(352),h=u.n(d)()(c());h.push([l.id,`.index-module__layout___ZT1i5 {
  display: grid;
}
`,"",{version:3,sources:["webpack://./src/index.module.css"],names:[],mappings:"AAAA;EACE,aAAa;AACf",sourcesContent:[`.layout {
  display: grid;
}
`],sourceRoot:""}]),h.locals={layout:"index-module__layout___ZT1i5"};const y=h},352:l=>{l.exports=function(a){var u=[];return u.toString=function(){return this.map(function(f){var c="",d=f[5]!==void 0;return f[4]&&(c+="@supports (".concat(f[4],") {")),f[2]&&(c+="@media ".concat(f[2]," {")),d&&(c+="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {")),c+=a(f),d&&(c+="}"),f[2]&&(c+="}"),f[4]&&(c+="}"),c}).join("")},u.i=function(f,c,d,h,y){typeof f=="string"&&(f=[[null,f,void 0]]);var _={};if(d)for(var k=0;k<this.length;k++){var m=this[k][0];m!=null&&(_[m]=!0)}for(var p=0;p<f.length;p++){var g=[].concat(f[p]);d&&_[g[0]]||(y!==void 0&&(g[5]===void 0||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=y),c&&(g[2]&&(g[1]="@media ".concat(g[2]," {").concat(g[1],"}")),g[2]=c),h&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=h):g[4]="".concat(h)),u.push(g))}},u}},864:l=>{l.exports=function(a){var u=a[1],f=a[3];if(!f)return u;if(typeof btoa=="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(f)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),h="/*# ".concat(d," */"),y=f.sources.map(function(_){return"/*# sourceURL=".concat(f.sourceRoot||"").concat(_," */")});return[u].concat(y).concat([h]).join(`
`)}return[u].join(`
`)}},813:l=>{var a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;l.exports=function(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var d={},h=0;h<10;h++)d["_"+String.fromCharCode(h)]=h;if(Object.getOwnPropertyNames(d).map(function(_){return d[_]}).join("")!=="0123456789")return!1;var y={};return"abcdefghijklmnopqrst".split("").forEach(function(_){y[_]=_}),Object.keys(Object.assign({},y)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}()?Object.assign:function(c,d){for(var h,y,_=function(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}(c),k=1;k<arguments.length;k++){for(var m in h=Object(arguments[k]))u.call(h,m)&&(_[m]=h[m]);if(a){y=a(h);for(var p=0;p<y.length;p++)f.call(h,y[p])&&(_[y[p]]=h[y[p]])}}return _}},455:(l,a,u)=>{u(813);var f=u(359),c=60103;if(typeof Symbol=="function"&&Symbol.for){var d=Symbol.for;c=d("react.element"),d("react.fragment")}var h=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};a.jsx=function(k,m,p){var g,v={},E=null,S=null;for(g in p!==void 0&&(E=""+p),m.key!==void 0&&(E=""+m.key),m.ref!==void 0&&(S=m.ref),m)y.call(m,g)&&!_.hasOwnProperty(g)&&(v[g]=m[g]);if(k&&k.defaultProps)for(g in m=k.defaultProps)v[g]===void 0&&(v[g]=m[g]);return{$$typeof:c,type:k,key:E,ref:S,props:v,_owner:h.current}}},557:(l,a,u)=>{l.exports=u(455)},701:l=>{var a=[];function u(d){for(var h=-1,y=0;y<a.length;y++)if(a[y].identifier===d){h=y;break}return h}function f(d,h){for(var y={},_=[],k=0;k<d.length;k++){var m=d[k],p=h.base?m[0]+h.base:m[0],g=y[p]||0,v="".concat(p," ").concat(g);y[p]=g+1;var E=u(v),S={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(E!==-1)a[E].references++,a[E].updater(S);else{var w=c(S,h);h.byIndex=k,a.splice(k,0,{identifier:v,updater:w,references:1})}_.push(v)}return _}function c(d,h){var y=h.domAPI(h);return y.update(d),function(_){if(_){if(_.css===d.css&&_.media===d.media&&_.sourceMap===d.sourceMap&&_.supports===d.supports&&_.layer===d.layer)return;y.update(d=_)}else y.remove()}}l.exports=function(d,h){var y=f(d=d||[],h=h||{});return function(_){_=_||[];for(var k=0;k<y.length;k++){var m=u(y[k]);a[m].references--}for(var p=f(_,h),g=0;g<y.length;g++){var v=u(y[g]);a[v].references===0&&(a[v].updater(),a.splice(v,1))}y=p}}},80:l=>{var a={};l.exports=function(u,f){var c=function(d){if(a[d]===void 0){var h=document.querySelector(d);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}a[d]=h}return a[d]}(u);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(f)}},182:l=>{l.exports=function(a){var u=document.createElement("style");return a.setAttributes(u,a.attributes),a.insert(u,a.options),u}},850:(l,a,u)=>{l.exports=function(f){var c=u.nc;c&&f.setAttribute("nonce",c)}},236:l=>{l.exports=function(a){var u=a.insertStyleElement(a);return{update:function(f){(function(c,d,h){var y="";h.supports&&(y+="@supports (".concat(h.supports,") {")),h.media&&(y+="@media ".concat(h.media," {"));var _=h.layer!==void 0;_&&(y+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),y+=h.css,_&&(y+="}"),h.media&&(y+="}"),h.supports&&(y+="}");var k=h.sourceMap;k&&typeof btoa<"u"&&(y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),d.styleTagTransform(y,c,d.options)})(u,a,f)},remove:function(){(function(f){if(f.parentNode===null)return!1;f.parentNode.removeChild(f)})(u)}}}},213:l=>{l.exports=function(a,u){if(u.styleSheet)u.styleSheet.cssText=a;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(a))}}},359:l=>{l.exports=n}},i={};function s(l){var a=i[l];if(a!==void 0)return a.exports;var u=i[l]={id:l,exports:{}};return r[l](u,u.exports,s),u.exports}s.n=l=>{var a=l&&l.__esModule?()=>l.default:()=>l;return s.d(a,{a}),a},s.d=(l,a)=>{for(var u in a)s.o(a,u)&&!s.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:a[u]})},s.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),s.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},s.nc=void 0;var o={};return(()=>{s.r(o),s.d(o,{default:()=>Ht});var l=s(557),a=s(359),u=s.n(a),f=function(){return f=Object.assign||function(re){for(var _e,Ue=1,Et=arguments.length;Ue<Et;Ue++)for(var Pe in _e=arguments[Ue])Object.prototype.hasOwnProperty.call(_e,Pe)&&(re[Pe]=_e[Pe]);return re},f.apply(this,arguments)};const c=function(re){var _e=re.gridSpan||0;return(0,l.jsx)("div",f({className:re.className,style:{gridRowEnd:"span "+_e,visibility:_e?"initial":"hidden"}},{children:re.children}),void 0)};var d=s(701),h=s.n(d),y=s(236),_=s.n(y),k=s(80),m=s.n(k),p=s(850),g=s.n(p),v=s(182),E=s.n(v),S=s(213),w=s.n(S),N=s(202),z={};z.styleTagTransform=w(),z.setAttributes=g(),z.insert=m().bind(null,"head"),z.domAPI=_(),z.insertStyleElement=E(),h()(N.Z,z);const O=N.Z&&N.Z.locals?N.Z.locals:void 0;var ye=function(){return ye=Object.assign||function(re){for(var _e,Ue=1,Et=arguments.length;Ue<Et;Ue++)for(var Pe in _e=arguments[Ue])Object.prototype.hasOwnProperty.call(_e,Pe)&&(re[Pe]=_e[Pe]);return re},ye.apply(this,arguments)};const Ht=function(re){var _e=re.items,Ue=_e===void 0?[]:_e,Et=re.className,Pe=re.gap,T=Pe===void 0?10:Pe,D=re.colCount,b=D===void 0?3:D,V=re.minWidth,K=V===void 0?300:V,be=(0,a.useState)([]),ct=be[0],Vt=be[1],$e=(0,a.useState)(!1),tt=$e[0],Tr=$e[1],dt=(0,a.useRef)(null);(0,a.useLayoutEffect)(function(){Tr(!1);var ce=Pi();ce.length?Nr(ce):ht()},[Ue]),(0,a.useLayoutEffect)(function(){var ce,Ae,Ot=(ce=function(){ht()},function(){for(var nt=[],Rr=0;Rr<arguments.length;Rr++)nt[Rr]=arguments[Rr];Ae||(Ae=setTimeout(function(){ce.apply(void 0,nt),Ae=null},300))});return window.addEventListener("resize",Ot),function(){window.removeEventListener("resize",Ot)}},[]),(0,a.useEffect)(function(){tt&&ht()},[tt]);var ft,Pi=function(){var ce=[];return dt.current!==null&&Array.from(dt.current.children).forEach(function(Ae){var Ot=Ae.getElementsByTagName("img");Ot!=null&&Ot.length&&ce.push.apply(ce,Array.from(Ot).filter(function(nt){return!nt.onload}).map(function(nt){return{img:nt,loaded:!1}}))}),ce},Nr=function(ce){ce.forEach(function(Ae){Ae.img.onload||(Ae.img.onload=Ae.img.onerror=function(){Ae.loaded=!0,ce.some(function(Ot){return Ot.loaded===!1})||Tr(!0)})})},ht=function(){if(dt.current!==null){var ce=dt.current,Ae=[];Array.from(ce.children).forEach(function(Ot){var nt=Ot.firstElementChild;nt&&(nt.style.height="auto");var Rr=(nt==null?void 0:nt.getBoundingClientRect().height)||0,Tf=Math.ceil((Rr+T)/T);Ae.push(Tf);var m0=Tf*T;nt&&(nt.style.height=m0-T+"px")}),Vt(Ae)}};return(0,l.jsx)("div",ye({className:(ft=[O.layout,Et],ft.filter(function(ce){return ce}).join(" ")),ref:dt,style:{gridTemplateColumns:"repeat("+(b||3)+", minmax("+(K||300)+"px,1fr))",gridGap:T+"px"}},{children:Ue.map(function(ce,Ae){return u().isValidElement(ce)?(0,l.jsx)(c,ye({gridSpan:ct[Ae]},{children:ce}),ce.key||Ae):null})}),void 0)}})(),o})())})(f0);var xR=f0.exports,IR=xR;const kR=im(IR),TR=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    90deg,
    rgb(245, 157, 157) 0%,
    rgb(255, 186, 186) 100%
  );
  border-radius: 100px;
  padding: 8px 0;
  cursor: pointer;

  &:hover {
    background: #fc8c8c;
  }
`,NR=P.img`
  margin-right: 8px;
`,RR=P.div.attrs({className:"eclair-font"})`
  font-size: 16px;
  color: #ffffff;
`,PR={plus:"./assets/images/icon_plus.svg"},qs=({className:e,children:t,icon:n,onClick:r})=>I.jsxs(TR,{className:e,onClick:r,children:[n?I.jsx(NR,{src:PR[n],alt:n}):null,I.jsx(RR,{children:t})]}),bR=P.div`
  min-height: 100vh;
  background-image: url(./assets/images/background.png);
  background-position-x: center;
`,AR=P.div`
  width: fit-content;
  max-width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto 32px;
  gap: 4px;
  padding: 4px 28px;
  overflow-x: scroll;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    margin-bottom: 16px;
  }
`,DR=P(kR)`
  max-width: 1194px;
  column-gap: 24px !important;
  row-gap: 10.5px !important;
  margin: auto;
  padding: 0 24px;

  & > div {
    height: fit-content;
  }

  ${({theme:e})=>e.breakpoints.down("sm")} {
    row-gap: 10px !important;
  }
`,OR=P.div`
  max-width: 250px;
  padding: 16px 0 32px;
  margin: auto;
  position: sticky;
  bottom: 0;
`,MR=P(qs)`
  box-shadow: 4px 4px 20px 10px rgba(246, 160, 160, 0.3);
`,LR=({setPage:e})=>{const t=Us(),n=cl(t.breakpoints.down("sm")),r=cl(t.breakpoints.between("sm","lg")),{stats:i,wishes:s}=c0(),[o]=yC();return I.jsxs(bR,{children:[I.jsx(sR,{}),I.jsx(AR,{ref:o,children:Object.keys($).sort((l,a)=>{var u,f;return(((u=i[a])==null?void 0:u.amount)??0)-(((f=i[l])==null?void 0:f.amount)??0)}).map(l=>{var a;return I.jsx(pR,{gift:l,amount:((a=i[l])==null?void 0:a.amount)??0},`${l}-stat`)})}),I.jsx(DR,{minWidth:80,colCount:n?1:r?2:3,items:s.map(l=>I.jsx(SR,{...l},l.id))}),I.jsx(OR,{children:I.jsx(MR,{icon:"plus",onClick:()=>e("giftPage"),children:"เขียนคำอวยพร"})})]})},FR=Sr`
  0%   { top: -5px; }
  50%  { top: 5px; }
  100% { top: -5px; }
`,$R=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: linear-gradient(
    180deg,
    ${e=>e.color} 0%,
    white 50%,
    white 100%
  );
  min-height: 100vh;
  padding: 48px 24px;

  & > div {
    width: 100%;
  }
`,BR=P.div.attrs({className:"eclair-font"})`
  color: ${e=>e.color};
  font-size: 32px;
  line-height: 46px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    font-size: 24px;
    line-height: 35px;
  }
`,jR=P.img`
  width: 160px;
  margin: 24px 0;
  position: relative;
  animation: ${FR} 1.5s ease-in-out infinite;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    margin: 16px 0;
  }
`,zR=P.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 8px;
`,rm=P.img`
  width: 20px;
`,WR=P.div.attrs({className:"eclair-font"})`
  font-size: 20px;
  line-height: 29px;
  color: ${e=>e.color};
`,UR=P.div.attrs({className:"eclair-font"})`
  font-size: 16px;
  line-height: 23px;
  font-weight: 300;
  white-space: pre-line;
  color: #2d2d2d;
  margin-top: 8px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    font-size: 14px;
  }
`,HR=P.div`
  display: grid;
  column-gap: 16px;
  grid-template-columns: repeat(9, 1fr);
  max-width: 992px;
  margin: 32px auto 40px;

  ${({theme:e})=>e.breakpoints.down("lg")} {
    display: grid;
    column-gap: 16px;
    row-gap: 16px;
    grid-template-columns: repeat(3, 1fr);
    max-width: 320px;
    margin: 24px auto;
  }
`,VR=P.div`
  background-color: ${e=>e.selected?e.selectedBackgroundColor:"white"};
  border-radius: 8px;
  border: ${e=>e.selected?2:1}px solid
    ${e=>e.selected?e.selectedBorderColor:"#eaeaea"};
  padding: 12px 16px;
  position: relative;
  cursor: pointer;

  &:hover {
    background: ${e=>`${e.selectedBackgroundColor}CC`};
  }
`,GR=P.div`
  max-width: 500px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: auto;

  ${({theme:e})=>e.breakpoints.down("lg")} {
    max-width: 320px;
  }
`,QR=P(qs)`
  width: 100%;
  margin: auto;
  border: 1px solid ${e=>e.color};
  background: white;

  & > div {
    color: ${e=>e.color};
  }

  &:hover {
    background: ${e=>e.hoverColor};
  }
`,KR=P(qs)`
  width: 100%;
  margin: auto;
  background: linear-gradient(
    90deg,
    ${e=>e.color[0]} 0%,
    ${e=>e.color[1]} 100%
  );

  &:hover {
    background: ${e=>e.color[0]};
  }
`,YR=P.img`
  width: 100%;
  margin-bottom: 8px;
`,qR=P.div.attrs({className:"eclair-font"})`
  font-size: 16px;
  line-height: 23px;
  font-weight: 300;
  color: #2d2d2d;
`,h0=P.img`
  width: 20px;
  position: absolute;
  bottom: -6px;
`,XR=P(h0)`
  left: -6px;
`,JR=P(h0)`
  right: -6px;
`,ZR=({selectedGift:e,setSelectedGift:t,setPage:n})=>I.jsx($R,{color:$[e].colors.mainBackground,children:I.jsxs("div",{children:[I.jsx(BR,{color:$[e].colors.text,children:"เลือกของขวัญให้บาเบลกัน"}),I.jsx(jR,{src:$[e].giftImg,alt:e}),I.jsxs(zR,{children:[I.jsx(rm,{src:$[e].giftImg,alt:e}),I.jsx(WR,{color:$[e].colors.text,children:$[e].selectedTitle??$[e].title}),I.jsx(rm,{src:$[e].giftImg,alt:e})]}),I.jsx(UR,{children:$[e].description}),I.jsx(HR,{children:Object.keys($).map(r=>{const i=r===e;return I.jsxs(VR,{selected:i,selectedBorderColor:$[r].colors.border,selectedBackgroundColor:$[r].colors.selectBackground,onClick:()=>t(r),children:[I.jsx(YR,{src:$[r].giftImg,alt:r}),I.jsx(qR,{children:$[r].title}),i?I.jsxs(I.Fragment,{children:[I.jsx(XR,{src:"./assets/images/lamb_lefthand.png",alt:"lamb left hand"}),I.jsx(JR,{src:"./assets/images/lamb_righthand.png",alt:"lamb right hand"})]}):null]},r)})}),I.jsxs(GR,{children:[I.jsx(QR,{color:$[e].colors.buttonLeft,hoverColor:$[e].colors.selectBackground,onClick:()=>n("landingPage"),children:"กลับหน้าหลัก"}),I.jsx(KR,{color:[$[e].colors.buttonLeft,$[e].colors.buttonRight],onClick:()=>n("wishPage"),children:"เลือกชิ้นนี้แหละ!"})]})]})}),eP=Sr`
  0%   { transform: rotate(-2deg); }
  50%  { transform: rotate(2deg); }
  100% { transform: rotate(-2deg); }
`,p0=e=>ql`
  font-family: 'MN Luk Chup' !important;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.8px;
  color: #2d2d2d;
  caret-color: ${e.color};
  background: white;
  border: 2px solid ${e.color};
  box-shadow: 0px 4px 20px ${`${e.shadowColor}7F`};
  border-radius: 16px;
  outline: none;
  padding: 16px 24px;

  &::placeholder {
    color: ${e.color};
  }

  ${({theme:t})=>t.breakpoints.down("sm")} {
    font-size: 16px;
    line-height: 23px;
  }
`,tP=P.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    180deg,
    ${e=>e.color} 0%,
    white 50%,
    white 100%
  );
  min-height: 100vh;
  padding: 48px;

  & > div {
    width: 100%;
    text-align: center;
  }
`,nP=P.div.attrs({className:"eclair-font"})`
  color: ${e=>e.color};
  font-size: 32px;
  line-height: 46px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    font-size: 24px;
    line-height: 35px;
  }
`,rP=P.img`
  width: 230px;
  margin-top: 24px;
  margin-bottom: -54px;
  transform-origin: bottom center;
  animation: ${eP} 2s ease-in-out infinite;
`,iP=P.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,sP=P.input`
  ${e=>p0(e)}
  height: 55px;
  margin-bottom: 16px;
`,oP=P.textarea`
  ${e=>p0(e)}
  height: 200px;
  margin-bottom: 12px;
  resize: none;
`,lP=P.div.attrs({className:"eclair-font"})`
  color: ${e=>e.color};
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 32px;
`,aP=P.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
`,uP=P(qs)`
  width: 100%;
  margin: auto;
  border: 1px solid ${e=>e.color};
  background: white;

  & > div {
    color: ${e=>e.color};
  }

  &:hover {
    background: ${e=>e.hoverColor};
  }
`,cP=P(qs)`
  width: 100%;
  margin: auto;
  background: ${e=>e.disabled?e.disabledColor:`linear-gradient(90deg, ${e.color[0]} 0%, ${e.color[1]} 100%)`};
  cursor: ${e=>e.disabled?"default":"pointer"};

  &:hover {
    background: ${e=>e.disabled?e.disabledColor:`${e.color[0]}`};
  }
`,dP=({selectedGift:e,setPage:t})=>{const{createWish:n}=c0(),[r,i]=he.useState(""),[s,o]=he.useState(""),l=()=>{r&&s&&(n({gift:e,senderName:r,wish:s}),t("landingPage"))};return I.jsx(tP,{color:$[e].colors.mainBackground,children:I.jsxs("div",{children:[I.jsx(nP,{color:$[e].colors.text,children:"เขียนคำอวยพรให้บาเบล"}),I.jsx(rP,{src:$[e].baabaeImg,alt:"Baabae hold "+e}),I.jsxs(iP,{children:[I.jsx(sP,{maxLength:$N,type:"text",placeholder:"ชื่ออะไรฮะ...",color:$[e].colors.border,shadowColor:$[e].colors.mainBackground,value:r,onChange:a=>i(a.target.value)}),I.jsx(oP,{maxLength:Zp,rows:7,placeholder:"เขียนอวยพรตรงนี้เลย...",color:$[e].colors.border,shadowColor:$[e].colors.mainBackground,onChange:a=>o(a.target.value),children:s}),I.jsxs(lP,{color:$[e].colors.border,children:["คำอวยพร ",s.length,"/",Zp," ตัวอักษร"]}),I.jsxs(aP,{children:[I.jsx(uP,{color:$[e].colors.buttonLeft,hoverColor:$[e].colors.selectBackground,onClick:()=>t("giftPage"),children:"ย้อนกลับ"}),I.jsx(cP,{color:[$[e].colors.buttonLeft,$[e].colors.buttonRight],disabled:!r||!s,disabledColor:$[e].colors.mainBackground,onClick:l,children:"ส่งคำอวยพร"})]})]})]})})},fP=YE(),hP=()=>{const[e,t]=he.useState("landingPage"),[n,r]=he.useState("salad");return I.jsxs(jE,{theme:fP,children:[I.jsx(qE,{}),I.jsx(FN,{children:e==="landingPage"?I.jsx(LR,{setPage:t}):e==="giftPage"?I.jsx(ZR,{selectedGift:n,setSelectedGift:r,setPage:t}):e==="wishPage"?I.jsx(dP,{selectedGift:n,setPage:t}):null})]})};au.createRoot(document.getElementById("root")).render(I.jsx(Bt.StrictMode,{children:I.jsx(hP,{})}));
