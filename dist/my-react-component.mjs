import he, { lazy as jr, Suspense as Or, useRef as J, useEffect as ge, useState as z, useMemo as Ae, useLayoutEffect as zr, cloneElement as $r } from "react";
var K = {}, Nr = {
  get exports() {
    return K;
  },
  set exports(e) {
    K = e;
  }
}, q = {};
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
    return q;
  Ve = 1;
  var e = he, n = Symbol.for("react.element"), o = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, f = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function u(y, m, x) {
    var C, L = {}, E = null, A = null;
    x !== void 0 && (E = "" + x), m.key !== void 0 && (E = "" + m.key), m.ref !== void 0 && (A = m.ref);
    for (C in m)
      s.call(m, C) && !h.hasOwnProperty(C) && (L[C] = m[C]);
    if (y && y.defaultProps)
      for (C in m = y.defaultProps, m)
        L[C] === void 0 && (L[C] = m[C]);
    return { $$typeof: n, type: y, key: E, ref: A, props: L, _owner: f.current };
  }
  return q.Fragment = o, q.jsx = u, q.jsxs = u, q;
}
var Z = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Dr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var e = he, n = Symbol.for("react.element"), o = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), u = Symbol.for("react.provider"), y = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), C = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), $ = Symbol.iterator, k = "@@iterator";
    function j(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = $ && r[$] || r[k];
      return typeof i == "function" ? i : null;
    }
    var p = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(r) {
      {
        for (var i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
          a[c - 1] = arguments[c];
        V("error", r, a);
      }
    }
    function V(r, i, a) {
      {
        var c = p.ReactDebugCurrentFrame, v = c.getStackAddendum();
        v !== "" && (i += "%s", a = a.concat([v]));
        var b = a.map(function(g) {
          return String(g);
        });
        b.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, b);
      }
    }
    var N = !1, G = !1, O = !1, I = !1, F = !1, ie;
    ie = Symbol.for("react.module.reference");
    function ir(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === s || r === h || F || r === f || r === x || r === C || I || r === A || N || G || O || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === L || r.$$typeof === u || r.$$typeof === y || r.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === ie || r.getModuleId !== void 0));
    }
    function or(r, i, a) {
      var c = r.displayName;
      if (c)
        return c;
      var v = i.displayName || i.name || "";
      return v !== "" ? a + "(" + v + ")" : a;
    }
    function me(r) {
      return r.displayName || "Context";
    }
    function M(r) {
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
        case h:
          return "Profiler";
        case f:
          return "StrictMode";
        case x:
          return "Suspense";
        case C:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case y:
            var i = r;
            return me(i) + ".Consumer";
          case u:
            var a = r;
            return me(a._context) + ".Provider";
          case m:
            return or(r, r.render, "ForwardRef");
          case L:
            var c = r.displayName || null;
            return c !== null ? c : M(r.type) || "Memo";
          case E: {
            var v = r, b = v._payload, g = v._init;
            try {
              return M(g(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, X = 0, ve, be, ye, _e, ke, we, Ce;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function ar() {
      {
        if (X === 0) {
          ve = console.log, be = console.info, ye = console.warn, _e = console.error, ke = console.group, we = console.groupCollapsed, Ce = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Re,
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
        X++;
      }
    }
    function sr() {
      {
        if (X--, X === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, r, {
              value: ve
            }),
            info: B({}, r, {
              value: be
            }),
            warn: B({}, r, {
              value: ye
            }),
            error: B({}, r, {
              value: _e
            }),
            group: B({}, r, {
              value: ke
            }),
            groupCollapsed: B({}, r, {
              value: we
            }),
            groupEnd: B({}, r, {
              value: Ce
            })
          });
        }
        X < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = p.ReactCurrentDispatcher, ae;
    function Q(r, i, a) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (v) {
            var c = v.stack.trim().match(/\n( *(at )?)/);
            ae = c && c[1] || "";
          }
        return `
` + ae + r;
      }
    }
    var se = !1, ee;
    {
      var cr = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new cr();
    }
    function xe(r, i) {
      if (!r || se)
        return "";
      {
        var a = ee.get(r);
        if (a !== void 0)
          return a;
      }
      var c;
      se = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = oe.current, oe.current = null, ar();
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
          for (var d = D.stack.split(`
`), S = c.stack.split(`
`), w = d.length - 1, R = S.length - 1; w >= 1 && R >= 0 && d[w] !== S[R]; )
            R--;
          for (; w >= 1 && R >= 0; w--, R--)
            if (d[w] !== S[R]) {
              if (w !== 1 || R !== 1)
                do
                  if (w--, R--, R < 0 || d[w] !== S[R]) {
                    var T = `
` + d[w].replace(" at new ", " at ");
                    return r.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", r.displayName)), typeof r == "function" && ee.set(r, T), T;
                  }
                while (w >= 1 && R >= 0);
              break;
            }
        }
      } finally {
        se = !1, oe.current = b, sr(), Error.prepareStackTrace = v;
      }
      var U = r ? r.displayName || r.name : "", De = U ? Q(U) : "";
      return typeof r == "function" && ee.set(r, De), De;
    }
    function lr(r, i, a) {
      return xe(r, !1);
    }
    function ur(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function re(r, i, a) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return xe(r, ur(r));
      if (typeof r == "string")
        return Q(r);
      switch (r) {
        case x:
          return Q("Suspense");
        case C:
          return Q("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            return lr(r.render);
          case L:
            return re(r.type, i, a);
          case E: {
            var c = r, v = c._payload, b = c._init;
            try {
              return re(b(v), i, a);
            } catch {
            }
          }
        }
      return "";
    }
    var te = Object.prototype.hasOwnProperty, pe = {}, Le = p.ReactDebugCurrentFrame;
    function ne(r) {
      if (r) {
        var i = r._owner, a = re(r.type, r._source, i ? i.type : null);
        Le.setExtraStackFrame(a);
      } else
        Le.setExtraStackFrame(null);
    }
    function dr(r, i, a, c, v) {
      {
        var b = Function.call.bind(te);
        for (var g in r)
          if (b(r, g)) {
            var d = void 0;
            try {
              if (typeof r[g] != "function") {
                var S = Error((c || "React class") + ": " + a + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              d = r[g](i, g, c, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              d = w;
            }
            d && !(d instanceof Error) && (ne(v), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", a, g, typeof d), ne(null)), d instanceof Error && !(d.message in pe) && (pe[d.message] = !0, ne(v), _("Failed %s type: %s", a, d.message), ne(null));
          }
      }
    }
    var fr = Array.isArray;
    function ce(r) {
      return fr(r);
    }
    function hr(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, a = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return a;
      }
    }
    function gr(r) {
      try {
        return Se(r), !1;
      } catch {
        return !0;
      }
    }
    function Se(r) {
      return "" + r;
    }
    function Ee(r) {
      if (gr(r))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(r)), Se(r);
    }
    var Y = p.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Pe, le;
    le = {};
    function vr(r) {
      if (te.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function br(r) {
      if (te.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function yr(r, i) {
      if (typeof r.ref == "string" && Y.current && i && Y.current.stateNode !== i) {
        var a = M(Y.current.type);
        le[a] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(Y.current.type), r.ref), le[a] = !0);
      }
    }
    function _r(r, i) {
      {
        var a = function() {
          Te || (Te = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function kr(r, i) {
      {
        var a = function() {
          Pe || (Pe = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        a.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var wr = function(r, i, a, c, v, b, g) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: a,
        props: g,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return d._store = {}, Object.defineProperty(d._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(d, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.defineProperty(d, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function Cr(r, i, a, c, v) {
      {
        var b, g = {}, d = null, S = null;
        a !== void 0 && (Ee(a), d = "" + a), br(i) && (Ee(i.key), d = "" + i.key), vr(i) && (S = i.ref, yr(i, v));
        for (b in i)
          te.call(i, b) && !mr.hasOwnProperty(b) && (g[b] = i[b]);
        if (r && r.defaultProps) {
          var w = r.defaultProps;
          for (b in w)
            g[b] === void 0 && (g[b] = w[b]);
        }
        if (d || S) {
          var R = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          d && _r(g, R), S && kr(g, R);
        }
        return wr(r, d, S, v, c, Y.current, g);
      }
    }
    var ue = p.ReactCurrentOwner, je = p.ReactDebugCurrentFrame;
    function H(r) {
      if (r) {
        var i = r._owner, a = re(r.type, r._source, i ? i.type : null);
        je.setExtraStackFrame(a);
      } else
        je.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function fe(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function Oe() {
      {
        if (ue.current) {
          var r = M(ue.current.type);
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
          var i = r.fileName.replace(/^.*[\\\/]/, ""), a = r.lineNumber;
          return `

Check your code at ` + i + ":" + a + ".";
        }
        return "";
      }
    }
    var ze = {};
    function xr(r) {
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
        var a = xr(i);
        if (ze[a])
          return;
        ze[a] = !0;
        var c = "";
        r && r._owner && r._owner !== ue.current && (c = " It was passed a child from " + M(r._owner.type) + "."), H(r), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, c), H(null);
      }
    }
    function Ne(r, i) {
      {
        if (typeof r != "object")
          return;
        if (ce(r))
          for (var a = 0; a < r.length; a++) {
            var c = r[a];
            fe(c) && $e(c, i);
          }
        else if (fe(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var v = j(r);
          if (typeof v == "function" && v !== r.entries)
            for (var b = v.call(r), g; !(g = b.next()).done; )
              fe(g.value) && $e(g.value, i);
        }
      }
    }
    function pr(r) {
      {
        var i = r.type;
        if (i == null || typeof i == "string")
          return;
        var a;
        if (typeof i == "function")
          a = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === L))
          a = i.propTypes;
        else
          return;
        if (a) {
          var c = M(i);
          dr(a, r.props, "prop", c, r);
        } else if (i.PropTypes !== void 0 && !de) {
          de = !0;
          var v = M(i);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lr(r) {
      {
        for (var i = Object.keys(r.props), a = 0; a < i.length; a++) {
          var c = i[a];
          if (c !== "children" && c !== "key") {
            H(r), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), H(null);
            break;
          }
        }
        r.ref !== null && (H(r), _("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function Me(r, i, a, c, v, b) {
      {
        var g = ir(r);
        if (!g) {
          var d = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = Rr(v);
          S ? d += S : d += Oe();
          var w;
          r === null ? w = "null" : ce(r) ? w = "array" : r !== void 0 && r.$$typeof === n ? (w = "<" + (M(r.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : w = typeof r, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, d);
        }
        var R = Cr(r, i, a, v, b);
        if (R == null)
          return R;
        if (g) {
          var T = i.children;
          if (T !== void 0)
            if (c)
              if (ce(T)) {
                for (var U = 0; U < T.length; U++)
                  Ne(T[U], r);
                Object.freeze && Object.freeze(T);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ne(T, r);
        }
        return r === s ? Lr(R) : pr(R), R;
      }
    }
    function Sr(r, i, a) {
      return Me(r, i, a, !0);
    }
    function Er(r, i, a) {
      return Me(r, i, a, !1);
    }
    var Tr = Er, Pr = Sr;
    Z.Fragment = s, Z.jsx = Tr, Z.jsxs = Pr;
  }()), Z;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Mr() : e.exports = Dr();
})(Nr);
const Ie = K.Fragment, t = K.jsx, l = K.jsxs, Ar = "#6440dd", Vr = "#5934D8", Wr = "#F5222D", Ir = "#111111", Fr = "#666666", Br = "#333333", Gr = "#999999", Hr = "#bbbbbb", Ur = "#cccccc", Xr = "#f4f4f4", Yr = "#f5f6f8", qr = "#f2f4f7", Zr = "#dbd6eb", Jr = "#eeebff", Kr = "#b6b7b9", Qr = "#e7e9ef", et = "#cfd4dd", rt = "#d42a21", tt = "#1968e5", nt = "#27c4b8", it = "#fff", ot = "#f4f0ff", at = "#ABAEBF", st = "#03c75a", ct = "#e1a016", lt = "#da1c26", P = {
  main: Ar,
  main_sub: Vr,
  notice: Wr,
  grey_111: Ir,
  grey_666: Fr,
  grey_333: Br,
  grey_999: Gr,
  grey_bbb: Hr,
  grey_ccc: Ur,
  grey_f4: Xr,
  bg_main: Yr,
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
  const o = e[n];
  return o ? typeof o == "function" ? o() : Promise.resolve(o) : new Promise((s, f) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(f.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
}, Fe = (e) => {
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
  default: Fe
}, Symbol.toStringTag, { value: "Module" })), Be = (e) => {
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
  default: Be
}, Symbol.toStringTag, { value: "Module" })), Ge = (e) => {
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
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), He = (e) => {
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
  default: He
}, Symbol.toStringTag, { value: "Module" })), Ue = (e) => {
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
  default: Ue
}, Symbol.toStringTag, { value: "Module" })), Xe = (e) => {
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
  default: Xe
}, Symbol.toStringTag, { value: "Module" })), Ye = (e) => {
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
  default: Ye
}, Symbol.toStringTag, { value: "Module" })), qe = (e) => {
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
}, yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: qe
}, Symbol.toStringTag, { value: "Module" })), Ze = (e) => {
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
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ze
}, Symbol.toStringTag, { value: "Module" })), Je = (e) => {
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
  default: Je
}, Symbol.toStringTag, { value: "Module" })), Ke = (e) => {
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
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), Qe = (e) => {
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
  default: Qe
}, Symbol.toStringTag, { value: "Module" })), W = (e) => {
  const n = () => {
    switch (e.name) {
      case "Adult":
        return /* @__PURE__ */ t(Fe, { ...e });
      case "ArrowLeft":
        return /* @__PURE__ */ t(Be, { ...e });
      case "Caution":
        return /* @__PURE__ */ t(Ge, { ...e });
      case "Check":
        return /* @__PURE__ */ t(He, { ...e });
      case "Close":
        return /* @__PURE__ */ t(Ue, { ...e });
      case "Depth":
        return /* @__PURE__ */ t(Xe, { ...e });
      case "Gear":
        return /* @__PURE__ */ t(Ye, { ...e });
      case "Hamburger":
        return /* @__PURE__ */ t(qe, { ...e });
      case "Plus":
        return /* @__PURE__ */ t(Ze, { ...e });
      case "Right":
        return /* @__PURE__ */ t(Je, { ...e });
      case "Search":
        return /* @__PURE__ */ t(Ke, { ...e });
      case "Setting":
        return /* @__PURE__ */ t(Qe, { ...e });
      default:
        return null;
    }
  }, o = () => e.size === "big" ? "30px" : e.size === "medium" ? "24px" : "20px";
  return jr(() => ut(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => dt), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => ft), "./icons/Caution.tsx": () => Promise.resolve().then(() => ht), "./icons/Check.tsx": () => Promise.resolve().then(() => gt), "./icons/Close.tsx": () => Promise.resolve().then(() => mt), "./icons/Depth.tsx": () => Promise.resolve().then(() => vt), "./icons/Gear.tsx": () => Promise.resolve().then(() => bt), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => yt), "./icons/Plus.tsx": () => Promise.resolve().then(() => _t), "./icons/Right.tsx": () => Promise.resolve().then(() => kt), "./icons/Search.tsx": () => Promise.resolve().then(() => wt), "./icons/Setting.tsx": () => Promise.resolve().then(() => Ct) }), `./icons/${e.name}.tsx`)), /* @__PURE__ */ t(Or, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: o(), display: "inline-block" }, children: n() }) });
};
const Et = (e) => {
  const n = typeof e.back == "function", o = e.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ l("div", { className: o, children: [
    /* @__PURE__ */ l("div", { className: "logo", children: [
      n && /* @__PURE__ */ t("div", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(W, { name: "ArrowLeft", size: "big", color: P.grey_111 }) }),
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
  }, f = e.percent >= 50 ? 18 * (e.percent - 50) / 5 : 0, h = e.percent <= 50 ? 18 * (e.percent / 5) : 180, u = e.percent < 50 ? P.red : e.percent < 75 ? P.orange : P.green, y = {
    border: `${n}px solid ${u}`,
    borderTopRightRadius: e.size + "px",
    borderBottomRightRadius: e.size + "px",
    transform: `rotate(${f}deg)`
  }, m = {
    border: `${n}px solid ${u}`,
    borderTopLeftRadius: e.size + "px",
    borderBottomLeftRadius: e.size + "px",
    transform: `rotate(${h}deg)`
  }, x = {
    fontSize: e.size / 4 + "px",
    borderRadius: e.size - n * 2 + "px",
    width: e.size - n * 2 + "px",
    height: e.size - n * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: o, children: /* @__PURE__ */ l("div", { className: "circular-progress-bar", style: s, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: y }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: m }) }),
    /* @__PURE__ */ l("div", { className: "percent", style: x, children: [
      e.percent,
      "%"
    ] })
  ] }) });
};
const Tt = (e) => /* @__PURE__ */ t(
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
const Pt = (e) => {
  const n = () => ({
    height: e.height ?? "280px",
    objectFit: e.objectFit ?? "fill"
  });
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: e.imageUrl, style: n() }) }) });
};
const jt = (e) => /* @__PURE__ */ l("div", { className: "group-card", children: [
  e.isSub && /* @__PURE__ */ t(W, { name: "Depth", size: "medium", color: P.grey_111 }),
  /* @__PURE__ */ l("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: e.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: e.label }) })
  ] })
] });
const er = (e) => {
  const n = {
    backgroundColor: `rgba(0,0,0,${e.opacity})`
  };
  return /* @__PURE__ */ t(he.Fragment, { children: e.isOpen && /* @__PURE__ */ t("div", { className: "overlay", style: n, children: e.children }) });
};
const Ot = ({ opacity: e }) => /* @__PURE__ */ t(er, { isOpen: !0, opacity: e, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const xt = (e) => {
  const n = Array(8).fill(1).map((o, s) => o + s);
  return /* @__PURE__ */ l(
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
}, rr = (e) => {
  const n = J(null), o = (s) => {
    var h;
    ((h = n.current) == null ? void 0 : h.contains(s.target)) || e();
  };
  return ge(() => (window.addEventListener("click", o), () => {
    window.removeEventListener("click", o);
  }), []), {
    ref: n
  };
};
const pt = (e) => {
  const [n, o] = z(!0), s = e.ratio * 100 + "%";
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
            onLoad: () => o(!1)
          }
        ),
        n && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(xt, { customHeight: "100%" }) })
      ]
    }
  );
}, zt = (e) => {
  const n = e.ratio ? e.ratio : 1;
  return /* @__PURE__ */ l("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(pt, { ratio: n, imageUrl: e.imageUrl, click: e.click }),
    /* @__PURE__ */ l("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(Rt, { percent: e.voteAverage, size: 34 }) }),
      /* @__PURE__ */ t("span", { className: "title", children: e.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: e.releaseDate })
    ] })
  ] });
};
const $t = (e) => /* @__PURE__ */ t(er, { isOpen: e.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${e.isMobile ? "mobile" : ""}`, children: e.children }) });
const Nt = (e) => {
  const n = e.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ l("div", { className: "popup-header-container", style: n, children: [
    /* @__PURE__ */ l("div", { className: "popup-header", children: [
      e.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.back, children: /* @__PURE__ */ t(W, { name: "ArrowLeft", size: "big", color: P.grey_999 }) }),
      e.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: e.title }) }),
      e.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.close, children: /* @__PURE__ */ t(W, { name: "Close", size: "big", color: P.grey_999 }) })
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
const Mt = (e) => /* @__PURE__ */ l("div", { className: "notification", children: [
  e.children,
  /* @__PURE__ */ l("div", { className: "info", style: { height: e.height }, children: [
    /* @__PURE__ */ t(W, { name: "Caution", size: "small", color: P.grey_bbb }),
    /* @__PURE__ */ t("span", { children: e.text })
  ] })
] });
const Dt = (e) => {
  const n = `${e.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: n }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: e.imageUrl }) });
};
const At = (e) => {
  const n = e.type ?? "text", [o, s] = z(!1), f = Ae(() => {
    let u = "";
    return (o || e.searchText) && (u += " focus"), e.screen === "mobile" && (u += " mobile"), u;
  }, [o, e.screen]), h = Ae(() => {
    var y;
    let u = f;
    return typeof e.validator == "function" && !((y = e.validator) != null && y.call(e, e.searchText)) && (u += " error"), u;
  }, [f, e.searchText]);
  return /* @__PURE__ */ l("div", { className: "input-wrapper" + h, children: [
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
const Lt = (e) => {
  const n = e.size ?? "medium", o = e.selected ? "selected" : "";
  return /* @__PURE__ */ t("div", { className: `selected-item ${n} ${o}`, onClick: e.click, children: e.text });
}, Vt = ({
  items: e,
  selected: n,
  click: o,
  open: s,
  itemSize: f
}) => {
  const h = f ?? "medium";
  return /* @__PURE__ */ t("div", { className: `option-list ${s ? "slide" : ""}`, children: /* @__PURE__ */ t("div", { className: "option-items", children: e.map((u) => /* @__PURE__ */ t(
    Lt,
    {
      size: h,
      text: u.name,
      selected: u.name === n,
      click: () => o == null ? void 0 : o(u)
    },
    u.name
  )) }) });
};
const Wt = ({ title: e, children: n }) => {
  const [o, s] = z(!1), [f, h] = z("hidden"), { ref: u } = rr(() => {
    s(!1), h("hidden");
  }), y = () => {
    o && h("unset");
  };
  function m() {
    s((x) => !x), o && h("hidden");
  }
  return /* @__PURE__ */ l(
    "div",
    {
      className: "basic-accordion",
      ref: u,
      style: { overflow: f },
      onTransitionEnd: y,
      children: [
        /* @__PURE__ */ l("div", { className: "header", onClick: m, children: [
          /* @__PURE__ */ t("span", { className: "title", children: e }),
          /* @__PURE__ */ t("div", { className: `icon ${o ? "slide" : ""}`, children: /* @__PURE__ */ t(W, { name: "Right", size: "medium", color: P.grey_111 }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `children ${o ? "slide" : ""}`, children: n })
      ]
    }
  );
};
const tr = ({
  itemLength: e,
  container: n,
  slide: o,
  currentIndex: s,
  clickLeft: f,
  clickRight: h,
  clickPoint: u,
  onTransitionEnd: y,
  onMouseEnter: m,
  onMouseLeave: x,
  onTouchStart: C,
  onTouchEnd: L,
  children: E
}) => /* @__PURE__ */ l(
  "div",
  {
    className: "carousel",
    onMouseEnter: m,
    onMouseLeave: x,
    children: [
      /* @__PURE__ */ t("div", { className: "container", ref: n, children: /* @__PURE__ */ t(
        "div",
        {
          className: "slide-container",
          ref: o,
          onTransitionEnd: y,
          onTouchStart: C,
          onTouchEnd: L,
          children: E
        }
      ) }),
      /* @__PURE__ */ t(
        "div",
        {
          className: "left",
          onClick: f,
          children: /* @__PURE__ */ t(W, { name: "Right", size: "small", color: P.white })
        }
      ),
      /* @__PURE__ */ t("div", { className: "right", onClick: h, children: /* @__PURE__ */ t(W, { name: "Right", size: "small", color: P.white }) }),
      /* @__PURE__ */ t("div", { className: "progress", children: Array(e).fill(1).map((A, $) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress-point ${s === $ + 1 ? "selected" : ""}`,
          onClick: () => u($ + 1)
        },
        $
      )) })
    ]
  }
), nr = (e) => {
  const n = J(null), o = J(null), [s, f] = z(1), [h, u] = z(0), [y, m] = z(0);
  return {
    container: n,
    slide: o,
    currentIndex: s,
    clickLeft: () => {
      u(-1), o.current.style.transform = "translateX(+100%)", o.current.style.transition = "transform .3s linear";
    },
    clickRight: () => {
      o.current && (u(1), o.current.style.transform = "translateX(-100%)", o.current.style.transition = "transform .3s linear");
    },
    clickPoint: (k) => {
      k !== s && (k < s ? (o.current.style.transform = `translateX(+${(s - k) * 100}%)`, o.current.style.transition = "transform .3s linear", u(-1), f(k + 1)) : (o.current.style.transform = `translateX(-${(k - s) * 100}%)`, o.current.style.transition = "transform .3s linear", u(1), f(k - 1)));
    },
    touchMove: (k) => {
      var p, _;
      const j = (p = n.current) == null ? void 0 : p.scrollLeft;
      if (k > 0) {
        const N = `-${(s + 1) * 100}% + ${j}px`;
        o.current.style.transform = `translateX(calc(${N}))`, o.current.style.transition = "transform .3s linear", u(1);
      } else {
        const N = `${(_ = o.current) == null ? void 0 : _.getBoundingClientRect().width}px - ${Math.abs(k)}px`;
        o.current.style.transform = `translateX(calc(${N}))`, o.current.style.transition = "transform .3s linear", u(-1);
      }
    },
    touchRecover: (k) => {
      var j, p, _;
      if (k > 0) {
        const V = (j = n.current) == null ? void 0 : j.scrollLeft, G = `-${s * 100}% + ${V}px`;
        o.current.style.transform = `translateX(calc(${G}))`, o.current.style.transition = "transform .1s linear", m(1);
      } else {
        const V = s, N = (p = n.current) == null ? void 0 : p.scrollLeft;
        (_ = o.current) == null || _.getBoundingClientRect().width;
        const G = `-${V * 100}% + ${N}px`;
        o.current.style.transform = `translateX(calc(${G}))`, o.current.style.transition = "transform .1s linear", m(-1);
      }
    },
    onTransitionEnd: () => {
      var j;
      const k = (j = o.current) == null ? void 0 : j.getBoundingClientRect().width;
      if (h === 0) {
        y === -1 && (o.current.style.transform = "translateX(0)", o.current.style.transition = "none", n.current && (n.current.scrollLeft = k * s)), m(0);
        return;
      }
      h === 1 ? s === e ? (f(1), o.current.style.transform = "translateX(0)", o.current.style.transition = "none", n.current.scrollLeft = k) : (o.current.style.transform = "translateX(0)", o.current.style.transition = "none", n.current && (n.current.scrollLeft = k * (s + 1)), f((p) => p + 1)) : s === 1 ? (f(e), o.current.style.transform = "translateX(0)", o.current.style.transition = "none", n.current.scrollLeft = k * e) : (o.current.style.transform = "translateX(0)", o.current.style.transition = "none", n.current && (n.current.scrollLeft = k * (s - 1)), f((p) => p - 1)), u(0);
    }
  };
}, It = (e) => {
  const n = e.items.length, {
    container: o,
    slide: s,
    currentIndex: f,
    clickLeft: h,
    clickRight: u,
    clickPoint: y,
    onTransitionEnd: m
  } = nr(n);
  return /* @__PURE__ */ t(
    tr,
    {
      container: o,
      slide: s,
      currentIndex: f,
      clickLeft: h,
      clickRight: u,
      clickPoint: y,
      onTransitionEnd: m,
      itemLength: n,
      children: /* @__PURE__ */ l(Ie, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((x, C) => e.renderItems(x, C)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
}, Ft = (e) => {
  const n = e.items.length, [o, s] = z(), [f, h] = z(!1), u = J(), {
    container: y,
    slide: m,
    currentIndex: x,
    clickLeft: C,
    clickRight: L,
    clickPoint: E,
    touchMove: A,
    touchRecover: $,
    onTransitionEnd: k
  } = nr(n);
  zr(() => {
    const O = new IntersectionObserver(
      (F, ie) => {
        F[0].isIntersecting ? h(!0) : h(!1);
      },
      {
        threshold: 0.1
      }
    );
    u.current = m.current.children[0].clientWidth;
    const I = m.current.parentElement;
    y.current.scrollLeft = u.current, O.observe(I);
  }, []);
  const j = () => setInterval(() => {
    L();
  }, e.time);
  ge(() => {
    clearInterval(o), f && s(j());
  }, [x, f]);
  const p = () => {
    h(!1);
  }, _ = J();
  return /* @__PURE__ */ t(
    tr,
    {
      container: y,
      slide: m,
      currentIndex: x,
      clickLeft: C,
      clickRight: L,
      clickPoint: E,
      onTransitionEnd: k,
      onMouseEnter: p,
      onMouseLeave: () => {
        h(!0);
      },
      itemLength: n,
      onTouchStart: (O) => {
        console.log("touch start"), y.current && (y.current.style.overflow = "auto"), h(!1), _.current = O.changedTouches[0].pageX;
      },
      onTouchEnd: (O) => {
        y.current;
        const I = u.current / 2.5, F = _.current - O.changedTouches[0].pageX;
        Math.abs(F) >= I ? A(F) : (O.changedTouches[0], $(F)), setTimeout(() => {
          o && clearTimeout(o), h(!0);
        }, 2e3);
      },
      children: /* @__PURE__ */ l(Ie, { children: [
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
const Bt = ({ selected: e, children: n }) => {
  const [o, s] = z(!1), { ref: f } = rr(() => s(!1));
  return ge(() => {
    const h = setTimeout(() => {
      s(!1);
    }, 150);
    return () => {
      clearTimeout(h);
    };
  }, [e]), /* @__PURE__ */ l("div", { className: "dropdown", ref: f, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "dropdown-selected",
        onClick: () => s((h) => !h),
        children: e
      }
    ),
    $r(n, { open: o, selected: e })
  ] });
};
export {
  Ft as AutoCarousel,
  Wt as BasicAccordion,
  It as BasicCarousel,
  Bt as BasicDropDown,
  Tt as Button,
  Pt as Card,
  Rt as CircularProgressBar,
  P as Colors,
  W as Element,
  jt as GroupCard,
  Et as HeaderBar,
  At as InputBox,
  Ot as LoadingSpinner,
  Mt as Notification,
  Vt as OptionList,
  er as OverLay,
  xt as PageLoadingSpinner,
  $t as Popup,
  Nt as PopupBasicHeader,
  zt as PosterCard,
  pt as RatioCardImage,
  Dt as RatioImage,
  Lt as SelectedItem,
  rr as useCloseEvent
};
