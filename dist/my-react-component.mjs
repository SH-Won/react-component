import re, { lazy as Cr, Suspense as Rr } from "react";
var U = {}, xr = {
  get exports() {
    return U;
  },
  set exports(r) {
    U = r;
  }
}, $ = {};
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
    return $;
  Le = 1;
  var r = re, o = Symbol.for("react.element"), g = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function z(R, v, E) {
    var _, k = {}, x = null, W = null;
    E !== void 0 && (x = "" + E), v.key !== void 0 && (x = "" + v.key), v.ref !== void 0 && (W = v.ref);
    for (_ in v)
      p.call(v, _) && !V.hasOwnProperty(_) && (k[_] = v[_]);
    if (R && R.defaultProps)
      for (_ in v = R.defaultProps, v)
        k[_] === void 0 && (k[_] = v[_]);
    return { $$typeof: o, type: R, key: x, ref: W, props: k, _owner: L.current };
  }
  return $.Fragment = g, $.jsx = z, $.jsxs = z, $;
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
    var r = re, o = Symbol.for("react.element"), g = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), L = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), z = Symbol.for("react.provider"), R = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), _ = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), te = Symbol.iterator, Ge = "@@iterator";
    function Ie(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = te && e[te] || e[Ge];
      return typeof n == "function" ? n : null;
    }
    var j = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
          i[a - 1] = arguments[a];
        Be("error", e, i);
      }
    }
    function Be(e, n, i) {
      {
        var a = j.ReactDebugCurrentFrame, c = a.getStackAddendum();
        c !== "" && (n += "%s", i = i.concat([c]));
        var u = i.map(function(l) {
          return String(l);
        });
        u.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var He = !1, Ue = !1, Ye = !1, qe = !1, Xe = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ze(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === V || Xe || e === L || e === E || e === _ || qe || e === W || He || Ue || Ye || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === k || e.$$typeof === z || e.$$typeof === R || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Je(e, n, i) {
      var a = e.displayName;
      if (a)
        return a;
      var c = n.displayName || n.name || "";
      return c !== "" ? i + "(" + c + ")" : i;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function w(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case g:
          return "Portal";
        case V:
          return "Profiler";
        case L:
          return "StrictMode";
        case E:
          return "Suspense";
        case _:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var n = e;
            return ie(n) + ".Consumer";
          case z:
            var i = e;
            return ie(i._context) + ".Provider";
          case v:
            return Je(e, e.render, "ForwardRef");
          case k:
            var a = e.displayName || null;
            return a !== null ? a : w(e.type) || "Memo";
          case x: {
            var c = e, u = c._payload, l = c._init;
            try {
              return w(l(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, M = 0, oe, ae, se, le, ce, ue, de;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Ke() {
      {
        if (M === 0) {
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
        M++;
      }
    }
    function Qe() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: oe
            }),
            info: S({}, e, {
              value: ae
            }),
            warn: S({}, e, {
              value: se
            }),
            error: S({}, e, {
              value: le
            }),
            group: S({}, e, {
              value: ce
            }),
            groupCollapsed: S({}, e, {
              value: ue
            }),
            groupEnd: S({}, e, {
              value: de
            })
          });
        }
        M < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = j.ReactCurrentDispatcher, q;
    function F(e, n, i) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (c) {
            var a = c.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
          }
        return `
` + q + e;
      }
    }
    var X = !1, G;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      G = new er();
    }
    function he(e, n) {
      if (!e || X)
        return "";
      {
        var i = G.get(e);
        if (i !== void 0)
          return i;
      }
      var a;
      X = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = Y.current, Y.current = null, Ke();
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
            } catch (C) {
              a = C;
            }
            Reflect.construct(e, [], l);
          } else {
            try {
              l.call();
            } catch (C) {
              a = C;
            }
            e.call(l.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            a = C;
          }
          e();
        }
      } catch (C) {
        if (C && a && typeof C.stack == "string") {
          for (var s = C.stack.split(`
`), b = a.stack.split(`
`), f = s.length - 1, h = b.length - 1; f >= 1 && h >= 0 && s[f] !== b[h]; )
            h--;
          for (; f >= 1 && h >= 0; f--, h--)
            if (s[f] !== b[h]) {
              if (f !== 1 || h !== 1)
                do
                  if (f--, h--, h < 0 || s[f] !== b[h]) {
                    var y = `
` + s[f].replace(" at new ", " at ");
                    return e.displayName && y.includes("<anonymous>") && (y = y.replace("<anonymous>", e.displayName)), typeof e == "function" && G.set(e, y), y;
                  }
                while (f >= 1 && h >= 0);
              break;
            }
        }
      } finally {
        X = !1, Y.current = u, Qe(), Error.prepareStackTrace = c;
      }
      var P = e ? e.displayName || e.name : "", Se = P ? F(P) : "";
      return typeof e == "function" && G.set(e, Se), Se;
    }
    function rr(e, n, i) {
      return he(e, !1);
    }
    function tr(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function I(e, n, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, tr(e));
      if (typeof e == "string")
        return F(e);
      switch (e) {
        case E:
          return F("Suspense");
        case _:
          return F("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return rr(e.render);
          case k:
            return I(e.type, n, i);
          case x: {
            var a = e, c = a._payload, u = a._init;
            try {
              return I(u(c), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, ge = {}, ve = j.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var n = e._owner, i = I(e.type, e._source, n ? n.type : null);
        ve.setExtraStackFrame(i);
      } else
        ve.setExtraStackFrame(null);
    }
    function nr(e, n, i, a, c) {
      {
        var u = Function.call.bind(B);
        for (var l in e)
          if (u(e, l)) {
            var s = void 0;
            try {
              if (typeof e[l] != "function") {
                var b = Error((a || "React class") + ": " + i + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              s = e[l](n, l, a, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              s = f;
            }
            s && !(s instanceof Error) && (H(c), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", i, l, typeof s), H(null)), s instanceof Error && !(s.message in ge) && (ge[s.message] = !0, H(c), m("Failed %s type: %s", i, s.message), H(null));
          }
      }
    }
    var ir = Array.isArray;
    function Z(e) {
      return ir(e);
    }
    function or(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
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
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", or(e)), me(e);
    }
    var D = j.ReactCurrentOwner, sr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, pe, J;
    J = {};
    function lr(e) {
      if (B.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function cr(e) {
      if (B.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ur(e, n) {
      if (typeof e.ref == "string" && D.current && n && D.current.stateNode !== n) {
        var i = w(D.current.type);
        J[i] || (m('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', w(D.current.type), e.ref), J[i] = !0);
      }
    }
    function dr(e, n) {
      {
        var i = function() {
          _e || (_e = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function fr(e, n) {
      {
        var i = function() {
          pe || (pe = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var hr = function(e, n, i, a, c, u, l) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: n,
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
    function gr(e, n, i, a, c) {
      {
        var u, l = {}, s = null, b = null;
        i !== void 0 && (be(i), s = "" + i), cr(n) && (be(n.key), s = "" + n.key), lr(n) && (b = n.ref, ur(n, c));
        for (u in n)
          B.call(n, u) && !sr.hasOwnProperty(u) && (l[u] = n[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            l[u] === void 0 && (l[u] = f[u]);
        }
        if (s || b) {
          var h = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && dr(l, h), b && fr(l, h);
        }
        return hr(e, s, b, c, a, D.current, l);
      }
    }
    var K = j.ReactCurrentOwner, ye = j.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var n = e._owner, i = I(e.type, e._source, n ? n.type : null);
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
          var e = w(K.current.type);
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
          var n = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
    }
    var we = {};
    function mr(e) {
      {
        var n = ke();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function Ce(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = mr(n);
        if (we[i])
          return;
        we[i] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + w(e._owner.type) + "."), O(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, a), O(null);
      }
    }
    function Re(e, n) {
      {
        if (typeof e != "object")
          return;
        if (Z(e))
          for (var i = 0; i < e.length; i++) {
            var a = e[i];
            ee(a) && Ce(a, n);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = Ie(e);
          if (typeof c == "function" && c !== e.entries)
            for (var u = c.call(e), l; !(l = u.next()).done; )
              ee(l.value) && Ce(l.value, n);
        }
      }
    }
    function br(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === k))
          i = n.propTypes;
        else
          return;
        if (i) {
          var a = w(n);
          nr(i, e.props, "prop", a, e);
        } else if (n.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = w(n);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
          var a = n[i];
          if (a !== "children" && a !== "key") {
            O(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    function xe(e, n, i, a, c, u) {
      {
        var l = Ze(e);
        if (!l) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = vr(c);
          b ? s += b : s += ke();
          var f;
          e === null ? f = "null" : Z(e) ? f = "array" : e !== void 0 && e.$$typeof === o ? (f = "<" + (w(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, s);
        }
        var h = gr(e, n, i, c, u);
        if (h == null)
          return h;
        if (l) {
          var y = n.children;
          if (y !== void 0)
            if (a)
              if (Z(y)) {
                for (var P = 0; P < y.length; P++)
                  Re(y[P], e);
                Object.freeze && Object.freeze(y);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(y, e);
        }
        return e === p ? _r(h) : br(h), h;
      }
    }
    function pr(e, n, i) {
      return xe(e, n, i, !0);
    }
    function yr(e, n, i) {
      return xe(e, n, i, !1);
    }
    var kr = yr, wr = pr;
    A.Fragment = p, A.jsx = kr, A.jsxs = wr;
  }()), A;
}
(function(r) {
  process.env.NODE_ENV === "production" ? r.exports = Sr() : r.exports = Lr();
})(xr);
const t = U.jsx, d = U.jsxs, Er = "#6440dd", jr = "#5934D8", Or = "#F5222D", Pr = "#111111", Tr = "#666666", zr = "#333333", Mr = "#999999", Dr = "#bbbbbb", $r = "#cccccc", Ar = "#f4f4f4", Nr = "#f5f6f8", Vr = "#f2f4f7", Wr = "#dbd6eb", Fr = "#eeebff", Gr = "#b6b7b9", Ir = "#e7e9ef", Br = "#cfd4dd", Hr = "#d42a21", Ur = "#1968e5", Yr = "#27c4b8", qr = "#fff", Xr = "#f4f0ff", Zr = "#ABAEBF", T = {
  main: Er,
  main_sub: jr,
  notice: Or,
  grey_111: Pr,
  grey_666: Tr,
  grey_333: zr,
  grey_999: Mr,
  grey_bbb: Dr,
  grey_ccc: $r,
  grey_f4: Ar,
  bg_main: Nr,
  bg_noti: Vr,
  bg_disable: Wr,
  bg_sub: Fr,
  bg_trans: Gr,
  line_01: Ir,
  line_02: Br,
  plus: Hr,
  minus: Ur,
  code: Yr,
  white: qr,
  option_hover: Xr,
  m_gnb_normal: Zr
}, Jr = (r, o) => {
  const g = r[o];
  return g ? typeof g == "function" ? g() : Promise.resolve(g) : new Promise((p, L) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(L.bind(null, new Error("Unknown variable dynamic import: " + o)));
  });
}, je = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
}, Kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: je
}, Symbol.toStringTag, { value: "Module" })), Oe = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
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
}, Qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Oe
}, Symbol.toStringTag, { value: "Module" })), Pe = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
}, et = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pe
}, Symbol.toStringTag, { value: "Module" })), Te = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      width: o,
      height: o,
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
}, rt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Te
}, Symbol.toStringTag, { value: "Module" })), ze = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ t("svg", { width: o, height: o, fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M17.657 7.757a1 1 0 0 0-1.414-1.414L12 10.586 7.757 6.343a1 1 0 1 0-1.414 1.414L10.586 12l-4.243 4.243a1 1 0 1 0 1.414 1.414L12 13.414l4.243 4.243a1 1 0 0 0 1.414-1.414L13.414 12l4.243-4.243Z",
      fill: r.color
    }
  ) });
}, tt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ze
}, Symbol.toStringTag, { value: "Module" })), Me = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
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
}, nt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Me
}, Symbol.toStringTag, { value: "Module" })), De = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
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
      width: o,
      height: o,
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
}, it = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: De
}, Symbol.toStringTag, { value: "Module" })), $e = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      width: o,
      height: o,
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
            width: o,
            height: o,
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
}, ot = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $e
}, Symbol.toStringTag, { value: "Module" })), Ae = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
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
}, at = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ae
}, Symbol.toStringTag, { value: "Module" })), Ne = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      width: o,
      height: o,
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
            width: o,
            height: o,
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
}, st = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ne
}, Symbol.toStringTag, { value: "Module" })), Ve = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#000000",
      width: o,
      height: o,
      viewBox: "0 0 32 32",
      version: "1.1",
      children: [
        /* @__PURE__ */ t("title", { children: "search" }),
        /* @__PURE__ */ t("path", { d: "M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z" })
      ]
    }
  );
}, lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Ve
}, Symbol.toStringTag, { value: "Module" })), We = (r) => {
  const o = r.size === "big" ? "30" : r.size === "medium" ? "24" : "20";
  return /* @__PURE__ */ d(
    "svg",
    {
      viewBox: "0 0 48 48",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      width: o,
      height: o,
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
}, ct = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: We
}, Symbol.toStringTag, { value: "Module" })), N = (r) => {
  const o = () => {
    switch (r.name) {
      case "Adult":
        return /* @__PURE__ */ t(je, { ...r });
      case "ArrowLeft":
        return /* @__PURE__ */ t(Oe, { ...r });
      case "Caution":
        return /* @__PURE__ */ t(Pe, { ...r });
      case "Check":
        return /* @__PURE__ */ t(Te, { ...r });
      case "Close":
        return /* @__PURE__ */ t(ze, { ...r });
      case "Depth":
        return /* @__PURE__ */ t(Me, { ...r });
      case "Gear":
        return /* @__PURE__ */ t(De, { ...r });
      case "Hamburger":
        return /* @__PURE__ */ t($e, { ...r });
      case "Plus":
        return /* @__PURE__ */ t(Ae, { ...r });
      case "Right":
        return /* @__PURE__ */ t(Ne, { ...r });
      case "Search":
        return /* @__PURE__ */ t(Ve, { ...r });
      case "Setting":
        return /* @__PURE__ */ t(We, { ...r });
      default:
        return null;
    }
  }, g = () => r.size === "big" ? "30px" : r.size === "medium" ? "24px" : "20px";
  return Cr(() => Jr(/* @__PURE__ */ Object.assign({ "./icons/Adult.tsx": () => Promise.resolve().then(() => Kr), "./icons/ArrowLeft.tsx": () => Promise.resolve().then(() => Qr), "./icons/Caution.tsx": () => Promise.resolve().then(() => et), "./icons/Check.tsx": () => Promise.resolve().then(() => rt), "./icons/Close.tsx": () => Promise.resolve().then(() => tt), "./icons/Depth.tsx": () => Promise.resolve().then(() => nt), "./icons/Gear.tsx": () => Promise.resolve().then(() => it), "./icons/Hamburger.tsx": () => Promise.resolve().then(() => ot), "./icons/Plus.tsx": () => Promise.resolve().then(() => at), "./icons/Right.tsx": () => Promise.resolve().then(() => st), "./icons/Search.tsx": () => Promise.resolve().then(() => lt), "./icons/Setting.tsx": () => Promise.resolve().then(() => ct) }), `./icons/${r.name}.tsx`)), /* @__PURE__ */ t(Rr, { fallback: null, children: /* @__PURE__ */ t("div", { style: { height: g(), display: "inline-block" }, children: o() }) });
};
const dt = (r) => {
  const o = typeof r.back == "function", g = r.isMobile ? "appBar mobile" : "appBar";
  return /* @__PURE__ */ d("div", { className: g, children: [
    o && /* @__PURE__ */ t("div", { onClick: r.back, children: /* @__PURE__ */ t(N, { name: "ArrowLeft", size: "big", color: T.grey_111 }) }),
    /* @__PURE__ */ t("span", { children: r.title })
  ] });
};
const ft = (r) => /* @__PURE__ */ t(
  "div",
  {
    className: "common-button",
    style: (() => r.disable ? {
      backgroundColor: T.bg_disable,
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
  return /* @__PURE__ */ t("div", { className: "card-container", children: /* @__PURE__ */ t("div", { className: "card", children: /* @__PURE__ */ t("img", { src: r.imageUrl, style: o() }) }) });
};
const gt = (r) => /* @__PURE__ */ d("div", { className: "group-card", children: [
  r.isSub && /* @__PURE__ */ t(N, { name: "Depth", size: "medium", color: T.grey_111 }),
  /* @__PURE__ */ d("div", { className: "card", children: [
    /* @__PURE__ */ t("img", { className: "card-image", src: r.imageUrl }),
    /* @__PURE__ */ t("div", { className: "card-explain", children: /* @__PURE__ */ t("span", { children: r.label }) })
  ] })
] });
const Fe = (r) => {
  const o = {
    backgroundColor: `rgba(0,0,0,${r.opacity})`
  };
  return /* @__PURE__ */ t(re.Fragment, { children: r.isOpen && /* @__PURE__ */ t("div", { className: "overlay", style: o, children: r.children }) });
};
const vt = (r) => /* @__PURE__ */ t(Fe, { isOpen: r.isOpen, opacity: 0.6, children: /* @__PURE__ */ t("div", { className: `wrapper ${r.isMobile ? "mobile" : ""}`, children: r.children }) });
const mt = (r) => {
  const o = r.title ? {
    padding: "20px 20px 9px"
  } : {
    padding: "16px 16px 7px"
  };
  return /* @__PURE__ */ d("div", { className: "popup-header-container", style: o, children: [
    /* @__PURE__ */ d("div", { className: "popup-header", children: [
      r.back && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.back, children: /* @__PURE__ */ t(N, { name: "ArrowLeft", size: "big", color: T.grey_999 }) }),
      r.title && /* @__PURE__ */ t("div", { children: /* @__PURE__ */ t("span", { className: "title", children: r.title }) }),
      r.close && /* @__PURE__ */ t("div", { className: "popup-icon", onClick: r.close, children: /* @__PURE__ */ t(N, { name: "Close", size: "big", color: T.grey_999 }) })
    ] }),
    /* @__PURE__ */ t("div", { className: "popup-header-progress", children: r.maxProgress && Array(r.maxProgress).fill(1).map((g, p) => /* @__PURE__ */ t(
      "span",
      {
        className: `${p + g === r.progress ? "selected" : ""}`
      },
      `progress${p}`
    )) })
  ] });
};
const bt = (r) => /* @__PURE__ */ d("div", { className: "notification", children: [
  r.children,
  /* @__PURE__ */ d("div", { className: "info", style: { height: r.height }, children: [
    /* @__PURE__ */ t(N, { name: "Caution", size: "small", color: T.grey_bbb }),
    /* @__PURE__ */ t("span", { children: r.text })
  ] })
] });
const _t = (r) => {
  const o = `${r.ratio * 100}%`;
  return /* @__PURE__ */ t("div", { className: "image-wrapper", style: { paddingTop: o }, children: /* @__PURE__ */ t("img", { className: "ratio-img", src: r.imageUrl }) });
};
const pt = ({ opacity: r }) => /* @__PURE__ */ t(Fe, { isOpen: !0, opacity: r, children: /* @__PURE__ */ t("div", { className: "loading-content", children: /* @__PURE__ */ t("div", { className: "loading" }) }) });
const yt = (r) => {
  const o = Array(8).fill(1).map((g, p) => g + p);
  return /* @__PURE__ */ d(
    "div",
    {
      className: "page-loading-container",
      style: { height: r.customHeight },
      children: [
        /* @__PURE__ */ t("div", { className: "page-loading-wrapper", children: o.map((g) => /* @__PURE__ */ t("div", { className: "loader" }, `loaderKey${g}`)) }),
        /* @__PURE__ */ t("div", { className: "text", children: r.text })
      ]
    }
  );
};
export {
  ft as Button,
  ht as Card,
  T as Colors,
  N as Element,
  gt as GroupCard,
  dt as HeaderBar,
  pt as LoadingSpinner,
  bt as Notification,
  Fe as OverLay,
  yt as PageLoadingSpinner,
  vt as Popup,
  mt as PopupBasicHeader,
  _t as RatioImage
};
