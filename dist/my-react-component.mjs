import ce, { lazy as Pr, Suspense as Or, useState as z, useMemo as $e, useRef as se, useLayoutEffect as jr, useEffect as Ae, cloneElement as zr } from "react";
var H = {}, Nr = {
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
var Me;
function $r() {
  if (Me)
    return B;
  Me = 1;
  var e = ce, n = Symbol.for("react.element"), a = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, f = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function g(y, b, C) {
    var m, p = {}, E = null, T = null;
    C !== void 0 && (E = "" + C), b.key !== void 0 && (E = "" + b.key), b.ref !== void 0 && (T = b.ref);
    for (m in b)
      c.call(b, m) && !v.hasOwnProperty(m) && (p[m] = b[m]);
    if (y && y.defaultProps)
      for (m in b = y.defaultProps, b)
        p[m] === void 0 && (p[m] = b[m]);
    return { $$typeof: n, type: y, key: E, ref: T, props: p, _owner: f.current };
  }
  return B.Fragment = a, B.jsx = g, B.jsxs = g, B;
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
var De;
function Mr() {
  return De || (De = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ce, n = Symbol.for("react.element"), a = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), y = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), U = Symbol.iterator, Y = "@@iterator";
    function le(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = U && r[U] || r[Y];
      return typeof i == "function" ? i : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(r) {
      {
        for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), s = 1; s < i; s++)
          o[s - 1] = arguments[s];
        P("error", r, o);
      }
    }
    function P(r, i, o) {
      {
        var s = D.ReactDebugCurrentFrame, h = s.getStackAddendum();
        h !== "" && (i += "%s", o = o.concat([h]));
        var _ = o.map(function(d) {
          return String(d);
        });
        _.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, _);
      }
    }
    var N = !1, $ = !1, ue = !1, rr = !1, tr = !1, de;
    de = Symbol.for("react.module.reference");
    function nr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === c || r === v || tr || r === f || r === C || r === m || rr || r === T || N || $ || ue || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === p || r.$$typeof === g || r.$$typeof === y || r.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === de || r.getModuleId !== void 0));
    }
    function ir(r, i, o) {
      var s = r.displayName;
      if (s)
        return s;
      var h = i.displayName || i.name || "";
      return h !== "" ? o + "(" + h + ")" : o;
    }
    function fe(r) {
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
        case c:
          return "Fragment";
        case a:
          return "Portal";
        case v:
          return "Profiler";
        case f:
          return "StrictMode";
        case C:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case y:
            var i = r;
            return fe(i) + ".Consumer";
          case g:
            var o = r;
            return fe(o._context) + ".Provider";
          case b:
            return ir(r, r.render, "ForwardRef");
          case p:
            var s = r.displayName || null;
            return s !== null ? s : O(r.type) || "Memo";
          case E: {
            var h = r, _ = h._payload, d = h._init;
            try {
              return O(d(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, W = 0, he, ge, me, ve, be, _e, ye;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function or() {
      {
        if (W === 0) {
          he = console.log, ge = console.info, me = console.warn, ve = console.error, be = console.group, _e = console.groupCollapsed, ye = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: ke,
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
    function ar() {
      {
        if (W--, W === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, r, {
              value: he
            }),
            info: A({}, r, {
              value: ge
            }),
            warn: A({}, r, {
              value: me
            }),
            error: A({}, r, {
              value: ve
            }),
            group: A({}, r, {
              value: be
            }),
            groupCollapsed: A({}, r, {
              value: _e
            }),
            groupEnd: A({}, r, {
              value: ye
            })
          });
        }
        W < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = D.ReactCurrentDispatcher, ee;
    function X(r, i, o) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (h) {
            var s = h.stack.trim().match(/\n( *(at )?)/);
            ee = s && s[1] || "";
          }
        return `
` + ee + r;
      }
    }
    var re = !1, q;
    {
      var sr = typeof WeakMap == "function" ? WeakMap : Map;
      q = new sr();
    }
    function we(r, i) {
      if (!r || re)
        return "";
      {
        var o = q.get(r);
        if (o !== void 0)
          return o;
      }
      var s;
      re = !0;
      var h = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = Q.current, Q.current = null, or();
      try {
        if (i) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (j) {
              s = j;
            }
            Reflect.construct(r, [], d);
          } else {
            try {
              d.call();
            } catch (j) {
              s = j;
            }
            r.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            s = j;
          }
          r();
        }
      } catch (j) {
        if (j && s && typeof j.stack == "string") {
          for (var u = j.stack.split(`
`), x = s.stack.split(`
`), k = u.length - 1, w = x.length - 1; k >= 1 && w >= 0 && u[k] !== x[w]; )
            w--;
          for (; k >= 1 && w >= 0; k--, w--)
            if (u[k] !== x[w]) {
              if (k !== 1 || w !== 1)
                do
                  if (k--, w--, w < 0 || u[k] !== x[w]) {
                    var S = `
` + u[k].replace(" at new ", " at ");
                    return r.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", r.displayName)), typeof r == "function" && q.set(r, S), S;
                  }
                while (k >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        re = !1, Q.current = _, ar(), Error.prepareStackTrace = h;
      }
      var I = r ? r.displayName || r.name : "", Ne = I ? X(I) : "";
      return typeof r == "function" && q.set(r, Ne), Ne;
    }
    function cr(r, i, o) {
      return we(r, !1);
    }
    function lr(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function Z(r, i, o) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return we(r, lr(r));
      if (typeof r == "string")
        return X(r);
      switch (r) {
        case C:
          return X("Suspense");
        case m:
          return X("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case b:
            return cr(r.render);
          case p:
            return Z(r.type, i, o);
          case E: {
            var s = r, h = s._payload, _ = s._init;
            try {
              return Z(_(h), i, o);
            } catch {
            }
          }
        }
      return "";
    }
    var J = Object.prototype.hasOwnProperty, Ce = {}, Re = D.ReactDebugCurrentFrame;
    function K(r) {
      if (r) {
        var i = r._owner, o = Z(r.type, r._source, i ? i.type : null);
        Re.setExtraStackFrame(o);
      } else
        Re.setExtraStackFrame(null);
    }
    function ur(r, i, o, s, h) {
      {
        var _ = Function.call.bind(J);
        for (var d in r)
          if (_(r, d)) {
            var u = void 0;
            try {
              if (typeof r[d] != "function") {
                var x = Error((s || "React class") + ": " + o + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw x.name = "Invariant Violation", x;
              }
              u = r[d](i, d, s, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (k) {
              u = k;
            }
            u && !(u instanceof Error) && (K(h), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", o, d, typeof u), K(null)), u instanceof Error && !(u.message in Ce) && (Ce[u.message] = !0, K(h), R("Failed %s type: %s", o, u.message), K(null));
          }
      }
    }
    var dr = Array.isArray;
    function te(r) {
      return dr(r);
    }
    function fr(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, o = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return o;
      }
    }
    function hr(r) {
      try {
        return xe(r), !1;
      } catch {
        return !0;
      }
    }
    function xe(r) {
      return "" + r;
    }
    function pe(r) {
      if (hr(r))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", fr(r)), xe(r);
    }
    var F = D.ReactCurrentOwner, gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Se, Le, ne;
    ne = {};
    function mr(r) {
      if (J.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function vr(r) {
      if (J.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function br(r, i) {
      if (typeof r.ref == "string" && F.current && i && F.current.stateNode !== i) {
        var o = O(F.current.type);
        ne[o] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', O(F.current.type), r.ref), ne[o] = !0);
      }
    }
    function _r(r, i) {
      {
        var o = function() {
          Se || (Se = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function yr(r, i) {
      {
        var o = function() {
          Le || (Le = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        o.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var kr = function(r, i, o, s, h, _, d) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: o,
        props: d,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function wr(r, i, o, s, h) {
      {
        var _, d = {}, u = null, x = null;
        o !== void 0 && (pe(o), u = "" + o), vr(i) && (pe(i.key), u = "" + i.key), mr(i) && (x = i.ref, br(i, h));
        for (_ in i)
          J.call(i, _) && !gr.hasOwnProperty(_) && (d[_] = i[_]);
        if (r && r.defaultProps) {
          var k = r.defaultProps;
          for (_ in k)
            d[_] === void 0 && (d[_] = k[_]);
        }
        if (u || x) {
          var w = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          u && _r(d, w), x && yr(d, w);
        }
        return kr(r, u, x, h, s, F.current, d);
      }
    }
    var ie = D.ReactCurrentOwner, Ee = D.ReactDebugCurrentFrame;
    function V(r) {
      if (r) {
        var i = r._owner, o = Z(r.type, r._source, i ? i.type : null);
        Ee.setExtraStackFrame(o);
      } else
        Ee.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function ae(r) {
      return typeof r == "object" && r !== null && r.$$typeof === n;
    }
    function Te() {
      {
        if (ie.current) {
          var r = O(ie.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Cr(r) {
      {
        if (r !== void 0) {
          var i = r.fileName.replace(/^.*[\\\/]/, ""), o = r.lineNumber;
          return `

Check your code at ` + i + ":" + o + ".";
        }
        return "";
      }
    }
    var Pe = {};
    function Rr(r) {
      {
        var i = Te();
        if (!i) {
          var o = typeof r == "string" ? r : r.displayName || r.name;
          o && (i = `

Check the top-level render call using <` + o + ">.");
        }
        return i;
      }
    }
    function Oe(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var o = Rr(i);
        if (Pe[o])
          return;
        Pe[o] = !0;
        var s = "";
        r && r._owner && r._owner !== ie.current && (s = " It was passed a child from " + O(r._owner.type) + "."), V(r), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, s), V(null);
      }
    }
    function je(r, i) {
      {
        if (typeof r != "object")
          return;
        if (te(r))
          for (var o = 0; o < r.length; o++) {
            var s = r[o];
            ae(s) && Oe(s, i);
          }
        else if (ae(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var h = le(r);
          if (typeof h == "function" && h !== r.entries)
            for (var _ = h.call(r), d; !(d = _.next()).done; )
              ae(d.value) && Oe(d.value, i);
        }
      }
    }
    function xr(r) {
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
          var s = O(i);
          ur(o, r.props, "prop", s, r);
        } else if (i.PropTypes !== void 0 && !oe) {
          oe = !0;
          var h = O(i);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", h || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(r) {
      {
        for (var i = Object.keys(r.props), o = 0; o < i.length; o++) {
          var s = i[o];
          if (s !== "children" && s !== "key") {
            V(r), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), V(null);
            break;
          }
        }
        r.ref !== null && (V(r), R("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function ze(r, i, o, s, h, _) {
      {
        var d = nr(r);
        if (!d) {
          var u = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var x = Cr(h);
          x ? u += x : u += Te();
          var k;
          r === null ? k = "null" : te(r) ? k = "array" : r !== void 0 && r.$$typeof === n ? (k = "<" + (O(r.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : k = typeof r, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", k, u);
        }
        var w = wr(r, i, o, h, _);
        if (w == null)
          return w;
        if (d) {
          var S = i.children;
          if (S !== void 0)
            if (s)
              if (te(S)) {
                for (var I = 0; I < S.length; I++)
                  je(S[I], r);
                Object.freeze && Object.freeze(S);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(S, r);
        }
        return r === c ? pr(w) : xr(w), w;
      }
    }
    function Sr(r, i, o) {
      return ze(r, i, o, !0);
    }
    function Lr(r, i, o) {
      return ze(r, i, o, !1);
    }
    var Er = Lr, Tr = Sr;
    G.Fragment = c, G.jsx = Er, G.jsxs = Tr;
  }()), G;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = $r() : e.exports = Mr();
})(Nr);
const Ve = H.Fragment, t = H.jsx, l = H.jsxs, Dr = "#6440dd", Ar = "#5934D8", Vr = "#F5222D", Ir = "#111111", Wr = "#666666", Fr = "#333333", Br = "#999999", Gr = "#bbbbbb", Hr = "#cccccc", Ur = "#f4f4f4", Yr = "#f5f6f8", Xr = "#f2f4f7", qr = "#dbd6eb", Zr = "#eeebff", Jr = "#b6b7b9", Kr = "#e7e9ef", Qr = "#cfd4dd", et = "#d42a21", rt = "#1968e5", tt = "#27c4b8", nt = "#fff", it = "#f4f0ff", ot = "#ABAEBF", at = "#03c75a", st = "#e1a016", ct = "#da1c26", L = {
  main: Dr,
  main_sub: Ar,
  notice: Vr,
  grey_111: Ir,
  grey_666: Wr,
  grey_333: Fr,
  grey_999: Br,
  grey_bbb: Gr,
  grey_ccc: Hr,
  grey_f4: Ur,
  bg_main: Yr,
  bg_noti: Xr,
  bg_disable: qr,
  bg_sub: Zr,
  bg_trans: Jr,
  line_01: Kr,
  line_02: Qr,
  plus: et,
  minus: rt,
  code: tt,
  white: nt,
  option_hover: it,
  m_gnb_normal: ot,
  green: at,
  orange: st,
  red: ct
}, lt = (e, n) => {
  const a = e[n];
  return a ? typeof a == "function" ? a() : Promise.resolve(a) : new Promise((c, f) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(f.bind(null, new Error("Unknown variable dynamic import: " + n)));
  });
}, Ie = (e) => {
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
}, ut = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ie
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
}, dt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, ht = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, gt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, mt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, vt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, bt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, _t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, yt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, kt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
}, wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Je
}, Symbol.toStringTag, { value: "Module" })), M = (e) => {
  const n = () => {
    switch (e.name) {
      case "Adult":
        return /* @__PURE__ */ t(Ie, { ...e });
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
  return Pr(() => lt(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => ut), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => dt), "./icons/Caution.tsx": () => Promise.resolve().then(() => ft), "./icons/Check.tsx": () => Promise.resolve().then(() => ht), "./icons/Close.tsx": () => Promise.resolve().then(() => gt), "./icons/Depth.tsx": () => Promise.resolve().then(() => mt), "./icons/Gear.tsx": () => Promise.resolve().then(() => vt), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => bt), "./icons/Plus.tsx": () => Promise.resolve().then(() => _t), "./icons/Right.tsx": () => Promise.resolve().then(() => yt), "./icons/Search.tsx": () => Promise.resolve().then(() => kt), "./icons/Setting.tsx": () => Promise.resolve().then(() => wt) }), `./icons/${e.name}.tsx`)), /* @__PURE__ */ t(Or, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: a(), display: "inline-block" }, children: n() }) });
};
const Et = (e) => {
  const n = typeof e.back == "function", a = e.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ l("div", { className: a, children: [
    /* @__PURE__ */ l("div", { className: "logo", children: [
      n && /* @__PURE__ */ t("div", { onClick: () => {
        var c;
        return (c = e.back) == null ? void 0 : c.call(e, !1);
      }, className: "logo-icon", children: /* @__PURE__ */ t(M, { name: "ArrowLeft", size: "big", color: L.grey_111 }) }),
      /* @__PURE__ */ t("span", { onClick: () => {
        var c;
        return (c = e.back) == null ? void 0 : c.call(e, !0);
      }, children: e.title })
    ] }),
    e.children
  ] });
};
const Ct = (e) => {
  const n = e.size / 14, a = {
    width: e.size + "px",
    height: e.size + "px",
    borderRadius: e.size + n / 1.5 + "px",
    padding: n / 1.5 + "px"
  }, c = {
    borderRadius: e.size + "px"
  }, f = e.percent >= 50 ? 18 * (e.percent - 50) / 5 : 0, v = e.percent <= 50 ? 18 * (e.percent / 5) : 180, g = e.percent < 50 ? L.red : e.percent < 75 ? L.orange : L.green, y = {
    border: `${n}px solid ${g}`,
    borderTopRightRadius: e.size + "px",
    borderBottomRightRadius: e.size + "px",
    transform: `rotate(${f}deg)`
  }, b = {
    border: `${n}px solid ${g}`,
    borderTopLeftRadius: e.size + "px",
    borderBottomLeftRadius: e.size + "px",
    transform: `rotate(${v}deg)`
  }, C = {
    fontSize: e.size / 4 + "px",
    borderRadius: e.size - n * 2 + "px",
    width: e.size - n * 2 + "px",
    height: e.size - n * 2 + "px"
  };
  return /* @__PURE__ */ t("div", { className: "container", style: a, children: /* @__PURE__ */ l("div", { className: "circular-progress-bar", style: c, children: [
    /* @__PURE__ */ t("span", { className: "left", children: /* @__PURE__ */ t("span", { className: "bar", style: y }) }),
    /* @__PURE__ */ t("span", { className: "right", children: /* @__PURE__ */ t("span", { className: "bar", style: b }) }),
    /* @__PURE__ */ l("div", { className: "percent", style: C, children: [
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
const Pt = (e) => {
  const n = () => ({
    height: e.height ?? "280px",
    objectFit: e.objectFit ?? "fill"
  });
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: e.imageUrl, style: n() }) }) });
};
const Ot = (e) => /* @__PURE__ */ l("div", { className: "group-card", children: [
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
const jt = ({ opacity: e }) => /* @__PURE__ */ t(Ke, { isOpen: !0, opacity: e, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const Rt = (e) => {
  const n = Array(8).fill(1).map((a, c) => a + c);
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
};
const xt = (e) => {
  const [n, a] = z(!0), c = e.ratio * 100 + "%";
  return /* @__PURE__ */ l(
    "div",
    {
      className: "image-wrapper",
      style: { paddingTop: c },
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
}, zt = (e) => {
  const n = e.ratio ? e.ratio : 1;
  return /* @__PURE__ */ l("div", { className: "poster-card-container", children: [
    /* @__PURE__ */ t(xt, { ratio: n, imageUrl: e.imageUrl, click: e.click }),
    /* @__PURE__ */ l("div", { className: "poster-card-info", children: [
      /* @__PURE__ */ t("div", { className: "progress-bar", children: /* @__PURE__ */ t(Ct, { percent: e.voteAverage, size: 34 }) }),
      /* @__PURE__ */ t("span", { className: "title", children: e.title }),
      /* @__PURE__ */ t("span", { className: "release-date", children: e.releaseDate })
    ] })
  ] });
};
const Nt = (e) => /* @__PURE__ */ t(Ke, { isOpen: e.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${e.isMobile ? "mobile" : ""}`, children: e.children }) });
const $t = (e) => {
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
    /* @__PURE__ */ t("div", { className: "popup-header-progress", children: e.maxProgress && Array(e.maxProgress).fill(1).map((a, c) => /* @__PURE__ */ t(
      "span",
      {
        className: `${c + a === e.progress ? "selected" : ""}`
      },
      `progress${c}`
    )) })
  ] });
};
const Mt = (e) => /* @__PURE__ */ l("div", { className: "notification", children: [
  e.children,
  /* @__PURE__ */ l("div", { className: "info", style: { height: e.height }, children: [
    /* @__PURE__ */ t(M, { name: "Caution", size: "small", color: L.grey_bbb }),
    /* @__PURE__ */ t("span", { children: e.text })
  ] })
] });
const Dt = (e) => {
  const n = `${e.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: n }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: e.imageUrl }) });
};
const At = (e) => {
  const n = e.type ?? "text", [a, c] = z(!1), f = $e(() => {
    let g = "";
    return (a || e.searchText) && (g += " focus"), e.screen === "mobile" && (g += " mobile"), g;
  }, [a, e.screen]), v = $e(() => {
    var y;
    let g = f;
    return typeof e.validator == "function" && !((y = e.validator) != null && y.call(e, e.searchText)) && (g += " error"), g;
  }, [f, e.searchText]);
  return /* @__PURE__ */ l("div", { className: "input-wrapper" + v, children: [
    e.children,
    /* @__PURE__ */ t(
      "input",
      {
        type: n,
        className: "input-search",
        onChange: e.onChange,
        placeholder: e.placeholder,
        value: e.searchText,
        onFocus: () => c(!0),
        onBlur: () => c(!1)
      }
    )
  ] });
};
const pt = (e) => {
  const n = e.size ?? "medium", a = e.selected ? "selected" : "";
  return /* @__PURE__ */ t("div", { className: `selected-item ${n} ${a}`, onClick: e.click, children: e.text });
}, Vt = ({
  items: e,
  selected: n,
  click: a,
  open: c,
  itemSize: f
}) => {
  const v = f ?? "medium";
  return /* @__PURE__ */ t("div", { className: `option-list ${c ? "slide" : ""}`, children: /* @__PURE__ */ t("div", { className: "option-items", children: e.map((g) => /* @__PURE__ */ t(
    pt,
    {
      size: v,
      text: g.name,
      selected: g.name === n,
      click: () => a == null ? void 0 : a(g)
    },
    g.name
  )) }) });
};
const It = ({ title: e, children: n }) => {
  const [a, c] = z(!1), [f, v] = z("hidden"), g = () => {
    a && v("unset");
  };
  function y() {
    c((b) => !b), a && v("hidden");
  }
  return /* @__PURE__ */ l(
    "div",
    {
      className: "basic-accordion",
      style: { overflow: f },
      onTransitionEnd: g,
      children: [
        /* @__PURE__ */ l(
          "div",
          {
            className: "header",
            onClick: y,
            children: [
              /* @__PURE__ */ t("span", { className: "title", children: e }),
              /* @__PURE__ */ t(
                "div",
                {
                  className: `icon ${a ? "slide" : ""}`,
                  children: /* @__PURE__ */ t(M, { name: "Right", size: "medium", color: L.grey_111 })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ t("div", { className: `children ${a ? "slide" : ""}`, children: n })
      ]
    }
  );
};
const Qe = ({
  itemLength: e,
  slide: n,
  currentIndex: a,
  clickLeft: c,
  clickRight: f,
  clickPoint: v,
  onTransitionEnd: g,
  onMouseEnter: y,
  onMouseLeave: b,
  onTouchStart: C,
  onTouchEnd: m,
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
          onTransitionEnd: g,
          onTouchStart: C,
          onTouchEnd: m,
          children: p
        }
      ),
      /* @__PURE__ */ t("div", { className: "left", onClick: c, children: /* @__PURE__ */ t(M, { name: "Right", size: "small", color: L.white }) }),
      /* @__PURE__ */ t("div", { className: "right", onClick: f, children: /* @__PURE__ */ t(M, { name: "Right", size: "small", color: L.white }) }),
      /* @__PURE__ */ t("div", { className: "progress", children: Array(e).fill(1).map((E, T) => /* @__PURE__ */ t(
        "div",
        {
          className: `progress-point ${a === T + 1 ? "selected" : ""}`,
          onClick: () => v(T + 1)
        },
        T
      )) })
    ]
  }
), er = (e) => {
  const n = se(null), [a, c] = z(1), [f, v] = z(0);
  return {
    slide: n,
    currentIndex: a,
    clickLeft: () => {
      let m = a - 1;
      v(-1), n.current.style.transform = `translateX(-${m * 100}%)`, n.current.style.transition = "transform .3s linear";
    },
    clickRight: () => {
      if (!n.current)
        return;
      let m = a + 1;
      v(1), n.current.style.transform = `translateX(-${m * 100}%)`, n.current.style.transition = "transform .3s linear";
    },
    clickPoint: (m) => {
      n.current.style.transform = `translateX(-${m * 100}%)`, n.current.style.transition = "transform .3s linear", c(m);
    },
    onTransitionEnd: () => {
      f !== 0 && (f === 1 ? a === e ? (c(1), n.current.style.transform = "translateX(-100%)", n.current.style.transition = "none") : c((m) => m + 1) : a === 1 ? (c(e), n.current.style.transform = `translateX(-${e * 100}%)`, n.current.style.transition = "none") : c((m) => m - 1), v(0));
    }
  };
}, Wt = (e) => {
  const n = e.items.length, {
    slide: a,
    currentIndex: c,
    clickLeft: f,
    clickRight: v,
    clickPoint: g,
    onTransitionEnd: y
  } = er(n);
  return /* @__PURE__ */ t(
    Qe,
    {
      slide: a,
      currentIndex: c,
      clickLeft: f,
      clickRight: v,
      clickPoint: g,
      onTransitionEnd: y,
      itemLength: n,
      children: /* @__PURE__ */ l(Ve, { children: [
        e.renderItems(
          e.items[e.items.length - 1],
          e.items.length
        ),
        e.items.map((b, C) => e.renderItems(b, C)),
        e.renderItems(e.items[0], -1)
      ] })
    }
  );
}, St = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
  navigator.userAgent
), Ft = (e) => {
  const n = e.items.length, [a, c] = z(), [f, v] = z(!1), g = se(), {
    slide: y,
    currentIndex: b,
    clickLeft: C,
    clickRight: m,
    clickPoint: p,
    onTransitionEnd: E
  } = er(n);
  jr(() => {
    const P = new IntersectionObserver(
      ($, ue) => {
        $[0].isIntersecting ? v(!0) : v(!1);
      },
      {
        threshold: 0.1
      }
    );
    g.current = y.current.children[0].clientWidth;
    const N = y.current.parentElement;
    P.observe(N);
  }, []);
  const T = () => setTimeout(() => {
    m();
  }, e.time);
  Ae(() => (f ? c(T()) : clearTimeout(a), () => {
    clearTimeout(a);
  }), [b, f]);
  const U = () => {
    St() || v(!1);
  }, Y = se();
  return /* @__PURE__ */ t(
    Qe,
    {
      slide: y,
      currentIndex: b,
      clickLeft: C,
      clickRight: m,
      clickPoint: p,
      onTransitionEnd: E,
      onMouseEnter: U,
      onMouseLeave: () => {
        v(!0);
      },
      itemLength: n,
      onTouchStart: (P) => {
        v(!1), Y.current = P.changedTouches[0].pageX;
      },
      onTouchEnd: (P) => {
        const N = g.current / 2.5, $ = Y.current - P.changedTouches[0].pageX;
        $ < 0 && Math.abs($) >= N ? C() : $ > 0 && Math.abs($) >= N && m(), setTimeout(() => {
          v(!0);
        }, 2e3);
      },
      children: /* @__PURE__ */ l(Ve, { children: [
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
const Bt = ({ selected: e, children: n }) => {
  const [a, c] = z(!1);
  return Ae(() => {
    const f = setTimeout(() => {
      c(!1);
    }, 150);
    return () => {
      clearTimeout(f);
    };
  }, [e]), /* @__PURE__ */ l("div", { className: "dropdown", children: [
    /* @__PURE__ */ t(
      "div",
      {
        className: "dropdown-selected",
        onClick: () => c((f) => !f),
        children: e
      }
    ),
    zr(n, { open: a, selected: e })
  ] });
};
export {
  Ft as AutoCarousel,
  It as BasicAccordion,
  Wt as BasicCarousel,
  Bt as BasicDropDown,
  Tt as Button,
  Pt as Card,
  Ct as CircularProgressBar,
  L as Colors,
  M as Element,
  Ot as GroupCard,
  Et as HeaderBar,
  At as InputBox,
  jt as LoadingSpinner,
  Mt as Notification,
  Vt as OptionList,
  Ke as OverLay,
  Rt as PageLoadingSpinner,
  Nt as Popup,
  $t as PopupBasicHeader,
  zt as PosterCard,
  xt as RatioCardImage,
  Dt as RatioImage,
  pt as SelectedItem
};
