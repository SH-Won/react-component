import ve, { lazy as pr, Suspense as Or, useMemo as me, useState as P, useRef as G, useLayoutEffect as be, useEffect as ae, cloneElement as zr } from "react";
var Q = {}, $r = {
  get exports() {
    return Q;
  },
  set exports(e) {
    Q = e;
  }
}, J = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ge;
function jr() {
  if (Ge)
    return J;
  Ge = 1;
  var e = ve, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(s, d, v) {
    var _, x = {}, R = null, y = null;
    v !== void 0 && (R = "" + v), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (y = d.ref);
    for (_ in d)
      l.call(d, _) && !u.hasOwnProperty(_) && (x[_] = d[_]);
    if (s && s.defaultProps)
      for (_ in d = s.defaultProps, d)
        x[_] === void 0 && (x[_] = d[_]);
    return { $$typeof: n, type: s, key: R, ref: y, props: x, _owner: c.current };
  }
  return J.Fragment = a, J.jsx = g, J.jsxs = g, J;
}
var K = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Ir() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ve, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), p = Symbol.iterator, N = "@@iterator";
    function X(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = p && r[p] || r[N];
      return typeof i == "function" ? i : null;
    }
    var L = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(r) {
      {
        for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), h = 1; h < i; h++)
          o[h - 1] = arguments[h];
        V("error", r, o);
      }
    }
    function V(r, i, o) {
      {
        var h = L.ReactDebugCurrentFrame, k = h.getStackAddendum();
        k !== "" && (i += "%s", o = o.concat([k]));
        var C = o.map(function(b) {
          return String(b);
        });
        C.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, C);
      }
    }
    var W = !1, B = !1, ke = !1, O = !1, I = !1, z;
    z = Symbol.for("react.module.reference");
    function H(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === l || r === u || I || r === c || r === v || r === _ || O || r === y || W || B || ke || typeof r == "object" && r !== null && (r.$$typeof === R || r.$$typeof === x || r.$$typeof === g || r.$$typeof === s || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === z || r.getModuleId !== void 0));
    }
    function ar(r, i, o) {
      var h = r.displayName;
      if (h)
        return h;
      var k = i.displayName || i.name || "";
      return k !== "" ? o + "(" + k + ")" : o;
    }
    function we(r) {
      return r.displayName || "Context";
    }
    function D(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case l:
          return "Fragment";
        case a:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case v:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case s:
            var i = r;
            return we(i) + ".Consumer";
          case g:
            var o = r;
            return we(o._context) + ".Provider";
          case d:
            return ar(r, r.render, "ForwardRef");
          case x:
            var h = r.displayName || null;
            return h !== null ? h : D(r.type) || "Memo";
          case R: {
            var k = r, C = k._payload, b = k._init;
            try {
              return D(b(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var F = Object.assign, q = 0, Ce, Re, xe, Le, Te, Se, Ee;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function cr() {
      {
        if (q === 0) {
          Ce = console.log, Re = console.info, xe = console.warn, Le = console.error, Te = console.group, Se = console.groupCollapsed, Ee = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Pe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        q++;
      }
    }
    function sr() {
      {
        if (q--, q === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: F({}, r, {
              value: Ce
            }),
            info: F({}, r, {
              value: Re
            }),
            warn: F({}, r, {
              value: xe
            }),
            error: F({}, r, {
              value: Le
            }),
            group: F({}, r, {
              value: Te
            }),
            groupCollapsed: F({}, r, {
              value: Se
            }),
            groupEnd: F({}, r, {
              value: Ee
            })
          });
        }
        q < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = L.ReactCurrentDispatcher, se;
    function re(r, i, o) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (k) {
            var h = k.stack.trim().match(/\n( *(at )?)/);
            se = h && h[1] || "";
          }
        return `
` + se + r;
      }
    }
    var le = !1, te;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      te = new lr();
    }
    function Ne(r, i) {
      if (!r || le)
        return "";
      {
        var o = te.get(r);
        if (o !== void 0)
          return o;
      }
      var h;
      le = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = ce.current, ce.current = null, cr();
      try {
        if (i) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (A) {
              h = A;
            }
            Reflect.construct(r, [], b);
          } else {
            try {
              b.call();
            } catch (A) {
              h = A;
            }
            r.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            h = A;
          }
          r();
        }
      } catch (A) {
        if (A && h && typeof A.stack == "string") {
          for (var m = A.stack.split(`
`), M = h.stack.split(`
`), T = m.length - 1, S = M.length - 1; T >= 1 && S >= 0 && m[T] !== M[S]; )
            S--;
          for (; T >= 1 && S >= 0; T--, S--)
            if (m[T] !== M[S]) {
              if (T !== 1 || S !== 1)
                do
                  if (T--, S--, S < 0 || m[T] !== M[S]) {
                    var $ = `
` + m[T].replace(" at new ", " at ");
                    return r.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", r.displayName)), typeof r == "function" && te.set(r, $), $;
                  }
                while (T >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        le = !1, ce.current = C, sr(), Error.prepareStackTrace = k;
      }
      var Y = r ? r.displayName || r.name : "", Fe = Y ? re(Y) : "";
      return typeof r == "function" && te.set(r, Fe), Fe;
    }
    function dr(r, i, o) {
      return Ne(r, !1);
    }
    function ur(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function ne(r, i, o) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ne(r, ur(r));
      if (typeof r == "string")
        return re(r);
      switch (r) {
        case v:
          return re("Suspense");
        case _:
          return re("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return dr(r.render);
          case x:
            return ne(r.type, i, o);
          case R: {
            var h = r, k = h._payload, C = h._init;
            try {
              return ne(C(k), i, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, Me = {}, pe = L.ReactDebugCurrentFrame;
    function oe(r) {
      if (r) {
        var i = r._owner, o = ne(r.type, r._source, i ? i.type : null);
        pe.setExtraStackFrame(o);
      } else
        pe.setExtraStackFrame(null);
    }
    function fr(r, i, o, h, k) {
      {
        var C = Function.call.bind(ie);
        for (var b in r)
          if (C(r, b)) {
            var m = void 0;
            try {
              if (typeof r[b] != "function") {
                var M = Error((h || "React class") + ": " + o + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              m = r[b](i, b, h, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              m = T;
            }
            m && !(m instanceof Error) && (oe(k), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", o, b, typeof m), oe(null)), m instanceof Error && !(m.message in Me) && (Me[m.message] = !0, oe(k), w("Failed %s type: %s", o, m.message), oe(null));
          }
      }
    }
    var hr = Array.isArray;
    function de(r) {
      return hr(r);
    }
    function gr(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, o = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return o;
      }
    }
    function mr(r) {
      try {
        return Oe(r), !1;
      } catch {
        return !0;
      }
    }
    function Oe(r) {
      return "" + r;
    }
    function ze(r) {
      if (mr(r))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(r)), Oe(r);
    }
    var Z = L.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, $e, je, ue;
    ue = {};
    function br(r) {
      if (ie.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function _r(r) {
      if (ie.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function yr(r, i) {
      if (typeof r.ref == "string" && Z.current && i && Z.current.stateNode !== i) {
        var o = D(Z.current.type);
        ue[o] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(Z.current.type), r.ref), ue[o] = !0);
      }
    }
    function kr(r, i) {
      {
        var o = function() {
          $e || ($e = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function wr(r, i) {
      {
        var o = function() {
          je || (je = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Cr = function(r, i, o, h, k, C, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: o,
        props: b,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Rr(r, i, o, h, k) {
      {
        var C, b = {}, m = null, M = null;
        o !== void 0 && (ze(o), m = "" + o), _r(i) && (ze(i.key), m = "" + i.key), br(i) && (M = i.ref, yr(i, k));
        for (C in i)
          ie.call(i, C) && !vr.hasOwnProperty(C) && (b[C] = i[C]);
        if (r && r.defaultProps) {
          var T = r.defaultProps;
          for (C in T)
            b[C] === void 0 && (b[C] = T[C]);
        }
        if (m || M) {
          var S = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          m && kr(b, S), M && wr(b, S);
        }
        return Cr(r, m, M, k, h, Z.current, b);
      }
    }
    var fe = L.ReactCurrentOwner, Ie = L.ReactDebugCurrentFrame;
    function U(r) {
      if (r) {
        var i = r._owner, o = ne(r.type, r._source, i ? i.type : null);
        Ie.setExtraStackFrame(o);
      } else
        Ie.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function ge(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function De() {
      {
        if (fe.current) {
          var r = D(fe.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function xr(r) {
      {
        if (r !== void 0) {
          var i = r.fileName.replace(/^.*[\\\/]/, ""), o = r.lineNumber;
          return `

Check your code at ` + i + ":" + o + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function Lr(r) {
      {
        var i = De();
        if (!i) {
          var o = typeof r == "string" ? r : r.displayName || r.name;
          o && (i = `

Check the top-level render call using <` + o + ">.");
        }
        return i;
      }
    }
    function We(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var o = Lr(i);
        if (Ae[o])
          return;
        Ae[o] = !0;
        var h = "";
        r && r._owner && r._owner !== fe.current && (h = " It was passed a child from " + D(r._owner.type) + "."), U(r), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, h), U(null);
      }
    }
    function Be(r, i) {
      {
        if (typeof r != "object")
          return;
        if (de(r))
          for (var o = 0; o < r.length; o++) {
            var h = r[o];
            ge(h) && We(h, i);
          }
        else if (ge(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var k = X(r);
          if (typeof k == "function" && k !== r.entries)
            for (var C = k.call(r), b; !(b = C.next()).done; )
              ge(b.value) && We(b.value, i);
        }
      }
    }
    function Tr(r) {
      {
        var i = r.type;
        if (i == null || typeof i == "string")
          return;
        var o;
        if (typeof i == "function")
          o = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === x))
          o = i.propTypes;
        else
          return;
        if (o) {
          var h = D(i);
          fr(o, r.props, "prop", h, r);
        } else if (i.PropTypes !== void 0 && !he) {
          he = !0;
          var k = D(i);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sr(r) {
      {
        for (var i = Object.keys(r.props), o = 0; o < i.length; o++) {
          var h = i[o];
          if (h !== "children" && h !== "key") {
            U(r), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), U(null);
            break;
          }
        }
        r.ref !== null && (U(r), w("Invalid attribute `ref` supplied to `React.Fragment`."), U(null));
      }
    }
    function Ve(r, i, o, h, k, C) {
      {
        var b = H(r);
        if (!b) {
          var m = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = xr(k);
          M ? m += M : m += De();
          var T;
          r === null ? T = "null" : de(r) ? T = "array" : r !== void 0 && r.$$typeof === n ? (T = "<" + (D(r.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : T = typeof r, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, m);
        }
        var S = Rr(r, i, o, k, C);
        if (S == null)
          return S;
        if (b) {
          var $ = i.children;
          if ($ !== void 0)
            if (h)
              if (de($)) {
                for (var Y = 0; Y < $.length; Y++)
                  Be($[Y], r);
                Object.freeze && Object.freeze($);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be($, r);
        }
        return r === l ? Sr(S) : Tr(S), S;
      }
    }
    function Er(r, i, o) {
      return Ve(r, i, o, !0);
    }
    function Pr(r, i, o) {
      return Ve(r, i, o, !1);
    }
    var Nr = Pr, Mr = Er;
    K.Fragment = l, K.jsx = Nr, K.jsxs = Mr;
  }()), K;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = jr() : e.exports = Ir();
})($r);
const ee = Q.Fragment, t = Q.jsx, f = Q.jsxs, Dr = "#6440dd", Ar = "#5934D8", Wr = "#F5222D", Br = "#111111", Vr = "#666666", Fr = "#333333", Gr = "#999999", Hr = "#bbbbbb", Ur = "#cccccc", Yr = "#f4f4f4", Xr = "#f5f6f8", qr = "#f2f4f7", Zr = "#dbd6eb", Jr = "#eeebff", Kr = "#b6b7b9", Qr = "#020a13", et = "#696869", rt = "#13283e", tt = "#e7e9ef", nt = "#cfd4dd", it = "#d42a21", ot = "#1968e5", at = "#27c4b8", ct = "#fff", st = "#f4f0ff", lt = "#ABAEBF", dt = "#03c75a", ut = "#e1a016", ft = "#da1c26", E = {
  main: Dr,
  main_sub: Ar,
  notice: Wr,
  grey_111: Br,
  grey_666: Vr,
  grey_333: Fr,
  grey_999: Gr,
  grey_bbb: Hr,
  grey_ccc: Ur,
  grey_f4: Yr,
  bg_main: Xr,
  bg_noti: qr,
  bg_disable: Zr,
  bg_sub: Jr,
  bg_trans: Kr,
  bg_black: Qr,
  bg_grey: et,
  bg_indigo: rt,
  line_01: tt,
  line_02: nt,
  plus: it,
  minus: ot,
  code: at,
  white: ct,
  option_hover: st,
  m_gnb_normal: lt,
  green: dt,
  orange: ut,
  red: ft
}, ht = (e, n) => {
  const a = e[n];
  return a ? typeof a == "function" ? a() : Promise.resolve(a) : new Promise((l, c) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(c.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
}, Ue = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      fill: e.color,
      width: n,
      height: n,
      viewBox: "0 0 50 50",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      stroke: "#000000",
      strokeWidth: "0.0005",
      children: [
        /* @__PURE__ */ t("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ t("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ t("g", { id: "SVGRepo_iconCarrier", children: /* @__PURE__ */ t(
          "path",
          {
            d: "M25 2C12.309295 2 2 12.309295 2 25C2 37.690705 12.309295 48 25 48C37.690705 48 48 37.690705 48 25C48 12.309295 37.690705 2 25 2 z M 25 4C36.609824 4 46 13.390176 46 25C46 36.609824 36.609824 46 25 46C13.390176 46 4 36.609824 4 25C4 13.390176 13.390176 4 25 4 z M 24.828125 17C21.234125 17 20.208984 19.567484 20.208984 21.021484C20.208984 22.989484 21.749594 24.014484 22.433594 24.271484C21.577594 24.613484 19.695312 25.555031 19.695312 28.207031C19.695312 30.431031 21.064937 32.998047 25.085938 32.998047C26.625937 32.998047 30.304688 32.228031 30.304688 28.207031C30.304688 25.469031 28.421469 24.528484 27.480469 24.271484C28.079469 24.015484 29.619141 22.989484 29.619141 21.021484C29.619141 20.251484 29.363125 17 24.828125 17 z M 15.5 17.25C15.072 19.648 13.399 20.113219 11 20.199219L11 21.740234L15 21.75L15 32.75L17 32.75L17 17.25L15.5 17.25 z M 24.914062 18.710938C27.224062 18.710938 27.566406 20.337422 27.566406 21.107422C27.566406 21.963422 27.139 23.673828 25 23.673828C22.348 23.673828 22.176734 21.535422 22.177734 21.107422C22.177734 20.764422 22.347062 18.710938 24.914062 18.710938 z M 36 21L36 24L33 24L33 26L36 26L36 29L38 29L38 26L41 26L41 24L38 24L38 21L36 21 z M 25 25.298828C27.567 25.298828 28.251953 27.610922 28.251953 28.294922C28.251953 29.748922 27.139 31.373047 25 31.373047C23.374 31.373047 21.662109 30.519922 21.662109 28.294922C21.662109 27.010922 22.519 25.298828 25 25.298828 z"
          }
        ) })
      ]
    }
  );
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ue
}, Symbol.toStringTag, { value: "Module" })), Ye = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        /* @__PURE__ */ t("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ t(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ f("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ t(
            "path",
            {
              d: "M4 12L20 12",
              stroke: e.color,
              strokeWidth: "0.6",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          " ",
          /* @__PURE__ */ t(
            "path",
            {
              d: "M10 6L4.0625 11.9375V11.9375C4.02798 11.972 4.02798 12.028 4.0625 12.0625V12.0625L10 18",
              stroke: e.color,
              strokeWidth: "0.6",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          " "
        ] })
      ]
    }
  );
}, mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye
}, Symbol.toStringTag, { value: "Module" })), Xe = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      id: "caution-sign-circle",
      fill: "#999999",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon line",
      stroke: e.color,
      width: n,
      height: n,
      children: [
        /* @__PURE__ */ t("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ t(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ f("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ t(
            "line",
            {
              id: "primary-upstroke",
              x1: "11.95",
              y1: "16.5",
              x2: "12.05",
              y2: "16.5",
              style: {
                fill: "none",
                stroke: "#000000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.95
              }
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              id: "primary",
              d: "M3,12a9,9,0,0,1,9-9h0a9,9,0,0,1,9,9h0a9,9,0,0,1-9,9h0a9,9,0,0,1-9-9Zm9,0V7",
              style: {
                fill: "none",
                stroke: "#000000",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 1.5
              }
            }
          )
        ] })
      ]
    }
  );
}, vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe
}, Symbol.toStringTag, { value: "Module" })), qe = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      width: n,
      height: n,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ t(
          "mask",
          {
            id: "a",
            width: "30",
            height: "30",
            x: "0",
            y: "0",
            maskUnits: "userSpaceOnUse",
            style: { maskType: "alpha" },
            children: /* @__PURE__ */ t("path", { fill: "#D9D9D9", d: "M0 0h24v24H0z" })
          }
        ),
        /* @__PURE__ */ t("g", { mask: "url(#a)", children: /* @__PURE__ */ t(
          "path",
          {
            fill: e.color,
            d: "m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"
          }
        ) })
      ]
    }
  );
}, bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe
}, Symbol.toStringTag, { value: "Module" })), Ze = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ t("svg", { width: n, height: n, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z",
      fill: e.color
    }
  ) });
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ze
}, Symbol.toStringTag, { value: "Module" })), Je = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        /* @__PURE__ */ t("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ t(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ f("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ f("g", { id: "Arrow / Arrow_Sub_Down_Right", children: [
            " ",
            /* @__PURE__ */ t(
              "path",
              {
                id: "Vector",
                d: "M13 11L18 16M18 16L13 21M18 16H10.1969C9.07899 16 8.5192 16 8.0918 15.7822C7.71547 15.5905 7.40973 15.2839 7.21799 14.9076C7 14.4798 7 13.9201 7 12.8V3",
                stroke: e.color,
                strokeWidth: "0.24000000000000005",
                strokeLinecap: "round",
                strokeLinejoin: "round"
              }
            ),
            " "
          ] }),
          " "
        ] })
      ]
    }
  );
}, yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Je
}, Symbol.toStringTag, { value: "Module" })), Ke = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      id: "Editable-line",
      viewBox: "0 0 32 32",
      enableBackground: "new 0 0 32 32",
      version: "1.1",
      xmlSpace: "preserve",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      fill: "none",
      width: n,
      height: n,
      children: [
        /* @__PURE__ */ t("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ t(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ f("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ t(
            "circle",
            {
              id: "XMLID_224_",
              cx: "16",
              cy: "16",
              fill: "none",
              r: "4",
              stroke: e.color,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              strokeWidth: "1.5"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              id: "XMLID_242_",
              d: " M27.758,10.366l-1-1.732c-0.552-0.957-1.775-1.284-2.732-0.732L23.5,8.206C21.5,9.36,19,7.917,19,5.608V5c0-1.105-0.895-2-2-2h-2 c-1.105,0-2,0.895-2,2v0.608c0,2.309-2.5,3.753-4.5,2.598L7.974,7.902C7.017,7.35,5.794,7.677,5.242,8.634l-1,1.732 c-0.552,0.957-0.225,2.18,0.732,2.732L5.5,13.402c2,1.155,2,4.041,0,5.196l-0.526,0.304c-0.957,0.552-1.284,1.775-0.732,2.732 l1,1.732c0.552,0.957,1.775,1.284,2.732,0.732L8.5,23.794c2-1.155,4.5,0.289,4.5,2.598V27c0,1.105,0.895,2,2,2h2 c1.105,0,2-0.895,2-2v-0.608c0-2.309,2.5-3.753,4.5-2.598l0.526,0.304c0.957,0.552,2.18,0.225,2.732-0.732l1-1.732 c0.552-0.957,0.225-2.18-0.732-2.732L26.5,18.598c-2-1.155-2-4.041,0-5.196l0.526-0.304C27.983,12.546,28.311,11.323,27.758,10.366z ",
              fill: "none",
              stroke: e.color,
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeMiterlimit: "10",
              strokeWidth: "1.5"
            }
          )
        ] })
      ]
    }
  );
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), Qe = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      width: n,
      height: n,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ t(
          "mask",
          {
            id: "a",
            style: { maskType: "alpha" },
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: n,
            height: n,
            children: /* @__PURE__ */ t("path", { fill: "#D9D9D9", d: "M0 0h30v30H0z" })
          }
        ),
        /* @__PURE__ */ t("g", { mask: "url(#a)", children: /* @__PURE__ */ t(
          "path",
          {
            d: "M6 20.25v-1.5h17.5v1.5H6Zm0-4.88v-1.5h17.5v1.5H6Zm0-4.87V9h17.5v1.5H6Z",
            fill: e.color
          }
        ) })
      ]
    }
  );
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, { value: "Module" })), er = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      viewBox: "0 0 32 32",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      fill: "#000000",
      width: n,
      height: n,
      children: [
        /* @__PURE__ */ t("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ t(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ f("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ t("g", { id: "icomoon-ignore" }),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M16 2.672c-7.362 0-13.328 5.966-13.328 13.328s5.966 13.328 13.328 13.328c7.362 0 13.328-5.966 13.328-13.328s-5.966-13.328-13.328-13.328zM16 28.262c-6.761 0-12.262-5.501-12.262-12.262s5.501-12.262 12.262-12.262c6.761 0 12.262 5.501 12.262 12.262s-5.501 12.262-12.262 12.262z",
              fill: e.color
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M16.533 8.003h-1.066v7.464h-7.428v1.066h7.428v7.428h1.066v-7.428h7.464v-1.066h-7.464z",
              fill: e.color
            }
          )
        ] })
      ]
    }
  );
}, Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" })), rr = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      children: [
        /* @__PURE__ */ t("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ t(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ f("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ t(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z",
              fill: e.color ?? "#000000"
            }
          ),
          " "
        ] })
      ]
    }
  );
}, Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" })), tr = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: e.color,
      width: n,
      height: n,
      viewBox: "0 0 32 32",
      version: "1.1",
      children: [
        /* @__PURE__ */ t("title", { children: "search" }),
        /* @__PURE__ */ t("path", { d: "M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z" })
      ]
    }
  );
}, xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tr
}, Symbol.toStringTag, { value: "Module" })), nr = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ f(
    "svg",
    {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      children: [
        /* @__PURE__ */ t("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ t(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ f("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ t(
            "rect",
            {
              width: "48",
              height: "48",
              fill: e.color,
              fillOpacity: "0.01"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M41.5 10H35.5",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M27.5 6V14",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M27.5 10L5.5 10",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M13.5 24H5.5",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M21.5 20V28",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M43.5 24H21.5",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M41.5 38H35.5",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M27.5 34V42",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M27.5 38H5.5",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          )
        ] })
      ]
    }
  );
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr
}, Symbol.toStringTag, { value: "Module" })), j = (e) => {
  const n = () => {
    switch (e.name) {
      case "Adult":
        return /* @__PURE__ */ t(Ue, { ...e });
      case "ArrowLeft":
        return /* @__PURE__ */ t(Ye, { ...e });
      case "Caution":
        return /* @__PURE__ */ t(Xe, { ...e });
      case "Check":
        return /* @__PURE__ */ t(qe, { ...e });
      case "Close":
        return /* @__PURE__ */ t(Ze, { ...e });
      case "Depth":
        return /* @__PURE__ */ t(Je, { ...e });
      case "Gear":
        return /* @__PURE__ */ t(Ke, { ...e });
      case "Hamburger":
        return /* @__PURE__ */ t(Qe, { ...e });
      case "Plus":
        return /* @__PURE__ */ t(er, { ...e });
      case "Right":
        return /* @__PURE__ */ t(rr, { ...e });
      case "Search":
        return /* @__PURE__ */ t(tr, { ...e });
      case "Setting":
        return /* @__PURE__ */ t(nr, { ...e });
      default:
        return null;
    }
  }, a = () => e.size === "big" ? "30px" : e.size === "medium" ? "24px" : "20px";
  return pr(() => ht(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => gt), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => mt), "./icons/Caution.tsx": () => Promise.resolve().then(() => vt), "./icons/Check.tsx": () => Promise.resolve().then(() => bt), "./icons/Close.tsx": () => Promise.resolve().then(() => _t), "./icons/Depth.tsx": () => Promise.resolve().then(() => yt), "./icons/Gear.tsx": () => Promise.resolve().then(() => kt), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => wt), "./icons/Plus.tsx": () => Promise.resolve().then(() => Ct), "./icons/Right.tsx": () => Promise.resolve().then(() => Rt), "./icons/Search.tsx": () => Promise.resolve().then(() => xt), "./icons/Setting.tsx": () => Promise.resolve().then(() => Lt) }), `./icons/${e.name}.tsx`)), /* @__PURE__ */ t(Or, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: a(), display: "inline-block" }, children: n() }) });
};
const Tt = (e) => {
  const n = typeof e.openDrawer == "function", a = typeof e.back == "function", l = e.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ f("div", { className: l, children: [
    e.isMobile && n && /* @__PURE__ */ t("div", { className: "hamburger", onClick: e.openDrawer, children: /* @__PURE__ */ t(
      j,
      {
        name: "Hamburger",
        size: "big",
        color: e.iconColor ?? E.grey_111
      }
    ) }),
    /* @__PURE__ */ f("div", { className: "logo", children: [
      a && !e.isMobile && /* @__PURE__ */ t("div", { onClick: () => {
        var c;
        return (c = e.back) == null ? void 0 : c.call(e, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(
        j,
        {
          name: "ArrowLeft",
          size: "big",
          color: e.iconColor ?? E.grey_111
        }
      ) }),
      /* @__PURE__ */ t("span", { onClick: () => {
        var c;
        return (c = e.back) == null ? void 0 : c.call(e, !0);
      }, children: e.title })
    ] }),
    !e.isMobile && e.children
  ] });
};
const St = (e) => {
  const n = e.size / 14, a = {
    width: e.size + "px",
    height: e.size + "px",
    borderRadius: e.size + n / 1.5 + "px",
    padding: n / 1.5 + "px"
  }, l = {
    borderRadius: e.size + "px"
  }, c = e.percent >= 50 ? 18 * (e.percent - 50) / 5 : 0, u = e.percent <= 50 ? 18 * (e.percent / 5) : 180, g = e.percent < 50 ? E.red : e.percent < 75 ? E.orange : E.green, s = {
    border: `${n}px solid ${g}`,
    borderTopRightRadius: e.size + "px",
    borderBottomRightRadius: e.size + "px",
    transform: `rotate(${c}deg)`
  }, d = {
    border: `${n}px solid ${g}`,
    borderTopLeftRadius: e.size + "px",
    borderBottomLeftRadius: e.size + "px",
    transform: `rotate(${u}deg)`
  }, v = {
    fontSize: e.size / 4 + "px",
    borderRadius: e.size - n * 2 + "px",
    width: e.size - n * 2 + "px",
    height: e.size - n * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: a, children: /* @__PURE__ */ f("div", { className: "circular-progress-bar", style: l, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: s }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: d }) }),
    /* @__PURE__ */ f("div", { className: "percent", style: v, children: [
      e.percent,
      "%"
    ] })
  ] }) });
};
const Mt = ({
  initialCount: e,
  width: n,
  onSelect: a,
  count: l,
  magnification: c
}) => {
  const u = me(() => Array(l + 1).fill(1).map((L, w) => ({
    order: w,
    value: w * c,
    key: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString()
  })), [l]), g = e !== void 0 && e < u.length, s = u.length, [d, v] = P(), [_, x] = P(0), [R, y] = P(
    u[g ? e : 0]
  ), p = (L) => {
    y(L), a == null || a(L);
  }, N = G(null), X = () => {
    var W;
    let V = (((W = N.current) == null ? void 0 : W.getBoundingClientRect().width) - u.length * _) / (u.length - 1) * R.order + _ * R.order;
    return R.order !== 0 && (V += _ / 2), {
      width: `${V}px`
      // width: `calc(${finalCalc})`,
    };
  };
  return be(() => {
    var W;
    const L = N.current.getBoundingClientRect().width, w = (W = N.current.parentElement) == null ? void 0 : W.getBoundingClientRect(), V = 2 * w.width - (w.right + w.left);
    if (n) {
      const B = n / s;
      x(B >= 24 ? 24 : B);
    } else {
      const B = L / s;
      x(B >= 24 ? 24 : B);
    }
    v(V);
  }, [n]), ae(() => {
    y(u[g ? e : 0]);
  }, [e]), /* @__PURE__ */ f("div", { style: { width: n, height: _ * 2 }, className: "setting-bar-wrapper", children: [
    /* @__PURE__ */ f("div", { className: "setting-bar", ref: N, children: [
      u.map((L, w) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress ${L.order === R.order ? "selected" : ""}`,
          style: { width: _ },
          onClick: () => p(L),
          children: /* @__PURE__ */ t(
            "div",
            {
              className: `point ${L.order < R.order ? "selected" : ""}`
            }
          )
        },
        L.key
      )),
      /* @__PURE__ */ t(
        "div",
        {
          className: `user-progress ${R.order === s - 1 ? "end" : ""}`,
          style: X()
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "setting-explain", children: u.map((L, w) => /* @__PURE__ */ t(
      "span",
      {
        className: w === R.order ? "selected" : "",
        children: L.value
      },
      L.key
    )) })
  ] });
};
const pt = ({
  items: e,
  onSelect: n,
  screen: a
}) => {
  const l = G(null), [c, u] = P(0), [g, s] = P({ width: 0, transform: "" }), d = (v) => {
    var y, p, N;
    if (c === v.order)
      return;
    const _ = (y = l.current) == null ? void 0 : y.getBoundingClientRect().left, x = (p = l.current) == null ? void 0 : p.children[v.order].clientWidth, R = ((N = l.current) == null ? void 0 : N.children[v.order].getBoundingClientRect().left) - _;
    u(v.order), n == null || n(v), s({
      width: x,
      transform: `translate(${R - 1}px)`
    });
  };
  return be(() => {
    var R, y, p;
    const v = (R = l.current) == null ? void 0 : R.children[c].clientWidth, _ = (y = l.current) == null ? void 0 : y.getBoundingClientRect().left, x = ((p = l.current) == null ? void 0 : p.children[c].getBoundingClientRect().left) - _;
    s({
      width: v,
      transform: `translate(${x - 1}px)`
    });
  }, [a]), /* @__PURE__ */ f("div", { className: "toggle-bar", ref: l, children: [
    e.map((v) => /* @__PURE__ */ t(
      "div",
      {
        className: `toggle-item ${c === v.order ? "selected" : ""}`,
        onClick: () => d(v),
        children: /* @__PURE__ */ t("span", { children: v.name })
      },
      v.id
    )),
    /* @__PURE__ */ t("div", { className: "item-background", style: g })
  ] });
};
const Ot = (e) => /* @__PURE__ */ t(
  "div",
  {
    className: "common-button",
    style: (() => e.disable ? {
      backgroundColor: E.bg_disable,
      padding: e.size === "big" ? "14px 24px" : "12px 20px",
      border: e.border ? `1px solid ${e.border}` : "",
      width: e.width,
      color: e.fontColor
    } : {
      backgroundColor: e.color,
      padding: e.size === "big" ? "14px 24px" : "12px 20px",
      border: e.border ? `1px solid ${e.border}` : "",
      width: e.width,
      color: e.fontColor
    })(),
    onClick: e.click,
    children: e.children
  }
);
const zt = (e) => {
  const n = () => ({
    height: e.height ?? "280px",
    objectFit: e.objectFit ?? "fill"
  });
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: e.imageUrl, style: n() }) }) });
};
const $t = (e) => /* @__PURE__ */ f("div", { className: "group-card", children: [
  e.isSub && /* @__PURE__ */ t(j, { name: "Depth", size: "medium", color: E.grey_111 }),
  /* @__PURE__ */ f("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: e.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: e.label }) })
  ] })
] });
const Et = (e) => {
  const [n, a] = P(!0), l = e.ratio * 100 + "%";
  return /* @__PURE__ */ f(
    "div",
    {
      className: "image-wrapper",
      style: { paddingTop: l },
      onClick: () => {
        var c;
        return (c = e.click) == null ? void 0 : c.call(e);
      },
      children: [
        /* @__PURE__ */ t(
          "img",
          {
            src: e.imageUrl,
            loading: e.eager ? "eager" : "lazy",
            onLoad: () => {
              a(!1);
            }
          }
        ),
        n && /* @__PURE__ */ t("div", { className: "skeletonImg" })
      ]
    }
  );
}, jt = (e) => {
  const n = e.ratio ? e.ratio : 1;
  return /* @__PURE__ */ f("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(Et, { ratio: n, imageUrl: e.imageUrl, click: e.click }),
    /* @__PURE__ */ f("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(St, { percent: e.voteAverage, size: 34 }) }),
      /* @__PURE__ */ t("span", { className: "title", children: e.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: e.releaseDate })
    ] })
  ] });
};
const _e = (e) => {
  const n = {
    backgroundColor: `rgba(0,0,0,${e.opacity})`
  };
  return /* @__PURE__ */ t(ve.Fragment, { children: e.isOpen && /* @__PURE__ */ t("div", { className: "overlay", style: n, children: e.children }) });
};
const It = (e) => /* @__PURE__ */ t(_e, { isOpen: e.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${e.isMobile ? "mobile" : ""}`, children: e.children }) });
const Dt = (e) => {
  const n = e.maxProgress !== 0 && e.maxProgress, a = e.title ? {
    padding: n ? "20px 20px 9px" : "20px"
  } : {
    padding: n ? "16px 16px 7px" : "16px"
  };
  return /* @__PURE__ */ f("div", { className: "popup-header-container", style: a, children: [
    /* @__PURE__ */ f("div", { className: "popup-header", children: [
      e.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.back, children: /* @__PURE__ */ t(j, { name: "ArrowLeft", size: "big", color: E.grey_999 }) }),
      e.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: e.title }) }),
      e.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.close, children: /* @__PURE__ */ t(j, { name: "Close", size: "big", color: E.grey_999 }) })
    ] }),
    n && /* @__PURE__ */ t("div", { className: "popup-header-progress", children: Array(e.maxProgress).fill(1).map((l, c) => /* @__PURE__ */ t(
      "span",
      {
        className: `${c + l === e.progress ? "selected" : ""}`
      },
      `progress${c}`
    )) })
  ] });
};
const At = (e) => {
  const n = {
    backgroundColor: e.backgroundColor ?? E.bg_black,
    color: e.fontColor ?? E.white
  };
  return /* @__PURE__ */ f(ee, { children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: `popup-drawer ${e.type} ${e.isOpen ? "show" : ""}`,
        style: n,
        children: e.children
      }
    ),
    /* @__PURE__ */ t("div", { onClick: e.close, children: /* @__PURE__ */ t(_e, { opacity: 0.5, isOpen: e.isOpen }) })
  ] });
};
const Wt = (e) => /* @__PURE__ */ f("div", { className: "notification", children: [
  e.children,
  /* @__PURE__ */ f("div", { className: "info", style: { height: e.height }, children: [
    /* @__PURE__ */ t(j, { name: "Caution", size: "small", color: E.grey_bbb }),
    /* @__PURE__ */ t("span", { children: e.text })
  ] })
] });
const Bt = (e) => {
  const n = `${e.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: n }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: e.imageUrl }) });
};
const Vt = (e) => {
  const n = e.type ?? "text", [a, l] = P(!1), c = me(() => {
    let g = "";
    return (a || e.searchText) && (g += " focus"), e.screen === "mobile" && (g += " mobile"), g;
  }, [a, e.screen]), u = me(() => {
    var s;
    let g = c;
    return typeof e.validator == "function" && !((s = e.validator) != null && s.call(e, e.searchText)) && (g += " error"), g;
  }, [c, e.searchText]);
  return /* @__PURE__ */ f("div", { className: "input-wrapper" + u, children: [
    e.children,
    /* @__PURE__ */ t(
      "input",
      {
        type: n,
        className: "input-search",
        onChange: e.onChange,
        placeholder: e.placeholder,
        value: e.searchText,
        onFocus: () => l(!0),
        onBlur: () => l(!1)
      }
    )
  ] });
};
const Pt = (e) => {
  const n = e.type ?? "normal", a = e.size ?? "medium", l = e.selected ? "selected" : "";
  return /* @__PURE__ */ t(
    "div",
    {
      className: `selected-item ${n} ${a} ${l}`,
      onClick: () => {
        var c;
        return (c = e.click) == null ? void 0 : c.call(e);
      },
      onTouchStart: () => {
        var c;
        return (c = e.click) == null ? void 0 : c.call(e);
      },
      onTouchEnd: (c) => c.preventDefault(),
      children: e.text ?? e.children
    }
  );
}, Ft = ({
  items: e,
  selected: n,
  click: a,
  open: l,
  itemSize: c
}) => {
  const u = c ?? "medium";
  return /* @__PURE__ */ t("div", { className: `option-list ${l ? "slide" : ""}`, children: /* @__PURE__ */ t("div", { className: "option-items", children: e.map((g) => /* @__PURE__ */ t(
    Pt,
    {
      size: u,
      text: g.name,
      selected: g.name === n,
      click: () => a == null ? void 0 : a(g)
    },
    g.name
  )) }) });
};
const Gt = (e) => {
  if (e.totalPages <= 3 + 6 + 2)
    return /* @__PURE__ */ t("ul", { className: "pagination-numbers", children: Array(e.totalPages).fill(1).map((s, d) => s + d).map((s, d) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(s),
        className: s === e.currentPage ? "selected" : "",
        children: s
      },
      `page${s}`
    )) });
  const c = Array(3).fill(1).map((s, d) => s + d), u = Array(6).fill(
    e.currentPage - 3 <= 3 + 1 ? 3 + 1 : e.currentPage + 2 + Math.floor(6 / 2) >= e.totalPages ? e.totalPages - 6 - 3 + 1 : e.currentPage - Math.floor(6 / 2)
  ).map((s, d) => s + d), g = Array(2).fill(e.totalPages).map((s, d) => s - d);
  return /* @__PURE__ */ f("ul", { className: "pagination-numbers", children: [
    c.map((s, d) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(s),
        className: s === e.currentPage ? "selected" : "",
        children: s
      },
      `page${s}`
    )),
    e.currentPage - Math.floor(6 / 2) > 3 + 1 && /* @__PURE__ */ t("li", { children: "..." }),
    u.map((s, d) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(s),
        className: s === e.currentPage ? "selected" : "",
        children: s
      },
      `page${s}`
    )),
    e.totalPages - 2 - Math.floor(6 / 2) > e.currentPage && /* @__PURE__ */ t("li", { children: "..." }),
    g.reverse().map((s, d) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(s),
        className: s === e.currentPage ? "selected" : "",
        children: s
      },
      `page${s}`
    ))
  ] });
};
const ye = (e) => {
  const n = G(null), [a, l] = P(location.pathname), c = (u) => {
    var s;
    ((s = n.current) == null ? void 0 : s.contains(u.target)) || e(), l((d) => d !== location.pathname ? (e(), location.pathname) : d);
  };
  return ae(() => (window.addEventListener("click", c), () => {
    window.removeEventListener("click", c);
  }), []), {
    ref: n
  };
}, Ht = ({ title: e, children: n, border: a }) => {
  const l = a === void 0, [c, u] = P(!1), [g, s] = P("hidden"), { ref: d } = ye(() => {
    u(!1), s("hidden");
  }), v = () => {
    c && s("unset");
  };
  function _() {
    u((x) => !x), c && s("hidden");
  }
  return /* @__PURE__ */ f(
    "div",
    {
      className: `basic-accordion ${l ? "border" : ""}`,
      ref: d,
      style: { overflow: g },
      onTransitionEnd: v,
      children: [
        /* @__PURE__ */ f("div", { className: "header", onClick: _, children: [
          /* @__PURE__ */ t("span", { className: "title", children: e }),
          /* @__PURE__ */ t("div", { className: `icon ${c ? "slide" : ""}`, children: /* @__PURE__ */ t(j, { name: "Right", size: "medium", color: E.grey_111 }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `children ${c ? "slide" : ""}`, children: n })
      ]
    }
  );
};
const ir = ({
  itemLength: e,
  container: n,
  slide: a,
  currentIndex: l,
  clickLeft: c,
  clickRight: u,
  clickPoint: g,
  onTransitionEnd: s,
  onMouseEnter: d,
  onMouseLeave: v,
  onTouchStart: _,
  onTouchMove: x,
  onTouchEnd: R,
  children: y
}) => /* @__PURE__ */ f(
  "div",
  {
    className: "carousel",
    onMouseEnter: d,
    onMouseLeave: v,
    children: [
      /* @__PURE__ */ t("div", { className: "container", ref: n, children: /* @__PURE__ */ t(
        "div",
        {
          className: "slide-container",
          ref: a,
          onTransitionEnd: s,
          onTouchStart: _,
          onTouchMove: x,
          onTouchEnd: R,
          children: y
        }
      ) }),
      e >= 2 && /* @__PURE__ */ f(ee, { children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "left",
            onClick: c,
            children: /* @__PURE__ */ t(j, { name: "Right", size: "small", color: E.white })
          }
        ),
        /* @__PURE__ */ t("div", { className: "right", onClick: u, children: /* @__PURE__ */ t(j, { name: "Right", size: "small", color: E.white }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "progress", children: Array(e).fill(1).map((p, N) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress-point ${l === N + 1 ? "selected" : ""}`,
          onClick: () => g(N + 1)
        },
        N
      )) })
    ]
  }
), or = (e) => {
  const n = G(null), a = G(null), [l, c] = P(1), [u, g] = P(0);
  P(0);
  const s = () => {
    let y = l - 1;
    g(-1), a.current.style.transform = `translateX(-${y * 100}%)`, a.current.style.transition = "transform .3s linear";
  }, d = () => {
    if (!a.current)
      return;
    let y = l + 1;
    g(1), a.current.style.transform = `translateX(-${y * 100}%)`, a.current.style.transition = "transform .3s linear";
  };
  return {
    container: n,
    slide: a,
    currentIndex: l,
    clickLeft: s,
    clickRight: d,
    clickPoint: (y) => {
      y !== l && (a.current.style.transform = `translateX(-${y * 100}%)`, a.current.style.transition = "transform .3s linear", c(y));
    },
    touchMove: (y) => {
      y > 0 ? d() : s();
    },
    touchRecover: () => {
      a.current.style.transform = `translateX(-${l * 100}%)`, a.current.style.transition = "transform .15s linear";
    },
    onTransitionEnd: () => {
      u !== 0 && (u === 1 ? l === e ? (c(1), a.current.style.transform = "translateX(-100%)", a.current.style.transition = "none") : c((y) => y + 1) : l === 1 ? (c(e), c(e), a.current.style.transform = `translateX(-${e * 100}%)`, a.current.style.transition = "none") : c((y) => y - 1), g(0));
    }
  };
}, Ut = (e) => {
  const n = e.items.length, {
    container: a,
    slide: l,
    currentIndex: c,
    clickLeft: u,
    clickRight: g,
    clickPoint: s,
    onTransitionEnd: d
  } = or(n);
  return /* @__PURE__ */ t(
    ir,
    {
      container: a,
      slide: l,
      currentIndex: c,
      clickLeft: u,
      clickRight: g,
      clickPoint: s,
      onTransitionEnd: d,
      itemLength: n,
      children: /* @__PURE__ */ f(ee, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((v, _) => e.renderItems(v, _)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
}, Yt = (e) => {
  const n = e.items.length, [a, l] = P(), [c, u] = P(!1), g = G(), {
    container: s,
    slide: d,
    currentIndex: v,
    clickLeft: _,
    clickRight: x,
    clickPoint: R,
    touchMove: y,
    touchRecover: p,
    onTransitionEnd: N
  } = or(n);
  be(() => {
    const O = new IntersectionObserver(
      (z, H) => {
        z[0].isIntersecting ? u(!0) : u(!1);
      },
      {
        threshold: 0.1
      }
    );
    g.current = d.current.getBoundingClientRect().width;
    const I = d.current.parentElement;
    O.observe(I);
  }, []);
  const X = () => setInterval(() => {
    x();
  }, e.time);
  ae(() => {
    clearInterval(a), c && n >= 2 && l(X());
  }, [v, c]);
  const L = (O) => {
    O.preventDefault(), u(!1);
  }, w = G();
  return /* @__PURE__ */ t(
    ir,
    {
      container: s,
      slide: d,
      currentIndex: v,
      clickLeft: _,
      clickRight: x,
      clickPoint: R,
      onTransitionEnd: N,
      onMouseEnter: L,
      onMouseLeave: () => {
        u(!0);
      },
      itemLength: n,
      onTouchStart: (O) => {
        u(!1), w.current = O.changedTouches[0].pageX;
      },
      onTouchMove: (O) => {
        const I = O.changedTouches[0].pageX, z = w.current - I;
        if (Math.abs(z) > d.current.getBoundingClientRect().width / 1.5)
          return;
        let H;
        z > 0 ? H = `-${v * 100}% - ${Math.abs(z)}px` : H = `-${v * 100}% + ${Math.abs(z)}px`, d.current.style.transform = `translateX(calc(${H}))`;
      },
      onTouchEnd: (O) => {
        const I = g.current / 2.5, z = w.current - O.changedTouches[0].pageX;
        Math.abs(z) >= I ? y(z) : p(), setTimeout(() => {
          a && clearTimeout(a), u(!0);
        }, 2e3);
      },
      children: /* @__PURE__ */ f(ee, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((O, I) => e.renderItems(O, I)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
};
const Xt = ({ selected: e, children: n }) => {
  const [a, l] = P(!1), { ref: c } = ye(() => l(!1));
  return ae(() => {
    const u = setTimeout(() => {
      l(!1);
    }, 150);
    return () => {
      clearTimeout(u);
    };
  }, [e]), /* @__PURE__ */ f("div", { className: "dropdown", ref: c, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "dropdown-selected",
        onClick: () => l((u) => !u),
        children: e
      }
    ),
    zr(n, { open: a, selected: e })
  ] });
};
const qt = (e) => {
  const { ref: n } = ye(() => u()), [a, l] = P(!1), c = () => {
    l((d) => !d);
    const s = document.querySelector("body");
    a || (s.style.overflow = "hidden");
  }, u = () => {
    l((s) => {
      if (s) {
        const d = document.querySelector("body");
        d.style.overflow = "auto";
      }
      return !1;
    });
  }, g = {
    color: e.iconColor ?? E.grey_111,
    backgroundColor: e.backgroundColor ?? E.white
  };
  return /* @__PURE__ */ t(ee, { children: /* @__PURE__ */ f(
    "div",
    {
      className: `navigation ${e.fixed ? "fixed" : ""}`,
      style: g,
      ref: n,
      children: [
        /* @__PURE__ */ t(Tt, { ...e, openDrawer: c, children: e.children }),
        /* @__PURE__ */ f("div", { className: `navigation-drawer ${a && e.isMobile ? "show" : ""}`, children: [
          /* @__PURE__ */ t("div", { className: "navigation-drawer-close", onClick: u, children: /* @__PURE__ */ t(
            j,
            {
              name: "Close",
              size: "big",
              color: e.iconColor ?? E.grey_111
            }
          ) }),
          /* @__PURE__ */ t("div", { className: "navigation-drawer-items", children: e.children })
        ] }),
        a && e.isMobile && /* @__PURE__ */ t("div", { onClick: u, className: "navigation-overlay" })
      ]
    }
  ) });
};
const Zt = ({ opacity: e }) => /* @__PURE__ */ t(_e, { isOpen: !0, opacity: e, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const Jt = (e) => {
  const n = Array(8).fill(1).map((a, l) => a + l);
  return /* @__PURE__ */ f(
    "div",
    {
      className: "page-loading-container",
      style: { height: e.customHeight },
      children: [
        /* @__PURE__ */ t("div", { className: "page-loading-wrapper", children: n.map((a) => /* @__PURE__ */ t("div", { className: "loader" }, `loaderKey${a}`)) }),
        /* @__PURE__ */ t("div", { className: "text", children: e.text })
      ]
    }
  );
};
export {
  Yt as AutoCarousel,
  Ht as BasicAccordion,
  Ut as BasicCarousel,
  Xt as BasicDropDown,
  Ot as Button,
  zt as Card,
  St as CircularProgressBar,
  E as Colors,
  j as Element,
  $t as GroupCard,
  Tt as HeaderBar,
  Vt as InputBox,
  Zt as LoadingSpinner,
  qt as Navigation,
  Wt as Notification,
  Ft as OptionList,
  _e as OverLay,
  Jt as PageLoadingSpinner,
  Gt as PaginationNumbers,
  It as Popup,
  Dt as PopupBasicHeader,
  At as PopupDrawer,
  jt as PosterCard,
  Et as RatioCardImage,
  Bt as RatioImage,
  Pt as SelectedItem,
  Mt as SettingBar,
  pt as ToggleBar,
  ye as useCloseEvent
};
