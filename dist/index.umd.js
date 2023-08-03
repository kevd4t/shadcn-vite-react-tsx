(function(E,T){typeof exports=="object"&&typeof module<"u"?T(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],T):(E=typeof globalThis<"u"?globalThis:E||self,T(E.ViteButton={},E.React))})(this,function(E,T){"use strict";var Z={exports:{}},x={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q;function Ce(){if(Q)return x;Q=1;var y=T,k=Symbol.for("react.element"),U=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,I=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function D(_,l,S){var v,b={},m=null,Y=null;S!==void 0&&(m=""+S),l.key!==void 0&&(m=""+l.key),l.ref!==void 0&&(Y=l.ref);for(v in l)O.call(l,v)&&!W.hasOwnProperty(v)&&(b[v]=l[v]);if(_&&_.defaultProps)for(v in l=_.defaultProps,l)b[v]===void 0&&(b[v]=l[v]);return{$$typeof:k,type:_,key:m,ref:Y,props:b,_owner:I.current}}return x.Fragment=U,x.jsx=D,x.jsxs=D,x}var j={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function Pe(){return ee||(ee=1,process.env.NODE_ENV!=="production"&&function(){var y=T,k=Symbol.for("react.element"),U=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),D=Symbol.for("react.provider"),_=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),S=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),b=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),re=Symbol.iterator,xe="@@iterator";function je(e){if(e===null||typeof e!="object")return null;var r=re&&e[re]||e[xe];return typeof r=="function"?r:null}var C=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function c(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];ke("error",e,t)}}function ke(e,r,t){{var n=C.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var De=!1,Fe=!1,Ae=!1,Ie=!1,We=!1,te;te=Symbol.for("react.module.reference");function Ye(e){return!!(typeof e=="string"||typeof e=="function"||e===O||e===W||We||e===I||e===S||e===v||Ie||e===Y||De||Fe||Ae||typeof e=="object"&&e!==null&&(e.$$typeof===m||e.$$typeof===b||e.$$typeof===D||e.$$typeof===_||e.$$typeof===l||e.$$typeof===te||e.getModuleId!==void 0))}function $e(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ne(e){return e.displayName||"Context"}function g(e){if(e==null)return null;if(typeof e.tag=="number"&&c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case O:return"Fragment";case U:return"Portal";case W:return"Profiler";case I:return"StrictMode";case S:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case _:var r=e;return ne(r)+".Consumer";case D:var t=e;return ne(t._context)+".Provider";case l:return $e(e,e.render,"ForwardRef");case b:var n=e.displayName||null;return n!==null?n:g(e.type)||"Memo";case m:{var i=e,u=i._payload,o=i._init;try{return g(o(u))}catch{return null}}}return null}var R=Object.assign,F=0,ae,oe,ie,ue,se,fe,le;function ce(){}ce.__reactDisabledLog=!0;function Ne(){{if(F===0){ae=console.log,oe=console.info,ie=console.warn,ue=console.error,se=console.group,fe=console.groupCollapsed,le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ce,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}F++}}function Le(){{if(F--,F===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:R({},e,{value:ae}),info:R({},e,{value:oe}),warn:R({},e,{value:ie}),error:R({},e,{value:ue}),group:R({},e,{value:se}),groupCollapsed:R({},e,{value:fe}),groupEnd:R({},e,{value:le})})}F<0&&c("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var B=C.ReactCurrentDispatcher,q;function $(e,r,t){{if(q===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);q=n&&n[1]||""}return`
`+q+e}}var J=!1,N;{var Ve=typeof WeakMap=="function"?WeakMap:Map;N=new Ve}function de(e,r){if(!e||J)return"";{var t=N.get(e);if(t!==void 0)return t}var n;J=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=B.current,B.current=null,Ne();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(h){n=h}Reflect.construct(e,[],o)}else{try{o.call()}catch(h){n=h}e.call(o.prototype)}}else{try{throw Error()}catch(h){n=h}e()}}catch(h){if(h&&n&&typeof h.stack=="string"){for(var a=h.stack.split(`
`),d=n.stack.split(`
`),s=a.length-1,f=d.length-1;s>=1&&f>=0&&a[s]!==d[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==d[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==d[f]){var p=`
`+a[s].replace(" at new "," at ");return e.displayName&&p.includes("<anonymous>")&&(p=p.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,p),p}while(s>=1&&f>=0);break}}}finally{J=!1,B.current=u,Le(),Error.prepareStackTrace=i}var w=e?e.displayName||e.name:"",Se=w?$(w):"";return typeof e=="function"&&N.set(e,Se),Se}function Me(e,r,t){return de(e,!1)}function Ue(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function L(e,r,t){if(e==null)return"";if(typeof e=="function")return de(e,Ue(e));if(typeof e=="string")return $(e);switch(e){case S:return $("Suspense");case v:return $("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case l:return Me(e.render);case b:return L(e.type,r,t);case m:{var n=e,i=n._payload,u=n._init;try{return L(u(i),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,ve={},pe=C.ReactDebugCurrentFrame;function M(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);pe.setExtraStackFrame(t)}else pe.setExtraStackFrame(null)}function Be(e,r,t,n,i){{var u=Function.call.bind(V);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var d=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw d.name="Invariant Violation",d}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(M(i),c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),M(null)),a instanceof Error&&!(a.message in ve)&&(ve[a.message]=!0,M(i),c("Failed %s type: %s",t,a.message),M(null))}}}var qe=Array.isArray;function G(e){return qe(e)}function Je(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ge(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function ge(e){if(Ge(e))return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Je(e)),be(e)}var A=C.ReactCurrentOwner,ze={key:!0,ref:!0,__self:!0,__source:!0},he,ye,z;z={};function Ke(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function He(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function Xe(e,r){if(typeof e.ref=="string"&&A.current&&r&&A.current.stateNode!==r){var t=g(A.current.type);z[t]||(c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',g(A.current.type),e.ref),z[t]=!0)}}function Ze(e,r){{var t=function(){he||(he=!0,c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function Qe(e,r){{var t=function(){ye||(ye=!0,c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var er=function(e,r,t,n,i,u,o){var a={$$typeof:k,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function rr(e,r,t,n,i){{var u,o={},a=null,d=null;t!==void 0&&(ge(t),a=""+t),He(r)&&(ge(r.key),a=""+r.key),Ke(r)&&(d=r.ref,Xe(r,i));for(u in r)V.call(r,u)&&!ze.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||d){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&Ze(o,f),d&&Qe(o,f)}return er(e,a,d,i,n,A.current,o)}}var K=C.ReactCurrentOwner,Ee=C.ReactDebugCurrentFrame;function P(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var H;H=!1;function X(e){return typeof e=="object"&&e!==null&&e.$$typeof===k}function _e(){{if(K.current){var e=g(K.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function tr(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var me={};function nr(e){{var r=_e();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Re(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=nr(r);if(me[t])return;me[t]=!0;var n="";e&&e._owner&&e._owner!==K.current&&(n=" It was passed a child from "+g(e._owner.type)+"."),P(e),c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),P(null)}}function Te(e,r){{if(typeof e!="object")return;if(G(e))for(var t=0;t<e.length;t++){var n=e[t];X(n)&&Re(n,r)}else if(X(e))e._store&&(e._store.validated=!0);else if(e){var i=je(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)X(o.value)&&Re(o.value,r)}}}function ar(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===l||r.$$typeof===b))t=r.propTypes;else return;if(t){var n=g(r);Be(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!H){H=!0;var i=g(r);c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function or(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){P(e),c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),P(null);break}}e.ref!==null&&(P(e),c("Invalid attribute `ref` supplied to `React.Fragment`."),P(null))}}function Oe(e,r,t,n,i,u){{var o=Ye(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var d=tr(i);d?a+=d:a+=_e();var s;e===null?s="null":G(e)?s="array":e!==void 0&&e.$$typeof===k?(s="<"+(g(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=rr(e,r,t,i,u);if(f==null)return f;if(o){var p=r.children;if(p!==void 0)if(n)if(G(p)){for(var w=0;w<p.length;w++)Te(p[w],e);Object.freeze&&Object.freeze(p)}else c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Te(p,e)}return e===O?or(f):ar(f),f}}function ir(e,r,t){return Oe(e,r,t,!0)}function ur(e,r,t){return Oe(e,r,t,!1)}var sr=ur,fr=ir;j.Fragment=O,j.jsx=sr,j.jsxs=fr}()),j}(function(y){process.env.NODE_ENV==="production"?y.exports=Ce():y.exports=Pe()})(Z);const lr="",we=({children:y})=>Z.exports.jsx("button",{className:"bg-[#ff7373] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",children:y});E.Button=we,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=index.umd.js.map
