(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var _0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function sm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var om={exports:{}},Al={},lm={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $s=Symbol.for("react.element"),v0=Symbol.for("react.portal"),w0=Symbol.for("react.fragment"),E0=Symbol.for("react.strict_mode"),C0=Symbol.for("react.profiler"),S0=Symbol.for("react.provider"),x0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),k0=Symbol.for("react.suspense"),T0=Symbol.for("react.memo"),N0=Symbol.for("react.lazy"),Pf=Symbol.iterator;function R0(e){return e===null||typeof e!="object"?null:(e=Pf&&e[Pf]||e["@@iterator"],typeof e=="function"?e:null)}var am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},um=Object.assign,cm={};function Ci(e,t,n){this.props=e,this.context=t,this.refs=cm,this.updater=n||am}Ci.prototype.isReactComponent={};Ci.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ci.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function dm(){}dm.prototype=Ci.prototype;function Mc(e,t,n){this.props=e,this.context=t,this.refs=cm,this.updater=n||am}var Lc=Mc.prototype=new dm;Lc.constructor=Mc;um(Lc,Ci.prototype);Lc.isPureReactComponent=!0;var bf=Array.isArray,fm=Object.prototype.hasOwnProperty,Fc={current:null},hm={key:!0,ref:!0,__self:!0,__source:!0};function pm(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)fm.call(t,r)&&!hm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:$s,type:e,key:s,ref:o,props:i,_owner:Fc.current}}function P0(e,t){return{$$typeof:$s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function $c(e){return typeof e=="object"&&e!==null&&e.$$typeof===$s}function b0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Af=/\/+/g;function ma(e,t){return typeof e=="object"&&e!==null&&e.key!=null?b0(""+e.key):t.toString(36)}function So(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case $s:case v0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+ma(o,0):r,bf(i)?(n="",e!=null&&(n=e.replace(Af,"$&/")+"/"),So(i,t,n,"",function(u){return u})):i!=null&&($c(i)&&(i=P0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Af,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",bf(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+ma(s,l);o+=So(s,t,n,a,i)}else if(a=R0(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+ma(s,l++),o+=So(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Xs(e,t,n){if(e==null)return e;var r=[],i=0;return So(e,r,"","",function(s){return t.call(n,s,i++)}),r}function A0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},xo={transition:null},D0={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:xo,ReactCurrentOwner:Fc};j.Children={map:Xs,forEach:function(e,t,n){Xs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Xs(e,function(){t++}),t},toArray:function(e){return Xs(e,function(t){return t})||[]},only:function(e){if(!$c(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=Ci;j.Fragment=w0;j.Profiler=C0;j.PureComponent=Mc;j.StrictMode=E0;j.Suspense=k0;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D0;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=um({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Fc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)fm.call(t,a)&&!hm.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:$s,type:e.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:x0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:S0,_context:e},e.Consumer=e};j.createElement=pm;j.createFactory=function(e){var t=pm.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:I0,render:e}};j.isValidElement=$c;j.lazy=function(e){return{$$typeof:N0,_payload:{_status:-1,_result:e},_init:A0}};j.memo=function(e,t){return{$$typeof:T0,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=xo.transition;xo.transition={};try{e()}finally{xo.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return ze.current.useCallback(e,t)};j.useContext=function(e){return ze.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};j.useEffect=function(e,t){return ze.current.useEffect(e,t)};j.useId=function(){return ze.current.useId()};j.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ze.current.useMemo(e,t)};j.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};j.useRef=function(e){return ze.current.useRef(e)};j.useState=function(e){return ze.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return ze.current.useTransition()};j.version="18.2.0";lm.exports=j;var ce=lm.exports;const Bt=sm(ce);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var O0=ce,M0=Symbol.for("react.element"),L0=Symbol.for("react.fragment"),F0=Object.prototype.hasOwnProperty,$0=O0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,B0={key:!0,ref:!0,__self:!0,__source:!0};function mm(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)F0.call(t,r)&&!B0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:M0,type:e,key:s,ref:o,props:i,_owner:$0.current}}Al.Fragment=L0;Al.jsx=mm;Al.jsxs=mm;om.exports=Al;var I=om.exports,cu={},gm={exports:{}},at={},ym={exports:{}},_m={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,D){var b=T.length;T.push(D);e:for(;0<b;){var V=b-1>>>1,K=T[V];if(0<i(K,D))T[V]=D,T[b]=K,b=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var D=T[0],b=T.pop();if(b!==D){T[0]=b;e:for(var V=0,K=T.length,be=K>>>1;V<be;){var ct=2*(V+1)-1,Vt=T[ct],$e=ct+1,tt=T[$e];if(0>i(Vt,b))$e<K&&0>i(tt,Vt)?(T[V]=tt,T[$e]=b,V=$e):(T[V]=Vt,T[ct]=b,V=ct);else if($e<K&&0>i(tt,b))T[V]=tt,T[$e]=b,V=$e;else break e}}return D}function i(T,D){var b=T.sortIndex-D.sortIndex;return b!==0?b:T.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,f=3,h=!1,y=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=T)r(u),D.sortIndex=D.expirationTime,t(a,D);else break;D=n(u)}}function v(T){if(_=!1,g(T),!y)if(n(a)!==null)y=!0,Et(E);else{var D=n(u);D!==null&&Pe(v,D.startTime-T)}}function E(T,D){y=!1,_&&(_=!1,m(N),N=-1),h=!0;var b=f;try{for(g(D),c=n(a);c!==null&&(!(c.expirationTime>D)||T&&!ye());){var V=c.callback;if(typeof V=="function"){c.callback=null,f=c.priorityLevel;var K=V(c.expirationTime<=D);D=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(a)&&r(a),g(D)}else r(a);c=n(a)}if(c!==null)var be=!0;else{var ct=n(u);ct!==null&&Pe(v,ct.startTime-D),be=!1}return be}finally{c=null,f=b,h=!1}}var S=!1,w=null,N=-1,z=5,O=-1;function ye(){return!(e.unstable_now()-O<z)}function Ht(){if(w!==null){var T=e.unstable_now();O=T;var D=!0;try{D=w(!0,T)}finally{D?re():(S=!1,w=null)}}else S=!1}var re;if(typeof p=="function")re=function(){p(Ht)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ue=_e.port2;_e.port1.onmessage=Ht,re=function(){Ue.postMessage(null)}}else re=function(){k(Ht,0)};function Et(T){w=T,S||(S=!0,re())}function Pe(T,D){N=k(function(){T(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,Et(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var b=f;f=D;try{return T()}finally{f=b}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,D){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var b=f;f=T;try{return D()}finally{f=b}},e.unstable_scheduleCallback=function(T,D,b){var V=e.unstable_now();switch(typeof b=="object"&&b!==null?(b=b.delay,b=typeof b=="number"&&0<b?V+b:V):b=V,T){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=b+K,T={id:d++,callback:D,priorityLevel:T,startTime:b,expirationTime:K,sortIndex:-1},b>V?(T.sortIndex=b,t(u,T),n(a)===null&&T===n(u)&&(_?(m(N),N=-1):_=!0,Pe(v,b-V))):(T.sortIndex=K,t(a,T),y||h||(y=!0,Et(E))),T},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(T){var D=f;return function(){var b=f;f=D;try{return T.apply(this,arguments)}finally{f=b}}}})(_m);ym.exports=_m;var j0=ym.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vm=ce,lt=j0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wm=new Set,ds={};function Er(e,t){ii(e,t),ii(e+"Capture",t)}function ii(e,t){for(ds[e]=t,e=0;e<t.length;e++)wm.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Df={},Of={};function W0(e){return du.call(Of,e)?!0:du.call(Df,e)?!1:z0.test(e)?Of[e]=!0:(Df[e]=!0,!1)}function U0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function H0(e,t,n,r){if(t===null||typeof t>"u"||U0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bc=/[\-:]([a-z])/g;function jc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bc,jc);Re[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bc,jc);Re[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bc,jc);Re[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function zc(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(H0(t,n,i,r)&&(n=null),r||i===null?W0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=vm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Js=Symbol.for("react.element"),Ar=Symbol.for("react.portal"),Dr=Symbol.for("react.fragment"),Wc=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),Cm=Symbol.for("react.context"),Uc=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),Hc=Symbol.for("react.memo"),mn=Symbol.for("react.lazy"),Sm=Symbol.for("react.offscreen"),Mf=Symbol.iterator;function bi(e){return e===null||typeof e!="object"?null:(e=Mf&&e[Mf]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,ga;function Hi(e){if(ga===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ga=t&&t[1]||""}return`
`+ga+e}var ya=!1;function _a(e,t){if(!e||ya)return"";ya=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{ya=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Hi(e):""}function V0(e){switch(e.tag){case 5:return Hi(e.type);case 16:return Hi("Lazy");case 13:return Hi("Suspense");case 19:return Hi("SuspenseList");case 0:case 2:case 15:return e=_a(e.type,!1),e;case 11:return e=_a(e.type.render,!1),e;case 1:return e=_a(e.type,!0),e;default:return""}}function mu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Dr:return"Fragment";case Ar:return"Portal";case fu:return"Profiler";case Wc:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Cm:return(e.displayName||"Context")+".Consumer";case Em:return(e._context.displayName||"Context")+".Provider";case Uc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Hc:return t=e.displayName||null,t!==null?t:mu(e.type)||"Memo";case mn:t=e._payload,e=e._init;try{return mu(e(t))}catch{}}return null}function G0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(t);case 8:return t===Wc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function On(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Q0(e){var t=xm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zs(e){e._valueTracker||(e._valueTracker=Q0(e))}function Im(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=xm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Bo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function gu(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Lf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=On(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function km(e,t){t=t.checked,t!=null&&zc(e,"checked",t,!1)}function yu(e,t){km(e,t);var n=On(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?_u(e,t.type,n):t.hasOwnProperty("defaultValue")&&_u(e,t.type,On(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ff(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function _u(e,t,n){(t!=="number"||Bo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Vi=Array.isArray;function Qr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+On(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function vu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $f(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Vi(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:On(n)}}function Tm(e,t){var n=On(t.value),r=On(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Nm(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Nm(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,Rm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function fs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},K0=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(e){K0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Yi[t]=Yi[e]})});function Pm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Yi.hasOwnProperty(e)&&Yi[e]?(""+t).trim():t+"px"}function bm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Pm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Y0=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Eu(e,t){if(t){if(Y0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function Cu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=null;function Vc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xu=null,Kr=null,Yr=null;function jf(e){if(e=zs(e)){if(typeof xu!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Fl(t),xu(e.stateNode,e.type,t))}}function Am(e){Kr?Yr?Yr.push(e):Yr=[e]:Kr=e}function Dm(){if(Kr){var e=Kr,t=Yr;if(Yr=Kr=null,jf(e),t)for(e=0;e<t.length;e++)jf(t[e])}}function Om(e,t){return e(t)}function Mm(){}var va=!1;function Lm(e,t,n){if(va)return e(t,n);va=!0;try{return Om(e,t,n)}finally{va=!1,(Kr!==null||Yr!==null)&&(Mm(),Dm())}}function hs(e,t){var n=e.stateNode;if(n===null)return null;var r=Fl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Iu=!1;if(tn)try{var Ai={};Object.defineProperty(Ai,"passive",{get:function(){Iu=!0}}),window.addEventListener("test",Ai,Ai),window.removeEventListener("test",Ai,Ai)}catch{Iu=!1}function q0(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var qi=!1,jo=null,zo=!1,ku=null,X0={onError:function(e){qi=!0,jo=e}};function J0(e,t,n,r,i,s,o,l,a){qi=!1,jo=null,q0.apply(X0,arguments)}function Z0(e,t,n,r,i,s,o,l,a){if(J0.apply(this,arguments),qi){if(qi){var u=jo;qi=!1,jo=null}else throw Error(C(198));zo||(zo=!0,ku=u)}}function Cr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Fm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zf(e){if(Cr(e)!==e)throw Error(C(188))}function e1(e){var t=e.alternate;if(!t){if(t=Cr(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zf(i),e;if(s===r)return zf(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function $m(e){return e=e1(e),e!==null?Bm(e):null}function Bm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Bm(e);if(t!==null)return t;e=e.sibling}return null}var jm=lt.unstable_scheduleCallback,Wf=lt.unstable_cancelCallback,t1=lt.unstable_shouldYield,n1=lt.unstable_requestPaint,ue=lt.unstable_now,r1=lt.unstable_getCurrentPriorityLevel,Gc=lt.unstable_ImmediatePriority,zm=lt.unstable_UserBlockingPriority,Wo=lt.unstable_NormalPriority,i1=lt.unstable_LowPriority,Wm=lt.unstable_IdlePriority,Dl=null,zt=null;function s1(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Dl,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:a1,o1=Math.log,l1=Math.LN2;function a1(e){return e>>>=0,e===0?32:31-(o1(e)/l1|0)|0}var to=64,no=4194304;function Gi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Gi(l):(s&=o,s!==0&&(r=Gi(s)))}else o=n&~i,o!==0?r=Gi(o):s!==0&&(r=Gi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),i=1<<n,r|=e[n],t&=~i;return r}function u1(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function c1(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Rt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=u1(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function Tu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Um(){var e=to;return to<<=1,!(to&4194240)&&(to=64),e}function wa(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Bs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function d1(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Qc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function Hm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Vm,Kc,Gm,Qm,Km,Nu=!1,ro=[],En=null,Cn=null,Sn=null,ps=new Map,ms=new Map,yn=[],f1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uf(e,t){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Cn=null;break;case"mouseover":case"mouseout":Sn=null;break;case"pointerover":case"pointerout":ps.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ms.delete(t.pointerId)}}function Di(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=zs(t),t!==null&&Kc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function h1(e,t,n,r,i){switch(t){case"focusin":return En=Di(En,e,t,n,r,i),!0;case"dragenter":return Cn=Di(Cn,e,t,n,r,i),!0;case"mouseover":return Sn=Di(Sn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return ps.set(s,Di(ps.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ms.set(s,Di(ms.get(s)||null,e,t,n,r,i)),!0}return!1}function Ym(e){var t=Qn(e.target);if(t!==null){var n=Cr(t);if(n!==null){if(t=n.tag,t===13){if(t=Fm(n),t!==null){e.blockedOn=t,Km(e.priority,function(){Gm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Io(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ru(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Su=r,n.target.dispatchEvent(r),Su=null}else return t=zs(n),t!==null&&Kc(t),e.blockedOn=n,!1;t.shift()}return!0}function Hf(e,t,n){Io(e)&&n.delete(t)}function p1(){Nu=!1,En!==null&&Io(En)&&(En=null),Cn!==null&&Io(Cn)&&(Cn=null),Sn!==null&&Io(Sn)&&(Sn=null),ps.forEach(Hf),ms.forEach(Hf)}function Oi(e,t){e.blockedOn===t&&(e.blockedOn=null,Nu||(Nu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,p1)))}function gs(e){function t(i){return Oi(i,e)}if(0<ro.length){Oi(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(En!==null&&Oi(En,e),Cn!==null&&Oi(Cn,e),Sn!==null&&Oi(Sn,e),ps.forEach(t),ms.forEach(t),n=0;n<yn.length;n++)r=yn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<yn.length&&(n=yn[0],n.blockedOn===null);)Ym(n),n.blockedOn===null&&yn.shift()}var qr=un.ReactCurrentBatchConfig,Ho=!0;function m1(e,t,n,r){var i=G,s=qr.transition;qr.transition=null;try{G=1,Yc(e,t,n,r)}finally{G=i,qr.transition=s}}function g1(e,t,n,r){var i=G,s=qr.transition;qr.transition=null;try{G=4,Yc(e,t,n,r)}finally{G=i,qr.transition=s}}function Yc(e,t,n,r){if(Ho){var i=Ru(e,t,n,r);if(i===null)Pa(e,t,r,Vo,n),Uf(e,r);else if(h1(i,e,t,n,r))r.stopPropagation();else if(Uf(e,r),t&4&&-1<f1.indexOf(e)){for(;i!==null;){var s=zs(i);if(s!==null&&Vm(s),s=Ru(e,t,n,r),s===null&&Pa(e,t,r,Vo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Pa(e,t,r,null,n)}}var Vo=null;function Ru(e,t,n,r){if(Vo=null,e=Vc(r),e=Qn(e),e!==null)if(t=Cr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Fm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vo=e,null}function qm(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(r1()){case Gc:return 1;case zm:return 4;case Wo:case i1:return 16;case Wm:return 536870912;default:return 16}default:return 16}}var vn=null,qc=null,ko=null;function Xm(){if(ko)return ko;var e,t=qc,n=t.length,r,i="value"in vn?vn.value:vn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return ko=i.slice(e,1<r?1-r:void 0)}function To(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function io(){return!0}function Vf(){return!1}function ut(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?io:Vf,this.isPropagationStopped=Vf,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=io)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=io)},persist:function(){},isPersistent:io}),t}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xc=ut(Si),js=oe({},Si,{view:0,detail:0}),y1=ut(js),Ea,Ca,Mi,Ol=oe({},js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Mi&&(Mi&&e.type==="mousemove"?(Ea=e.screenX-Mi.screenX,Ca=e.screenY-Mi.screenY):Ca=Ea=0,Mi=e),Ea)},movementY:function(e){return"movementY"in e?e.movementY:Ca}}),Gf=ut(Ol),_1=oe({},Ol,{dataTransfer:0}),v1=ut(_1),w1=oe({},js,{relatedTarget:0}),Sa=ut(w1),E1=oe({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),C1=ut(E1),S1=oe({},Si,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),x1=ut(S1),I1=oe({},Si,{data:0}),Qf=ut(I1),k1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},N1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function R1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=N1[e])?!!t[e]:!1}function Jc(){return R1}var P1=oe({},js,{key:function(e){if(e.key){var t=k1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=To(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?T1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(e){return e.type==="keypress"?To(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?To(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),b1=ut(P1),A1=oe({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kf=ut(A1),D1=oe({},js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),O1=ut(D1),M1=oe({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),L1=ut(M1),F1=oe({},Ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),$1=ut(F1),B1=[9,13,27,32],Zc=tn&&"CompositionEvent"in window,Xi=null;tn&&"documentMode"in document&&(Xi=document.documentMode);var j1=tn&&"TextEvent"in window&&!Xi,Jm=tn&&(!Zc||Xi&&8<Xi&&11>=Xi),Yf=String.fromCharCode(32),qf=!1;function Zm(e,t){switch(e){case"keyup":return B1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eg(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function z1(e,t){switch(e){case"compositionend":return eg(t);case"keypress":return t.which!==32?null:(qf=!0,Yf);case"textInput":return e=t.data,e===Yf&&qf?null:e;default:return null}}function W1(e,t){if(Or)return e==="compositionend"||!Zc&&Zm(e,t)?(e=Xm(),ko=qc=vn=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Jm&&t.locale!=="ko"?null:t.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!U1[e.type]:t==="textarea"}function tg(e,t,n,r){Am(r),t=Go(t,"onChange"),0<t.length&&(n=new Xc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ji=null,ys=null;function H1(e){fg(e,0)}function Ml(e){var t=Fr(e);if(Im(t))return e}function V1(e,t){if(e==="change")return t}var ng=!1;if(tn){var xa;if(tn){var Ia="oninput"in document;if(!Ia){var Jf=document.createElement("div");Jf.setAttribute("oninput","return;"),Ia=typeof Jf.oninput=="function"}xa=Ia}else xa=!1;ng=xa&&(!document.documentMode||9<document.documentMode)}function Zf(){Ji&&(Ji.detachEvent("onpropertychange",rg),ys=Ji=null)}function rg(e){if(e.propertyName==="value"&&Ml(ys)){var t=[];tg(t,ys,e,Vc(e)),Lm(H1,t)}}function G1(e,t,n){e==="focusin"?(Zf(),Ji=t,ys=n,Ji.attachEvent("onpropertychange",rg)):e==="focusout"&&Zf()}function Q1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ml(ys)}function K1(e,t){if(e==="click")return Ml(t)}function Y1(e,t){if(e==="input"||e==="change")return Ml(t)}function q1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:q1;function _s(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!du.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function eh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function th(e,t){var n=eh(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eh(n)}}function ig(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ig(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function sg(){for(var e=window,t=Bo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Bo(e.document)}return t}function ed(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function X1(e){var t=sg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ig(n.ownerDocument.documentElement,n)){if(r!==null&&ed(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=th(n,s);var o=th(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var J1=tn&&"documentMode"in document&&11>=document.documentMode,Mr=null,Pu=null,Zi=null,bu=!1;function nh(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bu||Mr==null||Mr!==Bo(r)||(r=Mr,"selectionStart"in r&&ed(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Zi&&_s(Zi,r)||(Zi=r,r=Go(Pu,"onSelect"),0<r.length&&(t=new Xc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Mr)))}function so(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Lr={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},ka={},og={};tn&&(og=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function Ll(e){if(ka[e])return ka[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in og)return ka[e]=t[n];return e}var lg=Ll("animationend"),ag=Ll("animationiteration"),ug=Ll("animationstart"),cg=Ll("transitionend"),dg=new Map,rh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(e,t){dg.set(e,t),Er(t,[e])}for(var Ta=0;Ta<rh.length;Ta++){var Na=rh[Ta],Z1=Na.toLowerCase(),ew=Na[0].toUpperCase()+Na.slice(1);Bn(Z1,"on"+ew)}Bn(lg,"onAnimationEnd");Bn(ag,"onAnimationIteration");Bn(ug,"onAnimationStart");Bn("dblclick","onDoubleClick");Bn("focusin","onFocus");Bn("focusout","onBlur");Bn(cg,"onTransitionEnd");ii("onMouseEnter",["mouseout","mouseover"]);ii("onMouseLeave",["mouseout","mouseover"]);ii("onPointerEnter",["pointerout","pointerover"]);ii("onPointerLeave",["pointerout","pointerover"]);Er("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Er("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Er("onBeforeInput",["compositionend","keypress","textInput","paste"]);Er("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Er("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qi));function ih(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Z0(r,t,void 0,e),e.currentTarget=null}function fg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;ih(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;ih(i,l,u),s=a}}}if(zo)throw e=ku,zo=!1,ku=null,e}function J(e,t){var n=t[Lu];n===void 0&&(n=t[Lu]=new Set);var r=e+"__bubble";n.has(r)||(hg(t,e,2,!1),n.add(r))}function Ra(e,t,n){var r=0;t&&(r|=4),hg(n,e,r,t)}var oo="_reactListening"+Math.random().toString(36).slice(2);function vs(e){if(!e[oo]){e[oo]=!0,wm.forEach(function(n){n!=="selectionchange"&&(tw.has(n)||Ra(n,!1,e),Ra(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oo]||(t[oo]=!0,Ra("selectionchange",!1,t))}}function hg(e,t,n,r){switch(qm(t)){case 1:var i=m1;break;case 4:i=g1;break;default:i=Yc}n=i.bind(null,t,n,e),i=void 0,!Iu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Pa(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Qn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Lm(function(){var u=s,d=Vc(n),c=[];e:{var f=dg.get(e);if(f!==void 0){var h=Xc,y=e;switch(e){case"keypress":if(To(n)===0)break e;case"keydown":case"keyup":h=b1;break;case"focusin":y="focus",h=Sa;break;case"focusout":y="blur",h=Sa;break;case"beforeblur":case"afterblur":h=Sa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Gf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=v1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=O1;break;case lg:case ag:case ug:h=C1;break;case cg:h=L1;break;case"scroll":h=y1;break;case"wheel":h=$1;break;case"copy":case"cut":case"paste":h=x1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Kf}var _=(t&4)!==0,k=!_&&e==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,g;p!==null;){g=p;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,m!==null&&(v=hs(p,m),v!=null&&_.push(ws(p,v,g)))),k)break;p=p.return}0<_.length&&(f=new h(f,y,null,n,d),c.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==Su&&(y=n.relatedTarget||n.fromElement)&&(Qn(y)||y[nn]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Qn(y):null,y!==null&&(k=Cr(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(_=Gf,v="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(_=Kf,v="onPointerLeave",m="onPointerEnter",p="pointer"),k=h==null?f:Fr(h),g=y==null?f:Fr(y),f=new _(v,p+"leave",h,n,d),f.target=k,f.relatedTarget=g,v=null,Qn(d)===u&&(_=new _(m,p+"enter",y,n,d),_.target=g,_.relatedTarget=k,v=_),k=v,h&&y)t:{for(_=h,m=y,p=0,g=_;g;g=Pr(g))p++;for(g=0,v=m;v;v=Pr(v))g++;for(;0<p-g;)_=Pr(_),p--;for(;0<g-p;)m=Pr(m),g--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=Pr(_),m=Pr(m)}_=null}else _=null;h!==null&&sh(c,f,h,_,!1),y!==null&&k!==null&&sh(c,k,y,_,!0)}}e:{if(f=u?Fr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var E=V1;else if(Xf(f))if(ng)E=Y1;else{E=Q1;var S=G1}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=K1);if(E&&(E=E(e,u))){tg(c,E,n,d);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&_u(f,"number",f.value)}switch(S=u?Fr(u):window,e){case"focusin":(Xf(S)||S.contentEditable==="true")&&(Mr=S,Pu=u,Zi=null);break;case"focusout":Zi=Pu=Mr=null;break;case"mousedown":bu=!0;break;case"contextmenu":case"mouseup":case"dragend":bu=!1,nh(c,n,d);break;case"selectionchange":if(J1)break;case"keydown":case"keyup":nh(c,n,d)}var w;if(Zc)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Or?Zm(e,n)&&(N="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Jm&&n.locale!=="ko"&&(Or||N!=="onCompositionStart"?N==="onCompositionEnd"&&Or&&(w=Xm()):(vn=d,qc="value"in vn?vn.value:vn.textContent,Or=!0)),S=Go(u,N),0<S.length&&(N=new Qf(N,e,null,n,d),c.push({event:N,listeners:S}),w?N.data=w:(w=eg(n),w!==null&&(N.data=w)))),(w=j1?z1(e,n):W1(e,n))&&(u=Go(u,"onBeforeInput"),0<u.length&&(d=new Qf("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=w))}fg(c,t)})}function ws(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Go(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=hs(e,n),s!=null&&r.unshift(ws(e,s,i)),s=hs(e,t),s!=null&&r.push(ws(e,s,i))),e=e.return}return r}function Pr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=hs(n,s),a!=null&&o.unshift(ws(n,a,l))):i||(a=hs(n,s),a!=null&&o.push(ws(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var nw=/\r\n?/g,rw=/\u0000|\uFFFD/g;function oh(e){return(typeof e=="string"?e:""+e).replace(nw,`
`).replace(rw,"")}function lo(e,t,n){if(t=oh(t),oh(e)!==t&&n)throw Error(C(425))}function Qo(){}var Au=null,Du=null;function Ou(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mu=typeof setTimeout=="function"?setTimeout:void 0,iw=typeof clearTimeout=="function"?clearTimeout:void 0,lh=typeof Promise=="function"?Promise:void 0,sw=typeof queueMicrotask=="function"?queueMicrotask:typeof lh<"u"?function(e){return lh.resolve(null).then(e).catch(ow)}:Mu;function ow(e){setTimeout(function(){throw e})}function ba(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),gs(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);gs(t)}function xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ah(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var xi=Math.random().toString(36).slice(2),$t="__reactFiber$"+xi,Es="__reactProps$"+xi,nn="__reactContainer$"+xi,Lu="__reactEvents$"+xi,lw="__reactListeners$"+xi,aw="__reactHandles$"+xi;function Qn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=ah(e);e!==null;){if(n=e[$t])return n;e=ah(e)}return t}e=n,n=e.parentNode}return null}function zs(e){return e=e[$t]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Fr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Fl(e){return e[Es]||null}var Fu=[],$r=-1;function jn(e){return{current:e}}function te(e){0>$r||(e.current=Fu[$r],Fu[$r]=null,$r--)}function X(e,t){$r++,Fu[$r]=e.current,e.current=t}var Mn={},Fe=jn(Mn),Ke=jn(!1),ir=Mn;function si(e,t){var n=e.type.contextTypes;if(!n)return Mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function Ko(){te(Ke),te(Fe)}function uh(e,t,n){if(Fe.current!==Mn)throw Error(C(168));X(Fe,t),X(Ke,n)}function pg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,G0(e)||"Unknown",i));return oe({},n,r)}function Yo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mn,ir=Fe.current,X(Fe,e),X(Ke,Ke.current),!0}function ch(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=pg(e,t,ir),r.__reactInternalMemoizedMergedChildContext=e,te(Ke),te(Fe),X(Fe,e)):te(Ke),X(Ke,n)}var Qt=null,$l=!1,Aa=!1;function mg(e){Qt===null?Qt=[e]:Qt.push(e)}function uw(e){$l=!0,mg(e)}function zn(){if(!Aa&&Qt!==null){Aa=!0;var e=0,t=G;try{var n=Qt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,$l=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),jm(Gc,zn),i}finally{G=t,Aa=!1}}return null}var Br=[],jr=0,qo=null,Xo=0,pt=[],mt=0,sr=null,Yt=1,qt="";function Un(e,t){Br[jr++]=Xo,Br[jr++]=qo,qo=e,Xo=t}function gg(e,t,n){pt[mt++]=Yt,pt[mt++]=qt,pt[mt++]=sr,sr=e;var r=Yt;e=qt;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var s=32-Rt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Rt(t)+i|n<<i|r,qt=s+e}else Yt=1<<s|n<<i|r,qt=e}function td(e){e.return!==null&&(Un(e,1),gg(e,1,0))}function nd(e){for(;e===qo;)qo=Br[--jr],Br[jr]=null,Xo=Br[--jr],Br[jr]=null;for(;e===sr;)sr=pt[--mt],pt[mt]=null,qt=pt[--mt],pt[mt]=null,Yt=pt[--mt],pt[mt]=null}var st=null,it=null,ne=!1,It=null;function yg(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function dh(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,it=xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=sr!==null?{id:Yt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,it=null,!0):!1;default:return!1}}function $u(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bu(e){if(ne){var t=it;if(t){var n=t;if(!dh(e,t)){if($u(e))throw Error(C(418));t=xn(n.nextSibling);var r=st;t&&dh(e,t)?yg(r,n):(e.flags=e.flags&-4097|2,ne=!1,st=e)}}else{if($u(e))throw Error(C(418));e.flags=e.flags&-4097|2,ne=!1,st=e}}}function fh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function ao(e){if(e!==st)return!1;if(!ne)return fh(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ou(e.type,e.memoizedProps)),t&&(t=it)){if($u(e))throw _g(),Error(C(418));for(;t;)yg(e,t),t=xn(t.nextSibling)}if(fh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=xn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=st?xn(e.stateNode.nextSibling):null;return!0}function _g(){for(var e=it;e;)e=xn(e.nextSibling)}function oi(){it=st=null,ne=!1}function rd(e){It===null?It=[e]:It.push(e)}var cw=un.ReactCurrentBatchConfig;function St(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Jo=jn(null),Zo=null,zr=null,id=null;function sd(){id=zr=Zo=null}function od(e){var t=Jo.current;te(Jo),e._currentValue=t}function ju(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Xr(e,t){Zo=e,id=zr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(id!==e)if(e={context:e,memoizedValue:t,next:null},zr===null){if(Zo===null)throw Error(C(308));zr=e,Zo.dependencies={lanes:0,firstContext:e}}else zr=zr.next=e;return t}var Kn=null;function ld(e){Kn===null?Kn=[e]:Kn.push(e)}function vg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ld(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var gn=!1;function ad(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function wg(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,ld(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function No(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qc(e,n)}}function hh(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function el(e,t,n,r){var i=e.updateQueue;gn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,_=l;switch(f=t,h=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){c=y.call(h,c,f);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(h,c,f):y,f==null)break e;c=oe({},c,f);break e;case 2:gn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,a=c):d=d.next=h,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);lr|=o,e.lanes=o,e.memoizedState=c}}function ph(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var Eg=new vm.Component().refs;function zu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Bl={isMounted:function(e){return(e=e._reactInternals)?Cr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=Tn(e),s=Zt(r,i);s.payload=t,n!=null&&(s.callback=n),t=In(e,s,i),t!==null&&(Pt(t,e,i,r),No(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=Tn(e),s=Zt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=In(e,s,i),t!==null&&(Pt(t,e,i,r),No(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=Tn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=In(e,i,r),t!==null&&(Pt(t,e,r,n),No(t,e,r))}};function mh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!_s(n,r)||!_s(i,s):!0}function Cg(e,t,n){var r=!1,i=Mn,s=t.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=Ye(t)?ir:Fe.current,r=t.contextTypes,s=(r=r!=null)?si(e,i):Mn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Bl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function gh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Bl.enqueueReplaceState(t,t.state,null)}function Wu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Eg,ad(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=Ye(t)?ir:Fe.current,i.context=si(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(zu(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Bl.enqueueReplaceState(i,i.state,null),el(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Li(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===Eg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function uo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yh(e){var t=e._init;return t(e._payload)}function Sg(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Nn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,v){return p===null||p.tag!==6?(p=Ba(g,m.mode,v),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,v){var E=g.type;return E===Dr?d(m,p,g.props.children,v,g.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&yh(E)===p.type)?(v=i(p,g.props),v.ref=Li(m,p,g),v.return=m,v):(v=Oo(g.type,g.key,g.props,null,m.mode,v),v.ref=Li(m,p,g),v.return=m,v)}function u(m,p,g,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ja(g,m.mode,v),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,v,E){return p===null||p.tag!==7?(p=tr(g,m.mode,v,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function c(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ba(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Js:return g=Oo(p.type,p.key,p.props,null,m.mode,g),g.ref=Li(m,null,p),g.return=m,g;case Ar:return p=ja(p,m.mode,g),p.return=m,p;case mn:var v=p._init;return c(m,v(p._payload),g)}if(Vi(p)||bi(p))return p=tr(p,m.mode,g,null),p.return=m,p;uo(m,p)}return null}function f(m,p,g,v){var E=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:l(m,p,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:return g.key===E?a(m,p,g,v):null;case Ar:return g.key===E?u(m,p,g,v):null;case mn:return E=g._init,f(m,p,E(g._payload),v)}if(Vi(g)||bi(g))return E!==null?null:d(m,p,g,v,null);uo(m,g)}return null}function h(m,p,g,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(g)||null,l(p,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Js:return m=m.get(v.key===null?g:v.key)||null,a(p,m,v,E);case Ar:return m=m.get(v.key===null?g:v.key)||null,u(p,m,v,E);case mn:var S=v._init;return h(m,p,g,S(v._payload),E)}if(Vi(v)||bi(v))return m=m.get(g)||null,d(p,m,v,E,null);uo(p,v)}return null}function y(m,p,g,v){for(var E=null,S=null,w=p,N=p=0,z=null;w!==null&&N<g.length;N++){w.index>N?(z=w,w=null):z=w.sibling;var O=f(m,w,g[N],v);if(O===null){w===null&&(w=z);break}e&&w&&O.alternate===null&&t(m,w),p=s(O,p,N),S===null?E=O:S.sibling=O,S=O,w=z}if(N===g.length)return n(m,w),ne&&Un(m,N),E;if(w===null){for(;N<g.length;N++)w=c(m,g[N],v),w!==null&&(p=s(w,p,N),S===null?E=w:S.sibling=w,S=w);return ne&&Un(m,N),E}for(w=r(m,w);N<g.length;N++)z=h(w,m,N,g[N],v),z!==null&&(e&&z.alternate!==null&&w.delete(z.key===null?N:z.key),p=s(z,p,N),S===null?E=z:S.sibling=z,S=z);return e&&w.forEach(function(ye){return t(m,ye)}),ne&&Un(m,N),E}function _(m,p,g,v){var E=bi(g);if(typeof E!="function")throw Error(C(150));if(g=E.call(g),g==null)throw Error(C(151));for(var S=E=null,w=p,N=p=0,z=null,O=g.next();w!==null&&!O.done;N++,O=g.next()){w.index>N?(z=w,w=null):z=w.sibling;var ye=f(m,w,O.value,v);if(ye===null){w===null&&(w=z);break}e&&w&&ye.alternate===null&&t(m,w),p=s(ye,p,N),S===null?E=ye:S.sibling=ye,S=ye,w=z}if(O.done)return n(m,w),ne&&Un(m,N),E;if(w===null){for(;!O.done;N++,O=g.next())O=c(m,O.value,v),O!==null&&(p=s(O,p,N),S===null?E=O:S.sibling=O,S=O);return ne&&Un(m,N),E}for(w=r(m,w);!O.done;N++,O=g.next())O=h(w,m,N,O.value,v),O!==null&&(e&&O.alternate!==null&&w.delete(O.key===null?N:O.key),p=s(O,p,N),S===null?E=O:S.sibling=O,S=O);return e&&w.forEach(function(Ht){return t(m,Ht)}),ne&&Un(m,N),E}function k(m,p,g,v){if(typeof g=="object"&&g!==null&&g.type===Dr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Js:e:{for(var E=g.key,S=p;S!==null;){if(S.key===E){if(E=g.type,E===Dr){if(S.tag===7){n(m,S.sibling),p=i(S,g.props.children),p.return=m,m=p;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===mn&&yh(E)===S.type){n(m,S.sibling),p=i(S,g.props),p.ref=Li(m,S,g),p.return=m,m=p;break e}n(m,S);break}else t(m,S);S=S.sibling}g.type===Dr?(p=tr(g.props.children,m.mode,v,g.key),p.return=m,m=p):(v=Oo(g.type,g.key,g.props,null,m.mode,v),v.ref=Li(m,p,g),v.return=m,m=v)}return o(m);case Ar:e:{for(S=g.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=ja(g,m.mode,v),p.return=m,m=p}return o(m);case mn:return S=g._init,k(m,p,S(g._payload),v)}if(Vi(g))return y(m,p,g,v);if(bi(g))return _(m,p,g,v);uo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=Ba(g,m.mode,v),p.return=m,m=p),o(m)):n(m,p)}return k}var li=Sg(!0),xg=Sg(!1),Ws={},Wt=jn(Ws),Cs=jn(Ws),Ss=jn(Ws);function Yn(e){if(e===Ws)throw Error(C(174));return e}function ud(e,t){switch(X(Ss,t),X(Cs,e),X(Wt,Ws),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:wu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=wu(t,e)}te(Wt),X(Wt,t)}function ai(){te(Wt),te(Cs),te(Ss)}function Ig(e){Yn(Ss.current);var t=Yn(Wt.current),n=wu(t,e.type);t!==n&&(X(Cs,e),X(Wt,n))}function cd(e){Cs.current===e&&(te(Wt),te(Cs))}var ie=jn(0);function tl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Da=[];function dd(){for(var e=0;e<Da.length;e++)Da[e]._workInProgressVersionPrimary=null;Da.length=0}var Ro=un.ReactCurrentDispatcher,Oa=un.ReactCurrentBatchConfig,or=0,se=null,pe=null,we=null,nl=!1,es=!1,xs=0,dw=0;function De(){throw Error(C(321))}function fd(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function hd(e,t,n,r,i,s){if(or=s,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ro.current=e===null||e.memoizedState===null?mw:gw,e=n(r,i),es){s=0;do{if(es=!1,xs=0,25<=s)throw Error(C(301));s+=1,we=pe=null,t.updateQueue=null,Ro.current=yw,e=n(r,i)}while(es)}if(Ro.current=rl,t=pe!==null&&pe.next!==null,or=0,we=pe=se=null,nl=!1,t)throw Error(C(300));return e}function pd(){var e=xs!==0;return xs=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?se.memoizedState=we=e:we=we.next=e,we}function vt(){if(pe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=we===null?se.memoizedState:we.next;if(t!==null)we=t,pe=e;else{if(e===null)throw Error(C(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?se.memoizedState=we=e:we=we.next=e}return we}function Is(e,t){return typeof t=="function"?t(e):t}function Ma(e){var t=vt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((or&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,se.lanes|=d,lr|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Dt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,se.lanes|=s,lr|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function La(e){var t=vt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Dt(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function kg(){}function Tg(e,t){var n=se,r=vt(),i=t(),s=!Dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,md(Pg.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,ks(9,Rg.bind(null,n,r,i,t),void 0,null),Ie===null)throw Error(C(349));or&30||Ng(n,t,i)}return i}function Ng(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Rg(e,t,n,r){t.value=n,t.getSnapshot=r,bg(t)&&Ag(e)}function Pg(e,t,n){return n(function(){bg(t)&&Ag(e)})}function bg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Ag(e){var t=rn(e,1);t!==null&&Pt(t,e,1,-1)}function _h(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Is,lastRenderedState:e},t.queue=e,e=e.dispatch=pw.bind(null,se,e),[t.memoizedState,e]}function ks(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Dg(){return vt().memoizedState}function Po(e,t,n,r){var i=Lt();se.flags|=e,i.memoizedState=ks(1|t,n,void 0,r===void 0?null:r)}function jl(e,t,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&fd(r,o.deps)){i.memoizedState=ks(t,n,s,r);return}}se.flags|=e,i.memoizedState=ks(1|t,n,s,r)}function vh(e,t){return Po(8390656,8,e,t)}function md(e,t){return jl(2048,8,e,t)}function Og(e,t){return jl(4,2,e,t)}function Mg(e,t){return jl(4,4,e,t)}function Lg(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Fg(e,t,n){return n=n!=null?n.concat([e]):null,jl(4,4,Lg.bind(null,t,e),n)}function gd(){}function $g(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fd(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Bg(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&fd(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function jg(e,t,n){return or&21?(Dt(n,t)||(n=Um(),se.lanes|=n,lr|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function fw(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Oa.transition;Oa.transition={};try{e(!1),t()}finally{G=n,Oa.transition=r}}function zg(){return vt().memoizedState}function hw(e,t,n){var r=Tn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Wg(e))Ug(t,n);else if(n=vg(e,t,n,r),n!==null){var i=je();Pt(n,e,r,i),Hg(n,t,r)}}function pw(e,t,n){var r=Tn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Wg(e))Ug(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Dt(l,o)){var a=t.interleaved;a===null?(i.next=i,ld(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=vg(e,t,i,r),n!==null&&(i=je(),Pt(n,e,r,i),Hg(n,t,r))}}function Wg(e){var t=e.alternate;return e===se||t!==null&&t===se}function Ug(e,t){es=nl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Hg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qc(e,n)}}var rl={readContext:_t,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},mw={readContext:_t,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:vh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Po(4194308,4,Lg.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Po(4194308,4,e,t)},useInsertionEffect:function(e,t){return Po(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=hw.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:_h,useDebugValue:gd,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=_h(!1),t=e[0];return e=fw.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=Lt();if(ne){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),Ie===null)throw Error(C(349));or&30||Ng(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,vh(Pg.bind(null,r,s,e),[e]),r.flags|=2048,ks(9,Rg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Lt(),t=Ie.identifierPrefix;if(ne){var n=qt,r=Yt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=xs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=dw++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},gw={readContext:_t,useCallback:$g,useContext:_t,useEffect:md,useImperativeHandle:Fg,useInsertionEffect:Og,useLayoutEffect:Mg,useMemo:Bg,useReducer:Ma,useRef:Dg,useState:function(){return Ma(Is)},useDebugValue:gd,useDeferredValue:function(e){var t=vt();return jg(t,pe.memoizedState,e)},useTransition:function(){var e=Ma(Is)[0],t=vt().memoizedState;return[e,t]},useMutableSource:kg,useSyncExternalStore:Tg,useId:zg,unstable_isNewReconciler:!1},yw={readContext:_t,useCallback:$g,useContext:_t,useEffect:md,useImperativeHandle:Fg,useInsertionEffect:Og,useLayoutEffect:Mg,useMemo:Bg,useReducer:La,useRef:Dg,useState:function(){return La(Is)},useDebugValue:gd,useDeferredValue:function(e){var t=vt();return pe===null?t.memoizedState=e:jg(t,pe.memoizedState,e)},useTransition:function(){var e=La(Is)[0],t=vt().memoizedState;return[e,t]},useMutableSource:kg,useSyncExternalStore:Tg,useId:zg,unstable_isNewReconciler:!1};function ui(e,t){try{var n="",r=t;do n+=V0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Fa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Uu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _w=typeof WeakMap=="function"?WeakMap:Map;function Vg(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){sl||(sl=!0,Zu=r),Uu(e,t)},n}function Gg(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Uu(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uu(e,t),typeof r!="function"&&(kn===null?kn=new Set([this]):kn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function wh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _w;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Aw.bind(null,e,t,n),t.then(e,e))}function Eh(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ch(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var vw=un.ReactCurrentOwner,Ve=!1;function Be(e,t,n,r){t.child=e===null?xg(t,null,n,r):li(t,e.child,n,r)}function Sh(e,t,n,r,i){n=n.render;var s=t.ref;return Xr(t,i),r=hd(e,t,n,r,s,i),n=pd(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(ne&&n&&td(t),t.flags|=1,Be(e,t,r,i),t.child)}function xh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!xd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Qg(e,t,s,r,i)):(e=Oo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:_s,n(o,r)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=Nn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Qg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(_s(s,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,sn(e,t,i)}return Hu(e,t,n,r,i)}function Kg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Ur,rt),rt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(Ur,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Ur,rt),rt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,X(Ur,rt),rt|=r;return Be(e,t,i,n),t.child}function Yg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Hu(e,t,n,r,i){var s=Ye(n)?ir:Fe.current;return s=si(t,s),Xr(t,i),n=hd(e,t,n,r,s,i),r=pd(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(ne&&r&&td(t),t.flags|=1,Be(e,t,n,i),t.child)}function Ih(e,t,n,r,i){if(Ye(n)){var s=!0;Yo(t)}else s=!1;if(Xr(t,i),t.stateNode===null)bo(e,t),Cg(t,n,r),Wu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=Ye(n)?ir:Fe.current,u=si(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&gh(t,o,r,u),gn=!1;var f=t.memoizedState;o.state=f,el(t,r,o,i),a=t.memoizedState,l!==r||f!==a||Ke.current||gn?(typeof d=="function"&&(zu(t,n,d,r),a=t.memoizedState),(l=gn||mh(t,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,wg(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:St(t.type,l),o.props=u,c=t.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=_t(a):(a=Ye(n)?ir:Fe.current,a=si(t,a));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&gh(t,o,r,a),gn=!1,f=t.memoizedState,o.state=f,el(t,r,o,i);var y=t.memoizedState;l!==c||f!==y||Ke.current||gn?(typeof h=="function"&&(zu(t,n,h,r),y=t.memoizedState),(u=gn||mh(t,n,u,r,f,y,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Vu(e,t,n,r,s,i)}function Vu(e,t,n,r,i,s){Yg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&ch(t,n,!1),sn(e,t,s);r=t.stateNode,vw.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=li(t,e.child,null,s),t.child=li(t,null,l,s)):Be(e,t,l,s),t.memoizedState=r.state,i&&ch(t,n,!0),t.child}function qg(e){var t=e.stateNode;t.pendingContext?uh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&uh(e,t.context,!1),ud(e,t.containerInfo)}function kh(e,t,n,r,i){return oi(),rd(i),t.flags|=256,Be(e,t,n,r),t.child}var Gu={dehydrated:null,treeContext:null,retryLane:0};function Qu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Xg(e,t,n){var r=t.pendingProps,i=ie.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(ie,i&1),e===null)return Bu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ul(o,r,0,null),e=tr(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Qu(n),t.memoizedState=Gu,e):yd(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return ww(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Nn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Nn(l,s):(s=tr(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Qu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Gu,r}return s=e.child,e=s.sibling,r=Nn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function yd(e,t){return t=Ul({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function co(e,t,n,r){return r!==null&&rd(r),li(t,e.child,null,n),e=yd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ww(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Fa(Error(C(422))),co(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ul({mode:"visible",children:r.children},i,0,null),s=tr(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&li(t,e.child,null,o),t.child.memoizedState=Qu(o),t.memoizedState=Gu,s);if(!(t.mode&1))return co(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Fa(s,r,void 0),co(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ve||l){if(r=Ie,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rn(e,i),Pt(r,e,i,-1))}return Sd(),r=Fa(Error(C(421))),co(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Dw.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,it=xn(i.nextSibling),st=t,ne=!0,It=null,e!==null&&(pt[mt++]=Yt,pt[mt++]=qt,pt[mt++]=sr,Yt=e.id,qt=e.overflow,sr=t),t=yd(t,r.children),t.flags|=4096,t)}function Th(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ju(e.return,t,n)}function $a(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Jg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Be(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Th(e,n,t);else if(e.tag===19)Th(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&tl(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),$a(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&tl(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}$a(t,!0,n,null,s);break;case"together":$a(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function bo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),lr|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Nn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Nn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Ew(e,t,n){switch(t.tag){case 3:qg(t),oi();break;case 5:Ig(t);break;case 1:Ye(t.type)&&Yo(t);break;case 4:ud(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Jo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Xg(e,t,n):(X(ie,ie.current&1),e=sn(e,t,n),e!==null?e.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Jg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Kg(e,t,n)}return sn(e,t,n)}var Zg,Ku,ey,ty;Zg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ku=function(){};ey=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yn(Wt.current);var s=null;switch(n){case"input":i=gu(e,i),r=gu(e,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=vu(e,i),r=vu(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qo)}Eu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ds.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ds.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};ty=function(e,t,n,r){n!==r&&(t.flags|=4)};function Fi(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Cw(e,t,n){var r=t.pendingProps;switch(nd(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ye(t.type)&&Ko(),Oe(t),null;case 3:return r=t.stateNode,ai(),te(Ke),te(Fe),dd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ao(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,It!==null&&(nc(It),It=null))),Ku(e,t),Oe(t),null;case 5:cd(t);var i=Yn(Ss.current);if(n=t.type,e!==null&&t.stateNode!=null)ey(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Oe(t),null}if(e=Yn(Wt.current),ao(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[$t]=t,r[Es]=s,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Qi.length;i++)J(Qi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Lf(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":$f(r,s),J("invalid",r)}Eu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&lo(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&lo(r.textContent,l,e),i=["children",""+l]):ds.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":Zs(r),Ff(r,s,!0);break;case"textarea":Zs(r),Bf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Qo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Nm(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$t]=t,e[Es]=r,Zg(e,t,!1,!1),t.stateNode=e;e:{switch(o=Cu(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<Qi.length;i++)J(Qi[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":Lf(e,r),i=gu(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),J("invalid",e);break;case"textarea":$f(e,r),i=vu(e,r),J("invalid",e);break;default:i=r}Eu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?bm(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Rm(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&fs(e,a):typeof a=="number"&&fs(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ds.hasOwnProperty(s)?a!=null&&s==="onScroll"&&J("scroll",e):a!=null&&zc(e,s,a,o))}switch(n){case"input":Zs(e),Ff(e,r,!1);break;case"textarea":Zs(e),Bf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+On(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Qr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Qr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)ty(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Yn(Ss.current),Yn(Wt.current),ao(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(s=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:lo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&lo(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Oe(t),null;case 13:if(te(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&it!==null&&t.mode&1&&!(t.flags&128))_g(),oi(),t.flags|=98560,s=!1;else if(s=ao(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[$t]=t}else oi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else It!==null&&(nc(It),It=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ge===0&&(ge=3):Sd())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return ai(),Ku(e,t),e===null&&vs(t.stateNode.containerInfo),Oe(t),null;case 10:return od(t.type._context),Oe(t),null;case 17:return Ye(t.type)&&Ko(),Oe(t),null;case 19:if(te(ie),s=t.memoizedState,s===null)return Oe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Fi(s,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=tl(e),o!==null){for(t.flags|=128,Fi(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),t.child}e=e.sibling}s.tail!==null&&ue()>ci&&(t.flags|=128,r=!0,Fi(s,!1),t.lanes=4194304)}else{if(!r)if(e=tl(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Oe(t),null}else 2*ue()-s.renderingStartTime>ci&&n!==1073741824&&(t.flags|=128,r=!0,Fi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ue(),t.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Cd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Sw(e,t){switch(nd(t),t.tag){case 1:return Ye(t.type)&&Ko(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ai(),te(Ke),te(Fe),dd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return cd(t),null;case 13:if(te(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));oi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ie),null;case 4:return ai(),null;case 10:return od(t.type._context),null;case 22:case 23:return Cd(),null;case 24:return null;default:return null}}var fo=!1,Me=!1,xw=typeof WeakSet=="function"?WeakSet:Set,R=null;function Wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function Yu(e,t,n){try{n()}catch(r){le(e,t,r)}}var Nh=!1;function Iw(e,t){if(Au=Ho,e=sg(),ed(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break t;if(f===n&&++u===i&&(l=o),f===s&&++d===r&&(a=o),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Du={focusedElem:e,selectionRange:n},Ho=!1,R=t;R!==null;)if(t=R,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,R=e;else for(;R!==null;){t=R;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,k=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?_:St(t.type,_),k);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){le(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,R=e;break}R=t.return}return y=Nh,Nh=!1,y}function ts(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Yu(t,n,s)}i=i.next}while(i!==r)}}function zl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function qu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ny(e){var t=e.alternate;t!==null&&(e.alternate=null,ny(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[Es],delete t[Lu],delete t[lw],delete t[aw])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ry(e){return e.tag===5||e.tag===3||e.tag===4}function Rh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ry(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qo));else if(r!==4&&(e=e.child,e!==null))for(Xu(e,t,n),e=e.sibling;e!==null;)Xu(e,t,n),e=e.sibling}function Ju(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ju(e,t,n),e=e.sibling;e!==null;)Ju(e,t,n),e=e.sibling}var ke=null,xt=!1;function hn(e,t,n){for(n=n.child;n!==null;)iy(e,t,n),n=n.sibling}function iy(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Dl,n)}catch{}switch(n.tag){case 5:Me||Wr(n,t);case 6:var r=ke,i=xt;ke=null,hn(e,t,n),ke=r,xt=i,ke!==null&&(xt?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(xt?(e=ke,n=n.stateNode,e.nodeType===8?ba(e.parentNode,n):e.nodeType===1&&ba(e,n),gs(e)):ba(ke,n.stateNode));break;case 4:r=ke,i=xt,ke=n.stateNode.containerInfo,xt=!0,hn(e,t,n),ke=r,xt=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Yu(n,t,o),i=i.next}while(i!==r)}hn(e,t,n);break;case 1:if(!Me&&(Wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,t,l)}hn(e,t,n);break;case 21:hn(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,hn(e,t,n),Me=r):hn(e,t,n);break;default:hn(e,t,n)}}function Ph(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new xw),t.forEach(function(r){var i=Ow.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,xt=!1;break e;case 3:ke=l.stateNode.containerInfo,xt=!0;break e;case 4:ke=l.stateNode.containerInfo,xt=!0;break e}l=l.return}if(ke===null)throw Error(C(160));iy(s,o,i),ke=null,xt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){le(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)sy(t,e),t=t.sibling}function sy(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Mt(e),r&4){try{ts(3,e,e.return),zl(3,e)}catch(_){le(e,e.return,_)}try{ts(5,e,e.return)}catch(_){le(e,e.return,_)}}break;case 1:Ct(t,e),Mt(e),r&512&&n!==null&&Wr(n,n.return);break;case 5:if(Ct(t,e),Mt(e),r&512&&n!==null&&Wr(n,n.return),e.flags&32){var i=e.stateNode;try{fs(i,"")}catch(_){le(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&km(i,s),Cu(l,o);var u=Cu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?bm(i,c):d==="dangerouslySetInnerHTML"?Rm(i,c):d==="children"?fs(i,c):zc(i,d,c,u)}switch(l){case"input":yu(i,s);break;case"textarea":Tm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Qr(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Qr(i,!!s.multiple,s.defaultValue,!0):Qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Es]=s}catch(_){le(e,e.return,_)}}break;case 6:if(Ct(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){le(e,e.return,_)}}break;case 3:if(Ct(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{gs(t.containerInfo)}catch(_){le(e,e.return,_)}break;case 4:Ct(t,e),Mt(e);break;case 13:Ct(t,e),Mt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(wd=ue())),r&4&&Ph(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(u=Me)||d,Ct(t,e),Me=u):Ct(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(R=e,d=e.child;d!==null;){for(c=R=d;R!==null;){switch(f=R,h=f.child,f.tag){case 0:case 11:case 14:case 15:ts(4,f,f.return);break;case 1:Wr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){le(r,n,_)}}break;case 5:Wr(f,f.return);break;case 22:if(f.memoizedState!==null){Ah(c);continue}}h!==null?(h.return=f,R=h):Ah(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Pm("display",o))}catch(_){le(e,e.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){le(e,e.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ct(t,e),Mt(e),r&4&&Ph(e);break;case 21:break;default:Ct(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ry(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(fs(i,""),r.flags&=-33);var s=Rh(e);Ju(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Rh(e);Xu(e,l,o);break;default:throw Error(C(161))}}catch(a){le(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function kw(e,t,n){R=e,oy(e)}function oy(e,t,n){for(var r=(e.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||fo;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Me;l=fo;var u=Me;if(fo=o,(Me=a)&&!u)for(R=i;R!==null;)o=R,a=o.child,o.tag===22&&o.memoizedState!==null?Dh(i):a!==null?(a.return=o,R=a):Dh(i);for(;s!==null;)R=s,oy(s),s=s.sibling;R=i,fo=l,Me=u}bh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):bh(e)}}function bh(e){for(;R!==null;){var t=R;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||zl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&ph(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ph(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&gs(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Me||t.flags&512&&qu(t)}catch(f){le(t,t.return,f)}}if(t===e){R=null;break}if(n=t.sibling,n!==null){n.return=t.return,R=n;break}R=t.return}}function Ah(e){for(;R!==null;){var t=R;if(t===e){R=null;break}var n=t.sibling;if(n!==null){n.return=t.return,R=n;break}R=t.return}}function Dh(e){for(;R!==null;){var t=R;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{zl(4,t)}catch(a){le(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){le(t,i,a)}}var s=t.return;try{qu(t)}catch(a){le(t,s,a)}break;case 5:var o=t.return;try{qu(t)}catch(a){le(t,o,a)}}}catch(a){le(t,t.return,a)}if(t===e){R=null;break}var l=t.sibling;if(l!==null){l.return=t.return,R=l;break}R=t.return}}var Tw=Math.ceil,il=un.ReactCurrentDispatcher,_d=un.ReactCurrentOwner,yt=un.ReactCurrentBatchConfig,W=0,Ie=null,he=null,Ne=0,rt=0,Ur=jn(0),ge=0,Ts=null,lr=0,Wl=0,vd=0,ns=null,He=null,wd=0,ci=1/0,Gt=null,sl=!1,Zu=null,kn=null,ho=!1,wn=null,ol=0,rs=0,ec=null,Ao=-1,Do=0;function je(){return W&6?ue():Ao!==-1?Ao:Ao=ue()}function Tn(e){return e.mode&1?W&2&&Ne!==0?Ne&-Ne:cw.transition!==null?(Do===0&&(Do=Um()),Do):(e=G,e!==0||(e=window.event,e=e===void 0?16:qm(e.type)),e):1}function Pt(e,t,n,r){if(50<rs)throw rs=0,ec=null,Error(C(185));Bs(e,n,r),(!(W&2)||e!==Ie)&&(e===Ie&&(!(W&2)&&(Wl|=n),ge===4&&_n(e,Ne)),qe(e,r),n===1&&W===0&&!(t.mode&1)&&(ci=ue()+500,$l&&zn()))}function qe(e,t){var n=e.callbackNode;c1(e,t);var r=Uo(e,e===Ie?Ne:0);if(r===0)n!==null&&Wf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wf(n),t===1)e.tag===0?uw(Oh.bind(null,e)):mg(Oh.bind(null,e)),sw(function(){!(W&6)&&zn()}),n=null;else{switch(Hm(r)){case 1:n=Gc;break;case 4:n=zm;break;case 16:n=Wo;break;case 536870912:n=Wm;break;default:n=Wo}n=py(n,ly.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ly(e,t){if(Ao=-1,Do=0,W&6)throw Error(C(327));var n=e.callbackNode;if(Jr()&&e.callbackNode!==n)return null;var r=Uo(e,e===Ie?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=ll(e,r);else{t=r;var i=W;W|=2;var s=uy();(Ie!==e||Ne!==t)&&(Gt=null,ci=ue()+500,er(e,t));do try{Pw();break}catch(l){ay(e,l)}while(1);sd(),il.current=s,W=i,he!==null?t=0:(Ie=null,Ne=0,t=ge)}if(t!==0){if(t===2&&(i=Tu(e),i!==0&&(r=i,t=tc(e,i))),t===1)throw n=Ts,er(e,0),_n(e,r),qe(e,ue()),n;if(t===6)_n(e,r);else{if(i=e.current.alternate,!(r&30)&&!Nw(i)&&(t=ll(e,r),t===2&&(s=Tu(e),s!==0&&(r=s,t=tc(e,s))),t===1))throw n=Ts,er(e,0),_n(e,r),qe(e,ue()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Hn(e,He,Gt);break;case 3:if(_n(e,r),(r&130023424)===r&&(t=wd+500-ue(),10<t)){if(Uo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Mu(Hn.bind(null,e,He,Gt),t);break}Hn(e,He,Gt);break;case 4:if(_n(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Rt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ue()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Tw(r/1960))-r,10<r){e.timeoutHandle=Mu(Hn.bind(null,e,He,Gt),r);break}Hn(e,He,Gt);break;case 5:Hn(e,He,Gt);break;default:throw Error(C(329))}}}return qe(e,ue()),e.callbackNode===n?ly.bind(null,e):null}function tc(e,t){var n=ns;return e.current.memoizedState.isDehydrated&&(er(e,t).flags|=256),e=ll(e,t),e!==2&&(t=He,He=n,t!==null&&nc(t)),e}function nc(e){He===null?He=e:He.push.apply(He,e)}function Nw(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _n(e,t){for(t&=~vd,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function Oh(e){if(W&6)throw Error(C(327));Jr();var t=Uo(e,0);if(!(t&1))return qe(e,ue()),null;var n=ll(e,t);if(e.tag!==0&&n===2){var r=Tu(e);r!==0&&(t=r,n=tc(e,r))}if(n===1)throw n=Ts,er(e,0),_n(e,t),qe(e,ue()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Hn(e,He,Gt),qe(e,ue()),null}function Ed(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(ci=ue()+500,$l&&zn())}}function ar(e){wn!==null&&wn.tag===0&&!(W&6)&&Jr();var t=W;W|=1;var n=yt.transition,r=G;try{if(yt.transition=null,G=1,e)return e()}finally{G=r,yt.transition=n,W=t,!(W&6)&&zn()}}function Cd(){rt=Ur.current,te(Ur)}function er(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,iw(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(nd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ko();break;case 3:ai(),te(Ke),te(Fe),dd();break;case 5:cd(r);break;case 4:ai();break;case 13:te(ie);break;case 19:te(ie);break;case 10:od(r.type._context);break;case 22:case 23:Cd()}n=n.return}if(Ie=e,he=e=Nn(e.current,null),Ne=rt=t,ge=0,Ts=null,vd=Wl=lr=0,He=ns=null,Kn!==null){for(t=0;t<Kn.length;t++)if(n=Kn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kn=null}return e}function ay(e,t){do{var n=he;try{if(sd(),Ro.current=rl,nl){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}nl=!1}if(or=0,we=pe=se=null,es=!1,xs=0,_d.current=null,n===null||n.return===null){ge=1,Ts=t,he=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=Eh(o);if(h!==null){h.flags&=-257,Ch(h,o,l,s,t),h.mode&1&&wh(s,u,t),t=h,a=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(a),t.updateQueue=_}else y.add(a);break e}else{if(!(t&1)){wh(s,u,t),Sd();break e}a=Error(C(426))}}else if(ne&&l.mode&1){var k=Eh(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ch(k,o,l,s,t),rd(ui(a,l));break e}}s=a=ui(a,l),ge!==4&&(ge=2),ns===null?ns=[s]:ns.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Vg(s,a,t);hh(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(kn===null||!kn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=Gg(s,l,t);hh(s,v);break e}}s=s.return}while(s!==null)}dy(n)}catch(E){t=E,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function uy(){var e=il.current;return il.current=rl,e===null?rl:e}function Sd(){(ge===0||ge===3||ge===2)&&(ge=4),Ie===null||!(lr&268435455)&&!(Wl&268435455)||_n(Ie,Ne)}function ll(e,t){var n=W;W|=2;var r=uy();(Ie!==e||Ne!==t)&&(Gt=null,er(e,t));do try{Rw();break}catch(i){ay(e,i)}while(1);if(sd(),W=n,il.current=r,he!==null)throw Error(C(261));return Ie=null,Ne=0,ge}function Rw(){for(;he!==null;)cy(he)}function Pw(){for(;he!==null&&!t1();)cy(he)}function cy(e){var t=hy(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?dy(e):he=t,_d.current=null}function dy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Sw(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,he=null;return}}else if(n=Cw(n,t,rt),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ge===0&&(ge=5)}function Hn(e,t,n){var r=G,i=yt.transition;try{yt.transition=null,G=1,bw(e,t,n,r)}finally{yt.transition=i,G=r}return null}function bw(e,t,n,r){do Jr();while(wn!==null);if(W&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(d1(e,s),e===Ie&&(he=Ie=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,py(Wo,function(){return Jr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=G;G=1;var l=W;W|=4,_d.current=null,Iw(e,n),sy(n,e),X1(Du),Ho=!!Au,Du=Au=null,e.current=n,kw(n),n1(),W=l,G=o,yt.transition=s}else e.current=n;if(ho&&(ho=!1,wn=e,ol=i),s=e.pendingLanes,s===0&&(kn=null),s1(n.stateNode),qe(e,ue()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(sl)throw sl=!1,e=Zu,Zu=null,e;return ol&1&&e.tag!==0&&Jr(),s=e.pendingLanes,s&1?e===ec?rs++:(rs=0,ec=e):rs=0,zn(),null}function Jr(){if(wn!==null){var e=Hm(ol),t=yt.transition,n=G;try{if(yt.transition=null,G=16>e?16:e,wn===null)var r=!1;else{if(e=wn,wn=null,ol=0,W&6)throw Error(C(331));var i=W;for(W|=4,R=e.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var d=R;switch(d.tag){case 0:case 11:case 15:ts(8,d,s)}var c=d.child;if(c!==null)c.return=d,R=c;else for(;R!==null;){d=R;var f=d.sibling,h=d.return;if(ny(d),d===u){R=null;break}if(f!==null){f.return=h,R=f;break}R=h}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ts(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,R=m;break e}R=s.return}}var p=e.current;for(R=p;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=p;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:zl(9,l)}}catch(E){le(l,l.return,E)}if(l===o){R=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,R=v;break e}R=l.return}}if(W=i,zn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Dl,e)}catch{}r=!0}return r}finally{G=n,yt.transition=t}}return!1}function Mh(e,t,n){t=ui(n,t),t=Vg(e,t,1),e=In(e,t,1),t=je(),e!==null&&(Bs(e,1,t),qe(e,t))}function le(e,t,n){if(e.tag===3)Mh(e,e,n);else for(;t!==null;){if(t.tag===3){Mh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kn===null||!kn.has(r))){e=ui(n,e),e=Gg(t,e,1),t=In(t,e,1),e=je(),t!==null&&(Bs(t,1,e),qe(t,e));break}}t=t.return}}function Aw(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,Ie===e&&(Ne&n)===n&&(ge===4||ge===3&&(Ne&130023424)===Ne&&500>ue()-wd?er(e,0):vd|=n),qe(e,t)}function fy(e,t){t===0&&(e.mode&1?(t=no,no<<=1,!(no&130023424)&&(no=4194304)):t=1);var n=je();e=rn(e,t),e!==null&&(Bs(e,t,n),qe(e,n))}function Dw(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),fy(e,n)}function Ow(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),fy(e,n)}var hy;hy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,Ew(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ne&&t.flags&1048576&&gg(t,Xo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;bo(e,t),e=t.pendingProps;var i=si(t,Fe.current);Xr(t,n),i=hd(null,t,r,e,i,n);var s=pd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(s=!0,Yo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ad(t),i.updater=Bl,t.stateNode=i,i._reactInternals=t,Wu(t,r,e,n),t=Vu(null,t,r,!0,s,n)):(t.tag=0,ne&&s&&td(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(bo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Lw(r),e=St(r,e),i){case 0:t=Hu(null,t,r,e,n);break e;case 1:t=Ih(null,t,r,e,n);break e;case 11:t=Sh(null,t,r,e,n);break e;case 14:t=xh(null,t,r,St(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Hu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Ih(e,t,r,i,n);case 3:e:{if(qg(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,wg(e,t),el(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=ui(Error(C(423)),t),t=kh(e,t,r,n,i);break e}else if(r!==i){i=ui(Error(C(424)),t),t=kh(e,t,r,n,i);break e}else for(it=xn(t.stateNode.containerInfo.firstChild),st=t,ne=!0,It=null,n=xg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(oi(),r===i){t=sn(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Ig(t),e===null&&Bu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Ou(r,i)?o=null:s!==null&&Ou(r,s)&&(t.flags|=32),Yg(e,t),Be(e,t,o,n),t.child;case 6:return e===null&&Bu(t),null;case 13:return Xg(e,t,n);case 4:return ud(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=li(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Sh(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,X(Jo,r._currentValue),r._currentValue=o,s!==null)if(Dt(s.value,o)){if(s.children===i.children&&!Ke.current){t=sn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Zt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ju(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ju(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Xr(t,n),i=_t(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),xh(e,t,r,i,n);case 15:return Qg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),bo(e,t),t.tag=1,Ye(r)?(e=!0,Yo(t)):e=!1,Xr(t,n),Cg(t,r,i),Wu(t,r,i,n),Vu(null,t,r,!0,e,n);case 19:return Jg(e,t,n);case 22:return Kg(e,t,n)}throw Error(C(156,t.tag))};function py(e,t){return jm(e,t)}function Mw(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new Mw(e,t,n,r)}function xd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lw(e){if(typeof e=="function")return xd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Uc)return 11;if(e===Hc)return 14}return 2}function Nn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Oo(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")xd(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Dr:return tr(n.children,i,s,t);case Wc:o=8,i|=8;break;case fu:return e=gt(12,n,t,i|2),e.elementType=fu,e.lanes=s,e;case hu:return e=gt(13,n,t,i),e.elementType=hu,e.lanes=s,e;case pu:return e=gt(19,n,t,i),e.elementType=pu,e.lanes=s,e;case Sm:return Ul(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Em:o=10;break e;case Cm:o=9;break e;case Uc:o=11;break e;case Hc:o=14;break e;case mn:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=gt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function tr(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function Ul(e,t,n,r){return e=gt(22,e,r,t),e.elementType=Sm,e.lanes=n,e.stateNode={isHidden:!1},e}function Ba(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function ja(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fw(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Id(e,t,n,r,i,s,o,l,a){return e=new Fw(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=gt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ad(s),e}function $w(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ar,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function my(e){if(!e)return Mn;e=e._reactInternals;e:{if(Cr(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ye(n))return pg(e,n,t)}return t}function gy(e,t,n,r,i,s,o,l,a){return e=Id(n,r,!0,e,i,s,o,l,a),e.context=my(null),n=e.current,r=je(),i=Tn(n),s=Zt(r,i),s.callback=t??null,In(n,s,i),e.current.lanes=i,Bs(e,i,r),qe(e,r),e}function Hl(e,t,n,r){var i=t.current,s=je(),o=Tn(i);return n=my(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(i,t,o),e!==null&&(Pt(e,i,o,s),No(e,i,o)),o}function al(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Lh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function kd(e,t){Lh(e,t),(e=e.alternate)&&Lh(e,t)}function Bw(){return null}var yy=typeof reportError=="function"?reportError:function(e){console.error(e)};function Td(e){this._internalRoot=e}Vl.prototype.render=Td.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Hl(e,t,null,null)};Vl.prototype.unmount=Td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;ar(function(){Hl(null,e,null,null)}),t[nn]=null}};function Vl(e){this._internalRoot=e}Vl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Qm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<yn.length&&t!==0&&t<yn[n].priority;n++);yn.splice(n,0,e),n===0&&Ym(e)}};function Nd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Gl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Fh(){}function jw(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=al(o);s.call(u)}}var o=gy(t,r,e,0,null,!1,!1,"",Fh);return e._reactRootContainer=o,e[nn]=o.current,vs(e.nodeType===8?e.parentNode:e),ar(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=al(a);l.call(u)}}var a=Id(e,0,!1,null,null,!1,!1,"",Fh);return e._reactRootContainer=a,e[nn]=a.current,vs(e.nodeType===8?e.parentNode:e),ar(function(){Hl(t,a,n,r)}),a}function Ql(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=al(o);l.call(a)}}Hl(t,o,e,i)}else o=jw(n,t,e,i,r);return al(o)}Vm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Gi(t.pendingLanes);n!==0&&(Qc(t,n|1),qe(t,ue()),!(W&6)&&(ci=ue()+500,zn()))}break;case 13:ar(function(){var r=rn(e,1);if(r!==null){var i=je();Pt(r,e,1,i)}}),kd(e,1)}};Kc=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=je();Pt(t,e,134217728,n)}kd(e,134217728)}};Gm=function(e){if(e.tag===13){var t=Tn(e),n=rn(e,t);if(n!==null){var r=je();Pt(n,e,t,r)}kd(e,t)}};Qm=function(){return G};Km=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};xu=function(e,t,n){switch(t){case"input":if(yu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Fl(r);if(!i)throw Error(C(90));Im(r),yu(r,i)}}}break;case"textarea":Tm(e,n);break;case"select":t=n.value,t!=null&&Qr(e,!!n.multiple,t,!1)}};Om=Ed;Mm=ar;var zw={usingClientEntryPoint:!1,Events:[zs,Fr,Fl,Am,Dm,Ed]},$i={findFiberByHostInstance:Qn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Ww={bundleType:$i.bundleType,version:$i.version,rendererPackageName:$i.rendererPackageName,rendererConfig:$i.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$m(e),e===null?null:e.stateNode},findFiberByHostInstance:$i.findFiberByHostInstance||Bw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{Dl=po.inject(Ww),zt=po}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=zw;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(t))throw Error(C(200));return $w(e,t,null,n)};at.createRoot=function(e,t){if(!Nd(e))throw Error(C(299));var n=!1,r="",i=yy;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Id(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,vs(e.nodeType===8?e.parentNode:e),new Td(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=$m(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return ar(e)};at.hydrate=function(e,t,n){if(!Gl(t))throw Error(C(200));return Ql(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!Nd(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=yy;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=gy(t,null,e,1,n??null,i,!1,s,o),e[nn]=t.current,vs(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Vl(t)};at.render=function(e,t,n){if(!Gl(t))throw Error(C(200));return Ql(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!Gl(e))throw Error(C(40));return e._reactRootContainer?(ar(function(){Ql(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};at.unstable_batchedUpdates=Ed;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ql(e,t,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";function _y(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_y)}catch(e){console.error(e)}}_y(),gm.exports=at;var Uw=gm.exports,$h=Uw;cu.createRoot=$h.createRoot,cu.hydrateRoot=$h.hydrateRoot;var xe=function(){return xe=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},xe.apply(this,arguments)};function di(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Z="-ms-",is="-moz-",H="-webkit-",vy="comm",Kl="rule",Rd="decl",Hw="@import",wy="@keyframes",Vw="@layer",Gw=Math.abs,Pd=String.fromCharCode,Qw=Object.assign;function Kw(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function Ey(e){return e.trim()}function pn(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function Mo(e,t){return e.indexOf(t)}function Ee(e,t){return e.charCodeAt(t)|0}function fi(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function bd(e){return e.length}function mo(e,t){return t.push(e),e}function Yw(e,t){return e.map(t).join("")}var Yl=1,hi=1,Cy=0,wt=0,fe=0,Ii="";function ql(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Yl,column:hi,length:o,return:""}}function Bi(e,t){return Qw(ql("",null,null,"",null,null,0),e,{length:-e.length},t)}function qw(){return fe}function Xw(){return fe=wt>0?Ee(Ii,--wt):0,hi--,fe===10&&(hi=1,Yl--),fe}function bt(){return fe=wt<Cy?Ee(Ii,wt++):0,hi++,fe===10&&(hi=1,Yl++),fe}function nr(){return Ee(Ii,wt)}function Lo(){return wt}function Xl(e,t){return fi(Ii,e,t)}function rc(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Jw(e){return Yl=hi=1,Cy=Kt(Ii=e),wt=0,[]}function Zw(e){return Ii="",e}function za(e){return Ey(Xl(wt-1,ic(e===91?e+2:e===40?e+1:e)))}function eE(e){for(;(fe=nr())&&fe<33;)bt();return rc(e)>2||rc(fe)>3?"":" "}function tE(e,t){for(;--t&&bt()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return Xl(e,Lo()+(t<6&&nr()==32&&bt()==32))}function ic(e){for(;bt();)switch(fe){case e:return wt;case 34:case 39:e!==34&&e!==39&&ic(fe);break;case 40:e===41&&ic(e);break;case 92:bt();break}return wt}function nE(e,t){for(;bt()&&e+fe!==47+10;)if(e+fe===42+42&&nr()===47)break;return"/*"+Xl(t,wt-1)+"*"+Pd(e===47?e:bt())}function rE(e){for(;!rc(nr());)bt();return Xl(e,wt)}function iE(e){return Zw(Fo("",null,null,null,[""],e=Jw(e),0,[0],e))}function Fo(e,t,n,r,i,s,o,l,a){for(var u=0,d=0,c=o,f=0,h=0,y=0,_=1,k=1,m=1,p=0,g="",v=i,E=s,S=r,w=g;k;)switch(y=p,p=bt()){case 40:if(y!=108&&Ee(w,c-1)==58){Mo(w+=M(za(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:w+=za(p);break;case 9:case 10:case 13:case 32:w+=eE(y);break;case 92:w+=tE(Lo()-1,7);continue;case 47:switch(nr()){case 42:case 47:mo(sE(nE(bt(),Lo()),t,n),a);break;default:w+="/"}break;case 123*_:l[u++]=Kt(w)*m;case 125*_:case 59:case 0:switch(p){case 0:case 125:k=0;case 59+d:m==-1&&(w=M(w,/\f/g,"")),h>0&&Kt(w)-c&&mo(h>32?jh(w+";",r,n,c-1):jh(M(w," ","")+";",r,n,c-2),a);break;case 59:w+=";";default:if(mo(S=Bh(w,t,n,u,d,i,l,g,v=[],E=[],c),s),p===123)if(d===0)Fo(w,t,S,S,v,s,c,l,E);else switch(f===99&&Ee(w,3)===110?100:f){case 100:case 108:case 109:case 115:Fo(e,S,S,r&&mo(Bh(e,S,S,0,0,i,l,g,i,v=[],c),E),i,E,c,l,r?v:E);break;default:Fo(w,S,S,S,[""],E,0,l,E)}}u=d=h=0,_=m=1,g=w="",c=o;break;case 58:c=1+Kt(w),h=y;default:if(_<1){if(p==123)--_;else if(p==125&&_++==0&&Xw()==125)continue}switch(w+=Pd(p),p*_){case 38:m=d>0?1:(w+="\f",-1);break;case 44:l[u++]=(Kt(w)-1)*m,m=1;break;case 64:nr()===45&&(w+=za(bt())),f=nr(),d=c=Kt(g=w+=rE(Lo())),p++;break;case 45:y===45&&Kt(w)==2&&(_=0)}}return s}function Bh(e,t,n,r,i,s,o,l,a,u,d){for(var c=i-1,f=i===0?s:[""],h=bd(f),y=0,_=0,k=0;y<r;++y)for(var m=0,p=fi(e,c+1,c=Gw(_=o[y])),g=e;m<h;++m)(g=Ey(_>0?f[m]+" "+p:M(p,/&\f/g,f[m])))&&(a[k++]=g);return ql(e,t,n,i===0?Kl:l,a,u,d)}function sE(e,t,n){return ql(e,t,n,vy,Pd(qw()),fi(e,2,-2),0)}function jh(e,t,n,r){return ql(e,t,n,Rd,fi(e,0,r),fi(e,r+1,-1),r)}function Sy(e,t,n){switch(Kw(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return is+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+is+e+Z+e+e;case 5936:switch(Ee(e,t+11)){case 114:return H+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+Z+e+e;case 6165:return H+e+Z+"flex-"+e+e;case 5187:return H+e+M(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return H+e+Z+"flex-item-"+M(e,/flex-|-self/g,"")+(pn(e,/flex-|baseline/)?"":Z+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return H+e+Z+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+Z+M(e,"shrink","negative")+e;case 5292:return H+e+Z+M(e,"basis","preferred-size")+e;case 6060:return H+"box-"+M(e,"-grow","")+H+e+Z+M(e,"grow","positive")+e;case 4554:return H+M(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!pn(e,/flex-|baseline/))return Z+"grid-column-align"+fi(e,t)+e;break;case 2592:case 3360:return Z+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,pn(r.props,/grid-\w+-end/)})?~Mo(e+(n=n[t].value),"span")?e:Z+M(e,"-start","")+e+Z+"grid-row-span:"+(~Mo(n,"span")?pn(n,/\d+/):+pn(n,/\d+/)-+pn(e,/\d+/))+";":Z+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return pn(r.props,/grid-\w+-start/)})?e:Z+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+is+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Mo(e,"stretch")?Sy(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,a,u){return Z+i+":"+s+u+(o?Z+i+"-span:"+(l?a:+a-+s)+u:"")+e});case 4949:if(Ee(e,t+6)===121)return M(e,":",":"+H)+e;break;case 6444:switch(Ee(e,Ee(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(Ee(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+Z+"$2box$3")+e;case 100:return M(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function ss(e,t){for(var n="",r=bd(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function oE(e,t,n,r){switch(e.type){case Vw:if(e.children.length)break;case Hw:case Rd:return e.return=e.return||e.value;case vy:return"";case wy:return e.return=e.value+"{"+ss(e.children,r)+"}";case Kl:e.value=e.props.join(",")}return Kt(n=ss(e.children,r))?e.return=e.value+"{"+n+"}":""}function lE(e){var t=bd(e);return function(n,r,i,s){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,s)||"";return o}}function aE(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Rd:e.return=Sy(e.value,e.length,n);return;case wy:return ss([Bi(e,{value:M(e.value,"@","@"+H)})],r);case Kl:if(e.length)return Yw(e.props,function(i){switch(pn(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ss([Bi(e,{props:[M(i,/:(read-\w+)/,":"+is+"$1")]})],r);case"::placeholder":return ss([Bi(e,{props:[M(i,/:(plac\w+)/,":"+H+"input-$1")]}),Bi(e,{props:[M(i,/:(plac\w+)/,":"+is+"$1")]}),Bi(e,{props:[M(i,/:(plac\w+)/,Z+"input-$1")]})],r)}return""})}}var uE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Ad=typeof window<"u"&&"HTMLElement"in window,cE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),dE={},Dd=Object.freeze([]),ur=Object.freeze({});function xy(e,t,n){return n===void 0&&(n=ur),e.theme!==n.theme&&e.theme||t||n.theme}var Iy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,hE=/(^-|-$)/g;function zh(e){return e.replace(fE,"-").replace(hE,"")}var pE=/(a)(d)/gi,Wh=function(e){return String.fromCharCode(e+(e>25?39:97))};function sc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Wh(t%52)+n;return(Wh(t%52)+n).replace(pE,"$1-$2")}var Wa,Hr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ky=function(e){return Hr(5381,e)};function Od(e){return sc(ky(e)>>>0)}function mE(e){return e.displayName||e.name||"Component"}function Ua(e){return typeof e=="string"&&!0}var Ty=typeof Symbol=="function"&&Symbol.for,Ny=Ty?Symbol.for("react.memo"):60115,gE=Ty?Symbol.for("react.forward_ref"):60112,yE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},_E={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ry={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vE=((Wa={})[gE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Wa[Ny]=Ry,Wa);function Uh(e){return("type"in(t=e)&&t.type.$$typeof)===Ny?Ry:"$$typeof"in e?vE[e.$$typeof]:yE;var t}var wE=Object.defineProperty,EE=Object.getOwnPropertyNames,Hh=Object.getOwnPropertySymbols,CE=Object.getOwnPropertyDescriptor,SE=Object.getPrototypeOf,Vh=Object.prototype;function Py(e,t,n){if(typeof t!="string"){if(Vh){var r=SE(t);r&&r!==Vh&&Py(e,r,n)}var i=EE(t);Hh&&(i=i.concat(Hh(t)));for(var s=Uh(e),o=Uh(t),l=0;l<i.length;++l){var a=i[l];if(!(a in _E||n&&n[a]||o&&a in o||s&&a in s)){var u=CE(t,a);try{wE(e,a,u)}catch{}}}}return e}function cr(e){return typeof e=="function"}function Md(e){return typeof e=="object"&&"styledComponentId"in e}function qn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ul(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ns(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function oc(e,t,n){if(n===void 0&&(n=!1),!n&&!Ns(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=oc(e[r],t[r]);else if(Ns(t))for(var r in t)e[r]=oc(e[r],t[r]);return e}function dr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var xE=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw dr(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),a=(o=0,n.length);o<a;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),$o=new Map,cl=new Map,Ha=1,go=function(e){if($o.has(e))return $o.get(e);for(;cl.has(Ha);)Ha++;var t=Ha++;return $o.set(e,t),cl.set(t,e),t},IE=function(e,t){$o.set(e,t),cl.set(t,e)},kE="style[".concat(pi,"][").concat("data-styled-version",'="').concat("6.0.0-rc.1",'"]'),TE=new RegExp("^".concat(pi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),NE=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},RE=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var a=l.match(TE);if(a){var u=0|parseInt(a[1],10),d=a[2];u!==0&&(IE(d,u),NE(e,d,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function PE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var by=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var d=a[u];if(d&&d.nodeType===1&&d.hasAttribute(pi))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(pi,"active"),r.setAttribute("data-styled-version","6.0.0-rc.1");var o=PE();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},bE=function(){function e(t){this.element=by(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw dr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),AE=function(){function e(t){this.element=by(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),DE=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Gh=Ad,OE={isServer:!Ad,useCSSOMInjection:!cE},dl=function(){function e(t,n,r){t===void 0&&(t=ur),n===void 0&&(n={}),this.options=xe(xe({},OE),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Ad&&Gh&&(Gh=!1,function(i){for(var s=document.querySelectorAll(kE),o=0,l=s.length;o<l;o++){var a=s[o];a&&a.getAttribute(pi)!=="active"&&(RE(i,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}return e.registerId=function(t){return go(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(xe(xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new DE(i):r?new bE(i):new AE(i)}(this.options),new xE(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(go(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(go(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(go(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(t){for(var n=t.getTag(),r=n.length,i="",s=function(l){var a=function(h){return cl.get(h)}(l);if(a===void 0)return"continue";var u=t.names.get(a),d=n.getGroup(l);if(u===void 0||d.length===0)return"continue";var c="".concat(pi,".g").concat(l,'[id="').concat(a,'"]'),f="";u!==void 0&&u.forEach(function(h){h.length>0&&(f+="".concat(h,","))}),i+="".concat(d).concat(c,'{content:"').concat(f,'"}').concat(`/*!sc*/
`)},o=0;o<r;o++)s(o);return i}(this)},e}(),ME=/&/g,LE=/^\s*\/\/.*$/gm;function Ay(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Ay(n.children,t)),n})}function FE(e){var t,n,r,i=e===void 0?ur:e,s=i.options,o=s===void 0?ur:s,l=i.plugins,a=l===void 0?Dd:l,u=function(f,h,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},d=a.slice();o.prefix&&d.unshift(aE),d.push(function(f){f.type===Kl&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(ME,n).replace(r,u))},oE);var c=function(f,h,y,_){h===void 0&&(h=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var k=f.replace(LE,""),m=iE(y||h?"".concat(y," ").concat(h," { ").concat(k," }"):k);return o.namespace&&(m=Ay(m,o.namespace)),function(p,g){for(var v=[],E=0,S=void 0;E<p.length;E+=1)(S=g(p[E],E,p,g))&&v.push(S);return v}(m,lE(d))};return c.hash=a.length?a.reduce(function(f,h){return h.name||dr(15),Hr(f,h.name)},5381).toString():"",c}var $E=new dl,lc=FE(),Dy=Bt.createContext({shouldForwardProp:void 0,styleSheet:$E,stylis:lc});Dy.Consumer;Bt.createContext(void 0);function ac(){return ce.useContext(Dy)}var Oy=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=lc);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){throw dr(12,String(r.name))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=lc),this.name+t.hash},e}(),BE=function(e){return e>="A"&&e<="Z"};function Qh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;BE(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var My=function(e){return e==null||e===!1||e===""},Ly=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!My(s)&&(Array.isArray(s)&&s.isCss||cr(s)?r.push("".concat(Qh(i),":"),s,";"):Ns(s)?r.push.apply(r,di(di(["".concat(i," {")],Ly(s),!1),["}"],!1)):r.push("".concat(Qh(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in uE||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Rn(e,t,n,r){if(My(e))return[];if(Md(e))return[".".concat(e.styledComponentId)];if(cr(e)){if(!cr(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Rn(i,t,n,r)}var s;return e instanceof Oy?n?(e.inject(n,r),[e.getName(r)]):[e]:Ns(e)?Ly(e):Array.isArray(e)?e.flatMap(function(o){return Rn(o,t,n,r)}):[e.toString()]}function Fy(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(cr(n)&&!Md(n))return!1}return!0}var jE=ky("6.0.0-rc.1"),zE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Fy(t),this.componentId=n,this.baseHash=Hr(jE,n),this.baseStyle=r,dl.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=qn(i,this.staticRulesId);else{var s=ul(Rn(this.rules,t,n,r)),o=sc(Hr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=qn(i,o),this.staticRulesId=o}else{for(var a=Hr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=ul(Rn(c,t,n,r));a=Hr(a,f),u+=f}}if(u){var h=sc(a>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=qn(i,h)}}return i},e}(),Ld=Bt.createContext(void 0);Ld.Consumer;function Us(){return ce.useContext(Ld)}function WE(e){var t=Us(),n=ce.useMemo(function(){return function(r,i){if(!r)throw dr(14);if(cr(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw dr(8);return i?xe(xe({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Bt.createElement(Ld.Provider,{value:n},e.children):null}var Va={};function UE(e,t,n){var r=Md(e),i=e,s=!Ua(e),o=t.attrs,l=o===void 0?Dd:o,a=t.componentId,u=a===void 0?function(E,S){var w=typeof E!="string"?"sc":zh(E);Va[w]=(Va[w]||0)+1;var N="".concat(w,"-").concat(Od("6.0.0-rc.1"+w+Va[w]));return S?"".concat(S,"-").concat(N):N}(t.displayName,t.parentComponentId):a,d=t.displayName,c=d===void 0?function(E){return Ua(E)?"styled.".concat(E):"Styled(".concat(mE(E),")")}(e):d,f=t.displayName&&t.componentId?"".concat(zh(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;y=function(E,S){return _(E,S)&&k(E,S)}}else y=_}var m=new zE(n,f,r?i.componentStyle:void 0),p=m.isStatic&&l.length===0;function g(E,S){return function(w,N,z,O){var ye=w.attrs,Ht=w.componentStyle,re=w.defaultProps,_e=w.foldedComponentIds,Ue=w.styledComponentId,Et=w.target,Pe=Us(),T=ac(),D=w.shouldForwardProp||T.shouldForwardProp,b=function($e,tt,Tr){for(var dt,ft=xe(xe({},tt),{className:void 0,theme:Tr}),Pi=0;Pi<$e.length;Pi+=1){var Nr=cr(dt=$e[Pi])?dt(ft):dt;for(var ht in Nr)ft[ht]=ht==="className"?qn(ft[ht],Nr[ht]):ht==="style"?xe(xe({},ft[ht]),Nr[ht]):Nr[ht]}return tt.className&&(ft.className=qn(ft.className,tt.className)),ft}(ye,N,xy(N,Pe,re)||ur),V=b.as||Et,K={};for(var be in b)b[be]===void 0||be[0]==="$"||be==="as"||be==="theme"||(be==="forwardedAs"?K.as=b.forwardedAs:D&&!D(be,V)||(K[be]=b[be]));var ct=function($e,tt,Tr){var dt=ac(),ft=$e.generateAndInjectStyles(tt?ur:Tr,dt.styleSheet,dt.stylis);return ft}(Ht,O,b),Vt=qn(_e,Ue);return ct&&(Vt+=" "+ct),b.className&&(Vt+=" "+b.className),K[Ua(V)&&!Iy.has(V)?"class":"className"]=Vt,K.ref=z,ce.createElement(V,K)}(v,E,S,p)}g.displayName=c;var v=Bt.forwardRef(g);return v.attrs=h,v.componentStyle=m,v.displayName=c,v.shouldForwardProp=y,v.foldedComponentIds=r?qn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=f,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(S){for(var w=[],N=1;N<arguments.length;N++)w[N-1]=arguments[N];for(var z=0,O=w;z<O.length;z++)oc(S,O[z],!0);return S}({},i.defaultProps,E):E}}),Object.defineProperty(v,"toString",{value:function(){return".".concat(v.styledComponentId)}}),s&&Py(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Kh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Yh=function(e){return Object.assign(e,{isCss:!0})};function Jl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(cr(e)||Ns(e)){var r=e;return Yh(Rn(Kh(Dd,di([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Rn(i):Yh(Rn(Kh(i,t)))}function uc(e,t,n){if(n===void 0&&(n=ur),!t)throw dr(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Jl.apply(void 0,di([i],s,!1)))};return r.attrs=function(i){return uc(e,t,xe(xe({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return uc(e,t,xe(xe({},n),i))},r}var $y=function(e){return uc(UE,e)},P=$y;Iy.forEach(function(e){P[e]=$y(e)});var HE=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=Fy(t),dl.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(ul(Rn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&dl.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function VE(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Jl.apply(void 0,di([e],t,!1)),i="sc-global-".concat(Od(JSON.stringify(r))),s=new HE(r,i),o=function(a){var u=ac(),d=Us(),c=Bt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(c,a,u.styleSheet,d,u.stylis),(Bt.useInsertionEffect||Bt.useLayoutEffect)(function(){if(!u.styleSheet.server)return l(c,a,u.styleSheet,d,u.stylis),function(){return s.removeStyles(c,u.styleSheet)}},[c,a,u.styleSheet,d,u.stylis]),null};function l(a,u,d,c,f){if(s.isStatic)s.renderStyles(a,dE,d,f);else{var h=xe(xe({},u),{theme:xy(u,c,o.defaultProps)});s.renderStyles(a,h,d,f)}}return Bt.memo(o)}function Sr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ul(Jl.apply(void 0,di([e],t,!1))),i=Od(r);return new Oy(i,r)}var By={},jy={},zy={exports:{}},Wy={},Uy={};Uy.calcMaxWidth=e=>`${parseInt(e,10)-.02}px`;const{calcMaxWidth:GE}=Uy;Wy.createBreakpointsApi=({breakpoints:e})=>{const t=Object.keys(Object(e)),n=l=>t[t.indexOf(l)+1],r=l=>e[l],i=l=>GE(e[l]),s=(l,a)=>({min:r(l),max:i(a)});return Object.freeze({keys:t,getNextKey:n,up:r,down:i,between:s,only:l=>l===t.at(-1)?r(l):s(l,n(l))})};zy.exports=Wy;var QE=zy.exports,Hy={},Vy={};Vy.withOrientation=({mediaQuery:e,orientation:t})=>`${e} and (orientation: ${t})`;Hy.withOrientation=Vy.withOrientation;var Gy={},Qy={};Qy.memoize=(e,t=new Map)=>(...n)=>{const r=JSON.stringify(n);return t.has(r)||t.set(r,e(...n)),t.get(r)};Gy.memoize=Qy.memoize;const{createBreakpointsApi:KE}=QE,{withOrientation:YE}=Hy,{memoize:yo}=Gy,qE={errorPrefix:"[styled-breakpoints]: ",defaultBreakpoints:{xs:"0px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"}};jy.createStyledBreakpointsTheme=({defaultBreakpoints:e,errorPrefix:t}=qE)=>{const n=KE({breakpoints:e,errorPrefix:t});return{breakpoints:{up:yo(r),down:yo(i),between:yo(s),only:yo(o)}};function r(f,h){return l(h,u(a(n.up(f))))}function i(f,h){return l(h,u(d(n.down(f))))}function s(f,h,y){return l(y,c(n.between(f,h)))}function o(f,h){return l(h,typeof n.only(f)=="object"?c(n.only(f)):u(a(n.up(f))))}function l(f,h){return f?YE({mediaQuery:h,orientation:f,invariant:n.invariant&&n.invariant}):h}function a(f){return`(min-width: ${f})`}function u(f){return`@media ${f}`}function d(f){return`(max-width: ${f})`}function c({min:f,max:h}){return`${u(a(f))} and ${d(h)}`}};By.createStyledBreakpointsTheme=jy.createStyledBreakpointsTheme;var XE=By.createStyledBreakpointsTheme;const JE=VE`
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
`;var Ky={},Yy={},qy={},Xy={};Xy.getMatches=e=>typeof window<"u"?window.matchMedia(e).matches:!1;qy.getMatches=Xy.getMatches;const{useState:ZE,useLayoutEffect:eC,useEffect:tC}=ce,{getMatches:nC}=qy,rC=typeof window<"u",iC=rC?eC:tC,sC=e=>{const[t,n]=ZE(nC(e));return iC(()=>{let r=!0;const i=window.matchMedia(e.replace(/^@media\s*/,"")),s=()=>{r&&n(i.matches)};return i.addListener?i.addListener(s):i.addEventListener("change",s),n(i.matches),()=>{r=!1,i.addListener?i.removeListener(s):i.removeEventListener("change",s)}},[e]),t};Yy.useMediaQuery=sC;Ky.useMediaQuery=Yy.useMediaQuery;var fl=Ky.useMediaQuery;const Jy=new Set,Xe=new WeakMap,Zr=new WeakMap,fr=new WeakMap,cc=new WeakMap,oC=new WeakMap,mi=new WeakMap,hl=new WeakMap,Ki=new WeakSet;let hr;const Xt="__aa_tgt",dc="__aa_del",lC=e=>{const t=fC(e);t&&t.forEach(n=>hC(n))},aC=e=>{e.forEach(t=>{t.target===hr&&cC(),Xe.has(t.target)&&xr(t.target)})};function uC(e){const t=cc.get(e);t==null||t.disconnect();let n=Xe.get(e),r=0;const i=5;n||(n=gi(e),Xe.set(e,n));const{offsetWidth:s,offsetHeight:o}=hr,a=[n.top-i,s-(n.left+i+n.width),o-(n.top+i+n.height),n.left-i].map(d=>`${-1*Math.floor(d)}px`).join(" "),u=new IntersectionObserver(()=>{++r>1&&xr(e)},{root:hr,threshold:1,rootMargin:a});u.observe(e),cc.set(e,u)}function xr(e){clearTimeout(hl.get(e));const t=Zl(e),n=typeof t=="function"?500:t.duration;hl.set(e,setTimeout(async()=>{const r=fr.get(e);try{await(r==null?void 0:r.finished),Xe.set(e,gi(e)),uC(e)}catch{}},n))}function cC(){clearTimeout(hl.get(hr)),hl.set(hr,setTimeout(()=>{Jy.forEach(e=>n_(e,t=>Zy(()=>xr(t))))},100))}function dC(e){setTimeout(()=>{oC.set(e,setInterval(()=>Zy(xr.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function Zy(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let fc,Vr;typeof window<"u"&&(hr=document.documentElement,fc=new MutationObserver(lC),Vr=new ResizeObserver(aC),Vr.observe(hr));function fC(e){return e.reduce((r,i)=>[...r,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:e.reduce((r,i)=>{if(r===!1)return!1;if(i.target instanceof Element){if(Ga(i.target),!r.has(i.target)){r.add(i.target);for(let s=0;s<i.target.children.length;s++){const o=i.target.children.item(s);if(o){if(dc in o)return!1;Ga(i.target,o),r.add(o)}}}if(i.removedNodes.length)for(let s=0;s<i.removedNodes.length;s++){const o=i.removedNodes[s];if(dc in o)return!1;o instanceof Element&&(r.add(o),Ga(i.target,o),Zr.set(o,[i.previousSibling,i.nextSibling]))}}return r},new Set)}function Ga(e,t){!t&&!(Xt in e)?Object.defineProperty(e,Xt,{value:e}):t&&!(Xt in t)&&Object.defineProperty(t,Xt,{value:e})}function hC(e){var t;const n=e.isConnected,r=Xe.has(e);n&&Zr.has(e)&&Zr.delete(e),fr.has(e)&&((t=fr.get(e))===null||t===void 0||t.cancel()),r&&n?pC(e):r&&!n?gC(e):mC(e)}function Ft(e){return Number(e.replace(/[^0-9.\-]/g,""))}function gi(e){const t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function e_(e,t,n){let r=t.width,i=t.height,s=n.width,o=n.height;const l=getComputedStyle(e);if(l.getPropertyValue("box-sizing")==="content-box"){const u=Ft(l.paddingTop)+Ft(l.paddingBottom)+Ft(l.borderTopWidth)+Ft(l.borderBottomWidth),d=Ft(l.paddingLeft)+Ft(l.paddingRight)+Ft(l.borderRightWidth)+Ft(l.borderLeftWidth);r-=d,s-=d,i-=u,o-=u}return[r,s,i,o].map(Math.round)}function Zl(e){return Xt in e&&mi.has(e[Xt])?mi.get(e[Xt]):{duration:250,easing:"ease-in-out"}}function t_(e){if(Xt in e)return e[Xt]}function Fd(e){const t=t_(e);return t?Ki.has(t):!1}function n_(e,...t){t.forEach(n=>n(e,mi.has(e)));for(let n=0;n<e.children.length;n++){const r=e.children.item(n);r&&t.forEach(i=>i(r,mi.has(r)))}}function pC(e){const t=Xe.get(e),n=gi(e);if(!Fd(e))return Xe.set(e,n);let r;if(!t)return;const i=Zl(e);if(typeof i!="function"){const s=t.left-n.left,o=t.top-n.top,[l,a,u,d]=e_(e,t,n),c={transform:`translate(${s}px, ${o}px)`},f={transform:"translate(0, 0)"};l!==a&&(c.width=`${l}px`,f.width=`${a}px`),u!==d&&(c.height=`${u}px`,f.height=`${d}px`),r=e.animate([c,f],{duration:i.duration,easing:i.easing})}else r=new Animation(i(e,"remain",t,n)),r.play();fr.set(e,r),Xe.set(e,n),r.addEventListener("finish",xr.bind(null,e))}function mC(e){const t=gi(e);Xe.set(e,t);const n=Zl(e);if(!Fd(e))return;let r;typeof n!="function"?r=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(r=new Animation(n(e,"add",t)),r.play()),fr.set(e,r),r.addEventListener("finish",xr.bind(null,e))}function gC(e){var t;if(!Zr.has(e)||!Xe.has(e))return;const[n,r]=Zr.get(e);Object.defineProperty(e,dc,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):(t=t_(e))===null||t===void 0||t.appendChild(e);function i(){var f;e.remove(),Xe.delete(e),Zr.delete(e),fr.delete(e),(f=cc.get(e))===null||f===void 0||f.disconnect()}if(!Fd(e))return i();const[s,o,l,a]=yC(e),u=Zl(e),d=Xe.get(e);let c;Object.assign(e.style,{position:"absolute",top:`${s}px`,left:`${o}px`,width:`${l}px`,height:`${a}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof u!="function"?c=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"}):(c=new Animation(u(e,"remove",d)),c.play()),fr.set(e,c),c.addEventListener("finish",i)}function yC(e){const t=Xe.get(e),[n,,r]=e_(e,t,gi(e));let i=e.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const s=getComputedStyle(i),o=Xe.get(i)||gi(i),l=Math.round(t.top-o.top)-Ft(s.borderTopWidth),a=Math.round(t.left-o.left)-Ft(s.borderLeftWidth);return[l,a,n,r]}function _C(e,t={}){return fc&&Vr&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof t!="function"&&!t.disrespectUserMotionPreference||(Ki.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),n_(e,xr,dC,i=>Vr==null?void 0:Vr.observe(i)),typeof t=="function"?mi.set(e,t):mi.set(e,{duration:250,easing:"ease-in-out",...t}),fc.observe(e,{childList:!0}),Jy.add(e))),Object.freeze({parent:e,enable:()=>{Ki.add(e)},disable:()=>{Ki.delete(e)},isEnabled:()=>Ki.has(e)})}function vC(e){const[t,n]=ce.useState();return[ce.useCallback(s=>{s instanceof HTMLElement?n(_C(s,e)):n(void 0)},[]),s=>{t&&(s?t.enable():t.disable())}]}/**
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
 */const r_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const x=function(e,t){if(!e)throw ki(t)},ki=function(e){return new Error("Firebase Database ("+r_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const i_=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},wC=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},$d={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,h=u&63;a||(h=64,o||(f=64)),r.push(n[d],n[c],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i_(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):wC(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const c=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new EC;const f=s<<2|l>>4;if(r.push(f),u!==64){const h=l<<4&240|u>>2;if(r.push(h),c!==64){const y=u<<6&192|c;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class EC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const s_=function(e){const t=i_(e);return $d.encodeByteArray(t,!0)},pl=function(e){return s_(e).replace(/\./g,"")},hc=function(e){try{return $d.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function CC(e){return o_(void 0,e)}function o_(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!SC(n)||(e[n]=o_(e[n],t[n]));return e}function SC(e){return e!=="__proto__"}/**
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
 */function xC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IC=()=>xC().__FIREBASE_DEFAULTS__,kC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},TC=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&hc(e[1]);return t&&JSON.parse(t)},l_=()=>{try{return IC()||kC()||TC()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},NC=e=>{var t,n;return(n=(t=l_())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},RC=e=>{const t=NC(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},a_=()=>{var e;return(e=l_())===null||e===void 0?void 0:e.config};/**
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
 */class ea{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function PC(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[pl(JSON.stringify(n)),pl(JSON.stringify(o)),l].join(".")}/**
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
 */function bC(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function u_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bC())}function AC(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function DC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function c_(){return r_.NODE_ADMIN===!0}function d_(){try{return typeof indexedDB=="object"}catch{return!1}}function f_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function OC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const MC="FirebaseError";class Ir extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=MC,Object.setPrototypeOf(this,Ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ta.prototype.create)}}class ta{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?LC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Ir(i,l,r)}}function LC(e,t){return e.replace(FC,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const FC=/\{\$([^}]+)}/g;/**
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
 */const h_=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=Rs(hc(s[0])||""),n=Rs(hc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},$C=function(e){const t=h_(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},BC=function(e){const t=h_(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function cn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function yi(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function qh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ml(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function gl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Xh(s)&&Xh(o)){if(!gl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xh(e){return e!==null&&typeof e=="object"}/**
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
 */function jC(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
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
 */class zC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let c=0;c<16;c++)r[c]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const f=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function Bd(e,t){return`${e} failed: ${t} argument `}/**
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
 */const WC=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,x(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},na=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */const UC=1e3,HC=2,VC=4*60*60*1e3,GC=.5;function Jh(e,t=UC,n=HC){const r=t*Math.pow(n,e),i=Math.round(GC*r*(Math.random()-.5)*2);return Math.min(VC,r+i)}/**
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
 */class QC{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new ea;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(YC(t))try{this.getOrInitializeService({instanceIdentifier:Vn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Vn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Vn){return this.instances.has(t)}getOptions(t=Vn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KC(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Vn){return this.component?this.component.multipleInstances?t:Vn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KC(e){return e===Vn?void 0:e}function YC(e){return e.instantiationMode==="EAGER"}/**
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
 */class qC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new QC(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const XC={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},JC=Y.INFO,ZC={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},eS=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ZC[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class jd{constructor(t){this.name=t,this._logLevel=JC,this._logHandler=eS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?XC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const tS=(e,t)=>t.some(n=>e instanceof n);let Zh,ep;function nS(){return Zh||(Zh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rS(){return ep||(ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const p_=new WeakMap,pc=new WeakMap,m_=new WeakMap,Qa=new WeakMap,zd=new WeakMap;function iS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Pn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&p_.set(n,e)}).catch(()=>{}),zd.set(t,e),t}function sS(e){if(pc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});pc.set(e,t)}let mc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return pc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||m_.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function oS(e){mc=e(mc)}function lS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Ka(this),t,...n);return m_.set(r,t.sort?t.sort():[t]),Pn(r)}:rS().includes(e)?function(...t){return e.apply(Ka(this),t),Pn(p_.get(this))}:function(...t){return Pn(e.apply(Ka(this),t))}}function aS(e){return typeof e=="function"?lS(e):(e instanceof IDBTransaction&&sS(e),tS(e,nS())?new Proxy(e,mc):e)}function Pn(e){if(e instanceof IDBRequest)return iS(e);if(Qa.has(e))return Qa.get(e);const t=aS(e);return t!==e&&(Qa.set(e,t),zd.set(t,e)),t}const Ka=e=>zd.get(e);function uS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=Pn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Pn(o.result),a.oldVersion,a.newVersion,Pn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const cS=["get","getKey","getAll","getAllKeys","count"],dS=["put","add","delete","clear"],Ya=new Map;function tp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ya.get(t))return Ya.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=dS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||cS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ya.set(t,s),s}oS(e=>({...e,get:(t,n,r)=>tp(t,n)||e.get(t,n,r),has:(t,n)=>!!tp(t,n)||e.has(t,n)}));/**
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
 */class fS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(hS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function hS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const gc="@firebase/app",np="0.9.11";/**
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
 */const pr=new jd("@firebase/app"),pS="@firebase/app-compat",mS="@firebase/analytics-compat",gS="@firebase/analytics",yS="@firebase/app-check-compat",_S="@firebase/app-check",vS="@firebase/auth",wS="@firebase/auth-compat",ES="@firebase/database",CS="@firebase/database-compat",SS="@firebase/functions",xS="@firebase/functions-compat",IS="@firebase/installations",kS="@firebase/installations-compat",TS="@firebase/messaging",NS="@firebase/messaging-compat",RS="@firebase/performance",PS="@firebase/performance-compat",bS="@firebase/remote-config",AS="@firebase/remote-config-compat",DS="@firebase/storage",OS="@firebase/storage-compat",MS="@firebase/firestore",LS="@firebase/firestore-compat",FS="firebase",$S="9.22.1";/**
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
 */const yc="[DEFAULT]",BS={[gc]:"fire-core",[pS]:"fire-core-compat",[gS]:"fire-analytics",[mS]:"fire-analytics-compat",[_S]:"fire-app-check",[yS]:"fire-app-check-compat",[vS]:"fire-auth",[wS]:"fire-auth-compat",[ES]:"fire-rtdb",[CS]:"fire-rtdb-compat",[SS]:"fire-fn",[xS]:"fire-fn-compat",[IS]:"fire-iid",[kS]:"fire-iid-compat",[TS]:"fire-fcm",[NS]:"fire-fcm-compat",[RS]:"fire-perf",[PS]:"fire-perf-compat",[bS]:"fire-rc",[AS]:"fire-rc-compat",[DS]:"fire-gcs",[OS]:"fire-gcs-compat",[MS]:"fire-fst",[LS]:"fire-fst-compat","fire-js":"fire-js",[FS]:"fire-js-all"};/**
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
 */const yl=new Map,_c=new Map;function jS(e,t){try{e.container.addComponent(t)}catch(n){pr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ln(e){const t=e.name;if(_c.has(t))return pr.debug(`There were multiple attempts to register component ${t}.`),!1;_c.set(t,e);for(const n of yl.values())jS(n,e);return!0}function Hs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const zS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new ta("app","Firebase",zS);/**
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
 */class WS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const US=$S;function g_(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:yc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=a_()),!n)throw bn.create("no-options");const s=yl.get(i);if(s){if(gl(n,s.options)&&gl(r,s.config))return s;throw bn.create("duplicate-app",{appName:i})}const o=new qC(i);for(const a of _c.values())o.addComponent(a);const l=new WS(n,r,o);return yl.set(i,l),l}function y_(e=yc){const t=yl.get(e);if(!t&&e===yc&&a_())return g_();if(!t)throw bn.create("no-app",{appName:e});return t}function Ut(e,t,n){var r;let i=(r=BS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pr.warn(l.join(" "));return}Ln(new on(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const HS="firebase-heartbeat-database",VS=1,Ps="firebase-heartbeat-store";let qa=null;function __(){return qa||(qa=uS(HS,VS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ps)}}}).catch(e=>{throw bn.create("idb-open",{originalErrorMessage:e.message})})),qa}async function GS(e){try{return await(await __()).transaction(Ps).objectStore(Ps).get(v_(e))}catch(t){if(t instanceof Ir)pr.warn(t.message);else{const n=bn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pr.warn(n.message)}}}async function rp(e,t){try{const r=(await __()).transaction(Ps,"readwrite");await r.objectStore(Ps).put(t,v_(e)),await r.done}catch(n){if(n instanceof Ir)pr.warn(n.message);else{const r=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pr.warn(r.message)}}}function v_(e){return`${e.name}!${e.options.appId}`}/**
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
 */const QS=1024,KS=30*24*60*60*1e3;class YS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ip();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=KS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=ip(),{heartbeatsToSend:n,unsentEntries:r}=qS(this._heartbeatsCache.heartbeats),i=pl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ip(){return new Date().toISOString().substring(0,10)}function qS(e,t=QS){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sp(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return d_()?f_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await GS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function sp(e){return pl(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function JS(e){Ln(new on("platform-logger",t=>new fS(t),"PRIVATE")),Ln(new on("heartbeat",t=>new YS(t),"PRIVATE")),Ut(gc,np,e),Ut(gc,np,"esm2017"),Ut("fire-js","")}JS("");var ZS="firebase",ex="9.22.1";/**
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
 */Ut(ZS,ex,"app");const op="@firebase/database",lp="0.14.4";/**
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
 */let w_="";function tx(e){w_=e}/**
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
 */class nx{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Se(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Rs(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class rx{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return cn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const E_=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new nx(t)}}catch{}return new rx},Xn=E_("localStorage"),vc=E_("sessionStorage");/**
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
 */const ei=new jd("@firebase/database"),ix=function(){let e=1;return function(){return e++}}(),C_=function(e){const t=WC(e),n=new zC;n.update(t);const r=n.digest();return $d.encodeByteArray(r)},Vs=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Vs.apply(null,r):typeof r=="object"?t+=Se(r):t+=r,t+=" "}return t};let rr=null,ap=!0;const sx=function(e,t){x(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(ei.logLevel=Y.VERBOSE,rr=ei.log.bind(ei),t&&vc.set("logging_enabled",!0)):typeof e=="function"?rr=e:(rr=null,vc.remove("logging_enabled"))},Le=function(...e){if(ap===!0&&(ap=!1,rr===null&&vc.get("logging_enabled")===!0&&sx(!0)),rr){const t=Vs.apply(null,e);rr(t)}},Gs=function(e){return function(...t){Le(e,...t)}},wc=function(...e){const t="FIREBASE INTERNAL ERROR: "+Vs(...e);ei.error(t)},ln=function(...e){const t=`FIREBASE FATAL ERROR: ${Vs(...e)}`;throw ei.error(t),new Error(t)},Je=function(...e){const t="FIREBASE WARNING: "+Vs(...e);ei.warn(t)},ox=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},S_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},lx=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},_i="[MIN_NAME]",mr="[MAX_NAME]",Ti=function(e,t){if(e===t)return 0;if(e===_i||t===mr)return-1;if(t===_i||e===mr)return 1;{const n=up(e),r=up(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},ax=function(e,t){return e===t?0:e<t?-1:1},ji=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Se(t))},Wd=function(e){if(typeof e!="object"||e===null)return Se(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Se(t[r]),n+=":",n+=Wd(e[t[r]]);return n+="}",n},x_=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function et(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const I_=function(e){x(!S_(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,l,a;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=l+r,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=t;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},ux=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cx=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function dx(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const fx=new RegExp("^-?(0*)\\d{1,10}$"),hx=-2147483648,px=2147483647,up=function(e){if(fx.test(e)){const t=Number(e);if(t>=hx&&t<=px)return t}return null},Ni=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Je("Exception was thrown by user callback.",n),t},Math.floor(0))}},mx=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},os=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class gx{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class yx{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(t)}}class ti{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}ti.OWNER="owner";/**
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
 */const Ud="5",k_="v",T_="s",N_="r",R_="f",P_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,b_="ls",A_="p",Ec="ac",D_="websocket",O_="long_polling";/**
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
 */class M_{constructor(t,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Xn.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Xn.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function _x(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function L_(e,t,n){x(typeof t=="string","typeof type must == string"),x(typeof n=="object","typeof params must == object");let r;if(t===D_)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===O_)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);_x(e)&&(n.ns=e.namespace);const i=[];return et(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class vx{constructor(){this.counters_={}}incrementCounter(t,n=1){cn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return CC(this.counters_)}}/**
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
 */const Xa={},Ja={};function Hd(e){const t=e.toString();return Xa[t]||(Xa[t]=new vx),Xa[t]}function wx(e,t){const n=e.toString();return Ja[n]||(Ja[n]=t()),Ja[n]}/**
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
 */class Ex{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Ni(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const cp="start",Cx="close",Sx="pLPCommand",xx="pRTLPCB",F_="id",$_="pw",B_="ser",Ix="cb",kx="seg",Tx="ts",Nx="d",Rx="dframe",j_=1870,z_=30,Px=j_-z_,bx=25e3,Ax=3e4;class Gr{constructor(t,n,r,i,s,o,l){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gs(t),this.stats_=Hd(n),this.urlFn=a=>(this.appCheckToken&&(a[Ec]=this.appCheckToken),L_(n,O_,a))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Ex(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ax)),lx(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Vd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===cp)this.id=l,this.password=a;else if(o===Cx)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[cp]="t",r[B_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[Ix]=this.scriptTagHolder.uniqueCallbackIdentifier),r[k_]=Ud,this.transportSessionId&&(r[T_]=this.transportSessionId),this.lastSessionId&&(r[b_]=this.lastSessionId),this.applicationId&&(r[A_]=this.applicationId),this.appCheckToken&&(r[Ec]=this.appCheckToken),typeof location<"u"&&location.hostname&&P_.test(location.hostname)&&(r[N_]=R_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gr.forceAllow_=!0}static forceDisallow(){Gr.forceDisallow_=!0}static isAvailable(){return Gr.forceAllow_?!0:!Gr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!ux()&&!cx()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Se(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=s_(n),i=x_(r,Px);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Rx]="t",r[F_]=t,r[$_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Se(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Vd{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ix(),window[Sx+this.uniqueCallbackIdentifier]=t,window[xx+this.uniqueCallbackIdentifier]=n,this.myIFrame=Vd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[F_]=this.myID,t[$_]=this.myPW,t[B_]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+z_+r.length<=j_;){const o=this.pendingSegs.shift();r=r+"&"+kx+i+"="+o.seg+"&"+Tx+i+"="+o.ts+"&"+Nx+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(bx)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Dx=16384,Ox=45e3;let _l=null;typeof MozWebSocket<"u"?_l=MozWebSocket:typeof WebSocket<"u"&&(_l=WebSocket);class kt{constructor(t,n,r,i,s,o,l){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gs(this.connId),this.stats_=Hd(n),this.connURL=kt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[k_]=Ud,typeof location<"u"&&location.hostname&&P_.test(location.hostname)&&(o[N_]=R_),n&&(o[T_]=n),r&&(o[b_]=r),i&&(o[Ec]=i),s&&(o[A_]=s),L_(t,D_,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Xn.set("previous_websocket_failure",!0);try{let r;c_(),this.mySock=new _l(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&_l!==null&&!kt.forceDisallow_}static previouslyFailed(){return Xn.isInMemoryStorage||Xn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Xn.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Rs(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(x(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Se(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=x_(n,Dx);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ox))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kt.responsesRequiredToBeHealthy=2;kt.healthyTimeout=3e4;/**
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
 */const Mx=6e4,Lx=5e3,Fx=10*1024,$x=100*1024,Za="t",dp="d",Bx="s",fp="r",jx="e",hp="o",pp="a",mp="n",gp="p",zx="h";class Wx{constructor(t,n,r,i,s,o,l,a,u,d){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gs("c:"+this.id+":"),this.transportManager_=new bs(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=os(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>$x?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Fx?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(Za in t){const n=t[Za];n===pp?this.upgradeIfSecondaryHealthy_():n===fp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===hp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=ji("t",t),r=ji("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:gp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:pp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:mp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=ji("t",t),r=ji("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=ji(Za,t);if(dp in t){const r=t[dp];if(n===zx){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===mp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Bx?this.onConnectionShutdown_(r):n===fp?this.onReset_(r):n===jx?wc("Server Error: "+r):n===hp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):wc("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ud!==r&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),os(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Mx))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):os(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Lx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:gp,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Xn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class W_{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
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
 */class U_{constructor(t){this.allowedEvents_=t,this.listeners_={},x(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){x(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class vl extends U_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!u_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new vl}getInitialEvent(t){return x(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const yp=32,_p=768;class Q{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function U(){return new Q("")}function L(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Fn(e){return e.pieces_.length-e.pieceNum_}function q(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Q(e.pieces_,t)}function H_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function Ux(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function V_(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function G_(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Q(t,0)}function me(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Q)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function B(e){return e.pieceNum_>=e.pieces_.length}function Ge(e,t){const n=L(e),r=L(t);if(n===null)return t;if(n===r)return Ge(q(e),q(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Gd(e,t){if(Fn(e)!==Fn(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Tt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Fn(e)>Fn(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class Hx{constructor(t,n){this.errorPrefix_=n,this.parts_=V_(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=na(this.parts_[r]);Q_(this)}}function Vx(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=na(t),Q_(e)}function Gx(e){const t=e.parts_.pop();e.byteLength_-=na(t),e.parts_.length>0&&(e.byteLength_-=1)}function Q_(e){if(e.byteLength_>_p)throw new Error(e.errorPrefix_+"has a key path longer than "+_p+" bytes ("+e.byteLength_+").");if(e.parts_.length>yp)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yp+") or object contains a cycle "+Gn(e))}function Gn(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class Qd extends U_{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Qd}getInitialEvent(t){return x(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const zi=1e3,Qx=60*5*1e3,vp=30*1e3,Kx=1.3,Yx=3e4,qx="server_kill",wp=3;class en extends W_{constructor(t,n,r,i,s,o,l,a){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=en.nextPersistentConnectionId_++,this.log_=Gs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=zi,this.maxReconnectDelay_=Qx,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!c_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qd.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&vl.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Se(s)),x(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new ea,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),x(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),x(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;en.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,a))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&cn(t,"w")){const r=yi(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||BC(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=vp)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=$C(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),x(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Se(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):wc("Unrecognized action received from server: "+Se(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){x(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yx&&(this.reconnectDelay_=zi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+en.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){x(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new Wx(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,h=>{Je(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(qx)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Je(c),a())}}}interrupt(t){Le("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Le("Resuming connection for reason: "+t),delete this.interruptReasons_[t],qh(this.interruptReasons_)&&(this.reconnectDelay_=zi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>Wd(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new Q(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Le("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=wp&&(this.reconnectDelay_=vp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Le("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=wp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+w_.replace(/\./g,"-")]=1,u_()?t["framework.cordova"]=1:DC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=vl.getInstance().currentlyOnline();return qh(this.interruptReasons_)&&t}}en.nextPersistentConnectionId_=0;en.nextConnectionId_=0;/**
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
 */class ra{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new F(_i,t),i=new F(_i,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let _o;class K_ extends ra{static get __EMPTY_NODE(){return _o}static set __EMPTY_NODE(t){_o=t}compare(t,n){return Ti(t.name,n.name)}isDefinedOn(t){throw ki("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return F.MIN}maxPost(){return new F(mr,_o)}makePost(t,n){return x(typeof t=="string","KeyIndex indexValue must always be a string."),new F(t,_o)}toString(){return".key"}}const ni=new K_;/**
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
 */class vo{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ce{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Ce.RED,this.left=i??Qe.EMPTY_NODE,this.right=s??Qe.EMPTY_NODE}copy(t,n,r,i,s){return new Ce(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class Xx{copy(t,n,r,i,s){return this}insert(t,n,r){return new Ce(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(t,n=Qe.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Qe(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(t){return new Qe(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new vo(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new vo(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new vo(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new vo(this.root_,null,this.comparator_,!0,t)}}Qe.EMPTY_NODE=new Xx;/**
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
 */function Jx(e,t){return Ti(e.name,t.name)}function Kd(e,t){return Ti(e,t)}/**
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
 */let Cc;function Zx(e){Cc=e}const Y_=function(e){return typeof e=="number"?"number:"+I_(e):"string:"+e},q_=function(e){if(e.isLeafNode()){const t=e.val();x(typeof t=="string"||typeof t=="number"||typeof t=="object"&&cn(t,".sv"),"Priority must be a string or number.")}else x(e===Cc||e.isEmpty(),"priority of unexpected type.");x(e===Cc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Ep;class ve{constructor(t,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,x(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),q_(this.priorityNode_)}static set __childrenNodeConstructor(t){Ep=t}static get __childrenNodeConstructor(){return Ep}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new ve(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return B(t)?this:L(t)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=L(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(x(r!==".priority"||Fn(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+Y_(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=I_(this.value_):t+=this.value_,this.lazyHash_=C_(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===ve.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof ve.__childrenNodeConstructor?-1:(x(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return x(i>=0,"Unknown leaf type: "+n),x(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let X_,J_;function eI(e){X_=e}function tI(e){J_=e}class nI extends ra{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Ti(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(mr,new ve("[PRIORITY-POST]",J_))}makePost(t,n){const r=X_(t);return new F(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const ae=new nI;/**
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
 */const rI=Math.log(2);class iI{constructor(t){const n=s=>parseInt(Math.log(s)/rI,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const wl=function(e,t,n,r){e.sort(t);const i=function(a,u){const d=u-a;let c,f;if(d===0)return null;if(d===1)return c=e[a],f=n?n(c):c,new Ce(f,c.node,Ce.BLACK,null,null);{const h=parseInt(d/2,10)+a,y=i(a,h),_=i(h+1,u);return c=e[h],f=n?n(c):c,new Ce(f,c.node,Ce.BLACK,y,_)}},s=function(a){let u=null,d=null,c=e.length;const f=function(y,_){const k=c-y,m=c;c-=y;const p=i(k+1,m),g=e[k],v=n?n(g):g;h(new Ce(v,g.node,_,null,p))},h=function(y){u?(u.left=y,u=y):(d=y,u=y)};for(let y=0;y<a.count;++y){const _=a.nextBitIsOne(),k=Math.pow(2,a.count-(y+1));_?f(k,Ce.BLACK):(f(k,Ce.BLACK),f(k,Ce.RED))}return d},o=new iI(e.length),l=s(o);return new Qe(r||t,l)};/**
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
 */let eu;const br={};class Jt{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return x(br&&ae,"ChildrenNode.ts has not been loaded"),eu=eu||new Jt({".priority":br},{".priority":ae}),eu}get(t){const n=yi(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Qe?n:null}hasIndex(t){return cn(this.indexSet_,t.toString())}addIndex(t,n){x(t!==ni,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=wl(r,t.getCompare()):l=br;const a=t.toString(),u=Object.assign({},this.indexSet_);u[a]=t;const d=Object.assign({},this.indexes_);return d[a]=l,new Jt(d,u)}addToIndexes(t,n){const r=ml(this.indexes_,(i,s)=>{const o=yi(this.indexSet_,s);if(x(o,"Missing index implementation for "+s),i===br)if(o.isDefinedOn(t.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==t.name&&l.push(u),u=a.getNext();return l.push(t),wl(l,o.getCompare())}else return br;else{const l=n.get(t.name);let a=i;return l&&(a=a.remove(new F(t.name,l))),a.insert(t,t.node)}});return new Jt(r,this.indexSet_)}removeFromIndexes(t,n){const r=ml(this.indexes_,i=>{if(i===br)return i;{const s=n.get(t.name);return s?i.remove(new F(t.name,s)):i}});return new Jt(r,this.indexSet_)}}/**
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
 */let Wi;class A{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&q_(this.priorityNode_),this.children_.isEmpty()&&x(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Wi||(Wi=new A(new Qe(Kd),null,Jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Wi}updatePriority(t){return this.children_.isEmpty()?this:new A(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?Wi:n}}getChild(t){const n=L(t);return n===null?this:this.getImmediateChild(n).getChild(q(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(x(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new F(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Wi:this.priorityNode_;return new A(i,o,s)}}updateChild(t,n){const r=L(t);if(r===null)return n;{x(L(t)!==".priority"||Fn(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ae,(o,l)=>{n[o]=l.val(t),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+Y_(this.getPriority().val())+":"),this.forEachChild(ae,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":C_(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new F(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new F(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Qs?-1:0}withIndex(t){if(t===ni||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===ni||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ae),i=n.getIterator(ae);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===ni?null:this.indexMap_.get(t.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class sI extends A{constructor(){super(new Qe(Kd),A.EMPTY_NODE,Jt.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return A.EMPTY_NODE}isEmpty(){return!1}}const Qs=new sI;Object.defineProperties(F,{MIN:{value:new F(_i,A.EMPTY_NODE)},MAX:{value:new F(mr,Qs)}});K_.__EMPTY_NODE=A.EMPTY_NODE;ve.__childrenNodeConstructor=A;Zx(Qs);tI(Qs);/**
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
 */const oI=!0;function Te(e,t=null){if(e===null)return A.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),x(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new ve(n,Te(t))}if(!(e instanceof Array)&&oI){const n=[];let r=!1;if(et(e,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=wl(n,Jx,o=>o.name,Kd);if(r){const o=wl(n,ae.getCompare());return new A(s,Te(t),new Jt({".priority":o},{".priority":ae}))}else return new A(s,Te(t),Jt.Default)}else{let n=A.EMPTY_NODE;return et(e,(r,i)=>{if(cn(e,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(t))}}eI(Te);/**
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
 */class lI extends ra{constructor(t){super(),this.indexPath_=t,x(!B(t)&&L(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Ti(t.name,n.name):s}makePost(t,n){const r=Te(t),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const t=A.EMPTY_NODE.updateChild(this.indexPath_,Qs);return new F(mr,t)}toString(){return V_(this.indexPath_,0).join("/")}}/**
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
 */class aI extends ra{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Ti(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(t,n){const r=Te(t);return new F(n,r)}toString(){return".value"}}const uI=new aI;/**
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
 */function Z_(e){return{type:"value",snapshotNode:e}}function vi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function As(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function Ds(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function cI(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class Yd{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){x(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=t.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(As(n,l)):x(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(vi(n,r)):o.trackChildChange(Ds(n,r,l))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(ae,(i,s)=>{n.hasChild(i)||r.trackChildChange(As(i,s))}),n.isLeafNode()||n.forEachChild(ae,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(Ds(i,s,o))}else r.trackChildChange(vi(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?A.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Os{constructor(t){this.indexedFilter_=new Yd(t.getIndex()),this.index_=t.getIndex(),this.startPost_=Os.getStartPost_(t),this.endPost_=Os.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ae,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class dI{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Os(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,h)=>c(h,f)}else o=this.index_.getCompare();const l=t;x(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,a);if(d&&!r.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(Ds(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(As(n,c));const _=l.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(vi(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?t:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(As(u.name,u.node)),s.trackChildChange(vi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):t}}/**
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
 */class qd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ae}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return x(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return x(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:_i}hasEnd(){return this.endSet_}getIndexEndValue(){return x(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return x(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:mr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return x(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ae}copy(){const t=new qd;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function fI(e){return e.loadsAllData()?new Yd(e.getIndex()):e.hasLimit()?new dI(e):new Os(e)}function Cp(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ae?n="$priority":e.index_===uI?n="$value":e.index_===ni?n="$key":(x(e.index_ instanceof lI,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Se(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Se(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Se(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Se(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Se(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Sp(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==ae&&(t.i=e.index_.toString()),t}/**
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
 */class El extends W_{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Gs("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(x(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=El.getListenId_(t,r),l={};this.listens_[o]=l;const a=Cp(t._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),yi(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(t,n){const r=El.getListenId_(t,n);delete this.listens_[r]}get(t){const n=Cp(t._queryParams),r=t._path.toString(),i=new ea;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+jC(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Rs(l.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class hI{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function Cl(){return{value:null,children:new Map}}function ev(e,t,n){if(B(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=L(t);e.children.has(r)||e.children.set(r,Cl());const i=e.children.get(r);t=q(t),ev(i,t,n)}}function Sc(e,t,n){e.value!==null?n(t,e.value):pI(e,(r,i)=>{const s=new Q(t.toString()+"/"+r);Sc(i,s,n)})}function pI(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class mI{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&et(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const xp=10*1e3,gI=30*1e3,yI=5*60*1e3;class _I{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mI(t);const r=xp+(gI-xp)*Math.random();os(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;et(t,(i,s)=>{s>0&&cn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),os(this.reportStats_.bind(this),Math.floor(Math.random()*2*yI))}}/**
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
 */var Nt;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nt||(Nt={}));function tv(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Jd(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class Sl{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Nt.ACK_USER_WRITE,this.source=tv()}operationForChild(t){if(B(this.path)){if(this.affectedTree.value!=null)return x(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(t));return new Sl(U(),n,this.revert)}}else return x(L(this.path)===t,"operationForChild called for unrelated child."),new Sl(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class vI{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function wI(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(cI(o.childName,o.snapshotNode))}),Ui(e,i,"child_removed",t,r,n),Ui(e,i,"child_added",t,r,n),Ui(e,i,"child_moved",s,r,n),Ui(e,i,"child_changed",t,r,n),Ui(e,i,"value",t,r,n),i}function Ui(e,t,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>CI(e,l,a)),o.forEach(l=>{const a=EI(e,l,s);i.forEach(u=>{u.respondsTo(l.type)&&t.push(u.createEvent(a,e.query_))})})}function EI(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function CI(e,t,n){if(t.childName==null||n.childName==null)throw ki("Should only compare child_ events.");const r=new F(t.childName,t.snapshotNode),i=new F(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function ia(e,t){return{eventCache:e,serverCache:t}}function ls(e,t,n,r){return ia(new yr(t,n,r),e.serverCache)}function nv(e,t,n,r){return ia(e.eventCache,new yr(t,n,r))}function xc(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function _r(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let tu;const SI=()=>(tu||(tu=new Qe(ax)),tu);class ee{constructor(t,n=SI()){this.value=t,this.children=n}static fromObject(t){let n=new ee(null);return et(t,(r,i)=>{n=n.set(new Q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:U(),value:this.value};if(B(t))return null;{const r=L(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(t),n);return s!=null?{path:me(new Q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(B(t))return this;{const n=L(t),r=this.children.get(n);return r!==null?r.subtree(q(t)):new ee(null)}}set(t,n){if(B(t))return new ee(n,this.children);{const r=L(t),s=(this.children.get(r)||new ee(null)).set(q(t),n),o=this.children.insert(r,s);return new ee(this.value,o)}}remove(t){if(B(t))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=L(t),r=this.children.get(n);if(r){const i=r.remove(q(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ee(null):new ee(this.value,s)}else return this}}get(t){if(B(t))return this.value;{const n=L(t),r=this.children.get(n);return r?r.get(q(t)):null}}setTree(t,n){if(B(t))return n;{const r=L(t),s=(this.children.get(r)||new ee(null)).setTree(q(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ee(this.value,o)}}fold(t){return this.fold_(U(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(me(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,U(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(t))return null;{const s=L(t),o=this.children.get(s);return o?o.findOnPath_(q(t),me(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,U(),n)}foreachOnPath_(t,n,r){if(B(t))return this;{this.value&&r(n,this.value);const i=L(t),s=this.children.get(i);return s?s.foreachOnPath_(q(t),me(n,i),r):new ee(null)}}foreach(t){this.foreach_(U(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(me(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class At{constructor(t){this.writeTree_=t}static empty(){return new At(new ee(null))}}function as(e,t,n){if(B(t))return new At(new ee(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=Ge(i,t);return s=s.updateChild(o,n),new At(e.writeTree_.set(i,s))}else{const i=new ee(n),s=e.writeTree_.setTree(t,i);return new At(s)}}}function Ip(e,t,n){let r=e;return et(n,(i,s)=>{r=as(r,me(t,i),s)}),r}function kp(e,t){if(B(t))return At.empty();{const n=e.writeTree_.setTree(t,new ee(null));return new At(n)}}function Ic(e,t){return kr(e,t)!=null}function kr(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Ge(n.path,t)):null}function Tp(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ae,(r,i)=>{t.push(new F(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new F(r,i.value))}),t}function An(e,t){if(B(t))return e;{const n=kr(e,t);return n!=null?new At(new ee(n)):new At(e.writeTree_.subtree(t))}}function kc(e){return e.writeTree_.isEmpty()}function wi(e,t){return rv(U(),e.writeTree_,t)}function rv(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(x(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=rv(me(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(me(e,".priority"),r)),n}}/**
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
 */function Zd(e,t){return lv(t,e)}function xI(e,t,n,r,i){x(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=as(e.visibleWrites,t,n)),e.lastWriteId=r}function II(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function kI(e,t){const n=e.allWrites.findIndex(l=>l.writeId===t);x(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const l=e.allWrites[o];l.visible&&(o>=n&&TI(l,r.path)?i=!1:Tt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return NI(e),!0;if(r.snap)e.visibleWrites=kp(e.visibleWrites,r.path);else{const l=r.children;et(l,a=>{e.visibleWrites=kp(e.visibleWrites,me(r.path,a))})}return!0}else return!1}function TI(e,t){if(e.snap)return Tt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Tt(me(e.path,n),t))return!0;return!1}function NI(e){e.visibleWrites=iv(e.allWrites,RI,U()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function RI(e){return e.visible}function iv(e,t,n){let r=At.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let l;if(s.snap)Tt(n,o)?(l=Ge(n,o),r=as(r,l,s.snap)):Tt(o,n)&&(l=Ge(o,n),r=as(r,U(),s.snap.getChild(l)));else if(s.children){if(Tt(n,o))l=Ge(n,o),r=Ip(r,l,s.children);else if(Tt(o,n))if(l=Ge(o,n),B(l))r=Ip(r,U(),s.children);else{const a=yi(s.children,L(l));if(a){const u=a.getChild(q(l));r=as(r,U(),u)}}}else throw ki("WriteRecord should have .snap or .children")}}return r}function sv(e,t,n,r,i){if(!r&&!i){const s=kr(e.visibleWrites,t);if(s!=null)return s;{const o=An(e.visibleWrites,t);if(kc(o))return n;if(n==null&&!Ic(o,U()))return null;{const l=n||A.EMPTY_NODE;return wi(o,l)}}}else{const s=An(e.visibleWrites,t);if(!i&&kc(s))return n;if(!i&&n==null&&!Ic(s,U()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Tt(u.path,t)||Tt(t,u.path))},l=iv(e.allWrites,o,t),a=n||A.EMPTY_NODE;return wi(l,a)}}}function PI(e,t,n){let r=A.EMPTY_NODE;const i=kr(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ae,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=An(e.visibleWrites,t);return n.forEachChild(ae,(o,l)=>{const a=wi(An(s,new Q(o)),l);r=r.updateImmediateChild(o,a)}),Tp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=An(e.visibleWrites,t);return Tp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function bI(e,t,n,r,i){x(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=me(t,n);if(Ic(e.visibleWrites,s))return null;{const o=An(e.visibleWrites,s);return kc(o)?i.getChild(n):wi(o,i.getChild(n))}}function AI(e,t,n,r){const i=me(t,n),s=kr(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=An(e.visibleWrites,i);return wi(o,r.getNode().getImmediateChild(n))}else return null}function DI(e,t){return kr(e.visibleWrites,t)}function OI(e,t,n,r,i,s,o){let l;const a=An(e.visibleWrites,t),u=kr(a,U());if(u!=null)l=u;else if(n!=null)l=wi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let h=f.getNext();for(;h&&d.length<i;)c(h,r)!==0&&d.push(h),h=f.getNext();return d}else return[]}function MI(){return{visibleWrites:At.empty(),allWrites:[],lastWriteId:-1}}function xl(e,t,n,r){return sv(e.writeTree,e.treePath,t,n,r)}function ef(e,t){return PI(e.writeTree,e.treePath,t)}function Np(e,t,n,r){return bI(e.writeTree,e.treePath,t,n,r)}function Il(e,t){return DI(e.writeTree,me(e.treePath,t))}function LI(e,t,n,r,i,s){return OI(e.writeTree,e.treePath,t,n,r,i,s)}function tf(e,t,n){return AI(e.writeTree,e.treePath,t,n)}function ov(e,t){return lv(me(e.treePath,t),e.writeTree)}function lv(e,t){return{treePath:e,writeTree:t}}/**
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
 */class FI{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;x(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),x(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,Ds(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,As(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,vi(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,Ds(r,t.snapshotNode,i.oldSnap));else throw ki("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $I{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const av=new $I;class nf{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new yr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tf(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:_r(this.viewCache_),s=LI(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
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
 */function BI(e){return{filter:e}}function jI(e,t){x(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),x(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function zI(e,t,n,r,i){const s=new FI;let o,l;if(n.type===Nt.OVERWRITE){const u=n;u.source.fromUser?o=Tc(e,t,u.path,u.snap,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered()&&!B(u.path),o=kl(e,t,u.path,u.snap,r,i,l,s))}else if(n.type===Nt.MERGE){const u=n;u.source.fromUser?o=UI(e,t,u.path,u.children,r,i,s):(x(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered(),o=Nc(e,t,u.path,u.children,r,i,l,s))}else if(n.type===Nt.ACK_USER_WRITE){const u=n;u.revert?o=GI(e,t,u.path,r,i,s):o=HI(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===Nt.LISTEN_COMPLETE)o=VI(e,t,n.path,r,s);else throw ki("Unknown operation type: "+n.type);const a=s.getChanges();return WI(t,o,a),{viewCache:o,changes:a}}function WI(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=xc(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Z_(xc(t)))}}function uv(e,t,n,r,i,s){const o=t.eventCache;if(Il(r,n)!=null)return t;{let l,a;if(B(n))if(x(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=_r(t),d=u instanceof A?u:A.EMPTY_NODE,c=ef(r,d);l=e.filter.updateFullNode(t.eventCache.getNode(),c,s)}else{const u=xl(r,_r(t));l=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){x(Fn(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=t.serverCache.getNode();const c=Np(r,n,d,a);c!=null?l=e.filter.updatePriority(d,c):l=o.getNode()}else{const d=q(n);let c;if(o.isCompleteForChild(u)){a=t.serverCache.getNode();const f=Np(r,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=tf(r,u,t.serverCache);c!=null?l=e.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return ls(t,l,o.isFullyInitialized()||B(n),e.filter.filtersNodes())}}function kl(e,t,n,r,i,s,o,l){const a=t.serverCache;let u;const d=o?e.filter:e.filter.getIndexedFilter();if(B(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),h,null)}else{const h=L(n);if(!a.isCompleteForPath(n)&&Fn(n)>1)return t;const y=q(n),k=a.getNode().getImmediateChild(h).updateChild(y,r);h===".priority"?u=d.updatePriority(a.getNode(),k):u=d.updateChild(a.getNode(),h,k,y,av,null)}const c=nv(t,u,a.isFullyInitialized()||B(n),d.filtersNodes()),f=new nf(i,c,s);return uv(e,c,n,i,f,l)}function Tc(e,t,n,r,i,s,o){const l=t.eventCache;let a,u;const d=new nf(i,t,s);if(B(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),a=ls(t,u,!0,e.filter.filtersNodes());else{const c=L(n);if(c===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),a=ls(t,u,l.isFullyInitialized(),l.isFiltered());else{const f=q(n),h=l.getNode().getImmediateChild(c);let y;if(B(f))y=r;else{const _=d.getCompleteChild(c);_!=null?H_(f)===".priority"&&_.getChild(G_(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=A.EMPTY_NODE}if(h.equals(y))a=t;else{const _=e.filter.updateChild(l.getNode(),c,y,f,d,o);a=ls(t,_,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function Rp(e,t){return e.eventCache.isCompleteForChild(t)}function UI(e,t,n,r,i,s,o){let l=t;return r.foreach((a,u)=>{const d=me(n,a);Rp(t,L(d))&&(l=Tc(e,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=me(n,a);Rp(t,L(d))||(l=Tc(e,l,d,u,i,s,o))}),l}function Pp(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function Nc(e,t,n,r,i,s,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a=t,u;B(n)?u=r:u=new ee(null).setTree(n,r);const d=t.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const h=t.serverCache.getNode().getImmediateChild(c),y=Pp(e,h,f);a=kl(e,a,new Q(c),y,i,s,o,l)}}),u.children.inorderTraversal((c,f)=>{const h=!t.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!h){const y=t.serverCache.getNode().getImmediateChild(c),_=Pp(e,y,f);a=kl(e,a,new Q(c),_,i,s,o,l)}}),a}function HI(e,t,n,r,i,s,o){if(Il(i,n)!=null)return t;const l=t.serverCache.isFiltered(),a=t.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return kl(e,t,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let u=new ee(null);return a.getNode().forEachChild(ni,(d,c)=>{u=u.set(new Q(d),c)}),Nc(e,t,n,u,i,s,l,o)}else return t}else{let u=new ee(null);return r.foreach((d,c)=>{const f=me(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),Nc(e,t,n,u,i,s,l,o)}}function VI(e,t,n,r,i){const s=t.serverCache,o=nv(t,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return uv(e,o,n,r,av,i)}function GI(e,t,n,r,i,s){let o;if(Il(r,n)!=null)return t;{const l=new nf(r,t,i),a=t.eventCache.getNode();let u;if(B(n)||L(n)===".priority"){let d;if(t.serverCache.isFullyInitialized())d=xl(r,_r(t));else{const c=t.serverCache.getNode();x(c instanceof A,"serverChildren would be complete if leaf node"),d=ef(r,c)}d=d,u=e.filter.updateFullNode(a,d,s)}else{const d=L(n);let c=tf(r,d,t.serverCache);c==null&&t.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=e.filter.updateChild(a,d,c,q(n),l,s):t.eventCache.getNode().hasChild(d)?u=e.filter.updateChild(a,d,A.EMPTY_NODE,q(n),l,s):u=a,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=xl(r,_r(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||Il(r,U())!=null,ls(t,u,o,e.filter.filtersNodes())}}/**
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
 */class QI{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Yd(r.getIndex()),s=fI(r);this.processor_=BI(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new yr(a,o.isFullyInitialized(),i.filtersNodes()),c=new yr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ia(c,d),this.eventGenerator_=new vI(this.query_)}get query(){return this.query_}}function KI(e){return e.viewCache_.serverCache.getNode()}function YI(e,t){const n=_r(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!B(t)&&!n.getImmediateChild(L(t)).isEmpty())?n.getChild(t):null}function bp(e){return e.eventRegistrations_.length===0}function qI(e,t){e.eventRegistrations_.push(t)}function Ap(e,t,n){const r=[];if(n){x(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function Dp(e,t,n,r){t.type===Nt.MERGE&&t.source.queryId!==null&&(x(_r(e.viewCache_),"We should always have a full cache before handling merges"),x(xc(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=zI(e.processor_,i,t,n,r);return jI(e.processor_,s.viewCache),x(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,cv(e,s.changes,s.viewCache.eventCache.getNode(),null)}function XI(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ae,(s,o)=>{r.push(vi(s,o))}),n.isFullyInitialized()&&r.push(Z_(n.getNode())),cv(e,r,n.getNode(),t)}function cv(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return wI(e.eventGenerator_,t,n,i)}/**
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
 */let Tl;class JI{constructor(){this.views=new Map}}function ZI(e){x(!Tl,"__referenceConstructor has already been defined"),Tl=e}function ek(){return x(Tl,"Reference.ts has not been loaded"),Tl}function tk(e){return e.views.size===0}function rf(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return x(s!=null,"SyncTree gave us an op for an invalid query."),Dp(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(Dp(o,t,n,r));return s}}function nk(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let l=xl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=ef(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=ia(new yr(l,a,!1),new yr(r,i,!1));return new QI(t,u)}return o}function rk(e,t,n,r,i,s){const o=nk(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),qI(o,n),XI(o,n)}function ik(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const l=$n(e);if(i==="default")for(const[a,u]of e.views.entries())o=o.concat(Ap(u,n,r)),bp(u)&&(e.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=e.views.get(i);a&&(o=o.concat(Ap(a,n,r)),bp(a)&&(e.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!$n(e)&&s.push(new(ek())(t._repo,t._path)),{removed:s,events:o}}function dv(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ri(e,t){let n=null;for(const r of e.views.values())n=n||YI(r,t);return n}function fv(e,t){if(t._queryParams.loadsAllData())return sa(e);{const r=t._queryIdentifier;return e.views.get(r)}}function hv(e,t){return fv(e,t)!=null}function $n(e){return sa(e)!=null}function sa(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let Nl;function sk(e){x(!Nl,"__referenceConstructor has already been defined"),Nl=e}function ok(){return x(Nl,"Reference.ts has not been loaded"),Nl}let lk=1;class Op{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ee(null),this.pendingWriteTree_=MI(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pv(e,t,n,r,i){return xI(e.pendingWriteTree_,t,n,r,i),i?Ks(e,new gr(tv(),t,n)):[]}function Jn(e,t,n=!1){const r=II(e.pendingWriteTree_,t);if(kI(e.pendingWriteTree_,t)){let s=new ee(null);return r.snap!=null?s=s.set(U(),!0):et(r.children,o=>{s=s.set(new Q(o),!0)}),Ks(e,new Sl(r.path,s,n))}else return[]}function oa(e,t,n){return Ks(e,new gr(Xd(),t,n))}function ak(e,t,n){const r=ee.fromObject(n);return Ks(e,new Ls(Xd(),t,r))}function uk(e,t){return Ks(e,new Ms(Xd(),t))}function ck(e,t,n){const r=of(e,n);if(r){const i=lf(r),s=i.path,o=i.queryId,l=Ge(s,t),a=new Ms(Jd(o),l);return af(e,s,a)}else return[]}function Rc(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let l=[];if(o&&(t._queryIdentifier==="default"||hv(o,t))){const a=ik(o,t,n,r);tk(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=e.syncPointTree_.findOnPath(s,(f,h)=>$n(h));if(d&&!c){const f=e.syncPointTree_.subtree(s);if(!f.isEmpty()){const h=hk(f);for(let y=0;y<h.length;++y){const _=h[y],k=_.query,m=yv(e,_);e.listenProvider_.startListening(us(k),Rl(e,k),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?e.listenProvider_.stopListening(us(t),null):u.forEach(f=>{const h=e.queryToTagMap.get(la(f));e.listenProvider_.stopListening(us(f),h)}))}pk(e,u)}return l}function dk(e,t,n,r){const i=of(e,r);if(i!=null){const s=lf(i),o=s.path,l=s.queryId,a=Ge(o,t),u=new gr(Jd(l),a,n);return af(e,o,u)}else return[]}function fk(e,t,n,r){const i=of(e,r);if(i){const s=lf(i),o=s.path,l=s.queryId,a=Ge(o,t),u=ee.fromObject(n),d=new Ls(Jd(l),a,u);return af(e,o,d)}else return[]}function Mp(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(f,h)=>{const y=Ge(f,i);s=s||ri(h,y),o=o||$n(h)});let l=e.syncPointTree_.get(i);l?(o=o||$n(l),s=s||ri(l,U())):(l=new JI,e.syncPointTree_=e.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((h,y)=>{const _=ri(y,U());_&&(s=s.updateImmediateChild(h,_))}));const u=hv(l,t);if(!u&&!t._queryParams.loadsAllData()){const f=la(t);x(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=mk();e.queryToTagMap.set(f,h),e.tagToQueryMap.set(h,f)}const d=Zd(e.pendingWriteTree_,i);let c=rk(l,t,n,d,s,a);if(!u&&!o&&!r){const f=fv(l,t);c=c.concat(gk(e,t,f))}return c}function sf(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,l)=>{const a=Ge(o,t),u=ri(l,a);if(u)return u});return sv(i,t,s,n,!0)}function Ks(e,t){return mv(t,e.syncPointTree_,null,Zd(e.pendingWriteTree_,U()))}function mv(e,t,n,r){if(B(e.path))return gv(e,t,n,r);{const i=t.get(U());n==null&&i!=null&&(n=ri(i,U()));let s=[];const o=L(e.path),l=e.operationForChild(o),a=t.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=ov(r,o);s=s.concat(mv(l,a,u,d))}return i&&(s=s.concat(rf(i,e,r,n))),s}}function gv(e,t,n,r){const i=t.get(U());n==null&&i!=null&&(n=ri(i,U()));let s=[];return t.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=ov(r,o),d=e.operationForChild(o);d&&(s=s.concat(gv(d,l,a,u)))}),i&&(s=s.concat(rf(i,e,r,n))),s}function yv(e,t){const n=t.query,r=Rl(e,n);return{hashFn:()=>(KI(t)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?ck(e,n._path,r):uk(e,n._path);{const s=dx(i,n);return Rc(e,n,null,s)}}}}function Rl(e,t){const n=la(t);return e.queryToTagMap.get(n)}function la(e){return e._path.toString()+"$"+e._queryIdentifier}function of(e,t){return e.tagToQueryMap.get(t)}function lf(e){const t=e.indexOf("$");return x(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Q(e.substr(0,t))}}function af(e,t,n){const r=e.syncPointTree_.get(t);x(r,"Missing sync point for query tag that we're tracking");const i=Zd(e.pendingWriteTree_,t);return rf(r,n,i,null)}function hk(e){return e.fold((t,n,r)=>{if(n&&$n(n))return[sa(n)];{let i=[];return n&&(i=dv(n)),et(r,(s,o)=>{i=i.concat(o)}),i}})}function us(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(ok())(e._repo,e._path):e}function pk(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=la(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function mk(){return lk++}function gk(e,t,n){const r=t._path,i=Rl(e,t),s=yv(e,n),o=e.listenProvider_.startListening(us(t),i,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(r);if(i)x(!$n(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!B(u)&&d&&$n(d))return[sa(d).query];{let f=[];return d&&(f=f.concat(dv(d).map(h=>h.query))),et(c,(h,y)=>{f=f.concat(y)}),f}});for(let u=0;u<a.length;++u){const d=a[u];e.listenProvider_.stopListening(us(d),Rl(e,d))}}return o}/**
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
 */class uf{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new uf(n)}node(){return this.node_}}class cf{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=me(this.path_,t);return new cf(this.syncTree_,n)}node(){return sf(this.syncTree_,this.path_)}}const yk=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Lp=function(e,t,n){if(!e||typeof e!="object")return e;if(x(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return _k(e[".sv"],t,n);if(typeof e[".sv"]=="object")return vk(e[".sv"],t);x(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},_k=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:x(!1,"Unexpected server value: "+e)}},vk=function(e,t,n){e.hasOwnProperty("increment")||x(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&x(!1,"Unexpected increment value: "+r);const i=t.node();if(x(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},wk=function(e,t,n,r){return df(t,new cf(n,e),r)},_v=function(e,t,n){return df(e,new uf(t),n)};function df(e,t,n){const r=e.getPriority().val(),i=Lp(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,l=Lp(o.getValue(),t,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Te(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(ae,(l,a)=>{const u=df(a,t.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class ff{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function hf(e,t){let n=t instanceof Q?t:new Q(t),r=e,i=L(n);for(;i!==null;){const s=yi(r.node.children,i)||{children:{},childCount:0};r=new ff(i,r,s),n=q(n),i=L(n)}return r}function Ri(e){return e.node.value}function vv(e,t){e.node.value=t,Pc(e)}function wv(e){return e.node.childCount>0}function Ek(e){return Ri(e)===void 0&&!wv(e)}function aa(e,t){et(e.node.children,(n,r)=>{t(new ff(n,e,r))})}function Ev(e,t,n,r){n&&!r&&t(e),aa(e,i=>{Ev(i,t,!0,r)}),n&&r&&t(e)}function Ck(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Ys(e){return new Q(e.parent===null?e.name:Ys(e.parent)+"/"+e.name)}function Pc(e){e.parent!==null&&Sk(e.parent,e.name,e)}function Sk(e,t,n){const r=Ek(n),i=cn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Pc(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Pc(e))}/**
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
 */const xk=/[\[\].#$\/\u0000-\u001F\u007F]/,Ik=/[\[\].#$\u0000-\u001F\u007F]/,nu=10*1024*1024,Cv=function(e){return typeof e=="string"&&e.length!==0&&!xk.test(e)},Sv=function(e){return typeof e=="string"&&e.length!==0&&!Ik.test(e)},kk=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Sv(e)},xv=function(e,t,n,r){r&&t===void 0||pf(Bd(e,"value"),t,n)},pf=function(e,t,n){const r=n instanceof Q?new Hx(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Gn(r));if(typeof t=="function")throw new Error(e+"contains a function "+Gn(r)+" with contents = "+t.toString());if(S_(t))throw new Error(e+"contains "+t.toString()+" "+Gn(r));if(typeof t=="string"&&t.length>nu/3&&na(t)>nu)throw new Error(e+"contains a string greater than "+nu+" utf8 bytes "+Gn(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(et(t,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Cv(o)))throw new Error(e+" contains an invalid key ("+o+") "+Gn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Vx(r,o),pf(e,l,r),Gx(r)}),i&&s)throw new Error(e+' contains ".value" child '+Gn(r)+" in addition to actual children.")}},Iv=function(e,t,n,r){if(!(r&&n===void 0)&&!Sv(n))throw new Error(Bd(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Tk=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iv(e,t,n,r)},kv=function(e,t){if(L(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},Nk=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Cv(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kk(n))throw new Error(Bd(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Rk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function mf(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!Gd(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function Tv(e,t,n){mf(e,n),Nv(e,r=>Gd(r,t))}function an(e,t,n){mf(e,n),Nv(e,r=>Tt(r,t)||Tt(t,r))}function Nv(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(Pk(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Pk(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();rr&&Le("event: "+n.toString()),Ni(r)}}}/**
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
 */const bk="repo_interrupt",Ak=25;class Dk{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Rk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Cl(),this.transactionQueueTree_=new ff,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Ok(e,t,n){if(e.stats_=Hd(e.repoInfo_),e.forceRestClient_||mx())e.server_=new El(e.repoInfo_,(r,i,s,o)=>{Fp(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>$p(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new en(e.repoInfo_,t,(r,i,s,o)=>{Fp(e,r,i,s,o)},r=>{$p(e,r)},r=>{Mk(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=wx(e.repoInfo_,()=>new _I(e.stats_,e.server_)),e.infoData_=new hI,e.infoSyncTree_=new Op({startListening:(r,i,s,o)=>{let l=[];const a=e.infoData_.getNode(r._path);return a.isEmpty()||(l=oa(e.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),yf(e,"connected",!1),e.serverSyncTree_=new Op({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);an(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function Rv(e){const n=e.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function gf(e){return yk({timestamp:Rv(e)})}function Fp(e,t,n,r,i){e.dataUpdateCount++;const s=new Q(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const a=ml(n,u=>Te(u));o=fk(e.serverSyncTree_,s,a,i)}else{const a=Te(n);o=dk(e.serverSyncTree_,s,a,i)}else if(r){const a=ml(n,u=>Te(u));o=ak(e.serverSyncTree_,s,a)}else{const a=Te(n);o=oa(e.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ua(e,s)),an(e.eventQueue_,l,o)}function $p(e,t){yf(e,"connected",t),t===!1&&Fk(e)}function Mk(e,t){et(t,(n,r)=>{yf(e,n,r)})}function yf(e,t,n){const r=new Q("/.info/"+t),i=Te(n);e.infoData_.updateSnapshot(r,i);const s=oa(e.infoSyncTree_,r,i);an(e.eventQueue_,r,s)}function Pv(e){return e.nextWriteId_++}function Lk(e,t,n,r,i){_f(e,"set",{path:t.toString(),value:n,priority:r});const s=gf(e),o=Te(n,r),l=sf(e.serverSyncTree_,t),a=_v(o,l,s),u=Pv(e),d=pv(e.serverSyncTree_,t,a,u,!0);mf(e.eventQueue_,d),e.server_.put(t.toString(),o.val(!0),(f,h)=>{const y=f==="ok";y||Je("set at "+t+" failed: "+f);const _=Jn(e.serverSyncTree_,u,!y);an(e.eventQueue_,t,_),jk(e,i,f,h)});const c=Mv(e,t);ua(e,c),an(e.eventQueue_,c,[])}function Fk(e){_f(e,"onDisconnectEvents");const t=gf(e),n=Cl();Sc(e.onDisconnect_,U(),(i,s)=>{const o=wk(i,s,e.serverSyncTree_,t);ev(n,i,o)});let r=[];Sc(n,U(),(i,s)=>{r=r.concat(oa(e.serverSyncTree_,i,s));const o=Mv(e,i);ua(e,o)}),e.onDisconnect_=Cl(),an(e.eventQueue_,U(),r)}function $k(e,t,n){let r;L(t._path)===".info"?r=Mp(e.infoSyncTree_,t,n):r=Mp(e.serverSyncTree_,t,n),Tv(e.eventQueue_,t._path,r)}function Bp(e,t,n){let r;L(t._path)===".info"?r=Rc(e.infoSyncTree_,t,n):r=Rc(e.serverSyncTree_,t,n),Tv(e.eventQueue_,t._path,r)}function Bk(e){e.persistentConnection_&&e.persistentConnection_.interrupt(bk)}function _f(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Le(n,...t)}function jk(e,t,n,r){t&&Ni(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,t(o)}})}function bv(e,t,n){return sf(e.serverSyncTree_,t,n)||A.EMPTY_NODE}function vf(e,t=e.transactionQueueTree_){if(t||ca(e,t),Ri(t)){const n=Dv(e,t);x(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zk(e,Ys(t),n)}else wv(t)&&aa(t,n=>{vf(e,n)})}function zk(e,t,n){const r=n.map(u=>u.currentWriteId),i=bv(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];x(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ge(t,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=t;e.server_.put(a.toString(),l,u=>{_f(e,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Jn(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();ca(e,hf(e.transactionQueueTree_,t)),vf(e,e.transactionQueueTree_),an(e.eventQueue_,t,d);for(let f=0;f<c.length;f++)Ni(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Je("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}ua(e,t)}},o)}function ua(e,t){const n=Av(e,t),r=Ys(n),i=Dv(e,n);return Wk(e,i,r),r}function Wk(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<t.length;l++){const a=t[l],u=Ge(n,a.path);let d=!1,c;if(x(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Jn(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ak)d=!0,c="maxretry",i=i.concat(Jn(e.serverSyncTree_,a.currentWriteId,!0));else{const f=bv(e,a.path,o);a.currentInputSnapshot=f;const h=t[l].update(f.val());if(h!==void 0){pf("transaction failed: Data returned ",h,a.path);let y=Te(h);typeof h=="object"&&h!=null&&cn(h,".priority")||(y=y.updatePriority(f.getPriority()));const k=a.currentWriteId,m=gf(e),p=_v(y,f,m);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=p,a.currentWriteId=Pv(e),o.splice(o.indexOf(k),1),i=i.concat(pv(e.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Jn(e.serverSyncTree_,k,!0))}else d=!0,c="nodata",i=i.concat(Jn(e.serverSyncTree_,a.currentWriteId,!0))}an(e.eventQueue_,n,i),i=[],d&&(t[l].status=2,function(f){setTimeout(f,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(c==="nodata"?r.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):r.push(()=>t[l].onComplete(new Error(c),!1,null))))}ca(e,e.transactionQueueTree_);for(let l=0;l<r.length;l++)Ni(r[l]);vf(e,e.transactionQueueTree_)}function Av(e,t){let n,r=e.transactionQueueTree_;for(n=L(t);n!==null&&Ri(r)===void 0;)r=hf(r,n),t=q(t),n=L(t);return r}function Dv(e,t){const n=[];return Ov(e,t,n),n.sort((r,i)=>r.order-i.order),n}function Ov(e,t,n){const r=Ri(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);aa(t,i=>{Ov(e,i,n)})}function ca(e,t){const n=Ri(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,vv(t,n.length>0?n:void 0)}aa(t,r=>{ca(e,r)})}function Mv(e,t){const n=Ys(Av(e,t)),r=hf(e.transactionQueueTree_,t);return Ck(r,i=>{ru(e,i)}),ru(e,r),Ev(r,i=>{ru(e,i)}),n}function ru(e,t){const n=Ri(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(x(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(x(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Jn(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?vv(t,void 0):n.length=s+1,an(e.eventQueue_,Ys(t),i);for(let o=0;o<r.length;o++)Ni(r[o])}}/**
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
 */function Uk(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function Hk(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Je(`Invalid query segment '${n}' in query '${e}'`)}return t}const jp=function(e,t){const n=Vk(e),r=n.namespace;n.domain==="firebase.com"&&ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ox();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new M_(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Q(n.pathString)}},Vk=function(e){let t="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(l=e.substring(0,u-1),e=e.substring(u+2));let d=e.indexOf("/");d===-1&&(d=e.length);let c=e.indexOf("?");c===-1&&(c=e.length),t=e.substring(0,Math.min(d,c)),d<c&&(i=Uk(e.substring(d,c)));const f=Hk(e.substring(Math.min(e.length,c)));u=t.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(t.substring(u+1),10)):u=t.length;const h=t.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const y=t.indexOf(".");r=t.substring(0,y).toLowerCase(),n=t.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:t,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const zp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Gk=function(){let e=0;const t=[];return function(n){const r=n===e;e=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=zp.charAt(n%64),n=Math.floor(n/64);x(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=zp.charAt(t[i]);return x(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Lv{constructor(t,n,r,i){this.eventType=t,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const t=this.snapshot.ref;return this.eventType==="value"?t._path:t.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Se(this.snapshot.exportVal())}}class Fv{constructor(t,n,r){this.eventRegistration=t,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Qk{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return x(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class wf{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:H_(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const t=Sp(this._queryParams),n=Wd(t);return n==="{}"?"default":n}get _queryObject(){return Sp(this._queryParams)}isEqual(t){if(t=Wn(t),!(t instanceof wf))return!1;const n=this._repo===t._repo,r=Gd(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Ux(this._path)}}class dn extends wf{constructor(t,n){super(t,n,new qd,!1)}get parent(){const t=G_(this._path);return t===null?null:new dn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Fs{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new Q(t),r=Ei(this.ref,t);return new Fs(this._node.getChild(n),r,ae)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new Fs(i,Ei(this.ref,r),ae)))}hasChild(t){const n=new Q(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wo(e,t){return e=Wn(e),e._checkNotDeleted("ref"),t!==void 0?Ei(e._root,t):e._root}function Ei(e,t){return e=Wn(e),L(e._path)===null?Tk("child","path",t,!1):Iv("child","path",t,!1),new dn(e._repo,me(e._path,t))}function Kk(e,t){e=Wn(e),kv("push",e._path),xv("push",t,e._path,!0);const n=Rv(e._repo),r=Gk(n),i=Ei(e,r),s=Ei(e,r);let o;return t!=null?o=$v(s,t).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function $v(e,t){e=Wn(e),kv("set",e._path),xv("set",t,e._path,!1);const n=new ea;return Lk(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class Ef{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new Lv("value",this,new Fs(t.snapshotNode,new dn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Fv(this,t,n):null}matches(t){return t instanceof Ef?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Cf{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Fv(this,t,n):null}createEvent(t,n){x(t.childName!=null,"Child events should have a childName.");const r=Ei(new dn(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new Lv(t.type,this,new Fs(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof Cf?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Yk(e,t,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Bp(e._repo,e,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Qk(n,s||void 0),l=t==="value"?new Ef(o):new Cf(t,o);return $k(e._repo,e,l),()=>Bp(e._repo,e,l)}function Wp(e,t,n,r){return Yk(e,"value",t,n,r)}ZI(dn);sk(dn);/**
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
 */const qk="FIREBASE_DATABASE_EMULATOR_HOST",bc={};let Xk=!1;function Jk(e,t,n,r){e.repoInfo_=new M_(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function Zk(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=jp(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[qk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=jp(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new ti(ti.OWNER):new yx(e.name,e.options,t);Nk("Invalid Firebase Database URL",o),B(o.path)||ln("Database URL must point to the root of a Firebase Database (not including a child path).");const c=tT(l,e,d,new gx(e.name,n));return new nT(c,e)}function eT(e,t){const n=bc[t];(!n||n[e.key]!==e)&&ln(`Database ${t}(${e.repoInfo_}) has already been deleted.`),Bk(e),delete n[e.key]}function tT(e,t,n,r){let i=bc[t.name];i||(i={},bc[t.name]=i);let s=i[e.toURLString()];return s&&ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new Dk(e,Xk,n,r),i[e.toURLString()]=s,s}class nT{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Ok(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&ln("Cannot call "+t+" on a deleted database.")}}function rT(e=y_(),t){const n=Hs(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=RC("database");r&&iT(n,...r)}return n}function iT(e,t,n,r={}){e=Wn(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ln("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ti(ti.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:PC(r.mockUserToken,e.app.options.projectId);s=new ti(o)}Jk(i,t,n,s)}/**
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
 */function sT(e){tx(US),Ln(new on("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return Zk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ut(op,lp,e),Ut(op,lp,"esm2017")}en.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};en.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};sT();const oT=(e,t)=>t.some(n=>e instanceof n);let Up,Hp;function lT(){return Up||(Up=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aT(){return Hp||(Hp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bv=new WeakMap,Ac=new WeakMap,jv=new WeakMap,iu=new WeakMap,Sf=new WeakMap;function uT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Dn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Bv.set(n,e)}).catch(()=>{}),Sf.set(t,e),t}function cT(e){if(Ac.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ac.set(e,t)}let Dc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ac.get(e);if(t==="objectStoreNames")return e.objectStoreNames||jv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Dn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dT(e){Dc=e(Dc)}function fT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(su(this),t,...n);return jv.set(r,t.sort?t.sort():[t]),Dn(r)}:aT().includes(e)?function(...t){return e.apply(su(this),t),Dn(Bv.get(this))}:function(...t){return Dn(e.apply(su(this),t))}}function hT(e){return typeof e=="function"?fT(e):(e instanceof IDBTransaction&&cT(e),oT(e,lT())?new Proxy(e,Dc):e)}function Dn(e){if(e instanceof IDBRequest)return uT(e);if(iu.has(e))return iu.get(e);const t=hT(e);return t!==e&&(iu.set(e,t),Sf.set(t,e)),t}const su=e=>Sf.get(e);function pT(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=Dn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Dn(o.result),a.oldVersion,a.newVersion,Dn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const mT=["get","getKey","getAll","getAllKeys","count"],gT=["put","add","delete","clear"],ou=new Map;function Vp(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ou.get(t))return ou.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=gT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mT.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ou.set(t,s),s}dT(e=>({...e,get:(t,n,r)=>Vp(t,n)||e.get(t,n,r),has:(t,n)=>!!Vp(t,n)||e.has(t,n)}));const zv="@firebase/installations",xf="0.6.4";/**
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
 */const Wv=1e4,Uv=`w:${xf}`,Hv="FIS_v2",yT="https://firebaseinstallations.googleapis.com/v1",_T=60*60*1e3,vT="installations",wT="Installations";/**
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
 */const ET={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},vr=new ta(vT,wT,ET);function Vv(e){return e instanceof Ir&&e.code.includes("request-failed")}/**
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
 */function Gv({projectId:e}){return`${yT}/projects/${e}/installations`}function Qv(e){return{token:e.token,requestStatus:2,expiresIn:ST(e.expiresIn),creationTime:Date.now()}}async function Kv(e,t){const r=(await t.json()).error;return vr.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Yv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function CT(e,{refreshToken:t}){const n=Yv(e);return n.append("Authorization",xT(t)),n}async function qv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ST(e){return Number(e.replace("s","000"))}function xT(e){return`${Hv} ${e}`}/**
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
 */async function IT({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Gv(e),i=Yv(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Hv,appId:e.appId,sdkVersion:Uv},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await qv(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Qv(u.authToken)}}else throw await Kv("Create Installation",a)}/**
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
 */function Xv(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const TT=/^[cdef][\w-]{21}$/,Oc="";function NT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=RT(e);return TT.test(n)?n:Oc}catch{return Oc}}function RT(e){return kT(e).substr(0,22)}/**
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
 */function da(e){return`${e.appName}!${e.appId}`}/**
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
 */const Jv=new Map;function Zv(e,t){const n=da(e);e0(n,t),PT(n,t)}function e0(e,t){const n=Jv.get(e);if(n)for(const r of n)r(t)}function PT(e,t){const n=bT();n&&n.postMessage({key:e,fid:t}),AT()}let Zn=null;function bT(){return!Zn&&"BroadcastChannel"in self&&(Zn=new BroadcastChannel("[Firebase] FID Change"),Zn.onmessage=e=>{e0(e.data.key,e.data.fid)}),Zn}function AT(){Jv.size===0&&Zn&&(Zn.close(),Zn=null)}/**
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
 */const DT="firebase-installations-database",OT=1,wr="firebase-installations-store";let lu=null;function If(){return lu||(lu=pT(DT,OT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(wr)}}})),lu}async function Pl(e,t){const n=da(e),i=(await If()).transaction(wr,"readwrite"),s=i.objectStore(wr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Zv(e,t.fid),t}async function t0(e){const t=da(e),r=(await If()).transaction(wr,"readwrite");await r.objectStore(wr).delete(t),await r.done}async function fa(e,t){const n=da(e),i=(await If()).transaction(wr,"readwrite"),s=i.objectStore(wr),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Zv(e,l.fid),l}/**
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
 */async function kf(e){let t;const n=await fa(e.appConfig,r=>{const i=MT(r),s=LT(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Oc?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function MT(e){const t=e||{fid:NT(),registrationStatus:0};return n0(t)}function LT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vr.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=FT(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:$T(e)}:{installationEntry:t}}async function FT(e,t){try{const n=await IT(e,t);return Pl(e.appConfig,n)}catch(n){throw Vv(n)&&n.customData.serverCode===409?await t0(e.appConfig):await Pl(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function $T(e){let t=await Gp(e.appConfig);for(;t.registrationStatus===1;)await Xv(100),t=await Gp(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await kf(e);return r||n}return t}function Gp(e){return fa(e,t=>{if(!t)throw vr.create("installation-not-found");return n0(t)})}function n0(e){return BT(e)?{fid:e.fid,registrationStatus:0}:e}function BT(e){return e.registrationStatus===1&&e.registrationTime+Wv<Date.now()}/**
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
 */async function jT({appConfig:e,heartbeatServiceProvider:t},n){const r=zT(e,n),i=CT(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Uv,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await qv(()=>fetch(r,l));if(a.ok){const u=await a.json();return Qv(u)}else throw await Kv("Generate Auth Token",a)}function zT(e,{fid:t}){return`${Gv(e)}/${t}/authTokens:generate`}/**
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
 */async function Tf(e,t=!1){let n;const r=await fa(e.appConfig,s=>{if(!r0(s))throw vr.create("not-registered");const o=s.authToken;if(!t&&HT(o))return s;if(o.requestStatus===1)return n=WT(e,t),s;{if(!navigator.onLine)throw vr.create("app-offline");const l=GT(s);return n=UT(e,l),l}});return n?await n:r.authToken}async function WT(e,t){let n=await Qp(e.appConfig);for(;n.authToken.requestStatus===1;)await Xv(100),n=await Qp(e.appConfig);const r=n.authToken;return r.requestStatus===0?Tf(e,t):r}function Qp(e){return fa(e,t=>{if(!r0(t))throw vr.create("not-registered");const n=t.authToken;return QT(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function UT(e,t){try{const n=await jT(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Pl(e.appConfig,r),n}catch(n){if(Vv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await t0(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Pl(e.appConfig,r)}throw n}}function r0(e){return e!==void 0&&e.registrationStatus===2}function HT(e){return e.requestStatus===2&&!VT(e)}function VT(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+_T}function GT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function QT(e){return e.requestStatus===1&&e.requestTime+Wv<Date.now()}/**
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
 */async function KT(e){const t=e,{installationEntry:n,registrationPromise:r}=await kf(t);return r?r.catch(console.error):Tf(t).catch(console.error),n.fid}/**
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
 */async function YT(e,t=!1){const n=e;return await qT(n),(await Tf(n,t)).token}async function qT(e){const{registrationPromise:t}=await kf(e);t&&await t}/**
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
 */function XT(e){if(!e||!e.options)throw au("App Configuration");if(!e.name)throw au("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw au(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function au(e){return vr.create("missing-app-config-values",{valueName:e})}/**
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
 */const i0="installations",JT="installations-internal",ZT=e=>{const t=e.getProvider("app").getImmediate(),n=XT(t),r=Hs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},eN=e=>{const t=e.getProvider("app").getImmediate(),n=Hs(t,i0).getImmediate();return{getId:()=>KT(n),getToken:i=>YT(n,i)}};function tN(){Ln(new on(i0,ZT,"PUBLIC")),Ln(new on(JT,eN,"PRIVATE"))}tN();Ut(zv,xf);Ut(zv,xf,"esm2017");/**
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
 */const bl="analytics",nN="firebase_id",rN="origin",iN=60*1e3,sN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Nf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ze=new jd("@firebase/analytics");/**
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
 */const oN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ot=new ta("analytics","Analytics",oN);/**
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
 */function lN(e){if(!e.startsWith(Nf)){const t=ot.create("invalid-gtag-resource",{gtagURL:e});return Ze.warn(t.message),""}return e}function s0(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function aN(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function uN(e,t){const n=aN("firebase-js-sdk-policy",{createScriptURL:lN}),r=document.createElement("script"),i=`${Nf}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function cN(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function dN(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const a=(await s0(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){Ze.error(l)}e("config",i,s)}async function fN(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await s0(n);for(const a of o){const u=l.find(c=>c.measurementId===a),d=u&&t[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ze.error(s)}}function hN(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await fN(e,t,n,l,a)}else if(s==="config"){const[l,a]=o;await dN(e,t,n,r,l,a)}else if(s==="consent"){const[l]=o;e("consent","update",l)}else if(s==="get"){const[l,a,u]=o;e("get",l,a,u)}else if(s==="set"){const[l]=o;e("set",l)}else e(s,...o)}catch(l){Ze.error(l)}}return i}function pN(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=hN(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function mN(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Nf)&&n.src.includes(e))return n;return null}/**
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
 */const gN=30,yN=1e3;class _N{constructor(t={},n=yN){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const o0=new _N;function vN(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function wN(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:vN(r)},s=sN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function EN(e,t=o0,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ot.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ot.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new xN;return setTimeout(async()=>{l.abort()},n!==void 0?n:iN),l0({appId:r,apiKey:i,measurementId:s},o,l,t)}async function l0(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=o0){var s;const{appId:o,measurementId:l}=e;try{await CN(r,t)}catch(a){if(l)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await wN(e);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!SN(u)){if(i.deleteThrottleMetadata(o),l)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Jh(n,i.intervalMillis,gN):Jh(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,c),Ze.debug(`Calling attemptFetch again in ${d} millis`),l0(e,c,r,i)}}function CN(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(ot.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function SN(e){if(!(e instanceof Ir)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class xN{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function IN(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function kN(){if(d_())try{await f_()}catch(e){return Ze.warn(ot.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ze.warn(ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function TN(e,t,n,r,i,s,o){var l;const a=EN(e);a.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Ze.error(h)),t.push(a);const u=kN().then(h=>{if(h)return r.getId()}),[d,c]=await Promise.all([a,u]);mN(s)||uN(s,d.measurementId),i("js",new Date);const f=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return f[rN]="firebase",f.update=!0,c!=null&&(f[nN]=c),i("config",d.measurementId,f),d.measurementId}/**
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
 */class NN{constructor(t){this.app=t}_delete(){return delete cs[this.app.options.appId],Promise.resolve()}}let cs={},Kp=[];const Yp={};let uu="dataLayer",RN="gtag",qp,a0,Xp=!1;function PN(){const e=[];if(AC()&&e.push("This is a browser extension environment."),OC()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ot.create("invalid-analytics-context",{errorInfo:t});Ze.warn(n.message)}}function bN(e,t,n){PN();const r=e.options.appId;if(!r)throw ot.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ot.create("no-api-key");if(cs[r]!=null)throw ot.create("already-exists",{id:r});if(!Xp){cN(uu);const{wrappedGtag:s,gtagCore:o}=pN(cs,Kp,Yp,uu,RN);a0=s,qp=o,Xp=!0}return cs[r]=TN(e,Kp,Yp,t,qp,uu,n),new NN(e)}function AN(e=y_()){e=Wn(e);const t=Hs(e,bl);return t.isInitialized()?t.getImmediate():DN(e)}function DN(e,t={}){const n=Hs(e,bl);if(n.isInitialized()){const i=n.getImmediate();if(gl(t,n.getOptions()))return i;throw ot.create("already-initialized")}return n.initialize({options:t})}function u0(e,t,n,r){e=Wn(e),IN(a0,cs[e.app.options.appId],t,n,r).catch(i=>Ze.error(i))}const Jp="@firebase/analytics",Zp="0.10.0";function ON(){Ln(new on(bl,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return bN(r,i,n)},"PUBLIC")),Ln(new on("analytics-internal",e,"PRIVATE")),Ut(Jp,Zp),Ut(Jp,Zp,"esm2017");function e(t){try{const n=t.getProvider(bl).getImmediate();return{logEvent:(r,i,s)=>u0(n,r,i,s)}}catch(n){throw ot.create("interop-component-reg-failed",{reason:n})}}}ON();const MN={apiKey:"AIzaSyAyVHSuOfOsTyOQe7JZWwC0J3By7Uz1S70",authDomain:"baabel-birthday-2023.firebaseapp.com",projectId:"baabel-birthday-2023",storageBucket:"baabel-birthday-2023.appspot.com",messagingSenderId:"276770751344",appId:"1:276770751344:web:05539c51907c974b5545b5",measurementId:"G-K0FS6V03KG",databaseURL:"https://baabel-birthday-2023-default-rtdb.asia-southeast1.firebasedatabase.app"},c0=g_(MN),Eo=rT(c0),LN=AN(c0);u0(LN,"page_view");const d0=ce.createContext({}),FN=({children:e})=>{const[t,n]=ce.useState({}),[r,i]=ce.useState([]),s=l=>{var a;$v(wo(Eo,`stats/${l}`),{amount:(((a=t[l])==null?void 0:a.amount)??0)+1})},o=({gift:l,senderName:a,wish:u})=>{Kk(wo(Eo,"wishes"),{gift:l,senderName:a,wish:u,timestamp:Date.now()}),s(l)};return ce.useEffect(()=>{Wp(wo(Eo,"stats"),l=>{const a=l.val();n(a??{})})},[]),ce.useEffect(()=>{Wp(wo(Eo,"wishes"),l=>{const a=l.val(),u=a?Object.entries(a).map(([d,c])=>({id:d,...c})).sort((d,c)=>c.timestamp-d.timestamp):[];i(u)})},[]),I.jsx(d0.Provider,{value:{stats:t,wishes:r,createWish:o},children:e})},f0=()=>ce.useContext(d0),$={salad:{baabaeImg:"./assets/images/baabae_salad.png",giftImg:"./assets/images/salad.png",title:"ผักสลัด",description:`ผักสลัดหน้าโบสถ์ที่ปลูกและปรุงรสโดยนายน้อย
แบ๊ะที่กินผักคือแบ๊ะที่สามารถโตเป็นต้นไม้และปกป้องบาเบลได้`,colors:{text:"#487D45",border:"#6BBA69",buttonLeft:"#6BBA69",buttonRight:"#B5E3AD",mainBackground:"#D8ECC8",tagBackground:"#E7F1D4",selectBackground:"#F9FFEE"}},bomb:{baabaeImg:"./assets/images/baabae_bomb.png",giftImg:"./assets/images/bomb.png",title:"ระเบิด",selectedTitle:"ระเบิดบาเบล Beam!",description:`บาเบลผู้ระเบิดทุกอย่างบนโลกใบนี้ แต่ระเบิดที่มีพลังทำลายล้าง
มากที่สุดคือระเบิดความน่ารักของตัวเอง บาเบลบีม!!!`,colors:{text:"#DD6F63",border:"#EE8B81",buttonLeft:"#EE8B81",buttonRight:"#FDC8C3",mainBackground:"#FFE1DE",tagBackground:"#FFE4E1",selectBackground:"#FFEFED"}},microphone:{baabaeImg:"./assets/images/baabae_microphone.png",giftImg:"./assets/images/microphone.png",title:"ไมโครโฟน",description:`ไมโครโฟนขยายเสียงไพเราะแบบหูเคลือบทอง
อยากให้บาเบลมั่นใจในเสียงตัวเอง เพราะเสียงบาเบลมีเสน่ห์มาก`,colors:{text:"#4279D1",border:"#5D8ACF",buttonLeft:"#5D8ACF",buttonRight:"#B7D0F9",mainBackground:"#DFEBFE",tagBackground:"#E3EEFF",selectBackground:"#EDF5FF"}},dacapo:{baabaeImg:"./assets/images/baabae_dacapo.png",giftImg:"./assets/images/dacapo.png",title:"น้องเจี๊ยบ",description:`ให้น้องเจี๊ยบเป็นของขวัญ ดากะโปะจะสามารถเป็นได้ทั้งเพื่อน
น้องชาย และคู่หูหยุมหัวให้บาเบลได้ ไม่เหงาแน่นอน`,colors:{text:"#E8A115",border:"#E9B738",buttonLeft:"#E9B738",buttonRight:"#FFE5A3",mainBackground:"#FEEBBB",tagBackground:"#FFF1CD",selectBackground:"#FFF8E1"}},schneider:{baabaeImg:"./assets/images/baabae_schneider.png",giftImg:"./assets/images/schneider.png",title:"พี่ชไน",description:`ให้ชไนเดอร์เป็นของขวัญ พี่ชไนจะสามารถเป็น Comfort zone
และเครื่องอวยความน่ารักให้บาเบลได้ทั้งวัน`,colors:{text:"#976BCC",border:"#A783D2",buttonLeft:"#A783D2",buttonRight:"#CEAFF2",mainBackground:"#EDE0FD",tagBackground:"#F4EBFF",selectBackground:"#F6EEFF"}},cute_potion:{baabaeImg:"./assets/images/baabae_cute_potion.png",giftImg:"./assets/images/cute_potion.png",title:"โพชั่น",selectedTitle:"โพชั่นความน่ารัก",description:`ส่งโพชั่นความน่ารักให้บาเบล ถึงแม้ว่าจะน่ารักมากอยู่แล้วก็ตาม
สิ่งนี้จะเพิ่มความน่ารักกะไม่ให้ใครได้ลืมตาอ้าปากไปเลย`,colors:{text:"#F56C9D",border:"#E882A6",buttonLeft:"#E882A6",buttonRight:"#FFCBDD",mainBackground:"#FFE1EC",tagBackground:"#FFE9F1",selectBackground:"#FFF1F6"}},boiled_egg_suki:{baabaeImg:"./assets/images/baabae_boiled_egg_suki.png",giftImg:"./assets/images/boiled_egg_suki.png",title:"สุกี้ไข่ต้ม",description:`สุกี้ไข่ต้มตัวนี้สามารถช่วยบาเบลเฝ้าโบสถ์ได้ น้องไม่ดุ
น่ารักใจดี และช่วยอยู่เป็นเพื่อนบาแบ๊ะในวันที่นายน้อยไม่ว่างได้`,colors:{text:"#E9882F",border:"#ED9E57",buttonLeft:"#ED9E57",buttonRight:"#FECB9D",mainBackground:"#FFE7D1",tagBackground:"#FFE7D1",selectBackground:"#FFEEDF"}},baabae_pillow:{baabaeImg:"./assets/images/baabae_baabae_pillow.png",giftImg:"./assets/images/baabae_pillow.png",title:"หมอนแบ๊ะ",description:`นายน้อยที่ชอบนอน หมอนบาเบ๊ะจะทำให้บาเบลหลับสบายทั้งวัน
ไม่ว่าจะนอนเช้า กลางวัน เย็น หรือตลอดทั้งวัน~`,colors:{text:"#4BA9AF",border:"#53BCC2",buttonLeft:"#53BCC2",buttonRight:"#A8E1E4",mainBackground:"#DBF6F8",tagBackground:"#E1F6F8",selectBackground:"#ECF8F9"}},sunflower:{baabaeImg:"./assets/images/baabae_sunflower.png",giftImg:"./assets/images/sunflower.png",title:"ทานตะวัน",selectedTitle:"ดอกทานตะวัน",description:`มาปลูกดอกทานตะวันที่บาเบลชอบให้เต็มโบสถ์กัน~
อยากให้นายน้อยสดใสเหมือนดอกทานตะวันรับแสงอาทิตย์เลย`,colors:{text:"#E79D0E",border:"#EEB13B",buttonLeft:"#EEB13B",buttonRight:"#FFE2A9",mainBackground:"#FEECC8",tagBackground:"#FFF0D1",selectBackground:"#FFF6E4"}}},$N=30,em=500,BN=Sr`
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
`,sR=()=>{const e=Us(),t=fl(e.breakpoints.down("md")),n=fl(e.breakpoints.down("sm"));return I.jsx(HN,{children:I.jsxs("div",{children:[I.jsxs(VN,{children:[I.jsx(GN,{src:n?"./assets/images/header_hbd_text_sm.png":"./assets/images/header_hbd_text.png"}),I.jsx(QN,{src:"./assets/images/header_baabel_text.png"})]}),I.jsxs(KN,{children:[I.jsx(rR,{src:"./assets/images/header_baabae_8.png"}),I.jsx(YN,{src:t?"./assets/images/header_baabel_md.png":"./assets/images/header_baabel.png"}),I.jsx(JN,{src:"./assets/images/header_baabae_3.png"}),I.jsx(tR,{src:"./assets/images/header_baabae_6.png"}),I.jsx(ZN,{src:"./assets/images/header_baabae_4.png"}),I.jsx(nR,{src:"./assets/images/header_baabae_7.png"}),I.jsx(eR,{src:"./assets/images/header_baabae_5.png"}),I.jsx(iR,{src:"./assets/images/header_baabae_10.png"}),I.jsx(qN,{src:"./assets/images/header_baabae_1.png"}),I.jsx(XN,{src:"./assets/images/header_baabae_2.png"})]})]})})},oR=P.div`
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
`;var ha={},pa={};Object.defineProperty(pa,"__esModule",{value:!0});pa.defaultOptions=void 0;pa.defaultOptions={lowercase:!1,precision:1,space:!1,units:["","K","M","B","T","P","E"]};var jt={};Object.defineProperty(jt,"__esModule",{value:!0});jt.getLocales=jt.getFractionDigits=jt.roundTo=jt.parseValue=void 0;function uR(e){const t=parseFloat(e==null?void 0:e.toString());if(isNaN(t))throw new Error("Input value is not a number");if(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)throw new RangeError("Input value is outside of safe integer range");return t}jt.parseValue=uR;function cR(e,t){if(!Number.isFinite(e))throw new Error("Input value is not a finite number");if(!Number.isInteger(t)||t<0)throw new Error("Precision is not a positive integer");return Number.isInteger(e)?e:parseFloat(e.toFixed(t))}jt.roundTo=cR;function dR(e){var t;if(Number.isInteger(e))return 0;const n=e.toString().split(".")[1];return(t=n==null?void 0:n.length)!==null&&t!==void 0?t:0}jt.getFractionDigits=dR;function fR(){var e;return typeof navigator>"u"?[]:Array.from((e=navigator.languages)!==null&&e!==void 0?e:[])}jt.getLocales=fR;Object.defineProperty(ha,"__esModule",{value:!0});ha.millify=void 0;const tm=pa,Co=jt,nm=1e3;function*rm(e){let t=nm;for(;;){const n=e/t;if(n<1)return;yield n,t*=nm}}function h0(e,t){var n,r;const i=t?{...tm.defaultOptions,...t}:tm.defaultOptions;if(!Array.isArray(i.units)||!i.units.length)throw new Error("Option `units` must be a non-empty array");let s;try{s=Co.parseValue(e)}catch(y){return y instanceof Error&&console.warn(`WARN: ${y.message} (millify)`),String(e)}const o=s<0?"-":"";s=Math.abs(s);let l=0;for(const y of rm(s))s=y,l+=1;if(l>=i.units.length)return e.toString();let u=Co.roundTo(s,i.precision);for(const y of rm(u))u=y,l+=1;const d=(n=i.units[l])!==null&&n!==void 0?n:"",c=i.lowercase?d.toLowerCase():d,f=i.space?" ":"",h=u.toLocaleString((r=i.locales)!==null&&r!==void 0?r:Co.getLocales(),{minimumFractionDigits:Co.getFractionDigits(u)});return`${o}${h}${f}${c}`}ha.millify=h0;var hR=ha.default=h0;const pR=({gift:e,amount:t})=>I.jsxs(oR,{color:$[e].colors.tagBackground,children:[I.jsx(lR,{src:$[e].giftImg,alt:e}),I.jsxs(aR,{children:["x ",hR(t,{precision:2})]})]}),mR=P.div`
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
`,SR=({id:e,gift:t,senderName:n,wish:r,timestamp:i})=>{const s=new Date(i);return I.jsxs(mR,{id:e,children:[I.jsxs(gR,{children:[I.jsxs(yR,{children:[I.jsx(_R,{src:$[t].baabaeImg,alt:t}),I.jsx(vR,{color:$[t].colors.text,children:n})]}),I.jsx(wR,{src:$[t].giftImg,alt:t})]}),I.jsx(ER,{children:r}),I.jsxs(CR,{children:[I.jsx("div",{children:s.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"})}),I.jsxs("div",{children:[s.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})," ","น."]})]})]})};var p0={exports:{}};/*! For license information please see index.js.LICENSE.txt */(function(e,t){(function(n,r){e.exports=r(ce)})(_0,n=>(()=>{var r={202:(l,a,u)=>{u.d(a,{Z:()=>y});var d=u(864),c=u.n(d),f=u(352),h=u.n(f)()(c());h.push([l.id,`.index-module__layout___ZT1i5 {
  display: grid;
}
`,"",{version:3,sources:["webpack://./src/index.module.css"],names:[],mappings:"AAAA;EACE,aAAa;AACf",sourcesContent:[`.layout {
  display: grid;
}
`],sourceRoot:""}]),h.locals={layout:"index-module__layout___ZT1i5"};const y=h},352:l=>{l.exports=function(a){var u=[];return u.toString=function(){return this.map(function(d){var c="",f=d[5]!==void 0;return d[4]&&(c+="@supports (".concat(d[4],") {")),d[2]&&(c+="@media ".concat(d[2]," {")),f&&(c+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),c+=a(d),f&&(c+="}"),d[2]&&(c+="}"),d[4]&&(c+="}"),c}).join("")},u.i=function(d,c,f,h,y){typeof d=="string"&&(d=[[null,d,void 0]]);var _={};if(f)for(var k=0;k<this.length;k++){var m=this[k][0];m!=null&&(_[m]=!0)}for(var p=0;p<d.length;p++){var g=[].concat(d[p]);f&&_[g[0]]||(y!==void 0&&(g[5]===void 0||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=y),c&&(g[2]&&(g[1]="@media ".concat(g[2]," {").concat(g[1],"}")),g[2]=c),h&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=h):g[4]="".concat(h)),u.push(g))}},u}},864:l=>{l.exports=function(a){var u=a[1],d=a[3];if(!d)return u;if(typeof btoa=="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),f="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),h="/*# ".concat(f," */"),y=d.sources.map(function(_){return"/*# sourceURL=".concat(d.sourceRoot||"").concat(_," */")});return[u].concat(y).concat([h]).join(`
`)}return[u].join(`
`)}},813:l=>{var a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;l.exports=function(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var f={},h=0;h<10;h++)f["_"+String.fromCharCode(h)]=h;if(Object.getOwnPropertyNames(f).map(function(_){return f[_]}).join("")!=="0123456789")return!1;var y={};return"abcdefghijklmnopqrst".split("").forEach(function(_){y[_]=_}),Object.keys(Object.assign({},y)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}()?Object.assign:function(c,f){for(var h,y,_=function(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}(c),k=1;k<arguments.length;k++){for(var m in h=Object(arguments[k]))u.call(h,m)&&(_[m]=h[m]);if(a){y=a(h);for(var p=0;p<y.length;p++)d.call(h,y[p])&&(_[y[p]]=h[y[p]])}}return _}},455:(l,a,u)=>{u(813);var d=u(359),c=60103;if(typeof Symbol=="function"&&Symbol.for){var f=Symbol.for;c=f("react.element"),f("react.fragment")}var h=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};a.jsx=function(k,m,p){var g,v={},E=null,S=null;for(g in p!==void 0&&(E=""+p),m.key!==void 0&&(E=""+m.key),m.ref!==void 0&&(S=m.ref),m)y.call(m,g)&&!_.hasOwnProperty(g)&&(v[g]=m[g]);if(k&&k.defaultProps)for(g in m=k.defaultProps)v[g]===void 0&&(v[g]=m[g]);return{$$typeof:c,type:k,key:E,ref:S,props:v,_owner:h.current}}},557:(l,a,u)=>{l.exports=u(455)},701:l=>{var a=[];function u(f){for(var h=-1,y=0;y<a.length;y++)if(a[y].identifier===f){h=y;break}return h}function d(f,h){for(var y={},_=[],k=0;k<f.length;k++){var m=f[k],p=h.base?m[0]+h.base:m[0],g=y[p]||0,v="".concat(p," ").concat(g);y[p]=g+1;var E=u(v),S={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(E!==-1)a[E].references++,a[E].updater(S);else{var w=c(S,h);h.byIndex=k,a.splice(k,0,{identifier:v,updater:w,references:1})}_.push(v)}return _}function c(f,h){var y=h.domAPI(h);return y.update(f),function(_){if(_){if(_.css===f.css&&_.media===f.media&&_.sourceMap===f.sourceMap&&_.supports===f.supports&&_.layer===f.layer)return;y.update(f=_)}else y.remove()}}l.exports=function(f,h){var y=d(f=f||[],h=h||{});return function(_){_=_||[];for(var k=0;k<y.length;k++){var m=u(y[k]);a[m].references--}for(var p=d(_,h),g=0;g<y.length;g++){var v=u(y[g]);a[v].references===0&&(a[v].updater(),a.splice(v,1))}y=p}}},80:l=>{var a={};l.exports=function(u,d){var c=function(f){if(a[f]===void 0){var h=document.querySelector(f);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}a[f]=h}return a[f]}(u);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(d)}},182:l=>{l.exports=function(a){var u=document.createElement("style");return a.setAttributes(u,a.attributes),a.insert(u,a.options),u}},850:(l,a,u)=>{l.exports=function(d){var c=u.nc;c&&d.setAttribute("nonce",c)}},236:l=>{l.exports=function(a){var u=a.insertStyleElement(a);return{update:function(d){(function(c,f,h){var y="";h.supports&&(y+="@supports (".concat(h.supports,") {")),h.media&&(y+="@media ".concat(h.media," {"));var _=h.layer!==void 0;_&&(y+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),y+=h.css,_&&(y+="}"),h.media&&(y+="}"),h.supports&&(y+="}");var k=h.sourceMap;k&&typeof btoa<"u"&&(y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(k))))," */")),f.styleTagTransform(y,c,f.options)})(u,a,d)},remove:function(){(function(d){if(d.parentNode===null)return!1;d.parentNode.removeChild(d)})(u)}}}},213:l=>{l.exports=function(a,u){if(u.styleSheet)u.styleSheet.cssText=a;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(a))}}},359:l=>{l.exports=n}},i={};function s(l){var a=i[l];if(a!==void 0)return a.exports;var u=i[l]={id:l,exports:{}};return r[l](u,u.exports,s),u.exports}s.n=l=>{var a=l&&l.__esModule?()=>l.default:()=>l;return s.d(a,{a}),a},s.d=(l,a)=>{for(var u in a)s.o(a,u)&&!s.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:a[u]})},s.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),s.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},s.nc=void 0;var o={};return(()=>{s.r(o),s.d(o,{default:()=>Ht});var l=s(557),a=s(359),u=s.n(a),d=function(){return d=Object.assign||function(re){for(var _e,Ue=1,Et=arguments.length;Ue<Et;Ue++)for(var Pe in _e=arguments[Ue])Object.prototype.hasOwnProperty.call(_e,Pe)&&(re[Pe]=_e[Pe]);return re},d.apply(this,arguments)};const c=function(re){var _e=re.gridSpan||0;return(0,l.jsx)("div",d({className:re.className,style:{gridRowEnd:"span "+_e,visibility:_e?"initial":"hidden"}},{children:re.children}),void 0)};var f=s(701),h=s.n(f),y=s(236),_=s.n(y),k=s(80),m=s.n(k),p=s(850),g=s.n(p),v=s(182),E=s.n(v),S=s(213),w=s.n(S),N=s(202),z={};z.styleTagTransform=w(),z.setAttributes=g(),z.insert=m().bind(null,"head"),z.domAPI=_(),z.insertStyleElement=E(),h()(N.Z,z);const O=N.Z&&N.Z.locals?N.Z.locals:void 0;var ye=function(){return ye=Object.assign||function(re){for(var _e,Ue=1,Et=arguments.length;Ue<Et;Ue++)for(var Pe in _e=arguments[Ue])Object.prototype.hasOwnProperty.call(_e,Pe)&&(re[Pe]=_e[Pe]);return re},ye.apply(this,arguments)};const Ht=function(re){var _e=re.items,Ue=_e===void 0?[]:_e,Et=re.className,Pe=re.gap,T=Pe===void 0?10:Pe,D=re.colCount,b=D===void 0?3:D,V=re.minWidth,K=V===void 0?300:V,be=(0,a.useState)([]),ct=be[0],Vt=be[1],$e=(0,a.useState)(!1),tt=$e[0],Tr=$e[1],dt=(0,a.useRef)(null);(0,a.useLayoutEffect)(function(){Tr(!1);var de=Pi();de.length?Nr(de):ht()},[Ue]),(0,a.useLayoutEffect)(function(){var de,Ae,Ot=(de=function(){ht()},function(){for(var nt=[],Rr=0;Rr<arguments.length;Rr++)nt[Rr]=arguments[Rr];Ae||(Ae=setTimeout(function(){de.apply(void 0,nt),Ae=null},300))});return window.addEventListener("resize",Ot),function(){window.removeEventListener("resize",Ot)}},[]),(0,a.useEffect)(function(){tt&&ht()},[tt]);var ft,Pi=function(){var de=[];return dt.current!==null&&Array.from(dt.current.children).forEach(function(Ae){var Ot=Ae.getElementsByTagName("img");Ot!=null&&Ot.length&&de.push.apply(de,Array.from(Ot).filter(function(nt){return!nt.onload}).map(function(nt){return{img:nt,loaded:!1}}))}),de},Nr=function(de){de.forEach(function(Ae){Ae.img.onload||(Ae.img.onload=Ae.img.onerror=function(){Ae.loaded=!0,de.some(function(Ot){return Ot.loaded===!1})||Tr(!0)})})},ht=function(){if(dt.current!==null){var de=dt.current,Ae=[];Array.from(de.children).forEach(function(Ot){var nt=Ot.firstElementChild;nt&&(nt.style.height="auto");var Rr=(nt==null?void 0:nt.getBoundingClientRect().height)||0,Rf=Math.ceil((Rr+T)/T);Ae.push(Rf);var y0=Rf*T;nt&&(nt.style.height=y0-T+"px")}),Vt(Ae)}};return(0,l.jsx)("div",ye({className:(ft=[O.layout,Et],ft.filter(function(de){return de}).join(" ")),ref:dt,style:{gridTemplateColumns:"repeat("+(b||3)+", minmax("+(K||300)+"px,1fr))",gridGap:T+"px"}},{children:Ue.map(function(de,Ae){return u().isValidElement(de)?(0,l.jsx)(c,ye({gridSpan:ct[Ae]},{children:de}),de.key||Ae):null})}),void 0)}})(),o})())})(p0);var xR=p0.exports,IR=xR;const kR=sm(IR),TR=P.div`
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
`,LR=({setPage:e})=>{const t=Us(),n=fl(t.breakpoints.down("sm")),r=fl(t.breakpoints.between("sm","lg")),{stats:i,wishes:s}=f0(),[o]=vC();return I.jsxs(bR,{children:[I.jsx(sR,{}),I.jsx(AR,{ref:o,children:Object.keys($).sort((l,a)=>{var u,d;return(((u=i[a])==null?void 0:u.amount)??0)-(((d=i[l])==null?void 0:d.amount)??0)}).map(l=>{var a;return I.jsx(pR,{gift:l,amount:((a=i[l])==null?void 0:a.amount)??0},`${l}-stat`)})}),I.jsx(DR,{minWidth:80,colCount:n?1:r?2:3,items:s.map(l=>I.jsx(SR,{...l},l.id))}),I.jsx(OR,{children:I.jsx(MR,{icon:"plus",onClick:()=>e("giftPage"),children:"เขียนคำอวยพร"})})]})},FR=Sr`
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
`,im=P.img`
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
`,m0=P.img`
  width: 20px;
  position: absolute;
  bottom: -6px;
`,XR=P(m0)`
  left: -6px;
`,JR=P(m0)`
  right: -6px;
`,ZR=({selectedGift:e,setSelectedGift:t,setPage:n})=>I.jsx($R,{color:$[e].colors.mainBackground,children:I.jsxs("div",{children:[I.jsx(BR,{color:$[e].colors.text,children:"เลือกของขวัญให้บาเบลกัน"}),I.jsx(jR,{src:$[e].giftImg,alt:e}),I.jsxs(zR,{children:[I.jsx(im,{src:$[e].giftImg,alt:e}),I.jsx(WR,{color:$[e].colors.text,children:$[e].selectedTitle??$[e].title}),I.jsx(im,{src:$[e].giftImg,alt:e})]}),I.jsx(UR,{children:$[e].description}),I.jsx(HR,{children:Object.keys($).map(r=>{const i=r===e;return I.jsxs(VR,{selected:i,selectedBorderColor:$[r].colors.border,selectedBackgroundColor:$[r].colors.selectBackground,onClick:()=>t(r),children:[I.jsx(YR,{src:$[r].giftImg,alt:r}),I.jsx(qR,{children:$[r].title}),i?I.jsxs(I.Fragment,{children:[I.jsx(XR,{src:"./assets/images/lamb_lefthand.png",alt:"lamb left hand"}),I.jsx(JR,{src:"./assets/images/lamb_righthand.png",alt:"lamb right hand"})]}):null]},r)})}),I.jsxs(GR,{children:[I.jsx(QR,{color:$[e].colors.buttonLeft,hoverColor:$[e].colors.selectBackground,onClick:()=>n("landingPage"),children:"กลับหน้าหลัก"}),I.jsx(KR,{color:[$[e].colors.buttonLeft,$[e].colors.buttonRight],onClick:()=>n("wishPage"),children:"เลือกชิ้นนี้แหละ!"})]})]})}),eP=Sr`
  0%   { transform: rotate(-2deg); }
  50%  { transform: rotate(2deg); }
  100% { transform: rotate(-2deg); }
`,g0=e=>Jl`
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
  ${e=>g0(e)}
  height: 55px;
  margin-bottom: 16px;
`,oP=P.textarea`
  ${e=>g0(e)}
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
`,dP=({selectedGift:e,setPage:t})=>{const{createWish:n}=f0(),[r,i]=ce.useState(""),[s,o]=ce.useState(""),l=()=>{r&&s&&(n({gift:e,senderName:r,wish:s}),t("landingPage"))};return I.jsx(tP,{color:$[e].colors.mainBackground,children:I.jsxs("div",{children:[I.jsx(nP,{color:$[e].colors.text,children:"เขียนคำอวยพรให้บาเบล"}),I.jsx(rP,{src:$[e].baabaeImg,alt:"Baabae hold "+e}),I.jsxs(iP,{children:[I.jsx(sP,{maxLength:$N,type:"text",placeholder:"ชื่ออะไรฮะ...",color:$[e].colors.border,shadowColor:$[e].colors.mainBackground,value:r,onChange:a=>i(a.target.value)}),I.jsx(oP,{maxLength:em,rows:7,placeholder:"เขียนอวยพรตรงนี้เลย...",color:$[e].colors.border,shadowColor:$[e].colors.mainBackground,onChange:a=>o(a.target.value),children:s}),I.jsxs(lP,{color:$[e].colors.border,children:["คำอวยพร ",s.length,"/",em," ตัวอักษร"]}),I.jsxs(aP,{children:[I.jsx(uP,{color:$[e].colors.buttonLeft,hoverColor:$[e].colors.selectBackground,onClick:()=>t("giftPage"),children:"ย้อนกลับ"}),I.jsx(cP,{color:[$[e].colors.buttonLeft,$[e].colors.buttonRight],disabled:!r||!s,disabledColor:$[e].colors.mainBackground,onClick:l,children:"ส่งคำอวยพร"})]})]})]})})},fP=XE(),hP=()=>{const[e,t]=ce.useState("landingPage"),[n,r]=ce.useState("salad");return I.jsxs(WE,{theme:fP,children:[I.jsx(JE,{}),I.jsx(FN,{children:e==="landingPage"?I.jsx(LR,{setPage:t}):e==="giftPage"?I.jsx(ZR,{selectedGift:n,setSelectedGift:r,setPage:t}):e==="wishPage"?I.jsx(dP,{selectedGift:n,setPage:t}):null})]})};cu.createRoot(document.getElementById("root")).render(I.jsx(Bt.StrictMode,{children:I.jsx(hP,{})}));
