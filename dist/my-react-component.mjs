import re, { lazy as Cr, Suspense as Rr } from "react";
var U = {}, Sr = {
  get exports() {
    return U;
  },
  set exports(r) {
    U = r;
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
var Ee;
function xr() {
  if (Ee)
    return D;
  Ee = 1;
  var r = re, o = Symbol.for("react.element"), _ = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, E = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, F = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(R, v, j) {
    var b, y = {}, S = null, W = null;
    j !== void 0 && (S = "" + j), v.key !== void 0 && (S = "" + v.key), v.ref !== void 0 && (W = v.ref);
    for (b in v)
      C.call(v, b) && !F.hasOwnProperty(b) && (y[b] = v[b]);
    if (R && R.defaultProps)
      for (b in v = R.defaultProps, v)
        y[b] === void 0 && (y[b] = v[b]);
    return { $$typeof: o, type: R, key: S, ref: W, props: y, _owner: E.current };
  }
  return D.Fragment = _, D.jsx = T, D.jsxs = T, D;
}
var $ = {};
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
    var r = re, o = Symbol.for("react.element"), _ = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), F = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), R = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, He = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = te && e[te] || e[He];
      return typeof t == "function" ? t : null;
    }
    var O = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          i[a - 1] = arguments[a];
        Ge("error", e, i);
      }
    }
    function Ge(e, t, i) {
      {
        var a = O.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (t += "%s", i = i.concat([c]));
        var u = i.map(function(l) {
          return String(l);
        });
        u.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ue = !1, Be = !1, Ye = !1, Ze = !1, qe = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Xe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === F || qe || e === E || e === j || e === b || Ze || e === W || Ue || Be || Ye || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === y || e.$$typeof === T || e.$$typeof === R || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Je(e, t, i) {
      var a = e.displayName;
      if (a)
        return a;
      var c = t.displayName || t.name || "";
      return c !== "" ? i + "(" + c + ")" : i;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function k(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case _:
          return "Portal";
        case F:
          return "Profiler";
        case E:
          return "StrictMode";
        case j:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var t = e;
            return ie(t) + ".Consumer";
          case T:
            var i = e;
            return ie(i._context) + ".Provider";
          case v:
            return Je(e, e.render, "ForwardRef");
          case y:
            var a = e.displayName || null;
            return a !== null ? a : k(e.type) || "Memo";
          case S: {
            var c = e, u = c._payload, l = c._init;
            try {
              return k(l(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var x = Object.assign, z = 0, oe, ae, se, le, ce, ue, de;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ke() {
      {
        if (z === 0) {
          oe = console.log, ae = console.info, se = console.warn, le = console.error, ce = console.group, ue = console.groupCollapsed, de = console.groupEnd;
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
        z++;
      }
    }
    function Qe() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: x({}, e, {
              value: oe
            }),
            info: x({}, e, {
              value: ae
            }),
            warn: x({}, e, {
              value: se
            }),
            error: x({}, e, {
              value: le
            }),
            group: x({}, e, {
              value: ce
            }),
            groupCollapsed: x({}, e, {
              value: ue
            }),
            groupEnd: x({}, e, {
              value: de
            })
          });
        }
        z < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = O.ReactCurrentDispatcher, Z;
    function V(e, t, i) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            Z = a && a[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var q = !1, N;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      N = new er();
    }
    function he(e, t) {
      if (!e || q)
        return "";
      {
        var i = N.get(e);
        if (i !== void 0)
          return i;
      }
      var a;
      q = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = Y.current, Y.current = null, Ke();
      try {
        if (t) {
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
            } catch (w) {
              a = w;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (w) {
              a = w;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            a = w;
          }
          e();
        }
      } catch (w) {
        if (w && a && typeof w.stack == "string") {
          for (var s = w.stack.split(`
`), m = a.stack.split(`
`), d = s.length - 1, f = m.length - 1; d >= 1 && f >= 0 && s[d] !== m[f]; )
            f--;
          for (; d >= 1 && f >= 0; d--, f--)
            if (s[d] !== m[f]) {
              if (d !== 1 || f !== 1)
                do
                  if (d--, f--, f < 0 || s[d] !== m[f]) {
                    var p = `
` + s[d].replace(" at new ", " at ");
                    return e.displayName && p.includes("<anonymous>") && (p = p.replace("<anonymous>", e.displayName)), typeof e == "function" && N.set(e, p), p;
                  }
                while (d >= 1 && f >= 0);
              break;
            }
        }
      } finally {
        q = !1, Y.current = u, Qe(), Error.prepareStackTrace = c;
      }
      var P = e ? e.displayName || e.name : "", xe = P ? V(P) : "";
      return typeof e == "function" && N.set(e, xe), xe;
    }
    function rr(e, t, i) {
      return he(e, !1);
    }
    function tr(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function H(e, t, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, tr(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case j:
          return V("Suspense");
        case b:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return rr(e.render);
          case y:
            return H(e.type, t, i);
          case S: {
            var a = e, c = a._payload, u = a._init;
            try {
              return H(u(c), t, i);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, ve = {}, ge = O.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var t = e._owner, i = H(e.type, e._source, t ? t.type : null);
        ge.setExtraStackFrame(i);
      } else
        ge.setExtraStackFrame(null);
    }
    function nr(e, t, i, a, c) {
      {
        var u = Function.call.bind(I);
        for (var l in e)
          if (u(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var m = Error((a || "React class") + ": " + i + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw m.name = "Invariant Violation", m;
              }
              s = e[l](t, l, a, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              s = d;
            }
            s && !(s instanceof Error) && (G(c), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", i, l, typeof s), G(null)), s instanceof Error && !(s.message in ve) && (ve[s.message] = !0, G(c), g("Failed %s type: %s", i, s.message), G(null));
          }
      }
    }
    var ir = Array.isArray;
    function X(e) {
      return ir(e);
    }
    function or(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, i = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
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
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(e)), me(e);
    }
    var M = O.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, pe, J;
    J = {};
    function lr(e) {
      if (I.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function cr(e) {
      if (I.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, t) {
      if (typeof e.ref == "string" && M.current && t && M.current.stateNode !== t) {
        var i = k(M.current.type);
        J[i] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(M.current.type), e.ref), J[i] = !0);
      }
    }
    function dr(e, t) {
      {
        var i = function() {
          _e || (_e = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function fr(e, t) {
      {
        var i = function() {
          pe || (pe = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var hr = function(e, t, i, a, c, u, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: i,
        props: l,
        // Record the component responsible for creating this element.
        _owner: u
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
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function vr(e, t, i, a, c) {
      {
        var u, l = {}, s = null, m = null;
        i !== void 0 && (be(i), s = "" + i), cr(t) && (be(t.key), s = "" + t.key), lr(t) && (m = t.ref, ur(t, c));
        for (u in t)
          I.call(t, u) && !sr.hasOwnProperty(u) && (l[u] = t[u]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (u in d)
            l[u] === void 0 && (l[u] = d[u]);
        }
        if (s || m) {
          var f = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && dr(l, f), m && fr(l, f);
        }
        return hr(e, s, m, c, a, M.current, l);
      }
    }
    var K = O.ReactCurrentOwner, ye = O.ReactDebugCurrentFrame;
    function L(e) {
      if (e) {
        var t = e._owner, i = H(e.type, e._source, t ? t.type : null);
        ye.setExtraStackFrame(i);
      } else
        ye.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function ke() {
      {
        if (K.current) {
          var e = k(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function gr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + t + ":" + i + ".";
        }
        return "";
      }
    }
    var we = {};
    function mr(e) {
      {
        var t = ke();
        if (!t) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (t = `

Check the top-level render call using <` + i + ">.");
        }
        return t;
      }
    }
    function Ce(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = mr(t);
        if (we[i])
          return;
        we[i] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + k(e._owner.type) + "."), L(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, a), L(null);
      }
    }
    function Re(e, t) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var i = 0; i < e.length; i++) {
            var a = e[i];
            ee(a) && Ce(a, t);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Ie(e);
          if (typeof c == "function" && c !== e.entries)
            for (var u = c.call(e), l; !(l = u.next()).done; )
              ee(l.value) && Ce(l.value, t);
        }
      }
    }
    function br(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var i;
        if (typeof t == "function")
          i = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === y))
          i = t.propTypes;
        else
          return;
        if (i) {
          var a = k(t);
          nr(i, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = k(t);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var t = Object.keys(e.props), i = 0; i < t.length; i++) {
          var a = t[i];
          if (a !== "children" && a !== "key") {
            L(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), L(null);
            break;
          }
        }
        e.ref !== null && (L(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), L(null));
      }
    }
    function Se(e, t, i, a, c, u) {
      {
        var l = Xe(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var m = gr(c);
          m ? s += m : s += ke();
          var d;
          e === null ? d = "null" : X(e) ? d = "array" : e !== void 0 && e.$$typeof === o ? (d = "<" + (k(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, s);
        }
        var f = vr(e, t, i, c, u);
        if (f == null)
          return f;
        if (l) {
          var p = t.children;
          if (p !== void 0)
            if (a)
              if (X(p)) {
                for (var P = 0; P < p.length; P++)
                  Re(p[P], e);
                Object.freeze && Object.freeze(p);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(p, e);
        }
        return e === C ? _r(f) : br(f), f;
      }
    }
    function pr(e, t, i) {
      return Se(e, t, i, !0);
    }
    function yr(e, t, i) {
      return Se(e, t, i, !1);
    }
    var kr = yr, wr = pr;
    $.Fragment = C, $.jsx = kr, $.jsxs = wr;
  }()), $;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = xr() : r.exports = Er();
})(Sr);
const n = U.jsx, h = U.jsxs, jr = (r, o) => {
  const _ = r[o];
  return _ ? typeof _ == "function" ? _() : Promise.resolve(_) : new Promise((C, E) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(E.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
}, Oe = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
    "svg",
    {
      fill: r.color,
      width: o,
      height: o,
      viewBox: "0 0 50 50",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      stroke: "#000000",
      strokeWidth: "0.0005",
      children: [
        /* @__PURE__ */ n("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ n("g", { id: "SVGRepo_tracerCarrier", strokeLinecap: "round", strokeLinejoin: "round" }),
        /* @__PURE__ */ n("g", { id: "SVGRepo_iconCarrier", children: /* @__PURE__ */ n(
          "path",
          {
            d: "M25 2C12.309295 2 2 12.309295 2 25C2 37.690705 12.309295 48 25 48C37.690705 48 48 37.690705 48 25C48 12.309295 37.690705 2 25 2 z M 25 4C36.609824 4 46 13.390176 46 25C46 36.609824 36.609824 46 25 46C13.390176 46 4 36.609824 4 25C4 13.390176 13.390176 4 25 4 z M 24.828125 17C21.234125 17 20.208984 19.567484 20.208984 21.021484C20.208984 22.989484 21.749594 24.014484 22.433594 24.271484C21.577594 24.613484 19.695312 25.555031 19.695312 28.207031C19.695312 30.431031 21.064937 32.998047 25.085938 32.998047C26.625937 32.998047 30.304688 32.228031 30.304688 28.207031C30.304688 25.469031 28.421469 24.528484 27.480469 24.271484C28.079469 24.015484 29.619141 22.989484 29.619141 21.021484C29.619141 20.251484 29.363125 17 24.828125 17 z M 15.5 17.25C15.072 19.648 13.399 20.113219 11 20.199219L11 21.740234L15 21.75L15 32.75L17 32.75L17 17.25L15.5 17.25 z M 24.914062 18.710938C27.224062 18.710938 27.566406 20.337422 27.566406 21.107422C27.566406 21.963422 27.139 23.673828 25 23.673828C22.348 23.673828 22.176734 21.535422 22.177734 21.107422C22.177734 20.764422 22.347062 18.710938 24.914062 18.710938 z M 36 21L36 24L33 24L33 26L36 26L36 29L38 29L38 26L41 26L41 24L38 24L38 21L36 21 z M 25 25.298828C27.567 25.298828 28.251953 27.610922 28.251953 28.294922C28.251953 29.748922 27.139 31.373047 25 31.373047C23.374 31.373047 21.662109 30.519922 21.662109 28.294922C21.662109 27.010922 22.519 25.298828 25 25.298828 z"
          }
        ) })
      ]
    }
  );
}, Or = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" })), Le = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
    "svg",
    {
      width: o,
      height: o,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ n(
          "mask",
          {
            id: "a",
            style: { maskType: "alpha" },
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: o,
            height: o,
            children: /* @__PURE__ */ n("path", { fill: "#D9D9D9", d: "M0 0h30v30H0z" })
          }
        ),
        /* @__PURE__ */ n("g", { mask: "url(#a)", children: /* @__PURE__ */ n(
          "path",
          {
            d: "M15 23.53 6.47 15 15 6.47l1.16 1.19-6.57 6.53h13.94v1.62H9.6l6.57 6.53-1.16 1.2Z",
            fill: r.color
          }
        ) })
      ]
    }
  );
}, Lr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Le
}, Symbol.toStringTag, { value: "Module" })), Pe = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
    "svg",
    {
      id: "caution-sign-circle",
      fill: "#999999",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg",
      className: "icon line",
      stroke: r.color,
      width: o,
      height: o,
      children: [
        /* @__PURE__ */ n("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ n(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ n(
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
          /* @__PURE__ */ n(
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
}, Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), Te = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
    "svg",
    {
      width: o,
      height: o,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ n(
          "mask",
          {
            id: "a",
            width: "30",
            height: "30",
            x: "0",
            y: "0",
            maskUnits: "userSpaceOnUse",
            style: { maskType: "alpha" },
            children: /* @__PURE__ */ n("path", { fill: "#D9D9D9", d: "M0 0h24v24H0z" })
          }
        ),
        /* @__PURE__ */ n("g", { mask: "url(#a)", children: /* @__PURE__ */ n(
          "path",
          {
            fill: r.color,
            d: "m9.55 17.65-5.33-5.32 1.05-1.08 4.28 4.28 9.18-9.18 1.04 1.08L9.55 17.64Z"
          }
        ) })
      ]
    }
  );
}, Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" })), ze = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ n("svg", { width: o, height: o, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ n(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z",
      fill: r.color
    }
  ) });
}, zr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ze
}, Symbol.toStringTag, { value: "Module" })), Me = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ n(
    "svg",
    {
      "data-v-1cb5ec28": "",
      width: o,
      height: o,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /* @__PURE__ */ n(
        "path",
        {
          "data-v-1cb5ec28": "",
          d: "M1 30H.5v.5H1V30Zm15.35.35a.5.5 0 0 0 0-.7l-3.18-3.19a.5.5 0 1 0-.7.71L15.28 30l-2.83 2.83a.5.5 0 1 0 .71.7l3.18-3.18ZM.5 0v30h1V0h-1ZM1 30.5h15v-1H1v1Z",
          fill: "#CFD4DD"
        }
      )
    }
  );
}, Mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), De = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
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
      width: o,
      height: o,
      children: [
        /* @__PURE__ */ n("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ n(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ n(
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
          /* @__PURE__ */ n(
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
}, Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), $e = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
    "svg",
    {
      width: o,
      height: o,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ n(
          "mask",
          {
            id: "a",
            style: { maskType: "alpha" },
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: o,
            height: o,
            children: /* @__PURE__ */ n("path", { fill: "#D9D9D9", d: "M0 0h30v30H0z" })
          }
        ),
        /* @__PURE__ */ n("g", { mask: "url(#a)", children: /* @__PURE__ */ n(
          "path",
          {
            d: "M6 20.25v-1.5h17.5v1.5H6Zm0-4.88v-1.5h17.5v1.5H6Zm0-4.87V9h17.5v1.5H6Z",
            fill: r.color
          }
        ) })
      ]
    }
  );
}, $r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), Ae = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
    "svg",
    {
      viewBox: "0 0 32 32",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      fill: "#000000",
      width: o,
      height: o,
      children: [
        /* @__PURE__ */ n("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ n(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ n("g", { id: "icomoon-ignore" }),
          /* @__PURE__ */ n(
            "path",
            {
              d: "M16 2.672c-7.362 0-13.328 5.966-13.328 13.328s5.966 13.328 13.328 13.328c7.362 0 13.328-5.966 13.328-13.328s-5.966-13.328-13.328-13.328zM16 28.262c-6.761 0-12.262-5.501-12.262-12.262s5.501-12.262 12.262-12.262c6.761 0 12.262 5.501 12.262 12.262s-5.501 12.262-12.262 12.262z",
              fill: r.color
            }
          ),
          /* @__PURE__ */ n(
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
}, Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ae
}, Symbol.toStringTag, { value: "Module" })), Fe = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
    "svg",
    {
      width: o,
      height: o,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ n(
          "mask",
          {
            id: "a",
            style: { maskType: "alpha" },
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: o,
            height: o,
            children: /* @__PURE__ */ n("path", { fill: "#D9D9D9", d: "M0 0h24v24H0z" })
          }
        ),
        /* @__PURE__ */ n("g", { mask: "url(#a)", children: /* @__PURE__ */ n(
          "path",
          {
            d: "M9.4 17.65 8.35 16.6l4.6-4.6-4.6-4.6L9.4 6.35 15.05 12 9.4 17.65Z",
            fill: r.color
          }
        ) })
      ]
    }
  );
}, Fr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fe
}, Symbol.toStringTag, { value: "Module" })), We = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: o,
      height: o,
      viewBox: "0 0 32 32",
      version: "1.1",
      children: [
        /* @__PURE__ */ n("title", { children: "search" }),
        /* @__PURE__ */ n("path", { d: "M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z" })
      ]
    }
  );
}, Wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), Ve = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ h(
    "svg",
    {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
      children: [
        /* @__PURE__ */ n("g", { id: "SVGRepo_bgCarrier", strokeWidth: "0" }),
        /* @__PURE__ */ n(
          "g",
          {
            id: "SVGRepo_tracerCarrier",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        ),
        /* @__PURE__ */ h("g", { id: "SVGRepo_iconCarrier", children: [
          /* @__PURE__ */ n(
            "rect",
            {
              width: "48",
              height: "48",
              fill: r.color,
              fillOpacity: "0.01"
            }
          ),
          /* @__PURE__ */ n(
            "path",
            {
              d: "M41.5 10H35.5",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ n(
            "path",
            {
              d: "M27.5 6V14",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ n(
            "path",
            {
              d: "M27.5 10L5.5 10",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ n(
            "path",
            {
              d: "M13.5 24H5.5",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ n(
            "path",
            {
              d: "M21.5 20V28",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ n(
            "path",
            {
              d: "M43.5 24H21.5",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ n(
            "path",
            {
              d: "M41.5 38H35.5",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ n(
            "path",
            {
              d: "M27.5 34V42",
              stroke: "#000000",
              strokeWidth: "0.9600000000000002",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            }
          ),
          /* @__PURE__ */ n(
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
}, Vr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), B = (r) => {
  const o = () => {
    switch (r.name) {
      case "Adult":
        return /* @__PURE__ */ n(Oe, { ...r });
      case "ArrowLeft":
        return /* @__PURE__ */ n(Le, { ...r });
      case "Caution":
        return /* @__PURE__ */ n(Pe, { ...r });
      case "Check":
        return /* @__PURE__ */ n(Te, { ...r });
      case "Close":
        return /* @__PURE__ */ n(ze, { ...r });
      case "Depth":
        return /* @__PURE__ */ n(Me, { ...r });
      case "Gear":
        return /* @__PURE__ */ n(De, { ...r });
      case "Hamburger":
        return /* @__PURE__ */ n($e, { ...r });
      case "Plus":
        return /* @__PURE__ */ n(Ae, { ...r });
      case "Right":
        return /* @__PURE__ */ n(Fe, { ...r });
      case "Search":
        return /* @__PURE__ */ n(We, { ...r });
      case "Setting":
        return /* @__PURE__ */ n(Ve, { ...r });
      default:
        return null;
    }
  }, _ = () => r.size === "big" ? "30px" : r.size === "medium" ? "24px" : "20px";
  return Cr(() => jr(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => Or), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => Lr), "./icons/Caution.tsx": () => Promise.resolve().then(() => Pr), "./icons/Check.tsx": () => Promise.resolve().then(() => Tr), "./icons/Close.tsx": () => Promise.resolve().then(() => zr), "./icons/Depth.tsx": () => Promise.resolve().then(() => Mr), "./icons/Gear.tsx": () => Promise.resolve().then(() => Dr), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => $r), "./icons/Plus.tsx": () => Promise.resolve().then(() => Ar), "./icons/Right.tsx": () => Promise.resolve().then(() => Fr), "./icons/Search.tsx": () => Promise.resolve().then(() => Wr), "./icons/Setting.tsx": () => Promise.resolve().then(() => Vr) }), `./icons/${r.name}.tsx`)), /* @__PURE__ */ n(Rr, { fallback: null, children: /* @__PURE__ */ n("div", { style: { height: _(), display: "inline-block" }, children: o() }) });
};
const dt = (r) => {
  const o = typeof r.back == "function", _ = r.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ h("div", { className: _, children: [
    o && /* @__PURE__ */ n("div", { onClick: r.back, children: /* @__PURE__ */ n(B, { name: "ArrowLeft", size: "big", color: A.grey_111 }) }),
    /* @__PURE__ */ n("span", { children: r.title })
  ] });
};
const ft = (r) => /* @__PURE__ */ n(
  "div",
  {
    className: "common-button",
    style: (() => r.disable ? {
      backgroundColor: A.bg_disable,
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
const ht = (r) => {
  const o = () => ({
    height: r.height ?? "280px",
    objectFit: r.objectFit ?? "fill"
  });
  return /* @__PURE__ */ n("div", { className: "card-container", children: /* @__PURE__ */ n("div", { className: "card", children: /* @__PURE__ */ n("img", { src: r.imageUrl, style: o() }) }) });
};
const vt = (r) => /* @__PURE__ */ h("div", { className: "group-card", children: [
  r.isSub && /* @__PURE__ */ n(B, { name: "Depth", size: "medium", color: A.grey_111 }),
  /* @__PURE__ */ h("div", { className: "card", children: [
    /* @__PURE__ */ n("img", { className: "card-image", src: r.imageUrl }),
    /* @__PURE__ */ n("div", { className: "card-explain", children: /* @__PURE__ */ n("span", { children: r.label }) })
  ] })
] });
const Ne = (r) => {
  const o = {
    backgroundColor: `rgba(0,0,0,${r.opacity})`
  };
  return /* @__PURE__ */ n(re.Fragment, { children: r.isOpen && /* @__PURE__ */ n("div", { className: "overlay", style: o, children: r.children }) });
};
const gt = (r) => /* @__PURE__ */ n(Ne, { isOpen: r.isOpen, opacity: 0.6, children: /* @__PURE__ */ n("div", { className: `wrapper ${r.isMobile ? "mobile" : ""}`, children: r.children }) });
const mt = (r) => {
  const o = r.title ? {
    padding: "20px"
  } : {
    padding: "16px"
  };
  return /* @__PURE__ */ h("div", { className: "popup-header", style: o, children: [
    r.back && /* @__PURE__ */ n("div", { className: "popup-icon", onClick: r.back, children: /* @__PURE__ */ n(B, { name: "ArrowLeft", size: "big", color: A.grey_999 }) }),
    r.title && /* @__PURE__ */ n("div", { children: /* @__PURE__ */ n("span", { className: "title", children: r.title }) }),
    r.close && /* @__PURE__ */ n("div", { className: "popup-icon", onClick: r.close, children: /* @__PURE__ */ n(B, { name: "Close", size: "big", color: A.grey_999 }) })
  ] });
};
const bt = ({ opacity: r }) => /* @__PURE__ */ n(Ne, { isOpen: !0, opacity: r, children: /* @__PURE__ */ n("div", { className: "loading-content", children: /* @__PURE__ */ n("div", { className: "loading" }) }) }), Nr = "#6440dd", Hr = "#5934D8", Ir = "#F5222D", Gr = "#111111", Ur = "#666666", Br = "#333333", Yr = "#999999", Zr = "#bbbbbb", qr = "#cccccc", Xr = "#f4f4f4", Jr = "#f5f6f8", Kr = "#f2f4f7", Qr = "#dbd6eb", et = "#eeebff", rt = "#b6b7b9", tt = "#e7e9ef", nt = "#cfd4dd", it = "#d42a21", ot = "#1968e5", at = "#27c4b8", st = "#fff", lt = "#f4f0ff", ct = "#ABAEBF", A = {
  main: Nr,
  main_sub: Hr,
  notice: Ir,
  grey_111: Gr,
  grey_666: Ur,
  grey_333: Br,
  grey_999: Yr,
  grey_bbb: Zr,
  grey_ccc: qr,
  grey_f4: Xr,
  bg_main: Jr,
  bg_noti: Kr,
  bg_disable: Qr,
  bg_sub: et,
  bg_trans: rt,
  line_01: tt,
  line_02: nt,
  plus: it,
  minus: ot,
  code: at,
  white: st,
  option_hover: lt,
  m_gnb_normal: ct
};
export {
  ft as Button,
  ht as Card,
  A as Colors,
  B as Element,
  vt as GroupCard,
  dt as HeaderBar,
  bt as LoadingSpinner,
  Ne as OverLay,
  gt as Popup,
  mt as PopupBasicHeader
};
