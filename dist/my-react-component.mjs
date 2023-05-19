import re, { lazy as Rr, Suspense as xr, useState as Le } from "react";
var H = {}, Sr = {
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
var Ee;
function Lr() {
  if (Ee)
    return A;
  Ee = 1;
  var r = re, i = Symbol.for("react.element"), f = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, R = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(w, v, j) {
    var p, S = {}, P = null, W = null;
    j !== void 0 && (P = "" + j), v.key !== void 0 && (P = "" + v.key), v.ref !== void 0 && (W = v.ref);
    for (p in v)
      m.call(v, p) && !R.hasOwnProperty(p) && (S[p] = v[p]);
    if (w && w.defaultProps)
      for (p in v = w.defaultProps, v)
        S[p] === void 0 && (S[p] = v[p]);
    return { $$typeof: i, type: w, key: P, ref: W, props: S, _owner: k.current };
  }
  return A.Fragment = f, A.jsx = x, A.jsxs = x, A;
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
var je;
function Er() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    var r = re, i = Symbol.for("react.element"), f = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), k = Symbol.for("react.strict_mode"), R = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), w = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, Be = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = te && e[te] || e[Be];
      return typeof n == "function" ? n : null;
    }
    var T = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(e) {
      {
        for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
          o[a - 1] = arguments[a];
        Ue("error", e, o);
      }
    }
    function Ue(e, n, o) {
      {
        var a = T.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (n += "%s", o = o.concat([u]));
        var d = o.map(function(c) {
          return String(c);
        });
        d.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var He = !1, Ye = !1, qe = !1, Xe = !1, Ze = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Je(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === R || Ze || e === k || e === j || e === p || Xe || e === W || He || Ye || qe || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === S || e.$$typeof === x || e.$$typeof === w || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Ke(e, n, o) {
      var a = e.displayName;
      if (a)
        return a;
      var u = n.displayName || n.name || "";
      return u !== "" ? o + "(" + u + ")" : o;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function L(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case f:
          return "Portal";
        case R:
          return "Profiler";
        case k:
          return "StrictMode";
        case j:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var n = e;
            return ie(n) + ".Consumer";
          case x:
            var o = e;
            return ie(o._context) + ".Provider";
          case v:
            return Ke(e, e.render, "ForwardRef");
          case S:
            var a = e.displayName || null;
            return a !== null ? a : L(e.type) || "Memo";
          case P: {
            var u = e, d = u._payload, c = u._init;
            try {
              return L(c(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, $ = 0, oe, ae, se, ce, le, ue, de;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Qe() {
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
    function er() {
      {
        if ($--, $ === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: oe
            }),
            info: O({}, e, {
              value: ae
            }),
            warn: O({}, e, {
              value: se
            }),
            error: O({}, e, {
              value: ce
            }),
            group: O({}, e, {
              value: le
            }),
            groupCollapsed: O({}, e, {
              value: ue
            }),
            groupEnd: O({}, e, {
              value: de
            })
          });
        }
        $ < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
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
    var X = !1, G;
    {
      var rr = typeof WeakMap == "function" ? WeakMap : Map;
      G = new rr();
    }
    function he(e, n) {
      if (!e || X)
        return "";
      {
        var o = G.get(e);
        if (o !== void 0)
          return o;
      }
      var a;
      X = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = Y.current, Y.current = null, Qe();
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
            } catch (E) {
              a = E;
            }
            Reflect.construct(e, [], c);
          } else {
            try {
              c.call();
            } catch (E) {
              a = E;
            }
            e.call(c.prototype);
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
`), _ = a.stack.split(`
`), h = s.length - 1, g = _.length - 1; h >= 1 && g >= 0 && s[h] !== _[g]; )
            g--;
          for (; h >= 1 && g >= 0; h--, g--)
            if (s[h] !== _[g]) {
              if (h !== 1 || g !== 1)
                do
                  if (h--, g--, g < 0 || s[h] !== _[g]) {
                    var y = `
` + s[h].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, y), y;
                  }
                while (h >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        X = !1, Y.current = d, er(), Error.prepareStackTrace = u;
      }
      var M = e ? e.displayName || e.name : "", Se = M ? F(M) : "";
      return typeof e == "function" && G.set(e, Se), Se;
    }
    function tr(e, n, o) {
      return he(e, !1);
    }
    function nr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function B(e, n, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, nr(e));
      if (typeof e == "string")
        return F(e);
      switch (e) {
        case j:
          return F("Suspense");
        case p:
          return F("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return tr(e.render);
          case S:
            return B(e.type, n, o);
          case P: {
            var a = e, u = a._payload, d = a._init;
            try {
              return B(d(u), n, o);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ge = {}, ve = T.ReactDebugCurrentFrame;
    function U(e) {
      if (e) {
        var n = e._owner, o = B(e.type, e._source, n ? n.type : null);
        ve.setExtraStackFrame(o);
      } else
        ve.setExtraStackFrame(null);
    }
    function ir(e, n, o, a, u) {
      {
        var d = Function.call.bind(I);
        for (var c in e)
          if (d(e, c)) {
            var s = void 0;
            try {
              if (typeof e[c] != "function") {
                var _ = Error((a || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              s = e[c](n, c, a, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h) {
              s = h;
            }
            s && !(s instanceof Error) && (U(u), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", o, c, typeof s), U(null)), s instanceof Error && !(s.message in ge) && (ge[s.message] = !0, U(u), b("Failed %s type: %s", o, s.message), U(null));
          }
      }
    }
    var or = Array.isArray;
    function Z(e) {
      return or(e);
    }
    function ar(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, o = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function sr(e) {
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
      if (sr(e))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), me(e);
    }
    var D = T.ReactCurrentOwner, cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, pe, J;
    J = {};
    function lr(e) {
      if (I.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ur(e) {
      if (I.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function dr(e, n) {
      if (typeof e.ref == "string" && D.current && n && D.current.stateNode !== n) {
        var o = L(D.current.type);
        J[o] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(D.current.type), e.ref), J[o] = !0);
      }
    }
    function fr(e, n) {
      {
        var o = function() {
          _e || (_e = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function hr(e, n) {
      {
        var o = function() {
          pe || (pe = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var gr = function(e, n, o, a, u, d, c) {
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
        value: u
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function vr(e, n, o, a, u) {
      {
        var d, c = {}, s = null, _ = null;
        o !== void 0 && (be(o), s = "" + o), ur(n) && (be(n.key), s = "" + n.key), lr(n) && (_ = n.ref, dr(n, u));
        for (d in n)
          I.call(n, d) && !cr.hasOwnProperty(d) && (c[d] = n[d]);
        if (e && e.defaultProps) {
          var h = e.defaultProps;
          for (d in h)
            c[d] === void 0 && (c[d] = h[d]);
        }
        if (s || _) {
          var g = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && fr(c, g), _ && hr(c, g);
        }
        return gr(e, s, _, u, a, D.current, c);
      }
    }
    var K = T.ReactCurrentOwner, ye = T.ReactDebugCurrentFrame;
    function z(e) {
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
          var e = L(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function mr(e) {
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
    function br(e) {
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
        var o = br(n);
        if (we[o])
          return;
        we[o] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + L(e._owner.type) + "."), z(e), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, a), z(null);
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
          var u = Ie(e);
          if (typeof u == "function" && u !== e.entries)
            for (var d = u.call(e), c; !(c = d.next()).done; )
              ee(c.value) && Ce(c.value, n);
        }
      }
    }
    function _r(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var o;
        if (typeof n == "function")
          o = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === S))
          o = n.propTypes;
        else
          return;
        if (o) {
          var a = L(n);
          ir(o, e.props, "prop", a, e);
        } else if (n.PropTypes !== void 0 && !Q) {
          Q = !0;
          var u = L(n);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var n = Object.keys(e.props), o = 0; o < n.length; o++) {
          var a = n[o];
          if (a !== "children" && a !== "key") {
            z(e), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), z(null);
            break;
          }
        }
        e.ref !== null && (z(e), b("Invalid attribute `ref` supplied to `React.Fragment`."), z(null));
      }
    }
    function xe(e, n, o, a, u, d) {
      {
        var c = Je(e);
        if (!c) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = mr(u);
          _ ? s += _ : s += ke();
          var h;
          e === null ? h = "null" : Z(e) ? h = "array" : e !== void 0 && e.$$typeof === i ? (h = "<" + (L(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : h = typeof e, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h, s);
        }
        var g = vr(e, n, o, u, d);
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
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(y, e);
        }
        return e === m ? pr(g) : _r(g), g;
      }
    }
    function yr(e, n, o) {
      return xe(e, n, o, !0);
    }
    function kr(e, n, o) {
      return xe(e, n, o, !1);
    }
    var wr = kr, Cr = yr;
    V.Fragment = m, V.jsx = wr, V.jsxs = Cr;
  }()), V;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Lr() : r.exports = Er();
})(Sr);
const t = H.jsx, l = H.jsxs, jr = "#6440dd", Pr = "#5934D8", Or = "#F5222D", Tr = "#111111", zr = "#666666", Mr = "#333333", Nr = "#999999", $r = "#bbbbbb", Dr = "#cccccc", Ar = "#f4f4f4", Vr = "#f5f6f8", Wr = "#f2f4f7", Fr = "#dbd6eb", Gr = "#eeebff", Br = "#b6b7b9", Ir = "#e7e9ef", Ur = "#cfd4dd", Hr = "#d42a21", Yr = "#1968e5", qr = "#27c4b8", Xr = "#fff", Zr = "#f4f0ff", Jr = "#ABAEBF", Kr = "#03c75a", Qr = "#e1a016", et = "#da1c26", C = {
  main: jr,
  main_sub: Pr,
  notice: Or,
  grey_111: Tr,
  grey_666: zr,
  grey_333: Mr,
  grey_999: Nr,
  grey_bbb: $r,
  grey_ccc: Dr,
  grey_f4: Ar,
  bg_main: Vr,
  bg_noti: Wr,
  bg_disable: Fr,
  bg_sub: Gr,
  bg_trans: Br,
  line_01: Ir,
  line_02: Ur,
  plus: Hr,
  minus: Yr,
  code: qr,
  white: Xr,
  option_hover: Zr,
  m_gnb_normal: Jr,
  green: Kr,
  orange: Qr,
  red: et
}, rt = (r, i) => {
  const f = r[i];
  return f ? typeof f == "function" ? f() : Promise.resolve(f) : new Promise((m, k) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(k.bind(null, new Error("Unknown variable dynamic import: " + i)));
  });
}, Pe = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
}, tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), Oe = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" })), Te = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
}, it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" })), ze = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
}, ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ze
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
}, at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), Ne = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ l("g", { id: "Arrow / Arrow_Sub_Down_Right", children: [
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
}, st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" })), $e = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), De = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
}, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), Ae = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ae
}, Symbol.toStringTag, { value: "Module" })), Ve = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), We = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
}, ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), Fe = (r) => {
  const i = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
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
        /* @__PURE__ */ l("g", { id: "SVGRepo_iconCarrier", children: [
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
}, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" })), N = (r) => {
  const i = () => {
    switch (r.name) {
      case "Adult":
        return /* @__PURE__ */ t(Pe, { ...r });
      case "ArrowLeft":
        return /* @__PURE__ */ t(Oe, { ...r });
      case "Caution":
        return /* @__PURE__ */ t(Te, { ...r });
      case "Check":
        return /* @__PURE__ */ t(ze, { ...r });
      case "Close":
        return /* @__PURE__ */ t(Me, { ...r });
      case "Depth":
        return /* @__PURE__ */ t(Ne, { ...r });
      case "Gear":
        return /* @__PURE__ */ t($e, { ...r });
      case "Hamburger":
        return /* @__PURE__ */ t(De, { ...r });
      case "Plus":
        return /* @__PURE__ */ t(Ae, { ...r });
      case "Right":
        return /* @__PURE__ */ t(Ve, { ...r });
      case "Search":
        return /* @__PURE__ */ t(We, { ...r });
      case "Setting":
        return /* @__PURE__ */ t(Fe, { ...r });
      default:
        return null;
    }
  }, f = () => r.size === "big" ? "30px" : r.size === "medium" ? "24px" : "20px";
  return Rr(() => rt(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => tt), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => nt), "./icons/Caution.tsx": () => Promise.resolve().then(() => it), "./icons/Check.tsx": () => Promise.resolve().then(() => ot), "./icons/Close.tsx": () => Promise.resolve().then(() => at), "./icons/Depth.tsx": () => Promise.resolve().then(() => st), "./icons/Gear.tsx": () => Promise.resolve().then(() => ct), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => lt), "./icons/Plus.tsx": () => Promise.resolve().then(() => ut), "./icons/Right.tsx": () => Promise.resolve().then(() => dt), "./icons/Search.tsx": () => Promise.resolve().then(() => ft), "./icons/Setting.tsx": () => Promise.resolve().then(() => ht) }), `./icons/${r.name}.tsx`)), /* @__PURE__ */ t(xr, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: f(), display: "inline-block" }, children: i() }) });
};
const bt = (r) => {
  const i = typeof r.back == "function", f = r.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ l("div", { className: f, children: [
    /* @__PURE__ */ l("div", { className: "logo", children: [
      i && /* @__PURE__ */ t("div", { onClick: r.back, className: "logo-icon", children: /* @__PURE__ */ t(N, { name: "ArrowLeft", size: "big", color: C.grey_111 }) }),
      /* @__PURE__ */ t("span", { children: r.title })
    ] }),
    r.children
  ] });
};
const gt = (r) => {
  const i = r.size / 14, f = {
    width: r.size + "px",
    height: r.size + "px",
    borderRadius: r.size + i / 1.5 + "px",
    padding: i / 1.5 + "px"
  }, m = {
    borderRadius: r.size + "px"
  }, k = r.percent >= 50 ? 18 * (r.percent - 50) / 5 : 0, R = r.percent <= 50 ? 18 * (r.percent / 5) : 180, x = r.percent < 50 ? C.red : r.percent < 75 ? C.orange : C.green, w = {
    border: `${i}px solid ${x}`,
    borderTopRightRadius: r.size + "px",
    borderBottomRightRadius: r.size + "px",
    transform: `rotate(${k}deg)`
  }, v = {
    border: `${i}px solid ${x}`,
    borderTopLeftRadius: r.size + "px",
    borderBottomLeftRadius: r.size + "px",
    transform: `rotate(${R}deg)`
  }, j = {
    fontSize: r.size / 4 + "px",
    borderRadius: r.size - i * 2 + "px",
    width: r.size - i * 2 + "px",
    height: r.size - i * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: f, children: /* @__PURE__ */ l("div", { className: "circular-progress-bar", style: m, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: w }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: v }) }),
    /* @__PURE__ */ l("div", { className: "percent", style: j, children: [
      r.percent,
      "%"
    ] })
  ] }) });
};
const _t = (r) => /* @__PURE__ */ t(
  "div",
  {
    className: "common-button",
    style: (() => r.disable ? {
      backgroundColor: C.bg_disable,
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
const yt = (r) => /* @__PURE__ */ l("div", { className: "group-card", children: [
  r.isSub && /* @__PURE__ */ t(N, { name: "Depth", size: "medium", color: C.grey_111 }),
  /* @__PURE__ */ l("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: r.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: r.label }) })
  ] })
] });
const vt = (r) => {
  const i = r.ratio * 100 + "%";
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: i }, children: /* @__PURE__ */ t("img", { src: r.imageUrl, loading: "lazy" }) });
}, kt = (r) => {
  const i = r.ratio ? r.ratio : 1;
  return /* @__PURE__ */ l("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(vt, { ratio: i, imageUrl: r.imageUrl }),
    /* @__PURE__ */ l("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(gt, { percent: r.voteAverage, size: 34 }) }),
      /* @__PURE__ */ t("span", { className: "title", children: r.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: r.releaseDate })
    ] })
  ] });
};
const Ge = (r) => {
  const i = {
    backgroundColor: `rgba(0,0,0,${r.opacity})`
  };
  return /* @__PURE__ */ t(re.Fragment, { children: r.isOpen && /* @__PURE__ */ t("div", { className: "overlay", style: i, children: r.children }) });
};
const wt = (r) => /* @__PURE__ */ t(Ge, { isOpen: r.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${r.isMobile ? "mobile" : ""}`, children: r.children }) });
const Ct = (r) => {
  const i = r.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ l("div", { className: "popup-header-container", style: i, children: [
    /* @__PURE__ */ l("div", { className: "popup-header", children: [
      r.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.back, children: /* @__PURE__ */ t(N, { name: "ArrowLeft", size: "big", color: C.grey_999 }) }),
      r.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: r.title }) }),
      r.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.close, children: /* @__PURE__ */ t(N, { name: "Close", size: "big", color: C.grey_999 }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "popup-header-progress", children: r.maxProgress && Array(r.maxProgress).fill(1).map((f, m) => /* @__PURE__ */ t(
      "span",
      {
        className: `${m + f === r.progress ? "selected" : ""}`
      },
      `progress${m}`
    )) })
  ] });
};
const Rt = (r) => /* @__PURE__ */ l("div", { className: "notification", children: [
  r.children,
  /* @__PURE__ */ l("div", { className: "info", style: { height: r.height }, children: [
    /* @__PURE__ */ t(N, { name: "Caution", size: "small", color: C.grey_bbb }),
    /* @__PURE__ */ t("span", { children: r.text })
  ] })
] });
const xt = (r) => {
  const i = `${r.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: i }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: r.imageUrl }) });
};
const St = ({ title: r, children: i }) => {
  const [f, m] = Le(!1), [k, R] = Le("hidden");
  return /* @__PURE__ */ l(
    "div",
    {
      className: "basic-accordion",
      style: { overflow: k },
      onTransitionEnd: () => {
        f && R("unset");
      },
      children: [
        /* @__PURE__ */ l("div", { className: "header", children: [
          /* @__PURE__ */ t("span", { className: "title", children: r }),
          /* @__PURE__ */ t(
            "div",
            {
              onClick: () => {
                m((v) => !v), f && R("hidden");
              },
              className: `icon ${f ? "slide" : ""}`,
              children: /* @__PURE__ */ t(N, { name: "Right", size: "medium", color: C.grey_111 })
            }
          )
        ] }),
        /* @__PURE__ */ t("div", { className: `children ${f ? "slide" : ""}`, children: i })
      ]
    }
  );
};
const Lt = ({ opacity: r }) => /* @__PURE__ */ t(Ge, { isOpen: !0, opacity: r, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const Et = (r) => {
  const i = Array(8).fill(1).map((f, m) => f + m);
  return /* @__PURE__ */ l(
    "div",
    {
      className: "page-loading-container",
      style: { height: r.customHeight },
      children: [
        /* @__PURE__ */ t("div", { className: "page-loading-wrapper", children: i.map((f) => /* @__PURE__ */ t("div", { className: "loader" }, `loaderKey${f}`)) }),
        /* @__PURE__ */ t("div", { className: "text", children: r.text })
      ]
    }
  );
};
export {
  St as BasicAccordion,
  _t as Button,
  pt as Card,
  gt as CircularProgressBar,
  C as Colors,
  N as Element,
  yt as GroupCard,
  bt as HeaderBar,
  Lt as LoadingSpinner,
  Rt as Notification,
  Ge as OverLay,
  Et as PageLoadingSpinner,
  wt as Popup,
  Ct as PopupBasicHeader,
  kt as PosterCard,
  vt as RatioCardImage,
  xt as RatioImage
};
