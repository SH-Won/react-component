import ce, { lazy as Or, Suspense as jr, useRef as Q, useEffect as le, useState as z, useMemo as Me, useLayoutEffect as zr, cloneElement as Nr } from "react";
var H = {}, $r = {
  get exports() {
    return H;
  },
  set exports(e) {
    H = e;
  }
}, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function Mr() {
  if (De)
    return B;
  De = 1;
  var e = ce, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, h = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function m(y, b, C) {
    var v, p = {}, E = null, T = null;
    C !== void 0 && (E = "" + C), b.key !== void 0 && (E = "" + b.key), b.ref !== void 0 && (T = b.ref);
    for (v in b)
      s.call(b, v) && !u.hasOwnProperty(v) && (p[v] = b[v]);
    if (y && y.defaultProps)
      for (v in b = y.defaultProps, b)
        p[v] === void 0 && (p[v] = b[v]);
    return { $$typeof: n, type: y, key: E, ref: T, props: p, _owner: h.current };
  }
  return B.Fragment = a, B.jsx = m, B.jsxs = m, B;
}
var G = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ae;
function Dr() {
  return Ae || (Ae = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ce, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), m = Symbol.for("react.provider"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), U = Symbol.iterator, Y = "@@iterator";
    function ue(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = U && r[U] || r[Y];
      return typeof i == "function" ? i : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(r) {
      {
        for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), c = 1; c < i; c++)
          o[c - 1] = arguments[c];
        P("error", r, o);
      }
    }
    function P(r, i, o) {
      {
        var c = D.ReactDebugCurrentFrame, g = c.getStackAddendum();
        g !== "" && (i += "%s", o = o.concat([g]));
        var _ = o.map(function(f) {
          return String(f);
        });
        _.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, _);
      }
    }
    var N = !1, $ = !1, de = !1, tr = !1, nr = !1, fe;
    fe = Symbol.for("react.module.reference");
    function ir(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === s || r === u || nr || r === h || r === C || r === v || tr || r === T || N || $ || de || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === p || r.$$typeof === m || r.$$typeof === y || r.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === fe || r.getModuleId !== void 0));
    }
    function or(r, i, o) {
      var c = r.displayName;
      if (c)
        return c;
      var g = i.displayName || i.name || "";
      return g !== "" ? o + "(" + g + ")" : o;
    }
    function he(r) {
      return r.displayName || "Context";
    }
    function O(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
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
        case h:
          return "StrictMode";
        case C:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case y:
            var i = r;
            return he(i) + ".Consumer";
          case m:
            var o = r;
            return he(o._context) + ".Provider";
          case b:
            return or(r, r.render, "ForwardRef");
          case p:
            var c = r.displayName || null;
            return c !== null ? c : O(r.type) || "Memo";
          case E: {
            var g = r, _ = g._payload, f = g._init;
            try {
              return O(f(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, W = 0, ge, me, ve, be, _e, ye, ke;
    function we() {
    }
    we.__reactDisabledLog = !0;
    function ar() {
      {
        if (W === 0) {
          ge = console.log, me = console.info, ve = console.warn, be = console.error, _e = console.group, ye = console.groupCollapsed, ke = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: we,
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
        W++;
      }
    }
    function sr() {
      {
        if (W--, W === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, r, {
              value: ge
            }),
            info: A({}, r, {
              value: me
            }),
            warn: A({}, r, {
              value: ve
            }),
            error: A({}, r, {
              value: be
            }),
            group: A({}, r, {
              value: _e
            }),
            groupCollapsed: A({}, r, {
              value: ye
            }),
            groupEnd: A({}, r, {
              value: ke
            })
          });
        }
        W < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = D.ReactCurrentDispatcher, re;
    function X(r, i, o) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (g) {
            var c = g.stack.trim().match(/\n( *(at )?)/);
            re = c && c[1] || "";
          }
        return `
` + re + r;
      }
    }
    var te = !1, q;
    {
      var cr = typeof WeakMap == "function" ? WeakMap : Map;
      q = new cr();
    }
    function Ce(r, i) {
      if (!r || te)
        return "";
      {
        var o = q.get(r);
        if (o !== void 0)
          return o;
      }
      var c;
      te = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = ee.current, ee.current = null, ar();
      try {
        if (i) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (j) {
              c = j;
            }
            Reflect.construct(r, [], f);
          } else {
            try {
              f.call();
            } catch (j) {
              c = j;
            }
            r.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            c = j;
          }
          r();
        }
      } catch (j) {
        if (j && c && typeof j.stack == "string") {
          for (var d = j.stack.split(`
`), x = c.stack.split(`
`), k = d.length - 1, w = x.length - 1; k >= 1 && w >= 0 && d[k] !== x[w]; )
            w--;
          for (; k >= 1 && w >= 0; k--, w--)
            if (d[k] !== x[w]) {
              if (k !== 1 || w !== 1)
                do
                  if (k--, w--, w < 0 || d[k] !== x[w]) {
                    var S = `
` + d[k].replace(" at new ", " at ");
                    return r.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", r.displayName)), typeof r == "function" && q.set(r, S), S;
                  }
                while (k >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        te = !1, ee.current = _, sr(), Error.prepareStackTrace = g;
      }
      var V = r ? r.displayName || r.name : "", $e = V ? X(V) : "";
      return typeof r == "function" && q.set(r, $e), $e;
    }
    function lr(r, i, o) {
      return Ce(r, !1);
    }
    function ur(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function Z(r, i, o) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ce(r, ur(r));
      if (typeof r == "string")
        return X(r);
      switch (r) {
        case C:
          return X("Suspense");
        case v:
          return X("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case b:
            return lr(r.render);
          case p:
            return Z(r.type, i, o);
          case E: {
            var c = r, g = c._payload, _ = c._init;
            try {
              return Z(_(g), i, o);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Re = {}, xe = D.ReactDebugCurrentFrame;
    function K(r) {
      if (r) {
        var i = r._owner, o = Z(r.type, r._source, i ? i.type : null);
        xe.setExtraStackFrame(o);
      } else
        xe.setExtraStackFrame(null);
    }
    function dr(r, i, o, c, g) {
      {
        var _ = Function.call.bind(J);
        for (var f in r)
          if (_(r, f)) {
            var d = void 0;
            try {
              if (typeof r[f] != "function") {
                var x = Error((c || "React class") + ": " + o + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              d = r[f](i, f, c, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              d = k;
            }
            d && !(d instanceof Error) && (K(g), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", o, f, typeof d), K(null)), d instanceof Error && !(d.message in Re) && (Re[d.message] = !0, K(g), R("Failed %s type: %s", o, d.message), K(null));
          }
      }
    }
    var fr = Array.isArray;
    function ne(r) {
      return fr(r);
    }
    function hr(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, o = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return o;
      }
    }
    function gr(r) {
      try {
        return pe(r), !1;
      } catch {
        return !0;
      }
    }
    function pe(r) {
      return "" + r;
    }
    function Se(r) {
      if (gr(r))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(r)), pe(r);
    }
    var F = D.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ee, ie;
    ie = {};
    function vr(r) {
      if (J.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function br(r) {
      if (J.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function _r(r, i) {
      if (typeof r.ref == "string" && F.current && i && F.current.stateNode !== i) {
        var o = O(F.current.type);
        ie[o] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(F.current.type), r.ref), ie[o] = !0);
      }
    }
    function yr(r, i) {
      {
        var o = function() {
          Le || (Le = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function kr(r, i) {
      {
        var o = function() {
          Ee || (Ee = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var wr = function(r, i, o, c, g, _, f) {
      var d = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: o,
        props: f,
        // Record the component responsible for creating this element.
        _owner: _
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
        value: g
      }), Object.freeze && (Object.freeze(d.props), Object.freeze(d)), d;
    };
    function Cr(r, i, o, c, g) {
      {
        var _, f = {}, d = null, x = null;
        o !== void 0 && (Se(o), d = "" + o), br(i) && (Se(i.key), d = "" + i.key), vr(i) && (x = i.ref, _r(i, g));
        for (_ in i)
          J.call(i, _) && !mr.hasOwnProperty(_) && (f[_] = i[_]);
        if (r && r.defaultProps) {
          var k = r.defaultProps;
          for (_ in k)
            f[_] === void 0 && (f[_] = k[_]);
        }
        if (d || x) {
          var w = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          d && yr(f, w), x && kr(f, w);
        }
        return wr(r, d, x, g, c, F.current, f);
      }
    }
    var oe = D.ReactCurrentOwner, Te = D.ReactDebugCurrentFrame;
    function I(r) {
      if (r) {
        var i = r._owner, o = Z(r.type, r._source, i ? i.type : null);
        Te.setExtraStackFrame(o);
      } else
        Te.setExtraStackFrame(null);
    }
    var ae;
    ae = !1;
    function se(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function Pe() {
      {
        if (oe.current) {
          var r = O(oe.current.type);
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
    var Oe = {};
    function xr(r) {
      {
        var i = Pe();
        if (!i) {
          var o = typeof r == "string" ? r : r.displayName || r.name;
          o && (i = `

Check the top-level render call using <` + o + ">.");
        }
        return i;
      }
    }
    function je(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var o = xr(i);
        if (Oe[o])
          return;
        Oe[o] = !0;
        var c = "";
        r && r._owner && r._owner !== oe.current && (c = " It was passed a child from " + O(r._owner.type) + "."), I(r), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, c), I(null);
      }
    }
    function ze(r, i) {
      {
        if (typeof r != "object")
          return;
        if (ne(r))
          for (var o = 0; o < r.length; o++) {
            var c = r[o];
            se(c) && je(c, i);
          }
        else if (se(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var g = ue(r);
          if (typeof g == "function" && g !== r.entries)
            for (var _ = g.call(r), f; !(f = _.next()).done; )
              se(f.value) && je(f.value, i);
        }
      }
    }
    function pr(r) {
      {
        var i = r.type;
        if (i == null || typeof i == "string")
          return;
        var o;
        if (typeof i == "function")
          o = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === p))
          o = i.propTypes;
        else
          return;
        if (o) {
          var c = O(i);
          dr(o, r.props, "prop", c, r);
        } else if (i.PropTypes !== void 0 && !ae) {
          ae = !0;
          var g = O(i);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sr(r) {
      {
        for (var i = Object.keys(r.props), o = 0; o < i.length; o++) {
          var c = i[o];
          if (c !== "children" && c !== "key") {
            I(r), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", c), I(null);
            break;
          }
        }
        r.ref !== null && (I(r), R("Invalid attribute `ref` supplied to `React.Fragment`."), I(null));
      }
    }
    function Ne(r, i, o, c, g, _) {
      {
        var f = ir(r);
        if (!f) {
          var d = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (d += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = Rr(g);
          x ? d += x : d += Pe();
          var k;
          r === null ? k = "null" : ne(r) ? k = "array" : r !== void 0 && r.$$typeof === n ? (k = "<" + (O(r.type) || "Unknown") + " />", d = " Did you accidentally export a JSX literal instead of a component?") : k = typeof r, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, d);
        }
        var w = Cr(r, i, o, g, _);
        if (w == null)
          return w;
        if (f) {
          var S = i.children;
          if (S !== void 0)
            if (c)
              if (ne(S)) {
                for (var V = 0; V < S.length; V++)
                  ze(S[V], r);
                Object.freeze && Object.freeze(S);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(S, r);
        }
        return r === s ? Sr(w) : pr(w), w;
      }
    }
    function Lr(r, i, o) {
      return Ne(r, i, o, !0);
    }
    function Er(r, i, o) {
      return Ne(r, i, o, !1);
    }
    var Tr = Er, Pr = Lr;
    G.Fragment = s, G.jsx = Tr, G.jsxs = Pr;
  }()), G;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Mr() : e.exports = Dr();
})($r);
const Ie = H.Fragment, t = H.jsx, l = H.jsxs, Ar = "#6440dd", Ir = "#5934D8", Vr = "#F5222D", Wr = "#111111", Fr = "#666666", Br = "#333333", Gr = "#999999", Hr = "#bbbbbb", Ur = "#cccccc", Yr = "#f4f4f4", Xr = "#f5f6f8", qr = "#f2f4f7", Zr = "#dbd6eb", Jr = "#eeebff", Kr = "#b6b7b9", Qr = "#e7e9ef", et = "#cfd4dd", rt = "#d42a21", tt = "#1968e5", nt = "#27c4b8", it = "#fff", ot = "#f4f0ff", at = "#ABAEBF", st = "#03c75a", ct = "#e1a016", lt = "#da1c26", L = {
  main: Ar,
  main_sub: Ir,
  notice: Vr,
  grey_111: Wr,
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
  return a ? typeof a == "function" ? a() : Promise.resolve(a) : new Promise((s, h) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(h.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
}, Ve = (e) => {
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
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), We = (e) => {
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
  default: We
}, Symbol.toStringTag, { value: "Module" })), Fe = (e) => {
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
  default: Fe
}, Symbol.toStringTag, { value: "Module" })), Be = (e) => {
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
  default: Be
}, Symbol.toStringTag, { value: "Module" })), Ge = (e) => {
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
  default: He
}, Symbol.toStringTag, { value: "Module" })), Ue = (e) => {
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
  default: Ye
}, Symbol.toStringTag, { value: "Module" })), Xe = (e) => {
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
  default: qe
}, Symbol.toStringTag, { value: "Module" })), Ze = (e) => {
  const n = e.size === "big" ? "30" : e.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ l(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
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
  default: Ze
}, Symbol.toStringTag, { value: "Module" })), Je = (e) => {
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
  default: Je
}, Symbol.toStringTag, { value: "Module" })), M = (e) => {
  const n = () => {
    switch (e.name) {
      case "Adult":
        return /* @__PURE__ */ t(Ve, { ...e });
      case "ArrowLeft":
        return /* @__PURE__ */ t(We, { ...e });
      case "Caution":
        return /* @__PURE__ */ t(Fe, { ...e });
      case "Check":
        return /* @__PURE__ */ t(Be, { ...e });
      case "Close":
        return /* @__PURE__ */ t(Ge, { ...e });
      case "Depth":
        return /* @__PURE__ */ t(He, { ...e });
      case "Gear":
        return /* @__PURE__ */ t(Ue, { ...e });
      case "Hamburger":
        return /* @__PURE__ */ t(Ye, { ...e });
      case "Plus":
        return /* @__PURE__ */ t(Xe, { ...e });
      case "Right":
        return /* @__PURE__ */ t(qe, { ...e });
      case "Search":
        return /* @__PURE__ */ t(Ze, { ...e });
      case "Setting":
        return /* @__PURE__ */ t(Je, { ...e });
      default:
        return null;
    }
  }, a = () => e.size === "big" ? "30px" : e.size === "medium" ? "24px" : "20px";
  return Or(() => ut(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => dt), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => ft), "./icons/Caution.tsx": () => Promise.resolve().then(() => ht), "./icons/Check.tsx": () => Promise.resolve().then(() => gt), "./icons/Close.tsx": () => Promise.resolve().then(() => mt), "./icons/Depth.tsx": () => Promise.resolve().then(() => vt), "./icons/Gear.tsx": () => Promise.resolve().then(() => bt), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => _t), "./icons/Plus.tsx": () => Promise.resolve().then(() => yt), "./icons/Right.tsx": () => Promise.resolve().then(() => kt), "./icons/Search.tsx": () => Promise.resolve().then(() => wt), "./icons/Setting.tsx": () => Promise.resolve().then(() => Ct) }), `./icons/${e.name}.tsx`)), /* @__PURE__ */ t(jr, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: a(), display: "inline-block" }, children: n() }) });
};
const Tt = (e) => {
  const n = typeof e.back == "function", a = e.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ l("div", { className: a, children: [
    /* @__PURE__ */ l("div", { className: "logo", children: [
      n && /* @__PURE__ */ t("div", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(M, { name: "ArrowLeft", size: "big", color: L.grey_111 }) }),
      /* @__PURE__ */ t("span", { onClick: () => {
        var s;
        return (s = e.back) == null ? void 0 : s.call(e, !0);
      }, children: e.title })
    ] }),
    e.children
  ] });
};
const Rt = (e) => {
  const n = e.size / 14, a = {
    width: e.size + "px",
    height: e.size + "px",
    borderRadius: e.size + n / 1.5 + "px",
    padding: n / 1.5 + "px"
  }, s = {
    borderRadius: e.size + "px"
  }, h = e.percent >= 50 ? 18 * (e.percent - 50) / 5 : 0, u = e.percent <= 50 ? 18 * (e.percent / 5) : 180, m = e.percent < 50 ? L.red : e.percent < 75 ? L.orange : L.green, y = {
    border: `${n}px solid ${m}`,
    borderTopRightRadius: e.size + "px",
    borderBottomRightRadius: e.size + "px",
    transform: `rotate(${h}deg)`
  }, b = {
    border: `${n}px solid ${m}`,
    borderTopLeftRadius: e.size + "px",
    borderBottomLeftRadius: e.size + "px",
    transform: `rotate(${u}deg)`
  }, C = {
    fontSize: e.size / 4 + "px",
    borderRadius: e.size - n * 2 + "px",
    width: e.size - n * 2 + "px",
    height: e.size - n * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: a, children: /* @__PURE__ */ l("div", { className: "circular-progress-bar", style: s, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: y }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: b }) }),
    /* @__PURE__ */ l("div", { className: "percent", style: C, children: [
      e.percent,
      "%"
    ] })
  ] }) });
};
const Pt = (e) => /* @__PURE__ */ t(
  "div",
  {
    className: "common-button",
    style: (() => e.disable ? {
      backgroundColor: L.bg_disable,
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
const Ot = (e) => {
  const n = () => ({
    height: e.height ?? "280px",
    objectFit: e.objectFit ?? "fill"
  });
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: e.imageUrl, style: n() }) }) });
};
const jt = (e) => /* @__PURE__ */ l("div", { className: "group-card", children: [
  e.isSub && /* @__PURE__ */ t(M, { name: "Depth", size: "medium", color: L.grey_111 }),
  /* @__PURE__ */ l("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: e.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: e.label }) })
  ] })
] });
const Ke = (e) => {
  const n = {
    backgroundColor: `rgba(0,0,0,${e.opacity})`
  };
  return /* @__PURE__ */ t(ce.Fragment, { children: e.isOpen && /* @__PURE__ */ t("div", { className: "overlay", style: n, children: e.children }) });
};
const zt = ({ opacity: e }) => /* @__PURE__ */ t(Ke, { isOpen: !0, opacity: e, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const xt = (e) => {
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
}, Qe = (e) => {
  const n = Q(null), a = (s) => {
    var u;
    ((u = n.current) == null ? void 0 : u.contains(s.target)) || e();
  };
  return le(() => (window.addEventListener("click", a), () => {
    window.removeEventListener("click", a);
  }), []), {
    ref: n
  };
};
const pt = (e) => {
  const [n, a] = z(!0), s = e.ratio * 100 + "%";
  return /* @__PURE__ */ l(
    "div",
    {
      className: "image-wrapper",
      style: { paddingTop: s },
      onClick: () => {
        var h;
        return (h = e.click) == null ? void 0 : h.call(e);
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
        n && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t(xt, { customHeight: "100%" }) })
      ]
    }
  );
}, Nt = (e) => {
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
const $t = (e) => /* @__PURE__ */ t(Ke, { isOpen: e.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${e.isMobile ? "mobile" : ""}`, children: e.children }) });
const Mt = (e) => {
  const n = e.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ l("div", { className: "popup-header-container", style: n, children: [
    /* @__PURE__ */ l("div", { className: "popup-header", children: [
      e.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.back, children: /* @__PURE__ */ t(M, { name: "ArrowLeft", size: "big", color: L.grey_999 }) }),
      e.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: e.title }) }),
      e.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: e.close, children: /* @__PURE__ */ t(M, { name: "Close", size: "big", color: L.grey_999 }) })
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
    /* @__PURE__ */ t(M, { name: "Caution", size: "small", color: L.grey_bbb }),
    /* @__PURE__ */ t("span", { children: e.text })
  ] })
] });
const At = (e) => {
  const n = `${e.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: n }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: e.imageUrl }) });
};
const It = (e) => {
  const n = e.type ?? "text", [a, s] = z(!1), h = Me(() => {
    let m = "";
    return (a || e.searchText) && (m += " focus"), e.screen === "mobile" && (m += " mobile"), m;
  }, [a, e.screen]), u = Me(() => {
    var y;
    let m = h;
    return typeof e.validator == "function" && !((y = e.validator) != null && y.call(e, e.searchText)) && (m += " error"), m;
  }, [h, e.searchText]);
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
}, Vt = ({
  items: e,
  selected: n,
  click: a,
  open: s,
  itemSize: h
}) => {
  const u = h ?? "medium";
  return /* @__PURE__ */ t("div", { className: `option-list ${s ? "slide" : ""}`, children: /* @__PURE__ */ t("div", { className: "option-items", children: e.map((m) => /* @__PURE__ */ t(
    St,
    {
      size: u,
      text: m.name,
      selected: m.name === n,
      click: () => a == null ? void 0 : a(m)
    },
    m.name
  )) }) });
};
const Wt = ({ title: e, children: n }) => {
  const [a, s] = z(!1), [h, u] = z("hidden"), { ref: m } = Qe(() => {
    s(!1), u("hidden");
  }), y = () => {
    a && u("unset");
  };
  function b() {
    s((C) => !C), a && u("hidden");
  }
  return /* @__PURE__ */ l(
    "div",
    {
      className: "basic-accordion",
      ref: m,
      style: { overflow: h },
      onTransitionEnd: y,
      children: [
        /* @__PURE__ */ l("div", { className: "header", onClick: b, children: [
          /* @__PURE__ */ t("span", { className: "title", children: e }),
          /* @__PURE__ */ t("div", { className: `icon ${a ? "slide" : ""}`, children: /* @__PURE__ */ t(M, { name: "Right", size: "medium", color: L.grey_111 }) })
        ] }),
        /* @__PURE__ */ t("div", { className: `children ${a ? "slide" : ""}`, children: n })
      ]
    }
  );
};
const er = ({
  itemLength: e,
  slide: n,
  currentIndex: a,
  clickLeft: s,
  clickRight: h,
  clickPoint: u,
  onTransitionEnd: m,
  onMouseEnter: y,
  onMouseLeave: b,
  onTouchStart: C,
  onTouchEnd: v,
  children: p
}) => /* @__PURE__ */ l(
  "div",
  {
    className: "carousel",
    onMouseEnter: y,
    onMouseLeave: b,
    children: [
      /* @__PURE__ */ t(
        "div",
        {
          className: "slide-container",
          ref: n,
          onTransitionEnd: m,
          onTouchStart: C,
          onTouchEnd: v,
          children: p
        }
      ),
      /* @__PURE__ */ t("div", { className: "left", onClick: s, children: /* @__PURE__ */ t(M, { name: "Right", size: "small", color: L.white }) }),
      /* @__PURE__ */ t("div", { className: "right", onClick: h, children: /* @__PURE__ */ t(M, { name: "Right", size: "small", color: L.white }) }),
      /* @__PURE__ */ t("div", { className: "progress", children: Array(e).fill(1).map((E, T) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress-point ${a === T + 1 ? "selected" : ""}`,
          onClick: () => u(T + 1)
        },
        T
      )) })
    ]
  }
), rr = (e) => {
  const n = Q(null), [a, s] = z(1), [h, u] = z(0);
  return {
    slide: n,
    currentIndex: a,
    clickLeft: () => {
      let v = a - 1;
      u(-1), n.current.style.transform = `translateX(-${v * 100}%)`, n.current.style.transition = "transform .3s linear";
    },
    clickRight: () => {
      if (!n.current)
        return;
      let v = a + 1;
      u(1), n.current.style.transform = `translateX(-${v * 100}%)`, n.current.style.transition = "transform .3s linear";
    },
    clickPoint: (v) => {
      n.current.style.transform = `translateX(-${v * 100}%)`, n.current.style.transition = "transform .3s linear", s(v);
    },
    onTransitionEnd: () => {
      h !== 0 && (h === 1 ? a === e ? (s(1), n.current.style.transform = "translateX(-100%)", n.current.style.transition = "none") : s((v) => v + 1) : a === 1 ? (s(e), n.current.style.transform = `translateX(-${e * 100}%)`, n.current.style.transition = "none") : s((v) => v - 1), u(0));
    }
  };
}, Ft = (e) => {
  const n = e.items.length, {
    slide: a,
    currentIndex: s,
    clickLeft: h,
    clickRight: u,
    clickPoint: m,
    onTransitionEnd: y
  } = rr(n);
  return /* @__PURE__ */ t(
    er,
    {
      slide: a,
      currentIndex: s,
      clickLeft: h,
      clickRight: u,
      clickPoint: m,
      onTransitionEnd: y,
      itemLength: n,
      children: /* @__PURE__ */ l(Ie, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((b, C) => e.renderItems(b, C)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
}, Lt = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
), Bt = (e) => {
  const n = e.items.length, [a, s] = z(), [h, u] = z(!1), m = Q(), {
    slide: y,
    currentIndex: b,
    clickLeft: C,
    clickRight: v,
    clickPoint: p,
    onTransitionEnd: E
  } = rr(n);
  zr(() => {
    const P = new IntersectionObserver(
      ($, de) => {
        $[0].isIntersecting ? u(!0) : u(!1);
      },
      {
        threshold: 0.1
      }
    );
    m.current = y.current.children[0].clientWidth;
    const N = y.current.parentElement;
    P.observe(N);
  }, []);
  const T = () => setTimeout(() => {
    v();
  }, e.time);
  le(() => (h ? s(T()) : clearTimeout(a), () => {
    clearTimeout(a);
  }), [b, h]);
  const U = () => {
    Lt() || u(!1);
  }, Y = Q();
  return /* @__PURE__ */ t(
    er,
    {
      slide: y,
      currentIndex: b,
      clickLeft: C,
      clickRight: v,
      clickPoint: p,
      onTransitionEnd: E,
      onMouseEnter: U,
      onMouseLeave: () => {
        u(!0);
      },
      itemLength: n,
      onTouchStart: (P) => {
        u(!1), Y.current = P.changedTouches[0].pageX;
      },
      onTouchEnd: (P) => {
        const N = m.current / 2.5, $ = Y.current - P.changedTouches[0].pageX;
        $ < 0 && Math.abs($) >= N ? C() : $ > 0 && Math.abs($) >= N && v(), setTimeout(() => {
          u(!0);
        }, 2e3);
      },
      children: /* @__PURE__ */ l(Ie, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((P, N) => e.renderItems(P, N)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
};
const Gt = ({ selected: e, children: n }) => {
  const [a, s] = z(!1), { ref: h } = Qe(() => s(!1));
  return le(() => {
    const u = setTimeout(() => {
      s(!1);
    }, 150);
    return () => {
      clearTimeout(u);
    };
  }, [e]), /* @__PURE__ */ l("div", { className: "dropdown", ref: h, children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "dropdown-selected",
        onClick: () => s((u) => !u),
        children: e
      }
    ),
    Nr(n, { open: a, selected: e })
  ] });
};
export {
  Bt as AutoCarousel,
  Wt as BasicAccordion,
  Ft as BasicCarousel,
  Gt as BasicDropDown,
  Pt as Button,
  Ot as Card,
  Rt as CircularProgressBar,
  L as Colors,
  M as Element,
  jt as GroupCard,
  Tt as HeaderBar,
  It as InputBox,
  zt as LoadingSpinner,
  Dt as Notification,
  Vt as OptionList,
  Ke as OverLay,
  xt as PageLoadingSpinner,
  $t as Popup,
  Mt as PopupBasicHeader,
  Nt as PosterCard,
  pt as RatioCardImage,
  At as RatioImage,
  St as SelectedItem,
  Qe as useCloseEvent
};
