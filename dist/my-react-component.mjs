import me, { lazy as jr, Suspense as Or, useMemo as ge, useState as P, useRef as Y, useLayoutEffect as Be, useEffect as oe, cloneElement as Nr } from "react";
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
var Ve;
function Mr() {
  if (Ve)
    return J;
  Ve = 1;
  var e = me, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, d = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(_, m, p) {
    var k, E = {}, x = null, w = null;
    p !== void 0 && (x = "" + p), m.key !== void 0 && (x = "" + m.key), m.ref !== void 0 && (w = m.ref);
    for (k in m)
      s.call(m, k) && !l.hasOwnProperty(k) && (E[k] = m[k]);
    if (_ && _.defaultProps)
      for (k in m = _.defaultProps, m)
        E[k] === void 0 && (E[k] = m[k]);
    return { $$typeof: n, type: _, key: x, ref: w, props: E, _owner: d.current };
  }
  return J.Fragment = a, J.jsx = f, J.jsxs = f, J;
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
var Fe;
function Dr() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), _ = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), V = Symbol.iterator, z = "@@iterator";
    function X(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = V && r[V] || r[z];
      return typeof i == "function" ? i : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(r) {
      {
        for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
          o[c - 1] = arguments[c];
        F("error", r, o);
      }
    }
    function F(r, i, o) {
      {
        var c = C.ReactDebugCurrentFrame, v = c.getStackAddendum();
        v !== "" && (i += "%s", o = o.concat([v]));
        var y = o.map(function(g) {
          return String(g);
        });
        y.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, y);
      }
    }
    var A = !1, W = !1, be = !1, T = !1, $ = !1, j;
    j = Symbol.for("react.module.reference");
    function G(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === s || r === l || $ || r === d || r === p || r === k || T || r === w || A || W || be || typeof r == "object" && r !== null && (r.$$typeof === x || r.$$typeof === E || r.$$typeof === f || r.$$typeof === _ || r.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === j || r.getModuleId !== void 0));
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
    function M(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case d:
          return "StrictMode";
        case p:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case _:
            var i = r;
            return _e(i) + ".Consumer";
          case f:
            var o = r;
            return _e(o._context) + ".Provider";
          case m:
            return ar(r, r.render, "ForwardRef");
          case E:
            var c = r.displayName || null;
            return c !== null ? c : M(r.type) || "Memo";
          case x: {
            var v = r, y = v._payload, g = v._init;
            try {
              return M(g(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, q = 0, ye, ke, we, Ce, pe, Re, xe;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function sr() {
      {
        if (q === 0) {
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
        q++;
      }
    }
    function cr() {
      {
        if (q--, q === 0) {
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
        q < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = C.ReactCurrentDispatcher, se;
    function ee(r, i, o) {
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
    var ce = !1, re;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      re = new lr();
    }
    function Ee(r, i) {
      if (!r || ce)
        return "";
      {
        var o = re.get(r);
        if (o !== void 0)
          return o;
      }
      var c;
      ce = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ae.current, ae.current = null, sr();
      try {
        if (i) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (D) {
              c = D;
            }
            Reflect.construct(r, [], g);
          } else {
            try {
              g.call();
            } catch (D) {
              c = D;
            }
            r.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (D) {
            c = D;
          }
          r();
        }
      } catch (D) {
        if (D && c && typeof D.stack == "string") {
          for (var h = D.stack.split(`
`), L = c.stack.split(`
`), R = h.length - 1, S = L.length - 1; R >= 1 && S >= 0 && h[R] !== L[S]; )
            S--;
          for (; R >= 1 && S >= 0; R--, S--)
            if (h[R] !== L[S]) {
              if (R !== 1 || S !== 1)
                do
                  if (R--, S--, S < 0 || h[R] !== L[S]) {
                    var O = `
` + h[R].replace(" at new ", " at ");
                    return r.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", r.displayName)), typeof r == "function" && re.set(r, O), O;
                  }
                while (R >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        ce = !1, ae.current = y, cr(), Error.prepareStackTrace = v;
      }
      var U = r ? r.displayName || r.name : "", Ie = U ? ee(U) : "";
      return typeof r == "function" && re.set(r, Ie), Ie;
    }
    function ur(r, i, o) {
      return Ee(r, !1);
    }
    function dr(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function te(r, i, o) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ee(r, dr(r));
      if (typeof r == "string")
        return ee(r);
      switch (r) {
        case p:
          return ee("Suspense");
        case k:
          return ee("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            return ur(r.render);
          case E:
            return te(r.type, i, o);
          case x: {
            var c = r, v = c._payload, y = c._init;
            try {
              return te(y(v), i, o);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Le = {}, Te = C.ReactDebugCurrentFrame;
    function ie(r) {
      if (r) {
        var i = r._owner, o = te(r.type, r._source, i ? i.type : null);
        Te.setExtraStackFrame(o);
      } else
        Te.setExtraStackFrame(null);
    }
    function fr(r, i, o, c, v) {
      {
        var y = Function.call.bind(ne);
        for (var g in r)
          if (y(r, g)) {
            var h = void 0;
            try {
              if (typeof r[g] != "function") {
                var L = Error((c || "React class") + ": " + o + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw L.name = "Invariant Violation", L;
              }
              h = r[g](i, g, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              h = R;
            }
            h && !(h instanceof Error) && (ie(v), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, g, typeof h), ie(null)), h instanceof Error && !(h.message in Le) && (Le[h.message] = !0, ie(v), b("Failed %s type: %s", o, h.message), ie(null));
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
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(r)), Pe(r);
    }
    var Z = C.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, je, Oe, ue;
    ue = {};
    function br(r) {
      if (ne.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function _r(r) {
      if (ne.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function yr(r, i) {
      if (typeof r.ref == "string" && Z.current && i && Z.current.stateNode !== i) {
        var o = M(Z.current.type);
        ue[o] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(Z.current.type), r.ref), ue[o] = !0);
      }
    }
    function kr(r, i) {
      {
        var o = function() {
          je || (je = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
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
          Oe || (Oe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Cr = function(r, i, o, c, v, y, g) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: o,
        props: g,
        // Record the component responsible for creating this element.
        _owner: y
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
        var y, g = {}, h = null, L = null;
        o !== void 0 && (ze(o), h = "" + o), _r(i) && (ze(i.key), h = "" + i.key), br(i) && (L = i.ref, yr(i, v));
        for (y in i)
          ne.call(i, y) && !vr.hasOwnProperty(y) && (g[y] = i[y]);
        if (r && r.defaultProps) {
          var R = r.defaultProps;
          for (y in R)
            g[y] === void 0 && (g[y] = R[y]);
        }
        if (h || L) {
          var S = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          h && kr(g, S), L && wr(g, S);
        }
        return Cr(r, h, L, v, c, Z.current, g);
      }
    }
    var de = C.ReactCurrentOwner, Ne = C.ReactDebugCurrentFrame;
    function H(r) {
      if (r) {
        var i = r._owner, o = te(r.type, r._source, i ? i.type : null);
        Ne.setExtraStackFrame(o);
      } else
        Ne.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function he(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function $e() {
      {
        if (de.current) {
          var r = M(de.current.type);
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
        var i = $e();
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
        r && r._owner && r._owner !== de.current && (c = " It was passed a child from " + M(r._owner.type) + "."), H(r), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), H(null);
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
          var v = X(r);
          if (typeof v == "function" && v !== r.entries)
            for (var y = v.call(r), g; !(g = y.next()).done; )
              he(g.value) && De(g.value, i);
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
        else if (typeof i == "object" && (i.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === E))
          o = i.propTypes;
        else
          return;
        if (o) {
          var c = M(i);
          fr(o, r.props, "prop", c, r);
        } else if (i.PropTypes !== void 0 && !fe) {
          fe = !0;
          var v = M(i);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(r) {
      {
        for (var i = Object.keys(r.props), o = 0; o < i.length; o++) {
          var c = i[o];
          if (c !== "children" && c !== "key") {
            H(r), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), H(null);
            break;
          }
        }
        r.ref !== null && (H(r), b("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function We(r, i, o, c, v, y) {
      {
        var g = G(r);
        if (!g) {
          var h = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var L = Rr(v);
          L ? h += L : h += $e();
          var R;
          r === null ? R = "null" : le(r) ? R = "array" : r !== void 0 && r.$$typeof === n ? (R = "<" + (M(r.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : R = typeof r, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, h);
        }
        var S = pr(r, i, o, v, y);
        if (S == null)
          return S;
        if (g) {
          var O = i.children;
          if (O !== void 0)
            if (c)
              if (le(O)) {
                for (var U = 0; U < O.length; U++)
                  Ae(O[U], r);
                Object.freeze && Object.freeze(O);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(O, r);
        }
        return r === s ? Er(S) : Sr(S), S;
      }
    }
    function Lr(r, i, o) {
      return We(r, i, o, !0);
    }
    function Tr(r, i, o) {
      return We(r, i, o, !1);
    }
    var Pr = Tr, zr = Lr;
    K.Fragment = s, K.jsx = Pr, K.jsxs = zr;
  }()), K;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Mr() : e.exports = Dr();
})($r);
const ve = Q.Fragment, t = Q.jsx, u = Q.jsxs, Ar = "#6440dd", Wr = "#5934D8", Ir = "#F5222D", Vr = "#111111", Fr = "#666666", Br = "#333333", Gr = "#999999", Hr = "#bbbbbb", Ur = "#cccccc", Yr = "#f4f4f4", Xr = "#f5f6f8", qr = "#f2f4f7", Zr = "#dbd6eb", Jr = "#eeebff", Kr = "#b6b7b9", Qr = "#e7e9ef", et = "#cfd4dd", rt = "#d42a21", tt = "#1968e5", nt = "#27c4b8", it = "#fff", ot = "#f4f0ff", at = "#ABAEBF", st = "#03c75a", ct = "#e1a016", lt = "#da1c26", N = {
  main: Ar,
  main_sub: Wr,
  notice: Ir,
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
  return a ? typeof a == "function" ? a() : Promise.resolve(a) : new Promise((s, d) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(d.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
}, Ge = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ u(
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
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ u("g", { id: "Arrow / Arrow_Sub_Down_Right", children: [
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
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ u(
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
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ u(
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
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
}, Symbol.toStringTag, { value: "Module" })), I = (e) => {
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
  return /* @__PURE__ */ u("div", { className: a, children: [
    /* @__PURE__ */ u("div", { className: "logo", children: [
      n && /* @__PURE__ */ t("div", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(I, { name: "ArrowLeft", size: "big", color: N.grey_111 }) }),
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
  }, d = e.percent >= 50 ? 18 * (e.percent - 50) / 5 : 0, l = e.percent <= 50 ? 18 * (e.percent / 5) : 180, f = e.percent < 50 ? N.red : e.percent < 75 ? N.orange : N.green, _ = {
    border: `${n}px solid ${f}`,
    borderTopRightRadius: e.size + "px",
    borderBottomRightRadius: e.size + "px",
    transform: `rotate(${d}deg)`
  }, m = {
    border: `${n}px solid ${f}`,
    borderTopLeftRadius: e.size + "px",
    borderBottomLeftRadius: e.size + "px",
    transform: `rotate(${l}deg)`
  }, p = {
    fontSize: e.size / 4 + "px",
    borderRadius: e.size - n * 2 + "px",
    width: e.size - n * 2 + "px",
    height: e.size - n * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: a, children: /* @__PURE__ */ u("div", { className: "circular-progress-bar", style: s, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: _ }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: m }) }),
    /* @__PURE__ */ u("div", { className: "percent", style: p, children: [
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
  magnification: d
}) => {
  const l = ge(() => Array(s + 1).fill(1).map((C, b) => ({
    order: b,
    value: b * d,
    key: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString()
  })), [s]), f = e !== void 0 && e < l.length, _ = l.length, [m, p] = P(), [k, E] = P(0), [x, w] = P(
    l[f ? e : 0]
  ), V = (C) => {
    w(C), a == null || a(C);
  }, z = Y(null), X = () => {
    var A;
    let F = (((A = z.current) == null ? void 0 : A.getBoundingClientRect().width) - l.length * k) / (l.length - 1) * x.order + k * x.order;
    return x.order !== 0 && (F += k / 2), {
      width: `${F}px`
      // width: `calc(${finalCalc})`,
    };
  };
  return Be(() => {
    var A;
    const C = z.current.getBoundingClientRect().width, b = (A = z.current.parentElement) == null ? void 0 : A.getBoundingClientRect(), F = 2 * b.width - (b.right + b.left);
    if (n) {
      const W = n / _;
      E(W >= 24 ? 24 : W);
    } else {
      const W = C / _;
      E(W >= 24 ? 24 : W);
    }
    p(F);
  }, [n]), oe(() => {
    w(l[f ? e : 0]);
  }, [e]), /* @__PURE__ */ u("div", { style: { width: n, height: k * 2 }, className: "setting-bar-wrapper", children: [
    /* @__PURE__ */ u("div", { className: "setting-bar", ref: z, children: [
      l.map((C, b) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress ${C.order === x.order ? "selected" : ""}`,
          style: { width: k },
          onClick: () => V(C),
          children: /* @__PURE__ */ t(
            "div",
            {
              className: `point ${C.order < x.order ? "selected" : ""}`
            }
          )
        },
        C.key
      )),
      /* @__PURE__ */ t(
        "div",
        {
          className: `user-progress ${x.order === _ - 1 ? "end" : ""}`,
          style: X()
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "setting-explain", children: l.map((C, b) => /* @__PURE__ */ t(
      "span",
      {
        className: b === x.order ? "selected" : "",
        children: C.value
      },
      C.key
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
const jt = (e) => /* @__PURE__ */ u("div", { className: "group-card", children: [
  e.isSub && /* @__PURE__ */ t(I, { name: "Depth", size: "medium", color: N.grey_111 }),
  /* @__PURE__ */ u("div", { className: "card", children: [
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
  return /* @__PURE__ */ u(
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
    var l;
    ((l = n.current) == null ? void 0 : l.contains(s.target)) || e();
  };
  return oe(() => (window.addEventListener("click", a), () => {
    window.removeEventListener("click", a);
  }), []), {
    ref: n
  };
};
const xt = (e) => {
  const [n, a] = P(!0), s = e.ratio * 100 + "%";
  return /* @__PURE__ */ u(
    "div",
    {
      className: "image-wrapper",
      style: { paddingTop: s },
      onClick: () => {
        var d;
        return (d = e.click) == null ? void 0 : d.call(e);
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
}, Nt = (e) => {
  const n = e.ratio ? e.ratio : 1;
  return /* @__PURE__ */ u("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(xt, { ratio: n, imageUrl: e.imageUrl, click: e.click }),
    /* @__PURE__ */ u("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(pt, { percent: e.voteAverage, size: 34 }) }),
      /* @__PURE__ */ t("span", { className: "title", children: e.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: e.releaseDate })
    ] })
  ] });
};
const $t = (e) => /* @__PURE__ */ t(tr, { isOpen: e.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${e.isMobile ? "mobile" : ""}`, children: e.children }) });
const Mt = (e) => {
  const n = e.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ u("div", { className: "popup-header-container", style: n, children: [
    /* @__PURE__ */ u("div", { className: "popup-header", children: [
      e.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.back, children: /* @__PURE__ */ t(I, { name: "ArrowLeft", size: "big", color: N.grey_999 }) }),
      e.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: e.title }) }),
      e.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.close, children: /* @__PURE__ */ t(I, { name: "Close", size: "big", color: N.grey_999 }) })
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
const Dt = (e) => /* @__PURE__ */ u("div", { className: "notification", children: [
  e.children,
  /* @__PURE__ */ u("div", { className: "info", style: { height: e.height }, children: [
    /* @__PURE__ */ t(I, { name: "Caution", size: "small", color: N.grey_bbb }),
    /* @__PURE__ */ t("span", { children: e.text })
  ] })
] });
const At = (e) => {
  const n = `${e.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: n }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: e.imageUrl }) });
};
const Wt = (e) => {
  const n = e.type ?? "text", [a, s] = P(!1), d = ge(() => {
    let f = "";
    return (a || e.searchText) && (f += " focus"), e.screen === "mobile" && (f += " mobile"), f;
  }, [a, e.screen]), l = ge(() => {
    var _;
    let f = d;
    return typeof e.validator == "function" && !((_ = e.validator) != null && _.call(e, e.searchText)) && (f += " error"), f;
  }, [d, e.searchText]);
  return /* @__PURE__ */ u("div", { className: "input-wrapper" + l, children: [
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
}, It = ({
  items: e,
  selected: n,
  click: a,
  open: s,
  itemSize: d
}) => {
  const l = d ?? "medium";
  return /* @__PURE__ */ t("div", { className: `option-list ${s ? "slide" : ""}`, children: /* @__PURE__ */ t("div", { className: "option-items", children: e.map((f) => /* @__PURE__ */ t(
    St,
    {
      size: l,
      text: f.name,
      selected: f.name === n,
      click: () => a == null ? void 0 : a(f)
    },
    f.name
  )) }) });
};
const Vt = ({ title: e, children: n }) => {
  const [a, s] = P(!1), [d, l] = P("hidden"), { ref: f } = nr(() => {
    s(!1), l("hidden");
  }), _ = () => {
    a && l("unset");
  };
  function m() {
    s((p) => !p), a && l("hidden");
  }
  return /* @__PURE__ */ u(
    "div",
    {
      className: "basic-accordion",
      ref: f,
      style: { overflow: d },
      onTransitionEnd: _,
      children: [
        /* @__PURE__ */ u("div", { className: "header", onClick: m, children: [
          /* @__PURE__ */ t("span", { className: "title", children: e }),
          /* @__PURE__ */ t("div", { className: `icon ${a ? "slide" : ""}`, children: /* @__PURE__ */ t(I, { name: "Right", size: "medium", color: N.grey_111 }) })
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
  clickLeft: d,
  clickRight: l,
  clickPoint: f,
  onTransitionEnd: _,
  onMouseEnter: m,
  onMouseLeave: p,
  onTouchStart: k,
  onTouchMove: E,
  onTouchEnd: x,
  children: w
}) => /* @__PURE__ */ u(
  "div",
  {
    className: "carousel",
    onMouseEnter: m,
    onMouseLeave: p,
    children: [
      /* @__PURE__ */ t("div", { className: "container", ref: n, children: /* @__PURE__ */ t(
        "div",
        {
          className: "slide-container",
          ref: a,
          onTransitionEnd: _,
          onTouchStart: k,
          onTouchMove: E,
          onTouchEnd: x,
          children: w
        }
      ) }),
      e >= 2 && /* @__PURE__ */ u(ve, { children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "left",
            onClick: d,
            children: /* @__PURE__ */ t(I, { name: "Right", size: "small", color: N.white })
          }
        ),
        /* @__PURE__ */ t("div", { className: "right", onClick: l, children: /* @__PURE__ */ t(I, { name: "Right", size: "small", color: N.white }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "progress", children: Array(e).fill(1).map((V, z) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress-point ${s === z + 1 ? "selected" : ""}`,
          onClick: () => f(z + 1)
        },
        z
      )) })
    ]
  }
), or = (e) => {
  const n = Y(null), a = Y(null), [s, d] = P(1), [l, f] = P(0);
  P(0);
  const _ = () => {
    let w = s - 1;
    f(-1), a.current.style.transform = `translateX(-${w * 100}%)`, a.current.style.transition = "transform .3s linear";
  }, m = () => {
    if (!a.current)
      return;
    let w = s + 1;
    f(1), a.current.style.transform = `translateX(-${w * 100}%)`, a.current.style.transition = "transform .3s linear";
  };
  return {
    container: n,
    slide: a,
    currentIndex: s,
    clickLeft: _,
    clickRight: m,
    clickPoint: (w) => {
      w !== s && (a.current.style.transform = `translateX(-${w * 100}%)`, a.current.style.transition = "transform .3s linear", d(w));
    },
    touchMove: (w) => {
      w > 0 ? m() : _();
    },
    touchRecover: () => {
      a.current.style.transform = `translateX(-${s * 100}%)`, a.current.style.transition = "transform .15s linear";
    },
    onTransitionEnd: () => {
      l !== 0 && (l === 1 ? s === e ? (d(1), a.current.style.transform = "translateX(-100%)", a.current.style.transition = "none") : d((w) => w + 1) : s === 1 ? (d(e), d(e), a.current.style.transform = `translateX(-${e * 100}%)`, a.current.style.transition = "none") : d((w) => w - 1), f(0));
    }
  };
}, Ft = (e) => {
  const n = e.items.length, {
    container: a,
    slide: s,
    currentIndex: d,
    clickLeft: l,
    clickRight: f,
    clickPoint: _,
    onTransitionEnd: m
  } = or(n);
  return /* @__PURE__ */ t(
    ir,
    {
      container: a,
      slide: s,
      currentIndex: d,
      clickLeft: l,
      clickRight: f,
      clickPoint: _,
      onTransitionEnd: m,
      itemLength: n,
      children: /* @__PURE__ */ u(ve, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((p, k) => e.renderItems(p, k)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
}, Bt = (e) => {
  const n = e.items.length, [a, s] = P(), [d, l] = P(!1), f = Y(), {
    container: _,
    slide: m,
    currentIndex: p,
    clickLeft: k,
    clickRight: E,
    clickPoint: x,
    touchMove: w,
    touchRecover: V,
    onTransitionEnd: z
  } = or(n);
  Be(() => {
    const T = new IntersectionObserver(
      (j, G) => {
        j[0].isIntersecting ? l(!0) : l(!1);
      },
      {
        threshold: 0.1
      }
    );
    f.current = m.current.getBoundingClientRect().width;
    const $ = m.current.parentElement;
    T.observe($);
  }, []);
  const X = () => setInterval(() => {
    E();
  }, e.time);
  oe(() => {
    clearInterval(a), d && n >= 2 && s(X());
  }, [p, d]);
  const C = (T) => {
    T.preventDefault(), l(!1);
  }, b = Y();
  return /* @__PURE__ */ t(
    ir,
    {
      container: _,
      slide: m,
      currentIndex: p,
      clickLeft: k,
      clickRight: E,
      clickPoint: x,
      onTransitionEnd: z,
      onMouseEnter: C,
      onMouseLeave: () => {
        l(!0);
      },
      itemLength: n,
      onTouchStart: (T) => {
        l(!1), b.current = T.changedTouches[0].pageX;
      },
      onTouchMove: (T) => {
        const $ = T.changedTouches[0].pageX, j = b.current - $;
        if (Math.abs(j) > m.current.getBoundingClientRect().width / 1.5)
          return;
        let G;
        j > 0 ? G = `-${p * 100}% - ${Math.abs(j)}px` : G = `-${p * 100}% + ${Math.abs(j)}px`, m.current.style.transform = `translateX(calc(${G}))`;
      },
      onTouchEnd: (T) => {
        const $ = f.current / 2.5, j = b.current - T.changedTouches[0].pageX;
        Math.abs(j) >= $ ? w(j) : V(), setTimeout(() => {
          a && clearTimeout(a), l(!0);
        }, 2e3);
      },
      children: /* @__PURE__ */ u(ve, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((T, $) => e.renderItems(T, $)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
};
const Gt = ({ selected: e, children: n }) => {
  const [a, s] = P(!1), { ref: d } = nr(() => s(!1));
  return oe(() => {
    const l = setTimeout(() => {
      s(!1);
    }, 150);
    return () => {
      clearTimeout(l);
    };
  }, [e]), /* @__PURE__ */ u("div", { className: "dropdown", ref: d, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "dropdown-selected",
        onClick: () => s((l) => !l),
        children: e
      }
    ),
    Nr(n, { open: a, selected: e })
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
  I as Element,
  jt as GroupCard,
  Lt as HeaderBar,
  Wt as InputBox,
  Ot as LoadingSpinner,
  Dt as Notification,
  It as OptionList,
  tr as OverLay,
  Rt as PageLoadingSpinner,
  $t as Popup,
  Mt as PopupBasicHeader,
  Nt as PosterCard,
  xt as RatioCardImage,
  At as RatioImage,
  St as SelectedItem,
  Tt as SettingBar,
  nr as useCloseEvent
};
