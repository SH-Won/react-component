import me, { lazy as jr, Suspense as Or, useMemo as ge, useState as z, useRef as Y, useLayoutEffect as Be, useEffect as ve, cloneElement as $r } from "react";
var ee = {}, Nr = {
  get exports() {
    return ee;
  },
  set exports(e) {
    ee = e;
  }
}, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Mr() {
  if (Ve)
    return K;
  Ve = 1;
  var e = me, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, f = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(k, g, _) {
    var p, y = {}, T = null, w = null;
    _ !== void 0 && (T = "" + _), g.key !== void 0 && (T = "" + g.key), g.ref !== void 0 && (w = g.ref);
    for (p in g)
      s.call(g, p) && !u.hasOwnProperty(p) && (y[p] = g[p]);
    if (k && k.defaultProps)
      for (p in g = k.defaultProps, g)
        y[p] === void 0 && (y[p] = g[p]);
    return { $$typeof: n, type: k, key: T, ref: w, props: y, _owner: f.current };
  }
  return K.Fragment = a, K.jsx = d, K.jsxs = d, K;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fe;
function Dr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), k = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), T = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), M = Symbol.iterator, D = "@@iterator";
    function x(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = M && r[M] || r[D];
      return typeof i == "function" ? i : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(r) {
      {
        for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
          o[c - 1] = arguments[c];
        V("error", r, o);
      }
    }
    function V(r, i, o) {
      {
        var c = E.ReactDebugCurrentFrame, v = c.getStackAddendum();
        v !== "" && (i += "%s", o = o.concat([v]));
        var b = o.map(function(m) {
          return String(m);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, b);
      }
    }
    var j = !1, X = !1, q = !1, P = !1, A = !1, O;
    O = Symbol.for("react.module.reference");
    function G(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === s || r === u || A || r === f || r === _ || r === p || P || r === w || j || X || q || typeof r == "object" && r !== null && (r.$$typeof === T || r.$$typeof === y || r.$$typeof === d || r.$$typeof === k || r.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === O || r.getModuleId !== void 0));
    }
    function ar(r, i, o) {
      var c = r.displayName;
      if (c)
        return c;
      var v = i.displayName || i.name || "";
      return v !== "" ? o + "(" + v + ")" : o;
    }
    function _e(r) {
      return r.displayName || "Context";
    }
    function I(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case u:
          return "Profiler";
        case f:
          return "StrictMode";
        case _:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case k:
            var i = r;
            return _e(i) + ".Consumer";
          case d:
            var o = r;
            return _e(o._context) + ".Provider";
          case g:
            return ar(r, r.render, "ForwardRef");
          case y:
            var c = r.displayName || null;
            return c !== null ? c : I(r.type) || "Memo";
          case T: {
            var v = r, b = v._payload, m = v._init;
            try {
              return I(m(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, Z = 0, ye, ke, we, Ce, pe, Re, xe;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function sr() {
      {
        if (Z === 0) {
          ye = console.log, ke = console.info, we = console.warn, Ce = console.error, pe = console.group, Re = console.groupCollapsed, xe = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Se,
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
        Z++;
      }
    }
    function cr() {
      {
        if (Z--, Z === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, r, {
              value: ye
            }),
            info: B({}, r, {
              value: ke
            }),
            warn: B({}, r, {
              value: we
            }),
            error: B({}, r, {
              value: Ce
            }),
            group: B({}, r, {
              value: pe
            }),
            groupCollapsed: B({}, r, {
              value: Re
            }),
            groupEnd: B({}, r, {
              value: xe
            })
          });
        }
        Z < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = E.ReactCurrentDispatcher, se;
    function re(r, i, o) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (v) {
            var c = v.stack.trim().match(/\n( *(at )?)/);
            se = c && c[1] || "";
          }
        return `
` + se + r;
      }
    }
    var ce = !1, te;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      te = new lr();
    }
    function Ee(r, i) {
      if (!r || ce)
        return "";
      {
        var o = te.get(r);
        if (o !== void 0)
          return o;
      }
      var c;
      ce = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = ae.current, ae.current = null, sr();
      try {
        if (i) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (W) {
              c = W;
            }
            Reflect.construct(r, [], m);
          } else {
            try {
              m.call();
            } catch (W) {
              c = W;
            }
            r.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            c = W;
          }
          r();
        }
      } catch (W) {
        if (W && c && typeof W.stack == "string") {
          for (var h = W.stack.split(`
`), L = c.stack.split(`
`), R = h.length - 1, S = L.length - 1; R >= 1 && S >= 0 && h[R] !== L[S]; )
            S--;
          for (; R >= 1 && S >= 0; R--, S--)
            if (h[R] !== L[S]) {
              if (R !== 1 || S !== 1)
                do
                  if (R--, S--, S < 0 || h[R] !== L[S]) {
                    var $ = `
` + h[R].replace(" at new ", " at ");
                    return r.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", r.displayName)), typeof r == "function" && te.set(r, $), $;
                  }
                while (R >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ae.current = b, cr(), Error.prepareStackTrace = v;
      }
      var U = r ? r.displayName || r.name : "", We = U ? re(U) : "";
      return typeof r == "function" && te.set(r, We), We;
    }
    function ur(r, i, o) {
      return Ee(r, !1);
    }
    function dr(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function ne(r, i, o) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ee(r, dr(r));
      if (typeof r == "string")
        return re(r);
      switch (r) {
        case _:
          return re("Suspense");
        case p:
          return re("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case g:
            return ur(r.render);
          case y:
            return ne(r.type, i, o);
          case T: {
            var c = r, v = c._payload, b = c._init;
            try {
              return ne(b(v), i, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, Le = {}, Te = E.ReactDebugCurrentFrame;
    function oe(r) {
      if (r) {
        var i = r._owner, o = ne(r.type, r._source, i ? i.type : null);
        Te.setExtraStackFrame(o);
      } else
        Te.setExtraStackFrame(null);
    }
    function fr(r, i, o, c, v) {
      {
        var b = Function.call.bind(ie);
        for (var m in r)
          if (b(r, m)) {
            var h = void 0;
            try {
              if (typeof r[m] != "function") {
                var L = Error((c || "React class") + ": " + o + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              h = r[m](i, m, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              h = R;
            }
            h && !(h instanceof Error) && (oe(v), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, m, typeof h), oe(null)), h instanceof Error && !(h.message in Le) && (Le[h.message] = !0, oe(v), C("Failed %s type: %s", o, h.message), oe(null));
          }
      }
    }
    var hr = Array.isArray;
    function le(r) {
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
        return Pe(r), !1;
      } catch {
        return !0;
      }
    }
    function Pe(r) {
      return "" + r;
    }
    function ze(r) {
      if (mr(r))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(r)), Pe(r);
    }
    var J = E.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Oe, ue;
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
      if (typeof r.ref == "string" && J.current && i && J.current.stateNode !== i) {
        var o = I(J.current.type);
        ue[o] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(J.current.type), r.ref), ue[o] = !0);
      }
    }
    function kr(r, i) {
      {
        var o = function() {
          je || (je = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
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
          Oe || (Oe = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Cr = function(r, i, o, c, v, b, m) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: o,
        props: m,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function pr(r, i, o, c, v) {
      {
        var b, m = {}, h = null, L = null;
        o !== void 0 && (ze(o), h = "" + o), _r(i) && (ze(i.key), h = "" + i.key), br(i) && (L = i.ref, yr(i, v));
        for (b in i)
          ie.call(i, b) && !vr.hasOwnProperty(b) && (m[b] = i[b]);
        if (r && r.defaultProps) {
          var R = r.defaultProps;
          for (b in R)
            m[b] === void 0 && (m[b] = R[b]);
        }
        if (h || L) {
          var S = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          h && kr(m, S), L && wr(m, S);
        }
        return Cr(r, h, L, v, c, J.current, m);
      }
    }
    var de = E.ReactCurrentOwner, $e = E.ReactDebugCurrentFrame;
    function H(r) {
      if (r) {
        var i = r._owner, o = ne(r.type, r._source, i ? i.type : null);
        $e.setExtraStackFrame(o);
      } else
        $e.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function he(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function Ne() {
      {
        if (de.current) {
          var r = I(de.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Rr(r) {
      {
        if (r !== void 0) {
          var i = r.fileName.replace(/^.*[\\\/]/, ""), o = r.lineNumber;
          return `

Check your code at ` + i + ":" + o + ".";
        }
        return "";
      }
    }
    var Me = {};
    function xr(r) {
      {
        var i = Ne();
        if (!i) {
          var o = typeof r == "string" ? r : r.displayName || r.name;
          o && (i = `

Check the top-level render call using <` + o + ">.");
        }
        return i;
      }
    }
    function De(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var o = xr(i);
        if (Me[o])
          return;
        Me[o] = !0;
        var c = "";
        r && r._owner && r._owner !== de.current && (c = " It was passed a child from " + I(r._owner.type) + "."), H(r), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), H(null);
      }
    }
    function Ae(r, i) {
      {
        if (typeof r != "object")
          return;
        if (le(r))
          for (var o = 0; o < r.length; o++) {
            var c = r[o];
            he(c) && De(c, i);
          }
        else if (he(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var v = x(r);
          if (typeof v == "function" && v !== r.entries)
            for (var b = v.call(r), m; !(m = b.next()).done; )
              he(m.value) && De(m.value, i);
        }
      }
    }
    function Sr(r) {
      {
        var i = r.type;
        if (i == null || typeof i == "string")
          return;
        var o;
        if (typeof i == "function")
          o = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === y))
          o = i.propTypes;
        else
          return;
        if (o) {
          var c = I(i);
          fr(o, r.props, "prop", c, r);
        } else if (i.PropTypes !== void 0 && !fe) {
          fe = !0;
          var v = I(i);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(r) {
      {
        for (var i = Object.keys(r.props), o = 0; o < i.length; o++) {
          var c = i[o];
          if (c !== "children" && c !== "key") {
            H(r), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), H(null);
            break;
          }
        }
        r.ref !== null && (H(r), C("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function Ie(r, i, o, c, v, b) {
      {
        var m = G(r);
        if (!m) {
          var h = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Rr(v);
          L ? h += L : h += Ne();
          var R;
          r === null ? R = "null" : le(r) ? R = "array" : r !== void 0 && r.$$typeof === n ? (R = "<" + (I(r.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : R = typeof r, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, h);
        }
        var S = pr(r, i, o, v, b);
        if (S == null)
          return S;
        if (m) {
          var $ = i.children;
          if ($ !== void 0)
            if (c)
              if (le($)) {
                for (var U = 0; U < $.length; U++)
                  Ae($[U], r);
                Object.freeze && Object.freeze($);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae($, r);
        }
        return r === s ? Er(S) : Sr(S), S;
      }
    }
    function Lr(r, i, o) {
      return Ie(r, i, o, !0);
    }
    function Tr(r, i, o) {
      return Ie(r, i, o, !1);
    }
    var Pr = Tr, zr = Lr;
    Q.Fragment = s, Q.jsx = Pr, Q.jsxs = zr;
  }()), Q;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Mr() : e.exports = Dr();
})(Nr);
const be = ee.Fragment, t = ee.jsx, l = ee.jsxs, Ar = "#6440dd", Ir = "#5934D8", Wr = "#F5222D", Vr = "#111111", Fr = "#666666", Br = "#333333", Gr = "#999999", Hr = "#bbbbbb", Ur = "#cccccc", Yr = "#f4f4f4", Xr = "#f5f6f8", qr = "#f2f4f7", Zr = "#dbd6eb", Jr = "#eeebff", Kr = "#b6b7b9", Qr = "#e7e9ef", et = "#cfd4dd", rt = "#d42a21", tt = "#1968e5", nt = "#27c4b8", it = "#fff", ot = "#f4f0ff", at = "#ABAEBF", st = "#03c75a", ct = "#e1a016", lt = "#da1c26", N = {
  main: Ar,
  main_sub: Ir,
  notice: Wr,
  grey_111: Vr,
  grey_666: Fr,
  grey_333: Br,
  grey_999: Gr,
  grey_bbb: Hr,
  grey_ccc: Ur,
  grey_f4: Yr,
  bg_main: Xr,
  bg_noti: qr,
  bg_disable: Zr,
  bg_sub: Jr,
  bg_trans: Kr,
  line_01: Qr,
  line_02: et,
  plus: rt,
  minus: tt,
  code: nt,
  white: it,
  option_hover: ot,
  m_gnb_normal: at,
  green: st,
  orange: ct,
  red: lt
}, ut = (e, n) => {
  const a = e[n];
  return a ? typeof a == "function" ? a() : Promise.resolve(a) : new Promise((s, f) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(f.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
}, Ge = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
}, dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), He = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: He
}, Symbol.toStringTag, { value: "Module" })), Ue = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ue
}, Symbol.toStringTag, { value: "Module" })), Ye = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye
}, Symbol.toStringTag, { value: "Module" })), Xe = (e) => {
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
}, mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe
}, Symbol.toStringTag, { value: "Module" })), qe = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ l("g", { id: "Arrow / Arrow_Sub_Down_Right", children: [
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
}, vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe
}, Symbol.toStringTag, { value: "Module" })), Ze = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ze
}, Symbol.toStringTag, { value: "Module" })), Je = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Je
}, Symbol.toStringTag, { value: "Module" })), Ke = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), Qe = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, { value: "Module" })), er = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" })), rr = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" })), F = (e) => {
  const n = () => {
    switch (e.name) {
      case "Adult":
        return /* @__PURE__ */ t(Ge, { ...e });
      case "ArrowLeft":
        return /* @__PURE__ */ t(He, { ...e });
      case "Caution":
        return /* @__PURE__ */ t(Ue, { ...e });
      case "Check":
        return /* @__PURE__ */ t(Ye, { ...e });
      case "Close":
        return /* @__PURE__ */ t(Xe, { ...e });
      case "Depth":
        return /* @__PURE__ */ t(qe, { ...e });
      case "Gear":
        return /* @__PURE__ */ t(Ze, { ...e });
      case "Hamburger":
        return /* @__PURE__ */ t(Je, { ...e });
      case "Plus":
        return /* @__PURE__ */ t(Ke, { ...e });
      case "Right":
        return /* @__PURE__ */ t(Qe, { ...e });
      case "Search":
        return /* @__PURE__ */ t(er, { ...e });
      case "Setting":
        return /* @__PURE__ */ t(rr, { ...e });
      default:
        return null;
    }
  }, a = () => e.size === "big" ? "30px" : e.size === "medium" ? "24px" : "20px";
  return jr(() => ut(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => dt), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => ft), "./icons/Caution.tsx": () => Promise.resolve().then(() => ht), "./icons/Check.tsx": () => Promise.resolve().then(() => gt), "./icons/Close.tsx": () => Promise.resolve().then(() => mt), "./icons/Depth.tsx": () => Promise.resolve().then(() => vt), "./icons/Gear.tsx": () => Promise.resolve().then(() => bt), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => _t), "./icons/Plus.tsx": () => Promise.resolve().then(() => yt), "./icons/Right.tsx": () => Promise.resolve().then(() => kt), "./icons/Search.tsx": () => Promise.resolve().then(() => wt), "./icons/Setting.tsx": () => Promise.resolve().then(() => Ct) }), `./icons/${e.name}.tsx`)), /* @__PURE__ */ t(Or, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: a(), display: "inline-block" }, children: n() }) });
};
const Lt = (e) => {
  const n = typeof e.back == "function", a = e.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ l("div", { className: a, children: [
    /* @__PURE__ */ l("div", { className: "logo", children: [
      n && /* @__PURE__ */ t("div", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(F, { name: "ArrowLeft", size: "big", color: N.grey_111 }) }),
      /* @__PURE__ */ t("span", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !0);
      }, children: e.title })
    ] }),
    e.children
  ] });
};
const pt = (e) => {
  const n = e.size / 14, a = {
    width: e.size + "px",
    height: e.size + "px",
    borderRadius: e.size + n / 1.5 + "px",
    padding: n / 1.5 + "px"
  }, s = {
    borderRadius: e.size + "px"
  }, f = e.percent >= 50 ? 18 * (e.percent - 50) / 5 : 0, u = e.percent <= 50 ? 18 * (e.percent / 5) : 180, d = e.percent < 50 ? N.red : e.percent < 75 ? N.orange : N.green, k = {
    border: `${n}px solid ${d}`,
    borderTopRightRadius: e.size + "px",
    borderBottomRightRadius: e.size + "px",
    transform: `rotate(${f}deg)`
  }, g = {
    border: `${n}px solid ${d}`,
    borderTopLeftRadius: e.size + "px",
    borderBottomLeftRadius: e.size + "px",
    transform: `rotate(${u}deg)`
  }, _ = {
    fontSize: e.size / 4 + "px",
    borderRadius: e.size - n * 2 + "px",
    width: e.size - n * 2 + "px",
    height: e.size - n * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: a, children: /* @__PURE__ */ l("div", { className: "circular-progress-bar", style: s, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: k }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: g }) }),
    /* @__PURE__ */ l("div", { className: "percent", style: _, children: [
      e.percent,
      "%"
    ] })
  ] }) });
};
const Tt = ({
  initialCount: e,
  width: n,
  onSelect: a,
  count: s,
  magnification: f
}) => {
  const u = ge(() => Array(s + 1).fill(1).map((x, E) => ({
    order: E,
    value: E * f,
    key: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString()
  })), [s]), d = u.length, [k, g] = z(), [_, p] = z(0), [y, T] = z(u[e ?? 0]), w = (x) => {
    T(x), a == null || a(x);
  }, M = Y(null), D = () => {
    var q;
    const x = (q = M.current) == null ? void 0 : q.getBoundingClientRect().width;
    let C = (x - u.length * _) / (u.length - 1) * y.order + _ * y.order;
    const V = 100 / (d - 1);
    y.order !== 0 && (C += _ / 2);
    const j = x * V * y.order / 100 - C;
    let X = `${V * y.order}%`;
    return X += j >= 0 ? ` - ${j}px` : ` + ${Math.abs(j)}px`, {
      // width: `${calc}px`,
      width: `calc(${X})`
    };
  };
  return Be(() => {
    var V;
    const x = M.current.getBoundingClientRect().width, E = (V = M.current.parentElement) == null ? void 0 : V.getBoundingClientRect(), C = 2 * E.width - (E.right + E.left);
    if (n) {
      const j = n / d;
      p(j >= 30 ? 30 : j);
    } else {
      const j = x / d;
      p(j >= 30 ? 30 : j);
    }
    g(C);
  }, [n]), /* @__PURE__ */ l("div", { style: { width: n, height: _ * 2 }, className: "setting-bar-wrapper", children: [
    /* @__PURE__ */ l("div", { className: "setting-bar", ref: M, children: [
      u.map((x, E) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress ${x.order === y.order ? "selected" : ""}`,
          style: { width: _ },
          onClick: () => w(x),
          children: /* @__PURE__ */ t(
            "div",
            {
              className: `point ${x.order < y.order ? "selected" : ""}`
            }
          )
        },
        x.key
      )),
      /* @__PURE__ */ t(
        "div",
        {
          className: `user-progress ${y.order === d - 1 ? "end" : ""}`,
          style: D()
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "setting-explain", children: u.map((x, E) => /* @__PURE__ */ t(
      "span",
      {
        className: E === y.order ? "selected" : "",
        children: x.value
      },
      x.key
    )) })
  ] });
};
const Pt = (e) => /* @__PURE__ */ t(
  "div",
  {
    className: "common-button",
    style: (() => e.disable ? {
      backgroundColor: N.bg_disable,
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
const jt = (e) => /* @__PURE__ */ l("div", { className: "group-card", children: [
  e.isSub && /* @__PURE__ */ t(F, { name: "Depth", size: "medium", color: N.grey_111 }),
  /* @__PURE__ */ l("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: e.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: e.label }) })
  ] })
] });
const tr = (e) => {
  const n = {
    backgroundColor: `rgba(0,0,0,${e.opacity})`
  };
  return /* @__PURE__ */ t(me.Fragment, { children: e.isOpen && /* @__PURE__ */ t("div", { className: "overlay", style: n, children: e.children }) });
};
const Ot = ({ opacity: e }) => /* @__PURE__ */ t(tr, { isOpen: !0, opacity: e, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const Rt = (e) => {
  const n = Array(8).fill(1).map((a, s) => a + s);
  return /* @__PURE__ */ l(
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
}, nr = (e) => {
  const n = Y(null), a = (s) => {
    var u;
    ((u = n.current) == null ? void 0 : u.contains(s.target)) || e();
  };
  return ve(() => (window.addEventListener("click", a), () => {
    window.removeEventListener("click", a);
  }), []), {
    ref: n
  };
};
const xt = (e) => {
  const [n, a] = z(!0), s = e.ratio * 100 + "%";
  return /* @__PURE__ */ l(
    "div",
    {
      className: "image-wrapper",
      style: { paddingTop: s },
      onClick: () => {
        var f;
        return (f = e.click) == null ? void 0 : f.call(e);
      },
      children: [
        /* @__PURE__ */ t(
          "img",
          {
            src: e.imageUrl,
            loading: e.eager ? "eager" : "lazy",
            onLoad: () => a(!1)
          }
        ),
        n && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(Rt, { customHeight: "100%" }) })
      ]
    }
  );
}, $t = (e) => {
  const n = e.ratio ? e.ratio : 1;
  return /* @__PURE__ */ l("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(xt, { ratio: n, imageUrl: e.imageUrl, click: e.click }),
    /* @__PURE__ */ l("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(pt, { percent: e.voteAverage, size: 34 }) }),
      /* @__PURE__ */ t("span", { className: "title", children: e.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: e.releaseDate })
    ] })
  ] });
};
const Nt = (e) => /* @__PURE__ */ t(tr, { isOpen: e.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${e.isMobile ? "mobile" : ""}`, children: e.children }) });
const Mt = (e) => {
  const n = e.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ l("div", { className: "popup-header-container", style: n, children: [
    /* @__PURE__ */ l("div", { className: "popup-header", children: [
      e.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.back, children: /* @__PURE__ */ t(F, { name: "ArrowLeft", size: "big", color: N.grey_999 }) }),
      e.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: e.title }) }),
      e.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.close, children: /* @__PURE__ */ t(F, { name: "Close", size: "big", color: N.grey_999 }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "popup-header-progress", children: e.maxProgress && Array(e.maxProgress).fill(1).map((a, s) => /* @__PURE__ */ t(
      "span",
      {
        className: `${s + a === e.progress ? "selected" : ""}`
      },
      `progress${s}`
    )) })
  ] });
};
const Dt = (e) => /* @__PURE__ */ l("div", { className: "notification", children: [
  e.children,
  /* @__PURE__ */ l("div", { className: "info", style: { height: e.height }, children: [
    /* @__PURE__ */ t(F, { name: "Caution", size: "small", color: N.grey_bbb }),
    /* @__PURE__ */ t("span", { children: e.text })
  ] })
] });
const At = (e) => {
  const n = `${e.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: n }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: e.imageUrl }) });
};
const It = (e) => {
  const n = e.type ?? "text", [a, s] = z(!1), f = ge(() => {
    let d = "";
    return (a || e.searchText) && (d += " focus"), e.screen === "mobile" && (d += " mobile"), d;
  }, [a, e.screen]), u = ge(() => {
    var k;
    let d = f;
    return typeof e.validator == "function" && !((k = e.validator) != null && k.call(e, e.searchText)) && (d += " error"), d;
  }, [f, e.searchText]);
  return /* @__PURE__ */ l("div", { className: "input-wrapper" + u, children: [
    e.children,
    /* @__PURE__ */ t(
      "input",
      {
        type: n,
        className: "input-search",
        onChange: e.onChange,
        placeholder: e.placeholder,
        value: e.searchText,
        onFocus: () => s(!0),
        onBlur: () => s(!1)
      }
    )
  ] });
};
const St = (e) => {
  const n = e.size ?? "medium", a = e.selected ? "selected" : "";
  return /* @__PURE__ */ t("div", { className: `selected-item ${n} ${a}`, onClick: e.click, children: e.text });
}, Wt = ({
  items: e,
  selected: n,
  click: a,
  open: s,
  itemSize: f
}) => {
  const u = f ?? "medium";
  return /* @__PURE__ */ t("div", { className: `option-list ${s ? "slide" : ""}`, children: /* @__PURE__ */ t("div", { className: "option-items", children: e.map((d) => /* @__PURE__ */ t(
    St,
    {
      size: u,
      text: d.name,
      selected: d.name === n,
      click: () => a == null ? void 0 : a(d)
    },
    d.name
  )) }) });
};
const Vt = ({ title: e, children: n }) => {
  const [a, s] = z(!1), [f, u] = z("hidden"), { ref: d } = nr(() => {
    s(!1), u("hidden");
  }), k = () => {
    a && u("unset");
  };
  function g() {
    s((_) => !_), a && u("hidden");
  }
  return /* @__PURE__ */ l(
    "div",
    {
      className: "basic-accordion",
      ref: d,
      style: { overflow: f },
      onTransitionEnd: k,
      children: [
        /* @__PURE__ */ l("div", { className: "header", onClick: g, children: [
          /* @__PURE__ */ t("span", { className: "title", children: e }),
          /* @__PURE__ */ t("div", { className: `icon ${a ? "slide" : ""}`, children: /* @__PURE__ */ t(F, { name: "Right", size: "medium", color: N.grey_111 }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `children ${a ? "slide" : ""}`, children: n })
      ]
    }
  );
};
const ir = ({
  itemLength: e,
  container: n,
  slide: a,
  currentIndex: s,
  clickLeft: f,
  clickRight: u,
  clickPoint: d,
  onTransitionEnd: k,
  onMouseEnter: g,
  onMouseLeave: _,
  onTouchStart: p,
  onTouchMove: y,
  onTouchEnd: T,
  children: w
}) => /* @__PURE__ */ l(
  "div",
  {
    className: "carousel",
    onMouseEnter: g,
    onMouseLeave: _,
    children: [
      /* @__PURE__ */ t("div", { className: "container", ref: n, children: /* @__PURE__ */ t(
        "div",
        {
          className: "slide-container",
          ref: a,
          onTransitionEnd: k,
          onTouchStart: p,
          onTouchMove: y,
          onTouchEnd: T,
          children: w
        }
      ) }),
      e >= 2 && /* @__PURE__ */ l(be, { children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "left",
            onClick: f,
            children: /* @__PURE__ */ t(F, { name: "Right", size: "small", color: N.white })
          }
        ),
        /* @__PURE__ */ t("div", { className: "right", onClick: u, children: /* @__PURE__ */ t(F, { name: "Right", size: "small", color: N.white }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "progress", children: Array(e).fill(1).map((M, D) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress-point ${s === D + 1 ? "selected" : ""}`,
          onClick: () => d(D + 1)
        },
        D
      )) })
    ]
  }
), or = (e) => {
  const n = Y(null), a = Y(null), [s, f] = z(1), [u, d] = z(0);
  z(0);
  const k = () => {
    let w = s - 1;
    d(-1), a.current.style.transform = `translateX(-${w * 100}%)`, a.current.style.transition = "transform .3s linear";
  }, g = () => {
    if (!a.current)
      return;
    let w = s + 1;
    d(1), a.current.style.transform = `translateX(-${w * 100}%)`, a.current.style.transition = "transform .3s linear";
  };
  return {
    container: n,
    slide: a,
    currentIndex: s,
    clickLeft: k,
    clickRight: g,
    clickPoint: (w) => {
      w !== s && (a.current.style.transform = `translateX(-${w * 100}%)`, a.current.style.transition = "transform .3s linear", f(w));
    },
    touchMove: (w) => {
      w > 0 ? g() : k();
    },
    touchRecover: () => {
      a.current.style.transform = `translateX(-${s * 100}%)`, a.current.style.transition = "transform .15s linear";
    },
    onTransitionEnd: () => {
      u !== 0 && (u === 1 ? s === e ? (f(1), a.current.style.transform = "translateX(-100%)", a.current.style.transition = "none") : f((w) => w + 1) : s === 1 ? (f(e), f(e), a.current.style.transform = `translateX(-${e * 100}%)`, a.current.style.transition = "none") : f((w) => w - 1), d(0));
    }
  };
}, Ft = (e) => {
  const n = e.items.length, {
    container: a,
    slide: s,
    currentIndex: f,
    clickLeft: u,
    clickRight: d,
    clickPoint: k,
    onTransitionEnd: g
  } = or(n);
  return /* @__PURE__ */ t(
    ir,
    {
      container: a,
      slide: s,
      currentIndex: f,
      clickLeft: u,
      clickRight: d,
      clickPoint: k,
      onTransitionEnd: g,
      itemLength: n,
      children: /* @__PURE__ */ l(be, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((_, p) => e.renderItems(_, p)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
}, Bt = (e) => {
  const n = e.items.length, [a, s] = z(), [f, u] = z(!1), d = Y(), {
    container: k,
    slide: g,
    currentIndex: _,
    clickLeft: p,
    clickRight: y,
    clickPoint: T,
    touchMove: w,
    touchRecover: M,
    onTransitionEnd: D
  } = or(n);
  Be(() => {
    const P = new IntersectionObserver(
      (O, G) => {
        O[0].isIntersecting ? u(!0) : u(!1);
      },
      {
        threshold: 0.1
      }
    );
    d.current = g.current.getBoundingClientRect().width;
    const A = g.current.parentElement;
    P.observe(A);
  }, []);
  const x = () => setInterval(() => {
    y();
  }, e.time);
  ve(() => {
    clearInterval(a), f && n >= 2 && s(x());
  }, [_, f]);
  const E = (P) => {
    P.preventDefault(), console.log("mouse enter"), u(!1);
  }, C = Y();
  return /* @__PURE__ */ t(
    ir,
    {
      container: k,
      slide: g,
      currentIndex: _,
      clickLeft: p,
      clickRight: y,
      clickPoint: T,
      onTransitionEnd: D,
      onMouseEnter: E,
      onMouseLeave: () => {
        console.log("mouse leave"), u(!0);
      },
      itemLength: n,
      onTouchStart: (P) => {
        console.log("touch start"), u(!1), C.current = P.changedTouches[0].pageX;
      },
      onTouchMove: (P) => {
        const A = P.changedTouches[0].pageX, O = C.current - A;
        if (Math.abs(O) > g.current.getBoundingClientRect().width / 1.5)
          return;
        let G;
        O > 0 ? G = `-${_ * 100}% - ${Math.abs(O)}px` : G = `-${_ * 100}% + ${Math.abs(O)}px`, g.current.style.transform = `translateX(calc(${G}))`;
      },
      onTouchEnd: (P) => {
        console.log("touch end");
        const A = d.current / 2.5, O = C.current - P.changedTouches[0].pageX;
        Math.abs(O) >= A ? w(O) : M(), setTimeout(() => {
          a && clearTimeout(a), u(!0);
        }, 2e3);
      },
      children: /* @__PURE__ */ l(be, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((P, A) => e.renderItems(P, A)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
};
const Gt = ({ selected: e, children: n }) => {
  const [a, s] = z(!1), { ref: f } = nr(() => s(!1));
  return ve(() => {
    const u = setTimeout(() => {
      s(!1);
    }, 150);
    return () => {
      clearTimeout(u);
    };
  }, [e]), /* @__PURE__ */ l("div", { className: "dropdown", ref: f, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "dropdown-selected",
        onClick: () => s((u) => !u),
        children: e
      }
    ),
    $r(n, { open: a, selected: e })
  ] });
};
export {
  Bt as AutoCarousel,
  Vt as BasicAccordion,
  Ft as BasicCarousel,
  Gt as BasicDropDown,
  Pt as Button,
  zt as Card,
  pt as CircularProgressBar,
  N as Colors,
  F as Element,
  jt as GroupCard,
  Lt as HeaderBar,
  It as InputBox,
  Ot as LoadingSpinner,
  Dt as Notification,
  Wt as OptionList,
  tr as OverLay,
  Rt as PageLoadingSpinner,
  Nt as Popup,
  Mt as PopupBasicHeader,
  $t as PosterCard,
  xt as RatioCardImage,
  At as RatioImage,
  St as SelectedItem,
  Tt as SettingBar,
  nr as useCloseEvent
};
