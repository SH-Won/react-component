(function(g,y){typeof exports=="object"&&typeof module<"u"?y(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],y):(g=typeof globalThis<"u"?globalThis:g||self,y(g["my-react-component"]={},g.React))})(this,function(g,y){"use strict";var B={},He={get exports(){return B},set exports(r){B=r}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function Ue(){if(ie)return V;ie=1;var r=y,i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function S(x,b,L){var k,j={},z=null,G=null;L!==void 0&&(z=""+L),b.key!==void 0&&(z=""+b.key),b.ref!==void 0&&(G=b.ref);for(k in b)m.call(b,k)&&!E.hasOwnProperty(k)&&(j[k]=b[k]);if(x&&x.defaultProps)for(k in b=x.defaultProps,b)j[k]===void 0&&(j[k]=b[k]);return{$$typeof:i,type:x,key:z,ref:G,props:j,_owner:R.current}}return V.Fragment=d,V.jsx=S,V.jsxs=S,V}var $={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oe;function Ye(){return oe||(oe=1,process.env.NODE_ENV!=="production"&&function(){var r=y,i=Symbol.for("react.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),S=Symbol.for("react.provider"),x=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),j=Symbol.for("react.memo"),z=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),ye=Symbol.iterator,yr="@@iterator";function kr(e){if(e===null||typeof e!="object")return null;var n=ye&&e[ye]||e[yr];return typeof n=="function"?n:null}var N=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(e){{for(var n=arguments.length,o=new Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];wr("error",e,o)}}function wr(e,n,o){{var a=N.ReactDebugCurrentFrame,u=a.getStackAddendum();u!==""&&(n+="%s",o=o.concat([u]));var f=o.map(function(l){return String(l)});f.unshift("Warning: "+n),Function.prototype.apply.call(console[e],console,f)}}var Cr=!1,Rr=!1,Sr=!1,xr=!1,Lr=!1,ke;ke=Symbol.for("react.module.reference");function Er(e){return!!(typeof e=="string"||typeof e=="function"||e===m||e===E||Lr||e===R||e===L||e===k||xr||e===G||Cr||Rr||Sr||typeof e=="object"&&e!==null&&(e.$$typeof===z||e.$$typeof===j||e.$$typeof===S||e.$$typeof===x||e.$$typeof===b||e.$$typeof===ke||e.getModuleId!==void 0))}function jr(e,n,o){var a=e.displayName;if(a)return a;var u=n.displayName||n.name||"";return u!==""?o+"("+u+")":o}function we(e){return e.displayName||"Context"}function P(e){if(e==null)return null;if(typeof e.tag=="number"&&_("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case E:return"Profiler";case R:return"StrictMode";case L:return"Suspense";case k:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case x:var n=e;return we(n)+".Consumer";case S:var o=e;return we(o._context)+".Provider";case b:return jr(e,e.render,"ForwardRef");case j:var a=e.displayName||null;return a!==null?a:P(e.type)||"Memo";case z:{var u=e,f=u._payload,l=u._init;try{return P(l(f))}catch{return null}}}return null}var M=Object.assign,W=0,Ce,Re,Se,xe,Le,Ee,je;function Pe(){}Pe.__reactDisabledLog=!0;function Pr(){{if(W===0){Ce=console.log,Re=console.info,Se=console.warn,xe=console.error,Le=console.group,Ee=console.groupCollapsed,je=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Pe,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function Or(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:Ce}),info:M({},e,{value:Re}),warn:M({},e,{value:Se}),error:M({},e,{value:xe}),group:M({},e,{value:Le}),groupCollapsed:M({},e,{value:Ee}),groupEnd:M({},e,{value:je})})}W<0&&_("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=N.ReactCurrentDispatcher,K;function I(e,n,o){{if(K===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);K=a&&a[1]||""}return`
`+K+e}}var q=!1,H;{var Tr=typeof WeakMap=="function"?WeakMap:Map;H=new Tr}function Oe(e,n){if(!e||q)return"";{var o=H.get(e);if(o!==void 0)return o}var a;q=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var f;f=J.current,J.current=null,Pr();try{if(n){var l=function(){throw Error()};if(Object.defineProperty(l.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(l,[])}catch(O){a=O}Reflect.construct(e,[],l)}else{try{l.call()}catch(O){a=O}e.call(l.prototype)}}else{try{throw Error()}catch(O){a=O}e()}}catch(O){if(O&&a&&typeof O.stack=="string"){for(var s=O.stack.split(`
`),p=a.stack.split(`
`),h=s.length-1,v=p.length-1;h>=1&&v>=0&&s[h]!==p[v];)v--;for(;h>=1&&v>=0;h--,v--)if(s[h]!==p[v]){if(h!==1||v!==1)do if(h--,v--,v<0||s[h]!==p[v]){var w=`
`+s[h].replace(" at new "," at ");return e.displayName&&w.includes("<anonymous>")&&(w=w.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,w),w}while(h>=1&&v>=0);break}}}finally{q=!1,J.current=f,Or(),Error.prepareStackTrace=u}var A=e?e.displayName||e.name:"",Ie=A?I(A):"";return typeof e=="function"&&H.set(e,Ie),Ie}function zr(e,n,o){return Oe(e,!1)}function Mr(e){var n=e.prototype;return!!(n&&n.isReactComponent)}function U(e,n,o){if(e==null)return"";if(typeof e=="function")return Oe(e,Mr(e));if(typeof e=="string")return I(e);switch(e){case L:return I("Suspense");case k:return I("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case b:return zr(e.render);case j:return U(e.type,n,o);case z:{var a=e,u=a._payload,f=a._init;try{return U(f(u),n,o)}catch{}}}return""}var Y=Object.prototype.hasOwnProperty,Te={},ze=N.ReactDebugCurrentFrame;function X(e){if(e){var n=e._owner,o=U(e.type,e._source,n?n.type:null);ze.setExtraStackFrame(o)}else ze.setExtraStackFrame(null)}function Nr(e,n,o,a,u){{var f=Function.call.bind(Y);for(var l in e)if(f(e,l)){var s=void 0;try{if(typeof e[l]!="function"){var p=Error((a||"React class")+": "+o+" type `"+l+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[l]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}s=e[l](n,l,a,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(h){s=h}s&&!(s instanceof Error)&&(X(u),_("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",o,l,typeof s),X(null)),s instanceof Error&&!(s.message in Te)&&(Te[s.message]=!0,X(u),_("Failed %s type: %s",o,s.message),X(null))}}}var Dr=Array.isArray;function Q(e){return Dr(e)}function Ar(e){{var n=typeof Symbol=="function"&&Symbol.toStringTag,o=n&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o}}function Vr(e){try{return Me(e),!1}catch{return!0}}function Me(e){return""+e}function Ne(e){if(Vr(e))return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ar(e)),Me(e)}var F=N.ReactCurrentOwner,$r={key:!0,ref:!0,__self:!0,__source:!0},De,Ae,ee;ee={};function Wr(e){if(Y.call(e,"ref")){var n=Object.getOwnPropertyDescriptor(e,"ref").get;if(n&&n.isReactWarning)return!1}return e.ref!==void 0}function Fr(e){if(Y.call(e,"key")){var n=Object.getOwnPropertyDescriptor(e,"key").get;if(n&&n.isReactWarning)return!1}return e.key!==void 0}function Br(e,n){if(typeof e.ref=="string"&&F.current&&n&&F.current.stateNode!==n){var o=P(F.current.type);ee[o]||(_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',P(F.current.type),e.ref),ee[o]=!0)}}function Gr(e,n){{var o=function(){De||(De=!0,_("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}}function Ir(e,n){{var o=function(){Ae||(Ae=!0,_("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",n))};o.isReactWarning=!0,Object.defineProperty(e,"ref",{get:o,configurable:!0})}}var Hr=function(e,n,o,a,u,f,l){var s={$$typeof:i,type:e,key:n,ref:o,props:l,_owner:f};return s._store={},Object.defineProperty(s._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(s,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(s,"_source",{configurable:!1,enumerable:!1,writable:!1,value:u}),Object.freeze&&(Object.freeze(s.props),Object.freeze(s)),s};function Ur(e,n,o,a,u){{var f,l={},s=null,p=null;o!==void 0&&(Ne(o),s=""+o),Fr(n)&&(Ne(n.key),s=""+n.key),Wr(n)&&(p=n.ref,Br(n,u));for(f in n)Y.call(n,f)&&!$r.hasOwnProperty(f)&&(l[f]=n[f]);if(e&&e.defaultProps){var h=e.defaultProps;for(f in h)l[f]===void 0&&(l[f]=h[f])}if(s||p){var v=typeof e=="function"?e.displayName||e.name||"Unknown":e;s&&Gr(l,v),p&&Ir(l,v)}return Hr(e,s,p,u,a,F.current,l)}}var re=N.ReactCurrentOwner,Ve=N.ReactDebugCurrentFrame;function D(e){if(e){var n=e._owner,o=U(e.type,e._source,n?n.type:null);Ve.setExtraStackFrame(o)}else Ve.setExtraStackFrame(null)}var te;te=!1;function ne(e){return typeof e=="object"&&e!==null&&e.$$typeof===i}function $e(){{if(re.current){var e=P(re.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Yr(e){{if(e!==void 0){var n=e.fileName.replace(/^.*[\\\/]/,""),o=e.lineNumber;return`

Check your code at `+n+":"+o+"."}return""}}var We={};function Xr(e){{var n=$e();if(!n){var o=typeof e=="string"?e:e.displayName||e.name;o&&(n=`

Check the top-level render call using <`+o+">.")}return n}}function Fe(e,n){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var o=Xr(n);if(We[o])return;We[o]=!0;var a="";e&&e._owner&&e._owner!==re.current&&(a=" It was passed a child from "+P(e._owner.type)+"."),D(e),_('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,a),D(null)}}function Be(e,n){{if(typeof e!="object")return;if(Q(e))for(var o=0;o<e.length;o++){var a=e[o];ne(a)&&Fe(a,n)}else if(ne(e))e._store&&(e._store.validated=!0);else if(e){var u=kr(e);if(typeof u=="function"&&u!==e.entries)for(var f=u.call(e),l;!(l=f.next()).done;)ne(l.value)&&Fe(l.value,n)}}}function Zr(e){{var n=e.type;if(n==null||typeof n=="string")return;var o;if(typeof n=="function")o=n.propTypes;else if(typeof n=="object"&&(n.$$typeof===b||n.$$typeof===j))o=n.propTypes;else return;if(o){var a=P(n);Nr(o,e.props,"prop",a,e)}else if(n.PropTypes!==void 0&&!te){te=!0;var u=P(n);_("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",u||"Unknown")}typeof n.getDefaultProps=="function"&&!n.getDefaultProps.isReactClassApproved&&_("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Jr(e){{for(var n=Object.keys(e.props),o=0;o<n.length;o++){var a=n[o];if(a!=="children"&&a!=="key"){D(e),_("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),D(null);break}}e.ref!==null&&(D(e),_("Invalid attribute `ref` supplied to `React.Fragment`."),D(null))}}function Ge(e,n,o,a,u,f){{var l=Er(e);if(!l){var s="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=Yr(u);p?s+=p:s+=$e();var h;e===null?h="null":Q(e)?h="array":e!==void 0&&e.$$typeof===i?(h="<"+(P(e.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):h=typeof e,_("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",h,s)}var v=Ur(e,n,o,u,f);if(v==null)return v;if(l){var w=n.children;if(w!==void 0)if(a)if(Q(w)){for(var A=0;A<w.length;A++)Be(w[A],e);Object.freeze&&Object.freeze(w)}else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Be(w,e)}return e===m?Jr(v):Zr(v),v}}function Kr(e,n,o){return Ge(e,n,o,!0)}function qr(e,n,o){return Ge(e,n,o,!1)}var Qr=qr,et=Kr;$.Fragment=m,$.jsx=Qr,$.jsxs=et}()),$}(function(r){process.env.NODE_ENV==="production"?r.exports=Ue():r.exports=Ye()})(He);const t=B.jsx,c=B.jsxs,C={main:"#6440dd",main_sub:"#5934D8",notice:"#F5222D",grey_111:"#111111",grey_666:"#666666",grey_333:"#333333",grey_999:"#999999",grey_bbb:"#bbbbbb",grey_ccc:"#cccccc",grey_f4:"#f4f4f4",bg_main:"#f5f6f8",bg_noti:"#f2f4f7",bg_disable:"#dbd6eb",bg_sub:"#eeebff",bg_trans:"#b6b7b9",line_01:"#e7e9ef",line_02:"#cfd4dd",plus:"#d42a21",minus:"#1968e5",code:"#27c4b8",white:"#fff",option_hover:"#f4f0ff",m_gnb_normal:"#ABAEBF",green:"#03c75a",orange:"#e1a016",red:"#da1c26"},Xe=(r,i)=>{const d=r[i];return d?typeof d=="function"?d():Promise.resolve(d):new Promise((m,R)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(R.bind(null,new Error("Unknown variable dynamic import: "+i)))})},ae=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{fill:r.color,width:i,height:i,viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",stroke:"#000000",strokeWidth:"0.0005",children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),t("g",{id:"SVGRepo_iconCarrier",children:t("path",{d:"M25 2C12.309295 2 2 12.309295 2 25C2 37.690705 12.309295 48 25 48C37.690705 48 48 37.690705 48 25C48 12.309295 37.690705 2 25 2 z M 25 4C36.609824 4 46 13.390176 46 25C46 36.609824 36.609824 46 25 46C13.390176 46 4 36.609824 4 25C4 13.390176 13.390176 4 25 4 z M 24.828125 17C21.234125 17 20.208984 19.567484 20.208984 21.021484C20.208984 22.989484 21.749594 24.014484 22.433594 24.271484C21.577594 24.613484 19.695312 25.555031 19.695312 28.207031C19.695312 30.431031 21.064937 32.998047 25.085938 32.998047C26.625937 32.998047 30.304688 32.228031 30.304688 28.207031C30.304688 25.469031 28.421469 24.528484 27.480469 24.271484C28.079469 24.015484 29.619141 22.989484 29.619141 21.021484C29.619141 20.251484 29.363125 17 24.828125 17 z M 15.5 17.25C15.072 19.648 13.399 20.113219 11 20.199219L11 21.740234L15 21.75L15 32.75L17 32.75L17 17.25L15.5 17.25 z M 24.914062 18.710938C27.224062 18.710938 27.566406 20.337422 27.566406 21.107422C27.566406 21.963422 27.139 23.673828 25 23.673828C22.348 23.673828 22.176734 21.535422 22.177734 21.107422C22.177734 20.764422 22.347062 18.710938 24.914062 18.710938 z M 36 21L36 24L33 24L33 26L36 26L36 29L38 29L38 26L41 26L41 24L38 24L38 21L36 21 z M 25 25.298828C27.567 25.298828 28.251953 27.610922 28.251953 28.294922C28.251953 29.748922 27.139 31.373047 25 31.373047C23.374 31.373047 21.662109 30.519922 21.662109 28.294922C21.662109 27.010922 22.519 25.298828 25 25.298828 z"})})]})},Ze=Object.freeze(Object.defineProperty({__proto__:null,default:ae},Symbol.toStringTag,{value:"Module"})),se=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",t("path",{d:"M4 12L20 12",stroke:r.color,strokeWidth:"0.6",strokeLinecap:"round",strokeLinejoin:"round"})," ",t("path",{d:"M10 6L4.0625 11.9375V11.9375C4.02798 11.972 4.02798 12.028 4.0625 12.0625V12.0625L10 18",stroke:r.color,strokeWidth:"0.6",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})},Je=Object.freeze(Object.defineProperty({__proto__:null,default:se},Symbol.toStringTag,{value:"Module"})),ce=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{id:"caution-sign-circle",fill:"#999999",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon line",stroke:r.color,width:i,height:i,children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[t("line",{id:"primary-upstroke",x1:"11.95",y1:"16.5",x2:"12.05",y2:"16.5",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.95}}),t("path",{id:"primary",d:"M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}})]})]})},Ke=Object.freeze(Object.defineProperty({__proto__:null,default:ce},Symbol.toStringTag,{value:"Module"})),le=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{width:i,height:i,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("mask",{id:"a",width:"30",height:"30",x:"0",y:"0",maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},children:t("path",{fill:"#D9D9D9",d:"M0 0h24v24H0z"})}),t("g",{mask:"url(#a)",children:t("path",{fill:r.color,d:"m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"})})]})},qe=Object.freeze(Object.defineProperty({__proto__:null,default:le},Symbol.toStringTag,{value:"Module"})),ue=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return t("svg",{width:i,height:i,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z",fill:r.color})})},Qe=Object.freeze(Object.defineProperty({__proto__:null,default:ue},Symbol.toStringTag,{value:"Module"})),de=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",c("g",{id:"Arrow / Arrow_Sub_Down_Right",children:[" ",t("path",{id:"Vector",d:"M13 11L18 16M18 16L13 21M18 16H10.1969C9.07899 16 8.5192 16 8.0918 15.7822C7.71547 15.5905 7.40973 15.2839 7.21799 14.9076C7 14.4798 7 13.9201 7 12.8V3",stroke:r.color,strokeWidth:"0.24000000000000005",strokeLinecap:"round",strokeLinejoin:"round"})," "]})," "]})]})},er=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),fe=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{id:"Editable-line",viewBox:"0 0 32 32",enableBackground:"new 0 0 32 32",version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",width:i,height:i,children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[t("circle",{id:"XMLID_224_",cx:"16",cy:"16",fill:"none",r:"4",stroke:r.color,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5"}),t("path",{id:"XMLID_242_",d:" M27.758,10.366l-1-1.732c-0.552-0.957-1.775-1.284-2.732-0.732L23.5,8.206C21.5,9.36,19,7.917,19,5.608V5c0-1.105-0.895-2-2-2h-2 c-1.105,0-2,0.895-2,2v0.608c0,2.309-2.5,3.753-4.5,2.598L7.974,7.902C7.017,7.35,5.794,7.677,5.242,8.634l-1,1.732 c-0.552,0.957-0.225,2.18,0.732,2.732L5.5,13.402c2,1.155,2,4.041,0,5.196l-0.526,0.304c-0.957,0.552-1.284,1.775-0.732,2.732 l1,1.732c0.552,0.957,1.775,1.284,2.732,0.732L8.5,23.794c2-1.155,4.5,0.289,4.5,2.598V27c0,1.105,0.895,2,2,2h2 c1.105,0,2-0.895,2-2v-0.608c0-2.309,2.5-3.753,4.5-2.598l0.526,0.304c0.957,0.552,2.18,0.225,2.732-0.732l1-1.732 c0.552-0.957,0.225-2.18-0.732-2.732L26.5,18.598c-2-1.155-2-4.041,0-5.196l0.526-0.304C27.983,12.546,28.311,11.323,27.758,10.366z ",fill:"none",stroke:r.color,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5"})]})]})},rr=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"})),ge=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{width:i,height:i,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("mask",{id:"a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:i,height:i,children:t("path",{fill:"#D9D9D9",d:"M0 0h30v30H0z"})}),t("g",{mask:"url(#a)",children:t("path",{d:"M6 20.25v-1.5h17.5v1.5H6Zm0-4.88v-1.5h17.5v1.5H6Zm0-4.87V9h17.5v1.5H6Z",fill:r.color})})]})},tr=Object.freeze(Object.defineProperty({__proto__:null,default:ge},Symbol.toStringTag,{value:"Module"})),he=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"#000000",width:i,height:i,children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[t("g",{id:"icomoon-ignore"}),t("path",{d:"M16 2.672c-7.362 0-13.328 5.966-13.328 13.328s5.966 13.328 13.328 13.328c7.362 0 13.328-5.966 13.328-13.328s-5.966-13.328-13.328-13.328zM16 28.262c-6.761 0-12.262-5.501-12.262-12.262s5.501-12.262 12.262-12.262c6.761 0 12.262 5.501 12.262 12.262s-5.501 12.262-12.262 12.262z",fill:r.color}),t("path",{d:"M16.533 8.003h-1.066v7.464h-7.428v1.066h7.428v7.428h1.066v-7.428h7.464v-1.066h-7.464z",fill:r.color})]})]})},nr=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"})),ve=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[" ",t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z",fill:r.color??"#000000"})," "]})]})},ir=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"})),me=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",width:i,height:i,viewBox:"0 0 32 32",version:"1.1",children:[t("title",{children:"search"}),t("path",{d:"M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z"})]})},or=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),be=r=>{const i=r.size==="big"?"30":r.size==="medium"?"24":"20";return c("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:i,height:i,children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),c("g",{id:"SVGRepo_iconCarrier",children:[t("rect",{width:"48",height:"48",fill:r.color,fillOpacity:"0.01"}),t("path",{d:"M41.5 10H35.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M27.5 6V14",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M27.5 10L5.5 10",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M13.5 24H5.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M21.5 20V28",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M43.5 24H21.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M41.5 38H35.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M27.5 34V42",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M27.5 38H5.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"})]})]})},ar=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),T=r=>{const i=()=>{switch(r.name){case"Adult":return t(ae,{...r});case"ArrowLeft":return t(se,{...r});case"Caution":return t(ce,{...r});case"Check":return t(le,{...r});case"Close":return t(ue,{...r});case"Depth":return t(de,{...r});case"Gear":return t(fe,{...r});case"Hamburger":return t(ge,{...r});case"Plus":return t(he,{...r});case"Right":return t(ve,{...r});case"Search":return t(me,{...r});case"Setting":return t(be,{...r});default:return null}},d=()=>r.size==="big"?"30px":r.size==="medium"?"24px":"20px";return y.lazy(()=>Xe(Object.assign({"./icons/Adult.tsx":()=>Promise.resolve().then(()=>Ze),"./icons/ArrowLeft.tsx":()=>Promise.resolve().then(()=>Je),"./icons/Caution.tsx":()=>Promise.resolve().then(()=>Ke),"./icons/Check.tsx":()=>Promise.resolve().then(()=>qe),"./icons/Close.tsx":()=>Promise.resolve().then(()=>Qe),"./icons/Depth.tsx":()=>Promise.resolve().then(()=>er),"./icons/Gear.tsx":()=>Promise.resolve().then(()=>rr),"./icons/Hamburger.tsx":()=>Promise.resolve().then(()=>tr),"./icons/Plus.tsx":()=>Promise.resolve().then(()=>nr),"./icons/Right.tsx":()=>Promise.resolve().then(()=>ir),"./icons/Search.tsx":()=>Promise.resolve().then(()=>or),"./icons/Setting.tsx":()=>Promise.resolve().then(()=>ar)}),`./icons/${r.name}.tsx`)),t(y.Suspense,{fallback:null,children:t("div",{style:{height:d(),display:"inline-block"},children:i()})})},Lt="",sr=r=>{const i=typeof r.back=="function",d=r.isMobile?"appBar mobile":"appBar";return c("div",{className:d,children:[c("div",{className:"logo",children:[i&&t("div",{onClick:r.back,className:"logo-icon",children:t(T,{name:"ArrowLeft",size:"big",color:C.grey_111})}),t("span",{children:r.title})]}),r.children]})},Et="",_e=r=>{const i=r.size/14,d={width:r.size+"px",height:r.size+"px",borderRadius:r.size+i/1.5+"px",padding:i/1.5+"px"},m={borderRadius:r.size+"px"},R=r.percent>=50?18*(r.percent-50)/5:0,E=r.percent<=50?18*(r.percent/5):180,S=r.percent<50?C.red:r.percent<75?C.orange:C.green,x={border:`${i}px solid ${S}`,borderTopRightRadius:r.size+"px",borderBottomRightRadius:r.size+"px",transform:`rotate(${R}deg)`},b={border:`${i}px solid ${S}`,borderTopLeftRadius:r.size+"px",borderBottomLeftRadius:r.size+"px",transform:`rotate(${E}deg)`},L={fontSize:r.size/4+"px",borderRadius:r.size-i*2+"px",width:r.size-i*2+"px",height:r.size-i*2+"px"};return t("div",{className:"container",style:d,children:c("div",{className:"circular-progress-bar",style:m,children:[t("span",{className:"left",children:t("span",{className:"bar",style:x})}),t("span",{className:"right",children:t("span",{className:"bar",style:b})}),c("div",{className:"percent",style:L,children:[r.percent,"%"]})]})})},jt="",cr=r=>t("div",{className:"common-button",style:(()=>r.disable?{backgroundColor:C.bg_disable,padding:r.size==="big"?"14px 24px":"12px 20px",border:r.border?`1px solid ${r.border}`:"",width:r.width,color:r.fontColor}:{backgroundColor:r.color,padding:r.size==="big"?"14px 24px":"12px 20px",border:r.border?`1px solid ${r.border}`:"",width:r.width,color:r.fontColor})(),onClick:r.click,children:r.children}),Pt="",lr=r=>{const i=()=>({height:r.height??"280px",objectFit:r.objectFit??"fill"});return t("div",{className:"card-container",children:t("div",{className:"card",children:t("img",{src:r.imageUrl,style:i()})})})},Ot="",ur=r=>c("div",{className:"group-card",children:[r.isSub&&t(T,{name:"Depth",size:"medium",color:C.grey_111}),c("div",{className:"card",children:[t("img",{className:"card-image",src:r.imageUrl}),t("div",{className:"card-explain",children:t("span",{children:r.label})})]})]}),Tt="",zt="",pe=r=>{const i=r.ratio*100+"%";return t("div",{className:"image-wrapper",style:{paddingTop:i},children:t("img",{src:r.imageUrl,loading:"lazy"})})},dr=r=>{const i=r.ratio?r.ratio:1;return c("div",{className:"poster-card-container",children:[t(pe,{ratio:i,imageUrl:r.imageUrl}),c("div",{className:"poster-card-info",children:[t("div",{className:"progress-bar",children:t(_e,{percent:r.voteAverage,size:34})}),t("span",{className:"title",children:r.title}),t("span",{className:"release-date",children:r.releaseDate})]})]})},Mt="",Z=r=>{const i={backgroundColor:`rgba(0,0,0,${r.opacity})`};return t(y.Fragment,{children:r.isOpen&&t("div",{className:"overlay",style:i,children:r.children})})},Nt="",fr=r=>t(Z,{isOpen:r.isOpen,opacity:.6,children:t("div",{className:`wrapper ${r.isMobile?"mobile":""}`,children:r.children})}),Dt="",gr=r=>{const i=r.title?{padding:"20px 20px 9px"}:{padding:"16px 16px 7px"};return c("div",{className:"popup-header-container",style:i,children:[c("div",{className:"popup-header",children:[r.back&&t("div",{className:"popup-icon",onClick:r.back,children:t(T,{name:"ArrowLeft",size:"big",color:C.grey_999})}),r.title&&t("div",{children:t("span",{className:"title",children:r.title})}),r.close&&t("div",{className:"popup-icon",onClick:r.close,children:t(T,{name:"Close",size:"big",color:C.grey_999})})]}),t("div",{className:"popup-header-progress",children:r.maxProgress&&Array(r.maxProgress).fill(1).map((d,m)=>t("span",{className:`${m+d===r.progress?"selected":""}`},`progress${m}`))})]})},At="",hr=r=>c("div",{className:"notification",children:[r.children,c("div",{className:"info",style:{height:r.height},children:[t(T,{name:"Caution",size:"small",color:C.grey_bbb}),t("span",{children:r.text})]})]}),Vt="",vr=r=>{const i=`${r.ratio*100}%`;return t("div",{className:"image-wrapper",style:{paddingTop:i},children:t("img",{className:"ratio-img",src:r.imageUrl})})},$t="",mr=r=>{const i=y.useRef(null),d=m=>{i.current!==m.target&&r()};return y.useEffect(()=>(window.addEventListener("click",d),()=>{window.removeEventListener("click",d)}),[]),{ref:i}},br=({title:r,children:i})=>{const[d,m]=y.useState(!1),[R,E]=y.useState("hidden"),{ref:S}=mr(()=>m(!1));return c("div",{className:"basic-accordion",ref:S,style:{overflow:R},onTransitionEnd:()=>{d&&E("unset")},children:[c("div",{className:"header",children:[t("span",{className:"title",children:r}),t("div",{onClick:()=>{m(L=>!L),d&&E("hidden")},className:`icon ${d?"slide":""}`,children:t(T,{name:"Right",size:"medium",color:C.grey_111})})]}),t("div",{className:`children ${d?"slide":""}`,children:i})]})},Wt="",_r=({opacity:r})=>t(Z,{isOpen:!0,opacity:r,children:t("div",{className:"loading-content",children:t("div",{className:"loading"})})}),Ft="",pr=r=>{const i=Array(8).fill(1).map((d,m)=>d+m);return c("div",{className:"page-loading-container",style:{height:r.customHeight},children:[t("div",{className:"page-loading-wrapper",children:i.map(d=>t("div",{className:"loader"},`loaderKey${d}`))}),t("div",{className:"text",children:r.text})]})};g.BasicAccordion=br,g.Button=cr,g.Card=lr,g.CircularProgressBar=_e,g.Colors=C,g.Element=T,g.GroupCard=ur,g.HeaderBar=sr,g.LoadingSpinner=_r,g.Notification=hr,g.OverLay=Z,g.PageLoadingSpinner=pr,g.Popup=fr,g.PopupBasicHeader=gr,g.PosterCard=dr,g.RatioCardImage=pe,g.RatioImage=vr,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
