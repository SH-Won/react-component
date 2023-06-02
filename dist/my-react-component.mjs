import me, { lazy as Nr, Suspense as zr, useMemo as ge, useState as P, useRef as Y, useLayoutEffect as Be, useEffect as ae, cloneElement as jr } from "react";
var Q = {}, Or = {
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
function Ir() {
  if (Ve)
    return J;
  Ve = 1;
  var e = me, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(c, f, R) {
    var k, S = {}, L = null, w = null;
    R !== void 0 && (L = "" + R), f.key !== void 0 && (L = "" + f.key), f.ref !== void 0 && (w = f.ref);
    for (k in f)
      s.call(f, k) && !u.hasOwnProperty(k) && (S[k] = f[k]);
    if (c && c.defaultProps)
      for (k in f = c.defaultProps, f)
        S[k] === void 0 && (S[k] = f[k]);
    return { $$typeof: n, type: c, key: L, ref: w, props: S, _owner: l.current };
  }
  return J.Fragment = o, J.jsx = g, J.jsxs = g, J;
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
function $r() {
  return Fe || (Fe = 1, process.env.NODE_ENV !== "production" && function() {
    var e = me, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), c = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), V = Symbol.iterator, M = "@@iterator";
    function X(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = V && r[V] || r[M];
      return typeof i == "function" ? i : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(r) {
      {
        for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
          a[d - 1] = arguments[d];
        F("error", r, a);
      }
    }
    function F(r, i, a) {
      {
        var d = C.ReactDebugCurrentFrame, b = d.getStackAddendum();
        b !== "" && (i += "%s", a = a.concat([b]));
        var y = a.map(function(v) {
          return String(v);
        });
        y.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, y);
      }
    }
    var D = !1, A = !1, be = !1, p = !1, O = !1, N;
    N = Symbol.for("react.module.reference");
    function G(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === s || r === u || O || r === l || r === R || r === k || p || r === w || D || A || be || typeof r == "object" && r !== null && (r.$$typeof === L || r.$$typeof === S || r.$$typeof === g || r.$$typeof === c || r.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === N || r.getModuleId !== void 0));
    }
    function or(r, i, a) {
      var d = r.displayName;
      if (d)
        return d;
      var b = i.displayName || i.name || "";
      return b !== "" ? a + "(" + b + ")" : a;
    }
    function _e(r) {
      return r.displayName || "Context";
    }
    function I(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case s:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case R:
          return "Suspense";
        case k:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            var i = r;
            return _e(i) + ".Consumer";
          case g:
            var a = r;
            return _e(a._context) + ".Provider";
          case f:
            return or(r, r.render, "ForwardRef");
          case S:
            var d = r.displayName || null;
            return d !== null ? d : I(r.type) || "Memo";
          case L: {
            var b = r, y = b._payload, v = b._init;
            try {
              return I(v(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, q = 0, ye, ke, we, Ce, Re, xe, Le;
    function Te() {
    }
    Te.__reactDisabledLog = !0;
    function sr() {
      {
        if (q === 0) {
          ye = console.log, ke = console.info, we = console.warn, Ce = console.error, Re = console.group, xe = console.groupCollapsed, Le = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Te,
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
              value: Re
            }),
            groupCollapsed: B({}, r, {
              value: xe
            }),
            groupEnd: B({}, r, {
              value: Le
            })
          });
        }
        q < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = C.ReactCurrentDispatcher, se;
    function ee(r, i, a) {
      {
        if (se === void 0)
          try {
            throw Error();
          } catch (b) {
            var d = b.stack.trim().match(/\n( *(at )?)/);
            se = d && d[1] || "";
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
    function Se(r, i) {
      if (!r || ce)
        return "";
      {
        var a = re.get(r);
        if (a !== void 0)
          return a;
      }
      var d;
      ce = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = oe.current, oe.current = null, sr();
      try {
        if (i) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch ($) {
              d = $;
            }
            Reflect.construct(r, [], v);
          } else {
            try {
              v.call();
            } catch ($) {
              d = $;
            }
            r.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch ($) {
            d = $;
          }
          r();
        }
      } catch ($) {
        if ($ && d && typeof $.stack == "string") {
          for (var m = $.stack.split(`
`), E = d.stack.split(`
`), x = m.length - 1, T = E.length - 1; x >= 1 && T >= 0 && m[x] !== E[T]; )
            T--;
          for (; x >= 1 && T >= 0; x--, T--)
            if (m[x] !== E[T]) {
              if (x !== 1 || T !== 1)
                do
                  if (x--, T--, T < 0 || m[x] !== E[T]) {
                    var z = `
` + m[x].replace(" at new ", " at ");
                    return r.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", r.displayName)), typeof r == "function" && re.set(r, z), z;
                  }
                while (x >= 1 && T >= 0);
              break;
            }
        }
      } finally {
        ce = !1, oe.current = y, cr(), Error.prepareStackTrace = b;
      }
      var U = r ? r.displayName || r.name : "", We = U ? ee(U) : "";
      return typeof r == "function" && re.set(r, We), We;
    }
    function ur(r, i, a) {
      return Se(r, !1);
    }
    function dr(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function te(r, i, a) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Se(r, dr(r));
      if (typeof r == "string")
        return ee(r);
      switch (r) {
        case R:
          return ee("Suspense");
        case k:
          return ee("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case f:
            return ur(r.render);
          case S:
            return te(r.type, i, a);
          case L: {
            var d = r, b = d._payload, y = d._init;
            try {
              return te(y(b), i, a);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, Ee = {}, pe = C.ReactDebugCurrentFrame;
    function ie(r) {
      if (r) {
        var i = r._owner, a = te(r.type, r._source, i ? i.type : null);
        pe.setExtraStackFrame(a);
      } else
        pe.setExtraStackFrame(null);
    }
    function fr(r, i, a, d, b) {
      {
        var y = Function.call.bind(ne);
        for (var v in r)
          if (y(r, v)) {
            var m = void 0;
            try {
              if (typeof r[v] != "function") {
                var E = Error((d || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              m = r[v](i, v, d, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              m = x;
            }
            m && !(m instanceof Error) && (ie(b), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", a, v, typeof m), ie(null)), m instanceof Error && !(m.message in Ee) && (Ee[m.message] = !0, ie(b), _("Failed %s type: %s", a, m.message), ie(null));
          }
      }
    }
    var hr = Array.isArray;
    function le(r) {
      return hr(r);
    }
    function gr(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, a = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return a;
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
    function Me(r) {
      if (mr(r))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", gr(r)), Pe(r);
    }
    var Z = C.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, ze, ue;
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
        var a = I(Z.current.type);
        ue[a] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Z.current.type), r.ref), ue[a] = !0);
      }
    }
    function kr(r, i) {
      {
        var a = function() {
          Ne || (Ne = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function wr(r, i) {
      {
        var a = function() {
          ze || (ze = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var Cr = function(r, i, a, d, b, y, v) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: a,
        props: v,
        // Record the component responsible for creating this element.
        _owner: y
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
        value: d
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Rr(r, i, a, d, b) {
      {
        var y, v = {}, m = null, E = null;
        a !== void 0 && (Me(a), m = "" + a), _r(i) && (Me(i.key), m = "" + i.key), br(i) && (E = i.ref, yr(i, b));
        for (y in i)
          ne.call(i, y) && !vr.hasOwnProperty(y) && (v[y] = i[y]);
        if (r && r.defaultProps) {
          var x = r.defaultProps;
          for (y in x)
            v[y] === void 0 && (v[y] = x[y]);
        }
        if (m || E) {
          var T = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          m && kr(v, T), E && wr(v, T);
        }
        return Cr(r, m, E, b, d, Z.current, v);
      }
    }
    var de = C.ReactCurrentOwner, je = C.ReactDebugCurrentFrame;
    function H(r) {
      if (r) {
        var i = r._owner, a = te(r.type, r._source, i ? i.type : null);
        je.setExtraStackFrame(a);
      } else
        je.setExtraStackFrame(null);
    }
    var fe;
    fe = !1;
    function he(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function Oe() {
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
    function xr(r) {
      {
        if (r !== void 0) {
          var i = r.fileName.replace(/^.*[\\\/]/, ""), a = r.lineNumber;
          return `

Check your code at ` + i + ":" + a + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function Lr(r) {
      {
        var i = Oe();
        if (!i) {
          var a = typeof r == "string" ? r : r.displayName || r.name;
          a && (i = `

Check the top-level render call using <` + a + ">.");
        }
        return i;
      }
    }
    function $e(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var a = Lr(i);
        if (Ie[a])
          return;
        Ie[a] = !0;
        var d = "";
        r && r._owner && r._owner !== de.current && (d = " It was passed a child from " + I(r._owner.type) + "."), H(r), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, d), H(null);
      }
    }
    function De(r, i) {
      {
        if (typeof r != "object")
          return;
        if (le(r))
          for (var a = 0; a < r.length; a++) {
            var d = r[a];
            he(d) && $e(d, i);
          }
        else if (he(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var b = X(r);
          if (typeof b == "function" && b !== r.entries)
            for (var y = b.call(r), v; !(v = y.next()).done; )
              he(v.value) && $e(v.value, i);
        }
      }
    }
    function Tr(r) {
      {
        var i = r.type;
        if (i == null || typeof i == "string")
          return;
        var a;
        if (typeof i == "function")
          a = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === S))
          a = i.propTypes;
        else
          return;
        if (a) {
          var d = I(i);
          fr(a, r.props, "prop", d, r);
        } else if (i.PropTypes !== void 0 && !fe) {
          fe = !0;
          var b = I(i);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sr(r) {
      {
        for (var i = Object.keys(r.props), a = 0; a < i.length; a++) {
          var d = i[a];
          if (d !== "children" && d !== "key") {
            H(r), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), H(null);
            break;
          }
        }
        r.ref !== null && (H(r), _("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function Ae(r, i, a, d, b, y) {
      {
        var v = G(r);
        if (!v) {
          var m = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = xr(b);
          E ? m += E : m += Oe();
          var x;
          r === null ? x = "null" : le(r) ? x = "array" : r !== void 0 && r.$$typeof === n ? (x = "<" + (I(r.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : x = typeof r, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, m);
        }
        var T = Rr(r, i, a, b, y);
        if (T == null)
          return T;
        if (v) {
          var z = i.children;
          if (z !== void 0)
            if (d)
              if (le(z)) {
                for (var U = 0; U < z.length; U++)
                  De(z[U], r);
                Object.freeze && Object.freeze(z);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              De(z, r);
        }
        return r === s ? Sr(T) : Tr(T), T;
      }
    }
    function Er(r, i, a) {
      return Ae(r, i, a, !0);
    }
    function pr(r, i, a) {
      return Ae(r, i, a, !1);
    }
    var Pr = pr, Mr = Er;
    K.Fragment = s, K.jsx = Pr, K.jsxs = Mr;
  }()), K;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ir() : e.exports = $r();
})(Or);
const ve = Q.Fragment, t = Q.jsx, h = Q.jsxs, Dr = "#6440dd", Ar = "#5934D8", Wr = "#F5222D", Vr = "#111111", Fr = "#666666", Br = "#333333", Gr = "#999999", Hr = "#bbbbbb", Ur = "#cccccc", Yr = "#f4f4f4", Xr = "#f5f6f8", qr = "#f2f4f7", Zr = "#dbd6eb", Jr = "#eeebff", Kr = "#b6b7b9", Qr = "#e7e9ef", et = "#cfd4dd", rt = "#d42a21", tt = "#1968e5", nt = "#27c4b8", it = "#fff", at = "#f4f0ff", ot = "#ABAEBF", st = "#03c75a", ct = "#e1a016", lt = "#da1c26", j = {
  main: Dr,
  main_sub: Ar,
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
  option_hover: at,
  m_gnb_normal: ot,
  green: st,
  orange: ct,
  red: lt
}, ut = (e, n) => {
  const o = e[n];
  return o ? typeof o == "function" ? o() : Promise.resolve(o) : new Promise((s, l) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(l.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
}, Ge = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
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
  return /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ h(
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
  return /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
          " ",
          /* @__PURE__ */ h("g", { id: "Arrow / Arrow_Sub_Down_Right", children: [
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
  return /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ h(
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
  return /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
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
  return /* @__PURE__ */ h(
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
  return /* @__PURE__ */ h(
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
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
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
}, Symbol.toStringTag, { value: "Module" })), W = (e) => {
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
  }, o = () => e.size === "big" ? "30px" : e.size === "medium" ? "24px" : "20px";
  return Nr(() => ut(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => dt), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => ft), "./icons/Caution.tsx": () => Promise.resolve().then(() => ht), "./icons/Check.tsx": () => Promise.resolve().then(() => gt), "./icons/Close.tsx": () => Promise.resolve().then(() => mt), "./icons/Depth.tsx": () => Promise.resolve().then(() => vt), "./icons/Gear.tsx": () => Promise.resolve().then(() => bt), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => _t), "./icons/Plus.tsx": () => Promise.resolve().then(() => yt), "./icons/Right.tsx": () => Promise.resolve().then(() => kt), "./icons/Search.tsx": () => Promise.resolve().then(() => wt), "./icons/Setting.tsx": () => Promise.resolve().then(() => Ct) }), `./icons/${e.name}.tsx`)), /* @__PURE__ */ t(zr, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: o(), display: "inline-block" }, children: n() }) });
};
const Et = (e) => {
  const n = typeof e.back == "function", o = e.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ h("div", { className: o, children: [
    /* @__PURE__ */ h("div", { className: "logo", children: [
      n && /* @__PURE__ */ t("div", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(W, { name: "ArrowLeft", size: "big", color: j.grey_111 }) }),
      /* @__PURE__ */ t("span", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !0);
      }, children: e.title })
    ] }),
    e.children
  ] });
};
const Rt = (e) => {
  const n = e.size / 14, o = {
    width: e.size + "px",
    height: e.size + "px",
    borderRadius: e.size + n / 1.5 + "px",
    padding: n / 1.5 + "px"
  }, s = {
    borderRadius: e.size + "px"
  }, l = e.percent >= 50 ? 18 * (e.percent - 50) / 5 : 0, u = e.percent <= 50 ? 18 * (e.percent / 5) : 180, g = e.percent < 50 ? j.red : e.percent < 75 ? j.orange : j.green, c = {
    border: `${n}px solid ${g}`,
    borderTopRightRadius: e.size + "px",
    borderBottomRightRadius: e.size + "px",
    transform: `rotate(${l}deg)`
  }, f = {
    border: `${n}px solid ${g}`,
    borderTopLeftRadius: e.size + "px",
    borderBottomLeftRadius: e.size + "px",
    transform: `rotate(${u}deg)`
  }, R = {
    fontSize: e.size / 4 + "px",
    borderRadius: e.size - n * 2 + "px",
    width: e.size - n * 2 + "px",
    height: e.size - n * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: o, children: /* @__PURE__ */ h("div", { className: "circular-progress-bar", style: s, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: c }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: f }) }),
    /* @__PURE__ */ h("div", { className: "percent", style: R, children: [
      e.percent,
      "%"
    ] })
  ] }) });
};
const pt = ({
  initialCount: e,
  width: n,
  onSelect: o,
  count: s,
  magnification: l
}) => {
  const u = ge(() => Array(s + 1).fill(1).map((C, _) => ({
    order: _,
    value: _ * l,
    key: Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString()
  })), [s]), g = e !== void 0 && e < u.length, c = u.length, [f, R] = P(), [k, S] = P(0), [L, w] = P(
    u[g ? e : 0]
  ), V = (C) => {
    w(C), o == null || o(C);
  }, M = Y(null), X = () => {
    var D;
    let F = (((D = M.current) == null ? void 0 : D.getBoundingClientRect().width) - u.length * k) / (u.length - 1) * L.order + k * L.order;
    return L.order !== 0 && (F += k / 2), {
      width: `${F}px`
      // width: `calc(${finalCalc})`,
    };
  };
  return Be(() => {
    var D;
    const C = M.current.getBoundingClientRect().width, _ = (D = M.current.parentElement) == null ? void 0 : D.getBoundingClientRect(), F = 2 * _.width - (_.right + _.left);
    if (n) {
      const A = n / c;
      S(A >= 24 ? 24 : A);
    } else {
      const A = C / c;
      S(A >= 24 ? 24 : A);
    }
    R(F);
  }, [n]), ae(() => {
    w(u[g ? e : 0]);
  }, [e]), /* @__PURE__ */ h("div", { style: { width: n, height: k * 2 }, className: "setting-bar-wrapper", children: [
    /* @__PURE__ */ h("div", { className: "setting-bar", ref: M, children: [
      u.map((C, _) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress ${C.order === L.order ? "selected" : ""}`,
          style: { width: k },
          onClick: () => V(C),
          children: /* @__PURE__ */ t(
            "div",
            {
              className: `point ${C.order < L.order ? "selected" : ""}`
            }
          )
        },
        C.key
      )),
      /* @__PURE__ */ t(
        "div",
        {
          className: `user-progress ${L.order === c - 1 ? "end" : ""}`,
          style: X()
        }
      )
    ] }),
    /* @__PURE__ */ t("div", { className: "setting-explain", children: u.map((C, _) => /* @__PURE__ */ t(
      "span",
      {
        className: _ === L.order ? "selected" : "",
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
      backgroundColor: j.bg_disable,
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
const Mt = (e) => {
  const n = () => ({
    height: e.height ?? "280px",
    objectFit: e.objectFit ?? "fill"
  });
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: e.imageUrl, style: n() }) }) });
};
const Nt = (e) => /* @__PURE__ */ h("div", { className: "group-card", children: [
  e.isSub && /* @__PURE__ */ t(W, { name: "Depth", size: "medium", color: j.grey_111 }),
  /* @__PURE__ */ h("div", { className: "card", children: [
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
const zt = ({ opacity: e }) => /* @__PURE__ */ t(tr, { isOpen: !0, opacity: e, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const xt = (e) => {
  const n = Array(8).fill(1).map((o, s) => o + s);
  return /* @__PURE__ */ h(
    "div",
    {
      className: "page-loading-container",
      style: { height: e.customHeight },
      children: [
        /* @__PURE__ */ t("div", { className: "page-loading-wrapper", children: n.map((o) => /* @__PURE__ */ t("div", { className: "loader" }, `loaderKey${o}`)) }),
        /* @__PURE__ */ t("div", { className: "text", children: e.text })
      ]
    }
  );
}, nr = (e) => {
  const n = Y(null), o = (s) => {
    var u;
    ((u = n.current) == null ? void 0 : u.contains(s.target)) || e();
  };
  return ae(() => (window.addEventListener("click", o), () => {
    window.removeEventListener("click", o);
  }), []), {
    ref: n
  };
};
const Lt = (e) => {
  const [n, o] = P(!0), s = e.ratio * 100 + "%";
  return /* @__PURE__ */ h(
    "div",
    {
      className: "image-wrapper",
      style: { paddingTop: s },
      onClick: () => {
        var l;
        return (l = e.click) == null ? void 0 : l.call(e);
      },
      children: [
        /* @__PURE__ */ t(
          "img",
          {
            src: e.imageUrl,
            loading: e.eager ? "eager" : "lazy",
            onLoad: () => o(!1)
          }
        ),
        n && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(xt, { customHeight: "100%" }) })
      ]
    }
  );
}, jt = (e) => {
  const n = e.ratio ? e.ratio : 1;
  return /* @__PURE__ */ h("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(Lt, { ratio: n, imageUrl: e.imageUrl, click: e.click }),
    /* @__PURE__ */ h("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(Rt, { percent: e.voteAverage, size: 34 }) }),
      /* @__PURE__ */ t("span", { className: "title", children: e.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: e.releaseDate })
    ] })
  ] });
};
const Ot = (e) => /* @__PURE__ */ t(tr, { isOpen: e.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${e.isMobile ? "mobile" : ""}`, children: e.children }) });
const It = (e) => {
  const n = e.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ h("div", { className: "popup-header-container", style: n, children: [
    /* @__PURE__ */ h("div", { className: "popup-header", children: [
      e.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.back, children: /* @__PURE__ */ t(W, { name: "ArrowLeft", size: "big", color: j.grey_999 }) }),
      e.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: e.title }) }),
      e.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.close, children: /* @__PURE__ */ t(W, { name: "Close", size: "big", color: j.grey_999 }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "popup-header-progress", children: e.maxProgress && Array(e.maxProgress).fill(1).map((o, s) => /* @__PURE__ */ t(
      "span",
      {
        className: `${s + o === e.progress ? "selected" : ""}`
      },
      `progress${s}`
    )) })
  ] });
};
const $t = (e) => /* @__PURE__ */ h("div", { className: "notification", children: [
  e.children,
  /* @__PURE__ */ h("div", { className: "info", style: { height: e.height }, children: [
    /* @__PURE__ */ t(W, { name: "Caution", size: "small", color: j.grey_bbb }),
    /* @__PURE__ */ t("span", { children: e.text })
  ] })
] });
const Dt = (e) => {
  const n = `${e.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: n }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: e.imageUrl }) });
};
const At = (e) => {
  const n = e.type ?? "text", [o, s] = P(!1), l = ge(() => {
    let g = "";
    return (o || e.searchText) && (g += " focus"), e.screen === "mobile" && (g += " mobile"), g;
  }, [o, e.screen]), u = ge(() => {
    var c;
    let g = l;
    return typeof e.validator == "function" && !((c = e.validator) != null && c.call(e, e.searchText)) && (g += " error"), g;
  }, [l, e.searchText]);
  return /* @__PURE__ */ h("div", { className: "input-wrapper" + u, children: [
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
const Tt = (e) => {
  const n = e.type ?? "normal", o = e.size ?? "medium", s = e.selected ? "selected" : "";
  return /* @__PURE__ */ t(
    "div",
    {
      className: `selected-item ${n} ${o} ${s}`,
      onClick: () => {
        var l;
        return (l = e.click) == null ? void 0 : l.call(e);
      },
      onTouchStart: () => {
        var l;
        return (l = e.click) == null ? void 0 : l.call(e);
      },
      onTouchEnd: (l) => l.preventDefault(),
      children: e.text ?? e.children
    }
  );
}, Wt = ({
  items: e,
  selected: n,
  click: o,
  open: s,
  itemSize: l
}) => {
  const u = l ?? "medium";
  return /* @__PURE__ */ t("div", { className: `option-list ${s ? "slide" : ""}`, children: /* @__PURE__ */ t("div", { className: "option-items", children: e.map((g) => /* @__PURE__ */ t(
    Tt,
    {
      size: u,
      text: g.name,
      selected: g.name === n,
      click: () => o == null ? void 0 : o(g)
    },
    g.name
  )) }) });
};
const Vt = (e) => {
  if (e.totalPages <= 3 + 6 + 2)
    return /* @__PURE__ */ t("ul", { className: "pagination-numbers", children: Array(e.totalPages).fill(1).map((c, f) => c + f).map((c, f) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(c),
        className: c === e.currentPage ? "selected" : "",
        children: c
      },
      `page${c}`
    )) });
  const l = Array(3).fill(1).map((c, f) => c + f), u = Array(6).fill(
    e.currentPage - 3 <= 3 + 1 ? 3 + 1 : e.currentPage + 2 + Math.floor(6 / 2) >= e.totalPages ? e.totalPages - 6 - 3 + 1 : e.currentPage - Math.floor(6 / 2)
  ).map((c, f) => c + f), g = Array(2).fill(e.totalPages).map((c, f) => c - f);
  return /* @__PURE__ */ h("ul", { className: "pagination-numbers", children: [
    l.map((c, f) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(c),
        className: c === e.currentPage ? "selected" : "",
        children: c
      },
      `page${c}`
    )),
    e.currentPage - Math.floor(6 / 2) > 3 + 1 && /* @__PURE__ */ t("li", { children: "..." }),
    u.map((c, f) => /* @__PURE__ */ t(
      "li",
      {
        onClick: () => e.click(c),
        className: c === e.currentPage ? "selected" : "",
        children: c
      },
      `page${c}`
    )),
    e.totalPages - 2 - Math.floor(6 / 2) > e.currentPage && /* @__PURE__ */ t("li", { children: "..." }),
    g.reverse().map((c, f) => /* @__PURE__ */ t(
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
const Ft = ({ title: e, children: n }) => {
  const [o, s] = P(!1), [l, u] = P("hidden"), { ref: g } = nr(() => {
    s(!1), u("hidden");
  }), c = () => {
    o && u("unset");
  };
  function f() {
    s((R) => !R), o && u("hidden");
  }
  return /* @__PURE__ */ h(
    "div",
    {
      className: "basic-accordion",
      ref: g,
      style: { overflow: l },
      onTransitionEnd: c,
      children: [
        /* @__PURE__ */ h("div", { className: "header", onClick: f, children: [
          /* @__PURE__ */ t("span", { className: "title", children: e }),
          /* @__PURE__ */ t("div", { className: `icon ${o ? "slide" : ""}`, children: /* @__PURE__ */ t(W, { name: "Right", size: "medium", color: j.grey_111 }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `children ${o ? "slide" : ""}`, children: n })
      ]
    }
  );
};
const ir = ({
  itemLength: e,
  container: n,
  slide: o,
  currentIndex: s,
  clickLeft: l,
  clickRight: u,
  clickPoint: g,
  onTransitionEnd: c,
  onMouseEnter: f,
  onMouseLeave: R,
  onTouchStart: k,
  onTouchMove: S,
  onTouchEnd: L,
  children: w
}) => /* @__PURE__ */ h(
  "div",
  {
    className: "carousel",
    onMouseEnter: f,
    onMouseLeave: R,
    children: [
      /* @__PURE__ */ t("div", { className: "container", ref: n, children: /* @__PURE__ */ t(
        "div",
        {
          className: "slide-container",
          ref: o,
          onTransitionEnd: c,
          onTouchStart: k,
          onTouchMove: S,
          onTouchEnd: L,
          children: w
        }
      ) }),
      e >= 2 && /* @__PURE__ */ h(ve, { children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: "left",
            onClick: l,
            children: /* @__PURE__ */ t(W, { name: "Right", size: "small", color: j.white })
          }
        ),
        /* @__PURE__ */ t("div", { className: "right", onClick: u, children: /* @__PURE__ */ t(W, { name: "Right", size: "small", color: j.white }) })
      ] }),
      /* @__PURE__ */ t("div", { className: "progress", children: Array(e).fill(1).map((V, M) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress-point ${s === M + 1 ? "selected" : ""}`,
          onClick: () => g(M + 1)
        },
        M
      )) })
    ]
  }
), ar = (e) => {
  const n = Y(null), o = Y(null), [s, l] = P(1), [u, g] = P(0);
  P(0);
  const c = () => {
    let w = s - 1;
    g(-1), o.current.style.transform = `translateX(-${w * 100}%)`, o.current.style.transition = "transform .3s linear";
  }, f = () => {
    if (!o.current)
      return;
    let w = s + 1;
    g(1), o.current.style.transform = `translateX(-${w * 100}%)`, o.current.style.transition = "transform .3s linear";
  };
  return {
    container: n,
    slide: o,
    currentIndex: s,
    clickLeft: c,
    clickRight: f,
    clickPoint: (w) => {
      w !== s && (o.current.style.transform = `translateX(-${w * 100}%)`, o.current.style.transition = "transform .3s linear", l(w));
    },
    touchMove: (w) => {
      w > 0 ? f() : c();
    },
    touchRecover: () => {
      o.current.style.transform = `translateX(-${s * 100}%)`, o.current.style.transition = "transform .15s linear";
    },
    onTransitionEnd: () => {
      u !== 0 && (u === 1 ? s === e ? (l(1), o.current.style.transform = "translateX(-100%)", o.current.style.transition = "none") : l((w) => w + 1) : s === 1 ? (l(e), l(e), o.current.style.transform = `translateX(-${e * 100}%)`, o.current.style.transition = "none") : l((w) => w - 1), g(0));
    }
  };
}, Bt = (e) => {
  const n = e.items.length, {
    container: o,
    slide: s,
    currentIndex: l,
    clickLeft: u,
    clickRight: g,
    clickPoint: c,
    onTransitionEnd: f
  } = ar(n);
  return /* @__PURE__ */ t(
    ir,
    {
      container: o,
      slide: s,
      currentIndex: l,
      clickLeft: u,
      clickRight: g,
      clickPoint: c,
      onTransitionEnd: f,
      itemLength: n,
      children: /* @__PURE__ */ h(ve, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((R, k) => e.renderItems(R, k)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
}, Gt = (e) => {
  const n = e.items.length, [o, s] = P(), [l, u] = P(!1), g = Y(), {
    container: c,
    slide: f,
    currentIndex: R,
    clickLeft: k,
    clickRight: S,
    clickPoint: L,
    touchMove: w,
    touchRecover: V,
    onTransitionEnd: M
  } = ar(n);
  Be(() => {
    const p = new IntersectionObserver(
      (N, G) => {
        N[0].isIntersecting ? u(!0) : u(!1);
      },
      {
        threshold: 0.1
      }
    );
    g.current = f.current.getBoundingClientRect().width;
    const O = f.current.parentElement;
    p.observe(O);
  }, []);
  const X = () => setInterval(() => {
    S();
  }, e.time);
  ae(() => {
    clearInterval(o), l && n >= 2 && s(X());
  }, [R, l]);
  const C = (p) => {
    p.preventDefault(), u(!1);
  }, _ = Y();
  return /* @__PURE__ */ t(
    ir,
    {
      container: c,
      slide: f,
      currentIndex: R,
      clickLeft: k,
      clickRight: S,
      clickPoint: L,
      onTransitionEnd: M,
      onMouseEnter: C,
      onMouseLeave: () => {
        u(!0);
      },
      itemLength: n,
      onTouchStart: (p) => {
        u(!1), _.current = p.changedTouches[0].pageX;
      },
      onTouchMove: (p) => {
        const O = p.changedTouches[0].pageX, N = _.current - O;
        if (Math.abs(N) > f.current.getBoundingClientRect().width / 1.5)
          return;
        let G;
        N > 0 ? G = `-${R * 100}% - ${Math.abs(N)}px` : G = `-${R * 100}% + ${Math.abs(N)}px`, f.current.style.transform = `translateX(calc(${G}))`;
      },
      onTouchEnd: (p) => {
        const O = g.current / 2.5, N = _.current - p.changedTouches[0].pageX;
        Math.abs(N) >= O ? w(N) : V(), setTimeout(() => {
          o && clearTimeout(o), u(!0);
        }, 2e3);
      },
      children: /* @__PURE__ */ h(ve, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((p, O) => e.renderItems(p, O)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
};
const Ht = ({ selected: e, children: n }) => {
  const [o, s] = P(!1), { ref: l } = nr(() => s(!1));
  return ae(() => {
    const u = setTimeout(() => {
      s(!1);
    }, 150);
    return () => {
      clearTimeout(u);
    };
  }, [e]), /* @__PURE__ */ h("div", { className: "dropdown", ref: l, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "dropdown-selected",
        onClick: () => s((u) => !u),
        children: e
      }
    ),
    jr(n, { open: o, selected: e })
  ] });
};
export {
  Gt as AutoCarousel,
  Ft as BasicAccordion,
  Bt as BasicCarousel,
  Ht as BasicDropDown,
  Pt as Button,
  Mt as Card,
  Rt as CircularProgressBar,
  j as Colors,
  W as Element,
  Nt as GroupCard,
  Et as HeaderBar,
  At as InputBox,
  zt as LoadingSpinner,
  $t as Notification,
  Wt as OptionList,
  tr as OverLay,
  xt as PageLoadingSpinner,
  Vt as PaginationNumbers,
  Ot as Popup,
  It as PopupBasicHeader,
  jt as PosterCard,
  Lt as RatioCardImage,
  Dt as RatioImage,
  Tt as SelectedItem,
  pt as SettingBar,
  nr as useCloseEvent
};
