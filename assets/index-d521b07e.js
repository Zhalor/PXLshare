function ax(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function U0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var y={},lx={get exports(){return y},set exports(t){y=t}},ju={},S={},ux={get exports(){return S},set exports(t){S=t}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oa=Symbol.for("react.element"),cx=Symbol.for("react.portal"),hx=Symbol.for("react.fragment"),dx=Symbol.for("react.strict_mode"),fx=Symbol.for("react.profiler"),px=Symbol.for("react.provider"),mx=Symbol.for("react.context"),gx=Symbol.for("react.forward_ref"),yx=Symbol.for("react.suspense"),vx=Symbol.for("react.memo"),wx=Symbol.for("react.lazy"),xg=Symbol.iterator;function Ex(t){return t===null||typeof t!="object"?null:(t=xg&&t[xg]||t["@@iterator"],typeof t=="function"?t:null)}var F0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j0=Object.assign,z0={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||F0}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function V0(){}V0.prototype=Cs.prototype;function Xf(t,e,n){this.props=t,this.context=e,this.refs=z0,this.updater=n||F0}var Jf=Xf.prototype=new V0;Jf.constructor=Xf;j0(Jf,Cs.prototype);Jf.isPureReactComponent=!0;var kg=Array.isArray,B0=Object.prototype.hasOwnProperty,Zf={current:null},H0={key:!0,ref:!0,__self:!0,__source:!0};function W0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)B0.call(e,r)&&!H0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:oa,type:t,key:s,ref:o,props:i,_owner:Zf.current}}function _x(t,e){return{$$typeof:oa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ep(t){return typeof t=="object"&&t!==null&&t.$$typeof===oa}function Sx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ig=/\/+/g;function nh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Sx(""+t.key):e.toString(36)}function yl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case oa:case cx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+nh(o,0):r,kg(i)?(n="",t!=null&&(n=t.replace(Ig,"$&/")+"/"),yl(i,e,n,"",function(u){return u})):i!=null&&(ep(i)&&(i=_x(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ig,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+nh(s,a);o+=yl(s,e,n,l,i)}else if(l=Ex(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+nh(s,a++),o+=yl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var r=[],i=0;return yl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Cx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},vl={transition:null},xx={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:vl,ReactCurrentOwner:Zf};ie.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!ep(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=Cs;ie.Fragment=hx;ie.Profiler=fx;ie.PureComponent=Xf;ie.StrictMode=dx;ie.Suspense=yx;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xx;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=j0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)B0.call(e,l)&&!H0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:oa,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:mx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:px,_context:t},t.Consumer=t};ie.createElement=W0;ie.createFactory=function(t){var e=W0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:gx,render:t}};ie.isValidElement=ep;ie.lazy=function(t){return{$$typeof:wx,_payload:{_status:-1,_result:t},_init:Cx}};ie.memo=function(t,e){return{$$typeof:vx,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ie.useContext=function(t){return Nt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ie.useId=function(){return Nt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ie.useRef=function(t){return Nt.current.useRef(t)};ie.useState=function(t){return Nt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Nt.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(ux);const At=U0(S),id=ax({__proto__:null,default:At},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx=S,Ix=Symbol.for("react.element"),Tx=Symbol.for("react.fragment"),Rx=Object.prototype.hasOwnProperty,Ax=kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Px={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Rx.call(e,r)&&!Px.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ix,type:t,key:s,ref:o,props:i,_owner:Ax.current}}ju.Fragment=Tx;ju.jsx=q0;ju.jsxs=q0;(function(t){t.exports=ju})(lx);var sd={},od={},Dx={get exports(){return od},set exports(t){od=t}},Yt={},ad={},Nx={get exports(){return ad},set exports(t){ad=t}},G0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,j){var H=T.length;T.push(j);e:for(;0<H;){var ne=H-1>>>1,b=T[ne];if(0<i(b,j))T[ne]=j,T[H]=b,H=ne;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],H=T.pop();if(H!==j){T[0]=H;e:for(var ne=0,b=T.length,O=b>>>1;ne<O;){var $=2*(ne+1)-1,K=T[$],C=$+1,se=T[C];if(0>i(K,H))C<b&&0>i(se,K)?(T[ne]=se,T[C]=H,ne=C):(T[ne]=K,T[$]=H,ne=$);else if(C<b&&0>i(se,H))T[ne]=se,T[C]=H,ne=C;else break e}}return j}function i(T,j){var H=T.sortIndex-j.sortIndex;return H!==0?H:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=T)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function _(T){if(w=!1,g(T),!v)if(n(l)!==null)v=!0,tt(x);else{var j=n(u);j!==null&&te(_,j.startTime-T)}}function x(T,j){v=!1,w&&(w=!1,p(N),N=-1),m=!0;var H=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||T&&!V());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var b=ne(h.expirationTime<=j);j=t.unstable_now(),typeof b=="function"?h.callback=b:h===n(l)&&r(l),g(j)}else r(l);h=n(l)}if(h!==null)var O=!0;else{var $=n(u);$!==null&&te(_,$.startTime-j),O=!1}return O}finally{h=null,d=H,m=!1}}var A=!1,D=null,N=-1,Y=5,W=-1;function V(){return!(t.unstable_now()-W<Y)}function ge(){if(D!==null){var T=t.unstable_now();W=T;var j=!0;try{j=D(!0,T)}finally{j?$e():(A=!1,D=null)}}else A=!1}var $e;if(typeof f=="function")$e=function(){f(ge)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,Ie=Me.port2;Me.port1.onmessage=ge,$e=function(){Ie.postMessage(null)}}else $e=function(){E(ge,0)};function tt(T){D=T,A||(A=!0,$e())}function te(T,j){N=E(function(){T(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,tt(x))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var H=d;d=j;try{return T()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var H=d;d=T;try{return j()}finally{d=H}},t.unstable_scheduleCallback=function(T,j,H){var ne=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ne+H:ne):H=ne,T){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=H+b,T={id:c++,callback:j,priorityLevel:T,startTime:H,expirationTime:b,sortIndex:-1},H>ne?(T.sortIndex=H,e(u,T),n(l)===null&&T===n(u)&&(w?(p(N),N=-1):w=!0,te(_,H-ne))):(T.sortIndex=b,e(l,T),v||m||(v=!0,tt(x))),T},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(T){var j=d;return function(){var H=d;d=j;try{return T.apply(this,arguments)}finally{d=H}}}})(G0);(function(t){t.exports=G0})(Nx);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0=S,Kt=ad;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Q0=new Set,To={};function wi(t,e){rs(t,e),rs(t+"Capture",e)}function rs(t,e){for(To[t]=e,t=0;t<e.length;t++)Q0.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,bx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Tg={},Rg={};function Lx(t){return ld.call(Rg,t)?!0:ld.call(Tg,t)?!1:bx.test(t)?Rg[t]=!0:(Tg[t]=!0,!1)}function Ox(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function $x(t,e,n,r){if(e===null||typeof e>"u"||Ox(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var tp=/[\-:]([a-z])/g;function np(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(tp,np);ht[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(tp,np);ht[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(tp,np);ht[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function rp(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&($x(e,n,i,r)&&(n=null),r||i===null?Lx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Zn=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),Di=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),ip=Symbol.for("react.strict_mode"),ud=Symbol.for("react.profiler"),Y0=Symbol.for("react.provider"),X0=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),hd=Symbol.for("react.suspense_list"),op=Symbol.for("react.memo"),rr=Symbol.for("react.lazy"),J0=Symbol.for("react.offscreen"),Ag=Symbol.iterator;function Vs(t){return t===null||typeof t!="object"?null:(t=Ag&&t[Ag]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,rh;function Zs(t){if(rh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rh=e&&e[1]||""}return`
`+rh+t}var ih=!1;function sh(t,e){if(!t||ih)return"";ih=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ih=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function Mx(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=sh(t.type,!1),t;case 11:return t=sh(t.type.render,!1),t;case 1:return t=sh(t.type,!0),t;default:return""}}function dd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ni:return"Fragment";case Di:return"Portal";case ud:return"Profiler";case ip:return"StrictMode";case cd:return"Suspense";case hd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case X0:return(t.displayName||"Context")+".Consumer";case Y0:return(t._context.displayName||"Context")+".Provider";case sp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case op:return e=t.displayName||null,e!==null?e:dd(t.type)||"Memo";case rr:e=t._payload,t=t._init;try{return dd(t(e))}catch{}}return null}function Ux(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dd(e);case 8:return e===ip?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Z0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Fx(t){var e=Z0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=Fx(t))}function ew(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Z0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fd(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Pg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function tw(t,e){e=e.checked,e!=null&&rp(t,"checked",e,!1)}function pd(t,e){tw(t,e);var n=Ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?md(t,e.type,n):e.hasOwnProperty("defaultValue")&&md(t,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function md(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var eo=Array.isArray;function qi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function gd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ng(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(eo(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ar(n)}}function nw(t,e){var n=Ar(e.value),r=Ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function bg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,iw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ro(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var uo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jx=["Webkit","ms","Moz","O"];Object.keys(uo).forEach(function(t){jx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),uo[e]=uo[t]})});function sw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||uo.hasOwnProperty(t)&&uo[t]?(""+e).trim():e+"px"}function ow(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var zx=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(zx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function wd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ed=null;function ap(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var _d=null,Gi=null,Ki=null;function Lg(t){if(t=ua(t)){if(typeof _d!="function")throw Error(I(280));var e=t.stateNode;e&&(e=Wu(e),_d(t.stateNode,t.type,e))}}function aw(t){Gi?Ki?Ki.push(t):Ki=[t]:Gi=t}function lw(){if(Gi){var t=Gi,e=Ki;if(Ki=Gi=null,Lg(t),e)for(t=0;t<e.length;t++)Lg(e[t])}}function uw(t,e){return t(e)}function cw(){}var oh=!1;function hw(t,e,n){if(oh)return t(e,n);oh=!0;try{return uw(t,e,n)}finally{oh=!1,(Gi!==null||Ki!==null)&&(cw(),lw())}}function Ao(t,e){var n=t.stateNode;if(n===null)return null;var r=Wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var Sd=!1;if(Hn)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Sd=!1}function Vx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var co=!1,Vl=null,Bl=!1,Cd=null,Bx={onError:function(t){co=!0,Vl=t}};function Hx(t,e,n,r,i,s,o,a,l){co=!1,Vl=null,Vx.apply(Bx,arguments)}function Wx(t,e,n,r,i,s,o,a,l){if(Hx.apply(this,arguments),co){if(co){var u=Vl;co=!1,Vl=null}else throw Error(I(198));Bl||(Bl=!0,Cd=u)}}function Ei(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Og(t){if(Ei(t)!==t)throw Error(I(188))}function qx(t){var e=t.alternate;if(!e){if(e=Ei(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Og(i),t;if(s===r)return Og(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function fw(t){return t=qx(t),t!==null?pw(t):null}function pw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=pw(t);if(e!==null)return e;t=t.sibling}return null}var mw=Kt.unstable_scheduleCallback,$g=Kt.unstable_cancelCallback,Gx=Kt.unstable_shouldYield,Kx=Kt.unstable_requestPaint,Fe=Kt.unstable_now,Qx=Kt.unstable_getCurrentPriorityLevel,lp=Kt.unstable_ImmediatePriority,gw=Kt.unstable_UserBlockingPriority,Hl=Kt.unstable_NormalPriority,Yx=Kt.unstable_LowPriority,yw=Kt.unstable_IdlePriority,zu=null,kn=null;function Xx(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(zu,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:ek,Jx=Math.log,Zx=Math.LN2;function ek(t){return t>>>=0,t===0?32:31-(Jx(t)/Zx|0)|0}var ja=64,za=4194304;function to(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=to(a):(s&=o,s!==0&&(r=to(s)))}else o=n&~i,o!==0?r=to(o):s!==0&&(r=to(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),i=1<<n,r|=t[n],e&=~i;return r}function tk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-dn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=tk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vw(){var t=ja;return ja<<=1,!(ja&4194240)&&(ja=64),t}function ah(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function aa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function rk(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-dn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function up(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var pe=0;function ww(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Ew,cp,_w,Sw,Cw,kd=!1,Va=[],mr=null,gr=null,yr=null,Po=new Map,Do=new Map,sr=[],ik="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mg(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Po.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(e.pointerId)}}function Hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ua(e),e!==null&&cp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function sk(t,e,n,r,i){switch(e){case"focusin":return mr=Hs(mr,t,e,n,r,i),!0;case"dragenter":return gr=Hs(gr,t,e,n,r,i),!0;case"mouseover":return yr=Hs(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Po.set(s,Hs(Po.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Do.set(s,Hs(Do.get(s)||null,t,e,n,r,i)),!0}return!1}function xw(t){var e=qr(t.target);if(e!==null){var n=Ei(e);if(n!==null){if(e=n.tag,e===13){if(e=dw(n),e!==null){t.blockedOn=e,Cw(t.priority,function(){_w(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Id(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ed=r,n.target.dispatchEvent(r),Ed=null}else return e=ua(n),e!==null&&cp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ug(t,e,n){wl(t)&&n.delete(e)}function ok(){kd=!1,mr!==null&&wl(mr)&&(mr=null),gr!==null&&wl(gr)&&(gr=null),yr!==null&&wl(yr)&&(yr=null),Po.forEach(Ug),Do.forEach(Ug)}function Ws(t,e){t.blockedOn===e&&(t.blockedOn=null,kd||(kd=!0,Kt.unstable_scheduleCallback(Kt.unstable_NormalPriority,ok)))}function No(t){function e(i){return Ws(i,t)}if(0<Va.length){Ws(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&Ws(mr,t),gr!==null&&Ws(gr,t),yr!==null&&Ws(yr,t),Po.forEach(e),Do.forEach(e),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)xw(n),n.blockedOn===null&&sr.shift()}var Qi=Zn.ReactCurrentBatchConfig,ql=!0;function ak(t,e,n,r){var i=pe,s=Qi.transition;Qi.transition=null;try{pe=1,hp(t,e,n,r)}finally{pe=i,Qi.transition=s}}function lk(t,e,n,r){var i=pe,s=Qi.transition;Qi.transition=null;try{pe=4,hp(t,e,n,r)}finally{pe=i,Qi.transition=s}}function hp(t,e,n,r){if(ql){var i=Id(t,e,n,r);if(i===null)yh(t,e,r,Gl,n),Mg(t,r);else if(sk(i,t,e,n,r))r.stopPropagation();else if(Mg(t,r),e&4&&-1<ik.indexOf(t)){for(;i!==null;){var s=ua(i);if(s!==null&&Ew(s),s=Id(t,e,n,r),s===null&&yh(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else yh(t,e,r,null,n)}}var Gl=null;function Id(t,e,n,r){if(Gl=null,t=ap(r),t=qr(t),t!==null)if(e=Ei(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function kw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Qx()){case lp:return 1;case gw:return 4;case Hl:case Yx:return 16;case yw:return 536870912;default:return 16}default:return 16}}var dr=null,dp=null,El=null;function Iw(){if(El)return El;var t,e=dp,n=e.length,r,i="value"in dr?dr.value:dr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return El=i.slice(t,1<r?1-r:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function Fg(){return!1}function Xt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:Fg,this.isPropagationStopped=Fg,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=Xt(xs),la=Ae({},xs,{view:0,detail:0}),uk=Xt(la),lh,uh,qs,Vu=Ae({},la,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qs&&(qs&&t.type==="mousemove"?(lh=t.screenX-qs.screenX,uh=t.screenY-qs.screenY):uh=lh=0,qs=t),lh)},movementY:function(t){return"movementY"in t?t.movementY:uh}}),jg=Xt(Vu),ck=Ae({},Vu,{dataTransfer:0}),hk=Xt(ck),dk=Ae({},la,{relatedTarget:0}),ch=Xt(dk),fk=Ae({},xs,{animationName:0,elapsedTime:0,pseudoElement:0}),pk=Xt(fk),mk=Ae({},xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),gk=Xt(mk),yk=Ae({},xs,{data:0}),zg=Xt(yk),vk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ek={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _k(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ek[t])?!!e[t]:!1}function pp(){return _k}var Sk=Ae({},la,{key:function(t){if(t.key){var e=vk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pp,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ck=Xt(Sk),xk=Ae({},Vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vg=Xt(xk),kk=Ae({},la,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pp}),Ik=Xt(kk),Tk=Ae({},xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rk=Xt(Tk),Ak=Ae({},Vu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Pk=Xt(Ak),Dk=[9,13,27,32],mp=Hn&&"CompositionEvent"in window,ho=null;Hn&&"documentMode"in document&&(ho=document.documentMode);var Nk=Hn&&"TextEvent"in window&&!ho,Tw=Hn&&(!mp||ho&&8<ho&&11>=ho),Bg=String.fromCharCode(32),Hg=!1;function Rw(t,e){switch(t){case"keyup":return Dk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var bi=!1;function bk(t,e){switch(t){case"compositionend":return Aw(e);case"keypress":return e.which!==32?null:(Hg=!0,Bg);case"textInput":return t=e.data,t===Bg&&Hg?null:t;default:return null}}function Lk(t,e){if(bi)return t==="compositionend"||!mp&&Rw(t,e)?(t=Iw(),El=dp=dr=null,bi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Tw&&e.locale!=="ko"?null:e.data;default:return null}}var Ok={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Ok[t.type]:e==="textarea"}function Pw(t,e,n,r){aw(r),e=Kl(e,"onChange"),0<e.length&&(n=new fp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var fo=null,bo=null;function $k(t){zw(t,0)}function Bu(t){var e=$i(t);if(ew(e))return t}function Mk(t,e){if(t==="change")return e}var Dw=!1;if(Hn){var hh;if(Hn){var dh="oninput"in document;if(!dh){var qg=document.createElement("div");qg.setAttribute("oninput","return;"),dh=typeof qg.oninput=="function"}hh=dh}else hh=!1;Dw=hh&&(!document.documentMode||9<document.documentMode)}function Gg(){fo&&(fo.detachEvent("onpropertychange",Nw),bo=fo=null)}function Nw(t){if(t.propertyName==="value"&&Bu(bo)){var e=[];Pw(e,bo,t,ap(t)),hw($k,e)}}function Uk(t,e,n){t==="focusin"?(Gg(),fo=e,bo=n,fo.attachEvent("onpropertychange",Nw)):t==="focusout"&&Gg()}function Fk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Bu(bo)}function jk(t,e){if(t==="click")return Bu(e)}function zk(t,e){if(t==="input"||t==="change")return Bu(e)}function Vk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:Vk;function Lo(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ld.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function Kg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Qg(t,e){var n=Kg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Kg(n)}}function bw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Lw(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function gp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Bk(t){var e=Lw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bw(n.ownerDocument.documentElement,n)){if(r!==null&&gp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Qg(n,s);var o=Qg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Hk=Hn&&"documentMode"in document&&11>=document.documentMode,Li=null,Td=null,po=null,Rd=!1;function Yg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Rd||Li==null||Li!==zl(r)||(r=Li,"selectionStart"in r&&gp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),po&&Lo(po,r)||(po=r,r=Kl(Td,"onSelect"),0<r.length&&(e=new fp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Li)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Oi={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},fh={},Ow={};Hn&&(Ow=document.createElement("div").style,"AnimationEvent"in window||(delete Oi.animationend.animation,delete Oi.animationiteration.animation,delete Oi.animationstart.animation),"TransitionEvent"in window||delete Oi.transitionend.transition);function Hu(t){if(fh[t])return fh[t];if(!Oi[t])return t;var e=Oi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ow)return fh[t]=e[n];return t}var $w=Hu("animationend"),Mw=Hu("animationiteration"),Uw=Hu("animationstart"),Fw=Hu("transitionend"),jw=new Map,Xg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){jw.set(t,e),wi(e,[t])}for(var ph=0;ph<Xg.length;ph++){var mh=Xg[ph],Wk=mh.toLowerCase(),qk=mh[0].toUpperCase()+mh.slice(1);Or(Wk,"on"+qk)}Or($w,"onAnimationEnd");Or(Mw,"onAnimationIteration");Or(Uw,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Fw,"onTransitionEnd");rs("onMouseEnter",["mouseout","mouseover"]);rs("onMouseLeave",["mouseout","mouseover"]);rs("onPointerEnter",["pointerout","pointerover"]);rs("onPointerLeave",["pointerout","pointerover"]);wi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));wi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));wi("onBeforeInput",["compositionend","keypress","textInput","paste"]);wi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));wi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gk=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function Jg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Wx(r,e,void 0,t),t.currentTarget=null}function zw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Jg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Jg(i,a,u),s=l}}}if(Bl)throw t=Cd,Bl=!1,Cd=null,t}function we(t,e){var n=e[bd];n===void 0&&(n=e[bd]=new Set);var r=t+"__bubble";n.has(r)||(Vw(e,t,2,!1),n.add(r))}function gh(t,e,n){var r=0;e&&(r|=4),Vw(n,t,r,e)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function Oo(t){if(!t[Wa]){t[Wa]=!0,Q0.forEach(function(n){n!=="selectionchange"&&(Gk.has(n)||gh(n,!1,t),gh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wa]||(e[Wa]=!0,gh("selectionchange",!1,e))}}function Vw(t,e,n,r){switch(kw(e)){case 1:var i=ak;break;case 4:i=lk;break;default:i=hp}n=i.bind(null,e,n,t),i=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function yh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=qr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}hw(function(){var u=s,c=ap(n),h=[];e:{var d=jw.get(t);if(d!==void 0){var m=fp,v=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":m=Ck;break;case"focusin":v="focus",m=ch;break;case"focusout":v="blur",m=ch;break;case"beforeblur":case"afterblur":m=ch;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=jg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=hk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Ik;break;case $w:case Mw:case Uw:m=pk;break;case Fw:m=Rk;break;case"scroll":m=uk;break;case"wheel":m=Pk;break;case"copy":case"cut":case"paste":m=gk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vg}var w=(e&4)!==0,E=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=Ao(f,p),_!=null&&w.push($o(f,_,g)))),E)break;f=f.return}0<w.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Ed&&(v=n.relatedTarget||n.fromElement)&&(qr(v)||v[Wn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?qr(v):null,v!==null&&(E=Ei(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=jg,_="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Vg,_="onPointerLeave",p="onPointerEnter",f="pointer"),E=m==null?d:$i(m),g=v==null?d:$i(v),d=new w(_,f+"leave",m,n,c),d.target=E,d.relatedTarget=g,_=null,qr(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=g,w.relatedTarget=E,_=w),E=_,m&&v)t:{for(w=m,p=v,f=0,g=w;g;g=Ri(g))f++;for(g=0,_=p;_;_=Ri(_))g++;for(;0<f-g;)w=Ri(w),f--;for(;0<g-f;)p=Ri(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Ri(w),p=Ri(p)}w=null}else w=null;m!==null&&Zg(h,d,m,w,!1),v!==null&&E!==null&&Zg(h,E,v,w,!0)}}e:{if(d=u?$i(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var x=Mk;else if(Wg(d))if(Dw)x=zk;else{x=Fk;var A=Uk}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=jk);if(x&&(x=x(t,u))){Pw(h,x,n,c);break e}A&&A(t,d,u),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&md(d,"number",d.value)}switch(A=u?$i(u):window,t){case"focusin":(Wg(A)||A.contentEditable==="true")&&(Li=A,Td=u,po=null);break;case"focusout":po=Td=Li=null;break;case"mousedown":Rd=!0;break;case"contextmenu":case"mouseup":case"dragend":Rd=!1,Yg(h,n,c);break;case"selectionchange":if(Hk)break;case"keydown":case"keyup":Yg(h,n,c)}var D;if(mp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else bi?Rw(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Tw&&n.locale!=="ko"&&(bi||N!=="onCompositionStart"?N==="onCompositionEnd"&&bi&&(D=Iw()):(dr=c,dp="value"in dr?dr.value:dr.textContent,bi=!0)),A=Kl(u,N),0<A.length&&(N=new zg(N,t,null,n,c),h.push({event:N,listeners:A}),D?N.data=D:(D=Aw(n),D!==null&&(N.data=D)))),(D=Nk?bk(t,n):Lk(t,n))&&(u=Kl(u,"onBeforeInput"),0<u.length&&(c=new zg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}zw(h,e)})}function $o(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ao(t,n),s!=null&&r.unshift($o(t,s,i)),s=Ao(t,e),s!=null&&r.push($o(t,s,i))),t=t.return}return r}function Ri(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Zg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ao(n,s),l!=null&&o.unshift($o(n,l,a))):i||(l=Ao(n,s),l!=null&&o.push($o(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Kk=/\r\n?/g,Qk=/\u0000|\uFFFD/g;function ey(t){return(typeof t=="string"?t:""+t).replace(Kk,`
`).replace(Qk,"")}function qa(t,e,n){if(e=ey(e),ey(t)!==e&&n)throw Error(I(425))}function Ql(){}var Ad=null,Pd=null;function Dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Nd=typeof setTimeout=="function"?setTimeout:void 0,Yk=typeof clearTimeout=="function"?clearTimeout:void 0,ty=typeof Promise=="function"?Promise:void 0,Xk=typeof queueMicrotask=="function"?queueMicrotask:typeof ty<"u"?function(t){return ty.resolve(null).then(t).catch(Jk)}:Nd;function Jk(t){setTimeout(function(){throw t})}function vh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),No(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);No(e)}function vr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ny(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),_n="__reactFiber$"+ks,Mo="__reactProps$"+ks,Wn="__reactContainer$"+ks,bd="__reactEvents$"+ks,Zk="__reactListeners$"+ks,eI="__reactHandles$"+ks;function qr(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ny(t);t!==null;){if(n=t[_n])return n;t=ny(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[_n]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function $i(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function Wu(t){return t[Mo]||null}var Ld=[],Mi=-1;function $r(t){return{current:t}}function _e(t){0>Mi||(t.current=Ld[Mi],Ld[Mi]=null,Mi--)}function ve(t,e){Mi++,Ld[Mi]=t.current,t.current=e}var Pr={},xt=$r(Pr),Ft=$r(!1),ii=Pr;function is(t,e){var n=t.type.contextTypes;if(!n)return Pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Yl(){_e(Ft),_e(xt)}function ry(t,e,n){if(xt.current!==Pr)throw Error(I(168));ve(xt,e),ve(Ft,n)}function Bw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Ux(t)||"Unknown",i));return Ae({},n,r)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pr,ii=xt.current,ve(xt,t),ve(Ft,Ft.current),!0}function iy(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Bw(t,e,ii),r.__reactInternalMemoizedMergedChildContext=t,_e(Ft),_e(xt),ve(xt,t)):_e(Ft),ve(Ft,n)}var $n=null,qu=!1,wh=!1;function Hw(t){$n===null?$n=[t]:$n.push(t)}function tI(t){qu=!0,Hw(t)}function Mr(){if(!wh&&$n!==null){wh=!0;var t=0,e=pe;try{var n=$n;for(pe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,qu=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),mw(lp,Mr),i}finally{pe=e,wh=!1}}return null}var Ui=[],Fi=0,Jl=null,Zl=0,Zt=[],en=0,si=null,Mn=1,Un="";function zr(t,e){Ui[Fi++]=Zl,Ui[Fi++]=Jl,Jl=t,Zl=e}function Ww(t,e,n){Zt[en++]=Mn,Zt[en++]=Un,Zt[en++]=si,si=t;var r=Mn;t=Un;var i=32-dn(r)-1;r&=~(1<<i),n+=1;var s=32-dn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mn=1<<32-dn(e)+i|n<<i|r,Un=s+t}else Mn=1<<s|n<<i|r,Un=t}function yp(t){t.return!==null&&(zr(t,1),Ww(t,1,0))}function vp(t){for(;t===Jl;)Jl=Ui[--Fi],Ui[Fi]=null,Zl=Ui[--Fi],Ui[Fi]=null;for(;t===si;)si=Zt[--en],Zt[en]=null,Un=Zt[--en],Zt[en]=null,Mn=Zt[--en],Zt[en]=null}var Gt=null,Ht=null,Ce=!1,hn=null;function qw(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=vr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=si!==null?{id:Mn,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,Ht=null,!0):!1;default:return!1}}function Od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $d(t){if(Ce){var e=Ht;if(e){var n=e;if(!sy(t,e)){if(Od(t))throw Error(I(418));e=vr(n.nextSibling);var r=Gt;e&&sy(t,e)?qw(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Gt=t)}}else{if(Od(t))throw Error(I(418));t.flags=t.flags&-4097|2,Ce=!1,Gt=t}}}function oy(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function Ga(t){if(t!==Gt)return!1;if(!Ce)return oy(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Dd(t.type,t.memoizedProps)),e&&(e=Ht)){if(Od(t))throw Gw(),Error(I(418));for(;e;)qw(t,e),e=vr(e.nextSibling)}if(oy(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=vr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Gt?vr(t.stateNode.nextSibling):null;return!0}function Gw(){for(var t=Ht;t;)t=vr(t.nextSibling)}function ss(){Ht=Gt=null,Ce=!1}function wp(t){hn===null?hn=[t]:hn.push(t)}var nI=Zn.ReactCurrentBatchConfig;function un(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var eu=$r(null),tu=null,ji=null,Ep=null;function _p(){Ep=ji=tu=null}function Sp(t){var e=eu.current;_e(eu),t._currentValue=e}function Md(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Yi(t,e){tu=t,Ep=ji=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function sn(t){var e=t._currentValue;if(Ep!==t)if(t={context:t,memoizedValue:e,next:null},ji===null){if(tu===null)throw Error(I(308));ji=t,tu.dependencies={lanes:0,firstContext:t}}else ji=ji.next=t;return e}var Gr=null;function Cp(t){Gr===null?Gr=[t]:Gr.push(t)}function Kw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Cp(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ir=!1;function xp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function wr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,Cp(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,up(t,n)}}function ay(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,r){var i=t.updateQueue;ir=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=Ae({},h,d);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);ai|=o,t.lanes=o,t.memoizedState=h}}function ly(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Yw=new K0.Component().refs;function Ud(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Gu={isMounted:function(t){return(t=t._reactInternals)?Ei(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=_r(t),s=Vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(fn(e,t,i,r),Sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=_r(t),s=Vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=wr(t,s,i),e!==null&&(fn(e,t,i,r),Sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=_r(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=wr(t,i,r),e!==null&&(fn(e,t,r,n),Sl(e,t,r))}};function uy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Lo(n,r)||!Lo(i,s):!0}function Xw(t,e,n){var r=!1,i=Pr,s=e.contextType;return typeof s=="object"&&s!==null?s=sn(s):(i=jt(e)?ii:xt.current,r=e.contextTypes,s=(r=r!=null)?is(t,i):Pr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Gu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function cy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Gu.enqueueReplaceState(e,e.state,null)}function Fd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Yw,xp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=sn(s):(s=jt(e)?ii:xt.current,i.context=is(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ud(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Gu.enqueueReplaceState(i,i.state,null),nu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Yw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hy(t){var e=t._init;return e(t._payload)}function Jw(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Sr(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,_){return f===null||f.tag!==6?(f=Ih(g,p.mode,_),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,_){var x=g.type;return x===Ni?c(p,f,g.props.children,_,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===rr&&hy(x)===f.type)?(_=i(f,g.props),_.ref=Gs(p,f,g),_.return=p,_):(_=Rl(g.type,g.key,g.props,null,p.mode,_),_.ref=Gs(p,f,g),_.return=p,_)}function u(p,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Th(g,p.mode,_),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,_,x){return f===null||f.tag!==7?(f=Zr(g,p.mode,_,x),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ih(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ma:return g=Rl(f.type,f.key,f.props,null,p.mode,g),g.ref=Gs(p,null,f),g.return=p,g;case Di:return f=Th(f,p.mode,g),f.return=p,f;case rr:var _=f._init;return h(p,_(f._payload),g)}if(eo(f)||Vs(f))return f=Zr(f,p.mode,g,null),f.return=p,f;Ka(p,f)}return null}function d(p,f,g,_){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:a(p,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:return g.key===x?l(p,f,g,_):null;case Di:return g.key===x?u(p,f,g,_):null;case rr:return x=g._init,d(p,f,x(g._payload),_)}if(eo(g)||Vs(g))return x!==null?null:c(p,f,g,_,null);Ka(p,g)}return null}function m(p,f,g,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(f,p,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ma:return p=p.get(_.key===null?g:_.key)||null,l(f,p,_,x);case Di:return p=p.get(_.key===null?g:_.key)||null,u(f,p,_,x);case rr:var A=_._init;return m(p,f,g,A(_._payload),x)}if(eo(_)||Vs(_))return p=p.get(g)||null,c(f,p,_,x,null);Ka(f,_)}return null}function v(p,f,g,_){for(var x=null,A=null,D=f,N=f=0,Y=null;D!==null&&N<g.length;N++){D.index>N?(Y=D,D=null):Y=D.sibling;var W=d(p,D,g[N],_);if(W===null){D===null&&(D=Y);break}t&&D&&W.alternate===null&&e(p,D),f=s(W,f,N),A===null?x=W:A.sibling=W,A=W,D=Y}if(N===g.length)return n(p,D),Ce&&zr(p,N),x;if(D===null){for(;N<g.length;N++)D=h(p,g[N],_),D!==null&&(f=s(D,f,N),A===null?x=D:A.sibling=D,A=D);return Ce&&zr(p,N),x}for(D=r(p,D);N<g.length;N++)Y=m(D,p,N,g[N],_),Y!==null&&(t&&Y.alternate!==null&&D.delete(Y.key===null?N:Y.key),f=s(Y,f,N),A===null?x=Y:A.sibling=Y,A=Y);return t&&D.forEach(function(V){return e(p,V)}),Ce&&zr(p,N),x}function w(p,f,g,_){var x=Vs(g);if(typeof x!="function")throw Error(I(150));if(g=x.call(g),g==null)throw Error(I(151));for(var A=x=null,D=f,N=f=0,Y=null,W=g.next();D!==null&&!W.done;N++,W=g.next()){D.index>N?(Y=D,D=null):Y=D.sibling;var V=d(p,D,W.value,_);if(V===null){D===null&&(D=Y);break}t&&D&&V.alternate===null&&e(p,D),f=s(V,f,N),A===null?x=V:A.sibling=V,A=V,D=Y}if(W.done)return n(p,D),Ce&&zr(p,N),x;if(D===null){for(;!W.done;N++,W=g.next())W=h(p,W.value,_),W!==null&&(f=s(W,f,N),A===null?x=W:A.sibling=W,A=W);return Ce&&zr(p,N),x}for(D=r(p,D);!W.done;N++,W=g.next())W=m(D,p,N,W.value,_),W!==null&&(t&&W.alternate!==null&&D.delete(W.key===null?N:W.key),f=s(W,f,N),A===null?x=W:A.sibling=W,A=W);return t&&D.forEach(function(ge){return e(p,ge)}),Ce&&zr(p,N),x}function E(p,f,g,_){if(typeof g=="object"&&g!==null&&g.type===Ni&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:e:{for(var x=g.key,A=f;A!==null;){if(A.key===x){if(x=g.type,x===Ni){if(A.tag===7){n(p,A.sibling),f=i(A,g.props.children),f.return=p,p=f;break e}}else if(A.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===rr&&hy(x)===A.type){n(p,A.sibling),f=i(A,g.props),f.ref=Gs(p,A,g),f.return=p,p=f;break e}n(p,A);break}else e(p,A);A=A.sibling}g.type===Ni?(f=Zr(g.props.children,p.mode,_,g.key),f.return=p,p=f):(_=Rl(g.type,g.key,g.props,null,p.mode,_),_.ref=Gs(p,f,g),_.return=p,p=_)}return o(p);case Di:e:{for(A=g.key;f!==null;){if(f.key===A)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Th(g,p.mode,_),f.return=p,p=f}return o(p);case rr:return A=g._init,E(p,f,A(g._payload),_)}if(eo(g))return v(p,f,g,_);if(Vs(g))return w(p,f,g,_);Ka(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Ih(g,p.mode,_),f.return=p,p=f),o(p)):n(p,f)}return E}var os=Jw(!0),Zw=Jw(!1),ca={},In=$r(ca),Uo=$r(ca),Fo=$r(ca);function Kr(t){if(t===ca)throw Error(I(174));return t}function kp(t,e){switch(ve(Fo,e),ve(Uo,t),ve(In,ca),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yd(e,t)}_e(In),ve(In,e)}function as(){_e(In),_e(Uo),_e(Fo)}function e1(t){Kr(Fo.current);var e=Kr(In.current),n=yd(e,t.type);e!==n&&(ve(Uo,t),ve(In,n))}function Ip(t){Uo.current===t&&(_e(In),_e(Uo))}var Te=$r(0);function ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Eh=[];function Tp(){for(var t=0;t<Eh.length;t++)Eh[t]._workInProgressVersionPrimary=null;Eh.length=0}var Cl=Zn.ReactCurrentDispatcher,_h=Zn.ReactCurrentBatchConfig,oi=0,Re=null,He=null,Xe=null,iu=!1,mo=!1,jo=0,rI=0;function pt(){throw Error(I(321))}function Rp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function Ap(t,e,n,r,i,s){if(oi=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?aI:lI,t=n(r,i),mo){s=0;do{if(mo=!1,jo=0,25<=s)throw Error(I(301));s+=1,Xe=He=null,e.updateQueue=null,Cl.current=uI,t=n(r,i)}while(mo)}if(Cl.current=su,e=He!==null&&He.next!==null,oi=0,Xe=He=Re=null,iu=!1,e)throw Error(I(300));return t}function Pp(){var t=jo!==0;return jo=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Re.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function on(){if(He===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Xe===null?Re.memoizedState:Xe.next;if(e!==null)Xe=e,He=t;else{if(t===null)throw Error(I(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Xe===null?Re.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function zo(t,e){return typeof e=="function"?e(t):e}function Sh(t){var e=on(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((oi&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Re.lanes|=c,ai|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,ai|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ch(t){var e=on(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function t1(){}function n1(t,e){var n=Re,r=on(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,Dp(s1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Vo(9,i1.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(I(349));oi&30||r1(n,e,i)}return i}function r1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i1(t,e,n,r){e.value=n,e.getSnapshot=r,o1(e)&&a1(t)}function s1(t,e,n){return n(function(){o1(e)&&a1(t)})}function o1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function a1(t){var e=qn(t,1);e!==null&&fn(e,t,1,-1)}function dy(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zo,lastRenderedState:t},e.queue=t,t=t.dispatch=oI.bind(null,Re,t),[e.memoizedState,t]}function Vo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function l1(){return on().memoizedState}function xl(t,e,n,r){var i=En();Re.flags|=t,i.memoizedState=Vo(1|e,n,void 0,r===void 0?null:r)}function Ku(t,e,n,r){var i=on();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Rp(r,o.deps)){i.memoizedState=Vo(e,n,s,r);return}}Re.flags|=t,i.memoizedState=Vo(1|e,n,s,r)}function fy(t,e){return xl(8390656,8,t,e)}function Dp(t,e){return Ku(2048,8,t,e)}function u1(t,e){return Ku(4,2,t,e)}function c1(t,e){return Ku(4,4,t,e)}function h1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function d1(t,e,n){return n=n!=null?n.concat([t]):null,Ku(4,4,h1.bind(null,e,t),n)}function Np(){}function f1(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function p1(t,e){var n=on();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Rp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function m1(t,e,n){return oi&21?(gn(n,e)||(n=vw(),Re.lanes|=n,ai|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function iI(t,e){var n=pe;pe=n!==0&&4>n?n:4,t(!0);var r=_h.transition;_h.transition={};try{t(!1),e()}finally{pe=n,_h.transition=r}}function g1(){return on().memoizedState}function sI(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},y1(t))v1(e,n);else if(n=Kw(t,e,n,r),n!==null){var i=Dt();fn(n,t,r,i),w1(n,e,r)}}function oI(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(y1(t))v1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,Cp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Kw(t,e,i,r),n!==null&&(i=Dt(),fn(n,t,r,i),w1(n,e,r))}}function y1(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function v1(t,e){mo=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function w1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,up(t,n)}}var su={readContext:sn,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},aI={readContext:sn,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:sn,useEffect:fy,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,h1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=sI.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:dy,useDebugValue:Np,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=dy(!1),e=t[0];return t=iI.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=En();if(Ce){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Je===null)throw Error(I(349));oi&30||r1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,fy(s1.bind(null,r,s,t),[t]),r.flags|=2048,Vo(9,i1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Je.identifierPrefix;if(Ce){var n=Un,r=Mn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=rI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},lI={readContext:sn,useCallback:f1,useContext:sn,useEffect:Dp,useImperativeHandle:d1,useInsertionEffect:u1,useLayoutEffect:c1,useMemo:p1,useReducer:Sh,useRef:l1,useState:function(){return Sh(zo)},useDebugValue:Np,useDeferredValue:function(t){var e=on();return m1(e,He.memoizedState,t)},useTransition:function(){var t=Sh(zo)[0],e=on().memoizedState;return[t,e]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1},uI={readContext:sn,useCallback:f1,useContext:sn,useEffect:Dp,useImperativeHandle:d1,useInsertionEffect:u1,useLayoutEffect:c1,useMemo:p1,useReducer:Ch,useRef:l1,useState:function(){return Ch(zo)},useDebugValue:Np,useDeferredValue:function(t){var e=on();return He===null?e.memoizedState=t:m1(e,He.memoizedState,t)},useTransition:function(){var t=Ch(zo)[0],e=on().memoizedState;return[t,e]},useMutableSource:t1,useSyncExternalStore:n1,useId:g1,unstable_isNewReconciler:!1};function ls(t,e){try{var n="",r=e;do n+=Mx(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function xh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function jd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var cI=typeof WeakMap=="function"?WeakMap:Map;function E1(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){au||(au=!0,Yd=r),jd(t,e)},n}function _1(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){jd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){jd(t,e),typeof r!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function py(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new cI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=xI.bind(null,t,e,n),e.then(t,t))}function my(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,wr(n,e,1))),n.lanes|=1),t)}var hI=Zn.ReactCurrentOwner,Ut=!1;function Rt(t,e,n,r){e.child=t===null?Zw(e,null,n,r):os(e,t.child,n,r)}function yy(t,e,n,r,i){n=n.render;var s=e.ref;return Yi(e,i),r=Ap(t,e,n,r,s,i),n=Pp(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ce&&n&&yp(e),e.flags|=1,Rt(t,e,r,i),e.child)}function vy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!jp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,S1(t,e,s,r,i)):(t=Rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Lo,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Sr(s,r),t.ref=e.ref,t.return=e,e.child=t}function S1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Lo(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return zd(t,e,n,r,i)}function C1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ve(Vi,Bt),Bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ve(Vi,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ve(Vi,Bt),Bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ve(Vi,Bt),Bt|=r;return Rt(t,e,i,n),e.child}function x1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function zd(t,e,n,r,i){var s=jt(n)?ii:xt.current;return s=is(e,s),Yi(e,i),n=Ap(t,e,n,r,s,i),r=Pp(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ce&&r&&yp(e),e.flags|=1,Rt(t,e,n,i),e.child)}function wy(t,e,n,r,i){if(jt(n)){var s=!0;Xl(e)}else s=!1;if(Yi(e,i),e.stateNode===null)kl(t,e),Xw(e,n,r),Fd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=sn(u):(u=jt(n)?ii:xt.current,u=is(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&cy(e,o,r,u),ir=!1;var d=e.memoizedState;o.state=d,nu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ft.current||ir?(typeof c=="function"&&(Ud(e,n,c,r),l=e.memoizedState),(a=ir||uy(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Qw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:un(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=sn(l):(l=jt(n)?ii:xt.current,l=is(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&cy(e,o,r,l),ir=!1,d=e.memoizedState,o.state=d,nu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Ft.current||ir?(typeof m=="function"&&(Ud(e,n,m,r),v=e.memoizedState),(u=ir||uy(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Vd(t,e,n,r,s,i)}function Vd(t,e,n,r,i,s){x1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&iy(e,n,!1),Gn(t,e,s);r=e.stateNode,hI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=os(e,t.child,null,s),e.child=os(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&iy(e,n,!0),e.child}function k1(t){var e=t.stateNode;e.pendingContext?ry(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ry(t,e.context,!1),kp(t,e.containerInfo)}function Ey(t,e,n,r,i){return ss(),wp(i),e.flags|=256,Rt(t,e,n,r),e.child}var Bd={dehydrated:null,treeContext:null,retryLane:0};function Hd(t){return{baseLanes:t,cachePool:null,transitions:null}}function I1(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ve(Te,i&1),t===null)return $d(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Xu(o,r,0,null),t=Zr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hd(n),e.memoizedState=Bd,t):bp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return dI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Sr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=Zr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Bd,r}return s=t.child,t=s.sibling,r=Sr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function bp(t,e){return e=Xu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,r){return r!==null&&wp(r),os(e,t.child,null,n),t=bp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function dI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=xh(Error(I(422))),Qa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Xu({mode:"visible",children:r.children},i,0,null),s=Zr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&os(e,t.child,null,o),e.child.memoizedState=Hd(o),e.memoizedState=Bd,s);if(!(e.mode&1))return Qa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=xh(s,r,void 0),Qa(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ut||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),fn(r,t,i,-1))}return Fp(),r=xh(Error(I(421))),Qa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=kI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=vr(i.nextSibling),Gt=e,Ce=!0,hn=null,t!==null&&(Zt[en++]=Mn,Zt[en++]=Un,Zt[en++]=si,Mn=t.id,Un=t.overflow,si=e),e=bp(e,r.children),e.flags|=4096,e)}function _y(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Md(t.return,e,n)}function kh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function T1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&_y(t,n,e);else if(t.tag===19)_y(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ru(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),kh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ru(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}kh(e,!0,n,null,s);break;case"together":kh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ai|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Sr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Sr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fI(t,e,n){switch(e.tag){case 3:k1(e),ss();break;case 5:e1(e);break;case 1:jt(e.type)&&Xl(e);break;case 4:kp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ve(eu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ve(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?I1(t,e,n):(ve(Te,Te.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);ve(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return T1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,C1(t,e,n)}return Gn(t,e,n)}var R1,Wd,A1,P1;R1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};A1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Kr(In.current);var s=null;switch(n){case"input":i=fd(t,i),r=fd(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=gd(t,i),r=gd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ql)}vd(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(To.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(To.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&we("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};P1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ks(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function pI(t,e,n){var r=e.pendingProps;switch(vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return jt(e.type)&&Yl(),mt(e),null;case 3:return r=e.stateNode,as(),_e(Ft),_e(xt),Tp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hn!==null&&(Zd(hn),hn=null))),Wd(t,e),mt(e),null;case 5:Ip(e);var i=Kr(Fo.current);if(n=e.type,t!==null&&e.stateNode!=null)A1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return mt(e),null}if(t=Kr(In.current),Ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_n]=e,r[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":we("cancel",r),we("close",r);break;case"iframe":case"object":case"embed":we("load",r);break;case"video":case"audio":for(i=0;i<no.length;i++)we(no[i],r);break;case"source":we("error",r);break;case"img":case"image":case"link":we("error",r),we("load",r);break;case"details":we("toggle",r);break;case"input":Pg(r,s),we("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},we("invalid",r);break;case"textarea":Ng(r,s),we("invalid",r)}vd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",""+a]):To.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&we("scroll",r)}switch(n){case"input":Ua(r),Dg(r,s,!0);break;case"textarea":Ua(r),bg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[Mo]=r,R1(t,e,!1,!1),e.stateNode=t;e:{switch(o=wd(n,r),n){case"dialog":we("cancel",t),we("close",t),i=r;break;case"iframe":case"object":case"embed":we("load",t),i=r;break;case"video":case"audio":for(i=0;i<no.length;i++)we(no[i],t);i=r;break;case"source":we("error",t),i=r;break;case"img":case"image":case"link":we("error",t),we("load",t),i=r;break;case"details":we("toggle",t),i=r;break;case"input":Pg(t,r),i=fd(t,r),we("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),we("invalid",t);break;case"textarea":Ng(t,r),i=gd(t,r),we("invalid",t);break;default:i=r}vd(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?ow(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&iw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ro(t,l):typeof l=="number"&&Ro(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&we("scroll",t):l!=null&&rp(t,s,l,o))}switch(n){case"input":Ua(t),Dg(t,r,!1);break;case"textarea":Ua(t),bg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?qi(t,!!r.multiple,s,!1):r.defaultValue!=null&&qi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)P1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Kr(Fo.current),Kr(In.current),Ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(s=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return mt(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Ht!==null&&e.mode&1&&!(e.flags&128))Gw(),ss(),e.flags|=98560,s=!1;else if(s=Ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[_n]=e}else ss(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else hn!==null&&(Zd(hn),hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?qe===0&&(qe=3):Fp())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return as(),Wd(t,e),t===null&&Oo(e.stateNode.containerInfo),mt(e),null;case 10:return Sp(e.type._context),mt(e),null;case 17:return jt(e.type)&&Yl(),mt(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ks(s,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ru(t),o!==null){for(e.flags|=128,Ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>us&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return mt(e),null}else 2*Fe()-s.renderingStartTime>us&&n!==1073741824&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Te.current,ve(Te,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return Up(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function mI(t,e){switch(vp(e),e.tag){case 1:return jt(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return as(),_e(Ft),_e(xt),Tp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ip(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));ss()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return as(),null;case 10:return Sp(e.type._context),null;case 22:case 23:return Up(),null;case 24:return null;default:return null}}var Ya=!1,wt=!1,gI=typeof WeakSet=="function"?WeakSet:Set,M=null;function zi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function qd(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Sy=!1;function yI(t,e){if(Ad=ql,t=Lw(),gp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pd={focusedElem:t,selectionRange:n},ql=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:un(e.type,w),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(_){Ne(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=Sy,Sy=!1,v}function go(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&qd(e,n,s)}i=i.next}while(i!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function D1(t){var e=t.alternate;e!==null&&(t.alternate=null,D1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[Mo],delete e[bd],delete e[Zk],delete e[eI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function N1(t){return t.tag===5||t.tag===3||t.tag===4}function Cy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||N1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(r!==4&&(t=t.child,t!==null))for(Kd(t,e,n),t=t.sibling;t!==null;)Kd(t,e,n),t=t.sibling}function Qd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Qd(t,e,n),t=t.sibling;t!==null;)Qd(t,e,n),t=t.sibling}var st=null,cn=!1;function tr(t,e,n){for(n=n.child;n!==null;)b1(t,e,n),n=n.sibling}function b1(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(zu,n)}catch{}switch(n.tag){case 5:wt||zi(n,e);case 6:var r=st,i=cn;st=null,tr(t,e,n),st=r,cn=i,st!==null&&(cn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(cn?(t=st,n=n.stateNode,t.nodeType===8?vh(t.parentNode,n):t.nodeType===1&&vh(t,n),No(t)):vh(st,n.stateNode));break;case 4:r=st,i=cn,st=n.stateNode.containerInfo,cn=!0,tr(t,e,n),st=r,cn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qd(n,e,o),i=i.next}while(i!==r)}tr(t,e,n);break;case 1:if(!wt&&(zi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,tr(t,e,n),wt=r):tr(t,e,n);break;default:tr(t,e,n)}}function xy(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new gI),e.forEach(function(r){var i=II.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function ln(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,cn=!1;break e;case 3:st=a.stateNode.containerInfo,cn=!0;break e;case 4:st=a.stateNode.containerInfo,cn=!0;break e}a=a.return}if(st===null)throw Error(I(160));b1(s,o,i),st=null,cn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)L1(e,t),e=e.sibling}function L1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ln(e,t),wn(t),r&4){try{go(3,t,t.return),Qu(3,t)}catch(w){Ne(t,t.return,w)}try{go(5,t,t.return)}catch(w){Ne(t,t.return,w)}}break;case 1:ln(e,t),wn(t),r&512&&n!==null&&zi(n,n.return);break;case 5:if(ln(e,t),wn(t),r&512&&n!==null&&zi(n,n.return),t.flags&32){var i=t.stateNode;try{Ro(i,"")}catch(w){Ne(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&tw(i,s),wd(a,o);var u=wd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?ow(i,h):c==="dangerouslySetInnerHTML"?iw(i,h):c==="children"?Ro(i,h):rp(i,c,h,u)}switch(a){case"input":pd(i,s);break;case"textarea":nw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?qi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?qi(i,!!s.multiple,s.defaultValue,!0):qi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mo]=s}catch(w){Ne(t,t.return,w)}}break;case 6:if(ln(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ne(t,t.return,w)}}break;case 3:if(ln(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{No(e.containerInfo)}catch(w){Ne(t,t.return,w)}break;case 4:ln(e,t),wn(t);break;case 13:ln(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||($p=Fe())),r&4&&xy(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,ln(e,t),wt=u):ln(e,t),wn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,m=d.child,d.tag){case 0:case 11:case 14:case 15:go(4,d,d.return);break;case 1:zi(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Ne(r,n,w)}}break;case 5:zi(d,d.return);break;case 22:if(d.memoizedState!==null){Iy(h);continue}}m!==null?(m.return=d,M=m):Iy(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sw("display",o))}catch(w){Ne(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Ne(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:ln(e,t),wn(t),r&4&&xy(t);break;case 21:break;default:ln(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(N1(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ro(i,""),r.flags&=-33);var s=Cy(t);Qd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Cy(t);Kd(t,a,o);break;default:throw Error(I(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function vI(t,e,n){M=t,O1(t)}function O1(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ya;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=Ya;var u=wt;if(Ya=o,(wt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Ty(i):l!==null?(l.return=o,M=l):Ty(i);for(;s!==null;)M=s,O1(s),s=s.sibling;M=i,Ya=a,wt=u}ky(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):ky(t)}}function ky(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:un(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ly(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ly(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&No(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}wt||e.flags&512&&Gd(e)}catch(d){Ne(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Iy(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Ty(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{Gd(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{Gd(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var wI=Math.ceil,ou=Zn.ReactCurrentDispatcher,Lp=Zn.ReactCurrentOwner,nn=Zn.ReactCurrentBatchConfig,ae=0,Je=null,Ve=null,ut=0,Bt=0,Vi=$r(0),qe=0,Bo=null,ai=0,Yu=0,Op=0,yo=null,$t=null,$p=0,us=1/0,On=null,au=!1,Yd=null,Er=null,Xa=!1,fr=null,lu=0,vo=0,Xd=null,Il=-1,Tl=0;function Dt(){return ae&6?Fe():Il!==-1?Il:Il=Fe()}function _r(t){return t.mode&1?ae&2&&ut!==0?ut&-ut:nI.transition!==null?(Tl===0&&(Tl=vw()),Tl):(t=pe,t!==0||(t=window.event,t=t===void 0?16:kw(t.type)),t):1}function fn(t,e,n,r){if(50<vo)throw vo=0,Xd=null,Error(I(185));aa(t,n,r),(!(ae&2)||t!==Je)&&(t===Je&&(!(ae&2)&&(Yu|=n),qe===4&&or(t,ut)),zt(t,r),n===1&&ae===0&&!(e.mode&1)&&(us=Fe()+500,qu&&Mr()))}function zt(t,e){var n=t.callbackNode;nk(t,e);var r=Wl(t,t===Je?ut:0);if(r===0)n!==null&&$g(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&$g(n),e===1)t.tag===0?tI(Ry.bind(null,t)):Hw(Ry.bind(null,t)),Xk(function(){!(ae&6)&&Mr()}),n=null;else{switch(ww(r)){case 1:n=lp;break;case 4:n=gw;break;case 16:n=Hl;break;case 536870912:n=yw;break;default:n=Hl}n=B1(n,$1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $1(t,e){if(Il=-1,Tl=0,ae&6)throw Error(I(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=Wl(t,t===Je?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uu(t,r);else{e=r;var i=ae;ae|=2;var s=U1();(Je!==t||ut!==e)&&(On=null,us=Fe()+500,Jr(t,e));do try{SI();break}catch(a){M1(t,a)}while(1);_p(),ou.current=s,ae=i,Ve!==null?e=0:(Je=null,ut=0,e=qe)}if(e!==0){if(e===2&&(i=xd(t),i!==0&&(r=i,e=Jd(t,i))),e===1)throw n=Bo,Jr(t,0),or(t,r),zt(t,Fe()),n;if(e===6)or(t,r);else{if(i=t.current.alternate,!(r&30)&&!EI(i)&&(e=uu(t,r),e===2&&(s=xd(t),s!==0&&(r=s,e=Jd(t,s))),e===1))throw n=Bo,Jr(t,0),or(t,r),zt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Vr(t,$t,On);break;case 3:if(or(t,r),(r&130023424)===r&&(e=$p+500-Fe(),10<e)){if(Wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Nd(Vr.bind(null,t,$t,On),e);break}Vr(t,$t,On);break;case 4:if(or(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-dn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wI(r/1960))-r,10<r){t.timeoutHandle=Nd(Vr.bind(null,t,$t,On),r);break}Vr(t,$t,On);break;case 5:Vr(t,$t,On);break;default:throw Error(I(329))}}}return zt(t,Fe()),t.callbackNode===n?$1.bind(null,t):null}function Jd(t,e){var n=yo;return t.current.memoizedState.isDehydrated&&(Jr(t,e).flags|=256),t=uu(t,e),t!==2&&(e=$t,$t=n,e!==null&&Zd(e)),t}function Zd(t){$t===null?$t=t:$t.push.apply($t,t)}function EI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function or(t,e){for(e&=~Op,e&=~Yu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function Ry(t){if(ae&6)throw Error(I(327));Xi();var e=Wl(t,0);if(!(e&1))return zt(t,Fe()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var r=xd(t);r!==0&&(e=r,n=Jd(t,r))}if(n===1)throw n=Bo,Jr(t,0),or(t,e),zt(t,Fe()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Vr(t,$t,On),zt(t,Fe()),null}function Mp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(us=Fe()+500,qu&&Mr())}}function li(t){fr!==null&&fr.tag===0&&!(ae&6)&&Xi();var e=ae;ae|=1;var n=nn.transition,r=pe;try{if(nn.transition=null,pe=1,t)return t()}finally{pe=r,nn.transition=n,ae=e,!(ae&6)&&Mr()}}function Up(){Bt=Vi.current,_e(Vi)}function Jr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Yk(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(vp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yl();break;case 3:as(),_e(Ft),_e(xt),Tp();break;case 5:Ip(r);break;case 4:as();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:Sp(r.type._context);break;case 22:case 23:Up()}n=n.return}if(Je=t,Ve=t=Sr(t.current,null),ut=Bt=e,qe=0,Bo=null,Op=Yu=ai=0,$t=yo=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function M1(t,e){do{var n=Ve;try{if(_p(),Cl.current=su,iu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}iu=!1}if(oi=0,Xe=He=Re=null,mo=!1,jo=0,Lp.current=null,n===null||n.return===null){qe=1,Bo=e,Ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=my(o);if(m!==null){m.flags&=-257,gy(m,o,a,s,e),m.mode&1&&py(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){py(s,u,e),Fp();break e}l=Error(I(426))}}else if(Ce&&a.mode&1){var E=my(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),gy(E,o,a,s,e),wp(ls(l,a));break e}}s=l=ls(l,a),qe!==4&&(qe=2),yo===null?yo=[s]:yo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=E1(s,l,e);ay(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Er===null||!Er.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=_1(s,a,e);ay(s,_);break e}}s=s.return}while(s!==null)}j1(n)}catch(x){e=x,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function U1(){var t=ou.current;return ou.current=su,t===null?su:t}function Fp(){(qe===0||qe===3||qe===2)&&(qe=4),Je===null||!(ai&268435455)&&!(Yu&268435455)||or(Je,ut)}function uu(t,e){var n=ae;ae|=2;var r=U1();(Je!==t||ut!==e)&&(On=null,Jr(t,e));do try{_I();break}catch(i){M1(t,i)}while(1);if(_p(),ae=n,ou.current=r,Ve!==null)throw Error(I(261));return Je=null,ut=0,qe}function _I(){for(;Ve!==null;)F1(Ve)}function SI(){for(;Ve!==null&&!Gx();)F1(Ve)}function F1(t){var e=V1(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?j1(t):Ve=e,Lp.current=null}function j1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=mI(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Ve=null;return}}else if(n=pI(n,e,Bt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);qe===0&&(qe=5)}function Vr(t,e,n){var r=pe,i=nn.transition;try{nn.transition=null,pe=1,CI(t,e,n,r)}finally{nn.transition=i,pe=r}return null}function CI(t,e,n,r){do Xi();while(fr!==null);if(ae&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(rk(t,s),t===Je&&(Ve=Je=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,B1(Hl,function(){return Xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=nn.transition,nn.transition=null;var o=pe;pe=1;var a=ae;ae|=4,Lp.current=null,yI(t,n),L1(n,t),Bk(Pd),ql=!!Ad,Pd=Ad=null,t.current=n,vI(n),Kx(),ae=a,pe=o,nn.transition=s}else t.current=n;if(Xa&&(Xa=!1,fr=t,lu=i),s=t.pendingLanes,s===0&&(Er=null),Xx(n.stateNode),zt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(au)throw au=!1,t=Yd,Yd=null,t;return lu&1&&t.tag!==0&&Xi(),s=t.pendingLanes,s&1?t===Xd?vo++:(vo=0,Xd=t):vo=0,Mr(),null}function Xi(){if(fr!==null){var t=ww(lu),e=nn.transition,n=pe;try{if(nn.transition=null,pe=16>t?16:t,fr===null)var r=!1;else{if(t=fr,fr=null,lu=0,ae&6)throw Error(I(331));var i=ae;for(ae|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:go(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,m=c.return;if(D1(c),c===u){M=null;break}if(d!==null){d.return=m,M=d;break}M=m}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:go(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qu(9,a)}}catch(x){Ne(a,a.return,x)}if(a===o){M=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,M=_;break e}M=a.return}}if(ae=i,Mr(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(zu,t)}catch{}r=!0}return r}finally{pe=n,nn.transition=e}}return!1}function Ay(t,e,n){e=ls(n,e),e=E1(t,e,1),t=wr(t,e,1),e=Dt(),t!==null&&(aa(t,1,e),zt(t,e))}function Ne(t,e,n){if(t.tag===3)Ay(t,t,n);else for(;e!==null;){if(e.tag===3){Ay(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Er===null||!Er.has(r))){t=ls(n,t),t=_1(e,t,1),e=wr(e,t,1),t=Dt(),e!==null&&(aa(e,1,t),zt(e,t));break}}e=e.return}}function xI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(ut&n)===n&&(qe===4||qe===3&&(ut&130023424)===ut&&500>Fe()-$p?Jr(t,0):Op|=n),zt(t,e)}function z1(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=Dt();t=qn(t,e),t!==null&&(aa(t,e,n),zt(t,n))}function kI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),z1(t,n)}function II(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),z1(t,n)}var V1;V1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,fI(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,Ce&&e.flags&1048576&&Ww(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kl(t,e),t=e.pendingProps;var i=is(e,xt.current);Yi(e,n),i=Ap(null,e,r,t,i,n);var s=Pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,Xl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xp(e),i.updater=Gu,e.stateNode=i,i._reactInternals=e,Fd(e,r,t,n),e=Vd(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&yp(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=RI(r),t=un(r,t),i){case 0:e=zd(null,e,r,t,n);break e;case 1:e=wy(null,e,r,t,n);break e;case 11:e=yy(null,e,r,t,n);break e;case 14:e=vy(null,e,r,un(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),zd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),wy(t,e,r,i,n);case 3:e:{if(k1(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Qw(t,e),nu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ls(Error(I(423)),e),e=Ey(t,e,r,n,i);break e}else if(r!==i){i=ls(Error(I(424)),e),e=Ey(t,e,r,n,i);break e}else for(Ht=vr(e.stateNode.containerInfo.firstChild),Gt=e,Ce=!0,hn=null,n=Zw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ss(),r===i){e=Gn(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return e1(e),t===null&&$d(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Dd(r,i)?o=null:s!==null&&Dd(r,s)&&(e.flags|=32),x1(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&$d(e),null;case 13:return I1(t,e,n);case 4:return kp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=os(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),yy(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ve(eu,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Ft.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Vn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Md(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Md(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Yi(e,n),i=sn(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=un(r,e.pendingProps),i=un(r.type,i),vy(t,e,r,i,n);case 15:return S1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:un(r,i),kl(t,e),e.tag=1,jt(r)?(t=!0,Xl(e)):t=!1,Yi(e,n),Xw(e,r,i),Fd(e,r,i,n),Vd(null,e,r,!0,t,n);case 19:return T1(t,e,n);case 22:return C1(t,e,n)}throw Error(I(156,e.tag))};function B1(t,e){return mw(t,e)}function TI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new TI(t,e,n,r)}function jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function RI(t){if(typeof t=="function")return jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===sp)return 11;if(t===op)return 14}return 2}function Sr(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")jp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ni:return Zr(n.children,i,s,e);case ip:o=8,i|=8;break;case ud:return t=tn(12,n,e,i|2),t.elementType=ud,t.lanes=s,t;case cd:return t=tn(13,n,e,i),t.elementType=cd,t.lanes=s,t;case hd:return t=tn(19,n,e,i),t.elementType=hd,t.lanes=s,t;case J0:return Xu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Y0:o=10;break e;case X0:o=9;break e;case sp:o=11;break e;case op:o=14;break e;case rr:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=tn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Zr(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function Xu(t,e,n,r){return t=tn(22,t,r,e),t.elementType=J0,t.lanes=n,t.stateNode={isHidden:!1},t}function Ih(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Th(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function AI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ah(0),this.expirationTimes=ah(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ah(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function zp(t,e,n,r,i,s,o,a,l){return t=new AI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xp(s),t}function PI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function H1(t){if(!t)return Pr;t=t._reactInternals;e:{if(Ei(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(jt(n))return Bw(t,n,e)}return e}function W1(t,e,n,r,i,s,o,a,l){return t=zp(n,r,!0,t,i,s,o,a,l),t.context=H1(null),n=t.current,r=Dt(),i=_r(n),s=Vn(r,i),s.callback=e??null,wr(n,s,i),t.current.lanes=i,aa(t,i,r),zt(t,r),t}function Ju(t,e,n,r){var i=e.current,s=Dt(),o=_r(i);return n=H1(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=wr(i,e,o),t!==null&&(fn(t,i,o,s),Sl(t,i,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Py(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vp(t,e){Py(t,e),(t=t.alternate)&&Py(t,e)}function DI(){return null}var q1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Bp(t){this._internalRoot=t}Zu.prototype.render=Bp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Ju(t,e,null,null)};Zu.prototype.unmount=Bp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;li(function(){Ju(null,t,null,null)}),e[Wn]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Sw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<sr.length&&e!==0&&e<sr[n].priority;n++);sr.splice(n,0,t),n===0&&xw(t)}};function Hp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Dy(){}function NI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=cu(o);s.call(u)}}var o=W1(e,r,t,0,null,!1,!1,"",Dy);return t._reactRootContainer=o,t[Wn]=o.current,Oo(t.nodeType===8?t.parentNode:t),li(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=cu(l);a.call(u)}}var l=zp(t,0,!1,null,null,!1,!1,"",Dy);return t._reactRootContainer=l,t[Wn]=l.current,Oo(t.nodeType===8?t.parentNode:t),li(function(){Ju(e,l,n,r)}),l}function tc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=cu(o);a.call(l)}}Ju(e,o,t,i)}else o=NI(n,e,t,i,r);return cu(o)}Ew=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=to(e.pendingLanes);n!==0&&(up(e,n|1),zt(e,Fe()),!(ae&6)&&(us=Fe()+500,Mr()))}break;case 13:li(function(){var r=qn(t,1);if(r!==null){var i=Dt();fn(r,t,1,i)}}),Vp(t,1)}};cp=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=Dt();fn(e,t,134217728,n)}Vp(t,134217728)}};_w=function(t){if(t.tag===13){var e=_r(t),n=qn(t,e);if(n!==null){var r=Dt();fn(n,t,e,r)}Vp(t,e)}};Sw=function(){return pe};Cw=function(t,e){var n=pe;try{return pe=t,e()}finally{pe=n}};_d=function(t,e,n){switch(e){case"input":if(pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wu(r);if(!i)throw Error(I(90));ew(r),pd(r,i)}}}break;case"textarea":nw(t,n);break;case"select":e=n.value,e!=null&&qi(t,!!n.multiple,e,!1)}};uw=Mp;cw=li;var bI={usingClientEntryPoint:!1,Events:[ua,$i,Wu,aw,lw,Mp]},Qs={findFiberByHostInstance:qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},LI={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=fw(t),t===null?null:t.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||DI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{zu=Ja.inject(LI),kn=Ja}catch{}}Yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bI;Yt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(e))throw Error(I(200));return PI(t,e,null,n)};Yt.createRoot=function(t,e){if(!Hp(t))throw Error(I(299));var n=!1,r="",i=q1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=zp(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,Oo(t.nodeType===8?t.parentNode:t),new Bp(e)};Yt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=fw(e),t=t===null?null:t.stateNode,t};Yt.flushSync=function(t){return li(t)};Yt.hydrate=function(t,e,n){if(!ec(e))throw Error(I(200));return tc(null,t,e,!0,n)};Yt.hydrateRoot=function(t,e,n){if(!Hp(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=q1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=W1(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,Oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zu(e)};Yt.render=function(t,e,n){if(!ec(e))throw Error(I(200));return tc(null,t,e,!1,n)};Yt.unmountComponentAtNode=function(t){if(!ec(t))throw Error(I(40));return t._reactRootContainer?(li(function(){tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};Yt.unstable_batchedUpdates=Mp;Yt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ec(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return tc(t,e,n,!1,r)};Yt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Yt})(Dx);var Ny=od;sd.createRoot=Ny.createRoot,sd.hydrateRoot=Ny.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ho(){return Ho=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ho.apply(this,arguments)}var pr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pr||(pr={}));const by="popstate";function OI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ef("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hu(i)}return MI(e,n,null,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function $I(){return Math.random().toString(36).substr(2,8)}function Ly(t,e){return{usr:t.state,key:t.key,idx:e}}function ef(t,e,n,r){return n===void 0&&(n=null),Ho({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Is(e):e,{state:n,key:e&&e.key||r||$I()})}function hu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Is(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function MI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ho({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=pr.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:p})}function d(E,p){a=pr.Push;let f=ef(w.location,E,p);n&&n(f,E),u=c()+1;let g=Ly(f,u),_=w.createHref(f);try{o.pushState(g,"",_)}catch{i.location.assign(_)}s&&l&&l({action:a,location:w.location,delta:1})}function m(E,p){a=pr.Replace;let f=ef(w.location,E,p);n&&n(f,E),u=c();let g=Ly(f,u),_=w.createHref(f);o.replaceState(g,"",_),s&&l&&l({action:a,location:w.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:hu(E);return Be(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(by,h),l=E,()=>{i.removeEventListener(by,h),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(E){return o.go(E)}};return w}var Oy;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Oy||(Oy={}));function UI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Is(e):e,i=qp(r.pathname||"/",n);if(i==null)return null;let s=G1(t);FI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=KI(s[a],XI(i));return o}function G1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Cr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),G1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:qI(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of K1(s.path))i(s,o,l)}),e}function K1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=K1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function FI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:GI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const jI=/^:\w+$/,zI=3,VI=2,BI=1,HI=10,WI=-2,$y=t=>t==="*";function qI(t,e){let n=t.split("/"),r=n.length;return n.some($y)&&(r+=WI),e&&(r+=VI),n.filter(i=>!$y(i)).reduce((i,s)=>i+(jI.test(s)?zI:s===""?BI:HI),r)}function GI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function KI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=QI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Cr([i,c.pathname]),pathnameBase:tT(Cr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Cr([i,c.pathnameBase]))}return s}function QI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=YI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=JI(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function YI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function XI(t){try{return decodeURI(t)}catch(e){return Wp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function JI(t,e){try{return decodeURIComponent(t)}catch(n){return Wp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function qp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ZI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Is(t):t;return{pathname:n?n.startsWith("/")?n:eT(n,e):e,search:nT(r),hash:rT(i)}}function eT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Rh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Q1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Y1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Is(t):(i=Ho({},t),Be(!i.pathname||!i.pathname.includes("?"),Rh("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Rh("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Rh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=ZI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Cr=t=>t.join("/").replace(/\/\/+/g,"/"),tT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),nT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,rT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function iT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const oT=typeof Object.is=="function"?Object.is:sT,{useState:aT,useEffect:lT,useLayoutEffect:uT,useDebugValue:cT}=id;function hT(t,e,n){const r=e(),[{inst:i},s]=aT({inst:{value:r,getSnapshot:e}});return uT(()=>{i.value=r,i.getSnapshot=e,Ah(i)&&s({inst:i})},[t,r,e]),lT(()=>(Ah(i)&&s({inst:i}),t(()=>{Ah(i)&&s({inst:i})})),[t]),cT(r),r}function Ah(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!oT(n,r)}catch{return!0}}function dT(t,e,n){return e()}const fT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pT=!fT,mT=pT?dT:hT;"useSyncExternalStore"in id&&(t=>t.useSyncExternalStore)(id);const X1=S.createContext(null),Gp=S.createContext(null),ha=S.createContext(null),nc=S.createContext(null),Ts=S.createContext({outlet:null,matches:[]}),J1=S.createContext(null);function tf(){return tf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},tf.apply(this,arguments)}function gT(t,e){let{relative:n}=e===void 0?{}:e;Rs()||Be(!1);let{basename:r,navigator:i}=S.useContext(ha),{hash:s,pathname:o,search:a}=Z1(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Cr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Rs(){return S.useContext(nc)!=null}function _i(){return Rs()||Be(!1),S.useContext(nc).location}function As(){Rs()||Be(!1);let{basename:t,navigator:e}=S.useContext(ha),{matches:n}=S.useContext(Ts),{pathname:r}=_i(),i=JSON.stringify(Q1(n).map(a=>a.pathnameBase)),s=S.useRef(!1);return S.useEffect(()=>{s.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Y1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Cr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function Z1(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Ts),{pathname:i}=_i(),s=JSON.stringify(Q1(r).map(o=>o.pathnameBase));return S.useMemo(()=>Y1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function yT(t,e){Rs()||Be(!1);let{navigator:n}=S.useContext(ha),r=S.useContext(Gp),{matches:i}=S.useContext(Ts),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=_i(),u;if(e){var c;let w=typeof e=="string"?Is(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||Be(!1),u=w}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=UI(t,{pathname:d}),v=_T(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Cr([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Cr([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return e&&v?S.createElement(nc.Provider,{value:{location:tf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:pr.Pop}},v):v}function vT(){let t=kT(),e=iT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}class wT extends S.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Ts.Provider,{value:this.props.routeContext},S.createElement(J1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ET(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(X1);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Ts.Provider,{value:e},r)}function _T(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Be(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=S.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=S.createElement(vT,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let d=s;return l?d=u:o.route.Component?d=S.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),S.createElement(ET,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?S.createElement(wT,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var My;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(My||(My={}));var du;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(du||(du={}));function ST(t){let e=S.useContext(Gp);return e||Be(!1),e}function CT(t){let e=S.useContext(Ts);return e||Be(!1),e}function xT(t){let e=CT(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function kT(){var t;let e=S.useContext(J1),n=ST(du.UseRouteError),r=xT(du.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function IT(t){let{to:e,replace:n,state:r,relative:i}=t;Rs()||Be(!1);let s=S.useContext(Gp),o=As();return S.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Br(t){Be(!1)}function TT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pr.Pop,navigator:s,static:o=!1}=t;Rs()&&Be(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Is(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=S.useMemo(()=>{let w=qp(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:S.createElement(ha.Provider,{value:l},S.createElement(nc.Provider,{children:n,value:v}))}function RT(t){let{children:e,location:n}=t,r=S.useContext(X1),i=r&&!e?r.router.routes:nf(e);return yT(i,n)}var Uy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Uy||(Uy={}));new Promise(()=>{});function nf(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,nf(r.props.children,s));return}r.type!==Br&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=nf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rf(){return rf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rf.apply(this,arguments)}function AT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function PT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function DT(t,e){return t.button===0&&(!e||e==="_self")&&!PT(t)}const NT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function bT(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=OI({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(TT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const LT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",OT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lt=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=AT(e,NT),{basename:d}=S.useContext(ha),m,v=!1;if(typeof u=="string"&&OT.test(u)&&(m=u,LT)){let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=qp(g.pathname,d);g.origin===f.origin&&_!=null?u=_+g.search+g.hash:v=!0}let w=gT(u,{relative:i}),E=$T(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||E(f)}return S.createElement("a",rf({},h,{href:m||w,onClick:v||s?r:p,ref:n,target:l}))});var Fy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Fy||(Fy={}));var jy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(jy||(jy={}));function $T(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=As(),l=_i(),u=Z1(t,{relative:o});return S.useCallback(c=>{if(DT(c,n)){c.preventDefault();let h=r!==void 0?r:hu(l)===hu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Wo={},MT={get exports(){return Wo},set exports(t){Wo=t}},me={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var et=typeof Symbol=="function"&&Symbol.for,Kp=et?Symbol.for("react.element"):60103,Qp=et?Symbol.for("react.portal"):60106,rc=et?Symbol.for("react.fragment"):60107,ic=et?Symbol.for("react.strict_mode"):60108,sc=et?Symbol.for("react.profiler"):60114,oc=et?Symbol.for("react.provider"):60109,ac=et?Symbol.for("react.context"):60110,Yp=et?Symbol.for("react.async_mode"):60111,lc=et?Symbol.for("react.concurrent_mode"):60111,uc=et?Symbol.for("react.forward_ref"):60112,cc=et?Symbol.for("react.suspense"):60113,UT=et?Symbol.for("react.suspense_list"):60120,hc=et?Symbol.for("react.memo"):60115,dc=et?Symbol.for("react.lazy"):60116,FT=et?Symbol.for("react.block"):60121,jT=et?Symbol.for("react.fundamental"):60117,zT=et?Symbol.for("react.responder"):60118,VT=et?Symbol.for("react.scope"):60119;function Jt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Kp:switch(t=t.type,t){case Yp:case lc:case rc:case sc:case ic:case cc:return t;default:switch(t=t&&t.$$typeof,t){case ac:case uc:case dc:case hc:case oc:return t;default:return e}}case Qp:return e}}}function eE(t){return Jt(t)===lc}me.AsyncMode=Yp;me.ConcurrentMode=lc;me.ContextConsumer=ac;me.ContextProvider=oc;me.Element=Kp;me.ForwardRef=uc;me.Fragment=rc;me.Lazy=dc;me.Memo=hc;me.Portal=Qp;me.Profiler=sc;me.StrictMode=ic;me.Suspense=cc;me.isAsyncMode=function(t){return eE(t)||Jt(t)===Yp};me.isConcurrentMode=eE;me.isContextConsumer=function(t){return Jt(t)===ac};me.isContextProvider=function(t){return Jt(t)===oc};me.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Kp};me.isForwardRef=function(t){return Jt(t)===uc};me.isFragment=function(t){return Jt(t)===rc};me.isLazy=function(t){return Jt(t)===dc};me.isMemo=function(t){return Jt(t)===hc};me.isPortal=function(t){return Jt(t)===Qp};me.isProfiler=function(t){return Jt(t)===sc};me.isStrictMode=function(t){return Jt(t)===ic};me.isSuspense=function(t){return Jt(t)===cc};me.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===rc||t===lc||t===sc||t===ic||t===cc||t===UT||typeof t=="object"&&t!==null&&(t.$$typeof===dc||t.$$typeof===hc||t.$$typeof===oc||t.$$typeof===ac||t.$$typeof===uc||t.$$typeof===jT||t.$$typeof===zT||t.$$typeof===VT||t.$$typeof===FT)};me.typeOf=Jt;(function(t){t.exports=me})(MT);function BT(t){function e(b,O,$,K,C){for(var se=0,L=0,De=0,ce=0,fe,ee,nt=0,Lt=0,le,ft=le=fe=0,he=0,rt=0,js=0,it=0,Oa=$.length,zs=Oa-1,an,X="",Ue="",eh="",th="",er;he<Oa;){if(ee=$.charCodeAt(he),he===zs&&L+ce+De+se!==0&&(L!==0&&(ee=L===47?10:47),ce=De=se=0,Oa++,zs++),L+ce+De+se===0){if(he===zs&&(0<rt&&(X=X.replace(d,"")),0<X.trim().length)){switch(ee){case 32:case 9:case 59:case 13:case 10:break;default:X+=$.charAt(he)}ee=59}switch(ee){case 123:for(X=X.trim(),fe=X.charCodeAt(0),le=1,it=++he;he<Oa;){switch(ee=$.charCodeAt(he)){case 123:le++;break;case 125:le--;break;case 47:switch(ee=$.charCodeAt(he+1)){case 42:case 47:e:{for(ft=he+1;ft<zs;++ft)switch($.charCodeAt(ft)){case 47:if(ee===42&&$.charCodeAt(ft-1)===42&&he+2!==ft){he=ft+1;break e}break;case 10:if(ee===47){he=ft+1;break e}}he=ft}}break;case 91:ee++;case 40:ee++;case 34:case 39:for(;he++<zs&&$.charCodeAt(he)!==ee;);}if(le===0)break;he++}switch(le=$.substring(it,he),fe===0&&(fe=(X=X.replace(h,"").trim()).charCodeAt(0)),fe){case 64:switch(0<rt&&(X=X.replace(d,"")),ee=X.charCodeAt(1),ee){case 100:case 109:case 115:case 45:rt=O;break;default:rt=tt}if(le=e(O,rt,le,ee,C+1),it=le.length,0<T&&(rt=n(tt,X,js),er=a(3,le,rt,O,$e,ge,it,ee,C,K),X=rt.join(""),er!==void 0&&(it=(le=er.trim()).length)===0&&(ee=0,le="")),0<it)switch(ee){case 115:X=X.replace(A,o);case 100:case 109:case 45:le=X+"{"+le+"}";break;case 107:X=X.replace(f,"$1 $2"),le=X+"{"+le+"}",le=Ie===1||Ie===2&&s("@"+le,3)?"@-webkit-"+le+"@"+le:"@"+le;break;default:le=X+le,K===112&&(le=(Ue+=le,""))}else le="";break;default:le=e(O,n(O,X,js),le,K,C+1)}eh+=le,le=js=rt=ft=fe=0,X="",ee=$.charCodeAt(++he);break;case 125:case 59:if(X=(0<rt?X.replace(d,""):X).trim(),1<(it=X.length))switch(ft===0&&(fe=X.charCodeAt(0),fe===45||96<fe&&123>fe)&&(it=(X=X.replace(" ",":")).length),0<T&&(er=a(1,X,O,b,$e,ge,Ue.length,K,C,K))!==void 0&&(it=(X=er.trim()).length)===0&&(X="\0\0"),fe=X.charCodeAt(0),ee=X.charCodeAt(1),fe){case 0:break;case 64:if(ee===105||ee===99){th+=X+$.charAt(he);break}default:X.charCodeAt(it-1)!==58&&(Ue+=i(X,fe,ee,X.charCodeAt(2)))}js=rt=ft=fe=0,X="",ee=$.charCodeAt(++he)}}switch(ee){case 13:case 10:L===47?L=0:1+fe===0&&K!==107&&0<X.length&&(rt=1,X+="\0"),0<T*H&&a(0,X,O,b,$e,ge,Ue.length,K,C,K),ge=1,$e++;break;case 59:case 125:if(L+ce+De+se===0){ge++;break}default:switch(ge++,an=$.charAt(he),ee){case 9:case 32:if(ce+se+L===0)switch(nt){case 44:case 58:case 9:case 32:an="";break;default:ee!==32&&(an=" ")}break;case 0:an="\\0";break;case 12:an="\\f";break;case 11:an="\\v";break;case 38:ce+L+se===0&&(rt=js=1,an="\f"+an);break;case 108:if(ce+L+se+Me===0&&0<ft)switch(he-ft){case 2:nt===112&&$.charCodeAt(he-3)===58&&(Me=nt);case 8:Lt===111&&(Me=Lt)}break;case 58:ce+L+se===0&&(ft=he);break;case 44:L+De+ce+se===0&&(rt=1,an+="\r");break;case 34:case 39:L===0&&(ce=ce===ee?0:ce===0?ee:ce);break;case 91:ce+L+De===0&&se++;break;case 93:ce+L+De===0&&se--;break;case 41:ce+L+se===0&&De--;break;case 40:if(ce+L+se===0){if(fe===0)switch(2*nt+3*Lt){case 533:break;default:fe=1}De++}break;case 64:L+De+ce+se+ft+le===0&&(le=1);break;case 42:case 47:if(!(0<ce+se+De))switch(L){case 0:switch(2*ee+3*$.charCodeAt(he+1)){case 235:L=47;break;case 220:it=he,L=42}break;case 42:ee===47&&nt===42&&it+2!==he&&($.charCodeAt(it+2)===33&&(Ue+=$.substring(it,he+1)),an="",L=0)}}L===0&&(X+=an)}Lt=nt,nt=ee,he++}if(it=Ue.length,0<it){if(rt=O,0<T&&(er=a(2,Ue,rt,b,$e,ge,it,K,C,K),er!==void 0&&(Ue=er).length===0))return th+Ue+eh;if(Ue=rt.join(",")+"{"+Ue+"}",Ie*Me!==0){switch(Ie!==2||s(Ue,2)||(Me=0),Me){case 111:Ue=Ue.replace(_,":-moz-$1")+Ue;break;case 112:Ue=Ue.replace(g,"::-webkit-input-$1")+Ue.replace(g,"::-moz-$1")+Ue.replace(g,":-ms-input-$1")+Ue}Me=0}}return th+Ue+eh}function n(b,O,$){var K=O.trim().split(E);O=K;var C=K.length,se=b.length;switch(se){case 0:case 1:var L=0;for(b=se===0?"":b[0]+" ";L<C;++L)O[L]=r(b,O[L],$).trim();break;default:var De=L=0;for(O=[];L<C;++L)for(var ce=0;ce<se;++ce)O[De++]=r(b[ce]+" ",K[L],$).trim()}return O}function r(b,O,$){var K=O.charCodeAt(0);switch(33>K&&(K=(O=O.trim()).charCodeAt(0)),K){case 38:return O.replace(p,"$1"+b.trim());case 58:return b.trim()+O.replace(p,"$1"+b.trim());default:if(0<1*$&&0<O.indexOf("\f"))return O.replace(p,(b.charCodeAt(0)===58?"":"$1")+b.trim())}return b+O}function i(b,O,$,K){var C=b+";",se=2*O+3*$+4*K;if(se===944){b=C.indexOf(":",9)+1;var L=C.substring(b,C.length-1).trim();return L=C.substring(0,b).trim()+L+";",Ie===1||Ie===2&&s(L,1)?"-webkit-"+L+L:L}if(Ie===0||Ie===2&&!s(C,1))return C;switch(se){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(V,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return L=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+C+"-ms-flex-pack"+L+C;case 1005:return v.test(C)?C.replace(m,":-webkit-")+C.replace(m,":-moz-")+C:C;case 1e3:switch(L=C.substring(13).trim(),O=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(O)){case 226:L=C.replace(x,"tb");break;case 232:L=C.replace(x,"tb-rl");break;case 220:L=C.replace(x,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+L+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(O=(C=b).length-10,L=(C.charCodeAt(O)===33?C.substring(0,O):C).substring(b.indexOf(":",7)+1).trim(),se=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:C=C.replace(L,"-webkit-"+L)+";"+C;break;case 207:case 102:C=C.replace(L,"-webkit-"+(102<se?"inline-":"")+"box")+";"+C.replace(L,"-webkit-"+L)+";"+C.replace(L,"-ms-"+L+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return L=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+L+"-ms-flex-"+L+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(N,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(N,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(W.test(b)===!0)return(L=b.substring(b.indexOf(":")+1)).charCodeAt(0)===115?i(b.replace("stretch","fill-available"),O,$,K).replace(":fill-available",":stretch"):C.replace(L,"-webkit-"+L)+C.replace(L,"-moz-"+L.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,$+K===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+C}return C}function s(b,O){var $=b.indexOf(O===1?":":"{"),K=b.substring(0,O!==3?$:10);return $=b.substring($+1,b.length-1),j(O!==2?K:K.replace(Y,"$1"),$,O)}function o(b,O){var $=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return $!==O+";"?$.replace(D," or ($1)").substring(4):"("+O+")"}function a(b,O,$,K,C,se,L,De,ce,fe){for(var ee=0,nt=O,Lt;ee<T;++ee)switch(Lt=te[ee].call(c,b,nt,$,K,C,se,L,De,ce,fe)){case void 0:case!1:case!0:case null:break;default:nt=Lt}if(nt!==O)return nt}function l(b){switch(b){case void 0:case null:T=te.length=0;break;default:if(typeof b=="function")te[T++]=b;else if(typeof b=="object")for(var O=0,$=b.length;O<$;++O)l(b[O]);else H=!!b|0}return l}function u(b){return b=b.prefix,b!==void 0&&(j=null,b?typeof b!="function"?Ie=1:(Ie=2,j=b):Ie=0),u}function c(b,O){var $=b;if(33>$.charCodeAt(0)&&($=$.trim()),ne=$,$=[ne],0<T){var K=a(-1,O,$,$,$e,ge,0,0,0,0);K!==void 0&&typeof K=="string"&&(O=K)}var C=e(tt,$,O,0,0);return 0<T&&(K=a(-2,C,$,$,$e,ge,C.length,0,0,0),K!==void 0&&(C=K)),ne="",Me=0,ge=$e=1,C}var h=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,E=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,_=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,A=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,N=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,W=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,ge=1,$e=1,Me=0,Ie=1,tt=[],te=[],T=0,j=null,H=0,ne="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var HT={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function WT(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var qT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,zy=WT(function(t){return qT.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Xp=Wo,GT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},QT={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jp={};Jp[Xp.ForwardRef]=QT;Jp[Xp.Memo]=tE;function Vy(t){return Xp.isMemo(t)?tE:Jp[t.$$typeof]||GT}var YT=Object.defineProperty,XT=Object.getOwnPropertyNames,By=Object.getOwnPropertySymbols,JT=Object.getOwnPropertyDescriptor,ZT=Object.getPrototypeOf,Hy=Object.prototype;function nE(t,e,n){if(typeof e!="string"){if(Hy){var r=ZT(e);r&&r!==Hy&&nE(t,r,n)}var i=XT(e);By&&(i=i.concat(By(e)));for(var s=Vy(t),o=Vy(e),a=0;a<i.length;++a){var l=i[a];if(!KT[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=JT(e,l);try{YT(t,l,u)}catch{}}}}return t}var eR=nE;function Cn(){return(Cn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var Wy=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},sf=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!Wo.typeOf(t)},fu=Object.freeze([]),xr=Object.freeze({});function qo(t){return typeof t=="function"}function qy(t){return t.displayName||t.name||"Component"}function Zp(t){return t&&typeof t.styledComponentId=="string"}var cs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",em=typeof window<"u"&&"HTMLElement"in window,tR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),nR={};function da(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var rR=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&da(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Al=new Map,pu=new Map,wo=1,Za=function(t){if(Al.has(t))return Al.get(t);for(;pu.has(wo);)wo++;var e=wo++;return Al.set(t,e),pu.set(e,t),e},iR=function(t){return pu.get(t)},sR=function(t,e){e>=wo&&(wo=e+1),Al.set(t,e),pu.set(e,t)},oR="style["+cs+'][data-styled-version="5.3.9"]',aR=new RegExp("^"+cs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),lR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},uR=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(aR);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(sR(u,l),lR(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},cR=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},rE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(cs))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(cs,"active"),r.setAttribute("data-styled-version","5.3.9");var o=cR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},hR=function(){function t(n){var r=this.element=rE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}da(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),dR=function(){function t(n){var r=this.element=rE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),fR=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Gy=em,pR={isServer:!em,useCSSOMInjection:!tR},mu=function(){function t(n,r,i){n===void 0&&(n=xr),r===void 0&&(r={}),this.options=Cn({},pR,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&em&&Gy&&(Gy=!1,function(s){for(var o=document.querySelectorAll(oR),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(cs)!=="active"&&(uR(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Za(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Cn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new fR(o):s?new hR(o):new dR(o),new rR(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Za(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Za(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Za(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=iR(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=cs+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),mR=/(a)(d)/gi,Ky=function(t){return String.fromCharCode(t+(t>25?39:97))};function of(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Ky(e%52)+n;return(Ky(e%52)+n).replace(mR,"$1-$2")}var Bi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},iE=function(t){return Bi(5381,t)};function sE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(qo(n)&&!Zp(n))return!1}return!0}var gR=iE("5.3.9"),yR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&sE(e),this.componentId=n,this.baseHash=Bi(gR,n),this.baseStyle=r,mu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ui(this.rules,e,n,r).join(""),a=of(Bi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Bi(this.baseHash,r.hash),h="",d=0;d<u;d++){var m=this.rules[d];if(typeof m=="string")h+=m;else if(m){var v=ui(m,e,n,r),w=Array.isArray(v)?v.join(""):v;c=Bi(c,w+d),h+=w}}if(h){var E=of(c>>>0);if(!n.hasNameForId(i,E)){var p=r(h,"."+E,void 0,i);n.insertRules(i,E,p)}s.push(E)}}return s.join(" ")},t}(),vR=/^\s*\/\/.*$/gm,wR=[":","[",".","#"];function ER(t){var e,n,r,i,s=t===void 0?xr:t,o=s.options,a=o===void 0?xr:o,l=s.plugins,u=l===void 0?fu:l,c=new BT(a),h=[],d=function(w){function E(p){if(p)try{w(p+"}")}catch{}}return function(p,f,g,_,x,A,D,N,Y,W){switch(p){case 1:if(Y===0&&f.charCodeAt(0)===64)return w(f+";"),"";break;case 2:if(N===0)return f+"/*|*/";break;case 3:switch(N){case 102:case 112:return w(g[0]+f),"";default:return f+(W===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(w){h.push(w)}),m=function(w,E,p){return E===0&&wR.indexOf(p[n.length])!==-1||p.match(i)?w:"."+e};function v(w,E,p,f){f===void 0&&(f="&");var g=w.replace(vR,""),_=E&&p?p+" "+E+" { "+g+" }":g;return e=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!E?"":E,_)}return c.use([].concat(u,[function(w,E,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,m))},d,function(w){if(w===-2){var E=h;return h=[],E}}])),v.hash=u.length?u.reduce(function(w,E){return E.name||da(15),Bi(w,E.name)},5381).toString():"",v}var oE=At.createContext();oE.Consumer;var aE=At.createContext(),_R=(aE.Consumer,new mu),af=ER();function lE(){return S.useContext(oE)||_R}function uE(){return S.useContext(aE)||af}var cE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=af);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return da(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=af),this.name+e.hash},t}(),SR=/([A-Z])/,CR=/([A-Z])/g,xR=/^ms-/,kR=function(t){return"-"+t.toLowerCase()};function Qy(t){return SR.test(t)?t.replace(CR,kR).replace(xR,"-ms-"):t}var Yy=function(t){return t==null||t===!1||t===""};function ui(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ui(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Yy(t))return"";if(Zp(t))return"."+t.styledComponentId;if(qo(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ui(l,e,n,r)}var u;return t instanceof cE?n?(t.inject(n,r),t.getName(r)):t:sf(t)?function c(h,d){var m,v,w=[];for(var E in h)h.hasOwnProperty(E)&&!Yy(h[E])&&(Array.isArray(h[E])&&h[E].isCss||qo(h[E])?w.push(Qy(E)+":",h[E],";"):sf(h[E])?w.push.apply(w,c(h[E],E)):w.push(Qy(E)+": "+(m=E,(v=h[E])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||m in HT?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(w,["}"]):w}(t):t.toString()}var Xy=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function tm(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return qo(t)||sf(t)?Xy(ui(Wy(fu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Xy(ui(Wy(t,n)))}var hE=function(t,e,n){return n===void 0&&(n=xr),t.theme!==n.theme&&t.theme||e||n.theme},IR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,TR=/(^-|-$)/g;function Ph(t){return t.replace(IR,"-").replace(TR,"")}var nm=function(t){return of(iE(t)>>>0)};function el(t){return typeof t=="string"&&!0}var lf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},RR=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function AR(t,e,n){var r=t[n];lf(e)&&lf(r)?dE(r,e):t[n]=e}function dE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(lf(o))for(var a in o)RR(a)&&AR(t,o[a],a)}return t}var rm=At.createContext();rm.Consumer;var Dh={};function fE(t,e,n){var r=Zp(t),i=!el(t),s=e.attrs,o=s===void 0?fu:s,a=e.componentId,l=a===void 0?function(f,g){var _=typeof f!="string"?"sc":Ph(f);Dh[_]=(Dh[_]||0)+1;var x=_+"-"+nm("5.3.9"+_+Dh[_]);return g?g+"-"+x:x}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return el(f)?"styled."+f:"Styled("+qy(f)+")"}(t):u,h=e.displayName&&e.componentId?Ph(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;r&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(f,g,_){return t.shouldForwardProp(f,g,_)&&e.shouldForwardProp(f,g,_)}:t.shouldForwardProp);var v,w=new yR(n,h,r?t.componentStyle:void 0),E=w.isStatic&&o.length===0,p=function(f,g){return function(_,x,A,D){var N=_.attrs,Y=_.componentStyle,W=_.defaultProps,V=_.foldedComponentIds,ge=_.shouldForwardProp,$e=_.styledComponentId,Me=_.target,Ie=function(K,C,se){K===void 0&&(K=xr);var L=Cn({},C,{theme:K}),De={};return se.forEach(function(ce){var fe,ee,nt,Lt=ce;for(fe in qo(Lt)&&(Lt=Lt(L)),Lt)L[fe]=De[fe]=fe==="className"?(ee=De[fe],nt=Lt[fe],ee&&nt?ee+" "+nt:ee||nt):Lt[fe]}),[L,De]}(hE(x,S.useContext(rm),W)||xr,x,N),tt=Ie[0],te=Ie[1],T=function(K,C,se,L){var De=lE(),ce=uE(),fe=C?K.generateAndInjectStyles(xr,De,ce):K.generateAndInjectStyles(se,De,ce);return fe}(Y,D,tt),j=A,H=te.$as||x.$as||te.as||x.as||Me,ne=el(H),b=te!==x?Cn({},x,{},te):x,O={};for(var $ in b)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?O.as=b[$]:(ge?ge($,zy,H):!ne||zy($))&&(O[$]=b[$]));return x.style&&te.style!==x.style&&(O.style=Cn({},x.style,{},te.style)),O.className=Array.prototype.concat(V,$e,T!==$e?T:null,x.className,te.className).filter(Boolean).join(" "),O.ref=j,S.createElement(H,O)}(v,f,g,E)};return p.displayName=c,(v=At.forwardRef(p)).attrs=d,v.componentStyle=w,v.displayName=c,v.shouldForwardProp=m,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):fu,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(f){var g=e.componentId,_=function(A,D){if(A==null)return{};var N,Y,W={},V=Object.keys(A);for(Y=0;Y<V.length;Y++)N=V[Y],D.indexOf(N)>=0||(W[N]=A[N]);return W}(e,["componentId"]),x=g&&g+"-"+(el(f)?f:Ph(qy(f)));return fE(f,Cn({},_,{attrs:d,componentId:x}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?dE({},t.defaultProps,f):f}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&eR(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var uf=function(t){return function e(n,r,i){if(i===void 0&&(i=xr),!Wo.isValidElementType(r))return da(1,String(r));var s=function(){return n(r,i,tm.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Cn({},i,{},o))},s.attrs=function(o){return e(n,r,Cn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(fE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){uf[t]=uf(t)});var PR=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=sE(n),mu.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(ui(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&mu.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function DR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=tm.apply(void 0,[t].concat(n)),s="sc-global-"+nm(JSON.stringify(i)),o=new PR(i,s);function a(u){var c=lE(),h=uE(),d=S.useContext(rm),m=S.useRef(c.allocateGSInstance(s)).current;return c.server&&l(m,u,c,d,h),S.useLayoutEffect(function(){if(!c.server)return l(m,u,c,d,h),function(){return o.removeStyles(m,c)}},[m,u,c,d,h]),null}function l(u,c,h,d,m){if(o.isStatic)o.renderStyles(u,nR,h,m);else{var v=Cn({},c,{theme:hE(c,d,a.defaultProps)});o.renderStyles(u,v,h,m)}}return At.memo(a)}function pE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=tm.apply(void 0,[t].concat(n)).join(""),s=nm(i);return new cE(s,i)}const P=uf,im=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M9 22a1 1 0 01-1-1v-3H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m1-6v3.08L13.08 16H20V4H4v12h6m7-5h-2V9h2v2m-4 0h-2V9h2v2m-4 0H7V9h2v2z"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const mE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},NR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},gE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(mE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):NR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new bR;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class bR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const LR=function(t){const e=mE(t);return gE.encodeByteArray(e,!0)},gu=function(t){return LR(t).replace(/\./g,"")},yE=function(t){try{return gE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function OR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const $R=()=>OR().__FIREBASE_DEFAULTS__,MR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},UR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yE(t[1]);return e&&JSON.parse(e)},fc=()=>{try{return $R()||MR()||UR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},vE=t=>{var e,n;return(n=(e=fc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},wE=t=>{const e=vE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},FR=()=>{var t;return(t=fc())===null||t===void 0?void 0:t.config},EE=t=>{var e;return(e=fc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function _E(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function zR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function VR(){var t;const e=(t=fc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function BR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function HR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WR(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function qR(){try{return typeof indexedDB=="object"}catch{return!1}}function GR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KR,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fa.prototype.create)}}class fa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?QR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,r)}}function QR(t,e){return t.replace(YR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const YR=/\{\$([^}]+)}/g;function XR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jy(s)&&Jy(o)){if(!yu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ro(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function io(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JR(t,e){const n=new ZR(t,e);return n.subscribe.bind(n)}class ZR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");eA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Nh),i.error===void 0&&(i.error=Nh),i.complete===void 0&&(i.complete=Nh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function eA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Nh(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Dr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hr="[DEFAULT]";/**
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
 */class tA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new jR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(rA(e))try{this.getOrInitializeService({instanceIdentifier:Hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hr){return this.instances.has(e)}getOptions(e=Hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:nA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Hr){return this.component?this.component.multipleInstances?e:Hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function nA(t){return t===Hr?void 0:t}function rA(t){return t.instantiationMode==="EAGER"}/**
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
 */class iA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new tA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const sA={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},oA=ue.INFO,aA={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},lA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=aA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sm{constructor(e){this.name=e,this._logLevel=oA,this._logHandler=lA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?sA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const uA=(t,e)=>e.some(n=>t instanceof n);let Zy,ev;function cA(){return Zy||(Zy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hA(){return ev||(ev=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const SE=new WeakMap,cf=new WeakMap,CE=new WeakMap,bh=new WeakMap,om=new WeakMap;function dA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(kr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&SE.set(n,t)}).catch(()=>{}),om.set(e,t),e}function fA(t){if(cf.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});cf.set(t,e)}let hf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||CE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function pA(t){hf=t(hf)}function mA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Lh(this),e,...n);return CE.set(r,e.sort?e.sort():[e]),kr(r)}:hA().includes(t)?function(...e){return t.apply(Lh(this),e),kr(SE.get(this))}:function(...e){return kr(t.apply(Lh(this),e))}}function gA(t){return typeof t=="function"?mA(t):(t instanceof IDBTransaction&&fA(t),uA(t,cA())?new Proxy(t,hf):t)}function kr(t){if(t instanceof IDBRequest)return dA(t);if(bh.has(t))return bh.get(t);const e=gA(t);return e!==t&&(bh.set(t,e),om.set(e,t)),e}const Lh=t=>om.get(t);function yA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kr(o.result),l.oldVersion,l.newVersion,kr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const vA=["get","getKey","getAll","getAllKeys","count"],wA=["put","add","delete","clear"],Oh=new Map;function tv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Oh.get(e))return Oh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=wA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Oh.set(e,s),s}pA(t=>({...t,get:(e,n,r)=>tv(e,n)||t.get(e,n,r),has:(e,n)=>!!tv(e,n)||t.has(e,n)}));/**
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
 */class EA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_A(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _A(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const df="@firebase/app",nv="0.9.8";/**
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
 */const ci=new sm("@firebase/app"),SA="@firebase/app-compat",CA="@firebase/analytics-compat",xA="@firebase/analytics",kA="@firebase/app-check-compat",IA="@firebase/app-check",TA="@firebase/auth",RA="@firebase/auth-compat",AA="@firebase/database",PA="@firebase/database-compat",DA="@firebase/functions",NA="@firebase/functions-compat",bA="@firebase/installations",LA="@firebase/installations-compat",OA="@firebase/messaging",$A="@firebase/messaging-compat",MA="@firebase/performance",UA="@firebase/performance-compat",FA="@firebase/remote-config",jA="@firebase/remote-config-compat",zA="@firebase/storage",VA="@firebase/storage-compat",BA="@firebase/firestore",HA="@firebase/firestore-compat",WA="firebase",qA="9.20.0";/**
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
 */const ff="[DEFAULT]",GA={[df]:"fire-core",[SA]:"fire-core-compat",[xA]:"fire-analytics",[CA]:"fire-analytics-compat",[IA]:"fire-app-check",[kA]:"fire-app-check-compat",[TA]:"fire-auth",[RA]:"fire-auth-compat",[AA]:"fire-rtdb",[PA]:"fire-rtdb-compat",[DA]:"fire-fn",[NA]:"fire-fn-compat",[bA]:"fire-iid",[LA]:"fire-iid-compat",[OA]:"fire-fcm",[$A]:"fire-fcm-compat",[MA]:"fire-perf",[UA]:"fire-perf-compat",[FA]:"fire-rc",[jA]:"fire-rc-compat",[zA]:"fire-gcs",[VA]:"fire-gcs-compat",[BA]:"fire-fst",[HA]:"fire-fst-compat","fire-js":"fire-js",[WA]:"fire-js-all"};/**
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
 */const vu=new Map,pf=new Map;function KA(t,e){try{t.container.addComponent(e)}catch(n){ci.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hi(t){const e=t.name;if(pf.has(e))return ci.debug(`There were multiple attempts to register component ${e}.`),!1;pf.set(e,t);for(const n of vu.values())KA(n,t);return!0}function pc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const QA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ir=new fa("app","Firebase",QA);/**
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
 */class YA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ir.create("app-deleted",{appName:this._name})}}/**
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
 */const Si=qA;function xE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ff,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ir.create("bad-app-name",{appName:String(i)});if(n||(n=FR()),!n)throw Ir.create("no-options");const s=vu.get(i);if(s){if(yu(n,s.options)&&yu(r,s.config))return s;throw Ir.create("duplicate-app",{appName:i})}const o=new iA(i);for(const l of pf.values())o.addComponent(l);const a=new YA(n,r,o);return vu.set(i,a),a}function am(t=ff){const e=vu.get(t);if(!e&&t===ff)return xE();if(!e)throw Ir.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let i=(r=GA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ci.warn(a.join(" "));return}hi(new Dr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const XA="firebase-heartbeat-database",JA=1,Go="firebase-heartbeat-store";let $h=null;function kE(){return $h||($h=yA(XA,JA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Go)}}}).catch(t=>{throw Ir.create("idb-open",{originalErrorMessage:t.message})})),$h}async function ZA(t){try{return(await kE()).transaction(Go).objectStore(Go).get(IE(t))}catch(e){if(e instanceof bn)ci.warn(e.message);else{const n=Ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ci.warn(n.message)}}}async function rv(t,e){try{const r=(await kE()).transaction(Go,"readwrite");return await r.objectStore(Go).put(e,IE(t)),r.done}catch(n){if(n instanceof bn)ci.warn(n.message);else{const r=Ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ci.warn(r.message)}}}function IE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const eP=1024,tP=30*24*60*60*1e3;class nP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iv(),{heartbeatsToSend:n,unsentEntries:r}=rP(this._heartbeatsCache.heartbeats),i=gu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iv(){return new Date().toISOString().substring(0,10)}function rP(t,e=eP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sv(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sv(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qR()?GR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ZA(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sv(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function sP(t){hi(new Dr("platform-logger",e=>new EA(e),"PRIVATE")),hi(new Dr("heartbeat",e=>new nP(e),"PRIVATE")),Tn(df,nv,t),Tn(df,nv,"esm2017"),Tn("fire-js","")}sP("");var oP="firebase",aP="9.20.0";/**
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
 */Tn(oP,aP,"app");var lP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,lm=lm||{},Q=lP||self;function wu(){}function mc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ma(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function uP(t){return Object.prototype.hasOwnProperty.call(t,Mh)&&t[Mh]||(t[Mh]=++cP)}var Mh="closure_uid_"+(1e9*Math.random()>>>0),cP=0;function hP(t,e,n){return t.call.apply(t.bind,arguments)}function dP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=hP:St=dP,St.apply(null,arguments)}function tl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ur(){this.s=this.s,this.o=this.o}var fP=0;Ur.prototype.s=!1;Ur.prototype.na=function(){!this.s&&(this.s=!0,this.M(),fP!=0)&&uP(this)};Ur.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const TE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function um(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function ov(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(mc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var pP=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",wu,e),Q.removeEventListener("test",wu,e)}catch{}return t}();function Eu(t){return/^[\s\xa0]*$/.test(t)}var av=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Uh(t,e){return t<e?-1:t>e?1:0}function gc(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Sn(t){return gc().indexOf(t)!=-1}function cm(t){return cm[" "](t),t}cm[" "]=wu;function mP(t){var e=vP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var gP=Sn("Opera"),hs=Sn("Trident")||Sn("MSIE"),RE=Sn("Edge"),mf=RE||hs,AE=Sn("Gecko")&&!(gc().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge"))&&!(Sn("Trident")||Sn("MSIE"))&&!Sn("Edge"),yP=gc().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge");function PE(){var t=Q.document;return t?t.documentMode:void 0}var _u;e:{var Fh="",jh=function(){var t=gc();if(AE)return/rv:([^\);]+)(\)|;)/.exec(t);if(RE)return/Edge\/([\d\.]+)/.exec(t);if(hs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(yP)return/WebKit\/(\S+)/.exec(t);if(gP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(jh&&(Fh=jh?jh[1]:""),hs){var zh=PE();if(zh!=null&&zh>parseFloat(Fh)){_u=String(zh);break e}}_u=Fh}var vP={};function wP(){return mP(function(){let t=0;const e=av(String(_u)).split("."),n=av("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Uh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Uh(i[2].length==0,s[2].length==0)||Uh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var gf;if(Q.document&&hs){var lv=PE();gf=lv||parseInt(_u,10)||void 0}else gf=void 0;var EP=gf;function Ko(t,e){if(Ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(AE){e:{try{cm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_P[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ko.X.h.call(this)}}dt(Ko,Ct);var _P={2:"touch",3:"pen",4:"mouse"};Ko.prototype.h=function(){Ko.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ga="closure_listenable_"+(1e6*Math.random()|0),SP=0;function CP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++SP,this.ba=this.ea=!1}function yc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function hm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function DE(t){const e={};for(const n in t)e[n]=t[n];return e}const uv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function NE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<uv.length;s++)n=uv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function vc(t){this.src=t,this.g={},this.h=0}vc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=vf(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new CP(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function yf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=TE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(yc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function vf(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var dm="closure_lm_"+(1e6*Math.random()|0),Vh={};function bE(t,e,n,r,i){if(r&&r.once)return OE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)bE(t,e[s],n,r,i);return null}return n=mm(n),t&&t[ga]?t.N(e,n,ma(r)?!!r.capture:!!r,i):LE(t,e,n,!1,r,i)}function LE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ma(i)?!!i.capture:!!i,a=pm(t);if(a||(t[dm]=a=new vc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=xP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)pP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ME(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function xP(){function t(n){return e.call(t.src,t.listener,n)}const e=kP;return t}function OE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)OE(t,e[s],n,r,i);return null}return n=mm(n),t&&t[ga]?t.O(e,n,ma(r)?!!r.capture:!!r,i):LE(t,e,n,!0,r,i)}function $E(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)$E(t,e[s],n,r,i);else r=ma(r)?!!r.capture:!!r,n=mm(n),t&&t[ga]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=vf(s,n,r,i),-1<n&&(yc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=pm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=vf(e,n,r,i)),(n=-1<t?e[t]:null)&&fm(n))}function fm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ga])yf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ME(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=pm(e))?(yf(n,t),n.h==0&&(n.src=null,e[dm]=null)):yc(t)}}}function ME(t){return t in Vh?Vh[t]:Vh[t]="on"+t}function kP(t,e){if(t.ba)t=!0;else{e=new Ko(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&fm(t),t=n.call(r,e)}return t}function pm(t){return t=t[dm],t instanceof vc?t:null}var Bh="__closure_events_fn_"+(1e9*Math.random()>>>0);function mm(t){return typeof t=="function"?t:(t[Bh]||(t[Bh]=function(e){return t.handleEvent(e)}),t[Bh])}function Ze(){Ur.call(this),this.i=new vc(this),this.P=this,this.I=null}dt(Ze,Ur);Ze.prototype[ga]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){$E(this,t,e,n,r)};function ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ct(e,t);else if(e instanceof Ct)e.target=e.target||t;else{var i=e;e=new Ct(r,t),NE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=nl(o,r,!0,e)&&i}if(o=e.g=t,i=nl(o,r,!0,e)&&i,i=nl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=nl(o,r,!1,e)&&i}Ze.prototype.M=function(){if(Ze.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)yc(n[r]);delete t.g[e],t.h--}}this.I=null};Ze.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function nl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&yf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var gm=Q.JSON.stringify;function IP(){var t=jE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class TP{constructor(){this.h=this.g=null}add(e,n){const r=UE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var UE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new RP,t=>t.reset());class RP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function AP(t){Q.setTimeout(()=>{throw t},0)}function FE(t,e){wf||PP(),Ef||(wf(),Ef=!0),jE.add(t,e)}var wf;function PP(){var t=Q.Promise.resolve(void 0);wf=function(){t.then(DP)}}var Ef=!1,jE=new TP;function DP(){for(var t;t=IP();){try{t.h.call(t.g)}catch(n){AP(n)}var e=UE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ef=!1}function wc(t,e){Ze.call(this),this.h=t||1,this.g=e||Q,this.j=St(this.lb,this),this.l=Date.now()}dt(wc,Ze);U=wc.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ct(this,"tick"),this.ca&&(ym(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ym(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){wc.X.M.call(this),ym(this),delete this.g};function vm(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function zE(t){t.g=vm(()=>{t.g=null,t.i&&(t.i=!1,zE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class NP extends Ur{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zE(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qo(t){Ur.call(this),this.h=t,this.g={}}dt(Qo,Ur);var cv=[];function VE(t,e,n,r){Array.isArray(n)||(n&&(cv[0]=n.toString()),n=cv);for(var i=0;i<n.length;i++){var s=bE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function BE(t){hm(t.g,function(e,n){this.g.hasOwnProperty(n)&&fm(e)},t),t.g={}}Qo.prototype.M=function(){Qo.X.M.call(this),BE(this)};Qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ec(){this.g=!0}Ec.prototype.Aa=function(){this.g=!1};function bP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function LP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Hi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+$P(t,n)+(r?" "+r:"")})}function OP(t,e){t.info(function(){return"TIMEOUT: "+e})}Ec.prototype.info=function(){};function $P(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return gm(n)}catch{return e}}var Ci={},hv=null;function _c(){return hv=hv||new Ze}Ci.Pa="serverreachability";function HE(t){Ct.call(this,Ci.Pa,t)}dt(HE,Ct);function Yo(t){const e=_c();ct(e,new HE(e))}Ci.STAT_EVENT="statevent";function WE(t,e){Ct.call(this,Ci.STAT_EVENT,t),this.stat=e}dt(WE,Ct);function Pt(t){const e=_c();ct(e,new WE(e,t))}Ci.Qa="timingevent";function qE(t,e){Ct.call(this,Ci.Qa,t),this.size=e}dt(qE,Ct);function ya(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Sc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},GE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wm(){}wm.prototype.h=null;function dv(t){return t.h||(t.h=t.i())}function KE(){}var va={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Em(){Ct.call(this,"d")}dt(Em,Ct);function _m(){Ct.call(this,"c")}dt(_m,Ct);var _f;function Cc(){}dt(Cc,wm);Cc.prototype.g=function(){return new XMLHttpRequest};Cc.prototype.i=function(){return{}};_f=new Cc;function wa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Qo(this),this.O=MP,t=mf?125:void 0,this.T=new wc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new QE}function QE(){this.i=null,this.g="",this.h=!1}var MP=45e3,Sf={},Su={};U=wa.prototype;U.setTimeout=function(t){this.O=t};function Cf(t,e,n){t.K=1,t.v=kc(Kn(e)),t.s=n,t.P=!0,YE(t,null)}function YE(t,e){t.F=Date.now(),Ea(t),t.A=Kn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),i_(n.i,"t",r),t.C=0,n=t.l.H,t.h=new QE,t.g=k_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new NP(St(t.La,t,t.g),t.N)),VE(t.S,t.g,"readystatechange",t.ib),e=t.H?DE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Yo(),bP(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Fn(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const c=Fn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||mf||this.g&&(this.h.h||this.g.fa()||gv(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Yo(3):Yo(2)),xc(this);var n=this.g.aa();this.Y=n;t:if(XE(this)){var r=gv(this.g);t="";var i=r.length,s=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),Eo(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,LP(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Eu(a)){var u=a;break t}}u=null}if(n=u)Hi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xf(this,n);else{this.i=!1,this.o=3,Pt(12),Qr(this),Eo(this);break e}}this.P?(JE(this,c,o),mf&&this.i&&c==3&&(VE(this.S,this.T,"tick",this.hb),this.T.start())):(Hi(this.j,this.m,o,null),xf(this,o)),c==4&&Qr(this),this.i&&!this.I&&(c==4?__(this.l,this):(this.i=!1,Ea(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Qr(this),Eo(this)}}}catch{}finally{}};function XE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function JE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=UP(t,n),i==Su){e==4&&(t.o=4,Pt(14),r=!1),Hi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Sf){t.o=4,Pt(15),Hi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Hi(t.j,t.m,i,null),xf(t,i);XE(t)&&i!=Su&&i!=Sf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Rm(e),e.K=!0,Pt(11))):(Hi(t.j,t.m,n,"[Invalid Chunked Response]"),Qr(t),Eo(t))}U.hb=function(){if(this.g){var t=Fn(this.g),e=this.g.fa();this.C<e.length&&(xc(this),JE(this,t,e),this.i&&t!=4&&Ea(this))}};function UP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Su:(n=Number(e.substring(n,r)),isNaN(n)?Sf:(r+=1,r+n>e.length?Su:(e=e.substr(r,n),t.C=r+n,e)))}U.cancel=function(){this.I=!0,Qr(this)};function Ea(t){t.V=Date.now()+t.O,ZE(t,t.O)}function ZE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ya(St(t.gb,t),e)}function xc(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(OP(this.j,this.A),this.K!=2&&(Yo(),Pt(17)),Qr(this),this.o=2,Eo(this)):ZE(this,this.V-t)};function Eo(t){t.l.G==0||t.I||__(t.l,t)}function Qr(t){xc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,ym(t.T),BE(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function xf(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||kf(n.h,t))){if(!t.J&&kf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ku(n),Rc(n);else break e;Tm(n),Pt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=ya(St(n.cb,n),6e3));if(1>=a_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Yr(n,11)}else if((t.J||n.g==t)&&ku(n),!Eu(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Sm(s,s.h),s.h=null))}if(r.D){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,xe(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=x_(r,r.H?r.ka:null,r.V),o.J){l_(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(xc(a),Ea(a)),r.g=o}else w_(r);0<n.i.length&&Ac(n)}else u[0]!="stop"&&u[0]!="close"||Yr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Yr(n,7):Im(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Yo(4)}catch{}}function FP(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(mc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function jP(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(mc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function e_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(mc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=jP(t),r=FP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var t_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ei(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ei){this.h=e!==void 0?e:t.h,Cu(this,t.j),this.s=t.s,this.g=t.g,xu(this,t.m),this.l=t.l,e=t.i;var n=new Xo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fv(this,n),this.o=t.o}else t&&(n=String(t).match(t_))?(this.h=!!e,Cu(this,n[1]||"",!0),this.s=so(n[2]||""),this.g=so(n[3]||"",!0),xu(this,n[4]),this.l=so(n[5]||"",!0),fv(this,n[6]||"",!0),this.o=so(n[7]||"")):(this.h=!!e,this.i=new Xo(null,this.h))}ei.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oo(e,pv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oo(e,pv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oo(n,n.charAt(0)=="/"?HP:BP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oo(n,qP)),t.join("")};function Kn(t){return new ei(t)}function Cu(t,e,n){t.j=n?so(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fv(t,e,n){e instanceof Xo?(t.i=e,GP(t.i,t.h)):(n||(e=oo(e,WP)),t.i=new Xo(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function kc(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function so(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,VP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function VP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var pv=/[#\/\?@]/g,BP=/[#\?:]/g,HP=/[#\?]/g,WP=/[#\?@]/g,qP=/#/g;function Xo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fr(t){t.g||(t.g=new Map,t.h=0,t.i&&zP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Xo.prototype;U.add=function(t,e){Fr(this),this.i=null,t=Ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function n_(t,e){Fr(t),e=Ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function r_(t,e){return Fr(t),e=Ps(t,e),t.g.has(e)}U.forEach=function(t,e){Fr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.oa=function(){Fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.W=function(t){Fr(this);let e=[];if(typeof t=="string")r_(this,t)&&(e=e.concat(this.g.get(Ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return Fr(this),this.i=null,t=Ps(this,t),r_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function i_(t,e,n){n_(t,e),0<n.length&&(t.i=null,t.g.set(Ps(t,e),um(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function GP(t,e){e&&!t.j&&(Fr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(n_(this,r),i_(this,i,n))},t)),t.j=e}var KP=class{constructor(e,n){this.h=e,this.g=n}};function s_(t){this.l=t||QP,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var QP=10;function o_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function a_(t){return t.h?1:t.g?t.g.size:0}function kf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Sm(t,e){t.g?t.g.add(e):t.h=e}function l_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}s_.prototype.cancel=function(){if(this.i=u_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function u_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return um(t.i)}function Cm(){}Cm.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};Cm.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function YP(){this.g=new Cm}function XP(t,e,n){const r=n||"";try{e_(t,function(i,s){let o=i;ma(i)&&(o=gm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function JP(t,e){const n=new Ec;if(Q.Image){const r=new Image;r.onload=tl(rl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=tl(rl,n,r,"TestLoadImage: error",!1,e),r.onabort=tl(rl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=tl(rl,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function rl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function _a(t){this.l=t.ac||null,this.j=t.jb||!1}dt(_a,wm);_a.prototype.g=function(){return new Ic(this.l,this.j)};_a.prototype.i=function(t){return function(){return t}}({});function Ic(t,e){Ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=xm,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Ic,Ze);var xm=0;U=Ic.prototype;U.open=function(t,e){if(this.readyState!=xm)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Jo(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sa(this)),this.readyState=xm};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Jo(this)),this.g&&(this.readyState=3,Jo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;c_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function c_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Sa(this):Jo(this),this.readyState==3&&c_(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Sa(this))};U.Ua=function(t){this.g&&(this.response=t,Sa(this))};U.ga=function(){this.g&&Sa(this)};function Sa(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Jo(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Jo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var ZP=Q.JSON.parse;function be(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=h_,this.K=this.L=!1}dt(be,Ze);var h_="",eD=/^https?$/i,tD=["POST","PUT"];U=be.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():_f.g(),this.C=this.u?dv(this.u):dv(_f),this.g.onreadystatechange=St(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){mv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=TE(tD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{p_(this),0<this.B&&((this.K=nD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.qa,this)):this.A=vm(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){mv(this,s)}};function nD(t){return hs&&wP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof lm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function mv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,d_(t),Tc(t)}function d_(t){t.D||(t.D=!0,ct(t,"complete"),ct(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Tc(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Tc(this,!0)),be.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?f_(this):this.fb())};U.fb=function(){f_(this)};function f_(t){if(t.h&&typeof lm<"u"&&(!t.C[1]||Fn(t)!=4||t.aa()!=2)){if(t.v&&Fn(t)==4)vm(t.Ha,0,t);else if(ct(t,"readystatechange"),Fn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(t_)[1]||null;if(!i&&Q.self&&Q.self.location){var s=Q.self.location.protocol;i=s.substr(0,s.length-1)}r=!eD.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var o=2<Fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",d_(t)}}finally{Tc(t)}}}}function Tc(t,e){if(t.g){p_(t);const n=t.g,r=t.C[0]?wu:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function p_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function Fn(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),ZP(e)}};function gv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case h_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function m_(t){let e="";return hm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function km(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=m_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function g_(t){this.Ca=0,this.i=[],this.j=new Ec,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ys("baseRetryDelayMs",5e3,t),this.bb=Ys("retryDelaySeedMs",1e4,t),this.$a=Ys("forwardChannelMaxRetries",2,t),this.ta=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new s_(t&&t.concurrentRequestLimit),this.Fa=new YP,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=g_.prototype;U.ma=8;U.G=1;function Im(t){if(y_(t),t.G==3){var e=t.U++,n=Kn(t.F);xe(n,"SID",t.I),xe(n,"RID",e),xe(n,"TYPE","terminate"),Ca(t,n),e=new wa(t,t.j,e,void 0),e.K=2,e.v=kc(Kn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=k_(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ea(e)}C_(t)}function Rc(t){t.g&&(Rm(t),t.g.cancel(),t.g=null)}function y_(t){Rc(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ku(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Ac(t){o_(t.h)||t.m||(t.m=!0,FE(t.Ja,t),t.C=0)}function rD(t,e){return a_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=ya(St(t.Ja,t,e),S_(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new wa(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=DE(s),NE(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=v_(this,i,e),n=Kn(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),Ca(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(m_(s)))+"&"+e:this.o&&km(n,this.o,s)),Sm(this.h,i),this.Ya&&xe(n,"TYPE","init"),this.O?(xe(n,"$req",e),xe(n,"SID","null"),i.Z=!0,Cf(i,n,null)):Cf(i,n,e),this.G=2}}else this.G==3&&(t?yv(this,t):this.i.length==0||o_(this.h)||yv(this))};function yv(t,e){var n;e?n=e.m:n=t.U++;const r=Kn(t.F);xe(r,"SID",t.I),xe(r,"RID",n),xe(r,"AID",t.T),Ca(t,r),t.o&&t.s&&km(r,t.o,t.s),n=new wa(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=v_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Sm(t.h,n),Cf(n,r,e)}function Ca(t,e){t.ia&&hm(t.ia,function(n,r){xe(e,r,n)}),t.l&&e_({},function(n,r){xe(e,r,n)})}function v_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?St(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{XP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function w_(t){t.g||t.u||(t.Z=1,FE(t.Ia,t),t.A=0)}function Tm(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=ya(St(t.Ia,t),S_(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,E_(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=ya(St(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Pt(10),Rc(this),E_(this))};function Rm(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function E_(t){t.g=new wa(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Kn(t.sa);xe(e,"RID","rpc"),xe(e,"SID",t.I),xe(e,"CI",t.L?"0":"1"),xe(e,"AID",t.T),xe(e,"TYPE","xmlhttp"),Ca(t,e),t.o&&t.s&&km(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=kc(Kn(e)),n.s=null,n.P=!0,YE(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Rc(this),Tm(this),Pt(19))};function ku(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function __(t,e){var n=null;if(t.g==e){ku(t),Rm(t),t.g=null;var r=2}else if(kf(t.h,e))n=e.D,l_(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=_c(),ct(r,new qE(r,n)),Ac(t)}else w_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&rD(t,e)||r==2&&Tm(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Yr(t,5);break;case 4:Yr(t,10);break;case 3:Yr(t,6);break;default:Yr(t,2)}}}function S_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Yr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=St(t.kb,t);n||(n=new ei("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Cu(n,"https"),kc(n)),JP(n.toString(),r)}else Pt(2);t.G=0,t.l&&t.l.va(e),C_(t),y_(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function C_(t){if(t.G=0,t.la=[],t.l){const e=u_(t.h);(e.length!=0||t.i.length!=0)&&(ov(t.la,e),ov(t.la,t.i),t.h.i.length=0,um(t.i),t.i.length=0),t.l.ua()}}function x_(t,e,n){var r=n instanceof ei?Kn(n):new ei(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),xu(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ei(null,void 0);r&&Cu(s,r),e&&(s.g=e),i&&xu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&xe(r,n,e),xe(r,"VER",t.ma),Ca(t,r),r}function k_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new be(new _a({jb:!0})):new be(t.ra),e.Ka(t.H),e}function I_(){}U=I_.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Iu(){if(hs&&!(10<=Number(EP)))throw Error("Environmental error: no available transport.")}Iu.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){Ze.call(this),this.g=new g_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Eu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Eu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ds(this)}dt(Qt,Ze);Qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=x_(t,null,t.V),Ac(t)};Qt.prototype.close=function(){Im(this.g)};Qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=gm(t),t=n);e.i.push(new KP(e.ab++,t)),e.G==3&&Ac(e)};Qt.prototype.M=function(){this.g.l=null,delete this.j,Im(this.g),delete this.g,Qt.X.M.call(this)};function T_(t){Em.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(T_,Em);function R_(){_m.call(this),this.status=1}dt(R_,_m);function Ds(t){this.g=t}dt(Ds,I_);Ds.prototype.xa=function(){ct(this.g,"a")};Ds.prototype.wa=function(t){ct(this.g,new T_(t))};Ds.prototype.va=function(t){ct(this.g,new R_)};Ds.prototype.ua=function(){ct(this.g,"b")};Iu.prototype.createWebChannel=Iu.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;Sc.NO_ERROR=0;Sc.TIMEOUT=8;Sc.HTTP_ERROR=6;GE.COMPLETE="complete";KE.EventType=va;va.OPEN="a";va.CLOSE="b";va.ERROR="c";va.MESSAGE="d";Ze.prototype.listen=Ze.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.Oa;be.prototype.getLastErrorCode=be.prototype.Ea;be.prototype.getStatus=be.prototype.aa;be.prototype.getResponseJson=be.prototype.Sa;be.prototype.getResponseText=be.prototype.fa;be.prototype.send=be.prototype.da;be.prototype.setWithCredentials=be.prototype.Ka;var iD=function(){return new Iu},sD=function(){return _c()},Hh=Sc,oD=GE,aD=Ci,vv={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},lD=_a,il=KE,uD=be;const wv="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=new sm("@firebase/firestore");function Ev(){return di.logLevel}function F(t,...e){if(di.logLevel<=ue.DEBUG){const n=e.map(Am);di.debug(`Firestore (${Ns}): ${t}`,...n)}}function Qn(t,...e){if(di.logLevel<=ue.ERROR){const n=e.map(Am);di.error(`Firestore (${Ns}): ${t}`,...n)}}function Tu(t,...e){if(di.logLevel<=ue.WARN){const n=e.map(Am);di.warn(`Firestore (${Ns}): ${t}`,...n)}}function Am(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function Se(t,e){t||G()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class cD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class hD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class dD{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new A_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new vt(e)}}class fD{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class pD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new fD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.T=n.token,new mD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function yD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function ds(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Ge(0,0))}static max(){return new J(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Zo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Zo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends Zo{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const vD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends Zo{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return vD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ke.fromString(e))}static fromName(e){return new B(ke.fromString(e).popFirst(5))}static empty(){return new B(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ke(e.slice()))}}function wD(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Nr(i,B.empty(),e)}function ED(t){return new Nr(t.readTime,t.key,-1)}class Nr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Nr(J.min(),B.empty(),-1)}static max(){return new Nr(J.max(),B.empty(),-1)}}function _D(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const SD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class CD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xa(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==SD)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ka(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Pm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Pm.ct=-1;function Pc(t){return t==null}function Ru(t){return t===0&&1/t==-1/0}function xD(t){return typeof t=="number"&&Number.isInteger(t)&&!Ru(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function D_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Qe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Qe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new sl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new sl(this.root,e,this.comparator,!1)}getReverseIterator(){return new sl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new sl(this.root,e,this.comparator,!0)}}class sl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sv(this.data.getIterator())}getIteratorFrom(e){return new Sv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Sv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Ke(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ds(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class kD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new kD("Invalid base64 string: "+i):i}}(e);return new It(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const ID=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function br(t){if(Se(!!t),typeof t=="string"){let e=0;const n=ID.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function fs(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function N_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function b_(t){const e=t.mapValue.fields.__previous_value__;return N_(e)?b_(e):e}function ea(t){const e=br(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class ta{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ta("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ta&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ol={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function fi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?N_(t)?4:RD(t)?9007199254740991:10:G()}function Dn(t,e){if(t===e)return!0;const n=fi(t);if(n!==fi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ea(t).isEqual(ea(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=br(r.timestampValue),o=br(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return fs(r.bytesValue).isEqual(fs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ze(r.doubleValue),o=ze(i.doubleValue);return s===o?Ru(s)===Ru(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return ds(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(_v(s)!==_v(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Dn(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function na(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function ps(t,e){if(t===e)return 0;const n=fi(t),r=fi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ze(i.integerValue||i.doubleValue),a=ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Cv(t.timestampValue,e.timestampValue);case 4:return Cv(ea(t),ea(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,s){const o=fs(i),a=fs(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=de(o[l],a[l]);if(u!==0)return u}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=de(ze(i.latitude),ze(s.latitude));return o!==0?o:de(ze(i.longitude),ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ps(o[l],a[l]);if(u)return u}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ol.mapValue&&s===ol.mapValue)return 0;if(i===ol.mapValue)return 1;if(s===ol.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=de(a[c],u[c]);if(h!==0)return h;const d=ps(o[a[c]],l[u[c]]);if(d!==0)return d}return de(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Cv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=br(t),r=br(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function ms(t){return If(t)}function If(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=br(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?fs(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=If(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${If(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function Tf(t){return!!t&&"integerValue"in t}function Dm(t){return!!t&&"arrayValue"in t}function xv(t){return!!t&&"nullValue"in t}function kv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pl(t){return!!t&&"mapValue"in t}function _o(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_o(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_o(t.arrayValue.values[n]);return e}return Object.assign({},t)}function RD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_o(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_o(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(_o(this.value))}}function L_(t){const e=[];return xi(t.fields,(n,r)=>{const i=new _t([n]);if(Pl(r)){const s=L_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Et(e,0,J.min(),J.min(),J.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Et(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new Et(e,2,n,J.min(),J.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new Et(e,3,n,J.min(),J.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Et&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Et(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Au{constructor(e,n){this.position=e,this.inclusive=n}}function Iv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class So{constructor(e,n="asc"){this.field=e,this.dir=n}}function AD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class O_{}class We extends O_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new DD(e,n,r):n==="array-contains"?new LD(e,r):n==="in"?new OD(e,r):n==="not-in"?new $D(e,r):n==="array-contains-any"?new MD(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ND(e,r):new bD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ps(n,this.value)):n!==null&&fi(this.value)===fi(n)&&this.matchesComparison(ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nn extends O_{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Nn(e,n)}matches(e){return $_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function $_(t){return t.op==="and"}function M_(t){return PD(t)&&$_(t)}function PD(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Rf(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(M_(t))return t.filters.map(e=>Rf(e)).join(",");{const e=t.filters.map(n=>Rf(n)).join(",");return`${t.op}(${e})`}}function U_(t,e){return t instanceof We?function(n,r){return r instanceof We&&n.op===r.op&&n.field.isEqual(r.field)&&Dn(n.value,r.value)}(t,e):t instanceof Nn?function(n,r){return r instanceof Nn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&U_(s,r.filters[o]),!0):!1}(t,e):void G()}function F_(t){return t instanceof We?function(e){return`${e.field.canonicalString()} ${e.op} ${ms(e.value)}`}(t):t instanceof Nn?function(e){return e.op.toString()+" {"+e.getFilters().map(F_).join(" ,")+"}"}(t):"Filter"}class DD extends We{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class ND extends We{constructor(e,n){super(e,"in",n),this.keys=j_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class bD extends We{constructor(e,n){super(e,"not-in",n),this.keys=j_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function j_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class LD extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Dm(n)&&na(n.arrayValue,this.value)}}class OD extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&na(this.value.arrayValue,n)}}class $D extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(na(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!na(this.value.arrayValue,n)}}class MD extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Dm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>na(this.value.arrayValue,r))}}/**
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
 */class UD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Rv(t,e=null,n=[],r=[],i=null,s=null,o=null){return new UD(t,e,n,r,i,s,o)}function Nm(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Rf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Pc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ms(r)).join(",")),e.ft=n}return e.ft}function bm(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!AD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!U_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tv(t.startAt,e.startAt)&&Tv(t.endAt,e.endAt)}function Af(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function FD(t,e,n,r,i,s,o,a){return new Dc(t,e,n,r,i,s,o,a)}function Lm(t){return new Dc(t)}function Av(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function jD(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function zD(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function VD(t){return t.collectionGroup!==null}function Ji(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=zD(e),r=jD(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new So(n)),e.dt.push(new So(_t.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new So(_t.keyField(),s))}}}return e.dt}function Yn(t){const e=Z(t);if(!e.wt)if(e.limitType==="F")e.wt=Rv(e.path,e.collectionGroup,Ji(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ji(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new So(s.field,o))}const r=e.endAt?new Au(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Au(e.startAt.position,e.startAt.inclusive):null;e.wt=Rv(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Pf(t,e,n){return new Dc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Nc(t,e){return bm(Yn(t),Yn(e))&&t.limitType===e.limitType}function z_(t){return`${Nm(Yn(t))}|lt:${t.limitType}`}function Df(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>F_(r)).join(", ")}]`),Pc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ms(r)).join(",")),`Target(${n})`}(Yn(t))}; limitType=${t.limitType})`}function bc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ji(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Iv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ji(n),r)||n.endAt&&!function(i,s,o){const a=Iv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ji(n),r))}(t,e)}function BD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function V_(t){return(e,n)=>{let r=!1;for(const i of Ji(t)){const s=HD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function HD(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ps(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return D_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WD=new Qe(B.comparator);function Xn(){return WD}const B_=new Qe(B.comparator);function ao(...t){let e=B_;for(const n of t)e=e.insert(n.key,n);return e}function H_(t){let e=B_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Xr(){return Co()}function W_(){return Co()}function Co(){return new bs(t=>t.toString(),(t,e)=>t.isEqual(e))}const qD=new Qe(B.comparator),GD=new Ke(B.comparator);function re(...t){let e=GD;for(const n of t)e=e.add(n);return e}const KD=new Ke(de);function q_(){return KD}/**
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
 */function G_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ru(e)?"-0":e}}function K_(t){return{integerValue:""+t}}function QD(t,e){return xD(e)?K_(e):G_(t,e)}/**
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
 */class Lc{constructor(){this._=void 0}}function YD(t,e,n){return t instanceof ra?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof gs?Y_(t,e):t instanceof ys?X_(t,e):function(r,i){const s=Q_(r,i),o=Pv(s)+Pv(r._t);return Tf(s)&&Tf(r._t)?K_(o):G_(r.serializer,o)}(t,e)}function XD(t,e,n){return t instanceof gs?Y_(t,e):t instanceof ys?X_(t,e):n}function Q_(t,e){return t instanceof Pu?Tf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ra extends Lc{}class gs extends Lc{constructor(e){super(),this.elements=e}}function Y_(t,e){const n=J_(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ys extends Lc{constructor(e){super(),this.elements=e}}function X_(t,e){let n=J_(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Pu extends Lc{constructor(e,n){super(),this.serializer=e,this._t=n}}function Pv(t){return ze(t.integerValue||t.doubleValue)}function J_(t){return Dm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Om{constructor(e,n){this.field=e,this.transform=n}}function JD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof gs&&r instanceof gs||n instanceof ys&&r instanceof ys?ds(n.elements,r.elements,Dn):n instanceof Pu&&r instanceof Pu?Dn(n._t,r._t):n instanceof ra&&r instanceof ra}(t.transform,e.transform)}class ZD{constructor(e,n){this.version=e,this.transformResults=n}}class rn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new rn}static exists(e){return new rn(void 0,e)}static updateTime(e){return new rn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Oc{}function Z_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new $m(t.key,rn.none()):new Ia(t.key,t.data,rn.none());{const n=t.data,r=Mt.empty();let i=new Ke(_t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new jr(t.key,r,new Wt(i.toArray()),rn.none())}}function eN(t,e,n){t instanceof Ia?function(r,i,s){const o=r.value.clone(),a=Nv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(r,i,s){if(!Dl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Nv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(eS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function xo(t,e,n,r){return t instanceof Ia?function(i,s,o,a){if(!Dl(i.precondition,s))return o;const l=i.value.clone(),u=bv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(i,s,o,a){if(!Dl(i.precondition,s))return o;const l=bv(i.fieldTransforms,a,s),u=s.data;return u.setAll(eS(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Dl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function tN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Q_(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function Dv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&ds(n,r,(i,s)=>JD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ia extends Oc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class jr extends Oc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function eS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Nv(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,XD(o,a,n[i]))}return r}function bv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,YD(s,o,e))}return r}class $m extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class nN extends Oc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&eN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=xo(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=W_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=Z_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ds(this.mutations,e.mutations,(n,r)=>Dv(n,r))&&ds(this.baseMutations,e.baseMutations,(n,r)=>Dv(n,r))}}class Mm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=qD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Mm(e,n,r,i)}}/**
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
 */class iN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class sN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,oe;function oN(t){switch(t){default:return G();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function tS(t){if(t===void 0)return Qn("GRPC error has no .code"),k.UNKNOWN;switch(t){case je.OK:return k.OK;case je.CANCELLED:return k.CANCELLED;case je.UNKNOWN:return k.UNKNOWN;case je.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case je.INTERNAL:return k.INTERNAL;case je.UNAVAILABLE:return k.UNAVAILABLE;case je.UNAUTHENTICATED:return k.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case je.NOT_FOUND:return k.NOT_FOUND;case je.ALREADY_EXISTS:return k.ALREADY_EXISTS;case je.PERMISSION_DENIED:return k.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case je.ABORTED:return k.ABORTED;case je.OUT_OF_RANGE:return k.OUT_OF_RANGE;case je.UNIMPLEMENTED:return k.UNIMPLEMENTED;case je.DATA_LOSS:return k.DATA_LOSS;default:return G()}}(oe=je||(je={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Um{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return al}static getOrCreateInstance(){return al===null&&(al=new Um),al}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let al=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ta.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new $c(J.min(),i,q_(),Xn(),re())}}class Ta{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ta(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class nS{constructor(e,n){this.targetId=e,this.Et=n}}class rS{constructor(e,n,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Lv{constructor(){this.At=0,this.Rt=$v(),this.vt=It.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=re(),n=re(),r=re();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Ta(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=$v()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class aN{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Xn(),this.qt=Ov(),this.Ut=new Ke(de)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Af(o))if(i===0){const a=new B(o.path);this.Qt(r,a,Et.newNoDocument(a,J.min()))}else Se(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=Um.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Af(a.target)){const l=new B(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Et.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=re();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new $c(e,n,this.Ut,this.Lt,r);return this.Lt=Xn(),this.qt=Ov(),this.Ut=new Ke(de),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Lv,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ke(de),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Lv),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function Ov(){return new Qe(B.comparator)}function $v(){return new Qe(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),uN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),cN=(()=>({and:"AND",or:"OR"}))();class hN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function dN(t,e){return Du(t,e.toTimestamp())}function Rn(t){return Se(!!t),J.fromTimestamp(function(e){const n=br(e);return new Ge(n.seconds,n.nanos)}(t))}function Fm(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function sS(t){const e=ke.fromString(t);return Se(uS(e)),e}function Nf(t,e){return Fm(t.databaseId,e.path)}function Wh(t,e){const n=sS(e);if(n.get(1)!==t.databaseId.projectId)throw new z(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(oS(n))}function bf(t,e){return Fm(t.databaseId,e)}function fN(t){const e=sS(t);return e.length===4?ke.emptyPath():oS(e)}function Lf(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oS(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Mv(t,e,n){return{name:Nf(t,e),fields:n.value.mapValue.fields}}function pN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Se(u===void 0||typeof u=="string"),It.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),It.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:tS(l.code);return new z(u,l.message||"")}(o);n=new rS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Wh(t,r.document.name),s=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):J.min(),a=new Mt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Nl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Wh(t,r.document),s=r.readTime?Rn(r.readTime):J.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Wh(t,r.document),s=r.removedTargetIds||[];n=new Nl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new sN(i),o=r.targetId;n=new nS(o,s)}}return n}function mN(t,e){let n;if(e instanceof Ia)n={update:Mv(t,e.key,e.value)};else if(e instanceof $m)n={delete:Nf(t,e.key)};else if(e instanceof jr)n={update:Mv(t,e.key,e.data),updateMask:xN(e.fieldMask)};else{if(!(e instanceof nN))return G();n={verify:Nf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ra)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof gs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ys)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Pu)return{fieldPath:s.field.canonicalString(),increment:o._t};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:dN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function gN(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Rn(r.updateTime):Rn(i);return s.isEqual(J.min())&&(s=Rn(i)),new ZD(s,r.transformResults||[])}(n,e))):[]}function yN(t,e){return{documents:[bf(t,e.path)]}}function vN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=bf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=bf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return lS(Nn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Ai(c.field),direction:_N(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||Pc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function wN(t){let e=fN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=aS(c);return h instanceof Nn&&M_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new So(Pi(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Pc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Au(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Au(d,h)}(n.endAt)),FD(e,i,o,s,a,"F",l,u)}function EN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function aS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Pi(e.unaryFilter.field);return We.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Pi(e.unaryFilter.field);return We.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Pi(e.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Pi(e.unaryFilter.field);return We.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return We.create(Pi(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Nn.create(e.compositeFilter.filters.map(n=>aS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function _N(t){return lN[t]}function SN(t){return uN[t]}function CN(t){return cN[t]}function Ai(t){return{fieldPath:t.canonicalString()}}function Pi(t){return _t.fromServerFormat(t.fieldPath)}function lS(t){return t instanceof We?function(e){if(e.op==="=="){if(kv(e.value))return{unaryFilter:{field:Ai(e.field),op:"IS_NAN"}};if(xv(e.value))return{unaryFilter:{field:Ai(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(kv(e.value))return{unaryFilter:{field:Ai(e.field),op:"IS_NOT_NAN"}};if(xv(e.value))return{unaryFilter:{field:Ai(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ai(e.field),op:SN(e.op),value:e.value}}}(t):t instanceof Nn?function(e){const n=e.getFilters().map(r=>lS(r));return n.length===1?n[0]:{compositeFilter:{op:CN(e.op),filters:n}}}(t):G()}function xN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(e,n,r,i,s=J.min(),o=J.min(),a=It.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ti(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ti(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kN{constructor(e){this.se=e}}function IN(t){const e=wN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pf(e,e.limit,"L"):e}/**
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
 */class TN{constructor(){this.He=new RN}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Nr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Nr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class RN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new vs(0)}static bn(){return new vs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.changes=new bs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class PN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&xo(r.mutation,i,Wt.empty(),Ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Xr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=ao();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Xr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xn();const o=Co(),a=Co();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof jr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),xo(c.mutation,u,c.mutation.getFieldMask(),Ge.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new PN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Co();let i=new Qe((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Wt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=W_();c.forEach(d=>{if(!s.has(d)){const m=Z_(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):VD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(Xr());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,re())).next(c=>({batchId:a,changes:H_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=ao();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=ao();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new Dc(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Et.newInvalidDocument(u)))});let o=ao();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&xo(u.mutation,l,Wt.empty(),Ge.now()),bc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class NN{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Rn(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:IN(r.bundledQuery),readTime:Rn(r.readTime)}}(n)),R.resolve()}}/**
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
 */class bN{constructor(){this.overlays=new Qe(B.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Xr();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=Xr(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Xr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Xr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new iN(n,r));let s=this.ts.get(n);s===void 0&&(s=re(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.es=new Ke(Ye.ns),this.ss=new Ke(Ye.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new Ye(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new B(new ke([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new B(new ke([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=re();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return B.comparator(e.key,n.key)||de(e.ds,n.ds)}static rs(e,n){return de(e.ds,n.ds)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ke(Ye.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new rN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(de);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),R.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new B(s),0);let a=new Ke(de);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return R.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new Ye(n,0),i=this._s.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e){this.Ts=e,this.docs=new Qe(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||_D(ED(c),r)<=0||(i.has(c.key)||bc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Es(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new $N(this)}getSize(e){return R.resolve(this.size)}}class $N extends AN{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MN{constructor(e){this.persistence=e,this.As=new bs(n=>Nm(n),bm),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new jm,this.targetCount=0,this.bs=vs.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new vs(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Pm(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new MN(this),this.indexManager=new TN,this.remoteDocumentCache=function(r){return new ON(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new kN(n),this.xs=new NN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new LN(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new FN(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class FN extends CD{constructor(e){super(),this.currentSequenceNumber=e}}class zm{constructor(e){this.persistence=e,this.$s=new jm,this.Ms=null}static Fs(e){return new zm(e)}get Bs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,r=>{const i=B.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vm(e,n.fromCache,r,i)}}/**
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
 */class jN{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Av(n))return R.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Pf(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,Pf(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return Av(n)||i.isEqual(J.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(Ev()<=ue.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Df(n)),this.Fi(e,o,n,wD(i,-1)))})}$i(e,n){let r=new Ke(V_(e));return n.forEach((i,s)=>{bc(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return Ev()<=ue.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",Df(n)),this.xi.getDocumentsMatchingQuery(e,n,Nr.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class zN{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Qe(de),this.qi=new bs(s=>Nm(s),bm),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new DN(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function VN(t,e,n,r){return new zN(t,e,n,r)}async function cS(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function BN(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=R.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(v=>{const w=l.docVersions.get(m);Se(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=re();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function hS(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function HN(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(It.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,w,E){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,m,c)&&a.push(n.Ds.updateTargetData(s,m))});let l=Xn(),u=re();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(WN(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(J.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function WN(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function qN(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function GN(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new ti(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Of(t,e,n){const r=Z(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ka(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function Uv(t,e,n){const r=Z(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Z(a),h=c.qi.get(u);return h!==void 0?R.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,Yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(a=>(KN(r,BD(e),a),{documents:a,Wi:s})))}function KN(t,e,n){let r=t.Ui.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class Fv{constructor(){this.activeTargetIds=q_()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class QN{constructor(){this.Br=new Fv,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Fv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class YN{qr(e){}shutdown(){}}/**
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
 */class jv{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ll=null;function qh(){return ll===null?ll=268435456+Math.round(2147483648*Math.random()):ll++,"0x"+ll.toString(16)}/**
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
 */const XN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JN{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class ZN extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=qh(),a=this.ao(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Tu("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ns,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=XN[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=qh();return new Promise((o,a)=>{const l=new uD;l.setWithCredentials(!0),l.listenOnce(oD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Hh.NO_ERROR:const c=l.getResponseJson();F(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Hh.TIMEOUT:F(gt,`RPC '${e}' ${s} timed out`),a(new z(k.DEADLINE_EXCEEDED,"Request time out"));break;case Hh.HTTP_ERROR:const h=l.getStatus();if(F(gt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(w){const E=w.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(E)>=0?E:k.UNKNOWN}(m.status);a(new z(v,m.message))}else a(new z(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(k.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F(gt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=qh(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=iD(),a=sD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new lD({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");F(gt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const m=new JN({Wr:w=>{d?F(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(F(gt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),F(gt,`RPC '${e}' stream ${i} sending:`,w),c.send(w))},Hr:()=>c.close()}),v=(w,E,p)=>{w.listen(E,f=>{try{p(f)}catch(g){setTimeout(()=>{throw g},0)}})};return v(c,il.EventType.OPEN,()=>{d||F(gt,`RPC '${e}' stream ${i} transport opened.`)}),v(c,il.EventType.CLOSE,()=>{d||(d=!0,F(gt,`RPC '${e}' stream ${i} transport closed`),m.so())}),v(c,il.EventType.ERROR,w=>{d||(d=!0,Tu(gt,`RPC '${e}' stream ${i} transport errored:`,w),m.so(new z(k.UNAVAILABLE,"The operation could not be completed")))}),v(c,il.EventType.MESSAGE,w=>{var E;if(!d){const p=w.data[0];Se(!!p);const f=p,g=f.error||((E=f[0])===null||E===void 0?void 0:E.error);if(g){F(gt,`RPC '${e}' stream ${i} received error:`,g);const _=g.status;let x=function(D){const N=je[D];if(N!==void 0)return tS(N)}(_),A=g.message;x===void 0&&(x=k.INTERNAL,A="Unknown error status: "+_+" with message "+g.message),d=!0,m.so(new z(x,A)),c.close()}else F(gt,`RPC '${e}' stream ${i} received:`,p),m.io(p)}}),v(a,aD.STAT_EVENT,w=>{w.stat===vv.PROXY?F(gt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===vv.NOPROXY&&F(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function Gh(){return typeof document<"u"?document:null}/**
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
 */function Mc(t){return new hN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new dS(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new z(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eb extends fS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=pN(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?Rn(s.readTime):J.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=Lf(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=Af(a)?{documents:yN(i,a)}:{query:vN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=iS(i,s.resumeToken):s.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Du(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=EN(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=Lf(this.serializer),n.removeTarget=e,this.Fo(n)}}class tb extends fS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=gN(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.Zo(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Lf(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>mN(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new z(k.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(k.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(k.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class rb{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Qn(n),this.ru=!1):F("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{ki(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Z(a);l.du.add(4),await Ra(l),l.mu.set("Unknown"),l.du.delete(4),await Uc(l)}(this))})}),this.mu=new rb(r,i)}}async function Uc(t){if(ki(t))for(const e of t.wu)await e(!0)}async function Ra(t){for(const e of t.wu)await e(!1)}function pS(t,e){const n=Z(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Wm(n)?Hm(n):Ls(n).No()&&Bm(n,e))}function mS(t,e){const n=Z(t),r=Ls(n);n.fu.delete(e),r.No()&&gS(n,e),n.fu.size===0&&(r.No()?r.$o():ki(n)&&n.mu.set("Unknown"))}function Bm(t,e){t.gu.Ot(e.targetId),Ls(t).jo(e)}function gS(t,e){t.gu.Ot(e),Ls(t).Wo(e)}function Hm(t){t.gu=new aN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Ls(t).start(),t.mu.ou()}function Wm(t){return ki(t)&&!Ls(t).xo()&&t.fu.size>0}function ki(t){return Z(t).du.size===0}function yS(t){t.gu=void 0}async function sb(t){t.fu.forEach((e,n)=>{Bm(t,e)})}async function ob(t,e){yS(t),Wm(t)?(t.mu.au(e),Hm(t)):t.mu.set("Unknown")}async function ab(t,e,n){if(t.mu.set("Online"),e instanceof rS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nu(t,r)}else if(e instanceof Nl?t.gu.Kt(e):e instanceof nS?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(J.min()))try{const r=await hS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(It.EMPTY_BYTE_STRING,l.snapshotVersion)),gS(i,a);const u=new ti(l.target,a,1,l.sequenceNumber);Bm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Nu(t,r)}}async function Nu(t,e,n){if(!ka(e))throw e;t.du.add(1),await Ra(t),t.mu.set("Offline"),n||(n=()=>hS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Uc(t)})}function vS(t,e){return e().catch(n=>Nu(t,n,e))}async function Fc(t){const e=Z(t),n=Lr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;lb(e);)try{const i=await qN(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,ub(e,i)}catch(i){await Nu(e,i)}wS(e)&&ES(e)}function lb(t){return ki(t)&&t.lu.length<10}function ub(t,e){t.lu.push(e);const n=Lr(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function wS(t){return ki(t)&&!Lr(t).xo()&&t.lu.length>0}function ES(t){Lr(t).start()}async function cb(t){Lr(t).tu()}async function hb(t){const e=Lr(t);for(const n of t.lu)e.Yo(n.mutations)}async function db(t,e,n){const r=t.lu.shift(),i=Mm.from(r,e,n);await vS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Fc(t)}async function fb(t,e){e&&Lr(t).Jo&&await async function(n,r){if(i=r.code,oN(i)&&i!==k.ABORTED){const s=n.lu.shift();Lr(n).Oo(),await vS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Fc(n)}var i}(t,e),wS(t)&&ES(t)}async function zv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=ki(n);n.du.add(3),await Ra(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Uc(n)}async function pb(t,e){const n=Z(t);e?(n.du.delete(2),await Uc(n)):e||(n.du.add(2),await Ra(n),n.mu.set("Unknown"))}function Ls(t){return t.yu||(t.yu=function(e,n,r){const i=Z(e);return i.nu(),new eb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:sb.bind(null,t),Zr:ob.bind(null,t),zo:ab.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Wm(t)?Hm(t):t.mu.set("Unknown")):(await t.yu.stop(),yS(t))})),t.yu}function Lr(t){return t.pu||(t.pu=function(e,n,r){const i=Z(e);return i.nu(),new tb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:cb.bind(null,t),Zr:fb.bind(null,t),Xo:hb.bind(null,t),Zo:db.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await Fc(t)):(await t.pu.stop(),t.lu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new qm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Gm(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),ka(t))return new z(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=ao(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new Zi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(){this.Iu=new Qe(B.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):G():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class ws{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ws(e,n,Zi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(){this.Eu=void 0,this.listeners=[]}}class gb{constructor(){this.queries=new bs(e=>z_(e),Nc),this.onlineState="Unknown",this.Au=new Set}}async function _S(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new mb),i)try{s.Eu=await n.onListen(r)}catch(o){const a=Gm(o,`Initialization of query '${Df(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Km(n)}async function SS(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function yb(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Km(n)}function vb(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Km(t){t.Au.forEach(e=>{e.next()})}class CS{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ws(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=ws.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e){this.key=e}}class kS{constructor(e){this.key=e}}class wb{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=re(),this.mutatedKeys=re(),this.Ku=V_(e),this.Gu=new Zi(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new Vv,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=bc(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?v!==w&&(r.track({type:3,doc:m}),E=!0):this.Wu(d,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.Ku(m,l)>0||u&&this.Ku(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,d){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return m(h)-m(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new ws(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Vv,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=re(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new kS(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new xS(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=re();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return ws.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class Eb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class _b{constructor(e){this.key=e,this.ec=!1}}class Sb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new bs(a=>z_(a),Nc),this.ic=new Map,this.rc=new Set,this.oc=new Qe(B.comparator),this.uc=new Map,this.cc=new jm,this.ac={},this.hc=new Map,this.lc=vs.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function Cb(t,e){const n=bb(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await GN(n.localStore,Yn(e));n.isPrimaryClient&&pS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await xb(n,e,r,a==="current",o.resumeToken)}return i}async function xb(t,e,n,r,i){t.dc=(h,d,m)=>async function(v,w,E,p){let f=w.view.zu(E);f.Mi&&(f=await Uv(v.localStore,w.query,!1).then(({documents:x})=>w.view.zu(x,f)));const g=p&&p.targetChanges.get(w.targetId),_=w.view.applyChanges(f,v.isPrimaryClient,g);return Hv(v,w.targetId,_.Yu),_.snapshot}(t,h,d,m);const s=await Uv(t.localStore,e,!0),o=new wb(e,s.Wi),a=o.zu(s.documents),l=Ta.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Hv(t,n,u.Yu);const c=new Eb(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function kb(t,e){const n=Z(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!Nc(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Of(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mS(n.remoteStore,r.targetId),$f(n,r.targetId)}).catch(xa)):($f(n,r.targetId),await Of(n.localStore,r.targetId,!0))}async function Ib(t,e,n){const r=Lb(t);try{const i=await function(s,o){const a=Z(s),l=Ge.now(),u=o.reduce((d,m)=>d.add(m.key),re());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Xn(),v=re();return a.Ki.getEntries(d,u).next(w=>{m=w,m.forEach((E,p)=>{p.isValidDocument()||(v=v.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(w=>{c=w;const E=[];for(const p of o){const f=tN(p,c.get(p.key).overlayedDocument);f!=null&&E.push(new jr(p.key,f,L_(f.value.mapValue),rn.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:H_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Qe(de)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Aa(r,i.changes),await Fc(r.remoteStore)}catch(i){const s=Gm(i,"Failed to persist write");n.reject(s)}}async function IS(t,e){const n=Z(t);try{const r=await HN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Se(o.ec):i.removedDocuments.size>0&&(Se(o.ec),o.ec=!1))}),await Aa(n,r,e)}catch(r){await xa(r)}}function Bv(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&Km(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Tb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Qe(B.comparator);o=o.insert(s,Et.newNoDocument(s,J.min()));const a=re().add(s),l=new $c(J.min(),new Map,new Ke(de),o,a);await IS(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Qm(r)}else await Of(r.localStore,e,!1).then(()=>$f(r,e,n)).catch(xa)}async function Rb(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await BN(n.localStore,e);RS(n,r,null),TS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Aa(n,i)}catch(i){await xa(i)}}async function Ab(t,e,n){const r=Z(t);try{const i=await function(s,o){const a=Z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Se(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);RS(r,e,n),TS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Aa(r,i)}catch(i){await xa(i)}}function TS(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function RS(t,e,n){const r=Z(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function $f(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||AS(t,r)})}function AS(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(mS(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Qm(t))}function Hv(t,e,n){for(const r of n)r instanceof xS?(t.cc.addReference(r.key,e),Pb(t,r)):r instanceof kS?(F("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||AS(t,r.key)):G()}function Pb(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.rc.add(r),Qm(t))}function Qm(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new B(ke.fromString(e)),r=t.lc.next();t.uc.set(r,new _b(n)),t.oc=t.oc.insert(n,r),pS(t.remoteStore,new ti(Yn(Lm(n.path)),r,2,Pm.ct))}}async function Aa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Vm.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=Z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,h=>R.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>R.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!ka(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Li.get(h),m=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(m);u.Li=u.Li.insert(h,v)}}}(r.localStore,s))}async function Db(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await cS(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new z(k.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Aa(n,r.Qi)}}function Nb(t,e){const n=Z(t),r=n.uc.get(e);if(r&&r.ec)return re().add(r.key);{let i=re();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function bb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=IS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Nb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Tb.bind(null,e),e.nc.zo=yb.bind(null,e.eventManager),e.nc.wc=vb.bind(null,e.eventManager),e}function Lb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Rb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ab.bind(null,e),e}class Wv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Mc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return VN(this.persistence,new jN,e.initialUser,this.serializer)}createPersistence(e){return new UN(zm.Fs,this.serializer)}createSharedClientState(e){return new QN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ob{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Db.bind(null,this.syncEngine),await pb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new gb}createDatastore(e){const n=Mc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new ZN(i));var i;return function(s,o,a,l){return new nb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Bv(this.syncEngine,a,0),o=jv.D()?new jv:new YN,new ib(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Sb(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);F("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Ra(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class PS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=P_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Gm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Kh(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function qv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ub(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>zv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>zv(e.remoteStore,s)),t._onlineComponents=e}function Mb(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ub(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Kh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Mb(n))throw n;Tu("Error using user provided cache. Falling back to memory cache: "+n),await Kh(t,new Wv)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Kh(t,new Wv);return t._offlineComponents}async function DS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await qv(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await qv(t,new Ob))),t._onlineComponents}function Fb(t){return DS(t).then(e=>e.syncEngine)}async function NS(t){const e=await DS(t),n=e.eventManager;return n.onListen=Cb.bind(null,e.syncEngine),n.onUnlisten=kb.bind(null,e.syncEngine),n}function jb(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new PS({next:h=>{s.enqueueAndForget(()=>SS(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new z(k.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new z(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new CS(Lm(o.path),u,{includeMetadataChanges:!0,xu:!0});return _S(i,c)}(await NS(t),t.asyncQueue,e,n,r)),r.promise}function zb(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new PS({next:h=>{s.enqueueAndForget(()=>SS(i,c)),h.fromCache&&a.source==="server"?l.reject(new z(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new CS(o,u,{includeMetadataChanges:!0,xu:!0});return _S(i,c)}(await NS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Gv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bS(t,e,n){if(!n)throw new z(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Vb(t,e,n,r){if(e===!0&&r===!0)throw new z(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Kv(t){if(!B.isDocumentKey(t))throw new z(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Qv(t){if(B.isDocumentKey(t))throw new z(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ym(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ym(t);throw new z(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Yv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Vb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class jc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new cD;switch(n.type){case"firstParty":return new pD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Gv.get(e);n&&(F("ComponentProvider","Removing Datastore"),Gv.delete(e),n.terminate())}(this),Promise.resolve()}}function Bb(t,e,n,r={}){var i;const s=(t=yn(t,jc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Tu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=vt.MOCK_USER;else{o=_E(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new vt(l)}t._authCredentials=new hD(new A_(o,a))}}/**
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
 */class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class zc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new zc(this.firestore,e,this._query)}}class Tr extends zc{constructor(e,n,r){super(e,n,Lm(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new B(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function Xm(t,e,...n){if(t=Pe(t),bS("collection","path",e),t instanceof jc){const r=ke.fromString(e,...n);return Qv(r),new Tr(t,null,r)}{if(!(t instanceof Vt||t instanceof Tr))throw new z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Qv(r),new Tr(t.firestore,null,r)}}function Ee(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=P_.A()),bS("doc","path",e),t instanceof jc){const r=ke.fromString(e,...n);return Kv(r),new Vt(t,null,new B(r))}{if(!(t instanceof Vt||t instanceof Tr))throw new z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Kv(r),new Vt(t.firestore,t instanceof Tr?t.converter:null,new B(r))}}/**
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
 */class Hb{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new dS(this,"async_queue_retry"),this.qc=()=>{const n=Gh();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Gh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Gh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Bn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!ka(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=qm.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Ii extends jc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Hb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||LS(this),this._firestoreClient.terminate()}}function Wb(t,e){const n=typeof t=="object"?t:am(),r=typeof t=="string"?t:e||"(default)",i=pc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=wE("firestore");s&&Bb(i,...s)}return i}function Jm(t){return t._firestoreClient||LS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function LS(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new TD(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new $b(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(It.fromBase64String(e))}catch(n){throw new z(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Vc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Os{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qb=/^__.*__$/;class Gb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ia(e,this.data,n,this.fieldTransforms)}}class OS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new jr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function $S(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Bc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Bc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return bu(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if($S(this.Yc)&&qb.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Kb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Mc(e)}ua(e,n,r,i=!1){return new Bc({Yc:e,methodName:n,oa:r,path:_t.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function eg(t){const e=t._freezeSettings(),n=Mc(t._databaseId);return new Kb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function MS(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);ng("Data must be an object, but it was:",o,r);const a=FS(r,o);let l,u;if(s.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Mf(e,h,n);if(!o.contains(d))throw new z(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);zS(c,d)||c.push(d)}l=new Wt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Gb(new Mt(a),l,u)}class Hc extends Os{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Hc}}function US(t,e,n){return new Bc({Yc:3,oa:e.settings.oa,methodName:t._methodName,ta:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class tg extends Os{_toFieldTransform(e){return new Om(e.path,new ra)}isEqual(e){return e instanceof tg}}class Qb extends Os{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=US(this,e,!0),r=this.ca.map(s=>$s(s,n)),i=new gs(r);return new Om(e.path,i)}isEqual(e){return this===e}}class Yb extends Os{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=US(this,e,!0),r=this.ca.map(s=>$s(s,n)),i=new ys(r);return new Om(e.path,i)}isEqual(e){return this===e}}function Xb(t,e,n,r){const i=t.ua(1,e,n);ng("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();xi(r,(l,u)=>{const c=rg(e,l,n);u=Pe(u);const h=i.na(c);if(u instanceof Hc)s.push(c);else{const d=$s(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Wt(s);return new OS(o,a,i.fieldTransforms)}function Jb(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[Mf(e,r,n)],l=[i];if(s.length%2!=0)throw new z(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Mf(e,s[d])),l.push(s[d+1]);const u=[],c=Mt.empty();for(let d=a.length-1;d>=0;--d)if(!zS(u,a[d])){const m=a[d];let v=l[d];v=Pe(v);const w=o.na(m);if(v instanceof Hc)u.push(m);else{const E=$s(v,w);E!=null&&(u.push(m),c.set(m,E))}}const h=new Wt(u);return new OS(c,h,o.fieldTransforms)}function $s(t,e){if(jS(t=Pe(t)))return ng("Unsupported field value:",e,t),FS(t,e);if(t instanceof Os)return function(n,r){if(!$S(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=$s(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return QD(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ge.fromDate(n);return{timestampValue:Du(r.serializer,i)}}if(n instanceof Ge){const i=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Du(r.serializer,i)}}if(n instanceof Zm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Es)return{bytesValue:iS(r.serializer,n._byteString)};if(n instanceof Vt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Fm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Ym(n)}`)}(t,e)}function FS(t,e){const n={};return D_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const s=$s(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function jS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Zm||t instanceof Es||t instanceof Vt||t instanceof Os)}function ng(t,e,n){if(!jS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ym(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function Mf(t,e,n){if((e=Pe(e))instanceof Vc)return e._internalPath;if(typeof e=="string")return rg(t,e);throw bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const Zb=new RegExp("[~\\*/\\[\\]]");function rg(t,e,n){if(e.search(Zb)>=0)throw bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Vc(...e.split("."))._internalPath}catch{throw bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(k.INVALID_ARGUMENT,a+t+l)}function zS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class VS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new e2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(BS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class e2 extends VS{data(){return super.data()}}function BS(t,e){return typeof e=="string"?rg(t,e):e instanceof Vc?e._internalPath:e._delegate._internalPath}/**
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
 */function t2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class n2{convertValue(e,n="none"){switch(fi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(fs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return xi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Zm(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=b_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ea(e));default:return null}}convertTimestamp(e){const n=br(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);Se(uS(r));const i=new ta(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function HS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class lo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class WS extends VS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(BS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bl extends WS{data(e={}){return super.data(e)}}class r2{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new lo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bl(this._firestore,this._userDataWriter,r.key,r,new lo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new lo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new lo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:i2(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function i2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function Pa(t){t=yn(t,Vt);const e=yn(t.firestore,Ii);return jb(Jm(e),t._key).then(n=>l2(e,t,n))}class qS extends n2{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function GS(t){t=yn(t,zc);const e=yn(t.firestore,Ii),n=Jm(e),r=new qS(e);return t2(t._query),zb(n,t._query).then(i=>new r2(e,r,t,i))}function s2(t,e,n){t=yn(t,Vt);const r=yn(t.firestore,Ii),i=HS(t.converter,e,n);return Wc(r,[MS(eg(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,rn.none())])}function at(t,e,n,...r){t=yn(t,Vt);const i=yn(t.firestore,Ii),s=eg(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof Vc?Jb(s,"updateDoc",t._key,e,n,r):Xb(s,"updateDoc",t._key,e),Wc(i,[o.toMutation(t._key,rn.exists(!0))])}function o2(t){return Wc(yn(t.firestore,Ii),[new $m(t._key,rn.none())])}function a2(t,e){const n=yn(t.firestore,Ii),r=Ee(t),i=HS(t.converter,e);return Wc(n,[MS(eg(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,rn.exists(!1))]).then(()=>r)}function Wc(t,e){return function(n,r){const i=new Bn;return n.asyncQueue.enqueueAndForget(async()=>Ib(await Fb(n),r,i)),i.promise}(Jm(t),e)}function l2(t,e,n){const r=n.docs.get(e._key),i=new qS(t);return new WS(t,i,e._key,r,new lo(n.hasPendingWrites,n.fromCache),e.converter)}function u2(){return new tg("serverTimestamp")}function Rr(...t){return new Qb("arrayUnion",t)}function es(...t){return new Yb("arrayRemove",t)}(function(t,e=!0){(function(n){Ns=n})(Si),hi(new Dr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ii(new dD(n.getProvider("auth-internal")),new gD(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ta(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Tn(wv,"3.10.1",t),Tn(wv,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="firebasestorage.googleapis.com",QS="storageBucket",c2=2*60*1e3,h2=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends bn{constructor(e,n,r=0){super(Qh(e),`Firebase Storage: ${n} (${Qh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Qh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Le||(Le={}));function Qh(t){return"storage/"+t}function ig(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(Le.UNKNOWN,t)}function d2(t){return new Oe(Le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function f2(t){return new Oe(Le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function p2(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(Le.UNAUTHENTICATED,t)}function m2(){return new Oe(Le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function g2(t){return new Oe(Le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function y2(){return new Oe(Le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function v2(){return new Oe(Le.CANCELED,"User canceled the upload/download.")}function w2(t){return new Oe(Le.INVALID_URL,"Invalid URL '"+t+"'.")}function E2(t){return new Oe(Le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function _2(){return new Oe(Le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+QS+"' property when initializing the app?")}function S2(){return new Oe(Le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function C2(){return new Oe(Le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function x2(t){return new Oe(Le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Uf(t){return new Oe(Le.INVALID_ARGUMENT,t)}function YS(){return new Oe(Le.APP_DELETED,"The Firebase app was deleted.")}function k2(t){return new Oe(Le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ko(t,e){return new Oe(Le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Xs(t){throw new Oe(Le.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw E2(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},w=n===KS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${E}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<g.length;_++){const x=g[_],A=x.regex.exec(e);if(A){const D=A[x.indices.bucket];let N=A[x.indices.path];N||(N=""),r=new qt(D,N),x.postModify(r);break}}if(r==null)throw w2(e);return r}}class I2{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T2(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(m,l())},E)}function d(){s&&clearTimeout(s)}function m(E,...p){if(u){d();return}if(E){d(),c.call(null,E,...p);return}if(l()||o){d(),c.call(null,E,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let v=!1;function w(E){v||(v=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function R2(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A2(t){return t!==void 0}function P2(t){return typeof t=="object"&&!Array.isArray(t)}function sg(t){return typeof t=="string"||t instanceof String}function Xv(t){return og()&&t instanceof Blob}function og(){return typeof Blob<"u"&&!VR()}function Jv(t,e,n,r){if(r<e)throw Uf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Uf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function XS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ni;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ni||(ni={}));/**
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
 */function D2(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ul(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ni.NO_ERROR,l=s.getStatus();if(!a||D2(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ni.ABORT;r(!1,new ul(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ul(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());A2(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=ig();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?YS():v2();o(l)}else{const l=y2();o(l)}};this.canceled_?n(!1,new ul(!1,null,!0)):this.backoffId_=T2(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&R2(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function b2(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function L2(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function O2(t,e){e&&(t["X-Firebase-GMPID"]=e)}function $2(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function M2(t,e,n,r,i,s,o=!0){const a=XS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return O2(u,e),b2(u,n),L2(u,s),$2(u,r),new N2(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U2(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function F2(...t){const e=U2();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(og())return new Blob(t);throw new Oe(Le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function j2(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function z2(t){if(typeof atob>"u")throw x2("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Yh{constructor(e,n){this.data=e,this.contentType=n||null}}function V2(t,e){switch(t){case xn.RAW:return new Yh(JS(e));case xn.BASE64:case xn.BASE64URL:return new Yh(ZS(t,e));case xn.DATA_URL:return new Yh(H2(e),W2(e))}throw ig()}function JS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function B2(t){let e;try{e=decodeURIComponent(t)}catch{throw ko(xn.DATA_URL,"Malformed data URL.")}return JS(e)}function ZS(t,e){switch(t){case xn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case xn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw ko(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=z2(e)}catch(i){throw i.message.includes("polyfill")?i:ko(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class eC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ko(xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=q2(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function H2(t){const e=new eC(t);return e.base64?ZS(xn.BASE64,e.rest):B2(e.rest)}function W2(t){return new eC(t).contentType}function q2(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n){let r=0,i="";Xv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Xv(this.data_)){const r=this.data_,i=j2(r,e,n);return i===null?null:new ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ar(r,!0)}}static getBlob(...e){if(og()){const n=e.map(r=>r instanceof ar?r.data_:r);return new ar(F2.apply(null,n))}else{const n=e.map(o=>sg(o)?V2(xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ar(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tC(t){let e;try{e=JSON.parse(t)}catch{return null}return P2(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G2(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function K2(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function nC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q2(t,e){return e}class Tt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Q2}}let cl=null;function Y2(t){return!sg(t)||t.length<2?t:nC(t)}function rC(){if(cl)return cl;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(s,o){return Y2(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Tt("size");return i.xform=r,t.push(i),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),cl=t,cl}function X2(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new qt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function J2(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return X2(r,t),r}function iC(t,e,n){const r=tC(e);return r===null?null:J2(t,r,n)}function Z2(t,e,n,r){const i=tC(e);if(i===null||!sg(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=qc(d,n,r),v=XS({alt:"media",token:u});return m+v})[0]}function eL(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ag{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sC(t){if(!t)throw ig()}function tL(t,e){function n(r,i){const s=iC(t,i,e);return sC(s!==null),s}return n}function nL(t,e){function n(r,i){const s=iC(t,i,e);return sC(s!==null),Z2(s,i,t.host,t._protocol)}return n}function oC(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=m2():i=p2():n.getStatus()===402?i=f2(t.bucket):n.getStatus()===403?i=g2(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function aC(t){const e=oC(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=d2(t.path)),s.serverResponse=i.serverResponse,s}return n}function rL(t,e,n){const r=e.fullServerUrl(),i=qc(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ag(i,s,nL(t,n),o);return a.errorHandler=aC(e),a}function iL(t,e){const n=e.fullServerUrl(),r=qc(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new ag(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=aC(e),a}function sL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function oL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=sL(null,e)),r}function aL(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let _=0;_<2;_++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=oL(e,r,i),c=eL(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=ar.getBlob(h,r,d);if(m===null)throw S2();const v={name:u.fullPath},w=qc(s,t.host,t._protocol),E="POST",p=t.maxUploadRetryTime,f=new ag(w,E,tL(t,n),p);return f.urlParams=v,f.headers=o,f.body=m.uploadData(),f.errorHandler=oC(e),f}class lL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ni.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ni.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ni.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Xs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Xs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Xs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Xs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Xs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class uL extends lL{initXhr(){this.xhr_.responseType="text"}}function lg(){return new uL}/**
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
 */class pi{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new pi(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return nC(this._location.path)}get storage(){return this._service}get parent(){const e=G2(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new pi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw k2(e)}}function cL(t,e,n){t._throwIfRoot("uploadBytes");const r=aL(t.storage,t._location,rC(),new ar(e,!0),n);return t.storage.makeRequestWithTokens(r,lg).then(i=>({metadata:i,ref:t}))}function hL(t){t._throwIfRoot("getDownloadURL");const e=rL(t.storage,t._location,rC());return t.storage.makeRequestWithTokens(e,lg).then(n=>{if(n===null)throw C2();return n})}function dL(t){t._throwIfRoot("deleteObject");const e=iL(t.storage,t._location);return t.storage.makeRequestWithTokens(e,lg)}function fL(t,e){const n=K2(t._location.path,e),r=new qt(t._location.bucket,n);return new pi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t){return/^[A-Za-z]+:\/\//.test(t)}function mL(t,e){return new pi(t,e)}function lC(t,e){if(t instanceof ug){const n=t;if(n._bucket==null)throw _2();const r=new pi(n,n._bucket);return e!=null?lC(r,e):r}else return e!==void 0?fL(t,e):t}function gL(t,e){if(e&&pL(e)){if(t instanceof ug)return mL(t,e);throw Uf("To use ref(service, url), the first argument must be a Storage instance.")}else return lC(t,e)}function Zv(t,e){const n=e==null?void 0:e[QS];return n==null?null:qt.makeFromBucketSpec(n,t)}function yL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:_E(i,t.app.options.projectId))}class ug{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=KS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=c2,this._maxUploadRetryTime=h2,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=Zv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=Zv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new pi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new I2(YS());{const o=M2(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const e0="@firebase/storage",t0="0.11.2";/**
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
 */const uC="storage";function n0(t,e,n){return t=Pe(t),cL(t,e,n)}function mi(t){return t=Pe(t),hL(t)}function cC(t){return t=Pe(t),dL(t)}function pn(t,e){return t=Pe(t),gL(t,e)}function vL(t=am(),e){t=Pe(t);const r=pc(t,uC).getImmediate({identifier:e}),i=wE("storage");return i&&wL(r,...i),r}function wL(t,e,n,r={}){yL(t,e,n,r)}function EL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new ug(n,r,i,e,Si)}function _L(){hi(new Dr(uC,EL,"PUBLIC").setMultipleInstances(!0)),Tn(e0,t0,""),Tn(e0,t0,"esm2017")}_L();function cg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function hC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SL=hC,dC=new fa("auth","Firebase",hC());/**
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
 */const Lu=new sm("@firebase/auth");function CL(t,...e){Lu.logLevel<=ue.WARN&&Lu.warn(`Auth (${Si}): ${t}`,...e)}function Ll(t,...e){Lu.logLevel<=ue.ERROR&&Lu.error(`Auth (${Si}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw hg(t,...e)}function An(t,...e){return hg(t,...e)}function xL(t,e,n){const r=Object.assign(Object.assign({},SL()),{[e]:n});return new fa("auth","Firebase",r).create(e,{appName:t.name})}function hg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dC.create(t,...e)}function q(t,e,...n){if(!t)throw hg(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ll(e),new Error(e)}function Jn(t,e){t||jn(e)}/**
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
 */function Ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kL(){return r0()==="http:"||r0()==="https:"}function r0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function IL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kL()||BR()||"connection"in navigator)?navigator.onLine:!0}function TL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Da{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=zR()||HR()}get(){return IL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function dg(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class fC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const RL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AL=new Da(3e4,6e4);function Ms(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ti(t,e,n,r,i={}){return pC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=pa(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),fC.fetch()(mC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function pC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},RL),e);try{const i=new PL(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw xL(t,c,u);vn(t,c)}}catch(i){if(i instanceof bn)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function Na(t,e,n,r,i={}){const s=await Ti(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function mC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?dg(t.config,i):`${t.config.apiScheme}://${i}`}class PL{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),AL.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=An(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function DL(t,e){return Ti(t,"POST","/v1/accounts:delete",e)}async function NL(t,e){return Ti(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Io(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function bL(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=fg(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Io(Xh(i.auth_time)),issuedAtTime:Io(Xh(i.iat)),expirationTime:Io(Xh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xh(t){return Number(t)*1e3}function fg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=yE(n);return i?JSON.parse(i):(Ll("Failed to decode base64 JWT payload"),null)}catch(i){return Ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function LL(t){const e=fg(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&OL(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class $L{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class gC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Io(this.lastLoginAt),this.creationTime=Io(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ou(t){var e;const n=t.auth,r=await t.getIdToken(),i=await _s(t,NL(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?FL(s.providerUserInfo):[],a=UL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new gC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function ML(t){const e=Pe(t);await Ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function UL(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function FL(t){return t.map(e=>{var{providerId:n}=e,r=cg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jL(t,e){const n=await pC(t,{},async()=>{const r=pa({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=mC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",fC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ia{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):LL(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jL(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ia;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ia,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function nr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ri{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=cg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $L(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new gC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await _s(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return bL(this,e)}reload(){return ML(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ri(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _s(this,DL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:x,providerData:A,stsTokenManager:D}=n;q(g&&D,e,"internal-error");const N=ia.fromJSON(this.name,D);q(typeof g=="string",e,"internal-error"),nr(h,e.name),nr(d,e.name),q(typeof _=="boolean",e,"internal-error"),q(typeof x=="boolean",e,"internal-error"),nr(m,e.name),nr(v,e.name),nr(w,e.name),nr(E,e.name),nr(p,e.name),nr(f,e.name);const Y=new ri({uid:g,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:x,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:N,createdAt:p,lastLoginAt:f});return A&&Array.isArray(A)&&(Y.providerData=A.map(W=>Object.assign({},W))),E&&(Y._redirectEventId=E),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new ia;i.updateFromServerResponse(n);const s=new ri({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ou(s),s}}/**
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
 */const i0=new Map;function zn(t){Jn(t instanceof Function,"Expected a class definition");let e=i0.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,i0.set(t,e),e)}/**
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
 */class yC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}yC.type="NONE";const s0=yC;/**
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
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ri._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(zn(s0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zn(s0);const o=Ol(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ri._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ts(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ts(s,e,r))}}/**
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
 */function o0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(EC(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SC(e))return"Blackberry";if(CC(e))return"Webos";if(pg(e))return"Safari";if((e.includes("chrome/")||wC(e))&&!e.includes("edge/"))return"Chrome";if(_C(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vC(t=kt()){return/firefox\//i.test(t)}function pg(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wC(t=kt()){return/crios\//i.test(t)}function EC(t=kt()){return/iemobile/i.test(t)}function _C(t=kt()){return/android/i.test(t)}function SC(t=kt()){return/blackberry/i.test(t)}function CC(t=kt()){return/webos/i.test(t)}function Gc(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function zL(t=kt()){var e;return Gc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VL(){return WR()&&document.documentMode===10}function xC(t=kt()){return Gc(t)||_C(t)||CC(t)||SC(t)||/windows phone/i.test(t)||EC(t)}function BL(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function kC(t,e=[]){let n;switch(t){case"Browser":n=o0(kt());break;case"Worker":n=`${o0(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Si}/${r}`}async function IC(t,e){return Ti(t,"GET","/v2/recaptchaConfig",Ms(t,e))}function a0(t){return t!==void 0&&t.enterprise!==void 0}class TC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function HL(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function RC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=An("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",HL().appendChild(r)})}function WL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qL="https://www.google.com/recaptcha/enterprise.js?render=",GL="recaptcha-enterprise";class AC{constructor(e){this.type=GL,this.auth=Us(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{IC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new TC(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;a0(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&a0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}RC(qL+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function $u(t,e,n,r=!1){const i=new AC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class KL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class QL{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new l0(this),this.idTokenSubscription=new l0(this),this.beforeStateQueue=new KL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}async initializeRecaptchaConfig(){const e=await IC(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new TC(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new AC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new fa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Us(t){return Pe(t)}class l0{constructor(e){this.auth=e,this.observer=null,this.addObserver=JR(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function YL(t,e){const n=pc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yu(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function XL(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function JL(t,e,n){const r=Us(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=PC(e),{host:o,port:a}=ZL(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||eO()}function PC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ZL(t){const e=PC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:u0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:u0(o)}}}function u0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function eO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class mg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function tO(t,e){return Ti(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Jh(t,e){return Na(t,"POST","/v1/accounts:signInWithPassword",Ms(t,e))}/**
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
 */async function nO(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}async function rO(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Ms(t,e))}/**
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
 */class sa extends mg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new sa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new sa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await $u(e,r,"signInWithPassword");return Jh(e,i)}else return Jh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await $u(e,r,"signInWithPassword");return Jh(e,s)}else return Promise.reject(i)});case"emailLink":return nO(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return tO(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rO(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ns(t,e){return Na(t,"POST","/v1/accounts:signInWithIdp",Ms(t,e))}/**
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
 */const iO="http://localhost";class gi extends mg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=cg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new gi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:iO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=pa(n)}return e}}/**
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
 */function sO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oO(t){const e=ro(io(t)).link,n=e?ro(io(e)).deep_link_id:null,r=ro(io(t)).deep_link_id;return(r?ro(io(r)).link:null)||r||n||e||t}class gg{constructor(e){var n,r,i,s,o,a;const l=ro(io(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=sO((i=l.mode)!==null&&i!==void 0?i:null);q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=oO(e);try{return new gg(n)}catch{return null}}}/**
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
 */class Fs{constructor(){this.providerId=Fs.PROVIDER_ID}static credential(e,n){return sa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=gg.parseLink(n);return q(r,"argument-error"),sa._fromEmailAndCode(e,r.code,r.tenantId)}}Fs.PROVIDER_ID="password";Fs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class DC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ba extends DC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class lr extends ba{constructor(){super("facebook.com")}static credential(e){return gi._fromParams({providerId:lr.PROVIDER_ID,signInMethod:lr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return lr.credentialFromTaggedObject(e)}static credentialFromError(e){return lr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return lr.credential(e.oauthAccessToken)}catch{return null}}}lr.FACEBOOK_SIGN_IN_METHOD="facebook.com";lr.PROVIDER_ID="facebook.com";/**
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
 */class ur extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ur.credential(n,r)}catch{return null}}}ur.GOOGLE_SIGN_IN_METHOD="google.com";ur.PROVIDER_ID="google.com";/**
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
 */class cr extends ba{constructor(){super("github.com")}static credential(e){return gi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.GITHUB_SIGN_IN_METHOD="github.com";cr.PROVIDER_ID="github.com";/**
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
 */class hr extends ba{constructor(){super("twitter.com")}static credential(e,n){return gi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.TWITTER_SIGN_IN_METHOD="twitter.com";hr.PROVIDER_ID="twitter.com";/**
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
 */async function Zh(t,e){return Na(t,"POST","/v1/accounts:signUp",Ms(t,e))}/**
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
 */class yi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ri._fromIdTokenResponse(e,r,i),o=c0(r);return new yi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=c0(r);return new yi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function c0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mu extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mu(e,n,r,i)}}function NC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mu._fromErrorAndOperation(t,s,e,r):s})}async function aO(t,e,n=!1){const r=await _s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yi._forOperation(t,"link",r)}/**
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
 */async function lO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await _s(t,NC(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=fg(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),yi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
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
 */async function bC(t,e,n=!1){const r="signIn",i=await NC(t,r,e),s=await yi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function uO(t,e){return bC(Us(t),e)}async function cO(t,e,n){var r;const i=Us(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await $u(i,s,"signUpPassword");o=Zh(i,u)}else o=Zh(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await $u(i,s,"signUpPassword");return Zh(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await yi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function h0(t,e,n){return uO(Pe(t),Fs.credential(e,n))}/**
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
 */async function hO(t,e){return Ti(t,"POST","/v1/accounts:update",e)}/**
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
 */async function LC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _s(r,hO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dO(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function fO(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function pO(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function mO(t){return Pe(t).signOut()}const Uu="__sak";/**
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
 */class OC{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function gO(){const t=kt();return pg(t)||Gc(t)}const yO=1e3,vO=10;class $C extends OC{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=gO()&&BL(),this.fallbackToPolling=xC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);VL()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},yO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$C.type="LOCAL";const wO=$C;/**
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
 */class MC extends OC{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}MC.type="SESSION";const UC=MC;/**
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
 */function EO(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Kc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Kc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await EO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Kc.receivers=[];/**
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
 */function yg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class _O{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=yg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pn(){return window}function SO(t){Pn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function CO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function kO(){return FC()?self:null}/**
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
 */const jC="firebaseLocalStorageDb",IO=1,Fu="firebaseLocalStorage",zC="fbase_key";class La{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Qc(t,e){return t.transaction([Fu],e?"readwrite":"readonly").objectStore(Fu)}function TO(){const t=indexedDB.deleteDatabase(jC);return new La(t).toPromise()}function jf(){const t=indexedDB.open(jC,IO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fu,{keyPath:zC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fu)?e(r):(r.close(),await TO(),e(await jf()))})})}async function d0(t,e,n){const r=Qc(t,!0).put({[zC]:e,value:n});return new La(r).toPromise()}async function RO(t,e){const n=Qc(t,!1).get(e),r=await new La(n).toPromise();return r===void 0?null:r.value}function f0(t,e){const n=Qc(t,!0).delete(e);return new La(n).toPromise()}const AO=800,PO=3;class VC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await jf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return FC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Kc._getInstance(kO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CO(),!this.activeServiceWorker)return;this.sender=new _O(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await jf();return await d0(e,Uu,"1"),await f0(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>d0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>RO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>f0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Qc(i,!1).getAll();return new La(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),AO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}VC.type="LOCAL";const DO=VC;new Da(3e4,6e4);/**
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
 */function NO(t,e){return e?zn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vg extends mg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bO(t){return bC(t.auth,new vg(t),t.bypassAuthState)}function LO(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),lO(n,new vg(t),t.bypassAuthState)}async function OO(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),aO(n,new vg(t),t.bypassAuthState)}/**
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
 */class BC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bO;case"linkViaPopup":case"linkViaRedirect":return OO;case"reauthViaPopup":case"reauthViaRedirect":return LO;default:vn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const $O=new Da(2e3,1e4);class Wi extends BC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=yg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,$O.get())};e()}}Wi.currentPopupAction=null;/**
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
 */const MO="pendingRedirect",$l=new Map;class UO extends BC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await FO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FO(t,e){const n=VO(e),r=zO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function jO(t,e){$l.set(t._key(),e)}function zO(t){return zn(t._redirectPersistence)}function VO(t){return Ol(MO,t.config.apiKey,t.name)}async function BO(t,e,n=!1){const r=Us(t),i=NO(r,e),o=await new UO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const HO=10*60*1e3;class WO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!HC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=HO&&this.cachedEventUids.clear(),this.cachedEventUids.has(p0(e))}saveEventToCache(e){this.cachedEventUids.add(p0(e)),this.lastProcessedEventTime=Date.now()}}function p0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function HC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HC(t);default:return!1}}/**
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
 */async function GO(t,e={}){return Ti(t,"GET","/v1/projects",e)}/**
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
 */const KO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,QO=/^https?/;async function YO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await GO(t);for(const n of e)try{if(XO(n))return}catch{}vn(t,"unauthorized-domain")}function XO(t){const e=Ff(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!QO.test(n))return!1;if(KO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=new Da(3e4,6e4);function m0(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ZO(t){return new Promise((e,n)=>{var r,i,s;function o(){m0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{m0(),n(An(t,"network-request-failed"))},timeout:JO.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pn().gapi)===null||s===void 0)&&s.load)o();else{const a=WL("iframefcb");return Pn()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},RC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function e$(t){return Ml=Ml||ZO(t),Ml}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t$=new Da(5e3,15e3),n$="__/auth/iframe",r$="emulator/auth/iframe",i$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},s$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function o$(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?dg(e,r$):`https://${t.config.authDomain}/${n$}`,r={apiKey:e.apiKey,appName:t.name,v:Si},i=s$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${pa(r).slice(1)}`}async function a$(t){const e=await e$(t),n=Pn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:o$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:i$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=Pn().setTimeout(()=>{s(o)},t$.get());function l(){Pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},u$=500,c$=600,h$="_blank",d$="http://localhost";class g0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function f$(t,e,n,r=u$,i=c$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},l$),{width:r.toString(),height:i.toString(),top:s,left:o}),u=kt().toLowerCase();n&&(a=wC(u)?h$:n),vC(u)&&(e=e||d$,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(zL(u)&&a!=="_self")return p$(e||"",a),new g0(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new g0(h)}function p$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const m$="__/auth/handler",g$="emulator/auth/handler",y$=encodeURIComponent("fac");async function y0(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Si,eventId:i};if(e instanceof DC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ba){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${y$}=${encodeURIComponent(l)}`:"";return`${v$(t)}?${pa(a).slice(1)}${u}`}function v$({config:t}){return t.emulator?dg(t,g$):`https://${t.authDomain}/${m$}`}/**
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
 */const ed="webStorageSupport";class w${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=UC,this._completeRedirectFn=BO,this._overrideRedirectResult=jO}async _openPopup(e,n,r,i){var s;Jn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await y0(e,n,r,Ff(),i);return f$(e,o,yg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await y0(e,n,r,Ff(),i);return SO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Jn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await a$(e),r=new WO(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ed,{type:ed},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ed];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=YO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xC()||pg()||Gc()}}const E$=w$;var v0="@firebase/auth",w0="0.23.0";/**
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
 */class _${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function S$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function C$(t){hi(new Dr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),q(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kC(t)},u=new QL(r,i,s,l);return XL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hi(new Dr("auth-internal",e=>{const n=Us(e.getProvider("auth").getImmediate());return(r=>new _$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(v0,w0,S$(t)),Tn(v0,w0,"esm2017")}/**
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
 */const x$=5*60,k$=EE("authIdTokenMaxAge")||x$;let E0=null;const I$=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>k$)return;const i=n==null?void 0:n.token;E0!==i&&(E0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yc(t=am()){const e=pc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=YL(t,{popupRedirectResolver:E$,persistence:[DO,wO,UC]}),r=EE("authTokenSyncURL");if(r){const s=I$(r);fO(n,s,()=>s(n.currentUser)),dO(n,o=>s(o))}const i=vE("auth");return i&&JL(n,`http://${i}`),n}C$("Browser");const T$={apiKey:"AIzaSyCx8CXtDPdBDt8nbrBB3HzmE4_r7v93TLg",authDomain:"pxlshare-1fa05.firebaseapp.com",projectId:"pxlshare-1fa05",storageBucket:"pxlshare-1fa05.appspot.com",messagingSenderId:"927873406502",appId:"1:927873406502:web:c58724e56b04dc3ffdf8e7"},WC=xE(T$),ye=Wb(WC),mn=vL(WC);async function vi(t){return(await Pa(Ee(ye,"users",t))).data()}async function R$(t){const e=await vi(t),n=[];for(let r of e.followers){const i=await vi(r),s=await mi(pn(mn,i.profilePictureURL));n.push({uid:i.uid,profPic:s,username:i.username})}return n}async function A$(t){const e=await vi(t),n=[];for(let r of e.following){const i=await vi(r),s=await mi(pn(mn,i.profilePictureURL));n.push({uid:i.uid,profPic:s,username:i.username})}return n}async function P$(t){const e=await GS(Xm(ye,"users",t,"Uploads")),n=[];for(let r of e.docs){const i=r.data(),s=await mi(pn(mn,i.url));n.push({imageInfo:i,path:s})}return n}async function D$(t){await o2(Ee(ye,"users",t.uid,"Uploads",t.docID)),await cC(pn(mn,t.url))}const qC=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M12.1 18.55l-.1.1-.11-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5 22 5.41 19.58 3 16.5 3z"})),N$=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"})),b$=P(qC)`
  transition: fill .5s;

  &:hover {
    fill: red;
    cursor: pointer;
  }
`,L$=P(N$)`
  fill: red;
  cursor: pointer;
`;function wg(t){const e=S.useContext(Ln);return y.jsx(y.Fragment,{children:t.likes.includes(e.uid)?y.jsx(L$,{onClick:()=>t.toggleLike(!0,e.uid,t.image.docID)}):y.jsx(b$,{onClick:()=>t.toggleLike(!1,e.uid,t.image.docID)})})}const O$=P.div`
  display: flex;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
`,$$=P.input`
  border: none;
  padding: 20px;
  flex: 1;
`,M$=P.button`
  background-color: white;
  border: none;
  padding: 20px;
  transition: border .5s;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
    border: 1px solid rgb(223, 223, 223);
  }
`;function Eg(t){return y.jsxs(O$,{children:[y.jsx($$,{type:"text",placeholder:"Add a comment...",maxLength:50,onChange:e=>t.setComment(e.target.value),value:t.comment,ref:t.inputRef}),y.jsx(M$,{type:"button",onClick:t.addComment,children:"Post"})]})}const U$=P.div`
  display: flex;
  padding-right: 20px;

  > p {
    flex: 1;
  }
`,F$=P.span`
  font-weight: bold;
`,j$=P.button`
  margin-left: auto;
  padding: 5px 8px;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  color: red;
  font-weight: bold;
  font-size: .8rem;
  text-align: center;
  border-radius: 6px;
  transition: all .5s;

  &:hover {
    background-color: red;
    color: white;
  }
`,z$=P(lt)`
  text-decoration: none;
  color: black;
`;function _0(t){const e=S.useContext(Ln);async function n(){await at(Ee(ye,"users",t.upload.uid,"Uploads",t.upload.docID),{comments:es({uid:e.uid,comment:t.comment.comment,username:e.displayName})}),t.setComments(t.comments.filter(r=>r!==t.comment))}return y.jsxs(U$,{children:[y.jsxs("p",{children:[y.jsx(z$,{to:`/p/${t.comment.username}`,state:{uid:t.comment.uid},children:y.jsx(F$,{children:t.comment.username})}),": ",t.comment.comment]}),e.uid===t.comment.uid?y.jsx(j$,{onClick:n,children:"X"}):null]})}const V$=P.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
`,S0=P.button`
  width: fit-content;
  border: none;
  background-color: white;
  font-size: .8rem;
  color: #7a7a7a;

  &:hover {
    color: #525252;
    cursor: pointer;
  }
`;function GC(t){const[e,n]=S.useState(!1),[r]=S.useState(t.commentsViewLimit);function i(o){n(o)}function s(){const o=[];for(let a=0;a<r;a++)o.push(y.jsx(_0,{comment:t.comments[a],comments:t.comments,setComments:t.setComments,upload:t.upload}));return o}return y.jsxs(V$,{children:[t.comments.length>r&&e===!1?y.jsx(y.Fragment,{children:s()}):t.comments.map(o=>y.jsx(_0,{comment:o,comments:t.comments,setComments:t.setComments,upload:t.upload},o.comment)),t.comments.length>r&&(e?y.jsx(S0,{onClick:()=>i(!1),children:"Show Less"}):y.jsx(S0,{onClick:()=>i(!0),children:"Show All"}))]})}const B$=P.div`
  display: none;
  flex-direction: column;
  height: fit-content;
  border: 1px solid rgba(114, 114, 114, 0.2);
  background-color: white;
  border-radius: 5px;
  padding-top: 8px;
  margin-bottom: 50px;

  > div:not(:last-child), > h2, > p {
    padding: 0px 0px 8px 20px;
  }
`,H$=P(lt)`
  text-decoration: none;
  color: black;
`,C0=P.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
`,W$=P.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`,q$=P.img`
  width: 500px;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  margin-bottom: 8px;
`,G$=P.p`
  font-weight: bold;
  font-size: 1.1rem;
`;function K$(t){const e=S.useContext(Ln),n=S.useRef(null),[r,i]=S.useState(),[s,o]=S.useState(t.upload.likes),[a,l]=S.useState(""),[u,c]=S.useState(t.upload.comments),[h,d]=S.useState(),m=new Date().getTime(),v=t.upload.dateUploaded.seconds,w=Math.trunc(m/1e3/60/60/24-v/60/60/24);S.useEffect(()=>{E(),p()},[]);async function E(){try{const x=await mi(pn(mn,t.upload.url));i(x)}catch(x){console.log(x)}}async function p(){try{const A=(await Pa(Ee(ye,"users",t.upload.uid))).data().profilePictureURL,D=await mi(pn(mn,A));d(D)}catch(x){console.log(x)}}async function f(x){x?(await at(Ee(ye,"users",t.upload.uid,"Uploads",t.upload.docID),{likes:es(e.uid)}),o(s.filter(A=>A!==e.uid))):(await at(Ee(ye,"users",t.upload.uid,"Uploads",t.upload.docID),{likes:Rr(e.uid)}),o([...s,e.uid]))}async function g(){if(a.trim())try{await at(Ee(ye,"users",t.upload.uid,"Uploads",t.upload.docID),{comments:Rr({uid:e.uid,comment:a,username:e.displayName})}),c([...u,{uid:e.uid,comment:a,username:e.displayName}]),l("")}catch(x){console.log(x)}}function _(){n.current.focus()}return y.jsxs(B$,{style:t.cardDisplay,children:[y.jsxs(C0,{children:[y.jsx(W$,{src:h,alt:""}),y.jsx(H$,{to:`/p/${t.upload.username}`,state:{uid:t.upload.uid},children:y.jsx("h2",{children:t.upload.username})})]}),y.jsx(lt,{to:`/post/${t.upload.docID}`,state:{upload:t.upload,image:r,profilePicture:h,postLikes:s},children:y.jsx(q$,{src:r,alt:`Image uploaded by ${t.upload.username}`})}),y.jsxs(C0,{children:[y.jsx(wg,{likes:s,image:t.upload,toggleLike:f}),y.jsx(im,{onClick:_})]}),y.jsx(G$,{children:t.upload.desc}),y.jsxs("p",{children:[s.length," ",s.length==1?"Like":"Likes "]}),y.jsxs("p",{children:["Uploaded ",w>0?`${w} days ago`:"today"]}),y.jsx(GC,{comments:u,setComments:c,upload:t.upload,commentsViewLimit:2}),y.jsx(Eg,{inputRef:n,addComment:g,setComment:l,comment:a})]})}const _g=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"black",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M6.5 20q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48 1.18-1.53 3.08-1.95.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5 1.14 1.28 1.14 3 0 1.88-1.31 3.19T18.5 20H13q-.82 0-1.41-.59Q11 18.83 11 18v-5.15L9.4 14.4 8 13l4-4 4 4-1.4 1.4-1.6-1.55V18h5.5q1.05 0 1.77-.73.73-.72.73-1.77t-.73-1.77Q19.55 13 18.5 13H17v-2q0-2.07-1.46-3.54Q14.08 6 12 6 9.93 6 8.46 7.46 7 8.93 7 11h-.5q-1.45 0-2.47 1.03Q3 13.05 3 14.5q0 1.45 1.03 2.5 1.02 1 2.47 1H9v2m3-7z"})),KC=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"})),QC=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0 014-4m0 2a2 2 0 00-2 2 2 2 0 002 2 2 2 0 002-2 2 2 0 00-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1z"}));function Q$(){async function t(){const e=Yc();try{await mO(e)}catch(n){console.log(n)}}return y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",onClick:t,children:y.jsx("path",{d:"M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h9z"})})}const Y$="/PXLshare/assets/TitanOne-bcac194b.ttf",Sg=P.h1`
  @font-face {
    font-family: 'Titan';
    src: url(${Y$});
  }
  font-family: 'Titan';
  text-align: center;
  font-weight: 400;
`,X$=P.header`
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  z-index: 1;

  @media (max-width: 700px) {
    padding: 20px 5px;
  }
`,J$=P.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 80px;

  @media(max-width: 1000px) {
    padding: 0px;
  }

  @media(max-width: 600px) {
    > * {
      width: 180px;
    }
  }
`,Z$=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,eM=P.input`
  padding: 5px;
  font-size: .9rem;
  width: 190px;

  &:focus + div {
    display: flex;
  }
`,tM=P.nav`
  display: flex;
  align-items: center;
  gap: 20px;

  @media(max-width: 600px) {
    justify-content: center;
  }
`,YC=P(lt)`
  color: black;
  text-decoration: none;
`,nM=P.div`
  display: none;
  position: absolute;
  top: 34px;
  flex-direction: column;
  background-color: white;
  width: 190px;
  border: 1px solid rgba(114, 114, 114, 0.2);

  &:hover {
    display: flex;
  }
`,rM=P(YC)`
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  padding: 8px 0px;
  width: 100%;
  text-align: center;
  transition: background-color .5s;

  &:hover {
    background-color: rgba(231, 231, 231, 0.2);
  }
`;function Xc(){const t=S.useContext(Ln),[e,n]=S.useState(window.innerWidth),[r,i]=S.useState([]);window.addEventListener("resize",()=>{const o=window.innerWidth;n(o)});async function s(o){if(o.trim()){const l=(await Pa(Ee(ye,"users","userList"))).data().users,u=new RegExp(`^${o}w*`,"ig"),c=l.filter(h=>h.username.match(u));i(c)}else i([])}return y.jsx(X$,{children:y.jsxs(J$,{children:[y.jsx(YC,{to:"/",children:y.jsx(Sg,{children:"PXLshare"})}),y.jsxs(Z$,{children:[y.jsx(eM,{type:"text",onChange:o=>s(o.target.value),maxLength:16,placeholder:"Search for users..."}),r.length>0?y.jsx(nM,{children:r.map(o=>y.jsx(rM,{to:`/p/${o.username}`,state:{uid:o.uid,disp:"gallery"},children:o.username},o.uid))}):null]}),y.jsxs(tM,{children:[e>600?y.jsx(lt,{to:"/upload",state:{profilePicture:!1},children:y.jsx(_g,{})}):null,e>600?y.jsx(lt,{to:"/",children:y.jsx(KC,{})}):null,y.jsx(lt,{to:"/login",children:y.jsx(Q$,{})}),e>600?y.jsx(lt,{to:`/p/${t.displayName}`,state:{uid:t.uid,disp:"gallery"},children:y.jsx(QC,{})}):null]})]})})}const iM=P.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  background-color: white;
`;function Jc(t){const e=S.useContext(Ln),[n,r]=S.useState(window.innerWidth);return window.addEventListener("resize",()=>{r(window.innerWidth)}),y.jsx(y.Fragment,{children:n<600?y.jsxs(iM,{style:t.footerStyle,children:[y.jsx(lt,{to:"/",children:y.jsx(KC,{})}),y.jsx(lt,{to:"/upload",state:{profilePicture:!1},children:y.jsx(_g,{})}),y.jsx(lt,{to:`/p/${e.displayName}`,state:{uid:e.uid,disp:"gallery"},children:y.jsx(QC,{})})]}):null})}const Cg=pE`
  0% {
    background-color: rgb(170, 170, 170);
  }

  50% {
    background-color: rgb(190, 190, 190);
  }

  100% {
    background-color: rgb(170, 170, 170);
  }
`,sM=P.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  border: 1px solid rgba(114, 114, 114, 0.2);
  background-color: white;
  border-radius: 5px;
  padding-top: 8px;
  margin-bottom: 50px;

  > div:not(:last-child) {
    margin: 0px 0px 8px 20px;
  }
`,x0=P.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
`,oM=P.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #b3b3b3;
    animation: ${Cg} 2s linear infinite;
`,aM=P.img`
  width: 500px;
  height: 377px;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  margin-bottom: 8px;
  background-color: #b3b3b3;
    animation: ${Cg} 2s linear infinite;
`,td=P.div`
  width: 150px;
  height: 20px;
  background-color: #b3b3b3;
  border-radius: 12px;
  animation: ${Cg} 2s linear infinite;
`;function lM(){return y.jsxs(sM,{children:[y.jsxs(x0,{children:[y.jsx(oM,{}),y.jsx(td,{})]}),y.jsx(aM,{}),y.jsxs(x0,{children:[y.jsx(qC,{}),y.jsx(im,{})]}),y.jsx(td,{}),y.jsx(td,{}),y.jsx(Eg,{})]})}const uM=P.div`
  width: 500px;
  margin: 0px auto;
`;function cM(){const t=S.useContext(Ln),[e,n]=S.useState({}),[r,i]=S.useState({}),[s,o]=S.useState([]),[a,l]=S.useState([]),[u,c]=S.useState(!1);function h(){console.log("hi"),i({display:"flex"}),window.innerHeight<document.body.scrollHeight?n({position:"sticky"}):n({position:"absolute"}),c(!1)}S.useEffect(()=>{async function m(){try{const v=await vi(t.uid);o(v.following)}catch(v){return v}}m()},[t]),S.useEffect(()=>{s.length>0&&c(!0),d()},[s]);async function d(){const m=[];for(let w of s)(await GS(Xm(ye,"users",w,"Uploads"))).docs.forEach(p=>{m.push(p.data())});const v=m.toSorted((w,E)=>E.dateUploaded.seconds-w.dateUploaded.seconds);l(v)}return y.jsxs(y.Fragment,{children:[y.jsx(Xc,{}),y.jsxs(uM,{onLoad:h,children:[u&&y.jsx(lM,{}),a.map(m=>y.jsx(K$,{upload:m,cardDisplay:r},m.docID))]}),y.jsx(Jc,{footerStyle:e})]})}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zf=function(t,e){return zf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},zf(t,e)};function hM(t,e){zf(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var yt=function(){return yt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},yt.apply(this,arguments)},Vf={},dM={get exports(){return Vf},set exports(t){Vf=t}},k0=!1,Wr,Bf,Hf,Ul,Fl,XC,jl,Wf,qf,Gf,JC,Kf,Qf,ZC,ex;function Ot(){if(!k0){k0=!0;var t=navigator.userAgent,e=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),n=/(Mac OS X)|(Windows)|(Linux)/.exec(t);if(Kf=/\b(iPhone|iP[ao]d)/.exec(t),Qf=/\b(iP[ao]d)/.exec(t),Gf=/Android/i.exec(t),ZC=/FBAN\/\w+;/i.exec(t),ex=/Mobile/i.exec(t),JC=!!/Win64/.exec(t),e){Wr=e[1]?parseFloat(e[1]):e[5]?parseFloat(e[5]):NaN,Wr&&document&&document.documentMode&&(Wr=document.documentMode);var r=/(?:Trident\/(\d+.\d+))/.exec(t);XC=r?parseFloat(r[1])+4:Wr,Bf=e[2]?parseFloat(e[2]):NaN,Hf=e[3]?parseFloat(e[3]):NaN,Ul=e[4]?parseFloat(e[4]):NaN,Ul?(e=/(?:Chrome\/(\d+\.\d+))/.exec(t),Fl=e&&e[1]?parseFloat(e[1]):NaN):Fl=NaN}else Wr=Bf=Hf=Fl=Ul=NaN;if(n){if(n[1]){var i=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);jl=i?parseFloat(i[1].replace("_",".")):!0}else jl=!1;Wf=!!n[2],qf=!!n[3]}else jl=Wf=qf=!1}}var Yf={ie:function(){return Ot()||Wr},ieCompatibilityMode:function(){return Ot()||XC>Wr},ie64:function(){return Yf.ie()&&JC},firefox:function(){return Ot()||Bf},opera:function(){return Ot()||Hf},webkit:function(){return Ot()||Ul},safari:function(){return Yf.webkit()},chrome:function(){return Ot()||Fl},windows:function(){return Ot()||Wf},osx:function(){return Ot()||jl},linux:function(){return Ot()||qf},iphone:function(){return Ot()||Kf},mobile:function(){return Ot()||Kf||Qf||Gf||ex},nativeApp:function(){return Ot()||ZC},android:function(){return Ot()||Gf},ipad:function(){return Ot()||Qf}},fM=Yf,dl=!!(typeof window<"u"&&window.document&&window.document.createElement),pM={canUseDOM:dl,canUseWorkers:typeof Worker<"u",canUseEventListeners:dl&&!!(window.addEventListener||window.attachEvent),canUseViewport:dl&&!!window.screen,isInWorker:!dl},mM=pM,tx=mM,nx;tx.canUseDOM&&(nx=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function gM(t,e){if(!tx.canUseDOM||e&&!("addEventListener"in document))return!1;var n="on"+t,r=n in document;if(!r){var i=document.createElement("div");i.setAttribute(n,"return;"),r=typeof i[n]=="function"}return!r&&nx&&t==="wheel"&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var yM=gM,vM=fM,wM=yM,I0=10,T0=40,R0=800;function rx(t){var e=0,n=0,r=0,i=0;return"detail"in t&&(n=t.detail),"wheelDelta"in t&&(n=-t.wheelDelta/120),"wheelDeltaY"in t&&(n=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=n,n=0),r=e*I0,i=n*I0,"deltaY"in t&&(i=t.deltaY),"deltaX"in t&&(r=t.deltaX),(r||i)&&t.deltaMode&&(t.deltaMode==1?(r*=T0,i*=T0):(r*=R0,i*=R0)),r&&!e&&(e=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:e,spinY:n,pixelX:r,pixelY:i}}rx.getEventType=function(){return vM.firefox()?"DOMMouseScroll":wM("wheel")?"wheel":"mousewheel"};var EM=rx;(function(t){t.exports=EM})(dM);const _M=U0(Vf);function SM(t,e,n,r,i,s){s===void 0&&(s=0);var o=Ss(t,e,s),a=o.width,l=o.height,u=Math.min(a,n),c=Math.min(l,r);return u>c*i?{width:c*i,height:c}:{width:u,height:u/i}}function CM(t){return t.width>t.height?t.width/t.naturalWidth:t.height/t.naturalHeight}function fl(t,e,n,r,i){i===void 0&&(i=0);var s=Ss(e.width,e.height,i),o=s.width,a=s.height;return{x:A0(t.x,o,n.width,r),y:A0(t.y,a,n.height,r)}}function A0(t,e,n,r){var i=e*r/2-n/2;return Zc(t,-i,i)}function P0(t,e){return Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2))}function D0(t,e){return Math.atan2(e.y-t.y,e.x-t.x)*180/Math.PI}function xM(t,e,n,r,i,s,o){s===void 0&&(s=0),o===void 0&&(o=!0);var a=o?kM:IM,l=Ss(e.width,e.height,s),u=Ss(e.naturalWidth,e.naturalHeight,s),c={x:a(100,((l.width-n.width/i)/2-t.x/i)/l.width*100),y:a(100,((l.height-n.height/i)/2-t.y/i)/l.height*100),width:a(100,n.width/l.width*100/i),height:a(100,n.height/l.height*100/i)},h=Math.round(a(u.width,c.width*u.width/100)),d=Math.round(a(u.height,c.height*u.height/100)),m=u.width>=u.height*r,v=m?{width:Math.round(d*r),height:d}:{width:h,height:Math.round(h/r)},w=yt(yt({},v),{x:Math.round(a(u.width-v.width,c.x*u.width/100)),y:Math.round(a(u.height-v.height,c.y*u.height/100))});return{croppedAreaPercentages:c,croppedAreaPixels:w}}function kM(t,e){return Math.min(t,Math.max(0,e))}function IM(t,e){return e}function TM(t,e,n,r,i,s){var o=Ss(e.width,e.height,n),a=Zc(r.width/o.width*(100/t.width),i,s),l={x:a*o.width/2-r.width/2-o.width*a*(t.x/100),y:a*o.height/2-r.height/2-o.height*a*(t.y/100)};return{crop:l,zoom:a}}function RM(t,e,n){var r=CM(e);return n.height>n.width?n.height/(t.height*r):n.width/(t.width*r)}function AM(t,e,n,r,i,s){n===void 0&&(n=0);var o=Ss(e.naturalWidth,e.naturalHeight,n),a=Zc(RM(t,e,r),i,s),l=r.height>r.width?r.height/t.height:r.width/t.width,u={x:((o.width-t.width)/2-t.x)*l,y:((o.height-t.height)/2-t.y)*l};return{crop:u,zoom:a}}function N0(t,e){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function PM(t){return t*Math.PI/180}function Ss(t,e,n){var r=PM(n);return{width:Math.abs(Math.cos(r)*t)+Math.abs(Math.sin(r)*e),height:Math.abs(Math.sin(r)*t)+Math.abs(Math.cos(r)*e)}}function Zc(t,e,n){return Math.min(Math.max(t,e),n)}function pl(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter(function(n){return typeof n=="string"&&n.length>0}).join(" ").trim()}var DM=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,NM=1,bM=3,LM=function(t){hM(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.imageRef=At.createRef(),n.videoRef=At.createRef(),n.containerRef=null,n.styleRef=null,n.containerRect=null,n.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},n.dragStartPosition={x:0,y:0},n.dragStartCrop={x:0,y:0},n.gestureZoomStart=0,n.gestureRotationStart=0,n.isTouching=!1,n.lastPinchDistance=0,n.lastPinchRotation=0,n.rafDragTimeout=null,n.rafPinchTimeout=null,n.wheelTimer=null,n.currentDoc=typeof document<"u"?document:null,n.currentWindow=typeof window<"u"?window:null,n.resizeObserver=null,n.state={cropSize:null,hasWheelJustStarted:!1},n.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!n.containerRef)){var r=!0;n.resizeObserver=new window.ResizeObserver(function(i){if(r){r=!1;return}n.computeSizes()}),n.resizeObserver.observe(n.containerRef)}},n.preventZoomSafari=function(r){return r.preventDefault()},n.cleanEvents=function(){n.currentDoc&&(n.currentDoc.removeEventListener("mousemove",n.onMouseMove),n.currentDoc.removeEventListener("mouseup",n.onDragStopped),n.currentDoc.removeEventListener("touchmove",n.onTouchMove),n.currentDoc.removeEventListener("touchend",n.onDragStopped),n.currentDoc.removeEventListener("gesturemove",n.onGestureMove),n.currentDoc.removeEventListener("gestureend",n.onGestureEnd))},n.clearScrollEvent=function(){n.containerRef&&n.containerRef.removeEventListener("wheel",n.onWheel),n.wheelTimer&&clearTimeout(n.wheelTimer)},n.onMediaLoad=function(){var r=n.computeSizes();r&&(n.emitCropData(),n.setInitialCrop(r)),n.props.onMediaLoaded&&n.props.onMediaLoaded(n.mediaSize)},n.setInitialCrop=function(r){if(n.props.initialCroppedAreaPercentages){var i=TM(n.props.initialCroppedAreaPercentages,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),s=i.crop,o=i.zoom;n.props.onCropChange(s),n.props.onZoomChange&&n.props.onZoomChange(o)}else if(n.props.initialCroppedAreaPixels){var a=AM(n.props.initialCroppedAreaPixels,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),s=a.crop,o=a.zoom;n.props.onCropChange(s),n.props.onZoomChange&&n.props.onZoomChange(o)}},n.computeSizes=function(){var r,i,s,o,a,l,u=n.imageRef.current||n.videoRef.current;if(u&&n.containerRef){n.containerRect=n.containerRef.getBoundingClientRect();var c=n.containerRect.width/n.containerRect.height,h=((r=n.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((i=n.videoRef.current)===null||i===void 0?void 0:i.videoWidth)||0,d=((s=n.imageRef.current)===null||s===void 0?void 0:s.naturalHeight)||((o=n.videoRef.current)===null||o===void 0?void 0:o.videoHeight)||0,m=u.offsetWidth<h||u.offsetHeight<d,v=h/d,w=void 0;if(m)switch(n.props.objectFit){default:case"contain":w=c>v?{width:n.containerRect.height*v,height:n.containerRect.height}:{width:n.containerRect.width,height:n.containerRect.width/v};break;case"horizontal-cover":w={width:n.containerRect.width,height:n.containerRect.width/v};break;case"vertical-cover":w={width:n.containerRect.height*v,height:n.containerRect.height};break;case"auto-cover":w=h>d?{width:n.containerRect.width,height:n.containerRect.width/v}:{width:n.containerRect.height*v,height:n.containerRect.height};break}else w={width:u.offsetWidth,height:u.offsetHeight};n.mediaSize=yt(yt({},w),{naturalWidth:h,naturalHeight:d}),n.props.setMediaSize&&n.props.setMediaSize(n.mediaSize);var E=n.props.cropSize?n.props.cropSize:SM(n.mediaSize.width,n.mediaSize.height,n.containerRect.width,n.containerRect.height,n.props.aspect,n.props.rotation);return(((a=n.state.cropSize)===null||a===void 0?void 0:a.height)!==E.height||((l=n.state.cropSize)===null||l===void 0?void 0:l.width)!==E.width)&&n.props.onCropSizeChange&&n.props.onCropSizeChange(E),n.setState({cropSize:E},n.recomputeCropPosition),n.props.setCropSize&&n.props.setCropSize(E),E}},n.onMouseDown=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("mousemove",n.onMouseMove),n.currentDoc.addEventListener("mouseup",n.onDragStopped),n.onDragStart(e.getMousePoint(r)))},n.onMouseMove=function(r){return n.onDrag(e.getMousePoint(r))},n.onTouchStart=function(r){n.currentDoc&&(n.isTouching=!0,!(n.props.onTouchRequest&&!n.props.onTouchRequest(r))&&(n.currentDoc.addEventListener("touchmove",n.onTouchMove,{passive:!1}),n.currentDoc.addEventListener("touchend",n.onDragStopped),r.touches.length===2?n.onPinchStart(r):r.touches.length===1&&n.onDragStart(e.getTouchPoint(r.touches[0]))))},n.onTouchMove=function(r){r.preventDefault(),r.touches.length===2?n.onPinchMove(r):r.touches.length===1&&n.onDrag(e.getTouchPoint(r.touches[0]))},n.onGestureStart=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("gesturechange",n.onGestureMove),n.currentDoc.addEventListener("gestureend",n.onGestureEnd),n.gestureZoomStart=n.props.zoom,n.gestureRotationStart=n.props.rotation)},n.onGestureMove=function(r){if(r.preventDefault(),!n.isTouching){var i=e.getMousePoint(r),s=n.gestureZoomStart-1+r.scale;if(n.setNewZoom(s,i,{shouldUpdatePosition:!0}),n.props.onRotationChange){var o=n.gestureRotationStart+r.rotation;n.props.onRotationChange(o)}}},n.onGestureEnd=function(r){n.cleanEvents()},n.onDragStart=function(r){var i,s,o=r.x,a=r.y;n.dragStartPosition={x:o,y:a},n.dragStartCrop=yt({},n.props.crop),(s=(i=n.props).onInteractionStart)===null||s===void 0||s.call(i)},n.onDrag=function(r){var i=r.x,s=r.y;n.currentWindow&&(n.rafDragTimeout&&n.currentWindow.cancelAnimationFrame(n.rafDragTimeout),n.rafDragTimeout=n.currentWindow.requestAnimationFrame(function(){if(n.state.cropSize&&!(i===void 0||s===void 0)){var o=i-n.dragStartPosition.x,a=s-n.dragStartPosition.y,l={x:n.dragStartCrop.x+o,y:n.dragStartCrop.y+a},u=n.props.restrictPosition?fl(l,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):l;n.props.onCropChange(u)}}))},n.onDragStopped=function(){var r,i;n.isTouching=!1,n.cleanEvents(),n.emitCropData(),(i=(r=n.props).onInteractionEnd)===null||i===void 0||i.call(r)},n.onWheel=function(r){if(n.currentWindow&&!(n.props.onWheelRequest&&!n.props.onWheelRequest(r))){r.preventDefault();var i=e.getMousePoint(r),s=_M(r).pixelY,o=n.props.zoom-s*n.props.zoomSpeed/200;n.setNewZoom(o,i,{shouldUpdatePosition:!0}),n.state.hasWheelJustStarted||n.setState({hasWheelJustStarted:!0},function(){var a,l;return(l=(a=n.props).onInteractionStart)===null||l===void 0?void 0:l.call(a)}),n.wheelTimer&&clearTimeout(n.wheelTimer),n.wheelTimer=n.currentWindow.setTimeout(function(){return n.setState({hasWheelJustStarted:!1},function(){var a,l;return(l=(a=n.props).onInteractionEnd)===null||l===void 0?void 0:l.call(a)})},250)}},n.getPointOnContainer=function(r){var i=r.x,s=r.y;if(!n.containerRect)throw new Error("The Cropper is not mounted");return{x:n.containerRect.width/2-(i-n.containerRect.left),y:n.containerRect.height/2-(s-n.containerRect.top)}},n.getPointOnMedia=function(r){var i=r.x,s=r.y,o=n.props,a=o.crop,l=o.zoom;return{x:(i+a.x)/l,y:(s+a.y)/l}},n.setNewZoom=function(r,i,s){var o=s===void 0?{}:s,a=o.shouldUpdatePosition,l=a===void 0?!0:a;if(!(!n.state.cropSize||!n.props.onZoomChange)){var u=Zc(r,n.props.minZoom,n.props.maxZoom);if(l){var c=n.getPointOnContainer(i),h=n.getPointOnMedia(c),d={x:h.x*u-c.x,y:h.y*u-c.y},m=n.props.restrictPosition?fl(d,n.mediaSize,n.state.cropSize,u,n.props.rotation):d;n.props.onCropChange(m)}n.props.onZoomChange(u)}},n.getCropData=function(){if(!n.state.cropSize)return null;var r=n.props.restrictPosition?fl(n.props.crop,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):n.props.crop;return xM(r,n.mediaSize,n.state.cropSize,n.getAspect(),n.props.zoom,n.props.rotation,n.props.restrictPosition)},n.emitCropData=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,s=r.croppedAreaPixels;n.props.onCropComplete&&n.props.onCropComplete(i,s),n.props.onCropAreaChange&&n.props.onCropAreaChange(i,s)}},n.emitCropAreaChange=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,s=r.croppedAreaPixels;n.props.onCropAreaChange&&n.props.onCropAreaChange(i,s)}},n.recomputeCropPosition=function(){if(n.state.cropSize){var r=n.props.restrictPosition?fl(n.props.crop,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):n.props.crop;n.props.onCropChange(r),n.emitCropData()}},n}return e.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=DM,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},e.prototype.componentWillUnmount=function(){var n,r;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(n=this.resizeObserver)===null||n===void 0||n.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((r=this.styleRef.parentNode)===null||r===void 0||r.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},e.prototype.componentDidUpdate=function(n){var r,i,s,o,a,l,u,c,h;n.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):n.aspect!==this.props.aspect?this.computeSizes():n.zoom!==this.props.zoom?this.recomputeCropPosition():((r=n.cropSize)===null||r===void 0?void 0:r.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((s=n.cropSize)===null||s===void 0?void 0:s.width)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.width)?this.computeSizes():(((a=n.crop)===null||a===void 0?void 0:a.x)!==((l=this.props.crop)===null||l===void 0?void 0:l.x)||((u=n.crop)===null||u===void 0?void 0:u.y)!==((c=this.props.crop)===null||c===void 0?void 0:c.y))&&this.emitCropAreaChange(),n.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),n.video!==this.props.video&&((h=this.videoRef.current)===null||h===void 0||h.load())},e.prototype.getAspect=function(){var n=this.props,r=n.cropSize,i=n.aspect;return r?r.width/r.height:i},e.prototype.onPinchStart=function(n){var r=e.getTouchPoint(n.touches[0]),i=e.getTouchPoint(n.touches[1]);this.lastPinchDistance=P0(r,i),this.lastPinchRotation=D0(r,i),this.onDragStart(N0(r,i))},e.prototype.onPinchMove=function(n){var r=this;if(!(!this.currentDoc||!this.currentWindow)){var i=e.getTouchPoint(n.touches[0]),s=e.getTouchPoint(n.touches[1]),o=N0(i,s);this.onDrag(o),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var a=P0(i,s),l=r.props.zoom*(a/r.lastPinchDistance);r.setNewZoom(l,o,{shouldUpdatePosition:!1}),r.lastPinchDistance=a;var u=D0(i,s),c=r.props.rotation+(u-r.lastPinchRotation);r.props.onRotationChange&&r.props.onRotationChange(c),r.lastPinchRotation=u})}},e.prototype.render=function(){var n=this,r=this.props,i=r.image,s=r.video,o=r.mediaProps,a=r.transform,l=r.crop,u=l.x,c=l.y,h=r.rotation,d=r.zoom,m=r.cropShape,v=r.showGrid,w=r.style,E=w.containerStyle,p=w.cropAreaStyle,f=w.mediaStyle,g=r.classes,_=g.containerClassName,x=g.cropAreaClassName,A=g.mediaClassName,D=r.objectFit;return At.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(Y){return n.containerRef=Y},"data-testid":"container",style:E,className:pl("reactEasyCrop_Container",_)},i?At.createElement("img",yt({alt:"",className:pl("reactEasyCrop_Image",D==="contain"&&"reactEasyCrop_Contain",D==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",D==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",D==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),A)},o,{src:i,ref:this.imageRef,style:yt(yt({},f),{transform:a||"translate(".concat(u,"px, ").concat(c,"px) rotate(").concat(h,"deg) scale(").concat(d,")")}),onLoad:this.onMediaLoad})):s&&At.createElement("video",yt({autoPlay:!0,loop:!0,muted:!0,className:pl("reactEasyCrop_Video",D==="contain"&&"reactEasyCrop_Contain",D==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",D==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",D==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),A)},o,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:yt(yt({},f),{transform:a||"translate(".concat(u,"px, ").concat(c,"px) rotate(").concat(h,"deg) scale(").concat(d,")")}),controls:!1}),(Array.isArray(s)?s:[{src:s}]).map(function(N){return At.createElement("source",yt({key:N.src},N))})),this.state.cropSize&&At.createElement("div",{style:yt(yt({},p),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:pl("reactEasyCrop_CropArea",m==="round"&&"reactEasyCrop_CropAreaRound",v&&"reactEasyCrop_CropAreaGrid",x)}))},e.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:bM,minZoom:NM,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},e.getMousePoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},e.getTouchPoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},e}(At.Component);const OM=t=>new Promise((e,n)=>{const r=new Image;r.addEventListener("load",()=>e(r)),r.addEventListener("error",i=>n(i)),r.setAttribute("crossOrigin","anonymous"),r.src=t});function ix(t){return t*Math.PI/180}function $M(t,e,n){const r=ix(n);return{width:Math.abs(Math.cos(r)*t)+Math.abs(Math.sin(r)*e),height:Math.abs(Math.sin(r)*t)+Math.abs(Math.cos(r)*e)}}async function MM(t,e,n=0,r={horizontal:!1,vertical:!1}){const i=await OM(t),s=document.createElement("canvas"),o=s.getContext("2d");if(!o)return null;const a=ix(n),{width:l,height:u}=$M(i.width,i.height,n);s.width=l,s.height=u,o.translate(l/2,u/2),o.rotate(a),o.scale(r.horizontal?-1:1,r.vertical?-1:1),o.translate(-i.width/2,-i.height/2),o.drawImage(i,0,0);const c=o.getImageData(e.x,e.y,e.width,e.height);return s.width=e.width,s.height=e.height,o.putImageData(c,0,0),s.toDataURL("image/jpeg")}const nd=P.div`
  width: fit-content;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
  margin: 50px auto 0px auto;
  padding: 20px;
  background-color: white;

  > div {
    display: flex;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 0px 10px;
  }

  > p {
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
  }

  > div > input {
    width: 300px;
  }
`,UM=P.div`
  position: relative;
  width: 700px;
  height: 600px;
`,FM=P.input`
  display: none;
`,ml=P.button`
  background-color: rgb(0,92,152);
  border: 1px solid rgb(0, 65, 109);
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  font-weight: bold;
  font-size: 0.9rem;

  &:hover {
    background-color: rgb(0, 107, 179)
  }
`,jM=P(_g)`
  width: 300px;
  height: 300px;
  margin: 0px 50px 10px 50px;
  display: block;

  &:hover {
    cursor: pointer;
  }
`,zM=P.img`
  width: 500px;
`;function VM(){const t=S.useContext(Ln),{profilePicture:e}=_i().state,[n,r]=S.useState({}),[i,s]=S.useState({x:0,y:0}),[o,a]=S.useState(1),[l,u]=S.useState(null),[c,h]=S.useState(null),[d,m]=S.useState(""),[v,w]=S.useState(""),[E,p]=S.useState("choose"),[f,g]=S.useState("");let _=As();S.useEffect(()=>{A()},[d]),S.useEffect(()=>{const V=document.querySelector("input[type=range]");V&&(V.value=o)},[o]);function x(){window.innerHeight<document.body.scrollHeight?r({position:"sticky"}):r({position:"absolute"})}async function A(){if(d){let V=new FileReader;V.readAsDataURL(d),p("crop"),V.onload=function(){w(V.result)},V.onerror=function(){console.log(V.error)}}}const D=S.useCallback((V,ge)=>{u(ge)},[]),N=S.useCallback(async()=>{try{const V=await MM(v,l);console.log("done",{croppedImage:V}),h(V),p("upload")}catch(V){console.error(V)}},[l]),Y=S.useCallback(()=>{h(null),m(""),w(""),p("choose"),a(1),s({x:0,y:0})},[]);async function W(){if(e)try{t.photoURL!=="default/default-profile-picture.png"&&await cC(pn(mn,t.photoURL));const V=`${t.uid}/ProfilePicture/${d.name}`,ge=pn(mn,V),Me=await(await fetch(c)).blob(),Ie=Me.type,tt=new File([Me],d.name,{type:Ie}),te=await n0(ge,tt);await at(Ee(ye,"users",t.uid),{profilePictureURL:V}),await LC(t,{photoURL:V}),console.log("File has been uploaded",te),_(`/p/${t.displayName}`,{state:{uid:t.uid,disp:"gallery"}})}catch(V){console.log(V)}else try{const V=`${t.uid}/Uploads/${d.name}`,ge=pn(mn,V),Me=await(await fetch(c)).blob(),Ie=Me.type,tt=new File([Me],d.name,{type:Ie}),te=await n0(ge,tt),T=await a2(Xm(ye,"users",t.uid,"Uploads"),{dateUploaded:u2(),desc:f,filename:d.name,likes:[],url:V,uid:t.uid,username:t.displayName,comments:[]});await at(Ee(ye,"users",t.uid,"Uploads",T.id),{docID:T.id}),console.log("File has been uploaded",te),_(`/p/${t.displayName}`,{state:{uid:t.uid,disp:"gallery"}})}catch(V){console.log(V)}}return y.jsxs("div",{onLoad:x,children:[y.jsx(Xc,{}),E==="choose"?y.jsxs(nd,{children:[y.jsxs("label",{children:[y.jsx(FM,{type:"file",accept:"image/*",id:"fileInput",onChange:V=>m(V.target.files[0])}),y.jsx(jM,{})]}),y.jsx("p",{children:"Select an image to upload"})]}):E==="crop"?y.jsxs(nd,{children:[y.jsx(UM,{children:y.jsx(LM,{image:v,crop:i,zoom:o,aspect:1,onCropChange:s,onZoomChange:a,onCropComplete:D})}),y.jsxs("div",{children:[y.jsx(ml,{onClick:Y,children:"Cancel"}),y.jsx("input",{type:"range",defaultValue:1,min:1,max:3,step:.1,onChange:V=>a(V.target.value)}),y.jsx(ml,{onClick:N,children:"Crop"})]})]}):E==="upload"?y.jsxs(nd,{children:[y.jsx(zM,{src:c}),y.jsxs("div",{children:[y.jsx(ml,{onClick:Y,children:"Cancel"}),e||y.jsx("textarea",{name:"",id:"",cols:"30",rows:"5",placeholder:"Enter a caption...",onChange:V=>g(V.target.value)}),y.jsx(ml,{type:"button",onClick:W,children:"Upload"})]})]}):null,y.jsx(Jc,{footerStyle:n})]})}const BM=P.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  width: 300px;
  border-radius: 6px;
  padding: 8px;
  font-size: 1.3rem;
  transition: background-color .5s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`,HM=P.img`
  width: 48px;
  height: 48px;
  border-radius: 50%
`,WM=P(lt)`
  color: black;
  text-decoration: none;
`;function qM(t){return y.jsx(WM,{to:`/p/${t.user.username}`,state:{uid:t.user.uid},children:y.jsxs(BM,{children:[y.jsx(HM,{src:t.user.profPic,alt:""}),t.user.username]})})}const GM=P.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;function b0(t){return y.jsx(GM,{children:t.users.map(e=>y.jsx(qM,{user:e},e.uid))})}const KM=P.div`
  position: relative;
  width: 300px;
  height: 300px;
`,QM=P.img`
  width: 300px;
  height: 300px;
`,YM=P.div`
  position: absolute;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  opacity: 0;
  width: 100%;
  height: 100%;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity .25s;
  transition-timing-function: ease-in-out;

  &:hover {
    opacity: 1;
  }
`;function XM(t){return y.jsxs(KM,{children:[y.jsx(QM,{src:t.image.path}),y.jsx(lt,{to:`/post/${t.image.imageInfo.docID}`,state:{upload:t.image.imageInfo,image:t.image.path,profilePicture:t.profilePicture,postLikes:t.image.imageInfo.likes},children:y.jsxs(YM,{children:[y.jsx(wg,{likes:t.image.imageInfo.likes,image:t.image.imageInfo,toggleLike:t.toggleLike}),t.image.imageInfo.likes?t.image.imageInfo.likes.length:0]})})]})}const JM=P.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;function ZM(t){return y.jsx(JM,{children:t.images.map(e=>y.jsx(XM,{image:e,toggleLike:t.toggleLike,profilePicture:t.profilePicture},e.imageInfo.docID))})}const eU=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16px",height:"16px",...t},S.createElement("path",{d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"})),tU=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18px",height:"18px",...t},S.createElement("path",{d:"M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"})),nU=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"72px",height:"72px",...t},S.createElement("path",{d:"M17 12C17 7.55 11.62 5.31 8.46 8.46C5.31 11.61 7.55 17 12 17C14.76 17 17 14.76 17 12M12 15C9.33 15 8 11.77 9.88 9.88C11.77 8 15 9.33 15 12C15 13.66 13.66 15 12 15M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5M5 5H9V3H5C3.9 3 3 3.9 3 5V9H5M19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19"})),sx=pE`
  0% {
    background-color: rgb(170, 170, 170);
  }

  50% {
    background-color: rgb(190, 190, 190);
  }

  100% {
    background-color: rgb(170, 170, 170);
  }
`,rU=P.div`
  display: flex;
  gap: 150px;
  padding: 0px 20px;
  max-width: 500px;
  align-items: center;

  @media(max-width: 700px) {
    padding: 50px;
    gap: 80px;
    margin: 0px auto;
  }
`,iU=P.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #b3b3b3;
  animation: ${sx} 2s linear infinite;
`,sU=P.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  max-width: 350px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > p {
      width: 100px;
    }

    @media(max-width: 700px) {
      flex-direction: column;
      gap: 5px;
    }
  }

  input {
    padding: 3px;
  }

  > p:last-of-type {
    display: flex;
    gap: 5px;
  }
`,Js=P.div`
  width: 150px;
  height: 20px;
  background-color: #b3b3b3;
  border-radius: 12px;
  animation: ${sx} 2s linear infinite;
`;function oU(){return y.jsxs(rU,{children:[y.jsx(iU,{}),y.jsxs(sU,{children:[y.jsx("div",{children:y.jsx(Js,{})}),y.jsxs("div",{children:[y.jsx(Js,{}),y.jsx(Js,{}),y.jsx(Js,{})]}),y.jsx(Js,{})]})]})}const aU=P.div`
  margin: 30px auto;
  max-width: 960px;
`,lU=P.div`
  display: none;
  gap: 150px;
  padding: 0px 20px;
  max-width: 500px;
  align-items: center;

  @media(max-width: 700px) {
    padding: 50px;
    gap: 80px;
    margin: 0px auto;
  }
`,uU=P.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-shrink: 0;
`,cU=P.div`
  position: relative;
  width: 150px;
  height: 150px;
`,hU=P.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  max-width: 350px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;

    > p {
      width: 100px;
    }

    @media(max-width: 700px) {
      flex-direction: column;
      gap: 5px;
    }
  }

  input {
    padding: 3px;
  }

  > p:last-of-type {
    display: flex;
    gap: 5px;

    @media(max-width: 700px) {
      justify-content: center;
    }
  }
`,dU=P(eU)`
  &:hover {
    cursor: pointer;
  }
`,fU=P(tU)`
  &:hover {
    cursor: pointer;
  }
`,L0=P.button`
  margin-left: 20px;
  padding: 6px 12px;
  font-size: 1rem;
  background-color: rgb(0,92,152);
  border: 1px solid rgb(0, 65, 109);
  border-radius: 6px;
  color: white;

  &:hover {
    background-color: rgb(0, 107, 179);
    cursor: pointer;
  }
`,rd=P.span`
  font-weight: bold;
`,pU=P.div`
  position: absolute;
  top: 0px;
  opacity: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  transition: opacity .25s;
  transition-timing-function: ease-in-out;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;function mU(){const t=S.useContext(Ln),{uid:e}=_i().state,[n,r]=S.useState({}),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(""),[c,h]=S.useState([]),[d,m]=S.useState([]),[v,w]=S.useState([]),[E,p]=S.useState([]),[f,g]=S.useState("gallery"),[_,x]=S.useState(!1),[A,D]=S.useState(!0),[N,Y]=S.useState({});S.useEffect(()=>{async function te(){const T=await vi(t.uid);p(T.following)}te()},[]),S.useEffect(()=>{Y({display:"none"}),h([]),D(!0),g("gallery"),V()},[e]);function W(){window.innerHeight<document.body.scrollHeight?r({position:"sticky"}):r({position:"absolute"})}async function V(){try{const T=(await Pa(Ee(ye,"users",e))).data(),j=await R$(e),H=await A$(e),ne=await P$(e),b=await mi(pn(mn,T.profilePictureURL));m(j),w(H),s(T.username),u(T.bio),h(ne),a(b),D(!1),Y({display:"flex"})}catch(te){console.log(te)}}async function ge(){await at(Ee(ye,"users",t.uid),{following:Rr(e)}),await at(Ee(ye,"users",e),{followers:Rr(t.uid)});const te=await mi(pn(mn,t.photoURL));p([...E,e]),m([...d,{uid:t.uid,profPic:te,username:t.displayName}])}async function $e(){await at(Ee(ye,"users",t.uid),{following:es(e)}),await at(Ee(ye,"users",e),{followers:es(t.uid)}),p(E.filter(te=>te!==e)),m(d.filter(te=>te.uid!==t.uid))}async function Me(te,T,j){if(te){await at(Ee(ye,"users",e,"Uploads",j),{likes:es(T)});const H=c.map(ne=>{if(ne.imageInfo.docID==j){let b=ne.imageInfo.likes.indexOf(T);ne.imageInfo.likes.splice(b,1)}return ne});h(H)}else{await at(Ee(ye,"users",e,"Uploads",j),{likes:Rr(T)});const H=c.map(ne=>(ne.imageInfo.docID==j&&ne.imageInfo.likes.push(T),ne));h(H)}}async function Ie(te){te?(await at(Ee(ye,"users",t.uid),{bio:l}),x(!1)):x(!0)}function tt(te){g(te)}return y.jsxs("div",{onLoad:W,children:[y.jsx(Xc,{}),y.jsxs(aU,{children:[A&&y.jsx(oU,{}),y.jsxs(lU,{style:N,children:[y.jsxs(cU,{children:[y.jsx(uU,{src:o}),y.jsx(lt,{to:"/upload",state:{profilePicture:!0},children:y.jsx(pU,{children:y.jsx(nU,{})})})]}),y.jsxs(hU,{children:[y.jsxs("div",{children:[y.jsx("h2",{children:i}),E.includes(e)==!0?y.jsx(L0,{onClick:$e,children:"Unfollow"}):t.uid!=e?y.jsx(L0,{onClick:ge,children:"Follow"}):null]}),y.jsxs("div",{children:[y.jsxs("p",{onClick:()=>tt("gallery"),children:[y.jsx(rd,{children:c.length})," Photos"]}),y.jsxs("p",{onClick:()=>tt("followers"),children:[y.jsx(rd,{children:d.length})," Followers"]}),y.jsxs("p",{onClick:()=>tt("following"),children:[y.jsx(rd,{children:v.length})," Following"]})]}),t.uid==e?_?y.jsxs("div",{children:[y.jsx("input",{type:"text",onChange:te=>u(te.target.value),placeholder:l}),y.jsx(fU,{onClick:()=>Ie(!0)})]}):y.jsxs("p",{children:[l,y.jsx(dU,{onClick:()=>Ie(!1)})]}):y.jsx("p",{children:l})]})]}),f==="gallery"?y.jsx(ZM,{images:c,toggleLike:Me,profilePicture:o}):f==="followers"?y.jsx(b0,{users:d}):f==="following"?y.jsx(b0,{users:v}):null]}),y.jsx(Jc,{footerStyle:n})]})}const gU=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,yU=P.div`
  display: flex;
  flex-direction: column;

  > p:last-of-type {
    text-align: center;
    margin: 15px 0px 6px 0px;
  }
`,vU=P.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 400px;
  background-color: white;
  padding: 20px;
  border: 1px solid rgba(114, 114, 114, 0.2);
`,O0=P.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  outline: none;
`,wU=P.button`
  padding: 10px;
  color: white;
  background-color: #62b1e6;
  border: 1px solid lightblue;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(.99);
  }
`,EU=P.p`
  padding: 15px;
  background-color: white;
  border: 1px solid rgba(114, 114, 114, 0.2);
  font-size: .9rem;
  text-align: center;
  margin-top: 15px;
`,_U=P(lt)`
  color: #1b34c4;
  text-decoration: none;
  font-weight: bold;
`,SU=P.button`
  width: fit-content;
  margin: 0px auto;
  padding: 5px;
  font-weight: bold;
  font-size: .9rem;
  text-align: center;

    &:hover {
    cursor: pointer;
  }
`,CU=P.span`
  color: red;
  font-size: .8rem;
  font-weight: bold;
  text-align: center;
`;function xU(){let t=As();const[e,n]=S.useState(!0);async function r(i,s){i.preventDefault();const o=Yc();if(s)try{const a=await vi("GuestAccount");await h0(o,a.email,a.password),t("/")}catch(a){console.log(a)}else try{const a=document.getElementById("email").value,l=document.getElementById("password").value;await h0(o,a,l),t("/")}catch(a){n(!1),console.log(a)}}return y.jsx(gU,{children:y.jsxs(yU,{children:[y.jsxs(vU,{onSubmit:i=>r(i),children:[y.jsx(Sg,{children:"PXLshare"}),e?null:y.jsx(CU,{children:"Unable to login. Check email and password."}),y.jsx(O0,{type:"email",placeholder:"Email Address",id:"email",required:!0}),y.jsx(O0,{type:"password",placeholder:"Password",id:"password",required:!0}),y.jsx(wU,{type:"submit",children:"Login"})]}),y.jsxs(EU,{children:["Don't have an account? ",y.jsx(_U,{to:"/sign-up",children:"Sign Up"})]}),y.jsx("p",{children:"Wanna look around?"}),y.jsx(SU,{onClick:i=>r(i,!0),children:"Login as Guest"})]})})}const kU=P.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,IU=P.div`
  display: flex;
  flex-direction: column;

  > p:last-of-type {
    text-align: center;
    margin: 15px 0px 6px 0px;
  }
`,TU=P.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 400px;
  background-color: white;
  padding: 20px;
  border: 1px solid rgba(114, 114, 114, 0.2);
`,gl=P.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  outline: none;
`,RU=P.button`
  padding: 10px;
  color: white;
  background-color: #62b1e6;
  border: 1px solid lightblue;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;

  &:hover {
    cursor: pointer;
  }

  &:active {
    transform: scale(.99);
  }
`,AU=P.p`
  padding: 15px;
  background-color: white;
  border: 1px solid rgba(114, 114, 114, 0.2);
  font-size: .9rem;
  text-align: center;
  margin-top: 15px;
`,PU=P(lt)`
  color: #1b34c4;
  text-decoration: none;
  font-weight: bold;
`,ox=P.span`
  color: red;
  font-size: .8rem;
  font-weight: bold;
`,DU=P(ox)`
  text-align: center;
`;function NU(){let t=As();const[e,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState([]),[a,l]=S.useState(!0);S.useEffect(()=>{async function h(){const m=(await Pa(Ee(ye,"users","userList"))).data().users,v=[];for(let w of m)v.push(w.username.toLowerCase());o(v)}h()},[]);function u(h){return h.validity.patternMismatch?(h.setCustomValidity("Username can contain letters, numbers, and a underscores."),!1):(h.setCustomValidity(""),!0)}async function c(h){h.preventDefault();const d=document.getElementById("username").value,m=document.getElementById("email").value,v=document.getElementById("password").value,w=document.getElementById("confirm-password").value;if(s.includes(d.toLowerCase())?l(!1):l(!0),v===w&&a===!0)try{const E=Yc();await cO(E,m,v),await LC(E.currentUser,{displayName:d,photoURL:"default/default-profile-picture.png"}),await s2(Ee(ye,"users",E.currentUser.uid),{bio:"",followers:[],following:[],profilePictureURL:E.currentUser.photoURL,username:E.currentUser.displayName,uid:E.currentUser.uid}),await at(Ee(ye,"users","userList"),{users:Rr({uid:E.currentUser.uid,username:E.currentUser.displayName})}),t("/")}catch(E){console.log(E)}}return y.jsx(kU,{children:y.jsxs(IU,{children:[y.jsxs(TU,{onSubmit:h=>c(h),children:[y.jsx(Sg,{children:"PXLshare"}),a?null:y.jsx(DU,{children:"Username taken"}),y.jsx(gl,{onInput:h=>u(h.target),type:"text",placeholder:"Username",id:"username",pattern:"^[\\w]+$",maxLength:16,required:!0}),y.jsx(gl,{type:"email",placeholder:"Email Address",id:"email",required:!0}),e===r?null:y.jsx(ox,{children:"*Passwords do not match"}),y.jsx(gl,{type:"password",placeholder:"Password",id:"password",minLength:6,maxLength:12,onChange:h=>n(h.target.value),required:!0}),y.jsx(gl,{type:"password",placeholder:"Confirm Password",id:"confirm-password",minLength:6,maxLength:12,onChange:h=>i(h.target.value),required:!0}),y.jsx(RU,{type:"submit",children:"Create Account"})]}),y.jsxs(AU,{children:["Already have an account? ",y.jsx(PU,{to:"/login",children:"Login"})]})]})})}const bU="/PXLshare/assets/Lato-e82542ae.ttf",LU=P.div`
  display: flex;
  margin: 50px auto 0px auto;
  width: 1200px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);

  @media(max-width: 1000px) {
    flex-direction: column;
    width: 580px;
    margin-top: 30px;
  }
`,OU=P(lt)`
  text-decoration: none;
  color: black;
`,$U=P.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  padding: 10px 10px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`,MU=P.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,UU=P.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > *:not(:last-child) {
    padding: 6px 10px;
  }
`,FU=P.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`,jU=P.img`
  width: 700px;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  flex-shrink: 0;

  @media(max-width: 1000px) {
    width: 580px;
  }
`,$0=P.p`
  font-weight: bold;
`,M0=P.button`
  background-color: rgb(0,92,152);
  border: 1px solid rgb(0, 65, 109);
  color: white;
  border-radius: 5px;
  padding: 6px 12px;
  font-weight: bold;
  font-size: 0.9rem;

  &:hover {
    background-color: rgb(0, 107, 179);
    cursor: pointer;
  }
`;function zU(){const t=S.useContext(Ln),e=S.useRef(null),n=As(),{upload:r,image:i,profilePicture:s,postLikes:o}=_i().state,[a,l]=S.useState(o),[u,c]=S.useState(""),[h,d]=S.useState(r.comments),m=new Date().getTime(),v=r.dateUploaded.seconds,w=Math.trunc(m/1e3/60/60/24-v/60/60/24);async function E(){if(u.trim())try{await at(Ee(ye,"users",r.uid,"Uploads",r.docID),{comments:Rr({uid:t.uid,comment:u,username:t.displayName})}),d([...h,{uid:t.uid,comment:u,username:t.displayName}]),c("")}catch(g){console.log(g)}}async function p(g){g?(await at(Ee(ye,"users",r.uid,"Uploads",r.docID),{likes:es(t.uid)}),l(a.filter(_=>_!==t.uid))):(await at(Ee(ye,"users",r.uid,"Uploads",r.docID),{likes:Rr(t.uid)}),l([...a,t.uid]))}function f(){e.current.focus()}return y.jsxs(y.Fragment,{children:[y.jsx(Xc,{}),y.jsxs(LU,{children:[y.jsx(jU,{src:i}),y.jsxs(UU,{children:[y.jsxs($U,{children:[y.jsxs("div",{children:[y.jsx(FU,{src:s}),y.jsx(OU,{to:`/p/${r.username}`,state:{uid:r.uid},children:y.jsx("h2",{children:r.username})})]}),y.jsxs("div",{children:[y.jsx(M0,{onClick:()=>n(-1),children:"Back"}),t.uid===r.uid?y.jsx(M0,{onClick:()=>{D$(r),n(-1)},children:"Delete"}):null]})]}),r.desc?y.jsx($0,{children:r.desc}):null,y.jsxs(MU,{children:[y.jsx(wg,{likes:a,image:r,toggleLike:p}),y.jsx(im,{onClick:f})]}),y.jsxs($0,{children:[a.length," ",a.length==1?"Like":"Likes "]}),y.jsxs("p",{children:["Uploaded ",w>0?`${w} days ago`:"today"]}),y.jsx(GC,{comments:h,setComments:d,upload:r,commentsViewLimit:8}),y.jsx(Eg,{inputRef:e,addComment:E,setComment:c,comment:u})]})]}),y.jsx(Jc,{footerStyle:{position:"absolute"}})]})}const VU=DR`

  @font-face {
    font-family: 'Lato';
    src: url(${bU});
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Lato', Arial, Helvetica, sans-serif;
  }

  body {
    background-color: whitesmoke;
  }
`,Ln=S.createContext();function BU(){const[t,e]=S.useState(!0),[n,r]=S.useState(!0);return S.useEffect(()=>{const i=Yc();pO(i,s=>{s?(e(i.currentUser),r(!0)):r(!1)})},[]),y.jsx(Ln.Provider,{value:t,children:y.jsxs(bT,{basename:"/PXLshare",children:[y.jsx(VU,{}),y.jsxs(RT,{children:[y.jsx(Br,{path:"/",element:n?y.jsx(cM,{}):y.jsx(IT,{to:"/login"})}),y.jsx(Br,{path:"/upload",element:y.jsx(VM,{})}),y.jsx(Br,{path:"/p/:id",element:y.jsx(mU,{})}),y.jsx(Br,{path:"/login",element:y.jsx(xU,{})}),y.jsx(Br,{path:"/sign-up",element:y.jsx(NU,{})}),y.jsx(Br,{path:"/post/:id",element:y.jsx(zU,{})})]})]})})}sd.createRoot(document.getElementById("root")).render(y.jsx(At.StrictMode,{children:y.jsx(BU,{})}));
