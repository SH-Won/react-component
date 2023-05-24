import te, { lazy as xr, Suspense as Sr, useState as M, useMemo as Ee, useRef as Lr } from "react";
var Y = {}, Er = {
  get exports() {
    return Y;
  },
  set exports(r) {
    Y = r;
  }
}, V = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function jr() {
  if (je)
    return V;
  je = 1;
  var r = te, i = Symbol.for("react.element"), u = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(k, v, E) {
    var x, g = {}, w = null, F = null;
    E !== void 0 && (w = "" + E), v.key !== void 0 && (w = "" + v.key), v.ref !== void 0 && (F = v.ref);
    for (x in v)
      d.call(v, x) && !p.hasOwnProperty(x) && (g[x] = v[x]);
    if (k && k.defaultProps)
      for (x in v = k.defaultProps, v)
        g[x] === void 0 && (g[x] = v[x]);
    return { $$typeof: i, type: k, key: w, ref: F, props: g, _owner: y.current };
  }
  return V.Fragment = u, V.jsx = m, V.jsxs = m, V;
}
var W = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pe;
function Pr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = te, i = Symbol.for("react.element"), u = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), y = Symbol.for("react.strict_mode"), p = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), k = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), x = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ge = "@@iterator";
    function Ue(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = ne && e[ne] || e[Ge];
      return typeof n == "function" ? n : null;
    }
    var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
          o[a - 1] = arguments[a];
        He("error", e, o);
      }
    }
    function He(e, n, o) {
      {
        var a = z.ReactDebugCurrentFrame, f = a.getStackAddendum();
        f !== "" && (n += "%s", o = o.concat([f]));
        var h = o.map(function(l) {
          return String(l);
        });
        h.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var Ye = !1, Xe = !1, qe = !1, Ze = !1, Je = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === p || Je || e === y || e === E || e === x || Ze || e === F || Ye || Xe || qe || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === g || e.$$typeof === m || e.$$typeof === k || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Qe(e, n, o) {
      var a = e.displayName;
      if (a)
        return a;
      var f = n.displayName || n.name || "";
      return f !== "" ? o + "(" + f + ")" : o;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case u:
          return "Portal";
        case p:
          return "Profiler";
        case y:
          return "StrictMode";
        case E:
          return "Suspense";
        case x:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var n = e;
            return oe(n) + ".Consumer";
          case m:
            var o = e;
            return oe(o._context) + ".Provider";
          case v:
            return Qe(e, e.render, "ForwardRef");
          case g:
            var a = e.displayName || null;
            return a !== null ? a : j(e.type) || "Memo";
          case w: {
            var f = e, h = f._payload, l = f._init;
            try {
              return j(l(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, D = 0, ae, se, ce, le, ue, de, fe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function er() {
      {
        if (D === 0) {
          ae = console.log, se = console.info, ce = console.warn, le = console.error, ue = console.group, de = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        D++;
      }
    }
    function rr() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, e, {
              value: ae
            }),
            info: T({}, e, {
              value: se
            }),
            warn: T({}, e, {
              value: ce
            }),
            error: T({}, e, {
              value: le
            }),
            group: T({}, e, {
              value: ue
            }),
            groupCollapsed: T({}, e, {
              value: de
            }),
            groupEnd: T({}, e, {
              value: fe
            })
          });
        }
        D < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = z.ReactCurrentDispatcher, q;
    function I(e, n, o) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (f) {
            var a = f.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var Z = !1, B;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      B = new tr();
    }
    function ge(e, n) {
      if (!e || Z)
        return "";
      {
        var o = B.get(e);
        if (o !== void 0)
          return o;
      }
      var a;
      Z = !0;
      var f = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = X.current, X.current = null, er();
      try {
        if (n) {
          var l = function() {
            throw Error();
          };
          if (Object.defineProperty(l.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(l, []);
            } catch (P) {
              a = P;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (P) {
              a = P;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            a = P;
          }
          e();
        }
      } catch (P) {
        if (P && a && typeof P.stack == "string") {
          for (var c = P.stack.split(`
`), R = a.stack.split(`
`), b = c.length - 1, _ = R.length - 1; b >= 1 && _ >= 0 && c[b] !== R[_]; )
            _--;
          for (; b >= 1 && _ >= 0; b--, _--)
            if (c[b] !== R[_]) {
              if (b !== 1 || _ !== 1)
                do
                  if (b--, _--, _ < 0 || c[b] !== R[_]) {
                    var S = `
` + c[b].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, S), S;
                  }
                while (b >= 1 && _ >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = h, rr(), Error.prepareStackTrace = f;
      }
      var $ = e ? e.displayName || e.name : "", Le = $ ? I($) : "";
      return typeof e == "function" && B.set(e, Le), Le;
    }
    function nr(e, n, o) {
      return ge(e, !1);
    }
    function ir(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function G(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, ir(e));
      if (typeof e == "string")
        return I(e);
      switch (e) {
        case E:
          return I("Suspense");
        case x:
          return I("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return nr(e.render);
          case g:
            return G(e.type, n, o);
          case w: {
            var a = e, f = a._payload, h = a._init;
            try {
              return G(h(f), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, me = {}, ve = z.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var n = e._owner, o = G(e.type, e._source, n ? n.type : null);
        ve.setExtraStackFrame(o);
      } else
        ve.setExtraStackFrame(null);
    }
    function or(e, n, o, a, f) {
      {
        var h = Function.call.bind(U);
        for (var l in e)
          if (h(e, l)) {
            var c = void 0;
            try {
              if (typeof e[l] != "function") {
                var R = Error((a || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              c = e[l](n, l, a, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              c = b;
            }
            c && !(c instanceof Error) && (H(f), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", o, l, typeof c), H(null)), c instanceof Error && !(c.message in me) && (me[c.message] = !0, H(f), C("Failed %s type: %s", o, c.message), H(null));
          }
      }
    }
    var ar = Array.isArray;
    function J(e) {
      return ar(e);
    }
    function sr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function cr(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function _e(e) {
      if (cr(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), be(e);
    }
    var A = z.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, ke, K;
    K = {};
    function ur(e) {
      if (U.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function dr(e) {
      if (U.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, n) {
      if (typeof e.ref == "string" && A.current && n && A.current.stateNode !== n) {
        var o = j(A.current.type);
        K[o] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(A.current.type), e.ref), K[o] = !0);
      }
    }
    function hr(e, n) {
      {
        var o = function() {
          ye || (ye = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function gr(e, n) {
      {
        var o = function() {
          ke || (ke = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var mr = function(e, n, o, a, f, h, l) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: l,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function vr(e, n, o, a, f) {
      {
        var h, l = {}, c = null, R = null;
        o !== void 0 && (_e(o), c = "" + o), dr(n) && (_e(n.key), c = "" + n.key), ur(n) && (R = n.ref, fr(n, f));
        for (h in n)
          U.call(n, h) && !lr.hasOwnProperty(h) && (l[h] = n[h]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (h in b)
            l[h] === void 0 && (l[h] = b[h]);
        }
        if (c || R) {
          var _ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && hr(l, _), R && gr(l, _);
        }
        return mr(e, c, R, f, a, A.current, l);
      }
    }
    var Q = z.ReactCurrentOwner, we = z.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var n = e._owner, o = G(e.type, e._source, n ? n.type : null);
        we.setExtraStackFrame(o);
      } else
        we.setExtraStackFrame(null);
    }
    var ee;
    ee = !1;
    function re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function Ce() {
      {
        if (Q.current) {
          var e = j(Q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function br(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + n + ":" + o + ".";
        }
        return "";
      }
    }
    var Re = {};
    function _r(e) {
      {
        var n = Ce();
        if (!n) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (n = `

Check the top-level render call using <` + o + ">.");
        }
        return n;
      }
    }
    function pe(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = _r(n);
        if (Re[o])
          return;
        Re[o] = !0;
        var a = "";
        e && e._owner && e._owner !== Q.current && (a = " It was passed a child from " + j(e._owner.type) + "."), N(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, a), N(null);
      }
    }
    function xe(e, n) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var o = 0; o < e.length; o++) {
            var a = e[o];
            re(a) && pe(a, n);
          }
        else if (re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var f = Ue(e);
          if (typeof f == "function" && f !== e.entries)
            for (var h = f.call(e), l; !(l = h.next()).done; )
              re(l.value) && pe(l.value, n);
        }
      }
    }
    function yr(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var o;
        if (typeof n == "function")
          o = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === g))
          o = n.propTypes;
        else
          return;
        if (o) {
          var a = j(n);
          or(o, e.props, "prop", a, e);
        } else if (n.PropTypes !== void 0 && !ee) {
          ee = !0;
          var f = j(n);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", f || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function kr(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var a = n[o];
          if (a !== "children" && a !== "key") {
            N(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), N(null);
            break;
          }
        }
        e.ref !== null && (N(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), N(null));
      }
    }
    function Se(e, n, o, a, f, h) {
      {
        var l = Ke(e);
        if (!l) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = br(f);
          R ? c += R : c += Ce();
          var b;
          e === null ? b = "null" : J(e) ? b = "array" : e !== void 0 && e.$$typeof === i ? (b = "<" + (j(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, c);
        }
        var _ = vr(e, n, o, f, h);
        if (_ == null)
          return _;
        if (l) {
          var S = n.children;
          if (S !== void 0)
            if (a)
              if (J(S)) {
                for (var $ = 0; $ < S.length; $++)
                  xe(S[$], e);
                Object.freeze && Object.freeze(S);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(S, e);
        }
        return e === d ? kr(_) : yr(_), _;
      }
    }
    function wr(e, n, o) {
      return Se(e, n, o, !0);
    }
    function Cr(e, n, o) {
      return Se(e, n, o, !1);
    }
    var Rr = Cr, pr = wr;
    W.Fragment = d, W.jsx = Rr, W.jsxs = pr;
  }()), W;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = jr() : r.exports = Pr();
})(Er);
const t = Y.jsx, s = Y.jsxs, Or = "#6440dd", Tr = "#5934D8", zr = "#F5222D", Nr = "#111111", $r = "#666666", Mr = "#333333", Dr = "#999999", Ar = "#bbbbbb", Vr = "#cccccc", Wr = "#f4f4f4", Fr = "#f5f6f8", Ir = "#f2f4f7", Br = "#dbd6eb", Gr = "#eeebff", Ur = "#b6b7b9", Hr = "#e7e9ef", Yr = "#cfd4dd", Xr = "#d42a21", qr = "#1968e5", Zr = "#27c4b8", Jr = "#fff", Kr = "#f4f0ff", Qr = "#ABAEBF", et = "#03c75a", rt = "#e1a016", tt = "#da1c26", L = {
  main: Or,
  main_sub: Tr,
  notice: zr,
  grey_111: Nr,
  grey_666: $r,
  grey_333: Mr,
  grey_999: Dr,
  grey_bbb: Ar,
  grey_ccc: Vr,
  grey_f4: Wr,
  bg_main: Fr,
  bg_noti: Ir,
  bg_disable: Br,
  bg_sub: Gr,
  bg_trans: Ur,
  line_01: Hr,
  line_02: Yr,
  plus: Xr,
  minus: qr,
  code: Zr,
  white: Jr,
  option_hover: Kr,
  m_gnb_normal: Qr,
  green: et,
  orange: rt,
  red: tt
}, nt = (r, i) => {
  const u = r[i];
  return u ? typeof u == "function" ? u() : Promise.resolve(u) : new Promise((d, y) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(y.bind(null, new Error("Unknown variable dynamic import: " + i)));
  });
}, Oe = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      fill: r.color,
      width: i,
      height: i,
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
}, it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" })), Te = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: i,
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
        /* @__PURE__ */ s("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ t(
            "path",
            {
              d: "M4 12L20 12",
              stroke: r.color,
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
              stroke: r.color,
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
}, ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" })), ze = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      id: "caution-sign-circle",
      fill: "#999999",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon line",
      stroke: r.color,
      width: i,
      height: i,
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
        /* @__PURE__ */ s("g", { id: "SVGRepo_iconCarrier", children: [
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
}, at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ze
}, Symbol.toStringTag, { value: "Module" })), Ne = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      width: i,
      height: i,
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
            fill: r.color,
            d: "m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"
          }
        ) })
      ]
    }
  );
}, st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" })), $e = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ t("svg", { width: i, height: i, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z",
      fill: r.color
    }
  ) });
}, ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), Me = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: i,
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
        /* @__PURE__ */ s("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ s("g", { id: "Arrow / Arrow_Sub_Down_Right", children: [
            " ",
            /* @__PURE__ */ t(
              "path",
              {
                id: "Vector",
                d: "M13 11L18 16M18 16L13 21M18 16H10.1969C9.07899 16 8.5192 16 8.0918 15.7822C7.71547 15.5905 7.40973 15.2839 7.21799 14.9076C7 14.4798 7 13.9201 7 12.8V3",
                stroke: r.color,
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
}, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), De = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
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
      width: i,
      height: i,
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
        /* @__PURE__ */ s("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ t(
            "circle",
            {
              id: "XMLID_224_",
              cx: "16",
              cy: "16",
              fill: "none",
              r: "4",
              stroke: r.color,
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
              stroke: r.color,
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
}, ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), Ae = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      width: i,
      height: i,
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
            width: i,
            height: i,
            children: /* @__PURE__ */ t("path", { fill: "#D9D9D9", d: "M0 0h30v30H0z" })
          }
        ),
        /* @__PURE__ */ t("g", { mask: "url(#a)", children: /* @__PURE__ */ t(
          "path",
          {
            d: "M6 20.25v-1.5h17.5v1.5H6Zm0-4.88v-1.5h17.5v1.5H6Zm0-4.87V9h17.5v1.5H6Z",
            fill: r.color
          }
        ) })
      ]
    }
  );
}, dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ae
}, Symbol.toStringTag, { value: "Module" })), Ve = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      viewBox: "0 0 32 32",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      fill: "#000000",
      width: i,
      height: i,
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
        /* @__PURE__ */ s("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ t("g", { id: "icomoon-ignore" }),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M16 2.672c-7.362 0-13.328 5.966-13.328 13.328s5.966 13.328 13.328 13.328c7.362 0 13.328-5.966 13.328-13.328s-5.966-13.328-13.328-13.328zM16 28.262c-6.761 0-12.262-5.501-12.262-12.262s5.501-12.262 12.262-12.262c6.761 0 12.262 5.501 12.262 12.262s-5.501 12.262-12.262 12.262z",
              fill: r.color
            }
          ),
          /* @__PURE__ */ t(
            "path",
            {
              d: "M16.533 8.003h-1.066v7.464h-7.428v1.066h7.428v7.428h1.066v-7.428h7.464v-1.066h-7.464z",
              fill: r.color
            }
          )
        ] })
      ]
    }
  );
}, ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), We = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: i,
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
        /* @__PURE__ */ s("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ t(
            "path",
            {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.29289 4.29289C8.68342 3.90237 9.31658 3.90237 9.70711 4.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L9.70711 19.7071C9.31658 20.0976 8.68342 20.0976 8.29289 19.7071C7.90237 19.3166 7.90237 18.6834 8.29289 18.2929L14.5858 12L8.29289 5.70711C7.90237 5.31658 7.90237 4.68342 8.29289 4.29289Z",
              fill: r.color ?? "#000000"
            }
          ),
          " "
        ] })
      ]
    }
  );
}, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), Fe = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: i,
      height: i,
      viewBox: "0 0 32 32",
      version: "1.1",
      children: [
        /* @__PURE__ */ t("title", { children: "search" }),
        /* @__PURE__ */ t("path", { d: "M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z" })
      ]
    }
  );
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" })), Ie = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ s(
    "svg",
    {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: i,
      height: i,
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
        /* @__PURE__ */ s("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ t(
            "rect",
            {
              width: "48",
              height: "48",
              fill: r.color,
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
}, mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
}, Symbol.toStringTag, { value: "Module" })), O = (r) => {
  const i = () => {
    switch (r.name) {
      case "Adult":
        return /* @__PURE__ */ t(Oe, { ...r });
      case "ArrowLeft":
        return /* @__PURE__ */ t(Te, { ...r });
      case "Caution":
        return /* @__PURE__ */ t(ze, { ...r });
      case "Check":
        return /* @__PURE__ */ t(Ne, { ...r });
      case "Close":
        return /* @__PURE__ */ t($e, { ...r });
      case "Depth":
        return /* @__PURE__ */ t(Me, { ...r });
      case "Gear":
        return /* @__PURE__ */ t(De, { ...r });
      case "Hamburger":
        return /* @__PURE__ */ t(Ae, { ...r });
      case "Plus":
        return /* @__PURE__ */ t(Ve, { ...r });
      case "Right":
        return /* @__PURE__ */ t(We, { ...r });
      case "Search":
        return /* @__PURE__ */ t(Fe, { ...r });
      case "Setting":
        return /* @__PURE__ */ t(Ie, { ...r });
      default:
        return null;
    }
  }, u = () => r.size === "big" ? "30px" : r.size === "medium" ? "24px" : "20px";
  return xr(() => nt(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => it), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => ot), "./icons/Caution.tsx": () => Promise.resolve().then(() => at), "./icons/Check.tsx": () => Promise.resolve().then(() => st), "./icons/Close.tsx": () => Promise.resolve().then(() => ct), "./icons/Depth.tsx": () => Promise.resolve().then(() => lt), "./icons/Gear.tsx": () => Promise.resolve().then(() => ut), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => dt), "./icons/Plus.tsx": () => Promise.resolve().then(() => ft), "./icons/Right.tsx": () => Promise.resolve().then(() => ht), "./icons/Search.tsx": () => Promise.resolve().then(() => gt), "./icons/Setting.tsx": () => Promise.resolve().then(() => mt) }), `./icons/${r.name}.tsx`)), /* @__PURE__ */ t(Sr, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: u(), display: "inline-block" }, children: i() }) });
};
const yt = (r) => {
  const i = typeof r.back == "function", u = r.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ s("div", { className: u, children: [
    /* @__PURE__ */ s("div", { className: "logo", children: [
      i && /* @__PURE__ */ t("div", { onClick: () => {
        var d;
        return (d = r.back) == null ? void 0 : d.call(r, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(O, { name: "ArrowLeft", size: "big", color: L.grey_111 }) }),
      /* @__PURE__ */ t("span", { onClick: () => {
        var d;
        return (d = r.back) == null ? void 0 : d.call(r, !0);
      }, children: r.title })
    ] }),
    r.children
  ] });
};
const vt = (r) => {
  const i = r.size / 14, u = {
    width: r.size + "px",
    height: r.size + "px",
    borderRadius: r.size + i / 1.5 + "px",
    padding: i / 1.5 + "px"
  }, d = {
    borderRadius: r.size + "px"
  }, y = r.percent >= 50 ? 18 * (r.percent - 50) / 5 : 0, p = r.percent <= 50 ? 18 * (r.percent / 5) : 180, m = r.percent < 50 ? L.red : r.percent < 75 ? L.orange : L.green, k = {
    border: `${i}px solid ${m}`,
    borderTopRightRadius: r.size + "px",
    borderBottomRightRadius: r.size + "px",
    transform: `rotate(${y}deg)`
  }, v = {
    border: `${i}px solid ${m}`,
    borderTopLeftRadius: r.size + "px",
    borderBottomLeftRadius: r.size + "px",
    transform: `rotate(${p}deg)`
  }, E = {
    fontSize: r.size / 4 + "px",
    borderRadius: r.size - i * 2 + "px",
    width: r.size - i * 2 + "px",
    height: r.size - i * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: u, children: /* @__PURE__ */ s("div", { className: "circular-progress-bar", style: d, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: k }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: v }) }),
    /* @__PURE__ */ s("div", { className: "percent", style: E, children: [
      r.percent,
      "%"
    ] })
  ] }) });
};
const kt = (r) => /* @__PURE__ */ t(
  "div",
  {
    className: "common-button",
    style: (() => r.disable ? {
      backgroundColor: L.bg_disable,
      padding: r.size === "big" ? "14px 24px" : "12px 20px",
      border: r.border ? `1px solid ${r.border}` : "",
      width: r.width,
      color: r.fontColor
    } : {
      backgroundColor: r.color,
      padding: r.size === "big" ? "14px 24px" : "12px 20px",
      border: r.border ? `1px solid ${r.border}` : "",
      width: r.width,
      color: r.fontColor
    })(),
    onClick: r.click,
    children: r.children
  }
);
const wt = (r) => {
  const i = () => ({
    height: r.height ?? "280px",
    objectFit: r.objectFit ?? "fill"
  });
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: r.imageUrl, style: i() }) }) });
};
const Ct = (r) => /* @__PURE__ */ s("div", { className: "group-card", children: [
  r.isSub && /* @__PURE__ */ t(O, { name: "Depth", size: "medium", color: L.grey_111 }),
  /* @__PURE__ */ s("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: r.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: r.label }) })
  ] })
] });
const bt = (r) => {
  const i = r.ratio * 100 + "%";
  return /* @__PURE__ */ t(
    "div",
    {
      className: "image-wrapper",
      style: { paddingTop: i },
      onClick: () => {
        var u;
        return (u = r.click) == null ? void 0 : u.call(r);
      },
      children: /* @__PURE__ */ t("img", { src: r.imageUrl, loading: "lazy" })
    }
  );
}, Rt = (r) => {
  const i = r.ratio ? r.ratio : 1;
  return /* @__PURE__ */ s("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(bt, { ratio: i, imageUrl: r.imageUrl, click: r.click }),
    /* @__PURE__ */ s("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(vt, { percent: r.voteAverage, size: 34 }) }),
      /* @__PURE__ */ t("span", { className: "title", children: r.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: r.releaseDate })
    ] })
  ] });
};
const Be = (r) => {
  const i = {
    backgroundColor: `rgba(0,0,0,${r.opacity})`
  };
  return /* @__PURE__ */ t(te.Fragment, { children: r.isOpen && /* @__PURE__ */ t("div", { className: "overlay", style: i, children: r.children }) });
};
const pt = (r) => /* @__PURE__ */ t(Be, { isOpen: r.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${r.isMobile ? "mobile" : ""}`, children: r.children }) });
const xt = (r) => {
  const i = r.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ s("div", { className: "popup-header-container", style: i, children: [
    /* @__PURE__ */ s("div", { className: "popup-header", children: [
      r.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.back, children: /* @__PURE__ */ t(O, { name: "ArrowLeft", size: "big", color: L.grey_999 }) }),
      r.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: r.title }) }),
      r.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.close, children: /* @__PURE__ */ t(O, { name: "Close", size: "big", color: L.grey_999 }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "popup-header-progress", children: r.maxProgress && Array(r.maxProgress).fill(1).map((u, d) => /* @__PURE__ */ t(
      "span",
      {
        className: `${d + u === r.progress ? "selected" : ""}`
      },
      `progress${d}`
    )) })
  ] });
};
const St = (r) => /* @__PURE__ */ s("div", { className: "notification", children: [
  r.children,
  /* @__PURE__ */ s("div", { className: "info", style: { height: r.height }, children: [
    /* @__PURE__ */ t(O, { name: "Caution", size: "small", color: L.grey_bbb }),
    /* @__PURE__ */ t("span", { children: r.text })
  ] })
] });
const Lt = (r) => {
  const i = `${r.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: i }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: r.imageUrl }) });
};
const Et = (r) => {
  const i = r.type ?? "text", [u, d] = M(!1), y = Ee(() => {
    let m = "";
    return (u || r.searchText) && (m += " focus"), r.screen === "mobile" && (m += " mobile"), m;
  }, [u, r.screen]), p = Ee(() => {
    var k;
    let m = y;
    return typeof r.validator == "function" && !((k = r.validator) != null && k.call(r, r.searchText)) && (m += " error"), m;
  }, [y, r.searchText]);
  return /* @__PURE__ */ s("div", { className: "input-wrapper" + p, children: [
    r.children,
    /* @__PURE__ */ t(
      "input",
      {
        type: i,
        className: "input-search",
        onChange: r.onChange,
        placeholder: r.placeholder,
        value: r.searchText,
        onFocus: () => d(!0),
        onBlur: () => d(!1)
      }
    )
  ] });
};
const jt = ({ title: r, children: i }) => {
  const [u, d] = M(!1), [y, p] = M("hidden"), m = () => {
    u && p("unset");
  };
  function k() {
    d((v) => !v), u && p("hidden");
  }
  return /* @__PURE__ */ s(
    "div",
    {
      className: "basic-accordion",
      style: { overflow: y },
      onTransitionEnd: m,
      children: [
        /* @__PURE__ */ s(
          "div",
          {
            className: "header",
            onClick: k,
            children: [
              /* @__PURE__ */ t("span", { className: "title", children: r }),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `icon ${u ? "slide" : ""}`,
                  children: /* @__PURE__ */ t(O, { name: "Right", size: "medium", color: L.grey_111 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t("div", { className: `children ${u ? "slide" : ""}`, children: i })
      ]
    }
  );
};
const Pt = (r) => {
  const i = Lr(null), u = r.items.map((g, w) => ({
    index: w + 1,
    item: g
  }));
  M(u[0]);
  const [d, y] = M(1), [p, m] = M(0), k = () => {
    let g = d - 1;
    m(-1), i.current.style.transform = `translateX(-${g * 100}%)`, i.current.style.transition = "transform .3s linear";
  }, v = () => {
    let g = d + 1;
    m(1), i.current.style.transform = `translateX(-${g * 100}%)`, i.current.style.transition = "transform .3s linear";
  }, E = (g) => {
    i.current.style.transform = `translateX(-${g * 100}%)`, i.current.style.transition = "transform .3s linear", y(g);
  };
  return /* @__PURE__ */ s("div", { className: "carousel", children: [
    /* @__PURE__ */ s(
      "div",
      {
        className: "slide-container",
        ref: i,
        onTransitionEnd: () => {
          p !== 0 && (p === 1 ? d === r.items.length ? (y(1), i.current.style.transform = "translateX(-100%)", i.current.style.transition = "none") : y((g) => g + 1) : d === 1 ? (y(r.items.length), i.current.style.transform = `translateX(-${r.items.length * 100}%)`, i.current.style.transition = "none") : y((g) => g - 1), m(0));
        },
        children: [
          r.renderItems(
            r.items[r.items.length - 1],
            r.items.length
          ),
          r.items.map((g, w) => r.renderItems(g, w)),
          r.renderItems(r.items[0], -1)
        ]
      }
    ),
    /* @__PURE__ */ t("div", { className: "left", onClick: k, children: /* @__PURE__ */ t(O, { name: "Right", size: "medium", color: L.white }) }),
    /* @__PURE__ */ t("div", { className: "right", onClick: v, children: /* @__PURE__ */ t(O, { name: "Right", size: "medium", color: L.white }) }),
    /* @__PURE__ */ t("div", { className: "progress", children: Array(r.items.length).fill(1).map((g, w) => /* @__PURE__ */ t(
      "div",
      {
        className: `progress-point ${d === w + 1 ? "selected" : ""}`,
        onClick: () => E(w + 1)
      },
      w
    )) })
  ] });
};
const Ot = ({ opacity: r }) => /* @__PURE__ */ t(Be, { isOpen: !0, opacity: r, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const Tt = (r) => {
  const i = Array(8).fill(1).map((u, d) => u + d);
  return /* @__PURE__ */ s(
    "div",
    {
      className: "page-loading-container",
      style: { height: r.customHeight },
      children: [
        /* @__PURE__ */ t("div", { className: "page-loading-wrapper", children: i.map((u) => /* @__PURE__ */ t("div", { className: "loader" }, `loaderKey${u}`)) }),
        /* @__PURE__ */ t("div", { className: "text", children: r.text })
      ]
    }
  );
};
export {
  jt as BasicAccordion,
  Pt as BasicCarousel,
  kt as Button,
  wt as Card,
  vt as CircularProgressBar,
  L as Colors,
  O as Element,
  Ct as GroupCard,
  yt as HeaderBar,
  Et as InputBox,
  Ot as LoadingSpinner,
  St as Notification,
  Be as OverLay,
  Tt as PageLoadingSpinner,
  pt as Popup,
  xt as PopupBasicHeader,
  Rt as PosterCard,
  bt as RatioCardImage,
  Lt as RatioImage
};
