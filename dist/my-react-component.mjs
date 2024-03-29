import ve, { lazy as Or, Suspense as $r, useMemo as se, useState as E, useRef as H, useLayoutEffect as be, useEffect as ee, useCallback as Ir, cloneElement as Dr } from "react";
var Q = {}, Wr = {
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
function Ar() {
  if (Ge)
    return J;
  Ge = 1;
  var e = ve, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(c, u, C) {
    var m, R = {}, L = null, y = null;
    C !== void 0 && (L = "" + C), u.key !== void 0 && (L = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (m in u)
      l.call(u, m) && !f.hasOwnProperty(m) && (R[m] = u[m]);
    if (c && c.defaultProps)
      for (m in u = c.defaultProps, u)
        R[m] === void 0 && (R[m] = u[m]);
    return { $$typeof: n, type: c, key: L, ref: y, props: R, _owner: s.current };
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
function Vr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ve, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), R = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), z = Symbol.iterator, p = "@@iterator";
    function A(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = z && r[z] || r[p];
      return typeof i == "function" ? i : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(r) {
      {
        for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), h = 1; h < i; h++)
          o[h - 1] = arguments[h];
        F("error", r, o);
      }
    }
    function F(r, i, o) {
      {
        var h = x.ReactDebugCurrentFrame, _ = h.getStackAddendum();
        _ !== "" && (i += "%s", o = o.concat([_]));
        var w = o.map(function(b) {
          return String(b);
        });
        w.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, w);
      }
    }
    var V = !1, B = !1, ke = !1, N = !1, I = !1, j;
    j = Symbol.for("react.module.reference");
    function U(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === l || r === f || I || r === s || r === C || r === m || N || r === y || V || B || ke || typeof r == "object" && r !== null && (r.$$typeof === L || r.$$typeof === R || r.$$typeof === g || r.$$typeof === c || r.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === j || r.getModuleId !== void 0));
    }
    function lr(r, i, o) {
      var h = r.displayName;
      if (h)
        return h;
      var _ = i.displayName || i.name || "";
      return _ !== "" ? o + "(" + _ + ")" : o;
    }
    function we(r) {
      return r.displayName || "Context";
    }
    function D(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case l:
          return "Fragment";
        case a:
          return "Portal";
        case f:
          return "Profiler";
        case s:
          return "StrictMode";
        case C:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            var i = r;
            return we(i) + ".Consumer";
          case g:
            var o = r;
            return we(o._context) + ".Provider";
          case u:
            return lr(r, r.render, "ForwardRef");
          case R:
            var h = r.displayName || null;
            return h !== null ? h : D(r.type) || "Memo";
          case L: {
            var _ = r, w = _._payload, b = _._init;
            try {
              return D(b(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, q = 0, Ce, Re, Le, xe, Se, Te, Ee;
    function Pe() {
    }
    Pe.__reactDisabledLog = !0;
    function dr() {
      {
        if (q === 0) {
          Ce = console.log, Re = console.info, Le = console.warn, xe = console.error, Se = console.group, Te = console.groupCollapsed, Ee = console.groupEnd;
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
    function ur() {
      {
        if (q--, q === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, r, {
              value: Ce
            }),
            info: G({}, r, {
              value: Re
            }),
            warn: G({}, r, {
              value: Le
            }),
            error: G({}, r, {
              value: xe
            }),
            group: G({}, r, {
              value: Se
            }),
            groupCollapsed: G({}, r, {
              value: Te
            }),
            groupEnd: G({}, r, {
              value: Ee
            })
          });
        }
        q < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ce = x.ReactCurrentDispatcher, le;
    function te(r, i, o) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (_) {
            var h = _.stack.trim().match(/\n( *(at )?)/);
            le = h && h[1] || "";
          }
        return `
` + le + r;
      }
    }
    var de = !1, ne;
    {
      var fr = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new fr();
    }
    function pe(r, i) {
      if (!r || de)
        return "";
      {
        var o = ne.get(r);
        if (o !== void 0)
          return o;
      }
      var h;
      de = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = ce.current, ce.current = null, dr();
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
            } catch (W) {
              h = W;
            }
            Reflect.construct(r, [], b);
          } else {
            try {
              b.call();
            } catch (W) {
              h = W;
            }
            r.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (W) {
            h = W;
          }
          r();
        }
      } catch (W) {
        if (W && h && typeof W.stack == "string") {
          for (var v = W.stack.split(`
`), M = h.stack.split(`
`), S = v.length - 1, T = M.length - 1; S >= 1 && T >= 0 && v[S] !== M[T]; )
            T--;
          for (; S >= 1 && T >= 0; S--, T--)
            if (v[S] !== M[T]) {
              if (S !== 1 || T !== 1)
                do
                  if (S--, T--, T < 0 || v[S] !== M[T]) {
                    var O = `
` + v[S].replace(" at new ", " at ");
                    return r.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", r.displayName)), typeof r == "function" && ne.set(r, O), O;
                  }
                while (S >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        de = !1, ce.current = w, ur(), Error.prepareStackTrace = _;
      }
      var X = r ? r.displayName || r.name : "", Fe = X ? te(X) : "";
      return typeof r == "function" && ne.set(r, Fe), Fe;
    }
    function hr(r, i, o) {
      return pe(r, !1);
    }
    function gr(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function ie(r, i, o) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return pe(r, gr(r));
      if (typeof r == "string")
        return te(r);
      switch (r) {
        case C:
          return te("Suspense");
        case m:
          return te("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case u:
            return hr(r.render);
          case R:
            return ie(r.type, i, o);
          case L: {
            var h = r, _ = h._payload, w = h._init;
            try {
              return ie(w(_), i, o);
            } catch {
            }
          }
        }
      return "";
    }
    var oe = Object.prototype.hasOwnProperty, Me = {}, ze = x.ReactDebugCurrentFrame;
    function ae(r) {
      if (r) {
        var i = r._owner, o = ie(r.type, r._source, i ? i.type : null);
        ze.setExtraStackFrame(o);
      } else
        ze.setExtraStackFrame(null);
    }
    function mr(r, i, o, h, _) {
      {
        var w = Function.call.bind(oe);
        for (var b in r)
          if (w(r, b)) {
            var v = void 0;
            try {
              if (typeof r[b] != "function") {
                var M = Error((h || "React class") + ": " + o + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw M.name = "Invariant Violation", M;
              }
              v = r[b](i, b, h, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (S) {
              v = S;
            }
            v && !(v instanceof Error) && (ae(_), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", o, b, typeof v), ae(null)), v instanceof Error && !(v.message in Me) && (Me[v.message] = !0, ae(_), k("Failed %s type: %s", o, v.message), ae(null));
          }
      }
    }
    var vr = Array.isArray;
    function ue(r) {
      return vr(r);
    }
    function br(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, o = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return o;
      }
    }
    function _r(r) {
      try {
        return Ne(r), !1;
      } catch {
        return !0;
      }
    }
    function Ne(r) {
      return "" + r;
    }
    function je(r) {
      if (_r(r))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", br(r)), Ne(r);
    }
    var Z = x.ReactCurrentOwner, yr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Oe, $e, fe;
    fe = {};
    function kr(r) {
      if (oe.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function wr(r) {
      if (oe.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Cr(r, i) {
      if (typeof r.ref == "string" && Z.current && i && Z.current.stateNode !== i) {
        var o = D(Z.current.type);
        fe[o] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', D(Z.current.type), r.ref), fe[o] = !0);
      }
    }
    function Rr(r, i) {
      {
        var o = function() {
          Oe || (Oe = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Lr(r, i) {
      {
        var o = function() {
          $e || ($e = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var xr = function(r, i, o, h, _, w, b) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: o,
        props: b,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function Sr(r, i, o, h, _) {
      {
        var w, b = {}, v = null, M = null;
        o !== void 0 && (je(o), v = "" + o), wr(i) && (je(i.key), v = "" + i.key), kr(i) && (M = i.ref, Cr(i, _));
        for (w in i)
          oe.call(i, w) && !yr.hasOwnProperty(w) && (b[w] = i[w]);
        if (r && r.defaultProps) {
          var S = r.defaultProps;
          for (w in S)
            b[w] === void 0 && (b[w] = S[w]);
        }
        if (v || M) {
          var T = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          v && Rr(b, T), M && Lr(b, T);
        }
        return xr(r, v, M, _, h, Z.current, b);
      }
    }
    var he = x.ReactCurrentOwner, Ie = x.ReactDebugCurrentFrame;
    function Y(r) {
      if (r) {
        var i = r._owner, o = ie(r.type, r._source, i ? i.type : null);
        Ie.setExtraStackFrame(o);
      } else
        Ie.setExtraStackFrame(null);
    }
    var ge;
    ge = !1;
    function me(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function De() {
      {
        if (he.current) {
          var r = D(he.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Tr(r) {
      {
        if (r !== void 0) {
          var i = r.fileName.replace(/^.*[\\\/]/, ""), o = r.lineNumber;
          return `

Check your code at ` + i + ":" + o + ".";
        }
        return "";
      }
    }
    var We = {};
    function Er(r) {
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
    function Ae(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var o = Er(i);
        if (We[o])
          return;
        We[o] = !0;
        var h = "";
        r && r._owner && r._owner !== he.current && (h = " It was passed a child from " + D(r._owner.type) + "."), Y(r), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, h), Y(null);
      }
    }
    function Ve(r, i) {
      {
        if (typeof r != "object")
          return;
        if (ue(r))
          for (var o = 0; o < r.length; o++) {
            var h = r[o];
            me(h) && Ae(h, i);
          }
        else if (me(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var _ = A(r);
          if (typeof _ == "function" && _ !== r.entries)
            for (var w = _.call(r), b; !(b = w.next()).done; )
              me(b.value) && Ae(b.value, i);
        }
      }
    }
    function Pr(r) {
      {
        var i = r.type;
        if (i == null || typeof i == "string")
          return;
        var o;
        if (typeof i == "function")
          o = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === R))
          o = i.propTypes;
        else
          return;
        if (o) {
          var h = D(i);
          mr(o, r.props, "prop", h, r);
        } else if (i.PropTypes !== void 0 && !ge) {
          ge = !0;
          var _ = D(i);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(r) {
      {
        for (var i = Object.keys(r.props), o = 0; o < i.length; o++) {
          var h = i[o];
          if (h !== "children" && h !== "key") {
            Y(r), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Y(null);
            break;
          }
        }
        r.ref !== null && (Y(r), k("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    function Be(r, i, o, h, _, w) {
      {
        var b = U(r);
        if (!b) {
          var v = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var M = Tr(_);
          M ? v += M : v += De();
          var S;
          r === null ? S = "null" : ue(r) ? S = "array" : r !== void 0 && r.$$typeof === n ? (S = "<" + (D(r.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : S = typeof r, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", S, v);
        }
        var T = Sr(r, i, o, _, w);
        if (T == null)
          return T;
        if (b) {
          var O = i.children;
          if (O !== void 0)
            if (h)
              if (ue(O)) {
                for (var X = 0; X < O.length; X++)
                  Ve(O[X], r);
                Object.freeze && Object.freeze(O);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(O, r);
        }
        return r === l ? pr(T) : Pr(T), T;
      }
    }
    function Mr(r, i, o) {
      return Be(r, i, o, !0);
    }
    function zr(r, i, o) {
      return Be(r, i, o, !1);
    }
    var Nr = zr, jr = Mr;
    K.Fragment = l, K.jsx = Nr, K.jsxs = jr;
  }()), K;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ar() : e.exports = Vr();
})(Wr);
const re = Q.Fragment, t = Q.jsx, d = Q.jsxs, Br = "#6440dd", Fr = "#5934D8", Gr = "#F5222D", Hr = "#111111", Ur = "#666666", Yr = "#333333", Xr = "#999999", qr = "#bbbbbb", Zr = "#cccccc", Jr = "#f4f4f4", Kr = "#f5f6f8", Qr = "#f2f4f7", et = "#dbd6eb", rt = "#eeebff", tt = "#b6b7b9", nt = "#020a13", it = "#696869", ot = "#13283e", at = "#e7e9ef", st = "#cfd4dd", ct = "#d42a21", lt = "#1968e5", dt = "#27c4b8", ut = "#fff", ft = "#f4f0ff", ht = "#ABAEBF", gt = "#03c75a", mt = "#e1a016", vt = "#da1c26", P = {
  main: Br,
  main_sub: Fr,
  notice: Gr,
  grey_111: Hr,
  grey_666: Ur,
  grey_333: Yr,
  grey_999: Xr,
  grey_bbb: qr,
  grey_ccc: Zr,
  grey_f4: Jr,
  bg_main: Kr,
  bg_noti: Qr,
  bg_disable: et,
  bg_sub: rt,
  bg_trans: tt,
  bg_black: nt,
  bg_grey: it,
  bg_indigo: ot,
  line_01: at,
  line_02: st,
  plus: ct,
  minus: lt,
  code: dt,
  white: ut,
  option_hover: ft,
  m_gnb_normal: ht,
  green: gt,
  orange: mt,
  red: vt
}, bt = (e, n) => {
  const a = e[n];
  return a ? typeof a == "function" ? a() : Promise.resolve(a) : new Promise((l, s) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(s.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
}, Ue = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ue
}, Symbol.toStringTag, { value: "Module" })), Ye = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
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
}, yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ye
}, Symbol.toStringTag, { value: "Module" })), Xe = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
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
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Xe
}, Symbol.toStringTag, { value: "Module" })), qe = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, Ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ze
}, Symbol.toStringTag, { value: "Module" })), Je = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ d("g", { id: "Arrow / Arrow_Sub_Down_Right", children: [
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
}, Rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Je
}, Symbol.toStringTag, { value: "Module" })), Ke = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
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
}, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), Qe = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
}, xt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Qe
}, Symbol.toStringTag, { value: "Module" })), er = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: e.color,
      strokeWidth: "1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ t("path", { d: "M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" }),
          " ",
          /* @__PURE__ */ t("polyline", { points: "10 17 15 12 10 7" }),
          " ",
          /* @__PURE__ */ t("line", { x1: "15", y1: "12", x2: "3", y2: "12" }),
          " "
        ] })
      ]
    }
  );
}, St = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: er
}, Symbol.toStringTag, { value: "Module" })), rr = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: e.color,
      strokeWidth: "1",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "feather feather-log-out",
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ t("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
          /* @__PURE__ */ t("polyline", { points: "16 17 21 12 16 7" }),
          /* @__PURE__ */ t("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
        ] })
      ]
    }
  );
}, Tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: rr
}, Symbol.toStringTag, { value: "Module" })), tr = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
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
}, Et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: tr
}, Symbol.toStringTag, { value: "Module" })), nr = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
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
}, Pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: nr
}, Symbol.toStringTag, { value: "Module" })), ir = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
}, pt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ir
}, Symbol.toStringTag, { value: "Module" })), or = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
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
}, Mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: or
}, Symbol.toStringTag, { value: "Module" })), ar = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: n,
      height: n,
      viewBox: "0 0 24 24",
      fill: "#000000",
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
        /* @__PURE__ */ d("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ t("title", { children: "i" }),
          /* @__PURE__ */ t("g", { id: "Complete", children: /* @__PURE__ */ t("g", { id: "user-add", children: /* @__PURE__ */ d("g", { children: [
            /* @__PURE__ */ t(
              "path",
              {
                d: "M17,21V19a4,4,0,0,0-4-4H5a4,4,0,0,0-4,4v2",
                fill: "none",
                stroke: e.color,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1"
              }
            ),
            /* @__PURE__ */ t(
              "circle",
              {
                cx: "9",
                cy: "7",
                r: "4",
                fill: "none",
                stroke: e.color,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1"
              }
            ),
            /* @__PURE__ */ t(
              "line",
              {
                x1: "17",
                y1: "11",
                x2: "23",
                y2: "11",
                fill: "none",
                stroke: e.color,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1"
              }
            ),
            /* @__PURE__ */ t(
              "line",
              {
                x1: "20",
                y1: "8",
                x2: "20",
                y2: "14",
                fill: "none",
                stroke: e.color,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "1"
              }
            )
          ] }) }) })
        ] })
      ]
    }
  );
}, zt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ar
}, Symbol.toStringTag, { value: "Module" })), $ = (e) => {
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
        return /* @__PURE__ */ t(tr, { ...e });
      case "Right":
        return /* @__PURE__ */ t(nr, { ...e });
      case "Search":
        return /* @__PURE__ */ t(ir, { ...e });
      case "Setting":
        return /* @__PURE__ */ t(or, { ...e });
      case "Login":
        return /* @__PURE__ */ t(er, { ...e });
      case "Logout":
        return /* @__PURE__ */ t(rr, { ...e });
      case "Signup":
        return /* @__PURE__ */ t(ar, { ...e });
      default:
        return null;
    }
  }, a = () => e.size === "big" ? "30px" : e.size === "medium" ? "24px" : "20px";
  return Or(() => bt(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => _t), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => yt), "./icons/Caution.tsx": () => Promise.resolve().then(() => kt), "./icons/Check.tsx": () => Promise.resolve().then(() => wt), "./icons/Close.tsx": () => Promise.resolve().then(() => Ct), "./icons/Depth.tsx": () => Promise.resolve().then(() => Rt), "./icons/Gear.tsx": () => Promise.resolve().then(() => Lt), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => xt), "./icons/Login.tsx": () => Promise.resolve().then(() => St), "./icons/Logout.tsx": () => Promise.resolve().then(() => Tt), "./icons/Plus.tsx": () => Promise.resolve().then(() => Et), "./icons/Right.tsx": () => Promise.resolve().then(() => Pt), "./icons/Search.tsx": () => Promise.resolve().then(() => pt), "./icons/Setting.tsx": () => Promise.resolve().then(() => Mt), "./icons/Signup.tsx": () => Promise.resolve().then(() => zt) }), `./icons/${e.name}.tsx`)), /* @__PURE__ */ t($r, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: a(), display: "inline-block" }, children: n() }) });
};
const Nt = (e) => {
  const n = typeof e.openDrawer == "function", a = typeof e.back == "function", l = e.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ d("div", { className: l, children: [
    e.isMobile && n && /* @__PURE__ */ t("div", { className: "hamburger", onClick: e.openDrawer, children: /* @__PURE__ */ t(
      $,
      {
        name: "Hamburger",
        size: "big",
        color: e.iconColor ?? P.grey_111
      }
    ) }),
    /* @__PURE__ */ d("div", { className: "logo", children: [
      a && !e.isMobile && /* @__PURE__ */ t("div", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(
        $,
        {
          name: "ArrowLeft",
          size: "big",
          color: e.iconColor ?? P.grey_111
        }
      ) }),
      /* @__PURE__ */ t("span", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !0);
      }, children: e.title })
    ] }),
    e.children
  ] });
};
const jt = (e) => {
  const n = e.size / 14, a = {
    width: e.size + "px",
    height: e.size + "px",
    borderRadius: e.size + n / 1.5 + "px",
    padding: n / 1.5 + "px"
  }, l = {
    borderRadius: e.size + "px"
  }, s = e.percent >= 50 ? 18 * (e.percent - 50) / 5 : 0, f = e.percent <= 50 ? 18 * (e.percent / 5) : 180, g = e.percent < 50 ? P.red : e.percent < 75 ? P.orange : P.green, c = {
    border: `${n}px solid ${g}`,
    borderTopRightRadius: e.size + "px",
    borderBottomRightRadius: e.size + "px",
    transform: `rotate(${s}deg)`
  }, u = {
    border: `${n}px solid ${g}`,
    borderTopLeftRadius: e.size + "px",
    borderBottomLeftRadius: e.size + "px",
    transform: `rotate(${f}deg)`
  }, C = {
    fontSize: e.size / 4 + "px",
    borderRadius: e.size - n * 2 + "px",
    width: e.size - n * 2 + "px",
    height: e.size - n * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: a, children: /* @__PURE__ */ d("div", { className: "circular-progress-bar", style: l, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: c }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: u }) }),
    /* @__PURE__ */ d("div", { className: "percent", style: C, children: [
      e.percent,
      "%"
    ] })
  ] }) });
};
const Dt = ({
  initialCount: e,
  width: n,
  onSelect: a,
  count: l,
  magnification: s
}) => {
  const f = se(() => Array(l + 1).fill(1).map((x, k) => ({
    order: k,
    value: k * s,
    key: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString()
  })), [l]), g = e !== void 0 && e < f.length, c = f.length, [u, C] = E(), [m, R] = E(0), [L, y] = E(
    f[g ? e : 0]
  ), z = (x) => {
    y(x), a == null || a(x);
  }, p = H(null), A = () => {
    var V;
    let F = (((V = p.current) == null ? void 0 : V.getBoundingClientRect().width) - f.length * m) / (f.length - 1) * L.order + m * L.order;
    return L.order !== 0 && (F += m / 2), {
      width: `${F}px`
      // width: `calc(${finalCalc})`,
    };
  };
  return be(() => {
    var V;
    const x = p.current.getBoundingClientRect().width, k = (V = p.current.parentElement) == null ? void 0 : V.getBoundingClientRect(), F = 2 * k.width - (k.right + k.left);
    if (n) {
      const B = n / c;
      R(B >= 24 ? 24 : B);
    } else {
      const B = x / c;
      R(B >= 24 ? 24 : B);
    }
    C(F);
  }, [n]), ee(() => {
    y(f[g ? e : 0]);
  }, [e]), /* @__PURE__ */ d("div", { style: { width: n, height: m * 2 }, className: "setting-bar-wrapper", children: [
    /* @__PURE__ */ d("div", { className: "setting-bar", ref: p, children: [
      f.map((x, k) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress ${x.order === L.order ? "selected" : ""}`,
          style: { width: m },
          onClick: () => z(x),
          children: /* @__PURE__ */ t(
            "div",
            {
              className: `point ${x.order < L.order ? "selected" : ""}`
            }
          )
        },
        x.key
      )),
      /* @__PURE__ */ t(
        "div",
        {
          className: `user-progress ${L.order === c - 1 ? "end" : ""}`,
          style: A()
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "setting-explain", children: f.map((x, k) => /* @__PURE__ */ t(
      "span",
      {
        className: k === L.order ? "selected" : "",
        children: x.value
      },
      x.key
    )) })
  ] });
};
const Wt = ({
  items: e,
  onSelect: n,
  screen: a
}) => {
  var C;
  const l = H(null), [s, f] = E(0), [g, c] = E({ width: "", transform: "", transition: "" }), u = (m) => {
    var z, p, A;
    if (s === m.order)
      return;
    const R = (z = l.current) == null ? void 0 : z.getBoundingClientRect().left, L = (p = l.current) == null ? void 0 : p.children[m.order].clientWidth, y = ((A = l.current) == null ? void 0 : A.children[m.order].getBoundingClientRect().left) - R;
    f(m.order), n == null || n(m), c((x) => ({
      width: `${L}px`,
      transform: `translate(${y - 1}px)`,
      transition: "transform 0.5s ease"
    }));
  };
  return be(() => {
    var y, z, p;
    const m = (y = l.current) == null ? void 0 : y.children[s].clientWidth, R = (z = l.current) == null ? void 0 : z.getBoundingClientRect().left, L = ((p = l.current) == null ? void 0 : p.children[s].getBoundingClientRect().left) - R;
    c({
      width: `${m}px`,
      transform: `translate(${L - 1}px)`,
      transition: ""
    });
  }, [a, (C = l.current) == null ? void 0 : C.children]), /* @__PURE__ */ d("div", { className: "toggle-bar", ref: l, children: [
    e.map((m) => /* @__PURE__ */ t(
      "div",
      {
        className: `toggle-item ${a} ${s === m.order ? "selected" : ""}`,
        style: {},
        onClick: () => u(m),
        children: /* @__PURE__ */ t("span", { children: m.name })
      },
      m.id
    )),
    /* @__PURE__ */ t("div", { className: "item-background", style: g })
  ] });
};
const At = (e) => /* @__PURE__ */ t(
  "div",
  {
    className: "common-button",
    style: (() => e.disable ? {
      backgroundColor: P.bg_disable,
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
const Vt = (e) => {
  const n = () => ({
    height: e.height ?? "280px",
    objectFit: e.objectFit ?? "fill"
  });
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: e.imageUrl, style: n() }) }) });
};
const Bt = (e) => /* @__PURE__ */ d("div", { className: "group-card", children: [
  e.isSub && /* @__PURE__ */ t($, { name: "Depth", size: "medium", color: P.grey_111 }),
  /* @__PURE__ */ d("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: e.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: e.label }) })
  ] })
] });
const Ot = (e) => {
  const [n, a] = E(!0), l = e.ratio * 100 + "%";
  return /* @__PURE__ */ d(
    "div",
    {
      className: "image-wrapper",
      style: { paddingTop: l },
      onClick: () => {
        var s;
        return (s = e.click) == null ? void 0 : s.call(e);
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
}, Ft = (e) => {
  const n = e.ratio ? e.ratio : 1;
  return /* @__PURE__ */ d("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(Ot, { ratio: n, imageUrl: e.imageUrl, click: e.click }),
    /* @__PURE__ */ d("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(jt, { percent: e.voteAverage, size: 34 }) }),
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
const Gt = (e) => /* @__PURE__ */ t(_e, { isOpen: e.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${e.isMobile ? "mobile" : ""}`, children: e.children }) });
const Ht = (e) => {
  const n = e.maxProgress !== 0 && e.maxProgress, a = e.title ? {
    padding: n ? "20px 20px 9px" : "20px"
  } : {
    padding: n ? "16px 16px 7px" : "16px"
  };
  return /* @__PURE__ */ d("div", { className: "popup-header-container", style: a, children: [
    /* @__PURE__ */ d("div", { className: "popup-header", children: [
      e.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.back, children: /* @__PURE__ */ t($, { name: "ArrowLeft", size: "big", color: P.grey_999 }) }),
      e.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: e.title }) }),
      e.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.close, children: /* @__PURE__ */ t($, { name: "Close", size: "big", color: P.grey_999 }) })
    ] }),
    n && /* @__PURE__ */ t("div", { className: "popup-header-progress", children: Array(e.maxProgress).fill(1).map((l, s) => /* @__PURE__ */ t(
      "span",
      {
        className: `${s + l === e.progress ? "selected" : ""}`
      },
      `progress${s}`
    )) })
  ] });
};
const Ut = (e) => {
  const n = {
    backgroundColor: e.backgroundColor ?? P.bg_black,
    color: e.fontColor ?? P.white
  };
  return /* @__PURE__ */ d(re, { children: [
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
const Yt = (e) => {
  const n = e.color ?? P.white;
  return /* @__PURE__ */ d("div", { className: "notification", children: [
    e.children,
    /* @__PURE__ */ d("div", { className: "info", style: { height: e.height, color: n }, children: [
      /* @__PURE__ */ t($, { name: "Caution", size: "small", color: P.grey_bbb }),
      /* @__PURE__ */ t("span", { children: e.text })
    ] })
  ] });
};
const Xt = (e) => {
  const n = `${e.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: n }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: e.imageUrl }) });
};
const qt = (e) => {
  const n = e.type ?? "text", [a, l] = E(!1), s = se(() => {
    let g = "";
    return (a || e.searchText) && (g += " focus"), e.screen === "mobile" && (g += " mobile"), g;
  }, [a, e.screen]), f = se(() => {
    var c;
    let g = s;
    return typeof e.validator == "function" && !((c = e.validator) != null && c.call(e, e.searchText)) && (g += " error"), g;
  }, [s, e.searchText]);
  return /* @__PURE__ */ d("div", { className: "input-wrapper" + f, children: [
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
const $t = (e) => {
  const n = e.type ?? "normal", a = e.size ?? "medium", l = e.selected ? "selected" : "";
  return /* @__PURE__ */ t(
    "div",
    {
      className: `selected-item ${n} ${a} ${l}`,
      onClick: () => {
        var s;
        return (s = e.click) == null ? void 0 : s.call(e);
      },
      onTouchStart: () => {
        var s;
        return (s = e.click) == null ? void 0 : s.call(e);
      },
      onTouchEnd: (s) => s.preventDefault(),
      children: e.text ?? e.children
    }
  );
}, Zt = ({
  items: e,
  selected: n,
  click: a,
  open: l,
  itemSize: s
}) => {
  const f = s ?? "medium";
  return /* @__PURE__ */ t("div", { className: `option-list ${l ? "slide" : ""}`, children: /* @__PURE__ */ t("div", { className: "option-items", children: e.map((g) => /* @__PURE__ */ t(
    $t,
    {
      size: f,
      text: g.name,
      selected: g.name === n,
      click: () => a == null ? void 0 : a(g)
    },
    g.name
  )) }) });
};
const Jt = (e) => {
  if (e.totalPages <= 3 + 6 + 2)
    return /* @__PURE__ */ t("ul", { className: "pagination-numbers", children: Array(e.totalPages).fill(1).map((c, u) => c + u).map((c, u) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(c),
        className: c === e.currentPage ? "selected" : "",
        children: c
      },
      `page${c}`
    )) });
  const s = Array(3).fill(1).map((c, u) => c + u), f = Array(6).fill(
    e.currentPage - 3 <= 3 + 1 ? 3 + 1 : e.currentPage + 2 + Math.floor(6 / 2) >= e.totalPages ? e.totalPages - 6 - 3 + 1 : e.currentPage - Math.floor(6 / 2)
  ).map((c, u) => c + u), g = Array(2).fill(e.totalPages).map((c, u) => c - u);
  return /* @__PURE__ */ d("ul", { className: "pagination-numbers", children: [
    s.map((c, u) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(c),
        className: c === e.currentPage ? "selected" : "",
        children: c
      },
      `page${c}`
    )),
    e.currentPage - Math.floor(6 / 2) > 3 + 1 && /* @__PURE__ */ t("li", { children: "..." }),
    f.map((c, u) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(c),
        className: c === e.currentPage ? "selected" : "",
        children: c
      },
      `page${c}`
    )),
    e.totalPages - 2 - Math.floor(6 / 2) > e.currentPage && /* @__PURE__ */ t("li", { children: "..." }),
    g.reverse().map((c, u) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(c),
        className: c === e.currentPage ? "selected" : "",
        children: c
      },
      `page${c}`
    ))
  ] });
};
const ye = (e) => {
  const n = H(null), [a, l] = E("");
  return ee(() => {
    l(location.pathname);
    const s = (f) => {
      var c;
      ((c = n.current) == null ? void 0 : c.contains(f.target)) || e(), l((u) => u !== location.pathname ? (e(), location.pathname) : u);
    };
    return window.addEventListener("click", s), () => {
      window.removeEventListener("click", s);
    };
  }, []), {
    ref: n
  };
}, Kt = () => {
  const [e, n] = E(""), [a, l] = E(window.innerWidth), s = {
    mobile: 600,
    tablet: 900,
    desktop: 1100
  }, f = Ir(() => {
    window.innerWidth < s.mobile ? n("mobile") : window.innerWidth >= s.mobile && window.innerWidth < s.tablet ? n("tablet") : n("desktop"), l(window.innerWidth);
  }, []);
  return ee(() => {
    const c = f;
    return window.addEventListener("resize", c), f(), () => {
      window.removeEventListener("resize", c);
    };
  }, []), {
    breakPointsClass: se(() => e, [e])
  };
}, Qt = ({ title: e, children: n, border: a }) => {
  const l = a === void 0, [s, f] = E(!1), [g, c] = E("hidden"), { ref: u } = ye(() => {
    f(!1), c("hidden");
  }), C = () => {
    s && c("unset");
  };
  function m() {
    f((R) => !R), s && c("hidden");
  }
  return /* @__PURE__ */ d(
    "div",
    {
      className: `basic-accordion ${l ? "border" : ""}`,
      ref: u,
      style: { overflow: g },
      onTransitionEnd: C,
      children: [
        /* @__PURE__ */ d("div", { className: "header", onClick: m, children: [
          /* @__PURE__ */ t("span", { className: "title", children: e }),
          /* @__PURE__ */ t("div", { className: `icon ${s ? "slide" : ""}`, children: /* @__PURE__ */ t($, { name: "Right", size: "medium", color: P.grey_111 }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `children ${s ? "slide" : ""}`, children: n })
      ]
    }
  );
};
const sr = ({
  itemLength: e,
  container: n,
  slide: a,
  currentIndex: l,
  clickLeft: s,
  clickRight: f,
  clickPoint: g,
  onTransitionEnd: c,
  onMouseEnter: u,
  onMouseLeave: C,
  onTouchStart: m,
  onTouchMove: R,
  onTouchEnd: L,
  children: y
}) => /* @__PURE__ */ d(
  "div",
  {
    className: "carousel",
    onMouseEnter: u,
    onMouseLeave: C,
    children: [
      /* @__PURE__ */ t("div", { className: "container", ref: n, children: /* @__PURE__ */ t(
        "div",
        {
          className: "slide-container",
          ref: a,
          onTransitionEnd: c,
          onTouchStart: m,
          onTouchMove: R,
          onTouchEnd: L,
          children: y
        }
      ) }),
      e >= 2 && /* @__PURE__ */ d(re, { children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "left",
            onClick: s,
            children: /* @__PURE__ */ t($, { name: "Right", size: "small", color: P.white })
          }
        ),
        /* @__PURE__ */ t("div", { className: "right", onClick: f, children: /* @__PURE__ */ t($, { name: "Right", size: "small", color: P.white }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "progress", children: Array(e).fill(1).map((z, p) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress-point ${l === p + 1 ? "selected" : ""}`,
          onClick: () => g(p + 1)
        },
        p
      )) })
    ]
  }
), cr = (e) => {
  const n = H(null), a = H(null), [l, s] = E(1), [f, g] = E(0);
  E(0);
  const c = () => {
    let y = l - 1;
    g(-1), a.current.style.transform = `translateX(-${y * 100}%)`, a.current.style.transition = "transform .3s linear";
  }, u = () => {
    if (!a.current)
      return;
    let y = l + 1;
    g(1), a.current.style.transform = `translateX(-${y * 100}%)`, a.current.style.transition = "transform .3s linear";
  };
  return {
    container: n,
    slide: a,
    currentIndex: l,
    clickLeft: c,
    clickRight: u,
    clickPoint: (y) => {
      y !== l && (a.current.style.transform = `translateX(-${y * 100}%)`, a.current.style.transition = "transform .3s linear", s(y));
    },
    touchMove: (y) => {
      y > 0 ? u() : c();
    },
    touchRecover: () => {
      a.current.style.transform = `translateX(-${l * 100}%)`, a.current.style.transition = "transform .15s linear";
    },
    onTransitionEnd: () => {
      f !== 0 && (f === 1 ? l === e ? (s(1), a.current.style.transform = "translateX(-100%)", a.current.style.transition = "none") : s((y) => y + 1) : l === 1 ? (s(e), s(e), a.current.style.transform = `translateX(-${e * 100}%)`, a.current.style.transition = "none") : s((y) => y - 1), g(0));
    }
  };
}, en = (e) => {
  const n = e.items.length, {
    container: a,
    slide: l,
    currentIndex: s,
    clickLeft: f,
    clickRight: g,
    clickPoint: c,
    onTransitionEnd: u
  } = cr(n);
  return /* @__PURE__ */ t(
    sr,
    {
      container: a,
      slide: l,
      currentIndex: s,
      clickLeft: f,
      clickRight: g,
      clickPoint: c,
      onTransitionEnd: u,
      itemLength: n,
      children: /* @__PURE__ */ d(re, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((C, m) => e.renderItems(C, m)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
}, rn = (e) => {
  const n = e.items.length, [a, l] = E(), [s, f] = E(!1), g = H(), {
    container: c,
    slide: u,
    currentIndex: C,
    clickLeft: m,
    clickRight: R,
    clickPoint: L,
    touchMove: y,
    touchRecover: z,
    onTransitionEnd: p
  } = cr(n);
  be(() => {
    const N = new IntersectionObserver(
      (j, U) => {
        j[0].isIntersecting ? f(!0) : f(!1);
      },
      {
        threshold: 0.1
      }
    );
    g.current = u.current.getBoundingClientRect().width;
    const I = u.current.parentElement;
    N.observe(I);
  }, []);
  const A = () => setInterval(() => {
    R();
  }, e.time);
  ee(() => {
    clearInterval(a), s && n >= 2 && l(A());
  }, [C, s]);
  const x = (N) => {
    N.preventDefault(), f(!1);
  }, k = H();
  return /* @__PURE__ */ t(
    sr,
    {
      container: c,
      slide: u,
      currentIndex: C,
      clickLeft: m,
      clickRight: R,
      clickPoint: L,
      onTransitionEnd: p,
      onMouseEnter: x,
      onMouseLeave: () => {
        f(!0);
      },
      itemLength: n,
      onTouchStart: (N) => {
        f(!1), k.current = N.changedTouches[0].pageX;
      },
      onTouchMove: (N) => {
        const I = N.changedTouches[0].pageX, j = k.current - I;
        if (Math.abs(j) > u.current.getBoundingClientRect().width / 1.5)
          return;
        let U;
        j > 0 ? U = `-${C * 100}% - ${Math.abs(j)}px` : U = `-${C * 100}% + ${Math.abs(j)}px`, u.current.style.transform = `translateX(calc(${U}))`;
      },
      onTouchEnd: (N) => {
        const I = g.current / 2.5, j = k.current - N.changedTouches[0].pageX;
        Math.abs(j) >= I ? y(j) : z(), setTimeout(() => {
          a && clearTimeout(a), f(!0);
        }, 2e3);
      },
      children: /* @__PURE__ */ d(re, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((N, I) => e.renderItems(N, I)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
};
const tn = ({ selected: e, children: n }) => {
  const [a, l] = E(!1), { ref: s } = ye(() => l(!1));
  return ee(() => {
    const f = setTimeout(() => {
      l(!1);
    }, 150);
    return () => {
      clearTimeout(f);
    };
  }, [e]), /* @__PURE__ */ d("div", { className: "dropdown", ref: s, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "dropdown-selected",
        onClick: () => l((f) => !f),
        children: e
      }
    ),
    Dr(n, { open: a, selected: e })
  ] });
};
const nn = (e) => {
  const { ref: n } = ye(() => f()), [a, l] = E(!1), s = () => {
    l((u) => !u);
    const c = document.querySelector("body");
    a || (c.style.overflow = "hidden");
  }, f = () => {
    l((c) => {
      if (c) {
        const u = document.querySelector("body");
        u.style.overflow = "auto";
      }
      return !1;
    });
  }, g = {
    color: e.iconColor ?? P.grey_111,
    backgroundColor: e.backgroundColor ?? P.white
  };
  return /* @__PURE__ */ t(re, { children: /* @__PURE__ */ d(
    "div",
    {
      className: `navigation ${e.fixed ? "fixed" : ""}`,
      style: g,
      ref: n,
      children: [
        /* @__PURE__ */ t(Nt, { ...e, openDrawer: s, children: e.isMobile ? e.children[1] : e.children }),
        /* @__PURE__ */ d(
          "div",
          {
            className: `navigation-drawer ${a && e.isMobile ? "show" : ""}`,
            children: [
              /* @__PURE__ */ t("div", { className: "navigation-drawer-close", onClick: f, children: /* @__PURE__ */ t(
                $,
                {
                  name: "Close",
                  size: "big",
                  color: e.iconColor ?? P.grey_111
                }
              ) }),
              /* @__PURE__ */ t("div", { className: "navigation-drawer-items", children: e.children[0] })
            ]
          }
        ),
        a && e.isMobile && /* @__PURE__ */ t("div", { onClick: f, className: "navigation-overlay" })
      ]
    }
  ) });
};
const on = ({ opacity: e }) => /* @__PURE__ */ t(_e, { isOpen: !0, opacity: e, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const an = (e) => {
  const n = Array(8).fill(1).map((a, l) => a + l);
  return /* @__PURE__ */ d(
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
  rn as AutoCarousel,
  Qt as BasicAccordion,
  en as BasicCarousel,
  tn as BasicDropDown,
  At as Button,
  Vt as Card,
  jt as CircularProgressBar,
  P as Colors,
  $ as Element,
  Bt as GroupCard,
  Nt as HeaderBar,
  qt as InputBox,
  on as LoadingSpinner,
  nn as Navigation,
  Yt as Notification,
  Zt as OptionList,
  _e as OverLay,
  an as PageLoadingSpinner,
  Jt as PaginationNumbers,
  Gt as Popup,
  Ht as PopupBasicHeader,
  Ut as PopupDrawer,
  Ft as PosterCard,
  Ot as RatioCardImage,
  Xt as RatioImage,
  $t as SelectedItem,
  Dt as SettingBar,
  Wt as ToggleBar,
  Kt as useBreakPoints,
  ye as useCloseEvent
};
