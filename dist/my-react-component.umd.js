(function(_,v){typeof exports=="object"&&typeof module<"u"?v(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],v):(_=typeof globalThis<"u"?globalThis:_||self,v(_["my-react-component"]={},_.React))})(this,function(_,v){"use strict";var $={},ar={get exports(){return $},set exports(e){$=e}},H={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fe;function sr(){if(fe)return H;fe=1;var e=v,n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,u=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function h(C,m,R){var S,x={},P=null,k=null;R!==void 0&&(P=""+R),m.key!==void 0&&(P=""+m.key),m.ref!==void 0&&(k=m.ref);for(S in m)s.call(m,S)&&!f.hasOwnProperty(S)&&(x[S]=m[S]);if(C&&C.defaultProps)for(S in m=C.defaultProps,m)x[S]===void 0&&(x[S]=m[S]);return{$$typeof:n,type:C,key:P,ref:k,props:x,_owner:u.current}}return H.Fragment=a,H.jsx=h,H.jsxs=h,H}var U={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var he;function cr(){return he||(he=1,process.env.NODE_ENV!=="production"&&function(){var e=v,n=Symbol.for("react.element"),a=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),h=Symbol.for("react.provider"),C=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),S=Symbol.for("react.suspense_list"),x=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),k=Symbol.for("react.offscreen"),Y=Symbol.iterator,V="@@iterator";function ne(r){if(r===null||typeof r!="object")return null;var i=Y&&r[Y]||r[V];return typeof i=="function"?i:null}var I=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function L(r){{for(var i=arguments.length,o=new Array(i>1?i-1:0),c=1;c<i;c++)o[c-1]=arguments[c];ze("error",r,o)}}function ze(r,i,o){{var c=I.ReactDebugCurrentFrame,b=c.getStackAddendum();b!==""&&(i+="%s",o=o.concat([b]));var y=o.map(function(g){return String(g)});y.unshift("Warning: "+i),Function.prototype.apply.call(console[r],console,y)}}var Ne=!1,Me=!1,De=!1,z=!1,M=!1,j;j=Symbol.for("react.module.reference");function B(r){return!!(typeof r=="string"||typeof r=="function"||r===s||r===f||M||r===u||r===R||r===S||z||r===k||Ne||Me||De||typeof r=="object"&&r!==null&&(r.$$typeof===P||r.$$typeof===x||r.$$typeof===h||r.$$typeof===C||r.$$typeof===m||r.$$typeof===j||r.getModuleId!==void 0))}function Ir(r,i,o){var c=r.displayName;if(c)return c;var b=i.displayName||i.name||"";return b!==""?o+"("+b+")":o}function Ae(r){return r.displayName||"Context"}function D(r){if(r==null)return null;if(typeof r.tag=="number"&&L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case s:return"Fragment";case a:return"Portal";case f:return"Profiler";case u:return"StrictMode";case R:return"Suspense";case S:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case C:var i=r;return Ae(i)+".Consumer";case h:var o=r;return Ae(o._context)+".Provider";case m:return Ir(r,r.render,"ForwardRef");case x:var c=r.displayName||null;return c!==null?c:D(r.type)||"Memo";case P:{var b=r,y=b._payload,g=b._init;try{return D(g(y))}catch{return null}}}return null}var W=Object.assign,X=0,Ie,Ve,We,Be,Fe,Ge,$e;function He(){}He.__reactDisabledLog=!0;function Vr(){{if(X===0){Ie=console.log,Ve=console.info,We=console.warn,Be=console.error,Fe=console.group,Ge=console.groupCollapsed,$e=console.groupEnd;var r={configurable:!0,enumerable:!0,value:He,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}X++}}function Wr(){{if(X--,X===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:W({},r,{value:Ie}),info:W({},r,{value:Ve}),warn:W({},r,{value:We}),error:W({},r,{value:Be}),group:W({},r,{value:Fe}),groupCollapsed:W({},r,{value:Ge}),groupEnd:W({},r,{value:$e})})}X<0&&L("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ie=I.ReactCurrentDispatcher,oe;function J(r,i,o){{if(oe===void 0)try{throw Error()}catch(b){var c=b.stack.trim().match(/\n( *(at )?)/);oe=c&&c[1]||""}return`
`+oe+r}}var ae=!1,K;{var Br=typeof WeakMap=="function"?WeakMap:Map;K=new Br}function Ue(r,i){if(!r||ae)return"";{var o=K.get(r);if(o!==void 0)return o}var c;ae=!0;var b=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var y;y=ie.current,ie.current=null,Vr();try{if(i){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(A){c=A}Reflect.construct(r,[],g)}else{try{g.call()}catch(A){c=A}r.call(g.prototype)}}else{try{throw Error()}catch(A){c=A}r()}}catch(A){if(A&&c&&typeof A.stack=="string"){for(var d=A.stack.split(`
`),E=c.stack.split(`
`),w=d.length-1,p=E.length-1;w>=1&&p>=0&&d[w]!==E[p];)p--;for(;w>=1&&p>=0;w--,p--)if(d[w]!==E[p]){if(w!==1||p!==1)do if(w--,p--,p<0||d[w]!==E[p]){var O=`
`+d[w].replace(" at new "," at ");return r.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",r.displayName)),typeof r=="function"&&K.set(r,O),O}while(w>=1&&p>=0);break}}}finally{ae=!1,ie.current=y,Wr(),Error.prepareStackTrace=b}var G=r?r.displayName||r.name:"",or=G?J(G):"";return typeof r=="function"&&K.set(r,or),or}function Fr(r,i,o){return Ue(r,!1)}function Gr(r){var i=r.prototype;return!!(i&&i.isReactComponent)}function Q(r,i,o){if(r==null)return"";if(typeof r=="function")return Ue(r,Gr(r));if(typeof r=="string")return J(r);switch(r){case R:return J("Suspense");case S:return J("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case m:return Fr(r.render);case x:return Q(r.type,i,o);case P:{var c=r,b=c._payload,y=c._init;try{return Q(y(b),i,o)}catch{}}}return""}var q=Object.prototype.hasOwnProperty,Ye={},Xe=I.ReactDebugCurrentFrame;function ee(r){if(r){var i=r._owner,o=Q(r.type,r._source,i?i.type:null);Xe.setExtraStackFrame(o)}else Xe.setExtraStackFrame(null)}function $r(r,i,o,c,b){{var y=Function.call.bind(q);for(var g in r)if(y(r,g)){var d=void 0;try{if(typeof r[g]!="function"){var E=Error((c||"React class")+": "+o+" type `"+g+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[g]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw E.name="Invariant Violation",E}d=r[g](i,g,c,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(w){d=w}d&&!(d instanceof Error)&&(ee(b),L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",c||"React class",o,g,typeof d),ee(null)),d instanceof Error&&!(d.message in Ye)&&(Ye[d.message]=!0,ee(b),L("Failed %s type: %s",o,d.message),ee(null))}}}var Hr=Array.isArray;function se(r){return Hr(r)}function Ur(r){{var i=typeof Symbol=="function"&&Symbol.toStringTag,o=i&&r[Symbol.toStringTag]||r.constructor.name||"Object";return o}}function Yr(r){try{return Ze(r),!1}catch{return!0}}function Ze(r){return""+r}function Je(r){if(Yr(r))return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Ur(r)),Ze(r)}var Z=I.ReactCurrentOwner,Xr={key:!0,ref:!0,__self:!0,__source:!0},Ke,Qe,ce;ce={};function Zr(r){if(q.call(r,"ref")){var i=Object.getOwnPropertyDescriptor(r,"ref").get;if(i&&i.isReactWarning)return!1}return r.ref!==void 0}function Jr(r){if(q.call(r,"key")){var i=Object.getOwnPropertyDescriptor(r,"key").get;if(i&&i.isReactWarning)return!1}return r.key!==void 0}function Kr(r,i){if(typeof r.ref=="string"&&Z.current&&i&&Z.current.stateNode!==i){var o=D(Z.current.type);ce[o]||(L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',D(Z.current.type),r.ref),ce[o]=!0)}}function Qr(r,i){{var o=function(){Ke||(Ke=!0,L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};o.isReactWarning=!0,Object.defineProperty(r,"key",{get:o,configurable:!0})}}function qr(r,i){{var o=function(){Qe||(Qe=!0,L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};o.isReactWarning=!0,Object.defineProperty(r,"ref",{get:o,configurable:!0})}}var et=function(r,i,o,c,b,y,g){var d={$$typeof:n,type:r,key:i,ref:o,props:g,_owner:y};return d._store={},Object.defineProperty(d._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(d,"_self",{configurable:!1,enumerable:!1,writable:!1,value:c}),Object.defineProperty(d,"_source",{configurable:!1,enumerable:!1,writable:!1,value:b}),Object.freeze&&(Object.freeze(d.props),Object.freeze(d)),d};function rt(r,i,o,c,b){{var y,g={},d=null,E=null;o!==void 0&&(Je(o),d=""+o),Jr(i)&&(Je(i.key),d=""+i.key),Zr(i)&&(E=i.ref,Kr(i,b));for(y in i)q.call(i,y)&&!Xr.hasOwnProperty(y)&&(g[y]=i[y]);if(r&&r.defaultProps){var w=r.defaultProps;for(y in w)g[y]===void 0&&(g[y]=w[y])}if(d||E){var p=typeof r=="function"?r.displayName||r.name||"Unknown":r;d&&Qr(g,p),E&&qr(g,p)}return et(r,d,E,b,c,Z.current,g)}}var le=I.ReactCurrentOwner,qe=I.ReactDebugCurrentFrame;function F(r){if(r){var i=r._owner,o=Q(r.type,r._source,i?i.type:null);qe.setExtraStackFrame(o)}else qe.setExtraStackFrame(null)}var ue;ue=!1;function de(r){return typeof r=="object"&&r!==null&&r.$$typeof===n}function er(){{if(le.current){var r=D(le.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function tt(r){{if(r!==void 0){var i=r.fileName.replace(/^.*[\\\/]/,""),o=r.lineNumber;return`

Check your code at `+i+":"+o+"."}return""}}var rr={};function nt(r){{var i=er();if(!i){var o=typeof r=="string"?r:r.displayName||r.name;o&&(i=`

Check the top-level render call using <`+o+">.")}return i}}function tr(r,i){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var o=nt(i);if(rr[o])return;rr[o]=!0;var c="";r&&r._owner&&r._owner!==le.current&&(c=" It was passed a child from "+D(r._owner.type)+"."),F(r),L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,c),F(null)}}function nr(r,i){{if(typeof r!="object")return;if(se(r))for(var o=0;o<r.length;o++){var c=r[o];de(c)&&tr(c,i)}else if(de(r))r._store&&(r._store.validated=!0);else if(r){var b=ne(r);if(typeof b=="function"&&b!==r.entries)for(var y=b.call(r),g;!(g=y.next()).done;)de(g.value)&&tr(g.value,i)}}}function it(r){{var i=r.type;if(i==null||typeof i=="string")return;var o;if(typeof i=="function")o=i.propTypes;else if(typeof i=="object"&&(i.$$typeof===m||i.$$typeof===x))o=i.propTypes;else return;if(o){var c=D(i);$r(o,r.props,"prop",c,r)}else if(i.PropTypes!==void 0&&!ue){ue=!0;var b=D(i);L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",b||"Unknown")}typeof i.getDefaultProps=="function"&&!i.getDefaultProps.isReactClassApproved&&L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ot(r){{for(var i=Object.keys(r.props),o=0;o<i.length;o++){var c=i[o];if(c!=="children"&&c!=="key"){F(r),L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",c),F(null);break}}r.ref!==null&&(F(r),L("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}function ir(r,i,o,c,b,y){{var g=B(r);if(!g){var d="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(d+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var E=tt(b);E?d+=E:d+=er();var w;r===null?w="null":se(r)?w="array":r!==void 0&&r.$$typeof===n?(w="<"+(D(r.type)||"Unknown")+" />",d=" Did you accidentally export a JSX literal instead of a component?"):w=typeof r,L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",w,d)}var p=rt(r,i,o,b,y);if(p==null)return p;if(g){var O=i.children;if(O!==void 0)if(c)if(se(O)){for(var G=0;G<O.length;G++)nr(O[G],r);Object.freeze&&Object.freeze(O)}else L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else nr(O,r)}return r===s?ot(p):it(p),p}}function at(r,i,o){return ir(r,i,o,!0)}function st(r,i,o){return ir(r,i,o,!1)}var ct=st,lt=at;U.Fragment=s,U.jsx=ct,U.jsxs=lt}()),U}(function(e){process.env.NODE_ENV==="production"?e.exports=sr():e.exports=cr()})(ar);const ge=$.Fragment,t=$.jsx,l=$.jsxs,T={main:"#6440dd",main_sub:"#5934D8",notice:"#F5222D",grey_111:"#111111",grey_666:"#666666",grey_333:"#333333",grey_999:"#999999",grey_bbb:"#bbbbbb",grey_ccc:"#cccccc",grey_f4:"#f4f4f4",bg_main:"#f5f6f8",bg_noti:"#f2f4f7",bg_disable:"#dbd6eb",bg_sub:"#eeebff",bg_trans:"#b6b7b9",line_01:"#e7e9ef",line_02:"#cfd4dd",plus:"#d42a21",minus:"#1968e5",code:"#27c4b8",white:"#fff",option_hover:"#f4f0ff",m_gnb_normal:"#ABAEBF",green:"#03c75a",orange:"#e1a016",red:"#da1c26"},lr=(e,n)=>{const a=e[n];return a?typeof a=="function"?a():Promise.resolve(a):new Promise((s,u)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(u.bind(null,new Error("Unknown variable dynamic import: "+n)))})},me=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{fill:e.color,width:n,height:n,viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",stroke:"#000000",strokeWidth:"0.0005",children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),t("g",{id:"SVGRepo_iconCarrier",children:t("path",{d:"M25 2C12.309295 2 2 12.309295 2 25C2 37.690705 12.309295 48 25 48C37.690705 48 48 37.690705 48 25C48 12.309295 37.690705 2 25 2 z M 25 4C36.609824 4 46 13.390176 46 25C46 36.609824 36.609824 46 25 46C13.390176 46 4 36.609824 4 25C4 13.390176 13.390176 4 25 4 z M 24.828125 17C21.234125 17 20.208984 19.567484 20.208984 21.021484C20.208984 22.989484 21.749594 24.014484 22.433594 24.271484C21.577594 24.613484 19.695312 25.555031 19.695312 28.207031C19.695312 30.431031 21.064937 32.998047 25.085938 32.998047C26.625937 32.998047 30.304688 32.228031 30.304688 28.207031C30.304688 25.469031 28.421469 24.528484 27.480469 24.271484C28.079469 24.015484 29.619141 22.989484 29.619141 21.021484C29.619141 20.251484 29.363125 17 24.828125 17 z M 15.5 17.25C15.072 19.648 13.399 20.113219 11 20.199219L11 21.740234L15 21.75L15 32.75L17 32.75L17 17.25L15.5 17.25 z M 24.914062 18.710938C27.224062 18.710938 27.566406 20.337422 27.566406 21.107422C27.566406 21.963422 27.139 23.673828 25 23.673828C22.348 23.673828 22.176734 21.535422 22.177734 21.107422C22.177734 20.764422 22.347062 18.710938 24.914062 18.710938 z M 36 21L36 24L33 24L33 26L36 26L36 29L38 29L38 26L41 26L41 24L38 24L38 21L36 21 z M 25 25.298828C27.567 25.298828 28.251953 27.610922 28.251953 28.294922C28.251953 29.748922 27.139 31.373047 25 31.373047C23.374 31.373047 21.662109 30.519922 21.662109 28.294922C21.662109 27.010922 22.519 25.298828 25 25.298828 z"})})]})},ur=Object.freeze(Object.defineProperty({__proto__:null,default:me},Symbol.toStringTag,{value:"Module"})),ve=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l("g",{id:"SVGRepo_iconCarrier",children:[" ",t("path",{d:"M4 12L20 12",stroke:e.color,strokeWidth:"0.6",strokeLinecap:"round",strokeLinejoin:"round"})," ",t("path",{d:"M10 6L4.0625 11.9375V11.9375C4.02798 11.972 4.02798 12.028 4.0625 12.0625V12.0625L10 18",stroke:e.color,strokeWidth:"0.6",strokeLinecap:"round",strokeLinejoin:"round"})," "]})]})},dr=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"})),be=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{id:"caution-sign-circle",fill:"#999999",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",className:"icon line",stroke:e.color,width:n,height:n,children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l("g",{id:"SVGRepo_iconCarrier",children:[t("line",{id:"primary-upstroke",x1:"11.95",y1:"16.5",x2:"12.05",y2:"16.5",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.95}}),t("path",{id:"primary",d:"M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7",style:{fill:"none",stroke:"#000000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5}})]})]})},fr=Object.freeze(Object.defineProperty({__proto__:null,default:be},Symbol.toStringTag,{value:"Module"})),_e=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{width:n,height:n,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("mask",{id:"a",width:"30",height:"30",x:"0",y:"0",maskUnits:"userSpaceOnUse",style:{maskType:"alpha"},children:t("path",{fill:"#D9D9D9",d:"M0 0h24v24H0z"})}),t("g",{mask:"url(#a)",children:t("path",{fill:e.color,d:"m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"})})]})},hr=Object.freeze(Object.defineProperty({__proto__:null,default:_e},Symbol.toStringTag,{value:"Module"})),ye=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return t("svg",{width:n,height:n,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z",fill:e.color})})},gr=Object.freeze(Object.defineProperty({__proto__:null,default:ye},Symbol.toStringTag,{value:"Module"})),ke=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l("g",{id:"SVGRepo_iconCarrier",children:[" ",l("g",{id:"Arrow / Arrow_Sub_Down_Right",children:[" ",t("path",{id:"Vector",d:"M13 11L18 16M18 16L13 21M18 16H10.1969C9.07899 16 8.5192 16 8.0918 15.7822C7.71547 15.5905 7.40973 15.2839 7.21799 14.9076C7 14.4798 7 13.9201 7 12.8V3",stroke:e.color,strokeWidth:"0.24000000000000005",strokeLinecap:"round",strokeLinejoin:"round"})," "]})," "]})]})},mr=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"})),Ce=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{id:"Editable-line",viewBox:"0 0 32 32",enableBackground:"new 0 0 32 32",version:"1.1",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"none",width:n,height:n,children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l("g",{id:"SVGRepo_iconCarrier",children:[t("circle",{id:"XMLID_224_",cx:"16",cy:"16",fill:"none",r:"4",stroke:e.color,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5"}),t("path",{id:"XMLID_242_",d:" M27.758,10.366l-1-1.732c-0.552-0.957-1.775-1.284-2.732-0.732L23.5,8.206C21.5,9.36,19,7.917,19,5.608V5c0-1.105-0.895-2-2-2h-2 c-1.105,0-2,0.895-2,2v0.608c0,2.309-2.5,3.753-4.5,2.598L7.974,7.902C7.017,7.35,5.794,7.677,5.242,8.634l-1,1.732 c-0.552,0.957-0.225,2.18,0.732,2.732L5.5,13.402c2,1.155,2,4.041,0,5.196l-0.526,0.304c-0.957,0.552-1.284,1.775-0.732,2.732 l1,1.732c0.552,0.957,1.775,1.284,2.732,0.732L8.5,23.794c2-1.155,4.5,0.289,4.5,2.598V27c0,1.105,0.895,2,2,2h2 c1.105,0,2-0.895,2-2v-0.608c0-2.309,2.5-3.753,4.5-2.598l0.526,0.304c0.957,0.552,2.18,0.225,2.732-0.732l1-1.732 c0.552-0.957,0.225-2.18-0.732-2.732L26.5,18.598c-2-1.155-2-4.041,0-5.196l0.526-0.304C27.983,12.546,28.311,11.323,27.758,10.366z ",fill:"none",stroke:e.color,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:"10",strokeWidth:"1.5"})]})]})},vr=Object.freeze(Object.defineProperty({__proto__:null,default:Ce},Symbol.toStringTag,{value:"Module"})),we=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{width:n,height:n,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t("mask",{id:"a",style:{maskType:"alpha"},maskUnits:"userSpaceOnUse",x:"0",y:"0",width:n,height:n,children:t("path",{fill:"#D9D9D9",d:"M0 0h30v30H0z"})}),t("g",{mask:"url(#a)",children:t("path",{d:"M6 20.25v-1.5h17.5v1.5H6Zm0-4.88v-1.5h17.5v1.5H6Zm0-4.87V9h17.5v1.5H6Z",fill:e.color})})]})},br=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"})),Re=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",fill:"#000000",width:n,height:n,children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l("g",{id:"SVGRepo_iconCarrier",children:[t("g",{id:"icomoon-ignore"}),t("path",{d:"M16 2.672c-7.362 0-13.328 5.966-13.328 13.328s5.966 13.328 13.328 13.328c7.362 0 13.328-5.966 13.328-13.328s-5.966-13.328-13.328-13.328zM16 28.262c-6.761 0-12.262-5.501-12.262-12.262s5.501-12.262 12.262-12.262c6.761 0 12.262 5.501 12.262 12.262s-5.501 12.262-12.262 12.262z",fill:e.color}),t("path",{d:"M16.533 8.003h-1.066v7.464h-7.428v1.066h7.428v7.428h1.066v-7.428h7.464v-1.066h-7.464z",fill:e.color})]})]})},_r=Object.freeze(Object.defineProperty({__proto__:null,default:Re},Symbol.toStringTag,{value:"Module"})),Se=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{xmlns:"http://www.w3.org/2000/svg",width:n,height:n,viewBox:"0 0 24 24",fill:"none",children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l("g",{id:"SVGRepo_iconCarrier",children:[" ",t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z",fill:e.color??"#000000"})," "]})]})},yr=Object.freeze(Object.defineProperty({__proto__:null,default:Se},Symbol.toStringTag,{value:"Module"})),pe=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{xmlns:"http://www.w3.org/2000/svg",fill:e.color,width:n,height:n,viewBox:"0 0 32 32",version:"1.1",children:[t("title",{children:"search"}),t("path",{d:"M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z"})]})},kr=Object.freeze(Object.defineProperty({__proto__:null,default:pe},Symbol.toStringTag,{value:"Module"})),Le=e=>{const n=e.size==="big"?"30":e.size==="medium"?"24":"20";return l("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",width:n,height:n,children:[t("g",{id:"SVGRepo_bgCarrier",strokeWidth:"0"}),t("g",{id:"SVGRepo_tracerCarrier",strokeLinecap:"round",strokeLinejoin:"round"}),l("g",{id:"SVGRepo_iconCarrier",children:[t("rect",{width:"48",height:"48",fill:e.color,fillOpacity:"0.01"}),t("path",{d:"M41.5 10H35.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M27.5 6V14",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M27.5 10L5.5 10",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M13.5 24H5.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M21.5 20V28",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M43.5 24H21.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M41.5 38H35.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M27.5 34V42",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"}),t("path",{d:"M27.5 38H5.5",stroke:"#000000",strokeWidth:"0.9600000000000002",strokeLinecap:"round",strokeLinejoin:"round"})]})]})},Cr=Object.freeze(Object.defineProperty({__proto__:null,default:Le},Symbol.toStringTag,{value:"Module"})),N=e=>{const n=()=>{switch(e.name){case"Adult":return t(me,{...e});case"ArrowLeft":return t(ve,{...e});case"Caution":return t(be,{...e});case"Check":return t(_e,{...e});case"Close":return t(ye,{...e});case"Depth":return t(ke,{...e});case"Gear":return t(Ce,{...e});case"Hamburger":return t(we,{...e});case"Plus":return t(Re,{...e});case"Right":return t(Se,{...e});case"Search":return t(pe,{...e});case"Setting":return t(Le,{...e});default:return null}},a=()=>e.size==="big"?"30px":e.size==="medium"?"24px":"20px";return v.lazy(()=>lr(Object.assign({"./icons/Adult.tsx":()=>Promise.resolve().then(()=>ur),"./icons/ArrowLeft.tsx":()=>Promise.resolve().then(()=>dr),"./icons/Caution.tsx":()=>Promise.resolve().then(()=>fr),"./icons/Check.tsx":()=>Promise.resolve().then(()=>hr),"./icons/Close.tsx":()=>Promise.resolve().then(()=>gr),"./icons/Depth.tsx":()=>Promise.resolve().then(()=>mr),"./icons/Gear.tsx":()=>Promise.resolve().then(()=>vr),"./icons/Hamburger.tsx":()=>Promise.resolve().then(()=>br),"./icons/Plus.tsx":()=>Promise.resolve().then(()=>_r),"./icons/Right.tsx":()=>Promise.resolve().then(()=>yr),"./icons/Search.tsx":()=>Promise.resolve().then(()=>kr),"./icons/Setting.tsx":()=>Promise.resolve().then(()=>Cr)}),`./icons/${e.name}.tsx`)),t(v.Suspense,{fallback:null,children:t("div",{style:{height:a(),display:"inline-block"},children:n()})})},Dt="",wr=e=>{const n=typeof e.back=="function",a=e.isMobile?"appBar mobile":"appBar";return l("div",{className:a,children:[l("div",{className:"logo",children:[n&&t("div",{onClick:()=>{var s;return(s=e.back)==null?void 0:s.call(e,!1)},className:"logo-icon",children:t(N,{name:"ArrowLeft",size:"big",color:T.grey_111})}),t("span",{onClick:()=>{var s;return(s=e.back)==null?void 0:s.call(e,!0)},children:e.title})]}),e.children]})},At="",xe=e=>{const n=e.size/14,a={width:e.size+"px",height:e.size+"px",borderRadius:e.size+n/1.5+"px",padding:n/1.5+"px"},s={borderRadius:e.size+"px"},u=e.percent>=50?18*(e.percent-50)/5:0,f=e.percent<=50?18*(e.percent/5):180,h=e.percent<50?T.red:e.percent<75?T.orange:T.green,C={border:`${n}px solid ${h}`,borderTopRightRadius:e.size+"px",borderBottomRightRadius:e.size+"px",transform:`rotate(${u}deg)`},m={border:`${n}px solid ${h}`,borderTopLeftRadius:e.size+"px",borderBottomLeftRadius:e.size+"px",transform:`rotate(${f}deg)`},R={fontSize:e.size/4+"px",borderRadius:e.size-n*2+"px",width:e.size-n*2+"px",height:e.size-n*2+"px"};return t("div",{className:"container",style:a,children:l("div",{className:"circular-progress-bar",style:s,children:[t("span",{className:"left",children:t("span",{className:"bar",style:C})}),t("span",{className:"right",children:t("span",{className:"bar",style:m})}),l("div",{className:"percent",style:R,children:[e.percent,"%"]})]})})},It="",Rr=e=>t("div",{className:"common-button",style:(()=>e.disable?{backgroundColor:T.bg_disable,padding:e.size==="big"?"14px 24px":"12px 20px",border:e.border?`1px solid ${e.border}`:"",width:e.width,color:e.fontColor}:{backgroundColor:e.color,padding:e.size==="big"?"14px 24px":"12px 20px",border:e.border?`1px solid ${e.border}`:"",width:e.width,color:e.fontColor})(),onClick:e.click,children:e.children}),Vt="",Sr=e=>{const n=()=>({height:e.height??"280px",objectFit:e.objectFit??"fill"});return t("div",{className:"card-container",children:t("div",{className:"card",children:t("img",{src:e.imageUrl,style:n()})})})},Wt="",pr=e=>l("div",{className:"group-card",children:[e.isSub&&t(N,{name:"Depth",size:"medium",color:T.grey_111}),l("div",{className:"card",children:[t("img",{className:"card-image",src:e.imageUrl}),t("div",{className:"card-explain",children:t("span",{children:e.label})})]})]}),Bt="",Ft="",re=e=>{const n={backgroundColor:`rgba(0,0,0,${e.opacity})`};return t(v.Fragment,{children:e.isOpen&&t("div",{className:"overlay",style:n,children:e.children})})},Gt="",Lr=({opacity:e})=>t(re,{isOpen:!0,opacity:e,children:t("div",{className:"loading-content",children:t("div",{className:"loading"})})}),$t="",Ee=e=>{const n=Array(8).fill(1).map((a,s)=>a+s);return l("div",{className:"page-loading-container",style:{height:e.customHeight},children:[t("div",{className:"page-loading-wrapper",children:n.map(a=>t("div",{className:"loader"},`loaderKey${a}`))}),t("div",{className:"text",children:e.text})]})},te=e=>{const n=v.useRef(null),a=s=>{var f;((f=n.current)==null?void 0:f.contains(s.target))||e()};return v.useEffect(()=>(window.addEventListener("click",a),()=>{window.removeEventListener("click",a)}),[]),{ref:n}},Ht="",Te=e=>{const[n,a]=v.useState(!0),s=e.ratio*100+"%";return l("div",{className:"image-wrapper",style:{paddingTop:s},onClick:()=>{var u;return(u=e.click)==null?void 0:u.call(e)},children:[t("img",{src:e.imageUrl,loading:e.eager?"eager":"lazy",onLoad:()=>a(!1)}),n&&t("div",{children:t(Ee,{customHeight:"100%"})})]})},xr=e=>{const n=e.ratio?e.ratio:1;return l("div",{className:"poster-card-container",children:[t(Te,{ratio:n,imageUrl:e.imageUrl,click:e.click}),l("div",{className:"poster-card-info",children:[t("div",{className:"progress-bar",children:t(xe,{percent:e.voteAverage,size:34})}),t("span",{className:"title",children:e.title}),t("span",{className:"release-date",children:e.releaseDate})]})]})},Ut="",Er=e=>t(re,{isOpen:e.isOpen,opacity:.6,children:t("div",{className:`wrapper ${e.isMobile?"mobile":""}`,children:e.children})}),Yt="",Tr=e=>{const n=e.title?{padding:"20px 20px 9px"}:{padding:"16px 16px 7px"};return l("div",{className:"popup-header-container",style:n,children:[l("div",{className:"popup-header",children:[e.back&&t("div",{className:"popup-icon",onClick:e.back,children:t(N,{name:"ArrowLeft",size:"big",color:T.grey_999})}),e.title&&t("div",{children:t("span",{className:"title",children:e.title})}),e.close&&t("div",{className:"popup-icon",onClick:e.close,children:t(N,{name:"Close",size:"big",color:T.grey_999})})]}),t("div",{className:"popup-header-progress",children:e.maxProgress&&Array(e.maxProgress).fill(1).map((a,s)=>t("span",{className:`${s+a===e.progress?"selected":""}`},`progress${s}`))})]})},Xt="",Pr=e=>l("div",{className:"notification",children:[e.children,l("div",{className:"info",style:{height:e.height},children:[t(N,{name:"Caution",size:"small",color:T.grey_bbb}),t("span",{children:e.text})]})]}),Zt="",jr=e=>{const n=`${e.ratio*100}%`;return t("div",{className:"image-wrapper",style:{paddingTop:n},children:t("img",{className:"ratio-img",src:e.imageUrl})})},Jt="",Or=e=>{const n=e.type??"text",[a,s]=v.useState(!1),u=v.useMemo(()=>{let h="";return(a||e.searchText)&&(h+=" focus"),e.screen==="mobile"&&(h+=" mobile"),h},[a,e.screen]),f=v.useMemo(()=>{var C;let h=u;return typeof e.validator=="function"&&!((C=e.validator)!=null&&C.call(e,e.searchText))&&(h+=" error"),h},[u,e.searchText]);return l("div",{className:"input-wrapper"+f,children:[e.children,t("input",{type:n,className:"input-search",onChange:e.onChange,placeholder:e.placeholder,value:e.searchText,onFocus:()=>s(!0),onBlur:()=>s(!1)})]})},Kt="",Qt="",Pe=e=>{const n=e.size??"medium",a=e.selected?"selected":"";return t("div",{className:`selected-item ${n} ${a}`,onClick:e.click,children:e.text})},zr=({items:e,selected:n,click:a,open:s,itemSize:u})=>{const f=u??"medium";return t("div",{className:`option-list ${s?"slide":""}`,children:t("div",{className:"option-items",children:e.map(h=>t(Pe,{size:f,text:h.name,selected:h.name===n,click:()=>a==null?void 0:a(h)},h.name))})})},qt="",Nr=({title:e,children:n})=>{const[a,s]=v.useState(!1),[u,f]=v.useState("hidden"),{ref:h}=te(()=>{s(!1),f("hidden")}),C=()=>{a&&f("unset")};function m(){s(R=>!R),a&&f("hidden")}return l("div",{className:"basic-accordion",ref:h,style:{overflow:u},onTransitionEnd:C,children:[l("div",{className:"header",onClick:m,children:[t("span",{className:"title",children:e}),t("div",{className:`icon ${a?"slide":""}`,children:t(N,{name:"Right",size:"medium",color:T.grey_111})})]}),t("div",{className:`children ${a?"slide":""}`,children:n})]})},en="",je=({itemLength:e,container:n,slide:a,currentIndex:s,clickLeft:u,clickRight:f,clickPoint:h,onTransitionEnd:C,onMouseEnter:m,onMouseLeave:R,onTouchStart:S,onTouchMove:x,onTouchEnd:P,children:k})=>l("div",{className:"carousel",onMouseEnter:m,onMouseLeave:R,children:[t("div",{className:"container",ref:n,children:t("div",{className:"slide-container",ref:a,onTransitionEnd:C,onTouchStart:S,onTouchMove:x,onTouchEnd:P,children:k})}),t("div",{className:"left",onClick:u,children:t(N,{name:"Right",size:"small",color:T.white})}),t("div",{className:"right",onClick:f,children:t(N,{name:"Right",size:"small",color:T.white})}),t("div",{className:"progress",children:Array(e).fill(1).map((Y,V)=>t("div",{className:`progress-point ${s===V+1?"selected":""}`,onClick:()=>h(V+1)},V))})]}),Oe=e=>{const n=v.useRef(null),a=v.useRef(null),[s,u]=v.useState(1),[f,h]=v.useState(0);v.useState(0);const C=()=>{let k=s-1;h(-1),a.current.style.transform=`translateX(-${k*100}%)`,a.current.style.transition="transform .3s linear"},m=()=>{if(!a.current)return;let k=s+1;h(1),a.current.style.transform=`translateX(-${k*100}%)`,a.current.style.transition="transform .3s linear"};return{container:n,slide:a,currentIndex:s,clickLeft:C,clickRight:m,clickPoint:k=>{k!==s&&(k<s?(a.current.style.transform=`translateX(+${k*100}%)`,a.current.style.transition="transform .3s linear",h(-1),u(k)):(a.current.style.transform=`translateX(-${k*100}%)`,a.current.style.transition="transform .3s linear",h(1),u(k)))},touchMove:k=>{k>0?m():C()},touchRecover:()=>{a.current.style.transform=`translateX(-${s*100}%)`,a.current.style.transition="transform .15s linear"},onTransitionEnd:()=>{f!==0&&(f===1?s===e?(u(1),a.current.style.transform="translateX(-100%)",a.current.style.transition="none"):u(k=>k+1):s===1?(u(e),u(e),a.current.style.transform=`translateX(-${e*100}%)`,a.current.style.transition="none"):u(k=>k-1),h(0))}}},Mr=e=>{const n=e.items.length,{container:a,slide:s,currentIndex:u,clickLeft:f,clickRight:h,clickPoint:C,onTransitionEnd:m}=Oe(n);return t(je,{container:a,slide:s,currentIndex:u,clickLeft:f,clickRight:h,clickPoint:C,onTransitionEnd:m,itemLength:n,children:l(ge,{children:[e.renderItems(e.items[e.items.length-1],e.items.length),e.items.map((R,S)=>e.renderItems(R,S)),e.renderItems(e.items[0],-1)]})})},Dr=e=>{const n=e.items.length,[a,s]=v.useState(),[u,f]=v.useState(!1),h=v.useRef(),{container:C,slide:m,currentIndex:R,clickLeft:S,clickRight:x,clickPoint:P,touchMove:k,touchRecover:Y,onTransitionEnd:V}=Oe(n);v.useLayoutEffect(()=>{const z=new IntersectionObserver((j,B)=>{j[0].isIntersecting?f(!0):f(!1)},{threshold:.1});h.current=m.current.getBoundingClientRect().width;const M=m.current.parentElement;z.observe(M)},[]);const ne=()=>setInterval(()=>{x()},e.time);v.useEffect(()=>{clearInterval(a),u&&s(ne())},[R,u]);const I=()=>{f(!1)},L=v.useRef();return t(je,{container:C,slide:m,currentIndex:R,clickLeft:S,clickRight:x,clickPoint:P,onTransitionEnd:V,onMouseEnter:I,onMouseLeave:()=>{f(!0)},itemLength:n,onTouchStart:z=>{f(!1),L.current=z.changedTouches[0].pageX},onTouchMove:z=>{const M=z.changedTouches[0].pageX,j=L.current-M;if(Math.abs(j)>m.current.getBoundingClientRect().width/1.5)return;let B;j>0?B=`-${R*100}% - ${Math.abs(j)}px`:B=`-${R*100}% + ${Math.abs(j)}px`,m.current.style.transform=`translateX(calc(${B}))`},onTouchEnd:z=>{const M=h.current/2.5,j=L.current-z.changedTouches[0].pageX;Math.abs(j)>=M?k(j):Y(),setTimeout(()=>{a&&clearTimeout(a),f(!0)},2e3)},children:l(ge,{children:[e.renderItems(e.items[e.items.length-1],e.items.length),e.items.map((z,M)=>e.renderItems(z,M)),e.renderItems(e.items[0],-1)]})})},rn="",Ar=({selected:e,children:n})=>{const[a,s]=v.useState(!1),{ref:u}=te(()=>s(!1));return v.useEffect(()=>{const f=setTimeout(()=>{s(!1)},150);return()=>{clearTimeout(f)}},[e]),l("div",{className:"dropdown",ref:u,children:[t("div",{className:"dropdown-selected",onClick:()=>s(f=>!f),children:e}),v.cloneElement(n,{open:a,selected:e})]})};_.AutoCarousel=Dr,_.BasicAccordion=Nr,_.BasicCarousel=Mr,_.BasicDropDown=Ar,_.Button=Rr,_.Card=Sr,_.CircularProgressBar=xe,_.Colors=T,_.Element=N,_.GroupCard=pr,_.HeaderBar=wr,_.InputBox=Or,_.LoadingSpinner=Lr,_.Notification=Pr,_.OptionList=zr,_.OverLay=re,_.PageLoadingSpinner=Ee,_.Popup=Er,_.PopupBasicHeader=Tr,_.PosterCard=xr,_.RatioCardImage=Te,_.RatioImage=jr,_.SelectedItem=Pe,_.useCloseEvent=te,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
