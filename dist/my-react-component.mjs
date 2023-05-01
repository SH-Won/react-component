import re, { lazy as Cr, Suspense as Rr } from "react";
var H = {}, xr = {
  get exports() {
    return H;
  },
  set exports(r) {
    H = r;
  }
}, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Le;
function Sr() {
  if (Le)
    return D;
  Le = 1;
  var r = re, i = Symbol.for("react.element"), h = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, S = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function L(k, v, E) {
    var p, w = {}, j = null, W = null;
    E !== void 0 && (j = "" + E), v.key !== void 0 && (j = "" + v.key), v.ref !== void 0 && (W = v.ref);
    for (p in v)
      _.call(v, p) && !O.hasOwnProperty(p) && (w[p] = v[p]);
    if (k && k.defaultProps)
      for (p in v = k.defaultProps, v)
        w[p] === void 0 && (w[p] = v[p]);
    return { $$typeof: i, type: k, key: j, ref: W, props: w, _owner: S.current };
  }
  return D.Fragment = h, D.jsx = L, D.jsxs = L, D;
}
var A = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function Lr() {
  return Ee || (Ee = 1, process.env.NODE_ENV !== "production" && function() {
    var r = re, i = Symbol.for("react.element"), h = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), L = Symbol.for("react.provider"), k = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, Ie = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = te && e[te] || e[Ie];
      return typeof n == "function" ? n : null;
    }
    var z = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
          o[a - 1] = arguments[a];
        Ge("error", e, o);
      }
    }
    function Ge(e, n, o) {
      {
        var a = z.ReactDebugCurrentFrame, l = a.getStackAddendum();
        l !== "" && (n += "%s", o = o.concat([l]));
        var d = o.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var Ue = !1, He = !1, Ye = !1, qe = !1, Xe = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === O || Xe || e === S || e === E || e === p || qe || e === W || Ue || He || Ye || typeof e == "object" && e !== null && (e.$$typeof === j || e.$$typeof === w || e.$$typeof === L || e.$$typeof === k || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Je(e, n, o) {
      var a = e.displayName;
      if (a)
        return a;
      var l = n.displayName || n.name || "";
      return l !== "" ? o + "(" + l + ")" : o;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case h:
          return "Portal";
        case O:
          return "Profiler";
        case S:
          return "StrictMode";
        case E:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case k:
            var n = e;
            return ie(n) + ".Consumer";
          case L:
            var o = e;
            return ie(o._context) + ".Provider";
          case v:
            return Je(e, e.render, "ForwardRef");
          case w:
            var a = e.displayName || null;
            return a !== null ? a : C(e.type) || "Memo";
          case j: {
            var l = e, d = l._payload, c = l._init;
            try {
              return C(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, $ = 0, oe, ae, se, ce, le, ue, de;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ke() {
      {
        if ($ === 0) {
          oe = console.log, ae = console.info, se = console.warn, ce = console.error, le = console.group, ue = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
    function Qe() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: oe
            }),
            info: P({}, e, {
              value: ae
            }),
            warn: P({}, e, {
              value: se
            }),
            error: P({}, e, {
              value: ce
            }),
            group: P({}, e, {
              value: le
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: de
            })
          });
        }
        $ < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = z.ReactCurrentDispatcher, q;
    function F(e, n, o) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (l) {
            var a = l.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var X = !1, I;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      I = new er();
    }
    function he(e, n) {
      if (!e || X)
        return "";
      {
        var o = I.get(e);
        if (o !== void 0)
          return o;
      }
      var a;
      X = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Y.current, Y.current = null, Ke();
      try {
        if (n) {
          var c = function() {
            throw Error();
          };
          if (Object.defineProperty(c.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(c, []);
            } catch (R) {
              a = R;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (R) {
              a = R;
            }
            e.call(c.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            a = R;
          }
          e();
        }
      } catch (R) {
        if (R && a && typeof R.stack == "string") {
          for (var s = R.stack.split(`
`), b = a.stack.split(`
`), f = s.length - 1, g = b.length - 1; f >= 1 && g >= 0 && s[f] !== b[g]; )
            g--;
          for (; f >= 1 && g >= 0; f--, g--)
            if (s[f] !== b[g]) {
              if (f !== 1 || g !== 1)
                do
                  if (f--, g--, g < 0 || s[f] !== b[g]) {
                    var y = `
` + s[f].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && I.set(e, y), y;
                  }
                while (f >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        X = !1, Y.current = d, Qe(), Error.prepareStackTrace = l;
      }
      var M = e ? e.displayName || e.name : "", Se = M ? F(M) : "";
      return typeof e == "function" && I.set(e, Se), Se;
    }
    function rr(e, n, o) {
      return he(e, !1);
    }
    function tr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function B(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, tr(e));
      if (typeof e == "string")
        return F(e);
      switch (e) {
        case E:
          return F("Suspense");
        case p:
          return F("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return rr(e.render);
          case w:
            return B(e.type, n, o);
          case j: {
            var a = e, l = a._payload, d = a._init;
            try {
              return B(d(l), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, ge = {}, ve = z.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var n = e._owner, o = B(e.type, e._source, n ? n.type : null);
        ve.setExtraStackFrame(o);
      } else
        ve.setExtraStackFrame(null);
    }
    function nr(e, n, o, a, l) {
      {
        var d = Function.call.bind(G);
        for (var c in e)
          if (d(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var b = Error((a || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              s = e[c](n, c, a, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              s = f;
            }
            s && !(s instanceof Error) && (U(l), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", o, c, typeof s), U(null)), s instanceof Error && !(s.message in ge) && (ge[s.message] = !0, U(l), m("Failed %s type: %s", o, s.message), U(null));
          }
      }
    }
    var ir = Array.isArray;
    function Z(e) {
      return ir(e);
    }
    function or(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function ar(e) {
      try {
        return me(e), !1;
      } catch {
        return !0;
      }
    }
    function me(e) {
      return "" + e;
    }
    function be(e) {
      if (ar(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(e)), me(e);
    }
    var N = z.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, pe, J;
    J = {};
    function cr(e) {
      if (G.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function lr(e) {
      if (G.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, n) {
      if (typeof e.ref == "string" && N.current && n && N.current.stateNode !== n) {
        var o = C(N.current.type);
        J[o] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(N.current.type), e.ref), J[o] = !0);
      }
    }
    function dr(e, n) {
      {
        var o = function() {
          _e || (_e = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function fr(e, n) {
      {
        var o = function() {
          pe || (pe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var hr = function(e, n, o, a, l, d, c) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: o,
        props: c,
        // Record the component responsible for creating this element.
        _owner: d
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
        value: l
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function gr(e, n, o, a, l) {
      {
        var d, c = {}, s = null, b = null;
        o !== void 0 && (be(o), s = "" + o), lr(n) && (be(n.key), s = "" + n.key), cr(n) && (b = n.ref, ur(n, l));
        for (d in n)
          G.call(n, d) && !sr.hasOwnProperty(d) && (c[d] = n[d]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (d in f)
            c[d] === void 0 && (c[d] = f[d]);
        }
        if (s || b) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && dr(c, g), b && fr(c, g);
        }
        return hr(e, s, b, l, a, N.current, c);
      }
    }
    var K = z.ReactCurrentOwner, ye = z.ReactDebugCurrentFrame;
    function T(e) {
      if (e) {
        var n = e._owner, o = B(e.type, e._source, n ? n.type : null);
        ye.setExtraStackFrame(o);
      } else
        ye.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function ke() {
      {
        if (K.current) {
          var e = C(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + n + ":" + o + ".";
        }
        return "";
      }
    }
    var we = {};
    function mr(e) {
      {
        var n = ke();
        if (!n) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (n = `

Check the top-level render call using <` + o + ">.");
        }
        return n;
      }
    }
    function Ce(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = mr(n);
        if (we[o])
          return;
        we[o] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + C(e._owner.type) + "."), T(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, a), T(null);
      }
    }
    function Re(e, n) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var o = 0; o < e.length; o++) {
            var a = e[o];
            ee(a) && Ce(a, n);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var l = Be(e);
          if (typeof l == "function" && l !== e.entries)
            for (var d = l.call(e), c; !(c = d.next()).done; )
              ee(c.value) && Ce(c.value, n);
        }
      }
    }
    function br(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var o;
        if (typeof n == "function")
          o = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === w))
          o = n.propTypes;
        else
          return;
        if (o) {
          var a = C(n);
          nr(o, e.props, "prop", a, e);
        } else if (n.PropTypes !== void 0 && !Q) {
          Q = !0;
          var l = C(n);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", l || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var a = n[o];
          if (a !== "children" && a !== "key") {
            T(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), T(null);
            break;
          }
        }
        e.ref !== null && (T(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), T(null));
      }
    }
    function xe(e, n, o, a, l, d) {
      {
        var c = Ze(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = vr(l);
          b ? s += b : s += ke();
          var f;
          e === null ? f = "null" : Z(e) ? f = "array" : e !== void 0 && e.$$typeof === i ? (f = "<" + (C(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, s);
        }
        var g = gr(e, n, o, l, d);
        if (g == null)
          return g;
        if (c) {
          var y = n.children;
          if (y !== void 0)
            if (a)
              if (Z(y)) {
                for (var M = 0; M < y.length; M++)
                  Re(y[M], e);
                Object.freeze && Object.freeze(y);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(y, e);
        }
        return e === _ ? _r(g) : br(g), g;
      }
    }
    function pr(e, n, o) {
      return xe(e, n, o, !0);
    }
    function yr(e, n, o) {
      return xe(e, n, o, !1);
    }
    var kr = yr, wr = pr;
    A.Fragment = _, A.jsx = kr, A.jsxs = wr;
  }()), A;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Sr() : r.exports = Lr();
})(xr);
const t = H.jsx, u = H.jsxs, Er = "#6440dd", jr = "#5934D8", Pr = "#F5222D", Or = "#111111", zr = "#666666", Tr = "#333333", Mr = "#999999", $r = "#bbbbbb", Nr = "#cccccc", Dr = "#f4f4f4", Ar = "#f5f6f8", Vr = "#f2f4f7", Wr = "#dbd6eb", Fr = "#eeebff", Ir = "#b6b7b9", Br = "#e7e9ef", Gr = "#cfd4dd", Ur = "#d42a21", Hr = "#1968e5", Yr = "#27c4b8", qr = "#fff", Xr = "#f4f0ff", Zr = "#ABAEBF", Jr = "#03c75a", Kr = "#e1a016", Qr = "#da1c26", x = {
  main: Er,
  main_sub: jr,
  notice: Pr,
  grey_111: Or,
  grey_666: zr,
  grey_333: Tr,
  grey_999: Mr,
  grey_bbb: $r,
  grey_ccc: Nr,
  grey_f4: Dr,
  bg_main: Ar,
  bg_noti: Vr,
  bg_disable: Wr,
  bg_sub: Fr,
  bg_trans: Ir,
  line_01: Br,
  line_02: Gr,
  plus: Ur,
  minus: Hr,
  code: Yr,
  white: qr,
  option_hover: Xr,
  m_gnb_normal: Zr,
  green: Jr,
  orange: Kr,
  red: Qr
}, et = (r, i) => {
  const h = r[i];
  return h ? typeof h == "function" ? h() : Promise.resolve(h) : new Promise((_, S) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(S.bind(null, new Error("Unknown variable dynamic import: " + i)));
  });
}, je = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
}, rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: je
}, Symbol.toStringTag, { value: "Module" })), Pe = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
}, tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), Oe = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
}, nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" })), ze = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
}, it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ze
}, Symbol.toStringTag, { value: "Module" })), Te = (r) => {
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
}, ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" })), Me = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ u("g", { id: "Arrow / Arrow_Sub_Down_Right", children: [
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
}, at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), $e = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
}, st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), Ne = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
}, ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" })), De = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
}, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), Ae = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
            children: /* @__PURE__ */ t("path", { fill: "#D9D9D9", d: "M0 0h24v24H0z" })
          }
        ),
        /* @__PURE__ */ t("g", { mask: "url(#a)", children: /* @__PURE__ */ t(
          "path",
          {
            d: "M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12 9.4 17.65Z",
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
  return /* @__PURE__ */ u(
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
}, dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), We = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ u(
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
        /* @__PURE__ */ u("g", { id: "SVGRepo_iconCarrier", children: [
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
}, ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), V = (r) => {
  const i = () => {
    switch (r.name) {
      case "Adult":
        return /* @__PURE__ */ t(je, { ...r });
      case "ArrowLeft":
        return /* @__PURE__ */ t(Pe, { ...r });
      case "Caution":
        return /* @__PURE__ */ t(Oe, { ...r });
      case "Check":
        return /* @__PURE__ */ t(ze, { ...r });
      case "Close":
        return /* @__PURE__ */ t(Te, { ...r });
      case "Depth":
        return /* @__PURE__ */ t(Me, { ...r });
      case "Gear":
        return /* @__PURE__ */ t($e, { ...r });
      case "Hamburger":
        return /* @__PURE__ */ t(Ne, { ...r });
      case "Plus":
        return /* @__PURE__ */ t(De, { ...r });
      case "Right":
        return /* @__PURE__ */ t(Ae, { ...r });
      case "Search":
        return /* @__PURE__ */ t(Ve, { ...r });
      case "Setting":
        return /* @__PURE__ */ t(We, { ...r });
      default:
        return null;
    }
  }, h = () => r.size === "big" ? "30px" : r.size === "medium" ? "24px" : "20px";
  return Cr(() => et(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => rt), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => tt), "./icons/Caution.tsx": () => Promise.resolve().then(() => nt), "./icons/Check.tsx": () => Promise.resolve().then(() => it), "./icons/Close.tsx": () => Promise.resolve().then(() => ot), "./icons/Depth.tsx": () => Promise.resolve().then(() => at), "./icons/Gear.tsx": () => Promise.resolve().then(() => st), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => ct), "./icons/Plus.tsx": () => Promise.resolve().then(() => lt), "./icons/Right.tsx": () => Promise.resolve().then(() => ut), "./icons/Search.tsx": () => Promise.resolve().then(() => dt), "./icons/Setting.tsx": () => Promise.resolve().then(() => ft) }), `./icons/${r.name}.tsx`)), /* @__PURE__ */ t(Rr, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: h(), display: "inline-block" }, children: i() }) });
};
const mt = (r) => {
  const i = typeof r.back == "function", h = r.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ u("div", { className: h, children: [
    i && /* @__PURE__ */ t("div", { onClick: r.back, children: /* @__PURE__ */ t(V, { name: "ArrowLeft", size: "big", color: x.grey_111 }) }),
    /* @__PURE__ */ t("span", { children: r.title })
  ] });
};
const ht = (r) => {
  const i = r.size / 14, h = {
    width: r.size + "px",
    height: r.size + "px",
    borderRadius: r.size + i / 1.5 + "px",
    padding: i / 1.5 + "px"
  }, _ = {
    borderRadius: r.size + "px"
  }, S = r.percent >= 50 ? 18 * (r.percent - 50) / 5 : 0, O = r.percent <= 50 ? 18 * (r.percent / 5) : 180, L = r.percent < 50 ? x.red : r.percent < 75 ? x.orange : x.green, k = {
    border: `${i}px solid ${L}`,
    borderTopRightRadius: r.size + "px",
    borderBottomRightRadius: r.size + "px",
    transform: `rotate(${S}deg)`
  }, v = {
    border: `${i}px solid ${L}`,
    borderTopLeftRadius: r.size + "px",
    borderBottomLeftRadius: r.size + "px",
    transform: `rotate(${O}deg)`
  }, E = {
    fontSize: r.size / 4 + "px",
    borderRadius: r.size - i * 2 + "px",
    width: r.size - i * 2 + "px",
    height: r.size - i * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: h, children: /* @__PURE__ */ u("div", { className: "circular-progress-bar", style: _, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: k }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: v }) }),
    /* @__PURE__ */ u("div", { className: "percent", style: E, children: [
      r.percent,
      "%"
    ] })
  ] }) });
};
const bt = (r) => /* @__PURE__ */ t(
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
const _t = (r) => {
  const i = () => ({
    height: r.height ?? "280px",
    objectFit: r.objectFit ?? "fill"
  });
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: r.imageUrl, style: i() }) }) });
};
const pt = (r) => /* @__PURE__ */ u("div", { className: "group-card", children: [
  r.isSub && /* @__PURE__ */ t(V, { name: "Depth", size: "medium", color: x.grey_111 }),
  /* @__PURE__ */ u("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: r.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: r.label }) })
  ] })
] });
const gt = (r) => {
  const i = r.ratio * 100 + "%";
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: i }, children: /* @__PURE__ */ t("img", { src: r.imageUrl }) });
}, yt = (r) => {
  const i = r.ratio ? r.ratio : 1;
  return /* @__PURE__ */ u("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(gt, { ratio: i, imageUrl: r.imageUrl }),
    /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(ht, { percent: r.voteAverage, size: 34 }) }),
    /* @__PURE__ */ u("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("span", { className: "title", children: r.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: r.releaseDate })
    ] })
  ] });
};
const Fe = (r) => {
  const i = {
    backgroundColor: `rgba(0,0,0,${r.opacity})`
  };
  return /* @__PURE__ */ t(re.Fragment, { children: r.isOpen && /* @__PURE__ */ t("div", { className: "overlay", style: i, children: r.children }) });
};
const kt = (r) => /* @__PURE__ */ t(Fe, { isOpen: r.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${r.isMobile ? "mobile" : ""}`, children: r.children }) });
const wt = (r) => {
  const i = r.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ u("div", { className: "popup-header-container", style: i, children: [
    /* @__PURE__ */ u("div", { className: "popup-header", children: [
      r.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.back, children: /* @__PURE__ */ t(V, { name: "ArrowLeft", size: "big", color: x.grey_999 }) }),
      r.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: r.title }) }),
      r.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.close, children: /* @__PURE__ */ t(V, { name: "Close", size: "big", color: x.grey_999 }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "popup-header-progress", children: r.maxProgress && Array(r.maxProgress).fill(1).map((h, _) => /* @__PURE__ */ t(
      "span",
      {
        className: `${_ + h === r.progress ? "selected" : ""}`
      },
      `progress${_}`
    )) })
  ] });
};
const Ct = (r) => /* @__PURE__ */ u("div", { className: "notification", children: [
  r.children,
  /* @__PURE__ */ u("div", { className: "info", style: { height: r.height }, children: [
    /* @__PURE__ */ t(V, { name: "Caution", size: "small", color: x.grey_bbb }),
    /* @__PURE__ */ t("span", { children: r.text })
  ] })
] });
const Rt = (r) => {
  const i = `${r.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: i }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: r.imageUrl }) });
};
const xt = ({ opacity: r }) => /* @__PURE__ */ t(Fe, { isOpen: !0, opacity: r, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const St = (r) => {
  const i = Array(8).fill(1).map((h, _) => h + _);
  return /* @__PURE__ */ u(
    "div",
    {
      className: "page-loading-container",
      style: { height: r.customHeight },
      children: [
        /* @__PURE__ */ t("div", { className: "page-loading-wrapper", children: i.map((h) => /* @__PURE__ */ t("div", { className: "loader" }, `loaderKey${h}`)) }),
        /* @__PURE__ */ t("div", { className: "text", children: r.text })
      ]
    }
  );
};
export {
  bt as Button,
  _t as Card,
  ht as CircularProgressBar,
  x as Colors,
  V as Element,
  pt as GroupCard,
  mt as HeaderBar,
  xt as LoadingSpinner,
  Ct as Notification,
  Fe as OverLay,
  St as PageLoadingSpinner,
  kt as Popup,
  wt as PopupBasicHeader,
  yt as PosterCard,
  gt as RatioCardImage,
  Rt as RatioImage
};
