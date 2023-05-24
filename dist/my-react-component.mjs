import te, { lazy as xr, Suspense as Sr, useState as re, useMemo as Ee } from "react";
var H = {}, Lr = {
  get exports() {
    return H;
  },
  set exports(r) {
    H = r;
  }
}, A = {};
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
function Er() {
  if (je)
    return A;
  je = 1;
  var r = te, i = Symbol.for("react.element"), d = Symbol.for("react.fragment"), h = Object.prototype.hasOwnProperty, k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(p, m, j) {
    var w, S = {}, P = null, W = null;
    j !== void 0 && (P = "" + j), m.key !== void 0 && (P = "" + m.key), m.ref !== void 0 && (W = m.ref);
    for (w in m)
      h.call(m, w) && !R.hasOwnProperty(w) && (S[w] = m[w]);
    if (p && p.defaultProps)
      for (w in m = p.defaultProps, m)
        S[w] === void 0 && (S[w] = m[w]);
    return { $$typeof: i, type: p, key: P, ref: W, props: S, _owner: k.current };
  }
  return A.Fragment = d, A.jsx = b, A.jsxs = b, A;
}
var V = {};
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
function jr() {
  return Pe || (Pe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = te, i = Symbol.for("react.element"), d = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), w = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ne = Symbol.iterator, Ge = "@@iterator";
    function Ue(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = ne && e[ne] || e[Ge];
      return typeof n == "function" ? n : null;
    }
    var T = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
          o[a - 1] = arguments[a];
        He("error", e, o);
      }
    }
    function He(e, n, o) {
      {
        var a = T.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (n += "%s", o = o.concat([u]));
        var f = o.map(function(l) {
          return String(l);
        });
        f.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ye = !1, qe = !1, Xe = !1, Ze = !1, Je = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ke(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === h || e === R || Je || e === k || e === j || e === w || Ze || e === W || Ye || qe || Xe || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === S || e.$$typeof === b || e.$$typeof === p || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Qe(e, n, o) {
      var a = e.displayName;
      if (a)
        return a;
      var u = n.displayName || n.name || "";
      return u !== "" ? o + "(" + u + ")" : o;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case h:
          return "Fragment";
        case d:
          return "Portal";
        case R:
          return "Profiler";
        case k:
          return "StrictMode";
        case j:
          return "Suspense";
        case w:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var n = e;
            return oe(n) + ".Consumer";
          case b:
            var o = e;
            return oe(o._context) + ".Provider";
          case m:
            return Qe(e, e.render, "ForwardRef");
          case S:
            var a = e.displayName || null;
            return a !== null ? a : L(e.type) || "Memo";
          case P: {
            var u = e, f = u._payload, l = u._init;
            try {
              return L(l(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, $ = 0, ae, se, ce, le, ue, de, fe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function er() {
      {
        if ($ === 0) {
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
        $++;
      }
    }
    function rr() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: ae
            }),
            info: O({}, e, {
              value: se
            }),
            warn: O({}, e, {
              value: ce
            }),
            error: O({}, e, {
              value: le
            }),
            group: O({}, e, {
              value: ue
            }),
            groupCollapsed: O({}, e, {
              value: de
            }),
            groupEnd: O({}, e, {
              value: fe
            })
          });
        }
        $ < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = T.ReactCurrentDispatcher, q;
    function F(e, n, o) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var X = !1, B;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      B = new tr();
    }
    function ge(e, n) {
      if (!e || X)
        return "";
      {
        var o = B.get(e);
        if (o !== void 0)
          return o;
      }
      var a;
      X = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = Y.current, Y.current = null, er();
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
            } catch (E) {
              a = E;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (E) {
              a = E;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            a = E;
          }
          e();
        }
      } catch (E) {
        if (E && a && typeof E.stack == "string") {
          for (var s = E.stack.split(`
`), y = a.stack.split(`
`), g = s.length - 1, v = y.length - 1; g >= 1 && v >= 0 && s[g] !== y[v]; )
            v--;
          for (; g >= 1 && v >= 0; g--, v--)
            if (s[g] !== y[v]) {
              if (g !== 1 || v !== 1)
                do
                  if (g--, v--, v < 0 || s[g] !== y[v]) {
                    var C = `
` + s[g].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, C), C;
                  }
                while (g >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        X = !1, Y.current = f, rr(), Error.prepareStackTrace = u;
      }
      var N = e ? e.displayName || e.name : "", Le = N ? F(N) : "";
      return typeof e == "function" && B.set(e, Le), Le;
    }
    function nr(e, n, o) {
      return ge(e, !1);
    }
    function ir(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function I(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ge(e, ir(e));
      if (typeof e == "string")
        return F(e);
      switch (e) {
        case j:
          return F("Suspense");
        case w:
          return F("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return nr(e.render);
          case S:
            return I(e.type, n, o);
          case P: {
            var a = e, u = a._payload, f = a._init;
            try {
              return I(f(u), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, ve = {}, me = T.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var n = e._owner, o = I(e.type, e._source, n ? n.type : null);
        me.setExtraStackFrame(o);
      } else
        me.setExtraStackFrame(null);
    }
    function or(e, n, o, a, u) {
      {
        var f = Function.call.bind(G);
        for (var l in e)
          if (f(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var y = Error((a || "React class") + ": " + o + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              s = e[l](n, l, a, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              s = g;
            }
            s && !(s instanceof Error) && (U(u), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", o, l, typeof s), U(null)), s instanceof Error && !(s.message in ve) && (ve[s.message] = !0, U(u), _("Failed %s type: %s", o, s.message), U(null));
          }
      }
    }
    var ar = Array.isArray;
    function Z(e) {
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
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", sr(e)), be(e);
    }
    var D = T.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, pe, J;
    J = {};
    function ur(e) {
      if (G.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function dr(e) {
      if (G.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function fr(e, n) {
      if (typeof e.ref == "string" && D.current && n && D.current.stateNode !== n) {
        var o = L(D.current.type);
        J[o] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(D.current.type), e.ref), J[o] = !0);
      }
    }
    function hr(e, n) {
      {
        var o = function() {
          ye || (ye = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
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
          pe || (pe = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var vr = function(e, n, o, a, u, f, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: l,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function mr(e, n, o, a, u) {
      {
        var f, l = {}, s = null, y = null;
        o !== void 0 && (_e(o), s = "" + o), dr(n) && (_e(n.key), s = "" + n.key), ur(n) && (y = n.ref, fr(n, u));
        for (f in n)
          G.call(n, f) && !lr.hasOwnProperty(f) && (l[f] = n[f]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (f in g)
            l[f] === void 0 && (l[f] = g[f]);
        }
        if (s || y) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && hr(l, v), y && gr(l, v);
        }
        return vr(e, s, y, u, a, D.current, l);
      }
    }
    var K = T.ReactCurrentOwner, ke = T.ReactDebugCurrentFrame;
    function z(e) {
      if (e) {
        var n = e._owner, o = I(e.type, e._source, n ? n.type : null);
        ke.setExtraStackFrame(o);
      } else
        ke.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function we() {
      {
        if (K.current) {
          var e = L(K.current.type);
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
    var Ce = {};
    function _r(e) {
      {
        var n = we();
        if (!n) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (n = `

Check the top-level render call using <` + o + ">.");
        }
        return n;
      }
    }
    function Re(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = _r(n);
        if (Ce[o])
          return;
        Ce[o] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + L(e._owner.type) + "."), z(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, a), z(null);
      }
    }
    function xe(e, n) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var o = 0; o < e.length; o++) {
            var a = e[o];
            ee(a) && Re(a, n);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Ue(e);
          if (typeof u == "function" && u !== e.entries)
            for (var f = u.call(e), l; !(l = f.next()).done; )
              ee(l.value) && Re(l.value, n);
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
        else if (typeof n == "object" && (n.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === S))
          o = n.propTypes;
        else
          return;
        if (o) {
          var a = L(n);
          or(o, e.props, "prop", a, e);
        } else if (n.PropTypes !== void 0 && !Q) {
          Q = !0;
          var u = L(n);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var a = n[o];
          if (a !== "children" && a !== "key") {
            z(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function Se(e, n, o, a, u, f) {
      {
        var l = Ke(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = br(u);
          y ? s += y : s += we();
          var g;
          e === null ? g = "null" : Z(e) ? g = "array" : e !== void 0 && e.$$typeof === i ? (g = "<" + (L(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, s);
        }
        var v = mr(e, n, o, u, f);
        if (v == null)
          return v;
        if (l) {
          var C = n.children;
          if (C !== void 0)
            if (a)
              if (Z(C)) {
                for (var N = 0; N < C.length; N++)
                  xe(C[N], e);
                Object.freeze && Object.freeze(C);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(C, e);
        }
        return e === h ? pr(v) : yr(v), v;
      }
    }
    function kr(e, n, o) {
      return Se(e, n, o, !0);
    }
    function wr(e, n, o) {
      return Se(e, n, o, !1);
    }
    var Cr = wr, Rr = kr;
    V.Fragment = h, V.jsx = Cr, V.jsxs = Rr;
  }()), V;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Er() : r.exports = jr();
})(Lr);
const t = H.jsx, c = H.jsxs, Pr = "#6440dd", Or = "#5934D8", Tr = "#F5222D", zr = "#111111", Nr = "#666666", Mr = "#333333", $r = "#999999", Dr = "#bbbbbb", Ar = "#cccccc", Vr = "#f4f4f4", Wr = "#f5f6f8", Fr = "#f2f4f7", Br = "#dbd6eb", Ir = "#eeebff", Gr = "#b6b7b9", Ur = "#e7e9ef", Hr = "#cfd4dd", Yr = "#d42a21", qr = "#1968e5", Xr = "#27c4b8", Zr = "#fff", Jr = "#f4f0ff", Kr = "#ABAEBF", Qr = "#03c75a", et = "#e1a016", rt = "#da1c26", x = {
  main: Pr,
  main_sub: Or,
  notice: Tr,
  grey_111: zr,
  grey_666: Nr,
  grey_333: Mr,
  grey_999: $r,
  grey_bbb: Dr,
  grey_ccc: Ar,
  grey_f4: Vr,
  bg_main: Wr,
  bg_noti: Fr,
  bg_disable: Br,
  bg_sub: Ir,
  bg_trans: Gr,
  line_01: Ur,
  line_02: Hr,
  plus: Yr,
  minus: qr,
  code: Xr,
  white: Zr,
  option_hover: Jr,
  m_gnb_normal: Kr,
  green: Qr,
  orange: et,
  red: rt
}, tt = (r, i) => {
  const d = r[i];
  return d ? typeof d == "function" ? d() : Promise.resolve(d) : new Promise((h, k) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(k.bind(null, new Error("Unknown variable dynamic import: " + i)));
  });
}, Oe = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
}, nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" })), Te = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
        /* @__PURE__ */ c("g", { id: "SVGRepo_iconCarrier", children: [
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
}, it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" })), ze = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
        /* @__PURE__ */ c("g", { id: "SVGRepo_iconCarrier", children: [
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
}, ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ze
}, Symbol.toStringTag, { value: "Module" })), Ne = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
}, at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" })), Me = (r) => {
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
}, st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), $e = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
        /* @__PURE__ */ c("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ c("g", { id: "Arrow / Arrow_Sub_Down_Right", children: [
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
}, ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), De = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
        /* @__PURE__ */ c("g", { id: "SVGRepo_iconCarrier", children: [
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
}, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), Ae = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
}, ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ae
}, Symbol.toStringTag, { value: "Module" })), Ve = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
        /* @__PURE__ */ c("g", { id: "SVGRepo_iconCarrier", children: [
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
}, dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), We = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
        /* @__PURE__ */ c("g", { id: "SVGRepo_iconCarrier", children: [
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
}, ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), Fe = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
}, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" })), Be = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ c(
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
        /* @__PURE__ */ c("g", { id: "SVGRepo_iconCarrier", children: [
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
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Be
}, Symbol.toStringTag, { value: "Module" })), M = (r) => {
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
        return /* @__PURE__ */ t(Me, { ...r });
      case "Depth":
        return /* @__PURE__ */ t($e, { ...r });
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
        return /* @__PURE__ */ t(Be, { ...r });
      default:
        return null;
    }
  }, d = () => r.size === "big" ? "30px" : r.size === "medium" ? "24px" : "20px";
  return xr(() => tt(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => nt), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => it), "./icons/Caution.tsx": () => Promise.resolve().then(() => ot), "./icons/Check.tsx": () => Promise.resolve().then(() => at), "./icons/Close.tsx": () => Promise.resolve().then(() => st), "./icons/Depth.tsx": () => Promise.resolve().then(() => ct), "./icons/Gear.tsx": () => Promise.resolve().then(() => lt), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => ut), "./icons/Plus.tsx": () => Promise.resolve().then(() => dt), "./icons/Right.tsx": () => Promise.resolve().then(() => ft), "./icons/Search.tsx": () => Promise.resolve().then(() => ht), "./icons/Setting.tsx": () => Promise.resolve().then(() => gt) }), `./icons/${r.name}.tsx`)), /* @__PURE__ */ t(Sr, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: d(), display: "inline-block" }, children: i() }) });
};
const _t = (r) => {
  const i = typeof r.back == "function", d = r.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ c("div", { className: d, children: [
    /* @__PURE__ */ c("div", { className: "logo", children: [
      i && /* @__PURE__ */ t("div", { onClick: () => {
        var h;
        return (h = r.back) == null ? void 0 : h.call(r, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(M, { name: "ArrowLeft", size: "big", color: x.grey_111 }) }),
      /* @__PURE__ */ t("span", { onClick: () => {
        var h;
        return (h = r.back) == null ? void 0 : h.call(r, !0);
      }, children: r.title })
    ] }),
    r.children
  ] });
};
const vt = (r) => {
  const i = r.size / 14, d = {
    width: r.size + "px",
    height: r.size + "px",
    borderRadius: r.size + i / 1.5 + "px",
    padding: i / 1.5 + "px"
  }, h = {
    borderRadius: r.size + "px"
  }, k = r.percent >= 50 ? 18 * (r.percent - 50) / 5 : 0, R = r.percent <= 50 ? 18 * (r.percent / 5) : 180, b = r.percent < 50 ? x.red : r.percent < 75 ? x.orange : x.green, p = {
    border: `${i}px solid ${b}`,
    borderTopRightRadius: r.size + "px",
    borderBottomRightRadius: r.size + "px",
    transform: `rotate(${k}deg)`
  }, m = {
    border: `${i}px solid ${b}`,
    borderTopLeftRadius: r.size + "px",
    borderBottomLeftRadius: r.size + "px",
    transform: `rotate(${R}deg)`
  }, j = {
    fontSize: r.size / 4 + "px",
    borderRadius: r.size - i * 2 + "px",
    width: r.size - i * 2 + "px",
    height: r.size - i * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: d, children: /* @__PURE__ */ c("div", { className: "circular-progress-bar", style: h, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: p }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: m }) }),
    /* @__PURE__ */ c("div", { className: "percent", style: j, children: [
      r.percent,
      "%"
    ] })
  ] }) });
};
const yt = (r) => /* @__PURE__ */ t(
  "div",
  {
    className: "common-button",
    style: (() => r.disable ? {
      backgroundColor: x.bg_disable,
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
const pt = (r) => {
  const i = () => ({
    height: r.height ?? "280px",
    objectFit: r.objectFit ?? "fill"
  });
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: r.imageUrl, style: i() }) }) });
};
const kt = (r) => /* @__PURE__ */ c("div", { className: "group-card", children: [
  r.isSub && /* @__PURE__ */ t(M, { name: "Depth", size: "medium", color: x.grey_111 }),
  /* @__PURE__ */ c("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: r.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: r.label }) })
  ] })
] });
const mt = (r) => {
  const i = r.ratio * 100 + "%";
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: i }, children: /* @__PURE__ */ t("img", { src: r.imageUrl, loading: "lazy" }) });
}, wt = (r) => {
  const i = r.ratio ? r.ratio : 1;
  return /* @__PURE__ */ c("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(mt, { ratio: i, imageUrl: r.imageUrl }),
    /* @__PURE__ */ c("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(vt, { percent: r.voteAverage, size: 34 }) }),
      /* @__PURE__ */ t("span", { className: "title", children: r.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: r.releaseDate })
    ] })
  ] });
};
const Ie = (r) => {
  const i = {
    backgroundColor: `rgba(0,0,0,${r.opacity})`
  };
  return /* @__PURE__ */ t(te.Fragment, { children: r.isOpen && /* @__PURE__ */ t("div", { className: "overlay", style: i, children: r.children }) });
};
const Ct = (r) => /* @__PURE__ */ t(Ie, { isOpen: r.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${r.isMobile ? "mobile" : ""}`, children: r.children }) });
const Rt = (r) => {
  const i = r.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ c("div", { className: "popup-header-container", style: i, children: [
    /* @__PURE__ */ c("div", { className: "popup-header", children: [
      r.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.back, children: /* @__PURE__ */ t(M, { name: "ArrowLeft", size: "big", color: x.grey_999 }) }),
      r.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: r.title }) }),
      r.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.close, children: /* @__PURE__ */ t(M, { name: "Close", size: "big", color: x.grey_999 }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "popup-header-progress", children: r.maxProgress && Array(r.maxProgress).fill(1).map((d, h) => /* @__PURE__ */ t(
      "span",
      {
        className: `${h + d === r.progress ? "selected" : ""}`
      },
      `progress${h}`
    )) })
  ] });
};
const xt = (r) => /* @__PURE__ */ c("div", { className: "notification", children: [
  r.children,
  /* @__PURE__ */ c("div", { className: "info", style: { height: r.height }, children: [
    /* @__PURE__ */ t(M, { name: "Caution", size: "small", color: x.grey_bbb }),
    /* @__PURE__ */ t("span", { children: r.text })
  ] })
] });
const St = (r) => {
  const i = `${r.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: i }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: r.imageUrl }) });
};
const Lt = (r) => {
  const i = r.type ?? "text", [d, h] = re(!1), k = Ee(() => {
    let b = "";
    return (d || r.searchText) && (b += " focus"), r.screen === "mobile" && (b += " mobile"), b;
  }, [d, r.screen]), R = Ee(() => {
    var p;
    let b = k;
    return typeof r.validator == "function" && !((p = r.validator) != null && p.call(r, r.searchText)) && (b += " error"), b;
  }, [k, r.searchText]);
  return /* @__PURE__ */ c("div", { className: "input-wrapper" + R, children: [
    r.children,
    /* @__PURE__ */ t(
      "input",
      {
        type: i,
        className: "input-search",
        onChange: r.onChange,
        placeholder: r.placeholder,
        value: r.searchText,
        onFocus: () => h(!0),
        onBlur: () => h(!1)
      }
    )
  ] });
};
const Et = ({ title: r, children: i }) => {
  const [d, h] = re(!1), [k, R] = re("hidden"), b = () => {
    d && R("unset");
  };
  function p() {
    h((m) => !m), d && R("hidden");
  }
  return /* @__PURE__ */ c(
    "div",
    {
      className: "basic-accordion",
      style: { overflow: k },
      onTransitionEnd: b,
      children: [
        /* @__PURE__ */ c(
          "div",
          {
            className: "header",
            onClick: p,
            children: [
              /* @__PURE__ */ t("span", { className: "title", children: r }),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `icon ${d ? "slide" : ""}`,
                  children: /* @__PURE__ */ t(M, { name: "Right", size: "medium", color: x.grey_111 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t("div", { className: `children ${d ? "slide" : ""}`, children: i })
      ]
    }
  );
};
const jt = ({ opacity: r }) => /* @__PURE__ */ t(Ie, { isOpen: !0, opacity: r, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const Pt = (r) => {
  const i = Array(8).fill(1).map((d, h) => d + h);
  return /* @__PURE__ */ c(
    "div",
    {
      className: "page-loading-container",
      style: { height: r.customHeight },
      children: [
        /* @__PURE__ */ t("div", { className: "page-loading-wrapper", children: i.map((d) => /* @__PURE__ */ t("div", { className: "loader" }, `loaderKey${d}`)) }),
        /* @__PURE__ */ t("div", { className: "text", children: r.text })
      ]
    }
  );
};
export {
  Et as BasicAccordion,
  yt as Button,
  pt as Card,
  vt as CircularProgressBar,
  x as Colors,
  M as Element,
  kt as GroupCard,
  _t as HeaderBar,
  Lt as InputBox,
  jt as LoadingSpinner,
  xt as Notification,
  Ie as OverLay,
  Pt as PageLoadingSpinner,
  Ct as Popup,
  Rt as PopupBasicHeader,
  wt as PosterCard,
  mt as RatioCardImage,
  St as RatioImage
};
