import * as Ne from "react";
import ee, { forwardRef as te, Children as sr, isValidElement as yr, createElement as Pr, cloneElement as ne, Fragment as Fe } from "react";
var oe = { exports: {} }, nr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jr;
function We() {
  if (Jr)
    return nr;
  Jr = 1;
  var e = ee, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(l, d, p) {
    var v, b = {}, x = null, k = null;
    p !== void 0 && (x = "" + p), d.key !== void 0 && (x = "" + d.key), d.ref !== void 0 && (k = d.ref);
    for (v in d)
      o.call(d, v) && !u.hasOwnProperty(v) && (b[v] = d[v]);
    if (l && l.defaultProps)
      for (v in d = l.defaultProps, d)
        b[v] === void 0 && (b[v] = d[v]);
    return { $$typeof: t, type: l, key: x, ref: k, props: b, _owner: c.current };
  }
  return nr.Fragment = n, nr.jsx = s, nr.jsxs = s, nr;
}
var or = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function Ve() {
  return Hr || (Hr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ee, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), O = Symbol.iterator, T = "@@iterator";
    function P(r) {
      if (r === null || typeof r != "object")
        return null;
      var a = O && r[O] || r[T];
      return typeof a == "function" ? a : null;
    }
    var j = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(r) {
      {
        for (var a = arguments.length, i = new Array(a > 1 ? a - 1 : 0), f = 1; f < a; f++)
          i[f - 1] = arguments[f];
        lr("error", r, i);
      }
    }
    function lr(r, a, i) {
      {
        var f = j.ReactDebugCurrentFrame, y = f.getStackAddendum();
        y !== "" && (a += "%s", i = i.concat([y]));
        var E = i.map(function(h) {
          return String(h);
        });
        E.unshift("Warning: " + a), Function.prototype.apply.call(console[r], console, E);
      }
    }
    var X = !1, ur = !1, cr = !1, dr = !1, fr = !1, q;
    q = Symbol.for("react.module.reference");
    function Z(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === u || fr || r === c || r === p || r === v || dr || r === k || X || ur || cr || typeof r == "object" && r !== null && (r.$$typeof === x || r.$$typeof === b || r.$$typeof === s || r.$$typeof === l || r.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === q || r.getModuleId !== void 0));
    }
    function Q(r, a, i) {
      var f = r.displayName;
      if (f)
        return f;
      var y = a.displayName || a.name || "";
      return y !== "" ? i + "(" + y + ")" : i;
    }
    function w(r) {
      return r.displayName || "Context";
    }
    function M(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case p:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case l:
            var a = r;
            return w(a) + ".Consumer";
          case s:
            var i = r;
            return w(i._context) + ".Provider";
          case d:
            return Q(r, r.render, "ForwardRef");
          case b:
            var f = r.displayName || null;
            return f !== null ? f : M(r.type) || "Memo";
          case x: {
            var y = r, E = y._payload, h = y._init;
            try {
              return M(h(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var $ = Object.assign, F = 0, D, rr, J, W, er, V, Y;
    function A() {
    }
    A.__reactDisabledLog = !0;
    function pe() {
      {
        if (F === 0) {
          D = console.log, rr = console.info, J = console.warn, W = console.error, er = console.group, V = console.groupCollapsed, Y = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: A,
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
        F++;
      }
    }
    function ve() {
      {
        if (F--, F === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: $({}, r, {
              value: D
            }),
            info: $({}, r, {
              value: rr
            }),
            warn: $({}, r, {
              value: J
            }),
            error: $({}, r, {
              value: W
            }),
            group: $({}, r, {
              value: er
            }),
            groupCollapsed: $({}, r, {
              value: V
            }),
            groupEnd: $({}, r, {
              value: Y
            })
          });
        }
        F < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var wr = j.ReactCurrentDispatcher, Er;
    function pr(r, a, i) {
      {
        if (Er === void 0)
          try {
            throw Error();
          } catch (y) {
            var f = y.stack.trim().match(/\n( *(at )?)/);
            Er = f && f[1] || "";
          }
        return `
` + Er + r;
      }
    }
    var Rr = !1, vr;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      vr = new be();
    }
    function Mr(r, a) {
      if (!r || Rr)
        return "";
      {
        var i = vr.get(r);
        if (i !== void 0)
          return i;
      }
      var f;
      Rr = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = wr.current, wr.current = null, pe();
      try {
        if (a) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (N) {
              f = N;
            }
            Reflect.construct(r, [], h);
          } else {
            try {
              h.call();
            } catch (N) {
              f = N;
            }
            r.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            f = N;
          }
          r();
        }
      } catch (N) {
        if (N && f && typeof N.stack == "string") {
          for (var g = N.stack.split(`
`), I = f.stack.split(`
`), _ = g.length - 1, S = I.length - 1; _ >= 1 && S >= 0 && g[_] !== I[S]; )
            S--;
          for (; _ >= 1 && S >= 0; _--, S--)
            if (g[_] !== I[S]) {
              if (_ !== 1 || S !== 1)
                do
                  if (_--, S--, S < 0 || g[_] !== I[S]) {
                    var z = `
` + g[_].replace(" at new ", " at ");
                    return r.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", r.displayName)), typeof r == "function" && vr.set(r, z), z;
                  }
                while (_ >= 1 && S >= 0);
              break;
            }
        }
      } finally {
        Rr = !1, wr.current = E, ve(), Error.prepareStackTrace = y;
      }
      var K = r ? r.displayName || r.name : "", qr = K ? pr(K) : "";
      return typeof r == "function" && vr.set(r, qr), qr;
    }
    function ge(r, a, i) {
      return Mr(r, !1);
    }
    function me(r) {
      var a = r.prototype;
      return !!(a && a.isReactComponent);
    }
    function br(r, a, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Mr(r, me(r));
      if (typeof r == "string")
        return pr(r);
      switch (r) {
        case p:
          return pr("Suspense");
        case v:
          return pr("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case d:
            return ge(r.render);
          case b:
            return br(r.type, a, i);
          case x: {
            var f = r, y = f._payload, E = f._init;
            try {
              return br(E(y), a, i);
            } catch {
            }
          }
        }
      return "";
    }
    var gr = Object.prototype.hasOwnProperty, $r = {}, zr = j.ReactDebugCurrentFrame;
    function mr(r) {
      if (r) {
        var a = r._owner, i = br(r.type, r._source, a ? a.type : null);
        zr.setExtraStackFrame(i);
      } else
        zr.setExtraStackFrame(null);
    }
    function he(r, a, i, f, y) {
      {
        var E = Function.call.bind(gr);
        for (var h in r)
          if (E(r, h)) {
            var g = void 0;
            try {
              if (typeof r[h] != "function") {
                var I = Error((f || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              g = r[h](a, h, f, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (_) {
              g = _;
            }
            g && !(g instanceof Error) && (mr(y), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", i, h, typeof g), mr(null)), g instanceof Error && !(g.message in $r) && ($r[g.message] = !0, mr(y), R("Failed %s type: %s", i, g.message), mr(null));
          }
      }
    }
    var ye = Array.isArray;
    function Cr(r) {
      return ye(r);
    }
    function xe(r) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, i = a && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function we(r) {
      try {
        return Gr(r), !1;
      } catch {
        return !0;
      }
    }
    function Gr(r) {
      return "" + r;
    }
    function Nr(r) {
      if (we(r))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xe(r)), Gr(r);
    }
    var tr = j.ReactCurrentOwner, Ee = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fr, Wr, _r;
    _r = {};
    function Re(r) {
      if (gr.call(r, "ref")) {
        var a = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function Ce(r) {
      if (gr.call(r, "key")) {
        var a = Object.getOwnPropertyDescriptor(r, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function _e(r, a) {
      if (typeof r.ref == "string" && tr.current && a && tr.current.stateNode !== a) {
        var i = M(tr.current.type);
        _r[i] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(tr.current.type), r.ref), _r[i] = !0);
      }
    }
    function Se(r, a) {
      {
        var i = function() {
          Fr || (Fr = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function ke(r, a) {
      {
        var i = function() {
          Wr || (Wr = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var Te = function(r, a, i, f, y, E, h) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: a,
        ref: i,
        props: h,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Pe(r, a, i, f, y) {
      {
        var E, h = {}, g = null, I = null;
        i !== void 0 && (Nr(i), g = "" + i), Ce(a) && (Nr(a.key), g = "" + a.key), Re(a) && (I = a.ref, _e(a, y));
        for (E in a)
          gr.call(a, E) && !Ee.hasOwnProperty(E) && (h[E] = a[E]);
        if (r && r.defaultProps) {
          var _ = r.defaultProps;
          for (E in _)
            h[E] === void 0 && (h[E] = _[E]);
        }
        if (g || I) {
          var S = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          g && Se(h, S), I && ke(h, S);
        }
        return Te(r, g, I, y, f, tr.current, h);
      }
    }
    var Sr = j.ReactCurrentOwner, Vr = j.ReactDebugCurrentFrame;
    function H(r) {
      if (r) {
        var a = r._owner, i = br(r.type, r._source, a ? a.type : null);
        Vr.setExtraStackFrame(i);
      } else
        Vr.setExtraStackFrame(null);
    }
    var kr;
    kr = !1;
    function Tr(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Lr() {
      {
        if (Sr.current) {
          var r = M(Sr.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Oe(r) {
      {
        if (r !== void 0) {
          var a = r.fileName.replace(/^.*[\\\/]/, ""), i = r.lineNumber;
          return `

Check your code at ` + a + ":" + i + ".";
        }
        return "";
      }
    }
    var Dr = {};
    function Ae(r) {
      {
        var a = Lr();
        if (!a) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (a = `

Check the top-level render call using <` + i + ">.");
        }
        return a;
      }
    }
    function Yr(r, a) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = Ae(a);
        if (Dr[i])
          return;
        Dr[i] = !0;
        var f = "";
        r && r._owner && r._owner !== Sr.current && (f = " It was passed a child from " + M(r._owner.type) + "."), H(r), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, f), H(null);
      }
    }
    function Ur(r, a) {
      {
        if (typeof r != "object")
          return;
        if (Cr(r))
          for (var i = 0; i < r.length; i++) {
            var f = r[i];
            Tr(f) && Yr(f, a);
          }
        else if (Tr(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var y = P(r);
          if (typeof y == "function" && y !== r.entries)
            for (var E = y.call(r), h; !(h = E.next()).done; )
              Tr(h.value) && Yr(h.value, a);
        }
      }
    }
    function je(r) {
      {
        var a = r.type;
        if (a == null || typeof a == "string")
          return;
        var i;
        if (typeof a == "function")
          i = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === b))
          i = a.propTypes;
        else
          return;
        if (i) {
          var f = M(a);
          he(i, r.props, "prop", f, r);
        } else if (a.PropTypes !== void 0 && !kr) {
          kr = !0;
          var y = M(a);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ie(r) {
      {
        for (var a = Object.keys(r.props), i = 0; i < a.length; i++) {
          var f = a[i];
          if (f !== "children" && f !== "key") {
            H(r), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), H(null);
            break;
          }
        }
        r.ref !== null && (H(r), R("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    function Br(r, a, i, f, y, E) {
      {
        var h = Z(r);
        if (!h) {
          var g = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = Oe(y);
          I ? g += I : g += Lr();
          var _;
          r === null ? _ = "null" : Cr(r) ? _ = "array" : r !== void 0 && r.$$typeof === t ? (_ = "<" + (M(r.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : _ = typeof r, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", _, g);
        }
        var S = Pe(r, a, i, y, E);
        if (S == null)
          return S;
        if (h) {
          var z = a.children;
          if (z !== void 0)
            if (f)
              if (Cr(z)) {
                for (var K = 0; K < z.length; K++)
                  Ur(z[K], r);
                Object.freeze && Object.freeze(z);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ur(z, r);
        }
        return r === o ? Ie(S) : je(S), S;
      }
    }
    function Me(r, a, i) {
      return Br(r, a, i, !0);
    }
    function $e(r, a, i) {
      return Br(r, a, i, !1);
    }
    var ze = $e, Ge = Me;
    or.Fragment = o, or.jsx = ze, or.jsxs = Ge;
  }()), or;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = We() : e.exports = Ve();
})(oe);
function xr() {
  return xr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, xr.apply(this, arguments);
}
function Le(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function De(...e) {
  return (t) => e.forEach(
    (n) => Le(n, t)
  );
}
const ae = /* @__PURE__ */ te((e, t) => {
  const { children: n, ...o } = e, c = sr.toArray(n), u = c.find(Ue);
  if (u) {
    const s = u.props.children, l = c.map((d) => d === u ? sr.count(s) > 1 ? sr.only(null) : /* @__PURE__ */ yr(s) ? s.props.children : null : d);
    return /* @__PURE__ */ Pr(Or, xr({}, o, {
      ref: t
    }), /* @__PURE__ */ yr(s) ? /* @__PURE__ */ ne(s, void 0, l) : null);
  }
  return /* @__PURE__ */ Pr(Or, xr({}, o, {
    ref: t
  }), n);
});
ae.displayName = "Slot";
const Or = /* @__PURE__ */ te((e, t) => {
  const { children: n, ...o } = e;
  return /* @__PURE__ */ yr(n) ? /* @__PURE__ */ ne(n, {
    ...Be(o, n.props),
    ref: t ? De(t, n.ref) : n.ref
  }) : sr.count(n) > 1 ? sr.only(null) : null;
});
Or.displayName = "SlotClone";
const Ye = ({ children: e }) => /* @__PURE__ */ Pr(Fe, null, e);
function Ue(e) {
  return /* @__PURE__ */ yr(e) && e.type === Ye;
}
function Be(e, t) {
  const n = {
    ...t
  };
  for (const o in t) {
    const c = e[o], u = t[o];
    /^on[A-Z]/.test(o) ? c && u ? n[o] = (...l) => {
      u(...l), c(...l);
    } : c && (n[o] = c) : o === "style" ? n[o] = {
      ...c,
      ...u
    } : o === "className" && (n[o] = [
      c,
      u
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
function ie(e) {
  var t, n, o = "";
  if (typeof e == "string" || typeof e == "number")
    o += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (n = ie(e[t])) && (o && (o += " "), o += n);
    else
      for (t in e)
        e[t] && (o && (o += " "), o += t);
  return o;
}
function se() {
  for (var e, t, n = 0, o = ""; n < arguments.length; )
    (e = arguments[n++]) && (t = ie(e)) && (o && (o += " "), o += t);
  return o;
}
const Kr = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Xr = se, qe = (e, t) => (n) => {
  var o;
  if ((t == null ? void 0 : t.variants) == null)
    return Xr(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: c, defaultVariants: u } = t, s = Object.keys(c).map((p) => {
    const v = n == null ? void 0 : n[p], b = u == null ? void 0 : u[p];
    if (v === null)
      return null;
    const x = Kr(v) || Kr(b);
    return c[p][x];
  }), l = n && Object.entries(n).reduce((p, v) => {
    let [b, x] = v;
    return x === void 0 || (p[b] = x), p;
  }, {}), d = t == null || (o = t.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((p, v) => {
    let { class: b, className: x, ...k } = v;
    return Object.entries(k).every((O) => {
      let [T, P] = O;
      return Array.isArray(P) ? P.includes({
        ...u,
        ...l
      }[T]) : {
        ...u,
        ...l
      }[T] === P;
    }) ? [
      ...p,
      b,
      x
    ] : p;
  }, []);
  return Xr(e, s, d, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
};
function Je() {
  for (var e = 0, t, n, o = ""; e < arguments.length; )
    (t = arguments[e++]) && (n = le(t)) && (o && (o += " "), o += n);
  return o;
}
function le(e) {
  if (typeof e == "string")
    return e;
  for (var t, n = "", o = 0; o < e.length; o++)
    e[o] && (t = le(e[o])) && (n && (n += " "), n += t);
  return n;
}
var Ir = "-";
function He(e) {
  var t = Xe(e), n = e.conflictingClassGroups, o = e.conflictingClassGroupModifiers, c = o === void 0 ? {} : o;
  function u(l) {
    var d = l.split(Ir);
    return d[0] === "" && d.length !== 1 && d.shift(), ue(d, t) || Ke(l);
  }
  function s(l, d) {
    var p = n[l] || [];
    return d && c[l] ? [].concat(p, c[l]) : p;
  }
  return {
    getClassGroupId: u,
    getConflictingClassGroupIds: s
  };
}
function ue(e, t) {
  var s;
  if (e.length === 0)
    return t.classGroupId;
  var n = e[0], o = t.nextPart.get(n), c = o ? ue(e.slice(1), o) : void 0;
  if (c)
    return c;
  if (t.validators.length !== 0) {
    var u = e.join(Ir);
    return (s = t.validators.find(function(l) {
      var d = l.validator;
      return d(u);
    })) == null ? void 0 : s.classGroupId;
  }
}
var Zr = /^\[(.+)\]$/;
function Ke(e) {
  if (Zr.test(e)) {
    var t = Zr.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Xe(e) {
  var t = e.theme, n = e.prefix, o = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  }, c = Qe(Object.entries(e.classGroups), n);
  return c.forEach(function(u) {
    var s = u[0], l = u[1];
    Ar(l, o, s, t);
  }), o;
}
function Ar(e, t, n, o) {
  e.forEach(function(c) {
    if (typeof c == "string") {
      var u = c === "" ? t : Qr(t, c);
      u.classGroupId = n;
      return;
    }
    if (typeof c == "function") {
      if (Ze(c)) {
        Ar(c(o), t, n, o);
        return;
      }
      t.validators.push({
        validator: c,
        classGroupId: n
      });
      return;
    }
    Object.entries(c).forEach(function(s) {
      var l = s[0], d = s[1];
      Ar(d, Qr(t, l), n, o);
    });
  });
}
function Qr(e, t) {
  var n = e;
  return t.split(Ir).forEach(function(o) {
    n.nextPart.has(o) || n.nextPart.set(o, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(o);
  }), n;
}
function Ze(e) {
  return e.isThemeGetter;
}
function Qe(e, t) {
  return t ? e.map(function(n) {
    var o = n[0], c = n[1], u = c.map(function(s) {
      return typeof s == "string" ? t + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(function(l) {
        var d = l[0], p = l[1];
        return [t + d, p];
      })) : s;
    });
    return [o, u];
  }) : e;
}
function rt(e) {
  if (e < 1)
    return {
      get: function() {
      },
      set: function() {
      }
    };
  var t = 0, n = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map();
  function c(u, s) {
    n.set(u, s), t++, t > e && (t = 0, o = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get: function(s) {
      var l = n.get(s);
      if (l !== void 0)
        return l;
      if ((l = o.get(s)) !== void 0)
        return c(s, l), l;
    },
    set: function(s, l) {
      n.has(s) ? n.set(s, l) : c(s, l);
    }
  };
}
var ce = "!";
function et(e) {
  var t = e.separator || ":", n = t.length === 1, o = t[0], c = t.length;
  return function(s) {
    for (var l = [], d = 0, p = 0, v, b = 0; b < s.length; b++) {
      var x = s[b];
      if (d === 0) {
        if (x === o && (n || s.slice(b, b + c) === t)) {
          l.push(s.slice(p, b)), p = b + c;
          continue;
        }
        if (x === "/") {
          v = b;
          continue;
        }
      }
      x === "[" ? d++ : x === "]" && d--;
    }
    var k = l.length === 0 ? s : s.substring(p), O = k.startsWith(ce), T = O ? k.substring(1) : k, P = v && v > p ? v - p : void 0;
    return {
      modifiers: l,
      hasImportantModifier: O,
      baseClassName: T,
      maybePostfixModifierPosition: P
    };
  };
}
function tt(e) {
  if (e.length <= 1)
    return e;
  var t = [], n = [];
  return e.forEach(function(o) {
    var c = o[0] === "[";
    c ? (t.push.apply(t, n.sort().concat([o])), n = []) : n.push(o);
  }), t.push.apply(t, n.sort()), t;
}
function nt(e) {
  return {
    cache: rt(e.cacheSize),
    splitModifiers: et(e),
    ...He(e)
  };
}
var ot = /\s+/;
function at(e, t) {
  var n = t.splitModifiers, o = t.getClassGroupId, c = t.getConflictingClassGroupIds, u = /* @__PURE__ */ new Set();
  return e.trim().split(ot).map(function(s) {
    var l = n(s), d = l.modifiers, p = l.hasImportantModifier, v = l.baseClassName, b = l.maybePostfixModifierPosition, x = o(b ? v.substring(0, b) : v), k = Boolean(b);
    if (!x) {
      if (!b)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      if (x = o(v), !x)
        return {
          isTailwindClass: !1,
          originalClassName: s
        };
      k = !1;
    }
    var O = tt(d).join(":"), T = p ? O + ce : O;
    return {
      isTailwindClass: !0,
      modifierId: T,
      classGroupId: x,
      originalClassName: s,
      hasPostfixModifier: k
    };
  }).reverse().filter(function(s) {
    if (!s.isTailwindClass)
      return !0;
    var l = s.modifierId, d = s.classGroupId, p = s.hasPostfixModifier, v = l + d;
    return u.has(v) ? !1 : (u.add(v), c(d, p).forEach(function(b) {
      return u.add(l + b);
    }), !0);
  }).reverse().map(function(s) {
    return s.originalClassName;
  }).join(" ");
}
function it() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var o, c, u, s = l;
  function l(p) {
    var v = t[0], b = t.slice(1), x = b.reduce(function(k, O) {
      return O(k);
    }, v());
    return o = nt(x), c = o.cache.get, u = o.cache.set, s = d, d(p);
  }
  function d(p) {
    var v = c(p);
    if (v)
      return v;
    var b = at(p, o);
    return u(p, b), b;
  }
  return function() {
    return s(Je.apply(null, arguments));
  };
}
function C(e) {
  var t = function(o) {
    return o[e] || [];
  };
  return t.isThemeGetter = !0, t;
}
var de = /^\[(?:([a-z-]+):)?(.+)\]$/i, st = /^\d+\/\d+$/, lt = /* @__PURE__ */ new Set(["px", "full", "screen"]), ut = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ct = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, dt = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function G(e) {
  return U(e) || lt.has(e) || st.test(e) || jr(e);
}
function jr(e) {
  return B(e, "length", mt);
}
function ft(e) {
  return B(e, "size", fe);
}
function pt(e) {
  return B(e, "position", fe);
}
function vt(e) {
  return B(e, "url", ht);
}
function hr(e) {
  return B(e, "number", U);
}
function U(e) {
  return !Number.isNaN(Number(e));
}
function bt(e) {
  return e.endsWith("%") && U(e.slice(0, -1));
}
function ar(e) {
  return re(e) || B(e, "number", re);
}
function m(e) {
  return de.test(e);
}
function ir() {
  return !0;
}
function L(e) {
  return ut.test(e);
}
function gt(e) {
  return B(e, "", yt);
}
function B(e, t, n) {
  var o = de.exec(e);
  return o ? o[1] ? o[1] === t : n(o[2]) : !1;
}
function mt(e) {
  return ct.test(e);
}
function fe() {
  return !1;
}
function ht(e) {
  return e.startsWith("url(");
}
function re(e) {
  return Number.isInteger(Number(e));
}
function yt(e) {
  return dt.test(e);
}
function xt() {
  var e = C("colors"), t = C("spacing"), n = C("blur"), o = C("brightness"), c = C("borderColor"), u = C("borderRadius"), s = C("borderSpacing"), l = C("borderWidth"), d = C("contrast"), p = C("grayscale"), v = C("hueRotate"), b = C("invert"), x = C("gap"), k = C("gradientColorStops"), O = C("gradientColorStopPositions"), T = C("inset"), P = C("margin"), j = C("opacity"), R = C("padding"), lr = C("saturate"), X = C("scale"), ur = C("sepia"), cr = C("skew"), dr = C("space"), fr = C("translate"), q = function() {
    return ["auto", "contain", "none"];
  }, Z = function() {
    return ["auto", "hidden", "clip", "visible", "scroll"];
  }, Q = function() {
    return ["auto", m, t];
  }, w = function() {
    return [m, t];
  }, M = function() {
    return ["", G];
  }, $ = function() {
    return ["auto", U, m];
  }, F = function() {
    return ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"];
  }, D = function() {
    return ["solid", "dashed", "dotted", "double", "none"];
  }, rr = function() {
    return ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"];
  }, J = function() {
    return ["start", "end", "center", "between", "around", "evenly", "stretch"];
  }, W = function() {
    return ["", "0", m];
  }, er = function() {
    return ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"];
  }, V = function() {
    return [U, hr];
  }, Y = function() {
    return [U, m];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [ir],
      spacing: [G],
      blur: ["none", "", L, m],
      brightness: V(),
      borderColor: [e],
      borderRadius: ["none", "", "full", L, m],
      borderSpacing: w(),
      borderWidth: M(),
      contrast: V(),
      grayscale: W(),
      hueRotate: Y(),
      invert: W(),
      gap: w(),
      gradientColorStops: [e],
      gradientColorStopPositions: [bt, jr],
      inset: Q(),
      margin: Q(),
      opacity: V(),
      padding: w(),
      saturate: V(),
      scale: V(),
      sepia: W(),
      skew: Y(),
      space: w(),
      translate: w()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", m]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [L]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": er()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": er()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [].concat(F(), [m])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: q()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": q()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": q()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [T]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [T]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [T]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [T]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [T]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [T]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [T]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [T]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [T]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", ar]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Q()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", m]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: W()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: W()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", ar]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [ir]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", ar]
        }, m]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": $()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": $()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [ir]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [ar]
        }, m]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": $()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": $()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", m]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", m]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [x]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [x]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [x]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal"].concat(J())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal"].concat(J(), ["baseline"])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [].concat(J(), ["baseline"])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [R]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [R]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [R]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [R]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [R]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [R]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [R]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [R]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [R]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [P]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [P]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [P]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [P]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [P]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [P]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [P]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [P]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [P]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [dr]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [dr]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", m, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": ["min", "max", "fit", m, G]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
          screen: [L]
        }, L, m]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [m, t, "auto", "min", "max", "fit"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["min", "max", "fit", m, G]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [m, t, "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", L, jr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", hr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [ir]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", m]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", U, hr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", m, G]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", m]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", m]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [j]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [j]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [].concat(D(), ["wavy"])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", G]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", m, G]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: w()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", m]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", m]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [j]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [].concat(F(), [pt])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", ft]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, vt]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [O]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [O]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [O]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [k]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [k]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [k]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [u]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [u]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [u]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [u]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [u]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [u]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [u]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [u]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [u]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [u]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [u]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [u]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [u]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [u]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [u]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [l]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [l]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [l]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [l]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [l]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [l]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [l]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [l]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [l]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [j]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [].concat(D(), ["hidden"])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [l]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [l]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [j]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: D()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [c]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [c]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [c]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [c]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [c]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [c]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [c]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [c]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [""].concat(D())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [m, G]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [G]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: M()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [j]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [G]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", L, gt]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [ir]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [j]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": rr()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": rr()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [o]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [d]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", L, m]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [p]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [v]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [b]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [lr]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [ur]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [o]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [d]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [p]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [v]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [b]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [j]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [lr]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [ur]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [s]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [s]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [s]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", m]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", m]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", m]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [X]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [X]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [X]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [ar, m]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [fr]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [fr]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [cr]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [cr]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", m]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ["appearance-none"],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", m]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": w()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": w()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": w()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": w()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": w()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": w()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": w()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": w()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": w()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": w()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": w()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": w()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": w()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": w()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": w()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": w()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": w()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": w()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "pinch-zoom", "manipulation", {
          pan: ["x", "left", "right", "y", "up", "down"]
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", m]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [G, hr]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
var wt = /* @__PURE__ */ it(xt);
function Et(...e) {
  return wt(se(e));
}
const Rt = qe(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Ct = Ne.forwardRef(
  ({ className: e, variant: t, size: n, asChild: o = !1, ...c }, u) => {
    const s = o ? ae : "button";
    return /* @__PURE__ */ oe.exports.jsx(
      s,
      {
        className: Et(Rt({ variant: t, size: n, className: e })),
        ref: u,
        ...c
      }
    );
  }
);
Ct.displayName = "Button";
export {
  Ct as Button,
  Rt as buttonVariants
};
//# sourceMappingURL=index.es.js.map
