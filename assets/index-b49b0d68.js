(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var y0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var im={exports:{}},Nl={},sm={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=Symbol.for("react.element"),_0=Symbol.for("react.portal"),v0=Symbol.for("react.fragment"),w0=Symbol.for("react.strict_mode"),E0=Symbol.for("react.profiler"),C0=Symbol.for("react.provider"),S0=Symbol.for("react.context"),I0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),k0=Symbol.for("react.memo"),T0=Symbol.for("react.lazy"),Tf=Symbol.iterator;function N0(e){return e===null||typeof e!="object"?null:(e=Tf&&e[Tf]||e["@@iterator"],typeof e=="function"?e:null)}var om={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lm=Object.assign,am={};function wi(e,t,n){this.props=e,this.context=t,this.refs=am,this.updater=n||om}wi.prototype.isReactComponent={};wi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};wi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function um(){}um.prototype=wi.prototype;function bc(e,t,n){this.props=e,this.context=t,this.refs=am,this.updater=n||om}var Dc=bc.prototype=new um;Dc.constructor=bc;lm(Dc,wi.prototype);Dc.isPureReactComponent=!0;var Nf=Array.isArray,cm=Object.prototype.hasOwnProperty,Oc={current:null},dm={key:!0,ref:!0,__self:!0,__source:!0};function fm(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)cm.call(t,r)&&!dm.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ls,type:e,key:s,ref:o,props:i,_owner:Oc.current}}function R0(e,t){return{$$typeof:Ls,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Mc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ls}function P0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rf=/\/+/g;function fa(e,t){return typeof e=="object"&&e!==null&&e.key!=null?P0(""+e.key):t.toString(36)}function wo(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Ls:case _0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+fa(o,0):r,Nf(i)?(n="",e!=null&&(n=e.replace(Rf,"$&/")+"/"),wo(i,t,n,"",function(u){return u})):i!=null&&(Mc(i)&&(i=R0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Rf,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",Nf(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+fa(s,l);o+=wo(s,t,n,a,i)}else if(a=N0(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+fa(s,l++),o+=wo(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function Ks(e,t,n){if(e==null)return e;var r=[],i=0;return wo(e,r,"","",function(s){return t.call(n,s,i++)}),r}function A0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ze={current:null},Eo={transition:null},b0={ReactCurrentDispatcher:ze,ReactCurrentBatchConfig:Eo,ReactCurrentOwner:Oc};j.Children={map:Ks,forEach:function(e,t,n){Ks(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ks(e,function(){t++}),t},toArray:function(e){return Ks(e,function(t){return t})||[]},only:function(e){if(!Mc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};j.Component=wi;j.Fragment=v0;j.Profiler=E0;j.PureComponent=bc;j.StrictMode=w0;j.Suspense=x0;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;j.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=lm({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=Oc.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)cm.call(t,a)&&!dm.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ls,type:e.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(e){return e={$$typeof:S0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:C0,_context:e},e.Consumer=e};j.createElement=fm;j.createFactory=function(e){var t=fm.bind(null,e);return t.type=e,t};j.createRef=function(){return{current:null}};j.forwardRef=function(e){return{$$typeof:I0,render:e}};j.isValidElement=Mc;j.lazy=function(e){return{$$typeof:T0,_payload:{_status:-1,_result:e},_init:A0}};j.memo=function(e,t){return{$$typeof:k0,type:e,compare:t===void 0?null:t}};j.startTransition=function(e){var t=Eo.transition;Eo.transition={};try{e()}finally{Eo.transition=t}};j.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};j.useCallback=function(e,t){return ze.current.useCallback(e,t)};j.useContext=function(e){return ze.current.useContext(e)};j.useDebugValue=function(){};j.useDeferredValue=function(e){return ze.current.useDeferredValue(e)};j.useEffect=function(e,t){return ze.current.useEffect(e,t)};j.useId=function(){return ze.current.useId()};j.useImperativeHandle=function(e,t,n){return ze.current.useImperativeHandle(e,t,n)};j.useInsertionEffect=function(e,t){return ze.current.useInsertionEffect(e,t)};j.useLayoutEffect=function(e,t){return ze.current.useLayoutEffect(e,t)};j.useMemo=function(e,t){return ze.current.useMemo(e,t)};j.useReducer=function(e,t,n){return ze.current.useReducer(e,t,n)};j.useRef=function(e){return ze.current.useRef(e)};j.useState=function(e){return ze.current.useState(e)};j.useSyncExternalStore=function(e,t,n){return ze.current.useSyncExternalStore(e,t,n)};j.useTransition=function(){return ze.current.useTransition()};j.version="18.2.0";sm.exports=j;var ae=sm.exports;const Bt=rm(ae);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D0=ae,O0=Symbol.for("react.element"),M0=Symbol.for("react.fragment"),L0=Object.prototype.hasOwnProperty,F0=D0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$0={key:!0,ref:!0,__self:!0,__source:!0};function hm(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)L0.call(t,r)&&!$0.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:O0,type:e,key:s,ref:o,props:i,_owner:F0.current}}Nl.Fragment=M0;Nl.jsx=hm;Nl.jsxs=hm;im.exports=Nl;var R=im.exports,lu={},pm={exports:{}},at={},mm={exports:{}},gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,D){var P=k.length;k.push(D);e:for(;0<P;){var V=P-1>>>1,K=k[V];if(0<i(K,D))k[V]=D,k[P]=K,P=V;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var D=k[0],P=k.pop();if(P!==D){k[0]=P;e:for(var V=0,K=k.length,Ae=K>>>1;V<Ae;){var ct=2*(V+1)-1,Vt=k[ct],$e=ct+1,tt=k[$e];if(0>i(Vt,P))$e<K&&0>i(tt,Vt)?(k[V]=tt,k[$e]=P,V=$e):(k[V]=Vt,k[ct]=P,V=ct);else if($e<K&&0>i(tt,P))k[V]=tt,k[$e]=P,V=$e;else break e}}return D}function i(k,D){var P=k.sortIndex-D.sortIndex;return P!==0?P:k.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,f=3,h=!1,y=!1,_=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(k){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=k)r(u),D.sortIndex=D.expirationTime,t(a,D);else break;D=n(u)}}function v(k){if(_=!1,g(k),!y)if(n(a)!==null)y=!0,Et(E);else{var D=n(u);D!==null&&Pe(v,D.startTime-k)}}function E(k,D){y=!1,_&&(_=!1,m(T),T=-1),h=!0;var P=f;try{for(g(D),c=n(a);c!==null&&(!(c.expirationTime>D)||k&&!ye());){var V=c.callback;if(typeof V=="function"){c.callback=null,f=c.priorityLevel;var K=V(c.expirationTime<=D);D=e.unstable_now(),typeof K=="function"?c.callback=K:c===n(a)&&r(a),g(D)}else r(a);c=n(a)}if(c!==null)var Ae=!0;else{var ct=n(u);ct!==null&&Pe(v,ct.startTime-D),Ae=!1}return Ae}finally{c=null,f=P,h=!1}}var S=!1,w=null,T=-1,z=5,O=-1;function ye(){return!(e.unstable_now()-O<z)}function Ht(){if(w!==null){var k=e.unstable_now();O=k;var D=!0;try{D=w(!0,k)}finally{D?re():(S=!1,w=null)}}else S=!1}var re;if(typeof p=="function")re=function(){p(Ht)};else if(typeof MessageChannel<"u"){var _e=new MessageChannel,Ue=_e.port2;_e.port1.onmessage=Ht,re=function(){Ue.postMessage(null)}}else re=function(){x(Ht,0)};function Et(k){w=k,S||(S=!0,re())}function Pe(k,D){T=x(function(){k(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){y||h||(y=!0,Et(E))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(k){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var P=f;f=D;try{return k()}finally{f=P}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,D){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var P=f;f=k;try{return D()}finally{f=P}},e.unstable_scheduleCallback=function(k,D,P){var V=e.unstable_now();switch(typeof P=="object"&&P!==null?(P=P.delay,P=typeof P=="number"&&0<P?V+P:V):P=V,k){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=P+K,k={id:d++,callback:D,priorityLevel:k,startTime:P,expirationTime:K,sortIndex:-1},P>V?(k.sortIndex=P,t(u,k),n(a)===null&&k===n(u)&&(_?(m(T),T=-1):_=!0,Pe(v,P-V))):(k.sortIndex=K,t(a,k),y||h||(y=!0,Et(E))),k},e.unstable_shouldYield=ye,e.unstable_wrapCallback=function(k){var D=f;return function(){var P=f;f=D;try{return k.apply(this,arguments)}finally{f=P}}}})(gm);mm.exports=gm;var B0=mm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ym=ae,lt=B0;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _m=new Set,us={};function wr(e,t){ni(e,t),ni(e+"Capture",t)}function ni(e,t){for(us[e]=t,e=0;e<t.length;e++)_m.add(t[e])}var tn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),au=Object.prototype.hasOwnProperty,j0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pf={},Af={};function z0(e){return au.call(Af,e)?!0:au.call(Pf,e)?!1:j0.test(e)?Af[e]=!0:(Pf[e]=!0,!1)}function W0(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U0(e,t,n,r){if(t===null||typeof t>"u"||W0(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function We(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new We(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new We(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new We(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new We(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new We(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new We(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new We(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new We(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new We(e,5,!1,e.toLowerCase(),null,!1,!1)});var Lc=/[\-:]([a-z])/g;function Fc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Lc,Fc);Re[t]=new We(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Lc,Fc);Re[t]=new We(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Lc,Fc);Re[t]=new We(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new We("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new We(e,1,!1,e.toLowerCase(),null,!0,!0)});function $c(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U0(t,n,i,r)&&(n=null),r||i===null?z0(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var un=ym.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ys=Symbol.for("react.element"),Pr=Symbol.for("react.portal"),Ar=Symbol.for("react.fragment"),Bc=Symbol.for("react.strict_mode"),uu=Symbol.for("react.profiler"),vm=Symbol.for("react.provider"),wm=Symbol.for("react.context"),jc=Symbol.for("react.forward_ref"),cu=Symbol.for("react.suspense"),du=Symbol.for("react.suspense_list"),zc=Symbol.for("react.memo"),pn=Symbol.for("react.lazy"),Em=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Ri(e){return e===null||typeof e!="object"?null:(e=bf&&e[bf]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,ha;function Wi(e){if(ha===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);ha=t&&t[1]||""}return`
`+ha+e}var pa=!1;function ma(e,t){if(!e||pa)return"";pa=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{pa=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Wi(e):""}function H0(e){switch(e.tag){case 5:return Wi(e.type);case 16:return Wi("Lazy");case 13:return Wi("Suspense");case 19:return Wi("SuspenseList");case 0:case 2:case 15:return e=ma(e.type,!1),e;case 11:return e=ma(e.type.render,!1),e;case 1:return e=ma(e.type,!0),e;default:return""}}function fu(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ar:return"Fragment";case Pr:return"Portal";case uu:return"Profiler";case Bc:return"StrictMode";case cu:return"Suspense";case du:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case wm:return(e.displayName||"Context")+".Consumer";case vm:return(e._context.displayName||"Context")+".Provider";case jc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case zc:return t=e.displayName||null,t!==null?t:fu(e.type)||"Memo";case pn:t=e._payload,e=e._init;try{return fu(e(t))}catch{}}return null}function V0(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fu(t);case 8:return t===Bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Dn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function G0(e){var t=Cm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function qs(e){e._valueTracker||(e._valueTracker=G0(e))}function Sm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Cm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Lo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hu(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Df(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Dn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Im(e,t){t=t.checked,t!=null&&$c(e,"checked",t,!1)}function pu(e,t){Im(e,t);var n=Dn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?mu(e,t.type,n):t.hasOwnProperty("defaultValue")&&mu(e,t.type,Dn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Of(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function mu(e,t,n){(t!=="number"||Lo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ui=Array.isArray;function Vr(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Dn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gu(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Ui(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Dn(n)}}function xm(e,t){var n=Dn(t.value),r=Dn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Lf(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function km(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?km(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xs,Tm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xs=Xs||document.createElement("div"),Xs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function cs(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Qi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q0=["Webkit","ms","Moz","O"];Object.keys(Qi).forEach(function(e){Q0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Qi[t]=Qi[e]})});function Nm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Qi.hasOwnProperty(e)&&Qi[e]?(""+t).trim():t+"px"}function Rm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Nm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var K0=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(e,t){if(t){if(K0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function vu(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wu=null;function Wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Eu=null,Gr=null,Qr=null;function Ff(e){if(e=Bs(e)){if(typeof Eu!="function")throw Error(C(280));var t=e.stateNode;t&&(t=Dl(t),Eu(e.stateNode,e.type,t))}}function Pm(e){Gr?Qr?Qr.push(e):Qr=[e]:Gr=e}function Am(){if(Gr){var e=Gr,t=Qr;if(Qr=Gr=null,Ff(e),t)for(e=0;e<t.length;e++)Ff(t[e])}}function bm(e,t){return e(t)}function Dm(){}var ga=!1;function Om(e,t,n){if(ga)return e(t,n);ga=!0;try{return bm(e,t,n)}finally{ga=!1,(Gr!==null||Qr!==null)&&(Dm(),Am())}}function ds(e,t){var n=e.stateNode;if(n===null)return null;var r=Dl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var Cu=!1;if(tn)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{Cu=!1}function Y0(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Ki=!1,Fo=null,$o=!1,Su=null,q0={onError:function(e){Ki=!0,Fo=e}};function X0(e,t,n,r,i,s,o,l,a){Ki=!1,Fo=null,Y0.apply(q0,arguments)}function J0(e,t,n,r,i,s,o,l,a){if(X0.apply(this,arguments),Ki){if(Ki){var u=Fo;Ki=!1,Fo=null}else throw Error(C(198));$o||($o=!0,Su=u)}}function Er(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Mm(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $f(e){if(Er(e)!==e)throw Error(C(188))}function Z0(e){var t=e.alternate;if(!t){if(t=Er(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $f(i),e;if(s===r)return $f(i),t;s=s.sibling}throw Error(C(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function Lm(e){return e=Z0(e),e!==null?Fm(e):null}function Fm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Fm(e);if(t!==null)return t;e=e.sibling}return null}var $m=lt.unstable_scheduleCallback,Bf=lt.unstable_cancelCallback,ew=lt.unstable_shouldYield,tw=lt.unstable_requestPaint,ce=lt.unstable_now,nw=lt.unstable_getCurrentPriorityLevel,Uc=lt.unstable_ImmediatePriority,Bm=lt.unstable_UserBlockingPriority,Bo=lt.unstable_NormalPriority,rw=lt.unstable_LowPriority,jm=lt.unstable_IdlePriority,Rl=null,zt=null;function iw(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Rl,e,void 0,(e.current.flags&128)===128)}catch{}}var Rt=Math.clz32?Math.clz32:lw,sw=Math.log,ow=Math.LN2;function lw(e){return e>>>=0,e===0?32:31-(sw(e)/ow|0)|0}var Js=64,Zs=4194304;function Hi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function jo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Hi(l):(s&=o,s!==0&&(r=Hi(s)))}else o=n&~i,o!==0?r=Hi(o):s!==0&&(r=Hi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Rt(t),i=1<<n,r|=e[n],t&=~i;return r}function aw(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function uw(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Rt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=aw(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function Iu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zm(){var e=Js;return Js<<=1,!(Js&4194240)&&(Js=64),e}function ya(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Fs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Rt(t),e[t]=n}function cw(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Rt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Hc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Rt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var G=0;function Wm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Um,Vc,Hm,Vm,Gm,xu=!1,eo=[],wn=null,En=null,Cn=null,fs=new Map,hs=new Map,gn=[],dw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(e,t){switch(e){case"focusin":case"focusout":wn=null;break;case"dragenter":case"dragleave":En=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":fs.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":hs.delete(t.pointerId)}}function Ai(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Bs(t),t!==null&&Vc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function fw(e,t,n,r,i){switch(t){case"focusin":return wn=Ai(wn,e,t,n,r,i),!0;case"dragenter":return En=Ai(En,e,t,n,r,i),!0;case"mouseover":return Cn=Ai(Cn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return fs.set(s,Ai(fs.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,hs.set(s,Ai(hs.get(s)||null,e,t,n,r,i)),!0}return!1}function Qm(e){var t=Gn(e.target);if(t!==null){var n=Er(t);if(n!==null){if(t=n.tag,t===13){if(t=Mm(n),t!==null){e.blockedOn=t,Gm(e.priority,function(){Hm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=ku(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wu=r,n.target.dispatchEvent(r),wu=null}else return t=Bs(n),t!==null&&Vc(t),e.blockedOn=n,!1;t.shift()}return!0}function zf(e,t,n){Co(e)&&n.delete(t)}function hw(){xu=!1,wn!==null&&Co(wn)&&(wn=null),En!==null&&Co(En)&&(En=null),Cn!==null&&Co(Cn)&&(Cn=null),fs.forEach(zf),hs.forEach(zf)}function bi(e,t){e.blockedOn===t&&(e.blockedOn=null,xu||(xu=!0,lt.unstable_scheduleCallback(lt.unstable_NormalPriority,hw)))}function ps(e){function t(i){return bi(i,e)}if(0<eo.length){bi(eo[0],e);for(var n=1;n<eo.length;n++){var r=eo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(wn!==null&&bi(wn,e),En!==null&&bi(En,e),Cn!==null&&bi(Cn,e),fs.forEach(t),hs.forEach(t),n=0;n<gn.length;n++)r=gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<gn.length&&(n=gn[0],n.blockedOn===null);)Qm(n),n.blockedOn===null&&gn.shift()}var Kr=un.ReactCurrentBatchConfig,zo=!0;function pw(e,t,n,r){var i=G,s=Kr.transition;Kr.transition=null;try{G=1,Gc(e,t,n,r)}finally{G=i,Kr.transition=s}}function mw(e,t,n,r){var i=G,s=Kr.transition;Kr.transition=null;try{G=4,Gc(e,t,n,r)}finally{G=i,Kr.transition=s}}function Gc(e,t,n,r){if(zo){var i=ku(e,t,n,r);if(i===null)Ta(e,t,r,Wo,n),jf(e,r);else if(fw(i,e,t,n,r))r.stopPropagation();else if(jf(e,r),t&4&&-1<dw.indexOf(e)){for(;i!==null;){var s=Bs(i);if(s!==null&&Um(s),s=ku(e,t,n,r),s===null&&Ta(e,t,r,Wo,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ta(e,t,r,null,n)}}var Wo=null;function ku(e,t,n,r){if(Wo=null,e=Wc(r),e=Gn(e),e!==null)if(t=Er(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Mm(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Wo=e,null}function Km(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(nw()){case Uc:return 1;case Bm:return 4;case Bo:case rw:return 16;case jm:return 536870912;default:return 16}default:return 16}}var _n=null,Qc=null,So=null;function Ym(){if(So)return So;var e,t=Qc,n=t.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return So=i.slice(e,1<r?1-r:void 0)}function Io(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function to(){return!0}function Wf(){return!1}function ut(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?to:Wf,this.isPropagationStopped=Wf,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=to)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=to)},persist:function(){},isPersistent:to}),t}var Ei={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kc=ut(Ei),$s=oe({},Ei,{view:0,detail:0}),gw=ut($s),_a,va,Di,Pl=oe({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Di&&(Di&&e.type==="mousemove"?(_a=e.screenX-Di.screenX,va=e.screenY-Di.screenY):va=_a=0,Di=e),_a)},movementY:function(e){return"movementY"in e?e.movementY:va}}),Uf=ut(Pl),yw=oe({},Pl,{dataTransfer:0}),_w=ut(yw),vw=oe({},$s,{relatedTarget:0}),wa=ut(vw),ww=oe({},Ei,{animationName:0,elapsedTime:0,pseudoElement:0}),Ew=ut(ww),Cw=oe({},Ei,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Sw=ut(Cw),Iw=oe({},Ei,{data:0}),Hf=ut(Iw),xw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Tw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nw(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Tw[e])?!!t[e]:!1}function Yc(){return Nw}var Rw=oe({},$s,{key:function(e){if(e.key){var t=xw[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Io(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kw[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yc,charCode:function(e){return e.type==="keypress"?Io(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Io(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Pw=ut(Rw),Aw=oe({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vf=ut(Aw),bw=oe({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yc}),Dw=ut(bw),Ow=oe({},Ei,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mw=ut(Ow),Lw=oe({},Pl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fw=ut(Lw),$w=[9,13,27,32],qc=tn&&"CompositionEvent"in window,Yi=null;tn&&"documentMode"in document&&(Yi=document.documentMode);var Bw=tn&&"TextEvent"in window&&!Yi,qm=tn&&(!qc||Yi&&8<Yi&&11>=Yi),Gf=String.fromCharCode(32),Qf=!1;function Xm(e,t){switch(e){case"keyup":return $w.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var br=!1;function jw(e,t){switch(e){case"compositionend":return Jm(t);case"keypress":return t.which!==32?null:(Qf=!0,Gf);case"textInput":return e=t.data,e===Gf&&Qf?null:e;default:return null}}function zw(e,t){if(br)return e==="compositionend"||!qc&&Xm(e,t)?(e=Ym(),So=Qc=_n=null,br=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qm&&t.locale!=="ko"?null:t.data;default:return null}}var Ww={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Kf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ww[e.type]:t==="textarea"}function Zm(e,t,n,r){Pm(r),t=Uo(t,"onChange"),0<t.length&&(n=new Kc("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var qi=null,ms=null;function Uw(e){cg(e,0)}function Al(e){var t=Mr(e);if(Sm(t))return e}function Hw(e,t){if(e==="change")return t}var eg=!1;if(tn){var Ea;if(tn){var Ca="oninput"in document;if(!Ca){var Yf=document.createElement("div");Yf.setAttribute("oninput","return;"),Ca=typeof Yf.oninput=="function"}Ea=Ca}else Ea=!1;eg=Ea&&(!document.documentMode||9<document.documentMode)}function qf(){qi&&(qi.detachEvent("onpropertychange",tg),ms=qi=null)}function tg(e){if(e.propertyName==="value"&&Al(ms)){var t=[];Zm(t,ms,e,Wc(e)),Om(Uw,t)}}function Vw(e,t,n){e==="focusin"?(qf(),qi=t,ms=n,qi.attachEvent("onpropertychange",tg)):e==="focusout"&&qf()}function Gw(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Al(ms)}function Qw(e,t){if(e==="click")return Al(t)}function Kw(e,t){if(e==="input"||e==="change")return Al(t)}function Yw(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Dt=typeof Object.is=="function"?Object.is:Yw;function gs(e,t){if(Dt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!au.call(t,i)||!Dt(e[i],t[i]))return!1}return!0}function Xf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jf(e,t){var n=Xf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xf(n)}}function ng(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ng(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rg(){for(var e=window,t=Lo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Lo(e.document)}return t}function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function qw(e){var t=rg(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ng(n.ownerDocument.documentElement,n)){if(r!==null&&Xc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=Jf(n,s);var o=Jf(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xw=tn&&"documentMode"in document&&11>=document.documentMode,Dr=null,Tu=null,Xi=null,Nu=!1;function Zf(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nu||Dr==null||Dr!==Lo(r)||(r=Dr,"selectionStart"in r&&Xc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xi&&gs(Xi,r)||(Xi=r,r=Uo(Tu,"onSelect"),0<r.length&&(t=new Kc("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Dr)))}function no(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Or={animationend:no("Animation","AnimationEnd"),animationiteration:no("Animation","AnimationIteration"),animationstart:no("Animation","AnimationStart"),transitionend:no("Transition","TransitionEnd")},Sa={},ig={};tn&&(ig=document.createElement("div").style,"AnimationEvent"in window||(delete Or.animationend.animation,delete Or.animationiteration.animation,delete Or.animationstart.animation),"TransitionEvent"in window||delete Or.transitionend.transition);function bl(e){if(Sa[e])return Sa[e];if(!Or[e])return e;var t=Or[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ig)return Sa[e]=t[n];return e}var sg=bl("animationend"),og=bl("animationiteration"),lg=bl("animationstart"),ag=bl("transitionend"),ug=new Map,eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $n(e,t){ug.set(e,t),wr(t,[e])}for(var Ia=0;Ia<eh.length;Ia++){var xa=eh[Ia],Jw=xa.toLowerCase(),Zw=xa[0].toUpperCase()+xa.slice(1);$n(Jw,"on"+Zw)}$n(sg,"onAnimationEnd");$n(og,"onAnimationIteration");$n(lg,"onAnimationStart");$n("dblclick","onDoubleClick");$n("focusin","onFocus");$n("focusout","onBlur");$n(ag,"onTransitionEnd");ni("onMouseEnter",["mouseout","mouseover"]);ni("onMouseLeave",["mouseout","mouseover"]);ni("onPointerEnter",["pointerout","pointerover"]);ni("onPointerLeave",["pointerout","pointerover"]);wr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wr("onBeforeInput",["compositionend","keypress","textInput","paste"]);wr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function th(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,J0(r,t,void 0,e),e.currentTarget=null}function cg(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;th(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;th(i,l,u),s=a}}}if($o)throw e=Su,$o=!1,Su=null,e}function J(e,t){var n=t[Du];n===void 0&&(n=t[Du]=new Set);var r=e+"__bubble";n.has(r)||(dg(t,e,2,!1),n.add(r))}function ka(e,t,n){var r=0;t&&(r|=4),dg(n,e,r,t)}var ro="_reactListening"+Math.random().toString(36).slice(2);function ys(e){if(!e[ro]){e[ro]=!0,_m.forEach(function(n){n!=="selectionchange"&&(e1.has(n)||ka(n,!1,e),ka(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ro]||(t[ro]=!0,ka("selectionchange",!1,t))}}function dg(e,t,n,r){switch(Km(t)){case 1:var i=pw;break;case 4:i=mw;break;default:i=Gc}n=i.bind(null,t,n,e),i=void 0,!Cu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Ta(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Gn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Om(function(){var u=s,d=Wc(n),c=[];e:{var f=ug.get(e);if(f!==void 0){var h=Kc,y=e;switch(e){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":h=Pw;break;case"focusin":y="focus",h=wa;break;case"focusout":y="blur",h=wa;break;case"beforeblur":case"afterblur":h=wa;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":h=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":h=_w;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":h=Dw;break;case sg:case og:case lg:h=Ew;break;case ag:h=Mw;break;case"scroll":h=gw;break;case"wheel":h=Fw;break;case"copy":case"cut":case"paste":h=Sw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":h=Vf}var _=(t&4)!==0,x=!_&&e==="scroll",m=_?f!==null?f+"Capture":null:f;_=[];for(var p=u,g;p!==null;){g=p;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,m!==null&&(v=ds(p,m),v!=null&&_.push(_s(p,v,g)))),x)break;p=p.return}0<_.length&&(f=new h(f,y,null,n,d),c.push({event:f,listeners:_}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",h=e==="mouseout"||e==="pointerout",f&&n!==wu&&(y=n.relatedTarget||n.fromElement)&&(Gn(y)||y[nn]))break e;if((h||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,h?(y=n.relatedTarget||n.toElement,h=u,y=y?Gn(y):null,y!==null&&(x=Er(y),y!==x||y.tag!==5&&y.tag!==6)&&(y=null)):(h=null,y=u),h!==y)){if(_=Uf,v="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(_=Vf,v="onPointerLeave",m="onPointerEnter",p="pointer"),x=h==null?f:Mr(h),g=y==null?f:Mr(y),f=new _(v,p+"leave",h,n,d),f.target=x,f.relatedTarget=g,v=null,Gn(d)===u&&(_=new _(m,p+"enter",y,n,d),_.target=g,_.relatedTarget=x,v=_),x=v,h&&y)t:{for(_=h,m=y,p=0,g=_;g;g=Nr(g))p++;for(g=0,v=m;v;v=Nr(v))g++;for(;0<p-g;)_=Nr(_),p--;for(;0<g-p;)m=Nr(m),g--;for(;p--;){if(_===m||m!==null&&_===m.alternate)break t;_=Nr(_),m=Nr(m)}_=null}else _=null;h!==null&&nh(c,f,h,_,!1),y!==null&&x!==null&&nh(c,x,y,_,!0)}}e:{if(f=u?Mr(u):window,h=f.nodeName&&f.nodeName.toLowerCase(),h==="select"||h==="input"&&f.type==="file")var E=Hw;else if(Kf(f))if(eg)E=Kw;else{E=Gw;var S=Vw}else(h=f.nodeName)&&h.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Qw);if(E&&(E=E(e,u))){Zm(c,E,n,d);break e}S&&S(e,f,u),e==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&mu(f,"number",f.value)}switch(S=u?Mr(u):window,e){case"focusin":(Kf(S)||S.contentEditable==="true")&&(Dr=S,Tu=u,Xi=null);break;case"focusout":Xi=Tu=Dr=null;break;case"mousedown":Nu=!0;break;case"contextmenu":case"mouseup":case"dragend":Nu=!1,Zf(c,n,d);break;case"selectionchange":if(Xw)break;case"keydown":case"keyup":Zf(c,n,d)}var w;if(qc)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else br?Xm(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(qm&&n.locale!=="ko"&&(br||T!=="onCompositionStart"?T==="onCompositionEnd"&&br&&(w=Ym()):(_n=d,Qc="value"in _n?_n.value:_n.textContent,br=!0)),S=Uo(u,T),0<S.length&&(T=new Hf(T,e,null,n,d),c.push({event:T,listeners:S}),w?T.data=w:(w=Jm(n),w!==null&&(T.data=w)))),(w=Bw?jw(e,n):zw(e,n))&&(u=Uo(u,"onBeforeInput"),0<u.length&&(d=new Hf("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=w))}cg(c,t)})}function _s(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Uo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ds(e,n),s!=null&&r.unshift(_s(e,s,i)),s=ds(e,t),s!=null&&r.push(_s(e,s,i))),e=e.return}return r}function Nr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function nh(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=ds(n,s),a!=null&&o.unshift(_s(n,a,l))):i||(a=ds(n,s),a!=null&&o.push(_s(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var t1=/\r\n?/g,n1=/\u0000|\uFFFD/g;function rh(e){return(typeof e=="string"?e:""+e).replace(t1,`
`).replace(n1,"")}function io(e,t,n){if(t=rh(t),rh(e)!==t&&n)throw Error(C(425))}function Ho(){}var Ru=null,Pu=null;function Au(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,r1=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,i1=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(e){return ih.resolve(null).then(e).catch(s1)}:bu;function s1(e){setTimeout(function(){throw e})}function Na(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ps(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ps(t)}function Sn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sh(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ci=Math.random().toString(36).slice(2),$t="__reactFiber$"+Ci,vs="__reactProps$"+Ci,nn="__reactContainer$"+Ci,Du="__reactEvents$"+Ci,o1="__reactListeners$"+Ci,l1="__reactHandles$"+Ci;function Gn(e){var t=e[$t];if(t)return t;for(var n=e.parentNode;n;){if(t=n[nn]||n[$t]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sh(e);e!==null;){if(n=e[$t])return n;e=sh(e)}return t}e=n,n=e.parentNode}return null}function Bs(e){return e=e[$t]||e[nn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function Dl(e){return e[vs]||null}var Ou=[],Lr=-1;function Bn(e){return{current:e}}function te(e){0>Lr||(e.current=Ou[Lr],Ou[Lr]=null,Lr--)}function X(e,t){Lr++,Ou[Lr]=e.current,e.current=t}var On={},Fe=Bn(On),Ke=Bn(!1),rr=On;function ri(e,t){var n=e.type.contextTypes;if(!n)return On;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ye(e){return e=e.childContextTypes,e!=null}function Vo(){te(Ke),te(Fe)}function oh(e,t,n){if(Fe.current!==On)throw Error(C(168));X(Fe,t),X(Ke,n)}function fg(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(C(108,V0(e)||"Unknown",i));return oe({},n,r)}function Go(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||On,rr=Fe.current,X(Fe,e),X(Ke,Ke.current),!0}function lh(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=fg(e,t,rr),r.__reactInternalMemoizedMergedChildContext=e,te(Ke),te(Fe),X(Fe,e)):te(Ke),X(Ke,n)}var Qt=null,Ol=!1,Ra=!1;function hg(e){Qt===null?Qt=[e]:Qt.push(e)}function a1(e){Ol=!0,hg(e)}function jn(){if(!Ra&&Qt!==null){Ra=!0;var e=0,t=G;try{var n=Qt;for(G=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,Ol=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),$m(Uc,jn),i}finally{G=t,Ra=!1}}return null}var Fr=[],$r=0,Qo=null,Ko=0,pt=[],mt=0,ir=null,Yt=1,qt="";function Wn(e,t){Fr[$r++]=Ko,Fr[$r++]=Qo,Qo=e,Ko=t}function pg(e,t,n){pt[mt++]=Yt,pt[mt++]=qt,pt[mt++]=ir,ir=e;var r=Yt;e=qt;var i=32-Rt(r)-1;r&=~(1<<i),n+=1;var s=32-Rt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Rt(t)+i|n<<i|r,qt=s+e}else Yt=1<<s|n<<i|r,qt=e}function Jc(e){e.return!==null&&(Wn(e,1),pg(e,1,0))}function Zc(e){for(;e===Qo;)Qo=Fr[--$r],Fr[$r]=null,Ko=Fr[--$r],Fr[$r]=null;for(;e===ir;)ir=pt[--mt],pt[mt]=null,qt=pt[--mt],pt[mt]=null,Yt=pt[--mt],pt[mt]=null}var st=null,it=null,ne=!1,xt=null;function mg(e,t){var n=gt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function ah(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,st=e,it=Sn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,st=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=ir!==null?{id:Yt,overflow:qt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=gt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,st=e,it=null,!0):!1;default:return!1}}function Mu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Lu(e){if(ne){var t=it;if(t){var n=t;if(!ah(e,t)){if(Mu(e))throw Error(C(418));t=Sn(n.nextSibling);var r=st;t&&ah(e,t)?mg(r,n):(e.flags=e.flags&-4097|2,ne=!1,st=e)}}else{if(Mu(e))throw Error(C(418));e.flags=e.flags&-4097|2,ne=!1,st=e}}}function uh(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;st=e}function so(e){if(e!==st)return!1;if(!ne)return uh(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Au(e.type,e.memoizedProps)),t&&(t=it)){if(Mu(e))throw gg(),Error(C(418));for(;t;)mg(e,t),t=Sn(t.nextSibling)}if(uh(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=Sn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=st?Sn(e.stateNode.nextSibling):null;return!0}function gg(){for(var e=it;e;)e=Sn(e.nextSibling)}function ii(){it=st=null,ne=!1}function ed(e){xt===null?xt=[e]:xt.push(e)}var u1=un.ReactCurrentBatchConfig;function St(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Yo=Bn(null),qo=null,Br=null,td=null;function nd(){td=Br=qo=null}function rd(e){var t=Yo.current;te(Yo),e._currentValue=t}function Fu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yr(e,t){qo=e,td=Br=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ve=!0),e.firstContext=null)}function _t(e){var t=e._currentValue;if(td!==e)if(e={context:e,memoizedValue:t,next:null},Br===null){if(qo===null)throw Error(C(308));Br=e,qo.dependencies={lanes:0,firstContext:e}}else Br=Br.next=e;return t}var Qn=null;function id(e){Qn===null?Qn=[e]:Qn.push(e)}function yg(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,id(t)):(n.next=i.next,i.next=n),t.interleaved=n,rn(e,r)}function rn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var mn=!1;function sd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _g(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Zt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function In(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,W&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,rn(e,n)}return i=r.interleaved,i===null?(t.next=t,id(r)):(t.next=i.next,i.next=t),r.interleaved=t,rn(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hc(e,n)}}function ch(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Xo(e,t,n,r){var i=e.updateQueue;mn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var f=l.lane,h=l.eventTime;if((r&f)===f){d!==null&&(d=d.next={eventTime:h,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,_=l;switch(f=t,h=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){c=y.call(h,c,f);break e}c=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,f=typeof y=="function"?y.call(h,c,f):y,f==null)break e;c=oe({},c,f);break e;case 2:mn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else h={eventTime:h,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=h,a=c):d=d.next=h,o|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);or|=o,e.lanes=o,e.memoizedState=c}}function dh(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(C(191,i));i.call(r)}}}var vg=new ym.Component().refs;function $u(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ml={isMounted:function(e){return(e=e._reactInternals)?Er(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=je(),i=kn(e),s=Zt(r,i);s.payload=t,n!=null&&(s.callback=n),t=In(e,s,i),t!==null&&(Pt(t,e,i,r),xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=je(),i=kn(e),s=Zt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=In(e,s,i),t!==null&&(Pt(t,e,i,r),xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=je(),r=kn(e),i=Zt(n,r);i.tag=2,t!=null&&(i.callback=t),t=In(e,i,r),t!==null&&(Pt(t,e,r,n),xo(t,e,r))}};function fh(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!gs(n,r)||!gs(i,s):!0}function wg(e,t,n){var r=!1,i=On,s=t.contextType;return typeof s=="object"&&s!==null?s=_t(s):(i=Ye(t)?rr:Fe.current,r=t.contextTypes,s=(r=r!=null)?ri(e,i):On),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ml,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function hh(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ml.enqueueReplaceState(t,t.state,null)}function Bu(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=vg,sd(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=_t(s):(s=Ye(t)?rr:Fe.current,i.context=ri(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&($u(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Ml.enqueueReplaceState(i,i.state,null),Xo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Oi(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===vg&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function oo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ph(e){var t=e._init;return t(e._payload)}function Eg(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=Tn(m,p),m.index=0,m.sibling=null,m}function s(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,v){return p===null||p.tag!==6?(p=La(g,m.mode,v),p.return=m,p):(p=i(p,g),p.return=m,p)}function a(m,p,g,v){var E=g.type;return E===Ar?d(m,p,g.props.children,v,g.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===pn&&ph(E)===p.type)?(v=i(p,g.props),v.ref=Oi(m,p,g),v.return=m,v):(v=Ao(g.type,g.key,g.props,null,m.mode,v),v.ref=Oi(m,p,g),v.return=m,v)}function u(m,p,g,v){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Fa(g,m.mode,v),p.return=m,p):(p=i(p,g.children||[]),p.return=m,p)}function d(m,p,g,v,E){return p===null||p.tag!==7?(p=er(g,m.mode,v,E),p.return=m,p):(p=i(p,g),p.return=m,p)}function c(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=La(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ys:return g=Ao(p.type,p.key,p.props,null,m.mode,g),g.ref=Oi(m,null,p),g.return=m,g;case Pr:return p=Fa(p,m.mode,g),p.return=m,p;case pn:var v=p._init;return c(m,v(p._payload),g)}if(Ui(p)||Ri(p))return p=er(p,m.mode,g,null),p.return=m,p;oo(m,p)}return null}function f(m,p,g,v){var E=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:l(m,p,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ys:return g.key===E?a(m,p,g,v):null;case Pr:return g.key===E?u(m,p,g,v):null;case pn:return E=g._init,f(m,p,E(g._payload),v)}if(Ui(g)||Ri(g))return E!==null?null:d(m,p,g,v,null);oo(m,g)}return null}function h(m,p,g,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return m=m.get(g)||null,l(p,m,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ys:return m=m.get(v.key===null?g:v.key)||null,a(p,m,v,E);case Pr:return m=m.get(v.key===null?g:v.key)||null,u(p,m,v,E);case pn:var S=v._init;return h(m,p,g,S(v._payload),E)}if(Ui(v)||Ri(v))return m=m.get(g)||null,d(p,m,v,E,null);oo(p,v)}return null}function y(m,p,g,v){for(var E=null,S=null,w=p,T=p=0,z=null;w!==null&&T<g.length;T++){w.index>T?(z=w,w=null):z=w.sibling;var O=f(m,w,g[T],v);if(O===null){w===null&&(w=z);break}e&&w&&O.alternate===null&&t(m,w),p=s(O,p,T),S===null?E=O:S.sibling=O,S=O,w=z}if(T===g.length)return n(m,w),ne&&Wn(m,T),E;if(w===null){for(;T<g.length;T++)w=c(m,g[T],v),w!==null&&(p=s(w,p,T),S===null?E=w:S.sibling=w,S=w);return ne&&Wn(m,T),E}for(w=r(m,w);T<g.length;T++)z=h(w,m,T,g[T],v),z!==null&&(e&&z.alternate!==null&&w.delete(z.key===null?T:z.key),p=s(z,p,T),S===null?E=z:S.sibling=z,S=z);return e&&w.forEach(function(ye){return t(m,ye)}),ne&&Wn(m,T),E}function _(m,p,g,v){var E=Ri(g);if(typeof E!="function")throw Error(C(150));if(g=E.call(g),g==null)throw Error(C(151));for(var S=E=null,w=p,T=p=0,z=null,O=g.next();w!==null&&!O.done;T++,O=g.next()){w.index>T?(z=w,w=null):z=w.sibling;var ye=f(m,w,O.value,v);if(ye===null){w===null&&(w=z);break}e&&w&&ye.alternate===null&&t(m,w),p=s(ye,p,T),S===null?E=ye:S.sibling=ye,S=ye,w=z}if(O.done)return n(m,w),ne&&Wn(m,T),E;if(w===null){for(;!O.done;T++,O=g.next())O=c(m,O.value,v),O!==null&&(p=s(O,p,T),S===null?E=O:S.sibling=O,S=O);return ne&&Wn(m,T),E}for(w=r(m,w);!O.done;T++,O=g.next())O=h(w,m,T,O.value,v),O!==null&&(e&&O.alternate!==null&&w.delete(O.key===null?T:O.key),p=s(O,p,T),S===null?E=O:S.sibling=O,S=O);return e&&w.forEach(function(Ht){return t(m,Ht)}),ne&&Wn(m,T),E}function x(m,p,g,v){if(typeof g=="object"&&g!==null&&g.type===Ar&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ys:e:{for(var E=g.key,S=p;S!==null;){if(S.key===E){if(E=g.type,E===Ar){if(S.tag===7){n(m,S.sibling),p=i(S,g.props.children),p.return=m,m=p;break e}}else if(S.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===pn&&ph(E)===S.type){n(m,S.sibling),p=i(S,g.props),p.ref=Oi(m,S,g),p.return=m,m=p;break e}n(m,S);break}else t(m,S);S=S.sibling}g.type===Ar?(p=er(g.props.children,m.mode,v,g.key),p.return=m,m=p):(v=Ao(g.type,g.key,g.props,null,m.mode,v),v.ref=Oi(m,p,g),v.return=m,m=v)}return o(m);case Pr:e:{for(S=g.key;p!==null;){if(p.key===S)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=i(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Fa(g,m.mode,v),p.return=m,m=p}return o(m);case pn:return S=g._init,x(m,p,S(g._payload),v)}if(Ui(g))return y(m,p,g,v);if(Ri(g))return _(m,p,g,v);oo(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,g),p.return=m,m=p):(n(m,p),p=La(g,m.mode,v),p.return=m,m=p),o(m)):n(m,p)}return x}var si=Eg(!0),Cg=Eg(!1),js={},Wt=Bn(js),ws=Bn(js),Es=Bn(js);function Kn(e){if(e===js)throw Error(C(174));return e}function od(e,t){switch(X(Es,t),X(ws,e),X(Wt,js),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yu(t,e)}te(Wt),X(Wt,t)}function oi(){te(Wt),te(ws),te(Es)}function Sg(e){Kn(Es.current);var t=Kn(Wt.current),n=yu(t,e.type);t!==n&&(X(ws,e),X(Wt,n))}function ld(e){ws.current===e&&(te(Wt),te(ws))}var ie=Bn(0);function Jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Pa=[];function ad(){for(var e=0;e<Pa.length;e++)Pa[e]._workInProgressVersionPrimary=null;Pa.length=0}var ko=un.ReactCurrentDispatcher,Aa=un.ReactCurrentBatchConfig,sr=0,se=null,pe=null,we=null,Zo=!1,Ji=!1,Cs=0,c1=0;function De(){throw Error(C(321))}function ud(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Dt(e[n],t[n]))return!1;return!0}function cd(e,t,n,r,i,s){if(sr=s,se=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?p1:m1,e=n(r,i),Ji){s=0;do{if(Ji=!1,Cs=0,25<=s)throw Error(C(301));s+=1,we=pe=null,t.updateQueue=null,ko.current=g1,e=n(r,i)}while(Ji)}if(ko.current=el,t=pe!==null&&pe.next!==null,sr=0,we=pe=se=null,Zo=!1,t)throw Error(C(300));return e}function dd(){var e=Cs!==0;return Cs=0,e}function Lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return we===null?se.memoizedState=we=e:we=we.next=e,we}function vt(){if(pe===null){var e=se.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=we===null?se.memoizedState:we.next;if(t!==null)we=t,pe=e;else{if(e===null)throw Error(C(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},we===null?se.memoizedState=we=e:we=we.next=e}return we}function Ss(e,t){return typeof t=="function"?t(e):t}function ba(e){var t=vt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((sr&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,se.lanes|=d,or|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Dt(r,t.memoizedState)||(Ve=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,se.lanes|=s,or|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Da(e){var t=vt(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Dt(s,t.memoizedState)||(Ve=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Ig(){}function xg(e,t){var n=se,r=vt(),i=t(),s=!Dt(r.memoizedState,i);if(s&&(r.memoizedState=i,Ve=!0),r=r.queue,fd(Ng.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||we!==null&&we.memoizedState.tag&1){if(n.flags|=2048,Is(9,Tg.bind(null,n,r,i,t),void 0,null),xe===null)throw Error(C(349));sr&30||kg(n,t,i)}return i}function kg(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Tg(e,t,n,r){t.value=n,t.getSnapshot=r,Rg(t)&&Pg(e)}function Ng(e,t,n){return n(function(){Rg(t)&&Pg(e)})}function Rg(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Dt(e,n)}catch{return!0}}function Pg(e){var t=rn(e,1);t!==null&&Pt(t,e,1,-1)}function mh(e){var t=Lt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ss,lastRenderedState:e},t.queue=e,e=e.dispatch=h1.bind(null,se,e),[t.memoizedState,e]}function Is(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=se.updateQueue,t===null?(t={lastEffect:null,stores:null},se.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ag(){return vt().memoizedState}function To(e,t,n,r){var i=Lt();se.flags|=e,i.memoizedState=Is(1|t,n,void 0,r===void 0?null:r)}function Ll(e,t,n,r){var i=vt();r=r===void 0?null:r;var s=void 0;if(pe!==null){var o=pe.memoizedState;if(s=o.destroy,r!==null&&ud(r,o.deps)){i.memoizedState=Is(t,n,s,r);return}}se.flags|=e,i.memoizedState=Is(1|t,n,s,r)}function gh(e,t){return To(8390656,8,e,t)}function fd(e,t){return Ll(2048,8,e,t)}function bg(e,t){return Ll(4,2,e,t)}function Dg(e,t){return Ll(4,4,e,t)}function Og(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Mg(e,t,n){return n=n!=null?n.concat([e]):null,Ll(4,4,Og.bind(null,t,e),n)}function hd(){}function Lg(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ud(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Fg(e,t){var n=vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ud(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $g(e,t,n){return sr&21?(Dt(n,t)||(n=zm(),se.lanes|=n,or|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ve=!0),e.memoizedState=n)}function d1(e,t){var n=G;G=n!==0&&4>n?n:4,e(!0);var r=Aa.transition;Aa.transition={};try{e(!1),t()}finally{G=n,Aa.transition=r}}function Bg(){return vt().memoizedState}function f1(e,t,n){var r=kn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jg(e))zg(t,n);else if(n=yg(e,t,n,r),n!==null){var i=je();Pt(n,e,r,i),Wg(n,t,r)}}function h1(e,t,n){var r=kn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jg(e))zg(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Dt(l,o)){var a=t.interleaved;a===null?(i.next=i,id(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=yg(e,t,i,r),n!==null&&(i=je(),Pt(n,e,r,i),Wg(n,t,r))}}function jg(e){var t=e.alternate;return e===se||t!==null&&t===se}function zg(e,t){Ji=Zo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wg(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Hc(e,n)}}var el={readContext:_t,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},p1={readContext:_t,useCallback:function(e,t){return Lt().memoizedState=[e,t===void 0?null:t],e},useContext:_t,useEffect:gh,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,To(4194308,4,Og.bind(null,t,e),n)},useLayoutEffect:function(e,t){return To(4194308,4,e,t)},useInsertionEffect:function(e,t){return To(4,2,e,t)},useMemo:function(e,t){var n=Lt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Lt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=f1.bind(null,se,e),[r.memoizedState,e]},useRef:function(e){var t=Lt();return e={current:e},t.memoizedState=e},useState:mh,useDebugValue:hd,useDeferredValue:function(e){return Lt().memoizedState=e},useTransition:function(){var e=mh(!1),t=e[0];return e=d1.bind(null,e[1]),Lt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=se,i=Lt();if(ne){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),xe===null)throw Error(C(349));sr&30||kg(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,gh(Ng.bind(null,r,s,e),[e]),r.flags|=2048,Is(9,Tg.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Lt(),t=xe.identifierPrefix;if(ne){var n=qt,r=Yt;n=(r&~(1<<32-Rt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Cs++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=c1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},m1={readContext:_t,useCallback:Lg,useContext:_t,useEffect:fd,useImperativeHandle:Mg,useInsertionEffect:bg,useLayoutEffect:Dg,useMemo:Fg,useReducer:ba,useRef:Ag,useState:function(){return ba(Ss)},useDebugValue:hd,useDeferredValue:function(e){var t=vt();return $g(t,pe.memoizedState,e)},useTransition:function(){var e=ba(Ss)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ig,useSyncExternalStore:xg,useId:Bg,unstable_isNewReconciler:!1},g1={readContext:_t,useCallback:Lg,useContext:_t,useEffect:fd,useImperativeHandle:Mg,useInsertionEffect:bg,useLayoutEffect:Dg,useMemo:Fg,useReducer:Da,useRef:Ag,useState:function(){return Da(Ss)},useDebugValue:hd,useDeferredValue:function(e){var t=vt();return pe===null?t.memoizedState=e:$g(t,pe.memoizedState,e)},useTransition:function(){var e=Da(Ss)[0],t=vt().memoizedState;return[e,t]},useMutableSource:Ig,useSyncExternalStore:xg,useId:Bg,unstable_isNewReconciler:!1};function li(e,t){try{var n="",r=t;do n+=H0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Oa(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ju(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var y1=typeof WeakMap=="function"?WeakMap:Map;function Ug(e,t,n){n=Zt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,qu=r),ju(e,t)},n}function Hg(e,t,n){n=Zt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ju(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ju(e,t),typeof r!="function"&&(xn===null?xn=new Set([this]):xn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function yh(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new y1;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=A1.bind(null,e,t,n),t.then(e,e))}function _h(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vh(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Zt(-1,1),t.tag=2,In(n,t,1))),n.lanes|=1),e)}var _1=un.ReactCurrentOwner,Ve=!1;function Be(e,t,n,r){t.child=e===null?Cg(t,null,n,r):si(t,e.child,n,r)}function wh(e,t,n,r,i){n=n.render;var s=t.ref;return Yr(t,i),r=cd(e,t,n,r,s,i),n=dd(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(ne&&n&&Jc(t),t.flags|=1,Be(e,t,r,i),t.child)}function Eh(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,Vg(e,t,s,r,i)):(e=Ao(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:gs,n(o,r)&&e.ref===t.ref)return sn(e,t,i)}return t.flags|=1,e=Tn(s,r),e.ref=t.ref,e.return=t,t.child=e}function Vg(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(gs(s,r)&&e.ref===t.ref)if(Ve=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(Ve=!0);else return t.lanes=e.lanes,sn(e,t,i)}return zu(e,t,n,r,i)}function Gg(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(zr,rt),rt|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,X(zr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(zr,rt),rt|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,X(zr,rt),rt|=r;return Be(e,t,i,n),t.child}function Qg(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function zu(e,t,n,r,i){var s=Ye(n)?rr:Fe.current;return s=ri(t,s),Yr(t,i),n=cd(e,t,n,r,s,i),r=dd(),e!==null&&!Ve?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sn(e,t,i)):(ne&&r&&Jc(t),t.flags|=1,Be(e,t,n,i),t.child)}function Ch(e,t,n,r,i){if(Ye(n)){var s=!0;Go(t)}else s=!1;if(Yr(t,i),t.stateNode===null)No(e,t),wg(t,n,r),Bu(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=_t(u):(u=Ye(n)?rr:Fe.current,u=ri(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&hh(t,o,r,u),mn=!1;var f=t.memoizedState;o.state=f,Xo(t,r,o,i),a=t.memoizedState,l!==r||f!==a||Ke.current||mn?(typeof d=="function"&&($u(t,n,d,r),a=t.memoizedState),(l=mn||fh(t,n,l,r,f,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,_g(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:St(t.type,l),o.props=u,c=t.pendingProps,f=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=_t(a):(a=Ye(n)?rr:Fe.current,a=ri(t,a));var h=n.getDerivedStateFromProps;(d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||f!==a)&&hh(t,o,r,a),mn=!1,f=t.memoizedState,o.state=f,Xo(t,r,o,i);var y=t.memoizedState;l!==c||f!==y||Ke.current||mn?(typeof h=="function"&&($u(t,n,h,r),y=t.memoizedState),(u=mn||fh(t,n,u,r,f,y,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Wu(e,t,n,r,s,i)}function Wu(e,t,n,r,i,s){Qg(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&lh(t,n,!1),sn(e,t,s);r=t.stateNode,_1.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=si(t,e.child,null,s),t.child=si(t,null,l,s)):Be(e,t,l,s),t.memoizedState=r.state,i&&lh(t,n,!0),t.child}function Kg(e){var t=e.stateNode;t.pendingContext?oh(e,t.pendingContext,t.pendingContext!==t.context):t.context&&oh(e,t.context,!1),od(e,t.containerInfo)}function Sh(e,t,n,r,i){return ii(),ed(i),t.flags|=256,Be(e,t,n,r),t.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Hu(e){return{baseLanes:e,cachePool:null,transitions:null}}function Yg(e,t,n){var r=t.pendingProps,i=ie.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),X(ie,i&1),e===null)return Lu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,r,0,null),e=er(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=Hu(n),t.memoizedState=Uu,e):pd(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return v1(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Tn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Tn(l,s):(s=er(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?Hu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Uu,r}return s=e.child,e=s.sibling,r=Tn(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function pd(e,t){return t=Bl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function lo(e,t,n,r){return r!==null&&ed(r),si(t,e.child,null,n),e=pd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function v1(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Oa(Error(C(422))),lo(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Bl({mode:"visible",children:r.children},i,0,null),s=er(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&si(t,e.child,null,o),t.child.memoizedState=Hu(o),t.memoizedState=Uu,s);if(!(t.mode&1))return lo(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(C(419)),r=Oa(s,r,void 0),lo(e,t,o,r)}if(l=(o&e.childLanes)!==0,Ve||l){if(r=xe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,rn(e,i),Pt(r,e,i,-1))}return wd(),r=Oa(Error(C(421))),lo(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=b1.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,it=Sn(i.nextSibling),st=t,ne=!0,xt=null,e!==null&&(pt[mt++]=Yt,pt[mt++]=qt,pt[mt++]=ir,Yt=e.id,qt=e.overflow,ir=t),t=pd(t,r.children),t.flags|=4096,t)}function Ih(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fu(e.return,t,n)}function Ma(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function qg(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Be(e,t,r.children,n),r=ie.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ih(e,n,t);else if(e.tag===19)Ih(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(X(ie,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Jo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ma(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ma(t,!0,n,null,s);break;case"together":Ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function No(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),or|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=Tn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Tn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function w1(e,t,n){switch(t.tag){case 3:Kg(t),ii();break;case 5:Sg(t);break;case 1:Ye(t.type)&&Go(t);break;case 4:od(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;X(Yo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(X(ie,ie.current&1),t.flags|=128,null):n&t.child.childLanes?Yg(e,t,n):(X(ie,ie.current&1),e=sn(e,t,n),e!==null?e.sibling:null);X(ie,ie.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qg(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(ie,ie.current),r)break;return null;case 22:case 23:return t.lanes=0,Gg(e,t,n)}return sn(e,t,n)}var Xg,Vu,Jg,Zg;Xg=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vu=function(){};Jg=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Kn(Wt.current);var s=null;switch(n){case"input":i=hu(e,i),r=hu(e,r),s=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),s=[];break;case"textarea":i=gu(e,i),r=gu(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ho)}_u(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(us.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(us.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&J("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};Zg=function(e,t,n,r){n!==r&&(t.flags|=4)};function Mi(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function E1(e,t,n){var r=t.pendingProps;switch(Zc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ye(t.type)&&Vo(),Oe(t),null;case 3:return r=t.stateNode,oi(),te(Ke),te(Fe),ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(so(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(Zu(xt),xt=null))),Vu(e,t),Oe(t),null;case 5:ld(t);var i=Kn(Es.current);if(n=t.type,e!==null&&t.stateNode!=null)Jg(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Oe(t),null}if(e=Kn(Wt.current),so(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[$t]=t,r[vs]=s,e=(t.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Vi.length;i++)J(Vi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":Df(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":Mf(r,s),J("invalid",r)}_u(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&io(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&io(r.textContent,l,e),i=["children",""+l]):us.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":qs(r),Of(r,s,!0);break;case"textarea":qs(r),Lf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ho)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=km(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[$t]=t,e[vs]=r,Xg(e,t,!1,!1),t.stateNode=e;e:{switch(o=vu(n,r),n){case"dialog":J("cancel",e),J("close",e),i=r;break;case"iframe":case"object":case"embed":J("load",e),i=r;break;case"video":case"audio":for(i=0;i<Vi.length;i++)J(Vi[i],e);i=r;break;case"source":J("error",e),i=r;break;case"img":case"image":case"link":J("error",e),J("load",e),i=r;break;case"details":J("toggle",e),i=r;break;case"input":Df(e,r),i=hu(e,r),J("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),J("invalid",e);break;case"textarea":Mf(e,r),i=gu(e,r),J("invalid",e);break;default:i=r}_u(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?Rm(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Tm(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&cs(e,a):typeof a=="number"&&cs(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(us.hasOwnProperty(s)?a!=null&&s==="onScroll"&&J("scroll",e):a!=null&&$c(e,s,a,o))}switch(n){case"input":qs(e),Of(e,r,!1);break;case"textarea":qs(e),Lf(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Dn(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Vr(e,!!r.multiple,s,!1):r.defaultValue!=null&&Vr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ho)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Zg(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=Kn(Es.current),Kn(Wt.current),so(t)){if(r=t.stateNode,n=t.memoizedProps,r[$t]=t,(s=r.nodeValue!==n)&&(e=st,e!==null))switch(e.tag){case 3:io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&io(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[$t]=t,t.stateNode=r}return Oe(t),null;case 13:if(te(ie),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&it!==null&&t.mode&1&&!(t.flags&128))gg(),ii(),t.flags|=98560,s=!1;else if(s=so(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(C(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(C(317));s[$t]=t}else ii(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Oe(t),s=!1}else xt!==null&&(Zu(xt),xt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ie.current&1?ge===0&&(ge=3):wd())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return oi(),Vu(e,t),e===null&&ys(t.stateNode.containerInfo),Oe(t),null;case 10:return rd(t.type._context),Oe(t),null;case 17:return Ye(t.type)&&Vo(),Oe(t),null;case 19:if(te(ie),s=t.memoizedState,s===null)return Oe(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)Mi(s,!1);else{if(ge!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Jo(e),o!==null){for(t.flags|=128,Mi(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return X(ie,ie.current&1|2),t.child}e=e.sibling}s.tail!==null&&ce()>ai&&(t.flags|=128,r=!0,Mi(s,!1),t.lanes=4194304)}else{if(!r)if(e=Jo(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Oe(t),null}else 2*ce()-s.renderingStartTime>ai&&n!==1073741824&&(t.flags|=128,r=!0,Mi(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ce(),t.sibling=null,n=ie.current,X(ie,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return vd(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function C1(e,t){switch(Zc(t),t.tag){case 1:return Ye(t.type)&&Vo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oi(),te(Ke),te(Fe),ad(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ld(t),null;case 13:if(te(ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));ii()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(ie),null;case 4:return oi(),null;case 10:return rd(t.type._context),null;case 22:case 23:return vd(),null;case 24:return null;default:return null}}var ao=!1,Me=!1,S1=typeof WeakSet=="function"?WeakSet:Set,N=null;function jr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){le(e,t,r)}else n.current=null}function Gu(e,t,n){try{n()}catch(r){le(e,t,r)}}var xh=!1;function I1(e,t){if(Ru=zo,e=rg(),Xc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=e,f=null;t:for(;;){for(var h;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(h=c.firstChild)!==null;)f=c,c=h;for(;;){if(c===e)break t;if(f===n&&++u===i&&(l=o),f===s&&++d===r&&(a=o),(h=c.nextSibling)!==null)break;c=f,f=c.parentNode}c=h}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pu={focusedElem:e,selectionRange:n},zo=!1,N=t;N!==null;)if(t=N,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,N=e;else for(;N!==null;){t=N;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,x=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?_:St(t.type,_),x);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(v){le(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,N=e;break}N=t.return}return y=xh,xh=!1,y}function Zi(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&Gu(t,n,s)}i=i.next}while(i!==r)}}function Fl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Qu(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ey(e){var t=e.alternate;t!==null&&(e.alternate=null,ey(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[$t],delete t[vs],delete t[Du],delete t[o1],delete t[l1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ty(e){return e.tag===5||e.tag===3||e.tag===4}function kh(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ty(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ku(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ho));else if(r!==4&&(e=e.child,e!==null))for(Ku(e,t,n),e=e.sibling;e!==null;)Ku(e,t,n),e=e.sibling}function Yu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yu(e,t,n),e=e.sibling;e!==null;)Yu(e,t,n),e=e.sibling}var ke=null,It=!1;function fn(e,t,n){for(n=n.child;n!==null;)ny(e,t,n),n=n.sibling}function ny(e,t,n){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Rl,n)}catch{}switch(n.tag){case 5:Me||jr(n,t);case 6:var r=ke,i=It;ke=null,fn(e,t,n),ke=r,It=i,ke!==null&&(It?(e=ke,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ke.removeChild(n.stateNode));break;case 18:ke!==null&&(It?(e=ke,n=n.stateNode,e.nodeType===8?Na(e.parentNode,n):e.nodeType===1&&Na(e,n),ps(e)):Na(ke,n.stateNode));break;case 4:r=ke,i=It,ke=n.stateNode.containerInfo,It=!0,fn(e,t,n),ke=r,It=i;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Gu(n,t,o),i=i.next}while(i!==r)}fn(e,t,n);break;case 1:if(!Me&&(jr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){le(n,t,l)}fn(e,t,n);break;case 21:fn(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,fn(e,t,n),Me=r):fn(e,t,n);break;default:fn(e,t,n)}}function Th(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new S1),t.forEach(function(r){var i=D1.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ct(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:ke=l.stateNode,It=!1;break e;case 3:ke=l.stateNode.containerInfo,It=!0;break e;case 4:ke=l.stateNode.containerInfo,It=!0;break e}l=l.return}if(ke===null)throw Error(C(160));ny(s,o,i),ke=null,It=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){le(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ry(t,e),t=t.sibling}function ry(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Ct(t,e),Mt(e),r&4){try{Zi(3,e,e.return),Fl(3,e)}catch(_){le(e,e.return,_)}try{Zi(5,e,e.return)}catch(_){le(e,e.return,_)}}break;case 1:Ct(t,e),Mt(e),r&512&&n!==null&&jr(n,n.return);break;case 5:if(Ct(t,e),Mt(e),r&512&&n!==null&&jr(n,n.return),e.flags&32){var i=e.stateNode;try{cs(i,"")}catch(_){le(e,e.return,_)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Im(i,s),vu(l,o);var u=vu(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?Rm(i,c):d==="dangerouslySetInnerHTML"?Tm(i,c):d==="children"?cs(i,c):$c(i,d,c,u)}switch(l){case"input":pu(i,s);break;case"textarea":xm(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var h=s.value;h!=null?Vr(i,!!s.multiple,h,!1):f!==!!s.multiple&&(s.defaultValue!=null?Vr(i,!!s.multiple,s.defaultValue,!0):Vr(i,!!s.multiple,s.multiple?[]:"",!1))}i[vs]=s}catch(_){le(e,e.return,_)}}break;case 6:if(Ct(t,e),Mt(e),r&4){if(e.stateNode===null)throw Error(C(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(_){le(e,e.return,_)}}break;case 3:if(Ct(t,e),Mt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ps(t.containerInfo)}catch(_){le(e,e.return,_)}break;case 4:Ct(t,e),Mt(e);break;case 13:Ct(t,e),Mt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(yd=ce())),r&4&&Th(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(u=Me)||d,Ct(t,e),Me=u):Ct(t,e),Mt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(N=e,d=e.child;d!==null;){for(c=N=d;N!==null;){switch(f=N,h=f.child,f.tag){case 0:case 11:case 14:case 15:Zi(4,f,f.return);break;case 1:jr(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(_){le(r,n,_)}}break;case 5:jr(f,f.return);break;case 22:if(f.memoizedState!==null){Rh(c);continue}}h!==null?(h.return=f,N=h):Rh(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Nm("display",o))}catch(_){le(e,e.return,_)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(_){le(e,e.return,_)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Ct(t,e),Mt(e),r&4&&Th(e);break;case 21:break;default:Ct(t,e),Mt(e)}}function Mt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(ty(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(cs(i,""),r.flags&=-33);var s=kh(e);Yu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=kh(e);Ku(e,l,o);break;default:throw Error(C(161))}}catch(a){le(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function x1(e,t,n){N=e,iy(e)}function iy(e,t,n){for(var r=(e.mode&1)!==0;N!==null;){var i=N,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ao;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Me;l=ao;var u=Me;if(ao=o,(Me=a)&&!u)for(N=i;N!==null;)o=N,a=o.child,o.tag===22&&o.memoizedState!==null?Ph(i):a!==null?(a.return=o,N=a):Ph(i);for(;s!==null;)N=s,iy(s),s=s.sibling;N=i,ao=l,Me=u}Nh(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,N=s):Nh(e)}}function Nh(e){for(;N!==null;){var t=N;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Me||Fl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:St(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&dh(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}dh(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&ps(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Me||t.flags&512&&Qu(t)}catch(f){le(t,t.return,f)}}if(t===e){N=null;break}if(n=t.sibling,n!==null){n.return=t.return,N=n;break}N=t.return}}function Rh(e){for(;N!==null;){var t=N;if(t===e){N=null;break}var n=t.sibling;if(n!==null){n.return=t.return,N=n;break}N=t.return}}function Ph(e){for(;N!==null;){var t=N;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Fl(4,t)}catch(a){le(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){le(t,i,a)}}var s=t.return;try{Qu(t)}catch(a){le(t,s,a)}break;case 5:var o=t.return;try{Qu(t)}catch(a){le(t,o,a)}}}catch(a){le(t,t.return,a)}if(t===e){N=null;break}var l=t.sibling;if(l!==null){l.return=t.return,N=l;break}N=t.return}}var k1=Math.ceil,tl=un.ReactCurrentDispatcher,md=un.ReactCurrentOwner,yt=un.ReactCurrentBatchConfig,W=0,xe=null,he=null,Ne=0,rt=0,zr=Bn(0),ge=0,xs=null,or=0,$l=0,gd=0,es=null,He=null,yd=0,ai=1/0,Gt=null,nl=!1,qu=null,xn=null,uo=!1,vn=null,rl=0,ts=0,Xu=null,Ro=-1,Po=0;function je(){return W&6?ce():Ro!==-1?Ro:Ro=ce()}function kn(e){return e.mode&1?W&2&&Ne!==0?Ne&-Ne:u1.transition!==null?(Po===0&&(Po=zm()),Po):(e=G,e!==0||(e=window.event,e=e===void 0?16:Km(e.type)),e):1}function Pt(e,t,n,r){if(50<ts)throw ts=0,Xu=null,Error(C(185));Fs(e,n,r),(!(W&2)||e!==xe)&&(e===xe&&(!(W&2)&&($l|=n),ge===4&&yn(e,Ne)),qe(e,r),n===1&&W===0&&!(t.mode&1)&&(ai=ce()+500,Ol&&jn()))}function qe(e,t){var n=e.callbackNode;uw(e,t);var r=jo(e,e===xe?Ne:0);if(r===0)n!==null&&Bf(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Bf(n),t===1)e.tag===0?a1(Ah.bind(null,e)):hg(Ah.bind(null,e)),i1(function(){!(W&6)&&jn()}),n=null;else{switch(Wm(r)){case 1:n=Uc;break;case 4:n=Bm;break;case 16:n=Bo;break;case 536870912:n=jm;break;default:n=Bo}n=fy(n,sy.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function sy(e,t){if(Ro=-1,Po=0,W&6)throw Error(C(327));var n=e.callbackNode;if(qr()&&e.callbackNode!==n)return null;var r=jo(e,e===xe?Ne:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=il(e,r);else{t=r;var i=W;W|=2;var s=ly();(xe!==e||Ne!==t)&&(Gt=null,ai=ce()+500,Zn(e,t));do try{R1();break}catch(l){oy(e,l)}while(1);nd(),tl.current=s,W=i,he!==null?t=0:(xe=null,Ne=0,t=ge)}if(t!==0){if(t===2&&(i=Iu(e),i!==0&&(r=i,t=Ju(e,i))),t===1)throw n=xs,Zn(e,0),yn(e,r),qe(e,ce()),n;if(t===6)yn(e,r);else{if(i=e.current.alternate,!(r&30)&&!T1(i)&&(t=il(e,r),t===2&&(s=Iu(e),s!==0&&(r=s,t=Ju(e,s))),t===1))throw n=xs,Zn(e,0),yn(e,r),qe(e,ce()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:Un(e,He,Gt);break;case 3:if(yn(e,r),(r&130023424)===r&&(t=yd+500-ce(),10<t)){if(jo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){je(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=bu(Un.bind(null,e,He,Gt),t);break}Un(e,He,Gt);break;case 4:if(yn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Rt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ce()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*k1(r/1960))-r,10<r){e.timeoutHandle=bu(Un.bind(null,e,He,Gt),r);break}Un(e,He,Gt);break;case 5:Un(e,He,Gt);break;default:throw Error(C(329))}}}return qe(e,ce()),e.callbackNode===n?sy.bind(null,e):null}function Ju(e,t){var n=es;return e.current.memoizedState.isDehydrated&&(Zn(e,t).flags|=256),e=il(e,t),e!==2&&(t=He,He=n,t!==null&&Zu(t)),e}function Zu(e){He===null?He=e:He.push.apply(He,e)}function T1(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Dt(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function yn(e,t){for(t&=~gd,t&=~$l,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Rt(t),r=1<<n;e[n]=-1,t&=~r}}function Ah(e){if(W&6)throw Error(C(327));qr();var t=jo(e,0);if(!(t&1))return qe(e,ce()),null;var n=il(e,t);if(e.tag!==0&&n===2){var r=Iu(e);r!==0&&(t=r,n=Ju(e,r))}if(n===1)throw n=xs,Zn(e,0),yn(e,t),qe(e,ce()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Un(e,He,Gt),qe(e,ce()),null}function _d(e,t){var n=W;W|=1;try{return e(t)}finally{W=n,W===0&&(ai=ce()+500,Ol&&jn())}}function lr(e){vn!==null&&vn.tag===0&&!(W&6)&&qr();var t=W;W|=1;var n=yt.transition,r=G;try{if(yt.transition=null,G=1,e)return e()}finally{G=r,yt.transition=n,W=t,!(W&6)&&jn()}}function vd(){rt=zr.current,te(zr)}function Zn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,r1(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(Zc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vo();break;case 3:oi(),te(Ke),te(Fe),ad();break;case 5:ld(r);break;case 4:oi();break;case 13:te(ie);break;case 19:te(ie);break;case 10:rd(r.type._context);break;case 22:case 23:vd()}n=n.return}if(xe=e,he=e=Tn(e.current,null),Ne=rt=t,ge=0,xs=null,gd=$l=or=0,He=es=null,Qn!==null){for(t=0;t<Qn.length;t++)if(n=Qn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Qn=null}return e}function oy(e,t){do{var n=he;try{if(nd(),ko.current=el,Zo){for(var r=se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Zo=!1}if(sr=0,we=pe=se=null,Ji=!1,Cs=0,md.current=null,n===null||n.return===null){ge=1,xs=t,he=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=Ne,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=_h(o);if(h!==null){h.flags&=-257,vh(h,o,l,s,t),h.mode&1&&yh(s,u,t),t=h,a=u;var y=t.updateQueue;if(y===null){var _=new Set;_.add(a),t.updateQueue=_}else y.add(a);break e}else{if(!(t&1)){yh(s,u,t),wd();break e}a=Error(C(426))}}else if(ne&&l.mode&1){var x=_h(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),vh(x,o,l,s,t),ed(li(a,l));break e}}s=a=li(a,l),ge!==4&&(ge=2),es===null?es=[s]:es.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var m=Ug(s,a,t);ch(s,m);break e;case 1:l=a;var p=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(xn===null||!xn.has(g)))){s.flags|=65536,t&=-t,s.lanes|=t;var v=Hg(s,l,t);ch(s,v);break e}}s=s.return}while(s!==null)}uy(n)}catch(E){t=E,he===n&&n!==null&&(he=n=n.return);continue}break}while(1)}function ly(){var e=tl.current;return tl.current=el,e===null?el:e}function wd(){(ge===0||ge===3||ge===2)&&(ge=4),xe===null||!(or&268435455)&&!($l&268435455)||yn(xe,Ne)}function il(e,t){var n=W;W|=2;var r=ly();(xe!==e||Ne!==t)&&(Gt=null,Zn(e,t));do try{N1();break}catch(i){oy(e,i)}while(1);if(nd(),W=n,tl.current=r,he!==null)throw Error(C(261));return xe=null,Ne=0,ge}function N1(){for(;he!==null;)ay(he)}function R1(){for(;he!==null&&!ew();)ay(he)}function ay(e){var t=dy(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?uy(e):he=t,md.current=null}function uy(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=C1(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ge=6,he=null;return}}else if(n=E1(n,t,rt),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ge===0&&(ge=5)}function Un(e,t,n){var r=G,i=yt.transition;try{yt.transition=null,G=1,P1(e,t,n,r)}finally{yt.transition=i,G=r}return null}function P1(e,t,n,r){do qr();while(vn!==null);if(W&6)throw Error(C(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(cw(e,s),e===xe&&(he=xe=null,Ne=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,fy(Bo,function(){return qr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=yt.transition,yt.transition=null;var o=G;G=1;var l=W;W|=4,md.current=null,I1(e,n),ry(n,e),qw(Pu),zo=!!Ru,Pu=Ru=null,e.current=n,x1(n),tw(),W=l,G=o,yt.transition=s}else e.current=n;if(uo&&(uo=!1,vn=e,rl=i),s=e.pendingLanes,s===0&&(xn=null),iw(n.stateNode),qe(e,ce()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nl)throw nl=!1,e=qu,qu=null,e;return rl&1&&e.tag!==0&&qr(),s=e.pendingLanes,s&1?e===Xu?ts++:(ts=0,Xu=e):ts=0,jn(),null}function qr(){if(vn!==null){var e=Wm(rl),t=yt.transition,n=G;try{if(yt.transition=null,G=16>e?16:e,vn===null)var r=!1;else{if(e=vn,vn=null,rl=0,W&6)throw Error(C(331));var i=W;for(W|=4,N=e.current;N!==null;){var s=N,o=s.child;if(N.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(N=u;N!==null;){var d=N;switch(d.tag){case 0:case 11:case 15:Zi(8,d,s)}var c=d.child;if(c!==null)c.return=d,N=c;else for(;N!==null;){d=N;var f=d.sibling,h=d.return;if(ey(d),d===u){N=null;break}if(f!==null){f.return=h,N=f;break}N=h}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var x=_.sibling;_.sibling=null,_=x}while(_!==null)}}N=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,N=o;else e:for(;N!==null;){if(s=N,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Zi(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,N=m;break e}N=s.return}}var p=e.current;for(N=p;N!==null;){o=N;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,N=g;else e:for(o=p;N!==null;){if(l=N,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Fl(9,l)}}catch(E){le(l,l.return,E)}if(l===o){N=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,N=v;break e}N=l.return}}if(W=i,jn(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Rl,e)}catch{}r=!0}return r}finally{G=n,yt.transition=t}}return!1}function bh(e,t,n){t=li(n,t),t=Ug(e,t,1),e=In(e,t,1),t=je(),e!==null&&(Fs(e,1,t),qe(e,t))}function le(e,t,n){if(e.tag===3)bh(e,e,n);else for(;t!==null;){if(t.tag===3){bh(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(xn===null||!xn.has(r))){e=li(n,e),e=Hg(t,e,1),t=In(t,e,1),e=je(),t!==null&&(Fs(t,1,e),qe(t,e));break}}t=t.return}}function A1(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=je(),e.pingedLanes|=e.suspendedLanes&n,xe===e&&(Ne&n)===n&&(ge===4||ge===3&&(Ne&130023424)===Ne&&500>ce()-yd?Zn(e,0):gd|=n),qe(e,t)}function cy(e,t){t===0&&(e.mode&1?(t=Zs,Zs<<=1,!(Zs&130023424)&&(Zs=4194304)):t=1);var n=je();e=rn(e,t),e!==null&&(Fs(e,t,n),qe(e,n))}function b1(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cy(e,n)}function D1(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),cy(e,n)}var dy;dy=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ve=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ve=!1,w1(e,t,n);Ve=!!(e.flags&131072)}else Ve=!1,ne&&t.flags&1048576&&pg(t,Ko,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;No(e,t),e=t.pendingProps;var i=ri(t,Fe.current);Yr(t,n),i=cd(null,t,r,e,i,n);var s=dd();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(s=!0,Go(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,sd(t),i.updater=Ml,t.stateNode=i,i._reactInternals=t,Bu(t,r,e,n),t=Wu(null,t,r,!0,s,n)):(t.tag=0,ne&&s&&Jc(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(No(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=M1(r),e=St(r,e),i){case 0:t=zu(null,t,r,e,n);break e;case 1:t=Ch(null,t,r,e,n);break e;case 11:t=wh(null,t,r,e,n);break e;case 14:t=Eh(null,t,r,St(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),zu(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),Ch(e,t,r,i,n);case 3:e:{if(Kg(t),e===null)throw Error(C(387));r=t.pendingProps,s=t.memoizedState,i=s.element,_g(e,t),Xo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=li(Error(C(423)),t),t=Sh(e,t,r,n,i);break e}else if(r!==i){i=li(Error(C(424)),t),t=Sh(e,t,r,n,i);break e}else for(it=Sn(t.stateNode.containerInfo.firstChild),st=t,ne=!0,xt=null,n=Cg(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ii(),r===i){t=sn(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Sg(t),e===null&&Lu(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Au(r,i)?o=null:s!==null&&Au(r,s)&&(t.flags|=32),Qg(e,t),Be(e,t,o,n),t.child;case 6:return e===null&&Lu(t),null;case 13:return Yg(e,t,n);case 4:return od(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=si(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),wh(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,X(Yo,r._currentValue),r._currentValue=o,s!==null)if(Dt(s.value,o)){if(s.children===i.children&&!Ke.current){t=sn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Zt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Fu(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(C(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Fu(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Yr(t,n),i=_t(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=St(r,t.pendingProps),i=St(r.type,i),Eh(e,t,r,i,n);case 15:return Vg(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:St(r,i),No(e,t),t.tag=1,Ye(r)?(e=!0,Go(t)):e=!1,Yr(t,n),wg(t,r,i),Bu(t,r,i,n),Wu(null,t,r,!0,e,n);case 19:return qg(e,t,n);case 22:return Gg(e,t,n)}throw Error(C(156,t.tag))};function fy(e,t){return $m(e,t)}function O1(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gt(e,t,n,r){return new O1(e,t,n,r)}function Ed(e){return e=e.prototype,!(!e||!e.isReactComponent)}function M1(e){if(typeof e=="function")return Ed(e)?1:0;if(e!=null){if(e=e.$$typeof,e===jc)return 11;if(e===zc)return 14}return 2}function Tn(e,t){var n=e.alternate;return n===null?(n=gt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ao(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Ed(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ar:return er(n.children,i,s,t);case Bc:o=8,i|=8;break;case uu:return e=gt(12,n,t,i|2),e.elementType=uu,e.lanes=s,e;case cu:return e=gt(13,n,t,i),e.elementType=cu,e.lanes=s,e;case du:return e=gt(19,n,t,i),e.elementType=du,e.lanes=s,e;case Em:return Bl(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vm:o=10;break e;case wm:o=9;break e;case jc:o=11;break e;case zc:o=14;break e;case pn:o=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=gt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function er(e,t,n,r){return e=gt(7,e,r,t),e.lanes=n,e}function Bl(e,t,n,r){return e=gt(22,e,r,t),e.elementType=Em,e.lanes=n,e.stateNode={isHidden:!1},e}function La(e,t,n){return e=gt(6,e,null,t),e.lanes=n,e}function Fa(e,t,n){return t=gt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function L1(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ya(0),this.expirationTimes=ya(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ya(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Cd(e,t,n,r,i,s,o,l,a){return e=new L1(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=gt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sd(s),e}function F1(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function hy(e){if(!e)return On;e=e._reactInternals;e:{if(Er(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ye(n))return fg(e,n,t)}return t}function py(e,t,n,r,i,s,o,l,a){return e=Cd(n,r,!0,e,i,s,o,l,a),e.context=hy(null),n=e.current,r=je(),i=kn(n),s=Zt(r,i),s.callback=t??null,In(n,s,i),e.current.lanes=i,Fs(e,i,r),qe(e,r),e}function jl(e,t,n,r){var i=t.current,s=je(),o=kn(i);return n=hy(n),t.context===null?t.context=n:t.pendingContext=n,t=Zt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=In(i,t,o),e!==null&&(Pt(e,i,o,s),xo(e,i,o)),o}function sl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Dh(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Sd(e,t){Dh(e,t),(e=e.alternate)&&Dh(e,t)}function $1(){return null}var my=typeof reportError=="function"?reportError:function(e){console.error(e)};function Id(e){this._internalRoot=e}zl.prototype.render=Id.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));jl(e,t,null,null)};zl.prototype.unmount=Id.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;lr(function(){jl(null,e,null,null)}),t[nn]=null}};function zl(e){this._internalRoot=e}zl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Vm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gn.length&&t!==0&&t<gn[n].priority;n++);gn.splice(n,0,e),n===0&&Qm(e)}};function xd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Wl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oh(){}function B1(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=sl(o);s.call(u)}}var o=py(t,r,e,0,null,!1,!1,"",Oh);return e._reactRootContainer=o,e[nn]=o.current,ys(e.nodeType===8?e.parentNode:e),lr(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=sl(a);l.call(u)}}var a=Cd(e,0,!1,null,null,!1,!1,"",Oh);return e._reactRootContainer=a,e[nn]=a.current,ys(e.nodeType===8?e.parentNode:e),lr(function(){jl(t,a,n,r)}),a}function Ul(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=sl(o);l.call(a)}}jl(t,o,e,i)}else o=B1(n,t,e,i,r);return sl(o)}Um=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hi(t.pendingLanes);n!==0&&(Hc(t,n|1),qe(t,ce()),!(W&6)&&(ai=ce()+500,jn()))}break;case 13:lr(function(){var r=rn(e,1);if(r!==null){var i=je();Pt(r,e,1,i)}}),Sd(e,1)}};Vc=function(e){if(e.tag===13){var t=rn(e,134217728);if(t!==null){var n=je();Pt(t,e,134217728,n)}Sd(e,134217728)}};Hm=function(e){if(e.tag===13){var t=kn(e),n=rn(e,t);if(n!==null){var r=je();Pt(n,e,t,r)}Sd(e,t)}};Vm=function(){return G};Gm=function(e,t){var n=G;try{return G=e,t()}finally{G=n}};Eu=function(e,t,n){switch(t){case"input":if(pu(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Dl(r);if(!i)throw Error(C(90));Sm(r),pu(r,i)}}}break;case"textarea":xm(e,n);break;case"select":t=n.value,t!=null&&Vr(e,!!n.multiple,t,!1)}};bm=_d;Dm=lr;var j1={usingClientEntryPoint:!1,Events:[Bs,Mr,Dl,Pm,Am,_d]},Li={findFiberByHostInstance:Gn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},z1={bundleType:Li.bundleType,version:Li.version,rendererPackageName:Li.rendererPackageName,rendererConfig:Li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:un.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Lm(e),e===null?null:e.stateNode},findFiberByHostInstance:Li.findFiberByHostInstance||$1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!co.isDisabled&&co.supportsFiber)try{Rl=co.inject(z1),zt=co}catch{}}at.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j1;at.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xd(t))throw Error(C(200));return F1(e,t,null,n)};at.createRoot=function(e,t){if(!xd(e))throw Error(C(299));var n=!1,r="",i=my;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Cd(e,1,!1,null,null,n,!1,r,i),e[nn]=t.current,ys(e.nodeType===8?e.parentNode:e),new Id(t)};at.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=Lm(t),e=e===null?null:e.stateNode,e};at.flushSync=function(e){return lr(e)};at.hydrate=function(e,t,n){if(!Wl(t))throw Error(C(200));return Ul(null,e,t,!0,n)};at.hydrateRoot=function(e,t,n){if(!xd(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=my;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=py(t,null,e,1,n??null,i,!1,s,o),e[nn]=t.current,ys(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new zl(t)};at.render=function(e,t,n){if(!Wl(t))throw Error(C(200));return Ul(null,e,t,!1,n)};at.unmountComponentAtNode=function(e){if(!Wl(e))throw Error(C(40));return e._reactRootContainer?(lr(function(){Ul(null,null,e,!1,function(){e._reactRootContainer=null,e[nn]=null})}),!0):!1};at.unstable_batchedUpdates=_d;at.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Wl(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Ul(e,t,n,!1,r)};at.version="18.2.0-next-9e3b772b8-20220608";function gy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(gy)}catch(e){console.error(e)}}gy(),pm.exports=at;var W1=pm.exports,Mh=W1;lu.createRoot=Mh.createRoot,lu.hydrateRoot=Mh.hydrateRoot;var Ie=function(){return Ie=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(t[s]=n[s])}return t},Ie.apply(this,arguments)};function ui(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,s;r<i;r++)(s||!(r in t))&&(s||(s=Array.prototype.slice.call(t,0,r)),s[r]=t[r]);return e.concat(s||Array.prototype.slice.call(t))}var Z="-ms-",ns="-moz-",H="-webkit-",yy="comm",Hl="rule",kd="decl",U1="@import",_y="@keyframes",H1="@layer",V1=Math.abs,Td=String.fromCharCode,G1=Object.assign;function Q1(e,t){return Ee(e,0)^45?(((t<<2^Ee(e,0))<<2^Ee(e,1))<<2^Ee(e,2))<<2^Ee(e,3):0}function vy(e){return e.trim()}function hn(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function bo(e,t){return e.indexOf(t)}function Ee(e,t){return e.charCodeAt(t)|0}function ci(e,t,n){return e.slice(t,n)}function Kt(e){return e.length}function Nd(e){return e.length}function fo(e,t){return t.push(e),e}function K1(e,t){return e.map(t).join("")}var Vl=1,di=1,wy=0,wt=0,fe=0,Si="";function Gl(e,t,n,r,i,s,o){return{value:e,root:t,parent:n,type:r,props:i,children:s,line:Vl,column:di,length:o,return:""}}function Fi(e,t){return G1(Gl("",null,null,"",null,null,0),e,{length:-e.length},t)}function Y1(){return fe}function q1(){return fe=wt>0?Ee(Si,--wt):0,di--,fe===10&&(di=1,Vl--),fe}function At(){return fe=wt<wy?Ee(Si,wt++):0,di++,fe===10&&(di=1,Vl++),fe}function tr(){return Ee(Si,wt)}function Do(){return wt}function Ql(e,t){return ci(Si,e,t)}function ec(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function X1(e){return Vl=di=1,wy=Kt(Si=e),wt=0,[]}function J1(e){return Si="",e}function $a(e){return vy(Ql(wt-1,tc(e===91?e+2:e===40?e+1:e)))}function Z1(e){for(;(fe=tr())&&fe<33;)At();return ec(e)>2||ec(fe)>3?"":" "}function eE(e,t){for(;--t&&At()&&!(fe<48||fe>102||fe>57&&fe<65||fe>70&&fe<97););return Ql(e,Do()+(t<6&&tr()==32&&At()==32))}function tc(e){for(;At();)switch(fe){case e:return wt;case 34:case 39:e!==34&&e!==39&&tc(fe);break;case 40:e===41&&tc(e);break;case 92:At();break}return wt}function tE(e,t){for(;At()&&e+fe!==47+10;)if(e+fe===42+42&&tr()===47)break;return"/*"+Ql(t,wt-1)+"*"+Td(e===47?e:At())}function nE(e){for(;!ec(tr());)At();return Ql(e,wt)}function rE(e){return J1(Oo("",null,null,null,[""],e=X1(e),0,[0],e))}function Oo(e,t,n,r,i,s,o,l,a){for(var u=0,d=0,c=o,f=0,h=0,y=0,_=1,x=1,m=1,p=0,g="",v=i,E=s,S=r,w=g;x;)switch(y=p,p=At()){case 40:if(y!=108&&Ee(w,c-1)==58){bo(w+=M($a(p),"&","&\f"),"&\f")!=-1&&(m=-1);break}case 34:case 39:case 91:w+=$a(p);break;case 9:case 10:case 13:case 32:w+=Z1(y);break;case 92:w+=eE(Do()-1,7);continue;case 47:switch(tr()){case 42:case 47:fo(iE(tE(At(),Do()),t,n),a);break;default:w+="/"}break;case 123*_:l[u++]=Kt(w)*m;case 125*_:case 59:case 0:switch(p){case 0:case 125:x=0;case 59+d:m==-1&&(w=M(w,/\f/g,"")),h>0&&Kt(w)-c&&fo(h>32?Fh(w+";",r,n,c-1):Fh(M(w," ","")+";",r,n,c-2),a);break;case 59:w+=";";default:if(fo(S=Lh(w,t,n,u,d,i,l,g,v=[],E=[],c),s),p===123)if(d===0)Oo(w,t,S,S,v,s,c,l,E);else switch(f===99&&Ee(w,3)===110?100:f){case 100:case 108:case 109:case 115:Oo(e,S,S,r&&fo(Lh(e,S,S,0,0,i,l,g,i,v=[],c),E),i,E,c,l,r?v:E);break;default:Oo(w,S,S,S,[""],E,0,l,E)}}u=d=h=0,_=m=1,g=w="",c=o;break;case 58:c=1+Kt(w),h=y;default:if(_<1){if(p==123)--_;else if(p==125&&_++==0&&q1()==125)continue}switch(w+=Td(p),p*_){case 38:m=d>0?1:(w+="\f",-1);break;case 44:l[u++]=(Kt(w)-1)*m,m=1;break;case 64:tr()===45&&(w+=$a(At())),f=tr(),d=c=Kt(g=w+=nE(Do())),p++;break;case 45:y===45&&Kt(w)==2&&(_=0)}}return s}function Lh(e,t,n,r,i,s,o,l,a,u,d){for(var c=i-1,f=i===0?s:[""],h=Nd(f),y=0,_=0,x=0;y<r;++y)for(var m=0,p=ci(e,c+1,c=V1(_=o[y])),g=e;m<h;++m)(g=vy(_>0?f[m]+" "+p:M(p,/&\f/g,f[m])))&&(a[x++]=g);return Gl(e,t,n,i===0?Hl:l,a,u,d)}function iE(e,t,n){return Gl(e,t,n,yy,Td(Y1()),ci(e,2,-2),0)}function Fh(e,t,n,r){return Gl(e,t,n,kd,ci(e,0,r),ci(e,r+1,-1),r)}function Ey(e,t,n){switch(Q1(e,t)){case 5103:return H+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return H+e+e;case 4789:return ns+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return H+e+ns+e+Z+e+e;case 5936:switch(Ee(e,t+11)){case 114:return H+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return H+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return H+e+Z+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return H+e+Z+e+e;case 6165:return H+e+Z+"flex-"+e+e;case 5187:return H+e+M(e,/(\w+).+(:[^]+)/,H+"box-$1$2"+Z+"flex-$1$2")+e;case 5443:return H+e+Z+"flex-item-"+M(e,/flex-|-self/g,"")+(hn(e,/flex-|baseline/)?"":Z+"grid-row-"+M(e,/flex-|-self/g,""))+e;case 4675:return H+e+Z+"flex-line-pack"+M(e,/align-content|flex-|-self/g,"")+e;case 5548:return H+e+Z+M(e,"shrink","negative")+e;case 5292:return H+e+Z+M(e,"basis","preferred-size")+e;case 6060:return H+"box-"+M(e,"-grow","")+H+e+Z+M(e,"grow","positive")+e;case 4554:return H+M(e,/([^-])(transform)/g,"$1"+H+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,H+"$1"),/(image-set)/,H+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,H+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,H+"box-pack:$3"+Z+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+H+e+e;case 4200:if(!hn(e,/flex-|baseline/))return Z+"grid-column-align"+ci(e,t)+e;break;case 2592:case 3360:return Z+M(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,hn(r.props,/grid-\w+-end/)})?~bo(e+(n=n[t].value),"span")?e:Z+M(e,"-start","")+e+Z+"grid-row-span:"+(~bo(n,"span")?hn(n,/\d+/):+hn(n,/\d+/)-+hn(e,/\d+/))+";":Z+M(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return hn(r.props,/grid-\w+-start/)})?e:Z+M(M(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,H+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kt(e)-1-t>6)switch(Ee(e,t+1)){case 109:if(Ee(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+H+"$2-$3$1"+ns+(Ee(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~bo(e,"stretch")?Ey(M(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return M(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,s,o,l,a,u){return Z+i+":"+s+u+(o?Z+i+"-span:"+(l?a:+a-+s)+u:"")+e});case 4949:if(Ee(e,t+6)===121)return M(e,":",":"+H)+e;break;case 6444:switch(Ee(e,Ee(e,14)===45?18:11)){case 120:return M(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+H+(Ee(e,14)===45?"inline-":"")+"box$3$1"+H+"$2$3$1"+Z+"$2box$3")+e;case 100:return M(e,":",":"+Z)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return M(e,"scroll-","scroll-snap-")+e}return e}function rs(e,t){for(var n="",r=Nd(e),i=0;i<r;i++)n+=t(e[i],i,e,t)||"";return n}function sE(e,t,n,r){switch(e.type){case H1:if(e.children.length)break;case U1:case kd:return e.return=e.return||e.value;case yy:return"";case _y:return e.return=e.value+"{"+rs(e.children,r)+"}";case Hl:e.value=e.props.join(",")}return Kt(n=rs(e.children,r))?e.return=e.value+"{"+n+"}":""}function oE(e){var t=Nd(e);return function(n,r,i,s){for(var o="",l=0;l<t;l++)o+=e[l](n,r,i,s)||"";return o}}function lE(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case kd:e.return=Ey(e.value,e.length,n);return;case _y:return rs([Fi(e,{value:M(e.value,"@","@"+H)})],r);case Hl:if(e.length)return K1(e.props,function(i){switch(hn(i,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return rs([Fi(e,{props:[M(i,/:(read-\w+)/,":"+ns+"$1")]})],r);case"::placeholder":return rs([Fi(e,{props:[M(i,/:(plac\w+)/,":"+H+"input-$1")]}),Fi(e,{props:[M(i,/:(plac\w+)/,":"+ns+"$1")]}),Fi(e,{props:[M(i,/:(plac\w+)/,Z+"input-$1")]})],r)}return""})}}var aE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},fi=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Rd=typeof window<"u"&&"HTMLElement"in window,uE=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),cE={},Pd=Object.freeze([]),ar=Object.freeze({});function Cy(e,t,n){return n===void 0&&(n=ar),e.theme!==n.theme&&e.theme||t||n.theme}var Sy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),dE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,fE=/(^-|-$)/g;function $h(e){return e.replace(dE,"-").replace(fE,"")}var hE=/(a)(d)/gi,Bh=function(e){return String.fromCharCode(e+(e>25?39:97))};function nc(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Bh(t%52)+n;return(Bh(t%52)+n).replace(hE,"$1-$2")}var Ba,Wr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Iy=function(e){return Wr(5381,e)};function Ad(e){return nc(Iy(e)>>>0)}function pE(e){return e.displayName||e.name||"Component"}function ja(e){return typeof e=="string"&&!0}var xy=typeof Symbol=="function"&&Symbol.for,ky=xy?Symbol.for("react.memo"):60115,mE=xy?Symbol.for("react.forward_ref"):60112,gE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Ty={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},_E=((Ba={})[mE]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Ba[ky]=Ty,Ba);function jh(e){return("type"in(t=e)&&t.type.$$typeof)===ky?Ty:"$$typeof"in e?_E[e.$$typeof]:gE;var t}var vE=Object.defineProperty,wE=Object.getOwnPropertyNames,zh=Object.getOwnPropertySymbols,EE=Object.getOwnPropertyDescriptor,CE=Object.getPrototypeOf,Wh=Object.prototype;function Ny(e,t,n){if(typeof t!="string"){if(Wh){var r=CE(t);r&&r!==Wh&&Ny(e,r,n)}var i=wE(t);zh&&(i=i.concat(zh(t)));for(var s=jh(e),o=jh(t),l=0;l<i.length;++l){var a=i[l];if(!(a in yE||n&&n[a]||o&&a in o||s&&a in s)){var u=EE(t,a);try{vE(e,a,u)}catch{}}}}return e}function ur(e){return typeof e=="function"}function bd(e){return typeof e=="object"&&"styledComponentId"in e}function Yn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ol(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function ks(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function rc(e,t,n){if(n===void 0&&(n=!1),!n&&!ks(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=rc(e[r],t[r]);else if(ks(t))for(var r in t)e[r]=rc(e[r],t[r]);return e}function cr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var SE=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,s=i;t>=s;)if((s<<=1)<0)throw cr(16,"".concat(t));this.groupSizes=new Uint32Array(s),this.groupSizes.set(r),this.length=s;for(var o=i;o<s;o++)this.groupSizes[o]=0}for(var l=this.indexOfGroup(t+1),a=(o=0,n.length);o<a;o++)this.tag.insertRule(l,n[o])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var s=r;s<i;s++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),s=i+r,o=i;o<s;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Mo=new Map,ll=new Map,za=1,ho=function(e){if(Mo.has(e))return Mo.get(e);for(;ll.has(za);)za++;var t=za++;return Mo.set(e,t),ll.set(t,e),t},IE=function(e,t){Mo.set(e,t),ll.set(t,e)},xE="style[".concat(fi,"][").concat("data-styled-version",'="').concat("6.0.0-rc.1",'"]'),kE=new RegExp("^".concat(fi,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),TE=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},NE=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),i=[],s=0,o=r.length;s<o;s++){var l=r[s].trim();if(l){var a=l.match(kE);if(a){var u=0|parseInt(a[1],10),d=a[2];u!==0&&(IE(d,u),TE(e,d,a[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}};function RE(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ry=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var d=a[u];if(d&&d.nodeType===1&&d.hasAttribute(fi))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(fi,"active"),r.setAttribute("data-styled-version","6.0.0-rc.1");var o=RE();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},PE=function(){function e(t){this.element=Ry(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,s=r.length;i<s;i++){var o=r[i];if(o.ownerNode===n)return o}throw cr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),AE=function(){function e(t){this.element=Ry(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),bE=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Uh=Rd,DE={isServer:!Rd,useCSSOMInjection:!uE},al=function(){function e(t,n,r){t===void 0&&(t=ar),n===void 0&&(n={}),this.options=Ie(Ie({},DE),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Rd&&Uh&&(Uh=!1,function(i){for(var s=document.querySelectorAll(xE),o=0,l=s.length;o<l;o++){var a=s[o];a&&a.getAttribute(fi)!=="active"&&(NE(i,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}return e.registerId=function(t){return ho(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Ie(Ie({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new bE(i):r?new PE(i):new AE(i)}(this.options),new SE(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ho(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ho(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ho(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e.prototype.toString=function(){return function(t){for(var n=t.getTag(),r=n.length,i="",s=function(l){var a=function(h){return ll.get(h)}(l);if(a===void 0)return"continue";var u=t.names.get(a),d=n.getGroup(l);if(u===void 0||d.length===0)return"continue";var c="".concat(fi,".g").concat(l,'[id="').concat(a,'"]'),f="";u!==void 0&&u.forEach(function(h){h.length>0&&(f+="".concat(h,","))}),i+="".concat(d).concat(c,'{content:"').concat(f,'"}').concat(`/*!sc*/
`)},o=0;o<r;o++)s(o);return i}(this)},e}(),OE=/&/g,ME=/^\s*\/\/.*$/gm;function Py(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Py(n.children,t)),n})}function LE(e){var t,n,r,i=e===void 0?ar:e,s=i.options,o=s===void 0?ar:s,l=i.plugins,a=l===void 0?Pd:l,u=function(f,h,y){return y===n||y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):f},d=a.slice();o.prefix&&d.unshift(lE),d.push(function(f){f.type===Hl&&f.value.includes("&")&&(f.props[0]=f.props[0].replace(OE,n).replace(r,u))},sE);var c=function(f,h,y,_){h===void 0&&(h=""),y===void 0&&(y=""),_===void 0&&(_="&"),t=_,n=h,r=new RegExp("\\".concat(n,"\\b"),"g");var x=f.replace(ME,""),m=rE(y||h?"".concat(y," ").concat(h," { ").concat(x," }"):x);return o.namespace&&(m=Py(m,o.namespace)),function(p,g){for(var v=[],E=0,S=void 0;E<p.length;E+=1)(S=g(p[E],E,p,g))&&v.push(S);return v}(m,oE(d))};return c.hash=a.length?a.reduce(function(f,h){return h.name||cr(15),Wr(f,h.name)},5381).toString():"",c}var FE=new al,ic=LE(),Ay=Bt.createContext({shouldForwardProp:void 0,styleSheet:FE,stylis:ic});Ay.Consumer;Bt.createContext(void 0);function sc(){return ae.useContext(Ay)}var by=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=ic);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){throw cr(12,String(r.name))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=ic),this.name+t.hash},e}(),$E=function(e){return e>="A"&&e<="Z"};function Hh(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;$E(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Dy=function(e){return e==null||e===!1||e===""},Oy=function(e){var t,n,r=[];for(var i in e){var s=e[i];e.hasOwnProperty(i)&&!Dy(s)&&(Array.isArray(s)&&s.isCss||ur(s)?r.push("".concat(Hh(i),":"),s,";"):ks(s)?r.push.apply(r,ui(ui(["".concat(i," {")],Oy(s),!1),["}"],!1)):r.push("".concat(Hh(i),": ").concat((t=i,(n=s)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in aE||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Nn(e,t,n,r){if(Dy(e))return[];if(bd(e))return[".".concat(e.styledComponentId)];if(ur(e)){if(!ur(s=e)||s.prototype&&s.prototype.isReactComponent||!t)return[e];var i=e(t);return Nn(i,t,n,r)}var s;return e instanceof by?n?(e.inject(n,r),[e.getName(r)]):[e]:ks(e)?Oy(e):Array.isArray(e)?e.flatMap(function(o){return Nn(o,t,n,r)}):[e.toString()]}function My(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ur(n)&&!bd(n))return!1}return!0}var BE=Iy("6.0.0-rc.1"),jE=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&My(t),this.componentId=n,this.baseHash=Wr(BE,n),this.baseStyle=r,al.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=Yn(i,this.staticRulesId);else{var s=ol(Nn(this.rules,t,n,r)),o=nc(Wr(this.baseHash,s)>>>0);if(!n.hasNameForId(this.componentId,o)){var l=r(s,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,l)}i=Yn(i,o),this.staticRulesId=o}else{for(var a=Wr(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var c=this.rules[d];if(typeof c=="string")u+=c;else if(c){var f=ol(Nn(c,t,n,r));a=Wr(a,f),u+=f}}if(u){var h=nc(a>>>0);n.hasNameForId(this.componentId,h)||n.insertRules(this.componentId,h,r(u,".".concat(h),void 0,this.componentId)),i=Yn(i,h)}}return i},e}(),Dd=Bt.createContext(void 0);Dd.Consumer;function Kl(){return ae.useContext(Dd)}function zE(e){var t=Kl(),n=ae.useMemo(function(){return function(r,i){if(!r)throw cr(14);if(ur(r)){var s=r(i);return s}if(Array.isArray(r)||typeof r!="object")throw cr(8);return i?Ie(Ie({},i),r):r}(e.theme,t)},[e.theme,t]);return e.children?Bt.createElement(Dd.Provider,{value:n},e.children):null}var Wa={};function WE(e,t,n){var r=bd(e),i=e,s=!ja(e),o=t.attrs,l=o===void 0?Pd:o,a=t.componentId,u=a===void 0?function(E,S){var w=typeof E!="string"?"sc":$h(E);Wa[w]=(Wa[w]||0)+1;var T="".concat(w,"-").concat(Ad("6.0.0-rc.1"+w+Wa[w]));return S?"".concat(S,"-").concat(T):T}(t.displayName,t.parentComponentId):a,d=t.displayName,c=d===void 0?function(E){return ja(E)?"styled.".concat(E):"Styled(".concat(pE(E),")")}(e):d,f=t.displayName&&t.componentId?"".concat($h(t.displayName),"-").concat(t.componentId):t.componentId||u,h=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var _=i.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;y=function(E,S){return _(E,S)&&x(E,S)}}else y=_}var m=new jE(n,f,r?i.componentStyle:void 0),p=m.isStatic&&l.length===0;function g(E,S){return function(w,T,z,O){var ye=w.attrs,Ht=w.componentStyle,re=w.defaultProps,_e=w.foldedComponentIds,Ue=w.styledComponentId,Et=w.target,Pe=Kl(),k=sc(),D=w.shouldForwardProp||k.shouldForwardProp,P=function($e,tt,xr){for(var dt,ft=Ie(Ie({},tt),{className:void 0,theme:xr}),Ni=0;Ni<$e.length;Ni+=1){var kr=ur(dt=$e[Ni])?dt(ft):dt;for(var ht in kr)ft[ht]=ht==="className"?Yn(ft[ht],kr[ht]):ht==="style"?Ie(Ie({},ft[ht]),kr[ht]):kr[ht]}return tt.className&&(ft.className=Yn(ft.className,tt.className)),ft}(ye,T,Cy(T,Pe,re)||ar),V=P.as||Et,K={};for(var Ae in P)P[Ae]===void 0||Ae[0]==="$"||Ae==="as"||Ae==="theme"||(Ae==="forwardedAs"?K.as=P.forwardedAs:D&&!D(Ae,V)||(K[Ae]=P[Ae]));var ct=function($e,tt,xr){var dt=sc(),ft=$e.generateAndInjectStyles(tt?ar:xr,dt.styleSheet,dt.stylis);return ft}(Ht,O,P),Vt=Yn(_e,Ue);return ct&&(Vt+=" "+ct),P.className&&(Vt+=" "+P.className),K[ja(V)&&!Sy.has(V)?"class":"className"]=Vt,K.ref=z,ae.createElement(V,K)}(v,E,S,p)}g.displayName=c;var v=Bt.forwardRef(g);return v.attrs=h,v.componentStyle=m,v.displayName=c,v.shouldForwardProp=y,v.foldedComponentIds=r?Yn(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=f,v.target=r?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(S){for(var w=[],T=1;T<arguments.length;T++)w[T-1]=arguments[T];for(var z=0,O=w;z<O.length;z++)rc(S,O[z],!0);return S}({},i.defaultProps,E):E}}),Object.defineProperty(v,"toString",{value:function(){return".".concat(v.styledComponentId)}}),s&&Ny(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function Vh(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Gh=function(e){return Object.assign(e,{isCss:!0})};function Yl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ur(e)||ks(e)){var r=e;return Gh(Nn(Vh(Pd,ui([r],t,!0))))}var i=e;return t.length===0&&i.length===1&&typeof i[0]=="string"?Nn(i):Gh(Nn(Vh(i,t)))}function oc(e,t,n){if(n===void 0&&(n=ar),!t)throw cr(1,t);var r=function(i){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return e(t,n,Yl.apply(void 0,ui([i],s,!1)))};return r.attrs=function(i){return oc(e,t,Ie(Ie({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return oc(e,t,Ie(Ie({},n),i))},r}var Ly=function(e){return oc(WE,e)},b=Ly;Sy.forEach(function(e){b[e]=Ly(e)});var UE=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=My(t),al.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,i){var s=i(ol(Nn(this.rules,n,r,i)),""),o=this.componentId+t;r.insertRules(o,o,s)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,i){t>2&&al.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,i)},e}();function HE(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Yl.apply(void 0,ui([e],t,!1)),i="sc-global-".concat(Ad(JSON.stringify(r))),s=new UE(r,i),o=function(a){var u=sc(),d=Kl(),c=Bt.useRef(u.styleSheet.allocateGSInstance(i)).current;return u.styleSheet.server&&l(c,a,u.styleSheet,d,u.stylis),(Bt.useInsertionEffect||Bt.useLayoutEffect)(function(){if(!u.styleSheet.server)return l(c,a,u.styleSheet,d,u.stylis),function(){return s.removeStyles(c,u.styleSheet)}},[c,a,u.styleSheet,d,u.stylis]),null};function l(a,u,d,c,f){if(s.isStatic)s.renderStyles(a,cE,d,f);else{var h=Ie(Ie({},u),{theme:Cy(u,c,o.defaultProps)});s.renderStyles(a,h,d,f)}}return Bt.memo(o)}function Fy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ol(Yl.apply(void 0,ui([e],t,!1))),i=Ad(r);return new by(i,r)}var $y={},By={},jy={exports:{}},zy={},Wy={};Wy.calcMaxWidth=e=>`${parseInt(e,10)-.02}px`;const{calcMaxWidth:VE}=Wy;zy.createBreakpointsApi=({breakpoints:e})=>{const t=Object.keys(Object(e)),n=l=>t[t.indexOf(l)+1],r=l=>e[l],i=l=>VE(e[l]),s=(l,a)=>({min:r(l),max:i(a)});return Object.freeze({keys:t,getNextKey:n,up:r,down:i,between:s,only:l=>l===t.at(-1)?r(l):s(l,n(l))})};jy.exports=zy;var GE=jy.exports,Uy={},Hy={};Hy.withOrientation=({mediaQuery:e,orientation:t})=>`${e} and (orientation: ${t})`;Uy.withOrientation=Hy.withOrientation;var Vy={},Gy={};Gy.memoize=(e,t=new Map)=>(...n)=>{const r=JSON.stringify(n);return t.has(r)||t.set(r,e(...n)),t.get(r)};Vy.memoize=Gy.memoize;const{createBreakpointsApi:QE}=GE,{withOrientation:KE}=Uy,{memoize:po}=Vy,YE={errorPrefix:"[styled-breakpoints]: ",defaultBreakpoints:{xs:"0px",sm:"576px",md:"768px",lg:"992px",xl:"1200px",xxl:"1400px"}};By.createStyledBreakpointsTheme=({defaultBreakpoints:e,errorPrefix:t}=YE)=>{const n=QE({breakpoints:e,errorPrefix:t});return{breakpoints:{up:po(r),down:po(i),between:po(s),only:po(o)}};function r(f,h){return l(h,u(a(n.up(f))))}function i(f,h){return l(h,u(d(n.down(f))))}function s(f,h,y){return l(y,c(n.between(f,h)))}function o(f,h){return l(h,typeof n.only(f)=="object"?c(n.only(f)):u(a(n.up(f))))}function l(f,h){return f?KE({mediaQuery:h,orientation:f,invariant:n.invariant&&n.invariant}):h}function a(f){return`(min-width: ${f})`}function u(f){return`@media ${f}`}function d(f){return`(max-width: ${f})`}function c({min:f,max:h}){return`${u(a(f))} and ${d(h)}`}};$y.createStyledBreakpointsTheme=By.createStyledBreakpointsTheme;var qE=$y.createStyledBreakpointsTheme;const XE=HE`
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
`;var Qy={},Ky={},Yy={},qy={};qy.getMatches=e=>typeof window<"u"?window.matchMedia(e).matches:!1;Yy.getMatches=qy.getMatches;const{useState:JE,useLayoutEffect:ZE,useEffect:eC}=ae,{getMatches:tC}=Yy,nC=typeof window<"u",rC=nC?ZE:eC,iC=e=>{const[t,n]=JE(tC(e));return rC(()=>{let r=!0;const i=window.matchMedia(e.replace(/^@media\s*/,"")),s=()=>{r&&n(i.matches)};return i.addListener?i.addListener(s):i.addEventListener("change",s),n(i.matches),()=>{r=!1,i.addListener?i.removeListener(s):i.removeEventListener("change",s)}},[e]),t};Ky.useMediaQuery=iC;Qy.useMediaQuery=Ky.useMediaQuery;var Qh=Qy.useMediaQuery;const Xy=new Set,Xe=new WeakMap,Xr=new WeakMap,dr=new WeakMap,lc=new WeakMap,sC=new WeakMap,hi=new WeakMap,ul=new WeakMap,Gi=new WeakSet;let fr;const Xt="__aa_tgt",ac="__aa_del",oC=e=>{const t=dC(e);t&&t.forEach(n=>fC(n))},lC=e=>{e.forEach(t=>{t.target===fr&&uC(),Xe.has(t.target)&&Cr(t.target)})};function aC(e){const t=lc.get(e);t==null||t.disconnect();let n=Xe.get(e),r=0;const i=5;n||(n=pi(e),Xe.set(e,n));const{offsetWidth:s,offsetHeight:o}=fr,a=[n.top-i,s-(n.left+i+n.width),o-(n.top+i+n.height),n.left-i].map(d=>`${-1*Math.floor(d)}px`).join(" "),u=new IntersectionObserver(()=>{++r>1&&Cr(e)},{root:fr,threshold:1,rootMargin:a});u.observe(e),lc.set(e,u)}function Cr(e){clearTimeout(ul.get(e));const t=ql(e),n=typeof t=="function"?500:t.duration;ul.set(e,setTimeout(async()=>{const r=dr.get(e);try{await(r==null?void 0:r.finished),Xe.set(e,pi(e)),aC(e)}catch{}},n))}function uC(){clearTimeout(ul.get(fr)),ul.set(fr,setTimeout(()=>{Xy.forEach(e=>t_(e,t=>Jy(()=>Cr(t))))},100))}function cC(e){setTimeout(()=>{sC.set(e,setInterval(()=>Jy(Cr.bind(null,e)),2e3))},Math.round(2e3*Math.random()))}function Jy(e){typeof requestIdleCallback=="function"?requestIdleCallback(()=>e()):requestAnimationFrame(()=>e())}let uc,Ur;typeof window<"u"&&(fr=document.documentElement,uc=new MutationObserver(oC),Ur=new ResizeObserver(lC),Ur.observe(fr));function dC(e){return e.reduce((r,i)=>[...r,...Array.from(i.addedNodes),...Array.from(i.removedNodes)],[]).every(r=>r.nodeName==="#comment")?!1:e.reduce((r,i)=>{if(r===!1)return!1;if(i.target instanceof Element){if(Ua(i.target),!r.has(i.target)){r.add(i.target);for(let s=0;s<i.target.children.length;s++){const o=i.target.children.item(s);if(o){if(ac in o)return!1;Ua(i.target,o),r.add(o)}}}if(i.removedNodes.length)for(let s=0;s<i.removedNodes.length;s++){const o=i.removedNodes[s];if(ac in o)return!1;o instanceof Element&&(r.add(o),Ua(i.target,o),Xr.set(o,[i.previousSibling,i.nextSibling]))}}return r},new Set)}function Ua(e,t){!t&&!(Xt in e)?Object.defineProperty(e,Xt,{value:e}):t&&!(Xt in t)&&Object.defineProperty(t,Xt,{value:e})}function fC(e){var t;const n=e.isConnected,r=Xe.has(e);n&&Xr.has(e)&&Xr.delete(e),dr.has(e)&&((t=dr.get(e))===null||t===void 0||t.cancel()),r&&n?hC(e):r&&!n?mC(e):pC(e)}function Ft(e){return Number(e.replace(/[^0-9.\-]/g,""))}function pi(e){const t=e.getBoundingClientRect();return{top:t.top+window.scrollY,left:t.left+window.scrollX,width:t.width,height:t.height}}function Zy(e,t,n){let r=t.width,i=t.height,s=n.width,o=n.height;const l=getComputedStyle(e);if(l.getPropertyValue("box-sizing")==="content-box"){const u=Ft(l.paddingTop)+Ft(l.paddingBottom)+Ft(l.borderTopWidth)+Ft(l.borderBottomWidth),d=Ft(l.paddingLeft)+Ft(l.paddingRight)+Ft(l.borderRightWidth)+Ft(l.borderLeftWidth);r-=d,s-=d,i-=u,o-=u}return[r,s,i,o].map(Math.round)}function ql(e){return Xt in e&&hi.has(e[Xt])?hi.get(e[Xt]):{duration:250,easing:"ease-in-out"}}function e_(e){if(Xt in e)return e[Xt]}function Od(e){const t=e_(e);return t?Gi.has(t):!1}function t_(e,...t){t.forEach(n=>n(e,hi.has(e)));for(let n=0;n<e.children.length;n++){const r=e.children.item(n);r&&t.forEach(i=>i(r,hi.has(r)))}}function hC(e){const t=Xe.get(e),n=pi(e);if(!Od(e))return Xe.set(e,n);let r;if(!t)return;const i=ql(e);if(typeof i!="function"){const s=t.left-n.left,o=t.top-n.top,[l,a,u,d]=Zy(e,t,n),c={transform:`translate(${s}px, ${o}px)`},f={transform:"translate(0, 0)"};l!==a&&(c.width=`${l}px`,f.width=`${a}px`),u!==d&&(c.height=`${u}px`,f.height=`${d}px`),r=e.animate([c,f],{duration:i.duration,easing:i.easing})}else r=new Animation(i(e,"remain",t,n)),r.play();dr.set(e,r),Xe.set(e,n),r.addEventListener("finish",Cr.bind(null,e))}function pC(e){const t=pi(e);Xe.set(e,t);const n=ql(e);if(!Od(e))return;let r;typeof n!="function"?r=e.animate([{transform:"scale(.98)",opacity:0},{transform:"scale(0.98)",opacity:0,offset:.5},{transform:"scale(1)",opacity:1}],{duration:n.duration*1.5,easing:"ease-in"}):(r=new Animation(n(e,"add",t)),r.play()),dr.set(e,r),r.addEventListener("finish",Cr.bind(null,e))}function mC(e){var t;if(!Xr.has(e)||!Xe.has(e))return;const[n,r]=Xr.get(e);Object.defineProperty(e,ac,{value:!0}),r&&r.parentNode&&r.parentNode instanceof Element?r.parentNode.insertBefore(e,r):n&&n.parentNode?n.parentNode.appendChild(e):(t=e_(e))===null||t===void 0||t.appendChild(e);function i(){var f;e.remove(),Xe.delete(e),Xr.delete(e),dr.delete(e),(f=lc.get(e))===null||f===void 0||f.disconnect()}if(!Od(e))return i();const[s,o,l,a]=gC(e),u=ql(e),d=Xe.get(e);let c;Object.assign(e.style,{position:"absolute",top:`${s}px`,left:`${o}px`,width:`${l}px`,height:`${a}px`,margin:0,pointerEvents:"none",transformOrigin:"center",zIndex:100}),typeof u!="function"?c=e.animate([{transform:"scale(1)",opacity:1},{transform:"scale(.98)",opacity:0}],{duration:u.duration,easing:"ease-out"}):(c=new Animation(u(e,"remove",d)),c.play()),dr.set(e,c),c.addEventListener("finish",i)}function gC(e){const t=Xe.get(e),[n,,r]=Zy(e,t,pi(e));let i=e.parentElement;for(;i&&(getComputedStyle(i).position==="static"||i instanceof HTMLBodyElement);)i=i.parentElement;i||(i=document.body);const s=getComputedStyle(i),o=Xe.get(i)||pi(i),l=Math.round(t.top-o.top)-Ft(s.borderTopWidth),a=Math.round(t.left-o.left)-Ft(s.borderLeftWidth);return[l,a,n,r]}function yC(e,t={}){return uc&&Ur&&(window.matchMedia("(prefers-reduced-motion: reduce)").matches&&typeof t!="function"&&!t.disrespectUserMotionPreference||(Gi.add(e),getComputedStyle(e).position==="static"&&Object.assign(e.style,{position:"relative"}),t_(e,Cr,cC,i=>Ur==null?void 0:Ur.observe(i)),typeof t=="function"?hi.set(e,t):hi.set(e,{duration:250,easing:"ease-in-out",...t}),uc.observe(e,{childList:!0}),Xy.add(e))),Object.freeze({parent:e,enable:()=>{Gi.add(e)},disable:()=>{Gi.delete(e)},isEnabled:()=>Gi.has(e)})}function _C(e){const[t,n]=ae.useState();return[ae.useCallback(s=>{s instanceof HTMLElement?n(yC(s,e)):n(void 0)},[]),s=>{t&&(s?t.enable():t.disable())}]}/**
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
 */const I=function(e,t){if(!e)throw Ii(t)},Ii=function(e){return new Error("Firebase Database ("+n_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
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
 */const r_=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},vC=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let f=(l&15)<<2|u>>6,h=u&63;a||(h=64,o||(f=64)),r.push(n[d],n[c],n[f],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r_(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vC(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const c=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new wC;const f=s<<2|l>>4;if(r.push(f),u!==64){const h=l<<4&240|u>>2;if(r.push(h),c!==64){const y=u<<6&192|c;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class wC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const i_=function(e){const t=r_(e);return Md.encodeByteArray(t,!0)},cl=function(e){return i_(e).replace(/\./g,"")},cc=function(e){try{return Md.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function EC(e){return s_(void 0,e)}function s_(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!CC(n)||(e[n]=s_(e[n],t[n]));return e}function CC(e){return e!=="__proto__"}/**
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
 */function SC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IC=()=>SC().__FIREBASE_DEFAULTS__,xC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},kC=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&cc(e[1]);return t&&JSON.parse(t)},o_=()=>{try{return IC()||xC()||kC()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},TC=e=>{var t,n;return(n=(t=o_())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},NC=e=>{const t=TC(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},l_=()=>{var e;return(e=o_())===null||e===void 0?void 0:e.config};/**
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
 */class Xl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function RC(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[cl(JSON.stringify(n)),cl(JSON.stringify(o)),l].join(".")}/**
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
 */function PC(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function a_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(PC())}function AC(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function bC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u_(){return n_.NODE_ADMIN===!0}function c_(){try{return typeof indexedDB=="object"}catch{return!1}}function d_(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}function DC(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const OC="FirebaseError";class Sr extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=OC,Object.setPrototypeOf(this,Sr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Jl.prototype.create)}}class Jl{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?MC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Sr(i,l,r)}}function MC(e,t){return e.replace(LC,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const LC=/\{\$([^}]+)}/g;/**
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
 */function Ts(e){return JSON.parse(e)}function Se(e){return JSON.stringify(e)}/**
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
 */const f_=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=Ts(cc(s[0])||""),n=Ts(cc(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},FC=function(e){const t=f_(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},$C=function(e){const t=f_(e).claims;return typeof t=="object"&&t.admin===!0};/**
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
 */function cn(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function mi(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Kh(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function dl(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function fl(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(Yh(s)&&Yh(o)){if(!fl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Yh(e){return e!==null&&typeof e=="object"}/**
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
 */function BC(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
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
 */class jC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let c=0;c<16;c++)r[c]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let c=16;c<80;c++){const f=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const f=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function Ld(e,t){return`${e} failed: ${t} argument `}/**
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
 */const zC=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Zl=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
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
 */const WC=1e3,UC=2,HC=4*60*60*1e3,VC=.5;function qh(e,t=WC,n=UC){const r=t*Math.pow(n,e),i=Math.round(VC*r*(Math.random()-.5)*2);return Math.min(HC,r+i)}/**
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
 */function zn(e){return e&&e._delegate?e._delegate:e}class on{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */class GC{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Xl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(KC(t))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=Hn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Hn){return this.instances.has(t)}getOptions(t=Hn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:QC(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Hn){return this.component?this.component.multipleInstances?t:Hn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function QC(e){return e===Hn?void 0:e}function KC(e){return e.instantiationMode==="EAGER"}/**
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
 */class YC{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new GC(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(Y||(Y={}));const qC={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},XC=Y.INFO,JC={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},ZC=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=JC[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Fd{constructor(t){this.name=t,this._logLevel=XC,this._logHandler=ZC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Y))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?qC[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...t),this._logHandler(this,Y.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...t),this._logHandler(this,Y.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...t),this._logHandler(this,Y.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...t),this._logHandler(this,Y.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...t),this._logHandler(this,Y.ERROR,...t)}}const eS=(e,t)=>t.some(n=>e instanceof n);let Xh,Jh;function tS(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function nS(){return Jh||(Jh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h_=new WeakMap,dc=new WeakMap,p_=new WeakMap,Ha=new WeakMap,$d=new WeakMap;function rS(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Rn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&h_.set(n,e)}).catch(()=>{}),$d.set(t,e),t}function iS(e){if(dc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});dc.set(e,t)}let fc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return dc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||p_.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function sS(e){fc=e(fc)}function oS(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Va(this),t,...n);return p_.set(r,t.sort?t.sort():[t]),Rn(r)}:nS().includes(e)?function(...t){return e.apply(Va(this),t),Rn(h_.get(this))}:function(...t){return Rn(e.apply(Va(this),t))}}function lS(e){return typeof e=="function"?oS(e):(e instanceof IDBTransaction&&iS(e),eS(e,tS())?new Proxy(e,fc):e)}function Rn(e){if(e instanceof IDBRequest)return rS(e);if(Ha.has(e))return Ha.get(e);const t=lS(e);return t!==e&&(Ha.set(e,t),$d.set(t,e)),t}const Va=e=>$d.get(e);function aS(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=Rn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Rn(o.result),a.oldVersion,a.newVersion,Rn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const uS=["get","getKey","getAll","getAllKeys","count"],cS=["put","add","delete","clear"],Ga=new Map;function Zh(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ga.get(t))return Ga.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=cS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||uS.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ga.set(t,s),s}sS(e=>({...e,get:(t,n,r)=>Zh(t,n)||e.get(t,n,r),has:(t,n)=>!!Zh(t,n)||e.has(t,n)}));/**
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
 */class dS{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function fS(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const hc="@firebase/app",ep="0.9.11";/**
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
 */const hr=new Fd("@firebase/app"),hS="@firebase/app-compat",pS="@firebase/analytics-compat",mS="@firebase/analytics",gS="@firebase/app-check-compat",yS="@firebase/app-check",_S="@firebase/auth",vS="@firebase/auth-compat",wS="@firebase/database",ES="@firebase/database-compat",CS="@firebase/functions",SS="@firebase/functions-compat",IS="@firebase/installations",xS="@firebase/installations-compat",kS="@firebase/messaging",TS="@firebase/messaging-compat",NS="@firebase/performance",RS="@firebase/performance-compat",PS="@firebase/remote-config",AS="@firebase/remote-config-compat",bS="@firebase/storage",DS="@firebase/storage-compat",OS="@firebase/firestore",MS="@firebase/firestore-compat",LS="firebase",FS="9.22.1";/**
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
 */const pc="[DEFAULT]",$S={[hc]:"fire-core",[hS]:"fire-core-compat",[mS]:"fire-analytics",[pS]:"fire-analytics-compat",[yS]:"fire-app-check",[gS]:"fire-app-check-compat",[_S]:"fire-auth",[vS]:"fire-auth-compat",[wS]:"fire-rtdb",[ES]:"fire-rtdb-compat",[CS]:"fire-fn",[SS]:"fire-fn-compat",[IS]:"fire-iid",[xS]:"fire-iid-compat",[kS]:"fire-fcm",[TS]:"fire-fcm-compat",[NS]:"fire-perf",[RS]:"fire-perf-compat",[PS]:"fire-rc",[AS]:"fire-rc-compat",[bS]:"fire-gcs",[DS]:"fire-gcs-compat",[OS]:"fire-fst",[MS]:"fire-fst-compat","fire-js":"fire-js",[LS]:"fire-js-all"};/**
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
 */const hl=new Map,mc=new Map;function BS(e,t){try{e.container.addComponent(t)}catch(n){hr.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Mn(e){const t=e.name;if(mc.has(t))return hr.debug(`There were multiple attempts to register component ${t}.`),!1;mc.set(t,e);for(const n of hl.values())BS(n,e);return!0}function zs(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const jS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Pn=new Jl("app","Firebase",jS);/**
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
 */class zS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new on("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
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
 */const WS=FS;function m_(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:pc,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=l_()),!n)throw Pn.create("no-options");const s=hl.get(i);if(s){if(fl(n,s.options)&&fl(r,s.config))return s;throw Pn.create("duplicate-app",{appName:i})}const o=new YC(i);for(const a of mc.values())o.addComponent(a);const l=new zS(n,r,o);return hl.set(i,l),l}function g_(e=pc){const t=hl.get(e);if(!t&&e===pc&&l_())return m_();if(!t)throw Pn.create("no-app",{appName:e});return t}function Ut(e,t,n){var r;let i=(r=$S[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),hr.warn(l.join(" "));return}Mn(new on(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const US="firebase-heartbeat-database",HS=1,Ns="firebase-heartbeat-store";let Qa=null;function y_(){return Qa||(Qa=aS(US,HS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ns)}}}).catch(e=>{throw Pn.create("idb-open",{originalErrorMessage:e.message})})),Qa}async function VS(e){try{return await(await y_()).transaction(Ns).objectStore(Ns).get(__(e))}catch(t){if(t instanceof Sr)hr.warn(t.message);else{const n=Pn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});hr.warn(n.message)}}}async function tp(e,t){try{const r=(await y_()).transaction(Ns,"readwrite");await r.objectStore(Ns).put(t,__(e)),await r.done}catch(n){if(n instanceof Sr)hr.warn(n.message);else{const r=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hr.warn(r.message)}}}function __(e){return`${e.name}!${e.options.appId}`}/**
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
 */const GS=1024,QS=30*24*60*60*1e3;class KS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new qS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=np();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=QS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=np(),{heartbeatsToSend:n,unsentEntries:r}=YS(this._heartbeatsCache.heartbeats),i=cl(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function np(){return new Date().toISOString().substring(0,10)}function YS(e,t=GS){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),rp(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rp(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class qS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c_()?d_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await VS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return tp(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function rp(e){return cl(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function XS(e){Mn(new on("platform-logger",t=>new dS(t),"PRIVATE")),Mn(new on("heartbeat",t=>new KS(t),"PRIVATE")),Ut(hc,ep,e),Ut(hc,ep,"esm2017"),Ut("fire-js","")}XS("");var JS="firebase",ZS="9.22.1";/**
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
 */Ut(JS,ZS,"app");const ip="@firebase/database",sp="0.14.4";/**
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
 */let v_="";function eI(e){v_=e}/**
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
 */class tI{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),Se(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:Ts(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
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
 */class nI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return cn(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
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
 */const w_=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new tI(t)}}catch{}return new nI},qn=w_("localStorage"),gc=w_("sessionStorage");/**
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
 */const Jr=new Fd("@firebase/database"),rI=function(){let e=1;return function(){return e++}}(),E_=function(e){const t=zC(e),n=new jC;n.update(t);const r=n.digest();return Md.encodeByteArray(r)},Ws=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=Ws.apply(null,r):typeof r=="object"?t+=Se(r):t+=r,t+=" "}return t};let nr=null,op=!0;const iI=function(e,t){I(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Jr.logLevel=Y.VERBOSE,nr=Jr.log.bind(Jr),t&&gc.set("logging_enabled",!0)):typeof e=="function"?nr=e:(nr=null,gc.remove("logging_enabled"))},Le=function(...e){if(op===!0&&(op=!1,nr===null&&gc.get("logging_enabled")===!0&&iI(!0)),nr){const t=Ws.apply(null,e);nr(t)}},Us=function(e){return function(...t){Le(e,...t)}},yc=function(...e){const t="FIREBASE INTERNAL ERROR: "+Ws(...e);Jr.error(t)},ln=function(...e){const t=`FIREBASE FATAL ERROR: ${Ws(...e)}`;throw Jr.error(t),new Error(t)},Je=function(...e){const t="FIREBASE WARNING: "+Ws(...e);Jr.warn(t)},sI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Je("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},C_=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},oI=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},gi="[MIN_NAME]",pr="[MAX_NAME]",xi=function(e,t){if(e===t)return 0;if(e===gi||t===pr)return-1;if(t===gi||e===pr)return 1;{const n=lp(e),r=lp(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},lI=function(e,t){return e===t?0:e<t?-1:1},$i=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Se(t))},Bd=function(e){if(typeof e!="object"||e===null)return Se(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=Se(t[r]),n+=":",n+=Bd(e[t[r]]);return n+="}",n},S_=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function et(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const I_=function(e){I(!C_(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,l,a;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=l+r,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=t;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let f=parseInt(d.substr(a,8),2).toString(16);f.length===1&&(f="0"+f),c=c+f}return c.toLowerCase()},aI=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},uI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function cI(e,t){let n="Unknown Error";e==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":e==="permission_denied"?n="Client doesn't have permission to access the desired data.":e==="unavailable"&&(n="The service is unavailable");const r=new Error(e+" at "+t._path.toString()+": "+n);return r.code=e.toUpperCase(),r}const dI=new RegExp("^-?(0*)\\d{1,10}$"),fI=-2147483648,hI=2147483647,lp=function(e){if(dI.test(e)){const t=Number(e);if(t>=fI&&t<=hI)return t}return null},ki=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw Je("Exception was thrown by user callback.",n),t},Math.floor(0))}},pI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},is=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mI{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){Je(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gI{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Le("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Je(t)}}class Zr{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Zr.OWNER="owner";/**
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
 */const jd="5",x_="v",k_="s",T_="r",N_="f",R_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,P_="ls",A_="p",_c="ac",b_="websocket",D_="long_polling";/**
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
 */class O_{constructor(t,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qn.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&qn.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function yI(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function M_(e,t,n){I(typeof t=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(t===b_)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===D_)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);yI(e)&&(n.ns=e.namespace);const i=[];return et(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class _I{constructor(){this.counters_={}}incrementCounter(t,n=1){cn(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return EC(this.counters_)}}/**
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
 */const Ka={},Ya={};function zd(e){const t=e.toString();return Ka[t]||(Ka[t]=new _I),Ka[t]}function vI(e,t){const n=e.toString();return Ya[n]||(Ya[n]=t()),Ya[n]}/**
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
 */class wI{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ki(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ap="start",EI="close",CI="pLPCommand",SI="pRTLPCB",L_="id",F_="pw",$_="ser",II="cb",xI="seg",kI="ts",TI="d",NI="dframe",B_=1870,j_=30,RI=B_-j_,PI=25e3,AI=3e4;class Hr{constructor(t,n,r,i,s,o,l){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Us(t),this.stats_=zd(n),this.urlFn=a=>(this.appCheckToken&&(a[_c]=this.appCheckToken),M_(n,D_,a))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new wI(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(AI)),oI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Wd((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ap)this.id=l,this.password=a;else if(o===EI)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[ap]="t",r[$_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[II]=this.scriptTagHolder.uniqueCallbackIdentifier),r[x_]=jd,this.transportSessionId&&(r[k_]=this.transportSessionId),this.lastSessionId&&(r[P_]=this.lastSessionId),this.applicationId&&(r[A_]=this.applicationId),this.appCheckToken&&(r[_c]=this.appCheckToken),typeof location<"u"&&location.hostname&&R_.test(location.hostname)&&(r[T_]=N_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Hr.forceAllow_=!0}static forceDisallow(){Hr.forceDisallow_=!0}static isAvailable(){return Hr.forceAllow_?!0:!Hr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aI()&&!uI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=Se(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=i_(n),i=S_(r,RI);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[NI]="t",r[L_]=t,r[F_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=Se(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Wd{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=rI(),window[CI+this.uniqueCallbackIdentifier]=t,window[SI+this.uniqueCallbackIdentifier]=n,this.myIFrame=Wd.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Le("frame writing exception"),l.stack&&Le(l.stack),Le(l)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Le("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[L_]=this.myID,t[F_]=this.myPW,t[$_]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+j_+r.length<=B_;){const o=this.pendingSegs.shift();r=r+"&"+xI+i+"="+o.seg+"&"+kI+i+"="+o.ts+"&"+TI+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(PI)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Le("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const bI=16384,DI=45e3;let pl=null;typeof MozWebSocket<"u"?pl=MozWebSocket:typeof WebSocket<"u"&&(pl=WebSocket);class kt{constructor(t,n,r,i,s,o,l){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Us(this.connId),this.stats_=zd(n),this.connURL=kt.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[x_]=jd,typeof location<"u"&&location.hostname&&R_.test(location.hostname)&&(o[T_]=N_),n&&(o[k_]=n),r&&(o[P_]=r),i&&(o[_c]=i),s&&(o[A_]=s),M_(t,b_,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qn.set("previous_websocket_failure",!0);try{let r;u_(),this.mySock=new pl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&pl!==null&&!kt.forceDisallow_}static previouslyFailed(){return qn.isInMemoryStorage||qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){qn.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Ts(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(I(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=Se(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=S_(n,bI);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(DI))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kt.responsesRequiredToBeHealthy=2;kt.healthyTimeout=3e4;/**
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
 */class Rs{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Hr,kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=kt&&kt.isAvailable();let r=n&&!kt.previouslyFailed();if(t.webSocketOnly&&(n||Je("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[kt];else{const i=this.transports_=[];for(const s of Rs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Rs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Rs.globalTransportInitialized_=!1;/**
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
 */const OI=6e4,MI=5e3,LI=10*1024,FI=100*1024,qa="t",up="d",$I="s",cp="r",BI="e",dp="o",fp="a",hp="n",pp="p",jI="h";class zI{constructor(t,n,r,i,s,o,l,a,u,d){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Us("c:"+this.id+":"),this.transportManager_=new Rs(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=is(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>FI?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LI?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(qa in t){const n=t[qa];n===fp?this.upgradeIfSecondaryHealthy_():n===cp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===dp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=$i("t",t),r=$i("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:fp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:hp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=$i("t",t),r=$i("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=$i(qa,t);if(up in t){const r=t[up];if(n===jI){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===hp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===$I?this.onConnectionShutdown_(r):n===cp?this.onReset_(r):n===BI?yc("Server Error: "+r):n===dp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):yc("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jd!==r&&Je("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),is(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(OI))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):is(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(MI))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pp,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class W_{constructor(t){this.allowedEvents_=t,this.listeners_={},I(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){I(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
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
 */class ml extends W_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!a_()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ml}getInitialEvent(t){return I(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const mp=32,gp=768;class Q{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function U(){return new Q("")}function L(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ln(e){return e.pieces_.length-e.pieceNum_}function q(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new Q(e.pieces_,t)}function U_(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function WI(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function H_(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function V_(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new Q(t,0)}function me(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof Q)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new Q(n,0)}function B(e){return e.pieceNum_>=e.pieces_.length}function Ge(e,t){const n=L(e),r=L(t);if(n===null)return t;if(n===r)return Ge(q(e),q(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ud(e,t){if(Ln(e)!==Ln(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Tt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(Ln(e)>Ln(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class UI{constructor(t,n){this.errorPrefix_=n,this.parts_=H_(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zl(this.parts_[r]);G_(this)}}function HI(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Zl(t),G_(e)}function VI(e){const t=e.parts_.pop();e.byteLength_-=Zl(t),e.parts_.length>0&&(e.byteLength_-=1)}function G_(e){if(e.byteLength_>gp)throw new Error(e.errorPrefix_+"has a key path longer than "+gp+" bytes ("+e.byteLength_+").");if(e.parts_.length>mp)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+mp+") or object contains a cycle "+Vn(e))}function Vn(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
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
 */class Hd extends W_{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Hd}getInitialEvent(t){return I(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
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
 */const Bi=1e3,GI=60*5*1e3,yp=30*1e3,QI=1.3,KI=3e4,YI="server_kill",_p=3;class en extends z_{constructor(t,n,r,i,s,o,l,a){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=en.nextPersistentConnectionId_++,this.log_=Us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bi,this.maxReconnectDelay_=GI,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!u_())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hd.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&ml.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(Se(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new Xl,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;en.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,a))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&cn(t,"w")){const r=mi(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();Je(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||$C(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=yp)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=FC(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+Se(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):yc("Unrecognized action received from server: "+Se(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>KI&&(this.reconnectDelay_=Bi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*QI)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+en.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,f]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Le("getToken() completed but was canceled"):(Le("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=f&&f.token,l=new zI(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,h=>{Je(h+" ("+this.repoInfo_.toString()+")"),this.interrupt(YI)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&Je(c),a())}}}interrupt(t){Le("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Le("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Kh(this.interruptReasons_)&&(this.reconnectDelay_=Bi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>Bd(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new Q(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Le("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=_p&&(this.reconnectDelay_=yp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Le("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=_p&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+v_.replace(/\./g,"-")]=1,a_()?t["framework.cordova"]=1:bC()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=ml.getInstance().currentlyOnline();return Kh(this.interruptReasons_)&&t}}en.nextPersistentConnectionId_=0;en.nextConnectionId_=0;/**
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
 */class ea{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new F(gi,t),i=new F(gi,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
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
 */let mo;class Q_ extends ea{static get __EMPTY_NODE(){return mo}static set __EMPTY_NODE(t){mo=t}compare(t,n){return xi(t.name,n.name)}isDefinedOn(t){throw Ii("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return F.MIN}maxPost(){return new F(pr,mo)}makePost(t,n){return I(typeof t=="string","KeyIndex indexValue must always be a string."),new F(t,mo)}toString(){return".key"}}const ei=new Q_;/**
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
 */class go{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Ce{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Ce.RED,this.left=i??Qe.EMPTY_NODE,this.right=s??Qe.EMPTY_NODE}copy(t,n,r,i,s){return new Ce(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Qe.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return Qe.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Ce.RED=!0;Ce.BLACK=!1;class qI{copy(t,n,r,i,s){return this}insert(t,n,r){return new Ce(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Qe{constructor(t,n=Qe.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new Qe(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Ce.BLACK,null,null))}remove(t){return new Qe(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Ce.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new go(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new go(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new go(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new go(this.root_,null,this.comparator_,!0,t)}}Qe.EMPTY_NODE=new qI;/**
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
 */function XI(e,t){return xi(e.name,t.name)}function Vd(e,t){return xi(e,t)}/**
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
 */let vc;function JI(e){vc=e}const K_=function(e){return typeof e=="number"?"number:"+I_(e):"string:"+e},Y_=function(e){if(e.isLeafNode()){const t=e.val();I(typeof t=="string"||typeof t=="number"||typeof t=="object"&&cn(t,".sv"),"Priority must be a string or number.")}else I(e===vc||e.isEmpty(),"priority of unexpected type.");I(e===vc||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let vp;class ve{constructor(t,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Y_(this.priorityNode_)}static set __childrenNodeConstructor(t){vp=t}static get __childrenNodeConstructor(){return vp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new ve(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return B(t)?this:L(t)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=L(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||Ln(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+K_(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=I_(this.value_):t+=this.value_,this.lazyHash_=E_(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===ve.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof ve.__childrenNodeConstructor?-1:(I(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let q_,X_;function ZI(e){q_=e}function ex(e){X_=e}class tx extends ea{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?xi(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(pr,new ve("[PRIORITY-POST]",X_))}makePost(t,n){const r=q_(t);return new F(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const ue=new tx;/**
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
 */const nx=Math.log(2);class rx{constructor(t){const n=s=>parseInt(Math.log(s)/nx,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const gl=function(e,t,n,r){e.sort(t);const i=function(a,u){const d=u-a;let c,f;if(d===0)return null;if(d===1)return c=e[a],f=n?n(c):c,new Ce(f,c.node,Ce.BLACK,null,null);{const h=parseInt(d/2,10)+a,y=i(a,h),_=i(h+1,u);return c=e[h],f=n?n(c):c,new Ce(f,c.node,Ce.BLACK,y,_)}},s=function(a){let u=null,d=null,c=e.length;const f=function(y,_){const x=c-y,m=c;c-=y;const p=i(x+1,m),g=e[x],v=n?n(g):g;h(new Ce(v,g.node,_,null,p))},h=function(y){u?(u.left=y,u=y):(d=y,u=y)};for(let y=0;y<a.count;++y){const _=a.nextBitIsOne(),x=Math.pow(2,a.count-(y+1));_?f(x,Ce.BLACK):(f(x,Ce.BLACK),f(x,Ce.RED))}return d},o=new rx(e.length),l=s(o);return new Qe(r||t,l)};/**
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
 */let Xa;const Rr={};class Jt{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return I(Rr&&ue,"ChildrenNode.ts has not been loaded"),Xa=Xa||new Jt({".priority":Rr},{".priority":ue}),Xa}get(t){const n=mi(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof Qe?n:null}hasIndex(t){return cn(this.indexSet_,t.toString())}addIndex(t,n){I(t!==ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=gl(r,t.getCompare()):l=Rr;const a=t.toString(),u=Object.assign({},this.indexSet_);u[a]=t;const d=Object.assign({},this.indexes_);return d[a]=l,new Jt(d,u)}addToIndexes(t,n){const r=dl(this.indexes_,(i,s)=>{const o=mi(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===Rr)if(o.isDefinedOn(t.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==t.name&&l.push(u),u=a.getNext();return l.push(t),gl(l,o.getCompare())}else return Rr;else{const l=n.get(t.name);let a=i;return l&&(a=a.remove(new F(t.name,l))),a.insert(t,t.node)}});return new Jt(r,this.indexSet_)}removeFromIndexes(t,n){const r=dl(this.indexes_,i=>{if(i===Rr)return i;{const s=n.get(t.name);return s?i.remove(new F(t.name,s)):i}});return new Jt(r,this.indexSet_)}}/**
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
 */let ji;class A{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Y_(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ji||(ji=new A(new Qe(Vd),null,Jt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ji}updatePriority(t){return this.children_.isEmpty()?this:new A(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?ji:n}}getChild(t){const n=L(t);return n===null?this:this.getImmediateChild(n).getChild(q(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(I(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new F(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?ji:this.priorityNode_;return new A(i,o,s)}}updateChild(t,n){const r=L(t);if(r===null)return n;{I(L(t)!==".priority"||Ln(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ue,(o,l)=>{n[o]=l.val(t),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+K_(this.getPriority().val())+":"),this.forEachChild(ue,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":E_(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new F(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new F(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===Hs?-1:0}withIndex(t){if(t===ei||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===ei||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ue),i=n.getIterator(ue);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===ei?null:this.indexMap_.get(t.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class ix extends A{constructor(){super(new Qe(Vd),A.EMPTY_NODE,Jt.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return A.EMPTY_NODE}isEmpty(){return!1}}const Hs=new ix;Object.defineProperties(F,{MIN:{value:new F(gi,A.EMPTY_NODE)},MAX:{value:new F(pr,Hs)}});Q_.__EMPTY_NODE=A.EMPTY_NODE;ve.__childrenNodeConstructor=A;JI(Hs);ex(Hs);/**
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
 */const sx=!0;function Te(e,t=null){if(e===null)return A.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),I(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new ve(n,Te(t))}if(!(e instanceof Array)&&sx){const n=[];let r=!1;if(et(e,(o,l)=>{if(o.substring(0,1)!=="."){const a=Te(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return A.EMPTY_NODE;const s=gl(n,XI,o=>o.name,Vd);if(r){const o=gl(n,ue.getCompare());return new A(s,Te(t),new Jt({".priority":o},{".priority":ue}))}else return new A(s,Te(t),Jt.Default)}else{let n=A.EMPTY_NODE;return et(e,(r,i)=>{if(cn(e,r)&&r.substring(0,1)!=="."){const s=Te(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Te(t))}}ZI(Te);/**
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
 */class ox extends ea{constructor(t){super(),this.indexPath_=t,I(!B(t)&&L(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?xi(t.name,n.name):s}makePost(t,n){const r=Te(t),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const t=A.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new F(pr,t)}toString(){return H_(this.indexPath_,0).join("/")}}/**
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
 */class lx extends ea{compare(t,n){const r=t.node.compareTo(n.node);return r===0?xi(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(t,n){const r=Te(t);return new F(n,r)}toString(){return".value"}}const ax=new lx;/**
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
 */function J_(e){return{type:"value",snapshotNode:e}}function yi(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function Ps(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function As(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function ux(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
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
 */class Gd{constructor(t){this.index_=t}updateChild(t,n,r,i,s,o){I(t.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=t.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?t.hasChild(n)?o.trackChildChange(Ps(n,l)):I(t.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(yi(n,r)):o.trackChildChange(As(n,r,l))),t.isLeafNode()&&r.isEmpty())?t:t.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(t,n,r){return r!=null&&(t.isLeafNode()||t.forEachChild(ue,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ps(i,s))}),n.isLeafNode()||n.forEachChild(ue,(i,s)=>{if(t.hasChild(i)){const o=t.getImmediateChild(i);o.equals(s)||r.trackChildChange(As(i,s,o))}else r.trackChildChange(yi(i,s))})),n.withIndex(this.index_)}updatePriority(t,n){return t.isEmpty()?A.EMPTY_NODE:t.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class bs{constructor(t){this.indexedFilter_=new Gd(t.getIndex()),this.index_=t.getIndex(),this.startPost_=bs.getStartPost_(t),this.endPost_=bs.getEndPost_(t),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(t){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),t)<=0:this.index_.compare(this.getStartPost(),t)<0,r=this.endIsInclusive_?this.index_.compare(t,this.getEndPost())<=0:this.index_.compare(t,this.getEndPost())<0;return n&&r}updateChild(t,n,r,i,s,o){return this.matches(new F(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(t,n,r,i,s,o)}updateFullNode(t,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ue,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(t){if(t.hasStart()){const n=t.getIndexStartName();return t.getIndex().makePost(t.getIndexStartValue(),n)}else return t.getIndex().minPost()}static getEndPost_(t){if(t.hasEnd()){const n=t.getIndexEndName();return t.getIndex().makePost(t.getIndexEndValue(),n)}else return t.getIndex().maxPost()}}/**
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
 */class cx{constructor(t){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new bs(t),this.index_=t.getIndex(),this.limit_=t.getLimit(),this.reverse_=!t.isViewFromLeft(),this.startIsInclusive_=!t.startAfterSet_,this.endIsInclusive_=!t.endBeforeSet_}updateChild(t,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=A.EMPTY_NODE),t.getImmediateChild(n).equals(r)?t:t.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(t,n,r,i,s,o):this.fullLimitUpdateChild_(t,n,r,s,o)}updateFullNode(t,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(t,i,r)}updatePriority(t,n){return t}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(t,n,r,i,s){let o;if(this.reverse_){const c=this.index_.getCompare();o=(f,h)=>c(h,f)}else o=this.index_.getCompare();const l=t;I(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),d=this.rangedFilter_.matches(a);if(l.hasChild(n)){const c=l.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||l.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const h=f==null?1:o(f,a);if(d&&!r.isEmpty()&&h>=0)return s!=null&&s.trackChildChange(As(n,r,c)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ps(n,c));const _=l.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(yi(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?t:d&&o(u,a)>=0?(s!=null&&(s.trackChildChange(Ps(u.name,u.node)),s.trackChildChange(yi(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):t}}/**
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
 */class Qd{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:gi}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const t=new Qd;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function dx(e){return e.loadsAllData()?new Gd(e.getIndex()):e.hasLimit()?new cx(e):new bs(e)}function wp(e){const t={};if(e.isDefault())return t;let n;if(e.index_===ue?n="$priority":e.index_===ax?n="$value":e.index_===ei?n="$key":(I(e.index_ instanceof ox,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Se(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=Se(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+Se(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=Se(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+Se(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Ep(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==ue&&(t.i=e.index_.toString()),t}/**
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
 */class yl extends z_{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Us("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(I(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=yl.getListenId_(t,r),l={};this.listens_[o]=l;const a=wp(t._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),mi(this.listens_,o)===l){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(t,n){const r=yl.getListenId_(t,n);delete this.listens_[r]}get(t){const n=wp(t._queryParams),r=t._path.toString(),i=new Xl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+BC(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=Ts(l.responseText)}catch{Je("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&Je("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class fx{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
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
 */function _l(){return{value:null,children:new Map}}function Z_(e,t,n){if(B(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=L(t);e.children.has(r)||e.children.set(r,_l());const i=e.children.get(r);t=q(t),Z_(i,t,n)}}function wc(e,t,n){e.value!==null?n(t,e.value):hx(e,(r,i)=>{const s=new Q(t.toString()+"/"+r);wc(i,s,n)})}function hx(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
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
 */class px{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&et(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
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
 */const Cp=10*1e3,mx=30*1e3,gx=5*60*1e3;class yx{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new px(t);const r=Cp+(mx-Cp)*Math.random();is(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;et(t,(i,s)=>{s>0&&cn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),is(this.reportStats_.bind(this),Math.floor(Math.random()*2*gx))}}/**
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
 */var Nt;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Nt||(Nt={}));function ev(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Kd(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Yd(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
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
 */class vl{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Nt.ACK_USER_WRITE,this.source=ev()}operationForChild(t){if(B(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Q(t));return new vl(U(),n,this.revert)}}else return I(L(this.path)===t,"operationForChild called for unrelated child."),new vl(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Ds{constructor(t,n){this.source=t,this.path=n,this.type=Nt.LISTEN_COMPLETE}operationForChild(t){return B(this.path)?new Ds(this.source,U()):new Ds(this.source,q(this.path))}}/**
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
 */class mr{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Nt.OVERWRITE}operationForChild(t){return B(this.path)?new mr(this.source,U(),this.snap.getImmediateChild(t)):new mr(this.source,q(this.path),this.snap)}}/**
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
 */class Os{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Nt.MERGE}operationForChild(t){if(B(this.path)){const n=this.children.subtree(new Q(t));return n.isEmpty()?null:n.value?new mr(this.source,U(),n.value):new Os(this.source,U(),n)}else return I(L(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new Os(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class gr{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(B(t))return this.isFullyInitialized()&&!this.filtered_;const n=L(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}/**
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
 */class _x{constructor(t){this.query_=t,this.index_=this.query_._queryParams.getIndex()}}function vx(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(ux(o.childName,o.snapshotNode))}),zi(e,i,"child_removed",t,r,n),zi(e,i,"child_added",t,r,n),zi(e,i,"child_moved",s,r,n),zi(e,i,"child_changed",t,r,n),zi(e,i,"value",t,r,n),i}function zi(e,t,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>Ex(e,l,a)),o.forEach(l=>{const a=wx(e,l,s);i.forEach(u=>{u.respondsTo(l.type)&&t.push(u.createEvent(a,e.query_))})})}function wx(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function Ex(e,t,n){if(t.childName==null||n.childName==null)throw Ii("Should only compare child_ events.");const r=new F(t.childName,t.snapshotNode),i=new F(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
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
 */function ta(e,t){return{eventCache:e,serverCache:t}}function ss(e,t,n,r){return ta(new gr(t,n,r),e.serverCache)}function tv(e,t,n,r){return ta(e.eventCache,new gr(t,n,r))}function Ec(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function yr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
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
 */let Ja;const Cx=()=>(Ja||(Ja=new Qe(lI)),Ja);class ee{constructor(t,n=Cx()){this.value=t,this.children=n}static fromObject(t){let n=new ee(null);return et(t,(r,i)=>{n=n.set(new Q(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:U(),value:this.value};if(B(t))return null;{const r=L(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(t),n);return s!=null?{path:me(new Q(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(B(t))return this;{const n=L(t),r=this.children.get(n);return r!==null?r.subtree(q(t)):new ee(null)}}set(t,n){if(B(t))return new ee(n,this.children);{const r=L(t),s=(this.children.get(r)||new ee(null)).set(q(t),n),o=this.children.insert(r,s);return new ee(this.value,o)}}remove(t){if(B(t))return this.children.isEmpty()?new ee(null):new ee(null,this.children);{const n=L(t),r=this.children.get(n);if(r){const i=r.remove(q(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ee(null):new ee(this.value,s)}else return this}}get(t){if(B(t))return this.value;{const n=L(t),r=this.children.get(n);return r?r.get(q(t)):null}}setTree(t,n){if(B(t))return n;{const r=L(t),s=(this.children.get(r)||new ee(null)).setTree(q(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ee(this.value,o)}}fold(t){return this.fold_(U(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(me(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,U(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(B(t))return null;{const s=L(t),o=this.children.get(s);return o?o.findOnPath_(q(t),me(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,U(),n)}foreachOnPath_(t,n,r){if(B(t))return this;{this.value&&r(n,this.value);const i=L(t),s=this.children.get(i);return s?s.foreachOnPath_(q(t),me(n,i),r):new ee(null)}}foreach(t){this.foreach_(U(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(me(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
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
 */class bt{constructor(t){this.writeTree_=t}static empty(){return new bt(new ee(null))}}function os(e,t,n){if(B(t))return new bt(new ee(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=Ge(i,t);return s=s.updateChild(o,n),new bt(e.writeTree_.set(i,s))}else{const i=new ee(n),s=e.writeTree_.setTree(t,i);return new bt(s)}}}function Sp(e,t,n){let r=e;return et(n,(i,s)=>{r=os(r,me(t,i),s)}),r}function Ip(e,t){if(B(t))return bt.empty();{const n=e.writeTree_.setTree(t,new ee(null));return new bt(n)}}function Cc(e,t){return Ir(e,t)!=null}function Ir(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(Ge(n.path,t)):null}function xp(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(r,i)=>{t.push(new F(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new F(r,i.value))}),t}function An(e,t){if(B(t))return e;{const n=Ir(e,t);return n!=null?new bt(new ee(n)):new bt(e.writeTree_.subtree(t))}}function Sc(e){return e.writeTree_.isEmpty()}function _i(e,t){return nv(U(),e.writeTree_,t)}function nv(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=nv(me(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(me(e,".priority"),r)),n}}/**
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
 */function qd(e,t){return ov(t,e)}function Sx(e,t,n,r,i){I(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=os(e.visibleWrites,t,n)),e.lastWriteId=r}function Ix(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function xx(e,t){const n=e.allWrites.findIndex(l=>l.writeId===t);I(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const l=e.allWrites[o];l.visible&&(o>=n&&kx(l,r.path)?i=!1:Tt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return Tx(e),!0;if(r.snap)e.visibleWrites=Ip(e.visibleWrites,r.path);else{const l=r.children;et(l,a=>{e.visibleWrites=Ip(e.visibleWrites,me(r.path,a))})}return!0}else return!1}function kx(e,t){if(e.snap)return Tt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Tt(me(e.path,n),t))return!0;return!1}function Tx(e){e.visibleWrites=rv(e.allWrites,Nx,U()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function Nx(e){return e.visible}function rv(e,t,n){let r=bt.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let l;if(s.snap)Tt(n,o)?(l=Ge(n,o),r=os(r,l,s.snap)):Tt(o,n)&&(l=Ge(o,n),r=os(r,U(),s.snap.getChild(l)));else if(s.children){if(Tt(n,o))l=Ge(n,o),r=Sp(r,l,s.children);else if(Tt(o,n))if(l=Ge(o,n),B(l))r=Sp(r,U(),s.children);else{const a=mi(s.children,L(l));if(a){const u=a.getChild(q(l));r=os(r,U(),u)}}}else throw Ii("WriteRecord should have .snap or .children")}}return r}function iv(e,t,n,r,i){if(!r&&!i){const s=Ir(e.visibleWrites,t);if(s!=null)return s;{const o=An(e.visibleWrites,t);if(Sc(o))return n;if(n==null&&!Cc(o,U()))return null;{const l=n||A.EMPTY_NODE;return _i(o,l)}}}else{const s=An(e.visibleWrites,t);if(!i&&Sc(s))return n;if(!i&&n==null&&!Cc(s,U()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Tt(u.path,t)||Tt(t,u.path))},l=rv(e.allWrites,o,t),a=n||A.EMPTY_NODE;return _i(l,a)}}}function Rx(e,t,n){let r=A.EMPTY_NODE;const i=Ir(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(ue,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=An(e.visibleWrites,t);return n.forEachChild(ue,(o,l)=>{const a=_i(An(s,new Q(o)),l);r=r.updateImmediateChild(o,a)}),xp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=An(e.visibleWrites,t);return xp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function Px(e,t,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=me(t,n);if(Cc(e.visibleWrites,s))return null;{const o=An(e.visibleWrites,s);return Sc(o)?i.getChild(n):_i(o,i.getChild(n))}}function Ax(e,t,n,r){const i=me(t,n),s=Ir(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=An(e.visibleWrites,i);return _i(o,r.getNode().getImmediateChild(n))}else return null}function bx(e,t){return Ir(e.visibleWrites,t)}function Dx(e,t,n,r,i,s,o){let l;const a=An(e.visibleWrites,t),u=Ir(a,U());if(u!=null)l=u;else if(n!=null)l=_i(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),f=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let h=f.getNext();for(;h&&d.length<i;)c(h,r)!==0&&d.push(h),h=f.getNext();return d}else return[]}function Ox(){return{visibleWrites:bt.empty(),allWrites:[],lastWriteId:-1}}function wl(e,t,n,r){return iv(e.writeTree,e.treePath,t,n,r)}function Xd(e,t){return Rx(e.writeTree,e.treePath,t)}function kp(e,t,n,r){return Px(e.writeTree,e.treePath,t,n,r)}function El(e,t){return bx(e.writeTree,me(e.treePath,t))}function Mx(e,t,n,r,i,s){return Dx(e.writeTree,e.treePath,t,n,r,i,s)}function Jd(e,t,n){return Ax(e.writeTree,e.treePath,t,n)}function sv(e,t){return ov(me(e.treePath,t),e.writeTree)}function ov(e,t){return{treePath:e,writeTree:t}}/**
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
 */class Lx{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,As(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ps(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,yi(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,As(r,t.snapshotNode,i.oldSnap));else throw Ii("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class Fx{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const lv=new Fx;class Zd{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new gr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jd(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:yr(this.viewCache_),s=Mx(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}/**
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
 */function $x(e){return{filter:e}}function Bx(e,t){I(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),I(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function jx(e,t,n,r,i){const s=new Lx;let o,l;if(n.type===Nt.OVERWRITE){const u=n;u.source.fromUser?o=Ic(e,t,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered()&&!B(u.path),o=Cl(e,t,u.path,u.snap,r,i,l,s))}else if(n.type===Nt.MERGE){const u=n;u.source.fromUser?o=Wx(e,t,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered(),o=xc(e,t,u.path,u.children,r,i,l,s))}else if(n.type===Nt.ACK_USER_WRITE){const u=n;u.revert?o=Vx(e,t,u.path,r,i,s):o=Ux(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===Nt.LISTEN_COMPLETE)o=Hx(e,t,n.path,r,s);else throw Ii("Unknown operation type: "+n.type);const a=s.getChanges();return zx(t,o,a),{viewCache:o,changes:a}}function zx(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ec(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(J_(Ec(t)))}}function av(e,t,n,r,i,s){const o=t.eventCache;if(El(r,n)!=null)return t;{let l,a;if(B(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=yr(t),d=u instanceof A?u:A.EMPTY_NODE,c=Xd(r,d);l=e.filter.updateFullNode(t.eventCache.getNode(),c,s)}else{const u=wl(r,yr(t));l=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=L(n);if(u===".priority"){I(Ln(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=t.serverCache.getNode();const c=kp(r,n,d,a);c!=null?l=e.filter.updatePriority(d,c):l=o.getNode()}else{const d=q(n);let c;if(o.isCompleteForChild(u)){a=t.serverCache.getNode();const f=kp(r,n,o.getNode(),a);f!=null?c=o.getNode().getImmediateChild(u).updateChild(d,f):c=o.getNode().getImmediateChild(u)}else c=Jd(r,u,t.serverCache);c!=null?l=e.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return ss(t,l,o.isFullyInitialized()||B(n),e.filter.filtersNodes())}}function Cl(e,t,n,r,i,s,o,l){const a=t.serverCache;let u;const d=o?e.filter:e.filter.getIndexedFilter();if(B(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const h=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),h,null)}else{const h=L(n);if(!a.isCompleteForPath(n)&&Ln(n)>1)return t;const y=q(n),x=a.getNode().getImmediateChild(h).updateChild(y,r);h===".priority"?u=d.updatePriority(a.getNode(),x):u=d.updateChild(a.getNode(),h,x,y,lv,null)}const c=tv(t,u,a.isFullyInitialized()||B(n),d.filtersNodes()),f=new Zd(i,c,s);return av(e,c,n,i,f,l)}function Ic(e,t,n,r,i,s,o){const l=t.eventCache;let a,u;const d=new Zd(i,t,s);if(B(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),a=ss(t,u,!0,e.filter.filtersNodes());else{const c=L(n);if(c===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),a=ss(t,u,l.isFullyInitialized(),l.isFiltered());else{const f=q(n),h=l.getNode().getImmediateChild(c);let y;if(B(f))y=r;else{const _=d.getCompleteChild(c);_!=null?U_(f)===".priority"&&_.getChild(V_(f)).isEmpty()?y=_:y=_.updateChild(f,r):y=A.EMPTY_NODE}if(h.equals(y))a=t;else{const _=e.filter.updateChild(l.getNode(),c,y,f,d,o);a=ss(t,_,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function Tp(e,t){return e.eventCache.isCompleteForChild(t)}function Wx(e,t,n,r,i,s,o){let l=t;return r.foreach((a,u)=>{const d=me(n,a);Tp(t,L(d))&&(l=Ic(e,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=me(n,a);Tp(t,L(d))||(l=Ic(e,l,d,u,i,s,o))}),l}function Np(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function xc(e,t,n,r,i,s,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a=t,u;B(n)?u=r:u=new ee(null).setTree(n,r);const d=t.serverCache.getNode();return u.children.inorderTraversal((c,f)=>{if(d.hasChild(c)){const h=t.serverCache.getNode().getImmediateChild(c),y=Np(e,h,f);a=Cl(e,a,new Q(c),y,i,s,o,l)}}),u.children.inorderTraversal((c,f)=>{const h=!t.serverCache.isCompleteForChild(c)&&f.value===null;if(!d.hasChild(c)&&!h){const y=t.serverCache.getNode().getImmediateChild(c),_=Np(e,y,f);a=Cl(e,a,new Q(c),_,i,s,o,l)}}),a}function Ux(e,t,n,r,i,s,o){if(El(i,n)!=null)return t;const l=t.serverCache.isFiltered(),a=t.serverCache;if(r.value!=null){if(B(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Cl(e,t,n,a.getNode().getChild(n),i,s,l,o);if(B(n)){let u=new ee(null);return a.getNode().forEachChild(ei,(d,c)=>{u=u.set(new Q(d),c)}),xc(e,t,n,u,i,s,l,o)}else return t}else{let u=new ee(null);return r.foreach((d,c)=>{const f=me(n,d);a.isCompleteForPath(f)&&(u=u.set(d,a.getNode().getChild(f)))}),xc(e,t,n,u,i,s,l,o)}}function Hx(e,t,n,r,i){const s=t.serverCache,o=tv(t,s.getNode(),s.isFullyInitialized()||B(n),s.isFiltered());return av(e,o,n,r,lv,i)}function Vx(e,t,n,r,i,s){let o;if(El(r,n)!=null)return t;{const l=new Zd(r,t,i),a=t.eventCache.getNode();let u;if(B(n)||L(n)===".priority"){let d;if(t.serverCache.isFullyInitialized())d=wl(r,yr(t));else{const c=t.serverCache.getNode();I(c instanceof A,"serverChildren would be complete if leaf node"),d=Xd(r,c)}d=d,u=e.filter.updateFullNode(a,d,s)}else{const d=L(n);let c=Jd(r,d,t.serverCache);c==null&&t.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=e.filter.updateChild(a,d,c,q(n),l,s):t.eventCache.getNode().hasChild(d)?u=e.filter.updateChild(a,d,A.EMPTY_NODE,q(n),l,s):u=a,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=wl(r,yr(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||El(r,U())!=null,ss(t,u,o,e.filter.filtersNodes())}}/**
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
 */class Gx{constructor(t,n){this.query_=t,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new Gd(r.getIndex()),s=dx(r);this.processor_=$x(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,l.getNode(),null),d=new gr(a,o.isFullyInitialized(),i.filtersNodes()),c=new gr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ta(c,d),this.eventGenerator_=new _x(this.query_)}get query(){return this.query_}}function Qx(e){return e.viewCache_.serverCache.getNode()}function Kx(e,t){const n=yr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!B(t)&&!n.getImmediateChild(L(t)).isEmpty())?n.getChild(t):null}function Rp(e){return e.eventRegistrations_.length===0}function Yx(e,t){e.eventRegistrations_.push(t)}function Pp(e,t,n){const r=[];if(n){I(t==null,"A cancel should cancel all event registrations.");const i=e.query._path;e.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(t){let i=[];for(let s=0;s<e.eventRegistrations_.length;++s){const o=e.eventRegistrations_[s];if(!o.matches(t))i.push(o);else if(t.hasAnyCallback()){i=i.concat(e.eventRegistrations_.slice(s+1));break}}e.eventRegistrations_=i}else e.eventRegistrations_=[];return r}function Ap(e,t,n,r){t.type===Nt.MERGE&&t.source.queryId!==null&&(I(yr(e.viewCache_),"We should always have a full cache before handling merges"),I(Ec(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=jx(e.processor_,i,t,n,r);return Bx(e.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,uv(e,s.changes,s.viewCache.eventCache.getNode(),null)}function qx(e,t){const n=e.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(s,o)=>{r.push(yi(s,o))}),n.isFullyInitialized()&&r.push(J_(n.getNode())),uv(e,r,n.getNode(),t)}function uv(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return vx(e.eventGenerator_,t,n,i)}/**
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
 */let Sl;class Xx{constructor(){this.views=new Map}}function Jx(e){I(!Sl,"__referenceConstructor has already been defined"),Sl=e}function Zx(){return I(Sl,"Reference.ts has not been loaded"),Sl}function ek(e){return e.views.size===0}function ef(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),Ap(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(Ap(o,t,n,r));return s}}function tk(e,t,n,r,i){const s=t._queryIdentifier,o=e.views.get(s);if(!o){let l=wl(n,i?r:null),a=!1;l?a=!0:r instanceof A?(l=Xd(n,r),a=!1):(l=A.EMPTY_NODE,a=!1);const u=ta(new gr(l,a,!1),new gr(r,i,!1));return new Gx(t,u)}return o}function nk(e,t,n,r,i,s){const o=tk(e,t,r,i,s);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),Yx(o,n),qx(o,n)}function rk(e,t,n,r){const i=t._queryIdentifier,s=[];let o=[];const l=Fn(e);if(i==="default")for(const[a,u]of e.views.entries())o=o.concat(Pp(u,n,r)),Rp(u)&&(e.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=e.views.get(i);a&&(o=o.concat(Pp(a,n,r)),Rp(a)&&(e.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!Fn(e)&&s.push(new(Zx())(t._repo,t._path)),{removed:s,events:o}}function cv(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function ti(e,t){let n=null;for(const r of e.views.values())n=n||Kx(r,t);return n}function dv(e,t){if(t._queryParams.loadsAllData())return na(e);{const r=t._queryIdentifier;return e.views.get(r)}}function fv(e,t){return dv(e,t)!=null}function Fn(e){return na(e)!=null}function na(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}/**
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
 */let Il;function ik(e){I(!Il,"__referenceConstructor has already been defined"),Il=e}function sk(){return I(Il,"Reference.ts has not been loaded"),Il}let ok=1;class bp{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ee(null),this.pendingWriteTree_=Ox(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function hv(e,t,n,r,i){return Sx(e.pendingWriteTree_,t,n,r,i),i?Vs(e,new mr(ev(),t,n)):[]}function Xn(e,t,n=!1){const r=Ix(e.pendingWriteTree_,t);if(xx(e.pendingWriteTree_,t)){let s=new ee(null);return r.snap!=null?s=s.set(U(),!0):et(r.children,o=>{s=s.set(new Q(o),!0)}),Vs(e,new vl(r.path,s,n))}else return[]}function ra(e,t,n){return Vs(e,new mr(Kd(),t,n))}function lk(e,t,n){const r=ee.fromObject(n);return Vs(e,new Os(Kd(),t,r))}function ak(e,t){return Vs(e,new Ds(Kd(),t))}function uk(e,t,n){const r=nf(e,n);if(r){const i=rf(r),s=i.path,o=i.queryId,l=Ge(s,t),a=new Ds(Yd(o),l);return sf(e,s,a)}else return[]}function kc(e,t,n,r,i=!1){const s=t._path,o=e.syncPointTree_.get(s);let l=[];if(o&&(t._queryIdentifier==="default"||fv(o,t))){const a=rk(o,t,n,r);ek(o)&&(e.syncPointTree_=e.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const d=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,c=e.syncPointTree_.findOnPath(s,(f,h)=>Fn(h));if(d&&!c){const f=e.syncPointTree_.subtree(s);if(!f.isEmpty()){const h=fk(f);for(let y=0;y<h.length;++y){const _=h[y],x=_.query,m=gv(e,_);e.listenProvider_.startListening(ls(x),xl(e,x),m.hashFn,m.onComplete)}}}!c&&u.length>0&&!r&&(d?e.listenProvider_.stopListening(ls(t),null):u.forEach(f=>{const h=e.queryToTagMap.get(ia(f));e.listenProvider_.stopListening(ls(f),h)}))}hk(e,u)}return l}function ck(e,t,n,r){const i=nf(e,r);if(i!=null){const s=rf(i),o=s.path,l=s.queryId,a=Ge(o,t),u=new mr(Yd(l),a,n);return sf(e,o,u)}else return[]}function dk(e,t,n,r){const i=nf(e,r);if(i){const s=rf(i),o=s.path,l=s.queryId,a=Ge(o,t),u=ee.fromObject(n),d=new Os(Yd(l),a,u);return sf(e,o,d)}else return[]}function Dp(e,t,n,r=!1){const i=t._path;let s=null,o=!1;e.syncPointTree_.foreachOnPath(i,(f,h)=>{const y=Ge(f,i);s=s||ti(h,y),o=o||Fn(h)});let l=e.syncPointTree_.get(i);l?(o=o||Fn(l),s=s||ti(l,U())):(l=new Xx,e.syncPointTree_=e.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=A.EMPTY_NODE,e.syncPointTree_.subtree(i).foreachChild((h,y)=>{const _=ti(y,U());_&&(s=s.updateImmediateChild(h,_))}));const u=fv(l,t);if(!u&&!t._queryParams.loadsAllData()){const f=ia(t);I(!e.queryToTagMap.has(f),"View does not exist, but we have a tag");const h=pk();e.queryToTagMap.set(f,h),e.tagToQueryMap.set(h,f)}const d=qd(e.pendingWriteTree_,i);let c=nk(l,t,n,d,s,a);if(!u&&!o&&!r){const f=dv(l,t);c=c.concat(mk(e,t,f))}return c}function tf(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,l)=>{const a=Ge(o,t),u=ti(l,a);if(u)return u});return iv(i,t,s,n,!0)}function Vs(e,t){return pv(t,e.syncPointTree_,null,qd(e.pendingWriteTree_,U()))}function pv(e,t,n,r){if(B(e.path))return mv(e,t,n,r);{const i=t.get(U());n==null&&i!=null&&(n=ti(i,U()));let s=[];const o=L(e.path),l=e.operationForChild(o),a=t.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=sv(r,o);s=s.concat(pv(l,a,u,d))}return i&&(s=s.concat(ef(i,e,r,n))),s}}function mv(e,t,n,r){const i=t.get(U());n==null&&i!=null&&(n=ti(i,U()));let s=[];return t.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=sv(r,o),d=e.operationForChild(o);d&&(s=s.concat(mv(d,l,a,u)))}),i&&(s=s.concat(ef(i,e,r,n))),s}function gv(e,t){const n=t.query,r=xl(e,n);return{hashFn:()=>(Qx(t)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?uk(e,n._path,r):ak(e,n._path);{const s=cI(i,n);return kc(e,n,null,s)}}}}function xl(e,t){const n=ia(t);return e.queryToTagMap.get(n)}function ia(e){return e._path.toString()+"$"+e._queryIdentifier}function nf(e,t){return e.tagToQueryMap.get(t)}function rf(e){const t=e.indexOf("$");return I(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new Q(e.substr(0,t))}}function sf(e,t,n){const r=e.syncPointTree_.get(t);I(r,"Missing sync point for query tag that we're tracking");const i=qd(e.pendingWriteTree_,t);return ef(r,n,i,null)}function fk(e){return e.fold((t,n,r)=>{if(n&&Fn(n))return[na(n)];{let i=[];return n&&(i=cv(n)),et(r,(s,o)=>{i=i.concat(o)}),i}})}function ls(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new(sk())(e._repo,e._path):e}function hk(e,t){for(let n=0;n<t.length;++n){const r=t[n];if(!r._queryParams.loadsAllData()){const i=ia(r),s=e.queryToTagMap.get(i);e.queryToTagMap.delete(i),e.tagToQueryMap.delete(s)}}}function pk(){return ok++}function mk(e,t,n){const r=t._path,i=xl(e,t),s=gv(e,n),o=e.listenProvider_.startListening(ls(t),i,s.hashFn,s.onComplete),l=e.syncPointTree_.subtree(r);if(i)I(!Fn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,d,c)=>{if(!B(u)&&d&&Fn(d))return[na(d).query];{let f=[];return d&&(f=f.concat(cv(d).map(h=>h.query))),et(c,(h,y)=>{f=f.concat(y)}),f}});for(let u=0;u<a.length;++u){const d=a[u];e.listenProvider_.stopListening(ls(d),xl(e,d))}}return o}/**
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
 */class of{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new of(n)}node(){return this.node_}}class lf{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=me(this.path_,t);return new lf(this.syncTree_,n)}node(){return tf(this.syncTree_,this.path_)}}const gk=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Op=function(e,t,n){if(!e||typeof e!="object")return e;if(I(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return yk(e[".sv"],t,n);if(typeof e[".sv"]=="object")return _k(e[".sv"],t);I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},yk=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+e)}},_k=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=t.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},vk=function(e,t,n,r){return af(t,new lf(n,e),r)},yv=function(e,t,n){return af(e,new of(t),n)};function af(e,t,n){const r=e.getPriority().val(),i=Op(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,l=Op(o.getValue(),t,n);return l!==o.getValue()||i!==o.getPriority().val()?new ve(l,Te(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(ue,(l,a)=>{const u=af(a,t.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
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
 */class uf{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function cf(e,t){let n=t instanceof Q?t:new Q(t),r=e,i=L(n);for(;i!==null;){const s=mi(r.node.children,i)||{children:{},childCount:0};r=new uf(i,r,s),n=q(n),i=L(n)}return r}function Ti(e){return e.node.value}function _v(e,t){e.node.value=t,Tc(e)}function vv(e){return e.node.childCount>0}function wk(e){return Ti(e)===void 0&&!vv(e)}function sa(e,t){et(e.node.children,(n,r)=>{t(new uf(n,e,r))})}function wv(e,t,n,r){n&&!r&&t(e),sa(e,i=>{wv(i,t,!0,r)}),n&&r&&t(e)}function Ek(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function Gs(e){return new Q(e.parent===null?e.name:Gs(e.parent)+"/"+e.name)}function Tc(e){e.parent!==null&&Ck(e.parent,e.name,e)}function Ck(e,t,n){const r=wk(n),i=cn(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Tc(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Tc(e))}/**
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
 */const Sk=/[\[\].#$\/\u0000-\u001F\u007F]/,Ik=/[\[\].#$\u0000-\u001F\u007F]/,Za=10*1024*1024,Ev=function(e){return typeof e=="string"&&e.length!==0&&!Sk.test(e)},Cv=function(e){return typeof e=="string"&&e.length!==0&&!Ik.test(e)},xk=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Cv(e)},Sv=function(e,t,n,r){r&&t===void 0||df(Ld(e,"value"),t,n)},df=function(e,t,n){const r=n instanceof Q?new UI(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+Vn(r));if(typeof t=="function")throw new Error(e+"contains a function "+Vn(r)+" with contents = "+t.toString());if(C_(t))throw new Error(e+"contains "+t.toString()+" "+Vn(r));if(typeof t=="string"&&t.length>Za/3&&Zl(t)>Za)throw new Error(e+"contains a string greater than "+Za+" utf8 bytes "+Vn(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(et(t,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Ev(o)))throw new Error(e+" contains an invalid key ("+o+") "+Vn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);HI(r,o),df(e,l,r),VI(r)}),i&&s)throw new Error(e+' contains ".value" child '+Vn(r)+" in addition to actual children.")}},Iv=function(e,t,n,r){if(!(r&&n===void 0)&&!Cv(n))throw new Error(Ld(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},kk=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Iv(e,t,n,r)},xv=function(e,t){if(L(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},Tk=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!Ev(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!xk(n))throw new Error(Ld(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class Nk{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ff(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!Ud(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function kv(e,t,n){ff(e,n),Tv(e,r=>Ud(r,t))}function an(e,t,n){ff(e,n),Tv(e,r=>Tt(r,t)||Tt(t,r))}function Tv(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(Rk(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Rk(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();nr&&Le("event: "+n.toString()),ki(r)}}}/**
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
 */const Pk="repo_interrupt",Ak=25;class bk{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Nk,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_l(),this.transactionQueueTree_=new uf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Dk(e,t,n){if(e.stats_=zd(e.repoInfo_),e.forceRestClient_||pI())e.server_=new yl(e.repoInfo_,(r,i,s,o)=>{Mp(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Lp(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Se(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new en(e.repoInfo_,t,(r,i,s,o)=>{Mp(e,r,i,s,o)},r=>{Lp(e,r)},r=>{Ok(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=vI(e.repoInfo_,()=>new yx(e.stats_,e.server_)),e.infoData_=new fx,e.infoSyncTree_=new bp({startListening:(r,i,s,o)=>{let l=[];const a=e.infoData_.getNode(r._path);return a.isEmpty()||(l=ra(e.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),pf(e,"connected",!1),e.serverSyncTree_=new bp({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);an(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function Nv(e){const n=e.infoData_.getNode(new Q(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function hf(e){return gk({timestamp:Nv(e)})}function Mp(e,t,n,r,i){e.dataUpdateCount++;const s=new Q(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const a=dl(n,u=>Te(u));o=dk(e.serverSyncTree_,s,a,i)}else{const a=Te(n);o=ck(e.serverSyncTree_,s,a,i)}else if(r){const a=dl(n,u=>Te(u));o=lk(e.serverSyncTree_,s,a)}else{const a=Te(n);o=ra(e.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=oa(e,s)),an(e.eventQueue_,l,o)}function Lp(e,t){pf(e,"connected",t),t===!1&&Lk(e)}function Ok(e,t){et(t,(n,r)=>{pf(e,n,r)})}function pf(e,t,n){const r=new Q("/.info/"+t),i=Te(n);e.infoData_.updateSnapshot(r,i);const s=ra(e.infoSyncTree_,r,i);an(e.eventQueue_,r,s)}function Rv(e){return e.nextWriteId_++}function Mk(e,t,n,r,i){mf(e,"set",{path:t.toString(),value:n,priority:r});const s=hf(e),o=Te(n,r),l=tf(e.serverSyncTree_,t),a=yv(o,l,s),u=Rv(e),d=hv(e.serverSyncTree_,t,a,u,!0);ff(e.eventQueue_,d),e.server_.put(t.toString(),o.val(!0),(f,h)=>{const y=f==="ok";y||Je("set at "+t+" failed: "+f);const _=Xn(e.serverSyncTree_,u,!y);an(e.eventQueue_,t,_),Bk(e,i,f,h)});const c=Ov(e,t);oa(e,c),an(e.eventQueue_,c,[])}function Lk(e){mf(e,"onDisconnectEvents");const t=hf(e),n=_l();wc(e.onDisconnect_,U(),(i,s)=>{const o=vk(i,s,e.serverSyncTree_,t);Z_(n,i,o)});let r=[];wc(n,U(),(i,s)=>{r=r.concat(ra(e.serverSyncTree_,i,s));const o=Ov(e,i);oa(e,o)}),e.onDisconnect_=_l(),an(e.eventQueue_,U(),r)}function Fk(e,t,n){let r;L(t._path)===".info"?r=Dp(e.infoSyncTree_,t,n):r=Dp(e.serverSyncTree_,t,n),kv(e.eventQueue_,t._path,r)}function Fp(e,t,n){let r;L(t._path)===".info"?r=kc(e.infoSyncTree_,t,n):r=kc(e.serverSyncTree_,t,n),kv(e.eventQueue_,t._path,r)}function $k(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Pk)}function mf(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Le(n,...t)}function Bk(e,t,n,r){t&&ki(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,t(o)}})}function Pv(e,t,n){return tf(e.serverSyncTree_,t,n)||A.EMPTY_NODE}function gf(e,t=e.transactionQueueTree_){if(t||la(e,t),Ti(t)){const n=bv(e,t);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&jk(e,Gs(t),n)}else vv(t)&&sa(t,n=>{gf(e,n)})}function jk(e,t,n){const r=n.map(u=>u.currentWriteId),i=Pv(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=Ge(t,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=t;e.server_.put(a.toString(),l,u=>{mf(e,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let f=0;f<n.length;f++)n[f].status=2,d=d.concat(Xn(e.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&c.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();la(e,cf(e.transactionQueueTree_,t)),gf(e,e.transactionQueueTree_),an(e.eventQueue_,t,d);for(let f=0;f<c.length;f++)ki(c[f])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{Je("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}oa(e,t)}},o)}function oa(e,t){const n=Av(e,t),r=Gs(n),i=bv(e,n);return zk(e,i,r),r}function zk(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<t.length;l++){const a=t[l],u=Ge(n,a.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Xn(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=Ak)d=!0,c="maxretry",i=i.concat(Xn(e.serverSyncTree_,a.currentWriteId,!0));else{const f=Pv(e,a.path,o);a.currentInputSnapshot=f;const h=t[l].update(f.val());if(h!==void 0){df("transaction failed: Data returned ",h,a.path);let y=Te(h);typeof h=="object"&&h!=null&&cn(h,".priority")||(y=y.updatePriority(f.getPriority()));const x=a.currentWriteId,m=hf(e),p=yv(y,f,m);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=p,a.currentWriteId=Rv(e),o.splice(o.indexOf(x),1),i=i.concat(hv(e.serverSyncTree_,a.path,p,a.currentWriteId,a.applyLocally)),i=i.concat(Xn(e.serverSyncTree_,x,!0))}else d=!0,c="nodata",i=i.concat(Xn(e.serverSyncTree_,a.currentWriteId,!0))}an(e.eventQueue_,n,i),i=[],d&&(t[l].status=2,function(f){setTimeout(f,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(c==="nodata"?r.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):r.push(()=>t[l].onComplete(new Error(c),!1,null))))}la(e,e.transactionQueueTree_);for(let l=0;l<r.length;l++)ki(r[l]);gf(e,e.transactionQueueTree_)}function Av(e,t){let n,r=e.transactionQueueTree_;for(n=L(t);n!==null&&Ti(r)===void 0;)r=cf(r,n),t=q(t),n=L(t);return r}function bv(e,t){const n=[];return Dv(e,t,n),n.sort((r,i)=>r.order-i.order),n}function Dv(e,t,n){const r=Ti(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);sa(t,i=>{Dv(e,i,n)})}function la(e,t){const n=Ti(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,_v(t,n.length>0?n:void 0)}sa(t,r=>{la(e,r)})}function Ov(e,t){const n=Gs(Av(e,t)),r=cf(e.transactionQueueTree_,t);return Ek(r,i=>{eu(e,i)}),eu(e,r),wv(r,i=>{eu(e,i)}),n}function eu(e,t){const n=Ti(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Xn(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?_v(t,void 0):n.length=s+1,an(e.eventQueue_,Gs(t),i);for(let o=0;o<r.length;o++)ki(r[o])}}/**
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
 */function Wk(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function Uk(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):Je(`Invalid query segment '${n}' in query '${e}'`)}return t}const $p=function(e,t){const n=Hk(e),r=n.namespace;n.domain==="firebase.com"&&ln(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&ln("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||sI();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new O_(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new Q(n.pathString)}},Hk=function(e){let t="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(l=e.substring(0,u-1),e=e.substring(u+2));let d=e.indexOf("/");d===-1&&(d=e.length);let c=e.indexOf("?");c===-1&&(c=e.length),t=e.substring(0,Math.min(d,c)),d<c&&(i=Wk(e.substring(d,c)));const f=Uk(e.substring(Math.min(e.length,c)));u=t.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(t.substring(u+1),10)):u=t.length;const h=t.slice(0,u);if(h.toLowerCase()==="localhost")n="localhost";else if(h.split(".").length<=2)n=h;else{const y=t.indexOf(".");r=t.substring(0,y).toLowerCase(),n=t.substring(y+1),s=r}"ns"in f&&(s=f.ns)}return{host:t,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
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
 */const Bp="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Vk=function(){let e=0;const t=[];return function(n){const r=n===e;e=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Bp.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Bp.charAt(t[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class Gk{constructor(t,n){this.snapshotCallback=t,this.cancelCallback=n}onValue(t,n){this.snapshotCallback.call(null,t,n)}onCancel(t){return I(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,t)}get hasCancelCallback(){return!!this.cancelCallback}matches(t){return this.snapshotCallback===t.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===t.snapshotCallback.userCallback&&this.snapshotCallback.context===t.snapshotCallback.context}}/**
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
 */class yf{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return B(this._path)?null:U_(this._path)}get ref(){return new dn(this._repo,this._path)}get _queryIdentifier(){const t=Ep(this._queryParams),n=Bd(t);return n==="{}"?"default":n}get _queryObject(){return Ep(this._queryParams)}isEqual(t){if(t=zn(t),!(t instanceof yf))return!1;const n=this._repo===t._repo,r=Ud(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+WI(this._path)}}class dn extends yf{constructor(t,n){super(t,n,new Qd,!1)}get parent(){const t=V_(this._path);return t===null?null:new dn(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}class Ms{constructor(t,n,r){this._node=t,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(t){const n=new Q(t),r=vi(this.ref,t);return new Ms(this._node.getChild(n),r,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(t){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>t(new Ms(i,vi(this.ref,r),ue)))}hasChild(t){const n=new Q(t);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function yo(e,t){return e=zn(e),e._checkNotDeleted("ref"),t!==void 0?vi(e._root,t):e._root}function vi(e,t){return e=zn(e),L(e._path)===null?kk("child","path",t,!1):Iv("child","path",t,!1),new dn(e._repo,me(e._path,t))}function Qk(e,t){e=zn(e),xv("push",e._path),Sv("push",t,e._path,!0);const n=Nv(e._repo),r=Vk(n),i=vi(e,r),s=vi(e,r);let o;return t!=null?o=Fv(s,t).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function Fv(e,t){e=zn(e),xv("set",e._path),Sv("set",t,e._path,!1);const n=new Xl;return Mk(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}class _f{constructor(t){this.callbackContext=t}respondsTo(t){return t==="value"}createEvent(t,n){const r=n._queryParams.getIndex();return new Mv("value",this,new Ms(t.snapshotNode,new dn(n._repo,n._path),r))}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,null)}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Lv(this,t,n):null}matches(t){return t instanceof _f?!t.callbackContext||!this.callbackContext?!0:t.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class vf{constructor(t,n){this.eventType=t,this.callbackContext=n}respondsTo(t){let n=t==="children_added"?"child_added":t;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(t,n){return this.callbackContext.hasCancelCallback?new Lv(this,t,n):null}createEvent(t,n){I(t.childName!=null,"Child events should have a childName.");const r=vi(new dn(n._repo,n._path),t.childName),i=n._queryParams.getIndex();return new Mv(t.type,this,new Ms(t.snapshotNode,r,i),t.prevName)}getEventRunner(t){return t.getEventType()==="cancel"?()=>this.callbackContext.onCancel(t.error):()=>this.callbackContext.onValue(t.snapshot,t.prevName)}matches(t){return t instanceof vf?this.eventType===t.eventType&&(!this.callbackContext||!t.callbackContext||this.callbackContext.matches(t.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Kk(e,t,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(d,c)=>{Fp(e._repo,e,l),a(d,c)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new Gk(n,s||void 0),l=t==="value"?new _f(o):new vf(t,o);return Fk(e._repo,e,l),()=>Fp(e._repo,e,l)}function jp(e,t,n,r){return Kk(e,"value",t,n,r)}Jx(dn);ik(dn);/**
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
 */const Yk="FIREBASE_DATABASE_EMULATOR_HOST",Nc={};let qk=!1;function Xk(e,t,n,r){e.repoInfo_=new O_(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function Jk(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||ln("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Le("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=$p(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Yk]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=$p(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Zr(Zr.OWNER):new gI(e.name,e.options,t);Tk("Invalid Firebase Database URL",o),B(o.path)||ln("Database URL must point to the root of a Firebase Database (not including a child path).");const c=eT(l,e,d,new mI(e.name,n));return new tT(c,e)}function Zk(e,t){const n=Nc[t];(!n||n[e.key]!==e)&&ln(`Database ${t}(${e.repoInfo_}) has already been deleted.`),$k(e),delete n[e.key]}function eT(e,t,n,r){let i=Nc[t.name];i||(i={},Nc[t.name]=i);let s=i[e.toURLString()];return s&&ln("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new bk(e,qk,n,r),i[e.toURLString()]=s,s}class tT{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Dk(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new dn(this._repo,U())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Zk(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&ln("Cannot call "+t+" on a deleted database.")}}function nT(e=g_(),t){const n=zs(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=NC("database");r&&rT(n,...r)}return n}function rT(e,t,n,r={}){e=zn(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&ln("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&ln('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Zr(Zr.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:RC(r.mockUserToken,e.app.options.projectId);s=new Zr(o)}Xk(i,t,n,s)}/**
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
 */function iT(e){eI(WS),Mn(new on("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return Jk(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ut(ip,sp,e),Ut(ip,sp,"esm2017")}en.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};en.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};iT();const sT=(e,t)=>t.some(n=>e instanceof n);let zp,Wp;function oT(){return zp||(zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lT(){return Wp||(Wp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $v=new WeakMap,Rc=new WeakMap,Bv=new WeakMap,tu=new WeakMap,wf=new WeakMap;function aT(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(bn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$v.set(n,e)}).catch(()=>{}),wf.set(t,e),t}function uT(e){if(Rc.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Rc.set(e,t)}let Pc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Rc.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Bv.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return bn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function cT(e){Pc=e(Pc)}function dT(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(nu(this),t,...n);return Bv.set(r,t.sort?t.sort():[t]),bn(r)}:lT().includes(e)?function(...t){return e.apply(nu(this),t),bn($v.get(this))}:function(...t){return bn(e.apply(nu(this),t))}}function fT(e){return typeof e=="function"?dT(e):(e instanceof IDBTransaction&&uT(e),sT(e,oT())?new Proxy(e,Pc):e)}function bn(e){if(e instanceof IDBRequest)return aT(e);if(tu.has(e))return tu.get(e);const t=fT(e);return t!==e&&(tu.set(e,t),wf.set(t,e)),t}const nu=e=>wf.get(e);function hT(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=bn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(bn(o.result),a.oldVersion,a.newVersion,bn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),l}const pT=["get","getKey","getAll","getAllKeys","count"],mT=["put","add","delete","clear"],ru=new Map;function Up(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ru.get(t))return ru.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=mT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pT.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return ru.set(t,s),s}cT(e=>({...e,get:(t,n,r)=>Up(t,n)||e.get(t,n,r),has:(t,n)=>!!Up(t,n)||e.has(t,n)}));const jv="@firebase/installations",Ef="0.6.4";/**
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
 */const zv=1e4,Wv=`w:${Ef}`,Uv="FIS_v2",gT="https://firebaseinstallations.googleapis.com/v1",yT=60*60*1e3,_T="installations",vT="Installations";/**
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
 */const wT={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},_r=new Jl(_T,vT,wT);function Hv(e){return e instanceof Sr&&e.code.includes("request-failed")}/**
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
 */function Vv({projectId:e}){return`${gT}/projects/${e}/installations`}function Gv(e){return{token:e.token,requestStatus:2,expiresIn:CT(e.expiresIn),creationTime:Date.now()}}async function Qv(e,t){const r=(await t.json()).error;return _r.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Kv({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function ET(e,{refreshToken:t}){const n=Kv(e);return n.append("Authorization",ST(t)),n}async function Yv(e){const t=await e();return t.status>=500&&t.status<600?e():t}function CT(e){return Number(e.replace("s","000"))}function ST(e){return`${Uv} ${e}`}/**
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
 */async function IT({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Vv(e),i=Kv(e),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:Uv,appId:e.appId,sdkVersion:Wv},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Yv(()=>fetch(r,l));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Gv(u.authToken)}}else throw await Qv("Create Installation",a)}/**
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
 */function qv(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function xT(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const kT=/^[cdef][\w-]{21}$/,Ac="";function TT(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=NT(e);return kT.test(n)?n:Ac}catch{return Ac}}function NT(e){return xT(e).substr(0,22)}/**
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
 */function aa(e){return`${e.appName}!${e.appId}`}/**
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
 */const Xv=new Map;function Jv(e,t){const n=aa(e);Zv(n,t),RT(n,t)}function Zv(e,t){const n=Xv.get(e);if(n)for(const r of n)r(t)}function RT(e,t){const n=PT();n&&n.postMessage({key:e,fid:t}),AT()}let Jn=null;function PT(){return!Jn&&"BroadcastChannel"in self&&(Jn=new BroadcastChannel("[Firebase] FID Change"),Jn.onmessage=e=>{Zv(e.data.key,e.data.fid)}),Jn}function AT(){Xv.size===0&&Jn&&(Jn.close(),Jn=null)}/**
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
 */const bT="firebase-installations-database",DT=1,vr="firebase-installations-store";let iu=null;function Cf(){return iu||(iu=hT(bT,DT,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(vr)}}})),iu}async function kl(e,t){const n=aa(e),i=(await Cf()).transaction(vr,"readwrite"),s=i.objectStore(vr),o=await s.get(n);return await s.put(t,n),await i.done,(!o||o.fid!==t.fid)&&Jv(e,t.fid),t}async function e0(e){const t=aa(e),r=(await Cf()).transaction(vr,"readwrite");await r.objectStore(vr).delete(t),await r.done}async function ua(e,t){const n=aa(e),i=(await Cf()).transaction(vr,"readwrite"),s=i.objectStore(vr),o=await s.get(n),l=t(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&Jv(e,l.fid),l}/**
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
 */async function Sf(e){let t;const n=await ua(e.appConfig,r=>{const i=OT(r),s=MT(e,i);return t=s.registrationPromise,s.installationEntry});return n.fid===Ac?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function OT(e){const t=e||{fid:TT(),registrationStatus:0};return t0(t)}function MT(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(_r.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=LT(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:FT(e)}:{installationEntry:t}}async function LT(e,t){try{const n=await IT(e,t);return kl(e.appConfig,n)}catch(n){throw Hv(n)&&n.customData.serverCode===409?await e0(e.appConfig):await kl(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function FT(e){let t=await Hp(e.appConfig);for(;t.registrationStatus===1;)await qv(100),t=await Hp(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sf(e);return r||n}return t}function Hp(e){return ua(e,t=>{if(!t)throw _r.create("installation-not-found");return t0(t)})}function t0(e){return $T(e)?{fid:e.fid,registrationStatus:0}:e}function $T(e){return e.registrationStatus===1&&e.registrationTime+zv<Date.now()}/**
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
 */async function BT({appConfig:e,heartbeatServiceProvider:t},n){const r=jT(e,n),i=ET(e,n),s=t.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:Wv,appId:e.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},a=await Yv(()=>fetch(r,l));if(a.ok){const u=await a.json();return Gv(u)}else throw await Qv("Generate Auth Token",a)}function jT(e,{fid:t}){return`${Vv(e)}/${t}/authTokens:generate`}/**
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
 */async function If(e,t=!1){let n;const r=await ua(e.appConfig,s=>{if(!n0(s))throw _r.create("not-registered");const o=s.authToken;if(!t&&UT(o))return s;if(o.requestStatus===1)return n=zT(e,t),s;{if(!navigator.onLine)throw _r.create("app-offline");const l=VT(s);return n=WT(e,l),l}});return n?await n:r.authToken}async function zT(e,t){let n=await Vp(e.appConfig);for(;n.authToken.requestStatus===1;)await qv(100),n=await Vp(e.appConfig);const r=n.authToken;return r.requestStatus===0?If(e,t):r}function Vp(e){return ua(e,t=>{if(!n0(t))throw _r.create("not-registered");const n=t.authToken;return GT(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function WT(e,t){try{const n=await BT(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await kl(e.appConfig,r),n}catch(n){if(Hv(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await e0(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await kl(e.appConfig,r)}throw n}}function n0(e){return e!==void 0&&e.registrationStatus===2}function UT(e){return e.requestStatus===2&&!HT(e)}function HT(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+yT}function VT(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function GT(e){return e.requestStatus===1&&e.requestTime+zv<Date.now()}/**
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
 */async function QT(e){const t=e,{installationEntry:n,registrationPromise:r}=await Sf(t);return r?r.catch(console.error):If(t).catch(console.error),n.fid}/**
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
 */async function KT(e,t=!1){const n=e;return await YT(n),(await If(n,t)).token}async function YT(e){const{registrationPromise:t}=await Sf(e);t&&await t}/**
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
 */function qT(e){if(!e||!e.options)throw su("App Configuration");if(!e.name)throw su("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw su(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function su(e){return _r.create("missing-app-config-values",{valueName:e})}/**
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
 */const r0="installations",XT="installations-internal",JT=e=>{const t=e.getProvider("app").getImmediate(),n=qT(t),r=zs(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ZT=e=>{const t=e.getProvider("app").getImmediate(),n=zs(t,r0).getImmediate();return{getId:()=>QT(n),getToken:i=>KT(n,i)}};function eN(){Mn(new on(r0,JT,"PUBLIC")),Mn(new on(XT,ZT,"PRIVATE"))}eN();Ut(jv,Ef);Ut(jv,Ef,"esm2017");/**
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
 */const Tl="analytics",tN="firebase_id",nN="origin",rN=60*1e3,iN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xf="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ze=new Fd("@firebase/analytics");/**
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
 */const sN={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ot=new Jl("analytics","Analytics",sN);/**
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
 */function oN(e){if(!e.startsWith(xf)){const t=ot.create("invalid-gtag-resource",{gtagURL:e});return Ze.warn(t.message),""}return e}function i0(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function lN(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function aN(e,t){const n=lN("firebase-js-sdk-policy",{createScriptURL:oN}),r=document.createElement("script"),i=`${xf}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function uN(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function cN(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const a=(await i0(n)).find(u=>u.measurementId===i);a&&await t[a.appId]}}catch(l){Ze.error(l)}e("config",i,s)}async function dN(e,t,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await i0(n);for(const a of o){const u=l.find(c=>c.measurementId===a),d=u&&t[u.appId];if(d)s.push(d);else{s=[];break}}}s.length===0&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ze.error(s)}}function fN(e,t,n,r){async function i(s,...o){try{if(s==="event"){const[l,a]=o;await dN(e,t,n,l,a)}else if(s==="config"){const[l,a]=o;await cN(e,t,n,r,l,a)}else if(s==="consent"){const[l]=o;e("consent","update",l)}else if(s==="get"){const[l,a,u]=o;e("get",l,a,u)}else if(s==="set"){const[l]=o;e("set",l)}else e(s,...o)}catch(l){Ze.error(l)}}return i}function hN(e,t,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=fN(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function pN(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(xf)&&n.src.includes(e))return n;return null}/**
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
 */const mN=30,gN=1e3;class yN{constructor(t={},n=gN){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const s0=new yN;function _N(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function vN(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:_N(r)},s=iN.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let l="";try{const a=await o.json();!((t=a.error)===null||t===void 0)&&t.message&&(l=a.error.message)}catch{}throw ot.create("config-fetch-failed",{httpStatus:o.status,responseMessage:l})}return o.json()}async function wN(e,t=s0,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw ot.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ot.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new SN;return setTimeout(async()=>{l.abort()},n!==void 0?n:rN),o0({appId:r,apiKey:i,measurementId:s},o,l,t)}async function o0(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=s0){var s;const{appId:o,measurementId:l}=e;try{await EN(r,t)}catch(a){if(l)return Ze.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:l};throw a}try{const a=await vN(e);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!CN(u)){if(i.deleteThrottleMetadata(o),l)return Ze.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:l};throw a}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?qh(n,i.intervalMillis,mN):qh(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return i.setThrottleMetadata(o,c),Ze.debug(`Calling attemptFetch again in ${d} millis`),o0(e,c,r,i)}}function EN(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(s),r(ot.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function CN(e){if(!(e instanceof Sr)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class SN{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function IN(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const s=await t,o=Object.assign(Object.assign({},r),{send_to:s});e("event",n,o)}}/**
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
 */async function xN(){if(c_())try{await d_()}catch(e){return Ze.warn(ot.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return Ze.warn(ot.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function kN(e,t,n,r,i,s,o){var l;const a=wN(e);a.then(h=>{n[h.measurementId]=h.appId,e.options.measurementId&&h.measurementId!==e.options.measurementId&&Ze.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>Ze.error(h)),t.push(a);const u=xN().then(h=>{if(h)return r.getId()}),[d,c]=await Promise.all([a,u]);pN(s)||aN(s,d.measurementId),i("js",new Date);const f=(l=o==null?void 0:o.config)!==null&&l!==void 0?l:{};return f[nN]="firebase",f.update=!0,c!=null&&(f[tN]=c),i("config",d.measurementId,f),d.measurementId}/**
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
 */class TN{constructor(t){this.app=t}_delete(){return delete as[this.app.options.appId],Promise.resolve()}}let as={},Gp=[];const Qp={};let ou="dataLayer",NN="gtag",Kp,l0,Yp=!1;function RN(){const e=[];if(AC()&&e.push("This is a browser extension environment."),DC()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ot.create("invalid-analytics-context",{errorInfo:t});Ze.warn(n.message)}}function PN(e,t,n){RN();const r=e.options.appId;if(!r)throw ot.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)Ze.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ot.create("no-api-key");if(as[r]!=null)throw ot.create("already-exists",{id:r});if(!Yp){uN(ou);const{wrappedGtag:s,gtagCore:o}=hN(as,Gp,Qp,ou,NN);l0=s,Kp=o,Yp=!0}return as[r]=kN(e,Gp,Qp,t,Kp,ou,n),new TN(e)}function AN(e=g_()){e=zn(e);const t=zs(e,Tl);return t.isInitialized()?t.getImmediate():bN(e)}function bN(e,t={}){const n=zs(e,Tl);if(n.isInitialized()){const i=n.getImmediate();if(fl(t,n.getOptions()))return i;throw ot.create("already-initialized")}return n.initialize({options:t})}function a0(e,t,n,r){e=zn(e),IN(l0,as[e.app.options.appId],t,n,r).catch(i=>Ze.error(i))}const qp="@firebase/analytics",Xp="0.10.0";function DN(){Mn(new on(Tl,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return PN(r,i,n)},"PUBLIC")),Mn(new on("analytics-internal",e,"PRIVATE")),Ut(qp,Xp),Ut(qp,Xp,"esm2017");function e(t){try{const n=t.getProvider(Tl).getImmediate();return{logEvent:(r,i,s)=>a0(n,r,i,s)}}catch(n){throw ot.create("interop-component-reg-failed",{reason:n})}}}DN();const ON={apiKey:"AIzaSyAyVHSuOfOsTyOQe7JZWwC0J3By7Uz1S70",authDomain:"baabel-birthday-2023.firebaseapp.com",projectId:"baabel-birthday-2023",storageBucket:"baabel-birthday-2023.appspot.com",messagingSenderId:"276770751344",appId:"1:276770751344:web:05539c51907c974b5545b5",measurementId:"G-K0FS6V03KG",databaseURL:"https://baabel-birthday-2023-default-rtdb.asia-southeast1.firebasedatabase.app"},u0=m_(ON),_o=nT(u0),MN=AN(u0),c0=ae.createContext({}),LN=({children:e})=>{const[t,n]=ae.useState({}),[r,i]=ae.useState([]),s=l=>{var a;Fv(yo(_o,`stats/${l}`),{amount:(((a=t[l])==null?void 0:a.amount)??0)+1})},o=({gift:l,senderName:a,wish:u})=>{Qk(yo(_o,"wishes"),{gift:l,senderName:a,wish:u,timestamp:Date.now()}),s(l)};return ae.useEffect(()=>{a0(MN,"page_view")},[]),ae.useEffect(()=>{jp(yo(_o,"stats"),l=>{const a=l.val();n(a??{})})},[]),ae.useEffect(()=>{jp(yo(_o,"wishes"),l=>{const a=l.val(),u=a?Object.entries(a).map(([d,c])=>({id:d,...c})).sort((d,c)=>c.timestamp-d.timestamp):[];i(u)})},[]),R.jsx(c0.Provider,{value:{stats:t,wishes:r,createWish:o},children:e})},d0=()=>ae.useContext(c0),$={salad:{baabaeImg:"./assets/images/baabae_salad.png",giftImg:"./assets/images/salad.png",title:"ผักสลัด",description:`ผักสลัดหน้าโบสถ์ที่ปลูกและปรุงรสโดยนายน้อย
ให้ของขวัญเป็นผักเพื่อสานฝันสร้างตู้สลัดบาร์ให้บาเบล`,colors:{text:"#487D45",border:"#6BBA69",buttonLeft:"#6BBA69",buttonRight:"#B5E3AD",mainBackground:"#D8ECC8",tagBackground:"#E7F1D4",selectBackground:"#F9FFEE"}},bomb:{baabaeImg:"./assets/images/baabae_bomb.png",giftImg:"./assets/images/bomb.png",title:"ระเบิด",selectedTitle:"ระเบิดบาเบล Beam!",description:`บาเบลผู้ระเบิดทุกอย่างบนโลกใบนี้ แต่ระเบิดที่มีพลังทำลายล้าง
มากที่สุดคือระเบิดความน่ารักของตัวเอง บาเบลบีม!!!`,colors:{text:"#DD6F63",border:"#EE8B81",buttonLeft:"#EE8B81",buttonRight:"#FDC8C3",mainBackground:"#FFE1DE",tagBackground:"#FFE4E1",selectBackground:"#FFEFED"}},microphone:{baabaeImg:"./assets/images/baabae_microphone.png",giftImg:"./assets/images/microphone.png",title:"ไมโครโฟน",description:`ไมโครโฟนขยายเสียงไพเราะแบบหูเคลือบทอง
อยากให้บาเบลมั่นใจในเสียงตัวเอง เพราะเสียงบาเบลมีเสน่ห์มาก`,colors:{text:"#4279D1",border:"#5D8ACF",buttonLeft:"#5D8ACF",buttonRight:"#B7D0F9",mainBackground:"#DFEBFE",tagBackground:"#E3EEFF",selectBackground:"#EDF5FF"}},dacapo:{baabaeImg:"./assets/images/baabae_dacapo.png",giftImg:"./assets/images/dacapo.png",title:"น้องเจี๊ยบ",description:`ให้น้องเจี๊ยบเป็นของขวัญ ดากะโปะจะสามารถเป็นได้ทั้งเพื่อน
น้องชาย และอาหารสำรอง ดื้อเมื่อไหร่จับกินได้เลย`,colors:{text:"#E8A115",border:"#E9B738",buttonLeft:"#E9B738",buttonRight:"#FFE5A3",mainBackground:"#FEEBBB",tagBackground:"#FFF1CD",selectBackground:"#FFF8E1"}},schneider:{baabaeImg:"./assets/images/baabae_schneider.png",giftImg:"./assets/images/schneider.png",title:"พี่ชไน",description:`ให้ชไนเดอร์เป็นของขวัญ จารย์จะสามารถเป็น Comfort zone
ให้บาเบลได้ และสามารถเป็นอาหารสำรองได้เช่นกัน`,colors:{text:"#976BCC",border:"#A783D2",buttonLeft:"#A783D2",buttonRight:"#CEAFF2",mainBackground:"#EDE0FD",tagBackground:"#F4EBFF",selectBackground:"#F6EEFF"}},cute_potion:{baabaeImg:"./assets/images/baabae_cute_potion.png",giftImg:"./assets/images/cute_potion.png",title:"โพชั่น",selectedTitle:"โพชั่นความน่ารัก",description:`ส่งโพชั่นความน่ารักให้บาเบล ถึงแม้ว่าจะน่ารักมากอยู่แล้วก็ตาม
สิ่งนี้จะเพิ่มความน่ารักกะไม่ให้ใครได้ลืมตาอ้าปากไปเลย`,colors:{text:"#F56C9D",border:"#E882A6",buttonLeft:"#E882A6",buttonRight:"#FFCBDD",mainBackground:"#FFE1EC",tagBackground:"#FFE9F1",selectBackground:"#FFF1F6"}},boiled_egg_suki:{baabaeImg:"./assets/images/baabae_boiled_egg_suki.png",giftImg:"./assets/images/boiled_egg_suki.png",title:"สุกี้ไข่ต้ม",description:`สุกี้ไข่ต้มตัวนี้สามารถช่วยบาเบลเฝ้าโบสถ์ได้ น้องไม่ดุ
น่ารักใจดี และช่วยอยู่เป็นเพื่อนบาแบ๊ะในวันที่นายน้อยไม่ว่างได้`,colors:{text:"#E9882F",border:"#ED9E57",buttonLeft:"#ED9E57",buttonRight:"#FECB9D",mainBackground:"#FFE7D1",tagBackground:"#FFE7D1",selectBackground:"#FFEEDF"}},baabae_pillow:{baabaeImg:"./assets/images/baabae_baabae_pillow.png",giftImg:"./assets/images/baabae_pillow.png",title:"หมอนแบ๊ะ",description:`นายน้อยที่ชอบนอน หมอนบาเบ๊ะจะทำให้บาเบลหลับสบายทั้งวัน
ไม่ว่าจะนอนเช้า กลางวัน เย็น หรือตลอดทั้งวัน~`,colors:{text:"#4BA9AF",border:"#53BCC2",buttonLeft:"#53BCC2",buttonRight:"#A8E1E4",mainBackground:"#DBF6F8",tagBackground:"#E1F6F8",selectBackground:"#ECF8F9"}},sunflower:{baabaeImg:"./assets/images/baabae_sunflower.png",giftImg:"./assets/images/sunflower.png",title:"ทานตะวัน",selectedTitle:"ดอกทานตะวัน",description:`มาปลูกดอกทานตะวันที่บาเบลชอบให้เต็มโบสถ์กัน~
ให้นายน้อยสดใสเหมือนดอกทานตะวันรับแสงอาทิตย์เลย`,colors:{text:"#E79D0E",border:"#EEB13B",buttonLeft:"#EEB13B",buttonRight:"#FFE2A9",mainBackground:"#FEECC8",tagBackground:"#FFF0D1",selectBackground:"#FFF6E4"}}},FN=30,Jp=500,$N=b.div`
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
`,BN=b.img`
  width: 32px;
  margin-right: 4px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    width: 24px;
  }
`,jN=b.div.attrs({className:"eclair-font"})`
  white-space: nowrap;
  color: #2d2d2d;
  font-size: 20px;
  font-weight: 300;
  line-height: 29px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    font-size: 16px;
    line-height: 23px;
  }
`;var ca={},da={};Object.defineProperty(da,"__esModule",{value:!0});da.defaultOptions=void 0;da.defaultOptions={lowercase:!1,precision:1,space:!1,units:["","K","M","B","T","P","E"]};var jt={};Object.defineProperty(jt,"__esModule",{value:!0});jt.getLocales=jt.getFractionDigits=jt.roundTo=jt.parseValue=void 0;function zN(e){const t=parseFloat(e==null?void 0:e.toString());if(isNaN(t))throw new Error("Input value is not a number");if(t>Number.MAX_SAFE_INTEGER||t<Number.MIN_SAFE_INTEGER)throw new RangeError("Input value is outside of safe integer range");return t}jt.parseValue=zN;function WN(e,t){if(!Number.isFinite(e))throw new Error("Input value is not a finite number");if(!Number.isInteger(t)||t<0)throw new Error("Precision is not a positive integer");return Number.isInteger(e)?e:parseFloat(e.toFixed(t))}jt.roundTo=WN;function UN(e){var t;if(Number.isInteger(e))return 0;const n=e.toString().split(".")[1];return(t=n==null?void 0:n.length)!==null&&t!==void 0?t:0}jt.getFractionDigits=UN;function HN(){var e;return typeof navigator>"u"?[]:Array.from((e=navigator.languages)!==null&&e!==void 0?e:[])}jt.getLocales=HN;Object.defineProperty(ca,"__esModule",{value:!0});ca.millify=void 0;const Zp=da,vo=jt,em=1e3;function*tm(e){let t=em;for(;;){const n=e/t;if(n<1)return;yield n,t*=em}}function f0(e,t){var n,r;const i=t?{...Zp.defaultOptions,...t}:Zp.defaultOptions;if(!Array.isArray(i.units)||!i.units.length)throw new Error("Option `units` must be a non-empty array");let s;try{s=vo.parseValue(e)}catch(y){return y instanceof Error&&console.warn(`WARN: ${y.message} (millify)`),String(e)}const o=s<0?"-":"";s=Math.abs(s);let l=0;for(const y of tm(s))s=y,l+=1;if(l>=i.units.length)return e.toString();let u=vo.roundTo(s,i.precision);for(const y of tm(u))u=y,l+=1;const d=(n=i.units[l])!==null&&n!==void 0?n:"",c=i.lowercase?d.toLowerCase():d,f=i.space?" ":"",h=u.toLocaleString((r=i.locales)!==null&&r!==void 0?r:vo.getLocales(),{minimumFractionDigits:vo.getFractionDigits(u)});return`${o}${h}${f}${c}`}ca.millify=f0;var VN=ca.default=f0;const GN=({gift:e,amount:t})=>R.jsxs($N,{color:$[e].colors.tagBackground,children:[R.jsx(BN,{src:$[e].giftImg,alt:e}),R.jsxs(jN,{children:["x ",VN(t,{precision:2})]})]}),QN=b.div`
    background: #FFFFFF;
    border-radius: 16px;
    height: fit-content !important;
    box-shadow: 0px 4px 20px 0px rgba(248, 203, 203, 0.4);
    padding: 12px 16px 16px 16px;
`,KN=b.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
`,YN=b.div`
    display: flex;
    align-items: center;
`,qN=b.img`
    width: 32px;
    margin-right: 8px;
`,XN=b.div`
   color: ${e=>e.color};
   font-size: 20px;
   line-height: 27px;
`,JN=b.img`
    width: 24px;
`,ZN=b.div`
   color: #2D2D2D;
   font-size: 16px;
   line-height: 24px;
   letter-spacing: 0.8px;
   margin-bottom: 4px;
`,eR=b.div.attrs({className:"eclair-font"})`
    color: #A4A4A4;
    font-size: 12px;
    font-weight: 300;
    line-height: 17px;
    display: flex;
    justify-content: space-between;
`,tR=({id:e,gift:t,senderName:n,wish:r,timestamp:i})=>{const s=new Date(i);return R.jsxs(QN,{id:e,children:[R.jsxs(KN,{children:[R.jsxs(YN,{children:[R.jsx(qN,{src:$[t].baabaeImg,alt:t}),R.jsx(XN,{color:$[t].colors.text,children:n})]}),R.jsx(JN,{src:$[t].giftImg,alt:t})]}),R.jsx(ZN,{children:r}),R.jsxs(eR,{children:[R.jsx("div",{children:s.toLocaleDateString("th-TH",{year:"numeric",month:"short",day:"numeric"})}),R.jsxs("div",{children:[s.toLocaleTimeString("th-TH",{hour:"2-digit",minute:"2-digit"})," ","น."]})]})]})};var h0={exports:{}};/*! For license information please see index.js.LICENSE.txt */(function(e,t){(function(n,r){e.exports=r(ae)})(y0,n=>(()=>{var r={202:(l,a,u)=>{u.d(a,{Z:()=>y});var d=u(864),c=u.n(d),f=u(352),h=u.n(f)()(c());h.push([l.id,`.index-module__layout___ZT1i5 {
  display: grid;
}
`,"",{version:3,sources:["webpack://./src/index.module.css"],names:[],mappings:"AAAA;EACE,aAAa;AACf",sourcesContent:[`.layout {
  display: grid;
}
`],sourceRoot:""}]),h.locals={layout:"index-module__layout___ZT1i5"};const y=h},352:l=>{l.exports=function(a){var u=[];return u.toString=function(){return this.map(function(d){var c="",f=d[5]!==void 0;return d[4]&&(c+="@supports (".concat(d[4],") {")),d[2]&&(c+="@media ".concat(d[2]," {")),f&&(c+="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {")),c+=a(d),f&&(c+="}"),d[2]&&(c+="}"),d[4]&&(c+="}"),c}).join("")},u.i=function(d,c,f,h,y){typeof d=="string"&&(d=[[null,d,void 0]]);var _={};if(f)for(var x=0;x<this.length;x++){var m=this[x][0];m!=null&&(_[m]=!0)}for(var p=0;p<d.length;p++){var g=[].concat(d[p]);f&&_[g[0]]||(y!==void 0&&(g[5]===void 0||(g[1]="@layer".concat(g[5].length>0?" ".concat(g[5]):""," {").concat(g[1],"}")),g[5]=y),c&&(g[2]&&(g[1]="@media ".concat(g[2]," {").concat(g[1],"}")),g[2]=c),h&&(g[4]?(g[1]="@supports (".concat(g[4],") {").concat(g[1],"}"),g[4]=h):g[4]="".concat(h)),u.push(g))}},u}},864:l=>{l.exports=function(a){var u=a[1],d=a[3];if(!d)return u;if(typeof btoa=="function"){var c=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),f="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),h="/*# ".concat(f," */"),y=d.sources.map(function(_){return"/*# sourceURL=".concat(d.sourceRoot||"").concat(_," */")});return[u].concat(y).concat([h]).join(`
`)}return[u].join(`
`)}},813:l=>{var a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable;l.exports=function(){try{if(!Object.assign)return!1;var c=new String("abc");if(c[5]="de",Object.getOwnPropertyNames(c)[0]==="5")return!1;for(var f={},h=0;h<10;h++)f["_"+String.fromCharCode(h)]=h;if(Object.getOwnPropertyNames(f).map(function(_){return f[_]}).join("")!=="0123456789")return!1;var y={};return"abcdefghijklmnopqrst".split("").forEach(function(_){y[_]=_}),Object.keys(Object.assign({},y)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}()?Object.assign:function(c,f){for(var h,y,_=function(g){if(g==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(g)}(c),x=1;x<arguments.length;x++){for(var m in h=Object(arguments[x]))u.call(h,m)&&(_[m]=h[m]);if(a){y=a(h);for(var p=0;p<y.length;p++)d.call(h,y[p])&&(_[y[p]]=h[y[p]])}}return _}},455:(l,a,u)=>{u(813);var d=u(359),c=60103;if(typeof Symbol=="function"&&Symbol.for){var f=Symbol.for;c=f("react.element"),f("react.fragment")}var h=d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y=Object.prototype.hasOwnProperty,_={key:!0,ref:!0,__self:!0,__source:!0};a.jsx=function(x,m,p){var g,v={},E=null,S=null;for(g in p!==void 0&&(E=""+p),m.key!==void 0&&(E=""+m.key),m.ref!==void 0&&(S=m.ref),m)y.call(m,g)&&!_.hasOwnProperty(g)&&(v[g]=m[g]);if(x&&x.defaultProps)for(g in m=x.defaultProps)v[g]===void 0&&(v[g]=m[g]);return{$$typeof:c,type:x,key:E,ref:S,props:v,_owner:h.current}}},557:(l,a,u)=>{l.exports=u(455)},701:l=>{var a=[];function u(f){for(var h=-1,y=0;y<a.length;y++)if(a[y].identifier===f){h=y;break}return h}function d(f,h){for(var y={},_=[],x=0;x<f.length;x++){var m=f[x],p=h.base?m[0]+h.base:m[0],g=y[p]||0,v="".concat(p," ").concat(g);y[p]=g+1;var E=u(v),S={css:m[1],media:m[2],sourceMap:m[3],supports:m[4],layer:m[5]};if(E!==-1)a[E].references++,a[E].updater(S);else{var w=c(S,h);h.byIndex=x,a.splice(x,0,{identifier:v,updater:w,references:1})}_.push(v)}return _}function c(f,h){var y=h.domAPI(h);return y.update(f),function(_){if(_){if(_.css===f.css&&_.media===f.media&&_.sourceMap===f.sourceMap&&_.supports===f.supports&&_.layer===f.layer)return;y.update(f=_)}else y.remove()}}l.exports=function(f,h){var y=d(f=f||[],h=h||{});return function(_){_=_||[];for(var x=0;x<y.length;x++){var m=u(y[x]);a[m].references--}for(var p=d(_,h),g=0;g<y.length;g++){var v=u(y[g]);a[v].references===0&&(a[v].updater(),a.splice(v,1))}y=p}}},80:l=>{var a={};l.exports=function(u,d){var c=function(f){if(a[f]===void 0){var h=document.querySelector(f);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}a[f]=h}return a[f]}(u);if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(d)}},182:l=>{l.exports=function(a){var u=document.createElement("style");return a.setAttributes(u,a.attributes),a.insert(u,a.options),u}},850:(l,a,u)=>{l.exports=function(d){var c=u.nc;c&&d.setAttribute("nonce",c)}},236:l=>{l.exports=function(a){var u=a.insertStyleElement(a);return{update:function(d){(function(c,f,h){var y="";h.supports&&(y+="@supports (".concat(h.supports,") {")),h.media&&(y+="@media ".concat(h.media," {"));var _=h.layer!==void 0;_&&(y+="@layer".concat(h.layer.length>0?" ".concat(h.layer):""," {")),y+=h.css,_&&(y+="}"),h.media&&(y+="}"),h.supports&&(y+="}");var x=h.sourceMap;x&&typeof btoa<"u"&&(y+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(x))))," */")),f.styleTagTransform(y,c,f.options)})(u,a,d)},remove:function(){(function(d){if(d.parentNode===null)return!1;d.parentNode.removeChild(d)})(u)}}}},213:l=>{l.exports=function(a,u){if(u.styleSheet)u.styleSheet.cssText=a;else{for(;u.firstChild;)u.removeChild(u.firstChild);u.appendChild(document.createTextNode(a))}}},359:l=>{l.exports=n}},i={};function s(l){var a=i[l];if(a!==void 0)return a.exports;var u=i[l]={id:l,exports:{}};return r[l](u,u.exports,s),u.exports}s.n=l=>{var a=l&&l.__esModule?()=>l.default:()=>l;return s.d(a,{a}),a},s.d=(l,a)=>{for(var u in a)s.o(a,u)&&!s.o(l,u)&&Object.defineProperty(l,u,{enumerable:!0,get:a[u]})},s.o=(l,a)=>Object.prototype.hasOwnProperty.call(l,a),s.r=l=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},s.nc=void 0;var o={};return(()=>{s.r(o),s.d(o,{default:()=>Ht});var l=s(557),a=s(359),u=s.n(a),d=function(){return d=Object.assign||function(re){for(var _e,Ue=1,Et=arguments.length;Ue<Et;Ue++)for(var Pe in _e=arguments[Ue])Object.prototype.hasOwnProperty.call(_e,Pe)&&(re[Pe]=_e[Pe]);return re},d.apply(this,arguments)};const c=function(re){var _e=re.gridSpan||0;return(0,l.jsx)("div",d({className:re.className,style:{gridRowEnd:"span "+_e,visibility:_e?"initial":"hidden"}},{children:re.children}),void 0)};var f=s(701),h=s.n(f),y=s(236),_=s.n(y),x=s(80),m=s.n(x),p=s(850),g=s.n(p),v=s(182),E=s.n(v),S=s(213),w=s.n(S),T=s(202),z={};z.styleTagTransform=w(),z.setAttributes=g(),z.insert=m().bind(null,"head"),z.domAPI=_(),z.insertStyleElement=E(),h()(T.Z,z);const O=T.Z&&T.Z.locals?T.Z.locals:void 0;var ye=function(){return ye=Object.assign||function(re){for(var _e,Ue=1,Et=arguments.length;Ue<Et;Ue++)for(var Pe in _e=arguments[Ue])Object.prototype.hasOwnProperty.call(_e,Pe)&&(re[Pe]=_e[Pe]);return re},ye.apply(this,arguments)};const Ht=function(re){var _e=re.items,Ue=_e===void 0?[]:_e,Et=re.className,Pe=re.gap,k=Pe===void 0?10:Pe,D=re.colCount,P=D===void 0?3:D,V=re.minWidth,K=V===void 0?300:V,Ae=(0,a.useState)([]),ct=Ae[0],Vt=Ae[1],$e=(0,a.useState)(!1),tt=$e[0],xr=$e[1],dt=(0,a.useRef)(null);(0,a.useLayoutEffect)(function(){xr(!1);var de=Ni();de.length?kr(de):ht()},[Ue]),(0,a.useLayoutEffect)(function(){var de,be,Ot=(de=function(){ht()},function(){for(var nt=[],Tr=0;Tr<arguments.length;Tr++)nt[Tr]=arguments[Tr];be||(be=setTimeout(function(){de.apply(void 0,nt),be=null},300))});return window.addEventListener("resize",Ot),function(){window.removeEventListener("resize",Ot)}},[]),(0,a.useEffect)(function(){tt&&ht()},[tt]);var ft,Ni=function(){var de=[];return dt.current!==null&&Array.from(dt.current.children).forEach(function(be){var Ot=be.getElementsByTagName("img");Ot!=null&&Ot.length&&de.push.apply(de,Array.from(Ot).filter(function(nt){return!nt.onload}).map(function(nt){return{img:nt,loaded:!1}}))}),de},kr=function(de){de.forEach(function(be){be.img.onload||(be.img.onload=be.img.onerror=function(){be.loaded=!0,de.some(function(Ot){return Ot.loaded===!1})||xr(!0)})})},ht=function(){if(dt.current!==null){var de=dt.current,be=[];Array.from(de.children).forEach(function(Ot){var nt=Ot.firstElementChild;nt&&(nt.style.height="auto");var Tr=(nt==null?void 0:nt.getBoundingClientRect().height)||0,kf=Math.ceil((Tr+k)/k);be.push(kf);var g0=kf*k;nt&&(nt.style.height=g0-k+"px")}),Vt(be)}};return(0,l.jsx)("div",ye({className:(ft=[O.layout,Et],ft.filter(function(de){return de}).join(" ")),ref:dt,style:{gridTemplateColumns:"repeat("+(P||3)+", minmax("+(K||300)+"px,1fr))",gridGap:k+"px"}},{children:Ue.map(function(de,be){return u().isValidElement(de)?(0,l.jsx)(c,ye({gridSpan:ct[be]},{children:de}),de.key||be):null})}),void 0)}})(),o})())})(h0);var nR=h0.exports,rR=nR;const iR=rm(rR),sR=b.div`
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
`,oR=b.img`
  margin-right: 8px;
`,lR=b.div.attrs({className:"eclair-font"})`
  font-size: 16px;
  color: #ffffff;
`,aR={plus:"./assets/images/icon_plus.svg"},Qs=({className:e,children:t,icon:n,onClick:r})=>R.jsxs(sR,{className:e,onClick:r,children:[n?R.jsx(oR,{src:aR[n],alt:n}):null,R.jsx(lR,{children:t})]}),uR=b.div`
  min-height: 100vh;
  background-image: url(./assets/images/background.png);
  background-position-x: center;
`,cR=b.div`
  height: 350px;
  background-color: #f8cbcb;
  margin-bottom: 32px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    margin-bottom: 16px;
  }
`,dR=b.div`
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
`,fR=b(iR)`
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
`,hR=b.div`
  max-width: 250px;
  padding: 16px 0 32px;
  margin: auto;
  position: sticky;
  bottom: 0;
`,pR=b(Qs)`
  box-shadow: 4px 4px 20px 10px rgba(246, 160, 160, 0.3);
`,mR=({setPage:e})=>{const t=Kl(),n=Qh(t.breakpoints.down("sm")),r=Qh(t.breakpoints.between("sm","lg")),{stats:i,wishes:s}=d0(),[o]=_C();return R.jsxs(uR,{children:[R.jsx(cR,{}),R.jsx(dR,{ref:o,children:Object.keys($).sort((l,a)=>{var u,d;return(((u=i[a])==null?void 0:u.amount)??0)-(((d=i[l])==null?void 0:d.amount)??0)}).map(l=>{var a;return R.jsx(GN,{gift:l,amount:((a=i[l])==null?void 0:a.amount)??0},`${l}-stat`)})}),R.jsx(fR,{minWidth:80,colCount:n?1:r?2:3,items:s.map(l=>R.jsx(tR,{...l},l.id))}),R.jsx(hR,{children:R.jsx(pR,{icon:"plus",onClick:()=>e("giftPage"),children:"เขียนคำอวยพร"})})]})},gR=Fy`
  0%   { top: -5px; }
  50%  { top: 5px; }
  100% { top: -5px; }
`,yR=b.div`
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
`,_R=b.div.attrs({className:"eclair-font"})`
  color: ${e=>e.color};
  font-size: 32px;
  line-height: 46px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    font-size: 24px;
    line-height: 35px;
  }
`,vR=b.img`
  width: 160px;
  margin: 24px 0;
  position: relative;
  animation: ${gR} 1.5s ease-in-out infinite;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    margin: 16px 0;
  }
`,wR=b.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 8px;
`,nm=b.img`
  width: 20px;
`,ER=b.div.attrs({className:"eclair-font"})`
  font-size: 20px;
  line-height: 29px;
  color: ${e=>e.color};
`,CR=b.div.attrs({className:"eclair-font"})`
  font-size: 16px;
  line-height: 23px;
  font-weight: 300;
  white-space: pre-line;
  color: #2d2d2d;
  margin-top: 8px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    font-size: 14px;
  }
`,SR=b.div`
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
`,IR=b.div`
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
`,xR=b.div`
  max-width: 500px;
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: auto;

  ${({theme:e})=>e.breakpoints.down("lg")} {
    max-width: 320px;
  }
`,kR=b(Qs)`
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
`,TR=b(Qs)`
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
`,NR=b.img`
  width: 100%;
  margin-bottom: 8px;
`,RR=b.div.attrs({className:"eclair-font"})`
  font-size: 16px;
  line-height: 23px;
  font-weight: 300;
  color: #2d2d2d;
`,p0=b.img`
  width: 20px;
  position: absolute;
  bottom: -6px;
`,PR=b(p0)`
  left: -6px;
`,AR=b(p0)`
  right: -6px;
`,bR=({selectedGift:e,setSelectedGift:t,setPage:n})=>R.jsx(yR,{color:$[e].colors.mainBackground,children:R.jsxs("div",{children:[R.jsx(_R,{color:$[e].colors.text,children:"เลือกของขวัญให้บาเบลกัน"}),R.jsx(vR,{src:$[e].giftImg,alt:e}),R.jsxs(wR,{children:[R.jsx(nm,{src:$[e].giftImg,alt:e}),R.jsx(ER,{color:$[e].colors.text,children:$[e].selectedTitle??$[e].title}),R.jsx(nm,{src:$[e].giftImg,alt:e})]}),R.jsx(CR,{children:$[e].description}),R.jsx(SR,{children:Object.keys($).map(r=>{const i=r===e;return R.jsxs(IR,{selected:i,selectedBorderColor:$[r].colors.border,selectedBackgroundColor:$[r].colors.selectBackground,onClick:()=>t(r),children:[R.jsx(NR,{src:$[r].giftImg,alt:r}),R.jsx(RR,{children:$[r].title}),i?R.jsxs(R.Fragment,{children:[R.jsx(PR,{src:"./assets/images/lamb_lefthand.png",alt:"lamb left hand"}),R.jsx(AR,{src:"./assets/images/lamb_righthand.png",alt:"lamb right hand"})]}):null]},r)})}),R.jsxs(xR,{children:[R.jsx(kR,{color:$[e].colors.buttonLeft,hoverColor:$[e].colors.selectBackground,onClick:()=>n("landingPage"),children:"กลับหน้าหลัก"}),R.jsx(TR,{color:[$[e].colors.buttonLeft,$[e].colors.buttonRight],onClick:()=>n("wishPage"),children:"เลือกชิ้นนี้แหละ!"})]})]})}),DR=Fy`
  0%   { transform: rotate(-2deg); }
  50%  { transform: rotate(2deg); }
  100% { transform: rotate(-2deg); }
`,m0=e=>Yl`
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
`,OR=b.div`
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
`,MR=b.div.attrs({className:"eclair-font"})`
  color: ${e=>e.color};
  font-size: 32px;
  line-height: 46px;

  ${({theme:e})=>e.breakpoints.down("sm")} {
    font-size: 24px;
    line-height: 35px;
  }
`,LR=b.img`
  width: 230px;
  margin-top: 24px;
  margin-bottom: -54px;
  transform-origin: bottom center;
  animation: ${DR} 2s ease-in-out infinite;
`,FR=b.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`,$R=b.input`
  ${e=>m0(e)}
  height: 55px;
  margin-bottom: 16px;
`,BR=b.textarea`
  ${e=>m0(e)}
  height: 200px;
  margin-bottom: 12px;
  resize: none;
`,jR=b.div.attrs({className:"eclair-font"})`
  color: ${e=>e.color};
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  margin-bottom: 32px;
`,zR=b.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
`,WR=b(Qs)`
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
`,UR=b(Qs)`
  width: 100%;
  margin: auto;
  background: ${e=>e.disabled?e.disabledColor:`linear-gradient(90deg, ${e.color[0]} 0%, ${e.color[1]} 100%)`};
  cursor: ${e=>e.disabled?"default":"pointer"};

  &:hover {
    background: ${e=>e.disabled?e.disabledColor:`${e.color[0]}`};
  }
`,HR=({selectedGift:e,setPage:t})=>{const{createWish:n}=d0(),[r,i]=ae.useState(""),[s,o]=ae.useState(""),l=()=>{r&&s&&(n({gift:e,senderName:r,wish:s}),t("landingPage"))};return R.jsx(OR,{color:$[e].colors.mainBackground,children:R.jsxs("div",{children:[R.jsx(MR,{color:$[e].colors.text,children:"เขียนคำอวยพรให้บาเบล"}),R.jsx(LR,{src:$[e].baabaeImg,alt:"Baabae hold "+e}),R.jsxs(FR,{children:[R.jsx($R,{maxLength:FN,type:"text",placeholder:"ชื่ออะไรฮะ...",color:$[e].colors.border,shadowColor:$[e].colors.mainBackground,value:r,onChange:a=>i(a.target.value)}),R.jsx(BR,{maxLength:Jp,rows:7,placeholder:"เขียนอวยพรตรงนี้เลย...",color:$[e].colors.border,shadowColor:$[e].colors.mainBackground,onChange:a=>o(a.target.value),children:s}),R.jsxs(jR,{color:$[e].colors.border,children:["คำอวยพร ",s.length,"/",Jp," ตัวอักษร"]}),R.jsxs(zR,{children:[R.jsx(WR,{color:$[e].colors.buttonLeft,hoverColor:$[e].colors.selectBackground,onClick:()=>t("giftPage"),children:"ย้อนกลับ"}),R.jsx(UR,{color:[$[e].colors.buttonLeft,$[e].colors.buttonRight],disabled:!r||!s,disabledColor:$[e].colors.mainBackground,onClick:l,children:"ส่งคำอวยพร"})]})]})]})})},VR=qE(),GR=()=>{const[e,t]=ae.useState("landingPage"),[n,r]=ae.useState("salad");return R.jsxs(zE,{theme:VR,children:[R.jsx(XE,{}),R.jsx(LN,{children:e==="landingPage"?R.jsx(mR,{setPage:t}):e==="giftPage"?R.jsx(bR,{selectedGift:n,setSelectedGift:r,setPage:t}):e==="wishPage"?R.jsx(HR,{selectedGift:n,setPage:t}):null})]})};lu.createRoot(document.getElementById("root")).render(R.jsx(Bt.StrictMode,{children:R.jsx(GR,{})}));
