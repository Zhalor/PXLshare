function lx(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function F0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var y={},ux={get exports(){return y},set exports(t){y=t}},zu={},S={},cx={get exports(){return S},set exports(t){S=t}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),hx=Symbol.for("react.portal"),dx=Symbol.for("react.fragment"),fx=Symbol.for("react.strict_mode"),px=Symbol.for("react.profiler"),mx=Symbol.for("react.provider"),gx=Symbol.for("react.context"),yx=Symbol.for("react.forward_ref"),vx=Symbol.for("react.suspense"),wx=Symbol.for("react.memo"),Ex=Symbol.for("react.lazy"),kg=Symbol.iterator;function _x(t){return t===null||typeof t!="object"?null:(t=kg&&t[kg]||t["@@iterator"],typeof t=="function"?t:null)}var j0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z0=Object.assign,V0={};function xs(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||j0}xs.prototype.isReactComponent={};xs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};xs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function B0(){}B0.prototype=xs.prototype;function Zf(t,e,n){this.props=t,this.context=e,this.refs=V0,this.updater=n||j0}var ep=Zf.prototype=new B0;ep.constructor=Zf;z0(ep,xs.prototype);ep.isPureReactComponent=!0;var Ig=Array.isArray,H0=Object.prototype.hasOwnProperty,tp={current:null},W0={key:!0,ref:!0,__self:!0,__source:!0};function q0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)H0.call(e,r)&&!W0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:tp.current}}function Sx(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function np(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function Cx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Tg=/\/+/g;function rh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cx(""+t.key):e.toString(36)}function yl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case hx:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+rh(o,0):r,Ig(i)?(n="",t!=null&&(n=t.replace(Tg,"$&/")+"/"),yl(i,e,n,"",function(u){return u})):i!=null&&(np(i)&&(i=Sx(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Tg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Ig(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+rh(s,a);o+=yl(s,e,n,l,i)}else if(l=_x(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+rh(s,a++),o+=yl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function $a(t,e,n){if(t==null)return t;var r=[],i=0;return yl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function xx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Nt={current:null},vl={transition:null},kx={ReactCurrentDispatcher:Nt,ReactCurrentBatchConfig:vl,ReactCurrentOwner:tp};ie.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!np(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=xs;ie.Fragment=dx;ie.Profiler=px;ie.PureComponent=Zf;ie.StrictMode=fx;ie.Suspense=vx;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kx;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=z0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=tp.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)H0.call(e,l)&&!W0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:gx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:mx,_context:t},t.Consumer=t};ie.createElement=q0;ie.createFactory=function(t){var e=q0.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:yx,render:t}};ie.isValidElement=np;ie.lazy=function(t){return{$$typeof:Ex,_payload:{_status:-1,_result:t},_init:xx}};ie.memo=function(t,e){return{$$typeof:wx,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=vl.transition;vl.transition={};try{t()}finally{vl.transition=e}};ie.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ie.useCallback=function(t,e){return Nt.current.useCallback(t,e)};ie.useContext=function(t){return Nt.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return Nt.current.useDeferredValue(t)};ie.useEffect=function(t,e){return Nt.current.useEffect(t,e)};ie.useId=function(){return Nt.current.useId()};ie.useImperativeHandle=function(t,e,n){return Nt.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return Nt.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return Nt.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return Nt.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return Nt.current.useReducer(t,e,n)};ie.useRef=function(t){return Nt.current.useRef(t)};ie.useState=function(t){return Nt.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return Nt.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return Nt.current.useTransition()};ie.version="18.2.0";(function(t){t.exports=ie})(cx);const At=F0(S),od=lx({__proto__:null,default:At},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ix=S,Tx=Symbol.for("react.element"),Rx=Symbol.for("react.fragment"),Ax=Object.prototype.hasOwnProperty,Px=Ix.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dx={key:!0,ref:!0,__self:!0,__source:!0};function G0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Ax.call(e,r)&&!Dx.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Tx,type:t,key:s,ref:o,props:i,_owner:Px.current}}zu.Fragment=Rx;zu.jsx=G0;zu.jsxs=G0;(function(t){t.exports=zu})(ux);var ad={},ld={},Nx={get exports(){return ld},set exports(t){ld=t}},Jt={},ud={},bx={get exports(){return ud},set exports(t){ud=t}},K0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,j){var H=T.length;T.push(j);e:for(;0<H;){var ne=H-1>>>1,b=T[ne];if(0<i(b,j))T[ne]=j,T[H]=b,H=ne;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var j=T[0],H=T.pop();if(H!==j){T[0]=H;e:for(var ne=0,b=T.length,O=b>>>1;ne<O;){var $=2*(ne+1)-1,K=T[$],C=$+1,se=T[C];if(0>i(K,H))C<b&&0>i(se,K)?(T[ne]=se,T[C]=H,ne=C):(T[ne]=K,T[$]=H,ne=$);else if(C<b&&0>i(se,H))T[ne]=se,T[C]=H,ne=C;else break e}}return j}function i(T,j){var H=T.sortIndex-j.sortIndex;return H!==0?H:T.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var j=n(u);j!==null;){if(j.callback===null)r(u);else if(j.startTime<=T)r(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(u)}}function _(T){if(w=!1,g(T),!v)if(n(l)!==null)v=!0,tt(x);else{var j=n(u);j!==null&&te(_,j.startTime-T)}}function x(T,j){v=!1,w&&(w=!1,p(N),N=-1),m=!0;var H=d;try{for(g(j),h=n(l);h!==null&&(!(h.expirationTime>j)||T&&!V());){var ne=h.callback;if(typeof ne=="function"){h.callback=null,d=h.priorityLevel;var b=ne(h.expirationTime<=j);j=t.unstable_now(),typeof b=="function"?h.callback=b:h===n(l)&&r(l),g(j)}else r(l);h=n(l)}if(h!==null)var O=!0;else{var $=n(u);$!==null&&te(_,$.startTime-j),O=!1}return O}finally{h=null,d=H,m=!1}}var P=!1,D=null,N=-1,Y=5,W=-1;function V(){return!(t.unstable_now()-W<Y)}function ye(){if(D!==null){var T=t.unstable_now();W=T;var j=!0;try{j=D(!0,T)}finally{j?$e():(P=!1,D=null)}}else P=!1}var $e;if(typeof f=="function")$e=function(){f(ye)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,Ie=Me.port2;Me.port1.onmessage=ye,$e=function(){Ie.postMessage(null)}}else $e=function(){E(ye,0)};function tt(T){D=T,P||(P=!0,$e())}function te(T,j){N=E(function(){T(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,tt(x))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var H=d;d=j;try{return T()}finally{d=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,j){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var H=d;d=T;try{return j()}finally{d=H}},t.unstable_scheduleCallback=function(T,j,H){var ne=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ne+H:ne):H=ne,T){case 1:var b=-1;break;case 2:b=250;break;case 5:b=1073741823;break;case 4:b=1e4;break;default:b=5e3}return b=H+b,T={id:c++,callback:j,priorityLevel:T,startTime:H,expirationTime:b,sortIndex:-1},H>ne?(T.sortIndex=H,e(u,T),n(l)===null&&T===n(u)&&(w?(p(N),N=-1):w=!0,te(_,H-ne))):(T.sortIndex=b,e(l,T),v||m||(v=!0,tt(x))),T},t.unstable_shouldYield=V,t.unstable_wrapCallback=function(T){var j=d;return function(){var H=d;d=j;try{return T.apply(this,arguments)}finally{d=H}}}})(K0);(function(t){t.exports=K0})(bx);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0=S,Yt=ud;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Y0=new Set,Ro={};function Ei(t,e){is(t,e),is(t+"Capture",e)}function is(t,e){for(Ro[t]=e,t=0;t<e.length;t++)Y0.add(e[t])}var Hn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cd=Object.prototype.hasOwnProperty,Lx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rg={},Ag={};function Ox(t){return cd.call(Ag,t)?!0:cd.call(Rg,t)?!1:Lx.test(t)?Ag[t]=!0:(Rg[t]=!0,!1)}function $x(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Mx(t,e,n,r){if(e===null||typeof e>"u"||$x(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ht[t]=new bt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ht[e]=new bt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ht[t]=new bt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ht[t]=new bt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ht[t]=new bt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ht[t]=new bt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ht[t]=new bt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ht[t]=new bt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ht[t]=new bt(t,5,!1,t.toLowerCase(),null,!1,!1)});var rp=/[\-:]([a-z])/g;function ip(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(rp,ip);ht[e]=new bt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(rp,ip);ht[e]=new bt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(rp,ip);ht[e]=new bt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ht[t]=new bt(t,1,!1,t.toLowerCase(),null,!1,!1)});ht.xlinkHref=new bt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ht[t]=new bt(t,1,!1,t.toLowerCase(),null,!0,!0)});function sp(t,e,n,r){var i=ht.hasOwnProperty(e)?ht[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Mx(e,n,i,r)&&(n=null),r||i===null?Ox(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var er=Q0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ma=Symbol.for("react.element"),Ni=Symbol.for("react.portal"),bi=Symbol.for("react.fragment"),op=Symbol.for("react.strict_mode"),hd=Symbol.for("react.profiler"),X0=Symbol.for("react.provider"),J0=Symbol.for("react.context"),ap=Symbol.for("react.forward_ref"),dd=Symbol.for("react.suspense"),fd=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),ir=Symbol.for("react.lazy"),Z0=Symbol.for("react.offscreen"),Pg=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=Pg&&t[Pg]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,ih;function eo(t){if(ih===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ih=e&&e[1]||""}return`
`+ih+t}var sh=!1;function oh(t,e){if(!t||sh)return"";sh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{sh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?eo(t):""}function Ux(t){switch(t.tag){case 5:return eo(t.type);case 16:return eo("Lazy");case 13:return eo("Suspense");case 19:return eo("SuspenseList");case 0:case 2:case 15:return t=oh(t.type,!1),t;case 11:return t=oh(t.type.render,!1),t;case 1:return t=oh(t.type,!0),t;default:return""}}function pd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bi:return"Fragment";case Ni:return"Portal";case hd:return"Profiler";case op:return"StrictMode";case dd:return"Suspense";case fd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case J0:return(t.displayName||"Context")+".Consumer";case X0:return(t._context.displayName||"Context")+".Provider";case ap:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case lp:return e=t.displayName||null,e!==null?e:pd(t.type)||"Memo";case ir:e=t._payload,t=t._init;try{return pd(t(e))}catch{}}return null}function Fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pd(e);case 8:return e===op?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ew(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function jx(t){var e=ew(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=jx(t))}function tw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ew(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function zl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function md(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Dg(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nw(t,e){e=e.checked,e!=null&&sp(t,"checked",e,!1)}function gd(t,e){nw(t,e);var n=Pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?yd(t,e.type,n):e.hasOwnProperty("defaultValue")&&yd(t,e.type,Pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ng(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function yd(t,e,n){(e!=="number"||zl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var to=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function vd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(to(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Pr(n)}}function rw(t,e){var n=Pr(e.value),r=Pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Lg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function iw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function wd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?iw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Fa,sw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Fa=Fa||document.createElement("div"),Fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var co={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zx=["Webkit","ms","Moz","O"];Object.keys(co).forEach(function(t){zx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),co[e]=co[t]})});function ow(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||co.hasOwnProperty(t)&&co[t]?(""+e).trim():e+"px"}function aw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ow(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Vx=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ed(t,e){if(e){if(Vx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function _d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sd=null;function up(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cd=null,Ki=null,Qi=null;function Og(t){if(t=ca(t)){if(typeof Cd!="function")throw Error(I(280));var e=t.stateNode;e&&(e=qu(e),Cd(t.stateNode,t.type,e))}}function lw(t){Ki?Qi?Qi.push(t):Qi=[t]:Ki=t}function uw(){if(Ki){var t=Ki,e=Qi;if(Qi=Ki=null,Og(t),e)for(t=0;t<e.length;t++)Og(e[t])}}function cw(t,e){return t(e)}function hw(){}var ah=!1;function dw(t,e,n){if(ah)return t(e,n);ah=!0;try{return cw(t,e,n)}finally{ah=!1,(Ki!==null||Qi!==null)&&(hw(),uw())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var r=qu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var xd=!1;if(Hn)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){xd=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{xd=!1}function Bx(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ho=!1,Vl=null,Bl=!1,kd=null,Hx={onError:function(t){ho=!0,Vl=t}};function Wx(t,e,n,r,i,s,o,a,l){ho=!1,Vl=null,Bx.apply(Hx,arguments)}function qx(t,e,n,r,i,s,o,a,l){if(Wx.apply(this,arguments),ho){if(ho){var u=Vl;ho=!1,Vl=null}else throw Error(I(198));Bl||(Bl=!0,kd=u)}}function _i(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function fw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function $g(t){if(_i(t)!==t)throw Error(I(188))}function Gx(t){var e=t.alternate;if(!e){if(e=_i(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return $g(i),t;if(s===r)return $g(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function pw(t){return t=Gx(t),t!==null?mw(t):null}function mw(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mw(t);if(e!==null)return e;t=t.sibling}return null}var gw=Yt.unstable_scheduleCallback,Mg=Yt.unstable_cancelCallback,Kx=Yt.unstable_shouldYield,Qx=Yt.unstable_requestPaint,Fe=Yt.unstable_now,Yx=Yt.unstable_getCurrentPriorityLevel,cp=Yt.unstable_ImmediatePriority,yw=Yt.unstable_UserBlockingPriority,Hl=Yt.unstable_NormalPriority,Xx=Yt.unstable_LowPriority,vw=Yt.unstable_IdlePriority,Vu=null,kn=null;function Jx(t){if(kn&&typeof kn.onCommitFiberRoot=="function")try{kn.onCommitFiberRoot(Vu,t,void 0,(t.current.flags&128)===128)}catch{}}var pn=Math.clz32?Math.clz32:tk,Zx=Math.log,ek=Math.LN2;function tk(t){return t>>>=0,t===0?32:31-(Zx(t)/ek|0)|0}var ja=64,za=4194304;function no(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=no(a):(s&=o,s!==0&&(r=no(s)))}else o=n&~i,o!==0?r=no(o):s!==0&&(r=no(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-pn(e),i=1<<n,r|=t[n],e&=~i;return r}function nk(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rk(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-pn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=nk(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Id(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ww(){var t=ja;return ja<<=1,!(ja&4194240)&&(ja=64),t}function lh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-pn(e),t[e]=n}function ik(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-pn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function hp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-pn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var me=0;function Ew(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var _w,dp,Sw,Cw,xw,Td=!1,Va=[],gr=null,yr=null,vr=null,Do=new Map,No=new Map,or=[],sk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ug(t,e){switch(t){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function Ws(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ca(e),e!==null&&dp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function ok(t,e,n,r,i){switch(e){case"focusin":return gr=Ws(gr,t,e,n,r,i),!0;case"dragenter":return yr=Ws(yr,t,e,n,r,i),!0;case"mouseover":return vr=Ws(vr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Do.set(s,Ws(Do.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,No.set(s,Ws(No.get(s)||null,t,e,n,r,i)),!0}return!1}function kw(t){var e=Gr(t.target);if(e!==null){var n=_i(e);if(n!==null){if(e=n.tag,e===13){if(e=fw(n),e!==null){t.blockedOn=e,xw(t.priority,function(){Sw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Sd=r,n.target.dispatchEvent(r),Sd=null}else return e=ca(n),e!==null&&dp(e),t.blockedOn=n,!1;e.shift()}return!0}function Fg(t,e,n){wl(t)&&n.delete(e)}function ak(){Td=!1,gr!==null&&wl(gr)&&(gr=null),yr!==null&&wl(yr)&&(yr=null),vr!==null&&wl(vr)&&(vr=null),Do.forEach(Fg),No.forEach(Fg)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Td||(Td=!0,Yt.unstable_scheduleCallback(Yt.unstable_NormalPriority,ak)))}function bo(t){function e(i){return qs(i,t)}if(0<Va.length){qs(Va[0],t);for(var n=1;n<Va.length;n++){var r=Va[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gr!==null&&qs(gr,t),yr!==null&&qs(yr,t),vr!==null&&qs(vr,t),Do.forEach(e),No.forEach(e),n=0;n<or.length;n++)r=or[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<or.length&&(n=or[0],n.blockedOn===null);)kw(n),n.blockedOn===null&&or.shift()}var Yi=er.ReactCurrentBatchConfig,ql=!0;function lk(t,e,n,r){var i=me,s=Yi.transition;Yi.transition=null;try{me=1,fp(t,e,n,r)}finally{me=i,Yi.transition=s}}function uk(t,e,n,r){var i=me,s=Yi.transition;Yi.transition=null;try{me=4,fp(t,e,n,r)}finally{me=i,Yi.transition=s}}function fp(t,e,n,r){if(ql){var i=Rd(t,e,n,r);if(i===null)vh(t,e,r,Gl,n),Ug(t,r);else if(ok(i,t,e,n,r))r.stopPropagation();else if(Ug(t,r),e&4&&-1<sk.indexOf(t)){for(;i!==null;){var s=ca(i);if(s!==null&&_w(s),s=Rd(t,e,n,r),s===null&&vh(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else vh(t,e,r,null,n)}}var Gl=null;function Rd(t,e,n,r){if(Gl=null,t=up(r),t=Gr(t),t!==null)if(e=_i(t),e===null)t=null;else if(n=e.tag,n===13){if(t=fw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function Iw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yx()){case cp:return 1;case yw:return 4;case Hl:case Xx:return 16;case vw:return 536870912;default:return 16}default:return 16}}var fr=null,pp=null,El=null;function Tw(){if(El)return El;var t,e=pp,n=e.length,r,i="value"in fr?fr.value:fr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return El=i.slice(t,1<r?1-r:void 0)}function _l(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ba(){return!0}function jg(){return!1}function Zt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ba:jg,this.isPropagationStopped=jg,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=Zt(ks),ua=Ae({},ks,{view:0,detail:0}),ck=Zt(ua),uh,ch,Gs,Bu=Ae({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Gs&&(Gs&&t.type==="mousemove"?(uh=t.screenX-Gs.screenX,ch=t.screenY-Gs.screenY):ch=uh=0,Gs=t),uh)},movementY:function(t){return"movementY"in t?t.movementY:ch}}),zg=Zt(Bu),hk=Ae({},Bu,{dataTransfer:0}),dk=Zt(hk),fk=Ae({},ua,{relatedTarget:0}),hh=Zt(fk),pk=Ae({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),mk=Zt(pk),gk=Ae({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yk=Zt(gk),vk=Ae({},ks,{data:0}),Vg=Zt(vk),wk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ek={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_k={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=_k[t])?!!e[t]:!1}function gp(){return Sk}var Ck=Ae({},ua,{key:function(t){if(t.key){var e=wk[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_l(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ek[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(t){return t.type==="keypress"?_l(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_l(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xk=Zt(Ck),kk=Ae({},Bu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bg=Zt(kk),Ik=Ae({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),Tk=Zt(Ik),Rk=Ae({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ak=Zt(Rk),Pk=Ae({},Bu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dk=Zt(Pk),Nk=[9,13,27,32],yp=Hn&&"CompositionEvent"in window,fo=null;Hn&&"documentMode"in document&&(fo=document.documentMode);var bk=Hn&&"TextEvent"in window&&!fo,Rw=Hn&&(!yp||fo&&8<fo&&11>=fo),Hg=String.fromCharCode(32),Wg=!1;function Aw(t,e){switch(t){case"keyup":return Nk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function Lk(t,e){switch(t){case"compositionend":return Pw(e);case"keypress":return e.which!==32?null:(Wg=!0,Hg);case"textInput":return t=e.data,t===Hg&&Wg?null:t;default:return null}}function Ok(t,e){if(Li)return t==="compositionend"||!yp&&Aw(t,e)?(t=Tw(),El=pp=fr=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Rw&&e.locale!=="ko"?null:e.data;default:return null}}var $k={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$k[t.type]:e==="textarea"}function Dw(t,e,n,r){lw(r),e=Kl(e,"onChange"),0<e.length&&(n=new mp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var po=null,Lo=null;function Mk(t){Vw(t,0)}function Hu(t){var e=Mi(t);if(tw(e))return t}function Uk(t,e){if(t==="change")return e}var Nw=!1;if(Hn){var dh;if(Hn){var fh="oninput"in document;if(!fh){var Gg=document.createElement("div");Gg.setAttribute("oninput","return;"),fh=typeof Gg.oninput=="function"}dh=fh}else dh=!1;Nw=dh&&(!document.documentMode||9<document.documentMode)}function Kg(){po&&(po.detachEvent("onpropertychange",bw),Lo=po=null)}function bw(t){if(t.propertyName==="value"&&Hu(Lo)){var e=[];Dw(e,Lo,t,up(t)),dw(Mk,e)}}function Fk(t,e,n){t==="focusin"?(Kg(),po=e,Lo=n,po.attachEvent("onpropertychange",bw)):t==="focusout"&&Kg()}function jk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Hu(Lo)}function zk(t,e){if(t==="click")return Hu(e)}function Vk(t,e){if(t==="input"||t==="change")return Hu(e)}function Bk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gn=typeof Object.is=="function"?Object.is:Bk;function Oo(t,e){if(gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!cd.call(e,i)||!gn(t[i],e[i]))return!1}return!0}function Qg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yg(t,e){var n=Qg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qg(n)}}function Lw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ow(){for(var t=window,e=zl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=zl(t.document)}return e}function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Hk(t){var e=Ow(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Lw(n.ownerDocument.documentElement,n)){if(r!==null&&vp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yg(n,s);var o=Yg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Wk=Hn&&"documentMode"in document&&11>=document.documentMode,Oi=null,Ad=null,mo=null,Pd=!1;function Xg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pd||Oi==null||Oi!==zl(r)||(r=Oi,"selectionStart"in r&&vp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),mo&&Oo(mo,r)||(mo=r,r=Kl(Ad,"onSelect"),0<r.length&&(e=new mp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $i={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},ph={},$w={};Hn&&($w=document.createElement("div").style,"AnimationEvent"in window||(delete $i.animationend.animation,delete $i.animationiteration.animation,delete $i.animationstart.animation),"TransitionEvent"in window||delete $i.transitionend.transition);function Wu(t){if(ph[t])return ph[t];if(!$i[t])return t;var e=$i[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $w)return ph[t]=e[n];return t}var Mw=Wu("animationend"),Uw=Wu("animationiteration"),Fw=Wu("animationstart"),jw=Wu("transitionend"),zw=new Map,Jg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $r(t,e){zw.set(t,e),Ei(e,[t])}for(var mh=0;mh<Jg.length;mh++){var gh=Jg[mh],qk=gh.toLowerCase(),Gk=gh[0].toUpperCase()+gh.slice(1);$r(qk,"on"+Gk)}$r(Mw,"onAnimationEnd");$r(Uw,"onAnimationIteration");$r(Fw,"onAnimationStart");$r("dblclick","onDoubleClick");$r("focusin","onFocus");$r("focusout","onBlur");$r(jw,"onTransitionEnd");is("onMouseEnter",["mouseout","mouseover"]);is("onMouseLeave",["mouseout","mouseover"]);is("onPointerEnter",["pointerout","pointerover"]);is("onPointerLeave",["pointerout","pointerover"]);Ei("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ei("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ei("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ei("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ei("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ro="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kk=new Set("cancel close invalid load scroll toggle".split(" ").concat(ro));function Zg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,qx(r,e,void 0,t),t.currentTarget=null}function Vw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;Zg(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;Zg(i,a,u),s=l}}}if(Bl)throw t=kd,Bl=!1,kd=null,t}function Ee(t,e){var n=e[Od];n===void 0&&(n=e[Od]=new Set);var r=t+"__bubble";n.has(r)||(Bw(e,t,2,!1),n.add(r))}function yh(t,e,n){var r=0;e&&(r|=4),Bw(n,t,r,e)}var Wa="_reactListening"+Math.random().toString(36).slice(2);function $o(t){if(!t[Wa]){t[Wa]=!0,Y0.forEach(function(n){n!=="selectionchange"&&(Kk.has(n)||yh(n,!1,t),yh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Wa]||(e[Wa]=!0,yh("selectionchange",!1,e))}}function Bw(t,e,n,r){switch(Iw(e)){case 1:var i=lk;break;case 4:i=uk;break;default:i=fp}n=i.bind(null,e,n,t),i=void 0,!xd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function vh(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Gr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}dw(function(){var u=s,c=up(n),h=[];e:{var d=zw.get(t);if(d!==void 0){var m=mp,v=t;switch(t){case"keypress":if(_l(n)===0)break e;case"keydown":case"keyup":m=xk;break;case"focusin":v="focus",m=hh;break;case"focusout":v="blur",m=hh;break;case"beforeblur":case"afterblur":m=hh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=zg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=dk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Tk;break;case Mw:case Uw:case Fw:m=mk;break;case jw:m=Ak;break;case"scroll":m=ck;break;case"wheel":m=Dk;break;case"copy":case"cut":case"paste":m=yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Bg}var w=(e&4)!==0,E=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,g;f!==null;){g=f;var _=g.stateNode;if(g.tag===5&&_!==null&&(g=_,p!==null&&(_=Po(f,p),_!=null&&w.push(Mo(f,_,g)))),E)break;f=f.return}0<w.length&&(d=new m(d,v,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Sd&&(v=n.relatedTarget||n.fromElement)&&(Gr(v)||v[Wn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Gr(v):null,v!==null&&(E=_i(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(w=zg,_="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Bg,_="onPointerLeave",p="onPointerEnter",f="pointer"),E=m==null?d:Mi(m),g=v==null?d:Mi(v),d=new w(_,f+"leave",m,n,c),d.target=E,d.relatedTarget=g,_=null,Gr(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=g,w.relatedTarget=E,_=w),E=_,m&&v)t:{for(w=m,p=v,f=0,g=w;g;g=Ai(g))f++;for(g=0,_=p;_;_=Ai(_))g++;for(;0<f-g;)w=Ai(w),f--;for(;0<g-f;)p=Ai(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=Ai(w),p=Ai(p)}w=null}else w=null;m!==null&&ey(h,d,m,w,!1),v!==null&&E!==null&&ey(h,E,v,w,!0)}}e:{if(d=u?Mi(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var x=Uk;else if(qg(d))if(Nw)x=Vk;else{x=jk;var P=Fk}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(x=zk);if(x&&(x=x(t,u))){Dw(h,x,n,c);break e}P&&P(t,d,u),t==="focusout"&&(P=d._wrapperState)&&P.controlled&&d.type==="number"&&yd(d,"number",d.value)}switch(P=u?Mi(u):window,t){case"focusin":(qg(P)||P.contentEditable==="true")&&(Oi=P,Ad=u,mo=null);break;case"focusout":mo=Ad=Oi=null;break;case"mousedown":Pd=!0;break;case"contextmenu":case"mouseup":case"dragend":Pd=!1,Xg(h,n,c);break;case"selectionchange":if(Wk)break;case"keydown":case"keyup":Xg(h,n,c)}var D;if(yp)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Li?Aw(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Rw&&n.locale!=="ko"&&(Li||N!=="onCompositionStart"?N==="onCompositionEnd"&&Li&&(D=Tw()):(fr=c,pp="value"in fr?fr.value:fr.textContent,Li=!0)),P=Kl(u,N),0<P.length&&(N=new Vg(N,t,null,n,c),h.push({event:N,listeners:P}),D?N.data=D:(D=Pw(n),D!==null&&(N.data=D)))),(D=bk?Lk(t,n):Ok(t,n))&&(u=Kl(u,"onBeforeInput"),0<u.length&&(c=new Vg("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=D))}Vw(h,e)})}function Mo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Kl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Po(t,n),s!=null&&r.unshift(Mo(t,s,i)),s=Po(t,e),s!=null&&r.push(Mo(t,s,i))),t=t.return}return r}function Ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ey(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Po(n,s),l!=null&&o.unshift(Mo(n,l,a))):i||(l=Po(n,s),l!=null&&o.push(Mo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Qk=/\r\n?/g,Yk=/\u0000|\uFFFD/g;function ty(t){return(typeof t=="string"?t:""+t).replace(Qk,`
`).replace(Yk,"")}function qa(t,e,n){if(e=ty(e),ty(t)!==e&&n)throw Error(I(425))}function Ql(){}var Dd=null,Nd=null;function bd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,Xk=typeof clearTimeout=="function"?clearTimeout:void 0,ny=typeof Promise=="function"?Promise:void 0,Jk=typeof queueMicrotask=="function"?queueMicrotask:typeof ny<"u"?function(t){return ny.resolve(null).then(t).catch(Zk)}:Ld;function Zk(t){setTimeout(function(){throw t})}function wh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),bo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bo(e)}function wr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ry(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Is=Math.random().toString(36).slice(2),_n="__reactFiber$"+Is,Uo="__reactProps$"+Is,Wn="__reactContainer$"+Is,Od="__reactEvents$"+Is,eI="__reactListeners$"+Is,tI="__reactHandles$"+Is;function Gr(t){var e=t[_n];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Wn]||n[_n]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ry(t);t!==null;){if(n=t[_n])return n;t=ry(t)}return e}t=n,n=t.parentNode}return null}function ca(t){return t=t[_n]||t[Wn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function qu(t){return t[Uo]||null}var $d=[],Ui=-1;function Mr(t){return{current:t}}function _e(t){0>Ui||(t.current=$d[Ui],$d[Ui]=null,Ui--)}function we(t,e){Ui++,$d[Ui]=t.current,t.current=e}var Dr={},xt=Mr(Dr),Ft=Mr(!1),si=Dr;function ss(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function jt(t){return t=t.childContextTypes,t!=null}function Yl(){_e(Ft),_e(xt)}function iy(t,e,n){if(xt.current!==Dr)throw Error(I(168));we(xt,e),we(Ft,n)}function Hw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,Fx(t)||"Unknown",i));return Ae({},n,r)}function Xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,si=xt.current,we(xt,t),we(Ft,Ft.current),!0}function sy(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=Hw(t,e,si),r.__reactInternalMemoizedMergedChildContext=t,_e(Ft),_e(xt),we(xt,t)):_e(Ft),we(Ft,n)}var $n=null,Gu=!1,Eh=!1;function Ww(t){$n===null?$n=[t]:$n.push(t)}function nI(t){Gu=!0,Ww(t)}function Ur(){if(!Eh&&$n!==null){Eh=!0;var t=0,e=me;try{var n=$n;for(me=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$n=null,Gu=!1}catch(i){throw $n!==null&&($n=$n.slice(t+1)),gw(cp,Ur),i}finally{me=e,Eh=!1}}return null}var Fi=[],ji=0,Jl=null,Zl=0,tn=[],nn=0,oi=null,Mn=1,Un="";function Vr(t,e){Fi[ji++]=Zl,Fi[ji++]=Jl,Jl=t,Zl=e}function qw(t,e,n){tn[nn++]=Mn,tn[nn++]=Un,tn[nn++]=oi,oi=t;var r=Mn;t=Un;var i=32-pn(r)-1;r&=~(1<<i),n+=1;var s=32-pn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Mn=1<<32-pn(e)+i|n<<i|r,Un=s+t}else Mn=1<<s|n<<i|r,Un=t}function wp(t){t.return!==null&&(Vr(t,1),qw(t,1,0))}function Ep(t){for(;t===Jl;)Jl=Fi[--ji],Fi[ji]=null,Zl=Fi[--ji],Fi[ji]=null;for(;t===oi;)oi=tn[--nn],tn[nn]=null,Un=tn[--nn],tn[nn]=null,Mn=tn[--nn],tn[nn]=null}var Gt=null,Ht=null,Ce=!1,fn=null;function Gw(t,e){var n=rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function oy(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=wr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Gt=t,Ht=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oi!==null?{id:Mn,overflow:Un}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Gt=t,Ht=null,!0):!1;default:return!1}}function Md(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(Ce){var e=Ht;if(e){var n=e;if(!oy(t,e)){if(Md(t))throw Error(I(418));e=wr(n.nextSibling);var r=Gt;e&&oy(t,e)?Gw(r,n):(t.flags=t.flags&-4097|2,Ce=!1,Gt=t)}}else{if(Md(t))throw Error(I(418));t.flags=t.flags&-4097|2,Ce=!1,Gt=t}}}function ay(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Gt=t}function Ga(t){if(t!==Gt)return!1;if(!Ce)return ay(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!bd(t.type,t.memoizedProps)),e&&(e=Ht)){if(Md(t))throw Kw(),Error(I(418));for(;e;)Gw(t,e),e=wr(e.nextSibling)}if(ay(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ht=wr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ht=null}}else Ht=Gt?wr(t.stateNode.nextSibling):null;return!0}function Kw(){for(var t=Ht;t;)t=wr(t.nextSibling)}function os(){Ht=Gt=null,Ce=!1}function _p(t){fn===null?fn=[t]:fn.push(t)}var rI=er.ReactCurrentBatchConfig;function hn(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var eu=Mr(null),tu=null,zi=null,Sp=null;function Cp(){Sp=zi=tu=null}function xp(t){var e=eu.current;_e(eu),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xi(t,e){tu=t,Sp=zi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ut=!0),t.firstContext=null)}function an(t){var e=t._currentValue;if(Sp!==t)if(t={context:t,memoizedValue:e,next:null},zi===null){if(tu===null)throw Error(I(308));zi=t,tu.dependencies={lanes:0,firstContext:t}}else zi=zi.next=t;return e}var Kr=null;function kp(t){Kr===null?Kr=[t]:Kr.push(t)}function Qw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,kp(e)):(n.next=i.next,i.next=n),e.interleaved=n,qn(t,r)}function qn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var sr=!1;function Ip(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,qn(t,n)}return i=r.interleaved,i===null?(e.next=e,kp(r)):(e.next=i.next,i.next=e),r.interleaved=e,qn(t,n)}function Sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hp(t,n)}}function ly(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,r){var i=t.updateQueue;sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,m=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(m,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(m,h,d):v,d==null)break e;h=Ae({},h,d);break e;case 2:sr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);li|=o,t.lanes=o,t.memoizedState=h}}function uy(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Xw=new Q0.Component().refs;function jd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ku={isMounted:function(t){return(t=t._reactInternals)?_i(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Sr(t),s=Vn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(mn(e,t,i,r),Sl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Dt(),i=Sr(t),s=Vn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Er(t,s,i),e!==null&&(mn(e,t,i,r),Sl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Dt(),r=Sr(t),i=Vn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Er(t,i,r),e!==null&&(mn(e,t,r,n),Sl(e,t,r))}};function cy(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function Jw(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=an(s):(i=jt(e)?si:xt.current,r=e.contextTypes,s=(r=r!=null)?ss(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function hy(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ku.enqueueReplaceState(e,e.state,null)}function zd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Xw,Ip(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=an(s):(s=jt(e)?si:xt.current,i.context=ss(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ku.enqueueReplaceState(i,i.state,null),nu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Xw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function dy(t){var e=t._init;return e(t._payload)}function Zw(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Cr(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,_){return f===null||f.tag!==6?(f=Th(g,p.mode,_),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,_){var x=g.type;return x===bi?c(p,f,g.props.children,_,g.key):f!==null&&(f.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ir&&dy(x)===f.type)?(_=i(f,g.props),_.ref=Ks(p,f,g),_.return=p,_):(_=Rl(g.type,g.key,g.props,null,p.mode,_),_.ref=Ks(p,f,g),_.return=p,_)}function u(p,f,g,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=Rh(g,p.mode,_),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,_,x){return f===null||f.tag!==7?(f=ei(g,p.mode,_,x),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Th(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ma:return g=Rl(f.type,f.key,f.props,null,p.mode,g),g.ref=Ks(p,null,f),g.return=p,g;case Ni:return f=Rh(f,p.mode,g),f.return=p,f;case ir:var _=f._init;return h(p,_(f._payload),g)}if(to(f)||Bs(f))return f=ei(f,p.mode,g,null),f.return=p,f;Ka(p,f)}return null}function d(p,f,g,_){var x=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return x!==null?null:a(p,f,""+g,_);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:return g.key===x?l(p,f,g,_):null;case Ni:return g.key===x?u(p,f,g,_):null;case ir:return x=g._init,d(p,f,x(g._payload),_)}if(to(g)||Bs(g))return x!==null?null:c(p,f,g,_,null);Ka(p,g)}return null}function m(p,f,g,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return p=p.get(g)||null,a(f,p,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ma:return p=p.get(_.key===null?g:_.key)||null,l(f,p,_,x);case Ni:return p=p.get(_.key===null?g:_.key)||null,u(f,p,_,x);case ir:var P=_._init;return m(p,f,g,P(_._payload),x)}if(to(_)||Bs(_))return p=p.get(g)||null,c(f,p,_,x,null);Ka(f,_)}return null}function v(p,f,g,_){for(var x=null,P=null,D=f,N=f=0,Y=null;D!==null&&N<g.length;N++){D.index>N?(Y=D,D=null):Y=D.sibling;var W=d(p,D,g[N],_);if(W===null){D===null&&(D=Y);break}t&&D&&W.alternate===null&&e(p,D),f=s(W,f,N),P===null?x=W:P.sibling=W,P=W,D=Y}if(N===g.length)return n(p,D),Ce&&Vr(p,N),x;if(D===null){for(;N<g.length;N++)D=h(p,g[N],_),D!==null&&(f=s(D,f,N),P===null?x=D:P.sibling=D,P=D);return Ce&&Vr(p,N),x}for(D=r(p,D);N<g.length;N++)Y=m(D,p,N,g[N],_),Y!==null&&(t&&Y.alternate!==null&&D.delete(Y.key===null?N:Y.key),f=s(Y,f,N),P===null?x=Y:P.sibling=Y,P=Y);return t&&D.forEach(function(V){return e(p,V)}),Ce&&Vr(p,N),x}function w(p,f,g,_){var x=Bs(g);if(typeof x!="function")throw Error(I(150));if(g=x.call(g),g==null)throw Error(I(151));for(var P=x=null,D=f,N=f=0,Y=null,W=g.next();D!==null&&!W.done;N++,W=g.next()){D.index>N?(Y=D,D=null):Y=D.sibling;var V=d(p,D,W.value,_);if(V===null){D===null&&(D=Y);break}t&&D&&V.alternate===null&&e(p,D),f=s(V,f,N),P===null?x=V:P.sibling=V,P=V,D=Y}if(W.done)return n(p,D),Ce&&Vr(p,N),x;if(D===null){for(;!W.done;N++,W=g.next())W=h(p,W.value,_),W!==null&&(f=s(W,f,N),P===null?x=W:P.sibling=W,P=W);return Ce&&Vr(p,N),x}for(D=r(p,D);!W.done;N++,W=g.next())W=m(D,p,N,W.value,_),W!==null&&(t&&W.alternate!==null&&D.delete(W.key===null?N:W.key),f=s(W,f,N),P===null?x=W:P.sibling=W,P=W);return t&&D.forEach(function(ye){return e(p,ye)}),Ce&&Vr(p,N),x}function E(p,f,g,_){if(typeof g=="object"&&g!==null&&g.type===bi&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ma:e:{for(var x=g.key,P=f;P!==null;){if(P.key===x){if(x=g.type,x===bi){if(P.tag===7){n(p,P.sibling),f=i(P,g.props.children),f.return=p,p=f;break e}}else if(P.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===ir&&dy(x)===P.type){n(p,P.sibling),f=i(P,g.props),f.ref=Ks(p,P,g),f.return=p,p=f;break e}n(p,P);break}else e(p,P);P=P.sibling}g.type===bi?(f=ei(g.props.children,p.mode,_,g.key),f.return=p,p=f):(_=Rl(g.type,g.key,g.props,null,p.mode,_),_.ref=Ks(p,f,g),_.return=p,p=_)}return o(p);case Ni:e:{for(P=g.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Rh(g,p.mode,_),f.return=p,p=f}return o(p);case ir:return P=g._init,E(p,f,P(g._payload),_)}if(to(g))return v(p,f,g,_);if(Bs(g))return w(p,f,g,_);Ka(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=Th(g,p.mode,_),f.return=p,p=f),o(p)):n(p,f)}return E}var as=Zw(!0),e1=Zw(!1),ha={},In=Mr(ha),Fo=Mr(ha),jo=Mr(ha);function Qr(t){if(t===ha)throw Error(I(174));return t}function Tp(t,e){switch(we(jo,e),we(Fo,t),we(In,ha),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:wd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=wd(e,t)}_e(In),we(In,e)}function ls(){_e(In),_e(Fo),_e(jo)}function t1(t){Qr(jo.current);var e=Qr(In.current),n=wd(e,t.type);e!==n&&(we(Fo,t),we(In,n))}function Rp(t){Fo.current===t&&(_e(In),_e(Fo))}var Te=Mr(0);function ru(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var _h=[];function Ap(){for(var t=0;t<_h.length;t++)_h[t]._workInProgressVersionPrimary=null;_h.length=0}var Cl=er.ReactCurrentDispatcher,Sh=er.ReactCurrentBatchConfig,ai=0,Re=null,He=null,Xe=null,iu=!1,go=!1,zo=0,iI=0;function pt(){throw Error(I(321))}function Pp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gn(t[n],e[n]))return!1;return!0}function Dp(t,e,n,r,i,s){if(ai=s,Re=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Cl.current=t===null||t.memoizedState===null?lI:uI,t=n(r,i),go){s=0;do{if(go=!1,zo=0,25<=s)throw Error(I(301));s+=1,Xe=He=null,e.updateQueue=null,Cl.current=cI,t=n(r,i)}while(go)}if(Cl.current=su,e=He!==null&&He.next!==null,ai=0,Xe=He=Re=null,iu=!1,e)throw Error(I(300));return t}function Np(){var t=zo!==0;return zo=0,t}function En(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xe===null?Re.memoizedState=Xe=t:Xe=Xe.next=t,Xe}function ln(){if(He===null){var t=Re.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var e=Xe===null?Re.memoizedState:Xe.next;if(e!==null)Xe=e,He=t;else{if(t===null)throw Error(I(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Xe===null?Re.memoizedState=Xe=t:Xe=Xe.next=t}return Xe}function Vo(t,e){return typeof e=="function"?e(t):e}function Ch(t){var e=ln(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=He,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ai&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,Re.lanes|=c,li|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,gn(r,e.memoizedState)||(Ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Re.lanes|=s,li|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function xh(t){var e=ln(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);gn(s,e.memoizedState)||(Ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function n1(){}function r1(t,e){var n=Re,r=ln(),i=e(),s=!gn(r.memoizedState,i);if(s&&(r.memoizedState=i,Ut=!0),r=r.queue,bp(o1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Xe!==null&&Xe.memoizedState.tag&1){if(n.flags|=2048,Bo(9,s1.bind(null,n,r,i,e),void 0,null),Je===null)throw Error(I(349));ai&30||i1(n,e,i)}return i}function i1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s1(t,e,n,r){e.value=n,e.getSnapshot=r,a1(e)&&l1(t)}function o1(t,e,n){return n(function(){a1(e)&&l1(t)})}function a1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gn(t,n)}catch{return!0}}function l1(t){var e=qn(t,1);e!==null&&mn(e,t,1,-1)}function fy(t){var e=En();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:t},e.queue=t,t=t.dispatch=aI.bind(null,Re,t),[e.memoizedState,t]}function Bo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Re.updateQueue,e===null?(e={lastEffect:null,stores:null},Re.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function u1(){return ln().memoizedState}function xl(t,e,n,r){var i=En();Re.flags|=t,i.memoizedState=Bo(1|e,n,void 0,r===void 0?null:r)}function Qu(t,e,n,r){var i=ln();r=r===void 0?null:r;var s=void 0;if(He!==null){var o=He.memoizedState;if(s=o.destroy,r!==null&&Pp(r,o.deps)){i.memoizedState=Bo(e,n,s,r);return}}Re.flags|=t,i.memoizedState=Bo(1|e,n,s,r)}function py(t,e){return xl(8390656,8,t,e)}function bp(t,e){return Qu(2048,8,t,e)}function c1(t,e){return Qu(4,2,t,e)}function h1(t,e){return Qu(4,4,t,e)}function d1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function f1(t,e,n){return n=n!=null?n.concat([t]):null,Qu(4,4,d1.bind(null,e,t),n)}function Lp(){}function p1(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function m1(t,e){var n=ln();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Pp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function g1(t,e,n){return ai&21?(gn(n,e)||(n=ww(),Re.lanes|=n,li|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ut=!0),t.memoizedState=n)}function sI(t,e){var n=me;me=n!==0&&4>n?n:4,t(!0);var r=Sh.transition;Sh.transition={};try{t(!1),e()}finally{me=n,Sh.transition=r}}function y1(){return ln().memoizedState}function oI(t,e,n){var r=Sr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},v1(t))w1(e,n);else if(n=Qw(t,e,n,r),n!==null){var i=Dt();mn(n,t,r,i),E1(n,e,r)}}function aI(t,e,n){var r=Sr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(v1(t))w1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,gn(a,o)){var l=e.interleaved;l===null?(i.next=i,kp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Qw(t,e,i,r),n!==null&&(i=Dt(),mn(n,t,r,i),E1(n,e,r))}}function v1(t){var e=t.alternate;return t===Re||e!==null&&e===Re}function w1(t,e){go=iu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function E1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,hp(t,n)}}var su={readContext:an,useCallback:pt,useContext:pt,useEffect:pt,useImperativeHandle:pt,useInsertionEffect:pt,useLayoutEffect:pt,useMemo:pt,useReducer:pt,useRef:pt,useState:pt,useDebugValue:pt,useDeferredValue:pt,useTransition:pt,useMutableSource:pt,useSyncExternalStore:pt,useId:pt,unstable_isNewReconciler:!1},lI={readContext:an,useCallback:function(t,e){return En().memoizedState=[t,e===void 0?null:e],t},useContext:an,useEffect:py,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,d1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=En();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=En();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=oI.bind(null,Re,t),[r.memoizedState,t]},useRef:function(t){var e=En();return t={current:t},e.memoizedState=t},useState:fy,useDebugValue:Lp,useDeferredValue:function(t){return En().memoizedState=t},useTransition:function(){var t=fy(!1),e=t[0];return t=sI.bind(null,t[1]),En().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Re,i=En();if(Ce){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),Je===null)throw Error(I(349));ai&30||i1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,py(o1.bind(null,r,s,t),[t]),r.flags|=2048,Bo(9,s1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=En(),e=Je.identifierPrefix;if(Ce){var n=Un,r=Mn;n=(r&~(1<<32-pn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=iI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},uI={readContext:an,useCallback:p1,useContext:an,useEffect:bp,useImperativeHandle:f1,useInsertionEffect:c1,useLayoutEffect:h1,useMemo:m1,useReducer:Ch,useRef:u1,useState:function(){return Ch(Vo)},useDebugValue:Lp,useDeferredValue:function(t){var e=ln();return g1(e,He.memoizedState,t)},useTransition:function(){var t=Ch(Vo)[0],e=ln().memoizedState;return[t,e]},useMutableSource:n1,useSyncExternalStore:r1,useId:y1,unstable_isNewReconciler:!1},cI={readContext:an,useCallback:p1,useContext:an,useEffect:bp,useImperativeHandle:f1,useInsertionEffect:c1,useLayoutEffect:h1,useMemo:m1,useReducer:xh,useRef:u1,useState:function(){return xh(Vo)},useDebugValue:Lp,useDeferredValue:function(t){var e=ln();return He===null?e.memoizedState=t:g1(e,He.memoizedState,t)},useTransition:function(){var t=xh(Vo)[0],e=ln().memoizedState;return[t,e]},useMutableSource:n1,useSyncExternalStore:r1,useId:y1,unstable_isNewReconciler:!1};function us(t,e){try{var n="",r=e;do n+=Ux(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function kh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var hI=typeof WeakMap=="function"?WeakMap:Map;function _1(t,e,n){n=Vn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){au||(au=!0,Jd=r),Vd(t,e)},n}function S1(t,e,n){n=Vn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Vd(t,e),typeof r!="function"&&(_r===null?_r=new Set([this]):_r.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function my(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new hI;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=kI.bind(null,t,e,n),e.then(t,t))}function gy(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function yy(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vn(-1,1),e.tag=2,Er(n,e,1))),n.lanes|=1),t)}var dI=er.ReactCurrentOwner,Ut=!1;function Rt(t,e,n,r){e.child=t===null?e1(e,null,n,r):as(e,t.child,n,r)}function vy(t,e,n,r,i){n=n.render;var s=e.ref;return Xi(e,i),r=Dp(t,e,n,r,s,i),n=Np(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ce&&n&&wp(e),e.flags|=1,Rt(t,e,r,i),e.child)}function wy(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vp(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,C1(t,e,s,r,i)):(t=Rl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return Gn(t,e,i)}return e.flags|=1,t=Cr(s,r),t.ref=e.ref,t.return=e,e.child=t}function C1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(Ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Ut=!0);else return e.lanes=t.lanes,Gn(t,e,i)}return Bd(t,e,n,r,i)}function x1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Bi,Bt),Bt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Bi,Bt),Bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,we(Bi,Bt),Bt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,we(Bi,Bt),Bt|=r;return Rt(t,e,i,n),e.child}function k1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bd(t,e,n,r,i){var s=jt(n)?si:xt.current;return s=ss(e,s),Xi(e,i),n=Dp(t,e,n,r,s,i),r=Np(),t!==null&&!Ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Gn(t,e,i)):(Ce&&r&&wp(e),e.flags|=1,Rt(t,e,n,i),e.child)}function Ey(t,e,n,r,i){if(jt(n)){var s=!0;Xl(e)}else s=!1;if(Xi(e,i),e.stateNode===null)kl(t,e),Jw(e,n,r),zd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=an(u):(u=jt(n)?si:xt.current,u=ss(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&hy(e,o,r,u),sr=!1;var d=e.memoizedState;o.state=d,nu(e,r,o,i),l=e.memoizedState,a!==r||d!==l||Ft.current||sr?(typeof c=="function"&&(jd(e,n,c,r),l=e.memoizedState),(a=sr||cy(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Yw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:hn(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=an(l):(l=jt(n)?si:xt.current,l=ss(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&hy(e,o,r,l),sr=!1,d=e.memoizedState,o.state=d,nu(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||Ft.current||sr?(typeof m=="function"&&(jd(e,n,m,r),v=e.memoizedState),(u=sr||cy(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return Hd(t,e,n,r,s,i)}function Hd(t,e,n,r,i,s){k1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sy(e,n,!1),Gn(t,e,s);r=e.stateNode,dI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=as(e,t.child,null,s),e.child=as(e,null,a,s)):Rt(t,e,a,s),e.memoizedState=r.state,i&&sy(e,n,!0),e.child}function I1(t){var e=t.stateNode;e.pendingContext?iy(t,e.pendingContext,e.pendingContext!==e.context):e.context&&iy(t,e.context,!1),Tp(t,e.containerInfo)}function _y(t,e,n,r,i){return os(),_p(i),e.flags|=256,Rt(t,e,n,r),e.child}var Wd={dehydrated:null,treeContext:null,retryLane:0};function qd(t){return{baseLanes:t,cachePool:null,transitions:null}}function T1(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),we(Te,i&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ju(o,r,0,null),t=ei(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qd(n),e.memoizedState=Wd,t):Op(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return fI(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Cr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Cr(a,s):(s=ei(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?qd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Wd,r}return s=t.child,t=s.sibling,r=Cr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Op(t,e){return e=Ju({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,r){return r!==null&&_p(r),as(e,t.child,null,n),t=Op(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function fI(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=kh(Error(I(422))),Qa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ju({mode:"visible",children:r.children},i,0,null),s=ei(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&as(e,t.child,null,o),e.child.memoizedState=qd(o),e.memoizedState=Wd,s);if(!(e.mode&1))return Qa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=kh(s,r,void 0),Qa(t,e,o,r)}if(a=(o&t.childLanes)!==0,Ut||a){if(r=Je,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,qn(t,i),mn(r,t,i,-1))}return zp(),r=kh(Error(I(421))),Qa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=II.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ht=wr(i.nextSibling),Gt=e,Ce=!0,fn=null,t!==null&&(tn[nn++]=Mn,tn[nn++]=Un,tn[nn++]=oi,Mn=t.id,Un=t.overflow,oi=e),e=Op(e,r.children),e.flags|=4096,e)}function Sy(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Fd(t.return,e,n)}function Ih(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function R1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Rt(t,e,r.children,n),r=Te.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sy(t,n,e);else if(t.tag===19)Sy(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Te,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ru(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ih(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ru(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ih(e,!0,n,null,s);break;case"together":Ih(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function kl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),li|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=Cr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Cr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function pI(t,e,n){switch(e.tag){case 3:I1(e),os();break;case 5:t1(e);break;case 1:jt(e.type)&&Xl(e);break;case 4:Tp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;we(eu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Te,Te.current&1),e.flags|=128,null):n&e.child.childLanes?T1(t,e,n):(we(Te,Te.current&1),t=Gn(t,e,n),t!==null?t.sibling:null);we(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return R1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),we(Te,Te.current),r)break;return null;case 22:case 23:return e.lanes=0,x1(t,e,n)}return Gn(t,e,n)}var A1,Gd,P1,D1;A1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gd=function(){};P1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Qr(In.current);var s=null;switch(n){case"input":i=md(t,i),r=md(t,r),s=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),s=[];break;case"textarea":i=vd(t,i),r=vd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ql)}Ed(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ro.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Ee("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};D1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Qs(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function mI(t,e,n){var r=e.pendingProps;switch(Ep(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mt(e),null;case 1:return jt(e.type)&&Yl(),mt(e),null;case 3:return r=e.stateNode,ls(),_e(Ft),_e(xt),Ap(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,fn!==null&&(tf(fn),fn=null))),Gd(t,e),mt(e),null;case 5:Rp(e);var i=Qr(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)P1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return mt(e),null}if(t=Qr(In.current),Ga(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_n]=e,r[Uo]=s,t=(e.mode&1)!==0,n){case"dialog":Ee("cancel",r),Ee("close",r);break;case"iframe":case"object":case"embed":Ee("load",r);break;case"video":case"audio":for(i=0;i<ro.length;i++)Ee(ro[i],r);break;case"source":Ee("error",r);break;case"img":case"image":case"link":Ee("error",r),Ee("load",r);break;case"details":Ee("toggle",r);break;case"input":Dg(r,s),Ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ee("invalid",r);break;case"textarea":bg(r,s),Ee("invalid",r)}Ed(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&qa(r.textContent,a,t),i=["children",""+a]):Ro.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Ee("scroll",r)}switch(n){case"input":Ua(r),Ng(r,s,!0);break;case"textarea":Ua(r),Lg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ql)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=iw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_n]=e,t[Uo]=r,A1(t,e,!1,!1),e.stateNode=t;e:{switch(o=_d(n,r),n){case"dialog":Ee("cancel",t),Ee("close",t),i=r;break;case"iframe":case"object":case"embed":Ee("load",t),i=r;break;case"video":case"audio":for(i=0;i<ro.length;i++)Ee(ro[i],t);i=r;break;case"source":Ee("error",t),i=r;break;case"img":case"image":case"link":Ee("error",t),Ee("load",t),i=r;break;case"details":Ee("toggle",t),i=r;break;case"input":Dg(t,r),i=md(t,r),Ee("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),Ee("invalid",t);break;case"textarea":bg(t,r),i=vd(t,r),Ee("invalid",t);break;default:i=r}Ed(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?aw(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&sw(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(t,l):typeof l=="number"&&Ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ro.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Ee("scroll",t):l!=null&&sp(t,s,l,o))}switch(n){case"input":Ua(t),Ng(t,r,!1);break;case"textarea":Ua(t),Lg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ql)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return mt(e),null;case 6:if(t&&e.stateNode!=null)D1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Qr(jo.current),Qr(In.current),Ga(e)){if(r=e.stateNode,n=e.memoizedProps,r[_n]=e,(s=r.nodeValue!==n)&&(t=Gt,t!==null))switch(t.tag){case 3:qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_n]=e,e.stateNode=r}return mt(e),null;case 13:if(_e(Te),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Ht!==null&&e.mode&1&&!(e.flags&128))Kw(),os(),e.flags|=98560,s=!1;else if(s=Ga(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[_n]=e}else os(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;mt(e),s=!1}else fn!==null&&(tf(fn),fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Te.current&1?qe===0&&(qe=3):zp())),e.updateQueue!==null&&(e.flags|=4),mt(e),null);case 4:return ls(),Gd(t,e),t===null&&$o(e.stateNode.containerInfo),mt(e),null;case 10:return xp(e.type._context),mt(e),null;case 17:return jt(e.type)&&Yl(),mt(e),null;case 19:if(_e(Te),s=e.memoizedState,s===null)return mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Qs(s,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ru(t),o!==null){for(e.flags|=128,Qs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Te,Te.current&1|2),e.child}t=t.sibling}s.tail!==null&&Fe()>cs&&(e.flags|=128,r=!0,Qs(s,!1),e.lanes=4194304)}else{if(!r)if(t=ru(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return mt(e),null}else 2*Fe()-s.renderingStartTime>cs&&n!==1073741824&&(e.flags|=128,r=!0,Qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Fe(),e.sibling=null,n=Te.current,we(Te,r?n&1|2:n&1),e):(mt(e),null);case 22:case 23:return jp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Bt&1073741824&&(mt(e),e.subtreeFlags&6&&(e.flags|=8192)):mt(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function gI(t,e){switch(Ep(e),e.tag){case 1:return jt(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ls(),_e(Ft),_e(xt),Ap(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Rp(e),null;case 13:if(_e(Te),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));os()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return _e(Te),null;case 4:return ls(),null;case 10:return xp(e.type._context),null;case 22:case 23:return jp(),null;case 24:return null;default:return null}}var Ya=!1,wt=!1,yI=typeof WeakSet=="function"?WeakSet:Set,M=null;function Vi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ne(t,e,r)}else n.current=null}function Kd(t,e,n){try{n()}catch(r){Ne(t,e,r)}}var Cy=!1;function vI(t,e){if(Dd=ql,t=Ow(),vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Nd={focusedElem:t,selectionRange:n},ql=!1,M=e;M!==null;)if(e=M,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,M=t;else for(;M!==null;){e=M;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:hn(e.type,w),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(_){Ne(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,M=t;break}M=e.return}return v=Cy,Cy=!1,v}function yo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Kd(e,n,s)}i=i.next}while(i!==r)}}function Yu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Qd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N1(t){var e=t.alternate;e!==null&&(t.alternate=null,N1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[_n],delete e[Uo],delete e[Od],delete e[eI],delete e[tI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function b1(t){return t.tag===5||t.tag===3||t.tag===4}function xy(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||b1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ql));else if(r!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function Xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}var st=null,dn=!1;function nr(t,e,n){for(n=n.child;n!==null;)L1(t,e,n),n=n.sibling}function L1(t,e,n){if(kn&&typeof kn.onCommitFiberUnmount=="function")try{kn.onCommitFiberUnmount(Vu,n)}catch{}switch(n.tag){case 5:wt||Vi(n,e);case 6:var r=st,i=dn;st=null,nr(t,e,n),st=r,dn=i,st!==null&&(dn?(t=st,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):st.removeChild(n.stateNode));break;case 18:st!==null&&(dn?(t=st,n=n.stateNode,t.nodeType===8?wh(t.parentNode,n):t.nodeType===1&&wh(t,n),bo(t)):wh(st,n.stateNode));break;case 4:r=st,i=dn,st=n.stateNode.containerInfo,dn=!0,nr(t,e,n),st=r,dn=i;break;case 0:case 11:case 14:case 15:if(!wt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Kd(n,e,o),i=i.next}while(i!==r)}nr(t,e,n);break;case 1:if(!wt&&(Vi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ne(n,e,a)}nr(t,e,n);break;case 21:nr(t,e,n);break;case 22:n.mode&1?(wt=(r=wt)||n.memoizedState!==null,nr(t,e,n),wt=r):nr(t,e,n);break;default:nr(t,e,n)}}function ky(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new yI),e.forEach(function(r){var i=TI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function cn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:st=a.stateNode,dn=!1;break e;case 3:st=a.stateNode.containerInfo,dn=!0;break e;case 4:st=a.stateNode.containerInfo,dn=!0;break e}a=a.return}if(st===null)throw Error(I(160));L1(s,o,i),st=null,dn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ne(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)O1(e,t),e=e.sibling}function O1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(cn(e,t),wn(t),r&4){try{yo(3,t,t.return),Yu(3,t)}catch(w){Ne(t,t.return,w)}try{yo(5,t,t.return)}catch(w){Ne(t,t.return,w)}}break;case 1:cn(e,t),wn(t),r&512&&n!==null&&Vi(n,n.return);break;case 5:if(cn(e,t),wn(t),r&512&&n!==null&&Vi(n,n.return),t.flags&32){var i=t.stateNode;try{Ao(i,"")}catch(w){Ne(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&nw(i,s),_d(a,o);var u=_d(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?aw(i,h):c==="dangerouslySetInnerHTML"?sw(i,h):c==="children"?Ao(i,h):sp(i,c,h,u)}switch(a){case"input":gd(i,s);break;case"textarea":rw(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Gi(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Gi(i,!!s.multiple,s.defaultValue,!0):Gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Uo]=s}catch(w){Ne(t,t.return,w)}}break;case 6:if(cn(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){Ne(t,t.return,w)}}break;case 3:if(cn(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(e.containerInfo)}catch(w){Ne(t,t.return,w)}break;case 4:cn(e,t),wn(t);break;case 13:cn(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Up=Fe())),r&4&&ky(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(wt=(u=wt)||c,cn(e,t),wt=u):cn(e,t),wn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(M=t,c=t.child;c!==null;){for(h=M=c;M!==null;){switch(d=M,m=d.child,d.tag){case 0:case 11:case 14:case 15:yo(4,d,d.return);break;case 1:Vi(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){Ne(r,n,w)}}break;case 5:Vi(d,d.return);break;case 22:if(d.memoizedState!==null){Ty(h);continue}}m!==null?(m.return=d,M=m):Ty(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=ow("display",o))}catch(w){Ne(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){Ne(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:cn(e,t),wn(t),r&4&&ky(t);break;case 21:break;default:cn(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(b1(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ao(i,""),r.flags&=-33);var s=xy(t);Xd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=xy(t);Yd(t,a,o);break;default:throw Error(I(161))}}catch(l){Ne(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function wI(t,e,n){M=t,$1(t)}function $1(t,e,n){for(var r=(t.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ya;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||wt;a=Ya;var u=wt;if(Ya=o,(wt=l)&&!u)for(M=i;M!==null;)o=M,l=o.child,o.tag===22&&o.memoizedState!==null?Ry(i):l!==null?(l.return=o,M=l):Ry(i);for(;s!==null;)M=s,$1(s),s=s.sibling;M=i,Ya=a,wt=u}Iy(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):Iy(t)}}function Iy(t){for(;M!==null;){var e=M;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:wt||Yu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!wt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:hn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&uy(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}uy(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&bo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}wt||e.flags&512&&Qd(e)}catch(d){Ne(e,e.return,d)}}if(e===t){M=null;break}if(n=e.sibling,n!==null){n.return=e.return,M=n;break}M=e.return}}function Ty(t){for(;M!==null;){var e=M;if(e===t){M=null;break}var n=e.sibling;if(n!==null){n.return=e.return,M=n;break}M=e.return}}function Ry(t){for(;M!==null;){var e=M;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Yu(4,e)}catch(l){Ne(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ne(e,i,l)}}var s=e.return;try{Qd(e)}catch(l){Ne(e,s,l)}break;case 5:var o=e.return;try{Qd(e)}catch(l){Ne(e,o,l)}}}catch(l){Ne(e,e.return,l)}if(e===t){M=null;break}var a=e.sibling;if(a!==null){a.return=e.return,M=a;break}M=e.return}}var EI=Math.ceil,ou=er.ReactCurrentDispatcher,$p=er.ReactCurrentOwner,sn=er.ReactCurrentBatchConfig,ae=0,Je=null,Ve=null,ut=0,Bt=0,Bi=Mr(0),qe=0,Ho=null,li=0,Xu=0,Mp=0,vo=null,$t=null,Up=0,cs=1/0,On=null,au=!1,Jd=null,_r=null,Xa=!1,pr=null,lu=0,wo=0,Zd=null,Il=-1,Tl=0;function Dt(){return ae&6?Fe():Il!==-1?Il:Il=Fe()}function Sr(t){return t.mode&1?ae&2&&ut!==0?ut&-ut:rI.transition!==null?(Tl===0&&(Tl=ww()),Tl):(t=me,t!==0||(t=window.event,t=t===void 0?16:Iw(t.type)),t):1}function mn(t,e,n,r){if(50<wo)throw wo=0,Zd=null,Error(I(185));la(t,n,r),(!(ae&2)||t!==Je)&&(t===Je&&(!(ae&2)&&(Xu|=n),qe===4&&ar(t,ut)),zt(t,r),n===1&&ae===0&&!(e.mode&1)&&(cs=Fe()+500,Gu&&Ur()))}function zt(t,e){var n=t.callbackNode;rk(t,e);var r=Wl(t,t===Je?ut:0);if(r===0)n!==null&&Mg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Mg(n),e===1)t.tag===0?nI(Ay.bind(null,t)):Ww(Ay.bind(null,t)),Jk(function(){!(ae&6)&&Ur()}),n=null;else{switch(Ew(r)){case 1:n=cp;break;case 4:n=yw;break;case 16:n=Hl;break;case 536870912:n=vw;break;default:n=Hl}n=H1(n,M1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function M1(t,e){if(Il=-1,Tl=0,ae&6)throw Error(I(327));var n=t.callbackNode;if(Ji()&&t.callbackNode!==n)return null;var r=Wl(t,t===Je?ut:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=uu(t,r);else{e=r;var i=ae;ae|=2;var s=F1();(Je!==t||ut!==e)&&(On=null,cs=Fe()+500,Zr(t,e));do try{CI();break}catch(a){U1(t,a)}while(1);Cp(),ou.current=s,ae=i,Ve!==null?e=0:(Je=null,ut=0,e=qe)}if(e!==0){if(e===2&&(i=Id(t),i!==0&&(r=i,e=ef(t,i))),e===1)throw n=Ho,Zr(t,0),ar(t,r),zt(t,Fe()),n;if(e===6)ar(t,r);else{if(i=t.current.alternate,!(r&30)&&!_I(i)&&(e=uu(t,r),e===2&&(s=Id(t),s!==0&&(r=s,e=ef(t,s))),e===1))throw n=Ho,Zr(t,0),ar(t,r),zt(t,Fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:Br(t,$t,On);break;case 3:if(ar(t,r),(r&130023424)===r&&(e=Up+500-Fe(),10<e)){if(Wl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Dt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ld(Br.bind(null,t,$t,On),e);break}Br(t,$t,On);break;case 4:if(ar(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-pn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*EI(r/1960))-r,10<r){t.timeoutHandle=Ld(Br.bind(null,t,$t,On),r);break}Br(t,$t,On);break;case 5:Br(t,$t,On);break;default:throw Error(I(329))}}}return zt(t,Fe()),t.callbackNode===n?M1.bind(null,t):null}function ef(t,e){var n=vo;return t.current.memoizedState.isDehydrated&&(Zr(t,e).flags|=256),t=uu(t,e),t!==2&&(e=$t,$t=n,e!==null&&tf(e)),t}function tf(t){$t===null?$t=t:$t.push.apply($t,t)}function _I(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!gn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ar(t,e){for(e&=~Mp,e&=~Xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-pn(e),r=1<<n;t[n]=-1,e&=~r}}function Ay(t){if(ae&6)throw Error(I(327));Ji();var e=Wl(t,0);if(!(e&1))return zt(t,Fe()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var r=Id(t);r!==0&&(e=r,n=ef(t,r))}if(n===1)throw n=Ho,Zr(t,0),ar(t,e),zt(t,Fe()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Br(t,$t,On),zt(t,Fe()),null}function Fp(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(cs=Fe()+500,Gu&&Ur())}}function ui(t){pr!==null&&pr.tag===0&&!(ae&6)&&Ji();var e=ae;ae|=1;var n=sn.transition,r=me;try{if(sn.transition=null,me=1,t)return t()}finally{me=r,sn.transition=n,ae=e,!(ae&6)&&Ur()}}function jp(){Bt=Bi.current,_e(Bi)}function Zr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Xk(n)),Ve!==null)for(n=Ve.return;n!==null;){var r=n;switch(Ep(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yl();break;case 3:ls(),_e(Ft),_e(xt),Ap();break;case 5:Rp(r);break;case 4:ls();break;case 13:_e(Te);break;case 19:_e(Te);break;case 10:xp(r.type._context);break;case 22:case 23:jp()}n=n.return}if(Je=t,Ve=t=Cr(t.current,null),ut=Bt=e,qe=0,Ho=null,Mp=Xu=li=0,$t=vo=null,Kr!==null){for(e=0;e<Kr.length;e++)if(n=Kr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Kr=null}return t}function U1(t,e){do{var n=Ve;try{if(Cp(),Cl.current=su,iu){for(var r=Re.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}iu=!1}if(ai=0,Xe=He=Re=null,go=!1,zo=0,$p.current=null,n===null||n.return===null){qe=1,Ho=e,Ve=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=ut,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=gy(o);if(m!==null){m.flags&=-257,yy(m,o,a,s,e),m.mode&1&&my(s,u,e),e=m,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){my(s,u,e),zp();break e}l=Error(I(426))}}else if(Ce&&a.mode&1){var E=gy(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),yy(E,o,a,s,e),_p(us(l,a));break e}}s=l=us(l,a),qe!==4&&(qe=2),vo===null?vo=[s]:vo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=_1(s,l,e);ly(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(_r===null||!_r.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=S1(s,a,e);ly(s,_);break e}}s=s.return}while(s!==null)}z1(n)}catch(x){e=x,Ve===n&&n!==null&&(Ve=n=n.return);continue}break}while(1)}function F1(){var t=ou.current;return ou.current=su,t===null?su:t}function zp(){(qe===0||qe===3||qe===2)&&(qe=4),Je===null||!(li&268435455)&&!(Xu&268435455)||ar(Je,ut)}function uu(t,e){var n=ae;ae|=2;var r=F1();(Je!==t||ut!==e)&&(On=null,Zr(t,e));do try{SI();break}catch(i){U1(t,i)}while(1);if(Cp(),ae=n,ou.current=r,Ve!==null)throw Error(I(261));return Je=null,ut=0,qe}function SI(){for(;Ve!==null;)j1(Ve)}function CI(){for(;Ve!==null&&!Kx();)j1(Ve)}function j1(t){var e=B1(t.alternate,t,Bt);t.memoizedProps=t.pendingProps,e===null?z1(t):Ve=e,$p.current=null}function z1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=gI(n,e),n!==null){n.flags&=32767,Ve=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{qe=6,Ve=null;return}}else if(n=mI(n,e,Bt),n!==null){Ve=n;return}if(e=e.sibling,e!==null){Ve=e;return}Ve=e=t}while(e!==null);qe===0&&(qe=5)}function Br(t,e,n){var r=me,i=sn.transition;try{sn.transition=null,me=1,xI(t,e,n,r)}finally{sn.transition=i,me=r}return null}function xI(t,e,n,r){do Ji();while(pr!==null);if(ae&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ik(t,s),t===Je&&(Ve=Je=null,ut=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,H1(Hl,function(){return Ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=sn.transition,sn.transition=null;var o=me;me=1;var a=ae;ae|=4,$p.current=null,vI(t,n),O1(n,t),Hk(Nd),ql=!!Dd,Nd=Dd=null,t.current=n,wI(n),Qx(),ae=a,me=o,sn.transition=s}else t.current=n;if(Xa&&(Xa=!1,pr=t,lu=i),s=t.pendingLanes,s===0&&(_r=null),Jx(n.stateNode),zt(t,Fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(au)throw au=!1,t=Jd,Jd=null,t;return lu&1&&t.tag!==0&&Ji(),s=t.pendingLanes,s&1?t===Zd?wo++:(wo=0,Zd=t):wo=0,Ur(),null}function Ji(){if(pr!==null){var t=Ew(lu),e=sn.transition,n=me;try{if(sn.transition=null,me=16>t?16:t,pr===null)var r=!1;else{if(t=pr,pr=null,lu=0,ae&6)throw Error(I(331));var i=ae;for(ae|=4,M=t.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:yo(8,c,s)}var h=c.child;if(h!==null)h.return=c,M=h;else for(;M!==null;){c=M;var d=c.sibling,m=c.return;if(N1(c),c===u){M=null;break}if(d!==null){d.return=m,M=d;break}M=m}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=t.current;for(M=f;M!==null;){o=M;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,M=g;else e:for(o=f;M!==null;){if(a=M,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Yu(9,a)}}catch(x){Ne(a,a.return,x)}if(a===o){M=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,M=_;break e}M=a.return}}if(ae=i,Ur(),kn&&typeof kn.onPostCommitFiberRoot=="function")try{kn.onPostCommitFiberRoot(Vu,t)}catch{}r=!0}return r}finally{me=n,sn.transition=e}}return!1}function Py(t,e,n){e=us(n,e),e=_1(t,e,1),t=Er(t,e,1),e=Dt(),t!==null&&(la(t,1,e),zt(t,e))}function Ne(t,e,n){if(t.tag===3)Py(t,t,n);else for(;e!==null;){if(e.tag===3){Py(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(_r===null||!_r.has(r))){t=us(n,t),t=S1(e,t,1),e=Er(e,t,1),t=Dt(),e!==null&&(la(e,1,t),zt(e,t));break}}e=e.return}}function kI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Dt(),t.pingedLanes|=t.suspendedLanes&n,Je===t&&(ut&n)===n&&(qe===4||qe===3&&(ut&130023424)===ut&&500>Fe()-Up?Zr(t,0):Mp|=n),zt(t,e)}function V1(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=Dt();t=qn(t,e),t!==null&&(la(t,e,n),zt(t,n))}function II(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),V1(t,n)}function TI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),V1(t,n)}var B1;B1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Ft.current)Ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ut=!1,pI(t,e,n);Ut=!!(t.flags&131072)}else Ut=!1,Ce&&e.flags&1048576&&qw(e,Zl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;kl(t,e),t=e.pendingProps;var i=ss(e,xt.current);Xi(e,n),i=Dp(null,e,r,t,i,n);var s=Np();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,jt(r)?(s=!0,Xl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ip(e),i.updater=Ku,e.stateNode=i,i._reactInternals=e,zd(e,r,t,n),e=Hd(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&wp(e),Rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(kl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=AI(r),t=hn(r,t),i){case 0:e=Bd(null,e,r,t,n);break e;case 1:e=Ey(null,e,r,t,n);break e;case 11:e=vy(null,e,r,t,n);break e;case 14:e=wy(null,e,r,hn(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Bd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),Ey(t,e,r,i,n);case 3:e:{if(I1(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Yw(t,e),nu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=us(Error(I(423)),e),e=_y(t,e,r,n,i);break e}else if(r!==i){i=us(Error(I(424)),e),e=_y(t,e,r,n,i);break e}else for(Ht=wr(e.stateNode.containerInfo.firstChild),Gt=e,Ce=!0,fn=null,n=e1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(os(),r===i){e=Gn(t,e,n);break e}Rt(t,e,r,n)}e=e.child}return e;case 5:return t1(e),t===null&&Ud(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,bd(r,i)?o=null:s!==null&&bd(r,s)&&(e.flags|=32),k1(t,e),Rt(t,e,o,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return T1(t,e,n);case 4:return Tp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=as(e,null,r,n):Rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),vy(t,e,r,i,n);case 7:return Rt(t,e,e.pendingProps,n),e.child;case 8:return Rt(t,e,e.pendingProps.children,n),e.child;case 12:return Rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,we(eu,r._currentValue),r._currentValue=o,s!==null)if(gn(s.value,o)){if(s.children===i.children&&!Ft.current){e=Gn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Vn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xi(e,n),i=an(i),r=r(i),e.flags|=1,Rt(t,e,r,n),e.child;case 14:return r=e.type,i=hn(r,e.pendingProps),i=hn(r.type,i),wy(t,e,r,i,n);case 15:return C1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:hn(r,i),kl(t,e),e.tag=1,jt(r)?(t=!0,Xl(e)):t=!1,Xi(e,n),Jw(e,r,i),zd(e,r,i,n),Hd(null,e,r,!0,t,n);case 19:return R1(t,e,n);case 22:return x1(t,e,n)}throw Error(I(156,e.tag))};function H1(t,e){return gw(t,e)}function RI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function rn(t,e,n,r){return new RI(t,e,n,r)}function Vp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function AI(t){if(typeof t=="function")return Vp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ap)return 11;if(t===lp)return 14}return 2}function Cr(t,e){var n=t.alternate;return n===null?(n=rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Rl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case bi:return ei(n.children,i,s,e);case op:o=8,i|=8;break;case hd:return t=rn(12,n,e,i|2),t.elementType=hd,t.lanes=s,t;case dd:return t=rn(13,n,e,i),t.elementType=dd,t.lanes=s,t;case fd:return t=rn(19,n,e,i),t.elementType=fd,t.lanes=s,t;case Z0:return Ju(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X0:o=10;break e;case J0:o=9;break e;case ap:o=11;break e;case lp:o=14;break e;case ir:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=rn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ei(t,e,n,r){return t=rn(7,t,r,e),t.lanes=n,t}function Ju(t,e,n,r){return t=rn(22,t,r,e),t.elementType=Z0,t.lanes=n,t.stateNode={isHidden:!1},t}function Th(t,e,n){return t=rn(6,t,null,e),t.lanes=n,t}function Rh(t,e,n){return e=rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function PI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lh(0),this.expirationTimes=lh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lh(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Bp(t,e,n,r,i,s,o,a,l){return t=new PI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ip(s),t}function DI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ni,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function W1(t){if(!t)return Dr;t=t._reactInternals;e:{if(_i(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(jt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(jt(n))return Hw(t,n,e)}return e}function q1(t,e,n,r,i,s,o,a,l){return t=Bp(n,r,!0,t,i,s,o,a,l),t.context=W1(null),n=t.current,r=Dt(),i=Sr(n),s=Vn(r,i),s.callback=e??null,Er(n,s,i),t.current.lanes=i,la(t,i,r),zt(t,r),t}function Zu(t,e,n,r){var i=e.current,s=Dt(),o=Sr(i);return n=W1(n),e.context===null?e.context=n:e.pendingContext=n,e=Vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Er(i,e,o),t!==null&&(mn(t,i,o,s),Sl(t,i,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Dy(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hp(t,e){Dy(t,e),(t=t.alternate)&&Dy(t,e)}function NI(){return null}var G1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Wp(t){this._internalRoot=t}ec.prototype.render=Wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));Zu(t,e,null,null)};ec.prototype.unmount=Wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ui(function(){Zu(null,t,null,null)}),e[Wn]=null}};function ec(t){this._internalRoot=t}ec.prototype.unstable_scheduleHydration=function(t){if(t){var e=Cw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<or.length&&e!==0&&e<or[n].priority;n++);or.splice(n,0,t),n===0&&kw(t)}};function qp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function tc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Ny(){}function bI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=cu(o);s.call(u)}}var o=q1(e,r,t,0,null,!1,!1,"",Ny);return t._reactRootContainer=o,t[Wn]=o.current,$o(t.nodeType===8?t.parentNode:t),ui(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=cu(l);a.call(u)}}var l=Bp(t,0,!1,null,null,!1,!1,"",Ny);return t._reactRootContainer=l,t[Wn]=l.current,$o(t.nodeType===8?t.parentNode:t),ui(function(){Zu(e,l,n,r)}),l}function nc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=cu(o);a.call(l)}}Zu(e,o,t,i)}else o=bI(n,e,t,i,r);return cu(o)}_w=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=no(e.pendingLanes);n!==0&&(hp(e,n|1),zt(e,Fe()),!(ae&6)&&(cs=Fe()+500,Ur()))}break;case 13:ui(function(){var r=qn(t,1);if(r!==null){var i=Dt();mn(r,t,1,i)}}),Hp(t,1)}};dp=function(t){if(t.tag===13){var e=qn(t,134217728);if(e!==null){var n=Dt();mn(e,t,134217728,n)}Hp(t,134217728)}};Sw=function(t){if(t.tag===13){var e=Sr(t),n=qn(t,e);if(n!==null){var r=Dt();mn(n,t,e,r)}Hp(t,e)}};Cw=function(){return me};xw=function(t,e){var n=me;try{return me=t,e()}finally{me=n}};Cd=function(t,e,n){switch(e){case"input":if(gd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=qu(r);if(!i)throw Error(I(90));tw(r),gd(r,i)}}}break;case"textarea":rw(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};cw=Fp;hw=ui;var LI={usingClientEntryPoint:!1,Events:[ca,Mi,qu,lw,uw,Fp]},Ys={findFiberByHostInstance:Gr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},OI={bundleType:Ys.bundleType,version:Ys.version,rendererPackageName:Ys.rendererPackageName,rendererConfig:Ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ys.findFiberByHostInstance||NI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ja.isDisabled&&Ja.supportsFiber)try{Vu=Ja.inject(OI),kn=Ja}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LI;Jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qp(e))throw Error(I(200));return DI(t,e,null,n)};Jt.createRoot=function(t,e){if(!qp(t))throw Error(I(299));var n=!1,r="",i=G1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Bp(t,1,!1,null,null,n,!1,r,i),t[Wn]=e.current,$o(t.nodeType===8?t.parentNode:t),new Wp(e)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=pw(e),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return ui(t)};Jt.hydrate=function(t,e,n){if(!tc(e))throw Error(I(200));return nc(null,t,e,!0,n)};Jt.hydrateRoot=function(t,e,n){if(!qp(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=G1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=q1(e,null,t,1,n??null,i,!1,s,o),t[Wn]=e.current,$o(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ec(e)};Jt.render=function(t,e,n){if(!tc(e))throw Error(I(200));return nc(null,t,e,!1,n)};Jt.unmountComponentAtNode=function(t){if(!tc(t))throw Error(I(40));return t._reactRootContainer?(ui(function(){nc(null,null,t,!1,function(){t._reactRootContainer=null,t[Wn]=null})}),!0):!1};Jt.unstable_batchedUpdates=Fp;Jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!tc(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return nc(t,e,n,!1,r)};Jt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Jt})(Nx);var by=ld;ad.createRoot=by.createRoot,ad.hydrateRoot=by.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wo(){return Wo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wo.apply(this,arguments)}var mr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(mr||(mr={}));const Ly="popstate";function $I(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return nf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hu(i)}return UI(e,n,null,t)}function Be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Gp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function MI(){return Math.random().toString(36).substr(2,8)}function Oy(t,e){return{usr:t.state,key:t.key,idx:e}}function nf(t,e,n,r){return n===void 0&&(n=null),Wo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ts(e):e,{state:n,key:e&&e.key||r||MI()})}function hu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ts(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function UI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=mr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Wo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=mr.Pop;let E=c(),p=E==null?null:E-u;u=E,l&&l({action:a,location:w.location,delta:p})}function d(E,p){a=mr.Push;let f=nf(w.location,E,p);n&&n(f,E),u=c()+1;let g=Oy(f,u),_=w.createHref(f);try{o.pushState(g,"",_)}catch{i.location.assign(_)}s&&l&&l({action:a,location:w.location,delta:1})}function m(E,p){a=mr.Replace;let f=nf(w.location,E,p);n&&n(f,E),u=c();let g=Oy(f,u),_=w.createHref(f);o.replaceState(g,"",_),s&&l&&l({action:a,location:w.location,delta:0})}function v(E){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof E=="string"?E:hu(E);return Be(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Ly,h),l=E,()=>{i.removeEventListener(Ly,h),l=null}},createHref(E){return e(i,E)},createURL:v,encodeLocation(E){let p=v(E);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:m,go(E){return o.go(E)}};return w}var $y;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})($y||($y={}));function FI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Ts(e):e,i=Kp(r.pathname||"/",n);if(i==null)return null;let s=K1(t);jI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=QI(s[a],JI(i));return o}function K1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=xr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),K1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:GI(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Q1(s.path))i(s,o,l)}),e}function Q1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Q1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function jI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:KI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const zI=/^:\w+$/,VI=3,BI=2,HI=1,WI=10,qI=-2,My=t=>t==="*";function GI(t,e){let n=t.split("/"),r=n.length;return n.some(My)&&(r+=qI),e&&(r+=BI),n.filter(i=>!My(i)).reduce((i,s)=>i+(zI.test(s)?VI:s===""?HI:WI),r)}function KI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function QI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=YI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:xr([i,c.pathname]),pathnameBase:nT(xr([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=xr([i,c.pathnameBase]))}return s}function YI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=XI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=ZI(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function XI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Gp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function JI(t){try{return decodeURI(t)}catch(e){return Gp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function ZI(t,e){try{return decodeURIComponent(t)}catch(n){return Gp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Kp(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function eT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ts(t):t;return{pathname:n?n.startsWith("/")?n:tT(n,e):e,search:rT(r),hash:iT(i)}}function tT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ah(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Y1(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function X1(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ts(t):(i=Wo({},t),Be(!i.pathname||!i.pathname.includes("?"),Ah("?","pathname","search",i)),Be(!i.pathname||!i.pathname.includes("#"),Ah("#","pathname","hash",i)),Be(!i.search||!i.search.includes("#"),Ah("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=eT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),nT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),rT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,iT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function sT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const aT=typeof Object.is=="function"?Object.is:oT,{useState:lT,useEffect:uT,useLayoutEffect:cT,useDebugValue:hT}=od;function dT(t,e,n){const r=e(),[{inst:i},s]=lT({inst:{value:r,getSnapshot:e}});return cT(()=>{i.value=r,i.getSnapshot=e,Ph(i)&&s({inst:i})},[t,r,e]),uT(()=>(Ph(i)&&s({inst:i}),t(()=>{Ph(i)&&s({inst:i})})),[t]),hT(r),r}function Ph(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!aT(n,r)}catch{return!0}}function fT(t,e,n){return e()}const pT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mT=!pT,gT=mT?fT:dT;"useSyncExternalStore"in od&&(t=>t.useSyncExternalStore)(od);const J1=S.createContext(null),Qp=S.createContext(null),da=S.createContext(null),rc=S.createContext(null),Rs=S.createContext({outlet:null,matches:[]}),Z1=S.createContext(null);function rf(){return rf=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},rf.apply(this,arguments)}function yT(t,e){let{relative:n}=e===void 0?{}:e;As()||Be(!1);let{basename:r,navigator:i}=S.useContext(da),{hash:s,pathname:o,search:a}=eE(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:xr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function As(){return S.useContext(rc)!=null}function Si(){return As()||Be(!1),S.useContext(rc).location}function Ps(){As()||Be(!1);let{basename:t,navigator:e}=S.useContext(da),{matches:n}=S.useContext(Rs),{pathname:r}=Si(),i=JSON.stringify(Y1(n).map(a=>a.pathnameBase)),s=S.useRef(!1);return S.useEffect(()=>{s.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=X1(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:xr([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function eE(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Rs),{pathname:i}=Si(),s=JSON.stringify(Y1(r).map(o=>o.pathnameBase));return S.useMemo(()=>X1(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function vT(t,e){As()||Be(!1);let{navigator:n}=S.useContext(da),r=S.useContext(Qp),{matches:i}=S.useContext(Rs),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Si(),u;if(e){var c;let w=typeof e=="string"?Ts(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||Be(!1),u=w}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",m=FI(t,{pathname:d}),v=ST(m&&m.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:xr([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:xr([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return e&&v?S.createElement(rc.Provider,{value:{location:rf({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:mr.Pop}},v):v}function wT(){let t=IT(),e=sT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}class ET extends S.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Rs.Provider,{value:this.props.routeContext},S.createElement(Z1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function _T(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(J1);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Rs.Provider,{value:e},r)}function ST(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Be(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=S.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=S.createElement(wT,null));let c=e.concat(r.slice(0,a+1)),h=()=>{let d=s;return l?d=u:o.route.Component?d=S.createElement(o.route.Component,null):o.route.element&&(d=o.route.element),S.createElement(_T,{match:o,routeContext:{outlet:s,matches:c},children:d})};return n&&(o.route.ErrorBoundary||o.route.errorElement||a===0)?S.createElement(ET,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var Uy;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Uy||(Uy={}));var du;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(du||(du={}));function CT(t){let e=S.useContext(Qp);return e||Be(!1),e}function xT(t){let e=S.useContext(Rs);return e||Be(!1),e}function kT(t){let e=xT(),n=e.matches[e.matches.length-1];return n.route.id||Be(!1),n.route.id}function IT(){var t;let e=S.useContext(Z1),n=CT(du.UseRouteError),r=kT(du.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function TT(t){let{to:e,replace:n,state:r,relative:i}=t;As()||Be(!1);let s=S.useContext(Qp),o=Ps();return S.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function Hr(t){Be(!1)}function RT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mr.Pop,navigator:s,static:o=!1}=t;As()&&Be(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Ts(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,v=S.useMemo(()=>{let w=Kp(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:d,key:m},navigationType:i}},[a,u,c,h,d,m,i]);return v==null?null:S.createElement(da.Provider,{value:l},S.createElement(rc.Provider,{children:n,value:v}))}function AT(t){let{children:e,location:n}=t,r=S.useContext(J1),i=r&&!e?r.router.routes:sf(e);return vT(i,n)}var Fy;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Fy||(Fy={}));new Promise(()=>{});function sf(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;let s=[...e,i];if(r.type===S.Fragment){n.push.apply(n,sf(r.props.children,s));return}r.type!==Hr&&Be(!1),!r.props.index||!r.props.children||Be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=sf(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function of(){return of=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},of.apply(this,arguments)}function PT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function DT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function NT(t,e){return t.button===0&&(!e||e==="_self")&&!DT(t)}const bT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function LT(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=$I({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(RT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const OT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$T=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lt=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=PT(e,bT),{basename:d}=S.useContext(da),m,v=!1;if(typeof u=="string"&&$T.test(u)&&(m=u,OT)){let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),_=Kp(g.pathname,d);g.origin===f.origin&&_!=null?u=_+g.search+g.hash:v=!0}let w=yT(u,{relative:i}),E=MT(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||E(f)}return S.createElement("a",of({},h,{href:m||w,onClick:v||s?r:p,ref:n,target:l}))});var jy;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(jy||(jy={}));var zy;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(zy||(zy={}));function MT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Ps(),l=Si(),u=eE(t,{relative:o});return S.useCallback(c=>{if(NT(c,n)){c.preventDefault();let h=r!==void 0?r:hu(l)===hu(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var qo={},UT={get exports(){return qo},set exports(t){qo=t}},ge={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var et=typeof Symbol=="function"&&Symbol.for,Yp=et?Symbol.for("react.element"):60103,Xp=et?Symbol.for("react.portal"):60106,ic=et?Symbol.for("react.fragment"):60107,sc=et?Symbol.for("react.strict_mode"):60108,oc=et?Symbol.for("react.profiler"):60114,ac=et?Symbol.for("react.provider"):60109,lc=et?Symbol.for("react.context"):60110,Jp=et?Symbol.for("react.async_mode"):60111,uc=et?Symbol.for("react.concurrent_mode"):60111,cc=et?Symbol.for("react.forward_ref"):60112,hc=et?Symbol.for("react.suspense"):60113,FT=et?Symbol.for("react.suspense_list"):60120,dc=et?Symbol.for("react.memo"):60115,fc=et?Symbol.for("react.lazy"):60116,jT=et?Symbol.for("react.block"):60121,zT=et?Symbol.for("react.fundamental"):60117,VT=et?Symbol.for("react.responder"):60118,BT=et?Symbol.for("react.scope"):60119;function en(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Yp:switch(t=t.type,t){case Jp:case uc:case ic:case oc:case sc:case hc:return t;default:switch(t=t&&t.$$typeof,t){case lc:case cc:case fc:case dc:case ac:return t;default:return e}}case Xp:return e}}}function tE(t){return en(t)===uc}ge.AsyncMode=Jp;ge.ConcurrentMode=uc;ge.ContextConsumer=lc;ge.ContextProvider=ac;ge.Element=Yp;ge.ForwardRef=cc;ge.Fragment=ic;ge.Lazy=fc;ge.Memo=dc;ge.Portal=Xp;ge.Profiler=oc;ge.StrictMode=sc;ge.Suspense=hc;ge.isAsyncMode=function(t){return tE(t)||en(t)===Jp};ge.isConcurrentMode=tE;ge.isContextConsumer=function(t){return en(t)===lc};ge.isContextProvider=function(t){return en(t)===ac};ge.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yp};ge.isForwardRef=function(t){return en(t)===cc};ge.isFragment=function(t){return en(t)===ic};ge.isLazy=function(t){return en(t)===fc};ge.isMemo=function(t){return en(t)===dc};ge.isPortal=function(t){return en(t)===Xp};ge.isProfiler=function(t){return en(t)===oc};ge.isStrictMode=function(t){return en(t)===sc};ge.isSuspense=function(t){return en(t)===hc};ge.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ic||t===uc||t===oc||t===sc||t===hc||t===FT||typeof t=="object"&&t!==null&&(t.$$typeof===fc||t.$$typeof===dc||t.$$typeof===ac||t.$$typeof===lc||t.$$typeof===cc||t.$$typeof===zT||t.$$typeof===VT||t.$$typeof===BT||t.$$typeof===jT)};ge.typeOf=en;(function(t){t.exports=ge})(UT);function HT(t){function e(b,O,$,K,C){for(var se=0,L=0,De=0,ce=0,fe,ee,nt=0,Lt=0,le,ft=le=fe=0,he=0,rt=0,zs=0,it=0,Oa=$.length,Vs=Oa-1,un,X="",Ue="",th="",nh="",tr;he<Oa;){if(ee=$.charCodeAt(he),he===Vs&&L+ce+De+se!==0&&(L!==0&&(ee=L===47?10:47),ce=De=se=0,Oa++,Vs++),L+ce+De+se===0){if(he===Vs&&(0<rt&&(X=X.replace(d,"")),0<X.trim().length)){switch(ee){case 32:case 9:case 59:case 13:case 10:break;default:X+=$.charAt(he)}ee=59}switch(ee){case 123:for(X=X.trim(),fe=X.charCodeAt(0),le=1,it=++he;he<Oa;){switch(ee=$.charCodeAt(he)){case 123:le++;break;case 125:le--;break;case 47:switch(ee=$.charCodeAt(he+1)){case 42:case 47:e:{for(ft=he+1;ft<Vs;++ft)switch($.charCodeAt(ft)){case 47:if(ee===42&&$.charCodeAt(ft-1)===42&&he+2!==ft){he=ft+1;break e}break;case 10:if(ee===47){he=ft+1;break e}}he=ft}}break;case 91:ee++;case 40:ee++;case 34:case 39:for(;he++<Vs&&$.charCodeAt(he)!==ee;);}if(le===0)break;he++}switch(le=$.substring(it,he),fe===0&&(fe=(X=X.replace(h,"").trim()).charCodeAt(0)),fe){case 64:switch(0<rt&&(X=X.replace(d,"")),ee=X.charCodeAt(1),ee){case 100:case 109:case 115:case 45:rt=O;break;default:rt=tt}if(le=e(O,rt,le,ee,C+1),it=le.length,0<T&&(rt=n(tt,X,zs),tr=a(3,le,rt,O,$e,ye,it,ee,C,K),X=rt.join(""),tr!==void 0&&(it=(le=tr.trim()).length)===0&&(ee=0,le="")),0<it)switch(ee){case 115:X=X.replace(P,o);case 100:case 109:case 45:le=X+"{"+le+"}";break;case 107:X=X.replace(f,"$1 $2"),le=X+"{"+le+"}",le=Ie===1||Ie===2&&s("@"+le,3)?"@-webkit-"+le+"@"+le:"@"+le;break;default:le=X+le,K===112&&(le=(Ue+=le,""))}else le="";break;default:le=e(O,n(O,X,zs),le,K,C+1)}th+=le,le=zs=rt=ft=fe=0,X="",ee=$.charCodeAt(++he);break;case 125:case 59:if(X=(0<rt?X.replace(d,""):X).trim(),1<(it=X.length))switch(ft===0&&(fe=X.charCodeAt(0),fe===45||96<fe&&123>fe)&&(it=(X=X.replace(" ",":")).length),0<T&&(tr=a(1,X,O,b,$e,ye,Ue.length,K,C,K))!==void 0&&(it=(X=tr.trim()).length)===0&&(X="\0\0"),fe=X.charCodeAt(0),ee=X.charCodeAt(1),fe){case 0:break;case 64:if(ee===105||ee===99){nh+=X+$.charAt(he);break}default:X.charCodeAt(it-1)!==58&&(Ue+=i(X,fe,ee,X.charCodeAt(2)))}zs=rt=ft=fe=0,X="",ee=$.charCodeAt(++he)}}switch(ee){case 13:case 10:L===47?L=0:1+fe===0&&K!==107&&0<X.length&&(rt=1,X+="\0"),0<T*H&&a(0,X,O,b,$e,ye,Ue.length,K,C,K),ye=1,$e++;break;case 59:case 125:if(L+ce+De+se===0){ye++;break}default:switch(ye++,un=$.charAt(he),ee){case 9:case 32:if(ce+se+L===0)switch(nt){case 44:case 58:case 9:case 32:un="";break;default:ee!==32&&(un=" ")}break;case 0:un="\\0";break;case 12:un="\\f";break;case 11:un="\\v";break;case 38:ce+L+se===0&&(rt=zs=1,un="\f"+un);break;case 108:if(ce+L+se+Me===0&&0<ft)switch(he-ft){case 2:nt===112&&$.charCodeAt(he-3)===58&&(Me=nt);case 8:Lt===111&&(Me=Lt)}break;case 58:ce+L+se===0&&(ft=he);break;case 44:L+De+ce+se===0&&(rt=1,un+="\r");break;case 34:case 39:L===0&&(ce=ce===ee?0:ce===0?ee:ce);break;case 91:ce+L+De===0&&se++;break;case 93:ce+L+De===0&&se--;break;case 41:ce+L+se===0&&De--;break;case 40:if(ce+L+se===0){if(fe===0)switch(2*nt+3*Lt){case 533:break;default:fe=1}De++}break;case 64:L+De+ce+se+ft+le===0&&(le=1);break;case 42:case 47:if(!(0<ce+se+De))switch(L){case 0:switch(2*ee+3*$.charCodeAt(he+1)){case 235:L=47;break;case 220:it=he,L=42}break;case 42:ee===47&&nt===42&&it+2!==he&&($.charCodeAt(it+2)===33&&(Ue+=$.substring(it,he+1)),un="",L=0)}}L===0&&(X+=un)}Lt=nt,nt=ee,he++}if(it=Ue.length,0<it){if(rt=O,0<T&&(tr=a(2,Ue,rt,b,$e,ye,it,K,C,K),tr!==void 0&&(Ue=tr).length===0))return nh+Ue+th;if(Ue=rt.join(",")+"{"+Ue+"}",Ie*Me!==0){switch(Ie!==2||s(Ue,2)||(Me=0),Me){case 111:Ue=Ue.replace(_,":-moz-$1")+Ue;break;case 112:Ue=Ue.replace(g,"::-webkit-input-$1")+Ue.replace(g,"::-moz-$1")+Ue.replace(g,":-ms-input-$1")+Ue}Me=0}}return nh+Ue+th}function n(b,O,$){var K=O.trim().split(E);O=K;var C=K.length,se=b.length;switch(se){case 0:case 1:var L=0;for(b=se===0?"":b[0]+" ";L<C;++L)O[L]=r(b,O[L],$).trim();break;default:var De=L=0;for(O=[];L<C;++L)for(var ce=0;ce<se;++ce)O[De++]=r(b[ce]+" ",K[L],$).trim()}return O}function r(b,O,$){var K=O.charCodeAt(0);switch(33>K&&(K=(O=O.trim()).charCodeAt(0)),K){case 38:return O.replace(p,"$1"+b.trim());case 58:return b.trim()+O.replace(p,"$1"+b.trim());default:if(0<1*$&&0<O.indexOf("\f"))return O.replace(p,(b.charCodeAt(0)===58?"":"$1")+b.trim())}return b+O}function i(b,O,$,K){var C=b+";",se=2*O+3*$+4*K;if(se===944){b=C.indexOf(":",9)+1;var L=C.substring(b,C.length-1).trim();return L=C.substring(0,b).trim()+L+";",Ie===1||Ie===2&&s(L,1)?"-webkit-"+L+L:L}if(Ie===0||Ie===2&&!s(C,1))return C;switch(se){case 1015:return C.charCodeAt(10)===97?"-webkit-"+C+C:C;case 951:return C.charCodeAt(3)===116?"-webkit-"+C+C:C;case 963:return C.charCodeAt(5)===110?"-webkit-"+C+C:C;case 1009:if(C.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+C+C;case 978:return"-webkit-"+C+"-moz-"+C+C;case 1019:case 983:return"-webkit-"+C+"-moz-"+C+"-ms-"+C+C;case 883:if(C.charCodeAt(8)===45)return"-webkit-"+C+C;if(0<C.indexOf("image-set(",11))return C.replace(V,"$1-webkit-$2")+C;break;case 932:if(C.charCodeAt(4)===45)switch(C.charCodeAt(5)){case 103:return"-webkit-box-"+C.replace("-grow","")+"-webkit-"+C+"-ms-"+C.replace("grow","positive")+C;case 115:return"-webkit-"+C+"-ms-"+C.replace("shrink","negative")+C;case 98:return"-webkit-"+C+"-ms-"+C.replace("basis","preferred-size")+C}return"-webkit-"+C+"-ms-"+C+C;case 964:return"-webkit-"+C+"-ms-flex-"+C+C;case 1023:if(C.charCodeAt(8)!==99)break;return L=C.substring(C.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+L+"-webkit-"+C+"-ms-flex-pack"+L+C;case 1005:return v.test(C)?C.replace(m,":-webkit-")+C.replace(m,":-moz-")+C:C;case 1e3:switch(L=C.substring(13).trim(),O=L.indexOf("-")+1,L.charCodeAt(0)+L.charCodeAt(O)){case 226:L=C.replace(x,"tb");break;case 232:L=C.replace(x,"tb-rl");break;case 220:L=C.replace(x,"lr");break;default:return C}return"-webkit-"+C+"-ms-"+L+C;case 1017:if(C.indexOf("sticky",9)===-1)break;case 975:switch(O=(C=b).length-10,L=(C.charCodeAt(O)===33?C.substring(0,O):C).substring(b.indexOf(":",7)+1).trim(),se=L.charCodeAt(0)+(L.charCodeAt(7)|0)){case 203:if(111>L.charCodeAt(8))break;case 115:C=C.replace(L,"-webkit-"+L)+";"+C;break;case 207:case 102:C=C.replace(L,"-webkit-"+(102<se?"inline-":"")+"box")+";"+C.replace(L,"-webkit-"+L)+";"+C.replace(L,"-ms-"+L+"box")+";"+C}return C+";";case 938:if(C.charCodeAt(5)===45)switch(C.charCodeAt(6)){case 105:return L=C.replace("-items",""),"-webkit-"+C+"-webkit-box-"+L+"-ms-flex-"+L+C;case 115:return"-webkit-"+C+"-ms-flex-item-"+C.replace(N,"")+C;default:return"-webkit-"+C+"-ms-flex-line-pack"+C.replace("align-content","").replace(N,"")+C}break;case 973:case 989:if(C.charCodeAt(3)!==45||C.charCodeAt(4)===122)break;case 931:case 953:if(W.test(b)===!0)return(L=b.substring(b.indexOf(":")+1)).charCodeAt(0)===115?i(b.replace("stretch","fill-available"),O,$,K).replace(":fill-available",":stretch"):C.replace(L,"-webkit-"+L)+C.replace(L,"-moz-"+L.replace("fill-",""))+C;break;case 962:if(C="-webkit-"+C+(C.charCodeAt(5)===102?"-ms-"+C:"")+C,$+K===211&&C.charCodeAt(13)===105&&0<C.indexOf("transform",10))return C.substring(0,C.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+C}return C}function s(b,O){var $=b.indexOf(O===1?":":"{"),K=b.substring(0,O!==3?$:10);return $=b.substring($+1,b.length-1),j(O!==2?K:K.replace(Y,"$1"),$,O)}function o(b,O){var $=i(O,O.charCodeAt(0),O.charCodeAt(1),O.charCodeAt(2));return $!==O+";"?$.replace(D," or ($1)").substring(4):"("+O+")"}function a(b,O,$,K,C,se,L,De,ce,fe){for(var ee=0,nt=O,Lt;ee<T;++ee)switch(Lt=te[ee].call(c,b,nt,$,K,C,se,L,De,ce,fe)){case void 0:case!1:case!0:case null:break;default:nt=Lt}if(nt!==O)return nt}function l(b){switch(b){case void 0:case null:T=te.length=0;break;default:if(typeof b=="function")te[T++]=b;else if(typeof b=="object")for(var O=0,$=b.length;O<$;++O)l(b[O]);else H=!!b|0}return l}function u(b){return b=b.prefix,b!==void 0&&(j=null,b?typeof b!="function"?Ie=1:(Ie=2,j=b):Ie=0),u}function c(b,O){var $=b;if(33>$.charCodeAt(0)&&($=$.trim()),ne=$,$=[ne],0<T){var K=a(-1,O,$,$,$e,ye,0,0,0,0);K!==void 0&&typeof K=="string"&&(O=K)}var C=e(tt,$,O,0,0);return 0<T&&(K=a(-2,C,$,$,$e,ye,C.length,0,0,0),K!==void 0&&(C=K)),ne="",Me=0,ye=$e=1,C}var h=/^\0+/g,d=/[\0\r\f]/g,m=/: */g,v=/zoo|gra/,w=/([,: ])(transform)/g,E=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,g=/::(place)/g,_=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,D=/([\s\S]*?);/g,N=/-self|flex-/g,Y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,W=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,ye=1,$e=1,Me=0,Ie=1,tt=[],te=[],T=0,j=null,H=0,ne="";return c.use=l,c.set=u,t!==void 0&&u(t),c}var WT={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function qT(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var GT=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Vy=qT(function(t){return GT.test(t)||t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)<91}),Zp=qo,KT={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},QT={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},YT={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},nE={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},em={};em[Zp.ForwardRef]=YT;em[Zp.Memo]=nE;function By(t){return Zp.isMemo(t)?nE:em[t.$$typeof]||KT}var XT=Object.defineProperty,JT=Object.getOwnPropertyNames,Hy=Object.getOwnPropertySymbols,ZT=Object.getOwnPropertyDescriptor,eR=Object.getPrototypeOf,Wy=Object.prototype;function rE(t,e,n){if(typeof e!="string"){if(Wy){var r=eR(e);r&&r!==Wy&&rE(t,r,n)}var i=JT(e);Hy&&(i=i.concat(Hy(e)));for(var s=By(t),o=By(e),a=0;a<i.length;++a){var l=i[a];if(!QT[l]&&!(n&&n[l])&&!(o&&o[l])&&!(s&&s[l])){var u=ZT(e,l);try{XT(t,l,u)}catch{}}}}return t}var tR=rE;function Cn(){return(Cn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var qy=function(t,e){for(var n=[t[0]],r=0,i=e.length;r<i;r+=1)n.push(e[r],t[r+1]);return n},af=function(t){return t!==null&&typeof t=="object"&&(t.toString?t.toString():Object.prototype.toString.call(t))==="[object Object]"&&!qo.typeOf(t)},fu=Object.freeze([]),kr=Object.freeze({});function Go(t){return typeof t=="function"}function Gy(t){return t.displayName||t.name||"Component"}function tm(t){return t&&typeof t.styledComponentId=="string"}var hs=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",nm=typeof window<"u"&&"HTMLElement"in window,nR=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),rR={};function fa(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+t+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var iR=function(){function t(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var e=t.prototype;return e.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},e.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&fa(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(n+1),u=0,c=r.length;u<c;u++)this.tag.insertRule(l,r[u])&&(this.groupSizes[n]++,l++)},e.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},e.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,a=s;a<o;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},t}(),Al=new Map,pu=new Map,Eo=1,Za=function(t){if(Al.has(t))return Al.get(t);for(;pu.has(Eo);)Eo++;var e=Eo++;return Al.set(t,e),pu.set(e,t),e},sR=function(t){return pu.get(t)},oR=function(t,e){e>=Eo&&(Eo=e+1),Al.set(t,e),pu.set(e,t)},aR="style["+hs+'][data-styled-version="5.3.9"]',lR=new RegExp("^"+hs+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),uR=function(t,e,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&t.registerName(e,r)},cR=function(t,e){for(var n=(e.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var a=o.match(lR);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(oR(u,l),uR(t,u,a[3]),t.getTag().insertRules(l,r)),r.length=0}else r.push(o)}}},hR=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},iE=function(t){var e=document.head,n=t||e,r=document.createElement("style"),i=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(hs))return c}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(hs,"active"),r.setAttribute("data-styled-version","5.3.9");var o=hR();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},dR=function(){function t(n){var r=this.element=iE(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===i)return l}fa(17)}(r),this.length=0}var e=t.prototype;return e.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},e.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},e.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},t}(),fR=function(){function t(n){var r=this.element=iE(n);this.nodes=r.childNodes,this.length=0}var e=t.prototype;return e.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},e.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},e.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},t}(),pR=function(){function t(n){this.rules=[],this.length=0}var e=t.prototype;return e.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},e.deleteRule=function(n){this.rules.splice(n,1),this.length--},e.getRule=function(n){return n<this.length?this.rules[n]:""},t}(),Ky=nm,mR={isServer:!nm,useCSSOMInjection:!nR},mu=function(){function t(n,r,i){n===void 0&&(n=kr),r===void 0&&(r={}),this.options=Cn({},mR,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&nm&&Ky&&(Ky=!1,function(s){for(var o=document.querySelectorAll(aR),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(hs)!=="active"&&(cR(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}t.registerId=function(n){return Za(n)};var e=t.prototype;return e.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new t(Cn({},this.options,{},n),this.gs,r&&this.names||void 0)},e.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},e.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new pR(o):s?new dR(o):new fR(o),new iR(n)));var n,r,i,s,o},e.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},e.registerName=function(n,r){if(Za(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},e.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(Za(n),i)},e.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},e.clearRules=function(n){this.getTag().clearGroup(Za(n)),this.clearNames(n)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var a=sR(o);if(a!==void 0){var l=n.names.get(a),u=r.getGroup(o);if(l&&u&&l.size){var c=hs+".g"+o+'[id="'+a+'"]',h="";l!==void 0&&l.forEach(function(d){d.length>0&&(h+=d+",")}),s+=""+u+c+'{content:"'+h+`"}/*!sc*/
`}}}return s}(this)},t}(),gR=/(a)(d)/gi,Qy=function(t){return String.fromCharCode(t+(t>25?39:97))};function lf(t){var e,n="";for(e=Math.abs(t);e>52;e=e/52|0)n=Qy(e%52)+n;return(Qy(e%52)+n).replace(gR,"$1-$2")}var Hi=function(t,e){for(var n=e.length;n;)t=33*t^e.charCodeAt(--n);return t},sE=function(t){return Hi(5381,t)};function oE(t){for(var e=0;e<t.length;e+=1){var n=t[e];if(Go(n)&&!tm(n))return!1}return!0}var yR=sE("5.3.9"),vR=function(){function t(e,n,r){this.rules=e,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&oE(e),this.componentId=n,this.baseHash=Hi(yR,n),this.baseStyle=r,mu.registerId(n)}return t.prototype.generateAndInjectStyles=function(e,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=ci(this.rules,e,n,r).join(""),a=lf(Hi(this.baseHash,o)>>>0);if(!n.hasNameForId(i,a)){var l=r(o,"."+a,void 0,i);n.insertRules(i,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=Hi(this.baseHash,r.hash),h="",d=0;d<u;d++){var m=this.rules[d];if(typeof m=="string")h+=m;else if(m){var v=ci(m,e,n,r),w=Array.isArray(v)?v.join(""):v;c=Hi(c,w+d),h+=w}}if(h){var E=lf(c>>>0);if(!n.hasNameForId(i,E)){var p=r(h,"."+E,void 0,i);n.insertRules(i,E,p)}s.push(E)}}return s.join(" ")},t}(),wR=/^\s*\/\/.*$/gm,ER=[":","[",".","#"];function _R(t){var e,n,r,i,s=t===void 0?kr:t,o=s.options,a=o===void 0?kr:o,l=s.plugins,u=l===void 0?fu:l,c=new HT(a),h=[],d=function(w){function E(p){if(p)try{w(p+"}")}catch{}}return function(p,f,g,_,x,P,D,N,Y,W){switch(p){case 1:if(Y===0&&f.charCodeAt(0)===64)return w(f+";"),"";break;case 2:if(N===0)return f+"/*|*/";break;case 3:switch(N){case 102:case 112:return w(g[0]+f),"";default:return f+(W===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(E)}}}(function(w){h.push(w)}),m=function(w,E,p){return E===0&&ER.indexOf(p[n.length])!==-1||p.match(i)?w:"."+e};function v(w,E,p,f){f===void 0&&(f="&");var g=w.replace(wR,""),_=E&&p?p+" "+E+" { "+g+" }":g;return e=f,n=E,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),c(p||!E?"":E,_)}return c.use([].concat(u,[function(w,E,p){w===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,m))},d,function(w){if(w===-2){var E=h;return h=[],E}}])),v.hash=u.length?u.reduce(function(w,E){return E.name||fa(15),Hi(w,E.name)},5381).toString():"",v}var aE=At.createContext();aE.Consumer;var lE=At.createContext(),SR=(lE.Consumer,new mu),uf=_R();function uE(){return S.useContext(aE)||SR}function cE(){return S.useContext(lE)||uf}var hE=function(){function t(e,n){var r=this;this.inject=function(i,s){s===void 0&&(s=uf);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return fa(12,String(r.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=n}return t.prototype.getName=function(e){return e===void 0&&(e=uf),this.name+e.hash},t}(),CR=/([A-Z])/,xR=/([A-Z])/g,kR=/^ms-/,IR=function(t){return"-"+t.toLowerCase()};function Yy(t){return CR.test(t)?t.replace(xR,IR).replace(kR,"-ms-"):t}var Xy=function(t){return t==null||t===!1||t===""};function ci(t,e,n,r){if(Array.isArray(t)){for(var i,s=[],o=0,a=t.length;o<a;o+=1)(i=ci(t[o],e,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Xy(t))return"";if(tm(t))return"."+t.styledComponentId;if(Go(t)){if(typeof(u=t)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return t;var l=t(e);return ci(l,e,n,r)}var u;return t instanceof hE?n?(t.inject(n,r),t.getName(r)):t:af(t)?function c(h,d){var m,v,w=[];for(var E in h)h.hasOwnProperty(E)&&!Xy(h[E])&&(Array.isArray(h[E])&&h[E].isCss||Go(h[E])?w.push(Yy(E)+":",h[E],";"):af(h[E])?w.push.apply(w,c(h[E],E)):w.push(Yy(E)+": "+(m=E,(v=h[E])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||m in WT?String(v).trim():v+"px")+";"));return d?[d+" {"].concat(w,["}"]):w}(t):t.toString()}var Jy=function(t){return Array.isArray(t)&&(t.isCss=!0),t};function rm(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return Go(t)||af(t)?Jy(ci(qy(fu,[t].concat(n)))):n.length===0&&t.length===1&&typeof t[0]=="string"?t:Jy(ci(qy(t,n)))}var dE=function(t,e,n){return n===void 0&&(n=kr),t.theme!==n.theme&&t.theme||e||n.theme},TR=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,RR=/(^-|-$)/g;function Dh(t){return t.replace(TR,"-").replace(RR,"")}var im=function(t){return lf(sE(t)>>>0)};function el(t){return typeof t=="string"&&!0}var cf=function(t){return typeof t=="function"||typeof t=="object"&&t!==null&&!Array.isArray(t)},AR=function(t){return t!=="__proto__"&&t!=="constructor"&&t!=="prototype"};function PR(t,e,n){var r=t[n];cf(e)&&cf(r)?fE(r,e):t[n]=e}function fE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(cf(o))for(var a in o)AR(a)&&PR(t,o[a],a)}return t}var sm=At.createContext();sm.Consumer;var Nh={};function pE(t,e,n){var r=tm(t),i=!el(t),s=e.attrs,o=s===void 0?fu:s,a=e.componentId,l=a===void 0?function(f,g){var _=typeof f!="string"?"sc":Dh(f);Nh[_]=(Nh[_]||0)+1;var x=_+"-"+im("5.3.9"+_+Nh[_]);return g?g+"-"+x:x}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(f){return el(f)?"styled."+f:"Styled("+Gy(f)+")"}(t):u,h=e.displayName&&e.componentId?Dh(e.displayName)+"-"+e.componentId:e.componentId||l,d=r&&t.attrs?Array.prototype.concat(t.attrs,o).filter(Boolean):o,m=e.shouldForwardProp;r&&t.shouldForwardProp&&(m=e.shouldForwardProp?function(f,g,_){return t.shouldForwardProp(f,g,_)&&e.shouldForwardProp(f,g,_)}:t.shouldForwardProp);var v,w=new vR(n,h,r?t.componentStyle:void 0),E=w.isStatic&&o.length===0,p=function(f,g){return function(_,x,P,D){var N=_.attrs,Y=_.componentStyle,W=_.defaultProps,V=_.foldedComponentIds,ye=_.shouldForwardProp,$e=_.styledComponentId,Me=_.target,Ie=function(K,C,se){K===void 0&&(K=kr);var L=Cn({},C,{theme:K}),De={};return se.forEach(function(ce){var fe,ee,nt,Lt=ce;for(fe in Go(Lt)&&(Lt=Lt(L)),Lt)L[fe]=De[fe]=fe==="className"?(ee=De[fe],nt=Lt[fe],ee&&nt?ee+" "+nt:ee||nt):Lt[fe]}),[L,De]}(dE(x,S.useContext(sm),W)||kr,x,N),tt=Ie[0],te=Ie[1],T=function(K,C,se,L){var De=uE(),ce=cE(),fe=C?K.generateAndInjectStyles(kr,De,ce):K.generateAndInjectStyles(se,De,ce);return fe}(Y,D,tt),j=P,H=te.$as||x.$as||te.as||x.as||Me,ne=el(H),b=te!==x?Cn({},x,{},te):x,O={};for(var $ in b)$[0]!=="$"&&$!=="as"&&($==="forwardedAs"?O.as=b[$]:(ye?ye($,Vy,H):!ne||Vy($))&&(O[$]=b[$]));return x.style&&te.style!==x.style&&(O.style=Cn({},x.style,{},te.style)),O.className=Array.prototype.concat(V,$e,T!==$e?T:null,x.className,te.className).filter(Boolean).join(" "),O.ref=j,S.createElement(H,O)}(v,f,g,E)};return p.displayName=c,(v=At.forwardRef(p)).attrs=d,v.componentStyle=w,v.displayName=c,v.shouldForwardProp=m,v.foldedComponentIds=r?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):fu,v.styledComponentId=h,v.target=r?t.target:t,v.withComponent=function(f){var g=e.componentId,_=function(P,D){if(P==null)return{};var N,Y,W={},V=Object.keys(P);for(Y=0;Y<V.length;Y++)N=V[Y],D.indexOf(N)>=0||(W[N]=P[N]);return W}(e,["componentId"]),x=g&&g+"-"+(el(f)?f:Dh(Gy(f)));return pE(f,Cn({},_,{attrs:d,componentId:x}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?fE({},t.defaultProps,f):f}}),Object.defineProperty(v,"toString",{value:function(){return"."+v.styledComponentId}}),i&&tR(v,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var hf=function(t){return function e(n,r,i){if(i===void 0&&(i=kr),!qo.isValidElementType(r))return fa(1,String(r));var s=function(){return n(r,i,rm.apply(void 0,arguments))};return s.withConfig=function(o){return e(n,r,Cn({},i,{},o))},s.attrs=function(o){return e(n,r,Cn({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(pE,t)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(t){hf[t]=hf(t)});var DR=function(){function t(n,r){this.rules=n,this.componentId=r,this.isStatic=oE(n),mu.registerId(this.componentId+1)}var e=t.prototype;return e.createStyles=function(n,r,i,s){var o=s(ci(this.rules,r,i,s).join(""),""),a=this.componentId+n;i.insertRules(a,a,o)},e.removeStyles=function(n,r){r.clearRules(this.componentId+n)},e.renderStyles=function(n,r,i,s){n>2&&mu.registerId(this.componentId+n),this.removeStyles(n,i),this.createStyles(n,r,i,s)},t}();function NR(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=rm.apply(void 0,[t].concat(n)),s="sc-global-"+im(JSON.stringify(i)),o=new DR(i,s);function a(u){var c=uE(),h=cE(),d=S.useContext(sm),m=S.useRef(c.allocateGSInstance(s)).current;return c.server&&l(m,u,c,d,h),S.useLayoutEffect(function(){if(!c.server)return l(m,u,c,d,h),function(){return o.removeStyles(m,c)}},[m,u,c,d,h]),null}function l(u,c,h,d,m){if(o.isStatic)o.renderStyles(u,rR,h,m);else{var v=Cn({},c,{theme:dE(c,d,a.defaultProps)});o.renderStyles(u,v,h,m)}}return At.memo(a)}function mE(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=rm.apply(void 0,[t].concat(n)).join(""),s=im(i);return new hE(s,i)}const A=hf,om=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M9 22a1 1 0 01-1-1v-3H4a2 2 0 01-2-2V4a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m1-6v3.08L13.08 16H20V4H4v12h6m7-5h-2V9h2v2m-4 0h-2V9h2v2m-4 0H7V9h2v2z"}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const gE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},bR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},yE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):bR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new LR;const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const OR=function(t){const e=gE(t);return yE.encodeByteArray(e,!0)},gu=function(t){return OR(t).replace(/\./g,"")},vE=function(t){try{return yE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function $R(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const MR=()=>$R().__FIREBASE_DEFAULTS__,UR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},FR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vE(t[1]);return e&&JSON.parse(e)},pc=()=>{try{return MR()||UR()||FR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wE=t=>{var e,n;return(n=(e=pc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},EE=t=>{const e=wE(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},jR=()=>{var t;return(t=pc())===null||t===void 0?void 0:t.config},_E=t=>{var e;return(e=pc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function SE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(kt())}function BR(){var t;const e=(t=pc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function HR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function WR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qR(){const t=kt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function GR(){try{return typeof indexedDB=="object"}catch{return!1}}function KR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=QR,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,pa.prototype.create)}}class pa{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?YR(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,r)}}function YR(t,e){return t.replace(XR,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const XR=/\{\$([^}]+)}/g;function JR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Zy(s)&&Zy(o)){if(!yu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Zy(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ma(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function io(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function so(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function ZR(t,e){const n=new eA(t,e);return n.subscribe.bind(n)}class eA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");tA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bh),i.error===void 0&&(i.error=bh),i.complete===void 0&&(i.complete=bh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bh(){}/**
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
 */function Pe(t){return t&&t._delegate?t._delegate:t}class Nr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class nA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iA(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rA(t){return t===Wr?void 0:t}function iA(t){return t.instantiationMode==="EAGER"}/**
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
 */class sA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new nA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const oA={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},aA=ue.INFO,lA={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},uA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=lA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class am{constructor(e){this.name=e,this._logLevel=aA,this._logHandler=uA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const cA=(t,e)=>e.some(n=>t instanceof n);let ev,tv;function hA(){return ev||(ev=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function dA(){return tv||(tv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const CE=new WeakMap,df=new WeakMap,xE=new WeakMap,Lh=new WeakMap,lm=new WeakMap;function fA(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ir(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&CE.set(n,t)}).catch(()=>{}),lm.set(e,t),e}function pA(t){if(df.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});df.set(t,e)}let ff={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return df.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xE.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ir(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function mA(t){ff=t(ff)}function gA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oh(this),e,...n);return xE.set(r,e.sort?e.sort():[e]),Ir(r)}:dA().includes(t)?function(...e){return t.apply(Oh(this),e),Ir(CE.get(this))}:function(...e){return Ir(t.apply(Oh(this),e))}}function yA(t){return typeof t=="function"?gA(t):(t instanceof IDBTransaction&&pA(t),cA(t,hA())?new Proxy(t,ff):t)}function Ir(t){if(t instanceof IDBRequest)return fA(t);if(Lh.has(t))return Lh.get(t);const e=yA(t);return e!==t&&(Lh.set(t,e),lm.set(e,t)),e}const Oh=t=>lm.get(t);function vA(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Ir(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ir(o.result),l.oldVersion,l.newVersion,Ir(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const wA=["get","getKey","getAll","getAllKeys","count"],EA=["put","add","delete","clear"],$h=new Map;function nv(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if($h.get(e))return $h.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=EA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||wA.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return $h.set(e,s),s}mA(t=>({...t,get:(e,n,r)=>nv(e,n)||t.get(e,n,r),has:(e,n)=>!!nv(e,n)||t.has(e,n)}));/**
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
 */class _A{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(SA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function SA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const pf="@firebase/app",rv="0.9.8";/**
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
 */const hi=new am("@firebase/app"),CA="@firebase/app-compat",xA="@firebase/analytics-compat",kA="@firebase/analytics",IA="@firebase/app-check-compat",TA="@firebase/app-check",RA="@firebase/auth",AA="@firebase/auth-compat",PA="@firebase/database",DA="@firebase/database-compat",NA="@firebase/functions",bA="@firebase/functions-compat",LA="@firebase/installations",OA="@firebase/installations-compat",$A="@firebase/messaging",MA="@firebase/messaging-compat",UA="@firebase/performance",FA="@firebase/performance-compat",jA="@firebase/remote-config",zA="@firebase/remote-config-compat",VA="@firebase/storage",BA="@firebase/storage-compat",HA="@firebase/firestore",WA="@firebase/firestore-compat",qA="firebase",GA="9.20.0";/**
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
 */const mf="[DEFAULT]",KA={[pf]:"fire-core",[CA]:"fire-core-compat",[kA]:"fire-analytics",[xA]:"fire-analytics-compat",[TA]:"fire-app-check",[IA]:"fire-app-check-compat",[RA]:"fire-auth",[AA]:"fire-auth-compat",[PA]:"fire-rtdb",[DA]:"fire-rtdb-compat",[NA]:"fire-fn",[bA]:"fire-fn-compat",[LA]:"fire-iid",[OA]:"fire-iid-compat",[$A]:"fire-fcm",[MA]:"fire-fcm-compat",[UA]:"fire-perf",[FA]:"fire-perf-compat",[jA]:"fire-rc",[zA]:"fire-rc-compat",[VA]:"fire-gcs",[BA]:"fire-gcs-compat",[HA]:"fire-fst",[WA]:"fire-fst-compat","fire-js":"fire-js",[qA]:"fire-js-all"};/**
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
 */const vu=new Map,gf=new Map;function QA(t,e){try{t.container.addComponent(e)}catch(n){hi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(gf.has(e))return hi.debug(`There were multiple attempts to register component ${e}.`),!1;gf.set(e,t);for(const n of vu.values())QA(n,t);return!0}function mc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const YA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tr=new pa("app","Firebase",YA);/**
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
 */class XA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ci=GA;function kE(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:mf,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Tr.create("bad-app-name",{appName:String(i)});if(n||(n=jR()),!n)throw Tr.create("no-options");const s=vu.get(i);if(s){if(yu(n,s.options)&&yu(r,s.config))return s;throw Tr.create("duplicate-app",{appName:i})}const o=new sA(i);for(const l of gf.values())o.addComponent(l);const a=new XA(n,r,o);return vu.set(i,a),a}function um(t=mf){const e=vu.get(t);if(!e&&t===mf)return kE();if(!e)throw Tr.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let i=(r=KA[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),hi.warn(a.join(" "));return}di(new Nr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const JA="firebase-heartbeat-database",ZA=1,Ko="firebase-heartbeat-store";let Mh=null;function IE(){return Mh||(Mh=vA(JA,ZA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ko)}}}).catch(t=>{throw Tr.create("idb-open",{originalErrorMessage:t.message})})),Mh}async function eP(t){try{return(await IE()).transaction(Ko).objectStore(Ko).get(TE(t))}catch(e){if(e instanceof bn)hi.warn(e.message);else{const n=Tr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});hi.warn(n.message)}}}async function iv(t,e){try{const r=(await IE()).transaction(Ko,"readwrite");return await r.objectStore(Ko).put(e,TE(t)),r.done}catch(n){if(n instanceof bn)hi.warn(n.message);else{const r=Tr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});hi.warn(r.message)}}}function TE(t){return`${t.name}!${t.options.appId}`}/**
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
 */const tP=1024,nP=30*24*60*60*1e3;class rP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new sP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=sv();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=nP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=sv(),{heartbeatsToSend:n,unsentEntries:r}=iP(this._heartbeatsCache.heartbeats),i=gu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function sv(){return new Date().toISOString().substring(0,10)}function iP(t,e=tP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ov(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ov(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class sP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return GR()?KR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await eP(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return iv(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ov(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function oP(t){di(new Nr("platform-logger",e=>new _A(e),"PRIVATE")),di(new Nr("heartbeat",e=>new rP(e),"PRIVATE")),Tn(pf,rv,t),Tn(pf,rv,"esm2017"),Tn("fire-js","")}oP("");var aP="firebase",lP="9.20.0";/**
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
 */Tn(aP,lP,"app");var uP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},U,cm=cm||{},Q=uP||self;function wu(){}function gc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function ga(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function cP(t){return Object.prototype.hasOwnProperty.call(t,Uh)&&t[Uh]||(t[Uh]=++hP)}var Uh="closure_uid_"+(1e9*Math.random()>>>0),hP=0;function dP(t,e,n){return t.call.apply(t.bind,arguments)}function fP(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function St(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?St=dP:St=fP,St.apply(null,arguments)}function tl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function dt(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Fr(){this.s=this.s,this.o=this.o}var pP=0;Fr.prototype.s=!1;Fr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),pP!=0)&&cP(this)};Fr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const RE=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function hm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function av(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(gc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ct(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ct.prototype.h=function(){this.defaultPrevented=!0};var mP=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{Q.addEventListener("test",wu,e),Q.removeEventListener("test",wu,e)}catch{}return t}();function Eu(t){return/^[\s\xa0]*$/.test(t)}var lv=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Fh(t,e){return t<e?-1:t>e?1:0}function yc(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Sn(t){return yc().indexOf(t)!=-1}function dm(t){return dm[" "](t),t}dm[" "]=wu;function gP(t){var e=wP;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var yP=Sn("Opera"),ds=Sn("Trident")||Sn("MSIE"),AE=Sn("Edge"),yf=AE||ds,PE=Sn("Gecko")&&!(yc().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge"))&&!(Sn("Trident")||Sn("MSIE"))&&!Sn("Edge"),vP=yc().toLowerCase().indexOf("webkit")!=-1&&!Sn("Edge");function DE(){var t=Q.document;return t?t.documentMode:void 0}var _u;e:{var jh="",zh=function(){var t=yc();if(PE)return/rv:([^\);]+)(\)|;)/.exec(t);if(AE)return/Edge\/([\d\.]+)/.exec(t);if(ds)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(vP)return/WebKit\/(\S+)/.exec(t);if(yP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(zh&&(jh=zh?zh[1]:""),ds){var Vh=DE();if(Vh!=null&&Vh>parseFloat(jh)){_u=String(Vh);break e}}_u=jh}var wP={};function EP(){return gP(function(){let t=0;const e=lv(String(_u)).split("."),n=lv("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Fh(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Fh(i[2].length==0,s[2].length==0)||Fh(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var vf;if(Q.document&&ds){var uv=DE();vf=uv||parseInt(_u,10)||void 0}else vf=void 0;var _P=vf;function Qo(t,e){if(Ct.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(PE){e:{try{dm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:SP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Qo.X.h.call(this)}}dt(Qo,Ct);var SP={2:"touch",3:"pen",4:"mouse"};Qo.prototype.h=function(){Qo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ya="closure_listenable_"+(1e6*Math.random()|0),CP=0;function xP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++CP,this.ba=this.ea=!1}function vc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function fm(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function NE(t){const e={};for(const n in t)e[n]=t[n];return e}const cv="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function bE(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<cv.length;s++)n=cv[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function wc(t){this.src=t,this.g={},this.h=0}wc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Ef(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new xP(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function wf(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=RE(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(vc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Ef(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var pm="closure_lm_"+(1e6*Math.random()|0),Bh={};function LE(t,e,n,r,i){if(r&&r.once)return $E(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)LE(t,e[s],n,r,i);return null}return n=ym(n),t&&t[ya]?t.N(e,n,ga(r)?!!r.capture:!!r,i):OE(t,e,n,!1,r,i)}function OE(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=ga(i)?!!i.capture:!!i,a=gm(t);if(a||(t[pm]=a=new wc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=kP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)mP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(UE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kP(){function t(n){return e.call(t.src,t.listener,n)}const e=IP;return t}function $E(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)$E(t,e[s],n,r,i);return null}return n=ym(n),t&&t[ya]?t.O(e,n,ga(r)?!!r.capture:!!r,i):OE(t,e,n,!0,r,i)}function ME(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)ME(t,e[s],n,r,i);else r=ga(r)?!!r.capture:!!r,n=ym(n),t&&t[ya]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Ef(s,n,r,i),-1<n&&(vc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=gm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Ef(e,n,r,i)),(n=-1<t?e[t]:null)&&mm(n))}function mm(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ya])wf(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(UE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=gm(e))?(wf(n,t),n.h==0&&(n.src=null,e[pm]=null)):vc(t)}}}function UE(t){return t in Bh?Bh[t]:Bh[t]="on"+t}function IP(t,e){if(t.ba)t=!0;else{e=new Qo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&mm(t),t=n.call(r,e)}return t}function gm(t){return t=t[pm],t instanceof wc?t:null}var Hh="__closure_events_fn_"+(1e9*Math.random()>>>0);function ym(t){return typeof t=="function"?t:(t[Hh]||(t[Hh]=function(e){return t.handleEvent(e)}),t[Hh])}function Ze(){Fr.call(this),this.i=new wc(this),this.P=this,this.I=null}dt(Ze,Fr);Ze.prototype[ya]=!0;Ze.prototype.removeEventListener=function(t,e,n,r){ME(this,t,e,n,r)};function ct(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ct(e,t);else if(e instanceof Ct)e.target=e.target||t;else{var i=e;e=new Ct(r,t),bE(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=nl(o,r,!0,e)&&i}if(o=e.g=t,i=nl(o,r,!0,e)&&i,i=nl(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=nl(o,r,!1,e)&&i}Ze.prototype.M=function(){if(Ze.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)vc(n[r]);delete t.g[e],t.h--}}this.I=null};Ze.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ze.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function nl(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&wf(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var vm=Q.JSON.stringify;function TP(){var t=zE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class RP{constructor(){this.h=this.g=null}add(e,n){const r=FE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var FE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new AP,t=>t.reset());class AP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function PP(t){Q.setTimeout(()=>{throw t},0)}function jE(t,e){_f||DP(),Sf||(_f(),Sf=!0),zE.add(t,e)}var _f;function DP(){var t=Q.Promise.resolve(void 0);_f=function(){t.then(NP)}}var Sf=!1,zE=new RP;function NP(){for(var t;t=TP();){try{t.h.call(t.g)}catch(n){PP(n)}var e=FE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Sf=!1}function Ec(t,e){Ze.call(this),this.h=t||1,this.g=e||Q,this.j=St(this.lb,this),this.l=Date.now()}dt(Ec,Ze);U=Ec.prototype;U.ca=!1;U.R=null;U.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ct(this,"tick"),this.ca&&(wm(this),this.start()))}};U.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function wm(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}U.M=function(){Ec.X.M.call(this),wm(this),delete this.g};function Em(t,e,n){if(typeof t=="function")n&&(t=St(t,n));else if(t&&typeof t.handleEvent=="function")t=St(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function VE(t){t.g=Em(()=>{t.g=null,t.i&&(t.i=!1,VE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bP extends Fr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:VE(this)}M(){super.M(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Yo(t){Fr.call(this),this.h=t,this.g={}}dt(Yo,Fr);var hv=[];function BE(t,e,n,r){Array.isArray(n)||(n&&(hv[0]=n.toString()),n=hv);for(var i=0;i<n.length;i++){var s=LE(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function HE(t){fm(t.g,function(e,n){this.g.hasOwnProperty(n)&&mm(e)},t),t.g={}}Yo.prototype.M=function(){Yo.X.M.call(this),HE(this)};Yo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function _c(){this.g=!0}_c.prototype.Aa=function(){this.g=!1};function LP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function OP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Wi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+MP(t,n)+(r?" "+r:"")})}function $P(t,e){t.info(function(){return"TIMEOUT: "+e})}_c.prototype.info=function(){};function MP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return vm(n)}catch{return e}}var xi={},dv=null;function Sc(){return dv=dv||new Ze}xi.Pa="serverreachability";function WE(t){Ct.call(this,xi.Pa,t)}dt(WE,Ct);function Xo(t){const e=Sc();ct(e,new WE(e))}xi.STAT_EVENT="statevent";function qE(t,e){Ct.call(this,xi.STAT_EVENT,t),this.stat=e}dt(qE,Ct);function Pt(t){const e=Sc();ct(e,new qE(e,t))}xi.Qa="timingevent";function GE(t,e){Ct.call(this,xi.Qa,t),this.size=e}dt(GE,Ct);function va(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Cc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},KE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function _m(){}_m.prototype.h=null;function fv(t){return t.h||(t.h=t.i())}function QE(){}var wa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Sm(){Ct.call(this,"d")}dt(Sm,Ct);function Cm(){Ct.call(this,"c")}dt(Cm,Ct);var Cf;function xc(){}dt(xc,_m);xc.prototype.g=function(){return new XMLHttpRequest};xc.prototype.i=function(){return{}};Cf=new xc;function Ea(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Yo(this),this.O=UP,t=yf?125:void 0,this.T=new Ec(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new YE}function YE(){this.i=null,this.g="",this.h=!1}var UP=45e3,xf={},Su={};U=Ea.prototype;U.setTimeout=function(t){this.O=t};function kf(t,e,n){t.K=1,t.v=Ic(Kn(e)),t.s=n,t.P=!0,XE(t,null)}function XE(t,e){t.F=Date.now(),_a(t),t.A=Kn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),s_(n.i,"t",r),t.C=0,n=t.l.H,t.h=new YE,t.g=I_(t.l,n?e:null,!t.s),0<t.N&&(t.L=new bP(St(t.La,t,t.g),t.N)),BE(t.S,t.g,"readystatechange",t.ib),e=t.H?NE(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Xo(),LP(t.j,t.u,t.A,t.m,t.U,t.s)}U.ib=function(t){t=t.target;const e=this.L;e&&Fn(t)==3?e.l():this.La(t)};U.La=function(t){try{if(t==this.g)e:{const c=Fn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||yf||this.g&&(this.h.h||this.g.fa()||yv(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?Xo(3):Xo(2)),kc(this);var n=this.g.aa();this.Y=n;t:if(JE(this)){var r=yv(this.g);t="";var i=r.length,s=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yr(this),_o(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,OP(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Eu(a)){var u=a;break t}}u=null}if(n=u)Wi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,If(this,n);else{this.i=!1,this.o=3,Pt(12),Yr(this),_o(this);break e}}this.P?(ZE(this,c,o),yf&&this.i&&c==3&&(BE(this.S,this.T,"tick",this.hb),this.T.start())):(Wi(this.j,this.m,o,null),If(this,o)),c==4&&Yr(this),this.i&&!this.I&&(c==4?S_(this.l,this):(this.i=!1,_a(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Yr(this),_o(this)}}}catch{}finally{}};function JE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function ZE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=FP(t,n),i==Su){e==4&&(t.o=4,Pt(14),r=!1),Wi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==xf){t.o=4,Pt(15),Wi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Wi(t.j,t.m,i,null),If(t,i);JE(t)&&i!=Su&&i!=xf&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Pm(e),e.K=!0,Pt(11))):(Wi(t.j,t.m,n,"[Invalid Chunked Response]"),Yr(t),_o(t))}U.hb=function(){if(this.g){var t=Fn(this.g),e=this.g.fa();this.C<e.length&&(kc(this),ZE(this,t,e),this.i&&t!=4&&_a(this))}};function FP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Su:(n=Number(e.substring(n,r)),isNaN(n)?xf:(r+=1,r+n>e.length?Su:(e=e.substr(r,n),t.C=r+n,e)))}U.cancel=function(){this.I=!0,Yr(this)};function _a(t){t.V=Date.now()+t.O,e_(t,t.O)}function e_(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=va(St(t.gb,t),e)}function kc(t){t.B&&(Q.clearTimeout(t.B),t.B=null)}U.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?($P(this.j,this.A),this.K!=2&&(Xo(),Pt(17)),Yr(this),this.o=2,_o(this)):e_(this,this.V-t)};function _o(t){t.l.G==0||t.I||S_(t.l,t)}function Yr(t){kc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,wm(t.T),HE(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function If(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Tf(n.h,t))){if(!t.J&&Tf(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ku(n),Ac(n);else break e;Am(n),Pt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=va(St(n.cb,n),6e3));if(1>=l_(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Xr(n,11)}else if((t.J||n.g==t)&&ku(n),!Eu(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const v=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(xm(s,s.h),s.h=null))}if(r.D){const w=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,xe(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=k_(r,r.H?r.ka:null,r.V),o.J){u_(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(kc(a),_a(a)),r.g=o}else E_(r);0<n.i.length&&Pc(n)}else u[0]!="stop"&&u[0]!="close"||Xr(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Xr(n,7):Rm(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}Xo(4)}catch{}}function jP(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(gc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function zP(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(gc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function t_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(gc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=zP(t),r=jP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var n_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function VP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ti(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ti){this.h=e!==void 0?e:t.h,Cu(this,t.j),this.s=t.s,this.g=t.g,xu(this,t.m),this.l=t.l,e=t.i;var n=new Jo;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),pv(this,n),this.o=t.o}else t&&(n=String(t).match(n_))?(this.h=!!e,Cu(this,n[1]||"",!0),this.s=oo(n[2]||""),this.g=oo(n[3]||"",!0),xu(this,n[4]),this.l=oo(n[5]||"",!0),pv(this,n[6]||"",!0),this.o=oo(n[7]||"")):(this.h=!!e,this.i=new Jo(null,this.h))}ti.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ao(e,mv,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ao(e,mv,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ao(n,n.charAt(0)=="/"?WP:HP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ao(n,GP)),t.join("")};function Kn(t){return new ti(t)}function Cu(t,e,n){t.j=n?oo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function xu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function pv(t,e,n){e instanceof Jo?(t.i=e,KP(t.i,t.h)):(n||(e=ao(e,qP)),t.i=new Jo(e,t.h))}function xe(t,e,n){t.i.set(e,n)}function Ic(t){return xe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function oo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ao(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,BP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function BP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var mv=/[#\/\?@]/g,HP=/[#\?:]/g,WP=/[#\?]/g,qP=/[#\?@]/g,GP=/#/g;function Jo(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function jr(t){t.g||(t.g=new Map,t.h=0,t.i&&VP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}U=Jo.prototype;U.add=function(t,e){jr(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function r_(t,e){jr(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function i_(t,e){return jr(t),e=Ds(t,e),t.g.has(e)}U.forEach=function(t,e){jr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};U.oa=function(){jr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};U.W=function(t){jr(this);let e=[];if(typeof t=="string")i_(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};U.set=function(t,e){return jr(this),this.i=null,t=Ds(this,t),i_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};U.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function s_(t,e,n){r_(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),hm(n)),t.h+=n.length)}U.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function KP(t,e){e&&!t.j&&(jr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(r_(this,r),s_(this,i,n))},t)),t.j=e}var QP=class{constructor(e,n){this.h=e,this.g=n}};function o_(t){this.l=t||YP,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ga&&Q.g.Ga()&&Q.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var YP=10;function a_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function l_(t){return t.h?1:t.g?t.g.size:0}function Tf(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xm(t,e){t.g?t.g.add(e):t.h=e}function u_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}o_.prototype.cancel=function(){if(this.i=c_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function c_(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return hm(t.i)}function km(){}km.prototype.stringify=function(t){return Q.JSON.stringify(t,void 0)};km.prototype.parse=function(t){return Q.JSON.parse(t,void 0)};function XP(){this.g=new km}function JP(t,e,n){const r=n||"";try{t_(t,function(i,s){let o=i;ga(i)&&(o=vm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function ZP(t,e){const n=new _c;if(Q.Image){const r=new Image;r.onload=tl(rl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=tl(rl,n,r,"TestLoadImage: error",!1,e),r.onabort=tl(rl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=tl(rl,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function rl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Sa(t){this.l=t.ac||null,this.j=t.jb||!1}dt(Sa,_m);Sa.prototype.g=function(){return new Tc(this.l,this.j)};Sa.prototype.i=function(t){return function(){return t}}({});function Tc(t,e){Ze.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Im,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dt(Tc,Ze);var Im=0;U=Tc.prototype;U.open=function(t,e){if(this.readyState!=Im)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Zo(this)};U.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||Q).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};U.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ca(this)),this.readyState=Im};U.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Zo(this)),this.g&&(this.readyState=3,Zo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;h_(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function h_(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}U.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ca(this):Zo(this),this.readyState==3&&h_(this)}};U.Va=function(t){this.g&&(this.response=this.responseText=t,Ca(this))};U.Ua=function(t){this.g&&(this.response=t,Ca(this))};U.ga=function(){this.g&&Ca(this)};function Ca(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Zo(t)}U.setRequestHeader=function(t,e){this.v.append(t,e)};U.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};U.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Zo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Tc.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var eD=Q.JSON.parse;function be(t){Ze.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=d_,this.K=this.L=!1}dt(be,Ze);var d_="",tD=/^https?$/i,nD=["POST","PUT"];U=be.prototype;U.Ka=function(t){this.L=t};U.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Cf.g(),this.C=this.u?fv(this.u):fv(Cf),this.g.onreadystatechange=St(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){gv(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=Q.FormData&&t instanceof Q.FormData,!(0<=RE(nD,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{m_(this),0<this.B&&((this.K=rD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=St(this.qa,this)):this.A=Em(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){gv(this,s)}};function rD(t){return ds&&EP()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}U.qa=function(){typeof cm<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ct(this,"timeout"),this.abort(8))};function gv(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,f_(t),Rc(t)}function f_(t){t.D||(t.D=!0,ct(t,"complete"),ct(t,"error"))}U.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,ct(this,"complete"),ct(this,"abort"),Rc(this))};U.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Rc(this,!0)),be.X.M.call(this)};U.Ha=function(){this.s||(this.F||this.v||this.l?p_(this):this.fb())};U.fb=function(){p_(this)};function p_(t){if(t.h&&typeof cm<"u"&&(!t.C[1]||Fn(t)!=4||t.aa()!=2)){if(t.v&&Fn(t)==4)Em(t.Ha,0,t);else if(ct(t,"readystatechange"),Fn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(n_)[1]||null;if(!i&&Q.self&&Q.self.location){var s=Q.self.location.protocol;i=s.substr(0,s.length-1)}r=!tD.test(i?i.toLowerCase():"")}n=r}if(n)ct(t,"complete"),ct(t,"success");else{t.m=6;try{var o=2<Fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",f_(t)}}finally{Rc(t)}}}}function Rc(t,e){if(t.g){m_(t);const n=t.g,r=t.C[0]?wu:null;t.g=null,t.C=null,e||ct(t,"ready");try{n.onreadystatechange=r}catch{}}}function m_(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}function Fn(t){return t.g?t.g.readyState:0}U.aa=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}};U.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};U.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),eD(e)}};function yv(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case d_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}U.Ea=function(){return this.m};U.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function g_(t){let e="";return fm(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Tm(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=g_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):xe(t,e,n))}function Xs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function y_(t){this.Ca=0,this.i=[],this.j=new _c,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Xs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Xs("baseRetryDelayMs",5e3,t),this.bb=Xs("retryDelaySeedMs",1e4,t),this.$a=Xs("forwardChannelMaxRetries",2,t),this.ta=Xs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new o_(t&&t.concurrentRequestLimit),this.Fa=new XP,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}U=y_.prototype;U.ma=8;U.G=1;function Rm(t){if(v_(t),t.G==3){var e=t.U++,n=Kn(t.F);xe(n,"SID",t.I),xe(n,"RID",e),xe(n,"TYPE","terminate"),xa(t,n),e=new Ea(t,t.j,e,void 0),e.K=2,e.v=Ic(Kn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon&&(n=Q.navigator.sendBeacon(e.v.toString(),"")),!n&&Q.Image&&(new Image().src=e.v,n=!0),n||(e.g=I_(e.l,null),e.g.da(e.v)),e.F=Date.now(),_a(e)}x_(t)}function Ac(t){t.g&&(Pm(t),t.g.cancel(),t.g=null)}function v_(t){Ac(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ku(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Pc(t){a_(t.h)||t.m||(t.m=!0,jE(t.Ja,t),t.C=0)}function iD(t,e){return l_(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=va(St(t.Ja,t,e),C_(t,t.C)),t.C++,!0)}U.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Ea(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=NE(s),bE(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=w_(this,i,e),n=Kn(this.F),xe(n,"RID",t),xe(n,"CVER",22),this.D&&xe(n,"X-HTTP-Session-Id",this.D),xa(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(g_(s)))+"&"+e:this.o&&Tm(n,this.o,s)),xm(this.h,i),this.Ya&&xe(n,"TYPE","init"),this.O?(xe(n,"$req",e),xe(n,"SID","null"),i.Z=!0,kf(i,n,null)):kf(i,n,e),this.G=2}}else this.G==3&&(t?vv(this,t):this.i.length==0||a_(this.h)||vv(this))};function vv(t,e){var n;e?n=e.m:n=t.U++;const r=Kn(t.F);xe(r,"SID",t.I),xe(r,"RID",n),xe(r,"AID",t.T),xa(t,r),t.o&&t.s&&Tm(r,t.o,t.s),n=new Ea(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=w_(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),xm(t.h,n),kf(n,r,e)}function xa(t,e){t.ia&&fm(t.ia,function(n,r){xe(e,r,n)}),t.l&&t_({},function(n,r){xe(e,r,n)})}function w_(t,e,n){n=Math.min(t.i.length,n);var r=t.l?St(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{JP(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function E_(t){t.g||t.u||(t.Z=1,jE(t.Ia,t),t.A=0)}function Am(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=va(St(t.Ia,t),C_(t,t.A)),t.A++,!0)}U.Ia=function(){if(this.u=null,__(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=va(St(this.eb,this),t)}};U.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Pt(10),Ac(this),__(this))};function Pm(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function __(t){t.g=new Ea(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Kn(t.sa);xe(e,"RID","rpc"),xe(e,"SID",t.I),xe(e,"CI",t.L?"0":"1"),xe(e,"AID",t.T),xe(e,"TYPE","xmlhttp"),xa(t,e),t.o&&t.s&&Tm(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ic(Kn(e)),n.s=null,n.P=!0,XE(n,t)}U.cb=function(){this.v!=null&&(this.v=null,Ac(this),Am(this),Pt(19))};function ku(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function S_(t,e){var n=null;if(t.g==e){ku(t),Pm(t),t.g=null;var r=2}else if(Tf(t.h,e))n=e.D,u_(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Sc(),ct(r,new GE(r,n)),Pc(t)}else E_(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&iD(t,e)||r==2&&Am(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Xr(t,5);break;case 4:Xr(t,10);break;case 3:Xr(t,6);break;default:Xr(t,2)}}}function C_(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Xr(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=St(t.kb,t);n||(n=new ti("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Cu(n,"https"),Ic(n)),ZP(n.toString(),r)}else Pt(2);t.G=0,t.l&&t.l.va(e),x_(t),v_(t)}U.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function x_(t){if(t.G=0,t.la=[],t.l){const e=c_(t.h);(e.length!=0||t.i.length!=0)&&(av(t.la,e),av(t.la,t.i),t.h.i.length=0,hm(t.i),t.i.length=0),t.l.ua()}}function k_(t,e,n){var r=n instanceof ti?Kn(n):new ti(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),xu(r,r.m);else{var i=Q.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ti(null,void 0);r&&Cu(s,r),e&&(s.g=e),i&&xu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&xe(r,n,e),xe(r,"VER",t.ma),xa(t,r),r}function I_(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new be(new Sa({jb:!0})):new be(t.ra),e.Ka(t.H),e}function T_(){}U=T_.prototype;U.xa=function(){};U.wa=function(){};U.va=function(){};U.ua=function(){};U.Ra=function(){};function Iu(){if(ds&&!(10<=Number(_P)))throw Error("Environmental error: no available transport.")}Iu.prototype.g=function(t,e){return new Xt(t,e)};function Xt(t,e){Ze.call(this),this.g=new y_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Eu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Eu(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ns(this)}dt(Xt,Ze);Xt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Pt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=k_(t,null,t.V),Pc(t)};Xt.prototype.close=function(){Rm(this.g)};Xt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=vm(t),t=n);e.i.push(new QP(e.ab++,t)),e.G==3&&Pc(e)};Xt.prototype.M=function(){this.g.l=null,delete this.j,Rm(this.g),delete this.g,Xt.X.M.call(this)};function R_(t){Sm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}dt(R_,Sm);function A_(){Cm.call(this),this.status=1}dt(A_,Cm);function Ns(t){this.g=t}dt(Ns,T_);Ns.prototype.xa=function(){ct(this.g,"a")};Ns.prototype.wa=function(t){ct(this.g,new R_(t))};Ns.prototype.va=function(t){ct(this.g,new A_)};Ns.prototype.ua=function(){ct(this.g,"b")};Iu.prototype.createWebChannel=Iu.prototype.g;Xt.prototype.send=Xt.prototype.u;Xt.prototype.open=Xt.prototype.m;Xt.prototype.close=Xt.prototype.close;Cc.NO_ERROR=0;Cc.TIMEOUT=8;Cc.HTTP_ERROR=6;KE.COMPLETE="complete";QE.EventType=wa;wa.OPEN="a";wa.CLOSE="b";wa.ERROR="c";wa.MESSAGE="d";Ze.prototype.listen=Ze.prototype.N;be.prototype.listenOnce=be.prototype.O;be.prototype.getLastError=be.prototype.Oa;be.prototype.getLastErrorCode=be.prototype.Ea;be.prototype.getStatus=be.prototype.aa;be.prototype.getResponseJson=be.prototype.Sa;be.prototype.getResponseText=be.prototype.fa;be.prototype.send=be.prototype.da;be.prototype.setWithCredentials=be.prototype.Ka;var sD=function(){return new Iu},oD=function(){return Sc()},Wh=Cc,aD=KE,lD=xi,wv={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},uD=Sa,il=QE,cD=be;const Ev="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let bs="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fi=new am("@firebase/firestore");function _v(){return fi.logLevel}function F(t,...e){if(fi.logLevel<=ue.DEBUG){const n=e.map(Dm);fi.debug(`Firestore (${bs}): ${t}`,...n)}}function Qn(t,...e){if(fi.logLevel<=ue.ERROR){const n=e.map(Dm);fi.error(`Firestore (${bs}): ${t}`,...n)}}function Tu(t,...e){if(fi.logLevel<=ue.WARN){const n=e.map(Dm);fi.warn(`Firestore (${bs}): ${t}`,...n)}}function Dm(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: `+t;throw Qn(e),new Error(e)}function Se(t,e){t||G()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class P_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hD{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(vt.UNAUTHENTICATED))}shutdown(){}}class dD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fD{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Bn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Bn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{F("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(F("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Bn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(F("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new P_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new vt(e)}}class pD{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class mD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new pD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(vt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class gD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=s=>{s.error!=null&&F("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.T;return this.T=s.token,F("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{F("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.I.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.I.getImmediate({optional:!0});s?i(s):F("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.T=n.token,new gD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function vD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=vD(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function de(t,e){return t<e?-1:t>e?1:0}function fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ea{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ea.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ea?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ke extends ea{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ke(n)}static emptyPath(){return new ke([])}}const wD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class _t extends ea{construct(e,n,r){return new _t(e,n,r)}static isValidIdentifier(e){return wD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),_t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new _t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new z(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new z(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new z(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new _t(n)}static emptyPath(){return new _t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.path=e}static fromPath(e){return new B(ke.fromString(e))}static fromName(e){return new B(ke.fromString(e).popFirst(5))}static empty(){return new B(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new B(new ke(e.slice()))}}function ED(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new br(i,B.empty(),e)}function _D(t){return new br(t.readTime,t.key,-1)}class br{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new br(J.min(),B.empty(),-1)}static max(){return new br(J.max(),B.empty(),-1)}}function SD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=B.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const CD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ka(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==CD)throw t;F("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(i=>i?R.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new R((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new R((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ia(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Nm{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Nm.ct=-1;function Dc(t){return t==null}function Ru(t){return t===0&&1/t==-1/0}function kD(t){return typeof t=="number"&&Number.isInteger(t)&&!Ru(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ki(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function N_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ke{constructor(e){this.comparator=e,this.data=new Qe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Cv(this.data.getIterator())}getIteratorFrom(e){return new Cv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ke(this.comparator);return n.data=e,n}}class Cv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(_t.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Ke(_t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class ID extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class It{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ID("Invalid base64 string: "+i):i}}(e);return new It(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new It(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}It.EMPTY_BYTE_STRING=new It("");const TD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=TD.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ps(t){return typeof t=="string"?It.fromBase64String(t):It.fromUint8Array(t)}/**
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
 */function b_(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function L_(t){const e=t.mapValue.fields.__previous_value__;return b_(e)?L_(e):e}function ta(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RD{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class na{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new na("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof na&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const ol={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function pi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?b_(t)?4:AD(t)?9007199254740991:10:G()}function Dn(t,e){if(t===e)return!0;const n=pi(t);if(n!==pi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ta(t).isEqual(ta(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Lr(r.timestampValue),o=Lr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ps(r.bytesValue).isEqual(ps(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return ze(r.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(r.geoPointValue.longitude)===ze(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return ze(r.integerValue)===ze(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=ze(r.doubleValue),o=ze(i.doubleValue);return s===o?Ru(s)===Ru(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Sv(s)!==Sv(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Dn(s[a],o[a])))return!1;return!0}(t,e);default:return G()}}function ra(t,e){return(t.values||[]).find(n=>Dn(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=pi(t),r=pi(e);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=ze(i.integerValue||i.doubleValue),a=ze(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return xv(t.timestampValue,e.timestampValue);case 4:return xv(ta(t),ta(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ps(i),a=ps(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=de(o[l],a[l]);if(u!==0)return u}return de(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=de(ze(i.latitude),ze(s.latitude));return o!==0?o:de(ze(i.longitude),ze(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=ms(o[l],a[l]);if(u)return u}return de(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===ol.mapValue&&s===ol.mapValue)return 0;if(i===ol.mapValue)return 1;if(s===ol.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=de(a[c],u[c]);if(h!==0)return h;const d=ms(o[a[c]],l[u[c]]);if(d!==0)return d}return de(a.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function xv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=Lr(t),r=Lr(e),i=de(n.seconds,r.seconds);return i!==0?i:de(n.nanos,r.nanos)}function gs(t){return Rf(t)}function Rf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Lr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ps(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,B.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=Rf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${Rf(r.fields[a])}`;return s+"}"}(t.mapValue):G();var e,n}function Af(t){return!!t&&"integerValue"in t}function bm(t){return!!t&&"arrayValue"in t}function kv(t){return!!t&&"nullValue"in t}function Iv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Pl(t){return!!t&&"mapValue"in t}function So(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ki(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=So(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return Object.assign({},t)}function AD(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Pl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=So(n)}setAll(e){let n=_t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=So(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Pl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Pl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ki(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Mt(So(this.value))}}function O_(t){const e=[];return ki(t.fields,(n,r)=>{const i=new _t([n]);if(Pl(r)){const s=O_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Au{constructor(e,n){this.position=e,this.inclusive=n}}function Tv(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=B.comparator(B.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Co{constructor(e,n="asc"){this.field=e,this.dir=n}}function PD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class $_{}class We extends $_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ND(e,n,r):n==="array-contains"?new OD(e,r):n==="in"?new $D(e,r):n==="not-in"?new MD(e,r):n==="array-contains-any"?new UD(e,r):new We(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new bD(e,r):new LD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ms(n,this.value)):n!==null&&pi(this.value)===pi(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Nn extends $_{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Nn(e,n)}matches(e){return M_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function M_(t){return t.op==="and"}function U_(t){return DD(t)&&M_(t)}function DD(t){for(const e of t.filters)if(e instanceof Nn)return!1;return!0}function Pf(t){if(t instanceof We)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(U_(t))return t.filters.map(e=>Pf(e)).join(",");{const e=t.filters.map(n=>Pf(n)).join(",");return`${t.op}(${e})`}}function F_(t,e){return t instanceof We?function(n,r){return r instanceof We&&n.op===r.op&&n.field.isEqual(r.field)&&Dn(n.value,r.value)}(t,e):t instanceof Nn?function(n,r){return r instanceof Nn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&F_(s,r.filters[o]),!0):!1}(t,e):void G()}function j_(t){return t instanceof We?function(e){return`${e.field.canonicalString()} ${e.op} ${gs(e.value)}`}(t):t instanceof Nn?function(e){return e.op.toString()+" {"+e.getFilters().map(j_).join(" ,")+"}"}(t):"Filter"}class ND extends We{constructor(e,n,r){super(e,n,r),this.key=B.fromName(r.referenceValue)}matches(e){const n=B.comparator(e.key,this.key);return this.matchesComparison(n)}}class bD extends We{constructor(e,n){super(e,"in",n),this.keys=z_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class LD extends We{constructor(e,n){super(e,"not-in",n),this.keys=z_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function z_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>B.fromName(r.referenceValue))}class OD extends We{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return bm(n)&&ra(n.arrayValue,this.value)}}class $D extends We{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ra(this.value.arrayValue,n)}}class MD extends We{constructor(e,n){super(e,"not-in",n)}matches(e){if(ra(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!ra(this.value.arrayValue,n)}}class UD extends We{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!bm(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>ra(this.value.arrayValue,r))}}/**
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
 */class FD{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Av(t,e=null,n=[],r=[],i=null,s=null,o=null){return new FD(t,e,n,r,i,s,o)}function Lm(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Dc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.ft=n}return e.ft}function Om(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!PD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!F_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rv(t.startAt,e.startAt)&&Rv(t.endAt,e.endAt)}function Df(t){return B.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function jD(t,e,n,r,i,s,o,a){return new Nc(t,e,n,r,i,s,o,a)}function $m(t){return new Nc(t)}function Pv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zD(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function VD(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function BD(t){return t.collectionGroup!==null}function Zi(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=VD(e),r=zD(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Co(n)),e.dt.push(new Co(_t.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Co(_t.keyField(),s))}}}return e.dt}function Yn(t){const e=Z(t);if(!e.wt)if(e.limitType==="F")e.wt=Av(e.path,e.collectionGroup,Zi(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Zi(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Co(s.field,o))}const r=e.endAt?new Au(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Au(e.startAt.position,e.startAt.inclusive):null;e.wt=Av(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.wt}function Nf(t,e,n){return new Nc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function bc(t,e){return Om(Yn(t),Yn(e))&&t.limitType===e.limitType}function V_(t){return`${Lm(Yn(t))}|lt:${t.limitType}`}function bf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>j_(r)).join(", ")}]`),Dc(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),`Target(${n})`}(Yn(t))}; limitType=${t.limitType})`}function Lc(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):B.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Zi(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Tv(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Zi(n),r)||n.endAt&&!function(i,s,o){const a=Tv(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Zi(n),r))}(t,e)}function HD(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function B_(t){return(e,n)=>{let r=!1;for(const i of Zi(t)){const s=WD(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function WD(t,e,n){const r=t.field.isKeyField()?B.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?ms(a,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ki(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return N_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qD=new Qe(B.comparator);function Xn(){return qD}const H_=new Qe(B.comparator);function lo(...t){let e=H_;for(const n of t)e=e.insert(n.key,n);return e}function W_(t){let e=H_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Jr(){return xo()}function q_(){return xo()}function xo(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const GD=new Qe(B.comparator),KD=new Ke(B.comparator);function re(...t){let e=KD;for(const n of t)e=e.add(n);return e}const QD=new Ke(de);function G_(){return QD}/**
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
 */function K_(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ru(e)?"-0":e}}function Q_(t){return{integerValue:""+t}}function YD(t,e){return kD(e)?Q_(e):K_(t,e)}/**
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
 */class Oc{constructor(){this._=void 0}}function XD(t,e,n){return t instanceof ia?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof ys?X_(t,e):t instanceof vs?J_(t,e):function(r,i){const s=Y_(r,i),o=Dv(s)+Dv(r._t);return Af(s)&&Af(r._t)?Q_(o):K_(r.serializer,o)}(t,e)}function JD(t,e,n){return t instanceof ys?X_(t,e):t instanceof vs?J_(t,e):n}function Y_(t,e){return t instanceof Pu?Af(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class ia extends Oc{}class ys extends Oc{constructor(e){super(),this.elements=e}}function X_(t,e){const n=Z_(e);for(const r of t.elements)n.some(i=>Dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class vs extends Oc{constructor(e){super(),this.elements=e}}function J_(t,e){let n=Z_(e);for(const r of t.elements)n=n.filter(i=>!Dn(i,r));return{arrayValue:{values:n}}}class Pu extends Oc{constructor(e,n){super(),this.serializer=e,this._t=n}}function Dv(t){return ze(t.integerValue||t.doubleValue)}function Z_(t){return bm(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n){this.field=e,this.transform=n}}function ZD(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof ys&&r instanceof ys||n instanceof vs&&r instanceof vs?fs(n.elements,r.elements,Dn):n instanceof Pu&&r instanceof Pu?Dn(n._t,r._t):n instanceof ia&&r instanceof ia}(t.transform,e.transform)}class eN{constructor(e,n){this.version=e,this.transformResults=n}}class on{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new on}static exists(e){return new on(void 0,e)}static updateTime(e){return new on(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class $c{}function eS(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Um(t.key,on.none()):new Ta(t.key,t.data,on.none());{const n=t.data,r=Mt.empty();let i=new Ke(_t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new Wt(i.toArray()),on.none())}}function tN(t,e,n){t instanceof Ta?function(r,i,s){const o=r.value.clone(),a=bv(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(r,i,s){if(!Dl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=bv(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(tS(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ko(t,e,n,r){return t instanceof Ta?function(i,s,o,a){if(!Dl(i.precondition,s))return o;const l=i.value.clone(),u=Lv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(i,s,o,a){if(!Dl(i.precondition,s))return o;const l=Lv(i.fieldTransforms,a,s),u=s.data;return u.setAll(tS(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Dl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function nN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Y_(r.transform,i||null);s!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,s))}return n||null}function Nv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&fs(n,r,(i,s)=>ZD(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Ta extends $c{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends $c{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function tS(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function bv(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,JD(o,a,n[i]))}return r}function Lv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,XD(s,o,e))}return r}class Um extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rN extends $c{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&tN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ko(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=q_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=eS(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>Nv(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>Nv(n,r))}}class Fm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=GD;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new Fm(e,n,r,i)}}/**
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
 */class sN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class oN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var je,oe;function aN(t){switch(t){default:return G();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function nS(t){if(t===void 0)return Qn("GRPC error has no .code"),k.UNKNOWN;switch(t){case je.OK:return k.OK;case je.CANCELLED:return k.CANCELLED;case je.UNKNOWN:return k.UNKNOWN;case je.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case je.INTERNAL:return k.INTERNAL;case je.UNAVAILABLE:return k.UNAVAILABLE;case je.UNAUTHENTICATED:return k.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case je.NOT_FOUND:return k.NOT_FOUND;case je.ALREADY_EXISTS:return k.ALREADY_EXISTS;case je.PERMISSION_DENIED:return k.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case je.ABORTED:return k.ABORTED;case je.OUT_OF_RANGE:return k.OUT_OF_RANGE;case je.UNIMPLEMENTED:return k.UNIMPLEMENTED;case je.DATA_LOSS:return k.DATA_LOSS;default:return G()}}(oe=je||(je={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class jm{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return al}static getOrCreateInstance(){return al===null&&(al=new jm),al}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let al=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ra.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Mc(J.min(),i,G_(),Xn(),re())}}class Ra{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ra(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class rS{constructor(e,n){this.targetId=e,this.Et=n}}class iS{constructor(e,n,r=It.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Ov{constructor(){this.At=0,this.Rt=Mv(),this.vt=It.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=re(),n=re(),r=re();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:G()}}),new Ra(this.vt,this.bt,e,n,r)}xt(){this.Pt=!1,this.Rt=Mv()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class lN{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Xn(),this.qt=$v(),this.Ut=new Ke(de)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const r=this.jt(n);switch(e.state){case 0:this.Wt(n)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const r=e.targetId,i=e.Et.count,s=this.Yt(r);if(s){const o=s.target;if(Df(o))if(i===0){const a=new B(o.path);this.Qt(r,a,Et.newNoDocument(a,J.min()))}else Se(i===1);else{const a=this.Zt(r);a!==i&&(this.Ht(r),this.Ut=this.Ut.add(r),(n=jm.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&Df(a.target)){const l=new B(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Et.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=re();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Mc(e,n,this.Ut,this.Lt,r);return this.Lt=Xn(),this.qt=$v(),this.Ut=new Ke(de),i}Gt(e,n){if(!this.Wt(e))return;const r=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new Ov,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Ke(de),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||F("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Ov),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function $v(){return new Qe(B.comparator)}function Mv(){return new Qe(B.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),cN=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),hN=(()=>({and:"AND",or:"OR"}))();class dN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Du(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sS(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fN(t,e){return Du(t,e.toTimestamp())}function Rn(t){return Se(!!t),J.fromTimestamp(function(e){const n=Lr(e);return new Ge(n.seconds,n.nanos)}(t))}function zm(t,e){return function(n){return new ke(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function oS(t){const e=ke.fromString(t);return Se(cS(e)),e}function Lf(t,e){return zm(t.databaseId,e.path)}function qh(t,e){const n=oS(e);if(n.get(1)!==t.databaseId.projectId)throw new z(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new B(aS(n))}function Of(t,e){return zm(t.databaseId,e)}function pN(t){const e=oS(t);return e.length===4?ke.emptyPath():aS(e)}function $f(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function aS(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Uv(t,e,n){return{name:Lf(t,e),fields:n.value.mapValue.fields}}function mN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.useProto3Json?(Se(u===void 0||typeof u=="string"),It.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),It.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:nS(l.code);return new z(u,l.message||"")}(o);n=new iS(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=qh(t,r.document.name),s=Rn(r.document.updateTime),o=r.document.createTime?Rn(r.document.createTime):J.min(),a=new Mt({mapValue:{fields:r.document.fields}}),l=Et.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Nl(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=qh(t,r.document),s=r.readTime?Rn(r.readTime):J.min(),o=Et.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Nl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=qh(t,r.document),s=r.removedTargetIds||[];n=new Nl([],s,i,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new oN(i),o=r.targetId;n=new rS(o,s)}}return n}function gN(t,e){let n;if(e instanceof Ta)n={update:Uv(t,e.key,e.value)};else if(e instanceof Um)n={delete:Lf(t,e.key)};else if(e instanceof zr)n={update:Uv(t,e.key,e.data),updateMask:kN(e.fieldMask)};else{if(!(e instanceof rN))return G();n={verify:Lf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof ia)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof ys)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof vs)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Pu)return{fieldPath:s.field.canonicalString(),increment:o._t};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:fN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function yN(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Rn(r.updateTime):Rn(i);return s.isEqual(J.min())&&(s=Rn(i)),new eN(s,r.transformResults||[])}(n,e))):[]}function vN(t,e){return{documents:[Of(t,e.path)]}}function wN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Of(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Of(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return uS(Nn.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Pi(c.field),direction:SN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.useProto3Json||Dc(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function EN(t){let e=pN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=lS(c);return h instanceof Nn&&U_(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Co(Di(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Dc(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Au(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Au(d,h)}(n.endAt)),jD(e,i,o,s,a,"F",l,u)}function _N(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return G()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function lS(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Di(e.unaryFilter.field);return We.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Di(e.unaryFilter.field);return We.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Di(e.unaryFilter.field);return We.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Di(e.unaryFilter.field);return We.create(s,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(e){return We.create(Di(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Nn.create(e.compositeFilter.filters.map(n=>lS(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return G()}}(e.compositeFilter.op))}(t):G()}function SN(t){return uN[t]}function CN(t){return cN[t]}function xN(t){return hN[t]}function Pi(t){return{fieldPath:t.canonicalString()}}function Di(t){return _t.fromServerFormat(t.fieldPath)}function uS(t){return t instanceof We?function(e){if(e.op==="=="){if(Iv(e.value))return{unaryFilter:{field:Pi(e.field),op:"IS_NAN"}};if(kv(e.value))return{unaryFilter:{field:Pi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Iv(e.value))return{unaryFilter:{field:Pi(e.field),op:"IS_NOT_NAN"}};if(kv(e.value))return{unaryFilter:{field:Pi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pi(e.field),op:CN(e.op),value:e.value}}}(t):t instanceof Nn?function(e){const n=e.getFilters().map(r=>uS(r));return n.length===1?n[0]:{compositeFilter:{op:xN(e.op),filters:n}}}(t):G()}function kN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cS(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(e,n,r,i,s=J.min(),o=J.min(),a=It.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new ni(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new ni(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IN{constructor(e){this.se=e}}function TN(t){const e=EN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Nf(e,e.limit,"L"):e}/**
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
 */class RN{constructor(){this.He=new AN}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(br.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(br.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class AN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ke(ke.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ke(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new ws(0)}static bn(){return new ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Et.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class DN{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NN{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ko(r.mutation,i,Wt.empty(),Ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=Jr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=lo();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Jr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Xn();const o=xo(),a=xo();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof zr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ko(c.mutation,u,c.mutation.getFieldMask(),Ge.now())):o.set(u.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new DN(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=xo();let i=new Qe((o,a)=>o-a),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Wt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||re()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=q_();c.forEach(d=>{if(!s.has(d)){const m=eS(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return B.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):BD(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):R.resolve(Jr());let a=-1,l=s;return o.next(u=>R.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?R.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,re())).next(c=>({batchId:a,changes:W_(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new B(n)).next(r=>{let i=lo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=lo();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,a=>{const l=function(u,c){return new Nc(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Et.newInvalidDocument(u)))});let o=lo();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&ko(u.mutation,l,Wt.empty(),Ge.now()),Lc(n,l)&&(o=o.insert(a,l))}),o})}}/**
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
 */class bN{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Rn(r.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(r){return{name:r.name,query:TN(r.bundledQuery),readTime:Rn(r.readTime)}}(n)),R.resolve()}}/**
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
 */class LN{constructor(){this.overlays=new Qe(B.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Jr();return R.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.re(e,n,s)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ts.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ts.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const i=Jr(),s=n.length+1,o=new B(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Qe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Jr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Jr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return R.resolve(a)}re(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(r.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new sN(n,r));let s=this.ts.get(n);s===void 0&&(s=re(),this.ts.set(n,s)),this.ts.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(){this.es=new Ke(Ye.ns),this.ss=new Ke(Ye.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.us(new Ye(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}hs(e){const n=new B(new ke([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.ss.forEachInRange([r,i],o=>{this.us(o),s.push(o.key)}),s}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new B(new ke([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=re();return this.ss.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.es.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return B.comparator(e.key,n.key)||de(e.ds,n.ds)}static rs(e,n){return de(e.ds,n.ds)||B.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ON{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Ke(Ye.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new iN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this._s=this._s.add(new Ye(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ys(r),s=i<0?0:i;return R.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this._s.forEachInRange([r,i],o=>{const a=this.gs(o.ds);s.push(a)}),R.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ke(de);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([s,o],a=>{r=r.add(a.ds)})}),R.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;B.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new B(s),0);let a=new Ke(de);return this._s.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.ds)),!0)},o),R.resolve(this.ps(a))}ps(e){const n=[];return e.forEach(r=>{const i=this.gs(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return R.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,n){const r=new Ye(n,0),i=this._s.firstAfterOrEqual(r);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $N{constructor(e){this.Ts=e,this.docs=new Qe(B.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():Et.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Et.newInvalidDocument(i))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Xn();const o=n.path,a=new B(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||SD(_D(c),r)<=0||(i.has(c.key)||Lc(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return R.resolve(s)}getAllFromCollectionGroup(e,n,r,i){G()}Es(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new MN(this)}getSize(e){return R.resolve(this.size)}}class MN extends PN{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UN{constructor(e){this.persistence=e,this.As=new Ls(n=>Lm(n),Om),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Vm,this.targetCount=0,this.bs=ws.vn()}forEachTarget(e,n){return this.As.forEach((r,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.As.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),R.waitFor(s).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.As.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.vs.os(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.vs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.vs.fs(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Nm(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new UN(this),this.indexManager=new RN,this.remoteDocumentCache=function(r){return new $N(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new IN(n),this.xs=new bN(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new LN,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ps[e.toKey()];return r||(r=new ON(n,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,r){F("MemoryPersistence","Starting transaction:",e);const i=new jN(this.Vs.next());return this.referenceDelegate.Ns(),r(i).next(s=>this.referenceDelegate.ks(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Os(e,n){return R.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class jN extends xD{constructor(e){super(),this.currentSequenceNumber=e}}class Bm{constructor(e){this.persistence=e,this.$s=new Vm,this.Ms=null}static Fs(e){return new Bm(e)}get Bs(){if(this.Ms)return this.Ms;throw G()}addReference(e,n,r){return this.$s.addReference(r,n),this.Bs.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.$s.removeReference(r,n),this.Bs.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Bs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,r=>{const i=B.fromPath(r);return this.Ls(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(r=>{r?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hm{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Vi=r,this.Si=i}static Di(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Hm(e,n.fromCache,r,i)}}/**
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
 */class zN{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Ni(e,n).next(s=>s||this.ki(e,n,i,r)).next(s=>s||this.Oi(e,n))}Ni(e,n){if(Pv(n))return R.resolve(null);let r=Yn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=Nf(n,null,"F"),r=Yn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.$i(n,a);return this.Mi(n,u,o,l.readTime)?this.Ni(e,Nf(n,null,"F")):this.Fi(e,u,n,l)}))})))}ki(e,n,r,i){return Pv(n)||i.isEqual(J.min())?this.Oi(e,n):this.xi.getDocuments(e,r).next(s=>{const o=this.$i(n,s);return this.Mi(n,o,r,i)?this.Oi(e,n):(_v()<=ue.DEBUG&&F("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),bf(n)),this.Fi(e,o,n,ED(i,-1)))})}$i(e,n){let r=new Ke(B_(e));return n.forEach((i,s)=>{Lc(e,s)&&(r=r.add(s))}),r}Mi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Oi(e,n){return _v()<=ue.DEBUG&&F("QueryEngine","Using full collection scan to execute query:",bf(n)),this.xi.getDocumentsMatchingQuery(e,n,br.min())}Fi(e,n,r,i){return this.xi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */class VN{constructor(e,n,r,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Qe(de),this.qi=new Ls(s=>Lm(s),Om),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new NN(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function BN(t,e,n,r){return new VN(t,e,n,r)}async function hS(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Gi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=re();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function HN(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=R.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(v=>{const w=l.docVersions.get(m);Se(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=re();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dS(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function WN(t,e){const n=Z(t),r=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ds.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ds.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(It.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(v,w,E){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,m,c)&&a.push(n.Ds.updateTargetData(s,m))});let l=Xn(),u=re();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(qN(s,o,e.documentUpdates).next(c=>{l=c.zi,u=c.ji})),!r.isEqual(J.min())){const c=n.Ds.getLastRemoteSnapshotVersion(s).next(h=>n.Ds.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return R.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Li=i,s))}function qN(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Xn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(J.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):F("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{zi:o,ji:i}})}function GN(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KN(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ds.getTargetData(r,e).next(s=>s?(i=s,R.resolve(i)):n.Ds.allocateTargetId(r).next(o=>(i=new ni(e,o,0,r.currentSequenceNumber),n.Ds.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Li.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(r.targetId,r),n.qi.set(e,r.targetId)),r})}async function Mf(t,e,n){const r=Z(t),i=r.Li.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ia(o))throw o;F("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(i.target)}function Fv(t,e,n){const r=Z(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=Z(a),h=c.qi.get(u);return h!==void 0?R.resolve(c.Li.get(h)):c.Ds.getTargetData(l,u)}(r,o,Yn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(a=>(QN(r,HD(e),a),{documents:a,Wi:s})))}function QN(t,e,n){let r=t.Ui.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ui.set(e,r)}class jv{constructor(){this.activeTargetIds=G_()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class YN{constructor(){this.Br=new jv,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,r){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new jv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XN{qr(e){}shutdown(){}}/**
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
 */class zv{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){F("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){F("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ll=null;function Gh(){return ll===null?ll=268435456+Math.round(2147483648*Math.random()):ll++,"0x"+ll.toString(16)}/**
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
 */const JN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gt="WebChannelConnection";class eb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,r,i,s){const o=Gh(),a=this.ao(e,n);F("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const l={};return this.ho(l,i,s),this.lo(e,a,l,r).then(u=>(F("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Tu("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,n,r,i,s,o){return this.co(e,n,r,i,s)}ho(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+bs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ao(e,n){const r=JN[e];return`${this.ro}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,r,i){const s=Gh();return new Promise((o,a)=>{const l=new cD;l.setWithCredentials(!0),l.listenOnce(aD.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Wh.NO_ERROR:const c=l.getResponseJson();F(gt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case Wh.TIMEOUT:F(gt,`RPC '${e}' ${s} timed out`),a(new z(k.DEADLINE_EXCEEDED,"Request time out"));break;case Wh.HTTP_ERROR:const h=l.getStatus();if(F(gt,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const m=d==null?void 0:d.error;if(m&&m.status&&m.message){const v=function(w){const E=w.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(E)>=0?E:k.UNKNOWN}(m.status);a(new z(v,m.message))}else a(new z(k.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new z(k.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{F(gt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);F(gt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=Gh(),s=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sD(),a=oD(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new uD({})),this.ho(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=s.join("");F(gt,`Creating RPC '${e}' stream ${i}: ${u}`,l);const c=o.createWebChannel(u,l);let h=!1,d=!1;const m=new ZN({Wr:w=>{d?F(gt,`Not sending because RPC '${e}' stream ${i} is closed:`,w):(h||(F(gt,`Opening RPC '${e}' stream ${i} transport.`),c.open(),h=!0),F(gt,`RPC '${e}' stream ${i} sending:`,w),c.send(w))},Hr:()=>c.close()}),v=(w,E,p)=>{w.listen(E,f=>{try{p(f)}catch(g){setTimeout(()=>{throw g},0)}})};return v(c,il.EventType.OPEN,()=>{d||F(gt,`RPC '${e}' stream ${i} transport opened.`)}),v(c,il.EventType.CLOSE,()=>{d||(d=!0,F(gt,`RPC '${e}' stream ${i} transport closed`),m.so())}),v(c,il.EventType.ERROR,w=>{d||(d=!0,Tu(gt,`RPC '${e}' stream ${i} transport errored:`,w),m.so(new z(k.UNAVAILABLE,"The operation could not be completed")))}),v(c,il.EventType.MESSAGE,w=>{var E;if(!d){const p=w.data[0];Se(!!p);const f=p,g=f.error||((E=f[0])===null||E===void 0?void 0:E.error);if(g){F(gt,`RPC '${e}' stream ${i} received error:`,g);const _=g.status;let x=function(D){const N=je[D];if(N!==void 0)return nS(N)}(_),P=g.message;x===void 0&&(x=k.INTERNAL,P="Unknown error status: "+_+" with message "+g.message),d=!0,m.so(new z(x,P)),c.close()}else F(gt,`RPC '${e}' stream ${i} received:`,p),m.io(p)}}),v(a,lD.STAT_EVENT,w=>{w.stat===wv.PROXY?F(gt,`RPC '${e}' stream ${i} detected buffering proxy`):w.stat===wv.NOPROXY&&F(gt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{m.no()},0),m}}function Kh(){return typeof document<"u"?document:null}/**
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
 */function Uc(t){return new dN(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ws=e,this.timerId=n,this._o=r,this.mo=i,this.yo=s,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),i=Math.max(0,n-r);i>0&&F("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,r,i,s,o,a,l){this.Ws=e,this.bo=r,this.Po=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new fS(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(Qn(n.toString()),Qn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Vo===n&&this.Ko(r,i)},r=>{e(()=>{const i=new z(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(i)})})}Ko(e,n){const r=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{r(()=>this.Go(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return F("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(F("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class tb extends pS{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=mN(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?J.min():s.readTime?Rn(s.readTime):J.min()}(e);return this.listener.zo(n,r)}jo(e){const n={};n.database=$f(this.serializer),n.addTarget=function(i,s){let o;const a=s.target;return o=Df(a)?{documents:vN(i,a)}:{query:wN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=sS(i,s.resumeToken):s.snapshotVersion.compareTo(J.min())>0&&(o.readTime=Du(i,s.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=_N(this.serializer,e);r&&(n.labels=r),this.Fo(n)}Wo(e){const n={};n.database=$f(this.serializer),n.removeTarget=e,this.Fo(n)}}class nb extends pS{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=yN(e.writeResults,e.commitTime),r=Rn(e.commitTime);return this.listener.Zo(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=$f(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>gN(this.serializer,r))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rb extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new z(k.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.co(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(k.UNKNOWN,i.toString())})}fo(e,n,r,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.fo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(k.UNKNOWN,s.toString())})}terminate(){this.eu=!0}}class ib{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class sb{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=s,this._u.qr(o=>{r.enqueueAndForget(async()=>{Ii(this)&&(F("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=Z(a);l.du.add(4),await Aa(l),l.mu.set("Unknown"),l.du.delete(4),await Fc(l)}(this))})}),this.mu=new ib(r,i)}}async function Fc(t){if(Ii(t))for(const e of t.wu)await e(!0)}async function Aa(t){for(const e of t.wu)await e(!1)}function mS(t,e){const n=Z(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Gm(n)?qm(n):Os(n).No()&&Wm(n,e))}function gS(t,e){const n=Z(t),r=Os(n);n.fu.delete(e),r.No()&&yS(n,e),n.fu.size===0&&(r.No()?r.$o():Ii(n)&&n.mu.set("Unknown"))}function Wm(t,e){t.gu.Ot(e.targetId),Os(t).jo(e)}function yS(t,e){t.gu.Ot(e),Os(t).Wo(e)}function qm(t){t.gu=new lN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Os(t).start(),t.mu.ou()}function Gm(t){return Ii(t)&&!Os(t).xo()&&t.fu.size>0}function Ii(t){return Z(t).du.size===0}function vS(t){t.gu=void 0}async function ob(t){t.fu.forEach((e,n)=>{Wm(t,e)})}async function ab(t,e){vS(t),Gm(t)?(t.mu.au(e),qm(t)):t.mu.set("Unknown")}async function lb(t,e,n){if(t.mu.set("Online"),e instanceof iS&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.fu.delete(o),r.gu.removeTarget(o))}(t,e)}catch(r){F("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Nu(t,r)}else if(e instanceof Nl?t.gu.Kt(e):e instanceof rS?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(J.min()))try{const r=await dS(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.gu.Xt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.fu.get(l);u&&i.fu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.fu.get(a);if(!l)return;i.fu.set(a,l.withResumeToken(It.EMPTY_BYTE_STRING,l.snapshotVersion)),yS(i,a);const u=new ni(l.target,a,1,l.sequenceNumber);Wm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){F("RemoteStore","Failed to raise snapshot:",r),await Nu(t,r)}}async function Nu(t,e,n){if(!Ia(e))throw e;t.du.add(1),await Aa(t),t.mu.set("Offline"),n||(n=()=>dS(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{F("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await Fc(t)})}function wS(t,e){return e().catch(n=>Nu(t,n,e))}async function jc(t){const e=Z(t),n=Or(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;ub(e);)try{const i=await GN(e.localStore,r);if(i===null){e.lu.length===0&&n.$o();break}r=i.batchId,cb(e,i)}catch(i){await Nu(e,i)}ES(e)&&_S(e)}function ub(t){return Ii(t)&&t.lu.length<10}function cb(t,e){t.lu.push(e);const n=Or(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function ES(t){return Ii(t)&&!Or(t).xo()&&t.lu.length>0}function _S(t){Or(t).start()}async function hb(t){Or(t).tu()}async function db(t){const e=Or(t);for(const n of t.lu)e.Yo(n.mutations)}async function fb(t,e,n){const r=t.lu.shift(),i=Fm.from(r,e,n);await wS(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await jc(t)}async function pb(t,e){e&&Or(t).Jo&&await async function(n,r){if(i=r.code,aN(i)&&i!==k.ABORTED){const s=n.lu.shift();Or(n).Oo(),await wS(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await jc(n)}var i}(t,e),ES(t)&&_S(t)}async function Vv(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),F("RemoteStore","RemoteStore received new credentials");const r=Ii(n);n.du.add(3),await Aa(n),r&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await Fc(n)}async function mb(t,e){const n=Z(t);e?(n.du.delete(2),await Fc(n)):e||(n.du.add(2),await Aa(n),n.mu.set("Unknown"))}function Os(t){return t.yu||(t.yu=function(e,n,r){const i=Z(e);return i.nu(),new tb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:ob.bind(null,t),Zr:ab.bind(null,t),zo:lb.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Gm(t)?qm(t):t.mu.set("Unknown")):(await t.yu.stop(),vS(t))})),t.yu}function Or(t){return t.pu||(t.pu=function(e,n,r){const i=Z(e);return i.nu(),new nb(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{Jr:hb.bind(null,t),Zr:pb.bind(null,t),Xo:db.bind(null,t),Zo:fb.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await jc(t)):(await t.pu.stop(),t.lu.length>0&&(F("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Bn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Km(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Qm(t,e){if(Qn("AsyncQueue",`${e}: ${t}`),Ia(t))return new z(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e){this.comparator=e?(n,r)=>e(n,r)||B.comparator(n.key,r.key):(n,r)=>B.comparator(n.key,r.key),this.keyedMap=lo(),this.sortedSet=new Qe(this.comparator)}static emptySet(e){return new es(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof es)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new es;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(){this.Iu=new Qe(B.comparator)}track(e){const n=e.doc.key,r=this.Iu.get(n);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(n):e.type===1&&r.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):G():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Es{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Es(e,n,es.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&bc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(){this.Eu=void 0,this.listeners=[]}}class yb{constructor(){this.queries=new Ls(e=>V_(e),bc),this.onlineState="Unknown",this.Au=new Set}}async function SS(t,e){const n=Z(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new gb),i)try{s.Eu=await n.onListen(r)}catch(o){const a=Qm(o,`Initialization of query '${bf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Ru(n.onlineState),s.Eu&&e.vu(s.Eu)&&Ym(n)}async function CS(t,e){const n=Z(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function vb(t,e){const n=Z(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.vu(i)&&(r=!0);o.Eu=i}}r&&Ym(n)}function wb(t,e,n){const r=Z(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function Ym(t){t.Au.forEach(e=>{e.next()})}class xS{constructor(e,n,r){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Es(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e){this.key=e}}class IS{constructor(e){this.key=e}}class Eb{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=re(),this.mutatedKeys=re(),this.Ku=B_(e),this.Gu=new es(this.Ku)}get Qu(){return this.Lu}zu(e,n){const r=n?n.ju:new Bv,i=n?n.Gu:this.Gu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Lc(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?v!==w&&(r.track({type:3,doc:m}),E=!0):this.Wu(d,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.Ku(m,l)>0||u&&this.Ku(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Gu:o,ju:r,Mi:a,mutatedKeys:s}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const s=e.ju.Tu();s.sort((u,c)=>function(h,d){const m=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return m(h)-m(d)}(u.type,c.type)||this.Ku(u.doc,c.doc)),this.Hu(r);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,s.length!==0||l?{snapshot:new Es(this.query,e.Gu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Bv,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=re(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const n=[];return e.forEach(r=>{this.Uu.has(r)||n.push(new IS(r))}),this.Uu.forEach(r=>{e.has(r)||n.push(new kS(r))}),n}Xu(e){this.Lu=e.Wi,this.Uu=re();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Es.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class _b{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Sb{constructor(e){this.key=e,this.ec=!1}}class Cb{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Ls(a=>V_(a),bc),this.ic=new Map,this.rc=new Set,this.oc=new Qe(B.comparator),this.uc=new Map,this.cc=new Vm,this.ac={},this.hc=new Map,this.lc=ws.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function xb(t,e){const n=Lb(t);let r,i;const s=n.sc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.tc();else{const o=await KN(n.localStore,Yn(e));n.isPrimaryClient&&mS(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await kb(n,e,r,a==="current",o.resumeToken)}return i}async function kb(t,e,n,r,i){t.dc=(h,d,m)=>async function(v,w,E,p){let f=w.view.zu(E);f.Mi&&(f=await Fv(v.localStore,w.query,!1).then(({documents:x})=>w.view.zu(x,f)));const g=p&&p.targetChanges.get(w.targetId),_=w.view.applyChanges(f,v.isPrimaryClient,g);return Wv(v,w.targetId,_.Yu),_.snapshot}(t,h,d,m);const s=await Fv(t.localStore,e,!0),o=new Eb(e,s.Wi),a=o.zu(s.documents),l=Ra.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Wv(t,n,u.Yu);const c=new _b(e,n,o);return t.sc.set(e,c),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),u.snapshot}async function Ib(t,e){const n=Z(t),r=n.sc.get(e),i=n.ic.get(r.targetId);if(i.length>1)return n.ic.set(r.targetId,i.filter(s=>!bc(s,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Mf(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),gS(n.remoteStore,r.targetId),Uf(n,r.targetId)}).catch(ka)):(Uf(n,r.targetId),await Mf(n.localStore,r.targetId,!0))}async function Tb(t,e,n){const r=Ob(t);try{const i=await function(s,o){const a=Z(s),l=Ge.now(),u=o.reduce((d,m)=>d.add(m.key),re());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=Xn(),v=re();return a.Ki.getEntries(d,u).next(w=>{m=w,m.forEach((E,p)=>{p.isValidDocument()||(v=v.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(w=>{c=w;const E=[];for(const p of o){const f=nN(p,c.get(p.key).overlayedDocument);f!=null&&E.push(new zr(p.key,f,O_(f.value.mapValue),on.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(w=>{h=w;const E=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,E)})}).then(()=>({batchId:h.batchId,changes:W_(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.ac[s.currentUser.toKey()];l||(l=new Qe(de)),l=l.insert(o,a),s.ac[s.currentUser.toKey()]=l}(r,i.batchId,n),await Pa(r,i.changes),await jc(r.remoteStore)}catch(i){const s=Qm(i,"Failed to persist write");n.reject(s)}}async function TS(t,e){const n=Z(t);try{const r=await WN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.uc.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?Se(o.ec):i.removedDocuments.size>0&&(Se(o.ec),o.ec=!1))}),await Pa(n,r,e)}catch(r){await ka(r)}}function Hv(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.sc.forEach((s,o)=>{const a=o.view.Ru(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=Z(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Ru(o)&&(l=!0)}),l&&Ym(a)}(r.eventManager,e),i.length&&r.nc.zo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Rb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.uc.get(e),s=i&&i.key;if(s){let o=new Qe(B.comparator);o=o.insert(s,Et.newNoDocument(s,J.min()));const a=re().add(s),l=new Mc(J.min(),new Map,new Ke(de),o,a);await TS(r,l),r.oc=r.oc.remove(s),r.uc.delete(e),Xm(r)}else await Mf(r.localStore,e,!1).then(()=>Uf(r,e,n)).catch(ka)}async function Ab(t,e){const n=Z(t),r=e.batch.batchId;try{const i=await HN(n.localStore,e);AS(n,r,null),RS(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Pa(n,i)}catch(i){await ka(i)}}async function Pb(t,e,n){const r=Z(t);try{const i=await function(s,o){const a=Z(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(Se(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);AS(r,e,n),RS(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Pa(r,i)}catch(i){await ka(i)}}function RS(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function AS(t,e,n){const r=Z(t);let i=r.ac[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ac[r.currentUser.toKey()]=i}}function Uf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ic.get(e))t.sc.delete(r),n&&t.nc.wc(r,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(r=>{t.cc.containsKey(r)||PS(t,r)})}function PS(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(gS(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),Xm(t))}function Wv(t,e,n){for(const r of n)r instanceof kS?(t.cc.addReference(r.key,e),Db(t,r)):r instanceof IS?(F("SyncEngine","Document no longer in limbo: "+r.key),t.cc.removeReference(r.key,e),t.cc.containsKey(r.key)||PS(t,r.key)):G()}function Db(t,e){const n=e.key,r=n.path.canonicalString();t.oc.get(n)||t.rc.has(r)||(F("SyncEngine","New document in limbo: "+n),t.rc.add(r),Xm(t))}function Xm(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new B(ke.fromString(e)),r=t.lc.next();t.uc.set(r,new Sb(n)),t.oc=t.oc.insert(n,r),mS(t.remoteStore,new ni(Yn($m(n.path)),r,2,Nm.ct))}}async function Pa(t,e,n){const r=Z(t),i=[],s=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,l)=>{o.push(r.dc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Hm.Di(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.nc.zo(i),await async function(a,l){const u=Z(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>R.forEach(l,h=>R.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>R.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ia(c))throw c;F("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Li.get(h),m=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(m);u.Li=u.Li.insert(h,v)}}}(r.localStore,s))}async function Nb(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){F("SyncEngine","User change. New user:",e.toKey());const r=await hS(n.localStore,e);n.currentUser=e,function(i,s){i.hc.forEach(o=>{o.forEach(a=>{a.reject(new z(k.CANCELLED,s))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Pa(n,r.Qi)}}function bb(t,e){const n=Z(t),r=n.uc.get(e);if(r&&r.ec)return re().add(r.key);{let i=re();const s=n.ic.get(e);if(!s)return i;for(const o of s){const a=n.sc.get(o);i=i.unionWith(a.view.Qu)}return i}}function Lb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=TS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Rb.bind(null,e),e.nc.zo=vb.bind(null,e.eventManager),e.nc.wc=wb.bind(null,e.eventManager),e}function Ob(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ab.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Pb.bind(null,e),e}class qv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return BN(this.persistence,new zN,e.initialUser,this.serializer)}createPersistence(e){return new FN(Bm.Fs,this.serializer)}createSharedClientState(e){return new YN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class $b{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Hv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Nb.bind(null,this.syncEngine),await mb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yb}createDatastore(e){const n=Uc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new eb(i));var i;return function(s,o,a,l){return new rb(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Hv(this.syncEngine,a,0),o=zv.D()?new zv:new XN,new sb(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new Cb(r,i,s,o,a,l);return u&&(c.fc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);F("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Aa(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class DS{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Qn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=vt.UNAUTHENTICATED,this.clientId=D_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{F("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(F("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Bn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Qm(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Qh(t,e){t.asyncQueue.verifyOperationInProgress(),F("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await hS(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Gv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fb(t);F("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Vv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Vv(e.remoteStore,s)),t._onlineComponents=e}function Ub(t){return t.name==="FirebaseError"?t.code===k.FAILED_PRECONDITION||t.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Fb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){F("FirestoreClient","Using user provided OfflineComponentProvider");try{await Qh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ub(n))throw n;Tu("Error using user provided cache. Falling back to memory cache: "+n),await Qh(t,new qv)}}else F("FirestoreClient","Using default OfflineComponentProvider"),await Qh(t,new qv);return t._offlineComponents}async function NS(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(F("FirestoreClient","Using user provided OnlineComponentProvider"),await Gv(t,t._uninitializedComponentsProvider._online)):(F("FirestoreClient","Using default OnlineComponentProvider"),await Gv(t,new $b))),t._onlineComponents}function jb(t){return NS(t).then(e=>e.syncEngine)}async function bS(t){const e=await NS(t),n=e.eventManager;return n.onListen=xb.bind(null,e.syncEngine),n.onUnlisten=Ib.bind(null,e.syncEngine),n}function zb(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new DS({next:h=>{s.enqueueAndForget(()=>CS(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new z(k.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new z(k.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new xS($m(o.path),u,{includeMetadataChanges:!0,xu:!0});return SS(i,c)}(await bS(t),t.asyncQueue,e,n,r)),r.promise}function Vb(t,e,n={}){const r=new Bn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new DS({next:h=>{s.enqueueAndForget(()=>CS(i,c)),h.fromCache&&a.source==="server"?l.reject(new z(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new xS(o,u,{includeMetadataChanges:!0,xu:!0});return SS(i,c)}(await bS(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */const Kv=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LS(t,e,n){if(!n)throw new z(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Bb(t,e,n,r){if(e===!0&&r===!0)throw new z(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qv(t){if(!B.isDocumentKey(t))throw new z(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Yv(t){if(B.isDocumentKey(t))throw new z(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jm(t);throw new z(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Xv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new z(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Bb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class zc{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Xv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Xv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new hD;switch(n.type){case"firstParty":return new mD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new z(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Kv.get(e);n&&(F("ComponentProvider","Removing Datastore"),Kv.delete(e),n.terminate())}(this),Promise.resolve()}}function Hb(t,e,n,r={}){var i;const s=(t=yn(t,zc))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&Tu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=vt.MOCK_USER;else{o=SE(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new z(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new vt(l)}t._authCredentials=new dD(new P_(o,a))}}/**
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
 */class Vt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Rr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Vt(this.firestore,e,this._key)}}class Vc{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vc(this.firestore,e,this._query)}}class Rr extends Vc{constructor(e,n,r){super(e,n,$m(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Vt(this.firestore,null,new B(e))}withConverter(e){return new Rr(this.firestore,e,this._path)}}function Zm(t,e,...n){if(t=Pe(t),LS("collection","path",e),t instanceof zc){const r=ke.fromString(e,...n);return Yv(r),new Rr(t,null,r)}{if(!(t instanceof Vt||t instanceof Rr))throw new z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Yv(r),new Rr(t.firestore,null,r)}}function ve(t,e,...n){if(t=Pe(t),arguments.length===1&&(e=D_.A()),LS("doc","path",e),t instanceof zc){const r=ke.fromString(e,...n);return Qv(r),new Vt(t,null,new B(r))}{if(!(t instanceof Vt||t instanceof Rr))throw new z(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Qv(r),new Vt(t.firestore,t instanceof Rr?t.converter:null,new B(r))}}/**
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
 */class Wb{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new fS(this,"async_queue_retry"),this.qc=()=>{const n=Kh();n&&F("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=Kh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=Kh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Bn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Ia(e))throw e;F("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Qn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Fc=!1,r))));return this.Nc=n,n}enqueueAfterDelay(e,n,r){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Km.createAndSchedule(this,e,n,r,s=>this.Qc(s));return this.$c.push(i),i}Uc(){this.Mc&&G()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}class Ti extends zc{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Wb,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||OS(this),this._firestoreClient.terminate()}}function qb(t,e){const n=typeof t=="object"?t:um(),r=typeof t=="string"?t:e||"(default)",i=mc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=EE("firestore");s&&Hb(i,...s)}return i}function eg(t){return t._firestoreClient||OS(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function OS(t){var e,n,r;const i=t._freezeSettings(),s=function(o,a,l,u){return new RD(o,a,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Mb(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class _s{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _s(It.fromBase64String(e))}catch(n){throw new z(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new _s(It.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Bc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new _t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class $s{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=/^__.*__$/;class Kb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Ta(e,this.data,n,this.fieldTransforms)}}class $S{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function MS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Hc{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Jc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Hc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.ea(e),i}na(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:r,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return bu(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(MS(this.Yc)&&Gb.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Qb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uc(e)}ua(e,n,r,i=!1){return new Hc({Yc:e,methodName:n,oa:r,path:_t.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ng(t){const e=t._freezeSettings(),n=Uc(t._databaseId);return new Qb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function US(t,e,n,r,i,s={}){const o=t.ua(s.merge||s.mergeFields?2:0,e,n,i);ig("Data must be an object, but it was:",o,r);const a=jS(r,o);let l,u;if(s.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Ff(e,h,n);if(!o.contains(d))throw new z(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);VS(c,d)||c.push(d)}l=new Wt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new Kb(new Mt(a),l,u)}class Wc extends $s{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wc}}function FS(t,e,n){return new Hc({Yc:3,oa:e.settings.oa,methodName:t._methodName,ta:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class rg extends $s{_toFieldTransform(e){return new Mm(e.path,new ia)}isEqual(e){return e instanceof rg}}class Yb extends $s{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=FS(this,e,!0),r=this.ca.map(s=>Ms(s,n)),i=new ys(r);return new Mm(e.path,i)}isEqual(e){return this===e}}class Xb extends $s{constructor(e,n){super(e),this.ca=n}_toFieldTransform(e){const n=FS(this,e,!0),r=this.ca.map(s=>Ms(s,n)),i=new vs(r);return new Mm(e.path,i)}isEqual(e){return this===e}}function Jb(t,e,n,r){const i=t.ua(1,e,n);ig("Data must be an object, but it was:",i,r);const s=[],o=Mt.empty();ki(r,(l,u)=>{const c=sg(e,l,n);u=Pe(u);const h=i.na(c);if(u instanceof Wc)s.push(c);else{const d=Ms(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Wt(s);return new $S(o,a,i.fieldTransforms)}function Zb(t,e,n,r,i,s){const o=t.ua(1,e,n),a=[Ff(e,r,n)],l=[i];if(s.length%2!=0)throw new z(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Ff(e,s[d])),l.push(s[d+1]);const u=[],c=Mt.empty();for(let d=a.length-1;d>=0;--d)if(!VS(u,a[d])){const m=a[d];let v=l[d];v=Pe(v);const w=o.na(m);if(v instanceof Wc)u.push(m);else{const E=Ms(v,w);E!=null&&(u.push(m),c.set(m,E))}}const h=new Wt(u);return new $S(c,h,o.fieldTransforms)}function Ms(t,e){if(zS(t=Pe(t)))return ig("Unsupported field value:",e,t),jS(t,e);if(t instanceof $s)return function(n,r){if(!MS(r.Yc))throw r.ia(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Ms(o,r.sa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Pe(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return YD(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ge.fromDate(n);return{timestampValue:Du(r.serializer,i)}}if(n instanceof Ge){const i=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Du(r.serializer,i)}}if(n instanceof tg)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof _s)return{bytesValue:sS(r.serializer,n._byteString)};if(n instanceof Vt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ia(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zm(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ia(`Unsupported field value: ${Jm(n)}`)}(t,e)}function jS(t,e){const n={};return N_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ki(t,(r,i)=>{const s=Ms(i,e.Xc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function zS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof tg||t instanceof _s||t instanceof Vt||t instanceof $s)}function ig(t,e,n){if(!zS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Jm(n);throw r==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+r)}}function Ff(t,e,n){if((e=Pe(e))instanceof Bc)return e._internalPath;if(typeof e=="string")return sg(t,e);throw bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const eL=new RegExp("[~\\*/\\[\\]]");function sg(t,e,n){if(e.search(eL)>=0)throw bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Bc(...e.split("."))._internalPath}catch{throw bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new z(k.INVALID_ARGUMENT,a+t+l)}function VS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class BS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Vt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new tL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(HS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class tL extends BS{data(){return super.data()}}function HS(t,e){return typeof e=="string"?sg(t,e):e instanceof Bc?e._internalPath:e._delegate._internalPath}/**
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
 */function nL(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class rL{convertValue(e,n="none"){switch(pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ps(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){const r={};return ki(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new tg(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=L_(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ta(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);Se(cS(r));const i=new na(r.get(1),r.get(3)),s=new B(r.popFirst(5));return i.isEqual(n)||Qn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function WS(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class qS extends BS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new bl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(HS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class bl extends qS{data(e={}){return super.data(e)}}class iL{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new bl(this._firestore,this._userDataWriter,r.key,r,new uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new bl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new uo(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:sL(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function sL(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function mi(t){t=yn(t,Vt);const e=yn(t.firestore,Ti);return zb(eg(e),t._key).then(n=>uL(e,t,n))}class GS extends rL{constructor(e){super(),this.firestore=e}convertBytes(e){return new _s(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Vt(this.firestore,null,n)}}function KS(t){t=yn(t,Vc);const e=yn(t.firestore,Ti),n=eg(e),r=new GS(e);return nL(t._query),Vb(n,t._query).then(i=>new iL(e,r,t,i))}function oL(t,e,n){t=yn(t,Vt);const r=yn(t.firestore,Ti),i=WS(t.converter,e,n);return qc(r,[US(ng(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,on.none())])}function at(t,e,n,...r){t=yn(t,Vt);const i=yn(t.firestore,Ti),s=ng(i);let o;return o=typeof(e=Pe(e))=="string"||e instanceof Bc?Zb(s,"updateDoc",t._key,e,n,r):Jb(s,"updateDoc",t._key,e),qc(i,[o.toMutation(t._key,on.exists(!0))])}function aL(t){return qc(yn(t.firestore,Ti),[new Um(t._key,on.none())])}function lL(t,e){const n=yn(t.firestore,Ti),r=ve(t),i=WS(t.converter,e);return qc(n,[US(ng(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,on.exists(!1))]).then(()=>r)}function qc(t,e){return function(n,r){const i=new Bn;return n.asyncQueue.enqueueAndForget(async()=>Tb(await jb(n),r,i)),i.promise}(eg(t),e)}function uL(t,e,n){const r=n.docs.get(e._key),i=new GS(t);return new qS(t,i,e._key,r,new uo(n.hasPendingWrites,n.fromCache),e.converter)}function cL(){return new rg("serverTimestamp")}function Ar(...t){return new Yb("arrayUnion",t)}function ts(...t){return new Xb("arrayRemove",t)}(function(t,e=!0){(function(n){bs=n})(Ci),di(new Nr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Ti(new fD(n.getProvider("auth-internal")),new yD(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new z(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new na(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Tn(Ev,"3.10.1",t),Tn(Ev,"3.10.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QS="firebasestorage.googleapis.com",YS="storageBucket",hL=2*60*1e3,dL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends bn{constructor(e,n,r=0){super(Yh(e),`Firebase Storage: ${n} (${Yh(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Oe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Le;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Le||(Le={}));function Yh(t){return"storage/"+t}function og(){const t="An unknown error occurred, please check the error payload for server response.";return new Oe(Le.UNKNOWN,t)}function fL(t){return new Oe(Le.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function pL(t){return new Oe(Le.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Oe(Le.UNAUTHENTICATED,t)}function gL(){return new Oe(Le.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yL(t){return new Oe(Le.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vL(){return new Oe(Le.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wL(){return new Oe(Le.CANCELED,"User canceled the upload/download.")}function EL(t){return new Oe(Le.INVALID_URL,"Invalid URL '"+t+"'.")}function _L(t){return new Oe(Le.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function SL(){return new Oe(Le.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+YS+"' property when initializing the app?")}function CL(){return new Oe(Le.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function xL(){return new Oe(Le.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function kL(t){return new Oe(Le.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function jf(t){return new Oe(Le.INVALID_ARGUMENT,t)}function XS(){return new Oe(Le.APP_DELETED,"The Firebase app was deleted.")}function IL(t){return new Oe(Le.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Io(t,e){return new Oe(Le.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Js(t){throw new Oe(Le.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=qt.makeFromUrl(e,n)}catch{return new qt(e,"")}if(r.path==="")return r;throw _L(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(_){_.path.charAt(_.path.length-1)==="/"&&(_.path_=_.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(_){_.path_=decodeURIComponent(_.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",m=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},w=n===QS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${E}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:m,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let _=0;_<g.length;_++){const x=g[_],P=x.regex.exec(e);if(P){const D=P[x.indices.bucket];let N=P[x.indices.path];N||(N=""),r=new qt(D,N),x.postModify(r);break}}if(r==null)throw EL(e);return r}}class TL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function h(E){i=setTimeout(()=>{i=null,t(m,l())},E)}function d(){s&&clearTimeout(s)}function m(E,...p){if(u){d();return}if(E){d(),c.call(null,E,...p);return}if(l()||o){d(),c.call(null,E,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let v=!1;function w(E){v||(v=!0,d(),!u&&(i!==null?(E||(a=2),clearTimeout(i),h(0)):E||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function AL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PL(t){return t!==void 0}function DL(t){return typeof t=="object"&&!Array.isArray(t)}function ag(t){return typeof t=="string"||t instanceof String}function Jv(t){return lg()&&t instanceof Blob}function lg(){return typeof Blob<"u"&&!BR()}function Zv(t,e,n,r){if(r<e)throw jf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw jf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gc(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function JS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ri;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ri||(ri={}));/**
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
 */function NL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,v)=>{this.resolve_=m,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new ul(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ri.NO_ERROR,l=s.getStatus();if(!a||NL(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ri.ABORT;r(!1,new ul(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new ul(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());PL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=og();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?XS():wL();o(l)}else{const l=vL();o(l)}};this.canceled_?n(!1,new ul(!1,null,!0)):this.backoffId_=RL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&AL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class ul{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function LL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function OL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $L(t,e){e&&(t["X-Firebase-GMPID"]=e)}function ML(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function UL(t,e,n,r,i,s,o=!0){const a=JS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return $L(u,e),LL(u,n),OL(u,s),ML(u,r),new bL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function jL(...t){const e=FL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(lg())return new Blob(t);throw new Oe(Le.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function zL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function VL(t){if(typeof atob>"u")throw kL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Xh{constructor(e,n){this.data=e,this.contentType=n||null}}function BL(t,e){switch(t){case xn.RAW:return new Xh(ZS(e));case xn.BASE64:case xn.BASE64URL:return new Xh(eC(t,e));case xn.DATA_URL:return new Xh(WL(e),qL(e))}throw og()}function ZS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function HL(t){let e;try{e=decodeURIComponent(t)}catch{throw Io(xn.DATA_URL,"Malformed data URL.")}return ZS(e)}function eC(t,e){switch(t){case xn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Io(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case xn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Io(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=VL(e)}catch(i){throw i.message.includes("polyfill")?i:Io(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class tC{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Io(xn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=GL(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function WL(t){const e=new tC(t);return e.base64?eC(xn.BASE64,e.rest):HL(e.rest)}function qL(t){return new tC(t).contentType}function GL(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e,n){let r=0,i="";Jv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Jv(this.data_)){const r=this.data_,i=zL(r,e,n);return i===null?null:new lr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new lr(r,!0)}}static getBlob(...e){if(lg()){const n=e.map(r=>r instanceof lr?r.data_:r);return new lr(jL.apply(null,n))}else{const n=e.map(o=>ag(o)?BL(xn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new lr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(t){let e;try{e=JSON.parse(t)}catch{return null}return DL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function QL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function rC(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YL(t,e){return e}class Tt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||YL}}let cl=null;function XL(t){return!ag(t)||t.length<2?t:rC(t)}function iC(){if(cl)return cl;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(s,o){return XL(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Tt("size");return i.xform=r,t.push(i),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),cl=t,cl}function JL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new qt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function ZL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return JL(r,t),r}function sC(t,e,n){const r=nC(e);return r===null?null:ZL(t,r,n)}function e2(t,e,n,r){const i=nC(e);if(i===null||!ag(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),m=Gc(d,n,r),v=JS({alt:"media",token:u});return m+v})[0]}function t2(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class ug{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oC(t){if(!t)throw og()}function n2(t,e){function n(r,i){const s=sC(t,i,e);return oC(s!==null),s}return n}function r2(t,e){function n(r,i){const s=sC(t,i,e);return oC(s!==null),e2(s,i,t.host,t._protocol)}return n}function aC(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=gL():i=mL():n.getStatus()===402?i=pL(t.bucket):n.getStatus()===403?i=yL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function lC(t){const e=aC(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=fL(t.path)),s.serverResponse=i.serverResponse,s}return n}function i2(t,e,n){const r=e.fullServerUrl(),i=Gc(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new ug(i,s,r2(t,n),o);return a.errorHandler=lC(e),a}function s2(t,e){const n=e.fullServerUrl(),r=Gc(n,t.host,t._protocol),i="DELETE",s=t.maxOperationRetryTime;function o(l,u){}const a=new ug(r,i,o,s);return a.successCodes=[200,204],a.errorHandler=lC(e),a}function o2(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function a2(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=o2(null,e)),r}function l2(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let _=0;_<2;_++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=a2(e,r,i),c=t2(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",m=lr.getBlob(h,r,d);if(m===null)throw CL();const v={name:u.fullPath},w=Gc(s,t.host,t._protocol),E="POST",p=t.maxUploadRetryTime,f=new ug(w,E,n2(t,n),p);return f.urlParams=v,f.headers=o,f.body=m.uploadData(),f.errorHandler=aC(e),f}class u2{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ri.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ri.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ri.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class c2 extends u2{initXhr(){this.xhr_.responseType="text"}}function cg(){return new c2}/**
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
 */class gi{constructor(e,n){this._service=e,n instanceof qt?this._location=n:this._location=qt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new gi(e,n)}get root(){const e=new qt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return rC(this._location.path)}get storage(){return this._service}get parent(){const e=KL(this._location.path);if(e===null)return null;const n=new qt(this._location.bucket,e);return new gi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw IL(e)}}function h2(t,e,n){t._throwIfRoot("uploadBytes");const r=l2(t.storage,t._location,iC(),new lr(e,!0),n);return t.storage.makeRequestWithTokens(r,cg).then(i=>({metadata:i,ref:t}))}function d2(t){t._throwIfRoot("getDownloadURL");const e=i2(t.storage,t._location,iC());return t.storage.makeRequestWithTokens(e,cg).then(n=>{if(n===null)throw xL();return n})}function f2(t){t._throwIfRoot("deleteObject");const e=s2(t.storage,t._location);return t.storage.makeRequestWithTokens(e,cg)}function p2(t,e){const n=QL(t._location.path,e),r=new qt(t._location.bucket,n);return new gi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t){return/^[A-Za-z]+:\/\//.test(t)}function g2(t,e){return new gi(t,e)}function uC(t,e){if(t instanceof hg){const n=t;if(n._bucket==null)throw SL();const r=new gi(n,n._bucket);return e!=null?uC(r,e):r}else return e!==void 0?p2(t,e):t}function y2(t,e){if(e&&m2(e)){if(t instanceof hg)return g2(t,e);throw jf("To use ref(service, url), the first argument must be a Storage instance.")}else return uC(t,e)}function e0(t,e){const n=e==null?void 0:e[YS];return n==null?null:qt.makeFromBucketSpec(n,t)}function v2(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:SE(i,t.app.options.projectId))}class hg{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=QS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=hL,this._maxUploadRetryTime=dL,this._requests=new Set,i!=null?this._bucket=qt.makeFromBucketSpec(i,this._host):this._bucket=e0(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=qt.makeFromBucketSpec(this._url,e):this._bucket=e0(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Zv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Zv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new TL(XS());{const o=UL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const t0="@firebase/storage",n0="0.11.2";/**
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
 */const cC="storage";function r0(t,e,n){return t=Pe(t),h2(t,e,n)}function Jn(t){return t=Pe(t),d2(t)}function hC(t){return t=Pe(t),f2(t)}function Kt(t,e){return t=Pe(t),y2(t,e)}function w2(t=um(),e){t=Pe(t);const r=mc(t,cC).getImmediate({identifier:e}),i=EE("storage");return i&&E2(r,...i),r}function E2(t,e,n,r={}){v2(t,e,n,r)}function _2(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new hg(n,r,i,e,Ci)}function S2(){di(new Nr(cC,_2,"PUBLIC").setMultipleInstances(!0)),Tn(t0,n0,""),Tn(t0,n0,"esm2017")}S2();function dg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function dC(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const C2=dC,fC=new pa("auth","Firebase",dC());/**
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
 */const Lu=new am("@firebase/auth");function x2(t,...e){Lu.logLevel<=ue.WARN&&Lu.warn(`Auth (${Ci}): ${t}`,...e)}function Ll(t,...e){Lu.logLevel<=ue.ERROR&&Lu.error(`Auth (${Ci}): ${t}`,...e)}/**
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
 */function vn(t,...e){throw fg(t,...e)}function An(t,...e){return fg(t,...e)}function k2(t,e,n){const r=Object.assign(Object.assign({},C2()),{[e]:n});return new pa("auth","Firebase",r).create(e,{appName:t.name})}function fg(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return fC.create(t,...e)}function q(t,e,...n){if(!t)throw fg(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ll(e),new Error(e)}function Zn(t,e){t||jn(e)}/**
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
 */function zf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function I2(){return i0()==="http:"||i0()==="https:"}function i0(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function T2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(I2()||HR()||"connection"in navigator)?navigator.onLine:!0}function R2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Da{constructor(e,n){this.shortDelay=e,this.longDelay=n,Zn(n>e,"Short delay should be less than long delay!"),this.isMobile=VR()||WR()}get(){return T2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pg(t,e){Zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pC{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const A2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const P2=new Da(3e4,6e4);function Us(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ri(t,e,n,r,i={}){return mC(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ma(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),pC.fetch()(gC(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function mC(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},A2),e);try{const i=new D2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw hl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw hl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw hl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw hl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw k2(t,c,u);vn(t,c)}}catch(i){if(i instanceof bn)throw i;vn(t,"network-request-failed",{message:String(i)})}}async function Na(t,e,n,r,i={}){const s=await Ri(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function gC(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?pg(t.config,i):`${t.config.apiScheme}://${i}`}class D2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),P2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=An(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function N2(t,e){return Ri(t,"POST","/v1/accounts:delete",e)}async function b2(t,e){return Ri(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function To(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function L2(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=mg(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:To(Jh(i.auth_time)),issuedAtTime:To(Jh(i.iat)),expirationTime:To(Jh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Jh(t){return Number(t)*1e3}function mg(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=vE(n);return i?JSON.parse(i):(Ll("Failed to decode base64 JWT payload"),null)}catch(i){return Ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function O2(t){const e=mg(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ss(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&$2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class M2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class yC{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ou(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Ss(t,b2(n,{idToken:r}));q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?j2(s.providerUserInfo):[],a=F2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new yC(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function U2(t){const e=Pe(t);await Ou(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function F2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function j2(t){return t.map(e=>{var{providerId:n}=e,r=dg(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function z2(t,e){const n=await mC(t,{},async()=>{const r=ma({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=gC(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pC.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class sa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):O2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await z2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new sa;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sa,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
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
 */function rr(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ii{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=dg(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new M2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new yC(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Ss(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return L2(this,e)}reload(){return U2(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ou(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Ss(this,N2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:_,isAnonymous:x,providerData:P,stsTokenManager:D}=n;q(g&&D,e,"internal-error");const N=sa.fromJSON(this.name,D);q(typeof g=="string",e,"internal-error"),rr(h,e.name),rr(d,e.name),q(typeof _=="boolean",e,"internal-error"),q(typeof x=="boolean",e,"internal-error"),rr(m,e.name),rr(v,e.name),rr(w,e.name),rr(E,e.name),rr(p,e.name),rr(f,e.name);const Y=new ii({uid:g,auth:e,email:d,emailVerified:_,displayName:h,isAnonymous:x,photoURL:v,phoneNumber:m,tenantId:w,stsTokenManager:N,createdAt:p,lastLoginAt:f});return P&&Array.isArray(P)&&(Y.providerData=P.map(W=>Object.assign({},W))),E&&(Y._redirectEventId=E),Y}static async _fromIdTokenResponse(e,n,r=!1){const i=new sa;i.updateFromServerResponse(n);const s=new ii({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ou(s),s}}/**
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
 */const s0=new Map;function zn(t){Zn(t instanceof Function,"Expected a class definition");let e=s0.get(t);return e?(Zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,s0.set(t,e),e)}/**
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
 */class vC{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vC.type="NONE";const o0=vC;/**
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
 */function Ol(t,e,n){return`firebase:${t}:${e}:${n}`}class ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ol(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ol("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ns(zn(o0),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zn(o0);const o=Ol(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=ii._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ns(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ns(s,e,r))}}/**
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
 */function a0(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(_C(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wC(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(CC(e))return"Blackberry";if(xC(e))return"Webos";if(gg(e))return"Safari";if((e.includes("chrome/")||EC(e))&&!e.includes("edge/"))return"Chrome";if(SC(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wC(t=kt()){return/firefox\//i.test(t)}function gg(t=kt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function EC(t=kt()){return/crios\//i.test(t)}function _C(t=kt()){return/iemobile/i.test(t)}function SC(t=kt()){return/android/i.test(t)}function CC(t=kt()){return/blackberry/i.test(t)}function xC(t=kt()){return/webos/i.test(t)}function Kc(t=kt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function V2(t=kt()){var e;return Kc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function B2(){return qR()&&document.documentMode===10}function kC(t=kt()){return Kc(t)||SC(t)||xC(t)||CC(t)||/windows phone/i.test(t)||_C(t)}function H2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function IC(t,e=[]){let n;switch(t){case"Browser":n=a0(kt());break;case"Worker":n=`${a0(kt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ci}/${r}`}async function TC(t,e){return Ri(t,"GET","/v2/recaptchaConfig",Us(t,e))}function l0(t){return t!==void 0&&t.enterprise!==void 0}class RC{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function W2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function AC(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=An("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",W2().appendChild(r)})}function q2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const G2="https://www.google.com/recaptcha/enterprise.js?render=",K2="recaptcha-enterprise";class PC{constructor(e){this.type=K2,this.auth=Fs(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{TC(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new RC(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;l0(l)?l.enterprise.ready(()=>{try{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(u=>{a(u)})}catch(u){a(u)}}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&l0(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}AC(G2+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function $u(t,e,n,r=!1){const i=new PC(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
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
 */class Q2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Y2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new u0(this),this.idTokenSubscription=new u0(this),this.beforeStateQueue=new Q2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fC,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ou(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}async initializeRecaptchaConfig(){const e=await TC(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new RC(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new PC(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new pa("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=IC(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&x2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Fs(t){return Pe(t)}class u0{constructor(e){this.auth=e,this.observer=null,this.addObserver=ZR(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function X2(t,e){const n=mc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(yu(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function J2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Z2(t,e,n){const r=Fs(t);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=DC(e),{host:o,port:a}=eO(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tO()}function DC(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eO(t){const e=DC(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:c0(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:c0(o)}}}function c0(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tO(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class yg{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function nO(t,e){return Ri(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Zh(t,e){return Na(t,"POST","/v1/accounts:signInWithPassword",Us(t,e))}/**
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
 */async function rO(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Us(t,e))}async function iO(t,e){return Na(t,"POST","/v1/accounts:signInWithEmailLink",Us(t,e))}/**
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
 */class oa extends yg{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new oa(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new oa(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await $u(e,r,"signInWithPassword");return Zh(e,i)}else return Zh(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await $u(e,r,"signInWithPassword");return Zh(e,s)}else return Promise.reject(i)});case"emailLink":return rO(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nO(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iO(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function rs(t,e){return Na(t,"POST","/v1/accounts:signInWithIdp",Us(t,e))}/**
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
 */const sO="http://localhost";class yi extends yg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=dg(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rs(e,n)}buildRequest(){const e={requestUri:sO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ma(n)}return e}}/**
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
 */function oO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function aO(t){const e=io(so(t)).link,n=e?io(so(e)).deep_link_id:null,r=io(so(t)).deep_link_id;return(r?io(so(r)).link:null)||r||n||e||t}class vg{constructor(e){var n,r,i,s,o,a;const l=io(so(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=oO((i=l.mode)!==null&&i!==void 0?i:null);q(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=aO(e);try{return new vg(n)}catch{return null}}}/**
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
 */class js{constructor(){this.providerId=js.PROVIDER_ID}static credential(e,n){return oa._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=vg.parseLink(n);return q(r,"argument-error"),oa._fromEmailAndCode(e,r.code,r.tenantId)}}js.PROVIDER_ID="password";js.EMAIL_PASSWORD_SIGN_IN_METHOD="password";js.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class NC{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ba extends NC{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ur extends ba{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:ur.PROVIDER_ID,signInMethod:ur.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ur.credentialFromTaggedObject(e)}static credentialFromError(e){return ur.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ur.credential(e.oauthAccessToken)}catch{return null}}}ur.FACEBOOK_SIGN_IN_METHOD="facebook.com";ur.PROVIDER_ID="facebook.com";/**
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
 */class cr extends ba{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return cr.credential(n,r)}catch{return null}}}cr.GOOGLE_SIGN_IN_METHOD="google.com";cr.PROVIDER_ID="google.com";/**
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
 */class hr extends ba{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return hr.credential(e.oauthAccessToken)}catch{return null}}}hr.GITHUB_SIGN_IN_METHOD="github.com";hr.PROVIDER_ID="github.com";/**
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
 */class dr extends ba{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return dr.credential(n,r)}catch{return null}}}dr.TWITTER_SIGN_IN_METHOD="twitter.com";dr.PROVIDER_ID="twitter.com";/**
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
 */async function ed(t,e){return Na(t,"POST","/v1/accounts:signUp",Us(t,e))}/**
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
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ii._fromIdTokenResponse(e,r,i),o=h0(r);return new vi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=h0(r);return new vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function h0(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Mu extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Mu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Mu(e,n,r,i)}}function bC(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Mu._fromErrorAndOperation(t,s,e,r):s})}async function lO(t,e,n=!1){const r=await Ss(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
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
 */async function uO(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Ss(t,bC(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=mg(s.idToken);q(o,r,"internal-error");const{sub:a}=o;return q(t.uid===a,r,"user-mismatch"),vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
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
 */async function LC(t,e,n=!1){const r="signIn",i=await bC(t,r,e),s=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cO(t,e){return LC(Fs(t),e)}async function hO(t,e,n){var r;const i=Fs(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await $u(i,s,"signUpPassword");o=ed(i,u)}else o=ed(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await $u(i,s,"signUpPassword");return ed(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await vi._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function d0(t,e,n){return cO(Pe(t),js.credential(e,n))}/**
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
 */async function dO(t,e){return Ri(t,"POST","/v1/accounts:update",e)}/**
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
 */async function OC(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Pe(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ss(r,dO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function fO(t,e,n,r){return Pe(t).onIdTokenChanged(e,n,r)}function pO(t,e,n){return Pe(t).beforeAuthStateChanged(e,n)}function mO(t,e,n,r){return Pe(t).onAuthStateChanged(e,n,r)}function gO(t){return Pe(t).signOut()}const Uu="__sak";/**
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
 */class $C{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Uu,"1"),this.storage.removeItem(Uu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function yO(){const t=kt();return gg(t)||Kc(t)}const vO=1e3,wO=10;class MC extends $C{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=yO()&&H2(),this.fallbackToPolling=kC(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);B2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,wO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},vO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}MC.type="LOCAL";const EO=MC;/**
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
 */class UC extends $C{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}UC.type="SESSION";const FC=UC;/**
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
 */function _O(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Qc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Qc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await _O(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qc.receivers=[];/**
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
 */function wg(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class SO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=wg("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Pn(){return window}function CO(t){Pn().location.href=t}/**
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
 */function jC(){return typeof Pn().WorkerGlobalScope<"u"&&typeof Pn().importScripts=="function"}async function xO(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kO(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function IO(){return jC()?self:null}/**
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
 */const zC="firebaseLocalStorageDb",TO=1,Fu="firebaseLocalStorage",VC="fbase_key";class La{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Yc(t,e){return t.transaction([Fu],e?"readwrite":"readonly").objectStore(Fu)}function RO(){const t=indexedDB.deleteDatabase(zC);return new La(t).toPromise()}function Vf(){const t=indexedDB.open(zC,TO);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Fu,{keyPath:VC})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Fu)?e(r):(r.close(),await RO(),e(await Vf()))})})}async function f0(t,e,n){const r=Yc(t,!0).put({[VC]:e,value:n});return new La(r).toPromise()}async function AO(t,e){const n=Yc(t,!1).get(e),r=await new La(n).toPromise();return r===void 0?null:r.value}function p0(t,e){const n=Yc(t,!0).delete(e);return new La(n).toPromise()}const PO=800,DO=3;class BC{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Vf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DO)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return jC()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qc._getInstance(IO()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await xO(),!this.activeServiceWorker)return;this.sender=new SO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Vf();return await f0(e,Uu,"1"),await p0(e,Uu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>f0(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>AO(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>p0(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Yc(i,!1).getAll();return new La(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BC.type="LOCAL";const NO=BC;new Da(3e4,6e4);/**
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
 */function bO(t,e){return e?zn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Eg extends yg{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LO(t){return LC(t.auth,new Eg(t),t.bypassAuthState)}function OO(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),uO(n,new Eg(t),t.bypassAuthState)}async function $O(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),lO(n,new Eg(t),t.bypassAuthState)}/**
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
 */class HC{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LO;case"linkViaPopup":case"linkViaRedirect":return $O;case"reauthViaPopup":case"reauthViaRedirect":return OO;default:vn(this.auth,"internal-error")}}resolve(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const MO=new Da(2e3,1e4);class qi extends HC{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,qi.currentPopupAction&&qi.currentPopupAction.cancel(),qi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Zn(this.filter.length===1,"Popup operations only handle one event");const e=wg();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,MO.get())};e()}}qi.currentPopupAction=null;/**
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
 */const UO="pendingRedirect",$l=new Map;class FO extends HC{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=$l.get(this.auth._key());if(!e){try{const r=await jO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}$l.set(this.auth._key(),e)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jO(t,e){const n=BO(e),r=VO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function zO(t,e){$l.set(t._key(),e)}function VO(t){return zn(t._redirectPersistence)}function BO(t){return Ol(UO,t.config.apiKey,t.name)}async function HO(t,e,n=!1){const r=Fs(t),i=bO(r,e),o=await new FO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const WO=10*60*1e3;class qO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!WC(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WO&&this.cachedEventUids.clear(),this.cachedEventUids.has(m0(e))}saveEventToCache(e){this.cachedEventUids.add(m0(e)),this.lastProcessedEventTime=Date.now()}}function m0(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function WC({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return WC(t);default:return!1}}/**
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
 */async function KO(t,e={}){return Ri(t,"GET","/v1/projects",e)}/**
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
 */const QO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YO=/^https?/;async function XO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await KO(t);for(const n of e)try{if(JO(n))return}catch{}vn(t,"unauthorized-domain")}function JO(t){const e=zf(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YO.test(n))return!1;if(QO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const ZO=new Da(3e4,6e4);function g0(){const t=Pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function e$(t){return new Promise((e,n)=>{var r,i,s;function o(){g0(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{g0(),n(An(t,"network-request-failed"))},timeout:ZO.get()})}if(!((i=(r=Pn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pn().gapi)===null||s===void 0)&&s.load)o();else{const a=q2("iframefcb");return Pn()[a]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},AC(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ml=null,e})}let Ml=null;function t$(t){return Ml=Ml||e$(t),Ml}/**
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
 */const n$=new Da(5e3,15e3),r$="__/auth/iframe",i$="emulator/auth/iframe",s$={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},o$=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function a$(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pg(e,i$):`https://${t.config.authDomain}/${r$}`,r={apiKey:e.apiKey,appName:t.name,v:Ci},i=o$.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ma(r).slice(1)}`}async function l$(t){const e=await t$(t),n=Pn().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:a$(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:s$,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),a=Pn().setTimeout(()=>{s(o)},n$.get());function l(){Pn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const u$={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},c$=500,h$=600,d$="_blank",f$="http://localhost";class y0{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function p$(t,e,n,r=c$,i=h$){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},u$),{width:r.toString(),height:i.toString(),top:s,left:o}),u=kt().toLowerCase();n&&(a=EC(u)?d$:n),wC(u)&&(e=e||f$,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,v])=>`${d}${m}=${v},`,"");if(V2(u)&&a!=="_self")return m$(e||"",a),new y0(null);const h=window.open(e||"",a,c);q(h,t,"popup-blocked");try{h.focus()}catch{}return new y0(h)}function m$(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const g$="__/auth/handler",y$="emulator/auth/handler",v$=encodeURIComponent("fac");async function v0(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ci,eventId:i};if(e instanceof NC){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",JR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof ba){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${v$}=${encodeURIComponent(l)}`:"";return`${w$(t)}?${ma(a).slice(1)}${u}`}function w$({config:t}){return t.emulator?pg(t,y$):`https://${t.authDomain}/${g$}`}/**
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
 */const td="webStorageSupport";class E${constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=FC,this._completeRedirectFn=HO,this._overrideRedirectResult=zO}async _openPopup(e,n,r,i){var s;Zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await v0(e,n,r,zf(),i);return p$(e,o,wg())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await v0(e,n,r,zf(),i);return CO(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await l$(e),r=new qO(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(td,{type:td},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[td];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=XO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return kC()||gg()||Kc()}}const _$=E$;var w0="@firebase/auth",E0="0.23.0";/**
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
 */class S${constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function C$(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function x$(t){di(new Nr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name}),q(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IC(t)},u=new Y2(r,i,s,l);return J2(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),di(new Nr("auth-internal",e=>{const n=Fs(e.getProvider("auth").getImmediate());return(r=>new S$(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(w0,E0,C$(t)),Tn(w0,E0,"esm2017")}/**
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
 */const k$=5*60,I$=_E("authIdTokenMaxAge")||k$;let _0=null;const T$=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>I$)return;const i=n==null?void 0:n.token;_0!==i&&(_0=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Xc(t=um()){const e=mc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=X2(t,{popupRedirectResolver:_$,persistence:[NO,EO,FC]}),r=_E("authTokenSyncURL");if(r){const s=T$(r);pO(n,s,()=>s(n.currentUser)),fO(n,o=>s(o))}const i=wE("auth");return i&&Z2(n,`http://${i}`),n}x$("Browser");const R$={apiKey:"AIzaSyCx8CXtDPdBDt8nbrBB3HzmE4_r7v93TLg",authDomain:"pxlshare-1fa05.firebaseapp.com",projectId:"pxlshare-1fa05",storageBucket:"pxlshare-1fa05.appspot.com",messagingSenderId:"927873406502",appId:"1:927873406502:web:c58724e56b04dc3ffdf8e7"},qC=kE(R$),pe=qb(qC),Qt=w2(qC);async function wi(t){return(await mi(ve(pe,"users",t))).data()}async function A$(t){const e=await wi(t),n=[];for(let r of e.followers){const i=await wi(r),s=await Jn(Kt(Qt,i.profilePictureURL));n.push({uid:i.uid,profPic:s,username:i.username})}return n}async function P$(t){const e=await wi(t),n=[];for(let r of e.following){const i=await wi(r),s=await Jn(Kt(Qt,i.profilePictureURL));n.push({uid:i.uid,profPic:s,username:i.username})}return n}async function D$(t){const e=await KS(Zm(pe,"users",t,"Uploads")),n=[];for(let r of e.docs){const i=r.data(),s=await Jn(Kt(Qt,i.url));n.push({imageInfo:i,path:s})}return n}async function N$(t){await aL(ve(pe,"users",t.uid,"Uploads",t.docID)),await hC(Kt(Qt,t.url))}const GC=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M12.1 18.55l-.1.1-.11-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5 22 5.41 19.58 3 16.5 3z"})),b$=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"})),L$=A(GC)`
  transition: fill .5s;

  &:hover {
    fill: red;
    cursor: pointer;
  }
`,O$=A(b$)`
  fill: red;
  cursor: pointer;
`;function _g(t){const e=S.useContext(Ln);return y.jsx(y.Fragment,{children:t.likes.includes(e.uid)?y.jsx(O$,{onClick:()=>t.toggleLike(!0,e.uid,t.image.docID)}):y.jsx(L$,{onClick:()=>t.toggleLike(!1,e.uid,t.image.docID)})})}const $$=A.div`
  display: flex;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
`,M$=A.input`
  border: none;
  padding: 20px;
  flex: 1;
  outline: none;
  border: 1px solid white;
  
  &:focus {
    border-color:rgb(206, 206, 206)
  }
`,U$=A.button`
  background-color: white;
  border: none;
  padding: 20px;
  transition: border .5s;
  border: 1px solid white;

  &:hover {
    cursor: pointer;
    border: 1px solid rgb(223, 223, 223);
  }
`;function Sg(t){return y.jsxs($$,{children:[y.jsx(M$,{type:"text",placeholder:"Add a comment...",maxLength:50,onChange:e=>t.setComment(e.target.value),value:t.comment,ref:t.inputRef}),y.jsx(U$,{type:"button",onClick:t.addComment,children:"Post"})]})}const F$=A.div`
  display: flex;
  padding-right: 20px;

  > p {
    flex: 1;
  }
`,j$=A.span`
  font-weight: bold;
`,z$=A.button`
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
`,V$=A(lt)`
  text-decoration: none;
  color: black;
`;function S0(t){const e=S.useContext(Ln);async function n(){await at(ve(pe,"users",t.upload.uid,"Uploads",t.upload.docID),{comments:ts({uid:e.uid,comment:t.comment.comment,username:e.displayName})}),t.setComments(t.comments.filter(r=>r!==t.comment))}return y.jsxs(F$,{children:[y.jsxs("p",{children:[y.jsx(V$,{to:`/p/${t.comment.username}`,state:{uid:t.comment.uid},children:y.jsx(j$,{children:t.comment.username})}),": ",t.comment.comment]}),e.uid===t.comment.uid?y.jsx(z$,{onClick:n,children:"X"}):null]})}const B$=A.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 8px;
`,C0=A.button`
  width: fit-content;
  border: none;
  background-color: white;
  font-size: .8rem;
  color: #7a7a7a;

  &:hover {
    color: #525252;
    cursor: pointer;
  }
`;function KC(t){const[e,n]=S.useState(!1),[r]=S.useState(t.commentsViewLimit);function i(o){n(o)}function s(){const o=[];for(let a=0;a<r;a++)o.push(y.jsx(S0,{comment:t.comments[a],comments:t.comments,setComments:t.setComments,upload:t.upload}));return o}return y.jsxs(B$,{children:[t.comments.length>r&&e===!1?y.jsx(y.Fragment,{children:s()}):t.comments.map(o=>y.jsx(S0,{comment:o,comments:t.comments,setComments:t.setComments,upload:t.upload},o.comment)),t.comments.length>r&&(e?y.jsx(C0,{onClick:()=>i(!1),children:"Show Less"}):y.jsx(C0,{onClick:()=>i(!0),children:"Show All"}))]})}const H$=A.div`
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
`,W$=A(lt)`
  text-decoration: none;
  color: black;
`,x0=A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
`,q$=A.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`,G$=A.img`
  width: 500px;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  margin-bottom: 8px;
`,K$=A.p`
  font-weight: bold;
  font-size: 1.1rem;
`;function Q$(t){const e=S.useContext(Ln),n=S.useRef(null),[r,i]=S.useState(),[s,o]=S.useState(t.upload.likes),[a,l]=S.useState(""),[u,c]=S.useState(t.upload.comments),[h,d]=S.useState(),m=new Date().getTime(),v=t.upload.dateUploaded.seconds,w=Math.trunc(m/1e3/60/60/24-v/60/60/24);S.useEffect(()=>{E(),p()},[]);async function E(){try{const x=await Jn(Kt(Qt,t.upload.url));i(x)}catch(x){console.log(x)}}async function p(){try{const P=(await mi(ve(pe,"users",t.upload.uid))).data().profilePictureURL,D=await Jn(Kt(Qt,P));d(D)}catch(x){console.log(x)}}async function f(x){x?(await at(ve(pe,"users",t.upload.uid,"Uploads",t.upload.docID),{likes:ts(e.uid)}),o(s.filter(P=>P!==e.uid))):(await at(ve(pe,"users",t.upload.uid,"Uploads",t.upload.docID),{likes:Ar(e.uid)}),o([...s,e.uid]))}async function g(){if(a.trim())try{await at(ve(pe,"users",t.upload.uid,"Uploads",t.upload.docID),{comments:Ar({uid:e.uid,comment:a,username:e.displayName})}),c([...u,{uid:e.uid,comment:a,username:e.displayName}]),l("")}catch(x){console.log(x)}}function _(){n.current.focus()}return y.jsxs(H$,{style:t.cardDisplay,children:[y.jsxs(x0,{children:[y.jsx(q$,{src:h,alt:""}),y.jsx(W$,{to:`/p/${t.upload.username}`,state:{uid:t.upload.uid},children:y.jsx("h2",{children:t.upload.username})})]}),y.jsx(lt,{to:`/post/${t.upload.docID}`,state:{upload:t.upload,image:r,profilePicture:h,postLikes:s},children:y.jsx(G$,{src:r,alt:`Image uploaded by ${t.upload.username}`})}),y.jsxs(x0,{children:[y.jsx(_g,{likes:s,image:t.upload,toggleLike:f}),y.jsx(om,{onClick:_})]}),y.jsx(K$,{children:t.upload.desc}),y.jsxs("p",{children:[s.length," ",s.length==1?"Like":"Likes "]}),y.jsxs("p",{children:["Uploaded ",w>0?`${w} days ago`:"today"]}),y.jsx(KC,{comments:u,setComments:c,upload:t.upload,commentsViewLimit:2}),y.jsx(Sg,{inputRef:n,addComment:g,setComment:l,comment:a})]})}const Cg=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"black",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M6.5 20q-2.28 0-3.89-1.57Q1 16.85 1 14.58q0-1.95 1.17-3.48 1.18-1.53 3.08-1.95.63-2.3 2.5-3.72Q9.63 4 12 4q2.93 0 4.96 2.04Q19 8.07 19 11q1.73.2 2.86 1.5 1.14 1.28 1.14 3 0 1.88-1.31 3.19T18.5 20H13q-.82 0-1.41-.59Q11 18.83 11 18v-5.15L9.4 14.4 8 13l4-4 4 4-1.4 1.4-1.6-1.55V18h5.5q1.05 0 1.77-.73.73-.72.73-1.77t-.73-1.77Q19.55 13 18.5 13H17v-2q0-2.07-1.46-3.54Q14.08 6 12 6 9.93 6 8.46 7.46 7 8.93 7 11h-.5q-1.45 0-2.47 1.03Q3 13.05 3 14.5q0 1.45 1.03 2.5 1.02 1 2.47 1H9v2m3-7z"})),QC=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",...t},S.createElement("path",{d:"M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3"}));function YC(){async function t(){const e=Xc();try{await gO(e)}catch(n){console.log(n)}}return y.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"36px",height:"36px",onClick:t,children:y.jsx("path",{d:"M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012 2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2h9z"})})}const Y$="/PXLshare/assets/TitanOne-bcac194b.ttf",ju=A.h1`
  @font-face {
    font-family: 'Titan';
    src: url(${Y$});
  }
  font-family: 'Titan';
  text-align: center;
  font-weight: 400;
`,X$=A.header`
  position: sticky;
  top: 0;
  background-color: white;
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  z-index: 1;
`,J$=A.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
  padding: 0px 80px;

  > a, div, nav {
    width: 205px;
  }

  @media(max-width: 1000px) {
    padding: 0px;
  }

  @media(max-width: 700px) {
    
    > a, div, nav {
    width: auto;
  }
  }
`,Z$=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`,eM=A.input`
  padding: 5px;
  font-size: .9rem;
  width: 190px;

  &:focus + div {
    display: flex;
  }
`,tM=A.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`,XC=A(lt)`
  color: black;
  text-decoration: none;
`,nM=A.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`,rM=A.div`
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
`,iM=A(XC)`
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  padding: 8px 0px;
  width: 100%;
  text-align: center;
  transition: background-color .5s;

  &:hover {
    background-color: rgba(231, 231, 231, 0.2);
  }
`;function Jc(){const t=S.useContext(Ln),[e,n]=S.useState(window.innerWidth),[r,i]=S.useState([]),[s,o]=S.useState("");window.addEventListener("resize",()=>{n(window.innerWidth)}),S.useEffect(()=>{l()},[]);async function a(u){if(u.trim()){const h=(await mi(ve(pe,"users","userList"))).data().users,d=new RegExp(`^${u}w*`,"ig"),m=h.filter(v=>v.username.match(d));i(m)}else i([])}async function l(){console.log(t.uid);const c=(await mi(ve(pe,"users",t.uid))).data(),h=await Jn(Kt(Qt,c.profilePictureURL));o(h)}return y.jsx(X$,{children:y.jsxs(J$,{children:[y.jsx(XC,{to:"/",children:e>700?y.jsx(ju,{children:"PXLshare"}):y.jsx(ju,{children:"PXL"})}),y.jsxs(Z$,{children:[y.jsx(eM,{type:"text",onChange:u=>a(u.target.value),maxLength:16,placeholder:"Search for users..."}),r.length>0?y.jsx(rM,{children:r.map(u=>y.jsx(iM,{to:`/p/${u.username}`,state:{uid:u.uid,disp:"gallery"},children:u.username},u.uid))}):null]}),y.jsxs(tM,{children:[e>700?y.jsx(lt,{to:"/upload",state:{profilePicture:!1},children:y.jsx(Cg,{})}):null,e>700?y.jsx(lt,{to:"/",children:y.jsx(QC,{})}):null,e>700?y.jsx(lt,{to:"/login",children:y.jsx(YC,{})}):null,y.jsx(lt,{to:`/p/${t.displayName}`,state:{uid:t.uid,disp:"gallery"},children:y.jsx(nM,{src:s})})]})]})})}const sM=A.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  background-color: white;
`;A.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
`;function Zc(t){const e=S.useContext(Ln),[n,r]=S.useState(window.innerWidth),[i,s]=S.useState("");S.useEffect(()=>{o()},[]),window.addEventListener("resize",()=>{r(window.innerWidth)});async function o(){console.log(e.uid);const l=(await mi(ve(pe,"users",e.uid))).data(),u=await Jn(Kt(Qt,l.profilePictureURL));s(u)}return y.jsx(y.Fragment,{children:n<700?y.jsxs(sM,{style:t.footerStyle,children:[y.jsx(lt,{to:"/",children:y.jsx(QC,{})}),y.jsx(lt,{to:"/upload",state:{profilePicture:!1},children:y.jsx(Cg,{})}),y.jsx(lt,{to:"/login",children:y.jsx(YC,{})})]}):null})}const xg=mE`
  0% {
    background-color: rgb(170, 170, 170);
  }

  50% {
    background-color: rgb(190, 190, 190);
  }

  100% {
    background-color: rgb(170, 170, 170);
  }
`,oM=A.div`
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
`,k0=A.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
`,aM=A.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #b3b3b3;
    animation: ${xg} 2s linear infinite;
`,lM=A.img`
  width: 500px;
  height: 377px;
  border-top: 1px solid rgba(114, 114, 114, 0.2);
  border-bottom: 1px solid rgba(114, 114, 114, 0.2);
  margin-bottom: 8px;
  background-color: #b3b3b3;
    animation: ${xg} 2s linear infinite;
`,nd=A.div`
  width: 150px;
  height: 20px;
  background-color: #b3b3b3;
  border-radius: 12px;
  animation: ${xg} 2s linear infinite;
`;function uM(){return y.jsxs(oM,{children:[y.jsxs(k0,{children:[y.jsx(aM,{}),y.jsx(nd,{})]}),y.jsx(lM,{}),y.jsxs(k0,{children:[y.jsx(GC,{}),y.jsx(om,{})]}),y.jsx(nd,{}),y.jsx(nd,{}),y.jsx(Sg,{})]})}const cM=A.div`
  width: 500px;
  margin: 0px auto;
`;function hM(){const t=S.useContext(Ln),[e,n]=S.useState({}),[r,i]=S.useState({}),[s,o]=S.useState([]),[a,l]=S.useState([]),[u,c]=S.useState(!1);function h(){i({display:"flex"}),window.innerHeight<document.body.scrollHeight?n({position:"sticky"}):n({position:"absolute"}),c(!1)}S.useEffect(()=>{async function m(){try{const v=await wi(t.uid);o(v.following)}catch(v){return v}}m()},[t]),S.useEffect(()=>{s.length>0&&c(!0),d()},[s]);async function d(){const m=[];for(let v of s)(await KS(Zm(pe,"users",v,"Uploads"))).docs.forEach(E=>{m.push(E.data())});m.sort((v,w)=>w.dateUploaded.seconds-v.dateUploaded.seconds),l(m)}return y.jsxs(y.Fragment,{children:[y.jsx(Jc,{}),y.jsxs(cM,{onLoad:h,children:[u&&y.jsx(uM,{}),a.map(m=>y.jsx(Q$,{upload:m,cardDisplay:r},m.docID))]}),y.jsx(Zc,{footerStyle:e})]})}/*! *****************************************************************************
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
***************************************************************************** */var Bf=function(t,e){return Bf=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(n[i]=r[i])},Bf(t,e)};function dM(t,e){Bf(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}var yt=function(){return yt=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},yt.apply(this,arguments)},Hf={},fM={get exports(){return Hf},set exports(t){Hf=t}},I0=!1,qr,Wf,qf,Ul,Fl,JC,jl,Gf,Kf,Qf,ZC,Yf,Xf,ex,tx;function Ot(){if(!I0){I0=!0;var t=navigator.userAgent,e=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(t),n=/(Mac OS X)|(Windows)|(Linux)/.exec(t);if(Yf=/\b(iPhone|iP[ao]d)/.exec(t),Xf=/\b(iP[ao]d)/.exec(t),Qf=/Android/i.exec(t),ex=/FBAN\/\w+;/i.exec(t),tx=/Mobile/i.exec(t),ZC=!!/Win64/.exec(t),e){qr=e[1]?parseFloat(e[1]):e[5]?parseFloat(e[5]):NaN,qr&&document&&document.documentMode&&(qr=document.documentMode);var r=/(?:Trident\/(\d+.\d+))/.exec(t);JC=r?parseFloat(r[1])+4:qr,Wf=e[2]?parseFloat(e[2]):NaN,qf=e[3]?parseFloat(e[3]):NaN,Ul=e[4]?parseFloat(e[4]):NaN,Ul?(e=/(?:Chrome\/(\d+\.\d+))/.exec(t),Fl=e&&e[1]?parseFloat(e[1]):NaN):Fl=NaN}else qr=Wf=qf=Fl=Ul=NaN;if(n){if(n[1]){var i=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(t);jl=i?parseFloat(i[1].replace("_",".")):!0}else jl=!1;Gf=!!n[2],Kf=!!n[3]}else jl=Gf=Kf=!1}}var Jf={ie:function(){return Ot()||qr},ieCompatibilityMode:function(){return Ot()||JC>qr},ie64:function(){return Jf.ie()&&ZC},firefox:function(){return Ot()||Wf},opera:function(){return Ot()||qf},webkit:function(){return Ot()||Ul},safari:function(){return Jf.webkit()},chrome:function(){return Ot()||Fl},windows:function(){return Ot()||Gf},osx:function(){return Ot()||jl},linux:function(){return Ot()||Kf},iphone:function(){return Ot()||Yf},mobile:function(){return Ot()||Yf||Xf||Qf||tx},nativeApp:function(){return Ot()||ex},android:function(){return Ot()||Qf},ipad:function(){return Ot()||Xf}},pM=Jf,dl=!!(typeof window<"u"&&window.document&&window.document.createElement),mM={canUseDOM:dl,canUseWorkers:typeof Worker<"u",canUseEventListeners:dl&&!!(window.addEventListener||window.attachEvent),canUseViewport:dl&&!!window.screen,isInWorker:!dl},gM=mM,nx=gM,rx;nx.canUseDOM&&(rx=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function yM(t,e){if(!nx.canUseDOM||e&&!("addEventListener"in document))return!1;var n="on"+t,r=n in document;if(!r){var i=document.createElement("div");i.setAttribute(n,"return;"),r=typeof i[n]=="function"}return!r&&rx&&t==="wheel"&&(r=document.implementation.hasFeature("Events.wheel","3.0")),r}var vM=yM,wM=pM,EM=vM,T0=10,R0=40,A0=800;function ix(t){var e=0,n=0,r=0,i=0;return"detail"in t&&(n=t.detail),"wheelDelta"in t&&(n=-t.wheelDelta/120),"wheelDeltaY"in t&&(n=-t.wheelDeltaY/120),"wheelDeltaX"in t&&(e=-t.wheelDeltaX/120),"axis"in t&&t.axis===t.HORIZONTAL_AXIS&&(e=n,n=0),r=e*T0,i=n*T0,"deltaY"in t&&(i=t.deltaY),"deltaX"in t&&(r=t.deltaX),(r||i)&&t.deltaMode&&(t.deltaMode==1?(r*=R0,i*=R0):(r*=A0,i*=A0)),r&&!e&&(e=r<1?-1:1),i&&!n&&(n=i<1?-1:1),{spinX:e,spinY:n,pixelX:r,pixelY:i}}ix.getEventType=function(){return wM.firefox()?"DOMMouseScroll":EM("wheel")?"wheel":"mousewheel"};var _M=ix;(function(t){t.exports=_M})(fM);const SM=F0(Hf);function CM(t,e,n,r,i,s){s===void 0&&(s=0);var o=Cs(t,e,s),a=o.width,l=o.height,u=Math.min(a,n),c=Math.min(l,r);return u>c*i?{width:c*i,height:c}:{width:u,height:u/i}}function xM(t){return t.width>t.height?t.width/t.naturalWidth:t.height/t.naturalHeight}function fl(t,e,n,r,i){i===void 0&&(i=0);var s=Cs(e.width,e.height,i),o=s.width,a=s.height;return{x:P0(t.x,o,n.width,r),y:P0(t.y,a,n.height,r)}}function P0(t,e,n,r){var i=e*r/2-n/2;return eh(t,-i,i)}function D0(t,e){return Math.sqrt(Math.pow(t.y-e.y,2)+Math.pow(t.x-e.x,2))}function N0(t,e){return Math.atan2(e.y-t.y,e.x-t.x)*180/Math.PI}function kM(t,e,n,r,i,s,o){s===void 0&&(s=0),o===void 0&&(o=!0);var a=o?IM:TM,l=Cs(e.width,e.height,s),u=Cs(e.naturalWidth,e.naturalHeight,s),c={x:a(100,((l.width-n.width/i)/2-t.x/i)/l.width*100),y:a(100,((l.height-n.height/i)/2-t.y/i)/l.height*100),width:a(100,n.width/l.width*100/i),height:a(100,n.height/l.height*100/i)},h=Math.round(a(u.width,c.width*u.width/100)),d=Math.round(a(u.height,c.height*u.height/100)),m=u.width>=u.height*r,v=m?{width:Math.round(d*r),height:d}:{width:h,height:Math.round(h/r)},w=yt(yt({},v),{x:Math.round(a(u.width-v.width,c.x*u.width/100)),y:Math.round(a(u.height-v.height,c.y*u.height/100))});return{croppedAreaPercentages:c,croppedAreaPixels:w}}function IM(t,e){return Math.min(t,Math.max(0,e))}function TM(t,e){return e}function RM(t,e,n,r,i,s){var o=Cs(e.width,e.height,n),a=eh(r.width/o.width*(100/t.width),i,s),l={x:a*o.width/2-r.width/2-o.width*a*(t.x/100),y:a*o.height/2-r.height/2-o.height*a*(t.y/100)};return{crop:l,zoom:a}}function AM(t,e,n){var r=xM(e);return n.height>n.width?n.height/(t.height*r):n.width/(t.width*r)}function PM(t,e,n,r,i,s){n===void 0&&(n=0);var o=Cs(e.naturalWidth,e.naturalHeight,n),a=eh(AM(t,e,r),i,s),l=r.height>r.width?r.height/t.height:r.width/t.width,u={x:((o.width-t.width)/2-t.x)*l,y:((o.height-t.height)/2-t.y)*l};return{crop:u,zoom:a}}function b0(t,e){return{x:(e.x+t.x)/2,y:(e.y+t.y)/2}}function DM(t){return t*Math.PI/180}function Cs(t,e,n){var r=DM(n);return{width:Math.abs(Math.cos(r)*t)+Math.abs(Math.sin(r)*e),height:Math.abs(Math.sin(r)*t)+Math.abs(Math.cos(r)*e)}}function eh(t,e,n){return Math.min(Math.max(t,e),n)}function pl(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return t.filter(function(n){return typeof n=="string"&&n.length>0}).join(" ").trim()}var NM=`.reactEasyCrop_Container {
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
`,bM=1,LM=3,OM=function(t){dM(e,t);function e(){var n=t!==null&&t.apply(this,arguments)||this;return n.imageRef=At.createRef(),n.videoRef=At.createRef(),n.containerRef=null,n.styleRef=null,n.containerRect=null,n.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},n.dragStartPosition={x:0,y:0},n.dragStartCrop={x:0,y:0},n.gestureZoomStart=0,n.gestureRotationStart=0,n.isTouching=!1,n.lastPinchDistance=0,n.lastPinchRotation=0,n.rafDragTimeout=null,n.rafPinchTimeout=null,n.wheelTimer=null,n.currentDoc=typeof document<"u"?document:null,n.currentWindow=typeof window<"u"?window:null,n.resizeObserver=null,n.state={cropSize:null,hasWheelJustStarted:!1},n.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!n.containerRef)){var r=!0;n.resizeObserver=new window.ResizeObserver(function(i){if(r){r=!1;return}n.computeSizes()}),n.resizeObserver.observe(n.containerRef)}},n.preventZoomSafari=function(r){return r.preventDefault()},n.cleanEvents=function(){n.currentDoc&&(n.currentDoc.removeEventListener("mousemove",n.onMouseMove),n.currentDoc.removeEventListener("mouseup",n.onDragStopped),n.currentDoc.removeEventListener("touchmove",n.onTouchMove),n.currentDoc.removeEventListener("touchend",n.onDragStopped),n.currentDoc.removeEventListener("gesturemove",n.onGestureMove),n.currentDoc.removeEventListener("gestureend",n.onGestureEnd))},n.clearScrollEvent=function(){n.containerRef&&n.containerRef.removeEventListener("wheel",n.onWheel),n.wheelTimer&&clearTimeout(n.wheelTimer)},n.onMediaLoad=function(){var r=n.computeSizes();r&&(n.emitCropData(),n.setInitialCrop(r)),n.props.onMediaLoaded&&n.props.onMediaLoaded(n.mediaSize)},n.setInitialCrop=function(r){if(n.props.initialCroppedAreaPercentages){var i=RM(n.props.initialCroppedAreaPercentages,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),s=i.crop,o=i.zoom;n.props.onCropChange(s),n.props.onZoomChange&&n.props.onZoomChange(o)}else if(n.props.initialCroppedAreaPixels){var a=PM(n.props.initialCroppedAreaPixels,n.mediaSize,n.props.rotation,r,n.props.minZoom,n.props.maxZoom),s=a.crop,o=a.zoom;n.props.onCropChange(s),n.props.onZoomChange&&n.props.onZoomChange(o)}},n.computeSizes=function(){var r,i,s,o,a,l,u=n.imageRef.current||n.videoRef.current;if(u&&n.containerRef){n.containerRect=n.containerRef.getBoundingClientRect();var c=n.containerRect.width/n.containerRect.height,h=((r=n.imageRef.current)===null||r===void 0?void 0:r.naturalWidth)||((i=n.videoRef.current)===null||i===void 0?void 0:i.videoWidth)||0,d=((s=n.imageRef.current)===null||s===void 0?void 0:s.naturalHeight)||((o=n.videoRef.current)===null||o===void 0?void 0:o.videoHeight)||0,m=u.offsetWidth<h||u.offsetHeight<d,v=h/d,w=void 0;if(m)switch(n.props.objectFit){default:case"contain":w=c>v?{width:n.containerRect.height*v,height:n.containerRect.height}:{width:n.containerRect.width,height:n.containerRect.width/v};break;case"horizontal-cover":w={width:n.containerRect.width,height:n.containerRect.width/v};break;case"vertical-cover":w={width:n.containerRect.height*v,height:n.containerRect.height};break;case"auto-cover":w=h>d?{width:n.containerRect.width,height:n.containerRect.width/v}:{width:n.containerRect.height*v,height:n.containerRect.height};break}else w={width:u.offsetWidth,height:u.offsetHeight};n.mediaSize=yt(yt({},w),{naturalWidth:h,naturalHeight:d}),n.props.setMediaSize&&n.props.setMediaSize(n.mediaSize);var E=n.props.cropSize?n.props.cropSize:CM(n.mediaSize.width,n.mediaSize.height,n.containerRect.width,n.containerRect.height,n.props.aspect,n.props.rotation);return(((a=n.state.cropSize)===null||a===void 0?void 0:a.height)!==E.height||((l=n.state.cropSize)===null||l===void 0?void 0:l.width)!==E.width)&&n.props.onCropSizeChange&&n.props.onCropSizeChange(E),n.setState({cropSize:E},n.recomputeCropPosition),n.props.setCropSize&&n.props.setCropSize(E),E}},n.onMouseDown=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("mousemove",n.onMouseMove),n.currentDoc.addEventListener("mouseup",n.onDragStopped),n.onDragStart(e.getMousePoint(r)))},n.onMouseMove=function(r){return n.onDrag(e.getMousePoint(r))},n.onTouchStart=function(r){n.currentDoc&&(n.isTouching=!0,!(n.props.onTouchRequest&&!n.props.onTouchRequest(r))&&(n.currentDoc.addEventListener("touchmove",n.onTouchMove,{passive:!1}),n.currentDoc.addEventListener("touchend",n.onDragStopped),r.touches.length===2?n.onPinchStart(r):r.touches.length===1&&n.onDragStart(e.getTouchPoint(r.touches[0]))))},n.onTouchMove=function(r){r.preventDefault(),r.touches.length===2?n.onPinchMove(r):r.touches.length===1&&n.onDrag(e.getTouchPoint(r.touches[0]))},n.onGestureStart=function(r){n.currentDoc&&(r.preventDefault(),n.currentDoc.addEventListener("gesturechange",n.onGestureMove),n.currentDoc.addEventListener("gestureend",n.onGestureEnd),n.gestureZoomStart=n.props.zoom,n.gestureRotationStart=n.props.rotation)},n.onGestureMove=function(r){if(r.preventDefault(),!n.isTouching){var i=e.getMousePoint(r),s=n.gestureZoomStart-1+r.scale;if(n.setNewZoom(s,i,{shouldUpdatePosition:!0}),n.props.onRotationChange){var o=n.gestureRotationStart+r.rotation;n.props.onRotationChange(o)}}},n.onGestureEnd=function(r){n.cleanEvents()},n.onDragStart=function(r){var i,s,o=r.x,a=r.y;n.dragStartPosition={x:o,y:a},n.dragStartCrop=yt({},n.props.crop),(s=(i=n.props).onInteractionStart)===null||s===void 0||s.call(i)},n.onDrag=function(r){var i=r.x,s=r.y;n.currentWindow&&(n.rafDragTimeout&&n.currentWindow.cancelAnimationFrame(n.rafDragTimeout),n.rafDragTimeout=n.currentWindow.requestAnimationFrame(function(){if(n.state.cropSize&&!(i===void 0||s===void 0)){var o=i-n.dragStartPosition.x,a=s-n.dragStartPosition.y,l={x:n.dragStartCrop.x+o,y:n.dragStartCrop.y+a},u=n.props.restrictPosition?fl(l,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):l;n.props.onCropChange(u)}}))},n.onDragStopped=function(){var r,i;n.isTouching=!1,n.cleanEvents(),n.emitCropData(),(i=(r=n.props).onInteractionEnd)===null||i===void 0||i.call(r)},n.onWheel=function(r){if(n.currentWindow&&!(n.props.onWheelRequest&&!n.props.onWheelRequest(r))){r.preventDefault();var i=e.getMousePoint(r),s=SM(r).pixelY,o=n.props.zoom-s*n.props.zoomSpeed/200;n.setNewZoom(o,i,{shouldUpdatePosition:!0}),n.state.hasWheelJustStarted||n.setState({hasWheelJustStarted:!0},function(){var a,l;return(l=(a=n.props).onInteractionStart)===null||l===void 0?void 0:l.call(a)}),n.wheelTimer&&clearTimeout(n.wheelTimer),n.wheelTimer=n.currentWindow.setTimeout(function(){return n.setState({hasWheelJustStarted:!1},function(){var a,l;return(l=(a=n.props).onInteractionEnd)===null||l===void 0?void 0:l.call(a)})},250)}},n.getPointOnContainer=function(r){var i=r.x,s=r.y;if(!n.containerRect)throw new Error("The Cropper is not mounted");return{x:n.containerRect.width/2-(i-n.containerRect.left),y:n.containerRect.height/2-(s-n.containerRect.top)}},n.getPointOnMedia=function(r){var i=r.x,s=r.y,o=n.props,a=o.crop,l=o.zoom;return{x:(i+a.x)/l,y:(s+a.y)/l}},n.setNewZoom=function(r,i,s){var o=s===void 0?{}:s,a=o.shouldUpdatePosition,l=a===void 0?!0:a;if(!(!n.state.cropSize||!n.props.onZoomChange)){var u=eh(r,n.props.minZoom,n.props.maxZoom);if(l){var c=n.getPointOnContainer(i),h=n.getPointOnMedia(c),d={x:h.x*u-c.x,y:h.y*u-c.y},m=n.props.restrictPosition?fl(d,n.mediaSize,n.state.cropSize,u,n.props.rotation):d;n.props.onCropChange(m)}n.props.onZoomChange(u)}},n.getCropData=function(){if(!n.state.cropSize)return null;var r=n.props.restrictPosition?fl(n.props.crop,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):n.props.crop;return kM(r,n.mediaSize,n.state.cropSize,n.getAspect(),n.props.zoom,n.props.rotation,n.props.restrictPosition)},n.emitCropData=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,s=r.croppedAreaPixels;n.props.onCropComplete&&n.props.onCropComplete(i,s),n.props.onCropAreaChange&&n.props.onCropAreaChange(i,s)}},n.emitCropAreaChange=function(){var r=n.getCropData();if(r){var i=r.croppedAreaPercentages,s=r.croppedAreaPixels;n.props.onCropAreaChange&&n.props.onCropAreaChange(i,s)}},n.recomputeCropPosition=function(){if(n.state.cropSize){var r=n.props.restrictPosition?fl(n.props.crop,n.mediaSize,n.state.cropSize,n.props.zoom,n.props.rotation):n.props.crop;n.props.onCropChange(r),n.emitCropData()}},n}return e.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=NM,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},e.prototype.componentWillUnmount=function(){var n,r;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(n=this.resizeObserver)===null||n===void 0||n.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((r=this.styleRef.parentNode)===null||r===void 0||r.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},e.prototype.componentDidUpdate=function(n){var r,i,s,o,a,l,u,c,h;n.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):n.aspect!==this.props.aspect?this.computeSizes():n.zoom!==this.props.zoom?this.recomputeCropPosition():((r=n.cropSize)===null||r===void 0?void 0:r.height)!==((i=this.props.cropSize)===null||i===void 0?void 0:i.height)||((s=n.cropSize)===null||s===void 0?void 0:s.width)!==((o=this.props.cropSize)===null||o===void 0?void 0:o.width)?this.computeSizes():(((a=n.crop)===null||a===void 0?void 0:a.x)!==((l=this.props.crop)===null||l===void 0?void 0:l.x)||((u=n.crop)===null||u===void 0?void 0:u.y)!==((c=this.props.crop)===null||c===void 0?void 0:c.y))&&this.emitCropAreaChange(),n.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),n.video!==this.props.video&&((h=this.videoRef.current)===null||h===void 0||h.load())},e.prototype.getAspect=function(){var n=this.props,r=n.cropSize,i=n.aspect;return r?r.width/r.height:i},e.prototype.onPinchStart=function(n){var r=e.getTouchPoint(n.touches[0]),i=e.getTouchPoint(n.touches[1]);this.lastPinchDistance=D0(r,i),this.lastPinchRotation=N0(r,i),this.onDragStart(b0(r,i))},e.prototype.onPinchMove=function(n){var r=this;if(!(!this.currentDoc||!this.currentWindow)){var i=e.getTouchPoint(n.touches[0]),s=e.getTouchPoint(n.touches[1]),o=b0(i,s);this.onDrag(o),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var a=D0(i,s),l=r.props.zoom*(a/r.lastPinchDistance);r.setNewZoom(l,o,{shouldUpdatePosition:!1}),r.lastPinchDistance=a;var u=N0(i,s),c=r.props.rotation+(u-r.lastPinchRotation);r.props.onRotationChange&&r.props.onRotationChange(c),r.lastPinchRotation=u})}},e.prototype.render=function(){var n=this,r=this.props,i=r.image,s=r.video,o=r.mediaProps,a=r.transform,l=r.crop,u=l.x,c=l.y,h=r.rotation,d=r.zoom,m=r.cropShape,v=r.showGrid,w=r.style,E=w.containerStyle,p=w.cropAreaStyle,f=w.mediaStyle,g=r.classes,_=g.containerClassName,x=g.cropAreaClassName,P=g.mediaClassName,D=r.objectFit;return At.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(Y){return n.containerRef=Y},"data-testid":"container",style:E,className:pl("reactEasyCrop_Container",_)},i?At.createElement("img",yt({alt:"",className:pl("reactEasyCrop_Image",D==="contain"&&"reactEasyCrop_Contain",D==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",D==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",D==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),P)},o,{src:i,ref:this.imageRef,style:yt(yt({},f),{transform:a||"translate(".concat(u,"px, ").concat(c,"px) rotate(").concat(h,"deg) scale(").concat(d,")")}),onLoad:this.onMediaLoad})):s&&At.createElement("video",yt({autoPlay:!0,loop:!0,muted:!0,className:pl("reactEasyCrop_Video",D==="contain"&&"reactEasyCrop_Contain",D==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",D==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",D==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),P)},o,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:yt(yt({},f),{transform:a||"translate(".concat(u,"px, ").concat(c,"px) rotate(").concat(h,"deg) scale(").concat(d,")")}),controls:!1}),(Array.isArray(s)?s:[{src:s}]).map(function(N){return At.createElement("source",yt({key:N.src},N))})),this.state.cropSize&&At.createElement("div",{style:yt(yt({},p),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:pl("reactEasyCrop_CropArea",m==="round"&&"reactEasyCrop_CropAreaRound",v&&"reactEasyCrop_CropAreaGrid",x)}))},e.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:LM,minZoom:bM,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},e.getMousePoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},e.getTouchPoint=function(n){return{x:Number(n.clientX),y:Number(n.clientY)}},e}(At.Component);const $M=t=>new Promise((e,n)=>{const r=new Image;r.addEventListener("load",()=>e(r)),r.addEventListener("error",i=>n(i)),r.setAttribute("crossOrigin","anonymous"),r.src=t});function sx(t){return t*Math.PI/180}function MM(t,e,n){const r=sx(n);return{width:Math.abs(Math.cos(r)*t)+Math.abs(Math.sin(r)*e),height:Math.abs(Math.sin(r)*t)+Math.abs(Math.cos(r)*e)}}async function UM(t,e,n=0,r={horizontal:!1,vertical:!1}){const i=await $M(t),s=document.createElement("canvas"),o=s.getContext("2d");if(!o)return null;const a=sx(n),{width:l,height:u}=MM(i.width,i.height,n);s.width=l,s.height=u,o.translate(l/2,u/2),o.rotate(a),o.scale(r.horizontal?-1:1,r.vertical?-1:1),o.translate(-i.width/2,-i.height/2),o.drawImage(i,0,0);const c=o.getImageData(e.x,e.y,e.width,e.height);return s.width=e.width,s.height=e.height,o.putImageData(c,0,0),s.toDataURL("image/jpeg")}const rd=A.div`
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
`,FM=A.div`
  position: relative;
  width: 700px;
  height: 600px;
`,jM=A.input`
  display: none;
`,ml=A.button`
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
`,zM=A(Cg)`
  width: 300px;
  height: 300px;
  margin: 0px 50px 10px 50px;
  display: block;

  &:hover {
    cursor: pointer;
  }
`,VM=A.img`
  width: 500px;
`;function BM(){const t=S.useContext(Ln),{profilePicture:e}=Si().state,[n,r]=S.useState({}),[i,s]=S.useState({x:0,y:0}),[o,a]=S.useState(1),[l,u]=S.useState(null),[c,h]=S.useState(null),[d,m]=S.useState(""),[v,w]=S.useState(""),[E,p]=S.useState("choose"),[f,g]=S.useState("");let _=Ps();S.useEffect(()=>{P()},[d]),S.useEffect(()=>{const V=document.querySelector("input[type=range]");V&&(V.value=o)},[o]);function x(){window.innerHeight<document.body.scrollHeight?r({position:"sticky"}):r({position:"absolute"})}async function P(){if(d){let V=new FileReader;V.readAsDataURL(d),p("crop"),V.onload=function(){w(V.result)},V.onerror=function(){console.log(V.error)}}}const D=S.useCallback((V,ye)=>{u(ye)},[]),N=S.useCallback(async()=>{try{const V=await UM(v,l);console.log("done",{croppedImage:V}),h(V),p("upload")}catch(V){console.error(V)}},[l]),Y=S.useCallback(()=>{h(null),m(""),w(""),p("choose"),a(1),s({x:0,y:0})},[]);async function W(){if(e)try{t.photoURL!=="default/default-profile-picture.png"&&await hC(Kt(Qt,t.photoURL));const V=`${t.uid}/ProfilePicture/${d.name}`,ye=Kt(Qt,V),Me=await(await fetch(c)).blob(),Ie=Me.type,tt=new File([Me],d.name,{type:Ie}),te=await r0(ye,tt);await at(ve(pe,"users",t.uid),{profilePictureURL:V}),await OC(t,{photoURL:V}),console.log("File has been uploaded",te),_(`/p/${t.displayName}`,{state:{uid:t.uid,disp:"gallery"}})}catch(V){console.log(V)}else try{const V=`${t.uid}/Uploads/${d.name}`,ye=Kt(Qt,V),Me=await(await fetch(c)).blob(),Ie=Me.type,tt=new File([Me],d.name,{type:Ie}),te=await r0(ye,tt),T=await lL(Zm(pe,"users",t.uid,"Uploads"),{dateUploaded:cL(),desc:f,filename:d.name,likes:[],url:V,uid:t.uid,username:t.displayName,comments:[]});await at(ve(pe,"users",t.uid,"Uploads",T.id),{docID:T.id}),console.log("File has been uploaded",te),_(`/p/${t.displayName}`,{state:{uid:t.uid,disp:"gallery"}})}catch(V){console.log(V)}}return y.jsxs("div",{onLoad:x,children:[y.jsx(Jc,{}),E==="choose"?y.jsxs(rd,{children:[y.jsxs("label",{children:[y.jsx(jM,{type:"file",accept:"image/*",id:"fileInput",onChange:V=>m(V.target.files[0])}),y.jsx(zM,{})]}),y.jsx("p",{children:"Select an image to upload"})]}):E==="crop"?y.jsxs(rd,{children:[y.jsx(FM,{children:y.jsx(OM,{image:v,crop:i,zoom:o,aspect:1,onCropChange:s,onZoomChange:a,onCropComplete:D})}),y.jsxs("div",{children:[y.jsx(ml,{onClick:Y,children:"Cancel"}),y.jsx("input",{type:"range",defaultValue:1,min:1,max:3,step:.1,onChange:V=>a(V.target.value)}),y.jsx(ml,{onClick:N,children:"Crop"})]})]}):E==="upload"?y.jsxs(rd,{children:[y.jsx(VM,{src:c}),y.jsxs("div",{children:[y.jsx(ml,{onClick:Y,children:"Cancel"}),e||y.jsx("textarea",{name:"",id:"",cols:"30",rows:"5",placeholder:"Enter a caption...",onChange:V=>g(V.target.value)}),y.jsx(ml,{type:"button",onClick:W,children:"Upload"})]})]}):null,y.jsx(Zc,{footerStyle:n})]})}const HM=A.div`
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
`,WM=A.img`
  width: 48px;
  height: 48px;
  border-radius: 50%
`,qM=A(lt)`
  color: black;
  text-decoration: none;
`;function GM(t){return y.jsx(qM,{to:`/p/${t.user.username}`,state:{uid:t.user.uid},children:y.jsxs(HM,{children:[y.jsx(WM,{src:t.user.profPic,alt:""}),t.user.username]})})}const KM=A.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;function L0(t){return y.jsx(KM,{children:t.users.map(e=>y.jsx(GM,{user:e},e.uid))})}const QM=A.div`
  position: relative;
  width: 300px;
  height: 300px;
`,YM=A.img`
  width: 300px;
  height: 300px;
`,XM=A.div`
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
`;function JM(t){return y.jsxs(QM,{children:[y.jsx(YM,{src:t.image.path}),y.jsx(lt,{to:`/post/${t.image.imageInfo.docID}`,state:{upload:t.image.imageInfo,image:t.image.path,profilePicture:t.profilePicture,postLikes:t.image.imageInfo.likes},children:y.jsxs(XM,{children:[y.jsx(_g,{likes:t.image.imageInfo.likes,image:t.image.imageInfo,toggleLike:t.toggleLike}),t.image.imageInfo.likes?t.image.imageInfo.likes.length:0]})})]})}const ZM=A.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  gap: 30px;
  justify-content: center;
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
`;function eU(t){return y.jsx(ZM,{children:t.images.map(e=>y.jsx(JM,{image:e,toggleLike:t.toggleLike,profilePicture:t.profilePicture},e.imageInfo.docID))})}const tU=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"16px",height:"16px",...t},S.createElement("path",{d:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"})),nU=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"18px",height:"18px",...t},S.createElement("path",{d:"M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"})),rU=t=>S.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"72px",height:"72px",...t},S.createElement("path",{d:"M17 12C17 7.55 11.62 5.31 8.46 8.46C5.31 11.61 7.55 17 12 17C14.76 17 17 14.76 17 12M12 15C9.33 15 8 11.77 9.88 9.88C11.77 8 15 9.33 15 12C15 13.66 13.66 15 12 15M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5M5 5H9V3H5C3.9 3 3 3.9 3 5V9H5M19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19"})),ox=mE`
  0% {
    background-color: rgb(170, 170, 170);
  }

  50% {
    background-color: rgb(190, 190, 190);
  }

  100% {
    background-color: rgb(170, 170, 170);
  }
`,iU=A.div`
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
`,sU=A.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #b3b3b3;
  animation: ${ox} 2s linear infinite;
`,oU=A.div`
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
`,Zs=A.div`
  width: 150px;
  height: 20px;
  background-color: #b3b3b3;
  border-radius: 12px;
  animation: ${ox} 2s linear infinite;
`;function aU(){return y.jsxs(iU,{children:[y.jsx(sU,{}),y.jsxs(oU,{children:[y.jsx("div",{children:y.jsx(Zs,{})}),y.jsxs("div",{children:[y.jsx(Zs,{}),y.jsx(Zs,{}),y.jsx(Zs,{})]}),y.jsx(Zs,{})]})]})}const lU=A.div`
  margin: 30px auto;
  max-width: 960px;
`,uU=A.div`
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
`,cU=A.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  flex-shrink: 0;
`,hU=A.div`
  position: relative;
  width: 150px;
  height: 150px;
`,dU=A.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  max-width: 350px;

  > div {
    display: flex;
    align-items: center;
    gap: 45px;

    @media(max-width: 700px) {
      flex-direction: column;
      text-align: center;
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
`,id=A.p`
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`,fU=A(tU)`
  &:hover {
    cursor: pointer;
  }
`,pU=A(nU)`
  &:hover {
    cursor: pointer;
  }
`,O0=A.button`
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
`,sd=A.span`
  font-weight: bold;
`,mU=A.div`
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
`;function gU(){const t=S.useContext(Ln),{uid:e}=Si().state,[n,r]=S.useState({}),[i,s]=S.useState(""),[o,a]=S.useState(""),[l,u]=S.useState(""),[c,h]=S.useState([]),[d,m]=S.useState([]),[v,w]=S.useState([]),[E,p]=S.useState([]),[f,g]=S.useState("gallery"),[_,x]=S.useState(!1),[P,D]=S.useState(!0),[N,Y]=S.useState({});S.useEffect(()=>{async function te(){const T=await wi(t.uid);p(T.following)}te()},[]),S.useEffect(()=>{Y({display:"none"}),h([]),D(!0),g("gallery"),V()},[e]);function W(){window.innerHeight<document.body.scrollHeight?r({position:"sticky"}):r({position:"absolute"})}async function V(){try{const T=(await mi(ve(pe,"users",e))).data(),j=await A$(e),H=await P$(e),ne=await D$(e),b=await Jn(Kt(Qt,T.profilePictureURL));m(j),w(H),s(T.username),u(T.bio),h(ne),a(b),D(!1),Y({display:"flex"})}catch(te){console.log(te)}}async function ye(){await at(ve(pe,"users",t.uid),{following:Ar(e)}),await at(ve(pe,"users",e),{followers:Ar(t.uid)});const te=await Jn(Kt(Qt,t.photoURL));p([...E,e]),m([...d,{uid:t.uid,profPic:te,username:t.displayName}])}async function $e(){await at(ve(pe,"users",t.uid),{following:ts(e)}),await at(ve(pe,"users",e),{followers:ts(t.uid)}),p(E.filter(te=>te!==e)),m(d.filter(te=>te.uid!==t.uid))}async function Me(te,T,j){if(te){await at(ve(pe,"users",e,"Uploads",j),{likes:ts(T)});const H=c.map(ne=>{if(ne.imageInfo.docID==j){let b=ne.imageInfo.likes.indexOf(T);ne.imageInfo.likes.splice(b,1)}return ne});h(H)}else{await at(ve(pe,"users",e,"Uploads",j),{likes:Ar(T)});const H=c.map(ne=>(ne.imageInfo.docID==j&&ne.imageInfo.likes.push(T),ne));h(H)}}async function Ie(te){te?(await at(ve(pe,"users",t.uid),{bio:l}),x(!1)):x(!0)}function tt(te){g(te)}return y.jsxs("div",{onLoad:W,children:[y.jsx(Jc,{}),y.jsxs(lU,{children:[P&&y.jsx(aU,{}),y.jsxs(uU,{style:N,children:[y.jsxs(hU,{children:[y.jsx(cU,{src:o}),y.jsx(lt,{to:"/upload",state:{profilePicture:!0},children:y.jsx(mU,{children:y.jsx(rU,{})})})]}),y.jsxs(dU,{children:[y.jsxs("div",{children:[y.jsx("h2",{children:i}),E.includes(e)==!0?y.jsx(O0,{onClick:$e,children:"Unfollow"}):t.uid!=e?y.jsx(O0,{onClick:ye,children:"Follow"}):null]}),y.jsxs("div",{children:[y.jsxs(id,{onClick:()=>tt("gallery"),children:[y.jsx(sd,{children:c.length})," Photos"]}),y.jsxs(id,{onClick:()=>tt("followers"),children:[y.jsx(sd,{children:d.length})," Followers"]}),y.jsxs(id,{onClick:()=>tt("following"),children:[y.jsx(sd,{children:v.length})," Following"]})]}),t.uid==e?_?y.jsxs("div",{children:[y.jsx("input",{type:"text",onChange:te=>u(te.target.value),placeholder:l}),y.jsx(pU,{onClick:()=>Ie(!0)})]}):y.jsxs("p",{children:[l,y.jsx(fU,{onClick:()=>Ie(!1)})]}):y.jsx("p",{children:l})]})]}),f==="gallery"?y.jsx(eU,{images:c,toggleLike:Me,profilePicture:o}):f==="followers"?y.jsx(L0,{users:d}):f==="following"?y.jsx(L0,{users:v}):null]}),y.jsx(Zc,{footerStyle:n})]})}const yU=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,vU=A.div`
  display: flex;
  flex-direction: column;

  > p:last-of-type {
    text-align: center;
    margin: 15px 0px 6px 0px;
  }
`,wU=A.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 400px;
  background-color: white;
  padding: 20px;
  border: 1px solid rgba(114, 114, 114, 0.2);
`,$0=A.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  outline: none;
`,EU=A.button`
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
`,_U=A.p`
  padding: 15px;
  background-color: white;
  border: 1px solid rgba(114, 114, 114, 0.2);
  font-size: .9rem;
  text-align: center;
  margin-top: 15px;
`,SU=A(lt)`
  color: #1b34c4;
  text-decoration: none;
  font-weight: bold;
`,CU=A.button`
  width: fit-content;
  margin: 0px auto;
  padding: 5px;
  font-weight: bold;
  font-size: .9rem;
  text-align: center;

    &:hover {
    cursor: pointer;
  }
`,xU=A.span`
  color: red;
  font-size: .8rem;
  font-weight: bold;
  text-align: center;
`;function kU(){let t=Ps();const[e,n]=S.useState(!0);async function r(i,s){i.preventDefault();const o=Xc();if(s)try{const a=await wi("GuestAccount");await d0(o,a.email,a.password),t("/")}catch(a){console.log(a)}else try{const a=document.getElementById("email").value,l=document.getElementById("password").value;await d0(o,a,l),t("/")}catch(a){n(!1),console.log(a)}}return y.jsx(yU,{children:y.jsxs(vU,{children:[y.jsxs(wU,{onSubmit:i=>r(i),children:[y.jsx(ju,{children:"PXLshare"}),e?null:y.jsx(xU,{children:"Unable to login. Check email and password."}),y.jsx($0,{type:"email",placeholder:"Email Address",id:"email",required:!0}),y.jsx($0,{type:"password",placeholder:"Password",id:"password",required:!0}),y.jsx(EU,{type:"submit",children:"Login"})]}),y.jsxs(_U,{children:["Don't have an account? ",y.jsx(SU,{to:"/sign-up",children:"Sign Up"})]}),y.jsx("p",{children:"Wanna look around?"}),y.jsx(CU,{onClick:i=>r(i,!0),children:"Login as Guest"})]})})}const IU=A.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,TU=A.div`
  display: flex;
  flex-direction: column;

  > p:last-of-type {
    text-align: center;
    margin: 15px 0px 6px 0px;
  }
`,RU=A.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 400px;
  background-color: white;
  padding: 20px;
  border: 1px solid rgba(114, 114, 114, 0.2);
`,gl=A.input`
  padding: 10px;
  font-size: 1rem;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  outline: none;
`,AU=A.button`
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
`,PU=A.p`
  padding: 15px;
  background-color: white;
  border: 1px solid rgba(114, 114, 114, 0.2);
  font-size: .9rem;
  text-align: center;
  margin-top: 15px;
`,DU=A(lt)`
  color: #1b34c4;
  text-decoration: none;
  font-weight: bold;
`,ax=A.span`
  color: red;
  font-size: .8rem;
  font-weight: bold;
`,NU=A(ax)`
  text-align: center;
`;function bU(){let t=Ps();const[e,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState([]),[a,l]=S.useState(!0);S.useEffect(()=>{async function h(){const m=(await mi(ve(pe,"users","userList"))).data().users,v=[];for(let w of m)v.push(w.username.toLowerCase());o(v)}h()},[]);function u(h){return h.validity.patternMismatch?(h.setCustomValidity("Username can contain letters, numbers, and a underscores."),!1):(h.setCustomValidity(""),!0)}async function c(h){h.preventDefault();const d=document.getElementById("username").value,m=document.getElementById("email").value,v=document.getElementById("password").value,w=document.getElementById("confirm-password").value;if(s.includes(d.toLowerCase())?l(!1):l(!0),v===w&&a===!0)try{const E=Xc();await hO(E,m,v),await OC(E.currentUser,{displayName:d,photoURL:"default/default-profile-picture.png"}),await oL(ve(pe,"users",E.currentUser.uid),{bio:"",followers:[],following:[],profilePictureURL:E.currentUser.photoURL,username:E.currentUser.displayName,uid:E.currentUser.uid}),await at(ve(pe,"users","userList"),{users:Ar({uid:E.currentUser.uid,username:E.currentUser.displayName})}),t("/")}catch(E){console.log(E)}}return y.jsx(IU,{children:y.jsxs(TU,{children:[y.jsxs(RU,{onSubmit:h=>c(h),children:[y.jsx(ju,{children:"PXLshare"}),a?null:y.jsx(NU,{children:"Username taken"}),y.jsx(gl,{onInput:h=>u(h.target),type:"text",placeholder:"Username",id:"username",pattern:"^[\\w]+$",maxLength:16,required:!0}),y.jsx(gl,{type:"email",placeholder:"Email Address",id:"email",required:!0}),e===r?null:y.jsx(ax,{children:"*Passwords do not match"}),y.jsx(gl,{type:"password",placeholder:"Password",id:"password",minLength:6,maxLength:12,onChange:h=>n(h.target.value),required:!0}),y.jsx(gl,{type:"password",placeholder:"Confirm Password",id:"confirm-password",minLength:6,maxLength:12,onChange:h=>i(h.target.value),required:!0}),y.jsx(AU,{type:"submit",children:"Create Account"})]}),y.jsxs(PU,{children:["Already have an account? ",y.jsx(DU,{to:"/login",children:"Login"})]})]})})}const LU="/PXLshare/assets/Lato-e82542ae.ttf",OU=A.div`
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
`,$U=A(lt)`
  text-decoration: none;
  color: black;
`,MU=A.div`
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
`,UU=A.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,FU=A.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  > *:not(:last-child) {
    padding: 6px 10px;
  }
`,jU=A.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`,zU=A.img`
  width: 700px;
  border-radius: 4px;
  border: 1px solid rgba(114, 114, 114, 0.2);
  flex-shrink: 0;

  @media(max-width: 1000px) {
    width: 580px;
  }
`,M0=A.p`
  font-weight: bold;
`,U0=A.button`
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
`;function VU(){const t=S.useContext(Ln),e=S.useRef(null),n=Ps(),{upload:r,image:i,profilePicture:s,postLikes:o}=Si().state,[a,l]=S.useState(o),[u,c]=S.useState(""),[h,d]=S.useState(r.comments),m=new Date().getTime(),v=r.dateUploaded.seconds,w=Math.trunc(m/1e3/60/60/24-v/60/60/24);async function E(){if(u.trim())try{await at(ve(pe,"users",r.uid,"Uploads",r.docID),{comments:Ar({uid:t.uid,comment:u,username:t.displayName})}),d([...h,{uid:t.uid,comment:u,username:t.displayName}]),c("")}catch(g){console.log(g)}}async function p(g){g?(await at(ve(pe,"users",r.uid,"Uploads",r.docID),{likes:ts(t.uid)}),l(a.filter(_=>_!==t.uid))):(await at(ve(pe,"users",r.uid,"Uploads",r.docID),{likes:Ar(t.uid)}),l([...a,t.uid]))}function f(){e.current.focus()}return y.jsxs(y.Fragment,{children:[y.jsx(Jc,{}),y.jsxs(OU,{children:[y.jsx(zU,{src:i}),y.jsxs(FU,{children:[y.jsxs(MU,{children:[y.jsxs("div",{children:[y.jsx(jU,{src:s}),y.jsx($U,{to:`/p/${r.username}`,state:{uid:r.uid},children:y.jsx("h2",{children:r.username})})]}),y.jsxs("div",{children:[y.jsx(U0,{onClick:()=>n(-1),children:"Back"}),t.uid===r.uid?y.jsx(U0,{onClick:()=>{N$(r),n(-1)},children:"Delete"}):null]})]}),r.desc?y.jsx(M0,{children:r.desc}):null,y.jsxs(UU,{children:[y.jsx(_g,{likes:a,image:r,toggleLike:p}),y.jsx(om,{onClick:f})]}),y.jsxs(M0,{children:[a.length," ",a.length==1?"Like":"Likes "]}),y.jsxs("p",{children:["Uploaded ",w>0?`${w} days ago`:"today"]}),y.jsx(KC,{comments:h,setComments:d,upload:r,commentsViewLimit:8}),y.jsx(Sg,{inputRef:e,addComment:E,setComment:c,comment:u})]})]}),y.jsx(Zc,{footerStyle:{position:"absolute"}})]})}const BU=NR`

  @font-face {
    font-family: 'Lato';
    src: url(${LU});
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
`,Ln=S.createContext();function HU(){const[t,e]=S.useState(!0),[n,r]=S.useState(!0);return S.useEffect(()=>{const i=Xc();mO(i,s=>{s?(e(i.currentUser),r(!0)):r(!1)})},[]),y.jsx(Ln.Provider,{value:t,children:y.jsxs(LT,{basename:"/PXLshare",children:[y.jsx(BU,{}),y.jsxs(AT,{children:[y.jsx(Hr,{path:"/",element:n?y.jsx(hM,{}):y.jsx(TT,{to:"/login"})}),y.jsx(Hr,{path:"/upload",element:y.jsx(BM,{})}),y.jsx(Hr,{path:"/p/:id",element:y.jsx(gU,{})}),y.jsx(Hr,{path:"/login",element:y.jsx(kU,{})}),y.jsx(Hr,{path:"/sign-up",element:y.jsx(bU,{})}),y.jsx(Hr,{path:"/post/:id",element:y.jsx(VU,{})})]})]})})}ad.createRoot(document.getElementById("root")).render(y.jsx(At.StrictMode,{children:y.jsx(HU,{})}));
